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
    "eePBGXo61cUww7Aa2oi1UTCs92ditipsJi2sj1em6f45i6SQAxt67TWjic2tCA6YUKqytsATDL955Jr2XyCZtGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vW8CEV57nqunYJ5xE7kfptsUXJZaJwg8YAYGmkM2JZRWCgFFB568LxsGZvz9DSUoHPd8U5LWRujDWVhYySicQM8",
  "key1": "3fVDhWw4Jrwqjk3r9FuykncTKLRsF51Qh6SoovDxPGQMbHjsZXekMYmdABaotyM2jB797swRaCr5XwfGXfgRRyj3",
  "key2": "45fyjupK2zbbpotQTDsp1NQVoYqCCfwt1WbC3Cd1Bu7WrhnZc4TASfVRHtG5jp5PwqkentoJW9S9xfHnrbXuZr6B",
  "key3": "2BquBqZ82Lmo3eVp9rfjbZvvsEfbKN9RHe2VyU4omuPQA4ZbS1TkhXuKAEbedHEbYSEiAjAuWLKLewqyjnoUmwFo",
  "key4": "276fYAJyusNbtwbmYa9dYm2Nc6EhL4gAKskVFiDBRsxkb6dxVjzps5orQxSB8AxntVQx1eJd3otZUmcKG5MuWt5q",
  "key5": "62C577nEHYEtfKtGde2FMqUE42b7Nsah5s2uJHMFcjaEFTGWFZuRqs4id4WwpmypPMHKUbXL55hWuyFZHGEM2xkc",
  "key6": "3rN4dk4EXXezNxXSY5kM1JYh9i1vcYYQyXYmvamB1BUuiVnPNrojw2fJ1DmUNavHHCFiiMeJtypPxtZi9SwmeP2",
  "key7": "2jQjvDzCnNxx8nKpSirzk12YuZFMghExyxpzsxXSax3H6VWdSwv96dURnzZFWanyzVoYu2haDfUwoe2D9zeY34rP",
  "key8": "5nzNiT3ct1xfTX5cAkMhXwSRJqEMfutvf7wL9BM5eVNxgUYN7eGuCDPdXknjiE94aYDpCmP6A4dXJCteK5Conia7",
  "key9": "3zta2PiMj7jmxHsmTtNimFgbBDz56RYyh4oJBy2nkTsS7du1u5KLnz1b7wv8C2b9widQLjEaFwpi7rvJ6ShaZ8ih",
  "key10": "2hA2VjMQBYQxbfjJtcm2YAHaYQz7AoN369D2WctL4oGJrShBKAYHXXXvKPLyY4symQA1WYdJGJ5U1h77AX4VcC8p",
  "key11": "5SNuZXoCuyoAPD1hjxyK6icHJSjnZgg2CZeqEeLg5Rs5Srzaqt9vE2N6AS8VvzPJ3592dt8HV1govQunfW5K3fvW",
  "key12": "3GdrSogQE3Evb7iwmuGMH7eEedEd5Ee4nWkFzkMafXd9aynDEMjbYbHrZ8JXtPzKjxpUFy88aS3QW6cpCss9zo94",
  "key13": "i9CWNRGfJMRjN6EsNF7aDsxKuxu1nmMxKwTpd3f8Bdqas6c7UxkKihchLqVzG95FpXarnJFkZ6EwG5wkbA1MwwC",
  "key14": "2zd4BJbwqNCLFWyREQP4QxaZAg3XLsiXu2PSnUotYR94MskXJxFJePactZf38V1EvqQAdSDDHzeGDd1VsksoDDwt",
  "key15": "3ZA2JP45ikN1CspFdrQWQHi3Aumik7V6EQWZpqR3sZNFRQnneM91uViQYmmAjczkPg6EjAXzy8d8QtwY6MBiWq96",
  "key16": "2P6KzTDDNqqNWr3N9Asy8WhfBmBMPsnuXB4gyg2jYNKCttEya1x8kaNwn6pqurd9j8ehL39e3XzUmgFXkvb8xoW2",
  "key17": "62dfAyrkkEDoku7YzVFN3jYrQMDacFfP2VhKhioa9BEnjXX5iKYNAhYvBEPMuTmppzJBxA6KgDzU2rcyE3u4WJUq",
  "key18": "3WSghywV3W5ej4Eoz97jvmM6vrVwDoaZqGyjoLz7rEu3R7Q89ACjFVG5SwPnNktgJLaNEBP5TScFtjJqkrakBeQ1",
  "key19": "4btNpv9EoYNDBLWoGTusP7vC8CVMMq1a4N5mA1WMwAQ4tin49iEEK8uqbWgWgdykvicWPxujV4KTTteii2NMHxE7",
  "key20": "2Z3rarAmggwZaMQFGSjFnXcT1B5okwZtZoQZN8aiu9heqvu3ApvoThzRWK1vJzcba7pHqpHTXkT1kTTq5Ccgz5Xz",
  "key21": "LoXbr1MdgSD8JwMCsKhx3JbNBw2MLcQeMD3nEDaUnVHKThbiSmawxxzgo1cposUTdXFco3egSmQ6KZaVe1JsDyG",
  "key22": "5KoHHz2QL2YfpT8xc5Ve6TTsv7bqsF2A68mjgADZUSch5iNPmbwsTP6y2itH5ALKKu6AeDkkTeGDfaeGobk5zti8",
  "key23": "rDrWi6pQzjKLtp5souoMtbb7zqPPhco8wsQa9Qz4K6Soq6KYLBnj69BQuPgF4JP23eJ5ZQeX1RL1PD4G5hmog4a",
  "key24": "4xGN3XbcZNP9dpiEyKkEPRrngeCVHQjxaDL3mANkpHojYB7HyKmzwX4yrpGieL5HYcRnYpuxk9v1EfUHVEXTbqn1",
  "key25": "26dJb1ixveqsok5sDsTNvEppiUNPeq7QdmZky8bQiJrjYacg6EFv2Mjb1FxWXtPanC1iGwyTT6PesycXupF73RPi",
  "key26": "5T49QxcMB4uvVMaawYE3Uw4oE5KkKxW9LVCVqSHP3Frf6WkYJ1icJYYdoA9JccyaWuJy7emdjPYhzjYZUWX8mYZv",
  "key27": "5HCHSnVKJGHAnqsuDd83mc7NffiL9gWkVo6GRkpHM8uTQitot17M7Kdjqby2cXmozx31xohTMv4JdbxCsqPc43Pg",
  "key28": "2XKmpfbw1wjg8Eo3ku9min2NXDUphYJRHFoUcBpksbPwtV6vatdxjFNeKeKuB2Pid6pXcpuFN3cXkZrSB9kk6BJa",
  "key29": "2Xnb2AizNE4uMZVXAzmK94FG4wforbsYBqEoHoRsnuoYKgPFkBSBjPkQdhRCYtqRcM4U3xvL8Ppmej6trEuFFnPb",
  "key30": "45uCMnzjGV6377RtBQ6jQ4rviAsHzQRk7J2FskPUsNgK36CAw6MYm9SifXqp5bDcMTU4M1rpk4o8G7UHYivkPRY4",
  "key31": "2UHVMzR3mts3AphgXY3CynToQrj5Hhbxs3k31c8LoQHerpU5aDJNHCPc47XaY1vMjbWAQzMNPNZhnrA5MfWSj81p",
  "key32": "3YuDkn3VRAZGYaiM7USMFbEi52DAoiyAkNYBebvRj6y3QZf8KYkL1JvZziVEp6gfaALmGyzgwN3wo3p2zfgud7kt",
  "key33": "5BBtxmiEv99Pwhz4Ve8AiU8tYazU81G1j1xMrjAeS8tBGKDf9Cw2bmEkpv8EvAZWviCMBwyoYLJ6R5L3aieBDDB6",
  "key34": "MT8s4HE2G1zG4ibza4RxuEMmt1Mom1jKtfdERPT76sgkrogBjKcRvqJ3Kpi4JFAaCQXretg1TbgzhN56APSK6ab",
  "key35": "2Qkbdz7YaydXTmMcjT4iqe63wSXGD1KLML5jfh84FybZQrixpwNpSdYGgtGFGWUTcPt11TXbmhfXTZBw98YoWGu4",
  "key36": "TkWjnjmSh25kPryg6Po8Bc2zy96p5vLZPMFTr4gqTAFRdAX6LkdqUwFyVPmaoNnaB74bnayQTQS5hwj7wUcTuES",
  "key37": "5xEsQxYnEW56sQf5tRCieuNB3Za5xW8wovT9bV9DGavHPeSQX2Wdm8JDLHHqqpXZxdHr3Ng6zmVsK9xu8kQqa7DT"
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
