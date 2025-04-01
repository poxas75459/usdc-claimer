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
    "4n1pn7kjQCNChHboriixmeeU6YrtkJsKZHszsJ8VRoYzVfHUMpBaWarJWQfFCfiq4qdUatrDphyz1G3WvN9j2EE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BoD7tTpQQBXE2zAfm53uNVKGaWXeS37yynAttvyN8mzwVS76Zj1wDbqgc3UWZcUW2Fnq3nAXLUUmnT8R5piC1C3",
  "key1": "rsHLaDfvdhhpaHM7WQy7WXccbXwd9Qn6iFX7qeL31jHsRYDY22MUREaxKBTdZiwCVFG1HjAaqbYr37ouaw1Gonv",
  "key2": "dH5HsdVDVzVHcj5ppgjnnXf63Z5eBS9hq7E6R2ceUSsmTJ3w8BEeSBztLZ8zR3BEX9D2RePY63o7X3EdyUe9FYr",
  "key3": "5JNSNEA1ZCSB3NXjRbs713d1BiwtqhGL8pHjuv7LwZDbL68hMeMHsqgj2ELicM5ZqSmVtTtVQvHU9eLQ9DwcASTy",
  "key4": "kBXWAZq2VbfsMeKjoLGFxeorTLzor9G7dkGwXQPRgwGs9YyvvzmaYph8Vp6sHkT7XRZTCKodj3LSg4qmZsf5Vg4",
  "key5": "dTzsLKPExYZFhEDDxSVquKXTGKdzvWdAi4egEYKLGRzHWuR3jmhuvZGG6XkXeYwFSxp3uSiFmb67J6TcPdGphpU",
  "key6": "55KyMZENQgVP47prhmUdpJ6RVC3s4r8hPUkATpcGDFuWK4UDHaynw5K7BxCpi1Qa9RdPY7s6EqCbHT6wqPAnrzrH",
  "key7": "5uK8y8UuQy79rEVSzsVs8UdKqZNf6DwHpSxppFfoySx3N56oKPJc3YbfHdm9RW633N2XTEvNynM9ZGZzCPxQNok",
  "key8": "5bihaAQcnzn7ygNAGYujPJgQw75MUrGYQFM8pF7MUaQxEX4s8m6CBT5p9S6q1Baqxe8CxL8wgMuuy47ZnW8xsgxG",
  "key9": "45YzBNfBz9iLksRiJ3LHed1EQ26mxiqAc8kFjm9cyZHSR6HtbZbd1v2h5sCQRtsX3XTnDZbjNUMaPZm24TBu75UJ",
  "key10": "4Zk3ZdAKQy7WLtTY9nYsBhkda6na1Y21nGEWdsLJb7QZWM74hCNAWkrQADnvbdJomy8vNDxe5qg5dX9QhKLAiLz2",
  "key11": "4N2z4enc5ootVpV5qN2Ce9nPT6gQoHhSR1wKEoRwT3gKu6kkAawUkYbxckFJMAL559yXtJaCXmymKn1v9GqUxymF",
  "key12": "3bCXAjTkcmDP4JPXusnmbwEnvvXYGwEdGQeSbc8yftU5rnjKt7Dbb4mnDnEY5YE4yGf2bXxG7UA6jgfAMA3gWrZp",
  "key13": "2zp7WS4T9EHwhfUZwh9838zNoGHSYi3G3zizEsCg5ncjr9nMoqPq1aB9a47AY6Uc3V6fE3tmS7cPXQEoDPRWpfjk",
  "key14": "4t1JNoAWnWb2RUqN9Hi1gNt2TVwyPasLZij1JQsdrd9vj3i2rmdZHm7Wbbvvg2AAaXuCzezBmrmbQKkC28Kqpe7s",
  "key15": "4mnwyNer83ybhuQRjgeqpdDnExnY8CJGqxTwwzHm7EWnkrwYudS9fvM5gu4VrUoqxte4qPRvZmYJFcEYtQDDLMw8",
  "key16": "23fVxwKKaFaNyAhEZHh31yU5CEYxauMPQXPtpep4JV8P5RBuoB1to7j3K9qUyTgUoAgdqA48LqhgpxDs2o5sQgHY",
  "key17": "64ba6D7Qt2aUuSgqhrjpWx1MUiZTMDer4mraGTfws3vkADZYNQHw7HxmT2G4oCPBGSwrJ5Y4EQ6Yp87adSJnLw7Q",
  "key18": "5rUHLjjTJej4EGjRyJkYkSiV7DwTKG42P73JPbEKkUEqMqL5BYp9HFiTWy1MPYURDbcKPusW5ZSYxKtZxhtgDeKe",
  "key19": "5vruKVJXDoyKQSftJisYP541PxQaErtN8AdfskgitkLXnhcgb6JEwSzxYnPf8wu8svMEMkCyHfUrdkuYZt5BaWuk",
  "key20": "UCju3KSgJrfMmLZCQi1XGLZcEKD4XtQAY8MRgZkTMp8xV9d8Bi7comd2zahkPny8GpRN8c5aZ24QNkj2J2JB9UE",
  "key21": "2bH4YD1XCVa7FLJmsTzC5LzsYDqsSt3FMb6M7xzttugh851rqQkNWXXw7iquo47UfcU7CPGMCcBEiD4mi73CFGyi",
  "key22": "bPpdXHbBrmyfVCfEyowYaSRLksGiE8iJzrDQjhgk8G5RZShcy2aC4PTUEi9J8gM5DaN58dZ6YPv7hx2Fc3UCuen",
  "key23": "4uFGmBNQNXgNhGAEXW6iU8Bf7ztw1KKBnNRdnkqrnSay8zggf57Vx71gDwPeqqZh5SfMiDJEYnWmdhTUnfTaX1hP",
  "key24": "2TV66GprDwKtqXAtBvoHgc2yZMCjaNVVjF2DbezZnST1qoGUmRHgQafcCMUMn2xLLsnf5vxwVGwjr1an3tYpmRLK",
  "key25": "4Q6aRTNuWRZcbf2E1xSAXZe1ziceNZpbZBToCTHDq9u3xhx7RPHKbG3bxNFMecufxp8GcewHAPDyVq7BScyFaFjx",
  "key26": "5sFpu63eYC4EH4KxWEt68zSmGP6jYS2xp8oeV5TVeUeDLBZBjKYh1KV1BwudKtrc9njSiFJ6rrP8gVqvG3kk1zXn",
  "key27": "2ShUwZR7cEtGLEgazaHQyHFbppKSZccwcjJzxEXTYwsM8tsbXkZZv79QjYp8MzFjnNpjXN1STKhNZbQg5jrygCw6",
  "key28": "2Mw6QNEjGX64AmzE1wQZkToUQCouDtuSV8Anby8ZTG8LjLHGfJ1k2gzACacUA43wKWnpmu71wMu2vAeCCuB7Evpi",
  "key29": "BjY73PkghoY45y18pLapyAXT8c84q4eVMkEnSWh1P6CoA5oR9YHLL5m5WimFiEu4Qxpuwh9wKQFUyaCMmhte2BK",
  "key30": "4oeT35EsqthkEyTr5ai64AFMfhMfbGcT3VeBPonmSqvDHu3gCWSzHdaKBUzWAvzjBVGHGfKWXnZeffbj4a25drXs",
  "key31": "418rZ4xvDaVbjVq9GLNcMGEjWTmiAv5Pd7RVgj2nu3aUZPLUu9gnKDYiN9RYxhojj3SnUgyxoRjUrcug3ZY4Yf7S",
  "key32": "3JHznU8ERLZG5VykSX6bW6S2B8guXraFyRd9iKbcXXpGu1gwnJ5KBQBoS22B71zYBA5zBou4dXJLK9GFi8x2oFqP",
  "key33": "2o6BhCjbXs9x7hpMjDGydSHyHUce9oPxPbecQA9V6ynhTgJy6uSnnkfYu2Lth94i7GKNYzFjBL8yG5XKkUmk83pX",
  "key34": "3HKmdNzifC3sNHobpmxAGMKy2H8n1eb6Ek6sWGRuPdfUB9T9WkUvo2JQzQNURZJdKAeH59ZYg6c1VJJPGv2i1d8k",
  "key35": "4Qy3ojjfaXkgoVRL4KQKFe674azdcwX5rebHMQ64JDDYEDnP1dKbWAerQiTLreHrdy6SiNagT2axzsF8yS7sYDAZ",
  "key36": "4G287Ce2sLaydCzqXiAnJ4x9ny4AbeqFvaVPdX7ZZTfSzz5CcWHJhWNyd3PpLwRTxX7QtSRa6XpmQfiBHKVbVf7C",
  "key37": "32Fsee8THzdRU9W8NBkoafrUvUtniz1apnYmYBPutKCtKGbMkfnxsFnrsHnLnUmnBmrz2aJoGUabVDsvPZwv4sg6",
  "key38": "4ZBsj5HwHjXXdQ8xHYQDbXEsJPE2JpKkAPY1UmRY6jdje3kWieXrPxsLtWmi84kNu8mbkQvWJZ72fJsKB722JLwt",
  "key39": "2qEJpMA59jSSgCyvSfrC54R5qtnUpL9xtGUBVAhhisYaWYRSa8AKn2CEEGi3ER6vnr9x5NUFKC25sQvS2riXQzdX",
  "key40": "a8Ufd8WyrwMuyTNdFB8s6GjN9tCYQ8keEjnKUPxPy1fy5iKB4s58QZjFKyLauJ2eofcJYJDdPAppQhLhDayNizg"
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
