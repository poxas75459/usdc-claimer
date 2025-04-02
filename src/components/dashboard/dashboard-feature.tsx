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
    "3fQ1GLpzAntE5xabitQoiYPadShitmHT3Bekx5U7MTCSZvDYrh9R8hjhqoWZvwH4GwjmCRPsz1x1KbRP1jW6ME1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57khyh2Pi2CvbRZbS6dWbKEomLPVimKUYKN7JdpPQaXMHMgdMVuWPhxknjtVGLjT6VyBE8qWCkJzwSLbJsugwMCe",
  "key1": "hePxXKQWUMRDSCC7tFuHNrKVVYZzHRsfGxdk5f9tSDRggwwpKFdkQ4XoKkERDwzjLiQb96hvdNyFjYx7WqC8igQ",
  "key2": "hK794jTdhXAhouyh5zu72NRQeK1snpyMSa6gxN7ehmAjuicHKXKiBbzDmnwXdziqPVwFdh6cZrqTidHJwALW445",
  "key3": "4TCKdm9RckTyUKcnU8VrCSSzhXJ2Pf7axEgQUJfw6SVMvmwE1Sh2KAkcbNcmAdLfnZL6GbYSr8Pz6Edz5cVpxbTS",
  "key4": "38z9k5bsFM5pJKjiAgwR3TBVXAdDeqV2L7FnufZGSTVPjZxY7mzjxebXJvz8ybUkxX7ZfZsGiBBkvSsXgRxLigi",
  "key5": "vrzFf8Yczu97iXuFfNuLeaXWPdq2j651CfSHwyJtrZH9feNxVtZGdTPA2oGP4DTWiVRei5V152mTkah68N6uDR7",
  "key6": "5seiAvRvET5N4W4eeVXaSMG5nRgNpZGmyx5PgZtyM3ymeeBic39vHusWFPkoRFNtMtMfTVDaxPVb8ATeyYQPZ39",
  "key7": "2jvzuovXk44ftFLDcxWrZqBjyiP2Qh1KhL9zrPgaEmRCNK893j5N8N8NBuCkDcBwK1Vw5QEWwCXDxRMuhSo7bBKb",
  "key8": "4yqzrMRd99XyFMZiKwgAhyc77K7vzWV9BDFYtgMnzPW7ysT46mZMXLwq8SyspACjFjBooKtXmrBXEvGhWZrAbV5x",
  "key9": "u4NAkdKQa9cTU3nitT1D1DusahK5jbAoS8xQiLANCb9tShGomi7qCYmbyRCXQFKEc1rA8jFq2TMbocUjcXNdREf",
  "key10": "67PumAvZvUC9N375wxFDUL2B1W81AKgeAywZ2FSanL2KKENABcMh8ihZVSckeitxSmMEnw68pw1fNJ8v7ZZCd5TG",
  "key11": "3T4DYX8Ft5czKXKqgS9bG89KquaykbVdt1EH7eGHe47Gi1oBz66yMBiF5gjtvuxKfPe5xzVqijenFcX6J5DQusrT",
  "key12": "2vf7ERyCTsSWvM2H3raxzC7VhopZ3R9qpMM2G7Z3wKxSzYc2hRVvgW8MukyCwMkuZWquzKhRi92UMDKxQJPLAPwt",
  "key13": "4GzFCzWMCPSgJSjsiRBrGsknDCcAjQnDksw3s5QP6rp83rA3AH1GcgUG13CjEEDJfMEtsdRLjkRnE85NZ9bwxdBs",
  "key14": "3WZ3tsuLYKLw22sdZjJmc38vhSpyScRWbnS9xJrYH5WPZrinZKzJr3LL5MNzKZ2rwV2ghUQW5koQiCLm4ZshE5Ey",
  "key15": "9AiBaQnKdGJnhT41fSyxUU2NCDr1BVnV6JXzVB44eHMCtPdWtbtD5ZECrNra5bJ9uHoGAMVxEyovi5FPTdkqtFi",
  "key16": "5V4HivUnzbkHuU3VcusjogRopK9fRbBR9P8ygd6TLhrXaAtZSswzaJfCSDVGkiA2UzwXUCzD4ZApbxbAPdL7iaGL",
  "key17": "5a7s88TJArZTG3C1Gcvux8JsQpMy2Poa4cuFeWXPqXo7LebUpoqWuUihKmS5C9feXT8fVH8EpaDA9kBMggxkXa83",
  "key18": "217tqVzxcRYRKRfRAnRH3y6HwCeE4wXD1vdJSr5rsp5kDAMV1d9m7oa72XGLKHXgngAxYj76HfCLAMemjfv45oL7",
  "key19": "67A2VYVkuQd63bXvHprr5StATWYf4KyQNGw2zX2W56RzTFHhkLHaJMkVrQFRHsYtmdNV5JcdAJQuAsQyg8wzpYsh",
  "key20": "4EuzvJQHiWZUTVyEpJ6EKv2PJmaLpzidTqRnxQEWGvC7vXXCi2kbFWh3Fe7qXhvS4tYWvTNrx3g49inWUM1ST5fK",
  "key21": "3RuTFtA84JapVe5snJKonQjkqTD6kmzQXgdkxDcQhVw4yYdNyMyvzWZXyoq4PAVRPmS6dxisT6eknm7ZaWP1XDnC",
  "key22": "3wdznVk3Z2aq9gkLYCvv8TtByo98ZuN29YpWxo4tYt7WHkNkL5YEoYsaXSyJ8GRKijpRLu5aLuSe5xq4NJKXcCT3",
  "key23": "3H16jPcMtPren3JRbY131EPBLuBXVUavdLEQQSfH9LoE7pqeBygfGNUdsR4ehHFKm6SrVTZ3LuU43WcefMwRF3LX",
  "key24": "3mrTbyZkXr4d5H1yJtjcay56WwKPChPQt7biTAhUMmQgqkJCUEcJ9ZscdHun6eabDwZyH1cSvmjJrsTrHnG9qZqR",
  "key25": "297oMRS7sFWhPuTH2eyzovE6R2WZgCBU7EXnzikMhyb8ewqt1sAsXQu4dDXXgTRKLs1ATna8YPieyDGK1u6HKhEB",
  "key26": "RrTnRk7Z5NbRdeAYPdY7xnFwSuG9Dmnmc8CfRRLryj7heumbvs3aSeEWmJYbF4wWQD4gfTuC58Jkx5deewAP7rn",
  "key27": "5hZE2YMCieCycGBU4Vn6GzJrJyb5N4PDzHbQJWzQ7WQRmDpZXga7bcPgmSLV63WZya441RMUGx4P1s2SdCrmu3rm",
  "key28": "3mopoxJcw1vvAhWzxsJ1RqGsv6w2RSbsH3toLAwv1xUvTB4uec13y3mgVq11TUt6cAjmRdQoWPnQcDRpEBdqsiW8",
  "key29": "25mqgbciNgHyKYjUYSVwHd8UT1M7hnfRHsJd48aRmR3QYjZUniHuLmmshWj2uc1NMqkSJG7q3dR6LvK3oYAhDW19",
  "key30": "W6Evx94fiFX2j5gcdz4HGP4gnESFq1YBmD31vws1RwUhpKDSbP6YY4aeKU6ARxLD7YT7k6w5yPcnFxoChWKV9a9"
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
