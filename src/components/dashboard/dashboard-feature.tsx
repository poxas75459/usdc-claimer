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
    "b985K5HwLMMa13vo4hkKo9jdhzfztcBcn6PLM9BfjWg87o3yfrXtHGy3KSp7Vhz2Qsw2AcAsx6zoGRjJYMeASzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwJJHcgUArNonFgcur5iFXDvZWcJYdsZP7auTY8w4QTmJEwRLbY6JVH1dvs6ZNFFJTnzEWTKP9jtPQGovrTHBsP",
  "key1": "2HNLhJNJ54TYvon1T46xjfn3omTVbg9wSqrT15ZcdJA13jLt2w5HrPfGBa9DdzgHdifhFY9dH7soFfufZS1ynbXv",
  "key2": "UjoipNxTMW5ruW4eNZuSzfnZ2Yjs1TY6GVDHL2g5yYeQm48mvXPvq2W1bA8cUA2CVzJUBjiyKUZhLK9pgxtQ8Dn",
  "key3": "2nyjrwyovSVQvexvgsfxfG3fyzsdZnBLmA1fv4J3JTqvHwwjnSLVnNYPA6yMvec65FwBnehuxAuxRAYSLbKnno6w",
  "key4": "2R2V8hdt2vmRNf7XRnS7wTiCSsuyAqsUNsRQWG8hU6scbvwiZcXAL7ibaNRMQ9LMJRVJEcBug86uyNGm92hNViw5",
  "key5": "2G9xdM3WYF2yNVea7J2EmJyuaSBGU6tasNknf1XmxLzcGLq5jdYzAs52GmuNVUU2f8rikuapHRL1Et1boHvqKqrD",
  "key6": "2pC4GFKRk9Hn2qu4YyJzhmXYDpyETmU8TdTwmqrSajVE7GiNo7apSspjTe79qBnEAH2iVv8EHbk2pbi5YpUiybi7",
  "key7": "5YFEPvnoYoWa4LMuBZVqm3vu4933wQLKdeqKMt78Vd6BFS6Q9fWrsDSJjKEz8hHwwinpGeRjhMah7UftmxrDxDpf",
  "key8": "663NC4fS8p9qTNQVygRFZwnoycZ2R3wtZdRe7hd6WJjCNCawYniU37AaR85yJPVs3M2JDYijEM4GgRQT5uJbEigU",
  "key9": "ff87hQws2JXUoNKyxseobsSQjUTqpeyKdRkHBuz2MkEeVvmjeUn1wJqsDKL49yA2QqTqFUjbLhVDcBNJMYCqNvD",
  "key10": "cWx4BYh3YpJdzfjTayRxUEWjbhJfxucHU73j5197vvpVCYxQedVTmMAkWU1h5W2BXFjo49Ta4jXwKSZtwkWBNJy",
  "key11": "5VoLmycazR7Xtd2a2jRiypfcrQAVN1kJiSU2WVubmkVBdJvQGGWi33ekv7UjeqHwf1N9rKvogfsnb5GDPRecS5uj",
  "key12": "36b3TF85wfqNGmis9i9eejLK7DDyLFJqd5MizpvRMcw189GP4s9D4sdRtCzUtrCMVa48S3RXhAqmRVYRLitnbF9K",
  "key13": "4iK6dpdfeY7BSKXbvB5vsZVgFqSCB7RDDNmaJ2if1k4CWuZqJnQLaXnyBjZ3ygfwus5EGLfNNAWzFCZtyVqNizx6",
  "key14": "3ihoTvvByJHoPBSW4usiLkHDSrxYrPjGYkMA5J3RGznPgsphaQHE5AAdbFSsHt1AdVy1d4gSJF9xj973VcouLWK5",
  "key15": "63mur3RxHQHcC9FH2MCn6JDVrJhCRnQRCzXNAmBZmcg2czNJZEireBdjR85c6Er4o4MNxHLp4KDvDW6P63FpCVCJ",
  "key16": "3UGvXbojTFCYHo7skERq3FCJkxDXTnARZn3qC2NiE8Nn2ucVCwKaPY3VCFUir5dhQBszi8G3XH9uABBsUDGWrvGa",
  "key17": "5GpZ881TMkSiM48nwsTXTdPuhiVod6fnZFdrKjrz7on73mAcUgbVmfyvvvpstJLriUEYs2v6GWNx9nTNpLEvMuEZ",
  "key18": "5GKW4bJHZoNPvvoZdZcKMBeCQA69Qe6kqmAQGS5XKppLzivuh7JYobE3eWFk2Mkrv4f72DCv6FsHbevqotN9ANg7",
  "key19": "M45qKrcDLc3L5rUkDZxSu5GYfB5XD6dKRphG818VPtc5st9kWZZEzZkaNuyVktbtjxEPoB8r5pVmS9RqqMwjLtc",
  "key20": "25TnVP62GoQ13AdXKrN84ur8NCadYSmXQtfEqe8yYN7CoYSxJcwYjAP7yc8fMRudJSwSKH3cubyA16yBa9vunyP2",
  "key21": "2w1jWho81pzxeCiiSam9HYYJxJEPZUrfeUzpQpXfe7GVSwFH3TytfMgaJo9dWFYRrYUvmzsi4H2eLUEgV3ABrLhu",
  "key22": "4pGHah8Wd5193oQJRMyj9jZQkzVydyrghqJWYX6Tqior1fFqj1kBzgZHcu6h4kEFvLDTg2Q7QyXb89Dy2mhjhpc1",
  "key23": "3YxFf88MzKpiD7ijMYRePwMkyGegNQW1vcSrv3LSUr1EPZampENmQKmxedysjgz9kFApep62CqnkMLJnQRk1zcDm",
  "key24": "46DyRGdWHZkB5HZDzD7iD8hLDdm5qxfpcEo5fjNhc4mfQpsjNJreTrnAqeJUiwyZBAS2rRQq4YdzVQa8SbrXTxac",
  "key25": "VtF4szyEoAmoJ1LHcdraMK6P3A5dCmqqBTT6FHjjLguWvYzCiNpesoQLDyUdZpBtepqvgAnqEfq1B4K4gPF89CA",
  "key26": "QWwoRH9Kpyino9MHVVMgdPsL9KiX7PSKgKeRN7kEgVwkvvQqL2gJHeLVTdJKV2hhBkUkC8mSoUnomwa7cBKcPSR",
  "key27": "5JnZUXYVzenmeu2pJ8s7hvUxod1CkfoA9cnUX87DLZuFsUzXbs8XL6gbzkRdt1mmN43SZ8wWTTW2jwZ7si7C4sEE",
  "key28": "3kWbDHXkTDCotC9UL9t3F31AHcxwr634hq5WG9ePnQ2xeYxSbJ6LSr35RL1XPYq1wCiH6afTwxzTtaLr7XQ7A3Q8",
  "key29": "5CFJE4hrHASVz5bctyQBLZuPcK4DMvznQnH6p2KnXRQ5VWY8xqbXjE2HH6tPwybUcBb1k9Kk6HgRudxuGNoTtFyi",
  "key30": "rsfmr47R3tvoXUizQnK25SHXjArarL2m5o8dazeYdgipHwGfEcoZrbrvN6EUw653UexfhpeSMWJyRbhnwyscgYE",
  "key31": "2reuvK2bDAXCrYBTrtXuvw7kAsTunGXVeRB72yycWaejvPBscHVerFReKxxEWXgN78eRWZTv8T4kubv2qCniwCCk",
  "key32": "D4EMiLaVfjPtwR5V5UPbs12JYVG2Yfmkc7sDsMXBeMHCoz3yRPQUXghHpEdJMigzdGgPxTESAbiRfTiXsFkKis4",
  "key33": "htmXbPrUhgKp2ZMDep3st7NK6GTHEH6tgn9549nJoYJofrCffcxCFdfD4vfLns6HdSGi2xoSufYnC4T6u8BqsCL",
  "key34": "5CNuaPUDSKGNR56iC12vuYBvnXVV2jycfTm5sDQYMKXkBgnTs4C5QVHnXcxU8cCdcdSQCzrcueiqvYQSFFqdC1ei",
  "key35": "5dg1kucnQhqp5zqvVxWom23KYcsEKzucp5h98n5Wsy1vMwh5ZyH2Y8F4Z5Mo8TJjrP7N9ZGQJ4ZJ2RzhB9Bu6hqm",
  "key36": "56pdRVsrt5S5zwXjahh5pG1M6rvMysdMpYwqNTcKzvb13nUBVq8hxb6WTnKuEewcgRfm1CnWZcfDy1UyfmSe8Dxa"
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
