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
    "34hBzStag33CB25F4hbLEhxYCRZ9ZY4hMr5sPGFpQ4mmYTpNh3TZnGCsCH5V3Fz661JjB7MNmXpLxrnkkrEoXTeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inkf9SyBHVds5XcyH9CRqZDMr2xs7hKy13VedULSeRdzfQrPTT5A48HKa5SBTYCKDoA3oWkAv417Ug9vmyrkoCo",
  "key1": "3APW5Avg5Dm5FCNWAfcZ5PBLE4tQM6Hmj9ffaPfJce6EZcuJwivRAmhSR9E3TSULEm7StD8Xiog6btNsVMDhJqdm",
  "key2": "44R6DUkSZVFktGqi7c34knDQjDx5LiJuQFhMkzMgZmRJ83PJvPqDhxXXwMTVhos6bZ3i89jEqp2uJMyTTtWUkKfF",
  "key3": "4PrdtggZrYAh6T3MpkMRazBeowZJYNQGdqQK5jNSx1Xmn9UZKnWXn5QugVznbWoiHWNaHXY2WrEiavXkEx3zothV",
  "key4": "2Qw496tSkL2DNgsfVonFgP9bGikeyFAmMr3ebzo75WXNapew3JmfNHm2FPJH5VYufoehwyk8b2XfnsNwsfDe29m8",
  "key5": "33375hxYuvkwrrTVm7RFBtYxntRmpZ4AcMDaKy3Kk6Xvsob8v69Piz1ZYdCbC7tPUj2UoagZoNHaT6oeimd9irsa",
  "key6": "rwkWJgvWWmjkLkbQqyC9Dy1S338nTu51XAvdyN79EHe9TkqAGMtQNGqhZervuPNjMBPBXtMQrxhqXBksvoYK86e",
  "key7": "3n4nx9EcKdLPNjhFPp91TirWkt5c89GP9nmc4WdagvjEH22ivrHj3L3QBaT7kTuuNZRQYGMhXVrieDmkhrM6EKYJ",
  "key8": "2X5jGDXYA2AMEycYS4sbtgb74xqEsULtKzb9vbfzUZF2x4iPaJ7iPhANaKJ7jn8GMi4edG7LHtQDQbAuk5GcUmCV",
  "key9": "5J1ktNr3iyw8JGt4YRTSucr4u5QGUYwiXKncSSN623NvLCDxLDbMZTxvv3ZysdoaeFEfzeJkksySzw343LueSfy4",
  "key10": "2PcGco1R9G9uWuYzFTrfPfJpEHXAvjfFtwbC2nSi3VTHijfJict5529JSDrMXNrAc6EBm3optvZBNCJr5zCxd4km",
  "key11": "4YLJymDwDAvx536wvShkQVUyQuFxxbtAmPapM2NyMKMwd3P6n2C8KAPuLQeLaxs1yNERgdnAkyDszZooZpWwKAZE",
  "key12": "3KckrpMZ78i4jLmaT2EpBLWP8W6rQpYqhuSHwPhX9iitJDNumvGPpLDUKSW2kYVFQqMUXA2G6DYwmZPYhVVH1CFC",
  "key13": "5DvUzuWEWHQtnCWbVkxTCDbGXKRvyzbdmHf3PpSNmm9cNhH1zqPZDTFVy45oebd2zitXCrBM9omSRBEVsWu2tNsp",
  "key14": "4wzSyUdW1ST3sCQss2mv5SY4Tj5hbsaetR4DftNRPGxCSdNmT2GoxiqbezvwkEoe3Tdb3Ku98Dr25a1v4PqSC3ru",
  "key15": "4RvcreYpydJ6tktNKHCP3y3b9kPvn9X4jyeB8RfPp72vmpXdsTNdo8kh8BUa2UAJrLZiY7ngVCubHsAioiwGghoG",
  "key16": "3C1aC3oKKiKpZReythBtfVAzM7qQ4PX9JHrj7mDqUVZfZ1BK84nGH6Eaa5E1w1aayhZpbGvEXdutwyGeS3N2cFSV",
  "key17": "5N3gVV437jcU7JkgBw8XKWH5U8BZLEoVFJkiWX9K7w1phmHfTWavpuJDNp1UKpTMiHvWK85PFjBETPaaYFDzuqkS",
  "key18": "5tV14XbWZ1ckRtKfxqqgQCmhb3549MtiFeDgeUFZBZ7uZxNdsEBfL22uc45dgZ43xrcemcv1L2CQi1mdy8bpmFLN",
  "key19": "3JPZ3oSoaYMsb2qc9Zb1CqD5o9Pibtq8kfGt6NX9sNnzmqipjG3PPrUPzEyyGz35KNEUgtFqTiBr74cENZURY5mS",
  "key20": "AHT2h6yJdtDztKiNrDdJuKsr2VHgcq5WLfD7HprPkoHmkLJqPMghgZD3CBhEhr5nZa8R7zohVEsyfyTQ6LA2xDt",
  "key21": "3Py2oEoDyKa4G11fTvVW3rNu2wjjs9btJL43YC7NZ2Z9m21DowtH8cbSZCjvNxP9yPoNPmFahW33YnZmz1sQ7qkF",
  "key22": "2XRyMaGNP6jW9mArC6JojGPZrp8URCCuWdrP5vjKa5rY2TxXD52d6VCqDDjF5GUkppC7LsbNWzzP9t7RmhXcyYCS",
  "key23": "3Febvsequ7QvRQ1F2DUyLwG8H42V61gygNviXBV1eCVKZAkiZuCPY5q88GtxmEVMV3iPD2otrrEDksa37293Priw",
  "key24": "4cjnn6wBzNueHw7Sbv3dQTqprGZUadqcCNJh5AhgCBowTotszZRRCBmpiAv4B34uz1e3oeVo3KmRti8WYcfazpwD",
  "key25": "4MN9t9dXqCKXn28UvZjDVaK2GvHD9XLiFoUDQRTCc9z5y9rUyu9ApaS2ppZZPujg6iDJRDWPM6RHMunz6EhZwRvK",
  "key26": "3PWFh3G2d6SVnAKUUckDZCsJhkayCswqypg6ohPs6DwWUcWnLLV4sdfoK2wJqwh2TsyVdYh2w6xYH7DvaVtTRfLJ",
  "key27": "zDfYXRwjWfg6WVvh8Esxq4yHzAFrgYr8eSYuH1Kn5ovy5gUUwKAKXBmErGyiVUEc5TYLNqxCnUxKcEfU1RF98KG",
  "key28": "321CdYS9P43ZuN7q7VSo33Soo8Nj9uRJV4oNZ2jUo5ao24gsuFXVbwDpjjnyEWBvPMYyu1UUXNg55iv4CRfSv4Bg",
  "key29": "4eBk4a7K5Dj1swJtLMhduRXvdtGBJFb8Uip8Q6W2XgfkybBaeM4ip2Q7nEoko6noZvz27j4Q8rZEu24Cmw8HFan",
  "key30": "5RUi9G9AArs1vme7DKbMqwjTtA9WarH1PTrKPUBKmWpRWyuqxP92RaBns6eqTVG7oduvhabQsbG2MkPLaMhez82b",
  "key31": "3NGHrqPQnPvXo3aTuvtWWVLmerH9366SuX6yJbCGspkpNFENybFwp6rUscAwGEA52x3WB217T7nAp3JsBB1LhuTA",
  "key32": "5KE2vNsGEqrTfGZdiDoSTcYbkpMVKcexu4zwpvxMdKnYYekSeX6uetn3Pkb3qAZRSoVoGWe8HrbjkCWTx6Fy55D1",
  "key33": "2GE6cB7f9mkUFfUJySgefNaxrD2uYDbbbNweMfNBuXCj77L4kwaHkjkvUQ8fTAd5QrQ9qTmYMots67gtEdH28A5y",
  "key34": "21ADtHeXLpzuRL2PvrqVsuJ5aiKsGTe6X49NxyoNTnTm4hr4kbUgtapuLRV8vuVzdA3czm7h6HEPDMgwJzEW4Wgu",
  "key35": "2gxs9m8vq8cojLyx8UXaJYaK44Q9S73bQkv8j9hX7JZZAvCBvp3WKndDGiYdBXJnyfK8fkdrPNURckgjWQUgT4uC",
  "key36": "5pY4DyjZqLUbygvK6A9qSuKSXfLThAtF3Gqk9v8wgubhEarFXoZMaLpVtLXjMKKCGsMR4E5qPnPv43viMQgsvpZC",
  "key37": "3C99AwkUGasaLHhpK8zryoXYCesxJS8FUNWL3XYcYdzSpJ2aKyTChcRU3279kH4aBhBxCEFM8cVGaMCpNdbCxHn7",
  "key38": "21XhN9u5nVD4hMdV1msDzzAhKTgLVrtJnTnR44buxeEs7o7Co8U8WidRdLpQDYp9xko7QxkFF8d5yzETqpZqjjnN"
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
