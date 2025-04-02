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
    "nyuwanAUnDJdXkd5gtRjDfxAaE2Vp1mM4y51DhQPJNRDcpmZHmYsVRtsaRYLKEwaRX7bjGHqvHqGb5k3FXaPM4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r3KXogLf2WEHCaHUF48ZRzJ9xvAZ3FMqxedEwgutiyUY3YHmeU6RZJaoU8WnBHwwW2oMFzC1erNL7sVpWy1WVEx",
  "key1": "35yd6wQ8WcZANQXZguEcE3aKhCfEYVixv2tiDbEJL6vwpoDFKYrLrUieymwMsdTeWD3Gfknui4J7gULPaRGtPzJR",
  "key2": "4NiKmZHnW1pzxSNEw1KbmrskoesEH2tz6wXbK4w2kWuHLkVmgsaWxwNcSaLFUsSpZNohXcfskq1XCq2nYJTSSVVh",
  "key3": "61dgr3YCon6X5mqJHCRBc8CdnP7sd9LgjrZc1ZvKcjPeYmbHfHddKqLz4xToaAd1iF5hEN3Xsj8hy9XNr78xtmgw",
  "key4": "47jLU4rayjSuHQjkHqfHsoVqdQYmCDPSBbX1uN37MHkTUsq38qrnV8W1mKDxj3aavg5bx2NoqfqEyxeTrkR9RTHk",
  "key5": "4twhZUCfMhDjs8A1tT2PxCuZHFh1MmhDerjfSABQ5LNkrih4z6xJQ6aXqSnWLZfZuPpXdLweWhEXGpnwZP2FFy5k",
  "key6": "NFSaVawCH84ftnFDFXwNfhQQL5hpJUVck6yERQi1GWREwzFDUSCB6ZSNds8fk4KQgpkeVLC5scYnZjJjwxWnCrg",
  "key7": "CezpBF3oYsYduL5y6rScj6fJ7sFSyTGUeagmN75KsZn77X6ZrC7N7voCHugGxx4xYCLoLxwdKU5Q9S6DNN62i7R",
  "key8": "22yqPM2bbM8JnMWJbonisqYbtyteqysR6KaHqxxfqudsdqzdKLyVqdGkLpLoESoiVsFnPi8G8R1wHCgzdTKdYwjk",
  "key9": "5zVyFi7hKc5gAcuD4qq5uNvp9yXtwnjNN9c4Fk5tbTUmZj8SbFcArXhnGgAzRy7pT5gfWGwUGdSnDhcVNNutp1o9",
  "key10": "3vn58FBgYkWzqvhnV91sNJuPMvdQL6KuLhAi6wtEMzfqJRAqsTZUrmqjr9q5KVvy4PgTCba2YPEnPN2TucajqaYQ",
  "key11": "4AgpTeq7nyvA36tsu5iprNGsDdDMCHEhGYseHHADCZxHsgCF1WXau61qpAwnxtDZeiVutscqW3VE7mt1np9zbk8r",
  "key12": "5CKDyo4Ub8yUn3r9K2hkTQzkWMoimNYVghYt2ZMGNYnLkLNCYpNndT24oXCNgS1N1gZtEBe1vGXyoNEKHHke8Apu",
  "key13": "2MzzXNZzgmKfofoWZqfKcbKEh5yAvUy7NoV5Rgj4bHEHEkq8HwuQsSVUwjoBPjT7f4yJwKSJ2A2QWMcfU6y5gVCK",
  "key14": "2jPE9P9YNmuJ2zrdkrrBqet78kirAiV8pUifi7EbpUjhyZeQVYhu9zshvGCWG4eRCvUu5jQCn8XJ7GhvW4TLbWNt",
  "key15": "1a4NSYsjBX7m2WsRkmScFC7Xnt8NSpGWE9tjNfpLmroqyUYXXGxRBrKkiooL42zHNQHwJhgpvVvbcetVYRXoL2z",
  "key16": "24ZgNTjChvBY5u86kQHEToPMYtdim36D2k4m8QXvdRcaNUEYotNrFbnfLTLEyEoa74FPCqs4MpFSiLwqUsJZFszn",
  "key17": "3QRJLbMjE5S5U3hxYK9gZAkdaTEqgyBzwih6mXZqgFakhc224M4zV5mfhc2wSM1cF7Ftcvf24FJ1sa2i1nkNviQ5",
  "key18": "3vkd1io7UD4J7oMrU3DpQsFM3aKoux5TZy7t9grMhXM2EvrZ2Aw9p6doTMZocmUwvThRWpZG2XVUHgAJPLyGXUjC",
  "key19": "3baSssCGsvLnaSFpLdVWu1r31k7AaaXsJK7nKC9FbtrzFCDmAVqj9o7jduMWmHDKPtyGEFeKfxWEqRtVRhvk7X8U",
  "key20": "5iutTri4DEdzhwqr1DUX3PS5JNTbtNCnwE9nvLgMeKdHC4opycYyq78DNLh4bGVB8twiaAHyyk41R2WaqMsizK4x",
  "key21": "2mMTJPeY9kRXHvTt3nnpqLuTARyLwjU4zhNkoXyUuDzb1Cvuz9iP4PyvFPMAwyhyzpyZByqbDQozzsUM3HroARxm",
  "key22": "D1yMy7qVDdmWRjUQQUSVjYS6dXNUntGXgR1CrdhxHpYpTbgdMrmJ5XnaqsBb6jKk1Msp4Xvuir4v95SnRkeEshS",
  "key23": "2ty8Wa2kSxzssywW5dmeRwdy9nRagxmfFXtNkV15YMva5KL9csTDE1CiuaT6Khn27SPzsNvmmvjWKty3cx7Cq6kv",
  "key24": "36C5NwHfnUH4x5ZiKtjZGqgueUuKh16yWyrMZQp1UFGjN4BpDfRKNsxThejyJ9druYH9rmR9nHjeoMhJvDxketWC",
  "key25": "s1S68TqzrhUsZAGNvMRCmL6rCZ8HLw9SBEhutJe4ddCQrrGJpPG3MzSXzCoywKbNBLjLhcRuwkegNEetZY9MYSG",
  "key26": "2GCSebffJCbHBQsfWRbpwsm8fvRSnMKmBXsuVpDUZJQrFFQeJoGXAW79b4MrrfnQjTw2YF6LArXaqCTgYGzKMkzv",
  "key27": "2DGvDnQ6EYxBWYSKmemXGXoxDTBmvtfGUsNd5C3pxFHWMs1Fk1dAcShL1AB71NeVUQyQNzgwoAPWpXrSzP21m6G2",
  "key28": "2A2Fw8iVGZ8kXUy47onYMCuaFzRHxYqkXTkzq7H3qfk5o65MKvmiLFUsppCQDe36prBiwGVQ2xK4D8gwGcT6ji5q",
  "key29": "5mGVS3hcrQbWRKPuKUmutx4H3Q3fkaKXHqGZK9gpVgJnnu7bhpJGsz36qV9HrAFUzVDF3k2ssne6okeCqD6kpVke",
  "key30": "3ArEeYqxhMDTWHM94uoozG4XDh5uAzYji28VH1NJzj4C3GY8Dknipypzs4xoXqAWPGNrtFR5XvJgq9GWqLPPvZSX",
  "key31": "3871kANd9ssSFNocvgSZXRUJMYdHv9bEfUZdrv9xjtJxKeHHTpmGMeeW6TjjZaVFWoFdj8WHPMVfhcnwQzftHTEF"
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
