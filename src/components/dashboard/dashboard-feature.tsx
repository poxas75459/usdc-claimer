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
    "55W9yhpPJf8ciAeo9YRkr1TR1JSLHuWNkcCmc6bh449PuPfurMewXW5iYCgdMovYc7W5bhdQPeCnepkKe96QYXYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GpdTWfrPNcPdx4dh1J5jE5rBSto1EDdYPS2cxoNv7bSAB185bjYvqbBUFN5tVaQPKrYdKjjZK7KrnmpzRtm9BCq",
  "key1": "eRqpnMSMfNSzpxCYRGZt1tLGZXTyr4vNT7Y6cqJLkFtGnJBD8Vsi8S88rPyPfR2LpcEjKgmio5rno8tUyFrfrEK",
  "key2": "4WUWEY9sEP1k6WPvi2ZVawJGpvQQZPq63JgLtNp2Rnv5812fQoxFaNvpy2n1HV6DLXnWycb9wBLoRdVZSpKseWpt",
  "key3": "3rrCqfMbSLPjJCAvqCUX88wJ2ZuhvaLLeKQ4nSzCWcGbXqAdktcMxK4r4vqfD6SdySasUcRE64YHd88Nn5JHprqu",
  "key4": "5kU96a1qWUkPMyQT2HaC1appVvyf2ubk9U9Vs6pcrnN58S1iJ97qx6wPhfttia9gMXYQyV9S15vMRQvqJCCkKTEp",
  "key5": "2PhAtgs3CW1WSLBF6A3PRLxCwrr4WspwmJ5X5Gb9BxUmsUmovhKspDgCHGaFqQYKjjLSN4c3UyzdeZJBE5gPMQvi",
  "key6": "44QpENRjaq5KVDxCbm89uy2dNHKj3r2JMqD4PArmVZsPYui2tjWvdTvKTdb2BdPaSGPqyBkv1BicmPJSTUEgsPmb",
  "key7": "2W6sqv9KqR51WvRiMLKn9Wdc71vetTriLZtuGcbWd4i4fsdEmGjVsGQCypq8vFT1TEgbjEeXCdQ6AhJrMLTSxh2e",
  "key8": "NhD5mVhgSxx7KHq4vJxd1CuG4BAN5nB7LGi1WMFP7nCwBMQMG6A7hEedaEi16XgvtGun2quJLb7EsAGQKeCea9w",
  "key9": "2WbgDn53Jn4bdUzbqH6evNNSasxs33KXRyiZRSHCu5Ps17SiFAqdTBvofPPUr4wYv5ycywMVxvdV7kGhV6Ty5Vcw",
  "key10": "5DdnAxEAfiP8aX3NAcREykrKL62SVayiJdnMLq1EdFoUvSsdaheMCeAZYAM2g4uDmEzVqDLfPHFx2Z7KNqqMUvKJ",
  "key11": "3RQphDk6BqZjkFhjeF8Lb8zoU7d3VwCn75AeDiNL1PLyuRB3U8v3pnVDyc7mQDZYYEtKnf9sCP8vpTeZMPyfqXTi",
  "key12": "5fJZBixwtDaTm6npFe6xX7r7eaANmBLcgJpMcVXhJdT739wxWH5xsaAGwdVfYYWkuiYpM4pSr8DwywcWnYLmm14B",
  "key13": "Rp9rz6Zb8GFK62ezUczWzaDa8GA8LRe3ix15v8Ek5fyK6wjBtycj27BKtQsP9bw1vVDfJoH64fUxhGvo3kLFxBp",
  "key14": "2HLp8HXVZ1sVy5huapPTHZYM5CCadtx7E3bVfBdjCaz5MXcQHAPoUi8Dw3Lqem7LQ3LNRARTgj3VoqMSK1NRUBHc",
  "key15": "5hcbbyF2BTVVJYu2C4oEhJFcXuJxy5V7hMTb9ZHUPHjtoefWjuMuZnRU4417KHNiTmuUh7rYxvzPaWssgsiZQ2Nu",
  "key16": "kZ977ZJN883WQLsCpXuxgNK7VY3Nbx94v9wBDCt3aWowLxmmbUdj2BPAV7i3GNsNuL9Nc34p1VnPB56435rQeJB",
  "key17": "YtvevSnkCjY6uN15msKLequJjWmGk1KR32wq7DQmyTdhPQAHQeXTkSi8dqWavoqVkqdt9dUrV1MPRYBFkhFLMYV",
  "key18": "2S4TXdpDZyBwCFTdyKzjpTh7F7hCPhP3eXA9VnzBzbkcUJzFbfCSwWpz7KCi49zKy5RY1euWi4Xc94U6JwYaU7AG",
  "key19": "2TpUdCaRtAyaa8wD6KgPzoqhTXAK3xW4sfwQd5JeD2dimX4FBytqqGv1aNaWCBkfHR6vKLs6aLz4YskCu2gDYMF7",
  "key20": "53R6EbXpnpNpRmuK2YdAfuq1f12EfJHYVAo3uXq5UvwtUj2oZhAuqNrnfNSfP1Z11hx5Wmi74Y3TSBnC9kgVemG3",
  "key21": "3BLPsNMiU42Zh6oPTiefz6XveizdbXvhnvjBorc9dANsmNdoG82DCPDz487JLva8UrTE7Sr14CphwikpzAVvKFtu",
  "key22": "5FQKgSr7sWGsErFNkQL4PTjJprPw9hEgGtuAc7SQ4T4W68FPhD49FABfbQoEH4ZuqsbypCvqwiTW8e7meUWjaXvg",
  "key23": "BZCW6tzR8R6Z9LKwsXCiJw89A7XC652xfH7aE1ZoeKp9yNEphfacF8F9Q8JQcwEvHXS4qCJGNZkKyPNC2qMEY17",
  "key24": "66j2sgqA2UuoELRLQ7sYQM6J9ctESSMAMTWw6HHqRJWhrVktKmf3Nj5giVxuT7wdVVm7ooGEsitPK276Lxwwn3ft",
  "key25": "gxdRXTJ1J4JgxpNokf4gqmBXWqeg5Cgp4w7DKPBXhyTcjzdPGr86DBKjdKwj5rNUue9mpjrogLCrKJg4HLmi67J",
  "key26": "oQcTC3UPoZFNWNmpdxSQA92ibMB1Eu5W7uDrqFoTkAf8K3ZSTzENV6YBRGkmBQqygCKi1E4FzYodhkcquX9yUWm",
  "key27": "4ZDcsp9rRxRMmgpHeN2rShhKPguk6tw3AK5iyfzLWrwwTBv1qZgrnw3VPbbapkF7vBfGj21i7gnpi7Xn6y8BUtas",
  "key28": "4CuNYfQj7oJo8D8Uf91n6cGAeRAqECNa8UPPnvnA9tY2BTvMUAYmhN4tPzS6NYWiZWpWYRoe7s8qm8n5bgQjKtuV",
  "key29": "2dDCBcFGHVLoXTA9vNtiFGVUKCa1bBUoW2PCGiMUXZNtiVry7k6JucPBDiLCKLsKmnf56pRz8jqAJu6dzwa9rjny",
  "key30": "3pbU2ZiUvEu4Yq6Ld2TmXcrbrfxy9aAeAsMAnfuXK8UeSSpCWQhgCn287g4A3gALBXJHoDv8GB59XdAXAfRjiayd",
  "key31": "37Q8nnx5GWomA2sD77QQAcmY4PZQ5UmNe1vqn84fH7nyQrBfjuvL7zAS18gHqbh1qhfxZ1HsuQLBgGvXhMWkwr3P",
  "key32": "3qprMNcw618PUCWXHw4YtvBKCuD8VQYEaP9qVGs46JKKXiSfAiPnCz8UzDftNFv8ocVsiJsibrnX5epswpDdwPWv",
  "key33": "25UN1k6gfVtnkZsxvzd2b6XehPR6Gp7M8D2C9CRRN4LTE5wHPy3Hdp7dzNTQagT3R9VMV2hTK9CsXaTuixYYjmtd",
  "key34": "58nyPeSqeJNoRv2q3n9Gb4Nnhr4EFMTTCDY9ahkq2FuZka1D5KFdVxK1BnASHq4EpaoTkf5geyNdLE48PEFeNpNF",
  "key35": "3Wmm3U6n3PBGSJxoRKmtKTjBCXS8YutJKDvFNLe1KvXE1j8rra54K9Hbrw1YoYc1ZXjQsKJ8BQ8ZGLTZDzbVm4ni",
  "key36": "3iRbNZobEFY2yxPd2EVFYTeSd4Bac2zrmrfxTk7gb5cK2GAXGDSZDCNKmbxHk6go6N8TxFhjCJPxke5juVyy7c4Z",
  "key37": "6xBD6EXTtRdv4RGFdiQPMiPd5zez7xwHB5Svu3tDSNsHo8EqxAgnNXVkNBhmzvfNwAB91ezGtFtGu5tJc7u6EV8",
  "key38": "23GxnoGbYDGWd1tFJkDfHrXYMbFh9HFCx9Ry6PYzu89gfnh79ooxzhmfDnBr8zRBgaT9BYrovH3Jfoz6KMTnSEJ5",
  "key39": "2vA9Z39wXLgiEkNVZ48pw9fQzBiAVLiVzwrRjQYr9FsETrU8Fk3ufCVkvoEXmCWgSCyejDkcJ5fw3Va2yVKGFjqb",
  "key40": "hBEAydiycqa4SMyoFpvtWdjMSWHueB6EJhbBqhRrBygD8bXRdV7mALsR9EcLuv9LCcgiPt6MAnjwbTVuVUdddCc",
  "key41": "5C1NvNXffr8nzzDVzCcEKawSJ8LCvAg5iGYwdTqPEKjAkQfMJg6dKYdo1GSazDL2U3erJK77dAHAoYf2HUqGVRxS",
  "key42": "269RNiGaLM6k7yHMrzZFAojcwkiytadUqh8AXcHwX8ZVjjJL69QzaZZVwtQoGYSJXAGU8DdKPK6cScr29PgDhQHb",
  "key43": "5mRZXe6bkgBwKizagrjmnTr9uCHABzVZMfZWXoFkVCAGfUMH7aKFmvrvaiDVzt2VqEpVxcgpmEuwyfELeNzmePXS",
  "key44": "2JHirZmnNT2zdFpvZuuu3QUc1YenKXTpVvn4iHWFKReuAg6oLre9XQCeMkTkaoRMU7QsfN2sfGFyzaCwDCAg27VW",
  "key45": "2y1J4WNXuJqrBdTfrT8UHksRZamJWVLt4Hv5YWQnjVjVoDndLs9mmY9EXDw3LemUxP37nNApFP64YZnNCHcstrJZ",
  "key46": "5h5PwXBiRLaDf8wL2j6w5UpTjDFMZWeXRC67tffy9CLiF3ajcHjfpiWPEQsL1xBKievQAk1WsQSMEwP2ixSBnQLD"
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
