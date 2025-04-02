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
    "5CYNQXmYxTbyXZWFi8G9bo8fsDJdcawUxNDMGv8tSS5M3m3YGSuCLdXKKZM9uf3ZjTfyvB27fADWCsmHpFUDFXXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37uQNt5Uw7D6az6o3Y6oscRYWzm2TMGfc6zqWszjhD3DTmeF7w8qxR67R6sCWfXc3fxp6dUpW7DSTSmenSxUA8FR",
  "key1": "4cttbapzXnKUeJTBhvRbxup59uuTdka9CXXZzg8G6d6AVJdLZSHgDZ9hkv2VQgdNKWxWARe6YxV48cbocRwYeN2N",
  "key2": "PoTp2P3EHj3AbfvkkK3BFiaLTq9HAZBVLUkezLriVfTw4BZsxKuKUBhdpmA7vzAySP8ZMirw64ZwGacxyji1mL5",
  "key3": "pRUoVqtGisearVmhFLatEtLNZ4yLNKXqDmfn7BTrQWKjtdNKmuRhXysPL6mz9CuRBidboUoyvgLqxMFemKqaZqk",
  "key4": "2BtoiiEjTCgz6cgB8Hk4wainSX4yTfFcUV8fRMtLvPa5RfjZz6yB9n3X8zFW9BWJrw2o83Nx7zfJkVAJuSnNQkPL",
  "key5": "5J9YSaLNC2DG5zW1kBUWKPELewM42ZYvWL42s6KSSYnmUXYpZm5vrD2px9WHaaiQXXJkkzv4ScUAFX3QDFQ79egJ",
  "key6": "3LLP3xxJrqGPtAT5EUvrbeB75xdSbiqomZYkAxDh3o4cM6ANyy3WUaBnS3HNYFskpwB4ThuToSmnk2JjFZGLwANV",
  "key7": "2kADm566U6KAFUimKGoQhiG3GZRCzYWmjeNq2Ek6N92QR834QVzTHVQD4mawaJRMqxGYaJUCJFnt5BzBvpVEMY5p",
  "key8": "3VDyhRzsPZGywbL1nwjjB9yxgNoKx8KQQpebvcKxDumjYqTrgQRJUHBX8z5yAx1vJRLfj1GBCX8RkwMdskEgadWF",
  "key9": "VkMGPwoCzYmNM1Y6QeCMEGReRUxFmCaaQtVddymydwr66iZTr2AU1gyHL5N93hpZ9cFKcc1gycMWw2rBd8Jm81y",
  "key10": "586nXuKRiotTDscKfZaA81nBuJk8fyV25WNRJUUQEWKdBWVhz9uZc4Jbqxu7toYVkWX8G3a6iJLpvt7jFCgYKaAb",
  "key11": "5Jw4KQnSGhuNN8TWa3e3wdkCFhhFqw74ZRPMjsUVREuE2TsJzauvF16Jcb76ARpWdU7uTxT2PX6apzU9oqDJuXdX",
  "key12": "5EhWnEdzPPU9vocBxXQprHJgt3MWDYQKR7Uda6N8m5MD9gktTyyNAQQwPHCDHx39zaeMGpyMVJgAszzAgfdDbSGw",
  "key13": "L6wpraSozwxBeNjcW8uuvkQjxStnnnCn8B8RsFZ3QnRn9Smg1pS14wL5Ck2QSkwUnTHG9tgxaDFw5ZeXWuq8UNG",
  "key14": "3ezxw5fC72JcXMQbpuRS9ciVWBLEv5LvqNhGYCUwpxaw9VG9DypoSVgamyxprMVrUA384LeYiTu4MMvkxSSSdp3o",
  "key15": "4Vjmxdks76rULdz7sfNT1acLUNuhzeomjnpgtq3XVPkN2cYJ1fHszMcT9wdH1iBcHBjJ9hNj52a55oMHLLeWAqDN",
  "key16": "4D72vxtjcsnkDa5ntwpWYJHmSGYpDY2HVPqSxwNXsbfLcBj5droL6zQrWezwmprdX7Yv3naH24RzySZHt7HBMknj",
  "key17": "6HuxuNB3zSLQKgcSasdb1PahzKvrcbZQWMb4fQuj7SxNydD7vJJXq4StaxaCaYs7U8fn8kaBBCKxqxLHth4Kgr5",
  "key18": "4WkPrKFsy71haRoD5xAC3WMdqrnWyp2fcF4x8fXsZMBuydwqXc1PvQgjEi8pEyejCiYmGpXjo3bozU5ddHDn6Wd4",
  "key19": "4b2VnLSUsHfkrCdH6HPdYgR2H6HrUudDrucyKs3CqTZSVVyAGkkEet5AopyBKZZTUsExPfct5RKnrrX3MY9aBu1D",
  "key20": "3RePr1dfmwascKUDNzA5oQ7yD1PzrwJkincrgU2RaRvX1W3FXHajBv32deymtHqAhZpW4vUdCkAsAf3fYZsNFaHf",
  "key21": "5jWhNmWYk7jdSMBhUEBuHrQojV17em2yahA15vwGYKTTUf6ECGryvpJwtSdETEKYYtr7FtnCFZjovCCm14zho88b",
  "key22": "sqeQRpfrtDqNfW1vAP6Pr5QiiTh1rgCRFpZtCjqKe8HcmvrtYt3TGqJSYfdAz1Hj9gNSV3qAR6WuphZusUjB54i",
  "key23": "3uPc6r29q3WZqtRsSE3ZiV2X3Ygdt59RFoiMLjBUUC8Fv4tWZBZiZAzuiGyr6bFnWNZsoKTvqY1JYoB6Nex57QSR",
  "key24": "uwQBRgzsAYKzywXCGD6sKbjxEXQgdUwjNwS9vASspN2Ks9k6teTTZw2vsxSbapm4YmAU3iv7KTXV2RoqumPfeiQ",
  "key25": "2NByMNPKXQqzJisbx9sdCUuu9kQAPkXbiK935XjFAqYpXbULvjndeSmdbFxTrfDZ4vj6mVJNt9QxopT2KNT1mY4C",
  "key26": "5k9UkpetQHD9jjuejZXgUgCRxuEnTie8LKgAnFsCFDq55dTSyq6dgx7Zbj85N3Af2hyu75euReVsRK3AWpHAvwvR",
  "key27": "58BcHtbyi5F2kbFyeaDB21i2RdNQt4pBX1vXVfRhSyrFPJQK5Zk5uBdaJe5D7wEibQZzXk7sLzzM6ZcWwmYmBXig",
  "key28": "21ajEEQjUHHpMXwxwPDjQSj4UiG12sJGyhZNJdjd1FS3cxzYwqtwvaNYxCjXpfYbiLabUxGP2JA7aV2sq91i5joD",
  "key29": "F67VsHQEJoxioxoso5zutwPoETNVEBDJUVYqKduAr5MsPQG8DHPPQpSypEyuik8pUXWwdjKJtzN3F6Lbr4uknLW",
  "key30": "4zvZtqRiuFNMiwoNPx26Xz7WK2nn7eUvPSHKnMbU5USRaoAQU9QwBQ1Wm87uPTtSKUA8odrotwssDcy23AMVhDb1",
  "key31": "5qK83Gjsd4pjc3QXcPJqvrWjzq6msKU1me1b91abzJTNg3FrhybxswMoSpESfwGvkq4cTDJWxPXA91rGXfvttig",
  "key32": "4VsQ5nBikL4hqcBWrXhd9R6nKcDS9yGGdTAL64GzvTQoCYoUHy7vspq9TPEkLhWVPKoc9xgR9Z9jYKc2yY5LeQ3Q",
  "key33": "33dQs64TL3Rgsy6XWmtUKQFP2FnUfp77qMjPwtkr1wjWZNgHZpFNxoYrUMxi3N8Dt3YF9GVSgM3WSCQ7ECR4MuzN",
  "key34": "2aC8WBUYZJWTViJPAJRj3BAmoPamNmFN66Whk5GZTQqFKAs6jf8tzBydhqv12WJTyv2PLpFtKpqCjT1FhxhEgN7z",
  "key35": "4qzWSSdPMjYiTq3HQmGpcxCxBkyVdau67E1bw4S1iiS4JMmQ8W7fCrBwajy1vAzP2qYPrQs7Wjmq4GsQSxbHq5bq",
  "key36": "3RMotiL7Y3aZF1ZWpr1YubCyjJGcS2LzQaCqnp2RsgvhhY4qZibFAUt686grhXQQs3HJYjgcFTPnCdyBUT76kwCL",
  "key37": "U1qKj2o1WWUh6yJwRnU8finxEUg8Yu5KqVgP6KMC18T8P8TRacdzD7WL3fu8xqUXE8dNKi9E8yZEb1VBvoxsbXM",
  "key38": "43cc797VNkgK5C5GrSgp4wp8YB8yKHLExZj4B3qiggS5Ho5fh25V5nerHS5rZWxbNeBf9sJLWQ47netMRhZDwaFf",
  "key39": "52EoQmWt75FxjyPuKPB2pVBSRGYS82x2RmaSFF4yKb1DedkGCTUFJUz5tPu2BqHWgGEuMh1eTPn4MqWnbHQxQhQK"
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
