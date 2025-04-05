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
    "TXzTHfUYavsyEBsJr2SENpzS4kAaRYPcXjBNqrXrdzmTvs57xsTSA1mKyx6Hwa384cXcLqwhsLSnUYSXkAbHXLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRd61zdoZ3tyy61k6ijer7uvqyjcy8jk6SuaMd5a9j6KcJ2vjvNxVktS9NpkZDE3gikfG3EQ3j28UA2FaZtHXkH",
  "key1": "3Rj1g3wv9egZpsb9vBir2VrnU826VqF5N82MCzLRT7ci2kZD6kVEiV7Qsd9g9JNB6uMzwqHvffMSEntkXcCwXNxv",
  "key2": "5wG9Nto863SQwBMXzxTzoAzkWfnh9S5azDuxDSPKhyDx1n23hmuP9JYrxcksV1YkD12EwPqi9jcLcBFPfqPgTFWX",
  "key3": "1tWzDdqT7UU6Xp1D1j9XmdeaqK3Wn83WfxCoA8hVj3wBYp59XiEzPFcRg1rFRuH4vzQUyKUt6jXBqn9qQeJ1Jci",
  "key4": "4HZ2qWizxXp8ihNcmrbKXTe5LWh7o2R5h3Mvg41kkVM7HdwmZz383QDv6DYnk5XZq5jSgMxth3MhSWoE2JpLcEsr",
  "key5": "5M4txAs9AVTMtMDmgoVstT9jbMzbfx6AfMNCWLB33zsykRQTqeLskRXMH36CtL1jvknKKaYvQ5KWWCKcDGXJ1fD1",
  "key6": "5qpdLjxrDSFz8FSTVt5UfDqj9iCbisESPsXCn9ynNPvbxkNgxRZCvgvP3TS1Kkss7W5FJE675seYeWAhqvv5Cw9",
  "key7": "4wxw9wKsvREZKJxEEJF4Xz3FixLfTNggRkpLTcz7K4XLzf1du1MsQTS35wTjcwiFhBXViMDjuscEuT6NxKvxR3aJ",
  "key8": "2BAhpVc8niLxt3xkS5J2FzRo2FD2nveGt1reUmziVPvLJiD4AwU8aKCVEG4JBav3JSS53ZmRCeuZ4x5cEroXrSuF",
  "key9": "2swbE5bijVFFiQnfDZdu13SLpewnVAtwtgZgseRu4EYyPw56uGRuHyuFF14RYk1vRxtkeQDTbGqNq5JanWKVyaFZ",
  "key10": "FX2tKa8ZHmCKRrL6uDaMWbnYgAstJmvrYMxAhnvj1EYycHzXYskjMp5A7NQ9GBCWxCNhLu4DUwvWhCxYehZqLV9",
  "key11": "5QfhBKzxkenV38pFTXomvEMVZUYPTFw72JCs5SoU4K3mokJJCGwngN2TeM1tkzzzp9QSYXg8fDMFirgcRGfy1A1B",
  "key12": "2t2fS4N4eKzJnpvdavFHYZSfHeqs7BptRTxHL5bT1osVHxwfzz8JnZoeHzufP1kyFbxW3SPxFnDFm1wp2Ydw8Hb4",
  "key13": "QZ3ZkcNRBTg8RXiGHfa328uH1rHzn7MgSdY41r5YaoLX6BtzYLUWs1cPjmEMxF85RhR6jH7JRaSV6rwbCtHdig9",
  "key14": "5M5WszkcXrmroogVfPY6VnrC9n4wyy8mrPvDYUJrpTaKjJvhyxECz8C5rSAStR4AC7q164Hd3NPUPNXMot41hjcQ",
  "key15": "4pFz1YZ81vWaYQEnUAXRysgVy62pKd4HCJEgZrGf5YVKaPRqz85PRzoLB5bZ5NvqPXwggvzCtRLbT82gWvta9jUt",
  "key16": "A3WvX9ihe2sSTn1VJofvBGJ9P8yxYyVyp3MHDvZtmLdZiL5DnxYATndkcfY2ZPMi5kUxk8CvJrQK6xeBM4c7gM3",
  "key17": "5YTDwLo2Mzr3uT9HFakKeA8Hv9HP7Ld8rqh9bgGk2gNd9tcEXHhALSdCw5qhPXAGXRVjUMeKRZGHZ1Z2b6X8o7DX",
  "key18": "65a91TB6Pb33bYY51MmEN9MsDNGXaQXvWTYmjSwLCD3XU38NmwJ41JCyQjd92zFfV7PDKgozED2R7aWPac46ks3f",
  "key19": "4SWYVwB8FUNk5DvZiVGfdx8peDL7uiYRde5aLD6xDCRowtdKiKBT3sUykDcmprp3Xe2aA76YAghGWVchNvhxV872",
  "key20": "g4WSKCaTcFb2NMjN57HmJb5Tnr8ywEtvfmgGL3j3dnXZngshQyhov5cx5GiEA7w4a1m8qxAgpnT1BuJWFhzcWxo",
  "key21": "5S9tHzHy1SUu7AvJw2WCrXzpaR43JFpcekkALjDyfQak6UKZwFAjDTqyhySyq7Zn4YA8aZoqVRfWsBARKrrGge8h",
  "key22": "2vnKEHZvyLYRoHAgHM45CF7wg3yRMyZvPYx3REuV7pkPjHDyQC2NHTs17BUw5iQmiBiRQqWQbVy88s7ATYD4eGZP",
  "key23": "2Zf3czyv27zbumpDRRvbHMy4tkXRVBmvBfSDuBr3rRS6yVc9E3HMdVU45KsXYZeDWSPkoPd8f6HML56QkbTaKycb",
  "key24": "4ADvg5rxivFnXuWM5gr1muVJVJnyX9c8gPuV6LMY4RaUfDD8KoRBJMU1PsjFgK4UhverUYJ7NcW9dgfeyrH4M3eU",
  "key25": "568AoTva6AD2fTtFk3LyiJqg8G2ZBuQhXcyCwDVhoFMSERHxmvkJ2h51gL23xkmVoHHyMunJYC9HVZLbL6bqAPri"
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
