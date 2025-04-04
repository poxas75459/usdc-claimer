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
    "4hu9bMurMKLSWcatCYCq7cdEcr6s9BYHAwDcVyHjjt9ik7hwnGCsKxBotHs4aM9kqRywY4Lh38VfdUf2tbp5e9Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mzwXAtwwk7PCYp87tSkZUH7w3k57Cbfs1uZEn7DgcaQhKopQc2AxaWXTLLrw2bnixm9cg2emEUov3EGDG9Cpqyp",
  "key1": "umoTVQstBfVVdBihE77gQe5Kq3wYrVKGzfG5WMozzmyxokGVgx4cuf7oXkYJSaZDCEFgszoK7gMUN68g4JpmuVj",
  "key2": "2WjojEtmynTWVgy7R2mM1QwMSvDchWyJu7ZwXgYRYRaEEnRRsAXnnh7gdDUcrwy4u1RxWHHyDYUpxvFmW56dPZHV",
  "key3": "48yAhLZWANQUuHV1JttR7MvkkPmaw6tuie3FyefoTNPvGfNXFsaWB3hdWFrh6uzjFvrZSCQs1Fr2EtEGzv4rsU9V",
  "key4": "4rcVRngeeU5RbxCG8eMujGbyrRQosQPgzQJZr1f5Cx8Y3D8N4o7DM8Bzv74gqQZyzSVmtwf7Z9iHjTwKRZsKETQa",
  "key5": "4shtdqzUDymLHEGW8XRpHijy11J7MxL3dEauEjKerVZ4eg5osWp7wRHREgBqd8eBszuZ5rPyD53JYSzZLMiToXj3",
  "key6": "5EnuL6JjusoRKM6VViTj2WLG1RJJ6FX2DjHJGkyHemegqZA9gDrhd5P67NAgamDxSdK4JHiUygJFvE4PJmRMTPA",
  "key7": "3KuNWRynS5FVyJVGmeoDWbLzkifePbXF8TsDu1nzC59iXrdqagMfmfKir57eYMwN6SwqaymZfLfdVn8WJADoET4H",
  "key8": "c9stEmVeuyZjLYBGsZgPVowzpNsoA892g1XmUxHGaiLQ1pqeHqPDryJbNUZUiLbd6gUxJHqtn5fCycsbKZ5dBAZ",
  "key9": "4jde67yhtQZr9EdvZESMf1ZggnoAavwEZywwAJa8X4dTPMpYuhubzMizwisGDDmURJwc3pyaYWN3K11i6kkakTwf",
  "key10": "5NJ1ddddAor7MuAUEaNwNrf5bnXUmyKPFkraM5753FZayaNKS7fvVHotKK9LnRjcuzSugnojn3ce8fyhpn4NCd7h",
  "key11": "2eKJTxnRDXZtAjbx1PPsYo6uNUT3QLHwWmqzutRdqy29Gzq8Syn94Hsbjpei8dXZi4ckhbZ1VLSpDMJdP9X7wVtz",
  "key12": "4C19oEVkNFmTmjs8paH3aMRhLdJMsUWafT9CBTDBUX636efuPzirULqrp8qCvMd8xnbtq7QWQ2je8VfPoc8uXoNR",
  "key13": "3ihMWt8U9Mp4whfRUciQV76NxGWf8TBrzARoAAaUWduQExQEJbXLhndzQ9pvQdcEP18wgDZdrsKZQyifGG51brFE",
  "key14": "5HS6dj1AksjCtPLn3caMLqmHmfD4AFPTjiZVK6bJUUEudTpWy2QeMXbn5fWzCk7RsFHetRGQ3KodJ9vD3S79XsC3",
  "key15": "k5MLTpQXV98rX8mEzuZW2Fzx7aHBvxWe51KD7oMiqbDanJ6zoFz83DDyhDtWwzpRjkjRafkBH4vPydX4X49gAAA",
  "key16": "61GpT1giAvgBc8SHF6NvKEhELhT7ucQehBKQSgLeN3Cp71CjcVJj2ugdchHLGAmJwyoq2dc3tVaxFe9n62TFppwN",
  "key17": "3hpFKDhSnWU9odH8zcWmvUVuPL9Sj1ZZ5iLr36wAaJfEGoiSnimeJ3R2JU2SgZtk875B6ipEU1bxuRyu22bfv98b",
  "key18": "25Rqo9X1hSZoLC5U8tnrMf5rcqkeGyfe7VZymbvjD2k9FmKMxFmHNWbWEpaKL9mqSji2ra1SZieLg72T7K8d4wB5",
  "key19": "VsKDEnuqhH6iPkWdjj5S24Cd4r9d3Xj1uAi1Emxr9Cxn2bqAhs6fvjW8uUCWNkHAaaiCvdtKdEMfwzopMbTnp8K",
  "key20": "2k15Dydh6UQamxBCHGGRts1AnHcqpC6xEfci4gzi7juhNR5SL3TmJHvbAcLT5jrHaGQdsookJE7FzC8dEgcG51td",
  "key21": "2UDhSq2QMKdU3UZPNitsqRjR24BsjQZABzNCg4KFcxY7WV9nA1u7jRDMAyejPFn12mYr1Sz4zdAnT2BC2whvDJRG",
  "key22": "4dfHLAuubEPuB3y6WU9aEcz4ZJRcPqrR6Rx89coVdvNSRrhE8Mr1nLp9RyMQP8MpttGR8jk7VAtouAVsPK2vAb57",
  "key23": "aJkHUE9NJNwCJT7vvkfEoGQP2hRvHW33GjhpLb6gcwTsWmhc78jkrTwdbvxBFA263ai9P2r2LaY9y7N6ddCjGnb",
  "key24": "5bMQKrQTLyEnRSY9yWMmfzvPsczJ4jSMKgpYtZPpn9aNapKyXDvMURjEWHgwEvDe2Q88XsRJ4NyJ7yvc7aGcoayQ",
  "key25": "2ryuEsGQwdQ2UkqiHHTNJxLptFf3ueWX7WeDgW5znC4LCoDWcb9CnmhRX9KE7WiBFSeDKwwEacNxW1qYSFWtFvay",
  "key26": "42yc4iXF6pb1BfRvbjUgKgnwkjgGSVJqCp2eK3UriuCQdoU5UjEwP7dw2opyUA7YcHWRQcf9Qcu9j7c674APg6W4"
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
