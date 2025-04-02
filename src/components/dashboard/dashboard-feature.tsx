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
    "4tzRHyhqsQUhUgciP61Vp6iWJJAbjCeAEHrB46Wiu4aCFJVeNx3Rec2iKhkoVWKabbreCCPuWw7A7SWiVTuoUf59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgXHjDzUrqfCFDRZQa8zGACxzxGUa8pDY37AgDL7SBLWzu9q4rY43wDC6HYzxLFybzpVmhttnPF9pQVC8NNWTP7",
  "key1": "h7ZJGYk2padrtej8HzR5hxEogKEr46i6DtoDx9ebw9Ytw2p6RqSraUQ6KDbpcnBb8onazawCCq2cSvATAeA9Zwm",
  "key2": "fzWtzmoD3gsEpdR6MWfaeLWg7e3DVoUjQgJGr1kwrh3oEtsXaT7ffiGXVrfBradTraWV2t667vuwr9eV2Cc1W7q",
  "key3": "5AnLz6ah4KMgW4rSqnU1dutmEtWaPhocxHujtXg4aPgymieS62aFa1Q5G1ATRwg83MhdiAPbx1d5tr5freS6xTf4",
  "key4": "54tYdnrYeKLfVbYqL6RjRi97kuGeToXb6R3AYwWxEwQ4ENPXbTLKHcnrtwYjNghvUcbaRWWcb1XfHvFiMjr1KVuB",
  "key5": "583dgqKZidm4RQWAtVRt1XNsKXaTU34rumhLK6rHyn6LihMCdDjtbYnnEwuTuWvBwJF761c9ebqXgAJ57xvFFznb",
  "key6": "25iR8P5RvvZ2yJJwQyufPRCiMK8MT1B84Vay7UiFZcHLLMeG19sXd8FwBRsW7pY9uxFWT2cf5JjDrHKg5F6mJfTi",
  "key7": "5NJiePqaHiuknHtnHihSP6CAskxAwXUpEUiMLSj98jNKqRVx8xLyZNBKNCxGKEDU153YR9Vh7nYbomgjt3jHB8XB",
  "key8": "4mfCxfd8GxMdzretMS58rcdMq383Fzye8HTaP979AJv9gDoWWtdY8mpMLrGb5utrf14hhfy6Ricani8LoG4o7qbV",
  "key9": "XYn24tpBrhDXKPmnTJGzMEZeJfLmDyKvMLiYpajQUsyPrWBg5XFZeDzxBEJSWLafHS7Qx1DupavZrVeCui884Rr",
  "key10": "5sVRrzAi5PQHWjzq7tmoYYrHHjEnJXBvE6P7tm81NtgxRf9pXgV1g1us4nrT7VZJw7xz4UsG4gLWXMKD9hVpHNnE",
  "key11": "2iFRw3324JdGNPUnkXjQs3u1NwbVFiZrPPrJmf3bTbDPNY4UDXziUEGhv9esmDYAhxXeRQVMcSF9MujdJzWufJ7d",
  "key12": "56oUXxLqfoEfwrpdy3x8RvpGF26DrU26M8tSrJrx6aNxQs66JCc8o7LsgVR4ShnwkJ1RL8VASUUcTGembRh5eTj3",
  "key13": "2ibBVe9QTM8P6AWMsVToYiginJXHCVduBmL4U8vD5UHMaGPD1Ash47QqPBfcSbizjFKCWERVL9XsXK9Q3WVqrfXr",
  "key14": "5yMEW2FcPidzdpPCvBj918EV7DtcyAboH45YuB63SytbhYUpHjQ4Si7tZ8dXyk3LP5XEZZ1G4iVwGfmJ5ARsTvou",
  "key15": "3wDy4CVDAho5qmv7wiqTBvUQiMv2jmcGwA3MBeePYVX5uhY5SQfiE4BefVtVzA1ArRmyJeiFhtQgq1ffTxbRNsyX",
  "key16": "4uEiyQ6cmU1e1k5YDyjrWr2cgbQ12gj1bxm6oydw1F8y75Sre5G8RE9uaxAoQRt1Lc92ybcqQ2PhJEv44GMH5Mup",
  "key17": "43Q7g5SoRn6sTkp92bbXAGuqQCvR5aLBtnZZUeMX4Q7wZU1rKZ7yCs56rDKS6XDDPnrDSLggGfvogfVQ9y1sRM5k",
  "key18": "52TjDuFjJLiEEPdrQF6WtVRiGNLbeXnkTJpe7grin987HPuNHiYPFWyBjYA4KGARVYHgsdCF7T9MwLzxvRxXTCMG",
  "key19": "oQcbrQ6XtrTUydBqNZUQk6joNsc1Ee94GML8uGFXSc5y32Xv97P4jG5qTnAn58iK87TWFdParpXyLhkcGBPPv6G",
  "key20": "5wXXdcv8jVHfSRco8qxPP8dmtC6XDojviLEXCBJ2jaWYgdaTT8viR98sRfaaSSBf7xfrx9WLHMR6GZWQvVuH296v",
  "key21": "42ZpnCsmEfSURGw5MsfCV2g8A84i47JW5fF2JfJbd8u2TAyaP1W1ctpw7ziD67Fu4syjgaycGW6wZG1o9ALmouuR",
  "key22": "2yUEVMBerpjmaovhkaUY255HUsMBo2vJooQ2obZpyYzNZZDuD9afqmVkiMoFJJnHhd7KM8kpLAwmbDvMjksjoWtq",
  "key23": "2aATCZxDLjBa8d4DDfFv6bo9TGCidVuBmxFLzvu2koqmPTyw9cEf6rqt8Ct9krBEgzdVZcMt3ETBdjMoTMtKweRu",
  "key24": "5CRSCAXifJS8xh5mKP5cLrDHeaTU16Ke3hUu7bytHgn6AHqfNpXnB6QofP1sonJEY3LkKt1JQ3V7VWtjMaMXnSz",
  "key25": "5E8cb78tA4be52ycUwik5jLKse3J7XjZHf99ZQ7pNQ1U5AynQj7uWZxWdmUZTf6UiN8wfdKmKy7Bsg7MFrtfgjBB",
  "key26": "QgecSvSNVBZ1GuVMPVmuj7wYRRziWQmBS5eKVHwEaHC2MqSab4cLrahdbQdrE2HYbQMpXPg9LfdADvfZDZuhdRo",
  "key27": "2oHPsjJesjDGnRdH5K2VUVojNi5Ndk9vzoKZ8QVLMUosCpWrKPe7uZtFgfGkbgd6DTxRxTtrtrVQjZn7bf5zadbs",
  "key28": "gqZcJXU4hWcGG1ofL4WzVJufQhLEET4qD2EZpXY5KYgJ1yKgJZD4WWwaCHAbedVgibSVH7wJEtuh3y2iQyqqnrP",
  "key29": "JcqvxBRpHZPZcBy8S36Lrsh8DzvwMeiHru3Y8fLxSYYJVspXk7fqaBSiBhrkesURF6wbzdiFScGdb2NR7zbQEcV",
  "key30": "T4whTQSys6xi8RiU7oiEDRUUs8Qp92MWAEBPATZ7fS81vhH5nSoJYCtsvrNP852ukZ33gYFwqSFomU5b47rhRtd",
  "key31": "2sYaXD1JvGR8UQNUxbHhq1MCceWuk43tt1XdXiQGt4ofn2uC4xxdPnB9ePQTWzGkspvnjGfucBBnGCVBQGm4yYQL"
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
