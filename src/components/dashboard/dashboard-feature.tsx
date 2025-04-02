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
    "4GB2PLGB43aZfA5jYLcF4gwkjgScifYpRih4F3dq5uvwTwhRqeBM1yUeNXK8EMBQxvHYZj5K943sEpuxpTY291HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtMKVjYePrHPWVTRfhf9hkcCuuuyg2iALiuUu34GtdBRiC2tqfxyjYQMEwZJ46Ligu9qKfFXkuNcExD1ZzQ1WLQ",
  "key1": "2geW7cGsVR7XXRuJKKLhHCo83pP77AxrJtMSXyjZb1P2uaCJhP9rfRd6ybpHaYBZLpxGowiMr3fMsvLcQLWLL9NS",
  "key2": "6789M9gkovkWpyoqN9eYwKkgTJjQFne4WRbFWUNXnHhkQJFXrty1F98wXhfy9j6tuiK9YwT4F87GqP9ZogjYQCbf",
  "key3": "hn8C43JAoDuMrfReD5ECRh1dD9CoxN1VNMPgh5CswvvgfZteNrh8uiG1XZcPDSiA1z8wsWhd59AgcriGeDCjQdp",
  "key4": "4Mk5pQsybJUUVFwzkAprLxL6eL9seJnDFrFT64RwGULUTMJt39GBurVyQkV8ym3Dh2QpjLww7oV7yuex9jyLrw7b",
  "key5": "2Mo1FNG9eq89JtwhmKB66F1Cd496c5L7KyCSsHDmnADHfT2YaFwwy7fTGVVcwmzyLmVtdZc8ceAJQqzXUkuXP1Sq",
  "key6": "248Jns6Phor7eUjs8cbAt9ucRbgKYm6eWsgvUeMVXoVfNBvenyS9Hx6Un17v8AzDmpXo9cM3orSttNkuVv2rV9xi",
  "key7": "5fW9CbJ7kNbPUevYeszoJMoB8ZdwWzNRNPdUikgY7nnrHJa42cWmhLPxcSwVs4WoJTqY9BdxbcPb1Rh4xrvMu4nZ",
  "key8": "5ddwkWJGrTzKRbW5fNdEPdRob3sTXyywyuvh4mTNr6eLuYDYmLf6CYVRBpnHWTrnJvcSptPB7SuFUX8vWUEQzcuT",
  "key9": "42YkXLJ8oN6rWgTwMA4RRKqJLB65AXXBXwoJoYDawXiYeoCF8Ei4Ud7QkVoFRdTazLHMB6K9wxdbdTh92WzyBZqf",
  "key10": "4zjQuYMy7KqvK44N1hN7BdVMKaRVQARhJg6Jk9uT7z9MjnCNvWjcwjxtPYdm831rVYcymhW7vXXMDEYeqWp5ixhT",
  "key11": "36kiJmLbUm5mzKoNyGs4ieb5vuYu6KdFUozTmWSh6o7nSaDdhLERjK9yXgBDMJxi8P6BannrSMwngfVCy38tNxVA",
  "key12": "2WqeQ6VhYqmpvLPgvhaCmJkojC5DBEmPWc9Z62QQrN3dHZNdRWVoC73kmYfe1mzzZxcBkfZ2PrxN9oE8SapgxNa6",
  "key13": "DdrJXx57NEqvCx4JyGY7JnNj495GpFq8Tvfb1d6qPmMMhptfCBrF2WSgTinGzwHZickYQkmdQkKYbZnLWqfjXSF",
  "key14": "2amgrzRBryZP6dd8xzgsy1FtXBdYfJs71GejcKhk3PyUqszNsPFdLQnzcf9WNFAnGWfCN9KjhxjniZTWtRrB6S3y",
  "key15": "4d7Vsdvx419aw5dmdVrRJY5kUUF8CBWm6KwRc2c7eLbfDEvFxCdXawHfPTR3kkaPrABL5keukbcut2M3Pnxm16GP",
  "key16": "QiMkXWxpfJrz9eT9cEttKfXR55HqWhHdF4AqyLPtrE2jC6oo7yEneGAq6qPpgVCywTjgNNzNDTx669XMix1iM74",
  "key17": "4RzgfAPM5eb63G6KRPMDHWE4LxvFbm9VW6kR7UCFdYb1YYsYiirzFK5yr4EvjpLDraNW7tDNzcU8drEFkyJ3oQGV",
  "key18": "3SVfQLhn5wdyVM54B36uzRuKPwAp2pUunfihKerhSHbsSmgH3qcvwfHdnSAxBPABVTKjpP3NAJqju1Eqvw66PayT",
  "key19": "2UNxmXJr4vuAna6Nk9wEXkmSFVQYnZjnYxHqmfH4NYZ18bmop2n5Ng6spiJA5A2B3D1pPM2PmLCU9B15r843SdPk",
  "key20": "3WgTp2YZWNecudoNMbPBEaiWkAKG6X4oFnzZNWRT2ns7AYGyEtBNgVkyPKm279fCTj4WvdN9m7d2YNUApnPj27aG",
  "key21": "3F1UwcVMKmdzNfvg8AurTD8m1T86GQ9Vd9TjuvT619a7qgksQVVUU2BV9pURPhPrVFNEibFa5vWCYhY9cvaLb7Th",
  "key22": "49WL1NDdrez8SajMTC6bHk1UEp49KbDXHpFBA6e9LgDBwsRkk35qvcpymcRjuqX9aLFqWiZjxLY1F7mQsLp3Xpg3",
  "key23": "2G5fS9con6LPP8aWDyBiEYvTSDSQaSR7e7g2jrD8UAKoH48kHV1Wwxy2azyzKWErkQPA6aPGmP7s1b6pMbX6ehza",
  "key24": "4M1URmzJcMh4sCd3UcTDnNiHLYYoVFmo6EEmG9pVSHQLZPnn1jeBbhg4ADYxHyDoNa6bQwN8GYBshuBdznMhWVrT",
  "key25": "3o5qZ4AmPQDcQmM4dz58HGyuFSYuthm6aPfM5Yh5QTxnbQA5iTHdwNZXUhzpzWgxDjnLzwJhmwtskxxgyrdcfyr5",
  "key26": "GxNiaLhVa8QDpMjtfMnz8GKq2kqFgkNZNd2gPCeHC6x4Xhmh9xwi2S8nWFwJZbqypQGk1nnRvmpNt2fmHNA1qJS",
  "key27": "pgnWmsZ6XsjYsDksEEnwv2LXqrjF225f4PSS46oXrTMKxdsRZhieNCsGGbd2mesgDDMnNzfE8ka2dn734nnrmmH",
  "key28": "22R7yqt698quYSVbGjZAGjocXVGCgrh56qd4c4Y3CaBVgJwGTBLKJ8hLXGMRJNGqZ2wS3p4dWh7RdrwHnL7HJzWL",
  "key29": "2Yv5e4hVXrLhspCTSw6qdhxGyy5BabrThfZqHGLuoDFreB9C8dEsR4npcyizi4ubAN8zuHggNJpF3JC312jXUSZZ",
  "key30": "XTMwVhRo6UQoKKWQYAFktTKCAzzxG5JFsoQMKbyXx7tteNJCq24QaZMC7JqSKDthsN1pcg3CSDQhWKtAWF77sQX",
  "key31": "3davZNE54N8foCUfCsYxivjrQN4VzQycHqdjFAfieBfuPLujHUpWCdnGq9WG8NjgPVu9NpuKA8XfaTAhAWnLBVbZ",
  "key32": "XECbwueMVSbGkZdmnyHpKfYzbQPb6zfJg2VMkHx2t5iTmitSP88QDzYhMvVuqynepYAFGEv6YLx9tW2oFPfSphn",
  "key33": "xZcdKeYvK8bMmaD2wRQuPfiTm1HbjGXb83crwEDuaHuBV4sZhBMs94eSjNyfcmoWLDQyMXdAL2T4pVXRYEvBayo",
  "key34": "41Ay6A3xnRddtZoD2Jqw2Hz81cmBaeJwAq1d8GrwALcZBdsJEDnFePLjDF59HySNR3s4La3WfVDiwhSaMH3FH3vt",
  "key35": "4NVmn8XGrJHg1BnsjVWoe6eE2e3U2c9FSDYHbruDBVApXnh5FB3YuwA45t8z9rwhHQcd1ynch8UbmLetyYidiEiu",
  "key36": "5Phfq56yJQRqBEM5DdkwqpSznrGxfSkZ6YURHgwbuCRv4FgRjAfXieuimqEqLEs3LZrCpDhwpAZ4YvZZFmWWP1hK",
  "key37": "4MiNMgoBYfu7PfZ7UaaNnD8LEQpXnjA254ueJytwx7NFLXtRenmRCVYjDUPq6AvgZCAbmKZC5Wm5Ajnn1NmYbW4F",
  "key38": "QK9e3rXgLGSnwbZYLgZ4b5Arkw9CP6Tuem5TU3XsmWbCzVjuSWQjf4vMjmZsah3iWoPinF7Dunbez5DBXjwCgro",
  "key39": "3hV3nGgaaFtZidzqQSqwueDNZA37cVdKKJ3RTD9vksVu3SNhZdJ5a1Q3nGmqysF6hSCimpQE8obUeuAp36nD6dix",
  "key40": "29Y1DXCHAXQMYSDkT4d7UTotMHnAej8iAJmaHeW8xuA2cnD1ucFC4YpMPdNzAfBzgaMVrz3q4KGQfgJ3C3QSkG1Y",
  "key41": "3Fzn3WEENQu7bbW3Gv8CU6nVUfWLjXP4sVHGvH4wfaSX8Gu9Dhu7KwnfCiWiNk6XYosz439w5Kvq2MqBCJRqwDJv",
  "key42": "2HerSVMzRsxwowsnuU6DZrvre1C3D1T94u8WrJNPcdkd2nLNaQdmBQtLHPWd27HQgwYmuNZnbaQ1H8HkEcDBTbxw",
  "key43": "cbWMPD32a5caFUPjQWxy6n93Y9V9B4vXPFy1HSJBqeJmXkmWPXdPePaxf5FnPdwcqrAcfEmMiPCMqjSwjgUqnHB",
  "key44": "utLuSaaBAzR4SHzscinJx4mYLZ7b65QHuNpEpV2vv2XV7m7LMYjdEMpCkub64gmjQnAGc6ALNM259v24EjcSBow"
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
