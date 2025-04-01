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
    "sgpzSezqjZAXurE1DSVqs2eHTSgNDuquzFbZB2ULpTEsFLDd3DKmK87ViVV6x1PTJYGfPhLGzLhSaRqQcrmFnnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333B3YBGk4TeqfE6Ny3bedNkfi5ayoHgp9EQm9Epm1XwNbp7c2X8yrfKRA7JHaJUVq8QbCkR7rggta2rvyq1xRKj",
  "key1": "43y4ffhUQHEFzTs8cB75f2hJZVXMBUHNB8S45E3qgxSERkiiKvrQ3UmTqfGSeAkpYwT7PSv3SFSZRG2WBpn2HZAD",
  "key2": "4axEJq7M2kwAyEmf8MTyVvTVev3sJ72Y16SyvKbpXodMMMQ8FTG7T2DbnW81qNzAuoRWWeUXSKNSUK5zsCQUqaUe",
  "key3": "5rFV48zCqMvuPjd6MWADyqWhh4afRhXjudos9259eJPQWyszepw5viGy3nZMkVEJff2p3C1HfPuLWSP2cc3rPGmA",
  "key4": "4mY46u83dWd5HUMyRVW4MDxm8AFTAUWchDgffS1YBT61vkwN6SBY8EKMzqDcWqzoUFuZYX3fkGodZcSVUDZLenB5",
  "key5": "ox1G7j7KhWwu8WJvM5pbb4fFXbHRozoNYt7yTqKhd1QLSkzGNwLbxkXYaJN343gZP4XgAqFJcwfDvyEe5tnimDq",
  "key6": "3VR4kHa9NoJCMEYBtgtHNt1be8o6NQogMbrrePnYiJDgc2CuSeDgE2XVUb8cgrLirs8aKZiRutNNEBXQtUAE4wmf",
  "key7": "4f7em1PdtYayNgX68hhwLX4pzrWyNWzfaLausf9aqdtK2kb56HVEskvzd3JsqmRJkgBqjnvj16ou4GyBsdLsmMWh",
  "key8": "kVaac9Z6AF4vThyscqXALW824ZPwLwPUpFgyjxVtWRqwYfDGY3kYV92AVfapZiPBsBNQNDT5PViiSqDBfn2uUxg",
  "key9": "FrrjmJSd6X25erTRMhnmbJ1ZZFVm7KUyd8sg6eU2fQgzWA8m9mVqMVsoJqid5WXgTKEsExbrRgHcZTENh8FKKGy",
  "key10": "4AjKQ5oJCcAKKHCt16rhsKd4cijuABFmF38SwtKdYZGb8meSh3MAisaeZCXeeC9cdAnhiA3n3sqmzensn3g1kBBJ",
  "key11": "4DFCMJ1ED3cy5E5rkKAx2gUQyn1LqKS2G4PuZrq2N1h7RXLsGEPGv97XJq15eeL5QQVuwxH15gFeW2TSK5hqsi12",
  "key12": "oECpSr5WVH1VAndHYDyEP1zBzE7aPfiF7MbcBZEzsFr2LALzHo8TD7UvHXA8MqZ1iToY79sN6PNxGwWvgXLayLv",
  "key13": "5txmrq94z5A7S2Ps53NmYnw825PuaEx1KKzt2QHKGo6osSLEQp7nNnfRWMrJwDj86wuR5HKN84xXXZMpRFiGq6CW",
  "key14": "4HPYdmKgnmakoVk9R5sEtgmAY4orWS7MsCRpAsvFQ9TCsz82DgvdtFZwFzeBNnnpL5hH6GBHNc4sAR2PGaMWKFVC",
  "key15": "5VfYRphUWuFiyVW6wdngG3H3Bouht4kC96nuGNL1rBz19NTTwLiCPvUuomzxgfZCY12bsNdJGWMWREaTXPWTUZcj",
  "key16": "2ServhCzGwctKnEnQEtFYHBYQ3AMR9RctVLN5spbnAQN3uYgzEYbM4A2Cq7tG3tC7pZu5Lm5AQTDoUWt9kD5kKUi",
  "key17": "3ijCEaCTMD9dL3vqirUn1wPwuaBw4RiBKWaaJfcCibR5isyGBKTLeAx9m6a1NXwvbpJJLy162nW4ZQpZq1fPVDyE",
  "key18": "2xgcMYkUnDQExjzt9vJaukHmrrD6jEJMugSQDUybfnqWwxWCcVPHHTkVW4o8GTHcUBjnde6YTe7BTb49FadsFXWr",
  "key19": "2t5xDp1SQzcSXb3wUQmcEpVDSBJdmkwNbU37Ws8vneKKMMczURPeRp5ut3fYtismh7h21FisAtx4Qm3gKbjhGw1w",
  "key20": "2KZJqRS9WtBP2VuqKEko2GNdciqJ2fZPVQEnNJK4ofLzBetPKzJM3nWVZsW4pLJhMjsBgtQWeVZtwKWT8pMGbhx4",
  "key21": "5dZ4tTRAUkkEk63mLky6U6349NjVjdecNKnibFjuVdYjuhuCrwU7UKBwR7toDxrP3sGHpHVsafNNZJP6325BNXqj",
  "key22": "5XxvNBAoWs7UkVVnWPCJqa2YPKcgr9k63W7ijhchSHgmwd78K72HJiTUmsSmp4abS3Ft5Kj1Y16aedMkJU9rdPye",
  "key23": "2byJNGKNT6zm4jyhT24CT7awrzZmtyR7Vh7mLB6fXroDyRmeDiTffRJ5wfqs5WhFSRtCJkPRc29Xotw3TE8VVYTR",
  "key24": "3JWNdPHopsrLRGkd5dmy9PHeawxyvNDQRXMHVMw73zUDXk7uPeHy2mT21gkAuWDgtieabjnbnqBn9YSn6Wq2KYie",
  "key25": "2tL9HV2oMzSqUe2cSL7Cc9X7Uh7ZFwGahgUhs2ujTfyYYqG6xymgpUVRjMpSvfYsh93bBdNHuEwgmpNkAsTF9Bp1",
  "key26": "65vBxhhJTFsNPXgNR9QxYExhfAvGZazpmzXFknJka6Mdz82NakExSUkmo5NZ5nY9obrD3Ep7w8oa9vhjguNDazTD",
  "key27": "4DiC5wuqrin2Ze7bcAp3ZXUSGt2EdnUXRB1GAa3dZ6xtdHUZnsSzW4ARhzmECWewHor44zBjQPAKqF5QhUC9yQUT",
  "key28": "2Ve5bQyZurz6oquW53NMSmTCTPjHLxme7vFuuE1aNUxaz1Mp7W86zGbswcZKC8vn3X35pSBS3vLNm4mLdTPMHTRa",
  "key29": "4o7iTEaraRgTRAm3FuV42Hcdk1JsNFTU9TBYaLiPoojo8JuU1GPAQipnqNKk8aUoA4xv82XCDwmEZst7JdUZ9W2q",
  "key30": "5mTX4mnbvkWchyfB7VGFTfGSVGb3Xd3q3vspi924v9FCYQRxy8KfjkXmMMB5PEYs8cx5Pn3VZ9PHNJXghB6drZCq",
  "key31": "i8TfubjnqFuLpocSvFY9Adw7RfmdSQuNrLGQdKR7DVuL5ti17ni7tZtDH8b8wuyydPzrxpCjq8onfop6DU5CQy9",
  "key32": "29ed7V1ajeXfhqm8viqjfk8kpLG3uAZtAk91u9QeB9Jr49jrBVFvUQLXXPb4kGFzeEWwwsDw3LUjnAmmoXdz9A1E",
  "key33": "4HGjzUddoxqEEK6uWu2WwoeZXLaizxCNvyYRELFDHS5LJjuTzSsCvmEUNdjnkqy3VRpEhEu4U8DPBAxyLWxbzbRN",
  "key34": "3jgVAn4MddNzFCr1Ug7NoKWfdgAMV4G1xxE4R84Pj7cXZekNvnBPPN51RPwShdbQe7TxXELjQq3opnZvuEdqLexz",
  "key35": "3ooU4T92QWTq4r5GzYcSSU69DVFUNJoq1JhNW374gNsiwwugPA8KkUfSdUZcuy1rYVb8W4s44yRc7L3TTQLkgVAf",
  "key36": "2TZE7uB44Qx1REqRbrrnuU2CSJFHYX5NvVPdNaFxeEkrBCVeyF4m1q4xFps6LvZ6b5DNK3C8grNokfcnj188EBM1",
  "key37": "2n8K8bJPyYMJfpGsucSaWximHWPfrMgwhg4QpwnhYP5ZuMEST516MdrvZpUojsQ8a5LhH25q9UFA5bzvemQoVKTK",
  "key38": "6D6tR1zT8VAHMbDUvYoTxiKrhU2hMUTJ9vDDxwduvtaXLxs1pkQ2uvyiuHo6qRv3zpMPwc5rhyxuSfdVH7m3NdS",
  "key39": "39difG9EN1XxRrwfHSyAAqRR3fmAPwTMfShDgyyDveS1NDh1yEBX3x9Jtyx9YLxJjPSiLumumRocRnxmnsC3dp9f",
  "key40": "4ZjLiDS4Pb79eF9WP3ogLisRwbSj59ty3nYHkDBt49YFJ6ygTzMrFdScCmTRBV3UGafV6774xDjs5K2jntQ5saje",
  "key41": "2jhEmKDHaQUmUfGYQxCTRNhuv1coG7d72EdUp8r6PZMN8R8QCiVFYG9CddsmsQBhh6eAep6RfrrCbb2fRHgCEChi",
  "key42": "25M86yXydJomnZDd485KmsfBDv3ojeZqaTbC3F6V5QvcevSSZ3ED23grS3q2kDLq23QrkbGc3ogRJDCegqAp4rEn",
  "key43": "3Eqpg3qQ8vVVqKv4Wwpcf8eZ3iN6scLcUucTqC8WJ8jKZJCh4PEFQ5rsVAW9nYCVH168X5Ln5wR7b4gq8hRdMfme",
  "key44": "2s3N5Cs8kg4n8hkRb9TAH57g9UmsZWgnNHDULLQ21XgSX6ptfFaqDc5QEG6ChVb7PJjnsrq4MdzDAUCxpcEHZiuJ",
  "key45": "64PVeGStY24EWrTmW2AEmwwduVBf2uX2fsZ8moKh1PXLbb5hWxPkiRBDn4ukNwMBQu4ssN21Csp4y7KD1qRWJZu5",
  "key46": "2jmTE9AYXgcB8iPAN39zSpJwo6AiUD1agJfyFBEQ1uJL3RMY3FysQjTFACfjrUNmvNWJvcxRC2cPRcr23ZWkqFar",
  "key47": "3qWZm8sXGTByFMPdSoUujcPrksvniNvJnDdAiPo4VgR7yMMTk7NvMzuU47TuEjxnwZZJs7mtNqBpCwcQcgLXtD4s",
  "key48": "5hBXB8anP8bh2iuPyLFLw6ERSJwbCyG6uwaEsDUQc1XhvUhzHYj1cv7J4pXGNFPFTU1AE3weGHpp8VVBEshzwH1G",
  "key49": "YEKMjjY2eMhGUNqRPVMd1Dv99gjF9xmC3zHkuVioQ4rrh83qnLrKLk3eLeoho4g69NKQyhPwC24MA643x6cMDDy"
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
