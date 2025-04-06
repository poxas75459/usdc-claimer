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
    "48mcF93UHthnkRNHsCSBdc7yMFq82wY8hgMvBLUx8m8EdqfapC1XRMZV1DStw7fBJbJ4UyQYtqYAh1tMBQB1vBTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjmLgbsPwFpt11UXMwmrN8iWyPmZe3E5JmBSzS4tMZR9f8FVYyRq11i2KkvcGyoVr9unyFWZS9xbXDqB8vatHUu",
  "key1": "P6sejRuYattft5oHkcRR3yaVKTYEjsupE852pmvgj5gFxHiyNZb5adzuBkuar7Y5kF6pSYASwwdFgCuRvMEns2g",
  "key2": "3Hozyz6FQ9jiDg6e9E5ugWe1hjX5WySinAy9XnLRouDDY6DYekyZgJ7pHyLDdc1ur9aodCC67KPLoJRxvtNJXK6H",
  "key3": "53pXCBSSM4ezENvE7goNuggjWGwPXoQGRjANwPAdrnFp8eN5avXRSAyFyLtrmK6czyKLzBLZ4F9ajQndUwgktEzs",
  "key4": "ov5QEnmMZv1G8S2FRpdefzfkZEjkBcvYEfLB9ssL68gJbAJAZeLh7SfvwT9wAJvxZFgMocGwz9xm7nzs9smGwK6",
  "key5": "4M4WbGNcbuPb2539tMJXkQAyio8wPcyaujnvHhg5E9TRyDChnvKpAfxW3ApugQ9x7LUeNwustm111XEw9Zu4REjX",
  "key6": "3w8dwsR9VFaRhp8uLavFbYsqA1ETP9AJLf5WNsj4tJCK4r1WqU9xb5ouUgApauYRyTAwDT4Bn1BxDxAewKpZTgMJ",
  "key7": "4xrRSPW656bUf1ZCYDu1oLkFWwYyDYnFmRfKyvUd8TC9yPVKp5AfZg8bHKJv6ecb63ZGDo7yBEuxufyihty664pc",
  "key8": "565gx9XxvyfwDxdHbPdg9StSw8eoVARWSZ2frotkKkZmgrTEgvqhpXjLx4gKosAuYx3B6W4NXMMowjZ7of8RrD8A",
  "key9": "4UXgKnWkS91Ad4LRXYfNy4jCmmcg6Yfvk98QW8KyxDUzweBN6PJQNwT5pmBoqXNiLNrJqpnWTSep1KRFya2RUQLj",
  "key10": "54NQVuFcyQjLjB92u1X2kAhJ3o7YGwn9hquj5ShN6smykmRiom3uj56LdMpdTGpEpNH3hS16BkeuFUZo788gLGfN",
  "key11": "5E3WqugkASDMvLPuhFwARDUBCNoSuooMBzdaFEQasyXB3vJsJLCe6SiZrvuWdw99YmHeN9ZmMphMvJou15D6CnLJ",
  "key12": "czH1BJWD75tyGjcbqHo38QUv98JR3tYhGq9EYNvGhJK4jznRecJ5eT1XKxc7gjwVArrRAgGDV2sNrnyFRKq1Dax",
  "key13": "2eQBx8wDZHA5yygYDt1KFBH3H6BrZr2XK3Suppb6pAqMUY4Qpbazz813LRESv7sPsbH3wi3b9kYJiq8F5Ep2Xsqr",
  "key14": "5wB5ryb5gLas8qWYYfs1MoDp7dyrhL1XD7Gvh3wz8wSsCKTDNAK3kMPxqyqbU8VBNUxsD5qvVsWmNppCbRH5PEC2",
  "key15": "5JorbmnD8EkS5YkyHmoLkaJsoQbmZXF3zubA4B8rVgEgkfUkXXQAMCu8qAvE96keH5yxdmMuN4gGuB6QCoDSzEGp",
  "key16": "2vrWLZ4HhzgZ6eBFAjyPBvsnQ7ge72RN32YsFxTSVqGFGHEnZTWhk8Sq8WyALc3vhGBVtL2LkPDWkMEZryfBEkgy",
  "key17": "53gz9avBoArjUchXFJweQCCAaHdJeKzB2FBUxNS13tZ4HV1pQ47TQpmi82aDpdYgFzy7e9EzaZ9TEA8iRooqe4o5",
  "key18": "2CANv6LQQXi2sCZMsh3Wanc2BN8AXbpmtbe3NDq7k9ZE39M1ifPninin2f6UGhU45NvDzarvv8bq58iZSPLkxJci",
  "key19": "5Kr5BvGJwK11YxSBuJzDQzc9Goj8Y8DQpYVoHGX1zbt41ZbDhQ5qTmMFcbKQ8ss6dWgaU2gf7NP48gna1W4WdUKh",
  "key20": "53yKxjyo8jPcEciDpxpqZExFpWNZaqVKbwAVcTKm4KhPALQd4SHxuun2Ak6cJq17sKfbLFr6X51xHARGNiTFEwLu",
  "key21": "5yE1b8tpkAqzqR3No2d4o7sZCdvifkvDwxSpfAUG3ELuE2WGWs9qZo9PLfhgNgTqd1SeTqwH5CXMqo2rfYT3WZ12",
  "key22": "iLXjDm9ibSu4ErBZZgr6LwMJMX9f5L8NJBb9kz2ADAQX8WfyxyNgpHKMBdFmKUvhQFFTNvX9Qc5JdVQsodn4AGs",
  "key23": "AUEah16UHXUzo9YNQW9VBujyjwdhkbrCZqxgDfM33kE5Ct3Sa8spzNt55hH9fVt7YG159Z9qKa6JWbX8XbUBtdr",
  "key24": "P4WZ8t9SA94mSqToF5p8afMP6YoQndBafZf7UAnMemYQnhTcvtuSyCPWZzCiX73b2S2qtyVSw7YM9bhefPQpgtG"
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
