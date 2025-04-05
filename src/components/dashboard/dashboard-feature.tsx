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
    "3phuxoLVprWG6CYAMZ2f5oKw45BehRZ7YM8iCughgDbDye97n36NdUXV5zeD1yanZrgoEkbivxdcY317ZVcvGvG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8BSs2BGjn3C4LzZns3iEX1kbYKwwZWyz3NPw9B3TxPtMjVYXiYwT9iNswEva32mKzgmAvtZgMZdnNzHMpBALif",
  "key1": "3pmgGykLnC5mLXedE6ArrG5ZxAFXNB7xFB32gdRFa8b5qrVxf5vhFb3aUYY5cN5iHpYnVYahDgHAXHxuFLXtJQFM",
  "key2": "4sCeRMg6ZN645mmrnqtsSEpV3AuR9ft7FBwaewo9cm1RctGitSq7RkU4Wqf3Rdaj3FZ8UQDCgdRJEfAz9tyTsViv",
  "key3": "2ps92ooCwqQickxdFoZXRQc7nBLfQrmX9g3rvuYPa4Ew6432dPxQqDN7rns85SmTsAHgWEShKZxmngUprNK7qqrJ",
  "key4": "2cAihBh3kuJqKtMq7MhHPau8ruftSXB3CJXEE2p67ekHhNAnKe9P17VbJMVcadYXQvPTMKy7nXXYReZiFXRgaX6M",
  "key5": "2GJvnPaneLhj2c9b3yChtjqP2CLwyThiqAXDAG9584EpMRF39yzXe8tKayTyXkPRo6knX4ZwtkfK9Xic4zHSEjB9",
  "key6": "4UiLDXtVbfZydP3ZdYEyKLXjaHnQhAd4bNMTqETTcc2aanZjeM38FLWce1mWPwjLtVn61DiMHMM8mEayfKREwQbp",
  "key7": "2xFrhc4DaWq8WcZ79YuhnjkdfBrUQQZtYcujvwyZ3myZ93xpcUuUzPuRSbNr44mcneAcqXyNiTK4irAGSfKrd8Fq",
  "key8": "4Ar5iBLDwQzaV21f97d3j13aEQ2y1Pifwh9PxhaCToN2eKoeRWJDrBU7BhKuFt12mJjLVfryMULjWvPjPtzMERnN",
  "key9": "4EmcvY1eZU3xd2z8BADvAd1QU6sA4qkFyCTBtkhTtqAGLcAL5rq8D3u7HDupnwaBwQrz2CW7xeCPj9Z5Xipygb5g",
  "key10": "hmUrWaceA7A198hSU3LAUro6fmLf6JgzWQm3U9prRgjsFeGZdx83eTMJvXj1vuLvARktMtYLUAJ6vA3YXbSKB1c",
  "key11": "Sc8ihmiK5jZh4LrA3fecrUKgrexbRAZA9jPQLRv3TfnzjDjsJJH9fAjZ6HMnUPzwWhZsrw5BXPUfAYVJCdbMvt6",
  "key12": "2dssK1yXHBEpd9DqVbZZbvoQbXTr9ZEYcmXDnHxpdd8WCTzmQcoHn6TiPMub66VQbsbWue1C3ZyYxhrXx5hHVWX3",
  "key13": "4a9jMvmZFoN8GVDkA1ZqTt6XNatGT6vqbM5rjUHo7J5Jy6WtMbj2Eym5h14tAbiam2KLdkwCtgz1gRAgqvsWf4NC",
  "key14": "2TxLCzURVapbf5vzHeJz9DiTekU17kxHhzbXk4kNLYq24FebfLUXkTZcn2AZu5rYz4UGDjU7W5t88BgJez9xi5GW",
  "key15": "4Tu1qhbTuRwPuK9b3vjc1qL6L5vARxwA6maB5eDjbVAhQYi3JSzf1QmqSbY5FANdR7LRjWF8KShyqb3wypLkjLLy",
  "key16": "5JE62sUyxb8H979hUYcR7Nsrf6G7gZQYiaFGT7eNuW4NTCxSqhGYJdpNZNM4zdAR83VUzeuZKrtxYoj1GcwiCzQp",
  "key17": "jENrjVvKsAB68KmySbLdVPXLxzsGRHXH9cNVcsmTENenZmXE5co7j5mc4pYDUzztTXbdneuYpMKEsSEJyisyyLc",
  "key18": "5p1m74xSdDyaRkMo9Y8Qx52AbDiNzRaSbZT4tWKZaZXenHoNsV6UphBKBWrexQHrxHcommCNUjDDUAuYcjhuGxpJ",
  "key19": "4ZLckPKJQ16XeUWpYzzMUcMkiaSJ1rB7cpoeTLnqDAs5SXoxJXF7ZZbo8xQKbvngeooUVnu2r7TCjddGBw38n9Dv",
  "key20": "eXATUMNH2THwY98p7DAdo2TX3Mo6iELCUAnUJXsvQ9bfc7B4Ps8fgNJH2tUjM9KSMQEAALLWK5cZTF9R9ozs3T5",
  "key21": "3cqmyBo5pzWGfPz8ZXCuLdCp8Xy67rV6qdpzsc9KpcwbSVK9fFF7BUgfMoi5PPZ2qVRJKHiXs1fqNw1gsrBXUNDS",
  "key22": "3rP1HgjDpp2SjgyiiWpENv37zgGUhkq1kZCWLTnPqvfnSrseE1WP9GfYLSrj8sECL9bjRW6GWspm1EyGY21sQo6J",
  "key23": "2bnH1ZHS4MfZxYtymVfock7VgJzbQBHwPDe2zZj7P3pkx8hAdyX9pWTbUGNDc1DkzMvQybVf4todqGvdm6shDbuM",
  "key24": "51YcP9qRnGzUr2xuiWDhr6ZQmSbFYtmdw6KJ2WvxyXNzdu2zsm7aBsjrWpGE9nfYpBqvb8FFx269sGgWNQmFp2WS",
  "key25": "39VX3SmvYUEDbMdDqYcHamBhodkbkbvynzDacYZQwjxakZyv3dxHVJ9cDVvddizAm4ab2YEe8eDHWJVToGJD9LAj",
  "key26": "35hDNKaHaQy2Ppd6huT4t4j9xUfE8WLM7DbW1sSjANhEGd7K9B6beGBBwmDU4n3NYpTC4FMSS79LtMUGdxV8EG9G",
  "key27": "327hE7UmzyQNaWWpPQXNLFMSgFbBLZf579KLcfPAJnJ65VpSQDLFQFZL3uzvzuztT1AB5PLnuwwtaMBYHd8he2WD",
  "key28": "53m1ACktNT8NQpG92vZZbUcfgdEZpk8wx49a8igJJTgGRH72xsyVx5YN6q4nygo1wgCsN4Xx37DngHZi2NFd7PmS",
  "key29": "4fbsyXBvzXULNhqCQMeNopiz8rZKd1is295CmiSnjsbqhaCz2rkP7ox74XsGferKt9vRZjKVBhGnAUgbdy6LTzEW",
  "key30": "Zg724BcT8NPYjSMspSeMbwNnPgSXaYWsMr7xNALJMZmuwHoTiyEXbRAykVZ3cwa2jDgzJWDkKG6b6xjCiqK2CLk",
  "key31": "5GAd9iMQmvuE2eQuwK1czrMnqFmBwhoTiEgFu8Zo7UCThRZm7JdDPhhrt6eZMRvAFANxMy2cFj1cf9HGa6ieo9Xs",
  "key32": "3hGPFnvyBC3qEzLGVVZGmMpmG3QHfk5TzuzG24NvZ3c42Z5C4UswnzBuKhWkGj9Wz159VVmeWEL8P6CjXbBFe6MS",
  "key33": "3SYEa3mPy7RNVDZLXA5Ad9dbDAZwWrcEEKkPBLTrgTvDvYTNSMhKmGRNyPcCxQSJsfK7r4tabpmbGYhRvpgvvmpc",
  "key34": "4auH9GJZaNB6aaF6kYp4tcf5TdzDcXCVbjxmohXZWSmuKsRq5dpag2rWfCwGvLQm88mfEvq3Jw9Qq25vGXWPgriz",
  "key35": "Si7BMuTcz9vnGTPwgKC5n1MygDtqzrr7b4nD1FdsL8AfkqeWZi8scxtgVvfyDFt4deN54bkx2ZbwecbbddqRtf3",
  "key36": "65mkBHXxQc8V2VEtMPE1MWQH1FSono1HFdAnYFsuJrGRfGZgXvVuN5ZsF2sk4XsLvxc5G9RFb8sbHTXYtXtjQe44",
  "key37": "4GmE9tQnoXVZduGeY6n4uZJkT3p2NeYha8KxT81xMC1uG2s1dFUx4GhKHyaxjmwNvqtjDapXepcQcgJ2quqQWAU5",
  "key38": "jb1xp3G6uB7p1GAEDBZ6bzruKFgy796C8m5JpoY3YLtWUKqyW1x2KWUxhcVwU1HWTjdyVYhciXhwx8V3ST5SiEV"
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
