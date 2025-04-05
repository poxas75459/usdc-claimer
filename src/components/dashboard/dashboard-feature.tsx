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
    "4fbjg1uao7MtbsoQCDCNyzfnHJAuQedrZTZsSJuUZ5iJhqTCCj9yV41Dje91sjcVMcLq4yesAbWD2w8gzyJVD1r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgDbdLJ363dJXz2XeDtHPgur7Uu2gfXTmk1MU3HnL2WoccM28pdEZztkEKWGaWEa2m4p7xSUAXfJGGpPCdNCbde",
  "key1": "4QDzsatbF9XmmwtFRTcDtwS9MVpsRfpJSYPU9dnZZ5yCiGM2MY2S8gfUvNTTGJdEgnhEgFmDb8qmFMCLYNVGWMM3",
  "key2": "2vWoCj1NrxKmiUvw4eq7KQZP2eHtLMAETe5a73cCr1atzd2z3mmEP5E1Fqv2up6Jn7MYogqwi44BKaRPvcv2smy7",
  "key3": "38bgXJNaiHyn2jVcdvr3pMTcdT9LShMsjMstRiwpS7qQwFyFGt4MQ42aLCR2nPr69L2DkKw6XSLvH1h58gJ5q3Ab",
  "key4": "3x9vw9vFrRYRTZcUbDQXKscwSPfyrttQLg874m5un6bsvzYCPVzWPKMvzmWce52wvvRR7eMwBaFMQSj7jQK9SbBo",
  "key5": "2yvzsRqB6u2f4dynNHTNwmxadCGSQsPjHRgzkundNg3iVfP9xMbhUjC9j7UnaAqyhATeff3xQ7nvRdYci9ogfRE1",
  "key6": "35gkCzD6fkqM3Eya4eTqcNxUZbiEj46R3qCTJBww79ftwVHzTAzU2AvLY54NyXnCaWXxGgWcq3hZFW5LxZGHyV2R",
  "key7": "4FTheX5Dh5MJPp9XhZS1Fey52PioxWbj71REPhUo5t5xq6HXZWrjqXjcyJ7yRWEGkmxikxs4MD4U7WdRnZDa8n2j",
  "key8": "43rmL9PfkBmnad1GRvDXn2tewx4kYhMkwP57mbrvyAx7DVpe4cp1cvkKdHVwwAxqtffAwL2qxfpvHVjGZMCC4U1T",
  "key9": "3WuyfKxpo2CXgxFrj1FcTFyP4PGxQrBt9hSeXWkpN8rrKaXj16sf7GhnZijVXaaLDN9jBGwEMZmLgCsdtmQjsebR",
  "key10": "2PUTXc2PvzN3mbDXpWc4wLz9zUVj81bHXcNZNCdm8d6hkSQquWn6tB1anmnSXWgoRe3Za9y3pKc11EnT91nT1gGN",
  "key11": "2bpbismBnPqbU1jP3u7URWXBqqYx2nDzBzmXTyfCigLqpXCXoY82xjjvZEkvv9ctFzE1SJpZoykcagNkm72n9c5S",
  "key12": "jwBUnGDEhkLmpB9Yj9BcuYbVsfs3gvtdAsR7oNRszHmPrMB64CELad87T8PfNkBkzUxsGStQuuoYkszcqhXmhs9",
  "key13": "5JMpoRQR8L14yFbAVPVmFrgmNPPGAr4XvtCBZMc78rB6Rr3pGFaZ24c8iX8G1t6p5ovgGuNAmfsqLtpwjHjnNyfz",
  "key14": "4tSte9us6giiaZbE28Cxq2mNqZwFp2eyFg56mFuvSWd1aKNLcykE2NNsCJm55urGc1AsjHF9tALcdsbrdXXS2xAa",
  "key15": "SZDAVYKb7d7TUt86fLMSbv6XZX3pPXyQ6SbTSpjWBBoQt2DKZCWyoWJ1G3CHZ4eMoRxWFxGhJwQVBmaSrQtocpp",
  "key16": "3sEkEy7hvTDhGNBzcdkyXQ4DMwJF9hRLHYJKn8SGBwt5nwc9zNPVVgVUDb4tce2DKhFebVrdEQY9ar1B4dVVqdEv",
  "key17": "3eFD1h6bu7SApPUZK1d7jguvhEG9ifuBcgW6UZNRt8PP44a8GTYEc3LBKndTGEyjDtcVY6P9shDZNeLQTpGEVk7f",
  "key18": "5d2S7MBPhidCRqWHBeZf9D4FvVecknZNMS3ueLJCQ5kujjthTTt7Z1fW3HxW3Fzj3A8eKUbKkrPY7a6Js3kSKpNW",
  "key19": "PBZBDXaXC5ecXjiVNmmAzJekT5mEJsZw5c67NqijJq4F3cf9FeNvS7eiMZQSyi2nGjQMRJ9EtZLHYpaf5pamgUe",
  "key20": "3SkHrkCL9BWKrmQvGWHQySTYZUHpVrMNiMUvA1CenQJGwg2QQLAcATmLzjxZvmB9tWfhGK2GA5yZd6FAXfnDi4kX",
  "key21": "61FXohATRSq4wJnoDTjrVLBeCgiWNFay1uvRcP6HxeVVJCErbdxuiPA9e1QBY2eAWp1dgiSovn8oByLhKMh7GqDs",
  "key22": "5Wwhhb7iSkzfR71RFxEaX6aPZDDDKTp8v7BhH69cNFTNAs1SugjCHq88uwvHjs5wwMFNToiBQJ5aATftC4jRLx44",
  "key23": "5fq4jVhw6gH8GZBNTNAsbwypqZUb5DWJPXoGuZZEhQaWCycTkBbRFZUvFqCPc72dLxq1WKmhdxMui9SdjzdHY7aR",
  "key24": "5gHA1gZCpVQhZ7TJSGxw2uKJKVtWtQuUh2eWBRTfs7ZNN8KX7cUmPt5xfVtFuvFHDtkKvXst8zXgk8g8yhFckW4G",
  "key25": "2kdJ4WqqJetZNUCetY76BrGd4fSYrPEQhSXdMNRm736sYDagMeiouaJGUNTRiPZcUSnG6xA3xFhR5PT1atfHJyMg",
  "key26": "3on9qhpRGFqwvbZ73XWnDDbNwZFmZiLje1ddbDe5uVX23AHkG2urG9BnC8fkhnuZLAbcdYX2sgksGhnRUZUCsdSD",
  "key27": "4g32DEbSmscqtgJmojcBWV3RQ89YueccFs1iFuA8iZhRS5FuVF6AxBafw7cJ1PU89LD3fjccyLtrv22NSpzyHiim",
  "key28": "ufz5LwBwMKujASNPd3RhSdXjbYH5kYvVv9fjsmWZzSVH495wpGYbscAbnR5LiQuMxv8RsTrDAkHxTUpp1MWkj4v",
  "key29": "3munZa8iaPYsP7TmrKUQz8UeBZcaPxVq4ZUGs4KnPKmBUhTKzKeTrLC2rHDDAQb7N7eiSses4kiERYh37bJYmLUk",
  "key30": "fnkasQwP3WSwYodduPrfyJRNmunTUM65n7hcEh9NdBVaSXCNDEJubbUEoxDAQppEYm262twxXiCVrHwu443S7AR",
  "key31": "WHicTdj24KskBLH2e1QHX9r51bRy1Gk1chQiLVsAQo643NqrGF1oaqqccfgpkMkXQ7JvWQPabgh7A8hfZjNVDWk",
  "key32": "SSbvoo88GchALi7tiPVHuAQVY6k6TaKJJXH1FYAatjn6XBjhzYDiza5RRjfam5UeWeLnVg4Lr8YUxSz3yK7m2ut",
  "key33": "w7yQYWkGK12i93GyCr9qkRYwmBksw4zGcPLsZzke1zvajaMR8dUEguUvhffbZzfj5J9kcBfHFqqZY9st8ZenELL",
  "key34": "DpEdY9siMq7cQHMTRYsTFXYxn4hogf7q5E4KfrLJXtZ3sjCZhuhdyW88cUPkfJPoe25GCzwr1GqZrrdXDwnbjg5",
  "key35": "4Yq8B8PkT82CZNpb64eYRqf5VbJFZQeSLDb2juSAG6G2Suq8UmH3Jn3wMrNtrUSwGph6bKi4JtZM8qqWcSSsF3M2",
  "key36": "5NkFWR628NXWWPKadjEdT7cWuT7joUU75ws3wUwo7D2n6pSdokPyhEbX6FVSeFQeidNseeeJXacYH4i63MmmrS89",
  "key37": "3yPQ2JSnmxwm48DFuRPMhLKScMuYERgtYwaH8ApABC5g7sWDoqDY7uZg3pGqJJXUwwhHSZqNEeRPofg9YgthBc5w",
  "key38": "3s4ocA9Wj913EpkznoBUitreJQKV1mygqfzT6S2qycMvNpBqgDKoYyfK41nyR4uHMgbtTEj9MBHptiRhgKcE5B1n",
  "key39": "JNU953JtogZUMrA73C9XRwLnRdmjWfhGFCFABYyo2MnF57ynNLVYjQZBpTmn8FmGdy5hPfHUQSUuJnpDbjNqui6",
  "key40": "5ArojswBwj5LXeB9w5gr6a9vQxKukkwQmPyMukTw7YfRb2McZxaJFr3UzK8BFUD24kh48wWzoAbxWQFzfAWVgDK9",
  "key41": "63EAuESfMY8QdX7syNwZDcPvN9YKH8SDE33aQrymiWLsm76swZyFarKECwsgABSkzmcv2Vta5Ebdz5WguPzo4W4n",
  "key42": "3ciTgC8WCZpUpcEMWwxjFSvegsk3aAgcbAbZqd2tb7Ep8XbnQ7kjtavKnh6WesrFCWwLLy6rgktfmr3VXUJuUhWH",
  "key43": "5QZh7pc1TyjfnA9oduCMa1Pi7JhtNtWFVkV58s7XNtdzxFMh51utHP3JN5jPVxWZBYaWcPSvMf117vUoSRSwgzvr",
  "key44": "4K4xUUgBFt9ac7zs9yuBrJEGWZaVT6CKNiFKv5B7psgPyeR7jrc8cEEVGHchT9Mr9Wq4fjah31JN5kufL36CsZ5x",
  "key45": "5XDzoEZXRQWUZeW47UMzVk6rtCsWGNf7AvdJ3RcZG54xFzCeeirsiVi1T3CHTRDhRAQknEcBKGyr8h9CfBjgxZFJ",
  "key46": "3jD7gD3ztqHgVa55MUdtZuypFDt4FbSUkikLaj1cvzHZ3CKJFAFQirW61j85XYYtApqYUncvbNP8cwNnXwWqkAPE",
  "key47": "2oHwcb73mN1wNdhrmHBpouCJSBdAg4LsRfoEobLz2GsXxPQviQsZTkosZRsgz7dQ9GsMkg8gykfAZjuzYrfis6zC",
  "key48": "52tjHX3HWpQB8D2zobRrmTpNBHHmWKfARUTt9JRtA87usX3nsx2oCcaDrDkNsNwk9xCqfW48Amo3T7ubfz7hgWnY",
  "key49": "3cKpCaMvByVwzY8oZRbYrvLDg1tS8z3vkYdza2yEckUXcZ4jLHp9VVWZgGMd5q4Jsj1F7EXrocBFXhiEQvet8gxv"
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
