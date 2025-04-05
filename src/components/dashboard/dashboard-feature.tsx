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
    "542EJBTY2PNFHBPThpTa3mnbxSLruG2ZJkmT8XM2Nb2iwZH2JUizYgcGuXhJGMWwW1cTchyRCHyciWYvH2ipQEpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRZ9QsVgynBo6gnZKrCedo1jss64i73fiFoV83XjoKaYtNfh7odbxrDht8hVd7oJx4eJZRfC29gBEnAmKfeAiF6",
  "key1": "5hTQ7jxnwxm74Lc6rQqJY2CYBnZcwKr9XRDcp4WDrTezbVPkkpXyUY7v3PUWY5pytgH4uinJz2T3vsiWwb19wTzg",
  "key2": "3yAb8C4XEdT69D5h3u7ec7AuzxT6Lpc8NBBPqEbBPjWYZHtYpRwPmKiWJJLPrGc8QZyfdEca1skh7QjPCWE82coC",
  "key3": "2SuRQtq6xD18rqKPD5j4eb4aYEqq2pP4tiXJu5uxyTG4tFdV3zRHobh39BeJUXQtgjQWTwHwVyZqbpViUSxrCahd",
  "key4": "3jh7yZkioJrQojp6Hk2YcnzoQv3EFJcBr3o7Kfk24SWHSVUNg52PqV3JUYvXW9TZHaYddLSonTKZ4bvKr8BZjJLR",
  "key5": "2yP8cwmYSqJE4dowM6xyF7EKnT44T2yd9sWSCLTARtAwDakZoe4K7ioKv5fW17CQsJsPNhFo6vJF8BmqaZmc7Qgf",
  "key6": "1hD1bwKRX17UbMjw2vvbBwEzYbAZ9mgr3wFyyJb2sEGuDTAahSqdZFgbFiJbjLg7er61bNw6EbHBWa2yTDdJseS",
  "key7": "4yDjCdrCi5SbtqdgnxB57QpNnvKdxCN8GCD57Fek4eGE6fZudrmGzsL2Lhnpesnga2fTBXrNiM2ancUkwHRzcXj3",
  "key8": "2DL7nc6jmsPEfjSRerME2XMER8fMFCZS9pv9X47Z5TLoDyYNpE6UusQtaxj4D6S6GXA58XYjnwm6wBLJ2Eer4P3Y",
  "key9": "4VwQCtpaMTKdrseXnzCPAjxpZ9Lk1f9Q12jYia7CQKPVk7gjDuKJBc8h52jS2s7HvVXYJUcvjRVfJj6KmmFM21N3",
  "key10": "67eREguqPAD4bSbCAZPW8NnCC59YCmsoyYKJq7F1fcxFXPuLZyaYy2SCMzocBV4TyFwNVmtwVxRtNdAQKnPhxPfR",
  "key11": "4Yu5sHrZDQqYW64VAytSqT2JSsRQHsCb7J7q98JmeCQAopYR9hP75BKkKSiZoMJfuVUWtWois91VST1xj6sF522A",
  "key12": "twLKnqf8srYNLbN72EDyaS5AZJyqWU5cLMdHBgQ8M27NWS3833qt8qdTBRCrhhaiybuvcva95vM2x1fKKPe5K9e",
  "key13": "4PSUzknX8fCcpEY2owBW4DM2p3d25mhVDbmBGvjribHT2JjLXQbTMXbfdRi13YWZ4gUEiE6aaVAAVCY4srwK9HXJ",
  "key14": "35v4d2bvSeDjJiDg5ZRz6xVpmK8j3xbivPjHY11iMhj4ig7E9PkD2KGFnnAxoNLzRzNQDMcHHtJ31ycFH8pUFbzi",
  "key15": "3A7o78yeBjSCqNeahTuVFf8JVyRrUDY5nvXCs5r9dejeFxMcgnwbvh3FJ4gJAaMhxNh9DcxxGM8oRRTFv36HyCpv",
  "key16": "5hXptFqU4SdU1XLnvcSWnRej2AfB7SNVifBqQoQEQf5wQtpg5486ksfPLMoyWHJGwtHBdi4NwsP7Qqg6BcCpbawq",
  "key17": "5EuydBLw2GidosLSPDYqCHjSy9JybGdTSpKNwmabzUs6qRXmvxThZbN8FHCCCfY67LcUD9PG28irHgSFc9sojoWE",
  "key18": "3sHwgNjbMP3j4e4pny1NnUFCwk3FP86S34eofvkbbyMs4R13MTXyeFAiFSurkj3DbW8WzkBM6k2yDuUL6HGfj3or",
  "key19": "RSUgJ62zQFAWNRXwNZYZShzyTknfEtXjeAFCZtYvr1jMpkDkGe2bcv3suJcYi6R5voqYNXKoWCEML8JYMy3sNNS",
  "key20": "5U2becUi2Ppb5nWYD4q2rprBtnK2Cm9zWk1JHQmUPaB4hKw4q6K3XgC55HKav7wuj9VxqPjSNJEKLrsDoobqWYMg",
  "key21": "5WwutWcKPWys8LaqKAaovF99xFmAAugTnsny5gcTd1wpFzLMShf8evZ96xkPPRfgSXVggD7GduKMN8T9H1cDAeQ6",
  "key22": "4UmSbfTc3k1wGqix55jPoeebwxFAXaBqEkJUzrxrLBjpR1iZB8gUsCHJnkgAU48vLXNjQcVvgKvuzsE99px6njuF",
  "key23": "4R1HxppxSBg8aNMSTXYfB8DPb46cSQZjkMrhjKKvg5Tfnbpd99gGh1nAtkFKup9ya2ypiHccYyeg4vBNyLLXoedh",
  "key24": "bPD2kbrvcYeHGCaDGifgVZBoQDYVpcoaD6Rnrm1CC3A11JfHdp61mSZvPyuFWRkToxNdJnBWZjpxneACMMR7dv3",
  "key25": "MP3VKs3kzypLnqdKmoEji33wKzmKi5XtrWDQTgJo1etzJMz7CQ6rcuQB8PRvymzW1MKhNg4F8XX8BUvYeRw85HV",
  "key26": "yaDsv4fRdCLd8brdG7JDAZEzKJRTNnDPQBTrRuD7juemoskEm5oTnDxdxCav2oQQuZCpTSSqCyjhHqRK6UXskoi",
  "key27": "3QknDkM9wTp8byQUoz3AeWYkQPTPNjigs8kcRk8rX22YsNutgyuNrggxssfN6o9ADGmkiTgtYLtAM3q5D6em8utp",
  "key28": "5SCuYNcxhabv8AHZuvMookz3zqzhJzv51KJx43hLWts5xdC7J9saSvfPyAR2jXym8WXDBdcn8HMPqs81JLyar3jF",
  "key29": "2uwxgivXppHAeSvHrZbSJieovZwXfSvxYEFbfvguD9norKr3QAmTHuBgT86mJ9P1CsBjFtTKb3xeHyTBzwtYGBFh",
  "key30": "5VJZLw3vmDv1AL1MoUMsJKr32g9Y98ugNRo4SxQ7c9HkitRF6fNFnLvx9A93R6fy9L53osmGxsHDhNuDFqJGn1mo",
  "key31": "3ZmWdgMJ577joQqdoY9V3D1WPnmPC2GZnfF5iZ2BrHwjk6CVgiDmmiFC927WGuzZkVXQ6FKj6SiguMd35QpDToZ8"
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
