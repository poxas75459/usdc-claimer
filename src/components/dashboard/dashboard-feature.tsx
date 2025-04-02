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
    "5xhCFNjUtTQ77fErk4nJF27DAZFGtcqwZbVxvxbwZvUQBALMDvWhnhDnvHiY42ghsCrwKAg1nQ98KrgCHUKwEYPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVoxvj8Dij3yxX5AbUhHP6kmbG8Bj4HFirtT3Fz3YfeYErwi6nx2bPtyLpjTDY8sA8Ddx7EvBVyvSruv9yK9WdB",
  "key1": "5SBW3TGwbFifbTJQnsc8w4KeZs65wa1jfJdCEP8YqZkdQdpW6NKwywvXgTh1ixd1j2Rt7okjFktKKcm54JFrPgZU",
  "key2": "2qMXQzYfJD6d6PHMRjxBG22ZQ5xPvHFiKKbN9xK2C7DdtshNbgTA6v6vFWV8AQWXocwjAU7Fh5wcduvNwjsBBu7b",
  "key3": "2x7w7ibR6ee2Pj7G16HisozXWTfakaopbcksD3Y3SNzCaS9SNwsmMyfbQdkTDRL32KsNvfKPn6BMpUzk1jpczLde",
  "key4": "LjwRFgNfrzZe4ngdsJ24GQfjHodV4NztYXFTngFokEz53tFvcaDET2VzLr1VJJjfKpNhKSbreMUSRg1WWpp6xX1",
  "key5": "bsQCA3cYjw39d9e51ui3apjRE6p1NbbQMYus14t6o4WMiHNcywbaarwwRsN2HKiD6F1amMaM2eSSHQ61rQPzVDb",
  "key6": "38wHM9QETwPNewsfMTCN1dt2TPHnVZmhrVeUHM134dvgBEdZAjJP4oTnFriUkKV7wx6UNtfqKCeun8KkLUAuJxYE",
  "key7": "2dQdc3dQGCrtadCMHrez3t6KaR4QYSGjpp4FfsQLC9cw7DiiKqhC5akammnv761LMhdJ7bJcGVKm5sq1cG3F2xUi",
  "key8": "3753toS3rg2ZXHqEu2CkWyC9bcmCv5z6sUkHFTv7qKDhVMLMaGDa4ezkqTxKAhJTJ44RMqAGFGxhuwTgBXmhWynH",
  "key9": "Rbd4rZgt4QieRQGR2FbSL4nQMDP6AcbuWRP35CDDA5FttWr8P7DSHm5MxwRWZmZCEEAJAk8HNcKZb1uvFHY755p",
  "key10": "66Dz3tdotEZSyqqyWvbH9RnsB9q9KoTSBD1Ekk1J8BVgRPKzyTmyZyvwz61aE8TwAysRtbH38QvdWyAnXtEKHiGx",
  "key11": "3jGNxQUozL92PXUqUPrJ3uLyhbk81eqVdCX4nA3rShgZVKtErtcBp4ormA5vqJ67AckhtyhxHrTteZq6U7togEkf",
  "key12": "5zhnTZAU8WaafzmnR1n6XzPDsbkfY61D84hmvWiqDriCumBXLjTqgdLr68KFKQbeWkyNSRsabLNDNMYCUd2b8r8J",
  "key13": "2aXjeVU3cde19C16HzZndCnxZinckbQZfwKdwsH4eTvAu63uLok5BEZGMsdoFPszTRZic2Mbz3xdTTVJK7x63MF7",
  "key14": "2SRoZJ4PtGvhFkaCJ3XKp1hJYx3nHQYdFzqK3q9MBtRB7ABPCDRFb1t9QNNQAChLeG2JLJsY6ix46MjHvQqeHwu5",
  "key15": "EBb3C8wJw2endiiK5TLQ6nT3uN1juaNxTLGjXn9oZhcBUkrhywpSpj5tPCS7Sp5np27TJFe1gMmopnAzt7yKGgo",
  "key16": "33e7a4P1kpA6JmSiqiWYnF2bi9D5sEr8SuwZGJH3vjmZYvwgmHHc22Z3Vc99VNVhPBqth3ru6Vw14eCMzjupnTbL",
  "key17": "53deNRPQDsJx7q4xFVjrHaWMBYV6nKY1Rog9L6Y7mPZjEXMvCFtbUwUsWe8o2izAytJVCkfqEhYWLzmDTCPNhYe5",
  "key18": "2c7kSHxqGuG9yNVyYihSR8VWpd9fz4jU2ViEJLxs3AibY2PSwW6KsjLU5Va5tGGH6NBXzEvAo37NFbTAHLmz2brb",
  "key19": "a7wDqad2wacNwVaeQACiehJSFAfbHaGFYLw9ZxfMAH2qdLZaMqWgYV81jk7wFBwS7NkVtoVNCy5LKz5QtEk7p4H",
  "key20": "4pjn3mtQKqgA3EaTvDtKVCqmxDavB3eAiLJAghp8dxicEP45Qw95Dnz4eQnmYXjNxo1phaKKMReLC8Zdv3FBkZjs",
  "key21": "2c4Wnk1vCVPH2EkZCuobnZVLSSWkbFDqy9Kse7utxcXqULvBZeHncVKuybeys3yrS6rGEw7SD7gur5ARZzTgJAAX",
  "key22": "4PCqqFxEjAjmqdjrePTeVxSKwzNJubLF7NipA6kRxf7ej8WHcvyxuEoZ4NLCLZMmNoeKRiqPnm6DHsBsrrMDbF6K",
  "key23": "S3hD5ySMzwRrFDDiuPF6MoABHNGDf4UAbkV5te9YHcd9K848UrGMnDcPqDFM4WvJTqb5FWrjhWXRyrJcDnShcAC",
  "key24": "5QMceb4VreARUwQymZ1BNc9NLWGHzdud8pA5fpmz8jiftcLa6bqs1kpDPXYSeabsjggdiLsELiHAyKZjVQ2WGGgt",
  "key25": "4E9oy9EuZxzmNZcvnhDBke5hk3czo1m7D3pyYSNx2SrPFpqqc25nu6KsAA7Pvg8Bs4Nnk6yRHCTNvQHDHS4agE8w",
  "key26": "4ZQewpkPdc5jvezX6i7yAYq1RcR8T58A8LK9cbs49uhcvYfvNJ7xsUXf7Z7RZHoit9EVmgyKBCEawpqDMXnpy1YP",
  "key27": "5TdCYe46vurYHxKjcimzoPpnnXwGoMXtk1QimbCdkse9tEdmtuj9ujLt4GaDvguAubsxvCa5pC2eyV6WMwsEaNdF",
  "key28": "YotKidhA7zB7xw4eq8n6nN1NfPcdgi2BFd7Ag7hhzBmpMgSgj5q7e7tMJjcQcTSjDKGR5NR4Msdf7EsUUm9rsCg",
  "key29": "3LTzvCw7roGn34fD9VPQXhezY5dKcCVPvfAeFysZ68N5HLj6Y8oHXVi8iuMY7dnTvdrm13VEMX34YRQ4nHZEEw2o",
  "key30": "5dfRkb3wSppxpr2nGCbeZzwCa1LQMRZ68aZo3rWcB16TFEV2UvvWr7M5R85qhc9RSVtb1DMrFJ7n9VDRdUrRZyoA",
  "key31": "4WsYzuA8MSX3s1786qrL3m2iT9iHGnZqA6bigekhwiA2jqZ4B3KUJwb2QExjneexBshvNw1yKsTHBFYAEkb7NXBc",
  "key32": "5vvfvptf3gh87hyPrecpBkPf3LbCdZd4rEs9jYjzWHqUDAr7tRLAmDgPkorVK4Fbju5XEBBs9Ex5gNn9r84L4PUE",
  "key33": "zfxTBB8RhoSyRnrYtfkopT4wmyxcUnGQgURNNCJej4SkReFg4hXMhD5NtzHVZ17CddEZc8fJWX3JtFeBiEW2Xdw",
  "key34": "4Jj3A72tnjJycY4MzmfazBVoRoHjiVk4pR2tUMUSi7jDVkSLUHvJsfCQXsTd3Jte7KhL5kTo12WjzQXfUJx4A2CK",
  "key35": "3yL3LB1feMHLnrQh4Xsyd3CBCqXUDMNR3EuXiEkax1ycDjUWw9SamABJ9aJHY3czEAWyUvFPB3XWHmxpHnfv2E2h"
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
