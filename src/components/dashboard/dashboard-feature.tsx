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
    "3BLvD3f7TgfMJyYr4KA1QNTQU9BZk2RSX8sd4VbwicRuyy4r48mg4UDxWQfq4ah7TPzP9HfGXLBRNLspdmcvzVhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xH3wQyPFoGQAaDDNE2XKYjYh39hGGd4B7ZTVPodQEsMvCCkF3YJHxyLGftLmqB4aBS6hhrZTZ8skeu2uiZ9saha",
  "key1": "uDWkHgkCMcTRCMb4sCH8pj1u2vmRnaofNhreg7z1cRvezaUNpKSecsvx3jJQnubDYAEhz669NvR6obMHS9k7bwu",
  "key2": "3px4qT1hTPiYWATUtuqXYvxpW2drdz1zkECMexzLuNmN7JuQ9ct95VZc914X7HBh4vE9aodyi9Yj5vx3i7eKgYw4",
  "key3": "3Lt5XgqkD15WuGoCnngMrtrE7KEqf9kaEqSXWfKcBCEqYFgaP6FnFwiJ6Lbk6CC7d9suhAhNtjdxJgX7ohjBFWQH",
  "key4": "53qjFzpLGgjM9mjMzZEoDLSuAoGhCPMEuDC7jkA6Sbpen39FzD9JA7SvzpC345JDHEQ4BgoBcy87aDzJe1Egzdhj",
  "key5": "4X9ZvsoJzbtPZ8rDrAbt44Uaa7QqmYAGfz1syKKTF5TxXxczwEpNujrGLqJSxMaUB3YNE7XNodLt1SKgZZB5kZDL",
  "key6": "rcVbDsknahVwEJqERq7FrnDrY1ieroSCQ8Fb5zNtW2HATSss4CTEZ3aGqcp1H8nsxTu8vY57AGW88DQzTj1TAVs",
  "key7": "1hVpqsVrhAk5RKwhewYKNGYBXNsmN9M8HVeVotGabHZRv9L4Sg9LtYqJ6Actq2hVnGPVK7hCuxfptAZgPM6jahv",
  "key8": "362uQNcWpF4yXUq9TFbm5maJG2jxbBviFTYHZzFWxZC7nRkeAcJePCyMaycwLz1WUdCLWJq2NQk5VJM4ppPvxUoa",
  "key9": "555NcZ6TkMYVw5LhWKMwiquX3xAAPs9feY4EoPidfu9Kwr1apMPNtykzSgNSqvpXmTvJGXp4nVoUhUrmpRsckA91",
  "key10": "21a6Njz9RmPqrvCeSwzWGG3fzyiCVB46puak5iczWgMMo7aEkTwc1squ95iNW6pVFXyV3DCWWdNoBbbPAawTMe1j",
  "key11": "2ECX4HzNugEQfxqGzFU6QB2Cxbi5Rr286L6E4y6PSHrrZ9gb3yNiXm5XUCLpARnMhE8SYona1EtMrWAGg4A4TXVS",
  "key12": "3BuVfnPEXSV5eNcDCQfTJK69TjaHcYUq6tSV8NiohqwrfvPx6bgwG4VsbnLrzpaoZjHmam8S6S9UBsVHRvaiJvHa",
  "key13": "2ECEVcdYbduvXe5cUNuX8wNAYbToV1YRmvsPGecmBjLYt7ESGgC2orio4wsP2J424dBtckLQEoayiuTMJR7e1psg",
  "key14": "4BcmpZZFYYWUBww4jjyuEhycpjFFfrpp3658yftb7WpXFXU7UZeSFdyuMKYDFffUqmcV52RRQnLujH5V3SGrsRRE",
  "key15": "5BHsURQ4cw6ynE6DSgVfHX7eXtuFHTCDzFaSvtJ7Xh1q51gzHkDyFrbSZG7febcPjfeBFeGF5pxhK2oojZ4DkNJe",
  "key16": "3HfzAFCzZqzpj7q7ZtC1zUWb9Lsx5hQHZ2L8SLzZYP9hpJ5RWBVax7mdAaUe25fPmRX9U3bta9nATHuxjTVJ9Sfi",
  "key17": "4miMP3uurYuNirhGfJBPQHdhy5hqgMeMMqsXAKoCHrXf7gf4WYY9PKuTMQfukhDh8B4mbyG6VQuUUqgTQHk6JyDy",
  "key18": "5brb7gvfbBA4jtKyHe36tXNi6GNs6kPqKrLVC4Bp6ddNfnZiMwAKGSQRdwkqki7p5NkLMq4cSfgnD1zAHC5dLQ3D",
  "key19": "3YjnTcWeBrBS5KWgz9nXN5pdmP59LRLhYXJY78hD9BrHhVcA6KaqdihJQfXVEd1n9mMBbFkmvkG4Mxrcnx85CNdL",
  "key20": "4sWtzsFbTbfDGEZZgaoTST7TZxzjbrUf3DEexbM47jiA91inztoaj42u5d5yHpA62npPdY2s7hi1iXTLSbre3cJm",
  "key21": "4m4tDpjRqN8RuUWiTJKphfQZRGRBDKRL4tENeiUw8a6DZPViSjc8pUWgmaJaT7USadevPfNezMAYYfZbXoCUgfE4",
  "key22": "5zXECYzgmEKEN6gTcYCP4mzr2YJps97tJqktoJheQuiMZjSHUH5emV2iS18XyPi4cEjTCDjLPZwott9fPvLFbHNq",
  "key23": "2HXNm4wmuAbC3qZneKvf8q7ynXEsvo2XWvzbkWV7Z1BKFo4fBgMhfWcKPYNLYfySkY9KnTG7Yij5ZSSae6ZbMZA6",
  "key24": "2yPbHWXP7ApKSJTMqYLE9SxQgSA2nT61EqkkNYx4T2vLK1yKojM3EXmjqrFbYSHejKjVGPAm9yYf1jhkh5WmKC7S"
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
