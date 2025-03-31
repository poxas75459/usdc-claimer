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
    "5nDmjkn5FknT2NhaDkgmeSaAtKosPnk4Qxq1CHkVJNAH41KjufwRDtQdKzSPN1G4Aciv3GDT89XCNQg5e8td2Ypx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tM8YNc2Vv97SESYdGm56D3dwtE2J8Tu1PeZfBvz1gCQwUtasSCGgfSZCvdHgSkUamfdA7LzfxBfAPM6LbXNMixA",
  "key1": "Tx545UsbcJysngUCKghMKxU17EH7GxdTvn84utS39ZP69hfzanr53A1yMuSqE4ktmkcTHTRhNLU7yZFCqPDSDew",
  "key2": "24Pq7V2H1uwJeP21xHE4ZwXqKuMy242tG8CqFbfvGEmVPcCDhVHnLACvfTv7WNT744fMoemWWavHCA5BeG2jAMtH",
  "key3": "4VxsCqPazkt9nE2wv5prpcMkQMJ1uyahoSjqnBqu42Q3KShzw8866mqPNMFhfTQp6mq7NvvXeY6fUcB6eMqbHNeR",
  "key4": "27yXjBwzSABP2YujKGu3VReMwpespfAQEDYyLbZJRYGBNQyYrBzpUKRtVRgiy4xZpZxSTUWEbuC4992g4ST3TM98",
  "key5": "K5g67V63AzCrEaCSCmyLdS6v1ENU4H28UKvF39YeYktwdZSmUezFyUdmLgR3sJJa3sEpa6bkjRAqZ4vDuxNAjD5",
  "key6": "DfYztMkUxaSqu9v9e5DXuRDoPtBrKgbAinNdFSQdzCSBT4cMShSfTrHjw6Jvx15GiM1ycy1QUfhFcxH9JUqejpm",
  "key7": "5y7vgjE3vfvQYQCy7BF9ZHRv3MFf9QcHVaUdGjzyJZFPeHndg8HK2d2br53vvVatvQewuKJpZ2sP9n9XLp7vq3Hn",
  "key8": "48boutV3UxELgKei4NgAVEVzK7WbNBNgYY814KLxriqmSJW2yWiSNBt294yYiNWT1SDsvdLVzhV1Ed3yBeNX3o4f",
  "key9": "3U5xXTZVJktXCrfBadcBqP9rEhuGKYc8L8jRpa45gvAUSSMn98w9gTfLEZyXMPYd4yH5L4Pqy6e5Y7eQ8MRjuJ3y",
  "key10": "48CigCwNMEiV4VG88oVZKsNLtThT64twN1KrXVBrbjDuY2t6DLzEYvYMvdVNe68QVPzAynA7gz57LAj8oGeisW8n",
  "key11": "P7NCXiR4qTaRt3We7M94X3bdgm6oBWUCNPQMiRMNfHiBoR9fPoz2VEoUJaq7bTtvGwgKCbn64SCVxsPUZRacd7D",
  "key12": "34bYb1toZ6wFno6x2zorrmeNdfyBFm5ddG9oAFJcnaVx32i9Uptr5GFeVT64fM9913LbDWAi7bnMGGEW7SYX3Pt1",
  "key13": "j7K29tQNVRtPP9Nd9R66xW2X2QZBPXcZzJRwCJCNYCjS7XnmmGNwzvLyLx1D4Y7JAsiSFMdvhf4bveiodmdEm6M",
  "key14": "2ysz5XgNJEX9UmZjNVSLzym3MbCPwEiBZAVuGFd2jo7MEfSukNmdMpzfyRMALpwbW4ApUVCaRwre2FNjU3TQnFc6",
  "key15": "2PCobyrjFiSTYjbCpzj7HDe5fW4yTPiAZ9ads7AQZHDJKNoYoAGgq4nHm2LGgUnL3tU2UiVtYq5EbY7rAVcq81q6",
  "key16": "5nWpwcmGzWUxd35WqrwsKzbqZSVT8g2m3E3CCvfTcvG5ZTXKwAPk42bNW832wvwcDqcBTpptMbYJ2DkkuEt3VgH2",
  "key17": "5hMpwRxTmzjatNgiskXYFyDZwjDWXfBY5dZeUMZvwPssbp3KzBLzPa6tuGjGKwMR5PaxBxqGRNnW8KEt7ywHEvLU",
  "key18": "47nbVhWNvQYoVqtp8t8m7kDM2mGBYY4q7f7XMXLgvCGVcPyhbQtYgL3EWchgkpWDZ7e2m9CSr2qGLP4mRKCrjTdP",
  "key19": "4f7hcVpLYuaTcwsa9HfoMoi6K2wQozJ8SUCuKYJfG68mxdsC6ZNHNqm5esY8zKJBTVKYaLqB1pJU1CY7Pu47Y4fB",
  "key20": "4c51z2FurZPt996CoTSNbXdTae8npzPoQhrUsgJgYgDyi8AdjgtoeQyVxMHgw1oFofWhH5smKJtbEb5FnmRdyB4z",
  "key21": "5tzRwoEjmCtYKtCcHN7B7UNrYmbpoNEqVmhsTWnJ8rko3F8MgRjry9LQzJzVW37aqiFPdXpgBBGHKPE2kJ3y6Cr3",
  "key22": "4mK7GFxePg1WNb3c8QATcdWkwSuQGzFngiGp5X1TuQBhpB6WrbzDY54DrEX3wW6r3qD4Wre9tRWw7JJVkVnQtKRm",
  "key23": "36gSbqoWpJkcEkRnumyy3rKxP7Uy4Z5cjvuGNqJQzDmDSxRg5YXa8hXKFN6ZXRHUXQB7DKj2VwSfudG4nHakwuSV",
  "key24": "2kr18BpUJqqsNCDS1mfDcPjChTze6youg9usZvFJ6EmhkC8EERN6VPpmXHkn5PcLaJb75iXWhfF8Twfe3xKjh8US",
  "key25": "4akiaqZzP8pQbvxbkvzgiV2pETbnorQPbm1KFHt6KoBcVry5jrn7oCYZhCXtR5BZcEFi2xqVQfRtBhFLf39p1uwY",
  "key26": "3v1kJWQ84m6FpwqNxkeN9nbF6my2cDpoM4sBCunXs24tPsyRs7YzFfTxJ55PPZnNWRfwoDstHUhkMZjDYDNEZ3RD",
  "key27": "3zmpZb1HDW85YGpkVY5BDPFg13CYwmGPw9tZ4Hfhz7sC8ckbp1QbvfsJEc2GLjGUyudFQveurF65TgPtPdTmYUt9",
  "key28": "5eArN9TRvpcn6n7ZtewY3rsawrc4iqYkiXhVLYzVZkqfqAmYzK4twe4ggoJCv2RbysTpav6t1dHXsSMdYNuB3Hrt",
  "key29": "2RTy28Z5VguRiBiFXgJ3BjazLonut1weRD9qYsQTY6QWMh9eD3qXPWetorx17vHqEBJ71C6dW8k8h53eow6jUTZH"
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
