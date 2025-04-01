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
    "7K2Ea7c97a1kakWFN1cztKXAUwmMuX3B8en4LgbsGWzjXVvWXE41CQTn3hoYN5S5UKX9dxnKQsTtmX9A7J9EzzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46e4T67UajR3EunTzaxwxSmkp5Qvi5P6B7w8eEuawzUt8qRb7oSmr1dJVZQPRGaWzrboB8cy3fuiRtKGvXSW2obH",
  "key1": "454W1CnxvmgmLGuvK3VfzKuVHi695AioQ8qKpbhHykRXQXiuxJKNn8SDg9XULLj7U2MZxcyCV4XHpvMttKAEfbmC",
  "key2": "P2FY2ngGFjMxJs2c9FsBdVfKXoQZp1K6XoLNXMAKeaKqYW7YM379zXXrW5vLJkuwNhQbzHn5tMJuvGojGGAL9UU",
  "key3": "63r8u49SYotB3bWfKFko7KuqYcVLVH6ftKkuUH83eKsc7PFReMvwBiQ6k6ezvaCTvn6bf9XKv5BoWiuWvCoDZPx2",
  "key4": "55rWta6Kp636mm5GLLF3RGoJ9y16PRZiSocSUzL39PwpFBLQuJV6hc43wMhMb2e32wY3p2qzgU5GyisQDccLyvX4",
  "key5": "2GYJuFq3yqd472TejT4DowHnnxyyo9MRot29ocJYhym75TvBMSgdEpfZD1kqBwDyiCVHKobrMQp83E8nqksdQww8",
  "key6": "JdR69rZPMnFvvVszkwTqrfaZnLUxBe2aAbWPj288gQi8snUY5HpGwWrxxnhsANXFAPUVCshGQWvarzEtztWbsbJ",
  "key7": "5ov696tkxzFCZoDgErfkt52fALUz9PyLp7M59sm7J4x6pN7JGAqV4AVzwC3qKmeFrTYmRo5dzTW3THagtJMGTcUe",
  "key8": "26GUPrykhizEWQw4h9wPxTH6rX8hiURFZV2nUCfemowFQXaCadXg5uoUCgqCLcsuqYjdEZ9Kr9inudCrUKSXYL4w",
  "key9": "DTr7N2HHGQpiq7B45YVzCbxeAFqZTjEKV89LN1jDMrjyjng4UhoiGmnnEUs13suojSd9d8q9sz3zXaMVMuLSstF",
  "key10": "vZE87bkVQifAYiYD2YfeGfRrBT8mmNPbVy1dRUJ9x8Vhei86HEbwKaYr1a4N1FARekvBYh1SZxp7em57TntuqY2",
  "key11": "crU8JaUT6Uy4HxP1CC8r1vmtiQ7Ach2MSvKaaLmyA2xgbte5ZW1VuSnpLKvkBC93Logq1RrY5df4wGj6URGTskc",
  "key12": "5GxXaTNf6P8WpZDwcikdcUfBrqzDqvkPcKddgg2BDGxiTc9PLiEkvUwnuwVMiuwaMUmKBqGrwJmSrMpgzgZyqTAL",
  "key13": "25QhUjv5HJWhf4jc5n2kYGHaDMNgz1DE5iMvrjNhNjxJsCcSosP9BVYrEeDWWqJSrKRj4zMi41HnhyVvHML1WbwE",
  "key14": "ixAnFfXvHp2CgC2uu5grmsytbhBtzcszb2oPqEMts9Wna83nRgc5jCEkdtNnTxbgYcfTXzhuZwbP8EFAcrwaHRV",
  "key15": "5zFTTBuJmtaAhZHP5rL91VHTmHK8w2H4KHszy2t9XtTD2HeYmMztpHbcpmLtBtSXH3Rs4wBmf3DG3uKUAJZHTbqJ",
  "key16": "2ezPpEUQoSHriNr9ZzXruxQGxZQFrAEodY1MrKQ5ZPRyrFxzGEgRQ6evmPPt3c9Be6tJv1NUbLDcBZ1RkpQDZhBk",
  "key17": "5MoboCj8KdP26RvYVj2Wdg2DLGcGuiwe9rsoSrNTnvP2d9duETC6W7Xqfn4YuBvghFiSom5i2pXgUoDRb48u5F3y",
  "key18": "6oxy1VHC1qXPFrnNskyPHGDyxUiMs3TqP2kVUTvNF4G67Gn1Sm2vfoAqxafUs2WJY1dyMjiQT3eUV5TH1XYsa5T",
  "key19": "vq7g5m2F22hoc2xFMUFnGrQixwzykXfKxFY5ht3rwCfDTAfirc5aD44U3scL6cyVFpTxAmWTy6sbDdLht9x84Wo",
  "key20": "vaAb29qcnBYPRHLLLC61thqgiqDDRPdVydpvY3DDQp5fMDRZx2M4dcLKqfmcQ5Hvy7admBEpLBFgbVceGFY8Vt5",
  "key21": "3p9YTLUZhytGs2J6N1uE921quUgdkXFSkyccGSE6QZ5vEJcdSaQjfHEtkYmSkmM3wx3RUTRLuztfjX6rBPjCx1go",
  "key22": "9PMBPYGRH7y3rJqrZ4ouY7urQGDdEjD4sr2CukN4cncHGSeeJfXB7NNh44SVAMxvHJs5kTrcffdpP79qcYT68nA",
  "key23": "2PWPvpyyu3yf23rV1f7F2YrYnAXw313si9Z2FioNVdtsqUkoZ6finAEmCQKcpAab9Kf9yCaeP6DkUCo8RXj5B6do",
  "key24": "3xAbDAmEi2THmWpQ1GLDP9cTtwNdbfQfsLLJi3wadrnn1nQ6HBioT7myWRAjw1cCoDzrja7h2hg7itb6Nemgdb7p",
  "key25": "2jjWpEpUSK8jqH8xSgdprQr7AYieUzNAME9mq7LG2CJWwiPvBttAoP729wWS5XLtsV2oU6bwGj4z8GfiSeQikREC",
  "key26": "5KnPfnrDuVWngpGJFYRtvvwSjJ3dP5x56cRqQpgJLM8VCnkrhhVoEnzA2YVTUMhM7M3PhKM3hLeiQQcTAmeprMbU",
  "key27": "DxKKYevmw7Gefdmnc15TX3hbrddCCW7uMfNTfJPuVUQQ8fFEm2RWpDrqUhA3z63Fj76zMEQLbbgkGwfgvjrb5Pg",
  "key28": "3Tx9b5EWaD92QnezJXof1q96ooZG2RLaPvptCuS3STpNacWJSPcCjLvDSBM4W35osf7xQkTWNTM3PKWYUUVzxXc5",
  "key29": "5iBrhYb4vXBB8s5AtegmQBrrpyVkXMFevmkbXHRxUVpu7AMPVWCqFdGGtJYopdQ5Zn4yM1FaH7fDCAjoSq61iQL2",
  "key30": "2gPRLUvhWAhSWzDFjyTuCiU9rKci1iWKKFt61V3aDAQhCqzPpj1Zm8AvVeW6753X1fA36bRuNmPREKi6PXz1b9CK",
  "key31": "EWq4x7xZFKDN7MSaWmKAzZFyoECu1TBJZ1JS1JvFqr1t72oufGhPmahZRGNfQ3ZFGeDr5W4R6uMv9eBTJDAm9ne",
  "key32": "tu4TQAr5p82zG6YNjMCp2Gdn666cSeQQfAqnqALbNkTPr5SwE8PyCaWC49DzwKBYHzWQ2A1Kz8C81QJhVbZTUyo",
  "key33": "5qwqSx8EcVRGN7nbjFH9JELApRPgKaGQxYgTVHcb9z7FRY4M5DynGyjsz9B3UWMrvMEobFja7v1ah9iZ7X3G9TdS",
  "key34": "2j5WkHNGdRG3b5ZrKktu9HqVudcag5DLPHEe2hXYKPxxSNLe3feuioBiZyPhYo1WnUQhV6Pi5g2NkeNmpamsCQWP",
  "key35": "2F6DXFAGYDV82aBPfdJw4a7FTvgFqHZB53hV5zyyi5SM21gjHEV2oLN8DgiSGVVMPPvdGDQ1rju6MDkyWMitfWBj",
  "key36": "kaUsFJaa4dsBPKerS3VzrUarVtNpHQMokSnHggtND4zsBwbKTPa1KQda15UaDwckFh7jLLRpncfgJ6nRMuS9Z4t",
  "key37": "37jhqujhBTDGVqteSdK6ARPq7jiAAKyQ2cCmKPQgJDfVJcrSECpwdquReWe114EUK6jqnDwZA952poD15BZFiePt",
  "key38": "3epwntPj1zKDztgcDZK9DUqRPmx1jZ936aqQTuWPRBNKDpm388V58eMBfSmsDstHKHTT7FYwWFzatuQzDpsbfNNZ",
  "key39": "33eEmdX5p54cx5iWLdTrHoaqyoyqxZiVyonYnCxLLZxike3H8pUH3iZcViiA1v5DDwh2Joeh1tyM6hwfJLKt75mD",
  "key40": "2CzFyeEPvGex5EPHAjGBtj2XM1YXeMvTbQjMEpmekTyrWMbjo7ErwQPRroEY1FthK2MDZciBEmrwJmz6k9EEoZmK",
  "key41": "5yLs5oCsyKdkZ8QiKmvZpKAg3LUTH7Vyy4PWm2t3TwivBmq3yt6DftDKFMKjEV1V1zbJiSVdjefCcANYg9ZpMPtH",
  "key42": "4vJZGP9zdxz5ukXAWzrxqNmHp9tMUHTvUb7uF7XAfeA8Uf82fej8yUFpvD3jiuXkjWNJWoyEHZ6aFHaUHavV9vnU"
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
