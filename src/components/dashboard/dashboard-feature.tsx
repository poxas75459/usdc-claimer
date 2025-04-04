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
    "5xLYyMbeeyRNWHyCXN4CQRASugynLLte9jJCUdo6fQXoweRTswcvYq55o6SfDuxiLJfYdxyXftUeMimBGJ7enLwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itv1bb8BcgxkZS8iYzidktEiALUsNjktVy8ZnFAxFnYoP28CWCtgKKTPfQEY8NfS8ptyn7s1fu3PES51AV8BcLU",
  "key1": "3vWFfyUffYkUoTCAixPmw9aTm1A47AtSEHCEH9HDxGUvu1duf6yAP2sZioKSqd6dNkWQF9KCxL5A5m6yv3S5WzWM",
  "key2": "2hxagZYgRAMKNbE58iLbWeRmUi7tam11iQ3SuHGWRYUyn6SWYGD6CNLzo5GG1ATdZnwSg3cbDx3ER4o9qm3vJ83F",
  "key3": "2ojBoHSuRZUS6jPo3G8AxiM8EZc97jMHqeqvd9xeZyYAHhPAQe2rHEzVGnNuyMtnioiMprYSQrgv6uXwLMUjUq4W",
  "key4": "2VU9qoB9cZgVV1UuVJwihGfT9DKnqt6FDxVJvVRVZfxMpQtT83UQ3BU26Q2VGocNTX7XzmtjCkKh3fV1koRZxdnS",
  "key5": "LDzs3tvQcQo4AUxbioPcxLEq29PxvQcGNooNwp5NB4tjKmrxKf7QPC88hhS3aa9x5RXhA4YGUskxJs3JcVJREMr",
  "key6": "2r2s5qKjqfTaYiCve58YGwixFUBy8qqh8fnQoPYjHH2ztEu6VPjfRyrxYsWsgJon11Sc24XeyJykpEEbnufd8vwm",
  "key7": "hPdeYELpDRUmqMMMQD4QWV2aocPth3eFQZi3yQaYBmgeT4Lv6vTdJa7T6kRZ6LdvY6pFw6RYuUhULGjLccFU6JC",
  "key8": "5Ped6pUYT5DzLjyyr6NpzBnaPD5s1i7XDKmQ2UkMA8YxJehTVc4g4hzwQKnybWXywwBuGfPnuBX2QtLQ8pYErAa6",
  "key9": "Fy17p32PEGsZngXqCrL7zDzaoKXPKx9SZi63jRQNRne1Fxc1BLTymf55djWaqwGwwcgojLR2XNmVBwgVgB2B8zF",
  "key10": "2TUkfm8msCfGvqiTyGzCmwi5pkqs7JNxUnxzQHWMw5VneFvVCRewfnmvusSsPD6EzgD8mGeyytzu8rpwtjuQfwef",
  "key11": "4qUdJFEt6GSXyrydXchEThFm8Jwy33KQyKM9jgvqdBRwibhhV1kzqTnVyjvWKQphU19dqZCT9jsUH5u5DymtBAe8",
  "key12": "4UcnhxyKSe2hQBvX93zoqYH2ztgA87G6NbNSizBsfHwNzfHAkxd4mRCMyhbYgty7Yg1UneyvwK7HnZ5e2HuCsoxx",
  "key13": "wKK5AMQFGggvraUVJjrh5RazStVxBwJNCiZfVhpDMmtNdjWuDhJsyC66dvRtiFBJw6extRaREyAKNK4PL2r83fe",
  "key14": "3CKNJ9BVxmFuokBJaCtjuBnrgbs7xcVexqJat64H1b7k8YTKKiT2H93pgXX1KWyTkBEM58ZefpdXzrRFu1zAwXcK",
  "key15": "toDuGUn3RRWR2oVUmQqK2fUbgNLvfbEyKXwiNEqwq3FwSkCnp6G76B8WGikvfUm9C4Seirso3BaiDeeavFENYff",
  "key16": "643RwqFCCgb3MJPmuv4v735Ug2Mw3jAao4yFXnL3skMMCbLWHYwmEVqVdS24K1C49MfKMM68tcohPRT49ePZ4CGy",
  "key17": "3jTSEa5a4v7bHo7t8YDEGWACgw6URPzovqRyU3sEmKLJGdo6bxZsidHfmqAktYNYkXGn1DkwDA4vcXHTVGXgecaJ",
  "key18": "54dniGJ7kkEy8uHjayzLgWK6f6BynqjKPf7M4Po3ZJa9Gs1xTa2he1svEt9qDSTzWpKfXCBroqwGsMpN9s64yGz6",
  "key19": "2peatHPBPzo92PWD8vxQwyF4J8Ji88bNJGtb7XmaA8EZo5zTEkYXNa88VZ3GeJsjBFnaciMdJWfSzgYy8ae2F1HE",
  "key20": "2tHTx36qsFeNJiKf9YLQHSXkZxwVtjiwyatVqMHaoXH8PWXVcqTQydSdtBTJFyrbRQYXnzsvf6wL2godepXHS2kX",
  "key21": "9A116htmJoc6F4mj5AExG4dThobbL75R1hjUPcpfPAV4BKpC3SkZ6BpBGpBHGH6btrQqDWsCegetSsaeLWbUrnR",
  "key22": "3zCitbbujUqqTBvpgAy3HEf6JQNcdeJNGprAahVsBgSbbakFdkKGGzAifgn2iyWW8Drq4Sm7HES7Y1Ng81om2nwX",
  "key23": "29d19pPDRZ91Hc77HRpwVmFeCSEBHEwDWbYosC2E9i7zYe911YnTJc3UPxiDE7b2jHziRWvPUkR9U5LcR6q76rZY",
  "key24": "5MPuAtcTRNugzDHGMDhjoBSxfkLNhuu3YtKsQJ6CoczkPdrYkSKXmFcQZdMnuo1sYdtHidHsS85z2WZqBK7rDsZK",
  "key25": "5d3TCoq8RTkArpnpyNX9wtJfj1peitiUvzLrqvBbR9PMVZ8D2rSnpr9nyWbVSgM7RT31qh4CqyxuQQZ9puArQyLX",
  "key26": "24xDNJDzTKnetEygCEAb36xsWNaXVhG8qCB6LraPiLzvGPbAEHjrvQJMNKgE9fMQ2kvXAYjyf8E1Y5GA24thxmVd",
  "key27": "4Qr6HfZbo93HXaUFXo1nYvb82GmWaDK6jhHhWbDGV2TWVSb7oScGxa2ypQk38bK8g2f4LX2GuFQQWR3mNjsrxRyP",
  "key28": "oLgcHoKaoqpEmW29YoRi2f6SzKX54E1Ezqbv6H3ebJ2stxWFc2Jaibw8K96CcxTYVhC6z5bErfyRToCwbpBPvnL",
  "key29": "38ff1c7MCRT6tShRExPaa1moZZwm6hyUy9jZnZjFCWztLUiPC4nteXRBtQXsnDB397KtKEoQmBd4Vkxzmfp4Sz5u",
  "key30": "5rWJ84NSwjwmjuYS28CanNdLGiHRHdrYp5LFP9raWqBJEQWnhtWd9XLVqycaQhuJbb3bceYXqVUUGijWtSbkjLyp",
  "key31": "2A8bxeDS3Fw3yJYf1qcTtFFbFchzJPZVoDxz755KGRiSN1bRK4QUnwCvtnj8tv3sBX52jvEkCzhjr3u5szFuh63r",
  "key32": "31x7Cmq7fb9N1EmjpcN9KLp8K8hEXG8cEkPA9HVbFqqkpCCcS8nwmpZgT33fmUizsG16sRPkCgSY9W9Z2zqQGAnN",
  "key33": "5mmhwjxnx9s4LQMCotGg7yLCZUZDpyrvDmhg52SPRErVekfNutj25KmBKKKQxfzbtx8qR4cHNjP8UsCb5zRKxDyG",
  "key34": "33ST22Xh1CLNrZNtw4NsqM8UdKiUy6u4xEXgsquVWAEKMuPrLk3P4LkwoCEPcQMSRhprvBaoL5otJ1R8gWKXZTEu",
  "key35": "2E2SNzX2VF3eeSstY962j9oGpkbvpxGMy6KWtriJ2LzgEU5UCP5HvpRyazjpzuJyCfzFJ7GFEpSwwASSvk7ggFEw",
  "key36": "5Dy21wWcpptcYWK3BehaBKuHv9xFCV6bxvvoVzmXsosiJAApDhrA3t8NkoVyRLEjkgHJyu777aEyaDk28cJYTucW",
  "key37": "4HDBb32TJbDPZpCQvucqqYjenvkHx4nkodcxrUXewLoWbkGJyy5Euck774DkT2H8eHoQEV7akqjMexMvQKjzntM6",
  "key38": "3eiCVT3LNVJSHUcmxr4o3CZE6rPxnspbWaQzwFSyScLmxKz7Npj9e5tx2A7qeYc3veLxHC685D1YBQjimL2nsjbQ",
  "key39": "5DuT4ndCop7UF2dQcMQfPdpKbWcXB4YE5ZskCtTSTu5mnb8Lk3BGJbpG5VZSuyjBXuKHpsMHZrsh8bd5nNGJ4U26",
  "key40": "479JEUGZEoqS2DGWhB1G41VnWQ7GSckvVittLfQ3gM9AAtCKE4xbuwKffMjMV82G6chrpGd66fUWbUpbzBoYexyD",
  "key41": "5vDGFSNnFRuS2rW1m87z6xxe7pYZEDaGfYHHeLd3b6652x7imXrsAGoWhtxsY1nZsFbdx3sUiJumHDjBStD5Yj8v",
  "key42": "4hiSdxSK3EeCsarBEBi58BPuZEhps5FDbdcsLBYXB9eCX9QWDAAgPXfhKEVxjSM5KmiRB3rCT5JhnVU1JmxTKKi7",
  "key43": "3KgdJgGKtGqfUW9ysXcP9TT4Y8ZUN41wCRwiyq9bHsEn9sKY2phQVaEWR6sCXzeWDKzBK5H6ihFiDdKgEvSyhBAb",
  "key44": "pSomqRVWJZq3HLdn79FLAJ4UxVKFdCuAspaxZZdraC8ekr3vGzwS2oDQXvpTDTjeChmsK9VFpAiwhdznamnNNvu",
  "key45": "4hmZvrZgfQqkpDGNhGhngXLFqmQz63uVcg1JSNswvfDydhjX396zJvnYc9asSMGp2Skz6agJfcAAKW1AS8jWJX63",
  "key46": "3nihofjh4kRnSxtinfudSY9EmT1LCigWyCTDj5j1ZVcjGXVxxDZZJCXj5Un2aE2Zno4fGYYyKHjQ4tqEJTxMXvUp"
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
