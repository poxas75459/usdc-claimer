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
    "52ZgqxJXDqH6fS781GztHHFeKwekp9ye4ZyrxrnxBhA4ABsp12DXraEY3Qpq5zh8PKd3xuTv8WeD1Frjt7mytcxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pi3Rg4k4WfhTNDFULtHpzKJfLaEUEhSsGAXkGRzzeCE2ML76rRK3F2KQxZCPSPp5MZHTpm9CW5BQVb1XHemJYFv",
  "key1": "2LrFt2JxUj2MnMiAYzmv4P8ioVifzhHe2o5PW866ywn6Ntg2EtWgzivXxsCBsT5HSahWtTPRvhw4eU9nWNYvJKaC",
  "key2": "5nDo5tRv7VMz2ochXjt9CFi3euWvHbuxsXY6Hs9mhQQACD4YAnPfoJjwBkwTiLah9dwYE8GvNJXE76bE8RKS6dXK",
  "key3": "2H5LbLGXeMj5g1X8NW8xDKNd3dETQ7xHnmEHJJHe3YVp1wXtAD85gUTgycnzDN9H5TW5pzeM4cJuwhkaEAiQpFaW",
  "key4": "5qYJSQZcd2QmyEQURLrLsHyHyKQmWFgpo1urXUQECpm8Cus5nAzg45QtNUA2hEG42bGz2iL7V96A7dXnB23qhnYQ",
  "key5": "4WcxRd38s7VWpecTDyx5m3bXgfVdkUtPgyzhuR36dchFxjfb3ySLYxvzQZDUbs4qK58sZwaJuECwxaXvGtryGJwt",
  "key6": "kKZx8rAZmFP5CsDoDoPRjTZ67oDuQ8GwZqj36Kk51Wgz7xSp9uUuboDW3TcDe7y8MqqxsjmtRnDHFQDAf65SUxN",
  "key7": "2bJUtoVnmJbXppmsmiHEDoW7NKJtjD81EeqvcqUyfmp5kdxrzrncLuAKAZhum8UwcGzYqBnfuBokZUBsqRhNAgc1",
  "key8": "48T2d87KYw79VeSGfjbGMgkjUDLFR5BCU6EPdMFTFjvvkHgcdB2ggRfQaDAgRHPEGvgD6qc62ZHwv4tJrrX2yMEf",
  "key9": "4xAcRmNHN8XVMqLB2kUj1S4zcNxGwc1WoDTPY43mH4TqJrwrAu1b7qjz59CdhwJFXETS2S5odup8rhoMUXMgfeGf",
  "key10": "2ZLfwaaWAXceTpvgAw75KrFkpc4MbaREyJ7yKRv7MrLHaSuV21s76VY2mQmceETnVWEZdFSsoubA9WdytWYWF9jB",
  "key11": "21tcDGnA8pHWjvCUzTA7vNW59NR2tRa5AX7xH4JFtwV1TpGTjHNRqCreRseLVy7Fkc5qdwvSe5A1obKoEFhh8Tm5",
  "key12": "3zt7BEP5B42qxCc6FZvAdFLaWZ32R86hM3G7887cTpcnRrnvWBLTdKTo4qEQw4qVH4QbuW2oP1MhUpKEscG8afFH",
  "key13": "5eS3GCPqP1X1fDgjvdSR1qg521JKyFg5rnHQeQPvPL6B9Vej49yt1U5oBkEx5e1K2fkRq8XdpJS5y6vHyeLqr8iT",
  "key14": "HwhqqFLhXLnNLi9fG3TRM8BtkWmWXvqsUGTyrv1hzTbQGsifFobvb7wa4B3Fn3u81TZM1LizR57VmJa5t4Fj3eD",
  "key15": "ZT98uTpd6XsKL8L2m6jPCoD65dEPKkxtxdChMpmtNcRKkm6z9RkDuteQ898jB2S6UaD3UxcaYu1MwQqcy3wr671",
  "key16": "3N5a3iDk4GJzxEhK2ecdxdkqFaeDjpToHRswrZRi7thFpSiCNfXfFYDveWX8qA9treJpb287kZTxZgF3KaKeqAbn",
  "key17": "3B1tQGWWCFa4UgQERURBBC9ss2XEgB1AsaHSfvHsrPx5jBR2YtNAMU8TomarZ1U35QRks8P1gix3h3JJDhH7QRtM",
  "key18": "2vPx7dRH2E9J4VSbPgLPm5c7hgE9AHdo2NCG4jd1B8pkeEkCbizUYKtpHMyygua2xZzhPAABXzyFdD14ZXhq9pqP",
  "key19": "4ZrHaEg2yXMJX5Q7hXfV3kQDqwEb47yxXW4z3Che19EAsvnuRKqpuSZka3yLgfKyF71hhNzvY73jGtv9QUcEPMbi",
  "key20": "5VewtNjJk2DnwUkFZDZoyQZiJXRcKLTay3kzFy4f8uwJhki1SJ331qBzQg4SnmhBwTFq6MFqYEDcUDQ7ysvgV222",
  "key21": "2izEK7MjRYjkcQBJiwWR6FiCKZrquGp54t3CW9c42VMXWMhGXMJHYxqDX1bPADVYPCpZWxTq9RpVXXbbbSr9uCve",
  "key22": "5v2nXCqmsFGiUqxjtCK8XVXjpNP2zeZewNucQFLyLknV3SSQbcggnRSWt7mwx2LCkxLBhyuVA1ddxFg8ndof6ziw",
  "key23": "2jiwF7536dpP6B2XYKPez96uoSr7XSUgfpzwYq8kvzsvSMhDL4oCxZ8JfP9GteiXL2krrgYrs3sniTu7pE4ViAyu",
  "key24": "bvJgQgDfu9d1B5fsrGsu3cxgv4Qr6MGJYXCWurKXTbAbhMQ4xF9mGgUAEpwGHLXKFwBKTSc6qpJJtSnXy7pEobk",
  "key25": "2oib5qEd3UxoM6fn2qfqVJZgbYXWYdDDDgkVPHQMxkyJCphsLU3KWcPWia5xyaEqv6EbkE9rLAnjBcPvHZ4NCsLb",
  "key26": "4gpBtfBhW1gTjkMwcznNDRWdrpUbNCdaiqkJHph1HpYhEQ7EesUFds11o2Wfe7dV1uNFtS5X595nt145SDctzg7k",
  "key27": "5aZp4sTPfR7TMMpUKXhBN17uYjoAQsTXQY8sHaVPZ8yAHL4j5d3aGFK91PJ2zvtBtUTLBJNaU9Ef7YuZSs7Jxs56",
  "key28": "2wUq5zL1NMZ6iEqybiKZUsM7XmAz1fTi7kasD7J96P5zKo6nTW1Sx15jHf6a1ikA5uHSYfARVSjXdX4uK7YqSJTQ",
  "key29": "4RUbRTVnMNkHVPK6wecxVfTpMczjENNgT2GXajT1of4tYPMUmAT1YnUU2NoQYZ56omtqDUbdzuoMbuATWP2d63qv",
  "key30": "3bwVMJbMTWWUEFsnGcsmw39XV8R2gXtys8VkcYsqAQHaTN7CLsnbpaZWqRhcQETn9fyoBVVAP8Kr5YtrksNt8DRu",
  "key31": "61d4vvxCtPzLPwxZbMwzBCsGbSt5mgWvXGcpNadUnSPApPMYtbBBp6sFz9n4ShykDaDQbb9cEeJ2SeCwyauMbqiS",
  "key32": "fGXGiNRXWtDA2yLwwQxvt1Va6aV7QQqU1RZ9Shn3PGvD7aGV72DaAJ3qMRqZqNR28DUqfNwijxn8tbYi7BFiFA8",
  "key33": "ngNmd3odhSFWtQwDBdhcax5D5us7qLPWPZyQRri1AgeBECcsUnzFmNTsyTDD6fsguqYSDxa5UD7HCYXmRpnM95q",
  "key34": "5vBsjQfQ9FHRzeoKhvPnJSL2Bfo4xh2LhGxnX6oZDKAVYj6CeCHZH9DsftUZxK8qi7hGWPqgCBSW2nz687PG8hH8",
  "key35": "3sT3JtD9J7eD1zkccZFiSxcT8wUfM6yGLStRhSHmhBAs4Q3PqWRQGc91hGnPxeVrqiDXz7GfvzpfxjwmJmdAxSt4",
  "key36": "3ySnWJUFBieYme4S2FUDFCGJFdoN5VjuQyDocU5S4eBAWM5KErLUZHu2vXrtfmRXx7b57bvStNjbwyDUU4jAeWHH",
  "key37": "4gC3bkfshaNLJR7qGRbCKakrWAXHJPSCX3cUWfR3sD2oEKLcxxHYQiEa8c1ntsuZxrT3dQ5o2dDjHERo42PiDXX",
  "key38": "5gVBerJVE138ioFjbHRa6Sb1Kdhf2yS7C4fRYbL4nAju3C6sQ9UWEViPcKXTvEUyejZShb7yTjrjGvMUvufHT7b8",
  "key39": "3pz4FSioVXzVc4eb2tCViJ9SafBtjyzHVeXf6Y63ED7cdJnW634ED7FHbwZqxb3pAgPunz5KdFYDQTApTc9fXvA4",
  "key40": "nZ5wsBKrtZ1ZwTui5RGzU2Z6kr7y45XdegAJBwwg67XnGSpW5sjrH3Spq7aw4u1PB9mjJxDrE7zDPV1HZ6cgcBb",
  "key41": "41mRUbYpnRZNMMsp7qSjaQZkWpgcxC47CNPLVfemEF78xRPt5H1up4o7cR7JbNDxXSPoCd4MDX4koPa2zJx7vsZG",
  "key42": "24FyKVr8YzYPtXr84ZaFhqcu8fZXEmB3WTMNtz71Yqzi7mRELEtkNbTNDid4P3gECBzHhxt7j8dWnExkS22DeKAh",
  "key43": "3erAJqyt8PmMmN4uU2BFLP76UqiGc8yyn5ZzAEPZHBKNwkwSuS84KNv3gFGtQwKp1hZCg3BcfBepJjDiqXpGNoJp",
  "key44": "5tsWBRE92KarS4UxAP3NgrWtkVJWSDytgUY7rwso5my5gbFNe9jUSaLYgdB9C2aqeQABsLC35hygtekTerstKrbE",
  "key45": "4wyiLxetxg4fV6bCiSoH5MnEwqZAAqzccrv5xnLXwYSgiE8gdxuSv8DVsTVvdLqFgh1j9L8ztxjDjAEfDbWfByJc",
  "key46": "2ejdJc1x6Gc7VrScEaXsdQSNC2WknxrxQiSpw3FwBxiQdDNJq4imVLnFSiAv6m4E8zqnusvg4Syv5xYze24JaVo8",
  "key47": "2QZDnAafPBuEZHk5oLWGJMSzB9CjJeGUbEVpBphoxnsDeTNUqjZyak1Shf4tZvPLBkanwqp2VCKooeaqHWo5pVY5"
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
