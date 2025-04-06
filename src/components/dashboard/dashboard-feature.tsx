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
    "3p6GhwvTs5rQir3vGMmbmeT4wgrTGtqbVVnJQ3x3aG2zmXQV9j9kDgjQCjFr9FMTxokJddPanhfiGcyRUAjaUhM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHz65sm6Bh31qE5gnvMyHEdcVTkKRgYqLpUDEr7fk5BYeS2NRNCHqewvoTVArTJ8isG2bCrur6bN7CaN8fGeCkw",
  "key1": "2KGHiskbfphaFw3CxUp7Zhyv2uPg5z4NsYZefS2rBmECDRymKzA1q3omgHGxKwJ9c1WErXaJDnPtKN9hfE9r3uk7",
  "key2": "8yJPu24xgewoDJgHst47EKRVDPfHGKDg8GwXTTdT9CJWRfVULvb51DDRNYrdL8Qqax9nTmyUcZvmAW8zNyABKa9",
  "key3": "2d5wtBoH6i1aQsh9ebtrVpquMJMGHyNSJBoGNNMzpJHWJdEQNYhb9EkwRcB5TS64A4S6JxBpXRZrf9j98uZn5MAf",
  "key4": "2URrZitH3LTYB7DTR3jF9nmMpuiwSUe66G6G5zqV82EiexHAV6q5TFbaCQZvs2a7ER19iE5up8VpXNBDUsnVmxT1",
  "key5": "4bxNjKwNZP8DmZWKykYcD1E8LJTB4bQkokBfteUHYAdj2WUpeexyx3qwxtkeNhnHmNExjHSYpdSJU6Jc6CgGhrqC",
  "key6": "4fhV4B6Ni5jPVn5VzET413idVrmvM2JeFDcFLFc7cppB2KPNke4ChUJ8SKJiTD5bUkzpVvUdojf6Qg1GGsbwqMwC",
  "key7": "2dj97C7S9tyZ52mt2cVNBMt796fmoRsh2Sg56GUHXJr6fFyoEtbe6nHGaUwXu342nVs9sySuwoSbYZcULiv9JsSi",
  "key8": "5UhEpUF3hYFFjJbYGJagjGubVDp39HFg6VDDPcvfESK9i1naKjw3cARjJLVtbSKPgPjJGMHScXbttdUqVXHqqXmz",
  "key9": "4jkZLhQMsrUSqxJTyMqZnd587M4b4YMUuq1CPPyrnDuudmtmkDatVNZ7nyVU48LrPftxJfYBBfstam9Gaq8mHXWT",
  "key10": "4A9xvqXfreQ882WqGkJQPh4DeR1zCKE85udPP71o7Z9yCAL5jRPVkHAWL5LEPP8uAF3w1sfYefVJWH7x7gT5P3VE",
  "key11": "3hviGAYsLNv1vYDKwfcZF44YKoAfrfCR3kg2u8rm2dXR7r4JHasKRWWQL2gxgtuUQnXScQhpFJ9wZ2yvbsHpmPt1",
  "key12": "49tXAK5cDfDcGwnHPHdjeP9a38nQVojomsU2k4rf6hu1ARoiAH9kYLms1zApZxK1s1wK8r25Bx89VWfdZfG34sTL",
  "key13": "3iLvaWoQEnsAzZGMBHTamkp2e8kukTDojePqrxWfuh1HZL56thatQoicqRCpWqu4LMa2Y3SD4tNyBuWLP1Ae3n7t",
  "key14": "3hqE1LP55Tz4PfEbu7acj5GyZpecQFU5aqLf6ctKcBWdtFHVsWEtvrqzofERuw8rGiwFAj5uWGzR7eVtvFdXCCjm",
  "key15": "43JDQCmu8BT1yTMpbG6UZ1xwajsLrJyininFb6rz5CSGR7LjaFeGx4zhesmFott1hLNkh7rhL8PEUdNWWSjKSRNf",
  "key16": "5LTw1edAta9YTxEcbEoq2bWAFLmVNWM7VZxveJGLotAoXshiNjaqpD7gfyjhYir9Qo6enbdArQ4TTsAncBYUYD9b",
  "key17": "4jUBA5YGTmzCvgeWwkn4Ph91LmVdD3v6EgAHcUBiYqhdS45tps48KVtbqGNTMSsPoPqmBKaeP222y2CGutKdXJSf",
  "key18": "4VfFj6nFV5vERDQmWkprCwBoGfuZg8qtbEoQvraJphQd2RcAa9PsDEXaM8uhsmWPXNdoG5aYGa9WJsQvpJ6eW2ff",
  "key19": "4TxTCKB4NV5kKsVAgeZMEcR9SWrzVKPirSZzSQA9FmCwApfAbowCdm4JeFo2nexcEZVp3ScsK8Cs78Lwgs586ydc",
  "key20": "4sZCBuq83EDdabV5vPW12p9AGcNu3afihBtsihr1o1HMWTMLJjvDtaXkyvy2sZGNbyxD5hkiNKG6UFPQoCMfQdcG",
  "key21": "4yFFhyyDYVKNchmKWJkEvtmNqvB53RXUaJUPwgWWJmaE4t86eYeLKLufSr9wnS4SYihfeogB2qTWehmZRVTPNan2",
  "key22": "pVxbCjF35FwWmqwPgD3NcboAxvLVqs8yjuB6452QCiWjHM3eii38m7GkmpVYZftpWDBD6EFnNs3MWSocTNBvPHY",
  "key23": "2AF1MowecaLoMk8RUz6LLmiKGvXQgoMA1RD2xN696Zq9KYxv8n1f4YoQcSgAYcBgc9j98PmXfZv6MRpDH7Muk8C9",
  "key24": "PTBs41gWNzNGGnMA9MhtXH6zTjt9i5Rp4XeoV4z8jADQRXhzMkAtG4cpsc5exhVPRua1u5ipq81QF2FhP2xgSYf",
  "key25": "LHqfRbisKg4frcw1e2u9XuLVC1JQ7EFswXKFpMZ9wHHwqGrmayonURJpLQe9QVYz41LMbTZbrk6rZgucqJ3Hcs9",
  "key26": "5GXpv5U5ek6TZy8m2ovo7iqdXDXeeTwUwCSPeGdzDtgC6dPyzCWLKUmb3yhfVhkvLt9B8vLULvRLX4Ew4VKrmKuC",
  "key27": "5mai4FC8YWguMvkmteFsBWneKK8Gp3SaofJyF8zAfK7fm9wAqjfXsdnDEVAv2keiBARA68sqpqFtoVydpNwsjqMW",
  "key28": "TmXAHTzNstiDTgHFDMCLudzQ9qEXeWr5j6zCsso9mHAsRn7wznbjGB1pVA3Mvs1fa22dbALFRdgqry76BtFxjF4",
  "key29": "6wt796JepD3XYhZTyjrFRVnAaVFN5xDskbpCLVvhpVtnY7GTtFPkLaG9yZjKsnECBWcNFLtvzaneZ8nVo7f3s85",
  "key30": "2VPcA6xYShUz3DxCH3E775rwf6A3TBZRdmuxcNsrMdh8G9aKYQeFyAXPgNJ3CM7n7eTAXkTnntSZVb4WxUcCtFNX",
  "key31": "3GXxrkZwKsNRuKje4H1meeBwABEs7cVzx2zXzvj8hmEkwbqnGT1eFPov2M6W9TDtKi7qgLmVcMkcrrREnvNLNgmr",
  "key32": "4EKRC489X8knbMUhaVSAfRzcMH2rsEqBu6c9cabf1h6emPBzip4ytP9XocXoVFxPMEpgQQdcRnu93JG2vFBPaVqe",
  "key33": "5TnWseErbJyXBXWF39SJuiZgiSrdd4YfSdMTAECiYSLwBA52EM4d7B38XcEzcYXP8ZkN9GD7jv5VK3CpG2TTbg6j",
  "key34": "5GdouKA7TWjJUgciZth1RskFBFRxqy3KZ5imjeLMYkL9rseeJaZdnuXjiduWFghfoaAmiRUvPwyNNSmvVVH1ui1u",
  "key35": "2281kMxbq6D41D4phh6nWhCsTufLHqAVERy8jYDUbNgYbsDFyntWQcUn2wXREyvo5Y6SpDoBj5nqo61ooJaESwey",
  "key36": "431tdWBoRzRjMjzuK4a3nNDNaLPtVj5bNWfoD8RmeEgRLVnNzVMh3v5n974YMSXxW15Ah4iZ2d8hfniHrdbu5gto",
  "key37": "2H3uA4nggecWYAzNJ4mPETcoX4nWYXZgZsnRMZcW74sYkEg4R6B566THibtZAQmfRLtNy4Fe4Hov7hfUrmWEHuuv",
  "key38": "379ZpoTkDTHRLHmzsboJJPUUEAAFHubxWboNTZMPceYG76StAE2Rz4BbYGMq8subrn4trW5yYAiT1f9rq7sTiCaK"
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
