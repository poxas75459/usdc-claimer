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
    "uoKgHeaxR1mMpvnEY1HTZ2Jma9VtJRBC7KCNps9at1joGqNjZjKdU5tVcA4J4eDc8K29gW727xXzrtRrHLJFJWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3zkSR52BAQSYtH21WppWKprcQH9YPdHuW5ZZVG9QTe8Do29r3AGvBGaktXXLYLa4czwLhAXPvkFcrNDX6LdhuR",
  "key1": "4bD2pBEbEgjYoKsRgDXGa9xT62Rv4xJyRgKWE2wdmw9gsaRDN8vZg4Fpo6hS5B6u6BFdaWJBXntsmJnpXRazbtWh",
  "key2": "3MxAcETCwGc1GEqd4hMg6sSVacvEADbHh47ZN6NEenFTJWNkApFvJmeuKcUssp6pXmRNtQPCT54oyKbKaubURti6",
  "key3": "24GPWsbJbdXgDXrY8AiS2M4rPjcmFSATfBxbhkbiZjCznTdNksRsT6uEZ3sAV6RT75QiSgg9qbuxcxsov8nfgkJ1",
  "key4": "qxnm8CW4Kiue8F6w2dTk2fSi3VWVfamDa931R7wckhXUiZarSQNPxpAoSzuRVRvCnJcKGZyxLV4X4j7aXnALo7r",
  "key5": "4ezV57Mypw2EUjXyR2VWy4HHCpTvDn6FikJLfhHZ9GgtBSjf196ar5gC9xhZA3Fj4zscgTTjVBkpbnj1wXHizMKs",
  "key6": "HE4iJW3iez5Yd7JK4t45XFxyJi1gF4B7VdGqW45qX4mAbvvTrQV736883uqDk5XCDUjGX7fuEL6LLv3szpQobgz",
  "key7": "4SykKq98o9b2yMzqLN3UZKsyign1G2foi7EioHrjiQcZsyRAG8MmjBYrV5Xf3JYGqmHFENfEP1KAP4xZPYGmGMYg",
  "key8": "3hDgWwpAuR5R2uFPDqiPop26BrJJUB8Bu9gk933d28QiyioZU8FpXPgUbb8x8rPNEL97JwUx5fxEpNeuFeqXzWpy",
  "key9": "3oaBNiJeWP7RKEPTEQABL6SZ41QNUDmkejMeEj8KTM4xeE7RGKRcwpLDaEP7UXJ6iybL7grxnqbgXAj3c4JMTG4g",
  "key10": "3gDnFTYAtQzrqs6c86oTmKvh7e61Mu7sbHjnJ2Eo5vEXWwpk6KYZnpqXnVeR5bRuj2WYZHttPoMnAdNM9zhtMBbh",
  "key11": "2gqo2Vg3pJcCuYQweGXTnrJUf2Apvistm1hB9SNtZLRpyQMds7Nyawm1PbZxuqVaVYJanpYkMYnwPt3MdzfQrfnE",
  "key12": "4BPgc7aT9bWvjMxQfaHFVLnzG7dpmPrwuyZCa1kP2cEqWEHfyoFXjvZGhvW3HjMNZ7uABYkKiGLvvVDHoibQBb1J",
  "key13": "4br8tSexQE5VET8S1oVCSBX3TSrPzZcRGvXgpAh2HGejxaJek8xRtPYNmhpt4NByaFeCazYoAUzCEg8wZBHrkM1b",
  "key14": "2Gd7Ufjx6Fn8VJXzfpmtxwWHRsNGBZzBat3AjhFazJF4wk8NTaeqnEWnuYqmq8zp8NoNyF32RPrqdriW9wgzxCf6",
  "key15": "5TJepvELyfZdDLkSmTBG4Bqg6B5daTmzG7e4qQ15dbTGG4Bx4w4bFrX3hp2ZHAA36cTJbAFkx775p4ibQespF4x4",
  "key16": "3VHfa3zUTj7Zzn9RotvkAb92Sq7fEAJLmVPo3GHDCqwBuR1Up4uztu9qGyYTV78Nx1V4QStFsaWyvX27sQGBr8Mn",
  "key17": "5Wv16PEzPT6sp4P6bgcoeZBMv4Sa1xRfEt6SbLHnb3pJEFYTtTF5aCSHeXhoqNfs2z7SVN2QCqwVmNknihpGW4GA",
  "key18": "XfWjvdj2gNV9g4V5EXcDQdUFBBwHfgwDtSN8edpbmTXZF886KmKj9RNfAYkAsWbdh6JX2EJPXzJZk7rVaQ98Zt4",
  "key19": "5AxZvY1WLeF919hAaD53L8k2ZK299XKaSroSSiSeyAnFzibQHM65YELTLPhw9qX9UqtZBFHuxQ5BroWyWzS1yuiY",
  "key20": "4vnKvorxXVJBfvotAkEmHSPy8deivp5CqJaKGWaX42MYCshPx522bmDeETBvhZUb498rxvR5La8t5XgoQpf7BvAg",
  "key21": "46sDJN8xzJ4w2vNqF15ZMJoP8tEp63u6dVNNiDUzN8KjkcvfS41R476iXP7JvP4EPVoXn5tLSPvfiUoTiBxeD3K4",
  "key22": "3CqQtYs3kiYLuLiossaFXfKZ3RNZrY4D2qpNKqnpwefxrK7RW6dyPCs74uK76S9ra5y7TpSogcUAQn4RcNWQBJjL",
  "key23": "2Vjo8otM6qa5YMyWnN8ZvxrGbFSHEWSjwKgZfSy6mBDKaQaw6eikZZEsWQF3y1DreLp7xp5kWMsQZGoHvaDNRsNM",
  "key24": "3dV5qY4P9NVtEHE6XjtG9kacwZ4FSRjQiDriXHdwRsXriEUwUXaAFFRxtRNuagwkVxwLFPpsNWGVLekDaEmuVwCN",
  "key25": "33wMyXWMLj1tCxk6tSC6Z7mDUNkLHRTfqzeCWeBtFvvT1unqknTYPHbLppuDZjENfCgPAfDwKWc7S9kk4LKfrc12",
  "key26": "4k5qpreVU3BEYKv5RU7yHKrrXbgwzLumWAFtP8UV5h4QQjRbQ6YTtXx6EdPPCkUVMT7Ph7vxsis6A6FNB3XPxjDy",
  "key27": "5EYTeY5tN57H8gznYPftBAvqnkhvTjid8GedkKvAiZT5jJMrGdSeKHwsp9kAAJPZ3rt5Wix9pvx7gRw4uDrMkosX",
  "key28": "4M2c7UcDSibJdnVKm4fChaqDKp4bh6VisPj9H5trB7M9NaZrETP2YjUnr8GCi1nkKT9n9Q4fehCbAdch9vyUi9io",
  "key29": "5YWFuoBGw8fG7JfwbcFg41ss7kWtEpEVX5rmS36FCPPkA1ZJmTBjfbUeB2jHYuJSx6FYFiEsmR3h6EjpBgsTLPmC",
  "key30": "3NmVeCWyPZZrYAABvkHWbeM7cFq5vrUKyiA1YTNSQBDLLiCtuV9ptvDNRABYpfHpFHffWAKKKxHEf4QVwCQmCUmc",
  "key31": "iDzKrNLvSQAg2SwZDJYNUfj2aguGXiRTgFMXwBynt2BvX6QCXfQYW6Sw1JjWQ2otwRD76ec6PWm47CF6ScgK7HK",
  "key32": "2DtJAVHeoUwpHrjoZzTki4fDWAtyLjnfqTChNV9Q4vuq9majyme7yzYkP8n8jHBpj77DNf2qjDPREd2pWsBHM7hd",
  "key33": "7vfcLgrzePp3KcbaeSaHhVpuK62g7y2GeeHQgcuf52rGoSZaGiESqU8kNNZnitNJhtme7Jd8iitGwbb63j4pdbK",
  "key34": "4V8rvs1NcnzvSxaikZj1UirPHY1tvBKHMnchS1XWVKVZ3zXX9QvRiwrs6TUAgHtagUEYqKFBf5AwpdKP1MfpFhPg",
  "key35": "RwphQtXuwUySKMmHkeQwZVbAb6oumhAD2WxpCf7jWQ4eUEB2SCVCK3aTbtTN1xXsYYuSzJBx6B3pnvUVuZcwnCA",
  "key36": "371wU7QJAS3dv7x1c7KVo3x8cQ67UzPicbLt3qVZj9q8dyLDu9tAASnR1bz4MmcQdsqDKRkjcRUkd7XQE6CDTBD5",
  "key37": "SAVBiR3kb8Xup7cbo3EKt32vF2jAiqCBmL7ui4FFRTsmr5yFVVvKLP4DnYJmSUhaikDDiKdQ7CVZ62XffunX78K",
  "key38": "3rGRhtgujGecBJMgRMg3gEhANWHDtiwupZubRWGZHrtekyV6osfbh4RdqsAXm7rziQCsCSfmFxj5DzBSe64X6cJp",
  "key39": "2G6S1dGTezVTdZUhimWxHfB7bzjnQ1Z8Sh5iBg7tpprwCxXxxrDytLJusMhnewcsVedhvdkpUqdqAyeQbsTVHwpk",
  "key40": "3fUTFS7TQC6UmDriSiR5DbirWuSwaZBjjS5jgZPKnhSB6LpvBan3f82sbewAQ1m3C7Ary9TeFrwrSd1YhrVB9bYU",
  "key41": "2WpviNkieTe63nnmf5GdzsFy9TqUtB5WfafFT9Kwm8fpfceF8iga8Dsm6t3WapdQgBwXPuAhmH7XLFfdTpaFWBc5",
  "key42": "386FGJHZ5gEFAq6Gx9T67rWG2CKA8v4UxhZ9bn5D2Ws59V42xvfFH61t7NQGdq74a83UVfafhscsQ5V594nWkriC",
  "key43": "3pFhC4yaNxVqrfUZmv6m3Nb493FdyXCxx2VW9fLsn5UUD77SBV8oFr89dPXNuZaKq2Qc6VqVHhvjQEKrW6vB8wiU",
  "key44": "NR6npKh2pLpDQm37UPyzBas9ra1uEwG65DoZVTZTRUfdPx3CDRR35FtZ1fzNdDxMRpyip4ocquZW4o7n7rppNhT",
  "key45": "4SxpTc9QDk8f6mtn12mxYDxzQ5nV7mLJLgZf7wyCVN7qhZ5bgyFkCo6JHLpGmAze9Aoyfo2tZmLFF4QQhrjsxtNR",
  "key46": "pSYG82RzYZUaRsyUJebfc9vDY1zyc9t8pFqDmZdVtDfU8DE7Qd7JTDytDsqCLd4WHAXb4aHMPPzaq5E8w6Kz6TG",
  "key47": "49SZx3No2PSQF6TqpRD5C9wRN6QxBQvaFdjh7DjH7aQBPbNzP8UNLsqgUizt4rjmgAfBGdSxSEAqztZXrdy7W4fp",
  "key48": "2xfnmYJqznddHWbttEkoXjH1Fb5QGqoj8fTJkQqPHG9Wz8TT5Qei6wjTaMsudYwzHzMTviyP2rDwYApuF8Y7vQDD",
  "key49": "33D7zJbHirLashMNirtDYzzk4h9oJMtMF9DhFsVsMH8dTyhKxN3JzZuDMKeS8wMtoT9U29qJEJ8L4KYvi5rjT2FY"
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
