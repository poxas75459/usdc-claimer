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
    "2rCV8eUNhbCiX1NnZM4M5QzRpYLifr3wknZ5b7AXWvpqt1KU7hVwRAW2qjyeqAr2TCyTbHi6x5EG5KJX1KwynxUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCabdMbxVRhuAXb28weRWQjZVRddFqZpTmPP2R4PMFR8eeTd8p1p3D863CdUZuuMqzZknRFsVeMN1vG5UZbYRnH",
  "key1": "2wHhrZ1K9vs8Rwqt2VkUBpDrmVt1kBUpjZ8NrboSCchvrKkF6Zqh1TtRiK5KyFSpRxj6TmHVex5SWagqWk4uHuCC",
  "key2": "xosR9bMopQixj8MtKjAtTQ9J1bqnJMj6ph9HrPkpzV2t5CKZtqs2oAr94rhRTY5G2t57HQBdk8ta4kWJjmBnUod",
  "key3": "5FXPGQMoPTgeUriLjoLfoKQWevCSSxhS8nKqzpZynGJij2kw1pFXmK7ftJ7ELNby3meH73B98A9FwgPZ4rkj8Pe4",
  "key4": "ZDjd98YEeUehdEiK8PEfV2ZYJ5heFATbecVjTUr2r3W4ZpbS7yzaNoYTCJC5QcMd6bpLFsuHswNBGNCSuHJguzg",
  "key5": "3tmbhjE2x3hC4LNUojJPdLvuirPzvqjdVHi1BktupwAUdDz3rYzjgt42sATeCgqeodrkbyJC1JMs1yTdoS2WfC7Q",
  "key6": "3DJUeoZPLkjn188KamvdcqjW8La7swV5ki1RigttVGWyMZgfv2KrAUo3NNsBDbMkaP4wunw2NoeBZT6yCwR6zjyG",
  "key7": "4XDgsjdbjXBTnL2w1k23EBYxT2j2YdnJ3wF7ezS5rudjaLHJvSRjsQqUjtg4FWu28RFgGQJwm63nX69LwLs9AjCM",
  "key8": "2tuYsWuVrfVygPqzMATVfVFefHw4zEEY5qrYfdBNQJpMJBJZApxTGKu5H1RbXRKvTQTspqvUvxNwZJctfRB17kYh",
  "key9": "3cw4nXGbLCwVDKrxcrN2QcpFvBVTAF9xML2RkCftoPshTqap7JTorknmYxb1R2hBh3DvJjQAxFAw5QYsQYDo9jQW",
  "key10": "YHT9dk3L2UkroYQTP31PWLiD5QFGsq7yqZZXKWLqY98SdP1nGGByfFYcoNGrSeWSqt3P5HA9BSbJLMUaeCLC1kK",
  "key11": "5G52gfMHUSZf8cRXQGE27JAJWtKE8ejP6TAqzBUyPXgccgi9RX9hfk5HrTDyFA2bRLFAPT4417K2o8JJ9sW4pcVz",
  "key12": "2Zxp9rxTArHRGwLLN1upV3uH2qBSsvoTuLF68zUmdX8iMwxuMVfemd21BSWPwDSH9MjztQoEqHKxEnwUJr6WSXav",
  "key13": "j4AAMPY6jSBcw82pCGWheuo5Sq8X8krV7oxr9FH7Pgh9WKmGsMxyWT8nHxbxbTchVvmwh5da4gw8i7mvijzcFSH",
  "key14": "2iqPWradgHC2GyuSm46MEo6prpwoChDC4k4TNFx6qUzLfZHP6ufNrCLGowX6nFQin2oLBWomabVk5dNA8BHgVJjo",
  "key15": "2L59faFcpaVhpJc1cTeUorhWKGmQiSDiw8em4PSDhrREP6mj4pJVDvGE1gjYguc5NEDtipegysTGqJxMmA4bXZEo",
  "key16": "4YhSncF2XbAYTa7XFjaQVVS9YA7VaTAHVgcRT9bnz8zmKPvfeUywbc696rbEvRacYLK7riagRp9VvFbX6ZBKTVJc",
  "key17": "5V4Mff8D9jrWmuqBQAcRyeBuVTQ6X37DaVS3iLu3vGSEHetB4gEGjgHcRUEAGgoEtQT4uyaCz9Yf5JJsJAjQQvCw",
  "key18": "5S68g6HxTrGf5CE8riZtH6oAa2j3d5nGhp3e9nx8GYnDwkZsaUxi7dyYaFYqpR4jghV4jdGaSebpJodDu9gF9feE",
  "key19": "5jBnzPWd9Cc9a8N2nYSdrM6eWEWh3Cj8khJPK6cGzA3E2ASpy3Pu7EpKpNNSSkonkirgJBJZ1BeLowrZXcAcrsCP",
  "key20": "5pa2XZBuwVvmTJvmcQeGdmAiUYyU3kuETGott5J3XTkYWbGjh6yjHYeLtMygjx9vr763AojnGr3LxhU7HufSvJW6",
  "key21": "4rz9u8SEuytEdvqEvU6FqcG3Whx6YoidMo23n6A4YJmM22xkV4ZUerpFuyuGbNYHWZBQXACRFfEW6NoRgK1a78aw",
  "key22": "258woZFLevyRV95rPxZ3m9SGVzybvbo6U1bbXin9tfneH825Ehh7NScZtqGjtEmGTn4Vsf9pfmdJZ2Sefa18gQgJ",
  "key23": "4TLKytC6hR75nmt3vfR3gZsgC6iH4eQVgLJGNk1J44zWDpqsEMdt3xQUL7gUiSSFfZmCUCCZFC4gdPG1fFhTVivu",
  "key24": "4VmZpMBNZRiuP1eaQomZLn2NeGqWBTm7D8UEXa6wLNTMTpaXVH5ykGRGDr1fu2TxXcTTEroez89YWww7c6tPrSNQ",
  "key25": "2bzQZ28q1aepest9DvYARFmq1KtfLanvrrgkrciohnJKLPVfjkQo5RUgF8JbQq2Up8Hkogv4fhyRNWZs1XnX2sF",
  "key26": "3BL9U7JmF8A9nMpZcgjXcKhQUp53qFnuTJWnYtWzw8qGfCahmZaa6dx7JuWhJMhg7oy3dhrKWW3yR1bLnJAa2oRk",
  "key27": "q19F3Sx3Qf1jYK4i6hwF8hUsrRYKjhxjA5gb1EKetgrYVbAuDNoFjPSnCrkKJhfwUXy94sNKngGgvJLSecZ18Bo",
  "key28": "2vSK9jKCjxvqe9SffJZFR1qC7MtL2nGJSSPpkNkAvKRzUsLUS5CUq1cqVk6MnBarYcuruaWgzaePgBXTT5fctT5P",
  "key29": "3xXiPobKSKEqgGGN8aD26KBkoW1ZntRvBHfFdLSmVNZdnmjQSWQHjAs1Z7RKciYq5oNaAFH7uqrGzNsohseYB8td",
  "key30": "o4NHCrnk1KXtNy5XDJ2XjuUFEPzAecJKQTnNEBbNCPHwfZ6BeP59nqadUU43GaA8tWHsmNsZEdsHcEkUaYxufsV",
  "key31": "2CVnTtySnY1DqnR7uXH9sE5t1FZNddQwqphvGfqZpL9Xb5dUepzsV42qgt8upTxLjTdCmBzqxXSg58HzXpbWrgqw",
  "key32": "228d9hRFW1qw62urbzp5j2tvrWYFNEjc2TFxew4m2dhd2FsQpY6FEez5fHukUtt9YGPeZYd9UpSo5gV6hqiDcJ7g",
  "key33": "5fc3kWndn4KbckEfguMewumnez63986vqoFsLRynDoQH8hAtAftSM6FdXJzR18c56rxQ76BWeXXHYKbwgp9rz3CW",
  "key34": "tTAgvXPSa3SQdC24sBHYf9ipT6rgNQKa5GX8bkNvyRnZFZcBjsywrx9fk7RPVwHj3mG4vAc3Uc12F4ptgyw6nvy",
  "key35": "WP82X5nXQJGtKFsPb6JgqCyrvpBxT1HfmxFJbn2LFu72jLZJMMfMUUkvtRFN1tvXWfH5iMh3atxGBaeQVZhAPMp",
  "key36": "4yrxtLJSHeKB1izsp8JVoaEG4tds23s8gCwieJGq7qrnusvmxucg1Fqbt5ZtSPSE4sXGzY61tanmn9bVjbvackXv",
  "key37": "2CTu419yipe5bEwVHFN1bSeiJmc4kwfyK58nNesVnzqWConbhDfBi1f3hLkmLN252d2w5QAt3pmXHvwLRogDVPg1",
  "key38": "5kK4HpzN1s5ZZ43y4gzkugADd71juYKZ2WybniVyVbYuGoTL6Gt8JCFEEobcdEJo7cxrsq9qXyaoUz23q3poapKE",
  "key39": "baQH5kGbRmEGrshcEPhwszHmjpgjCe65J5K9oXq7n7bLtVAeS7vbqn3u7TEsCum1XCrqL3VYKRxBSLvegFbtvHq",
  "key40": "9jDSWUt2JpZrcVvSDceoB877kedM3NmGUDqRSgmCiAYpUmVdN7WHoRajGLU9yUmwRxvaHVC2wG8jqyx3Fi31W1h",
  "key41": "64NnS7q1WyhC1eHe4njyBXUviEgVKfEiBNQGyoznVssK8vWTJdzMuMzgzVenRtHovJWVpC9uCyKii1dpSvqL1TCn"
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
