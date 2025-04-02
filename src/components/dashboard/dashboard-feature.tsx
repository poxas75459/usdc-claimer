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
    "LcwoP6Qr62SB4YMW16EM6UnjfGrCX54uNayLtcppybwFkLVrfNuJAAFodzBGPbDtL4F1tMx1dr1dqBfDTXpPzN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smNNPAAFyCAX3oDCG8eMg6JmyiPzDnq3WmpbU8y3Xo1NYVcrJDqCgew4P5kdtb6nTJFUbj6wvm2wovtCNsKT6g2",
  "key1": "22oyMj9qeP9tkwGz2oYcChFBT8467wyLtMXP4wacoTs8bU5QVYG3xWXi5Y3cDjmPdpfcSz3ftrWq9xHx41mLCzLo",
  "key2": "5e5w9jyANnuEKzRJFRgKqfRsqE2VHY7DTDku7NbVJzztr32MfNZFXxN6QmX6yhKJQTCXeFwYj4PFNbWJTPVmghGL",
  "key3": "EfFivuCHmbb3UbiEZBWycQj1FbSziZBMBmr2bJJ3Yfm1Aym76cmafpHk8bUxBkbHTAM6JqhVxWqFVCYUcweNwUM",
  "key4": "2Bm9GoWzZukr3PLsEi5UxDx7wDvNnJqU22yM9Y5bH1zFw7GsybuicJ3AgAPpWmaNEY35FGtiG683qLW9h3CVGR8J",
  "key5": "3vt3HwUYD1dVRs9f6uzdrEgQPwWr3d6tDJGb98SSLSQgdZaGSK6RkKzZsa7EHNaKuWWvPG1nyhM6hRo2paSQHoeD",
  "key6": "3BoC4EZF4MbByr6RvWHySzshiQXfp7tvumvPkBW1rn4irLNF9WTTc5EiGRiD5qU5bagUNXXHqbUTAaZ9uKo1AoGc",
  "key7": "62VhPFbqXAT3WxryVVyQh6fxKAofHHjteu1RWRjEjMSHjJsVM8wPjcWqqSWMsmWSmkuLzGgnd7B5on6Hz1a3Bzpz",
  "key8": "5UCc27aTinCaegWM9P5rLDUgeNJ1Y8bw9sAQZqamGPiMNQqfGuaEzudN6rZztKJD8Vr2t7rXn2soMSjhpYGaQRf",
  "key9": "2fgkwggvmDTa85xNohJBntVyuhjZa3R8xfcGPyiEXjHgdYhJQXmB4zaJgDtYyuT1V2LT7ejzZh2ystLzXXBERReP",
  "key10": "5ASyEBg36BeRYmsxnqQMndy747FYWnKr5H6SzggkkRXUo5f9AvMsPVsb4mkWop4ut94maAMNSz4jAqBchi3c16Uo",
  "key11": "3zP8pyafmhbjVEFtxf6YNg4LGtkfMSFQo7GPyV1prEhcYazb17uXJUn23epHBPVqrL3u2pwZStVWMwBDLEQ8EnxG",
  "key12": "5yDd5pxtCMxUR2JUTgkzkTjgX4UWUUwtLN3TrXnbXvWmhLPbo8pNFJfGJCWD5w14riZ7EFtU26qMdHf7aicurJro",
  "key13": "3CaaPu2t2DCRzgnbagfVpRoC9NtXnR9Z6FiZVSSJVgXKMrarmkhcewrgmYzyxiNMsDjVA96rcfqrthd9MQAe3UWz",
  "key14": "qsoHMLFEfQq6Ju4jEwgiJf7WYFbHRHEEFykkNgkKhU8jbJcgAwRx6NVP62WrcctfmJZCW7exKiYkNSULbiKMd1b",
  "key15": "5A6yQnx3u63k5s9fm8dhcXRpFExdXpKudheQVAuDJwmTVnxmTx22ssyvdYCGUx9zFMSBMSNbnPET37fs7YTmz2yp",
  "key16": "MJRXmDW9CL331daM9pUM4townyQFzGpNw4vHEa8z84JouxUbQPmjFaSkLZVxDaMjq1WY7wBcBrsNN7DbDtK9Acj",
  "key17": "5KFQUrwNkU5zdLK1mWu1kX2YUu7sZyVbz5KonHmW1HWEybBrqkpewUV3j5mAMW8jGRdqmKEMYZj5dVDsw4S4JLAA",
  "key18": "4jmrukmFnvekZPTAZETzcTvqbTtpTPn7GCXKX3Ji7sGRTwjmGtxcbLsgHUfJKjyg83XjXk6tCBN9XRu245mHXnSy",
  "key19": "55oeZPTqcHG5qeKKzEAfYHYSphNs8bWgRNjNbGshkXkKjQ9jz8kieEYCbDDUPe7QmZyuRkFRfiRU5jjjCQSZzbCn",
  "key20": "5dEZRkmgSomSJfpzno7AcFFBpk6kcvKgMaZiF2KhBQdcDuRaNztDMCpU8QdnVc9qeD9DrGC14ywe5jkKYP6CT2UQ",
  "key21": "4wwBgXEZpcGdUTDwhZ4Kj3uY8Lt8FY6RNA62af8qJCHm1CEXRLeFQUB6EtcfijtrAnEGq7EGgqpi7LrfEf6X6ZRs",
  "key22": "4Y5zSetTDLJnUtCYwdhivgTaQNVRsUjcE8DWmaihgmdtk9jTQVYb7qShjX7dqF5MHChVN1AmkV2fhNaizAsRwsyr",
  "key23": "5omtvnrWBVjykeTW7dYbvhbSsdcHhHem8ExghNgsDR6XiHYaQSLjnbsmNW6F8yCjojY3vUaNyjHuayELp2YzxTRz",
  "key24": "31kLqGzxk7go3i63YMXKPjsWgqL7ZBJfUNohUwL6VnMYZc4PhZacthds92JfFWLNmaUAtzQkWBgjWimPVC87S1H6",
  "key25": "226zCbuYFS2gHxHNuyjLN9oX5xEp76DfU68QCWN4AeR59yQTxFRiyA1GjbcR6sAgdZjfyYFRRn9PZrkEJ8bDtASv",
  "key26": "tgfQXxX99nKWTsMYUobc7YyWVJeC2wx3zc3USWs9bkezoXgYfYoES1AXEG1yMFoc8iFaR3UJVW32JqVLcvokXjp",
  "key27": "3qFQC7KvhD5eARaxxxU9a6KBDLxDyy6ifnTmyoBr3RGs2yF3Cd8qzboNQiV3dtpxpuZJCRo6b3FZLLcAh2PhWwBf",
  "key28": "5vpmuXv4o5r7hCaNxXCW2bmG8tpM3SVCASoPMKfgedJRXCDDgFpwgg1AaMSxNS9fPHsRieG5aMSzvrgFsLrZZ5CY",
  "key29": "5Y1REmVyD4eRD6auquLWSSJJfiLKZw1LF56REA1DRqCErBAErvkFj5nusfRba9kS6ghMWg97bdoqmQRh1AZkoa7u",
  "key30": "5uq9CVjU1e2gQFpmBFBDkSWeKgr1YqVHP9Adq2t4S1nbHd3BLvhSy6ViX93bqHLiq77XHh2wjtwUNt3Hd1p1jcAF",
  "key31": "3U4qY5doYzNSTDRzaxsNgTmJYhsqHJSwrNovUGVYHUGdd46C282VFtYjLc1ax8fKY5jk9RH2QMEYfFvWgLfNGfHs",
  "key32": "oLHwKmmL7iRkTYSqbCKWzFeKtsU4BGMNaGuqp5tWBZ5EhuS4WDpwTa8fRHKGxPW2E4LMXjYwshBgUDguDQWLGbb",
  "key33": "2QePV1xU8drQdaHWaqmhnD3RAWpR3RJPfukQFX1X5SEmJs44rZbqSUwUpjbPRg4YdTD3G1ZBkdi1eJhbQFRZsJHj",
  "key34": "67NLAP6hBuBvQ6DHxVZiEXjdHfqoPDRZHQWtnL56y7AvPRVuYNPBFhc6tey6Z56eA4HUzfAdv7eVneBquXa99TPJ",
  "key35": "cuQavfjTfxLAkbSsBhbbnnPmNPqh5H8S1Y2B8hFtfqjzT2ejRA7EW9th3jFvisYvmtUNvqUwAjLP8BoQwTjWtAb",
  "key36": "5KTMBSS5eRpGPUVmZZSSoH2P7MSAwXJL7pjtHwncGiMjzLexJrZwCa7UASpkYZr6XVHEcdXmetBfstCU4UkFVa2E",
  "key37": "P8cQA8Y3mva3y3c1TNFDqLBT1ER9f2HN4VXn1cpEzyqaB6WGpvMTRTaocUuNJBQRqmr2ZA9EXwu2JfeswBT3WPG",
  "key38": "3qJ7DkGWe7Ug6fVHPkWB1YsuNkdJTZ7S4UFgAQtVxgVu9fihc6t6cVDAQunznPmZaRYnr6SrMMJ6MAQkrFQ68hjc",
  "key39": "3avzHJ4kJT4hfXXLD3UTPFDuFJzYbbEWpKPios2sB52oZBhGmbqeS4hGYPz8fwcjKYdh7eBsRCzaneDHqwr7HSxh",
  "key40": "irMe8By6T26GJVKHPegKKMvmaNdQkPG4j41ofFPqV1YbrzX447m3BSDUxHSCHsrmitdoGiH9zT4kByFN32zVfWK",
  "key41": "w1gUfezzv314iFuq1KGTKZptaeAqi8k6zuXMGX4czCCPrhbndZWmhqnBUZiebVmQcHNEcX6jFhLfSsBexZkc9er",
  "key42": "4s23ejvu2ZwH6PrbEqto7QwT55fhGKssuSJ2aPh5o5wgEdFzd4HGnNq3JbcDp2eV6csSSe9egkSvPnzZfDxkq1Ro",
  "key43": "3oW5QUtR6UQrijFWTYgvawq5GuhmgA2EZQMHj9fy2zDeh1749GrbtMenEpCvGHxeFytbSdn9fw5nXxpVq6WLWdiD",
  "key44": "5aRFQV5a8t2aBx9oNQGpfsMX5hTA4izsQriQW9sjBcrDVpiw5hMFpSWMSexDQr696bVMXRv7QhaFQin2EAzq4Bii",
  "key45": "5WXLU3LCVkBHBhchmEXKhKxJa1pEVpxXFna52FtieqQxx71Upgy7KVH7XsgRcXQnvk21NRcqEFDuJD2skAbcg6nf",
  "key46": "5Qnqogtxz9HS9juyXQuZpZa4MjDUgDc3d4s5EALR6ZWPMfcqUS4SZ8JFe9NLdyRUD8TMEEvCBcioLGSkKkvmPxFe"
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
