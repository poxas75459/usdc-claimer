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
    "57FqNmF8MMwjXrH3bLjAmNXqKdXKxfW5kX91nmpsWZmT6ukmzQK2TBiPtaf34BwTtu6NXo1hPMP2NvHpp4LRFzVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8fB9qd7gorgHvtCCFz2sxqPifer1ykpET5XpTJaqP4ZdpnwXTJdJk9moi8VoykGCFL4FRazLoJhwgPdV5bgs6z",
  "key1": "kUNU2DoZbGNVvm2dNrm1Qos8YfJAm3hLx4JjkNbCVb5Nx1kk5e7h2A3LCDX18RgropNfaZeeFXqphzfUw7rsqKQ",
  "key2": "4dugbEXnhfRntQDxmP4ghvBbvs9D6uF3bkFFpxRbDYjGUszWPvjXexPDYFnuGJJxq9uRhYRrLTFpomSioGGwzpPZ",
  "key3": "5c9zFzmEPBcc13jZyeewg7k9THXvE6iNDN4VaW1du14zNdsgBR4ViCGZ8XELDUwhJEc8bBjny9RrEipd6p6o1D7K",
  "key4": "4SN4H3ui7Eu5bSNmnaLE8eUJiBqMBzfojCuBrdr4n6Z4x7pe9JpWbWjo2GUCGYHshJdxFxxo4D6QRe1NPuFoV8Si",
  "key5": "5JDmuXZs96NcuyWdXNZatJLqdnMESWPhzNpnR1duc4LcUJm5MxYNje7NPD2ijqgUovegEfaozEtrLJZfkJX3czap",
  "key6": "3EzAn5od8RDnd1kwGouw5TwrjscaYqCSkhAU2R8iw5WcsHCEierroXcvniV7WrJjC5hrpJSbeTqphqVcjiHRZyBF",
  "key7": "5Nq6v4psMvtx33uya31o17UuwJ2Rxi4h8h1oNAjbJcuWf3HtR7rDTd5SJaUU1AF63cMXEub7gMR7LM3Z293uNuqo",
  "key8": "4RChFx24ANDAWxKHWjwabwokYVrfYYJJ6dx4LPq39byL9uD5xFu21rgyC8VBj9AD7PXBxJUn6a2amubEre8CTAU7",
  "key9": "3R9rc3714v51bw1vvvauiuPk7eWSA3jvYXrwuhDLZd9evdAyVrGgkfRAtFAjV9etQe3KVKbusaxRJHp4yXGQYDCk",
  "key10": "4PpFdBzEdsA13whRTDHrQ6JhdDjYx6aHboxoDsy16tzHuSJ6JwGVJfqZUpfnfkewKrNeyVN75q7Qt9XT1AwgDmF8",
  "key11": "3mirjVyt4452frBGiQD4TgfMzddYbjHef7wHjNXSUmWpUtW5qHvL9vGwLTtCpfdKJH6fT8ycM4QxTTx7wRadBoCk",
  "key12": "4Su62BQwstJkfdkDL7qA8Qj7jJyMrS5dUf7ojzHDwuhb7itAWxq5Gnd3924eZt2V8NbkMcEGZryfToCvUnkoyeXE",
  "key13": "51hjxBT1cMi6XkojbG2Crpt3LTHBMmN3s45MBS8ji5CoeS81VZ9QLdaoYCoSPcfnVLEpxoQS7B8qCf2V4LjTTEXN",
  "key14": "SJVeRkZjpEaY19CJYiv3XSVndiLHXvKfursReuoTE8GJYdjZb3F3zJtR1UXuBUKFjZcucfNYyxMxK4RSo6EtafC",
  "key15": "5U7qTMMsEeGPpPKiWkt7qNcrKr2EFka5rcYeK17q1T82CXELuXmuNxaxXJTacQmEmrBqWoHLweV9D9nYXDPuSg5x",
  "key16": "3b54FgcSMYpAjhHDWegK4CAu18gHWMrWrDQrPVcVY6MQGZMzFqG5jsKXiV42M6NhJgCYsQcuBkmkM68K8Q4cynSk",
  "key17": "3QHmexLCNpFSEubhHd6xP6sdq14MGX4s3LUJVgLiCGK3FsrARt16A9Vc9ByF81bP4mt8kjJ4r3ovDtQf6Y88fJz9",
  "key18": "2sW7ma3gHCN1XphLS1Nqec49CFfgUU1Sd27TE4jPp11PyEGLjeydN39dMv77VCpSsVtjGWRodhRsbisVnRhrwsij",
  "key19": "4tjxdBi6EvvpT41ZLstgGB4mfdFtBj18yNsotzm4p8FRgvbDTngkZpVMGZTNYWr7rDDUJGukf53CEzuW6iZEeSDp",
  "key20": "2CnnqDi6cXyphdxD5qc85pZNE7t6ABjKBHNuPaBKrDg835jon7VHiSaKiySjnoT8RnPJjpojKSgZhrEGeV8XM5tn",
  "key21": "3675mGyToJ6rfVf7mdsxgvsdjY14B1j8kUE4itF412CNnEUbT4mfPs7Mh33uRZfYeUE3zZSaVsm2dh6utQj1bjL8",
  "key22": "2zNWxJRNWA3k5LDQa3UinBNsx82m13GJ6vwz1X3uSDB5vLBzXekW8EXmaqGfV8HjXXYfDGoBQmk2CcAKCyJzDNUF",
  "key23": "2PrykfVtheRCPDB6ddRhtCZaFWF7hUjUfCH2gARzpKpN8N8mF99BTXJsjYZJCHbc7WEU62VYZN6goeaJ1SromJHp",
  "key24": "4qBaVRgaQagrftuuJoqQ8kFpspcXFRpLLP3u4C5ZMer34gW9kEy6k5YgbT3ePCovK8uy7hYEYkgV4MAFDfazZb49",
  "key25": "4n18zsq3R8565LYjWj6wybYJRzoU1xDybtDtq9qNMy35rAbg1EjuT6mYF95WDeLoKS8u8qzsLusNXQWo2LgNvSLv",
  "key26": "xA54NZ2CvE4h2RR3SamrrBUvLX2DiJX546TNZ7FLkMPUzp5iuNNjP1YEKULWsZym61AHE8UstwkKHkB3Fg2BVJz",
  "key27": "2EJg7Q6EJuAkdHGC9fizmKsXDu6w324fmJNbdGMmB9njWzS9TusCg17cFjJdD87gR2v8Nxp6E8ukWMoCboVp359G",
  "key28": "66SwjjF98gbsPqiwDdRrssRQSEb4htiHW3Pn45CGFoYS4PfG92c3P9tFen8xtRftuuScmpak6oHDhBdbDi4KQdQk",
  "key29": "5UdL3e26YdBraxoPQQ2znW61eEiuR1y8LgDJLgVbBpZ88Mv5iT8kuFkvBa7g39JymAEFMcLxZaTmefi2YsSeQUQg",
  "key30": "5EkyddPMHAFVS4ZCmVmX2VH45n22A7NYzSG2XRfTnPmHKRtP2UXBxmWi1nkVsnTyMEzUzJms7dA3bqAhN2XwLjMS",
  "key31": "5899LKcqHxqMcwXbQLw4p89wuAnqbZhi3N7NQ8FQtzoYPAvdSF4hfxYsoK9RrSpBdhdhQKAS4pTLMaQNp9rx9qog",
  "key32": "4qmrxGoGgepfxVEStShZV6AnH7GDCsbcqF3sjhkj9tLmrGgVtkGiT2jCWzVqCtF8ubUH2DDhxkNbSuZwetRSXfVS",
  "key33": "K2dnXSSBaq7K9HKSeapNV9nXkGFajTC5xXofhfyYpNj5LGpYPMFN66L9RBBpAsC7SQRvnqhjz1j3TEry3hui4hs",
  "key34": "4cgty9btRSNGXzPZNAoSPwf6JqFNa6KCsNwFEvzFcjQ46APYmDBgoMJHfpezqd53Fbdtp4HgfM84BZasuabco3Bh",
  "key35": "556PqXGXqBKn1jq9A2ATYd45nurfCQMGwrDDrDP8we2SXwgrfewmJ5ZF81Tb97ugnAh5KhXBp9RoZcKeekWQJhvi",
  "key36": "61zig9UX71V81oxCD6R4iujckTGqxhwGnrxYkqHf1vHUNaZPs5iGXwwk1YEG87kMQKEfCyGGvzmUHiJVTm42acjh"
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
