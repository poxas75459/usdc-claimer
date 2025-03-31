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
    "5bp7WHNTwdRhcAjAzggvozovQyyhBimcsCBmxeGYKWbTTxyh4MjZ8A3nkjx3tFS8d1ZdD4WbCp174LW1Dzfx3k9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSp8r3PJMHG9PRu26PCYyuv3bzGvKf7CKm7HJw71QrCLHbcTqXWEQzG97fVszcxDcmRWoLWBiVxT2jJdJnsHZ2x",
  "key1": "4eBrcaCVJcBsUDCLWDP3UwBYxa3yxiQFnkXuozG8QNAca5QYhJ1RYARy85tMpeUeB2hzt9AJT5kuL5kd2Wy7QPHg",
  "key2": "4dFh7fTpT67wmT7qV8WwVQaY3Dv5eZGDaNHPujVzHYbBPNFvvdrenjVPmRcWtnWf4AEhDWuGmhduWhQSTA8aJ5Un",
  "key3": "5yfoyUQa36MrLoKL34mRGTAYaj6NzenQNJ9P1rmYVrmKgdEmiKZBDz6nMcvJzJDwYLwXNG8fyZP15b4Qdpki1G2o",
  "key4": "KnJWxn9BEoBkJXAbLJP4N8vv5UYPxccWm5nAHmowVnUGwvo426drUvEzrVm3BY7N5qZvo6h6rVUJaoVdqpimFXF",
  "key5": "39R4dLV9eLApUm4HKFoocqpE8nyvvo6i4jMh6EPYrDTK5Uv6SkKWiKkFW1ZW2f71XqrMMoA4NxeedtxtojvhV4Dp",
  "key6": "5tzAaBzAuj5yD4spxhtLJSPCDwwqppUn4Lou5tkcxf4eCJf9jD6ANvSnzbAGvMUNxeg5MZbCW4dQrBQT2RMD2ddN",
  "key7": "2cYFyep5p2HzQYCo6VZGw7LHDdZeE9VrUqNiLwMNqEvv87H2Ct2Y6LT71N4nkkUnDLa5LrRp92EGHJhT6EJysZFm",
  "key8": "RrHme3fAWbxSH8bvU7BQqJMMVHp6JegyHie5AxdDhjG7dErE3VoQ1N2GM5oX84WQscCvuKFJuEJUfHT2oWWjFFd",
  "key9": "3QmRFSF4fNWje7msbGrnXd6NJtEKynunLUNexoJiRa5SKyJTvEV3tGRiq3rQ2eEZqecbQQboug2VD5WYfMzTdJdp",
  "key10": "z7f4fWohbXdZU3LDzpQznYdsaSTFvsvWkGy2atZ6bq7MweyE7kD9MFfXwYinxQcPMSpC5UadvwA8NpbBbd9UffN",
  "key11": "2Ka43yymbQbkxYPZ1QKzxegCTinLTH5XGCeK4LTd8U1kz2P9k4eKsJej1yBwT53pLb8GgJXsqrcqeF1YbSUZSajb",
  "key12": "43qgiEJEgAMj1RRzxhT9KVAqh8p9geiDFqSTdZDtGHmrhhiWxiASKJSTEukMRU7vCzWseyL4jjoHZnVVerwVyca9",
  "key13": "EzPXhu293YoB5Te22A3iYckMo2XuBP1z3qsPsxs7TzF6G7eakN1bKTAVnbi2bAhHbdpoe5vYaj4Mb7hMP5i93ve",
  "key14": "4YcSgJib8ttELBQ174ct26ThVG5yrcEwyYyLazU8yyTsJgAHuM2RvvSuCCSVsFY1TosM7ge5KwG9Y58XzCtvyD8e",
  "key15": "5WSz3obLziH5RWcDqARe5KH3iHn99m8WynnaaPAg8FPQiAqzCXXNqnjc4zYuz4362UCfdLVc9TwJc9T9mpY3oWEM",
  "key16": "WmufSXQRLfvSCXsZm4rwuYjUfuhcjxAXNrhu2ZydMAiqo5FRazrERqzx3peZGdNJ7PSjAtYgz3scRzuoGtspxcR",
  "key17": "5aiSuKqRYvMD2svaJrVvmiYfHLcN6kbqhNBNYbsoMcgntsNNbzwtUUsdwsaVHvhrtdxmSe7w6jaXncAjAMobMU7s",
  "key18": "5jnwXx29SAuAJ5GrHV5TpBn8fRctQxxk8L96HveV7wKUSbAVo1whQ7qkNEPDvjAyhbngDZ7e4emqh1cL69Ukbhn2",
  "key19": "54yS5kGmzGktAPB2Pn8ioR2BfsBSSoSXSbv6vGLDbZDkxduoSRwbY9WGXik3Bes62yG1VaEy6dRuaPZ9wzcv8Ecw",
  "key20": "4SwBWvbUxbJa1ekgQMYojMwstGpYSVYsLDmGM1Bj1Pweq8MJyJfybVPiqwHnYzCcBdAiWP6qs3s5uiD1w64FLzM1",
  "key21": "4rU43rgk2DgVDpuUUEJB7DrMeY4Njg89UEHUo9xPbD9T5DXv4xhYCfrQQ2V9NXzRii6hGaLTwGHE2tCWzvDwQGNE",
  "key22": "5tAf4vLw4RKpKxaVpTNEBhyHterw7jtCpeaoFVWunFopTbFy8svSSQJjWYoUS9GkCt3FSHfxVEWA3mkXzuJzuV3f",
  "key23": "XZTRYRE2f8bFHXUwZC375qbNwNWaBCLBD3fGmeMszany49QpXQ6cgYx9TtVXvLxksMxocJewxY5iJMY2Lf7aTEH",
  "key24": "55zJ9bhiJCu52LdJQjYbPgXa71YW42JV8pBCf8d2HL8UMcodFKp4rc4LLtsV9e413BBpoqHHKpBf1UvEGNDERKFZ",
  "key25": "SyrbLZvjX71cbAYSZA8mdPQXqzbWwCYx6WQXZmTWDnHruztNAkyN8FygUoWExcuGXp36XkpnaTeX5SkDo8Rq1kJ",
  "key26": "5vDHotRz28L9fQ3zQ63Xz1NUpPypCJNMa6LimqxndectrVaf3owAnFk6cjCjSqDwgVGv71i9Q9sXpEdYVizUqM4Q",
  "key27": "3R4oKpHoPekZBeyYNqo2ZiJPKEqheUMbVCKDfkscHbRHRYYUR1uUTgP1iHz5aiiwuhtrUz7BAtiEEQNTfD3qJvSG",
  "key28": "5sYVxaguLG9jAvE7AXDXTDW75886bxnpfDJx2MYESkQvG9k611YgC2VE17Y26SNyz5hpztG4TqFmfUEQ3XdgSJfm"
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
