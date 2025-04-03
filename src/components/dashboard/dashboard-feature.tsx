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
    "2NWjqbmfPs1WtRHxwt3YdyGSqtnDsgjjZHnRsALUJ2GmiAZqxwfdyHZeJySEV6jeX9AEK5518faXfdcxjLVXUZgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHPm6i6a2npS4oHQt4ozWurLF1Fen4pud4MHcASEULbHKDs7Kizubzs4ewFxbmu3k2xc2cVu6zxEJSYqAdZPMNi",
  "key1": "5UW5Z8Ap5Bed2kz42ER1sM5RHxmTKY9wLjJ5M5QcYE2W2xHqYWx7eBAtPE1gngxXZ7goTSsPT2z2wz4AbP67GqhQ",
  "key2": "5NxrsEtimrsWzTU5qW7LhLiDtEebjNowTbeAaVqD3y7epKeQJcavxX335hce6pWwusqQSvxvWbmLLPf8dqiy6woi",
  "key3": "3PQRVZfV73Pn1q6EVapb2fSrSWVWArmnhxYKh3XyPYFhiDNLY4XSaSHbtNrCYL23CgVTJ7ReDGsGAy9JoXkW8MWk",
  "key4": "ZqLG7PxbhMYdhQKKHArje1gHstw3NudPttGXrnrS5XSjzWAfEXc5Mq55dnunLviSp5yqp38xn7wUiRoto1rBh9h",
  "key5": "4BgAEARboQWdbmFAJBDQViRQF9vdnm8ciG93dDEaQaz3ftWZNztN3dgPqqPYNncZP7whbrbDH8jnw7HkMp1GHqjv",
  "key6": "2Q4c7guX2Dcxo2UQPCMTZeaqXmEXo1o62adAHxbZYqwFSHHDQQPLBEZd3hu8b75sF6XvUPZ3i2fjftSgev8isEpz",
  "key7": "3S6Arn6SKTZtFVpRUcy2U4nLFiXmUvFgkiHRdPZz8CDKGAdXfJgpmQGAF8bFveAvw1inzzTmiQRJ379CgTiriFPo",
  "key8": "3Ah4kQpJxyjQHJHLd5Ja2CXm2m6L8CYSKyzPeqtXXfY1J41Py1zm3XrPh9hbU2yKKv6r6hqrWJY6AVJNrWqaddXA",
  "key9": "4uFbsGrU6dsKBxvZDBxPPX8ppLVJUG8Go3hapiSUvPjoEPNKS1sqKWbqsd3NgMumWf9WD41Hc9h52GM6cdurSxAt",
  "key10": "3sjaeivP2dk8QH4dptTpaEs2aud2ciA16ssu6G6Wr4SwTuoRsvWvS4kc8P8q9JcZCmTu4yPDgUPSMMstYYDKmJxR",
  "key11": "ssRv8twS2dbPhjci6e4SXxUdYkADhdQ6V5PPzRBUSoSmvnsD8B6rx1ZSDCgZoPbZGobghhDMMVpuhqh3YQhomtg",
  "key12": "37aoKZs3bq3WzWXRhs4J8iKTr5NTE9WTTDAG5bEBWmv5txUVSWgWuhY3gsg3SMhaACgec9dT9xtHo6eVsg6KJzYX",
  "key13": "3KPbFnM78Rohy2TBWQSuQAxjCmhcLBcSmWJhKctanbmHZf5Wv5Rq67PeNuSBygyxeFkJN1M9GmFaU4GLtbq4PXtB",
  "key14": "24xUhmhByC6yLddNE9FRZASh5pHXyT39eJobvyP5BPv7zyr1nRT8qhQz2AyBgv5pv58XRY3rv7nfEbYY41iSMsoC",
  "key15": "5p3AbrQw7GktUZtYmSezJvncGkYPPzKziKh3FYhRgWz3EnGKL4ZWMW24Bjq1EY62Sk5EiwGzYazFLx7upKhf4DNJ",
  "key16": "2Pm9156Fwco4tvwdMew8kGstEoxjasYpgRkhz2W5GhRi2obXmBvg1bczCkynxL7kmCkmkVYjCBy9JFGD69PqtJ3X",
  "key17": "489FQRKLQgwSpNfeVRty6bJ6rCRGZK7tGnaLnESL1cr8hC4hfRNjiXok3VEK4ohy8rSBZHThsAwbQEfpfdfKfBY2",
  "key18": "2EUhMpaLUrKnXPQoFeagWPZqWef3uAMzYTF9QRuGzQKrQzbWBknQ2cSFhEDKPoMZZrWmAkAf2KtVH8qf56AdpKRk",
  "key19": "33SdwxfTYbr6mayXHZpTwuuWFo4FBQFK6XAD4yzQLbtXKS4K9XDbm4vRR6KFdd5uLBmvJxXATBDDdNnYJYZw1h3b",
  "key20": "LdxFr2ZwxQFmeTGbjCvEaECcvFcywhpApMQciSynow3XiW3zQwzGrBDkA3ZTDDw4jWCcUwm57Q9PazTtQiDdRev",
  "key21": "2ShmpNWqsafzyx5GGXheRPEV2Egs5rCMbwBJ7oBYRZQNCjqGSnA95rTRxGU8PtPGhqqJtKrP4SZ8GqTWPUNuRFxY",
  "key22": "3hMKnjc9JmYyBoAzmz7v2MQMkdo5wV9NiG4bMvomhcmfyAUuwZ7eXq7sk9QZSRobNhtG8WYffCmHJznPkpW1czTA",
  "key23": "3b4DXSEGv9sGksDTXkm8Kj5uPTz9Qc74Fi1m7qwqj3ranWQanvXCAj8kkwDCLCHsBnJtiXmE8rUBgTAiiqbqaVJF",
  "key24": "9xUTM3c1to6o1xosz4JGnLxezTj18g7DG2yn9q4zMfjUSvrfbFhWD55AhL6FTPQpkYiTox5nDiVB999YAvmqAaU",
  "key25": "2RafNfgpFykpVWTSjBaB8RK3EcamNdjJx7mFjjyLK9goc7LECvRPhRLDHrQzHU371rpaULNYb5Mohfj2QmRKYUMz",
  "key26": "2tGL4RhhzewVL7zqZaagYyg5gHonJd4pmejeqmYXQ8N6Pf748WEsa4pDUKFrFCW1vn2vx2azheguqUfkod54D5Fc",
  "key27": "iXZup5j4TTQfBRDsKuDaXuNFn7KTzTnHEejEYo2G68pYAiDKyR7g72KEno4zSDukY4kfMeUYSfoA2iKCinJqNn3",
  "key28": "2Kc2kHt7TjKCzZqGYhEjXU5DU5yk6UA2Sc9GTiCfnrFnNrD5gyZZGjSdB2PoHaHMV5ywFXrcytCkJxnNELYGdCF9",
  "key29": "2jD5aLT2JXCVGgSEwHwWRiT5v4kpYmqsAjs7kLFM3FTxKaDfinS5SV9zwTSthdBjzfr9VbkwCUMqhTCRx7cYnP17",
  "key30": "125jKyPUDZmKknVYwEw1fpX2YF8MXEzY2M23mHZEntzPvGQEGi3F1XW2UbHyUhTVyFcQrMrSqR6MxXmNt1t4LYVN",
  "key31": "64yt95GHSAaKgMRjMiAwY3Dfx1YVFcq84ZYBd3N4Xxa1oBP9iqtofjF9DL1pGzemyA9RfiRxeeVViyRfWAQnJVqx",
  "key32": "52o4qDj46eFri8MqEFmvLQSwZrdpcTzU8rNH7gjbdXPoELjCT87XEdSm95XGDDJdcnJkMRVBcNrm4Npbueq18ST",
  "key33": "2evYCx4mNaH2DyKZdM47HGG9ZN5793sKVc3NvABscg6u4itut291bDTJNf7QVtyHHPLnaatmYuf5Qtqz8A5Wz6L8"
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
