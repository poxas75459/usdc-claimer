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
    "3GiVNGBqhrdQiRffRPjAqxEZDVJYX5BCqe8CrPdVunpCWrMQ6yGjxw5vmULZLXcEixNEVcBdPKxhaAVmVRTit8od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NpbykUp61nkHC1Qh8uaNvWrdHX9QibxUMNWx5KF8s4Txnp6C4f9ydsJgyiFHd65CzmrZSU8t6oCc6HdKsvpMHV1",
  "key1": "eAX1aSqRu1ZeaFcXE3M5YTPVGUNrVJMdbrTHJjTDMdWVY7f284vY46w6weBmAeTswG1kCDqoLBFcMVnmjzMCg4y",
  "key2": "5FdPzLMYbVCFo1SRo86eNp1hX6wRGixkz5xbs2V3N3diR7ZqVA6g1vEmioppsGL3TM9shwyTrhochVeeRxMfPrVG",
  "key3": "4Gavhs2BjgsNBzanDL1H3voakKucgzhYMVXJNSiCNFiEouGTxkq3NXs6w455CAZGzGRpd1YnqxqFFyBGKoyppsLd",
  "key4": "5VqZsmQHh2G1nPWU3PcRHpq3hAWdJji6DSYwftMBRiVD7uGApoRQmq8c7BKrAbkCkBGtnSStz7ANQ6G2R1QaiE1J",
  "key5": "PwjwN3UuEDCRQYB8v2etWxHLp3cmSKKR3ACsfm3v3ZLsSAETiuaAvY48ZrDzpCAaHefDTXhkv5j6xRpfzmBMx4Z",
  "key6": "2NEv6j5UHy7BY6QNrpbWHpQgdfVm7k1Umt2QgjtWVdGjauUyZZtTVzxV4XSSA2jfUXncrTHSDVL9DxsSRmT3pnu7",
  "key7": "iR35X1q6yKCbVbq4wuJf7t7UDJUML6RSActWm51YME8Ep8GxrxEcRyKp6mXPpRp1bhhHGCEqqmLgGzjGdqWUKT1",
  "key8": "3KhLyfVw8TxkPpWs8qLVg83JUid1kscvjJrpJGujyesRFRvXjzYYhUmy3USjQmBwPDwpv9thegBmp8PZyJ92WD84",
  "key9": "44bmm1VHxPVvFjWm6jDBBQ1Sfgb7PGCujiCcXBeMVnAKbAU3yF5kimxWhpW5LG4FhgavmxuVaXyQvpiMA3iNrQcr",
  "key10": "4i3RyXKxdN1VLHzU6C4Ep4Uv4AvYPH6Ee6yGNeEhcv6ZP1wc2paf6mxMKzEvwbAWASHkuLu4aEZty62NpsCLo93c",
  "key11": "5smWU6N35xe2pChjZfL2AvuUE6QRhoELVTF97vg9TLMbzWFwjhVt5xjNwUSNykX5ZGrvs2biWoSQWtsYaiiQYy3s",
  "key12": "2BJ1dCXjtQJvT2XPuC7ZPMzHaqnP4zMCPaAoBrck8YAfaLn6uXmxbekKveR4VJokH7okgCY2HVwWbV5KExTzmKbo",
  "key13": "4rvyWUmSYrFVmy2EPziYiq5o7aDKQp9fvzktTNQRK3vJax4ieFEvjZdKFbPktTmeskz1Q1PbPtHyqyutbfiMaGsZ",
  "key14": "5Rehj7QegD4ny4MVQFPcFgtVfo85Ghky4z5UZDCXioeiLrWNMdYuzWopsgGHNaq5yW5P7zDWzx4pnp7BYXrZLtD8",
  "key15": "5VFWAmPN38E5Qk3R7s7T8WUh2yJdgoYerVZB8RU5PgXYX1Tosix6ZfuSBa9yxC77gpk9q1VSRMMXjgWxbqT2V7T8",
  "key16": "95PNajub4EfNGctA4RKqmRZoiYyWuMNYTyTxsnDixaXURuxsGUdDMdrQL4mj3nMQEB3ESTitrvBLhNRMrtdqNQ6",
  "key17": "3W98WCL9JBW1sWztb4ZRvyFmvjSMBhSkC2UoomnWS2Pvrq8KQkUhb8z7ZTSgnJ24emmAC3P4QQCth4ZcA4Cdd8JD",
  "key18": "3s4xajtjFM5po3E1yyPUH8qEN9WTF8fmfBRTwNeBANigGLarptmPgp3CAYFAvbjMMe6B9cZotdXZEp2x2oHAt2gi",
  "key19": "4bvjphw7yqncX6YdMGALKoZQVgZBmSdTneZB9Rb9bcMujbSu5cc9LJDFYfphcjRXRogtymRy2RhTeh6gMkS5h4od",
  "key20": "wTRiUWbbTR1tgWxHcTgPiJXR8PyCETreJHaB3YsTQrybiDGT1t2NSB5aeS7dX5f2122RfJ1413epKbdUHnWG12h",
  "key21": "2hgnDsEiaQisiDcB6FFbknPLuoyUKPqtGry4Vb62kHCikaRwcXppriMwdGZRChePgfZj9PVigSxs5oAg3SGR55pp",
  "key22": "2DbyMJXuqBtTgJiTQFZvoCJ1gTA4F82WQmLjNMsygJuFzxaDz5YAmoQPTnM6kdjSWuhnrgnr3DK42WgfLRJRUfRJ",
  "key23": "2VSLdMgQmJf8txbLUEu5dhb9QvDwr8UK29P1SgFUJqH7AiDVw4yDonJtrcnaVLHtiEFTrWh9ZxMKJsUwnQkDxut1",
  "key24": "4qnVpoTgJ42cdvA4z1kKUbBaBKqzcwhocu9acPzd6tcqNfCYBEeeqiLK3AxKGJgYVca6EvHduWp2MY6ZYRWYAknR",
  "key25": "4A8t2wc6Zvxnin4xQeoKpiP4PD65VAsHCNWHiAgjXREjmYfC16dGyjfAjVFxSW69dWMz3f2uPPrfu7F9se9TysM1",
  "key26": "22KK7N4586ihEx9nB34fAdnkW441LCt2xAd1u2i24PN4wvgd2fQDUYSFnmNm82VPadUqu4p63es9qZHAyuNTPH6u",
  "key27": "4mcrCa8iyehPRTdGU6X1rSdnWvLnKrydEjaEVPHTRY1XEos7ZrZFkrb4tg15Y4LJpVJNTPH8UjBgaS3Po7HSUtDM",
  "key28": "2HJTA4Z1AZrGXVM4qEVwPsAjhqkbykUkP3nAMF8M8tjkoF9iAzXfNLUnPxCDw7665u9WfF4Kgys3phEiGvAdqkT4"
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
