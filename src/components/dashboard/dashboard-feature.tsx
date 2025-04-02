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
    "4ZcEZMhNoUMW7uCJtusvzNgd3XpskLj1uMbUGbbgQ2hGVy75mSpauP4ZrZbpL21pazZKhovBSjyL2Ybd1GaZVV4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bk3aPksg3zurswcKNtHVAESsZCn6q9Ku43aLBzCs5wBEqyio8122znc7VWFSe2bVMmN4Aqu1ocgVowKzt3nSxuU",
  "key1": "37d7ZDdHE9xiGCz87gKsgh6kgB7wvwM4tjnfMWjMyDPK3iU1hSRfXxkTyGjjq1kMG55mqY6bYSfZMFmhJ2WySKxN",
  "key2": "Y7x1NkbnVmuW5RWWGUb7ap2fj3ExC5fHd6HN4mK2ap9V1FoiayzvRnST1XvTkHLcRrnFAUN5VEZEVbqve4CiZ7V",
  "key3": "5rjwYQXhgNYmjMhUfCSNxM18rCUxQT1aSUL7bX9tp4t3rT7wDz3HqHqy182jjCC2bp9H5ed5wxGA65ZAAyApck18",
  "key4": "3WGWg8BuiRxoJ37tXqaztn8d29zRs14NiiWX3AwZ1DrCfm2jVWJPMKQgH3iAvUKK1Ef7W2nXA55JNBsbS5QTb4se",
  "key5": "59Db3DaaJgJAxZTG9tiXRM4orsiqepaMK8attqnZhzuyWjp1KdatdygJKarMRrGSbrJnk56RgosEDAjTeMkQ6fM1",
  "key6": "4vXhfeuYsTabUqBVBFhCQmo62iFPo3eRATDwxgEwTEtmWU1SoCEtgtiBAPqrwGj7YZzN5st1Ep8myyg9RiLEznBK",
  "key7": "3wxmkwPvagHNP2394QeeoktMYp1u3V4H7quDUABi638YkhRQYrSw9Tdjki5di5JF8P3wf1Q3hsRpEVc8aFA4pLjn",
  "key8": "349cenHkxcsdWUc6wdkvmeVAJzrMMuFfWmGwmjFWd5CxVdtNTJgAQdv5nvFtYr4bunT2xpZ5ZS7wibw7dsZjaD2Z",
  "key9": "2GREMhVnvZVMs7xQp6G14o52jVAkVrPYEGA6V5K3Pbmx5EuCeGNJVKtS88rGaWaed9g7ttEKDR2RdiAqwhh76ZKm",
  "key10": "376DHvTfWSeeqQuQB6BTEwJ8JL8wTZUrBJNdhFbSUftRSsDjbhihCHd1LyYu5ehLUNFyuaYbK3DBae6A1PQHHE6Q",
  "key11": "3ZVF4h7vKn7RBpL8JHzSxLSL1Cm6Dx9WWBJXgQc9Vu31aKSHa68CBRU4ZDEJohdiUWK33sAxkejg1zjrqCDgDnpg",
  "key12": "39WxwpoC1i78tMve7oQQKLbtQGanAxdybgEmsWP5EMgx2215xn3ryD7Z5WzH9rLUCkgfT6TZQzb23MbAQnu6DXzv",
  "key13": "5KdRHUPmvhz1n1dF2DGb8h49sG8f17BJT45L7nCHcrb6piVxYE73XdftHTWpxGS5y2s7SjfnWwydL9eh6FP67t9g",
  "key14": "3NwTkodRmJxYQZitcL1z9g6fPG2rzPUx85aRswMJA7F8rgGLXwz9ACA1D7ieYYxXttkLG63cQ3QWUftD4uzupAFW",
  "key15": "3VhyyhuGxrTAV9hX7oN2rETQJ3pY4y8J5awhYBeL7BsEQU1bPL5cSDZ6oPQg1roavGsHKGvi7n63k5hA4NMkN1zR",
  "key16": "2ipEicZJ2ucowxHWstnCH5iZDD582NAZQiNz47fraoNSNsLoyjZETQPVJW5ReZtMpApUpfCWNNHJ4uvPHBcPGqfX",
  "key17": "5jtEdQix4PraioZyndp3m73ug1QTtqkoeyHGToSiaQABcmxaqaErP2PPRbfw68UXbVCX1wkho6ykUSkb2XHm2uWD",
  "key18": "5yiUTTAh71MqHw65dkoZkBtAtqKowfPaayHLpLcM2hu8gzXESWu8GUoowT6LZfLJC7es8WiVRVQhM6voPZdPKpbJ",
  "key19": "2s1WA46WVqCpieoXCjR2puYdUwhDXNnWXLBMkGxfyr1MYVs8amchjc4HCqGnShQVRV3WLm2aW5hGaXAFe1fQEVea",
  "key20": "49gCWEj39ySNRKDgqzp1XDTKf1KZKxXiDj1TBKpdhDthddLVW4CYTCVXpPTzbFwxHxuQon3F4Zteysfz9VJBBoQf",
  "key21": "5PCKqk2hwjA16fVdopu7gcfjt28PcoHThCB98jsfSBHzH95qqJmyoMmFKA1efsUbo8ENWSYrMSFz3AbMb3fpfF55",
  "key22": "4sXUhiF8b8NvZruHd1Ef3vuqCp3bzo676MBAP4Q59PHpNc8SKKZUp66CzHTd4kTXR55VbSC2gdw7JhNe9tziJLGu",
  "key23": "12EySriwMFNosAffzDPeVUL6JXTqxsCW4cQSxpuztbQJ1p676vUVweB25zwVWskiVmx4G222oBEvQt7sE5kGQkx",
  "key24": "4hiQSXEW4yKLLGQQrFogwWBnaJEh6EW2rEbWzMYfu2FxJQMpQ6UExKUupUgAZfdUUxAbaEVSgKv9wdWXwbnTVoBi",
  "key25": "4fca14zdhCKPi6f3SLQpHVK8EWmuigehewUr13oUZ29f76uMCr8MdZby8Wz68iswrWmiQKjXUUoFyViwxM39QrmV",
  "key26": "37tKqJNHc6hdHQoTMQwHx7GVYknAJCTPe51LVyYqbMdo7N56ghz2nkdRoMRX44UjLn6fXD8BLXJTgkkAobynCerp",
  "key27": "4x9fssLfufWT9d8YUATtdny7f7Gffkcy1q4wfibZuWFJghYUQKLtXo1ukiuZmJNngaEk892AGoaxdaUVuSrBdksE",
  "key28": "5E4Vn3EoghX8Us6RvvTU6ZhC3LSgQ1N7JbFJ7dFyMW5X9vFQAiMznRXpFUhdztXV3Skj9TTyW632wyuENqD3b8ep",
  "key29": "2T4EvfL7bEw5YRkr33hrUknoPntYu1NJWaZ1yDb5ezhmFYYC7P5TnWkm2fULn7y1q3fX83TBPZxhpGYEKaMhpogE",
  "key30": "2SZxwQgvDbwcGs6xWP9kZSLDW3YdCFzGJxP5xGBgSkP7aBK3atrsu14PpQUyYeJgGQDEX3hVonbPrUWF4RQrmDmd",
  "key31": "5mWBP9ddAmWS8ocfwGQ7qUQsXfrEPxEpiKeXsxECLEogcPg6ubCtj5jSer1UwDvmWDFnzavbQ7Wr3RNv4vzymepp",
  "key32": "5jYh7fiQRwDpfrvwCHFEvcZRrFPzTe9ro395qZP5PqBPdSLTNqgHAcUdejZ7ApGiiYjwjASkA8m9igR6xgfX2tZQ",
  "key33": "4n42vyAMsjWVS7YJLzdReYnGXFdMPXVc6F5kgmM5M6M334KuQpePVM9BPifk4qCWtdaAoQFoUX2sGm4bC6bkZz3t",
  "key34": "wsYVAbHus69PWZ8hv9ygNJvjdWN4ZpECQkF6U5u7WKiod5UbyViLgAEYVBAEt7CsEYXx3YVEi9LeT1q9oGWXawA",
  "key35": "4piWKsFQgJE3wroNNAeLxjRVGeN9Nr3NxoSqoFRLgGaRk7gv191p4zvR2Dse1J6KCdApV1Rg2FUWC164oepqcn1c",
  "key36": "5dAm5aERXrYNRPUrHpyazUS2AYYXpGaHfr8RrV63QbwRTRfdcvvVASWGHtdFdir4UhfnPs1sZ5jqw8Jbw4QMKvDi",
  "key37": "2ZmHWLEmxaGMeVTjFkhYHdVZ2p2L8uVWzktDbCmRmRNXo7S64tTVkyYJ4jFMc4GzhjHTqhuyrrHCP8YBtJNmm7pP",
  "key38": "65Zv958uddiDYk1bCn1EJpoNj5WQ1upSy3zqdHazzUdrhUVK1eHAMixK3ZwbzxCF3QJVydZVhwevMVNGecfD5MoR",
  "key39": "2tKAGKpWTKc8Qaxb2hFxXbb4stuirBkSb5w2n7xqLqUPGDcErsSnwG5GXm9jAXBAq4gT15oKinpf9ioT5pXXwJKp",
  "key40": "3T9MzLzfeJDdUaZmuqjvXudLJ6fW3877GgW4E886wCMFGY1FycDCbGGshnLMERfF139XZTYbXNqrJvq8unPXit6k",
  "key41": "8baqBydqS7urMgYL684qsVCo4RzAER3rHgQcprUV4p1ipXZ7zgkFPcwWoKHPmPtCyt1dkvCA9GMLhBVDXzb2jvn",
  "key42": "eyHRucA6KL8K5hTSu3XjEjYpEXFHkoSq7dwHG2Z2vr9QrcajAALcbvCAaE9brZpLDnjMwmSBmBQqF2gQ9PV7sg2"
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
