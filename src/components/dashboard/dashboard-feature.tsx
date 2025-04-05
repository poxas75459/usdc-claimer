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
    "66j2RpBWH3e8HvvBm1Lsrwf9JySxtjZ4ia4jw7uYUV9nxcVSTwfrQNAP4T9zgXiy8Tje94caDvvY2NkvFMajHnvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDJEyWhoamXhzg5eBfr3L255DXZn6FMyY9byPWBLE7pQgABs1XTKWd74fKpQPcmev1SUzNSMq5SBSm9jVdgARag",
  "key1": "4RShEFHXiHNN3Zm3kkHVyAhNCnVduJr9hdbGvLpBMgMLJFSERfpDFMUdBCwJiNnN8rGdf32fz6k4mNvejrvyfnZc",
  "key2": "3iHzC6177nd7ycTpzwfmUcB2WRkwMht9anNtexZqkeAJ2grAngMBKXiKqHuYtxuQYboJkMtXMeJ5jGbcjcXpYgrG",
  "key3": "2QMYRosh1BZoDck7CqCpjJnQUeau7NQzMKSb22d4kqx5AHBY9mpfE2Vb4gXdRuj6prz9DrD63JLBXsKb99g9tNjd",
  "key4": "41VyEWbZnWPUAuquJVyKovxo97LpNUteNDy82eA2DvxNnbDxnjboYGhaWE7aXRfp3Fcmzqxsm7zFHRDRkxojtC1t",
  "key5": "5tsJ1DKH3ASmpiq9aEVkBtKF15U9RDK1xZiM9tWRQzeb86TEJzPchKje2i42aHRXXfao2JRs6Txfm8mCMgP3US8E",
  "key6": "3bhryteiEd74hGbeVksLA7dMXcdwmBkphh6doQkDmcuawv6wNuH46Nk2qF8ad8Cv2PfVacwiN9knj7K5FtW9vLjr",
  "key7": "dyRLiPETPdZCA6tkJRpQHGPaF1mUFzptf9QJV9S9XbLm95ZWtd492rbK7XXYeLhHnWWiA1Pr9UL8iWowRG9sdbJ",
  "key8": "2SSbBxoZyyQHjXna2cevE1v1H1LszYg7pNvZRK2zgfr9gYdB3qNXzoxBSH3rL5eE2DS1DfMEL5AqEoEUp4woH3JK",
  "key9": "2QRVPsViytkk31DwHBtDZc4Si6LJnTscpzH87mJVywVQuJXHh2s5gzrd9XU3B9cjBqQ4eP5wojXbe65hG89VmtaE",
  "key10": "3JXpiEfhMip5HNRpKnWqJpfqv4HcTgGpcsR4UxcZDxfDAScTFwC4Trmik9bPKmouLDNGoGkUYuedjZhH3KmVBxjf",
  "key11": "2VVvQ5dExoYuNTu95mbEVxh3iAfGV5taTrXA7bAKy7CmViCkjfs2cuFM3XhXwVruMKGEC8NwwQunzg6CNSuqLxZ9",
  "key12": "4p4r4C4wF8gC94tb26QNRCNBZ1TnWBMNiLVY5Rqz6TV535tgp6qB4baCFj4FnBvkknUpMFknEvzYS5Sv1fdSarzf",
  "key13": "HWkaMQP8aPoc7daKzVaHmp6QiGWXrHy5eU13Ug2XXsW9bY671C4YRJRsk9BSUYKN1Z4rjzAZ879S6vzhuo3EEy1",
  "key14": "3P8VHhpPbGjnAy4wfb9J2ATXwtVcb8VAq4Q49Fpm5qUx5N2xup1JpJvhLVsb2JcKdFJTWZr3zzfCvrTpCzGcLkra",
  "key15": "4EKikWaMgDf2dzSgvxFQux5iFPdSSnqqSNVzJADcksDeTQFBjyYkWQeCbXCfepYAhThP1tsQqBNkvCPrcWueb7FV",
  "key16": "5AB3BvGdXuTdLJCqyg6DNSWuGbkCLByeZzdxMpL6BEHs2nYKvSrE2j73otThzeFcFP98fVbEMDe6suueBo8mD5Hf",
  "key17": "4Di2ccGUMQyXob71dw6gKTsKrRH213hU7KZBMdy79xxpSpVbQPypS1R1tCwoC9AnR3Byf9Pk2Vg3fvRLzxZAFXuw",
  "key18": "35L5Rf9ZWMvwHAX64J3wAUNo4KdUUqAD9ye7LvZ5Kri5gT45xs6Y1kFs9TyC9KAByn2aJyUEsMvjZJkz8Jb3GkxH",
  "key19": "3xWrdAQ4AhV17k2VQfyEzEfi4QRv75o927asDw6jpAJ7XxEwJ9jrUcrTUm2Nubf69fCwfs2NynADdXPct4SWmr9H",
  "key20": "28R2KTjsYAEh3tZbjE7hdAG4P4N3L2XWLDMtAKH7xiCqek51FDTrya4jcahn4fu7LRr4NpZkVa8gAfifUUGQTPfk",
  "key21": "4wDBZHw8JTcxQW52s7F3hy6DMUjUveZpzTki3w2SznjKgr9RtENtPXz7WPD8ZhTrzbUa6sPj2xJX9yLMzM98qJtH",
  "key22": "3A6LYp4xqyj93PdcLTuX2QnoxVRFETRmszSgDTBtrF2cS6dDL1mVAeHLW2ndLQrWjthjJiEp8h7gguGM8nKaLZfJ",
  "key23": "5yyKsHqiG22nwPGqsAQmSFKsnJsJPn3T8rMefjKP5fuSk46bKZpBUa7B1Ts7E8vnJ4rEKDEsg1jjDVRQgpfVUaZQ",
  "key24": "3PZnxfKKT9bv1FncAw214PYwuvRiD4P4urm9fnjnvMXBtoUhJazTHd2Jxj5BeWbbgs8imTu7RBVhh5NhKLzUaCs1",
  "key25": "5X3DdudNmDoG4hQYfCt5Q9KFX3azAQ9YB9RELd8R4kfzohgAuXCAL2BJrGEHbNpspnJhHTXBhNxWPj5ynA1aAfph",
  "key26": "thd5GfwEkG7vbrk1gpy8RmVMhdCVT6XFw8BYBR6pCu8VsUcnSguofbUVj9uaLg1DY6154Y2wszd3vLb5Qm6fHw5",
  "key27": "YVZuna8GTSGH9KkeEPkUNLMZCKvpjG1Eh9WNpgXFm6e4Rn3aBcA8TccD3Gf3hMcX5YJnac9SiB4fVBtWoywboUf",
  "key28": "nyBgV9L8TiysofCeAJnSh6DB57kTNQRMts9vkWvvdixQ1KZWdD3FETiE4yX1PY1Af4gChhWywAqBDfzbG3n8EYX",
  "key29": "aGDNGJZ6TR5W3vRP1vxyAGmwEs4AUbasD4989Z4FJPi6LkMwL9SYYwj13KuZKMWhrdUn8EkoLcNeF6drY3eZPTM",
  "key30": "4nogsd5ePJwp4339ChTxdF2Lrc95kDZEJoj9UW5cB8AYfBRfmptn11xrB7D3rG37LZriBQQYP6V2ws2puHzVbaU5",
  "key31": "4Dq8UiEEHZsgKYHr8pNgHccbFcHeUFPr92unXubmkZduR3iibYMVeNz3BPKx8YwcsajQQ23JP4TZFcxbDf7zhNk1",
  "key32": "vLP3uXbD2UM6SkyBoPtzxqAW1GYQyNXaQGiBQvoBikE39WU5ZhStBKZdsvU3vxx3At36Doh17ZD4RdSBiyp6ByP",
  "key33": "3DbPKp52LAMVVMAFDZ8S3TaqrbYbAEuGJ7fd4sv7Atwe5ghGakEBcsjZvpY7B6YDgTGGTjdZFXcHWyJmVamaY4u3",
  "key34": "2x9X1EoZdGMrNsh4cEAwjrURjgHFsBgbVbbw33cZpFyCG12Q5CNuGbKUJHvtVagHxiKft36MLcuFfTaMie4xn94Q",
  "key35": "5rGu39AkAUsH2qbfj3Pr9HqbbXxA8JBsR7a3hPVE4irnivywLGBvyStp8Z6f2rVS4gQyzSQaFkwXc3SVsnK3Bjvd",
  "key36": "3zQn4pSBE28AjC7gdZh7X5h7nKHHApn6T5tg9gs5kBvd1jhkrL41nwZ8MkMc9ZSZuSxyJhxwPRBud9aX4Rnt5QiJ"
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
