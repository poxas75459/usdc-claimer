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
    "4dZ1j52WvQujCeUtjT5LS5Kv2Pd4FLgegWhdUzqQb7GDHDr6y1GcE5EvSvN2nMQ98X6UNDT4DGTQHsejNR85bT3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdKfmhjpCxgu2nScyNMtsMRv3X9q7cC3ceVF44y3DS7QyzuALxe7oLjwAU4aDEQqh8YYojfH93jowjZGXA2rxHz",
  "key1": "2UdGsmUZV9o246vbZMrWL4hoEXesZYUtbhYi41WZeamqKkfiPNvRmJJ75hq3Jve3acXdXDtUdLXauDHVrqFNn9hh",
  "key2": "3KPNoBkxRkYA4Eo5pht2wjH3FhAH1kGSAosR3V8HZHy6p5XCmuoG7Kyu7ND2wBxtqKYp4BZ8EEtPfo16GpXfP1ok",
  "key3": "5AS4TreeLePfTeLUm9rbVvh7Lzx2xQbdWVFXF2VdQCqpgW5mMCLm95AgnZEDyM2fqJr6n7ftFuGinSPg7XswkV6X",
  "key4": "3JGwYvC5jjcYQ4927L5joF9EyhAfg6Bf9MR9oRW9VxWiJMj1vEpJnB6KbB7sQTtxDfSMze8BkavReP7LhrfVHBNe",
  "key5": "2E1wkNdRSpsczvNpG29GVpDLrY7vVHwbXecsC8hFAbZ487BcWaNUo9vfhSabTQP8UU1hRx8mccmJnGC3RhaxYvst",
  "key6": "2ZWj9yp8AkWgKnUJadb7TR4fPcYUKiaroHDcz2cTfXgdiHd2kC37P2u4MPjHsEMZLpy78GunVsA8seMCTwLAT2gp",
  "key7": "JrWYfvArFci2JoaxY7SGuy95ThgDLYUVq1XSJE3brtuBmhRbLntUnsVxEPH21k6ExzUTBmXD39jRLnjJzHX8jXk",
  "key8": "2HMPErpDMbrv8RThmAC8vhn1YZTG2djw8rmbapKNWnjX36wr4ZaRDVWeEquEGjia1UYBSo4yYz5H7sowinYF7fDN",
  "key9": "C9anKJaxdsNe8CrvqZuGxNFogzzKd9fABbDbz3JtiW2sp3Pjs1AWyfxKTWDE8sLSwdCXDLphtk6HQ4kQGoFhNQE",
  "key10": "54JPA9irYCPFpvDBRxYeJSSaQtoxy17Pz3Apmj2XUMPPAM9b1xPka4431DotGnDbimXX6W4ZJx6dKdHESJ9dTsDs",
  "key11": "4s4hCDMPAHbs1GT5VTj5JWM3uUUuiABKr6CffmUT4HbU9L5aQKCWFzooxFnVjjfVcHK94kECBXJJoebM7yTGjQT4",
  "key12": "onJBfcwwNktpEqGW8JBurEaUWMFjNq1drSeCKGHbTEBH1cWHijA5y4Gx74Nw5pgrLtbEmJ91ULLra1pKKHJd1jZ",
  "key13": "36a5TnMtQgSviTt4czfF6k7MSqVCQQX8gAbhtzfnPsqTEt7ojkT63bzcU2c1GjP9AjgC9grTxBHypsJw7sbU1CL9",
  "key14": "2sTMQG6s8rPb6mBsRKU9ZfdeY2uTMPKGhNgAz82zfjdNG5LWgtxaf46WgRZraUnknFczv1G1CihRwrij5jccjdTZ",
  "key15": "5Fy9Akn7Z6atfb7TxqW1nU3kndxDT9RJS9jc33rqfczRsJN83SUvyKQRakNehbPKvrMaZv1gGP7h4pCuYXCcAhi3",
  "key16": "3eTDnGvXag3GG9SVDpTjRsyqadVixPbAL6q7eAzYF6R7euwUuVx5315UVubSoKqh5WMbUpiTjWrbQbbT9MCKKXt8",
  "key17": "5N1kFtNmJpc2sPYBqYF1i7D5o8BrVboJhUwhCwpVjLkwd5aVcsQMUBHVVmjgU14ykbKEqoqi6VNbAtZ2x2WHspm5",
  "key18": "4Z2WsfLYyewGXEG7xHDX3EWM7gm6M9qnACDk98TvL1U7adCW97nusH8Y6cWiMWKoFxJh22ZQvmBfGtZWuWqCbyJt",
  "key19": "4gq3Y73axVLNT2AJD6yzar78pwRAKghm4k9nK1t9pYsZNGdANAAURGRAwTLcLJpXXM8MchmhP5YrPc4Rze18Zqki",
  "key20": "4XfYieFp6rq698Dg7ah3xEbpuddrQbGg27erLaPbrnRRx9HVQCwpBJzZxAfkqSxXB9VT27MH6SWkFoSEZcyAoqEK",
  "key21": "3Pu3qoR9SuKmtgYQoQTM32um5sDXzMCpB8uxLrehCeDTFX5kC4qxjq8Ky38WXtFm86akCQaxiVc2y8uyHbRsZGy8",
  "key22": "MCTtud8YX2bVVZqNxtSw3tDu7NuioaqDiXWqZcnNLYmkBNYrUkUyYC1e6FLTu9nL8oxAnf8wRH4Qkh7MGizSaH9",
  "key23": "4UjXxwB6DpYzwKMxksncjmC2p2FVXsG9QiXX2wbkHaApzbW34ERoanM4uHKmzfQYmfVJHmCEmyT8WEx5d6sSzLzP",
  "key24": "GdhWNnmEG8B3BExzrByhfTPJxHM1Lic6knPpKUtBb8njRHvFUbKLFivKiLWECcDDBVDbvtkEzP5WiTPx3hbsrnm",
  "key25": "23orSWytDhRkGBsPi7aL9KWPjrrrGGkZFfp9to4Yq8NAbeqezmhbxRb7q2vfJiwMkDs28UYJQjo3KgpgAb6GWwag",
  "key26": "2iMMsJJe91PpqXxRApMRL61mQVHHuaa1qeafzATfr8K3bPubdDHoMd4RSMxebd4pHsyTCCbEAUzLNzfwyPPA8cVF",
  "key27": "28vbHC1mtJQHYsa19DxTaKnSJdY5pmVhJM5Njr7eFmJteAGvMjkMLei7DS8Zj5LD8GjFLsFL1NZdyPK9JZDhCYjP",
  "key28": "xx3tKyurSqAUYqq5jEzCcbiZEUUBEkeK1rwSkjU7uydJRaM6mdJGahNTW4qd2ntShUihTa8KaVx6ZQ5uUvU1Hr4",
  "key29": "5x2doKvdS94dxLsA7j7kY1EYGto2CubYP3eue2jKcW44VWxmin1D7VKXk36dteYvBXp9gLEYFFrHa5WMuajAUTv3",
  "key30": "DZ1a4jv6c1t76Y3gneMLsb76b3vU8KFWk7xC3xjjRkeG99QEwR5ZSXJp8Bv7NHpi7Giv8AYqvyVsprhQv9XajjE",
  "key31": "XcsLKny7S1PEdx8Fs4WkkU5tCwefRtctPHWNU5gYf88hxZmz7KaWzhjmKuEPSN1iCTbt2AGA1xGuqLJU921CidT",
  "key32": "59nnJYpK35LHMjS1kQ9xHdqttzv693qYpVrqerRREyoZZQDxzp1HCJ8p7RzURumCYtdKbebHWhf8yT6WMormheUU",
  "key33": "2GFEpw7yuUEj8B3kt7Sa8KRATSVPpVy8QoQQ82zLyxyZFksswjCqDegzyscQEXYQ5yV3DtZU5EMtZm7g7JeWDH3H",
  "key34": "43h2WvxzrCfsqcQd794WtgJzEAGMpo57XnLsmCLdZFzacQmx17rCF2Hws3EDoRFvAkrmk96qU6EQ8EsC7231Bia7"
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
