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
    "2iuxhu5d7P4CnwCQRBYPA2bzEjxt94G5HSjQcTFkUeria5U7koJ43e8EkwCGiVboS2ZCaeYZShMMZdqWqhDibAuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s76tUf7AvvAJ4o26f4M3qZmFFR844J7Mk6j8HCyVH3TJW2fWNcBSoqViTCGRLDg5GpMR4mi7TFfigDijDRGuvp8",
  "key1": "3p9Lp75WCifkjGHjfvyy96NQ3LPhTe8K6bQrumKRRSEcjSNBNwVXaUxrkxkFtwfRfJUj9MXVogUaHssoGGvetrgv",
  "key2": "2NiTt9AxNCNV7NbUZuZ4utyJZHsFfTVbYeGXGNZNLfzSLCgjtWL24do9VsWJjQ3Ex3ffKKKRRgaiwjRnuqk7wnXh",
  "key3": "3FowTMeDaYRFNb7m3teDvNwQkxXtiGjXcUKUzfYETmLBiqbYMfKQnUDXQKZWHNgNW6sz3UJsHvDHnEggCCXz6iN5",
  "key4": "3SD67GamevXA1JB2f6k9Yo513M27ve53gdAs93ZVof1AHrKz9pozFUoZUjLpx4PksuAGkQeQ6sQR3F8FUcVzdne3",
  "key5": "CJMV9cxE7Y9U3VNpS3c6pBbcFixM17xsBBCF2Ca2bvhJKsVUt6zVkKHitjxfvAmEEUjKJ3HmMFyU4WfyoBbGzAp",
  "key6": "2PLQD3cZfid3Bq7MjxBeTAJgUBfX3bUgjkr3Dp1DMWjT51W7B62Ck1bHfzwbVuCrcQqMBRZ86Pi6kzBAMc4Rrwrz",
  "key7": "f6ySYADbfg2b5w1EXmZuq61iur3sUV9daNQtt5nMiJ8GzQVjdBnCN6esuT5fJc4Eh3RkSrRXrRyfPwR1uz9Laf1",
  "key8": "4hUpjupkmfPdL7gL4XqkuiJmUqDQ1zABdNx79V2PWPFiQyL3jEkGAsFF8CKTZocYHv8fY9hrmrTDoiCoq36KdaRW",
  "key9": "2s4abrVoH57r9AcWtDunYpRt9CPp1vLdyLU6X9fmhNKroEFYP4XNoW6DjhspwVtf7hfkoi8XN2fcDuskfAhKAQcz",
  "key10": "4wEnNjGVJQyXwJdXJFCLqHi2FXgcv1f9n8JdoYSMnStCRmh5LXd5edbmTozzoZgn9CTj3UwJpis49N3A6qMNXz5g",
  "key11": "39M1ZtNCPc7uQc1EP8ybVEtaYk8FRgsGX4cCna1KhqhEouWAtbkHcqYCSKezs57ZmaoeC8g7awGFmK91uwSvFDye",
  "key12": "3K232V8y8kBzLBoMZCbkQZaLgmERVrKjqzGpZMq5tDpQ6jKeuQhsV5bYexD8d4hM5ijCMxVV8drMBJZKtDS3fUod",
  "key13": "Ke5bBHRzvj7nnGAqxBHwSXnpS9Lhc29FFZUACFDZ63CB3Ss2YN1Ryj4vrbkFwQLWrnMH7pYuaJsUp6vbAWtiYka",
  "key14": "6vWdDvwir8AkBZELygQkz5nuRGyCRaJ5sRraW2E86HRtrtccDuMUruNasPQzENGpk4EN9gpkF6m2My7ukNvebSB",
  "key15": "BmgEghPUt2fZyvcgnC4jCKUm1JHN6JyJUhLLffxW64a5xzALhAtn34qodEpkF6hc1axeEuJoNHGeWJh9QZnvs8F",
  "key16": "3pferMkY8jTEWAkPezE4zCMTgb5ze8geNW98RiryrAgKj5nj1jMM3Teo1iDRuRJM2VT8vKZoE5TQgzMbm74GVyc",
  "key17": "5E2gdwZ485ZeSZn7TPY8SUWYQDtAVsk1Z8doX5xzk7q4m4bpiZ5VaLgWf2ceYZmR65zEGvJ3X46PyaSM9jGD69am",
  "key18": "Rjf3eRyR5gb5rAibYHxXx6PUhraZbBTdi5cWxzCshnJvb7smwoPTuLzuasQDjxBAoBH1KjgijgKNDzQop6ysFQS",
  "key19": "5yJRftVWVRXbXvhneGD3gqxJFTc56G7bMHsyf8MrVSggyi1pgy5kDGEDo2FhVWfCh6xtgKHKyy5qVVzBRpNrsywB",
  "key20": "2SUVwq3RYpK4RtUEXMcpV8WQGKCZd8aBv9Y52mmE4rVRgqNs1qWAxzkt8bwQ1ysWbEA1dogFJe7eL3HrHS5H7Kvc",
  "key21": "4XxZh4m7iSucw41RX9iHJngtPqYsxkchZu8StH2q8pbJKhNBUwtiA6qtV9tu3yDm1pnEuTE7Gj64btUXiAFiqwei",
  "key22": "4ZMB4JWdL7pS4V6LhkBNywxP77cGfVn5c2qpazGkaX4MhrKJXqNyptCdvy2jVDFQjr2rVemg7iVH1DyArYq2L49L",
  "key23": "DbTjydRhjsvTT2Jfk8uAxFLqTg6icHdxP1LhKvqnncgYLpSiy3W9ocytuATFweJ14tYbiQBj8hnPg94xwXYQgDn",
  "key24": "2EbVrwqiHkDsv7Vnp3YpE6AE1CaBM8H45cz2zXqifiECfxb2sks7fHEbJ3Nzrz48ZEH74CbvZNaUfpkwxpRGKhrz",
  "key25": "4xQg2czaYtjhJcoHyaNASsF9LsZeKyoWwTt7cYwAFrBhJ1kAuXTmYQu2k6Dn3V65epRJvTvSubNXEXSosgFwY9G7",
  "key26": "3PRcNrL6rvnX5rdKgzme6WcrGxRr1tHiwNbVrKnrcnXabgvtgyiUrA8VyCmLGbFwrkcioms27dERYhmM35unSzCT",
  "key27": "xKKM7oAAVEXjXkeecwb3dCZKGB6wh7dq62Cz9EFdThhxWjNg3YCDi6naVkSea3jYx1d4biPdJYiUmwe18A2Q6o8",
  "key28": "9vNiY2boF6dgVUHm7doWmcRvNh58XyzEtNMUpBzrxhe6Bj5myaXF2PjXnYqzE4Hh3SSxNb2MKQWSzT7uMHHTKEy",
  "key29": "5EyiAGjCvtZwWzonrou4zTwwZHSi3vfTVEXWNmgKQm1V2GQLccSSUMq7Srg1XAYQDSvSZbYMgBUS2FgQQixn5iqr",
  "key30": "36nyvRYjHfgGnJetuPoUpuoyW58TBKCfbXmhJ1gtPePYiQaDk9g5KaPEd5cVrQq3eLXctVjeyKq1MZA4arrCsDGM",
  "key31": "eGyqkBiSjC874NgYcT6EsrgXXGJAFuqGmPPRDyGuzTWJJmzsTisP3H3QPUjB4FJiw3Nxqt1XdpsVJ2AofXFeC3x",
  "key32": "2EfTHKfUZ2xqbn8xLRTP74QHtV5KmWXaphaoDUisQjfe3up3aNB6Rrhj7Y6kFCy2K8LhTyVfJMhGNC8r44bcAGCF",
  "key33": "3KTp338vHmuG9eEnQBRVpyuFZu46q5gE5TjB4w569DXxTTEdkXY7XNkSygMkEXGCwfTT7jiTaZtZu8eGr6nTWpry",
  "key34": "25J3Q97MW4SPv59EDu8BHe5UUCr4oRGAWyKmEz42wxYC4wXaZpu96VDb5sfFNm2uhj2dv2YayY6ik9Z6jqF8eRHe",
  "key35": "4sqd9Rf43iqevgG12kjno3W59ooNsUvP8363H2An5w2kEt3ZBYDaKdRs2269vouEzFG9Un8co3Lows1zP5MVM5eG",
  "key36": "32t4wTVjqHbgpvxHmFKcm2LCQX3jqPJxW9ZdsKfdnXzc99ePfCxxJC4p9PHeWEnuNaLiXCw16oCi9v1w5Jtozs2Z",
  "key37": "mEytgnQdpfRkKztKZVMkUSpj3o2wdA9kr6YU9KasbqH8MjhVNNcHUXGdydwY8zvr1UdVQxChumHV8m5ynJhus3C",
  "key38": "JKsZhv825fYzbZxNZ1kX9y5d9RYzG18UxPsMg9N3qxJjePZuD4cLSbuZoBYGTUp55BR61cyBvoiSVJXUndDQAKM",
  "key39": "2e4V99p2FuFQC5xGfFBiCCMRBkUMn6GJNMGLzW52oWMk1es1X2f2XupnjCxRmgFCwsnjvvNLfMKtZrtUf3fuJLFv",
  "key40": "3iYebmwj3igV98LyWXTHX3qrtDHk7RFHTLGUK8gm16HR6D2ohD9L8g2yeuFsigUSHFpMVZATTTecaFp7mGJCMYeV",
  "key41": "4dLPv5LKNGkSidhbHXmvrEKc5mBYrDoD5y3PyLdLJaU8KwoxU8e1urE66D8eBAmzLLjrvWVwCNVjjLWczpPzqd19"
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
