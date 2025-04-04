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
    "5BUBYjVrcqpxXoYHt8v6gEhYMcGK4dBjMbnXdMRMrWFBZ237qMMJWiTkViT33irzFHLdYUt2BxLLfZmwmfD7CSuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoXZJhND5UV4WkcV8eaP8uV19cqXz544dU81sX2sM7n4aKaBUQf85eUuX91KaVNVBmnVT1ToedZ4a6cBi8bknX",
  "key1": "8yz47woGkM4oxtjQUovtWVAyvzgbi6qAkk5xR6uHgs4WUN2QgG2MuFQq6VYZN6Pt5sKxi7q3c68p5RDCLS4kA4L",
  "key2": "3f4tLbGk1ymHK7HCPy8oZDFrADYEQ3CR6HXpqQjdGifmjxFxoWSrs7Q5hNrmFnMV8updGivHKFG6hduoJrKfkNEn",
  "key3": "xr6zj15Pxxzn53EnMcELPKKwbiD1ThJGGRzQtnSu5FoTm8nznnYvHDZow5D41cqnwzmav2G3HZ7zX7A2xXKCCty",
  "key4": "3B3qPKZKytYKr73QwPZ2erKR4pCEDz4NdoDXf6CKxiBV6fU1a5DZFKiurk7VyYbNCf4WFK6fDZBhyHZAToPzfCxM",
  "key5": "3HJKS4twSJhPud35dDVZ2Bgp2jZ68iAiFdkNSrGPjLoRWr7DngpgAjUXYb5L4qZ2an3jhgbWeStjVwTc2aw665Js",
  "key6": "4x5JEpMbdGEYPn4qpNvYMyHYA3tRf8Lnt4715irJV1FSPj73D5wauLhFotJvpmrpteLeD6mpwVjHdzA3GMW96ACL",
  "key7": "65HyFowjvEqAo8StQPSGEpp7GFFffngJFYakKfSbwK8AcMig5aWdL4HS3ubyhz3zTfJ3g2TqtcQsbAYuxioVT16Y",
  "key8": "5Pmwqb6qMEdZLwx1pwVfby8rSfpiaA82W7eVc8jK1dJZ1S6jkS4hZMUv2GvE7CXXFUTxSyuxC7B8YUm3KZUxMV5R",
  "key9": "5hJ3HNkUkxxwF1tKsT8k8a1adPoizJaihQgCm9auSYpEGJNL6QAr25VsxJRuyrTcF1dbDeMHL6ESYxXDvxmjPHR",
  "key10": "5WvaLYD5ZgkEKkPUyscBZqmTT3Sj9XWbnJV4DwF3X3N3ecZmPTYf4nqomyPVS1GcUs2owpug8SvvSHJh4VYKwBfb",
  "key11": "5UPH3XJroT3KYfoL49Vg5fy9pyz6y72LiS8SN92hTWezbxtEaGuNtzknZuzCS2nLJcQqLN8Kgg3GmpbebEt4KkPo",
  "key12": "2AZjmNjao9JbvynFnMrcFi3Zck7KQwSPiLJAbiDWwK7daNFEe188cZEDjMBLV7838mnRnvYYf3fqzNvMGb3Lr7wh",
  "key13": "4pWwQrqX7h9qnXefUbLjhufDwk7g1JVeB2oh3TTfBfAR8CEyo42sfqgaqTGw55vF4Mrm6qY93u8wfs7sTdcnCVTx",
  "key14": "EGQNDocHmR36PcE8jKjKP2hbG9uoSdukugrd2SqgcsiW6mqJ8u7dE2SLeRjR5v5jmEbBP2GSXNWccfAZ7FZov7H",
  "key15": "47uUfN2FeuQbKq2gLCk8UcYEBYxU2vk3cjfckzVCZmy3nXTYXoGcKcLLJp5sDFhWGD2TbkeKCcrHTC2RC9ttQPYg",
  "key16": "43wmAVexDXhqAazh3HoQGsayJJG7obKPh4twesa4sxBvX6rbXnsoXvqUZk5kHKrXUmK3PPANVYZtwzeM8gndVxif",
  "key17": "2mrcavNaCH57mCCAeD2cTgVfKSpApn385Z9xncD4azDMMBYKxsdkzNGk4ofGd9tUeHv8mHhfENwV6CThVnF2Hcaz",
  "key18": "5HW56EjEsxJDJh4uZnWYzBVZk61KqvasM8zJrjnqUaM24jtpiGf9b21gMUBQCc6YytNpCd3iDU5jt7GFqfJVgv79",
  "key19": "2vU2NuHR6wz1JYxg2zDUAcksJazjNby8RzpFHj4VYXWhpC6PxxxkzZw62VJfZJTNxGFuJFVwwwZjXpvtNKHKYJQL",
  "key20": "43GKJso4Co33ByxfUuwofDu4Eb7brBJQrYiite2V5CVP6j9hc4kTeosWN9KGCjC1jqFMx8hxW7frBcDy9UJasvhT",
  "key21": "3ZDid4rDKXMpYS3cggZYhmwa3HKmgY2jfrDrgLsA3m1wR9dPritrwSbYShTv1hfQ2CUvd1ScS2KZY5YgzbQgnBCk",
  "key22": "3wyT8jCwKXsTUBo8cnp4btbNZE9cnAbPmFwAzvLiqmu3gqgvgp3py4z7PxMsEpAhUtcyVTz73T5hS2NWEG3tcJ3R",
  "key23": "5KvZvgYwJMCx3RPn5Vyegpr5eHEBnTCmRWpDmhPtXWdER29ARZN8VuEZX8hUDbGZWz2hKrmBcoeqRprfkJhyHX3y",
  "key24": "2TE8yVaCAyRv9va5bedEif9dKVvmHXXhcVdAbDrAEUuzDGCuM3UqXWmEFg9ytAmo6hicZAXU9buJMsDA68K6i8MU",
  "key25": "t5faWfByroRcQGPoZGnAAha2w5hhPsUQKo6ogr1zhSHzbNyVz3aaysd6LyTc2RD8GDSmYVrSsjeK9E8TkWF27mY",
  "key26": "25bpnkHeSQo2Nix7VegFi7voHWrd8cyyNcsaNQfAiLeRw1k2qZpNpKeqh72zXgiBa2vb2Tui3yo658971wPFr776",
  "key27": "3ojU5LxCwxLvzSMC2uNWUFUnRsWnV4qiKN7Fj6TfN3bdwojWUDyVdUJEyUH2EW4hzxaNU2ZVF9jwEUoSGTgHrfTg",
  "key28": "5QvA2fzgGXUV7aT2xDWpa3BKd8nP7Xkjd2ni8AEzCCLrCiFV7back1cGqo3mAruyiAwbN9z7H349A9Ksoj7Acve6",
  "key29": "3kE1SWcBMZhdW5hWBYYnwR4LcQeoznXqyMDY9m3NUBKvGPEJKuE1E3gvdQnJQEEKHaXAq9YhvdfPKh61dJCUZ6X4",
  "key30": "4G8eomeBBa8YJKvgjxCc2j4H17a2CHuDjRJzLZ2udpHpXdqmSKyQeXaoasNr3G9iAWtmA8AisaAYSEyMqb8Y4P7Q",
  "key31": "4DuwRwYBibfifhgNZFz5XKt7AEo3sjpkw3Ky83ZPMctK9JeqDUXcnkqrNGqZSSKMMXMe1ZpZuX9UFoiVRwKfmGoN",
  "key32": "3AtdL1LubUQitp8WmY9EPUJH127KE1VcGvspn6cpm3XRQELQbeBt7QUwo6iCsiN1N9jDVfCNo7a2AHDvw7vsNapZ",
  "key33": "2XBB8DtsdfEmSnHfHRRVC6J8km4LSmQrXfioEgSTRzLhHchzmAbpmBFBCpNMx1DwRGA74Qqu1rXKQdAZLLS8TaQa",
  "key34": "5qQcWFPdb7rV2pk9KGkP2cS8yqgvghZWCJrdDeVfgo27dE1vjP48kE3ftGK9bqadvKprB5iK2WrfDQnwurD79iaK"
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
