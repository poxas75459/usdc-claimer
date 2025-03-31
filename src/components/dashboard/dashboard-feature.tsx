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
    "4t6weZhxEhvs9oB8Q8VD4cvoFxK83X4H9PvpnHAQuhtqE5Hn89dSbydmFWpyctjDSpxxGMLVbKqHrVo8Y4LC94Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TfUq2htvujwrtwvGvnr1W5TsBNbubhDdqkhyWZ9M6Pyjbg84AyUdw3HpNE64MjrWeUHHnDhX54e5ChNEukKZUS9",
  "key1": "5yecRTzzxfEWYE4GEYvBsWEN7R4Sb8UXCGPSxqETKB6zzmYm5stSHo7U5KoKyqjD3LHbS1z28jonk9tzNZetWtEB",
  "key2": "5tCcqDR4nwUk19SzJGyWxq1PFmzN83piwpVThcHJyQ8ZVJ6PEyAP91x9sAUMTszPgjSy9kC4gujVPnjiguYPFVw1",
  "key3": "3AARcGsLbTNLqJ7SGzEgTvXgiQQwYexzKBaWoi7uSCbRYAVvvWuomdc9YaPxHhayZsEYqwMAhfHzyCGvmLDC72uz",
  "key4": "5H2GRkpCBc5MT9E7m3uPd9XZAzYMn9m8yGvZhMCWNa1EbivS5WWUPSk1cwqdCpMhf3qprtPuKKhtDtdPvev7F55n",
  "key5": "3jeVeEKyk8VNsk4YgsuRUvALvqMFQkDvNgYhpNR1X45ZGzu17AEBdCb6aPrNc5LHVg54Scno6jMF2514P4F4ZTYW",
  "key6": "4HxDPLTbdWcLw9DbNqySfJ4q9J59md1KCnYZKgKGUT1DmRz5K2Qg8vRD45XX2QvAqGGe4hpGGtkuyRQRWaLbAxkb",
  "key7": "Vwb6wpo5GZduHgQ3Rkmhff7YVUjzp4sdqBFdvvARY6kr8wNhTWJFhvqNUHPfvkj1jXesqiB9DANvhE61uaVJCN1",
  "key8": "5c56SEJjKMJJ3a7dtCApgJHFHdEvhWLLAkw9CMBjBntiCHdVsYhhw8ijRv3uSjUr22QzNxNDzsbQMPk9GEhLMfcB",
  "key9": "2XHQNgQTgQA468GioTQLXQ4WZsLVdYwVxUv6R6SsZ2vikQEJ6uKuEMnuYaeJcEezDpA9LAX3rdsTxi4MdvoLAvpW",
  "key10": "4ZXeUBh8WZtMzDoSuvokoFEKXVg6EM3dnWSReMhRexqvBYUtRJS9CbNADdJRt3QSWrG4tFReTWvFxeG9tSte1w2k",
  "key11": "2hqLFYU4beUuzYRkoi2R5vFjjDZCoBsKdUTMU913hyVRSewefzEhebnFmbwaFou2CkqudqEdQvzSsZkDNmqDTprB",
  "key12": "63RoyDtLFV5xxcVwCFepAnXTZTVpQ68ipqcybyFGVF9vojbU1pJQBRkrjpxaUB6B1ETiY7QpuMSLXmZR69wPPZRV",
  "key13": "5EbKvitzcZHxKEnGrUXj3d4yNDgi1wyyYUqKQG8xi2rFhbFi4V7uDphHNx7jo4NkfyZb2SqqqUL4qPvLtw5WWE3j",
  "key14": "2QHtCHP4DXZztsfrr9TdM5L3KSQXV3DXY1XYBRHSDpFMCq4VnFYEqUVSv8GxMhfQCYGXv3W15pPSWoTgcqNfeyN8",
  "key15": "2A5x81ZLBjQpv3NQpvNGVr2V2BZdgdN4HYEWrfg7xWKSZUh1b1bMBuiy5pTREjPNQg1BsUj1eTBX2fQLg2XFonL5",
  "key16": "2LP3ZdrEBfGyqPvQ2dMqyCJxfCzS1csTnQ5xzsERPcrdrag9iYMt4N5BJeCekoYHEZ8dr5nfnkFC49tW4Kotixy6",
  "key17": "2vy8RagLW3qSoZLGsEbfwG3S74heXoV43dbYtzjjX2GjdCWWkcncaBdBnD58p4DhWSLYh3vwTQQXfv39pk8nWdTq",
  "key18": "5UjnsDmx3Ht6YxBYb8ks9jNS7hb8YXGb7uxRcZZ7cvxUH5aPisCtcHP9c4UzdzgN2brA3Xp4zv2RsSihXgnZUfgY",
  "key19": "3RCxVH7x9w6R1vcGVRWQQwQ7kGeEAP7J2AxzFUT4pnSVEZpNyUwhRxJf28omf5KzbDmF25PGbek23omYRM19fdwZ",
  "key20": "2BJQCTxno4DyWfdy6ZCJW3nsJ8CDbcwwUJxXQFeJEbaEiFzJBPa5ke2d66vGLQKBSHZ3bfX6yXDBXSmZmSHT9DeY",
  "key21": "wekUR74vsHFpasRicQDQRzMQCTdRSjfUwqsD9XpxCigRhjgX8ypfp9pZyDLBUQgHRC8oNojsXh21KfsvSbVJsXm",
  "key22": "4XsvcR77kwPBfgbogsrxF4j2M3DtuifToRGRt55gWdwwhgethbUjppBsUyP7UJ3yrD5cHKR3dXoXSD3j2xJTV8zv",
  "key23": "2ssXG7mCJxryaGz2smWXb3axMZ5MzHbT5eWnFxmvofdRs3JY1TFaU5ZH44yrVPL2NZDpAgyT3dvyPQe2au4p4XFL",
  "key24": "dDhbc2wmr5kWqHH8fyxtcMucWPdEJF3nqm3gkctMpbAX5kHjwAC5eeyp5czL395ZtM3GVuZQ3qELFH3PjJPUfVB",
  "key25": "331cdP6Vx5FE5cXL2Mr9H5q1aVAFG2qcC9RJdEhFozk172orK2y6sTspdPufxtBcU5kcwpJ4qbbz1GpcDQTacTLB",
  "key26": "5phqp7mtjqY7PZXv9UFwSR7zxRLDRMeuhRhhtFw5WerMshNRubxPj2fWuP4vZFzTpBxjAkykV9BAS4P2aTzpZTro",
  "key27": "122fKnxHbM584QSSYZLQuSapdiQ8Hj7mCnTgENQfF5AXLbnAY3cfdxFEvgo9QivDyBjCTXfHPboiefzoidQZN13v",
  "key28": "2PvN5UfJLzyqVH8XZ8F5aYccHDZzLJuUvSztnZ65SbLnYAG4unfw3HJzbRLaQjVEHx8jDWhDRYWnyxTZq6MEc2pV",
  "key29": "3cPbjVgHr74LHCJshRv9DMjwfsM5MQe5uUR23wJ1X8DxnniXWPGikNaACR5eWauG5XybUthZXK2nxvrqRb9TzFCC",
  "key30": "2cMXFm9JEfJZCQF6pfFPCp3BD8Md34BHUznNGEKDYL4oEr7cX2GS3A4JyDknUX8uenPQprYndEcWEN66Hb5NeUiR",
  "key31": "j9ucVX9nshc71CyN6VjuJC15A3yq6LeHQJuEAup1GACfE7LCqU37q5bE29MaVtBBkKhHBiajhohXaA2C7uVwp8L",
  "key32": "2qx35Z3YvCCAESCT5HC9Ku5yCjApAjZNudx1ZLtdL2LJFzghuZbBLF86ZutdL2Z8DywciCZg8PA1xqnMoUXPGp2m",
  "key33": "3M1YGGHpis1T7eSRQBxVw4MNunRDQqev2fwvTo2Y17uok8nzjzvHrghBDyBcAAaWUMXvFHQDgDwxz6E2eAbCuCdL",
  "key34": "CoJDieyoKaNJhyv3pGDTrbHzisz8tgjhgyiwW9fu8R3bQ9uS8naPPxYXu47bLvqwbajNwAQPTowoPDaNsAhWedz",
  "key35": "539mSc2gJDp86G9NKK2iZ2gnWWiKccnTVoCBPQ9aTbkBL1GT1UjrmmbmPUtP5Weu4JEDTrgZxwR7hSGm3dMQFm8P",
  "key36": "5Pi8Tu7b8orUKdDJw1YRss8XMTA2MZ1tJ9EdLSbZu92KHw7qMroKULVurENNrcqsPLHrcM9AUgQ38ooQQeyuvKHX",
  "key37": "2GLLtUN5861bRk8oaNHXsGAaxsnhrRDFrHZb7NnvgSfQ7gFMTJeRTJ6xcYQdk2a3uxV5cMu7NUNoCErWtb3oGh7e",
  "key38": "53VxZbhgu2hHuqjc91XS39BcYBucqoyADTSEvyb3uArkQHU8dvUGdkhNdyHa7m9B8uxj6g4k56vDzLxQtzzj8rcX",
  "key39": "3zePzxhfWi3WLecmb3vgwHacWcDNhdKpQA1UkcBj7bdyDb15TD8j4bqVXyD4rue5ncnMUc9P4WqFTgQiD6r2dEsf",
  "key40": "3Sxf1eTuLmxLYnHVtxQwsFxRvhzYSZ7PtBM4fnr3QJC6TT5uQNjc3X1CGqoeKMipuE6dNY44jZFH9c5YF4h1wJCK",
  "key41": "jGt2PP5yjMxgCDUzTHDdr1MkwLT76D9VbxRgEUJLU6im5UqH49WjHJtunoxGNGnJPJ97LULVUvHyEQYA6eWBJCN"
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
