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
    "3rK8gTvY2X5kccQL1ficNmaT7jZf81N2VfJYqRXsJRSGStQRpwyfzKirg2sGUon5Ni3ZNTn4fgPBjXQ5mzDxfThJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4m2v3LcNtfu1aPx4ZKqH3nidbs5GpoRNUvfHeoNimHwzJhzYCXbwzukQ43eLfPhsfVRtEmCL8PcQvbU98CA59c",
  "key1": "2RDwTW9sAADwCtcKKwbi47okgLsCU8RNTZ6tf5cR3qvtxm2DmdTRhotvMn3aCYN8a7eRjHTj4PwN2dub4rZVAi3E",
  "key2": "2HcayEGsAeGBqLtrBmSTpLB3tp72vgETnMWecRJpuU2zxpCQ3JeqEKQq1cVtV8odUyZdQzgyiDR84hAj9Jzt8kFL",
  "key3": "4kYjWEVnMZnritV2eBcef5zTQjQr8MKpZg9aDBaNDNBrJqRq44Sb9NDSibercJEYmYePCS1JuArPLJzkgBSBJ7hV",
  "key4": "5KUeP4zWK5wGvsruVbN71WvwEGzn3Y9SquEhLiNJM9S5YH9rcfyaj8TfUEtEYBUSFTEfGEW9TJRmM9HDjh2oTUiy",
  "key5": "2CFa7VteMpGtipmVx66b3CMbGo5qwH4zNTukPf4NqHGdsbC9vVTqagz7ssUqQZSLwmQsxSxDbPbLJqkjmxtpUfit",
  "key6": "3moeBoUEw1gHJZYTVR3ugF4AgLeChgz9wR8rKoWN4Yb9S6QJhzJXvAaibb8wBXonyTgSStdDbsWVBtkjFx9kNL7x",
  "key7": "3iKVUJKYH8ww2kJtCHnHhpgnAC3G2w4FyyB9WoMfrcS8zFVBy9BaEibXav6Zqtty6G4J99xyzRnBpeqSRBZ8EeFq",
  "key8": "3gWw5grzWyCKj8t5jdZfthz5VdjWU9KyrrGM52e3xsbW8gmkPGDQ9haAcBtqwiS2QJkkzs3sEKfAE1YzY9bXo4wS",
  "key9": "U8Bz4TKxgMbbu31R7CXcwJ4JkMc4Tjy3vqHm4AnriEddwkPePer2SFEhyTuTmDyM4WHkNz6j9kbuudZp1Mx54cX",
  "key10": "4nc8TYSoepkiR73ssUwPifWkedbZGgp2jYsxPmVWdZujgoQNevoBXSjSf6cjZUf3Gxr9jrVC8wkgsv9EsrQvWG8n",
  "key11": "5ajGkxxUSuv1ev9FDN1xPMz67hd6arPFHmsoAdPC644qhpegvo9jMjxMsoiqZUndtMJXxKSmRMbTgppHvuVU19bw",
  "key12": "JCXWHt8tYiTdgFyKRdBQFhq9AvfunLtMEQ1qq7N1vUAJ2JmKaTMoFJFPVU9ugqFQBoUKqysaWRj47eQwxx8qb3Q",
  "key13": "27xByVtLEK8NaYWRC9U7F3tcXytiuiMYfUpJFyCddk7cnTZfrye99bxbsTqdNvkdZRKfqsDNyhhM3L1visf6As99",
  "key14": "5kRNMNWw7GR5qcZzspfnordu1DqKfHZHSVNWKsrtpJnhr5FGXHNnfYuvUB1r2PD4R41LUGEeLLwSKpMmMnCEQps3",
  "key15": "2R7u7pDMfCn6CvSUSDPUKjCh81kXVk3o2KcGmK7P75ELeXdbXEgFFkgLLhNHfWrbXmF73Mk9PuoQjkTJ6mnwi2Qx",
  "key16": "58PnoG9dWWe6T9AkJHQBHL3Wqk4MVqPaH1R6mucCdx7vjgisS6wmDXuiTQeBWbTktNCmZ6nZ1sQzUJrV91WC35o3",
  "key17": "32YURmFUqG3oL2111xQgTfKuPPbZmhyQ9vxmgDaYnJzfDQMpY2bYcNzfM7egAmyHudSu4gqmgZ5DymJvBGSQqwrv",
  "key18": "59jAPi1qBhSB3xZ3wPG9Tx8pa2qEVGM5t8TuBWHnKFKNrKxhb6u3thpprpF64TpCEZqVMmGfBHfVK6J7UFt4GgY2",
  "key19": "2c1iBQkbuRkw7rSwGvRXQF4b67tst8LnBYAfPuQCYwLshr8swda63onuuGBXahmopAXTJTZ2CWcpovuVdKAxZ1DA",
  "key20": "63ym6UHng48qYHS6nmdoWbeoCvWJehLeiZ86fLuUSdsXxSdmythZMLrnWFMWza2A7kVzsfzK9PYNddcM7dAZ4vTe",
  "key21": "3M85cCmckUCxBF2owZHYcVWnMssNc7BHNLTdCZB12CJj6UdiyY7Q16GYGo5guvowbmYoXX7uDQhcgNPs8TrnPqGy",
  "key22": "Ma8mXNc35oqU12AkQMaLAZg1wpotetpd7F8mXTi6c6uYCtHBM9BXqgunu2GPJVDRfKV1pAnEFsUTeV31QM9i2BT",
  "key23": "4Kxypn6NHfpsKCXYMrfeL62opvC1aqDauix2pWzU6dogQ92TvoyuRFjzXgmg6RnByMVZtTLET7hnFqyUaJ6qHjuo",
  "key24": "5XRcC7aT41TqVzfU6gjZjyxHb9PX38tM7rpzdm4izvy4A5py9ReBNFQSyJwCxGfLabfQDxjZRZFdJrff8ieXWWYr",
  "key25": "2a12B2dzDucgaDqQ3brcHXDVvyvGDuVrSnbcTLnXd8gbbWT8kcVBrHzVp1Bdof1KG3PRdEmQZxecngH5QfR7qezK",
  "key26": "58HpDBQU1bAjyM6Vo8Z9a8Yd5tk23EVvMaRviTzSSGvKWQBWhktAd6ymqyDs3ZC4ukcH6uVZuPcdmjE4GiCtS1jj",
  "key27": "3y3dvXJp2HxVxzUAwfbZ1pD9m4u7tzGwFi5BdZWqS7V9xXpkZVPM7saHifGu4fnP9iWAJUtjPUJNMsHbZJB8ZEni"
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
