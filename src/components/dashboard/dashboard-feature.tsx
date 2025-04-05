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
    "5oxFWx9A91FUnCTuxaS2TRsQ2fzT8ftgp1RSb1sx4xtCFSYt8auRA5Jk1LVZPX4GVHezhC2zz99x1mXBknJk3ntV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgPKTXRrutXjKMZ55CJBBEp7gbUNb2XYfPe2XkMgwgTebMLJidKYv6z7CYVWamv4C6rtPU1AyN2jSqTG6Nz1VBY",
  "key1": "4a8p426s6VdhrVgJz4r3U7WjUo3hj2eCzFEDQerL7QLnZP1T6dEtYKcRA72YrwxjVt1iHtYLahhPrLQK7zxyzPaY",
  "key2": "48N4mSbdb8zmTgYgquQstfNcxVDTPVpKuC2prjkYiuPSqxarAmeJGmbRBMuQL2PajKq3ejeskFeF4W8daTcsCCUH",
  "key3": "5sH5DBjxnmKoTN1XKKuABGnBRww58J4H3M4uVnLJMT6Ddnov7obQRv2LFMHntsohxPeYZFSmcMhxqBw43pKLysZw",
  "key4": "2DBQsJmR244i1ah7K59WZMkQYAg1qgkt78cRYTXiYxbX5CyGYbdZqHKSwktMi9LyLCcW1ECuf1Etcx1LcdHp6GbD",
  "key5": "2pTL5RyA2khSVC7W3TWD6z91C7LvgMQa4QS7Kj6AqE42RChbDz85rgLA2ysGKn9aCS62ivcwrDtwrgL8mMCpSpUx",
  "key6": "2r5nrtbNumBzBdsogZCMNtqeXJkskngPYzvDFbQRnKF2oXBSim7brZwzPCCV3swPEc8YdYiUdDx54k7zpBXw7BHL",
  "key7": "2Rzqh4HtJjhFPW1aGfxh3hu7zzfhhEaQLBiQSc43gurWVgxZ6giSieZxC6KDhvZXDsnsRve2Sh75RjSuDv2EW27H",
  "key8": "sqZh2eURaTqrxLFWqDpyzUERc3NQk1BWpqh5o9FaJ6UkrkjqEVvEhmFZUuZu4rPL1MqKRnb7uu5LEQPjFaM8iSu",
  "key9": "4XkZehWVaMoFY9mgagbwVs4SLbYB2whKYaFgdbb8SUDLPuYRG2WjtJmxbBS7ZfpSN9o3hLg6x55cymnJDj2CwNEq",
  "key10": "55PHbrdXd7T2N1gpwfgenssvE9U6xc7HEB3P3Sm4DfgNUVKBpHjSuPVGsPr62RzxXwzFDAJRBw5F7NZv2H7b7tUk",
  "key11": "51Saq1cNhbwLVKhutR6cYHq9cUjHdGGTZALLDNj18BipwjPtDmi1Nz9Tii3ZMmdba8cjAFAR6ZQ7J1mAbX9ZmHjb",
  "key12": "49AGPJ3qVMnkfHXctEYyakQCuSaWR5GBgeMSnBTTi9VdorFnKci4mZ1FsZXRNLZkRJ7LH5U5Tkz6pxLAmyWVA1H8",
  "key13": "4eDNSo4iqtSCNjTb5r89yttFX7nMtNoefg1UGkfHYkEPhCiqVnc7XE8F79oiVRzNCMYumaWyHbCiRWdtdwjNPNYr",
  "key14": "33RTfJVpnYAYqftTJyWSYU7gRjovGsqWtE5WRxgWciXXDayJYbBLbXZKiJM69B4HtX8pWgq1ssTQvFEGXtKu8ATK",
  "key15": "4cxNMqZbYkga2cXq3auqUvYzzqZifYK4DhqJtFJsyERYwRL23yEPfT4ohnvQVgjaHz27rgWaDWbCxVLFxVGUgohv",
  "key16": "5U7ha7XBGV2a6FfSwvF2kAQTyDdq9PY75ZT2NZxWgo6P6Nb2Lckx2m8QssAjDaBg2xQqu2QCYojc2aQmYp2YtHha",
  "key17": "54DGrisu7iqwWgksJuuEyJfW8qtep9hhbY8gdqE5jaU5etVoLhArZCtAxbW4JQiAX9GrhFwvgMxpdwrEsMk8R9T8",
  "key18": "3kjfQs7acrQY9mtxBi4ZTthMxb4o9zRLMpcownS2ZwjGYcSj8wPxN4ii8NJ5LXQapFuCguonsqGCTy5Aw6LigD3D",
  "key19": "4AW7bHZPcjFgi61ReyxN4qaqKFb6LgnrxVx22xYk4y13Bg6QG8Q45FE6HaRFc3ExCtT7uSJdMSUicdmWkYKBAcVf",
  "key20": "56Q3dfAB4DuQEUoofooaHawhdRqskPTv49C9w5QYXuUVwh5D5SR1gEKLK25DoLXnxZ2cEGx4vCJXcwmLsJrvKr42",
  "key21": "z2F78RaQQLN3jTbVuxYGQULJHn9E6xrZjKrmQX3dm5Ei915eD6bEjM6XFhSb2U4WDeFHmuYCetBFjmdD9fGxZxR",
  "key22": "5uKmJRpH2QtFVuNb4rj35L7SxEYmzwsz5RLCVgpMF47G2PcUPpbYT7Y85wbtfJFHWLRFeYLo4Eh2q5UNuzRV8Tuh",
  "key23": "56KmS99SVL877sVb5ehzv5WgvD9WBvidnTL4g67CRzpi9VMeYu88yKaoVZagydXcrTceTu9CJCWwGuiTkUCwQd2b",
  "key24": "F5TzyHVhXZzWKPeJNLqznRWiQmFguDdqMdmY8LLP2hUrQdiJMjMhuQXNa2K4rhi4VqcfyrXWtWgTXvUBifg6KKQ",
  "key25": "3zd3KtkKJJRSGyg9Fc2QJcGhHV1L9bAT8SjGNeiTdYXuxo7v4eiHKJcfEFQES7maJjmby8VFPNRHWj9zroTaFDCD",
  "key26": "5dyTzabp426TpRYA7bPTJF8DhdwmrJADqmCSGLdEChykQ2gmXFwD624QKksMVVXfTCNgSisbMJjSTEKJfuiahVp9",
  "key27": "47SDXkard8aN6GvH1DsqtmwjwThCGJt1YY6whdYkdXEPgrG6QB6mZFpHMxGqNRR68nKaqGyyCb3eAC5cP671xPc7",
  "key28": "5tfYxhQtYfKNmwRrS2mmB6spLQtXVTmjE2fpU944FeN4hv6v8A7x3g9771PNuKUwYAKUDt5NvTTRarKMMoEUpXEK",
  "key29": "2BL2Lzy5GGJe6xMHGzeQPn7ZZt6zfpSNqjW8zb8btfQ6HEXn18SBgK3joroCwDdMxsKqvVkSMYRpP5cJMjgZwwNC",
  "key30": "5Uu5rFfVBi8ouVXkjBT2FgLaKqPqQSoYGB6Y2VcHjkjMnsmB3CXMobshRPbUYRcJVfosY2QRPw8dqaEEe9FuvhPk",
  "key31": "2bauSREna52REDqeQfJErtH63tinDSHiZ54vYY9gYphr2t5qVpyRJpgLS2bhAWQRE5LRybHcGL1Re79iLqGpDgkJ",
  "key32": "2wNmvwdcu7wLtsyuQY3mqfQfnjfgwW6M9cq4hq9zgC3jiCGzKbZ1Rck3ByBTTPjvPZHQVLjk7cT2QPWd8UU117QF",
  "key33": "3NCSeQJBr85vDgqcibFFVnHrCcWxDAuouSJzfFEYU8xzxH6nXbbgDVLpTbiQQETNvJ6faMRvhuwmHo2ky6jGWUtJ",
  "key34": "5pHiY9gb47xNYjksYC2y6QWTzQTtaixg6swBX2JkARXxujSzhJ7P13gE6qTzpbohJzvyhmJd81koCmyoZ5LVqYaT",
  "key35": "j98odLfS3o7kKwJ4KW6zzN5qgGGrKKCjgdkrMf6WFKC1Pw1rN9b8Hf53gCdBfVE51vKLvc1ENcf54xMJZoTLsSy",
  "key36": "8Qj9hAgaznTQDTCi1yRZvGKmNfP7sdfYWB2z1myRK8oNJug2kZandAxUc6Rpvsz7hNk2SRCmHY3tYMZrc4J2qsP",
  "key37": "46QC2TuUrHrS1JH3Cr9KaK5ToZKNxfLNUjB6zmHQF5CbaLbRTMLmhecg3HypUZEc6YySiTFFuyomdmwRThP3hnsm",
  "key38": "2w362udgNPNCxteRuDsS7cTTG3P6DxVAw8uyzjMqPEWAPjhKDRs5qeQVTgC4J2aeH7GTmQ4HPNG2G3qB5tTJ6nev",
  "key39": "uNtCCw3eBTB7k6edST21kL1P9yoRLkwcHgx56sA5fUtTeyfB9iTxRdYmTmbN5DbPBc5cyFNMo1hG5gHGhKSouuc",
  "key40": "57nZuJrdQU2xXS9wYgWAUfoHn9abqpspHWL29EAdsdr4DdaEE4kBkZhWviM2wFujDPTyCAo8UF5cNhrdVDa42dui",
  "key41": "pdWkaYEHwPv2SXP2w8dfTkphLzrCREyWCZZiximTusetMbZehtuwE76oEaJeidKf416EwKbobqdQT8Bw4evqWv6",
  "key42": "agxsfiFYCCMLAigaRCNmULHycoEoz7akCXXhZZYiV3eAY76viBTerdQUiDRU9gLYFS2DSp5PMJ728b4XsjL7Rv9"
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
