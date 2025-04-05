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
    "UViFSaH7XVcyCcffXFzekZDqZAZYHkC4xUcqZ6bwrnDsJS5bRDjTZugPnt9s8eSC3E8Cu3eXSHgvGSq1r13g9aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2fuogXBFmHmsTXfteD3norwdPrgzcXjKY8MrFf9AopA1VQfeQuSA1zWFtNp1Q8dFh3pMNS3i4VPQsC2WJT1cKi",
  "key1": "31KF1xmkqTv29PzyGrWMPbSLqLTDqK25Psp2UffsRro8q81uSCKbnHHHmWFhEnxf5xe2GPF6UvRkxPZaQzNkmKY6",
  "key2": "2dwDtPypVJmAU4neFqNfPCS6Ta5Rg7PN48P3M9vX2HbiNoa1UXXwciCmh1ivg7hEjvSFf1Hpgra7GSD8WBSz9s46",
  "key3": "4BeH6wMvLj9gSBeH3Ag9RJpyVGW5TnyByrvqqoLouPghsGYPgHs183GuRi8mueSrBJuA94g4VmfFiVLKq78Q4syC",
  "key4": "45fPJ8qQaxz2A6ijxHBmcEKxNpfNKmpkVg9cuHcg4JQDsiiLNNvNQFx3arRMejBqWqAD9TRixbSNyEoHh3Y4Acbv",
  "key5": "2nFwnr57VGA8ahaHwaZ4LjthL17CH8LNji85ifuQ7VNMnREesKSkVagGCyoLrokvvYPKDWdWKMkWvpMV8r7jk1Na",
  "key6": "64CL2iQWgtUViV5Nk638FFg1oXseTyrfgzrSqwTBNXrvXyYEtWWX7fLsAoTwLKDS5W9qB4Z2CrDUxkeu6FTeicRJ",
  "key7": "2ccScoxgjhJsbEdjanRPirk2G38hGb55iBapfKPGmZzFFLmeqrPY4MQT1Nsi9FtFfimnsNaqzAjwNatFr2Cc3xm8",
  "key8": "MnJsJv43cimhNGaK383o2UxpowGxZPn9PL6gWCNFsJ5uk2ozeVPX6vruTFaasxxhLTUPksn34WTTLVwrZMbt5FP",
  "key9": "5X6g1G1jU7CWu8AM3Wc7kNjTUjrj8Aw1R1D6dhZJ6EPsB8idvhdqHbbAirBsvjqvcXCn8y2uZu3q6KDbUf3kMmyS",
  "key10": "JjSqjvjQSLUnqmyPuTUA2wV3XJVb9wp5k4VSUge4i32CZnBuFYUecciCpU5QweyRvkqGejn62HRpq1djAQDpBPr",
  "key11": "5XwxqFpk4LTv2B5QLHkMEhb5FLDYHDWV8cJgYco5DkSxEbN9vAguJasweGfYJ3EwPvbtwxm5brZfD14Za7VRvLjd",
  "key12": "5U2prj6JriUyMeDbn4EJ8CrMdouKjs7WRbiqzcec9TfoLyBfwyTXhFbdTavjtphkCHRG26qjCHdZN3fEjSWiTgty",
  "key13": "3Ls7fCWRipKPRVKZZFermYzCe8AvfqET9wwH955Qx9pRA1Rduyb4h7MwMeJMrTVm5oR5v4EdqxuDf1UJcGKY1C7i",
  "key14": "5QK54WWjZmCcDjCfJZFLvx2gNkHNedzU6cJTX6YFF6BhMgKrRZnVC9yR5buQmyszzr4k5Mdc3iu7CEU41ESavSVx",
  "key15": "3jAFLugNmwK88LhXLEnw9sFJVYyfMe3jrieWdcZ4MJsxkeAwaehskfajRPVj3DtxXxALNREt8tEK9xuJirgWv1D5",
  "key16": "4U6r3DdrjwXHQteNHSowowuZ1Qihw325P7cuJVUK3MXt1QEXW1FK3ojVG4biitCA98KoCQLV5oV3U6bMx1wtvg3K",
  "key17": "3LHetweKoEvm5cYZvio7EzoayEGG3ZPLvqnyEt6QPqhLcL89PtHZLqE7zULFzi8g3v4heJ5RqMh72KDgSCrfT3KH",
  "key18": "2CjQsoGskbb6vP4a1wYBDgVquWjhPQvkoFc6CWS5yPpUUN35w6ra5dnoRAj9t9XYKzcbmsKQZ8GpV8e5yuNSeY6P",
  "key19": "4n9LmhkofJkpr3dREzqc7yH8jSwJb7241Bofupgx7r97fbE8YoiLcCu3dDaVB8dPHFfFnHQofRhVa2ASmFZX4YAz",
  "key20": "41YADyzvz58ZLgfHZSA4anfbf4zcPQxPoRRkHUYExYBdez9sXGPXNutbW7F2QKDAoUUF6k5c5qRfv2rhcgjMPYNi",
  "key21": "3s97fth4NEXSVn5WLRxwHxjLKxsDqtA1EwrYTxe4ULNSfcNXar51EBFbcmk7ahr8MXDhYYHqMxHPgJvYcF4t1wPX",
  "key22": "meENMsLgBDCq1yhzJKJCefAcXfB74NzdKG6c5seicQw7eD94Sq5FGa43rctdjQMBgdidxXeitTaQbZQnhNGEFNW",
  "key23": "2aoW2uYh42GArTw53M29hHc3PEhPYQLxLG7JkMpfZ7G7t3b2skQa89zuDjhYUm9qRZBRzZnWWFQtw7LPpA5hVARo",
  "key24": "2YcdetTHNSQnZ3J5R3ZEJGcLF3dfhhnfmhxdoX4BpeH2sGgCvqMVw2APTAVE22xBRuTsiUp6itUiWp2sM6AWsL7s",
  "key25": "4Kwh4UfME4SUDtH5np3Bn5vatGNaoiHM6n6uABwZSSNMxkzwSnny9nJoHys3qMqNVT8FLRJgC2TbZe5vhPcDnpMK",
  "key26": "5TghbqUk2HwUh7ThA9k3RwJ8vyNb34LaYwHBweU2sSFNXHvCjM3ZCqoV7pDKuCDBpvkBmfWcQbBaPbeBgh9PkAd1",
  "key27": "5f3AdGEFDJk1xc3tSj3zV5d4YsGV45xBN117yxgJe4x9ykNuE3ueJPACcTiXXF1UXoHHpUdTH3i9tRvF7MQY58nJ",
  "key28": "4Y7zDAMMwxep1r7ZcjMjVb6HbysVTzrATKmP1xi7FyFn3QCsVNroNsjk9WQMPvjqNPR8uW8Ed2SzXfuNGgsAudgA",
  "key29": "4uoGAEyWncHPndL4UKr6ndprL1mmAiPTP7bQdr3c8nG6ad3Fmj3Ws8Hze8DEvzCMhM6FuebrZ4b4Ac565J4CGjRL",
  "key30": "4n8hiGtbxHpJpSzKDTLp9ZqEVKhGo816VDLi4MxJtmuCNjHKysqUQRgEBcRKMuDiViVyrazpq6bXCbbJQE1u84kx",
  "key31": "3AhGg8EnV2YTVXcR6B3GDAdEFkCXrmxFQ2jC9cMVyJYgnaZBuy6JEVFKuk4MdXoM8EwQE159ahez23N4LCUwmNXi",
  "key32": "KmiSdA2deWJ28jvtNhPgSdn8Q8AQSpGwNAv8rt965tyNBLiXuG8kNWu5PpTiUbn7AKDc1VCnz7o6N9wC28PhtnA",
  "key33": "zieu574dopyiibqYd5NDXhaC6A3BAXr6kes5QAqoEKvWmowhmQsASjHEiKmmcoUkeV6FFWToqEGZGsCUqPYDcRL",
  "key34": "2N5RD3Q1XQCrLpsBDYv623jHPTKhrbDg6tJVQunSSozbmfLCDRhv7RbYxhpJNFe1khSakDbxQdwgYSWowcf3niWd",
  "key35": "4nk6yioTeW3FDgP8UgCvzSo7cLartGXSfdP7oo3GK8qai1XpUCegBN269DGdL4vhLcZ91BAptG4sbiL79EDv9qFr",
  "key36": "67qxuA2uENiw1zuTv9q3doJrqXR9p1eSWSfKgt8oatCnxKwMuoCv6uBwgCr4eaJTdmnTB4Rn4T8gqVsupWDdthZA",
  "key37": "j4PCphfJpjWL32vgG21WeHGCAdrpYW557sJVuZtzdkevqAa2RTTM57tzf6ChQSVxvqqHr7XG7LwvncJTHS7Qv1z",
  "key38": "36DHZmKNAsVnqS1jrYab8JkqbWtQQV5XLF52xQNj5VhytjDp68YohbXKwQUhVCnthtrxNL5vsAfKnkMbKWz8vY67",
  "key39": "DxJEnJcgXRwLMHQxacKBaHpQHiGHTothUk7vUDfQkTstUSBrgyutwqLyvVf5smWXBAFVDeC9u8XPBukeBQnYPbh",
  "key40": "tWqTYJtPXriu2JvxHLsNuBfn1Vz3ptZttSGdmuK9nEf1dfQekXXKKJz6aN3YNFAGKFGHhSWjhJbQxmgq53C6wPH"
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
