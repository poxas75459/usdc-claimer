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
    "4RGbbypdPJSUGNVjH913o5BXQL2bKsDK7Jbad1p4Miku1Eh6hCMmFQnkw8kJUAALpCdMSqqbFrrCSvQMAqpn1m4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWjkBBN41LQdivK2DnDRaxW1iBtn611KcqKG4UQARDm9HCr6wpTVYSUKqaqJ1TStkJke7UthUzmCLo2VfbjXFFx",
  "key1": "HGYf4isJ2a4NvRt3Lvu6ZuTDsDGDmWA4oBScbKBtJfD2bEdoKWNnjJ7HKU9fYT3jb6u3KQ5yogwus7hR913wzQo",
  "key2": "3Hs315uUXUn9P387C419363DLiaUhfUdDqHm5DGadktGXrtJLUxbUGc3uhPavvk6FS8Aohi1EGzZBA5RT6vBcBFP",
  "key3": "2iXpFsDMosxUpn2BHPZBW5rXNCBqgNBYrMg2aHh6sn9vmk71Aury6qc7Q8nchNYyG5xd6fWPJZHD93R1iF1Z6RCv",
  "key4": "4F3iEMgGm3iAoAfMBt2iFQRLSk63MPL5JuGu9ysf6z3UfRdjEhzr1hPsPtqBqXFKumHsWnNz5tPhcCmrXLDpPcUm",
  "key5": "hyaePE5LRkAbQiLW3PQzD78ZmKVRLPBkMRtu3sMCxEvYnjGnmSMCLyXAkKGS1W4pddjYnnTgrQUsANt8PbLNSSW",
  "key6": "4vAf3BZNU6BcS6hjVa575dm8SscCBwBmwLoD7ZKj9iXjb2dwJZ6399ywEHvXk7hXQsKpTkHuWLsXALN73NW13Mii",
  "key7": "4ugkDShf3VPrvDo6hwQFHCkoqqLmBZvrGxycwTrfdukeJRWBx11AdL1dtX1URyxy1H3ce4Lzf6pPm6yXUhATfdae",
  "key8": "3a1Ey5kmaWk5dBWVVqcBurqmRsYH28SKAaUTCPKLYKRu765SocQgUYP7Z78q7bo62xv1EUTUS5M4draNWvxr6bpT",
  "key9": "SPCWK5P1AFSK8MevPYRc98NY2mv57zqUcK8XmBUDosdvg4WS6shNkFvh7XKFTwWBRJk9LrD5gmo4zqJidW51tKF",
  "key10": "2xcNuXvd9azFxoSTgMbgKshHwCufTPSA4MP5LAKAWvGCKSAgXDhnNhCYmBZnx3C5F5GquuQPu8LShhX8MQXaXgny",
  "key11": "P9dDEPne864ayirUYrxqV7fGHjhQfXckGQGV15ebpps1HPS5znftHaqeMDzZDeDbNgokeyqxNai7Y8m4Sck5FpB",
  "key12": "62vzMejJy3eCDjXeM9pXsX15kimE8BPyu5pdeYnnVxQvMpxVr997dZhEXk7MvwciTsp6M96ZcfKe1x7dAwTpdfHA",
  "key13": "2zXhxM42MbxAgEiu7UMXPw8eSnqgzG4NqnaKZRohqHs3z74G99qkUQCQ9LpC8hifTH5BYoHWoA1m5g64D2QFx4KZ",
  "key14": "5f1cNtjc3zjRyZThSawJw7NLCHN7yBhSN8N9pF1o7pT93Q4zRUKMnAkfwbNBTgaEciKfnRArx7gSr8rE91Rin85m",
  "key15": "GkHtPrC2vdt6GihsjxwYpKqagSzUNxmWyDZ2nAX3LLyLNPkupoknBQ4D4tEYBgKFaMr5Kv1chnmC3mTTLWqWat9",
  "key16": "3qSX9fE2JFqvBExkc359J4iRgytuShgQhMmM5eycqjFwwKTLHWBRKkmCn9fCPw98xQudqJYgooQPtnx2u3jQBCUU",
  "key17": "42d7buZRL133EyooqcswTXVWzvmeY4ybzBduRYDbZX23VGTjCvztPedPVsZfA5HjrC7Q4CnPmGHeC8kpGo2L9Ext",
  "key18": "efp2Vh5LE8hQ7Gub8DxTVghEDZx9XxTQxa2cQkRzueDjsw7hdFhRWxoLwYssv6VgTE6rfBoQ4CuPNF9KUSDwRVt",
  "key19": "2SmwbBfahnztcdK7bg9fELhw7vvz2VdrpUBrvZPAmH9wKckwdDVKmHCq4zy6v7fG84D5hJEe4ogCqg472ThszyoX",
  "key20": "39iBDA8jLXeRY2Kfcyrz951ogFRnYxarU6CYzm4PxgnF6GRWdv7onsovt5aidaNk9pALQYjFzDifQ3iyjBnQDL3N",
  "key21": "3n6gHhsLUegvQnajmDFT9K9pm5M8jjPgMBB9k1D5UA8bL9izponZU1qQFExSqx541mcZaAsMzrHPiT3T51Sy8BbL",
  "key22": "5BgALibbJ6xTAtyKE5QYHVAESEY2utEnErphp8mxMCnhMC6QBHWJTXqMNNDX5M4jQu1aERaeXK79HD3FYwh44nqH",
  "key23": "2TRmiEW7Wto7rCLkwRQJPDVMWSQuNZ6VoCeUYgfC85D7AbFcBnGSZvcnSS9uK2LBRThLU2RQ8ecwuU4NaiLnKits",
  "key24": "NgRsgxTc57DJKbHT9uwsAg7DRQa4jzzBo6VAvSp9AkRWqEnAWx2vnNiVz1L1E74ejWXLEtvitHroSPLsZt3vzq7",
  "key25": "5fwRjC6URThbnYDFPRoFJHVNLUaNfDXxwGJr6P7U51WVoqMKE2fRm2WkbVAY3we1dKEM4FNzGykNz51yCH4qk18N",
  "key26": "2BJ7o2nqyW2Ciw4axRNtL6p1ncXv3rxFdZPZDejoygTP2zf4YwJa82BaXb1uS1YRWzg9jFGWEmz41MfxhsnD4MzH",
  "key27": "5rxo3wpHdNeaLt6VUHjzT21e81ACRNb4GAMwr8Pmx44WhBpEtt8FWybDFKYHsA5zxJtAZ2UJYGWX6Ep1mYLw6iBC",
  "key28": "3QZz6GEbAQdJNPDUMVKnmVnGsndV65HeVwYHWTPiGqH34PyTGckGEXyYdFv4ydvTHBByP8e1ygCDZAY3XesdVqU5",
  "key29": "2Tj1ERHthfgDsxTjDZceLotvfHbN1aW3Esi2cymqq64wDW1AJBVRdrytmhVGjL3Q7sxiZJQcJFV6Wtx4jZgtJLzV",
  "key30": "LDYugpqKg4so77HfbRRU4RSRgZ7jGPv9pJ8MwJM6G1Vkhai9gmtwrdkxazFm1QLRFxcdvXvJcST2eDztMkSA8gy",
  "key31": "4SuxyMFTTkoriTVb7j4tmShqYoNDemqmPQAWcw3ysdswThKWkQSzDf7nQ1CGDgELvo1cDqtEjuvhtVz1FnPEkswZ",
  "key32": "3oY9b5tTNcbhjMKgYdsrMmoLNkQBwzVCCdsZAukwKRVpvHptA8G3Hqm4VvqQa7qWDTsy7UJLL4Zd5yUV73gUjyYb",
  "key33": "2Xu4Y6H4qxowrRV3zaN58tB21iC52Z8r2en36CwZxZuXvAtytyy4syC5QWRJbZDh1sFpVL7bpqQ44hZW5QK7rsAF",
  "key34": "37pKbevVMgAYAed2ZcGZh8pQz45NaTwrABXHjUfFfqs1r7Y7nLrbUsr8mw4fiWYKMvbuUhwz4nWxw25iCuRsXcis",
  "key35": "2osgqey7d84nk27kVakLtfUkdn3TyDkTZ9hRTtMtev5yGAKa14W4HLyBrXwcTQqLKRZjuMNhYjTfQ4jXU4C8Tn74",
  "key36": "3WERYKix4FSc1j2c2vM3y8rV1KHQ5BA3SkDEZscMouNkhMWko7Ur9E4KFX6ssThEjY3wKNRzQbbc3RdzrZTnpPWx",
  "key37": "52R9vkYUTkusHeFAUTGttW49WZyTGLhGSR8Ki6YSYfAbfybbyq21V9qDFUBzzgP47fNnME5DX9gdz7LNEtyKEn6K",
  "key38": "3dpJvd2AKzh5hW1KpQpo8rDWGsw23Kv2ThjTnn69KscA4r6ctWHvmctAJNkunTPo9XnYohKFRT9Bfrn6JkGBFDRr",
  "key39": "3vkAVMz9SSC7b4JyewwgQDyQRL5S14WeBtsSSg7LgHaYruy9RhxvHFVbAseRfBJCmbQvPRLzgnsg2SwDa3JpHS8D",
  "key40": "59hoiuXyD2AaXwbqcU3eRCEgd989NsYVoom852WmHneUtGbs5hN6zcdr3x3KMS8cvf9QAcfNk6Fype6giuuTCoLd",
  "key41": "4dNxQocchhUf1yviH6r9j6z8VUWbbEpSB5Y6NgiEvXAMGspUv6Ed6qy6t9WwdtrLSp3CDzB69gKfjbNuYPSWHxXE"
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
