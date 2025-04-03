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
    "3qZ1vMuxtAaHPjPVq8vLsBxGKa8qHbLUq9Kj3F557s6yyeJgznAQTTmizftpVgWqoggjSrhkxc1jEke8si1kv4Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VV4Y8E1YuoRcjEfHWp6gNfYxPwBhjAfoQdfwgx3YdZ1xm6Ps28F26HYbWBXcwu1VwhiAuw1WAfSGc5xRpY2d2z",
  "key1": "2xCE23doWVbfobXzTJhywuuHJwn4irYZHFSnvnR3wZNvCuy5MyZeL5eYx8Lzm7p1TTJGsQctnazsP1TneJ1WeyHh",
  "key2": "369wySts9jy5VDNtTrc3cEWn5T9CT2cAXc6n9FeudAUoUNWJMazUGhjmXVvhgrwTjH3QkLieyRJ1D7AB1Jv4ZBT1",
  "key3": "2FsbMzHTFQUYd2Lnia4T9s3yo2pxQUE8x1KTmgTsqoKqBEys71HJnhm8mkJF96VD34WsmwPNRxBJKeB2Vd38vYaF",
  "key4": "5gEyHZtPJHACjYh8FvcqqsRb8yi9uCikXuyi92wsQ8sfTSmFHacD4r2bq18o2M5y4pVxjShDhJmEvFPQVsG4VTLZ",
  "key5": "4N54Jex4D7izrsiNrwZ3bnEviVsTvyK9KLTLWcxSDmfmnT9Yff8pZahCW7RHT2TzDjAjMYMwibFktkRLpaAjjBpn",
  "key6": "3b27UpLAGdT74n6VD2W3xDZjy9Vj7fX9SSNPfunmJFexrT8d3VNePpfNzeLEYbq41mgyLKZ7tR2v358jjbP8QPnb",
  "key7": "27dd9KqRELozXKAuDxuQ31Yys7YspsjvH1XrgcFzWMwFkb5SidjEKPUwuoGGYoBdu4LcSz2qt3bhnsGLJiHUbXWJ",
  "key8": "4c9chaQ21oqsqm2zSatVWoGZfuaeouznU24eQnSL5NTTN9wDFxQiXBRskWsLLTqj3PsA1xKyzJhvBH5bCvPZnxMP",
  "key9": "5zQHZ93wiCYRAf28WTQUgtYPMBKU7fwNSrvkSF59h7roUd9uzhL7eyNj6bpF1ZNdrj2RfSqSnxxrxjs9YX9TiwZ5",
  "key10": "FPFpnEHgwzy9tZwv6hZHtxb2xzsNU8meiKeCiRrMvRJuq1NEavhoF1xin1HEDaJ9pqLH84QgfcC8H8TRkchwddV",
  "key11": "5BKj7dyhtmk2bdo6czweRqTntcRLtKofhAKknY6P1s13FBh38uuuE4Z8em3JiRvGa1WcfozRvbyqzA4cpW41XDAZ",
  "key12": "8wSAFYLwrAW6KhHWEGpgLDj8qYQGndiHs8ziqt7H5Z3iJGj57Ejb7tVoSgDiUnxRa62hb6eQ9EoJToLkK3NF7n6",
  "key13": "7oii6jXeTceWcXRByfteiwmWsWiPLqT6QAKWQByK43pejEMvBccMHwEg3mcqEj3NRLV8BD8XgB3NQDMMdCigN6A",
  "key14": "5YeWqRF3e5LyCytTY2QvC2heMk7CHkmExWPAVU27zQYntLQVYxP4UM7sou3fifdUGUGXNnMPbggrANLDTBym8W9k",
  "key15": "4EbTkurLX9f3AFNLoXZBADwq7L72jLzJTSwQrHdDwdqBqMPWGVUkPai6EtqZF8mm6rV256UgEGoEn4EVMeTauWJg",
  "key16": "4dCHzzTwF8zbotJhyh1fYjGh6Lexh3tefw4nW7Aen7dpQTBuyqsSzqJyAyCKovSVYLYfpjvA6rXPDeS1j4tiXrFa",
  "key17": "2dvHbHnwzGk4xAJ6r4o1St6u3KertCZyXycEvhvvz553Qv3brxsrfVh25RTuj3i6FfB9cjN6SYgaoFVaGiL4iyv6",
  "key18": "4HyY3nhGUz5GgFUih8KmEFCLikZVQCd3hQW8otrJoVCgrrzQkBDK2Lhe3tkD7oWfJC4C6YiN2grpPKzgQspU1Mqg",
  "key19": "5EtaZ74WWocSAvYrCAA4UT77buTmCRnH4Zeq25Mqe1U5LFVVF2QHhB9roXSvkyCsDKM995XqVvmkjDuRHoeb6d1B",
  "key20": "Pc5NRwbpau3yz8DZKmkgXHEf1TFhyvi4FvEyPECvE2YauXQC9mMPcstu7vD9rbzFVErLesLxfVi3JX7TPNBUNVM",
  "key21": "2qBZvS8y6rt4Hbad86oumWinek9RUMzSBcQaXjddLSdEgmYyGDm3XSw7ui7kXuukfHFxUDWwtUQFKRXynqvKNSa7",
  "key22": "3b3xGvkLBUSvigEzMgPtTxuVMzEsoVTg7evkYhwFUax9QU2RgRsLEuYifkSTFZQWj3nbHskbweRuphQFFWUQaVPy",
  "key23": "5Fn3NMHPuAiuepguJ5Eo4mfqqiiPgzAziFNtPLZQhKfii2w9xk6VuYWLA3DQ5e9Mf14NLESSwCMnmzmavND8VUa8",
  "key24": "5SYCn7uXu8qCSVk8anQkjDmTopC39Eb1MRqV7UHJ1ktVcNzrt9wYFwPHePddAHDQSixP5LFAqtBB9ToC9FCGY3cU",
  "key25": "5RBjA2QKXU6aJymKZdzn6QzsEwUSXrvoDfCZZr9gGd9UhXtxh2N2xNkCGbP7jB7C4Zd7QFqvvuyEXQctCcgC3gg3",
  "key26": "2CWbpb6aoMgx8wyeJyPJsqgMLyKLNje4VCTj22HzZyD6Ro2jNi1QreHouGegXVNoKNUjdijCr4KbpoDYufAgcHek",
  "key27": "5BXSo35gmty9ZcU4oJWuLHzCaEFYAfseG1nKRJimZsksnu6kBizUh9cdAoRuUvNi72PAEVaftRTtG56mQMEnNcAB",
  "key28": "5Ku6a5UGhAh8txUbfnuGV5tnTTHpH2K6hvCsBc79LUsQLWYMXc1d1TheoY37ca9XQSaYmkGCyJHA7VySSrnEB58P",
  "key29": "3nSsjaNvi9sdXLjBA2t7o5ocp747UxH3NyLNtheaPL62Hxv5SNda11qnaPqYJyETmCxshjgZAYaKSuZncyJ4Enq7",
  "key30": "4nhdjhQvaCGK7TMq244oz66ggck7ixEuPgvs7gXXyT1M6EiwaUMgkYcEJqoqJ4k7QZJNiFabdduKeNLy6JkYcxxy",
  "key31": "yQnrn82wGpiKd6mgR5sfGzRWUjQLntHFXgtCx8quFiP4e6Xp8yZt1xACZCP6QPUQReHTdAhckG8RkGeSY6QDg73",
  "key32": "58oaaVB1wvHrGpiXH6vfLUZhZZFQoJFnDz639142VphK5a3ZufH4fDwS6Zs6PTMEwibsLGyjPU2kzDBYi7F4yHvt",
  "key33": "5HdevKLX1CZEAoooJDpfB4VzcvwnegJLjhWRcXHoMyQ6RiALKu91ACw7NC6HY9prtmyMZYBEsrh19ChE8XYMUsN4",
  "key34": "xPGrNUmmMjTHMuFLp1KvNKDFFNbEV93rQtPvfM7wzHo5vesGY5ys8AGfH2F7G3x9rcJRRW2TbMc3ReTyMnNywht",
  "key35": "5bSwEjXpDv7rE65NtyvzZ8SZ2JM6sNYMMaK4PdaMvDTr7AjhNkysw9hyRnw9nnKyuNTNy7Z2eyXYvhHLYTKLKbo1",
  "key36": "9Egpsi1znytSmaQMQ6sHVpqXJ2g7zTTVbE2j2X4UpfmSeReQV55ibEzTd7hREr6QTmPBJNc5aY2Rp1ykV94V71D",
  "key37": "4T6ZgSAvwApHFFx493bttc9bwkzEYZQSMdNXkZNQYomiGDxfqyycjxNyyjkS9EFEFuuWxPyCqPT8ArfqLXU7qfzP",
  "key38": "H4ixcTNgJbLkD3fbsZY3BfWPqJVgDbLRabG3R2wVQJFEif4WuiDmArQxKhheVKEDb77PHxntfd2SjuyzqFDezLx",
  "key39": "4yey5QQcTrMCxtoMaVjWLEEANyMxWgfxv7LLWZBD7uP3jpivJp3vi1Y4zdH54mCELru7LhXv5Bxd7CrLbvgg5CED",
  "key40": "4rTd5SSnxvErLtTRrun9JhWGYuvhzBQNj3sq62wqFeFThT4gz3j7R98jzdLL4v9JMBm4XLBr92wwyQyas5wCoCFd",
  "key41": "5jnV616x7FJHiWZQdi2NgcPTLsqvpfeMMkP4Q1gZYcxQLg2fQtiEF3K34m45Y9y1T96SFGaTTd3ZqabFJpxgjkRE",
  "key42": "43ABeZPhfdy4shBh41RtoHyrD5bWXjtjb1dqyW9RjZGMnvrzTV2BG4mKDyTyKsKBwGswACqu192MFhnQuTNsYFJA",
  "key43": "42p7wVmEpS8cKmxDi9dfp65Rd5GwEX8VuV2JYsx9S5D5sV2Jgp5DhNsQGQzNtuNRZwDWjM5mPPiRAKtFUXMwc93q",
  "key44": "3tNGWrBQPj4wSupWTeoFgE5m7fQKk93ZaQZXAgnEELpUqrfPfHSafdn1cSmT6zw1MknmBzNWceDfDX6kLwm7bLBj",
  "key45": "3qPZvBtm6saXojqTCwXwHFfAQN4rbgmL6i93LyGSmtPkGuKYbSexWmjB7fSkmLE6YK5rTWAcPS5G3q8zBwSyk37k",
  "key46": "3268ar6N7CA9nUa3hP61HZrneao3UVhsrzh8vpchvC528M5vH3Wh1Byj3CwtPpdUBfEKKsMohA7TZW8radg6mV9A",
  "key47": "26PW3AUiU9BDteY1Zs3HfF1qq33EwWuzWo97xp4wnHbJQ7YgrqEbnFiaJAQJGfVV9rxnHrXycauomCaP8LLXndFf",
  "key48": "56K45qg4PDAFeeM7sGpR8JcLwYJEyvrpRzju3U8Wi721zg7CZ5D8WjhRUt43syw9wdbugRqqo82i9YWuormE9rKL"
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
