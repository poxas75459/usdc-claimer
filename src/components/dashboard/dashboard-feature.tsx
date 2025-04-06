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
    "5UAkV8U3FH7y3AV8YriYymcJ4r1e5r1rkXiw9Q3ZzrLZQnfNg7mSYbRdBdHPHi6DNaPzTXbFSNiu43KbckXWd6Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anrcJLutJM5fsypbsxgCotELpW4spXR4MvEUXUpGjL14RmyTd68Mf3wgnc2hQe2WnHkDu5aMnnbSHESEV51g9C4",
  "key1": "2KZTwpU99qw57QCspSVoHXUEkFFH8FK69iKYn4N3BJvgWJ9YJMwm7wBwbV81Hq8BGP4BDCvVPCstq9ZudBZyak21",
  "key2": "3uFutixmS1p4kGfpBMCLkEX2V2tfnYutfywZggmbPqd3orvYYQ3SMqsZn7N1WJFsfyKHc4EePUP6pHwZFiUj4iaR",
  "key3": "4Y3MaWGuYkX7fPDjN7M2T9JRXpy9s91HE4myrjWeD6oqatryuASEHL6kMTRg8T665h6g7YY8GgypGjYfpT1WSHpG",
  "key4": "3h14k3QUjLnoUma1FpTEpW3jrf72gudxGFVJC2uzAnP2vEpDkA6h2rV4JVutfgYh73xNNzYhrkP1WUNte7aqEbXr",
  "key5": "J52PdCfx4urmfehiXjoCF3n3ceFVth7PT4hmpj2k4J8Jns9chxKbMMiauJfEZK1G9fJUpPzhaoen6HHHNNeW67p",
  "key6": "2pnoapdYRtgi6fMZ2UpWYoDCrt1AGeejAN4PDBf2xfEnS4terxuonFULumSxwFeM3LXPBzTYNXKVjVvmWz4hW3ub",
  "key7": "2cn7CbA7xUnYQAHRjvR5HhnD9azsgS3VVjLnvVYeixDega3VhcN1zVk3C5ry2SVCr26abcYAoUzmvkErcJkRjsFh",
  "key8": "5MSa5GcyvU5i7v28CBbeQmeA81V7hv6j56dEnQY7xrE5qaXs6ZjVLmntWhayPd8jWpu4cEeQSLFuQD9FWFCpraqq",
  "key9": "2q5RCBtPzWc5D3MBo6UQHi2Uq41b4wo5fVw7z3FAaZjidocYyRExU53QDB9LDmqhzduaa8hxHdNMCyZBY2WSvxUh",
  "key10": "CDeeQKDyHQPcyG9M1cxQLtk5nGf8nJdpKvozaqhyYZU9ftZneAzcoFZ5qGCSD5F2VuANjn9JXS38jtBdS6yKdTd",
  "key11": "4ShQkYX3Pz1GL7sCzGt7Bc5WanGBq2Eq7zBQxWcnzExvtG51mCctV6WWZejd58NhjeN14uQA9atnyBsc9DqEifBq",
  "key12": "56tFAV8QYCnpkEMpvSwoUGFEHvzXv1QFqTga8E8Wk1M4C7FezFYjWCVuLwk7AjrNpxzPcqCm3sKvgp8jVbQmxUNg",
  "key13": "3PhYTqYv47F1at2ivKYqRLtfseyep3Mch4DragQfqksEtmDucT37kbi3oHxw1VoADTk46GxPwJwg21zh3VVirgrE",
  "key14": "5dDTrWrp9Z2r6j2Y6YqPXHHLAGBAi6UzMjdSk56SD9vQXzCVPgk9EcYJikVNi9SbJCGQbs3W5s3Nv6mttYqAVt6F",
  "key15": "547BMArj5r4Bo33gWXuWbW8fhNXa6hJCJzoRVE6npK8ExNTAQHVDgaB8fePFQ9a3Wuf7zZiphwezKGsfeDBL1HVe",
  "key16": "3YPKaso6iRQiGEoApDpg7Pv6TdbvXKoa4FhzwGvi4qWcmiZkAPtKdm3Y8JsSjxr81Lzcju2hhpFxX8VwbQUqMDpT",
  "key17": "4JijwQpXb5JXdSoc1Cz72DEckxBCXGxomHgWBBN7ixtK8JqjxEG8EbabxeL9ZgeWistj791ZEJXfBFGKF46W3Hm5",
  "key18": "4MvoAi1Q3bcrBShBTSkmtDmtpKa9D6C9VJXNrnUwmCQ68t75JGqogJffi1FRyNPVK2gFALjvQURUN5BmTxUhz7wG",
  "key19": "5pdnWpBNQGNU34p3u3gbHhuTx3VhFhfCJh4MPUYemfGS4N8hirjLHj4Mw4vh2WHrzro12AcR36aWm9q9ihLPuQvX",
  "key20": "2TFNBJLuXKmVu24Tc3hLD9FMuMLvKgwK7ih9n5Qo7oWtSVgKtKUYEdX5nttqb5XxSeATCgeDubxGHGqMnYMQsy7x",
  "key21": "2oVr3fKfSmEUATPdfGCnAXNupyJTuwCvVwNzyC3aahw5xwm4MY3nh2JZd569HYw8PiWVvF5z6Hz1M2mrUd34Xm6c",
  "key22": "GM288C8fefdx7r7ouPFfo39bT5EbiwuFiJkjw59xB21K8wGVyuuU8Dci22tnyhQZtrFbTTeFgpkm2zAUvi1Hy7x",
  "key23": "5QeNxmSxa2b6AEiHAfMtLMTekzLohPQUc1YSuzPR8byHbneCcYg2kRKZtzFmEUtmHUfisiYCLp7QQVm7FGGUDvKB",
  "key24": "QWHt8ACvUsPWenX83g3gug6rPpC7kxML7xz59MK7mDCYXxg2pB26FWScAhp3GRGxSmQMAgWFUbopf4HxKaL4uqw",
  "key25": "3LqjM71AxrKM1Qz1S9fnh3jxm93PqoRrfUp8biyM5C4Wp7Yb8SJjp7AgT44qQHTP3BR4HSFzR3EeMRjnbTN7VFYF",
  "key26": "2sxhm39cxiAN92QJvTnyLtX4wCf6ghPwU9UtTdGoSvJwbyM8yHp8Po4uYrW13xJpcaJ492LR3qFD8WSXcKj2hXuc",
  "key27": "21ssHvJDGtBLmYxAHFwamufAHfMq2zCzFJKCHanGvDfZzB1xBawQtp5dJk1dim4syPoCBVodmJimG6uNvbirMLaH",
  "key28": "3Ma8mfiKsMMhqCArpABDNZqMNDVNzAQRhgtYiGqNvNLKFuRxbfqBRbeRkA5aLFEboFUeHzfwiAQwNMdt5UvVUReA",
  "key29": "3hr2yrDoUvB94bxPW87jfHVYtBGQWvoaimBg9Ur39LARMy841hpW5Xcr64EvBFTFDZWP6STWp3A35DbzujsthqjA",
  "key30": "5sWCCfxofsX3zEcEMTQdLkmy5wFo5gYhXUtFeYuDGH8BdQpGJbPWVFdt8pfD7ityddSXbuX8EyerLyuxhKSYUVgb",
  "key31": "3RwXAzDe37nfTMgyTBgCfDCLoj7atv7kLc7oL1n3jBHZgPwtCYCNKTZwkJp3fkXLm37Z3vN3njb6J3YkVbbxQaoR",
  "key32": "3h8DzmN6LwUJhnxwJ3SkDJmV47nx5qw86XqgxBkZGn5e7poiynyyBq6zEx9vzFHJzq2mQKqMhC4U3BcqzcwrXTnN",
  "key33": "3w6eUHPeuUKiPhUDpLyrzaL413EcQ9UCwscYwjuFE6cUzDQHCxEDHSqjgbH13GnDf5azNxAW9ENuyLEvnvDSqJoQ",
  "key34": "4S478B2VH1ynD4YXgsPuAAbASNza858BzGMtZ4TMm22tY7vJm9E7h5Q9pLEmSbhiM14JM6e7YwWo3SSBwdDgnjdA",
  "key35": "2xFGHfgdnVUm6FxBZmBE3httgkdxYXoPh4E4r1EWNrkAmPH3StAx6mXHL9p1WVVc7C1VSbBanjk2n156SL7npTXr",
  "key36": "5bQpcRJRXnTxt8QRw7p1TYyiDhcZxeg3ep314UY6a9pDrChXpGMSkjYDt7W3ZvjqPkkZfuYLqyNBHPB9XftyEihk",
  "key37": "2XnmctwHBNp3WqHCRjEPN1DEcX4YVHWuttSvnC5nV4Cms7bNsZxNdRGFF66WHWmKyhLAHMsrfxuFJ7vC6Zv8sTWa",
  "key38": "46geQR5BSQrkpTA2Eh2VHjo56kictBaBKKi9Sh3cBHmEPj9NAQvTZvoHKpKBMBByPQ4eqDAqrWGwNdy52bJpet3A",
  "key39": "27rWcCFD1De6DgVc6s22XZofVSsp4RQh1968UBdvVnXcY2S8UkpQwPu5oNTqjBRrBhodotp7oTgj5Ukr1ZBeRjog",
  "key40": "CfGu7y2Erp5u97ctRmVzDVBFdKk6kzgRxQVQcirSysCefXKu4BVyFnWa8XQyt6uUJgRTVe2iRve9yBSoDbJEWoE",
  "key41": "5uB8XebsppM6iYFhvqFuhTjGLXUMPJffCvnzinUT6uLDisaoA3CrEUEGyTKyYTz2dJY7WwKjzXpsf2rZLf4NB3vg",
  "key42": "5PBHtfDwUapP6gxsxoinQYiQms5J5qWVe3tQCdRXETqjz7rvRSzuq15gTMZcowCixgMq7zxWQKZwyR6sdS9cVEiu"
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
