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
    "5zMqQsRPGzFSSchuGbHjRZWhWwrA7LMK2yWvLwGx7FeU7RxfnMgv4ce6T7q9gCGzPVpVpq9aVwkdX3CvVxSaxLau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3sck6ZR5oZ38uFncoyy6ta78EdRv5k3X3dAL9KTCybQguA6mPSa9Ufn3ohUVeKLnLysiDLzwMgzpWk9TAfA67d",
  "key1": "4pmbYNsWXJGEYA5MVFLxqM5N8rFP8viM4x5Dc1pMiMQo2RGFnvh6HjvEL6zno21GuadxkozNbeibBNTBHnJWGt3D",
  "key2": "5PkC24bidRpUVQTUNT6ppSyVsWZpLqRLnQKVXLqt6NCX6VYLhYHwZGpZkfwogsouxcFMLkzfPB66ZRwqgpBrZHpD",
  "key3": "4vgRvENUnZTCAhDT6xPzy4aE1px1uLk4VXw3whXHn2YXauqJQhfwS6TNqkpWuUKTM8PZ8NBjEDLG1vbih7AMRapu",
  "key4": "2ZrCsuAs51GPT9qZ3hRcJpVSyFiJE2L7QcWkcjydD25i7S11nxFPouFJTTJZRc8ku8VXL3Go4SqFx4WaRx1qtviT",
  "key5": "u7XT9FGHYzCD3mzQSjoqCmxWKfzcrCmiXwBBsE6Qf53SonbbHcUtaHs6Hr1nVKLJ9DH8XBjnHHaPHmDrrH3WYWV",
  "key6": "56xrXzqf1pubDECUzZjiNAgUZRZw6GwwUNZEG4ib4rr5s9Dmh4xuKNpjvWuhpz4u9ajrf8gSHVfbKB1s1HJePbgA",
  "key7": "5uVSRchbPB3DqqUm49C2p5ao9MdS67zsDcvskecRZT1vVrPXbY2XyxnHjyJyeiR8KwZkPuvWT7kMYur26H1Ywd8b",
  "key8": "5i3BMareghYd5RfHZRRvCmpVAe3DEZ93qUeeLxf4caqzVDFK69xTkxWmkpS1St2GA6vhxmSs2UZaUrCKcihXjow4",
  "key9": "53sRG9pzB6bt6pjDdjvw7joMqEnBRCrPgDizgmmaYFqqd4NN2PjTEXKud2vMU5wSvL8q7pCcyevaTXbWbUUXk4Bt",
  "key10": "2pJsoX3H9nnwz2XGpbUKkuWHXKP8TPnndnXzvH8kSxxLvHhahcqTfG7PhvdW8nxzfZKgq3pyFmG64bWDqUVCeWha",
  "key11": "4KWXJKZNoocdwGACBteuADCvV9tzZqYRugk2RTr8xwfxtcwiSQ3LytjyVh2wcUrb39bsQ25bVEzr7RhCULr1KJ7S",
  "key12": "2dbjMm8bw1NKZvqhwBKFTLxhfifKa9sk23i5dxSxg3ezUBQrMCxSaAiUuvjCczXXRUyjjEB9N5pXgdZqi4W3MpMU",
  "key13": "5Vi6LkqahHzzeSCVzAg68fA3r9S2kLuUYHo3sB5TmnHtbF8gZFbDC7v13aB4oyfVStybgffqXW8rvFaYeS7G2HQ6",
  "key14": "3LDeic57XcebSGgWgwGgEdTX8psUcVTeuPHKEgnLvsQjc9o8HFfnLzHAzp6uCsoCAwgYUgbWDEfnEwzBpXp7tZuN",
  "key15": "3iEdr6Rid28RD1Ce9jRcyCD4AHjujYPkBUD47Ck7PcPz7YGWQQcGtnY5VMvTyGrjKZoHxqJ9o4C5y4nLxMEkTNt",
  "key16": "TJeP8nDokNeyTe23wmMEjC7xhdKe5J8DUJpNJVLW1LvXWSvFrwKycpJbSqAGjtACPkmzgBP4DouoRHGXk2Phn7q",
  "key17": "4dNCg7akm43LgWSHjEKGr7yLV1uhPh6mctGZhpqc6cDvLKRYaVVWzkX6tE2D51S5Ktj9dRy43ehs4Yqzs9WxDRNp",
  "key18": "5iTkbwkLxGuKMVwJuXhxU8z6dMiBgQ7q89M88ZksVnkE1AjyKRxpZJhtsJc1hmP7imNHAN86rnk7ttnwb3MGrHoo",
  "key19": "4ce7LiDA6iHAH9twLaK7o2vxm7iLikMG5q3bsYrkof6JfsQoiL8GFGsF5E1d3Wnxy1yv6tCrz3EpExT7pcRKccYo",
  "key20": "K1FnaPT4fvG6Q4kLuwgY7CM7woF2ueteLcnBVEMLoif4UGXS9vswqsmVET2bsLQJ5bAXYs7K776xNSipSKCT2zJ",
  "key21": "4eZdXoXxNMqAz4e1L78zzsicMGZTnFy3HmwVcYncVP5sKXdM4KYvNmnVyYmayx1qno1ChBKYYiYW2Hnyh4k3DcF",
  "key22": "5qNFFjrNjaBjde7PG2S1s448cUgB1Nc28aeDfYht7M3Df7U9SnepJZVeFTcvpgjLrczUN95UskoTM8KCiZgAdNBo",
  "key23": "2kzk9hgPNRuMExXUevKq6abwj6RQEGXdaFVs816CfEnNr3hx2vea7AtKrunekrFSan7c3S1qJswPuHRHLJW82Uwb",
  "key24": "EJFrLSC3GPMqCSMKDWTzUGHxZq1uEQdmPCnsJoyw3aAhexxcpeUfucVnbxZKsKy6BLXYLFgdAUxJvtKrQfTTTRT",
  "key25": "3ZJLEX8CeQoxTRFU66oqcT7Sdk6BTnNZgH1hf9f6291Q27oaY8sT1dqCFSJtifZ6KAc68o8fqLy9MDnUVfP2QLFA",
  "key26": "5r1CMCbWEibnco23oAdEUpKHAkCoxMxvLFP2bmmiRLhjqcnugyURg2VZvZzWV32o1pprL6E2MU6EWpM5N6QJTUVA",
  "key27": "cTG3nEQa9czPMQPiFgKbqpcgaDWXAmuqj1iqXzjY9RJHqHLi1wt1H3bnvTVeaSNNkVCxp29amSiZRCpBq6BNRsn",
  "key28": "4AM4KbwksSNMHpxiHY1HCHnTmggrVfTLTVTeriXQYbyEMti8aqsCsnZgugofqzecGvankRJH5cPDbgs2h6C56uVV",
  "key29": "3vZX1ejriQHkaTniHeNyy8RsFTiUDHTkAJKmfzYrup19mQAjjis68z6sFv8qRYWaFDe46XE8mZemtBs5oQpHFkkD",
  "key30": "TxqzgBMLW25Fz7c9SNTcGs6rZnpLLjkFkLthBw64svA4acyoJbJhzNjzYnCaPvfEBmJ4MhVXWgsdXzV49hUvp5b",
  "key31": "ujNdNrPoAoJMQTaF53J4UJjUoG7PMV9Fa7BhSxKiTJrYcQMae4iCarBJUDqB275ZfrNSpsGApniVtwyFoHQ567B",
  "key32": "3Pn7DaEqe3bFU5TeNkeUjpgu2MMpxiGJUKdTjsjvZn2uUbJK41KCAkuRSGEDnhRTmCo3ZQJY8X6WuFQne7bWCrYf",
  "key33": "5SL4KCv7cLWuHBo5CJnr4fwBUY1yqQ9ZWFvQfJLjy1ojiAmjUZiuvpgxbJyW5Q6Lv1kU3LB4ZqRTmsNXipRpkqXn",
  "key34": "2kWvp41puRz5jhYrDr4ANqhfKcUvat4nvzuq8qNgaVaoYmMGGESSH7NaLm42jfhXMyZKb9U5JRsP3rAZxxqBbhoC",
  "key35": "2SRiYCyn2Q335Cm4Ht5jjwkP1VEaEKvHK6rt4LjZTNhjJyjoWnV5mEq9ggTeEhVvGoZZiurcg3CNug7PkxTSJz4K",
  "key36": "LriRcZUHh85ZiWoMc9roM8GDNvnNX2GKfdsp4WRgC2NTBB6v4FDu3ssGrAsAFhm5mrESggr5e8t6ZJKvv8oAfHw",
  "key37": "56L7bBuHgM382gUzvKoYHdRWChRMNgUjP1CvjEbnewFsoFzADYmDggF2iYc1DPEFxgN79DZjjxyif3A46g1D1483",
  "key38": "5aRECWgjELyevEfFHJosmAn6Sp1Yk7TKJVCPdyznDYmK2yZ9WdREVigkKBodiPqshP3i5vu9AknoQUJjbx9cphBS",
  "key39": "67cBQTSXBG8QjPNccGys1BK2aiTGCjoY3qZEFv7JtDWUuHgT5tzLq1d4XWjiuDvJhdmScVM1Aqvz5wSZyEXeSLUW",
  "key40": "5TzKdRfYZbf3cFJSAGNaxnFqMEtd3zk6c4hmzea2uCcPCzW4f7rwHKXPYVR1LGewLQM7PxVVre2p8jqhGeDCTERG",
  "key41": "jM3FofgB8pEvwAUGu81jsajkip22Dp22Jbwh6W7uGqjyrWX7aufZKnFpzdRoJ8vYwujhyEu4wmd9npjxqN3nec5",
  "key42": "2Ee1AqeEcsQeU25CJmkCq9geXDw4caUztmF8YHoS95y87EwpvuUa5o7ksbLWXXT2TyHWXV8pY7j6HFTR75exhBSm",
  "key43": "3b4C5a4V9R2jLe9gmUZZrCVAWHpCF7mhhhoqrLvjUYuAd74DgGhmNJtCpQUbqjz2xoC2wra7XyMTfcvqtLHPHmkq",
  "key44": "4yyUikXYdGSnUVEw75hxNYhptxbq4PuGbmweoqJudmb6HKeHPBQgqsB3nZLffgwZDSiqBbDjNLGC1Vm7y9ig5V3i",
  "key45": "5ZWMhRQHZX8CrVEtD4NnLQ1H64tu1WGTN2m8jHV3bSWP525Ub9wYovdWS2yct2X7EMmzNCDYWRxUjhs2D3mXmBsT",
  "key46": "2toTauAMVhaRBeh2wq2GSpNdEqLCTxG3R7bGaSLTm1UqzBq6AE2xV7GNDXzUZWtz2Lt4ewVQ3WBD92e9mRU77gu7"
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
