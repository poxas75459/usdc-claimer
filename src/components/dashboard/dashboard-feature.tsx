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
    "2vcENasG1Ub8K243qSZiwkEfV52LW93ydufzTS5DwewoFYMynqvS35EY9wZN7rpvZuHQCs7a12jn6SW8MRNh7BeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQqMGFLRFFLPJp7F1NRyGWcdiZ4PVpya9hpRbWqnxyd54PBtGGHbSTi33JTo88P49va6Gjrm9d44B3QQXCUd9yw",
  "key1": "4YsoyZ7KvsHNg3G5hKLtYj69Xot6gYNijPYB7Jve49hHxBA7fm9yYGiLAri3QPx5EzuvLJSGqE1nXobhDHrHqz5g",
  "key2": "4U7tQ3CBRbFijZwdahf1AKp6wkisAMGyhZnxuv58KgVFUWn9eSAYHQhGdMPzsNsVj98h8jCMYEdZ8469gnzS4bzz",
  "key3": "25Lvtc3VhFN1RmSaoBQKQE5gL778BEPQTBXHVbeBaKbV4DHLdsnK8kJEViMib8xRUEXmL1rjhrkzFvXEXPgLmfh2",
  "key4": "JyzWff9JTdZB6YsG22hC5MnJ4QWFYcfa6iX2s7MyRBCQ7ez7FzhHVoSbexTWBmV9j9yPimFUUUu8wCh8yuViPG5",
  "key5": "WFtXVqWshTS4P25ohasVUBriCCNeiULEZo9ddCdQmVCcDakrsc4tHfguXUNtp4Th8shQZMeEnvSPtvwUT2yrVGK",
  "key6": "43BHs6gPpDVoCfxRZX86tcQRSdhUKdrmm2RTA4f7t6NjHaq2Fxxkqtihii3yPGVmM7FFe83CCVU3twP92guX479h",
  "key7": "pBBGFS6ECLZZ9PNod6MWehBGnnTuUvzpRgoDbVF1SJdWKhgYRXBzaMu9vHs2Z9oAb6AchiAZ36zZpgiBFuw17oh",
  "key8": "tv5fFg2ydTHEz3WRZknJEr5ARGJDBnSAe2tkKZJyTy6wfwysR5cSTFv7mJmcTmDDSZRNTsaUaTYjSjiAUviWmzk",
  "key9": "21pcMyycPwY4LQrEkcH4o2z1CLE13drkeyP3o2ztsuhBadrguAvttx6kqgV5kSpAKm54nUZfjaLesx7WcuhoqhbY",
  "key10": "2iTyq1b2VxKcfk8YRmx8WuB77E7L8iebG6EmbKgnWDxfw3MzMFsarzAh1gadoqXmerJeaN9ZR4rqTWEXPCKyydqn",
  "key11": "4yXBVbYUKf5Jt7cLyJws1TTQpWJ9HQKj3TwfHam8ELmFHFVYJrCux5foaAYL4oCtogojQ2UL74yXoaMwJnogVLxK",
  "key12": "57Csq8WmTeiQtN9PDvqw7SXfroM6WGwEzdW94XURd6XUSgsfZX8Z7DHc9kPSsxQ5ZBiiVGwCQDteyrNuNBxXftKt",
  "key13": "5WeA5HHGXLYkyyqEEoPRbQvbw1byB7uPJL1yUvEuG2Lkug1DZDy8c2RZEo4KvApV78NC9GEzkBGaGS8UQWWovaK",
  "key14": "Ss7DAmzNZ2LvMjVDLbpcVph3cQWpr3K122hpSEAZ7MfKTtSXpqZzCSDTkWkNBM3SH5nGXYXVEogVX3jQmuFpktn",
  "key15": "5aWvnoHnq327WjA2PwAyUJVjXWie3RZbP3VAzhGPMTaMZeNptBDewYLC4CvARZGDChjLPYMQHNfRBuFVBV7hd9WT",
  "key16": "PbeRfeqEZqTeSzB9b81F9aFxP7KvtP1uLXtjApaRTzvQmepfHmwNZqBdkMNDBG6Uuivz1SX7hYedmvs1ZmvBUAb",
  "key17": "5WnkkHh1xnxKPwZLcJFWYXjdEg3vvMT3yZ8d6kJtgSTPLU7sgAxGQVLqiXfFjPbskRProjbb1sUgnz2nM3p5GXfi",
  "key18": "4MTfq7nXKzxBbYqdPF4UDUzwh6445ZkDfPA3kxtbH1aemevxvVSFiGZvSNABwfyEGhpgMmxfToDVnkMbymVjgUG1",
  "key19": "3dPcYnKSg7ibnyuxEES9CAHMjfm6YBxFaNjhZHQWP95fhWbZ5zJxXJdd823QLi2d7VE8DbHNjqgfciYfHMK8Ayv8",
  "key20": "p5vSkNmavgKjv15q5WnkaZNbLUevYpHMXURhhpSngMmLsWgadNBYp8QC7wqXrbznXCduEKYrCzCBNrKWvtcg4Hm",
  "key21": "5kBekoAW34VdeYuViH5yEtRuCQgXNMFRAw5thHe3oTnMjSHbsoVpfDpzXdAarg4WyEhJ21Cvf1GTV4YFfWVGpLce",
  "key22": "C6AdLxM4TMQrNK37oRb8PexYcqXo4nMeaySSSHu21DUvdV6o2vi7AJDorzFVXdopSUdWJkU41TEJMMMEMxzwzun",
  "key23": "mRBfzNBZd4vxh3NvaaSQukAE1dwJDThvkZ32QYa3U2urZ4CvbSRaAx5J3yLP5qtiFXixrBbnF8uWNZL6WjFcTr8",
  "key24": "4wYr8nspUJgxA9FxZ7xfRSh4fwhFnoxZ7h7PhAh221BeNm4cqSatpCoFKhPxEM2ibLNgnYbKLP1mi4rXVXjV7gBq",
  "key25": "3AzmDNCrEgNgCzLPmKWdwtEnJL79MhhdhW7ftfqeSGcfqri59mHrGud7pYsXbCHxYwz2eurT6VwGLZ1qKbYx54oY",
  "key26": "Cq6randYEL4gn4NboDNKGNnZhSAgCxako9qFaG8LP6Cgbx8KVRVYE2Nk5ko6exSaCJjTK2FwRpMdnDNchjBWTKv",
  "key27": "5FvyTc6NayxarkPGZk6bjKtssHwLZsit39mvyrQWB7VkAAYxbAM7ojLmhrpRUCkqKBcY8MELoqvkorexNfGRow1m",
  "key28": "33GES6XS77KgBW3ZBPXrSwHnVWiEMdzTqwVuTSNiwJytZzfewUtvcev7upUaTeVe6qgZkhxEgHrDXs8H785XSu3h",
  "key29": "pgNx6qCQQBRxa7KkgdGGNz6AZKDT89NK9DprUsk729znnMaZSL4UYAnHULtUVLhHvvCqqodmFacueiJ2aYVwWeb",
  "key30": "2VQDoj49Q9HrcmZWeEJkAPNdG7bJFDNLsqsDqVyMQA6dsRXDsh5mqN5V2bYoR5YF9tTXUnWVYGo5bMv7NLJxUbP7",
  "key31": "5cEQh3jXnSxUvogYfMJ88Yif78iSevG9PuRiY95ZHHMBrw2q42EZKbz9eyNPQ8FabRwWdfoka29sK1vhQ4wgdYS7",
  "key32": "28k5is9YxVC37YN3fk4VHe3BoYhz2FhmhAHT9Zxsxr4FBrGDcQ6HgUVj7qJfwz3atZrYY2ici6Bx2s9PdLWr7EJk",
  "key33": "5n3iACBUV4s33uZiBUiWpyoM7cC6xQnxcQjgCkAtsMFvohrLFRLTKVXi3juCNnUS2ujAwV9HsMqg16fDUzi8FXiH",
  "key34": "3QfrhUcqZ17qNEPvvwjHnuSnaYqD6P8HXUT9tGo1v8H7ah7ozqoxKgQwrQasBkXaTmLxkD5PShBN1jkg58gs2EK8"
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
