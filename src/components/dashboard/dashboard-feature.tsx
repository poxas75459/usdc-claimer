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
    "5tenvBUz29E5WGhgYo7AGuwgVbz8QwoPVQHZXNmQdqvUHrCwNQJbnBaeWHdM3HUXLDbmDUPQKRfZTRijqMEAQ6Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "282NQDJzxdWUA28mT6opNsPrSWoQKHUrdER4UZHg6tyoZvxwomte4scyHgTXkUBELNGYa2DR1tsiohQ1VRGQpuXX",
  "key1": "BmoQcfkSgdNNY6CzfUhRgKadNXvrummVSehN3JnQMmQFvr5EJws8KS4u9SPSqDzQRdowLZUFw1TH7Dk7sp7rmQN",
  "key2": "23WdKketq4ReEuTxaLfVT5xuqHZHofN3Ci6kV1s4SjGMhMfFLb7ysxhy3iHxeZcAez8ncb3fAUwCFc4dWCL2WKuo",
  "key3": "gUhiWktoDWMgbJUGt3DfdLgYZ188dWXUELSif1PdN2GHYQjGrTsAWCoCcnCkUchRuugsQXgnhV2EffB6Sksq3A2",
  "key4": "5mnZ8f1YcAn4Di35h6WWwzTZeXcD2VxrygAvrhwJXxEqmgVoVDik4jDb5XMidTx55M19f9XRqy733dKsRVeJzjuJ",
  "key5": "41YwaXDLXDw7GHKQDvM3LzNN8mB6RVw4EcBB4ZpHkCnyDGTuFYFQQGRJRakSm2JA5znMhDs7YegSqJkUFoDepNy7",
  "key6": "3ehLkdWjo2yxYhDVNoQmHg9fM6VvpHkFDF38B36ejxdg88zbzSmgQZmJ4C1t96QgeVPKbnhGf6CPQAGqkmHY6PVf",
  "key7": "5mMpYHwCuGriZB6spr4VDwSjnTVvzNv8EL5Eb7yp3BtrBjHQL25xjntt3GvDDvZoZARaEC9jryGiqB2mXhBZUNAD",
  "key8": "tMewwNr8LQmVVyguK3AJysqG3yTBPxCULDPRZjs4jcxgJFCriKVKVo2LFwNUDWbiMktuzJTo7bsvWT23kvegvSx",
  "key9": "3nHC88FedXLmHfWCmEHLsZRue8gJQPZjk5hneDTi3YPrEy2iB6AUoy6TzMDarU8WRdiimsQpZ4iYJUj5oW6Wa5y9",
  "key10": "5uhg4vKbQthQ8GBHf4kefhecY6bGQdCkh187dk8PfHQJmGQGiWHNb6jG2pZPSPeTLqcbXsqgxjdQ4agfnY3N5aeJ",
  "key11": "3rGWBRfVBW6m9wNfCmACwG5sqXB4rcJTM7kM2evfB9DKJqj4ugxtbPeidyiHmu8qdS1TTVgAq8oPymyDsphsE14h",
  "key12": "3Z5uJdvnpADDoC9Znmt1MVZwSL112Y9Dcijrccvw4TwNxYW1B3LtnALT6Wpzr2v2EyVtoqHGmxbwXxdC3YKmnEwx",
  "key13": "5FMvam2F8F3WWZFnD3yETXf93WgKMK7oosRWr6DFMtaauUKCJ33SdJQmFFAps3Ue3Ax4FMAcTQFzXBXEeJEWck6n",
  "key14": "4EEM38SNv31ZoRzZ4B9U6c6wo24AhVMx6RE2dAc2binCnZjJhHwyLCkban4fjEAS2spWeVa2YXboMPzWiNchLXEN",
  "key15": "4Cw1hpURVqoaaWKRuW3YQrrFbiXM6YHVBBRwQSZ4SEHGcSnzk3p9aiLUR1m19ftAoLrsV8dCQBDEbYJ6ABiBn8SZ",
  "key16": "F7cFzjY3Bp9aWNiHx1EtuyNHRWXgVyMzkHBD13FNki6B4L3aiKog4HoX9SigSnSkTxgZB7xL1xfyxUY4kELVYZ9",
  "key17": "ix7pMx5jVuLs9tti7AuFJK6KKUaVFcvRwaaJapPB6gVym13VN9icW7yvTcyvm5Nx57oBMDzFheYABjE2HTkkHpw",
  "key18": "4TRiWru3uNhSmhM6TEoBbN4cieiz2QAj6E2RXZiCnC9SXR2ZepoiHoM2gxzj5Qz22NcS4Rpf3grpc6FqwXLz6PeL",
  "key19": "4y7Dy7L2sroLpt86LrotyEtTZ2WoTczrmAz6m5SFRmJpKPaT3cUeEWANFF8NDTEEmn6DBnMHEM6FsUkkXq4Dxn7f",
  "key20": "kHsybzzg2fxT7dpchpS4CHMxppYFSesX63Yykw2nF5PPPxAVhNZtL9xCmzBDJJr8QQvbkryUnGWrdSZNaed2XFC",
  "key21": "keFKvPQiF4DdMKjN7Pet6ZBVSkWn7U58c6g1oNTAHkPZbJXPkk7sUiSQ31FoqimpNPEsQa5t1xtTcPphsFrqQiv",
  "key22": "vSgJvkXVhc7YE5XKaFASPvmMv6cbySQHdq932bbjjiwgwuMzaC4ACXBoaYhSBKsnA8RD3tQmjD9LDMKSxu61KMP",
  "key23": "iwURUf6AptUU4C2GwdM1Z3mFgfYK7aLzD7CxkPkWHVHaMvasA6PjPkFXfZb2SUfgDwKk8uCLz6fbiBWLnTjpgfW",
  "key24": "VfdRyyWzaS9j1JSodC5khvSJ14MXYeVgCHCpfhL9FTrDv8ysNYb8gddW2DAqiuTvvb2H6bBTMPvnULjfZTJghms",
  "key25": "a8xGAPN2pGDAV7Q4SmqHCj4bda4cPWgw5zhnvb6GZYStib4442goGajmKciiPiTnJCpuFiLQrN6sGkwS2Qho59U",
  "key26": "45eWLCvU7eep2dnwmvWAVHn4fEKsV3tuMfSHg48bsc5AukFJ96yTzG29azzvjJ1FLmnV3TtAQ9f8AKEVX7xno1qq",
  "key27": "4GMJdxTJZB2Hayx5W31cGUTfyeM7KAhiYVxmQQgJxovkH4iVucYcHLKN89SYACARMycDBGTEuxxU1TB7kyzycDJ2",
  "key28": "CENWyK7dK89UPnTWd5Cw9EKfP7Bv8G3QR1MwTBbVfbAfs8dWfRiYaEo5TmTQ6YQUUufQo89A8pA9MmHXsnSXk5S",
  "key29": "35VoAQkCertR9qcgXDYy8r1ABs7aZqcNxta3KFLi5qC2ZK6E9JjgsKqcb8ukF6rYFwfNNRaUstpoHRUZx4xY3cJD",
  "key30": "T2z8VCSXYXLuDi7d86xPjfr5DCkcZ5C2aRmpWZMj78WMRmDnBQR5ssx2D1C6fjK7Vg5tUTMmkuAGyiKFEYeEvM5",
  "key31": "4iFovkSaBumbrwWombYZtBWCJiyqoyk4oYn4dpPHDMUJef1mmGecNKCUp9zxumh4bkU8ytC9hhhkBbTDjpxkRWZK",
  "key32": "2Z35vMDbD1k4UqSe9hDf6Y8yR7GWrfHSJMcRakvknuDYJCyWARBbcG5UAPG2MZ1EvRFj3B9whHH2Gb7Xbjevfo6S",
  "key33": "3coRcwzGe4MMrERNxDgAtUaACXjRafC4xMrnhSMFkfmuEWMxY4ysu9q5hTDYDrp17BfRhFMELGHR6TV2q4RVBj6k",
  "key34": "2FujAdYJMsJnEsiDAeEbXwUKxjert4eLhEjKCcduAHzRXDMGt8TaoRLm8WwozdMcV2qnH2Hqwa7MXVf5Ub8EH4T3",
  "key35": "9yvJitKVC2oqnUbwJAQ19QKjorGGLdUa1TgvMhzMYvmYKH6gYyvaNvw5XJZ7uLyfLAQf9xotYWAZEkHHvGrh1yu",
  "key36": "iLRPcCELgskaPTRmE19NwrCgfwni9smDjHB2uhC5jMiAErtEApE8C9zEsLqfxFhqCcFZDrHhB2j6KUAfAiiDYJP",
  "key37": "3QvdU5SPPrcfKf8UkPEHtEe2mNUDVrUeLdoWABBGFKZPACs9kTS3nur7A7u7bvV6b56unDfyAjYrSCf5riA36krr",
  "key38": "4hGhPFKZnWGaoZFHW9oykjVzgJvQRbBvT6L9pGhuCu1hfKXJQMEJjaQ8rutAtd3o3fs5APs9gSrHUMdF6cQUYdNN",
  "key39": "HtLUF5Gw7xBKofHzDFi3wBYYPhMVHXZH4ztbW1h6uEhM6nsvX1n3GFcLQSV2SAePwJV9acai1aQtuYwQEAEEj6e",
  "key40": "jADYtCcawGmxDD2THBprTvTLtApaXJAnFc2cXdnXLvKnjDYdyK83jGYnpt7EHsMmdsxUc29mzgKHxdMFgsnCBwC"
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
