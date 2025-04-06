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
    "2XkZjuMC7KNesh6ZTxv5TBdJYQxdo3yEbroXAH8yuRr8TetxDmS5AEoqVDFXQhw2bm4bCw294RAFWUiEE1RvzqE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32v3Wutc3NzziNNnYhRh77es9mXFHSqLT1L7Xtu1a9dieN1Uc882pwpAGnxSVk4siReh86p4tMFseviuxiWa1B67",
  "key1": "3bQtvYhgHdLgVsyM271sMuYHPmAbs7NVL8s2cdfcYEqEjyf48x7EPBxAA7nn62Ebdwf5Lcs2Ga9Svqd7fo88rbE1",
  "key2": "4Scb5PG7CB5JieyFuMqc8Krgt4G5YHvDhPsPC3ovqixExL2rQxdoHjCpwsVWysE7mqUG3wRfogcQakhLxiyFAc5U",
  "key3": "2EFNaD1i25u37FJicLeBBiWTfjbH9s6u526FUDFmtXSPcR3eq96PrLNyb87h1hdFxWnFnyn96H9znkwWRVwY87qM",
  "key4": "5tGzU5V7sruT6exqxHsAjYRQWyE3oS9Bba2vWC9YBimEn7TVLrQf4CQu88y4VV7cC93EMben9DwnhuHWDGrJGTRy",
  "key5": "3tbKMC2Q12uikBjyDPtpuDkCKZuufbTav6cdbu4w4dtzrH6UXxHdBGuLQz1sEkcwzxbXiKZXvrNoKU8p5JbqfQwn",
  "key6": "4asMHJcJqeGnRTpV5xJejZvwCvZy2R9hAUF8juhqsvrUcHiULWRX6tvveHLhToG87xLwWZdBi9EnPgWnzG1XzuMM",
  "key7": "4wSD9gzZArLzaZuYMwUb9XctMDNzYLjxggD5PADNUcZjVNegAocpWv8vSb2hFRfMiGgRiRHARTyTGJNoRg9UFSrF",
  "key8": "FaR8pgK6XTzciARhd4ENs7U68C9B86uWoP473HgX9iey3XkBTMHyWmoSdHHhvHAesvuiu85tD5iyTUk9rn5CXTe",
  "key9": "44JgDUP8SpB9eHEgdCcKQvQ6u21G4N4QWaDFbAPdUfokagKojGp5mkfCUr649bVeLAiih2ykCpgtEeTKMH3uFC4v",
  "key10": "2xMGPj8DYds4wZqYRYLL8tcwHb7W2hAShFeadia1zXv6fj2LHw1ntUi1qMztLVdnH24wXSVchQVYv5ernCVNZCd4",
  "key11": "65JzGTo1Wndo8TEyokZGSu3qR97PJ2dRFrhc2z4KEb2fHzEkvQecrHiMx7s3ZrUqwd62gq19hdvupj5WVrGRoasM",
  "key12": "4CMW1tm9JwY4uFERgHJNXe3NfdLBkXvDdKKrywrYZuNdYu5zYPYxmJakbsbrnonTjidX9QheUJfPSHp1tWcugurR",
  "key13": "59cEueYZU6WoBe1jBwitmNcXGSbDw7fpa4U1MFVYv7HUmTTetjsRizCdnxc4RcKmE4m9R8irSXjByD3nEW27D66C",
  "key14": "2AuQ8ezVUzNWj2vp7eHcSJzL2yu5juTbwzgZbvt64EyUWftqDspuNKUCkNBP4FwcDpMudW6ntE68R3VBk6QXxZTg",
  "key15": "2NUGBrATwpf4N4886X4ziFnRBeZ4WGPYNdPPsmWuJrDypSveWdWZikqNPsRSApBhndus86CbV2JsNAtqHcaqrHzU",
  "key16": "3ngknDyZsbieUKzLQG7VFYecQZy5PV5RVu4ST572HYxRYC92HLxEd3LLAVov8khRgww4ttfuQ9og4D6ZUCiVE6Ef",
  "key17": "3t597hecbMPduWi6ZJGoRgkCiUEXktvsYbJLL1fyUn36Q2j7a6ba4jPeC6vUEZ4p9ZuZiRey2ieNPpG5nfDhX8vw",
  "key18": "DyTHo1oorKsipqjpQyfACmowdQirpfHYH5ezFDGxUHu4ye52dGQvWWL8BN2iPgWFxpjrmPCbaL4HYmdNZzY7HKi",
  "key19": "2a1L5y2LH5XJiRTVEK4zHGhcQLcdpX7c445UgwtKUfD8ydLgzoz3NpsjCQCyCfVtLEz7MFGpiL6KQrgCpzBUckbj",
  "key20": "5KV2Ezva4xjUu4ojCKwFeKh8Uf3DEKG7w1Y4JiEUpTFHzD5PfAA75DiaYzqA7BCsYEH8x8PJDtPoHaSR1YNGTQsK",
  "key21": "4cVcnQJ2C1up6gzSFvmMz8yeBRGpxD3hUn7qjnAzZBkio3AV34tGpGjdnSJTgG6C4kxMVsdmEevPtpnppWBAEXXm",
  "key22": "aAjGa8cGQMTPd6qr2hut1uCmUgxNsv2RNHn3B13E613WHVqf45ATfNPkugQgTMLa5uh8KPDgDWBupjKNK3JVjQS",
  "key23": "4oEmGyjF7pJ9733hdqfVhori2qWJvb2RX7KJuVEVxYwa6t3zPL9vTeZjoNGNDBGFicLSkYkvrgJ6AF1kEj7Lby2u",
  "key24": "gTXbDe2XXxJWW6U5DcZ9WVjQySWBwTPRn1YmUvzoxuVCfkn6eJ5Fri8H4FhguTGDNUXSPfL69mcPkuyAGZC63U9",
  "key25": "676Kex8WsGcpGck37iMqUU2gmtinm95dKSsXSRJt3cu3zk579N8RBMUj6GRp4jg6SVF6YvwN2mwQ58Pz3egpghEt",
  "key26": "4RHRKXNxY1YjDubCEP5ADSDnPTHu5kakRb7QuwM7d7cK2vvYyYd5NUZRzjgikSsAfvKtSmqTsVQZW2qvTArybQGL",
  "key27": "KaNj74mGncVMFqAnKWTZygAMWLYLsxuLCijwJjcbtM9Af9KzTEjVLdtHcSjnkovAkE4SawbM81jqHSTYG5hg9r9",
  "key28": "2Pf5pgj4ooX1iUuGJX4gH1m4ZN8v2coRcAZVyhPoHHqrmVyLvrFVWUjJYmgG4qtmdnZruofrg777QcQgBtMi2fP5",
  "key29": "LosmsAk9dEMyphULXjTGTV3moorfy2xThvVJwBw6JeMzrs8gnF4FA5u71hUuvrvJzkGEmhFZo8UYqRmcdNKm9F7",
  "key30": "2fu1Rmr7SAyQY1FU8AphxYgJN32n1SFantVRsJ1iadq7RLH73YH4XdxEQYAidYyzSTQmZShSKx5cM5M6E8QtXdRf",
  "key31": "5PE5Z1kk2z5r5qSGQRyFzrFnQtBRd87g4KEduVp8uLhspWawvMZ3bmGTu168mYfCH5uKo7PnTjXmjx39pTGKxARV",
  "key32": "2g9SX6TYtez4hy7gxyfS24ufQ6os98ST4RDXCFvn7k5wvdbZNQMMT3XKR1v8Sq3ZuBQWofNoCRBH4NvsxsCgYfci",
  "key33": "4qb8HYQL1TYw8kUJGi3UNw4u3U85tCN9DPG2nZHooUuKAjDKU4dCDxozbs5xTS2p9Zy7KAtZYhMpH9FXYjp3cJLH",
  "key34": "4Y93T1fiWM5vkhdNy5cpghizgP7DD6TLsCvL24F3dKTxnk1dVJr4zxowzWAQKMN9zG7tYMyDnt4Tc8qNwS3af2TE",
  "key35": "NhuQhfTkAYikAoVyHpwNHy5kYWFL5TeHvVYDmMRYsv7SGbtNTjDbiZrF6L6fTDroCJMX9wRX3uAc1JW9LrDDxR2",
  "key36": "nRiDze4viojsNEuKN2VLgWi7Ja2dvHvVmGKiXd7px4CnvHuGhwNXhYTA3jBajfMG7w4QA9cCBGGmDusLJ2J8qXs",
  "key37": "4xdC3oc4fPnMXKtUoMUXMu9APbSykYGaByuhvnamqz77PP1XsZYeKHdrojbrwbsRAYaPmuGMtt5YQeqkzrvWdLT7",
  "key38": "3gyqsh2sXTvETaRqh9MVaCfizuxKHJe1FGoQZLF43wiUkMH9t5tWUk9Tmw9cNZCAcyjTARWv28sxVt84LzU5XifL",
  "key39": "YAa8sxRGRFUhUiTQfz7nN6PuZKkAJPawFJZpEqyCKZf4NbcTsjFsSU7JE8jDD2uDbW2iNLh6D7QFrfSxtSgsHbH",
  "key40": "5hSNEJbzGHgyFz9j53wJZhGKuW7BPdSKfx8mz3drxyhf7UAV9rnYQUXq9wMZ3c8WEnX7Xo1GUVqvVw8BTGbvw2nn",
  "key41": "5UsRG5hSmv7sRDXoDp452iwCtV67G6oiYdPt8KtYNFMu21CBnMAXNfzADR7kNuo5tnKnMfHQSiYgF8Q7x8qma3SF",
  "key42": "3FnSr13pHC3DmFoPVFvRaPPdsuESsLY2ZtDPnnGh8R3u79MPa63cYj1Yfqdz3uVT4jkHotrnRbS6NUApxTAY3H3W"
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
