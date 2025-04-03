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
    "3WWNyXqwW1UAE1kMi6Cy1KPdKpg94twbfRhq1rg3xiAqv9sTzCV6WBbiqnwTcbRWvxj1S69gpy737bEoVsJYBs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TiPGudpF7E9AuoewAbiZ8A16bLrpHUTRs1YsVfMVs2jCqwZX2vnRr2wJt8RmQgtMdLwGtAzVz2n5yYZzKnwb8m9",
  "key1": "27zjFY5AdkLH8DcwZ1rXivm5DxwaWW7tLpJ4ZcGg7bw7RoE4vRMRFHv4A5pXih6amzEk1u33LonYPziLDZMGp5fP",
  "key2": "3qFqfrys1BPtK5iEJ7N2zWCokANi8Z9MCXdQqqpyfEz2CVNVQ33BqYd8xnFrdVTRNb2FFGj7epim6Mu75xrdFVEp",
  "key3": "3UCfaSMsC7whAhVKgMPguZFewMen8dpjTtTWpWZ1TCBtgrGvjjo1tXaxtJGbWMHfrFUJUC54HJwQaGVvWwz6VYDM",
  "key4": "rwhCTMQCZAPEPT5Jbb3z1nkoAiAXGoZmkYvkjPSZvuurSbw2L3zWCTNomVsSca2QZfDRzXJxh5h8kN81qwENEBZ",
  "key5": "2JRQzhh4kqF2qHucbj7tqgKQpDpLgCXcsS86Qh8AeSgTsyW1wJYw4HT3Gtb5QV669aEjEMuqe5DhpdCD7C9FcMgs",
  "key6": "4pjfASQRNMMTou6KD3BmJU3TiRKT8kbvWotTC3TxUeLLQvEq59zzcmS4GCcM2m3DzQKa2bvSGe9WiVu5zBMeVxVh",
  "key7": "5NwvShkE4M7C6WivYoFRP3WX4hc4daHWgEe1fWL2P7XJRnkoJp9Ryoui59Z3Th53GYotqyP4zUXDmazmRFL3jUU7",
  "key8": "5xDLS5yupaaACuv13zanNWYabovHRfvyS8d3V5q6UMX1gq4vTwJpjfJbMppMWUG8w2PrSF79QqzaXC7Z25HP6mHi",
  "key9": "37cJuPN1KgE4mW1CPVHbYDshF1HdvNLaqCgxbvy47rRVZQmfCgwbfu2rYzzeUmtqhqWWo8zHVAJJtA67hZzXEJq6",
  "key10": "427E5LU5ZofeanCPoFTXne5yD7mmYUMP8KwKNe1JXDaH6e2KYV2XwdpP3bSLPZtz2X5nwuq9RUJMtpJXXrKfiAt8",
  "key11": "394kHsnMkqgpbkdLg2WD9Fz9ZDGvpmbxJhDdmqqP9AhtCn8EfmVofPVxKf2GKzmg7q7fKwmxLiCeHSzu5as748HW",
  "key12": "5Po56F1ZU5eZNQ924WwtvxVHYNxpFbEyeRGRPp4E1XmAekpzvjhcG6Qcu9BRSjPnCM7BKzr8qgJBMJwUw773WZk4",
  "key13": "3LEFCJCXiNgavWUJWN4fWisoUdDf4oMpHGK4imkr7H7ZSnGKYza8ZFJtpP34cqRs5N8QTGVvsRp52cwogLPeaQ65",
  "key14": "iS1RfGbpYs993dX2nfWwFVninLTqzhEuDJYv5XcogFoui6GPRAAGisZExRzYfcAzsUxyeR1UvwPHBDhTi1VrULq",
  "key15": "23rJyewoRXcJTQ2QTB4r9NHppczVDDeLvVjUYHXpz3VaznmPWZUejgaVVd3fhTNhFSbnwftQ83uPJQSL6aotoiqS",
  "key16": "48nR1aBjPx2oQJ3wjo1sH38nxVLNpkCWFkuDrvgDr8P2ybq6VhgdFGqMTM7kGSTwNCpnmAWCr2aKQGoxyUbnZ1Sk",
  "key17": "JcEQ38uvTHYfJwji98swsokNnyCdSUbagFQXkWhaLTTksUSZ22wsN58AJxLgk3qp7auqoiK3KZwVWp6Cv5APain",
  "key18": "3QA7JaMiZCxPRt2HYrEimKQuP8NCXjTitNBBUunbDeQKBCCB8b8exgFXzQy57VqH5SxCHgstbpWwxNgoGPaa49dZ",
  "key19": "59cwTjaFX6EvJzF65AmaUiho7E1AAZRMAJ8sVGKKxgqhfU1Qk1ZNkdTYmYg7tYZmP1U5ivSntJ3SGkhyvWuYCeVD",
  "key20": "3eT2AcMjY4H4kBcSrsYoVgDB5BGojJcYNSriYQkaGJHsTKDRVTNkiFMHZzgFtbFVgVK7wz5PfaGd5Zc76XKH9yh4",
  "key21": "4sRy4JxtPDF6KyvgJCtYYC5RPd1wQhdUiYZdmvv5acwuK6pKuyLM4jkdnfJvu1wgkix7yi3GWxZ49VoRwSWh1EnZ",
  "key22": "bdfaq1zcq9i9DJCnjhqsXpEfdaYS4YZcTDaRwsmGBYaH5y3Zi5crXWXm5jwcpfvDKAwQVWfgzDa7f2LdynZDbMX",
  "key23": "59zuKp5Tqc5idT1WWKpfJoG1hESqgH9pFe6C67wNCtasAm9HHaCCE9cqdqfNzmzUwgeE6kg1cZ4Ho3vwxeZEHino",
  "key24": "3AUTFkAfiZRuc5CiXoxFQcJEsnzMzna4MgK36CANPeZwPi87MY4vQBPQf5swB7sdYuhXTyDkGP4ZFUusF7sM2XVg",
  "key25": "5XJ5xGTFbqBKcGGMawo2gnZwkk1R7HJzhiouTmZTtfVoNgoxe3SpDz6zccuTxR18N87b4jdSgtbmi1zLSwniyuSn",
  "key26": "5BgMdnxuBasZ7owLaMsJEu7L32nEBLFnodSnjwrRpRvEZyQ86Yu6mBSS1hvRNqoQ6dGaMS95hAkz3Wc64ny25vGM",
  "key27": "27PJw5njrVNBR2tDDxYUX1DfyZzkbmbuvKjRud7VxpSAgcb4rnBpq9nR3QxvAsJ5A9oDkyXkyu6kj62kFVYtkwSB",
  "key28": "3pNanCXKmRRrXFvvExYxvgeS5L1VU8KDzKVFhGqhxrDz3iPraSXLxyfMkGXxusHXaLsvRKLmt6Mu34ERjjeUi18U",
  "key29": "51JjuFiKXaBDiMZNKbEAV7BYDnnHSWNZpv5kiBcKUR64HZXpMWRQcBmC6xTTRt3WHnKekCme13uRNh3XNoVMs7W3",
  "key30": "2s6AEu3XJ2rQbcCbMSd5zTCxKknWEXZPnMeTe1ZBxqqVgLTebQpBfNTyTEdgV6ZUsB2y7H87fZFCr43BTZSbanyX",
  "key31": "r1M8fxQZCL4E7icf7Tp85a1A4UtTb662AkJjk3NMTkEn9QZQeGuuBzTA9wdaXPsmMeUguLSjdid2HS3eDQUrhdh",
  "key32": "24f3u1U381qozbZWHPormaptcYWkqTPT81Xyvt4TV2YKX2ER2rkokaxSBXhd8AL64GMooX9HcuVS7zGp4ZiMiZBB",
  "key33": "47CxDaN2NphG9nacGNAK7CRQUkLLahBnG5FUR5rkENAmH3YVrCwTeE1kKoYrf3fBTbUe4NF9TGqxYsRJZYAoPgyJ",
  "key34": "416FqqBH6BUmkaPW1U4YqeRP5WzRyaBqhr39CGtbu6S9CNtvjdrzwzrdnoR6VCFrq8edLHRkXLizSEnhPdyF1dKE",
  "key35": "5ckM3y3iTD3r4d65VkGpkCfKzDsjmeC6HzS8wP8CQn8LLytZVPb8VJ2c5RnredF8Cpdss1HzTcg39bfNtdX2QdL5"
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
