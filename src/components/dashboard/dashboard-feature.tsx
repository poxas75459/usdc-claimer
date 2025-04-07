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
    "57KyXYEisjMT8Gt8n2yyRHWYWHN3k6h5pJ9Cw84bq6FMaSLKx6RkLGbMhAgbLN4EqeFWwUfCnGHM2wEiZgUjPZQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhaaebTAortY5NB2vAM1LcmZWJYVk73zq8C78CmBt6jw6xNPDoBjvTiVt75kvthowyrF5jKuLnBW3HK6Yvbk57v",
  "key1": "5bKqiNi8AVpEvKZafnFgwb2RDFDRaoiF5s2TzbmNJagZbfdSoWpEQ4CghAfYBc3W17T1pRy8UiHD8PHRLRVfCebQ",
  "key2": "5XeZrqEc2KV9m7HBthRQTt7kgmgyUT1BDGu5JRi4Pju4gazymfUg7s7gmXHafHnNzVwTkXf8PbjNpGgucCegWhUN",
  "key3": "4GmKaqvydPmGi1dTgjEsjTLd5Qt6wcxui8SHM2GNR9vKSmCGdoVtKa7uKu6KFQVoZqBYv6x7iri77GKKQRpCD4i4",
  "key4": "67W1z9pMEL9hiRDRuZVzHAnQZ6dyoJ9CBQ74gUTWwQ4Z46JGsgvXWRPjY9ePST7ccaQLVYAyQ2V99sfRUtmfjxYt",
  "key5": "PVqjSBsUaa8hfrPiHS54D7hYEgtsHCUZvxqVS7N7pExaur6dA6rRMJy8WzzCkGUgcFfFemgB7WerQsskjwzSBNi",
  "key6": "4fjN8ysP26DTPThX5XRTqLy5yaQAsDjbYfeSZazCnwB1bkm7rg7hKcDL7HiFstdDF6m3bymH8D1VnbWsfwrE3kik",
  "key7": "366bCxYs5gThAdDHyw6FyfEegrK8uUsy4AA5JTbnjeamq44Cmqs71ZoofZe7jjmFKfSQEnBKRscnyZPocBB2JVeE",
  "key8": "3rqsWW8ZyC1GxGtvjZYPasbznKe9uzrpaK6jeaN91vfcwcHTh5eDVwsqB7b1nPzPY4C2eJEosHF16SHw4i5Uwmnm",
  "key9": "4b6U8AM4d9r6zckCiYr7vV4FzFNKmD9C7uQRampLSVwoUT6UWZC5LRt9h6Zj8z1Aex4nyRrQeoBwsnrwk6HPwwaM",
  "key10": "3KhJgiT87TEmXDYVXSAqbS3sH6q53HBcc9ikh9BZTsfbysZgQCVRqnrvhptoYKzWLNtMZCuJJnG12S44mncUMurV",
  "key11": "5erTZHEoeUjAysUSo33tDqYsh6jSBfcYpVB25HgYo3DqfqjcU2bLLqLb7DmaN6HjL1RJq4RJWZEE8kxju5x1xMb9",
  "key12": "2HRqfpMMaEjxMDXhmouMKDs4bvPYtYiADEqWEhNDUhqQQ6XN6ukLfc4cLkBZVQkdnnWve67dkrNQfdPLq6UsRakv",
  "key13": "2Cfy97JX5AXjAARf4MmoVA64LpBZEv665WkqcM2kvrqxSM1jzrFryUSqmAU51oVk5eGmuayYJF6kyiUtLdVKiJRn",
  "key14": "3JgfgLEkfkXwZrD5KMeGR5wbyzr1Gt3V4VZzkHWASrLBKPCcvinMVsR6XNVynmdWmJZcnTDcSuda1GaYBxCLW69N",
  "key15": "z1jVh4NX2941qRQFccURiimLUGZEeuSnx9edEutPJ8VPy3ER24cBTpwAm8rGjmQ38bfpgqi1BKjdUNUFBVXsr6b",
  "key16": "5c2zgGF3LWDgNK9Eg8RLbgTfPQRGDtEXxG2mf5SqEfNEPZebuk2ia4akorz1NFe4Rj2Xii5fiuUZJBBYDuUtFQ8r",
  "key17": "2HFfksBkDjUQvEYkW4mDAcbx8P92AQg7ZCU1m9uVDJbX2ohJQ9CzzWVzTy8DT2krNfUwv83qJgfvkdVUMs4j9jf6",
  "key18": "3hdqAz61FwGf3WidUTCGPfdyYs7Ub5CnUcoEmw8vET9ib2oJx7vVvG16G3Xy5pL3FiTbBqf3hXvwAR5k8QJgDMsQ",
  "key19": "2LYPVReBpUdpALhUv9hM9D3obrb55ooro6VSJxm8mrVfNM4wrn4ycfC6MHFAEd9qjWZwdSwGo9BSDXyQou5gwdpH",
  "key20": "4jMNisADC4uk4wkGeinW2s2jxoMeWAN2EaXD2aQRdmyR9bZmvJsFN5jJXf5ohFJshDqtx1K1WKsVN5NW51V3fD9k",
  "key21": "637ffd2xKmRz6pcytHJanb2sECtGF1bqjRjwwFfkVGVQ8vkxS8JpJkcj1bkt1bezCc3abRkgSGyDzAJZr75tjvAd",
  "key22": "4vLwxuU81KNg8iLJuYApVnaBSefVtzyfG777zojLEJxuCXGxyw3RirBnpVEtc1HcyQB62zXiJHPqmkDFN4qzxkrb",
  "key23": "N7Kcxbei3PPyQc7z7ScvWAbKWbGjz4peQSkNiHsKZL44w97NR47ifXBScZNeR1ctPx1Rcino8yLgjMVAdLkYU91",
  "key24": "4FffUGZiqtdjGrQvGuH2PHSiCxaNWM338tHGpyjkTfZU2ZdDQpTXxbfriXEv5uPTXexhexvydW8QEx9aH2ARJo43",
  "key25": "cKvg2HSAUcineoZUfQcSHA8mNN1aBoaMPCpFgxbmiqdnoe5JBEPKNHasmWhnicA39MdiUbayBYp1hGMZGkPzh5N",
  "key26": "5BkMixay7Uu1tHSifToNFaGxjHqnW4TktqyE6ibyYRCPyiA4Pyx8YKqYYuApcVK53bpoKfx1LBw4yhqPLYNbS5kS",
  "key27": "2nmxV7hjD6Kmc3HgY6YKRLbRfkFRJ7c8pzLDQweAtsP7ADs8WRpeJA7WVUPaAjgy9hAe9oDSJwd8A31iC2PG1pWZ",
  "key28": "4qzYx5imjbUrH8sGTgm32H7NLaPV5VxYEyKE4x8KcQu9ggLL7JgCPCYaacmJPUXX2vG8pCEU7x7SVLCbJQtyg9nn",
  "key29": "inZu8ZDY4m9URFtaWJWSrhZ6rVxU1NWm2Z5qiDSf2sy1mzhZR8X8CQMQL7UMUpi2F5gMfQ4eWjcJ3gpETNF1CUL",
  "key30": "9or1Uu6geAW6tCF5T7yiqssgksn7HdC5t7chkbUmo4vJLxhDPubP45P86GU9UQg1hiRZTpgoCPGWBEZDwit1VUi",
  "key31": "3BhQmu2MGKCS4wtGLstiweZxBKrBoeA4VGKnBTCcc6vgegtjMfD8jrk5bkZ9BynpYdjYVZSBa59rjYm3Ke88uneg",
  "key32": "aboJ5iSxkmsr5u99oGy7aLPuqJfVog8BjHntJU6YiFVKmj7Bzpzx3pzDXYsBtkty6Fu7eaCnJvuqMRJGBZe4Vnd",
  "key33": "3KpDPs5bQ2sZ1ff6C2TE5Rx9eEKbDxQqv1WwMZm3UzeK8t6hmrcKWZsMXccLk4AiPHnTbaZdz7vEAtqv4zgqs9aG",
  "key34": "5V8HoG56sce3tW25y6qyyNfqsnZ4o5t4BSUNPine6xcwWRPaKeU4vzZpWa3Sz6Lm5ZJXKuNhYngoWUauc4dCUK3q",
  "key35": "2HSoC9eQ9qMKLfRR6paDur3abgPsFNAWQjryzYx81GyQ39j8cRFym3svfazJdVBZYuA6Nu8SArJRGNWJ4ZQzpHY8",
  "key36": "3erok4PRCEj9JByy47RmXLrtZj2dGEYvWNWZL3TzivjpcEraxuS4U2T8Xy8WARJqgGtA7HR84NvPaHWsKqMk5Sti",
  "key37": "67F9JrbAxuABcVmjquy1EC2GKouJWTJoWdb7SYv24Uk1aREzDYUN2kpWC56jQSUVGBzpRg7dDcGnn3jjwxHxEi3X",
  "key38": "HwxiaFUmcDpoR5XgzDSbs1Bb27akffQ5YQR4sANjDT6BErBo3Vb2XJinEBZLSCMFMUvD77HC2CbcJJMc7dXZNpA",
  "key39": "6391BbKFhWgw5aofL9ocJLSCvQyqCDNXBSScKHV1Dhy79f44gy5gjsLtvwHvKq4JxbKCVD6cafiXiXaJKRQJZmVA",
  "key40": "31hTCoTtsxi6yatBVVH46FmWPyJ5s9FgaKQUYZnE2erTE1d1J58XXSusXMgBow8d9AoqfNn9KLsVVPAmou9e3qT",
  "key41": "3G4ZawviArchm6kWGkvmNZ4yGqiF2VzButPavdgHhsHWfGmRU8rZQ25Xu61cG92yx4QVjvxFADJviLqr1p1V819H",
  "key42": "55PqmvXVAS2hFWfce482moAa8aH6nnjkrMzngHepBGfrkoyvAiG4JCTKXrhnPAsm6b7youhQPKuyYeyve6KjnwNs",
  "key43": "4fwBgixExM6G4UxTYgh1ExXfLYncGUufHuB3SRBrMNHhkofokfdUfd5JGVvmFB6nwT6pUKcZAa62vh6P9UuRWyTf",
  "key44": "4vEeqt5kq6dpbu2DXws65z3nTgmdgmJpguRs1j1vv5kY33ccKEZo2KTuJZb6fzjoGAMRxyw1k9w2bx3QpvhUCn2f"
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
