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
    "2TJ3MoAq41ViwYhqcJku7NBdXXqFJ8LAb2anqfrCevn2vzXW1uKPbr5havyS9YQ33vV4KMGfUzDT4hV71ZwjxZkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXt8HfU3yKmFRnsQPDzG8xg88hNynbJyaxqC4i8hARRMBo9YNjddUPDYC7wy1g4WJrbB5Ffwuvc2regTz6J1fz1",
  "key1": "2rQy3VYtuuKgPzGf7CcMEPtMYaVn24g2KyQ8nUr4Ywf5kpH66332MzitR3rUVvGFVyRT3BCUExnHMW3qATwf3K5F",
  "key2": "3qxPUFapKnbFZntVFt1Q4AgWP8ekTr2hzJ3MRu2LAhvBMSVHidf57xobuXTZpmCcjqXMic1pz9JuPGLJUoexkC2d",
  "key3": "4FxGLs6RvvtadpdRZeQo3dxpc4KhnDz8hK5eRUmSmGjZE4ZsoUiQLEqTXXS2rFVgCi9cqe1DLLUb2hFHSZoHcb1G",
  "key4": "4PiEhLYwkBQwpzzQ8shEqqJaP6UzoWoKBZpThPHB3TPGGatj3GbJCgeoGzJZh1pcVz97e7s8rvNUgh7yiPEkifhq",
  "key5": "648ZodA9sSTF12Sa92wLNxGW6KJ2s5vJgXE5rsyUQ3DGr1hwpxBGmg2HMJaXvGfE6w7Cqw4J227tR5nYn8s3JFWo",
  "key6": "2DN6inndbDLCjVnnfqpcZ1do5eD3XW1Q7PuBPZLFXXUs8ar2HJTkG3Ri5dbHUukcn5HNBrPNDkbXBsgZPPUDu4k3",
  "key7": "wabsT5giNJg8WpPgyLucFy3fqp2fQRr87aUNTh7xFW23M6D5qVJodxr1FTukJyNnAWWLKZGKyNa1EqvkH38MZ2u",
  "key8": "3kT26ZfjDxoTkM629D3qtWj9jECkeekdBRX9yyiWWfn7u3j2zwAf35vmGXpCeZmwEwKe48y16cRSfEd2tkpqKJiV",
  "key9": "2RaTEL68VH2EhPjcdrx28bxkxqC1JbK3Ni5bXzE6eXdavcDzHTA4QkKyjvzPoKLzrNoymHtTRio1dU63SxMJaQxG",
  "key10": "2PLFHbmnkjDKHM9JqqwGASveNCFcxXTn56rcbE9kxpaxZ8N2xrUxXQKA4gwMn5gPEz7473KP5ar5m8pLgXMzPwUB",
  "key11": "3h5Edd2Sg7ds7ezUYoFD1fdmXia9zr89SBMAJ642XLVUFTWnJV8nXXb9BPPDi9goekTxyzz596yCdDEb4XyNPJd5",
  "key12": "4uecaf9uEMcRhf2aAXtoNm5bB3pTyzK36WmaWTsSKL8hddqkUQppPQDzgYhc47gKvBn2Y2h5ZZ4EJS7MqXjAyC8A",
  "key13": "63BG6tK2orLcgSfgtLxL6Vd8DbyPGT13KqgZSg9dU6NRYq6neqvfsQwZsUDmNh49Ykw4Xpovzc9u2tSK4CshcuLP",
  "key14": "EHgkH3H1AAKSkUCjAhBfFypeCY3hZj6qN9x8MELjT4urMiVCpLgDppPjrVrC963NCY6egrbHXR57EmE8GdbQJDR",
  "key15": "4gheShvEF1KpLzGEfRzrvDHkBLWRRnwLuXA7XEJpXDy61Cqe5XbBVxYeopfHQf6GQKHiDLZsLjL88iZY9j2gfhdT",
  "key16": "xtmKHK53heNa3p1Rx9gSszpxdGngbyBJTGcUEwdgpvaYCi8rSvRSnJvHX5g8h3Ns9ZvSKRoFdK4oDzieQhgRgMs",
  "key17": "3mLoxpnTRJDV9kRJREGqH6tdk4fBXidnTN1JrTUa3UTx8bGEgZq4QwkFTPcU3W1HDkXY26E3UrbBqwkaXyacUwng",
  "key18": "2nDWLqBfpYxwDUaj4GKJj1FqT4GQJEZsWpRwAaN19ZiQSVJ4kC3oQYEeH6YZxcnAdcfC6ACnRb596gxD6ZSBNH1q",
  "key19": "5D1qrZyuffEbi6ReSLRTrvZfMiVUW8oMTpsNJZP7hYJDK1EgmT83ANXWimio36zsE29bfavnGWyZQkU7wV1NLHEQ",
  "key20": "3z6RTTSvRQhtUWbBehnYHZ5itxMw6b9VKRUdSUrEaTwXJmm7RT1T47NC3iigvZEyKF83gZcYdFSJGAfkFxr6oD8x",
  "key21": "5x29w9moUmSAHHDymc3SjVMpNWRbP4Zzqjn9rnkkRbxpbAC3Fodco5gJdzomhPNdyjPY1TtQs9A7JxY9HnJHgyni",
  "key22": "429HSAwHXGXpWLDTdZftJW7JcCgHoBCvNn14UXkHnUuFYhPbunna6Uxcr4UdRr7rx94Twt7PNj9h2XB5EULgyBf2",
  "key23": "4N7eJeQ1P2zrDmB3ibE8ZtEvwpRQ9dCUSUfY3jE5c1cLLaBtkvr3MFGgfEPDQHjo4mwxsSQ7qXUGVqdbVDoBwNkn",
  "key24": "2fbiAdUB9YV33gzYVj1Cgqtj6Q7mvuTW85FBQBwiZFnGoLzVcgYWZe2MEVQTfCyjCdEx3JSTD6kUj2m7c52aRoVv",
  "key25": "4Sjcn4s17eJHk7QvR44isZ4L3mYqc78S9ejnSBCJ8qThzo6zTHeLnFFcXMbhnYTBUxXsWusLquEapr9VNDxRTPpX",
  "key26": "CtUHAUeSVGYpAqrPFtqZuUg9yS5pzExWxMfytP88BLcEcpsDDtdmi8S9caAV58LFPVU6jN8CaudkqwuztjhKsSs",
  "key27": "3Yh4quNrJevB3V2vD9XFtS4ZMJjnVJZUKa3TY9J2Dpqawkoffhz8Bt6NPbGHAn8uiF1DkPoTXxjPgPcJRXn1GXVL",
  "key28": "RWxVKNgKUxhkjQdKunS5cfhBYW5fkUqbHNBbL5H3aTnrSsBprHBnRo1UE7KZqqHTax35CzVG6WNd7dbjNQY97mj",
  "key29": "4c7zuAbGRttMhqWdCSZwne83ZnD1TUBv6zUC67u914QQqFLLtj7HoStcBzCSNfzkCHNkAa5HmBH3Uj2zbT5hFmJd",
  "key30": "3jDvXuh7cEMpYc7rbAWjNPa8jnB9MiHp4HTqq4sfza78CfptarwC4AUT33cRVwe6toUx94UrkYx8dwnhtnjf837F",
  "key31": "5duxKb1dWNxiGTTPRHfkqnVKKgWuHZ3tTVpEwdw1bLXEH62rhLv7gbuanVu7uPz9d4dMhdBUo7HNMi78TLsXzzZg",
  "key32": "2oemoCaMAbVkn6h6KKyPCBccQp9oiC9p3njCyMySJnPqHwerAxW6cTe76gu356s4xB1u7Jc8YpqW7pNmowibeEt",
  "key33": "2rDgJnsKadarp9HfkrY1E6CCrFKEMF8LpptMJywU6FDKS5SZQgeXx7Wxab9pz7kwSWiykt9JSDif7yGZ9yUmiCoM",
  "key34": "P9pZtVXpysakPjRy2YbCerrKRtfj8YKQ3mpET31jtjdVinsPjSXtR86wkBhGMi8m7CDeEwXAPLqSuFwCuYY2aVa",
  "key35": "3v2jmkjLLF6k6Q8Nso1U3dgjc8VtczW1KUmdxhtnpxN3ieubuf1dFgbVaEZ7mvs9XYwEQjHBqa9FgFQFjoMurj5C",
  "key36": "56qUrYoZ2zvaYVwZy4GdaNjfmHXBHmU43LYh3bCEsJgt7LT3WmCGdNNgYrRg61uQ4jJbaFCNvcHrpJAMaW6xApPz",
  "key37": "2BqXuZp5j177dEK1kZGmeFsWB9FfK8yHx3LQQBEUj5BFtaXaaYQwwi1Xq5ihFBSUr1Zt8JHn66jTaHMEaSdY7tRP",
  "key38": "22u4VEBAiEyLaRVKXNvak5E1qnbxQ1VfzcAs6BdrojAkKfU52EV2fUmXwgUHCr2mLyjkCnHn1pTnxQJ5x5z99X4v",
  "key39": "5zPWgs2CGui9sWgYdyiAqfB6xqpRqceQ2zXGyQuosMm6xtwwb5FMuTZ3uutrTgCGvJqLUcVWGpGe44MqsFCJHe19",
  "key40": "2pYWxip6rC5dPfpYNPk2jfRMq977snEgip6MZgEBZeAyG17sdrCYEwVQDvSjHGbRzKEehf7vgdGqEABhausNTEYF",
  "key41": "3q8dDzEQDTA3bbVpeCMTVHb677zL7xsB7WEhhZRN1S8jRy2TbfEt8s16vdJir2xzochqRcrVrDd7fzuhK9KUbdgu",
  "key42": "3HmxS7RdeAiaLedpVj5nhthe1VDY45PChep1nz5KAtxh98jFLjV4GufaW4ZyPd2zNsUvmMSmVZSh1tYPhMA8uREj",
  "key43": "4zN89MgXo5NcLUzBVZ8P6ASBQAKhLji8GquS5JyZhGMPcUoXGpY4QR8XKmWBgUeVfbeLck3ziP91tsGZGyh3Tvvy",
  "key44": "44MhcoTQZyMo214e1j3XGU2ew86WvgwyCAXy17SxR9Jb8QkycZxGaYp4rEeJtMthhWs4rSP9G1eZRYARDN65Ju1U"
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
