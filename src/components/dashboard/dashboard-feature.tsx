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
    "3wbA8Pm1Z13rTWLabgzX1MtYVByWJu6UyXxTucQtWwcfNwjkQ6Y5UsnjwkERRkxX7BFDWjPYxc6bLfsW9scXMZYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uR7uYuFK5a2C7yavPijUgvGxQBpfFm1433M7RwMNVJHZGt2e4oXA31RqnuDJwb7ugDGxPLgrvxR4hY7WN6scLN6",
  "key1": "4yHYFV7r1w6Kg2CDnxzttiRka9ZYviiHSRJ9tdN8U3RL2be1ZSDVJYHBAef5RBV45s98KpNx1LATZFDR3BpeZngo",
  "key2": "3TCneELjmEgeAGm9FFCAyTPxP1Y9BaMgL3C6x1GNAEtAQNHqwVHXJ8mVkmXtSt9zoD17ESCJMpvnV76QDXqi3MUJ",
  "key3": "2LfoEvQkmBpeF6CK7nj2ue3RXpRtY7xyk6ZCgZny7yz64AuJpe8PCnkmxMESkkDyGAY6y5vAMZ4NZQpXQkXZ1ELy",
  "key4": "3TL9RfZ2Z7uDdcogVbcFc3CnQHqZtV3GbDuZHuVeDqxoPgfW8xeoggXUbRQYr5om6856cwa7pv5Vd9guWnobrpTV",
  "key5": "28aVY9rWEGG3AQiUaFmdLmgzf242umpuuUNiBZfW6StMh3SPbpVKLZekTVdqU7bAbp4kFYZq28z7nWGzKiw3GteY",
  "key6": "4UCG8FzEGPsMyJN7aQe8sSvByfGaCbH53Jj61qg6jk59zgzaiDzr1o3LrcnuthQeGNi6c6enPjanz6pskzxpb4fU",
  "key7": "5inFVARGMjSXpF8q1ghtYxh65NUo7ewz2as6sJerBCn79HJ9yWwEn6LbKSZ553EdRs5FoBrM4WXC6HeuYU717xFP",
  "key8": "23seXq4hQdV9e29qEDuKcJhDvKXEeDLt43gpkchd5zew1nRK7Egt3p9p2tkYmKyr2WgUqAxXeFMeqTEs7pKS3bbT",
  "key9": "2ekrHV16kTfhzuL88os8wkJAWGv4fw9zw39zuj4ZsH9xR4QsuFTR6m6mvkNZxdoXnWrjzekHgPATwBGLDwQdw6sr",
  "key10": "4cJ2VbCnsmAveCv62VJ1qd2mqC5gVFjB5VFUehv2anpto41yYSePJtbA53q9c37Yzasapvewa2P7urhgu8kqFSBB",
  "key11": "7m14MNew3WZPoUiqy3y8dbhiyYThX36FDa5TeBJmWWfcYdtKCFr7TXcdGvRS3wMuBTrbwFUmNdFTvoU63CEppDv",
  "key12": "3DiiosZnxU2DtoFp4vGNCGD3Sccnwec7eBbRKfmHoMMNeLhK4oYkzUuPwcEeoNWDZAxXBRok2sjTcyRAifjbQFEe",
  "key13": "wcdX6qeMSyewJjv6VK9Tk8jRWMnc9cHPQiazX5mqhcvhmNYDWNn1DkknwNA5Az2RfgYhadeQFhKe6oWaPrzHKUu",
  "key14": "2MhzA1741uj87yv2ni9iR2QK9Mg5cDm2b6h2rzxUTJ6pytfKwCeGF7trawB2uT2iMTVX65hMMFFPwoA8d7JXMdcx",
  "key15": "44jNAs6TkTnJQtqFiTt7iGoyejhgkGHozrtZ3Fpjpi6bo5q3h19jEUJ7Q4LoKtn8iFKV7gngN2jPNLNnxXgTybdZ",
  "key16": "3dadTpXrGo6f8FRym7VExU3pdwjkTcJhJVsihSeMW7hixDbejpZEqwvBfB9sJoarFd8iq7kyiJ7ZjFBEJk1GZFa6",
  "key17": "38SP3Npwr65cs7igGJ2mou18ELwYgSmnA35GSoWwJczaCfXCVfyMWySixAsxhofLTVzsVVCPHCUuFbeG1jaSrSD3",
  "key18": "2fiGF5ZTyMfkLp9rTkyfTZ6ypV5hT8rUpBEd6oaYhxo9rxTSpBy1tp8xWyBZ62BHN62GUtgy6nRjKthmY8zzYKHM",
  "key19": "mGpHeGsZZFJvQk7PPq6kPRw52dUpXiJogvBqZfJ8nTT8RRJbWQXDv3UtiZV8cAvu1gQT5JQW1K86vCFxQeSpgAc",
  "key20": "SWjUYzrLtD13pZksgk67qQ3euGKrKPVftomBJwhx9T27bKhpfHqadhKLcpc2Q8RoLLRfsPJjWURtPoqJfCjxaFf",
  "key21": "59SauKDw3KcZLp1bFojejju1aTEBoBdnfduu5KYkbtqqehGq9W4kYLqLPSMaEFZTVCq7fYj7NcP7xvhGJs9UhFgG",
  "key22": "4ALfuMf5cAxauazLnxtQ4oWtHaNVaAZaLLGC2EJKtfptm1iDgd6GcJDM4VU9JEYmx5pUdXoLhv7yZTcqaWKmKzAi",
  "key23": "9QkFmkE8Q3PY8A5R8pVS411S9nQhyorgs4bJCeqqEk1vkorge4AGj8gN1SMfrS1o9sYjkcBRTfy1Vbc8j9GG4tC",
  "key24": "5tmegeHXRV1prXzERx3C3NRUJFbzJRYyM5EYGVhLUJUgWwnufdTqc82xxyXfPAHapcyDQnPw5uMgDnkpdCjER4Tq",
  "key25": "4syNbEvhzn3fHNYdeAacXE2WEwpMH4fxHJ1GSXdG1jB86a2x3anKqGvMHbdgkXyY83ZaQhQDLNX8aHviekLD7o9p",
  "key26": "NVpPNFmy86w2J6Y5m94Uj78saKLaCGQ14sAj8GhBvb55yVhBRd51Vn48kJuFfbj4eDP5Xju8crGHL8GbqucSVsq",
  "key27": "bkiWZL9khYEshv8SC3gNLnynVG3ZemeWsHdkEnZy9F8drMnTCE6azjvbLb9yVwbTNiyiEAoqn7RHBSLPsG2o8QB",
  "key28": "UzwGxkm8YbPrDA7cbrNUS7uoJf6wp5sV1DBgYn3HqPaXpnVqEf8WoFe17L6hDADySv438S5MLpaa6iS6WqEzE9K",
  "key29": "5oyM3Gk5wzwT8NhRA2WRWWnsHDEygEG3sED2N5htqadeDwW87yjzoB9epWkHLEfTfHh4Htmwr6YpGqK7TzQ3Zyfm",
  "key30": "3xQrgMPfsAxFU7js1J6JUzqcrh2CiYxV6YVAHqDv2R8VfdYrUuXXQdL64oxNkM4MRx9tkXCu7Y9hyjwcNrxRf6h5",
  "key31": "qPUYxN7XExrb86CmyTQMMctS4ysrozv5uvPb1CEL4AZrE5iNq6RCZCQGmWevxDSK4BoWSUfKerh26ReprBV7end",
  "key32": "3XiNGzZYCCZHrUMpTSN9SgSduebkREz944mS18JbA3BhoqeyY58mjjweHhnQFtPPtkc3C1UhhQ5bxiEjnfh3MRai",
  "key33": "6uJfAcpzdpayuYyLeCdnPrJzcwkRbdgRt7ewwiNVEEn7d8khabEggyYmqg781oDnW6vuTnMNdprpYgJni1MKpFu"
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
