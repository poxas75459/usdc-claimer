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
    "5LgmcpfmDWrhc6xwS8B54x5hty2cqMwA5ua8U81oExP1Xm3by9R48ArKi2FtrjjzsbSGtt7yZtCReEwboNpPzVau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihMwggYvMqrxZ2AnUM8vzWbZwMMrxzieKM8zZqk5MmgDHfpDEFBAr2SFYm5mAjacszDnfLKexMLRufi1uAoYbJK",
  "key1": "4KHvcFEPwa9Ymz9h5iroPJwv3Sn5tYLEbqsKmRz1qj6A29Zas8LMJ34wYRmJ2Bb24M6uMtn6bB6zMapMuitxn2eF",
  "key2": "3hgX9SKdxGZtDzr7dLFZuNEzhitqfhfNzVtGdeiizMz9Jp8Xug4HMYo6iDK5iD5YgVEAs7VtkiyJtbTmCyXQ61A5",
  "key3": "48aKHC2kZLUwgzPRrHsLvuokwkTHW7pK2Bq4LMz892xoVrUCo5LAoASCg1TzM68gShu2r6x3sEcXSnR7exWxkebc",
  "key4": "314bSwdXS7BnmZsdttAHq2sUtevVmJiBR3y1wGmrrhaVPNAFUvE8HW4F6v6bonrYgmvikXWSJyGRmC3VQ5Gu6Spu",
  "key5": "2nMziDAtiXF4T8wDJUMTFavckx1MqbT44fM9gZ8Yfq5k59B3tN2JVSLc3hXNsYiByPcCcpJCDzJFR2SBpqX7DBv5",
  "key6": "4b2wmaashUqhPAfatSZ9iVzMkhcmYRqANFp19BMiNVcxJW7xEuWYT6tqD9dRoXZenFi2NE6rtcZwWKGt8V8A2Fyf",
  "key7": "5YYepk6V8YugtXNS1KiynJXL6946Q9YcrqKgqdt65gbnvZxk2LXSmWPmB8bFM6quTAHLTuuH5XyNmqtgd1dAzC3Y",
  "key8": "XDrFR5dJqLyrHYLsxH9zZ9sHe4U95hpW2DmXJBrwkjUpmw1ZEodBHm9E93DRccoiv8ysHxjhMhE3YpxCAXb5CVf",
  "key9": "5pURMZZ8v5NWfgRti6ney34D6takJhBR49WNdnMv9agf1uMaSqKwBqBfEsNHHmm441HHdgCMJ8kscGoCyWBV9v5q",
  "key10": "KFfKPu569nCqWtMf5SrkXaq63vnsmwCYBYe4pwjHGqHKfaNzBXSV97pr8CWMphguifHXH4heEz1QmWWpGEqTFn5",
  "key11": "3YaeaLoWDFZRUb5zvCGnkuTYVZBaSyuaeiEMvKSNKHggtd4AXcBcKT4mtTWa2cNCd4UxZ6zjDCmJNAwD8QtB5uey",
  "key12": "2F7s2kiSvhKGfgjxk6oMMkXPZSL1GwizcQLS8zH18f67rhxggdFpLbBH3xeiLwV7RUTBQU9AaMfWJaSXWfgrQpSi",
  "key13": "2tb2BsxrhzGUfG7zKBxVrra6QRiUgpwy5k94m5NyjiMD1jyLak2Xn8jrvgdrzqWeLX26aHXBFnsxovai2K7Pgysr",
  "key14": "5ZdoDBoxEX2pQMr5PTeTH7enqFGWZGNWUw7R5xPkh3iEJvCZLP9KUjHefxuXqDzUHUMCRSBe4FqsKX1nohda7W6w",
  "key15": "3inGFb9zpPtQTnaunPjNrAVTMVHsBfJJBzbZtN1D9cbfyqkPyttxykegr2f4UdCuQWYLKPRKmMeeQ3twEkSvKEzV",
  "key16": "WhVr8D9ucVsxe9M1fWTXzTPW7VEJenHhK6DRNx7NnGMKeLuiCyUsVezF6gw54FPkY3b4eVD5Wm7Hf6s4Yca4s72",
  "key17": "2hMFqzf6i1pbgq33V2knG5eKXzpAqhG1Kcuw7V6Zsw22f6vqnEKgaTjUWgVfwm1Ge81tJ8uCDtMix7bPBmRFr5hh",
  "key18": "28jSkqn2qr1dvzUqA3EXN6TNP2D1n15PV6SwJh7yB8fg3rsgnPLCQnJVSqGzCEJHU1HXCyJF9Xb5TFpZU87Qkr3P",
  "key19": "3xHN4AJmn34YH2hEh6NLTRKFqPVuCKVgDqBkMp1S43Jp2X4RHmE57Vt375oRDf22BRZPaovc6NW6hTbDtkETA5Ss",
  "key20": "2V2A2LhG1NEq3euj6pBVVqGNRzwjQdBsJYy2rW7cwHguiWTMBkg5jrpBEHpTPbxhvYLxXogKFEHKfkpi9hnMe1aW",
  "key21": "3SNpypXj73Mzcw9m53dXxK5HJZX56PtdZjqVKBdj7UKbtmYJ3zuUX693wb2R3VwJJYBFbxD8UhH7YwmKzPSh1XJ6",
  "key22": "3Nj2v6NaNssBB7mL9Yx1MNSRXzFYc7Neh91Am81RFXDH6tXPXpWT1gzhdc5qDsRC2igiVvE2E1zDZDogT1ovasgV",
  "key23": "5MubJvM3SZabxPbka3MnxUcYHqdDf13h5QoZx5eQfJSozo6bzCgJpGvMt5urWAsoiybr265HvCQcwwiRAQft7W2v",
  "key24": "3cAHA6ZdwgSEXw5C9NSqT8RwcwDBALhwTYp9WEp8herrbTRt1kX31KjiRxYo2XKhj3vkZYUoTH4Q92mpH9mJDLRL",
  "key25": "T7FdyBwSxmTjrxLt77ZKb1hnDQhJniibQdHxmG4cWvwNNK4oLAeWGi1cpcJJnErY5JNsCsZczT2vR7xpMtSFPwK"
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
