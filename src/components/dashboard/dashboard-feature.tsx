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
    "4deXTzhSAE1Tovr4sMWJeqRSZ51zt1kSfj53i2Jbz4LoMnQPpSXaGykNp4jMRnGkFnGbzTCN5GUk3n4DxLu3noNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eiYNAcqjUyNxhc22E1yL3p2VXa6XzheF2Tja1tgS3ZMhSjma59YHFKNipMFA5xKSPVudrouK6m9zwekrV7DKZz",
  "key1": "5taQrGreHoGT1v5oByYYUxK8ZH59WEed5uGzszQwfKJkxMkDkZNzK9q6STKzGpmaVuTTPzF1HeYCEcZodZ3KERm3",
  "key2": "4LjvBvsbQmMcX5mknfi4Knp44mReHkBFB7FS5bdpfQMjshugoEArmjfscvHX2eMkHHg7fsSvgj19xbf2PeRjoh3X",
  "key3": "4LAwm5FHK3h7dWvojWAssM7E4kibpwd9YJBjG8QweZKLksviX3dhVDCzqFB1DotfBXHeMF8waVuGs27RskZUViZ3",
  "key4": "3KKptGxm1Ryb1MAFZXea6yMfCDxua7h6cew76gYr5UYaWYKBeVnAebLB6jXbf3hZ7xoQ4DHwpHYxSbhPSQHQJN46",
  "key5": "2Tm3EKmJjb28bUwyF2cpCyacLMie76xJD1kd344JVqbmQys9dH7N4PPhd7rFi7EiG9PHY5CieWtuaSQ8sQbeKix2",
  "key6": "3zyLGYHPuhsD9VUed6bsUFEga87oFSFKeJNVXUrBQHsogeLgQXTrC3hGjBNpc1KLkyFDsRHYjbmkf4sC2W2W9jG8",
  "key7": "5hodoZdgwVtR8oQ6KYqK7bGx4bzUQaDUxwP8gbqUqG5B2suDvMyDspFTmGPm8wY6tTkbxuauY7vkxpCu2UyhcmBs",
  "key8": "4k37TVKrKCizg2CGT8bUzPx8hm9r3uR87w1nJ97e8FEZ47WxSMk2xFoKXLEPZsMvTtAEdZuQH5XoH9JgxfJg5y1S",
  "key9": "38rSZg48Cd5hW1Ak27WJMobxhaguA2ZExzNxHW5t7LHAduw4YfRW73Zb9DtNBFSv9Jr1hqVA961c7AH67R271FkL",
  "key10": "4Q8rnAXNtb3Pt8AjoCvwf6JzF7UBpUNgMPxqfpmGs524oBAkfDe5nzcJoLpNmQnvagrGR5tDE41Q9VX1b7Zao4a7",
  "key11": "36vnyUKcmvehGEBLAtBcfQ9pDC8P1taxuRTJvjsMmPCdcDzb7TDrVCs7ftwP66zzcEJ2m9W2iwjozJELFErevEu9",
  "key12": "63r9mWvASnhiNgq1T41pigxAA8JMiMPqM5f9rS2kByfccAyfgFUkshCtyYr9EJKdYEDxETdfmaP6iuRkKuunxtr5",
  "key13": "3gc2Riy2Z53A9r4b744ubaMumLu1kNX276ipfzSvRGVbNLi9DqBvTPjufi7CktG78ntjjXpj4Dwo9Jhoym69DahH",
  "key14": "5m4kdELMyQt8xZ6nCHznqfCvaC7MS1KmfMw8n1MkDTZkBuoqvzCM6VLVi6utEVkVq4NNcjuUm4dWMQRDeJiP8dzn",
  "key15": "Enq6B8n4xz6iqYKq4CCLC77xeR2s8PAEFfr9o5hBEDR6xfae2y8wkmNfj6BSo8UEEYa5KUzhNGRy91xXkXPWG4R",
  "key16": "2FmQbML5VY5swGhz3Nn7Uh371maQyDuWqgeTmadgzUzBQBXnQWCD1MS6eVQX2jnydnjKzmSjb37wDruVnmxDgwN6",
  "key17": "49yrjhFDWSENCHJjugE7qoosK53WhPnRV46YECKAbF1sSK2nuh1ytJzpBuJ7VyxmCt5SoYFtnFpZtrKpdLPSCSNB",
  "key18": "KzUXDkrRERp8b73mFnmfDDRJ5VqWp8Bzv9r5RoULjK8ZSqonaabiwVrPQSUz3163UD4uRR7dhpQEY9L8GcW5qyG",
  "key19": "42JUcrvXgb3Eu6PFGXd9gm6vCJKXFw9bXWxwtizKgWYqx24DFEFsL3CAofP7Tx2Wkydz8BJKMnECriL5jiGyjaP",
  "key20": "5963C5rHPfMeyTFGMwsneWhdAvi6M5522ePuYppLJr4DMVPwkqQrQYQdGgpQGet2ivgr95Jw26VyNBvsWSmi2scB",
  "key21": "zrTMocmeSwwBtV74GGhKYwBLCGHbf26Fr5drENgV8RfLJADDLhcXUmY1uFifXKLndtyE4NvoL896qAFMP3JyMHj",
  "key22": "rwnG913wfLLJwRrVQAFgLJXRsQATrAj2n4S1hPWLLzszRKuPHQiavgsFuzHinano4nbxLAuHtfKrqcnaUZHtmuY",
  "key23": "2P16Rmzh1cpN18LdyCsbMgaZaWsLpoxgkSxEg4oBCLdKS7eN5Von3zXum1ySDUcNAGRpJXMiDzz8ZzeXPw1adLKP",
  "key24": "2QxxEJipc3EuVvYhp5o5MwtsLo28efw49q57j6NfpzCF1XqnEqVnanPmVUdeWszBCCCcN8oHKSMQDhyMphZ4dq3x",
  "key25": "2shbRAqxw6VGeussKL3Jny7bVNuvGNsTJD2tJj48H2EbGTFZtVXJ7KQXhXXHzrthFYPZXvHQ1FE8bqRJxNJnwNKs",
  "key26": "Svkq7LVapWUigHsjWtCkau64gsgndG1nH3o9wPuXuCNt5m5hk1gYWeN3oCFrCu6y5xxweqdAdHv1ML4rz5g1rrs",
  "key27": "4S6HSLonmUw7vvUeD2DwCXL3P1k3rRCgxkvmwwa5rhFpNMphwZ8F3a92bDdcbYTcwuy7LjX6wg8nkSnM5uoDYi9K",
  "key28": "4JdjyDaPyfZL9ixS7kidphyrxnuFxP9fJWp8fPv62Xtk2bUjHoUZKHbnfHqgtgoR6mqSkthozHat9GvPQ2eX1S2t",
  "key29": "PSLwdDyFHqNyDVaBtvt1n2jbaxpb8wEuZu8nu2mn5DaaSTH9K5LVEdZtXmFYrmYWnKu4vscj2ppMTSmfNXVr5vy",
  "key30": "21bwym8EUptir4vKgDAdzoQBLwVxV9yuJZYwUJMg3khNkVfWakTBE7NmAKS954coKeaNmc5Nwdfi3XoBYKKPs6gD",
  "key31": "419ocBgDt9s7A4whRNYe7NtqbiLfoeHPFKv6BoWSKojEkSPNo8uWc2wUWKpmHWdjGevD5HAspv4t2EdQyUbHc5FE",
  "key32": "4dGcfvESxjsLaFkeTU4j2KUfw2ePF3Cn8LytwnPAnc29KfxK27GMisTD9UTPD4ijeooEdCo2q68dZqrUW71tsz5d",
  "key33": "34ZdCXpSm2j9m9F6NscS4UQnNJUCsZJqPjTdN5b83qVPEUY7KBdo7xZuaTNgwL3mVvf11HNNCtMT1MoikfDTkGdU",
  "key34": "EeqEtTEyJMfepdUS7NTzP49F9t4PvWgmTQZivYJJsTqYHbe5FSarkrcxUQXf9rSiwiNxyh7VTUC6CtMkSfcMVSe",
  "key35": "3PHgp9BQM39VqwpKAKLbWE1nbCHhpvhbKRMcXXPMfQHCHgouNzFR4cXf9fmf83khnquPYecE2EYDHEY3Xj1MNGM",
  "key36": "42qkx1EpKiDixjS34zeF55mCFAMfUQkD434CDQPrNyQYsqv2PWXDdx2g9at79Xbd9EWe1sQ8WZVmoWsnA5Hyyrec"
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
