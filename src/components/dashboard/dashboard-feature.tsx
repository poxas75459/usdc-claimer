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
    "5cw8BycxP9rWQJivswv6FngsmixJPoThUD8fjnt97buhqtxZqzSkXwGyXnnjhqce45eJGELVBuKXWFueZWEwuLpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LRg1wjef2PvCMopFWYpk4mRQfccwnzXYofFsb8hQfKysit19RWtiEyzS9PzASCPeaSMSuXJCePRq85cREdUj368",
  "key1": "21SsjvhvMm6iQvo4hsWBDVwvbqNwgQrtkRLzXXAUQahNvzC9fjCPsMpcVT34XRM9cY4RfEby4s9F6b77RjRT4VPn",
  "key2": "2erEP1haTTX898xD94prgrxFJKTjTkU7g7hu4mdUJEmP6oZgnyZYCamydUucMPicyvHYMoJ5ycBN7GPfADAjpdD4",
  "key3": "5CeY52QzepCSwa7nEjFNxy9t6oyL5tgMQ4WTp7xsYpFBcSifaqD92icb9LM9VhnToAQ8yuVwyyTTjyXcpnDf7WgR",
  "key4": "3TbQ4ysKeqSwipqmRD36urto9fGcQGZCQ98TLuY6rpedQp5yQEdJd9xFrxjxff1tLrmn5k6SFGJsHpPaPbM9fX8S",
  "key5": "2QN5cn7Jzifap9qBiJk562GB13SwcvpXEUWHV3StdMBTEWLYPh49apAps3TGnpMds25zqSKcd9vhMVpVbYYgDsCy",
  "key6": "2z5L6iJVdoRuizerTt87VkY9friJp7ZN9BJy4535S52QgrHW7Jebu9Bh8fnDW8dNCEUcx6PPULyjZGB3PL2fMw4S",
  "key7": "4LadPUVAbNDmn8zPNoQGHBWsSci2VG1JryWS1tvHfiv8VnFANDgZZbGMYsau2p18KrMWyXWHqzxttgXm5Fnarixf",
  "key8": "5hvvrtDumdFp91uSpW2iKs48ajxmoGrpwYDDXyNnC8YMPxG4ZwFPUrGPLPtgiukKuK88STnBFmWTUC3pDNJGoumj",
  "key9": "5RwCokaDXhAX52zRR6WMKzth1DNeh4E5QcLmHAm7UhM4g9wxJaEWZrSAXeqqzUahhwgWFWnatQbhctiRWVdpbeBx",
  "key10": "ZKoYpwH3vJRb5prUaFngS6WnEyDmjRajEJdZNjymiDQhf5bLPUrvyR7DwgsoLbyXn9AyWEyNBKCQsn3dGWhtej6",
  "key11": "5ic4vxY1NwkRDEJhZCUacLcmiJUnkAkze8YkSCxpmWjgFycB8WigJU9Xa7J3jGCPnPWzXTP9GxWGkcJLZen2chUt",
  "key12": "2ostZ2di1qxh8tkrhkx4cFmhT7RQBP2pP1o5m8JdT5ETUkXFfU4CQn5dj4eLN1QMgiAKoHBoa6MsTWvHGNKDiAJ5",
  "key13": "5MQHVPkfVJL8AkAdu3fkXQrygAnT51UMVBWfi797tcDSHSyrqksrUYZBd8tgLVUGMBTu7BhvjzYpMjg9VHHyYh7c",
  "key14": "3Dz9Ykvmua3Dybk5wTSu1pWVp57G6CqhHHQdjLFztfuHBDMHggJXmZfLxGAgf6rZX1X49a52ArUDrL4vdhfye4xf",
  "key15": "5k1d8qZhaMZkEzJoaDBG7vZoNtcEHQQ9ja6QWfWxQbcsseXbs3tChjcXQHnsUiubce81shke28MfrK8vX7ouEM3",
  "key16": "a6yPDeyuKifePjuB5nUyiiSyMToLZQR7JB7oFZFqiXWh3WvsLxFLGHw3nzf2YZDf1nTeaZDvCdy33xqnqzvoLxP",
  "key17": "2ibuQmymMfWkRJBuwyAfLRQTiKcAQTF8Fgiv4JYjuHujfXGZkKKh1jpszQfPBqRpfXNQR5sJ9Pmf6Pvu2VMtPpRF",
  "key18": "43rkzWQ5EfASWzBQR4MGGetGbESVTjgwcxwkNeVhx61BNGUkCQxxBeTUvsMss8BGkFDCqqqknomb6mk4Mt9aYNCk",
  "key19": "43h6k63bMYQT5fanrfcw6rMgYL9LhkfGp6pEazs9TYeQKPvDiR9BcTuevXYftYCbuNPtcFRwjDnP3NKgbd9ukehh",
  "key20": "24uFHVXTqFg2pmKa5575PAAfLRL1n61aSpvxDZHtUUY7Y4V6H2LMi7eQd23kXKrQQfjQRVSH8QNPFBNm7GNwBtYA",
  "key21": "3XJa7ozH15RjrLM7QsqY4zXu97xEhWDg1bVCK3Vq22vSu7cHY2GmyLhL5nrnzxTLoRPsK57Sb2sT1Nvs6MRScSWG",
  "key22": "2gUt8ugkQ8uyJaSWkbnAqKy87fhTMbMtHH1K1ycvhSaAiq15qpSWAikJyoEFCf8hpZAYY7ammehTuTC5bX5RRbx6",
  "key23": "Yo7q9Vg6RJgwb7Qc1yp4zNPbMGJ2ubXvC31BZAadnZpVwHYDV2zzb4XrmMfqiEsui4KyQjLA7A8BG1EuTWmFm4M",
  "key24": "4TrbRAUWX5St1e7FWtURUtJtPfzQ5RAarnX8vZcz4ejKcNifgkLBPxijmPmXwK7QnPxEM5tBxtLa4A28pQHRQtCs",
  "key25": "5UKRsLiD68p7Hdwhjf8Es4vTmf4wkWUZLC9CZvWGCsMgM8WvdZQRUAqvdYBXNmsQxAQhpCwBGZPLPGGj9FGAb77r",
  "key26": "2xpZUPmgsFqm67VFpKbDqQHGAFXQK2dGx1fXConFzpBH2d6Kw7W6isgeJX6QmsSMxySux2PBPLaZpoC7s2cim9ta"
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
