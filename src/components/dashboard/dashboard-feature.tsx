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
    "3UtGuKzyE7pGkAie1FpbwRRzRTHbDekQZ758ujDuWnwWbdZqMrLtx15ZkZPkiuHLoZB1ySVEVZSrbYcLfZrZMVP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ryWX1xehYczQjpgdS7azS8qqQ99NSKMqKbp6JaUMgMDV9jMiD6s2iAPv5BUVDUkwJCv9sb6kdja8tSMk2QzXEX5",
  "key1": "3pywGubVV1aAoRq8nh9BsL8MmcbMdRpg7RMP6Hs6Q5zrF4SWpT1S9CkPJXsgPByaNpSysnWfTG5x6PVJxXV78oEk",
  "key2": "5ANxFz4xjBjUt89LhvjJZY9g1aexmkh672JbaKyhvf6CLyc4KT4faZRDHh9XCdASFAaw3JsNDvqDyz93H5SWu1Xr",
  "key3": "2VBddcCkyRfc589LmryjrbQC2i8waRqqJ8AagR94hNAMmGfh7h6TKakynCwLX6HQ2gc4YoSkvj5RKQvsu9Ut5yrC",
  "key4": "bGe17qyxd3bKvoTrAsFxa6BgdZekRDtBypbQ4xWUwkgeyAiuahz4WP4sZo7NMFAA5Kq4TKtgsVMK68b8DDAwVS8",
  "key5": "2Aj2f4NWtwGe5wjtVyZmb3Rv2Jt4Ckm1SRFLXtfP7CLzgjVEvaJ8L39KUoU6a6VZTpQBvHzDMH8C5wi4uvorBop8",
  "key6": "3n7HHkEPK7spjfsgXkX3VbmmW6Ux7qEhuF2Bbz1nDyuMSN9EqJvXAD3aac45iCzVic3FzRqrG7syzmVNYdMogmuz",
  "key7": "63xKcuYpQmXi2o9vmqE78yheY55zoBp7zXHMvRADVcsR4YS51aBvr54xBhjAB64VS6hurZafQF19VFRL93WgZuCx",
  "key8": "2gtBmbunFu4HaP911jXEbDAjtJDiVwe5V4a8j5TrvY5eU2GtJC2uPJxijeJA2KZK1WzRTsZQgGrSAMrrbva6MWq",
  "key9": "3fGrE9NhxLCKK9wwuMVBLKtmitKd7nbCFQWd8zJ34Z2RTGyNJipzJZ7v4rTgYT2eg5PM6Fkb3cEHoRAtC8kGMDAP",
  "key10": "2WDbCVWeTZsLX2XFK8QArtm2BkWMo1qKEZRnExYXy2hDNn4U6ubEgtu2By6871FwyKjSjsYmuYftTe7mdj5N8tWe",
  "key11": "3ZRFwoNCcWSrkNJtpdfvNxBj2VcJEnahXaFpRXxVT2PBy8aALTnRJpyFVMzqefN2Es9W6j8DeifArJqrMzKaEciK",
  "key12": "A2vM9uMVqBQKV9q4uziQCMgGNQzs4mna2j1oEox6o8WkBjqpzK13Kh4vycPH6LYX4QuSSDAmESeer2tpJfwqD4x",
  "key13": "3FQ615CwRkn57ennbwx7wk5ZPwZVNioFPYrfMLBdb3kW1wT85FJHFV4b4KSHq8ijjEipXJipdjX595uCTgh6Y3Ai",
  "key14": "rthfB693SZfXC7d93tJyMs6wNotcSyyf2dPqGUwc1xDYvu4YGE6kqouQcJ2tjnhozJ9do1678fmXTj6wRSkKre9",
  "key15": "XANXFUYcXiaFGt95LitZrDSZajNvznY4w34AG7Mtqh3xBbepN47Wk4jqGwEQS1TvKbBS3iLvo5Djtf5WTUzLUby",
  "key16": "fbNKVBpd7WkMhbpc6HHcpHrC43TYfDknrT8HnhkJryeCp5VX2uM7SCJLTRkCsazGzMWHZHyUMJvW158AMGmBAHH",
  "key17": "ae8VMPDBAyiTToYDL7o5ENGbnoqwGBvQnBVdhYDcLjHnq5uYLSbb7r4bQ5n3ZuxBpeD4KQxNSn5rrb4iv6wpoYF",
  "key18": "5ALv4JJ95sxEm1NihQSf9jf7HUG2k3PARhm1MuPLH3ZQePeAUzUwK9L7ueaRx2ncixcgg9es4Nxm289bB3W54r1c",
  "key19": "2epncbBA36puVWrskgz8Bgiai8M1Xqt3TgbV2ePa2ffde4pUqDbw2gbaQRhjxmkWevtReokUkJHWUzTZnQqDtcdh",
  "key20": "5K24bBdU2zKyixJ9RqrwRG3Q3bn87nSQBaS53UTHRunM4UkCBHABoxuifwDDoTegMVz93q3AVTsYHwbZot6nKFzx",
  "key21": "3qvSaoENcxg1BLgxzpdAZkkut9pxE4yduNQNfEA4UXvvMHZHrayKXrQrbi3mkc77J4NKTGCGWCXi49mHm3t6gAKi",
  "key22": "4puamZvJ77MEre6DoP4ZhrcW4xjvCBzDogYoof8WbqPKP4yp81GreoYfC274CZSX9Rnt6bEYGn6gasfKXrbmxxiG",
  "key23": "5Vp4NhcF3dqaSTeg7dDV8Pxe2pC8rnbotWgKWJvQukFortJKXK5wfwfsenLWWScjmBSwBCfG8aXBCsMoZPUZoiVi",
  "key24": "4b5a2jh6zynywDcQCx7B916a2t2UTPy1iHCiMwf4MGLiuySzaAKKy9B8AJthByT4KxS5mYw5YkiNv63WrnkWERJ9",
  "key25": "EiRSLnDracPLy5w9bShkzjeB3YedE5TrxPXtGf5Ayn8ka4V8g98NkAm8o7cMGhwVHCQty7ReNx4EhXyu7iUtrtD",
  "key26": "27sSHtdh3K3v2FiCJURkNWSNe19NvbA4TcBHbLNrexABLC3p9yhxe5PPojGP7Q5EcDmHtRmsySo5ZjhLtKsxt2bQ",
  "key27": "2bTDPWLVeaiiq5x5rgaysLATnt4wjt1cYjRRHVwAXuetjxS4jnNX1UVyaio2KxMwT3a48vy14znhhinTKuub59c7",
  "key28": "37viSvttE11YaBCCJ7f7XYYSVLX4Cf4LHMCq7jvFEafdj4Po1UW898vUpBXbtHQGx3kqB1NyDxe6xWfCJLGKXsZL",
  "key29": "5hE8TSf4h8HbE4fHswh18Z5gogipWhdJtCiznr8ZxDg18vEn7iuj4iF7vTUi7FW4QuF995uEcgq5roNd1XgU8sUU",
  "key30": "4qb23bfqmYet85jkybEDaEjA8m12tH8B9zJQ2gqqQqyqtM9GRCJpwLHmEoaxCNXTGTkDu3WqwZiZ3mzwDeGuDNHU",
  "key31": "4L65MU8XgADaafqgWw7jbutMG3UveNnXFUYn3J4zYAmNfPodBcVeSoSKC6DrhwQ13bPL9wxsEv7ifeAdpykxqLiV",
  "key32": "XFeiq1HyEATDGHQV3irinL4Htt5JrzNR7PoFg5RKamNH8HvWb1PCoYPAJe7EWYxJaDjBiJtk5BTtMd6K2aKnehn",
  "key33": "3AS4MAMb24YEkbtg57gjVmrHUiVXQ3jR2ig6y82wNBfobynjzmF7VveAunoNFnzhXevPhdDSyG8D7KGprozZjsay",
  "key34": "eAsQCbDjr8Z252zHvBf7BaagTJUPAr1obx47N1NmMdocZScMyCJMxTbfuZ9rRBNzCoAt2koern1NLBC5V3gLCaY",
  "key35": "5P285PtigJnVd5g7mY3rGHTf6nrLeti4Ym55wZPkUjVtmfs69bJMSBHc8Ni82d24kFCjHzaKC9SjcAMLrYrzCGaL",
  "key36": "2Pziy6bkeV6LVMpeLtMSQrp9dBECtkwLEDVHiLtFxxSppWUYSuqaPkF9jxJaWwawrtUnuT4gXZMDFMjuNQPU8Ydo",
  "key37": "3kSeHBHjrpsq46TVSkGm15TVbNiVnvb1dEaB8L7P8b8AtWsdRF7R3hsh3gfkgA5FdV4G7mSwLEVSMpq1MZLw4qTj",
  "key38": "4eEBhcTqUsX2HDhrWfP1UfxkwQPzopxbBqVFSpoQ3pTFoL9nZH2ShS3XZT8YE6csaXgMihhC8LU6ZVdY5T2KrsWo",
  "key39": "316QDoDNLpo9fVkeVCgJqBFwFasBGWh9GS8FaXXM8AT9KwDAfknHTET3m2vWrecS7wcKxUGUCt4V9afagL7Qcyar",
  "key40": "3dNzisCP7j8e7sYm6tPrTw76QwGaVGGE8Rqkf89qHAcfPcGvZdP3ZbT8dGrifeFDJqzfr2LeDpnpMEmfwVo76DA8",
  "key41": "3aU99TMVB5Hr2iehC9WLaWpn7ZkmZon7L9SMQAM2tHWeUimfT49rbFKFbVRp1RvVmdwTcw14EAdviXXbJwWr3d6j",
  "key42": "47UWw6zQnXuSq1VrB5cWHc2ZjbX36iqAHhK1v8t7CbGSTgWn3wgDi8QfXPuUqgRuB71Dxv8CYmVqSjvPa3m7YjkE",
  "key43": "2612GDpA13eo233Pu24ouRSPUF8rt8yJYSpGSFKU4rsJAww7Gjsx5BmeLcGomsamXcuocFJm7JngC8u9K2s4yeqF",
  "key44": "439QcNSmpmpgeKeRGxup1PYdtHGF9GuDMwc2gDgHAAbn9WnegZUAX4QjTRKyaZAGcN7XHo3hraFn7RPnrxMhfouu",
  "key45": "QZqk4DmPNBsgh6BDxYVNCA6WuSBUYPzBHnL7RSpnY4xNpNnVak7vBznSzSsouhCoBzBef6r4rB4TZE9qM9M8zL8",
  "key46": "225JoFRwxhatXBD7m4x7ab28AU3aA8nyZiy3Vj94xtjx8o1XfPyb33VDkaYdntH7o4qfYoYMJMo8NsFrc3dwcESd",
  "key47": "2Vitw18aaxo6QkRGnJZeM9HxvQHXXNdG1v1M1UFN7XJ7UXY3xwRsxy8jjkiTF2hjn1wPTockiPmh5XsH4HtbvNGw",
  "key48": "2krsbtyEi9ckBdJEVr5tZGmJosespvc99TFJavxLmehXkaABfgTT3dQBKbi6mBsVcCW7MDJb2TkjTvF7Nts5DQZy",
  "key49": "3ZHyrPoTQQaNk31zgfau5PWr6Vqf71yp31EpmfgDYDUxnMjSZKdsKwigeFcXWPYH4ShHwh4DSU3gTZcf4krzAkvY"
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
