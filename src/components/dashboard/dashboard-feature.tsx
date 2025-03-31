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
    "4YLoNW91a3KguFzUAVGxkqrZdrQTeXhmn4HcYrkpzPqt2ckDSX2BDEpxosho2YF9s2sUdPGguiQz3cFwnbfSyPdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkdeeFtgy1MJgVuB5webTqtTgDJAoBsekLvU5rxcmmyo44EpyRjYqUERSjvt8khjngV2spQaZQz51JpHqkAVUS2",
  "key1": "2vYo2wgP8TFs15PVy4ExYN1RmBsGV2Vs63c3PGAfRKC8w5ePQmXyMnFP6JYYChLfdcsm3ysZDdcRTVnyyn9u9SGd",
  "key2": "46KhNfLePynTR6U3VTTFcc9ED3V6MVvjcVBhmKMkRsvHMVeJcUn7vA28E9w17n8UYSTXP9T7hijjYwbkoSg2dxjj",
  "key3": "5schJd2XYxZ6AJL3AyWz2XbK8FD882j7NPjAmGuP7FNKNLR2nJZxUGEvfLYWGkqhy8gRtMfWPcb4HC4pZxAimsZR",
  "key4": "4HGhXqYvvJp6MWfDcXn8UKwac3XGNC5x4EApAVx3ATYP4fxot6SdsqXa9aVXV9NzTUK4MyMvsA2Dqjh81kWcBdnd",
  "key5": "L9Pm4Lg3yxkpZzrsx8Gw88wU1AVQE7TU8fdJeM9BHDT5k36LUCUpNkmrizmJv5qDuAJ9dCANffAt2ZGqPKyjfoN",
  "key6": "2rHcJzgKtv7XHLu2YGmqtVuinMv82nZvGzPgrqsoudpEu2C9KYphiuvr4Ut79823HNKzUV5sVswmex6nKMCz56ys",
  "key7": "3oqsPrkZ2xXxTidgDKsZD2K7AU2NfXiRAw9acrTgBsZt8etytFXbbJsfb7cCeu3Mj5WNrghmTawcDiP3gHo3czpV",
  "key8": "2EUjWdZ9aPYM3ftwBhSJB7DQykF93Q7SDyfsP3Hvji9eQ57XWwPJEUQFLhgc7Fc525S6qHfwFdRTqPbiqQCKd33E",
  "key9": "2hJRVKgJWEHJVFgoJFXkJw726VmMqrZG1V987M4oST8EKjZvju871Aotpab8aYUsVxV9GRBU5vU9NfbSKmank5U8",
  "key10": "NLzByKwQqtSbjzQpQVGdxWXkQSXvSXGsr1SDqKBZafbUqXYaxbxr8pqNEe8cF4mdNeTgbNTRcsXEXRd4BKgwiMT",
  "key11": "4epsWfWYVntTrtXCnd9bSJDJkEhzok8F12i8JDy8SufwYd7USLBVQVXdQbt7D8mC48mmJ7KKRy6cheWoQSHrRqb4",
  "key12": "3KAz91UzcYsrBVRQqFvpTuKrQkdQNaowGoZfpCQDuUXTcSvyQqUqvRidcGyiKD6uKbSu83DfKSB79KDERMXZr8An",
  "key13": "4iSTWTW37r3hQvfJ6RFQwh8kjTyschHVkTzsA4QDjgU6vMoEcCSjAxYwTn7P7A9JF4EuM3VHy37rZskANnYSyy1P",
  "key14": "661pgrbj5RDR9UZVgf6MFvDiUjLu5qn5BZ6YL5FsQ3MsxXAevqbzdfaao74vub3ykwuLGqGBwZbiD2if6rGzmuX9",
  "key15": "4W1TJzAZFhbxsJerUeq3SHTPFqVEXNQodYb13ZdiRLvHgkVM8LMBntWw6bCQ29DXYwjoaabdoWcunXorn5T2D61d",
  "key16": "3u985CprmS6kpMCkoJibPRJE1dMpwRVjHzetXfJ7T9a6ZrK8bPJfj71wrUSKFG49HV5NYgtVCsJ7df8VnzQoJpze",
  "key17": "2TcudhopYN5EpShc4SGyA9Pxffz4xqUiWCAsXbfjgqvQL27o26TFUkdnpC7xWLFjVnphmTLLcfRMeNn7GX5XugWR",
  "key18": "2rMosvpon5GFKgmVffCM3KkiBJ3rGPWpECERtxjRpLfGW8E6sASMAG6h6Qn494SUxKtWLqjnAVUhfGNiDi26mobd",
  "key19": "2E1T5x7xaZABjYmzZky7TNdLVFPAtmma7Vs8ynR8BBP25D3ntmFuYHbP4FPioLrwqFEL8vBqS3Dy1cd1ATLKtWYo",
  "key20": "AiibSZKgRvHkxiVnQ4FBEqvPaJDAdniKTvc3wZNcEsQBDWwWB5kMr9jdni5g2FY2KWvkEZAbsW3YrdA95u1EJV1",
  "key21": "4BCBoUmZWM9wpZif7sTMLjrtT5tWBY97VLYoZLKQSdSmnPp2H3KVCeFm2ERKbQH6vxjedWUjJYYBtBWvQ9Fb72J3",
  "key22": "5UzTqhovPGXc9b5Pt32eW4Qm5LZg2PAZxNWVkT6o64kWMF5iX42BGuSXMrwqeXoo45BvD1ewT7JbBX6Wcw8duMXL",
  "key23": "5RzKEa5TabDoAZ3dWbewoJoDep2b9ASfvWgKNEYydkxqa12vf1r881LjajmvWuKS9evGWKvVogEZ6QpkyHbZHXes",
  "key24": "2SUA6DSbudcqovJtquLb9tGQ62G6NXZzcC6frVoeze5vERCcZuZPcZpzsn96ThBJu3QbaHum9E1hGbjN2G22tK4T",
  "key25": "3v1pUGVJP4NAQNd5WDbh5zUgAqT3EzRy5tpcTzMX8gK79h5SpDQhgFwg2a5qk1pHCbD9YDh9Eb3jo1apwz9rFgdk",
  "key26": "5GwGMujC2Cfb94DnZJ2SCQtoPtyQJe33VvqiZywxvmCKbNqnYdxi4mDLqJExP5EareKb9oqBohU2mda7D4tiNZvB",
  "key27": "LX33adzo49X2Myb3WJbKZEtAuPwbZXEPtjymp5DvjhwwbYvtBcPon8zypqHxvkfS74yYfG69yG51f4ThhbRoPj2",
  "key28": "26jexCYpTf7ZgQXXUR2mEH2pA8599iQuG4Ev9kD91fGRvsUnXaqwrEwb67tQxuH91bCy1KDWTgVrmybKLwtLX7yu"
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
