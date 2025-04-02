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
    "2V1dDQHCDvsGnZKPZEreSSTJ9rS3fHjJWuoDUPSMWqLUuW2As4YfHHXUeXNWPuA6nnbLibLYt9jbBMFw4vsQW5pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjHxoZBzk86pgXTCZZ2A6STASoTE4QvKfkjJJE4YLo56FAWb9bmZ3eh5j8p5fmtkk7EKADs8k3YZxksHMnpJqCL",
  "key1": "A3844mFk5nSdxNx2SNGaZYTovBMvFJDQh18NsA6vKze5thZCQiDYN4kLaKPkPptn2STZuEUaE7mgaFzAUuWfv8o",
  "key2": "4zjv4dH6FgTAYjn6TWBffNertPTLWeDn1YB2gUPPjwqm2Rr46sBKLWJFVxioQFu54fMMQrdgzp5CXWBJJHd3Fq5m",
  "key3": "HLhwbeJKMdNMCeZh4o7FBbDiexjPyQE6gHdfkFKHYSdBB9S3y9FBnAZK5zkQcEjZ1qtKewBxLghE9gn4dioMhJ8",
  "key4": "n8WJrMbM91Vvt9JEmraRyAmD2ebaAxECkdkUULcVqeRr1ZGVSPvZiVhvaCAGnQb7tZHHGyZVSEauY3hhjHcM83K",
  "key5": "3oYSjpiBH1wTWBCF8faiGPD9joLRaG1UVACd8tkAEjEJsgx6vcD3apwSYpvBuryHm41wzDxHDv3m674dPRKHjW6J",
  "key6": "4GMF5zGJQ9vLW3KN9KFq5gZtV2cdqbjPcGKjxSCW9MgBi48V2ch6DHK9mk3yQpoRrZj1kJQdSFjmg2zX2dr7YHWS",
  "key7": "3u4HjV2Phjb4ECAdU9knkzZCfA1wwGRRGPCZLje5pm8ZbjgogY8P5qLZhdV3o6DT2AkVfRhjnXe46F1hGZC2t9ez",
  "key8": "5aooszyRepRHzBJ55twWVtgMGv5DmD5xgZeo3HPB8TvknG4sKrjdgEpyyyve1YyAnSn66V4asPGH57zownoJjeSh",
  "key9": "3EX2uUGmCXzH45WUS74yBUxmD2ovvHZLruwx1kAfF32ug2MkUAmDqHEewB2cD8jV1nTQMVYXtLCPh4LUZjQ6de2s",
  "key10": "4zfxKQuw5LSGQjxdAYNb37Joy39nnmsXdWqvvLWobvvntriVhQYWFyzxRRCUiybLfgmC395G93H5N8SCXbv7ofm7",
  "key11": "5KcK866mEFsbAxwVSgCDVQ9uRKKDuQ1W1WeRD9MdAPtioDMbcBM1XKThx2uYs54JyG61NQ6cfLuanJ6Wio3XLW4k",
  "key12": "3AxSmNtevjTMZZgjtTQyPPp33re38waNbgf1RETUq2nkQVkFwb35QytvCfwzDFeZoC5UrRBAfamJDx2DRTgcM7j",
  "key13": "fM8WeZBHftLr96rosPkQLnA6GymFPbc19Ws7FpazhdC1SVJbGCkvTPamRacndbEJnxqaveUcdhTpru5ki7NHYnG",
  "key14": "5cwETpdNDXC62dFqc8DvpbypHu9Lbis5BunYJmayoeZqjtB2YgED6xZijQy2C3Afzpv9Q48nLQbdg2JVLn1mjenF",
  "key15": "2or2hxxbSjR1qN8xC7wqTwbqzYuzoTSvYyK2Ke94CbdMTg6ZBscX7TBfgHqsbE9aauYpbGgTwqko71KK2zQCfk7N",
  "key16": "63rhRcHh4t3RUBw6fgWvf33hJ2HsV9yaZKyfqfRDHWrui8iNWFy3eZ34M25uxpobSodkF5ufufTeh8iBQEiRDX4H",
  "key17": "541GWq76zvqfHhncs5UPSQNvN7TvXSHm9aL4g8LHCkJMCi56jERbN8trgJMaofKAFJ282WCtbrTXZRSotaGvjcNw",
  "key18": "5zW3esnxDgNggKzEfAsJ1hF5iiW5gpdWvnDs8c3PxTGhh1Pb7SsQEaPG6JwV3T3Joi94MsKTmUZjwFhX7Fg1Keu7",
  "key19": "raHYQud4vZpNqE1szbtVbjJTo6M7Buhutk9GHayqs6LMcuQ5hn5KjmR75LTVGrcYv4mPmPPt5Pp3jpT6uZY99Wd",
  "key20": "JZYx7Rw1wdjbb5tepKYopoW59oAU7UX9pfU2F9uC3jvP3Fh9xSznrfiKZcioJmBSdpi8WSFL2KvBqikd4mLbWYw",
  "key21": "9DFu5xu2k6tHEU9GW17bV44cCnymsVUv78irpHstWfYvWALp6muJDBEzXiZE225uUk1TETpuTTmPY5hRkjnSsyG",
  "key22": "4BXLTJ74JMQiVESf5DAtEZq5TYgyMVwm66LATDA9KMYz49xgdaEVzKzJRLxTUgeLRAMedd7DAAJGN654xs9Wj2fj",
  "key23": "29jmVAbm3D751iAbnLnN1GDcqUSVbHKDGLJQi5zhsnE7c8YuRReWKAADF94CCgEB9xkwWAWpEhLMEy6nBKJWrWxE",
  "key24": "deztXY54cZeNuZSkbpAp9JBX39xgnRofE6EfJNjj912YFdHCc89aziLiHmhyRtRU3Pinn6nFY8v7BBbEDLnLKQ4",
  "key25": "52qi9rtRqhj5KxDAtyow52gHAxNBPmp7pBDh6Dude7izBktJR3R1pFSTNsWanUBu2eHvPKkQ4DPR3XqbrwovGqUz",
  "key26": "naKUVV9iHwqkHyTKMHt2CtrEGfD8h7HfSNLAHhNpgXCMZsZ4i4BkK1RMjMeJQ9a6dGhHvhzYK3CMiyaSLJ79ixS",
  "key27": "5rFsT7KBP7HyrtrRuqDu2LqDTu5XztcstCoqAXsvZTDA1TmxRaK21Y7R2xVxTTd6do6y8qjY7XfPA6qA8YATNNgU",
  "key28": "2ifL7ZmCUqarso1A2CBy7ZUGBscaPAnKd4doXBfUqmBWagewxeBF7PKk4isCBcVwagEvhu9mdfsMSgRd4AcyvX67",
  "key29": "2hpyLuyGUCxRYnmYhAbNidvi6ziKnis6zmGLNMdhyitQvU7YHG1yvTHY1uhkbSLEfnhg7ZAgXR8EJASqkR6WyHjz",
  "key30": "64UboisekkAJeFetmfyHGe9UC9WV9ERMxB5vrCheiftCJqBftPBExFEM3en6A6quY1tQbDVzr2my8YmKtY9g816d",
  "key31": "44342jrGUa23whJ1mq8XGP5jGS2Y38RpW9MWzEkMTTCyQH6De5SHhvmAtX2STTdCAVoyeupPHeVxoeEwzYx7GnJG"
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
