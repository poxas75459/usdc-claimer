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
    "2niEzfPYAUdDLZXh4bQL532iRyK9RAgJgEenh9sVzg653dW1yzbhKKeMv9a6FtUxJSSvjAQxbTBaSwRWtGUVxzRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCobdLbD2UfuqVuxp8g3KLdWmAv2jqy4XFKoja1x5namFbG3Vkgo2HL3J8WnZjyi3WnZtS36Va5h4AxtEobnPap",
  "key1": "DxQZrztkW8kmV7aSiPkLCkuwrawmFZPGkZurCFcqvnTkzCEmdw4zecB6K2dqt15Pz2KrmDs5Ltp7QesVuscKr6e",
  "key2": "3p2fcL5mDppqu6GVGi8afxGFZahCMW4RtCjGFpmpVFuStYBYr8KJPW3K2vHwzZWyibdeG62Cdbc5xn8K48839b9z",
  "key3": "4Kam2wgzJDpegfN6cZo6jZtJbZaK7cU3H6GJ7dv9Y9aQBST18MgRnU9HTCE4KwT8LCjPi1g34JU2Ej62Seb6hWJz",
  "key4": "mHBXBTMYQZ6X6GU3eKd3b7vQduoGvWbZABF22SgWpda8ERsFSSFM2BAwWvMDJau68Vs4EDt3NiQVUKsydqWTxBy",
  "key5": "bctJzSQbF9bDiPNUS9xuu6MxMGVeyjiWEgLzj4Ssj9MCmYxPoijRAV3CxSqXJ1nBKtojCCWLhLFY3qWgFpZkuAX",
  "key6": "67UgSUzxrGbrs53PkAUHhevEP2hFdvuCSs1kJAvDs8gpQb5m34GxSdMrTvpBwVkDmGyDaLr2Ew2a1n4zFtB58Yqf",
  "key7": "tDhiAfgadgCTt26rrtSojQ8kSvW79AU1wShz6mGaqLhwG9aeuoGTHtDCKmBRRZfNsjpxNJuTgzStPCYFzEBbaTN",
  "key8": "3K8dzrzcZJzQoSbe1uKmhZ8xHNAEVNwZQ3L4QpWYz5HkQ45eUQ2ZfdBEyhunvjJKUT9pK1rSRJpRHWfoEAdoWmNt",
  "key9": "2bRpXuAseWs3M9i6HNMR2ryJkLnazsxqwKys7tgxMkXqpw4KKDXDGzdD5exgSge2FGpKHyc6hVzr1p1SboFRQkye",
  "key10": "3TriB6mF5NRe98BsA24FHmRX4dSfSqV5EBE7ksdV7DPnfc9qUERvtmj6987fBrmU2jhFsbeHx8jPk7qUhZYRcjZB",
  "key11": "3X5SHB1LRBncoDfZEbWfeqijcVjvnYEwjj2aXRKkrbZQM5Gen4Vg74QMaWNqwejbnYU1wVdhbUYq7kGxnn75ZEAv",
  "key12": "39xtNynWjHH9ZWjkKWSwP9CAH93mPBScwRYDWaB5dU8haXosACAxPMaVuC1sq9zY8VHNyxUAMKsmYopL6gUfe9Sh",
  "key13": "5AP79FX1hwZzGcrraE4EsFRuokmbqMiu4DwwgShtf32eBVUzGNa2hC94oQXuSRoZYcsmvSL9cJzuuHE3AtMFUDvZ",
  "key14": "W3LXQuYakQKCa7roHBJqdajfYgNfd6432KxiiEm5V9z64ynCjJixTM6pAbguEhZqQbBRgvUzN9iBa7NGCahHT7c",
  "key15": "5d78Qx452Wu55CpKxtWViJj4Tyac73F88Rr4xnd1CNeN5Y6Tc1vNw7KZp6QhrtrpF4T22Vhebap3yUxauvBQ9kYM",
  "key16": "3q8r8LkBvk6X5TU3XSBxcP1P7VXoRtzdZHj1PsnbSaXk83HLSGor36gFHAEgq8UAGXXdDJZRyQx63ezouSgvx1c4",
  "key17": "3tEHeE8ZSYmbCXf9oWS4hUtyUmiQws2aFfVBERRBZef3uTGcQ3mfSnJkDhbyWrvAEw5YBVdYVbHMGWMqAt3cyj8A",
  "key18": "4xbsVgLbbYTBtRvFYXhPBfMCWP5M7xNCWZgDxjdyKALvPQTSi6wjmbcXzQGrR7NwuB6KckzjCTS9pC37ksz8RftK",
  "key19": "2FVh5rH4hT8S9fJ4rXoJaSgi2b6pC6RdkokWAQmHLuEde7MYeG4jXwyWwBQNXPpraESWy1RW2QpJ9mtLkvLuivaU",
  "key20": "HZzRvqwiLX6emU49HMTed1KzCedcNVA214yAzwxrZnVN5jPaBemSmFC7RoaZFkLypFTgg3Qv4ecRdAiZKfHK3Xy",
  "key21": "2wts325pzU8J12KhvhqRQ8pcYd25n7XyVbqWi6mht6rNtCv6TNyU9MX5vnKJVry56JseBhMxsz3HsV29kanq3D8i",
  "key22": "614FxxuxsAgzfXW7b1oMCnR4Uw5TXkEgniGT2vtjscTHiovVEnxYDJUbxvsmXrtcuAGRbLBEwtjKhvD8nod1nxd9",
  "key23": "4QNJeMTfVy6bnCJA46mUuwJqk54jUv9j1ENHFwQLqd2BUeTd1ErU2aT1sXwzw9QNvk1zSwk7yr9uVJySk8R3LW6h",
  "key24": "ajrswgJePAh16YjsEnDwP5uZtfqhhQrCpJ9Nu8mQsRKG8kD2JqJrBdrnZA6WKmFomGQZKysTiCfHrzCQqzFHhWz",
  "key25": "3p519QpkoJdSXCfvchXMpt4QW7Xf2KoLHft5AjqLsvFUr9vwMUwXJYSwszkQrtDfAkjNU19ipyTJDyaeRJMdBids",
  "key26": "5w8LDz6QB8JwkoFDv8g1Qz4iweEqvB1Twdu77o4YHcrcHURCjpuXxahPmeA4cANjhjibE76mBoMTEwkYJAgP7fZE",
  "key27": "4YS1tFbQ1ZnBp44ovk8ebGd2NMFTmB8YYYX7rrNfYkrjMML5UcPto6FihnPeCsMrc7DhHQy414y9Htps2HvLXQze",
  "key28": "57qKXc2SfGnLBEkidztspokkuuw9UQQYU2Q33GWaBQ2faNuYLF18HbtjrGtgEzPohE12MTsC9garcGHg2HRtibxe",
  "key29": "4Y4LiYfxAtejn3t195xG9npyEtfBLRmHwRTSThG3cYpt3fXUmvvLJSuLCgBBs3ivZ5eZgYbwVRyXRUCgfciW9zv6",
  "key30": "3FERLbS5pYUC4RWGS7waSHqDAoWnTfZZtDpjo1n63fVBXoGQgMpqJqfXeCEqRUozQEjvLghU6y4RPKp6ChtDPSMh",
  "key31": "3LNJTSg5nhL5EeqrHPCxus2GPQfUdFBnhCpXQUEfdyobm5P7JDwAmrL2maXK2fUAy6KHQxu1noCdjZuexoMx24zv",
  "key32": "3cei6Bo9GbwcPo6tcgcxSSwx7UWdbC3vTvhC8G7npAfq7DNBXrM1ToXGmz7K4V1o4ZpdBhQ3hmCMfUyr4EsPSFGk",
  "key33": "27nsytLjFXfLu2nuFuH2TZA7PG7bNGPNBVSQHsK8FHfkBBujwrrnRmauRaRdePjwnBBavKV2QkqzJFqxoEG9tBmJ",
  "key34": "4aokZ2BWoo6g2iaBp9cvi3mA7iYniTTazNqLYTCHVsgkY9NEjvQuwmJbWwoaKbfeMpfUj7WgFSgykSd1P7dH1Bai",
  "key35": "dJRB1mpkms3NPXmr8rqS9HtupaRwq5aDscsGadpJRw4LknBrnv6bv9DR9szD799F1RQXzPJg8962waUbM8nndVW",
  "key36": "535LTGYcUrS6jhTVPwEiGeHk6GCBxTCbnBi56QXjHQ6CQSXkSDVjn6pK1P59W2yuTu8ckS9Z3MNvpXUMKNeyEyhD",
  "key37": "hWK1QEHAASs4X6RSyQvPcLXVfymPrhtKd83ikve2aJVBZL4SQSaRC3gKRyHqWwmb6ReX5WWbPWr8yxXLbk8UQDN",
  "key38": "4RZmJNqW9tdc8sE1FnFcLECKQCaSyrYxK3mZVawyMtHhhg64iLxR5GBAQdpNpkGEJDeJBBPrmbAecJBBnS4BDNWw",
  "key39": "2VDixMuwjDDPAKVEEo5vvsQEmXfHbLDMRWRejqcTAVJSULCngHVTmWz6j4iSe1tGG7RWKhhWMLnhJ7Q9xwrv1JaZ",
  "key40": "bAv32ShhVPUvZmw6y6UyhXLhL7Z5GeYgHenboBviiS21gR4MX4u2TMAdaG164W1XjEQ4fef1QNhnqb3oZFhycrG",
  "key41": "2mE2Vz6fTPS2XEUc1oiomDDK7UQ39TRv45mFssfC9igKtbZHpmMHz6ANasYxr7BGt3MF3mzT3Zf4aqG5TTPnKCc5",
  "key42": "2ABUUcpJEaES9TXYaqeGub62rNKpt7aa5YtJeh4fyKgqJ4zDH2j8cCmqcMsRTUdrL98bLnVscAoyZMiZLJJFHWm7",
  "key43": "5oHY7xNxvG8Jr3MpT5ousa18iU9CKszsTFNJyVF8zxKfmVU35QP5ZLSSEmim31i1KKEooSRvjSei7ChRsW1AoB23",
  "key44": "5xxFfWkRTVZVkW4itqgY7e2qgduuLje2oNgT2gBQ91hkR684ia7TDCjFQBbsTRqnYvqErTcJ12Rk7w1f9NX2iY64"
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
