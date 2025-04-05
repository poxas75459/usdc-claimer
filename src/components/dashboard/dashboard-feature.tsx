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
    "5Tpmy48rjdwCPj3Lz8raYJRRgPjFT89zxwx7D9YtUZ2MdgA83Y7zxdffw5uS7ELZsaywhqxaivgFqiwPYLgRwSf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8zyApKy7Z9SxKkNAo877mgtND1kvN5bEYko91intzQNe6mguR37cH9SMKZH4QEScDPCLomxXmVDCmuknPjJQyk",
  "key1": "5UYnz6d7CzuqhnbZcFvb2vdxgDXLjEAGYKkgoAxnZgFGPPRwJPZNYnmuRvyR6tToes7Q6ydYPAiAHJecSUfZZj43",
  "key2": "2napudxQdtxVaYv4TCZFoSd7fdpxZAhbjeTmS5T4mBC7QoGhsdeqsohj8rPnPoi2hC1Hjm5uZwhJXWaJSiZj3duR",
  "key3": "52GAbeotXmaZEddmfmMonqab5a1XEoBp6HYVmbevvyu6DEHnVhZiacYp4FMSpigPSeSis3B7UJnoZj3YpBpe428Q",
  "key4": "4jXX5KDfSgGYfA7Nuhb64DXjNriszfhoZcQemk9Yfr39VwLXxMcVwZRrW7zU4riV6furZQ53XouX7JuW3N6zQCXk",
  "key5": "5SqMPH5mcyEaekSc6QMNqKZYZqhcsCNkg4F14JSwhL2f4Gn7AzDTJiBDaCHKe7T3UZMxkLLQKJyWGVfxAL9dJR9e",
  "key6": "2c1M4KxUNFqEC8Z6xhZcUtBQtGmJQF8MqFnBYWQ2wMbYFzvZobUL2PKPtro6maWce9V6USKc5QhirnQJd3bdKEYH",
  "key7": "2NWpVkjP4S3Z1gcUTKtMdnrz9RWJSGgP89HSX7pjBHmd9onUx6TwNpiZkU2msLTiWSJFVEZWBNf8W4oGbet167Bg",
  "key8": "4hgtQFA9aDfkVmcFjC89knZSURwySpXCcJwGopdEm1AiK33Se6ek3aG74KX1Qek3BP5y5fEJu2Cr3uBxj5pUGsZK",
  "key9": "2vTZVy9tMS43NCsxDP1tfvgdj9ZfAWpB7ETAgZvZTntbNxNuEf82iHnxpqat7Czrp4xFhyrtBB8Qorjoe7ZDfbDL",
  "key10": "2cWeUWwhD9grEiukDdSAqAxz8j52cQGa6UCDVY6Q5jZhGFgVACfLkbJCLq98fnZfx2iJ7BbkFGgbkE2YTtpjdMxr",
  "key11": "5jr54xRjwuEhFFMqPUMs14GewZoFTjK3f5jq88zowLrR9MxwMFS9dFV5s2X4fyBiGEWfFnVAmexB66LXvptKkxCP",
  "key12": "59etsoQEucpChQ4u7M3YXE49WuiCcd9EtYUJJfVmxzLRj6P1zp3dxyB3LPp8E9oYqxw3uMWYg68UkEFmerDpF6B4",
  "key13": "5NFtf1GcyRG5MyFwJhm8eXK8fG9GQHCDDF4PfuxQrBHr25umBpvSHueEWjHKK4HLYEN3pvm7XKbCaFGXFhbFyk8c",
  "key14": "4AjcNGXWpUcMC6WdNTALfdMXrvRUoCNLjqrd8WJWwJhjQa9YqFSyZfiz9EvUr7i15BWzhBuGghXj3D86eBpiGy6W",
  "key15": "36BZ2YxZ4GDZZa2GEg9akdPpDSgypWEE6PifS27zB15ecqb4Qjq5hDAr9KYe8LDsdqPKx4BvSwXczkKJ9DHvtvaB",
  "key16": "2HX3yiHtLFkyCkcy52ajMNtR17pK58o5UQNivxZWWB8dS7ueyyUeDjj3FgjhXpkht4BB4hAJDgHU5okpU5YnXznx",
  "key17": "33KkdooNF79Ykhppuhh53PFTtx6iF2caPyxUUXeKrxcvcZWBB7ppoHcCTxyo446U9jnMCQ9PJurhAd3sQZHNRXsY",
  "key18": "2MAWbkM9xVQKnD2ado8cjBwF4xLykza7P72AaewaS1iEPWhsamyT3jAbd2kp6dmJP5buKzv3KfQ43R4HkDvFy5tq",
  "key19": "3yVrSJXtXLS9MUNPaQgVqx8xmdXvzPKCYAfT3GRDHdKZRmHLRc3WDBkYkuLAi3nn7TGKPRxSqytYGZ4qkLKaY9Sy",
  "key20": "2qf4CBv9wuT5ZLxPPdhsYUBKcCJa1d8LGBFma9QL8oyGDvTS5R6mHxckfjFjBrVX5etW2Kqb389Xq4kRwSoCDxiy",
  "key21": "2AZKcpnZb8gGDFcmPgnJi46EYWEAdoy366D85i8rfVRUEeHKEqA3Lwq48oriEycTgoU1qeyfSiWgAHYu5h4bDSp",
  "key22": "488t3cLzJv6hvQALXKesS3k8SNtknkMNYCTLERDZFAX7mYXmRCwt1eGbzrThXQpxWDZTJ5grGcQDeDfT2gYaCH7Y",
  "key23": "GWYQmKkcgpqKQfiiPWXyFpeFrUu4KA6CwUoXgoXM5hBnMTZNBmdXMvzCeGuYq5qD7V3Nr3hG6xD5ZHvyTdtLy3z",
  "key24": "2bGHeyp8DhozqbfkUX4izFM8AUiabpFzbBsNSGzRzsk9YLH6oCev8UwCEA5SiMrF5R2xkor6A9ivqXYnx4ECe1mz",
  "key25": "4W6HS2Bj7a2ANDTzMR2eRZ1ppV7J5XwSSLHWjh6Nw6CU4ng5wV1DiqHKg8QkMm8Y51LcydZEdtoSdXjBdpLkMnu1",
  "key26": "3LoB7WtRqCnmkkGQtj12H9TBf4rp5UcLgPjRnnHagCgChfWQ2BUUVdz6M7kpU3TZK1aw2bUj3Jv1TUpi8e1T3J1T",
  "key27": "66wJpiuQffJNqyD5JYnw3mpuCcibEjs4FZ59ZuWwWBm3jGD697zVvxHW6DwHsSygsydwUir6UvL69SHKfL74bTUX",
  "key28": "4tMoSGMyKbDU8dn7PtqiRn9Q8Z4xGkpKZ5GmZwMGJckoX3WGrRJee3BuCAdG5ft4prCjZ9ZFhUQV7oLQeALq43j8",
  "key29": "2F9C4rTSzorHdST5jSzzxD2W4nh2HGVV67jrESP5LsiqRxGY4EwuzYRvVFdCu4RyjgkHYqVwhKaJCN5qq8Dnd3yX",
  "key30": "5sfjq4C3z3DP6KVget8mNxKGikSak2ebbCPyV8n1ETMnhdF4EQ2XfX7CgqR1vpYEoD1W53D4GtCqSoVUv3v77HSn",
  "key31": "56yaNagShv5fDTYmAEgghF7Pcs3ZV9o4EA86puVpAPMD6v5mgVmxxjXK9DbXzKLkHUDCFnAYgzEayqJrQijVLm6Z",
  "key32": "4wnLwM1PASt5wqUVRPgjEPu1a6AuTn3c6LvMKaNr3teQhgCjWYFPD3TpDBaXqpfnzVcNEZYKprqTLqJS8e9GtVmG",
  "key33": "agy3FYcwayrJRnz3LoeKCKS7gKqDgifzPuT8eenvhpEQGApzXhXpMFgiseSkYHa75n6ervENGAFAGpUydCqnMQW",
  "key34": "3haoaQN8BWV1bsc3BXZiCLXGwJQqU89PSspN7QSLMnXntMWADRoLfvXGEY569Zsks6W55AaoVGtFN45AaY7rsy8z",
  "key35": "3yyS8CwJ54DQ79Qd2z6kaozYrkWfit2T59DWfT3c8evRxwwzBqDvwdnDtRv1PYHZC7FvMwmt87BSCkG3LNgP2tp1",
  "key36": "2GdZ9WSCQ2EgDGny1Pnvf1PNF9SsGNeLyD3tz3K7TCPgypUw3tGNMP65tTTtVXCUitwMfJ6bCZW5H3jP37uR5uD3"
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
