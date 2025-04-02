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
    "4z4GPBLQNVMaBj67L9HUDgNzqw9gBRB9nVgyCZbnw1ZxKHp4ELQe12jyWd9SZdYHc9x3BKhNGZXyCFSFd3RTxB97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9X3shsfq6xnHpzzwTSmaGZ2RH2a3EDEMP7u6bgF168ZmGHU4rNgxHHebRioMUk6idCDg3nSWFt6DQpXTyf7HWj",
  "key1": "2Ni235xWJeB1kkuukbonrCH6oJP2nMRbYoVAsYgCSThU8JyxSFs2oJ2P46iTwtw4b9RG5gpy2163VwaMntfegGNR",
  "key2": "3hE4xX5DtvKD5Sdhxnrb8i3tAo3TD2S7inPX3P4d8kQoBoMpo8kcyDYgPo3CzvNEDwjuhPtxqDmfsUS49ZUG1vB",
  "key3": "2nComg1bK9xRbypHww8nwhRYpELtnMSfeju6ns2b2W6CgUDqUPny3QdNzDL49xMWL2xEfvcFf6mhLz5FmBEZbFYC",
  "key4": "3qmagLK9DB5AgRFkDn4kvZGQVMntRUapLyPzhWEf7UtF5oJnneVdWxC7CaeVVDDBPtKkXTDeyvcbNinHMwhwDTCs",
  "key5": "4rroLR1Wwh81HkWbKmkA9GWgFTW9nr9RkbaPFRSb6Vx4cK88sLyzPTFWVzoMzzAdeGr29yU7QVbnvEVxzJaPfWDd",
  "key6": "5fjwCyvJzM8rZD1hmB5iR7fk9QwN5iC86VVqmM3CcNHevP3AhXkNtnZTSZB89G5JRhZ2LH8dofiKXww5RhVKpEPx",
  "key7": "5hQ1UmxNqZcvWfJeiubQiJPf2ps4cAsL5ZUqm5n11MLd74qE1yjr7NESbmQ5iZLi9yd3FoJBnheoemeicSTYUPK9",
  "key8": "4o6wUk69hBM2Hbes57SRU36MTd2KiZSJrEe4YpaD4MmSVYsjaWxixMFWpwjWxj8KaJeUL1XWwxB2GLmHh2ozZXg8",
  "key9": "91NDNKuYDSm4DrQo4Wmo8ruMPSRHgs7dqyH4Znf9Bk2KLtjFvTNtNV32WKdqEssqo8zPgwxSLXEu98wLYEDZhxm",
  "key10": "5jQRWA79tsuJfygmokL3N9EtCvGHNBbF95ggSJL7Vxk9zNMioS3cQqVAdT36nRnpt56Q2VbphJKbqQpBUMHDUxax",
  "key11": "2UJD3wviu3PB9qTzRDSGQQivqR5EdaJ3vXTwkKL4fYSpXguHU85868mFz6sNxYTigHZvaNVvKdnqcjhkZCDaGd1d",
  "key12": "3BkUcm5oGwEWFX56ZjB1RhqDGFfNuo3LYbp3r46VfbBbNGLNwh974rbcG4NTszcaSMEq2VEyfeteHf3AdDAS4oVi",
  "key13": "2JQraBuBWMBKhhGY4hTKLn4ZXZAzbUHwhNdqnWcQAp4UHHmKCZcXUW4oabP3sr9k8SybcHGvEL4oaiZdvQpQ7HzB",
  "key14": "UFAcHQ3TMUGWrJ59JH2U9wNc7nzaLaVyh9Yn8a4rSHkyMAtCQq5FDFeeaduEttXGNTJqMqcYkNPWc6y3XMpmyqf",
  "key15": "5d6bQaVnoPgwAXGYsJ1FgjmG6LeR4QvWzW4wE1SCueQVh9UuaZJ6AfB3mEdcExEtmvyPXvbHzC4wNWkKztoidbwN",
  "key16": "5LwkyWXSsyJ8Zwz9VayKpZTywHodTKuAZC2pEjngyTr75nd5hSsy6svsPBsnMKimgYJyHFu93SnLWmGLXSaJ3Ded",
  "key17": "4NTKfUzFqXtYYmDSFn2KFKoskPfaaEcm5RgPoGLYm5uU1qKbXwXp2bqAwS3VPfnBUEZzaHRoEaiqrjV59UshGHcv",
  "key18": "5QvPjiTNri2xbVnorJX6mPQWnY73e4AV7fCAmuhHtaTJnW2KRcP1UdVfwHrv1DDZpBRcDPe1SYQiW9VvBkXZTE2T",
  "key19": "3RZWwy5CVb6UcQZSkkrseVGtzZD85rVbrVuSL254HFksU6FxrvPfkPC6xcxLDcbfZmx7jHHwPHCEg2HZoPLW1Gw7",
  "key20": "3wT2h3t2uxRs1cgmmKBTFTu1fHdTGi3i32iPpPGc5yvXJfQSaVpsruwGL44PFZiQkGJKNV2sWNtm3QtoVDhfNwAe",
  "key21": "2Eq5Vnibs6sBSFf4qpouPgoqP9MNR7K4hpczBpMV4Zgt8umWJTFCdcPhJwFtcMGdeg46XxGUajbHibBomHd9agbe",
  "key22": "4PNDbR7YX3t7omerTSxJkzYv7aEYYhjyandQrg9voLRDPx26TLXcnvWayER1tcavRCuqFMLKtWu9RgEAQrhB4iVP",
  "key23": "4NJ8kYv7R6pVu9quMLS9ZbbNyc3G9t8ZfXVBcnb9tWfpRm1XRdmQVtKGwobwiSfsjoyeh4wss9ChyJVRZwk5qTyk",
  "key24": "3VonuMdsRx5QzMuDiZapxUwM97QrAbYErPb2UesSvBTVJfWxRK5QWNxSzteeL9AChVBLrhnEfd1F3eF1iMePouUM",
  "key25": "4KaoDWEMSYPSEuE1wjSca15SWok7XiTnMbz9QEixvFrYmiKiTLgVgC5Gn3PMBPiLDUCtppqyZA26JRh9suFJbZ1m",
  "key26": "5bneYV4qWjz2NxuhM8ANUoPdXoJUjMF9zDLyBNkevNMAcZ3Rb9CYeDeVo43gbt2PUDLJcfKnfaaT3pvNWZwH4Zch",
  "key27": "2TCgjNwvkAFdyF7K28Fos24RLTt9YCxU4LnAmY4R4RA3kfRi5xbY9FdA32194GmAaECjHP5Czf8ZoGAt5tRh7aAb",
  "key28": "4WTV9uMQ19bfLUZ8CEbUsiUbZpFm7ax2VwgxSpHgkJcjtyHBWdtFv5uL3JH7xjc7tGdS2Z44gzRvL7WMDvXPfxqs",
  "key29": "4q6RimpgGubJRCvYAnif7HjehjnhEq7ZnmoTGDrVQqEcpXJnFr58Jak4jznxvP2p2wCPLiRVimKEFgs74KiLzTuW",
  "key30": "36PXNdP9nXge6gNYPhkt38oTeCmCYTw381HrWvd2PQYm7kNcFPwarkeQeKSTqm81GvDZ7hdT4cYX6VLmVbB4N5dK",
  "key31": "3r6dbHQTJ2kpG1Smyxgea148pzZ1c1qLqb4PFEf2yRwDQYqLmrtqTquKwk6zvyJnRPLvwroz7X4xBfNwQj21Y2Vp",
  "key32": "53rnLWi3zknxet3z8q51J78f253GM8ZJymxHbudZZ3iwNeeQeEtNogotKrSA9XgDfe1q5NcQ5PhbE6kcVXVekZ8W",
  "key33": "4ZgqupxBM5GAq7s1vJjnMSKp8yfYeSJnGhhsksqdQJfJgsXZsdP54BbQPjfPiGvt3g2H6Xt5pC79GRRHZpdtnDex",
  "key34": "5vRvDbDNohxSXHRtyJ4xVkTbnZ3xuFNJedx5hZmtiN8uXvgxZBtTzS1Zr4fULyMHMe6ut7PXNqvjRKcLSAPkNeyK",
  "key35": "4LeJkAdx12WDTZqm5pJVS9FqgQh94ZCm757KqDjRXiaUUPUzS8ybbiRf1UZyJoCgzWX2Aj5VQw45rj9oTNLibR19",
  "key36": "44JEP5rH1QjqAAEbUmhknn1irX6XBtHsbCon62jmYz4KzCrHewDZSDcf58mWCjZiQPBdVyARMDKp1CHfMb1wC4rx",
  "key37": "5hbEc4mB8KEvkPLitFe9xaEvXn8ez1foCc91sKjiHXhoZ7F9EN1UmgrcK8kWCW5WhWrdtvh3CAqBF3crocLEq5pZ",
  "key38": "4PVsXyn6n8pZ9t5T12fZcsT2qnbaAUyBQ21NPy4oFeuoYngXTAGHgeq6H4Ue9bfYfvCVGmGer46tHU5jVUrEvi2B",
  "key39": "4y6WcNpsEX4qfropAJCxTCXUbCkuBeT3JFbsQUWi1SUPT6ZfPjLrGNA9kQJE6Du5abENYqe75MFdG9j4dMYqq51Z",
  "key40": "zrhsKdT48cpYeuq85ggCCcgqYnDfAHyDPoeW3ReBuxYbEXXRXyVezTQAHHxhsDnUTWPNr9vPZ3spDetHa1rW2ct",
  "key41": "2qYfdiAfgXPwG7SSKaDA2AfwAEG3RGtGEYWTLR1iYXY9Bo5es327M75EAsiXwaqHjgvnyaPAyzxK7JC1AgTp3x7P",
  "key42": "4GGLpkTWBANmFxF5qBMVoed3fZX7Z4jd8osC2UhrykSfCvN2VheJCDYqKS3qGd7Y2tiiyVeFYEscU1v6sp7572Vf",
  "key43": "2DVCGz5bfiRgzL2EG2TJkAyC2mJEChsmCWwhnyDxtTEFYyB1xb2N33Gjg81jT8uph3LxUhRZfDC5r6D9WE2FceJt",
  "key44": "665gC6EMd2D7r4iVhRg19TWkC8SdpPmMPhcJusidC7dz78LmBLXKgsoJBw4qCGwYoRRNg7VNRrxqpnm4aNNNqZpa",
  "key45": "3aJ4dM63yMPmcHRQYyDg3HXsRV7zY1PekdwhUp23DFEt3QgjouH1FTUYCHSEbRK9PsKGtVSwd6JEKy5vpWo6GuKe",
  "key46": "4phuQGpK2iPnqm2HBi5AKYT4wJzqcgBvd9NdVThRNgp8BHzKoUnNPNRwakJfEAgd7pCUcQdwEPCzrJU5CQb5d7Ri",
  "key47": "5ijGF1GZLhReuosAYzekvDHdB5bWs59ruHJd9ujmaXuY6bPjuK7MB9BsZGktCfiJzArLPYe2Ei1yqerWx8ZsidWD",
  "key48": "5yssDvzLacShGTv9TDtR3q8SM88w4ybY1zaLTAmzGwaEfgHWjE7C7XbzdJaBNjBoz4dsBmzhfz3PX1rVbvWFhdwo"
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
