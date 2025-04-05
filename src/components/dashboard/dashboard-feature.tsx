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
    "55rkREZPRu3TZfpjts4RbmqFrbmoNZmeXMYcTreJaDqyzVQLrW6GqaxjhsFuLKz6obkKRAjGsRHys7yzWckDyWpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63AUtBkwzeCZbtke3WSzvBcAuMwh6RFsEgj9UgwaAcWpQAB4FCRH6GNS8Cy5eUScU6EBSaTSrHVLJjcguf27z9DR",
  "key1": "2ePGhNJ3Jue8LxPFXfxXFXs7UKg4o25dtDeii82Bcvzw428bSm4yuUSDtGNAAhvd6H6SEhF35Hi43NYTRt3hFtBx",
  "key2": "2LgB5Y9oi1SwNeXJ9ZpbbjeN8PVgMe446YHPL3PZ63bvz1nkeCVjDrJQmeeBRnVWmJrciEeDL2XyW6F7QYKrHc4G",
  "key3": "gH2Nb7KBTz2NdQsauStSJiG9XUFx4LfqXnG9rxb2Boe97t85z1iddnQhWsn28ZLtV3TYXMkB7wzWcMTvhbfVCUG",
  "key4": "cUHw9C9sLMEXJ1dnegiLvJE5XZzA1c9pXUmA3xBeRtvvSDHhNUxNkokCLCqfZ1WxwqGRYn8vjSiW5VxtAD2R2Qz",
  "key5": "2hLgQUeY1qMtwDMNeuJXH34FvsJ3h1tgWSNgibodJXi7PWHiG7kom9pr4fCKJgZ8QsPi1meu9H9RBDBtd9yqCWx6",
  "key6": "4Ei5SmdVnWHrjyX6rjhzxKbtMniGhQBQdXGMknCiLkDQmQz3a39s2ivn1hvfqfzvKB43PqerWUfTrZcAmqqenY9M",
  "key7": "2pophUgFHy9jWVxxYzfnexmzCu37KHaUG4UZ79pGRc2Xv8uzV11jpswGsFgwm5L5kPTMK3EcsWcNyEvPEvwMvT9G",
  "key8": "98BoAKnVDDe6Fckgf6j5kgvQqY32JymYBnytbJz4E1fWSrD3on8Cr5P7qk5FXBv6z7NduuQR6RU5fEWLWEu1Sob",
  "key9": "44Zx4Usa5eFopdSs35FLjTTiQ3DCQHr7RXeUqey8bFLfeBgWHJ2QN4uS6YntqmWu544utLLKDTitWfb3JEkotx11",
  "key10": "5zd9zdwWFEhWUQ48P4w5Km9jTLi4CVvskg81sBPcJFJ1nLMcnPHCPUVEq1QwoHUM2A8urSQ6SsTC7njhxxXLBnX4",
  "key11": "4TZfsv4M6kymjUszKdPwqFdyBYiefWqoeNzrnMCRLtNh5zCDuxJPevAQ59MB24ackA6CXvpyBeXpWjnbFbN51EM3",
  "key12": "5f8HkCoTpCLRNuUQ7HZKERmvy3NsCgUBeQYUhvJ1Qs1b31AUxhhcWyq1DQhYR5ms3wFsSkLyP6W33whVKx7CgaDw",
  "key13": "vu7qaCGeL7WKUkjVC6f7p54Ko6ub1N6vR7zLneEVmS1LzcCicA5XLukFixLsv7Buk9wb1VqwKQDvuqYKyDND2WQ",
  "key14": "2cA6qBAqoNi55iSi2sbUsqVoeMCuj6T3AjBUKBt15PG9XkRUoRbCHrqiun7zRqqGfvhUcJat2HVB9cvkMHKX9gmM",
  "key15": "3HCeFTRHSKznus1HGSPr635BtHGiSRA9uD3usqPQZoAULLiwADx6K9yq6sEWTvVSagnmEPQjxL9ezKxNCd7yCXBL",
  "key16": "5Pzmaw9RquGdXwnHJreFSixuubajHysRPo8jY6FjR81Z3yqd8tn7frDjfrVSsAP4eiF3SQKqtRAuWJqNv7jtywwN",
  "key17": "4GDdGHX9k5QnGsyfYnXrib2YsENcLW572NPL2wVmxtr1RXw6s5Zs9qUMrGCiQdgtm2nEBDVJjzqx4pbeBLLY7myG",
  "key18": "5NYFURVfskT3hKH2mPF9o6YP8VnRJtsywYomiqVM4jTgGVKCuHzZJqpHdvMh2CpdV5wCBqiEhMkUKDhbDfHMfPbm",
  "key19": "5bfV2eiG2Xjy9aT51XjBNiTLsjXo1oGNiZuvG6fLK4Vtjjt9cEf8S8aAcXaEdHW6DQyPKvZMXhtKobYFCb45vzBD",
  "key20": "2Tf5TFyhKYJugqdrsPi3kruYggL13mEWcXUxuB5X3ETqm3d9Er5HX9ov5kEC4GNisGS7VPrK1Qn5pw9FRKUgi4Hd",
  "key21": "51HDAtciH6WYgxbBrL7ZDHCMF4hCFutQU6zrFgroPJmrfRLYHbC7S3iNSeS1QMz3eBK6tf1qzeUjjTHXXwTaUDpP",
  "key22": "2TczxWiJkRYtXQZZroFTzJyT2iaNGcYWeHBFf78pegaSdF7TPYt5X5roW1L6yykFRmhNEyvCtb8PaWFcUYqxtgT6",
  "key23": "5WkgYkfxFynFCf6LqSW3FFWLDmma8tKCfzLE8ut9fnBv1aoGzGCFYQVk4X6TifopyT4easQ4N3waX6Ukz5rn7sci",
  "key24": "3jLS5NzZBEfXiTywi8S6xsCHpZDzosyn2tn8PCbvqunmeMuWsrCxPdwZhkb34pqKBE6ha5ynjJX7SaPdSzw56E9t"
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
