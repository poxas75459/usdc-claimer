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
    "3RDr2zDsMHyed8aHNkAcCLFT7ZohANkAz1bKFHWKLrFV5DEEXRStzur4XJbmeoiH4fQsv9mFVm4ji1jq5Tsuw2QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EiN2DzUwpLLZJb6hzy7qt7enVGPoDauBG55Ky4mHCRNQwWYprNgLEecbZ914EVvAu8VpQ1KSfauG4HvKdFT4Ej",
  "key1": "55CnJUjsvVTaWZazoQr1LsBfyaXuvhyJhM5MyiM3nWi3Q7LQ2bJoMCL4siheYS4YHBH1WMVtF5aSisPC6WFJdMLJ",
  "key2": "4cFQsycgNQwpmGTbvhAHUn8thqFyYx2Dsr3eqT1Us8UH9pcSmxDBszPKA5MnstH7UxgL3q22nRCwX4t1e91UDS5F",
  "key3": "mZx3nyxxA8tHURffGVN3zNgf6UWJFtpgteR6UQcFHM6HUL35267P98t3Lq2xtHpQv9MjGV82DvbU9aeLzZpguGU",
  "key4": "5niAZU5YHuwPzSsCNJRRuEC2RCEcH85MVYoJca4z29QnMgcQuzQrn8BtZBGz9CNWbMvw2xhKpYVJZ7xQ9vBKg7UG",
  "key5": "4TwuBwA2ySQZaFiaFDeDj2TwyeoDnhdjQgV63sKfKcbcmafPQZaf5xrQEaN16Y5R7a9Kb59ipB5VNjgYXbJhjahi",
  "key6": "1FiBD7FQRdV6JoXxqP35g5eqLoFiEhBRwoJGa2xkM1XboJo6mD3HpEuJhsS7XSae4domk35FPg3N4Cg5CUrpfCg",
  "key7": "3QX8Ko4uHGJnNtRmiZyvWHpQGDaD5pJbFcY5EZA7x5ccoVLjn1Z5hFjFWCyHKPMA3VQbWUipvhip4XUVyB1YtMf8",
  "key8": "5C4QkPmWmg4qKjSVf36jNnKAhQ5C8jvFzeiuS1ByvyyhLrRYqtv9dHFZyRUkSfQ3zfPfcXvG9EWmsEAs3Fwouadq",
  "key9": "2ULFu8fkHsM7cFBLEgTRJi8o691Lh2gaHJSqNkCfTmvRDaBrgP9mzaR9h73rCYHcJ9hfb4eocR4FxUW2Fg2HTZBd",
  "key10": "5ezoj8m1Bn5b9ktDZ9r74gwudrLsjKdYPRZwLhq7vJb6sr54GB2Aoqr9UveUeA7FUZrvK4W6jfjaASJfQdUVzGXH",
  "key11": "2osakaaTuQM3mpsZ8NzQQsABK1i5qfbDiLkfQwpzJrNnuCbsNRVK3HNjXkzxkPreTVqy5ZpAR9GWzkERyuBjg7qc",
  "key12": "4Hp3hn6d6aPmGXKThfKo2p6c6HGc74v6rvF5vLPvcUeRQ8jwEUPpPshCWKhK5Ba239CvwdgLjF4po7C2mMoZFqvz",
  "key13": "2t15EBTfxU18QL6RDmUtqAwVPbMswAPYH63RDPVna1iscJcF49viYheeDCooPT8D4gQCLpTxxhffo9Ng7AXtb78K",
  "key14": "2Yt2pj9jBi3RwVH2DinG1KHeotTramqoJ2GAxFUNETcuyNnBqPX9psPsQq6GrChvtzyyRNqjUicrHjxfT8Nzr9gj",
  "key15": "3tKXvVjRbb1jQ4Xt5LAeE7NhWvMEvUx3Zn8mE329nAmKSYRApaEi6NGmjdCwtbq6KBivyyPLGRwNVergkJKadyud",
  "key16": "245LPmecGpfAaqVijRwF5RZNjzug2axiNWs16etfqZTohAiLPvtTmwXufbniAhQRwavJTWfD6y68PEnFjUBqKYF5",
  "key17": "sxPZyGQHdJvVPqy72F23WjqdkvSRfyxsFW6fbsydBXX1xVt4GxJQtsJRLPd9JSdYyqGHURAMPWFizWXMxXDyjLu",
  "key18": "2vdDEvNXi3Ntc8SQLDDcxNpxLWpvoZJPMKucaFqHbWNYQwteeU62u9ijdUWRQpzXqhKepoUUH9qJyuNRmBmLqwPU",
  "key19": "4JCzC3q3qQ5S8VmAanJaLyEa9w2yeS4x5SzLVvZdCjjfVQzsYfGguicKrTYHxi4NtXE4EmuuQmiLq3aPAGzdnrs5",
  "key20": "5t5GuetjTBFC7kz6wub5Z1te4Yn4t1F69ArFByTJLrrZfYKUv1aLHXzrcvwXZtUVjHRxH61qpGEwTPm5CLGpuStE",
  "key21": "8osb59cttjsMYD9LNsp8jp4aXst3XaTfSssFsP77GL1P6FphC7ZC4CrwWtam1HBQfJipD2ZAmJ7mq4M9eS96DRU",
  "key22": "2RpUrsKzwaeFRfYLY3HbF31fxc1k1KJCAbVxYz1LgQ7jh8h44LwKieaokWsJVvzpCqzHQpDLJdgp1JE6Pba1XhGj",
  "key23": "2L7d9sKq3svTvzPTHzPQGfjVorfftdEc8bjWBNkZcb9KN3EYkBezFMTyYKb2ahbWg58zrhPjM8zgYyBqLiQdfo9n",
  "key24": "4AZ13HuNY4XM8EwjgoZpT4mZgkCjfKZgZvNXXcwW6KgkTjZGrwB6iUjM5onSvDjKy7UCwKAPhvCzpQzBNAknMD7",
  "key25": "5B7fCswHi4pad5HtEEXWTX7enA73tGZrhcHqVJWFnQNwPa36Pt9YcNz7zY8Khb31enNszSRE9TS48ZqDWXjeTaQT",
  "key26": "DLob68zddUXi9bn7KWb5cX2zbEPV8kvdutKnEEJTC6Gx7HXYVzx2KZsdxSHWbnWvQNbXM5s35fhn4RH9AMBpfpV",
  "key27": "59Z6QF4LvDU9xADs6Mde9G3NAbtxmfBrFLwkgj16W1w3xz7vj8Q4ZD6q4a2W6tjQ7ZJjvcyJremzQk7zF1fgwb1W",
  "key28": "5k6GHtV6eKYkAgZdcQ1DFx5UW3gwsFP2Gntk5BbpHMrdMnznuCtsiujtZ8ZK6haYGhPh5LLiXJiZ1vaB2v6H3BQp",
  "key29": "57WrdVRPvqooYv7yKa112onwFLS145uxxSo8nih4rKv9pXh2Wj73s66Wcp7FBWUwVUEusAZyi5mJYxdtBFAvg7SQ",
  "key30": "PaeZfd5ZvyU4jLbD3T1obbxkiWex3HdrzK8cFPombmzNZeCzpyuc1J5QxVoWyTwm7FM8NHL5YqJwss4zNeoVpXp",
  "key31": "5WvwiVX73aoJcTJxM8hNEkRdvQ5ECETRyQiPpJhdR7v1TJPEqKKLQ9tK3xNNZA8RikABeCWcGhXp19xQ6G4A8pqp",
  "key32": "2xR1xPT4yujK9g3jDtsB53jhaajqxbh61McfrqY4yFTnSwVpWhsESMrRGfPKEGzQR3hDHJnCQ3UamQ3oucg1twKu",
  "key33": "3rpnF3AJmN1bRV8LiCZ4ZxTx4kdw8PbksR9DKsfEBKYsf6E92uBXHx9jHVcxCfXPqE58E7QUD663eA9Gtgf7SiwK",
  "key34": "4vsVWf6zgHyr7P9APAdyyKVvbpySPuR5DH6zwLjTUrpfv79SkyzdEVRgd3GbtZHsqnsfL9qMEq4dwWuGCzPE2NhK",
  "key35": "5H7s9w4baBVKxNbj6XJKhrpPp5NfHkk2bhj3XRnht31NBMiyj5K2eij5zjL3aWRXKqYdVygaTexUXkUhj237aQMh",
  "key36": "2Ne9eC6JpSwUtpH6hVRp7yXkFEf3Nbybdy2Tei6UikwM66kBYVGeweNuFqKc5ak82YBfcPXMNL7QTNwgZcyWZiPN",
  "key37": "5pyTM1DpkepKysN4qRvcWq4j334pzuRphEKCED2prQxDs9TFTh1XfR6zc5TsiMjKt2LLctNYHtu21Ww8GTGQTa1j",
  "key38": "5JVpYVVW4e4wjCTJWVqDzkgYHCtuJwwBwJHo3QGSLjyhT213ym6YYxADMZQYsQKjHexjp8eyNkpcqC5Sv3sxhKzU",
  "key39": "3r6UyuGzG3gmYpvYMLbrV6AstMHSL9nx4ReY7qrHnTSbEdvNSTfqk63KEiT9nnaHtmgJsjrxnmHCcEGrDfJzd78p",
  "key40": "5FE3HFu5tjxsk2A5a9Xfdq1ZJHtFjekMwD5UrzJNhzofAwpGpzCDkKTCQ7VUTmAyN76FZ7rTMq9476F8TkSfp5vx",
  "key41": "2sJAktzkvndDU9kfZSndQu2GzqsdQje5EhkP9ZSgFHb9sa43e1QhZCeFw3mXdendKPhh9DFtQ5jschjtMDXBLHYw",
  "key42": "39MjKB9EMM8j6rLa4DmB66qG7gjSZrJw4RtvuxYkAcnsap9UMVkPj1GqTx6KDBFYJRJBJreeNcDH5zE8u2DrkvqC",
  "key43": "5dBMr4QaZaXf47Jzp7y5jQ9HGxSw1xZ4LWChFRtyAFpctYkSqyUZyQQvs1G7SUi2r1AQ6LuJ2rg9sCPYN7sfDfBn",
  "key44": "53EUTAJwL89aJfjsFUAhmijFpZ1cqX2mCSncJQPM18n2p2y9cpcjWMXPh7FdkX4oPTJ64k8N9ZBBZogUj7VyMkt6",
  "key45": "2DmwX7xNhKf4kBbfpWAiH6rAHfeGYRyneAAQuHZW1noC5gKa6HvCGQQonJg57JWEQz9Mxv2WB6uvCAD63Ytiu4kS",
  "key46": "4NDXepuhTnm8n3hf4yxbchRfAtYiBnWQg7Djagqu3ZRMkbjyyuUeYVxgSArLX5rtaxqE88At9XJVSYH6WNsVyNy1"
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
