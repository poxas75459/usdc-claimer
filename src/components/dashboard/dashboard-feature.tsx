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
    "5soShNjRaZzexWiyW3FRrxf51NmDZnVBeUuykUQStku5ivYR7gS78F46giz2EUwJgmWethSoBjSSCGJRzeuPqtyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoyP8iWX9Fcf175EHaMoJD7Si9sUdEKK3LHpJdxN8k6AVva5RvmfjgZ58H9NXQfHXGSZcujJbScwrP4npuxq7P7",
  "key1": "2e1bDnnHT3Njs3nnx61cWj4sKoi7dVBbG6qny5ABf98LZqLX8cbo4cCwjLBEBkcKmmShBWJtepBGnk8UKSX9NXrL",
  "key2": "54ZJc7L2Qd2h53AyqE7q8KcZ5QxvMG2sHGXVX5yAJTJjzDGXGH9wVbc6PjwbcUhtjumLE3JvVSZSq23JoCSrK7xf",
  "key3": "655uFW2CVUUrP9XbBBXuP2eYgkXzoWBRotNmyrPro4jWQQMnBLqD7Nj4rUwo5JRxfN7GdSVZeRRL9qSn4iVmNffa",
  "key4": "FGRCNbK1nLMqmYbaqPu9nnNDaMaM98eF7mXXED97RgfeitoMm7bJjpm7XP2SQc1e8XZgLvoMNNwb4daSDgP9Ux9",
  "key5": "2gGb4iqy3Gh1q6oMCsmVsg5f9NM2MvvcmEE8TiKyLp91GjWBvWwrx3VGbiwKUfBhhTg9sGcT7PSup5t6mwdZr7YZ",
  "key6": "3uY3VZMQTSakLvydWkJXLcBnw5Cz5ys2DiW81oufFL24XRAkeGx2CVj86UNmDxP9ZWXeZZQEHvGKZhYykp2u5REF",
  "key7": "2saRCC69h5LawENDiYxXHjo2y7oLcPapwLuppEHfzjr2prU1Fv2V4UNBgGWxKdqrp5psM9ZdQhPbYcYXjDJ6rzFA",
  "key8": "4qXqyKVaReYejT99w1hb4kcqevxFC4LnRe9ehv9EqVaLAmxuHzASYeg5AgayzzgdKj2ES9dwa61eZnW4Tyuj6Ubf",
  "key9": "fzEbmRNataMbCeQcUTMMku56JcNFXsRVGmHSjd2gwZiP1nGPF6Qpx4xyo7c672JABnXryZcPjJbgz1WbSXKmqsv",
  "key10": "DagemtkGWcwY8a5UdctupHHaN7KHUL7Jn9aHYBFx3XeR3nWSh7dc7R772pUDsHCpXNT1Ugp4rstJfaDYpZ7TY5n",
  "key11": "6U74s4B4Qy7HPSThPggFAzzYm7m1gsej2wJhfLZdtrK9heJhf48gWiiDm2TkZWtsvJf3mWJd1vUdCeFBMVfMMf2",
  "key12": "62674nbhrBiiutWpjKXgjKy6yaPV4p9NAfBoAMhgd7ZVSaLkg6tZYJSjwD7f4bJazNU38SD5qbC4zLL9NsJL1tL3",
  "key13": "4Yf23kxPTQhWbk5ak44QtgCMs5qQGrcBDWDPVgm8M4XBvJZ3HBxEsaoj12deccCKVHNoj31Q5QvteZxqqKTsW8S3",
  "key14": "4GhFY6YBtSosRQrNP8otdwFSSofbgGQG36kdpeiYEwMifeyh4hwhcnhXe9Tkh1dPkrpVheju3mC5ZxDaoWom3oLk",
  "key15": "2DKPNKiApozLJDtKzdSEFjZJghu9JDeoi3VRHHUv7noCWFCLaTjpv371LcH2kB8b86npMumWpECJf4mev8jXaCFc",
  "key16": "xYZFoGoKT3kthdPpbP1v3wHkx5sgSPNK89uE48jfPMwW7curE8i9Fq5SQC2gxSs5x6CeE3cPDVQ2uoXAkgcxhGi",
  "key17": "5v56xJsGHQqz9ktdShxW8Z4HPjVeq99QYAHRVpstLeMHYX2pSm8VTLiRnYn9G45mdrGLVtYF99z9jje6AjWknM2J",
  "key18": "26gkigMHmo5tMTVVg881HucdNkN6HEtaBsW19sNjMPVZD2kAmHjni2d72krGgFwVGtLfmDuVSk9xHRiPKvNW2T9U",
  "key19": "4jmMy834QVp9Q5od7p3YVNdNcRYJiDe3DNAZUPSFRiCmTkJxoHUYGg3mMcJcGV5mBWWwFnszd54EtU4ooNoNpkD7",
  "key20": "25XcRM5TZEs1yDqDEBPWKyQuEawpGBHmM3LjjhU7CHY7vgUV3PwJ9sK3bHb8SiUTeXe6nXJ8s4d9Tgt1QfDxLUqD",
  "key21": "gZjbQBNcKEGkKdjEiMRKbndG8NSBpkLNy5m6PyFyDerk5ztDSk5pYMUDjeFfrG4h3NCKiQkCLtQhCr1mh6J6gS6",
  "key22": "aKypLxy6NXXFvBxnaKTyB5Q5XQhGD8riAqxKsmS71dvyu51u1rYBqxAZxhLs4XbPxXPZJmCZ7rEvJtn1ofTE8vb",
  "key23": "yvTJMfH1KqPjt9Dear5ZbwtVHiNgeqe1phEPqiExo8bR9BpxUTqdJK3NuVF2f9pLTn5mjNacwzFePyRQqguPMRK",
  "key24": "4KUJ5UBZYXwk69FX5ByiKS1396uqMTU7c7ZdYetVEZttF2TryvZ8DiVHepDvphtKZtUZ2Fe29xGvpAhAySANGXsx",
  "key25": "4j1e6v2TGqtvVgULfQQpvZRQqjoZQBSXaX4oH9ddapqbCGr4xyyZzkA4fE3B7zPLb7JWrHmYDXwJGmAQrUa4ymYT",
  "key26": "3PUAzsk6ZqEnyg7ZhHTAMr6o5BesUWYcLvzNd8SwynmAC1TuwGVXMqeTT53YrLi51MCtUVDFhcK2h9m5e8MJJtLB",
  "key27": "2iUpxupM1YXuutzZMvPjHn4V5fCnJSbjWcvicPBJYSRdPUfYV4Wcrt6VXurLGmZep9ZqjwS7pgipyBhuqyaBAt3A",
  "key28": "2FDLsS8RB3H1wDdZ5kwdW1GU1RTFzEMFu8kz1d8jYEynC6c3oCxFh1ZP56jKcjFE9TJ6KHLLVDCrEQPGjmAe12a",
  "key29": "3Nb53YRo7UkrxwCA22F1PWkavHFDnYDhd6zkKaVHwwhNhAqbw9D1X1D6MYVAqE7YbpDMu3xojFfEk5eoCjJiKv5S",
  "key30": "5jwCM7z7gzm6nYesNHGKrKjV8EV64ZBC3AZKTN2xq2zxN35mV9q6mLp6adVX38acGEEAZNpqGZ9dhHUJY8Qkcx9r",
  "key31": "35NbabUhB5DLpMTQPZ2JDXcHyNNDy65JCdUoZFqzkiXVj6qBGEH4eBzZy2ge5y1fpEu7k8VUGUHWGRkLtf9rHrkn",
  "key32": "3ckUqjQCVhfiJvJtZyJoj1nY1cgDP8ZjLoLChRrT383J19e4voNPwCjHCtWdm9cnjjKvC72Xa7nvtJw8pPsVsQnG",
  "key33": "5emqNDe78PCvS9uDNqNVXRa7VhRQQQYp5LBvN1XyPdYkMNudbh1z64modjgVuMhqM3PpKCRZvok8k8eJDf3f1Yzx",
  "key34": "PRBwNahTcXtd9jKutS4eDgHv6thxQVT9FtW18NdpmgfEiHgA4oCg5bEPpwGvFKhgu8SqgxqCmmBmNqTixDv1sYf",
  "key35": "5APgMnX2mBam52UbGh9jBa2159SYnCJUkqcRbrwqVWKEYdohjiQQPdwtv2D31GK86GmBknBkiXJw8XGxA82z48ME",
  "key36": "S5ZJBxFA8ThJ7F6sL9f9eMfZiJQoAsLeqTUBwtRFXkwPU13YrGnbVPGZKTtkZTKoh2rc8aPwrmEur4KWrRG8Fyu",
  "key37": "66dZYb9ZnxKbsosoKvHw4xRUX1aA266Hgn4mktkawxovM5xN8eaKi2RNygGjWzgXLFRreVVTWUwhmMoAXmRbKxRY",
  "key38": "57a8JRzEnTmneUNMxPj4zwAPK56grvtxVfE2xtKgJrzDYt8nKxFuRehqtWw2U9UGFAsfrtrqy6vvFZhTvJsLLUgo",
  "key39": "3jLjrBbq7j7dnhZiTgWPkvcLw3VnhVRixADNAT76zj1JKTCLgQZTcK7bCd7jBjuDBGa81ebMrDGHY77TPhwg61vN",
  "key40": "5p926Fh9T1VpMuuWcVuqxUAtqLPdURx8JAyVxz8uoPJjX2cTCX4zUs2zEsnUetF7w1dqsQSDefKYy82CdewV4UgT",
  "key41": "3kMYzWYm16xUKjs7di2PnPyGZL5UeoZQwmUotEscoEtTnsaqcosDQLJeCZW1YtanCGS6T8NdHvhmDLP78gDXhkUa",
  "key42": "2zCf9TqZmsGd3gKhThdLq6EpauW9LqJkBeWWG1kH4gVUm7UhdeySWiJqr7b3An6XF1XQuFXaZLFupF7WUazkhk1d",
  "key43": "3kaH3QxB7ySEPuowVdXqroZNXfPmuxiPrUwxeKpH4tREZmKo9dR4pKeaD1S6quTxKJ1kEe47sqUwG1DTXXkSMfY4",
  "key44": "2SNBjsRXC5mfg9mDbMSxk77ABuohwx3MTugvuX3B5ccWfyZCohy9EAxksHjjNnMn8HRHNgxadA7hu46yUnUQGoS7",
  "key45": "63JKDxcxsQZxBwXc23U9fMEUkTUfvU7yyKqpSyPxLTUy7U2pwF4grgszvhsRq1e9QnG8FMZ8WiNtSVfiHha1hkWW",
  "key46": "5CKxenXf7HtaiXqMhacYbtH9iSMeChicPZCWCLnyuFhrqi9VGt1Jsm68taDXaw7a3xKXFpueuxQEG21t5cNRWtUn",
  "key47": "53M9akxFdeNeiD6Abpbiki7jKAvt6GEcgaXL6sty8K2hNkbRzvLdKsySDAsonnfmyUjydz2LheBMgYFq2SAJvBm2",
  "key48": "4TF1tkCnH83wuubFdcYT9SXPCrKG7ujpS1VJGfWrDkXk5XSg5FpbuoPpgbqWaHQUorkKD4jcUFtp5MkVc9J4wSeH",
  "key49": "dP9VtQL85J24NLuNNzvtihJAWDxCXgapfX4UBfZJutFGb6J88wLEQypVD1vnWom8PPidvpKTAh5SLaJaD4YQXEJ"
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
