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
    "62QK81ZQpFWQR5SAZPxtaN9bjTvGG7RohHTqB3S6to4CqDf9Xu7VjoohvCFEk75RsohmUpFFTHodFqrFRgyTu1Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndgvLNX4THMvBapaj6US7qF2aoxcD8JsCzWmppZX7TmdwYQd1JZc1qsZq5Kf5ci2mp2qG6DSXqp4s7Zf6b97UNN",
  "key1": "31mRxdDjoY9YeGTSAxQFZUPbFSq7HFHnFm4ZD2RcZase1tWzAdF4ggY9ZsV3EogWAYWX8eCaGW6dDkPS45cN2hy1",
  "key2": "2KtGYKQm67XWGTxhRd4C5SyCKbQZEqxugbny9dmFe6eB2ckALZ1iDWUpCGrUvtuvs5Ur9QwtMJt8ujNvNcLb8XoY",
  "key3": "QNToS1oLh68mh2Q6EFGkkJYR4sjdRiSahSwcYLkG1S1dUPmUwuFUGxQCm82U3khFp2NWEe1S6KtkDibkd7GjL36",
  "key4": "5wEHP8F3iDoQ4ggyKkkq9Jc1W6ZnsNPVy7Q2oeEnnNR5geRTczpHycXLK9cMHLHFZMDqBGbB4vVNcDVQP9cmbZEs",
  "key5": "3vbCeKcJvWGXu6tfc7WmeVbDBZUxg44LrA9pLjnV1FFN8euL7hvBQV7TpApBQFybirrTFhH6Y3LKYdbybg4HeDqS",
  "key6": "4Eq2nB8GS7zH7TtpqbrPx95Ap9o4sZmdGHXiJwQLbxZw448bBE7xAW815Ht7UYfJXaLDsviwo4G5VGC1JRefHDfM",
  "key7": "66Yt1uuP8HRT9kVNp3yDsXoK1z4DAUQMTA2kBr44xnMAepmhMyCU61vAmjU4KuMxqMuBdEDqz2t9HPwpzYWuw8Be",
  "key8": "zDGV6ybp5H31DuhhssjPy3BRJZYdHKe1LKVtvHbJvCcXktWRx2oqQTdkKECSa527E2agNxY4wRR3gBK18AUUhdr",
  "key9": "47iFxAnA2JkupzJ8GrpbzXFL9dxxjMUGjRk4HJSZNNSr5e9dqJT1qYtks2pkNDfTU92SYr2nf3j2bJbRT1pLZqhN",
  "key10": "dt6TeMBFhSA9aSUAgBZxbUndkrM8owgxTRmfdeFTRW1Kz52bPJMLCNRS52TRzaun7VQUuqdHqyRpk22z4GYUBfo",
  "key11": "3crqEm5tWAjMkNQLqw7LB5PGAgoqkdTAiFbmDXkTK1eFscdpyhR3KRAVoM5Z7A7mAaJ2PtQMkA7QZvYY1Vqq1B9Q",
  "key12": "3wH3UJpvhvCG6842VbHzXeuUvtk89m8QahbAksNvgqnytWsi9ArQoTWvH7gHhiWgJxHkRCWGdQP9XKhBW7m9jTYk",
  "key13": "2p3cGAGYGXxSrSaaQEjhxR2RbBR3uxLQs8ZK8QuC3rPeziEQ4veSVJNHenrF7yfkKDMJtQ64H6UZJHrbbYt5ACpY",
  "key14": "ZHXWhbCWo8QDFBwWwgc8RYsmKU5RGXx8rK4t1s8SbqeK54FD4FZGdQHm1qtcTYSBhntzFaRVGMV6PFxQmt5hkDZ",
  "key15": "211A3CMAwS7nBj4kkhcZ6DcUnK8B96LAVhZGDhhDGtguM65yFFMz98LcWRoqpmB65qu7Gy7eZasYoupoi1pzbE3Y",
  "key16": "4wMaxfQQZ7n1VBUDwE4fMBwRbgnP5yfCm1gq7YwYrepMUjVP7Fb6gqpmGWt6BkZ63SKQWwJqMebH9EU3jQrNk3Kd",
  "key17": "48JNXtjZW7aVC8pX76rJyMUv8m1nDwfp8FaeeHwFPJBJUzvrZqQzDYchu7cqMuWcaPUi7uEKphxUYpVyFgS2obDj",
  "key18": "5PhZk9aj27xZRhfYKzMfFpH7agJAg52JzkfVAYVt4xifrEXjkDVUnJF9bNBGrjFpZ4NnrBHKAw9sN9CjJjAugQc4",
  "key19": "wdu5ENhagH9SWdh66v9YUhkTUdGnBZMnU7f47TTzy54sAFGLfGpKT17dVjSHQXUqK9qHmRV4zYQmfdUbStzMQyz",
  "key20": "37UEKji26RcEAzGLkN8HdEn1VDtWaS5mEGYkeZ57b3WHUqHyistjAij9LednEe7Huoir4LAgBwNBD7PcpXKzWcs",
  "key21": "5CD8bwdwSZBc2r1PmDmh9bpoBmBhZPmkPsvwQHobij9nChxxC9PpZeG7A3LpjzyoL6Avb8rFAPVYDcy9zMnkvHSU",
  "key22": "afM2Ft4n5fA8ye1yU4bjPVuSUbKfpG7WP7BPGLgqxKmG38dkCKWgtKnYsXBPWpjT92TqnUBdBmeYUMpBMyXYvDe",
  "key23": "5QKhweSpxVLoayLPLEv2aYkQe9erXwn8nSwRy7CXddNiecEpWU4FP9AugoCpFju5u72nPPXMcbdjCHmtu31sbFxy",
  "key24": "3VqJ6YRajQrxMxLDTnpyh1d9tevqiSrDXSodArGumiYj7mqoJSDhgBUhHJjiRLJa6u4xCVD4BCgTMWNAJNGyubdA",
  "key25": "semV2E9DnKBkZmANDX8HUHJhFfFgiJBUdovKhWiSJqVrdiSJgegeoT6pcQ4wUdpuvL2jyX2fY7oGv9EW2K7qQ55",
  "key26": "2aDVF9a3W9TZ6mqz8EsGqUsV9qLB8zNMtrLnsrGmRdeVdYcq3ff7thwG2q8JedqQNHe87tj1fYKRTBMBUdLb45qU",
  "key27": "3mecst3TvjsSHr7dGp4Wp6b88RmPgTNe3CaDdLG2r3GSEsj2tUxh3YrF3mz3DBBQjihqu1dwStJMT3DiMZUfJsUP",
  "key28": "4jPg4xohx4ACezXT5eq7eH4HZeQgoMg6361yHhgjAEwPh9a8se31ZnYJzUoSjEtmaDLy4putAoS7RDby9tqTzzsr",
  "key29": "KXusSPpirZpR1SnvSH1TrBxdbATPZ1sxgYSRM37kFJjR1NWuf7tY9n5b96Z6C7oEadtxJkzoToym6EWv8DumBUV",
  "key30": "37MVWHzENsfBN3vtsVKaMbFQJR4LCBpaFenethzhpLSpGDCAgjTBdJ9BMfHirc2m6FkfNbAsPxcB4PsDMx7nB5ni",
  "key31": "2kivzb6bTzXgamk56qxeVmzeChKyv7txYFrqYaRffRqXvG9SrcekjmDbGebpeha2qPQ6bztUpLWaJTJB1b8qqbiq",
  "key32": "5JHouX7gKBeEAhzk2qAp8vhnZkWf9NWhWKPANybt18mhGHxhhG6GbdNmZ6H49v3GPAW4uu6Mx3Fa8yCcZ68ZJMNT",
  "key33": "4f4j1PFpprZubGpgas4Wy1DCfU1C39iBx6cvaACCXYwKY7FMzinmvRSQLseh6kYB8Ujz58xarqWMgNhW4n16iXtR"
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
