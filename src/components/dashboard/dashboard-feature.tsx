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
    "Jz5YFsrsHbsY9popXqN3dCqkrRXaHQbFgpjBvAYV19oEqrUorz9zr6J5GuH6n75cWzG22HMD8Yf38CHkBLxQBQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mWyRtmPxcSmqRgfvPVqRkznj79KLG9dFx33ZHxz4cFzSoZUZrvCjTecJvr6tVPpZxiGzvy79UGaMLT99ABtdEXP",
  "key1": "66P2Fhjgw867UAycJ877A2t4iYszG7zGQJdRdxVxbEHyvtjj6ppR3rKdLPNzKaSQD4REvnnyYs4pLCpnb3nhPncc",
  "key2": "4d6gbbZmbfWhH4sbVjmYqR8C8vy7r9Nw1pWx9omFUqsFeLdNPKJZrUP2fwY3ZkGPYibGgpeWKvCxssJbGvSsjDyx",
  "key3": "YkW5Zn1N4oAUczELkAQuyFa9hSiPpVTZHHm2uD31mVw1uPkzg5ufi6Cd2cpKrJ2npq1wxxiUGSQVy5Ud12vvTWg",
  "key4": "562Azkmhnuz39oEtDj47xGAZBdVkCkaSYcHn6kvYJBfbvBmUMgMs1jEE6iQ9nwGeGZ436i4F941sf6iQArjp13jH",
  "key5": "eEh5dr3sP3PkKTWMGmGb1MTgZjjFRrHXjzBxnbWS5PAom6KAkQpza1VzJm9VyEkK5YHCosSFQUEQR5CGJ7gtEND",
  "key6": "5HdtdqMKxEYwXfa1s3UuiMZgJZ9Gr42Aj3oBZQzbSY1SMnAhzQGrRKZTzaj4EQvkjBCy5XVXyGFx7oYh2aXni5dR",
  "key7": "3hy3JhVs4Tjvj5TA3VEdTL3h8cwToWncgw6Sgdgo76noYYbPWCxVwmhnYUduUAWe66VPgkCmTjqrSLfgbqaF1P97",
  "key8": "5rtw3FaS3ovFvGBMSJmqiCrZXU1LxYNXcJ9b9Sc7ywCzZTLvWwqVYaaAUmv7UVeqkQbQA3CZT7KqSRJRHd78fVgW",
  "key9": "4wVV2DkuH9iCkZgohvsAoVdZRDopbEVDghnM8a9atgyM6FMk6z9mgPjPTdYSLmNPacAAUh5gvgCLQU15jtaK3TFH",
  "key10": "4AW5QXkvhGtGXB13YQwfAnq6XtZ8ss6Vf5kHHvYrJxzbAj87it8xKxcDExtrqW2Bth2MfjLcy2FFy76DHb79D64M",
  "key11": "2seGDEM3EpxcJnhnrwCuosJ6yr5tuSmAsZiVjUDYSu4dsZpe1atWYzUUWWjYXys6aW8es2WtPtxszH4XEnQLqNoY",
  "key12": "2rCeEXYiKwdrzT8o3DquUsuZTc1WoqzrCj2xwY3xcgcPwteNj2XXsg4F5VMepdsp94QsWVEoGnauHMLe8UmYhZ4o",
  "key13": "yM6i6ndpNh65QHSnutTVw62YCQCdKX9CcWJtu5Uxh1v56j5YqA7nqvFLuqddm738tbYj2oBpoegmFUGtkS49jC9",
  "key14": "3qHzctac4RFaJexktacnXuVwwQ3qw3EjiJcRUpmVcK3egjbauH5EmJoRVeKLCaDa43ng622mU7ngVuoHv3h9TxKp",
  "key15": "8LDSJY3K45zHNyRUoEoUBBEP7tQCm2KEDpgeo7VFyn8bLhaCxJ2drWEKi5cSu3qgA7JpSQgie8EPHJyFyMaGwPZ",
  "key16": "5b8yo1Q43mgMML9BA1BNTfnHt29NZrx82mM1B4NmvgNB4W1tTBhMv3mkahBGBbmUJGY7u72vLaU4yMpxUreRxYcr",
  "key17": "3YfEeWgTf2QRTgDtHDdEr7SufqJpbt5nSv5S9tZXX2sWQ8tFkMkSPtsefdSePKmdPYRUrYBsmfpH4QFktRFdUbaF",
  "key18": "6536hwTRFL99fLkEPsLdB16omQJtnUr43ZWWhDRbQedAFfQys1H1oqs1M6pZiRtNj9eVRCfqGpGSPxK4BaJqsTZW",
  "key19": "3E1946mwL8VshEF5pu5rXR4xbaytvGqhRvNZckEHKosNF1EW1TqXQCiznJPfKxBWbhG14YQZ2obfbfHjvrP1xxJE",
  "key20": "2juo3MwibtzjENcsMXBEsfdXmBDszKGTGfioKERQkKWUwppced49WbCe41iV4nco9R1Rg63AS1qdnjsA9ZY7fwRm",
  "key21": "27RvpgFgoKZRkrn7qUfYT4NVwpaEx6pDQdaNs6qYmPoRuFvRiQnGCrsbgeiXB3MvcnyFhQk4vDJGZhk5pE8dsCEu",
  "key22": "4p2S2B4xhKBTM9GkJRYTyLBzi5RrPjZjxt7G8JKZqtx7Qx93BpbmB2xYHxG9inwk5ZgWwer879ZfzC19v2TWCqmv",
  "key23": "4vH1PH277RwJPmaaQqUrnKY55PuwQgpph4dWPeV7RKJd5WwKkJBCKJSU9hRNHzFFT5BppkEgMzxEAKpwXMKnxTjR",
  "key24": "33QeAUcuR3M7GZGVaN14FZrrG67DQLRRnbCF26uEymjnkVJ4c3RzMaLzZv9sRxpy6zB5ymVwjB4yPzwYU2Z5KY4H",
  "key25": "4kWPCFSZpVCbetSDvHSc4ryGcsNkXhcNbzkEwvPrW3FHgc9etPnX4VerYhEsvnAmcxPrMy3DeMBwT9ZUbN2Ejns5"
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
