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
    "33ksA9xBKWLkhP1Ja3ddtqPCy1toFqDVLMQXLasDq5dPcByvLGQymzZ1bDCwnCmeoZGibgf9ywAqQsEsjRK2Rwhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4SxoD7nvhhH9iWrGGrQ3kHAiuz4jZYs1t6irU1Zg5VtH1YsoKVbXMrb4kMS7fFxBep3gVyq9X2NLafxB2qvaY9",
  "key1": "2VkS1DjoNYaCW7ueEg9sfjBEYhG88K3DoCV8KdGLRpS2oBrR2GWir4TouTevRLKqJgbb12oFQM63UhwjDWHoZnQt",
  "key2": "3isaokoQXfAsWSqQP4mStcgNcJYHxXMMm9wjnsbFvBrqx8u6dgCPbAsyrFxqjNQw4wxA7NUvNoVehLpmAnrsz2uo",
  "key3": "2Hz3Gqw7hNY2fq5zrruTg8u6HfttUztUFyiq6HY4raZif5yFaS9iVURAWWCeErtF2qePRL17NQ5M5Tv32wGccpF6",
  "key4": "HeCdgTSmz5MomBkbhSWGb7tg2CjFpV3FPX5o4vCDcr2eLKS8dXvyBLr6v2ZTcyEPVzBDe5XtYNBMnjhFNbkU7MN",
  "key5": "2PjvdPdDM9UEPZuzh3HgiPRga6aLgY9cS8gCHf5aMGfhs8Uo6JmUXTMT8mwfh5g66VBH3nxHxktxHCVLSJLhA2Bu",
  "key6": "5X1533wtPn8zStEiDhyYjZFKC4DQmxCp42jEDfoa5oTXLfc2CUh8rjzjFXrYe1UbbgBTrMXU244x47NRoMzBNktx",
  "key7": "5Xyj6vVnMYpnBN1bmTCDaBA7Ve7yPDCespx2zg5XUUumS1TiqBW6h76MpNV1uVowfhUecKaRYs6J2EBH1QRFD8PZ",
  "key8": "3qxExGRqdTtugEEFYCi7QHKPYtjsbXNG7TUKU6rG6qGprUnNmNqTWV2gf214XdWUXZkGd4QMed7SodP3ZjQyYrgU",
  "key9": "4rr2mueJHXhJ1CsJTEovgztFNKTXXdLBuVis6q4aTnnfkj4oPjCEaBS8ZEus81PDawtN8g8bzK8H4AKG4bgkK2Cj",
  "key10": "35VyzAVcfWzFS4whAphsp3zHT3VhohfhDK8Bw5Rut69oyM45juKMxyoHV4BZ2kLRmy4NdG35cozyr3cJkmmc9MiH",
  "key11": "4aDHVhXhFvNxqo1G2X9nVyPbGy4uc6w9sppe8SjbrJs1r12JaUuPTq7S2uhkH8PCgZfb5LVmBjtWT6Xcgie8DLPE",
  "key12": "4LeaWLMEpxQk4dykr4cqddqMvCRoYdqLMjByC5hCLB3HgHHQLm5t6dcaGyqWy4mCxxVbBZua7pVhnwx14HbUdj9a",
  "key13": "5LSVSdCuKgxqn4qXRRzFTnq6DTYiyKP7WvCwwpYXhG48fKCygoDZxB1ZPxsRhmEm6xhQTURFod5xVPRq8ECCL9CK",
  "key14": "QszEgrnuJ12EXe4aTGp3WQ8i269ovd2FyFfHp8cqchABysCginMZND18Uwea2zhxieKEozgEHWs2Q9rUzxC7wiK",
  "key15": "eFGn8QM3assYaXFoJpFMPw3NGBYcBfSPE9UyhkxUXxyr9QJFN5NQFMn5Dd9W3VfbdeeCJcVAusWyoFGRc3yp4WC",
  "key16": "2gb1WRF9mzVK53v6ubjDvDhuReKxUiiEd3FFUe8UPP4F6QziYTCywt1wg28TxgdNXZ5N93qxrYc73jJru6r6qEzZ",
  "key17": "3N3mQxwdLjzJzpKNv5F2HWBTmkNVGSjoa6AwiDdcNCqa9iw4JUzRKQV296PMrCyoWRHgVJ2wg9KnReM5vgAFgmDf",
  "key18": "5KMU1xXndfcjKxBYt68D5idHqnxb7J5vwykg5ia1YSztn8RFsTzX5FtbE9G9r3eU3pDP2t5NrvQXs8Ci3VQ4mwTc",
  "key19": "PRW5xAjGV6MAkzH3P1hty9bUtmRMQGkdTfCXt7AitmpoH6bWxSxuufpZjZxXTxCf2Y9KgZK5fNtwX8QfuznY2Bs",
  "key20": "45i46cTAw5rPqur4kMp8HmGL2rxMWpYJyXuG35AWNo5KJgrCFEbDFCXwFWA6yuyn195o5rZhiieAWHYgeMNfVTNA",
  "key21": "48JKQzzunnv3zzCoLwDrbSaPryg2QbRTbg7qQzZzAGEgRzTPpRs2ZrdVGMmksWxndYBmj3dwSDJ6Ds3kPuy9mAaK",
  "key22": "5zFJShCoT8Hxyp7H8BoyUzMsFmAQMXMpfeCa4pEWrwcaxnSvAAzWWZMwd85N9qSN2rG565dk92EXSwgNN9LFFbJJ",
  "key23": "3y6Jrqec2Wra1hPJPyfCN7xa1VGSYJ7m1UGCETnpuLK8yW9W84c5aNHEd1LiaXa5Q4fXPnbEjbdmqw9wf7gnEcC4",
  "key24": "64jjcPd5W7nNaiFSqrye8ef3Rgu9b92x4NQgH4sRi5qKHW5eE18ryc6P3m9nv5ee39A4oVxtFWN46L8PBS16PXVb",
  "key25": "3t5XWL5JW7Yts2xHJEG9SjPViNPPxvFDUxpsFBh79GGB6JNduJJE9YoprPYgpDZuxpb9ogWNaNhzJt7ne54oPo37",
  "key26": "35EUdvRLQunePRUjkBrBTG6TWbXtjP1ypedwgvsVjdGvgPrDYvRfaggrEjHJkh3Q8SBEATpUfheGpz5LkJRGuZcd",
  "key27": "5xvnNkHarYVBwaDmgR7SsbwxVMpW1k4bUo4CkEGg1RNTL61o8vZXkzfCwwz67o2yZnGL6vP4L3uXvpiTb9ykUSot",
  "key28": "56RSjdsJvPPVu73Q3FpH3qZtpterRcsBQHf18YuiQ2Z3AeHoyvpU1dF3VYtXaTNnxfNeC7bf8xjLkJNEPhNGbjux",
  "key29": "ws94vGPxFXeKu88tc1ad1U8HFLsNYYNpkEy2aUA2R2n73Z7YMX7jeYNhb1r9bw3rphkHw4XwcSQdGgUuhgzMeRX",
  "key30": "5WhKL5BdKHxHEgWnmXt3cmJMqsMcphnyeBsxpvD1M8KSywp6cbtRCkfnJoSMm24advuFaLG3T7iXbreEP7KLzgaW",
  "key31": "3FPZNsDLsBvnewA2JofapJKjY1k2qt8HnfFad7bUhRa9b1GHSZMTcoKWHdAMi1kvdd84owajGU5eG9X5rXL5rvBy",
  "key32": "43SSXmy6kWstRFYdQ3wGaYWub6cBsDEdejN6aEBbEVrCQPbWQUQhbkv2PiF5e6kDWLw6KnFwTz4hmB6CH8ykAC9n",
  "key33": "KV64XZzmtRbxAyFae1V26VrAW6ryMiDfQbcXDvSy3WRv65DeLV1strvsqpyj4b9qZp2VnNZTLHr1C2Dkgn3teQh",
  "key34": "2nHLW9K2DnHgRvAyaWmNjZ65SNQgxeNFzSNdJDj6eiQ39EgEpuAjrsKfvSPVXweMjknaMd1HhoJzD49tAYtQWMw8",
  "key35": "557fPdKaWwKJ8XHWyXkfAfaUDhGLPQwrykBE6mURGqb1x5ieeaL3ZwXtmmfeQA8hQdd8e1CZoa9gi9YSAG5CXvuZ",
  "key36": "23LpcfzrakKSLnfMq9pxohf1ZEaBpq7NQquYgzEbWQGBuAqZog2t1Zz4nMspyq61eJeWWGz3tfWnxCYmKRuFms9X"
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
