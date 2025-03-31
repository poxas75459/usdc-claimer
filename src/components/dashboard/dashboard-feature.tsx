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
    "5MjDZNQntYJocBohC1bVTWFkR8D4ih6MMqZhyL5iigm2JBvQVcPSxZS5qShpncBNLcK2qHpkKwJx6d7Auo7SbBeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rspy2gmNyfUExPyPX6UiaAG5ZaSh3rVHc7RaU996zTFZz9xS247HEyL5TLokZH8HjwbGkxFZSkdU9LpPugJ4z61",
  "key1": "Pf3d6E5a8FvakJQTczkfwCjpab7qYEbXuvyT4Hde1Yx2p1JMd3qCBrbCNk2hPNC6ef9LhS122Vy2vf4cPQAyrP1",
  "key2": "4wLLFLcpx2aAKQQJqBpgDEVApaHFEv3hN5JapikHcWV8X1ykaw21PnUKScTuwrkmB4YZNhoBezHvznkWpxiPnUc9",
  "key3": "soa1VW9BYw3FXKMPK4PBL5SRTVuAKZptPkNS7FbsVMM6KQbPfUYtztZzD32GfmF6uHjENdnNqu9vbe3bPzBW6GS",
  "key4": "4yKpFnMkGfCQuk85nevMSf9Wu2MfNTpdkS5LDhkGd4q8RJtX1D4C3FJPtxRgRcq8J3C1Tirs8RRxFz9FdXQAG8fk",
  "key5": "2akG9Yx5rHmF1JVUxWGoPqCWX4DPdobXnKtjYgp4DbLoVH8rwmvmCpMRfyZDy8cVECFSU9uXM723ihh52KKCCuE6",
  "key6": "3xLr1474E9bf9gXJm1K9RsBLbigyErZQmaTysZpQmNyGPXUmSQedPzUse5jv1aqHwCMpKAhGxWgA6D9Vth1wHtRw",
  "key7": "5HSW2UwguwaNzcV42nfYa9rL4ed6rZKZDxHUCJn6wk3YqUYr5da61h2XjxspRdbp5HHuYFESbkmn2zVK6jDYu4NH",
  "key8": "58jd5KSA21hCS7cPpk8K3PTTr43vU3G1T3GaWBZKbDbbEvuRhrcBsxvrnvs2iaMjcCHPCPLb1bite5aEfS7LuF1M",
  "key9": "3ddqEM3aH2LipHiV5Hp3Ynkosec9xZMKQ6DnVQSFtmGvWRKLKcMC1Vqct1282Rh2zCaworWZuAH8wAjbc8HMHYzC",
  "key10": "Nju39zeWCGJ6tMgqd7RXiGGytMNzKETrpuSPzVSpz5aRyPx1yLCuEEAGad3AdMSva9rhUeKGjn4ov7rT2g5RLUr",
  "key11": "29nCEusEyArHhuAmg8gXS8WgKkgygNNuKYoeBvJXQrbqfbiKW7TVFZaCkU8iogTRzqJiZAHGAEt78WxR9JCMKA4S",
  "key12": "4mxwNybSSAT3QD2izxfUG4sk1Eh1EYS8HSuvwymCkcripqq4sYJGPWkxePavgfqKvdBw3tCkwJvaNSd3w6rd2h1",
  "key13": "9tvfxs9m97LqYXDemDhfFUvTKh6tQHD9H381YoXwwXBK7J7g6SfScoZ1Ku3zVjrhtjdMZv2QXFRqfULNLhjjafQ",
  "key14": "2zLWHjPw29bhKPFESnkyU3nNWVoR9ykmFngX2hbPENmTmRcRmSwJ9L9HmHR63UWxGnupFXc6TC1zWQ6Ncoqd1qtM",
  "key15": "TQGM8zDSGQH4KfRfSuy1FhWLFwukwsAPZn4kJ452mWdZ7HPwj2SdoHWEPGdWDJn1dJB7hARbWm1gcETrGNxJsut",
  "key16": "dCbe3gSx7U4hL6yNEqpG4K6xEXiAFhUunHVXyiLwzTFvDdQuuQdcbZXfvr326fuNqbG2t7nVHGwrSGf9oWjuQ9V",
  "key17": "4o67WzvEGGnQm67CNjokg7ixtWXtQmQhHHBv4R3ckHXFGTfcT7wQhEsC4DdjRKPnKUYoC6HfCecpiiayu1UCgDFZ",
  "key18": "5W8Vo1NTUAzbyoWWQTwDQDErvK7rqc7aCAWZxrQj6K8Yyba7EjJVvju1KpRgEFMgJH35Kp7ctyJCp5WDhDc7XJU9",
  "key19": "2GSh3Eo8wst7rU5K8MbJDjkqJtzZRMA13xLF5K3ovxQWn2qbPJExLQgAU7uNB8tkWheAW3GDM3SeSQvwVRo5cQaR",
  "key20": "5qeYHpDdNSBdS7x2W65fKpS5UTKpLP7R3ZXHGxF5geLfwvDhPiGA2d9pNaxF3CfkMUWMaotVhJw9ac84hn5F2LQE",
  "key21": "5WBwrw9Gz8apegPMAe6ZNy7B3rtLyo1CVKhR6riwADp7hYJSJTiMmxLUNsHQkwbG4dSy5ximihfPsd1NvP5xCCft",
  "key22": "4ucqCrZCFdZG6FqjQAEEtXs3UVQp7Pv4zRJBtf8aagoJu6CZhhSeM6SVg6aZFRGvCErfGvR1tE7L7CuZaeufCpWr",
  "key23": "2GxBHarbQHNgEGMfXnSob9bRr17Zm4RrMp3nxPyfd54Xc6NyUXn9uMHgRaNJBiBxUGLKsC2tnZFbxQigYKAJC8CQ",
  "key24": "3EVco5oHcjY6MG87rHqyniERXuNJN6mftSduwhptmzpW9HH9v2v5BStLgDMJioLFK3zHhhHxZgrq2KArLHJoJDmQ",
  "key25": "67iKJzSvsRbTqUXPhCuUErWFnnpe7vjE3TgdCbqQCCJmV4M1uNRjUoTYgXdHQmDvXRd99FKMzqSU5crETaxghefy",
  "key26": "3aMG396N81i1xBSyQZBxEYor2CnYsrvGsLg3R9XhyfJuM5zsiK2ymRbjAX9U9EpkWhppjWup8hbwFg9hgDbWWtVQ",
  "key27": "4ayz9gH7ipQDm4Ag5jNpRen7ebDz1QGPxt7Htr8EoD2s3uBZDToUDmyG6w3iu6ADpi67tnVbQ9Ww2F1LCNDJ3TEC",
  "key28": "4ZEE1hMRXHPixuhoJsWEfU6cqkGpwQA9H5bdkePFiaDATV4eSA3WTpaotWg21TF4NbeCqCu9UKY3Gk42YkABUQtE"
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
