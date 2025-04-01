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
    "4PUdWo7kXACuqDcTB2REHULR4Jh4xPeLDJ9o13tsRXHhbhEA9Sn7yiVJS24jr5S3WmUZADDdXt7tNg9vhu1CQqvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqdp3yFBjQ9graSHtwgR8wgZkMTfnYqAUawCpD3yruwCwz87VzW1aYeDYBnpAJQyMLuzZHeH9AHmsa4xMZpttPz",
  "key1": "WVYMqwyHeVEeeNB5JBqaPsnUtCuAtx5ddFdAPrK6RYT5WhoWxgMqDpYnRyiwwXoxnTDUSmrAqtv9wUurNba9cQ1",
  "key2": "2h9Pn3ikYEjRJXQMiwQiTvT8XTDBqaPXiVF8zzPRSunRPs3DER5j6seMViHa3FNXfnJMuUvLd7bry9LPdZDjxT8j",
  "key3": "4veUSKRRJVz2y38K8JmKCmEFLjqfWzzqW2aFAeB7mKRDLdRwx8rpUUYfekY7HQwXxiQUrU1uCG9yvxr5SckSDLBp",
  "key4": "3YwGnbAf4C5dFAWW1sii5Fe1M3hDtbaLtoB6mvSYr5GtpxVuN5JcecWRtZfPoQ27rD23uWAZkNCgR8dyaxgZsib2",
  "key5": "3P5py9KchQENPsHkG6NFQjKF5USjrKXXaTZNtpQcwJmZPeaCLmvm8bueEKpEBhJHX9Va8jj1GUiH2MLtXkcnKQLw",
  "key6": "3yXwTnB3nKENEnbo2eWVWqsBDdK7RTPZqfo73FpQ1RidTcsvbw3MdcgZXe9LHi2LbXooxWjkP5mC1Joc6YBbWUnF",
  "key7": "2tYXqgcKkpWfsxWLGbWtz891ytJzs1NkUwUixiZ2G66bbjgTRigxnFBio6uiUhmTaDgGY6mf4uzcvrbsxaSQb9vP",
  "key8": "2RtzUamHZCLp7QQfoVpEpswAh4ii7Mkzjd5C49VQovRgWy7yqBjep1rMJXG1FrQdoLwLaXWQok79VnPPrSyp3gKk",
  "key9": "5i6X5i1DbG7vj23JY8GSPEf5c1zMuUm2fxYhd9jPJC23ab5Cu5V4j3Hv6m4ZKfxFqzWG99LJrtu1TkQpeKYGkR6g",
  "key10": "3HX92MUw7FecHCRwqyXB22xcFmQSuZ4XA51AWBY5aqtsHfWbi2u2GhetEqyEdSPGG7yKac9Hg37zCdLXHZ35AxuH",
  "key11": "3fUA3vAs55p7CuVJEnPy7aNdUXWqSjCzc1mn9miWmc1d9poXUtK21B4eA1QLxpjBydpvJphXcgmsL7q3dZuQ3Ytw",
  "key12": "3xanibG5xstysZVbzXcYamGW3TtoR2AmVhud6FbzjUWGigbK6mbsNBRAjm9Bmwwt2g1Y7B65hPUVUJKF7r8jAzAv",
  "key13": "658mKL3CuZChRXS1WjYwM5QEYtKEMzEdmnAuCQDAkZPrvVRdkUQMquqQBPmcz4LG51xuBKg3QiBR2UyBEzXXdLgT",
  "key14": "4vCSxfBBWWFmwNFrmADWXMp5USgix86Ad82ESxJBvrKHsNHRiAT4iZo7dcZChyqYjW43D6cS56jmY9wFFP75ijEp",
  "key15": "XwRS8jyFkpZNZwnXcEtaqX5Do37ksRrJtiQtvf2FKwqgTsfh1ttjxQeUFK1wuK9Atsv7gDh27WwxiMHmVWe8pW5",
  "key16": "aaXzjRXfQC8evchcJgBNM3x3PvZhvgFfP4m6Aq2c7AVeYX8KnCMFy6EKcv81iBmcgr3MFDpow1RjpT5bgbTgMzc",
  "key17": "estHmSuWyopH9txtqMwS1fG9or7b1ZhRpmYnP8BzrqfYxTbsaoCLnPb2NUrbdY3JP4fPHQ3iEP9cH4PhNafAhdV",
  "key18": "2EcYJgmZbqR2J6NCowDPcswaKHx4FCJEbk51f6cyWkYdQy4ngUjHFuYLneSHRomvZtT21BVts2fAb3CV8K62BZbs",
  "key19": "49HK7nWSPjB6bpHVH73KHsseW9gRt6MmkzppRxkN3rcNzZkJit1LBgjq6DmoPE9QULQXPEHpu1wZWNXouvCHgMqj",
  "key20": "2wuN6xXzxneNySYzbPWGC9nk2UMg9k2CDbe69KwUWBYREJVEPg3A9ewVyvA319aAaG9hWouhFEB2uXazFWJits7p",
  "key21": "5wbeMK67NsJUEWHm9f8y6uGQggcPuoB6PTgHHGPgyDJyfVZNi1K6h6tF6FEVp7PFucUNi8w4Yxh3XLx23WFrcQkb",
  "key22": "5Njb2EpfGhPBPcbTQY4RcN5AxjoMpxsXnEC2myrXUZ6Ke32CYhrEtdUJ2RCjmFX3i3NVmevMv94CV74Q5MyuTjjd",
  "key23": "42avA71zDi7cMYz4WN4rPga5pstPhY2sdhzxumjLDgMgFxaAZT44r7ZcxjZ5ToTbHnNXDSA5duBJJyZsoQNbvZRG",
  "key24": "36MQNisam5G9gb4b6sReNCgH4r6WQU7LckNRb28cn6JainXMEdhock5Vmd9iGXJJe8tEH27c78ckjRSaxWAkmH8i",
  "key25": "5oGSE4TyS8frX9SgXHHaRMEVpuXr8ZfPUonVsEG7qosZzdzbL5TWE3VY7aC3fMxRi1Z4morzbxC46wawY8BmzFvx",
  "key26": "4khHnmoNDBNNdZsgDoN8ZRMFCfZTgPUgsmeNj1K32FZFr72958xfcqssyAMgshV9TBkN8WoPqmX5KXDXEeWeDM7",
  "key27": "3uXaAUcSqHfqeBDBs7MXfEv4FMViwksUscKe2SFgcgcNy7gTCPvpnsMCqKNzdgpXmvGRfy2BPvfSyKpCRotVvNgk",
  "key28": "3AH5YM15iCYoX1amTXpNKufxfQjEnvxfmDDucv2Y7mFvvWL3ebJ1aub822rD26wZSdJviYSMCtvoifmQrpfETsGq",
  "key29": "nh3ZHdehmskJRxY53Pvrg2d8UXHxgMKsNUhTre59PvGYy5wZ6uYy6sKFEkbnDHPkyP7mptbBmbkLjwHMp5ZfPB5",
  "key30": "3EgPbSi9X1z7LHynWByog67tMqGge2j7iDoFGPTaaYGujDeCWaCEf8NXUj62TcTS71Kx2JsMriMRo6o3EkKbNWf2",
  "key31": "4gWhqwv9SRL2inqLRLcRkENGvABeu66b6PFAgssMaE6QqXvBtW5KX4Y1pAHpggvyYSyt3ky9cFJQacquaxwDztbz",
  "key32": "37BazsKu2Lx1c9z16by7pi65RkEddTYzfwN8p5S2HHiR21VUm4HM31bArkwfgM827CLUKuZcVsaiRAygicS21yTY",
  "key33": "2VbKQH2HgWFBcEr6YZzQNx32JeLw3EbLRRHJjSu9Xps7qVJ9yjewWRG5BVWXQrpt2ppH123AbYCpjQn9cpUu86Un"
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
