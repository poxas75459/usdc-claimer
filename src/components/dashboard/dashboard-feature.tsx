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
    "VVgbyTV862ZTUADtPpdDQa9ni6mahwdNaSHv9G57hkdUJvmjUZ6suZUCCBqjQqK6fe9kD138BdvcumLCNQjnPYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDLMuRJgdEMTGM1w76DTbsQUrNJaSDLCeDnYuxpFmDYnyLHodZ7cpTo4ri6dHhoAgFeRk4ZTgkzUcZfkbxaaQwZ",
  "key1": "3BPZNqzhcAgzPGCvjuGHNsEi5onUuQM5VvqbdG4KH5UVtQLgcH4Q4ACFLjiNgLrCH974Df1hkWV57sogoETR8exB",
  "key2": "3XYvPa1i6eZgVJ32pRCt7ETwgotWkfcf1qLkXE2KXkTvaTd2pcsDH5fagkVKk1YZ4T14QW3s2ZbfA5xba9kX6Evr",
  "key3": "eV5uVdpNRD5g9rpmTiBiFLVvq7k81qHaKCBNc4Y9BDv3qN7wfBiixpnSNhF1ekQbn67fpfAyqSs6Gm6tArqge35",
  "key4": "3cb33BFXZSPsMKoD4qUggYfbSSi64Waf56hiD6wbYn5tgoMkx6r9Cp6TpWAJ1tPPDnityoijvbJJEG49tTbXrVdd",
  "key5": "3rzPQ8FyDEoBNkobrXTU7Pg9mRR9KbdwRc8aMLntMQkmLJv4cJDgeTvJCGFfDzHVURfbjJK6ipLgxEMC8Mc2MopN",
  "key6": "TrNs8RfNDWi2vSzmC2PUBuJvj877QCezvnL3QV2RUoieo9J4LXEwoL9R3z8XSABkLCCsQj1srC1EoEwpbmb8tB2",
  "key7": "5PoBjdcDgcHpQprwCCyNN4DGFNCSCWK8KGrmdv6pLEi9K2fHkL47LVnNz1BePnrw6f22RBvZ2x4VsgAVLBQiJxab",
  "key8": "5g4mBrChUTr6bZ6DqVrfQvq7oXEVrKryA9HKFQPMeXuJtd3SCgNqL7A24nfvgYZKJ3wGMTZhQdjrfEPBxUhQ4Jmj",
  "key9": "3rFcXRXDG3FZxer3BvKwzxKU4YXxyhEpaNYkjCb7N7R3UnmwA3t5LVo8UaqdNCX1oLaKERjGF3i5weVjG96yGNhv",
  "key10": "5oLBi1t7tt7vn5hApzxQ7HpwFxx7hL1jv7bVwXpduNjaLyoxPiRu2nssqGmDJciW4oPZSLMfH54vGXbxkfHFTxkn",
  "key11": "3S6eyxHz8zQdRUVZjR18TkrMAt62sb4MfbiATfRiA3S2q59hZoQAHrTcj5w3eumPv65Pc87cYfTbtLNNYnU1Dvk",
  "key12": "4KiJCe5xfFk8mdVPgUF9fSZ17cCosGWyvPq57bfc7JDpvKzSgU4C7QhNS2frTgjDxaK9KM2L2Mmjfy6h8zHFoXXp",
  "key13": "4jg46aAuk1NWJWa4BVLwZzK7TjGr3g3MCCGVWUdbhcLsCuZkpSiVY7pa1RRhv61RCFMXYdGtCsVhd7dmS2SUWby7",
  "key14": "5uvxNdqpVuxYpXyVJtuHBsq5dgM2z2BkSLkWH2tCRMjntxheX8ow9aPrnanah68v7ddpYkNbiuuierqzJwaSBZp8",
  "key15": "4PVHqKwWjCrYAhdBaTbRkB1CpR1RhLtEp9PMneGsFdJJtCGEP1jJd5aRhBpqieFo8pt7qhL3ojFsUqPkgnbiYKWi",
  "key16": "2tMGiVHNqASRhmBAPV7KHj1wVLHQ2nZnyXjfyHu7SoqXLhQZf7yEwPsuLmht1hsRdaxUGSdiPXcvpgaQ1fs3uC6f",
  "key17": "VwVUnGfmztUEsiuNrMTyuMAYWVQUPs1hQAJpcK3EnbzM2xnwMz37oURhtuPi9GKxR6WeZy9RtQjHQNG7cCWTWtB",
  "key18": "3jiNyXmpKsE9Wv5NRfUDyMQwwVftfTfLE8yki2hFxNkws3k1iocgKYu21yQQPLzpkyayXmUhSyDShpxTMnNnuzix",
  "key19": "3vrU8Z8d187f2rsXzAh2ZbKkjcKYR7QG17LJE12f8bx8o4QUJNJox5BTUwZ2nBW8canheeFr34FA1A3iSnEmdhhZ",
  "key20": "5ocsan8j481uvqA8mojJxjWU66kVqc6ESGUqq3poYfd6AXBQzLBSywNQJeEct78WTYVzABBF2p82ooJPzLSmnwpg",
  "key21": "5HhTQHgM1as9e4FGjZtPTzfVBxPXBZDGm96Yj9tSBDbSKYwEuBp24XGC77zm56EY9cpg7tvaY5mzbHWnEK2cetK9",
  "key22": "5iNSxVHVMo5iDZ638xXDswuuxJXYjtEag8D5XeXPkKprZVnx73Lp3CESr8M1okwoHeNnvw8ApAC9S4rqNmnBdYwE",
  "key23": "haxw9WmRkoSBzeFtXrEFfkWLasoVaNaRrQcXJZoqLBEz7Vj3XEgn3obop3PFTqHdYQZsU6qwBYAGzsRbFiquYte",
  "key24": "4BJ3upocpmtorTdHC2gmC2MLvkyVVbFZAA7A5AvZarovZhji2J7iQEaiSE5mPFAhZhK2qXv9UN9tUWBQgW2rV3bR",
  "key25": "3mm7DtbrfMMpX7DLb9NidT6tyN635zLnuSecVfVKahDdnNPkryKfMssKcFkf9EAsHMhUUQbnmRixy65eEemqu7QY",
  "key26": "2gHaTrkAZmhjc8iA6enqZtS6qwE2nVWpM1VMEmVmFNFkSJvgJPj7KxYMB2Ez7skVMXZqg1ekEvVtf8yC4oS4kNVr",
  "key27": "3dyFcUocJudm48qBQxMCwBiBZ1KpBf62NE9ShsbLtEw9sKeqAu1mVc74xSHTXGhMQAoeCrEX1B6uE7q4pKr7HmT1",
  "key28": "38aeqn6DbE2kBbe2oJ4oaxgcjPr1bCjRbYNobiUVBjxc2HnpkFdbERAgzzxXj5pDZ4ms5HeDttt5DScnkZtEjARX",
  "key29": "n9EmQE36UB6pdohDvBxX9HgkxPN6cNz6hbJKRAaG5PzekZHox17acheHxaXspH4c6QQnMCVHmfRPLQzHcMtjgDY",
  "key30": "4dd1FcpUpGeXuaYTYv7hG3cchGiZBxodU33BByPXkZT64gtddh2efqrwUZx5TFv43frbc47kYQxirYpMh71c6Nhj",
  "key31": "4XPw1kVSwgRRLe4QM83xsyQRWrmtCvskp5b7cSX96v5mzNW5z1tJBC4As4fpz93q9nL3d9cqQ2DKJcxE7cSxa21R",
  "key32": "iNjb8dywvNB9emoZQHKCjscyv144xkeezkcEmDVnFLwMhgq3EpRqurh3GNsQonKUXR3CpDfVFQWvdzLZJjC3xx7",
  "key33": "RqycTuQ89nvoHH9ttA9b3vZhGR4MapfNZW3UzHUQC61xRwYbLjzDCZqoT842UaqnuKQ8z2THtdhPyEy52jPgL1J",
  "key34": "3wWuftWCJvyPoCniTKaYkcrr4k2ofxEbsbtVLshfRjbfueQePUCSxUJZjrb3sthX2ZFx8k1g6Nr5gx2jzU7bzGWc",
  "key35": "5zDnbJFFdXMDhTaWQXqKwi7jbAhk3TuuGHsAFwKwhMQ4x9pUP5Wt5ZNMTxtQG5JSd1qsiRL27ZC776RgYLYCvZ8S",
  "key36": "AmLaYrUwRZm8wHA8ZKpNK2kndZgcsDjZizPtFNfujEg4mnkexw7v4Pz1LHPb6wAUYnhPdEQpvzB4WjohB52P78P",
  "key37": "5y8KyP8NV3vsqCm9bv1kxQKabtxJtbozdA7XCN8DiHAHghfJJYkV5PAKeKkc3FqJhamYi2FrtqYuN5d3sGefMYoX"
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
