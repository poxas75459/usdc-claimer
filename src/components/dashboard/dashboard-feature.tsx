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
    "5YuKknSXNcxD5QUnFYubHSGgyAuREMqWvTeH1hrYm2c5uTcH2dti8MPvnk662qenii1ppQtAgXcpmP8QerGb9XT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxN3ehZFjnKvTgktyTMEMKTXkzUy9n7p1Ms3r7BV2LeqVQe84vgBsoWgPgAwieRpQ8UZoPVNcCDTYo4pWq33Tm8",
  "key1": "449MinxSkEGfKx6YRpUjZnJNsKZQiBzJr6eVd1CTTgfEYsiN1PU84wk41yRBKcs7YKPXYtd1NBmq5HY5m85DHkoP",
  "key2": "4hUBZSg6qCwp9q7iKDUMYT5hUfunczEsXeEpfz6UR7uAngXZBwyhNVf9e1S5GdxSqGL6JQLBAdD3gHC8Jz9iLRrZ",
  "key3": "tTin3GXPjnukMLhjw5vfDLSRSoBBFCpDDNECE1NeRJvjGNqrz2mDGrfzAeg4ZjSEqtFdUcJqPZQuGXn5Ee3dx7P",
  "key4": "3KwzbK67y7JdSUk1eywfZAhYKk2vvL5Vit6sxYckJnos9KeJFXtVN7v2pk5fZtZvShubqGARzkwQho4gHJ43NfTK",
  "key5": "kFQrCarGsYTVNKjXMZAaGgyCFCy1hdHXF5P5Wu457pKnxh1c67E5GpwDpfxtYN5S5FtDK3ref6yfyM2ac6wZXKc",
  "key6": "23V7RtM6BLQZVRPheYecNyt6BGzT54rYceNA5U7GPVyWig4kGx7r2UPo3cygJb7MVMWqfUUudeE469fYkM3JP4YS",
  "key7": "tEZCdqqaatfMTsz7e6JCKpk5X7bvDnnLhyZeepiHPyDR9LxpBmqanDzWH1kwAMPnKJsmHwAmMCfTSYFXnsh5V3z",
  "key8": "iyc1rEaUvef4cYVmoKY9qo7ytvYJoYnBGjxyA1rRU42xhCQWVDeyHsFYpEPstpDVnnKJDLmGMotUc27S7BziNki",
  "key9": "5EYfw3CnjASNtsBWehQ4Q83QE5PWXF98c1xRmJ1yAuAYRmRuzKyrGn9Ei86X1ZhVzuAy5vAjuv5mZ3FqpXricMf7",
  "key10": "3i4xC3vicoceHuPAECSCwPc7UkK6xDphnm2TNmBh915rU2CZoNfQDWCgQgwfumfaDpaRLKpRdZHSHrQfvmbT3R1N",
  "key11": "62kc7vVNeJi1r9puXMdQVCTtpj5BKagRkf46SCVUw29sEmSt45HQFAX2dXedpxqk8k7wSsY53TeNXp2vgBJ9E33j",
  "key12": "246ALXJxs441ZrGHktFdwy3jUWqhNVvBpWY4vWTgX8iQTzMB2gkFi9mHM2zv2LdpNZZEPtTQP169uujU9RZGGzfZ",
  "key13": "45vuJYsWi9ModL29yKD7MbgpNuUkyfv5cCibWpHzzdy7gayoJYAvYLabm92HFTt52kA3LytcRPbRye9zqmy6JJUz",
  "key14": "bwiTV12fHykpuirLWqe2baFw1Fx3hqe4rzNoebrcnvNsQLdCvjgjxN3h5i2ezGDpWEpX4YtU9Pv4KAFT8opTGvu",
  "key15": "Vpx93KCVTpjX9yxMJFcs9x4s6PgSrBqh7MjJ3tFwF9gqrkYHEnpWcfcobkvCYW8ovUW2UZVdheYmCrhDjQ4wsg4",
  "key16": "255qr2dqjBgnGMP2qGQNJiV5infptjQS7ZWQC6NhGwXfMgoZumEjGoGd477DWDHxvNhArgXwhBonpMMESBLmUJki",
  "key17": "5i1nLSoZaLXBGv33hBz282tfot1QCwJNrm5CB7x76gfT5WdD1Cf9K4hjHZCFBdXcU9TJCV29SFq2XTb5gqDMsDcJ",
  "key18": "3Gix7TS1NGWhHC5yK9K94DRUASSfczAcvt4mf16snwUEFwxTsRz7jH9bUypFMR4W2JVdVBcv5v3Edzo2NvdfeEzo",
  "key19": "5cfUTrhY6HmHNGjf8EaQu3xobc2ZLb5MHCqbhqyjbSKPNLSQ2SES4azGCAjsYK5XGPpiQbpb72wffsayicNsywmq",
  "key20": "4zs3QJT8Ptss4iXTf66vuiy5qFAMTuyLF1kab185EatCfySs8Zc53fq9EBChCSTerrvKRqL8JDkSJTufTwMt64Gk",
  "key21": "4pJXZFzZN5NyKp9yg8iY6kQWHg8JEpNyR9cLrE5YZWGDzcdevUfbeUcSFEWcTMdvhx2NtRtS6erfVYyyyQFmHK9u",
  "key22": "4XwJMkPBLq1TdLTvTUy8g98cpTRvLK4f7RviZf7T6MV55GnwBgashw5PsgJWbLdM1Yy691w9SjJrxj2kEiRPhPM7",
  "key23": "4jADsHG9KJyAQj2TSGvCgK12mvkzi4fgoNRnbUVxgxmVTbNjbeNnGKpE1HWSYdwwTRnghEWhdjWL5eKVRjHjrmQM",
  "key24": "2wijWiLCEfocbScekKEgnjrmYZfvr9Fn7EqcMJGqF55xg544NNR6U6nbHLmJftMurUis7uxw86Jp1Lk3LgQ9t7rA",
  "key25": "4De4Xy8iF6i73RaDJcts59ux4R6VNGRjq41J7MH4F9VBzZxYbcryb7v5QASGA5CgaHGjg1zssDcSXbtZTjCHc4Xd",
  "key26": "4Phv7jFNS8nhsEh2MAAWoeuLxs872CtEwSVBNyyRE7LxQccHbuwShSbtjks2VMefVkwXYt2vutgccsUPLJ64PV9t",
  "key27": "2uSB8wzEKcUVhqN9ASBeuUFi6BU8mquNy3akc5MkPfkh34ci4HBi3CDUnwTZJsZUdWD49vBEXTKk9nZdvowgmLur",
  "key28": "4jLfNKjewDGQBUA7uwJNnQGrTGVfejCJc5BN44NLcH3hdZ18vZ2bBnCkaqBKYuUt9z7yXoAe87GDsdDGEwWjnJ8y",
  "key29": "4EtTqDYHqMAdCqZQBqAr2hxp2hSraZferUHCcbEtPxwgZqB7yfa9gikx866p7FD2DRgUcv756q8VpuNDWAzWVEm3",
  "key30": "dVy3EuwWmxvMkQJH9sr9nThKFLM5hjQRE6cWtuNJT9fWJdYr9V1HfqBSyr8j2M1u9rDbt6wuTHfMnsgfSDBGQ3J",
  "key31": "2MFDtDQXjzoFcJsiYMqtF1Du2vXK9K9zynTXaCXdas2ssx58DbwGxhBmP5Tcsxi8tWGT3wpX8Uwzg44zTWuTdXcE",
  "key32": "48e3JCeo4RC5brLm2eY3AfQ8F7GAHkF6VMJfsBzyEZNziTvXmPfpRvtWUEUHMReUJ3mZH7fg8n81C3dwb2nR4BF8",
  "key33": "4dJs3cXsMS1c34q7uFep4wsdZqWw8x5S5AzDK6ZFqDXFSUB1H7De1BkpJXvGe7rjgrfc9siYcq3TicpVGZxMfeTK",
  "key34": "2Bi2PcyB39U3iY23i2b5Bch7A7auhaFSUePfY1LHPGexhQXdZ3JWidV76Am99QXNRABNXm4MwJfBpKuekPy7HxLo"
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
