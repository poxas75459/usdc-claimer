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
    "3514vBs6BKBvKGV1PyAenRcTrgGii6MTPRpbUFqfmvY5qzAiY3g696gg3epkcbv1moSnQfzTndkFBcAA61SF3xiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rR2DokmSzCw2ECMVdjRRHw9GaxGMFHXuB8DD1dAFuAS8MzuRqZrB2MfxixKiDFMgrUZPu9KtnVX5fzrDKw6ESp9",
  "key1": "2FPfXFGy3MhXzfDk2iMWeP2CEfycZvgQMSrRzj9vNGzbpCLn5XbaaUJdcXpQhpn4Yx2sEBBZjQMNrb7CagacF2pE",
  "key2": "4E8XUgdwZfwrZ85uWPriDbPFax9jLk72wTDzyDJnwxA49y6fwKFQhxR4EFnawkPKxobxQ5bSx8WFJKKp2KbJHJMQ",
  "key3": "5iV1odcDMGuTvkeayxRUQF1qXqfPwYVJqhY8YZiypgcZfKKvgP5dbhjdoSYhhFCGvgtQ7r3dNuc8HiQNVK4zvpRV",
  "key4": "28z372Upy7wZ8Pq2TD5qjbKANhp88o5QhioxeeC3Z6YdwWt9JfnTGgsg5ygURZ4vyK3T66WXnkiyubwv73LypZUa",
  "key5": "DdAPGbu4dffZWYnnbtHSPwKC6qenLkMc9jhpteD75agZVLBR3bqei9rqn9Wocbuw4ygycdDEuDTsZWJNeUQmWjz",
  "key6": "3Z8SyjY4FSojFHFXex3a2ce4zMLNkcSRRKWKk8UfYAHZ7aYqE7E4wBDpwmkaYc3jn6WNABBJNGzmZnDG7ZUpMEv1",
  "key7": "3eZaer35C78dsR1h3PmGq6MHAc1JFPtVXC2wSiBDTYSWCdxDaMPf17VfRx7cqASAPwN2qfzJPiFNN7xPHAcFD36W",
  "key8": "61auEnALbAdVjfm2aiz8MhGo9UDLnB84PbqiN3USZMLr2SLJaTrjsiPvQndeU79tHnnYSSpbUwBsNKDhVK277KLg",
  "key9": "33BfnGfYkk3qRRWmp6VQL5EyeeYDWdUWuCDLSNGvjXLbu3oiDBWndrz5eKLWCiNXJnPJNtrMyycNiCxNqF4ZU8nh",
  "key10": "2arHd86CCPE9yWhchR3EzhwVxRxE88CyPPU6c5FmknYpUcRoLAEkFtd8ybYbHKR5vqCuJh2kvEc7GvHcxQxYGhE4",
  "key11": "3ka3cPpL8zDinMXGMcCg7QYGrNvh8tVx61z6fGwhnHzWidn1ociqsCbC73HZfz36sJYDhpSrQEwSkuicY3oLsM5z",
  "key12": "5SpFqAm1B5dwMXuHsE6ov3oj4cD1U1oizJcndJUFdq6gR2HjbZckDSgDrnxKLFDtNZgVGeRi98bR9WJVmCng2qQQ",
  "key13": "2Z4BvyqFQ5QPJRd38u9DnickucNQhyE9nrx2JkK4FjUd4wJvbUt1X9R1jjj627EGdjLW6C2Gi1peqURSPFi6enV3",
  "key14": "4MTp4X6pUcaLcroVkuWTjVJKBbopL88ydy7CoADv7XNYkL7oWPTEwSmm7MYpTwjBggmsuppPuHSVzMchLir5c3zQ",
  "key15": "c5qn3B5Ee6aSFUuK147HJxLFUjuaG91fNAG11pz6F4TgfKv6ZdLfLZNorYk5TK6SzqYt3QfrdWjaqK6T81fh7q6",
  "key16": "44YPah8jEyJonwoK3kYVVooLcLwXp6Cf8aNdzSJWpChR6jnNMvm9nj3ba9jayVwUQNrja5me2f9oW6iDYBVWKPXT",
  "key17": "2ifxidckzfiFxZdiooWPzpxRkZvAjUy5kdpjX5v56oXHD41UQYp8wN4NxEPQdbaWj6keFqV8XRcB3fYbn64FG9RM",
  "key18": "4dKUrbkhYxgfzFHmZBxpbEofgGSRbkg9fyZwUKgUVm7p4BCHLQ23dDPYD2aQCPuK6AUdaJUmAEogDGJkVGZXjaY2",
  "key19": "8x421G1V9EeYLuCCKKt3V6A6LoGiR9aqBWaXfifJrAAbtMLvs2HpVAF1Ry8zwjoVBi44dgfstTpsjL9rMKKedrr",
  "key20": "4aVPEnbBJkp5VDU4uDDXz4sQTm6944o4wBdtcFLYKuWAJW3SC9TuGGHzWNjWmwTStJmDkppMGJ4L5DbhKHjF94XM",
  "key21": "2nTpYsQCaa2PmXto6wkbVisUJwySy76FiCiUGsWjoNhP4KgQdMkunniPUmegYs3M8zVoZMRr9wqBfdirFskQp22Q",
  "key22": "4ccPkX5RYjEuhQyNc6aHVKvhCoZGgZcGscuwReLDLW8bjFVbzb3wztpHc7Hsq6wmH6nXKG9V5WbqL7nEVsF4wMcE",
  "key23": "4YHmCy8yLHoavmXqGX13CLHpWEmBVUqdCepYvA5wJ81CgKng7zicWougx3gR96qYq79GfT1mGTbVi1GP3Saq4Nh5",
  "key24": "49KvYs8obcvLYHb3w4zi2pe8rgJajYWkEPZcGp3UfsHLrvbD5bZbm2H5qffPVNQj2yecmNcZU3W3XqucHvvzTzwi",
  "key25": "2LuXRmFpGjuaH5aTZZ2hxnz85uhzmRUKZXpkTThzmGAWumK4hZccL9W7Dkw9rhaVV3ce3xaqTCyd5hHDsqi4KhsM",
  "key26": "2uXKeDGzfP7dumDgwHnWcQXbX76TZG9iDa3hp5fyEt6rsgq1nSoqPUHtNsr73MyPkyvHMoPFUdTecj9U3iWAJJoc",
  "key27": "3tTVTQuUFchWUz9dJhE98bCcwZw8MjuVqTMVPcGrEkixie7korP4sJfzBfN8HjivQYKN5hjDZ1ZHSc94R7pJUWwS",
  "key28": "RUTSH9hetuaEuur9B3RF8bvnVKiDfTXS79L4fjj29svgNJfAHt23W5QmwiYQnEBk65Xdk1YCBrLE3QKoE9qhcb9",
  "key29": "5BBbC3tCN5FbCk5UZJBgcHeb1WPy663NCVpmg1NRSAYTETQQBNPNEXwTU61vgzgnKK8aVp8UXWohnDdRJBqKqVMG",
  "key30": "4N6qo4fePXChgMMmf897ZSK4ehvPygaAQCDyn98nZXFPeeDbgfPivTdfEt653Ek8pNVhemsPtg24gdLFZYgARCsF",
  "key31": "4EG3s881TeSgMsXG31B88qGMoaGwZViW18z86sG4yp6hdk8fY9ThQJjwv52QdR9LwyCyxiSHpbFhSNAXGD2MgX6Z",
  "key32": "zQHvVu1bX6Zd6NLFDueAsUyEUTwwxCaXCperTPEBdaBKANTfi41wsBdwUv95NU2z54ggRYJ4wpS1WDmRmJzJANN",
  "key33": "4Mxi6XtJxBu1Akddy7MWaEpMbuHgMCSZYV4gXvAriqBHsAihrSVbFE1dVWLTg3zyBK749X1RDs2Y4aF9vqok3oGx",
  "key34": "4NyESUUTEM3Kyf5tsWnNzx7sz7ousoAKWU1wisdAKT9uEzKvDijfr5Vrjg8UhLP9X9RWQeVvrdnyUDio3k4dWLxX",
  "key35": "3kQ5iTQXZqePYazR37sA2bst8audLfpUFpubhJUzd1fPLTa5Wj7Whb4AuQydAQS5vhx7HVmPm3MRhyUAcWeaZeGQ",
  "key36": "4EA7F4KSyjp2i2yRkPYnReXLNRk9qa9cDb7pAncU31EpSE91aMfmAVpkukpNMupmoBCN2NgtCfWQ7gT2oLvsLHdr",
  "key37": "5PDU1mUxkYSfLCLTwi3pW9H131xawi9MScRGzTy5PizMVbAaRxp12Vnif8PfVW8ifaPbH8ehLosZR1mHK96mbinf",
  "key38": "5uVACC1WezSrVrNPQrnQToiYsGjSArosQvoQvoGmiQfBHidmYEsFFeT7JjhHqAqnSYhfdjdkpS34qnM3rzGzGDt9",
  "key39": "5KeK2AgQghnHMzZ8prhHk7wTTHahx7E9Qdod83VJA7HRVPJ8sgTwS3rcd1aDjDRoaEwUDSgJqseKNDifjjfJkehe",
  "key40": "5vXMWuweoLKzWtdudLFHSiUeoUJtbWq6y5BofNpUe3ujzDjwtB7qcUX7ELA38mpXhJ5BE22idnPPUY523KySB9Cu",
  "key41": "NnZ8nmySkKiLRBjSCBoBidc94bRmB1xaRCFbJRAJSsYucZcdNMBdQEtCVJfXotDpFUuAewddwLBwCxmU6nAmLwZ",
  "key42": "5AkRWndwaxv1pJnh5zombpp8TigrchPnPM7PRiQ8QT7VXCsEguzCxkwzXFx8EBA9rzmdogejLaNWEJ2J5oLHcPQS",
  "key43": "3UmhgyvYjVcLx6uxCcPbMZsXs8ZaD9v82NLw39NGHcYEASk747c7f55Q3nu5KCDzeybhxkJMkYxFxQ3Uv7xDF4mg",
  "key44": "2LbUEbBdbLy7vi3Z3W9QjXAwbTGn4crXU2CMJKnKjL1B6HBRC3JR5Gq4qiBUARyBXaY46AZJAB8eTq7c2Vpwhdct",
  "key45": "5esQmx58XuvjdN7g3DpnWUFZys9ysW9J9mx27AhMgag98TPrGUhvjxUKpZHdFt1mUm9Y8pJnidKwTpgxekHm7X5Z",
  "key46": "Y8wcMVTNHMrTd6TQYbhYERwxUB15aKoQLbSmbBh98u3AxN2LRgbLyJ9Ny717WBDUBbB9JSb1X4D2ntBcM7adZfd",
  "key47": "YWPwL9b4844Y9o4dLYCrQq48jNbqEDGBULooqVCU5YoE8c6qY7cwCEZDTiaPz6bUtmiyDodRuBuf7ejtVMVQcNu",
  "key48": "rW3owGbojTez6NMkNNjWyXTTBHys134JqsRSWJ35vhtq9Qo5gCMPxzqkbLTKtsAB1WT2g8zw1PDz95nkWgmKTGd"
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
