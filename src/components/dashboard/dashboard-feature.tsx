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
    "4g1CspYnGnYimwdjQSqB8iRtnbrfVRRrpqPtDZD92mxTuBMutuXtPnJ3rCZApcvx9bBBEwyuTTX8RYvVgL7NBVBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZQYDhvnRTXKL2EM4pQvnNxoGfc36xRtvQbuYVc33ovmiKkFLWGTeEagZQToZNSfbvupEonW15jG2AkTNShtmkH",
  "key1": "2fggq4HM4sbLhBcHBEa9kFsnTieXV4jg9v2CK3qy8aahWDxe4REhuKTxvvqPGSafHALcogn5YEAUfKdsbLgZJs8X",
  "key2": "3fnL8Rws4N5t1J4BkZiQqdxFedgmbXmvmMsQSmnNigqsYoJZsf8B9y9Y5kcuMfcjUivUX2PNoPsWcxFRGpW4ypNG",
  "key3": "GgwZ6J8TpwjJRhMPB9qR294NMsUHUKgYv2xawjA4W1YEHgYp17cwC6Fh9mUFmkSf3THm28LqXpGpQd7rCd5oom7",
  "key4": "413SGud2hKC1um76jsWCh6ddAF2Lpe2jC4P2a5ScjEjwwp2tRc3FMuGkrjQ9FGuK2KVZCEkj6MWLja72sNNEtqRc",
  "key5": "5e2PVtZ1f37ibKNTPv8gjgqmGjYEPRLQKaKf3V6rwrG62NsdwUmiTFQHWuhoeLvT2CZHnEga5xhtYoNDvk52nr9M",
  "key6": "592ZhQPvKtqPBK2TmAu3ACjpocoD66cBxph2ykhQmJRNd6Ge7ZgRQ5kAzAXexyT9fbHVExvJefERcTKmJuZxGbNe",
  "key7": "5gpofDwSX2UbyvooDAsCtrvuSBmwDHfdkHThAWziCw8t5H7FyzJtvWEqLhCShKDtr6Rg2rRQC7U8a94YAsH5i12z",
  "key8": "4w3Gp1HQFTdt9NXFih5WP1CiYdYyFzrfsfYP3BftkH9LzjLw9CLu3JwPDmG9AAi2RDUBSVn2KLBXGHWKhHxv7FFG",
  "key9": "4aiyajjmXfvtkHeZg2oVXKscpiStuPtXhEU2KdWiDUXfNZYaGAuc9KbkEb8W2Q4JDEmtZT8wmZmmD3564dADcsgh",
  "key10": "4wkjj8JaXtgGWB4vZYKHhpW4pR7ckvTgycL93pjD5ngrxog37jNu5V9wB6rsYEsYrGbWVbgFyRanbpEadmMC8YF6",
  "key11": "497N34pHvx25NTTtZMimVHEHMREDGrtMXxH6kSLfn7L4ZdTck9ipjyV3zDvPW8KizHhBcrECDpEGF6pWguUk39wh",
  "key12": "5qGC6bgfiSVFhg9iHC36msMYuQLSm4VNbKbKFkmpWy2p2BjJucLRSxiByqxRUgeKbzsmCuQPH7TvErKGckmuNeDA",
  "key13": "Y3yLXr4qq5kNCh6SkXKcKgZyozW6FpkXfvccRDJBJrhYiHV1WTQoB48wJwCusmdccg52Mj6QLZhxinJ94N58XZR",
  "key14": "34ZWUuLFS4ZrEzh3cEgeDZd9wKtJJHWeAFzvYqAhUxamJBKjbEvS4R9vAd12feZpeHEmHRdAfe1r26qyFZHRzSom",
  "key15": "21u4vnsbzgFVc5ScgTk54fN6am8vJ7BxryfQJZCtszFKrJ6Zb2T38ewujDqshG7sSWb99wM3h4dDmz6KArWt52bM",
  "key16": "5tVuUb8RjmNiifW4qw9MFohfFJw2VerTHha39Ukzvp7oWNPU47FB3FSek6zBHMDmWQ1RQ3yAczetek2b266H91AD",
  "key17": "3DYkTZoYhx5wYUWrd3wQvHcyoJLNdeac45vSanmrcNrqpYGDqBVvzD3LvjZMQGjFZCaj3K2ZncZK3eqakhvE6pXA",
  "key18": "2DUnpRHtzpcZae74x56vMFbUEKSRcqNckMvvMzkyuGa98noYYWpxyaA9ifm4r8nWUiNaYuVLgsnpiir2ARR5AT3R",
  "key19": "4UR9XerwC54F7JD7hnm4fZkuVsRquCmVqJr3kheEWREF8iBBTSjR99Med4FUSKBD127nRuusMy4cKLseGoHm8tRe",
  "key20": "McXc4NUKfzoeNU9FfQbTeBYumhayR2Z7vscpeE5NbGM8rg8wxpJKBqP2LPkb1UA8NYUrj5P2gnpcNqhMuNLAVNq",
  "key21": "3qZ4xuHMmQ3a5Z3ksM5Prx4ioLSeMPq9cMySvBdmagX4Y68nRpePzKVwdw1tGcxBkfXaPHAAmFeCM1xdBCswveEy",
  "key22": "58eYopXLL2bMdwSvcFuaa3sdtbCXhsHG6js5qxjkqGucw6f24UAwcTjM8HL1nJRS57q27WHrrTRvDcKT2YHoC7ei",
  "key23": "4DkbSf3AAwKrtnxhLsPNrgogNnvdy6XTBmaB2NE4fLdoUbwEowxeDUFsKXdNb2SWtLMsDBkMD1pb7fA7D9apaWpu",
  "key24": "5Z4hu6gSY9Rzk5hEDF8D6Vr3x6yD44yHUzTF1BkXkCqJsEJuPY6k76Xgu8tjwYPBZtNNUfJpGYJhRX8c2yzfpb2N",
  "key25": "2hXnJ1aFG3EbRZFWLCYeehw5yzXvbL5aHMqdKE3mKzmWHScuYkzDD4jAe4vQ57D5Gf7VEUqRpYk1NoGYKAv5S3Vx",
  "key26": "rxfAqQLdgxs4MnupAw1g1EBh9AiU45EqpVcStMVjxzdngCSVCdnfs9wS36tQxYcGJiubYCCPdkrpNhsQ3Bw861M",
  "key27": "5nWTi8i3mPWrg87NNXFwodsX9wGGvhCnWyYQCfk54LB4RwtwxJCQJ2UDrEq8gKuCw5wZQcWaG4aRAGr1dshzJvLR",
  "key28": "Cb644fypyenj6qaxAqvKtGVE8ETaQioeVYgmtDVuKPkXWobm7RFArk7hpu4Sgdf82hSwPuTqYWnh3w1q5WCQ2sL",
  "key29": "5WXhbPuAz3mKVnj7xYtYVxWc7a1W8G8vgouvgtKwRSvBrrNZJ7QLhi9mTWoygsLqeiqvxFdhEn5oD2qPE2qL4QUR",
  "key30": "2KsNWR9WmFNxgwFzxGajbsiZipjLGtXWSDKZcg8QE4sWEVoPnt1DVSVRUTipF1TcDz7niVwMKJbticiGPWVKsoBu",
  "key31": "2wjcqeVhTAkiH6XfckiwvuLHAcCpkDnaUaVHkz97XgaXam9pR4ARNz9oQgTszRbM3aYdKBZf9xxLiJUcgoBrXpJP",
  "key32": "4QBG9D1vZYpXzLJK1hNMgFLXrqdvb5D16nT5bpnxShdKihUgZ6AEkrereZr2QbCRUcz9mzU5ZzeEF7gecjkoGdDc",
  "key33": "24Dq59KWddDGnpk8fS5cFnEAbbWVb8sCnyGob1vMV4nzbfn9swTjMU1koXcjaVGE8cXKfi5qGGz4S6Xaef15h7C7",
  "key34": "3UzAu1vKuHXgCUxSMsHP8ye5rZiXPpAGACvUrEVCANuESquUcKh9WqmD3f2caRCxkDfUuYkdYSL44ZW5Ld99wnQM",
  "key35": "5V8rwv2K1p2YFPPpZCCRPoiy9RGzwu5WuU5W5Xe4vznKJYxbmMcEELkvi4wTvL24NpHBh8FKQDU7KmyypMe4HyEf",
  "key36": "3D8oDAaY6Pao1iZ1jAyj1ysgTgf1d4PZU5qNFtDY3ej3vRi5Htyvi9ZRbqBnqMbcmmpBizh3qmNQsJTtnFrL3EJh",
  "key37": "5eSJhXJmzwUF3RiujbhpMyboRqv1wvizw73pM74eb9dS4ggjtNkY6YPRMtwTRaCN7pCq75Hv7aUBcx76CdPmMjah",
  "key38": "2TQbBWj8Z8GFFeAJuwACrkKtFhCp8PaGWTVkiLigDQ3Bb8nC8bUznkXaa4x1U6DkxLmnsLm34WpkjMHVXqGBcC9f",
  "key39": "5EBHmwRxW54AkmTsFyzGL4wHd5bseY39tbsaKNcvZeoiaQ6JdizLp1MqiyKf7NHuW8ZdKRWv5YMqJ7XZm6Mnixfx",
  "key40": "3g8TqhWBhsJs2T1k86DH4qCKxQin5HMemVzUZufYTH2qZFZZ7jPnpZwQSijVwZ1uJid8Fb2o8277CaTWJbvwrWJc",
  "key41": "PV6uRvKc75i4ZU5jpWwpgHYJ6T9VFevXXBuvwoL2yZ7sS9hDuBdvRvYz27vNL6cDXa33RaWha841RMGPx14ehzV",
  "key42": "4kG5YuYDdugmm3v2Q72GDKTGf8ETKrmo61SuoyDfr1PadLc1ZU5k3BnANPhut8Q2HfYtWAzevbbNMqc2S8EHTwt9",
  "key43": "5wrTw3SGz3rPNp63RJNtfBuoaZNbfCE6bQHBx5oRGAXTxEZ8UwCHKLskgMtu4Roiryb5BGdLRT1AQ3gHyf6Sqfge",
  "key44": "21owHhwQnnoaBD3PPaJtupbmJPnBXTg3Y8yz3h4Hv7sCK4zMsavBXE5Qs5jPZNhzb1AtEV2fMR19hiuF4bkgYF2T",
  "key45": "5ufcy3RMET3ffzC6meFk5H48CkH9mG6oZ4QaxhhBaUERDZPsJBMHHPAi8o2EDQmWEpZtCfWDTzJHsvgdqfiGMuYx",
  "key46": "5bG3kMXEWLjKW5dNS1Sof7iFWw48bst1fZsbhnwiZipHWJzDP7so88eHxSXEJsb5tSwuzNXLvf17sQgrkWseCXMB",
  "key47": "5RN7WSovmeTP2kWMZmXDroTiM7z6j8CPMMHk7JGV65fkirg73Gr2wLZRgDkiB2Z19NQ1nfqtM1TkrxH1pxc7Nwbi",
  "key48": "65JuX54NAuPHmRHgJpJsZJW2mw7L1QZnVy6GHeAPvbrFMfxXB9Nkmw5KwfbGqFwGC3gBmFga5KXkCi1PfRuzvCkd",
  "key49": "2AzCkEfBbg9dx958GdBFGeQFFy4cMmUwvWa4H9jyc5gfHakU8J7mTvW1V3Aga88Bn4WxB6YSpm6dU7nizfRhzHdA"
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
