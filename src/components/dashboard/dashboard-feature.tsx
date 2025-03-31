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
    "4BxnXjso46PhxgRbUCdY5XPEj8TmSSDSD485we2eVpNU3gvneC8q5rHt72bpdfTN8BduSYHRpg7ijp2FBCBLgSXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W5bUQo832hemr91mKAyi4rKtQZ9gTR2WDWSSJjai6Czz9GsSg4Wd8vooEkg4gBKPd8TuSBAMuPbM2FpbRMRTZ1i",
  "key1": "5GsRJKQopBWYKP7gkcHkjFvH1fb14D9J4wCaUTX8qVcMdHVkHaHHbYv2zR3NeHVjQ7ngYoH2f9JDTAE5uKFXQEYc",
  "key2": "3JgLxD1TahcUuMVDCkbPh2tgS2ujgsxDToU83r515mfVQvEKJZ31Bos8gRdRFkorBKrTDhKDSZtLuCZpUYuuqRNd",
  "key3": "QxcDvuPGLoHx8GpCZ5yULM1pqvXLjuM5jFkhqxTS2gAwqUvp4Sx3U6i75cFWruR97MvnSdWvcrzGqoAj6tw3XAQ",
  "key4": "2wRJa3AkcNqhu2xXBpNoWW1vCHN8Stzvm1CZGXsYeQ2otKFfCXhvpEi1RRxHpSvrPYfzGa6g15ktwm6qrCbj8A53",
  "key5": "5HpGRBfRxkvPLv3uzWyZcHCWmRrYay9owSicikWHLQU9EXPUapmRaMwSysWuLPRs9GmrGbmSJcbYYqktGgkGLaRq",
  "key6": "5N5VacuUoJ83SSidRn2HJEYM3eds8q1AyHDvYcX2gdw5ZtEAKPRr41HicFZqfQmC8f1esAURMKAeWSET3pXYhEPY",
  "key7": "cYsRoGnwi6umd2Gb9WEDjMzeQeZNqWBaHgGaHyzoJGQdnGzgkDHz3Jq66Am1HpzGEodJ2njHKK55CL2C5j58rdg",
  "key8": "4jnizxY5J5MWhbzM5dHErUh7EmjoCxNTxF37EvYr3Zv3CvWE1ZKKnZwPJzSsk1HnEah3Rm1RXKnUXdRND5jiHz3Y",
  "key9": "mERqhLcEjJz1tcf1HsYMoyTEW6FLswnYifZS2n4s6Hz8NtUPoqWBmkA5TwANyMtf2Gd3n1YZ6KmLY4zTc7XdNVh",
  "key10": "4Fh3qsvKmGdyrYWjzfEsZAhfPwFqtso1d5GYGdM2AxojExZ4KSXAYU9bsWpqiZHPBtN9EZrpBsdjMixFpM31Xk1m",
  "key11": "2PSprizJfe6DKu26M2wSBkA4NK84s6Xqfv5ozRmrNDa2Tvn3YC6GoTJtLjMoPWDz71ddF2kQKGkk85rjTaPLjWw4",
  "key12": "2wbLNNqCXpiUWnx4Xiv4tTDreQYfKzKGLVomTDv66hGvuDqv1vDbomhzkTNb2zJaZYzZhBf16syrER2eXg5fAExk",
  "key13": "3wcZqjxrFpSe2QFA4EzhePetaF4FiJN9w1qKaQo5zuZcUqXJKPYAyaBzHF7H3RDTuAnGp8328sZTDZVjLWc5DYcj",
  "key14": "yB3cj9L6jGt7Tz6i4Hxwv2gXm7g7u1Zz2MgSjcfDSfR7AzeUWJfmZaMgnKZMhQZBi2coc3s7LXVWbxUMiZfVmkt",
  "key15": "5CPhJ3CN2VDDXzj8pZAMmQFC7uCcC4Gm5NgmEcsYok2Tx3hy2p2daQXgScQq1wXbocwqoWyqhfNj6ffatLe6Z75C",
  "key16": "BnxSe7eZ9VMkEAjktUBoixepFCkuyaw8wTVPkxVzqxVzPTXjyVjbjjXUZ7eVAYtAcPRxB5LeFHzFtgi9EBZrxXy",
  "key17": "9LYGAVBU6Wr8HzM6ktPkyQxUTszpP8Q8CpswegRG2rw8xqoiLdQJZXToiumcY9YsKbJTYV2yQ3FfCBSGD5AJ8XU",
  "key18": "5qTy3KZ7B7Vbe6z9fvj4S8mKDgxEio4Q7ceMLXCWu7EzoB1CKqSB6SWyJm6jT4CR7HmXSeQrBRY38xNPMt38KTTR",
  "key19": "Qeb5bybSQqCdmRenxuhrChCLAfc3bGQmasTQoiQ8qiwWCmkRuEVraJqpspShUBaguzyNGAac8HawwYE1sNZ9SBv",
  "key20": "3JyrXKHWQJYiXQ229di8oovwwWbkKhMJsr6Rcze95Bby71cHKdmaVX5ZRGWufUcjLWUWKVzWoFaqL7kiP2aJmv79",
  "key21": "3CVBhWb21h4q7DERSgv5PCtci3LgmPJPiASrXAgcyR9vu9hXWkW9kqxGDytv2kb3H73FzLvNovJeTF7N3hWUBHS6",
  "key22": "55zp7pLCpdvmMkC29jL3neRSpHGTSAt1hC7R1gs4LDFvvf2TowD9PajgUxHq68zNz52QhJ7kvCigcbNrZJH38eZr",
  "key23": "5AnrxC5a3dbsRxFHg3RxPjtW2zPkZze4R4uz3RQmRU4VeHw8Z1eoqheN3F1k3gAD4nN75UBN9tQT8i998JHhi3RL",
  "key24": "i9WXx2ZzGQnnRE8H756JaW23Y7u3AftAFsuceMQvUGDsACo3Pah89T8PKAzuQTy4bWC4gF8SVxriDWP7RneanPG",
  "key25": "2r1HtZ9biAD2Fn4x9pDsDQkmebqVS7Pw1d2rxnoit2xW7BpcTTcggXhAqW473RkhuLYE4nKAJUBGRfpfyuvLtLFK",
  "key26": "5TQfWmf4C47dhoneKxcun4aAJpRGj9YXkbxVSK89PHbGK6hv2H7AgA6Es6oa1MrFAxJqGvYhUynx182cxMN9GKpQ",
  "key27": "2YT5BYYVUeLyXxjydPMx5KpRcbz3BGbHKhk4y2Fmft6NSRN6zqHAPpV2uM48nLozDMyhCaWZVvihKp2yT5EvSPs9",
  "key28": "66u7zkZT9Y4JtHu7DqDdVtjVATkw7edjUUcZEdVhXmoNcJege4K2tqbSEopfYzvxHrmBZWg6wZoh9z8SRJ17SWjv",
  "key29": "2ARWcDDjmDxdPWeX8ovobSBnHi8zHnJ3Rg1GNFKqaKWN15yEBimDnSemN5kTmKVSKQt1yC1vdVoukD3ikxQLcZRD",
  "key30": "2JPt57VAD9gVAj36YMp7uzUeCTkjTmYvVEhWuV3jzDVsgLrfGFgkPVAzb8B4qobaS5KeHemqXa3u1aiNKJTiCx3N",
  "key31": "59VVroYV6U796vt9XxkQUnJjvrnLeVzpztsemXNxruBvPfEPWPfgpXJZQjXhcjmNvX5iu92qynksCS9xp2i6kGXC",
  "key32": "614ggcxSySubtaMu6EqLqFdga6nwLNvLxtATRovQteYTevkGCScCkAgrbKCSPb9WFP9fzM1jRtHFrkyLvFZ3EWF9",
  "key33": "3KaTnUwqKrUMNFXLVvXfvrd5tzsHA3mHg7aFnvYjcaoa2X1GSAzA1dE7aWEEvZnuWPgZ7qE2BQcPnWbcBtJ218zp",
  "key34": "4FiHJVcDZVueaaLvXTJU4BQZPhvGoT9uDcVLH43vxH3hApZs58Eta6ts9RysiCJLnxbEH9xoEKDQi8yq4LNLCF8m",
  "key35": "h7FUCUt37FL6hYyQsxnQ7RKjLkQ6gC9PYK8nwa1BKv4pmiLME9sJMH6d5C7vxCTFEizwtHPWKF1ivXBWQpwqjzF",
  "key36": "3rMBTqg1Ard4NLVBhwGN1DbezD8c2pmKWXfVL2acxtPUWfqbhuFmxXShQ5roAwQGmL6dZ5egyzZVdv5165FBMrjv",
  "key37": "jjMaeHQJM7q5SPrcLocY26UyLrMQcLKQgM776CPJD5Q8kc9GoahrUSr2UEK2Tfo3cwvJByaoqxZQwSAvTGkL5sY",
  "key38": "42MZJVXcENnWQnRxirqn66cx62TWazfRuL9s2eQJhJ1gPCggvojcguJmtuZAdZziWYMqooJrg3PLpRiYhcnDVMbz",
  "key39": "4x6dpVxArA2h5CtHaBr1bF1JNQWQVLuStU2ZSUrsvMbMrtDo8ddGTH8nHYGzZNpKo8k37xvMcvmWeTJFErvpiRPt",
  "key40": "2UR3vxL5sKdHagLkpFmVUT4XTCiCvtqKq4sJ1fbu3TUT1nqE9JpdejhG6AUmjjW6kyNuYTbcBqTv61pf4cF7q7zP",
  "key41": "2S6gkXT2W3ZWoSt31socUhDAFnRQmQ25qEhMmHV67vcdFtQviPcVrLv5qQZiFx5hoNVWJgWFB4sgz5QPHTsVz4hm"
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
