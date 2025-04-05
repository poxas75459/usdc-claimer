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
    "24ii9sCYbV2dpejfHFA777DrX2bj67fuizkYsP3JBHp3wFwLiqfMgJjwZh2b4tCkY5AnUq471hzFMpXAQX9ahxwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oskANTLLCDgUHbo34PYQeVXDCpa7vZuhgkTKYeXHTz78pxdq4XTadoY1kTDr32FKkFCPazdoweCnFvChKQjh1bW",
  "key1": "2Yqr1w3w8PWZfTtMPtNAtFq4LHxYFcbumFqgSJW7wwDpW3QVKsxy2CdU2CmJ951dVP8FdxmYAkpu2f7NzkUjV4pP",
  "key2": "47hEqFbrokSdWyTDEprutKuDhPk8sdPeJg98EjJyMH7ETT8pH5DFoMf8cP1gbwxgsYXZGg62BGqhKBpyM2KKPqek",
  "key3": "5G6UjhMCorGGLxAmDcFS5rpkRTwo2g7Ep4F2agePedBMSef5GKbcwBBdYHqxpqL6RxuRvKB1sDDeEtEUE6AdjqUV",
  "key4": "xDz6HpRg6WsAa63HhcTTNS4MXH1BNCcZPcEf9ma81q7XonkUgjYaWSgLK8isP52swAtKenuxFaSuRTrgJ9KtnvA",
  "key5": "2uYkMDXFrz9J3LxYU3dNaBNkPRvN9r4iZfnJ6ryRCpDUUuNUThGhPBtSWTHtfNL9Yus4pCUeLJc2PXPqamf7GhyB",
  "key6": "2P3ehF6vWK66FcppcMQmH8keJH7wz4jghXyPeg2wc1w4JTfR4LLUfP3SH4nQKPggcdNWwsQiD7BsaEGmSpfVEa7c",
  "key7": "5zapMJNf9nqHHSBAeo4EZf73uKmUeSwYXQ6Ah6jbF31As9SbuTB7LdMqZDK9JXWZQwwfJpwchHGSAaQy7xQZUdyM",
  "key8": "3iCnbNFM7geZrh9wa2XabJyQt8gJp41uDJVA9AK7YtUi1f3ikocPuHdyVCknae7vATkpox4o7QZoQm7PaETbm4iW",
  "key9": "4PveHRR8nbgobbxs81YhBcLJP9iRrhQYvgVbYxMZxToUb3sGLb8a81yHFYokhzi7rqocZHB7FB5fZvrmAXQu9Whp",
  "key10": "4hdb948yUV6hA9kALAq74dAZ6Z5cnwQBvX9j4dsTGpZYzU6bCBT9NAKpqWKSZaufMH6JQWVqeAfBobekYqSVxLmc",
  "key11": "4NL4wcgiBNEemccEHwo3nc5Lj8nY5J9szXgmMv7zP78uxX7hRzVRnTZFD3Jw2x8UTG2hyxSJZ3XQ1GBM3pHXwwLq",
  "key12": "2cR2isC4UViLEEwDzFtqLeCbs5goPxGxyBKoa8TN6RgiU4o8bMuDSrq2oJ3uFVqT4HjL7LKeHtSRGsNX2MNhwRDA",
  "key13": "33sYcDC34ck1Q3DjnwLAFr4FqJuFFqSiigJqEHpwohWnJDms9X1WPAoUV8zy3ZkKrgKzPwJPBSYncaskNLtqy3uR",
  "key14": "5vbExVZSP2uScWrQgET839EDzCQjqQs354h39LSpJw6XYN5RorLus6ixYEz8wUPTSmN7WftuGU68PVtPMdbqUCWd",
  "key15": "56dAE99CkTJZMbH18KWod1hEJPHFb1gNVkeB1A6pyHmFNkiC7xK5HErkUgnZSBgQRKgrTWgxLosMtchmFKS1gQN9",
  "key16": "31X8XrRwQsf9NCzKcJwhdcfZhmKyuacduVmtQdj4x4bwscFYPocNG5wCMDS1GovMnaa6f6JBqYBtbAhM8semiuq9",
  "key17": "667zpAcB9ZbpAize216Cq18X9xBW3i7ohPLnzTcTWUtBuy9Yx5EY1TMvuTjAwufcgD3mSKttiYYF8PPyJoVrP88z",
  "key18": "3BJeGfDpiKpmdssRv9mwFXc8kxShmoW5dAqAyz7reWNPAnzdUC3VtcPsQCdKt9WTAFoaLDuRnEDWzGf9oNTFeFm9",
  "key19": "5zuGWQyxazXp2KMGRrWk4kRML1obZdQXGrsDfeVyDF99CkVAsipSrFsbcQtRyrqamRDJ7bcqL9jTUb869dD5N92N",
  "key20": "22o8QsK2HNrR9HjZbUB815eXnGaBrtWDLRpj75uJTnsHtvNDajU9bQ6K7ys7rEV7pcJHTo3dSMofTH9k6rCXkpnV",
  "key21": "42Bt64RAqjR3avj6koFxvfRRqHTh4M6wtFVTYd8jZKdCULHxqU64G92qaHg6LNaFcskbH2fTz4sCAqVaNj7J4skq",
  "key22": "5azqTg2QC2vPxxbfpMnLJJqJC2jGA6SciMtBpGNEA8fgLiLqRqx5PBHmrPKYn9dkcq7hXU49pqteqLAHnGnBf5t3",
  "key23": "4YSiyXxY1G3oZjWCz7kmZcdBj1hdWXCe9352xEqksQjkop3K3ksdLaDbz4dxP8iWpWm5tnX9i7TWXS6NJJ5PZ58L",
  "key24": "63UKQnYpQ6YFeyt9UC7rHuUexbz5mT5SzGvBHmq3ZPw1wy3To8E7jY7v2smgaApb9joxvdperU9UWhzw7uEHRvRt",
  "key25": "36nr4L7CVwtKPjVXtuZmoBCnH4Utm3rNbVyRNRJfcSBjGttNurimNu8c98965JVmUaNcCT7kpf4EiXcMEYnE4GUW",
  "key26": "338tt8a9izELsh8EzvkojGUiNStBDn6Y5sViZceAhCDjb6rhc7QqPcdZ6U1fRe9H4XGXGtV5XYugs3ovHfUcX8Bh",
  "key27": "5RZcDQpwdX6EmML7ZYpdiRL4iEsR9a87hKtrSLbrTsA5W4zH2pkZpM9vuX2rJA592zqJpaMdpru8d91nYHj3GfW6",
  "key28": "4Bpc6LWTg25dTPPyJQjiC5CurYVnhHUAy7kAJCN1FrYr2MGMqUbUGJkhScsh4VWve7PMkxj8hME4uADqqdqp6iha",
  "key29": "5Xdqhx3qPyHBGYmWxpkNosf35BSjZK3eMaM4hwTXGwbi9vPy5ikfPXeuLAyYHc2xygFWy7kqpZJuuJqWAyEDABnm",
  "key30": "5z9PKL9g9Cki9Er1vx3SW89yQQbnuE3dU6fZYKBid4W7Tx8Xi2SznKwPp69iHQ3pxgBeWJfgqzFk3SkZJjMQKurW",
  "key31": "64x9ZMLuzQJyqXaWrcHqLhEvbmbd5hoFVf9BpovxruMKu93HmDuXmmYEBGJMA9z5FPVJdpieW2nFNtY4fyG8BR4s",
  "key32": "5F1imq3XkUUGxwjwSbChSPdgAfRaRDoiYGpEHDwCLAoZfuUZoeZe9AYbMFmi6Z3U1KD8HdpqbymuGeMoBbPDSMv4",
  "key33": "4oTwXoPeLqYFkTmkwLascx8oktkGmgwhptP8K2Qfnk3JrrrQjTewbJTBSPSumvE5otorcTqbsxteGqk5p5GJ2sm6"
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
