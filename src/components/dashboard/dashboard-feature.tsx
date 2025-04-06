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
    "4sunqPkTJZzAUQ7F4pFCXgo4CHZVrtvFKxz9tZsYivGcpMck2UvHxsbZvcDPNqsdd3KeGhSgx6R5Pup8FzLK1YBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GE8o66xBDdrH4W3Pv6F549mpC7jWbQkuP584PsDa7b4tovR1xTtzYpWAX2Nq2A2T2L76G8PCo5styEHtQrrTyBe",
  "key1": "32fvHViv3BZpnCy4sFNXLRnvW5zELEWeuyiyKSAw3bhvtjBgVhM8H3xwSFRAtA6RaGgPk9KXoZNED3mLegkaiNt",
  "key2": "35ksRSNiwguMU6Gqx7VrwzA1wjbCYvsQD3mparqzcWYT5uUVQCoFD5DkKUTY4WhjaXgKhG4sePSd2g4ykXspPiQV",
  "key3": "ph9dwfyPi3fGp6Mf3FVnYZ3wh3YQ46ne4Q5SeJnMPNWbbBVmgLK1jZgPuEfH9Qt7em6itE8ydyAL9GVUCUwfCBo",
  "key4": "34HLJ73pWazCMd3FmEWzyitGnMorbjQiVqr4Y4MLUyRcuVdjgMfmNyZiA1n6i4KT54F4XJXVvdPYB3L3ZxXDQfQn",
  "key5": "5RYzqRZceddNW7UWr3RWdjdD8szcS4zumU1YQaVneZBakrugViE4Lx4PvJAjrQJnh8FVQWvjEvM2q5ahfYgtTxED",
  "key6": "2VxHVDowXAXAnwyPVGakPTjGoDs5syhWS41H67qDKdGk2qedZAy3Z7nD2XZAWuPipcHhWB8m4yZaVPe3wDSeq5px",
  "key7": "3WABC9V94X8A1ipV2FyggqhLD51zPGFWa44sPJC6oKEXyPgAqpfEHDHmGeJHvhYkJpFyQMvUTiKvL3S1Y3WRHbnV",
  "key8": "2Khic9rjtTPpv7tZgsAujEBCvBkxx5ck5KAArPXsf6FMMgTCoSJMC4wHAqTvHtR7JkUmjLSE4WiLkU58bcGa2nNb",
  "key9": "521E25kD4RfghcVTSVvxg9e7U7N3mmjQkNHLVPEJeZRjb7eL79cXwpz1owXBDsEi6NnZNhDDuR88TFDdYGNBvz4a",
  "key10": "67Q5RpGjAybLYsaGRackViE7PAg6EdB1pYSv8AHJTUyU3pqErr9MjWCCGkYCxUjLzY57qtjFVXJqkCU5s56MySjr",
  "key11": "4ukZxvmuzUh9brbN3e2aaXBfPPCJUr6EQotGnaGNngDDiLkWkzYTd9kSFpFA8Wnsh6ue8KxzB7wMHEid9RUYunTf",
  "key12": "5vQmizbv2i4g7BowWLi1aPYZdUoHB5FTt2zA4CQ9rhE1aGFkrkbesevTRwaXVjqmwCApnQfZw2iPptGDW5bBUosH",
  "key13": "FihxkiZgnbkiFNYDzLdDjgtB5UfwvLQupMHUUvC65gABinWq6FBGWnJEzNH9JEvYqbvHfPLTXW5Jdm4ictF674V",
  "key14": "2JvLCTRYbYJEYPHVmCGuBTkWCxvfBhipLAkAzDKjABJR49CAQ16qEChhuLkMru2A6Nap63izYENgBTbveyR7kV4N",
  "key15": "1qhB5jhU5C8FisXbGrcSKED6YrJ4FWUxucydeCCLueqKtQxTyGacTUDGNXAY3SQH7pFaKafVaMpD2V2hU1TQypi",
  "key16": "zuMJNrQXmH3guAAJaeC2KvbghUW47g4U3QEa2htdurwKYZjah8Lj9i8ew212DH4BYE81FqKR47qrs87MwWzG5V3",
  "key17": "63NGD54Eesn4N7oz35Pe4xderhaGudYqQEfocNjKczNLbF2qpAKu6Q2ry2DEp2hatQHTesaXKCEFRZhLrEvtV9jK",
  "key18": "4nL9pz5L6XEjpUB6stMCwns8DZugECfjbyTFpo7yB1YnP7JYFtyg6QR6jFobtA63WQX9JCw3VMinWHtQh66NGaHr",
  "key19": "4fmrmZDMdE4TFkTdhH6av3otbgsMPFesAqUifCubs52pU78haxnFG6KBJQheUYSiX2rdaoymw3Cmu5yaiCNgYGRP",
  "key20": "4MamHbzYsJwBF82BP7m7tcJfN4HNfQtVT2og8oUy5o1aWiPkd7xh19YSw8R43WDT34L9rvvx5EvV1ceZoGFEw9VQ",
  "key21": "2sqtQdZCuZnmbSvWFB8NSNgrzpLFGk4sM9jNr8i1kh7KPa73415ZuJekVyFbT4iyNL4js7TNbZdGifavuxFbUcxb",
  "key22": "aozMkk8a11LhP35rBfbSWXHsLqyjJkjsdGmKCoCud125fdKAhZaUkqjNRoD3LQJfqbcXZn8CcDQ1znVQreDde9z",
  "key23": "3d3iaRgzPbCzSu1KbNeeuBuDXbkWNbZcCHyJbRyLTPJLU3dVs6xRteTuUfxEsJT7PHXWAkzqwKMkcv9Uoxy2hhLt",
  "key24": "5oHLe3JinV1skUtumsTz3r8YMvdqPM4RKecrYwaVDN6r3QAE982iGwpjGr1j54LR66c64RQayg8rNS8PyEugaJ1x",
  "key25": "671txKQc6dAB448ee4csTGE261uRxiHbppDu4dBM61q2sxaZxcwQAqxE7CLknXziDneBT4PioeUnaMuvqCWou4ce",
  "key26": "4x7E8iAS4AiPxysGfvSojuUq3XtYKzroWX5BPNC8EvyFzCVZp6jSsPRQqYSWzC2wn5VTVYrpHQqzatGu47amWetc",
  "key27": "2ZNVNYF5w6AQiSaDfKaNyuZR5U7DWC8XaAHbYEx2azyBTVUf8EDnqCLoJGU1Sri8HDGoXiPygMDeByb5CYY77Maj",
  "key28": "3736tEgGo1pnCuHPDRwk3RnqC7yNiibE8M9HWU9h9RSeBsYpQmusZ2FCzFKHMh9YHTiVVK5BJowmyYRNFmoP2yAB",
  "key29": "3RdiL6N2CaLsYgtGtVUtNd1gYrFVL5RjyYUn3qPoyMfk6hYF9rvHvGPA3mCwdzL57mFTLVZWCmZrunVvPoJXd9v3",
  "key30": "2W3FdKN77HjwdWrcdVJ8eBzmKWKRsKmvWZVStxiA9u95mjUPHEnwz748aGEj2r85txKhVcctUDmVJt27TmmjceBD",
  "key31": "559QSRKZgusivXbh1LaXgtVTg8JB285sLYykbYTRv2Sqb25YoTjnfZZCxXF1hNhbmjuKDwPzULbmcpYnsz4GEeH6",
  "key32": "3i7YEgpsxL7Ce5HnXvNhZYketweUeLUhrrwNGobkw29GsJc9uoBi8wihw5jWnr3BTmC1tsL1UkBCGv7rEjL7DQbM",
  "key33": "5WiBVMzdZwVkrCXe41NDZ9y2epWAM1TEikrM1g98fFxMtnNGt7MMGW7XHzjWt8qsopvqAD3UtvohK9eKCAhHzx4J",
  "key34": "5fLyfuaThqY475VP11qGQuEmdPXPr27W4s1LioVbPJdHPEuWxdrwa726EDtsPjejAtFnumxxLZJi88bQTgo6xS5Y",
  "key35": "VmcsGq9UV7Foa3oWEXDa9vxKP7G1r52omGzJRaniA5tB1ThQq4VDoA5zYWK1AKvsWS4ijYe8g3zAdLW3Q7B53qR",
  "key36": "4VTNSm9QQKguZsaidDZR2qW6iXB3HhdSXRnMKKuTPPixb8N645EuEyfF2Yh4hpAUXB3752Sc8rAyTYo7wF5buNSa",
  "key37": "2ZzJydXZFPMxfSYDXJN7TxWCMwncVTFqn92bPXR3rSJVc1zzpFXMrCopQiLVwCmD1T7jb8JPg4ZHQ6ytLwUjnkCY",
  "key38": "4pkJPq8CkFfqbWAMTZcmvad8jdvvyxSZDYooqpz3iMbSRSjmEG4V57gYXNYJqcTd78ThKu689VbpadDXumhPzR8h",
  "key39": "5TbNG2bUMm85Y4c2GAwx71oLQoYuaAHRJUb7JQNFrJdv82dBemHNSAxQbiMD1vA7d8ArfhtHzTbXxp5omPaLagmH",
  "key40": "Qx3SvyJNuYXM7bv6aJF6DFN55yeFkb7RPwLvD7X6DkBaDJRTCfn8SPfDbP7zf4bayqannSgtKmvKUNWEo6gvgNB",
  "key41": "2BcgoMrmiaePPafmkJYjuG625MStnzm6815AftFVRhhbFQay18C2LCKswjWwzFTtWZKF2EqkWuaJf1DSAjhLxwtB",
  "key42": "T87nhvbFmzwWsoLkdJnP5ukvSzFxUGcXajHZZZAMbWRsdq7boduansYFkQVipvBbqwDuZkdWQZFuhVuwtFc65Cr",
  "key43": "21ins5y2QaQ6R8fcy2XYASbBhKzrkQgwxcmqjT8u3HyvvkEVJZqb69KNEHnSXJxbJmC6PyY4uqCQCwN8JkoCfL46",
  "key44": "41EZa3AsGGbzoCAFqUd1CdDwC6u6SVwk2Y9rQwX1qdE1AR7dtNv7oufQjbobzfW6k45xSxpaFwvb7vbZVUXGZSp",
  "key45": "53Q4Ly8oZHgFh6G4ctsGP9axabhfGhTLHMPSYjUDRisS13ddSo3tLNYiEAvAuzRS8NRSP6abVYi6CnHcPtRMKSD8",
  "key46": "34g2Nikd4cxfLZ2yUaoB6nRygA26m1w9PzJmMFTTzn3aFa38E5BPf1DVpb3RfK4Y4ihkaYanvJ6CYE8y7bUmtedV"
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
