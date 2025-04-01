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
    "2YxhpxS3EpDEkpWMy5UjySsDQaiR9uhRDNx6djDSf9muyh8UGWpKvz7pUQ7e7nopCRdW7pqJHzQfo67ZVKFX7Xpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QXHLgC3W6wyTBX93g5bD4FEpQ5qyx3EZHMUsYkAZ6X7UFcHvCEnXnCByzifcEpooEXqQTYrH3s61rKSTRP5wNbE",
  "key1": "xEw6JgaZ6iUNuBtAToUD1fmbeLe5P2d7BqgW3YFDkJpWKCTCSdTytLZS9sD3M8FKgkrge1tgL8Y48fyo9CjmVtS",
  "key2": "2MoEyUfiSzfhvg3d4XvMKtQWuHBj7nMgXewaKA4YFnQNukXXX7aq8ondHiK3nPdXGEjfK6kxPFXnGXf4GRsDrkCn",
  "key3": "3eQAkcHFjYzCd3PWKtW6ZWGyhY7PV3ecektD9wan88jEVeSq9Y4cjXJ65RCwrHJDVqbNku8S5Nmt8KV2DYdUhCLv",
  "key4": "NDmfmTzn6Qd1Jt4FUSEH4VfEbhV8AEHnXdpFVCf8f2tvx1Muq3UxjXzHvXDagAzGfoaP5bb7SfPmTahSRJqifdF",
  "key5": "467QjCDh16fvjmj6MaaeuP7LLT4P8vy1uCKTPAuUPjyzSSj5fyPTQPCkTQ5dq7VZve3efDYJ7MTiTTZ6WmYdK5Bm",
  "key6": "3Zx273L4CvaMdDtDYg82Hf2zQb1u4c3pfE7Rzr6WdzMBWjo3hzK7JhrHoP7BEWyGZknYweYPArBaX8fojiWnjXJz",
  "key7": "21ksjVTj6UPx6o4pdAjTDfkeisRNCnNYvizZurbsRHGpqr75aEAPgLRUjDVe4iZ9Xigd74KYRgjSLHGjE9odpJ8D",
  "key8": "49C2QqsKjyPPRdgYe1f8RqWH5L9mu2ricxTf4U2haeDzz7B16uQGoT8jVWG8HP76tZLKXqB7Edeg9F1xcaj9YUgq",
  "key9": "gen83SZ9KorqsWkzcGKoMDQNFAxwPqsxTJGPndFRxnP9CnUKSWzge7CqUKhEQWvMWfvDtuDVEdSUZkfYmAvWBNh",
  "key10": "29X4VNPV5H4qGmzdZQPeGrxL4q7EurmqD5a5CmUEQ16nYexfo1255tAs9FBC7KbFewiBgoatn897DEvurUQcMphp",
  "key11": "4FbZf2YBLAMgYAHQvxPMvRr1mPPqiX8EjiJBxEeLPjMLFujAAUycdx9vhp3FCe1SS12JeTqLZfEW31M7B2uWFCU2",
  "key12": "44sU8U6XLUDF8CGJxeD155EaZEmdmsRkbPiAbdDtbCkUX134oUA72wrey3KD4sARrT1ozLRhiAnHtmbPcv711xwy",
  "key13": "4yryPLT22P31ZL3E2mfaGSxaXt7XqVkYqcmYckJWJUFXe3kMAhf776myvt5GD23wE3zGLcXJab9nMEfcfYi8K2p4",
  "key14": "4g8pqybEHeeMZxJgGzrTMcQEzBjwJVwUzoAcCn95hmin5Xh57gE4bTpiVo6TkD8vDncvVihRDbhHXn5gYKFhwPbd",
  "key15": "5J7TXZredTWGJeA76UkdGAJwafWRRjTJK2Dts7CgqHue1yQVagCD7W8P2VoDYSNU53gUkZJjGyGYY35fE4ny8y8c",
  "key16": "2hHoRTZJ2p9mk3h8LEZ5SboiNoYZMNFE1UkmsRr2CKG2kGRwqnvv6HY5r7gAWgAixg6XLyfrGk4oU56Fdb4QvbdK",
  "key17": "5fe4vT712P5Xn2KqqXtKGNqgGt7papwgsYPCRXxxgQ2vu23jhVBpwpKRRrtdDXRuzXrPBy8fo5XJMZvTvWYVgMzy",
  "key18": "2waqdgx3YNRe1Nm7WE2dFYdg9S7Fy5EMNyj2urbpL8FspQBuew8aNHYs7kmDjaFFCZRX7Xkx816n9LvVW1b8EqyU",
  "key19": "5tZCPfnPH4HJRzWEEGfGwr1dSE1Ko6PtnhvFbLMhcWYfBQUFmgWkaEdFvVLAGxwnxWqTnHKD4btHRgHK3ZJTyLmu",
  "key20": "MY8M9ViN8PRqq3Pdt8r72j7ySLoUydYpeP67JujWYGSGvdLZ5mD3gjsHdpPLsdXQgS958Rbg4bzkmUgFLD3Mytj",
  "key21": "5NwPPPrk2SpCwSxFpA7nydXqQQFKTTVm7WHYcUChng4xWpnEZfdFq87Hj1UAYmMCTC9YZa6BDvfcJ6QXqk7BsL8D",
  "key22": "4Fs6grJbuFwxw311PbYjfHSLkwj6wYevJSqMHbutusGeG6rb8AkUU4ztWh3iZRN2YxPjNqoPtHLEtQKPoyvonaFL",
  "key23": "4vn62szu5TqWFspbwfvSKzsudre7xJcaHQRGJBpXgXHXfwSes5QZg2Szt6w9uQ5hdKzxVE9ZpALWeT4juYSn7iXg",
  "key24": "2hcNpVsUGKov6dNYrw4MjJeezWjLMChs9z4miUCr9xsxjPRCXxmzW3ftRifbVFAwQEbUEwBTrSsDMqTciXDaWX6r",
  "key25": "5MP7PSQg15JNBtS5eqY2GdFAxUPD1tEETt7dEMjyidLWNWXsizqe1uBnZ8VysmmenbZ3nPijANRBHahKaSHpiUXX",
  "key26": "3BL634VZ3JeqDoRcSPFZdHjEmwcCraoRMsem3Yt7dRUaxpScJUcbXgP4RkQkJffLS2y4VBtG25aGEn9wsUZfysV6",
  "key27": "3cZWWoepEREWn7rViQQaJ6RPQsGNwowRh4ZtpQwgJWpCKedZoEfTLfWEF5marVaVkTXKuVuYed7gDiNza6NwrL8p",
  "key28": "2Jb9ndRAzi29nL8VoNyHrNw1nVnkPfG2Kwp7Bqo7GHdpD19MTHHJVGXHDLej6fdDk2N2U2FKzhGTJn2tFCkB1Xq",
  "key29": "5e7kdfNaTz1GrbTtfxK2Td2jzGWdCMEvAiy1sQDMAWwzP65dMj512Gs93Z9n4uShMRZyB1JdmjBdcAXqwCM2rBB",
  "key30": "JxMbtSSrRGG78zt5RBaCWm8188SYo7mYQXXzUz9EoSqEz7obaJNoRrepR5psS9gznUMCyqkC8bkhasuBh2MrLAw",
  "key31": "8DVHzR6ybM2oNDySNW6ch3cBwv6q4ALbkEVTmc5FmJ998pvSUfTL2SvR4bGcLbFgDXbwCCcqq8RXgL37HeRZHtt",
  "key32": "47SRWbw4sWDCMQRc3ohUH134sYktQTsQgsfC3ysh9wXx4JH4h5caBi5JAi5ocKV7qjdzvZhDbeVh7y8eh9srSukw",
  "key33": "4GHW7c3oiG2X7g33g9pmo9FS26dDW7naPbR71oHf6oo8qYz3pE13v6BFgSLLHAfygcykDp3mJBvLSRsXCYGfJM8c",
  "key34": "2Md9PUxRZsQXT5SJ6FFWwQCRAAiZNSawgAhcAych8XqKZRpatiAgTvie2xEGgpUpbZSNTx7w7BuHxyviPWTWZ3M3",
  "key35": "4Wo5GYM9wmUqYeZ1f4K65n1Dm6BjUMVUpPdMXYfstHv4jd69xgUx1ZZDfaqaR5AG3aKfELnEhn1NDGitn6xCx2jq",
  "key36": "2daNJDk2gL7TzFwAk6SJGZgiAqa3waUx8AagcxTwqKMxsQex9VhEXWZyTDQf5jFAVTNBjamjcaHHFmg9tYX85KZm",
  "key37": "261xu2vJM9FddEEQ3ddyWGoF9GLSZvf3thEd5dcjWRdHdEQjyjMWLgVpJ5DqD1NVQ5v7mjCAqxS5vK4YkK7btPKf",
  "key38": "2WTarvFawsBU1bmmzGcKaUpK615HdzevogBvU6ajXuWJWH7pRwvAN2PeBFy7ohYkooDDbJmzAJuaLvGuJtTpECNy",
  "key39": "5et1tjh9RteR7wkMwnwk9EbdExQ4etjGKPfVTEwLbnwPHr4MUpqNmhx5uD3nYWp433QmabJt6jmgVa7ow7xWAVRc",
  "key40": "3RHccJPyXScCjRX7a9JGa4NvD6rX45yvcMKb5xxpugYZAB349qZNAaDpMKkALpW4ruqqiXEz2dDJnZ3GpixJfvw7"
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
