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
    "2igaJ8BBYZqYtEUMQohZ8hbjmsviYH97qCfcVxhstiXqnnCVhP7ZNMkeKZS24iVKr57zmCBAH5di41YFaDNZxPKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMeVALVYGuL8is6fH974iw6BQkX9bZ2yrtCuyU9pQxRu2cvzkNeEm4Uu72vamzYqv9MysPNuj9JwNgqdaZcNhsv",
  "key1": "4NbvnD48t9xdyVBjEq5tGhE3Ph9psdmTAXDEMbjnMebpqWCh3ThUuqxLsCuLghpNNDENt4LPKbCr9A2JqM3n9JNi",
  "key2": "eqPoJM7dzjQNhitRd5JeawdGQDuB1ju9jbRSazpJpH2DJDFtroVb6yQ6Jen5uPGXKxU3EiYC1fvGkRsF9qiSQUx",
  "key3": "2oKP7kkaLjVahjSg6tmKAKdWik1fVKgvCXYZRfqyXub2w5sCHxtKeSZjM11Ex94PGrenT7ecq6ZGa2xvbitoeq92",
  "key4": "43y6SDk6LcMtH3DkG25TKkDQ4xTkKfvR66c4bdePQYcTQ1TZUGJ5C13Nk8F8KP7fjsPvfh3A48WFSNFkhnc3oD37",
  "key5": "2sZ11ma5F4CzXdsjjtFyXfEnrMFrVvPETqKoHMWkoomNdxEFsppUpNdDC4jirG2V6DgHHLgAwrYyrVyk2ASfRGy9",
  "key6": "2QCFEtTBghqUMkFXgAKJZrfLLprBbuimrvRc2TYCxURkjMJTZFQwvb7g73XziSrHSqFRXoqLHt7QWnoxdK54j8fN",
  "key7": "5ATFpGce3DsA1ipgX3XDXvGLaWHcGhgLvyzCjG61iU97Qeeqj4Pfa2h1rAtqHk3Nnj73kncWRNgdKExcSDpbG9Mf",
  "key8": "43qDhWePTe3hxYR9b4aAXRpPGfwPAR2bCHvXMNZMBwPy6ZCf6mgiBi8drBuXFH5axzkWuPcBBa7tbSYk6EvwrN2H",
  "key9": "3TEe2ULR7Zh3QGdSczbFU8m2MSQNdhpwsBAJsGWJP9UKvjxygD7aWyTLDbpb3wF7FwmTshFmAXpDWMWadbAZQ97D",
  "key10": "25STsQ3Vx5hwqP7CWCA7zRe25L4DNAp4gDXj8cmHuvABdBt6ngk3P1MxEsuzFtPXxwEjGsTWgDynvGM8x8bdeA4Y",
  "key11": "odHh6SLYjG3hJi66qXJ6KTp8ng1r55969zYZyoCVfcrpn179dUbBRPAKyYpq7ewmfAi6xxwMRNbBQUx2bdzziB3",
  "key12": "51jXUhhxPf4EHS1kjGXan92ZzE35VhF8HGuRKPLo4jvN6TYP1ybqtMboJAcruJBvZJne895i7k5gWdM2uPKvkvRH",
  "key13": "5yH7ZDsmFR9cPngPdMPg6aNPeFx82Zebah6bqcsTyuLU53vkYPz2vME6P7o1NrLWAyxV6kDWcJTmbY3PBs7cXBQL",
  "key14": "2qir4yorfNujqRTYNhJxrDBg8VaK5T13fwsCchCGRCRo5xES8f8mcFqPFtb5MLtfV2UZJEcPtMb2aJ12RZtACUZW",
  "key15": "o1kRDiaHXqqjmu5QKohcCRgxbuFRRcWwvWz35CLuHvomhfPg1ASBwxgS5UCLEiX68KN9sv7U1FuMbX8CYox573a",
  "key16": "UJbif8Dke34WAcfANP4EnMLFj7NKrmtG2zJ3mYS3TGv9d4aBXKEg1MiDczwTCVVshPZMn1J1zo3DLitrkiL5xKZ",
  "key17": "4u9oSocVVDGG5kpwEHHUaBomKfSFiXhNcwMPZwdgiRu3LgYR47rcSvnrcadfb4jYFPr2LZAXARKzaxYarMuRaGrJ",
  "key18": "2ZkiTB5CefFbDD4DAxPBinn8DX7QrCdF7GZEG5Vnyc6YCw7a3MyjUv1fPbLSug2pYCNMpwc7DzCxEYQJNbguSebK",
  "key19": "22XLHVa7u17GHHyG9aLCo2wxzBfaRBAhXweWbM32waRFvjyugs8FPGGYvkSU63d21hzD18XuTZzsexKWdLruntCx",
  "key20": "3Mg3G43gjPC8BD5MhEHGPjKJNG2NppjW9rVjJfnjYAd54BqpkRAMAtzoZ54ZntdoD8V2wGUF1xTeiJp9iu4xzyrm",
  "key21": "3pX4RCfEvWiJ7tE3JswY6HHhqcMeQfiQZmhPmswQmzeCw61rJkAFhDcimXwd4fywvSrbEi6tVsGojVG3ELCbkC3F",
  "key22": "3rGvgbnPQgaBRcioaqFNjB26V5rLZmcwckzRsRuaMrBUg33C1ergi4Kir6w22j5f7YLcwsGSCSB7ponJLBHrgSEz",
  "key23": "3dPjMeAaohX4rNCm1GmpqajXc2h54jSWuz9EFrjCetYyfqtBXcyBLTQRowTJ7JzVbz1ZCjUWCC4vDrr91B1bq1Az",
  "key24": "5b96R6DdhC9DdM9jxHkEeLUQSNbY2zyeLmKfyUboDpYRhhtHwdPd7CehKZjCvvX2SfwK7tkQ3qxLaXbFkJQPCrdY",
  "key25": "42M5hHEsj6eLC3Sj36ofqTVBz6QgvUEjea5wiaZvBzhbxtovNHwnaNb4doZiYA6ZA1TaPGo5mxwictMHyjMkae3S",
  "key26": "2oeE8EnLv49AqZwbE1u5caG7KS6em2YSJH8npwFJm93wpPqm6uzvztdJEiSeCJYPjpfmZjaNJwDHVRUqw3GhNGcN",
  "key27": "2BfvcEyTBDcSGh7NYCZGZdEr2a1B36yVhJYRqMjpmnxQFG6coShPzx5xW8XL1naHx2M1U4AqtrQrm92Lr83GB686",
  "key28": "2s97wp2Ex29DnyayRhrK3o6uLWRxnnoALNc6XxzMpozALyGMKRVjRfheRSTUkUpEoAQbnTnhL8U6LnFkXokhsz6X",
  "key29": "5hBJ89Yij3iSJmU2pfyvYJPK3qH1WybnAKFDiEx3rnXbSDfoX73qhBV8ynHYPg3QfRB8Xaf3TR1DAtaRenKorZzJ",
  "key30": "5m8BWzvpbLHjYFVxySivHPevD8nMuNNkvS7FmEehWugp6czZ7RXB69MH3XGU8DbswpGrDCEwrCpJEJeTFuWNugtZ",
  "key31": "2y4tV5sbe4ombwekFFHdCcWgMhiu7Jn3uQnRszfx7Yj9vQJEpdq69vX9fvzbUr5QkGxVp3EiQHUoa7FzxCPDYPCJ",
  "key32": "2ZVpLcEebnZRiC2KoyRginBtvQGDtoU71TXShfnMYRuMVJttP7pYdYS5h7fsSwDC9WKJV6tA3VgFojeaL96KyBjK",
  "key33": "2GN3EeTwAmKR9YgDqPGiUrBx864oBcdDxS82J8j5QPfeRvuNbSpNx8DrwBJ3bZCSwGqbwripqPunWTSV2RgrWFgv",
  "key34": "3SLDqvihx8iRbZ6gXtAroGrbsLU4R9X6oXWPH4stV1wp4EubKpmH3cvktaTGEQugeDzAEA1H4G7tpuQuqSMK2H5H",
  "key35": "49iTDBAi3UA4yE5Vmzdyzufcg6S2tTo2JQbsSn4sN4Q3iQ5Qx1JbUUmmfo2xRQ93ku7Hye2yWimKodMF5zKSt9gV",
  "key36": "42myfzmgXa9cf5uszfbvNyRkMTYsm2RRQiCcTcB7bBHNj865xU3qm9tmU5gxVyhZineXayTeFrttvZ8rX4QHJ3Tw",
  "key37": "Qe3c5XfTdTPLBqa6dyFMDxZnSNRF9nvrF3KdmHSm1UEt9kHqTYkQbE1ovfcTkR7pBJ8zdvBy7a23A3Lc1FBu6HZ",
  "key38": "3kKtAxof2w9Vc3gtDqHVpkviswRhnC1WfPfNmFTxguRuKa5nc5M4uSfqik7np8SnNz7CtCeAabFZZVqGd2FqnRD9",
  "key39": "2hGZqCCEvDreYQSTowZzRoG9qki4LbVvtA32oTSd4Vf8bWp2BoxXMPddRrk553N46Lm16oMQnNEDd9xfZd1e8uPS",
  "key40": "3s8cSUAWsbGMZ7S1oqAw8LVpff4F88dHkj7Wjjd2gcUmLgFQotcnwgBemjALKY7ixejCxuXMoxMCtAz6huwKkuY6",
  "key41": "4MMA1oDj77mTf9KibhgbQuPLNnW7MFsavoMe3NcrWLmcXGAmxpdzk18QJVobjiRY99brd3nFFfcLVvVUCCKaQy9Q",
  "key42": "3FpzSpLGNYb4fvh56pNDwkRBZEht6xgRFmCKUydqW9h9U1GiJzLHsDshtwBpQivG263WiidPPigSLyjJRo9utwZY"
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
