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
    "wvYnqvPYHu2VuAfPF5PYFyAeQGitGwUUg5268rghgeALjqg6fz3isryqhDjAwE4N66KFK3paCMb1pKWvAqDDjTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634NEs28g3ZMtCUFEWnfBJ7r2eXhderXw1obfcMavPcyK9AtnCicUiNKN63eijXHL3ehRqPNFzqT6XTVfAdGKAuM",
  "key1": "5Vg3s4UWrzdbGg4fHzXr9RcBEHtXQ6pRHNT9SNEgKKEubLGx6wjd5nstggffSyfvotrqt8GeetTwt7qy7WMNY7pz",
  "key2": "5roPmGkz83XJhnMaqJVzFayXTJTzvTVqkN5gLsFBGHpmXntWGvkb7wGWZW14Hs72oWfeWP59M2RSiz7mLAY7VwGu",
  "key3": "3n3yh4ZeSGySowXYJDsfjczttFs5NUtHeR8fpNkiP3KkLSTmnruG5oNSgmuuhTJt7v6pqxZcxi4U8ARXj9Zgm2oM",
  "key4": "9ih6hucQoPTaR3jfSqJuA8CQbnQzQ5pP3CKyfWKC6sQMkgEx15gve1AoDZH1AzpPShxqaSLi6eNq4UL58wo97bE",
  "key5": "2fT94CdH4dCsNrFV99rF7YZZjUfwjbwLSb6pb9Aksg7Av33uSoqJb31MiQJFQ4jJEeR3XymLbrFUVpnCXjazpMPL",
  "key6": "rdXCLH9Q8zUMndfAVcFwe2sZkynEsuHcQHkD9La9fm6H1pHauk5C5YhogABXw3MVBuXPgWEEZY7BucHxFviD3SC",
  "key7": "2GN76w8ZcNm5jLL8DEGSH8gJuNuHT3XpKtQJkpmX39qq9eopVx7EuoZAwiG3c4TRJpR7CsP2k3asM9YMoweVGsZq",
  "key8": "3e83cudxxKksS4Gm61bU4Cd4hbNXuRwCnDoHxSdgMjnwr5d5EgVks8QacMm8j8YQy3uYuUXcQvFjoCnRmGn89Tcr",
  "key9": "5VA6mk2cGwaJPyoGrkFdjujbcmfNL1BXVUMErBfLsuvDw6YYfFdH7fq7g4aiPcHhKCy2N7Vi4Sf8oyE662h23bzR",
  "key10": "4iosYzRpaiAP5XoE9vyaRiorYLySibMBN82tf14Q13j3sxb31AnCy7uRQ389GT3BjtNVPimUXiDZhddtxjTuJk2L",
  "key11": "4bTxCcLiBMEmodRLqANJqp35oGPobrL3SiYma5pdw9jArTxe7eUcajuCCB4FYMA34cDTrY9E4um8ao1xXWLTkBTw",
  "key12": "3J9DaRqjQawfN9itTiH258tQ1Ra6FJBFjHX1YxYsbx7KmrzpD7SR3CfzHa5actDCWaVQSpUCDue4GAdWqci4r8q",
  "key13": "5rVfxhR4xjM1opnnixrjx18icXDhAwqt7SXiEJNMWqKZ3maCMaPjbQiLHL7fBRdRWtKGLkneeiFHqEUoThznrUNk",
  "key14": "5hEtYoCwWvNwFdqmyYJJNuprAZDmpDsJSAwUgvy9nnLdh3pczY7QBp1xQpwm7em6vDYd2RZWsYgLjRUjJzhbc1ec",
  "key15": "2sj272nwV4mP23SvBeDYkfUT82ZkxvqD8P5ZQTnRygh118x4YPWMoUzT75tTVSfRTHycYxemEYVva3eGRWo22S27",
  "key16": "5qVdKDx8Xreb5cDbFskg4Qdm7TV56CewMR9En9T8YGYF2Qhe4JZBncWHnYo3ZtvDGWWn3RbyoxXCdphi3pUV4Qzp",
  "key17": "47JQwYbFKnmf6sr5tk3pUcAntuv5gzuRgfVYkV4HJAzhHyqb5HvQt6C4YYwpsbuLRWVSkMCJ4rNXw7odS1HCoWLU",
  "key18": "3kBxL6GGfeHjRHpENurvcdnSUPiTcKJAjeNH7ECNracQwddBTAPiHAKvz69RY5PFt1zd6r1WnuG82Uv1bco9Reag",
  "key19": "tUULiSk19HtBEusYBZvWtTutAw6yprUsHXDvhx7ZhrN92hp62bGCnpF2QvQoH2RsC9hFLjjhJCobPw4VXKfKutV",
  "key20": "5DASy2gC7wsaYKZyme8crfAPMPkddEL16bRe9fX7LutcGteZHkHXaYMBkaXKWdjcq3pp5J7jjkh9ho7aRq82dN3k",
  "key21": "49D6twQWsMT69desj8AA6NsYLpamFTZNpGJzTzPJKrm7AB95uXyiBF7vmqT9hSSb8cQL7oC38wD3dwEtLahxwS31",
  "key22": "2xSice4EVL2fEYVLKWmmpbDsfAScDuvX3gWxsh2XStRuVWdWcz97ZD8voBkjBEefMwwSMF76jqQqasXFVYVJYfHx",
  "key23": "5JwMGtEcJi7QqzQtT8jwqdrAtD1uJXYAfQzsP2HZg9Jw1TXg3TRZbQi1eYwBqpuQSWom2ozXzN3sDpNMAPSiHagZ",
  "key24": "26hnAZMWNF76BQEsoEgx5iwomepG1HkQpaECRPZzQVxCnNw23LmWdUz4jD8YmiC1vU6UWkfbFtgaFgE5ZGfrzMx8",
  "key25": "2ATz2BH5HH48BrZ3YEpj9ULUw2fj6SqfpzEaS1bwbfrxmrYZ7KXd7fio1v9QvNzK5MkKBnBGXobhsq9q7mGJ8jDw",
  "key26": "5VpHt89omMNLDWnVvuX2d5gpbyrJUdqXJF3gSfowh6Z3KDTP4BcpE3jMMcfL2iR7qjVe3fBd8FzDUXocmQYg9kYm",
  "key27": "2w5TEH6boSMf8LyLFRh67iokZQWM7ujHtQfJ7JKTQMyEZZHoiRvrf2ecVWQ7pJDKzCtuWbNgT1xNmdaDMae5CZzH",
  "key28": "3fx1hsECPvunsyUM5ZGzkFSjfGmnU53ynsfLtGEB1ocYZoDmR5dNU9kVA8Nbt7iPsEUqd4AhVWLtTLuhvu8tciQH",
  "key29": "5P7VWeLLW5UWaeGHq7U91K4RsDLdsDrMfZ619mnkQtLqRndB8A4JPBkPxYwqTr3f4jpGuArMeZorbpWkD5BjKL8G",
  "key30": "GComRHu3GQtwDex7PYYkMMHiFjyr84jreQXHS51HQfsUoZGqHfFCvCxC6kqPxeaU4utzeZ3BEukQpRto7ZJHx27",
  "key31": "NaCtZ4b8RUP1yht1otdJsf2Gxm7kpJsVVXJvGcHMVzLX6H4PisCAijaPeicDbboZLLGC4D2c9562mb9v8EJujik",
  "key32": "4HudczDnpjAQ9d3qPKLi1GxGZ8JtNiSnXdPg6Z8bKMwAiEA5Ar3aNZ3LFpqmaKx3gpGPRYevEwZaTMAzmcXRjHmz"
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
