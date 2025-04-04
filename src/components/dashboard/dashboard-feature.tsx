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
    "uXRobE3wEKQ8smApb3fYqjcgNk8TuNwZTBaMk2PVUKf6xkGuKNzmh6GvsAjfGFsZnzn5bKqmfZ3JAu71VZNJH2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ja918GouwKVkyL4heZfv8Up4iihPbjaFaqKZ918F5GN96K96RJXHPSEMncxKNHTxAhiCzicXEDupdvTjDxHzTAR",
  "key1": "5QQeTvSQbJxXqYXRzGQDu95j1HiuwHnB4hYUTaVXQZWkLKfsMwQf2raNF9H6AK9kXKjrbV5hzanw93JiAdCmhqtQ",
  "key2": "53xo8DvcURGKVwcqKcfpwdRUDv1NctemKQ6sbCBXZ9k9qibAticxSACtpbZScMVQnhrB99bUMyWR11bTgW1UemAG",
  "key3": "3xGzv4LQ1DpDKK4ncqwexaxkzKeuBtnhrRgCmBVc8A5QrmZ1WM9M3NzaSTH1MKK38gkd7QqJ8h2FDkH2VYf8KM4s",
  "key4": "3A9EJtVBxMt9vPbvkxkG5gS3YcKhbF2UDMvihSJWzxgviVqGyhUkXM99G81hzxgEpRTitUyfjmkeN4UWxYwd41J1",
  "key5": "232HJt1jVtHpFZVX1L5Q8jsdXMzdsakSafKM5VUDvozRKCeiMJvaesoM6YUuzv1q4aSfzB8YVioGZwLgf5LLamyr",
  "key6": "XArk9BW6NCJuJq5B1XkD5xq1Mxipa2aJce6EhBDbVpYuc6Qv4QjgLqTsv4obCzwMmuzcf1bkU6rkpcCLXVh7qJX",
  "key7": "347999WrpEovKZa7hXFYatuWBQN7r41CJiprkAPDksVe3a5K8QJ3WLhpgirfLP9bdwJNLUeCadY8xGNvrbvaVnv6",
  "key8": "65tp41dRaxJ3YKmFLqc8Kr4oyNoKHALJS6of2RuyMGH1Qnw9toFB5dxTeMMx9MxjAPC72DY5XE8uGdFcBBYr3Uod",
  "key9": "2EEBBG6f7RzTLhsEtgnPEWugyh4yugqrzELqSN2GEtGqmrPaxxtCFcQApeTczuAsXivs2xb2CTtnkqLBMszktbNi",
  "key10": "4eX4BQE8pd62Jr3MvUCXkVYjeN3x2dLtHMM6fXRoaoRusPnsQgn1eXQB9q9zVxMcjQaL4KyHagLba2Vevy9KFKxL",
  "key11": "2SRMfBLBkYJxvLZmV7zn19w4ye78MMNMuDjbTvDcHJUyR2E8UPHvLMk5417dPw7JQNvnoE5pe3eKuxMmYNTjTWNx",
  "key12": "2Gxp4BUnmajqbsBcu6jTiwGpwhVfET2iJP2W3ZQjpZgGMyYu285pZwUSpa9JhVQcdtFvwX1kkgpfjUAtXRFx2axP",
  "key13": "27vCmDRBWpC5C7PJ8vutW9UBaFRTyCmNQunUh4Jp8vxzoM7ofGYTssYPJGUP4MzP7Egj2GdoMaAR21RUUcNgNbtD",
  "key14": "wUQMw3MQ31PK9ycUs8Pqgdx1kAgwKHSwRfimKdazbAuFstjWoJ2rR9GxdKFo9bumiXxZrjKaxEpuZ1rX6nbPDPP",
  "key15": "54hJr86r2Ry9Sm3D6S16HTq6V31qZY3wcbory8WFHVmjowxhN9MGRVxJN7WEGdq8oDmDWfqZGwt2xMoKonD92H5N",
  "key16": "sxVJhU4C6aBL75b4RWarFhAAJHYF9nyX7JBsbZSc6HufMT8uuwFzqjzZWRP5R8VseD6x2xy3MJbnZwRRxH7B7KF",
  "key17": "34Bhi4AvhGNQxqaZL7u9nf4qLmJwSkxi7qQGnRoJGzFKjVPyiAXpNmvsw6qNy8FBRqmWh9HgpuGEeB1r159CGWKq",
  "key18": "56BGMm2bmLhXpnTb2wQhjNeA2hCEhr19pX4maLnAkCyEvnGU8hsHEF6DKXQAbZg4qymTA2VvLJNs8xGXg8LC5vFN",
  "key19": "48YMKy537ziJuvvcvMHB5As4psRTLHbwzB7sbJwDuzHtbkF3ysu93aFFCXTjryknPt95Axnwox9AgLAL5mDQTCC5",
  "key20": "4yLFMNy3wnQ4cmPmyJfLcsH3vjcSCm54jik7AF3WCj9bcV5FF3crkyDwprynjJcW2XCrxe9xXw4z32AN13M1sKFx",
  "key21": "51pEre8yQizvixxA3wPNKjk8bUSBcGg52U2o99mJkymBXAB9CPgCS6BcZqh2aebo2NHTc6xSJibCkJgiEaaHGsXc",
  "key22": "5bSxRi5AuPupKq9577ctzZBAoVwEJ91yGQ1RtGLgB2BQTE2u7P8deG8D3UJwZWdEwXjxcSbUU29sVaVuFZ9B4qvR",
  "key23": "vT5rjntZJysDBxuSu3XGsYA3Xz6TP32HEZP4V8wbG5Tdp2UJdiVNY4cwg1EowRZRXRGY4XeqX6E3Gm2guCMP8n1",
  "key24": "3kLifD5C6FVJyxYCEXp5Dw8cgmdzro77H5EWFedvB9KA1wYSP3siuDycxzZdFp65CUEZeQXi1M6J1ZS8AtgovRrk",
  "key25": "5DprD2g5ZY3wtj9byAyMuANjthgUHVPawsWC79xoCxRba9SE4A9usMPZ6vPZcDQY83RAaWcifLSeHCqiPqmqXokU",
  "key26": "Ktf1AKtit5HucyLaHzrZNhHw1z4E3bZr32fHx9BksuM22PyNMLqcDHecKYg8A7TpV3tpAvnXcvEhaKMZkBu64Pz",
  "key27": "2buE1xfKvi33b6MVyw1LuMNaKAydqYvS7JTVLceMYwdgTTJMC9VdFYESzofTCZVKKCNjCG8Pz2m6CMJhLSfr7jAS",
  "key28": "21npRBAW9oaSyDrs7sjP1oT37CYmgx96Y7dVxueDFnDhaPfbaQL2sUQUowiT1gbDukWwWnYo4yF6oibgTJA8tpZt",
  "key29": "5gxCza8r14ghTBaBEmw2ai8XigfjhPw25wRTGM1bBVFvnjKF52cEaqp2DXfMP5pSzGwPLm1D12hcShYZi3mpK9QV",
  "key30": "4g5ZS19TuBvnYtAymgAp6pM5zMbeUMKk3UqNyi9kJizQ7LuvQPKLmPkjw4dPogKV1dBbgitPoSy1rwehvwhF2tP5",
  "key31": "4cjgoXqwgUqDaj7hnjGzQUTvUgHBr7a88aE7kYu1vuk26ZZREzmQtuBjRNuHs7e2g6FTnpxDQ7nK4VZzxzdjikq7",
  "key32": "5UcSrg48cJ6MGcUG7yJP9JfDC9X6PfQaWViNdifLMeRxx5CpW8c5MTtLDnyM7SwUH5Ma8VB1MZQ8strHqGabh5J3",
  "key33": "59PqdQ8d8wiVmKxWbj9x5pub2fShnA1Ah3nN5fthZvqCWVr8e7TLj5GbpA36id1su4bAAMS9SHmoVJwYthr7kwCA",
  "key34": "5LbkZRHrr8q9TNwqyivtrYy9J5wTG2Aezm2D6bJTKQWp3RzSf58iW8jhbGQC13bXooe41oUp7tk64YMDRBKsbU6k",
  "key35": "619azAVgpmRF9HuW4QxvjxXygCc9hengrbgYCSjqn4PhwUreSm3H9592gTrsbt6qwcTDWNB39s64pvLsYxEx6dXA",
  "key36": "2sq33EHr677mmZasdMCzaRgHeNMbSotsA6cazuQg87wnDxXei7hTyQLvn2ZeqEemaafncns8ZF4XQAnAQeSm4zxH",
  "key37": "2De7xDvHyKGRepJ3125jx9Bwy2jdPhx4SKfaMVSGNexng3yv8FzFgdckwCLqmcVkJJtsiBiseL8zvyLA6LSKZE3E"
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
