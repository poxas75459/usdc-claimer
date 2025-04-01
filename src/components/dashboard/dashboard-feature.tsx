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
    "5KpzEipEwJuNRaSNST1HcQqzYN9WE8BrPDmQRYx8aygRpkgCw9QfzBYssRU7USuTEwfLFVeBbuZD8XMzUPkRKgVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hq5BvCrzH3D7EfvzVPo7q68mEX22bbX688rtDv46Nrbd8gQr6Zt3Ssq95LpapbHqmjy5a2reH69DAqscUShdqru",
  "key1": "2JnVNEPeF2a1VpTgHUbgA2rtuAwX3vwcYpcvR8RgUEi5MsVqYR5wRMtKWVbrVn3tF3biR3qwiUegrNq2zmQyDoJk",
  "key2": "2SkWJbXy8kj9MPPaEPrJbWPNZ4LjtYyZLchhoDXw3cCQ9799TkL5sJqrgpomEy9UfhpTB1QzDNA7uGDm8K71uZQ2",
  "key3": "677VHhkhzGx8hu7f4aqEdWAfwLkKkHZGzL8Jn8CR7z75Fm2hKuJ43NkvKjJ7Ri7Y4eekXMnz6HbYqjUydDMRB9yU",
  "key4": "2JwdxcNSDeU2VDzWE4UmD8vwXuPYD1tjMpfVNiuuGMZT5qm9bEaVP9poiWtSZobJf1yskxGM5Ya2H1N5BbLwq2kq",
  "key5": "3Axgv2c5oKM6mKoNRr1GXagpA4XiS72m75cBz9nF1MwmFqZC3XRH3x4UsWvS4KrpiCPCquMJdrW89W2WG2pstpM1",
  "key6": "4Bg8BQ6RgpmLRTMdzq6ZCizy616uXqRjopAvyW4oax6Shw1bJXvvEEvsppuc2ZNaQVpiMEmcRALWNqftKofgubiP",
  "key7": "5WKGtJkni7T75vxK4Sqxn3csZQTuoUaESP8tPXeYsoZiCkiEjcQYUT3wMqxTJioj54rQv65aR9YeTRqPHsyv2kvy",
  "key8": "4mSqgYkvWEYY2s8V1qE926jhjYjVhR5EyCRMQpfUMCjKC2jpQ9EvAZXsTxiYawVnLdHs74oYERf1PMP3ksyinRtL",
  "key9": "28X6tgc2JApwTGp6K3CnXXH574YSrkAX9GU6RAvKHmMkTL4qrSWSZ4jJsoXopJPPfDU7XVKKkBJmueJBDMuKmN8R",
  "key10": "27cXZXTqiYcEWaNsb5kMPUGhBtE78Bw6HtZ9GmnwM3RNWZHBSuS8ToNqhGiammsCNaYrBTvb4tD8vFeFqbQCyVKm",
  "key11": "mkec6HByhXFNVTC7BdgTdTnB1KQj8q6ctoyUeHcvUxwBRSa4cFYncJQNvFZQufSF2xw8CcYDC6kNNb6JEKQALVW",
  "key12": "52L2WgnVZv9uygMeUkALH1HRTqpwskshgSeSy41gCH5n6UK8N4D42Ku5iZUS3QaH24MnB2yyMaSo3LAuWqNr451o",
  "key13": "5YnEp8hNbdcCt7khkoZ2fHtFMTivYvs6yeahSpJDGcQWxQFfZ6c3cQ9ctXUJjbcuPtzzMxCJwKzaY7wgNt6WCp5F",
  "key14": "2anegzDaPa4q7jzSgz5efoCA6kQzr13wUnFpbQiTKTPKqxD17FF2Ro1ynWRGhgyWEHSAtMHG7hnSRmK6BAmZsKpy",
  "key15": "4ph9Ehf9jqhECCAqvDVRXsYK8emurr6pCmcQVoq3itVyK3hCriMmfGZpXhyEM8wstoPgbdmcafaygFM1wtSC2ALn",
  "key16": "55DPUXDMMf4gRkJUL3jp8j3LvG9aj2ySB5jjw5UjjstUFWJbRt49JeGv33QDPEoq52MS1TsjrC9yMNtJEiMeeDr9",
  "key17": "MDqc6mF1UiiBmbDaGhxs7VwTX6yVx8jERjh4DECNcZrCbXAWvDqnm1A5TUCtkQWDe86M4wZAoow2KSBLUWwNZkk",
  "key18": "jJAMEzb3qvjKACL3Dv6u1dxFEQp5bRC1JYMG5vXzmTXyJefsU93iukCB93HZjQZW14YpMfWYP3uaJiriq6vr2Ju",
  "key19": "2QDB9ExFPyz91RD6tsSsT79njfvbdVCe7BZDAmRtoXuAA3UKtbFMvmn7Zi8Lj6ixHNDnygLCLeryY4HVafdLi5tg",
  "key20": "3Phu4YKowg1jZ7u9mL9PzfcKQsAoJeM7KeQCYPTg5RRQc6gwN4yQ8VTpD3oV9313q5m6eJN3okkNyw8N8ChNbuh3",
  "key21": "36m3yanWvrvmQgPr5nYz3wCudzp21Ws19fCFnZM6Qh56zRQvJ7zdk8y2YourqTcSf6QeC1XxQb8L6t3TpzCkhbCs",
  "key22": "66jfqpjBnX7AtgQ9xHXpRTGKvFKMo7gkbcpM5r6L7z2KRY1P4J83pwwaecy6fLpYekinJdFQ8ud2J23Df6tudc9u",
  "key23": "4CUtWR5rp7MwgSHyEbQ6tbKX7jnXb6aCWPuxggGmx93majGyfSRaZt231YLmWdAnoWNf1ymsaN7HFH7PX8gg1NPw",
  "key24": "3PEfk3MxBVHrGk4KfS8jd5kH7yWiKo3t2ThKKKrDmMn3G3zrDchdQsuA7VhnZWKrheX41RfEWH8Jg9qZoRMg3ZF2",
  "key25": "5iczkLQKciQXjFyj7FJLWDoFZtqeqWBXi7DyVvt3Yk6odZcJsa5WdVpuTwo51SXEXATYyZPBxUTswBsSEfpKkPJo",
  "key26": "4YiR54h4bQxQbfjtoXhQyupjpWHshD6sQG1mkWhqwtz1ACBRxu82mBbUpwTYqyEncxByhLmKR4wTR4bRvE5tkuB2",
  "key27": "3VReR86xBCWqFnSoKCbP2CrJ391oMqbnkaKbcb3mD2Vkqi5XNp45hbituUYV2B3hiz9Afq1wsZrh3bHnAZLypv3o",
  "key28": "5CvgJYbqSuwFTPj63fUnN6JeY4cM8SBqF3WUkmzXJQ627zrgW7piU36tqU5bj39NVsoa5RfrenqMdu5dk11sGqhM",
  "key29": "37RYsALvpA2wz8FPvqqftyRpMWTBe7tPQfLj3YN1ZM7NSecW7uAXi45DRZN8Jxgn7hkhZrDnDtUKRhW8VW27hJz7",
  "key30": "qjDnPtktybpUhDDEWzffmte8CHW2momA4mpnV2nkVzhKETNpwy1HFuNy1TF2jNxvijah9cUJuDBwYDQ6nFqiyPx",
  "key31": "3fJEQkGDwKzQKKeL56d28NPy5V45mpeUka5iQ1uRMZ72V78mv8i2AASfqzGY3FZCxRHVzYfH6T39J5yXkpt88N9B",
  "key32": "2pCpg7YhfdecCUaq4hVy3ranRx7L9Y8EATfYBZxUcFYHR7mTeuvbSW1rExRmLPrZsEVtdKRdc2PZNGy1bz5Voq7G",
  "key33": "3Mt9k4zMiuycLsVQr2PUTGq75XuiHQKDCL4CMVkeACmZzxAwYiLp6Vy3UGkv3kUvys8NS8rygv5TW3rbyceceiEa",
  "key34": "446pELGtjAnCactpZ8qdaELWC9VmTcA8BUwRxfFpL7LmS8kTJSUo3sFwLiY987vz1KdjMgL3j3kc8kGJkNEKZaop"
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
