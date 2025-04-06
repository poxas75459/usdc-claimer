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
    "2h1ik6njeTHPnFqcqyKi5thmnz76E1z1TqQGX9Rcq8WqqNzGW9MYMuSHFMzbXMCjjfnX3LJMsoaLgq95MJbpU2KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umFFayT1nPFuTXSBrR5cdkgHZu3wiYoVAHr7AV1X9dbLaeEX12ogXvaDL8HABzKUURpyLbWM8zhu6FYfR2e3WQ6",
  "key1": "5t3Z7Cz2tz4E65wnGBD3ujamXVv4p4YsmWqWptorFd5sB7Jc9ed23SsC6XJHbnVYDH8oW6ppZQ2Ub1aJCWjJxZR2",
  "key2": "33yyrQ2ek7dZjKFJfWcrnzVf4BXaXtXN71nKhwF396pyHXhFS7gZ9orvnuAdTjUaSrF7uxxmbMVLW8MBfcexbSxn",
  "key3": "2hvyqCKQHrkZP8V4RjTxmeHJ8jiCCSRtCAnvp3QMPzpMm8qdohG2pF633rgTi8tUnRtckdsyPZijF7PD9carEYPr",
  "key4": "sEN9Zp5v8bwDdU2c4Dy8a4tB9PQSLvLwJB6mea7orwb7UWXkx5HgAQ89TrScpVzfenXHoDcxVQ3GcG45jmDauum",
  "key5": "2NcvFgCPThZkMi8tguSgPBcto61q4xn7aYQ27E6TMrnsCnT6KECkHMYehf7MxYAV5DYkUGu9kCtdon6nDjaomkny",
  "key6": "VMafMe552cFRdmL8mV4fJPr5T9KsJNrTUKfSTQochzUaPyGwoefSLbRmw2T6HK5vpgiCCRmdZSQWDbshu8yC5c3",
  "key7": "4jFEySjix8hQaGY2vCUFLfiSs4xhWpKvBffjJruULVwnXGcVP9H4mkm2oxJxnfudYYfZ2psA1gb9ctZQU5atvAq6",
  "key8": "urriDzgW1huZHZkzpuB56iN1yzpFM2hukSx6bY7VBJM5YQmDmaLbR5ZF1vWAaYLmKxHhiiZgVsims4tH4gcPJCc",
  "key9": "5yqY6bvXd6THreR91RsKeG2eTSZ3ryn6825NAjTbLPiXxTjXtTdJanQ5fnDGHpAqQmpQ8k9REEEoMBt4ELKYsB4x",
  "key10": "2vr1rxm6CBeMntFsQk528RycYwaCMW1qUPJZAdqwpGbTXtrbtUkCHUbZvBoB4iFMDg36tknxuHQreqDbQbEGJPcP",
  "key11": "36sWj7tmWgMvQxiZoyrcp73PjvpjtDKEzPARGgqo3mgsy1e67Qe5wVxzfCw62Nm34hipPQGGCZMEzZALJGAwSZp4",
  "key12": "2nA7vqoJVSaiDLixeabEga9G7RnwosSk3KX5LLNaa3S9TNmpb5MXyrdKrXr2SwQMhCuGuyFZt5mK8urAQ5wEjECd",
  "key13": "5t6hBAe5beP8prwuDhXYZuaG4aXxqQ5RLdEb1PCpWJxLnJ45d6GUoJCGM7rBk7QFSLMdYebfVM7r4amwWzAsvMyb",
  "key14": "4xujWLFD79f3pMfB6JzE63u3ncm2A3JpPbPaRbFyPbARoHsqMbF1xKUxZRdgsSkwZfugN15Cx5DRrTtEi2KP8E4",
  "key15": "5uBW1xM2VMFgMq346zn6fBkqSz363VTvEScDD3gYHWbfyFsgCgMLXzksHSQcYuKfjqepJtfvtToYRm86wKdPzmhP",
  "key16": "3iC7d8MLuDJKPMDRJwZsQZ5rTBBciHCnzgAWdt1HiGJ3P5oMRtJRQ9GiYXJyz1T7VrFUxRCn47rscaP3YNERZHsB",
  "key17": "4rYV4CVUDPp7wb87KzqyLg52LApB8izdPWttFpuD75x8YsLCp3TaMdTSHFvdA55qrQzht2A3XfDp7bJdGaeKB5A9",
  "key18": "JmkzKRyzfMhjVQa7ghL6Mqv6s3NHeEsWdANkGEkNVgmbWwMja3qgSYwmXg9uBoNMWyZW5nMJKGNKixyDEMh9KjR",
  "key19": "2mgui5SsDCBt2D2HCqWiHuoRS8UaZUzYvFL8FD2Jt4n6Zk67vS36xadweCst2oBeyzDry49gY4BE4GknvHdZSJai",
  "key20": "1tXRA9W25acfQd5SVtGB8dfu76nQheSZDrVmSD1eYdu4ss7tyarGGycqtQMtWH3tvEiPpdEotJ1JL2Zc7g2CQAU",
  "key21": "4n7pmwC9unuMknG2bWzBfKisGbGyDnniYZuVP1fwVFkuyajdWCLCe35QjYZdY6Hec6k2Sg7hvDNgB2RjCfKbmMUE",
  "key22": "67GNdpNeZ5uj2j3GTVuaoHzTMYJCwHrJyvZnufbzHyNmack3AiMmsjRLbEuSWzTAPDALgVp9De7dD7A9NbhrQz5u",
  "key23": "5EhybYJTisa7rgN4yvng4n6UdcfAmLjCYMuWRuENQWPSA1UhL7cnxdcv3SLJpniQiEG7jEu4vHxwMfY83Fygcqis",
  "key24": "1Mjd3Zg49ETQZNckjQyv5S6sKrnBfTVLFSFiX6p6qzozZzYLr36jAAXWXYqHjVbqA5nNLSZu1vWYSit1jvYohEQ",
  "key25": "3vPQJCdJAwz4e1nztgvCy7v9HP8i32PJDdP5qu6SrAfVb6R5XSxKaTCNoHX4aSD3H6Vk6HifNMYNvFTegLKaPeJv",
  "key26": "614ApqRetpsAckJyPWoFULukHn4Cjo4U8ztpe9ubUUcN99NbLadNyz6y877shKp52DXvpaxJPXDEWu4HPEE7vpK7",
  "key27": "Nug6nA2H4ujg8x5hQjvGp9GZgumj2xKTso1FkAzuMsip3KWqx98tdeDGYtZcvKGAfBVsi16zoVWfpkQ4JicyNz9",
  "key28": "a7en5FL2sbJZQgxwomv9otp9KbRjNVeqzwsoxMhNs1EhPrssWLSvefp3u4WPRysjg9dYwe4oenJRdsbJ3yAUTbZ",
  "key29": "64XyQvGiu3PzN7MykNyadSHC2ZEQKpinBAa8as3hTd1bGtiXuQF28uwTj1YQ42dFqqp4CD629xdVnkoYySTxNu96",
  "key30": "GcHH5kxEoRYLnEePZhzvQz76Vj6xhHMP7wm8ezdiaFCNXf191VmFxofmNEkBXh77mUsf3CwXcd4yG9LU6F4Z6rR",
  "key31": "5LGa2RN4SbFekZzwdmAF9eGih8TUyJLJkaSiLLtRvP4MviztY8bxnLhmcxFhPTrieNgndwy8rJ5Bhay2TM2AFhVN",
  "key32": "3szorevaZp6VUQULzRaA4JCJcJXvjPhCnSWYk6S5zdAo9rGGw2LKtZpZ778azMqWbSzz7ZLW5xgg6U3VmvuKnc73",
  "key33": "2j7hfHD1NNtbHNtU772P2qrR2HQurhp5RyMHuCmznBjxyDfszAmnoMJ1vWD8E3cZZRkpfsJt12NKeqDC7knd1HYd",
  "key34": "4zXDuT5xsWDWJCptzMEu7ckMwDZm8vgthApFyD4zXLtgtUJLBjSpyPrqc338UsK4rRaxstXPjyv4hFycRgTBFWTY",
  "key35": "4q1FjPwE79Vf97V9cTsNAvPf6E93SDjVN5Mhc14X6Mck8Qmiu6QxtEGLD3RRfQnSJ7KSeKutux42fk3fyBHELXtz",
  "key36": "62K8tvcZbXa4GwhtGAaubUcmw2xemoQcJBYqGkLh2vHbapbbr3XgdJgyjFppRk2uRDhDVGuH2SS1UJshTNnWoaWw",
  "key37": "HqZnPm6zdzz8mt4RwCiZmDhE9niBZyTH1Zhbgho51ruUNwU8VRGU7jtnFcqgvAoRRBjUpMvTGBKCie3fEWXL5rM",
  "key38": "2U79uYsBgZeAy3psmo9ZrFy1VpqnzmwcKhsjwuCwkKoc7F7STEyQ6zvUBLn1semka6ZBhKDtjYyA6uzDbMtoQJTm",
  "key39": "wXkHhHwUtkF6SSWfYKFEA44a8eUrqwoyJSCP4tL1xzRCLLuTJd7r4PKqwwgHMnc8KaKnKPyG9wxNf9xDaZA1g2U",
  "key40": "3gu7jFgiwAogMkUQ6ya9JL3BBJTDq7cp3U9FC5qMkCm5NQMyfshr8FW3DhchMQwLUvvUqsb68DckTHgpmfcuLeut",
  "key41": "3LqyNzUsoP9ioWiL7RiRTmm2kvVnWhSmRUD9VyuRM8rSvrCuZ96CwNSdDyjkMgsgGvGkBbDyacRyJuNjcFvNYH5M",
  "key42": "61ZNiDAXgbFmbY9GZwWwNhfVK9NRwzDqYeETZejAMgGKTasrwCv3rTSpDqwh6cWTZUKWQGrSfG1qzSEFvddFrnLh"
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
