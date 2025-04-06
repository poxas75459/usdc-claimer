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
    "4RxxkmVpgJg7939tqc29LW7fbvu5a3egVSNUWc1LbuDz94e74tw5EvsiUiV39E35hnkYQPwyc9KzPcEsy113rFzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nkSdUCuhfDGnPEu8RDF2ZsVraaf5gSYUMjdSg1odTD4HezK2BSA4YeS5TWRH7fUceFGhMzSF1M9rMtcpqhzL4FM",
  "key1": "2WTLSJTLmPQAGtGrFY2y4TweP54wkPmA5HVoiH9QsoCqGp5V3CujoxsZpCWbHHJwXVHaFokm579iHHyFDgxb6irz",
  "key2": "6tx37PHEWokJjUH8rMR91sM3woR65ZfZyvL5xW88qbGYwVWKouJeYm81SxvnFDC1JGv5mLGpjMNBMZjbyhwoNHp",
  "key3": "xsGZTaeZAQAKH2UshWE724uvP5SR9a1aagAcEC5EHESSsythTaBooTJazWTktKdu7jMoGs4gY287QTgDyA3NNjX",
  "key4": "2hAoFKcDBnonTihGR7TdmRzTSmJEsJtcGnEr413oC7XbSZkEb6G2cKdMGZmLSkiDKnAvEfzeLCvBs5JCezBhxzFw",
  "key5": "2hGWbrtgJdN2XkLF9zDQ9uVSaMfqaMQzKG9yRLYHx4bJuY12L1PQVFgVsH6WSPqSnjbyfoY4T8JyGt1HUGGJ2xEb",
  "key6": "5TTGtZW9pXQxCxoAbdNiPzBWyTBm9Mckwrp7XV2UeD293ZWc8mAH9i7jU2g2kY2sq3b8Txj4oBkk5bTWavXqpYY8",
  "key7": "4vVoKkAWd7f9daGnN6Yy4ZgECCRfzUWUxAq5xaJMPgpSmoxVgnWsjrbf5cmNDCbVmC19S1HkM7pa93fZ7Yxp3eFy",
  "key8": "28PC7qPcYeofoCpoWtJRdjQdBiaEt7to1KMFXUCAW9dNMYFkvnqGP3MxGN3Mh7j8S3e1sLgw5cd2oBkyJ9rTYman",
  "key9": "KC4xMfxqsDK2R6iH4Cw7TjwASaB4G5Dx34RpdkzefCyMdfxeBBSwdsuXfdhRWzbRpBvk2QBSxbEEw1m1M3Ldx7c",
  "key10": "56xkUQmRkVjXpDC1bvCe6JMWKDr79JDsP8o4p8GwtFD5cpedaFGsCv7Ze8uz3cLtVqdKXF97MDyT12CGioqAiSYG",
  "key11": "vU4YFyS7ovvHxaDDBkWUQo15nExYMunRhFHCynCK8gJSBSzdXDkSivEVKty1vnAJM4tijNgd7dHY6gETgZAbgFp",
  "key12": "ru633qJZDof7eXxS497eubigKgHde4EXvbWhxEjwDB8bUhqqifiAXg8HsVtxNCqe8okjfc6qr25t3XeqiJc8Yaw",
  "key13": "jjxjNrHuB4SKaEfFQ8UrWWcRdZkng4QnCKjnMaTwxq4XDbCQLjqNBZUqGmQhTUyiKYcyrNSo2AyfkzdVNe6QNh3",
  "key14": "21sXSKaoBDS2ypTQY86NNPaMPe9r1UVS6b4XyRa77jUyTBH6Dh2M1vA9okq74iVc6pXppzpHicWqcC4tjb8jbs3S",
  "key15": "5bAMNNKDaBWuuKcmgrSWv2fhPLWKiDW7GkLEDj6Zx6ZzpELXmoddJn41988FFPsWeZxTRSN4aMD6yFbLCrVgQxt3",
  "key16": "ZUQQhmRhPafk69DTZ49oVL43BECaTaB3v8EzAD4NGJw9ejfhH1YYhwy58wkmipjwKqAUdxHzFxcfvvDUwgsiXpr",
  "key17": "5uowcHDiF5D3xdgQqqjGeLiXUqUWkd6XuKMdP7LW5ZYMf2KAqun5UrkKNQJu3yMnhmbviLLJmeC19o9css6XmjeY",
  "key18": "2jDPPJ8mtLf6ep6ETDa4WgAGKsM955KyHFcFAzgwPJo8gdoVz8WtmGPiBo5QMSL97MCoFudNnLgr2csTqoRSVBDr",
  "key19": "2snYVY6BGRZuPwR8mayP93hNpohYiiZ3NVtJN5vF3s5kcmE66ydjKeSwP6TxqVffpFQjewKTfP7LUNpQ4PFQKJE3",
  "key20": "4fhdnFTxPqTQy3C8cYgjCHL2d2rX5Mu8P3m61UMgixMiiqgEXRMwJ6VB7akKdGJVXYaey7tK1ixLLgmgE9oQVB4m",
  "key21": "2w2Z874iCw24VMnnEyWapkfMooHSed2S4XywAZoVdQ7cTWS4R6gqDiJM7FTeBsaemxr65RoAYgkHZkH4TH74R3Vz",
  "key22": "53vSZsmZkSUDptx5FostE9925AJCi29JD6cfF7fWvoM85AXfsEKxeg1Ff7QJgR7J7DEMLx2P2FEttyuM8g5aRueE",
  "key23": "54iv6XtAVy4UYrSrjU5dszdznPt18LUstkELs8vJ4TsnzNwMZ8jiPcJYi59TyiCxC5pPnv18nXPsFVLHKuTE8m1k",
  "key24": "4nESA2vQWsoZPGrjsLdj87b39b1otBw476BCPgkQw7moQ1zRUxw3tBKoJ21TFKmm7PPH5RAs9i2vajwRVMjUFAvR",
  "key25": "4nUf8ehpSY5dKaghoAdJoTHiyZkqKhLr59PTfGsJMBsvfVbYmtgE99ATAro474mEMqw2NCrHwqbvjszDBJGAdDtS",
  "key26": "pqRQsgX7JCV3QKtA7HtaHD9MWtJ6nDLTnEtPojRmnzc3qZsWYXv37J4YX1GQJf6NFsrnfUxfxZyerSECwMnfi6g",
  "key27": "2jKYRi9TuLEt7i6pTgATjgWCuzCTdgkMEwd3Tkug4Gz1gvtDWrwkPYUZXBqm6n55AndzT4VoVL6ZncVaL3SgdQoj",
  "key28": "648u9bmeKbCukR8UagT8WZjkTMzvQRfeozrX6G568yJZ6bRnGvxJvsSaJNRmxPX4sRumPyRvJjD6saaRmgMYCoxx",
  "key29": "1272mPyzo4ncj5SXiRSFyQKS9CiqTevspW6NuRb2dn9Bv1ZrESaaKWLV8ABLGNUcgar3495ZHEMCku5HXoVEMjYu",
  "key30": "5pm1TEBPby45DmvnTUHqcwQF68iRMhDkjoQqBKn4Uv7Bp3137r44YECJwH6DaoU7czG6Rv8nbcigm8siTPPAf7nq",
  "key31": "563dnZf5agFsTs6mLKXkNezNQY9E833mUxmFiYp59TuDjAreYe6zA1H3GLkMRGLL2EMVgQDHJKj6CdofUKmynd2r",
  "key32": "5vQPtAouNBzrPvwtCsY6wSX5MFGLQYPXhaLyB9DCywHiKM6YGvKptRnckznvkRfjpHkBxWxxQXdf96hGREScBoS9",
  "key33": "379aUZHem67DqVU88Mw7nicupwufhz8UjheJT5s1mvxVjbeGRRUwQCvZAdMubRWL1pZgxk519n7XPsv8t9wYUpue",
  "key34": "3sHNseGq2Ty5gNC6yKDMAiV14sGPN7xkk7StJSGfguhGFj3RAuCAzaWpA2z5rMWVrm253BEUzPgN2JYERyfDPMkh",
  "key35": "5aroxJPr1Z1sQgfYHLTmcamTZ7N4tdZwkJpm1tywuMfu3DTnwt122yhkmSsEy7PE2z1nthGuxsw6B5Pcxrx6TEUn",
  "key36": "3kvRHM94eNSJBEgR1kR1QtcArgNyHqmCBxRJMj5ZT5ovhjuDrjrhqqWK7KBRV7SdgiBDHiJiNeXHfutku7tywn53",
  "key37": "4LvGNaobXHRhbKccmHJdUhQTTuLBJDmw14FZ1pW1NUE3GX5vRXYoudsa4hJv63hPKpWS8XbNSwQUHHGH7UQcTkJu",
  "key38": "33o5rhBydAPL6FMjjwKs3MKcDAqzDfLACN78RzTMLDBXRm9s9GnXJC254wGSKPYBiuRKY1wy2vk8sA9u1MmcB2jr",
  "key39": "3HVtcXhfM4NrDLuG6nfE5dY2ibgTvTC4LAaYX3wZ12QwWt45BmkW2YvbbBcsqEZeJEqYwo4j4H3kp9CJ1oMpnzfi",
  "key40": "u2gyx74D8T574cRHSadghvQqThZkWgYmT7XLJt5Rdv7uGDDtSYLkcAEViGH4RuikhqPmXympzeDJuYcAUWM93fB",
  "key41": "3QfapUrEADqkm6NdYWHuCThgfYqv56EzqVZshq3ekw4QMpUmYyhrDAUzWUmzvbYTXfkWdma1SzK4cpspPdyW9CD6",
  "key42": "5bAeVqwS499HVjzDJesPioAZgRY6fFZ1EpYGRbhJWktzzAhhvFGcWSoVqrg8RLhavhSoduu3VZYWLmwggeStfDmT",
  "key43": "6C79sgPDzxzgHDsojvfq4hdJ14SaXnsLQUbEchek1LbrzjL2HpcKQZsbBTKMWpKNqC6MVBnqDdE4JLaHZp5pAWL"
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
