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
    "2f1YX3wUcj3xpFnYahufcUY5Twdcbg1osPkMsNSkC3JfdqtYrMzBRzQv4U1TELi1zeTLarsZ8aGhDwWqsrakiGQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5PPCYBEakDmRGH5mEZRBxvf2tpsnx2dQgd1tq8EdXbVxABYYHVKo1zJipLQGGw6Uh6UfgfregP5L8euhvWuXds",
  "key1": "5dfrQ3aYksw6BxkmF6jQbBTps9dS4u2eg4wDNmNA91Yz5RFyyYPHGvDRAFBqpm2soGYpYwg397HakQ13JzMze9Ss",
  "key2": "2Y5XsSg4kYsU2E6RD6iZNzN3yWtXA7X8sxTQZBuEFvTN7FKW3cD5zc17irQiDieiN43kReqgmqw2CD7rmvJCMdie",
  "key3": "2Xn7NkBDG5jZhDVrjA7tXvjrB4ikicMdSxU4WgXnpwai1AsnHfNPJvDbC3HqWAgcajjgPvYWbNJHqpMmhzDibKYM",
  "key4": "3vqFQ3XD54QbaJkEKxBi5mLRAuRJCd5YqAsDFNPXytoS9XEaT7eVeQcLcdSRGzcXZdsaRjjvML18mnEmgfGkj6Ui",
  "key5": "A6gAEHETs49gLEuZT17tYeYgL4KBkqbFq13HREhMEDkXMwA2CsmW3fZF1PsQVcpZ4JRNq96XV8v5gYC4S7bZT1w",
  "key6": "4PqGsqqnidUP5DM71vdNzDbiVd5rs28H6LCYfunAo2kQLY6brUhQ5nh1kGrTou1H8rDkkFgyParJRa5wqjbThoqa",
  "key7": "2TcyW1WZQSgbioD71SV73UtukDY1ds4KEcLrcF66HkqbHKMDPkWd9Qzxri1JSffrYpvD4AxTXAZafnYTiYWsEfNn",
  "key8": "4g3ydbiUwpkTZQKywdizrKzHymX7CnUk2QhoyrWtXx6ERHVSDJtcHUPteS9xZGzcPFV6zyAMRUsKLHCe79HUcvDs",
  "key9": "VxGuUzrN7UrDVz1f6Y7f33iyPe3f6jzEY73AAXtc7JGfP7TmR5bstE6s4yQ8n1YFpZQBJmbQ7AXzxm3eLsUNuEX",
  "key10": "jkaw6ffWSrQGpwNUmjztuTrYG9bKJPEfxDZMmAXzoq17Fpddb3bvX5g76YsbtCbn9RiUhoeNuCsNVoHxTidp3DS",
  "key11": "23PrwHpEqBXxQH7UNuCXnubnPjpBDSxKWfdrrvYJbLQezV2bSiWTtHa78KeaEPH5edCrBEUvr3BhwCLE53PQpzET",
  "key12": "4n6UNCQQWtEWgf5xxbuojR3JsWa4iT1VYVDzB9sqQ6gGwuWEvvE6WwU9Y5mqjZqUFA1VS789YqmuqY26RWdR7B3",
  "key13": "56WfTmeHyWbLJM9X8TShfdHmy74zEh6aYjWqmUQeH47Fpvf5NzoRPbzWLY2MmMq3NdAE3srZcKkY9udCwgDPK3pa",
  "key14": "2xwxtTkgJixPsaMS5RtEXRFCBTRxcT164b2J9hLcW2gqvzXD7aXAKPgSepFxABLBEKNz9vF5eGrw7g4PkGhagbBN",
  "key15": "5Pa8vnSYRGDn2dsfcfzEkMaXBamxUDeXsbYW5KjGPfKatHUTJpWxR1jbTeARp93uwYSsVqarW9AsgTRzeWv15XvS",
  "key16": "WtHahLioLYSAh9HSQ63AQwB8rp4yigv3uNfp1aUeSrYggbGRoPDFXyMfkrc3QaBumFtLNR9eCi6iHaNoPViXSZN",
  "key17": "2edj5wR6ujEEpXyTsrAztkrTGbQGQ7npb8tgzHUkoWL8TqZRCBbyGTeJyBAXhxsNwmTXMyfHuczMms3rbMJrLpWP",
  "key18": "3xFQ1YMMcjstu5QYXfPw3bY6vyNqNe6LvEKN3jk9yvz2tQ6wrMFrEBQm7Dw7FGCjaH7njW38ibTegiLiN7RwqKJT",
  "key19": "5ov9mDXPXoZerQAJzzbvsFfQtkFZ26nNi7aNKSsmTU1EGzdCLYNCCcvDrutWNz887PmYSXsAYZDFe1MxkQ32itpQ",
  "key20": "2eTZx5bUPWiSBFSZsfNWWxk7TjV14HQJCTji2BJKechVsuR6wPQrNvbLjhHgB8E9dJ4rdbAs4ykjTi8pW9DnmGQq",
  "key21": "4DYYezUhsXZAAVngB9wDdgQaEbB7r6mQRuMksZuZTY8H4Q4U2TPY1pyomrf4Xt3MokWcjpySpNf84q8KCcm6AYfZ",
  "key22": "5Ex7PJt1Nu1nnaEvzkV9VbrEDyLjzn9w9spc72JgoYY7HWFZUqzdKZg814nuwdJUwvzXyxVYzCYXiinPyujfGVy6",
  "key23": "4d6vfGYUBKtt5S6A9hk2jDjULvxEkkBVLYuqmB22jW3KsrXK1JNpLR9SWLRLhywNo45HYZe5DcnZHAuyr2FYss2R",
  "key24": "4qsyyjnFo3U2A1pnyFwezm93TuhRDeP9BCqdib6TEdJuHboHVmSEffXoVMKRtHwSr1aErCpFhqco7Vdo1XJVn2Zt",
  "key25": "2noaESj99TTR2qE8az9GreR91yn62Lan9k4cWc7YnpDKTv8N6dye6GmzQdteEMTYrqRQCQeiqEwhBE7SJQvKSFqM",
  "key26": "2n19WiQx5dk8f8Ufj5uf9pQXxEwScBd4RerG8VsscRa9Vdoki62rdDSv5DrriFVqqPtDfgkfLdeEBuk1TeoccXMe",
  "key27": "3gPnEDha29La4dsBmMjvi2M9aiJUodN2VBRvLuUVCrBPiUowxGknmYS8Bkkw8YjvuUE8ckKLdKSZXWYpzxp9yMuA"
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
