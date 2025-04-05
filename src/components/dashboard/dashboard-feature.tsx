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
    "3c6oLjZECg4jGUgbcDEp6x8VJt4zgJhYRGS3kq7xsvvAXmS6domvAFFm6HfmzrwLLwf6KX6z4iM3UrKMc42usUd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xz2rcW3wNm3LnLyoi9oi2zGCkkcgy2j1jaAK8XwL2p1ZctZMZG4TVwRkdxM9pt8RrQN8LQaigpAYWD6Chp4qCh3",
  "key1": "592tzy3F2Rgfq6RRQezotmDEByqBLfVuQzuMpkRfzhEFspUrAdJrwoJEkoWUNWeVHsdYSJysXXK2TUJLhPdwf68Y",
  "key2": "54mBbZy53PZqB5UEvNjFx2K5fhgnnuqZtByTZAt3c6TVCniQSbGSAZTroeiMhp5SS5dEFUWs3FZM5YnD1z3iaPQP",
  "key3": "QNwpJYP9FhuPyyctJaTKXYtWequohMzomLESDU5vTTRMP9jYYum6yNvaxJc4L9v9jByLg1w7nUQES8VDcZ3TFJR",
  "key4": "5D1QVXuCMhfab9AA6UArj9WtCThk8nLghxjskHtCmMrmPDvY5i2YSJ7vT3DKA5oM88zsEDDj3oLrG6ARpqXKbQgT",
  "key5": "3PGb7x38pLX2ePh7EHtT8kYwUrM8dtqudQfM211iiTeVtVwVgZYHrzuX9LzBDBbE26N1Z7Y6nmrEYC5NjYRTM2hG",
  "key6": "4skWdk6WfBCboAhNzFcDCUKHy8VoVvzraodJNxYWbf291mgfL3QZzHKm56UnSsQ836Cj3BGZcB7tNPgAPZoHbuYC",
  "key7": "4kFKKnsap9cpAXCb7QECdKFukd3s5Jhs6SobHgA7G1tzPM7Ao9MAhs8PLutLrCQRMPEPn7fetp6yqmF3HKrBSVF3",
  "key8": "2YcDNmcrPufgQos5hedMvCaMz67oa1hn1FCdgwCeTKV8P9CRUSsXgKxQMnP4Y6QckzaeefqBuPyBb8Fu3gSVri5U",
  "key9": "5aTsJRyUcjJuVRgMDiicR9rFq4g1TgFbwZJkSUjF18eqrdAckQgNNk5DxtgWsLsXj5gcXtRpke7HUiQ7tqFgURND",
  "key10": "2jV3YybrW2gXumuetGw6Gk3jXdkmvccwmqomvRvQxAXpojWVSxrrzaMiUH7RPpJy7kpz7DHBecRryjzm1Wuz2fDM",
  "key11": "2DsFTe8yBajqxtUbPRNc3UzfVVYRvXuvWSLbDwovEA2LUAkpsCZpTvBTMb7tc6rY5vrVuimKPSVSFDBzkzcRyjAa",
  "key12": "2dt8564b6zsGe5uSS2sYsx3ahJKzUS9G5grijmNAqJB75wm7956UHFHdXrf3w7RN7Nzp1XXNAFhG9VGZU4gBMEXb",
  "key13": "3Y9cp6vNztJWDiQ5uERqv8mFSETREUnVBa5CJpN8up2Adq5i9TAQHvxLnTjXFYnUEJwdG1SeEaxyyg7nH7mv1CNj",
  "key14": "4q69g8Zo8gEqKUdEC6dMkpQMRbqG7khur57VPksZgzy6XQjcXBggdhT5zhwkAzMLbLagJmPWu74fUWiCUnzBBZCY",
  "key15": "5R1mGRQtn5oc28QgXMdrcJeoK5zKzjweEcWUBLpkd2D8T33YpE4spGYKZgVeJ93eGPT6CwiuEsg9TDeo9iw1y7RC",
  "key16": "3Fa8sLjDeCXuyD2fiHRGQ28fnC63cX5XWcx6F7NnAkLobRTPk9KpXKu7qMSiqp5KhcCqW9nLcREwNu1MpXsUTPPU",
  "key17": "2yES7ZSRsQbJKYZpJr5jZQGqh5YM6NkRbZBKBUjLVjFdSTawua1uh6pQwWX2z9WkNJQs9ZvySksG5BidFNvu88XB",
  "key18": "GtHtsMppoMphhmQPMuwY17EsiNMV9sdALCrRtz5MkWC9dFzCNJXzdQLQzxWEwnYS6gY4rzWwZvYdQJH84xdcyrz",
  "key19": "2cHPgmj83C6rVgvzTcntBDFuVqs47H7gM16guY6Udv4ajQmLYFnbiFV3WvD2QJ8ER79TVUQ8614eYoTFiLu4VCzc",
  "key20": "3DR1ntuQHE1AQJ3bGqKuFb6KwBEozHpRsf4DCtvA2L2D93oqQ5pnmtyBhCirJdGLujp1FwBFN2oxG1BY1KwSXnUp",
  "key21": "5GetBnzKeic4spy2vTQDytRiKpxqmFDsZqJJCjbxee25uBxiiFdnf6jNuRb4We7ij8NmHDPBSCeidKE9HtZGJXTd",
  "key22": "coJnGqUBvGsKayYnXsSjXsPYvmMWvZJcp3WesazdjFDfU6gPiN9a1DSak4qbU8VMbWzJw8cFNmHQuPRBqPX5dv3",
  "key23": "MYtZ8DsqYgzs4gKd48CiQ7vMTybEet8zYtr9p9ubDQU2U7g3oB8qPoHL4zLUNg8Ztzz4Q2mixzi4styRekYVuHv",
  "key24": "5efygzzPXvvL5ugVYZRWZmahvA8kJmnAhP4wUW8BVBbVDjTBnwv4excSRV6vWoNM6XzGXxNB82dBAJJ3kE7G75nH",
  "key25": "2fQL3nYK1QCnPi1XpJNujjaETjEmLamsLGGrUVfFs75jyGdVkABv6LqkuywpZde9688bj1TgV7Fr4JkuKUYNumej",
  "key26": "ovv1gJboHmcMjL8BA1cHUVzfjUFr9iBiezHfDGy14a22bt7vy2bzHAstTDMPd6AAiR2NMvsAUFiZSTG16BA6mWa",
  "key27": "5NgzLfiaHTG9b5AkB51xoAWdn7ALkcqNmwmEpTYfGuodfsLNni7KZ7hQNjnUYDpF4cJoqcT6p76jKaNjEi5JZdCa",
  "key28": "3jYgFBL2E39HUDWmmPuathizX3BtXa4EA8h2DYXdgPn4CB7BZFtmkwio9Nd6FyajFahy8NDUn39FvAfJbqunuNLm"
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
