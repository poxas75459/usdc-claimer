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
    "cZToVsqW9e9BvaeVVMCJF3DQqnQ4rvW5nouR6JdCYQqpBX6gHp4DStGKMFyhZ5ob2d5KyrBfS8jonkM2ad8stJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfs7YAP7FkHEFttdBMtrBptRVjVP8ua4xUzabNgX9zcKBzBtRgvMSgaNfepdxvmgtzHur1TdjD4QcgFzFWeAGtA",
  "key1": "4cm81WmMNdENbf4vTFphyDdvKyYr3756g2ztTcqVBj6hJnbq8QDB2a3LyLzPFMaqJWBQBxMWtnVe5uNQrhDZDMYW",
  "key2": "58vWSK2QjBDZRpSvomqPMiLjG6su7wJAsEqmg7WWmR419VpwAUm3SwaPm7KJnoz4An82WZhL7ecsjJpg8qZL1yVy",
  "key3": "2cwUpGUNwEkj5QNuat1P9HVkV4K5BuW9Eg1KuLb2sonynyNZp1i6ndKzfTbPUDFMkpmGYWwAz9GkNeQ8gtuGSqiS",
  "key4": "2rRVdfyni4g7mHKMqjASoMauAMkN68nAzNoKxFFecX1z56knB9jAp67cVAazyoKn39ZfVnuUERakbHnLexkH3f3c",
  "key5": "4oTQvYLnTyf5B4BENnqUi2hg44bQ6FFoQeyUjzHZZgEfaULYidQrbrdDh4bJJQnCpmztCXioi1sqGPn2djKufW1W",
  "key6": "5QYJprBVdJCXufQSvw9RPzuoWWKsWbQ1SBX2wzh4xLhk96vFG1DHhE72sdd1dwWphyc4rtx5i5539NzBR1dB7SuM",
  "key7": "hGYcxW9rkMRF5MKzW21kcVHuTn5KcBsAWmDYNTyiwc6d9LFLBRWKAgoFetpgVrQAN9GkvGkZhLz9Dhgnz3pg9wo",
  "key8": "2tJkB8h4wiGJ1v9PaYJhQskaspVyWid1kHxz83mU84xLPQE5QQqbKDNUdVgUDR9Ky8h2drcmwZpbemNb3iR6ngR4",
  "key9": "5p6kRksgaq6j1EjAp2PyKiHidN63LFmQDT9h573BGvTVWUnehCjR2qDvSeh9s23L1hr8tyjCUJekcdX8QcBzZFuy",
  "key10": "5rkPUsrrWRf5xNxihQtKyHoFJxysfvka7sMHPRdbJJ2jHghK7PRMpbYDHS1TfHMs1QW8NzsrChFZ64owuNdiYA5L",
  "key11": "3rfff5jQpFCQFqVYCZQy78nhiAtBobHNsYNjNdAtksTZgDeYK6rz6KNfBgTNVKQikak9bVdGYejdp1CEohumU3cs",
  "key12": "5igXhgNDcCvFZRnSMJwwAziQZ5HLxYiXWNVgf6dAxzw9vbF3DCJKADkEn1ybQ3jrzPjJf24HXSCBwYq9qhJhxBxe",
  "key13": "3gKaT6Ao7aKYpworY7ih6XSidE8qE8rBFMdiJU9C7aqVTzEWyqEx8T7SN3j5fW6m23uSUtS1Ui9911PoNYmmfayE",
  "key14": "2yhavn6cmBPBUjySPS7KqxRSHYDppd9Tqgo3jmWh6fR7mdzdnmx52PDD4RGATfHiuHw9gN1SAmnQXp2SFKeScWnH",
  "key15": "2Hy2u8k9DTVxXjiwdypEZJ2tk45589CiTSfFDXsyFjp2Bxrhc7n1apr1zBsf4pyPyhPzWRwiixhEQBvaPZuuvfRZ",
  "key16": "559yWQP41fupCBp8CEEwfjwr6FoadJbaUtr3xBY6SaAcP6pq8Fp28ew5Nrrs9xJ6mn3dgmhPTxN1DbuA3HYQJFjb",
  "key17": "NPqtNSNhKrAqeX4AmCmAJDFqBvY9XVsQ9roeyLLVBqazaoGZtHNNLk2N6Jgb5o9AKpX3iqtpRgsvy9FXS5qSgZK",
  "key18": "48qVG7dyy1PdGdfbX289irY19CF6CqsEpCeiCwpDXRZvxvuFCFxMkeFtEDriDXQs35ETniFvGKPqTaiWhTwjiUQT",
  "key19": "4A4TvRHvYzL5G3o2BxxnvCWoVZJwZ4PMvAwbx7x8qDKhqVb6DYfX6TLWV14Cp8sqbvSHjCjvA6UfNxLeZk8GumUH",
  "key20": "5rHQQaiztXwbz3tTnK1VVF9Ymo5jCpjLvja9yFgRMvJm7MPCHsv3qk86Pkkn6WA8pwLhbUPPYaX8EgksCSPzaBq2",
  "key21": "e8PFTJRiCfL3cKC7aZRWdDaokfxV2QpwsKYsj32AheKdtW7ow6kTBs3WcmpiUHFCnSTZaFUYg5aC5bbsxJ8B6Hr",
  "key22": "5SwMFkVEebLvKbjj9buva1nugT4fMx4KsvTb93P5TTpMC5kbDo5fyMy79UF6h1kZxUJmuo9MTEfVg2RfJgcvtQoE",
  "key23": "3C6J8PqceMw2TjV8FHCCVYrbHFf8gXv3rp5WgoPq6bSbk6SNHXcGwzCFu2jX5bDRNf64FQxW54EmJbztGHagM2Py",
  "key24": "5sc9W5op4ZtXYHHbdCfTDzWxNXm6cjV1rBx1SqiUYifRWQzYJx9XFByAY6PRL5BDpYcf9y662BTDTsz1YSAwp6H",
  "key25": "66K8bpL2Lc2GXB7W8XcDo6JTKeF5S35XgFTd1Z3qG58vkFd7uQqfyYvaC3pMJkziZ5ABNH9qqambeCZPthipTeiP",
  "key26": "dX2M9FF2HfrJtGzgFTf5DKNfVqLSqdsaHxKjREmonqL5YyWJCRhbE7CTSwdb4JcJq1J4ZLfY7QC2PUjWCA7Hok7"
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
