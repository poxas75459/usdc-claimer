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
    "4a2D5qLYBhjtnwPNEF4tjWAQpCWc7TRjog8REtM3piPAZxWiT9Ciq8rXaWd7Z1aWQhTd5zzCgkzPZFSsEFHuzqtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31U3SECi5zSWF6ACr2Ki3tAXJwJeowa39Rq4QvhRFePHBKpSoRuyPPVAufoWAdhZAvhxDUZcK4zRo1WuRBRcuhyn",
  "key1": "3CoCTxRzWsvKFePXj9Ty4vRLEJbAsaCX5YxPXzumcYhHeYXvGkJ6BttcvwE1ZUU1i5UHgcpsVsRLsrwNFKvahben",
  "key2": "TgmwtwBHtxooLrq5NgfRpHx5jLyBhGVuPW9Ej7Eem8ZRh9z8i8fMGpaghQcgkY8hMJ5JoymRyRJoUH4uk7oqzru",
  "key3": "2kKKNpTMBUJPwaBPSGbpkhgXhVCGKUMYKGGUpCFvoiYHZjJn9cbUiQq7GmqKc65isEGwYyYrxYxy5uRysepLANou",
  "key4": "5ZeQHshrAD3hk3r1FoZKdZSLZuU25UGcSHdJXqUsvdXUPJvkhTVEbZssYgQAqXgqUdHtSLgHmibLsxJZ2CfhJxPj",
  "key5": "ucRD1fSZmsoShWFRbxsvXwopjWFW8iHq3HwxXvWNqMjg4cAgwbgoAF1X4rStLHLXwa7hubTnpQxmxGSbRZWjgFM",
  "key6": "CcVuRE5NtzL79P8WnENYoZFvjZJn1Jzi7WJTqUa9SpSuCJRuUmBJ55JmYJvp5u419pbSEQXBTGZteRaqgQjF82B",
  "key7": "2Qb6nptCnvU75tJAuXFHFAxb1z3TrsvWu1eLMnJZX6pzxmbNcNzRqkNmEET4ZvCUUg5bQWo4PU8VH2BjdJsMtT5v",
  "key8": "3TZSWpTuHuRjSeUHzFQ1RxA5G2rbR3Mn3B4zFxTRxv2C2342sMbgFcy23ukGtfQwdLZSqafRDkvriAbhTHknu6Kp",
  "key9": "2FRaA4DmTL7zDwbauiNuBxfzQt5tyuTMKbFUk4j61BrCgkKkygkE15kuSs3ZWfHAiB5DVjmRWtNY5Rgr7n5NhuaA",
  "key10": "46xMJvwXcAznGfDgn6nTGzbZsjh2iyJDzoccFJYCcFkrX1Fzck2hJpGx79jTwdCDVamo8Dx9Uc9Gc3cerUBc7Vhd",
  "key11": "5uXS3bU7HFK8ot3z3NTCopcZVFhDomVfcLLUWqrX1LzqmfXQ5yXYn648spk2E8UjKGxws2G6MUPDxfrhQHwp2Fz8",
  "key12": "4ZCRXHogDrPAUGKe1hzdcXz1gTEMNFijmCFoF2mmS6v9TFmSBDADnH63aQH4smPydzVE9b4rhrWs31hE1Ci2xStf",
  "key13": "4ZD8VdbBwipT2fEFu4mJwodQTdLsheYCQTrHipkRfZs3AhTAz6MpSLDj3TeQNDpv34svE7UiQ7aBYjQpSTtpTG42",
  "key14": "5GVvgyAVexhCBpyUyZUhn66o7D3bDqghw1feTXauck81wp25Bpb7EFQmTRESzHNyFe3LYEeMjpukvTSUwqmNRBoC",
  "key15": "2PMvisnaCiKSku7aGfGvUrZcTtzc5eAfEh5CW5pcW7Zt4kdsu1EQdeq7VJXRL2hbs4g1BE7aDUrtGXTVSuQ5ENze",
  "key16": "TCzoNdmRG9CMsSXtCh6oNLnFnL7Dwn6eh8u58JtoGQRchKrNMGVJAQ28dCa85jL4vMbsDg4pdZkdbkpSMWDMRDr",
  "key17": "5kkxtdjHuJxkkKcd6F49xAE4zsaASyy47p2JTfvEwCefg1ZfjPndHvVZbdeeYY8cvrLUkmArdqTPuhJjdmBvqhQ9",
  "key18": "4zVfPrrtVTpxq4jKJULT8Bb3xwTDXYvVUTmcBQwuRNf32Kq8VgeY6mdtUxGfcuJNjiAhKStNosPdXYBfSqHPaHEq",
  "key19": "2WwS3WvBbPNQAb9w7err6Xk6NH1ewdJfWHAsDuUheSRw8EzRjhKcNgM1LSVn6xfLMBudUXopAfNA4sVhJgrebvz7",
  "key20": "5u9D7euXKeMNASQXkYKYPwLJ9iHwtAEbY5hKUVNBx258bu2wqqq5YKAFnSCSRM4sKukxxUDenXHYAeJHs9VaZ29M",
  "key21": "5eDqC9fbwmhHUu69wSWFUrHpAZHa6sMy5VJwx5LnmP8VA8KkePD6cW8Ua2EKypNdXUNDFpTU6C8a1CUXsrGv97JQ",
  "key22": "5pDwzHiuFa9tCss2KEkso7QVZSyQ8Ykr2LK3aYAfh8WDFX56iFNfUeyk2UDybP5jA8aCHrp6FeFvQfphwroTWeFW",
  "key23": "5Fs4KmCM2CZj5af7njSvffGMfkf3XXwXGp2pwrWjWDFsGuqP6UAmJrBWFS5P2L9ppXSGjFQ554pzrT4uhEH43DrX",
  "key24": "gsziLd8w8CfuK6uPfsSwWve6KiyrGnpFnqWHzzrhMnUCttTcjBMoEZ6qEgp4XzN4YAuSSWZjMPYXkqeqo4CYDnJ",
  "key25": "5kJ37rXCKL2ynHnxmvzzLfaQEiStUaua2wwyaL4tbKLKRmCwoae91eg2R4CWrs2qtSam74ocm681ph5H9xRaXsjD",
  "key26": "63TmnhEGCVHh5NYcCQSp9CVpLEo7fdUmHMetBWpGGXXiEYfRdG6Esmua61anta9Dfvnt4pMzAg1goDBxQo3giyiF",
  "key27": "2GjLpQUNaY1jGqLfWsbPBcDmCSUD2vjaojfSuJYvHgEtCLJDFzKtr9PXZvguYpyhd5EDfcd9C2TaM5K34SEwyBCY",
  "key28": "54kCb44XyD1jvd1ZDfXcw16TmxchCB5LC5C5m2iGC8biu3WZ3JjM9upYvfJvvXo3PgYL6G55Md6TdSzc6eNYyYmV",
  "key29": "64aHeG6565pWyt7FQNGFaexNziLpMbG49zHVQAyAWdde9aAafYmv2pyaDXmmQ7ubg2Lxb7LRXLrkVF9E4Xsp3iVk",
  "key30": "wtY2b6PaqjBRpsRqpkbFzJFThgD73bS4TnDqkmLnkQJWkyRUpC4gSFrsyug1WSnTJmNjDaRS4ERVKx8zk8wUiCR",
  "key31": "2a7B8f2A3Ab8w421Prnh29hEteYYUFsHxj6npoN5qY2qWrYP28Lor94DCkWpnWnAahZqHVbaBZv5WrGLkmWUrTrU",
  "key32": "1YYyATAFto7SAdE6ZMeEPQhon5xCpJZWpe1BX9ooE84MWBe2fX6gk8U772ZZwfkXMuUQs1LEbYKmPjeHgdtwc1o",
  "key33": "5Bz6KQmFKgZ6zD3ygqcSKmRg7Qx3N95zffvnNDazct8Mx3FBfj1oxyfYJ8nduwHJVgzS9WBsbAHYYDiGhK25BikQ",
  "key34": "dzV2g5YvS2b8CG6pbSnk5gMkQHrJdFUNiB9eHGbmCF2unopNsShrapyVced3psMV2rxgd7JjsYyzVrgXYjat2H6",
  "key35": "5fHV6Ljac2s1sCy9K4va16nTFc8VivanFLqDo2cWDGHQSkdpMWrhyWV7NEnrgS4oBkmk8YUzde5ivYKSRbrRPDX",
  "key36": "2cWvhMn2cwAveghr67PGrh4ZNq8mH6Ubks6KbYdhnq7vi2H9aypgDx6faiDNSimYWVRobHtkdFNMByef6eNtAKXt",
  "key37": "5rxJaACnqar7ZYp1PD4P7vJaR6fsHCqHH2fFgAjP5c42jo5ueAnLemSZJof8gWpYguK6NQgvZxn531MjajsKXR8D",
  "key38": "2pmB3qesYCgJTU8VKbZtQBBBzQVi1MiVVjrA7kA1UwTbT79ca2NtkGknyDdBZA1tAN4mW4Xdq3eHV3zpupf4gGw4",
  "key39": "3tKLxe7kzQaw7xFqXnCM5r5WQwmT7Rjyk3frT8de1HsWTPBRa3mszp16rJBocwbx2KdH7GcDUJabPbaUZyc1obCZ",
  "key40": "2rxbPnW1s8iuZPoaDW5UvMiCp4vVrLksjSBStvxD6SZpcykuxd21f8MLWg7eDEnFf6Z7BJi8vMrrjy9xLfLb5v8n"
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
