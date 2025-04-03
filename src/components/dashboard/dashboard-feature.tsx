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
    "3aoXzt7h6Mf2fvu1wNTia6ZXBRg69riLq8eiUdjL8yNX5S2KpwJ8qpf2iowwMmYCEdfLjcv6BdAsDYUN415VRtMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2tKQVqbpQf1BcrKdnbhb4XpJeS5MTRURMZqhcYUso3YMaCBeGs3kztWptZBBoChbYfZq6DXmRNrDyPPDHABS7W",
  "key1": "42RV9FBA1SKy1z6vAyTMsf53ENL8qwDsZxD15tkQsozfSRD63xtHHT1Yudp4Zaw4d9BBb2j6A4F7zXgmYu6v92E2",
  "key2": "fGuW2tEFke3AoSK34z7gM44j1GenKkvHgz2vzKkUVVyyvLw4m1GCLMxaf5kw9hRwJ8T6ZjhyEi5XsKbW3dnMeEg",
  "key3": "zNexFWprJjf2bhTyuX8AWbbfUPzv4EwHULfyi9vAs6C6jNeCuRe9P4zRhr7hTz5cxVG5sgB9eJnZStmaaaWiyF5",
  "key4": "cbDsMNRt3uLCMGW4KBwPjcvN88PiepsTyJYnPBmzVT2B3doJDfxNJiJcxBwQCDMY7xbdD1kySmWNe1ETwY3tULT",
  "key5": "3M6yWALnBxF4URA7piR4yqMKaeJCNMC759uMp6NBJXaAHPTMhxe4hRMWdJwZg5BxD1oKWByG5cxeEKEE6A23ZtV4",
  "key6": "5Ny2BnNwAhPZSffQ1xdCPspm3oUY1uCeLQaFuACvTRzX9zYTsXX1ZqEknx3F4GviR7aq6dXB8mkEMFb9E8rm7LoT",
  "key7": "4Gio5923c9VKkWaiCSxPrPiNKkX7jmPjXRZXDMWorb4ZtZZvR4PCKAA5uhfyP9z6kNUjDqEsbtFPbHrZ1MX79vvE",
  "key8": "fd8MvNAVqFj4oEPReAq4WgtQ1o82hZJs2wL9XfNuYejdGBXXbc7zXKi7Xddr1GdxMc3WeiztrN22hepSn8QxiKC",
  "key9": "2Wuy5ReGe4BPdiytC2uSWUGfRCKavojrUhmXHXSvg8cTUCRdTuAnMwLu1B6UjgBFJoeLF4yU6uvR6fucph6r9XpD",
  "key10": "zuLfWMRXLcFJXoo5mU1XneYhZF5DyCZKjWKYWtWS5tYViM1LfG6mQ9tHvZJcRK3gYBSpsXVcoqAJDUK2ad35b7b",
  "key11": "57r7jsKATFdiPU97Tn43ibCpByBjXtyX1KX5T6jzcRy3ofnyZSuxXgiccq7zoS4LhhZMouvKDhLuXwe1iofqZBur",
  "key12": "5cwcHnj9GFCEENmaRXnoYYLWFY7zHazsqbokWxkhQQz8rSXc8EivbjJJXAj6AM5orQD5Azyy1nt7cAnT4PLgHxss",
  "key13": "56SHWpkSdQFvcSQpBS8gkAnBDUVwkym7vjQ8ytjUvMvaeqJ8JzMdnZ4cf5J5WVmMsJWTG8tdSHNKsAbBKZMwiqc8",
  "key14": "2AVS2ojPSHdfxH6KtnBzjz3NgQpgEHZYi7BW5nXjtzJVRJP2RF3XWAmynQTicEKKwf9BdGhgySDTrWrfWnMdYyA",
  "key15": "gGY96YWvHoLQTqosuxwQKpkVBohXzxZWCuXcwcvaeRyhs8yLruSZzfG9Vq1VTcbnn8xX8LvmCZnWSm1bb48EiE8",
  "key16": "59rmTcydjkoR9SRMEWhbWKqwv9thV3Pejw4qGD71N5c96Wx3XqAu7uFCtEzp76DhnDRagnHPftWBagYihbVm3c9z",
  "key17": "vKUKwT7gExkFLqdjFhoqEi3yP17xXCe8Ne8zrgPHycYMoSCzByQZGqqcLnvK6hvEAb2J4zQd3w9q4DVvZkXJowG",
  "key18": "5qwfYgFeHHm9jZ3fHhUMFkRHNsCdfHowB43XmtRPJWLPSZ6CAi39y2DkCHNhDZzf25EhvcwTqMqa7PQgcnqa4B8V",
  "key19": "4S1QuRBNvVKkMwJeY2tS9eiB92sVf2ooXrdU84tYtCwph1UC56zz3oWHbSEwnKsSg3QFqayT9BNNVGK1cRrbcVAo",
  "key20": "Cg11bHJD7i6pFbtkeviJ8MZ3UY9D21cfnXcTDjwNvFPEcpPpk17CyrqvVSn8PymqaA1umJbqryyZKoMBWDri7S2",
  "key21": "5EvhExqHEwxUBWtobFPre7UY2wEFcYc2JZPDMZfpFzuo6hi28dqcFE7mkQ5ypJoNHyYgujgThpAnphfNm28Lzvk",
  "key22": "65BhjevrH2E7nyzetWLKct64GinP36unRohHWtApGdMBdmc7JbumwxX8Zs8a5tpFoxuGqiKtdsf8Pu8gRgG8L4Tx",
  "key23": "3YS9yamq4fBF6hNLCHUg1McGRNrvNASfsndudsyDxEvVwBczeT4YC3uxjN1xxJUNHzKNALi4DoKSFvqok9sbsFK7",
  "key24": "3xJkGB7y9MeZALWDUMwFuT6u7hSCbQgLnxWFjvzrbBmfFBu2BbzQ4ogHQodvB3bLiRzDwFyvbdcEica3KKM8Jrvh",
  "key25": "wUUiXyYFfKECEWLXEZrRaaEnbFiXsp5aEsA8YC5TiW9tk2rdtA8z2AGtD6UEv3kM8Jy2UY6rr4mFtP6togzbUfE",
  "key26": "3auNLf2T3bHFApKk7ardrWYgk7S2xvKe1iF71JLEnZ6DeFLRgMCPVoZN15uqmiuctpwP5rTrrcFKT2NZSiPZfJRD",
  "key27": "eYG6g9xhdUQX2BLg3iNqUUbAcMFbPoe54vSQeyg9CrgNk9m9ekUiEVLXbbiBWgcRvAwq3KyEFiBdz95edJf6EGD",
  "key28": "CmSyoSRtvRiP2nXEgQHdMwyMKBKRptoDHoQkJcQ5CTAYdDswiUkDzkzYgFw9maTVZmL2X86UtJ2fu6as9Jiocgi",
  "key29": "64bpmXxvK2f1xmGA2SHirEWFm6a3nx72T5RBhe243zB6LYcx2GCQYPeSFPrzRMwwhd6FsfKoxaucWsJd9hBCDSeF",
  "key30": "2rdmJeF8k96b1DdXxsBTaQp9hvusnGE7HNqMcPNa63AfxyNjBM8ttUpaNmW7akHnRcAjfqBNWa69bKex2KH8z8Jy",
  "key31": "DM8nKXQ2LqnZQCa8xKQYEL2HXRNrUsRtKTrjF5vdooYq5ggzqFQk1ejzf1XmsAofvXpPeQXoPuXELPp6t58ZkHy",
  "key32": "26gMBJNaEEV2PH5e25BvLLhkFybCbarFzv7y1rM3aeBP1UhFz7BuRW7AtTDpQssR7pHWCYrMrroG9UWXWDLGMoAJ",
  "key33": "seCFmknZTJnBeKnHPexZL9vxL2DE39TSFcETK7VdhWTi7m3zfhgYFHV7WnGsoaYEcczNCUtzeLUL9Pasa5EQxDr",
  "key34": "Q2ocB6A6cDwgQ3HSyvE9CXPu2bHqQamNPMduWQC2MqvpycH5WUQW2TYGxR62xFb1TEKmUmXtY6pGNP4qkcv3A69",
  "key35": "4416GbV6qEsbpNDxHRYbaF2aAC82zsbTcjiaZEJef3xpxUnW93aa5fXiqo3qHGk3fBAbWLKUmBoLpsU41KAPBoCg",
  "key36": "HVHhgpfam3VszPXDLdf6yQH3t3jJ3cP76vWroxmAoCGfdcvMowophRzy1cA6nZbuHxmXpxYReP8XiVieFjLTdNC",
  "key37": "5gK4HKGJPmaV6vPfZGdXe5yutupnCPoVBBxKNFZVYvKqX11jV9vfMqKanabDGKUFYFG27yJ3FSAGB8TBa3ukqJVV",
  "key38": "JW8h5D11KFVkriA9aoDaCtCYppu1S3jgGFwHuSumV4gu2R4dehJGDfoSvDUZtGH8s35cYphJKmnG56cTQqEMA29",
  "key39": "5MtjiQP1UWbqKNuwNVXkHmqD53E7YbQXPQhggrhjcedQUKrRWER8xUo7K23ET4RdJeDC47xt1TgRCSUdH44ttYaC",
  "key40": "653z1tH6Krefr2TFnqwvjEtUrgdamKRdizBwYPRe5SUtosrPA4USjFrXRm4sp8camZRX5bjSfNbYGPEhXpGiX5xa",
  "key41": "3H8wqFAZC24qK3RTzeUw4WHtAP3BGYWnjdafFiQ5RyRxVopmdSKW45uHBKuaXdwCLsPsewoCmhHpc8ukS4rjb3yU",
  "key42": "LB5Bdt6q6iYXgQzXnpyjYYAWmtkBQtVLMi6MnRxmtczZmFRttXJ1dxYdVAdxo9Dx4A2RWTMw6w1Umj7GMGCfyzS",
  "key43": "4M9ZvMN2c9Y1WS8u8fQtLJsfkxP7r9qHuGKZmqWSjhEuVg2GNaQtdMpGqaguPdAaikEPaoxPEsyqngu9c5PW8u8E",
  "key44": "3eHAFG4zFVsqDzW8ERG6DXmdaknDh6B3TWKCusGfayxEhtYvAPAPVrm2Rh3LwNg5EKEk96LRpFT79NhVL5CwgzA2",
  "key45": "4btPpHauLgSQUVSv4TfQcaT8yTtW5jzbS1izwFq5aRCQnt16hmPZ9ZtAx1Lnc2cjBqQ2f3U3unDeWME8UQizg1s2",
  "key46": "nrUmds1aPmKpzCYCHXvGvkzqDXiwG43s47e32jnY7bS7LocZJeoSDR2EA9DAqhJAY2zrtWFAsiyhWy6NvWzsQi7",
  "key47": "5e9NTjuPtDGoEabp4Rk8H5GQi7DP1m2JfsPaeksDnQn255Bo6b9NFV5wnTBekToGuQPpsebN1w2gYU5CVQR36CYJ"
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
