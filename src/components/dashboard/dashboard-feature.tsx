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
    "4yHVwfRBcT73LTbeMgCkb1Pu3BXKvMEg1nuuzdFGeDhW27bF3h2Dbm83VtGpaa7ugMvKxnpwif5KTKCSqBxBpbxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCK6KxyCzy81RRPAsEMw829Yy4WBgENtc2eamzwiUc2vU7PCBTnH4GdnxHrue8WQ8ar7PvHjkbobGh13tkn5RBz",
  "key1": "43nC8DZDEyv73Q9ikCSm8bw5W1qL7RDCPam8Q1cuL9M8dANE3Ce2BGZMF86ZTUhMiCn1PiSeLxAtUF1EHy2FKTJX",
  "key2": "2DHGBBEfgQhCQYs3ST5bwRHdSWvb5dP8FUQLP7rGU6KJttKo2Fcziu22rFM534SYSF3xQX3riJygoC1GWdR92dyi",
  "key3": "2ps2FFGqSYZr3EJnbY4yYSiG3pFJEgZ8iZGZbRk8SBdkA7YtKaBvKJavgmr3RDs5nX9wLQrEQqaq3qqKvq7oVaNd",
  "key4": "4jQQ1q5CrbjodTufsxAuhX42eqUyqNgtNvRWm6JbrrihYdF89e8cyaGgU924fMKmZJ4byWPrCEhXp4dQXrP5rCHA",
  "key5": "5Mw1VdDTwvAsDbLKhB2aF362ekCwwg41ZG9QpuDXagV5uaoGJZYiapi6Pz2MDr6g3rQm86fNuVhRTbr3L4pXwHkt",
  "key6": "3A94QJEaxH6HwpuPiv4brDhp7fSaAFdMX3DQiJSfwkmBTm73sUqYwrjJtJ9miGmsCjzgd2gdj5c9v9ekxCjuG3dp",
  "key7": "4noKrL7N4toTKfR1EobRhjaiFCRWJ6PGsGuAEro7uWigoL1DHgdZzxgjM96NWS4UY21aEAu8xu7quEc5G7UL7prP",
  "key8": "1wiEje6bpbB85Tb5DiirYWxdRcaHdioXz5q2GDSJ6SGJEbxPprKccMADiym3hxwNYpNM7pgifysyiQqh3hxaTTx",
  "key9": "5azG7HZiJsfCSMVQnTWxYRFRi5WTeezwCPutbbQ3jLmrSHg33QkJh6TvAkb5A5ocjnsNxRAwwFRbEcPw7oX9c9vQ",
  "key10": "46k1f53pzBHRrB8162BnA4rRVtBSVRhXqUUDyNVAzWZmj4YXukcCCw2GCZyWjoze6XoKq1iVvRhv5BEGLyFrfR54",
  "key11": "2yzkma7VA33gWrbviUZrLhMVfKYetE4xB6aZDDQeXyMYEAxHvSXc5chuEwfYkxspVX76dA2e2QVzfC2jjTkgrqyR",
  "key12": "5i5oKLXsA4gFthtUJFecEwfMiE1TuRKejvVut1y9vY38ok3gZUyePfvXyFsRn15GWqn5xoGQzo5VCr6waVpjBv8w",
  "key13": "4omae63JUe3NPBZ3WbgZpkjgJbT36HuV85Eh2aA4Wq8Pmz5oRyLQ5uhcy7244f8JnhDtoUZ5pKtEFaLgoVmHAUWU",
  "key14": "5pWWUy9gJQutHz8kQWc3EJKPzH7tKCqsBGbehUYsLXXgQFk3KtQmsBqZpuDFhjnngbHihaXo9uDjWRsC31RDQJ8L",
  "key15": "57acH4veRtepAna56yjbZsZAyTWrMXqXAx41q9R3k1J6Zm3BrYRsQQNUFeKEXJ3TgSPJjbjz5pfVcHdxvFnaYmBs",
  "key16": "5f9ah3kATuLtjVy4ETEtV2e8vysE5oW6LVKPoWyJdyiUM6vA4WY3baZdLhAV7yyzedx74xutBmNuMAq6BsG4gJZm",
  "key17": "WgAcuTnKG5dVPZ22h3p2KEurJNSDW1BP8ZG64wo9fWHSXmWR4ob1YTFeufB4D1ytRS1mVKpjrYtqQs49a3KZavt",
  "key18": "46vDA2VovSGjeByHaAci4qgVNrsR4EntREZBSbGnhC57cWrpgjT8vZbNtYpRURWj4Z52vLdoxS7PuCtZSVhiqNdX",
  "key19": "58bMJGrppioGCjWccN4LKiQsrTxNzbU7FbebawHQTZ13joZDq3pwLgqYH2bx6roQ7aKfGASp8yNsnnzsYMW1Exvx",
  "key20": "szTH2Yw9P6nuxmTNQd3doaj651ZBLtDwNguhpCbewSo94dAfHZebBHX4LkkBtsUuyxFoQWDxgajm2L71GbMfdfg",
  "key21": "XZZN7GbfSZjx4TYp1RgGWR8LxkN7YHvzAmLLPJ7gqcoAhXvxG17YmLogPde5JEi8UmazL3oBKRR3QefAwmyxELi",
  "key22": "rLzyHMoJZEpUeFsEpcjN7T6WRYTq2DBdxdspp5sa9dvYrhinLryHeALDEVgrFgxFwgNz7mUD7vg3xYkr6kyo5Uy",
  "key23": "2qdD95krEs6k78r1ysQXytzLf1AhjytZZkKnzAZQp7QJmFFhD9v24Hcu6XEmtQ7aqxjM3qzEgAbGnD46ioxDhryJ",
  "key24": "5smaaqoA5qbXwt9S37id451otLRoyVCLTTNw15D8zsW5ePvVdCZvcS6bsREt4AqHLbLMovVECAjJtfRnnpg7pJCY",
  "key25": "633jUEJK5m3bWSoyGL9JqXMf94vpffFr79UtUaTNYEb1qxisTB1Z133G6xw9rWVAjTeotS8wM9wYVeEmJCxd8Ntf",
  "key26": "4P5iAxxL3dKgufG4xFfvT7m7iXWxfwimepKLjx2QTSJCQ8Q1uGbkfucrChNYKRAMkjfdRX8sKwTf11W8QirNXtYQ",
  "key27": "5K6SfsdsEKtbptKTPKVwBpi1vrMD69a6UoCCs9Pk4dCoj7pA7nZo1FHQK8JqUQqZN8huWysKqgYmA8dES51GTFJs",
  "key28": "ui55Mxr73RfacNgiQ1UQZqPcPXS3i51LamxVKp1pRs1f6rijqp741QBd2gd9YKh67CeHnebkavC6PDgVBhXKFfd",
  "key29": "2TnZrDNP4NSsUkVFcfgumJf32PAk26vuwrY5F62RNsFfZafEgs8rub59BVFkvofFk63AWEn6LsRa5MieVjrNgBqy",
  "key30": "4tE5hBCwsogFRJxKcyJCHx9wri2diw7RAmritZZDPFn1toaFgGi39n5h9H3GKGiDAsqRHeHRHDRzockPr3s7NjFk",
  "key31": "3QrzQV5YuQaxdXhaZ6P6WVF9oyV46LMACKc9cbP7WgGBca3wQKBR8YzGoLybYER3XYFRPhP7kR3ZMuAxKDPzWrYg",
  "key32": "5zHrbYiehTaukakgq2Mqy2ovT1wn6rm5TSTV2k2TukCFw1X8YsE4c5ZaqBm3tm2Kj9LrpWfPg1bFV5hWnFDUvdJm",
  "key33": "F5FEzV5PP2SiQEz3jyF3JZJueXkYuTSN8YrvNktSBQ3bUBanQuaocMzhsU5EXQVLrUnkWLaDiYazjB5DpKEQigB",
  "key34": "4cnd2mhkQ7QrZv47kzz9N8Emnp3kEwLcHo5NvPW3XKUngnd7AS9ANhnqQG7xk2ACiPyChrEHHCNYwz2g1JzXAZdy",
  "key35": "wxJTdgzE3agCaQiR7EtfT5GKFM5npPehDiJCraekJd2sXJVYnApXVAopyGksibNzDNizjJbk4WTCvC5E6frWaKS",
  "key36": "4SuCNCGeoHrZVKnhXQhxbtvwMU3nDbKzSmRymBcqhiSo5hoWEcojYJM6ShwoRkrxLoBQTrPnPWGR8ipQHgRgfy1L",
  "key37": "3fuGBQWUBBCaD3AJRCX1NKbTtAWJGxfjcadivf3RbnDkm4ntkw6uNU75pEVX6CHkdcABmtNDAwBstobcLwuobkuw",
  "key38": "28sYka4hQy8QawuJG42DCKLmwp49vZ6Ww2Up48U4F7PThrxyq5XYZepT2ZW5YZerLkpurzmAg482eCgMfnuz9ucJ",
  "key39": "2hNdgHjHyc95xvXNEPbNEhXNW3Rh9AopQf349dsBqQxHc6g4NznYtWPSB6do4ugyQnwbcppbSdXHo6aXDd3bXv9K",
  "key40": "3msxrnDz1mB6ucX8rgDH4CybtDjWWMRjoLSjVWhxioJ2yPJm2VAUnxYvE9HoUYjTBu7yqjNGRdRyAa4XogAaKrJv",
  "key41": "8WkZuWyCH4hTVcNDqtNMkXmoeNNsCf86VCsBfhM2KpusaF91ehsEc1hNNomAP2xpdvtew5U3teBFKPoXTidXm2e",
  "key42": "2P4Zv4dxEZKDckPSYcgMHjgdPwrJjyTVhDVoeeDLmRQ2Vr6erZ36iDmgJ2quEsRTUgE7tqCm8g2cvB1842mzNJTA",
  "key43": "45iBawQjALWVgMdkRdF7zHMUjVsfJybm5sh3YWnHJ4XRmdFVrQmzvsNSwdPHiUss8kDtSDqCDhK1ErVjAzJcwghS",
  "key44": "3kgKhV2MKdJJz62o9jTavGKXdmJ3SD4mJBKvyoSxn3BaZwDbcSNKtZ1ZffQzZUsMQF7PPjRHL5qNaYLg89PxRCVu",
  "key45": "4cP1FTxdPfMCS1XATSPsGaNpkaRbfqau41LWm7hQJxsSdjtH3hck8uRA1gMMFqsgUUkQ1vxBV86iWRNfn5SaUHji",
  "key46": "2x3gJa36mnVBoAYeN7MLreC9R9vp2WpATKi6MpMGv7xYdJhRSnJPxa7vtDfaT6NxnWwUP1ZGGUMbGq2mNuWD7oXV",
  "key47": "3utkgxFdqvsNzSYpEH3HUpi8StynbFnj4ip29hHuhvKETb5LRQJhzCevQG5cEp8T7HpP8nHq5C6U3ri79xxxNdjk"
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
