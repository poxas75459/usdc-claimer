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
    "64NSg4xX2yCYiU7dD3RJVxxwmXx7jLw9nQjzwjw7pPKAn4MzM4CwRHfdq73kyxRf1ZWXXENeMzYtThGFvaErNjHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5x9GfkUCdYJddo13fkKbmoc4eYmHbVcR5R2ZRV1QXzfaBAxUSQU6trLi435xFomKgREG86uAFqDdjRV8qrW7us",
  "key1": "t5ciw1hGjdqBpdRoNERmk9rUoVecyrWsDNn7XkNUmDKgTm5426awHQmkiBt1gaUoBrdsQUAZwgkAH8guqhFFmP3",
  "key2": "b3Hq3EkA2gW2jd9XvWrbvSWA95FZ4yhMUWGggeJDZ8St5hTTqNEtmPTMHbVSGieRypex3SkPXfEKcEdXp5Rs4dE",
  "key3": "3Mz7598pnR46AndQ4ty1MXNjeFz5pwL7Sc7o3E6YNASEY7V8ThQfE7RfsmX4YFCkQSLWgP8PBFs2guorR7SueKFD",
  "key4": "2a27t56WzAnYd12cY58tgTEfSg6vgrHHRgVgBdmj1RQQinDqx73WoCp4WgfoP1p4DAiwPf3Z7t9hGhYxSYYdPu29",
  "key5": "Y8AyeiB5QRsyod41rtLgnGhBJ4hh9CfjQXhfH7Qf5UZNhmoPqMbynh49MCH4xYyrbsS9YAwkmEyPXhQfCznDpkS",
  "key6": "63HnqutihK8okd4pqSvz9Zbezwckp3TASXPK4E6vSYFfV8NRxgqhRMyqpmq7K8Viv8UT2N1f4DjYsKDhSg5tdg6v",
  "key7": "47HAJESJhFHTkvxuNKM8bYdV46kkqs74gyaKw5dh5N2BX2LPxUDyECgGnsATHcX2GdnkGo3yTY9Da2TrQv6rr4AG",
  "key8": "3RvY7a1gvTKmEJgL5RY38fEPY4Vpq9MKBgSjvFm1edqeEkghhDAa4Jd6UkuBUqUUmhoR5TnyoHbJMU2kR3chKxKE",
  "key9": "5bcheS75pinQeF4Y682hs8DcfvRLSmyoKVx28CXTQ7pB7cQBeEmkeXFKJXyhV7EyQQ3e16RoUwv4S8qgyJvwLFvJ",
  "key10": "3WW4YQX5djbW7kjbzNb95DPQHTNbyQVt9siaF1yNxmdHt9e9E4MvZgAfAxbpc8Cyf9efqeoqPhjuFrhxkHvycTdy",
  "key11": "5EGUXpBGPAPwqtsdhryZcAJtB7MPBMU4EXYTtxsg4obfAcTptJPYEaybcJYvVJd2Wn9k4Zw3pVcSmNJgV8bxtDNu",
  "key12": "3Lwo3PKz1C5PXkTS4pgXt85Cx7Ki8jQRzDSyr2aVJZrRdoEcuknCZQTKUPTp1VKf3KXtNccBqAtufMXiBjcbfchM",
  "key13": "5YuxG9jR3z21yyd2YqiJgvuaJCGeWtNgagcWHrxEquPFoXGeri7UxHtfD3bpHNy3EDemT5HRefRy3TCdh66iNhoL",
  "key14": "vJVfQcDBej2gSxZoogybQWUu6hCurQZWuj4hdEJsJi4UoEgVDhuiqDWxY3NayL43ZmhqkNTgGiGLjhbNwKYM6PS",
  "key15": "23Km1frP3AZrgkzw4g6NF3mhdHhgY2VyHdzXnEXauJo4FdsuAENb4cf4GBmA7wtPqEs71yPbKQUqAUKv3q7pTw34",
  "key16": "4L1Q23qvTmj96TSCQZWECxF3iQ6nqNk849wdckJHLHuogMqySkAYkRvQn6ZtSGmE7E8nqMFLvAkN4UnJDS9Am57i",
  "key17": "2MBYLy6CvrriZ1buPqfLdLP5GvR88sMsTjFBfkyabKWfsmaKroucbResUNvBQiryTPtAU7qF68Fs4TPpSXfPm3eU",
  "key18": "3ZP3iLY1FmxuTcQgRTTfTah5GXWYT94HsnzytJKLyRYALMmyUtcnS3C8nqnwkgxDuFqZz1KwtbXCXPSpY1itLvbZ",
  "key19": "5GyhnKnJCtAKhRHe98aqvqAG7h1XCwzeiB9DBWC2k52UxsufpprTHimyZEBksYz1Lnqi2YsVowwjcvCi2tDnCNk",
  "key20": "5X1i4DG4N6faXxUPyESA35G9jaYWBjxbMstrsDsxcJ6VFujMiqszz7ogMAEwijSQwcC6bSsHX2wZZvatnHMvjsDC",
  "key21": "5PUwrhfAR6P6fHeJKPyBw1r6VtBfM6s3uTRPCQifjYFsXyb9zxAT7CY6JLnUwD9cSJLcvAhZX49rGJATTYvDM9NC",
  "key22": "3WLb6wJ1EawnbKiBxzLERSATK4mgzevUg5GUh8sqKj32knpk1LSCGP4YgKTtjAkDjmeXuafRmjhMpDyyfqWPQKUF",
  "key23": "2AKPSGTp6KrRnde3oF1bPyJi6DwJzWG2x8QHYNB6HHpx9M7tQX9tvk6pHYJ1V22U1JzKm7bfnmAE1ThoGGDvc49n",
  "key24": "qYBjzbWCWQn6DUit6QVhAxKXE3BSNfnp42B2B8NK359MvujUuKN1NMeUsdug2XYJ94gNGbEyHqFWPWWFMRHvoKc",
  "key25": "4QK7qbRaASurrwp7TahBEfWvaAwMbyBhYwcZZWeGP8PcDQtWrLm4nwZaAbVt6vChW9td4N27TqsoFWtM2vZi4B9k",
  "key26": "3pRtqzaeVNBLSAxXwLMKpRPh3SYdk226gYfGkDs4MYBkR9FxtgXWsXUGrSj2B8p97UZ5Yh1TeJvxXGmdAFm4NuGH",
  "key27": "5Atna6Jp4878n7iAoUYrDqC8g8ZfsbcaNF1bzPcJbkcGW8r2PVoZ5gpX9gwEDvnPHjCtzQWbPcb3vVAFc8cNa8C4",
  "key28": "5gGZM2RyPGEBeyVfMGYhcze3hhkRqp1W2ZVybH6wcv5T7GgXM8skgCroXGao8LLbEgzegfjJBM64q37Nfxwd7fMx",
  "key29": "5b3NJ2DPrUPy3ZPU72nzFkQioCvwobMUuHk5k6PrFEZV6wSneXW8dbZj6cn6YeFoHP4yjBAnMARoHTTMt3tn5WtF",
  "key30": "NKGJtjqFGRoTdHdWgM8SRVdeTcSeio99fvRjoeLZ3bxSsJgbNHyJHgP8LRZxf1muyWKFAnudqADi8QRAzWryqSz",
  "key31": "3dfmKNrRHdwBa6DDZ3TtAhzjUyW22AgF3ghr7NYwJDsc5HmcwMgYgsLv4qzv6P1MEyKXc2Qxz4T3o7J4dz2MHqKm",
  "key32": "2SxCH3J2UTVqjBF5fs5aLYesUioc5L84UEj3wNRJbKkNgGUmrLDbXTLFvRkRDX55CCUkKivJFcfEQiyUQtGQy9Pz",
  "key33": "4f4xZqcGhCS2nNM9RaZk83VKcnkMGzZCJtSLYGX4PAwpEjiCrKWPgZJd6MNFvkMBpsFTK1AsDrWWNKmCg5dvYYyu",
  "key34": "3v93xaT9zNzGU4MZSu8doWx3tfZDdzfAZZ49ARzbhXZhbXQ5VcgaZ2GxYUkMKyW1bvKU1mY42tGsVR4sdAsFB6k7",
  "key35": "5BJCQy428vp6pSSBKW9QAGxVwZU7Q2MfAwdGuuq73ihGFnAYY3rvUCpLp1DPFeapS2dq2UkGp9LjgRDitNqE99Sn",
  "key36": "5F92rBuRNpdRQCGLNPYbq7efN5boHLobHUY13DH9GSzLtVPQZTjxTrLfksUYvaY7P5AsbndWGek3TWi9LG6cHeya",
  "key37": "U4Uk3QWWEfmUCzxj2UTsQ1cu3TNotcGB1BXbDEdRC3EgiUqVayWcYt8a33ZczAgrRkzYNSn2UJCsUTF8ktL338R",
  "key38": "2xcH6iprFqPCq9zVh9tDyxf5uTcioHzqxn1peZqDQJ8kWtTsLbqnsMiN1qJjtEJNDNva6a22rqrVNTPheFY7BVm4",
  "key39": "HpcLUznqiZ8qs2TkWYiRCyFTZ1xoAVTL8DZqtU9U4Jut1LHVxcttjQn6nKxSidtQLkYmWito3A8QWRkgkbT6zUM",
  "key40": "56irynJDCv66Amr2rpHjDxupTHG1yzCFb1t8ArmFjP9bkY69J5R5hgkgE4dFeQrd9mYf3XVBacrp7UW9uYYMjzaH",
  "key41": "3bHgAnxES4yAandeW8ejP3WimX3KU18XWU4nsxKkaC7uQzFfd1NGkg5iTQgz1DepUiitw4EkAqg7VXGVuXzSjmnn",
  "key42": "Nim7WYCwb6YCQfCdcPAsoxrGT8iPhZEi7DRo8SiCFiRdNXyCi6zXweJdMvstUgHDV2LZi61vKQdB2y73rasKMNu",
  "key43": "4bsVxrh48kfV7hSAMqh1GwRdUFpB5rTtMNLQ8TN2hwx3akZ2yemhDbbwN2AT1DyjKPoKphDa4XPim4fD1fbBmFex",
  "key44": "4n8nCqYJEwr6bx5YvQPTsxa5BRJW4GdHwosuFyN4R1C2UGXEEwkpeEfgfGRDTu8mwBJGwSWhanWhwMaPxtJej16p",
  "key45": "4HTYg5DGshUrR8bM848uwGwWEcihBGEqhgyGvwgArbTjUCARJHDD7XBga4BpXEUV44Qb2z119XJbmyJ9aTLA2gdB",
  "key46": "51SBgPTMJXsFHTRKvprL7zhuJDEk7Seg2hY9GzMDiUVmuzXFgyrdzfR5Z3TQrfuDiqmb85NRsAuDPWgPwiyt9kEW",
  "key47": "2rbkfTXGtit7Xa7F4cJH7zpms915tPhPyjmKPWayq4T5SouJFqMiZuCsY4ae2MNjy62aeytZgqox1a3uVupvBYh5",
  "key48": "45ESUQi5vtWQ5KgJazqrXjjmEieFxyzUrqcKDwG8ciXixztkonUoFiFP1EZeHaCFzN5b9mVthkq8gWRUhpEdsj9z",
  "key49": "2veKRkjsSvVG3dffzVLUJcEFtBHUVGn8ux44StTY8XSYygkC4EHjHFq7E6n4QG4ntHQbME73UyaZxAtJamrHAGzg"
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
