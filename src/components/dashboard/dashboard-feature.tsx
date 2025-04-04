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
    "5XKFWKycXPvQcckUpYFS6MMTGGagjkEd2iJQC5U2T4rP9o2fCwUHAjACmdee4GHZJKPRYxqKZfP2ZSEjWyaCnw4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJ2SEVb5oKxmB78RDykxGHGEi73tFWA8y4NsknTkUdemgHitmeRGkQ2ica5psc9WiTQrFxEjjWbJANutU5FccGe",
  "key1": "3NX2z6pHXwBfTafzGsRBHyyFTat6vxcb3Eh6MmMBevZXbYypkdLFYKZog21UjpNoFZmnjGZvMCNvb6Tyg63Pqcmo",
  "key2": "2Rv9vpeC1yhd9zkkPYWzzLLHd32ECnP9vUG58aZy2Je6zxXtJJ75kwpj7avViC7ogwDkaXMhM6vhZdg94e9HxDHR",
  "key3": "2UgHBdVsPaKpLrY9hP5tJzQWvbGUxCfNhNtkbLeymDcwiNjT5euBU7mKMW18yrPtuywLWz6fgpaKg5PMRvtEjWt1",
  "key4": "3izXCrZtxPcHeeFvPpeDFCjWvt4GvBFA9YtWMhgtC1Wb2Njj3K8jQeeohCMr17Kx4c4NpLvAQb28rwrNWQNg5mAc",
  "key5": "2V9F3HoPb33LELbFi7HVf3JYWRdKhsdRXoNRhyEfdn8734YqcrEp3uV1vNUw3qx2wDFQEiMD2Sb8mQJzmYA67nvp",
  "key6": "2bEhs3AJvgjnuxtaL3o9giQ8imKcY71epSYgEt1FsxZDEDn5nkbiA9DA3nkvA8yQs2wBCY1X3WaGJ8WVF7bxoFSf",
  "key7": "5SoXEUDq1AJqYDiaoiHidbRX71tquv1YW3rStn1Uixv47JsNGJj5GMvSJ5FBonoKz7FUCaGksmY6yjJL5Pvmrxye",
  "key8": "5NoPhzdDtTnRkr8Ako4w2FKhfVah5A9hGdpF8rGQoqDM3Lqn4aYUNGeaQZJDzHpxogSqX2YTnPGed8WmoudNC8Lk",
  "key9": "33rUsPkFLTP8DYjH33o1W8zv2Vn2JiuibJ8Fw5o3VwNbszq156kCy2CTQL3kj6J78CZC3AgJoxY2MGN8XQc6yyRc",
  "key10": "4vMu3vSSmD88sR1NAoUWi9mDFBWf5U1sDxPyfbDQhGafxxnk9UXJsXy65iQE1W4SEEeiyoFDhvnDCE48aP7yq5DB",
  "key11": "3PnCiPLyhPkKuMxqXmetibzN57wL34gZpxTbBBxxDsnWi4XxzZ9c4KFnJyWTdpvtkYts2NnAjax5zMVuaeg2sT8J",
  "key12": "Rr2hnAE7dqtKvQL56nUQ1pcWoe74fPjHzK7c216Bhvgpc19W9ydgc2FoNU8V11srDS8NJiadeWeMcCbf9hSvGFW",
  "key13": "5rgeTME5RRwf2R1822N3paQEjeDmtcNrHWmXBjWZhMRysXvw1gRP7meuKJLnDcQfWni8VjCXdSTfidnrVjhJryFo",
  "key14": "5cPkUGDpBUoYsMtUQCepMT3dWWwqAG1zYtb1gjwDsXh5GRJDEFJQKbi1Hz2QuHQJtD6CFFigDGGtMAndeaJ9jqCS",
  "key15": "2ANf1UCTajYHK4qJfJz45PSZoimw9rFeSKoExZdiENsSRXMampBmAHCJcZSqv1Qs9scnKrvjKXAVCWBcVS3FkRAA",
  "key16": "319jvMKyTCYqpCZor27bqeHkhMB8AwnXYc24WrFkXgD2Emk4geQ7LYHaMyk7YuFEwaE36trW9rBPqhfadVJcxRpT",
  "key17": "48EW2sUD24fhNQEgB46wnCnVVB4q7XqL1tKXdtxn2DRokSGk6Cq98eFhcgkAXH7RXjLencJkQpX5eu3mN1oKwRvW",
  "key18": "2CUfMPw6kNpqNr9mDDD92GWgBpdFzXfZyirTHU5DYfUQGp6CDkXaREhsqFq9pspJQgZNHFX87cWveAZYU3DZ4Uk4",
  "key19": "3A1FFX2Au9uB9oa64UrvpsQEwksuaf2LHRNRBWuEvjh3MLTEfiYDQCDbh3bGcoUhE4xkLrbZUQGktaTMocqYPRk7",
  "key20": "4y6uFLzj1TwGeBXBC1njEcnUbVjAGxZwDizvgSYczo1aL7vxG1P8PGdNLfRjD58r6svmWbYktBTifc1HWnPvTg7a",
  "key21": "2UqQU7kyyEg96Jub3RTUA8BVmx1soji481VUTq4PQrA8HW7VTdAJLrWDVxUS1E16EgY9BAv8eEeLoR34otn71tWo",
  "key22": "5dRkT1XZNtN2NAeTz1n5QpPxAikW1KxdgpdTxRtRibxJnCLZr6Qb1VqzTZYxUhWziCkjX6HfTbAV3pEr49jBphKd",
  "key23": "5qW4fzm3p6aYTXLB4mvppsbEyHfy7ZLREaFG1WVMsAmRGuz2YvKMANsxnRAEshQxPCkUpbcinqzEb7Mh6qXSVnAc",
  "key24": "3cLPmgNstxrTZYC75apTifkohBviczigmH19TYjXGvB2o62dMfZE57uuVHLBx3aRh6wfB6fa9nQpTEF2BR1YTpfa",
  "key25": "2XC7fNpov1KR5yxPdgPuxNjoXMcEkpTq8frwjNkqDsJ33YL3WAe7R5B822WbFmNKxkMPJz1P4YBUV7jBFEj669FB",
  "key26": "3c5GP9FWEzUKDSS1cQkbjKVayZmSPzQwp16M62dFqrFsz1X5tk3m5yt2FL2vuhYaQneGbBpWmnWc2ZHiQRnNm34M",
  "key27": "3qZEMFaR4f4DEcVRaMYciq2H8MJLM6B2PvArgeEuaw5Mz64kuxVV2VNZpJChZ8MUA81GnNn5fQcNN24gV1bj1kdy",
  "key28": "5xjbQ81oFpCprUhGxVJKpioCTLUjRAyhQkRUwwpMHibT1JVFeUN5LsLNotZTw38rMQQskWYc6fxK7nwY2KhWgQ3J",
  "key29": "5UV9gN9vmy5S9QveMsrDcWxoL6QPLiMru2J9taoFWivh3N13X9FMLiVcbigf2kPDvzfcnUAMeJL2oumfMgpLCxDz",
  "key30": "Jrm4Z7pAQxXt7wwnudzSjrGy1c1GSyV4pTzCgm7cDdg8sLWRkQgzLJNMmMh1AZtg4CqyWp3Sfmoec38GegpoCFK",
  "key31": "65nGyBNPgdPwph3Nk9tuG28HiKChppp8mqtZhQVtxA9WSw2PiP34gekiYFrab2A7RSRhxH2Sz2JgZTgR83PeVBCL",
  "key32": "3tgf2nWFhjVzBVNHNrDgV6YijLAKfPcsqWFGxEx3keaAmPGBGZu2kc12CStVbHsX6peErjamZBxxRp82k3sTM5yp",
  "key33": "4KWuiJxL5GsBheT7t6u3cZZNdkYTTEq1XyvVXhcPgnC77rG4PnBjyJWxTDLz5oQJzSPMY1mS3mH6baNwNEnt8crN",
  "key34": "5ogA4MnLYpu1sFL4UVZMqGSPB2BXonW29r9vwXfAAVZaxNFmR5m4ETBu9XdJbxLdGsaQMDYVnXqh5E62GYVHhUDx"
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
