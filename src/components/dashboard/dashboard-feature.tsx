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
    "2bnHRJKuTYv6FtkKfxs8JPmaUNghRcf6RH2ZUxdYVH5q6g1ynDDEfNiTANKG42k9Tz3hzbheKoAPKmtRQ6q6Azvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9xPGhYeeJQSjUwE9fiVuMkfDkyj7NE7bgYRVDB2k7BNwqyYQ9HFsWZKPu1QYxGM4Vu76xCknmwuTKT6SmnozNP",
  "key1": "5S9yoSTRmZWENEHCxhFt4pAGLDsEwuRZ2ZkEu486dnegAgxQb4rMe5rQLrGM7R8MwiAgdDjWUcaj9THiYoQoFYeY",
  "key2": "2M6PvTFjzVBDa1f2VrwXStcid5dR8drsJxL3oQX95Lh6eXewWTk3hj4353ef7eSeRQTKAWsLAXYddQaK1oU3d93z",
  "key3": "4b5VA2nTpxTgXZ8b5C9xjmLXfdiBQCtMVAxoJ4KFWrt6hkbNTzFubjgrvr1PPMmgYAL8zePhBTtwzng2rLX8sK2T",
  "key4": "22yKMMuZuDrjSVXBkLPdvkfdojJ5ebTQ1UgYn8PBDmAHCtrUNWbmghuGYe7CRrcKD12gzKRTvutCx1fzcAEoZ5su",
  "key5": "b6bhkMZZS1oiVBYDmWUvbUi83QrdKExqTxRPFMekh6KDxjn7Mcueb1aUUb1yPLVx5wMeN4ru7WNvBCwiUmbtGmk",
  "key6": "4JVRhTcS2V3AUMTLm3gCWJ5hzJhDURptiQnLKaFi97uDAs1Dh2nPYu65pV4LjogVfzML6ep5Mk1CCMtQH8YQiKhB",
  "key7": "2F7w9suZPdBGQEDDVLrp19LV3hVk9Zq4vW7LU7cy9zx1EiQYtPqao1eUYru2YcbMvYHggPzCwQyFLE1J9haXck6M",
  "key8": "2Uid4ymGKEmSDcuGKAC2qydaoyrCA6dBvZFvzMjCaWRmAmSct5Z6ck98aM6XP6Yb1jCX5vQsSqGuSApyEF3HJAVv",
  "key9": "2ymPyxe8JbXHM2FZzL3px1LCzCSpwaiJZhBVZP1vM5Lk7gTxMFpg2ME2gQYXoxFJWvMDhxNSTmwt6SgFdsrvTyHf",
  "key10": "5yNfc9FWFmkSbXJMiXZWHnHqxHJ8oQPGPCiEfjyzSXeJz4ApedAmdN1spviiP116wWx92864Gpfq9uh2qcyNWGFd",
  "key11": "5QvSUjjLvBuGJVaM5WJc92MYZ4rZmxFhGwbo3YMA9ukWFrvBZFMvWsWM86wDj4PgWrGBzCjUgMoRt8ivm5555fTT",
  "key12": "5nsm8k9jpwFg3mF5LhHVnRc3b7tu9V1WDnPs4SwkvvHGqDfUWtGCFEKpG8G65eRjGkpJ3oVQEdS9ErwD6vWKdk6d",
  "key13": "5xgUy2Xxi2zHEgxg1sbpr7QXxko19NtLBx3WTT4QfRA9x4VpU61GUNLwd1djoM8G4pY6DjxerZaMLPZnrkP4mEdS",
  "key14": "5MNzxacscmPCS37pb8x5VdWAJCfU88ZYhqNkiyk2gUzgXQED7mGHuLv8b7RrQyoQJbERCbujnA7R5p19drZsHJ6i",
  "key15": "5iTFbGRdRFph2gaVxo99UZ8t8tnP1kdmzoPcf5yZU7mXLStRQGBMm4MwwTd8HLR1xBXhsywpQxZjGp7SAcFMwZe9",
  "key16": "2zhSZH4hZWqk6bZc94FY8SmiLH2kHanoQVindfnxxVL5XY5x452rgrBdS9FJZ2bdUSNdK1YyF6oGx1v15NNN5pB8",
  "key17": "62FnLPrFxRTsRNMoB2a3xQiFu4jUhKTysSVCjvmW1uVQMrDVF4dgTCunN3ywi7Cw9aPGdXR6nujgNuVZDfFuyEEa",
  "key18": "3BgGcsfJKwZpTwG2LB6higRR8GN1jj7bYXRQBnrSeeVqimCofDktsDb1F2bc7MYsaE7ybZULXZYo9PF8EM2SeVTA",
  "key19": "5sEmK97iJygSQzP7ri6JhMMxjmsixDkfU53s8mp26L8SHQyEijH84GqTfLGQaXgyUeBpuEy6uJRmyRNPciV2hgip",
  "key20": "mzLfgBg5FxtU5RRXzR4vMRriuKJrmgfc3FKemT7eVQG5znFrVDiMuUE4mVm7jShBzxJMcFoMrMCmUqiH9WctZ1H",
  "key21": "5MsDD4GyXQ1hQyYRcxNPC9XpXhZysU1wo3Asys1o2Ehb3qJHCD4WPSK415HGX7DZvFaFrFWjcXBzxs3m2y92fDhV",
  "key22": "4xV5Ckkibq42gwbXPtpeF6zug4CMhmfzbAQfZmQXNJw7qQQXsF7fX5k6jiUxTjd7gHbQSqMuNXX35yygBh2yBgHk",
  "key23": "29nsnHetUDyn6CovD8GRj4eBq3Jbbdr6YdxnHB9LpKsGDSFgVGuiNag9G8dBBmVsN4t9egbBtyfBwuYJqHfvaMus",
  "key24": "2ZtEFvUfhjUDJjbMhPfHUUg88UPYk73DGoGHMHouRMUti5f3ZMiiGVBvpmUAim62SJzpZ4kn4fqGnwwpaBn2wpQg",
  "key25": "5z5r8Z15PmE18XfiT52eczMV43bzkLpjwb73eXUchc93Y81bkTYncLPs5TC6akZ5A21kgWM8fhSonVTwoPXbWd6e"
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
