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
    "4w4hPEAemWAGzY5Ctz2oLgDePbu1ysCJxm7vtTJ7oVEWg9XzgzuQzmrFkHAQ6SyCjRrsdjutr2F6w88bpxYwtZJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrkCTiyPB8Anzmtyuw75aYgqthfu3gpinjw2a3iDy6tGbjnwJkz44LV2mdCJVb7nRPzrRqVi6qjHfTPmm2KUU53",
  "key1": "1DeLTiqp1nE8GysCWdGziVs6fgeeZA4WpyQmwPK77DTZKPWyoDWaCHBx8tzYCyAgkCkM28FbnHDDVvDE1UawxuD",
  "key2": "5sqBS3nhVfTtKP1QL7yDiQnYkC9ZgA2ziZfnGsnCoyWHM4HwiB9HPw9GPHPny63TjQ6NTrCzpg6zjFY8bjZH83Ra",
  "key3": "5nP4eZnwcuDgqkVEaVmwotvwSZDbUyN14EgbKVreaDpqPN84UsxF3DUMGMRxDMsUtKWeogYVPd35uQ8DEAkpfL44",
  "key4": "5Xv1i79jemp1Aynj6nC4mzTZTrQBjzWh4eJ1ChCei8xXArJQFoQkfcHYpMsNHqhvRktEJyGiHQ6mR7pHWSJdZGbi",
  "key5": "9DPY2kShWMRrEB9UeLmYBkxGUua4uGqxNS9R8SY8s7Ru4938fFrcpAjW91kkpR9YRxbDMTUM7hyE6X6ufKVLexw",
  "key6": "3rFdojFdPUgAbeXro6TXx244CpzDNacDw67JBNDK4gqZv6BdWqTtv8iRyAEgJpqAvEo3B5bY17ernpzWyrCngEBJ",
  "key7": "2vapttuPqXuEKpEpRDSRN1ytY9S2G2fZTUqv27Gy7YPup4V7XvKciRdufbhgzBqMZGi2QdwgQhXimLu1B9RGa2wo",
  "key8": "5pcZussqwTnernK5dAeKmtC3naSoVyf44LueU94WivzBfbM7yVDvqBPdowU6Q9UUafX1DiyniqLM72JYQJZGctrx",
  "key9": "5PHsp4YjWjc1zXtPsWLkgYimiS1tHVUwCzdyY4BcBwtK1VKrzAh5cfNud25i66xyW8Y4HWUVBHyYbsHUkECLFYVA",
  "key10": "2PBYxP2UJPWTZnRy5MWRzMC94SXPZHhyvffwgJL237WoRbT7JhFGxCvxcB6JeFbn5XKn1tjzTsBvmbHKxz5qQs9X",
  "key11": "2WjmuFPgTkkV7nWaKHfrbX6hZuHLoFZ3mUKAD7f3hJZyyVewycxvkyoMdzfHG7pgbdAZXWU6HfMPLqUyHBVZkcrr",
  "key12": "33gjfuQLdNnnTLXN7dkYKZkJNkbFJsedeStyXHCmxRVxhA8QbDgdsWSCHcdpoLDB9icXHrTQ9o4dUSVCfpAGgwQK",
  "key13": "2UwjjoyauUjP875jPtLP97D71zpSXCy8kR8HohM966kw8YQQi25KEjmQW1XAW6MeojcSmP4dAaqBmUkKDqXW1qcj",
  "key14": "UxM6fHizwbXgzi3TuwLqsAjz5qtxJfMSMLJbQkXkUmV5C5oFojUPTsqh3zNT9xhYSh2DmGNMidptibXXxURGWLd",
  "key15": "61zcPzDVZaXmGuHSH4LpRQAkXWK8fGuFvSgpN821kAhCuGk7rNhpFUWJigYVfbJwLBgo6BgoVPved1TLsgRnzAb4",
  "key16": "2EFBQe9bJjwxT7iDdxM4qnkfjCoEWX2CyKguuGQAdG6ySW8EQ9yZvjsmDxhojUAbqx8mWcBSLwbMzCKQ6gQAywVD",
  "key17": "5AMxMSoaWSCN35gdVU8mQxaZfoVtejKUPRqVTQVYBSnQi4HAUMXtTNAkE39bvpgQ4TzCL32N8Rh199zGYTSAtzve",
  "key18": "4PLkaDQJhYcWNtNAcWCRanPiGFnfsjdg2jWH1iutXUZ92gpo5gqHmmSUJC5fB2Lsk4i2H5cb7ugvLVxTzbi7uNU6",
  "key19": "23zAHUbGiW5Qug7SB78s6ebM54HPnvWoNP4zmCnbwvWu748b6dYcC75xjP25gS79tdshhFbRtzFjbqocvQJW1kFt",
  "key20": "sNAM7CoXS4tYjU6wLWs5nnwqZS1kD18veKyrdX84UTBh4aLa25RBmUdQJ5UDfFdjmibX1Kg8BQZckQ59qhKb3Jv",
  "key21": "4F1FEdpabQnjxD75EE4jNP83zmzXUSgpiHgtPKKime3Yap3dgVFefeTjudGUBfp8oTSGJzi9aMLmWEZwFfUEjox7",
  "key22": "2HJHs6ZeC79Vo7GjF54PEQumCz92c9vruqAXWD6vLCRn3ANioKoRoGC7qdC4g5d4YcJqUZ5RQZrMXZkyNKCZHBeH",
  "key23": "4D4bPFCQqWh3Y8UgSMRNKHkoP3thXpuHKLvY8G8VJeU48ZBmC4tiXH2RGnZyZZNCGguGhQn1Supu6AxQxAaF7pqf",
  "key24": "33rw3kUnQUTynCcWBzMXB2ir7NKSSLb47Yy5SavYSGnbK1ytFEK56riRQdKHe5SkN5cboP7tuQGbKM2S3eBrGXXe",
  "key25": "4D1Ayaqne2bWyRZ7YnaHzidtfd6fVatqpWU6bZs7PCSoGZAzgFoNghPhntkU1Rh3zcYGcdRwVA8cp1o4dbL8W5d6",
  "key26": "3sVdHhgBh3R11w8wh947r11TxTR6sh9TSTQTxn1Ak9QNZJ3exRZTNFbh3bgNj1TYZ95ezyjCwAtqz6SwTBoFLqCu",
  "key27": "2QBHcVKHLS9W36rLKifKwekfTLbgjWsid4HmQHDcVDUvDrqHkSC43Y4YaHQDcgH6cZFZ1WKcL5ZXBJWFNf3Yunp",
  "key28": "2kfHYDCXwZUQKfrzB7iAzgNnmdE1v839uJ2wKHoUMstqF19rbdMhPgkZaCHXL7CyQ9wgwy3rhi6Md2X3msmEpUpa",
  "key29": "a8JojdUWf7brFmAdTwVswJhxLjQop7tapZLnMzBYZ9Sze1rGLkj1YFVAHsZYi6qHJCQec2xvvz1X7bbp44wFqJr",
  "key30": "ovLf6ECS8XVeQa2T5vH2QArQxPxPbqztSvzHzdMxcGR98YsdT5r9qVtvfsu4xFUY3TUGzT3vYFRwYxrha6skFrJ",
  "key31": "3czgVWyy6apZMrCSarkTdc7E9MXDArbmfh4vuZVqNwB6r9o3oSQJaCSGp6cSpTAYHRrvj1akezmtxHU5nr4idBSk",
  "key32": "5Agx4jtBA28VADCjT9hfWP4tfvTKMqC72CTJmgqG9cTZGjCha8JDFtr93rupbqDQBnUzW4estnsQjcqwJkSNj5S6",
  "key33": "3zDSe9fzyH6LNqute9dhGrBy8s8QD34qRFHcZLQTtuqS9bnpmnu4cheXQyZzhjhFwSmpNDmA1sSU4NJ4EjFbR5Qq",
  "key34": "4oeAGhyj2QdFokzBBt5Myits5GG5iJLCNbJZVh24s4Nprw1Vko9cHesEY4c4tXw4Y3EYn6xg7Vj24aj71RLCFLmw",
  "key35": "cxpin3KLnSdmPTiF5i13PNsmahfYtC5KCmb44rqZ8tME2T4M3C7f4a5snRL6eu2WMjDBq16LTcxQdxE5hZBX8Yo",
  "key36": "2DpeXu9HnW9Wke6s8CL5MrSfxcLJjr6xKoHh36S6eTsZiZucWZb9oXMpVhKLsgmdtzMMxLNxRA46K1w1PHYqT3CC",
  "key37": "5SZH9fDvCAt1rA1Cp7c3AxVFyqtJ3rVpbdrYxq2QAgSRxnkdw283WsjBpUMMVWVWCwjeoDkaGXRDvYz6scB17Ao9",
  "key38": "3fLt5XwbyDvpJcVvzZLVEhdmk8dzXod3r6yK6uZC2XeRnmzbawMDakAiW7f5ukr7WPABvEW13pES8Jj3YhJypn5i",
  "key39": "22ZAKBP5R7hjLJgoqJdrtbW1sK6Qh9tBeWhyoC4wTXWQ5Ue7e6viZ6YFQx8bwF1bJZP22zyLZj5AtW37aCEBXopV",
  "key40": "3w3YDuM8YrBMa5hU4v6uGGntos1PuBDWPuS1ddSe2Ck4ZHbPX4oWcm7gyR8YrEHjRMYXhSJ2vciPDKkFUceFkpiH",
  "key41": "4UjVYt1rgBJtbCqgUHWzbYsSEiq7iMjm6chEWbNCkKWbBNurJdYF38GZAxPv18aGNchuJ9cFipyo4LEvjnUCVD5k",
  "key42": "4roFPADf94tyGUh4ho9i72dA9dTBKdNfZiXeUzPfyV89nkjcjKrvrHrecsAYujbbAzWssd1aK1e9Xr9EYm7FoXZx",
  "key43": "2PednETLYfQHiUaTkrphvwcFuMBWreD1AgqbqMjakJY29Aa44ff3q54fJdiu3x5uPY8oE8Ad5qXfrLKnAQMeccoK",
  "key44": "29dZBegjT3veQvqYt92DC9ATuNxJcWUvKqbuzsaxFP1FRoK4ggigwjXT1wjVcVHL9tLm28vkpCsZtNmXY5UExHoP",
  "key45": "2GvUraDG1EoB4zRzRyhHudWNkG4knw9FbaStRhHP41DjWEF9TjUhB8AoQNKc52X9rp6rG4dDCpma1npG2Y9ewwPv"
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
