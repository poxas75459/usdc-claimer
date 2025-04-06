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
    "5Y9CvvAZ2vkt2XZkqDUnMmyikn6ffGZJQTdrs84FdPeeyiYQyQvQxyzgC1wkRou3bUTAw5PvHijH9NoRvzdBuEos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Rf7eukde3Aj3TZEawXKpSvqmFnt7HP39cjdgQMe9fCH7XNZ2rh3jHVk7Xvtpsi5zoaDpo5DAwbwAtNuvGm2LTU",
  "key1": "u4a5VwwnxZbNZC4J7bMA81m4YySNBUiLb1G7r7ijMGJNjZtZiH239yuEJzbeUyfvpT19wEcZVuTDgjuNGor4Kds",
  "key2": "5Cx8KRD6zUMJP3ZG8ARZfnzKGrtG2Go26P4qLVWoEUE5csA6cQGRxcjTGc2ngg9i1EgbEzajB8Ejor8BuxmbmGwu",
  "key3": "23X6GvVn6jKhcZai9TwCRogPNfscoNWDFZXi3pFCERvGmq4dmXmCZNqRAp8Tt6D5GShhvXmSxSVbvfnnzjoMQYta",
  "key4": "3n2xoKmV6EM2rj1W3hM1ubu5vF4m5ViayB4dgLU6HzCRXrs8HdLxCn7f4KPqUGvnG3RjuwQTGtZB7LnuBddh5KCD",
  "key5": "5sfEdPmc6rjvxr2abnnqQXLPfsQnJaAS9zrAQnHeTHfWGsTRju2AQsjSda4X7KJECY32pKyUapFCPoL9Awza3Rsc",
  "key6": "2HmuSeMSNn4C3fesPoJLSJik27BpkTSSSqLt6oAkKVtXpV21Zkr5EjHZn73bEBi8CKKjZJTXtASvBEXSZdSBR5Hx",
  "key7": "2pMk8pcZZQkyj9dBx12WGzjagwxr6NEbd55KE78iQubut9n8L626pc9S7AkixYJozt6tVXTgchJKkjmVjhkgRSS5",
  "key8": "4YfKKWXqKZFfmEffCyGCPKz1GmGBvyY7Y1tLrc3w84L1cjCNz9XFnh5ZWP2dh2iCPDAet5uARKHrqcDYfsy4Skhy",
  "key9": "MTRmvcWbAT4f2xJGmbJqkpBSTRWm44zC2q9cuLDMukvrpmPwYjk37dTxWQqQDM4qrRypgGXoi9pTHk8wPrcfphV",
  "key10": "2ji2p4dFvduLrbjUvd84yMa7AAPHeKTyJT5SgF6aNBWYUdojbzgxhw316WjVXtgmXuwYXE1KigKSwZXCyWZXUtR9",
  "key11": "fMLix3etMB6A7HDmwmD4Fudweadnxq68N4ygtY4Ma5GVEv3MKrERNQJ9YxQbPXbseuN3NQQ7ABCkf1L11HRToqZ",
  "key12": "67etCiKTsbXXJRYAdBGpDBd6y7buxM5irXz9A6XSGfP1K5SqoPZQcXeTgX41MfazFxKrAquqzSYApWMoGQVNb9ie",
  "key13": "67ZeP2APKCZt56YZ5BXWAbR2Fdx5qSi1o8ejktRqNTR9HkXWVaaFJjHgR5Q2jo3oEhr21A2z2o5WFuEpDVHy4SKy",
  "key14": "4CNST9jUPeLtBmk77BqdkT25QzDPyjtVossUVAVquRbZUGMtkNEBjYs9yBoLtSxjEsSPXzM3V5mQ81CG341RkDwS",
  "key15": "5oRLi638vCipXXYpRX3PEeNfr74QHvhrT3pWg5rBJtXBYJBUHgFBxm52ZgNqUoFuXizcR9M7vT2X32LgzH9MSNeD",
  "key16": "4i4FBvdXJ67FMQWqL1k11JaK6NPQ4RkqwVG9N8UZCx8qVY78WGpE7nd8c1NKAGYimx92NRXMcts5VN58ddRimd2K",
  "key17": "4HYRkHUtKGzAEBiyP29BWwU5iKBXhZMv2KuqY9EmqK5LCx9DEnAMv3kiUYoP5zqfzaMjJsuFDevLnjDSVwoq5Scw",
  "key18": "2Tc3JYXe5ZgQVcs1pwo5MFdTAuJKmtpqRhkqP5aDEy8CA4gNeAHnqHsMoeLetucBnq53MkVBdRNSsEETMB9mMCNR",
  "key19": "VyarzuCYbh6REM4PqFaRRJ9wzJUKPhs83ZeM1Wf2UPSDR6oV753AE7noRxbpiFBJcightxR45jNqSJFeQpLLuwM",
  "key20": "2j9ytF9yT3QVCGo1iNNoacuh1fUp8igUaCLW5hPuYW2eoooC5MDmfT1KDEk83nPnVS4hXPUett8LeDokgu87F1Qq",
  "key21": "2iT11gekHjJhpDju5zSvk1C6LZvTxZ5XEusn12hGjwL4awVHt6xoN1Ge8TwmHmTjDT4rAAHurrVN61Q5CBHQ7pzV",
  "key22": "7gKBBvu1MgyfJeg7Y9uMxvHVmuxMM8CTMK1vVA23aAk8HaV8JuMSUmvoTtKQM6RQV6fmK57nS8q2Wwx75GcRvdi",
  "key23": "35Vxd15sF5DQBqY48DuqYU5oTjF9FUUT45LsqRgKkrVuHpJ7z8enEqg3thryym1wmNRyBDvA93vjwdwZ13ctJQNU",
  "key24": "rReVDc7RyyAUhU7XNTQTUf2waavDkMpsdaFivg1Rr1Cmo9MgbyA6aQSqW3XUGDskKig9Shzpq4JmJ4ZdyM7ygJc",
  "key25": "2WkfwNjYjX7HphSH8h53Waze9UxTYWpMMpeJ42ojMFkP9s89jJAwzZYib3FCnBZDyvsQjrL2LSbiuAPbmRUP3FqW",
  "key26": "5r3K9p64ZwUMwFuZXbdxcfX4ab4U9Dmu8hV5FuoCw5HmyjgARXxUpwgUHMQp9an2yLrwDu8g8D7hTephs9vnU2Cx",
  "key27": "5gRLW5XKyfz9NLr5Ap4c3ZAsa2JPsT3dbKzbJDDekHDCaZWz6FCN1LFfVsdnXKoE7YKFQStC61zMibNPDXDuLfH4",
  "key28": "PJqZwUby9xApaxntzToZZPfJR9ZL6Dsr7ouLnNpdFvAq6wsN2r4gt7YDGMgvkFXEfNZ24ZGfof8sTDZEGoCoG27",
  "key29": "5zDaVuap2v2aJF7zwyhmmssZMiC1tB4g1BXQXSkMaqUEu5596ha1T57V5zDBpEZ5sVNMJKQ17dsBPLBccB78fA8E",
  "key30": "4WA1hdj9zTuo9u1ncVuad5WYi29JTWaZpy74oifmJGgR4y9tEmeA67XpUrL6SCrgqd535BXkDcXvECZaMKXYDLPB",
  "key31": "5Zy5DP3mjeYMWHmjrbTbS6PcGbewbkzErTsvhPzXgUgxsQTYkNXfgpbemTA1muT2R32om7ypP7RPXNWWLfCwoH6Y",
  "key32": "2zyV9mqHZsWXwKJ35wQ11iivbTDq5WjWhDwH6Ve6AuCfrMmPHo47QzeuuncKZkUhsKm1qBikuGMrkKTvGW5LcGx8",
  "key33": "6DRZMU7vyg5HJ5QNKchnXAxG8gpK9s1fc6BmjBFyRzg56291UAZUyHTDLboq1WYHNezdnngg9Y952te3pH5sc59",
  "key34": "2H7M2fXCXBSQQW164z8bHVrZoX23mrjh6iJuVmShiyQ4Ff1zZZpxLKxuxJ8URfG6AhRdpwuQcpSCrY9BUCB8AgYu",
  "key35": "4vtgfsTX6RwsMHR8dq6FM3QoguDDjwyxdym1atQY8hEtDqKfZ5ADXsvJCnkzsY4mUZ39eesCF1deUMrhsgxNLXFS",
  "key36": "4wGmZEh26iYFSHANL9Mw9wMWqrZHqM2rH1UjckAi3oFqPYY4bnaQhy4PpMNWMKL7Y7Z3adrtj8z15oZkcKQ4B8sP",
  "key37": "4PeJPuim5jS57RkiG14vdKPRcttv11qk9oJFh4TJfnWmsvancgvfcf5gCsVwoSepkvsX3CWwp3xMPNMVadaDtbhn",
  "key38": "Mda81XnQkSF86pr2JUgz1g2aAT2YsauCPY14XoAduNCHG9YHDASQdLe81sAbSRGy6X593ypispZVadRgBE4AWCT"
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
