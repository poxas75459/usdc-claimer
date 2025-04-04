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
    "3pEPv7PmTaavPzBivqLn3RRwC5rVHJY8aGvd2rhkcgGDEFiE9BB4ozRM3GtaKZW4ogDVxwLkMEFBn23f2eGNR6Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LV5wphBThwfpCgj7hdAM45C82vQERaM2T5HoKCFYFu3dW2g5g8AzGJpuDi5sZoWWvMGHyi6poryAEFAtoosYJj3",
  "key1": "5fqhQsGn7LiZPzsJuL6jPtTm6aME7sdR9xgBVkNZdkPDSaNvmi6PKFngFWEx2vfrwZ2eHEpfUKCVDkkVwhzPgnk3",
  "key2": "3CYato2jnpdryDgfyVUg8z9GHewNxnsVKnC4jRd7SBNtLdytJdiMMshF5aEP7tjbaZQSGk7jvSe9bQMP4hjXF4KD",
  "key3": "4iYJxWv2QRRyN1jnmPD7a2Wit9qoYyzUZNrH1ietEe5dSX7fbcWyXYg2b11jSiu3j9BxWP88TBaUeXPPhjnhqaB9",
  "key4": "2LJaSfsJ3kLyTY9cxaNVQpW3GnRorEPUWWBzirZJh4ogdkpsZnXmhQofn2BENhEPTa262cLf6mrtuvnLpTK8gzKW",
  "key5": "49fgdxtcQfxQUhxDPi1JA1TQvGX85XJGDMhcH5MhpsxCMaEx5EtMnumqWrAJpYC5DpApydFzW2BuDEjzTzeJDPvT",
  "key6": "2iGUFpK8PFyrG7fmChYjTehGc5denpPmR9y9Rinn8q83tKZmjRzDEB7Azg6cerwJhugnH1fFFVdFvu2ngiJy1Fkn",
  "key7": "4TxS59XAqCeDmMcQbjpYwxcHNr4o6GzD7zLhHRpKrXTqh5dRvDrQCsiVo5QNcggs4XuSLvvmnKXvxuRBBhDXckA1",
  "key8": "2xMYUQDS2GAAcmkaHhVi54W5hKYv6tPNL6QbZuc1s9q1TbYFZGnyAGRkB8HQyXTvxUa5gFeXFhVUGnh3utUPTuQ9",
  "key9": "5PCFpd4XgXe848E3zzXQT45V4jmHYHsC6qP6cnyoQgtHdC3ApjWKke5DbQ2Ks4tR7SNJFjKR6gj9co31VKXCZHHA",
  "key10": "7Y78429GJaFX47icxPQpvA1mVfCQshqLVErsUgAcQ5urXhvGRfXC84QE6Tv3W5q6CTody7UBLbFhFpRuvBgu9JD",
  "key11": "2PVefLASV5CKLWBN6kh2c5QRfM31CxULCjUy9jnANzA5SkFPkcGYUqY9GtPLLtSkusCigYS5hxNHhRB58uxnmWtW",
  "key12": "4vpkuAmFLBuFJtFsMx24hzV2JRrrJ4MgMZXbjAegR16wjF97WzW7TFPLKA58wCCMTnh6nqnG6kSVMTXoVPja8zrz",
  "key13": "2cEgND8KWueSbXDWwuYRUEUkQD8UbDLckLJvJ8FUcLncXpiUc5z5DwUdpwxsdkB1S7rXDvPT5EpxSMAv7dUizaU7",
  "key14": "4bH6oasux4Y3P2tvYiWperkfHeLTbN8iTBQxDMhQu17J2aJBs6uLYAnox7ko43CV7BMgghVFzNJx8cAFJAbszQHt",
  "key15": "2mprdyzmom3czrWniKeYF4GETi73H9JY3RhndtBro2Qjp4nTSaCwG7dCKYcgLxB4QdLYsw2ShkjPqLeAQUVaUHAz",
  "key16": "knvowkWtCnPt4ppsM173mZKGWTFcYrdYJgdpMA55qB8LHAhQZUhW1zjAnaioyRVVoP8BJJNQ5ftxnZiji7mZooK",
  "key17": "49YNntgvM45UmhMdvuCQFkhzpa94baXbC68FfpW6CaapB9as5m7QUuixJA84crg2kf4UV4HZXGiBz8N4667Ufc8",
  "key18": "3QxFYwgF3eGkd2eoVFr2JuxKvD1tBfp5cbnVgir4m84tD6dSY7X8YdnTErkzJWin12odxegaQa6hngihYK1jNpXs",
  "key19": "3Wy6UPtTZKviPoTRYAS1h7ePYqXeTsgeZoJ3qdbnBZJ9iamkbi3srzqx7KRzkLSv5T4eLK2NiZzP6aHaMTaHozKi",
  "key20": "3zAVFfUfenUF3C2hoEtkKWqkTVRY7hkDFxGJg9H2vYKrkg7HP2MA3TVKctoLtKG5s9Sr3ZmBKHcByDTJ4WcrRXXs",
  "key21": "5da2Fg28WXdN29SUm9GfN3mevZW5UPVeVazgcao8HRo2v5LG6wzE9hHkryiWWgomeQwq1g5Q5UgB4h11yUdxTdzr",
  "key22": "4UqAcuvvPqDyh5Zoshi6ednGejivpZQSMpH5Lx3s1WUKFwaLhb3R5VFogWoFEo8rS6MuVfCPj4NF4xLhampejXB5",
  "key23": "57hH1Gajo7gxtv3XzWSmBHDVoNdQ9vQfzdFudxLRpRu2QeBe9zZbXcX9SzzV4cEtnpk6yZ77ogUBh9Wefotu9nss",
  "key24": "3tsSnirGjBkCTndNwsxsFmr55z8TeP52USXr4FEX1FmBWjMULs8utsM1Yg1eB87BwjquBKLG5gQ1w9ipmfttm9cD",
  "key25": "2JDTKRt3nxHRnoTFAosoPUY8CLXHGWLxVwxbT53j2mKUdUDcUL7g6PW7GKZjn7oZKLzaRR6jf3PBvzayV1fyYeXZ",
  "key26": "GbPeSYq165uWV1b9uPaoo9Gmj4VJJ9BLqdAYFz2t9y1rrGpwLj6XfFs2dYXZZhTgRv8LsuymyXh1SRLjxQYGEXo",
  "key27": "4u6jf4KCbQajHVqN7qV7HDKr2azTYTSRzTkZzygoGuAe5KhQ9WtmmobeJULNXCnet7HTiEMbmnP1yAhsNmLrbSU3",
  "key28": "4tQqkwpHwAA2gipWYFyUXneczbJnyaxzqbsJyP688PMDoDAvY1tLhmzVzuLZQKCqDvMqYGgYBu5AJsDNkydCsqNZ",
  "key29": "eXibvvpxBsRxnC18cxdK5DvnGgnhxwi61e3rc5gnjU7HEwTXjf5Yu6eugbzfqhhXnBZTuwwqrcefm5rzNWyKkU9",
  "key30": "67Fmcg3NZzGK949YS7cDGcpCerrJph9mqV9ZzaNQwNkVW3YtkNybaqzYhk6wa8HAJQjq63gxzJbrimXEVMgAJ2Pn",
  "key31": "5GqVXXXZaJgUw3zaeFMxwdv2fTakcHikjxkJCjsJDiLA1qpiJWb4Cnq1VDzmQ3mfVyt54t8ayoERamhu777oikf5",
  "key32": "2mSxEbcgvpJJpk6KZrFKfrGTEwytvJ6n3SbWtWhb4ZG3LFTmWgjqybHFNbU7ZuEy4nGfGFAhUVykVcQHXeAArDXk",
  "key33": "3z2a3kQdkCCQu6Ma1VEienF4yQ3wWgtc4whrYV7Rumh7cHKVPMCx57S4DZwXJ5St6ojzBKctGKxkhDCB5FSukQm3",
  "key34": "2b5qPWZ3sgziFR124ujfaKD18J2E1VaE4bAy1MdZa54thrEkHBV9v6ufTa879xDtPVQ3Dpw3izLqVCLw791wX13y",
  "key35": "32UNGa6qZG5ozsf3Lzc1hey7SqXC97rqPYYGx9bBszQmVaH2S8SbfeN3kfP7ZzGXnh1mw2AZnCpAngn2yHcxc5xX",
  "key36": "asecYtC4TFyR9BCkZpufFcnnrb9XqtvFBHqYw5DsGTQuAUuhBAUU7Q2vL2uEiTJP6F7wWvrCMzPHVGH4hiJnD6c",
  "key37": "3xHLkL8JgEYyyvAE7RZwk6qLajEHckbvzZnEKDWMbinH9WcNEETUdh92TiQBd9BhTTV2hFwwAf5ZuBYrMcSDLzGm",
  "key38": "4h66R7SAPm9ZTwWspyEEfhmVk6EFVJXh3gCuyQnyyjUUatFPZiRGTXTp5XTW5PAMbzpojUVTkKGEgjffmV8prZ9A",
  "key39": "4VjSjsfqCWpjeHr45bz7PSGZ6cjxwzotsRqj4mcK9gPF9GypptrJUutzuHBuUZqzXk7XbEXcKeEcjKWXukn119is",
  "key40": "2LoT7sBBZWoKuVc3BSWLJsEJuVbzpwJYwrqpsmaQN3Q8zSgnfGTXLJB22jUbUBtdQuTEuWtMv4862X1oqrsGuTxS",
  "key41": "3vs8twAiWDja5E45Qa2oGdDoJRo6qZs2XZjGmCNgkWToryqEhyvfn5GzbX8dKW3ZfSeuEbB7d2YHgVkVKaqAf9eq",
  "key42": "5Gn5sDuFkLSHtSX42jG6ZDUUVVkHXkfaWTDFvGZEAJzjfNpYgp3UpA4dxnwzHqaC6Svy7V1t9L1hdWa8wE1bdSpG",
  "key43": "5PH8H8mxHooa9iUUiXu1WRC6E7HMeFaMu3XruCDqmst9du7NFVzSswG1ev7ede4CzEWEkVk5i4Lw9LTp8wi6MwV8"
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
