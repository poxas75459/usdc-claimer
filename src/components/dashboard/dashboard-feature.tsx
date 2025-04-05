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
    "pkc6Ai1PCgSeHkg2QhMtwJjZr1sENpFWZxgpmcAY1K8W5bxRENhwCdLroETSq2cnKcUKFmRaWQexpgBGADZ6xbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJwRKVafUzwW79Tg1FfBzCXoamt6Hc4b8PZhzsi9XPzF9MdKYfJmk8TGTbBZp9pWiNWJHgQFYi8aEVfrQC3oqs8",
  "key1": "3aUehqfpMzMpY5zBaHAL6wQAN2RFWhAPdCPCax1RYaK1j3dr1HsMHEFeNqTatTGtTYJdQe8ScLSytkvzEjnd9oqd",
  "key2": "4eLULzzhpvQeN9mYN7dJ7f8rXi2U1HErLsnTM5uQ69R52p5m98nTXWEcsHFSpf4sfzZsuvavdisuepYbVc3Bx67r",
  "key3": "2uJ9aB2BrT7HQwWHi3tuCvwGYtVtLUhVbsfpvsN4z1SDGUGnphDxzpBCfKv6chpsFBkffuwbSuMZYShTYQjEtBWZ",
  "key4": "3mJ8r2z5hs3WDGn5YV442gsnuniXdNNQY4bs64b9o3RCi6RJ1uidaYyMBsQZF9V1qBmsV1RA3MQoi9BXytPt3i7V",
  "key5": "eUiznaJHv4KNNVg7BFVt3PdxzonqJX2ufZCg5EGkxunF8jcm7gBMYcUHJLh5FuW8YbipzrEZTKKaD4YYCrpkhbT",
  "key6": "2tuAGcsyFshgg4AtENzhyfjXD6z2uGJ3GaiYDXQGW7T1c1rtE7Rg3HriRvp1E7MhTCusKG6jD9ofhhWF4THzMMWS",
  "key7": "4PiSMX4DBdP1KrWfhigEVQSvicm1gTyyq2tdq2oqNqAEduCvTFfWVdQwBzRYcCrFtqSY7bDR1giPfd5xJSDvsv6Y",
  "key8": "LKQ7BtppWjn3Rr9VByCYmGwem6NiqxRmEwVCGVeDjNCpzbXcY1Jm3BVzQjsNRqNcWqko3vxV16qFSCn23bKwY9a",
  "key9": "2hK9QFDTJwcP6cX1URsMTi3Sit8iQb1KSRik1mhfRoG8ogRmigYutxrUuKvw1ddSfabZjNaiB9TMC36rDcpYpX78",
  "key10": "5c6bdsSaxEUvQr5xrDqC7Zbs2gAXqHKGPAsVAdrYU3aQUmHdLeSZZ86fowauh9ZUhPa8qaGgnyWFthwfGUkcG6Nf",
  "key11": "2KDKafh89QU5dZNEF88ZiKH1guSwr4TP6K3eK4H4LYNqk34ZbX42MDHkvBqULZxSmDfg9R414F3VAuUjaa8boXDY",
  "key12": "6vdtsvsMGc4iJBrfFULjezg1uNH32Y7Zba9q3TJ5EM52uAoqHwcmw7WA1fMzTz75FUhCjYaTCMWGqD3nxdmWMdf",
  "key13": "31ki6Mj5gd9PZpakdnw6xYuCTse71rrztTDkL1SV6MRJcYNBZRSGupt1xdCg12zx4TPvAtusVa4dYERpR82k3sph",
  "key14": "5tp8YwCrRa5z3STeDEjWVYYXh9AwZUQsozVCGeXZS4WJEr6AvY7SWrUaAnXrJuHD7CHoHWeNuXSc9rYjwYAEXfgK",
  "key15": "5T3niwjPva7kqYBA4iszZUQGWUXxoo1eZaTr5KJ8Kziya3wFfqXg72WFSwm4U6yxYKLbanwJrBHqCFknyGmzpQZt",
  "key16": "31Bv7PqruuC6cqNgs2AwqGUh6eUYC7kZgfgp7Vhs5viaXqCMCaWti7HNh6kvuXtPHHwVzFEe6KqjvxuN5wdexTJ8",
  "key17": "3BhjhGCYkKrytrN5Eg9q8uBS8tb5FW3UgdmSKWLTZCj1GEWeBX3c8nHV1dDkj9NEQiSaBa5pRxzCtxCwTdvKbxhH",
  "key18": "5e41fzJzuUEmQji1xWU8nrpTZbuEzNhWuLDqB8Su5JzWXJj4Kpb8Acowvr7zP1Q2qu9nBECjqEY2ZwVnE1dY7AP4",
  "key19": "4nMrcumqTAai2NjnaDqVQoN94acEu3D2vpvCSSnFpMfCaXjvZGAQBMm4gMTBaQaSkq3m7WYmQkky1ckm1b3GSxPB",
  "key20": "3he5Ypp1zGbEmED8fBjWqfvXBPBzZM3LsXGkskQ86br1LGVLaoamX9Q7x5UupqpYzLo3xKkYqiaX3KmSpTuxUej2",
  "key21": "2TxozATStPLML574ucq4BagCRxcP6CXoKUfTNo2wKDxKgJuKnN3GBzm7DVL5Q4734uKguBZa7FEAxJLidTs3559E",
  "key22": "56kqemf63Vh39sWDgSqeXEDkuNkV9MVhRRjLbfxCcTpSUycL9mVWsu14ucZuqdfkZBTU8PqbJQwboaGrxqhk9QaF",
  "key23": "49Avu8JPPofiUsfeH5T3jV3TPpTPx2DcWTpjaCR38QbbpaxmwDYLEoxWm3n9AiWRF6L6dZoadJs9CWt8gkNvh3e6",
  "key24": "nTg82dcF8n3uwkDgpq82F5S7pfgPJgt9oyEvWP9stC67HhJez7MfSmnNpcGbFo2bDiSLYCsYMsdVbFFPTB2ZjgE",
  "key25": "3Te2cfKexd4Ygk9njQe1tRDDCGJgHJ7ApSoprnurcsXK4gk31D8kvv9qiWYfZpJkCJdgSPNKsQz448Tx5rRRAUjo",
  "key26": "NBJQS4kdMfdudQJNh7vVKRzs9Sryci4Sme6fgHNYZvcz4uuo8Bw9875A7PsesKqiUXT8DQWCi6hMWBhpQfG1Qox",
  "key27": "2RpR5kRHUxcZJUfS6JwDfSrijwD2McVXTsr5a18J6fPM92auM8XevqJhB8uA8fLekZPLS5r5wiUZNacJLC7f7nEA",
  "key28": "3S5HR1wBWjEuwDMLBLHQUo4ovu7CbXXhCh5hdC1cWTiv77tDw7HgJSZ8LqnZ1GJ9p9qMeAuvcURatckeNw6znKKm",
  "key29": "4je82iBSVZwkaEHHVge61JxfkLmXDfVyMNwjxXs6YeZcsscSvimTd7oCgqGpZM6CFzngsk6eU9JDSRGtmxawPMp3",
  "key30": "3rHKRX21L27BBvTJrSg9sQyWDYCNYERVVcvT49ARgRd2SrpQ7Tz4dv3377NFn91UJCxpzWoB1hYU9FoHEt6e6Ygb",
  "key31": "49568NEtdEo3omHGJKCqqTDWV6utXABMqVqZZdZcPm2ASa9a2uMQ6sCGvphLfhrMzpQdGyfohqiACvenQKfNYyLz",
  "key32": "4w3Xfh9PoWgj5KPoPDSZFN8WU3h97YfKNvhH8cTB1rnom6E36THDaAie7wF9y6kTFiYpgF7aPrvF2JEmpipWoqH1",
  "key33": "38c6Tmppdc2PztKq9TzamefdG4UgA4U7ARArXntJhWw8xHy8B9yBXaT4CzZjGrZwyCgtFcCYcyXhVr1XWRnUEMTs",
  "key34": "2i1JbaLNvg27zKsuuaavZCds4xC4yZDeLwMwTfehgqW6xcb2vWnjCLn4ygdPiNc7GGTDkPgz3uG9d9wnG4fuep33",
  "key35": "2tmbv9YbByhbXXomYpKPBAW6qb9koLa1vxkHnyoJKKCgNN2FRmqrzcsdsXbYKppHSANfxKeN4m6HiU95oUdyRqi3",
  "key36": "2jhEyyoDiqd8XsWJbbJduWn4R32bvxtU9XEBARtYSzYGo7PXhs5bdY4ErCHFGrbA4qHSNpywBgAJZaZGktSwAmPf",
  "key37": "5QGh585ShhDpQepzvqFZDDiNoGfPCDwqE68ngYSkSBrB1Ud1ZM1Fv99Z1EUbyDzBSjZj2VhfqggMg3yPQ9cLjge9",
  "key38": "h53L36CVAi8dkeuKm8zFNZdFR82KN1LSPUbjL8hENdUSnJpGvw3NzBHxM22XoUNyCKPPAqiueNYSN9W9CwiRtTX",
  "key39": "5nnk3LsDrk6fTDLKYFdW6Nw2FGFxkKGGPTVLN73ES52d2LFEayBs3vMJq1MbkkZnaWU5BeWrnqtZTzSVkGUoSLvH",
  "key40": "duCRxRNpuoFzBL6Q9kyBXATEdQKrDwLaHHGUgPptgNASjk6j8T8L4amdAkTAdWrRW39gGLaKGSsAcBbGbDozvFm",
  "key41": "35ePjSx4VXmiwSbw7QFysx2xY6yvGANVqtEonJXuZkLbtzfW8XnNES4GwB3C72RVPC3rSec7BDNEPn8JUSeDH5DB",
  "key42": "YEnJNNhzeeWho4UX4okCYkJ1mHj9LGHQQT9xJPWELsp6w6g337LBiENe7EtK6iJefKtyU9wUDvPaSZpaZjvqM7L",
  "key43": "4qXXRWoaNQKEcJd3oK9eWoiR7zo3jtXEXoqZEaAnjnHbVz4ptev2EavBsqpefE9TufLWGBrKGVBcnScjmvXV5Jt6",
  "key44": "3st6nmjH2UdactcRgLfSxKM2mbzHVMeNDz7PQG6eEPDLuGY3XyKTSWxqjHG5axcXF2MtDX5JsJUMeahCoutLhEsm",
  "key45": "4mER1heQ4NMQX6gBrPq37XqXkXBmZAUHZZdsnT7WQPQpr4Sh5dkya2TZXrgytcBuEicSLANQbkGbtiakELLQEZXG",
  "key46": "3qp4iir7obigPxF53PVQVsgkzTrq3BUDFop3ZDC51iwHPJTMBTbvwTsE41qTAjKf6XcnKN6sRMXYbYtzK6LYBgqs",
  "key47": "2Cwoaga9RaHP45yDiZkCLM1r3A4TBZx2x75icMPKKojRrTbGrR3zhgqUyoFtGuK3x1Ey5dWioCXA73Mzw6dNwLmW",
  "key48": "55JBE7xx88Rfr1Mq9nHgCM115r79JhwPyv2aetUzTy6cZdXEtvgWTbi5cuwXK2nZtd4QQ8QYodHGtmuHpD2Ngzf2"
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
