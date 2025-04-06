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
    "3uLJpEeyXfgL69EK1PQmM35XK3Pu1F3S6aCoEEV8kS3H2FpjeFqcDNU4ZsiPxGJkFp8tWnQgLpCVrCmZ8NCtrgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmKRETqgcDjxabthDLUfR3XTiHc8pJz6JYRdPGdMaAs26R5piUAUdP6igtC1eY3nacW71ncpP4ixPqCXWZ3wqdp",
  "key1": "2Au23zX3XKT3HuoY6jiVnw7NxffHxCd4sYKnm3VEA3U214cAyE6SdRMJtLKh8tzsaU4h2wUKvKjbG67hMoanCuTW",
  "key2": "EE52LyNNkGYdJdsuXXJUtmYPjyF5Vde9wRrtYLLXFqrBJYzhRtUNXzLLb6CQRQLKbKPHWpF1fXW3JYpNYa8qCck",
  "key3": "44PVDw7nvUoyQ1EiQrdxsBwELyB4jycGfNqhiKaJnjtBQtfM6pT1Z383ZmBNfMgNtCdDxnQ3NKgEffSB2qWgMt5b",
  "key4": "242bDN6g3MY6e8x1m4eQt3XqcLmUvJ7jdCywxdGLg4heEk1v1wYGFkKadCiyQMdg3fSBU9RQvgaYZvbCQuwDFgWd",
  "key5": "2DyBtryo8RVejBAeWKPiKzZb46DSXjqPufG2beg3hKevvxZixBij4gZsXSuczFcvU854Ls7gqNsLoBYC4VzyxWZj",
  "key6": "3rgypq8A1yxWQGpQxAnxbuzUiJ6ivPYPV4C6t8ZSPCnePb4Egepz1BWgZHBa2XT1W89BMESURJK83uF49WKMzrvP",
  "key7": "5yGhyaGtNhMsuaW6W5oqLMrLiZZcjGfvXpJzaN7KHq3YPK1aSRPRkCFVCUkKXFctqFohTzZVDbPXzkHHzVGhL5Cn",
  "key8": "48QtDWe2Axk8ZhhkDjSYkhuHGpHAfwLWuLZhHtLMyWeQHkZgLPt5oSHSZ7nvAPaKUNYhR3zJtmNcgiZZ2GtnfuYQ",
  "key9": "56NsHrZYSyRZwig1JxVhEXw8heLrvqec6iohQ6L1a4cFvsNY4EX6nfpwmDtoRFbbVEBND47UUimaRCaQNwsFrbgK",
  "key10": "4qPBfyi2M5mSJSxRrm8QKiChYWAkB7MwVECod4iX9jnJWL8kyAZePPkFnVKMkm3UYsMbPrEQKoC1SQWn3EuBqgo7",
  "key11": "5QSmr8kPUhW4TPPYcTDMhVbLjjEQ2JkbBFZg4GRHsTUNQq3UMGBiSsPoz2LiewHNVBGeDLeiQQL4hzCLNb5RGrw9",
  "key12": "qYQWAkCHDS11XiG2iamJsH5nRJftvNDQ5psXb3usiHkXCMnzR5q624H91j9YcQ1NmyjVDx7uv8ExvbDunDUMgmY",
  "key13": "3NYZD39UTvHodUxZsVGkZbu7zGYJXLvnpSxCcw2MTbSFZrGSokWaVn8pifqq7nCZBermFJsLP7eRTcwv7ofR8BVW",
  "key14": "Mj7jvtXh8z57FesNFCFY8Hgnie5cZT5cixgQ5q5Z5YyfHz7QDMdb5ax38E7z5yencYKS3ws9ghqvvL6d8Eujiiz",
  "key15": "4qqWJnJ4vbnHLzbQisWV2PD444PQSiicjo9sd6JnUJKyMkzjzLM7kcspJK5XpbpJGkbhCRVAAPnRULCr2jsgMkGm",
  "key16": "3VMDzd27tj9rTvTqRL7QudGvpeB6E4LfW8N41gzmysFvLN6nUQCKG1Ydcgd5vA3CRmo5ncAvePWr6ZhB4juv1otQ",
  "key17": "4PqPRD99KspzmNqST6p4eFjWywWV4TmFBpJKz1tFjBg9rFe1ouE9CTbh882JozUvZ3QPSaFcVjZWvKX5fAJeqPaP",
  "key18": "rJ6DJPstQ4a2zoazZKRmzqFUWU5wZrCBNvKEK8aRhr4JjNG1ieEL2baDpXEjgUiRQqaoQYT3atVMHeKWtborGof",
  "key19": "2Hb2jDga23CwjMRkZGUMbJsH3786HHWGczAhpLCUXkVUki3dmZtTtRrdj7WoqaJCPABwyVyej4XJh4kKCSM7ZdMw",
  "key20": "NiC4NxCU7hN9GaUcXuYP7Q92Pc2khiBkcSv2cF1cTX5nriKmW2fgfgzMsSMjKXRbCtd8LrKfXopNcoxMpT11wYN",
  "key21": "3JDs8cxpf9AB6aqdfacoEGotGnHeaX2FX3RFk6fng895p3CMZsURV4qYiC1rZjQzQcAUarqhphySoV9wPQom79Ms",
  "key22": "5gGKGY6DRAi2UGotK8ugsLRyMrrQZwEhb1bZdFGC5Gf2GnUxofGo55CghXo9ewNaSJ4NwpNet9FQWnfyXCgyoWKH",
  "key23": "4ScCqQWfjhtAwLgkJTyyMJwwNrNzaKQgmksFYhWB4XrB3foEnDfwJwCGmHNL1To28Gxusn35P3iWQR9wbwsz5Y3x",
  "key24": "73FFX5ebEZ9FaCBjrkWLoQDciGH5NryZWJC787zhAV4XWzDjwXs4K9T89fQQ2St78VyvE7cx1YmUHMZQa7he86Q",
  "key25": "48cSnT6wK6CqXcPYTtKuMQiyrtpFh4eqQFGq1FmEVBV6Uf68dEiWfw8bGQ63iZxJtziDVae3y2HuA8ghjVdP7bu3",
  "key26": "3VUp3AWGPatzXkFvxTXR9FkvwJUJmP2W89mPWoBWA9retXyLvdpPMDys87iA1PaTN5RpwbaeKdTpjguwn4FKuwjb",
  "key27": "5L8TEXj1sLGGXKyc24JwEMDkARVuGLsWGPzsrSmq7AWUNXKtwYAMHARKYQsaNoJVg6SEtdmZPBP1ygc7mQqoXRVE",
  "key28": "EGFf3AmXeyiXeDvvPCfp7BEvVQqWXM1on6tESD6pGZ42XEjRvrpB9RvfsQpaMEc4kV8MHsmEYGATtAF2PPmHNRM",
  "key29": "57rxWQvRKEwub3cM54k9jr9eoZQnpcmt6aUgYYbmvV8fWNWCy5WrvmVnRkVZJbMpzu5EcWj9AtWhEcH1h3bKEstc",
  "key30": "57UceXZzCNxwHwhE7SWkSjdAL42hbkEBjsxQN57yArVwKaXK89iuuQ15cjSn5vnEejiJ6yQGnZujkX9XEiM7JEnz",
  "key31": "3oimY46mY4bwDcP1D4C5ZmyBkTDaWd4jy3Gw43b3dwXyywrY7kBW2GQszCB2SPLU3SWEVDAoqxY5KifYBAFCJPHQ",
  "key32": "3nyKfnYK3iETQs6ocRSQA7LsAKL5DcEo5sWZAenp1W6ChWkEtcenPauZsuxkfuC15Qcjvrj8QFTKHjte2mq6WY57",
  "key33": "5yAAfvmMksyWoX6NUbDmNQY5esCyW8w8pYATwF9FLjL9sMqG2wZdvDQ3ErDDBBajNqp45PC233nLNyLXWDLYELnM",
  "key34": "3SAFkHN2a4d264DAAoLgHmoc46g97GQYyA3aAduzL7PbVmdCBtD9tSkfWP89EqjxQU4tpR7QkXwkRTrA4DHSpmPk"
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
