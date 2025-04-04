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
    "22Wu782rsXkrCaU3zeExangD2scbrQuLDs9PNQ1zfToSUd8R6WFJXV2uc1Yhpb8BHU7noFYy1WsSq8UJDG1hyswT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axcCgWScWVdGc19CsQBLupCp3DEX7PnYBLpX1UD3KK5tfRXA96nhqfdf9oq3viHGoespFi6cw1Rr2jz9X4jveY9",
  "key1": "Q5UuAefCrg63e8ywXgyiWfmCojL9P7bBQE8FHtJmyAZJ5veX82ZStzNHfJZiGqoVMdVYxwgC8mtDqRPoNevTDax",
  "key2": "3keFy9Jho1FAUyB8SF4uWAzPQ9S8KhR2fR6NEck9cw6JTCDv4gDN97GYKMUzzAKRvpkuRn8ZtTgvZ8Yi9fEAFo6N",
  "key3": "5Bmbfbx49FVHfrQjeWzTkcaZdo6JWAFw9QNF42sKQe6qTMhBTf82FjP2zfeMsaVJmHbA4quLpJtvKxgfdy6j8Tux",
  "key4": "4QirT1sTH3Sw7WdXzma6emPTcwmv2vUfMgK5EzRAqv3xyGQb95SbqBm7WzgcdzQniDA84BesyNQJbojZ3F3FnaMD",
  "key5": "4V7rA2WGvYUnoiAa6LvnMdbiHax2TugE3eEGpdSEBDqj3Qbsv2gCpP3E9TB5o4jj81YU938tww2FPeH2uiYmGQsC",
  "key6": "5RKDRstjKd7kbKgZnMUhnnR9nKJpp6hwDwRVuXwNXpdsh5ZJDePpiKySoFzkZZrcJbzDH3D5XSksBq2HNVahRUzM",
  "key7": "3NucQ6aaLcwMehJQmCSambuJxs3tbkVoZG92NGrVYAgmaXLQgGYakyv4BPQ3vcKKbEoA6h7YjUrVwtGPDoPyfQgK",
  "key8": "3EUDYcnKwFgVC2N5qqbL4z7oYXsMRBNXsvXuRjbB2rHVonvgTY2s7cNPuxa2nJe4hcuHoHdQVviZ32ipTtCcgWce",
  "key9": "5sTmec16ZBELbDMMmf9uK7Da46QN9Stgsqv9hsiWUkmitoCzsCYexSbkxEtwJCa7jYde6FByf9KB3ZzQDTydBSz3",
  "key10": "2PPbmdJnQr9cCZy9EuBTGJWWWB8HF1FGLntrW3jQMXnv7g9zDaJGYyjSyEwsJoWGojQuf3QX5j8MSS97bDMnC6Ls",
  "key11": "4mPoJG3iV981p1LLRtbfwQJYBYFZE7mpJA7R6g92HLxzN11gSVbbwwXdRUYQUnb8HWoXr3krcQxEKfBX6T2GzpRf",
  "key12": "wgM3Qtg5jdNqHCeiujC4Gr3AMTK5DJFsAxF617mpk5YgnTqj3s8HS9x3ooChxk8QPEbEuhYusqA6V97prq5z9Gx",
  "key13": "3qoEaL3CEe3xVSiVKiFJtpmP55WbLRxPchHTLSHhycnhoQmwXdpgNM3qgn46GQNbDTHtX6nWZfpCnVvmFfmbxZnW",
  "key14": "fugBbYZ3G5V2f7LuKpyBhk3oqjsmPY1VrmghApGEBUkN9iSLEyMHjxSnMxMGHqV3RzMUYm4em9eX7x3mTeZQ1VL",
  "key15": "2sV3aY18tkFFoqJNJS3Du5XHsccH6ayidP81FdDP1yrAcfLbL4wxJgogpReF7fEhE5ChYWLHkbQHThqDx2tDuTt",
  "key16": "3Yc1RcQW52DJCzj7KVSV8F4E2UxXvUxyLKufzNKZHjYsnxVFUdcbshraZh3B8zCWRMNn6aX2cTQm33DJgc7CFgA2",
  "key17": "Vo3q3F3GhEumvBKhMHz6HtxC3jZCQ9pZ2VHsWDVRu4zVJh9Mrx6tSZPQAtDVGkm1GznDoFBmi3zBZSGdzcH9JM2",
  "key18": "5L68qgYZFWFtNFQhi7z7W4rhr4TQA1szdMG9QiGn6QGVzWFkk7EFFPW6fXqFfkfMcAvpuqnpUkWnPquZEwnRor3",
  "key19": "3egi8B7nxFFV8aUhPAUofYojJevR4v3DxK7JU4yaSztQ2F9ExjW4b6uqzg756LFg7jfN4AL2sfWzBuocNGin1G4C",
  "key20": "5gUp2ihBJoXJy6hfJmUeD8zhgBZdWMnYFs81MBgYzW7JVs7eLhrLMrHMSyb95tiguRLADjSY3gDrMnnZrXTDGqN8",
  "key21": "5F9gkDxDKEd1EeDKRWVnHY7RWXKeCpfVrK6jwtcYFoQ57w48ErDQv1C9PJDLmxE59LsuuEhVq81PqoA9kaV7KnwL",
  "key22": "2KGh6HKz7UveN6CR7VPaGF156gzRG6jbgCxgLuG86JZf34gp2q5eR3f9F453i3YQc3obZfWiixFQMsJDHQXCuKZs",
  "key23": "5o8uSH9jDwYkeCqRu6bhSoWxhg3FmEX4RxT4Lhk4aZN62y9fhDQC4ckmum8BB77KU7sSdJp6gTQnEDu9q6M8YNwc",
  "key24": "uEirxEAJGo5HBuRHnNBjUfWAGvUzXJa1y2QaCqG7QpDknT5oHiBaeYWLi2mz6AvaZvq2K3gJAXk2P8keUGMpifu",
  "key25": "4wN5yPvgkorLmVSfvUXvDQUdJq7WEFLW7KVymJXQQ9i8xXFy6vaPCzctfEEfgMkS9YFBj6qpbQ9eD99Te83PL5at",
  "key26": "3AyYCH7uu71Ea9M63DRqH5q51YDWoEArULTnCBkhAC4TJA6WZa1Mw3BRjd5KuEvJvVGsZ69XdyspYVPTCjt6iLuA",
  "key27": "5Chf4143zDE8udFRPyEAXdqthM6c5rvjRRo7JAHnjXQYEZqnkJ69DX1eVsmQNGSpJg2TMkgK2hVeYKBK1Rt8ik9h",
  "key28": "4CSZWKrw36whQ2JGcwNHHoSKWxW8omV3nbGgLRczBtg2KGTX4EFZi3chDXCP5Qh2vFTnn1FSVAB12PgSk5kBAxRu",
  "key29": "3FN6YCrUasi5VcEdQVj9jqNQBVWUvZ93gZmXVXrKyEaV7VSst8DcZyNEWH3b2pDuAosbLWxuNBMtnKYvMdHtbAhp",
  "key30": "MQKm8Y9F6bygME2QA6rMbczodMNEmQ5fYCMzFwD1NSguTcJniz6UPajofgx2g5kpihXDU9evcnGWxy5Qfi7vM8i",
  "key31": "3jwx9erDsHnp8ZDN8sWynNKeAuBV1Po9ucbindZ9nynUsaR6S3TpGzbhtPPvqWchq2fJRZ1426e7gdecDqASqFVw",
  "key32": "5VwTRJxNXKuCCJEaPgHQqNLXkatmCf1Gg3HYFxJnQsWyt9uSS94irDguZrHqLjnfpB5iGgS2QJW9MhChHcmZRpF1",
  "key33": "2ygrML2rG23c8aCjs5TxApygLuzYqyJ6rbGBdnC5u7SSZN4n1A9sGSqwXHLaCAH69j6EHgXHP4FTTUAsDwiGfw11"
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
