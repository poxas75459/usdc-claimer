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
    "4qC67jdoFFjm1TC9oMhxxtBgBp1QJ3uxNDoSHRx6nakbk5VRCLNfs3GVhzw5kqETRvMMAJM2PMryB52Pj6eNQGfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h637wJ1Qy95gpXvKhUEeFeaJVUx9EhsY73pbKimw5sKdqVuL4F6gz7RG9wsam4sPGnAG1iWiju41NZ1NJir6VRn",
  "key1": "56XJBwa2Fz527BhdTSK2kvnonyge3Njsh9QNJ7U45s9mFdL966aLtDsGnPJFSzT2bepomQLt4EKSJMzZPzwjPCcY",
  "key2": "2FTEfzU6wVMdvGxNwAF65p7GBePhETwvQL4rWQJvGmA4pJr3AX8qZ3qN4MzjHpLo9mcyHxf1gSowC3kNCD7cGY81",
  "key3": "4rKZBf92PYVUmKLTCtS3YkFeePA1ydjQtJjFGPfFE82Socc84eMJMt7Ug7VYUtoMwLJj5V8kaf3mVRaPD3AZikQM",
  "key4": "2ZKd5Lvj3PhFKBmi5ojXFMu5x58f6h6ojrLj2CWVVmBurbKGkPeT9rbCpXUfddkaoERzFrHuPzGwTWRw5KPMZwU2",
  "key5": "47zDiuK9KNZakhzaBGFoEhvzzwBo7ENFSyTEWnbs8b5pF8ZRHYGxVobHR393iERKV9ByjxWs7BYct4ZJCTUqx1nd",
  "key6": "64tPDcwSfikcVs3yxBFkLxDsXLgjCXJEBcHcpNN3ap1SvCtTx2qndoFHfiNzM1grVHotQSzaMUiKiYzuYdQuh5Wc",
  "key7": "5oYswKCzeQNiQn59QG98YUTE1eE1FkHrZfFWhocgTNG7dXshNR3BeTszfBdCS85oAcPnQGvBtofUEYVXLywwibJV",
  "key8": "382UrMf6YBTgSqyiZMhUincYbiR8tpzfRCWscaKqvRRVKPQbQysyNgjjJ5zQEqefckdbFLsPHWbDewqG3KzCPd9Z",
  "key9": "YK7FiGKWkcpVsnpu2Wuco8zvHwFoijj8AzX4qUDRoPGTg4USsEfAYn81DgBxRLr2swvEZCcCCcBbLCKJV2cuENH",
  "key10": "s7omKb55DUw8q4cw81sR9Mfv2ou9wvPuKMbt8sBPkmaz2U2tNUrHGiaA87YLQyXCoiReL8JWc43Gq99ifwHdNv5",
  "key11": "5tjqv1HEbUcC79MbNdd3ML6hWDV4nVTfqF5tj9Pmtf3cwsz1Lk5F5834xUz69QKm4pxAxCi4ZDEG8nekXttDxLUS",
  "key12": "4st9W8Hodk9mzGZJoXHNW3bLWLKTdA8wqT1oXL5w2jZXKJaSCHp7eCuLc1PmGzHbCLWRWSrQ8c7MCxHppXov4b28",
  "key13": "4LiJeoJbigBSGLkK7mQ4sumKK5CR8QB7bh5MVfLv9YYX6wK3V7Lo3TAKDQFbcB4RUe4RxZg1rPLTXwQw848gFaoV",
  "key14": "2Ms4oKFNB5mMgHGHqwv9B6jpYZZCvNMAjFXkHeZfcjQiEvAw6Ek6xgmiG27XjyJ93HDMZAoZeXH35986H4MWeTqg",
  "key15": "TsneTWu3UQbrsr1EcssktcFgEgk6wdSbnPeB1GWEspLijUSYb4QGQntwAVad7Az3jVmwDe1uLTFnJf3yJyB9E4V",
  "key16": "U9ahRSXmduQPzpxjDZ6mrxMKYgBoFAJ23983ArfhyeUNG1xXCiGGYFCMBfkxbkyh97D4ojwHERKcrVtMf7pWgA8",
  "key17": "5teWbCrCKqhcmTFnXvNPWnowFCMrxDGRNcaPJUckfF5kpWvF3iDHn3ZYV5ZYf7XNpetHNt7uoqPe6reoeJw9LeWV",
  "key18": "66UtC675x5KPTyxxaEGJAX5t8Gj5abp9GTEKb3M2fdd1NdC1er8jA57Tpve5iVWwWbzEkFBf9m1bJuvHZp5nAM3U",
  "key19": "tncv1kprhw8LRKN7veihhSwkS79phyVkhQzEA74iJ97bNHZhur1MSHXaCuTjVSE47my6XjjFv3pPTmsQEjhLDzw",
  "key20": "56ijL8BhFeZsTfVAuNmzYbstijbVntNPu3knMaXFsC8TKjh17wRWjnu8uechsgbVmWT6yFhRkD3oRb9KiYkRv8zu",
  "key21": "4MgPEjwHXcuutw8moyZ2zQGwgdfVJB4htmtEfhsqgJFfaWXbaoRCaqw3igdgS3CysUXzwVjENvE3P1uxhVKsV5x6",
  "key22": "2wi7n5xj2JDbbMTGHNTaf2btFPTHAAvkAm1eM1yrTbeuSTGfgqf7jvwRfhmuaLGn23GN6HRBJTTafwp5AiL2XbHC",
  "key23": "2jvmgmoJBrACDHnoQbpQ92oePJJ4QzjKQ72ZcZXadc41jz6yeLiTZboTE6MYkq3p67iJTrFMqgMsVoFHmr3JNKa4",
  "key24": "7urFKK3hf3CWT48M6PELMH8cqTUBmFPCgypZdyfP5GZ6rZAMExBrt8kVvfJ2JbjUBWWoR4PnNPNGBAUKhTMaQk8",
  "key25": "5EnEAWM9YRuVgRuBH7KcMdU72W6U26d3wsH9UkLbjAndLJBhfhVeyitAaKdQ6UFcQudNj9gZrabxxW7cjkfEnAXm",
  "key26": "3x4fDSNwiW74xLxpWsE8j2AraQpy7xChw2nkU4pV7HK8i2grTygbJaxonuatYsEp89AMWPs9cTpvkxZRhK4qubhx",
  "key27": "26qN7jF5yEYWkLnaQbCM68ZDwVp88a2h9MEtFbmBHVrZtZmndECH6AKdEjNskemYFTkWZuvzbcnxxnCe1AFZV8zz",
  "key28": "55rvJQQCdj9kVWAuK9BmeAKa3EpK1LJAtJsxV9cXRWxgosjkvq2pGsmxnM9M25quEtNfw2M6Szr1Lj5ssPZJucTK",
  "key29": "5eEbUAfobkjDrh5F3VzZ2gu4tdQ4ZGJdhHji9gg2upGxDaa1oYp95V2aoDXoEr9FoC9GPEhnc7hShcXbx1KUmuDR",
  "key30": "2CXVFDuh7sUAQDsM1PQYZyt2C1o9UuYKCE8cAntVHU1vLmd3ZSANUJHGQ1VLn4HhmTqW8L6xDZsyRxTC9jJgjVH4",
  "key31": "3xLu9RAwSJvLFJUgGZrMSuv4ntCnSs87RLnQSNCidTaCQBEWdd3pZ4JLnUCRZVEqdM91cqGEYVU6r9KQ7w9yydkZ",
  "key32": "HtiTGxP4jagaCMXrUx5cDiJ6azdBvUeaAvkwgMF2TEYKr3V8FAXZzBVCmPZAsbRMq1R364LawHueVWdZWCybHRD",
  "key33": "3E7pWu5YDx7GH2Q8p4dLXmDNsm7dP5vNzEfjxcKxRV1HoZStuM9aS1hKCrHreNt72DoBxW6Yz7vQUgcaWAv26rq6",
  "key34": "2YUhhoDeHe1guPiU6nRQpzJ6bT9ERgcVpHXoEirmCH6ddg4TteKaNT9b9uSZHKHU12cKAKbPQrT4eAcod6aJamST",
  "key35": "44YpyPZtPKTzk2iatgyHxfTy8KPRPreW8BNKdwYP7aYUfgWhQ8TQB9bPE3hhz2WsjS3zGT3YxDCuRXY6uwFxJjC9",
  "key36": "4ebdUn5fA7NFxQkYQVVLUcw62T3mXMtKpWXfQqsak6EBYcnQrdoizmUxNEdmkcdGy3Y4EWvX588PukJo2KZxpH7r",
  "key37": "5PNwr561CQ4Zfk4iRVQrYvW5Gn5W7Xc4wJrF4BzR8hY9Bhh8sCFo8WeeKngEi55dHook4vayfECaSpz7k6EU319j",
  "key38": "NDGK4BvfzDJSyQkQ2GRGTshRcnid56qmqYs7PxnEc4j5QRv4Axae3jCZybg7y85GHftmmGFMLZXoqRrTiX7tCCo",
  "key39": "2fFqfdD63Jxk2AHjkBRY8wdn6japAfis38CkeHLAXddfACDEmGWQV1oqvvWLfEDg1JpzWGZSYTjeHNidvEkQNYfJ",
  "key40": "4ZrgCd4ha722Yz2YzpDNCtaA5f669tLacbseDt37tkGCQfyJ523n1Rm9e6uiPdEaocvxUN1KTZt5ZeoBK1gYgKf4",
  "key41": "5D4a3mVy9btybHs7Hc7g2JmHXM2qZe1Jsq6rwUwSBhbZ7pLkVXNuuxGkyVL3GqwvUdf9xDDeR82n8CV9JkUMbXhH",
  "key42": "UzH3AvNf9b6KH77SfpLfQL85EuEpTgk1ErtttxFaBgHy5FUjWZCjHwMHUALATP1N6PmW37EPqvkfQBuwJ1Kq77k",
  "key43": "3cyZ2ReiG2JzxkxzEbpTsvkdYzuv9MNXDAp7aRfLg3WGVF96oV5EJSu1frN27qRdtiJCLfF2bTF4si5T6otjk5R9",
  "key44": "4KH9LKzFhhadtFb7MUrSP4hGyAikYH6DeiYPP9PpfBcDxVDqLkggyhKLfzS5ktBkvNcmyEyxoyVgVR5pEZMdEhMh",
  "key45": "5ainW6SBZxuSDPjP4KWNcmEWh2GWMSNWKAUJrXn9Siehbi9ujKXdJnznkQettGhfPzLX5nvZQ7ovMctUGDeHbckX",
  "key46": "5km2Y9tfznSy88F2NumrFFxvYopHpVkKqihT8zEY5aUTD1N3w92MBwgEythJSGVcjreRVAFZxVZnvgKgN2TJHLUx"
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
