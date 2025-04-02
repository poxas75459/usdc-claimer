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
    "5cqpggSxspGc7taLhDcgWvAHCBxFjYu9aTyfjTiXkWdJfq5kNBSEtqKvmaRg3wrwcz8JPxJ2GrrN8ujUztVe5XjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pA1N1CG5CpWpQfiRFSaeVyMT6BeWfrCDHYKEfufM5mNPQv9tECJFkR8zzHJSaZbCtJM6gVbaQAhRipmUuJYxgJX",
  "key1": "3NfRneiHvNM9Weuk6Gec2WAxvpvxNi8gXWmQwBE4myvmeDhnubGRZyFdL4Sbg4BPPWW5ZxjJeSpuwk7vvFCyahXk",
  "key2": "3nMfQdW8ZJ62L8nK4LYZqUabCD8XfLe8Gtj6mXUmMh3EkEPQf3dB2n82QW3uyWsA8zjiFe9kGRts25c3qXPj3z4L",
  "key3": "3PqzS74UZU11bHJLAMXqMbSt2njsGk7AjsxRumnJN45iui9bEngbxT2ZB6CEnfGCbFKrAbk6wRrgymJpFvRfUvLT",
  "key4": "5Jgs8U6tWk6Y9EJdpMpyZ9JCV3Hiryk9FpAHZWhiQNWyk7fHz8TzvnErdwwMeUR3m13ejmJPNp1YJGftirDhPNjh",
  "key5": "5Y7axXhPVDw1jkabtgwSY9K86GdTMQV2CQj5qxy9Srhip98uLQ46fYjP2mnqPAahfA6pgfuZ9YzpeRFFX29ESDwE",
  "key6": "fyiERavEpLnddjhFihMBBnPS2phBkjj8BFJ1tpRwvXmEkxqwjxAksAq4zBnjH3hLHLBnqeTwqAJ2K5d7cxAEZGq",
  "key7": "4eztKwARK78DJGVHdZGH6SRBWFrMYiKX6LuM6khghouikzxNJrgajkWntZyzHvWgH2bQMnYmvwJBZtBYiYZQndXo",
  "key8": "4CJrofhEYopJUdFi3AKwZE8haUy4Eo6W8NBUGCcJ1QhD2cfUSUSguNDQyQ5ZQv3YBC7Yn9W6geoitYwSzyr4YBNk",
  "key9": "TkD2rPTmqrSkUy9zGjxnMUYUFKgG4URvYf7esDKLXHXmXo63h8ZCRK5LaQVFs5c8CLGbRUBJ4cusqUfxxQ6yobx",
  "key10": "5xZouYSDvSF6TNh84YTQGDkeK1kQDGGV2g8EFbairTJvKhVkA1t1SLqT65D2eLmRdFUYeDhXodQm9o14D5EJ76TQ",
  "key11": "gqfwjCmH9XwDJkJWBwd1HPDFJ9Bm6bSwDfaj3sooMMCDJHFyNw9tFzLAgV9nHdgCA3giFz42HRfrRaZdR1jxYhy",
  "key12": "5LCnQAHccdtVnrodKdurcZR8T764Ygg1PpEAEzvUBy2E7FkuoyWyHBzFNBSunFZ7u3P5cYfwUy5faxzpnqCTFyc7",
  "key13": "WtMWzfaKFUsgGrwy9JDU3DHkEgmePSTsEEXHPSi6LyAuYAbRW5uVVcQmHeDavy7aR22W88Xbs9j2TDkyMTmxXRE",
  "key14": "5zfA5JTdW5SoufnK47Hv4tvtu8DyunX4KMPMcKaif9riAyWyRTGAswnG7wDpM1w1T3Sffi8W5VKNefCsnwzxANW3",
  "key15": "6NYaP56GbSFABhd1KA2gfqTsSzSRtEsSCzxCc6G5VaZDLsU62kUfDSZGpVhpi8Fn5mtnDy7JRYGYNy5yzdPxS2w",
  "key16": "55WNkFdaE1gTYqK3Si2Mx3WRq6MT8BbWJUXiF9L4J8PLfnRX7Ckko8tiDHgGNvdRwZ3XDsrbA1sZE8fB7kJgbTyf",
  "key17": "3bUzUm7iapEt3FBgnJFL5GuPWVVvBVZhoD72QWAVGLaiMwWRPBzKbJRiKS8bbq2b57j56acLCHyqiQ67iGN5xP8V",
  "key18": "mGgkSvrbaSLVwjanxBAoRKPqSBf2FgNyycJivuEZjntRBq8ZS5syRy5Z3FwCWMCZoujdg3jjEof5L81TtqJg2ae",
  "key19": "3B9gHZ7ZkbwcZ7atwmonPmL6UGiGRj8KFsafWV1uK35qJ96FMs97dua2TF4rfSCcGRBMekcbL98EY7VF6177W6N1",
  "key20": "RQMtVtxXXmkVbHYhSwjnADq47DeRfYA9jnARNsYFq8DbULs14GSh8sZnaxmm8mjNy7Vd1RpUEqBCLCMgmq2dRCn",
  "key21": "5gF47q7n97x7Wbi8nd748W67DXSKNpKZw26S7ygEPcYGXzKzfAniFpvdn9rsda53Q8DsazbRmShLd2VpNe2Ye3KK",
  "key22": "NPVFodqfPyXk2yhEiDLM3TgXhmJLbuZVjoUBhfwcDhSDWNrcJAKp2CrqTae7uF3goFQnTJfcaQPfUsNNM4RzzZX",
  "key23": "JvySK2uL1pFcL43m537QoavxLiBNuMqba5Ee25tRRpFGRnphEdSfK4wDjGR15tACjTLE4JaU92GUPxdGzvqyfvL",
  "key24": "rFBC9Em8RCZXkjveY23zx8qbdFjU6b9ybsQKjDhjVL2CPEq1rsarGepSPewMvu9AYeY42UzWqo2tTbDaEMLB339",
  "key25": "V249SLF1UduANVs9zqmwkS8uPg39JUNVsHvdDT35HE8jaAwfyDaAuzwF9PbzjEk2rQgrdaRLCKz6ubRQ8sCChXJ",
  "key26": "5J3mfgcpviLq7CDkP1ho11p2oGLnjqLy3Ta9KmVUz53WpYk8FjWyB8sCh7pdhjKL8MMuTPQnmC2YadomzyNJHPbr",
  "key27": "2AQvmeDvAGDDo2bEvhMkrYR42UBb24vBh3HVC7oJEYTtKEoAeEif6Tvs2nvVMfRMpjcifzy5P2nuSTnSEA3wfPCB",
  "key28": "4HogGRDqMuXQYSxpGGc8VTtT9omdCrS82MHkEo5SZfvsovJnrUHEWqVJnasRWHFcAmg5CsvhoSzVsPwqjE7BgUM1",
  "key29": "482Ujpyb6o8XxQFCe9i5XUyB2a9RXmWcY9Rag2aZq2Wjekey6JGiZygjncmFLMnEdCNgkXHGHKaSn5ozdowNGuFV",
  "key30": "4Xtj6sz4FijqjKbNimghbvqmzt9gdkTACExLsbjmjB5RBU4NqiNp9byLmpwAYX9AcVzTmcqMzG4PjzTU5o67YUpw",
  "key31": "ADZqqm1GbEgFarrx6xuD5zGymdu7xfay8Nsm6FoNnEwUHJWkaQvVyiUQNyhCzUZHejpokKxN5iNcpCnuK6L6vwG",
  "key32": "3xwxuiAdcEwDWj9YKGjDz8Z7FFQHYmj68Gm2sgt5v17sqeJLRJhxn52TmFbmQfC7A6bRbALSVGxfg1UZ5tNYA2Mz",
  "key33": "2YWxCqhaV6S1H5EdiMrUU531N9vS1R9gxRvNTAT2uB5EFyh6Nh1mTXbtRyUqXfU1YXpjEpysVj1qp1WEWmBwaix6",
  "key34": "2PnKAyj3XPNgy32bSLWDS7JveU31idP1zqmpoCQqszUiFcxqFXdfN4U4tjkoeDTgUMsEjbWvf6qxvr4W4ytiKWvA",
  "key35": "5YGaVoMNBrTy66KeRXvuW2VcQEHrhcjYtYRLsffpkN4vmtE71YFnR38ghYBi6spBEtMCrr2GTbTG6HsfJCxWLnGU",
  "key36": "QB5MphtFnthVyYhYwXa6eZbQCdM6VFJEohuYekDCS4ehriBL5prFYD1PTJ499Lrs2XuLKgewYc9BfnDTcMXD388",
  "key37": "4BV29ztR9KAwBmCpf8p7Jc4hxGjLkzFUCcBhEH4YiVbcxQZZF4vm6ukjAForFnyBNpqRPK4Zb5Fu7Kz4XXvXG1ng",
  "key38": "4TuiQzfD7zux8MJVUDZEsWL1LhdCEz9XGL88n2AHTwjvyPcp9MbZdEZcyPaRrTfhPoUZzJgWZaaQzoYuKKDhNf3N",
  "key39": "3i8AEX3EGKt9Eoz1a3rhHJ3kyfUPi67YH2VAeAXfcchjVDoh8TEgnw4KcWo2YqYt7ujx93mVUJYRN8iyuycww1SS"
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
