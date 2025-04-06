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
    "4MQewg345GJ37FCkBVDqwUPRtSZvhFqos6zpCWDEQGTQRzZxb8DS6xJVdnxeaBPUz6e6UmTAwrUUYThRETN1FpQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21euZiSNCUrCM2J1ntbRFpJC8dd75Xu9ezoNqmzMm2cYJJcFmj6Kqvma1RTPereiws6qvFKkH9ekjXjiYdqSuvgK",
  "key1": "g7eovv1XPBJDW7yxDESNXqASYcHD1Uc7dH6v1PtHr69VenqPTb8hRCkHoBUmBhUPGS9oBGeFwgpB9WGtrgVjdQD",
  "key2": "2vBTCv29x9C8fAuVG58wP73YhMdh1xXtHjKCTPt58dhWfwHH8SscQYQWqQLu3mxk7fJMXCVQKUGUmRvfoSMLoFp2",
  "key3": "5GQ1JJekRNE5iTyAbCNVQet4FfW7tFQtkMVB7quPpMi1frBEkBBaEGJB3gi1Mf68VDWfB2EJ9W4n4EBFbBnvFvXA",
  "key4": "3u1wRNgn3ahAjXoo8qydZkDHzk8oH5uMNCaDTU3zj5hJWVqSWzuY9rdiWd78Xa97XxhgyZF7g6YuYCzeVaANdHzK",
  "key5": "22A7Xqrk5uCP88WL88dS1kTEpKiQLFv1gGvkY6wme9Epu3rCkbo6khK2h7BPJE7YLxXQ1Xg2gGn2sVZsrKgmVDbb",
  "key6": "GF9dqdbxBC2jA6bqWDVzWQUfZd7GnaMbBbn1Am4PQY1FQT4uZ9BezvCFNJz6M69P1HxU5Uk6aXFrHusDC4hyfd1",
  "key7": "25stgvJJ2RWcsEjquWnNBpGVhiKZJHyX6GzGEPHTWRgvZuX7bJNShvR3VRNAyZt49RFJVK4bsfqftJMKrExkuRZs",
  "key8": "3yHB6NPqmLyjSCQxARZoy1sf7J2Gmoc7hbpcGYYFpfJkcC9M24tbVPSKCYDwyaJUANGua4pTz7bKX149LWNBft8Z",
  "key9": "4cCizY2ZiYCcYVvmY8dnSBi5wTofXSmxEqfd4hKKrPRDTJUA964Mse2HeCxhxocgkTrNisRyyiAt1MYmLjGqiUyu",
  "key10": "4mvYkPFiTqYPhuFfjyg9EHARad4YtRTRbRnbfaieJKyRN3mcLUYE3Xvn2N3Z74yyoyUZhEPbnxpPZRjwUi7aESCG",
  "key11": "5yNNBg1ktnGeW2AwXxe4ByXfwNHiFoLVGKyaQkz2CyfKGBhba8xm75f6R6hnjrN7ByCrJmWcjyFQU9Nav6w7MWKE",
  "key12": "3J39HX55CjwG9bJp1Akg4jUqWptFfXBZH48XVHYXewL8k6idoLKiaYhy8vGEJuJrUcqkCb3H9U37EcGTteaRyffu",
  "key13": "4dN2ybkRJ5UtZuN9aVBL4DmGLwnPy9gCKCpLDcw49pVG5ho3ksc2Z1ohXZcDDtXysFSJofkctiwKuXAVz2XP264G",
  "key14": "3HvMjXMsnyBYzg4osVV4BRHpJrWyvv7kB59YFracK77QnbvZCYNkhHYSH6fJeoyeUmuDQpif8dudLVABSWWBMk8o",
  "key15": "3GFefjMQVMqR8YqNR583qFd88wZCbSgR3pG4DZyjKqUxtt6AhGqRFwWwn8mrX2aoTu1GRnp244Vn6BuqnGWq2phH",
  "key16": "tTqEuEHpt1k6x4vimaCf14ewLgUD7KVr9kTv8tGkArFaoZvLF9brAKtCu6SWv8aCqNs61pNyS4pjTkMmjG7FiCX",
  "key17": "356XkEGzZwELe1NgfwHuguc1sgk1YpxR17C56BCQAXHejSs28VvzAz6Z9DiRU6E83DdUiQtbLaxf3nhQDJCR3vTe",
  "key18": "4Wa7AUFJUkXHAGHtMGW8W4xLqR4UXEb2gjUQRkUGVJhfMRveN6uxofpk1Yrf3ZHpEQGq6t8P67SfAFomFeofjYnf",
  "key19": "2QZSNJRT2GznwygmcU4iPCHJtERF1ThuUJVqpqipSQSFDPXLyAG7ogYcxkwGNVLuKocxZLYTQozVkxqyH3sGCimx",
  "key20": "2p5Y3XxfDA6PkbJk6H3NdS9m2yN5KJCRgMpM4Dtb39emFpsSTc11aBXpTquAaneGYkfRiLr3AJ4Ez2PfkYZMoruU",
  "key21": "LxMwezAhbxUnHcuXDA4HH9BBMoz4pv7iVHkJV7e1sLHogqXadjQ2JYY4So5xKyKhphhwechQquxD4eDNUzUggUw",
  "key22": "2UC2pvgQ5dgVzeHA24QfTE6r9xyn25vxs3RsCSVgNG52pWkDju8RtftKpZV94ejVdaFKudfhFMmQPY7pAugsTzNL",
  "key23": "21DZ4Y2dMx1cDRfNzT57Nsp8BJft7bW6r6N7cuDtSYzSJAVWmytTu1CnnBcgHA24XP2iXzd4K96tSqH2YeqMo6PS",
  "key24": "4WchfeP8ar2kNvHthurmCp6Lqtuqwrn3h5TYN9Lkv7eYJN8mARFy3Uc21sAASxgXBDtitjTggz1iKSCFahq8ED9S",
  "key25": "2sK8XuKHHUiUbbRuiMgWAmBD8rKce7GmiwLgW1AnQVPTQ3N3hXwXmVJ8Fyvt8cXMk6Rm9yEEonf2MvC518Mv2CSE",
  "key26": "3nHEcaAmDTSuEQiyhFcFhSGPRQLF379phD4S7iVyJR7rBhMDUyDvJbPBHkdqVpeDmcdXc5iWxgZxbpUSzLsySuJW",
  "key27": "2ktAZhfneixUdvmS4ZgzJBKSjWWosaMwhBgeAVPR33Pme4CJsFVxy8DbqrxgiuuWeP8zenKPgUMoKbBVGZTEN1bz",
  "key28": "4xUdAvsWcDKLh4oFqxG3UydwVEihiCh3hZsbkMuqbbFVa7bw5tM3nUjbwm8Vqtx6uVpqwUDxuDY1UHmZcL3qjwso",
  "key29": "5Pkx32raVyBMVPRMzkVhRqBA9i6MGHSZQc6eG9uPMmFN9jKPgAnp6c6WS8xjwEGLC7sNKTrwDjnfoYATFQhiX1x1",
  "key30": "2AWDyQtQQLjKnU9Ef65AJNRrRxtdSWcxSc1tiBSYexqnQq3MEaPWwr2EU1GRqZbubTELRDNXV3UsnAQ3TdGxqhQy"
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
