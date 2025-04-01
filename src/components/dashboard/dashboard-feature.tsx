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
    "2RVAESEBmSy8yfzstdZVX8srJevY89gqpKKQ2sur9JwpNmXJWPu4a3qeTRTaYAgsRNbXVAua8QxKYVdUdmqCScpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXfq9rCfzhzssMqfTgYXiKDGrK8hhbMphS51NEUxHysX2b8CHSSRmuQYZHnahJZAR91JrkpQLfV2k6NSr8drzva",
  "key1": "5LqmJAtyw9UGe5HxqzxuzjHvf5fn9xXBfyBfWMBm4eJdfhYM2afZ5XBHHa78Zz2VxyyYQXrf336rxugmbHfgxzmp",
  "key2": "4EiRdunXwrXwpbqK6ryNpc8toGTHURA51UEKQi4NKYsDNJoEFbVyuK5qUTErkzVSaLWeABS6JLR2j7SZ2m5oeapK",
  "key3": "2QJsFwK24smugb5wF5hSruvY7xpsQb5qq5uMn6Mup7Feyd6dkuJuuXYVdvYTQgkZ1jWneS5C1Nan8Z7ASjRroZ1b",
  "key4": "NmTdckv6ysQZCNLNrjhUnzthd1kD74sQhgmw11z1NjKgxef4ECEvyZWthqa9T3bTwuKDGPHftUmNhu2iE2s5CPG",
  "key5": "3R5sjSbUT6GzJ1iWp26ksFpNmkiFLUDpUGA4DaMqxjSnsE7kz71m2s6aLhztSvzsNhv14fmbm4gmvDxmRzFsicX3",
  "key6": "2pPugBE7dWhSCm3VMPAEX63iYQhb5nbUyhfE5UJapbPcUktq6T5CjmrK8JTfVw2DfBrSyGqBAALzM6MXHk2sHYP9",
  "key7": "47FK6TxbdHtJXzuquegJg8SHY7NLSSXzHVAoRLvMiMM1Wxqg2qUFvuCyxAoTxdSjd9aaL2dhkNL4hzwXyooE5BoJ",
  "key8": "4yxRb15HxnDxaU9BU7ijE2r979fyz9q56H4AqDhy6FKq7AHXoax3YZwahg5rt1voBJBtoaAwwTz3Nxxuzt9wwyBf",
  "key9": "4TZi26pcHcxLjWWyrhceeGamePbTzjBy6LZEzacEcNhBBrPNDiGEJFCqjzAXqseg3YNLaj6KfWNVNTifcP9Urdr3",
  "key10": "4mTMYXTsKdLf8MuH3v2rWLgUs9eLpj9V21xk6rskufxmW5vN4KGYGZTDWxMLT7dEP3Daatq5PHD8iWheFgjfgytj",
  "key11": "63tiykUk71PaCgmBmoXDkC36cfiwKKKktYqHUF69nurPFJnXZXGYV7EBSUQDwSzUQfmoVvzoWiJsPYsDHR6sko97",
  "key12": "2xbtFhDBdc85tXDJjyHHMmsvr1GRxAbum2cn3bXR7J3EKwaweQBhQpGphPbtvuLM2jtBBfH22BxvHrVGzvosoYd8",
  "key13": "3jrjrJ6RUHph1tt6gtYD8AoLsWbHmjpHtWUzX33focE3rMsrQJvKmCVbxJnxtuUSoZ9dHkuNzfEhD3L1UPpcW8Gv",
  "key14": "3qwuSFti2zp9a73bf1xUG521tmYFKDLv9D5J5Vebr5w3MWnhKUTnEeoB93etPACrdkRkFxv3ntYqvafLAbiw27GY",
  "key15": "AaHJaq68RzQAF9UdEeM3hn6ovocbr8uQmpDD7LR8t3KfGKdsCMVKHH7haawjGVZBQPAnjjo1ha5XZYPzsFKQ7K9",
  "key16": "565JhUvHzv2eAXPfMmNrwkbEjwq4izpmxCttEX3mTubxLTxsNsEBg6ThvKHHbeVuSzpmDYUr5UYhkkG4K4684BLv",
  "key17": "4fJLvATnLYyaKPSGxKZHwpvTkERnDp8hJ49m7YPjwkYbXdPs2z4dkXLyNeD7L5YdEcoVgevFot4yXhbMYn5GKNA4",
  "key18": "34MeR3WF2VDdPdAS9L9oCQk8cEjLY5o8hnCygzVRnRSG49KLg1rdXC469f8xjWeQHXiy8cwzXGBJkwkRj4xnGm1w",
  "key19": "4aDmo57mDazyMPdaRfSouHTuw1FBeSTUvoyDnJUDYSp871zsYtvyKQFjoQoXahPwcjX68eYtJRLWNJfBeMZPJyEE",
  "key20": "3T8zmjMJutEhJXaXf2EBpYL6sByAVUBPS6fCuadVFb71FayKVyzX7jyzczPqaLKfHyGy9tcjiwit32pD3XHpHzew",
  "key21": "3WZn6sG9B1f1sug9hzYM97ob7WAfiBMUdWGqYcuJN4rxLSwppS5EP7JTi1BHmCiFAAnG7QiUvsvg6fnXsrxeHe8B",
  "key22": "4hLuPq8FughdBDzDishBhDv45KkqhB8Lsw6nV53MrvibPgcr2Q68eURxh5hHP8EzY9BPqNAwqVFuafC7uk65Q3ju",
  "key23": "3vzsSsideapPD8tHh6bFp1tRPd76P2KDr3St5zs6ocB3XqvCQp3fkkj6h6JY5pkyyVSzd7miUQuZJ8tM8axUsr7b",
  "key24": "3HY14XHfgS2h7a4HrjigqmGGBqp6v8ZpjtfkNM43nCLjBTGi9EbGGoKF4Wa8dEviRRMbSy4WwwgqsJ8FowwVmiWy",
  "key25": "3w11Yca54TumsywBD8fre359Tj1ysrseFnUJ4LZKA1GgQussVSbawvqXAn75GHuzjtyeqyyiwBghy5vjut2FKzSy",
  "key26": "2rmhsh53aa7Acv88uMiuFqRmKHpVxZpnnpGYyQT2SY8fvRfDGvzCiNPZYg5pYeDJ88FtWMiGrsNNTsVETrMgGHSt",
  "key27": "5Lp1GKm7QB2eJjpWBnkDXWaywFAfTvnd7nDBNEK1g4SU3QHtv8fjREZj5Yqpx9Hrd29UoGafvHK2zRkUNnXnui2a",
  "key28": "4FJYSzPZtZCnidyQXbskXZ6U3Kg2GrJp5PAtmgVdGq5i86kAjgTw5iQ4hXNjbX1fcMUPX7cvjP7yxGK5SNL4rQ1T",
  "key29": "3QevnSL7tBp47uRDhXPVLeMhBRPWFggJmEES9mdMj8HM8zdXJuW3T3vfEkcfqXo2cjBR9KrvfF5hjtLoUk9RZbMV",
  "key30": "gmTbZsjvTcGAExnWK3yoEes8mfk95RGcBELDxxB3oQ6dQRuQSEhSgPuNU4HQ2SnK4pMMsrmAkwQaVREGEkU4WUQ",
  "key31": "3PAmiPkBDo3YFQJzr14EpXSju5jbS1KnamnBN7AByPM8iqEmerXJweDvZ1TbuUB8Z2rRxp5W8gr5uApKZosjEsWq",
  "key32": "24MCStMFxHfnYwAfSqZn8YHXYPEF7SNEp1FrimbwP585SgnLV2VB7fTKb7BejwVFRhekpiunxV2UHFZAeCKoU3YN",
  "key33": "4HeybKxWE2ZQydhsUeweZrP4aDNfX4T28QzxhodKkSkYQsP5zpDw5gp5RtCwHJaePx6Zj5dAU87BvhYKGDpeBLCj"
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
