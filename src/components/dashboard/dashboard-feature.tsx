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
    "2Ld7PKYYXzFDs6tbUer7warWqVWVwDhU9pBSHG9hwZTmtG4GZpf43AhF55LnzPYZ7fmeWcoxwCqspvP1Ndw4xL7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mpP66CoZYpmWhvQsBefVRAtUcx7xPphJvAMNQPdKYmJP6gcWtvCc25cBTCE595FnKTsKBvV8e3jo8bie7mLMSb",
  "key1": "299yoCqBvRst5d3NB7ptkZ8rJAbyuBCdvJJdEsRBJvPdpR8tg82dX14PStSes2La2M1KtdCq96Zkpswx2kx6EfyR",
  "key2": "28izdqx1Bpq9Zre5NaSH582RyVKTHDtdzze7nfKng2bivM7uD5EynV6tStFcpMTEhzzCqrRgczBeX2nxYjjBie1D",
  "key3": "38PZRnYPcyAjCghUXQJSgUsxueVScnkGmtzsjRXtVe1oEmbLVzcszVgd4DWuZ9FsYfK5v4wJfngRWsmqrke1mpfG",
  "key4": "2qDLskQgFLDvK2RFZ3vvNszqdHkiy33X2v8mSvSWRZ5iPMS8CPdHYr14sVENck2u6RqiZ84KGCk5ZeKvrkQGnpQ3",
  "key5": "59W5noY8aBWpxoMHubafNAjFfqKasu4tPNPaWjjKDWzD2YjWn3QfHtAEbr4mE5YMyYKmAyP4URJDQ5KBA1ByFzrk",
  "key6": "2hSsvZLQDGfF5MaVQUSddSM8UrJP4u7UiyPU6hmQB8rfbqQypARtDmukdK4pv8BkJhbJrUgYNQutMTmMNPDF5kyP",
  "key7": "2DdMDnFnr9g7dK2dN3E7eQQsA3e5xE1FXhy8Yt1Dwxitb3e4W7C9nE7SPKhbHoa2jq8NfrFVt2Sz3DCcraoyDbCT",
  "key8": "3ZJ7YXBPq22VMoUhS3xsRATnDqZr5uvtVD67SaTTBRPFqKTWwapH8okcYdjv8oeWN5gTwKnwPU5gwALYtDx1Vyfy",
  "key9": "4HqeUUJd49AKLCrDd6wfYxbhsoY4tv48RrHgz7ZMLJSbTYhEkFqKyJEz5xvxMe7LRVfBUT6rWHU8gfAAd6MuRf4G",
  "key10": "32naGdccSfRhrdXmueASLT9SDJcv2FEDsF8WrjoiVLQvnkdwDVavYRrRHQ8PS1wp4UPfZPNZYiwFuo6pKKF1mg1B",
  "key11": "3a5ZmdTKyit48db5YPbUYZbh1zZgCAQe3uyyLaGs4A1NkXDkNgm3wbiVkXMAbEyEBi4eLXLGiUnbfDZ4T2VdPJXR",
  "key12": "2G8oKjG9Dw6awuecXaKgofi7cPF2parVeL8irjczneVk5iU1NQUMSKH3YhFS1r1qu4AmurVyjPqJtW4eXrtQKyjK",
  "key13": "4isH3LknLkzCW8tEUuxuBxKNTvBcE4N79ogibUXp5cAp9C9N6NDGfNqNPc71SEUEo2hSK62vqUB9vizdifq1zPEP",
  "key14": "5x78s5yFf6zcJgzEXC7LKY1Pv6bGhNS4mQJCd2QpZKbfWhiAqe1M3gVqTcc8dxrECwPfVPcbJPCdkQuWCVbARcqg",
  "key15": "56t1wXYnGu5xEc7eZqh8vWdf2HQUpBJFAKSAKaAA2vfTRPVud8NrLe4mSxabe4WypXr4waoXUusCRGsaz815vtZd",
  "key16": "xW499y59YMv1GHWvW8A4E5q3TjA3sQFgssCaqxeJvUsZGhVqFt3RkxjMMYKTVf7RYLJzv9KjEYWXcm1ejW8dq8k",
  "key17": "2DUNBwt4XVU1ZN54KH45xPUxFi1VdNYNnPsYwqPukDfmgAVgHtHmKQRqSR6rfSFNVQrMXm7N3xHEyJgkCiAg4kzN",
  "key18": "2nY3pdEVbDZC1CfmiqoHmPe1RM8J3B5R2HQrUFQvUjqAYUk5NXhjHbunjXDWKnQmsvPTvUJZgbuc5EBfEkrbDwYf",
  "key19": "4DUADUDVE2nrv9UTdTRG5iPxtSB3qNPDr8Y63Dbcw7NhgjRyNdv6HFQUScDkbzeT1NMTS5kSTmvk5G3ynu9tbGum",
  "key20": "2L3k62Xm5B85srZuuzuNTd1z1biBsMyEwRhrLVW4oX9kPwaER6JokcbQaMHmKPsEBGrHUEP69gGFbs4XELwcfd6J",
  "key21": "4jirAq95pvEdMCDgcGy1nD6qEjzAjayr5KF61GQM4iXu8fJAU1E8yDYF9Lms4sMe4mxNP7KptAxnHz1bVcVTqt95",
  "key22": "433hFWc8ysoVPncmsGYkfyLqDHKD5SnxP1wvvQ8vAM9QANBZ8jHDsFUp2QaGCeFLiMoo8VwobAN7ZEDkc938uvvE",
  "key23": "2L8c7B7pjHnSbaFQvKqB6kxyAm4YS5WC5K8XwbtjFraLf6R5VJkLmUKrR2AE4xKhf6gcfPpmkvRFByyvLW8BTNut",
  "key24": "5MqJUtJbd4iimvjiaLkbfMcY2PhR2s5TWX7RiZSmRyUGk3yqmhExqt1AE7rLUD2Q3PK2vqjpLp2mhwMc96pJioe3",
  "key25": "354LYbNM1qz7MhiKYRK46JYciaMKqDNwzzc9DqsenfCCMGLULJ62XAZoAVAmV7YcUYYvNGydf86wQv9ytky1BkuX",
  "key26": "2uvSDyfrhMqDBs9nt2wFCAfXQzf5fp7zVabx2xpnizDwua47FEZr1Y2jmmWXU6Cn1jqmuvR6UnP5S2rcFLi6mf6r",
  "key27": "YMsgE67ti2QPfh7iMszaTuVdCzTpoztSviLqz5XVhY7grdYH3KiKYuCe4UV8ZZGUi1PkJSfPFcZH34ndULtfWav",
  "key28": "YstWpw6maKLU8mv7EtYzNF54dgNaiwvGMeLNZB47CwcJy6j9rdPzQRpEGoaPdjNSe7ixH1JSeG3UqAfXggdxvJs",
  "key29": "2ske4dU2nnEhjokDcGXH5PNwFWTBXxd1DQX87ewQmj4YLfiqroo4N44vehSsN74jm3VjNoY1y8W3fdTDxiydLdSf",
  "key30": "2eX91WsqJ157KKGwkuQo8YtVrUjJhXC1Fvw7bNn25ouMub8gniZLSA5knGEvxuvgyJXBzJTECkiCYbQtDhb9kpuN",
  "key31": "3CpUvZgbXXxXJTNXM9r9vLJmdkPJtBM8GZPkNpDomLwE9UDkcwht7jwZh5grdFG3hUrVCANjCrBW5WnqdLj4Rnki",
  "key32": "5iuChrFQ6gNTJMgR5hH5juZmh9wN49EMw7KQBb9U7CgY9tNyj2gSc7EDNgV5woCMWqYZZzgTKfVHDE2wTWEXYnGG",
  "key33": "2eC2gW8GogU8GQFHm2uHSGKGyVY4MEnbKjHr3PQjSeM2PaCqPMNAkQyx6WSS9ft4wAsQazMopAGxTZaHhPXFVYsT",
  "key34": "2RPEfgEZV3TrjBk5yjWW5seMr59p4uCzz8vLNTu31ivKoLpx2YxEupiYjoibfZpTaAyUSpUAMfcnbxjGW7Hq9dfH",
  "key35": "is1ZSSDyAFSpwkiWnc9eM7NfxXuiEMPVYV9ZuDiVt1o2qsnbM9gPH7p3LWAnSZ94Sb6z4ujHtrcCQ6NhYsSQPBr",
  "key36": "2pjJWMvobdCmDRM32cd1oZpqnsjdJqeh29byf684Z9US3QCAtp4MPs6Ftz8fZxm3GpfSmood4Se833scTK7m1qyU",
  "key37": "5umdDdBo8z9MCySAgVfk7Mi4zt6qVAn1ZmBDcyAeXeiutA4XFixjPUeSzKyrGRj6iCopVnm9HEhGmzt964LVKp7m",
  "key38": "45ST6FMK2KvdSUN5GvtPFj19FJe5W7zsA6gsi8ub8mGm7N9R3AUwZXMMvQ22jjwdZRTS88zCYM5KHKzVWJoFsRnr"
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
