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
    "2j9ANxbnfCgwyXMSVYz3hUsgmuu3qa2AfkrPCGkb93s2aaU8HuDTAUXsYuHuwFK77tPrzqxdHVzVD9YZSebdXEvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZrFeiSwQDGM8uAJ8tctJvh7mhrhPzwJHuSvJPEDbbTMNhJZrzmEAKkGs282YKk3smd9k3aLEvjvfSK5HDMZtu1",
  "key1": "2DmDLGwqjdpSRCeArEzBpMe9pfRZ1n4zjP2fFUqC6gARXuUfrYozGnQhTGgDvPNs1h2NkuAW4CTjgiVurkeEnajg",
  "key2": "5cWzpa7MdJRwNfbtXRGqtvyomXq9CwZGqKjtmAqxrCb7gA1vchL9y4UARBpLG63Gxf4NTZEZWPtQfDcQAyWZi6u9",
  "key3": "4NJcMyJDPtieJ3r5mVM3NVSQ79b8PdfsEcCkddbVUg1XNs5Z3eW8TWCAqugBNQAhEDrQ59Mg4eSz31b6QD5BKWMf",
  "key4": "5soinieMuFirRtdkWMAJgE6en881oELAHNmvz3k3ATiN92xzfr5HtTnH3LBP5DWASnbUJAoFgtV8nwywc3oBAxdi",
  "key5": "4oj89Phg6FYL1GtAji8ZbUXboUiUDuZxo7sUSh6WA8SkV2xdmg7bTyGGZCJiNM7GS9gD23v2UtN88eEJ6jEtKSRi",
  "key6": "2Wh272sUdwj4WqeHrNYeXHQAgBHSaznXBg6Zk8MECxBFdgW928Gppfaeqfj55L247Bj9hYgFAGA6ZCTYw5JfJwHE",
  "key7": "2HphT2jbkymLoZGk2JTtukdN9nWMLSc2TqtvbcuKZLBCYxr9JKdueM4YsrwzsKTD47LjbRVEdnjZv6XVj8UB1Qhj",
  "key8": "24t6bzLHM4wtdcTs6SePH6UkFM3dgMyueik61h7fNMHeQGfepMNwMWfE1kwdVeEB3CypL62qpZSyUsZcReoAAVXH",
  "key9": "3NNe9FKvj1tbXk7tbXjhT58cGKZ6JgR8BUnsmUnogrpKZ2qHJAeBypZWYJSc6Ux8ysFgUgUmfWzbfzRGWTjVYVRm",
  "key10": "gtHdforYyhAem4F5niyHKJnJtgbXewKvLGLKV8AvgX7FH8F13Fd4P1YfGGtKzH3rbpDEZLmQM6s1TBdT39jy3JP",
  "key11": "3SrM8543XxKq54WnXtZw7jUyXiR1gyLssb2Pu7KSGWUEgLZmtvLmEeWojz8SN322dqN3KU5Tptj9LWRXunWwX7pU",
  "key12": "4AazKkb4yQc6ME7cJjv9snZpMTWmxhrKs2j6vgwZVhAtF3rdgR8ZJnhxkZQY9sZZP8CGspU8czrZFB36i4DgDBf4",
  "key13": "2FZy6C5w7DKJwTCJ28HPs5n7ksYBXwpgHQ4vZwhr7QV6fYZgmG7mh3ELS9BgdEEKuevzm4swfvu8Yhc6rhFYGeoi",
  "key14": "3AsQ43Sb4jm84z7gDspRvxiYcUedPJ3pLc6w7NoLR2E13NWHnirQwJqbcST1vcnbdGdkRrDL63FZ83o3pdQw5qJk",
  "key15": "25wz2LjtZC49dNsV52iqeFqUJ8TbhyMcWLHH5ind861vbyPsKp6LqQGqLvP5ejmojUzHNndcta1z2JAL7wQdWyC7",
  "key16": "49U2nJgm9UQMHaxdmX1eitduc1JBCz5YP9us5poxwTBHoLxSAf776zEEbte7hbNAL193kELT21N4skpranBbNWL9",
  "key17": "2DQ5TKHxDjMAizkejcdp1gJwWM1mN5uMcgRvrWAXcyAa8WdDTm3p9kMyVEuJEWzymDjzKcQH7Ht1RR3xhHA9bnyn",
  "key18": "KqW2sG7N4sd55auSxEQF7ecf8BaCzQ6deJZGXt12ZLFqqD7FDH6xsYaq2sWapNQgGHiFdDunHueU7XGuSPTK6hE",
  "key19": "RBjJSQB6RXgqrDNSzppP4aVmQKsNkqQjc8mWaRfUuNFfo1kQkYr85FRfrcwFjUYWm3fbGFxWwtB2xzcLDrWuki8",
  "key20": "5r3S9ZMq31fv33bjrLYKc7MXSWeKiQjHQw45ppVw6Jfj85yu7WzdZ532oiaEfX7eqdUs7naYi5M9hzDeKnWtw3bi",
  "key21": "2rmYpiWdhrEFtUgD3f1JGzBUAQv2xm3voPS43opCrCcD8uhc2njDYt337XTCH8Ho13jw5mgvTY19U6uMj55hasgv",
  "key22": "vKBGySV5Bd9esoQSo1Jwd1FqTe3avowQ9B6tVtTPHNoXo86QVa4UDtrsMGKXekHNCe1Kch8jUtuQJUGRPmjKaQA",
  "key23": "3MHmrWDe3SCPGqxJLYzemSTQ3zwFc2R41XS8h7DVz37r81zjeJTnUS62gVfwjMn6m85BzwzCmYdLw3uUm2cLcjsk",
  "key24": "4Zw2TkQipvPk2fohyy6MuFaijWurhCNbUhcUhtLfdpQEAnr4ace9GArnDZAxc4qVAeRLHscLWfz8jfa251oU6BrT",
  "key25": "5FXUpdXWibVXc7sXcKFw72CYVmuXoNGY6KjzTHxrWsR1JBKd5cF35ckUW5ZQ6c1HpVfgFuuHmeR65FPVZkJu2Bzi",
  "key26": "2mnms8DPppope6Cmt1xNx5nQMp1xLwTQw2ccWoZ3Nf4GZQqjq9e75Qtxv4PWx3YHZo34ULtT788ipBmYffpWxj6A",
  "key27": "5snufEUAQez9SXNXTBnysmHybsjsSvnMiziopK8FakSZzRHEF3R68eV8KQjFdjJdL9HtmUUMCHTvTtwhQ4Fj75f2",
  "key28": "4CCfLTkBrDYT78cW2TarJfkhQJvxnWzqHrR2dQUHFCSgFNPeyQs2NB4LbK6dHzFvStPdkunfvEzUmqPWxUsWovqR",
  "key29": "3kwMuXZrbYzks4oHvWkdQBLXnASjF8XSPEXc5h9vu1U4BNFCC5pHkk7Cqed6rqHTuNeS6C2pEbMverRpRCSX5Scm",
  "key30": "3yjqtPQ8MvTz2Yv8CptMpzZ8XGfc2XyEfa9A54r6JozJ8nqNaGvbrGYcZw72xEdW4pTKh5tFxejdxQoDsFtTsPhc",
  "key31": "4r9688oBVoEpEW6jPXezAUz511MtSX7wKFJBuMQkArMX5zWLNuftrBkN5NepXF5JUsZGu9tdWfYB1uQfv7Z9Aoc7",
  "key32": "525agvzJABPWyaLjsJ3BbFVbhrsmi2kLVXU8ET8nrGscm4wPvhnjFtda1rorUpHdTzpqm5dZUqshMHuA4mRvQsH5",
  "key33": "5keJKJwL3bP6GGjrLHUv7uk7qkzSVxF8TficGQN6BEtukkKGfCaB4Y6TD7hZwWQvRvStNxeenHJAbnmNWBHxJByU",
  "key34": "2FgKV8VUQSZjN1h2wr5fHtn75pkDCYb6Y4j6TTFfN1xixxHAuxZ4uRq4i4bhsxGieu41stdqBnW3EjpWkvQJB9qX",
  "key35": "3QSca4yVDk7f8gGzB4kTJtUcwJ2Sq5jYZdNxrNU8FcvQMST3RCKmf7cc3Z6HUZEZXgKP9DE3d6ToUbh9v3Rhwv9W",
  "key36": "3LoAkGVSF6j3BCHwaWH6xCB3WnP5yZe5oSmK75UPSqHxeUrUY7icAkG2S7f1SWqALrUm4Vquub2pggXfXdDRNFi9",
  "key37": "47LZEzUVDfR2fmVxFcLFvzbShTco1uSZ2pcsWj5t2RCm9hv7f9P6JrLryh3w43mrWGptjNhP2VzkFLUM2Jnuicwx",
  "key38": "4KUAAd9EbuPD6ouHDZ5k3xSMJE56KFgU1HhBb3HxYt9MzdGVjt1tHFEF67p8664yPvVoedMkif4z7Jh2xs5QVNhm",
  "key39": "iZ4enTP8FU67k9aDoNFEvHHstdJ9vDtLMtTaGjMafoqWyMT1pq433PuwvZhTpC359UAatgoqPBLKgdzi7ugadw6",
  "key40": "Q5jdb11JsDw1ZAnewL7bgjAqHuXMUpMBBFUwdpx3deN3TC5DBhikio9Yyj9xSeRiCiQ4A2YexSMKSTzpU9yAREa"
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
