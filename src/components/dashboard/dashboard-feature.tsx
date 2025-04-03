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
    "2cxF2CdykkVjuA4FKgRcEVtyoQE51E1meMydRfe7XQnrgcfbcmXGYYmu2Ct6WmncLmkZJspL8XrTPTmKfjcicEuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyNRByhUdvQQkMXTwxQSV37hG5yS6XUHoowcjAfpXcZcfWXSBdFFri6Frva3a7WfDSQgPUR5Thkhd9Cc3Wt96jT",
  "key1": "3VWV5XrwEiYjb1svxkw4qUBXhVCRBUHFjynCDch7n5EcFGammFmfSUb9TdfeKb691uS51aQpUbDhRUScpH4WAnWp",
  "key2": "i2w3e4neUjGuSwmFn81SXzU1em5RwdFST6vsoTxnNhVG7V271WkQtfQZkShy3yexeht5tkrXmxudpJbH3xeC4KX",
  "key3": "2SYTkY3zWEei3nJ1GqDushczpL32Myf3DWD9U3CYrP1ma8hSnHZ9PXMsbBhoQ1fgS6ieD7Z8EdK6FC4Si6Z7b5e6",
  "key4": "4QQgmF8Fv9p8TWPjLtQzqy8nTQrF8dZvRDSXkDceFBwg1fEHvGfowAPAqvu5ZKgzQH6VVgr2UwHDPV5dQuj95YuQ",
  "key5": "22rTXGNqqTk1dUojrqUwVjitFDBsnxThArPwNQcnzCnQ7YvtaSc8rck5Nevs4p2yDavvdk2s56cFHgBNiYYYzpdG",
  "key6": "2SzL74U7iDFKhpuNCHU3uUqkVBVXxNYCrXhXcuu68ZoDkcNs3QRXS6EfoWSydX5BGv4X3zBNDT5ziHgLsEbc13v7",
  "key7": "3zyfhHnKiUtTxzcg8ffwtRvpk9XrBM7JS3qxuNEnXQhxcvWiZT9FXrofbMWuTjJVzirAq8R9TGuWY5qUra1S8eHm",
  "key8": "6VRb3fPC16yN2z3Sgb6Ek2VowHKCgf5zEzHb4WdDRLUvYe6WpTymgZAKAg2VdMyXn3YuNW2Y1i5pwDgssg2jZD5",
  "key9": "2EGvB5iXwoAEjycawAtieFVPSxpQnXqZ826gLTkghK8EH4Fsdzqugf1U1sCXt2WPbJuxWaQLvGBmB214T6sCpsFU",
  "key10": "2oc7KzT2GfziD2PeWJaTauA4YkDg74fAyuhGWsdUNWYsQzLN4VjL1JsnoPN3Z9oNWp5YjnKEntQEDUzHpsorywbm",
  "key11": "3Av77U4KGtgBc8MzUEMafMWr7WXrdyb6t69tUfwgWWUvCqWZQCgTPq2izviQHbWZLu69S6JxkWKTz7EXcLPyQrEY",
  "key12": "2vMqydA6pUp82dPnATzfeQ6cuEAQBFrpoK2CmuguBtZACay8WCeW2tfn8svQHNW7ih1bgAuzJjPMe7uqacbpDpwf",
  "key13": "2N14TVtzmdZCjuLPBY5ZVy67c3rdFvVoVBWrkdcTnRQuR8QgdDkNcBvUoRKoYe5v2MxXaCCukoH5MuKXMW3ZLC2u",
  "key14": "AsMHsPMkUYL3TPZojq99TBREiYKmAqokpWvCLHoAX98q87wwL6DNgCy1qdd8Qm6afmWkCN9VeXLr1Xst54jgJyw",
  "key15": "2matJxGpEXCtQzwwa3bQHNZv2MRwLHbBSe8Bm5NcfhLKS5a9Y26ovGHURWyz8dLNmJg5QfrnsJ99uYcfonYuxTSq",
  "key16": "4ZdXVf7S5ZDBVXLz4Q5uvpC39r2dEmz5umXfFwmUjW4HoUScy6EiXojyEdg4voTRkvFbFWFN4icrBfhFhBPuVSNM",
  "key17": "29HKWpGunW9baNkJLZYBx7H1rQuwzCd9kneMSJY6zsXGrm6PpApbTTK2i97JnhkoY9StibYcEbVsht1hXR6r2wCj",
  "key18": "4CuYUvKeTqbqJobag6vA8JshHo94wBiWaFPPA7kvPHBSFi3VyCpTeG5N3MEScB18PiEiycaZjvzztuoED7fsM6iM",
  "key19": "2dhUmEXVJ3Mr8jXcZhraM5FvqEvx73dNZKMjh4ohwXoqv9DA6rPPbTg1WqtzXNp2SUgT1JyaGa6ebBy4Gx5iTb6A",
  "key20": "3JoPHMTsXgKG7dtrCW9zcX5jT1h54QKJo6iumwc75Y2PUjkBWsEYMTc8t6qBA1QMq6NzSrPZdi4oAC5jpDonxaux",
  "key21": "4uVXWDoqT2rRfuZdnXQPaNb3xuE4RQ9UfnpV3Z5WhJqosPnUtwyYqVQNzmoqCeARfNM3y37RTTKqC22mxYAWrXf5",
  "key22": "8HZPxNodEKi6AbcpeCAMih61kp3ULrbDAmDe2b4qb542YsGcS6HRBEGfKMhpK3pSjLQMqxBH9xufeuKJt5CHevE",
  "key23": "35qHUGqvHpoyYCgHmxvksyTN6NRjEZWsmEsBJ6SrPR8FuEN1NYuNH18e8EsMjGDWij2G3c5GiXxPejr4agV2aNGu",
  "key24": "362MHapcqiTg6GG68vwSwia2FVfwjeo79oYjLPCu74vmPKxzxzmkUiKT8xesgPNHH7QYN1Ck7poxPhBqi6nmfAeT",
  "key25": "4Mh6uCpPjRXGDmv1hjy83oJPXedgt73YfGA9iPfuos8YZiso7ouKvdBNNvWrekvavx1CPPzrt3vCiwuG1NNxUcE7"
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
