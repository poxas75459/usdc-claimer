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
    "5AjqXBajkKWT8VV5Qpuy3h1CFmqU2wUnd2yWMNyxJczJDgAoLQTPRR9A279qEM3UjtoZZ4kMmks99obgAn64b9DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyRf3Uu9odpM2Wu15tWGLPMYPrq3zqvwFsokJjnbxDRTbq9DR5uDPRSs719vBZDUsWqF9oFg2cR5uKr2t5dPPpQ",
  "key1": "37T6LSzvBwDj6z8YyJUWqwmdkbkZ4SfJW3fUHRbZcxT6a3si3LiV8MVrxCSrwnqt5fPUzJVY4ZMMcqHCefaqdsL",
  "key2": "5T6iqXdLYv63Z2Pi9KVELu1u3Rf6DK5g8VyVozqEEsBuuqPmUZaotwk6fa5icorh6RqwgSAVkKRZ2uBAx3UPGYJA",
  "key3": "U6ocexKM8v9rySKsqpzyJPdzhZ9TxzuepceJo3EB32SjHVyqabNtFpEJVDbTLNKyeJwr3CPgU4ArxNiRfnyThKM",
  "key4": "4kardyX8zvVQ9SkJApnq3PGVPSvLwWCRRg8gzuWRpF1cNvVrjdSN38jAc1RreKc4Ss8iuNrFPqVRGBs7BGAjcfmT",
  "key5": "wZB7NR2Db2fDDaAxTDXMubsszTBHwUKij6GVtG9AD5KvruhRDqBenBXZUGzKSgvJZ9ERpFwEV2SpqCuUknTFstw",
  "key6": "2b41n3PG5YVDytLZeQnFj4TWR2nedAy545Qq1kFwgorfFcbuaLLgA4wtSRFLF1LA65nuEBEVyc7rixaJZffNuyea",
  "key7": "3xpF8cm8MTQoCWE7enMea3XgRfaeUeYiuEw9bEsbsD1MxPoeKfrzs19ZJtn86nkmTUHAR1Up4WjGUxPtJ8fPYLce",
  "key8": "3HjahpF9XCAkFKR2Upnip4HnuTcaLwkFn6B83WcQGWj3gzHCYZc6gFt8qwvwsC2bwiyJzdKsc4RKS2rnAZBWLTaH",
  "key9": "K85QcL7NgvQ1wwWce3m9tns5NHoD4UzRhA9hn5vbCSUXQgbGmvsypYKXXyM1DSqXfXRmimtiaf7QXvxH4EuqgdB",
  "key10": "4H3MAq2JFtGL4zHj74Hb9XTs2RZMZ6E21HomXtSVsQH9eoySxFPmTLWRuox8hXzSBjLsY7AKHDkn8uQ3M2fDjnuQ",
  "key11": "zwMxdZ6UxB7WnxnP4RaNwW6A6TStb1Nx4Y3tgvtPEt6q8SvUuEuJKfnm3gTgErHAPKNcvZtjYdh9DZw26a9caM2",
  "key12": "5Z4oWWDUxajoi4AMRKfF1oj4Jk5xYgajNBH6Gwt9X1X2B3iKr1JAK3XX3vD1EBQoE1k8KH9SZHBpFGZNiTNcYHGU",
  "key13": "41tvtzRqFuyQRBoxPvgK8858Bw8aqkQdoVCKceRzhGNt1PXYQ3QeLon1zkPGYv5ArcsDcH5XcvA8KXi6dTFVSzVW",
  "key14": "5ftdoVApDgG2iwdNTRSQgHJQar5GgrzSvKjQZmsRgnCupjY9brNysMYz97hEzKuMevjXafbktvbuQP4pqkML7R3w",
  "key15": "5Pma7t3tEQHMgUbVVjHcx9BaU5gtet1Srsn8zJ4dBX2rsWuySQ62R848XCv7qe7VSBKs31fwyKW2mv5gjKyhHvVB",
  "key16": "32bbHKQCL26qUhZjEz3iUhU4UCRW9wfGNwSxZvDApeyzvnC9VaWk7oN1SqKiJpWJtwRzVtpDTCfmsrVLjgXDhZXe",
  "key17": "5vpKdFzYozypajNWWvdBnyxcVHtVhkUrVNj8BqtEGkvwnekcqKtn564GbugKKknyxniv81KitT3HHF25SrbKXgo8",
  "key18": "UcxrijwsALd3nBT1YfhYZDJ6zEmZTFoUH954cXjtXKYkQBxeMUMqnz1NvJoetRWiHTk4ZAyiNXTx5pUi5hmZBPS",
  "key19": "3qpcp63WGan9oLj8PCHUxzYfGXKTH9jwJ3sHk3fa8sNnBdwCsyhJdUrB39zYKVeDTzs5Z9GTbtaPyJ3WqJGFDH9m",
  "key20": "donEdLNMBsdv7JsiG9p9dxSFUhEZ31fZJMwwGRtc1XdPLaqgSnqfS33LeedXa5CHj95w62iCPQWvE6ZJ8eSikYj",
  "key21": "272TthLiiSBucTfpbvPpnt6gxv1f5bijQnN792DnxmmzP45zS7H4bqk6oF9KvX2oUVxPhQCyfsbtaotS8jiaorxT",
  "key22": "5AvHjUtUMcraSSv5J8CeMJZuTPjf1m4wJRd65ntmRHQ96sdLio3Gir35BeFERxDz9Kctm31zQNEnZA3i8aRLMhkX",
  "key23": "2wQwDWTE5Pgot4DMVxiUpEqsW5GHmEbJDd85MziVdM3dCLXypnvKXLLrjMYGXXXRH4RpeKdur4RmAfSLw6KEeBBA",
  "key24": "2HqomepmKnfne62aShCvv8UYST8ztC2nnW3kKuMnexqZwHxisfQFebsMFwgg5McVMh9oGRVH1pgfoqHba1K1KA2m",
  "key25": "2B8MVvBwRJgeNfzqrAbPMzssebxQxujyCy4tHYrCsXJK2W3kfZ6PgcMpcCdW8ybkHM43gDFtEgLUYnqMG4khvbEj",
  "key26": "52EmnX8gZGLAWQ3dhoHWgywrdfZGTGBJaht7VkVWvPJoDbidSRqXTnnDxMF5c4BQPccPHHggxwcFDVbnu5d28szZ",
  "key27": "MuUUbbBNFiKP8cL2VCzs9ELAwnEb6XH4qTPaa32hkrAhDaPps36C4fSy4jjhoYdiTFbY1Xfzwtr8hypVVjRudHV",
  "key28": "5ZTsTKYKfkqSi2E3tZs6pfXH9MZBxr8qhfJmvytZHs81mWyRBmfLGg8JiWkKTj6bK14dKXqfZCz7jY2oWNhcEUCx",
  "key29": "4bHGFHR7G87B5U8HfMoZxApgCs8mzT9jsnw2w4YUpvqRXUCbmxcZsPTr8APLFppvnRyyvU6QhoRXXjkaB7ZSdpe7",
  "key30": "2J2G7cuch4QRD5RBze2qEsgDxjvzWnrYNG3cjmzVwURXiXnEFfX2C7tHG3QJG75WApG66HiJNmWzpKmLguo52m6g",
  "key31": "5WRNpMJgmpMk8XXfyLQXdPH4nbioAYdrqoqgCo7u5mxj8k4NyuLrNcLcLg6EiTnNeXHRjknSVaJzgNhdaJdEEJkA",
  "key32": "8t4TkEPRMHdfyCvF8cFBw9FD78FG1kP3o5vwdM8QWxZaf8ps2wTrYmor6ehG7EFvwNzeMjwsCYs725ohC41Xpez",
  "key33": "2We6XKQbtgacAYQzkxaGfgmyPHg8YLbTtzGvhMvf1teywhGhVnu8zrEnJfptxEYC5yqjkqcq12XizB5qW67SqPpH",
  "key34": "5AoJoAKoYwiJk8L5LmnvUKFUKkHkFs2gt8Dd75LgnkJQYNHEtCfsDNeUYk8krsedQpzLZ7cNUc4DxgVokcr1G8X6",
  "key35": "64iVs78KgLv42sJuZgNmGvXdvz4p2wbkoie5G6ZY9fujXZs5FL1jEqXh1xJbx3DGTQVFoP9yeEPxYxrhmG4AWZPu",
  "key36": "4YY5SSkxhL8GQrSKr2cLbxABzxuLTtm1Y2HZpt2x5xe4PTq4u1NrqGs4uvTo8UgewFC28S4GTcwGKyKSwt6Y6siB",
  "key37": "62eLdH8dwVAnEv4kKHwY6rJgJjoPnaxgfgMvityyDGKfxbLjU7HTpGoxKpwftwnA8ZtpqL1AX9QzLWjS24btNKMN",
  "key38": "3mW81ggRCJ5LCnv3BNt9d1QCXEhw9rVnX8UvVzDYVPmY4KrG8aF7UoSNN5ZxU3sRgws2EJfVvJdxv5DqT6ctF4zS",
  "key39": "4Jrx3GPuWF8NRmwmH965nuXzVkLUbwWL1GoPjtiVfoEZPenJ3xYFVm9fRepnYGmykMrDFRncWj7PDC888TALQMx6",
  "key40": "3G57uNjHo1mNW9cGgDPnbr6vwWYkGG2PcK3uk6spCsUaodzHR8uvt3zbY7tPryWmdpyW2uwh6f9NxaQB6CrsFC1u",
  "key41": "4qqr8gTT6nKHzMvt25VRDRubxechZ6dGJMMk1eUDZmoGKZsG95GwJTmPgXkAp1WFsfq7NG3LUXqRsockC43ak6u8",
  "key42": "5rXqdBKxEscZFbq63VHtHfebu9VfK1Q4K7mTgpGTc6YdiJx5eu2B1f1sbXXEno589v74yN3YetHHSndcAZpGiSGU",
  "key43": "4CBAWj6osGQrDJJ7jvV5Ghro7XHGnZRzmTzLVRiSp83Vq8xFiE5E9Uqoqb43ZFJoLLzT9PJrU7te6b1FScS1bhha"
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
