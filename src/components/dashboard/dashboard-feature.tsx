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
    "H6QDR1zLfff8KzXVL1DUWgMMAU8Es5fStRoYqb9ear1wsDkqYzVpeNRwoQkgszjydqyqmDTQE8U8MRXWb48hK4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnM9BhLdAD5vCyKEuPTjVMmUiim1dp3TtmzR3wPJmKdSELPbEEFPHMn4pwYwr6143Jp9PE3rtSCP77xATqzE9L4",
  "key1": "4zB32CsjbrZ7yLcZZWzNwXcx5jWYcH8yorr8ySY5WMQQEEEHj3b7mUpKsTEKTK6XidGcqzSjTmNbyQWazetNXrNn",
  "key2": "2ruaRCiTPqbvszWHf3q6wUTjWiXaVTZPpZLPytYyDhPu89wVFoRhi7ZJWtDJViuEs6rB5ZzBXbyL8AWAecABdz4c",
  "key3": "yNdDTZu1W9G2NUWroTrAqDaQvUNVRbx6EiezRoLhVhmscdVbHtsh3C92y4MhmRfLae1x7bVPMuxK7F74DakR93U",
  "key4": "5WshcDAxqrXRkdtaioJNyyGmZxN4pgidPLHhoosXXr21mVq2nfLw6SE3hBusHZ3rWoubrYTqE3bN1zTbJXB1wovW",
  "key5": "zj8iRDYchNGr7bgzeZrBKQq5LmRpCqTrpUzqVfCpPXsfqDz3grV9F66BfPX7n5f84tXWzLi5Hu3PBPtvAVno1bQ",
  "key6": "2mdU2UF3JtGHEruSZcfew8BabhZWK2QRWaCd7rrWSPDhb5BVKFXd1bFtiUEZ1UEzLZ5mvp5F3fjUziyYyNafbs4g",
  "key7": "5Vi7C8CFa9wtuZrx44VAoBcbRSoWi2ZdRNTTTf1961F4yNMxugCbMi6VdZVAxtP1DGgwU7jXYbVsAVMF5AxKiTnS",
  "key8": "2Vn9peEKk9QEhonZRRzFGgzFHx4TzPdtjUbipkvxU7Rhp2JvVvpKtSt6HsECtSasuKCJcPS3o8TBHi4wLVzFVRCB",
  "key9": "2VH6rD6zix2Le7JYyZcWBp9sqtuTdRvzj2eF1Gi3dWLgEw1Uv8amHggsbR2gqVzAFfmyQ9FfTuz8xXj3sT7c2fSx",
  "key10": "4LSZ67VNfy5rrbi1rS4fKbq2oNJAKAiXnFqFg3Gkkg7QqJuNsfSuMAqPcmeoqFf9N9rDTgnEHpQe3dFbFRtGtAmQ",
  "key11": "36tzD4ises8VhjCup3CkrWkGsYtyRfV1ZJ8TEyK7H8NNxVJN6fGcAykkvzzjoEg6ZS9DxJbnUXZKKGPDPzziVnDK",
  "key12": "4wC71rdussg3ciAUsUQRy35kzTgksJ9xVjoGyxTcTbxprqiVv5YkkaV8RmVua2yqaQDihr55s929s3ZQLoZgXuCS",
  "key13": "2tJ7FT6NG6btxjKpmfwgu7CTEpwN3BC9TssSXw92xYVkdHoM9zQNJPYY8QEppfyGEZKydk3QfcVYreFhq3FoHnCx",
  "key14": "4Jdu7LgkwDSD2dTHpiRXrYigm7kNLV1fSeMXGwsrjNRoMxvtG2g6ATYh7SanLhoPh6Z4nH5jmstY3NmprhWS5qzY",
  "key15": "5AZmfamAaeGpPijLAsvCEpkT88hhgdghVL81tg9NfkCTqFDjia7jZYhQ3DwgMDLKnmZ75eL6cjxCWGLctKswVTyb",
  "key16": "5cHmgtSupWzitKUo49epgB9rByDvN8sxWPD4wCiWAb8jt2mmnxNRNWCcyYWF66gHjpJzamUKfDiW5N3kJ3TdiU7n",
  "key17": "NUxq6aekARj7SU8S83dv3eRACYAgEBdcjj1sgnNUVPrXbTiZJofaGZd8ehkjeN3CCQCiWD5GerXpRz6fKqDVuoh",
  "key18": "2y91EZz7Kf2HtGCDTJcDZouFUGqSTcF7kdgDzv3FEQ1CuCe68KVc7PR7VTpBSd1dcWMGRWk3niNndYVX3CVM9XdW",
  "key19": "38xNcCsUdU1UFW4zHUYJf1vJpJsYtwwEyEjqmLKUBPxSvXCDhpzXVeYWAyTdg31j4pufLPsocvUeTFeWxL6asE2r",
  "key20": "4TPjmkE38JHgHY1BqmNahK8npTPjoBnqAQNApAyiRzLkX3Qn6CHqhfMZaJRvgPh8ahVsrYJKuhUohHddRuCCPvyz",
  "key21": "41xjcEVkwLDVsrqazUYGJV7p1hm7693Figp3szbxZCZtgb6oDTx2MntbKLPrebnaYAixAy1BRuEBYsF27x93PNH1",
  "key22": "U1LUWfNZejtVdt3J5yNMDqCc9UDHyxZE45tXwB9tv5X6AL3e2GQEKm9Qn2JpEzC1gt6tum6hPiVBg8sC2fC4YzG",
  "key23": "46t3yUQqTBpiAYC92H3eYsYWoD249FMFVXyPSFwLdUnPP9Vza9fGWemQ8cisXaPiXTQZV5k1Yjdb8rQxJoYki6dp",
  "key24": "3EGN6Wy5qvqrApcNLnZMiGxRDjS6MoYxK9C8GsN5ea3bD3fUtvSVYxPJJqniuh7Nb9FtYzhfhiLweXdjpwK1CCcJ",
  "key25": "2mQXvSfEE5R4nc3FfrV5EFGMuDE6vA4jiUcJiGKXuiGSRfgLSA7Fp13MLhV4zpgSstHdszRcQQ5qoTkfiDaGaQRx",
  "key26": "3F5XmzMcuVrKaVQLsKdqJixYqUiXuYqau3pjQPeznjYtzu5yGxD5AFZZVMFnfPaFBNpXwJKunHgSi92DbrrAAv6W",
  "key27": "4X3LoFSgbXSq7YjuADSkHg8RqK5JmSyDNT9SCKdxdHEqa9b3HY1ubw5DavfvxBNuP3wzHarn1sBPo9NSRtfGZxg8",
  "key28": "LLeaswhXG6DyDyeus8NDdLySj94JbRNyzyVT5UMLqdcHKMLmTttsjuZZi9hcFTtQTnfy3GFvGnj9wVPq6EtTmth",
  "key29": "4ZDPkvnHUJDkSH1ZLV4B4xU1QGVvqz3T2Cc4p1BYovms7sDGkD443SVg64zuvdLHjXaNsQecqwv3DYwtMnEgU495",
  "key30": "5AFEiWxPTXLaHJXAS41pyJEsRbhXFgzGndUewryXC15SYpJSXUpsUDvH2D7KLrjby3nMzfAf4ZuuGrncUxBbp3rE",
  "key31": "3PWeaQNAjEF7po4necp5KW1tuKednbAqcAfXwK6cfwMbUD7cC8XjAFE2Vf93pK6U8z8YpUjYWhjyhomMkSW1e5V",
  "key32": "3VRuTuuUcSUEuWzf26aGSM1z1mQuLCTLjVX3mm3XcLZvHmZNEZH44gnGQGVK5YGETD37SBTuZMF9yQ3Zv5Y411W9",
  "key33": "35h81no9j9Zqgnrxc5HHiPwjsxE2KYKZxx1ypERbL3GCd8QhodJ87m2DX8E5gFaoJPSCL3sTsZurfamypuJ6skBk"
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
