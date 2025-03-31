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
    "3H2R1Q38A5QrRWBqngf8J6Qh7xWqMs3ea2SDHBTDNiUxXUta5TWjCr9NZkXWjkSfPLCMmkmob9viiGkXSWjo7zZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65chdZ4ssscjMeVn6qSzk4Lgx7uNyuK8y7P1PEUT1jExRamhrepTUqLJ7zG5PfQgXaAKyeMaGsSv4Q9Wj6oY8obC",
  "key1": "34Z6oLFQEC7MLhQe7hXi6cHp6qzYTCkV3G6HEYpE7WaUxW5SM8rinvu21EVhPpi4UrhTANjvAmMWarFZf6RCfCj9",
  "key2": "2RacVrZiCtLvcASX7aV84B3PbfGSx96yaCdLFAMsmkutW97U7KtZW6Bs9jcRia8ri28yXCgKYE5FERFLDprxJiai",
  "key3": "2aw57MQACE7C1cccm5kYvfkA1Kk5V2FK7iCyekx2qCba2oWBKqbnMSwq8BiJBRCjA7F66mAbfubvhvfNmHztocHn",
  "key4": "5kBLyYP7X2TJiU1vjzF7MyyvnhT1vqBkm3Vs25PASLX5CiFXgEh4gFRobgFQbSmu5jeZGVizuj6XtRzjJPjfhjmr",
  "key5": "5DLx1Gbqrg4MMMh5ghUMStg8yfvm8tH3xz5sE6Etz7j4iAnmcfanHk5NYifpv1fYdF3DBRHXNsQ1ZH1CY1beXHYL",
  "key6": "FDPw36h3o8C9sejaWiozu5Ss98ArmoRHXJGy7powJVEhUuzYNN4mMWiHF38s9WAfJrh4kBGmwZ4m4ufWv3sH8qY",
  "key7": "3CgqRZkVjh3BXHEueoJhXqDBs1stwXsMWzMtKMD6DLaQPa5XVyQNpRZoBDUcdGefMCRhnBfvp6D7fBuej91Hm7sG",
  "key8": "5KmFoPKWAaZEntcYTZgzAVEfB2Z95u2XY4BrQwbkVDdpkG773cg4CnTEfV82jZohnSKoCbXR9DBxLTzfu1zqyR1f",
  "key9": "67Fie7yvhUNggLgQf4enz4sCLMaCLs5jxF5njBv4xm9icw6ueyA1mmKDGsVg4Ng218cR4cVkJ75UwwA1SBzsgDbZ",
  "key10": "5VW4cWpwuhk1zooKPuHZUxgiYN8FKUh7Ybs5jgexe8J2PCBt7SStnNE1LQ8A3zEQ4BLs42nfe9SsFWA7kMbZebFJ",
  "key11": "MUsnXSg82QTJ17Y1VGPRURSrhszDjzmctFC6DrMNmNNEkwqCri9n15nVPFgCWmf8pEPvwCVhFPyw3h8gQRWJrMt",
  "key12": "2EtqBREnKpTzyG9iYVeWLLWJe1JfCXL5PasfZcCm8JySGxbxhnsty9chYZ35GAvPUNrgJ8r3mjyD2aXUasCivXhC",
  "key13": "5B8kDRBdZizGtDFckZkfgxWKm9fjQg7KSYJw6xZEALCV5GcEg1WjgGDeCLddLZjAEVzdCU7P9ctzAJiqeiBz9Vuu",
  "key14": "5augdQMMKGkaXTQJhNiiUEfCu3zpsVGWyETP63jf9yDAukj49sqFPNtBqRn3BSapDKEkVutSDaaWinPpTSc2V7Wp",
  "key15": "3iXQuGTKu3L5dzt8QRYgpS9m6rLhtBAU5BBUzu125RApY6Gy5VPNM97sqhCbNEkrWxZeMh9PiydqrsYCBSAcmjzB",
  "key16": "62ZQncTzQ9nwaBNFfCerJB7PecpVsWcXtLPmupj7ms21vhLTRVHWsByAfmW4GJtTprMGYu1pBHkmgTB9kvxUQNez",
  "key17": "4n92oJbUg9f14EmXwi1w6kv8kPtN1eAySRGQZf6qu56Eac3w7zcdtmhYz2dxwrH13BaZbYzpNzb9gXjgaXhoMjAT",
  "key18": "214XdY4wM2ZLRoYeKzmDxtcAofyWFjKNs68Jb5PRsuncpc6TgRfiXsWjHr9XxRkcB3pRwAi3kBVrwTw6JMcfLdwR",
  "key19": "21y9FHMR5ugbKcF2pbxJBRsSsFizCGtFABeGjpNssY1PWa4s4DNGJSV7uZGcZcvLpzTYDJnJ7hxMAxG2oEDy61nU",
  "key20": "2NfwLFdD5kUSFfFVtGHg3KGzWzaDbynejZLCepPskvy2zAxHgPHUd2rAWAMNjMg4zwKrBRyqhZUuTPVcCFLrxjMc",
  "key21": "AMeGLXT4n3y4aiDT66ZZPArZNnRxV5LEndTzznzkVFh4tuMc3ZYfBDqAfDxR75Dui2JnDo7wZZeapDyp4uoSX6E",
  "key22": "5N7LoQPUrUCPborudPPuwmbWo7qawGESxJTWKSnHRRXPJ2ff45zJ64LQJTbmQqqXLxst5xf2fSHehsdM8VRJ3pAD",
  "key23": "3iybJHgurgNiPMA4hnabnpNdZKqKQr9dQmNkmkqDfAjp9pxL2MWsRWszEwz5GgM1r3quZeeNHPitAqEVAiSMWAf8",
  "key24": "64T1HsKZj2FMsjkWAMUBWGvCwN2ERz5ZbhEBo49X5T7cqqKzn9TkjP1XSn3i9syjuA288JdANuw9LLBYxgqVTdw4",
  "key25": "2PkhS7JunxGFNgsw7ZUzZMkPqMJSqsUtxvpAFi2hAWcy1GzKMEAuy4v9WN4dsAsnmq5QZo4hz5UxwxawVeXMeBLU",
  "key26": "3s5eVZKGUFoxzAK2NRijWJAPWkJVGHNKrK4EuCkjEQ8H76mgiwT2xRaxhkA9XtdT44c8h7Y44L53Q8Fv9ai5uq3x",
  "key27": "5ZPguxSF4oe5kmTScr49ppC2LHdVWRJpFfx4W1yonWRMr7LZqptdejUfk2DZxptsjxXEjxAULFHUh1CuYnxAUWn1",
  "key28": "5rWcwdHznMtYT7bggVVHJuAbR1itTWHTkuf6yXMXWGvG9KgoPjj88EgFKoVQQ2cCCqYVzqLVQfmEK2xRRXZ76NCh",
  "key29": "4Fc4BfaA3vXEi7XndtnaYFmCyrVSjR2D6NapaHvpMt9EJRMcwEv8qythBXjABYkcFPhs5aGVFDtEeiiApLh8fqst",
  "key30": "47HNLWgNDzD2wWFXoPDcYz4c1N97yfotKZ44J9Wvm54EqtdJpp4pFgq3ar7oJ7ScJDBtuFTy65EMtvsvobkUSUiM",
  "key31": "2W9MjxnGy3AzNQR5LyVLhxrGxWKoHFjwv1GcryFQvcKr8zH7cF1NmGpZBrwEgUWQBcrTGqfMWW2a241uU2TQaJGB",
  "key32": "TyF7YPzDdBRm5fN2SHHUwacUAboeDtuwWHY9PCWB8Hn6rYkZp3cvRTsN8T4EmW7fkXLy6f5nZ4VTxrLrtYxmfAL"
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
