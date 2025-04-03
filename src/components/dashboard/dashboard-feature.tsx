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
    "5EEBhhpNbArL2z7a9d5rKiZhhjSPtHEjLcYuf4gdLMLWqDV2c6EmdV4gWenZVqo3aimB34pFepDD3SCm9bbTwyJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysJjw5QwbDfTMr8EHWeN6hVoNST8pkJi6e3wKBaQ5Sx8qb6R3TaGTxJDCwQoWARzVobrC3g6F934eypxhoZZ3vE",
  "key1": "3YuhbLvTrWJJDExUjCQdWZxz1Ew9k3YZbzbpHhJ7K9T8NJzCH3zAVyJ2Pprw9YbBRBVQWpFYiuWHcnjkm4xujyu",
  "key2": "5MmJz7vm2dfd8u3RZqvSTSHLcJ7eajYVNTSTgXN1WPBRU2XXe4iL13yEJ7Kvc8FaXYXMcWQyv6uwTT3CkkhHh5PS",
  "key3": "5b84u9gWpW95wNJPDfH2HmQs5d5y3dMh6qMw5Qtw5u8PMj8GXD4GQv35fagCn2PiDxbzmQEDzPC3zonKZwD8BUu3",
  "key4": "33LaAMuNetdCNHBPtPa1oun7kEfA1TDtqgw9N68Gm2xpHpNxf3c5cVfSkYBCLuuhJtByJPVnCGQhkqT5PLY44oYF",
  "key5": "RSpcekmWjVvUQ6NhsN76aJE9LMMDvcxt2sYCP963g7a54H5NgBDpdNmEMacvNhDyV4UXDyX4JwGkqpQnpwvDAPD",
  "key6": "2VYkNoMnvUikhkJGzFdEYmyWa5bscDrfpuQg6FP6ju2STeVcMJAXr5SsK4U3mjanFd3X9nAcoqpgsWG3z7BJsJ2c",
  "key7": "5BPBNZPiTHjN4zGFsPAztwewTubzcrrWRF5pkAQWKLtvbKrjjoMk4xpY9HpRJqCi8G2c5thCLJjhsG2gBrKbWxjf",
  "key8": "3KNB59GPvL53qNAM8wh3DBRnHfnxgA8pbVou46FrXHQDW7Yscr7qksNehZGETCzFHJLNy9pHwXWW2XUXGUbT2GHS",
  "key9": "jQkWjpDLVZwSaR9vYYdmc2fbqhJNECskS1MSeGmi65R1WX6jEeQtZvKNX9UsGYBXYGp9QSQ3emAXAQFTQd1c49B",
  "key10": "2cDEyVUzUgToszsX4Kp5Wy6zZkaEnV2UoQHz4Gd3VDL4GxUjRX3i61S3uPi1kBSHmiaqMCcRnfpreweL9QL7h1os",
  "key11": "5FBkQAXLaM4nS3bjEckbXjkFEdqDd8NdtgSnnCUvQpnxo52e2NRWqPzH4M8jNJRXXnETs9vFCWLy8AMTrkPd6WdF",
  "key12": "izApDJ9JVxMpgZmiGiY56XjbdxV3seeYu8doyVKvY1vn5aNFKCi8Ea2XumMoU8SHCFesHg2G6MUCtjW3zxmCQwZ",
  "key13": "juW4yLXwHg7AgkZPUCYA8rN7dyMiXwTChfN5i4qpmkab1TCAy6x4rf5yd87cPYUHepGQSFYtSc2sB1XDxxyBdgR",
  "key14": "35kgAohWJLdo9uNMMW1TTkis4VPRXoy7Y2jHwrNMsjdBtUtUVRRaMXmwmAdR4WbBmbU2ZjDcuULnat7xJJ4Dnwkh",
  "key15": "iF5wDJCqb51zjkXZhYkYveihMMdgvSWiF2e4sv9DVjNc3aqX3fBRVApZS2AbsU7B15BTJPPJ5MuMXqPBxTuKMWs",
  "key16": "5kovfXFnggfy32D8Ray6zVjkqXQhWUcqZ8DEY4NC1bFpfuwhtqzk2qhWqz3gxGhcehP7W5dYxgnvJ6MuHwTTpi8m",
  "key17": "2B48TNymC35qqTVtCqUkXQX2PYSS2rUDuDRu2Zu8RjerXfqhxcVTeHgjJEzUuMuQVgM3XnV3MjxcFiTA85M1YxBg",
  "key18": "ikRupTuRPjvA1jBfWLQts6enA9TkgRmCviFxWNwiMEhdJf7PKBkGbQgqdC3JS7DfSTUEnsPaYyT9u7idK5dz3gd",
  "key19": "39NHJSAWPdVJMBmVLSb8h5ZWFETF72cS3EksGguSNzfxKQH2KhSWYbQHQQCzWPopP93HKVFGXatuDHqnoZmEkNY4",
  "key20": "fiS4w8DSuDEcxeV7WBSqTqovgnNugrpKHgFwUW5G7BbTDfNMtUBJyjWvvLNh3v7yEz9Vv93tYDihjDq9MyAqtGM",
  "key21": "2FJk1Q7gaAAmDdjHnUebdwC8tvEBzFtdQd3HdhuWuQrV2pJ7msJgXgJyTjxC8jCyp4Li4W7tMYHQkQTd2U2ZrqdV",
  "key22": "55KwLZTR2zithtcX8nFfpgKiXV1HzfpZpjPP5ayUAVMStJxxh1TZpGFUdLjF4M64TKrWf7dJKLp3AocN3vPgbB9p",
  "key23": "2zeC53NFe14zNNBJASeGSi7k9i4jAgJP7aruMsgPfSanL4qyX7VqJUC17kRGLcbbyf8XXDZEEUMqMJ8jzSYMEoHW",
  "key24": "iZ2S73pwMAQkRsG871Dk6CXbYGJKHdWfCHUWEmmnrqavcECu36r9hnKUJdFqKPBSUiNtVCEUo8jffdbedgxSKJx",
  "key25": "3dp33yR9Ytv7UQ9ofeD1adaAMR5etT4AiGYnKVU4ebAiUUUApFTD4JXkVi7N95cW2qf3xGGdaDbYjopUSDc4EKA2",
  "key26": "5w2TEurXjP2dzjwfwC56sasfZJfMR1fVLKLtLEgnaMW5n57LqNzR9uywGUwN9cWwnJvaBX81EGpwQ6rVLzRZxG6Z",
  "key27": "qD7Wi4sNgZG8s1pG6SpHab4UcxanaogpWbW8m61KXagVcCVoaxouf9CWf6NCnHbqr1ySqeBhTezYE1LFQBFFLRp",
  "key28": "2kVNFvPEi6Uf68SpaXKssnerSvxyZ4t8o1bjJPSLJwVKHnEeXnAKcVkzDvrWPzRTYtfTiuD5RqRUCax31fmKAJeN",
  "key29": "2Ff7KZgCUA8TaLVdK5hz27NRkEf8qvPUaypoasD6ii1L6XT8ox4Eq4RaPH1pFgHdSXY6qRELEBJD51RdSr1LpHU9",
  "key30": "3KQVJk1tDpf7dtM8dbjgLLuJ8vE14uTU5ffKmz5x5ipaKi9iwBLm2sz6dViJ2rDXCR5BEzsaAGgXyeJhCPutSa8r",
  "key31": "3MpjPLuSujMrFgyZWBUyE43ZgpgsaynYFP6jDu4opZya2oS9vW3j2HBrBZQAvB2QcXBYSzamssn3gy75xnShnEpN",
  "key32": "3TsnTZJh5xJ2H4qvvYAnG5WxH6Hevcn91DLZXCfLnQv5N2qnCAegc88WJ1mEeTiY7BeigprcLT7NE9mkMKPrgc9H",
  "key33": "59ckiRPL8j3jYjSezYzc3R6cKh76haQRj4Nnd5mQnCb9HozJSaPZMUxvXb8peqksgqWGJRZyZw1Wz9MjB2sYyGSg",
  "key34": "5fqg2b1AgSkxqsnozsxC6b7fpMwqjUUqZ5vEBb5hjpMiSfRoJS4j6xgkvWuMQCJZxQrKRSCpKhqRFnXyAxyFGw6K"
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
