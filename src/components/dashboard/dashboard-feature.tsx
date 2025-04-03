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
    "3u9DyThnrWuJC6BWBdz9UVfa9ZdyoMYGr2baMiYx2VJvKKAZikWBCEGqkCHHyj1bz5TkYp5e5cV3Zf6Hje4BL2KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zy8bhD3bDfXenAVZ14jmPRXGzfmKwzQg8CzeVivsCNUe8Gdet41i7EiCtqzYjTmLkCjTnogXdnJu2FCWjZNv4JZ",
  "key1": "235TKXh3tWUftNectFvEcrT9tMo5SxBJLDYWrtGWDjYSHRer4KhNU2kvCShLMLPZSfsnniEJmfTs9HLfqDovjwfL",
  "key2": "47hxZK1bu2zBBvCF9xh9AbQgw7BVB389WiGPVqYF9HbGuoydijnkcqwE9TDF5ee7LXxiDq8duDojgoD4iytRhoRQ",
  "key3": "5AcqrR7EfzgKmX5jYpvMstXzpitxyQ8bL81KT3atEmwc9XzaQsK73xWAhLxBP1kNHcLeUiW3qcXdHKVuJzSz8dE3",
  "key4": "2r9jQG5V9QDbjSjBf9kwdY3vHrMgb4LExh3Grj3VeSCWrenxTdwYB2TrDKRSeNfCbhm4HokTtcTPWwVepxWB7cKs",
  "key5": "3KSvLXW52jrPAYAxXGFi7q5NBwTThN7FvMDxLVbY9FSREECos3NaTo4diqzphFiR6Augsp6hBA3vfddAYifCnHij",
  "key6": "p4C8XuyM7K1qLB5iY52AMUMUq7rpbAuKqMs5ntqbhShQnrRiiK9Xk1pR4vfY2MD9Sgp9jThJbm6YSTu2w6dqwwc",
  "key7": "3cSnUsavfVrbfNmmwwDzAoZPcTWFuArfd8YsLAfyq7gMLbfKQ9q8ZH3gpfNute2dm1t5Em3uZUqfw83JgG4c2G8o",
  "key8": "2jLBNw964KzHtVZuKEU8V6DxyGJacD7QyAwm79g46gATpN8LgwrGsc6KGVthNWkXKNtYftihyKKUVcb8XWCCzhQp",
  "key9": "UcXwnoVncdsbkZtbiD8g38LC6eE7atsTHFs82EvaLSnYVB9kJESGQkmAHbdbBgLB2aHifkAd1yjGtJyAz4FBF1D",
  "key10": "g1Gpt6ywMAXHzq5mYwnPGRRuz7RmDWh72QuvwvjPhVyuxg4rd5nfGWUgpU363Ku5sy8wRYGEcXpgkxd7nCBtAfq",
  "key11": "4nRbyqMyCQCuBy1zbNbAhcBwvy626XLDD3c7C9XtEHCRxzxLJrX8fT9QzxjogC2F1awbzvcT9U1jbvhkED1ni2g5",
  "key12": "52gCsuZLmzKFUnKJ2hpLGrpUpJ5Z8c5eHJa9QnyARtdaWUVJNsZRpPff1jP4gUSg9ddUiv6cpnL45K9qFvdYm7jk",
  "key13": "3HL8s6g5PSWx4jhj4t86nTCm9csfxvmYmZS8fAhP61A59JZSpdxsKmL4wWwqjj1gsXWriny45R36hjTpQi1YD7Hh",
  "key14": "3oKcze78enJCsR5Ubp65WkM35ajv1RG8Rbv81gc4tpqgwSBMhEMnzguyeGsAb1Lpgtbzwocpua5UDjHiNcPaGQNS",
  "key15": "5EQwa1KMpEyHVyxQ4Pt8z6K386t1TY9bMdX52zwjHKy492eAMHjjCvsZkFPZYHSSuDmVTxGFQ4LmN354b5MqjE4n",
  "key16": "isNvqA6MZ4VpYTvEXNkJtvPvMZyqomfKdLw1ExRjRunNbQf7orU6ETmJdmPJB9koB71cLMm56ggsJzhkPoHfZu1",
  "key17": "55fQxtRqjCZUT88WYAPZiQaWpBvau2m8sCzFXA1y8gfmbGxr4gUJt1MVnXWoX9Wv7JPMRPhKxTcra2AQuLUnvpqi",
  "key18": "46vSFkT8LEhWhr3aUZyzNBEj1YdJDfuHvj7HtB1hSuxXEzDBdbxJ2XpvURSbXKgLDkfb4c2PR3zvXPB3J8SofLmk",
  "key19": "3tKHA1rqpMwz3GhznygVkh4PQCab9ZkNnkSBtWCjcVuNtwgR2xe1MsXHCUmMSQTbSsK7HZLrCqssqvJ1WkD4kAgX",
  "key20": "JMHRxgAZtS3dcMob8wJFQcpiK1BrcZdoLuZEBpNAyZfZmkCMTUPNpQwBbNHmbietNAqaJcsb974kWAekfg6uHmb",
  "key21": "34edn4cFoy5z7uUS2GcLZqX5hdNLobs73zpwfPARUm7J32FbtJHaodRekv2hKQ75NMntX6EPRQNEsh4CTsneMfqe",
  "key22": "67ffEkVHXc7WZdkvgn1oXnRpdTh78P9TkWozLkMwKwz2J7EjE5vd3FCpw96EUJCaK5k9CQQNBwxbwZwma39Hwiue",
  "key23": "54K8kchauTg3U3S3826BEraqP394uYJjSnSGoaF8N8k6RxGm2JxcbTquxpb1CWfD5XZHSPL6Qyw3FomrjEgGMweT",
  "key24": "2SgJmmw1oWq1Xm2isYe86KZ6AhCfQzmnBaig8ZRPtbhBFsVbnxTGXCmXYtQ8RZjj7ocauJW5mDp1A9QyzqbxAVhT",
  "key25": "4h9a68KTm5nhJvaVJ3KSN85HGak9vXWnqcMwQVZirye6RiEeKejjhmMedRMg1NdSMeQziPYVRhoT9vRkH6qyYyQC",
  "key26": "5V4Ny6aBsPuTkwrQhhvyUsRVRuWJS8JqY7DABzDmq8XtSC4qMbm7sNeLgUzCEim5T2R75kg4QUENHA5Dc1UbfnvZ",
  "key27": "5h3JSpNgyLGW3tzgxmqvuNXz9fHF4ZaE6sYxukPNWMD64oDqyEDT8U9E29mZw3pHoqgch7w3sN9SHcaodEZ7KfRD",
  "key28": "42G6P94DGH221cpiRjG7mJ9ArANFVjEKmUogMRi9cTobkBg48Y47MoumSQMR9awuzQU494aZiGe5R9Vauidf52uq",
  "key29": "Bx24urmKP55J787oVBoYrAMzEkPM7Bhxkdq5n7rQdPxb7R29kmJ5SnufEfeJ5zxvQPHyWi6BuMpoxZuis47n7cg",
  "key30": "P435gro8Cuyyrr8hCoV1tCZTunpd5cF8RL3d36BqTfLEcaEafw7eb8NrbMQN4uhgQQ4drpCPrX1fXmPUJY6V6BV",
  "key31": "2m8sJrTZ6fMQyANxUGnNXYnBMkmxoSJFA1Fr6cy64rVyAD4vQqPAneyj9znCVzGVQvfVkKfTvpruSqA3HVHL6P4W"
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
