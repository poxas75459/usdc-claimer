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
    "2rnecjsWqRBCXMTwxv4ZjGBc6eBjhwG95gLfLoyhYSFwbfUSDs5v8pbGnNzreRXnkMbgEHXEssXNTqbkp4FDazZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5pGJx7mNJgnJ4tT7YaFgGA5Qg9WFDBkjfHEfZ6pHgCbBjPVQvKFjCMKgGXsjkjir6Q7ztYBLRdqtntk9aN1whS",
  "key1": "5t15bn56XwT8WftiNfV5ZuRTS1cbmqWW8u74tL9APGymZEzJCFRC21PuzXVFYz7yM4Pm6GpaETkDsLgng51F9ZvQ",
  "key2": "5bBa6utagiAXV5dhdNeeCzjwGcJwo6W1aN9qoSRU8xZThjfzh9CBbf4zpL87Gcce3KgXPmWxvXCZyvaMAcT1nJcx",
  "key3": "47f31rxxtMNt68icqbnhaXNdt1nysrzvEkB9xehC4PUyCvKhbfCEcfNJfcySxkXzH8i2qaSwH95Fvwmo2xc8mpjw",
  "key4": "2sdrHefBCVcWATyJ2Pun3U9vscTwVtXUgPogqNYnCxJaS3U3cKsFDk4Qr45F6AvMipMHhcJN9BdcPMcwztJyVus8",
  "key5": "4923ui1txDMcFPGpuCGwcUuPNMDwxWHjDGG2r2X3urZU2HP7vCwEJcANdDzQQo8cNDyzzAYq1fCdqgMgteHzShRT",
  "key6": "5hvUkUtuAx5CrTYqALtq6BeBXiQqkk7gVjEkDrc9qQ7GjYmMbnNwr2NqzgYLL4YkRcnvBMQNUPrUfvfFq4qmUuv3",
  "key7": "3UPH76VzuH6toUrZhHy3AdgioiR1Q9Skc9kkreg6pzXqU9VnfNzhquwK6Bk3H8WhVU62GfGpeQaQHcwUJEkKXx1M",
  "key8": "XGTZ7W7qyjuW7t77Jw6qvm2mUZQC71Sh1W84rXMie2v233Ccu4nSkLCvgBvT9QcyZPCPVWPynDWLqc4TuVeGac3",
  "key9": "My528s88JNMwgV7XZChTgd5mMYTj1fxfeK5bmkgj59wUHAXJJU2UCtw9KEbXbKL8W6MbPXFpK4zMBu6fXFrzR2V",
  "key10": "9Xy4ZMLzhJKNsfDZHbPXoPyoDzDhepL3ea7XthSvyhkmzAewQMGaBjp8UKuVee4FZQ1YTLsPyBVr7hswbpFCYCW",
  "key11": "viQuUM3fuioBD1P15pFQyJLTaTKt2iks6GTTW43Tr3YjSUhzMMzPMN3S99gnKCYfj97BiVNx66k7ovnrBbazTGy",
  "key12": "2HkgfZ8KV6nXgtUbdMV7SKvrFiy4HXq5vNJP5b3c6ZwyW4WU5Cn6Zim8Nw4mp1Qnuyqe4RCatrVWena7W9jif5no",
  "key13": "2VBw2ydRjkEfDXwgWGQQjVjRMN4jB18naYBZon565gf4Yd5J91keELj6pRAbCo8GZj4mfqf9nqfsXj4rNPkp5KCR",
  "key14": "32ybdWzYa36BeKdEWSeQBheC6XgNguETL7Eabr61yyopdtcXqZ2kx5NGwcuyvESMgwoDyBWCs9YgfaP6AjvnJ5yE",
  "key15": "23aXPCZcsU8mQKAfNwdCp4E36PAcd2gas4vWsTpUF3F4SbHxBcFRQspXuQ9xrXg8Acm9FmRsJNUi74eg7YHAASPP",
  "key16": "2RzzTyR1GKqUwbdEDvTQamsenaTVNyG1JxCJN1z284dT9oD1FxhcNy1AcBAHRtiuof4M9SDoGTFLW7grW2jiRc3w",
  "key17": "3JxD933fBBj5YdGgfjkHy2vMtXonKTn5VPvbtWVfFJphrHvPBRZNTHX8mZDvDwyo2DA61JBXdzo2DBaU5XM9JXHi",
  "key18": "3ddYWZz2mpLgey26WD7PfLExcoXajhbhSfC9XG75Lau4UxFWLjjtj4BpSiLgk96ZybReANjTgx9eGGRnrJb6i3d1",
  "key19": "2ZuLCbJCDPGoVoQowxC8EyQ1Z7Pdk92vJRXzD34xHNuBP4t9kHnX3QsNE5gmztp1SFGkLhrY3K1V8YS66CouTuwx",
  "key20": "5qK3MhtnN4znDA4E9R8yv5WnN4EV32RmoTr4UaRVmJuPZoeSGftSDqDMBQ2F6RqeX9FDPJzuRwGa8Cn6FjVKfxsP",
  "key21": "2BhdvHYu9e3NNjZh7v3j7p9S3ycTCLfCtXtVpdyhPMQSmwtopqJn7r6zSL13Vdzp4ghzfdgPWcgGC5AxnPMTC1jr",
  "key22": "4kotHE9Dos7BLRWYqcjpuAbJwaaLVAnbHiq9NN4Ynnx7kKhnuUD1iaUZKn4mR5UtQBZwg5v94xsrui7ZAitBNjbZ",
  "key23": "4DP9j1k6N7zc1XrpQZU523FNjimhg2BsxNd2Je9WfVjaHz7LvWqX7tN9DEdkdLqhqMehPV6vgzHLb2eM4Ayif4Am",
  "key24": "3mjEQs7QT9VaaZ7nqX71qtWqEYpBzooNDXZFYxZanqnkcjQbSRAMXZnbc8G3be8wZZwuhq3ctw49vNfsQJZHAcTb",
  "key25": "gMbzdKGkbQjce17DT23c61bS7CHrka5yY73koY9P9F4wKDTUgsr9ijEFyvbgcqZRDvcjYT8VuWcW3ejDqyvJNx7",
  "key26": "3n6hQYuHejTNbnG2mHytmm3iBxABDMWP6NhrMV7wBJkEtNbLJbGq433F5RjpxNeT8AAmM4DL3QaDstS6mUxeoLJP",
  "key27": "2dVPm4M5Nyy4YpThLGshczWKPLTwybwNpknLBGmxr3v9JgnEcEXfMYvLAzTqJZejhoiCzayF6A8UxGzqfraHFnZQ",
  "key28": "1tG9G36u9mCdU4BZWE7cB2Q3Nk1ouayhvn8LMEFYSA9TDAF6s6egpqyBMGkFgQ119M5hJ4ptYLT7qf9k3zbriNb",
  "key29": "3JJjUrzjLzyJrk2Mw9Wd9VYeDAWpbQnY92LQbUbsqf15LNJcb8awrpNdFtSF8ByAKQHwBpWf3pcpirCKgc1kqswV",
  "key30": "2EhGKFzpZVunLxSWsebDug9ae1RAsxKxJVoaqRNC4gXEsr5DRW9UbobeM6jwRKiaWgrDYvUNmJ29wP5wRqdTVRtk",
  "key31": "2x3tNgNJks86nrh1NwbmAAiUKbw6b74MKMXGx1L1Et1RYr9JRGaKEvoVcnodaQMLn19gr2i2qMm5VnaBE2PFGHvN",
  "key32": "pFqWPP5V2YRUqr4ifBxMYE8WS697yk1oFei9rje7Nwkf47QJxF15HMm7obuCs6qTSTvSYXY1rZKeo7y92RubdtX",
  "key33": "WJL4a6xWnU6PPUQgxGQJhdV2pdH6kAmaUNHue6VMzukkXgk2dcmTrxV9iPM7Gown3TNsx7amsi8NUV6uKuj1b6H",
  "key34": "5xZrf6PvdUZXZ5j7pPFxhUFfK2fVkgJAvd5V33ysd4YEY2nSCrLP9sbZLFEVGBmw3QJux2E15wMy5PpJYfsNfKNc"
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
