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
    "4KrQXsU5HxJY15wPK4P7jwz6CNGZyE6VFVGxPbhmGt9Fr9UAmZpyFT8VRBXWUYtSKyigWXS2ZjfQ3chhM4UKeHuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNv54ZALUeu2L5Qxg4zDEEUzUtY6yHWzfnLvZion9NvitsedERnNXixyFKDARrnCR2mp8mvxRifWPr9NMbHfu5W",
  "key1": "5hfGBReCvaTAAYqtDs7CQsQvEtDyj2W8KnbQfuEWhK4KXVsvNSGJj49R2GbEb6khxUZXCJxPKED3YpssX7ESjUPc",
  "key2": "bki6G4tJRgCZkRhQmsczKrwGeFuFMBUDmiMhATbHpHAaYQVGyymERNDvqKrQZukMkiQ6cT7wdJ84nh8yLiGVd3V",
  "key3": "6K4PFHGhNVwnCoETZ41DfxZJ9SdFMgcuaRPwkPHwhyGqqp1QhbKxCVJ25Mm6qjgpgVpzvnFm7A7uPz6HC7mR4sV",
  "key4": "HeJCKHmYBSnszgpbja4a2HgMShmcuMNBj9VtCsfzu7WUtymDzMDk1NVYzCuT1TkbDPuzZ3wCPKkFATvwnsLpJxa",
  "key5": "2x3dzK7RwygKXsrpHeYfYhCJTjfSF7aVQPoZSAFtRiodTdhzUMbFAZianYQG1HsyuXC7jC8wdyM3tLVE7fFBrYme",
  "key6": "2Ctq36rnsaaZ5oJYcFGqfM36FCjP6cL6koPvRpnPZddc6GiPqpyCURXrS9jai5sJ2Y2Wj8vCFLNybRhy6RnFFwJu",
  "key7": "4Esfkjc8GFdkL25i1X9ArV5J8DTvLQpoN6MpqRJZQCYKRexzCwaXqUHfAV87S6UkTQjQ9gkfYrUPrNzq6Jdy9yX3",
  "key8": "25MFJk5ywi34tzaE3eBdGU3Q9Kft3BzGP7ZN737wqdvFH7Doc9Kv1L8xXbEGbmKom2mSvHXqDGrzttQ1upN3fJkR",
  "key9": "4pmRQJCZKSbRmYgjmZJhFZWuqauZhToK8XhPkXMd14SrNV9JMoMqnhp3Q7KqTAfnoKaZ1WDjAsPtFp2ecJ3nPHm9",
  "key10": "kksj93treUDtL4FWW9BqrRrZQ27i8bDRyr5EJPeNV1cWMfHRMK8Yz4m6fjFe8tdWtCi2fD53J9LycvQWHUPbZvv",
  "key11": "2nxepLJ3VNk3GxEXUkAZ2VcTZbD3L214EdUSGJMGcmXa6ZeYisWDgx5ZTCZrPhoYiZ2AeMWi1PhBuTrMjx7poqrs",
  "key12": "3Up36cZfAwZY5K25Lm1tRKxL6SsYaRaopNEK3oNMUzRockFr28n3uxYhbwEK3x6ANhELt9PP2uB4buARzPAyHuwV",
  "key13": "4xi43H1ovkLb9mRQtgmVy16mtWi4G5PwGjiF4XN9wTPsczbwx3aX4tc36DHhscE5Sa26KAAStDXUvtmtDvuyfVy9",
  "key14": "43aPaYoF61Q8tugZZo42kZNnECFq7Du7hcLPjaeJRB2oGHUXVR6rVnJhW67Zpiwx92gxZvxGLgBGupBefhN6F42Z",
  "key15": "57dNNHUSugzUYZpvwQLVZC4g97Wr5Lu8mrVqSDanBW9LAw2awEdK7gm3CfHzwnznfcqB2ocUqj91krqkqojpZG7U",
  "key16": "293YTX2TeLq5iWAeqVaoqL9LXVVZujCz67t5t5tD6R5LcaHRKpuWAP8pqP1SFUmJm4qFcAcRDHjYnPJ4g5Z4vZQw",
  "key17": "47HoW7XNWdkdt9WC1WLNkoNERoCp1kPmB4GnbbGRNgtaad8yMMtBRD2gsomWSfygFcusjC9ezeBZokdVWGWsBFMc",
  "key18": "26FrdvvuJ8jNWUCNtKw91QT5QnMHGC3nYzJ7emztVAgkP1pj58dG4o1sKjxyfT7c4hNiUgFJEwAPt2GetR6hMSBQ",
  "key19": "4JNfCHnMgpDxxjHjwUMm42dxuUB1izq2dBRaYry8gza8BY8KhEGy1woyfpiMfhvMwSyEnReD6MXt63H61Mb4b1j3",
  "key20": "4foMFS1z6ik8TvBoveAnsKNjhDbqD7zCsqmyx9Fmavrpn2dAzvWCopSX3XB1A91gssmhhtJ1Fndzr8fdGaW4dbup",
  "key21": "2G2rqJ2zkjDe3YoymjQEJ2bnEXBfSZwdhRBHHbcDfh13gc7WFqZgNaDkQdavavURxK8wKNkpJ7vYABYKj2tRN9e9",
  "key22": "4SFSWnsySMvCjJMnqRTa6nPyCH19VHFY5gJ9Xw8ZZrfEBH8tcpS8yBfApvnRkxUf4Bnwybso93jNvjbfULWVvQgW",
  "key23": "2mxkXmDxABfYcj31QsjiDQhgdf1HE2q3F3Df2txZAYEADc2jofSarxorps7ehtukdZRqYhF4GQKTnbpzEw5ZT5P1",
  "key24": "sbkESVuhZKGhEsmZHDzB2uKS4Rj8RYNTbgDzX7A7zUf9Vr2j7uZfszWL8H1Z78wTqVvTXsou16PGNHhNDDwqKkL",
  "key25": "4pZuyB4NpYCpZFFY7BWhEpnG3FAqs3jtMNzkvtxoQbAoEwgFHXK2UdiW7FHsrv5YQL1vYgfgLXBftYX4X5dkFnX4",
  "key26": "4FZPU5Xyp5ygw1XBCov5MsPZ17PmPrrxXNwdPa9KCgiNGgAHAwJJjfYLjEQNmZDnw18L6onfc5RrZYvAqUUqyDnS",
  "key27": "4rYpWVpxHayMkwk7zpCd6uEQhZtrkBW496KKR12rDjTD4t4n7xQveZzu9aPRaShxTfoQWFydC9CiunmPxLgpRQJU",
  "key28": "EhVDzXBns2QbTM2Y9DTBjTubWcsYQriG1zeY2nbsGMZcfUxF1xLabxJX8YSDxRWv9PqaDHERNC4BXoL2b4f5bj6",
  "key29": "4hUMtKCpP5RmE4MwDqPimSeK6R4b1SxBe3ko2BPPvDoJgtPj6VVGdtvYpyJkFGfc95bFAvJjFYGtmSuy6guXUHRs",
  "key30": "zLcVC4GoJaCSTpdezVFnDeWYdvKNUJ1tM1SN3W6xkCxHEHFccex5AbKf9HnHNheu2ce1YNBpYfRKzX6WXGSg5Tz",
  "key31": "2V15VRurztQkAgZ1DMRL5JdPzeVni6YTdWaM4ruRDb5uS4iFMvpRNomp6TFochxCFYEwHcGwxyt3dyHHkXVLtsed",
  "key32": "2CDZqfK2PSLtuDdn49c5GE1UAQM6zHLTDjP5xBxSAk2vmvpzBDjiFexmnbxkiQT6UqDLHbeqpXCaQibZHQVfA9DL",
  "key33": "fuuXz3ykMFKiBm1UsBDTUuARkCYwvEJTN8e5VmJCzYqpTMrbHbWLLDj7trYq2egnuho4WLAi5xk1kNxUZaPkpDU",
  "key34": "4N9EHRJpvH5aZmRgdzXvNpCpKAM2Ng1AWHdzKrdV1sgfbQ9LpLUC3pPaMfqmQd3etJXQyrNDZkucaPQgsQ5qSwxK",
  "key35": "3mS6WoP1rKzabUqXZKe3Fod9qS9u8UwxCyEJzR4gjx5E12pC9f4Lo8H4JVMeVeiu5UjJvsAujnvZiTRpujKVNSNm",
  "key36": "2v9zGmqcJV3CZxCv8xqvBUNkyFndmPFwuGcDpLakRCUhPuGbjFiZAscY1DHu9tyxZqyWx9bQJa99CSJvv4X2shwD",
  "key37": "556KRo4Zu5CQUFG852meB5BFY8PdwJSxVE1wUbY13KtNdE3zBvBPjrLQ29vwpveKdzmy2TBGMKBPr8mNQcqxktFZ",
  "key38": "2za2LZ6uVPExNdYnNaKun6EhSJKzbGq82ww9sG23gkjSYFjav4c2REM3YSJpzJDiqXxVyCSwHJVmZe4DzJGYPQuq",
  "key39": "nZj8uytocgZDvFj417UxJRiuNnq4yQbx9uSWR9jhw3tdDsEsXSgqxNdzsdL9cqKXebm81ZnbchdbSmPWqCenKFW",
  "key40": "3JvRNRQN2QThAm61LZSs5J6AuBaetTfPH3vUJgt5QNQ2dy9pmW68UNj5h1vcnh8K5Dj62DghEgTEfHcb95opLxuV",
  "key41": "3CNFjgQ7xniKprAz8YxVWT6q1E6wve8g7C4RzCnCUEZh6hXY5FS6JpZ8TMv6EmCeWfG2Uj9Rw5PSzPLFLigSBEZt",
  "key42": "5e4iq2sZHhPZ34ZVEM9kQUTM7Wxm8KSqP6CEAqRy8HazvhVoXaKHhFqKXaE4MPWsjVa71bnRLBV9VXdnCxR5Knwg",
  "key43": "51S9UCpLV7d6t5runRtM55Y1yxgE2utTAHfKUQa8G3osTonTd8zbicPhwctyAZ2AUxSqJmvXPjY6633xS97Yj7cz",
  "key44": "3fye83pJyWvr9xwbLGjQdmKb2gibkTbwfNDK2kf8edunW1cDPGWRBFBDr5tf6brvwcXu4kiMxq879NyGgz5SM987",
  "key45": "3FHUsLAhu1jEj9kUc5vMmM7n1J8sqvy1v8yLHSjnKFPJ3U43qxxzS6EgMqoWnAhfb5HKvpqAgNg4ixkidCbnFh1n"
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
