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
    "2WeKqYoy7asQD1CgDMxVi6PT9NoNb5RrZLkRXdvPGN8kGiqxyptzkWHjs3hBdvKmey5qDHAF37apvqH9QSj9rZNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XhAWyqH1yohwqVXjnV9ZmxbQQRvfgBuDu3kXg9ACp397PURGcaQyVRiLSX11KeTRstSfS6BVoHxAKWQQ1mvNT2m",
  "key1": "65NRet5yQbp4nbzxBoDbATDQQuKB6Q3X3GLf5aPHrYiRqDwZ1WG4G1oLC11heDqFzT2693zPu4AdQotaB5JCYc2h",
  "key2": "3mZKFobcpTjdtnY9HxnqX9Uvzfb4qwcWxhDoxuwFyqPiMiMCaoa3j5X3x9jGRPCMBEDZJB6vJ9BpUg7aAxfKCCg",
  "key3": "378bxUHmXQ565pPeH7Y5ioEppjoFXSycfjHpDnaUSGMhwV6t6vk57P4QLrf1axnoi4XJE7jiFchkc5nK8LYug3ZT",
  "key4": "jGAFLkgwZpJCP8yqhCKKGGehYXaxzo6W2wuRyXDDsFtYk3csoVeuBoaFCnWbUWeQyCX4bVrbrJQiPSCbg2eTMzv",
  "key5": "5oDXYewcRN3HhfG4seJ6kftThHSNRpHbmwUAhEpTwUUtGi4hLVrEhV3rV3EfJVoq6H8xS5cg9yDDbxUdp55iPdKV",
  "key6": "2JyPY1gr28QPppuypxBjd6DdqPKfa2J9xvhXroGXD8m141TgvDRrnUKgoFqt5J7KtdzAYAXJyQFk7pRC4ayxuPTM",
  "key7": "2vJSZQvexx7Y8dvnmHqpYXHsDq2owEYetjUfM6x4ZeJ67nbNb87VR8g4m3hHaiyGz84eZek7MAyauwxC6QRUP1iL",
  "key8": "38hSoGfp1TM98XQZnXB1BZupSWBYxYKmr23T4sekynR72a7FRrwAEbiyguX3euFS784fpfEoFMyUdP2yY8Npmmop",
  "key9": "3CsNe9VgMoCVJP8kubzFhGGbLwVKaXcaBTFrwG8nE6thiDkyx448B1njhhtxabnUmxmTQpUbEH6V5H9pJfMsksAx",
  "key10": "3q18UpsgqQajJKVBE9iHH4cMjAiY1RiaJETWvbQipHMvwbaFGijEvRngmLhge1b1KJ6uqYrS1U7v4AbbpXw5vpkY",
  "key11": "vrwKmK6wE7SzGdBd6sjm1CxdKffFYmu6okLCAcsqjwZ4vaYW7GKybm5Z5YFt1rZBH9wACe8Wc9YDWGyN78Symih",
  "key12": "2UunhYbRgQX5hVE7qhX4sChFE4XSMcBPPR14YwqEkG9SDQxnBJ7PYXUcEtoezGubx5gx41pha47GfjGV1zg42y4y",
  "key13": "5ViCyoijKXjjEv2ydi76ZRgxEX7NSGNKHTfocUa4FXMuCTpAwptaWh7Zz11NpgTRSb2AsvDNu25KGCWs7x4jZNsi",
  "key14": "3ifRfdfcwUWQFc6xi2sx6EjN3JqG21jiDXRZQQ1Wio5uVuP8KK4vTCjXcCqz3uHzHxCL8nVEAR8JNNqagrspRpiu",
  "key15": "4caAqEAc1r1J77EpwkKR4zTnNUzYdi1r6u6j6c1Y1huzdePBSWunxALu8vtg8nHBU3sBEcaj9XcJC9owey4S1Zoa",
  "key16": "LjoKQvp9RSNFM4LkxVjP3peZjav6gYsKA3KWbYScMR2doAD9pzSm6wdgaLVtsPaHkM6sbj4BbXpVUMWbPjDjxHp",
  "key17": "3VARF7c8fW3cAJEMZjNyTsEZfpuA6B2FbeqgsWehZEsUL78NdVbsDTXWD1jUBLSRGkynrRTV6Gkx3o51pruqAR1z",
  "key18": "2mkhhfCE9gKTG9YE9CXds3f9GoDRHHyi8B6DAqBTDT1dhUMNjTpvnxZd6AtNYBVJJFDXfcz4YbxLuj7DcZyo3A4V",
  "key19": "4WDJRUfZEgiWsDgN1oUKRwyrLvgwnwReNFFmNvAxyGXiPu5gydwYGm9iddyXfnnvbE2ytDrpBPTRTmuAYRkjwiiL",
  "key20": "4mVYBXUc7h3SjoWrkZgxbURUgYPE8KULr7Wo6LJHPVEEFtrB8LP3WAjdNUNr6QCCNFHkghuYj7wHnJx6fjALr5bx",
  "key21": "3nxSeNhKZBm9NvieCDQB5jS6gKU7oLTSSPk9nF1cM2x6iBUDZacCJoLWoF8M3bvzgznEwHUqQtzbRGJNALA3Yj3g",
  "key22": "3LsW1N7xqVdTAkANHMkU6ymaWUKgjEN6XRdoD3VwqzLYVunmPMcVj5k7hJBUvUtwdCTevJJyhwQziGF7GyppZhBi",
  "key23": "3GXhnhUuEc9MtH673RV1rTiKFLqjBBCeyLFt1D2F1nps61xzGtnwhV78GieCS5wgbXksqx8G3haL7MLy9w1R7jww",
  "key24": "2Wp4RCdPnCCgneXmhqnAGFZF2p7psFkwDJChzVYgQ6b81GZaM36ngs5gnGgP5X5NS71UGEa7R9C1kdW1rhsZSgXz",
  "key25": "2dcJ9N1KG1ngoUdSjWH4UT8fBRgSty5UiCVrfQAvbX4fERHXR1Dirsox5R4py29XSszsPfSkCgYYaqYR2Uzu6sxV",
  "key26": "4VDL87rnbh4i1EZrHPhtD2jaGZNybTp35d5RJA2D7CmB58yKrbp5D3PH7zKNx47xd6KkWnPKBBDAbezoZJJfP9HW",
  "key27": "2xeTZdLZq8m9QfoN1KLh2zFwMPuuuVv9JQa1gokXCdcbZaHSH32zPwzhsarieX21PbPPF7xt9uafKdU677mwmS9B",
  "key28": "YUBaruTj2Z4r7ovLnWPWSSuMbq92pjGEr5oRtXnrscAr9j53zy5SpnDV46mTqTGSpTwnxUnbYQweWH3LBQGLjWB",
  "key29": "4gLrBJTrNnaqZbe4N84CRvdg9AGuBCWzQF9nvk7yqvhpkx8gta8hYcTGCmw5NZiNtFehmVRUFUca15Wgzgo3jUk8",
  "key30": "5wQmjHnmwmD9aBMQufmoBSWWpsCoYixufHaN3JtJ1EQUggvPSXBDhxonL1EVffDFrFsTaND5zQ9UkMdNQ7NCWymt",
  "key31": "4LPRtAZt2dpUFqG1yGani71Z5bEWLYPqcXp1fPsUi4JjanCvKheqA7nEC2Hz4RycwkaJfbJeF4SLdNHbsTcD1G4z",
  "key32": "3Aangau8iUf5vuk71TonRHMJR2r8xewrxfHaEW5qBKJ2gzYp4tJjaQPgWLf7SjGkX6G3MSasqXf7CnFv3C6tf3Tq",
  "key33": "4r26akMmbVRcnUtUGU2sNcn9excfJzXTf7MLetgiTjsVbcgJYEfxJDQDMMJYR68A5Yz1M5wbwBimpgcaqHHXcnSf",
  "key34": "4TQKLB6tcDx6YxaXT5gDDHJfNnTuPWB1bCkEsisD5afyqASXyNg4fTwfMfxeH86cZ34XfdSU52o7HN2orXUBoscX",
  "key35": "23yYcU1GQuNanygvmu5LRwBsbeR6MtxWrkTYNLapq1cmVS1dPpg7uf2PKWoLmqjijAEAMwxHLG22UQm5FTd3CQ2k",
  "key36": "meeNubPCtpnNSFEwdyeJqRR8Tti19NmpvzWxeUg2ML6eabaQrZ1aGJj8Qpr8pAwtzwAwrc3h5BqeDdNEc5wMHjr",
  "key37": "5HCKCM3xGsLVrQVWiSJyv4d59GrWA4aPeJCQ6NECC1hcnha6MhBNLxtqBuGL9pvuPjn733fhJM7dsb4QQANudtL4",
  "key38": "2LKhf9nrCW12sSjQFpABrqLx38ZPXz9ZaopjBA4i52XhgJQrJcAyg9pSqDpJtAAQM7h6DxscRvJqJdbekRnqCmL6",
  "key39": "21vyrLpDs6SoGMThMEYAu1LqocwV8AUUJcUwizzdWNvWUwr16PjfUtrfNT8F6yibytKxv11XvgyPPjVEYDHB4ata",
  "key40": "3U2TXkd8dmuZQRFKuF3mVruEbi9kpBnHVcnidUhvpPZv51vUXF3HhZQSyGsW75RBqcqP2WzxPWBdCEahsPTdfGcA",
  "key41": "LdEZtdRENiAH5Axf8Dv2rvKNVPgpFKu3R7gYMKPqfrTxBMn28srmHp1fj39FxKfnvf6uLyS18LjhvfLvKDgeHdt",
  "key42": "5AvsRFCqzN1NeA8kWd1VJQPyixrU91J85QJMHdHvgddz3rJEm2G97XV6xBk75M4nxyukj1PwoZ29NurbpEBegdDZ",
  "key43": "MzZbbpcZR6LhRctjGcFQJDKnGuCzipS6bnL3VJZp7dFR3tPRAYVXBHdtbJUsVo8ege8ytXx5ELjvthL9Kr2g8kJ"
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
