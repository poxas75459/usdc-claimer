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
    "5zYWZE5amQxqGwyLBHkq4zU85tSo1j2WY6DWYdKSCcZPrwzMVAeP1zydMpsXqv2S3H1H7K6qaoePSaeToNensuxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bGdbqWb1HYFbgZwTsHw2gh9qCFzAkacbk6MLeww1p7BU5EW6sNFPz7JUown5jZXLaEiki2tgi71QR82yVBuX3N",
  "key1": "FxYgcAR9q4uu5SVRXqJ29r3yLj8VRFZdCqJKRmDiUgLGFepyyVxTNUbY5hXvPo4qyzPZia3YKtFkvdXj5hC4XVW",
  "key2": "5G29xK5cM6TWKXRi8Ck7e4Ej4BPHpWHkmFapTDSLb9Zt4VtUuKuLnZoqQGW83PowCzb1fF2G8H2aZNMqKsxRx9i4",
  "key3": "5iYeYsiacxacJUeQjBVSstrD1srpynTgFJkwHnc91DFqurbKGmvph7FNSDTJpTNr2JgcJuUFvfwWowskvktmrwqC",
  "key4": "9A2c8cUyXRRYrm3t58QahN6ew5BgLn5j5EENrUShNBpGMbzcrosbqJ6nKJ7ukAxZNm7BBpxoXFC8aQ2cX7n6N7c",
  "key5": "XYgVYTKLJpEVGxGhBaRHQjxtjg6qAf1GeHwN6TeusUKaMpH9NmxnZLKRHhbsaTpVFd3W9Wv2hdfrSBJf19ikJc9",
  "key6": "2Tzj2vsnBabebVT4musKWgZCo4qirXQD7EwAk3hafEGELbZSXHB5gwNfZKXcg78oENTaMkhoFNuEg4iAojBjpprx",
  "key7": "rr2rZooHGJSHPTicYBFDsbnmPQHKjWm3KSDop3knyNosD56oFcn8rc6iVJPTUSmaRxLcm4XTGhri5PNfJnnvqHG",
  "key8": "3yH5uYXvEzThFQuJiFDfDP2TUoQZCgZuQmxWvPFtpZ5NeW1Zi3LHkSsjDkWtjAmP2okoKcxSyc7w72FDFg6pmUvi",
  "key9": "42qnrTdWrVy1TjvxYHjhz6z5tH2hyXoQsuPCB4imWv4Cyf6mMWQH7ixnrYMc9x1JPq86bHH5AkK4KkQzqtCj8WpS",
  "key10": "4fUK3TJQH2Yjp7Ucx6T1NGK8UHuUFyad2jnQ9Yyduhd3ewKEg1qDtLpqJH3LLgLKw8HfybE44dtzs3yA1FNfVFWo",
  "key11": "1rxGeFJHKqFc4p32Fk8ext6n28JM2b6FNKSUcobYnSXLuyGe3a5uqm6XqhAcbJZEQ6u1iAHhkDGqYBUCKPheseF",
  "key12": "2MQiQSGFkMUbBgjzmjgBBsuzAmmTmRhAGBA78xok8Vars3qExvMiwKFkKwH9C9bhNWVtskJ6kdWpCpyb3zn1gJJy",
  "key13": "2nBbptWfbDdrPdvZTSputDyWt3TrXXVuNCy6WofpmRSGqLBW2eoeMrhbu1KQFk2tp8FxzJgh28YQTHXasuJeh2y9",
  "key14": "2qxZc5irfQe365ptLSSpAA8u43Bt1nPTmwgZX2CWXr9mptUeJ1GBQTQy9QrLZP2xDTTqunnFdTEqvKDuqdu8R6Zo",
  "key15": "3mwMBvPdW3YLcBspaLNpVf4vBQGf4Hh4qt4UKZEuVzxt6bWF7s7qMheuf8CHE3of9DymrpNheaDRkBLGGh28Y1Pu",
  "key16": "3D9f1WB19ucsmfSv9t2Y7d6Z7c8swWyT1oCpMq51GnBSqSKeRGCgvovnxDaYoDxQv3JqkCV4cknVJhemCntM6hBJ",
  "key17": "5wkKQRL1GNgefmS94ir8HSQQwAqABHhbzoV7RgRMtfvzo8fSnThHcXv8AJL4nei86UtxyBB4TLhv53fyckVETpA5",
  "key18": "F9ma4hki7PTgunXcENbv2zAuvEwLKQVqdKtEVvRBDX2dh255gfzWQndy33VtTD18vfEW9v5wsAUPn1wotxBiVrQ",
  "key19": "2R74R9CshAjeD5YSUP1K1FJYygiDDrjt15uvDWXeP9KxqhFKpGRsDy3kG1eCFEHfcD5WbQAySjPpEAJbNfHbmtK8",
  "key20": "31s5fJxcUqkRxEHUZqMrixPhGaPn8oAQQ21TrYdVdaJbfKxzzjzB64oiWrfaMSqF6KYhEvM2woB1a12YMQfJ87LV",
  "key21": "2nGbWZ6BQMozJhtZ1VjtFg8ZzqxASWEvrYXDVHPmNWKoyLDuwVBV3NMexdpWbqsikRAaQ5kVQiR8siESsZuptcUG",
  "key22": "4u65e3ptemTYSnTYru5vyigYav6Lt3LpUYJwDiqtSKgumomFBBDyV7uZqFXkbvbYdHaCRahgKUNhmDc5nZrsecHX",
  "key23": "37umYFWh54kdgrrJ5XWe5QpaRkzDpEhygUeHpLHZnLjEcquZJida1hcvHyF5SJbBem6wV6QEZ8hdwYsTcrzBv5Ht",
  "key24": "4F2jR9yaAKhfDr3aJJhYgg7GirTbhrw8bsRFNjzqFDX6tNAmAu7kCGS8erqFyvjwCWwU8aPsxnqtGFbuMAhnn1BY",
  "key25": "4C68KrhG1PeDtyq92oWgeAabaLYdJQZeTxZuv59PXSMZvLmHoGovGWac8kGFXGXDeoMK9Jq1Qk6S7aSfvFhHAzNe",
  "key26": "5g6eNiZiUfRvLxx6NNhq2UYFrhxgC9wZsKru7eX5gEn9rxriGqgWaJQuzzXXBXmKuisapVRPARK1qnsoxDeFeFmM",
  "key27": "4ncgNPkGkNh67G49dgcCNytsB1bF5wRM9pkzqofs8FL6EkRvH7jeFDhaAB9n723xve56S75FwpcjwsoLLZqTC4Lv",
  "key28": "3GvcBHDszjiZqYhNNMNKUm7ADHsWmNbcHZCY8kCTHYF75bh67Dc6hyrxnanFPDe6NSpJs1XKvtM6tjdfX234LciA",
  "key29": "3xZusux5bGBMWNrGZU5Z9HauDeuWrgrju8aC5ZD1qLkaKDEEgGtcVaJCnZ7SwG8yV1kB1Y1oudrpegGSej8YEeUb",
  "key30": "beqpqAQDB37GvcHu3pC9W1JCogB1BVGXE3EstnwCSoxxWQphyXoNSPV27mfyzi9GxKyoYqj5RnaaUjzr7EQm8zk",
  "key31": "4YJCANuxsnzBFon6ZPmPvcdrM3r8KTvPpCWUX5Wir1PSswVfkWFofsBSmCyEz2vRLkiVjyasTX76q3dBoPBQFkct",
  "key32": "3T7EsXrWaAErSiDMBdZMZ9Sz1GGFMYGF5nzgeYrcNoLJ2kLGirpb3pVL6YehRn8jPb9dN4HJhZXPWn5QCRDGfoNj",
  "key33": "eyt96xFTakPiDLDTmB8ccKwjTPSzRKMgo6v6nz1uGaRnWAFpwbTj126HxMtMCvBsUeBFeLMEMv3gf5KaL6ar1qy",
  "key34": "EA7wo3r2x7FU6TJ1LDmXnmfyx9mCRr54g9hxN6EHRvZW8EoPMocjak36sNWdYLgLF2jPCj15xM6v4a9dtNh5Kgj",
  "key35": "4wv6n5DtHvYGFJqExWpnoXbcBBkLchhHQExWWQF518hK4VCt87WowaT3ia4rZDqnaCPEiP3yNijm5b9n5po34sNf",
  "key36": "3Mqg42Xf7kFeWxRG4xBpz8ztcj76qNxdRzsDRtw64mzjekWqne9Xa5JnzgwhznkZfozgoVs6VTHXQEZKFsdb4wL4",
  "key37": "4UyWNoSLoibF5HPzc65wUmFGGU98whvPVomo8MRjX38aYzFgmSVWhzsdyGTFYQhkSMkBv9PG8hxUn8gVEnnfXvGS",
  "key38": "5w85LX5wTdCgCuAwAr7vmd8WwpruFjWsqxM3PzYhnKdr5eRTLzitiJe4NfDBWo6ZSNsbRxYBj3sxU4j2CFyKd587",
  "key39": "2c4g4j2T17qTtnM3QRwRutucZtppVDVsgnGTvNuPCACcFddscvSEFHhriyzn2sEcT2guvo39Sa1ouW3BnaSUAjiB"
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
