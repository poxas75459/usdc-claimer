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
    "632dUsgNM2BpTwTQXyHjp9aupcUcW7EsZ44jtGw9PvtiubH3yAqBA8f1wv11odNkgsLGGF3U6dU3kVpmW5CGNMQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GurJNHxqMGPwg4VMJBMG1ZK4b9KLNoDrn2TK4SEnvtFJo2s3fZ3JsxdcnTu89YzY931HHa2nG2f6y7vqq99vrpP",
  "key1": "6ushKj2X2qcKp1XBkaQ7FC6Pz6m1vC2iGTgqNPAA15XELWumJTbbC4gie8CiFYc6SHJqAy2L3ioS3KQrUSJHtVa",
  "key2": "4KmhGCDaNVGjqGzvXaJXf6A16bCqrKeZYb6hHDDAXsyTGiY4aKNCVxKD8xvbKVLtzLFvvnCiobPdWYVR7f1tGnMR",
  "key3": "25y1dwebEhVELoLUq8TBQUAyE9QDhvFmTgen69Srxy4jWYG8XdJ7BEb3z8CyG2Mq5xLaEau8KRdqSRJZZ2JcgikE",
  "key4": "2vNWjkXDK5Nyz5CEFrqgdzFMaBKFahxMm92gXsiV7CqSU2goKozpX2oVVNdu9KUFYAnTXNQRdqri59YZb3ojyb1U",
  "key5": "pNkzk6Ns8nhyeiDtWXsTnrPTzLT6qT3QZAZwf9eKZLxoQTDLHpFQBKAbwtaK9w6VraWnGR1k2aBMDBsDjEKtEUN",
  "key6": "XQe3AjLj3wwxMZ4yWq4aYf62UCcAF4nSJrgVwvmEyeUFJH1wmmk1PZtx7LNg6Z6WAf9kMuQJyj6hGPijgnCoVag",
  "key7": "3FGSaeivWouF4Ni3TJK4TAN1gR5rZNuJbjY9JjKhuLdQFga2eRaMACFvH2aLJTWNdF5WVYdRAPSpFWPLVPevgwuJ",
  "key8": "4faeDM1arNcrLS8np9gd3fHvJjz1mucY8yLhbF7hg5jMBPMefpnk8L39aHJ9FaPnxtA8zCWJhn9YwtRCR77D3AzQ",
  "key9": "5bvFyi4KW8p7qK9FEMh9f6sFB1oumraofE1V8txgqexuTJQ7LuNvp5i25CDfCfhHzogVbGu2otXxc1i8pyKG56Zu",
  "key10": "5iUXLqm5dfAstN8fmZ7v15Eia8FYD4yCi4EaETsqZXqjY6npsEgJuderVog1JDm3n61JxPp4KvBzmWPjrQNymhR8",
  "key11": "2wFNTgGEZ1kWbGgebL4AWXUqh6umC3jFwMRd61sEitedwaCAsiQoJ5BnnWZVEbsZ9t312za2ZeohaW1AoHST5T85",
  "key12": "4Mf1JynAFSJUF2JKNh6taRp3hs7ehWXn6pJNdau9KFuUcPaZA1qUknMX5CM7dMJZ22dGs9czVTUnSKB4rWvk3K9H",
  "key13": "HY5DzwnCHbDoLgfF595sLsdf9yz5qykWwsnGx1vUfQ6zcaCm8Hft49YWP1qzcraRfJUEzBgFJT7i1mp6BQ7ZqGh",
  "key14": "3pUn1QzWWk3NLWjmNCV6QtLC1EAxi1vSxUJccu7ogVBixZqwKhWATmeuWbEHLEwhyVcc9Z9RxgeigA7wQhTqciUK",
  "key15": "2Q6g38TkDeFxPDzBW7qZaEzBB9aQpPP1PX29VxqTsNWuT2b26yJwP3V7QtfVspoV1QYf5vTzVHqkffmL8gqLczgW",
  "key16": "U1niw7JxcCALLE2ViwXcoTaExg4k2PjQvewvy7kJDfZPvp2FQwTPS5LwMgHVfHqM4RTabUBoynLKuTUd7ygvdhT",
  "key17": "QjuzoPbkxQJ4mXtoJYkqFEggEhMGrhe8kU9Ko8ERQBZkWPLSSoKHYtC6vmb3WM3wpNp2JfxGua6vG4AoDoyKjfj",
  "key18": "4YnEMMaJnCsvtjapXTHuNRVKeywdpMWGyaKFz63kWEYY454C66VaPpuuDFoEdtkasgW6eP5fB81ge5oYManR5EKU",
  "key19": "2vtMK12jsimuoe9Mv2ciMX4sU8DFghwWCq6PjSfH6cytpvpnuo4k4dFhTues4mij1ZVp7WCmAfZRrPs61oBfA6q9",
  "key20": "5RBdGzf3WZFuGwaTPV5uUXYEGu17fSV4onhPSR6arx8N9LQ9KjuYobNiBqw5hqUwGTb8Lboo5TPyzbunrNtF5ud2",
  "key21": "wwxUrphMBeFVXreiqMTcaubEuvL57kQa1KdSS16yfJ2dCimHCVUvcuadsUWe35TELccKzkTUwpoaEGmEpHdQyYV",
  "key22": "ZZqN3sKt4E8ZqYHgs9ouJgB37m4Jh81dyAa6E62ueWZwaijrv6V4fJzzMUCxfV2xWpSurUH5VCuaT1dtK2vmetD",
  "key23": "2HFLqVgvnxkkGGLhtoC8ZXvBHdHtcNbosV71nQdcjApocgqgWSCPePSAiKHWPa438LsLvqb54HhN5DQMAo6YA1X9",
  "key24": "541PzzjKzwdSKBQNUyiNqFXxgLeGoWQivazv8Yh4wzq1UdqHJDSQYmbRyeEMMs6PDKJjiCHdW2dnuM7rfncwumsc",
  "key25": "2DvDAaNGXwXSLkLV9JTbHSmBaruZtnNdgaPgYbvuLzdz78yjtp7ovwow1MNrvtMf5pHkmgkoTVC6Vpp86Jj8ryKi",
  "key26": "fiFZVgBSmpkhd2Nme6mju9mcy9BG733AHS8wWBdBvHLFuGBX2ktiJRPxybSNGyVkmaumN18PeQK3orW2Vj24zdA",
  "key27": "3zj3XyKdH8arkej9MGWQ6dZH4GSVQk9T2FdeKcN6L9gEQdDTy3wR3vct8Lek7u4UcD93h2oCx1c5LADrG47PExwj",
  "key28": "A7M9BDcaNMTtyTCSqRivSYJcD2fCE9hodwePeGC4cpoYh28UJBLzLq4CNfrG7hyXB5A6vaEf7W35Jzj8jSNQ7Eu",
  "key29": "2zbU1dtmt3DJYfpmRRPGPyCRKa9YVnJJLyadNGLqxXfhFyai1Mz1KGL8YdDSFTxQqhGTRKPe28cnD3Nfzs5ND5d9",
  "key30": "52W7qQA2gAoZxBqFCGv8FegYj5Th7HyofgTSovUBj1gnt2T2TMZwqZFFeeTvj8cMsifKH3w22W9qK35PyTdzh4L5",
  "key31": "KNidSHAkuTqNNWsaACVdWunZn4zcdtSRtxf92QBdZXPQ5Bx3a5GRxLGP6ZVhRrD8gLTKeSLJfHRFXuegtKZf6q3",
  "key32": "33t3crC9yVbgo51yFg6gG7AgNEzvgScKuMmzHmphDhCkVXkaThhPXg9nwjTW3VnDFMwn6oVrURvpbaw3fT1MU2JR",
  "key33": "3fvfBXHq8ZC8hPn4HhzYXSTknkU4n4Z6X4ejCfkrwkRq4cxh4KDeFYAriNnkuu1j7W9YLXsn3ih3XFp6bBvMfJFX",
  "key34": "4iSCL2JCKtWuMX8EVd1e29DcJmRBasJNJpz4zaV9ityaiA1cUmxuJ94UxGmuTjvGAd5UevAh2ymWV8DjZnKddrSx",
  "key35": "3RwX4PQs8fs5b5mJ6BQ69XquGX9PvRC7X7ZykLdXTstTaDeJ6BeXEs6pcQfL83HnZHgCNkGPssGAVAYt6oicnzE",
  "key36": "3PdsnjXusjuVSYipMwxR76NSw9A4VnZqBjXE2ykypbCs5zG3rmwV2x8yDWuQvCgcAfWgDTuKNBtqqkv3QZX9RFCt"
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
