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
    "4VwC6tRqHfMHP425vCiW3iT4m3gQk7LwwKnQxKMaW94xk6sdZa294DAn5RgFDYcQzqCwN97KdCbrTaFbqj78WHaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9htmYYzu6irX8ci4HMaawPXSgWVbnd9wqQZTUvkGChBtwFboTFZEW5jX1YHF6gp3D6gCMDgmfffMo6hnQQFanb",
  "key1": "58CUrWXDgVK4eFzoKwZjonXX1cfujvR6f1X41KCB4fkDUgfC3amPPvkLWVyNBYKFEiVUMqPejPKpkhrCXrS29gYZ",
  "key2": "Qvh3w6aNng3cJXpA5jVqrApxbswcp8TtLoYptYLLbdBFBYVBDioEgC4YqRqajhf8rnh5ZaFedLNoDhFYBSoydV7",
  "key3": "zwf1kdz2YeZ1DkXcEBm3KBdTLFrCT6opUovTSJZ7qLDysb9RM8th9SEKrJQ8pfE7jh4T9TY6Vp9LvCBSFgopCjg",
  "key4": "2AgBj5SGZvxzhakRwD5qkE1HtWrXVgPzjwS7mQh56FQk64aHA8xGavzrbZXoVmj3spK8cEpUkQ4YsXNc735Zprn3",
  "key5": "5GajYKNSHJcM58rz1unyYX4fNN6KnAtgKMUw5Hd8q5ySxfDDxfJc8ki9Drdbvd6ZRPg18q2uu4KNFxdGLZe1vV3",
  "key6": "46iMVA1YdQks8aVW7s1AGpbDDf5dEZ2qL3UMnRXc3iKTADcV8dUi3o2uWsCALiNU7gd1kNw8haKtU9nCtDfmGABp",
  "key7": "4g7KNBtbjvperqz3LWkuX63Lh7MFx6TPZuw7dUXGVwNR7a7nSTwUP7SHGYkeXaYV4mcahzeA2W6N7jcFGzCcbWFw",
  "key8": "5YaaTzaBTig3ghhdtaxgq718C1sW6M8vmxHRSAJ4cdHdkuvfDu2WA4Db3BzcdrKqKqmAgcQDZ8hA3C7k5sh78iwF",
  "key9": "26T5GzjDALBweXiHGRNgqnNH8VxDs5KjFwxVjW4qzrbJHMYTLPntf79KBn4RPv12sLj3Nnz5kUM2y7qgHbNQJEhs",
  "key10": "238bf1tuGnwfntnTe7v3XSWqotegqzKC3y8Y5LBd2M2DSuTqdZCMJawteakojm9AnhJNqeVjZpMSGAoDXiVCgCK4",
  "key11": "2WP1eodY9HahJ6LXxSXpSCc6CXw4mEqbokC8gut15qQy31dkuGDyGErD7VwT9pw4PBXW5Fy7i5JkbdPdMBNSDiSk",
  "key12": "4RZpMcZoeYvHgzUFWTS1SaFDD7hmZmv9K6myeaP2fDdgTmsrtYPzjye8c9gmhS6RKXL2MuXnbmBhXT5MuWeRD9sW",
  "key13": "5mzUWU4n9XM8c4Xx8GY1jVEgke7GfgJyEJUjiS9cnVMSMUvKUv1hLnLRUpk2JhDTQFw1s6HLd7DmxFM8CRC4n92V",
  "key14": "21vhUGwwCbBfc3pdNbJXZd49zFAJUf882wikcDev1r766JFUExnxnHvSFYCx41LEShR3yQRexakz3o6bzc93N1Ex",
  "key15": "5Ske8BwNmph1xCbRSHrLnKQkLJbwxVdbbnfNmAfdRHGx4DQZZqkbbxxArzfj8xo9QCPMnAzJrtqnDn8DwYfzXem6",
  "key16": "5hNRme8CTgeZcsYtk4JVsydH7Swm6iBh1min5ByHkfNd7WBdhYzKx8hrbryxTFpiXKkKZnKahx9eWp4cP35f4Dv5",
  "key17": "4PKS9Smu9Qs9sGEL7QdkoiEdzV1Urk7ZPTmUJyfFNhkFKHvKvFSdfn4yKxMmv4DX6yE61i8mGP5rLC462KmrqEpr",
  "key18": "3KnsXht7MM3mvJzWzhbABwJLCmGg4ZQ1hxC5BtSohKtHzrbgGNU4ogbHxtjJmmgKc39QcxTyfn6MbeopE5imc7P9",
  "key19": "5URtAhsVuv9NkbfoDxtzoaVYtVvshPYDULae9xdjGzn2nrEXynL7LmoKB4V9ETSg2tmEr5DurRAtjVNKP7pZrUPd",
  "key20": "3c8FATpwZkALKcY11kUiJKXYmJKTXuDZrhGhwk1onJPg7ti1ToWExqHmJGmy2AFyN3cmZfii6L1sSX25fdav5s8w",
  "key21": "2WmEoofuuYQNnfgV2c6MBuKa4NMc3UyhHvpFwsZYhrV51GbzUoBNU4f3GnPUPDzvk3M5HPVgfun7yuDgcjHkbruB",
  "key22": "5vvMp9so225LYSXT8WZk3WosTpMgVcV9TuXJnXYaP4J7U9cT1NNCbXcMT2ogHMSCiZG4NB6xR6Xko7uVwV7BnbPU",
  "key23": "62Pm1rnzcgvZuZZ4sEXjX7dwgxVsD85f9BfbAJsM3jtSsyUxpwxpHdQ1AKj4sxiCTUdF5HYpQSyhnATtcbR8GZVD",
  "key24": "5e2byfzv9dkDpvVa8casyh3whsyzxCZxAkpm67nRqsLgW1KX5K7KeiRboGcP8qGPmFuoBJrQrDF41ameo6KicnZB",
  "key25": "DjCNwzphJTozVQ9kf5ycE783yeQjv7tMrEUeaSaboCVyUrnW7pezGexNnvUVSA42kZZCy8So5s1SWVnBWg7b6at",
  "key26": "2jSBEnYrhLMQ43NwfgGhZMvJWAUGN1zWbQ5ugvSPUmfSt7us4KLY9ApKPntHWfDyFjBzUDyEgQipnm7XessHKMAS",
  "key27": "4oByyNQcWS192ZrqvFdknCNXiPdaZ2k7c3vSUGG8S1pxUhDBmNmYdpaxpi2ZTxi5tkb8bt8CLBP3xpG41eBc64mm",
  "key28": "5pXKHXadGH3B9Hr83SjcvdWa3uajygZqGp5Qtz2ddzWRiDfLDvZYTSaLFrHfWiczoELUFCTsmiPBXR1VjNdrkv6e",
  "key29": "275pYg2xX5HpUTwSsu5ok96EoVNnhSojKHqFYGXBUrrXP8o4a2Kxbne34NVLk2dG2qoBehZXcoqUAcUFV4cLFKpw",
  "key30": "3QN3W8VLs5gYe9vrVi97sdqV6PZmqQ6n4K8DGspjHPMPdu3MbrepgZGCEipeRkwkG2E11NPVZHLbKoLinLBpuafu",
  "key31": "32ccQdTDxqGLprVHGMeWNJLrym6hNsJhrEsB5qGvuYRUjAxuUdYjNW3GPmYMpEetZB4iAdBqf5V6FqhNmQrwwMn1",
  "key32": "RF6hXUZbT2suDh5S7GHqgYstNqdiaND2CVxsouDwtZcWtU5hWw9DGFXUMwZ7HQmrRFtBHVPEsMyMkMA5HKgeaYU",
  "key33": "rSA3gaJYPnp8XaDCQKgBYUQWXsAxPEyrYXfAZQTesBt2VKardFaS6R1i83SN4vyHn5E355jEK1HBeN7G9zd4oza",
  "key34": "5d2aydJzYM7qaWeLQwu2oLxTtnG4QhdxGktmhuB1fRoNRUe2eRwZeXs9eWqPtC9E9Q3RvjZJvLWp4zGRn4Ciyb2m",
  "key35": "3EsDPxnmjFz76sUTBMhrmiySH7FKBUhY2ienNiDEGJk9J6zkmbCeRWrwqSM6Jcj6nZTdy1LQuVrbUK83NfMEut23"
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
