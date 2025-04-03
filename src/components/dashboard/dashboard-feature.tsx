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
    "4m2AgonCT8HwJaJVBzd9yRbFM7btkJvmdEFVtTFfPPgEuCUMQepyNHhMLP3ksY6k8Xcr3897WZnWs6CCN3vryqdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5oU9wfR3CDY9vsJGdi9P8nPfpVt9XWxTJ1QuQ86sVr56MnozunmTXJ5RpBWDAeFopdQUUYJukoNE2isQpSjP9d",
  "key1": "5RX5F6X9Uye46MdS3g9ZtGdzPZ3mURNJwhmbDNsZWqYiUMYTMmYG2PRBDqysSviPwjNuLNjKxU3t48UccvK6qjnJ",
  "key2": "23CyEXi47JXhPdB38Gdm9zE3Wa4TYkXeMYHUdabAViPSWBcr5QHq4zYZh3JbJCMM9t8eQBJihM3qdCDKcSQ3Wvpc",
  "key3": "5HZyRsEbouwj2iU7f6XKfC1VmxcHB21pqgWiTheJrCH5zWVi2HBZjSkLBEKs7gdHM3fppVWfoDLie7ZTtTDjwYrk",
  "key4": "33epZhodvc1FB1fEiYhD1aUz5VANgb1ygzy4sjnpXiu67V5u8GWJSSfK4H8X577CQJ4JVEVJEmsh3hKYUFk5ndDz",
  "key5": "V4S9kfRJE1iWGzuhiWGB6H2D6ErQTRRyz854xR34vETnY8nyuGQRXWjGqE2zg5o8KdTrctvaJm8WFvFt8PT5xWw",
  "key6": "Kk4xKsV7UjQEiHhCg9MSzgHAV7tptPPTs1v1rroKrqtpPTRfLXr6ePvwiDhDCtd4WVwxYssVjC7YMpUw1j5Gbyz",
  "key7": "22d8EFQ316EdxqVzhYRAGqWuk3A1B3DPQcidpcWeop2KGhFbKfYvnBVT4nrwuqveDJK2gw4VruvZ8JE5hPF8LbDe",
  "key8": "u62xKgSin7ReeyjaVT53zvYPkoVrJLPuTpVoEGqw4uUbvJ9JNHY8mwhPGyLTy8ggieZeW9vcKZTG7we7iuQG69f",
  "key9": "4JYJm4n2T8nFyDnknaTMrAns4dXQVv2PsuiAC7qTEsuETRBMzL7JUYd9QhW5chnEzTCec8mqqe2nrQSPnVQdTDpV",
  "key10": "3qNUazTiNtGWR1qcPyZntNJCcn6vdq2L36gPYBTRfXvLJrAoLYtrkLFZnvcR5hYnpV7v2rUazmHooWb8bWMKrJ8V",
  "key11": "zoMRPWVMJKdTffCSNayeeBgJ73SCdGDrjASLYZY9tpvqMJd6Mfhe5fP83gTzJj9uXCahtpKxQWStf8FBhSbY41T",
  "key12": "Hg8AAFiMNdne1HWzpNwE5JKZrtkUuKZrcFsh2a4vCgssUHhw87uT4Zm4N1gA8EDj2asjZQVZzva4fW1RAAQ4cpr",
  "key13": "4yNFHWKjfPBFexHmWTM7M9MW6w2MQ5CmHJtq3bngb8VsfRxGiqgVuKSNbZGiTwXtXDwHG3oVpiD2HmFtLYcR5rhs",
  "key14": "3abRGpzaM9o2c8KDLsFFUnAAFMLr3kkeFWXtc9K5BQfeofR2UVgdt17NsYcfw3xukAKrXqUgaNg23kmxNY9p5BV5",
  "key15": "2H2rmWPfsF5Y9vD8dXEYfyh2T2xXznjedn46MGyRzfjuE92T2yGunapWoJ19WTvTVGoYdhS1QMsAzbos329jPoY1",
  "key16": "aCPHuwtoWyb52r1NbcUoq9kgzTEwyU1r61S6qfurCuYNnuYPmNhngSE7NsB98tyob5yVsNbB9NgCfZD2grbL6Xw",
  "key17": "VyAYdZd3a8R4x5Ho2KxGSo8VNCGgEbj2grNnZhp5EqzmZBWyuQN9p7YixCx7QH2arjgfAo3geEHqCRuFPugBrFa",
  "key18": "65GxaRnmyxwSzeu7BX9gkTHQZQTxTRuzpPbqug1BjLyziEzf6YrUb9dSAQ2TK4WyBoybR25ULFnZZ8senjdop24N",
  "key19": "3uVjG3crfne1Lvzd66Hz9JTYy2T9E3mzpjs8ZqNEtiyEz8DdYE5jvdUiZJi7txCY5QRczrFfxRyr9hDhcrFahbJN",
  "key20": "4B64eWxZoYGjsAU28xxfZ3QWjxzoAnKrDUZHN34Jd6N3QM2TqD2jAKkvBVY1y4NzWXzxSUkZyLV92f5DxAfpdoys",
  "key21": "3q88TW151mc5yhRwokdiDForwX5sFL2iNEBUieYXaGiJdDJjxbEKMSCAgbCP3qdvy5C76FR6zBmg7pZVNP7UhUFD",
  "key22": "2bY5sUnoBLt7D3sYwcN7BsPojaJ1RCqexKcXPJKRih5gcHctCw6VFYvWX3WsWjfxPvimMVNkxWs4ACJwmYWNYT2L",
  "key23": "3o1jzM5dWK9aBZDXq4YX4scdBFnKeV1Pd1idqCbUjpweE8SZDxoZL5ciPeDre21DhKWS93xq75HELsb2ZEmgh7kt",
  "key24": "3Eanshoh8PqvzytkVh6hYMU3oa3RvJAraGafobJGgVw2e7eMxqBPkpGFLawRdc9qSW7fqraJJh9C2Fd4ksqpKYzk",
  "key25": "2Vm7ZBBjr9kiyRTgcmpMxrwG685heYX76oLtnjsHrBZit7mMEABKTy7gqZPfpN8GQcDfWBuk9EvtmHueVdv4ar3P",
  "key26": "ekrSMAAQgtoZ7PfKr674ycJJJSqHU1VoC7xBwjX3bimEMoLcyC5c32cEJKVRmCeLE7XMGZLdK2Bo3c45DAYoreX",
  "key27": "ow2s8R7QNCgvQLNXukQuu5YFKfEC8UbMfNtN4vm9mzfitzzxjyQRw2ozjGNyi7NwHsGHLCBGC81xbeRT84cjT9d",
  "key28": "5x27XMTTLqaGwvpkEt5XzXkJHzoZQPcCywKh2BF9ztG2RWswhDK55QAu3Vmf7ms4AqaZuLim9S5YubUGrDQm1Tnr",
  "key29": "4Wj2EnHW4K1caj5hbj3Dr4GZ7fxXvjDY61918XZbxzpvgKeWNTte1PBypKS9ttKSqSfZ3tKzexwwhGbEnYCTQ26p",
  "key30": "2MNkivod3y7oLbSF137QupCWSTJ9NiUznEe2swvQERg3Tq7Y8iXzQcupr9N7XCNnprx8QQtvPtLkrMfDhRrf8Ksg",
  "key31": "527CU5kvL2DoYdA2eDJ5Wr4QiUZwjHqyzNFpbA4ahpBW3Z3XcCkzLi1T8GQdt5P62xgCsywV7umCSJCenwfesXWp",
  "key32": "67TcRHJFTr8G2nKWbtswM7TRm4CFmR97Ya1zX3rXiQ9AM8aE5naneY1VqbU8CDzTtnwvezAAiGjmGMMq4BCvaKpD",
  "key33": "2wrNtgRy4bSaa2uohVnEtFb9mSzyWo61dQwk1m8JCDhUE4UdtyVnjmSEH8b7sh8DgLNBdVkrRPDNVm5ovpmJuSa2",
  "key34": "3L7MGY7NqEXRg5J1CyUamqwDfk3gp8DwcZQRhmqfFai6ontWrr94QVekmn2jEFN4ymYqp5neBRaW48rrr33rieDC",
  "key35": "48AjAtDiBMA9pYGjj4mVKKrcRZT4ZC9VdBJFExaz8Mwde7rq7f1yLWwbw9T1rL9JvgxHMw9K6UAPziJdVCZYb4DU",
  "key36": "33nprgWPiQx2x8RYnL71nH9PAZtxfWZVVhGCVpUNFWQzmAWn7wvHnxGmytsRyb2z9RUZTKMbEfZNpY8pMRmGsxAi",
  "key37": "3ouDBm46uQZGwQ4tABi4t4UYj5RcnKuwXyj5HqMc6V2EHzgVJu1D5k1hmSkHmgThkcByCbqgJojBSrH1VvACr46c",
  "key38": "4AzFSsc27D9NJ3Mv4WJcy6bJLAFtFQbr7UNbWBQUMJignj9KVKK9QGZBChwGydJGYrWyFjmpeGBwQB6XDHwM6Aoq",
  "key39": "5ttseQGVU3C2iss2e6sUwsDHAopXTovrTrmUsBxR3CXCHxybjgg1Ffstnh6xsAGAEuThyyDsN2Xk1KjUDaaC1LXK"
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
