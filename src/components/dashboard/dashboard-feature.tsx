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
    "5HqYKU3U23raRccbEk6sVk5yLh98kaeR7a585u6UvPg9hmFFwCDtrt8ghgbfaMb3XV8tjmiEqQUoKiDiGL2ukyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTGwqx462KLLbEEsLbSKCXG6gYBKkVFWvKH2gJFdj577xdCfHWRyjQx445jbAEHdTfjz7nGKZ5EN94qkWJDoTrv",
  "key1": "T1srzoSnDgwqgoYkLm7rpZakzLyMqAdkMZnEieKfCoN8b7VipKQgP1NRxvDCrZjbeHBrq9YQHezfUB5vwsCVpzA",
  "key2": "hzuaLCyshqjqMxymPJA8wQ9AxW8551m2SBbeTthjpieE7kes4fHZqLzNgoCaKZ1BRNq8PLNdudqsFHdLRip8t6z",
  "key3": "2ZbfwFJZimjnAiAM3qdhEehkj4hFnYWxs54mtwCJLSg8Kuj4a9Wet5k29UP2aour2S46dnpivC84anNtfPJv2Fon",
  "key4": "3K73cfWDG7WeGuuLsmMJ8jqQdsQ5LQNy57qwbmeHanYZHfPnLwBhiSAnwQDveewFEBKQ1pDpnVFaz4waiH9QCWdR",
  "key5": "4ehVupKjaR1KRGxVNuxSD3VVRuptmknpb7PWFuR83uC4Uc6h6QHKi8hPbTthQqE8HaPRQCQ4RuK7fXDhMmZbdxgh",
  "key6": "21RGDV7oVZKwcgaTBfeXiA4vRmTCHtYM2Nt3TeLP7yCLttgU69aGPyBEa5Zb7Jt4G6mBfTUGt2d9nRZWvxDoZYRW",
  "key7": "2C49tNJKJPMzUAnbCmxbjNKwL8e47wLZmQdjbusSeNEqYvKaQ1tgbW2GfUgU1Mk8ws8wnXxTHE3R4cbp5G9jumH2",
  "key8": "yoXMJ6ZyviZXhpudKPPzqRvGk5F11MPMztzNmkygKZWM1ymWNePrpjBJJK2wp5TwhvjRMGzBUVxXeZdRzSsHoHK",
  "key9": "5A6QmrNZmP8xVbuXgq5gApRgtPLkNQnBv6Um95HW75mnzbWrBSUKoxZG9ku5UAU4aMa2BwzDQswQ6yo4HcRA1Y6e",
  "key10": "5wvioihqaaxRV66icXyRXhDZMGjN39LR8rYX9sGnxQwfLur3TML1Q27H8PSNR71JCvXk5B9yYgc4qCRVKAP7a7FF",
  "key11": "3fU1FfcnymNBS6qvyLLXjZcUZUHcz79Hh5PENj5aJeKcfKPqiSSZMaCZN7SmUdiWvwLnAM1g5CCG9ogtgkGD2TQ3",
  "key12": "2BhXvwTP6ZBCxJuhsD5SbJVsP4J5QzYEF9jACYsFaDNHD8sCExe6FUyEfZ1QP8YzKP227YUH414spo6Ay9PWiPow",
  "key13": "5Bc5jG9YCkpdjpwQ6hmmXoZK7a3mbHZJFx3WXvzAQ4ZD91mzXytqvWJXuWMXfB45DHvKzzwsTM3NXKqP3js7tUSw",
  "key14": "5KKZBdP49Ct9dhd1nxLNoNUT9VHf83bX3N9wgYzN8NHhyWohV79YtJZvokVypDBcn8P6DfKmxrvQMTZh5wxWJXZ6",
  "key15": "3JMzN19EnQiwi7aGv3X4MCgwCGriPE17pN7SDDBFf9qDm6sdezhojfWh2BSo5XDYpK66Jpg3txw8feYUMMFHgXmG",
  "key16": "56R38giUuLrin9bJQVcXRWFejX9xstCiNDtj5Q3ihL4iyZt8D72oejySsxtzdkSgR9MjqvfrxML6u8PzXvRYbFQN",
  "key17": "72vxWttuAmTkPH5kTpw2jtav7jhadD9XSy2MgunVWef25P1dVeid9DMeqcPBcXHnY8TJrpZHD2qCPD6oNnMvWxt",
  "key18": "LopNcGsVotiuDPRznaAFvrnGg5FQVBgHJAbVfVcvV8DUfAk2rrUQRQUJwn4hxczqXGdjTdZwjJJqdi9pFWthgN7",
  "key19": "5ak9gAf9auwDyGMsJA8DhVHCtmfMy3E4x47YrxfVKstBnabF7dZppK38gSnptDbuRgE6bhMytRZXU1KJaNkV5BLn",
  "key20": "38Zjz9u6qH5geuyQMMEwJcenP23Ay1yxduqojRM9L7u3xnEPAy2WmU1zzXTuSBr9ivEh5sANStrKTNLsPe4widdR",
  "key21": "2jjTxd628vdEBE82qFM5sKeWwoCD7jLwoNBHeT9Ak9DkXToAkxEUDBwGp3v4erLMiywNcpXKDk8CRNDN6y34G4kH",
  "key22": "4eHS6dc1fjha5irNePy1K6C9ubhzrXCDkaRJacWSw2xHgwNdbPCkw19FbGAYzbLoy9UDLt2ZtsBp8QiWUMxigyXa",
  "key23": "4TmKqi5cEZcJU377Ymhbbz8jaskxe5CifpoXnMep1LBnXwX9EHrRS3xrPHAMLAzxSo681sVpCG9Hum8vVzKuBtTg",
  "key24": "3M36fute9VgBzaV3aQNfhLTZptvvj4vcLwg5j3Vpi49MhvuWyoQe4nHpwJb7KVqTf3hsxkHJCT2wMHaPYGSxus4p",
  "key25": "5Chj5fsQMHzVaDegke7AyLqtJH6gMJWQF2VjdJUDX3fzsyS7uusZkqsR3q3WqZb7jsNh4ZRkSgccgjaUf9g6CN1L",
  "key26": "5xGuGYm5Qf9evBSsZz9VJofpZ7SnWwqRyB8PhJj9aCcsQXNpckWFjqAfMQs55MTxmVMmH6dEBJLx56cMEaMA8cSn",
  "key27": "54BPmmMZLUGLQrx8n7oLErTDSyGpwRgsFhtSWQxiFSB8hN8j7kU5N5jdjkrJ4oFiNhncUYfJXmgmeDZLPhSiqP9e",
  "key28": "vWmnNdgUwV8CjQ8oeamwz2JTLNaZewCCTBpX5PeAf4S9etqq9LtDbdmEwg4bjEpJaH5o4uMdBFLLQ4NwdApWsdQ",
  "key29": "4yBuT5CiQpA1hkZHeZaoKGUV3Fuj4ASpgesdxt6zumKDuv2JjfcevuJ6M1zoLS1ETTJRWUzzU4B8pKRFRpPYKL9k",
  "key30": "LUZEChv2Y8yT5VVCnbAw9evt3xiikWDiDcv1EJnHBLzZPfN1fqScbyfd35fdRDAhk41i6KuZqgiF4W5GZb12vWt",
  "key31": "zXZmn5chhR7QdAY9KwzQ5MwdzQXBGEHcbMztMVhgUFqrgZ2nVzqzasEVjGQfi3hqEasRXEuL9NzC33j1614HPsQ",
  "key32": "2Vi15k3SdM9bQywioAMsN2CTwKQ4Ps6HitWXSFodnKLTcofe7n1bcXzEHriKknBweKBTHndRTPEH6iZieVUixswn",
  "key33": "5iHrNvGSRmkWRmu4ep6UAuyGL8NF5HD5neVNTrW94wezJKfpWpvp32CfxBRmc7X9KrU9g6vQ77jGPYSZ35hgwjvb",
  "key34": "3V7yiuti31XYcTuJYGVvwPnfvwakYpZdDaETqSaec7bdBxPKXNyneTx2PW8WqxdEgVngRAicxHh8WWHzGtutFed5",
  "key35": "3ddUFicJy2ubMczDWDQw7eHYY5BoeEQSRbqq6UUFWzTPhWZy7XBjU2uJM1rgVCeKLoUGRkKfZHoyfD1GxZq4k6QA",
  "key36": "3yRy3KNPnFLP4EiD6UTEmuYDqZF7jWgQZTQ6LvrYzFUsodkNKJi6QVQNSCb8Cfp3yA4ENEmmxz9yC4s9nN7HYfcw",
  "key37": "62yGmjAP5EzyNcWhEEkG2dETy51mqJ7CRcT1DQoUMnJaepoP1rj7ue4PCKTcHHNzjEKkzbkTeLrj3ge8x1P88L3F"
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
