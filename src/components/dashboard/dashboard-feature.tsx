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
    "4zRzVWkF2Sp3obPGjNjhr9TvBzFaq3i3FsSHoKtbAFunUdiW6pMEb7G98ArWgrx8Yu2tTGUkMa7CDJJ9wZtE4zsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZvc7QjDQtDzrBCaFU8R2bbZ8yQ62r4k1xCjUEfjNH4rn7UwCF8AGkuo4xHgMKWuaSmUnuyXMuBF3QFbNZDiLPC",
  "key1": "25caEXzLepquVWhi1eGtpoTwSLczqG7rRA1nRJb2UkAWFpJXY8GUcRHGndEJ8mxPT2VKVrZux9EVbR6hBNAnM3a1",
  "key2": "2LGS2RdNLiGTQQM1vwfmdHncL2kNzWg167Wf6FqTPiG9n3tVWaYTqxWw3J1ZJJhneS3rFpR2sknmPuCh56Extpys",
  "key3": "3ZwUGWLGP1Pu6p53RZnkSrBGWt1osuqVeV8Tspd8ry5DUxc8NcjxcDUP32SWboEgHPs2WEMZctWB579EgW8StfBJ",
  "key4": "5WyexEcSFXWNDohmSdwnLrfukNNL4eGV6FxknjxvzQV6hnXt1UNjpXsqzmBdWEvggkmhGgUNqfsBfhGhfAtz896a",
  "key5": "31f1wmqdhFXNW2jJpxaPRREAn95w2wF8tktKVRqnhWP7My65ptD3ESdfzW3WX7q6rmgFqzAYqSx4Zk3VXApv6Zun",
  "key6": "2Yeuw6y783qy4TWHragdY4nEwQ4qVpb5n7GRNgXwwY2LqsFWuztfGfA7USThmUBMhTjDbsWTzRDhgRdLLRLS3oE",
  "key7": "3ShyfMfwzzGUH5wSLqt6qeMqRBjGx9cZXjnRgu8pm1jZ8Ae96ZmSCa9ujCKtknkvMDYmtR1xMsHHaimgEW8aqjAm",
  "key8": "aVamDSbPVLsgdbfsGhKh7CUGpDCXMbYxtezatgqGJi4pfZs8PJ4TDQnqYWW9pRTpzRXs9vx4DXVY3WzqthnEXVX",
  "key9": "2pzbdJ6jByV4zEUsUisdh5VBEKL4YdKsAoJdKScNw3pQQcYoKshqdQVjkLcJgvyjJpDaNmUZiZHYahvah8coPZsz",
  "key10": "2R4kBuXdh9eS21b7L4XeVp2aT1Hzwah4LANv2St8shniBt3Nk68GYttWH72fYEVaWSFLpcnRPBJL7k6QNUPH8tHC",
  "key11": "2YtvSJPuUCsP6AWmPY1xAUNCxGUfDtJMmXuHtZZCb4GC5Gc46ae4gpDKWGoqVByGPV71onUKtAcnA3EhvyuH9wW5",
  "key12": "2ZkWs1FT12vwMCAwbeNUne8WLJfNsC4EMkcjU24ZsGsuoYTq4stNkvLWcuxBqRExVzGKkj1eLSV36PNtm84hCGcY",
  "key13": "5rssTvSZAM3QMcxNd8GM1kecQoPbV3jfFBbaPeNpd4JBZdE8JrXQgsvJxFiozMhdMDbczCr3SZLdFZwErk5MkZAM",
  "key14": "4m4E6RcMP8PwBTK9cdYacwyFGEFeiHXqV7B8B4GPinAMattedPzQbnWV14HZKFegZrP9HuQJYKF8CGRmEcosHbfF",
  "key15": "6ZtiAPNgBYqkGEdSzkdTmwjXPwZct5gzvicPBWnhHzjKG3fWgKeDtGtJPZpicYambp4ZMr2NVo3deqWobc1NjJk",
  "key16": "2qGe5zJhs5GvMDmnt6rLxGzXMHvjChV9dKf5Sksjyy1SfkiKVtSJxdbevZmt5mf5AVKNXmtSg7iMxMCxGDs1sVxo",
  "key17": "4nx61QN6Wd3rJwaN9pySP2FtPSt5xC6uZL4YTLRSgnA2iUtxfWwxqwLgnBe3geV4cyiRowRCqVsVWuqGA5WmXTdg",
  "key18": "39a8SKNTUniuyy4EYoG3DzouiZ7jvptecLEMgVzzGazBBv5fR3m18MmTwFtK4ziVGgFjmghHrLhwSqdy3hpTLMtF",
  "key19": "35mr3WZVyuE17XYtzP2xy8BYj8sSQJGx8UEZupb6WdW9VQE8fmNKdoEkrX8tPkeCUVD8itUrPt9YYFRHGHQxezLP",
  "key20": "2ZnrBLBZBhFBS4Mrgtrr2DjwpY21pdXwZvHjtGDGht8wAQ4aspYi1hMvM2tp4tSPoU1mH2U7jaJtExRzLXeWZemr",
  "key21": "3YKo2LLxhzZ1VhcER7E2yKUDpcjLiRBRxqSgg2X6RDL5gsBxDRVjarPLAcGuDyboU5vLbN7GcGbQQFPDXCWCfEVN",
  "key22": "3ENzNd5QVCPmSyRp8rW6TdrEvvxeXG1AFxD3BGevhfCLNS1pHUWJdMmTdz7eueoVqLmcBx95tKSQrtTAojxCwUY7",
  "key23": "2jbjv9ULA2qedhsZWXz96UN9kmrx8dcYeXafxCK3rLxFhAMqNww31ELJDgRimDLKT1BRyGGqMyFZUKUfhbrBgq68",
  "key24": "JSvtYe3nScSX8C5V3Y44cAav7AVZ67K5nwnsiysMVhvEYnSMBseW2Nv3FFswR8Qh6PKLmXt7WpRn9Uh8e7zc8x3",
  "key25": "5Exc58uu5Z7aSyrHQBBKZweCjuAkj8nuz7iEncRVcssWGqep6mkcuADE5R7wxVyV7BegqWEtUDtMifDH1zrQcbgf",
  "key26": "3Nm8o2kn79TVLWQLq89Zk9soXEQoRpZdM3gfD99pTDDmpFqKot8fHMUciVCWGiPvMyuKbRX92yEvX8VCE1ifZ2QT",
  "key27": "4Mjai89an5yfmmDmr3pukkozBZGQMfjzf8F71W5JysmnzDQmzVsTY4g7ubRZQJYR9DghoTVDX5xgGBsxKTmpXuPQ",
  "key28": "zDnNAtXJ1rjZhFqszUW4ZUHBhVVGFkYMLMrDPrdtD8ZAtstZ3YPHZVis8nxmKHPLUvEqRcjzbnHt4YCR2U2Wp1Z",
  "key29": "3MqLSneZVCeBAzrpzZhv3MF9yBfZPBvVSrqTQTpTugFHvyggopPx21fM63pZ7LfpPUsmosszfYSgmBhGRWFtb8YA",
  "key30": "2dydBACFjPbt2a56tAZNZ1VWz6GrodYseg9zsB4uBMv13dGg3MNbzssoS5LGn9TtFFTykvvCaz7aqH8MYcaPZS45",
  "key31": "23d3JfRe35z4RmEuDoieGU8wWKGoL7yJ62Kfcj2oAiZg4PVUxkqqZueEPzifj4hAfhCZGyRsnMFM6gLB8mz4gLvA",
  "key32": "3wbvohbgTRDkLSDFLceoda5PrEFFFSmWBzPC4pK4ecmJWmuon1B2PSbuKmAMiHHCrJS5S5GVJ1wzVimJ4kvp5nGw",
  "key33": "5ze2v3RQzdZN2eeCrqzpfgu6vMPYXXr38728xCPGATKxyx77jMmyu2uMYRmzbDgXrffCTa293NrhTeRUfiRrJ9HT",
  "key34": "38iDAXiDfj4nVETtrG3Z4DdU6zmkzjZrxABeT8Mr1p7dSTANXpkD4gbBgfSidNS2EweoHPswY4DzVKDHaDDcyoVt",
  "key35": "61gzrCqZi2thqcQ6Uf56C1CTgynFq9LNQ5qsTkmeUw2CkbWnAB3S6ANAKcM7DhjbB16yRiEqF5pSRsAhDzaSst6h",
  "key36": "fqjmi2nYW9ujrvHHJcWre2TKp4BR8EsXZxJ4mYMbEsSYMX2xv2F7LTsNeLzxyUgJs92wpsN6xUHf6G8DDgnQti8",
  "key37": "SA8uGYztFKCrLhUXptUkEcxUwCo7YPEZ5FG2pTQA1iSoX8GUAexDnTAvgL7XyqRvE84m47mJWeJGnj47rBihnYm",
  "key38": "2u71oCsatd9gTCby6qe36UvY7S8YEbKXQ7hF12ge9v1yZmieE7AZuiNm2sVm11FLs2D42uihBundcsEAMVrMvuVr",
  "key39": "5q7yvwF1B1SKfGeX7BeYVHumkbxf1hkJ1jaKzifqMRTHm8xhEn6jTw8uLAr3vZgc75mpvjZoYH1s3pAGB4ZYJ1QQ",
  "key40": "WydCV7UmJpY4DvKwZn5masPYyNN9YoyiP8ojBLGmQnSdVJDegSGNoUztfd4VpJHWLScrnytPXUDz1sfcQNvqPYh",
  "key41": "44CVYPLYdJ2w6LRkRPCNEMZwRLrheX55bMrM1AWSxJukjgkKndmPdLhG6pKBrp7QfpESapdm9JcurpNmPdhTouGP",
  "key42": "29Wmz7A4nxNVC5KtMwPna4dsvTt3mTnDzXk2vd8BbdMtKerpa5yNgDgbDC3wXAfArxgtbMNXZcxJN63KogKt1o8F",
  "key43": "yd9JbvbyQbWowwmp6XTGy1PtJSF58VAR9L4a6jzdrvk4iTNFKprRXvMhChENfEbL25b4DBc4ehJuc1fs9tKGBBi",
  "key44": "uwcKe9gQxD7y6rWRzR85u6G42vu5QnNqpykf3dv2ssUZADKL7eDCFvgCTSKCqMvcvByDAGUBj9F2dWgLPWUKimE",
  "key45": "3dmi3Esp5SWqore799eT4e9AR9vWyKm9jvTosoFHNRzW7HrS9VAtVJ3qGhdxPG3vE71Zs68A2SzyrtfDmysjCuWA",
  "key46": "4yr8Z6CDBtazf1hVPDo1acE4qN1hcEmPadLYuk9vhV1FxiGuZLHgNzmXSJUEmzpoopjS9tZRRCadcf5cySkLTqJ5",
  "key47": "3c3k33euUpVQZ61NaqJVdrgAcLVonosudGrVY63Rn67H6xm8DRujMCqe6MZWfThpgrcK55ReUJXo6prAqgQW9PzE"
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
