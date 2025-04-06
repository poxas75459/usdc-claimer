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
    "36faucag4PBj837L7uZZg91wU42FqxGfa6tHrgZUwUzR3CKexmggQtRTTMpjJMgH4X1VLZ2BKV5F5fVPhX9VFxjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37wubDfrh3tv7Yz8VXHAmXEts5KsB6iWYNQJsqV1z5LFiNTeDmZRdddtMoSoC2VL3jcTspKYrwNYKSUCeYz5VPhR",
  "key1": "4FjEAWy3L8tbn7KW19wthRFRJWTSdM5bbZuTWnv8bK4QM6sBgnfPH9s6mHvysE2WES5abcwHBfJYBNS5tu5SuaSv",
  "key2": "3Z8xbzga1uR6BgPY44MwT2L6U7p6jCLNvGgoqXPoS6uvqZeda3XyrDquQ3ANTVLpsx8KdgMTmDasreEfBN3YaqKU",
  "key3": "YbbmNtrm6zcQgXDSVZfk9Umh4GE4jo4CX84oq9CrMWvVjGFXT1aqNe58kxaCJZhgjVotXCU1NfBgTMZVshhyzy3",
  "key4": "2QLdAhC79mREFhRhS5BHx8UcQJqoeBaBHSnspiTxLJoYrp4tqUQKFFpmax1u4ndF7kSEU3PA3xwYSRZP9N4iAmX9",
  "key5": "3MAFYz9XkJwAfEzgZLktqzggtysx7SH2YUS4dxLERiKgJW9cwkW8sqYA8s4LiTyqmGecgPrtduhwHJwR5m1r1oQL",
  "key6": "kg3TjGuv26EeubfxZWeZu4PUFM8Djejr9rXPiNcznsTR4Y8QgMG7hve4hRLivndfiLcREpJFgwotMK3zemYCh3u",
  "key7": "2BsEeurweDXrqzsw8EEtQnXPAk1xUy2JQbzA8Y7a4DPBdcCPFBiekzpaWXxHNHCja54bs3e4HMZBbQkFg4adkUHb",
  "key8": "4gQ2HivTnvV1ux74iKqMk8JVZudKJFk7EGnugYUuhTYJY313YoXB1BoecyFFEPXMMcitvTZZzvnMJ5g49dfnnFtH",
  "key9": "5kgAQdk2N6ouYF1SuaBBGAQMYV6gRwjeKLRd2u7whthzr2v7TdKT5QEobG8r3yXuZiKMqaTV8C7h2JuXLSNn94xv",
  "key10": "4uLGkwYgQ4jAhnuc3c6JP5x6CPmUmjy6WFetefjRrHkvhrArnboTE6bzdWMp8mKA3AFJEHq7swsL9RdNWTkiJ9P",
  "key11": "4ZK3TjrSNHH2VjgZZjF3ZsxzCBjCQhF66HtpKV6QaEbZtKahosqtoQ6CepxP5A2nSAEB81m4JHTqTchLkXgdRbj3",
  "key12": "5pucxwEMJUuH56kc1DuQjJpx7A9Rskp8X7wZk59AYMnhogmqDFE3u2i4u3uPaFWwN5r1X3x2JC8eMZAZScbceXxb",
  "key13": "2fNP5ADBApJp4j7aQSRSP6BYUgyS7YJSuoBKxvkWyppkqSjKXNLDwxjJx8EhE2aXXMUirTYQgDVsDHePfWDkiK55",
  "key14": "3XsQhbYbBzEDRCbH1E22cDv4Tw7VYKk8LjVJFUpKCPmxrgbaFt2e9uDcTiwkG2ETX1icx44XYhBs4okUuo1pA52x",
  "key15": "3AFrAitD9CydWKZG1sd85sdZLUxw6gsDu8TzHBhMX9pJb7WxyqtudAvFUCHHj7UGWQi4e93rRkBBd8TKypPghs1y",
  "key16": "5xXPJuvsbx3KWvbrArHhviehabs8kU3LiMWXh9nYePvwFyHkwdPNdtgG7VsKFjgp86XxfoD9EqNXVzAiYS82HSME",
  "key17": "5s73kaQXqpf1vxmRLha2ANMYTXgaEo4xeJ1d371YSFiWrgz3hiZs1Mb3RBF98BN6MpE17E1Khh2RVQMxghBjfoXs",
  "key18": "5LLqivGxMFrs2B7L3ncYfwr37RVwMEiKYWGy6Tm21SqVQgw19FHYveTyZzNsZVUN7XXpSRDbaTvFCs4wwpDcoN9e",
  "key19": "5YpNioviJRDFMNLn7P98yPjZaBGH7KaAJCyvhMFcyNchJqovfysSy2RrwkTboJMhE9FxtszQju9zLb8b9wntFbg7",
  "key20": "4YWdmho2im1vE3wavDpopPZ5LbxjTk33gvKpSSB2U2wXJWyaAicySNM8Wf9k64doqu3WB2rarnMdeYyoWKvwCQXm",
  "key21": "4kQwNsTFHtbqfGC1N8PUCqrQPmMJagj8FtCFNpVkWXRTE5yUrBo2yoRwyTmCZr6DPzXEWPXbpx9Nxo2ZE8NDgsZB",
  "key22": "3mn3NEBgvsAcwPLXRrECdEnp4SjyfyHGKTjAdgz4AoCmJE2QhCmWRmZX7JWXn3r1xCizwFN11bPuhbX1mErJ7Vd8",
  "key23": "3khJKQXm9QDcjdfxHERPDC6BcAJNjTpD9LL4ByVFgxQKcVG3TWLxPLTLMFX53t4X6qWPHfM42WnP5f4wzWGaW6rn",
  "key24": "3Nq3f771hdiRePBosf12hJNALrujXmnha3o2faQzvoRmSFPezccohFGUM9a1DMpcPqkZjQeWrUbYLXDPgc4xqZBE",
  "key25": "2UhxpHEjCYDPxzZsWHMztywMqpcPjUaVt997gVt9YYVyzaYaWoodw9jZUQp991s8Nqe9fqaAsD693UzVxDsPH5Sg",
  "key26": "4DZaiSkCBPyqe1rwHZ6zSxwSyXBbjAuopFWkDumm97emEeHYRNaEGeV8SN7g4b5xGkvQB65eP4dNmP7K98eKH1F3",
  "key27": "67Mk9Rv3XhZfTiEt2eGBA67cqzQpUgaNhGg9Fc51cjL8YnUxXBmVk1g6bzQCHxKCNudt7sEriCKuGRXs9ao28iUj",
  "key28": "5EDm2kjE33jd6T4eL9MPcvKemoBqx29M7jF4J8eDRddyvF8EKxBgLSS4dVMBL5692kgA2i83Fqq6MRBhaCn4LbV2",
  "key29": "3CkCfvJgkfQtfPVca6ww6QKwpKRwoAJWRwUWEfYqki3weNVi7BrrLTqVz8EcdagVpqd4rWR2R7XxSs3K9Zv1snKu",
  "key30": "4gUqcx2zrYYjtmLRY2f5F9QTt83o1edh8UXXZkkTMiT579aP7kptCNTWLyiSmdxCNtR4Y1fszVbTUhz2LeJZUVoU",
  "key31": "4Js8pFWqNtzrMmtJtHVNXr6XPQs6acgmAHJoVcXacbSMuigo5uL7sh6MXUxdexfLEpQKyCXUYKsTGjvshE4awskw",
  "key32": "2S9twQusXTzuHyfwSB2fRac7duQWrfyCt7bX7EWTqRzgHcQ78dsKgGoargDGTedBm4wHVsD72vED2a3zNaFxpKwH",
  "key33": "4mXBFvPKEK46CMjKVRB9rDoncLtyP4SwHBbZJHhVzNv2dCPryJoY3FBxuL3PfrVn9mnep1veCuZL8YzPKfTUQnqH",
  "key34": "49zXtZq5ryTUuAiq4CQJFt6cHrVQ7Ew7xnTSAnmW8ykxKxLc9Qgau5LJUyfS24hLPyCvrgP3BkQ8NfGSKhm1VfEN"
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
