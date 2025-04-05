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
    "349drx7RsSvgWYmGeYgXtiTDRJKEDL7vgf9hMSfccrDhwgNFLGmhtp1CeeFBo3dXqjVjnGRspf6ErirCkhSUnDd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrgTrTzyrVHRARmjCt1V5QFa1Zj5CMNJjoTW2LHBc2V7VunHAhJXfsT45a5wk1DCEPf7C5eAhp9pKhVvufR5DUR",
  "key1": "5s8V3Uf9hxptCbD2Be1xoZaPX7r62k1YETieUdXH4MvqNLYb47hhDmE18w3zzCkgcHSVrxJF52biprYbq1HVMQFu",
  "key2": "3NBXkkYbhNtMx3GkH67xAXjKmzUjF6J6j1juKK4hPFGKnkwFgmLCCjkoSr8hztPH7Q2tZjp69F8G3KDZtFZxFyGR",
  "key3": "Bt1HcXK2GsJKnmBCUDmDUhE6kC4M6hPr9U5NdqAPm8NKj1Wkbga4erDSSxBuLwZ7TF6apJXhHeMPvViH1GW4m9E",
  "key4": "hxWLs6RADdjqqWEz9cdkxr97aQGzY1kHFeBmhRvgPpbufWDGj3FnvNusqiBiFusvRooRYLdmS3W9HFBQpt77ZB4",
  "key5": "57ZQYFMMp6Kn25YcrUxEE5Pw1igRBoSJmEtGoXPetSLmq31y3sQHMB7FpV1bahjM7VV636qvBHKB9S9EtL6q8Pne",
  "key6": "2A93jCnFvksWamUEzRGeqqUKwvtYbW3T2cMurpewPB6s1Fphu7mY7s8mVc1HLTw2fowtmvfb9CnkxXqkLHYTtss9",
  "key7": "65jFu2FtGF8Kn4D5GHxnSZAVRHLZoR6SsM4GFiRra7mpThyr6WN2D7Ryd8pScEthzapMgPXWEjk1QYasu3MYVFe5",
  "key8": "267uhrHqwnsCaEw877fKA8Wmn2PiUDri4TAwg4aFoG7yKzJjzr2fhLSKBUuEf6xBXjx2pvXseWNsE1fapGSSFfrb",
  "key9": "MNTcNkQfSgBsCCB3ZuBbfzeJn67K9Yq6BWoN1p37XxovFQocsfEKkmVywnrN3vB7N8zNkLr2Kw84mZUTBo8E8Jw",
  "key10": "3icGc1BnSxEVGrXppE3JYWaxTZP42zHnGWNpDXfPZMx3LNdiJZgu71QnMVNbGAoZNSNfrZtmX7ebCofDsppZJPLx",
  "key11": "4Zyu6A4SMa94a6v9kNs1kZW6WF6swPhgSS73YUniM9FhqLmT4UhmEMUynbDy9NSefwTwzQysVTBUxgDU7MM4WerB",
  "key12": "TZv1hsQKN5irBXE35m1Y5QJkRtzuohyvq2f1T9GoZjXn7YdtvbsAWCsqr9NUos6goYsf6B17B1X4gVL7EDKe56Q",
  "key13": "24EbtosAxZqmboxfKQDWbrL6miv4r3zG9Eu39FyoWW65hX9dMuEpK5azY2Dm6vLYT5cYn6G8mLBMXZDQU1WmMEbL",
  "key14": "4XJTAQBUxwikgtPz3gPk2RT5mm7vDX5ESUH9FwxPipe85ubD1zPBTQkN6u3CijQfTdJd1RPugj16M1NXkKShmerF",
  "key15": "UdJUrSjjuzq9sz5rXDrp7T2uvFG9oPW1mGLVxyBsKnobkbsfXzgLuuP1zGvvr44cJ5cH7DqtXucRyxXa2Ww5nFa",
  "key16": "2gG3CJemNiZeUJysXvF48QrHVjKBFc6LApZPP9LyGuZcFB4nG63eAMTT1Pbzw7hVgHQcfcff64sfMB5CvvQPDz3D",
  "key17": "56JwbmcKmbruiQeJ65CecAhkBjx1wtncRpRg3Mjyvc9fjHSnd4xYDQ31efUxkrSwgJYic2xfPVr8WsvQksL3zf2P",
  "key18": "3wAzSQTs3Yqh62cG5GNoD8SefY6CfXewX1vkMVZSyRRo5wU3c4xZ2n3mE2QhcvnUTGNoPTcbiePCGrwGSUNAdRYy",
  "key19": "334dUqfYUgsYWpmW939JUkEvFyoH2vY99rYKRt36o91Pk2t748amXjqBYXLL3Y9CoryBT63zZfQcjVw3aVeXvHxZ",
  "key20": "4fBq1TNVP3Htu56LWHVPC4PdPpCMLbzq7Gi17hMPHpcHpiqX5dQbg3qB7ruTsrhBWkrdsz3cBb13uY78RbES4WXH",
  "key21": "4BQ4QfJp5mTW4JC22AUxQ3bFwuokXGuvBrERBW1LHxvaoEA9JfvnejpgUsYUFgbCgofFvVpqwhivs1qaBd5pJQjp",
  "key22": "5y2hYS328r45zVqih64B678PGJChXtBZT1k4FtNvofRXtUBB8wjPCLqvPoBExDcsqTKqk7xa5L3a7tWcpBRXzSCt",
  "key23": "2Df8pVUw4dKwmUEQGH151dqd3XFQV96xMTgYip9KGSADVD1VddiA7utcZfJu3VGhfZvRmcWhEcLp1EA654ASDJky",
  "key24": "3haycNVUk2E3XM2G211XREQDprK5zTxTNrfaMebD6w6DTetAsjmmidqXcY2xpC4kPp6sNim5DYs1JiUitPq8CEDM",
  "key25": "LT6TjjeARKrfZRV6zy83zKfLhMeBE7kWutGHtptSivnRaqRun9MkSwgG3mUK6uchNevpvEQWFNNYptQfyN11wdL",
  "key26": "5wP5LaVU3pD8vryJ9PWU6aDLTUGtBJFxqPEGyKS3hU48U3r7eB3Ea2R3SvqMRPmDp2ii76pfok2MTkpA3yQZCMj4",
  "key27": "6JSTMNMNeEvjuLmVzBZBPUzuoAJefPEJ7Ssk18iymRemE6LGtEqDJPUxPvXtD7kvVi1T5HoLKDpGL8Y5WyBx29c",
  "key28": "2oTFwmPbnu8qXpsCQUpB7sth8k8bNTTTqP8CVyHyGu4HhLJ855biRA1GgDXdLenrKS83WSymXJPnVckygbiJhYjB",
  "key29": "3kgVS3FHE6rodkUM8kq61zag8VCFuf5AfwyUQg9tKZe7ouvGbWNTx7xKfFgHVmBhNCffT25DUznsNe7vANFvhRi3"
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
