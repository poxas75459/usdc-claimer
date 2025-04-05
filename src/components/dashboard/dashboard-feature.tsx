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
    "48w8oRtdU2teddP8T1AHPA51m7UiCcdcSkRTgvSsiyhBbFMiuVnKG9w69pegEcdvVJS933aY9PhbVCXMUVzFAVX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSavy87STDpZ8e7SZtp6py9UMGT19oBrZKgejvck92MQ33sc7sf338Ue7y6BpNWiqddt9ShtMGYzdGVKmUTu7xr",
  "key1": "32sTkJm3pM7LEnKKNXZvyjRKe1ZDVK3eVXsTgyKSQmehWGkFE9xiJtmbhdfzFMWwN5ueMS2DENJ3fEPXsHkqLivh",
  "key2": "21hkLzo4g5xApQuFnqE9fUMxivjUjFYZWM67LkJB8PEwzMznxEcK3Vsh7rRMQpPBK4vSp9EtREwWddRyjijnhYMq",
  "key3": "5QfnJE5vD5iXxY6quQdU1QNKmnr23o9c1YTAB3L2dGSG2syxJqUXAV8rQKmAKfNbfDW6unN9hLN52SXUXY22o2cd",
  "key4": "5BUHUGkdyMcWYVZQWWqhDoCbH7X54ipaF7TBDsKYJxk9GUDHZKG1Ym4Nm2eeQ9JWTCJB42wkkwHLNUMMmRywoveS",
  "key5": "5LBeYRRpn2eJ4P8HLFJxAzpxEDgyiGVuwgSQFTrT7xAfhiKPhEUD14kKwZJgiAjBymgorfqHa9bH12aXZrC4poNV",
  "key6": "PHXcvBo4ixbueieuGBC5uwYnoY1WEmvuYbcWErCKehESQPjCJYQM4dv4ipHmXq8KskVsw7gtHiZykpYcHmnoKNh",
  "key7": "3CCJzn5uTcWDpwb9YYKzmhjeQUvxDRteWzZSjFpRVH2avgTGyWsgrEaVVfnpGwzaEAPySJNdMzspZrczWMyaUoYd",
  "key8": "2BNtUExRYLUJzCEL2tfWk8nJCHfA9szLZYMkPYkMAGfQaR4UM9w6DAuN6DXeDWxRcMUKk85y2DtXajgWM8ta4Pfs",
  "key9": "4gobYLTXk1cqe6RsDu1ZpNPBGUNitmini4M7kcRu3RAXTs8xMnvs9WL8aqxjToAWdcUB39tgGKiA4pg12mgM6yUz",
  "key10": "5uFKQvF7Doq5jH33xzn6hxckm71pSzTVhavktWt2L9oxRS5NQBaaKbzHcV2MoaTDaBesyoJz56Yc5onEGjJJ8bRn",
  "key11": "bSUCnS7Xc2Lu5gaqEvmVizaqPfe32nBDvESf9SzBAZbLLX9qRgYNCjEWFuwEDapznYZn2mBmRRAVSQtevvhUHCy",
  "key12": "2es3zasuwnxm87FRLQaQHMXKi4ZSWyjgRBHwfQUieNMCN4b4mT9q85nQdVB8Y4tGVKcSYSEqA3EXexcyFDjBo1hM",
  "key13": "5a3vNWjzm68jDe6MvXjpUVK2yzoqptA4aACixbR4ZfwmZAqMkr3HqDoaqqppQwwbgMweyHWrb7NTPKHmiJ2TYRu7",
  "key14": "49FGFp4DXZTJ7iN8jj8oetetz4T1f7QgyCePu7WqfmyUkYvJbqwZeNMuk8SSoFE91SDbhUWszX5axSBYGNS9Kcg6",
  "key15": "3hXuRfbdr2a8PPyJkFeHB8ip1i78x53qa7x8FBFuAxfWg1so4VHRFpGgQhPzPRnZRuPo3FekWm9M21NDUwjMxaMs",
  "key16": "jiLfmtTCPQBhkuuMHd7bcvYR1yBa9g1kJLJiLvMuwmwjAdQ9Hj39YDjtf95r569yRXTCgr4b2ZnhAkiRnyiiPAG",
  "key17": "3t1WLoQN3AgUyth4FKrBGvTMfEbsawWJqY7fAennmKN5HpoR2YQSvNWg5PhG9i27sLt6AQ6ngcivfifpmtoj3p5i",
  "key18": "5v6GG8ESsQiLmvSnJTniXqXfiygBGJQa7n8rv4kE69vBAJnfxKaZgsTtByS2nntZefAUD86B8spPH6mDc7xTsFUY",
  "key19": "3azH9geBXi5CCQXtFcXd5WPdNRwVxzHX1YvvevQAjYdhLZCkdTtLJZgujQ9ML7KU7YUV3xN5T3oRz9CcTsXBNm2f",
  "key20": "2eASFRNhbNzgfh6WWtmFSn7H8Jz2i163ta3JCkx1b4aWBAVYqyfMQyb7KHF5yAFMkE8hSMw41rZuJUK211CuBWnx",
  "key21": "yMbt66pjLepP5zAgjaFfxfvhhxupkqTxCaHnFYKdsA8aLumt5isnHGGKSrZy1GZrB6MZ45pFLQoTy9XRAxU8SQm",
  "key22": "3Hx6aDK1vggJUBCFvTz1UNbq3ZTeLzFXkrBoVHZ9ggX7sDG8aYAUsS4RunP8C7KacNGRsXLgqmLyWDq1WCxJYHWH",
  "key23": "32jVCEnbMa5BgGyoqot4kqEjqJRBb5Wec4mcPSi7FXSPVJSr6s8Ni94Rpm1oTBtF7XNoksxoaCKsdAqim6VhWTTf",
  "key24": "4rrSndppmMLQryR2681mntvY4Sfp6tF8kqzXmW6hoakix73HcEHXh9vEEA45qZjbV5m3CSotisgwxLB3FrjX1nkk",
  "key25": "4fi7WdpKJiFNLpevaokdFejfVFwR7nKeENjpYeEGto7JkdzPVJfrnpnG7NoYkRnPpZJ84tH1vfb4FzG4rPJJ5PQT",
  "key26": "kuqfcD6o5UAfSsXonyX8sxDz12gr6cw9gbJSZTUiNJhQhcEquBiQbuMMUKErThS31bMsjoPK4aVhUj5mLabBwMS",
  "key27": "4ESYABefAxxMVDzanBNCty3Qfa1y8kmdLY6Uhu9vCZXDTqBHssk25NsjHXN4e4QTcLsY3qCfFTcnRCiN4xybrvGS",
  "key28": "7ZGZhUYLJ3iPNhgEfrYEiFh4ceLFXwsd7sjioA9TxcqShQNrGJ1Lv7JCjHAG2qqeJ9vdAmMX5WJBCFjkopTFYdh",
  "key29": "BpR3tSsd6J5FryDxiRUUnhggJ7QX1vWqwU81ciidcX7uLXidYYLWmqeLuQzW9L6ybHc9iNKL9ixw9HDZUH1twrJ",
  "key30": "usBV5jjAwAS2EPGkc7TuvPmiWYyjkBgTJE8h5DtUyQq71fFEwCp4eDFqyrHo3UXsTPWY7PH87SFprXbWbF7U8tm",
  "key31": "3ieyMxHp6eoGPNphJ7H7PxumLhAkJeWH76yVBmLk1TRzv5muKUSh3eF29zU8Gam9RVr697LAH6ZxvTGCSZ5LGFQu",
  "key32": "216kotnrLNqJB5AZLwDWD2yzY61ybkb5yR8kcUXubtpxGggh4jPmw4KD99PpaachzZFoFE2kSxQ1eVEppxTu3B6Z",
  "key33": "2eULGBAGvfUzYJCgN2mMMTFEWUmzeVdcA5pXnWvEZpDMAZEfWkqFR7KszcgWmd9YY85s68qCF9VT23bGSCSRqSaB",
  "key34": "HfRppHAEXGry4KHWVvWQK43CR9eZSe4CvWjRbu6Ny9QVVdt5iW7gXgkZqqsdxgSyCfniaH1pMuzqufz9MkbJwVD",
  "key35": "5HBMrogyYcbUbnBGneWG4xeKcEzqqY3MqntZCtsiESyk291yaaZJ6Q2G4V8YmbV3wSimo3BUjCd5QpSq36J2HfuK",
  "key36": "5GayeRz87aDXJp8BYcyu4WdJKGsxqyT13F1Q4C9CdYYbCSHKiD2T6ZGCsF4RYNUvb2zs9tQmQ7WJLeThtEyvsCBo",
  "key37": "4D237MK1wZRVBy1kijtcpMGCbJ7xTdKq71TowLPs1J9z4NQsNu1ryUJEDAyoRnWYvkH5h3sSwUVgAq5HSoSjFzhr",
  "key38": "2Ek5mJNfqtXuP1M8gNjFxkyWyTRvJ5e7Gvyn4ekhGf2U9cPBdU3Xu7Rcwens6nX5wt69SccZfXniwCXuqf7AHm5H",
  "key39": "3Lj2Z2Jb5UpUrT1xiWn3xe6TttHAwA3PQgUYjkpN39HubDZnG4Qk2e3gNWWasLGPtY5WPePXZXuaUSH36C3EoXaR",
  "key40": "3RwownDqXXdaJGYWAtHSVsje8H2VAhtcempYBCz2Y8JZaAGeoYbLVcR4eio1gw6VqBs2mrKV9RvsuwSe1puoon7W",
  "key41": "5VhN4nNeB1M3d1zq5rsGcajroJRCSZA8jJQaU1zeFmSLVsSb3Ht6BFmB1MBgubsryH7pBLHB2KBDv4oKoYR6ZikQ",
  "key42": "2NTJQgempRxkjkZMkatujdWaCQkAUEJMiuzizqDufeQCuV9dBP4xKXgBPBp7mzkPvJ1ZtPMKFgorzLYscCgTDE6A",
  "key43": "5fmfXZuX3xcYCc2XgP6bNxMMhAkWfgY94BzAraDjFvx8FKDzw1mV2QkYMZEJBVnvQZDfAqhnAyrzMK7DvPJBUE8D",
  "key44": "4rhc9jxC5EQvkFTrPwce57fk8XfeVic8WoWBfsiCGqdwnC8k5DHKMZrcQ1JUenb3yPjtwbQruBxAGE2ZPx1sxXJW",
  "key45": "3tdbjsd5RqevfF2Qra7NHM1ja1R25mmK1XZzet4RXShVRztXzuLRxkygnh8MB7E4Fb6dY3fTRFYq5iVtg6j3MAg4",
  "key46": "5mjUDFpAiXyZwoqGqRwdmJehE94t8yYJUBjsHTZMeJWCuEuGt6VhPKUtzaBa6mUKQ8AKvSu5dgiWjWZ2YLsxjyMw"
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
