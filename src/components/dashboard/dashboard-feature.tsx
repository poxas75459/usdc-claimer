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
    "4cHBm6bm1S6YmNtYAxfaWPF3cgWhXTakU3CjWx5Hk1J3gD6MqXNUY8fpZzGMGYPA4BpNku8FZ79pRgzEAStorcbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6441AQgN17oKpW3nceiwRfSiw4mxXAosEUo4PFSqQJ5AyKz2zWCGFmonJLyBxKW6Gj62iddVbZHUwVDeZhjkUPPD",
  "key1": "5GpKocCFudGDzAohjrt2DG1ispPp7R3ykCDBqmZTEEhNjt3GadwVGsBym2UaBukJ6EarY2DYqitMdM2Pduw5X3JC",
  "key2": "47XoU8vdXQyad5yi9tYRoBtL4ig5x9pnxpa7Uxti4xzFgSR7mf3SL7QDYZznCiibiTpBwmxqjNXhZ9PwBoXGYu5R",
  "key3": "32parP4kHN4u3R1E1F3rZMcBMXHomATxSfE5iPftdqeJsQAgZGpS1Ee83cv5UVJyAuQ1m6piSgf4DLEbsV9emoVk",
  "key4": "WAxjWnMBihF2dDukry9CkybWj24aDjSi3VERN9xRKZCaycyecQErgfhpM2gqueNTn8GeAfZw2teDi3i8LL1hWcx",
  "key5": "5FDrehyYcL5nKYTEh9AKDKVTXiVS2zH3Egu3MgicaKW83XzQR1TyHTXgA3ViSBibddcmDk76GaWy938TVqANGaeu",
  "key6": "4587TWyHrVmpjHhQZMXqqKQvKnp5SESYo7HePtnRxzWNsQ3dNDcyKyzjFh9N1Ro4oeD3WdEaNgd2uWozHb4owC8X",
  "key7": "3wt7iA84hKKoVK2R3ETU211peNJLTWpHqBRQYxSvSqW6EgvTnh1Cu2L8haWGzZLKJhb58DGCYCLJacGdBD4uHGxV",
  "key8": "2tKWB4Uxs8nu3jxjg1ErYjobA25dL4YJSLt2eAypjStM1p4ntagXYAf6BkSbAcHPhdU9cTFo3X3zhz2kcHgwpvy2",
  "key9": "2KDnqStYWmPXvKbKb3ATKzgqVHh3EC3nZ6utrWg9TcnMVsc12jopW8sXsYj6Z6C9MPS6VUF1gFRfgBTWbuhXLXR",
  "key10": "2K9pn9VCzE3ptSYUHfcwVLYhigC9r8NpKZp8e64CtJxdqhdf5FwjpXSj7cnPBpS8StJgDtkG7q5yedpRYbrmVR5n",
  "key11": "2FKJipcStbtsU4iGVMwdZZSZoZLpgzPQiwRp7UZtLwUpnfahiQgKCJeqebEV9dGbSqca2RUEh9iNW4tCXWbHvw74",
  "key12": "42YrS2U8EGxCfHut7ukcL74p4NM2R6AB8XDYKXoQyHS8RnSZhVq8DnsyXwJf3kf9LCzEtit7dBnbsLBBGFLYeh4h",
  "key13": "5RJ3nqu4vmmXW6vbbJWUD7PCim9ULziTfwJ6AgGsXR7GoaLtfpGirsDm14LMvGNKRso63zZmSSxnoCuTGpx6cHL5",
  "key14": "aPMqRVKcgmhvMEuQeJFf7TKWVykdXMFz59wMa7rnf7wfj8pPdBVKEEWWxZhd47N6EvZsmKLwiqiEWcvx5rEycfz",
  "key15": "3WwzNGZTyS8Zp1hDSEupr2Ari3pEerRNB9YbGDe9GCiWyaANGehkt74U3odvoojbQ9HHo9coFK3Mez51XzkXsefc",
  "key16": "h93QytkGvhBRJA5NT765eoZvb3FaBecbS6nAQA825F4Ejxbed731F1gH2ovfsbUiaX44LNU1cGikNSjVJum6rGw",
  "key17": "4BxsufrY8pJ9soQtdYeKWicekxbjf95qzmLDuhx3KF9WiaZ1p7qnTTMDRn8FTLDhGxAnSLVqdaKgjoBUpTAy1nY9",
  "key18": "44NoNSDHRgR4xmgXVJHphktK1Knu52vNpGLqNkYzYzwgxCYzqE3YrubruYXHwJVsQUyJmTa3jYQxpsbfmacHhNkn",
  "key19": "5oqgpJ1MAA8QVZEsJpkwVc3S2QEyxzoD1zR9bKHSTr4i12DMp1HwmEwmQXgk3EfqReM5twhWdmLaXT6BT74aicoB",
  "key20": "e9sfSKP2P4bcS5766vXQSwn8Hsv9jzkw7CimnBQKdwP6S9hFWegU1miJWvyWi43L7EmxXtXCwC59S13Zf2kq2N9",
  "key21": "3PdG7m9ygRQs6aHtA2hGZMtGRcHC3QiYQWfT1cc59EufiQmPrAUqQvFbLNvPFxbUrPMAhJpe84m97Betm2uM9cLR",
  "key22": "3HBVYooQWws5hQPJvhTjR7xLqZY1eBRYQUbhpgkUYHMoBpV5nd59SFvgrkhbDRs96jc73fW8Dpp69sGUx1W6hSwv",
  "key23": "4Eh62KYefAceiAcbKsznYdLqM9t1Jy9jZaaNi41cN4VtKJbgSyKUgZ82Pm8xhmrZ8R411HCup7X6H9Tyzb6Hw95j",
  "key24": "5LSV25NK2SfYdJDYxDwoBufA2aC8wtW6f39EkWNJfKoeo2KuQ1tfi84CAyR1Yd7BsjR321nw9L4zPbYTrEESuz3G",
  "key25": "3XwKLipp48bSZY5wTLciYEcDmJfj3udTxAMFyzEdig9kv89vgDMH4bTBN6N48riF9X7hoiQcfLRdzXMyKUomrwbw",
  "key26": "4XgpxF83fPekwQr3wFBvba4J6zatJJY7wCqvvG6fTEHuRRxaeHUtavgPsCzQ2YbrMd1AovJ3KiQK8qEShVJVDunT",
  "key27": "2a2dNqUptSAagd5art5nYA6MaNxTJWELpJhgNcgRDQrwUFRv3vmTm6bcG3sf9CtjfsiDYnRaRssnZ7Yesp26rzfr",
  "key28": "22JehoBzGNLDGiHjpRTQDqCpqCqc7cJr8wvYkvd88Pzz7cNf7QUXnq4fYosVe5FmEnHCFYpJyzXh9ea3qJhFKGd3",
  "key29": "2Y9DepidfQ46xk8MgKsV3QsyAyC7mZhYUswCtbFGKyfx3MgyRV3mzvuQWpm2CMYXszSGDNLrkCgfmwJ9G34Hb4KF",
  "key30": "43LgP6iiASJVB13cYDn9JwNU6oN5X4cv2SU6wTqQNDHduS22YQiab7SD8GC9VAzxkuzEzhEun5DSkxyVkf7xeZQ5",
  "key31": "aDaYsr4vcMVYwMAPzp9zA8KeFxGjB5AdcG9wqzSbiUVogniTGjgjTE88Mr3jxQewD5Gb7uaxcd71E24oe5Xnvrf",
  "key32": "5suZ86xAHtQfnQEBBLuQPXABdHBHvHawxziaQ79EgN9KN1G1WmLvRWdnos3Y9LfRUwyVQ8cPwDzT16YXjxUyEKE2",
  "key33": "3M6Z6LpXUk1K6ZNWa9c4r3FRSdg23LMcAmGV85qedrXZZif9icFJGyv65dLQjMUJnTGhcZvJMhJeRoHTAsnkZAyS"
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
