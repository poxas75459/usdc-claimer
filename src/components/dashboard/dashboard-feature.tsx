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
    "4odLzx7WgQYxuabgroZu6D5AFNzSLdhPFyQqzmUju5sBvp9btKQiBD2mxs9ArACeiaaB7h5wvWW9XMqZPUQuoWnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCCtSFVtcM7bWisG6Yu2KixjKbkEBGFCYp1gzVNGfWVzmbTqH7LhQuSjZiiRrm5ypRbp2dpuBPxHTyAjZtp2Yug",
  "key1": "my2gPW4cTozj4p5Pmw3vircNckPhkUv19CwwysMkN4Unc3gvPK1NifnsZqCydNz6SHWnDrFpqUD8TmJJfyfZExP",
  "key2": "2PvJHo2emFFQQd1ou9hXcf4DWnCiRCWHQw7TbB4Pnot1eLb4TpDW5yTy9t9Mc5dHyk8EM6AoCJTFVBCuvsH5cRyC",
  "key3": "2vjd8dJU4jkJiHVNZCjUnu8qWPZjiQM2kJB31QUi82ofCu8bqufzJLfnEaWBgz2uPunqUJbxgtMurYo88Pr6epme",
  "key4": "5DUtprJKQNqS1Q9bq7bdewJ4yz58Cf31oqkMjmQ54EZHJG4iUpNrBNJFo4ncSp8vDdkG9foa888B7VM7HJEd6aY7",
  "key5": "5Q9tym6ijfCjGcL5M5dPvGuDgoASMHK2p5PyE5m9dJDdxbMGrZkBSHjCPw9BE9TJwSd7MMFJemZPGWtvdcbVDwbK",
  "key6": "4ucq1RKWBZ4Brvci4Ri1ziAmfy64gzMDAnQk7VgKyTueKL5qTqBmMQmxXPWkxVo3otdbomjpjhXWZrrUZZk8gi9t",
  "key7": "3t94UcT2cHWfsAifgYrCkcu9imN6NztSgXHpH8UMjXJHbgQzoM56fXo84Tocwo3W1uH7hdLVbTj4r4cX5MLTny3r",
  "key8": "5ihV8XkKU7y6KrJh1T4vf8KcezxhMeeCPxRzKy9o6NhhpdvDm2gA3MahBRPHAT4UfJZWYzVXEWyTZxv2NyuWXDer",
  "key9": "2Nci73Y5M49bvEp9Je8vycYLQFyUuuc4efBS3uc3sZ5UyuzcQ2vxQhcBsshzS26AuHGSMZgKoSBfLtceWPe1swDQ",
  "key10": "567fhAnskH7uHAZ6EU3npyCXbgNqEUgzCwKjeMLfMjr1s6bBmezNMPdifUdaBDFR4XLiyjUYyBbFabNUNqsH1TUk",
  "key11": "4EN5YEnZgNiG3DzhaCSWrhkUEt7bUXiRZyXaaHkjJqReBvF89VnKh8gxQd4ZACDgJ4CKUoUfer9X54JBnavfQGJG",
  "key12": "5HSjPKsdFNR29dkxb7UKsauHRkaBjd9rftrMMFBooDwfUsKbMzvBuZY3wTPz5MSo3AjYuRiGzjUqbo6n3Sfi8VqA",
  "key13": "3zKKzQjUgrx1u7gu1KfzmRYnvTd5Ls3v4Xsqoabac37Cnb2Efw3eHFSYWCM1NR9MjBurnhH7iN27bjW1UUJ6zyhT",
  "key14": "iqYizR7zRWQHQS7DYpXTbDXjtC6DFDX5C8Z3J3p9DjmKmC16v5g7CvT3PN7QEq34rVpGp4GUrwmEYosXbbk5D6w",
  "key15": "4pQpJKApxcw8FWFPfHveTptC4uzLLuZEWPAWsWc1HXuBkHMZQbVZ7SasSrbTG4CLSgBQhDhFGybMAaY2jDDapJsa",
  "key16": "rQ52TmWMymtBGzDP3QCvokGgtLb2q3VgT6AW5KB44Jj8ZR9qgy1ceRb8c5GMeHoLFntgx3MN2BY1Wkgi1anxLkD",
  "key17": "RWYwSkQcQMu6JEJ6AowK3n6JiRNqJZ4tGimcepnV6JuJW4qnq9TogmiNwsUn8BK59gvaPzPjvkBBVLkkeuhqko8",
  "key18": "3rD4gDuumP4L7SuRLkJpB3jr53zXy1B8ASsVFsz6EtTf5Q2ZYVWB9CYyLArLhK4NtFfQ4hJ6GQiZtwgaeUSqpGQG",
  "key19": "8w9HbQPxvnMJXh5C4EsHP4XnowWe2M6B7hs71QEM43JB8GGMcTBytsJJzxMbBJyDXsBwwQgVydFsYsa7L46XeZC",
  "key20": "2qrgqkCsZUxSoyCRv23MMWbpaBNrCrHmV65RCgVazd7fRGyAUuw27vQryYyHc1Tvu1QmvSskwJ5PcEXtXtRwskaU",
  "key21": "FwVwfYLDXYauQv97MvM9FgK9342Ur4oXbkvZf8QketTdXNAeRFNsM3g4xyBoxJwLaRnbdXheVpoK9eZq9d2QeYd",
  "key22": "4uvD46G79sXae1Sw81MeQAGFZi44rZ3kbBvQ3ayq7Ay6DaS3k4rxQqZB5rXE4m3wT1aTURMHfCaKDtZNt8YqpUEr",
  "key23": "3d746ohp9YnVYFYMKM7vMHV1LUp5ErwrLYGdyN6ZxA2YAN3WRKGJhohL6goWV6fXSAWRNEk9X16ntXBarc9z8wd",
  "key24": "2oVm6RdGNRKVAz9SGwxoS2FT1qcAWjZqouqZJ5qn2vocYM1X4qrTLecETABZuvzUsTmdFYBbE6xJAMvAAYeRJkh4",
  "key25": "4yjW161PtKNSkchhV5bHAJ7WoJvZuCpbVCcsHbCLCBsMyKLUL9TjWVHrQnPzuqEr7muWLs1G1jZRWuhwUiCppqoQ",
  "key26": "uXHWVwD7TDocazqvqKBVgREoGwUHUjst6ribn9otBMfnKxT7sQt3Y9tByYFCUfbQAC7Pf9KowG6wTfE4aXwwBH3",
  "key27": "5uABNRqRfwgf8yNtg6HuCMVPp1CQEwjJwba3yWhCC9FWqiCFD9W3UYgRSnQTevVn4tfp52z9tbo9bFTnbTvuBpRi",
  "key28": "5vKshyqvEsXTcjz1rUnvQ5vwYW4mqviXyfo6Ytymqmsr8oULkmpGV7WdZjs5Nx1dLhaJ1VAArKvTXBrxMPXSRjtt",
  "key29": "Ey9bS25xoJUicKRud3oNhUc49xq67a1mrbzxP5QZqVfyBf4sQ9ac7aNCA1eRpeXYnKvzN644LcYEYQirraNbjv7",
  "key30": "4mLvod98qUptjfE1v6dcG3Kv6zLqvXfxEAYEmY5xTD3fn6Qjee6wPRzZo1eGJX7dnM1SBLD1dfY2aQ2eZJso6Wz3",
  "key31": "2Gh3Szw3FFg4x7N1J4ri6t8vsGXh7Yu6dAPBX47wYKnzEdbNCTnKa3BAUGfE88L6VLTAQCk74dfdCPKZbrt9wzrX",
  "key32": "RKmH3kwd8KaL4r5MTerv5AcdcNAAfWRUxGVKz6HoF7sd7MnSLT2uoFRusWyFeoXvdorC8Vjp4FM2Gh2HNVnpPTb",
  "key33": "3gtKjbdtKKPui3P3YuSPykDd26Yc7ZgYKv9815vtSX45GfkQWvd7NEA9sVW9eWLruHz7ByBkKPwcq5xkLKJ6pwDu",
  "key34": "2gSwKpnTZUSv4CbEHiGccu8CF6ADgjBqDP7PBBKVZCv4xJYSr58ZFWDTyqXW8er5YU1GxkFw9WN5XJtyNh7yPSZS",
  "key35": "4mKeX743F26UStpjukotNoFtdiG4w6pm9jXBZGPruwQPKeQV9c6w55w7ZCkSSmyFDp5b2fVxsvnUh285aRzSwQQZ",
  "key36": "5rZx1zEoR1f41QcyR6FwGuUSoLQV9VXXZJoj6n5ZNxzA8A183p4cAEj4PCfhmcendfKhd5daGVB9T8ySxxiAQY5B",
  "key37": "4YoAriWWfcaSbN5LyXuNvNadaaFYD7tuoHK5ZwdBRcf2hwK5wX17R3WDPcnJ4pgSKr2MyaETo785Q9NVknKHfnKA",
  "key38": "2Yay898YjoRXvCKRvNRSWiiHiAkkFcAwEDdB9sXPm2q1esFwhQH8j25pjzBV6AvfVpgmR39b54gX3mha9KcKJU7v",
  "key39": "2X1uTNqABU1BmTNzMdJf6DJgePmxnpKTj5Se3DvCxPBiJCsqKr6F7pU4herDhPUMjLXKw4vQUhMbuH5xPJ349xS5",
  "key40": "4dFt8LhWVEeNALe99GkiPXXyP36PEghoBKoVTkk47UvNXyDBvPt7CS3zj5nEEbr1xieVk9F4rrDeJfL5Z6ZnyYvP",
  "key41": "4WFFaZb1syMCZ8RiseEFCNFtZS1xxw4EB62HCRMHEei1hSBv6jjoBrFQFnkqtu97B5sKbSHkF8jTG923VK8jb28f",
  "key42": "5yKGaicuYhak2H66K4ewHrmyJSFtR378RodxZNEEGoaTUu9CU8mHcPu2LpybeJzJCzmqhbW2S93mrbc9Z76eKRfP",
  "key43": "2xhYDX4eXjbwEFrc7HKBZT3epzKcV9qYzQowtoHQy9HgRZvX1zK7Y9CGqBwJXKd1ZZMjSLNEJPRKJ5uyKNXNvd5C"
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
