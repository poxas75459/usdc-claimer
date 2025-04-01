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
    "Yz17Ttte9h3a8bguJzc31yu4GuSTe7B4z9evSWZZ7SUJ9AFQiS2m976vyhF1Cie9RzzzAhbjevP1mtyDrNRBXL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iP16WQg2NfP3DYrbKGxrXxGbwSg3GnYXmNADhwzXZJd1NJYi6ThKaM1XFKCZg4UgLvYe2Ucwi53JRGH3wzvAGF",
  "key1": "35RjaLifZ3KyAdJfiWrqs5Z18HwH6rwV6FPzMafiWJppCzj4Lv5xvbFPL5bN55Ssr4rbny1LYuvL9pmyaUEzaWsi",
  "key2": "4HkJ7U6EcPmCCQqjpYrEQCFGLAtnQeo1EPDoTLzfcx5B9FZJgeszhTskJS8ABM22ba4g3zY5cTYWguxzCZK9yrVH",
  "key3": "3ueSjxKWFiCFop8yJvNfbss9M8tY4LtGxND1RvBXVapMYvPs8pfj6qJ771iS3g1Lpb8iBMoVqaNFjm7TojRmfwoK",
  "key4": "24eX2e7sKLDFm7hbFTLUuBgn7Yig5DRPh7jjyXCzHymA68UBhyHGPr8zNH6Sx5GbQz1rewJ2cihH1SeBJ2JEgf1w",
  "key5": "2SqsnZU8o7K3qoTKQYDPotwa8t5BALKLdJmsKuxuwWT6J4KmbZw3v928xd6ptwr4Hu5zmTz6RUtDregsTo4jyqgb",
  "key6": "5dLfmpVTF4srg5yX3yN9TxCf7PNcmSLDHoRmQVcjHcYRJVB2F1NdtjiMUZLpGZuDpB53U32JzCM9GNMGin46BLpN",
  "key7": "4kX2AjmvYsinc1dS73FLaJ4ufipW9Hiy9vuWdWoQybjrGdKgthYQiBsUjUzAcNA9oDtzs5NexBKA1LPHM5gRirHS",
  "key8": "5KAeMYtfr8hSG3zTK3x6AeZNxzG8sPPwHtuye5Yb8YBVYXmxasjSpHmw34EgSmoC8JYTTuMCbWTdopyHSZE98cJc",
  "key9": "AptZ6mKRf9tcyLP3LUCFbKvXJsf5tZWRWNaudBzKtSaxWr83NKqDPd4RUKyGMet2r1xJZiYCdJ3NQbXDt175iFS",
  "key10": "3UrQv9G3uLceDSVfGdcgvb6WSyGPABDZbqJ9E4BHZEYyK4dVgTsnU7uX4PdLxu8E7iCw2ywDq9H7u3YRPnsEMbaD",
  "key11": "3VDV9KWo7y1hrKQ1KknZzwAZ9eyBLN8vjc9wDMaE8SVYZ2y6oFbjSVthFATNNYJWkbM8MrMb1PCKocMsrEnP3V8c",
  "key12": "5KHM7oLYP7NmRHbpLnNSAncot3Fh5o8EUfY2x3vMCN739dmZPfpnHkzwQu6VG3pzidbsxcdV3gDXSpCF5TyppvV9",
  "key13": "nLzGQq97Y41UZwNSFGsE8pt3kkw8teJ92espHabfixsivfmqfa32UCs7iUYKwZqSoaMnHyTemRLfaztd8bPYNu3",
  "key14": "5uw5bkGkTrFCxENdvzcutvtAGgczwZz55Nu3o4xHHkSz887NCoXUuozvmMWm4nxPFHa3AfnhSaXeCP1PPmN5P7nr",
  "key15": "4HGydSQTszh6PdSczz6UuhTGbCFg3WKiVJRSBkrribmTMJkzFGPrGnndWxQqcuUC5PZCS7hhVbV9p9y5XLZrHYbR",
  "key16": "3GokXThHjknfQnEcGq7RhmLY7vopJRFqnbApukeSSuHLdeZ8P75JiqjveWwzaA11rRzvEV4GoergGq2b3mdugeLE",
  "key17": "5vjdRAPX3jePCwFPdh7QsRK1qVxdgyfWFBa3nWnGgx3Ysdr3WHr2kp4EMYmwuDfyaoyihhiLFvMaCjXkaeLTH2BF",
  "key18": "3XJrH49EzQdjAZUP1VnMSarnyieFsy9vG6y5meZfg8kWpuXWhYtnscghrFsnwnkqhwY14eZFDr4ngtREL721shxz",
  "key19": "3TKy6wV5Pw8pgomi7XX2RByuvDVfzrpAEFYH8yZc7wTQhv44cuxXoadAGaGe4PcAqMdgm55FGHievMmvSbUBKiiu",
  "key20": "2opqQbFo9ipohKgacS2bADa1ueg3FEn3JEyDYEs4PcdbgXkbTkRBHRGEHfd1nmNYdCgubBhsVzCtHW8MiTcsyzoi",
  "key21": "5CakGusmoVbCXMEUCAkNi5etCXq4uwndZXGznVxNWfVTLNEeZw5Wx1bVAJbBCHqW15hwoP2i1HYh1s3VFeMyqKSF",
  "key22": "XZTw4ndN3o6xGAeapHJZB4QQpxPWnrDrET9rHghGNbiLV4WrpNAVG9CrfKCrhk1t6MMHiwzX4erz8grxcBoK7t1",
  "key23": "xF2QbWZKxTU5kGEjPWBzrqMwub3xSYpctu5smtzmU1grYbZiAx6Eu46TXx3av5fXRGnXnLN8JauyeLTc9C8S85R",
  "key24": "4BCmfyh9m9w8LGBMi7CCpv3rKedMMW9FTzz6hkQprQuZw1AHpmZXWcdB1j3Wq8ViH7nfyAZ7UihBaRNQnsLJGt2u",
  "key25": "485YnhcdsZmPEB2yyYwoQ3yteNYBycyxqTxSx887ojJHdPrqS7PptMGgiHpLnwo2hiJZ8g796cmUApuio2hehFry",
  "key26": "2YL6vGcEeKPuoqRd5pofYWQD3YCtsqCSVMXvVwNx3y6YBTocpNSi9njPn3V4vHMmCunuRygaA9HG1ZoS61ahePWD",
  "key27": "2E89yQXBG3aXgqJHMt77TAYSbqaF5kd3SsAxxK8TfixG5iV1Uk2x3Y9BsSk8ei4auHJebJTuhBzrS2gKG7Z6Nb36",
  "key28": "QFAgMW57dzcCXDuif3d8XTgZTHJsWWx8ik2L9hSWida39tcsRMrxupPgXoip3dK8F8fexLQm8wV4VUAsyZvowTQ",
  "key29": "7kYpLeThckyBsQfPA6LMdKg7Wr6QQoDEdiRdtBZsig1RCycGVnKp4PuzS6bsE6BtVSgndTLcLzb4Za89MXpiLKt",
  "key30": "3E7w8UYvyrfoWNUbp2pkXs8PETumQkt9JkSCqkU7cRZiCJe85wQqVKpEUaH2FvmMjASkCB6RZg8VSvjq7MqEKqzq",
  "key31": "J5hkpQjU7pkKXYHRpQWfsrf9rg9LbeJnvXgrAAoUKhzAJCL2fQRPvXYYgXKYWL9ip1uE9RUwyjiBT9uGwykmdDA",
  "key32": "4xgQtBQPXFs3NywLipGSxmqspq5CSfJxbVResKN8q6TJ37eL7SD5iHVaQK6GdRfqexUWbbEQFnT2U9cVNePyisqQ",
  "key33": "3XkTLLCYkTYp4EnQhcrAFaKoxqpMM4UvmtonFL8dohodtSY5Gc5jSS1XcpGsL9omGNenvc96Jb4NzjDSkBDFWXwo",
  "key34": "2a4wEJ7ZXNbAVuct9gH5Ah1UmZm1JEfe3gPnboLF8orEpNZtvP6MPp3EYiX6mQi3W2F9NSPwC5E1a8YX4yNFKMr7",
  "key35": "3tcrdaEDeWwJ1my5d8YVopwchxVaRVcwjjwy4GbQv3nuNWozMbTMGTwi6kQstRpJVaJmJFN8QZ571ZEjvjN8Qk4S",
  "key36": "wC57Eoia4wmw79PZ99UofbWQAgW3i8eWXWQq8WW2nFxGCBpAm8MdXfzHDdbCKHa7MhMq3XMPpjKq6ixqFGZ6d6N",
  "key37": "8LDsLsfVdT4Coc7rRvD9va2Pmc9d4joxNaVDGbvJdCz6nXu3C7ifZ74QDkaFQJN1dgRBhE9LADPXg641JFNHDtv",
  "key38": "2YMwiQunY7GJr5muAbjyP5is4N7jfx6smoTYi38c42uCPKTh6SRCMLHaihYLSto8tVZP9Dudt7pUpyjC4dQ4cBuc",
  "key39": "ZBZFaZBu7TWV98396DyhxgLuWzaq8Fzmwn8JaR8WQrra3GVjSxwkBRDUMPXcW6xVn1UwHuCVKJ2aD3KyE4fEeiT",
  "key40": "2o2QFFsY2ZLrr3K29s5DngFaNjsCfUyK3yMGTjwrBfotoP2MS5gRu5vfj4iFLwCBghN63VQ1R3VhMqZtg58mp5k",
  "key41": "3aXE93oPaMhqvSm4VNZ3s2MNhUBPt3BbWQC1wZTvT5ZfEtedkTR266S6XvbyKJZD9ru9DgTqhvpnrDYY1vj8pjLG",
  "key42": "4BQQMDoCAvj8JbzehjQ7EwkSMsrJBRgCDY2fVnkfWzhEuGSzhzkc9AZAyGxvXtqv2CrJc2SpdEGQ8SH7s49xQ47e",
  "key43": "4bmhCjU679VEGrrKwjxyk7acBDKSbyqQMakW37tgRwru1xBuWmLh42DUS51jR8EijDrUgtGFzS2mH797cYYCfbdv",
  "key44": "21nUTcJc7FASzRg6FRZQTkebEdEWFfobPNkt3pk7Cro9D26kwNSZf22Z31KptyYrLZtqFuZETcxVri3Uhzj2ZgrN",
  "key45": "zue5oE2KavQpXFQZTSNbLmSJSqEXD6278SQWiELE1MjBaHuhBcFVepdcCMdXNe76k5CTiNZKUx3NJAz9D5p7CuU",
  "key46": "36zTaDrRgkkz1qPmocCgpNptvWdfzJxP2Fy3s6LfjX2g37GLDZcY79cSYWELcAgEFhdoGPCVdkYHNZGG4Cu8p6Sb",
  "key47": "5RovxAckwqrmehed6s3RTByQcpU9sFZa6D83tKTQR1KjTiNsPAcZSFdTaPwnhEDRYC2xffKc7yvByR6JWNe9U1Yd",
  "key48": "th4ZVadREQV1tZ2WFVVaRiLFKHXte4qExkJEDeQabtf5iUk7pnYxb9WWkEVwvS1kEmpdeXdXPKvK62efTbAQXn7"
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
