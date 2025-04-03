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
    "5G6XccV4UduMqENcoKfZ2s3nxunzjZCJvg5BWpJFs8ou3P5Z1B9TD8CetTixWVtn617DWSpMM67dqEq3W23qygoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UjCFw3Ytpco3CLoNdKBxXoLvUsC7ejpTZQh3i7QZ85GVKRYpd5zA4hX1NENKtEni3Qt5DazFEa9nftg7w5bfzDr",
  "key1": "8UbUrEFgMUGTfBraSBJ31TUd8hDpS7JZMFXpqSydwGhYuo12MgUHocCYaeZWpGqh2ZKjHV6kRnaE6qXfPiHehob",
  "key2": "3gWc4toZRD3EpjQQEFHzAHx2u95RpJpJco9kZws3WEG3xJeTW4si2KjBzpN8FQA5hmUxNr1BEori86Pd8UCkeyrZ",
  "key3": "42AtU6re2Y341ybSiejWEBTX6kjy62GjcEEKTYXnjenr7ieCQkndKAMtUZHvfx1V67Z3MShGD2igoJMSGrujGEFN",
  "key4": "4FvrbQCRv2zHqD5RefaXb98KK8okzo219fvfYDjhJq12Zn9Ha2kYKY2v3NzyhTqErp2we3N2gR7RGRb5shQupUi9",
  "key5": "42kitdvFs9prGuWBFkuXnNa4RL592eA85bVMnFhJ8n6VYU8LSHo57RTJotPBVeh9AbpTp7Hd5ANT6XyfjCUtKp6M",
  "key6": "4ByvZrzkZRiq172txiJU8DYHdyKL7GaLUBTwBimkt955XyJoEnuZMDemWdUSt5iSYxVJ3F1hmZbF8319uvcXzLKP",
  "key7": "v7ALRfe58exPc1tBmfq9sJdNZZZ8RordQxdGqDpaq7aumKRwRSiWQDDTQq6HhBJsoaF28kZzbWc2inqGHnZc6uD",
  "key8": "4TkbeJt3tNCCyqPUYDyVuAsqpufbDzhBPGG7F2MvHXN41Z2baHsGVFCCjYKPMakyqrKcmjPp9gxdVgpcpx5gwCjs",
  "key9": "4xjMpNHqvxFkp1eFXjytpc1JVruLvZysZXYMsYAAc6AmBNif2JMBRhPL8z7WHbHFCf6yfYLUojZp7kM1SCdXdmzJ",
  "key10": "3KctmYJXAU5BJ6EjnyJwxeaYoC2o7o5TDkbL7HUCFCQTyuvDPA28Q4HDvHCdm1SB7ksHh62dJ43N4m42LgN8QbA3",
  "key11": "2CVWev8VdE5bcMbkUu65cT12F1DuiUfWfAzxMABNcU1Ey2tBUHbKyUSfK9W1rQnGEmeAe7B7NzKfGSoPaS4ywJ1f",
  "key12": "4uYoz9KoCBwrqXSrHohBTq6jbpC8HnKVva6e9UZvuG233x3SBekhH8pCxeig8xPAnsCGwdB5ZRUXqp1WxJMBacFp",
  "key13": "5eXpMZTvdMPTozGhRmkdvo59GAn9mJz9FWVk5doj14p2Yg8katzYRssi4EW57reg7uixijLW4i7mc3YsroStphp2",
  "key14": "dtWpGUhY2tnUwpPSdQdwvC7b9AZD14TbPKfCSfuARV4QgCpycVHMPLJLVwZJFCyKJzB6sESyp8sFs746aMdXhus",
  "key15": "79zv2GkgckPTDNNTE2vWd121QAa8zfRp9PBkFH9n9nD8DbM5QvKkAvfUh7moLRL5MSEj9VyvXVWgJAnd6UeXNJp",
  "key16": "3qpzcHXhS9ndWtJ38KBMvMvXcyzgYL8YcXuW7jGbuoHK6cwLLFgNvk5jYJ8ZSTbUWAzpmGtmuMV3jYqAqRYMj2dD",
  "key17": "sAF7so2MHciSJtVeGtLo17L2h9P8cUcAkD4iGPfqYa4qpNuSStQ2JaS2MM5kjV1UgtNtaYYTQ9yyaKUxwDQbE6M",
  "key18": "21YyQCvLQvgak8ocSFpb7TBWKnL7xWNfuX3V9LBcUnm3ESB76BFG2s8pTUhUNxfo7p6AqZND8iFVFn1X1T13BFJx",
  "key19": "3YV9snmpvwHGTEiobE231Z67v3A7tMcDPtZPQyjQTUC9mesiBWRZ2CfJTTRH6YkQqJbsh4cWWd2c6DEuLEHjF1d5",
  "key20": "64hkgcFpu9FwmPSBVqyK9eX5CUy6Xb7CYRD7Qvzk4AAx8Sk2psgE2swZ1QeRE7coAWpkb4P2oPZHKXTxqCBV9zTc",
  "key21": "2rYRqBBLNEaUKfGgHnA1aKp5se7ZtakLJqkdxJyCdtqrbjdy3uwuuTNNKjnqeQcubRBe5cxx7w1LuUdptFfJK3mc",
  "key22": "3PPFtjWF7S96D5kEAjGdFQDMeVPJRbWrkrQJW5HNMpm1sxj5ZuRkVNGny9Z4gW5GU3gpVbBvXtA5BLGawM3uf65y",
  "key23": "Pr9E9cNu3DWBSLGXHmoJgPcjssbGEuQbkuKJQcXCiN7NtHHhzGe8odY66Ty3ZuCEEz2dN3N3oEFaDa4b2g4KrYb",
  "key24": "4bg2gSrAjwGCQNrjJ8W9huBC7yNnSsbq7ZDqpdtECQ3gW3wWuS5WZCw85NVeMhFNNXEAhGc7MPbDmxecWXvVEcoD",
  "key25": "3CGAW95QKxMJXBjhgk6kVFgBFXZybnscgL3r5QYphRpzwro3adoM5FC9VhWNNSePeieYos1eURS8u1Skw5NVFgNX",
  "key26": "2GGq2SZUJL7LBHvpFhHGJsTQuiwhbZbVB46dZJjcTNsyPaLSzvq9NYLmkcpLjBw6QwkXAT64YiMh8Loq7pkJ8b6t",
  "key27": "2BVj61SbT3cgekfZBLsmttyFAUPo7LHu37S2fTFrgoBF5vbL1wsEB2JW5Wzia7Jr5kEdEtncTECByJUHCMDGuAam",
  "key28": "5SQbb7rsAWcmx4JFWTWBLY1qVKH7T2wohSGWj78AyBfGz8RGqK1Hz9uYNc7cLme6J1gy1GZeid1ApyQYaMBAyQ1",
  "key29": "3uZyRkarAbCqzhApmneU9JUw1jfNbgChbjFHiPgTs3L5fJGWdxZvRSyrdRtSS3UtChPsqyHodYyfSYSFysYmXpkw",
  "key30": "38M6R2Cw1AKbQL1Yd86yVbaQoe2fzy3GgqN68BoE6YLBNhepUSCzaKCbYN2GkXUXq7uWnBxcevG495qtjxsNeFkf",
  "key31": "5aVbnoitte83Zcs96jtu19aRGFrL4vEWPFiHGJVEMczGcL8QDHbwwriks7L9MGda7yXkBi9jV5D63Hjb1qyhg1Vw",
  "key32": "4yofg6aSS34w61sMmLhkj5Uy7ehtZEcdJi5cNobBiQ4od2ab4nZMg2rXPbPPoMmT9KZpCYzbjFsH5LzBMrzv2tkm",
  "key33": "5qme5w2M94fXWnTc9cyFjmLDALK2njFZWJ66jwqPAriduG4J4fPvCjPgwPjqKbDt3oSJHi1a8vuaHvMqVVTmkFTv",
  "key34": "pvzNLNW24HpdqWzeAsBiJtaMHLEq2FHZXL6BoG7u6kKN2N7cxToRSJ4HBFtK1xdgUyfFpgHyKjxs5FyXK1AJwFP",
  "key35": "4cEUxqA2yF1pTmy7365aHTcxs2NeVWwmWbNFWXLYUP9dvDfpSiTE3ikAVfmRhsowHNicA8z8ur4Axcc7YErTHBYA",
  "key36": "5KSb3RU2eJkFnGqEQs7RAVVsreeVdR1DLdcWvmBtpNUecN8z5nqMsBMAgxVdcYUz6ZT3Z7j5bc7BV5fjQs5a1B3Z",
  "key37": "4goxwwK2kb1XV1fWMkv9mkJQcTAmF3XqeHSq8NQfNLBcdesA7MjmBPJsFkmEWWpM7NmCwSUgZcYfsDF5XwVnTazG",
  "key38": "3ywZe11EmfWPThx4RcnwxZad2gaVNqCRtDcTTnTEsMgEYqErKAZ4sPioMxWCiN1Do6dVSmsSjuViwzsrbtGpgmNb",
  "key39": "4Jyg8idJi1GuUwXRghY8PawvG9Y2R762LoVnBN8kmZw3K1UEjgbqfFhsS8AB5BNUfnU8y7jnMti9fxSu2W6ZPd5T"
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
