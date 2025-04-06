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
    "2tKsz893Mzc1gp3FVhuEsLggvX3kVhjnAjugfPiY5V5ctPcQ6DBN9qF51VFYNKCDgrxWpAhgBe6WdkbXUoUjNqMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5swMk9smjdr29HnJ8otjBdNWgMaF4JZSQFM8t2MjaFfqQUzkWTBzWo5QpfYFvHeEBTg8xZuFnBUs45N5pxfBnuFC",
  "key1": "4PPVmMh4YK1hQCxrHoJQDArYKmAQJhsEkHcmntCz69srXhDcGEut37GtEgzGzrmtjYyu8GPyFaPwTJuupiNkQ5vm",
  "key2": "3iuqWPA7hPUdrKvWPmLr1GJqWfVMhNaoi41FdPSxuJiDw655DBvaSLJLNnzjpTgNZVununbYYQ5Hva8FXw5QbX8G",
  "key3": "5ptLsUYoSazHCtB6eMbGPu7UQaWr8i5XnyooKvVB8Eff4NvSEQC8KetNNNNDUQ7yrzZJNqvUFQWLjWxASsjq7oV",
  "key4": "3cNM2tV3GBG6fYyrFWUeXpqe3XA8968LSzeBXyrFExxjE19Qym7TiSRPzKu428FbkuuM9fXs92YkWy4PUfkSGQP9",
  "key5": "21eWk7S4cqVPPCFVEeJJAe8pBQWUxqn2gYNWGgWTrQhtoVZysJHVF55nPYcePE9LUeEBJwcerdwLiLYFHUuaXhbi",
  "key6": "4c9wVHccFx53Npg1HphFof14bkiqMCUnt5P3kPShM1rgBeJyFycMotAPTQ1e5T2QS66yZazVLbQQbn8dxK2NCu43",
  "key7": "2C7mc7Xt6vbTDnGZ7WzkeHzeN6kocCVNP7FaefEsQTffMwAQMtMchMZTsJayZTHXT6cY6rDs6vkcfuc2dP6WFZh3",
  "key8": "4XSUT4tSkb3Aurcw6egFCmjAsxDH9m8BWhaZFGWst8tPf3TAnUruCuHMgwLLjCgrGAhG6ZVQSRCv5xKm8GV7BA4q",
  "key9": "2PVwKn623wmGppEJ5893V4d9rz9wy2R1Un1WfrSB8zG1ZdJYVgXMEJQETQxxSTpNz3VNTSWU9JSy8gbX6EA8fycC",
  "key10": "pu5kTrHnQZwJ13KU4CUHUM3KMD7EjtwE2naTAp9bYRtAmTiPiGxZc6zbtVtHNCSBYHVU36UVmW9kh5kF9xts18P",
  "key11": "34KKDRz5tcj7wyaf8wi8uVNMPUEgrCepm8sYvmTHpkCHk6CFMnAQ6rFrbjGAGwUtyyctBSFfxz9ADxh4MDyvVVsP",
  "key12": "3CfBXqhqSVtjadPSw82Ndid6U8HLL36T7aRRJyvyj7aqaxuz73sm5iRDmfLBb6huXY2nxmofkTxpnBfASVfbJRDD",
  "key13": "3mVY1WHLsdGwEgD5FqMZBfEyHMC5YQ9deXdgDLSS1K8CYiqqmNAP6KiFzpm95gcn9DSzjWtrjyx9Ra9bEkAggvpa",
  "key14": "63SbbPvQHL9P6F2Q1MaA92oXfsSvwRGz1TmjAbc5wPynVh7xLmPaV3gdY1cgKuKszC1R7HxzMhd1ECa1SDeLbe7A",
  "key15": "fiVZbpmZDLy4UaH34k5hdczb6GTNRW7NxKMd59WWyPr5v3WiPfMyFWt3n28SoZsgWQ7cpf3t6eBT6d2dcdeNkKX",
  "key16": "5kkLBLXPs5ZuctQewt9HPp63givuLv2jvtPVL2pmmKD5aPxaH46BbGGx5j1yWSRzAsKLffedV4vEM2rMG9VkGjF4",
  "key17": "4VU3atoRyyvTYKmgNHXoVme3ptYFzwvemXgJerugSGya4A1H1d2AQN28RFaK1nAFGGiGD5DYkHs8zKcWjh5ocVuF",
  "key18": "4Cd9yHfHMG8u1hAFYtSR8RAJkmpR2jPDP6nsGZaLuMcsohJd3fQR9nuFnFy6sVxwdtSurUGbvDUGJdrS4nDz4QFP",
  "key19": "4qTsPsx7CoqY5XpK6GSKTvfGVrtZ57bp6A7vyYBEzb8PTzF3op3FxLsPgfvL33LWJESDqgUQAK8rVcKA3MpNuqbL",
  "key20": "4NtPVDLZQrPY9Rq1tQmpm8nEykn8gTe1PqKtWAE4iVjgAKDzeV9gQdcTiUNxWfdhnWpektdv2obBQCJAmi3VQ9Xu",
  "key21": "3YozoCJXjRv5TubDJ8Paz3nE6XnrsbHT1jkL5BRNXEESuFgSqvnCpA5fGGU85G9C7ExVU7vER5Lb8mxdyTY6uvm6",
  "key22": "3sejvkzRk7HP3MUvDQsn8DGKryJp9zw2owcizqBvD5AKSv6pNUvvS3EiR5oFnnDtZGCpBcgJmjeQYfJ1w3vazHnr",
  "key23": "2RnCq2pfdK4nsMEwgVGRx4kJPGVG3svW3DzEuSBpDTuj16Aa6E2YoehTmsyuV3PK44y8tVgAgaJ98E7EYnEmFjgY",
  "key24": "46ddqdcbH8FFbyKpG1T2tDKFumY349nGuuqwAs36SNGaiz5pjmEKLQp4mCB1siADeLCs84pF1ZS6eZm55JdVNrEc",
  "key25": "2xWxjCETMMpJ8V6Q2ghisbPL4RF3VEJ7Er6C1DYbRo89sSpvYUtPXfzBD1CLC1tERkatoZ87K3LD1tQPR7CetxrZ",
  "key26": "Kgg6TLmfEr87kwzM1sfaGau9ozMeM51TJQfi58EWWqKPkXMELsPUbWGAALwNYjev7qAqJqjghs8UqnSZTsM5o6Y",
  "key27": "WruzFHjJ3296YxKfSRbC5YFnCXJdbEYdhoTY38aHJ6GB7JrxftpZQSQAfRkZHkJtQbHaQtdaCafJMpCJw4rY6r4",
  "key28": "5FbjTB58w5L4pMd9mR5TngPjr55qX4S7rvrXhbfmwCyXsRUJm8mAG3eijwdrHib74gTaGt16QXzVHWyEcE1h6UEM",
  "key29": "hjunCip2Jvvn6K59qLfJAgakV8vSsZ5ZK15XAM4h8miggrwrQsoZFrGZqcjr4DgCmDRszF7VvnK4kVuKePus38Z",
  "key30": "5LYu4KwuZYfj5t7eScAaUUF1qMWyJeiFUaQe1BzfbbAfU5U9r2pzYV7YrVXaGL9Fdt6hsr42psL4uQfQBbwt4i3G",
  "key31": "3Rsg9XpABEMQESkCpocUZEA3NfeFuz6MmaYxRtTv8wZR1Da7CuTWEPos13Zzo6Aa7dgB1Q6z4XC2e3Li63H21Meb",
  "key32": "41TBQpDAK5Gwb7cGE1AajKCbGTBKFoW7VPYgvVkqCouG9oGwtqPeSocuETp64JbcsRtcsqXyfFbc5kNzioVkz8wp",
  "key33": "2Ni4XAQvPdE34w8xxtC5QuMRbSdMmxmqfXYmXFcSxp4AQabDFSe8vF5ghR1Z2xNcoet9CfDeUqpGkLs9ovJExbgX",
  "key34": "3PHVUEMRcEStqHp8eVmJfkQGzGZ3Uj1r75Gc2D78Ju2xfg2FjVCAqfiPqvhwB657xPPhoZpAcoKzuFXystQJPrwp",
  "key35": "2frTWEunPBSjyHMAARbx1kzZReEqZrTBQM4dZi1676QTNavrd5fG1GLpymyKU8rtka67yPKr49gNyJqDSLgpc1M8",
  "key36": "2c3sirq3xhEN9K3bmuhqbEZshzoJQLam6X9VUPEkhZwoq5ZXy7wy5PJAwYsZYD2o8x8MKZBbsicgutotVCsm7tMZ",
  "key37": "2E1PES8HPzhYzenByPWtJ8t2WjqsVnrk1Sq7DRymJZjyQeoE6cpYFLnz5DBVfafCnpCcH7ERLXiGg7shUmQYAmD6",
  "key38": "4goZXgv9B6rgNBxxSFpSZAPys1jq9YkteFAd2KY3ZyKqfeYsLpW2Z7qXoJyFujhtEFhybqPjCjjr6PbyGeJSNmbZ",
  "key39": "XK2Acx1BffdboMGdxzvZYwye5bqojRZhyFD2wQfG2YyPmMasWFVoFtYj2apzZHGPwaW7Jhv2LUNVW9cCfQQPhTG",
  "key40": "4Y3firrtBPQ8XGPyJiMgrC9HBs2R3ZDBN1NLoA4xj5oHBEVAUee75q4STSNjj9tVXRY6XH6m2rthc7pc1JvApi67"
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
