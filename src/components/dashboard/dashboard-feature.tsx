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
    "J9bJdTcNULBzCJUCh9wSYQPFERyhn1sHJkvsqxMsiiuzAuJnBQbSwniampGQuxAYfahwspfYTqWAR5QvTCP3pAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvmCFqao7e8WjpELef7NumckQ4QzBMc52M4eWykKGWD78K7y8dqj38VXEqqi9wSkEjh48VaDMpsVSeTx7pFRS3C",
  "key1": "3VYZd6eGWX29auUxBB9C9Kh3zXwQ4GM8WC2fX6oA5NzdA2td292zqMSHqxaVkz2dKQLhNc73CHgfXQFJkdW17mpq",
  "key2": "49qCnMdBSsWmjrkFxr6uXgAYkh25YB63NL7UibLmyDzbke6F1e23YecBwE5YNCucMRQw5DoUYuDWsJCBr4dhoctT",
  "key3": "4aDxoxhArDrXu2XHzA12ps85wa5uB5EcoCQDEq1JvNGfYUjN4BUc1aywsgPfjX2L8XCJXc1tT4KZNYPPAFEbL7pT",
  "key4": "395mz9y7HnhfZZgLWwJRuY663Yok5d1SgotxotekvzEe39ieT4Pf1TKJyarCQZ7tyoU5x4EpUGEJGDJgwaSvDMg8",
  "key5": "2DdkUJTapnZQX15bUg6sCtcgWsdVuJBpyBiLqxnHv3xJscSwrjwHQ1EDDcbV68BN5d4W93yNYYirXJGJLq1unxhh",
  "key6": "2nuvq9T3BPidNPdpbDhcpehkKDiLgBoE8kccxJ76Q4JyimNPeQB7f42uinKuWNiV9soQBRpiyzoS93kE7V5rRf6r",
  "key7": "34g4ZFowKaDVmSrtSGaxdFCYCjYcwkPDq5mC7MPvPPECHHYa94ptR6zvWTTR95Aehpkt8vk6heHeqV5YPZRLdfe4",
  "key8": "3iwowSaiUBFmdgRMJ5dDD47zXbLX5wH7x4kdAEeEukqFyuJiFtFxkzL1U5h3kFyNVnEhAYY7bFPXgAZXRrjc26tJ",
  "key9": "3pcqytvoHrbDkhfrCh1MEQ8azZ5okVtjuB13BPBqeRJWUEsDCdyMjZzoQCPhyFYtMAx8DVqWv1T8CUrrT7hydcu6",
  "key10": "5K851xd9w8wUbLCiMwMejxySWP1RXoP8u1yHQAXHTX71aomwbPXjuk5AC83Z3wgaWyeuC8dtZuEUgqHecrdUC4M4",
  "key11": "26k1x5CLLRgTUG8r4k9qNLjA7YmuHVxQLmYjhGKxawsmYTHsVYgYE6jXAQvTuuntjgfpn73eKkaPWwQFrsi8MowP",
  "key12": "56PJyXgd8zBEM5qdrVMT6bM32xFebbLdpT3mCGaFvQqHH999b8tmQ4ywpn7R6JRE8vtBtLpDPqBqNie5j4CjcTAD",
  "key13": "3tjCYsPyDHy2PKYCVRjnrUUv3gZW8zW8CPR7er261VyK4XTur98Vf4k46QxYJUEGAEzJsPFktkJTw3DZ4bPypiGq",
  "key14": "5bNKTji9fcQRywNocgdBS34uj97w93m8zxB9VGPghssxjpJnU9JskoHukTxu4av7ggFPN16iWZHkpW5MGZ2APePt",
  "key15": "5umSmD62jgSET68jPgd7NoHLMEh4imAB3iuMJD8Cpw9hj4c8wiUyfTQCVqQ3Sn28nSvCYJSCFb8KYFvWdmKmVTLa",
  "key16": "Qfzt43yFmups9MjzsH2kzFCN6kn7CxGZzsJcmfNz4QotGxLVNy6dvUtnixFYppX1Ps7Mb6U9wSpCDmcJhDhZGcA",
  "key17": "32NsxTuQUiiMZYXeDrmbrkZUXY59b722XRy61K8jeBqYRepcoMSwxaC24kJXWckyHFJc3AdekDQjBpf7RSoUEyWF",
  "key18": "2LdCJ5wUyzBsLeqBdt7eN5Mk93DRp45RQ8TzTbhZLx22QJx5R2YMJxUU7HPZG3oHKj6tPNtLrYJoQNfES5Lh2zBc",
  "key19": "3kZFYSjB5YYetT3c1vgqwXsyhZobAMbWqpkrF67hGPqaiYRx3KqXF3JwVtVkZfA4tx64xT3mxbtc39xZ5n9L5zQf",
  "key20": "4m8Zg97jfmwmyurPECZ68W7XFMdgXRnqhJyzc33TTvEV37upErPbXfd8i2s8Zrnn4tSwCJjTKX2oUkQdw4ggUX3T",
  "key21": "2xnEWf2FUtu6L2FbXeWCfmCNgyXbP7m1e8Y5kUFAZtRudEk2vVLQwTJWZNWrCqr91igZtWaFhyRo8dCiTLPuQYR3",
  "key22": "45WnqFkkwfeqLqfKqWJe9QP4GEJY3Q1GV2JCjXEnG7k448CRS8Gs9EGh7yCu2t8cdsfvMPf49tx8mxDAswXqgcVj",
  "key23": "VaM1UiK9vkgr2ZXjb1fqoN4CHBad7Nz5k6nqET2jQDx8YJdvEuBo5WVgGRiEYudjVf9XD5yTPuQiGTPRCPhseYK",
  "key24": "2dCbtTG5fknCmBPF9x33dEUpeMx5d958V9ZRer3pXda7u7d6PXmLg6WPtpTgGSE3hdYewoYVtLJsHBQV7eiuGwnt",
  "key25": "4cJJNmAUGprLqwBVxDASswoJBfyEif5RrUjiFGL7ta5VwN9k6BNr27tCgJKSwknvgWcoupfTrEmePiCesmKTdvqP",
  "key26": "5NQoSu7JjGQfBeafxdLYsNSiFQHrZHS9n47PeHFrp39g5mryaFA6Gs5zaNrGJ5YXPNJoWxsDC8vvmuxt2ngN6Jw5",
  "key27": "2EmeSdqmMCDpdPC2dXD3mFf13Drxsbfdsir8cwPdwyzCp7goX8d8jBYCiasNe26kWLzwTYF6qixmD8cqA5Gmrnaf",
  "key28": "3CXiUnPPc8Quy3kwUsRGnh36TsBNJmBqZtjsfzzBFu2qyGzXoHHJmPpevapd4BfwDEcM9WipajfS93ATtXo3mRVL",
  "key29": "56xqWDzCKvgSySpQR2y8yK9ioxYZc9UgrCLy93FKsgCjigyqTNXYQLNHKTrRtuynjKRe43dCGoRtRxonYh7rQCt8",
  "key30": "Zm7csrTAjFgmXefXvZJYpCMHenbs2FdGuCuq69J6RYNxtn6hUc1pP3pMm3RAuFbyGUK1Jbk4c9vsaB1nkocHN6p",
  "key31": "3unLDosM5ut4ZoYE7SmMHaK8L77yBxaqD7MAR4QBks8x3Scuq9DSJ65mmw4Y9cowthuhuKF4vGVXqVquixyxkRWU",
  "key32": "3EcCok5jqRQmFoiBpryhuBtShuV7Vwnas891rfcXXoLLQwAqm4GjN8dmbcnsUZwZ7fuPMLGoySCNvpFLamJcKYDR",
  "key33": "4mgkMjxvur6HhRJGwz7R8eufnfMcaj4Fys7uRUzqnpSqx1a2sCjKeqYKRRX664hvqYKurBL6Gdrzi2qzUDPWBSWW",
  "key34": "AZAqcTudCXH2yNjrZ6Xpzk7ECLryCQfYG3arrerQp7WXybPAbjAswktwerE5oPWphZMaZipH3S6D7EANovNQTv9",
  "key35": "4HVaWPhYxuMKR655q24VZFFaDE7vMbwwWxxUxvzyLDiC6UP8fsippGpVaRDvaz7mr1KqzwPwd3MXgBdABm9EEMhD",
  "key36": "3erAiGdSmK8JJoCNz1hYmzB8PRG7TYYASvDSCsGtovmFuYs7q9qayYAqjuT4ShDXSGyeYfdPp8rZu6yxjx37wR5i",
  "key37": "gry1z56n7DS3RgQynmzZ6mojKzQAFxBVriDVE7eDKDLCmK9hgwYACHuCGKUJRhhnbGc9zgSdnjVo6aDoK37DUQV",
  "key38": "jFvR59eEELdxUF9R25yyRnEoMYT6u4HB8aBxxumqEuFV5muZpazjgUdweVic8nvzeefKA6sEFAEenExxpgkAyJ6",
  "key39": "2bNHieocWmVdagguKRDb8NjCx3eJKHiswrZ5HgznwWvCm9HEdsuyV5u3XV4Vsgk5k2XGKDfTp64kjZpd45KBBjWf",
  "key40": "5jRKEj7ZCuDCngA7nZVrLTaameD7HyjS7fszomzFpPWmd6KQ6gtTrVd36aNU4AjGgRpk3vGmAxYkddcdB9Qc9kKm",
  "key41": "5RzWXWGgpy4eTAj3n9uE8wkgKiGidXfM3afmshjG46hNwZq4MypMNtBB86aHsZFPSyWVM1X5s9MXjkssnDoiz8fE",
  "key42": "4Ra1SZ3i5sNrcUokHEXLbXPHhqSzmbBydb5pawxXqpbMRdkswn1bzuGMnXcrZifW5sxfVsrq4xz4NKpbHrfPFdVQ",
  "key43": "y9gc5ZMWAiYpFDC1szjvHxpzTg3MWGWuiHPo5dqwXEHNspLEKu5VEho3FW9fu7RAaEYp1o7j6LpbG9w1oV1bn4S"
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
