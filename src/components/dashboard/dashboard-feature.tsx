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
    "jj4JTzFwWSFMxSXyvQ1cgdHW7ErbQQ298ohKjb4nmbakj2tm6q9c4QTCGX5UuGwSNLrqadhCWn7bNb6vKkkJCys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgrcGKLmEttfPzT3DVbczrfeqFtSsd8P3QUATnSAHgZTzyiN77wkhm3uFC1ofoby5N6G4k2VkFAhX2KjiBcGhz3",
  "key1": "5Q4YTpQWufVNFVK3TwKbmKJNVDXC38ZFPCxLV3xNjGPPrJKiCki3sMt7TJjeMfe7odmNGcpKwQKG4G83vuRuRDBZ",
  "key2": "66D5KZh3Vbqg8frYefy68hkKhhhWHbVfnYg3G4q2cBmDFZjYmuL86deVkMEFNCrMtGu2fJ5FrK6bjDZVsYLKBgha",
  "key3": "4PhjeWz1hMZZPnYnyZ1bQsDid1kM2KiaBbEqPaHCwyGTvdu9bPLydusjBo1xtdFzKGFbZGX9WbuKeoz1don45FNC",
  "key4": "5wCcRmY8j3gcpRq89nzzMqtkpjrXNc5adB1iyDJuE19hX5qfFQ8sTnHG5vrJAcrGgr9wtExMmVuDjFxAZwxf2wug",
  "key5": "5xUouAr6irb5xSGsEBDYyDvhMR5oFWGvac8KYSYC9FgvATPK83jA2CbTuomwwzdT6yoRGaeEEPr5SW3LWAEgpoXF",
  "key6": "HeXsX7A7tPp23EvwKSanFVRSYkjsnnPMoghqD6UT4ZAyG3EvD2bPUqWngbhxP6r4faV3fPry76TwTdP33iB569F",
  "key7": "3RKHSG8rjLBd9G7Hi6uqw1ZJQjaMaBkt6XAh4XhxJd6WNUiEmfJZmegmbrB5ePZ1Aqy6SQDue2vu5fY5LYayvWQ2",
  "key8": "4CEtLe1JhRLEtLUJuqVHMVQ9VbRDeNDzT3LBMKHLkLrYu5EiucGinMXSPfA4eupuXDGwQKobyQzJaGACjud5StxL",
  "key9": "2MxMuun1iTtWtD5f64SYzPvQ9Xm8JRNUsMwJe1g8EhYA6eheTfbTy8Dzz4Aek2e3Kg8rf3z8KaNuFkhV4oKMau9f",
  "key10": "rzot9EU2DW6GjJWcuWMNF2ofAvg6GaGPvYVgXqea1xbqmsX9AmjWuVVRy6JTr54u3F9EhqzSdrHoK94wJ5h5FpY",
  "key11": "4D1UpA25mqkFFrmRtv5BE6yW4JzNbHvg9CrVbtwjBpPHcwn58Te3uijBn5Rf1D26W7sXEQbcUMpWW5dL6M75aVci",
  "key12": "xLPEyTGCJqcGLoVQfge2712tVFuhyKQM4Zh5cDzvZwJNJtG9tbQ8QEVAirn61pYUco3X7QU1rAEuHgpjsRSoMiz",
  "key13": "ZDWDHJpjszrNrAyKnX8KViCHeJqQbGrzfi7issVyiGWxzL6UtRxfenMQ9YZJWnrvQ7NjvN54jBmR9J6CQVmFTUe",
  "key14": "52o1GYr6rN32EgVrZgBAsBUYnaEEz6Tfbb3JZmUrNaWLR7NefAfqrFpZWzTKAnvnNDzMFxZEEvNjLuqCWUS7QNBU",
  "key15": "3Bin77u2EWr8Emg24u5HUFQqETokRVGrakYHg2JbEHEugwiQutPmeuRPT1KkUnQPVhi5Cb3FKia3JKterE94Tthh",
  "key16": "3ZfQUWVeCBYMwK8XVWojenyX4sNfkHrJWtJR2RPdTPAYkfvd9UejTC8Kqn7H1ps2ekUwT9295QD68VLGoPJkJpgV",
  "key17": "rTLUh8yjzNWvbojPKDqEGqb7jrXap5FTefZ8F8EdLo6R1vaASqfSyUrMy5cbeV7xoKjotsn389M3RAVZ26yjHkv",
  "key18": "3MyvpN33QphLskdPbkjNniWM47xcY1Ci2bv68mzFRidQRiyL47TDFbBkhNfm27WhW4bwhKawZrAbpq5cgx88eTd7",
  "key19": "5jq8NSFBHLe7sK3DSiNCKNkpYx7UvN9vi82ou2x9WzqpwyF7hKpY5S8SjfNYy8cEdqqeiH2zHTTtxiqyHEdLU276",
  "key20": "4zYawxVEvhsepbuzTEjKpyUXpSdXPYjMrEW1dw7oFQj8cHksAPbxXYoDGj4Az6PAt7xMV8PCGF2i8pzhfgE1zZfW",
  "key21": "4ayPXsSKr3DrHvwRE5LVkiDYSCuREYSwn4b7uQTHvgc3cz9VwFr319tpkmMZhsoyrbpaYhybEbtQvKkSDNvYrbui",
  "key22": "TvKrczuLWefEe4CPqWv49ZhkHWAgu2MFSXmQA9QqoADkeacn4DnBf8fLrNfUV95eK4nHf2uoZX6vi2r4tckiApv",
  "key23": "4KXPmtqwvxUw9TebhMnQ5ir4NZ6wmVhT9SoPzcN8RDogHAiAHPSW2FBiUb5Recgd3EyrFEaMmK43DBfeV5JfPE1d",
  "key24": "3gtc7aWdD1JdnxESFGBnDX8JtPYHQte3VqhXrvxvqm1s4G7EKF2nD4noaDjw99Q8Uiq69EBBKdT6aZ84WahsisxW",
  "key25": "2Gy7nx4bNhTLA1YhiciN8BkE9vpNzrzSHtZmx2nksQ1AgWXjNpYsUGRzTL9AkR1Js4cHmWDDRi1t3JajRpRLtUUi",
  "key26": "5swDYrDTnxdU7NMCRBfHaz6NUac9Y4mcYGzNV3mvfgCRGUsFSNp1KtRJWfACay9ggqvEKSByZD1viSQD12arAri2",
  "key27": "VaCqyBfCDLEtJ74141PJa8RDHgdvVGxHuAsr1LtdHPkhuixv7mMbmL6eKfe1A9JkHFrxeWnvx6MwbqCKL2XEMGf",
  "key28": "273fdS61VSH5FutXsAkVqBVPsmzqZbfDxeiKeey4o4UVkDh4XZkkQqsvABGMdmi4mvbx3dpunf9Ut6M5GS7U8ZnJ",
  "key29": "5NrLHGY1m9JmN2LyhUCuLQ9R13nRvPDtcAvvccTaxBHGx8Zpkb6W8QAkNNX6g7hyM2dfnwMig4js8FDSaSiFHLV6",
  "key30": "3PNE4TiyZonF67SQKpTS4uRd7w9SrTRGDNPX7qXZx7wm5maAP4n1kdz9mBq5jPAmfKaR4zvWV8tpfme91T9AS63i"
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
