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
    "33NnwVQKvwKj4Eocn21r2AuGzJgUTo6ySU2JtUG81ZpS269GouSKwH3DFqa2FtxCMWnksCT5Pei4k9a6qaNVAKeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWf6qc7bnWaLYTvrdqziZdpsJgLfC7JZhbS4UGeuTQNfpaSHux5ynVrBHQXrchekTYXPvmmHscEy3pNKixou7Xq",
  "key1": "uGtrgbiHZAwLjQzhmfgB1kWJCdqsBgEn2FdL62Xniy6rF3hqbayk8fon8zTc33bgC1oDPevWRzRzHdRK9jW6nBL",
  "key2": "zz2myzjD4xQT5uGsW6sVUEZdByiiNU1E29q7wvMUHmnVTFzGAQznhgSPiJKrSiU4wPR95xeQP9Urbp4iFUntphF",
  "key3": "5nqP2aXgcMZLKQJpdgoUMSaEav6sLcW44UYv2TCPwxs4fZWjeJzQVKsbB6EEQeQ9XT8QY4tWEJZnu7bspZtCySZz",
  "key4": "t3Lo9CxdZBHEFpqjnAfNoqMfXy2VLK5JJvixKpGc5KcS3scdh2r2i2YW97ixnwK3fVM4wiv8ssFs5a1RBFH3VKZ",
  "key5": "4vRjLHfssHWRUiyDGKF1kDUJKAjxE7PXi5djqLnqgFmhipywRBeGSJoo1nm7nUXHGm5m2zx4vND9y9Ra6sEvsRdN",
  "key6": "4mbMYtP7fsPEjRvkWdKx68GHTxmj9NubLyo8m7YvCXFVNhpnHUP7sJGNP5pu39W13dt5JdckBnTy7W4qghCcusGz",
  "key7": "2ATjzHaHK8W6hjMG9KyLTp6tsW1bFTVXs8y2wkEt2fvbefVUcGeEJwQS6Z4F3dE79AefaRMe5VcJmav45i88m4EZ",
  "key8": "2yrqEGp2K5rePE1t6t5ejxeEqDQxHqEzgeAENX8GcKgbesL498sceFRidcaj3BcwGG5C5GsstvsJyye3EM6R6CRx",
  "key9": "38nhMzEhsw4d9cLkrpAKCstVDjm6qRMoH9mQwDncEgG8yQWCdaYs7rnZCg93BWCQabLn5dX7nB4GYJfes4tqXW1J",
  "key10": "5GoQXBAqY3zHn2Z1KJd7fdFWgiBSz4tmJMa1g91XjiF2Jfw1Ndw2TiqvSEKua5dZ8g7EpbDW5NCVaf3pPS3jA9QZ",
  "key11": "58rBf4E4embc8MjdwKCboamvAriw1hLcjkfHKSG2BPdXbNGSZZVYwwaW1SujFspe2yhYMRXhLREeVfeUhRrTP159",
  "key12": "TLQ25912mct4KTp77AFhTGh6HXgJZRXRD23XpMz67kP9BMAJ4Rwy3yhLsAWat7dSBT5Und9gcSwQMXa9kYwe6nm",
  "key13": "4LMXNnrZfj5guJb6nthRXfMF5uKTaT7ckCCU3SzQKcTE94kHGzcCFgkt7Vgiq9JvAy1UCYiZBuqYf79N4FUrgWJL",
  "key14": "2wuqufaJAMMqkCKLmDBuq9iBSK4Wb3sTJcav2NhnYV74JMtwdJjPrDj5w7PdofZt43oVqtBeyp5Hjwk76YUWUVKJ",
  "key15": "4rsJ5hiGDz8rqVyuvVjjEoMpTrRRo8YeB15heKbCi7VhBGxgBowwPCHkkMUvdGCTxM5aXykkyAsJyk6yGVDcyHse",
  "key16": "5sDUnZYDoqHJTXPB5hoxQtqguCioh3LesdCthtQ8juih57UrVYvJNXrsViQf3AMuEgh2GAM6fpvgZdLg5DhraTr7",
  "key17": "4R829eys2Ba83XzpajSXB4ua2KofbXGHKjfMn6PW5cDpp6VtAjSC93naemAYaCYNt3WnCWJAC7UTuHcEd6sGC1Bt",
  "key18": "4HvYx4i4QYHJaEGQE4mJ5us3pXRV61RHq4yvZ7fJW7S5BZFqpN1THnmrkWMYTAgiX1SZaqNo96kRb7QbdFu48JLL",
  "key19": "5tteMPv7vrkKo4T7kcpRiVGvrpfVrvts8Dnwu2uT228P1JA5KTcuHwgMEQmAUSAZYD7v5kCMjRr2ynJJJrsDdB1Y",
  "key20": "24meMm6JDytUT7xT4D4CQaNJBWS8i27J4usjJRrLQiR1oqLJo5uXQDdCsRXsvScBK82Wk9uAi53FmPrsbFJir74y",
  "key21": "CR5qLZZk6HgpmAogmzsH8nALeoPbKPyXxJZGYM9WgynRRgT3GzogsjvdsarW5Tw7L8tSJRvPjAYhPjgLJwrDjcf",
  "key22": "3gVoyoEP7nNFHpMxQBHLXaUoqdF91ooG9CxRadSTjvZqt7ZxHdaPZ6NZ8DZK7NEQxRAMAYRTjC6HDZxDQpJ4VWG6",
  "key23": "2iKLy82yzKEtQuJ3SVxfUZGBXtQk1aEAfBQCqMPn3ouMuwYfVQdiHi9Nq2bw3U2QfkanZDCBMYqnVKVCdXqMZ7oz",
  "key24": "4tVBdzkBMwraWAZsfjoM6LeyfmR63RJKJQKv9xWL85cepLg6qapMmtUjsgC3GBBt6oZh5UUi33ZwNb8wfBy8o3u4",
  "key25": "hR8fvtYXZ7KSXV9Wdv99nZQ5WEsDnaneZmdU9X95BPfgHKUKrsJD3zUQb6h3ShGEoTebKSCfnTjmz7n64rHwmmh",
  "key26": "4LWMppkHNATyz19Zop4dSfNhexqJcV48xAjYdyFVY5GZS1Ggevw4uHVCJVZgbd9Ms4cus73FQQD9x59RmRXVuyfm",
  "key27": "5v1bZSWwA2QdmZN3mTHwP9XKwsi68CGVgtHGniK2fBD45GFzM8WgRSpsKNniZkBZHLVV3kTCxy5WfAkAhoMsaW2",
  "key28": "p6g2JyKn82rXtQufVwmgCtVtDV3aCLDzgy2JeKMYZhiD8mr83kQMWERGteD9BkYnUCVMXm4SqTEbtpJkZnqqf4s",
  "key29": "5KhQNqVLqAeDaUDdXzniCEP4zmr9kp929eCXEkVsbqPJ7bvVxoSZZ3umzxCcCa7xmbP4dg42JKKsEXi9KiL2U31S",
  "key30": "4PZwwAQTAdwafyXJEGGVTukzocQtbxB6F9ruksbNRp5ih6t9YYGN8hiEpy5zFVpNq8VJVc91k7VZrVBMsMutmaoN",
  "key31": "43FK9mEQygRLfwa43zAr4wm14FpnDj11adMdwfRuvsdpnkD7ZpYVHEH8sCYMFgyfRzzRVpRYFq1WD69ED8s55y9s",
  "key32": "5VnEfe4LPPeGhargHF8jn3yNXkDeCknZXQjuKVh3YotRqQv2HknDFyncUmXhU76YGdMTCkZ3SRsPxeQqkSePbKFW",
  "key33": "322Aw7p77xy3Gg3Q3WQcB2dycgMSSV2kRzt4VSeYXQaxEXnfHwF9uq2VaYac4pDsjXNxjfyNq1zprtWUNYYwCxkz",
  "key34": "5eNNKLVKSx4PS2zpLRKJRUZxe7EXTjy4ATztPrmxS7eijP7vBitz1pffqk774pHYikU7yvtuRHs8PvMpb17KnDDw",
  "key35": "4gEaAa63LmgXwYhsZTg7RyuAxxVR9CtybLxbG93atYuDazGPd289HUCtQo6vPuqMDkmhFULT1yANmJrYq7kFgfjc",
  "key36": "2NjM7HQ3tt81otinrXLtsW8NmPBd1hiymuDTTUthe9sGi3gkMEP5P2SqgucziE3xT6WzfazadawinqcXozRrAryD",
  "key37": "2U1dKSpxZPJYFJazoUHBH8QB5sLPPT46CmNe3bDrJqLKdGYA8DyH9ynWqhDS2XgQUGArxxWJNDi1pntT2bVqF2UA",
  "key38": "2QZjx2Trx2nCciFipGEo4KnxchCMex4nsikXVBkhoLm9Chwwgx5bJNApT4wqaVcyRZd8yhFQCAoE8d5XRZ6aoecb",
  "key39": "3txxeQU2zyMQ5iz8We3iChWWfXKRJanAzpsY7QHf8ed5reugo57rnKSvEjPBYpgkKXwstopcVFDkTpnhXt7axwoj",
  "key40": "5UT5fyVKg28Mojm7DktEJEroMQ4rD4g5EJtrTAYS78jRUcZKzbrHFg4kR9UCHheVwjcu2MCqWXWryEns3jW7pUb7"
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
