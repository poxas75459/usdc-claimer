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
    "3BaESsLNrRrzr9xY4qPMJuhskjCiPjQcv3aAq5M3GsFYrhvfW2p1mdnLDPSNYGjv1n6pqUXhBKTy1R5wi3sjudts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PbJWdovV3hnXmoneA7yuRLAkvzRDawMqKEbsdGoUAytxuLG9K1GpAqcBswbeNP1YigZroPE71TELvy8EG7mwrvL",
  "key1": "2W12D9GBxTnFjahzYeFAkJ7FWa93LTDKeQC8syd9Q7DqYpHLwhE1qCH5Y6QdxEi77gaNBuQvvunxjqwL8zqKgcqC",
  "key2": "mZL1RPC87kZe6LgXof8XPKNjUKJUQWPF8upKRLPm72bhV1aNfSdcYJozRY6XkkMX2wXAyx5GuAwiTgKdYHEADMo",
  "key3": "2tA821wHcCpRiEMY8q1a34sMGEzGWyHN8DQ5E9SAUoSsZqpZCTPs3H4ayaY7H2mVJTN5pvjjuBatmYS5aaFVgbtZ",
  "key4": "4pRDYL7uxkYrjXiZ2A8vJDUvz5889ZkX5DYGLK8dAt21jt3NTcfLn7e9mtiw9jonxzpXLgNDVcKjzAiBLtQ2AfJX",
  "key5": "3c1yQzzqtscXdUChk9ybfauGJRePDh13SgUDaWZ4aYAjphSFRRbg1kcEdfuxLRzYFgHbZoF3qJXZndJPEdRDBXFT",
  "key6": "59j8VXLW7eqp625oipYQudCYidpYCnj1McBTo4oARRwEQo9u2aPjEzacyCvMQHSQMTNifzeaXLdPhH4KfY9EjMye",
  "key7": "2oLypjaMozmpKTLW3YecCKaA3QAAVFdm8t1jkkhT8tWvbYhivk2BKJuqnEyDBpqfxTtmm25qrxinRbY39gt2BpX4",
  "key8": "3ZiLZH3zLsiHVrSPdhYssnidX2Vu47VhEUwNDxaVyCJUdwvnD3q7QGGTXt4wxb5trM5yP1n2YkN4DTwsok6z7uVY",
  "key9": "434e4K5RcDMF9p7chWnNe7Sf9AC7DfbApLSvgvWe5tmoLhdBXyoxaZNhVksi6woYTpgfTHrgPP7WScrxaryrvnY7",
  "key10": "3Pdpnjo7mMehX5XyyyuKh8mHtptn9hrQjsS3caAR9Zw9Rb3e1E2hb7fKVd47T3mywvhCgtUM81RWwsVQDmsxrDk9",
  "key11": "2BeiVyzmjwZGXHECSup8QY49VQE8G2wVoVqiTyzS9KwiD8MpNS7d5KRG6HWjHC81pbEao3QxLwimaRq3kqFACMWM",
  "key12": "64vZqhp5AUFNEeB2gEohvfMq3tJwXRzxLxXaiRhtKDJhMVSTGPvK7a6ZswEHMDiKjfZQaBE2VVFwKdiCxZ93vgYj",
  "key13": "2UBrJ2jyHujEdJyQg26rnXonKMMfv4qb8iNTQN1cqhhcp16gqdaha5ggDw8ghkLAWRWrHyDM4wW8NGT3X1wUz7M6",
  "key14": "2fLUtYeEAYbXymqvDm4Jz37ikyXq58SFhJxgtukjU4NcCVEuSqvAnrpjjqwTdmWsuEdwjrqVcjdmH122sJn29uKK",
  "key15": "VHKEj8pwQZ1ZhFxsnmSQ8iNw3Vky9TwgNu3WSAbxwVtLpSFkbkpyTU8ZrbgoFocqCN29nXVMozJBrj2u2QWLPzn",
  "key16": "2tQYHLtSEbdNqTRvUj6RoiFWAo9oAhm3cURWzrYogJGPZaP31z3tiKwvxpssDyubyUwfoB9dzGHyPsKo5DTQqgba",
  "key17": "4rCCKBbBmL49P3zHZgNJTksoKMWBZ439otj23EUJ2q4ZASYKLyAHcwutCtTBs7ZeYkDpkaEMM64MQqeTSinKobgA",
  "key18": "5VFCPHaci6UyaREMv6zrHSkNoDLLTF9Aa3cHnJWXKKu1vzuyo3umPRgsKHWUHePu5L4TmfUu6oJm3n4d348CPWra",
  "key19": "3wLZJdkeMTHDkGhSUMLs3PiLfvKarPDvYzz1ez6ac3c3RCLDrE9k4ANwnQmaoEbBWRUTs8U6kdbhKNskFyRtePj5",
  "key20": "HuUENyGjZnn3sxZg6f64irt3yW15Lcj8FyGTDyZoWwfxH6YdpoRvpKhqVfdjxgR1HZnWFB2Y9FHxyHDpAioLVxd",
  "key21": "uq16TdSFofT24NSQgS9xMvwnAyMV76fSp8yQMB8k78UULTHCHbhSsF21pnFcUd1WpVVMz3rzuZLELg56gqRUAu6",
  "key22": "2DxowxLvf1BAaUmvzhZHbWWC7E8DU1KqLuXPQTxaKBXj6TsaHtoF3cAjk2kjQHTuxWRygwmFZuUv7F7FXSnnudDx",
  "key23": "2bdPPXxfZvsumKPfN3zCMoEgrfhyBde4K14df89d51Hrjis5kg8LQoccWhi6r5iw5ZWtpL73xtS87WxdgndYRocS",
  "key24": "2YQgp4E2GovijWit8KaUaPhUMMa5naanWcqf1iq79bY6qYjw537Wf5kTn2zoDQLBM8GFdu1F4tahUFHpBuVMKZd5",
  "key25": "5J6W6BnVmVBQPhKJJ9x6S3zTCZjWrtW52MRoqgoGWXsyzfPv2sdbGzWsGpzsgsHnyrMt8zQXGa6b5xpSQvz2HkxD",
  "key26": "3ZveCNTWqoWbdXw6mv6K6kKmRFgMd33SwpBkhEzK7MCQv13hbifrraHMo3qGaeGSumdnEMHqM2DR6vc6Z7kgD6qE",
  "key27": "3dVqN8VTZvkb8v1Z91T4KBgG4a27KWK2PHtg2asd5YmYZWShPdWaduo2LAvB6AWzhGdJYBVSn64NhCZAQ6VXBegt",
  "key28": "3sDE9ogNxSS9gkRsnPLRU1JuX3DMugiUAJpW9etrGUZNbj4K1VAVnxrBn1niKGVNMavbY72tmmCTHVGH5DE8BVL9",
  "key29": "3abHg6S6oEsMHS5UMSwEGU5QQxyE8ZHPuGexyB1UNNBf1AWsKjQjpVwf9G1NPb7T1zunDmoyFmTMuqgXwqMQvCAY",
  "key30": "2vrHzWM9VUNVmQjosYf7CFDc6PdXyovyhXwoEVuozs4KCoGRFUoUcGAgop4SixDLFbigGaMGkGoZiKtSV9TD6VTG",
  "key31": "4VUesn5ijskJjTno2UKgVVDbghi94MbiLX9UvVHoxzJrekm4s7bTT4TS986KsuwFmc9rpEEURoVjSEvub7V6gkiq",
  "key32": "3WHaCnWsWAthHMN765HudNTQXB9d2mtkhaeBuRbGj2rUa3T4YTGme3Mi9jtyAXEEvA1HkZyPmaM1XwMPb51UahGZ",
  "key33": "5YBypXEQtTcfTrdq9oCZmpnj1UDhH46Ln4bQoZ1FiascdbmbsCQfaX5bXq4bqda8Zy7dkHntG1BArE7TQeZT8Kwu",
  "key34": "w99qFRGKu5menWnMZfGiT7s7N6nL4tLHDstfnD3LjuGH2GHAhkBjaaGRqeUXwSF7CeRqssc8HwGiFFvJJmXmYcz",
  "key35": "4dmhvr4YShsXfjQCPxiqgF3Jf9rMpiRqMSuZmdTqBJhBPgNR32CzMTeKNC2AuN1fV85S9GxZRwJ9ELbXq153GREB",
  "key36": "3wtienyAWnHKKydZVnKdeWjcYdzCynsdoXd32FjgJxirJsbgf5DEpixDobKM9TTKyGqHBcyGMyf7Szry35t75BeJ",
  "key37": "5FhmoNjCCcaNL4Uf2x9fFjZandWpkcWobkjB7gt4LseMeSfneEW4F6Rt9NVr5b1S3RR3U31KYLkYJvf7WRontnKh",
  "key38": "4D6z7KUAMgVeCwytSbtiNGeVknuf9fpJQQztZH9te7sZdS1AJx5YGoj5Wa5mCUwqdxRGWmtshMcks7yXzDQqAdV7",
  "key39": "5BxQf98RJf8yPXRc29MRVrUDk4TZDkcr4p3y2HVJzFkaRgQtERaYgfXu5LMeVQmsdDFAL3PV9c5r1ziSLvSnwSiJ",
  "key40": "Wo6HrDHQ9hnbu2XmNzYp5CitRWubU22QtXSFMvk8iAyKm8EApnVBfbnkHjExb5Zj1ee4ANesJRxx9GaeJXd2XXx"
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
