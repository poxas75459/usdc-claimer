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
    "GtebJjnMxF4dR33T2kswXeGEqy3FPyzhe5qfNFp8dGv8VYtt8omU3aSAjGLdzmmhx25MGPAcJshPnZt6xq42198"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecy8KnfVpVKcoXwdJ4pSG6GZhvFL5ffEirkjwjU6N41DgNn1P4fBvShY1YDzMWgFzbpgtq63tFqkLJnMBHjVkgt",
  "key1": "4k2dJWyKimLTPAjLre2GmCeb3NCc7f2Tg7aKtpjgiBbv9jpHgEecdX4UGTneW9L73ZC8mDjNWnDFCToaUCxt7vmk",
  "key2": "5QW44MSLWUSJ4zjykSR2FEeZAbkb7eFY37a82itZwMcrynvcrisPKuaPgMgroxDG4Y1Ft3A427gzxvnZAfyzULpB",
  "key3": "51zQFv3oLipUACxWWiNnpp7KuFwPgEjXSfDcNbEiupajtUwtFVjj2T2NTWvF9qTF7pnFuapywvKJJtyRyhWBMy5P",
  "key4": "5sGAZCzvuWyNCZzXDww8ixuXGB67k3bvWWYbaYsPhaX5e8LDofT9Jo2qfSpyfb6TAHgcFmdJUNdnjZigo9ZfuWWR",
  "key5": "5XukZrnb8cw4ufvtoLC2q75qRkapFym5GfTPTMPPJyHBNew59CFAjM8Zf5enFuizsnAKy4uSnVM2uK4nB4riUpoQ",
  "key6": "aAttbg5akGciF37jYTkr18em9YN7CSjo4QAktxykEH57dpM8P4z9zNGfcBq21zwi3FjcfLLatp5peFX6fSMLSLa",
  "key7": "2JyupxvH2A3155YmTsnPFXU45USRQQfJtsxcrk97xvcaBawk9gLGxNvJpEyT4XfE4RyQdy9bTCZCeXmz99VurHpy",
  "key8": "AE9Bur9HbThwmGpwLFkW25nVT3He4xsJ43Bh8KghRECPZX764XZob4sCxjbf7u2wM3GW7VQm6j714NEHXNSYy7X",
  "key9": "Md1WFYiCFBCVjMqvfbvx3EnDN9Q22f2a517GH25EV2i7GBfqBN62mrweMHwR3caewDKi1pSjheegueAAaQEKuyM",
  "key10": "ChUbphBenYc5dX8a5LUVfiFTZaBfm1N2JaQHMxo4eUJH6TgSmtiV7oAeLY6HVZjCzeJoXJCXiCJ8hsUt2LzZpi5",
  "key11": "5T2pdKDwo9KRt6C7pu1YVrsLBXfJSTKS8R6TX9ui8kDDVZ23HAftkAJMMPztmsXksDPHVqkvHvMG6YCyGSUGoR4b",
  "key12": "ZEWhCKXKPaQJsaBdqEyguUsXd4LmiAd1tyZjSTBhfMMh2ofPXyPH1X5Laosxdyjb7n2vqbXE3MoFVL6EEWZvtRc",
  "key13": "2hHG886RRUjLRQLUk5b5yKu2pi8ncxkUewxUkrCFNGCUnkbNDXtrPzRRKWwtar9FBQZaFS8Aku3CpJYmhv8GaBgs",
  "key14": "5ecf94KuAR4HQ2HS5GrZXV1WMsxTGDJ4yotVKp7qJ4j2d5dZLssm5Jhks5TxQE5S5jM2T678uATjhtbov7xSpvKn",
  "key15": "5RXbwFukNNv7wvT4kd4Th1jyCWDKrobfMNR5GyHxKeB15wkcKeARX9JEvewL5SaRo79xEYuyHuVqzHUwhayXe26g",
  "key16": "2CUrftYwCYz9uTN7pX86RN1tDA53V98KxmNApVksH5JqPcWZfwvqNgStHJEcLkcXaVDm8xscPQbLxad2yZDsHJG8",
  "key17": "EzdvJ4GaxYwj8JNvM6SLtUKNEtBozcKGP7Epoz6S7WSztRgoGzkykCz3vf1HwNo3pfTSX8DUFe7q52JNh4ZKV9v",
  "key18": "g1Ep8fDGeohrw4gmZtSkDrX59Rj3QjCdaCFrNTjoG8rohjXwtrU5sNQLBKNoFM3KLzAXrN6Ag89XB12RBbNkxKe",
  "key19": "dfCDTSD8t2b12QGjrKdvwSBg1zjvajX6aEsLaJ63xbNmsQXPvNA4osBnaGGKQG65RTqRftQt8xSRYinvdQ9ZYgQ",
  "key20": "pMZVemHs5MiaU1V6fPYbCP3ub4Zzdj7rb42M9XBTKx4dGRZoCvRCidhnPjbqnHSFZnRAWLnPSavtNcsD4g1fjcx",
  "key21": "3DAKgfjjs9b6siJ6MLvNbgAgzudqKZsAd8aidrNm5ZqgYpfajmv8zvAzYA9zLexDzT4ma8LwDUbkRTX8dXx3BMP3",
  "key22": "2aUYzzctYs1hLCWbYvQ9KmarvXPiaEGLQnfXjqwiZbo53WJfDSNCXfeA51yF6uM8K5UvoiC3svqSrE6iA6zcDeJJ",
  "key23": "3BCFcsCNtCeAoAadXaMATyqDtZALFVEWBNFVHeBNCxn4L2GbSNQX8a4epAeH6Qt8bt3ATACRsGainQMpaDHDsBVT",
  "key24": "59V36inDJZdUHXUfZTWcqjbS845DB4o5fzeDwaMpTge4pMP1nYii86e76qcNyEWLSH8vbBbJwUxM4MyKMozgvAEK",
  "key25": "3ZX4Ja44xS3LfKDCcSbJ9zNUrkzm6pmxYM3m74PeLx5K5eh4TAkH88awiSkuASRiT7J29pxMK4NQYLcnYA3SgiYh",
  "key26": "2Vxz4fcJky97kLVVD3dTkycM9vgA4KxdUKbn4wiz9Yz8L13S7R3JcakQseTN8GFzQwuK8daYnsL27FrBc8uWxLE",
  "key27": "4kiWRYKHPX37VE2fhTWztESpWuAxDvm6Z1D8EFfNGSgYSicF3QmdVAjKaLCk3mvNiPJxazZBRm9qcBw8AFKYRBLK",
  "key28": "3FbbxnSwoVXsUzUVxZUJpZddYdENQ3ByZvdipp4koE4RZh2MJ4okbKFz6cwGThMKw4kG9FmgXzGaS3nPeWhdaoiF",
  "key29": "ifp1z4bnX5fUNjknTDJBoL2ZY9gAD3nDPkgfYjdMobxSP6d7W9dwAdZpPmjL7JoiFmLpkFc7gAPvyyX9ctuEYRU",
  "key30": "2TbNjSfdD21Cdb2DZLRuaqas2YRQPgVYCskUCprGBHshKAYfSQ8Baxa85dkPX8BR6yHdgWLNVu7M1EYDYY5hWXTe",
  "key31": "4MUVQNohxEXNtkEWvfxkmbhJwrNwoH9q3TGAFEeKYMkK2hPckSijaRoCjUriTBS2baSSVDxMeB2eEWR2newp5kfC",
  "key32": "5wkWhrSNtJJgpiQFRQDA4uDYzWQg7SAJQwVdhYtQW7Xrr9gRTPAyuauukn7xyitA4H7sF55KnweDkJrEaohVjSvH",
  "key33": "aLkajJMwSFSBbPiGxJ3t3fsqcV5hyEJVEpCWxmXmECERAi71wHf3nMJwfGPCjeip8Xjb9ERxyLCcD8bZHabKkc3",
  "key34": "4GaR4SEUThYGioPtHxLChCzrSTyCXSRNhhQjQZgkxNHDgj371GMsiDGP3kzFNhFVcLjcnhXCKUBzCTSRSoQEe8LR",
  "key35": "2mNFDnBGrTbYMa6WuyYnGaPsA3dV6TQL1Heqcr5W4eK338yyVFPCqdwQEFJgGWZYcDMMaR63RXfducTK7ja36aoL",
  "key36": "4jfujFgKLTgbvyp5oDCMh31wWZybWeToFT4Jqa5ALPf8VkQNceVaUNVCR8DPXZ2Qfxxr9axixgbJyf5p344rDmMn",
  "key37": "2GbA8qRdHR6HdHvuejV8YxEmqhFRg5J4nxqJ8fYP8e4zsHrjetBB714NqU5Na9Vys2vwd8febShGjCoUY759VjKH",
  "key38": "2GbSjtnS8WXW3bqvEh21WmnjEUSKPWdokAyMuxhpgtscWkVwQzABAgQQgnGe7fwaizHLCCSuTyshkZFgGcZkLa95",
  "key39": "XUayzWHRJQkeWMdSwmsfHWGL4spouBfkfdUUGizq5tGB95yfEodeBXw2AUMrzK61Bg5iCxwakagt2WXfs1FRS9H",
  "key40": "4ps7FFyWUszEve9zQNFpLN2oAygRsEgc1J1t9tB5pC7yFhWXHmGhV7e5rRfMKBUL7qJDmKfcKM9a2AM1U1mR669v",
  "key41": "2rhYSzrxUBiiFJaLPEY2yRV1V9Sw3X5L9K696sfpv2LFkH5qy54MV9EBa6D1jv6fDBktBtD1guL4NcYKjqjJfyhN",
  "key42": "3XzQasW8VEhyCu8Rx3aM31vizoP7M3bkmmdqRzYhMesRx66ZZF7EfpVFXDwhUH5R2ri3fLXdGzPMXJ8qU9SNxDLh",
  "key43": "3aqsjoTo5bmTTQt1ZMMgk2GxWX9FFbyL3LgoZKAzosSAe9iHZkTJvWQcMWDWpBJ2bKeUvDTK87MHaTi8E4P9xb8R",
  "key44": "5bexeWmMMsukjH6ChH9NWNDT5qum6jNXh83rCV4JjA8jCJP9GTfyJz9nxwVEtbRCauayLZw6EjfojnVV8NKTyqJx",
  "key45": "4HLagnSx76NExCzjsxVTWQJXZQMtmufveXc5c3zJcmE9kjxSjcjt4uxDSqbmTk22rBdT2nmLG6S3zDpasTuHd9ea",
  "key46": "2XE9MLASynhNng82djKaaizv5ciNAHbbEpKfS2ppnGUe9XQiaA8McpgZL6qs2GPNoek4Pywecqj3WzUphCMmhZyD",
  "key47": "5w1Z4kLEYtz8hKJmpuKDrdErnzTiWYfVePnHpunGZwkbgQsP8vjgKUqkNGtP6QemxqubVnSiXBBYbQvNysdDaQFZ",
  "key48": "TbajE7kZGAwY47poeusg7MJNRwKtPdabC11nutTf7PokDAdGea2Gx9kNTawgoj2381oyKYNxLDj8W5UJR9JGZo3"
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
