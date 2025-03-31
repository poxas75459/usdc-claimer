/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "NXUTyPCY8rFvvgR4BoA5ZnH2ERNiQgisZpKu4f9ZMAFqHZe62NoKpsRgQKPpn2bzZFZ66KWeeJqkvMtXbkyZYCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJWuVdVTD9GrnUgd2mufW646wvsXNx2YFtEGMaRX1yav4ib5m2GTmQXcrYtww5ie6iJbW6uNNTQH8ikEmAKZaMF",
  "key1": "4RZAisn9XE6USB81MJCWJu2C1CCmc16hPdYr9tTuWFxKXd6QBmogqS662GGMyxeUFVQPNmuwPegrPuo75DDjDxY1",
  "key2": "4wEKkugZSZQgCSLK6YUbd5CiChAfbSmpQH18X9VQYcWwgJpNiKUaoyaKJzD1kJ5Ffpen3BC4mpdeYMAjahiN2uE5",
  "key3": "DXLX23raRdqEnPfSU5qXnivu2RhewTqG6HEjov1KXxWCp2Bhapx83y7iaxP64LWCMcGhHr7vWmDraDcvhugKm5K",
  "key4": "3CGv7C29GDVyFCEcxrjdPcZWzDBaQhPxj9BZhz38TzQ7vsrJ9oTuJPSHPt6rq6Lv4uWt4miLoHC4eZaw8Joqf6tW",
  "key5": "2L3vDqmRzL4XUmF4ycX2fqnF2XB1q8VnFGVhKXvvq5NB6YK1taPtScpStNHCaitaUNMwSi6zRLSFmnCVFU9aDjPF",
  "key6": "5ggzko5TK4zG8pcRQatAWM6z1Law9VjT3Ncro5h4DEccBGHZq5osLjsS4B3QppiGHwDqP6fb4qQWN1AyXNBhi9jg",
  "key7": "4VQDboojqVsjpsUMbaxN6ffkgXY5QVbmJsEfD2dc4PJARHC2iDhC6CKRdbyUSD8g9FbaCL3uZ3ia9AdDfpWoxXyE",
  "key8": "53eV3GuZ8sUGaViNS8VArrJUNcCaseX3VKZtfR2y9BAe4vrbgRyxnsCGKA6hUb3tnc3HQMjcU7mxEscNtn7uMHtn",
  "key9": "31nB8AZ3bJSSZJxRRuzYomJf2xBbbGRN6wuNQrExZB6UHkqByhufzARZMMqSz2cEGWH62DYDowX61JDGcm1oEoVd",
  "key10": "23sM9rQaH4y3XFj181EfvmXavpoXmDJNJxYNWkeYExFFFfwNRxVj1UzD4ujnzoPGofULMVKYzms65AgaCfqLzZ89",
  "key11": "5fPH2zXk8TEBUrTz9cZVGr982JMbU1EsSX3NG9YbhAyCd5d5TB16P54JtQjF1nj4BffDYT9girhKTAUAJ3JwA3ra",
  "key12": "93ynC7bz4CBrSBf9oCbK7TUuTgSzwitLCJntVawPPYZx3DvZ4TSjZhP1YUJCXK6iDSXRSDNoNSWu2J1vJTsSu8E",
  "key13": "582cgvyycC5bBhhhZdLn3s5j2NcoBgTU7Sff2xtYxNz7rjvRAQqiDXa3Bnnu4SnMEsZeyJ3rzYpx2QTYJ98zkBCj",
  "key14": "37w3fJiNRVLyTeh1rPUGimfaNJCLBWTt12Vx6do9aQrLUZehyDPBeTKTkLrzkXJ16arbWFXaPP6B9XhGXohUG4HH",
  "key15": "3s1Fgc8P6q4mazVF25HvAGvWm76ZL5he4XWJdeJtmKVwQkVj7WvZ2d5yPRDDAHAnpnmgA1M6chs8BRkc5NPCKreq",
  "key16": "2qVGK2a3YkKw5XKaLQvPw8gwkoCv5K33SHoQgPBeuAoDg8saDbQmn6MFAS2FaHEnjYqmG3iS5qmYLfeNrM2DyDUL",
  "key17": "67cSi7WLTA6YX2PrpWDNBGLdyK9vuuuibojcL6UvgSq1m9nRhkY1LWpb9QnE5PZQdGSYmDy3M4KkjnnjUCnCmhP",
  "key18": "5fLh79VLZ4L9TsBS6qfdG736ufx3LDEPCZSPa4omXQCWYUmfQyr1TubjdSMJDLNQE2BHpeNas3zFEJGAWwrWyBKk",
  "key19": "54vnAyi3c8qymFdTyVETiVBx7u1y734nH6ryZFKiEZA3wwpk59QgovqvVKBaykSrRfkWQL8feW6hYuLo8qQGDRXm",
  "key20": "3swWzcKtMiQ2Xjch5MQ7yEixWLpwqCKRmpnL4w7s5m5k5q54rXs832YLWgsLu6gv9p2AMc2nSF4pFAVnv5dnCTLB",
  "key21": "2b13Zt1j4gifmCSNSqQLUPnzRwymYSs3quEZX3B3RAwvoPJSJc6oabhD1m3Pdm75KoZkJGUUzxDJbCkuK974QdN6",
  "key22": "3jFEQ1cLG8UQjEPoW5TtvwZDxn13Ec7vgPQrtQBWm8bAVVd4QZ2VFAZC5kWhKfrsPibeRFNS61Dhk1UWPHcRuPmy",
  "key23": "4qaUpMfsTqPpFermqCQat4A2UwCRmiNo3TXdiQT1AcVw5XykGoKQiPeRHQcj87ynwWXgYNCmbaZttaMYsd2PSLyf",
  "key24": "5XhALxpGaaqjm5e9EBZXR9w9uLmW5AQ5graxkopdWspcBUqCRYTmsu9ocMB2MBWoejNmZME2yHLcRNymDBNvL71w"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
