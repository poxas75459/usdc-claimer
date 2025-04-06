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
    "AmjfNfee6RtPq4N6B9SUnHKLKaGJ8qZQpeRFVHXb3Xu9LpG1bgUvr9TCddrmwJPSfa2mNfkNsuf6NXASv8icxKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLUNWyXviSbLNmxVH11yn4ey46tYQ33BG1MrP33WEEFqGRRe2pYbNNz75A4aTFJWiWGjnEDtgEFwff4AyRpBN9x",
  "key1": "5yDstrbQCLsrVGiG9FivRDnwaVTueWVJPgPpfK7TJkVsFDMcAHVqx6Yr2AexD6Sisi4M4pU1HiPAopFMuaoLQm2T",
  "key2": "3Q5KCxBWo2wA5zBxJrECNS2p1SafvxhUFyD8hni4FfjG2o4GSDgrChizSVQg6Lu52G7gRYZXegRRF9kvuS1jKUyS",
  "key3": "3WMLoqUzqHZDxSf6z7pb7Sd1o3cc7vRJkhcxPfxWstg3AfR1EQB13L6Fkwk5DNh27a1o1eH5rmVNzRnHeboc6qBu",
  "key4": "3prfx3x1DMAcimq7jEkQ6VLF9ahFBPbMMoDHQcHHzgpFdqVU8T1SSCTMU6iPRrzFvko6C8DcWTN1MuXd1UvynoPt",
  "key5": "gqu2SFBbBh27daq5SxzspL3qgRSL3Aqo7zTEggCwcugamsFuGMvkPr2gcVhmyw8prY1a2Tm4Zt68P1CmU4Gr1FQ",
  "key6": "5yhvb9rjCbyTuLNg6RFgbfL1Mt8qEe6Ci9e8YEXnLs8wf6y6BUZWmQfMyZWGThw93NfS7jBVomsmW1YeYZVguQH8",
  "key7": "2LvV46zaTSJGK3u78jm9wWZY2NDAKZEFCttkWKBosBSBWh6xUZmia9KDTmkRmMdyNAT82rkjX4o5oy2gKjzPWAbQ",
  "key8": "B5RyZMxC3AYkaQkN5SYnSZkko4cNGLDyWwEVbuyk5WVCroacEyeRiwYngJBEzCJ6LxnQsSDSStcNSJcumdm8Vts",
  "key9": "5LQX39nj4RphBLtUQbx7429gbXofJhGdtm4htRb5STQssSU2LLs7kkCXuiiLmxFz9bqXRN51AnzCY4uASKcLQzsm",
  "key10": "5AKUuLmu5aBvUcLSna7fvjVajkSRxKyi7WeL9MPiLTLH6Aa98XsKpwiTk27pMKQVCHd97vHYhkTeMgFuEo1LyFYU",
  "key11": "3gjZS8k3qQ3MGqYYkfa1f8tAT1QpkdcrcDM8gBfXZBAqydbBpWMiUfeVf5WT93Jch1MoxiddDDExdigh66wS386Q",
  "key12": "5tYm8wn2nVWfku3dDTYwagDMvjY966spTmwdmv3VbKWZGxY9xMfxRJ8TL2AvAhZxDKQfTpiA7bGcnZPTqZpFhif1",
  "key13": "2zqohKrEbfRVbTmqrgJkfYy27STRwjmP2zWz393xYUKvR9hGNRWC39pAjww3SpW616DbHF88LivhfrooN3TA6wyK",
  "key14": "Li7xcHFi6BJGiKD3oLxf8fhvgpa7i5NBP1Q4716iRV8KiCdq5N1qQv3r7WQeCGjpp5kNxjiidACj4yvhUFVTRSS",
  "key15": "4dwUS7oeKJuDqzzwg6CjX4j7NEAyniUEiZVvRAnCdMZoJv2NpN9WECFzSYxgLZJwEyfG4oAz1TwmUC832jXMYWfg",
  "key16": "4vMb2Lzbjr2qXAubG9yUZZqjkyBYLYbzoiWNbaTyZVWmiNc7e9FjdGQUzkgmMACop6abjtqdcKd2nogWssVJSGyt",
  "key17": "2gKpyozEFAbkFm5Q18vzcc6fBidyH5upcHNdEzsJckH4ovtenLdL1CFpXvBtToRN9CSNj5Jyv6GiFoqHuQNMtXHW",
  "key18": "5UVLk4xumxTpLsUEfqpqU5ErPAsqt57SafTjcLvKaXjzJ6CV6GF4mLMpL6XZawqoK7SWNa9QYSbFd9t8sysWju9r",
  "key19": "4CGFRDoFF4uSmM3gjE9bMvS5GV6mLeS93xrNhDViQ3NjptnFrYnmpgencjrnDJTqJCsQ4PHV3ig3xpa19mcS3nQr",
  "key20": "42CtEXPfGtEegFaq442yRm2vE75y4FxNVzpeWU4ySkvwbCeGEMRbH3qqqqVQNEMyP71uVWhoBQfjGbL4M96bhjs4",
  "key21": "58uwcfxjvNAtizfQMx5mbVYXv1DNgoY9WTTxoieuFdXTmmCsawUS3LBPR7RMQnBeay6P3fSZJ6x26BnzisFyA7ZZ",
  "key22": "459xQBgMA6yceFLgSgYgNLmPxaZVuQf5ZRgMPzKYteoR89T2yMUbxxVwXv2XLrhmYeucE5yYEGpNfZVmtAHHkJYW",
  "key23": "4dk7DcYgpNJL5YDPquWnhhuUHPMQ9XNXvs49NjRx9bzF3Euc3MohAy76p2MxGX91bgeG9Vxwx3pock6VuoHh13vD",
  "key24": "cLo6TVSUrZd1rPYfu4wQKbbdkhsrYmnU16eU8xcPByGbAtoJ9QKhfFQTmVYRG3kRDBLRLCFtWLYgAKgb1Upku2h",
  "key25": "613h16U27zgUP22KXNn966C512KkdWBAgH9UUuJN8QkHgymXZZXQMwG5PbCva7rmdnwTrGRAPkyhLgmkF6dHauE8",
  "key26": "2J7qnabDByWyGkWDD9twteeJxEyUJPbE4ypUXtiLfChCzDGCEPmBkxrdcoUQzx9rtmTS6jFnBWQRt1JQLAdemhe3",
  "key27": "62oiMym8P3nMz6ViNVdgkGtXE8yLGoLgQnAfhBSpAVjNd9BEzXMmShW1KjnxW7GpSuaYHQKqtES8ih7iHqUVDzeu",
  "key28": "3XiC3jeyvckpHPKM3Skz7RhLNr9bQ167V3tcj7bHiUFGN7tz6u6aox957GjmmdtjFpUUckzk5bfxRxZJKCJGQDSJ",
  "key29": "5E2AuKVgb3G1GYWoc9HW6S6C9JeBm8GxqzPDC4pJavWjQd8B1iUzwx6ZyctqdSYu7frYq1s39FDTstZicZrDAvrJ",
  "key30": "3NeJ5qJYB4mgrLbw8c11NkqojRViVSrVpQ6WabhhPP6fUdDFTdwU77R1KHZqH2Uv8ff2CM6nAc145YDcgJLDj9fj",
  "key31": "5CPk6jyv8XTYGEsNdQWVfvzEGrmNZxyhYaMqtdF6Neeuaqa8c1mMWBbT2TBWkFWEt6VfwQtXnHguqnNmf1qCBqe7",
  "key32": "3jVrvmqkjyrA3vd9z4WtNV3XvnV6o5AHqZxrnVJ2BqM83xi76LWsANGShSLBpugZaR2eLnUuR2vAVAh4QVHZzxMe",
  "key33": "jV8gjGwptiKeGYPLLLxEVTJSjEAaypsV6k5hyVS8mtGgFVgvwcRSvqpnr8TkeT66WR6HWSat6chvDwVyiw4m8e5",
  "key34": "4629S7Zdctw7nTH6FkjSRqQCTYF3rUeQde862ekcFMz87RRH17nBLWb5FFMeP2tJxS6DEUBb6wzBNJHADq161SbK",
  "key35": "2iEVWWoXVSLyzzs4QX46V9pt577grwyQaccXTxjt2r7KLZgGknRStNkvvFxwBV4eAPKEcG9ywyiTEUDSDavisszM",
  "key36": "5Wa5Vfx2NcDM35BNP5U2FQiZFxKHbcJvYWKeUsHM15CLHroZC3i2prU2qPoRuwKxhxqPyiBofGQhTtBjZX7BeXFS",
  "key37": "5KQjbeBbcZeKoXadWrjkKKfi1C1XgB5ELWRnCDrjwozxdWWDNsqRZ8oytQDE3pc7ngi6c6KtnfWqaJkRc35zxnnS",
  "key38": "5FZztRQpMKiWv6HjppxwNyLrppYjmL8e27bsyTWnDroZ6bP3UKepq2EFsQBMBfxdZSaiaekfSVNNQYVxvFRhoP5p",
  "key39": "6YjMGmBpnD2wRn8AeJjsH8QVnhtHFJYcMmdjZNzEtVBeuku999SaqA3dKsFigVqdCi5Qwo6qyVVnxYGDT1rH68y",
  "key40": "55Kd9NnRdji7a6ZPbkrDP7VgNpuihFBPH9WUw3rzMVmMQmPh1S7BEtEhmoH69XM8JtJPr4Hz8wEg6X3pMm5y5ZX",
  "key41": "2tLhtGs2u4ZvEn2u4wZwYr38x1N9rHkSd2J2WYET6jiTMhTs8gbpuZttMrPKcnE1ppeUGTBAmdeuLxecDQBKWDxc",
  "key42": "5b5tZhVL99ThKsBHZpqH5FELUg2X311y3N1gHwQXTCcyECtgyXQh6bvUqpYBW2XdZ3hJkrnarjeZtUDFXXpHwoqt",
  "key43": "5nry7New53Y5EcmRs16Kgfin8qEkTzpi4vcMaF8CkiE7gULYFFA148p3ZMpYM5ASdGXa6GktMKoCcwSzQ9GHDLxi",
  "key44": "gArar26rNVLHxX9hYRaCfQyAY8cqXn5tAE5rmXfBB24hLXVLtABtUKzwLoqVdtBhmCNoq9yjgYFepg4sHQaRqxf",
  "key45": "5voQvUkZVfieAoCrbxPNEkvC8sKbFXKxiCzdMGM4Px84uxVWw2UW7xynZ76xxNVWBK6fJiiM2LGW36iAZpoYpzGE",
  "key46": "3WfNqXD6otpFddT6WiBSU7kz71w5iRKUN7QJk4RXm5oALsctG9pQ34J99QtNUToKnNRtfVaGzrx9j2vfoeP5JU5M",
  "key47": "3WkMSxoSMy8EXFy7nBAzN7xkZWJXuqUhPkVo2RzLtmshMxP4iH9191eSfjJk2JF1h2KU4oBo5A7V5iyyPbttytk4",
  "key48": "5ZfSiVgsPBrynT62LWktJSRsmhPfYERdHwaBpXwzjDg1Kq5FSXfMa9gsGMFzn8kn7shepmLSvSjYNEBzrNtrbHno",
  "key49": "42bUrgDHbbHUundj5uBY7tJf8PERsCVNcATuf1CKFnoFtvXb753J2fbpQchcnoV9GcDLtB43E9xHDEmTpj6u859Y"
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
