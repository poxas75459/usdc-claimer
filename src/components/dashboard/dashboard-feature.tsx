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
    "54scbQhijruw4KMLPzbHgBvatj7BorwwQnKV5UJBgvveL1MNNjRxfMZSE4hMbN7bFVf35MAFEGEh8E7tWBPi1ZXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258LN4pnq7mC8d1hLSoSUyTJGpUZ7LiRLjjAFAJLtgXxwdFTyaxo9gzQEsAxBvj4Mh1tqKNqzCGZPNcYcA37VDkk",
  "key1": "5hK711KihAopFJDEEM87biYABszU13jWBgZWcsTAiZ8hrQBg68UiE5ztgWzr4eVEaR4xi3AacNisp2hHt81UZjRw",
  "key2": "JjfMVYJuCvB5zc1g15WvEbAV2YncHkDjNh12zWhoREZdxnhnKvYn6VpKFZsf8wYEY8iAJ2Jr4Y6gEaR1tGuP1sy",
  "key3": "3yAECp95w2LjBYLfBRhzbpsyxpyDb8E96g62C58pEw1bddCX5qKuo8NNEgV2ekmgod9TeQ3zwfNFD7T59547RSNF",
  "key4": "iMsKn54Aq4RyH3KWS7FDaif6bYxYuE61yufX7Wb8oMdPYYMZiAc5C36fDuJJ7Ucacon5UJBqzNV6sW5bDq5XUfG",
  "key5": "H5neFVoUcVNtZoHmnbm29Nz6Gm6aHs6F4Qbe2DDmWV1x1ECoagP4RJ982Q4ZJjjXwQczRgqZJCwUKHn8ewMj61f",
  "key6": "dFhhgSqikNrQRJdbQH9FRb6mUbzouh3f8N85z1pdP6zie9vLyKNFtdpTYRVmQEMAezu5Yo8aoVR82VqtceK1m5u",
  "key7": "41nE3SHqtaQ2X313uqrM3AvZVDHmvhJKTJKeqqJFYEm3mcE9rTW3EfL4xzffgxFLjBDYqkv4TqKm3es5rEMRadg1",
  "key8": "2fVuLj5Bn5U52WSZ6V3cVSxtAedcyXveCsU6hbB8zU2aVqunWgLVP8EgM1nXsC5yrE5UcXLVohk7McBThXqxiinr",
  "key9": "2DpAt2pAwnChsFoAyzuy7akDZVVDS3PKB6h918t3YEVB8sahNLmtBHuCaiQD2kUkEqmpz6M9tpThY3AZuMeEsdqC",
  "key10": "pg8SKKMBWd82fNZcSKNFGmbUZtD8JxttfDQPzyLCzbA84TTn2Y1f2TbYYCCi3KnUBUehAfhNvr4RYvUMTzJZ6dn",
  "key11": "4EupV5nYcsNUC4svnUhWbrpfrY2vep6weiMemaYr92s8zJXq9pYZvPeoaYL5ZxGHqw7qLCuQ5xtnGvMNcEBXFfd9",
  "key12": "LSw693EmJwP8zY86BUXAyjP8DMZamApJpPzdnW7DDK9G4ikX8xejw589zoFmzhLz1PhQ94hEv3WvERUQciczceD",
  "key13": "4PPz8tT1X6ZA2k5rdmKC4CMYsQh2u3Z8NrEveuXEbTCSptVJnjMqU99U4MXZNSsE63KP66J8Wpf1FoUJTUUFZCFQ",
  "key14": "34eDhKsYEv6Nzt9EeswBJzzDxixV6Yqa2UUKDCNWaw7AnW9zGyBdkQjgE8a7m1gNrWKcdBt1jf3X18yxG65ewMkR",
  "key15": "3NFRBRCjDTtC6GYj2MPka7eNMs4XymSTLFpWbTkFWCQ7g2ReN9v1nnxnp66h911PF2kpYQgcfTKQtuxBstGjcD9h",
  "key16": "3jjt3eh4XeuFA1BGrfQouySbazwPLsfJ1m3xverYTNQTzAcobTgBPLAa5ro2UNVA2Ys8a5CcKo3nAbBNrm1Xz96Z",
  "key17": "3SZA5TZZ6FAWZRH974j3FQMDS464koamZR6YWKNQu9918b7Nc7vuZDCw8Cpu8DVGUezkRuSnghVspavWHC6t9V7T",
  "key18": "22UW42iVZgcaCLtYJKckM3mHk6RSQNwitnYS1e1nGtuS1qbcVG8Nw1YWfaC7YougHDoofDwx1HemdycpfFEpMozf",
  "key19": "5Xs8Auy82ACHZfa56fHehzTN2S2WC583WuS4bpgc4rKYN1qKiNTppP8MEK4XDN5zKn9wKLokoVDqZDSuXPrAHc9Y",
  "key20": "3EMmkpUNpc3vU6ZH4spn3r8ebBWrWFM3ZLderKsxAuSHMXrMD2ov7RBJ7o3NDC1hWmg11iF7SyY61m7BdYnpNjs4",
  "key21": "5BMHssFzvsusxW9axewZerxLEdSsbLhSJ5s9cczzY6gKcgcjFAPnwfMTy8hY2ZgB6annYY5ZWDjTrKoNCEpjdFTa",
  "key22": "W1mc1kDiACeCkwFgjgt6peRhzjf5pPJ6r7c1CAQ3QJ8zmXBsPESrbkr779qfWXCagDwv2cbtKK9nPGb4zUV754k",
  "key23": "3AwjpnpFoMn6zZZYVAqXQnsPd1ZRRbMfEGfE94QzUJmYMRY5qP5de3huccBQ51sc5yemTWhfQoC2qXAAARrmmPwG",
  "key24": "96UxgRRTUdgPukjbwmp48Jpm2LuMZGrzmWXvUdC3foxMt4qWVXZb8VTEzMhUWkQ2P6QGmKf9TjHYN8DAJcvAkDH",
  "key25": "2KnCcnMcNDshVos7ze8DD2G6zFzqQxT2tCdsJj6svDUj7ogFLidwRkMANtzvdSehJSQkxgtA1agwyHRxFXWF3VEe",
  "key26": "5gpwtfwSaSPgeAtZxXrrtMKTZLFSy4wUEqrG5q5MenguhXue7VcyPFMbEgmMt9hoPsQCxRvxb6t4HWaWxPy6YyaU",
  "key27": "4CY8zRPyCk6Cj4pFJ4kVKCxMqzj3dr7qCxMgg3S2Lu3faz915b36aP1pj3v5Y8P1EnNxtQ5L2P4vgK1jjKMozmve",
  "key28": "67kE8Nd1rAKucemFVwpSDCvvm9y54cgDWCrBnWngtMAk39Apng1o79bHYt3hs1Nq4G48cZzyWAXsXAEZkksz7SLA",
  "key29": "513R9P6e38oisHCGwaqbWt6nqsKC3mUUAoKYm63YyqhN1aNf7YTr9acAVZJKTBKk3N3MuUU6R3HX6k9BDhJJvgPM",
  "key30": "3mhJ9sR5nKokB9p9PyCcqZdSWLLpmKEG4nLCvV7JzYfgPw2JUeWKp3bbnQTQ9HThsvB8sccWiZrxbU7UXXjfRrEv",
  "key31": "5XbcqdPXXBKzHiJufmD4JoXMma92k55PNdJdJ1jYiAx8RtoqD2tTAUgmMhthVETPuMvKmWxAjMpmotMfHZbut3LH"
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
