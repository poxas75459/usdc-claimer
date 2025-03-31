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
    "39byfPukhcsgjYJsJCEC5jzxpEbFXQu634ohu4qYEWKZGvuFKbirKAPWoXJaaT19BfajY3Ndji6WkVjVUwAQhRKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231QnEWhqC2gnM7EsLAQGhPrto9VYTcL3dURJeNE4BVXNz942y4n3ijBqXcnSCmYxcp1nz7Mnke2dzw5oEpbHgdA",
  "key1": "24sAb7CyU9sbeu36BxmuYrRAB1zXWXiofLVDas7RF2HoraG1dKLBdi8oYtFYjxhe3NvjX4WkQCWWWVfDNwx7SM9d",
  "key2": "3dwjaq6P6bMi8W5Q2ajRfHpabfaLwSR9NW4STqLs4X1uZnu4JP4KonmEgeCfmUsvAf8tM8FPgEvCkAVWPa8Sqv4v",
  "key3": "2iNAMETpmPyrhD58C6NRbHngRuAq3v3CUTXnLkD2YNFPs75AtZCQeATF6fG34LzEZzTcGm3buAdJTHk7aHvdyKSp",
  "key4": "5pEzKXG76Mk26N5c6DJc8Lg7EDF9nVZBh8kPwjLSQ61mFJaymzmPXdxzqusZM4qKzJSUaaBsjYX3ssD7uYoWgmkx",
  "key5": "36WdWLJXwAB3ro6cWfwRLBfaUoJFnPXuih5SUN5hTskWRtkhkFrunqnRvtJnWYGDPegTdYh9gfbTQb4ERP876QsB",
  "key6": "236AL2o8zm1pLhvCJD8oZh9PUhf1KKqn8GcEepXig5yAU7vKFWiBj4kDKBXXMQjYXQ1WeUGwkQsQAWC6HMCzxNHD",
  "key7": "5LopLbqrZ5B9zPKqpShy5c8SCuGezmoUS7CqZUWLAqxsfgRK7dAygWFW5sNy2aUYQ4MUnpYsbXRHU3v3fwSUSEvF",
  "key8": "5pY9d9D96BbKLBuSFtqvCUSumDV8n8YD73frQruCRPirSgnDdQj6SZhSodkiQLCWukHsXd5dQPR7Ns3yUibUoarv",
  "key9": "2yZLRegErQ838XafLuvN6KPic5ojTUEBm4pMBeKVExnLuhjTEpXrLVr4VTP8oCawJiK7xKeD7UpZWv4g2NzxKWDC",
  "key10": "4YoDGoR3XnH745G8AJwXHcyqjurMYX1pxh9A9raGZqsXTQvXD4QMZmXTzMy4PMfZ8kiTZbP35r6dzeGnxeAeaEm7",
  "key11": "36zEb1HJyeyrQWyfPua59HYF9KJeW3Mqi6apzZCEVgASXgp4vgaCp2eEzRoLFzgF2nWNnegiZVZyW5iYV8FHs8Uu",
  "key12": "5epeNoMNPJJhzvE76u99Uh85ny1F3AVB4BpGx88ZsYBi7y1MD9myg26VAZQPRQmDE264naNWrd6dhJAJFXyAEL8A",
  "key13": "jXa6scVQqTuoXwhJeEuic1PHxkJtWVddazJLxCAh1MSy73PXJjvxwUJuTiSU2BSCsL46X85Y75SoCkGWKsjBeuB",
  "key14": "5ZLR46yibJf3TgZruuX3PeZ1gK3xWSmYsF6CXhodRpVNtfLq56EAmHPT7gEzb3AraTP494S68Yqd54TT1ND3VAJm",
  "key15": "2ZUBRTa3Yqp4vQE77Zr1VF2us34SYACLdM6QYRe9tX8iv75z2iMzqjCkRbzfxkKsbYALxNYa9d19Zo99Eg3phuR4",
  "key16": "5QNAsV58DdQPs6fZn81mDkEuifhDNszxjH2fqx4oCHzLRE2iczEyqfAaESioDtbuw4m5FcCL6tR72fYMjxppx54w",
  "key17": "5hrm73Vfr82JVQRgN7tvoar1ksKHWcSfBgyMJ8FJ9SFm1FnSCyrDaDBJdWfx9FfqAZs9RQQYVtGp9RKHKH81MUvV",
  "key18": "rEUSv3S1jX1rffShGkTBsLeX3VqBd2TNBFDGn6Xuq3wPofLLNzfTQRS6KfPEjyNNYQoDfmx6Msx2v56QbGXi7KG",
  "key19": "WvKvZYNtPKk7Co7uUcXPquKysYLVduBPf15DDV3TsL2ZkmwUvoNr5n1QoLJtLyaSbC7vtEhCzeBrXXCUP8U6yzE",
  "key20": "ZfJcwm1JiPa6NkrzmsUir2v9tyQ24RCVxEiET7t2Eb7iTcWknEt8xUD6opfxbSL9ffttdEdVhB3PYHUQZAkDiuw",
  "key21": "o1fXkKEPSUENDE4tQSL3yozJQKtwWcXYYSLa5A9dd7oy6jXX2jkxzu9Y6pjavjHmNR5sP4PWWry4hV1oat36EBy",
  "key22": "5c1qkDuLebnGh8MHCcm5eZESMmKns1FUaS2wEsRVFmr1vAEoStHSytoo9ym7TnuzHopRT5829tiLLQuXMAZtsqUa",
  "key23": "3ufrNMLaGz4ixsfMEy39Fkkia99c3UfbRfzHKUSxGCWhscSuRLWTNLNRp2ifM1pzbj4YVzVsRnGLijPEZArB4ajP",
  "key24": "3R5F3xKCPY8zCxeG5Ja173rmJgNKwXZkMXZbQdqQ9EmVc1ex1ryatkrHx9rbTKXTnsW8GNyiZHiiPPwUzRJjd3Uw",
  "key25": "3KQZASo4HhJAJ3SjWYoCYSVg5Y32LBhhGFZoeEE31S4KHBN2gAvAc99yMSVzA2rcXdNb48NnnCHMBXfDEMDMexSV",
  "key26": "3FSjutp9WTqCmUSwxDEtLPjnGgP5BfjRpx1eLBZwgHdo24MdSdVUpoTJBkSBTBakJA9nUYCDMaXNktyehCAVDBK2",
  "key27": "3vFbkL5wy3VYPg4qt6B2pTsV1wDBBUY3zoYjhpRorDpWAV2Kpy3PVhRmodd5ogFwsk1ARUGp2F7tvnpLD7ByXDwt",
  "key28": "4TJohBfLGSXeZrwTeXUacejhzvJV9Rthp96EtLRHYmDEuf4W5rFJCPc4tKd1H8UKawu623s4HLKZk5y1kvFGW2rS",
  "key29": "FnZ5BAZtXRMHdFLuuCwu6ifqob8BJvvk4yw16HhLoCejnvDZr3kixFRnSVhPjK42w41ZTavAVyZuF4zGSDnxTdY",
  "key30": "4ukLhmTFW7wCmiL8YmAtBdripfF1Xyzk6TBvJP5DSyLauABDDzBjtHoK24rLWP6R4Zx2e5Dzb8WwJp9XQUWpsQW7",
  "key31": "4MCcFbjaBUYESFSm5cJhBHYQBMzSAfYzNrKy1HRxa8AMjHTyW5tj1kxgrWtwAnoFevZMNE3QkscnktAZQpPHb8Kk",
  "key32": "4e1bDNamaHMZNWFHPCGyiyrRtTJofnaYwRiegGR5Wfp6kdNH15dxSfQCwvjkgEbEsX6KNUvXazETXGqdEpkLgdNr",
  "key33": "MDehVpA5BhCbS4fF677EjuyUC7fbSqjABcdRDt4LHg2RkHL1maN5kwSvACLKfSLss8EVQ2UegjHtqxAE9YyxT3i",
  "key34": "25FjG51PW7TB19g7PZZDS3e4gPrCpv1vesU5oQfiUyXBDqUeMeN6QCT21J1XRk9KEaJQ7R4nFHudNSpk9ZmezVwD",
  "key35": "3REwQSSnhrUwBBfrKdfwx5jFsm2ba23ofaXzSD7D8R1bPdCFL65SK8T1K8WpNhmCDMG1neDc6U8dXMEdB8oMvjon",
  "key36": "2dDem4bD29TvgjkwzvaWfHxFf9XZn8PMuCGC7Ckt6d9CVGUepXnQUUzC4uYv9Bc9EURcEK4iXayUqXRYamgVc838",
  "key37": "2ts3s1yZCFJiUdvRdUqGFhS5pEBdja2rhinn8Gd9v5b6wT3YkmZ3xSw7pKko5KK95vANtSp8SYogdyPF9zS2tVsE",
  "key38": "ZSKKUJSkW4sAYAcGHvXwPLaYytvfyc4noRrPeVdcgJSKyP8A7HYPGHuaCg2Qr4X7N84uXWFdYwubBCXz8Ys3oex",
  "key39": "3PGmhzba5zq7rN61SnLAJYmmPik5rugahik9TVvrsweWZoYPUcoWUeidUuxu7cq5pbtNVy1mZPpmYUeNdXNzBL5S",
  "key40": "2YPmLpQazZT4kn9oeYMCu13keEwxdDzZJpDKanXf3fhUbyV7Gq13rEph98XCuCxRC5qFfDWUHgExXSwnwV4SE95Q",
  "key41": "35mtgvfwK6u8kwVNLqhquaSA2NYkk2N3Wzf21E7sXkk6kCEBoZXv5PJEYfDwyv4GvwPPvEn9ZezBe4CqEpB4mJK2",
  "key42": "4j3t4nszA7tsvU5CoHwfBkJ5zp3tdtvJNs2F5MbrnC74YMddZUtapv6zSTRY3FpZsfgmiKrMRndVxJXfLmGCmT6z",
  "key43": "4e2PaxVsy9MYDBc8fF1dzzko8kH1uHBuCRiGjtPWDdkzFmtJjbhFKHYDyR2aLBM3u6ymcf9SJYXfpKmLeZJrqxN5",
  "key44": "qDDiYSpn9oW3knPoct9vzy9VUismM4HLwYUGpRPs2PBvreQnWDzLfKEdode6QngspKVgV5HTqPhp8drqmG9yh7r",
  "key45": "3WtRs6cV2uVsxD1W9kWuPtzNpfusFQ973tt6pkeGorw7jufSwUcghwYQ1322nHRBCb1UiQDi8dP3XdN6SNwZ88Jr",
  "key46": "5d4tRUF9xmkpBv4mJK2ghB3HK3Ygp5ijwxZbPMogmuHjAxzS47WJB4SHjGJTwr9w7AvjbcbfUjaXHYhaSLbhH5xP"
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
