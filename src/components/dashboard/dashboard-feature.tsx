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
    "3e9aRcapEGHBjBTaEXSyQhBjt4nuFUZGQVwiLZpHbxHPUgvnojZUhZPdmXPra1KktQMEKETR13UfbJw7muFNzMZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3tQDCAV61yUfF7f4GdoGhV615xD44tk1YJgRrhSwcM8B1wdKkdhLYvxczZJeKifjRN6E5pu7s5fYtvbCvnuBjX",
  "key1": "2mzN15dUByoajPeHX2qc7LztKwhLamNJcdZn5MFbrqQrd6aAw8WwiUXSGEThRccx5VqZMAHG9mbcH9y9RtRF8Ke9",
  "key2": "429uuhEhZG8R6mG5DFmbTpKjTsB74z4hMQ4RZSzM3ZNxrmzAx8cjezzFyHD4wgZ2GH75aU1EhRKUFbNxawtqmPrV",
  "key3": "4i8rHrogkKDkFHAmoojXYvidn8YDeyXc7tGJmLm7qbu42uFWuAwv7wxYifbn9xR78MZLkV8L39V2936go4zojW5U",
  "key4": "5ddbwpW2J1u1AmspcP4AoEPNjBULAsuQgBkMY9hvpfZqoZ7ZFojjSRhgJC8YkFHYBSJJTByXaruoeccph2i4LqX2",
  "key5": "33cXNQEkNGLW62WZ53uiewJknoAggsz57h5jhGSoSmhxWwvES1Yr7hLLP5NQCAYjHBib8EoPMjxYCGe2X9seHWPi",
  "key6": "4qeuHq7rntgR2NWjpmQ6pA9uxn1d5PMqArfA1Wi6a1LXaxZfiVUyUL1n9dzXbnzfyvdPNxcDdLeAeQcRMBskdsVy",
  "key7": "AgP5BQgevDkSysrDjKiJLWF6iAJY8r3KoUfhzWqeovxuCnib8kASMVVkXVfgkUz3f7hjEEWK5A7mLdAuQzBvxrS",
  "key8": "4viNzx4XUxaEapGj1svYwjGR48ZePZ4wYWBd4xRvBz3L6tLdM4QUgKcwiBwp2ra9TeRL3NSBwwVhTHnWhoLwKVgu",
  "key9": "4P1e6cq4CizGehP9gGXJxfLfWHuSNfRiMBYvd6EifuygSbP17JnTe8neg3Zzv32GdBEHYZ7k4WsnyfsZ9xAmicDe",
  "key10": "4QB62iBzpfc2h72yFVXjaQNsxJckx4wSkQRQswnvMJtf4TfvVzohQNfhBr7By7TWt9r6HC8kSyGbSSnTn52eJF37",
  "key11": "JxoqciAg1fnenXpwJriF45Aaf5Pq5oYxWM4TNC5BJQqYRSV2G84qKfjr9tjXFGLELNdsNsjgaLATc3X3M2NiA1a",
  "key12": "31WC6o6TvgL5qF2mfZbSotne21grBXoLoU8KaQ6pn9zX8M4tCbuvmmA55ba5b32mKvhNDAxiiQfV864qUCaZHWtg",
  "key13": "2K67QPwXiz7WzSECQFtESRYY8QZ5PQeyQ8hfr82WpsRhKrUYCNn1JmzQBbEAfB4E78cScaZksGquobCvpPN6NU3E",
  "key14": "392CSSCPjE6JDegX4nYDNbxU7Hv9LS9bFvzt8uu6ALsPrb7WMQ7DEYnDJCiuBW2pB2qyRXoajdRnz9BAsMn36Tjr",
  "key15": "32FWpg9dYSQa9SWDYQfoXrkdD9Mrn3g7ZCndNpao4vkWoDvXMsJfc6mSZjcVSxCCTNRSQSTdtAtC2LZE7KDduYHU",
  "key16": "2cuSBAoFQZxs2YDtPXgY62bU7ctzjxBjaFSSzhq2zZndYuuNMoEYaCCYpAv8VfDFskAJNqY2uT744r3JfPLnis2R",
  "key17": "5Sr5iRma2N5E3AN6js53StQVQypGA5txy8rwbJTgc1vmWy1TZxBeekyzNcRbMeFMoAhbxssZ3Rx1KLo2stZwtRcw",
  "key18": "5D2s8445JHPJp4EwLh9ueWX1m5UYMSGvRUD7LoSnpC7xfoqjHTtwD18QBqAswwUX9burUF6m6zF32o1NL781JkxK",
  "key19": "gsYnyL81zfPJKa2uBevWMEd2jZt1qZrYv8E8ZBLmPzsts9YU24pZ2A5dKnUZ2fJJqFEdWt9uZfFZdhaSHMWvd8J",
  "key20": "45CyQVVmHV6VeVV3WqQYjvWB7s5Vo9NmwpVrhJGjQnt4RERumv55L5nyTF5nZXQVQKsEhRj75XeCVeruZtCRJSVx",
  "key21": "3xw2cQ6ozZR98DhUa8tWzxxB43KNDyAZ8THUmncgd7SMVdYgaA3oamhiMwLpbjqXS16pUHdfrCBETtsHoVba6ETT",
  "key22": "Wmj9KKkUJ3hyDDRgZcQLMZ8NoPT1KTgWFZmNxZonk1qdLvxDkRmQ16YNtiVzUgXjmgtFHw9weQxdBar35LtfHG5",
  "key23": "656ztErK5DYYrj3EfdnT9Hb6MwTKsYmJUuNwL2W2NaYQLAJbZwjDxhq5wBUTXHPj96nz1diyGXts5y763PJ3g12S",
  "key24": "2GMtjKppNv8yNnQo7wgagRvxbeAzv7H7XE6tHDLf78cAVxn3nFkyN1QpuGavuagp8mhGsUgnnjbibRZvdVzvPp72",
  "key25": "4YRZuAAp9t15MQvfnViqS7GrBRajAopX1LFQe3Kty5f4UFvdsBuMoqbpWfKC77eXjTtkZdTCMzu9YhDyA9CSrpAk",
  "key26": "4U5HxfbW5NVSn5k5nfR2XjCQdparoSuRQoWPSjVszsEqKMZc7iDtWZTqf1py1Hi5hemvr7kCtqJ63bXMCCKta1Uz",
  "key27": "4PKwL8XXZu2xL6aHm3c76ci8NBAPGvQDzqv3UKnFrTwfFHUjnQP9rGrTS1p7WHojW7cF89SdY1xiJ3dBeYqBb32C",
  "key28": "STdi4oU9ZTd6zaQjkGifJcf7jfk6wL91dn8xZWvjFd821ZzzgheEvDP8Bm76FMpCnjGDn1hnXgHCMUrSQwsSmMG",
  "key29": "27Ja1SgNNEr6zHAxksLA5WqePConTmQMAVC9Xfo9dxYf37NUCfnzhkf9YFZffvtvfJ9Zw5UrPj33XiutPr5moqSP",
  "key30": "4XGs8PP4t9gfAaPFSB5HixE7TM2YuvBkY5KjgXPrzTqE9Hq4AcqDgeQ6qVPEtgGMTwqV8Kb5weYUgpj6wrZcjoNd",
  "key31": "4vhi45GVaahGkneJrd8sWUNp4VmWJa4Rqa9JYF9ASHCQwy6JZ9gjRr9ckCvQkJsBCsB59wYrchR2Kff8YXjVVb5Z",
  "key32": "2jXxg3E1v1Qj15HeHSA2GH98cu1xt3Kgw78FLzXhPgNVCA9WYJfPWx87zyQTFy2Z7gLqhv49zECFGpo2aNda247z",
  "key33": "5XeFZGDyBi1mxj7rbtD9xtytFg3tiHQQ8W6eW8hk7bEWdn3r5yfh5F8N3euw5Etzs2c2pep7eLSubMLdosN3Qxd3",
  "key34": "52jr5DFF4FSCiBS1XZ6nCzZYPsv7FA3L5VfN3Lqj5RqNNhroSzPnjUif1jidswXLSVmhbS4pUF2AujUVGaRUx91E",
  "key35": "58aV4wpmZTMYsDfYtsCSa4DnYA5UKt4tp4VEw5os9MwsPzYoBSuJ2BDaQbXuh46wadNZ8nHFAd9aTuhkWnWrzsPf"
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
