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
    "3TQZS7jh2e3hsacJGuxcV6eSwhypfShVZz51Q5HAFRngm6Z7PxEaCgYCc4YVZpwSTpWaYFHtKzVSTNiZfWxKDNRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZEBityBiKWCv2yP9etxSBPKFVJdYYZuFAAJBcwpeQ3yCyjKqshZRrKxHusjnYqC7aGbcoUhBbr7cG5FnUfsvbP",
  "key1": "5txpE7Q1CBFH7pnPXDKJv6XeKt8usBNBQYJbV7q8mQfLSGsjtM9L41Tmhrg84DER3fRa1dAEEZRNRbmUyD7K2B23",
  "key2": "5njqzKV3s7k8WTEu1qCGkY7sa1ep5kw75nJ2TBVKSzVc7ykh7rbHAUjsXYQMFF7GQLc2oBTHNdv38QjbFDCkkRtn",
  "key3": "4GeeMVeWfDShScJfW46MbmqvWMT1mv2n6MNsUqHGtHDx14hi6MrwnuUq4Kx76dgBuZtcNGv3fuVXpmQ7tpE2enQ7",
  "key4": "4jQDrBN3DuVCLZbh1Xbrn5BHy1ZdGn57sizBkVqdjGqCqGLMLT7739hvGFr2RFsvHmpFFYeE3JE7orZFtQKojdN",
  "key5": "4WMCxNMRicm19kwfZ5wyVzBFKkkXLRYCUiUcxunRoXx69UfrNS6R549RTqAJRU8PVbkcoKpBxKvpyd5crtFBogF7",
  "key6": "we4TQaKgJvegNqobCx2hffrWn6DAfKgwsgFmVoBt7qY6bSfhHM1AazsusnrQvzyzh7WbxAUNHkX6wwqaWvkBPzL",
  "key7": "58ng9d3LzhdcQJetuufYesCFu1XJwuqUeJq523btPYRd4FQrBDSocvbyULNa42xT7mFtW9ombdAA5J5ybJoDbQUk",
  "key8": "3su9yHfJT9ztw3r5fsZFnRjLeimoLjxmgFhxx9KArk691SDFciQPZ6rVkdn82BiLRHZRGgec6ZTq421SxV6Q3oUL",
  "key9": "3naFb5sTyu9XkzmHob5gpfUyswtp69oJzsu5zaKBGBLcg53YKMsGMLD6Qoc5MeTvEuf72HB1d9mM5JviLvWCmUA8",
  "key10": "4HhFep3i25yh5KE6Cik7CSn9DpYuKYC3jFxHsPAya8QvejhDCbA8h6N1uSvXcm9Aj3GFZvcsFZFMdMqWwgxzH5s9",
  "key11": "4mgPhMVaK68JKBNtBs8WnKR711pEa8xGE9ygtFmpYAACbKrGS6dvZr61AmqVAhqAMjcTFVGmjS4UoySCNY2mXMnK",
  "key12": "nfseXD36mZ2ofjCGTyy5sFABAHe2qNzH5AQpWh3CZWV1Nvctb9uieupiwHRwQew3aV5QqSqJPe1MvKWuP7bPMX5",
  "key13": "3yHiXxdc3vP5u6LogXDbEBg2CgZ2voUhV52CbtnMyW9Hj8EbTeLDmtJxuZcEib2nPrPdnLpuu8MCfoaJaKG5nsx7",
  "key14": "2h8GXQtinvheLLqXiDwDb5qswxHt8MZQhsyjab4NE1XjrDhGqv1Q2JmRYMdAoznkNrtTcXcc9ZEqXezNZjNuecvA",
  "key15": "5TeeeMzoeeXekwdDZms5gGTNG8tJW7YD75ABdXmc23LXCeCnkUvv8NSAbMHdVLcc8pBV4VsPsX1sNoLeAJixVzub",
  "key16": "4pyHMkXr2wXG7TWn7QPRLmW8jqB5Kxfhz5eGDekyktUztg55tJpwDUV8PsSZKWdFwG5iTcVs5vwVuPMPYyn6o6kX",
  "key17": "5iiTnAEdeQi5GLznTs5k1SMaZ67EvmbEqPy2LQ5iRcCd61LdjUiSFDyKrcUkgjTn4z3qFr5dT11nohbYCbBanJZq",
  "key18": "5dDGyiXmCxYEihHjykvDZmWTai7DHLoK5ckimcugacrtHxbLfZ8VemqKkhpdCVSs8SUMGkiWdV116XT9u1S9qpz9",
  "key19": "Juyovy6XYfFN5erTXbBVeYj4cRhspiakFqv5VKXp9YEHww6QBF51coL7P2fjFsYjxeeh4aTtNZFmmPXt3s7Bp8x",
  "key20": "3UHd8FbRGuLoWYsMaEVpDTRM1rDENqiTMiDUpfHTCrophPbH7RVSsZUh53SiY3kWuS3gCGxi85WbmMuq7WpWUJjq",
  "key21": "4W18Jo7FC8wq7ftfFG27JXmKAYqjE1tDaWa8XdW2r1tLjGLJGzJNmxQUk7vhiJp5DhKwNddMyQi7oh7j4fsEYgRN",
  "key22": "4T6KRnx5MQLCvK2BipfuE71kXNzA5RqwXxyJkDc4ZK75GxuhJWECppS5PhHjqSzQwzDQxVVdkiwKnyfyNcRUYZjV",
  "key23": "53jsb7UbBUuxpNW1iWCbUa7wi3WqZ75tNmhpNSXLbLKiCHvu6f7F9hhPz8fWgPgcn95W8F7M3QnSKSF5fZDvxDYP",
  "key24": "26sWKBV2JDffsy8RCLQPV4oATj8KxDJU62bKwrHKnhmpoKcT39yXkCNDyzBJB67wpy8dgnt8EMtZDGyfBwF5Q1ux",
  "key25": "3Ccnna9CAhCaBuuinENMhdLgSwcQL9LPuvHYYbm9U9mmWPiP2Z6onGW9DQ9phehhPd4g5gYxKY4P47P7jsCL72v5",
  "key26": "5iKbv6gXrVmR94L94JPCPCNdGbbHdAYUJf8pSoE2ARR5kny7SWtKK6gtYnSB3ZMLqc4RimsVJmNPGChNG2c7Ps1H",
  "key27": "4g4wvtLzAxUpgUHEJyizfRGBMG4DwjPmQdiTHDWzW8EmAwprAwVn1Dh1w8JRKDu1d8YQ58434RFQSNgWgTypnBZY",
  "key28": "2GNtCsoREvFhUN9bqZ2qNPcsCUgVpfJf8Yq38Qk1G9izoKavZuc2g9ZFYMPTzRy2BJeSsto8mpiAmJV1uErqCnHN",
  "key29": "4V5HEgucMQLMuf752DRVvC3LZzwujrZuQt72uAaNpYYJ1LSQNHeoWA7m9jECxxXsDQmXa9iua4jRQ13hgBF3xH3P",
  "key30": "5dAXW45gUEKY1TeQ1BFxSwC6nE6tvVtE9mGDPTQpVL1TX3FeMSgc6Z6rkVaNE7i57gbojir5FoM6NBmk84E1bDU8"
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
