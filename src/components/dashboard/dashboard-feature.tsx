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
    "4wnz9v61WTDd7ynQWm6snmwTVJZkcPio5RZK2Uq17BcKLvCTAcK2sSNV9RBJfBCzsm9x5ouZdyaXx1Ju32oUtQbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKqTMN3xmpxLAVXK8egbTXekYWBANa5TpQSa2BabbptSpMbXhfSg6DHegdLnLMVyEajzWTx8RYttsQNFb1TzW8U",
  "key1": "5YHw5XaZtrPmLzwx77VXtfaA8iuDJzGXHBVqXnpsPJAUDqhAPJNLiRz2mT4Wfq2TLVRJrqkX97gGSFX4rYv5KCzH",
  "key2": "3Tpdj9YcfAEVJiXuyaZKNbgjgdXvWjyBysSnd5bGyx3chUkAVeLXdQFrqYvLD8e6ZgywFxmFgW1G9s9YWjcJAaJu",
  "key3": "4iTsFjFMjuKzoqp4jccThamMCvqUuSSrrpd9dMT9J9dutHRjsBmTnw7qBDR68SPaazM6D5XjXPR4iwG1D2fjCXJ",
  "key4": "2axfsYGKGabkuRGJdQXziZ22MDAGA9Gk2n2GU9bDxsVB2ahubFkGbMTkRGEwXaGsLNzmK8Wqajbj5GZEGf9xv6hg",
  "key5": "4jXnPrane1w5DAcegGYz5FZ8NBxafLvjsNhv14Woavw15bDc4XgcBMfvbi9vpjySXPavw6ZPt6hakF2biXsHyfgc",
  "key6": "5xrpVAf6erkXxUWLcnhZSpgz5C7HZBWMLPpEMbQD7h8uUQcJruwdPbHa6CVEKww2KkpQKckVpSHfXyGmxxA59ZmQ",
  "key7": "4cvwWoYx8oH8dEvzumBpb7NyZZH1SyUAwiXf8U16HckjsjJEKWentBxay1y1N3aa4ywqc31V81MB6o1piUxC9TH4",
  "key8": "3fQtFB1S9njQGEbHD6WHbRPTBwPwzuo7uRHK8FF2E42ELNghFFCKN98ey5sXEqMwEK3MqwhMsBozr1vRjbeggZJW",
  "key9": "4aVeUUwnv3oG6kwxVSvgqF8JHFsDbocUHRNLqC9nopuKXM4JKcbAatGd8DaN9NkeNor8YKRfKj7g8zVuaEAHRs77",
  "key10": "5pvA9YVESAHmQDtk127uXHRpsid2JgcabobDxGTbTGWJqhegiwvEwgY9aeaFq8gpdLBHUEod7bJQKA6LzxdAmqN8",
  "key11": "RJNEiwjrEmdJog4CpVNddFuve32yv1wEVguWMNshqvAwSHqGrKnwqqdd1CdiQnJwUwoNxESnVZnK5RWwuyrDGcY",
  "key12": "5UpPBgYKXfbegRjLHD4TZyYuoBs6P2p7Cuz9EQJdo2LkbgxMopFL62EVzjmQvipJqewF37TEA3NBEx24bnQSNiiJ",
  "key13": "5DHQbxqDbsPsx1X8r8tB2fgdkdmfmzpouxcyzCknhrKUhH2GrJg6dXYE9qqcnQVSrN5TVf7ELvbAjATyh4K57eb7",
  "key14": "eAGtvKx14VXiY2QXQdcgtiwzxkUKniis7mTFpNngB8BS3eDTrBCxBohjhdMfEXV2gWVUHff8vaF4g4rk5wcsqqQ",
  "key15": "26TcrPn65BemMZ3qcE44R4XQQdmwkK3LjHLZ4G8m9xd6GJ91zkAAEbcfPuNU1cer65xbW7hjBaGagp89oAdNhgF3",
  "key16": "679ftjFrzjrWHSgc9EXCdqweHDg7ZVzXjHFinDLcLkZ6NLEtiKmXNDEdQepzcEMZGs3ft9pfJXu4p448q8nCN2LV",
  "key17": "2SzaozEkYMf9vtfXoGbEEAAyQQpzFjWLvB263m6T62h3PaqnznbWKPoFzTA2VSssHv29nxtYF1HS62Bo2fSkA9NN",
  "key18": "BK9dUqd3koD3rEybKEfMDXp6TwqcpftWyDpNprDhpRbJqYZDjURMaNRq3PMyiLmKcn8aTX7yJNe9AxoF7UM7G14",
  "key19": "3AhCwn2UizwNyTYptkprY2QxSvkRgQGWTbhb2XtNjgP2FjsKXsi6KuQkyEXCbzYdFSGwnMQipP3yptGwpegmgTQm",
  "key20": "3YKS3yNnpkkFVqEYtyFiAwAqsoDCM9UgrxQVSviJYBavDLWPA8qtaV9ECAhdN1wBydSyW2Run3oqYVLNizTgNFLf",
  "key21": "5TqEW5kH3hFrgdvXtpwAPEmPgaF3D69RVBAk2VL8Z43Deiki2XUmnQkFAvhkaK1CTcgMgXRiWoKe6Fc7r7uai7BK",
  "key22": "2hJHfDQZtoFnRQoJgbDcmSfc13GTGLyd7C7RzNRPpmhLajsmgBQm9Vam1yZUJRVKuBmPc37MVky6JotpUgiJCc2P",
  "key23": "2JpZkjtEp2EWaLzWb77zK3Vds3BdgAHrj5LZG2tp5YAvnQ8pKopJ7njiKg2eEUS8iWR1or3G3fFNAVNh4X5TCs9d",
  "key24": "4f2HYdKg5J65T48TbBEgMBq9ZNdu6MGex5itW9Y8HaQNE7gCKvYeRvZnGoy4y8JoygDCxfBKhsHLSGvCWsfYqLbG",
  "key25": "2cqHpLqGKrXEYTSj3RRy1dHPxpQQKqaVtDjZhMSj9NiFiSgwN1CcwNUzJqMvNRbYzoPSHPduNdMbmVo9DvnNJAcW",
  "key26": "5gr3fgtEgG5qN1LTYK2jVg85gcmMeF7VjsubTKkboa7md1hDeUHWZ344ZbPq62tpEerWMwsjNrCUJ79EKVpXk9CR",
  "key27": "4HBaf7CdoYVGSW1SufLsdnxVEpbav1hi9zn7Q2AuL2R6rBDFt6pQ27UdjW8dXutPdnMmN2FtsnepF4APzgMDBNxM",
  "key28": "5rkfQk4HiMpZ6Qqp8BmCpq5acLjfFPP5fuHg2fxgrKBxjq3Ft2zBJ4qsi6cKDLEBpRhdW9SWnUt3igLgVA94Mrcc",
  "key29": "3kG2oo1A7qrbkSMRMinUZDpLsxdEk2fdacwhguv9yDe5Q7SM2Uj6kvj7v8M38webhzEckpvasAP1PiadRDixK2Sv",
  "key30": "46L38cbjoj6MwSP59Jepsm9q4VWLwViPnRXhYbZhoQvbVuK2dsb7gdE13zQrrHicMG7sAnKXcHmMYsUJkjQpvA6d",
  "key31": "5RTaw4E3upPEdQQjUURttnLa96mM8bHbP83EeRQzYGPA3kNccqNu7jsCoWnvfUZZ8nqFbYDW1YNBga3Eg4w45di3",
  "key32": "9uRMUo1vSaSvo5wdzioJkBQ1EdQg9hfkKSotGVc7ZM561RRhQtJBATZmP8pn6n84h7k5p6E8bJWkgkGtzV9D3JM",
  "key33": "4Niy99B6WQHn85tcLBBZyhk2aHTuFWFRpCFFZnDcVYkxYCesHtANbBt4pcegGxUZUBqFEaCvh6iK8FEm2pPrFiC5",
  "key34": "5JXAPDorsSEQYGMEKEfsNNdqa3gzfCuAX5Y7qVBNksnsd2Uxmmg3NJjzdoAka7qoSR2G4GoAYizNAjWmNXmMddGz",
  "key35": "3Wa9cySPMrV6rHnAC1Mx1ojkTS7hrSipdVg7PrXQRuyci68U9DMKNbdS1Ay23G4D1m2zJ7PRbxXe9G2W6M9PCChw",
  "key36": "4Pg15vuZ3hYYELWzivGswhXJj6gaDrsMNzEgw557w7BNSJVDSMqJhE8vVBTAHHQcAXTDn9B6CDXaYWQ7BBnviFDa",
  "key37": "48fBsFEbR9xoPRPskC48JigRXnHcVexJ2aREtHFSzrfm5La5By5wnGhjh9EAjrbu4Uu3YtYLQrSExgeGJCW1HFKt",
  "key38": "36SLdUEzKNF8QtANGRfD1V2DRa6pnswG6TRiuTbhkEsQaMrLmfgwfFTseRDrBLtfMX3pNoKnTtQDmYtxfbTYYYio",
  "key39": "371uabSHcH3ZankuuW1Frqs18i1SzMFpgTtGwrQawSF8dFnsREGcpziCxaqygNr6y3De8TTx38zCh7Zr6u4VhDLW",
  "key40": "3xeZ29kKPZoBazepLm63NPdgYTCj2p6KDZtucrtYrdwhuEcfwjDHphVxVL6fRCdWhyfx4L26nc1bzv88sgBpPmpX",
  "key41": "4vujqbbvsKvAvQF1X1Gt4CsNdKCfkJ7iaTzhMWLDq64DJyHv17Mb2zwUYA29j2WYaorLNSsrBVU6SY4ogi15qMKt",
  "key42": "3abtNvYXZGCUbc2kQrUvTENbbj7zYUjV58W6RtULyzQTrFxLHv1hu4taKC7xHQG7Z34kd58j5jYqQYZbsnSo4sxW",
  "key43": "37rN78nRAWfkhBZ9QqF1drgKTNMfP35MzVjVfTW9BRJmt3Vm6w7Pja66BhrT4adgxdULa8ATvM63Bog6Zr9A2Fa8",
  "key44": "5e3HcjZLKGmEnhTXynzHUuAMWr9rdLiZfRcCfghRxvgthWij4DMvTRi8j41fmrocmidM1HeFRvc48ZEpL6r9sJoi",
  "key45": "5pFxFdaX6oH27tEQExSrXb3gjZuVqiB7WWWFtvA3V15udspBNmFdHW5CAZZNd6yVpQ8DpAq3ueoiaap4zLy6wSjV",
  "key46": "514Mp36LcWnF7EbHQifiy6qF7LqQLXcUuLsNkgjNPkh61REDcQAdfjYTcThnGQJ5NS4BeMUS6mfpqRPmKVqEwqWF",
  "key47": "2qsABumMtyxyzL6DqjiNzWex3mreE6qzMfw4X6iDCF7FisKMja3v1rReg4HmSMgxAXWLP7a7dMEzvzpqH4MwSHFR",
  "key48": "2DEtYfB4S6HJrZkYUY1UCfzWVJePaTmCS9UMhzphXrrtm65nBqVYJYh3qSBJs2FgdfAE7Ank3ZoBA3BPaMCMFrdB"
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
