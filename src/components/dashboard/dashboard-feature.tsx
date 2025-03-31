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
    "EeU54eqrT6vGpTMHiTsDWywVMogDEpfhXYDAUZzatNrRJRX4srn46g6QmMbXbJfGsHdaJccBZQm5cYtfioMHnR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F64C1BxNPk1gtHKLf9SvMpwVVcGhDkYN4574frFEjHD2rmjSRUGsBdfgUDEDy3vn6nGgYicf6VsWdv85eTeTvi3",
  "key1": "3LdRCEpe1dN9oBnYYTSdjGcXLzfTF3xXMVBuT3SVHqRYasXg88aoA6w664YMQDJY132DhXmr2JwdpW2Ykjt1ZMXy",
  "key2": "yacvj4J9npY4xc43HpP7rLaBdzbyzeroQBj6mtFk1miqfn8w2W88zHJWBxajs87LtQ9vyYJZkAmiyemgGnb1xvE",
  "key3": "akrdke8hs6s4nes3JqaRQWtxRPaHiZ7SiWT8ReEvAfpUifnX3e29dRi4XvzRuEC7bymH4wfAo7eWJ6CuQeaEooZ",
  "key4": "2TFipNFfzY8gtK2yzDuMxrvZdx9e4Jg8q64VscFj6WQcVPmDct7umCyBpsQ7e3qosiCvDQqyydLyx8zriCnhM9jg",
  "key5": "5hmLWo7itxiLg9hUd13Kw2j2acB5TqrgKEqX4LgfMnvMKGeTbLWvshCqsfPzA3YEb5xyzjU15MzL1Vmuv5ZeAwNE",
  "key6": "3uMZT2wxpgw42Zy8MNGqwZSRBpEMmkiycMv8zsx4c9suumYQ8NqgUc5AD8jeiFh8fDt5nMqSkvov4VYT5fjSbLL6",
  "key7": "3ous1Ytw7o3CXuEmNNGnZu7VUXy1t2v7dR6wCMafdMn9ryaRQ5eLcqwpeBanrkL1C5q2pCu2xJTkjqiX4UQvQTMB",
  "key8": "28DFisGkGWkQ2ggPDG9JcoDxN84s3VAJc4F3x1i2kaMG5JJxPexku9E2hAYMx95Nvn2osuMdCgTZdBX6BiNKc9PN",
  "key9": "3LjQgyHqREkR4zn4Ak9Xvf4ZA6NToDhmYTZoU2m928jKCSs4LXJ7gY4qDcRrFfqBKJz46xhikBNyLzsnHSuipfCp",
  "key10": "ZTVz3zuR34vjTARHfbV2wJNAbEM9mTkdXoQQMHxMakDvxbWPiwkE3FRLrsKvdmmHdE3M2dYgzRmW1KMwGqehb5p",
  "key11": "56QXcTL9kGVmtqQyt8BtUe322smGJpwEprSskwrUe9hjQWLgzj2CdS3MDAYzVZN4Pom8jp74ejYZFtHBSwapRDfU",
  "key12": "53pvCh5wuuU9KyJA9QDi8M7wq5xABoHdxSrsKJBJksbZq213QBzZC6UyMRXWcfnBUc8Ts98nYB25rhAFQG4esnZs",
  "key13": "2vqQjbZMWzY8yrzckFTNyjc1XJ6RJHEspagvnKCouzomJwvLkTPg7Fm5bxkzUUcBZx3BN6o65d6SHgiqiKDbMM9g",
  "key14": "53zsdet34tYDhXEAXihpLDB2etUPf7D1PWsGY9v8AJdUps4dM9p8SDjheHRz7bfgMcUsyPzgK7oKBv4MyoaEbf3A",
  "key15": "4qqpmCeiPbGTFgCYZiihyEfxqfM9YJ61X1TiWxuoMnMavRjEFYTAi3SbPjxq4cZ8QXsrZYRcmS1ZJyjCf9pKewuJ",
  "key16": "5HXQTBgYepxGwbqsVxDPkrRJMwLJ31xYshtMgSKfkBCQbSV9Vy8oxRZDiaQd7BLVuBhCg4ChyDf9qtTKKk31Kqom",
  "key17": "KdYCeLkqv2DrteZrcCrH7kLZ1SGMhYDMRRkANwUuQd6GjEGzpyuES5KydVDrwL9DTcuBmandY4Qb6itSz88wvp8",
  "key18": "33bA8RAHLi8UQokKxg9w4wrzxotVkCBtUDZTHD9cwyteLfb9JxPx8NfkxNGitAQCAVi5T8jGLRMCwaZcT4ZBvdGv",
  "key19": "22B3pvuyU4ogUrhjQJYKia9LHLndRuWy2vqDMyk6bcavBLX3BDafJrF4xSqfLcWifMQxtiLBxLWtY7o4nNgAPJci",
  "key20": "4xSsKMFQE7ckzWtPWtWXbH41eSyVLQuk5MELrPnNZu7rmLE5r4odezMrjQgin72uLEJH4EULC2sVM1HdrqBWWffJ",
  "key21": "dX5RUhLZQRRESJ3KyJaCjK3d2DukW1FqSCaDiFTxr93yv1G43gCVBEf3t4psveJAbzQXBiSqWJTMgUaCjmYFfPF",
  "key22": "3yFuRm5bSsfeZ3UBzqAeTqBJb9DnLeXtgozxTh6DnNGHiK3kVBNT5Fgrzun8WiXC7T6ew52YtJnSARApq333VjZu",
  "key23": "23okcHdvhF5Mt2LRY68ofxfAr4meo6DztT3NuVTjugYJVfNhkUbEJLYHNnamN6yrb8EdhfcYP34knMut1oEyvgow",
  "key24": "ivMAA2T77EjAEoyM9LoHta7GmKheSGT6vsphAjPsWpTR4VSdMHi3vkyhvS4eYHuZWsojwsK7Z8skdvARAurEYVn",
  "key25": "3cg5nw4pek14R9FCRoak5ZCZEivDXWUTZRnxCmpLAYUadCidft9uFTLDBKEe8SQBQ1kYPS9gQDzaB7YL3ghmUa6s",
  "key26": "3FJqRMUESqsmvASE9cT1xYqVAMaEmKLXGzfkXGP72PZXKe1va5h2NPKMih8wkzWdFRQMFKLFNoTrWLEZK9xvwnYd",
  "key27": "TdsbHnLMEVdouG1mcKfuSBQrT8X9WnpsixRxiDc1Hpd28Xmz1nJAMBWRq6BBmPoSRzGbqJe1Pux3pWnqkhy7Dwq",
  "key28": "3YdLyBuXA2FAgKwk5cUZpakeVaCWTWBPQF1cuypBPTPv53FUTR684pKqJFWWLr6SuScBNBge45NobR11y8qpN42k",
  "key29": "66XDXcdZmMnw6z8ggBko5bhjYejM19PfageUwkFtxu7bqbP7z9Vd1sXjvaTDnx74SUmU4FuSemjzjm6MZqzqQjE4",
  "key30": "4BrEc6TEyZaNJt4NUuXrLoriGjCxrLmwLszK98McqbudvKPq4B4mHJmBdW3dZCBNqLPGkoJK2HJcEHcHvPuCzSiY",
  "key31": "5BWYrNfnJQrFEyGYhjmXYKaUnc7hdALwWsbAHVp4tnuwg7RW85RNxv7V4aBoVeC34st7T6oD4JPFUKa8P2BptRKt",
  "key32": "2vT2oG3PmRyrTKfP5QGDHRUmWJmatDxrSGykXoRdffMvqtUW9rXnNmCBW3v65nhLv6qJXqjrK9xa8b96gqEBmkUz",
  "key33": "55kqmuYvmrEotGBdGktU7VKaXc2V2KpDg6GiTkf5auCqEWbgwaF22JiZYoynFmXRBksTDDTUsfWp6AScEk9hpNv7",
  "key34": "4s1t93ByNU7wfdzMEPTt3dYi1AhH231kdHkuAei4poy3sdM8cXERrDrZmuRiMKGNziK5GrRJQuZTE17KRCa8wLgT",
  "key35": "gTWpzuf4vpwAdJMTC9pTXUB1EoCNmA8Q9F1qT4TS4josoP6ZK2wXKybRmqSP1Xbx6xQ1g4qA6Wrq5dFaCZZwzty",
  "key36": "KZv3CVcsVyDCRaBgeQoHZRjkNPm9cYrp18Kb2cd67D8A1nLzfxLC7WxDvxq5uTootzMJit8yGt5KsjtBDDuSii6",
  "key37": "3mpBU4esAQpygLi3ndcsM27ZHt4FnBvni5KWDv9mJPojtMkumT4pnUauxcDMKHJWZ9M1vv4vRmAdxKyYzDqiwfCC",
  "key38": "YVWmHzSP4mM5KFE7Zqa5CYeMveSm2PLGboDSPPkkBQxi5p7rRTxodRs8QmX9pU2ZYhmD3oeiBgq1VV41p6FjKQf",
  "key39": "3omW7uuCt2yXeEKmgYjioKkL9Rpdu3GjkNJpKrh33CDTRrk6r5SZNkj5LjxB5JZgExiWQPdGksp7Siyq87SHMv9M",
  "key40": "2ury6MGj1ZJKcUJDK6nBFeTVUoZ2udsAhZQbpKiTxsw5kTUd1YjGcpACCK3fqwuvvkHNuhRHRiDttahHVkMJL2Ns",
  "key41": "5k26z6KhkfVQWfi3wcMsKocus5ajLke5YaN4Etnq5cBsn13XjqzSJp44Mkx32VRSGAwSwgwnTNdmqpzcNgefiTew",
  "key42": "49JQFKWhSpMkhEAGP6WRG9kUcnXrs3SDfZj2DsMy6RqLtnQTsxoXqqeRdGKJ8ayNXSijAjFeJNb7xuGyuWAamzS3",
  "key43": "5tufo1h3DQN12V64FvM3vrVkNf3yxe128v14W5sbUuaugFWraRjjEi7dErZMEV3aX5EVdDBhAQj9DsfU8JYnhmhr",
  "key44": "2GEQ23EnNzdPtX1mfJhm9Bonzif8b2h19Du4xaAZCMhVb2dNfskE5unFuNYtbjYYoZKY3FiqEaq3q7rB9Zh86wuM"
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
