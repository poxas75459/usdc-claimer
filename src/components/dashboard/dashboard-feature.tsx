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
    "4KEvioLsZPvNdE7Wh4ZjAYWn9JEfZLDLpsZRmLShyeiSgXrsrCXdX9XCeCMJEY3y2J12civ3Nnmt5L1bezv6xcEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiM2VJEv7YC5DvrEYLdoeYRjmAtACJARsQF5k4Ew7kBcn8xcj1hi7y2NaNAX5T8tNbAtuRXdBoV4cCbwrgGowkY",
  "key1": "493YSLYqQnSTk9q9vjFeYP7MJ5kZaT3teNW148ar7ADZjMcaXCCmNTMGJyDxNGquXpWfDA3YMNoxEmxekUZnwjMu",
  "key2": "2LyDjj7a1KW2aCKoRep9DHwTvcvJThGSFxJ2bu3jWCjEGJ856FQQ9w3M1mzrHuuaYYTmUpuCHnQzmGFQ1xVHjK1Y",
  "key3": "5gBb9e1eFiiXFo3VVhAwX2ZT8qeLiZiwcscFSfXKMjQJ8C7kpKoYTHWe8Gs52iEaUoqToNZP3NyqL46QWnCN25FD",
  "key4": "2F1uX4QUqetLKj7VrmyrPEDJ22M55NUxnjKL1WnXmHXwUxjWPSkGfbve1zRvsdyB9dAz5KPvUYT8QMhYTdJFNX1k",
  "key5": "4gVAV8FFxMUiig2HdWcVUXRtB1BxjdSurJctmGGDVGVRSKoLmtrpnXwUvNXnNCRtxCLcNrj1h7qPf2NWHBfkuTCG",
  "key6": "5xm8ZfmRyQLWZfmfEpGFH8nqnt5tXPCmpcazCnqz2TYjrzsMdr1shVz3p7zDfqiYcxrvsX8fdKCnGazfXseDs4nd",
  "key7": "2FnAxdyCgPD8jbNtFtmP1nK6cJXnzGeUaABcLF7RFqGqMuy4Ya4fgN97wBALbMtS17moGoHXovL7bjEAM9jkYEwq",
  "key8": "5eeBgNFUSXPWt7RZCquMcQGdZjEjrzN7KufgbNdqL9LKNVHrfKSCQWASBiufF3iShY2H3o7yFGbLuahS69vN5bPQ",
  "key9": "42FzSA22AR6cAJ6L29umGVKTUrBqr6nGZYYbqtpdQg2zS2qjcDHywTsjE6ZgYxB3sbi8AAhzeHDc4AxSkyoaRijE",
  "key10": "2expYELrtVTRyLTLv4DKkTkCWYcPwiDEiPoQzBSev8rFvW5SqZcsrYkucRueBv7qxpVuVfQFVVNAJasaHmT5Ga6S",
  "key11": "4HNnqw8u34G8bFiruesG77Jyf71ykrrrm75biezGt1Mvmogzcf9b56VDhiHss1n3eabVgn9UyXR5K1F6qmuJZAF4",
  "key12": "556yV8Gcn2UvFd8YcqeGd8oGfT2yViHx3E45aA9ForSYW4iuZzpLCKA48VLqWBLGTDz1Vtqqwya2fYuWG3tyuiSs",
  "key13": "5C3HMBfdK5HJT31xmQwKDKWUCfqD3pjn6wQpLPqQhVhNDngWAeefReE7eCcJTpcTaDSeAMfLQWFezta9Spz89JCa",
  "key14": "124rypeCWpPdx4Xn5LvfmnwP1beWyqmKhRQsJsdF4jAnd9efT97Nb7cLTrWJJ5C9z9LabbhohWsWagHDMGSEUzwo",
  "key15": "4MZPVVkoZ1XE6LbFPxoW2AgEB762yDYrdN6Xhjh1X8yMuo9h49uL9spUF1SJhmUKH29gg3pJL2sqqgVv7heSvzQJ",
  "key16": "4k8dG7yKSDNvvgFkkwHBNThCA6ojGJUVawtP4tSqKMqT4N9RF1HEM6UXJAgvuuULkforJvYrmYn7WRZEsxpMAMbi",
  "key17": "3HPEp1BCawPYoNvk3PiEGyDYjVM117abJgKtA5LnG6227Ff51RQ51gXdFbR8aC3T2kUGSs1SWwdYGxDn4ViauCJS",
  "key18": "2ei8s3Pr71rMW6MvyeZ3RHunxh5k5djAMnYnnYRdbEGZz3tDPM7B373zkAsvWimhb8oQEQd6okwUikEHPouJmW5a",
  "key19": "2yJZnKNqKRCnR57AUyVWCMRxmou2XXT4HrBNXZq45eXKoHtf2DYMGftbch558re49H5vZeyaTd4Gir9cpJedcpNM",
  "key20": "56kTcUE7afuKV4C4GXHzNAkyfXkszEJwabvigsaWitEE6ztsjierqrrj5MFUbgS8yDgiLDM7qNDoNtjWhW6qe1GH",
  "key21": "28BGvJq3GiVZk5H2o2mHkh73uCy5DuVrchjSuSQT5E9nYomWfRt7srT9zdmaqZFTvfrhNJqU1HEhPrUZw6aimYJ7",
  "key22": "3Y7YGfRPYs2F3EWgm76vN15qbBysqG4xjJiAZFMm9n8aYWJxuonmr3HG9EeHwx41GnUiTtJ9vbPwyKZnWe98AX1o",
  "key23": "4PVT7Ce93KemVeHAn7wt3NAvzJ1k6a9aJFcGu4XgBbQkVQcY6esdiwxGjGyXrmCd7SGppmWZiGzKf19mDq4FsgKr",
  "key24": "3ESfnDrhXCvs5KJCzrx95bcwp95eVrF1w4dXtARXLizbNumwSUnKnwJLMG77bUZqHCA9ZrnPouBQAUrvwzwcdwZs",
  "key25": "5W3CDX7KYEubhhfRuaqgpSu8sAxqVw7AQ5qma2jePkwiFHAxEhFj9A29m1qMGh6CW2FxkNaZnk27jXEaAhaWHUAA",
  "key26": "5Sih65nUZJ8jNWGyWMiK5s16JNNjY4keWBLwvNbDrm85RL37erwGLvMFCNoeiZpswUca6ez3N2knfJp6CtYDuyfW",
  "key27": "2Uc1N1hmFZY1Evw9togHKTqSwUP1Lf2F438CK6rT4cKE1GtiNsx1U6cp1DsCyVeuoDcWAvgtgGpatLFssWBPRpHG",
  "key28": "32pW3L7dTm7o4jkP4DgwpFkd6cixaoFXjV1n2yeCw7SEKwYoJWSzwPHSoDXmGMRvAbAdfeuUgHdanGZdhUuXQrx2",
  "key29": "4rTXTBg9Wc9Hsmfh4JPeBXshuBptf7aGyERs717BBxicSXDaFptUxD25DD4VfvcVVuzzeWMqrPiBkokgxXk3pEVc",
  "key30": "5YzpucLz7cs2TwQN1tQQ7E5B1zCeYj251xZ6RiATS3v4PwoTMorpDhwUizCoFfkEKcHMaEwWvp9Fg7mGF427y9Bj",
  "key31": "3pSya74k3rnyxPM8YW1qmJitpZk7Hn3ytPgoi4hsEPhULCrLosZhyaoT4W4i8TubwuFUTAuJA7sHP2oRokr2jFHK",
  "key32": "4GNeZgV3iqMiFzDoNQdAHa5Gej1Ewqjaa1CudfGLCjYgAr4hGE7KHC6f4EF2sSgtEgH7qr9pD71MGtnVHrwUTW2j",
  "key33": "5PZGbrogTMHs5DtZqSBWm1o8fVpnFh7SAZocXg41NHR64xKxZPoXEQnM5BDz2gHTEQsHnJZ39souvRoePdYczihZ",
  "key34": "nFp2NhSYGtUXCe4njgKsfP2mfhZ62NEsSxA9VgBCcinMGXbLxJRheJxGQ2PzEVUXmNFYksv4yT6KDkuQuEFYJ4G",
  "key35": "4dSkqF7etHZWEW7XrT3Ezkb4Eb4DAyTxVmmVDWkShhao6pdrocgrqmF2LEwsrtGCDNyfQu1AU64YbpSmrN9VDh72",
  "key36": "2ymuaztJAG4Q2YqKSZ6oeTe3Aq21noWiGEzEfZbuZQWHWvYEFcBsWXCxsTWv5ueJD4ZFc6d2EVwa3d9mALdxNyEX",
  "key37": "2i8ofNEq8YnBFuYwHcDSep57tmr5ZW53xUTPC9A946fU9EGDsf3BdJSvN5zSYehnuZ7Zhqyetc2JXCfErdc7rTyu",
  "key38": "565WjuwHAM5pL1KXSKPG6tPGEntTjVXowN5eoKupLauqvUbia3D4j4BWsCmvyCEgdDHA5wsfFTtuLx6Smt5uP8Mf",
  "key39": "3QyK6pD9MgtZzjxh2LSVXtMxeUkB71S2kYLvKtXEfLq6BdNpRkocKiHcFmTTqvA6WyS116ZEmS7dixA91pF9xpx1",
  "key40": "2YLkzKbd6z19HZgeNJ2QMSg3vBJQ4U9RjErdnV2TB3GSPVvh5drWsHPqs5ZjZhJhUL9o3dWnx7oi8nhCQnmSh8bB",
  "key41": "4reLofAWiW6WHESz5osWuXESjsxz39namoqBi9DCNGugXav1fwN2rdBQh1wXsDAkfUeiwApLEzsnuf7zwoMprYH4",
  "key42": "4474gb2ZzCox7pqUG6AxdsjY47Qe2qH1JHfjAi7ohKS5xWvVKzvtAGJF6naR1QiCYY8jtXin3iiAnwq2U8VuUtyz",
  "key43": "5qhUNnwA6hrZpJ9NTB5ohtYcM5obbbB4eLkWj6pEigkkwRxCp9iUCnzdrm7LYYjbnFDqq4pNpZEuEBhSKQYEAzzR",
  "key44": "mZTMUkhSGqXPSbNrZajPbcN3pNzYK9pBPzJSXxRvpqPhDTZzg4Qyk9ANbTJkA1ETzqd85eue91P1rQunCKfewkx",
  "key45": "XoFudVmw3QckNTpBer3cMPyMHqejhKmpRkw5pFJVbqCArf1dapf5Ee9U4TR2htfzhB29NF2tuqVRgnx9FYaR8bJ",
  "key46": "2Gsq776oPCJZTMXM61huwzeqHV9S9PNoiTGvAXPBbU7UdWjCbJqzmU91uuJxQpGcn8GsUdGZpR9LEh1WWXwAcjHu",
  "key47": "4S4tjyj6WQ9wK6TF7p3AmoxJN575TamjngyM1yHZ9NigT545n49Yz3p3b4H5ttHSLuKwmoecBBMqshe3NNmC47Zm",
  "key48": "34e5bUvqiV3EVpXftgWQae3vyRHyBHwzJ2V6ch3Vq21712iqXVqB1n9ZYqaXJ4jkVxqekrGkBuEPX12moU8eFFsE",
  "key49": "3L9A7itUXPa3wdEWs482fwp4WqdsTKSXWXJhZHrxA77NatBGnMn49SSkQjgFprLTEzS8LQHGUfaJ3JuWEzZCf7Wq"
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
