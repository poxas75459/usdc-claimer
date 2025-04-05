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
    "38VmhjLSLca9sjFqCThea27oPb7oCFe8bbdYgLMFbsNz2WYcx2Pwq118Fz2E7p7hF6kRoQUy7MwWxCANmmKVVcoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbxrQnHoXuEbfknDPcN5KNCrfu6y3XDiFVAkrSQgGfgWTxStRDFhq9aZa4uH3qSALj7rmvqeNXBwGZnsLdBYHfi",
  "key1": "3ooewrAHe2LqYrEZ92DMos1V9Jrq3rBBYgFgW9BU8H7j8UC4GNqegqDutb9Ca6xuf2RV3yQH9ae3vMAM7zetedbJ",
  "key2": "5YGcJ8uUYXPuuV4CqzTSu47yU1cSPM8KYHpQmgv5jPF6YdHNZ2mD39NwEAnt74jqLbQvYhzHgPtawNnGPNoWzEQC",
  "key3": "2Y37qRRutwA4cCYbigafxML3Zb3tjtBfTwaNsujVpHMJ7AgWNkL2MRShHxq3Qm49acnK8XTkTYWCpkWND6ZRgarp",
  "key4": "4QWUTb3v2jqLUe13scymj3JAFMZ8xqkpodkKGtswB5mzJyniqAVx67G7WHhrVMD1RQm4rkk7FJYVG3co8MkSeTs2",
  "key5": "4CQizEYRFsBvASaRsoyj5ooMbZ7VCAF2cJHLAK7aoebnZPwGiTxfgrjCBZFs7WDDacdHjV6R677ybnmwTkAP2PGh",
  "key6": "4KkVjix6fHvtRCusXNPcx2CA5dnDqkZbBLmNK4J67BDgfZdJbop3W2SV6jhfEHBoLTHNhugnrvzEGfeV3bVUaRCg",
  "key7": "kviUfxFqWfzK3VBjuU1F3pYkZPCM4xkaVVMwfwmchRX3kqrGNkhruqruUuzLCzW4Xe4bpqjJN4z2M6Qh1xkiyU4",
  "key8": "CPVxbCYcdZkgdQDqodSWCzdSpwdSmje2NEH8p5xcramcCFvfvWxhRpM4p5SRgEyipCZx77cj2R6sibQMjvRFTB2",
  "key9": "JqkVsXdpQYoGUKGu2cgyepmxpQssZhkQxFrvJLgqnwTfFd7Ws3esnbN2xV7LDQ5EFMPucASq9CDL7yDepWgKsfx",
  "key10": "5M2SHM5UqrpSS2gmRWfGswngkcwCGVra8PJx1jWrMwepjwX5YUvyMdEqt3bSPXqe9F5DaXcmWksgRNa8Y9rE6PcZ",
  "key11": "qW8RYzLecNJEApMmvmLLVFKQZyfzRX4heqFLwtdCk2Rz615WKsZb3aQACaKAW2w2DwhsyeiekQwm8nPAaPM1ehY",
  "key12": "3ioDS82NKP3JUqYXJpf9KnFbAcetUKXYQwUzrH6G3cD4PQdPnMFQtvDhBy2Dd1SwsRkQAidqXwSeK12UQe1m29U3",
  "key13": "2bCSgKZ6GSf4kAZRrLkwcrF1ZAraPqvq96ccYPxtEMrMbPuoUAaeSS5Hx26pnfZWhamgs7Hp9vf9FyMk1Ht4ZEiZ",
  "key14": "5v75FvhWzsW8nHzynJC1wwMZEL3bbb39wrKe5D3qQvHAQFkV8S1rdz54N43tcwzRJsFVDWS51KU7X72SB7eX6H36",
  "key15": "2eQuCp9Jhqyp4grWuy68PpPiKU4YvxHecpduGwGXfhMkMYMrhYPQvtBbbwJdhFC23KguMbweMuVpbnqWq8m7C8rZ",
  "key16": "5zeMfefwcb7E1A96q8tzMUJszBujDJ1eEWWPg6KmCctqHfinadkJH4n3DUCbnc4RnzWMJ4J1pWfGpPtFowULvv46",
  "key17": "37FM1m1ZYqGeiZ3YqRP7A1ZGr1TxJ4XJgvHhf1XzAXXcspW2C8jSNpUSsKKi83E9ndi3HVF7FiQAEV9ZbUGVvAFs",
  "key18": "5WNie4AqW13XuPKtFD5cii6ySsonuJCpL7JYCCMUDgVHCBUZHSaqjB8MBZmFw6BCWjXsVYf7HJavePcDvtLjLM7c",
  "key19": "5uDBLis5bRKLdQUZnePtDkuurZode5cb8Zws22ziYJzrsQmpXVuLpkzzVNaJ7KpKirw8jhTMY2ECfqzBKwiJfdSj",
  "key20": "2dnW8Z6gbw9oe7D26ouBnSyQ7suP4Tt4LL5Av683xtQGDTjAZNF26PeYnENBZB4LxXMbHTn4KgcLLZxV6yLXxeA2",
  "key21": "31Yeoc7Ma8ZvqZa3p5E3rwGSuwhETYYQ5xBCTGm4hEmUdJTDcJhKaRFZ85byW3T1XapdwrSA6KEBAvsRUwd6TBYS",
  "key22": "2GuCD5ctek9mWuxJrjxGcccPMCJ87chBQtrPEW1ScHMxbm9rnobgUyLRRAdeqBFK3bwEQBtXC4zUvy153aRq4czP",
  "key23": "3wSdmASNf9i1x5qTaKCGyGqJud27dsdnVu9EQUrNaPHfA2F5gNir9n1TeAKxEH439dQq9RMjDNv3DPtKzoHUDtTS",
  "key24": "4maFSdtM28eG4X1sYoww7Uu584SrYbUjAHQR7pe8qbQZKr4shoUaUr62Kbuk6pDwMmeTfKLqmU1ZMFXYPGtbX7Y3",
  "key25": "hWetxKkjY3VaNVnu7y35vDKcz69DVkiJB1BRb7xg5hgDv1z5X4KU4NByaKbP8iAbwSNgm4G9B6MeVZeDMqv2eHh",
  "key26": "66YoBo5H4cNDPpBXWbznTpLzSx26tCUbPRBTQNHoQwWzCwgnNRmjCRzTXhikn1Q2fjk2cDcRL5dzF8AzVLXN4VVV",
  "key27": "3NGZdzxV88reFrBg7CapJV2eeLBj7nWtY145SD2UGmRDJYaM8h22xu3Gi3E7thKKQyuoxvV6tLn3CshpA9TUts14",
  "key28": "4oetbMQ7QqnHVY2LGU4MHWPHcv9SHKQs2kb6186U4Yv7YAiAD4xK79hGfFdMYxWHQ7wg7Z93yuTrNiVJ4VtkXokN",
  "key29": "4qwTTwuMBKmR3F7aEjJhSsscPJozh1i991cdQV5Xa5jYGTAEcweBUWAco3rGwGHN2xYANqPv2GP55pmdoVLWNtMA",
  "key30": "5BDvh8cUCL4NpVasRpFYnkHqg71SySzHwp6YushN2mAAm6mSg4Es2QxPGiNyobbQG3atNEekYBP3shYYMmGXkV4e",
  "key31": "2UoDApQLiHyhGmamNAwA8T4V2QCjj3BNTHPnV1xdsYgtk3uqaVHYbmYSXpq2DvxzDRYHxLB3uWerBzkAorYJHsSh",
  "key32": "5euyyDRBn7f8qZpobMwkNUzJfyQqWsgkRVYpwrarv43PhqSydxb85Lm1vaMx6Q3LkusEFVdfY5v9bNuhh28y1emg",
  "key33": "5qPCj1C9DKiTVSCPdfEf9YWAZQczjGCHeWJLKNqVpXAL5TE2huENB95sXfzkMLQEoYTcVhiVVEEyjNmTgH8KSWnt",
  "key34": "36hnQVr5zhfFGdxZdzhyWrTp6ya1SsG31ZtBr3o7RAFTUZoZX6wzr5BzUmpM4YBUA9s64sGWXcqSkKgMXQnxZejf",
  "key35": "32cdbf4nExZNjafNA8S1JHuuKaTG7E5jmLZ5hsfabUjNuFT4BLHpePvZKb28nH7KH9bvsSbd1vQGJXSa3c4zi2CB"
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
