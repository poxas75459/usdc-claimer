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
    "63orvGqcFp4aj98R2rkiHYxch2oaEreGaWtSYg5jhMRZqoxswBbi2jUomcXuddrZTpVcHbrBwwDaGnzSEyW8xBVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1JSmaaf4tvZJzV392NmSprn7WAy9oWtTBaZRKfBxFYiFot1un4Ur5wsFQ6Z5kFkHyPx9aobgzQjbddf5PW5va2",
  "key1": "2ctvSMXfA98qTuWWEFwNiByPg3ysZADordHQ3pqMP73HYspQ61PBcgPg91Zvc2YkgBJDZ6CtiaRtAHAziZM7Q5Wd",
  "key2": "4a2mdd5JdZV7vgmcrd6UDd5LeeWDCE8vgjQ2AVSpPCcwRthYV4UP6GuqGs5Wbo826hLY4aunrRXZWWGTQeRF4kA6",
  "key3": "X6GcYbuxwAYcCQWKwZu9jpSnhdZ4ZTkHgfvEgSmnVS66Mse24eQ2gJiJKihMg56giytzMgJgVuwKQ3TQmQFfm1p",
  "key4": "4eakDosh5sUkVYshVFoMpnndHq5Absj51yhJsRWForoupdTyDcjjFDppccTZcusaAfsRjh4GyCGy6xG41E9chizt",
  "key5": "5iFqGiHtinT4c5kLngT1qP8jYNiCbWaEQUzQ3RRarbUwzq6yMYEQTTSHBc4GH497vyAqHUDURzgxU3LovDMgKrPB",
  "key6": "23h2Ev7U2pqnYbVm9XAqtE2Mc364U9F3i4HKcxiJNxKQ9a9JsLp5UYsggXoYaNzh5hVPMLkNsLTEFg95bZpbHWMs",
  "key7": "5SeXanUW8HDVdokqi5XhCDerqgN6wNzcib62K2iFAofYDMCRH51ynSX83DTNa4LnSr67a8kVqUcN6WGT7JSSQBy7",
  "key8": "3VXwrrsjdipRSHqLAmPh1kEUPteZdM6dknUP7eTUvC682k4FP9EmmkxaGGAQ5QZRQyQ5w5PrWt1auKeNUvEamhWY",
  "key9": "4TjHnD7UdaVsG1rgFXuv36WxP76udrANmKQsJogFCxzLEB4XjAEWFVRCeBeJwwCyjJbR7eE7pw2hZYmT6PKKPX9G",
  "key10": "2m2aDowoPfzogr8rVETtVhGdSbbywhTz6yMm7wV6ah2Gvdd1e4UAo88WsvbujygyZqwmzScfEHzNrKRjgySkPVCZ",
  "key11": "4uFcPsRsbvfBDvmKUSKuABkcmn1grhkXBSzyQgjkkwiUaJ8LeFiE4Y6QrAzFULGvnjXjvksTM1vVqTsgmqGs3MPU",
  "key12": "42K8ziB72LEoTZ9KSJEuRcLGwbd9T3LEKzLgXrYKZddbJPMZt22NFU3jmv4H1S7WFB363K9ih5CpwJYUo7dsbgwj",
  "key13": "3sRDazseNVzo2GbnqH6kFiz4MyZHUf5ZMSXeCddrjB3QWRFJ48LCv89d52d78EZHnfgktyAuBTjPadVCucJkwzmn",
  "key14": "37hSjGDzjSTRG7iVj7wGi21PW8TbNFp2LijzbTmV5rNLvfLM1PzyRZ6zRt91wQKboAf4K7gWMAbpHwJgc7mbAdvo",
  "key15": "5ehh93siwHzu9WJiiqBm2vbWuaLV2DkgPfKziroonzRyxN4kpC9PX4YWAB3u6LXdKeoEY3Si9tsFGTzfb5mxMmTU",
  "key16": "4EyG9znYQ1tq1ZCK9qZSTtxFAcnKhBvau4ik6jMpmPBQJjFYum7RXThag8tPi1ATBEkaoc3Qr2sEqdAuZ7wNhNpS",
  "key17": "DEhbRZBSzKuwjSdWrHrKigTJwiSWHfCiT39cpNWSZYrBMLAj9xA2oXABpLwj4XRjyEtovW7S5MZLVDAq4XCZ3ea",
  "key18": "3HsANumADZaY2owDg5U2daVZTxbPkcUbu6o85aP1F8NJxoMPLJX12uRvuDpAQ8w1Lu466Sbf4XhkSL2j34CfUTsN",
  "key19": "594BMgEri8KyHTCAFot1hqGd8NpWZ1w4ahCnEYCamQ36oXZxxyNpvGuFpszzp89q2sh1MAxSomotZ9v7hABnzNvG",
  "key20": "63gwR2LSKAg5jYKm2pxAi18FtPscR26qy5XMh1R1B7MFkygJtxvuvx6sCFan78AH8SpKFm6DKSfZdiAzioibAtbM",
  "key21": "4rydgBPmhmXHfNubrkGUyzfCoaW7MKKzh6NT8kQtHDsbiamxmmMF7DaUs1mqFz77Xoo5jT6P81PHUSP6b73vfFFv",
  "key22": "5395acZLV96QzEd3fcr3G9VwMwAqc8isUsuNp6Vx5KXuwznxjmd7Z9zT4dmVgRRCiv9Sot1BiR5ARYKyTVJRqHGo",
  "key23": "4N65iWqrjVEVKAMjzkZ3PtLUBQoXmYco2tFCqGB95q4FeKQD9uosdNVbUJJhmhow1o7HqYk1qJTJByAufThQbjwN",
  "key24": "2gyjraY3RFb9TcyWwUsc6cS88jVn6tCmD587hfW3PtfcHJTg1cba6VCoeD5sq2ZTQeSZ8usrhcm3mHqD547e1MhW",
  "key25": "5bCJsvbrA3H8YJaakJXMufrwGB9rAmSCshTox7Zr3q9cXzcwNGG4VZXs9HAguXk3RbnrWTde8NK2P3MmU4HMoUVD",
  "key26": "3yyjud3SAmqweRMyuvJscvtc3vCBgRPDWY7hb1yhLqf54jYaN8G7gVt8rEp5sAtqU4MmkSHapt5jA87Afk8Ux3eK",
  "key27": "2T2NDarLrex9Mkvaht4TZdLnWgZ1YeN3snR1crv8jBSvbyYmJhB2cFCvmuMz6qJ6HUSbQj6T6rJZgRdNG69LhPFm",
  "key28": "4Mi2NeXRnyYSLzofc8wNav1iPpNjQWGbVEvAAnFPaA2D21ywtSuYASeLJTEEvuhACkHhaV6AExGVhkSr3pBDr7vo",
  "key29": "2Ncnt75LBSmTQ1bZiKSUdHRhohDWqyCRAL8p5oC6CbEfSQHMAT1Xt8oszzGkwMjeiNestdK2ZRcWCJrxdMU7o2Q8",
  "key30": "5k8UyRCSE57Eh6JK1Xs4vJWi7P9TaN9ejMuefKyiLjqg7kBtx2msZ7HhgoedVQ338EwGXgEGod74oxiqnYsLPihu",
  "key31": "5eLoeVBgonL16E9SM16CwTSfFf9o7VrpUcbq9puHeMz1xKRpW3LTC31buFrXnEqhDKLVUKFZ92aY5iRnmzFcsUdd",
  "key32": "3r9tvNiiBdhHHUDvtJ3mmL3Qn6okYSQsP3PKqTsbjs49ytiuBiqSH4Ypv42FRFSpJoGq46xvBXhpeWcaqHf82NnP",
  "key33": "TGHNfGUUaf3ogL8MPNWuaHUUicR8dQaP8uv7hgkbsK7mLm7Hh3RXXx9xU11eQfLjNtwYxvgtqGjnZFDtUB3TAXm",
  "key34": "BgonFNZ8yDQqfBDxRoQwEobe5WaEcpediakbHndLMarkJtKM7RR3qK1cqsi8YMMKJVJayrnH3FpqkPUFnktNbUe",
  "key35": "26GRdUta4ETWZDJY73ekBtLrkSKqWoZ4L8MWxGBzDDV33XcXSavEQxwV45CkMGWk7wd519gvJFxMUCsuucyTorMK",
  "key36": "5MzSiMEgAFdbYtFCFPgZxDuGkZJKsZNyGetcArk4vMdqXbvMsgnFyVEVCRUCfvVWmrcQyysp2eExVUZc33WQzqtT",
  "key37": "U39r1jFbWed2pwWPMXxc71k1dQZeGCEqooNdoMKHYN9cM9soVxigi3kE17StGGZX5JpXF1meqZ3JtyYcejtohqy",
  "key38": "3BXQRD9F8REmTFp2Avr8hw1onkW7qCQSLxyKpt8PqZdqyAbnFBcBWje4kPuxExXKMYUnjZuu2hamGSxz8KouohX4",
  "key39": "2gnucWaupc7ScHvSP1n1S9auuNBFhHyJMCwwVHZX9TBJzbuwQgK7yHwBUPGY7issmtgzQivJpEXfGuh8q7rf5Xzt",
  "key40": "2Gjtg5SW74LdLB8N5YgkErBxJVUPUNt9JLLYyPLBjwJQvQifZGRwvFLUWc7KLWPP7iAJo8zkhV6QBx5BYiqLE5rX"
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
