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
    "a1UftnjPRBKYWhEgbJct83YmBc9ibj7AJYjfcxCCrB6YPp9hLEnXN2i142Unj8BtaT1aRh8GzKunAWD4yrwzscW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxzdvLY2PbEQNPv16WdbBPmKQiiahqK3YESqvG45bg5Y1Dj8J5oZWKmDCBrZuXgkPDLH89qE74FS76yZyegadjQ",
  "key1": "42fsiKVCEq3jsHzz7nJTFUbTGUHaPJyYPdPBkS64F5zSzfiXQujhrzCEhnsiageWyNX5ZCwYF7AMycp5fhtB7VtN",
  "key2": "4aDue4ixN3Kgv8D7c3febMJ1Fbz5KkXKvAZB9FGdWoTpFcGHruEPpwBEJ8swYWVRVhCMQ2KuLbqEWjmyPMzdpT2z",
  "key3": "2bQiPyGJHHdCHnBKThqe18YJPKYdKYMqEwhXcjUFnijpdpwd9MNteozNFeEr8fSTjGJFmAr43aikeD4MVbLZGoUp",
  "key4": "5zTnUPaWhqooxWAPM6nj7vW6fJVafYx3LqCeZrPgrcAWg9EZGZb1FBTRbKioGKB2DjLqsvjMFgfhYKHCsnhSKJEk",
  "key5": "4VsAzdWZhHt4pqtsQuNXBeYdSsvHm9jbesKd2LKq1zoCY4wcFV69cV1r3tHtcKFxaHTe1GW8vEJTmhrzsTbHqpqW",
  "key6": "2214HFARtwJrYN39thK8xz6LfuK2GkPNu1RFhTwvf3ffv2yPxjfJXrz1p4HPxRtqa7QjtyePDUda8L7xhyLN6SKt",
  "key7": "4MnGZRe8BWyymYauPJHLV4fWrxhGZN6nLmCGoy9bDrdScgshyJw3Pc3XF6nPCMsS7iUYJMxMhrmx8FwkmibvefNu",
  "key8": "5WzgjVpV5MKtH7rz4rHcWtsXGofEMecgZDHwfKuuZLQP8PMMeVqMmgwgWwGJyWm9hUpGiM34NrokZiWEGTVx5eti",
  "key9": "2gYubTG3iXzuY1cDbZThRz3Th1z99n4AYV5usoSF9kx7raGWwaj98vKVf1i3uM97oF42LqK4qN1pLcQoXec761Je",
  "key10": "eiuH5Zw8NQegKmZMAJPtVZuGiUd5TrebLdXZY5joKR6qQA8CBQBjU9kmdRuN5mJjRXnrUeovbAqw3V99q7PeFS8",
  "key11": "reiDjyqH7JZ4FyZjMbz5yG1SGS1iJKshu41dxFyEb58vkTdVH2SrYoCihYeLq3RrPL1mqBpf49XyQgwANZcWohj",
  "key12": "5rnFP3NDDTNnadoG6L372HqPRUX2UsmBa7jKMXER6ZspQpeHnzGK6ofjKAjC4GvTwgk3E2Q6eEv2LgtpdHK1nYyB",
  "key13": "2RUWc6tt5qgqwJe6qEZM8AG8V87GT99uHBfYjBqg114hj53Qmw1dHWPdQAJXgX7ZKFDFEyt6ZYfZSrmDBFeWSkk3",
  "key14": "51PbYbnHURTb2MtQxjva5sLq4ryZLUaGnsWhcJwuYZPJZNMzbHtAik5Q7EUgzLVSU1ak7LwwALP1GTjPow9mgAL5",
  "key15": "sW1hS8yLTaJLLc7tvAmeP2Gdr7WX4EuDRU62PTjm1aw8Lq4QZVziytkcB9sTU1nsSTFXv2W5DAFUpMGVbQwf92A",
  "key16": "5VDrnpxpbcsMt63WMgjcZnSDGnqxUz7dFQ348morNURA57PF9pC79vW7w9BPQPFAN673yM4P59YnWFMq9XHyxheU",
  "key17": "hy4CfBjDBaWtQrxaNmrtaTgLAhZiiNfB6eUjn7UJ8PafPBHgKwZnGCTKQA1YuFjYYwbd1W2jyRP6P1gN2LXQxZo",
  "key18": "5bNL7y2xETJFcLFGjVngaYaXyH9gQXjX2P6r8EKQNbGsMzF41B3Khsfg2W5HaR92T7d5xrxBbsfsw66kV3EGKqpw",
  "key19": "4BwtpxkzwYXhpyCrdVuR469jHPcNi3tdaGg5KcVHTwiKSiMM5jMM6DsnA99ZKXgo7qtnd2ehuFxL8TZ1US2BAsPu",
  "key20": "3qHNRkyFVjFnaH7KNbex9mB1tA6fSumLMn4Z3ZJ1gZdTRmnsWmpqKdfhYZD2oMEFU6NpqLddZncVGVXA9bdfpqdD",
  "key21": "5ojfKC7nFJcQ6LBDGAgtfZYhzZBUHpNkNfeqZPgHL3kfnNwdR7DCcnEy4MshpPdYmUx7qqxXiTYBaVF8fedBZvaL",
  "key22": "2DKMXQu1fLApnmuLVpCmBzLdojTHs1Xqo2RTRXtaLSwWQbZrKUkKLM8A36Txwx5UG2oSxxiJasHR1PLsxL8ar9i",
  "key23": "4N8AWs8FCHK4sEpwpqp6VfDKcYRL8r5RbZJNpKkZtWpreHeGF5YzqYYDdchDpLBV3jX1woLZxmTCNSVZF7viGWZb",
  "key24": "jGDbD9zaTnteJy2T8syP2d3ZdXWuw8aAhyeKgq9EfFWgDphiDDGPegyG6yJmPpQ5qn1YEX3ZnPPzQ1BifEmBxz7",
  "key25": "mWA53ParqhDqAHG5ZEHHo9SNGp1ZCQoHxWbDt6ZKSkaeSX3GAe3WBY5SmRMh6Bu7ibRoaxdudhXcFi23CGBb3Yt",
  "key26": "2qTx4iT2dfUUTgRm3JoSCYcqMYa6gktWkckZBsKdwNNLGieRm2h81r14mgBukNx4p15rVEDC4kYp7Xkr8geiYDYM",
  "key27": "EFu6v5ZGaZbXU5QVbdfaerDLWTCGMj3hHuejnf5hxY2TtCu6jhahyXjnWV5DfqBBP8gV5pob3PyDPANgghAPyUE",
  "key28": "2ctYBt4Tpi4BSDWScLPRie5dnhvKzodvSjC3eFx35H2wLaNTpjS9LEdAMaDkAmkqMpzM6DtXYvKVGJugfREXuavm",
  "key29": "yM4pikZjAu7HogpnD1iR8dJYEz2GtyWuL7L8b3v4M7KKwYMY4hxMmwqqcQKyAwK1ErFATk4UDEiwB9ZAdh8o7zm",
  "key30": "5Q6pHgEwoEjFvjD1gQ4JbNpnseB8pcdJHeYRK4UpAenUvRDtjEBa1bsJRayhARD3L6FLTqBFyVQdXsMDiQUYEHXo",
  "key31": "UJL878dH13NSXjqr2JnGxpm373uoDtexTSjQJG7sQ81jnLo3qKgEDGa6FXbZtfqGJSBFqvhnPPqJ8UFGTx8pDG4",
  "key32": "bLFVka3jLy4aB4Z5Di4GhYwLeHwe9K9oDmCa6m1dUmtEtDbVtDpnaJfRQ925oPMbXzUNMMrkN42MGCsAno4hfx6",
  "key33": "5pXjeUsfw5nLdKZqu7aQxunxLyMPjLdC7u6txYEjG84Q79nHtM9ATKx8kBwAdhby9eQstU5dWESopHY5mg3ix7L3",
  "key34": "5meCkUthQJNgVrRUUxo7CfgfYChCAeWFZLFft6NJm7XtAS1n2CW64kvw5x6hv5TTMeZ5SPQV9ozeBYgrPVVjVnLu",
  "key35": "5d9xm3tmQEBe5K8MtbW64BP8VXjufLskfGmM6GrHh9kY4yGAuu5QEmFHqLYX9Vz6p4h4jdimZVs12oqPNVzAimfM",
  "key36": "fSaUkXxpQxM17tGg3QNeV9VUnHvchcTQY3ZTjUrWWpwJgLbaZpbgPqvzfw6ZB4u9RKSZdd6aFVrAwjWVF37yYVN",
  "key37": "wtxTtzAr5kzsK6KWtPVWV7oidc3XS2ZKE7VAr8y6nKf3uRtksZQG6q7vf5crkt6YtcWkAhqNdBfU5nQpb2FEYhQ",
  "key38": "3GFeQz3G2mdsKG9811sPNYmkY5FijArAMPwsKUpwxYZN75eD1Ht1kmi8Pm1Jisnuo53fcAmG1RUoSQgJ5x7UEuWz",
  "key39": "2Lwi8tA5HpEFLToHRN6Afthhaqygv7g1d1Mg2g9w7FKM6Hc2GurgJ4h6v81RCs5b3TKKeGUgSLGpMwhdPMjuwMMz",
  "key40": "WokHgMwvWSphGNEnPBtJ1VtZefzhJ3HFzdcccoM7xuVbJp2dHsYyEnGDKoHjFbpT6zbViudEMFRRQP6ogCWSDTD",
  "key41": "4zuQamhDHuK8jQugT7NfdS3vW7dFLyivDwjt6cRMbZ29Ew8B6V8xEfPJjW1jh3oXwrwvgmbk9y5AGHuqgfTwQ1Dx",
  "key42": "4jLJAnGdpyhZyiwySyT6ZSgSYbaxCj8Y4aSX4Ls9568zoeh618LxAL557Y6kyGWBYJJUAgRYcoUV9DnuErcZSiC5"
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
