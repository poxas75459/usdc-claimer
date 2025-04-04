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
    "2EK9uNPtmmtR3NvcYeFr66mdhJmh53xjtqmYHuTUatcZiBt7vD8u4rtYtpZSmd7AUQKcWsxjVVXArKAv7E6uUgjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3QH9pRNkhnrfDfaNY7aMkaDwjMFpMnGT8hHt9qD9hT9gnAZdE2D6Es9pHr9Zm34qsHgX4QfHEajLwntpvJ692y",
  "key1": "44PqjJK8hdfGJhELk5CewBrJiyct9wwtvxkkZjzujCQTLy1cRECm436c3V5hVgdWzc8Kz4uUWbxdZX9DTQMXdRVn",
  "key2": "4c5kCUhfdpTArdYMG5GVFFsEgLvePk1FbRfxd4hoyhLvpnAoTv1j3PhBz6fJPtTY5ZH4MXeFenREvGQmananLeM3",
  "key3": "2knQEBpkdyqez6Py2vGRiraGsYkH6qxLubCxAcCaYs75jHTBo9rTNmc2JFiD2gCiVjtG3UDGQ841ESwn5ydw4Bpu",
  "key4": "4otoou16XEu8ShotnEZPA7SfYcr2TtFvjKHNRLjs8wntDENuLPGjuvNchKVKUCCJKyJfZb7fF6FXuX8wq3xU3yJe",
  "key5": "5AH4iMsuu3hWQb8GUfXaeGShmGC8Wwf3gU8a5PKPRiX1xPojbpARKxvLbvSozTTtpJ3GuFAAnQgJxB5KPjBmbDUH",
  "key6": "9pW4k9JUHYpXZWQDRBmiEeTv42zDRVtDr9bp1fe8T5QkLVCMnQ91BcPy7bRxvS59X7oEhBCvuF5VryZthwZfNnV",
  "key7": "5s7xEiTPjgNWbuwjj3Gj1zaPyuTkEAsqvEo76oBZZPjP465gSDu8WAmkqGfL9eGHeyJTrBJN6THuuicEXxBNgJ8q",
  "key8": "5P1Jxi1EQjhcEFfyhqhu9KdkcVw5vj1BCF1FHtAjDk3CPdc9q58ZoHtHDxbKdjwhTYb9vr6orPKMnVS5qfG67Zky",
  "key9": "4QpaPVG1wCeT2g6yXqfS1AyksoNZfTxPee38dt6b8yTiqQPZbmZ7LiVGoHAs6QjDydgKiZnKNtggBkrWVPGAUwEn",
  "key10": "ik6iWyn4wBd5GXqKmKioNtVLyXTa13EQ7G3t93K8Nhxuq1yFDBTrqfqY6oJ3FT9pc2fnpxeiUJsu9mGLHg1P6HR",
  "key11": "JswCA92Kpbp7p3vKmQKtpaUodm7W7Rfe3WE2trJkNR1kfCovvgKVxqsiZKFPMFjyjtjsSW2H3jb27zyMRTQebeW",
  "key12": "4tJran95PFyesE7MBoQ4cjgehXnU5Kt81MpCVtZsV9yh5GG9adFtypUW8rqcf3AYjeXvbeT2CTzvjfV91YB3xEuf",
  "key13": "3rfnt4hTDaPxarwW9EN7yvvrVTfteZCGbVetXF6obELbNe95WZePX7NKwCaXACn9uqn2etEUVQZRxZD8wmjHGcLq",
  "key14": "2tES87RooqA6GwoMcccTcui8QuhUGmrw2vuYtW2Rk8CmEivDfcHJteCdntX6yc4cPdZaesYGz98DtE11AZad2Q8n",
  "key15": "WcBV8ZcnRavUrx276GDcZWyiqBNwrDYHxc7kp1TkE1aA8jASmk8C5Fk38jw3RvKqrxy3LVyQ9EmGqH6RxmZvzBc",
  "key16": "4dGi6A9CgFZT56dYWFE9NT5ASE5k43Gskc88HHTUJtf46ZUwcdjnpck1vRAqkb3WYCoxVzkNXNFDypRiuTssyjTj",
  "key17": "25GdzqvNao5vXA7DfGhzRKJAsnxuKBChHZeDLxhaK2WMAxZkMpiUvVHihdcqAQZSsRoVvx8badhPBXkwiE55ahVU",
  "key18": "2hAKAk4NHjiYPpWbV1shTavjRa525kQHdLm3a54ar3yyzgHpwfQbTuAvVdudQ9DDLjeKKG3RT2Vwr524dc8PqaSL",
  "key19": "38bU1qP5nXCWQoZWxQfX6UGTKVXZ8DJzB7kvykz9tYfCKgqQedBa333VSdddRj57CxbGCKNJvocj3MFPTpxznX7s",
  "key20": "37Dmu5b8N7r7bGDqsdsrtoUAmTd7gYFhaT3ZeXCT8KWkZ9bG34Zx2xr9wqbNttwJSiNdP9hLCJ7HPZMaXHU5FC7q",
  "key21": "2dgyR9tbr8YTayWf6BpbdTwjmbAEhXeALT5Afu3JvxkBsH2Qd3qebZCFTXqTDy9eMZgqwDCdyZJ7TZb3qhT1DZWm",
  "key22": "egke4kFfpT4hnZ9MYTuTQa17zG8ysHkzcMY58XoteyaVEN1y3frDeuCJgN4gwJ4D7CadVGwmhHUfj3oUiKtWBqx",
  "key23": "2SqFnz6FgoP79doHQmvKFnaHTnVQJGZJqMfBv8tPohVeJcRLsugtx6dJ6PmJWchxFccJAf2Wt9Pcf7PcMPJ4ddz6",
  "key24": "2PurWVvUfnz2Vy3g5sFzsy7Rjh9t8dp2agmynL5oGEHZTrwapJKNFF9J6VhD6Y8s784BqvddyBCSgqs6DnqwKY7w",
  "key25": "4hSGhEbEc4ipL6nTmfBYbNGgBR4StEj8BHCtqfnyvG3UCMsHFP7yKyGcc43oFwumjQezqDnDBARPyBzT3nhW4B8F",
  "key26": "4KK2etqrdyuee1hWyzFsqb2unDx4TzaWtm65gGAVQYW483j5FguB985RDRCjiwXPTmAcGSKkfxEWc6uV9bJ8Rwv7",
  "key27": "2StFwxfok5qGSqAxbhpUAjNEU13NEgfSp1sfuix7jibfx61DopNBmsXLjNCeMUDj3tNnZuorwyQqWBxMphKR6eVc",
  "key28": "4ukFWGLCbiK7WiKRqMuWwzcBRQSLGMgeV36omfpkjY8oeENAot3ppe4x9MtGJUcGro3wweBZTogMRG1XEUxRmAwi",
  "key29": "4GRGoiMYci4G2LiNshM6KQmLkWirS2PmTnQbsE1N1Tkf3KC3GpqZciuU9viShLPNCkxfbwhpgVQbK2BcdmKGcFxp",
  "key30": "4ohykuAMnGzQymdFqg83fKePSizuL3EP2GBWCnLquci4XfcFQessTXp3ACqK2Ne3PhNzcmEHYvZQpFSwTGa52Smw",
  "key31": "4BsNdVVXToZgv7T8uF8q25hRCokbJTrqJhpKWur5REHXPUber26jz2xQPm4QZEhgfoJw6SZUMrhUjj57VFnwEyUT",
  "key32": "2Mp7pE1cRCTFhSGB9GoNc1jmpJM9JgzH1X5TL5zcU6iyW6yxEwiubewGcFwdLVfGte8HiZDRVfPFhGz9LJs9KWf8",
  "key33": "4CHfphubnQRP5h9LrGtbYm9jinvWJYJPEyKx7LMMV6dTiNuzUFE3Re6kk1JfEw751z759rpkSQE1nGXTuxzY4tDh",
  "key34": "d3MxaEXUn8tjnBsfjNDXT5L1wmXAvp9FCuEHtkLSqoBSxAhr3tAiXL5iQpQWJLwSp6GHABYvUq6UQjdqQAeooh8",
  "key35": "4dMwLsUGsWwszJrnnxs5ZqzPcs5VekSvZmeWLk87TfoagXPBLivRzd1eReKpCenYGtevxCmp6KGYU2MZLzcV3NuZ",
  "key36": "3bbR7MAKvmNQGm2kBj1Lxd37KHQo9xv3xFRAFiE7zVvTepbtyneewbY7aYEmD4Ckqjzj8PQwcuA5ZcvnjhMyh6w6",
  "key37": "5izUjtweQpUnw54cJzhLfnD9JkpBGmL6MRXZwsKndEjVHRkv8hgDYWQACUCTSgB72b4hzqXUN2PWQcBGBdekq6CQ",
  "key38": "4qBQbUsYa7sbqv8JKzvDHRf2H2aAZrrMbFkMKDA9wpjySzGprjFAok44X3ZhDinGL3SRRf8kPPQHNPCJ9zTHADae"
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
