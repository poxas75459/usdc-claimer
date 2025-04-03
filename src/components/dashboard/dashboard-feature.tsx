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
    "3ZkZxG6GEBjxnc44FU2V6SEzoC9HuYdERzaPgmFVtukQHyjPKGaLK6jQBysDmKN82BL5WCZxARU9AfFxN2ZnH2ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Em78XM1thzJDcGvbYPekHgQDBRKePQYpwrkE45b8pCuQvuQ5QTveB4UByFsMcbwDYbhhbZawcEu2wod5eJkyhz7",
  "key1": "3BqiQciogqRzLzq5igW9oyBrSsuZYnWXKBXviyYNEJrsGWWQz8vxV2Wz9PAGunZgH4uBVnGSzpsSY6DqYwtGnAPH",
  "key2": "E5CJVSJTQkCQ518xtrK9NJ1nRUDiNGsisUGBBE64hbcs5JY2QX3sunELM8EBxSngbNekZyCFQQQMT1xKAeKdXGG",
  "key3": "2jwQmoWspKogaQZmwTyezn2Fi6DRKkyLQyGWWFoEJe4hFLmDBJ6FSL863AGJruykyujeaurA88R4XFxKh76SbphU",
  "key4": "4phgC77acfzG7VsFPMgtZQWWTcnEyBn7w3QmenRwob6h2acx9wGrbGFrb61zw29htvSqnUCPLQ1R5K5HvLWyfq7x",
  "key5": "3kPY8tsiNDJERuJQS5WXdrvuY9cXWZid8vxuLuKDzbn3kao8s76teATfvFJyNhrUhWoS1XkWtJ8fXQD4veLm6wK6",
  "key6": "5rpcwnbtQXF5dFGm3J9zshG22y9mCotiw7aRDKXMRnFgcaqyubPSW1Xpog9Yp4QgGwvWiUe1NLq9pXrtn59eS6cZ",
  "key7": "HFuSacfdJTzCe3tB78ysfS9DWM4AJuK9oG6Bg2GFqQ8VXYWZcHRxdP1Tmpbn8patyYy74tao4hiqeuu5G83tAtA",
  "key8": "3tNftKCzyb3w4LKQuFNmyiGF6k7iFpP638pyW9WQkNSSUyhJCCrFNnr9i8NeuqQK1g8dznWYActyGfSvQFYzZTYv",
  "key9": "5iDURyxVgUgcHvbUKHdqqYBC9stD2cW9cqvvUPf9SMqyWSdekNfVgDi3qXwhaw7zWXdrtyFaehnQ34MrkF1Q6k4o",
  "key10": "5ML8K1dZ36M1bAeHDkz85hnKLGRTY6vGroBcd4bk58Vuqrwt2vN91LuR1kfEWuxkv5diczbCsNmNPRg5PzsfdGsV",
  "key11": "YViNRhZVngxJS3dYGchxwWk9MtDYKFe8oY7TcFhFLEUp811n3ToXfdiecj4NHRX4jcLiFvHcuZ29QBmQNVq4bY4",
  "key12": "4bHJycac1KTDyW1r1LpPM6Tr3K9K3reACLG9ouz3BN3vru9FEYoEPHkCtuxiHfC2n56M2EmyW2uqs5297mci8iUE",
  "key13": "4qJD4GAErbiqoegHAEH6C865H6tKdzAQtBP4qD1JTrXb6Adv2n6biAm9XJNEQMWpYRHzGhhMRFxxiA6xfdMpJa6U",
  "key14": "33pU7HUEkvjtnBLt3FdHcM9aJse9XBF5sdYj4vydtajjDtdq8fCJAMq14ewfQRphmCGyr4Lkvy8zrG22idR3mmGs",
  "key15": "5JB7eRBHkvXyBKEgFDBou8spxzWwjsCavEzzs3fTtewLpS6UcWQNXd6LWZMaPJjqoLQKmKwuSyJhnDCfCwDiS1yv",
  "key16": "3w6zrzyhsc7QFoSm2LDu3TQuADoy1j3VTfPSFrrAMfvdikVbnNKH2u2ADcxdB2QqYeYLK4hksEcx36PyRsJRAZzY",
  "key17": "5gTghM7rFXFgUeKefwUSM7PEDHbgTLBsUnJNvZBRK7oHB2pgNxxiM7qjQC2SCVhMgWxBACE2kHQWAsN1xpAepM39",
  "key18": "2SKugm36FENMku5cPMqeqg7xKfJqvUXbnXeLRCw3WETDx7g1HkmATQpcMboFwVeHepRRECPSwroWe6xvtB3i1hF1",
  "key19": "3kVyLM4yXxigRTmPAWpAEgen3F9KthWDRjhG85gfvtQTR5RWuX1Ceqr2KwbDP3nkoYMwjdeNHSSep5iwnHc2fuNE",
  "key20": "Bu8VwJNuaCA8zXpc4yaQBgrCU8Mrj3kLm9Sn9sXh795fRJ5onha7Jh7m8jGwtNjHJk5Ftg1x1Xxt5tr3hdNfgTX",
  "key21": "TnU6uMVCo9aqoFu76sQxfYWSd7tvFfvSV2hDw9S5h1KkNwctujRNcu9UnB2mWGPDV77ezdx9a5WisjZUeqfhbyF",
  "key22": "2HjeTdxM1mGeVqZLgJv216EzJunz2CpknyrNbiXY3e9VAKUp5qRFruSjNVmf3LEdesXvJwMpnZNB29JABhekQJcf",
  "key23": "5rtwjX5HBxNntGS26tRQFb8ZvR5eSwc9Ej3ZcEjsBoy3oFX6jQGTf6JrGhhkMHKbNMrHjFdDxCmpwvZ3k9oxMyn2",
  "key24": "4R6USEiTBdzQgqwDpJa1Pr3Jq4H4yfNMqrBPMWPGvEQyaGsWnfKDWMJGxCtZFwRgLa7aEM4kFn4QvVGXXih5N77h",
  "key25": "2ktVa2k3Bb6Gqzu1ZyT1UC6n4X4Gm5kBmrAWtAGQdbq3GJqrBbHd9M7dSQfdDPegZpfkbhqvxHUYD8hREjnWmvVz",
  "key26": "1GVvN5Z6cPcfwWXa4VnXEpiEckznmp9D3sczRZ1vNMrEgg4ESd9V7dw36c4smGg3GnYVfi2dp6MiCv2wqKAuZ43",
  "key27": "4ZqS67P3XBgy69naX8YMfaMbgrLBJK3oZtWfTvSLEFQNLo8vuAqPs9nRjxcUeHdnzzwqv6YAi8UizJXvDus6cVTo",
  "key28": "4w6yi6fynnGXWvv2z3Z3G4zinVkXP2uuUXkhtcM5c9ktaAcUXLLAuo97ASn2aoSNnj8HH3MMP8urvbkXodrWrAmB",
  "key29": "Kd6J2rdyLDGYQ2w4JFJ7AuyjKVzdQdA5ibqxtdvBZSoH3hRC8mjRdsmfjkf7yhKmJYrV9iGijK9pW8FNm2i1v9K",
  "key30": "3iBuyMxkqmQDCmCmPCfP2PEQPrS8CEoU6ifjKE3HtVK5BWMEZtKEPRkrNLqMkRvibFAdZndod2dty85RCrLcWMd9",
  "key31": "3DtRdbmQ1CEWdv1rGtKdA6VWGxs1kMiDeFKHro6M21g9eP1FzDxJUhNcJNvQZma1Zs8aJbnKcEyL7dFkb8yiBVKf",
  "key32": "2ib8fMZjWwYMCq5paU4xPo7ZBvz4yCV2vrhFDBGq4gDytvE7wjGnuaUXguJz1jEkNZqRswYsZhpXnHRpgeTfgLwg",
  "key33": "EWo5G6YxrAdM9wx73n4k9MYSoQNJCZT7eyGe4tau6D5gX3xt8BzRhucPEDfn7PdrC5qGPTCX2SngYYC2aTy5Pjk",
  "key34": "4fM8kC7fD7wqagjQQW5TbKUes1LoJSyyZ9DE9nPM8U1nGUJqY4MsWtbarMM2mCifV8PJNrDJniYkgPRKMhCyv77K",
  "key35": "3y5uLEfVLxj7rRg6yw1jDnrdgVwAuuXQq3him7RDQhdb5RCjCyC8dJiDBL5nkUPCasPTfM8Jqp9W3ztx9bA7twJt",
  "key36": "5ayLi2cFSHBBMuodpsyKBpN3kFmwRF4HaswUpi21uTPbSQ5EdDYJVfP8zNGuxS3y3itcCgGNqVUFmCvsRZEFtyEJ",
  "key37": "3if1cBmXQACFkwHvAeU3UATqjv8rYjm9WP4Zn5h3ATxgMYfmUFguS3hZvw4SgKcVe5z4fKbFDUaUMiD5A1xdEt3P",
  "key38": "TjgDz5mpJfHKLW1zyPZNbc3MqYyWvRUNE4mmnDcL4cyhQ1VjLDnjKkYEavavkSTmum66AbnsQRSRAnJMgFrU8rX",
  "key39": "7bzNh6k1HnwaKpAcwH7a5Badja85feeCi7jPQcuJGrfUQDQnbADVnyJzB54XJf4x7NicPcnAgMZphgvs1mGYTTQ",
  "key40": "sfzseBxek3KVPcQN783946PRmM2pJa73rHT6R3TQz76TKqXC2ZZUjrNeDNCQxC8QQxqsqhwDXpNpaAjf5nxMiz7",
  "key41": "2ZV9Lm6h51x9qP1T9DEiMiaDq2Kfwt18NqSFM4E8STs5eyrwWK5PXdbxdzoGTtAnGiLcteejKxeMm5FK81yHvAxV",
  "key42": "2SqeBDYc5Z8LmGLUR3z7cqCPQ6XHuWBHAQfp25wKTAZSrQ7CC3HH597XQHUnTX1QwiTxr38xipAv7Ae2ft4jnD3N",
  "key43": "3bwhCDJvX5GxHrvCgWfUDrKCV8pguBQVtwT3uEbdhHNqghdgnbDegmPi4NrkcE9FcxgqQhEBGCYxhhjwnR2qG844",
  "key44": "2jVq4jXh6sDYvn8SFXsc6wf5gGSESt2BuWwLTohwxjuqBKSy6TQ9UnqJvUmzBpLfff3BcM2y1JZ5m1XADzE7JLyx",
  "key45": "geGY9oZyNFXLwsQmCT6CW1fUSsYVFijXnJ595B33ppiv4BabjtbzTVnwzMPDLUraeTyiRkrJcPDFGbg5TEWaN2b",
  "key46": "3ZT82Cu8rPTkAyAd2au3KSW3tVXAnMULGr3CRanGRoohkY1Y3HXRdFHoY83RfmMH8XAncthBepS6tVgnZNQ6ApHb"
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
