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
    "2PDrtrFa75d6qNmjsFVkz38ptQu1tViGJK5mSCC8AfnVj5rx3rv4nNtXfCwtBmgeWfPj6zPRpeYwaHdmsuZb3wep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w3Yr4YaFS38d5RAogiRsjsqPk54R7m75TVEJjb7d4KUpLeoEfDRBed4ptdphnD7UhA576W8i6Vr69LeQWBFgENW",
  "key1": "4LMcQEmWiAJMti2exhBNgsHZYKwyEtER831LuLvM4tYKZFghxuLhtN4oHzPJU16D82gHZKQ9Y8UAhexT2vbgVj8k",
  "key2": "4UFfxtzmgKX4sYBUfENg3BWEpKeZxNWdRQNwSJWRk4DK3ndkuJkvh4YGCe7r5Ae1tv8QzAmbK39Cepw3xS11tNVu",
  "key3": "3gnyQ9grdmn2ZPbiNdEL4A8RjHk8Mx8BM4CgTdu1apaU5ANdhM3FWnqXBhDcHgDtBsm2xWBVo4wSBMKfp4QffanB",
  "key4": "5CP6qtG6e3dd4Z8oCnWSV6Z8JgcU5uzJm7V4dUA4JeuWGPHG1ZCtVqrF8GZ2sT6EKrGN7zmr2scK9cdzv3bWJFN7",
  "key5": "56PEJvr2YTLVhSYwkB5qRAyLKCDydFqxYKrzyB598Yi9jYiAi9eXYsrHZ6NnEcXhics1aWGTbKPzLW1msY3ZpFcq",
  "key6": "51pc37T4kkXqkgV1jPCQbYQywVZuJ22J3V2D4CHUEeuXanYtfxumHESSps7ZScUkzrUj8aq6qpr33d35rNuky8DH",
  "key7": "4vP5ouPRT4othinmydVCa7vcUhkqMK2we3SJ4StKECwYR2hq7xJUJvEUqxbThvT3PVGctcwpE7z5u4uF611FoHB7",
  "key8": "27R7E5f1SyWzxPSKireVFDNDt7Pt4XtbVy1qSQDd1csMQu2tBsowCVuKqs2TgjEvqWvgFfdPRB1CbJJrChJxaH7H",
  "key9": "56dPx24ZNpP7wVLBc9TfDLg4zs5X1JP8hdBdnscPE34cQQrE2y97Cdhkv2oc2zuJHmR3kjcPjWjngWXzNHjMinAX",
  "key10": "2zQP5NW3zW47GW7ratgazP68HFXvGijKEo2Be74ybaFSSu5owr5WhWHqALCRsjk4XLoM55qmn4rDKnBcauBjdENx",
  "key11": "2KYCBvSe58v4GnVEXyTmRTGJ1F9N4bqV9ENax6KR8t9bM8BWWnZGPpey6hxBMauaXgvZJqHcvkxKsw43bMFnH5DS",
  "key12": "45dNCcHwMqHUDiP4csScZjEVG5TUXCekU1Ni599mVb6F957QZpXGp63LYHvRNszcUxpjBw9P7qAjnwtBxpg7Wwhn",
  "key13": "6mEAfmsgkWZR6o1iLrPx5s3oHGrUwiqyaFLrrBEpKa5Cbcuokun3ZVFmmEnB7VnhB8KVxs65T2SxeKBCHnZ7QEg",
  "key14": "wn6RsLu1JbVPUuryd28ugcEkNQbXsQTHgY1dm4N5ApRHvPegTaFqQe1gGrkpd7UoWovCeG5fwCVXBf7NoYeYoo7",
  "key15": "8cTxxCMnDrWGM2Eg6E7ysws1k7m3YVwm7PSqJDkiAjLheRCETMNaGRPSdQnSKyys5DmqYxDcpB7q5UpXgicwfHK",
  "key16": "4MFJZjavhGnXhk63BY4Pxa1x3jEPrSZiD7xbjKhsEDSu7KqdgxeygZ8m48Rc2cxnpPXiFh4iXJf2vrqAjPLE6TeX",
  "key17": "2dfr8fsYq6SkRtPCEJv2iBX5KUauy7RML6f3BW1xkVrtfLjppnEvLKAr8gACJZB9S6cKQ215zqQtgih9uLPyi95t",
  "key18": "4cS89f3TdK5EWWRLVRrwXYAHMzv2YPVsRxJPr1Gd9TVgBrnKPidwHa1QbK8pQB6ajEUNVw5RiVNuQrnNR3TFPueu",
  "key19": "2KVaYdG7rGDEGWh51eWKc2GandWcEYNkmmmvp5FEndPKNZMTNeSrJkamcPtMDeiezRHBEtX42fBtRb4UJ3FxiJTu",
  "key20": "4DYwugUs38iJWCXYMJwf2mFL9VPrm5Zd43Bg89jX3j3TMym5fC8qi49xBC6zxu69k11bcoescVpfwhtVMXgQpHs6",
  "key21": "sM6DTuWCQM1tabd6axaN4B9TqSiWnxYZqVhE3sCriQejji6y9H68SCcZArqHm2zv5JeiSK1EhGtTmsdF3ZNxGvM",
  "key22": "CBJ3ZnYQWqSdJcmyyRQdgytFu9NkGT9jmk1dAKxwB1zHWLGzcJLmifA7PpekK6o3DV5k1SV4D81M2RLDPYyfwTd",
  "key23": "2yK6ot5P5Ee2kPMS4fSp9gXmWPC5vfEgQcbJ1TnGk8LBoSRgC9yXJyJuuszvcCKvXoPacGfaE1WQ7aHJe8C88HNt",
  "key24": "39RffN8sDkbjWJUiuhUyBm3zSzwmMQaJw242bqSSoYWFYsyUbcUPkGGWuuma6tWKZRVjJYxunrRTWbxTqAtKwjQ5",
  "key25": "2vViNFvQSTpwDmx7rJgrAjueSfKuYmJv6A68PL9wkHoyhrp2pmE4CzTwDabo85tQEihWCQwQTTu5wm2ABoD6Hkmv",
  "key26": "5CHNUNKF5UhmjvMyUezAuKL9n4pjvXWJcuFnxCA9Gg3m89RGXCsDYUTVcR4c4tczAws17CGr3b2qvEqsDBuF7XQR",
  "key27": "341BBceh1qoQerrNwQjSm6zADD1snRMcqRA1hvLTQF5cSLErrGPGpngSSGvDuCJDMdes7WLxCesyiKbPWFYfT6Eb",
  "key28": "59t4fP4rEV2zuEM3gvrYLdcQHw4KMLr9ugqeweaS9kcaxFoY8V2oNJavDPFLmHBkqVsAJtsky1z1vw46RPG8d9uL",
  "key29": "BoLZZJLwUts431efTVQmmaHhpVjQyhTwETKKajJjTTpUJnx57Gn1BPzzxsxmiTotMyEj1BE9SfLX1RzMFg4E9x9",
  "key30": "4Hhf6nvGTCQvcqpSj6zCn15LYYyLaYkaKDDRHsc97h53AnYAhq2TtRYuJQZMnQUon7H5jXiyM7UtPaG49e94VeE2",
  "key31": "4jKKGKoZtMdLrSSdDdRjZHN17D1svfXeYEUsNLBye4NxfnDyktKbZwfoHWtfFP8wPB2d1q9boaSPVBgFGTtKn8L8",
  "key32": "4duYysioTVLZAcFQ4jQoDzBh839SbDrL9ZXgi7vTom6gSAdcxBos5KewYkseaPnrC2BLMYhk9YAfP176vsQ8ivMr",
  "key33": "57zmFYA1cXqu6Cpv5mzqLmMgapUqHsHzAVwoYnwQkxV2RSqKAKDodXJ56XebEEy8rcriSuN6vHvTMKPFdU2TgJEa",
  "key34": "2s41rX3kWXh5U2Wskj48V9wkHg5xfneUVZeJ3FswLZo7b5vJtMP6KPb374ZtGey6cRreeF5sxJ11oHi4x9qSnJ9b",
  "key35": "29DPUyU1FrDqiRtfP4mcJdQa3YsumKGqFmQNHDoWybJDh9UmvVQrd2wKTMdAovua5uorQ9TWBb2eF6Yxv3hhxfxW",
  "key36": "3pD6F47WiRDhho7No1KQsXnCJENv8Qy1m5PPo4HaV9u6FgyQwUNk4brEsbGZMgeZtebNJAKvZwTPUua4Ff25jcE3",
  "key37": "5rdNzbbU4WtEPoFZ2FBG3prVZf7ciGFFfvT6bbKX4oSCcTAU7Qikv9btpZJb2dSDFDykG7Q8xDTzynWB2DvsaGgm",
  "key38": "4oKxeNuMei8zcTKopsqbkvKPK4ebr9QQGyPF5ox5X8AJ1W93S3jmnAcxXCt1LmopG3FTvymvqEffni9KmnWXRBhw",
  "key39": "2hajvd7AtbETZqENnxntB1GN2wn978RHURCTebCZq8MnST9UpFRE5pw7MRRWMjaFPFxBC34a4Uonje4JKAjXCxe8",
  "key40": "4Sxuu6GLparNWPGrwVLtcAqTgAqfKX9hnMF14S6yB5FuawtKMgW3zqZFPcodQAQWwaycaFHdntaJmMgBvcKLA8uz",
  "key41": "5mfbatyG3hQT675U188yXdDm96sGadYYziqPG9RJKLG5sdvsDqDwW5Q87K2BAaMtzos9rMeCJtcv297VFJvpn6E7",
  "key42": "2dT1BF2tNFtXiVzsbo6yHU2AYvzFqcEgNdfFsfHWuYqR4FaJzf7Yht7k1Bssb8ZEpXWhThKoZRwEQcqRuFDZzg7w",
  "key43": "2wxXo9kJt79WEPY8FP2VncEGTdg1mvsgta7YXzKAFWSawUkw9JPm4XMFna4hmdFX6b5n5eXtHTNBLaCNPRzR4E5k"
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
