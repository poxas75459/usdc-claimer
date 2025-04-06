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
    "5v2mfXRTVCFD3WZ18kGsat37uXuDj58obTifUfkwv6pVX5xsrEwwz7T8igAumZUxRma6L8NcJQnAmkgYTwLMgaPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZqakU56KhXP95ZTYfSTGAyjM2De2TT8LsNGNMqErwYD3rbULDPdBmae3fiv6HFxPhcq1hHRSKn392Bhchz5E47m",
  "key1": "2bCnAAcSDErhDt8gi46uExcTpmWHQMs4d6424PMJFJBTufRNZF2fMAfmY2vz64khnTWr6TjDiuzJP5rGX6d5riXx",
  "key2": "2cJZvJkhHNc5bRo67dD3UCLrb9HanMp4UCXi6bAmKQszgpyvcMH7F4o4CkUFSqHfCriEKT5NfWrcMHvLD5uAyEHk",
  "key3": "4JndEKodtTVWbRyi99qxWLiTuD8qxfjwd1rqSkX9bzsECFnzVPR5v9MhXGceG1GMBphbfxx9UjQHmNmwjTU2o7Tu",
  "key4": "2mVPrpuJMxHFEFbBZpWHwj5sovsZ3G5mC5fqYHa7iEY44Gh1vRnfkxp4XhGgyXZhWMr3eYggQHjZqKZgK3eMbJww",
  "key5": "7c6kjtwowedUddgB1Jf4Z13rjZCWHdh1krGWjhgvE4sX6BPYLctqX8TQnFCdBz6db5v4pVsF5JcbMy4A3xtATur",
  "key6": "4mt4AaXyv5DgXW635DW5UHBD8GxMXCGZYPfSBYCQq1RKfddBB6giWXeWQWS5KZNP8X3DFf8tLpiG7oSLqL1Coqqh",
  "key7": "2ETwkma5x5x8AdRBCRJojuDVfYPfv8uD2TZkghnH5Td6NdY6noVkGfCK7yWYror5jTufMVTUMj7YMroKWK5hyHNF",
  "key8": "5NVo2b16XfCwSzBWa8hzutKATW1YULPFcMyV8TTGfyNdiFR9kwK56vs8n8Ua2N9V9LTkwNCzxwBzhEyk3NCW5j41",
  "key9": "2Nt9qkUc64gGjvv3M8mVkT5Y9aXMDRaeMMjcWbhjBLLGgvGwunDt348h6So6SnRyYfUnYT58YbFEbTneBP7KyGF8",
  "key10": "4rAEcM2aT1QLMYsYodkkrpGRJN7Z5cfvwM4imWqxg5DB3tgfFrgubEgqa2hWr13ZzL1JTLfERrH8231Kz3DwS744",
  "key11": "2wn4ekXhLFMwPp8gPFCrCtKjwT5baZL2CdXkj2jg7amJwqna2JuP66KGJDiVE52nFPyLJ8T7Fkaju42gie9YSty6",
  "key12": "p3FTK46PdcDJvmMjDbbEXL6h3fJ9hQ7FsbfhPJwWXyX67rVjTxD1HX2AQyaUZCeXEWg7FGrGRcGGu5595q9kBRq",
  "key13": "2uQBb1Y6PFfQka5Ls7gdvzoaLV3W4fu6UDKx4cubLx3PRugak61cgmSTmLFqDmdvWYhbjC6SqSTZBTUJvHFtB877",
  "key14": "5u77wbaob1XQCHzb9GX35V8iKHPKSZ5C7G4sZ2Btt9p8D3eAfAxFxeFpneRGENfsAkudVf3t4BvwLdZjN64AXejP",
  "key15": "3AzrxxwPkJEC1BSBHktHuCkFB4X1MYMoQdDZDButsouKsQfrxHPRs5RikSvH95a3A1QkQCvJzG6tqETyXCzCmsUc",
  "key16": "4sk6yh4wHiHKYbYa4ttgrAFGXHrscXHKPwN95E79FGNSRjdw3xSFBvSUoz2XzPdgc4nmfMNMgMvUd9x5PeWbnFg7",
  "key17": "3m4u68GybCsvV6vFPWaFp6HzXCjp6ZRWqisRGkcrN8yiMZcxEcqDsGMQHDeQ6fp34e8cpuw5pGMuGEYm7mo8jsve",
  "key18": "Sk7Dj9w3DXwtSH7rqtYAsHDXWkCKp98SvcRoRdtX7W8D7sXBQWAbBZgt68DUjwHXSY1ZK3BY78aEpQA3hyatRSD",
  "key19": "uvMTjQUA6toAL8xjYZhJhh4DEB6xhvSbfy1VCr8Qhnete8iJhqb8twZFkA9cCLKYbutzTx4vtfphkQk8E5pQEPQ",
  "key20": "w3zxZZASM9NuqX2mFSAKEWecpyMaCwdTM9ceBnmzZJ8sTjUScRwARR9fzNA4FnbpW92w2KGL6F85L85c968LLat",
  "key21": "3ADKsJ95MKxURf7WJ85CypAPcXLM3JENGs6B7cCQ1k4Set9foM7FBCveqoRTuWLYsU3UwrGkv4dFrMK4iHHBSf2K",
  "key22": "3bH5c57Wxcj7hy6pL4g5MEvFQYo78nckPEKtVn7E2wjyWM9FzSNSMTAoJLiADy1kBy9ReyZNMSPuFguJMzgA2JbS",
  "key23": "5zRagbUrcFiFembsfQiAK3qxR8xVwydqgRRcoqEL7k9g1Zwb3HeP3iFCuRycK5hdPk1xk481H5JF8tDruT1Tpq43",
  "key24": "2pDkjPHKoGZxQUXXPC6YypCCmo2LgPgK97VLy1XchQo4AVAgY3WAEpcFoDgE99SKpzTDTUwpTZEeBjz7MDzDRLoi",
  "key25": "5CG5A195Tqv5hJJeX6n9Lc18RfZY1UmDUCXGFB12YGmebe22DbX3AfGT3Lqijo2Wfc6KdJnrVvAeGKStrHr1Wbbp",
  "key26": "5DLiELndPT9qyZWK7E7bbNkNagHfBfFfK824VVnkUBPt9MRjrNe5LAtEDdqLwBpLCd9X1JKmy5FTkaJ7VWh7NtaC",
  "key27": "2zm9LXm6syGBLiCposXHoiBxXrVLSnF7Zo9mT5VNvMmHF5PwoRLnWtbBv5sR2qm9QyEhSCrNCaRwc5rNZxZ2Kq1K",
  "key28": "45EnC1vi88qFYNCzZ6L8Bj94qNKfysFMdHPKA5TBHLd1cB1TMme6bnGoWpfbHhTVSGhrhq5LisMWnQz6p5oDGaUe",
  "key29": "5oihX4nKieZFqHFSiumKbeU3c7VD5s3wWqYkNMFbpWGHxUN3MLVyCHJFibvJxKqSniNCH9MvTapzE2Km4Rn9AWV5",
  "key30": "5Kr3BNAEV6mfh7u1N3ReQNKDAhnJKtoQh7D7Ea9RuMW9oqSKmj6Ghfo7Mvp94tsDqs2c83YvdUdbE5Jr4hbmsPj8",
  "key31": "3opHNyHX8fuKZ8BcB1WX2W9JUsE4BUujnvdkWjz13zYzvLSSoVKYHJmtyjLi4jmtnuMrP2QGih5yU5vbF4UMD5ZH",
  "key32": "4KRTju578pecXL79UZmhFovuwqJ3frzW66nxZtYTEBUnbpSET9Tk5W2bWZLy42iFArtA3J8N63Z18tjqRqgWA2fb",
  "key33": "3PNptWrfLy4Av1hnnEoPjwpfqTxJRuEGqr1gfDQx5HHqqU1JvtMTNthMZCL1LSApj1818SYvwqoLTMK7NdQrYzK1",
  "key34": "Ltpsbkf3kXLXcvFBhYvkFH2YgheqgjGPUpWtydCaZGjyNMXdYsJqokZr94N6AcMoPD29hVKv5jEYvewpwomFEGS",
  "key35": "2BjThAs86CuowqbMLqKgN89b79h2TsaeNHckepsSquNKonnVWwREXYraBwrhR8NsrguYxecYh5fufHPZ1eiAv4nC",
  "key36": "3SBgBuAeucTjwUw4VZR5cuDuCweEeZKh6FE2HoMNJpZF5TKmcGapZd85WrVa3sQYCjqwTVyfmvX6eMEpdHx5j5bx",
  "key37": "37dNEpHP9PBzWsQm7Z4UYCYSCEq2vGr8TnwJE3T3fC1by88LxoBZZ7nrcRevu8HHbbuLWj8Pnzzscz3tSfMovhnu",
  "key38": "3jUPbT9q8wdCqQjpz7aNQiriLXPmUHmYxAn8EGjmA3noCB8rZ4iaVcjzUL5UcwfJRJ7ZYKWoWzipqStbTuudTM2U",
  "key39": "Y6e2Lgexysr3sw19nBUCH8fyjHNQdeNitCoJRzMRkfnhJwGUJdjjMUhPpkFxK2JCXb6HxAuZhKrN6QAEjKwD265",
  "key40": "2j5JZf7xzd1vF5K6EL9KHhrGRkxUWBo9LVGuka5A2DGbcf6pvezXG4VSbBMGt1fHXsT8hoGVN2pMbN7nioAZQSL6",
  "key41": "3FYHn5Hh2aDERG2p7KZfzgYtkFuiHT9bJTSQk2cbH8t2Ypw6CEbSbLLbeYDJdvvWRv6LmpUena5VuAHd3o686pkC",
  "key42": "4p3gmQkjBoTfJ1fJKys6Xzymyk3CHoGrSt29A6J4sG8HhMFrMR8BFUUxYL6CrGq85X7z5zH6QQWuaJgLM7KWm6mQ",
  "key43": "5U17kRSCGnUCSrrmfqPDgF3pAHz4dn6E5WChg4G2Lv2tw9tLgwqabtNa2eNrnXm44ASSjg6RWaRPyee7PD2woKCF",
  "key44": "39jhtFNbiPfbHjhAjCtWGWndhtykhR6G435Wo8aXpouTiN3pkT1pEZ9GT8KhknhPHetCL699C1d5Cn27SeaxiiUd",
  "key45": "3ev6y7B3pTZ1ZHvjaiATgvkwcNnb2BcppYbRqodg9Qv3TJoFLmiYNp5x7764xrv7tgjpmogGLr1SoQpeyiq2aGwS",
  "key46": "5jBPM7AQrQgQMUTTKbnsqdvLWroKAPoTYksiqQjnrHggTqJmeb56HJh2PuzNkWm8oToN7KZUTfYVJpsH1qhEGRHC",
  "key47": "V422n9xqTPyURP5HdbRE6YRHNehntJ348WNYmSU19FCQS7dsSdxjXfBf1zgBP3UpkdBbYEcaxPvb9pnaPTAnYsX",
  "key48": "ZQha2kPnZwqFvtcoMmfJMDot2sesD6XnmoWyw9wwBYEaLWpRDuvHsydz9WUuKJNw6S1ArKpmrp76WKS8tHL3sno"
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
