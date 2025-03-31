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
    "cHxLUFU7rWYHS5ShjauGiQyJAUuqc99t3QDD3qRehX55FCtYa4BxR3P6oozp1v7vYp4pu8Avotr97ZPtHRfkGvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCD5HN11VYAXpb2gc4MQmGYGHcw5uH1qu1iJudZ1vyannCcFdih2ikwEFAQg23qX86WqRVj43Lg8kCqc97Hh5cF",
  "key1": "2aidjcc2gUrqGibfUbVxa4LF8nwkxeJhzZtQ3aAjn7aYBU7tQW3gcCEJBzRsfaVjcdEZJaZ5vVvuSWrSFtoioLjp",
  "key2": "3W7k8TwKf7YzGdSBhhhhtxijmV8rS1dkyfQH4cpFSFU8A4hTCmgETsWLpahmKScZgKbiNAG1svuK61qcmzWLLmKP",
  "key3": "2chxHqCSsyzsJbSrM9MVHk26N2MwGio3BjThkwPLRzFUjDmpnXCMSLhEjMSavFCQp7zjF3CNVyheJvgfABngQGi9",
  "key4": "2mQQCfE4qAo7FnvDCV6nKntb1jpykxkWkhoSa26R9DYGdR4TYPuq9hk78bEDXQocvUb2DhF4gwKT4Kn8UrXUyvmC",
  "key5": "4REfsTWdcdTGVSFx2jVWcBa5HZxAYDw4aUcPo45FWoL9gC398bZfdwVrePSX3wtjNHxBJ3pyoqrdfQcDW1ps6QSh",
  "key6": "2Z21MXx15MvrGcY2ZbVK9Fks2rGQkaXz6deziiMqJEsL7PBWShuVZo1Ai7AmD846Xv4GAfjwaB4sDdVKFFgpKXkT",
  "key7": "G8xrbGaU4TyuEQTWkBm5oynAZ5dU5fMgwFW9MwfBvnfwxVLkvS3ywxnQnXi8at24vPdeYqYDifvsMDKyK7G3wDJ",
  "key8": "3XsFGHjhne2c6qNGhyzQGGXbVhtmsKh8fUDrWy7eC2AtZznjM5KLSSR1eHk3NzKN5NS9jRLYsVmQPL4PczXRXyUX",
  "key9": "2wPjt1EzA2gB1mye4oq54zNJ2JPNUh8DG9fsyqgJzvcNZaYNm1YQqzQQbD54KsrSyrRQox72eQeAiqXh24v44ojX",
  "key10": "xG8S1T2oHzx818oATgDhnPapoG96raNRz8sXbWd3WL21gJ7vdu3dCUhfARifxcAbJSUBD3tuyNGhyNthnQABGTw",
  "key11": "hFpb2XGa6uMMqUcPtG4LSjZHje48y3MtBDhx2pqBf7KvxR3vbabDbcfSG9nHHQnDiY3uA4Tt1gmMrCbA77EmgeT",
  "key12": "3nk56T9ky6Rb5y5dbvUSbY1XthcaEfPHer3qTFMaeSVAegFBzUTh522yTBBW3aQbCm375MWb6bz3uL54FCC8ZEtr",
  "key13": "522N7oVWtjHRP4cM9WKkjD1aAGez3BHjUYgNQ6BUTH9XpNg2bdFAGhXPoVAKfho8cTZinoTARa8gDSnxPKyjYnhJ",
  "key14": "3g3kEj5oKydFy7qKm3xEcL5ZBJaqPTzfjrqz4qyFdc6mrwGdva1u5rv2kV1RH7ubmVGk1Zb2RaeHTzksdtSKghDb",
  "key15": "5GEABosgAtWAX9H2uW6JevLqPenwGCB3vvH4qQbu1oft9Zn9TgiU3bcbCsHStgp4Q7VfG79aoyNrjiRaZCmxYikS",
  "key16": "TJazZu9ZhGNcN8RuU3d5jSKp6CobzGgdD6M12ezJzpmuBbp7PwPQgbXB4AqfXW4CPDbkfQU1EewYwYcWqffUpHK",
  "key17": "4BRDC2ojDcaTuPKB9X457GcumFrRsNcooyXcpki8Zod4yxiUh4AuTJ3oshA7U7tDCV984CAiVqBAUD9v4iNhRBSe",
  "key18": "2ANhwMyxm38CaZkWKjaRcNQs3AfBuGaKKFybAKndHNuhDkvvCu4gsRWDx7P3hKmERSPHDRTLdsH4mvASyrKL87wY",
  "key19": "YePR3wdGTgi9XgjTFgS3tkt7NXXRqqRmsPZcmHcVgzv1vmuEDXSsHSAhtKuj7ekUb66774Uomu3oWiJurdi2FYE",
  "key20": "3E169NR61bF5jh7sqvsAV2MLg1nfMGaijTw39yyimoRpSyHUE1uauqKU8Tfmp9Jfb9ydg9bAdtE1TZaLVuAM46E7",
  "key21": "38djZ9ZFs2gJ3msygRHJhNJTNY3K35PZowSyswaAGRoK2yTLMPpDUWqqXkz9jLvYtzVXHiYJCxQ4ogHn57piGJDE",
  "key22": "5hW5MAH8TT3fge7Uq14mdnGV9Ank9nMPmRMSrfxhE8A55mNbiCDZXJZvxC5SbfDe9SMaJNWaTg2TgxTaFTuC1nM3",
  "key23": "4ZCzcFKNaCjxHDNJkNUubLPtnVfxJ8vdFxUDgBEPzxsba3YxVqJj1GQyL7zY97sZaToDXMpacUBgkkV8iKyAfdYP",
  "key24": "5xQ12YRoPDaF7vx3zTZUZf6WGXL6q3HNNafKUmHUE3dq6bn6Jge5BTb444dybSPcNZVKc9SHJLX4G2i6e7ac7j1y",
  "key25": "5DcAFpgRJeLaYfUg2kFMb9W4JYyBCPFF88BUw9dZ61KzhtxSojm8fmjKQJ8bqjL5HMmsRfB3jtCYHc5xNjD9uTBe",
  "key26": "ZZWg4PNwzbZ6WTMYxnthLZAwLbL4o1d3G2qs9GUchuefdHDtJhdYMirC1jiXpxNh4n8Y2qVxkC7J25kAqSC4wph",
  "key27": "5MBtdW6saYiEpJ6X3AWU5VjMhsDJq54X3mkr4NoeWzbjcArPciBfXSj5KQsoqaCSJ1XBuo7hyzPaHsKBqEwC9nPD",
  "key28": "51AYUZ7Y1dBYU8aKemAaLBKjyKZimkL56iXHJM1xeWPVpTbazgmyTz6o2dzCydhWaM2UYfMMJofJJrkR8cpxLtSh",
  "key29": "5pnxsZQcTftuFoDgCCUzVb3wZfTT3eJC4PUj3zEFv69yjoqjRceS2EpPjRegGAow89DndXwaEHEYYzNySJZF59aE",
  "key30": "jTghKcPY7BkpR9rgFZvSUCmHaSPVMgHiVjknshHVXKY2W7TPjkmJNfa2oQsKHTDsNiC432aUVNHQAVyXziLFwUw",
  "key31": "UoLzTpcV1euHBoV9SjJ7GqaLcALzQckCowxYnooCEWsnyEnUnkhrL87hH6qQRuLAXZBE3peDBVdJQyNp6SHBLY1",
  "key32": "2NBjXTK6uz3zyeRAn2C7ktahjvT5tkJw4TQCWtKLhaSEdNosW79JCSiMGo6JkswsCPricnh1z6xp7BQgSvc4TZ1b",
  "key33": "ynGSn5TA2rCNx966s7PNRt8JU8ZvzGimajwH8Z6fXMURMpRHHiSa51qW1XquH3yyvJQSNkfEbYXrYYmENvHXEat",
  "key34": "NK2TWN5MEdmoQtECrLtVF24TdcHXiEWXFcLdVjvyfT8J5pnDMAv3vsmdeZrDLueVxMWkQCt7ub9aasGVDjnGb3H",
  "key35": "jGbzHg4j2WeBi1TZwqYkfR1u6TdLsMHo7QHmfzjZkos4TNAZDsPDzkqbNHGD7D3eSgJSW17iK7QpCYpLhHbvo3k",
  "key36": "3JhNgWcowoQfmBJrfuXS9qDzpTtgcju64PAVYKEhuEjktExiMQvDj2rj4K56nC1B7kdb1SSh9zfgp5SNoyfMN2M8",
  "key37": "5UbL5XeBZXjnpSiaWBJkoKsurAJ9eBiDAssAnqrNzQyv73QDh2TV15m5Nv6W1bkpeCBBLxLbazaif7HBQ3E9t6Xk"
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
