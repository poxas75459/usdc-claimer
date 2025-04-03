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
    "1wUv4Fuo8s56uz3BDxPW34YkoJ2De45mUwYH7USDyvRmrNjEkcakz5MQ5GVcFqK4MKLsePj1V7gMt4CLYmP2jG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5hLxaL8oz5D8DMmhK1sNwLLA7QGHJhZvALjdqBHoZC2v53YoSSEkfvfUQj7gKbNWWMqF6Ncc8d1a1Fw7cmZD26",
  "key1": "2mC3WsZ7FG6PNMsVt7htdQ6JgU2CLWRrEVBcxeW5p6XLi2HJ3LUAYLLVUABKoHQti1xpwM62zugvNJGHQX5oApoQ",
  "key2": "mwoQDBeJBECLQoksrSyitr6Qki4orwodex3XftWg5B3JyR7nrV2TNQnMSH1oA4aoZRDMMtCYFJ4ARt26aygo2so",
  "key3": "3KXjBPEVsJJnj22H85dW2VX9V3fwnk2ghieJcbZ4AQw4v9mECZgWDphTForbouu2wvFKT5VuSmmofxt3UKH2yMku",
  "key4": "3vAUB9xWUi2YCLzjPzTZMQoY3tYh19suwwtytoeEck54JmXFnDZgduS2wtJF8ByfCUb4RrYZfs2Q3KQ4GMoppF4d",
  "key5": "3BhMoRs6A8U7mkiaxG6GFRxdYHSKBvNgKU4k4htxjpRfp3C4wh7Hfo1w4H7jeYgKVsXU5NMS2vytN5HLVPkY6dbH",
  "key6": "2HyML4dkuQqc5QQqnzDhsDr7GnXyTz9WhzNeVX46Mau2Fk6hSAhbPKFXikjX82HRa1W6Zj8SPi5uMkgFzYdc5YEV",
  "key7": "5fcjBwBuLskyz12pE23A5niBFiXytSauLUEoyBqgiuvSzx84A1dPFnshU8RY43SPJbZPC4T9TYpg72BBbJFs1rr7",
  "key8": "5NoGtbAz6nuCRRNNbJJdkUmvAaDuSqGYtd8xoBMRdVxeNkXY9PptD8HGvaLjYRbCNMTCLesG3LaUrwUZQpXEH3BQ",
  "key9": "9kKdjVjcFSAtLQS8z6LaAgvbXMLgQQ1yiZtVdavvVshgzPmzcpn68Rh36QAUK3nYxpMNFDpcjhsmZ7J9n5hBaPL",
  "key10": "HbCLNB8qnqzHpxhF3KhX7RMj4Yz7wsasL2LJgnc9vQNvEdrrKEf9qCzfJUHAZCBkupqJQ3ovKaXDSiph9DBBzCC",
  "key11": "2rLWt4Fd1PL9hnNQfzN3zZWJE91ugDoJgjJo3QZvQEzwQqjvgLv4UhCUt8MGXaDTxXgS6HGGZzbMe5V4VbGeVttZ",
  "key12": "3u7UffSxqad9kn8WhXvhhUhqnDRcyAfdeLiA3dUkW5DAYGtzhd94iS7ZVzqwXu74GfxbYxL3sj1JqJXfso4ViCFJ",
  "key13": "zBffE6eMivXLCwnTecBfC2YxjGWbT78yhGQuHWTZF76GvDur4nfSCEkiRSAtx6ecDDR4UiQAz7fsiwEKqU1ZXDa",
  "key14": "5L4scAxqoYBcLZz8gxXhCRDGbx8YrgERT3bvk6Zt91ZnMCx43k7iKEJ95uK3MaZh6bK1TzydwKgwmttcGNMFpStx",
  "key15": "nLSdTGJr1t9irnWP9CvVHfQcpbtXM9PKeFbSNvmh7v1iUAAdAWqh2h1BX6zXjnZBSYWriuFUYUQqPunsMzQyXqL",
  "key16": "63sNxn4LFYhRpXeCMYuVHTRmkLJMSVVfSwDLLn92jnhC5DQkC7kobk1rrTnqqmyn9yfPFKqzrr88iVfCYnJFTRhf",
  "key17": "5mghRfmFzFaj5roDD2DTnUWAwT2MTCXQ7KWy8j4a19CNmtYUwpEEwizULjvAiV5LLV8JpwhGFqgaaMKrLyJTV4NJ",
  "key18": "2nD1jywLAnv4MyEkfpct9Tu3kejfQt7wYYQ8KYxa22CKX8ne4TEj4VnNDeo5wy2u345pE5iuuHHHeWoQQRR9uvGz",
  "key19": "3tJPqsokRsVBeWovvtThgx1JUPE2J9gL4ZAubHe47nkyKvnExiU8fQGU7vkvqf8y4GVv8zviNZXWBkgeEsqK2qyq",
  "key20": "3hR7F72DdiStafiBDG5GHAR5C34g5X2KSiZV53CT8tSAbLjGBXZBYNydpzHwUMiDXV73y58vBDKuchRFbqZ5tp2r",
  "key21": "5UjxV38QiXZHoLUsshNjXAHJJcqXWJ5DpzijJxJJPyXZJQNY41gnvzxsZB6hfd1FQwib2KBxomtG7irkvgZBW97B",
  "key22": "5hnBCnXsiAfrFRfr3y6RSa95PVTujA7Uvqnqw5DV5P4FDoWsdKE195xi92nahjb62WxpvpcYpBEzcW412NAyE2XZ",
  "key23": "M9V8CvTJYcTsyWR6wrcw5E9aniAJQDsynAX1mqZF7Kpv5rkXPfHeBBG8w8YJCKM3D18ZUfyszymwEiNXp9LWznd",
  "key24": "2UZMNnUDVnDrPeoQfhkRcHNCuGSDcgZRxAYnXywmm2gzMfXcWjHYyrfk6YCehXFVDEeM74DbgyQxVbaa8QKvqb7T",
  "key25": "5aqq5g4VzYpN4DeguCoL4aiirreuPtKqsp6xzgDW7yhDu1TrixX1ZMRhkwJyiWPHbWvVzX9pGmCaqyjbG3zpXweB",
  "key26": "4jHwok32YQhsvyvuGeopnSVJ7vF5ZEv2fM8BygJ7p4sJNmJaF3a6mbYxbasf4J7ET3FySy5apipQv42XMjG7LJ7K",
  "key27": "3sM924krYcfFfxKL53DvQXijMfjxUH12XjrV5WXUJyLstE4H3W12vUB64mZqnL723Tj6yD8LpmqMzB3utWJV9ECw",
  "key28": "5KhhrHo5hsi8FSq6E7KyU4r39RDqsQuftPu2YNeoCr1Ugpb4Z7A3b2eFS8mCcLwP6iFpzq1iSBbt5BeFeYNwqCHX",
  "key29": "5sMevLTRjz4qVxvjSTgkx3HmwEYpsXe35T5LREiiihr9NouqKcKG6jJ4pwdQtLfFFPQ3tp4fJX8XJUFtwe47v2JH",
  "key30": "4JP7bzHbMnJje8g2s4bpVw5iQmw6EFoPidEgvShwWkcXiQFa4UCXKHyabRV63ZiRJK2t6w8zqzA59fj9tGND9pse",
  "key31": "NDYnvzg1zpKrDarQkFaetGEz8dJWjpnUxJLsyNHwFnYW3HrQJKaSHVnzfzR9C5dqdYkdGyxSFwqWbW6JEntVXjn",
  "key32": "2KhnWnLp8Rr6KhrGDkru47HD1t98QtaGrMLqojT8HaoLgPABgAaiePmwtTwuy8feHyyPkfAFxhJjmfxvAiYZDqHw",
  "key33": "4NfJLpa4b5v7JMztyJVvRB3vzie1Wi4dj9nTQPGEZaaSM4RgBvZycU7d8xDToxDRfcdzUS4UYF1hkVfH5ZsSDc8Y",
  "key34": "2L3Qu7Tpe17fqwUeAfrpJGVaYzKy5dUVH9ShQwpYhqsznZQEWufsTpmvHeRJBTmV47x67Lh8vw4kyUC2bj8b4u5u",
  "key35": "4QVCzppgmKipTCkhJd1N5i3Fm8kVWz2z21bP1G43idx8mdHGBi9nPRYbXpD6s3M1XrXGRaFrhsEi8EJEahB6MDud",
  "key36": "56AHsBHR6nWSfr2UzxvVYbQWYW7DCdR5pyL52mvH7QN2EU4GH1v8Hbn7uBaFcBUXVcdLbMR8QhvPhxANnC4WVwdp",
  "key37": "2QU8V9zbTkJ9no4ocrgUyrP9vcX5wAnHvqDcxvGzZU2oZn6Qc7VggoaNvqEiSi5NBGM2q31qNck97pdRwJwTCLEn",
  "key38": "3gSPp5XLxKCgYNSi3Zteh1nKdPh5aKQ2BsuGoz6bCk35iFEddASPTi4YKFgqqSJBwHgbxtkZuNVdtz6UHiumzFz1",
  "key39": "KWfmQ3CfVWMiN88AJYDx7BmrR55xxw3CkeRdFuNGTRy5eBkxyJokRzn1krHmxmGbth1GjozRn3X16PeanehCAFc",
  "key40": "4kZC8g63FLNJWqXGtteBYeNN3hxEHEFVrnL9rvNrQ7NrdUCdkj15SD37TFfscXYcUe8n9Q88kHE1A3eq4UMt4T8f",
  "key41": "4ACeNP65yzL2gJMKdBdDFX7uVhY6euXSdhiKAu1UnXqWzsnxoefRQZiiibH9zU8V3CzFg9fofEGRAgvdSpWuJR3B",
  "key42": "33bRs5Rbt3Ct61KzgruNeLCSR5yMgdJ5HQr3Cn65uohFsbborgbsCS3X3nneWVahJ8REmGkSzYqiUFc4xGjiha6H",
  "key43": "5yo3aWXtj2eVSsiBjYJ1aks2Ro4wTNRZ3g12w7w29WS2H4T6wTd4SmHE9seZtfy1GLcZG9v4AtsLQCxZtfbyRcax",
  "key44": "51eBq2mZ8NUweReLhhEap9ubFqEiyZbx4grCZmWPB1DkYKFdQmZu3S9HETkWBrfxvtNvXrVG6NKrPoxuuvkufeJ4",
  "key45": "5DfSZZGkemvho49X83MAxxENvLJpe3DD2WbjvVV7nxAwM8ZbFTPYRPXG58igoBrFt9jAWy3xUMvJi3xofWh9oUmH",
  "key46": "rkHK2jcS7FAENuVnTk8GsR58EbQC3frhsNB8VgZ4kxNQX8NqNNhZwVdA2nA5EECCtttAQyuYZyUyEchJZJ3JHt4",
  "key47": "2pYkZ7ofRcbAL2StBQjSjap8aV81pBjcit1oo171Y39jKUWw87XypobBproDQMbJ1MCuMsM9YJ35eJnEVKf5d7f1"
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
