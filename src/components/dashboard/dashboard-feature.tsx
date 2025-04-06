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
    "5dXG2ku2q1er6gxKbdRMefmsXDFmpPdMjASwnwH6eBaWJ1x4N5RrtUTuC96trZwLd4CaHG8jAwMvCugm6CXjbuGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PF5ci5cgPc8uxUxo1GFjxdiUfjV5W72GySLwezqWUJe8Co5WY64GLg6T2vaeu3MoZbgG5YMEMLNEmjwYvxjQJYe",
  "key1": "3xcKqsQe2rCuAe3wVkRj7tvqyQnyWaB8RT3soSDY74TvnL5TxttvTEtxbSCPsx7oJWkoeskh2a6zdu1zZGkUQW7s",
  "key2": "3fLLr79sjxyS4JN13on3gEMFLLBAqSt5pyMAj29RGhCpBEicqCN55hzSTbSdREiMFKFMunewqQgatfeVb15SLnGz",
  "key3": "5X969uvLFbtdUQicmQyMYbxmdioQFGX7PUfHkNjTJwxDACyfvrmKvednXHo2uovNZfghcgJBXfqGKjzfUjW36qu2",
  "key4": "3aeA5LtU2HPuYiASrYyifnkYhCxdi6CaWcM5Q9dA58GHowFJauvqcz62zzxqSdBMnoLeVmjK8PkG4KPop4YP6DAi",
  "key5": "cah28ECQeXVHNLhdQS3a8BTSRoPwBD6GTT9fvtawCCmH3rdgN8ocq21GPUmo7vWU3XwfmPoRjcKanUXbGMUc9kR",
  "key6": "5CDV5cu444e8z7NT6u9LpmoGMuegL2vVkQhY36umzwaY2QBVaLNHuNSX6edmYHbbCxqQg7CkbnBqrENmytXpwC2F",
  "key7": "3S8rDB9d9Np6erN2bTg2qysm8K9iGP1nFnf1gvvctGWkA67JG8WxY5yeS24Ran2iqUJQNHu3kpNVAsWU1Lu7qSTH",
  "key8": "4GnvrBJdnXV1ai9v5VtsUkERXxAoy7tcaZwpSAKJvXxLZ4inBR9sAoTF5aWMqUukVfG5o4XDw8KXqpjb5AB9gEXV",
  "key9": "2EgPFeS9QH3vXR3B8bCWrvVkQ1T3ekkkhHrUJ3zPYRkWMCDeKvN61CbQvXrX2nUmgt2YytH5VkvNGbfcrVWqQudH",
  "key10": "4LPZCF7pm3iKYVwCtPmz2ReEybndQP8yKVC1rjsYfSV4f2opHaJS2dvJcccmnSXZ3soNqrE9x2xCE8bECt4Js85Z",
  "key11": "4rneudL7LDjUh5dkc1Z5sgBpcuRb3k6Yyijku123VGvnzon7cg73FDKyWdSroRhueh4ZbF84B13u5QdvnTuqL86Q",
  "key12": "5e1esUE7UVMwbfcGt3tmpw6U8jKx9F5cUmzd5aciSJjLofpoWmXVCpVemYhxew46HiEaXYCrgVgmLp5k5BN6M2ZJ",
  "key13": "5NMz7Crzy9VeuxdMyB2FBzv68q8DSDCHYf2J22HnrWNXqgdEPz5iaFLkLATKnQ2S3yRojtpUAW7EttVX7AE8SXxK",
  "key14": "4qB1apYXnHBT3qAwmHkVx2FgwNtTkwWkty2T59kNx2JZoABJv3RewnQX1dTajm4ANji6yvQaJytPKfyhAYpzwJs",
  "key15": "4UCPgzBbDhS2ybV2ij9sfbXjUpqh43xJmDcmkyrAxNRqWD9Y4hdkAcCKWoiYCjjU1ypz6K9gZK6pfUBB2U4dKCn2",
  "key16": "4Daqj9Ur4EM2hFP4ESck61oTiB5hvm93MzfeR38y5VCieVEAAugYqzetpcDjcAeNGuCib4Z1K8oRdsAcBfH1xKT5",
  "key17": "5NcGpsFmNrfDSsrjJwKMhUh4uUTxkbWHqE2Aj5ekUwgguWJR2TwvQLAeLGpd8eUvQBpqxavh8bvJeAzcE3mjJoBf",
  "key18": "3EjnEjdUhY4aQKsus1TrpwtzyGr1h7V2fXKBW46D9bo6Ej5P6X1aoNVHXa44tmmAgX7JjexM3yuQn93MktF5wEb7",
  "key19": "2TVA68ZNyvfG82Xnkk2CBUJ7mZxoLhmovHdA5R4YSJtUYRQC17YnHdFD8GvQUWQQgxeFC2vSN4GaVT4hUh8kmsaN",
  "key20": "4A9MMiEBpgWVhfc6fmbUiBpnErE5D8TjFgDcTkT3jbqYHiCBmiRzPvyiVqsFFEZgW45LHm9VvsfTCrH6KtYBJwQv",
  "key21": "2hXp2XwVRZz4XFXDMjfDKuiVF5oTPMcCngVQ4e2k45VkERem5efAy5H8qGUZWSVLAwjEDqn7XYffkF6LmDwqKiaj",
  "key22": "5SaABTRR37nKd9HJLY4fcp5oRLhHBtjGYks4nvGHXCxNrBpN2aSjSuszfLXtSwSQAQdf8aKwatcB19AAKeKpMVCC",
  "key23": "53s3DwZPQuYUvcaUmzeBDugdtMzJ8CCXozied94JS24b754fVECMoq6sUmbchTJMM7ZFohijRYrwVEQTHcy9SDAQ",
  "key24": "2m7ER9uf2eERDjmBRFHua635ciqqenjB8otZsTTaLK6LuTyAcHR3Q1efxMjBTeCGQHegvWma6Un4YqS5LswdcX9P",
  "key25": "38YiJx261zK85sPRrgMAy5sZz46gi8DEQfKL8QB4zmm7x4uVYodjrmU7NsUzv7fnnzQFKtFmfTX4zoxyGrUkT3Dt",
  "key26": "2KNaDedLt67dg9ZpH1ZwLdPNCzgikV2h5VAX5dZqBz7ZTZdBNMgV9bixpQSgvHVX1daGppwtuzR8n71bUSRfw6c",
  "key27": "w7T2mZrcEX2G4xWZYC9hGAK54h94TjmwJfeV2RNfQVJF2MWJNKyecQmdGaZPCbh4tSqpZYg5gXRWfXb7HcHUSQd",
  "key28": "RX7mb1HVxP8smDQdZ2MY9rR8sPGXMajjzWCkpSghAdLK4mZnC24URkJwmMQ5VdoMhPU2DMGR4vS9M4gxKfUbaX8",
  "key29": "3LosnkL5eeYC45CQoQcFNWn3hJJB99V1EHJVE9oKTPiGza4myL1wCpzzSVitfERg8oNwo74ewkiKTZ2GnM2Lk7sg",
  "key30": "4MRxwy2KceDxKkSTkVRkAx6Y6DC6WTc9vzfasR2MQZD3BEag2CdXiowDVHDeRnFQ8pjnCwMsNmiDedcvmUi5SR8b",
  "key31": "5L8NFJtffBipZYRKSFzQysVV937aYzRek3A24P9d3bHZnuGoBu4kVxGNGyK81s4my54pkaUwTeHzk5v4bkVhXHzA",
  "key32": "3GY4QfDnMmajsmg5zFe9VU1MCrGtpWqACefkbYVkVx87zhQPFSNxnELTqkYXVSg3qFZ5mmcDKyFdZzkYQKeVf4UT",
  "key33": "3yxioM8RVMR2yCvaguYyW5rXiSt7sSt9AWxVPfpvG7sujJzBBeG8YyBKkeCsEzWKvtKcswEqdJQMYLkm9URAYjwg",
  "key34": "3AYkGmn56vgTqXHxb2m1y5V7d5spP5bzz9TLNvhWxhE7bMPkFD5qDv8teRYAKNg9qz6YwQH9auHyXni3gaMHvUs",
  "key35": "2RZzPKgseqJZPiaYfUsEesHYbLvipLr9tQhsDuyAfPWPJTZnB3Lnn2BK6nzPCeevJ8D9PqdZkyY5dqhFe5MxVZdb",
  "key36": "2mLAUjhTTpuFPs4bgcLr3KSjSC4jc8dj9ivvUb15KFqGsz96kp3NMWUxDXrxrK7jjvRySze6V7Nx55mxYAMyeD1V",
  "key37": "3MCpUm1CdLXq13XLajf7kHHeW3UMrEJHQwt9dPFFJQbKn1ueGpt4Rt2byMmrNctKCMyaRAbBqS9GzZzvnfF9Pows",
  "key38": "5WbQ5ieVVNLcBguHQjShEBYdvhhyeGtVDpXskwQL5ZHanmFzBdA8ZzsYyQQP1NaWs3xzeqTrqQKxuGMxwjbjuxdZ",
  "key39": "39rzJZTxYCvtZMawMziBrdT1fXm7E124PabpUaF8M8e5keQdu9xsH65Eew8GFWpY6bmJCG4vMy6VDqB6BcHykQDw",
  "key40": "63zPtF3YFTYfqVrhLSf1nb4pU7wvKwBKnxRfDJsc96rCG5c9pKURtQBbWByRedtMmyhUmuT97rauLRe2AFWsKxij",
  "key41": "65q3in4A8nZcMSH2j2M6BDcE4WZYsy1yWNfRQ6JjKdW97bj3q4zsFdDWvNzYvmBdL6xwHCFkog9kpERjvsFkLEnE",
  "key42": "5NzEUf9S8VGnpB4WVj9kR7QqPEmybuzniwwUUiRHM42mL7VGk8nDqaYAKzAWYpGjAEVfcFCrujbfY3Fd1oVYEDVq"
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
