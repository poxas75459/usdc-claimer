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
    "2Hqh8P4tZikXeu43SFGfeyzBC3LNkZPZKJtMiExQ9DNQRHvmJHTugtcbqDftuVMPe9JofJvrstt6oVueWm2vh7Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPW2UY1hzDzujhn1s6E5LycPxQcd8M2C7KbyiuGJXdJM5pY8RjMGpxXWxrGnSmsw9wuSfz2EomQ53aH15d2dpLh",
  "key1": "bNm3h2n7fVXvQDPp92RVi4X68yrFYqMFn8m9ANh3R59kDWtWgvvyVSZhoPD8PVjiQKenSUo4HcBgkj6eLAT9Wsq",
  "key2": "35byK3HT3jMVPWd6XhrYAyXP1ffPWUc1kH4g1HAJcwxGLurSDktytsNYZxcWz26Xx4wtJnXbpxu4VuHmbQ3rW28V",
  "key3": "38UggmnShKbdiaqvwskqfb1Z7Kmuu9uEtLqE42CdT1s2Rg9UyCs6tLK6HmJaQNhBBk4ZssAYS2ciu5co73youE6W",
  "key4": "5UTRzZ13LNUq1d4enDXdP5k9cZ8gyhhogprdHJ2vuk7L3fzp3oigZmAsy8ZH74D4QnA9tjoKQStGyDCMqtzVFKVV",
  "key5": "3r1CVYxTZs97ym7wUWvnamfAJniNuYgbuo8NaePsS9EJpt1WsqjYkG5Ts34ExizxdmvXCgYqZKruufg3eyYMjrNM",
  "key6": "32G5BFnQrcJJ5NZVQxrcD622XR1o1bBdsrtkizYKPSzAoN1jWXWegwY5f6mGbJdLKE2cfvx8ohEWJoN1ccwWF7v3",
  "key7": "2pb6tQiq4MxKBkeJbxrYK716ZLNQWdodX6hrpsRh6tED7amP6rfWJbweAp8StFNMSeu9dQG2BKkcrf6qDfkdfBpA",
  "key8": "4fHLZGWHBFiYGGbsnsa6cKp7t3caGykL9pThPo71wm5MuWuv3hMmgRz89r5S67R6nAJmT4bVSKPYrGRmJJGp4FX6",
  "key9": "325Cg3zBepRwU7TFMTv1U9i9MyfF29z6NeEnMKAxDezmrwnE7VSWcFv1ZBiMfLYzxgprSZkrUdbgMjQemRmS92qM",
  "key10": "4XUXrdoszW7bztFtCua2yMbTQBSYmLK7TUpcSxwEYMWyGgmkaghqqPtY1fLWSpEQe3HSmC5ndzN33wrUYQQWfM4Q",
  "key11": "4LZJuCRw5zPq5zNM6QMmuvAH8SMi48kBZ35DaJ6mErKrRk2Xs8Q1TyPZkiEGDf3CfnyrHUqcTkHGhgZyH1oniuRi",
  "key12": "4qbnB7crWpV9RyEJ4hB46VTsAHJYSZf7nQeT9F3cdBFycccaCNZCaGMgKJ4RU8MwQh65Sjp9QfiSFLQr8sz9wmAt",
  "key13": "ybupgCM8cbrWDKW87dE5XgWqncwGqWzXnvCyMkecJaDdwA3qqXRwtYX4CrJkddf453pjz38w5XisyZHnnvq4hGR",
  "key14": "2aSXRZiUBGqF8ikErts3pqP6aB6Q5AVrRFWjT5QEJJ2m563nMupP4YFChF2DYxocLJjFLAZ2gXzAbisX8pPho8R7",
  "key15": "3KSwPamY85RDWiDSqbRsRShraB3Ljp3vgBMVgLnupvWCgnWcNkbVc8wQBGRqhoSqURXCtAC6mmijexDYoM6nfikT",
  "key16": "5mEukxDStAr5kpADGAPhjLFqinZwAsm5RULTbWwCHin9yCuTwTZAaYQbiSoMns23Gdd6J2JhvNoMDdQxhEwfaNZa",
  "key17": "NYsW31PMYSNivp5anr3mADGj1YEBWbiHYb17CZnzpQEsATjrpPZLBaRbSEHpEKmykQB3gj3D7Za6WG4XKy6PaKo",
  "key18": "5uYbJKtKb3L6UbiCS5nCugKKrgepPdNvyCXyKkjYfrDvckF6pqSwb7sY79mgFtDb6XhK9bvEBeWzGZxFRSPaWzKa",
  "key19": "4B5XcUtjXz4K8XsP3hkV47pbKg9qMWHJuP8uGg6MHT463Bvvk6ikuPJLGcobTTiJ4ksBU77Nvbx13oCUCoFqWAPa",
  "key20": "5iyKwHPuaCEquztWphVZdoC1VRkRyvyCDacDUkwcYNMD9e2CZy9GpASDnEvJCufH8Bf53mdcRmeJjEQYjT3RmCDK",
  "key21": "3ctDsNsuYonZRA1TSNeDRfHWq1QQQ6MzWU5ZoBXZUCEewmAWsC9N5CLEdBwERWt45YrUsdNrPoJ3HB4JetPGjmZe",
  "key22": "21w339azYbfCyUS359XTkxmAwkefSanaFv3LKywnxKJqUj4zcMf8v5GpfYNNvteKajDyCtzcUTT7oNUx1YLSBsKL",
  "key23": "2fE1NgxKAVEmaHu5PorAwEgyQDNQcnNP23YU8ARCJsjH7ZS1M7BsCeyyXMef8CJmKQPr5RYaRyRrAgC7fowW4J5z",
  "key24": "4p5n6GUUWpkZZTNBZiHFow815r68GBcLhEBAFwo1EbT5BsKatgS5Ci8LjSb478MzHzfobdksWqx3WNgbM5Dnz6xh",
  "key25": "hWTpV5VtLUVXZ9JyqEXxFKAtoFzcn3tR4ZtFmo2VqPrixDxi7v9E6E1jUQpHRMGm3KBLQcQ5273WoanQnYNPtcy",
  "key26": "47dArvhY3DKJ76grCrGdvLVjtRcg9h4PFcfpaktpmYVddmbrgQzD77hHi16avFHCX8pQDg7HmV4rVCJ7QsY97uFm",
  "key27": "2dZpWW1BjHP2qvXsde2eFMFyMEzYhnU936p6CZmbmEt1WtAhxruYTTBWyZQxh9P8rAtr8teLn5vZ4xobYn7vz9au",
  "key28": "4QJZyF1hQGg6LHHLoFUpVZp5efqJE2aKtPidBPuC4bAZkMhnA7iv4AAZXtbCzawbabD74FKorTX4KTrcR8dQXpmL",
  "key29": "J1ZsJNYZYb3kyswyGHcaB3CwsWmBep8tcWonyeGmYs4t1d1mPaxiMUemifeGiCgcs17HHZhGya9YxkN4gqkWs8D",
  "key30": "4GQDxFKJNFRVY1NNa5JqrvPK1Utwf8Lg3Sr5X43dJ7mwgxH9Sy3eFhZTV5sKBuaBzDqHUuLuShAuiyfEJsrEKjkK",
  "key31": "pzXKnkyLxiEWAhhNCRqJRSUvevhte8dPD3okiRsxXPUDAgaSq1Zvv9fx1gBNvR3o2NvuU79XM1QSNdxEGqcCXDq",
  "key32": "2U4PGGNVc1FtVP26nZ1N3AXfckAjYeojcGEFwK9KxtaCrYu38oZsDQzXvAVfQjGYVMrSE2oxztMMPof43VjPaRXS",
  "key33": "31sDjpi2fPSALPMC9vGPBA12p9pi3fuxUcwCtCPyoDin1tBDtZXrasT8RyKN94NPdk3RU4xY9YG6WyhSLEWF1Syo",
  "key34": "3Z5Fdetqf9ScjofExG9cuRdssYT58oQB4Wgd3GVZ7yaAmZ64KN2Wo7gZoXqZFe3h1JFtow557AdQCnk17qtzYyUn",
  "key35": "2watCxeoWBPeiGFfKHuLgoqKCxGknnz9KQ9QWk3psCXr9AWQvDAiMdWtJqQJFVVsxyJz4PNo8cJTyUnT7DtTt3Vf",
  "key36": "2vU2QRLtkABYQVGcHm5GLeMxpEXLvkivvxQkH9txNrLhP4nGrzYrBWTyfkWfgEhe8StPc4vBJydgudJBLGMmfMVw",
  "key37": "4hLtbxnUiprQfoTveSoJ46bhENzwxX7zpEeeALFNTjMnfQxi5JnX6J7JkUGxS6kUzJFRXvETxTbTcqzFg8JuM3Jf",
  "key38": "5BC3GxfRQ6AbT4QM9oQVpdJGWnENFWk2mJNsEr5ChkxZesHtHc7fsUydtk8rfqhmmYBpqwxcv1BUrBA6eC54mzeH",
  "key39": "2dUCiQFSmtQdp492jdEMyn11563usgMvJv6AKzMbW253PVSoLCy9VgCbpPRKBKKCEahqjYXogtcgU3ryMYr1Aqkt",
  "key40": "4CfmrNCLu1gXuqWF1YEauJsxZ96QhAqQbBPb3YRxqn2ZngdQNZnsKvyCZNhsrYZH69hCKZYaRTKS3TUMYvtpKkvP",
  "key41": "48d6UG4vhdrWLFxs9FreJAZRYcU8AbWjptHrNEc96BPBrWwp924fiGariEcK9MQH7gC1cUcMBmupVzQCuMeXX6jB",
  "key42": "43gqMdP2fytRneB5xLfnzDTRBidUukvmrYN9BhdGEs4Q6wCXPgpxQuxNfTysz3WDMiqw9Duif2KR9x47ZnHA2A8o",
  "key43": "3G3fdsSfRDQCJJBa4oEoxnttLMrUeXUHYb3hj8JyxXitj33CJeAkFLu9sXBMyLcUUxiTKyd2jNGAjcU3N3nvcT9V",
  "key44": "4nWUGgonzGCDNy3hYsXtwB6m7L9Vaiwh2PFNG2zHu1DzQqxRCjTFxkPDg7Rvi3mm2DRaxGyKariSFToDSDAgwVyy",
  "key45": "4qxtgqkETeEC1eatwXUW8Y7DQRrK7YEQzShpS2W8FnbBZdnKzxidJHncF62xvm69epmRZcuLsZdFy28TK9VQHWmE",
  "key46": "2ViUD1fWV6odvskuPJYPsTdF5j2SEaAfmDkpme5csiT9NUbzmE1dt2VH4h1HjogsW1m5Rpzdo8qMK9iN6TH47Hg2",
  "key47": "4Mdyj8WGVP2r2y5ANZziVqCb78yQf2WWKKy8DbtVihxkbDNTN8boX4wNmRSN1hNo95xNdjSqEJMmiWfngbCdVTMA",
  "key48": "4oqEhr3F6VcMGmBvzh3aFNePm3cD69Sk2Q768bG2kfJrj29ZkCmsCsjxhwE7nYGzupqRsLisbBXrVcf9vNDtjJDV"
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
