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
    "5s4cLMwkVg2zHgarWr81SAJ4ZQYThSi6rVbxs8Sv9Yd7t2JxBbHfM4PV1cGVeZ1RnSETKHK1LndT4exCfXsoixDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ycVASvNiiuwP4FTtKtwgYyt1gKc2Tej5vgKgm1mN2qi628EswozHb8ZXfDT4BR2N84RNJLELQFGuDjfbj4WECYG",
  "key1": "gt61Jq7EqKwBHvVoRFT1jQaTFK5qTfPwNjRCNXMGdPssSnCwXJRktSZaBQKpE3p5Bj5Ds3GKm14MGo4bhvkqQEw",
  "key2": "5Xjvxh2VWLPmxucWd2r7kWqMNbyUBxXPhNPuA2vVB44cc7cZJAm4pcCpqH8Wk5jYCyX6xzS1oAUD81TdFjVhnmT5",
  "key3": "3VE4o5v7CdMs5SdBdYeu6z8NRcn5HssALHt89KeJrxZvtTaX3CfkRcC57PmxUL9xLhdFrv64GmWZiuY89D47B3MT",
  "key4": "58SfCVegesnXb27wL8rG4L9pgEET3sn92PR37FnBEX2ydF6A1hcGWaVqUiXNEJ3kEYyrGXzfaZCAoB9S83KVk4UL",
  "key5": "2rNzWDWfbqDZ1v5EpAKaYt5ksAyRFRPzGcyq4ruFEGmipDtCg2wkaVjXFTsXoS8cBYfErbgafGzurCQtqtLchgzn",
  "key6": "3s4Nj1itNBsHGg6sei2DsuhMzXW9XnN9M5UnxRRFXphWCYGt7mbW8scncwZpGdfGWDTauBww8X6EDKXLvAkr1YGC",
  "key7": "5SfX6nJfy7cNzjzBbruanRvbg5DKcwbdFu5jbTdJ1BNs3hgziQ2vo2vQzrZzosc4KszRpPG2vcqjzx73MsahWfGt",
  "key8": "5PrXzsYG8XGvvGcttbqJBqLLv7n4doGWRbFowrURD4okVAXvrtK1Nz6XcWCi1nmsA1EMzeMFrjEvrA5UGw5KvwbQ",
  "key9": "2Mkav8rtfWQ4m4qHve3aFK3Eqp5cqXe7BcbggjjhiX6js4RRxyjqwGKfYbugRBuGf2qnLJJruyAf64GgrS5gMzfu",
  "key10": "2XA2ZnPFrfA8KgQodJHUiNs3ZPz4Eqg3bmJ5WhDk21E5f6otgCuNBBD1RWzdnFLLF2uj9s4bhjwgTX65s66t8dzf",
  "key11": "3KcGQxEWdrsfikPey1aNYt43HAUStx2gvSFSjGZXjB9D5ijKvRa4bfrP4unx6ccP8aCSzNad3hRidGk3eJZiJQQ9",
  "key12": "3cr1qydpUP3qWdbZY59xbtFdTDXtZYi7v2cRE5ye7gewQ345i14FhWCHRHLMjXo2gYeRLZ91XbbHEHKRvzBKWMHM",
  "key13": "2SGTPpQMvNYC4DnampXJYZWGZBQAPtRvHYQX4hAFSftrciyJbvaLSwupR7ADBGSTBGhCiusfARtxoia4o9s865Mg",
  "key14": "oXPRr1zdpBFJ3a6Fd8vEjUM4d2euawh1fvBoJECtMH2cyBQXwScgcWRtwNEKnc6hFzpwu5id6Pg36r3LZTvocAL",
  "key15": "cgSgbWYUFa442NTfTzor7jZyvGp6kqeP7dzboe1xfFKmUmM1AQBaWA4Xo23Kf6eGp3Qku8pwA9ZJvDVb8DyAAhG",
  "key16": "3afJtrTEtQFhHZsuQh83Ws8ELKtmUJysaZLeTrLmWxrhDtMW2GUWn93ttKZCUi4Ka3KnnmvtrT5wfU15pwmurfkH",
  "key17": "2edNaEVcye7K2CDKFp7MTizBnVULuBrYb3MBfAF4VBTCSu8fCgx2dT6KLagpaThBirEXfLZrd3Cg8aLH97PNvRKt",
  "key18": "6gyzgRnYL4NNjVEottGqukuQKRKysQtHee6DVeEWMsJaXBeJf5xVKEa9BicpbsW1ruJHtDUtbJsihniq61TUs97",
  "key19": "7WDokpX1Cw6iKBpBJ69JFZvuAYkrp8rG3fJrAp3dyNfx8tZoHyDSiQsELMvhAtDo4jSvQFGYjgj8oM8rADxDcna",
  "key20": "RTbsANTj9rf482uyQf2tPQqBUGeXevJrE6R6pKMG33YQdcVeJcqfFghrxExbLnGsn4SUL7xCcJu4atYK3aB3MQY",
  "key21": "66C7LaA4nrLsqtUivuRAtN2wEQX2A6CweJnD5neNmJ9L4aqhzMMfphJeu6zsXwNW6dVBGYxJsTEcWToBneGkfyp8",
  "key22": "3QsGbepqa6QXAmXm17Ck9uwXYjQNnvmSouGazQMPfrscaCWVbiYNQxCocagetQSTj3RSTAbZwaY2vzpgtgw9vrPn",
  "key23": "2B4wcdA4dweQPaNCmuUupusiRrvgg2P2tSm9kQSmxMkDN69LUs1yKeXZ3qHfKKogjeMu9QCPw82JhDMkNfmYGuFH",
  "key24": "fbs6kS5PZmWcCWuimQm47z9dxd5CKLAcgJGYUBgX2dwx1SoV1RGS1n6Ru7nCKF25VE67vQ26w3954oBWDuLQTiW",
  "key25": "3M5gAuxoGheCSkSSNQXyeCzzKGgfdjG5BxPR1mSwYpEKQYwZHrAQQagvaEpMFf2YyoShkaJ5aWYtEdfW3dJG3X3W",
  "key26": "5EZoJk8nme3WwiMi653jqqZ8kWbGyYdko8LfekTw2YiCQqJU8LVK9jG6mfUfswDVKV5g9bN9KgnNHgTSwH6kFuMB",
  "key27": "5VZzveYVXR9F8ePS1L1mb6aJA8Q63SGpd28nQgYKmkEHykM6J5QGdBkCenQM12BeM7HXqR5NLtVR8VPXyLXPQ2KA",
  "key28": "2K5ZrxTKZ7pGYMj3DfBraBN8ZjxfiST2aiBwYdnn232J5h4uVFK9epkd5nogvMtzi7WUsDbk6zXLTf7fPJNmuYV2",
  "key29": "KhfhV8TJPifTPX3ZZRAaxs3a7skHZm7qTMVqzCg75noC9kYa6G6fs7u8owGNEfTTzgKm7hkbmohZ8nRtmsRuZkK",
  "key30": "5vX2uNKeSAMTqgi4VK3hpGTs4rapGMrnyJoygJsaTo6tvjyqMxeMJ45LqDXvJ1QvooY3zVXnw1TJbSekFhZ9eBf2",
  "key31": "2w8Pw8qhVmzrFqxY4XNveYRQqvjSfEEApsdmctFPYkyg7uELi9dpD6zfQUmFwbvYUcrKnpjnsx5nrNoSzRtr7Nnv",
  "key32": "A1XiHCRPK4wA66UuuJ6MjCCPhxSHevbj6rHQXuh7DcgZ1vajr9gmdCHqqQwU8iq1HNG3UeEzrAYRMyJ9KiaNKpe",
  "key33": "3jTuVw2DZJxPK4JJ1PLJZ6jgoVTv2dHhZuHxshxj7YXYQyik6dA3LsynKedQcHbmeRGYBDPKBd5jdUpHzur6Eh4S",
  "key34": "4oX83nxgrk8jYoDAPW9GZcYVh5gzw2JhDyGDuf7G2QdmDy24BioNcG9SBgsTZaucLzstUewudssxEmNyHf6kVHJE",
  "key35": "4HLW21MaUktw5MZ5fAJYYXnPvBK9M3vPbxFRJyaV1pWQdVjcWXDfJxUDEW2WZMGBo514FMJTUsdMGRvx4knHB36e",
  "key36": "3epUpLfgpTH7KdAicLmbq1QwvVU3dfMLHXYhVK3E6ALRDhUUNitj2XbkfRoUZKxVZQbfBcM6jDU1vj5iYv8fLoX9",
  "key37": "43pV2SAtVckW3p1Df9siNxP6uSSBxkZH5My8R3Pn3ruedJRerJC3eJe7QDaUXH8VjdvMhXomshUgNFwg1Fu7symr",
  "key38": "5otPSv5migb5MgzXJzwoGrWbYND8rFA16RDgM6H86UXdbiYQ98kYBVZ8yT7hGUeVm4HDpAZhShx3o7kSn2TgydzT",
  "key39": "4opk4DxSB2pxsdnsQeDdyVsC11Tsi5XRivoaSZoWdnJ19bU36Me2jeKXLS71DxCGwdf5LfLjyy4j2c7t36SZggph",
  "key40": "2zo8CckrU4ND373ryT3XVXuwDevmzAaVDu8znokZ2YPj6xxXNm3M2QChxourJuMQEy4KWwNzXQjvCjGb1y7XLQmd",
  "key41": "2YJVJBeh25JaKub1MRvDcXP86yAWdqBaP5GpaqbCgKziQSZwg6Sxno6NzZEbhmqj8SdUJgfSewXivXeP5NcRYWLq",
  "key42": "4k5mVU2zJcueDnfEgSDRZjX6SBKT9WKeY9PRD4C1ZVqDv4k1zMXTFxGV7SyYqcuFaxPw7cJLpi7GEi3PPAdXP6wN"
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
