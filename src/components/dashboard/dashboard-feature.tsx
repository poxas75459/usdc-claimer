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
    "3WBhMTSjX71LVVScz1G5RJoWpBzCKbSxJ7JGPUSsD54Bie9tPuELAX82t5E4kp26Nbdd9wDspvEdmafLXiP7Chdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52G7qF5sbDGC1AkkJgQ4ejDNZwB6ntyzH9C9xsXotspFSsLXmr2N9V2HFSNfrxTwu9YPgpnV58SNFobRXdVypgTo",
  "key1": "sfZwDDMYYiDy1rZdj5y2ELTttC44vNkTg1FenECzGricWYR6nM6cZf62RX8avA754NSxa6hMdVQNGYmoUyWh2Xk",
  "key2": "4cZqMFsrCHwCvQYHBKL53KwcLQpJ6jAK9661P7gaUQLEtZYZcKb5SGqXUxPzyY7ofTrzT5ih6E9cbBKsWZdPsNxv",
  "key3": "2zPnTgephTYrA1g6z7CqqpFAzp8Rppz5DSkKN2HbYKr3FmZD1znxdw6mhGet3ffYU1U39Qzvb5YjS7LTQX5Y6twZ",
  "key4": "2XJgZKz48DL2Vf8Dp9bwnzvNvTNhZ6xJLgJfUhbjNbfaSr6x3w9RSC2xzgGvQQxDHYvGkQp3eQNcKbggRery9Sss",
  "key5": "4HM2Cjm3PHspZP5MqnGPkxyp4kKbn8sHeUeT36Y65RawLnDdwLiy999iGfouJTj7ajirfuoizDT4Z1V7vGPnDrrF",
  "key6": "ysWz727yuoPpfp7x8QfMx2fhRotAGCQJc2pUYX9Zx4DQAJrVCwKAoKWFMk8sEapxQ8k3mCLMU6C4yiettNpG9e6",
  "key7": "5yWFCPpPr56QavJqLSFzzLjSiBSReW6n2dQ9RBSZMWkPAWCEAQM7E7SFAvtAUvA52sgXmGZneHuADN1beyRUocWx",
  "key8": "8UjsL13QwpFrxY6DkBfMxbuTSSE5fNsQykhApny7HiTVKrdp85eftynRmN1zmpAUrJMepLMdXfw2ZxxQyUA1vX5",
  "key9": "4d9ycVxiUNgfW3ig7Hpk3DQJpzhS3t6zMfHYKeUq6gJSSSUBBB56qRC5DHNb9uHg97ZuNqmDxigsRthLxVSfF3ni",
  "key10": "2jLp7WuWvtKYF6ygkdCkdAy8t8ahwxjJbqrb4YLnDiiPwKuTPJJLwJDJxH5oHmxizhd5QPjciNfLbrQ9n3B5i9gq",
  "key11": "5x4JqLTHRBBs9hzhGytVFNTLJeEuYZVsiXEQb5ujC7bqd12mAX7RUjEnUQggvti946gZaErAXbMgxcXiQ1txmVL",
  "key12": "QPWk5NG3D92U1CtpXAuV9djuLQ7SiP4UmtAJuiPbDUrd71f43nr3UX3ZVZvvGJS8idMj3VtvwG4Dzs5sLXGGBRQ",
  "key13": "3phpPtVyNxzmG3JkAX2j9jmH6eqtyPxD42Pax9N8QZwjxXS5gnyiKvUQGnhGjhBi7riYqeeo8DNAmdRtTmFoK7Mm",
  "key14": "4vBMZfZWhSn8S6FXFBFJJfT8zrBXBuLnuFL61wjc8bbw8uQ2kcb2RvmGjDcJ4dRhnEKBP5w9nqwKPEeCeyxS6uXc",
  "key15": "45EDHmYkQNiyakYF4nCKdRiuLVtnsCoxUJ95h8SKQvYLD2kmABUVv5bG6XXzBK2GTvqfhLzdThq9nuCTiqpSWmJZ",
  "key16": "5HbwdN1SReM7JbMRh1nSxzfz2niYyYWyNLTHAZMH9Kn6Z4kN6e518RVXHqSjGV16KNew5SSixMoziknUGnejAz1g",
  "key17": "2oe69BFMtQ2NVdm3WBZVB6zuTgyguukwWq9nnxB6b7qdyMShrj2ddywN6MLZ3EkAKR1y1eFZvptVwAHfNUexzC5s",
  "key18": "3VE7MRwoSipDGjG3DXa4HdD84SmRBtTbzVdSz3mxgF6m9PMwbAQAAbNCadvPuhJ4Uis1HhWoPDUrqSzzofdetuFu",
  "key19": "QMNTkN9KKguGnC6Eey819r4Toj74ui9KM5thUWoc8yin78pj39uMHQYGY6B1TCSQRW6dryUQru9r9entaZNWwW9",
  "key20": "2JZxGVFcFhjccCfkeWiWpLKhUxTuPhrEU9bKFAjct2d3G2MyjWuWpwVxSQG8JMjxbTZYhE614z7XNpbdrWonpdM1",
  "key21": "5M9nPQnbbWrfdSC7wBYBtKdt95m4NwyEnSPCiJ9RwtMdsub15Q26oEyRguj3rFXRtpSZspujR63vCq84yXMNcdRF",
  "key22": "5e44bqG4u2hVDh5ucrhcV1eiHV8gGXcy69K8GBFSTx6wM2R1wY7RU8XuVwRihLyqK4ZeEH7CrwC3PqEQe6GGdVaf",
  "key23": "4t9aDWd8Qqf97BzBEAG7MidoGY7aoAJ9qSEcmDk9XeRyNdNidPzkV2XJmacxYwiwENaXqjCuYPaTGY6bsF5tE8MD",
  "key24": "23a6avzP8X3tMhVTr1dYgDzieHT44PhXeBZmirbiyURHmJnSr3am9homPah4zqFxFLiJ7deXtd48Sn2ixRNCb1dR",
  "key25": "3HzFAF4fqNxKWPPNcYfG1dZ7yVfQTTQy4NgG9Pc8WBFHijS87RpqPs44vWKJNpPaDUBCo6ETiExxsVG955igYp1Y",
  "key26": "2b3oxAnMCrbHZmRLY8UqHosjphLM31Evgtw8SQYZW5CTME6kbrSjYZmcGsfSgQMghwiCQeQv3175SAxLGEHhrNzr",
  "key27": "4dnu2MkRPTjwDnMNSnt2sWcuRiGT3uHEiovipaxqX34ZDcoj1jwby1mYz8LaL521u9LCQixQVFXDF2wd1gkjZmx4",
  "key28": "5jrPstrK68hCBCSg74sRvj4GkveRcWvqGWGS9WJM5EmwVNDUHApHnP6h737h6AEiz4fBzZskbokZWaYqLogjFNtu",
  "key29": "FGQRUgfrqRAdJipXGFSPF3BoL7Gb7L89jNWuFXoHhy625YEh9X7W36NzBUaqRHVwxr2qrB4KPBNBmGy8eCogU3d",
  "key30": "5FHEXnwjwi8wrQsh7QkG4Cdt3ijEzvS8MK5G1dmADQrDX4xzpixWFE4DtzncCuVr53swYPZvV3YEvTFEQfY2DjwY",
  "key31": "ciRHqW2EfVPciEDBYEB7gCmN8n16jzkS6vE16J6FHbGji6RP1aEPet2onk88a4xAVc3AiQuU8JryYhz8AEiWo4P",
  "key32": "5qyeJqpwNVYXCB5qT8RG2bFy7uGW61j94wPzHhoQm2WwuMoxRGngihwBSQaNnhViVjKvjGJuKkCZZwueFTJwnvsu",
  "key33": "32MHhajmbFedh5EMSvWTYkMqEAGbJLWPnX8vBdSPS5ZSPDhof1v49f4pRVQL4oARASiRXjfUrQAuYZEQPzgC6EZh",
  "key34": "3nbAwiU9BWThAjPyT6Gi2o1ufwrz8xm9Yd1RsDtgcPrXcCEj4jkB6K6ezPgXjguocbkqUL3z5YiAKJbMDCA38NFW",
  "key35": "611JeKs2G961Q6SxjgAAZ6WfqTrsPZ8QFbyUFyVEYx5QvURxsLy3fb2gdp7uttY4GWQzrDAmqnwX7mqPUtGa4HeC",
  "key36": "28NeyYy5pEcjBeMkR4euM3cQDVH8jkgLVAfSp9xdLqSDTnF4rKC9H8gqEySyCRDucfBFvx7wzVPwPhMbyZMPDv7Q",
  "key37": "BBenKNG5ZPkYqEMC51qCiWioXmDxMgMFGTtKs6FFoC6WvDeu2G82cJKDuHAdn75uHj5MAgDP2eckhag5Tdh5C3c",
  "key38": "4WByQQaufi6kEJA74C2eMPPf4oux52JkbCFhkT436d3uAyEVUorSJjvcX6dKLs3YAvGFArV2bfM1mUkiNgKgwGsy",
  "key39": "4DqHUv2hBnSDjrtCuJL9M7WtHij4KRwJwujAo8DjjmdpUtgCM3qDGKxsRxYRrwUkf1mTZxBF4wMsBrrdyFUDpnoF",
  "key40": "nuzhHYcQi6xTqfSuWuTcvPZeei7MFikvBkjPBsrk7nMfbXW6U1SiEct1MmUbj5aDNAThGoz5SNAoNVPWHf4a3Mi"
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
