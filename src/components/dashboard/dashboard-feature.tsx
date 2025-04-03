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
    "4Uz9Kqi5XwpkifLW6hDvmjo3UtxE4ZApZ2t9dPitsZhhR1gQGYapJeL3VZvsz52Q3dDHRx1hooFCYzPKvmUMQ58j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXd2X3bhbjaKeazSkm7Whtf7gknQewF4HuHywHJDki9xm5xt4uqNX4YZDwm9RQVzzMKVSqJtn8txy3dAwEtwYY1",
  "key1": "4L9pcEw4pSYLf6L3DK19Z7t51gaZwmPeEbsdMNm9rc1JCe7TBt89nF3NpAc4Y9RchLZm432MY6ddEfgWz1SJpX7n",
  "key2": "2KM597UTCa3t1NoW3dYdUkiNsREr9RdZzPiBHFgMJutpF6yHQEVME29rSV2dqrqGgYJf1d3qBSiqSPi4F2F8S2gv",
  "key3": "3eEqDKANCwwfo1jHM1ab8vmGATPXeh2KNv7PZGTAX3GqdjNRSDzLHCPHVrt7WUaqS3HvU1HjP38q19DAph7P4tAJ",
  "key4": "3tz8FrLFMDrovM2BHHjHxLLU19d88VjXkSmDUQVi6bvzUKtkM8L3Q8gsTfsBs7KxinBcMjRX6GyWLU6hLHWvgALE",
  "key5": "S5VcGnrhjMFySMMUZemFNhziae4kEVepkqX8M5TU42F8uVeeHU92CZsxRasxRsCXBvYuGTAgFB2K5sYAeoANkbB",
  "key6": "CUW8mU5wBe2gUQe3DsL7EF1Dm4JQn6RGU3SGWkcFEsfd6GxNPmgrVKvTH58sBXsrHX2CyqBppW3PkB3gZNbsS6L",
  "key7": "2sAzktfntXhRNPyN4RH2pjEvCaWBcNHb3gdWaWB1ojLq9bbWqy9fpYagJqo657FeHcA7MgwDre5yZ8ruB1YLDNAj",
  "key8": "249jo4mmm2HAVjiiWQxJ888U1pPwN6uwPpGwzQKfskr89m243WgNqHX8jz2DZWNWBXhxi6THc4TeSzV6W8cZv7cz",
  "key9": "2VTTUu9DCjWZtKJDhxGZbzC883QQS3v1H4A31yaY7D8Ksczwp8Dw38NyX6Y6yPfgpgsFSQ1hWP3U2j8wpp4RLEAF",
  "key10": "kTzHNUeRwLEfHLdRZFYjxYtDEcJqEcj1ErC1d2rR7Qw8CSY2k1P4nY6ZW9GGMFLzAzLZrhAMECUrTzX1mErBuWQ",
  "key11": "245heDZh8cG1WWkxK7PhJU2ZxpevTEN4tEw6bo84AFS6UGU9n7npQNdBh2J5AGdjQAnCfoVmxtngDgZzTCKnQac4",
  "key12": "S6izAqhMeoYqNxvVWfkUk8mTJ6bULDSZBfztAwY9PnbcjsNbDmGHDhKCXR4dDoxVuYyFQBdNwzU6GWfEm1L453j",
  "key13": "3Ui6obHmYg3Qww4C7QcNdmMSKQdp7UffUmRxMCnGzJdee7QG1xqSYHgvnG37YLMQDq8o1U4FVKjSQ85QH594geYK",
  "key14": "CVR7TsZeW1wZZQnFr3pFrRr3Vifesp7FKhBTFme4iRxwnHZtYSsaAdUy29FEFya5mVBEdJRtPe66g32jRqMuW8a",
  "key15": "31XiB4eANvsuYG3feUVjQdkSdqhgxrcQcx54cMouFbYgQp9m4BecF4amVqcaVZ2f7UhD3SKnc2z3QcZkfAJoNf7t",
  "key16": "3D4rSe2cTvL5tpx7WDtGvXxp4oGYHpDXVAsELPp6saKzZrcBbkYCcpULQsaLrYUE88gBqrkuDvYSNS6Rzh38T95f",
  "key17": "65Eg7hCDn5vK7XMwgT7GwHNhqHRD3n8UtcvVnU6LY4UwURKcdGC3bvZ6NXfkBTXov6qU8ofkiHQ1PPGbHPDstF15",
  "key18": "2NjHPw2V5r31X7k1TWLdB2Dc34YLzCMYTxYfr5Rcb5iYiU9gbN71FjJd6d6aUYnDedqVEhdhLuqQ91o1Tmhm9SnW",
  "key19": "8H5XqFo478ZEi5u4iu3TgnbZQsmgE9St1gMXLmkX3DzVLVskrEsXy4d1pPM1V1fhNfSS8jmt8StNjwokWDyEW93",
  "key20": "4ZVrkjGdyxCzTKfT6XgcPP9JnMHDz9X39U5xbfyJfB9ng3sKEJSfoG8CKpFqDjBuFz41q4nVoyZtLyt2cXxyPwoa",
  "key21": "311MnQZAhZbLuTPRes8Y9wXnuihN5n6FsGd6kBGy1c6zRQHJVJ2hCpk8imWWoPCtwKudbFYtVvXBggBSKiBCT6ve",
  "key22": "4DPfrqCdabPJ6J8e1chuMWLyD5DcB7crZdUzxpiZCzwyTSb3ePVLNcKmzXnwaiD36BwRF9QWQXk6SXBey4jVssA6",
  "key23": "53otjtveUk95mMo8cupmhpS7uywBtnqVDdwfsf4UfWQuK7Qntg8WNRKrJeqAd9q5ZVu8CYdTJ9kBV3UXXgdCcnXM",
  "key24": "51rfhwVAgwobxYtUvap9i87mxiCZHdc1ryyKUz7gw5Y4z6k7FHR4d37WrUUZgiBrN4Eq9jiYfSJu2Nwp3mxQj1e2"
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
