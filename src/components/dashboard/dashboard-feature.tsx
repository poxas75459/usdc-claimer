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
    "5YuefdFcjSJQNfEcDbJRnra6FFGoMJBS3rVPbrSU28VJ2mmjk4y6qntNfU79LfEdLZQ8ws7wLtu6wEnD9fXPT1Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TeNSaB8nrMpWp4iqktqWLVN4W7VGJ71GGLASGeZbtKdsT1b64w81qu95LiW6w1MZpoYgoBVckcWvLTTCuLrrP6",
  "key1": "5jT4LLErHkMA7hq7wqw5UesL1ebH3bAVrhWByFq68YPJkacnnKTDvi8CYP3JsVKVZvcT5ymmM52zVK7aYSdYoyDL",
  "key2": "3xMzEBS817Rge6MZg9xJks3RsDAD7Ryz3JAPHsT1BhnbwkmdWNAjW1Yr3ydWFNa97LVUfwZ8Qgj1vT55E9UL4gMM",
  "key3": "4nCnNphqVjnmDLwzB1eAWXRArUWbx3sLrEXf5CJUWSAUMQP7Dh3VAUEwoscj4TE6KqHqz3TaVYw8YAj7t1NmbK9u",
  "key4": "2PFBJ7JGGvBc9HsTmdJouZgHgySRnSidRMCVZu94Dt2aet7M9zoCttW3zLj9GSDXrxTaAY5V5jkitVvxMip3JYFD",
  "key5": "Hy5KuPhyxC5r4R5tZLUN8rXCX7Ltxtwb2P4MFZ9SdXrWecMbAHzfnXpKtV5dTHXKvbvxNgH4fAwWz13b2ucKEau",
  "key6": "4M4RHBL9Nz1WaurbfH6iSJqb2X3zRJP65xk7VTKWKRhhCpLwYz8nfJMeeFxJqPsp3uhEMnRbMiZKJPwHVuNFKSeQ",
  "key7": "484t9grYy6K1Q7YU41qh3wxx6BZARR5DWeVErDBnagkpJ4X3HFHcBrt5wKasDFBNo1vwUyhjg81MG9W3RMVGtw44",
  "key8": "yhLKq42iJXYAQU5dfgYMeTk5evaJ1oXWMpoZdVWActPbHMTBou1W4WvcxyFCWgV4JLNnfegRzqx31HiyZmNFWqX",
  "key9": "3sTC7Mw5FVnYfniqduKPWqUnsg7zSvh3AQgUEGHUWcNcTYfCX5pUbwBhgHsYpkJMfyX9yfMrL3ECmJ8HnNFUCwEj",
  "key10": "5kcTMXyshHV4JVUYWRWf2XWWb2nBzZXz6acjzbC5Lh2SUJJdcnaNYL6UrpWVABKFAHgEKzGyyhb6iWExtRcxRehW",
  "key11": "2cx9hhneMKskn7ff4rom8zh1mgfgDq6WsNr4ZAnQD6wPHhTSe69Pf9Mecv5FTZQE1qRjj2uE17VRCh2szVdZf9Vr",
  "key12": "572Ruzx8gKcSd3RnNfPJNdphfZDGiZLCMbY79tNgqN8YVmnyjoPSptdR13AHNApusB4zJxoSavGfZjRs5SLtFNBr",
  "key13": "qFjg3sLzeAzraSzN65GQVab8FuzJW8PRcqHZBMhfr1tZcehsH6EG53LYvWtNMDdKRB2yXqYPc41cWLamo7B2WNv",
  "key14": "4AT3BBcjFXiKi1cCbJ4vznMspURJqDDeSDv7Eg1inQNjsKxk2fFP24dgTqzdBVektVs3eUJ4XjSNiChqdJvMFnwZ",
  "key15": "34xuXEHvdxQk3nqsEM1RvQrjyuvYceTPvX9BpCWNGCZPKTjQw9jhjsxtUvk5kcXnUV7c1o4VZaeuhpr7AcAsYu1F",
  "key16": "3FwUjd4dfJHZAAXDRa3MKcb1RoNWQMR4ZBfJ1EQcqCahCxTTGrUJctQxwYCVN6HrrV49WE31tDBrdoMnwZGJsDLD",
  "key17": "5tWS4kqjpkdvw9rq2NMqbW3uf2WSk6NCuuAiXb7up9kuBmK3Q2C1vm2eNvx8NoUcbsH7cdLTxHu9WinaM1WWLsqg",
  "key18": "5pycvnkVZenMApFb44ph8gWCu9wsNhsEbctCfJnfjsUrcpk8WNiDPnq9J9mTBHK9Gb6QxrixkkDJUWAqSapMiTr",
  "key19": "2moHPXmLukid9swJhemjSg4rG55z1dZbC1uEYrsabCjYTxW8ZYqsX8B9ubuxSQt4cwSQ9Mn7bdPHt4i3TmJ4sVVE",
  "key20": "63Qczk7nvCdfQDKedDKk5wQrLwcf5j12vE7Qwq1mN5eHTWFxPwJgefe6hPTckRQpmzRenCgFwCyhAone3eRT3VgM",
  "key21": "5wvLvCwuMCsw4xmTHaZ54Mn7MjZHnjHAAzEL6GHjkpz91rGN2S5CcxNmir1HTDhvGpPJMaR6KYxPe7qwDaK7mvw1",
  "key22": "MBXKCBFWgvkgTpSoNemkyt5pqi3FD3E7rvoVi7M36BwQ9PrG1ZecLfgwzEU1vF3b4LR16dpbZ8ZcQnimFcGLVLJ",
  "key23": "2CihVkyaBgik5LsN2hCWap5NrYswP6ow5DiWsi6SHR8fsTX51JxnTZmQPUuZu5DegeCJquNTGKymLLLuje1xeVVt",
  "key24": "ZA8SEwbEtcBcpMADbK27TBM974BqebVtnKzNGcdFnZNCjDqAEHzEgerZFZ3k6t8L3qfrR2orgphRcWctsVKpnWH",
  "key25": "56qPKWsjESWch6r9MxDN8qQxeKKkvocYAHmpxoKKxDratE3y58DePxD6wRW4Rqi2SMZ2BTHHyZ3Zyu5YuurBxpVU",
  "key26": "5Je2zDZ6R1r2H9D4zX4Ppg8b7JFgQvYoayCaS4tzwNR67iaHpXTQdHbQU9dueyYtkrG1m7bkDm9Hze9s117xcaPt"
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
