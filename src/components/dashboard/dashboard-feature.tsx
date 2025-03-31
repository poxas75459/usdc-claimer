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
    "4EGybeNyK7778QqsULwphp7DX8YZW75soKZVaibW5xcjA9iQ24RiBtPRUhQDqQxMPo1Z8KW5ojXTtMdpwcBN68wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAf7u4epcTUSnNg9pD9HyuzXGLeB9Qs9mY5t6339BNm8C4s5ytGCoq2xQ2SLZBKAe8Lh1LRVgFbtWuRoP1EmoTt",
  "key1": "2dj2iis4rRmNVKUUgt6wQL2d1f5bgS5sp2Vmy1Y1FsFQMZzdWZWrsZArhd4sudA31CDBFGCkSHqBxGwvyDZo6QCV",
  "key2": "25iXZGCLuaS8ZYk3x3vmKdyGMvzf6zpYay3ydY596DK6CsMV9LQmy8t7zC6J2HmU51nHL8e3GMtyxnXJH6pL3kcg",
  "key3": "8vRrJQHfUpQiynyuQFAzE3CWcpeR8cvmCWPNB1LtKK7a7Ccw3DpR31Vm7S2ipzXjNyVJW7DuUFkYaQySTmTVTjV",
  "key4": "2Xp1PojBMAg6MCuabBzBFGdgGHM3BzZFkdpd3Lsg7KsuZpTvpzoFQgGCGzTSrD2YEWqEckRyNPTHzX1txgLcX6Cp",
  "key5": "57aRhb7PqZ7yVoeK6dVDoJgSnM3TyZFZoqe5JPzKFAWVRb1EhDQRmD22N3jyTvmpcqN62PtbjJYvWDDWhU73hUzb",
  "key6": "5gfiWNHd6E1ySj85oT89zBG1MtMvUXjQDhFbQaGnQWynReghq2DT7Fd5445MJwM7xTW52p62CfTyshHJ9EwMamEb",
  "key7": "4yV5AbpsJTR9KGMWs6jDkxgC7yyGpQxcZDLrZMsK6QM1WpQDfSdL2VFmUJjpigk35VM8kLLX9kNabfr89WvFA1hH",
  "key8": "2HtZrJHnYqVBkG63FxEamfyJrxRp9cUY1BYG2j7HJsZKE1P8Lo3sNdd9akJUbYu3vYAtDBEMG11Pp1cQzrY6yikR",
  "key9": "5CAgaHcCPjuK2emBXygzfNvUGdVUyAQgeAutzAkH6uKGC4o3bPFZkv1GnQiuk2rn2UCNccwWqE5kXacaJnhMteBg",
  "key10": "4j2c8qwjaXpBiui5ckoi3xHgBWi1Zo8QCSjkQfn5evTcH1UM93NghPMFYkaga2y8YdpPJoom8TbLKgmNfQ9hNAHe",
  "key11": "4hyMxGJgvk7P4pbS1NL2ikqtv8cqVacKzvgqtqWQd2oMwyRB1kFPQufJgo3t9qKmBiaJTUdbj5RorunGGYK6Znnu",
  "key12": "5iwvZxkZj4SVM9nfyiM8rQFoccBYRXw41bXiYvQqEhZyzoJRZXDhojc82LgZ6VYwqLkC2qvZfWv8tudwazNhcRg5",
  "key13": "ZyQ1gmrBynSbkpALDhXQMpNWnrv6LdKFfZQ9BNteYfyPyT8pqxzcszpvbfKQL3QfGGBv89oEQckgmK3wMyZnWXY",
  "key14": "2nphEoqgBu4tWRssKTXMvA9EqHR24F9QCPdq5JLGyrM6EKK6FrbUzmeBGR3Zeehwmt2i4vtxqX4hJ3KExdEpjsqo",
  "key15": "2JaojZKTTHCZuYUKGxb2C5h2UuukPC6P8DBvshE6mAfQQv5R7wkZN3uDA5kvLenijPeTC45NuNegKAzdshwBVGMy",
  "key16": "3yECHES7tEs9KQwcbT8ZMjZFLzq6wwoDvG5aGn2ibG5MXLpJ32u54dsDXzCfPC4n2sbPqjQBQmLx8qEPt6kcbgDH",
  "key17": "2bus3yiEo7gKEjSHAaithKwKbq6byWZF6tR9dJpwuKwjekDECns2f7PKeZEGZp4v96846guswtYHyTh5aPCrb31G",
  "key18": "2krmnBN7U6GoDrqNUzc2fsmjF21EFepVZrVBQZmT6dxMgfkvJRxf12imbJyCpxLtyreuVPZwMXo2uYtByCnC2UUV",
  "key19": "7PA12hmQaWtuqtrPvMMmsD29mAZKPoKpQbXmMxRd7Nde5myHgeNsS8U86ibK4pCXYV28cEa2sX622tsKnZS42YU",
  "key20": "3KBkZm2GtsoCfrFqmiHLnobNYRUAV9YqgM2koqDGN58iVMqmvdDGMAGRPP66PyvFZRQ9ddrj12vrsFarFyMdfPee",
  "key21": "28vok3TasaFQt46fYHsCZJbUFdYPprCLhQdMiZWv8WEjbwH7AXbGniL9EDVK4BQpRT6LQhsLuAjYARsdAgvffFAQ",
  "key22": "641evAgiq6PUC3nbDEjNRjKxvGLAWiPBmqdd8cbrXymqJQPUhfTrbDkEoMLhCwgrNLmPygiMKVoZFECLuJ62aKoZ",
  "key23": "2B7JZuPpF4zQEtKTGq4CzE7Kv91W81HBafbfnQoFMY3sp7ozf6vSzf5GyDc4SpXnURMv2RWX9hoHfdjpHfCD1epj",
  "key24": "5tFJgyGr3SVNZyutnvQ8eUBSVp3bSCRgMhrtPsLGeCc8N4c5MKysGEDXAaHBXQcdG7nRKnrYvGSgwDWfLwEdE6ZX",
  "key25": "5JpC9Ffgtbacw1r6xDPrvnLHfKDtD4WUV8JNxhK33GnqaD87YEmbXLqxM1e3JRobYUxuPeCH78Z7na6imHCJ21ad",
  "key26": "4R58BUUvfYs1GpbYGYqsjMf7RvKVfy5C21GJddQH81mAnXsgkUW8d4t8fQzn5GfG7eXAEjCmF44ydevr1e3T3uAc",
  "key27": "57rtXZ9aMia7EZM6qx8ZM3Z1ywjXCqM4EugXRUzZaCdNNp82F59qYN62HbGF9juEWzH6iHj3vsJ6PLqDRjK4Ybch",
  "key28": "a5vVaKwKpDXZUdAUHiMQtCxbmc2ywVXZBUjHwr1Dom1qqyU95Sg7KiBSg4anb2ryVgkmPWqHjRBuJAz9tuUNrh6",
  "key29": "3wSvy8dBBHFpYdR3xTCNFTLSZH8Mh7tvqfC6UxPaK4UNgHgKtxdCXc5tX1H1niKujvLKBQcuxpGKZM4Kx4eytQJY",
  "key30": "2XGp5pvZULmn8tPzCegik33tRVWFpw3Y4VSuhnrtKFpNDdbnzFTM9NTZTb8XD3BgiCgCH83eKkdpG7pYnvQsBE53",
  "key31": "5vp8NyqqjvnosxnXpZXXjbUZMjWxoSoDcm5PNNMBZMfUm8sU32W6MvyUw7mg9uwZ1sz7DzDiXpRfLkwY2N1e7dN2"
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
