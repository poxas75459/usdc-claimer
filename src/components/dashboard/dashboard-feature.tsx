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
    "48kjmhrhnzSbaJZsfHGKzrMP35Npay5EkSdRGHkEzPMJSwwv5SbKhYLvdByHGs7KvNESLPLcmLveGamXs1Ke4FKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tHhRYDqLFQXU4dAaGXXXJ4uPqPj5zvQhdPkMDsKWLNPiK1Ne2a77h8WcaHDhkRP7pDCBGhArncXnMxkSYh3ehL",
  "key1": "2eE3joymvuJavwAcq49RSpfh6B8ApzsRUADDKxV4FTUvVwTZXiE5dtGB4iGcU4cmQbxM8GnvPsQKwVyJ5YQr9scn",
  "key2": "5MQXSHVxPhd4cn8PimHPXMqHCnM9BU3Qnbbxu9LcQ1L2FFjHmirDR3ZHat56cXw93Zr1nGXzvCvdFj33wmVBZtSZ",
  "key3": "3FX4NeGnwKCNcaewj7tqCtZFRbKsTakGKHmY47apD8qQLzjafoVVr188fyysXiyVUD8BKmcTaJHxJdMtvaeAhNnU",
  "key4": "2dpogX8Dof9RK8HAa8X7QcxsmP9S3bP2ixAd6bseF9E2jAmY8jZb4djpjDVkvLVppXfkX3kYHavhWkRSb3pa7RZt",
  "key5": "2TQ5eoLB2H9TaLhec9kdWardTksXvPBHWb7YJj1dGpxHos1jqMXnRBER4kRyGRnqjmCVtorRiGtekBsJV2yZ5rNS",
  "key6": "5Cb2eETDPCcZUWVsdF5V4yqzcDkkxgWn1dssj7T8YZj72Z5SYWYx9iTghMHo2ou82HaYx8jrsm8DQHzrqWrhDx9t",
  "key7": "2iSVb7g7ExPnEzm61QGfLVghkZU2qKvo3r7wbk7m2ENvdq2R38XxHiPsVBebh69isuNkM16DvU12jCvY5GhYZ7KW",
  "key8": "wZAtcDG6wf5TmibMDa5E3zuyKrSRyXnn5dBvZPpFgTTkirqpTBfFSz1PEjNPnzCjWUyK56N67C3ftzH9jgi2e2G",
  "key9": "cBPPvZuZnzCVF4ShwSkjrZxt8Tp9m5WvKLC3z7ySy7XaS59uWJwPnns1EA8bnh2u4gpEErdg7i3jZ3kuhgHhRVz",
  "key10": "5drbEXTy1qKUFVJZ8VSeAN2gdin5qypqYyW6NrofmEbetNWzbaHURqEdL1YKtX5iLWGpiPMXZGEZzXSK5q6qhTrM",
  "key11": "32fULjpWzjhb9kZVJM6aVLFzPhW57fuEizHKPrGKF5ZoV71DuX6JFosYXYqn6286saZmxAykT5eBLVYEJvC6t4Rx",
  "key12": "35Gs5eJReWa4BX7tZgPx1kBYazRu4U1wzgj8dKDQn7oYXWriVxgSKVfCERrKgbPE14jXnjtRW5ucRqsAgHo8mi2Y",
  "key13": "268D7HKoxazBxi9QcZUUdUHaMjpvpndgyLM3r52jCEi8pXKdN8TGXqEJuPpWxvNUQxJSginT73G5Fpux1BRTjPeB",
  "key14": "6AG1ieWY4tpDRRJqJVJNxgqAUfji43vRNeCQacW7j2WGmTHTYkg8JSUSQMgAhPyjaqgK1bb4quAbFfsUCBcwUww",
  "key15": "5dXC3u2iGGRJAwrKvRAqXamun6RELjHmjy7mPujmP4SrSN7CEFDxDoXRGHuu92T6J5ADWyBSPZ1on7HgyhoMWtpG",
  "key16": "2d2rMuAwuQbHxHVrSH24AYNGYLqw7u5pFfsSQ8AysMXN8f1pbY88HPPcZKk7mBUidhhL2ag8dciFEVVY2Avz4DV1",
  "key17": "58oJPPj8Saa8yGjxFxnKFWBFBo2CTJVQmxfXjWe3p5F6gNyEi951jXcZ5CD11G47jrMBB9zSEE9KM3BkZPjhL8n9",
  "key18": "2jMeRvzqoCNYYSdgUwSs7rghQLioxRxVDvxAZvF73RWnV7V3tsjcPVRL1YfyM3eiSavVbtBv5YD87hb7YpmNvcBD",
  "key19": "3FX6od6nXBKDS3RmiVmwfzy6techZJNQ294nwJQvjk2kAT2YM4V7o5Adi9kvwaFGFmPuRxd39hX5TnZah3xFKFJ9",
  "key20": "3oWuUP38YXScbZwgyXNFBK8jNADZjqPUi9T8UaWjN2tJcyLVLZrtiQNCbE91zAgURNmWjQxNeNor6pSpxQsXQt2K",
  "key21": "4owhj7WtpYyRA7R1LMSeUFtQboEEoQujR7zCYAbwKzAHGh2mDBiQFxpaJVNhh4UgmBE74nxUaq5uhwhgqqkJjiiT",
  "key22": "3UVj3HH6qvGWyQXJymcSv4N5UQDJ3BW31HuQN1uV5hSGxQFJwx3wnmDKZc3g1Y4wNuU2ZmawDr4SMKKw9qfY1kFP",
  "key23": "G2KLS8mSuMtx2hDAhfTj8Uya5Hf4BzLr1hqucBUDsyH8TpBeRfWu48DLCTBHjjV6WovkSkDKLuYuCqScJn77mYS",
  "key24": "2G5fckkK3YKsWtkXsbTxuTFCitAsEmNUV8Mp73WXGcCpw2CrsLF9zNUob1oYdKj4rZ4jsRiSZRbF1copJ4T2xtmA",
  "key25": "23xXJ8Tw2kjrv7XqbW9yJZyzTiwXCvoLDuHeFxZLJbZ2a2p99oRFyPEZgXu91ZaEz2GznEn9HSLMkTLfvGLN6jcp",
  "key26": "4rWRNPPRRx7a3RywV7WmnR5rJerpkW76iS6PxM54ZHuqA3V8T7WYZfexZmAhzYMF6354wrmVRPgQ8fm1wbtLurLD",
  "key27": "2NzD5YpdeAsWGWrdTHmV3LpPR6CLLkgRv5wnhyWXnrqahUfFp12fH82rSbjaQXBgkwUNPCN7PHSGwdvaGh6DM2wq",
  "key28": "2AJ24dh7Sznt5UFeq8kVgU2sPRr68zXcYncWyo8DU8c3y7Pqw1Ny9vi5K5x63gUpmzGYDp84ChieKMXTS7m3b6f1",
  "key29": "ChUDSPhJeErgS5XMY3exH1XLESsGebtcT72SGAZ9EMPsi11Uoba9FbhwVFwmiYoG3Pwz1zJazSDPEqNEeCEB43w",
  "key30": "fU5rv5yUDKHKq2tFDfAXLebGsUx4w43Nrj7ht5H9oRfHsHATkjTHJdLKCyu6cGm6av2jRWvHZ4gNFW5N8BBtmW4",
  "key31": "4ndHF357FC1TRxStpCroprPNRxKqAg1mhMoKRqYYjRVMVCiiY71BFgbmUK2dGNFMpq7pFmGE9dBHSHrQNW2jGTgp",
  "key32": "2MX91T5PHR5vS2P6pKKFswdmp1iEs3G6CqoBWws15rn6T5kcWvgWwjzGS2oThDj94d6TLy3PHC2an5G9nwb889bu",
  "key33": "5UfAH6rLkkCgGhGwsf9R6F22bapLPn4JstGdy9Z4EzwjkhiU7jgz9ohnBfsi3ciccVeWVxCkWaWycuzdMN5Z2Vz6",
  "key34": "4tgveAHm7emcnd7JCwznZVR2Efi1NiGgWeEZTYi4fybwPNBQu2evCSxMcS2wkvLAxtJkt6YP7bExuaxbANTq9wRk",
  "key35": "3Tck9dPkhb5Jegg91yUAXKFFmRPuApcLva6aUD4pB7z15CJxq2gKhasPUS3Uq1c3eksCMSr2kuhaFef6Eyhft9ja",
  "key36": "mrBMo7V6Z4HF1rZQ8Q2ZkTzbbFsLvJQ1JjSkMB883GwZfPFpEZA1G5e6Twi3TbW3yo8eB2a4xWTsddPg3t72ZP3",
  "key37": "4P4mvib7KMprJcJVVML3AgV2LdUbDpCZiYhA17jW7uXheJcRL2KrSUmc21ehrE85ECmnLMoZe3wR5NJy5rKayc7E",
  "key38": "3xUrT7J2nTrpPcQDjW96YXJM8M3i1ZBATAJ2mrvWEFn2nE3NLKgqrVZYxMHwpk5ZuYpTazhPYHHpGdfJ725JEzEe",
  "key39": "5EKQMPzFPFfsUBDyLnwk5TEHdKXn9u2kUmJeP7jHtgpWrxftq5mLDxrVbDrV4tMbmMfCa3Upr7tRVtZLPHk257Ea",
  "key40": "5u8Vj7yWrW1kvSsYQAKntk7Y5VXJky8gFyuBaYJuxjxxESSH31wAfJp9jDLJWB1VMxsb2YuPZSA8TTvFE9RYPh3R",
  "key41": "3Dw8g32wK2NNMeBL93q2w6aELVDLrA4TxEmcgun6QBxSa5t9EJYMUeuCiJ2dWxfz6p4449oaVk5J53sjnjaHNUqj",
  "key42": "GyJvuWzNP82WAsBeA8YguZkGTk8iq7Ug1NRmQPrzjZudfC9T6rpzUZ9yGB1NB1WrW9xsZj8cFpdKGPGahHsgFtg",
  "key43": "26X5uJk6kzRaw4LuS2skTVyXPxYhQnkaRBJPTayCi29RmoCYAScXjX2igMdeDNPnrVTecEQLPFSAWTzWLcPk9jTq",
  "key44": "3TisUbjXoY9LK5wUpLkcbFttLmyUoYfXAXp7yvD2bjDH3JgzvPjsuMAGkKcWeoa58xd7XbNVeZ8shhL3K7EuF7WY",
  "key45": "5Kv4foNHPsMjGimLGNUKnRJJdMA9C88vj5D56PczHoxAnSt7VebKhvp73c2xCmUhsnzkY2QirGaLDJDhrhGxE6bf"
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
