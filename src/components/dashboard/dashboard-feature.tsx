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
    "iGf6s5h567hXQUDahdNwC5ucENcm2FqoziVF8Ww8GiT1tr3FrF2QDQNgSnfaXwsQgHewoMVqHoRVecsiNDWM4BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmT4jvuzqvmst3xoung1W515CRjJNXxs7CLnXRd8j3x6ka8tKCr4hTiQTUMvWdRR9WfmtfnvnRruSKYA3odFgbK",
  "key1": "5eYTUBQyvfz4uMVKY8nwRmHfjiEtyXThGD9j7Pg3ZmmvFazJ3A6qvR94f1RThuvqpPW9b6vGKCRvZcr2SJks3n58",
  "key2": "R2tpo7WJHP16gUaGMwNQou62z2zBebDh9Qts6vYD4yfq8zciWJWdK4nJ74MMKiPnW8nHGxoBFmL98prCGZHxFy3",
  "key3": "3obC2yrQ5aGdW7jys533cqMwKF1xcGUuWnqncNZ3x9DgvitMM48iMyvH9quFHXKjvnmBXA5rZhdGxF4iP3tqxCD8",
  "key4": "H9qdn9ZBYwrX9GnjaZWE6seLhrHeaEmamrxaJNPEweFSRHBVzN1XBn7Usg12hmWTmv6FsdNjki5ixa1koZPF35C",
  "key5": "5M1b7wJEUog88fSVEbCbwLxaQx6TKfM1x6PJ1WxVhTPpjYHWt9tpPigSCwnTwPDNWf9dFRsKopr5ZqTurxa3dPxb",
  "key6": "5quCQg2oqWodnjrXRpNWDL5y12rb3cwTECAaFbGjybAuyHB7MQ9akWin3hS5iS4HmY2ZfbzWnBPGivZpyNgLLGEr",
  "key7": "2i9LHP5aMjinTRvwhz1qPz8nRyj3hL1Xoqu1FhGU1Pnv2tgLKfvYxqYgiQHaxvXu7uYu69YUCmT7GfsnyFc3uptk",
  "key8": "4hykYZN1Nt89B1qwh3XxjCs44QZkBVZzunfqPBQQWZHRQjdivZjWGBhSPmy6HEhuaaodxkti1DsdgNZoFiCZEhf",
  "key9": "37i6fy4hwYruBCZAh3Bs5EdkADytQq24rTqPpVtZDUqpmUY8dS1o7KeBRFocng5Ttpdpw6q8GW5AngCpUEVexdfA",
  "key10": "mLDfZKuLW4P4sLwPQ8RWPrppe1YhLoXicGCN76286E68iD6LVY2N4fkaPxGpUMuyRLcqfXhEdDWfn17VgYtPKsJ",
  "key11": "5GLh8XAPb7WNdxYxV8neDhVDtNFext7YEdFHewHYY1372Nsbvp42ugR26hK5k4tWqUs4cBgc6xG98ut1R82UUdRf",
  "key12": "5CeSNSzB3tFJkBy7yD33v7Whh9A4QRnCLbpwPa6CMaR5tRDfLsdvc1WvdyNnbEnFVNtm3iDUF8dPPavAPMcLzMUL",
  "key13": "5bsyKPCJmNs8xyxJ9zuZzkBmjR63UkgFkcnMU3z7BDNQANp8veehweySN4HyBkUS8Sz281Pz2a3Ux5Dfeex5fHKY",
  "key14": "4rQQwcMFgFME8EjnLNNQzHadKSuDv1ff4KKi5N1LhLc8bHVM5WkmMmq3TUcPo7AgHEFvx2wYtA551Kj1VBeJAovB",
  "key15": "4y3KwZJxmRPsUrsoE28z9PEArvS9SQh9hPzm4Lc7to2jWLWN1Hx9TvGtv9LQbtFYNH61Ts388pqZQTPaeLU97eCb",
  "key16": "4xmHhRh5FMagwMJbr7QinV5NZ84JaBH5AadioZqoNipDQ5bcsLSKs631edxSWYr7X34ffo7wLTQ1xtfzZkZi6Z2Y",
  "key17": "37LW2Fw2ovXYJkF9K5LDFwgwv3hvgjfh6H3fgGyzDeD8v3JnfsbggB1aVyGpmURKMkzUtgN7iwmVJPgRkdgekycJ",
  "key18": "53Bt9JXbK2RYuw2h3qgkfJnqzzEcZHmEbj4S8z43y7aDA3Akyzt6YX52B11aBEWfXRipsanLVkujNy13pRhpaZtU",
  "key19": "4s84rWjkB1HJEejk3yjhb3v7BzadrTTDnCq1VDo32uGbqyXuZqz1zPmzYT84gfZ615KxGfQMM948bn3mMkMSdcU2",
  "key20": "4pHerqi9A4DzHzAJSsAzPz3198Zyj25HBFRfFyYUdMZk2botvgWwCJpRcGF9GCmZYYdXrp5y9JFsYY1YYJDGLvoq",
  "key21": "2K79Xs3x1a3dEqVZejcYHy7fHdyNCUS4hdPdQdQrd92v1LeAMDxqtifv1DGd41J1mwusSXtV7y6VH46xd6TvAvEs",
  "key22": "2me8NBo5eF5As4XgihztNQFa6f3RqvrCDpp9LmBY4chDDhKM8GPf9fQy7xiwTtougoSCFSqJAwn59ZARkEQXNY2W",
  "key23": "25AQPUupnKkrsBPFppZWfiyLi6VeUMY54D8NvF2T2LQc1By4bFzhKGcSWNdRPSo5j5A3yyPRRMmhxnG811mPkHwR",
  "key24": "3wE95dCpazmgxBDohZWrXVQUitHAkFzGVv743UuRwZfHNuoLuBqFhdttsC3jrs3ygqcD1zq1Hyih7rc1NcBcuNwg",
  "key25": "3Z2t8KNJjeYEjdEkNxz7U7UcZ9mZdbD43oEGyFJ1edDZvpgsMgdswZW1okX86RnDmqbpmepzAtMTv2Xtid2YZSZb",
  "key26": "2AXEwHqPH3ZGQ18uTTLTw2H6emokKXXhd5qPihpuxQ4jSHeAMkKDwSRb6Jc6Uprv5Bn7vhJLAfQTSEqnmU1MW8td",
  "key27": "227EYAfVBuQRqX4hU7Kn75qebYW5NeWTACPvZ6epaKBMz1Ffnq66kVfixe6ZG8Kw1CD8M6gTkMgGCa6wnANq8BFj",
  "key28": "3W9ZLMCvhHvSmhykLASbhYEvqDTCSDJ4MaazfDdP4AHf2hU5t4qiugQx4Vpso3yZP9qS88a2VCWUq3EfMtqY7fup",
  "key29": "4bsYZCamu6J3twHz4zzyQAuHGwnFFx7ngZyWz6qPWMqe6wm1gq1Hg4JUzFT13ce4hLz2kvztBSK1m2PFUenMCF9S",
  "key30": "5MHh7D3M2a3nqkXNmrCZ16UpFCYF7ztNtHTRbj1NHenqUFaDjFvGjjBMm5scYV29uhFR8LNccqdyggKt4BsLvsUU",
  "key31": "2zUQXa1nNMMX1LvAtofZnjUiAFjaVKfbuKAsP2KFc3EEvjtb7k3bTZxsswez8hWHitqgujkYPrigQygvYmWM1gvY",
  "key32": "3ycpBJQpTuqU5AnuD86r9m169CiDwYkL8VWkxNKEzj1Epc3MhhSzFdPNQ6Bkc27MbEjH3Yo8yYnXuUJ2k4hvHyH9",
  "key33": "LVK7dxZ1bmQYNHbMEPTtVPQEcXS3vYu12zg78fukweHXrP6kGrsfGHJfbNCBtM99uszKvETL3Lb1ffkEe2vFbpg",
  "key34": "VWuecv51z9YDERN9yzwcCzw5kKZULw9mewbTf4xmCMJEuiN8WwoZdo3SU1V49GhdV7NXagzc9PUtV4hs3NqJJSM",
  "key35": "3qV63tBrSnRErXxAZeGuNizPgzVBxGLR5giXx1FicQMo9UC92B4duEfWLS66Xz3sQbQSJhvLxcF5gYGSvZ69d2ph"
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
