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
    "4Fo35t7L6AwR6DqpHmdDk9297rjNAfeo8hkPbrSiqZpchQniifyxarQkjwrH3dbvHgCB3MTwpurgUnio1pNzNHC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vX2dGUXSwtru1SiEH9ZvF3oYe8gLNnKhfczBJfsJdZsoJuAuQCJx9d2vQq7w3XwgrzF6vkvNPraKfKyZZSxHCa",
  "key1": "2jjsJqnEDddT6XuquBPt9VXBrQ85hYMQJ4xLQ8n8zzw9Q45LzQiZUCi3zghjkGhVJotBNRy6xfhXrucUiK9XeyZg",
  "key2": "xCLgLEN8PnvZGP7uhZByRfKd9YL53FnoZYPe7gdKUweXa5RVT9ZR7KNEfjJ3717KSvmu95nRH98RwXGFpPpAgTm",
  "key3": "5FpzJh3uhkxc73Lvw61rqgZq8RWupXkzqe2rCS4jhQhdRYqZc1QfaB9JwZ6nzKBzA77Rks3hHrk2cZSh1pTEx9sJ",
  "key4": "4tk6aJ45abhwJBQNGP8BPcTaUBvxoVJfLuZUhQpjRAR9SivV71LhVFxCkWvwcC1uwNGLkRTCAofFXYgUMYJBE6xi",
  "key5": "62tEnAhb5ndcixhqBTMygGMfG84xfDqCsAhp6xKiiej6V2rs1PM4EWWbt4zFqbUqqPf7iugo9PPWpuWQ2ds51R4U",
  "key6": "MuST2y2RWDBwnzwy323U1W5dAXj3dLbbXfAesNUTq2VefMoT75gPFUmY3vr8uiv52m8ogXKVBfnB6DrceUBS5EC",
  "key7": "29qrVqL6hXvHFRp8ygpCaT1FdG8hq8g9btgFftqcWyTfkvBE7L3Hi5t2bXDbLJuDx1kjKQAYzGQU5Gk3zYX8K8ga",
  "key8": "61DKCUVMykAqwbkMpbJ2MTkaD9DWWSRb2t1TcyByi71XLwz4sMLsY3BkRyXzecKa9HQH3kp2cMiDy7a4ghjHvSco",
  "key9": "5LLLYfF73FjMT8Tu9gxTDFnR2tvZzcP9gHvoJeHEEbkkW5DT4uxA9TXYEHokePzNRzAFVgC4czKSYxdf2hpvSUPJ",
  "key10": "pDgqpd72XsapYLJpjGGpA6Z92aJVL68R6RbnKoj2D7Vzdo27YvrzWXQSKR7Cbixr1YdP4LG86tBoLK8FmbrRVA3",
  "key11": "5penuJNV6HUk37qRLefQbr1dJfwBydx6mo4C8NDF22whwYzjVhHhJ4C7SvkJcHJsyLHzMwoJVdZjPFCppaRSX9en",
  "key12": "4ZTKFbEkKF3zBHmdoKwSjZJkbQxbAmwrPz9sdy574spBNPLzdBs6JMU3nq2V1WLyZWJhG3FdQyzVkRG4sE8sr2mT",
  "key13": "yrREyj4iHsP1ugaAqhzqsUhQoGSHzCWpGHL5KS1NiVgd1zHVSL8X2DtFuDQWAaUBHf4kj8jxHgszTdGKS9aAu3T",
  "key14": "3DtbKJwLSpaMtNwqSBs9XntKTpD6CfFLZapABsMT92iW5ngN679R6vVjbxtbV77yLTLXQuKihy5ywzs6XboBptYt",
  "key15": "4wjx1gGDhUqufEZQYrsztKu75gw23WJbC7eJuUD3YLvLNZiraRHuCNeVj74LffFRrhM2JH9Z9ewkeKShw5cdEZ9P",
  "key16": "5KsJefwii8RAPe9fa4MLQZBAHhTobyMfgEiJbXzWKscFfh1SSNFfpE5gdSBBysvJMyHzSzucPxh6zZWSQSw3zBQv",
  "key17": "3ErRnNRqzgtW6ETBUqJZqDektxcH1H4TWuS8hrUeD6YT87A1hhzEb5NzkciWHZXg3yoXdUUn42DnSwQeVKKKLMyu",
  "key18": "2UcrCFbxsCj9edrqksWEeSYf38j9hT3uQyQn72dCfsMfFqQGCoxENdGb6ss6VJrLiQvzwJHBxTRnYymAk6qTZfdG",
  "key19": "3cuJup8f576xgz76v6PdYraiEDSBXarnANgqsXiDjHNZ7FrCZNhjkjywE6u9UnhZJmDPze3aGQP45es2v3qJcUcA",
  "key20": "27GcXtro3CNVkerqfEUu5yWbFqoMveWcwigjGpvFjmiUH3c9chKH3MRd7B9daAYCuHyjNhyf8He35oXU5bA3tPcy",
  "key21": "26x3CYsR4JBMLBLPCe4JMrCrs8Wq2kbQeK8kR1rJ32zArfJHzuS2rJyG5E57eMtEyUdDeXxnbbmig5VkVQK43yig",
  "key22": "fBEGnNB2ZetzNfAopkZETpSaPnsyc341sbR9Gn9R8cuUdfMrnX2Kn2vUtNKmuHyKibMa9mZroL63BcmgNrseaCF",
  "key23": "29nrDK4tbkJ9AUfRGeFAHYiLzZmqm4gB4RqpYvwyt9Qjq46Z4tSYmmamLtymicZcWZcswsfF7QqZCe4CpJVP2Fz1",
  "key24": "4FZFZqo3Rw3f3p3PDXEdS3uYHH9Dcpz4b8zt756LYexjkpK8PiyDjT7pYdsCqgMALkKsPvP4Zh6ndnH78o4i1Vbu",
  "key25": "5E1Ykbn2Jp5HtMejCBbGz9gtd4BAEaPKAD2hVywxBe3TwgTHmjeoJAmgg6Htdesceuz64X79RcrtFWUr49oZUN9j"
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
