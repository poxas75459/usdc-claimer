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
    "2iz6VzYHgrcTpYJfCjzdDHqjbuTfT8aPa4HRHk3pTZBM533rjpdngXxJE7rgxxpSAxJHp1Gu64AcZZydZNNeWnvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNxkL4KnHJDAM1P5NqvBAoPoQWgP1Nc75wN8kD3y1TQho8YmFNmWuFwyrwJYxJ3di1Tc9wzWCDG8QedeQhF2oG7",
  "key1": "48pvei1tdDn9a9RBvsHJAc11zY2JKGGqhxBjbg2sRV1f8Rmxg2vmCgrhsYYR4XShhrzUysz6bHd9NqjJcTTYa6MW",
  "key2": "dZ8DfsnFEpDTLUCWc4HkhhN3CzNeM1Aeh5cYA5GfPzjtzyEH7qyv4PQd8u4bXtm1YKBt4H6WsMh5Ye67v1gAH1n",
  "key3": "4KoHU3vJUSCxaK9wNKagKfXXiwACA6bGxwgyijyHCVT3ZYcwQmX3HVPgHN92fLknMXAKhJs9KWUjVSzV9A3rBT4m",
  "key4": "5GmnR7pifvvDCsK8RqhrLLULxvrTGxTr39t6fEV5TSzSFqZ932cJ1RQm8Xqz1MpFqCdaQ7sErKGM7QZdeymEx9J8",
  "key5": "64zymrQ3mR4qe3Zc7kQMS2Aho32oUR3fhw2JTk1UN3Hbu3NqGy6Fnas2BooeCCQjZH8VZ92SY4djegGgm4aHWdm",
  "key6": "28dX7B6o2yAfW2cbA4arLesGyXzgbmgdyT5DK4TcRoFrWQa6fujmyFpn3QqxWcXKAEQm75rMM6VJzv4cDacBvs3N",
  "key7": "3odefFeD9ebig5UBifTBmQc516WpotDSRGWfTTFxMFoHaNd3b6KjswaVG4k2Zqg4XVLSJtprYSnjTEUpQQFBT8Lu",
  "key8": "5BPsoyHZjmKhFgN69RUTtGyAWaxf7tW4kbBUNE86eVgZySPUZvg9eHrrZcf23yQfz2jZKNQ3YpQscS5ekWXYSRBH",
  "key9": "4iw298pcZnks3TbgEaPwyTmE3c5CSd4YjZwJyNuFt2AeTstdvQfEEuQF45WzHfsYiR2yUQ6Cd6DEG4ZdPXqzzx4b",
  "key10": "2AxsCLUNCCmDVMRCrP5vEFjZJ6TUwPsPhqDRFS2U3ikgTggHzFi6dcrebQRvvNUnetjdmp2TPfzKucuvSntnRweY",
  "key11": "57En3kBHq1nnxFfnMfGuhd6LjkhAZi2jq2o6dXwYFtgEQ2eWKTxtZvXA7GwZcM7gKYRMeVUPhNGUzaPW5mfmaTa7",
  "key12": "9iJkZafZ4LBMPmGG4VDWXnjDMMZ85NxHsbuncHqn3yGg6cWsWPp7HcarYg6mBxuGugMzFSAd6quSVxbETYL2utG",
  "key13": "3DDj4GzBBBtovFSu5aAGTQDmrYZsJp27xNHrCmMqiFgwQqusKQeU4CtQeUPcfjTSHFdj1gJpSRGJqwZo7JKm9v9o",
  "key14": "MRBcJh4mKqifkyYBGCBeKtFfpci4mPZZcZckQNWE7ZzE3aG3v2vWtiXaC2duMfJWZbqk79i1KVToXsyXz6Aw3cp",
  "key15": "7SgAYuWiQzekNZeDxRagXLonda5QhYG6VPwEsBkF3tDHmEiggyGESsBiwp8cGfTAzSeM27jenn8ighixTtUmfs5",
  "key16": "3aAHJU1KRKCRKgi5C37wKDmXgBmiUFfGKsoKyHq1HXue4BXgHwDMtEvZ6qpEyUw9g2zqfWXaiynvXfdfHJb6SvFT",
  "key17": "55oxQCakLCv5K6uDZ7bpMGuZuBhA3a5T13P1GoWAqhu122aPqNmknhnVhpG4e7owgt2UoyyYfw4gajFxyVAgDaV2",
  "key18": "4oUuw1zk56voALffvY74TKBwvqi6YJKVsPkxMjMaAMJ4g2LARrEN4Nc49f3i5SXShwQAh9zHDEWNoxE6TfvEG3Dn",
  "key19": "5YoJP2Ep7dc67j8pVsbspgm1nQxYBk39qKrPEKQFwKdLaJivqT4VdLzWVbSbYs7tv4R2YhdAixK5Po2zbXjjAZNb",
  "key20": "3jV6xeGbsSsfDbL191gag4QeNCc8tBRB4GGsH85euarx6ATQMoZEDQizhMC3Sd8ENDaf8vhyBWv3Y4dopGLvpWeG",
  "key21": "3yCnAyio1vbvwM3EbmU9ibdjETdE4dqnDLzjFKX7Mpc52ZqmJiVLPa7RRF8eAZVdzA73drD4LAHiHBjghTKA3yWo",
  "key22": "5TSczbsVYdnsmov7PemnuT5k65ai5nEoE9zZcuhzcDK9HiYFu7gSQbVhykvR3eFHtBZ5GCYVXARoN71W76tnMNQ4",
  "key23": "5rjkYMoqqs7aLJCRD6yXjZiqtWjc2jjcWGHSy3aU38oS815rbJWDuv24bi12u15b1wSZXZPmqFEgymHAvYs4D4bN",
  "key24": "4X21CwcPxo7mXbLRCAALECh4r7Ng4Yofvz9cq3xGjmc7WVk4YYcaYAsxuQLFZz1PFnRRbuemmrgHmD4CBvXqg73H",
  "key25": "3v2gUBb3AhkEDQxZQzkU6gnQUJQTZmnjuUN365wpFVpMukW5c175m66e2kb2CMU74NzjGJ7V98SqDrHqdf3ggQ5y",
  "key26": "38r8v1y95fYSU7Y2R6MpzM9JPpRsY8nTbSzbs6HbYrhztLSBp1m6Cx9Xji4SFD7Zd2uAa6H95AKjU7SSJ3SmnXJk",
  "key27": "5HUsM6AgmSZV6gz51tnGKsoKrJcidXU1u7tCjykecZsMSjt62FsEAdZkhEVWGrrVXBBs9SPWyVddzB5h7ddNbifi",
  "key28": "5gxH31C6y23NQb2hqrMHfUfqgujshgEwzuqnWXuLZ5dW2ZpzLqXG8cXpAD3ZFqT36BTooza3HCgVjjKB5Kpr79sN",
  "key29": "3S6sf8DAkCAsbLv7p8nE8QgrpKmsBMHyMPKmH59cc1sKpvtUbvjDVjjvux3NMucM4VDGZw2PrhkveswGcv3DqAyv",
  "key30": "2M4brhoSn7S9TWFkwo51Thvt8nN2VA7w3nGq9mbUBR9YzzqKd1E5yoD6LniFTk9QUyMBTDZpeyepMr7nmzCE6vA",
  "key31": "2iurtjqiDdjyy6oKbyrhg6cyjkwA28NDNbbq6e1bYUVxoX63tAxm99ESnbEAk4AEpYHQKJzDTeZTbuuhyHa4suRo",
  "key32": "5CC4e7o8bqAz22ED7f8BWcdZ9HDtRL8HQETuMw3eXooG1zLt31cLcJefBA5tQFaqAsGCW9cya3wMVUw37874UdgF",
  "key33": "DCbvRnLc7MMe3cgaUcz87GhZ7QsAmNbxWvY9j5Eu4aWc67ftjjoabqGcwBgaeheP4vFwvhwK4MwTpUHdpvwfJLm",
  "key34": "vWzezrFUvGUYzWWoH3VyBSqKHN96b5orsjcP11m6RedMnVyax6GWusJS5vHnAKPC5nSR3PystP7Vkn19LqZJVma",
  "key35": "7ovwdLYzKwm8BFtZ3ofVEunYWhkHoCBySVCEfoaMdLXLYXMVCN7R6nD2dfhSc2AM9moJLVeQpQjLToPmgQ6aXNK"
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
