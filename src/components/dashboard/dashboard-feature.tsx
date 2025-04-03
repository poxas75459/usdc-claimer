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
    "2krrM8ngokptXGeUQpCEv86g3CovT8vaRsui7zygsHDg25wLZRtZStP7MnQ4vCMZakFpN5ykrN7EScrDk83JRqrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQFuLhoat1zUqRUj3iXtfdhbtxDi54dm2LSZNPPzZXVMaRQUUMAgbqocjSN2KYLtrnzCd2JcD99KPvarjzqLfof",
  "key1": "3hVQKK2LwmTCwBcWQAPGfD5LXu8hZain4jgrkqzvMPX9deirMcN5HhmBC4q8XpBbvx7AJyYapTMRJCAzeDMURHEd",
  "key2": "2JW7RBSRK6jVko4UnvrMojmVnDrE8Dhw8GmFHv2zrqHRaf4SvFb3zxzdGfu1hHopSiedNjbZkc7wRTbEAyDFX7R3",
  "key3": "2cj7MJfjCXARVjn9JhryYTrVhqoB96LdznDZoDq1ssWaQTTuCc7iVTSEAmwEv83KffGdnwvLEYb6NoMHfuVQTxJ3",
  "key4": "W9163P46uBeinvWnfuLnSEz4mEt1pbJvKBrKdTxcjijWckSTAuEcE7XsktuaNniPwsuUUp1kr4DMZc2EbTLvNt1",
  "key5": "5FTrSdfQLNSHfJHzX4ZtHtjEwx8KcQjvkpQ68vhQjThv9RuNLzhFSCXQ945HPGFCrRzjjLUDvVvs6KWUHcQn7Wea",
  "key6": "Gd5RRJMbFHYf2NxQ1oobsNwimkDZxKgQmXr4gcbD4Uy6uwa9LhETQgzgVtTSz15mshCgTU2occLtUpeGPT7mLHX",
  "key7": "4j45QpRq6Aqj7p5wo9zUq2u1oLRZosPK5zVSf5vrcA3vQGWWZ6Y5WnY7iqnha1MCibFi5CTbc3vyqw6V1zWaonyN",
  "key8": "5zthn92HkiVnTdQj9SzE9dqrrMcSCzTDDowA4HmttytadVfbSWq5W8wNpRRBTxZipbwvKp3E1ZS4Aof65D3AfEGV",
  "key9": "2qpyuaofTXciWV1box6zCaSKqUszfG1Fem9F6Hppgwr5stxGPivCj1zt3cs5gyY4hPg9rYjLq92F7bNqP2S22fs1",
  "key10": "3T4o3Adr6df1wTyKkjUVu9yEknD9KQ7Fv1pCBUqameneCynksvs8wutMs6rEpN2ptFSrV429gh5gYehLtSbHskoF",
  "key11": "4XHMBewPQ5PdDCdQA4XARYea4mwR6h7CaCh8w9iUCatdE4i8S3GtqaGBioGtPU5C34mBQSBUT2GdEHLuUCogm6k",
  "key12": "3YQeEYpM41ScD5oHggsFdFA8Wg5C8kBW4M7YRCEP6zDkWnDQYikqyBLn9tTWJWyRvWbGskQUoW6xa3pv28nGocGv",
  "key13": "5ntpkjwSkM8W4HrgtwPxWgVpCXyEQjvGaPFqnrZt1BoUuX2H6yRaozhF33BTLXqC2Vh8d851dYsxM87wp3LfyRnM",
  "key14": "4ip6N7AEhPLwJXzYvafXwgfjkbSTarenpBvYDDndRLbj8VyLdDvh5eZBmY5oXf9fxptK5KjiLkhXdYXAk5Ds2zLg",
  "key15": "46wetCgzFVdyitagdvHUCcxga5X5g51qi6HtA2PGC7jCNkyrhAHVpw4UHQnjzX4PhsCgqd5oJVp1LZaPk6bp13fY",
  "key16": "4JNyEQsPKYGTgvwFNqocD6mPSWkDRDhXXFtADBLTxTuJKd8CiFKGFgcbAhyaUxTu6aCQMthFmHV5PjBFcrF1wrHv",
  "key17": "32hW1Rd9uTsFiAy6v27H5kvg1fgwR7nHa8eqJ7pzzt1KiHvJQJmueR7UumF3GRunTVuWf5KUyPGySg29jByECL6r",
  "key18": "uRm4Sr8ZzAWfHUdVHe8U5D3pSeKExp9fNnGodJWAvprHrKzhcSNvCtnL57y2UgXEaFBv4J3UvidYtmB1q3C1wXr",
  "key19": "2PE6sDNhfLbGoBhxz1UgmJiGF7AGK4usY2qbJDSSjaonjUWU3jFQgZzMde867K16wEF8dxKu4wpezHheK7SkgoUS",
  "key20": "4JD8zkAK9sqvFswShso7M3i4NP1PJ2oxhRVwF7yiBHjF7uhPwHDn2aDAEMkyjzbZva4ueo4XkPeqPomfX3yXFb5x",
  "key21": "2WM3ykeLQbtjLBpnxAdypjy6J4vr4DdJFBPiZuZXt1FuiUZVUpEPDv9pbpQ49eXgWsbbEgXMUJwPTNoQDCdgRMes",
  "key22": "BKN1Uhi4gHnpExc4okekPBuAnArAsSxyxsozhkxRiPmzEbZeaQgtgZ9PBisFzXJK78cbFm9CVzBikjEoyxCxsgM",
  "key23": "2uqBDaqgo3VjVg4ffS5Cjd2D78pmwdCUMWmvsvCU7uk3qsR7NjguijaDdLij6eL4UXCFGbgypzkRVdJGcpSgRNVi",
  "key24": "2QveFLagvqLq56qjZupwfd9tzWfxXtrFQz5ti6qydG9Cg3EH6aQfMMFr2hGvDKCEsfkkN5TnbDvWuas1aMc6xDVj",
  "key25": "2Jcqq4yjmsaC4av6bvkDHJjLa3uUVDmBgijSASfhhQXC6g9nxZjzwRNWxFdA4gM2TxgQQcXx6ecEHkfVnNSdtGAh",
  "key26": "jhb4cL6JM7dDyDnTsibC1HRmy57hHSLGV8hKbxZCtLig7fzjUeZQdf9RnymAUMXBb6vMJaXy9bPgnVr8No2BbF4",
  "key27": "66iBm8HyShgEpsyc9WcDqpRoUyNed9YNrDm16tV42rwvNLbLhah1UxN1f2AjwPJ3bvyBrAWebhxJED2Q1RZQAAEE",
  "key28": "2fkX3oBPjpbYzbYwyRsaZBFgsasJLscF2rT5NSwd4YrXxJkYgTT7tthK93VAUxrLrHmJXE8iDp9ZkGvVEVH8Tiij",
  "key29": "3awzriwZDegxGPnnx4wQuzFuuuFM7hmmsBg3E5631mcHaqiMSUpZrGrSn4qFe6rumCAQiscazmUiH7hR5RSA6FPw",
  "key30": "2UKhahZMgHKWESEjEnCiQ8YpMWTuqAoNsrkW2gBy8nXhdcSzxhmWjM2Krbjn7o2npWUJE5j2HAuAuizY53SGWHos",
  "key31": "39rYdaDH27CWAAk6ozmWM25FLm1TYMenL5Pe1dw7AWjcrUffCMhAc5VpaonvsSwqimYgyEm97gR8gEb4bQtYLkAU",
  "key32": "5dePF5Er2MbZT5odZRR6pBdzQfvbuRvdsUyDui4o6XMeuQvwsV8vrFMtz7xUXNqouhR4Qd4CHoYbRpqQMvbEz2fb",
  "key33": "jSvfSyfTw6VSmhUxRU46UM9UDqU7rigHDG5VdYxYpBbn3ZK1uzNjUz3ci4LKQEDUFf9hXcWyQz7WEuYNjrNwKR8",
  "key34": "3tzbZDKBVSRMQqr4BthgZ9qMeK9cFEKAh5QwoskSrwcve6mnidVs9PhNvmTTGBBH2nUDU2hHe2UCKHqoXdbQ6cGd",
  "key35": "5y1VHLFuxnLfgr4h6QNRDDKKALZSs4c9ZpBfYgHS3NJ4G8sJKxYpFuZjsxTwXvKpfiF7V4rKkURU7d3k4oBjSjcY",
  "key36": "2YQHyEiT7s4sVZq27e6EtLqAHVfzBPrBxWGKbT4FiJuSaA6m6pp1oRDUtsnBa3PVtW2N9L6S5k3AiVdd8QgjzEgT",
  "key37": "bVGAhhZWdxBmUnatug5vWMFbnuQF5kHyeCwNzvSJtXsr2a4Q8FWog5ArQHhEQcH4KoWfsHx1PCxeS6sX5Xq4Qyy",
  "key38": "2CeVEmf6JAicD6uhX7ncwdB8yqdozo2WHBBei6ftnz7TPYjt41nVNp8wvmdnBnfNaGNj4QaeqVhg2wTwq28J2wKn",
  "key39": "2MTYs2eBjMvtyppY3AyC5zMcyKxctzaDhhFxeDjGeCwdAL667z8PaHHeebkEJvimQa4npZhqY8xwi1zyMDj7ZDd8",
  "key40": "2QtrEPUNSgHU61w7xnNf8CGZLC4TDQ9KhkFvctUd3C5QdjgegaJJbMZVuKE2WdSvCbAagUWgDg2HwjdQhePGizn9",
  "key41": "mWn3sfYazavNBjywcg53Mie5yt2L3zPm49uhaLooXDTYS5Vga2xX2y6q7ELDCrMUnt8sWrqKpZMxjGVyd34a3tj",
  "key42": "4KG9sD5MFtVhPrUVhqEYmpswoTRerPhdaAFdbGbohTQw2Mt8XJsMBPLJmMGsrYshTUTTEV4iDbZ8qLrKNhkK6oyP",
  "key43": "RLi428ei1nWCiEXuqHhodUk758Bnp6q9JyRS2nCHCgUvHGEbMpDS5B5XcGgqHw8z31fjSyKm9jNFNaFC6DkmHXq",
  "key44": "5Pag2jkBquGpwfgr4vGVbEfMxV9KZ8nMhMUmdUfWaXFUAffbkqixmDnHU813wqB1zJ3FYD88ysVC2fu4aaeSCZo4",
  "key45": "EHC7mqRPkucajudpvXjUxSAUmWMAMVsmrtCcnRo3icfRo9kEPdEMwDTQcGLVZsjcp87DJSURLGVryCHtDZ1nM8r",
  "key46": "55G3pdmWTR6Vu7mDLzmex7fmYv4EuM6Rm96PKBdKAboPeFGRNkZJvcyxYyKbnAWRUgS5PBT25RJigJVbPjyfrKBu",
  "key47": "2VXBHLhAECJYuSNEMLkQHyY8EBCaPCc8MsqUTiTtTbbBPMdRjUHq1EVVwMSPkKvjLTJAnhN8tDJ6wsdAASFDhZiX",
  "key48": "5mAc5ao5DCsr54S1i3icDwZ8Hbo7q4tspv1NEg9Pu199oFFcLCmF7hRtvvNDLH6KpLWkkge49s6c3DRTf57Dvwu1"
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
