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
    "GXmBakXeakBCMiSQdeiMhBJtYST5Z5x9KXEBwJvN1PRCWqRFw2Q8L6U2UtXKWc8rEmaT912Mv5MKSLFS94rZnEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTZwMZG2Synp37oMkHngw94MASeVHZgCBYWGthR1dAStCwUTAUQzdtcZGJQzLdw43Vjk35R3SQ4tkMgMzt2e7cW",
  "key1": "3FYGq7qLpiQGD4rZFfg4YpJkeoJhrBZEgDBBJmPv6RSB19CpwwTkpAMDdMzWLs9yNGaYgnq5XfCXHCfnzSm48yrQ",
  "key2": "34ekFNubKw6sotm2d6sygMYK12LdhZPRRiud4gg9pUwtBfSEkE95XA3r9RSmGZ6RC2UpUeWCKYZSVWcH8nnkK1uf",
  "key3": "2z2FcnhxEJhf9nFDx3gXpTwMFLWDizeRvXgbpSzW3AcNiMKQpx9DUKtpyDAbYUfn7p3v9WtkCAazDA1T98gS4XYK",
  "key4": "E8bwAqs14YbWdUxSKPwGhLFbirXJGU7YyNZpZMvgA5aABxWXGLBRh7dLSiuaYG2xreQ5HmcjKJzsogi1BVFk6wj",
  "key5": "bkXYZjvmPBjFcDPwJ4iV1hFrcWwyUvTT8PAoCsyfYmq1LMeqeS1th7ysp5vMtP41AJmhSjzSJDCZjF1vdmfbuwk",
  "key6": "2xLAymc2qretLMsXfQsJkgBjH7DV3fwXJ298VKHxWXvevpxZBFFrYhy6jggLfigpCY1KtfXB2UNsehqkbuuiHf1n",
  "key7": "3QqZ7G7DvKERT9WeQKLiRejSYXSLDKtyCmPC3yN5ZyCJfpJAVLh8Rd9b3fzVibtQQavifdunEDey9HMpLoaj1BGs",
  "key8": "5z99DjhLqPLsyDRYjzBkYhvvMXk5ziGoJquHieDNPWe1aVuJy2qcRakuCbgPwiGKKP5hnpRrGVE5XCSQPTyLyn63",
  "key9": "2NNzqWUHd5GijL3nNRPaBGBHg66jA2T4pLU1JU1FeReFb7GjgmckZqSyMHkDTRqiJJ6bTJZ1w6V8n4DgNVAqNF3q",
  "key10": "EqUhhSTZyra5KqWLDSapHVNtpxMBzc7kkixxU9mBeSgCio6g9Nz6Nmf95W68sfZ2QCmKecAUVxDpV4Bd39kZwmY",
  "key11": "37WPrAz4TVNEgZ5mUL7JfaerMWqesMbb8vmMLSuNMukmxxyLNPKBwA7xyJWs9DbT5iNCwtxRquCzjWFZwJv19Kcg",
  "key12": "4LC2Sj67ae2aMNw1ia2nrotLD6mE2mQhJwhjbx5rAFdeAayR4oLdJojAKYwVbWZgXvba96GPbTtNNpavtbfy4TKm",
  "key13": "JaNJ356NVLMnHrAbfMBtFPzdFXYFdHVDbMXwGJNxMLf3QDNrxoVpMtDxFFZDknS9FaxRuwaB2w4S5gdjon3P1ZD",
  "key14": "Kbxu9P3sxTYtxEi4set24hXHFJUb9GCx3HnzbJu78JUJxkzrGPw9M8oRdFUorhjXC52LU1j8RtUcqw9VNPxrd2i",
  "key15": "56nogYBzYd1ztaj49uL2Bcb4bDQd7YD8LuVP5Bar1WS8d28ebddr8PfqdQbUBYHL4dXFUi7LoCnT8rELr7rvqX2L",
  "key16": "3vknL1r8F9ieZmKcoBneKp33YhYzKt8dyroNKj2sN3jW28vA7eZiMuLZkxxPqrfKPaQwoLFWSFN1Q8WWSeEUQVwe",
  "key17": "4himfE8YUwmGP3nhqakXeiDTHQWWD7adPDRG8vrcFiXP1LWU5UQBzH22f8JKrZNG8tbJsXhePb8yHvZ1j4y4YX83",
  "key18": "grDbo7EyeTXJYHigiedHBhsv3CvzXCXEmx9srSroQcT7WA2mzwa7JqXVP565Z7x66WqrSxrWKJKxxMhJav3R6fi",
  "key19": "5rWjewc6FAzoWwquZDcYrnhVCR5tQ5xR3hANVqsx5wskSQbdhjXU3d7WELPf6nDSfHgzBhmSufQZ7nuC5TH9pp2y",
  "key20": "8Y8sPn2TjvMhKNQNsNQdGfXgeMX2kgenWQZKzFqudrbNruWggzZ2Xh2mqNaU1c5Lmot82zr8guAjjXmGwwS9Zth",
  "key21": "jEb1BdiH1GAvdLdJTdFRs8w9u7JFrmMabzodTGNVxKwMztVzLbUS7gDrPqbajdk6coFQ8gr87C3ijCTPXkzXpvc",
  "key22": "2eDMh48U44MUc5GCbVXhvp3BbBcVBbQyZkkFfFJ31R1UF1zxfy2naKjQdtkYM99bviNMQJihRtfyixfRgq7iRb5f",
  "key23": "3PxjHSX9BVDWypXzfQiS4qqyqrZVxsm4FGpukuCot34dVQiyLTrJa35KHVZjaHsAnxGDpVo34ZSWQD6myyh3MMms",
  "key24": "3apRSx5qW7yHaMUqUduzRrS9CPQ392yGrdcwwtdcssCNqkCiuCZJ87CXz2eTfry941oqfkxN3jdvyCZsSuos4MaK",
  "key25": "2S5Th1Ac9Yd96qCHC5orxMr1UhqrNcm1yWiJHY2RRsHEymdCWsU7ZTnQGpVDqRieZwxXUU5yKhnsZCiAsxRmns8R",
  "key26": "4FsRwSh1D7yN6r9r6Ta9pMysqUEHWeNAbrx5x8LmR4h1SUCgSru8LjwTxY2giDWTxbJGKT4vwWBdzYCMxUuyWNqP",
  "key27": "5KQWoKWBS8qnoTjAaYdMWfG4patCbd1H67EVYCVLgw9LaeNqcocw9gBeU9obkwMAiqDBNwwJLfRu61cpa9h79yV2",
  "key28": "4XiooV8ADZeMHeHEGyZkrHJjA6unm4YakHWKwK8ZifVVJU8R5Fao4JXt7Vxumf9dpskaVHPFp6Q1q9mVu8ipn1oE",
  "key29": "mhccKtdLzdAfUCT17KjfxVZGH91qvv2dzj6xRA8nEnCkrAYJ6bJeZryEEJBh1sRcWcQ8p72JuEqj3DFJB5A9jUz",
  "key30": "A7htZ8M7ds4dy8vWhcgQ42ALfCzuBxFnTV5JUKtZ5sxyARHUaLNjBw3mHuJ3vJDHWYxcNqDKP7nieFF6q3N4dxN",
  "key31": "53vYW9iHn1uKRm4ZX2DhHt27yKjN65vkngDXBwdjfGkXHEDTqTha5GxdecvGa8Ae8qeY8LwhjE3KhvMDKSah3WPH",
  "key32": "Dqhmz6Es4t5YXe1dun9Hieg5wfY8NFMxLJbnJvRjaWgd4QfkZE5devfzQcabzMrEYN1rvDEh6E8XPcis83euKrJ"
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
