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
    "2kM1t22PffRh7SwFwb3H7G82kJaMUDoFfiWicndaGyzhxzcXf2hobcdh5cq2uxb1Nts87LnCYnZEjE9t9CgDXhDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mv2JUe5viWfZoMbc1vaN6uusZ3Haveu7gzT87jSsj6d6eWp9an2VUL3K2frjcNJ4Z2mHoWxpvXHG7eiaTjFCNjg",
  "key1": "2dTJtMisAxkpmj8fb3txW6sebnDMqrfd47YaPxjbJWb1cjohTsmvC6YUbinULVgJEqVxbh9VfuHDDG4x25GT1HQB",
  "key2": "2VBuZrJmq7gdRMaVM4Dg6J9eCRidLp77fM3FPDpm6igQBqJwsfaBaT1X8diaBrkkwG2MNF2xBaw2nSrHRhNEz8fW",
  "key3": "376SWT4HDA93SH5y282NhLGgMuHrcX3fnH6CxJWn3768xeiphc7idVVFfnrWs5mwsigo48TLBCuQZ1VSfB3aZQz8",
  "key4": "3HVDF4ZWARreP1LoGkk3WjhvtKMCDCxxW6ENoi8gUyrdYNDe1nHyGkH3uGCmjtS44hGCT8Rd4ieHLS5fU93KMsZv",
  "key5": "5jPSGdNuudQi6qU76r4AcrwT3QsGF1SeeccTWP57u2CKQzQp3ymuBCDw2zqjcnuAsFQqDFGcUq9axYuw4n7MKAvb",
  "key6": "4LRGsjkbyZKaf3h3s6vM6jsAu82w7n5XiaszSYCSp8uW49R1WQ4uyGXsPWChCkmgUNKGYd6JY68SKxEDj6BTcyda",
  "key7": "5vk8FiyYHEdG6ZQnQFYrdJAK23Xwv99rC5figSUZqvRqu1UPw4XX52AxKHvCyXUD4MTWUoxgwJ8gXE2gvdbec5dp",
  "key8": "2KcGP4R1c9QVGPneZrtzWooyzykTiLpTmqHpVYoLbGQYSreZmoNDeQejdyANMk9Rh1sPM33M1rZiHXQicvdotvEk",
  "key9": "3djHNArLwChRnL8GWoVpL2ExY7bE3UGfTdoX3wUq9LU4A3EGJn3C5byuDrZvELbBU15J17CefjCEdgusS7cGrsmU",
  "key10": "Az6BqhknGbPSdV1QqgCcPrF37AKkfbNAy87CZJFzqbAAVZzxRSCZ3wNAxYURhG1FVGYxaky7hVkKvPtn2DY69EU",
  "key11": "54Dz56GCErjkoBoB53RfZw3gJLyGnXXuKPsTh4e1XpiYaRAwZ6JrzNXnDysTsiVJDdpiBQxsT5VhwXoVpgzS1USk",
  "key12": "3e1pdA6saYFTV9CsyrZqHDbukQDGhJ3sjB8rEYke6UjL13XM95mGjtGp2RSMrUy2ic5zsGkBGjc7z97gXZsgqFqL",
  "key13": "32tzyxLRJeWbMNg1J4dskMoy8vDog3tsQ3KgNvbcNZtq96oCaw6vU5wgRja1B8HiCdxmYZL7HqrWgiQY9pRqknvn",
  "key14": "4hz9ifdD4vCRr8XcVgv2A3tNxUtDSAntURbd1hs1qpWCrhByVnC2mH5NTPpfNR8dSMbxCbp4JwDExZtNFPYhdQdK",
  "key15": "48J3hrQqcME9c22A9nZwMAfHqsogZ3n1vopjQbJQ3sUD71vHMVGji98ngR2bg1XWFARvo64Fk5Ed8A1Umiu4Xz2y",
  "key16": "5QUCijyTNuQcRvU6Un4q9b6i2corqmA4D7gahCgmTVxA8599pj3cz3c6NJVBL4Ruo3BwPwpDzoxoq9jWyTkqkVxk",
  "key17": "2ZmjxxwSACaqjGyHxr1DYSPhCAGJEm4eE7hfy7TiaQqqVn8aGf1LdrA85TYwHR1Q1WTFdz49fV4ZvDcnLSi3aqPv",
  "key18": "5nL5rqE2hMHSnBi2KsWwGYZy49nSgsPuZBRJYkHStUScnj4A3UfCXeVfMUomosDxe6GF4XXqWNWBS4RJRnDstV3W",
  "key19": "4UvxFMBGuoTEuPZdiS8E62xj1gZSySxmML8GvRXZkz3MzsgHojTqSXRa4nJ6ZLZcnW3ggN7zzMpktvWcGSZajCC3",
  "key20": "4sr5Hw76rPHrQ73CTsQHx7oyYnqR7umaVs7SjuUp9ubYhhTnGdBCj1495gPcjWnhwpNCzSohxy7HY9Nb2SnKESHT",
  "key21": "5b8DWwCyhyJ8dcAWNaQC7ijhwG9uuZ5uqxMNSM2hKqp21dyAVmyY4tg3bMW3sFBxFWqJqmrP6zqct3TZ6z99RwL4",
  "key22": "2WcFVAffjsUVWdyoaTVUvGYhgF7aYoUR5mEpX4NKbPxPh8wtRvdLTo6XzQJYXfqvzY12z3yLTrs4ihqcPCqtLu2e",
  "key23": "5UHDhewRh6P59k73uofNXfB8zfyvsFLrCDFGwuWK8gc9DkxSPrDUFjSsa5TnD8Sn76h4kqpSsXf8PvjpoPYbSuoo",
  "key24": "4XfYe9gRJ5rXbSj9dtyK8NDEWUf8Yb2rSEv2iwGJQaUbRiPNdmegurpQa9vPnF25rUpSTAJkqon1uXPNLpUdaLBa",
  "key25": "42xVEcPFQQ8TXfH6osUVqcNxZwd8mkgBxs2q5sUEswJP2mTK5DRCAWwCjHQLshU1fyrYE9zn2gFgK2Y7soX3ohws",
  "key26": "2BYjw3EUDGstof65odxrsCVBFmzNfFMZkJZ5z5k4aWf3avEJhxR6v8wXPK5mDgJyddVEL8b7YLBwGCQ58Z68DmfP",
  "key27": "uN7JsAaHWaGwXC7oJweJm5qf7n35mDp1p9vT1bo37UeUMbzq5UA2xg5Xh3oL9YjYwyJKubhbHvdXTpiaDw2i2DX",
  "key28": "2NCGEx8o7CdAA3Z74yv8UwJCUz2dDuMkRg2pe3t9a4sGqUtpGJ4km1KjSuP88UVWQUKLmGTaKQqDnJtxwhQoHHcf",
  "key29": "3VVdJmmygSSFSkRWkJMGpLkQswqExkezmxjJamKUHSnyRxfNG3aXPntmV6p5qwPCuBujmShv2wKnGhbWcTxwrzPk",
  "key30": "251XqXgo6rSLHwmd8QSQy1TmqvZw4RbLweguyJoHMZLAtv9BficS4BmJAPoRvSnoKNFhc6JaAmYixGYCc59KWCio",
  "key31": "2vkpBVxZ1DoJ91iDC3r68E14nnkmn3gPeAxa7pgYvU8YdALuBTsuKofyyBVQGe3yAApqNgbhZEYb3RpRYfPC2wEQ",
  "key32": "2q3nnuVU8xpyeu81VjqFFzLPaaxBS3EsbcjdtF3BSv2zJkntJgXK5G3WoTpaSejqVJeULe2wmq7k9KpZynwSMZXC"
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
