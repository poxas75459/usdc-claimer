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
    "3shR9jibKpNQATPa2ZgYjBiCg1udqbysVJYGKosf4gUjxLkHggUqUfiWH1vwTQJQvhBGeCLruHx3Hfnx7iAocZxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNvsPbaS8xsmkB42rh7RVUZF46iTzYbzCQtHisx1HwWokZHyLAUQBeDf1e6zHCrNRXQM1DCT7hAg6RKfnHMNNHH",
  "key1": "2J9GjnsrTAWUEG3cz4uQdNNfGg2QegHUqp5gRT19Jw1HXfq9szpoaK2ouLfvP8rXUnsMuTztRF3P1QjoqrFXmTGC",
  "key2": "4npYh3R9LjeMS9XM9hPqXQc8aiZZFBCPjgb2KCHjW6CbtBtn5WCLHVp6rDsTTCNQfNXWAhYbAzy7My31PcvZwuAs",
  "key3": "4q7zLwGJHXfwR8aXhSmfo83fvvTgF7WuwA63dwvDAXLM7JFdriwMgisZQGct3FTmY59CxAWnyfDKLBJNT8LYKLyB",
  "key4": "4Uq9jPm34Hpj5dpXm6mGHWTYwECMY8mhuA49Sc9a9awuvVM5SzoWtAaHv4jEyuJCPhZGvHijxYFHmeC8q9dmu8K1",
  "key5": "3mDeyvnVXYB6bWG5QctVjjWShRpb2au33Hc37ajHYSBSYL7hxCrL8y5voRdmRgTBDL7qBCDFCXJdt1PaRDMtNDUh",
  "key6": "2KFNtxLbGjmLgpVg9YqyW1kV2hSVTN48gHNWpPjT22bLBHg8HABjQ4MvYKj7nEQ7Wiqxm1vc7W8rofFVTgcWV6XU",
  "key7": "2iWgnaiuTvD1o92qWZFpJn693M5KKBdTnYhyFyX6MwY6ELJe13fajRH63ToURxWbnCAfGzfXutE4UsnWLGS6TFkr",
  "key8": "3NCxmNmRRBT8iE73z5tQzxqQ5Y8D2EqePsddjFMXCHB7jDRjdoeSFPg7JuEkP9bLjT8GM4sxEcN1QhnKzqvZVtmx",
  "key9": "2jWDwiXYVBA7nnwxz1uDNcsK7WTuP8aj9HCivpHMs1iEBFzjTUqm9Quci6TgqVnnPitzMQZuqxz2kDCWtUqzNgwQ",
  "key10": "4Cr8NeFY6MCUHjyxhKCYRKnFL57vPUZWDMQEfv3rnH6Vi9m2sN9YWQVJkpNQpEtkEYWcJwWZfqydusKKWYT1VEfX",
  "key11": "271SxwU9UGe9V7KQ4uPEX3ZLxZKjCjvt5NmJN5LWgBG5SnaEe7MZq8tSaU71Pqvo5Kh4zfsnUJMBNoAKfLXNC7sk",
  "key12": "5oiF22zsDCLG9hAHrVk7eweFaynjrUzERQre2k9t1Np1FB2WKzxi6oaUkRL2mokzBPsvCQBNyDbZEYXsgmaZS1bs",
  "key13": "5LUy2oc76Ag3nmM7eUyjH5YnLjpvwzPAWTQmwiQj83YjRng3Rspr2xg8oUUVs1VY7haNxaAiq2oCxTLXnXgtHMB3",
  "key14": "48SqboAcgR3XJHd8MgeS6dS5wwRzVj28m9YjAMyApiZvg18M6Ym9PrHuxUF5YvYGpnAf4C13RZxDDJxVZgyPunoc",
  "key15": "2nbFUphQnEf1hLja2XNfAxQV1VXGVepQhaqbXA4Wz9LpoPjJpWG8SgNPBnGBEXEfkDLFMcKe9uA1tiKKX1CLvUka",
  "key16": "tmRRJcJATjsX38wDnCuzaSD7SCwuSyTYnTRpaibXskThuWKVXDq1iUPTQwxiDUj13eCyBrRbBTi8WVti36p6Kqr",
  "key17": "2fTyaxRN4amhKdRdyFj3vsMNKzyEjEVeH6YLM3pf5P2hzDbzT1exUC7Ss7K7HZ64F4LXNNbMQbt8cpqSnddgKEm2",
  "key18": "3HzAhC9zeNG6JM8FPPsUGsQbPgXK82zPAmEPGdUy2sNfUDrUUxAkTgzziQNzW23itSMpEXavsYWSvTE8AcxAgcpf",
  "key19": "3QwZ2AoWPt8TRjpsdWNAgVWHwHu2x8BbAsoiE7ESxmir4ozjDFTDNWJ8rb8Q4JhyJqq68ZLsD4YBXovzG3JwyucH",
  "key20": "i9B29fSNoyMbXKVwXkbvJ8g4DL7JtVoQk2ENifbLPVexhTFkUbh8fsBcTViNqrUtNws9taVK8KHt4BcATjwsEVG",
  "key21": "5fCtvJhz7dB7pM5qHPG1vpPHoV6ATfjApGtJZQVwUPC7Q1683EDe87TsFjsYvp56nic8DCzPDZRondNpCjtRSHw6",
  "key22": "3gm21k8UWSqnawTzfM4gsDUVAnq5NRFKbNnrc1wsYTGVyhtyvBmv5wABKbVPjmiPbo9Cnv17wZAcSb5CRmzdAsSX",
  "key23": "4PMFjyaALRAFoMr5m1cuBgQ5GHGTvHpTJhWthsfCnjEzPavqD7g4zSA1Fahc2EZVvcUj1T8K8b1TmoXBkmPsibh6",
  "key24": "42xTQMPsYVCKNPk6HCHZz92rjKfLBkRYo3f7ZhYv8YpsFDSGp96yCDj8mRRyvMocU4ug4xPaCMH2AoQL6RVR84S5",
  "key25": "Z8MyS6rFScwDNvJMegTRW8u5wcMN1o3r7ichDKDSHQTt6GC5Le4D8fiALidzR1LMzvWoWbTQGFgVbCiTd14FuKD",
  "key26": "5f9fPryEXEzbDAn3q6BRHz3EjNmnnTsLgAsxTWy9jMkWjtagrECuCGzgrBTEE9xAfD8ztY86bCLFiJN5cCdMHprP",
  "key27": "3mZyThThqCc4xXsVP3KV9Jud2uzaj88rPZNe4FRxF25oT5ZgfZJnedcYpPdNJzHT1pJCsaSu5bNGBCwGDdvuJqtJ",
  "key28": "2GCJZ8uEMDUDTWf6PaGPw7Yve46TetmHrkGDFqt2XsDYoLoAAzGp8ZgYg9MEB8F8R2qJt2gu35bq8kfQxPj72wW9",
  "key29": "3MHuoHSksG4xhUpzSmQ4oPxgQ4kdRDDrHX9hGZqXR8kVyApXNGJojFA3ueS65yrkCZvz3UvoegPSdVvKhexybQge",
  "key30": "2VSyfnjeCBn4r5cRhqJimCym4KsnP9RJJGuixLLyMYWmwdcfoQp6Dmn9LGLSQQ5tXR28bYNCNW29wgRHhdpn5xt7",
  "key31": "25eHpEsFX4DdcnaZWJ6iyYvRk7yxeXWFRELL2eDWfMthTyqSepCFrQTWnAjnXrEZ25R9ix5MA86vM9HNogFzmbEU",
  "key32": "5mPCSQBrG3N85uBTSM44ffqw9gpZVqPr158P71aPZbfsvgiaqwGPGpNnnDEqisBhtGSueuxBuRgvELscLpdDDnr",
  "key33": "2uR6eWGbCBTvout4rJcUgXV8jegmbB7PotXQUfmjjfjMxQxqJtJosqtBVFgSmW2nAeY1PywY4KdJEAxPBzWSNQhZ",
  "key34": "tFoqnAEA5PB517mNqkKN1wV1PxMTJtcUGYykFFLEcT71qVqt2EZuivhoQEwNcjGJAG8f9UiEqkDwfLdGPbJUoyr",
  "key35": "8y3HiYt2RcLMpKfzzh3Y3CPPQFeD3hCxYfMJ1zpnYYvwfNhqFEb2JMtjYpaK93ybNF1gEV2hZGvtW8QcnKcDm2Z",
  "key36": "4LDPPRhoTWho2gtMp8nYZf7vvn1XEFqZjko6GjZ6YubYR3J3eq4xjKRizGijiykpzAFBo7FYX8i7snRRenALEVyJ",
  "key37": "2ciQC9B7Lg3d2nNwCwJeETT4m64pZ9wgSP9RnGnW9UQa2eiPorygrdiWqSCRdFuhuu1JLjrNwdDUg6v7tGn4RYui",
  "key38": "2yf19pNi8k4omYZwytRwPt66yorvRsw5yBj7vSKNsuhqAyucp9Lc93Kou3YLkRzuZFxJyDWEZVZg6sjrGrQ46ZM7",
  "key39": "AZG2cRCb8Hesr3s4ydBdTAdAqRXTkwfNSGYCZdiapbuZMcytySw7hyxLSrM4TvSqunXxFKzmv7bA6a59e6vYVXw",
  "key40": "4eQpK1o1KrHkmv4Tf6mumsNVvoDbL1oHbXhBtRNDiSfD1tKtA3JA7wV45UkVsjs4ZCxJNp2G6m6EAqULi5B5oHST",
  "key41": "47L8HNocQZ9mQfnDxzemEJZ2pdy2ZRDCNrTpaYrqdn24UahmBDmpwMxsdgjxVZT4pijPQnupiipyoYb8eRPC7jJ4",
  "key42": "592gH845ASvQviuT455SqPvpcF7zBomSmEVr6PNWwspqpD1Y7pPhRKiRRMSr7wutFpwjQHSskgyPmYd5VgZrnK11",
  "key43": "2G2N5T8RogTQPusQ5obrNCrvXr1LNjR9ZP6bvBMcSTuUH8KHTgGUxPvWdY3aZ7hBwNRTxGLGfX1EBWqrv6njFMvX",
  "key44": "5tRKG6nP7MM2hbhofrFzeEtfmfENR9nBxyS691Wq6sksfFy98jJHNjBTaFpUNZ2okreAwaktpAzkC5imskAVuQL",
  "key45": "2mafiVpVXnevuhXa4TcZuygAoZuDgGw6ixDcUwkhVAvvFzGuivU5YJcCvNkZAJNfQ9SWna2vDPZJEuW59BK6L8S1"
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
