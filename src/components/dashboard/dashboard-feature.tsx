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
    "3s9QmJ5qhoaGWC4JYZrWqng6TAxSbg5S3gTuzf8L3X3W6YnV8DLAxWZDn72krFSyC23GN2aVwDMPBqJyQtMGSBHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TuTMrbV5hd9rKGt1e4Jui8MYB8m1QH8AsaR5sqxzSeKRLoXqNGbxgxCMCwBLMNxmrBHLHiWgvsgrw6kNpSy1PYV",
  "key1": "2RdUuSupoSRykzRv5YQLGpp6jfdakYaHjXwYYhBagDJpqyVPLo6pKz3xbzbk9o3hRStG916SH8wbJ5cTq5Nw9Z2L",
  "key2": "3DtzCM5re7iyT2rSQjntrfvxHv5kTQQQ3msiAbXHSpUBbqU8Eqd377Qc2rSKeKWz32kpdDdHrU68ZZ8dKz5EzSHN",
  "key3": "4WgkN3eu3zPU8kdy9eXVsTUrSbXTY7by83STz2ihaYkSdeqcfRz3tWj2Vzy9htcA65PXd7s4VJmoFRiupc7QdS1s",
  "key4": "ZjeWU8WCqBNKz4xZxYm7trbDNTr2b1PPUMohYvNNvBHmFZicdAzT6CT24FJ1y2MHhMeeWTMgLMFH4aok7CCGrba",
  "key5": "53wTGFtv6wADpHntwZDWwAw1oQ2wM8dAnmkGJ8cPG3ZVkDoztTGUpFwKZZkkAMqsPQV948fHHTZp2QBhhDuiUvPS",
  "key6": "5eN4tarhuiVFSzpqBqv63wjKLa2cqJGbsWgu5MUQ2AMCnNu2v2xqQf6nXfFvm2ovd5xTCRKKkAgA4CZJUi3qFdxs",
  "key7": "t8LURit9Ww9wKczo2U2M1mYeVBahWk4P5NxgNMasfFYyJfv6JFmZNWA1YjCW2dcbs7JXiWLC1HDdE5mXT3GeNbZ",
  "key8": "5SKJJqbf2zX19tXysJgAWHt6zREZTT6xQgTv78n4LBRhHeduBfJYiz6L6gLBJ9isgX5EZjr7ageHeaX2XhuQasaF",
  "key9": "5HYse7HjguqqEdzgBwEt42Y14hAauS4tHyDBDrbS3zJFMfnR2q7ex4iGEcdTKA5fKQAxUPXL6aZyijGrC2nGswMe",
  "key10": "66yXSRR9JyAj5uzSafopVVgWVwroVJd18pDEWj9HntJbaxTXu2cx4yjJ9reaBHZNmBPUcnqLgSHzysNBcn6GZCDh",
  "key11": "2gqDrZpfqdQZZu3W48GiSvp7GejtXFN5iW3nPCKfbiQfAAqxSq9r6NxBj2zFRzxDcppUzQHfiweYPRKUYHw91Tii",
  "key12": "5VZ77k8hVbAS8HtNRvPp5FJ1d6v7La3sgp3QuxKzJuse2S4jR4BYWReTPD9ifi9huWJbPyGNb6JbTXaRSSvknsmk",
  "key13": "38vwXrYb4vXYpkT5yS1kPsti1r2ELGTRbGUyfvcJsNLxuWjq3BCsqR5aHJTmmMyZq3Z34JHXw3CSUrUPCjGqcL1",
  "key14": "4T531EsUTAMApjRSSBCWhxcoxxVLZbGkZ9gSGMock8qiKxuq9JpBAAJzDoupe7MfanqQuTsKBGEshtUn6eYEFnET",
  "key15": "4jQbNBXZo2k1PWLXAN562tUxzfcHQgo3aezhji6dbFjDm9VS23VZtbJYyucs69RUxyBei8at4sWxCUyAeARZwdm5",
  "key16": "3sR4eSXYzUmS9L4sKnjpCCrXWHM5RsYPfvMfgZXJX5eHyVHxFNJQBf3AqnB8prkWjmEEbxHRBD4GKhrx7CT52FLf",
  "key17": "4ckNLsJwEomWrSdHvoe9LxC9AbHGDQ8942oMw9Swe9DhsLm3Ajxbjz9bxEnVCqDbhAkXdCcDo88VhdbdAXGrQo4Y",
  "key18": "61zy3N29D6TDYGeCEYTH3D8YvsRXqfxGkCETYztqd3gEDi7PWhpBv5tGc26v5ApZuTDvuosBqXtp1qgsqe9CDr9Y",
  "key19": "4PLoHcQPGGFybrdkYmTfRcCrfb4eu5QvSU54P6h44o1xwRBqxNr8kyX1VKfPqX2EVF15BN5CGS8YBQEzsfegHFn4",
  "key20": "5qnRjnQmrBBxUHF7TwfZk8XYDgQiXjZvtTsmu6EgLTqa6Q1Kksf52e1Q6AYpfreWZqyx6YxbpNtfimJTbfuRNoQJ",
  "key21": "4qUmN397MuM6D5q27MFEuUnKKh6VgWu6UaAMfXhkwR34GRLKJ64MMw6LPSBcx1CtqG93UZaXo4pNwMcsge9qEMbh",
  "key22": "5iNfoYWDDGy24vkaR1dtd84KiLhFMRwn3jU999pnjPFeh4JyRU4TCEwWg2pCm8bykdJH3Vyc5JmZtW7ftk9FwX5u",
  "key23": "oo6T7vbgcfJoA33Uw8UdHrRh36Eg2yzkLqCGDo6DkGkZJxd7bYLLVk7tEA7QHT7W8CB2WFCorb9pzUiDBaiHNMe",
  "key24": "59zBr35GPHBRNeEfBmdcTGan3NcdotxV67gmnPSxcLJ3oy2buCF1JVwD6PiCRP1arDYEksQYKu9e8BEETMXtX6HJ",
  "key25": "4DqLKjH4W14giKT1A45gVVLnZqx7DK8YgAdVF5AMxH5EC4i3sh1SmiAnMpTLg8yDfZgWfB6kfBWWQMXKEQZpkWrD",
  "key26": "5fohLKiKuANHzHyNt9Ymz7DFwkmkYtVKZ5h5LZdo5CzftB9yLXvKJdqF448s7m2fMXbJy1wjAQsrFEWc6HkiXHFe",
  "key27": "2w4BN1th14UtdNBUB4AaNhQY3px5pGwMbq9SEY5cUVGAZBUJHVeWq9479hdLPf9r4v5v4YMWRD1wEs4o9k2JxPGW",
  "key28": "4cndEckeeeJFU5hZfqCPgZ3xVFZNPQFMhdAwGM7bzd7tbaCgQXhcLUuKepUhi4dHUw2taWCALwp4a7o1KewXJNjc",
  "key29": "5LXu14nxuDUAywX1HMfpTGb6HY9JsW9n1Xhfm9brVaeVZ6P1Y5SM5tbdhJJ9c1KBvkjgBexCyiL7vhyrM5devJSV",
  "key30": "podnXt7uSY3YjF1X4yr2SdmBE1DNcyT61rNZ1uRwKn47jk3o7VvjomxeEKFYz1yFhTm3g3ZJX7qZQpGjGJPBx9v",
  "key31": "45re5V1cnqoZpTzDosb4n4J9kioigpJUWB3nNGW9dwrHEtkcxZPBD86GLjgp6iwQoZRGpWrWJPkxBsunyrgTQ1PV"
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
