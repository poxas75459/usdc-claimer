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
    "yyKzWma9HwB8cKN2TEjJ366KLF17Gy5qXRygGpG6JYE9XTsjBgjzGjeVsxXYjgMpUv76rgpih9Q6zJa5y9tFxBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzYpNPGaeyoC4jjo5NXJHrvovt8dMdjGZeHwsyehbLjD9kiy2cirBHfiA7bEYfSE7gPHktfftXNtX4LmkZm8Jyx",
  "key1": "28YjrqH7uQV4hDK8wMrdfavEhFBNcZ3BkuacvqebUBa1pV7BxPMseH7vtvJh65egPR2LgFm5i81a6darungzyMdT",
  "key2": "5MV2HE5L7MbnYFpnSSymdqPWy1aTutzDci23RxpJqnaJjLBfgaihrTmetnv12h7ZBNRVmUoTuiho1JVdyvxgbUTK",
  "key3": "ZWEywSZwMep4wCUe2M5CMRKqbX3pJo1znH4ma1P273aTrpcYkynEeCS6xxjXRuuXJMrNB3soNuzStxjSLpGWzej",
  "key4": "5VN8ButFDTy7MZzz6mUw4JCVTyeALzDaVkaYPt6P82SFHmR5gpBs7LAHqN1S1BqMhYqb9z1iB72z4LPJb24Vpchd",
  "key5": "QByVZ5FFY25KFttx8v82VrLRiiqJLuPjDYC8WaVB8XSuJroBLqnrrsNNPqo1Kn5aNiXYnEEN4ozaXU7NnYjnfoP",
  "key6": "2SrNw8XDZ3mHyNgpcB2PvUBJwmhrbeGawbuTV4L8Aqv7znAd8WLoMuF8KWBSc1uHZFQjfRG27vYzYgkKUJ6xKHBP",
  "key7": "FwyfcuD3CHqfsjsEinNaxxxoUpU4TC6nfrBoZsSfdDJhb3P65YDmxPXk8rzojHYNuBzEv1gKMCYyqo91tNfx2eL",
  "key8": "5iGWXYzZKzWfZfKGe2fXhstdkHW3zRMdhzke7a9ybYvUy7KJ7WdrrHiQq6WvvvGpMy1MYkRsysWLwMDmwN1F8hRr",
  "key9": "3kuByyph48c5EVnoUZbdWx9DL9VKaT2zM8P1LVvcCgRqarBuMfarYh1dQsxQZ7LPHeBF6ZDcEJs8n4rEibonEgK4",
  "key10": "41ECS4XvXaFUTqEC2HWbE6hi3AXKZ1vTw6PygZUajH4X9pFGQTg3ABC1WyiAUvXtdcTT6QSs15Y69UvMGmJEsrhs",
  "key11": "5Uhu9bosqwupC6XfNQjRUVXRnP2B8d6wavdcam6yMaSub5yiVNjgeSHM7WvRFn9nT5sTXcJP1KG8vfAVs7Eb9NZc",
  "key12": "5kahfysxNkbDJGgRJ3VqfGfWRUcHRqeGwoFkEpsfwnTZAf17w4DsxUV3XGevd4dzxG9WLkUo9XhUk3Dczp1uZvLW",
  "key13": "5UWPzXkFfm4mcZF8dizdPqst28shrLPfExZ1nwmeDciNwdYkN1PYv8P6kKvaUxpBZgRpGFbzWbzWwfKoyiKP3Gbs",
  "key14": "2FwuzDzCMwRngTF6iRFbuMK1ZVf7wtMgaTvD67aBhneNFi7vL5vgKvDF4ntHGNMeyPJhG2UFBD9vEMveibhfa3tJ",
  "key15": "5Go8XaJfQ7DV4DG3ko5pAtis92mMnsXBoX6kLJ2Dc3c5idwXfhCjUnvYamNGstXdPqn6no5P1BhyFr28WHJrfzWk",
  "key16": "5BFnqQzj7ZY63TKTndXULcigkVrGrufhEJ8UZymq789bqiGEQwWNUiBxzffKg6tbMQ69yh1x2pLuqdHqeUKxR3H2",
  "key17": "2zXmRoWd3Q7uwAFgqjF3Fm7BkbxSGX1rk1AXzX4YxjJXLzX14qwaBQVu4Xg2LogGFa2hLEJqzpqu8nNhgMp91S9H",
  "key18": "DaTxdxzGwiVho9Tr54UoH2uGhxrHvPXbxPqnSXX7Tdi3GpLxKJR1QasDPP18iRoYhDCcyFWBbGw19USfKeWLKeB",
  "key19": "5vqKCQaXKjXR81SbWoxLFddDpkvVvCSUXEyAYzDJjPDs67FBrWgFkHh2qtEP6qJxYQHXFteQQzpcnPmfb3dmu3TJ",
  "key20": "4pLr1ve92VudE2SoKFtEq3ikSEtt9EkdxuFBynkHntAgj1NfJeEhBXQRbUghVLuqEPTKJhA3rTBwnuE5GE9DNtz9",
  "key21": "FUvysS9UBtHRNy4w7qry7odw1jrgEYLkR4X9npmZ4zo3Ra4bVHN5TeUSt1i7cgUBkUCuZ1UtMPWoKgncejAgUjA",
  "key22": "1TcXaoXwSLyna4eUorBsFLMgKj7p2GJDRumJ5CgPTZLM3MxASp3i6auYgDxnCLLgPS9mSqkhnAHNsWkdDXdMA5M",
  "key23": "2s77j4PauMw2xA35L3i3Rr2kghkCgdESS3Nh4FgrQ21tHxDsxUWCMhPLfwuA3pR45jkNSApaysEQkSVCLPv1ZFqy",
  "key24": "2EWMvN5c2bxVbabnhMCYpYkXBhtvV6GYepP3EG2KEqgyyGt3jXmokKC3bsKBG1bRvcfSWT49WMYexLuitZzWLz3G",
  "key25": "5qcRcEXcz2FjVLXbvMwR86V7oQnPWswu3xTCAcLPSkgfvU2x59HQsqEKhCaNkhH2XPdTZSb3AD3H1sVpDMvUY2Q9",
  "key26": "4uUfxPLU3P4FBduAshwg3ej2HZENESRzHr7YgSRV9zekDwb44XwCe53GwqNRg6uiE6cVrVtZjtATmZfRzZNn59ip",
  "key27": "2cbhK8FShSvVFeBHyRZkyxWk4NN5yzU6kDC19LVFiM3sgXjqwZH9wP6XA5eudvAsQgfusuNkDZvsRRHUEwYNCpKR",
  "key28": "5ZxCMfvXXJYLFtP3sfBaC5WS8W1eR4AVtJTKxTUFc2arxnfmmhLseGfSoquTs8sGHKwELC2qj9W2r52hgMBni3D3",
  "key29": "5av8RVPccrmPXxXvvQPffrKHQqGT2SUcWfFCk8z5dpPrxwmZyHKnmqEEHRSbZWn8pYb7ikeTZqHKshhY8cSPyvzf",
  "key30": "4Wrvpq3omuTxitEY3quQexQUmXvDLxDZMChvZpKDARCa2u94hKyxJXH5kXXxBbeUqXprsUNXLrtbvcJuEmyqLHWN",
  "key31": "4n3N8nTE2RH2RhVutuqVLKH4F74qWbCtdAgR39H6WAWTjszzwWva3c3u36iN8swxHpzcWCJjg6KdLSaQ5vtEcHjV",
  "key32": "3oZmf2arZQkYd7T3ZZvErd3DrnMjBSyLo9PhX15MRq44FVVGinx8ZABD8a2a7mG6DDbaq6ccTKQuF7aMt8LiExPQ",
  "key33": "3pjvVsf1tiyEZVoHhDwuD2c9MLeFvjQoHBJ63qjujSFviXPXXJouKkq7bjQfz1r4RSqYv1zDhr65r4MqTLZyp8WU",
  "key34": "4QhXTuJ8GF4KYmnZYbKk1SzWxomiyHyeSYPnmj6734Mvm2XmsHtAsmWPmAeWRUgTiNchiztK9Gwigs92cdmCg989",
  "key35": "JxhqeYwQKXZDDLWeGJ74ZgSnexS1FFYwGo983XzhgUFCujF4uKBUPHLXgUa7akMU7nJAHyq7nn39eFYyFQKN8Tq",
  "key36": "2JD9JyWDrsw8hateQxrvdAE4SuSxLTsshnK3gRburHS2VxpkpLHPQzuDMQqWqdwokuzwU2WhMtGWMCyxj4Gbi2wL",
  "key37": "4qF8Ys1TPmzdfQrbKBgsmD29yzvTSqjfgNr7rDNHT31oo5jEd8pGu3WeNDBFzxjqRwaf1o7Zac6Pm8i1WWsK9Kyt",
  "key38": "3xtjcWHmqeq48bhNuUotWDfBNG2t8w1667RfwvmV5QqCBLLr82W7jcNqJTo3TSmaU4CtZ45vtPuxVaJJNnKhNk7X",
  "key39": "3bdFXjivLC65U3QGso1wEZNeepNxLJ9g1yZkLsCrt2jo9ME4CME26pzepXNe79BYYAFrPTaiHKepExBHWdxYNnRo",
  "key40": "XZiLCJ2eyVR18YceCb5haRLWZBxUKe3Ltzwx2Nn4Rku3ojHANBLUFG887N2Ffh14a94ue9qu3XTVB1XZuF9qDQF",
  "key41": "5e2yZdQuLHzVNeupW2BDnfiPBdRRSU7WvHCPnUSYkKHbRmSqiJTurq49CzHruCLyzgS4TbstbMcWFw5JWGZ3WuEc",
  "key42": "3WnbBNQko1Hduo8du7YqxXQg1FbWcuax2zQ3VaqXbCJPRmVudaVFqNq3FUsgmLJN8DrAmaKHFcJo2L8qgfkfaAU9",
  "key43": "2ZphpJKEYBmH9PWUd77fkP18f5Ebu7A9jTWY63kwSgcyjNX9Cex1JUDpSjUi7BCkyPE2YsuHUbCJDqNZCSoQAw8Z",
  "key44": "61Gycck9ovhayatAPPF7nSd55emDm81vMm4AMdwULzKnzAFiMKx9BpoUPJhPt9amm1tF3Ar8wEPhHG7uTjXztSTa",
  "key45": "TGnbgDsLuf2cftkbrPUQj8WzS36uYNo2eTjLa5ZUF9XYyeYkWkwp3Sccxj5kXf2bnqzxhpfNNEqWeHvtriNUxb5",
  "key46": "4kCPhLtc98Nkiphrf76rY176hM6R24ZrHJvKJ2bBWqkbM4Q39ikJmXWTkf4Faq2zosbyURAfaFbDDzk9cgLYevUx",
  "key47": "4X44XKgtZnN6hUBgV2QE7gQx6HC5924RM7N1oGNd87GNC1oq57DFpTLbUfeaRJ9xb5oWXvkppinophCBQdND2fhe",
  "key48": "4tiXioavgL9Dr3u44pjQu3KDpX92bWRY7Si2gJ9ecAkdFnzdPNC936gnfYDvCYvoDP6AvCipdbsriRZ4t7D2EA9p",
  "key49": "2oLYw17Zybyh3dtFmi5xUZ9bvo8CAQgLcy6Ds6P35dZALxK76tKckJiDBmCc2XCQXzcnhrxJiEVB5p1rESLGm35b"
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
