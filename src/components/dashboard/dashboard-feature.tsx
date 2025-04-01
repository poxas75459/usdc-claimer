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
    "3SNAnkEHy7FgRBsABACc9WncsWhmYsF97qTWuQJsYS71iSW7Z7aXMD1z4dMqwrgUntx1SEQywSRFXdaQzRpJyFAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVoCqwqLmsQzKyhRZ5FuNDLT9McN18ZXEJY7An5WPAZ7pLh4emHfjWwK8i7PsAG4nSrHuan9T1DoBA6zEwUFr5P",
  "key1": "3LoYdWx4DJmJW8qaw8YZKi9pYsrEGFoHCLT1jAiPZ5CQbze2UpPqE7TYjNmC2P6YHvrUFNixfqLy7PM4WmfRBWgF",
  "key2": "ttmgsWgYkY9cX8SE3YCKmc129e55iWVsaDtFpHSV6sGi2m1SZ2pi6xftHXJJkeXpiPEFj979kWnW5JpXigxHgKq",
  "key3": "szRt4LfZxLgVzZy97skLSHispZQUoTg5vsNTY2Yz2EkS2Ama4BtvKr5JCyQhv6PvpmKmBFkPug1ri3HqnP6iSaD",
  "key4": "5sYqmCjZAvrBe4PA7nMUrmzU2MjTE2PC1dgkeCvXm6Zgm5AJ8pyNuFsojpfqF8YEGmBKFnUzJGJwAq198A85NCMT",
  "key5": "3LauTEiURscPPoYTBz1WTsEx89uNtD8gMiEvMB1AvSXAuLxfnTJh57wC4j1D7AnBLzGqZgGZh3LcwVZTTkUGqiq",
  "key6": "2tovzfdC1yFmuCk4BHqPbu55enNSmqQ9sJBdp3PnNRfHx1xVbUji7dqqYmjCC1q9VKMGbbU8PpZtBAsBDgzQdEHJ",
  "key7": "448CsqbTU5cShxLjssuzAzcu8b7ir2WTZpBfbvSBbkaf3SVYvjuKtNhbHM8JN1pMByvLGqvHU4ZoZMdfkY7hkNUn",
  "key8": "vrGPk429F4zskNoFodKBGzsDQEu45U9aBso5A8WAp9ubzR4xYtex9naMVNCpd6H2EvkHhYBQSNbJkifJrNnpPeW",
  "key9": "4KkSM4m5YrdfmwKVUfsW14pumB38bqb5FuKtxHE2Ac5UqQq9mVgZDi7fUWEv4XC2WkKsQQYpA1ue3wjNfN2uPV2S",
  "key10": "r5VQfEX6ihQs8kMnUwZksDaJ7xBYfU4M5LTbrk4zkJidrEvuAZRZzd8RZjXuNMggWstpjNUHfSFHsUmfmjWSsCR",
  "key11": "4JhqreeCpCKsBfc6beQAdS5jwsqW5eVSRE4a9a28U2ty8WSj98SMSzgsuF9GzUHajr1uz5gyULAfYQqxzYm38Xtq",
  "key12": "4yomG55oy7ATH6kwxJ7ALRvpgSfsAmoCsDL6SQg7P6u9HybFyvBzuZxjF8bNyfLhHDLvPcpJcoVeWLqifuohA1s3",
  "key13": "2NfSsSHvQG6GbV7U9Pq9UX3EnaiZPX3nTyg257Hh4nm3gW1bRXNwnu2ViGWZcYstED3yupfihn8nuRtbjMgZnHqP",
  "key14": "5GtmDxPafErM7hG6iQFX5frrEqduLxH8Q9GNjcKBAvnK9oJEPuoTzTA54SBhA1YV6xvgbqR8C1igHCRrxs2Z5Kur",
  "key15": "2r9eRqKPdExZXFNStNSVqzrpv1SmfM3sWywjQ4Z7P3NS9akgburdtcNty97s3Bqssxf6UgNy7JCetAv9uuKSj6W9",
  "key16": "4ia98kSmGSfbfsvTyMHK9uiNorKDMW47uKQBxCUUz7xgouFAEskRAz9L855z5sxqJRzrtPAcg1xqfCngo7QAfEa7",
  "key17": "Brr9GpLpV7j3sZKFa86B9jDqkDBUxbJ4CU7JZSuMagGmj2FiCAy9wTSYvwPTeqfvd5rKXBVxPHYJkcAc13rEFV3",
  "key18": "2pbvqDo13rcXy1mWHUAmUxdWpNWFSmk7D4JDTV2beXMNeB8gL3L2u1YV4RmU91iF45shwy7XCJ6jM7VF2X5tRzXX",
  "key19": "5uBN6Dm7GMfHXq6QSWPBcUomUwkQt7sZtiqdZ3hAsct6Hzg7m4HPKy1rg4xGBPYnqr2Vgtb5Y8P7E3o5Rhzej8cn",
  "key20": "5K5o422TvbacZbNfDkswwwaEdBJgQpcihgXRuFC4vFCYHUSXC1viUsHAjtFBNdo8csSXdhBDAzF9NKB3cuchNMwt",
  "key21": "5eNMwPdyRQ8dX97zu9QvzEwE6HsBn7ih6cRJL9x5SweTNQm5H6QgZMGvc6oBmq678TPju9QcGDkj7wnQJV1AdDBm",
  "key22": "4GpYRQM97LXb8BWGSgaD3YGxveMXripYisw9uWjkV2a8GH6ipeqkmsRzx3wQ7ndu7FWbJPCczWvTXA1rhj1RJqD6",
  "key23": "4SKrXYZ31Zyw992YLaB88ogmSFkRvm4MZtjmFfXsMvuqPywTxCEpBuExrCty9xoJo8mGqtEpoqJRbaHZb1zfBQUJ",
  "key24": "3txg2mpQPSsg9rq9dD13kwKeq3rE23YAMb3Dy3mKNpeUE4aZUv1LkGb4TyF89FNpHCwjQFVUxR6pSuoq1DJXGYRY"
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
