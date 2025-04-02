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
    "4J3Eeg2mQErB6cAB2qidPWwDzFeNcm9KWFtz2aDzoALj4PxkXKTGjGTcBvD4nCKcC6b1P1zAnEeJj7xy669s28Ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HS53y43QYSi1qJsQ9QEoDXip348eQdbpuZMDoaBNJ5YQz7pWTmGQwLNTjEJcgkF3NYvy9SRXxs55nwzAYZALiEq",
  "key1": "Ufg96Lid5EHQGmr9cM7VcGqPaVU9hGfwq7NN4oUmaKBQDi7PcBUxANYzcGh8RcyZRzTnQRdoWKiLTQDz45CdUCE",
  "key2": "2raHJMfqhQEKNz4bydK26V76GYU2b1B57Kr9fddmJ9tzHu3cpHRqFy7tPxmr1N4Hw8yYnB5ajSFn7Ejvm2uARzmC",
  "key3": "4DnFbFkgdqJx3fUWMwxxuUFQFsoPyQpM6nTM9CuWbqhHcPzkdbd2R6bGHuLPr1A8SLc51QRq4uWK8rW1U4EPSE5k",
  "key4": "33nyFXqzJdLi4SGDNuDs3yv6jQyzGiHHzLUnyrmCzm4WvCPvZKJnH9W6Txzj5H6P2KRBntazCvGeEdFbx93FJw7D",
  "key5": "4d4eYpsbCxTxijWmv9ibmzA5XHk9jMGU6ojiCHMbVLQx73PJ8eB5CtMEs7QBxzM97KhyFTJxf8FvtoLvkwAGN1Ap",
  "key6": "2ERdWTekxuCCG56bW62dRof62DFsn5eF8LBJxB67UiLbHepLYN1dv9wiMzARzxxYnpgPWjgmzgtPRJM5Qp2E9Bhe",
  "key7": "5c46N3rHvHMBmi3G6nTxatZmPKnQ3Q8eKzqpB7D26fWaTtAbXvVKsmYawLjBGWUkBzGRqfLV7jZkEWiNcmbJPTWL",
  "key8": "2FUupuFhDHHQ5fqxSAyjZmSsaEWwemeTTrCSA6oY3hNaQkEE7ffgx5B1RzxqLRo7TsTPHjUhj4nTMbPQScPfrwk7",
  "key9": "4VUubZ3fRtMZMoLxQo8mdAL65DGs2PvEdGRa2n8SnPia46HxD47Deai24onranoTwEXq4Bz3hkMhTTnWQvhBAC8D",
  "key10": "31zWvxtBFXoVgNFPnv1U8E482dBLNm73aLdifU7f9vFXgAFKzTuREz3GUrvz9JxcZoPf3N3twAdP3iQv6uxRqV1Y",
  "key11": "2vuMJvKfqX2kafbN7rVaj4V7AqF2e4qgjdSYmKiKqyN93nZFj2GkVZ1uVHNd5ezafiLMmSF5jLN816n4FeaAyMe4",
  "key12": "5RSoNTuWxiEDXSPBfkmnVpciho2HYkkYLMDVToC661p91BU2KEqKmHeVS8TsQzvM4dV62qcHsDZda7T1YHNQMuZD",
  "key13": "gjo2cBZX1Aeybidw2ymXQJL3hf5nuFCF3TW17EScihLLviQr9CfJVqudzSFDMGLCL7kqQPCNTzCeUUTdx7ZQQNi",
  "key14": "v5EYqRUbzK3qTRPyNPSJJkmMRAXc7pJrLouTj4n6k2k7jP1i8j7Hddm2HMLbLycd7PntGPenj7oGt9oWk1FU7oL",
  "key15": "2CxWBHuvdyQJWZ636h7UhWpb78QaArp4txa11hnCcDeDDZ3pGvtbeSKGAe5RG2owBuZ6PqRtxVUac2ksGLS7B7Ce",
  "key16": "gQJ9jcdjDzAv9EZwekELngNv6KAFzTSjRxaVixVPd2BChDttWTSRGPygSAvdJQmVwp51uNbLt8ePmknN9qTRwBQ",
  "key17": "pnRJ1A7Q22fFhWtLwh8HtNM2gQgLBEg7e8aMx68tj9uvzHgTzVKfd5fE5BcZRS7rkCgGEQ94XzG6DDuvM7kyN7A",
  "key18": "31B3Mmg5qXcY8ysgnuwgrfKzeuDagfhzKkXoxTD454JgXoZ3yhJ6Us4TomPbGunv3MDksbrd7uK4bjG9H8sZNqtt",
  "key19": "13AAzvqkfSUKNPQJYxjiriFBd5nfL4pXnqxvPSzqAyCiUfGmw3KvbcE5YoyFAFF4JLNyWXAnkKBuhdTJ3JPJPR9",
  "key20": "kZtpyf5iFgS7RWTgateUuP3ofpPujCZq6Nzfj2ukjswEoCgfq1YD1qVJRLZEy1mXds72T5uXYZb6xXir8ifs8J7",
  "key21": "2fQMLoozX19h6gqBG9jwgkAsJMWKa59bk9tUgNeAj7C8cTTkB39JXcHGeRPTfRMMWh5waHVAE885V2KRNBpYNAXu",
  "key22": "2HXWdeEH5Zr82jxCdnjLs6QTJV2DyqTnQFWik46dLZkb9FJvzpxVbHYgj9wjRmPEzm5V8hv873M3k5CGGSNi55oA",
  "key23": "2U7kjqY5aJeZxGbiZMgCRrStm15R6VAo6WWLKgjUAT1AsrGEhZDPQSxCtme1z5bJ2751DnQcjWMxVdMyA51TyiXX",
  "key24": "2JdCkGVe3s6bUxgndMFgtvZKFdxTC1rjNvgD9fWXL2HWQCYs3B2oj4ZYiWbHMw2JSvRmyJy17ZtHSRQ6j17kz59A",
  "key25": "k59jKnKYWDUkYLUFSGy79fhTEtpPEivu14wutfVZuv9PkBq2Sq4FyWx5d7GvNgGNbhjhzDzYutJmKfeLoKbhhJc",
  "key26": "3pg2SXWMLHTuMrSgeNy7wdQu1SQNF7SZcvk9pwmMDNUCDSbHRijogYonBpJCsCLcQZFiiPsmrpygM11MktfsmWSU",
  "key27": "4K7WeJuGFTdWXfFThbQZa6ZH7L3pnNz89w8rwW5rMATS95oAzMx6tma2qrbvKQAP22dZzyoQX3mqry19j9AMqcJ3",
  "key28": "2GQwWN1Snm4TixZhTNszmE2gdQ8SghkYJJaBoGPLXRRQtPMbGmYLCkqz6azM3qXS4s5y2HhZcGVRiTYWXFxgutgY",
  "key29": "yeDa1ZMj7B7ZzZ9dejZo8aYSNtcnfFUdoBxtNBDBF4BeoG5tEunsHctpZ6iKjqB7aF6L7diPXKCiPjgVQnBtXct"
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
