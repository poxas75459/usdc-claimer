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
    "CDn3tfCBb3z7t1MsCmz6Cs8qCqzro8Zv2x4ZRTaFGyh71QQeWKrZgn1W42wSUpHP4RP2bhfPcib9e9T9dCBkdXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucXyNcEiuG1YoHRfdfbQ3vX61Drb7zMwSYMRiTRi6cm7BQqwg5Jzs2GRAMRUKbirEFYa4MQdMyX9dFdWk32fzFg",
  "key1": "4jbzTXSBNps6LcxY6Ws1NudhEcnECdkXp1DMRyBcebf2zLVp4vTBTVDhPbhBnsUjDbrijXVauNSRNFKPHBSwaam6",
  "key2": "3qNMNesMdQCf92ihCjusv6DZqbQsLHikokoHR9GecX2vQv3TFMDWx2BRUSFhaEm48j91ZV3Homn7kF6BhCgnoepM",
  "key3": "5ceGsKcvM1wU5qBN3eCKzHjqVzDiimmbRfZFC1tGSWuQpXEn6erHg6iZkN9Qi23WWtmx4i3aXj6Cx1YQUyd6kvhp",
  "key4": "2vRJChJc4w4J8j6gRqnhmL5kAampsML25v5S2y4sgQtZ2ZxPSjDsMtH4SP4fr3YBiNZbRvnqjxybLAvxRhLRFd69",
  "key5": "23HyWdCwDrqfkUBE47jn34d6WSziXXBEKXigNnDUKH4cUPyn53VgtpQTJnTse6Q7gAuKBwEv4im38gsP123CXX1W",
  "key6": "2LmqHRyUzcLF15dT7PpH76aQuZRhj8ooVeGUJtjmC51wFqWcePLM7gCfY9RFr8sPpbaQ1yoFtimYc3Nhvdj5azQH",
  "key7": "46KXvATKhkAyRc4kPXU8yxp1NTvcrFhMrkcTjLnwb45ZmRG6ZdyFCkNp4B7gBeDjtJ8qxi1pBuiHJ96ha6Z89XMM",
  "key8": "4FigvE16gyPRpyWfTJjWpa9u8LDLXf5mUEarn4fwtN631a1Cqw59jQWXG2sWFBHdx48dtzCW7u4Z32VVjeMaCtpK",
  "key9": "4pcGFqGY2PLWyHjFHZHRBmFND7myU2KfvZJKz4qokHgtWESmFdmSVCZsWFriEriJxrEwM9ZkMdHdDGz1AJvKTqde",
  "key10": "34s4Jn6NNJBtzoxABsija5dJrzf1UaPbsN91niiBY4XDtXVqjTBX6HTknTFpJdE57BBnyGd6A2f2K7N6b7L91w3R",
  "key11": "5so2zGCznya3F6QsV2EYBKwCYWY6eFAuZAD5N2W8zSBfPCCdYyeXGn3xRjxH9g7hqmTDUNZuLMx6uPDGA98ZuAnH",
  "key12": "2tGW6AgPQRPFUG1u87uox6Em5ximSqAyxP1vySp9rngvQX9yLHG3gjU9n7HhRGkYnn8DtftUdq9Ja2VJtfkFbk1M",
  "key13": "4iHSqzz7b6KiiurCpkMmCb12xTjRvYFor1zbrbi7ZqtTfp528wJghkPY3to8bE8zBFF2esw43Qq3euY6vGUuYKB1",
  "key14": "4UTeCoU3dpp571KZwLXkKiiTtKg1apVLmNzVaZdataWJybUSxHAUyqS5q9rT7EhboHRP9sa6aoTAtMCXLen1Theg",
  "key15": "4HoenfkFVsGm3M71PU7wTZdzgcEtEwMCSNxLu7xofh84L9qKLipknRkA4kxQsRDXhUtuY72C917QDVjaeRNJruhc",
  "key16": "27dyPmn9WRnoXnywEkegAsutAY9UyykwR5bx4q5Z8SBvnSogw8ifhRxGc5qjXN8DYXrGV3NTgEdxLVs8E9xn21xb",
  "key17": "2xFbZUx55kW1iGR2iXpNLP66fNpyKVN66abMGhcQVfeSHKfz7VERqezMX3a1uRVc5bheZe4Awnvq3NfiSR92oPLU",
  "key18": "3ior25baxQ4AFUvTKKC8GaVTZaemA3EFU74KTkMfKkEqZS8WHUb6dqg476aj9m1HmSd22wbd8Q8dSCMAHhHsCXZU",
  "key19": "2QmxapStJgo46qo7aaPrVFeqRHqHVPjyQXMatfgFbTwyvaHZyTrYgDE2Yem2BpcM2uw8at2s5dAuvifQsxaWjJWM",
  "key20": "2moMfUmZmGshkPh5r552SSxKumxoUSs2AXaAs5vnK9AfrmCUvBrihzdbzoSzg3PkFSWuU6WRhkGXE3BQg22davfM",
  "key21": "5M5xBZR8VJYz5RT8EA5wDwx6NEQ8Qq1N7kiTMoVxsCPEtiGaANLLMYmXw2reCaCn6kKAFP6MuzLHsyM7eHFup8yh",
  "key22": "HN5BbWDe3xeAeZSRzgKgESUk8fM5qeu2CMNckHRBCBnfri4mdNqxQUjsQ9mQYwZLMQszPR3ntjrodMDEzJKW51p",
  "key23": "GH5L6727MqoLcX25nokaXkhj9TEqjQkZMERi9Fds1hcsEebx9bqtfbk5VyqYSQyWB1Uks56Li9vM7LjYMcgjVou",
  "key24": "4VmmaAj7NHipefra9WXLYkoqZwvD89aRzBMC3W2YDSusmvHJNRpuMir7ZxANoHA5DKc2TgiXJsszz3EEZLSk6taG",
  "key25": "2mN8cvFmYZZMSj8VbkssvrX7Gad79tND3K7YAV4WwsE4r2g875ZmfwaD2BYXoL7AmieaCEaAyU15CjQTVedgqxYi",
  "key26": "3jj2FDWi3PKVRTjtBDEbhKx6BXUazjys8Zui7mJXk6Y1wwJdwjA5TtfD9XNhBzSKYTEeGwU2sxVQg4iwBmJjbm3c",
  "key27": "3bx6BkroBrSQstqBafxgzkqG4GkcBpEc4gJoWQDCjd5mELQ65A6mQkvHKHDMQn6xRkg15GrYHPqRbm7dHBfqQxPf",
  "key28": "3xs2rUkYvktw7TZ2EjTw28tygUiyeFZX22QqvJ7iN3fMKy8uF9AQwCgrwdDUXUWbV4Hob4CwzJuaTrHhxMfwMfM8",
  "key29": "56AdHWK1SBN1BPoa8kf8agyzfgQ7wMpRimCzt73sBJtiULCothpbrAU1Mdz6LS5KjXAGjp3cvubm9N5uYLSyxm1X",
  "key30": "2rzYnNyRT2yPF5QnJpFJ4ZFANQmq9AWY6jdzYQa6xr5VexhgAS2c8uYj6c2gyQyJYWbnT9PNik8ZpE5d5X815292",
  "key31": "4Go7ixss8qq8c56m19yLygjST3gotG3FEqoE3AxwFjkLbxY5vQnnmVeUPTjfkMiR8u4hk5afvShurzenEKA7L39X",
  "key32": "U1edbaDYCZa5PNU1EkAH9CvcWfBBToGJnsTXS2y1WoQFMzSGWioyJM2HB483Q7egoyM2XbWjPNNa5o9XDGjsY7n",
  "key33": "2PYYKVdhp3GkK9XACSrpihDmGvZYkkiB71G4cApeRgvS4XCv7DWrNUTdiH7i3m3uws2G73NCzduccw6ABHA1buLq",
  "key34": "5BHPC2fLzT75FhpqLQMdirKtxzBPjDFEuxysG6uCAT8MBHoNYZuf3wxzAbHtx3zLYo2db4QCyim3zYiWMbj8dPcZ",
  "key35": "5zuFwcpoBtQo4N1Qax59WWH1xGrcZLZLsrKfQPKxQ8QvGMpWuuXMG91cRECB5siFgcqL5ZsMQ9chMFEUVQiuZEo2",
  "key36": "4yDTegWaBNwQuKjb9NiTT17EjEG6PnjpkH3yyx7y2fbBhPiqXrj8H4TBUhkSFu3ojVmMD8cXDLE6xVQMCVKjqeEj",
  "key37": "29nhKtCQZuzcmzUkg26yChUV1hMuLMzVpy8oiATP3TdCAeFfgiNLhPDxCTnMbAfDsU8Twn4UC9eFTUKpeyvPcRvC",
  "key38": "4bHEyjZCKaCmDZFENHku5Nd74veJD4RZaL5EVntc8vgHTcn9i3HKbZiFCvM4McKVhex7RfMs69uwt4wjFbipJH2r",
  "key39": "4yLetEfXX3oaGfAgittCoXgxsSpyv7Fw1VZQkpxLsVoANRvTYwSVaJkbmds6Qq8sVr9D6RsEwqCprZZGUGMyLa1V"
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
