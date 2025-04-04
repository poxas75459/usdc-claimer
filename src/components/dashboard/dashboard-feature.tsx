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
    "v9eDJA2xGqFwwkLx71dh2ReST9LS5Swvsx62Jxzhzasp5DUZbWjez2KHmJrvrzLkF6KTjZsELfk3GNESScW6KjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mef2rU2aDV1M2ufLLMaCbgKqsdgbxaoUSRCgboujTSKA39i8DGxaYHcPVBtmJPGg6faMHygaJVcevCQu6T7Q4o6",
  "key1": "3cNJWf4kYRUKDPLdoLcij6ynfjDbwSdwufxn2Bp4iQf6WveCSBZQ7L5HAyK8w5T4XwPpLjj4Nf7oPumwsCKoZjML",
  "key2": "WnQFxonyCWCX1L5LyM1EyP3mSpoejuSFwhig5Ui65sJjTbvUFUAHCWyVKKi4Za5KqgaxsET7Akn5EJWprFoUV2n",
  "key3": "5dRjSrQVe4M9qzau7LJ3updMLxGkWprNSyoiwJMVSexAsw14zfQQLuKDCpQfN7iHe5svud2ptjn6KPig5t6SohKu",
  "key4": "JdkE8TxDfwqPH7ob8JfLTi2X2MQWJzqcf8KbfC9fNbdcjDLfFY9TzTEFAL7sr2LAawxiMj71EKvE618TdJ72De9",
  "key5": "r7UkFjCtfZB9vraux8FYLTDEhhTJ9YRb4XCYQTev4LUV7h9GBVxsS9H6X6MhKz91Q8qoPZj2dPnPMkZstzEhy8X",
  "key6": "55dPQGKMcU4MRbcGixgiSCaaSMwK2pWe47GCw6powvJL3WXhqgdnfwtFxHHCr1xdE9nnX9Bwny47KCBNcVpY8H9P",
  "key7": "4eWC2tCL7sgEAvW2PfzBU6CL4ZSyx5mu3ribCyJEmKPvdWKv93mwqk3XMo9qRBFNJ1vwAbGLd8sbuVVPZrJ9syjb",
  "key8": "5fmSim6cCEBZdZzfKirFsYUQxJyqccE6UG3ReaaYZeo48fNRCaPUY94eGFwrZQ3YcNzutZ2baGAf8DapfN8LvQhf",
  "key9": "5DhDJcSxNUtMRhwdaTrouYomocda9as2kC4T1sk1kzCJ2PLMV4DZSprfHreN5TixhmPxt9gEAG9piraevWmyiQ5F",
  "key10": "zzPEC26nmcLX9VMMB7otsd9TPWTVpfKpENjUGHVHtqJZG4cXmphDuccnz4twHBcngCFAHiHGoJM8LuFpWcqT2pL",
  "key11": "5ynmKvu6TBQU7oss4iQFZqfhoNxa9PnCV7z2yN33XRrZskkiVUJp124CCGqgjx2x6sqmVRpuUoW92rnzbXzmy1uW",
  "key12": "45A6bnPcNjMqRRqxhYzYHZ4nP3iQNStFdc7CPAbdvAJxB1XcchhZmfsmCNgBoA5u7Xa4FuSUtYuraw31XS3Z2AN9",
  "key13": "eemHCMUx5drGT1KNTirSoFiWzYNHidkAhKPzuhtYKjBineK3Q46hF6324SXqQkSg6r7PPAtT5whoa1Hor2hTeLu",
  "key14": "4PknLeiW456yfj8LYBpus1cHEYXUA1MikAubb4FYer2ie1nBUm8misRcgqH3hZaym77ss81RA2zxYFdNVVC241a8",
  "key15": "udvx5vQQffW2FJ2os3DZPErU8PGMzBVneimcXJq1DeTBKcD1jbqWytmi2vqwgC3YB33ssgso3tfdnCLPXcmibT9",
  "key16": "3s5vcue8B1ayT5RkTfnvbduUCdVBJ9rREwiTVZ4wxPSCWuT8jUAM2xhRugfd6XWdZzkqCp1ziQH15j8F2fN5QKTP",
  "key17": "5fwGbRDwNANQTqcHf5Moadn5knsU5qMWrTRRxbhd9vkn57Hn15DcHGRCdXRqTXGxrcWnfF8pQHmLs5KB3q2oei1c",
  "key18": "4pK62GrMhqAg4oYHnR8ycvDK5WWwAXfC7xFLk7TcVJiPxS36bGc7JBzJLdr8fEf68MhXPd1BwRfq5577aUQNXWWh",
  "key19": "2bRum4sPsdANuQGrUzFNxsBNqH3uuZYcRk6xp9Ei9tUKun6ryeQ4N2uyrQGkCuV8P6cXbWvyBUTe5naP4R5WBfXE",
  "key20": "2sDrWNUyQ2Zv8xT4hJ3Q3ozubeHy47a7i7u5ky5BU2GnFCP2VuGRPW74WgzKeP8235dU9GszsBAH5CjVTodfCofs",
  "key21": "HRdqobMX9zeWVXhJWzrSmDMmxcKDPaDa68VpH8wqCvzSaeFjcR7efFfzE29xcD78ybkLfBUF4DoxhAT4vnpsBqj",
  "key22": "4xvpv1tFRfvEQ53WMVexr1BvJ4AruQtfbi85FLq2yCNEuzmjBFR4SFc5pnH9DWeAeWcPxwf4Wmk1Tim7862XHhWg",
  "key23": "5fYr8P9iURe5m7PctkoVtc5TuMy9PQdy3QHCh1AwxHJdPrSx4cgBeLwVeBfSSBFDts5JsvxGBmuiL9rxKnsGMeQi",
  "key24": "2rfArXK53xH3mKY4z1RfFWR3ZFT8mDh4fZSZSqEtiFBaruv528qmF9H35k2aU5FC4oRrng7aN4Ak7NjLzWf3yBSz",
  "key25": "5asJ4WzzAhhLeE35jtHAkd1PPRoRBW6BVzAvCnD6Ep7nJk8Ymtq1bRjDYqvEuZSgKW17D6eBkdwKHNsViWHs5xBQ",
  "key26": "3R1FoG8bug8ycjSWqmrsVBqwCFNkjSKw66BGLUNYdn2kae4xMoJtToBZiJwqbmHRah9xPVwj1CMbqxp4iQBKP5JZ",
  "key27": "tF9U1ZXQW5BTBSeDwBmz2uKTPzgwNXe6K5kVsh6rG1srHhWymU7JGgrjBLz7qnNyFsC6UoynBZ9Kf2XbaYhyv9H",
  "key28": "UKo8eSNiBQBEwzrAtPrSM83dep91F8A8fdpQvZyJmrtCGM4PkXAgaMhNsdR1qBLEuRXrxorYDNDdNPw6VUkFMdd",
  "key29": "FApcE7z27D2tTFmGsVgrqXwNhvxXKs3QgnT7n9mHwDe6rFxqWnfSAXiRg9gEu6zxRnk6xQTzBBfYbb5sUqe75xD",
  "key30": "3FeW56qigbLC6Y8KXPCz6x4Z7wuEAjwrm6MgF5mSgCN1wMTJzzmjsKk8AFUF3xMQgnVx5Q95U1RamR8AbbbxCJWi"
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
