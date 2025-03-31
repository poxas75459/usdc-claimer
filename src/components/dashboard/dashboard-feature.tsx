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
    "3N2Azb5p5cKDGVdgLGZ1aHR1M8agqvTL6M1UzdXnszx4BWxvCytiKuyqLUqY5GaDvLSdP3aK2bQeMowemYXu6Ca5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eC4ERi5Fj5q8sDjnzZ2Zf23odBnMkvsicCovx41MXXDTbW85A84qTkdBLe8iCAi9uSiHuynMcjTmWKghEZ2RNCQ",
  "key1": "2bGKwSqGfr3C8HBMRAN6VpDyN6MeL2QrF318DKreS7PPKhUubpydYhNcytHUBGFLvme5HaqbBT4NWjY3Yr8oBCRg",
  "key2": "5vnTAcsVMYehT2Hngq3qnrMCdFitZY5oXHuYsiY27C8aFkaYwNaW2Js6AUiadDzZExQrTBbJbJgPcJUoKSNqhUA3",
  "key3": "3MqthVSTJdSHudNremCWhczK1QNmeKq2JXC5czqz2FVXDAsCkMAk3C2vjMwrzU5QKeFeSagEheHA8jD2EAvFTG3m",
  "key4": "5HXFHLKNMWtupXZmXaPmKajyBkEvA4ZD9vGjFJTWi7bgZxd78ygwZSCj4oFoHgPYMYzUqCCxCtQNEFVFFTx3VeC3",
  "key5": "WCFfMHNeB3acxg9WayXfinBYvkaZykUiPWXi6mwqKa9H5Cb25h3bdnBRqDStWuuqFYq68mZzjHLaYVqsF5GYiEF",
  "key6": "51vzJ4ZFQJGQd3Ggi7fMh2Dmek8GRwPnxC353J3JkE1kNkweRM8uwFmk5C4krdERdScbLiPACUUu93vdreu4eheY",
  "key7": "4RNe2ZYR2M14gZtYhbgWPnu4aGaBtjEK7UEZT1E2mmzkdjFJ2b7pDgiVoFS9pHvZRcWefaLUDgaxhcDhx2mzuVnu",
  "key8": "2PWFUkddfhvV5fG91ueVxah42xvNca6sXvDf9L6n2yRCe2gHHhuPw4qCu6pCijuA8NCtp3VnpmRd6xJP9BjcLa1X",
  "key9": "2tA7eZ267DRpLyGsLj9v7ZaLfxD4ibviCYbB7H9vJYjoXvxcKQmL9e6Yni7j2bLgh49KGuTjcW3v1jJULGpU5Ysz",
  "key10": "5hnm2HHJjyi12xisp536WAKhr69DV9hC2AzhBFWzRDH4yLXZ7qB1gmt52QJmc9B4GDkv4xXZYTShAp2dkEAbEyEQ",
  "key11": "2MENFPSpmfe4sXYysxztqUS9zhfgd1mxTEQvpUtswpJoKt3MrhnsKnP7EvkYRh2AQxcoj1bys6aE2smeYiESjqdX",
  "key12": "2jwFNYbrwytpmHCzzD5KaQ5cEuq6s8DSGakXabVHC8WurRcrfF6wDRcbUnR6VNDs1LFihDWCQtD4wZN4Y4qtPuUw",
  "key13": "4XPy6c4PqVpSUTMFQpugNaUz76NVE5anVWD3nwUurLQGvxFpA5PTQ1CRnzmiqmFRDQntC1DamWYUYfgszbECUvgG",
  "key14": "XYimKayRT9aBETG4oE5JHW5cDazU4AssCZ2pPP6XsEju844sXhGSjvUtx9yriJ9CFVJFBxMZwHDggtdgE7kgbWy",
  "key15": "38Xx6ctY7HxknHqiooqLXMrkYbbkTzwTGY1mH2CK2yXdoqZy8KVtFznrxaQM3JmxPjiVaqpPoAqRFVNFmNF4wZM",
  "key16": "3iwXyVpPr4yaPDuSQZE7m852LvpS1mxSsN4thnC5Ayja55TzuBVzWe31uQaD86QJZBRiRyRLSkQamQzCoZUdJc87",
  "key17": "3LJWmuka7m1xXc4TeMrYFmurqPSuKJYkBEWLbZ8CvBqFBwKqjbdgFr1ZsDTW2xQDjA9xeLEimKFyLRxLyQ6WqqvU",
  "key18": "2snoG7sZjixUje9K3mbofsMKYaSNBvS92mutysTs57e1zt3X6um1aPYh5PwuuSdjdCmr6gZPfAGdj5o4XwDRj4hD",
  "key19": "62ibyKdPfM7yBrMFmssSBLmFHQ23w3ogdc5EbyybVnANmnmWCcr15iTgn2rBwVYGf4ZbN6GC9ermF6UR9Pwd2khC",
  "key20": "4b3ty1Uqhp2SczKTu7Judiw9bV4tkjgoNzSJJrxWJ5t7ZwMXso5z2kUBtsmWC8NXYS5JD2DtWsKbKmjCsvAkNfRX",
  "key21": "89zV9t2yW4AW2R6FpPusEDoJkL1PCksWZSX1FzeR9Fv8G9j2RJ8QBeh6ceYwTPtfWZrQME1v9tGuCBtPmS25u8L",
  "key22": "2m5tJsWBHVFa27v9tNBWAykBMwTKb3KF6Ej8B4wwGNPutQZ67dybHkgWwzk4PwtEQyDxVQeg7Dz2Ric2pVvQUXu",
  "key23": "5uPTDRZPt39eQpTbUjzrMjpb53H2ZKJ4XD8URGUhANrB6TxurqERi599FVgtFYPSLH3vmcZQDzC15KEEXFQVH6XS",
  "key24": "5aJmgwUu6NsUMexrt1HxAbtjPTJ1XxFFqxxbqN7feQjSaYDLsy3D2HFcpSQsbzQtS5rxukMsh9U7RgfdML3efhNB",
  "key25": "3kTZWDiEEnFHARWpm2oVcWCpKcC5mD2VFW7s3t9enT5TDXcppo4uUnEyigyRzeS1chahkhamDsxY6jG5YYyTDtLw",
  "key26": "3Pgy2bsDZaMeFWfAhu6VbN6g9yPBMiLp65jnh22GCdogyvGHC8sA2U4VKZmaZLjaFb4eUdKU5nTVgfJPCSfpYh1X",
  "key27": "2H4yWJk12RGJsn7zDsYsKVNKoYprPZkqhv3bdDmKVCKpzsH6MUR3gRCDvcWDaGeFFTcicuYJPojtPqYhPbHursKG",
  "key28": "4iXx1vMB9mN93vZu1FZ9y5qtifij1jQiEMLzEESyTbGXYPLpP4RWxQrYziHLgucpTYsuw6mYkZF9UWNHv9mfwiVi",
  "key29": "4UfxDHwWsQXYTLxph2DrAoBmigjf4kiQb4MT1cjvRLugYs5qU4XW7AMHcSn3hxadX7RbEhmNfnJWYAL6S72V3V5L",
  "key30": "3Lf1kLDUAAmZto4PMrba6iPV6y7Db7yB7hjFHvVeXpRpJbuLSKE83cRFjCBNARv5nvaz18qvhEWLdJ1PLAFmkJA1",
  "key31": "5UMAzA9f77CvP915bGwhJiQgCaDFiKQwfcCb2nc8WAuvyade9tZzn8kD6D31fTXYTXZxZBvMhg7bDD47YovZg1Yw",
  "key32": "2c4i4Waig966g6gu7ReHzK8EVbMeCHy6aB9mkV1oqReTMVSSnjMQFs15PBKrCag789i824g3aKKD4oYbCcwk9Hxh",
  "key33": "38rDspddwaWNPPYhJ2RoSFAdQXQmFiPeiCbQkbTsf1R4WnBB3ZCjwB6L2Hsw2osWd8Z37ygoih5UVxo3btFJM8d5",
  "key34": "52krBzfBovPkLLSqxzu827qaf8A1WpbfV4z5NTxK8YjYuiXjQKZPrwPdNdWimPaEDvLcoxpacfALstGKYgs2Fk4z",
  "key35": "2dJfRTgQ32d5oaBhUc2nGgKHapgqAZSYgAK7GQqDLgga2r2p1bnViy8BeL3BjB9MxVsScdKfM2vgWxLL6awnGGhH",
  "key36": "5bnfUpGqsJqah8mgRBMytJBNnemnfnTpKF3Avi6PTmZtasGXGBopZxozmGWLkEtUEPeHVLKgQTYAuQ8yP86nK6R2",
  "key37": "3AVXSJCYhkfauJ9n5VELdDXr6eag1KUV88e92ztY8pieJsqXfyQM41TF5ySaZcDU8puioKQ98dds9os8KbtSkVyQ",
  "key38": "2oBHWKTSj21D29BBLZYgwg1nRVFU45jzZfconrf6DK8nFQaTeJcVkoFYJ6YrgfJSU5NkuMZyTnn48tkyfgbCdnht",
  "key39": "3YRDdq3Z3cabyrsp6NQQkb8H2AyBcS8QJHtH7abqHoixJSibPTH2wo6Ry9q8ea3MQFQQsKBMXenbezm6uSSbqZgA",
  "key40": "3GzRs4QGA6NqzVMpsFUGHM72T4CMfQmvMcnV82YA3S2zamj6uH6cW5iPhdcRvkmPKToRCcjcvNx6ymdznXgrrjWg",
  "key41": "3GR8RA3swUPmaTGm3tk5AZ1BiExKYHS6heB8J6suydiMTYCGe162TGFSS5SiYcdafPswz5gcMZ4ttFjD8rk4Y1sa",
  "key42": "5kQUtGGranTAep4MnjES5te99iVPLjcQkxjuzkrros2z9j9ziQj4z4BRtZSVkLd3QGiUahy8rC1vydeJjfD2gcVt",
  "key43": "5777E5YUkNeZ1dUqQg2f8Z1uiQYt6zT8bkfdLxunr9DUVNN925yPUmoZCW9GTLJ4Cy6PbET9RDkRKkPbNiRbeTyM",
  "key44": "ADu3iLKhbaTRnd2iV5Y4Kr3jRRBoKwWS1zJR1YEzrJAs3owq188cf7bre3AXStgqb9WBt95wY5X63QvyVDmxWYM",
  "key45": "3CxpD58Cig6w1bMWmnSHbTSKprQbHaujZPZSKUbT8qNSB7uuxd8Awrx8dehEShrchpDr1SxbxQkdfU3k2cx97GXR"
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
