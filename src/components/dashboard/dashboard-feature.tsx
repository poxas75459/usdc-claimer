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
    "3uef3suhoTE1ahF7ksQGyQP5NpNEr2rEqWC1s7ExsN4nY7VM4MttJTdmPLTY5PKW77r4PBzT9xrwvfnBdoyQjd92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVoJFfkPV2q5krf4crCB1W4RpjFZE3rJAeNz4ot5T2uZ9Ez4hSoF93Q5sxMC9VAJRVBK4znc1ig758j57KxP4k1",
  "key1": "3R1PJknqrX5inqgko7U8mpkcd5ZFqGSxCNXSjq9iSYCCA9iCPoWQciUtWNEtYUXkNsa15NjnDwxFeRriUwTwJB4F",
  "key2": "66CByiDdWzsLfvm3sLfb8Gt8QC2C8xSPEs66NCbj655Q6NCRaZH8Zawti145wZx15EvPyFQZas1Yf9tFxQr3L3Sk",
  "key3": "3JF1oUsJvPQ8k2zCfa9DgMDepmHkYC9RWNNrUkRKnkC19TYFX85EGfJJBUWHNCFS6S5JEvVp1mt5LJ3tmvagHb35",
  "key4": "66ZC75X5TG2hKB3vhCHvPP9rn3sg9BerPYoUrHm6uT3AuCBUmQPUs33BwCV51H4W39bZqYJMpr5i1qVBt2ufY1gF",
  "key5": "4wRFsvMXr4TUgZUSCHsV1DAVLgdKuaugsuXGZNzKjHsQoP74Aj4ahyx2RNALC3WwDj74uYeUTjoYBNiLVxmecbk9",
  "key6": "448cnBLeyVdMmNbCAFTeVgmsp48JAQm44yfr1HYKF6Nxybnng639yrtZSeT251446dZ2dD964GwHSUzxiW1fSz8R",
  "key7": "5EB6rjSLHta8VhfZSRAmBznonksUyAG6dBjBGD8EArVKSW8wRDePmUubmvYrDsxBdEi6atmUc1FbZrokdpN6BSz5",
  "key8": "4ggMtibtbgPZpswcJnDPiMyWUUM6u9K2MzLtdmGmkRtd6zjGMn9sJu9QxtbU1r5yBsKLTfRKxaeY37Sm2nKbDXcr",
  "key9": "M7HYEF2rGC2sobeNdyb6x1nEoMZ38zmbsomA8V4Yr8JxjRXyt17o2j332g9HFSDx2qdqENPK8WhPw8E7Xif3Rfv",
  "key10": "2w7M6o9f8HGL65XzwhtVXXDP7rt3D1uU21ca7D3eUXEJjsMtHYmCWshGK55jWEMa2E3y5jHQjnqrKDVX8ff5wnh8",
  "key11": "318FovVCGNAKDWX4r2uaZD7BJ7um2VWaKuzH6SK1TPqtwJvhQnNtTvTbJPGR67KAWNcs1HxjcPuChLdoYmVW35Yw",
  "key12": "M1xqJbR4zmLcyNiNpc4U3dXk9ZB9cVUiyaGqdrqCmy6JxaVVGmDqTtdb8V6JwLSpHKhg9Fv2Rk7awNwekD5kr3c",
  "key13": "2t5tZtcNpeCZJbtCfM4n8qRhjQ8N9DGWyRwgxufKPNcwGpbCN4oLMARddXjHDiNa5V2VMMMEEVDox3BzWNdgWnrM",
  "key14": "3xwta84wv4G79CD9UcAakmXriZ9RPoQczEHMzGhwEQfrXgvC6QFcHySEXxdMYaQEdanc4RzFhywTMdbCEnLTUadG",
  "key15": "2N1vG772bS3VS4uYK6wjskDso5JWwptgbrjnh5C1hnuYs72DvqcSDsL3VhMhNp8gfC7gSjWW6ZDehkgc4NMKvSFn",
  "key16": "4JyNLEg6xAkuBWk9u7fkST6x2boDVPTcQHqRTous76XYuCGVMPUoxfdHyz8SsvBqjGzvgrF7MrYUP5z4n3nN1PGt",
  "key17": "38NArZ1ztCC3y7sChx898WY2cz5qCxvScEnCPFifY76zx7kCvZUqZiGXjSqYroHrFdhwJzQFdBakkEwmPTxP4RPz",
  "key18": "3CL7aUv6mSSDXrHt35TE6fhv8Fz7i2XBK64bMtUNKRCwguZ1fyDG3EZjpcWUgHj6VXxq6FjdtELi57PYxqHsW7Hp",
  "key19": "4gLmV2fCjWZcvCRfvF86uzGEybygrhYqFcmmaXSDGykb6Y3iLMikp4bMPHSbDjy9u8tg5yoL33KcXx3Z78Wrcgp4",
  "key20": "4UQTvfvjttVN59iYnQdn2SRCoYsTiT5ExzhDnF2hfUPytNVRaA7Zo135wiigYcEh4KxSQBYDJV9AYwG1StPNBqBd",
  "key21": "2Lv5fSMnhg95hn1vQED3NiQyQnH5sKq2e8NhBZUMGwt5qRkMZuvdhf9uFzDr8rgQUxGBFmXSxn4zoTJbDWJNvo8e",
  "key22": "2uF9MFDa19ExutJmCrwuiTxrzj2gZJDdqC5i9KtXpPWvAR5gNxmTsjYygsppnymMm5LwYVadoVrriZmCvKcEzFe4",
  "key23": "29pcpU7AkTdcuNXZQr8Svt78urUN5tKkzMxnC9XePuhyBzjavSiAGLq4Hcaoa1wzckLsv5sYdM5ABGp8WWirKfhT",
  "key24": "3RuaNig73TR37NK5Ds3jEKqVYjTZ8k2gUBAcGfYzqjxZyYw7BUAqEzuDERN1v1anWq6f8pHpvhSETxxguyK6cFus",
  "key25": "53fECCYVTToY8LWK2tr6562GYni6ATHn8PLVLVaQe1L9o8FaWuCBR6tSTaNCoyP18Q8UV4TL7TMN1MuEopXtSZxo",
  "key26": "64SLzTqR6BXbk9NRkDXeX9jZes9YbudipPqUtoiSG76YMH44c6rZtu5J26zkHpnNb1wrAcNgwzcUCddtW3LtwUEs",
  "key27": "3RKq19cHx9vPFLh352BMqhd7S1RekM5aHuiUWeJoLLu9tYupBCPqNLU3xK5NQDq2y5Pzh4JF4eW6ioco2JgemBb5",
  "key28": "5qf3zRJFHHWyfVus4oBPqPqLDFjqV3H1x5HgU78Suk3KtvSSWQp1c4z3Pq9r4EYfU1iGNr3atUbUF4ywq3r5jDKK",
  "key29": "5PXhGQSvbPs6WYCoeA2ytSbanW4zip6GisRoUW2NPjSQMLQcY9rLyPWipYC8sWc3yYmK15WcDomYB7DrkQS7Ruu9",
  "key30": "jHVnFaaVNLRJ2PkLsNZgR24LGpSaNZpmPw2iihPW7ECtc7XEJchq3ZUfBnqwvVufJbwQC2P6kDzCS1rEaXPtfre",
  "key31": "TU3vyvDHQFTwkKLa8Nx6cx86i76P9FSNarvmZY14J3iojitzhN1Ts6KqtCZW48QCQGPetLaPZ2CEGyucP9d9JTJ",
  "key32": "3SaoDaXeJu3QjqrwqF6cmiyXCVUAx3YqHFXgCESXHSWas38Gimt8AiCSf4h6PS7fivU44m8AggxfMqWKznN7SxbU",
  "key33": "fpCx28ihtmKUemsCXoc77GdYXGs4XGvZV4n88dP8FcsMGRcvtriYXZbSas4cEwrb5V28mxtcoKg3wQU7Xfv19jg",
  "key34": "2jxes1XpgRadH4rMSZGo9a6xJ4t5r4u6sc2n7GmEeB9fFwF6CX9jpF1pw16gtY6dwF1kVP8zjU2JLykeheEQMsGP",
  "key35": "8sYw4xK6jVyD3rXRGTm4VKPk7PU32JaW1SE8dSNUcBTq5PM6xPVVwEnZgvjnXKwrVchsyGtQr1x3GxcjPx9sfMp",
  "key36": "34FgMubJSha5WgVR4ZPTTtS7jC9TZ6kKZDY9wSzxXkgFfLHdg4oCUrexidGVuYKagnuYTF2gqtpV8xUyAiDxXMka",
  "key37": "3Vr1PBFnuPmxTFEHJr3HQhsdYV92WLWes2ZTnNgTPTdpeSzX3QZzbVV9YdLEG8hBwM1hLtrPGaP2wd14Hfjo2HrQ",
  "key38": "2QVGpZQUCH6btuwEYUt8nuZ5vo4nyFpNtDsuUTkt7X93gMFxcP9v2QQ5JotEEbHuZ3raYXd6XRSaDFL21zdrhHyE",
  "key39": "NbHLMQP5YzP6ovrVXSg9W32ceGYAkUYqMSrYZqi37ZaVzuTrrtERAwqrGx4fDeJiMqN8KcWUi9vJ6H1f9vATUkc",
  "key40": "3tnJnAszigE1RURDkKjaUcdth9LHycj1stfS9MFJE49QSFKaJ1TzQhASA4h5KHHa1wifZUBrjP8Q58K8T76Pf15P",
  "key41": "4mxEgYpXr826Nd9J76fNr4C7Pe3N6tFx13vdPiCoLeJigQ9F24NkV6wgx7UJ28auoZRd8Gswx3rurv96Byrxpzgx",
  "key42": "2UdHBkEptUnxM4j8Si4zdvQWweWSQ5HpP6aCgb7pQzBxyw8BrJAY4yjged16KXgF5TerFQAmQVLJ4CeRH1ksaNTX",
  "key43": "2uLUtthnHrXLd8SYwgh2AH9Xi1fWox4jhQt31z9LnYBYQpyopDShp4Zh8LN5rLufHbhUB26Uvm8LzwZyegXitPyy",
  "key44": "58J1LWHgVvkQbYsTJHxiedDNxhVjornR8wbzRh5ZDhoLWcCzvsSRKisHjEgcPc3WHv5fvZ75ErGURra8ymaPhGEW"
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
