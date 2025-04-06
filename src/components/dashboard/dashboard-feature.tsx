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
    "43uRv9EaZ4fCpwL5BLcGpupRRynSHD5Z8QkBBpAwJxc2T8BPkFbWoZPZH24e5qf7rZEzmmXxJt3f5qRRUYJsEpNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9FetwZMHinMo17WjLYgfwuVLiznHHKQDe4sM5NsvW87b54ZJ1vn3DnZEQxbfYweiUxDSq3LHXCfmLhbFJJuPXG",
  "key1": "3SRnEo9uBJ7S1SoV4xgKbD2KDPNpKA5qW9Md9b3LeFJ3zmPvFUx6m7gJfppWafaY4oPzKW8aZ1Cnq2C8K91gJFBb",
  "key2": "2fbwF9UcyD4ZYzcs6v6RokzGhUQPdsgV4xkqEQZu5Yzunui1EMo5XLXgaEhut3M96po6USaepz3WH8B2udTwnPH5",
  "key3": "33XeFSrp9UBrxmovqa5Wez8eVnKY6kQ9amFURpSq4Yb8rJ7AUUXiDJGjmati8H7KoByBb8yu8zZa4UtpoK8DsVPB",
  "key4": "4CptVUK1mu7oLo4CQ5RyS2aBrhMHeng7BjZ7udv5b1FYcA4u4nq34P5e6Gk8pBT1AAEv1F3xa9wBSYXotSN49Y5s",
  "key5": "3NEi2zTgNjEjiSpyfWm3VVWPav9G9F899Y3RKLCvYybQfSxteUoiSEWbsJaV82qzjUBX8seKZkfxdu6tPD7KgAcx",
  "key6": "2hxzJUFRiVYY3QuyUnTwbg2az9nrDrvUWZX8BEfBNcPFuN1mzKdfT1J9nRt4rZSWcM24Ub2aXkKoHhdeh6nmwWtR",
  "key7": "4imMuiTJFtWCcYsvYbtn98znWrcqfU48aF6bev4dct2gECvaf7yvdHsVUkF4HY6S7FFtGTFjS44C4sqsUjN2jMKB",
  "key8": "PZB32PKfbuPTxThq9f5yR2jgDMfqSE1zXyGsft9GHUdM2ykXUUHTZ76hYw2VbbGK377NJ6cqAvn6A9yaGznPE63",
  "key9": "2WVpcqCRofoNmgvXYkuReziB6Txj84n2irQJ5HYzhG6oop6L3CBGaXAYiGpqnFJNzCeg2QGTfr27Dj2Y8vt8V6Zt",
  "key10": "uiZGz1X3UjWgobXKUkNxZ2rQp71jc7DB5S1JARpc3WZecb7BNPsG29P8jixcbTDGZR3jbTCfaRepPfC5UDcLQ4u",
  "key11": "SV9mUgoBykvXnAMc1BGyoD6PacVJPSY5yyTJX9vkj9hLtQYqGizHWEK1JHZkM1WbDSQh5hf2HShYCgn8GV8WYXQ",
  "key12": "3AUx8kYeEptWEzU7KnJ23P4BFdUjThUGMektwJM7BuwVSyP7mc3gSV9hyNVFAoq7AzofjUujTaDgZ6iZrJvNuX4m",
  "key13": "2m8AEPa5QocQTqmZpSYf6EHv9aw1VfHCobAt4PP6ZCxLAD4PYLLXksJcM89X8JrXW3ycYZuRLoxxxQ3gibvYvF9N",
  "key14": "9VALREhsDYGs7twKjteTve4RW47LpL4QDYJdXFZ7JGN5fdNEbhyQ534xph1Vw1HiTPuP6ojn8yv7wRXMoUKNuTe",
  "key15": "hVnBvVkSBS3Q9DhFwMJut9KnWA3BELCb9QgdouTRxhNn3vxS9NkQwR6F3KoLpdjxxbLhW8mK71cbWUCoCLnuPWF",
  "key16": "59Ej6i9V4vu17tfRUMK3hjakz2D3F1ETW8nk6nhX6H4JGb9MgRMpnSiK1HmwHHZntacjKcCtiKdQC2V1NQ988tVq",
  "key17": "2pj3rMc1VkWEPDCJw5gw7No68mmR8iKbhXYVvTymq9YwwUwKBCcuCrVYizdDq4bmRN4ypNjkwHvkjJG3aRiCZYWU",
  "key18": "5dfb1qCokbvu5stDu8imvUNdmEELoNkFPDQYNgphuAcJDwjbcE7dpnKwM4nZu9qBAPnGA4rgUNTbfpj8LXjBHSHD",
  "key19": "2HUaXWcRDL9arg8rPcS1v5pP2fNr9kjH3Z3zBiUxdqHdW7JEaXY1a93vmLuGRTf9MME1Bh6C21fe9rNjWQC8xXft",
  "key20": "3Zk9saPNYYfnMpc3CCAthtkSCFwmkheTbxH6fYMbN9YSrPjCWWqrMfBfJDHE9pzKHTvVQdNaa7g3Frx5SMvZnnUy",
  "key21": "3Nxa2XKVUf1QaaUy8ASjzCSjr5d98weaX96sdnd4gHBqERUPHVoWVjzCBwjX1vP9Kmud9f2aLBQ4LHiqLzgP8UfY",
  "key22": "Ca4gVTNBfoK6orR8k2GJqtytL96ESa3biYunJQTx9CSnLHHUdLpPfLjGnRUeuMBEPmkSkmm7jX72CG74Bbuvr9J",
  "key23": "4eWVtS3mK3hNFbBp8nwsu3oZQf1T483Ur9jJR6Bq5oFfi9GjzNzkmvotbSWdVFeUEbZ8UsUQ5ByHnxjwn6XdzWVS",
  "key24": "wqjidpYd5v2SH7skt9mE5gQpejYrnSR4YkJK3dBwYpzt8UhwpSK5BauLdkYgPJSoxZ9tce2AcfU2x7xMxBkeQUw",
  "key25": "rQmJVta3RXCv43sAFAG1CpzvTbgmphvMvjTPVMrwSHzVd1u4Lxpcf8794nxha9V6tMFRfpdUFdcNzZKGCPebtaV",
  "key26": "2RDtes9RqsrZUeQNnGPzCdJyRNS1VRr8wRs63zCggLFsGjk2a4tNzQt5dQ1337EEiHsmgKovkk54RvxVTtfb3d2g",
  "key27": "27FNruDn3K7NPeQ5yXFPFgK3FpPvmcprgHUnWcgDdemfKo1Vo2sH7GZZGsozepq33FakMqp5DkDHCijyHtLbofQb",
  "key28": "4ZWCoTmEKgwojqHwESAkWPwNTca8n6QDLbdMgFerdWRHdqJZmUY2cnktJ1eBqi15PahrZ11sqc4yRJNA5DFj6J1d",
  "key29": "49hUgVHE4xVJPhC2YinzbiQqwkshuxCaor3tGAJ8ihdNWwuoQMWb1RZgxsoEjcWgTFRyLFdzqGEHKLbgmpdmJq5R",
  "key30": "2r4rYybc2VzZMJRUTtCd7ouTRPznmgMaLkqouDPjFrGg5ihy57Ma1D1ufiJkNKVgNzaY9oyiWKB6oeU4j6ux3dQY"
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
