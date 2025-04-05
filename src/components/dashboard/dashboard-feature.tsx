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
    "42ccAVGJa5tZ3rgKW6uzcVu6Wzr1AYjZHiU2o1XFgipfmkwUCuCaJeoP4UBtaybZDCb4tGtbHDjBmPfvAW6uTdkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uoq35utRcwZmT2BZQ9FJBSAkqCySkTDAfaw1EkA7ehzZPWaQrpcq1FZUSv9qJvLb1VFLSyF58BCkcjG34e6AfSE",
  "key1": "5mE8pwnpXGFspi1MTCtTpgsf9aeaKPrGbJjXExHHVEGQc7CkKsc8N68sofzbLAcMJhURmTjmmv7TZ7Qkn3ELDryY",
  "key2": "55e1Eh6Uf16S9Zk6u8nL9ooojJBB64ZrFjzVyGu7z8Q2Znx3quaH3RnZ7HfGTuwBZi9pXqJVSAuYb3gJLt8fzxMg",
  "key3": "aba36sUGhiuzvN4cumqhDSBVzsVEMtfokqUUoLVf7KnnuqyNQzEDBwJgZwcFqNMQ2aJgYAW8izBm2jkbyPwGqrN",
  "key4": "Q11fV98syWybDBbYKsACQwqdroYTyPLALkLtCfRVgmieCUUpRB9wst5n7MVJAhgWSsFzToatQCT4evsYyLsEFz4",
  "key5": "31jU9QKwqgQgT3fE1Nh7vBHiMNAmBwmDMxxGSKnd892sW2QrDvf2Gtq97KDXd8EjmM9y7voY29hXxNAXZSwGFR9t",
  "key6": "9ZkRnifcJemzn6vqSYcPithU1k4KHKZNmV7P3twZtsfuTm4QJTMg59va9kxjtf375CeYFThNxGbPT8VgekRSzxn",
  "key7": "3BAkdsTQ7Guc46AoviCiYzixWWvAPNxM1Mb795CoUjU16ExPFETsPZ1pqjZpQv7R5DCouXZkCRRiSL69pLeKgAbk",
  "key8": "vHN9wp8H5UJPY8reFJP4iaPmfLed54gDKrZgBYGkfapk1WhSP7rk4R4AcmsR7BDCjz1evBxT6MhHnEkMgYLoYAZ",
  "key9": "3cn2MYzvKfTBZ8SJGo41x8rNPpCH2qunCY4seVa5Us9t2hQN1fTcXd7DYVeQ7Rg2N5KAA89HJuUZj3CkoVCxyk8z",
  "key10": "3aNi2y3ZdNWHW8b8fhKVfxEHnqnTbsH4tTNTqtFM89oZkWxefX4iN58pynGXr48LnkgFLT7syBBUozi8MnqWUBex",
  "key11": "4CXxFbxy1GX8TNVUHyqzWStHasrGY71boexHkhRdym4F4SJnxzrqxhAKfoovfpJyfGzXuX5ufuszCcXqQEXs3g1x",
  "key12": "5uj5o3cREiqzJxWTwV69dc78qzRT6MvNfSiLNXgKZBiy4c6HehCZSF68gdHP6CghJ1QdENv3NneZtNYqp74X3kC9",
  "key13": "2XBPXMncfdUXaeZexsWYnvs9ZuiGpoMVfwpuMUijM1JkZDtS1UBSyzEns87gEVAUPALaEXPys9p4fTa9dj7arg4e",
  "key14": "2ZBjZT14pRocQ4XrRy4pN8CHs16bUssUDPUHCmeYfrBZ2VU6yxdcWyWont1VkQvdGHKGoHvzridwK651AHwS1Mmq",
  "key15": "3DdhzghkmLgAybF9RcMZWtaWfpRhSJ1KWNfaPdVHcGMhp1TVfuuiBcAXaZQkM93z3wQAis6Jau2DdXEUKF48XTix",
  "key16": "2Ljh5hHFDS7BS2ti2jvmZVfT96MpupX7mySw3tNYp4S6ffesBCCqfVQWkL727yDSYG8hKHGXzeJgi4Tzd123c8dC",
  "key17": "3nDATynHu4DnP9LJNVByt1Eh2h1wUCcHuWYT3tuef6Swpt48mu9EdsR7thEtCz1a1P4fV9W48osZ25uh67jMAA48",
  "key18": "3aNm1pK7HZqTFwLnGYBnZ1FiCEUXFLQ7Gbn8jVHLhmCY6MvxHwU6np9gFDRK2aY59434hfu9BJPwbchBXfsoW1KU",
  "key19": "yU9RQ4dXM29wvsB2ymp65JWorQQokpxCvyZKnqz5Vm7GH3e9oSPZ3iUuYU9E3v1iFPjrZzpVVH7cnqwKbmoSnoh",
  "key20": "3zKkqU7mKFmZqUot2ZTrYHQZTQMvwVqjfaC1UrNPfU3LCsuCucD7tSeiGzcpd72KKob6NM8DJRJbHZvMxAdP7VMi",
  "key21": "5PuffL1xAMjr5CRoEH7Kb3deRC23aYrN7zi4KDiNDipNKcXpZSyoAnudvs4kfaWKJekjQ7wobm5Kc51PM389GonL",
  "key22": "51ng4CqQmAoK613VjWQEVVwCpnhyiLvdkLXFU3DUNdJf9pb1zw3ZLf9wFBqPu7NjYJ2c4Kw9vJucHo2npLWsYtYA",
  "key23": "2eurb7A72dcUsT36kPEUCnouCrQ6cDNfpJGDZ82uyh6mCqiDHQXY7pB8PGMwGDYTwbhMB4whMn2byXAA7pJyzNJo",
  "key24": "5UWwSAPoCY9knHYdPAtoybzMXtgkncJ33UA9ypCx5imFK4yLA98hRJmrgJuRUhpPYJmQszV9zi5Hr74x4tYvsBRB",
  "key25": "7DREFZF22YYsW8Dh6rw8HrNwQsGDE2iRTVTr1L5d6ubGo1p8C3pxdLct5UGDcBvN9tqGDPaQQkDqeCybkd6dAY3",
  "key26": "28iRZhqGXfHi72Cgddn1iTVRPM2MoA24UhSHsyrRmBxGMKSf3Z5RUcA2CitNNa9dGT8cN8aBmpJ4tgY8epnp57QB",
  "key27": "3JmiceKKz9TGHGMgVHwd6hN3RoZVfmuK4RPWjKhGyN6scLAXRgiSxYoKSbLURAHX3avVS4EqJx8umi8TnjYE6fi7",
  "key28": "4szQPJkfSEmT2jhUL6hVQVpRnjs8KLsFgmrZi8BoGU74yUnAp4baW6ZVTb29p4fu8yTW9tY37WJEmLw2u8NgoVN7",
  "key29": "3EnPacCwk7PdwXxtq5NPzc9CtH2pmv7rgosSG3wKGb3DyVYCaU4SCe15Anu7hGoyFt1DkFNe67AXYfJQYbG8me87",
  "key30": "5n8PhmirGR2MdRrFk35CKcz5H9xdYm98q2r1KsYVxBaFZ37DFcSeoULgLEvLvEd2h1ih3EQrrF2786E2GKVM7pSb",
  "key31": "5c5LH848hUAhzAAGMhrwbMmEgkZF7nsRovy2brdfJ73XypzwThoX2wd74WDzhWs3X9u1tAuMhB1wbpPX1k8iGeyW",
  "key32": "9hbKccUKpZVkPfJbWbK5atPGXAihrsPuGtwXkV89e1X6NUzL5fqXSLYbD9r1FipaVfPa8XZA8vYy3woKRWTKYWn",
  "key33": "37sXpp45aqDvt7WKC4Rt5dQro7vF3VsWfEyXF2vLLZeyyLJvHWiuCfZiPJEPU3MiEXDLGcppmQeyeuyYEtwY3SwP",
  "key34": "Y8YVb5u6goiVfpQjBgi5rruzDKUkqkNLtnp8YexxhReYohBheDkYVX5yMVRQHghBNDbiJvVHK8EWJyqwhGsL3iD",
  "key35": "2bthweFJBFUEtLJrYeS7dUVvzifQvYuK7dq9u1rZHSNhS1VEgSEr9jBHL6sYmGi4w4deRRnonnZR8XLdFiJtMvxt",
  "key36": "6SPC1T4pXzkGPjsL3HxefzkPCW4F3ibPG6E3iGB74tHLjwV1zi239FAKNcBsTkba1cZ65Fr5RtsdeGvCZoFWSAE",
  "key37": "CDxn2NnfYCGQ4BYUvhfDscbCyzF5VL3cNQDhZ62mRzbskLRUGyxxwjimv6sjgkUS9rUahgsJUdVyWCWwbiWCgPs",
  "key38": "4nmAFn6aL2YoGtmavYjYEuQtg5xVWMjCgfwL8GoXhL3DjfJo3mDWconPX5Rz83JMALtyyUnxvzxTLZMpey5grZMv",
  "key39": "31NbB2QiUrxhX8k7z657cszJ14zu2JKQ4Y2VJHwsczLShFbjaV3nqnnkbzsrSL9Jx8EQr9bFEQ5tbP2BLLbGYCzh",
  "key40": "24kvajoHGyfcZZsixxysBbBRuPGTqAKfihgesJctaHxrddwnx24jcipEg2E7CmmUxG4XBX8onVX9sGpjmNU3pfG3",
  "key41": "295vFrUVax1Fnv87a3kfaKArvLZc7KHUZe9sjxpHAJjAErCD9WzbQpA56iuEwKhbfjun2tf45QMeRsPpeV1xpGJ8",
  "key42": "5o1af15Kp1njg9YMtWaRAQuNQJR9wVTyKYrazQ4XvKam5AmzF7mjHt18AitrjLcZnwhocvBg6u9nHbi5Hq4hMrS9",
  "key43": "5U42B6Q9gHufPU88Yw1SwWHFFgyfX9eHJoc2E2RKbifwMx6cCdHXfu1TFXkMAD6dBYSg4bBGwNKG895JJSVNqcmu",
  "key44": "5Xp6zVG7FivzedHnfw1ox81ZhdHDkRQvWPQASgvcqJDMEsfdD6iaLZrqMtcw55o4H7VJy5eTG9fGD9N1f9s5r8gH"
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
