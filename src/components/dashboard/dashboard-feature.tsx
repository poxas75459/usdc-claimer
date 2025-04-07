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
    "2teHSgbx5MrbDEBmxpquGGvbmesCr8LXU9zRsZAiti3cMgE7ptwHW5cuDaAvN4jvG6kGAQ2w33dNj2nMPgDEFb7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn855743kdVyAD362KK1JMyzVKqQfwJZ5Ww4L8USrjb1z6YEMs1uvdxsZBuD5ZnWsGpc9fwsjYeRdn9zGehdxCq",
  "key1": "2TmgduemynUhSNnUr3yHtPMSJyNGbjaYzQUuHwk66uLe8L9bhHCRH3uKYSFfmd4sQ71NmsRhA8P97iTZYoWkyNWw",
  "key2": "36pCKm1pTwLQ9Z7HmQXRmCNdB61zzARQ4EFumMEi3mSkWmMWwKdwDNMZrm8LFLzEjUtyLV7kGZ2v1gLqumK72m6P",
  "key3": "3uzbASuvNwpKgPxXzzTimshpC5vv1tMG4LozEC7KyFjVMa7aFHx1qGdogYmQ6Rs7dxMfWD8mtAgqeKMydhsSJcgW",
  "key4": "wGGvWP7W2oeouSr8TGdFgtT9DK1H5KSL5X1AeDUE9HiwUF89kdyposNPLdkEBw285G6XkiUmLLKnBKnJJZ6YYBz",
  "key5": "uhzKsnjZvHoShfF7JJPh4iD6WMLj5wtq9KVtAmPhb8PyF48j2VV5DduCJnZcL8s41v4sfwTTMjtMU5i4KsK73KF",
  "key6": "4wgFSpEWYgHr7BWfriq67r85giqxq2gHMNWRfUNY7BBAZrfDaU2pZ9KNMX2pTNs34CzWLA6LN6HjPQWmBexipjFF",
  "key7": "2nk6WTK4Ao7wDyjSPmsbMQ9bfvAGRhnXnkyknae6Gn6FkHDNo6ozZXXGAqB8PUBkhNPGEv1rBCsxLjStGm4EHq1H",
  "key8": "47TCT3zHyugR8im9h8PNa3a1HJLRRzPiHELGhAGj68WT35ZM3gk1YuezzXW8hHrdXpR2QZTD9qTApBXu21CLoX3y",
  "key9": "39xnBCA8nQcxPCi4i112bfqjCFsPQqEBwUWZPneR2jE3jz7xNfWC1NeQ51eqeaJ2grecMnTXs1SqXoir4fdkHBH4",
  "key10": "fCo3pNLLHXFmn3XW3esgBz5fvW98eXX8rLYJ31CofxPymQTcZY4du2SkEJF3AHcxVFph21Y3jMFGVk2zDZYmP6K",
  "key11": "vMANsmCM2XrNsmv2KTg4dwuiB1hPhQR6rotCtFk2UJstK212o4ihbfftNZJ3FurgEzAZJjFDzfy473p9MJrfF18",
  "key12": "3SYCQrPkqxuqPD1Cuu7AyuKVky2NvVNusczunksdyzhuasKHs5eyViAv1wtdn1VYGcEVmWoE7WfGEeAMgiQJ9s29",
  "key13": "5NYEwoY3NWHJbiJqKTSmWJ2VHcxcGyDGGQi2givpqh8AvBakw34KvdaEAFTkT2xuEXpwRCV64N6owUP6YK6uLv2y",
  "key14": "2Dpx4r49aR1AvTAcNmkfpAa4J3cnha5r7xvLfpJz7TDTPxwWotYCvrwMLfgkehtNu4ErSvVtoyn8FgSMR1H6gwEA",
  "key15": "4DYiQUkrV4b5WYYfuk336NBvvxNsoL2KUKWnMEZhvSjwTHsQRHmPxNZn6DAUKMX8ZkpHDzK6Sre6qbqo8BedS8yW",
  "key16": "4ffUfQjvcJQzf8RcLUYFyoRf3Y9HUAj7F5zaq7QTwD3r7Mw9Zgtv5G9Dz3HYu2LhshV5o3BgRbfpBDq7vDmjUvJo",
  "key17": "2L3bsG5EuK5EgWVmtteiVDRMv4At3PH3H7fCHDyxxbc7f1uaZPtDd2PueHuxRyRStngbDvqg1JF4AXvY3x5mhbLd",
  "key18": "5HRbCJx6ebZ9K61ZpBAGgQfJ3GzrfJG7ufmTLttgCzz5tHNVyGncNf6FoBCVWXNaTt73sup1kJLEHxoCVScEjPGq",
  "key19": "4s3MZs9QHG4wJYc44XfuDLzVWmTreSTuUZpt14jYdtCAXBZEi4B86N4AR8XeFpHEi7995aHf2cBcyUj9r4acgH2",
  "key20": "2vbWswM6m7PP3J4mJnmvq4EKfoiXPfY7NtYH869RGQgkdaV3Vn3YnbsgieHtNWC3g4MmBiKybL86fXzSMn3jPHxN",
  "key21": "57yEmr5BJzVJs3KzTHWsdig2goh5Kcgg4T87r9Brx366rzCjmDYRmFkm4yeR7XZhB9KTuYqmKqVt3BXsPyxUEqa7",
  "key22": "4ZUrPcxYWBqyCncjH5q548rcPRWvFreWoAQ1NPZTrjEhjBLPST2WUuZuQtDYYQ7PTxmp95Yfowfmgmp6cMwp1pAj",
  "key23": "5C8wRWoE667LYE3UEY1brrvRicvNCNZEMszEEbWfyaiBt9yPrJJZVMUhmDxjkeMmoemNiimYGQLqLBsbrLrudtwr",
  "key24": "QvvVFvYPMVN4zg3Z9NgXCtEQZNckJcCuLY6WpaVMU39bwnST187deFbR1toXAM8oHrFTVfcutmXWjHzbiMa5Ekv",
  "key25": "3PotuxieJXZTvPSRpz8RHtxemeQhNtj2foX8xs9pnZ57cZWZJ662ydfBx91AkGt6iVMndMuUQD5kqakhZvV2gryo",
  "key26": "t5Gcn3HheQVKjBgEEabDJF2FV1qXfWhhsjMcfARGjq2cjCLWK2CN2qkuw6vQv53foQDxDhqrh4vFkWCDcticcxb",
  "key27": "3goEqSj9UNULZCQpHJeXKsmVUifoHA7VqSWV9SAhgkgW938e877oj9J3y32TubChP8kc4CVPBfN6LExVdmnAs8WE",
  "key28": "5RYi4q2ifaPDQfSny2hT1RzBGrbnsSTLDv9rH5MWLgAAn8XsL4N7NAkDKa3DFQLzYNsxLSxVbHZEsU7Sau88CWrr",
  "key29": "3B5qe1viko3MXz6DKEDC3AqvFC5jSZqz7gfG5wAV3VYUB2qQgKEAcs48E9Kv9VEdvE3r9dXQ49ozAzGn7QWEzJtn",
  "key30": "4DdpNpaKzXkDX3pcYKv3vpPzfu6FimLeYGhr53WTUzEH8s4T6oY7xZusAHd8bmzKHDpycWFGrStaSRCYEPtDPSRF",
  "key31": "4RyauHCUEwinYNR8M5j1YHqhYtrt8ZTvGYqHTPaitkE56fxsN6bffBFRk95GVzpJBWBqa9oagiA6vz8B758KDKcJ",
  "key32": "3Atxwc6PqRcKxaVGRQpWTJC2xsTGj4ZgsUq791DDe32zUeJENNCvQmPhPHsL7wxJ6o4ejrwj91CH7mtzmwYUMDvq",
  "key33": "52eA6jH4J1bUGCEm6UL4L3qwFXzuD4wXFsnrGAsC1pnwEuJRySZZqpUppt1BgKSnwMQZe1ua1g36upGoX5UcQ2Sj",
  "key34": "5gc3NaUG6BuSgBThpaLeKjiSLWLfWvQ8Uin5hXjsrwEenS4vXJFGozVj6oKCkwBQ7hYYwEW7MEWCgYT2oB8Hp9ob",
  "key35": "2xjMT7x1De8YctUjpr8ci1tdk5yA74RR2quc9SZSkWibrJQfh4BtyYfydQkMzccnLCjf2woF56iXYSJeBJYQR7i1",
  "key36": "35J69ESK7M4RfFxC6oYxEZTDLWkjP1DFU4C3vemFosdvYv7hngfqzq9xWCA2uvhnjsC7yAtYD2XdutQ1VV7gh6tf",
  "key37": "4AYcwJ1c65MkD1rnh6mcUjgboNntSnAF1iRWpXA7BHS7eWFL2V6GYJEJ5bkv9HAHtWZtvELJgXGFZWF2brNgg28G",
  "key38": "67YtKK8EYSvVXhD4jr7ka3zfMYk8KAaYUyxf5V1HhWMhu3hbAtV6rNqDo4ixVg6KdGfYcAmsknCXX6N2KWfJyf9k",
  "key39": "yGYBpxpAoAa49vRGTj7Z9Xi8JS5BMwk5eDJgB7bhr838fMPareHMjaRFZ8WLRzbihskU4iPB7nyYSnHENLDnrzF",
  "key40": "4QxdFq9L3E2HvrhGUpKhtoJbu25kdrBH4JwV2u7hC1XMX6sQ6eEheHBK2H2okWB4X4SUUXt5dg73WTqPFa1xPhy4",
  "key41": "61JCbEWcmA3ShenBo9GH6gkx1d5iQNAC8NbvMm1yomWinWf3X9REwe65HWpu1xScL5xftgAov9eEKRrxSUPDzaY1",
  "key42": "4DqfLBTMStFjEcL4k6zAkDm98q74dcCYkG11hQXhfZVTLyRX7R5E9KKtvurEjLMejKPb43PeXhcyErN1Bp2DvXw1",
  "key43": "3sHPruKExDdvKtR4sseoxujSMauKpCmMNwSCUPNderukdzqzSQAU28NZf91GdiMYCPEbAiaNHq6vPnLy1W1G4asD"
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
