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
    "35x7vakiqLt3xhyLnwSvLgxHQwT6u9NUdH3hKppochXq42Waj5ztpAffibdPfNEgscRagiA3qPDkf8LsZzGKGBRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258SeHJ5zppz77z4kvpQitxFfeyjGN23E5eHDm5qDXQGYbSD7Ja448AsoQ55UpkuBRNiSJQe3PtHZ1kmMdu92dZ6",
  "key1": "4wo2tQtobWzy3xZsA2EKfTgxe8Gjg6rFspZNSticUhXXX1nNQfHiJyX5dNdWLBC5vCbHrcaDRTDrscnEjp8qv8ZY",
  "key2": "3AG2gzxubxX9GB2rKjwiLmvwiu6qneSX6nbuo4bP5jVgK6UrkyPBy3xrhqp8MHsvZg3HmySHeBCP78RLm6E3nncJ",
  "key3": "3uAfZsrmUh92Df7Z6RSLF7Su9q7DJRhcfd7S4THFq5YERRtFCg3EqkWTNrRVa39WCv356itEipZaCaoJ29A5BrtC",
  "key4": "3MyXdkLPRR849o5mM8J6aESL5r7N9wTSXwFdjfKDcxFBCMK69Y7PJw3iUzXgf1n8adRKcqa4p2phqeKTraaRs5q4",
  "key5": "28ZW77ghqTYxUVtQt1EvBHMCjZ111zNMPkyKUfrCGSzNKBSJRiz42TZbXJD3BPKe9pWUjvBYBFWdgYUmYSUCZoua",
  "key6": "4sjEDt8r65Qi4ULZuVSxiJHra5AY7ppN59fu1ysFHnjg6Wbv7U5K3DK3t4BaE9VaYG6jFoJvyM3LTMnqzsu2TvLt",
  "key7": "2PBWjbnnvXBiHpdVc728JZMBo3U6xJ5sQSjAwKxdhBgEXRhQDGzoFhUzqJzLiyD5uJN3rFi91sURVnwRKsTYzUXm",
  "key8": "2byxfuDRWQt2R2nfhegiu9KaVEUqkiGhxTvtvXpgBhjXvumz3y1W5ihADz3PA2RLdmCbkFfAo8EijjFFfDbdJzLC",
  "key9": "248ozZjorMtnHU6s8TaqqdKcC6XPPCKXvbfwkWgqoz56PpVhaL4cu5p4CYdQd9jigQEFdDA2UHekYgCuPcYr9GEy",
  "key10": "5DR1HSDZZUzLZr7FMEuBLa6SoA7o7PCVikZVbKcLAax8r4jDG1gNJtSCbxPh33mLTMXpU7YrWX6MoHxvZJ6CUkTr",
  "key11": "hF5KHruboNkMgLNSRj6NS4fDHGjZwryQbv5W8UFqNHDZy1wFDD7Frb4zXtcSx7iPS3o8cuhLVawPVYEwZGxkqA5",
  "key12": "2TkcCRdvpeDGPEVUuhLwf3A3kPJgdgqkxqfCVDA74GRu4qXJAUM7SpRpsrvz1oB3W2Mc96AURpi4rtjmjk9uU8Ke",
  "key13": "2kz7tswsUJHjjevnxT36WT3s77mhWB1RsYPiW47iKSxNW8g2YLHtdGQULEXyFePEYpZRp8XLTE5MiyZK93CurFBH",
  "key14": "2HzQYP6q9U1H2tHRphZoz8iAFgCmeWpSFt1ZP68aicm9AsAdFVbXVA6RTYT72ZWBotsPaFB4wXsqQtXo4EJ8udd5",
  "key15": "5y8GT7c3EqtK7EZEaUwLaLzjTyvvtvTxZuShfBC8dTDDCie8vJQtTTLvcJuKAAkZ7p6GfL2QV2ZwzWLy4LqYcW5n",
  "key16": "5FQ1KojuJ8P6mC78qCAAFbNhHsKtj3vfvCbEtuA98oFgMi3G8GWx4iqofAz5ENZVEkRmdLZqSmuS1vHAmsMgRAhC",
  "key17": "3xHFaGREPDYRqiGeWHV83e34t77KuRotdCr83xnXGQch3yfLGsY5oLyZXgPHmidH3o9iEBcG2BZW4QLrDfuncQei",
  "key18": "5yTFqobLDZgv2QcpZJpwiaf1p3MCrKnTZKicLAANPXx8Y3BrSt6Gmup2MmrEVUs8TJrGQ6ipfYYG4ayt4tG6ZQtp",
  "key19": "35fsAHbNaFdGCYE6RRm3tNhDt5ELcWDTz7smsg1vwfSrLMAhrrGLcZP4RZC1ptGAxhn2DD5GZE8HFHtQZeNWBmnt",
  "key20": "4ZvtWw9gz92PHnRA26Ptqg52WpUgEGPKjfP8HM5gmVrrooi3ugkaEnLpjAgYSL1jfDDqN8Vg2T8JNfihLQVHTJmx",
  "key21": "KFS9Pkn4srjAZrWgP2Mu2UBWuQ3TdNiP5o9uS1A6froqheKZ5KdAV1EVygjwScDpw7NMycssFTq2XHziBdX5tpb",
  "key22": "3FHwvLezTjohQWLPgA4q9WfYSVto7wtWa3UTaYJFU9CGVcVCtMQM4QxL9YsKV3Sc1nL4NmAwwghJAGeSTQowLc4o",
  "key23": "HKXYaX53J2xBwRHZNreFXZSAwctripXHyotrs8aM5SPjTAuvvghGxB2eR2gLtpFtLBHiqgKZAeXmKiXPzPYxL5x",
  "key24": "HYdyfheNfPuSkXbSa89kQR67HAfS68KdB86Q3co34e35DeLP71e7sor3V44qgSUuSD31eew979hWSQHE9u2UgLg",
  "key25": "4QwFMNH7pjfEQBmHhjQEDUaq18JyTBhern31rX58T6YiGcHKDaehhSLKVQ1aBTRyaGF6T2VcefvobR1dEDdSvqZU",
  "key26": "3PMcHd2PqGUskiUcHSHb6R1Vok4XBSoW7Vncc7CKAZmGEowouURdPhU6dXxtMSP2NG2YEEngW95QDqJZkRLfdAsi",
  "key27": "3z5pxZ8CnCzB84ySND8r6Wy2xs6yFUqiEHqWo5g1GNZvQ2QK6xcnsyPsa9wpp1mAF5T46tPMyvLeYne2npMuVgrA",
  "key28": "f5PeBy8XP9Xs5J9xxmHJY51GR56GtZwyBZsfax7kxv21yJviKm8d9mBYMG4X9chBF98uqMHsTidAx3zpacn8MGm",
  "key29": "2YqGBJ5bytjz48M9fKg3w5bofqukoET4EQbyH3zLznCD3W5PGD9VFNvLC79dBSvPfFXp2G6MzcSYJGfs3eV1fSN8",
  "key30": "46cbAqwtJgDg3bEihTjP6FunpzS8Bn961MJQBAxGyZgW6pYE5mfDr1NEJwwtGcQs5mcV8X8ZzW39FSv6t2rxqWFh",
  "key31": "GGf4KNG3RtFewhkMLRcrWRheHNYCNvawQPK8mqqjwt8mshAfyPbaVPFa5qqKf33Gp3nSiymaQMHcB3e9eExx4j9",
  "key32": "2dgS5As21EWgJeWWQdKp8nTzPpTJtuhqPaKdBgLDKneLpFBoKqj1ADXoz5bWe7gBBwHbAy5DXwb6atEoW4hoP7Pq",
  "key33": "3GvNU5jM6w51aFdEU1n7vNA2hYZ9XKa615wqm71xEQVBqTuwRTVdjoZ1v78N1Ntfs4mxt7BxGyTnx1DJRFdc4d5b",
  "key34": "3MMWKQnZ23BeuKcEcEcWfHAgQAKEWroGoWyaLV3m74ZCDYSwCnwwfbnQe4LSXTvRoThJXv3wWzGGLz5ZywatfWZv",
  "key35": "3ptmqMyUctULHM1UKeHYwhrxphuAbFYVzUwdHqXq43C2hau5HC5d1Z1KExeGPmeKq3yxQy4AEGvcWCChG9bUVcBt",
  "key36": "ywENc93XpH4Jxto9ewxivdwK9teWPuVZgJr9yHbV999V75XXy2H741u9zJ8h4HrG5jt9dTmHp5F12CESnNNDNZb",
  "key37": "4xCQikVo6yoJTCEwJBagqQofvngazTMsnU3idLpkoJjpGtZqu4BSdPNzzVsoqRxWWWksmbrK3g8x6oSaABQGXpMu",
  "key38": "2ZeFRFFVsaXa2Dx4EsVdNhjE9t9JHmd9Fmp6S8tYuZTL8xhaE9Wt2HZwpSSvK71AQyGmxLp892jj4Fsf1ppBwq7G",
  "key39": "59Su1TkGBARAYf7qR9udbG8t7Qj4D5oJPuWm8amYdTRzMRQSXMQomRXAcGL7CAMZBhHNnoz4Rqk25cwM6Go6UzhF",
  "key40": "4nJTw4k9Y7xFFVZYvhB7nxRiq2ehw4FAMtykxZsJwcH9Gz5z9zrhyAmaAFuVkknyT6R5vtCmEUjBafjycKLK9eau",
  "key41": "3onCfcLLdSv4hxBZ1VEiBEEUPU8T43Ddm7SHAfmwcYTEKnDQ4YUshvtWqd28NjV4aVGpUFf2AbfqkdenGuSLWQ67",
  "key42": "3iSuaRnF5fBX4aXjg8Qw3BrZpdSap2GaPUu961Eri9FDnhoXURxAYr4tk8sW9yw3xTnY9iJXDXH6wg5cj3dSSgwS",
  "key43": "4unuFFidZZfwt2dEwYcpJjeyZozB2WLsSAhqHEMxp2HarYPfQfxyWSabMLsJaU8KKrJFqoYkyQ1jGSzNBzRX4dQH",
  "key44": "67ZTBHrQ8diAD1TeuoiKiL5NMZjAZdqEN8xofy35uChqR4jj1umErAPx4FBKqMR5T3u5Tq1SCjhCU4YCjMgpUnGE",
  "key45": "4WNe5HfSBqL8Dzo1dTM1A6BybBnftgwZkCmir7G4FWD57JHHXDGxzBb9v6H4pkZpGqUV6sYgVw1NTpd2dmSsvEsR",
  "key46": "WUC7b1rbQqJjJvhuTZVGwLW5BwdJPWv9v4g1a2oCDU5tkh55FcMyJyG8QkGyiJDB4kpZRmsxsExc6qv3kurd7ks",
  "key47": "4Crd4PDchfKmFQwSMNZnxiN8cv2feEsNKzVTWTRRGjCXkQhebDZ2tMNoCG3fPgMqKMsPssnuBEoDYqfSRcNzt2AQ",
  "key48": "eQ5UhXaEh9DX2Y1UpvkPqbP4bU2kVz3TDrE4PfPFMW3k14Lqd24uhKLMcGJsJosDqGz6hrkYeN3jjepzVsSpC5B",
  "key49": "JQhtKhUuzCquDtMuNk59GjrbfQfToh2iM34XB3wNGkKbcwKdnmDcAp7ctkw2NNAoNRWq6D6dck9hMqCmobpRQ9s"
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
