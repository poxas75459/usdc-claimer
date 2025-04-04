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
    "3JLqrLmu7JvvYi1SUvZuixi56AmK3eSwf4wsfgfD2XwNPLXfAFR53iAfFbUGv4ACW4jYV1h2S4u9LM5MBHc7zgFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHU1XGyiwX95EnPehbBG3nNn8w16wGHeNtHukG4BhuK6xhJXtnRH5C7B8tDwrLu7Fe8hB4Cao4FNQpjzegBRsML",
  "key1": "4kzRJqeYJpTABJ5pceeUP1XxQXJahzZCtbqEzF1nX9Q224HSphZ8wTzCBxZfbYLg36fzoQ7bLe2wC2ASTRSc6KtT",
  "key2": "6tXvGswr5gjeVLcV8dQPHbdDJ8xSMqEXqPVkcn8LqFgFNBJWbesZtqdezhcvBrEyQhRYXwm2r2sXgbpnWq6ytJL",
  "key3": "4HuYVNq95hdFNhRjQdD6DcddQoZNDbGN8qAotiHRSDQmwyRrkhQcTATbanPJhSDQj98c1mdYPChFp6YgkVSwWQKp",
  "key4": "V1Y6W2EPUGTioiJyoJYV1DCGjh21MPDCA6Qu11hSNsSKMqgn96gToJ9ao5yXzGNNLqoMJqybrQPx9dh5q8DRj91",
  "key5": "2uNcAVfqRFvBVb8jNRzo7VQjnVSLE4qzjzxA6aHnJW9Roiq1LfTT6EwkNpmmaXeAb6RF14LYhLt7NTcF8mCSVDFL",
  "key6": "4LfFwxmWDQJHoMqDcxJVyPRLfXGoDGbeAUwWcDJgAHNW1NXYEXm7Q9dPy14KHaQo2E3Y6q16o9vuxYC8mg43r2k7",
  "key7": "3aGc2HAqBvaWxhDwDJqizEhKyYN5N3FtyPcq2gnn6y4sS1nCFsyfLeApH9rXjZXUZNuRUTQAiCkHCEPgBb8yYTZM",
  "key8": "5cWo8TnxxVGiHMZfK4f6RDidPxVrg1ckrByc73YUv5VhVueAZrPwgHhiH4X3L75faSpS5pdMoDNR4eeu49kvpB7L",
  "key9": "55usexMvnyFTxvNZwdq5o919AbaxrfmM66jmqh4Km4eQmyeHv4PbL1JFx54cVRBLDispTy6qaJpuedLoiHNC1SAr",
  "key10": "3U6zKTpCyNhGBafJ3THAwrMHKkuHP1gc6o3CT9H8dwhJCwQpi9tfNvESasqNimTjhZCo4CMw15jEwiS6r4h9LKjc",
  "key11": "QyvtzwPtD2PUxV5kwQk1nAD9BdxRK44AcWD8fKdZcugcTDrN1LPGcHjzeSYJyYUN8nW8QrENcZS2yPKJPQhex8B",
  "key12": "3jSczKVyYCN9ECNYpxq3nCYMTQVvhwxFPPGgAAxrLbbacv5wfRGs8YAFygJDriguSRLkUYNEnLfAZ91KEY7AJ3WD",
  "key13": "MmCpKVU9fE2SVKEnigs8U74bob36fa2Ny9uRQfG44dHsqaPAAYPC4pKFByjZXtyAQ9X2VytexM7XdTzVbufXdSf",
  "key14": "WnP4eCgvfZppu2K6RkkLthVc5syVaWKoUFhsyaSLWJRPmnMpcCYAkVmDMgzQVV2nq9TCinqtQki1qoHzTHASSDm",
  "key15": "3ycDQMMeqt2ehk9d7Ep1CjAL9UDZq896pB56xmxqpQVRnMhw5VsArrb6Xa8hnJrpFJbe6FgcWL7Dp6iJANsGksDt",
  "key16": "4GWhEeeHxoRuAg6tqVRGTPFzvXhfkW1Hpf67bmo4wr9UBfxPLYZzPa5SjySKehTs2LsGbjyJ8xcmNrnRxccZFcKe",
  "key17": "PShrxZMc84Z4HNBizJmDoqWZ8sGTYSJmtFfWTXo6kknQePmQmU7HrTsQz2vAW4H66SLi8hMde5YbMaRGyJ5PMTD",
  "key18": "3p3vSE2QTAgCCvg56ifqQekjDr6fRHVotfvfs34ZkdWCCMJAqNvXsVsJyTiHW8jqPdn9XuBjxkJhmdrDadrGqPCy",
  "key19": "5Ngz7hDDQVrTj9LoMhpsLoMF8cyiM2eDN9uLHC4f5HcBHoESJDWjF98rKSpFGfaB2rsZhciopfNT9DB5b9YPQFtw",
  "key20": "i8cqDa3o7bTLoAP1gijd4XA6iK4GKsnKufUqtfN6S64Ebt3nmFoLuVEVz96rT6nEQMvFCZqxroxrpP3QMf6VNkc",
  "key21": "3RaYKxm7HRbUrXD5MVYcezpeS6Moa8zRJvhUE249aNoZs9hb1gH7Fm3HYbmf8X2pPJ97BsyseMn1Gxv1zAbdu6zE",
  "key22": "5vRqbXVmfy3PQBiBpFjCEhzzqBS6PthU5RWewy7zqURAk7eRopVjAzn1Wi8vQPF6F7DhzirnXmqCmejEps4rMQcF",
  "key23": "5pPSW87sBn1WFbYWGfuJePNxEtxztEpgzmvpD5ZoK1bNwo12tP9xq9i7H7zKApbCfiYueZwzqZ4bbHcn2NEPNnE",
  "key24": "5FDPhKkGjynycRfsRWmtTxHncwPSMrQXfcr77MaaDjKYinUgdFyymvhwunRHJPecru4BqgAjQhkrrjjcDY3JijGf",
  "key25": "4AaSqPi8UprVJhqQKQx6Qtorbs4T51fFbaZEzpjpvdMPB3pfgGJu1jBLMfWGCMHzNfAmkxf2K3X3eQSCGBknKbPc",
  "key26": "4qM29esizsjBKRWAy4HdmcT51ndj6kfZjCzpezJMd3YHdJeVSyg3v15fvifEUE9pDSGNas6Sp1cXe62BYiX6UDXw",
  "key27": "4prwjTWQhhqgbtkyD4M6d5N2d5oREfsNAGSSWZovWCjiZR3YYkbmYt14Gr5vnhE1EpeNdzpmv8FzvSDn5s734zLZ",
  "key28": "4ShSSVAUykC7waPqHymD3E1RJH8P8b8yneyCyi7yYTeYPiHSwt3ztmC4Xzc2JgqHjaM7exRjR9xpFwMsRjwqh8eT",
  "key29": "bbfMY6JHu8RJrX41R9Z5LnUE51jyQ3JqSWnemcLoxCFhrRFMZ5yXwNLcGwcfy8DFXnufVDVgNuyYZUe3ajZ2LW1",
  "key30": "5JH4CNcL1dFn1w24aw5RyAsrop7gWWPucbRnsCHW8QYXtTsF3i4ZQpJ1gU7AibLbZX8fbLF2DcTr7zYkWGs81bX",
  "key31": "iCiYmnPp7BhrJeNcowihu5UtUqGAD2XwZSRhyTXyFdJJbePSiRXNmjbq1ui5fZBucWEvMA91BjDhkCMdN5HfUzP",
  "key32": "5vWqkuuLkAjKmwe6geBUqM5ovBPsrVb9MV9AHS9K53L5va6Wa2EyoRxu2UXPEpcZCT7H7qiB8HQkGxtCTQpGFaPb",
  "key33": "5vkHgdDjH5vxbJaFywq7r3ZH2Gd6CcNBLiUfzub2NfyRZtdTNmEFkXRawXtk9Go4gTxi6Ekc1z4fD7ykfX6WjC1c",
  "key34": "5FfC9hVmQdyF6ZmGjsbR1QQZkWtqdmetEWsCEWYDxPypCcGviXux5VQqeUcWMp726VUKpfTQ56YcyuYkPRY5HiZX",
  "key35": "2kJo2PL5s4xiiqLYQHnqx9GvWvn6PcJAtjWPC7F3xtiX2ZqFCok5154DJErTU72TwbUeWfR6Aio2tZdvcnwm6PBC",
  "key36": "3dpbw8RTAPHcUiYLFeKZ5nfPNbLzwAVgiJ5A4X746Q8RRW9WEGxJGQppSuRG5twQ1LZrpipLefkeSpvssFoUL1id",
  "key37": "ycdFHeUp9hwZuqcQDQGmrxq9LKmmqsC2JUTCQv3kfGyxJ7VCsaDpVjAEKwV3BfHo271DHgiqygHn5ivYjQDHNbK",
  "key38": "3De8eEoNvWt4Y53b46HQa4YS13D3dveDGorAZVi5ktvyDToJkukGmSdt93RNT3vec69jPiCrDePu87UvtsSHtiga",
  "key39": "65VQxJZmDkz1BR6CAz4X4zejuYYfsmhq3tHaDFQCkwv8VZJwE2dYk4Q8Gwq6zeV5LfSkpniLZWNWzxaxACETFgYn",
  "key40": "4vkeMpbLmq88yKKNr4JBbH3ekga4UuBUtva911jXjSrmbEzRw1LmYxyX8TaSsXhCXrzPuEpkSz9Uez9vyjtChXEu",
  "key41": "EC1Zf73W9C5Gp4cKGB9cX9qKE38N7YFdtdHT9j5w2NhgZTaQXFPvrPBiXk675QycKXUUuKw1g41EeW6jGyZAbJj",
  "key42": "564WB8H1NSB4s58nYgG78dvkKCxKwv5mUCC3gG5JzUEusqwrvu2pU32cKYJvZqzBX7vFY1qqP92A4Ado7PeBYs3b",
  "key43": "5V7iagPCic1FqTHd1FEXX9a1bsDhaAMmSXUVKtQ8a6jBjE7mVqZR89ZCF4DcdH744HArkRD2BtqpFALqVcntVdNe",
  "key44": "4C6BYa8ziGRoQVERQGGEcxRcrvA9AfCoFGugRwQ6ghLj5KdZwG8wYUJ8675g36wMgVeEstsSJd3uLaZeFZCeWtxs"
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
