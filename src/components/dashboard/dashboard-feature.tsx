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
    "2m8Mx7X3dJSQNLHkwbHjx5yxWnv25FytvaV9L2ovhh3RDECzDJRadWSAS4nQorkfefx3WrDU1M7tVtgfFZ5nNnj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFWmp1sz3rpFSCoKJmpAiLRAXKt7YJsoDMjhkwACAeVf6cx3JJrGN8BJRxbyQDqhgnFXtdfx9KSaXEnWyQkGovC",
  "key1": "4WAp4Hx6uJ68pryiEUUxrCqoXKAmWkSW8wXHCvtgjfY4WMvtd5gUFJeJkrvqhCAMnQycjBfA97XShmaSYv1U4viF",
  "key2": "4upHEDyV9sccyjMTTDCHn4sf1wCyU5zPAKBy9yYGHvyWhyrXLqTgT3mX7ME46JBpS3XgZqJ2waRLm34oCTzb2yfy",
  "key3": "2evT9YVBoZbtT6EUSshLNzeiqCGiasj5ZGUddxAtzqNZ4qEdbQW2185s1S4zz2e2kXPMZj6NWFDRuS2whiBvoY8c",
  "key4": "4JhdhaAQzTLzDJiJoxniKfPRtTUdvWHJVpiMFJ6PdygPAx5N1jr1DFjMXUQiPJZfKoQzQavtMmXCosjLysZmhKTy",
  "key5": "24icRcj4me7rHnWvipsUZXWJiNHeLAmkaeEj39Zyhus7Dwq61tJoy8ypkLLtSYwR6RbHgXCCWqb7r94TJDFhVZV9",
  "key6": "5j8afpcwbw6sGZqaCmzV74PT1Sr9b84gYH4wvPpBv3oGDKrAANLyRvZybVRghnmzVtHZAUYEpzXbPktoo9GTgBor",
  "key7": "2JmEtuYjTxUTp97UwCmuyouG5mFuxRWy1CkPBfdEbYRq8DP9WzvMv1KM7ViyTeEkz8ju1AjHHVCTuDzwHWCJxpB3",
  "key8": "4ZUoakn1JQE2PUzhCdxcpCv9rUHHV8NHA7pbuM4Rtdz2YcSYJs1f5B2xEeMMdiFTJeu8MbjKSYP4DkaU77cqkNzt",
  "key9": "3JPZeWEMJ5AChVNhaowN2HTDAf454mUeHq3Emtu7RmBaeQbKzqUdfHdxfhonvH53d2eEf8yGbZHxrRQacKdwthaL",
  "key10": "MrJs6nTNXVKP9Q8WhMNWsaWJhWyt5Qo1bA1SZAH383gbYyQpD5Te1PDccn1WjEVxCUAj2Je5q987wAqrW1cpUXN",
  "key11": "2sw1m7Qvk6m2hrtBLBg4ab4Dgad7RxsUbJQuG6xBxowHvGVkqRpYsP8dkLq84gSi4CAmJd89Yi9tko7qcHeSMTR6",
  "key12": "2dELuLHWYMBF4w3GemRqxj94ExPtKyWKtkLKkkL3761X7gdWDXuLMb19ESw6rvyLwL6owmK88c153SvhA9hdArdG",
  "key13": "swK2iYgu1tBaPgMrBRRuaPyjN8cqK6m77v2wFjUMUPru4h9mER5LqJxyn6KCS84LqxeA9Y2Qss1y3ruibHdYdsm",
  "key14": "25GB3dwbf76PCQGgq9CLxYNr9obbe8LcXCoP9iGfspAGkeHEtDcMDNPc6FKEAEWqA31iGkVSmNtMd3fq4dgmJ5sa",
  "key15": "3jQ2RVvaLWh272SxUC8sbUrcYDp1LXi5jecux1auWRcErE6uHZdeARk2JQGh399p3KAufeDU2Pyhk7yKfvzzwGZS",
  "key16": "5ag96bNcJFxDXuzqks39GjpVRGEz5HBEgnhHYcTnxU8ivb7iZsZMNUk5bU2HeeV6wzPQm2sas4dyDXkwnbyrewzF",
  "key17": "3cUASpheZX4yDp5VZ9pMXG66o476XgsCQS56d3Mc76F99Ty5ryUGRqUxPAgQaE6pxF59DA9sFTnTf89qx9HQ3QFY",
  "key18": "2eLS31UEi4XcRtg2f8nkdJ1dPKa75xGNVTDDYRLJHzRqQq5pfB5pNypziNZ1Gh3xRdLW8Fai9vWRwU1uaMty1ksN",
  "key19": "4ZAi7w7qkfGiiHTZS834JeJgdXy4T8zYMhFWj2y9hMXJAveP2kGSJwsmSdRvFBJiGdXRBnSERo9zN1CQuKwd2gRv",
  "key20": "2QrZ2amEPJii1KWQX2H2Af6ba9J1enZ4jnu6k1o4oW4sBcDHvodvXScp8yjgemmvfV4qK3AEEcHMYfrP8YWycd5j",
  "key21": "54rMXh7TyYvHxNDJ8baydfHScry9zvH9NP9psbrjZwNkQFQEG3GfkHk8ixuThVW6gMqHovCLS8SLtotHqt3GfUw2",
  "key22": "4TgDfyAttRVmixpAezNaw9fnLucT8f6taeg4dsahHiL8CxF28uuKFB2xboEyp88bnVETyXrSWKs6xnzpJtsYVeab",
  "key23": "5QYW2txpddV623gCyraUUJH2APtokaQX6w4XGa5sJbduCRNRjrbG2Aff1aQ1qJYvqwvLooKrMpw9wW9G3mxzBEAh",
  "key24": "5u6Vye3HzC6S8caQX3AM9ZkPpqqdHzg6UdtfzakDSbKR4VX2QwwYGvcb1TWxVvZSHF9fH8zrBAyiG3Pf3TXwEGKj",
  "key25": "6fCqkcTzeZm2KQSHDue4hEgfrXhnHh24uaS7A5V1AT64knyDyY1YmAUFXU9SWvDsoayDWERu52b215dMN98iPeu",
  "key26": "4UYn3zuvVHaCHGgB9sgtxHLe16sriT1o3LxnKg6755xktBAb99LiQbk4kCYdR3AyNvwg6q8cWQEgEKG7vdnhQaHi",
  "key27": "3ygvAPPVf2sW93xbAcxv2pE4bA3qkj447AiKaskHpGJMJGEEyd1DvsFYuRbFUtEN7X5Xha6yhmwu1z1WeGicKj8d",
  "key28": "49Y9Ja5tAb2MhN6fU5A9xjqSvSs5ui2DoZgSLwtDLqVfn3v6RZAJq6cy9jpVneBgq5sfC94XLUHjawPubwZoNhgF",
  "key29": "2373FpWMmF4iSmGfcdroGpeW3fzWrrV4W6otNVNEL1XBKuubzND1E4jiYjwyVRsrCSuiLDuRgfc7aEDwmjDrBGUP",
  "key30": "4xLzmaiomDpV9kK8iMjJC5K6eE2SBVJb85EHuduvkE2uo4Cr89KGPx9UqAufsmsD6MZHckev7QjYPDbQGwdZdyUN",
  "key31": "3aQW2axsMwgGbGBAwDfLsTgw3NZzVhBzqcNBptzxiLhMH9obsMJtrd1uEEuRHP7H4fYx5VePvfsgzn5RmvJFsU5m",
  "key32": "Woqhz3riamsGuvnNLZPZeo4vtPzrNMfiXgHBRHSadPx8TGToR6LiyJJstsTRthirVZzHbDaRZEAXSt7nzJhZ5eS",
  "key33": "cNR66fmTkUNjVMgt8sdKH9vNxoeqKuQB5zPr8kZELh3D2B51RbMTzvadWmPmgPN1amF48dn7vHtHAuis1qAxdi3",
  "key34": "PghBzFxUMBw5MJxdNCQNy6BbkDZcejGdTg6vHsVTt1YVa2v2oGu3pqdDoRqECiJHe6vJLyEjQZJJV2pZCxhgrhM",
  "key35": "2eeQCXMgJU2Hwx4LFDqLd5a8VzGiKvP4E6mLY9pc5RxreZ79ivu98aYgkrXGFj5P1UMKiUjYGRZMvHvb3FViyvMf",
  "key36": "34c8rtQuSfyJGt63Far7gVKY2ZBnT34qk99vHkaAhmZyJCm6MLvdL6X7i8wymtLrLUDbV9T4oX8VqzkX8AchoTi5",
  "key37": "5rcfUNajF6UugKzPpNx8NVyZariU3dfTFoEn5ioqFjB1q3HsGUPwzG4pb66ipRayYW8DNW7YK5gSLsmnLNPAS1Nn",
  "key38": "LWh5uuKz79UHj2bfVfvPqntNqfy1wLnaYEt6xFsVy2kRWmQrFsqKdmVzmaRNnst4WoLaGxiexrtZAnhW8dFdkRr",
  "key39": "4VcbW7tV2d48GHrqRVuteuW1pH97FNL4UuNKvY9FDu7L1W2oHMikrw4bSHfa7xN8B2QgXXeKkjPmg7uPEJDMrTov"
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
