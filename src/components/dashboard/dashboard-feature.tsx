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
    "5MzahS2UzBdd21wu5sKuTML4zHr3T5YctejfR2QEdAN6TQFozwVoHRrefhATbEu1TWGb1E3FgFU25b3in8bFmKdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vq5sgYkfiEhukqg72L2ndUMGwA7AGoNdwbanWdJyTfXamdVuEnnFNwaeUUuAcaLEUKBqtCErNGXA8K3oSYaYLUs",
  "key1": "8jUzvg6siiM8geGHNgT23qaF69CjEnSXZke8g41ZR7u9swgpsCxsTFDvz5YmagY1cznq9NtJnquvfnQcViR8VNf",
  "key2": "2N7iQCCtqEyT2U5yktbeQM157P9JJAftfwePVxktSiR6jVCu4fkFHQU3zMQSjDT4vi9y3CXJcbWvYk1YfBtYLV8K",
  "key3": "5toPVyT4Vfvg15kewqHH5PJeDBVGntN3hsH8hsJymf8x1pY5TGweL5Hun6ji1j97EtjwemGrjsamCPUCHe5aMBow",
  "key4": "3Cx8fyeDLAJcm9EGGumwVmWyKTm6T79u6bQvodHjh56qG3yr6hh3nosssJNFWmsjcHZoRq4uC9HRXo2YHYPYwZb9",
  "key5": "67QLxxZnXVc933zrK9BAtVhqyYJCZjCRsq9EYVr4NCnCXDLRANdBEdbhT6YEPqXQ446HdjTipKYapb8MtHjaiCgs",
  "key6": "dyLH4tMezxGbsgbtWTFPGFpHJtSRB4XmX95ERQ5SYuoM33RtQoKtnQZXZaeHeSSp2MJyGPyZhv1PLPsMoxTCJW5",
  "key7": "2iRFHYoJJXaELAdvgQPLNmWfPMwBCsBwofnsfGyh6ZqckweCLDgDX8iccUz8ktiBPWuD4BDhGJuGET9aQiAeNgb3",
  "key8": "2ap7GSRJZ3Me9Q8V61DfmnkkvKc4YN4NNFPstLcognzLEnGdbyPAB3P4cGwD3QfTxft65VpVbRdiP2wazykFjLsS",
  "key9": "3Rt4raaEScLBKhSixM4G3KrJ6oE47tBCXmHjzhZw7PKTxgVrHJH7f66UviGJYkNQdJvLm2kdSxSBdWozmomn89LE",
  "key10": "3KJsRJYkQ1SFsBAfss3bcqj4beYVQcJEgt3qajBMnFByuRwHW6Wa3AsPAisrB7rT3gMa3UnNFHuQLxW6QQ66Myxm",
  "key11": "3z5ESJEmkHwRkt71qpxJaN19t9HawyS3CP82oT2JRa679P1jkhTeQMNjXJL2YVeZ8Kx9gy8SnD2bGVgmUBPKMEbi",
  "key12": "2kwdzVgpw27jMctPG5UUNmSeFdQFudCgA7zs8ZZW66FA6V1aKNQxtfXkK5z9BR8HRx79ATSap1mm5KQq2TgsZj9t",
  "key13": "5LKqG9HfroHvsbmTWhq4FRRGeKfzUamKkYD9gzYDepuV9X2LG1ckMkeqM8k7DkYgTfrVrzYvxpaifyH2yXU7nRvN",
  "key14": "2FxdvhtAYFPHHWjaEBH2Wb154W6fYbdXcwNo4vtkqqoeRnEAytp73DMj8i6dSHXrTyC9dCZ4CM1T6GmEnA6xfC2G",
  "key15": "5pFPbYrHWudgoq8osGtRixHiS7e5dLhPGgrLWSBpLD5mY9eERMNrMdpkxzKiqqzcCLaHyZduEZHWLciWUrGYqAyG",
  "key16": "2KYxGKDoSYMfsbkjLPWXWTLALEYtWGDPN2u3MdqLmW76zvJw2mo2XbYQ7Wwdb4Q328dNsdxtwh9pZU81PKBubzAn",
  "key17": "2iGs6tU8HMW5xUhQfvGK4CHV6qVFA5UkDK1tVGC9LFwhgbiBQEVQKCuEDv3M3HYt4nbHhcGhKsuns9z1pNYLN4yo",
  "key18": "5Hs3DZ8khTj2948FTtDbd3VN6xn8corKhqSU1rAzMx499gNck6U3oSgAwqgXPick67PCgoRhrvq8REAmGYTe3yGQ",
  "key19": "3AmwmWDNxU3GKdCyjcXE2ZFRuTkTnYeQSxw3WwVJuXgbYeeqV7irruSMdtS3wAx4GRdvZGtEBPT8A7HDz8GpU42N",
  "key20": "sJeBAhqr9g5dMisQzrCPXPp2qBcRGqfFdD2WzrhqPGRK5rqgmDXeXbyyyN38tiDaeFzqhrFZXSqCuqZeZx16su6",
  "key21": "3RE8d5hAse42pkq6fJzpkUfwCR8DxFHayz26bHUs3aaHMZyi2rV2xRtVEcgKDjRgYKwyge7ozaD2nWCorPm3p7aE",
  "key22": "4Givy7LyVRqveouTtjPkeTvEuBurigqj9Y1mPaPnVAjjqJCxWshJMBPU4ESvMHcVwbxnVoDeKqCKgZeFnNrYeBPc",
  "key23": "3MWd9WagwqAc2kdVTj5gzqn8q2yRQFEX3X8GiWT5oRnWnRfBRMFaFpUTkku41gwPhYVJor2iGxBt9u4M85G4sGUc",
  "key24": "5xE8wrdU8yuXut9RBRHt1cUkRAWXicygL8zrvUupvNjj7wVWFrECTeCFhsLFyJs9zPdB17N9MxZTzLe55rCdUjan",
  "key25": "49xVTVTCABsCVinJxGYmhhMwBQPAKSsTdTM3DdfZkch6j1ojHBYYF5YcZwXxMeQYkP5YFDAhUkPW6q7Uw3UoQPqc",
  "key26": "5NQkKXFb5Wv1dVipNfv414LYB5hFRmPhydHBkJGULrUfJjux2jJ2ySjjVDf3NWEG4XG2rFhzKVnKmyfAhEGP6B8L",
  "key27": "3w3CxkgpNVTu2YYS9GtzHr8wmnCwrqe7nyL21HNC9wFPphA3ZvhaPJUK4fPnbRH4C2DqmUjCQ9dSnAeo5TVrvQ7d",
  "key28": "4pJngdD8eqs8JM1Xipy8iLGHRK7zXT4TY66teP47hQ7NcETqD2fSPHmj4fWWD4n68VxLgYF2VHHHkRMSTWESn4sF",
  "key29": "3AzcEEPYD6pNhC1JngADeqbFTvZoxY8mmHa1rhP8EVMfCqeTd7W5FHMybn2wCxo4nbeFbLyYfyCzTQVVqRvZjxAR",
  "key30": "4wqkdtFAPaoCcmjcJ8Laq4GSJ8G5y7bUxcSsWm12SKDZmxVkG9hPJ7aDRzf3g83SaRDHaTJcnt5SFBBkV2zRZukj",
  "key31": "2XQK7hS3oFncZnnPMWUE45kxidnNyGNAamuTVi9AUsHheWvcvAVQwf7jnGkbenzFdPTe8fX65Bp5gbCRFLHkmHsE",
  "key32": "4R3u8DG3URTLhJwbZsWSWHSkdiiAu8J1zf37FWPh9FhirXn2KpSUovyeWNjmZ1r4cNdxWAmGHKTZY8HQqachp4ZV",
  "key33": "5zGp16PK1FnMomsZaEVKMjX3bshHg5UNsKxShgkQzEk7oqGnacc9UrEaaErKZRwhguA2vTZs7KWcksrzB18khHi5",
  "key34": "2ChtW3HxZi4FLWFGaVihDgxyMmPzhbrcGm9YD4h1hSegHHZyhAfFNuT17MTHwYbF5uQCRKvR6tpjyhpvGPHjMZWJ",
  "key35": "3XTMXwK9tjacB1ro3rUak8Lv2WQ6xBEakBhXPiMYVvd4zhWhZDkbb5idYq1vfQXGbtHCPMf3T6hizrVhpQ8RwELZ",
  "key36": "8tCqAtD39vaTvggN84YN3DQd3SyHe8XXGPz5sLbnur9P614BDLvjs14yGEufZUAKDbikDvau7ztiT5WDoLE6AQd",
  "key37": "SwwW7uj8DipRknJWhWWPYLP9vkUJEoSUmDeKbxnxxpxbfMmY1L65Qwb6ESoDoGgkpe69LuefMLbJr6ttHiNCwdF",
  "key38": "J4zfoHaJKR2cbLNkAoM1zkxmZw7cP2PNHpYetTHKCvaXg4qHWxrh5eB9qtbhNvzQtSvY2ftphmndKkrwCn6DqX3",
  "key39": "NGCEraKLYwkftcZiYKfhY8PGcCQeB1hwATu8HVY4WAaa7YHp7ahDMwHXkqk37NZEkQ7g4xT8jBB97YyicSRHKiy",
  "key40": "5jPXq73oAuYP3zHpTFW1yd74dExGHX6JuPdNk4ZUtPCYTsNnP9viknRFnMmegg2gMcpSaZvyydmvuSzEFSUhCGdL",
  "key41": "3PkaWsF9eQG8ToFi5ZzA7urt7mkvUS64ZMWyRwunV6UgzdTMMZkBxtSFM7mHdorjGw5pVGJ69hjJ34RXn1o95Css",
  "key42": "5rzTRwx6vtZPiZTmPRiBuso8FqrMeFZQhrL4s5n4MU5Kbo36Tp2VTV1aCXNJirNaycbL4SbKmwUoZiwWEitiqYgB",
  "key43": "64WbMvQMEJAL2oWmMgLiHqFjJMxS7AtqVSEBVP6CmTRsswgJLLGkLj8BNCF1kXMysMgYgh7b3CxVo6b2Af2yj6Bp",
  "key44": "41TdKGmFh3SBk6zx2NzynEyELMxX67B5Ch5AtcH237yyn6vx5NhmCmwqeTWPo8nyFCZNQqufXnFcLP2mDkeSfDTq",
  "key45": "64LXARJJS5tPx8aw9sW8Ay6aFV5A8StWYEaGam1wKV9uc7RzDM7ZoAw5zYwTk3NTQG95RdfpL91sVQh62z5AxnuH",
  "key46": "37VvkKSL9Z7rKDPXaNedVZ5vkaRzHgVTHQy2MiyB8tLVF95ao2SF2J8wa8ge9oUuoGKjPWL3iYZS5qqMkapZqVHg",
  "key47": "3ZXtkrHdw767ctZLex2n3fKREPdiPGZqv8H1Kpe3GqJXLvsajZRzsD9kAWMnLxiQvfhgizPvBSrfJZuQwWiM8Yot"
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
