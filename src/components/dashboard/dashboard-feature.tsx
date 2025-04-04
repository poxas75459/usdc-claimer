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
    "5PY7NFSnzsTqMe7V2jdhyXwRhEqcRVq1NuyNAGzpQzEe7okGgJeWGmviGNComW9hSeXirZLGfXotsBQZzRWBvJjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azQyLYvNYwV75PE5yPWRvQtbwfHvovcmcjDv7UaTbetw19UqUqLayvZrswNgg5MCVCJwrYtbgEBzaQfCXYMFsx8",
  "key1": "66LMpvFNidK8VHVXiDsb6rPUacHUfcHyvDavCavEnMaGeThBwVV3GS6t2Qdq27yk4pj4Thsk7faaop2N2igZ11aw",
  "key2": "5qJ5JvRaCcoRyF8FWo1njHscsVWgBtN8xd31ePRnrf7M4sdJW7gRWWN76cSadpGGVnkKKEybBphtkNHnRhjqbHmn",
  "key3": "4mdNJCrSp9ENFCV3aAshematqx8TMqZmfc1KeSJQvxMakRVbahiTCPxqqQi1K6ZaHR1YEz4v6a4M9esJfKRZhRjF",
  "key4": "3bfma4TBKLb7Uo2YSZUvPkDAKQAp3eAUGAP9xTxMHbTT4Y6exvGPxRR6ZF2PVY4QkihBCh4jRnYhrA9AUceZ5KAz",
  "key5": "4km76ETKEwCJJ95RPFzWaKGWgyfq2igEW1yHhTqdLahsvE8oN3xVtV7GyVVDUPtPjkGz8KyvicJKgf3F4gKiG6Y2",
  "key6": "45bNY228UowAHCQ5c9yHpgvGrkAXujZ8VSJWLaC9983yHFDeDzsRJqNdah9NYZH6Xq3iV5TYqjSPFwPVnWV3qULQ",
  "key7": "4DCXdKmCatr6maG7gAvrkK33PmmBxwNEbsE7fVDu4tnvw7nkowAnGZfLEM9mokJazzF9eJHFWGrdGX4XASK8MUPF",
  "key8": "3PM3ZSw9azM79mcEgUKemL92bUs33AyChTdvzipiDTNhXGwRWJCxcj6ocPaESmTix5Af7d4yeTfR6oVoKjXqFJm5",
  "key9": "N6eQsuvbs7uGmDiCcybk5QcsAD5tTMqFE6yuVBR4BQBAejZ3ZbjBJwXZRFv7iJUStrxg76q6mb8rQZV83dTkRMF",
  "key10": "R4dFh1L4oSpN2i3ZEQb8viTonZhqam9ZeHFT5A7PS1JF5ST4vRGZz4huWaMjgA2gCeni4CfaF5qE9nr4JmMK8y9",
  "key11": "3iCGm5sbTTfZZbgHkWQLfZjndXfeFq6fWC1knQ1No9HcpyGaxaqW93vfRrsLb2b12qrxzvwyPjZQrckJH2MAM9p9",
  "key12": "27A1SdzfhXi5FBcKVJNCiTsYrzUx4FbEfhR9r1Yo2adK4rzSagPfDvdxLVUdqnPjNeiPSQ89waDfwFEyFKnPrTgb",
  "key13": "ERkfrQfzy2ddnvhy4XML5RVEr5A5Ws8ZCPX6gvJAbrkwC5pNcMyoZyU3xvUWrp6LKCLyCQyUWpbDn3p26T2SCeG",
  "key14": "S7Nxf9WA3j5h42XWfgK6Fr9UjoMNsZAtt2mCs6FXqrdd3tvmWZikzhTtVhZiqgLBJBhs7XHkHY4okCteuFTXeuN",
  "key15": "fC2bLrBS87TFJV4mC8s1pbz7BJqkVX1QVqhcRc2D8tB57eaKyQ2ScAehoxSS8wkXnTx7Eb5GYZQahZs3pfoUaJb",
  "key16": "36kzDEiqmJsoZXDoyXiePq4uRot6r6F3vZA4FqocvjL3BrQFc2fUWQzt4hFQb4zxBCdaNwwF5inHsdFDpPbCD2GY",
  "key17": "3WnW5oAwNyfuDNJxHhBWGEQQ5xspjkCicTue1kwdjYQYmts8q3QMz8rxZhkFinANbhVvJqvifpLg5MDr1qufAnos",
  "key18": "9bP4JrSK3vjTDqyA7PfAv1kydhutzL8iEtRcyz3nk3tjABz3Ga5MAJAhPb25NyFTtmvNgEpvXkDDPNe6dqfnQEt",
  "key19": "5fuDY9c5qRtYHfZvs9KJMbfC3PPoaRW7MTyLa9BzkaKvqz1FErgkpD4b2AvdGGc4mim2MHVqjh84eW4Ykyu94zrF",
  "key20": "5iqurcQTTQJxWT9MeN5kgHarb2GLAiGE56T17pTj5pjgmGw9MZKE8N6NwJ7fFFSBeZroAuSzqwgfTVKqGsWrp83q",
  "key21": "5cbwcbWYX4tjrfUt9Z1gbG84SsLcoY7arpotMYsMuxMsZb1YuGvc62NvDNXSpQfbvAgQZzu1ss4EbRgK6BBrv9N9",
  "key22": "3393YMUDTWFLFUUWWkrPApr3HzYQHcvtatL6pEw6krB7GVAsNZQyfzPjdarrhxyTJF2K8N7apqT8Jice62L2Xqhn",
  "key23": "2YLgrPFJtVzAU5TqyBQSPAQ3RSWGURHdP4aA21WXuS8wk4FAD8YzgrnjG9R7LE24FfXC3WSrvUpz9mTgv7i3Pbvj",
  "key24": "2eNkWyqQ3G64hdAQ2YbUKb2cxEgcr6aXLYZFaTjZ1H9toDxBPjbCEbwdcbxT6vgSPEc8RdBn9AhcoXXcJ2VqXshE",
  "key25": "3ye2f3RspQ6t7nRhKAJ3vuESArZLR4UooYviNv49aiwGozJAXUHgrhLE3C4VEWvJqMsb7NdoRZVaMCkfv7gYy9pE",
  "key26": "3NXk8yjqxqFDpZ4EAU1LNmdbp2nKzuF8z1MAMQYW545De8QUWrJQ2sfBo99eDgvEbCqZ5oPpqbBnxK2VjASi3dvo",
  "key27": "42kmiVkRZ557Uqsxidp8ZqYkmHetCRGGge8vG87bMXqUmamFjqvrZxbL2qYZKVPckU5BpXkuSGyLP54Zt9hJBTPY",
  "key28": "DHiu4hYFX6HRQivcZDJqqMuTHza5w4Dc9QtKw3YMvbZRoDWrcrtYHqncp9PqysEddne174XqqFysGaJb8ommaSb",
  "key29": "3XU27LE2vWfh2k1S26jWAbNJMLzrda1z9tUgZ71TQjYZoCjUBnUeyhbZP9cvwBWSHBwU3M2kLgjfn3QaBxTPmEJm",
  "key30": "63ED2Ffx1QHp1K6tyTxmNBXrjSNPyKGfNpjCfqmUce6eRWVZWoLn4XMCwmEpeGgPUoMBwdTPyUX7UCVRS4ppznJb",
  "key31": "2DihJcedvccYmZtfk1ggGEYhLSLnUm6nokxtfYTHwbKKCTBxchQekLXm4LYS2eb4FqySwsaaeubFUsGxXweGbf2G",
  "key32": "48YcrfrWLTzo6GpX2QxJK7gX865v1Ppsd1GvDtjpJaHDCtzg6ZVUP4NHRmes7eED9KENBNY3dcriQzLeym9JeKfG",
  "key33": "5ZeVw3qHfXyQ1M71wn8rnJe2XCfgvLfKvT5cHKmr4cDFMdjVYtwyJXNZbTnW2dRSX1GxiHqzgpy6GrmVeK71VxSh",
  "key34": "2D2FYz4dMp8czf3r9ExpePqxsPL36jp5Vyae9jDoCAgnsghsiBoU4nwSWKJ72SVwynTuwtvA7M5GMmsHMt3UyDHG",
  "key35": "5Tq1qfUrNCr392QPpE1AtwsBeUfSFzK3TGyJ79o8dE1LD4HniU8GX69YUAcgMsMqciiLGo9j1DF6TTm5TS5CyTBb",
  "key36": "5VK1sHpGqoUEsJwTVu4UAuMej3wnkN3Umfr2asMWnzz2zRA1GRnrNVvkmE1TaNkZuwUFgZyVWTjidqtPT8hM8CG1",
  "key37": "37a9KPmDVuvWFgHHsJjDb8jXK9wMqoLxAo4V7FRFSM8k77C4z8P4cWzNyf6vZeaHtDS8hCNsbqePPCz1BWxkTHfy",
  "key38": "4bCcdoDhcjZFgPpZmfxNT4osyUm2tQMkupFZDct14Vo8ycGf1JrcQTBhsLzqVirdJdip9oMK4PWgXgXSca5M6FMj",
  "key39": "4jas7QPkLCmrDeHKHLMGp2aeTkpwUNgyKeSTbfV835pAHX4NT1W7RHXpo9xY3hbuaG81KCTJQVH7M4NzHkaGAW3i",
  "key40": "4WFqoYx5LXmhJXe8D6yN6PEDCkd1F1kSnYZQLR4GYfZ6W154pEue9zE4XdHG93fGXKUAccVPFwjW5eJbgzUTqHsd",
  "key41": "5FPtnvhaUEakbe3BQbEfTk9MwrrZxsYZ4Ey6ekZTmWW5WzsNg6HUGgrFpVm2QmgqRibuD44SAKPnvb7y1VTD2RcX",
  "key42": "s8yCAEQo7Y9rggc436tvRa92gJMPoeRfXQBPJLAG7msBhrFN1QNQ4NzoMbA28i8wDkD8tvLvvDGRLPSo1iYVv9v",
  "key43": "5XMMzjWXWMr8w4hQaFv8fvPcAAPJoxgXzYW9tZZcZgpmEkMCMKBxxLDcWCunCBDCzuQd9nfXL2CRtaPKqf35GdiF",
  "key44": "3uqvViUqX2ykGUNikr4j72xPJdojzB7ssh9hy3MAbVY7SdrDYxgCPW6gJ1sJdfHwtk1J21hMPX5RSRZcupi6LsdV"
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
