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
    "5mwU3huUvt16NBBPbtZGaNrfnusZ2Lzg4UA4zkA56357moVk9mtSUco3rfT6xXJhWc3X2PcXahLoTBk2jrk43UU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Q331e3eu9sYoWnaxBWHpjxFZztUzoevQTE8S5uXKSg8miW3r4dFtMGUEXWU8C3P9E9heuXpdzyXpkytDSyyuXH",
  "key1": "4C4LFFagMwogxWD4VTfu7HaMpGm2pipzjjTriSdCHvYNkYTU2DANQZsniFnRXmkiuunAxBmBSxEjZNqzUytGj23z",
  "key2": "5WEGHQBiNSynnJ4JuNBVZyCDWoYAw8iGzzt7xeJc6jHMiAwYVSgbrJgg5GxqMifzsffKyAZwK4CReNvUf76SpBAA",
  "key3": "55DSf7u1aMpJiWXtSKFVtxUrkyuvUGCduKUbSsY7QaN1SR9jPqNFqaTGSE5Y94bA6kJZiGcjTJjq688aHt4sRKej",
  "key4": "3VyY1BecLizH5kVfMzXUz2XUzrTM7gRtkpDHC71pXFHvDQU1Xf4rRFHD4dv9m8D6LP5ZGvxK5EGJYvVNJb3ULA9d",
  "key5": "3EyAqPwS6dN184LNNrHsN7Mp9CdKqAXNDvnuCw5uwuCBkNcVPVQaUWiMWFmriXVvKBDbrVjibTX2Ae5irrDaibqQ",
  "key6": "tGhX1wVk6shQPCr6NXsdJqKXA8jix7oTaQYmingPP5nPrGicsKChYZphMHy9ukSK9xih5rECDqgouZEKtnFFNdm",
  "key7": "4s77obuLM8ogavscp3d3ZG2muPDzfVxMyXi9JC3dFFjeUo8E64L5kqRCAaRNLuJgnRh8y3749oQpi23cVAfypaC3",
  "key8": "GChjMfMhWPWMMRy9smSnqbUNiYe18WCjY6WLv46cvBy9buS8kNdNpyzzPPi26xeXNp4h4Mpbk52zeABiVanscjf",
  "key9": "2p745G39jKqVaMTXYZJWrZVs1nje8Y99absjSiVGDfqPYyHCr6163P8f1X3ag9wgLtJcnHrjKJNzPFNSUhQbgKhm",
  "key10": "24XVmwd3bg6nZjFJwPCQTkZqbAqw7671bGx57haDGAwnSre2tA4tushqDMviYpdf1d3A73wUpfNFGYHooshFGHFZ",
  "key11": "5TpPQrLjLTPY3GyNYL7owcTMqftDDD17MdpvvaAzDLhh87CMQdgkLPka8S1upGKegNsjNS8ygx2KZercSFvGpesR",
  "key12": "29JD28ppYPczWiFY8Q47QrrVKRBZeHBvZ99am2eVJMt8s5DVF6JFjnBCnqv9FjpSnL4GKpEjWySPRdwDz1DytW5F",
  "key13": "4YkoD1C1GFK4JMppYuDtGRmxoS8MgUxj9RkoArxU1kQotTHiog64tRw5YCU8n8xSEjUuASFEpwmFhFw2HtCcosgX",
  "key14": "2R5DRr952WCm8CW19iRv5G33HYRCNHnATjR4NLENEafF5gQoCmo8JWTyqUsYdcJu3A5sURNP7ybJ6rxarmp3a5Lj",
  "key15": "zU2EvGQHx2zSPvx9ai1UaHZtFyuiuRs3vQNoTq2t5XY9xiEpubd7JV1BuC2YQK2iB4JTb3q87C2chyfhgashc3z",
  "key16": "2jpGYDun1AdsVeKMKEJpWzBkGTnJV7mggZAEwfTUAqHNxEqCuC2YHigNmaFWHwoMLAqxGd2fGpn9eJFkCWJkxkc7",
  "key17": "2sLDXozcwPo4ZWzWqVuvAKneATRaDsy7YZ9NLwf8whwMWAvcCv7bi2cVq9Fu65nftzpH2AQd7yGpty1v645VQySz",
  "key18": "2iz34SpzmNbssjb8z2jSNJ8cMcKkqXRJTj1WNyHXjvzeg1DqfohLAvhoT2UsAzqZHSfc6XCjGtrj1jMowWNzAcvr",
  "key19": "5iz7BsCD4UmpZkuwqinC8aSJUxKz42wMV6DfsyzVrMuBzzhuPcmkuCXoRZMZCGpuS3t2b9GkJJX2R8VwGGEcjD5Q",
  "key20": "24nfufqfYgjZgBer8Lp5XQkciQY2D9G5ngc7Fi2akzSFFXWb5StvyceS4Ah98u3kjidDbYpTow4LDB2y89hrjBQ6",
  "key21": "3sd3BBteoE5JCdUxShLAJADRT3dZPoCqPjjfhbFgPcQXram13XTWRD8H7ZdFRD5VmCjotTMiSAQftAonxVy972Fu",
  "key22": "4KsdwYi1WLezAwT4diWYvoiZXP86J3wKAy5D1Fgazo9D63vQNdTqTmb2dK9T55fyq83hFT4MTMDUii2GYYL2LCdU",
  "key23": "3hov2whTb4oViGYtueauFJSrcYzWHumMq6KjjzmzjCeFVBtqj7czN3t1ZcUqLNkUqMV6HDHe4NxGFMdsitqeV8U3",
  "key24": "5Jb1GPew7PnhG4u7qgaGDMddv1NLNxc9WsEE69rzb69WRjLoH453zodADT8xpWZRdwPGTmWPTYEMTjgWjmdo8vR4",
  "key25": "vY1XkofNWPTAtwvjoPsj2AJPv1Wv9YozBAWuf5jEqgznGChejsoKV4T2uy6M5hLS5Hfw6XAT12g4A8qR7gK8mD9",
  "key26": "2diBTBjsCEccgdCzSddanBMa5RoYfRyFAX6JGkm1c5eSz3sGSnHSRDJRKK1BHdenQs3GVxbARh5mJXk1BBzVZEDY",
  "key27": "psMfbkYRayD3orqeuqrb6k1FmN4uZ2nnqdr1SRfYS6Pp2aa1A6rxb6QmUJeh8wUBqL9JTBi8JR8XtmE6AuB8sUt",
  "key28": "P1sByhHferXC6vEiADtWZo6SVTiQjqSzYBF84RzCKoT4TyEhrQjVKmANEcPAtPb3yXzu92XAnQYsUcoDhJwK8un",
  "key29": "3h2yXpcfDZVMTjD2ysAmDbhMKi68PGeeFJprXukcWBkY8jGV2sc7DbQ65ptqFhXzDkC8XVc4TBHmiZBf9WwS3muR",
  "key30": "5zG12Cq9hTmqcbYfZwtNqhzbDkYKrLjkJPwuAS39tg6MErsRmguxjFL4zQaCRV3iNesDQbGSNtayGcVxMiih8hUY",
  "key31": "2bdg9p5JunazFUWZseeo3SDrMv7JW32EP2z98yMjQbMzy14RZgzgvVHHnZh8V2Nr3FusZ6smVaensvA9wZZQHJW7",
  "key32": "L4TzMfhEwbJAfCxQxxfYnosTEda46mDx41E85XMGaKzEeuoXsFJQ7B4rQBJ8acJTyTD3cctGNhKq174xGWJQASZ",
  "key33": "6uM3qqtUSbpzTmpCuv6wXiXqZmMc16v34YYgSQREyJrMEjeATBqcSzB4qKhFQcGW4BBYwMZ9nx2sjZSAKwSTLcf",
  "key34": "4AjAh7LaVkjucfByqdMXJeK1V4bopJxyxkwqNZVrJQbcQWdMoEoSMHw9pUNrxzRLSmEwdeq4nMQR1gmhFTxsKVEg",
  "key35": "2rifRTqmEQAgsv8EZwFV7hyjsBiNa2YNzJgZTyc4Su5vhXTPCE1Sh9kLgxRDQgsi4PzRGKYCxghM2SFUAmnCy3oZ",
  "key36": "2bL8aX7dQy2JUUvYTQrsrJgs7e57mpR1dZH6BUHuZAzbHmeKVkJ9Gqfdx4qWmRok1gdqxN6oMUmKpNf9PYiWvAC4",
  "key37": "3qPzboEsiSRjVDDEoD43YiqkQyUaix4jevpvc4Zc7pZAcDjc7q2x9Us42eG3A53MSfSknxEwBdXi3ftcQi7QeQXQ",
  "key38": "4MwY2EMLrcckB2WHtADH4W6bcRodYRpt7Mp9nQAF4V3zLRNGtK1m48nCiMsssWBaiW78R5C9YvYtT7htAuQHSQGV",
  "key39": "2ahD2ehU3uwjJj81bxre6TDWvCLt8VGoexktbMni3KnG9FDECT3raBa89wF3wQLe45WqHy4H7CF3of34aY9VMeJK",
  "key40": "5W8N2xqK93k11ZAaXRP11HLppJGyXFzujg9Q5tpjvqixukMAnr6x7gB8fLooStz14WRZjfwdiaVtje4VtxfWL4HC",
  "key41": "4QcfyYWEmKddNuyH4mEFC8Pu96trEvKVvk1gCzAGpTqEUJh8cxfLaUY9ieqgoThAUSkxs3Vc9EHXSNy1rvNf9Lmd",
  "key42": "29TwqMXZVJUWpzu2W4ZaicNHYUawmSph9pqkaDmFdWSRfGXSb9pVdQ4EBUrUWU2GPy3f49tJLqSAz9EgTUMXssNx",
  "key43": "DSV6w49MDWWXXwXGrFyAJFcoex9QUFcT1SVAZ8E2u5TQPZQ7qoG2Q97CYAp7sTic3Js9NkdNzxN6JFdJd5cQBMS",
  "key44": "3tneNd3gkxySYaWQkjymzjcm5KSn98k6cFpvwuwDyU5ft8LtNJ76mRj2wz4dQbe2HH6avWC5dQrL9zSnjQhVqWPj",
  "key45": "5CLYGaFqqPMrE75vPhQPXKiWhvPFkHeMi5BXqWyr5ErAXSKmshDdzY63PMr1VHaYskgkVemVWPB4vrKM6A3sw3xo",
  "key46": "5KxycS8dLShewkRsYqs85KvDXgZ2XzmHeD9Z35NBp5onnY6KBbG3nLjUiDkS3FtPUPf3WrPuGTUBST6Jz1ydQaYB",
  "key47": "4op3D58my4BwUDTAYyi3mBbs6VmVEoJz6PqTbyq2gfn9nP4meuK8XcgaF4DxWq4eQ4sThQZ2JX3qcuGTnfERxTVz"
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
