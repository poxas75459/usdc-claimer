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
    "5JVaQmNGbp6udUuLnqfp6cd51Gzpuunysx5eJcMu5NxCYNUbca1mCLUo1XpxUethDCcXohmu9M5R4jjZPiB5SGdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DdpRtY2Sd3xVyCBPhBBCuJ2BJf4XETg9vBejYfzBEcvZef4ExYsbBhHBfVgtMvCPw7iZe5Jp8MESdzcBNRdFZJ",
  "key1": "5NSsXakKpx9PPLk1h22m4byU9wwMUHqGguzr51Bm3hVe8CsuKFmexCeHA9tega9yb2cWZe2gGb4kgobH219Upijb",
  "key2": "pqgH9S1nWbyigv4mGkEM91cx2vd9L6cTeL3BkL1cRqE4ZpHyJJ5Q57JA6Sy82RbqNGHGc6dHgQ4TYnUkqAWSLDq",
  "key3": "3igJMNPmCDgxN7w5myXxMSXeWs3UvggPzjthNWPkyda1cHx8B9fL2MVeayijpxPHk57vEvNhSb14v3zDzoPU8G6V",
  "key4": "2dS29kW9L39xbd1mekWbvo9v4fmmV6AuFWJ1gh4SJ1S6Pt2HEN4Bg1ASSfUZggsAahV7wfYFj9tr15RHduFevyXN",
  "key5": "529MBpx9MeokBidV4aekDZ3RJhvXsfVhHENkEo3pprSJecSY7np4izXF9X93JgHGzCNrcLn7vXvfzRbRTBVsgEPq",
  "key6": "3JC5SpJzbLo4uxTHUTH1mYqpcAkmVrXjYKdFZCgp6KjU3JrhJ5d7e33HrNnujdXxvW9VR8KCBxCGM6QKxPuanG9Z",
  "key7": "vfR5MtccqzqVZXGfDw93WnGPANinoyPUUgPkdmjPQj9paFyQjM7CHVARa864f3sHwBipEwtxwE33VhC87PnpTte",
  "key8": "tSAkavZKS5RkzB5CXi1XqZEMD9eVQquTzXMmLiJvh27ySujsa2XVMtGfPg6mFqE8PoqRHHPT26vwCXJpHQuXGqM",
  "key9": "4VYu1BvsTPe7NTz8QAwHT8HCoeSM7L1UB8xswUNEJscx2ooE1MKtuYMuaAiEw8Zn6tvbUxJ1iMs9gkN5WAsUkWqJ",
  "key10": "5gZynKQQHiLHFrxy3QB9Z6uFLNcAJ8ST4JLYZ8PKNf5uDZjWj1gebpuZNXD2H9cvpne1BqHhpkv4AfoJNxsBzP2e",
  "key11": "3hK674ADQZRjsgFfrRwkxvrmXGT6Q25RqzGPFpKDvx5XUbUcShZgmfURuCZiMCyGxjaTm9dTYokYt2dgQeH1JkCc",
  "key12": "5hNhsHHLKGTmNFV67yz626vHA9ZvpDdRpRsdqeM3rch1A12oRMBH95yhKifLdgzLNiDEriAXbhqswvFoH5Kz3ege",
  "key13": "3U6KokLfegfUzjBSNNrvKcmgJWdhjHAFk4U5XBXgo4fERDRYniGiy8B7iPY2AzbJXmGrVzU1ZmZYit98itm8Tgwe",
  "key14": "5gLDumhmdnUJrUa7sudL6dYEVP9m8cKffDHb5JpQ3ugAoFUBPqdxPFg1xDVPUNk6uLwEw7yQKR8aGYW8gRXEFBSN",
  "key15": "4FbLgmQZUSMrQq1b5VWY2tUWjC9ixWUDm9FEgMKzaMHjJdtkLf9cBaKaLcd6hbBo8Ds9fvyNBnWvhQUSyDYpKWM4",
  "key16": "JwNGgJiYxy3ZCE8e9TYK7EjPXk4sfhLYdFAKCLKRRn5vTHzvkWyFA7sFg6viGtxe4zYLf7CPHkPTxfxQHv2wJ4c",
  "key17": "DdYj7oUTwhr5thAHyBHVVfgM1EqejF6n4T2EfWJt9CKW6CiqyvhAhS2sdmVXdUVxpHTRW9hzhk5h5jjBTQFFxXp",
  "key18": "ciZBy6rf1hbqXYkKBzD375sWKJqu1LUatfswnvCCkYJTdn1ftrNDH1U3fJAvmLE3imAnoc6wDKhTwWjbEU5hGQy",
  "key19": "4WaUrJCPTej1DvoAtj3jWMGP4Vw5c2x9hdtwH7uG9QuPPHhWv9mrYYYGbJDvPkKdmWmQMieiJ1yxEhr45mSvMUSM",
  "key20": "8CaQQ5DxtexhQUteuA2RVPN1d8FUSJoo5wwhcjQw9bq3kz7WvVA4fuC8FPKdz3usZcsATnk8HoLWpSt62mcwcdu",
  "key21": "53mXbESHiFrYLupTEX7687DckhgAaT3HrZCKa5aNao57ypGx7U9h58qWV6x3fzJJDLp5utmQ4XsZgZXbTVz478pf",
  "key22": "43Ut811vAocHVYuuD7NfNFxQsYx3wC4trr5V1wRM3dBXtrKSWzKcA5YU6JyZXqnqtqXBJoZZ5NR8DZDzRXXasg2f",
  "key23": "55qFkFq24GdgEcrQxpMdxP1hA2Z7hnEFNGsfrWn38GeUPmh3gg6GtixLqLFEjFb7n1MQsb4rLoQFPdx4wYfCA2Wm",
  "key24": "2jsP7NrMUeKveMhThPz2zCJzfaprv7npUv1neMTm6DqPySZyJiFnbcHeYobGhATJ5ZbGBbk4xBpddFcwLqKvGsAK",
  "key25": "5iUwwBMnuUVALkZLh3wK4jgHKN6dVpjkYxQTuRYRU2TDgcvRTLqJcuTCKXAtL7Q3fFvJfcvnBd8dUgbUvUC4bXyC",
  "key26": "5jGKCvQs4JYaz6gYQ67ZVo6zvMP4XQkqgLjMFfpvr9HtNd35ES3ebPyxXgbUwfM37gk5t4F1SP8Cb1ERAhhj4HAL"
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
