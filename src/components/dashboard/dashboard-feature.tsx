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
    "31E3SDTVkdditnXWJG1Z3CFsekdtxdWPRRfHTRAVCUJJXDdueYnEpaMyhSNk9xBSkTuXo6ajqfeLeGT784ngZeQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xouUUEwYxGspatLs7UvBQc2y6Vu2kDXQAQXQBV8GsJjZ2XutAXZ9jd8wgE9Pjew6k56Dcz79Y1GDraXS8BhmWdX",
  "key1": "61Nrf3CDFW5BtcALinFn2DpeKQLqMbENBYKkSPTMGvjvdVbXpPLKCq2tyfXTav3eNct5U6yyNFnQ8qiWZ831Jz5r",
  "key2": "5Wdtajd95yjbquZNtamSrkwvRgxNVJCCmycYRLQM2c7i9kx2y97u1cGoHehkRgoonBTtG9RwbGW1btCELoBDcnK6",
  "key3": "5X269BmQTbn66E61KffRU11kSzmx6UUVKjWpWU4ypT62oCZcDx5QmzAWaDPLMJA39R5gFCuQqkgnJFt84epr54GH",
  "key4": "5GgnS4jT3eXuvEb2WFf75Dra5WbmcjS5xDo1DbLZ36TXG5aK9zxebPteVn9Kh6s6QakQ8h7T2mfEnwShpztBNeDp",
  "key5": "2JzRp5c1tp6ambbwjoNXZ5WrLiUZxjmpcrmkYrBjMvWB4emFzeP6nZquGuSoXygCh2w8A7bXYjn5AnC75JgH4Ncq",
  "key6": "UqdhG5GwKQSikAEvwAvRwUekvdo5fdkhCvocJFmd8QtWbTHvg4HWAMStnd5zNYxjF8PaNavTRwGGZuV4sX1jwT4",
  "key7": "4Dsm2NgCwDqQ5S4Qf33HjfDYREyFZChX3rWw6XRz4KTpE3HdQzB1akmrahdHxqNZt1Qg8fbaATZeVgG1yvrbTBoM",
  "key8": "2B8vQGoRg55X39ncwHmZ7b5gWYNRVcBHfQkHPtgzZTkpyVHtX35KmyYuxwGjx1vhyQ96EN6D1dwwt1VjBkgdChAW",
  "key9": "uCRmuMv5x8PvJH2BxeNgsouR8VpeZ3AMV8R5v7JAdyfTLdZuToysxrx7Nb4UaMpgqnhMw8Y1uzmUTvu9GVBU6u1",
  "key10": "6KLHSqWWUAubgjQ81t1Ne484McAuh8wVwBmq68xKqWMVAMFrwTRGuW1KDvFvfeGpPbnuc2Bsx7xPjii9XpKXZnA",
  "key11": "3yLyVpCXuDjfnrrHcWC6xU331JN6qbNKaUVkqknRRtY8EySQ8uhWzjrYKC67EYbKUWit6zFAYWnnFSsc9kXLUU1B",
  "key12": "249qJBRKeimjZB1ZVuTVvs8hKNEU8Whn7miP5H91dVaJivknRqqf9cnbz5j5vowxjthPzJ3REJM6iFX2XT9pRVYh",
  "key13": "3SgKt479yJoxJiYP8yJwL5mypovbxtWnHAAhjqu3A7ukBwLi2TMkCc47Beu7f8gT1UwUc111aAoGgKmvmRdpSzoQ",
  "key14": "562LtARikH1XkCuSKTMbqs8L29pXJcspG4M5KDM62G25ACnuhEA2rrbqVH97E1sZ9UN5MXUFeu4iv5Vqt1rxe1Ux",
  "key15": "4r9VpAUg21KVmbTE66gJAm9VpMjXFPZ1avyY953a3bFbFWpqtaTkCkptCWSij8ogAdxsHGtuMj8aHeGhAHFQ8vzr",
  "key16": "4PPH5J1brBHgeg9Z4gwwmkxVAjM9n5JJ8yHYNvTQMNE9eGe5zcKpJsimvXpKsesrMjyXq48SX9EKFWp2phQwnMiY",
  "key17": "5na2cuKZQm1ncAZ7TTkKjCCrfVqV2tgEUmSCdPFGiAxRYABwJnYg7SnbXowkLytk7nGDxopLQRuHMiZTKybBAos2",
  "key18": "2KQfNTpj4CjJWU3LFzKES2a6H6WC31B86zD5KnL7uJfnayWUARAhLzkxsySdsYF9MgU3mnzMXsqhcJ7DBugUfExA",
  "key19": "5rQowkP2GD9HQZRMDHgiiDWmyYh5iB4kRUvWKjd9ixk5ar32E6VmGeTEy75LgAkJsvoehaw5zoAZdda8koNXVQcM",
  "key20": "3TrAVwQydaaNfkuBDnZTT3At8SE8xPPGjedWPu48KiN2HhvnZs3FxQMakZdjH63TpvKyKNAb7ErMf6eTdqrWdefu",
  "key21": "2gFqb4teSPpPW5C2b4es6aCgKoBLSe9RZepzoTHXhfuKnQd2yBMJBbXn3zHtd1qqNJdK6CXeHWkpAyBfNZizmotN",
  "key22": "GYv1RcEn2FZHnWz8Z8hJukJ82A9ntSvz1WNAmw9QuaqzXeZvQ1tZH6euzLfA4tTW7wH2HXvYQJRGZfKYDoNJxzS",
  "key23": "5U8a2tR6Z8RbMJoDBZhdbZ4ezVWCJW3fz2AvuEStBN8diEC5GcPmjA6HuSngjdWWKRHQnq7Fnsmd14T43eEZXdCM",
  "key24": "o6tNCHJuAzcXXYnTHXcEjDEvrfMyiD6eMKyLqDYXACV299Be5r7pekbvdMpNPcETz2oV9uRuc9phzn8nPxs36Jw",
  "key25": "QwWDnqu54t3sVPU4hTUDwDKs5AHzx8yrzyxkcv1QfgfMzHqz7vCRwFRT89RCuWd43S7S7X2HfzKJZ3ykNf3x5GL",
  "key26": "vPHa8Hh6K8Vg7EZyQPtfUeig9uTKYqinFiBMaoAk3UZXZN3gs1jKKodaJZVmMRv8QEpsGG7tLkm45t1JMExBt1D",
  "key27": "4WXj2CSyaHfyW5nuhsv136geX7i31RBJNJWVukpP7NjmA7VUTei1mAVisNmP4JTk1h1Gpm72QQubRuqkY2DzzoCf",
  "key28": "51MahVtzKFjZDEfdH4EQQFTGTHJRGJFdyAUvMi7SV3cvtWcLFzxEtWYKT2YdKax5yQydjPmgMTdJAdKX7aXoV7qC",
  "key29": "3oCb61QaAxzVB89HZTSMmxxzFUxF54PJjRddPavMQpa2XpArZ3Z3Pcg6hWr7gscevvcSp71qVzY5priUUWPcmsKa",
  "key30": "3UsyEDPBucPV6XAsxfx3h9sF3XmFi5znFQ79Rso2mWtVYRe68mXfsk4PtWuZmo3d9GPsmHC3QeLbU5QD6riST8c3",
  "key31": "qnkiBJHPwqPif9HDyVz75gBZeRTYFBo3s2WfxmtqZeNtsPQdePswJ1sdf3ym44QDPPDDVjrhdd3VoZh6LwX6tMQ"
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
