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
    "7fQHHh2joyHQM6weXb4Q7Bh2D2pRd2CD8MhPbQ7oVvV8mp3whJuo2x4gga8DLk9fP1idTCdch4v6cCyPkxpCUJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6djG3koFp8sXqbGzQqU14orXAptKNAjm9hBJA3XnUni2iUVEoK5ecmB5mL5swM9jL8DRvjymPMZHpCHgNf9JgB",
  "key1": "3dWMXD11FicM46eZ4JkGhZZvb6WxFciSxUrZ4Kuq1J9ELyYEmNBRKJQ9zjks6NXoZocYiMnvKhmqnvjHYAKr5NY7",
  "key2": "563b2SwJNDpu8suGxr4f3Bj1TaJDbL4zi4ZvKasNhtjP7w8GzvkrvjFowgQbHc2RfhT6M32cVnDtS3ER9MpMgm9z",
  "key3": "5iotwK33MMxeHNqg4jj8aZfWvWa42nD1dviRtYURAFchHLwPqhx7hsvTLZD9XXxUeZLDSVnH5ujy3GAiNkAcbVkU",
  "key4": "66MGjFauLsf9TdQcbX2uZUV5bY7Nqye6b9myUd6xvFGpfxenWtzWcpur5GBwgTmHXfSPvidHEzMdmpxu9KdhG7aJ",
  "key5": "28EpQLkqvJryXQDZbH1CX19FnYufKLbxHyyUaNCqXhmCRMDjn7UoeqAYUFNCgdBkt3zxJmfftiuCaFvphUhh8x3M",
  "key6": "5h7PVKmtG88t5WQQiSamEgmSEj5xUCL6xvJP9442myec749sDLJBDCUM1SWfp5UujnXswZNeTQ7UN3jaSkCS1Z3q",
  "key7": "XsVpZmsNwycKjwoXkJyp8jStEjU6GWEWQoRjjW177HX48RBLf7379jWtEw91WLLcKNE9HL9KMURHmGdgEPbhrAz",
  "key8": "4dbMBFtsi8ZFEknpaKdNvKSCA7P5aJdsSuMtmR85dPt7P6V6GGQ818FuVH5d3fPoG3QpAcZCrj3UNgkLRqyFpCAw",
  "key9": "3n1VVJ7tNRg9XZQZJ3NkPqoGjiqERejmTQEvFodVHKCjRumBSpvydcvELf4nVKeJaiiEsatcYynmHjKBpdD82m9v",
  "key10": "3zTntW1EBshyhASs2e6e2k7nfhstG4aNqASTTWgczLJmbUAC7PNQup2ZrEdMHSQAzkJnWshWUEVGGBzhosKEDTPe",
  "key11": "2bBSa53onMjk7JoCZXT7uWUdK7FqnLMszCkQjUhx3VrUVavBCQ7UbWSoMn5eJDacxFNsmkmQxsiAVMxbdkE4NEA7",
  "key12": "4pv2uSqnWa9BWjyW6KQwL6PBBz2YQL5vbW1bTutViT8NiR2nXcfBUk16Tnj1DLQmq5zXVte1b5ZwQuAR923mp8Ns",
  "key13": "3t7YkkWSAsvFQU5bUfsTtQ1fK7YDhwSYa9e7pkpezTH4st8acJbKxgkt6VyF6ZEqiAR4pn4m5YiGcwTRab5QxuSe",
  "key14": "2zZUxDGSvTHccvAJrBLZpoMUxdVrqCCFRx9AxEUNm2NtS4Wv1dvn5quY5HPURK6v8reZW7Nn9BFBtb3aA1K5fojJ",
  "key15": "22dkTm27n695KZWr1pFusJWR6FxeRYtEBE3yPyayyWdQWYqw34uGmLYu2atrRDAJGj8TXP18JKNeSWQu3hUwAand",
  "key16": "39yqFS6CS9os4Bb2mnCqdx6Q8bLNK6GcbJxR3TGGiHWUUcfbUdZamArmEV4N5uq8bcCyUzyJoMt6SkBNYBvkmBWe",
  "key17": "33MkWXksHnHEAtDGncDLLTScwnKQMDR8EQVVJhKkBLw5uykZwfFdke2Tzf5Fx8SgBBg8isMW7m49upLLoGJ7KbKZ",
  "key18": "2qwfwx3XxSACb8dHBpi5sBzYNBTRX63e4qUgTRp2T7UYgvtwfAE3xhXGvEAdFhNyS34B79PbQGTfkBKvzcMfT3nu",
  "key19": "SDcQbaMpBG9iryhK3GFMnC8fsnX76Qtacf1TSzUicXP3j6N7s5LuJymidSt8owqpw8DJaLUWgRinCQRgT1yu9q9",
  "key20": "67gSGwTA9xsp3ErDwBbu25UFreiGhHSDYeWPb3YHpwr5r7Eass4HLGPE7Z6cHPnwA9H7RAgmxNyU1imRz86XR4k",
  "key21": "2aGjutUqvKHcgapg3tLD1kWxxSza9ZXgMHquJ14HSwtonLKkoyQ4RdeZwu45beKKWRKM3JbnZ9am4h1uAByBhnDz",
  "key22": "i9yNtbaHintGFpeYkpw5f1Z8GHDf2tXoq4gYDW7S1kRMPi48t8pE3DzDJRpo8XsxNxRba9kjsJTp3Lkw1jRMHAs",
  "key23": "4wN7Xg5isbjX1SUho4x2eHMjYvQ4p95J6xWVeFp1SxXDd9xn4dm5VmtV7CNUe5MAvBbvZB1VzAW4sB1h2FLHDPae",
  "key24": "4d9P98LiPfbC3LQCh1Yz88BQJ2i3Ky1qC7C61agEq8K1rAdLns9UmD5EQTneD6XoEszqj1BXhdFhvLAtZG8hdhBQ",
  "key25": "5QcxNppBr4HBbMEcgZfPtMcGj8FJ1VcHaNRiUbXoJa5w3YnbxhSvMGNh8bUazkfsfUUabEq8AVH1muFbTshb87wF",
  "key26": "45pHdZZ98uLvxsKYN4or2MagD2TESBWdwfgySyBbEG6jZmGtKg8VJZMUHtCFkYwKHKGvrFfvcujiUGVwyr9XxKMt",
  "key27": "5hmN1gVjo1CLFxJFpSNWZicSBjcWqPrvQjtiVeLLAKnDRK76MMDgeJUCQBnqUozXHQVTai7uSPVRBaWdjS936nUW",
  "key28": "3ndUTe2we2Ur4C7Vwx1f6LW3pyQQE8BUskfoDm4bbH9NJthhMaF7QSxTJGx1pTpKqZGjJ949HKRHNQVuZN7NT1LM"
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
