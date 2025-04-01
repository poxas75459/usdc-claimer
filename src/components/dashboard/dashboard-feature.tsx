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
    "49YHbRhS1ZCRXGF2P1jNVANUcLetJYpKmNb3ndS9UJ6uo2LYXnaoHgevmC8yveMEvfMhvGiTu49S3EJMnppeqSgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvYuqshgHsQdrJpPCdmDVd97pCcPZRMaWao9QDQFBe9GZafuZtEhUfhnhgWA7j56UTBRrKd5hPWCnMAZmnPLzXn",
  "key1": "37SkVJiTRHK8T5puXuoag58KVKGWvuFFMP5Y7fiFx3v97q5R6JVwvRddjeSTQurANibWHVjF3HoqfvcDULWKJhym",
  "key2": "539HHcb3Xryd5s6JKRjZZ43XoDWH8RkSLWYM5fE9vpoB19psAeGw6ZYhLJouRLKK4K4N4GpuhHwBHyLMDVqXgxF4",
  "key3": "2DG3ZsnjhupzvfnzVUgX7ke7y3U6hf6jRRvzTzxL23eLGZaKagB3jjTPFdw2kgK7cPr8cH5HiBij2THvAo5X3dMd",
  "key4": "5nzrVQpstTVMfAQfDGuaBn7u735Yg5ac4eMg4JWaG4bc1KE52FZKGV2R5gVBhZTUXSn64TS3c4AKzUXKua2rr4pu",
  "key5": "37Jx3HoYh8ZD3JncyJ8MuqfE5AeSLfMxiWXfMw8na8cYwXc18fvCpi9vcFkgSTmSdV3U9EjtWGb5D2VUYvLkNS8L",
  "key6": "HyCavPAdTonHauMx3AskyZaEBLLfiN7S1co4U8HxVKvToupUD8EYABskqvV9vnNTGEKJKfWZdHpiELUNJKurvFt",
  "key7": "59t2B1YZDFfyDKM4WD5DjbRHRjptLWPcRDoqwKRTLvtWMMpG5Z9c4PJw68gc2QQp2yfD4o7ZZ6QYDHC6jZmWivEE",
  "key8": "27f9MB5175BTFUNyesYQZWN9eJ8yL9Jn1HKoKsLb1rWJrMRyq32vswKZ8JJ9nyakuMdBnV2P6PLvoTugSbXVv3A2",
  "key9": "5LyhpE9VJTQgVcHybPGxfmg8A4W58SUAnaGSCuVBVq3LoprgEfamVL7MLAmgs4jPRkRGqjuBkyVs2C4mhdnWNUnD",
  "key10": "2zWHGExowRYVfUngpTTQvep7sFLpkNY6egxLVSXkrBpQmdCnx2UwAqwtYR1nuJYQLqB6Abc9bAPfAEuMhFDvyz4W",
  "key11": "4RauSHfpZfxTgxu4V9NymJfmD7B2CBTKPXdWFvAX2kKehz3h8MVHkjTkTT4WrbHNBBwEP2WWzG1B6YZpPM9mEt6b",
  "key12": "4RPNzgM8qf7yy9ZsrAuheJyENdaY7rLAgn4TWzvzjRp4LfuWTFAADQozFqLteoQCRSvPEz48fLQFrHSjw3MT52wa",
  "key13": "WnGTvQbkihHCASU5rjyw4X39oSvX3dTKAewswrrKFCikYgd585LnEGi7kX2TLVyJv4ySLJZbTXrtiKgCyA4KHku",
  "key14": "4z3TgPbCMSKUnyzvgcTwPHAh2W4vm5Rwa8hrhiaowuuCJQuw3TPnU7vBXsKNPNeMxkqsBpqva85sdA2Fw1oxMzEL",
  "key15": "5u1dejGB6gpJq7Cb4w7rGvJ4E9QTbqLLzarVWMsSbd6DBA75FKNNhv7JHAxajzTnzdJaW8SUUWs6hyic9iJa1DRK",
  "key16": "3KGCfEYExT6urJpAuX4QkqtppS4nz5EvizYnXb2GagqMATGuYKa2Hx4756cb2g7dbiHo26rBW3HAzJtiCQ2Lih7u",
  "key17": "67rEXJMgb9i3qyqNyAVFPPTemZqmsJkuCcSvfGFLgxjiUGTk1Yic7n3gSxxfCQsjTRQJUhfdaf5feHMow6jBQCji",
  "key18": "58tRomnf6hjqLw2ByWYeyMzC5ZoQDAdBhwCvjcGDVNQ4KnZn8AVyLwgFx7JWQreXadSckgXHuJrWbwEGLrNXSHzR",
  "key19": "2Me7RUP2qXmjw6exEbed5onS75rG5PBq937iqMycxjkB6A489pbFXCyQgujqfpBisz7r18qgYLuZCGiSc6qE85Pb",
  "key20": "5MuJ1fhxjtisswoMY6HSy9e3oY5T1kyRGYBEaUJGfEFw88RHjxnpE1sxYfAVvfYEH5xntJK1Th4LRLNqMJVULEgz",
  "key21": "3vy8D9vBxnP2h1iVcU8QCKQqbwg1pgrEXnXhaZKsguo6s2PuL1RUpGXE62i2FWQSAYQGxqscwz3MCHhQ3CPKn9VD",
  "key22": "NgVzk6PfBCytYJr3yFsR1wiyoTXgriY29TaMm9maU9KYynjXmspxcp5whe5zozs8UXrqeXxYZGmoGuPgoGMEbL9",
  "key23": "5vaeb1aBf7oPPy3wLjk4JCM3iQo5NiJPkQxAAgF2PahNwGbxvUPA4hN3n19UpLr7rsT5YiSLnTzabvTtnasm3T5i",
  "key24": "2f2z8czLyU6WfQHMMvQgPYz5HSbkXVHcCDtdP3ErM396s2yeKwQ3tt8jym7QvkedBtbS2DEF8jDzuHeG7oF85C1W",
  "key25": "4EFnWkmUou1vZP1L3DM1wmXQCbwqnp34qJTeXxXNkX6hvYwFD6gJ37nfWpwL3U1d4ZWmnuZZWnNBcfwg5NBPvdDd",
  "key26": "2Fus7p8NKTBNscs9ffFPa39Q7Vk9t7X2mjRJhBUTUdQHJMVX713GymLHQpBwJK9b977qGmvxVWUvfkitLAEZWVko",
  "key27": "4M4Yjo1Zz6pzRZwZQDCe5mPjrQmrvZurFEYKEvVqN6e5exxJ3XNJ4DKhUDk6JtPwDvkt3QwrPVnNU3xtxFQxCLaV"
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
