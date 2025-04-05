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
    "3wcQuKRLUfU9HrYvEkmeWN9adBXiMhGyaNzHc6SSoLz1iLBkoW4b1dqZHfe9BNGeyXFQrymgci1gumKjv3rgDTP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1oxKcAiJo6Z4E1EYc38PzfM9G7wCJnHT2aji9j9UK5ctt68jcPyi8DrStXN3SDPwpw5HQpWZD9YM1fsusgLEsw",
  "key1": "3GSUoK2fkmw4fBybNCfeTvQe8PdiHEKwuxHzyY4kkSPqVLWhbBtorHcVqUM6LPD9ta3XvM9cU8XCV1yuNN1BBz69",
  "key2": "52LzPrxQbgAyJi6u6fsp85sok7UFc8mHpgTYgJb4XqVUiX1yoEy5Dcmsrs7GCFg7m9a6H1nebe1Va9kDjuRfrWkT",
  "key3": "s7MjY6e5uWsLhuYmQNQ7EabgZBf6Pv9wRM5btcc9WARx5b9LN3KJKWfimETrP4ZL3PCk4NrZTdaKyAcmcLHM9Ff",
  "key4": "4UwZCJfqqGidy6q63BgzTx7VeA8W5wtG4xsrij8SHm511fNAaLH9BkZqL7mitPHKczCbZB6mvKkmhvSLwaHGPBwy",
  "key5": "55WVYHozedr6ybgPzhKFLQ1x7btupwbg1vqyFZM5zZLasjS9duQSjNwZpiGWco9YGWADF2JdUn7cV5ynpfjd8Ex2",
  "key6": "5qUJmtDKEvUHfqsEoPtZhd9F97Qt3r9SvkbRatcziU1yFvhJvY9SRJRpVqRMyT7MfL8uFBY6hRYvECYPXLXqQ4cZ",
  "key7": "56fvwPcAc1AUNDuQ3m1J1Pvz9xqrMsATKRUeLjASnQJ18eKjSna76TmSKcE1UhCdB1eAhMfDqLDQMSKjR7ncrdME",
  "key8": "3DaHYgADj2CNnyhHLfnVvjnY4Ernk2u6Vpo7HQWeLVk4es4EWE6k7MEx5EDhoZTektSfwpAeprJBiAokfFpXEHQm",
  "key9": "366MFuoUHsBDgjxQ6TAc18TiqzUyWCvwmC1XL6NBGZdbptt1c89oC3gCtrtPmbngLcv5SaFURBqi77TVwUMWWntx",
  "key10": "2dPNesrpHjUrdpYzDwUHz2mkVJg8UkXVoxxG2nf1o2MjyyyVe57bG3PbzkdNBRmDMo12q8QhnPxWmH4fmZAJRfcu",
  "key11": "4DfRB62njNaPD735ntELGBfu6UpUaq3SemQyujALczhT8xRX6PkWW8zme3oKJWkjRu2UgYj4nNmjZDwBkA6oK9mV",
  "key12": "AS6irLz5MeWGHxq4fd6C8YLNYH4QgC1BuPTfgGQuVy6eC4zCPPfQcW5aW8LYvDacRQWPftn6s11oqD4pe6bHZ5z",
  "key13": "4WGfirr1C1Skz4kLDDRF2BTb6aWK3mfcxmuCXFMRCs58QgKhwpeGc2QugV2oBFhcpne29BWAsZ6u3gBadNVKMPXS",
  "key14": "42zfE6qeDFEjZVv4jNvv5n7y4audR1t2RNZG1fGyCSsTw7iuxSemupuquNrCs9WnA5ZATdLQ2WzL8wKqbg4qYn9P",
  "key15": "Tedev42uNcfcm6qbjWoHFukopu9T5CCDTTBeNrkdbVkunAX28L1oKAht47A9ScAdA7HnCHp4CTjxaHHswt7YYSk",
  "key16": "4nkuLqLCqhgah7fuRnwCPbvvbLyhKSvuJpGACuZ1t22oo5UE9ErmNW8VPenegMxgHbKMd21hXXL9TcdLtELRmBXS",
  "key17": "3BnbZQpBRTDw3YjABGwbJBpEAFUNivdSZytAeLZSXHrxRX8dKT2e7j6rUPcqWfXFQmf9GHhB98CJX5wwjwRywHZE",
  "key18": "3GnyLaxjN7q7g7DqWyeizkRoqw5Tk1prGsJrH9TBUFG34rxB2R4VcW8xh4UDhMFk9FQkthYcoCNzjzUo9qZwSMT9",
  "key19": "2PgDt2cBGL5WFv5NpkFiHLaTacHrLo4iLk5VhC2RmnvszvL1CthHP4X9JGHcjmcpPmZwygeeamwrUtQDRYb6cznJ",
  "key20": "Ue882Zj8wJpzWTb2bq9LxkDJwpDmMaPUx1QrKp3BZ18oNdGPypqKBJE6Xw4YLTupXdajBMLTcqcuj3aFz2KF7fo",
  "key21": "2MjZ9BwrBUqD9BpX1aULhVM64CDAw9x74zZSiGVj6JdVWWJh9dQe3ZyidYbo8YJrZxajpvCfB41H4sb9zKF5Mdz2",
  "key22": "128hyYzG3qfRnuZCt8eEiayL8yUwipANjn6CXiRXQvmUemrwQf5J4X7cc7eWuwq12FhrbmE77zWUBpMT7EcaohUW",
  "key23": "38ooi4MQk1ijuEKAPVNHKRrxi795sFgz9x16qPPXzdtUKNtvhnvD5yyVW43oB8wBekbY5zEUC7RyraU9PS85hsRb",
  "key24": "3NQNcazDmnky7h81fomc1BC2Zgr25gvK5z2pPEuEtUYPFPT7FbXwzDWunvhgnYUtjN8ksNy8nkjAFvcu1zeaJa7E",
  "key25": "4CyCsoiYuCpLyYwxnwJzwsjADpAqAdfXqzBnumQpPyKu52ryforZnqgR3EAxzBM18Kb8Pa3NhqoPUpJVXd9KMaVo",
  "key26": "3vW3XeiT1SYLyMAf7cTPVF3iDopJkKaXoU5WpFpqJNNczqEWhWknpj2LA8um35sS1hKPRirbjgLN5decDyDmYZvv",
  "key27": "2Avo197BctPHjG6XHngyRZu144rLsPoU8cX9WUJpfYiGEzkpNpcKDV3s2cDhCRwh5UvWMmqVt3EYfxhyP7fBA6si",
  "key28": "DVBpM7WgHogvLYjAHmj1dLmnuHWSqdT4synSjpNC3uu2Zm3DAEQMg9pa7cYfVLaFjHy2YJEhmWaVppqUf6VRUnZ",
  "key29": "3xPYPsC6R4p68wapLXkCupsJbEKvpR1Nn1aosADBGjdPr2Keo2BTKB4o4tF2nWevUnwN7p1J8tbYzBuzXX8KF9ai",
  "key30": "4vtB2TQeoh8QWxna4qVXgeoygeiVW3RF4aDbYM5zneJbqpyT86SVRkqePDrH5P9hS9hxGRnuV6pWq36ddiVoYLcC",
  "key31": "5JbtQjCCW5CmExtSgKjjqxbMhorU2DmtFewajFX4TDV2s8YayTaZomDofeXn7qGMRu3c91J81RiNoHsj2bMyQBwT",
  "key32": "2zG24GozoLgy8g3APCvFmKaq1F8iois8fJGz6xzYooJmFNTGjeqUUPfA1W437dySMqLA9uJyKx3qFHnm34m4V4gz",
  "key33": "62oHq97mi1v6z6achgVubjrkn9T3d1WQjB4NHX4HUaF2rUGP7HJHfV4PYQhQCdQNDJo1u6VLSJ1xmCVK1mUJ9nYn",
  "key34": "2N9mVxDPinvsqRCBNRfAU2K3WL2P7ayPDXGx3sAbpnV2YYkrSiH3uUhHS3NkakeY7CiiCPeJKLVy3u1iMAEjnA84",
  "key35": "5y6k74S421qeVduHSuqTvj6WErBq8moESFmJsLnVButgs7kJUApa1eB7LcabUyms66dy9UQrxztwumA8KJMXRA7z",
  "key36": "4fTjkTAC1ZVz3GCsN6zX8NWCxwZUDLP6UYNUkMVprpXGEnVqUM3SEH8Eh2hZbGHWgg6oKcfR2Qkvb64hW9AuZcWA",
  "key37": "2bg7AzfKgRBfPu1AYskXQLnPQtbaCBUW2KieFUDGWauMTdVY6vXK7Z9xFsqjtogc9dp7gubFtWFXrXkD7rZ7D5Sx",
  "key38": "4mSk6EiEa2JyzSMsgshthmQwGa7wF6dphGWuQpq3RkHArh4B6wjvd96HdZiWLr5mp453s6fGMuVJGLHjc8zD9V5V",
  "key39": "NEgvhLrasybk4X1ZaSqsQozsTEh97A1aGrM1GAEfg4ckBxkFjayCb39WwPBu28KXWmKLHBpvBPrXZqFCijTaZuF",
  "key40": "oPTPC3YtbmemEjzcRF3MEq5h8Cx7Ypv1DaVFtYV1QkCS7xtiqhRnF7jfxT8LaKSecYWh328FGr8JPZF4c3gmXxG",
  "key41": "5SF4m48jwg42peTvGdSZyarWddZ782u3DVupzir5ZLyKTtFLx3Tj3t6y5UJJo9QoWtME2GPpZ7q26Xreh62BAJn1",
  "key42": "S1VvFCaC6f9xjwum3ortsboyzyyrxX7Djk6yShbu94Na8JbgmEmGEoTEhcwgKWba5bqdHG6ukKx6r8aJMBv4vi9",
  "key43": "52yi3C3qNuvpasCy5iiuqyiH5EseRsxYafU3xVJwsWJ7LomCyPuZkxSrdfPCcv95dqUqkLQYLsCPwkeg14uU2Kyf",
  "key44": "58aF4i8DRSgXeDE8qhVamGAGSJoKVYCqdfkJ31yJN5VyS6E4rKb4NfqCSz2jDTA4GtyM1bNBGscVHfGP8cr8LGN4",
  "key45": "44bG43Fwf84nMANCsea8KQQLvxNGoRtWn5oyazhyZWF11xN4xfJAfiUHkkVacZ5bgBUEA5Yt7AEn54gQ1d9wAkAf",
  "key46": "2DNPtGUBFAbQH1ci9hK7KHTbxye5KvWqCAiwG2Q4H1yGiMHAfF8oUFvNbrBjuoK9MQNLYzmJ3A6ATBxKEEk9rjEq",
  "key47": "nEjTYfp2iA841Js3RRG2NgBqgmTBcgG6RvNrLsdNSzTfWdcjJumrGAmCj5BA9SHAYUemchJeF4yNiFx51FBDpb7",
  "key48": "3tzV5WxiitRHXk3fZ5cCuby2JY4dJhGo49pPUPG6xhhBscp4zQv6Qh68zhZEgLeD2eQoXaAXHsAJv9BwZhBjkck4"
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
