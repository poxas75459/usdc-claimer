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
    "5K6MzRdZLdFLo5Z4Et1Wc8i72MSNziZarw5B6MEWMXBzdmfL382afAvxfGxRJMeno3yt5JBUZrK2cjrxHUjG2kUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Du5rBA8rzCPQ5zb9FFcaLMoRgQMdbUv5KDJKMoiAi3sLgxyWnNNvp69LVjdxQDh2DaGu3NtG7Hm5iwCzyd9fJnP",
  "key1": "5RtwvU2pkDqBEU3VUVhcG57anXZ67fRQ2cDSGizTaFztpnazeP1ctRSTT6v39dnvNbJqCMkkRPftnKLHg3ryvmJN",
  "key2": "2ES9h53xo3uyWzY2KYu7SPwuExmjztrGufZswuu4NkHM2Ttb1rf2aFkzgECC2LdRh6we9ma7tvoSLvVcDkcACkRP",
  "key3": "5j2gN27XTVu6nP338ZJHXVpeLygeK66ANL9N7fasCtMYLUBTgMzcooaYuSoSivm45iYRVQ93ydexXSjeBnCW61xh",
  "key4": "Rfy1nizmAY96jJcDf2nu2AKnisxvZJiWXSZ4CKJKrE6VcNJQZ8duXZgBTgAe7PJ6GZFzvHrHQVyNfARL4AgcqP1",
  "key5": "ye5WKbAptpvs1rmiuisJQSKXxMjHYE49U3nhEkGz8AjGsANFPim4MKEqBAn6NW1Ps7jXKvn6Lqp9uXqWj9CQB3i",
  "key6": "3NSoF7D87NdJdTcMoX5FzXcx542p8SyBqrHCvWwYa3QX6Z3ZSd4KpdEGTqp3uTVeKxbut3PVjnwQwafU5maSgf76",
  "key7": "4D9ewrXV1RuYomkZ3zZBqb5JC1gnHhQ6tTU91CyGMMuowuGvMdAVgwusGKsSBPwTVuLQQtGmMEAidVLJ8KtZ3hxq",
  "key8": "3SD7eZ1XpHhpt9pVgjq2ky6Q7Pz5pXswLEzr1QnyANwUVoNHFFqB2EiFrstCKeeT8PUdTzaU6wKuW5Ff2VTtjvVq",
  "key9": "3VmUkmwvsga5B5asPtwHhxfvCTN9uZXNxFCisdAkfCU5QcHmTdxXakSuYUdpmsJxFYtKQw9ev1CE2Y76i4wTHghZ",
  "key10": "2tVx4r7zQFvxdNWFqQDwxKZ8FYuKUURxZybr3H2oDKGKbReRMwgGijRnv3axdMJWf7B4k8h6Hv9aGW4f9ReQ8932",
  "key11": "4sdx3T5Z2hQgTTGp5c9kZhXiR3E7s5nARMnPKv5ThYWfuT3Z9aUxeS213Vm3EUycEg2A21YsZtWBUs2iHg2TVhVD",
  "key12": "3dRg7NWdYgnLicB78WZebiujdxA38kRP5v9crCJUrzbWLh5pqoFER8tqcfpQhW6z73iAh6mTkN84Xv9hBDmgWiKX",
  "key13": "5biCF9wkhnjGqPctC1vHyWFjNoVnasNimcfj7fgQJRfLrp4Cq7CRKnWy5saDTDg7uxfnVwCMUWRFtPSn3sHj4rFj",
  "key14": "3AZnH7XznyKJ8h3zsENdznnJ2KpjTNNRvF4fHWPhk5xQ4BAro5HB1FVWw6oozj4QREf4aUR4KM5SoFmmREnD3TbG",
  "key15": "5mYq7cr8KZcpFRrRL2V2dDHxjLi46BYXDyLanyVTiYp9yN7oqQe9sspeXpsDAiwC7C25UJXE7gZGA62QSjdymAoL",
  "key16": "5GJccmSfdhZ131nbiB3Ddf5juntVuQwEC6bBVetNtNhSGvVN2yhHS2GPF6uDzWYDFfsDmY216H5b9HGJspjQaFG2",
  "key17": "g1YG9oh9BNb8xdjSjyjxTKEyrJKxcTbp1QTbEUiF1EkKHnriyWoGoszRhTfsuDp2nCjxgqxUWh4oSSLmtQSY6tW",
  "key18": "53hvV4ZRFoMyUJRToa15nEJDZNJ6oQVMKK2FLP3XZQvLL8vsCir8mXE2htmXuWpFRBDiTZ5vA8jMSJq7muPiJd4W",
  "key19": "3brC9Ah3zvhsNY3ifUEsJRtUWymjKBDfQVaz7fjfyp9abjoXbNgbhpQY9gzPEaP8xCsGjmnpUN72M6sFmampdnvj",
  "key20": "yEYprqPVc762b5aizg392XPDt7veGnd3Q3ZkJsqqje4joxQMze6FrftY5QtHdrrqh5xcSshHcHcsskdTf3HnHV8",
  "key21": "5qtYaivb6fQjWU1XVbKJh7KZm7JqAWgBLFfUtgxZ1zYhMxKd67MFkCRAw9EYUaqFLQvPoTp5CHJ9nkNi2AsEgm9o",
  "key22": "JNetymQ5pCpjTGEJ9evEQC1iz7pmaDwaHfmFWJ2AmYT3ByGJAszkgHU3gGLtB47Hf7RnnmWzJV82GWKfrXiy2J5",
  "key23": "c2ocxd5qLM4GLgvM9a4rgpS4tWodLUoFQWwEAozKeSeDkWkjJYKq99X53DBfbs6fL9sw7cFWoaY2p8APhen1Ls4",
  "key24": "59saRTWLeDqQAJkbTqQJj6Jw7Xov7w8aX8vENxavzbdBC4dhY3jNxVGY8z2n9AbKKF1nxoukQpQJq4sacrML791X",
  "key25": "4FRj7QzD39gSynQCF2Lq48oD69U2YvRGKqranK2wpyQaUm8jZuFWqo3h5zjzxkydGMXY34ZGa7jBeNMY2X1JDhj9",
  "key26": "4dFHahy8CMvYnBFhPMzXw5MpDcgTmY6P8EvCuKX5RMqJXbitK4sqjmUvsN2PQDkmdvYVDBiCFgKU4dKpwP1r56mm",
  "key27": "4rcHJLQGiThCDWPV6Ro6JmgwnXtSSxjF3R1QDM1t7f8UDepDA7Xwsu8CFgzCHo5xDYP3ZaJ4JdQFSS8utgz4EuD6",
  "key28": "s8kG4kABaNxfw5rSpPi9dE7o6gMfWGWGxpKVSjadPp1qBjjjD3aXsVqDVC4K6CcM3b6Ar1cboXaw1mTajrySpkP",
  "key29": "d8Rk6WUJq13M8gcCG5Es3nvKLta4MzUhxVXuCYG422bsSAUzn9ZZAydfqh92zh5yZfmfhRJzBCSxmo9qVQbLQer",
  "key30": "4TZfV9Yut1AHbvj6vErc9NDRigupdKknuRcHLsFXEaxk7uAyKPkGDPPR2BT7Sktc6VVrHZeD9BXgR3RMjAnzd3Dr",
  "key31": "26D7YJYtMVejnPq4SdMhPnTcUjVSJQJMth7q7vzbxeBex1eCNxVRkajFF5TARygGg7YxLvXnH8WVro6E6YkYJE18",
  "key32": "czfbiiTAqzidmXxL43JJ15nVTujta8PC3Nq14CgUCrxcViSM1p5FPm7KpPygPnHyCEbTY7AmRQz6MgSkDq7FyGG",
  "key33": "32fJYsTRP9TF26BpqPARUBvMmwfG3TuB9ewRBq3sQnpsLZ3MfXDistzvprup3sfeFr1Pb2rySioN2kVm1DDPwb1z",
  "key34": "2GgnakyvjVuT4nxCsEKpz8tNMtsvyAtWJJ9DqT7YYkgRgYuSSWoE5wGRXvXcNHaTB9NJn9PSsHjsWYvGeM6rRVLm",
  "key35": "Hb5ZSt5eXJuVWadiWg7wqupEfp1V6H363g9SdNL3svZZQKKNfV23EiFWNMNnKhst2QbPRHRsQSwpkZkzixG2f6i",
  "key36": "5kLT1JxwdWgsyhmq94bzufThtFc7S5XVN9Jh4DgtMVStRhcwY43eGt4CzraEcoHsQqKntQuQC8eCviTnaRHj1hbJ",
  "key37": "4hMTLxk86htGTHTBJVDeBkS9aZMeiiCL4hcNwpgHgkeN7V3sXa5JhHFEApVjMq21aUP59ciDx4PwS2eBy7HpgbDY",
  "key38": "51yUsPsE9Y8VhNYk4eWt8SmRAbrcZ8ZYgtUqc18mGBwXwcdGuyrAYUoTE8FwUpc3Jms7dXKV5MWwrNymTCEBjHub"
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
