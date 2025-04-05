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
    "63HQfEjULiT2pc5b21RzdQq4zajJiYnt9xq58HwvmpBJnWNbCMQJZEQaL7ZLhqarNrBVAYRGRBAjz5DgWXJBqie5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "658wQtN8WDUjnRaXKCcJnbcfAtmz3RrSfhqzYS6Xg44UP3ByZVS2GcuYjtpDVKsxnn7LxYwWJV4vYopoRGvdtHr2",
  "key1": "3uUKBreFKRZY4fAkU3ZpN7bnnE4q5D5VPLeuxfY45w6Eh83GuuCWbVLrYEaAjEGnfitUZkRQuUXkp4RbBbggYNvM",
  "key2": "4xEuFidhgAo6Bhjo7rZeaqoVqFX95DFWabAibqHt6xgy2Yy4dMqgk6LRQsrCopW5eSHTcGEd4FqMCwQwCFFa3f1j",
  "key3": "2bp1v2MqGXxwZrEaeX5JNRuXmqcGjqVALg4hcF3E66imxpvDUgTNzQXKw3fzTpJKTBGaZRyLEeL3LGT7mwX1ofuS",
  "key4": "Vkauew7MhuALcWXquKb3G8nxcg2nCEbaZ9Lw2Cp21jiQCdZSZefh71AUKSbEZ5uE2LoAPMW9mn8aKGgAdoxiMVN",
  "key5": "3qHFHBHPBUegKCvCPTsmkYvFTspCF1F3YzNph8u24c8CVpaYaR9vBaEAe4XMZitFwoLutwSr9gu3f2Hv4gMARkJr",
  "key6": "5EbWsscBvLLCVGkdnnBgu2GwYEWckP65W5vE8ajmwFRVJ9MSQ3xxpzWp7PCPk853WwqfCryrH9RKkE6ZRSmSpM14",
  "key7": "3N86N6bdX3W4Lqkz6r1ZhpYpsFX2MjcTqRWpcoH23A2Xim8og8d919SCQxQQsuLYBLh3JqpVCncWu18J1D9rNsmV",
  "key8": "3gN8JR1Pe5tNpM4htgsVhXYGAU9EULxAJNL1wP74HBzWVCCXzchEM2zpLkrumwVxucTWDCJwwqBzpsPBLtPbbZJy",
  "key9": "613V4ZeBJH3Mc2VHgVGY44XTgUrnFgqv2vJF9Vo2tkfxZALjVe3BhA4DGw9VDn4iaDynSirAYsk3GBvKipQHBT6g",
  "key10": "UZG82uUx4dyZjMwpfwDAb4tU1noP5tqRPXUFazE6hAJYHUyCpz4o3hsH4BCd7g4gAqqL1wLNtVYAG4QoFNXJRAi",
  "key11": "25pcD9ft5EfrjwBbMgzWQy9WRvBdivgyhnywrQYLCYb82y5Dokw7b772XisnRdzDQtZNp8rrpFLKeF2WhFX7K3yA",
  "key12": "34haQSWsrcvnVPGuZNKBZ5r9SDTM9twz3adZmSSG3oExEYdbG8TjbE147CHwEH8wi1JPr9f4krtXYiGjePfrD3JH",
  "key13": "3hWW8VC8eUkJEjsLbGQYz4GdAHvvZDCA2dKC9SWamq7WaKf8VfjpCZ3EWXWN8RxLkWFjjEKBRyrjGse76b2U6hZT",
  "key14": "5pXuFnQPZj3E8oGuJ9sYBVmR6V4zLps9zeL8ayq9F4d12mkDfogRwjRB4bg5wwd3SxfocVmvZuH8nrKoKwFhZA3w",
  "key15": "2Z1wFV7qehiDqZUazXiZXvqDKBidPwLmXD5DZSkxkvejq8w2MCisAnsujUmHnyYiiyNZ5FceSMcJBrQW738jBN9R",
  "key16": "5QM9P7A1PUNmzZPrzUb56sZZskp68gfvh7QGRG7xNEYPw9j1XanJhsEJ8qufGHFDPLKehirXcz2KaPXVXc3YG5uJ",
  "key17": "4rXo5YTj4Yc67kaqnw3VpJ5GzKxNmBryxRdZSetFe3SCbJdRFvZxCXq1cdqYSGo9bWPee7fBSqCxBaLaDwi4t6gi",
  "key18": "3zK14LhsHUote2KYNLLSLfdieFekdCow9eHETYLBNeDwsQM6rP46wTzojpoUhQFhtdcJRxF3uWxLMwbxUfuVHQqi",
  "key19": "4J5g5sGSEKdBm5UaFrX6d5y41SQRwGQWSVvq8wTwmZVydVBG6ApKCN1H8egxEMA3qEUwPcivJ5dAKYEkeFkHkgEp",
  "key20": "RYJ6FVosyWYBS5Dm5iDhjhuaUnZRksYUjwExRMnXHdd3oqGFttVD6RhfbrNYFYzofoEa7Qg9GMAVgvgUYaj3WT1",
  "key21": "4pFVXVKaqeLGcPU9p9VFqFeoDoN3zSiuLvAR8wRTphmA6uoD9G5ogQb4AhXyE3iD4chLwv95hBKd1jdBU9NQULDW",
  "key22": "4MAoNvqMK1waaqrzNFiqJwsuJvjudyhQ8FqSKkiJVeQEYB2QS5WxqUF6QfPJQ8AVuSCktgAgBsx7TRn87kKCzf57",
  "key23": "4wUThUHJ7799CB6uHtUYLNYiBYiWY4grtop9dx2qa8nt9Rp43PNmzQXJDbyAX2oAwmPerVRVmt2cucxTpEtKi1qU",
  "key24": "2BM9JAo9FwAY9S7LFS87EJJ4goB7SY8rt1rwgenTAJhgzNim4PC92gzAUPdumPq5trSkwRxLAKdZG56nk6EybU57",
  "key25": "3DV1TrFYUAZGLd6ML6w6rvvAfDXMuQvcHyUrFTgibKnSHtYEB5SNtmASC19h8WqcvFk6Wpce4nXoUUGTA88Bhwm6",
  "key26": "3PV1PeH781pxX3C7JCD3TR55T1zZFRMSgebzAZmqoGQTdzMw6SZYHKgKoe6BQxgF9zPsR8hWw6gm8ybQDwEymqYc",
  "key27": "uB9QUanbN3mUVuuhn3TwM3Jeydn4SRpdfpJLekbmh37PxQRgxnHFegunXzhRSrq4a4a6ZYpVM2fRkJgfceF3Qxe",
  "key28": "5PHUbRKcbrWDkUvF8BgsucUwNY9qBteX5wtvB5ZEoBmDYT1keBNvXGd3Mp2CSFYAvZV88wE2fp4S14zpUWBnoVq9",
  "key29": "2YgG8c3Rn8afMqW1Pdz52p6uX3awhmVsh7ybHRUa9KYUQcbsmw35yMXuiJXX99Ks8Ti7c7XuMWJArzNPpLBRRQPr",
  "key30": "4VdeUznxndgHZ58Xzza4cu1GYkP6QvAGF5fUqnnQCqRCoSaFbWj1mu7ZrrCBLnruSXdQCqWkDhBa25x3RP9vo7i6",
  "key31": "4UH7F3sdrZ3BGzUV6aW8Jzp1cdhxtQAdgrd7Kb14QHHf9YdU6Qj4d3raULuEfDFJQ4gCMnX9xB7i794MBKkGRyHb",
  "key32": "5v6VA6q2rUZ5aAYBuz8wrBahTqtnLtJpTrdmw4LN5ixnACkVJqR5Nd9wF18e6Jj9wVBtDdPYtAauUZ6hywQ4Xg33",
  "key33": "2EefxewQpXh5WtDV9dsiEWmcTT6KqozWiRmYpBHhLjMdqDrJUxRnZ29HjyPyk1sYwgXs9iZo9tYvVDJongpv3y2z",
  "key34": "577V76mYTGvtmadUK8QTtmodKk94Pw599mxuPrLujDc3Jr8rM4Taa4tAsWC4jNFsRS7xPTQyVDVKYTdLPUsuKZFC",
  "key35": "31s5AARN3LxtPqtPJcb9px9SfnNsHBG3LCUNicwSYaYDtHfiq17jB7PmsB5QCgZnixYRxbCE2SYszbo3kt1M18sB",
  "key36": "5zYhrKfj2NkXBvcV8TgwtgceBaCbytDQM9ifq6LvFA2UcsUK5si7pw4APifyR1Gn8ceV2Tx5Sb7PWGxbYEy6VTSz",
  "key37": "5RbE1FCxyGQ81ty5NaCeJpNkUgyAMVLnLaWurABniMjta3ZqCVdYrjbWfVvu8sKjAs3xkUythbWPC2RUep1dTC2y",
  "key38": "2bnFg5Z5yXQxaRvMcRYEiprciNXEcHRXPsqQiRtLskHHxDNuKLWiEijdy956FWD1Xqqb78Riez6f7gzkX5hYmV6c",
  "key39": "b5awC4Fa3GBf2NGBQTmRVfFT2LtbyFhUDxL2LiwYaDKQr3f2cZvWjQid6qPLaTKp3ZvjjGn1wFQrLg8GfNp4ePF",
  "key40": "4FCPBuCJCJ7tLYTrAaj35nEMfWfLyMQgemG7yYVYG1eJg4pBV9Z4Am5NJzo5gDRrKYvoDuWbSW6kTYvJWefwT3eV"
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
