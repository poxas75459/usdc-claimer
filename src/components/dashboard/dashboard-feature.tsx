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
    "5fMCug3MCJoCAemV4hHZ87JikePpvK2EtveLmuMjsriiC5Vmaf1R4qr8F1kFP9vq8xAjnobKrAnNWseAThdeRojr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kc5sq2ZDQdRZkRg1C42LWskYHjbFEfEPAqbEr4vYaRUy6jf5atNbYupwh7WE5Rg1cDL6mZpLifdrj3nJ5J9hvwv",
  "key1": "5owbhY8gAaJ7xQH1xf6XtG7GuQebS6et9x9UYQwGvtPYtsoTSDEUZbzNkgmBNNcAcMSpgoknmKcdnMvzs17eaE6c",
  "key2": "3TFHh4VSp2hPxKc4LUXRwqzrDNRHw3LuLTfQPmT5mv8jtjGLf6VrBPyKvuGgPq4CMwrxYniKkmktWbK4ovJxftnP",
  "key3": "3b6T4S8ADn6TEqhz7mpWWA1L1DhGkMDstm77FsSuXT3weMs36wLFvd1GP6mp61K4rroMprK6xFUVnjg4Ja8BwwFT",
  "key4": "f85cY1XkJ6yY82Uwf8ypiATj6uKaYLmE8aTau3HvvjRADDN6AuF4HQSG46MSka2JBxW7KkRwe3213NWKcgZ3iEv",
  "key5": "52MQPov9SKYEs8RWe6RLUW85hqpFbBf4KM2GVhYX4JFd4rKSBAz2GombhAgZ1N3wRu3WYFftrZRWtcCYVK3pyU9y",
  "key6": "Bc65e5jkRSxz6fSLaBrwwJM7S6KdYiE95G3PtVFu4K7vqsRHDnWpzYep6eNuLsnFAD8VwpotpNeWiadAEVdMegB",
  "key7": "559vMhSM6evQ5H6xHqunQLC7n3roU9BE2ps8a8kAfKpx1XDtvZj1wXptw3eEPm5GcCWSNgrinPdvcFU2YLEJPmXC",
  "key8": "2NxwStNS4ZfssRfk7gzjQZMzrZFv8JLNRXZnZii458ahX4BzpRP8ipNQLW1V5HvmmL6Tp9pmeNbgknaVjwJz7foX",
  "key9": "3RPxQbsgBnDZBWVBLPPJhDi6iLFDYwhDfmzVi52SpkPj9CJAGBL9FjmEZ84ExMCDrzEzSnzJJ53UzEwAS6ZwhP6J",
  "key10": "4SxwsTnHvDLniFwpoCkvQkY9VheNRaRJjUggUM6VGAiUGHMDEfnwKdEgwfbgVYimMJkD4uxSnLzmF2oc8mib9cAQ",
  "key11": "5y45HPzaakCFF8XCRH6KM3kwDV9n5MhNbVKeLjZaa9j2t9J1WwU81nyRTVTUjhJDC3KTxBT281d8D9iHUwVnnDG5",
  "key12": "45sLEEVfs3CXTVfeBTVeNeTpjiLTQ3aakYGk4hnYKvaambCzTCnvmgZTR23VYDU8yVBui5TC6ccnhuHrvVdV7UcQ",
  "key13": "pKugGz5P4d2G95Zdrj6gGND2kvZz31jwbTcXcRyCMgHMrGgDhgQJZYhiCVhqDjjxYRMUJcwwMjkyrTqh1NB8dqo",
  "key14": "2kZPsCei5ixM5a56BrS9VY2T4KBA9m4u2pP4j8iUh7qv2a66jCvrjJiPipe6XNcwrr7NACqL9FVawV5KatHETRkB",
  "key15": "5coB8K3rqv2rBo1U8avVrak4d8EJaSi2TkzRToCfAVo2ogTbe5wsECwK53qLAsktJmrn7Wmne3Bc82q3kruGhEnk",
  "key16": "2z2ZsXRLFzA6YKQz8Qqz6TTvRjSEkMD9Uk3thJXqzdPnkXynC2Jx1XDomrJpE5Hs8qZa3BYaaHP3YWtoPAeKeDGT",
  "key17": "5y3GZuhaKwdYJo8TRXhmQkijKri41TSfh7ptssYt58HEt8xjg21vey9qo3xDBdVFpq5Qe7VytL3Sxhmagr2VAAb3",
  "key18": "rQkXBSXAY5CW8SSwWQo9Zs745d4zL16Fc1n8Q3fzfz3T276Jc3N6kRysbWWK3BHB5PHz5B2BaBnF7peXyKr5Sre",
  "key19": "2gSjAj9B8tD5bBxrv5mosz3NtJYpm1rg3AM3xkdmey9ZL9ZpuY8zSowcAzhsS3tpudVas6ksPYRR8oac5NTP9cQV",
  "key20": "51gtFzSzABY6PaeBe8iXAGWaeyF5qmRB1YsByAHKKhhokPy5VezzpChY1q7AVgtx5n9p2rGPDUCupZKhZDjzvcrw",
  "key21": "3mzDygLvyERdkM1NBNjSvJPPJhry8AFHpsdC45yB48z6ELZSjVeXQM5N8rYpfJTSCGRyS2rtzHp7yYjS8vu42u93",
  "key22": "5CnjZb5jWZ8qCG4icUKbqNk9Ct1jRNmm4kxw7t8S8XZPKKAYh5T996mEX2ugs2bwNUNsdehSKKUG3iLYtyuTk8K4",
  "key23": "3jxH79ASR4qXBzLUs6EAxQLhU49L9FAmato4himUrUFyPjBi4ikChCVz6s41PyCCK8jYjD1QZ2CMmGCgqLaUxWH3",
  "key24": "5aP3wJQKKYGaej3ZHJ85fJpv82y4NMmVYVZndM96yffnp7GvsamHoRPesFfg9YZnr1hZms1xLGysgTgKoR2xkP5L",
  "key25": "48X5i2JuWnQ6JBK3exHPT1Q5kpTD4bqjHxhm2h5ZTpoFZM6gaRcStYLeDXsyZYoauPqKDmQCmPGueYBtPQceKWRz",
  "key26": "67JHbLZEGdghUQEh2mWF8xGijcjSiK7xao9XTdefPMoBvr9K1z4jCLNJBZkML6N4rxok3XaDw8213wwa88pPNCuG",
  "key27": "DWcn16vAr2Uc8LcvpEgsXSq1fdA2mMrCWBg4iizpZFQP2h4MjToMYtBRi9qdDe5WUykHu2szHEyYLx9xwcLAdEG",
  "key28": "28SdUw8FUifkDbdu4tAoQ45KxfCGP5bqGjUfqmAYTd4brW9Q2APMYx1qv3vvFLV6s7uhJjQ3cqe8iZg3iGByWfTQ",
  "key29": "3eQeyTbr3UTwubK9qNa9pHCTR9gXi2LyzMudzmhu8YWkd6C36mns5CfCDgCwmKxn1aJUWaJxKzJu1zVN8D9mMdE8",
  "key30": "3c1K8yNedzFSq3FAm7ZLiZRqdRQGKuWnYY17PejUqiFK7W9HhJE25EgmgHdC4Lv3qLXc6cEP455PTa2J192qCGRi",
  "key31": "5dJHjq5japoWeHX8RBmMXorFASUc5gpWnBCff1HrAxT4TLtzhkw9eDoV6TePnGY5eiHhey8PmZjWBvifHKjrhxvV",
  "key32": "4wFvziRhyCHnTqHxMQd67ZeGLUy3J8RgMENSwZ9VyMvu5tTuAPYrZPj2RCpo7zdR4aSzPKmyVevdt1SiQGqWDmrC",
  "key33": "3zmbq16xkB6ZYJB1ijAcvBmXwgqoe3Q8G5VqQNawZuoRThKEatnSxKzbst7ND9C77eSBXnwgxQ6AdD3oQrhudBxR",
  "key34": "4kAAgPkoHVvuQgREmRydfmXe8UjngbutwHQNZFFayAuAQRBdLKXvSCb3SqpVc4CGyptH8KJHVitSuJAos68r3JrT",
  "key35": "4zbcueYBosgC7sYPteHA4tX3teUuz8Sd3BitwU64fKdtxU4mW7hG6ALCsJDbp1FQmLsbm8Rp6zs2DBBq2fFHywgu",
  "key36": "3qqC8WGZZzE7dNMGwtgBotJXKLmLM5UE8nhyWLKmHrcwev61MzyLj9D6WeTPSRXgmaK2xZkWTzaBPRiAwEdUXnYX",
  "key37": "2qe5Z5nXt5xmBxHxud6EAp286aC6Vxs72uhM9fepxyrYookVSpwEYwtisnhfHpkmvBqWKBa6rTTLdT8xKumKoH4P",
  "key38": "5PGmxgGw44g7ns5wKui8bWSkcj7SVL7MDfnyUi4GnD6vgFWj6ecv32xYgKWPxEM5TWytbFtmSShmXdrLjnRMXMzB",
  "key39": "3fwP2hFCpjdNS27pPtkqRKYujswaKjTmdnKew9ZfUv4APstkCPPEPj7aFHRTMboPdJNhyvFZLQoQDY8n5gHgjb1B",
  "key40": "4qxxxMJTjhqLJKTcQZHAMKn4fLGMqXKoTgPuHa4rjmqzx4DE22P2yeAuZT6Xd7fFkLwcV4dk7k4uBngR5giSZmT2",
  "key41": "YJRhv3v6kYQYEDBWGr4WCapS9gczcAdeWt4Ngk11YBb4XT2pavxx6Z8eW3ZXArgMxjrrGiqYMnMy9RtjsuJbvNU",
  "key42": "2U6xsBCaQvVjGdkKgjhpDdzaj5QgwqJMZrYVLtsy26XzQi4UqqVqVdnpVv9NiuLCgeCigZxK1Q9ex1n3BJZpQk85",
  "key43": "2XMm6Kb2cecKXcRh6uc5ssnTExyGhx81571Rmn5yXhXefqPjfEVUyiTYn6EzovKba13xJ7nZTwp1T5qA9gtpoUcT",
  "key44": "6422qdVNhwUG9GNKkxJPgzQRSoApQhTSzvsEdDFBcALVjtT6Z5a5w796kwWWLYA9kA44GcvZSrN7RT3ecDCKMuqs",
  "key45": "45RAHe4h38UNvQLR8hq4MogdbRkzmNK5k8UQyPg2qPce86dzRu6F7LJUDvfmcmvkwutkZtSaLzTZCmqxhBVYQMN4",
  "key46": "5h3VyY8SkRjhq6T2fjPC5UQ5QV41RYwMwC2moAZMqCq85PhuRZsrtWN7WdPrUgY3Rs7Uogicv2mL8y3ew1eSgFXf",
  "key47": "GJZ6PDbsVyUccun55Sqp7Wxp63GiKcdbx3tkm91x6JHq2hEWwPCCYQ3vAx4TCUVSYjLcMpgidQknJaxBtLMSHTo",
  "key48": "nLHGXZw9vAGxqgu5VTiq1jPyFsoq5smQA9UnmS6xH9ME4s77fSFbzEMgbe72A7gK96evzVV23ytzraJWqtotrHA",
  "key49": "55GL1SR2giHLk8WCCHchwVsaP36EM3HWTyfgqSmgaLrapUNbJuMyQk3TmUX8GagxtxJbNwvHdJktv8d4Ao2rq6Wk"
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
