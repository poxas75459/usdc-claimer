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
    "4q3XCBLdNfSwuiT8HDJTu794UniJtrnncSxw6eaggeYG8Y8T2BT76mdc4rN9RAyS1bX9kC28Lebx51qTV2yHVANK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbFSwpmYiCdwJRTPRMRRFGAzDLkZDWQHXfXGVu6Nb6hBxgt5R3tBhsq14kmHj7E9i9AenPdrR7QJRjdvo1snW2G",
  "key1": "3fZBgKmAUqV7aveDJwYtHVEQBBqN8RvbRG2Lus4Gb6iDjsocBrXSbtihTokZAdWMQWVm9zArGrcxVe15CQEaGb5K",
  "key2": "27YtgynPhqAcHadgy9SxomzEiR82s8Y2LqfaZ8iKxaJRPYXBFQaSQ7EYJ5PSMMQUTSbqM6zhAwb3Mpup8ziSSXM3",
  "key3": "26J5JQC7nbGVaFZPcev7nWcp5ZbdmvHcqgTmukpUDt9Coz4wghuJpGjyTVd4ZqHGuUrC645nQ3CERmYYxaa8QyrW",
  "key4": "oZbSs1dQ1YEBwFeJrP8EiSAg8eAcdVffbd95UjkV7ms58CkFUbuGwJP2Gneh5wxKP8qzbJcBtV7Ui2pbUhsLq7m",
  "key5": "3ZipHUf2sh7PVBocfQh8bg15fQSxDGcBe6kbynW4wJW9Gym1yvLUZy8y29M3oigTfVGasTr9yfmmYL2uEdPfcaiz",
  "key6": "54Mof1hDTYcvVK2CbyCQZJGxjfWcuumGsEPKQBEwdnPioWtjFCx3dEafTVV8WFYWCGrHa57fMyAtVNSCGSo12vTf",
  "key7": "3zMYkN3W5FETv2JpmeX8ecJ29e6LnQ1qAQyEZ2nZWkcR1kNkW2pWahoUWUq3eP8D7ndH1sWLW2THcLkwKrThDKRL",
  "key8": "2qVmd78wy3nqEHe7fQwtt5QFCWJAAd7e2RcRzgXETrQHANkm2XpugEu1QumtNShkGeNJhvijc6oiMDcEMBRg6diu",
  "key9": "5AfJhn6dVJdN91nyWqXSvcyQvebddthqQLFZmSj6qP3hVduTr847KMnQ5zdL7SH17RXTi256kgfpLtPSPvA4TNhm",
  "key10": "2wcjG8gqfF8kRnSrYakMvN4rNpwewH7S6Qn4dUNive8jXQUHAArMvtb1uqeJQq1hPPbdGk4Tf52mjYGNaaq7VMPN",
  "key11": "38LdEkE7CFeVmLR4gn5QoZhJRniKivUXaUmBcdsXHpGqs2WXQBKeTURmSPFyA11tprrjipjapi6TByg4wK4jjyCE",
  "key12": "3hqn4j38D2vSAKgvyKpfr7rdwrFJpGoCYMdBYeoiiCMKPw5XR5UQu9NhR4TwuWYTnRzEQQbmDTFLDEs4fTQkAuKJ",
  "key13": "3vNZNTmqNDMLehHS9BoQTh85YtbHBE36CFhbG3rWVGNfZcqwfPcTKEDTLtV4SyeAxhZJgDy3EckgY3fzxUs2Y4ck",
  "key14": "2UHk2YQjUstcnZ1ojq1jrVVAJugGoPgEo12fTiqDheyQ15iCEea4Uj5AqkyMFMmrdccKbMGc5WpRtKRjHmDaVqS9",
  "key15": "gWALhi51414XdptH74i1ZKkabfdf4iJrvbazLkixfhtbCbDJ4gTSEPPCegywctNxMLpZuzpUHAVJgLuD62wHiiT",
  "key16": "4KGoRTPy7cz7W3mvN263SgjTKPn7aY4HirQtRbE2HkZhvwjw8wD8Zf3NFcTyezZ6htWpghae82dFZFJF9KDVCTXt",
  "key17": "3RGnBGRkfLymZ8P7MEUtsXPcMVFaoVactDx8MyMCvsBv85mYxJnJnUjX9WdjvNWkgWTREkXkqcW6BhodnLByUNbs",
  "key18": "3FKAgKZqJ24nD3SUtkqDsxFVXB2M1rBjFe1hk7sJsauzJRP43JAtS7CgmG76nc6eZqc2UaGre47fX7fagUxuCi4W",
  "key19": "5eq4CYnohDS4gGQqYEaV772Z5XFK2KirWBJWH2izpcStqoMmK9ZPe7VvmRtk7bLLJ4AdRjKFWsddBchbhNjftC5B",
  "key20": "5g3DowfPjF6BVKwxsXZ4rQGexgLxsQJZsRwT9adXX34HP1i3nRJSb2asQPhANjNNcM3qaSkZ3BGdZhLyE1w2PAgZ",
  "key21": "4nrYmGArJrhkQEmox4a4RL8vo4MaFT8AqcMozXWE7pHudo5bVkjsTp7HvFqrN56JEerbxnDzf6AeQC7WKRrAJzrg",
  "key22": "5FdCdLytxPTkouWkkFe35WAeBm8CJErygeiadnrNicygZoKE17PdqXVv6bRfcGiL1RQjauX8rn2ZaTtuLgwryve8",
  "key23": "3UuxL8weY7F9smMdUdfpYcWkPmK4LuCToA2UCUMqHTs4QJeMm7d4YrhSPCwbKgpkG5Qfge5XFtbpXs94PBkB64XR",
  "key24": "3RjZMGwAXnVvyAe4ubrYXAomxjdq9huAGvK4GkrFKH2cLYHekGcb3zZ8HsN8G4SZE8Y1jnu7dmmjF4tT668vYbZ4",
  "key25": "4jYAhjwBZbbjTKTEByEFVHdDo19NwfLTWcVjyETy2QmRtCpGrEEYTBa5NXoYWQjqZ1uJcwwodi47VzfVRKnj7zJR",
  "key26": "45zumW7fyVXNrWcG4ARTob9hrj9dbtueh8ghNSzj5E6CBfeuk9DHLRpcgoBgc8kWyxt31LNCMM92EF9Dg11dx8LM",
  "key27": "Ju2Ga9MD2YgyKB8bWLdHaer4BeibQM9FCgg69QXA7kHXepgKNuT1TDG7FDc5cEH78jSk4frM9nu1gmdfa13ERt1",
  "key28": "2gUJQG8SXkFoBRtS5mVaEr2uSPKtcVpmrVKJpqm2SZAvo8SGGXD8tALF9hph8ZaLqJGnYQjXwb2GxMUjtEJmAeNR",
  "key29": "2YEvot4CgsJanb6QhMPKn5dShTEs4b9FxCn8Ep2ChXcbNm7SrYriejjNeBRPFeuu4Ed4ug3J965ceg2XaM6kJ3vx",
  "key30": "3TkFi53qm3fArnpdsEzxDBGirnVXC8HDcp6BzLxVdLt7PpNMJ2vhN3hEJSaa16wKn1oP4kZBpjZZeFsiQj8ipi7N",
  "key31": "3AY8sUMmPJt6f4GXSEGaSrANFcc1FJgBq9QJfmcYVdP7cFuLvCTrwTkJQKjgqxrqg63odgEZM43x939QU6j5f61G",
  "key32": "3eyx4qMhXuo2WRnNYcaHHUqCDfVdwKbgDVExDQg7j679LCn8rLuum9Cjm7EG72LRTk6HrfoJiEV3dW2oDXXL7BvZ",
  "key33": "57VTB6GJAL5XbPPn4yjmBJCu1DVquPXTi2PLxgBJt9h46ck9zCAHPSQSq4dePunqjuHF7g7bhdLf5mFzkN8Ar4ch",
  "key34": "4ZPbNPNSnwNT4ss3S4NoTigEdrHxzcJSt7q3xBoyBcQHbNJroiKDQ1TuhTFZ3rhSDU3DNGLsFEXwjP6JYDTG8FBi",
  "key35": "pMw7sHMyEGojbx2SRpd9T1hGPqSqrGVcz7qMdKjnWuACZ1qtTjBFxBjhgHVPuiJh2zTeKn3aweNupiCafdWCSCa",
  "key36": "3HVcHN6V1haqTuRPBJfjffHMo9Jj8K1fysZyNCnMiDFe4q9cV13ZekDfj8wNPTYx9NM8u4hmMZNjAkEBJLBAHntq",
  "key37": "3fVKZWNA9UpW4i4PmwuaDvoCZEYkAQ3P5NSJqzamx83TWwYteY3zWkQQogTaYXnBaGs1tU9nuz4zeC14X1AET5Pd",
  "key38": "2YLeqhHHAi5kpQhM9mmnpAe4XbLtunM5vcTSPHApo58dtQ4DR775q9HZRwgfDT8mV1TWDXLC93xXuxduMHGiSPtM",
  "key39": "2TrcpqAT4Xa3vbmW4oxMTJJvZLP5TmefQgYCjeSxz5gpY8PmadhuirTuRQ5z64HMb1a5HmmvaLXwquAS4R9TGe1j",
  "key40": "4GA79yiV7MHeK32r9EhZ5VUrK3qYzfpcViMqWC7ESFnA1kot1jQKAazMJmiV7A9xqtrjKpqFQ6cXmYadCMnFwEEC",
  "key41": "61kQDAkfm3ALdG87kzCE8ZKFDkT86fdkyLRFLt3FxHPszSM3QzgZyXV9ZPUwhqfD4nv3fLB4LKaNTWGasjbm6LKm",
  "key42": "5MJfuLS3uVnvTk4gdrqhAY6ZSM995WRunP3HAsSTzauA9heNpsTh2VNNeRgFVTSo7xxKpbEpHQtrNXzwX2Ec3B8C",
  "key43": "2CnPh3jgZFDu9GXBaLecihKy2nvUzzhQ9KELh6dVbCbUEsat4Z9pc5daPBno7NuJqeYCLbW1PDcaZ8RRVBWB8ib9",
  "key44": "22LmTrzxQstiRkukZVTpMEfwW1x61Qdx2pnzDKkUvWqhKX3EyRqMePh3pGpDwxzkG8kLY3BKSWQ5nVA9WMEEk1gG"
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
