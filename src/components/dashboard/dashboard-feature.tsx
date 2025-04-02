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
    "4i1Twq6pqsQvUjCKnbMBXZRuxWE4EvbamxduuDdu5aCkDhYUrJ2CiFtEqHHoBTGvLTmcLHc4ZNAAkKpVChsExWmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2hXoJXxpbKKqAqxqERdKU7FgYJXiCACi7CrQDqqcfQEt8mWwQK2BYu9MKmjZLPRoynmdyE58j74yCtZDdqTt8o",
  "key1": "4ZPFzkmTi8mr5BYXXgh6sYGs8R8G45yS1Y62bmSsNq92RFqwhwhoFM8KTE8szDqveyvjhzA3Hchn6RpBxvqUG4kX",
  "key2": "3juL6hJ36XWFae9TVEG3w7XgJXTtxp1ejFh36rV4FHBV55nLBTwUiQTEZnLLZWd58CxumcBEowtzq1ppidf3LTov",
  "key3": "5bFJFoeCMWM4XnBNZwcP7MHKxq4tCxSkJxPysNmSLZJR6JQxfFqdgsJkFTj9jCehRKBtq16voUYVG2ePE5CbUPPF",
  "key4": "5FCK11bPHhTSRJN9U8zkdipQ2KBRERsTMsTa9XnzfbtvES6sxV1Yysy98vmMpc7f6o6jDarhWPaW94Yc8W75yoK4",
  "key5": "59Cc8Ff2GMhAD29ZWVzfA4mJAyHoHtM7z2W5QP9Px7JNCUKHS8AEyNuXBouXyg86rMSUEQAZWCZgFbzmWkDC9T9h",
  "key6": "3iihmqXZtRGwLvDfhxWXWbVpWR6j9RnYTURsGfCnf5Ni7Q8PBYNsWeg9X6XEGmMCTejwZjsZqK3tajqkxW1Nbxni",
  "key7": "2a2HAGyztKVgov4T87ACMdYXPoZ52DDYjdPNVhiupo2ATLmvtK4JsyVp7RyZvQBmbGsnwvG2v6gXPzikDA4RKEGE",
  "key8": "5j2ymRDowXqg8wVPKLTBcia3yBA9vatqcetqKNgJ8TaWEumqKVuFkf6CDYqiH8WBaQMDAFRsKPUQSb63qH1DQtjE",
  "key9": "5X6CFTrApd5zxnWv5caeK3by7byZSj2rZeyWW53cL5YSWwkb1fUomMSC5LemKF3Xqu66ReY91UiKgwY5Tqxt5eYR",
  "key10": "5nrsYvt3RzfHTcwiTC1PE2W3DoWjHhKP2VnH8RnVoKX2RMNNJ87WWFkeeNeeQVGJHNWJQayxECKy8exz2hT1RKcm",
  "key11": "5JkdNM2Bf1d9yqSiT7Uy8xfthXEZVZM8AFV7SUCvFSrrayV7cKqJG4sbgsaroLTJy3gTE3rpnqRjsgoWWXyFEfdX",
  "key12": "2yAzUxFYfHS1LdwF1zfXYwAuvWXXfVjmtj3t2CG8jXd6xJsMEpKpmWCQoGyVLa9RuuheBTVoFbJQSycRrPzSr4LB",
  "key13": "3q9Ut8nCNfvGxuVdyzgaHNdEFTzfFwBkVj3EEfDPgRvLFqKB9K3YwcNc9LuFVJLAHK4GinGg3FyTdEiePJATACi",
  "key14": "5FvdhEeDva72VczNPfZ1KrUkZYpexB71U4WKXw5mXnfJVzHKTWrKa22Punpm7X72sGT2H8uGaPotuH3pvBbD1Ra7",
  "key15": "5ZddGa81VBg1YbuKtA5ktoyiGvKUYuVM7Vq75UZEkHQNEdaCKJPmgvczUFomt8D6yv1DGkQaHaMkUBEHbw1PyrBs",
  "key16": "5z3JfUppFpJAzDFYAPWocRhz2LrBvA6wriA8uNwmL6fXTkt7xhXTmEsiXrpA2NVatTVvbMS6csdfnHzNtbddNjzy",
  "key17": "3SJfjxuN8LH7MYnKVfPVtd4UmdfbC7F2A673YHtxncHu51eSAvYjkRojbS5FnTHs2RAdJHk8UACWcqbPJ6Bfp8fC",
  "key18": "4HusnCndgMwAR2duBKScyQhnug7bVn5DxBiZ1XxnawyvrwhzV5gmbdxd5c2RotDfSkzEtwQn3wzAZPm3RQGtqyjy",
  "key19": "2dcS5QWT1iknrhmKyJ56BxhpgjcVpJAvZ4enXjZtyipjreSiAaAL2JAckADKqD5caxcqxTaXTfFFDrav33EQ9qGB",
  "key20": "5YRDTV92McA5Wnk1ekCR24BHcKQU8oQpBFToNPCxeEoNjA111EmfFJNDEa5XsXntGYVx3ZegM9mUUwuicDjdVvzZ",
  "key21": "5xahZhEW1Z2wXW7uR8FjWa82uBqrEct33DdH5iZGXvitSBPc68F9E5vQWVztUtRaQp2eEumhoxcgQ7aijHYpKYrh",
  "key22": "24Y7hWgRJBLo2XP2QxVjVduwccrxMnbqGGd9tr3oToKa8udAPYuPizrn8dWVdXakC97rnkRbZvdCn7kGNSYUKGEw",
  "key23": "5ukKVgBjUeiZfrsDLe8hsFMFPFyfhu8tJkNPF8zYSDo7h9LKbogPP6QmNTJx6iNn9zsfnWLFsRbwPTiRJYtZABFe",
  "key24": "3UWC9NCW7wUxQPVVVboyA7x5tkCTzrJ3key49o6iY1G3qJGn4x9J13mtB3kgAaJSHbBqk3gQfXX38tWPqmkaHS4s"
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
