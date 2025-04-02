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
    "3h9VsijLXDRpdMXEg9P7PFLur3GjrWzqcvg6oAyMAobsyZ4EtKDRobNZfZRPNDRg3KkMbNR3yAbmD1rDN19jwExv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RV8sxvUkZXQyWgZgf2T2pV46GQKhNtTNpRY2hubbSdwSCyR16292ztjUGrPYcdJKYuzDJNVo6LhufJEqtjycmi9",
  "key1": "5rCKVQ6RcAavfd7Heeehw8o2Afdjjj9tUSYAF5shbyL2PoXdwazm6ar9jZUHQtjqmcF2aLwjWRns7cP7D9UCH7qz",
  "key2": "5ekvB6DDztjCsVuB7LLBr42JK73AyzgCWGw68dwy32kP1yppjvc6XR2RDTrZCjj5MQVca3TpUUMJanr58p3RgnvZ",
  "key3": "5SUo1tLo2hHf6Nb2a7Vyg6ZfxEjEzQA7bC6VGEe4V7ckpkw7rvV3HYUFhsrQhG54acCCigx9EpTncQ89CqokCwiF",
  "key4": "2kyi17tBCtyvGTvBbS9kxP9q4ynj4jJhsbyDnVeMu5MbEHM6zBETg5ahhmz1Q3nRk6mi8rnHmdkpSZTTgFdoCGwi",
  "key5": "4ngtzLKP7xp1KF5rtHebq3t3mUVCw6qmtnahxWyqF9QLU77MyvoUga4MHgc8rqEn4TY1swPNGe8fML61nFj6Ez42",
  "key6": "3Vo9rP44B4XPkx18X6LKpvCc9UbK2YT2Rhb2Y5jCbop2SDagzRtMFe7BPTvcKHAikSo36eDvxEtYrrDhQPP69TPG",
  "key7": "2ZYxVDktdDPmatKrAmJkhxYyjaBjFamnicfr13pZk9m8swR8J2HNdNezPeBGpQy5ASehd8ccCKU6Td5tfw7SCFvu",
  "key8": "5RR3GH2ch4Z7WMAdxhT3Xtznn8B59BUbSFhVbUE9u4sGfxE8jW7Dz3w4cLg9VsQs3sGj3YGUDwgL8PHo9G2E6exG",
  "key9": "3rJyrnfogvQF8mmow4fYRoMFuX8wj2LB2gCBe4ye5YodtgnJq5hm2C5BiovToofdDRE3krP9Uq5HTJms8fbQQ3hJ",
  "key10": "3pcP17HTLdfVy27CbJzVTSSd6jwiqkyKZBiGHNERRQ5WRWZYopPr2hMoUugwwLVGTNkepgB83QE1RFBEtz8RonBX",
  "key11": "25MB98Hnmz57YrUWEqcfMt7Bk6pboe4H971qSus8he5TQojTwww1WrzzweDU3n6jXX61FVs4kRt6RqT78nwXwFyE",
  "key12": "26g7QHn2PYKVEYSGGM14pUr7tYbgReAEPU6gSAR8A5Md5ejWe8Ah3YTvTXSNDWn81wcstgRyZWq83MemcCT7qTWW",
  "key13": "2AuEMnYa9b8iBGALi7HEQT7ZDNG1qHrptmnKowPPsTymHnTTyQcVa4BEKh8WYEpaZQb3rAdRDPMA268vqZuJZ85",
  "key14": "4Dt9AP9zAhZsrsamb3gSjaYeCvkorJrNAVfza6B5Po3SkfwrG9MHorkiEnVQxY28XoVc35NNZQ5aT33D2UjvY5pU",
  "key15": "3WrBC4RfgqaeuB9AoACdyMa7wAA9rvVVWUrJFgjqgZVCgDnZyZLRHHKeCh9s32vhLxsGzqG57tfWcuBE5thNSRPh",
  "key16": "4eraL11boVcAoVcn6dtYwrXyFB4GgQ67GbMRdoXsmrMkogXLgfCiMHdg8w9QskpQDiBcChvLuqiReUcHRY3sKm4i",
  "key17": "5oFeJ7yjyjBa7SSbHWyZU6HqfQE4JYGFLXLhH9LFCnDJ9wZ9zQGXmo5BkgFVfedPueyQRwN4WzkM2J9GgUcfZWrk",
  "key18": "5eiUVbZDk72CmyqNZjnDpHUyu6UyLCU7YQohdwCkPTqP2ceQCQ3h1wi1LnCHv2p6qx5gTityDnAxvpTapgmfbjYc",
  "key19": "rLkC5vsiELaVtSjj6UEZmCeqtGXPb22DjJydb2ENonip2Qkt9zpYxV6iMdYX1Ww5CYxsQiua4jQAcgtmpEeLxi8",
  "key20": "2ocLih4EWgF4e6oDKZ8s7tsNX2tCoWnUSCyaU2ZzaXMkXwQBQtYnygW13SHCx1W4qwmCBjrNy7UvgDG8TK73jM2",
  "key21": "3he2PXaGG5uygDBTWQjyugSoLDMVqncPnrYB24pBYA7JPxMvC2t9dwr5jDD2DNbNoeyi44dy1c1bdfJbRFV18ZKz",
  "key22": "5zFp5GNhZ5GtSLbv73Qmf4CkLKHqWnGn6mXizvy6fPdj44CLT3ppGNPaAiyNHujpRxiLc4E1FJNTXDomQNdC3nKY",
  "key23": "3g1zjaphv3EW1PGmQjZ3Uws7euuvEmCftndzBzhJcbLMjGVSvRQw9vkyxDtFFoVKjxazuJ1Pr8wnvVimCs2oiHpg",
  "key24": "XUHHQSYDDpkSncQ4kFSG1t5S26XSvRb8ZpjCZDvJExWzVhttqLCS8LqYTkZ1Go1Nd3szA2ZSzHTVptw5vXjneSr",
  "key25": "674kDzqSauuxnnNTFHuj7BpY1USxL3dhQRn4yTdDjK7sqaDopD4ePWnvu9sKmQ2QkA61NYwQaGVkRHYPiVn3NPn6",
  "key26": "48ZspXuu4Xv9hJWDiSFNzxTM1AoZUeM6gwKT3TKrTHj5Ssbo9Z5W2FWuXod4J4JVMwWoYWDz3sJeEdz9onwrbfuJ",
  "key27": "36bAKiGRXVPJLancxZzMxK52cQo5Bo4FCEmF2orp7ZwZEVHB13DYSBvFR7AfPozAZkF7bbLNpcy5aQzm3k3NCRLk",
  "key28": "FaWbZgEgXExxeHdh2XS7pEEZ9Sfswi28MsBmNrycdvH8u6kMqHxCPeG8Q7Mv4XaYzXRzpS8fiFymRPFguqMrAhc",
  "key29": "5WKh6YNdYRmWuSrGSx5RdCMzXAFGcWiiYMxQ8MP9axCqpCUxJMp3AToGKC4gUUVd9PfH45t6yEpW3xf89DbubC4T",
  "key30": "5HHu9EQ6STkT7GnEDMA1bvdGzim49wKqmqSLT6cKd9KgxHzYLnddEiuhME4TdzQCSeHokcAXj5Tc1RXL8VphX5x7",
  "key31": "57RC8ePCnDwGeADWrn6v3gnu8J67ujLHwVPpGmhLYBEuEE2Jmbr1hmYe3QfZYtahVqABQt4inV2uPAdRi9cAEfnx",
  "key32": "32biKcGBodZCPaGzQdXpGeqZ5tKt1hCWkm9tGzbDgDDWTrSVZah7eFMuFF9XEP99FXDcPHA1SG2Nkx5s3FYEy5ca",
  "key33": "sCGJXTYQeQvWb54birvu15ET1UNzbRmfprDzfHi7cst4Rar4fPXU74YZTGcExffV1d6StgrgFDKfZbsNw18muyJ",
  "key34": "3h2pryi1YfvYULLWgCeT1qQjrwBuTAbgraogkxSoQFqX2pQ3K3hasyCnNhUjXTeHELN1qF6dBUvGYYY76KuibftN",
  "key35": "5zWN7zQv1zopw3UYR2uKaETt4RhS8QKMpXY7G6vasUi5HB28iya37ZNX18SAEXcZKCQQ23VuatggKwiz47MEfYhp",
  "key36": "5VNz6UQ7qdQ9n5qhhc4MzRKDEWpwnvyuPaGRxC91M2EY8KjL7iTPHfXtxSwRhBaRVUN9WJ9ZzsjGNUhZK7Dkk2EF",
  "key37": "4917FBDVpVWCVKhyRcAhCJVcQoa8V5uK9o2Ksk1So8RxPfJCHBPjHUtsb6HVbBK4hZX6JErvQ2uUEXru6FpUbgDM",
  "key38": "3HV3Cb6fxFBmkLpPoCq8z9fi1ZDVrHHU25BgC5WNfJuyJEAHLL36vH2pGDH94UMkJ9H2CJxjoD2f8fmfAgRyUAfS",
  "key39": "tBVVrtqNaQh1RFcdXTasvGsJyCrZDvdvxt8JWYSgQ3nXEzmidxZ8hmdmC7MRePYWJe5hrRpkpVLY1Q7UHyLnyj7",
  "key40": "r1R9ao3k7hM7HboYmvLHEgMTdN8456SQpNUHoKwdtmvUnsU5atjPZhPdiNMHKeEr7LTAYNmhoxg3xpz6oUaQYA7",
  "key41": "5SLrR4xrj4mffedLCQPp427pxGr6qKmPtZpEgCbfYDbDRAk4LGTzyVqk2eUxvx96ScakCEAtQxyj67KuKifQQjPx",
  "key42": "fwsgUNEedp6Q88Bpg6rmUdNVf8ZHNsSqZmWm2xGAMLiBBCjhSEsXF9umXPkdprkGgksT7oKADNYbCg3p82xgcoF",
  "key43": "4b2zkS5gm9mgFcBA5crZFsQgR4g21aX2avQc5NKMnooquqsuAaq2RyZFL1L979i8GLHnFkzBRUqyeJxw8FqVNZSV",
  "key44": "4K8Bj9A2J5mzRJaWDp77aCsCJBYxzWJey1wpurpwN2svWCkVMoMBgVdRa6xV6ZLXr3vVWre2QVtaUKz64B7wRCL2"
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
