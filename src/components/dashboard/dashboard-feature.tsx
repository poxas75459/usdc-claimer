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
    "3QuNJFUg5UEkNmJbeYaDSgbwwN3EYCBHfgZJFM2VBN4wHNed95dCo1M5hj29MPLHBmCaHeumjdWR9PhzAUpffWs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tV5TeTbWcvD8kAusS4iYL7wrrbnoXS6Ybh6kXCogU5H2y476Pm46Xfnwj6NnFue54h79ZhAYXj6ijqwrL4bEFwW",
  "key1": "5AKjdn7crmXHiAHqeLjuxkUbsa63eHLvPR56porQVWpCRhGiLLzgz7JUVWV66EN7HRZeUqkyJjtFREYrgL6jcN6z",
  "key2": "3DcCkzqKgLDDL7ZQYvZL3xBgc42f81zds9d9kcxFc2TeZVVmwttRqFTW31JUuym5hmaJZh7utV4wyDxoYP9aAGrM",
  "key3": "2BhHqV8iCFitxTm9XXbkKhbUo1gGGUZp63vrjmXvMUYG9FrJzMzrKm728haCPZCDZssez9WJDxumFWSEAamubszy",
  "key4": "4GiUzU2U6w9PyRz8X7XFQ8ss1v1gfXpxpb3YPVJ87WVL1sWW9XTrpZTaccYBHtm2WLJTsge1iXUc3b3b4CC3px7F",
  "key5": "4oyqzu2aMGJEL8AT94o4Jdp5b9iFq9onyaXgtnTnzaTnGtrkXsQdSf91ioNApTrvbvaEi2NHA3zBeEG6Q3HyAAyY",
  "key6": "T4gjeVDL27dgBX8AASPyBcsUcSMwt9igDKVqb1BSqBgsi8bUWB8wiSVdHywDtquBEfBrnAXjvP1ggfvhepUa2wj",
  "key7": "5REy6bTrBPgCi2u8wkjSgxejweoKBPMzD1Fo8jQCcBQ6FgN38T6Yk4R39sbxDBbctMxyLbecSD7zMuF2bh4edJRA",
  "key8": "632a2xo8b3xbLR8HMQZHhqPqyW8vKTus8tWrfL5dvSxBhQYo8jnhJtV8PHTTL3Tw5oG4NytbUAS3dcSK9f3Mw8qh",
  "key9": "41aZfDJ2wTepvthKF6VGpzK6nM1sYFzuQZuZMX6TodXY86EZtyEtgybZafAdfnHmnnVSRzzjMMunpYJK7QM2aMpq",
  "key10": "3sDPsXS6VLZGPskbj4PHvJsKNkBNspLmEJhrXq4kjwej5EJhZBLFh6KHyuEuUBCTH6NJy7y7JfSwLeoC6F5YWmjC",
  "key11": "22kaWziaAas2jX53j1Y5tFSXWeM3fa7qnu44KZGjLrLMPVjY9mreUfep4NcLL42JgSf8ZqD6QyxuWXyyQ6Sf4koM",
  "key12": "45KkVqu6j2H5CpJ8Nkz7gEPB8zHLkDc5NyrCckfD3cTVsGyhC6bQPtVGC3tHhm1m7PHz6QFo3tLb3noQiPxJkTrC",
  "key13": "2zTGqbUzkJRKtvzpkuiPdj1z55zoqMuGzrbm76r2mvPqnupMfg8w2JaArjHzu6dYUU9Xe51sxgMTg8LPdR5UegJe",
  "key14": "2EvLTYdvEqZ7d5dUYhfbT18Bmi8ZeWgedoyvTBSgZQVdsbMgMLeYvqDYiRshQnVvwYetBitz8KkSu1RP1DUPAGbK",
  "key15": "2jDca5eea6u3HP25ZdU9978tHGJRF5n9a2jQGY2mCY9a3CTiSe9J35KjVrWySkzU2u62KywZqwiHATrUonaQUBN3",
  "key16": "XbHKAdjewNbjBJXRQfkived4DLuq78q7bTZcXmM4RsgvEoVjFR7rD9q6aHgU72XWYfBtobwKk95gPNV4AoPAYUU",
  "key17": "2FuCbcAg45jJThQ4NvFaMc8F1Z72GWQnDRmRywkCQKypG9oeZ4FRDD1nrpkyxg2nRRsfz31sTapXYxogXsHSDNpd",
  "key18": "2d5ZCjwT7XSX7Ein1u38UwQnt9UGDwtZMMaipnF88bcdxFKJ4znuuHQp9rnqis1vgVPh8CXKHz1Jdm9KoGeWg9CL",
  "key19": "5PjHsCPaFfkhHNnhWzMbJv1aDiTFRpWepCvWvtJisjo51rpbx1Rwtid6vU4fBzzLTDLgJZcamC9Afeqa7TDZBgsd",
  "key20": "5ChfiYrJdS2qhQtGowtSFiLKqgqjshhhEYK2W9dGwE9LPCuBK7g8QBd1HiyCwqnaWcTFMmdw2cC4AEJ9pHBuczZ7",
  "key21": "3fQgbGFvBTUfRSyzrUqSWiqRTHAtHjVyT5gmQ5DupYjq7YcityvXitoyg9MXUD8vdujtZxjxLRvMaJhMfCqe1G3x",
  "key22": "5tQELSgi7T6V3ZvvicG6WMtJvkLqmWxFFHap4nGCLrNL3CwTQz9SvsQ6yhSo6Pf63AMSmcq32HpCni2fGrdCG3zg",
  "key23": "2Y6oUtB8Nh2xSsxjLNL1dFGWjCnVTZaXNykFmzycXR5rhNeQYtF6dwsFScteRkSvJJyCsM4gxgsfKjyiRXCkmAnd",
  "key24": "JnavPd8ebPXvKnKbLVzxj4eZYZEjQ5WvAJjgZjx4RbpFuWiGzD4vre2pgmNg79jmptk1WY2E881cdpQFmjGiiy1"
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
