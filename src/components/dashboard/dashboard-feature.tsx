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
    "5Mr3z9MoS2EvL5ciSFHHQ9J1uvPCPVVL9obTLg5ZoxLkz6GQYUGr8zqBaVa15196mJofqNkQt2JxUhLMdiTHuM2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEemRbmSyxMv8V4pB4XXigvBDuGpfBydZQuTN3qzy5zjqDT9Vc5fanBCYHES8b1pprtHWVn8Et2jMo4EG9yW7PT",
  "key1": "2pokebyg3YuEkDMhSsdLYg1jFZ1qT2r4neQE5xnCsWhXbnT8GP5WjFPbGaE9ywsWq9VpSLQuSnFeDnWjXJqMPgjv",
  "key2": "5MSfHrdWcMZqVmmoYkJRTniKosN39De5GBZ1drozQXJ9V45dorWz6mTCpAcH33srV54d4idLBgVe46oc3StxzMsW",
  "key3": "4V53X497G3Phk7uUUdmkPsvnLSMmDGnmwAMY4DCmzQgAw3CDgxyDtQjoPQnqZJVdDgboGHHQqbC1ntfv1bAV2Hdm",
  "key4": "2nej9DYXpEQ5Wsn23G5DR5eXoq7nTjYNj8akkBkNbLZqgwLkg23XjpjYobbsgFqoqJY4XuShssDjKbLrtSW6jiu2",
  "key5": "QhsaA7NQZL54Gku4t8ikPx9PL6TLNSsLQDmgWeqvwTqoCbCCB81zuvbSWWnkjgvZ5AuowwVANvQnPN1oQG19duL",
  "key6": "QiarQXnUmTTcFkLJmfrN8hcLjyzYTw6NkTuYcibHE4UHLV23nLuXFYbQCNYfvzR39mdqGL9zMYe25j6wMr9eGX4",
  "key7": "3jY9n3PZVmr3oXDDNuDJRNMtQ7bjvAwMU1JrM8MW7pRnhf3W5hhKAWY37zpsdxXM6XnzPBpCnoLYQdbaWmCk9zjr",
  "key8": "33PKLKzGxynthfBGNqnXLXcSMNHUJFS8mvRUFdp4kGX5TcT77RtQtfi3C6zarbkhg4b3wzZ4oWb9W5wcbfwNreLP",
  "key9": "5wGeCrDsb7DKLZA3w49m1xMqKGnAeoezLTQpQNmi5DQC71eUzYok19EVzm1GqG3BF7NfKwMmRTHE6N7EVgEupP2H",
  "key10": "5eNXx3BYyBkiQ2mvWNQodtHscXMCDsYVk84Uz8ZLzRxgAjQ43kGViLt7hXjqJTxN5to3bVCZLtwcwYBa9UTVUpCU",
  "key11": "U4GDsN7FxqvCyKM4Uq44qsvbYTe7T3HsAS8ziGi8u8Fvk1JWGKgvqDePnAyR7ToKQcRQbZAGKd57DnCsjqDU68e",
  "key12": "5L6b4RQ922ki5SGJVsny9qYBDGVni8osgkaz4ETdiHPVE3SBwxsuBXNJTf2CTC7fewfH1oXWtvifeixeo16hHyc3",
  "key13": "AuaSyJMfWrgEBV5UpDmQJBkmM8DfEwYSW8C6g78C3QVCifGLWM4W2WrSCQomeejdhoz6TghCMnWE8zvAEWrDhX9",
  "key14": "2M3WeoS5pFvFAydg7jujNNBMGkjEUwzj1gkeQNvwaAFgDVJWf4MHByFvyt8nKDBmLnGvfLkESsG5E5uqMJNhwQRf",
  "key15": "beCrJ5rdWtJokJ79WrE7umnEWUAxXaBLFBk86jokxBFi6pUww5AcCqirsFEUYb5WG7jgmpWAP54X4pz5MzqWdhF",
  "key16": "3sB7PtmvVQa2Td66WW4B8J25Bj2sCSRpkn2Wtg5Z62YSVrYPaNgAjpNdT5whShWo96yo7Ye1pakVVbW685gFqcWg",
  "key17": "3mB3psro5Frv9PUWWaL4RajyezP1phGSHgJ6SZCbx6m68ca4mgUmMUZXoVkW5R6VhDy1zG7H1JX2dELav8JRZE7D",
  "key18": "4smSRKNk2ahM7zJTwCeLBh8UufSSQU2VwCC7RYwTgJELmJXiA5qaDzrLsarcYxhFiDfut2SqEW9BmpnsW1Hxwhbb",
  "key19": "3TJ8Nqb2vTM9aDC7wTeaDkhPfbRvybLba63d53qk59E8ViwzoJeCqkEqR94aSt8uuVKVZUVsYd1HRF1nETxPnzXZ",
  "key20": "4juXUdP7FxdV3tRqMXVprpUf1Uaa2WvJHWovYcMSqXvub1sE6bF4GVFUQmmD6VLQEv9LLPBqhxRnwLBVhJrQVv1Q",
  "key21": "P6ZxNeyxa1tvWx4uQ8FGTrBg24Z1BHxgFWaxKMdW6M2nDHba32uJh6gb31VXhhNpmhES3Y3EKxqA6kFizwr9Udh",
  "key22": "3BNBmTUHKFscGDBdjUfPwgHyChwHH5pYAZVttP3TqvsunU21un9vbEGRjdh7Xmej8aCgnrFhM9FQ6Sxrukix9Z4N",
  "key23": "5spu2PV2JNicNtDaDDJGjv6nU6YXmF4PUUbNMTMCaFexuSP4txM3TzKD4W5iQSw5frPR2QrY7WnFY3w7T5ZSLNNm",
  "key24": "jTGsDf4v6QcveRg2e5uonWvJoDfGgHAru1b9KBtXMtdXzGE8jdAW9h2ao223899GansnKnNvBzh3onv4ecch9WJ",
  "key25": "3bmJL37t7iBWzkNaSJWXJbrYRyBfYNzTSM1X9vJ586Kkoee2BqzeH9ivZsPAZXTWXPKC3JRavUFgKP4Su5B1n896",
  "key26": "2YWeaEagczd2N47wzAXG52QkeedhuVkuFazKXEod1bdd6eQqK3iBkuQoWWCBQyoxUDxWKBgRETpB7Z4oBNHhjYcb",
  "key27": "Q4jUknhZ3KAbLiZE59fpP7EuPotYogLwe58VfLhPeKKF5nMvUMbGcSn9ce5zEucPgfm4BnUNTaBTCkSwWs9YWPX"
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
