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
    "67NkgxfpLLL71HCSHfGvmjxVmce5E78Cqkk4sWNcXLWCPMXhH3sftWYFJqeZueBv73LUnfvtjY3BdvRcyvHPWy7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w87AfRrab5S69HdjGk8YcCWVPTTV1BjGRFW2M5ZNVpG1HLdHhyrDodpXMD3HABFJVTPbNHhwspTDhJofeREgn2q",
  "key1": "4Kx65j2Sawu7qfDbi2f2gDZQtLkH2s5ig2qoJZo54d85oxLsEAR48ZL5iWC3kMW912HZfu5TeFkYcwFjDgsYnENh",
  "key2": "2yqY7D96MaofcYWqaVBUDn6FhXLCuuY3EzWqQrGsLmTvQtoYqQKUzgmrfJasyLavjbWLRGAW8Jz8YYCKUV6y2Joz",
  "key3": "3DypbyoUEXcfZ7dpTvVTRDhUF3eM5Rpkp1zBKid26vuGH5nGvD6XLVgBHNNNS8oJUSDfYyranswZByTope2JKtT6",
  "key4": "3RjqQ2RBuKY6uYXNTiNHVWEH8osofqJHedSGucFG1kcik8sGTJXaa1dDHEvMCnhHFPuMqRk8XPsKr9w431AC9Euq",
  "key5": "3TUnUKzec8VTuA745CS6AdmNJEPEN9GntZyUFArqnKqhvJMbnEFTGgm1Y8r9AdqCqTzwTFDkHacC5SSUPUgMnjC4",
  "key6": "C4TCUTwQ7MsQERGhrTHZPCKx1P8JHA8Cd1hQPDkb6iatwmmZAPTf8bBTer4jDFrvZBNDNFBPizFC6YNcM5SBqpW",
  "key7": "SYRevNZUa7HSRJw5XDp9DXAn9v8D8gyAgU3xUrg6ixPdpf2oWKM3q5z2LbYLcRx9Ygbr15f3k7TcSxqsVW3zSJz",
  "key8": "3rD3kEeUisco4UTCPyewNCmCzEN1coPAHnTXEMrW6bZAtnQZcdEXkbERN4j6e79xPfwcbSs9C8bmzjLxgzvzaXeB",
  "key9": "21Zyi3yPthiYdz287t2Dv6W9N4S8Afo6UebUWjdJbWU5uiPDsRdRnuPqAJ3PKJjryH31yVZiqz8updFTqdJoX7R8",
  "key10": "5aEGPZbsjVZWqbpGUNX37qiffm4gcC2RgxHLGrBeQEKmzweAKKWZz64faQNBozGfcMM6TX7c7zXE6cjaxV3jpA9J",
  "key11": "f3b4w5cNc3igbvxqFqyVZXwwrBTNpKuFdUdZ8DUKwksrNLtLa24ZRWpVo9sRpXtf4bfKj1opXEHDJVq3cgjBV7b",
  "key12": "3RftkshRD6Gn2yQAfsZvUjMTbqHmhVcgGsXHvGaF9Rza3rXHCc2TjyhaUfGcHvsxuZfzqqQS4aPFVqyPy59UPpwJ",
  "key13": "5v2Pnw6BeMnjXA56ZG3daSiRfKcibWBdCi8YbEM9KVGeZEu2neL4zyWQsx8TQwGfgMAd3Q6YD4qBZimA1G7ZexNS",
  "key14": "4n19b7sgEUiRuR1F58Eq7aQaS7NAGHTeVVwshAYfXzkgiwgox2uWTKKreAxPr4rwtKjpJozJDwJU48wHsABwpTqe",
  "key15": "5EbbJr34n8V2C9MukqHTHizYnkYCfAUo6mFpYmga5bWC4g6Qx9gpgh2eKxQEHQyt4fmqANhMoPhfsZyQBCZiBYrG",
  "key16": "3brhNztreEwxZY3cxHeQNuquDdMvpKBZZiukMLzApDPmM1hK7WHRp8aYNmV9KiN8yCgJivocqQqMc3FaGDQ8c5fL",
  "key17": "5XY8QBYMuQV1Cu7xRAsPunetoHxZobrxx3ZVTtRYWruNPZ4Sj61aJUaLWZcAjem3wrCbQTWTz7T4u4VWs1yrS7z2",
  "key18": "55ZtdzD55zmzrezVXqPqBzGxXcoQzox7cf9JMUmyLwUQECMrXvHJcoPm6wcZRxABz5L9U1LdtQbYGfNafh2nHzim",
  "key19": "63NJyJghzyoPgVnWgZSsWZNX8mQfmYKyfBxZ1Nt64gF92bTvW5RFvtaLZVM9fF9jdzoz6PPf4tsBLJEY9mdoXXyn",
  "key20": "4zpYVB4YvviojRD6U1W59wvWTSJfTXuieaQSph9LJgZShYbRAsgkPmQVYygeAwXdX7G8t6iwUQJejPZS6hJwLUu3",
  "key21": "3kwtLca67DZUuLqzcNEUn192iyKusredathpB6ZFCkjniJxMgMfkQWk8dRktujk9aHWr3ag6ZqZEp5e1BtrxWiVN",
  "key22": "4m76CrL7xU8wfiPRN1bYGVfUUxxC9pz3szmBP4cpTp7KUVViqL2xjFcUeHgvwEbdEVghjRs7Nkif8Qt1ML5Ck7hX",
  "key23": "3mrJRrnKUvXUWEWJudMgBFrgfaUD6RVrzMcAT3wvY88wbvLysRXDAe51Y1LuDKtTGzi5ZRqGBM85MRqNPnkrNQXc",
  "key24": "4tE6HDv8WWpt7xrJHmtSNBJ1fZReR88aDS9HHLwLnK3Zkd98k4MQNar3QBTbcMkCMPP7jYPuzkH4ESXaHsi7VTww",
  "key25": "b7LM2yc3UyJUdhZkUbmaCXttWb7ob239JGja6ATXx1bTf7ofXa4k1DSWN9CTt7P9nnuigiaY2gfr1T3mnLRsRPH",
  "key26": "iTLx6Mf8dizx25AdF7BUWjEvAYs8NG9JZZyfVT2ZZpedtFWPFYYHTCM4zTsezKSBazuNG9qjh6Y21kG734nW2uv",
  "key27": "LTgeTrjEbbvDjKTo9Wd32czT7h8156V36BLctutmXaTzXx4VK78GEwKoN4hbfw6FUashyytXnbBhnHeaTUTtkY7",
  "key28": "62ax4cDsw6eafbzdYNmLo9821g9bSaBDfLA2Rf5rjNJnQoM8TkGyy6CYGpzmHZdSrXuPvMc6wBjsD1mgqnsY3YD3",
  "key29": "5nmisZhq9YdtTaAjLfPaogJLyKxvcVXtPFeqHxNXshrdtKPMzz88QNQqeXmeVqeJFYQsenpXq8duhF3AhAdjff2R",
  "key30": "3fznri8uSdqHDoervNYQsVzYrfmLKqf6VHiiDtnq64DXW5ZAnaruGYGyJgXk6r7yZYaemXKmb8Zqo5GJdzrBnCK",
  "key31": "4Y4vC4ehwGLgMrSTC53xxq7hwpiXqPZuo7yUU6KtZ8hLnAQN1tBkjfKpBkxihLENyZ11vAoDBun9RuS2FNjAswgc",
  "key32": "4K2HZSv58oDjGQ6EtftubJrjiz7C9ATebbkf8t3oNYqEvsCi19AvrpWqpEDdxrSe6MYJ5NHJroMiokNTpDes4hYa",
  "key33": "3VQJF6YRSGM4tQB3F9YUzZNQ7YSYRgnCDshDqeCqr8rujj5shBiMgd9aenQH4NrbqKbPY2zyzRNtfZVXG4tbFYu4",
  "key34": "543UpxFWzUf9bP7wfzrmPx7jhAfEafqHkQV4cLbyC6pcEhJo5kquUu4Ub1RaC4c6PvZSUgRNd7h2gi3bHKMqJan3",
  "key35": "5uhipe7GnYrfYd3neCbhZP3FoVzAqYxaFniq2xs3hYdfCGPuvtBZ4dkeM1BnPzxkRWHDpJ5Nbtm2XeA7t6r7eCkt",
  "key36": "SMtzHChzXJ8WScznXWZaqqC2uqLiRgyAt93cz9nm2aWj8ZnqjD1fRxynWedzwKRi1sxXBZCWQZ7J1du6yVCjXnq",
  "key37": "3zKAgZTwQLhaLQM1pZuAzXviXFbMwQyhxiKnrQyY18KTiFnuJoeF72rbzocKULDKGLZRmM2cbH9Qqe9PATeyoD6",
  "key38": "2UNVEZdX6AUopVVp3ptvFvCwU3azNgAhkAkQonoq5CUdmbfUJmtbXdMT4to56hxhxwEizXw9zdvgnWU81fBqvFEJ",
  "key39": "4ooV144hADsk8YJKVxmbW7XRsrtbnCMxVQ9b9txBCCeeZJWA8Zcu81LWg7kJ5Szfvm5kxeEYpTGFJEzdJaxF3rkR",
  "key40": "VhqDmGJFhdXB4gABjN9AAhK7DJSH8UZC1XQuefd3cAC9gxAngU27CcCMW2p6duAB7ZKPt2RqH8AEtkfjT77gX1V",
  "key41": "62V22E8pTvZW6CsrxcBBZC4M8ytG2G3nY85dYWsMbiotcbE9quWqvBsXRK7fnQogWhUyYMxhgsJ4zinkLPdpn5yL",
  "key42": "3qdbT2EmFxSxazaCMsueLs5QJdjnhWyyNgUKJ6D9hRYj2m7ijiekwCuQgos77Ay7vQh1biDomZsGVKWsuJK45MKW",
  "key43": "2Ep5Q48XS1njz3fNza23yvPTqeF7XCzWeeuuB2WQaipuTwRr2fe73CQagfVKZMM73imFK8dQDnxT1Htmkj66RVRn",
  "key44": "5FMEQ6Bp7dXv8fB5vv2bGPJwSN6fVJFdVgLakkLAHkgfvsuwetbfySoBB3LkyVLjLNe7DKyinfHhcGvzULqYb6TX",
  "key45": "3dMDuicbWBAppwyQPidh7LYjKsdjFobdosWavZgx9cHS2Ra6Tj11L6Ln53dDzwYtKg8xX5QaMMUeGAeuTR511xy4"
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
