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
    "29xFB3i4q1i3ewFW7VFKvopAWzYeXewjXLdjJ3dtaFUYaSESgL6h24raYtH7MBTLqz6QheRqxsTATmjg3B9LVBZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXZEm8bsB176ogHD1sFSDss27UjEogL72x1XED6mAo21i6YcC8dbsxrfejei1gLXLmnj1a7kQCuMLCh2G8a93N6",
  "key1": "tCuVayNxCMqpzW6QWzEkq3kiuxfgfVR3CML2uDgxXRGx3TncQDQwbyv2N4MZTnhoLzyJ6ejspWsybkRArWbzuav",
  "key2": "yTw8dFFHdZsT6oFWLaXZ74RvHbytYKeRBvQr2JK9PtsPYTszYqmod6yTxyCk13iBJviAEpyBVmeP4szJE9maX6f",
  "key3": "5V3xpPkhMnwfptgpCaZmDJs3Vp9FRswseH7em7Sp1joUDH5Nsdc5uku26wjvLoLRbGDMnUN6Cm7g7mywbt8f63Xs",
  "key4": "K3M4TF8SfyteYMBR4EB3LnbW77iVWFWuxYruqZGqbaFg2qVMyU87bDK5sUNnYDRbRTiW7x5ESeq3WhLirKE1hQy",
  "key5": "5csJpNcwooNyrEu97FpAWmCJxQpXPrsseiqZGCSkydcebVHYGwQNu9jwamE5v5TrxGcAovShtRvL3pax4hXLi97A",
  "key6": "3bF72s7djb87vD6xD3JPx4FcLFzZCDUG7VGMJgQfbSHZEBRDJASrMPtpTmRsiZ2QynuLwfMQydv2XncTTZDcmRyA",
  "key7": "2LheAvrWHEuSFCVd1VUt3yL6rsYMtvBMNF5CQw2sNZbu3kngHxAm4FkAkaYu5uFnwwh7TqKQxkr5cUbWpioyc4jo",
  "key8": "63SnHE89nHWcMMAjzNYH6HW3hjNTs39BKxMAFVFJbHn4KDhj7CyDxNUkgZNjPYk2Sv3rMWHZnkVs2ibkXsySqTzj",
  "key9": "2gbi78TegHqBCbhXbRK6pgNCv6qV6KyoC1ATJXbxZ4J6efcD4JRzdPTkLCb9tE1FBiNA9FoaNBxbAWee1QkAQhnt",
  "key10": "42rzHXzPdmAqDwZUCGgz7YxooZFsuU8ENSTBaGbUWKPon6dFELXxFaCE8PtLwKsfy5nwArV4TDUPNYNqxP15hpZ5",
  "key11": "4UuoJPxr4wCbx96VCyRKc5wCHypaxHQjKq62GHeA5n7cCZrMfrqLrJBh5nCQJngG15gwzqPzVtRsqWKKpJRq9LCq",
  "key12": "3nyeyAHmu7bxWUrHXrh9qDsyyku5x2ho1PsZeJnTGpSmkw2vpNPK9yFuEKokWijvzA7VaLKqmg4Dw2MpFJj77PJh",
  "key13": "ChMud7CRxREkmDdqPrmtwhhVtFvNh3A3qvhz4r7aDr8yvMsnCGbEbdSPzBdEEWhipSyHkcrMy9z9rLcCtZMDArt",
  "key14": "5AVKgVoEjoW78o7mmiLadE9H8bAVXrTaLWqUeYYp74TGrrLkWzPaxDPm9138pQdTdhjuKmindKLV2VCZqkK4wk5g",
  "key15": "4Si5J6yCk5JBr7cdEZgtcRg6UxWSoi8u29FBzZ6iaLFfB6MJpET49hxBFmHGEQgavFAADE1akFVKH9LSvwx4YrRU",
  "key16": "g43T4ubGa2AZLJeWynPazVSXd7jXkmzhUGYtr6MEwPF2U9vQsUD5Niqcxd6Pp1Ug44eNUivP74iH4HSxZqTsZAA",
  "key17": "5agmxorK2i9W3f6dV9WGSESPDDbKqzt4xGv2hZFh4wwxTnWujpgr2n448b5tBQmnUMacNyMazVo95ntDcorAbGsw",
  "key18": "4R2L1aANF2SHqdhuByrdsg3Kyvix33K8UntZZW7jrTno87Zx8pj3ECxwLSt1LtcS1DMLoAPCqFg6JMTLaj8pcYei",
  "key19": "2kBHswQahyossdXBMfhvKmc3vwSdcSG8nzQvT1trJFNEWWifsfEsYhNySFqraet3xHqNs1kGdZgdEDmkshhJqUmo",
  "key20": "5RnttiUKfwccBf12dVpqTV9BW75G65aWzxkFBKKskqVipUGViDfRDgxdr8pRKZ5V67wD1Ecmh7sni6QS7Hkxv3R4",
  "key21": "5dgSHB6waxD6utvFMQnkt2ekrDySZ6fV26GVnjGGFMVugsN8YCLUHg4LgY76jVeXERoiHz4qDHTwHznmA8KnAm7v",
  "key22": "3Fxmwy2tE1stk8h8W33spMSuNBLjedVXSVJpqNkbVvvx1GvSVFfQWaRocdXm122J2oRWxBTDvaA7DSDhZDMWR8mK",
  "key23": "3541czfLAd3QbTDGeiGYfqEMYichpGrDVXmecVwEwEx1Ai5538NGeeASTXoL1qLh1BoHavE3zQDWdj2JmbKj2dw3",
  "key24": "FBwBDRNgAgcgx5zzA5cKuNrLsRvaYkZDVugeVaKc4SzZ5zoHqxeB3TSQ5EuVjeb8rcxgt7jAyHAKxp36ZFzbTaF",
  "key25": "5eQWSW8Myp6KLQS98tT9dgCt83URyr6JeMxaurHf4ZTHaUvn6kKy8BuDHvRv81fT8T2Nd1z83De2JpaL3XuwuBTS",
  "key26": "5bJnumCrTHq7Gt6yacoBjQC36e85vG4umg1GJCSszgH7Yeo4vunzUGPMMtWxuBzQKBaM6WSehN2GwkESV753u1w9",
  "key27": "2dkeSz1meLSywhEgYS2irpLEkQZK1EMNnmrK24NdtiWLpRyd6We9Bmm64VaGGJUCGKbQKeFVapj6mM28aK2HUAe2",
  "key28": "52BnwnH91UVyWXUUxgKgQF68HWGe2Zi3trevczprKghAfi5bqZUEd5MpUqz1iiJSgpeb4RMoXTfp6pqbRbyZ54zS",
  "key29": "4T8ARPCYACvxFo3wmmM4dGq9nkr8EgARF792XPabkaU1HUDmdbH5QDNK4MTr8Fcf85Qj9ycYwGERtFCfyG1tVpHn",
  "key30": "3663YXgHcpCbe5u7R3QpUqqPSVuUdmbPaCnvwPZFayXzHZfwbCjzjmMFnx732tjbYSEWWr7TxWL6hviTJuY3iPBK",
  "key31": "kTfr4TJBx4Tn6P48qmWS8nrxdZ9dPGGGWwfzS5hqeSwgQmqhtRhsPbeNJAMqaasLyiCJ5NrnUT7h7yQK56rQA9o",
  "key32": "5GrjUQEPvdvqGssbBKihmbLkdyDdUaVkB7hT6jE8PZcKiRFHoCPEtMJcTbTSLchejEauzdFZQmTtVfxDqR23tzyh",
  "key33": "5okFvDWY845BjH2GTo297D5J4CkNzKQSyAnqUweBKfNfAV7uCkdMrfLXtBmsqjsKN1G57Aj484cazWqFJ1AcmzYv",
  "key34": "3gJhgBzruxKExsy6sFvy6TE699Sjw4z1hA68iZbLFnPsaZhn42gv6dwdyMX5FdB2YfVUzpEdz7SMZMU9JfxaBVHU",
  "key35": "3fsdRQDpGeAmExq79gVbnbE7JE6g8LV8AoGU6PjBEqNKVMk7gJggdkConerFgimRVNwZXQaJ8HwXoPetgwUqRM4",
  "key36": "wtfZppf1dXyYyoZM2kztaPzPLP3j2YcCqh1QxyKeygkW7vzto6TB68s8YfukjcknQEMdRLZMM7jvzCdrVSJmFV5",
  "key37": "4QJNWnHqfEbXp31kSbjRLbzspUU9fGYUb89PnsZm3m5hnpHy1ztcpZiCdv5AwpvDC8Vpy6WFuEtciFqod9PFubXC",
  "key38": "5iJQfdpbpbTh1ZvtdkWUSEDJ4aTb2EduNz6oT4odKmQVhg8YHNviTXczpgpVuC6uMgMKwT9EEnUdHaeAGAreNEVs",
  "key39": "6o5qCrwdfhoA5a34HeEskCSTc5BXWL8AckenLF8rqECsBXPoXcopQKD434jBnMiP3Ypmo7bsqRikBwxGocAsFxd",
  "key40": "58DPNHcvMkGitMBxtJcFqJB4XTfAiXSLv3XPSNoisgjJEPJMCqiVPAHUDtDgaJH1WtcprvafRpq9pazMQtHk5gUu",
  "key41": "5n9kPvQEUDPRQh1a6tYzZR9sVV6GiaQWdgr6Qmvs29XZzcgKWJvieNUET2HJfe1rLjZAn3SKgbYpwwCzf1iTSq7M",
  "key42": "2y4im2FBjZW9MjSg8Aas4Zcmvw4WDPmhbKj1x4AHjEEVAK4hvG8kfUUrNCgz8udVY79DGjq2XpKmLeEr49WPoi2H",
  "key43": "5uWoW32LrukCw3i4tayKePgoBXbJgjgDHbcCpuQnuXANfseVddEU2t2wygjCrAh8KzWw5rQahg8m4cNty2DjRa6U"
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
