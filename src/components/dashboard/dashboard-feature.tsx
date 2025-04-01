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
    "2JvdpfLxoSfVEerw57Boz6acevzMGGY3Di96dLuQz5P4PPAe6ieu9Xd86Bn6KnBCan8v3GiEbosbibaWb1s5V6GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39426s46bpfCXLL21TRqZtVWfSSeb8Krj77YQZf6EaWRCo7ZeF2rsLEZjW32joiVhGxGtUqFixmBzgUYYwuZgvs1",
  "key1": "4TmXCZCpQ2rnf2htwHUtEvKBJtEHwJRymnv6D8EE5oXThh1KJKZacg7yz4D8rxgRKDHjodVCPrrPZGrZes41bDtp",
  "key2": "3WFAu319v2cM2KRd17b8Dpczrn8wDXb586N9iYA7xgTGvvmxfECYgDyLgmR9mP6N5ZkF7EaVLqvDpxS96UXdbnGF",
  "key3": "4Cu9At72FuYXAS7NtV27KtY26Ub1aRwcq1vFb8GHTSHyYoBUeRSxEEP69gkvp8bCeyhazVEt3KuHNs2zRypK412q",
  "key4": "3ww8dBb8P9GHsyVp1EYtvVRUif1gt8e3ojbPcvvo9Y8Ne7P4nfQx93Eukg6XudjGE6VMhJw84LbDqTM6zeSWean8",
  "key5": "3MtZ8DbEPyPVGD4gWD1DFdEnbRnpdjZE8VpauSc7AKok4dnKjcTWdKgUYSURaQZPH4TkU6ZokisiMXe5Nr2Zh6dd",
  "key6": "2AdijAcGcmLPnsLP1JHAqcvL9NfatmmHHWfgTz4PLYwx98ZtvMrxFZoekyANFkd7J9WLv6X4jDMeR3X5b4FHWHTU",
  "key7": "4MFTMSFBn9WMTS8Ftc1d2GbY7sEmhYAePFJkwQXYhzVnzTEVUw3Qqu2CJjWVqZuGXiz68nFCj9hqVz8zVAk17qd3",
  "key8": "5WRpLcgEZvnQ75336bzjPRg9XXj3HLginhER2ZDEWzYu9YurCrsvBKBsUkzddKsqS9Mbm3sQQAkc9T9ETfsTt8Nt",
  "key9": "4oeBX4PeH6zYhXV2fzh2ApYpPGRkojuvjK4zHxheHASFSbzCPT7rqXNa9QHdz6PZYhQELChSWnqncTbNXrwhvPNp",
  "key10": "3u4wHEm3dEt9vVRUnSX5AdUz1PJBpAo7NUqxtZMZbYvrNbcWc3QBr5SbNRVkuZzZdskfvYCin2mCcKTvt1WoGRVy",
  "key11": "2rugq4BmXrX1xhDGKoPQSEEkeoiA1P2BfP7HsyMrGqcHD8KSm2Ho5ZgMB4CdhuEj16A1KzCNrDYfrDePy3GrbBAj",
  "key12": "3gd3jFzSTWBToqMQzMTZqJWWvDHkgxecgrzkSYxdDsuDJREoi7WuUff7x2EwsHsxbCAq9gaj4cK5HUiHURZ8UcPu",
  "key13": "3s8QZwWt5hhyePNWZY8T6G2bjM1Cn6W7m99pYSd5SJnmJwe9B98UwjMWR1QhkEdy9irPzJZnXRLaCg3M5SSEE4vm",
  "key14": "2dV7te5ZGdMkbxBXtbEGgS5CGtvnCDfSGrUdfDFtuWhGh2N2PNf8L4FZHMt39mMcaZn6BMSRzicT2dGMjp9Dhw8B",
  "key15": "o5TF2EP1xhU5SY3e8QZqVc52bYtcuJw4piMp3ofYk1bUAhY4bVshq9bjb9xjAMdRE9CHpdKuoXoFaeHLVkAJjAe",
  "key16": "2HT77Aj74GzUNBLPujsojKzqqmtmeeGDgfJyYLSPwUAUeMtPGiaR2p4oBoKkXkUxTqRUZSCBgN4XbBTW8MhciE2V",
  "key17": "5q2ZJ4JkKMzrH4wZGPzX6hyA8KLF1NgSxrwSi6fs9oWDUwSjC63E6U5Lp9uXdEHHYJbewxwCd2GUMQCAVvTHQ9nK",
  "key18": "4MzAh361f9fc8qqxMg9tfx5zqka7KEdAYvhLwz6nw2QnEcjhn2CsRMVhW2BanhQ9DATtMGA2zSnkbHizoiatuiD8",
  "key19": "Wr4nTQkkxh4qbWFfBC1JeXPmPqL88HMNGAk3e1BdnVQRTAqJU5Tzz8vVWRXtx5EvRCdxbfDcPLgA9Nh9q3CrpFx",
  "key20": "5GssDRbnUAF47pJBXFhmJnSZSxT6UJ8g3LW82wPWFMf4fKNwaoJQP5b3jqq1EqTgs2Hb7wy7AzpRKi5dSCbz8QSL",
  "key21": "3XHdARs8bne3tbdtUALmyyrH9a5JcynKmDHAYgi2fL6x8yb8888KWMFCKPr3VCYEdydCgdy577TFVdLVppsnTQvM",
  "key22": "5AZWhSi4yjhDZb2J4bUjidxR5jAvYXdHEFE2CWGgdk1eB9byiHfa8kYLgx4dwJxFh9HU4ZQmrUqAd2AFEGZLZypi",
  "key23": "2ktkLzzkjeYtPwa72WJCDMWRaJaqafDcyuHScdVHSdEQHXCLi9KTMbMw31HmCxWLNdFX2JP4ugmVgFh8NC5jJRBS",
  "key24": "4v1BrcQRYhuRq4xAC9YZNySENxjcpyuRgve9xu437b7YiHsu3K1zuFNAB5Snm9unpnqR5ag9bcSEx7Gh7BP9E73y",
  "key25": "4ZKgBmpAkXvX3LS4hcg59uAvGbtHGRwokb6mSmib8FxmSfzNRJjoEjCRJHVxP3wnfeUdKsdd8TfVK9XWZJKUuskP",
  "key26": "2hEyJiWR9qQG9fHHroMMrwhrxCydrP3SiN9dXjAnRu3E6B737ypfAkhdkmJPQVXbnPYBAy2X7NkYoPLKE6bpHUXR",
  "key27": "2ZCn13BFTRzhZcSinMzYymYjJYUHtwZRMptEAQAN1uJiWppCKDchBiDcZ1Wc7R7hBfqkyKzT6JpCczkXN5BFFyPV",
  "key28": "2YbgmVKcjPGGKNzPMu6zcysmsYeYRgYLpB9RvnF8M489DZ1WAt95vKZwxjq8xvfzp1PyMLUURi4JUqyMFJwosMr7",
  "key29": "2gjSAfBmdjg62eW2SniMbcuWYDxBVGz8uUdh3NJH68hLkbbfXpUKMkVGCdgGem8YaLbudbfLDEFy2GZ3NkM1wDzr",
  "key30": "2ZsYwsDNKhqKKcJVFD5D2AGiWFYQYwPuGDoftGPmPejdRe1A3v4kRnUYZGAsG7Raah1eCDHbTuz298CnBTED2sh9",
  "key31": "5rQcUPmM22xTRFnZWJv7TEyV9YyXQqBcufCk2qdhymEuaoAAdva5vcjbaUsFFi7GMmAigZhbcchzNDaB16iRT8hj",
  "key32": "BNdt9oYC5YzUZUUYwzXkk5FJJTY1835eSxTvG6aDvaJjkDDSEsEAyESrvs9BBWPfmwwu3RB16LKDoY2cpSfTVtR",
  "key33": "2bHvKxP1DovTw8R96MNxCuuCX1YfCU7TAVq3R1mkAdtwBFyD6Eb793psjRwVYQA7sr5oBR3bcXJL711ZV4Xae7Tq",
  "key34": "4WQgxXiVFaWA94u1dVzfbmLB1iLPNzKZQGFiTdUxQGvgeVHcqSxpcQHEe33hfEr4FjbvdTkzZ6qZfp5eLxro2NfS",
  "key35": "2RMVZU6n39Y3jyzogKqKzB1sqSzi3GffGdJ62vLTsVcomDj7Erx4CZe8LtjsRrt3fhFnNgTUZQKUta8E1qzqx4dr",
  "key36": "2wzgT4t6Y2SnYPqcpfikutb6C7SHDo62nKcFQT2d9R1RhVG95xbpwKt5jNZHXmhqwTbae84xMANhoesabMEsCttM",
  "key37": "343iJhGuzvqNjNPBa4wPczuhcanGcApha1gL3qdKYs2dVm4kcH26KwAgFrgeLokvpKYuUV457jUXf3PNBMXwttVN",
  "key38": "36z5aqAj23kwfqdX46cgGfc7iiMXAJ3hFRrNdoFLMPde3myp8zF4meWc1wBMuAENHj1uTmmeuHCJj6cpHqik2Ghj",
  "key39": "5PzzwUnWpCZXxdR92Ja76SPtvP3Su9MRHHA4eV7ySoW3X5vPBtuWskooj42vXenSwTWX67L2triF3k3LaqKMyJfs",
  "key40": "33z6dmTBeFoAv8hKXY2F9JnPrEr12rbB8AT6HRrDQPCspZnpdhF1c2Q1tb53ks9v4FsE7kCoA1ZykJ8vWo91LkZA",
  "key41": "4F7cN9QFCkr34mn8Js2swgs9UsAQZoEU6FzGebLmQZUfR3zxXUo3SRupNBYDHievbqFQ2YkDGxYFSKKZHTnFSffZ",
  "key42": "5Lnq1GwLRqRoo5szaZ5E9WpxctmT5s1qF9JP6aByJB7jrQNJjAkrkp8zjCQxCMox8C8bp3bGV9P4WSDS5mdWMedR",
  "key43": "2R5SQyy4EiHTXtuZ9uGPWvsmQb4kSCZ8fsWCicLRtjT8ap1dhuJqyZZfHzCtVcmuQy2Vkn1ewyEdjCPHvDEqU9r6",
  "key44": "2jRaMYYyi5ukB5qiN1mP5HVAG499JSJjoh6DjpcV7k8osMuxKxVeghDDx4eLMz6ntgrknEeNjh8AEvWLDKJ9auR6",
  "key45": "5zcna4YWdTLMtEEJMwmX8XQCyvTj7xNufSjkbLkGdJZc5AJuz4nwE98k9WQnmGk43SqrK9HeuAGJTaYudY81VKWQ",
  "key46": "nXD7JfRcZtDrMvYeT2qP8fko4ohYfrseDzymTi8YE6ZADX7npAegNLcDoAEwvjA36CoQL6GaE8DNX3S7C2PCaMn",
  "key47": "4CRukwTPESnfAH8jcXidbJzpmbjFyAjL8NEV8UHZLpngDfqd6fmLJyFgRM8dYZPpbf4HWdh3K1yv8nAmb34sr16R"
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
