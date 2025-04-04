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
    "5m5YoibbkR2orhx8Fq4muZiWgQbVbQWrUYmBkncmAterR3uRA7A3LvxBRXfN25zDo6u3Ap6uyqre4HAq9fKV9k7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LB4kgyEZRCQ7Sp1VR5CkCL8q8E5AdRnBLK4bG2iTK9XDa6raGQipZNtMGTpsN2VNmQocMYvw5Rv2QKKTzqPpBB",
  "key1": "2i5j1Q7CoMbc4VJBMAVspG67M4NmXG9fogseYbrPV7UVT6sEn2zoFqTAWkdKunPUHyMdd6DUwi8Dw7bY68Sd4DR",
  "key2": "xGUsZ8UcX44u2RNY8neqTfPXHrwibtatUwrKhiR4SqxGs6M3HnLb5iqdgtGRxqxRhes69Ee7W8aH5jcEgQWzKTY",
  "key3": "2GjeSgBo72bcBKhQngqwea3nwYYU1drWBgbyvFcBfSLWgRDdtmDGtnTgPSth84Nc7uqgb2GgVAsReSPT1k4NHxdu",
  "key4": "7tiRJM3MsrJhYF5NBGnmxCofKUfCvCce4T1LHRjsxqGq8envDP5bAbzTKNqSWZ7sLmS5zmx6DGE9nzzPCQBszHT",
  "key5": "55Tz7vjhHpkzQASXywXrLHH3x6bN5eBv61VYpQJKnbjHfMmDDfdXuStG4qMdRxGiFgBkWtKortbBxWzznqsAL7y9",
  "key6": "3xRhgv6QvvCbkwDo9TzPHFiUpvydoJEigkUHrSfB8QEGMvu6PP6LqCYqyFGtcr7NSTG8C7drMKfqyyfvt4eedoSZ",
  "key7": "3etVkbk5iLU6xxTEAohwQPxSD8TH2Ka95T9v4iQCoB5A1tFFLKBzkdqjyatfR3pxWn4ssdm9Kjq4fuVKwPF55uqn",
  "key8": "23HX6cg6X51VGtiTWt1t2zZxDJnt3oq1tNuHxMgvuJzXqpvQr21dLsuvnb8ZVrtYeBxMHj9PDA9DVHZQycADRbBm",
  "key9": "3wjrgrMAJxQ2or5EyGWQwz2KEuUoEQX7QpWvg8P56kTYVEYyjrRiNSwkSd1A97XzjGxgdQkCMBMVzbjfHm7wpW4T",
  "key10": "3rGGDiaZr83t5Q1ccX4Eq5GPEnxvFfVhwMzpq4GHJd1co823gQt2tBZHU7wRjmumTPzXHESNQb9xxJiAjEwStQaT",
  "key11": "ydLp4j9j8EQk2K8evDjyr8zyB5UJsEcJkegCPJpaRF23QtvKe1xoaqnJpEueAYuqf88cNriywSV3Zw6bCdPdopQ",
  "key12": "55KZ7XXLC5FDLAXxsoDMMHS5RaxgG3t4d6xrCrqrC7j87c6rb7CMi6t46ivCew765LAhuGoeB1QETVinbfkx9FuP",
  "key13": "3x48fdGRyYdzwMj964Uw1PEMb2pZ42FSvELBAxQ943VcvrXdgBfCXzt3xsN6jDC6F7VGYHhCME5zHh8Euft51hkg",
  "key14": "ktupjiJnuUe1wRdEK8vcagp9yjDkvAkSYwnoZ5yYKakks4sVxQfqddMeYa2xAyq63YFzCZHTQzgyWWfwF1ZMVCe",
  "key15": "5HroSzjfTTrZHrmEPDaFFWzHbMj8dJux7UCWYcZcc2FAsRGdZmuKTGXWHGmxier65roZUYgwjsQS3CREpu3sEKzD",
  "key16": "3uJueoLBg5zaE6Jg6mqPuW5fbqVk3oDaHMPiXBpk5bEDrpQGUg9mAdCJpQvoAN768pUX9NxaTzSxHQsmbBAhLzvQ",
  "key17": "2mp5SWsnLiDhug47CnJwS56ZW6qz7zG9CX9xJRAfnr5RrYaJHobAP4do5apbegCtfChRTYdDh3VE1pXZ4NHjXz11",
  "key18": "2QSXduuHmPGgHgQQ3DiRC3MezhiQJC5rF9oxfb53LeiTtQBj1d2BSAbfeZd8cp8UyQdAJaRB1JqrgSW1ZzuFxVp3",
  "key19": "9mx9RwzJ3nY75QF9xWNG8THCBAQZMsgEWYEBVoHpqW6PqPbyWSodPwf95CGVAUKDfEoaPGVRA67hyTeg4GZ8eSR",
  "key20": "WyoL8Es1fpqmiVvzGTzukmQy8xzUFXAHZQ62WcUBt7secCtAkzFUh6AGt8ioYnKieDsUv2FxhLxEjTPEyoEvNEB",
  "key21": "3VNyc9fod9ASf6QqavMLcWaii6DmawThUAvNRR9VhjGzVF1LUaZM2XE3sCH4iRoJM3uSg1wnRsiv2qY5NjfcXAXn",
  "key22": "W6khp7qRWJ5Q99LB3XSNL6nhtBhkzbi1mLouLiq4BQBuGckhJPKKe3VhDG8HATDHJocVLTVqCWdHuNhw5eV4UY8",
  "key23": "suhHijwxRZR7VyNYANuBrAiFWcLMh89Jbdg6pEAnaPay1YXCN41jBSZtD3Z8hYFdBz5KmcYYU9yfgWQQ8ikmcEH",
  "key24": "4wGPjCbWrBRuxRuTgk83mPmfs6oAtQKLqNsM8ZeACWxMgeBmzhbtGtZXtJAsDX4gZU2H2YW88PwDcD74CVjPw6xm",
  "key25": "37YPSNJscTzRXs8RcosUZnjgxpMyHR5GzwEJjJEPnvEJtCfU9rufqu5P261fWnVicQs3cVW4TqYfVRuPPvzcSDQK",
  "key26": "4Wy32kKGSSNMmGoDVmu5vb4EicCZ5XkJFJceynoyaGGpWy8jyMm6C7dBfza8BD2QyPTLrBJZMQwvr7wAxpu5nauu",
  "key27": "4XQHxjpdXjUJKxknCbyMwRw1MStoAkLatcsG17Pmgv4zmnLBshMaqbt7VBbF4JUC21AZDqFLfzdS8YkGNg3NCD1N",
  "key28": "36TGFybmZ4pHc8pyxcueuNeedoqAoaiWpidHXQhU3QTQTUPuhiWkMxWYRe7DqvfSupoFtHp7gaenb3sYwG6cwyLR",
  "key29": "R4Aw15BYMYjkaYLVQ3NfjZNmGxxXwbtCdjqxXxT8aJ9W53MHT4LMP1Yk8iyLHuyckiECo5Q9zBtZvhEFtJJT5ii",
  "key30": "j9ah9TpFose19zdtsdVREYE8ag5bh9DPbQZW2cjFTt2D1qXPTdXjXpQUT6W8d9wyuoscsFpiHHScK83CkQLZyHR",
  "key31": "5NFdLz3Ef3YNdPXNZVxG5FgPZm5maGWk8JEs3LoKz6jnzXy4rYmtdQuxMofouqdRNCuryyBuAjZ6UwM7SaiC3FT7",
  "key32": "4GtCyXhxQ9FoFsYXxZ3T94RSRjgPDW342FLhRYgbzbbhcUizsJEQJYEpm9KGZ1r7MgARdB1vwXj8VCRfToW48P99",
  "key33": "26x69zedUFRjfGnMYRkSeiz5u1kSvg2j4Jh6zrS1qUGVWG85ThFX3x8pMUUK11zCZp8wPjFNuN48acRXvSMbgr2N",
  "key34": "3yFa1G2W3f54YHAvXa7hRc2MTkXdYZCV6JyAt7N9xgjRXHvBPmnyTGjviGPyB3dXTFqcmQEDprRmUjUsLuuahy6a",
  "key35": "2ChczWaZeh9o6VR7Cik7yZhneKkzKEQ7doTtT5G7ohN2LjSWJR8xFjJRpyAU8m4pRtesZsZS2ZUuvknRsXNWfNN2",
  "key36": "4fZLSaqyU3uDyPAyzb7hN21rurk7g1vsLryeCT65StbSQBA8B9r3E7qGsGPKobprZxv6Fa2bi8K3JTZukWBjEVWr",
  "key37": "27eCZt7Pmeku9BFNLLtjA7tU75yt9uqF67Hsa8Q8KQUYQeP5JP83Uo6t1BCMve5YKotCtYj5pPrt3XCWYmU4kb32",
  "key38": "2TeUHrjio1YNUVGvZTmZ5tNeHd2zdxXRaX8JJ3Sf4vFu1f5aF7u5W9KJhU6Lc92CVP9q18TbibKML5vjF3mfmVX",
  "key39": "3Qqq1pMyDQx8BdvYQuB1nhuxDgMxtARRze9SaTYTBSMeDC9DxiHzxLHBq5XhJha4K7vz6LtrVwUxCmFFhkyUF4JM",
  "key40": "3UkXH7E87MzxkhP4Z9KQyE1WxiVWxtYgH2XNBsuhsQ9CWmPSUwZDTAx61rBpkiagngJ68xmvD1m2m1QyJ9dJ3bbT",
  "key41": "3tvSuUuwTPEHakhRt93HUTuiYUxpECyB5ARGiWBALy8ZCvhg31FBKRFaWvpxfKS6P17NdGMbM2TQpkitHPbfHQd7",
  "key42": "3M8VCxakF8Hh7sMout4tcMqf9Cy7EEwMDe3EF2WhXa5qzsjd1DdJC9knxQ1wsvcXCAi2AChMSBMHW2KJ7jxJHPsK",
  "key43": "28VR1psD88sAT7CoFcZXBMqRCpvjLi2uHiT5amuL7YRXfPyVVTnVaJCP7ZtNpuVwsn2YNYKeUVdkCSCPSWyk4bLx",
  "key44": "429gM5Ua1CieL35mUG2p6wWScvbdv4m418FmVwSg3zeLuSW8DnKCoB649CsVmjHA3Uq95EJ6UC5Z3Fwz1m86omC2",
  "key45": "2Tu21VcEf9WkBfw1ZKjV5T5cvXke3EiU7PLQxBu7W1RLGuMYTgbzEYddyV6hQZkk2oRAg7fYuvQXssSmdo2VSWu9",
  "key46": "4Nd5UgP87cWZdzHZvUBXfT8HjCmzQazLnhqvkFjdgNtw9tpbxpkDH6vsGVrHx8jEMSiKemRCaMGn5rTb2Wfv5TqR",
  "key47": "4g84APMSwZSjbZpd7dJvQBBAYrgXH7XP59fyC4ggh443q3Re3WGrifDX9ALtkZZBTsxV7Mj33QeAA3H4Y3TRUfYg",
  "key48": "21TqJMCBAvP9BdbdTs9HMvEtRSykdcPRY7iAG3Rdq9VoS6tgzR89e37Giq8UfHoWRKucsrrR8EVFXBaBhMeLpcTy"
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
