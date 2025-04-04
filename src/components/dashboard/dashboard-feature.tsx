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
    "LRU2h1BE6xPTxaRFnwNNTkXw5VTdHF3ELxaxfP3w2mfeG75V2S3ynFuxySwHN98LysjdZe1AJ7GRDuf15UJFWL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HpsW4mMxmhv65MinPKfaWJ2L2HGBooi3kzSbvS4zwtkwSTPHdQ6xk7HstPx7LR8ikbSHiA7UYL7SCHKMt7M4JRq",
  "key1": "2U9z5v5VzyFDMo9xPciCeMbYWfYZj68vvR9ZCYYxNeGoLS7MSnSSMvyuybLVhWGaSxqBgEiTLvLrLr4cCBzHmA7n",
  "key2": "3YQZ4QDmBSFgQgeaoGRMMotBrPQYFGfXyp8a7gXXF945nHbUArPfCAY8bDrz7doY4WxHochS8N7m4CvWf66jRk5u",
  "key3": "YNa9y75oFcJZCm2PKJotrwTeL9XFefACEvyMwXnkDZqXkYkdLmmoxJ1rP2LTb2M3v7MqkkY2oFwH2LsuBWuDRpU",
  "key4": "2r73Ua1T97kQBkSCzJZwbPt9jg44jJ6Ba3htt2SBqVu43NMvuhAfho9spvCqTz6nJnRhWmecbtPiQQfHRjXTLNeY",
  "key5": "4kPddA3GNBRgPbVXG1HAUz6chPntgKSY6ZpKf4DdwtbJr1ZfCMS4VtNZuQX4uLTHHyPrmo5YumqjpJfAG87trzUX",
  "key6": "3f2MM2Cq8JFRwp9RBHoNEbiVMDfxMxnrihUrSSEsca6X5GQcvU12dWtQSHQinVS2A6od1D6vAt9Rhy7czgte8VyE",
  "key7": "e1iBQHB6UVVL5JSYSvqDffKwojtc7YnJRz7t7Dwq3V5hgZW7A8QPKLYY76mwx7FeMXoCD2c6Za9Wqe973aXERKs",
  "key8": "53Dw7Z2ryhryXo5FHzTSJSB1BTzkbJVU2ixmRwFxNxHFQisgoC2mhX56HkiG9GjHXZEH2cTufjbU2efsfhAEfvyN",
  "key9": "3hwkBKk4RTzrodU1TdTdWh8TxZ7cM8C1FA3NTEAc8zZzch2gcp2dUbNc5rsG6iu5xUNgSGx16EZXjReSnLHoYjna",
  "key10": "CaeL3QqiGQszyQ89YhgjmFwUvS3wuXeQdmNLKeLuXKaLLxS6HbZjrmRm7vvgVueFdZYoJADmxXaGapwAxSQ1rAS",
  "key11": "5zL6oUj1qiqySneQRHGdzmxtZL7BbKk5JCFnbx8KUTd8TFyMunwjjyZAwChwqQyeFytapARLf59Xuawu5eeGgvBP",
  "key12": "572oWBVhnAk7ZWrW4EKDhiaAoi6Ux6Gkjnd3Jtvfn7LEEbiDa4GnvpCtUVQ6gkUnYnLY5EPAm3q6B79kZNfHWv3T",
  "key13": "35hbDAV8Zx5xSd9CErmgb4zUzANuG56b47twkPiJVyroNjzUmC3yZoZus9TAmQgvpTgDoqVGm6sBDqxRTnrG77vU",
  "key14": "3q6vVVVjEB4zaFMaPk1iQ1dpZ4MmAxmkCMBUzHi6psjRygmKskiMZefmutKt3F7x3vuiAoGyXhwzfiCuvUUkW6oc",
  "key15": "2768L5yqb85kRj5uURk43GiWLwwyWeFCiohVKnPpZDMqrTtD7AA6x3h2b9BZJZF5UWFEzeKrmQYHZcMXuFG69sUD",
  "key16": "5QuAXP8uFfrrcsx4QajRCas4GBFAy8MgRGo8TmxCd3iPVPfQkAWeUTgHoCpGivdHG3eSSLGoKTH8mdELAJyPcwZw",
  "key17": "2zR5DFGWVuh6ccpkSZXQfXynwU9cUKQV1XaSq8DkWyLHuGAG2gQeBbUHdfj5Ywhj23E9vKYVL2EhrqR8qpZ7Crd6",
  "key18": "2i9uJiYuRg6pScKWaKa528WPD5BUAaAUimAVs9FP9GoJvDzzUmneqLNLzohmTNmWDzzTVWQfrmWEop2hJEhZ3v65",
  "key19": "2EKqBMHGrkmVo5i8B5SGnyezdKqBvjUfchEwimSYozCZc7i4FBMTEabpY53etYTF1KV2ni4TMAuvvmP6r6NVEQcv",
  "key20": "5wFYWk4pp2oTGNyPZYVpCf7HFZU1qAuuTwfL2H14vULxZS86cCLi1x84VQFhcAH7bgboCV9rnzquCGYVHsczYaTy",
  "key21": "4Pc9vvguAgnDtKWB7bgU6Pk88xAeHmS9zqnEULjWqE6Q35H5nKeEkTuAziupTNHyeUPGLm5Uo5nWYoYzRtfDu5WA",
  "key22": "kB2cgPVHHawFdztnSdZFhok2RH5JrQhZ1e6J82gP7k742XeCeHP1haUkudcscuLX5ToHTKiLWoQwSU6Jfw8wZmj",
  "key23": "53ELdbEvmv9MuLmQP75K7yqXiHHMvP395667f4pdxrRNiLz6NWJQt3domWJ7shj4ukH9QgSWuEnu3mWSgtDTFugC",
  "key24": "3TePMz4qBDigiMHijKAr6AUz4V1LtodmCuNHZByaanT6cGLr9fr5WzyxUhYkbA6igGmD3HipudKX6GJK23X68Fof",
  "key25": "3bFqyQ2h96gfwybZBMxqMAKFJBg2FXMoAF1v4HiTSe5jjAMb5RdGaxjE53pBdb1kM2TNnpXTadshCweGgSpXojsp",
  "key26": "3kxrnoJo7g6eLnM3kRGkWFZkY7wt1QYzDFdYkWZ8ysXkrKP4Ahde9KLiPdvk84r5KXB6of4VcxPLfhrb2iSJX6Ge",
  "key27": "2Pp2anUKyXqMVY6ywD1DT8Gzjq4urxRDhs2tGCB2YzUDYMcbSu4Cj6PtvrBnnGiSY8ocKyP7XMCVqppowrfUTqtT",
  "key28": "8FAh7JmfchyTf99T3WzDXmVHuwWBuPmqqPBE81vEmF2FqphNCyRw2mCJeqYbeWT3VMJv9CAh39fr5vWtt9r6LgZ",
  "key29": "1e3zwzbcZ8Bms8C63aKDeaa41qaXCJ9SwtYKXYPdk2b1brkJ6C4A2KxQYdL2Ljr6rHHLLosqnnd2aiPgD3mDgo9",
  "key30": "4AURiEHgJLDHDeex2a6e9KhrSSN6NWp8kGKUNVjXn1BQChDdA73zyNFET5iPPkMxSMv1kCWHAMnE9fJFdccEti6i",
  "key31": "3fdpvzCs2PCbY9G7BSvMCZXSsBH4LqFFbstVnREjZbv2j3aWZWTNciLLApfLCw9tiV5hpuccsHzedhyhVzqjpxBh",
  "key32": "33wmANPHFLJzYQmzeqonMyjmoZnXuGDEdPMcgpVDg8zv9YM8w4vLdV2grMn2KHvVBRtimztBFcc9UAGfjMUSTwUt",
  "key33": "6u1Ba9FCtUHWk53BWGeBSYAvWZNKNMsfZ9RabcSb9ZzNjeMP4kvZvDGNm2Mpmw1CHwxfZLfM1jx9KZADAUYxoB7",
  "key34": "6wx9q8Y2kRAdyCYvFEqxLChCGWQxMDjTYdXLF1bo5ipCCc3E4xxv8yYVBf1XUP9X6qyryFnzW4y5rTogmmeNYL1",
  "key35": "31HgUhpZqJ7qRJiSdqXi8DxTTHNvYt5qbQenUJqoFHywADSEYm28ZBLKvsHzpiDY2h4jaUqLSst6rQwZ5V5L2j1F",
  "key36": "heAoQ9jvs9dUdHZK68ETZL2witSYrBVBLxmj78G4xBXjYj5w45BMiV4DQRm7VUfRSqNhnXyzK4AXE1RxmDpHePB",
  "key37": "mEUGxTs4eLrZfoMvAzdwh5Xjw1Dtj4uZgAE58oEefK2MtpsStXz4pLtPhTdUVB3b2YCgtV5Rt31XUDNKf1f9jLK",
  "key38": "4Nh1QagJAtYe4GXirfrivPBmTeMmg6gUxvM25vRfacaro3XtYUgWXfZ3P8aMWVzAf2Nc86PYkFdWbzceqzvwPyn3"
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
