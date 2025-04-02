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
    "4opaPavjUNAjfbMg64XPaDqnsv1iNwHHRZZhCMZ1YxwJEFUT1Jm2VbYXD4bXaV8vybUTHCF3qtFVcbEBkhxmFwDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4yfG14xCRpcvEppntKQs4wodiGHBQ4JLfRm8pyy846KRExcZBSuso9gGARTosvbQCgoGoUGniQZGAMMUZjtrgz",
  "key1": "3fN8othfQmCD17uyMMqodvfTD1UUbiKJeMxymGBu8htYvKP9KB86yBGRqodsVByr189FKXZALFByf1ByvsddGdg",
  "key2": "5EjMnCoe9fwxouJrFvcmDK3LT1BZMKLiZ9Ryi7BvAeoxSBBMLbU6rMnpx1xUHtSmkFkUWpnkCWhtf4r1T9C9q9V9",
  "key3": "5PFqw1t18yDWqo2UQ1PtUPtscgDHSFAkr17KarAjBKiFbokTafzUNA6q7JhNPGEkpWquU3ByDbdND6s4y8MLnqRF",
  "key4": "4cZ2aPsUxNUXRnssuxrktChwTSisHQaM19BD3bD5172FsDf9ikFnsCrHRXWeJpChbZFApzheSSAMquodx3Edpbqe",
  "key5": "2ou8jthFNnoL8zTiZVoB3YGtxDeYk1kJda557ThCHLtdxCwX21vaTPDHZE9SQwu9QExDDKcFcrPS4poDjRjSerZo",
  "key6": "2dpvotewngAgauLzWTNmwjg3RQ7TiHoP6ySRQTgHuGy3xj5EUE6VcoXc9p4kefLqYvTscQD18mTvo9Am7hNQw9Zt",
  "key7": "2PtWCXgfHoiKrAQYKjbbp2HAP9SuPcExwZGoYyJrvwbsQ69jhWt1G3VniRKZz2faPMNbGNbMxrSbUFcMYZ6zkkWc",
  "key8": "2QAdnFfFuu5XDEcD6Wb8BWCZfd6fDRLggBS1Nzqw8DeskTf5o27Pk6AfZfTdkdHmXPVR9asUSQkVDpMvSi4qvZaE",
  "key9": "Y42DT8CfRWNULkjDBzXtsJ6zokj9QnQa9AcLAx1FQ86fiEGXoaqHWQmJ3vXLVHmok2rWfKS8cX6w2xnf1TEUvTc",
  "key10": "4xzFqSD4eAPBokmZYAw8P86zhhEgF47mxTWeBx9xu7mkjAGNCitiEbxqZozLKMnp8Fug9WHq1zPEvPmnD76ft2ry",
  "key11": "apMBAbeLiR2wpcgBrnyztbMg5BDhrwJBNKNNqBDF8f5j6yTNJ8TGux5fcGre1MKc5LGkaRag8jFYCJaq4mQYrsR",
  "key12": "4APrbV7Yer1kdhgd7RSXZokYfbvQNuG3xzPSsGE9r7EBZSEXJ9cbPxuGU9LQ7iXMHuqzqis15nnWXEvRjbsEZV5J",
  "key13": "6MwfaAcnJs6cNK9JcCwve1zBVVbbSGdS3jiR9v6LB1iEXAh8XtNmtr9DDXoKwtvWSYgtjNSb8fFkobQ8pvD2QUV",
  "key14": "4TAHBAFbVw2MYaZ3f591RUDdYWB2ZAvSphFCJSGJ4e3vadeUT6pNMENVaxvBJbx5R5MrT2gLXdZitzvP3VQPcMox",
  "key15": "5EznSWwfEvw59xuvbSE5NgaPt7MfRG5SicC6R1dBWChoYCWrYFAZNBjRwSES5aMEaUqDqecwp2UnNQUaDAp9Ksfd",
  "key16": "33FZis7iKDqysZTtqVZSSmtiKzChxu4tfQzzdxSULs7yhj4QCcVSRmioW4gki3ZWv8bh96y6snFWuVBMnLygU86o",
  "key17": "5s76tbURpRUUrKke41BybjYSPqrjorsESjNCgUCTHC7GbsivLR528QrSoubLVgXicwG3nc3ZYNB3RuJNaY9CRWLd",
  "key18": "5r3tvgmdASM2UXD2t4Q899FQgK6e9P3pintufM712iR4MxiryHYGcVWKp4XAFJBAh2bzQGi15AEhFQMuthyhAP35",
  "key19": "36mZsQ6FsPazYyJQgzE4BrBENzQmv6g8T9ZKGKocyBWD2w1u7WXtZ9z7HX3PM65VhBPqojHdUC8S4Xu9PG7Q2Fzc",
  "key20": "4u84oyhigiDobH2QezWoNcEaoCA3xDF6dEv6C6bsNRVCK8gkNiURuTgZmKHgFubQcsa1VHnRmYNZp4DAtGDZP5RS",
  "key21": "2BSjnSw7WQFnRoaY67nSpDRnPVTayAuCg2z6nBeb4VqT3XsoM26i4L44xZG4RBBmgyHPkVJEh6gypupiwY963CBt",
  "key22": "5Y1ex5oKpQHN35zHzoXhoTcB7sCJYY453be9iYQDJTreYfU3hdkHfkWtQPzHfzQR5R7TtKvrw7sv6uDfqsW8Kjgk",
  "key23": "2cHQDHwezWPovRWPSz2xD82VZpq16Rmi8SWaTAA7dqzCgovX1bwBqkyfxSTf98gb46c6xcw6o1E8DG7YpCgGnADR",
  "key24": "2UVy4hBk96K4YJWDJoCXKhXBt277sXRzShaW9bmFKmWiCCFyh1oG689QHpa9pfLGL3R8n3jX5oJzUn9PnYwFt8U6",
  "key25": "2sjvAV94bvsPDtMxRFXWBfiu17tBKzarSAGfH2ASUZx7BWdvNo2ZxNSVmgJ72FU8SxK2z5BG383NmTSWKQgkaXQA",
  "key26": "2X5cRNRRfUFGqftMqP5wmSDgnTgGPpME4UCqqMDP2kRqki6uYEgR2We65h2bUf1mVtN1rbvk8V6ThHQ3zrVsf8Fm",
  "key27": "4wpAUrTEFTuyUR2K7e8MrKpTVaAZBi9ZHWFUiuSDvdSUbRbDbJxHBDYuEYq83u9kmzku8GVNYjgAbZLXnqCixDE4",
  "key28": "2ueJ31ErudWka44goKtUSeQnVvgL48TxGjQYeRQdjRX8ydwTZnLGgAb1BTDEjEJU7Ewk15CPnU8k1KANi8MLGVBB",
  "key29": "27M3N4Za5Ld31rJc21PnGd6Y55fyTr65A6ajc5Wm8XeeyVbUH5HgqUgbg8Mp9ZiFZnTWJXw1TGXtMsS79BApBj1y",
  "key30": "5CCMXb5E2EGavv71ZQapMLJs2JXPEzjfjHu8t3n6UWX9rUsmCSCxnneTDcvecFp2mU52v1ZVATHD9UrLxoFXrrwr",
  "key31": "5NSe7nmHZ6bKfn91qseS44xudkmAiCRBY5pVHmHEHAvHpVmaf2Lz4A24Y8mp1Rw3ebjxZJtTKFmvoMD6heX9MUs",
  "key32": "tNMiqkcQBhD4XgppxT6uf5u1fMhinZMBUrazcHrUY9PstsdvXuUsUw2z89hEEvhQAstKD49ko9zCfnyVBje9kWe",
  "key33": "5HAL4ay6HinbsRsKLXEuFUpeNyygZmGujbKFLgvuM7tPbgcdVvwiKP8zo4crS1zSnhNcyARUtiJFENWFdwEZPj3Z",
  "key34": "2sNQdvcXVMvmCdPXJ5vseCHM9PY7uuoH3zXigGAymk3AbTWHqmbeq2nsXnCwGfZgvw7A736ReSjjDmWa4e3TXmqj",
  "key35": "2h8NQRtaMrkTDjiUBh35YRNw49zNevw2KgKFM5SeRCWr7CycdH5E3fQDcvSL6EG8c812AhzAFvUo79q93AMkEdy3",
  "key36": "5RGoKbLHpcnAHpYnEZveMMH8vgjQcGZwwaxkKUqow6xsoD1n3gW2ueVqXmozK5Ah5yBV2Yed9ARXswkBpvsd6jUx",
  "key37": "5F35GVovSeKHtMabfvPynSXJXd6eV3dktUrLaDFUNMpQcJUFn2FQbc2XxwVfbCG5Q9G9BQ2nZnWkWZMuT5Uvtyun",
  "key38": "2WRKJ3s51vfrrYXQUVQR3TwMEKFwBdqNBQR2ykW4Coa3zXHNwGu3rUDYHV3fvH5voQVVsFCGJvQQkTCiRQ8uZURV",
  "key39": "62ds2VMPTuDD13XDLvHRX1yS4vq4DWZEMMd9w5YHgn3ErHgu1M1waQd9UcAD7YMxeqjCE3tjM8WTEvvEnNrwtDrs",
  "key40": "4UyGEa8ASDj6aqhqyArN53tCnK6EEx3rUL2BXuirbBg8MKydJJM94iwfDdYEWc8WiFYg4HFS3voZ8qCgBdJhsU6R",
  "key41": "3v9C9HwiN1Ek4YjSK6dM7ZD7VjkUC7iK1QFvKWK2yKv76vC7bQv4skQ8kab38otRowkZDmEAyqoHJMG9KTghNRH3",
  "key42": "4bs5bNzYZbWZ8ZhrJ1VwQQGYDHyxrVKy8h9YCkhBKCdhFrrwt4399Th4xLtwH7XhCbXJS56RdpJk8YBwmb7WtSn",
  "key43": "42UWeq8toic7xyqZd86mWSA1oiKN8zwzcQDxutEAs1RJzTLjod9tTHDi7nmve8FJzEkvfMh5UCopF1GkvTeTCBQZ",
  "key44": "2wGqgwKB2WJWExLDb3AmiE3rVKpDkSLbPWnzEG2gtvGAPu9SZKGgZoYefWuCRFW4Tf4LwsXi3EGwJg3b8zuGxtjM",
  "key45": "NNBFRGstwWtcCANKMK8QGb1grz3nMYZYzYyWFzJY8mtmJPcBE3EkLmXNM6x4u16E7htRephemtCxkY8qeq5fxv3",
  "key46": "5k4G5qoHDFtNC44eYUNDSo7SbZkipoBSRrwYzeVPyGwSJ6y9u1k3JYQutUrSMbewLhjopvRAcYiVzSuTf1bmqUzp",
  "key47": "4unkFMhWFqJcopMGEvr2tjFtpxQTdD6WMG3g49Budt4yfMBv8C8cKLG5nUYPkezTSMVT2mkFy4JJd5n2YYqtyMwW",
  "key48": "4bMZqbrNf9nb9uvbPsPDPjKtVHyhmwdijzPUmhufhsZjVpa1AoGtR7Ua6NABaErfvZjaZQ32MM1WGCFRNhRCewCe",
  "key49": "33MTwNoKjgnoGXNT4urnALiwinqSkRWPzgNV1J56fH4AWawgZXsHoSfBv7haJC7daksjvaP3TDiasqZPfBNunzSt"
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
