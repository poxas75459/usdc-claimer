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
    "4FxujwpQLMMAj6Zbi3yUJ4z8aTEjSn1rNDamJeg9kkyv4C1AwrbXrTpRm1Fc7cG7zEGmNT6wALt2H5hBYZv9jRfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5WsUVA2cpVZwYN2WgvfYhawKb5owqB3vgCKwJLJRPnhsSdYtwXnYmEF5cvT7K31AVQuHVguhLvdm8BW869MXss",
  "key1": "5iRmxmLpLYzx94qFsRWZ99gsNNoqF2P1VutFdvpLQKpjSxyuu68zxGZeYe5UrnnpiqT6zibTLf9GcdqjvZqBXMmc",
  "key2": "2d2Jc7SZNZbEVBvUvEkLJBrQ31K4E9VE5LGGbGZ5CdqmJWxUsdo75agq1gHMBhQZvQwE4z2Yd2gzLeR7g9JuzDAb",
  "key3": "7gKz6iAiMsBRrc2xQdfcNCqgHbMxFEjxWK6yGZLNmqZyLmxh35sPkJoMxYmSXXksA95TFua3T1RiQhxJH9tKGEW",
  "key4": "4xBbmKHvxe6qZGiBKdgWDTFmhS3PWanY7jDSg5ik25RaAtKYmxfMjWVzHqrr5sa2M2dxZf8V8hmRwcM93Ey2ECo2",
  "key5": "3TRfAUeUCzYSfVQnmZ4NWasMHnJUabNamCh3Kmr8RLHu4NaWCJiSvtZJpJTR8A7kp4xsMgs31h8MMKxsiCyWsvQy",
  "key6": "49VRCqCszE8iwdCgF4eyMkNW2evtyuDHDZ6JoMWjPtsaYk7MzHDZHSVbw73RseUwtfSq3JmjhEDrPrCFez8oHb8L",
  "key7": "2K8uX82bxmaJZov1jCEayLo3rR8SczHr2YZKk2ozxyALJoafgzDMi2ysyuyjE5KhZx4ewaVtrKJJfbSqCVjKv3oj",
  "key8": "5N4KzKhV9YMzvhqr31c7Tb1EnU5EdPBEb5Px8SPFNEQ491CcxSLoSeNKAw98z7UwF9xVxqQHTNwn9cLR4kmADXbZ",
  "key9": "4HVqL72UHsouqq3LpEr3rhaWnRZGSTPZZRZ6fih4abtTmYBtz9Y2YJCScGdasKWu5LpbMvoHSBncyiUKmhjAtKVE",
  "key10": "3591Nwcit3WWGoqN2NGtN7nbr1W4VNtUwoEpKzCtstcheKZDoEVxDnGySXEjPbYok4RySuEf5zQiJHPXNf5WLnwW",
  "key11": "4A2FP7JwYaasCRsJwZdzyUSXMv94ZAjLLfZ7yFzHRy5cKM3q5PrmPopFuRZLkrpburuhsfUGfgAvnJcZuKaYEH6N",
  "key12": "3bGLzybtM991RZcaskRxBPWpGcSbrtUY4amwqTqb767mYeizAgQoU4SQ8UUzMP6P9ThxyiRpBNWj1tPzuheSNmYZ",
  "key13": "3shRWjwN62yuic6U7kqHLBB8rHN5KHaHURaqFw3hgSuuCpJyLgKwNomP2d1JmRXGa9YZWKxGtCvCL8MWaJ2Uopmn",
  "key14": "4cH1xVYdXafsC18BZ9EsHwtVuKBfRAuSgsTdNcoNGwoZQFBcnPBRf4kBbtpN3hCftJPJvL3LA3neVU9AsjKAeMeg",
  "key15": "3ciY94XD3XiC95fpF7ZpCGqvAxWAkisM4yXiT69zvAftZQspkteadaPzL4VjApWZpvPyVYxwTU4XPk8h5EX31yXg",
  "key16": "twkrrpLjYSjjmeVr4ex6mFW6s2eeb6C67GHpVAXvy6fmwUu1ZsVKciu5UdoaeSjoJdp4gBpiZSYw1mfWTc1Fy1h",
  "key17": "gEAsRZrLBdivV8AGtH6MD7BxstZmLy6WTesrKgZ9TfKpBm83nHmyQhhBeFGxjYgpnbs8CiDsc1mm6NnEPYGsqjY",
  "key18": "52iMfZX9hDwEnvtrmxbvoAb8Yd3Lmv2X1nWo2BNfAmthf2d2yDPr3xswDdDRwaWAEhtGhN1nHSLopdptLUm11CEd",
  "key19": "5Gcr3ZSXh5VCJhuChYGBhd2u49b9SetxC95rirhvnMTiYWc2DJuFmEHzQb6ewKjaKdqTvGFkTCSkWZfh3L2YKua1",
  "key20": "3mLPwDw3YBTZhkZsue6ixD85kPyStjyY9DtDB6AvNWyXDUgWaipr6mSh9ut31z3Ww2FMfRJRJ524EdyGwuS8zkxg",
  "key21": "3xkcLbrSD7yVGrwDQK8MeRKf6ToVLaMCCA3Gvg66rH7hkEk8JHT8P6je4ycJxojxwZoYGo17A3bGjdUeM4E8cFCL",
  "key22": "5omjEZA9Vi25XxbCBmvTdmBCoNeuJc8gGj6uYTHxArZuGQuBcf9kMF39bjy8h9hjXHhAbUbmZ3wNn4YrgWLHnkEX",
  "key23": "4x2W53pHJJN6PUgAQL7r7jH19Ss4kxHHRrJv8PdXge4m9AWRKbmtrQgsru9e8dc9n3u3EFgyB3chnjdPMeLBAp36",
  "key24": "5XHomTnc7JWuDsJZMt31nBDq12xgRNJjfmE44m3CavvzhszGDFYamrh2CtWTJh79vDTDWBxJWuKDZURFG44V3Ltb",
  "key25": "2vTxb3Hewmy97rJLfxvU3pPvDgK21c8ndzMabqQnFK56Ej47FRrSLdsQwe5bGefZznYTbQPmMnimesxaRoyy3Qmr",
  "key26": "4QEd26uQvLYdnM6yHmHdVPanSysrSUUAEAMaknCHzpLxELRmu9wSSCumxGboHwyBj6vFx3XWcDHn8FjNf9vCejw3",
  "key27": "24ufbrutAFHVsFNwWMrwBnDS2z9YAfKnYCPGEw32zNsDN7dqfkEL5GuP5kssHNV7HrPYm8xJb3HEGyScZ9Nujmhd",
  "key28": "4BhxC9GcToEGfCF9aJVUR1pY34SWg87qmeD3LpRXmsWgD4LnnLT5XrPvVRaiLJBWzqoCxmCHEZnDEXcPRL4Uckya",
  "key29": "Hv13gubxNvmamqwzoWsbx6sv9JQL3d9LNz6CKLX4RRNAc2LX3Pfcf65BjWDWAFqSiPBBxa5xVAM5E8XFcJMBXUa",
  "key30": "5Fy6H8gS6BwiQaijaMSzRpM75d8pbNqu7aZoU5FqRHj2kyv8esjmZT63FpMZwmJnLSCTMgCPUDfQjtivjkAD8njP",
  "key31": "KZxyBpRQCNEH64h9PHDvYihXh5u5emzL5Uxs6aUDEaU7GrqjT621p5nBH8KYPvkYmhXyScKLZH9oUjChBPRBvTf",
  "key32": "2nLiYhM9F5YxGwYBoE2VcYdTRdyvDcGkQYYeW4ijsZuCsXDYEKJ6UVu5uSBr2n6jfFrdmwG3koU1FerG3iNsgQhM",
  "key33": "3vkvQapT1FNCm4vva4Hoz5sq2oKQi9iQxMeWU7vui15ZVsqVu9rFJmTB5QPmsDyboH2QJqBnSiMTyxxAmSryPGtW",
  "key34": "55ms6RxCc1cyUwtSJDKDKje9x4TF1rR4DG9HA1pegZpTiCZ2rLeer45sebPbM5USENDWsiPW3XivcecBKgEynUSo",
  "key35": "AWtVgPS6UZDUiarksN5M7YdGPuA2UhD6QyjBcUT4byAxNczwtNPH5kaJ8MRnMXNQJqFTtTY4UFaM9upiFUHpEN5",
  "key36": "MzHFctTspHRQvDyM5QbGawM6z6KQihf9mYzdhAkKmykZGa3tKX6dJ9Gh1dBCK44XGmMqAPfFbsKgZtc77gdBZ1B",
  "key37": "4Qi5xtQ2xCS6utdK5BniB2tZDjj3MTvYXRr4XvHaQYkuyWPUZNNiQNKkvNp43zV6LgE1vR6Wv811xX3LAMPDnMUr",
  "key38": "2QELJaqCKCiD8yvCw84zwKCxLSjVs5xVdGX5d5yeWnE6EQx7bBLKbKQE5KeYSLxffTW2h33ct2ygtNo3vbHZsERH",
  "key39": "63UYP5bryQpC1BAAfqUMQnV8Ld8pxJkBDysY3AFm6SKsDiygBMP7QrZRgxjjLnUwyKNZH8yWUJMHnk3TDeELj5hz",
  "key40": "4DGDxFoWrPrSZLXxcdwy37qF24rN8sZ2aVTAFrpxjuiycfz9jmzesGC4pCYRmd8MP6j8k7YnrTH1ET6zLr3wB7EV",
  "key41": "pr6aBXULXGimk5971AQTXNJqx5W7V7ED9cJfNFvKzkhv1zRcdoowopc9UMb4ysaS4phtjGy5N2mfAYuiTEKL5f2",
  "key42": "2H8FjFYsFVCZ8shxuSt1CvNQowj6pt3Kdv4Rm91rn1UR9kCamiyv7ULLMJzVd4fcSnXbGYA9aMyKKeXwgYxUL49a",
  "key43": "4yd5pRWyi1TJGSk2RHyQHpni35KBKTL8pzLSUATGSwzHsTSdRwmRDvb4VDz3ETGqvAmckxdG1f3mwTfLN7C1HgLZ"
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
