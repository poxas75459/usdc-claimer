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
    "49gQgqJsF16awFtU1A32jxUPCWrfpTRR87gwpWYtR7vM6H5N1pGJWfysdHpQwFBrWrnjY9ntRVbAJs69qZUmcNPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sW7hWyW3zAEDGDz762BmMbjMhfMvrXg5fvX9o2pUbXhr6bTRpGxbq3QGBfAc5EdyZFQS4TTsoUv3xuXHPqh4CCu",
  "key1": "33USrWLNYm3DPs5M66nMHHhpXhsQvJMcGsiwVMxa1VdGXqTxC4oe71FZi3VDAXQ9Hn986ji1ngHJKsba3Hav2svm",
  "key2": "SrFAZ6SoGAqYKfSZmCzRGKfqtLJknSuZrYVEg9RAhnZvfgKeEAKhVVNx1fiJPzpRLXoDxn61C8AZgxG9aSk26PC",
  "key3": "3sjsXEP9ZVnN4kwvEQuQzN1WbF4HnKJTUGE3jy9kMa8xdQ6LqGTvH1VapHTyxP56qEtuvHSNkGvSv6RAPBQbq8Vr",
  "key4": "49womVVzRy1s7xMP14gZwBSr25TEtSLfwQzwqn5MkrD3wTftRvrfKxy7Tpr5LezMqnRr2eeV4Wz5rtbhngPYeZtv",
  "key5": "3Q5Z4xVCYr1sXbMjZooCa8BAThb1iSVNPnpd7XX1Guv111kSUtahpNdqGkbnZ9JUm1twRg41btvF3MAALMn5xye4",
  "key6": "2qBzvdcK7yKbxP592FHvmmDc72EhJUvMJtviSr9teaAYro5To3Qm2PPNWiFt4pfHditAMbKBi4rdmdDn6QeF7TNs",
  "key7": "3QgQcyqfrSZWoLbXN1j9NM46Ks3Z4HVqvi7GRFD2rPhU8oHWuJfz7i768cZHebPaV2yZwxSPDqfn5yVwuzEmctRo",
  "key8": "3hgciuknx7pbBFNiJevXSsh4zdyV4DFV3B2ZHBsBMbjuDJFXM9yyAE9RJLfKqGumx1JhyaCUgo6MYYeMrV3eE4FE",
  "key9": "2mpZDWUhnTAqdPDzAX8atbwqhq4LCdcUuK4bpxFigDWKBW2EA9mjMhvKhjYwYCwqra6yhkENSoirLU6hMMbFtBuo",
  "key10": "2vhZapwpRyq8WKyzoX5GDahhqonxNPwMfWX7EbRNAgsrLKkSEdby896W59b9hurBnCEzm79r3yYSViDs4744ApUq",
  "key11": "4PtUvGc1LTeqHhdm4PSU1tDCTMmRcd4GbGPiJFdrNdEGAVy833Yf8QGHtju3yQajwL8vhN9DfDRdMSePbzUbyrsw",
  "key12": "3PVPM3uhyM3xn1NLnJJ3A7LnYFL8Cs946YzVJPs7aHaqBT6w8cyDoAyMetTKdncmCykg6SL8vJ7MdvonbDpJHZvR",
  "key13": "56ck69EfFu4fLY1pQM1Gm3tAs1HT81hMJWD9TWcUiA7zf5hcSSMpvKkv2s4VfV1uQb4eKfwTT7JLoCTaYcw56ZsS",
  "key14": "4uAayByhEJagABXKysaD4mYg6nVUktZQ5coWq2i4Bx4zV8jknp1PeqGD7N9v31MWUocuKcNeaiH4AGsFyoUYgRed",
  "key15": "58sBmiVFraZ6EuZtFF3VYoCg33Rz1cimHvedaTrLvzJHxPq5YXwzwW2JxFMUTG3hHWVEMhwyxXfKWXiFDSfwjBTC",
  "key16": "4atWQcowZCKUACHyHuu9Acp4d83Vt21xgLnziCMKY22pYDrXMmVUNuS4xxNoG8c7RCNKutD4TcEM4fviDJFQ9oMN",
  "key17": "3K8NiNJpzhUQjV2YtsvSMDbLEnUH1Bzr7U3iEjdtFJGEdcUmVHQMFChi5gvdvLA9iAppypCyEtwFuR2PnJquQKag",
  "key18": "4Y5BepKwFyjbFx4R8JvymPF3KR9RzEEfGss9mWBxAbrtrpBedi7oKPY3oQWKVzh37RnjtJDMfmLWKcndketLWjtG",
  "key19": "36wexV5UF3SfHaRrvdd1dFrKwHTQdWmAQqP1tTgixZYNgahWBpaaXNETycnkKgoBmMwQW9LH7mbENqEyUVMtkBsm",
  "key20": "2yYkcdUMjfyvDaf8SxmravjABn8wiCsirUBY3kNhFkDGjjJAZtpFXq72u3q7tUPaZD9Zr5TMMH4Pkp9dBKCFq1HY",
  "key21": "3RBy5Zw9Z3iLbzJojtFFyrs3yEu9NaddNeLL4DTv6E5qyukpP6DEQgMFyCsNk7ysLhDgLyPZNxyt3AaebZTGFzUt",
  "key22": "2UQYS4beEVfdAZNhihJQUBttoMDrDmKNdemkCcP3rbQwHTKLJELmh9gRhuncEyNtJHFRyzxosT55dprpZNKCGem7",
  "key23": "PLoxf9TsERu5i6tjpV4vA3kkTw5xWWVSSfZR4qs29gn7RnGvxZt2JsjTuwy2NehvfidSKLgh8598V1VPTQAmJCj",
  "key24": "4y1MEjbpGF39aHf8g6Wk1pKTBDcSot7peVohE9iKz3CbMWwc3DSbzSHWLgjfgsspqkGc8DvF4KKJvGyrctLPXTdu",
  "key25": "2jf7RhSQAzYVPHbFPyS7B178rdpDLtDD9iq8qupPynKQXYVYwP87AifJyimAa7SwV6dMEs59Ry1zAumeakWu3vz",
  "key26": "248eG44stc89amCa9dQtXckq5X1hwE4yyef4KQa6fFTT99MkpwtQCd1c5aNpBuJapCQVLFLUikzdVNjfJWVwafS7",
  "key27": "3cRupXigWb2hq2yNbEJ97SzgtxVtQDZN8X9vuw4w1tJeQCBy8ibVeaGAz36CpMMByzEGq2UxsBSoDn73U5zQ32xu",
  "key28": "5mw9Gv7ydThidXbN3rxqsjGXcQRj7W6KsGmaTVNwFBcSiybQpCqtoEDYAgQHrHx5uyAvDhcVuoqMtdCUbUcGURjc",
  "key29": "2eQ3CXq9YLMTKXF2kDVLPJZPZr1jkhii1MWdDBhNPDVQTfLPVAQPVDB9mi5sVVgkgxoopadsGiQ8vHsSB21CLZ9i",
  "key30": "7AXAs58BeTYBnCZnXSeZM4tAGwSJ791bj2LSjzLKq3SFus7YZYvTJjdrr8qchhgaCs6sHomD4LhTQHeAWELqCvc",
  "key31": "3xSV8KmAhKT6WS6fmTfPF26yVjtruzquei92RMQhvasiedAKwjbotFooBkCNBSek9pCCX82A1bhhyUKnpWVy4LZ3",
  "key32": "tfP3fhr7zJ5r2LBshFfAA4BR5p8MGQu8QgbhfJDcufkKdhjDRgr5NY3VrYvuAwZUR92hB78fpCF2mXdoVTqrp5u",
  "key33": "4wKNTD7MSCvCHoa4p682NgGAteio5K3A8EuUZ2w48BU3vGJDMbHdRvvsPyPmketmgBCtz6jXN9QCVRs6tf8hz3Xb",
  "key34": "2nqjorDr3T8ML3Y75158FQ1Rtt7k381bxELsNnAKLSZTAijWzmnyLzNaKGTzazhn5nqJXrbbWtTpHZmD4jJhxZPR",
  "key35": "2YpRgW6cU3JkLACN23uKnh4wDAuDxqSjjNfGkLGUtEyZGnrDmeBcPdN1Fe8dyJbSnNNw1HknrP5iutrMt8ivVhdN",
  "key36": "3THUztw6ZLFR9qAm8Y9xQEJaouadW2Ggoe3kdNF1nQsePGmsgrn16aQ4Prf1vH4tem1ikm459hAenoPrUapU81f7",
  "key37": "5FQXLy7PDykVGYjH8koDhkLdsFLp8cNvYNsSBYSW7NjG3oCD3Xweovi8vaR8aWTT1Fu2vWdyy4FuZ54Zxdf3rJte",
  "key38": "3YPRKjJTiQzEJDeevxC5bKercymVKimrAHbdRWrf837eY9KWPPNEobMgozdzKLLCB1TdoeaVENyN7t31VCuwRjeJ",
  "key39": "416FeHEoEuebDvN4osw8CU2KqXem4eTftQHrf7M6Qkph3CEoruktbjbZNBwwFv2sHAEVuwHCYa3M33SEwjm5pcmW",
  "key40": "58wesmbaEewsFDG4NRVHs3dnBBec2ea7nCwBi8SJJ1vJv5pMk4nReQ6NQ7oG3DsaRYVe8udu7uF1WGCnY6ABXoo",
  "key41": "4hRGWMLYm1A2UvSmXs2dGFazjsVxcyzyE3gkzu5Amd5pnwxSv8qFoMQ2mMX5MfRfBZZaF165qEC5G6sCCtkKw6m5",
  "key42": "5BQFy7wbAyL3qaoHLVg2LzxdaDgXpTco4d8BkW3FpBmeKA8zLpZeLnsc3LC3ZBMKjuQfjNfSBnBbq7RqsSoKWwEq"
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
