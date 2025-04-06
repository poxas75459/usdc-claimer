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
    "49B5FGgi3ZCfJ5msiHCW2jmWcc79VDanyABA8L4NNf7uHcZpHZ1ErHPgTTSbdEw3kJHkDqxyvZmPJvGQUETSJRn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVcMwUAAAavp65CE95mtdvs4PddSpBiWtKSunLsirZoy11Gng8oVXPU2t48SFMVHgmCTSuc8fKKVGjRvaJZDX8T",
  "key1": "3g3yVwbRX9gKrwrZmitYc7rWEUYkdiCCBXGzoGUBSueTBmYpZc5L5zKUccQgikG9qCK1qNbT6e7MptAKC8X75qeT",
  "key2": "2A8zhWqDvwbaKTmqqZwmZoSo3qpGWKRBTHz4cbGiP2sTWVrEFrZ4mWXVAaJqygtBaqFSpcmcyL7mhh2gGTbLByaW",
  "key3": "4VCbfWvTRnfYaUJMH9uJTnHdWtp8J2LL7zmKFgsHU9fZcamKXmPmg1LaUXBdvBSVEDmZocn7mvWG5uQtHwNQCuhR",
  "key4": "4bCdTekvwvct3YXwNoPaHGsbFZ89Vu4icnFopkdQ92a8zXZT8viGHpkCnRkPP7T845tjaQcQnjXm2ZEu1KdFj3qd",
  "key5": "52w9jMXSUiEn2LTNwy8NUNGztHDfjx5nSyTCQ6hUzHw3h4q6CxyHZTFvJtG7wu4JFzkxosT1bPtndLtr2kVBLWQ1",
  "key6": "56ZPWo2YLMYkbSPUmeYLnocxD9ycAAFK4C5djCScZWEJ3XzD2TwbwquGn63xeToqT1D2H2CXaH3V5KzumTjoxCzm",
  "key7": "4DvRTPiPwhZxFR1dvxTxG949g63LF285ztuGMyauEwbqdPUGbBJtNdn2JTV2uoa8uok8MZhSjs7b1cT383CioWPt",
  "key8": "4PzsrrXGswGiR2CSSqtxmvS7GxUEipQP6TPWuyHMfyFpNH8c5uofeEbbXCQ9UNrVjTPt3AV9jVD1vQ74cJkGHvb9",
  "key9": "2hjM6ubabPyQM6tvswtU6cCebfjaRR5dH3W1q4UKTpco7Rm5r8TarG459v1gnSfBxaCj16WdC9in2BTP3SEcGBwW",
  "key10": "4rznzJUrbhEXZEYaJCqPiNCpVgf3xDA744V9Wre926RrLKSYQ23hbYwBp34FgQTFqvxNHcoiCBaM3XyQ9LSTWEjE",
  "key11": "2o7ScTfDsLBVnLkByTkGPnG4UpPdzgjV3BeBs6r9K2CASvHTguKNr7U5q3rZivMhQqvBq96hQHgiixYFC2C9hHYU",
  "key12": "5rrQbERZaPxDiD83vtTffnZokyPJxJy3Uu6LYFfUfFqXt4BfNSVFmUqi7osLtcAyEne1jzFqBruzKkgWYw5bXLtP",
  "key13": "5NoLVbKd3ww8C8rW1xafyVrs8CFkM155WwNqF4QSSqbnqNFD9xydcJ8LgcXRLGSGrztFePXHPZ7un378uVxbiUjg",
  "key14": "3v5eG4pEsXfsQZUVJhypUdkumG58DQiXknF48fZQntqYoyA42ztLjUgfGKozHRdM3SKDHmLvoLYBwejC5q1PQvHG",
  "key15": "4qeSVJD9GavnyDGVst2ihcDjScWFDUBBNnUVSP6K5uinXJTNfam2JY8b8HoCGZ7LUv1DLpp6pSA6LnYVhxJ9RM2j",
  "key16": "j8qVCYvyKwc95z7w2gbdojjriCJgSKdx7tGpBj8VJGG52djJSAjUtqkZhvHTBKBuqNmiarWoj3ZGLYhJ5e7nttG",
  "key17": "4HG3kUMd7Z8BQEJE89tr41pQ8deQJrwN3NjhprBNUSWTbpcMRyZ3A58vdrJyxoGy6QcfFS66qFbKUywC3Zxu8GW",
  "key18": "29XXdCBAqPSkv49r1HmkFXcNFadpEZDtqg6fGXrXk9UFb4shthBLfgRYsm9CYJdwAU1RA8oavYYeGD2zSPz7T77j",
  "key19": "47fpRLZGWNXQyV6HrHNhYsrCiNna1bmLyqYapsGMCw15zD5Uorok8ciLyhmFNV5Fak2it6fUErFavj2m7ALFMAac",
  "key20": "316H4NekwYiJvfEkk1h2e9KmPThmcDC5zPJrArTJGsJUuW9CU5HPeajcotb696SgijwJfCXPsTMbDJiRrZ7sSakw",
  "key21": "5fSJqhmb5SXAxRapSKsQJLYKy4uyHtD5NXyAzwfsKPPkWkkmkxdAZcqX7ErHs93U15ubBXhsWo4YHQ69vdBDNNQd",
  "key22": "DA9iWkFGKMMNVvgR5hTyne9Sbf1eKY1H6bw2SE9nL8W1uDasYRRm4bQ5qsyfTDZKmS7QoLmM8HwEyAUxjxYxo9s",
  "key23": "4ikUm3LyfvB98Vet5n6ViNMRVGS2v1LAs7kYqre8xVGApPja6eTi2KDzfuxCYfu5ApTDJLw7KaEDAJzgeY6WBHdg",
  "key24": "4AL1etHXExt5BmgkjNVLjfn95km4gUh4qsmK5mJ5dR1eNKkskBkixgXekmYYjaFao6q16TLcM5qR58NxpKSNdDpG",
  "key25": "2CcWSj7KYt2w7tNBRrubhsGYSY9JNSmAd7YwFzYX4buGyauMM2ViiGpVVovX28PHaAj9Biyn8NedBwv4ZBP1ToMy",
  "key26": "35SsVG5pUVGxJehnVpZmDfXjkh8tL3k3WFzQsMY6G431ntRH2W9BreY7oGjMAQHwZt9erwASmRcyNsi8rK5SE3Na",
  "key27": "3cMrC6KN3Vvw8yyFbPehsP3ZXTQuuF7F8EjDnsFtYe6ENnn5MBdSszMNmxKk6cKW1K2AQeXYRpcGewhnKbQtAe5G",
  "key28": "4ztcGxxxV6PerJdVkhdHahy8MJRczuudMvd88i2BFAWuMzgHwCp9siyeqz86WXxvixTpV4ZZM8RW8AfqffgpvQKC",
  "key29": "3kothHnJ5dQkUVuY4XLn7BJxWw5bTsMKZgdH3Jsvh3pTJxWELjdK58aCn8CerT1FzaMMFMAzfQ5H8JUZCGRVPGiV",
  "key30": "5FxZfTVyJspRpgbgEDYtf9butVweVcYze7rW9NWEPnrKQ3Rjzse4LfzwpyZ4DzxFxs9nsjVMyH1a9jk8aVzPsiGj",
  "key31": "2gKP9Z9XMsebkmFD7MLoyqYThoKHCigrKRXxBxQm6V7zsHHbkNwT7rbTDTpiHFUmj8VUtPGcptguGkDp28a599L9",
  "key32": "3xqTsMmnKZhPtemGrFRH4Jx9sZsHBgPJ3JnspL7EXgr3wRRPCGsUzczheCZ7mNCB7qMhq66QYL3RdpXVRJ87UYzp",
  "key33": "2M7x4s7WCgQ8qpzWBsL3vhMMhxd956j68cn1fZ7VuK6trV97De8i68rKPkWhBzRLLAvB8EvPnQyUs1zESrTL6k6P"
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
