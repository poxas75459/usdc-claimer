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
    "2vEUY9aAfELgwzaYPdmCZBvUGhCHFMco1oV9HmyK6VyeyEPLLftH2YzbFsbXmdnKvGugz11FER4qyFWLxr5XqGXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSdritaRb622rvMjkr4jFae98mrF9DFFiZrLSBRQ1hR4pjtU6sQfta6nG6Pwx3UYuGaRaWo3cSBbAGrCnLoDxh3",
  "key1": "5KFJPit5rmEBSxwEtTj4CaYPqLhmVzRyDn7kPMxSEz2rXRky6LCCiErM7n7GXP4cqaJHV3YqwrzmmVC73P6WiHUT",
  "key2": "443YGZbVUnQFkJ7t6davFCZq7aPKvKumwJkrAcr4nTwJejcW56HXJ3UrgBh88YDjoajrvhkVqQ9wT2kLsAWkuHZj",
  "key3": "2pYP59hoUCPdd7tZ2irXMQ97cDeXGwzLzuehdHB8F54JKpmjmPvJxdQ33cCPJgxJ1nLF6Vp52mpWCAruPcg9TVvr",
  "key4": "2zZk6XbC2fbrieh1REj7bFJWwdA6eoDDkqrB2eqsYDE23yPYYLUsiPi45u9BdubfH9RN1gqSB2NmaUf6zpMg3DJb",
  "key5": "99gDZwmzNCs1L3pVamYzsC8b6ywXZHTDNQNDYLaf6B8i7RHwR14saQSAUn2v9AJaMBuoeQHBgZdKi2sjBagtzhm",
  "key6": "3tJfvidvNpicRDtTE6x9ZGUrFgrE2EtPTuR9BvfjfZGrgbEKjgeYNX1WQYt2JUeFCfEcjfARv4VaGpbSvy6eTAoA",
  "key7": "3qtWBjprbKE8BvyjJnU18mvgCoCaBcmot5b2BEwiLFSeRXSnUjzK3VRbo9mykWxFhgrLAyEB2GkWnz5nFwmScvdu",
  "key8": "21YktfU8pygvKiMGJBYQ4WNP4xbbD1pEmVXhHPtXV3ztqP3aaZqMZtX386BvteqGRNXnuTKVbgYQsxM6PX3suw3G",
  "key9": "2pZrPdWD79dcTsdmStcNf3rZBpj47G1psUD81ST3e6czLrr7p5BZVWoR5kpq152ZXH2XrTyM9cMDUhJWEeBBDguU",
  "key10": "FgmgigEz49DxzXYsuFyGqPpALQCuS9XR128mBjGqRToVR1mohQhED3zdwxGjgZ1ZYWVmp1rNTPH8iZWHHQHRhJp",
  "key11": "4nPDkH1nniid6uF3FD8BZyL9A5Ud5U5xdpL6to5ApCptA6Xc6aeeG7QBbC8ATcTzqacQW7AvpMCYF3dyASrnYc8g",
  "key12": "4wj4xYkTm5GPt12pKwcsAxpW2gHvanvAUTGAbhSxvpA68MpkUPPtgsdvtmQppBmTwhnSG9iW9wSsh3PY52CUGju8",
  "key13": "4vurqkvanrvLxLoGypPuUZ6cP1CCsCapzhykqzbpdhF8P1SuH1wzMkb7eGcHuLg8GavWiPg3M5MvSckqNJv7gEm9",
  "key14": "5WbKDqAHixWaDMjkfKhDAaaDzmmQHvfncDJzwPPv2k2pb4QttRjZodc2qgmHWYi13ECvPuFUQyozRXEq8noEasG7",
  "key15": "dYQqWv6a4SbwBw9RV8Yd7AKsh1JxTppwbAmpSSBhxkiKA18NsY744ipguJdPjRUGB1TaysDeSgtkb37BApEXsBf",
  "key16": "5PQUN7LvCzQ3kyvh748GXkBAg83CmCAgMshVqL8s1Vsi5GynYuKTL872cuSKz5u9gyDfesHqX6iJM7CS2DAYnHzK",
  "key17": "3MBZbNbJKdPiq1T5BJj5fifNEoqtVQkvSC3kt2GShzbLV3P1fgRRrGoW5C3hF1u1TFRvCDtRgFftdgtE8LYd2KB3",
  "key18": "5G1beGtq6tJ2fPMzhE3nEcq7j99g6R4HFNL6NsL3rVYu7CpTyUeNmuUTbfypkkrvrZ68ARTLdCz3H71uMvjAx2rB",
  "key19": "5MFVVZPU2BYj9uDMDZjAzpmFPHgPeacwVmcQ73kJ3DesNtEh9a4KVFbapamG2ZegVBNt9SW4ex445wC6p65KU4Kw",
  "key20": "2gg8ijGSy5P96pi9JkzzYZCL5xUistDNTj7abisFo3NVsNLgwLHwMUx1HbPuQmU1KGovHFFRtw3K9EbBomVCCpkq",
  "key21": "4qN1WRhFJN4u1xKrLEHXWQ3wnC279LkPLAoDoYXgjxrrSgpPjpE1NDYFEwkJUMorPs2BPGq24sEZzmmJSQpTLypJ",
  "key22": "5inAfVxxAx9o4kBuJXFxtafQmzDqPd7BwCkVZyQTjRgvKxa6vQp2dBdEmpfv2zXmAPNjchRo6B6ucH9triCej8Lb",
  "key23": "5DzNbxVicZm6bmNzY8H68X78gP6vkNVuJTxzgHw23vdWwpEDAgFBb7P99eXG2R8D2yF1uyHH3jv3re4Q6Bqf8gvs",
  "key24": "Ge23K7Z6EzmSpQ73NM98MM9Z5FZjqV9iTGVNsFwdRaGFcwBsFeTjdPGG4CsTWU3g6Rp5h7SykyXLzKqwZjd9Mb8",
  "key25": "56rMsV26TZFDRMXDycbyyZWhYMT3TmJy1NCbWXFdoAmxVk7yzharBEpAhEnD9KBmsYRF7K353sw32PRZqh5Fsu6D",
  "key26": "4vtKrmyjxdvDLfsqyNyWZYjPbQorRtFrJRUiNg8U6KQztTTekQSvB8EuCemq6W1U5mmbC9iuH2VMVEjrAHSuNYQS",
  "key27": "4N3ij5uGTbyBC4chdefvvYDcd6j6Y22CXd3XrvzmfJ83NavwgPpAcRKR7w8f4rAZuryaHquN3au3voPEYviRYzKM",
  "key28": "4uePbY1D1DykQMvzG6WTrjJLNWqZUmmM7Z2VeyZuhXyPqs5Runts4cYnHtvJrYBt45FBV5i1iD3K12XKV5i3oe6T",
  "key29": "5JCy9t5JZCg18YrM6mEwMQ9vdJifUYa7Nirs82xK4954uqFAGGcDGkfFCuaRiMJpdfZ5m819PDJU69rqsKEzQ2yz",
  "key30": "QS7d3g1yFdYDVD6UcdvRPp9JKgKuqcipkipJWoToJoT4nsE8MqAs9LVJM2or2gBnDNWmXQ7qojD7ENfsgQJLyet",
  "key31": "UzDbWooDVK49wVgtm2j2z18P5CdsJA3a36JeHHStawJyEy6TpQkSZmQA7aiJNuMLFavHkCeDEkZq1S99dv4ybmR",
  "key32": "WzUcE6s3zTpjMaCneaNCh1qoSV3eNeFytGBkn7vJQKCFUDBfutr4yQ9DffGS4AqB9LvLPDenfr8Mp1bDgaM3FZv",
  "key33": "4AEvyq2ojMVPJaNtNWnmMwCaUGxbmG6KanTPYQxxQETawcEe7hjop2ZGT1Ci26KrQQQ4kW8bRNdMMDKKReFD96xp",
  "key34": "24s2nTQL6H3nGKadP5stgJxyTK2C2iMVGA5ziF4SLEE5pHa365uN9gCTj5aihRLreFgNenf7jXhmFqrbvnzqHCcS",
  "key35": "2BKEoUJBqJZL7UiXDGwHqEhsEKkHM5EgPy7J51GDEVRpHRxJxu7wXmfvJxTpyiYmzZsKKDYTxhA6eBeZUT8P7sp9",
  "key36": "3RimmdRN8TBU9VF2dsG3WcZ9NctDfveQ6ErsJbavPCWVMHNnEYrB7RBPCqEbho8sJ63QGZpY4w4s46n1QG6kX3Eg",
  "key37": "2seSDZ7X3rR1YLUmgfgpKckqhx9YJNJ9S4ZXt6gyHffRQ7tEQfcqggUmrZaUCji6EAbpw1y4i6KjtA5tRgijKEtF",
  "key38": "3wqBMUtKzhMU27ZjVxGrtBSHRVgkWSzSFMGVdW2GC4Pjx9jZC2YWQts7GHrZyevibMQRiEd3BN6RExgdEazNC4z8"
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
