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
    "3B3SrDDhb2U2J64v3iaGSUSorH5rVMVpF9ZaAnyhYRUaNUKmd2Wkaijo1zXeQEXoXTG8pdzs1Z4w3xAfhsfLYVvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WGzaP2BFqoDHY7XcRTNPWSuHY8XSc4Qaa7baZWPXLjiYDtYYYYebGx84uWM7iY9q2rMiALg4bUV1vdhdHnBqxp4",
  "key1": "3SFn8X1iBGFGr3XGaJ7UvRvwvyptbEtGiQ75fycr36ALJ9EVw6PQADRnbrXudUQXfKC2xLP8UhEdegPy8wRCT1w5",
  "key2": "5AnMF1yLJLZuSWpyHKsC5cQ47ouK2bH1Eu8KrzAp6W9NZR41vsoPHtJ4yHPB4DNPyFzDzFsRRtXekPXsGbXmLiVH",
  "key3": "5zQrmicfsdEYSvAuGHPEsKiEpkDFFxLFxuf7uM7HuK2DUMe5oEa3f4FJaNEDYHT7zTg92qcDVP1HEDjJA9JE4aYt",
  "key4": "4M3QmmGbSjoKXwQDshQrW5Sekt1bHx6b4aLq6RfUzabgqFifVBNiNg4PQgsvKMXnsrQjdkAyabvMEAjE8rUz5VL4",
  "key5": "5f2WY9ZZnxiJmobSf8uhnt683VoXMjNNT5jDzLaCtnovNJtKHr478Gr6gFx5RuM3icSJmSTvGqugg89kWpk4Hr1t",
  "key6": "uqphAYPatecDeCwhKMT11rBooXB82CMNSAJGGyGf95kw6tBsa4sMCMZd7saDsngRmN8V6mvvAUbUFpKvxEKijYu",
  "key7": "3pF1zPpSczG49KHLsH8ZBTABPir82Ng8oYHSmZULQRTTw2WzyMxBvYxAFCq1aLAn8iSEwD9tfNofQPkRV2U5dcLn",
  "key8": "5HW2nKsKcwgXWGDLgDr5v1v6SamhxqsgFafD49rvCBhoS4VFN8Gu5oRWRGWksqEWaxgAe5sFfKhsdAyFs8VfgvNU",
  "key9": "b9v1DdCEdMMgR9B8Nf5UhKVE3naopDohMEQPEBZGSYNxhFUSTJ37dwKSXoA2VmG2h8DFK3RjRRUEp9SFDWkD17X",
  "key10": "dFGsyyeMZVmoMphbdthtPskBrq9jf61CdeQC5C6LB4ZxBHpB5X8oTTUHEn58G92ebBAq3stXXGopPy3JF1Piy9H",
  "key11": "2Q5YWep6x5EMyLQhhNvBneopk6h39e3UjBY4ztg3qo9FTWbjBPBfsNDQ9xKzWhUKo5HZnQZktFP7FEQtcX5bZZvD",
  "key12": "PX751993ncgC46E18DwWZNiAQCajgbzVv9yxQ2Vto18GfeN7MB9BLNZShug27bs5HqvvtVfsS5u7bCGajqrGfKb",
  "key13": "5roj8yDBYY3pN52es5zoJxr8ztEGZgmozt3r5VKbNs2CjD4TH8gHJJpwUJur3s3rgZP3AMGXfPCWspqh3fMpAoB8",
  "key14": "3JYKCW67Qo1JZmLEkWdJti5ZqSWjs5GpNqkE3Khygcen5bZgoBaP5eLFHp719gVjQC4x8Q1vVwfopmx6UWhbhoE4",
  "key15": "3zYs3bf7k2oRcsV4WbGTa4J22xUyDvfseoGXfVBB4BZR1qFxMbknFKdvYVxqeEGR5eMhkpHgayd25XNsUWJu4frZ",
  "key16": "5V32wUPxCuCkYFDQVC7e4Xu835jPeUCMFdPzVs7qkeDU76sjfgM7LcZsPJYdPZehhUTkuNNVoYzdkMDorGt7qij4",
  "key17": "bGF167kz4tg2BnAM5fXgMJV9VsXhkSgWSyhvzgJ4qx9CtUpWHe3Povu9N5CV9NWo6hBf8GUvHEDmnAnJrDpC2ER",
  "key18": "4abzkskdDDymdTCVYDnx3QST7LrsK4sxJLnWjz45Vyj2cz8DTWFR8Lzw3HGR6knnpTaDCK37NuF78WbRyRUEiA5S",
  "key19": "5wx4Tuv4PUeonfDAbmaafPyaC4f2y35LRZwFCBPV52y563rccgJcPqjHLZC9sxmWbNK2sqc5rY8CaWMXdWiuXz38",
  "key20": "6vQuVwCPfoFP9TGBX4B834W8pU8QCMJmv2kMuuBzzCULdJjfv3a4cVPKrrTL7baxfKdnoBKsrDb85DCD2MJ3e2x",
  "key21": "SbpzsUtFuYpNxJ3K9ET3Yh3VSkMzRFPTXzLRVgnaweiG8oZZoSTv17WYx2kQDr2xjHQwTn9hgbEKKnBcajp2Bdy",
  "key22": "52aU2WuKq37stJjS8BeS17dGNavQbxiLrWwYoBxWAvusgS5tTL6SoXHG2z8R3jAi5hZiznDhf46ZoUoDpfXpt12S",
  "key23": "2gzChwQdrG7vA34HjRkh74NNSz1M6aCyKAhRmBvrTKrNZngzuvp8YQ7Uw5CcWBd11BQh6qd2Ax1eHuphLVtZGynJ",
  "key24": "5BSq675PhpLp5d3RvQWCrgjFPdJ4obdHZ1PWqJwCXggdLfrnDhetUQiYstKZpYfbEH7WNVCcdrrAcnUf8Lo9wrD9",
  "key25": "56GSzwSDeeDroQ6SiznReQzJcAsJjzS4jgMh1T2fzvu38ccpzn7NkUSwRTgooLXyDPHWyJ22ULnXRJg2BJgGpW8G",
  "key26": "3teNmpbNeEcFU7LuGtG3VuvzV6D28zgJrbrzEfa8LwkPxa1UHDi9ZW11gf2BAbLQF6p9iSYkAuXw5H83HDLHvKKK",
  "key27": "YALoXNKGxHvuMRn2hNDn533uXe1htAVdHLoHGumXiHXVBzWq1qnseFTdrLtREaJtT5edUWBQb9L7YBenGLgebim",
  "key28": "2UnEqngaoNqMDMWKeNj4nWXwhBzbHp2PMEiDJ7rKEW4MUuXAaczWbBaGcxzHsMzseCzzxEKd8V64gJwNXRUkSNEG",
  "key29": "3DxmEDeEkbU5z7c5XYNL4syEwmz56zsQmcP8RARhokwYG8zaVoyD4HhmfF67k5KBf5Sr2jWyepkKJ5qQ1BqF1SwQ",
  "key30": "5rx9vgTTWki51S6xuJkJXog9k2dE4c8VnGuAGXTybhQG8ez4r8w2drv1ibhVKXrPbqusnLGho12n24aQ4i5n9uvt",
  "key31": "4PMNFHNC3xsbTEDMdgFAbjFXGHJhDQjtdZBo1RSy7BjF2HpT5uU5Acbukt7wTdZNzm91URzyRUGww1wKLK4o3W6q",
  "key32": "35pMZBX2wuTv9RyXFegXg6q2Mhd1kTqadD29niBchF7tAntygeYcWPXupM3fXeanmT8cJXJjy9Sun5LjRwMsVEEb",
  "key33": "4d7PrGMxy3wGGuMv5iea4vy4hUEGS4kxEbdv5duGjDhsnawLk6e3HyWbqbBurNfWeXnXY1bhv7X4jp7NVd9N3kxJ",
  "key34": "5KS9GbCUTE1v1A6eLMgrzgTW6jeeiN93dkbky44ehypz5V4feWtJShiSvhr5bJHx3KQMhKFwtTkzSGKGZUcr1jkr",
  "key35": "5dz4hetdMjUHvbvzyYDW2JawBBjFp2f7vnHNd22EjYCZhXr4FHzWGnS1qWoKyrDBsbpYzs2Kwbptxg9gjNqA4Axy",
  "key36": "3LMEjS2KAeusu4J6RYv95wCtyghegzw1Fy469y3XG9m3M6vg9iuYvUH19qWgY9PHcg1m3Qs8rek1vc4BZm79nPcG",
  "key37": "5R8KyYwWWchAcKHG3G97DVaiK5uiudBdGKtqJGaWFnEaAFCMkQVzQrPyonaMEFoF7x4rsyRVFy2k4HuJ6d39QEQs",
  "key38": "4ViVFwT2eBknyz1CTY7jTTwEp913Bmu2AUbSYpAgkEhJ9gGjy3yqyTHb3ikbtGyCLAkuxwVnnnZ8Mcp4dFWyw1YS",
  "key39": "54jiz98qvpM6oz4zLfBeKUzSNpXe7ULek3UGkVLSHvznfGcaUGGNDbYR3ZtKiRAkxP5Nr2v2BgjVVoKgxpx5sBzD",
  "key40": "2YdLzyZBvsa6SE1jxjaSi8TRKJaEf7NXs5BXjwDttbS3TbQ3FFgtJ2y4yHj2BeBLHxa1HTZuAgTXkDpGummFdKn1",
  "key41": "4aYkTGs8ZaEGW6eKa7ju623zHjRp7paR5UpdZkN7avQhwLpMeqWXU1L89x1CBEc4RXYxkXgepduRY38uHKkjrGz8",
  "key42": "9P31ZwNqeXiddWGfjPD9hy8vJYK28LA4ThqqUwzchenu2hDJLjyiMyRALHzCVEiCiWLrmieJNz6ArkLYbkBtdgR",
  "key43": "5eP6pMdt1U1fckE3ZK7UHcEL3Gn2s6bFVCKbGjBRQYoWpvPCptTu4qffHJeF8Z71UwRCwtPhNrnLDAaNWBwJPh6t",
  "key44": "3MNvpdfecVz3bzZHThHJMtvmney5yBXkVNdT6NbEQfwyjZ4BHKT23PtZnCwjhj7zJLv9XjqFJn3PLdPHVzz5kJH5",
  "key45": "5FUTup36466KukUXtYmVAYFFwZvN3vgs8TJdCLG9CdrdeB5kaJF34mz8VCuaZR9iRwXdV9ckkBoTBEwwWVNtMqdL",
  "key46": "48xHVZYaUzrfdfFSiWaQ94QCkXXLFmRAHGAeSgPR6JcYwtsj7ZRf33KUucTpdYdShNtu3ez28MZRPJRBrDeTUnZT"
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
