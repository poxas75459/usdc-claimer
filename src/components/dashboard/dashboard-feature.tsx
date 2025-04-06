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
    "37nuAwyy7U72freGNmA18293KbqgQgVTnLKpJ2jgGwsxSzWNBsrxtqjPZ1Q69Qqy6KznufpxvS1Wn7UEeFBzBe3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTzWFNhDXUBwADuRei43eamfCDqykh6DHhTvEUwdyAuD18pM1YMsoSJahotDtkA7cYtq2yeSeAfpdKMSbCWY9ys",
  "key1": "5Vfm64KVbxcYNGNX9JCR52hmUBnHa19BXmq5YDcvz9Q3QA4e1658NogKHGbZGtmqjXaJfZGFq8SyC7G4mTqevM6Y",
  "key2": "kRnJecMUpp683TAH2J1JzviPMqftMSDc7kSwfFrXCWb6wyQdxWtsXWHi7DNwT32B8SFbHvSa6WZj1PVaiDtivK9",
  "key3": "3EpcQYGo45SpDbHRxUgLbWNVfNWwY6K7xdCegAc3QULNAF4FEsvkhdch87NNV2YJ6znimNtyEeZXs3u6T7Nm6uuv",
  "key4": "5mtpHzmyJtzMURxuKs2wKiZSQa4RHEYRELtayQrXSuenaGrtTKbDsZpJvMmRW11QDLEXB5xAHBp3st2upwejvHqC",
  "key5": "55r7A7FbkxprpXKWdX416sPgkkqmXLQ5ZAiLAYVLMTe5Qy7XiP3xKtErpcQ7Q5deDGERMFRGgcDf3nDRX8rNJk6Z",
  "key6": "3NSAWuWnuc8gjUZcgejUPtwTo45Jtj3SPayVs6KHn4CNQnobWEz2ig742kmyZ14Ws2icfiQSkfTaLaTHr35Uvutu",
  "key7": "3ccxQTh57Gb2hFPsiseJuLK9x2naBhwzkcrsSzgNxWFjESbSsoQsbdTBwWrnXaSSNhG356gK2JdDJj5ph1r26hu5",
  "key8": "38ZZqGmzRpZEXcWofVK2bPd9Jpdm8oMUBA2EAgecLuHfRDWm3Tq5ht4UiZz1bVVfp9qUzSnNohDHkgiZscszzhxB",
  "key9": "2DJMwMmebZBAijYWtCN3tr8P3bQRZzKdX4XAEog58VYnL4apUiKC8UqMzw7vKxSqTtAFT1Box7msRJnJBtju79LJ",
  "key10": "29EZtAPLu26VLL6UPoLBtFwjJiLyWMiyanGBPWD3TiWJqB8pAfV9NKxeK9WsvdzEB8Gx1oywd5VaTmfoAoiNDsPS",
  "key11": "4XpVuepJJ4QJuGxfbnrc26WDFzURV9orR8bbULumWeqApghvTGTQHX83i4QupXpCps9xnEELyNUso7p5w6Fv2688",
  "key12": "4kiaCC85ogWHZxyGi96FpQCzeqzy4uzVRerfdm7cyLScLjA3wFoUUts6g1op7wihCeQvCdFdukmntpjDdKCL41tR",
  "key13": "4znjjqREZ6hcRE36yo52Cg35QzYE99Nuk9UeH8xCyHtz9NNkAMCXarkPScre1v16Lsb26X4Afeqc8GfcdRwpA4Z5",
  "key14": "5ET4Uvt5cn9H15HNYGTbeRnAfc3D5aFL7LTPPGMTJhnsH7GbjrCoy18esGX68Tg9Dr9JaRqBzkBvB5EyfkvpuFuz",
  "key15": "3VajgJ4T7uXPXN1fp37gQwF9DKzYgAP5ju69CFFvF1zAu93uXdvfyYRaAQN2wembmt7o1tmNuMuDUoJCriRkeBpv",
  "key16": "5X6DznNw5uZVTBLhHBzVPDpEziHUjgBiEwQtdEFw3jo2DSE8Lmu5wnUa5HLPURKhXriKjtq35Shfya9tj4EgFwUD",
  "key17": "1QSCDJ7ZheHBcDtPkxSHqp1YU64DihJXBpgqyjXypuKQsS3MNS6H9FwGFa9QY6pK2qf6A1diKAicyLRba4dxfGM",
  "key18": "3EVMNTNuKqFvF86RvoKUSWZboRBtFSCyw9QYG3RCxjrdXZ99Hm3E4KtVe5PCuTvijRcCkWuBXec8cVnHtuKtNjnd",
  "key19": "52u8EbZvihv6hsvkMKN9iDEK2bPvgq5b7NV2CfeXxQ1sjefhkmafd1ja9HyuhbEgjugTrfLzi3FqJS9ykZr6XgMu",
  "key20": "5gVdjVjRtto611MfXk7hkqD3x6adyB1pduxgYQcUbVftxEdXykAURe7ycvngcsaQ8cPQKtxptavK1HsRDKSQknGm",
  "key21": "5NeDnU4AZzM8QeNYpUqPecb2wFoCv3YPeMMYmGnoe9Gt4wkEjdUASyNveLSerjKiiCZm9BGggsofL9vHf2hA9C8y",
  "key22": "5E9yNTEHc5W7Tees793YoaCP9VxsEwX8vVcYWZzpaY2kjQseqca1RnFFuyvtgEdpBRTqtBm3oM5dUWKRqW5v7H7n",
  "key23": "5gHVkFuXmSRQfk1JuqXXc4zhr7sCy6th3qtpLyXGwtKtt8zgcmBKQ6paJpzBsd9ze4Hk5SLw3zqgbDcjjb4Lm7vn",
  "key24": "4H3fmEBG964sck5PDvtqHdT59X63N1NKJL6w3LNTFGDBxxDawxH51SzqaKofFeqwT7urkYDLyRX12jgpVwynAiRa",
  "key25": "2iQ1bnP4ZMbmbhykEiEYFbMA5WuxUUX3p3QXy42XgcJbp5Y86dpbB9LJFERCXv6xnAeLKoBqhNWFSZeGZFAWkhha",
  "key26": "4ohVw6R3Lp4PTgxzsMGmmZrvzFMgWkvwm7matRFxjhRgj6K8yqkCSU5rJ9TVEaRXHoSJVDae4Tu5xxFNzaj3qV9s"
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
