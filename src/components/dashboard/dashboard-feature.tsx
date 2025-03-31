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
    "h7jv5ygkwqfjSWAtLwFThqpeHc4tiyfn3gSwBWSJ1GTizjD1YRcNKy2MmkrSLBtUWWo93e8u5ZZjBQEWMf1sUfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Mfnx6hZmx5Bj6d6TH5KUyV7EL7fPaHZbs6matVxaLBuCeeivW21y8QYg83qYqTvkNMCpTKhPpYWSMxpStAcynr",
  "key1": "4pfSULdgNmyV2Q93ZUJFh6iezcJY3t6y3RXKr7T9LNnVgXD93nzPHktQw2XecfodeRPwjhU8qWVcTMc3TNrKCh8",
  "key2": "5YxpPmzvVWvYehyYq6GxnDEaetU4PGw4HY1BmHfxSU5jYJZPF4QV6DMKcMa7KKE4rNEheYzv5z31L5qdpa2nzZ6q",
  "key3": "5n47hS1rKLkjVobX7R2HotF6ogNH36WXxJTJLbaW3pNVWxCmoBw2tC1AWX1Nwfs4aqZcvweFDqecjBux6ddXrTRm",
  "key4": "eXCsg4wwVJfQ93BdycvCTWRbznY5VWcTsvMEwsJpmGWN8jTHNCfCKBTHtNkC4XkGpc8zif5R35Smpy9kuTHGMZg",
  "key5": "5pKkTTaxtAryh4pVuFNfwVxbR2GLh2u89R52UahEmZkuAKuCz3N1j7b1excdRz3cWQtwWZmnZqwGNznic8Q9DWeH",
  "key6": "2CtqBd5FaDCxY92LGo2Tv8c8T8Azoh3qf6LJW8aiTCaN5wFjEhXjHJMv8ZqB5fur95Wp6dv4KgvKvLWCNYidSdd5",
  "key7": "T8kDeDT9gZBAxQZ8qtYuzHYQnLC83zwGAU27kD9Y8FiVKDLwhnHTK7UjoJ2d5N7HwKGwagDh3MnF3BAmvpAa5Zn",
  "key8": "3KPQzHC4eBstUWDUMKdWq9Q3mFnmvrv9BfCapMEjyLy2vPb3s6qDn2Fas9cQGFG4dYZAK4695HV1FfsepHPNgGUK",
  "key9": "3p3yzEoNtLqGaFVAecm3eDta4h8Jko55wEQbu5svAjNJcJVxkSAi2DEyVSujHytrQXyUXpS3doLEhM7U3eCTH6Mn",
  "key10": "3UEapjyb3siTAmwucUqXECnDJaaAphifEob5N4QgzzfkfYEBnbyXhTHsA2qUYxM1p9iqJjHs3zednZYvqze7NSQc",
  "key11": "5GJSdwvSAJHnUAi1bwHcWJAUM8tQqmRpPHwEc7j9M7chAnYz2XRqQM3ZfXgCWUDUQM372dh37a9YsTCCbva8NQUf",
  "key12": "3iHoxu98k8uHwi8puUgpNPSiTyjHUK3juKhWsTumbNCWd3g31yWBurYCYeFUWtokiAHp6n4Pogj74m2fMNNZMa4y",
  "key13": "3wTL54KamJhBP6qsDCEkuBAQ9DgG5NUShf9Fz4xQS4ArAkCPCcNfbGuWBRob7iSHG5CMkUN5aq35K3XjDzUrM1UE",
  "key14": "5RGHYcKoctZEmpQzU4e1m9AH6htVRgjGv2b3gLTguEXuDgqmxUh64J2wkquaKzXHybj1XtNe3FUKfaDnU8JQJ4p5",
  "key15": "5jtnC435BqFWTgdZizsarW3CaeZNJfJLdBNYccqPTj8b7dgJzsLWjqStAJhCEBaXGTxqP4brEFJ242Pjsn4uJ67A",
  "key16": "2NE1nUXW1a3my1xarf4dCmr6FzYtjv1AfdfbAKYhL5fUhHUtVT9CxgxdrUhhcCC3KY3NbnPsqt34ED84cymxPHBD",
  "key17": "4eeMs2hgNKHntzSXPSxTtn5omosjy58E1dvSa3TYcbgTByCyt7u3zY5Hext8uppG5gTXA7Y5vZHbhEdVEibaiVUT",
  "key18": "2UgBdNgrPuthei2mSfAMyUzkHQ22M9Qrkkk2DgPE6PAsCjxW6QMAmuvTgF3LKL8GFyLztnR1qRNqX2aq577HdBi2",
  "key19": "v8rD7A5vYrYVixq4nJvGL5AUooPGACLi5TrrPDqSh4sxZg5VcNYfwXgjjVcNqPHH91AFpgBYWnjsTgPDCrJaGbZ",
  "key20": "3gtoMUjpL37Qq389jeqBWvpVECNZyuBM5e46zz38f4C4uG7FGHgNucWQoeVFLgT3qMEB49onVX39q3P8F2JybKkT",
  "key21": "GMftNS2iVk5w9Gt4KBWUw7RqpwKshosw4SNc9M8kdGEz1APm8ChhV2CfAcci4FXJ3pPA1RFnFUoiUDxHYbtVYVU",
  "key22": "QhTfNdP9vo9c9gThvRBNFN6PPWtMmgzniCC5XLnr9QMBoAvENNgbBzeazi1vwTgSueJm5YdGXSkvH4sm6t4qoQf",
  "key23": "2DUNjMdNCY5cJK1Pg7fNmXtst5M8x18euUbGMGFRNeaAJxJHeh2BJ5yQw8um8aNbL91y7c2f7Mwbf1WBh6MRY1qM",
  "key24": "RqwmFdoTMVmLZJXyMCZwr1gxJebkUP9hTpPuXH3xQ63dA1fRmgjCcouj3vT8R3wTSEPZSc3PhXM8uHsqJ8Co7f4",
  "key25": "5cAqYYuwmFpwsZ2bzkU2Z33BG9C9SKQEfmz7AtsGiyhjLoHKeZxz7Jke6C8WnMJ2X8pcMFaCLk6GhQh19GhGLouG",
  "key26": "2bYPbYhzg9g6oBX5gv3iWXsJXmMLEsbBdWyzwtuY8PDVpcxsEbXzSRz8v7S7Nn9Qngmpn5b9C6YZSi2hdMdsYB72",
  "key27": "nb31vKFvc1LphbR2HiUcowbs29ZdnaeqTSvUfmAUoZqwQhyveeHAayprXrWNiHC2xTzjxCU8pdLDuJvqK7y4J6E",
  "key28": "5SNLZDnJhFVuD2iK6YhJnGm5ptRY8nYoWZ4YzhDa25nap6Q5TkV73BopVwnf4WnCFcq5x8Hf5DMQm8aaFAPYtfCY",
  "key29": "569gqX9CK2kEUzm2MXFs6DGjSds2ex1CPz5aWgc7gbNjHa31hLaz5SGc6we8T1PQJHUFm1Q6NorwhQMDDE9fpHVN",
  "key30": "5bwrmJTFAicCpLMgGyyL8QzwPFhDLSh5gaC3zre8oD32PipGK5zBCxgA8hqeQdEjb9xDgBdqMZr6cmihxQtwEZmU",
  "key31": "3NYnGWZMwFmo4Z7XffGULzx4nXLLj8VvzDm3SB5MkdTqmr1WMbP4YUm3pziPiPwm2g3vYtzYB12vc1quQkrpFe4Q"
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
