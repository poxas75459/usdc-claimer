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
    "4ZKeGmWG2H7DvrNUBi5YkDWN8u3MemGWtEQd1FzGDomN697mmipApTyj6QD1avgWj562mKZQYbzb8omhmuLUfZhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dCHn1zkdgJnWVb7x4ic5pV75pFsPU6h2Xubep79sd9qAEpRtiLP6cCcQsn5cRVK5u5TvYNWLEkS3mVF9xP8f6ik",
  "key1": "4ohoYPqRX5Pwax1zjtU8MKSm8pJtFFDNds9hPQZb4EjLxdE5g5Ha9dH9E6t8mdKLMKvr67LDXCAGifpiZnD8LHXv",
  "key2": "4KdBqexZqo4HBEMwfUYswRMvgYhp32U41PnLZHUDPbqmuh1MPuZXJe8JSVrTFrLf8GVUvh2KXpUA5oQKWw3ndbvF",
  "key3": "3zxdxkwPRoHiaTirJ9iKUmgdnxWNQCerJNfWp1pAVtJoqXX8VXm5C3RAEgWiZN5dLzCbT75TzzFLbLEY1vc4ye9E",
  "key4": "5xHt4ZCzEbG6vKzK1GwS8XMXfsrKmYTehEKKPCQvs2m6EmTEXAyFAqm9ji9KmDEMmwTZyjoxYgtPmER4H5Z5TAeM",
  "key5": "3HPQ8GGyrmMimCtiqK4q6ZYHMHy9mSYnxWZEdNBUkTzyupyLvPJ52662H2EbxMykUVw7VnYmT78hXHcniBDnRuLk",
  "key6": "2baDS6M84AyufdVQMdb9dQH3KaoyMwSk2QtDbrLTSb1GgeNeRJoH9iyNyh8vzUCWNo5pheuToX7RWyEgAcnFbhCe",
  "key7": "3N2QSpfssWs9pCxdix4TZbGyCZQBKiseSCCDR1cnjPw1nBQz9mMEzDV73hB9hnW9HyVUtz3gBWVgmkSURBzVo1ie",
  "key8": "4iaBWGej5v4zemRYfqGmtmi7pAcbbpB9naL6KacKvRUtfXmrSf3xmnPyWuYr6KB4CAvNSHvhvmMpmQ8oBjdy33hV",
  "key9": "23oBvgqMJAEPJY9KfGfPTRzUovjFMFXr3NpTpzbRB6Ui94k9rayP28pUZEpUrhG6aACaEj4u4o2VtpQAzRvdx5pt",
  "key10": "pUmMQ5rQW5sz5Vz6imC7CxTHJtKssXAw8AF2LqmJyNpwymhfkEvRQarMGwk8xjdWba9BiyUPrvmqgc9cSRjoguo",
  "key11": "2vKH91dbpJsdNeYDHjiY2pA1x9KZWAfZGcTvdYCNcCkqJh1Gmaryxi58DFhDXf7kVmk5BWzPBEeDDH8LhXA7rvph",
  "key12": "2Cem17iCRTaq4SAZrmVotg3snpuN36mNavyFwaeEha6hhtXmK91sqGNmgfkKe9JnqQz5eqvEaTp7S7kwevwL6cou",
  "key13": "4QxoCNv2Wv9vLmFnL1gvDQ6W2UvqkR9DSBGUjJivuRnufBXJRWn5yQR9AGvMiFQQX79JN5R85tVstnXDfmYPNwVp",
  "key14": "2WxSWdMyXCU9BxLCjFwiuxzzPhCnuChGMmxUtSFMMbvgurgRNva52WtYc6Kb6kw4GKVA8VeRKAJdCmFCs9MN4sLk",
  "key15": "Fmn3XYbEFxy3kgoy41boPSU6QENHZ9teFzLZC8WWds3qJyoSRxCEZB9Hha4BSzvRY9zgQfvj3wHkR2pZ1gCzQLX",
  "key16": "4KWf51XweDspcm558xANBB9b5A2bMvMGyWjudTs6pRcYMRECGphLSKc6WNiX48YeMrqibbhNouCGfg8KVMZAbp4x",
  "key17": "XuY91y5Fm5kSPP6eT91ziC9agHXH96qTAiDGkBfCZ2o7h8ZuF5tKepXpauoA3SFEURBb7QZSaCi7paXpbmDAtDE",
  "key18": "5hj7J5G3Bj3gLFXpajJx35TrWwfg8siv1jdyU6gU2gteu5bvrA88qYXMu1wrE1H3YXod7V2TwgxVpwfjFVk7MiEH",
  "key19": "2rB7KDiSmdkwnyKLpd5pvWLqEuK3ZsAukrYGi9rhy1Jx4DcNsxXDPjDNHZjgCcyBWVq3RfPJDzs7CLKAvArenbDC",
  "key20": "cQumQ5evd1DNA88Rj2xMK3Ubq3HYwraQJYWUQHqbZK2Ukx6bp2n8qb3YV8TUXqVwnvyd8ZarTzAgctzpVuWG4Tk",
  "key21": "2gkBsyxFiDCGeVaTRkqtWaceaRSjzVYuo7ZLCwX2DtjizQ6wqns8DPLDFgGpHLwkDj9DRVHHEoNx7pBwG4RRKrNA",
  "key22": "4L7oPVrj7QYJbnwsed7YXAo6UG7Y8daVtPnYq9z8EG2RSHaBMUsCVgDcB6fKRuV6E6jT2oXnev57fnRbbr9yxriD",
  "key23": "F2KiUbGniQYwcANTffoG2V6SFUX6BKZqfUSwBCZ5S3bqZ4PMs5gKpm9cRe7azXQunyRpQefLNsgVZSZzKhUALAv",
  "key24": "4yHH1jEFhfbfR3Axu3bDPzS7u4YQQv2ya4P9g8PqhmMCcyd1JUVvDuPnwX4zLLMi2gMJCjEebsrFDWRrK5a5jAcW",
  "key25": "4Rkrj33SNMJvKZW9WCEsZrcSBkoVFi1eN5BYsgHDcUTHeA6qbJGKX6iKESf9hbZpN8y7RQAdtdLXRYUjUoruRwYd",
  "key26": "5iz9Q5z2HCMhsdBC2BSeAZ2AWdZhfVZneNCcjeEQHgZdZj7axk6gciTWua6XvQGgCJ5mvzvGXBGnssAEQwRDCt9A",
  "key27": "LAfijo4MZQk94FBWogVmjh1uN1mAbrewDANmguQohpR32zKn433HpEUb5ZWv5oasKHorUozjx9a5kiLuvBfSwtw",
  "key28": "4fSWN4rFrpSrsHuGBacd417wQgBPiLkcrFHGMoZ5aMh3T51QHjLFt7xgJUmJEdfVbfrbfX74yVsKNZThzXXV3BeK",
  "key29": "a5MGyqERMEbAQZXfwg9b4EGoMbPq8HEDUWAfkZG4PaV8rxvRwB5UCVYvY6Tmfp4z5JBFaByNc9HcJ33MkLTJTQH",
  "key30": "3PhMQTchU7XpdxzMJTjpqskqAjBy8PZeKwvkPBASdzTEdwMVFHSpdSMHnKrBfaa7BGiStzXggsQogpTwhqu1CuGk",
  "key31": "5X2LawneFhEixEDewYkP722ZpJKSaXCwAZjsTpDGaoXVG2NgoHo9dxTCKbdzsTT6E3adTziLLfNjFpqDsf2qZTtq",
  "key32": "3heYd3JiuZNuRjA2JKSeYrWAd73RNtWMgC7UqkXB1gFkFexVmnf91HmRZjAjrw976uqyuFQJPospMBa9m9WkBsHE",
  "key33": "2dc4dAKEead6AbxdBk7LSLJHKnbCZVHpBysNqdxu3oE3aYM5URUaicz12FmEVPLWvZQzhAojHKqmJyq2uLZC5xcA",
  "key34": "2CyeyzJuuHbkGjqaHjWdnhegrWQmdBgMAB53HgJQH6YnZY4Cvf91kDH6L8PKuQvsrStPdvBwHeNTMcLSWThmN6rH",
  "key35": "4xv2dpE8dBsdACaEGRdj8Gx6pUdtd62pwwNZeqpTafCGxFLaNG7dqUFwe6gu3T71LrfBgft2xXPXzgfm6V8nGyRh",
  "key36": "4DmbMrKqQSkp3C4F7xR55nKHm1SZLs1EuD2ieVTp4QeaspXPKbeDLm55GbsXvJWtNb9GGLYsomqxUSQXuLaL9v7B",
  "key37": "3jtSBoDxf8FkLZWewMqKHLiHuutp8FKGzteyh6HJu4rXfiDRzK2fEBPnA27aWdCL5FpRCxBE3NjnbvoA51Y3GvUa",
  "key38": "3eS9vcrTYFEqXJhuuiVFoaciM5G5RYa3ft9yArW2CF8eJUWsSmVJPfEAx1uhQe84niaPyHo4ufLycidx2wRLJdTi",
  "key39": "mpCAJkSb7dpUTCt6e7fMpxsJNSRN8gvoGQzN2WzPLqweiVSVgUQTFo65BuqJXiHMbjKUQc2UdznVxmnmT2fp5Je",
  "key40": "3Atw5Rj4wzSE5g2Du63bay4iskXdqFep1ANisXzSY53HBeyWYsYJeErqGsvrxJod9ZnJFMdsR4ntudg5fP342XJg",
  "key41": "ECGHs9Tkas8XzpJokodN1YPTUwpJJLAiD9ms2nGgEmfXkwAWGTJDQUSLupgNk32JFt7M9X8icgvJxwDiumsV9rf",
  "key42": "2yQhHRK187hrkq7dAUsjw975DwUw2H3ZFzgQ1sBCAnavUVxwJTFN2Q9eqPUNih2a4QDzDJpVyMy9Gr4AoKyR5sQN",
  "key43": "3PTNPZWkenyYwfpn8yjHVHVVoePCE7sbYpb6RmLQgXmeojVNBghVDmDSN7zJHbvrTWTsis86kH7iAMQX98A3WQc4",
  "key44": "3uuSMFv96AJgJLKfGW1VzA5pPLbvd9vg569UpQAWoXimyt6rCVhQNk1WxZEETHmTRi2dbjBD3qmCnkMEVqerKn7j",
  "key45": "2aHRmqy4gcJ1tgeUkCEhuqfGpPGS7Wdg4LaZ5EcxGoyKTj8GjA6brp3goieQe1PAz9xedkwswvut3QkFBPZZRkRx",
  "key46": "2PpfQS4LTJQ4hEzt8JnykAGXEbDkrCn7xjiodaxpRjEhHxyDpaLyxFBbdm9Ke6iBpceyqWqN1nFd4zuuxCN4UdJv",
  "key47": "VMBodoYeX9CECdbW3WdYsZ5TcQNpCfMpStM6sfN9bevkhka9W1LeXoeUwZ4AahRMfLX5sMnwYZ9p1vD9Waa9bee",
  "key48": "38tmcEWYJvfRMwKihbrBShwCpj54a1AK6KT5mtePVzTGJmFF5QSPj4bK217jbdQdFWPnKQreiWwyvphdrSfSkBgx",
  "key49": "4hZg8EnuogFXJDBxhRWsNPVPB4RqAegpx5mM1AyNQB448wdRaAEHQFz7m1TrCtF3eTWkGdJiU3qTUhv9vVN4nTFU"
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
