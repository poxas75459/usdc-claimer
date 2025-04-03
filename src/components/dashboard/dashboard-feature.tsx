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
    "3WhfmUTu3eqbLXw5uh4SuUHRix2PcWbcEE6JhzkzcsRSkNLUsZkVPGQNvhPWRY5Jw1r3H12uCGPKAz4HYLqvYkAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frFMJGv3wfhVegDKpnXmsCXgpApKD1aEF89TyP1gRKhFsYhnWXawVtTm1QJjoaJgEvqRAWsgBoicc1FCMbUj4CH",
  "key1": "4co2vZfrJxNBw9XcZZUCkbhMVuRvd7GWu1o9NQdnErDt6hMEzYdXvQr85CJHvLgPDAVafjgUardpR3jJaBfsZqV",
  "key2": "zsRUtSTEB8fQmiwDytRmyQhDhQGNSP1ppihUPKz4kcBPg9JP8ArPqe6QkLU1JmNfW4mbwbnBRdmzc3RpNuW8jfw",
  "key3": "3qYhDMkjBUtQBpnYGiqGtNLUzfaW5rGNNmYAZUu2as7nyTFmg913toa7ANUWKTT3Q9koRg3FaNEzw3ohPoBAYWFD",
  "key4": "4o5DX4n3F5cc4gW7SpkW1DNR9EviZXP8bmNe5prVc6xxpjxXfxM4syrm8waXgAqWYKp6Lfgixf2bPuUChjqQUpr1",
  "key5": "4479MxfPs3KLXFBhBGk5DJgWgUMV5mAbjtypUFWLZAqyBPhLDw4MrnB4VJ9xuB8iCvRKTC33DHb774KMcW1svPzG",
  "key6": "296Nw5oBQruCJGzhtCTKexvUhiNkqXsbMyQWahAxVTw9C6qXhJUDR6TVBtsbFMYEb6FnPBHwNHTiamsE7y6nEAkJ",
  "key7": "A4VNJkdZp7nHafMZHqH2vTHh6BfTghNhnzs8jpaEdN8pfF1DoQCKuZAFRw8Q8aGFi66GXnfAUCyo76CWJA54o2a",
  "key8": "4NjnBMLppU5FkCvKc35TJ6YjQzpsbWPAYqrJiKHLZUXu3itzyG1yhPBcLHNiSSYTzvq7J4rCLg5BoqfYMpm3sT73",
  "key9": "4fjd1vRqM1ozeXK5ST4GkpsmHeKBhszQ4MJh25aPBQ25aV3kGFQwMzDMaFY5AsVwCx2G9yzt8wUY18w7vGNvgk1J",
  "key10": "2VhwTeQdYaHzw7Cs2Nnzegve8DbrZQnfj34ZdnNuSpc5Hz8RC8rrP5nndZJkbq31WA59RFuphWTsr2LhgCoFC47J",
  "key11": "23vEG6zSeWSfG6GZ1YW9CYkFqyJK6kjhWJhYG9R6ZE2MUqnBX5kv63ikM7MjYFuznJ7hsH6sR4hNdTDxQB6USiMy",
  "key12": "3zdjzxhMBrqj43qYSW7t8z2xU6SYa9uR4KUkXW9K3bP7ZVvwnwafN5Pi3xSmTZd9gxEoDLxpH8N3YGogJzrCnKNY",
  "key13": "4xvC2DhNimhcxkDAk783ujkHej478nBnPuyd5tsiw1nuMQn45jud5CYWkXJXMvQ2sjXJ2s3NRWDP4iduNi4JDoYG",
  "key14": "5pgWmYxwPuHXuvJr5X3Pgiw3kAujAoPqa6o1xgrR93ZMqE2NwYwA5keoBzkhZWpvfxy79uUBVBPqknT4Mpn8cV2k",
  "key15": "5t2UH9gQn9S91QTeR489UJtUFQi4tnKc42gtGnsjswqAX5r63jnymu94BEtNtAHNChAhnhZ9UY8cnoYj5QS8udHz",
  "key16": "4CJ7j7sy6bpKV6RaPJX8ZXixuJNJv8LpFwAJGxxryiYeAKq5ehU8kNkbw3pZcySskFD75FgMHdwxXayi2SvQrgB6",
  "key17": "3oCt9cZtFy1vAKgswa7owwjRZXr8DvoorMkNQwsAMHMkZeRuCwgvXBrjbFtmTrZCXR1xEZTjYBuTaoCArqNvAShR",
  "key18": "3qtzwCqBzkSQF2wGDgk7hukWF6Praz4Gu2N5JB6MmwEJHYMDpDzNpaAkHCeEXFq8ZTwgpUrxJZDktxK2hcYcnGzr",
  "key19": "3biUQ5SDmJ5dUECcyy3cHWAZKH2yFKfeq7nug12TLBpZmS74HpFQXATbT39veehZySd1yukoNaLkKDxvjpe9uNfA",
  "key20": "3VqBj4GiAyRpCeFsJKZ4x1Mg6E2Bu8WpH4KevDSw3GNsiVZab5q2EgSBxp5kzds1rvmRh5oRb8VxRXYqgKRyZSyd",
  "key21": "4XLPHFLreSQV8gGL7ouyadZwYLNAAUThy1piihndtr3LXShZcNiTj1VAG4tKzGZxgVQzZ6sSZ5BDraNyF5oALcwa",
  "key22": "3Qab8WvQAf1xdtC95DwjojXkktyQYmkKJF5fUJ2C8L13X8sETtz6C1A6F56AM7hCUvW95dtfmeg7JMrMEyQG3KWS",
  "key23": "2ncgwQgZmXa6fQYWZ259vym3QjqeWVmEhqF5rf2i94V35drCJ6tBwUDKiH1yk8EBzMEScRjYFUvHaFawH3irBF3A",
  "key24": "4S8XVkJQEjhSWTv59FHP2aXysTDPG6jiBFYcB5H5e3u6ptYLcbssuBC5C7nan3eWRCJhxouyDXqKiVvVWEuP7qVa",
  "key25": "637nXBAHWVTy19sSuqCMiYAjVLqhZaoRq8ngeQsy2p1aR6gj6r3KusKaWriAvWvMqyL7sttKSiWyVp325gbjRDN1",
  "key26": "6sR2e7zaVr1hdPsWvwUV4j97nCuHNBxeu7g5QM7wtH59C68vduVQA75r5CURdbEtJdPtLQQ6dkkMLsFMWdXbUMq",
  "key27": "5s4q5NdQTKNNoyLwhRsyC5tpTHQCqJAGcWR1g67VXEKy7QjxXhRMKdCu4fw19rfXiXNxK7XHEnoZG2uovDTW5ba3",
  "key28": "5fyAF3h9gmwYpXLBY7yhDKvYWgpeMfGM4jJ4dADF4dBx8f2pVkzMXFG7NBXBR7pb3WxEX6G4ZYhrTf8v291pgY5k"
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
