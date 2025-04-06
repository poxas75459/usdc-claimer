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
    "5RQwTvWbi5F9S44UWpLUSdWBcyFX6JthU3PFBix3Ai5Xh1jisGayU1QLuHZRpDqtFjGqxSfdgwt7W9tHrdgJeFK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e5ntnkxmccEpyFkJy9L8Lyw1UcnAsWwmfs4AvUaEPkFsAHdzxqfPynfZBsL1pu7W8NpTMjNYhWVjVoAUTsP7NKe",
  "key1": "4uxrnp81LAoQoBJutm6RUfzUL2Zen8JmX9bH1XGSeLnr5aYuCN7VEyH8zLUXzF4ekkpTvT9cQYUm6YDKngZqqB61",
  "key2": "34GSZqpjvkJp3ZVbX7JHvUSeyKViT5fJAqpxYMvANhPoMpht7P8apZmBfcHj85ZjN1jnB3uCCzJY2VFGRFsWb69D",
  "key3": "4GyStKaP78jFz6TdoMc77Crx9uyCJexyL35sE8shRpNmwUQnPnWqruhPgj8JhgqHD5Vzi8TPcQd1VzHzfGq2Q6JQ",
  "key4": "4JXZJPjQGQPA3RjH3CwSj9YuE4AdB5Pd1uoex77igQ6gjv6CGVZuJvp7bBAmX7GQhmRbrP9LqvBNMhTYUjbymann",
  "key5": "4qRP9MqCyF2UvVxdv9vRSvbvBjZ5rjbscrgPdz4HS2yDQ3EPhdiuuCzNa8as5CwiFDxsSAWR8LRNBKgYf6xtrQmv",
  "key6": "4bfNs6PkkeiucHtFkRW3synRG37hT6Vrawm6o6g1zXYD6iMpkV5ffptE8TPab1tQDVFpEC2EeVJdFMkEWAVHFrHs",
  "key7": "2hQTvXUzLWacS1LMEusCGtggcgzFGxx5tWsFbTRTbNJeBrBRr9WWuxpWxTgCVTYqtAJRmt6LzRTypSmrU6ZqWWP",
  "key8": "53pCd1JwVuk7PYd5PhMuEhdeLFYvi67ZsU8LThoj4ZNT5mYsB5T66yyMNnounH4yJRCn8VYAFwVvZmAfotSiKUv2",
  "key9": "T45wNyHcoUzZ78Rc4D1ea4MDh5oPkpcEzcuGbZLvaWY2YeRCAB9LTveNUrokxmHjKALfzx5oNXKtJHaNxJa9bMQ",
  "key10": "2Ri3qwYypvjfE1dk8y1FAqiSVC23nmp4ZqL86jjhd5tR8WKNhRFuLZZTTzunH5BgXBtSowiq9uFEhvg2JpaWLceM",
  "key11": "4dNCF6j6YGDwBq1PU3sRDHFrWfURKkb6tbLSNupb7vvPDKa7PEDkUM4rEt6UqiH1yB6efY2cUV8Y6nMY7txnAdWi",
  "key12": "4HZYB1FekbzR2zTW3c1rSAQ53AKqhDtPhWCpxVBz6toxr7Wde9niCqncEoKrWeGQ9ksBGLYXBv6mC9hUeVyidc5i",
  "key13": "4y9R4F6qmEMkgnWWvePBuQCC3SyeLvkPFf9jWSdqrobZ2ufMXAL4uxUvPpvwVnvcyiz2ZY5g64YmPyoqWvupciTz",
  "key14": "bdZ5vbXqftFGHB44nHegWqQuUW7MWmHT1n4ezHDuHw5arUb3B7MGXR7q1Hmpa9VjJhqBxYykfUAqwY8fmDSyvef",
  "key15": "cNaSnFQXFJ5vzHGrt3YUc1L6eDm2qCWyKPPassD7kno2Va1w28VSeboJhosPz8ZgRMQunggfUrpTUSD2YSm2c9Y",
  "key16": "3LVEjhJK7MMGHB7aMptWfrC75GFYP8Z4Jj9j2wxjuW8zta9a26P9FJSCcH7fdxJm12TEMX5vVpsTMwspbtPaudUg",
  "key17": "34tLPNbrXyCj9hcRWj96w5sz7KZ2rFbtyMzds3Sii9dPfEdJfC9AHkxxtFBpkm3Af9d6g6rySvHZsCjU2N3TjTYQ",
  "key18": "3o6nDsfxLUtqLa2LTrdAsHeThP5dtZJBey7Q5jkztuA2LJxTfrGHqVCWNuATjN5fkJ7jAKT4WwqPH64oLTB9uVAq",
  "key19": "5bNHxGyy6jbeyugnjqUfqbk59aejnhSoL61wWN4LdUPcmek7apz3PX5fxmNv7kANrwPc6eXa1LAuyw5MzHHQnkWN",
  "key20": "4p6Cr24MARXq9DyaFQBVymdqnDWkEGgq3SCLn2LPwVpSQNVApZdCqvRWqiqXKgyEGMwKMkowB5HeczFCuLhCmgH2",
  "key21": "28UiswyfjmYA3ENCjbtekmqPrrKR7EdURRExR9o2xaGRjxVUrjhHATehUrWuY77MLhLxwPCyCyEkUnzMSJMYkHFU",
  "key22": "2vLjyNzmXAuNDkVMp6KGzGq1YsEEVNPGUXE8SMfUFifg3kWgHnkxTS3VLxufLkUQzH1KePyyvfZVx526GFKqdSw8",
  "key23": "56y9fhE3Vd17XsRvxsQ2rP9m1BJqtjhgtpvVEDg2L8GEDHjDzVZYWY6LjPSgNubwjyNzPyThNi24b5rKBZ5X8DXT",
  "key24": "3M7Y1XJQyurhTqdLUCHUkF6vqQ3tJGn9chjsnbb9F9YtoW7m4qk3Gg6FwTVH6dQGe9Bs5cbvvL1v1jVtTNFCCvPD",
  "key25": "5UWBsXJYwMUR9dWNpfmHnBJzYJqZ9K6hk8K3N2DTXBrhXYb2xHzU132BWjCdjgniYNJbkkXxJh5T2ZM9jY4CAva7",
  "key26": "3NMPcGiahBbCG7rnTy3r2mNsyGzfxgDSnn2mHfDXekr4d9txvLx4aDTtVLZ5rQEUKKWYgbrSsSPfcvCZ6duZ9jWF",
  "key27": "5PNhZNGVrQ41BdFEJo5Px9Reg2EjSg6r96WjdF8HxGNKDszkzWqpvcVLxNWiTW5BXtm2wxyAt393nygconZaGFPo",
  "key28": "3BaumXWzxMe6CRZtN8Rp4psuW4uoDW8ogveHQ3M4TURikZsYFxMJcfx6KRB38CH5GmbZkkoW7DU76UjtBHhYywQy",
  "key29": "ZdfN1f7TQA6QSHbRL4SJ9ajMgDh278vndUGPVCHmRqNSsjnKiag4UFywvUgLCFzWUce46AmhdQTypVQVk9o87u7",
  "key30": "4TAoRT9YKb2Ax4SqdWrFYpyuLZwD9NTJsWW6UcyS2MzWegdm2XfpgXVK9iJDEPtqBxNCWowSiBXhpi7ZbiDHQ8Vg",
  "key31": "YMeE8h1sGcpqpQPwQ4oJGbL5L7BQsAGivPz7QEZDgeyLsC9x6e4jAZ4tkRduJg4Z5xRSRynF8LgbVxrYkJ71sVG",
  "key32": "Fumq3GZKSDPaqXcqR8THc5zD7nYEr4QcL8dteYZyjkMscAM9GLUAo3BBwjXPxEvEzVqTPg1ZEs3TqN3acDsmFrd",
  "key33": "5roEnQRbqxSEwV8zqKbEbh8h4fEP3e78HCR7evftFdjxLdqU13ZCTeSc3zrwMk4631wuQQcaorh1gvVQXZjjuya7",
  "key34": "rmFSa5drH5pBTg8n5uXgJCmZGnE8EBqyqbmC4qCZ3DrPNBbgMf7Nev6sgLwVZFiNfTQa4mncq8Nwqoa2gxoqw27",
  "key35": "2zZwAg21qX7hW65dXsv8Getsgwu7yCG5JdfsQZLnn59po9mpGrFNB1ioxJp8pp7hkoaw9JmVfV56KByfAahayue9",
  "key36": "5Mhj3KuEKPmVrF8wzUv6NVzg1vodJGLahd6v2JcdV38JxMkcySzX7HKUc6AhXdsJfchVwmcJ1iSEE1d3nKRsTFfi"
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
