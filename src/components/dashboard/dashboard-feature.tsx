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
    "35AmA1TChFHvmHB76Gu1PqB4JFCFNckpaMSoYKY6JGfQwNFkXZDnmFyLnGRAN83VeYm2iFv1wngREHEPHWGq88zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZR8ehZjWaCKf6oEQ5RcMmqVqqEQrjD3TpMTzz9jhSu4L3WPBgm3crfHvZcEPnacffs5trHH9K5w9PYVEbpcbSdH",
  "key1": "3r266StxgAJhuuQJLumthzUxhrh3Ke3Wg7rhyQBC95Fo784fiP1GCukgrRK1UmELvugUcPATh6qfYE2mcJGijewf",
  "key2": "5JzjDsGd6uwtiaEY3eKydJ4ZqC4Cu24ebBVm8GUpBkBoDxshij1DJtnS4TSYr24vcoAQUogEofg5hLpj6cN7X5Et",
  "key3": "4JHjTMV7dxsjA7x9gdueuNqdYbXHsibz8wMAxdQhXTjiMZ3i2aJYSTv6vuk9GzpcBuepY6rpb4Zr8YxhMz4LN6v2",
  "key4": "4pzZcjK3tomvbKqznhtmEAcsAzReEGj1AX7DjVG9zuJNa4nKHU2YxCnDDoZh6NcSPSA2k3sHT2PMswAfDtyPwsJy",
  "key5": "2cRX1C7yv7NpFAiGuDhmAERKmJ88oA62NZLKZW2328gGkktRvJhDMG46gfVW3eBDvkWBZhjbnEebxQm9hNoGbFja",
  "key6": "3PLXpUeH8GG3nfE7ipFZ6a8khMnaX8kRL8xNw6f9An1bDGAxQXPZ8X8w4VknLg5pCPYGWhfLqgTFRQKGKqaffkhR",
  "key7": "4Qk5deFYqdjJy64Yt3VzeSG1R1stVkAcQWrp6xVMP4jhtz2BrbwaxqfTmxRi5uRPWbXa3H6fzFcdBLkUrzHe2VtZ",
  "key8": "2WD1qiTza5fv9nLFwrboUyJxSfS86zn9E7Nm1f6h1nRYDGgjDUqbRimBQjnXxf8MJkTCVwSM8WSHY8mDav8CH1Q7",
  "key9": "5oPLkucxE8HNSY5fNwgLW3efz4Dbq19m94Zp68ErErd8UoxaMTH2vAnA74QmBy1kkc2DSu5caX7Qe8VJmNwGaYx",
  "key10": "4hjyay3frjY3aLSSaCHZaFLe3VC1g8bRDm6cFfRK9CoBf4gYuUgJ7rmLvY1onGPU6czdn5egZnscd9NPiy6QN6bM",
  "key11": "4dKcrpyUQcLaUBDsivG56NGztjtGbUG1vaDTJWtMnC8LVFeuxAMaHWME21SRLTe2n3mKWVT11qM2Esf8kdBnVws9",
  "key12": "26u1oqpNP6RAEjB4p7vspMoKbEbTdJWDKSDzzwEymVKWLcE5BQzA6WMoKHXKRJepUMw2PQREZWagjhHkddkoWMdY",
  "key13": "39idt2aSE4sXbYWLn5z8WLrZjdYQwQXP6m2AskBS9ptNt6Dv3stx4is6aP8oR1dcuVi7NuGbYe14f4MzCebNPoJ",
  "key14": "5mXmuUD3Ka3EThjWjk6HnUE67xAPeaxNCC1s9DpQ3dEKbqcT3GBV8KxokzT27zz7UUEwAKDbaVfTtFdzVtzUgNZT",
  "key15": "2N8xrUefnASmnKuyJ2jRJXDegLqQhnevZT4PHoqME8HiQvFXNbSbWgNSagDCtw2XY6f1ftAFwEARrgtGatqsnEJZ",
  "key16": "616XR6kFZwNoqH3t2UKnaA4StG6ELtHj6jzsRnKuHx3zai7RW5eaK5pbKx3ehJ1xivUVXoBSD5oF8Q2UF2DEwYGE",
  "key17": "4xtCiHfPGeJBVEPJ6f1SGDkJm9Xk8Xwp2HZUbF3Pdo5K8fdEkK7nGTzXgYzp3FudvadebcQptusYCtvhhuUQyc7z",
  "key18": "2NrnEDJL2MBBuJ1vSpdwmmz3CCBrkf821jbQMZWbwaqrkYAe4mt15Ug5v8CpFiozcuMNi1udadkXYMw1ZsPR434G",
  "key19": "4RD1MDcC2KQc3rGjfABtixbJByfEibitZTcwSPGjUC5gx5a39tEZAUGGVh8zWjUsshymferF3JzqRnGdA1Vwr1tm",
  "key20": "2rwjehbZURtwd4wUWiLXd4A4npzBGmDwVhfP78RiRVb94bzooUQe6hi2XNiskY4daNwyEN71AU7BZUErjzC5mqGe",
  "key21": "4Yet3YHvqVpJY6gQDQ5ur977i23PKrpjJC5sTDwEqTngTn43dATvxwPmbMxTuEHnVEjxTo5zNNqzzsdpYJCg6fTu",
  "key22": "2bkwLS8At8xwvyCYdnSrjREURLgV4uhkaJDuTwDSsVMJneYq5jncYn8Xs4N2GVh3PKkuVZCqNq2ZjA6AQiWpGqen",
  "key23": "uZHtDqVnU9DNYHTRWZd2cwXKvFhzkfB7jKhF5UbMZAkn24SsQdfgQtLXwNBjzyBqj9mGrybWQeTkxZQavzamxAf",
  "key24": "2rqUqdAQvV74uC1ZyCjai5M5jqFAPuZk8BCJpQo5pfPxe6Qxx7e8FNqHho1bpbjzng4MM3hJZPbzXwRoPkPfYLpo",
  "key25": "2oYbix94UdK33EFFNRjUFZXUinQB2NstVJPXADmsyR7B3dzxA6TyX1ArMxm4jRVn43aRkKda5bcreLPegbMtZycE",
  "key26": "434ghSPuE8RfCTEAHuporvxZi9C8n6QL2ZY1FrHrbrK8duNJa7dq6cF7zVHimKvyA1FEBaXkWXCdsgjQWoKj16fC",
  "key27": "3nE4bN76RMN9Rsdho1nTqRHPDassq2wGLJk6PQZsPD3TBqXLmuUKxBPwpcc4Vqz5fR82hwxceXc5xhrbJ6KZM5qj",
  "key28": "47PrM6anHXsx7Fh7B9HcYoBVnf2nb7v9FiRSNrPfDtJ6yNkq8tHNaXMZ5vGnPAkiJCDnP7tQxSGZDNCqyLnGgr1P",
  "key29": "SvNEiiiMRmXrkkNQVYcezFwfZd7hv3d3yw5hhhJ52qNZmWGWU74FbpA5G6sXE8kE2JVcgyXTUEZojtA5BkKsgRy",
  "key30": "5x12FWMdsUcGeaQwBpky3qToeoLGvHD3rebXFe7ZrX7oLHiGVkio7q895EYySDpf1k6tPHFwVgL621jzMwCuJ4Ld",
  "key31": "5R721s7jUJFbn3ZFH17S22rbb9gJd5y5cGVdidQTervg6hywutzFf12LYBWChxviTNbfrCbb2V1inDLzDmJEo1HF",
  "key32": "4Zoc6JWjVVt57WPBCQo4bSgHUhpMMJcvMmibWdK1jbr5TVDSYVy8NWYvAw8Ws4JTCZwuoyctAfTiHZAGzFVqngPE",
  "key33": "4mUE8hHYf5Av1mBHDkFE18JczMVnespFkXbmQ9Xpcx52xGWyDHM7J2LWF4BSPLgVdKpA7qGLWUyjR3bw6ZjMDnx9",
  "key34": "4F53umtZdTZdGe12NnNp5v89hgZhXreL53DxrMEswheFgfAitgeZLHGBRkm7yoYtqatN9xGkoPEqx7pQyaeLyTSj",
  "key35": "2b18hbuhJ4a7Ed86YHivbU2mcmjEy5wsDw9cpTFmNmNkrUgpX4yR6mC6pEQJnVR463hZKqqwYRFprbyjiS2eRNzM",
  "key36": "3W4Jt4ogH4wvFcbdrLd8RRd23Tc6zDXjNYgzUCJFmhGchpiRteoXEVNoWoTu5yrL6hVJfHqjcUhryBCd95ZJJC9G",
  "key37": "38NN1id6RSsR6DuLTS3vsDn3Bv9wRS1GTsi3AqJnbhK6MvPwYPAghXid9yeEkiPeeXQQdHYsAuunkFNTt417jZd",
  "key38": "5SSPNySgsd9GrwMn1MHvSb9Si6JRki6gxPJ3GdyrC6cG69udzSHrLWHFyYtk2cCXoHs2siXKePMa5WTYbE4WTC92",
  "key39": "4b9cRgob7rkvi4VR9nm6ruKg5CpLiZ6WjmAvFqaBHEsxTvGFBHbY9QNkjnQsPtpkLk1TwdnbV2uqPK1ffhPeec4J"
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
