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
    "5kPuRD6XvskiahPgDiDarWyFeTrbR3cri5xJ3THV8KdL6RbFHzayeTXkudNukTR6NvhJ3eqcKVibxvFwbhKBvgvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53t2jTHzyiFLFFJ7voMWQ6c9vatUtEANY3QeKqTJD4n3NhLxJWENrJmoTM27dAstrHphbnkCNNxGysaeqmReJjWa",
  "key1": "5tPiVrwbbBzwxWuNXQ2HrWZ9RHFR1aX643P3HaHSCF9YUV3NPLUHZqDuoRYiBPi1o7Kn48JFnvbvE2A919XG5Thv",
  "key2": "5d3obN8Ky1hv4xe94HPNZXW9pNFGxADGsX1UoXiDGjHDNQjy6f6zncFakWCoGc2qJ4nySUHhMdNxPvcLRP9ew2SB",
  "key3": "2HXNcPD5vSPTAqbA1pixxvi25GiUjYuJojz4NWmxUMPDakkqrTJaFC6Zr8DSX9FsNWiWx4ChsQi9pNPGyT5aVevP",
  "key4": "2awzq1HJ8axFoh3fkaXktbXii6SuH3UXQrFKTde3DmGnYbuG6ARiT5c1s1ULP7AqJULEh2FfoK8bYcjkpq15G7b9",
  "key5": "3Zjd2EYRpUMEKbfEck1qPGQwKiX8BtUnKZ2ChbZFfQpzTReMV1sEedoJ72w48F78yo8DAzVQzT9c1VfLt4NDkHYU",
  "key6": "25k5jC27wCvc1jxpDH9tFAsN9cQ5eCDqfd1yCgdia9tcBrjLUi9qKLA1y3msAjeJFPoLKoSXYdqs6tb24oXTAzZX",
  "key7": "29D93r9SqdavnSBRcUrNtsrh8gcmQdb4CyQM2gdRnGwS1AQwTUKcq83ZwRb7sde8sr7tr8pKTEU4K7smMQHQK7iW",
  "key8": "2rZAU6zYYNfRRdm8H5Uru4yMNiRNgj86xrvmqRDiSDAmqCSmREdu88hNy1JfGy2YDofMoNcgDfZkzQEdtY8HaUjU",
  "key9": "3sjKsHSa6SDqkGkbD2sNLPunpoPheJWkYKMnjpuJeZsUJaVMvVNRJw2skavTQsYvmMvQpW9qfBmdhQR9XYvRX6Vj",
  "key10": "4oW98MraTtiz1fcWFdExJqqjtLgytpCf37XswihtSVbAYjnyS7r2Z6TX3ahoHDzvQ6kCFWjrxTufULjH47Yq4mXc",
  "key11": "4c9Jf2UUrqSc1XKf7TPJn7jMcgGZB2wgoSUB2Ywaiyj7qW8G46Lzh388CgTPX7wRKW4R97neb5BBQoaRybRQfjcA",
  "key12": "c7LnBuiTwCUPRRXzGxeMyXpTEvQM68UJ4YijCHLshBLpGEdkyS6ksKpafh2hRc33fyzm8Jhf4gdn7gZnjhrzrVK",
  "key13": "Jj6PgdDA2DGoA1euq8axiWK1PiuoV3ugDTP9rfXrtmLVYUQAnEg2teFYiHobTLxtHQjYQQQUBRWyLGBVrY6Fww9",
  "key14": "2arEnMYezjbUrCjPQkqJyAsq4MP3iMSqQFBzW5QCkyvMiU6VvAxLU9knXMuPLdBQmnhab9HnP2ygvqbT6bnf9NK3",
  "key15": "3jN4qb2cDXmBQoAvwwjYXoveup6KPnjyWheGY5yVxDoWdfXiZLckKJSmjx24jaz2v3guP9Mmg8MNHN3Q9uWtgwDL",
  "key16": "3ET4LrqbFYajqi316XDZE6fvotERQfGmzMUueR3JASm9ELvYUKzCKWrvCS5TjFVkPAvU1kpgNcZSNfbXHzfKBhKH",
  "key17": "2WYqgEBLVYj8SLQnnKKqTzCaz5M92aVuW71DRVxYgMMqTACpLCuTaFKbkXNiehyJk74syP4vwVD9cf5SzivDAWsj",
  "key18": "5DMb7FF8PgfKVaDj992V3CYM3S4ncc7P6YKx5LMGK2ee4GysE65RqZosSYsuCdeSh7KKxPojz7uTPDbKJTTXjPgj",
  "key19": "AKYj48DbDyYNE6br7mgtd9gv55h5eVd9KGQQW3jn6CiekjC9V38mPAJnK2XZ7xiPrxFGgWQzHw12c4aPz8W9Rd7",
  "key20": "2qk2WMkKNtZoGXWNkftNyqRS74mSUBiovijCVA7mLpWgxQnJUVmkSux1b5xFXsJ2Xmx8sWhTK6wfRnx4pPXm2peg",
  "key21": "4rWmJkF5GbfcV4m9AupRGsRCNz5BVMbEcgVQtxsrY7HsUooUyvLcyDUM1DURpef1TJ2yTkVfqCwsTzZD1GA8oGBG",
  "key22": "5BLyGz75kLyJtuzzcpYY21XjuBvmJn1vKs3gkCuGzmjAjdp5XjSvEavehvNEuAFvvzE3xBAecCovqVLR3CXSSS55",
  "key23": "gkUpFLsQQ1BQhKcKm21dyDzRr1UW66sP65EiPrtdSZz8WnwexmuH8N5VpsvaWQZeqrSda4cCuYL5X3krfzJm6bo",
  "key24": "5XqbooMvMx8NPUQ5vVpDdAtKZ3oQUiEkHU1Lfh2NFsNAnouM2UreE7EVGo2Gj8oJCoRKiPBkwhCcQutk22xppHro",
  "key25": "2GDXx8orGCXC7WsxzibkWWFobL5aGJEELveTCvgbHPKoPF3GMwcqHreeAewRBkcCYF6PY4RA1Y57jZAw7q2RSq4i",
  "key26": "5uu4zVzSwK5apcLnoY7J1XKNx5vvhQ3ZmaMFQEmFDVFMCkNrppm4iPnJYtD7aZW189Ma6A6LZJFfuinE2QCLFzQ2",
  "key27": "4vtKiuLYTVasxK58JTfisCDkXHD1hdE7rYe2ypc5xMcutjMMhFmoyoA8c9YanHyLPSYGCrh6MBL1H1HDVspHos4j",
  "key28": "3t9voF4SK6k5RLAjSpmqVTmxBo6KBjDPttDk8WswM7XFDdXXv6uM2WG8jqTohgEzMY3RzJyoNPwbLmnS6iHT2bcu",
  "key29": "2E5Pc3sPS8EFhYq8vHjDx4p2DcbKhYQZ78YfCwjzZS264enZToSJorLKrr519CakYt4PpakiVMWQmWr5ys4swooY",
  "key30": "2vwAYBGSawWddecYRV6Tfzj9AnZKjaNbwKLdVyYkiXKYmbMGEsjnJUM2qw4duZmPMSuPhTvBZwQ1xcVDUZsuWVCJ",
  "key31": "5DhjEutJJRdmuiVXTRQdS2zYBUVsyhd6g7GwpZPBB5sZPFCMR7RH93ieFz3SHtwbbDds52veYjDySSHK3T5a2vpx",
  "key32": "5VUqZLphcbgyEsRs9mP1AHn9XwrEquVf6ByCY7dqRok7orULPeAqkJegqKgrw7N6B9SkqVgtp5xS31WndqeiKPxw",
  "key33": "4BR6siy5Qx97w6Qs8w8vQ6YNNaUEcqoKwvLfN9wYzjZvAGQGV5zK31nBCvYcT2GWP5yK1GEdjrFH6bwBvPWJUkig",
  "key34": "qMMU5Pkm46wAfWu1tRKx8cK6iCqNAtv42sSY1DCyJNXieVqbndXpeb1GSjyU7yBQEvxv38PTKTrMfJ6P2wtNPHp",
  "key35": "5j7Lxf8HnJKySz1aTQQnrYdTQpaXaynGXMAujKusZeSoN5trb3V6aSbQUXXDEEt49oyKVvxk9a78zA7S7vVcHAGg",
  "key36": "3NbuciTuh6XsFycVFVGTwEDDvfNsAXVhE9YKjzGPaVmf9vzafhBDcKfX7BvfmfmAJ67yEiCeYAgKtdFHuvM8w6hn",
  "key37": "3KcL1i4LZ1vBmsF663Db3MbACFWZy7bJvZ9Gbnvie4kZNGSEy3Up1kmZsKg536CYdUUZpmeWCPmnPx2L883QL9Rr",
  "key38": "aK4po1zMpbFBUWEuNi3rn1Hf33vBJDkyHd9nHzC4MKthNCXR4veKMh1XhkuKxXaQu2Ew4G7PZdN26BCsjVUZxuZ",
  "key39": "4LpuoDVKQnV435iwCGH4myZj54nHL5ooj6s7G3GNDQCFA3vmu7WWFCE69esnBdNebxsNNSRdXxQrnUauEXWXBDY3",
  "key40": "3wZbtMkso64z3dJLNf5y1qQs7iuSVKk8uHXqqYMFF16SwUdSChorjeB2PwRpfMxmJUNM4SZA95nziNHkCj3PyxQf",
  "key41": "4sRyags1TFQzVuSY9gDnoGfyRn1Kr8dJRP3HajtEnT1b2YDQHz4Y2Lg1dsLEUwxPAQksrAhVxmVsWDtXqHFXfZKQ",
  "key42": "4NjZqvpRLZ6nmAAL9AX4vkkUznsnWtcip2opGoK5x5iXSg4TSoUFt5ZAdcarQtnszzG4hwvQqdibUQEAeKs9fZiG",
  "key43": "3WmFnbs6FvpAKjArHQbWcDoDFEUsgfwArQfLhFDNHb9tLtmr8m9vifGrjYMexw9vtUNXmtbgDZkViH2i4vTFi8eN",
  "key44": "WUDDziLp6sswi3RzfhheXWznuzMiVNXtUdjPFkHgHb4ckYhdHTtap56jMjv6HPLorc2aze4dwZ2Ggdz7P2eY5rf",
  "key45": "4ugDH61HPGKXiVUJ4QbeDt3ZpmwVLyYsF7cb4n7H4VLms6cAtKuXp2MCVZTjZJ9f9eTrPnkX3QpuTb9X4NnkpdC7",
  "key46": "5Q2BGExD55RCwJM7imxCcotQ73YNWdcxDxSXTAb8n9syodH7rPGQ4x3zzqkohaEY5iNsGGmHBq2u9qkCXWMZjAGe",
  "key47": "4w2bFQcCfpGsgYFoprmuSYKMV29QuSPTq1HncyoSAjeksXTNTeHgwTpLczCYfhNqoLNLHC6YDpwhJycscBgEkyJd",
  "key48": "3YzJzZKF9SoKpgo2yxU1U38Gpq1ctMuMrjCaQBLfe9WpASMp1VtDNRsLQ6kbwnySJ1cCQfe8vNPCGtkEmW97jpJ5",
  "key49": "1Rcr138fwn3WT1xqSupMHCpVUkjcHU5ykLgDTWU86LPWJKYg7tXxc9AyHtPfgDiMh3xHkgLEwanYJ63qZERdAjT"
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
