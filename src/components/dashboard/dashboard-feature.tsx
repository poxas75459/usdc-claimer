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
    "3s3jtyEWDxvnrBrCE3X6B2XySYCcFZUCUrcyBSHrrZu4Rw3Encqm3ivH1TP7W2U8pMtWcN9CwRzxU94JPZ2EXsFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaLqHQJCGt3FnTsuxhZgQ4KcsDdLXvmiuLeEd9nGWo6Puy2NmJsVB1S8eLev7bYFf6JMYaz3fQg5Wbd7CqJ3G6b",
  "key1": "5QiRqdq35PqkjAWet9Vj7eaw4Q5Jj77VjYPpEr6SJUu26x6zkgQSBZBza8CppW96ZBhwY6TW7Tvc5titmN2nVHjY",
  "key2": "2TBiF4hzK8D6JgSQz2FRA8cfJskus3Bag9CciSpPjFpinVRqCLWCBaUWNeoTdvucztMiXcKB4HQeagSCXLTo6G9R",
  "key3": "31AXALA8oKWX7YZGiqkoU3cFHjBsJACN72yhGCgiSrfT6GnxwPC49nHUHxyhjeS4FWFat6KYzfzEThgrKQGAVZD3",
  "key4": "8zbJdacPhH7pQNK4kiFPfZE5z1iGQKaW3fGx2phHChApnihtsLVFXcuV8Efzqf1U8K1y6d5nYE75xgkp5L76VVJ",
  "key5": "ZbHMoK3b9U48RytbJipLsbA6hzH3243oTzXHPQ74vR8VZvHNAfUqFeZYhBxtgmuoV1V2f9FFa5CiTFsyqETugWv",
  "key6": "5BcXJuVyfqH1btUFZ2jNZouN4HyKqxzpd99iW9fkqvCE316XCJiRCVqNmQ8bvnbdPoyqRbPMbQ5NeQuDuM1AHkeL",
  "key7": "3BT4fkNA7MXvRMpTEmhXDQQ39YryLjxzsP6K1iYYfNWN6DByqpjQJZZ2DjahBdRewJLCZKWcNSBQJNUwQdqsrYfJ",
  "key8": "5kYLKa1jFrPu543guQoBPSN9iBVmwS4S31D5aMZRzfkzZKBYs9PsFKGZwsNBfaJYQNz8rWSaSTfkj3BZJXCSz2RJ",
  "key9": "4wFob7TAaNaKXPMtiESKuNY1fo8Kh1XCz4nyvaoa6RfdozCwq13wWZQJv4TPKRkuNF3cwJhqd7r4PtfxUoYeZoJa",
  "key10": "6186zJNwW91xgNQJ4bAftcZqt3s6y8JwziqEAx1TFFasuz37yeiMz3zCVUgVgqNYRKZbm6KRbS45q88H6fRKth1M",
  "key11": "2qQquJHq27X8k6dKxmv1CSZy1Xdjsy49dt7rN3BVHMdZ6c7HM9kjgPSpXqn4P6kbJRrFiFi2cvdRxVxhY5q9JHfF",
  "key12": "5aBguvBA12DkyxecXKfKaw5CgYP1bgsKww1fYjwsFU6ynCoKVGsCLLNrhNbMEt1Hjt1tJeFq7Q28oRWLsSsV4TD8",
  "key13": "WfF5h7nQTD2FjMqSkwjMNurV3mfZ2N7PQMKh6hGrXXtDLByQAxMHHX36gmCBPAC1NMN5dPtBoqPyVVKncso4CLe",
  "key14": "5nBrA3Sx7PupKXAUcaS14ribocgP74un1VmNbxiRfbW57WfaQFrWCUw2USL2Ns2ktiCto71gnhWB9u3oPXGWGe8X",
  "key15": "CFwsqCXoWuStnATWDkCHd61g2LAuj3NBDMmnx1Zcw1dHQ2qoDHQXDtJtqQBCXKM9ufrZ88HTAGeKf251qetq3Yk",
  "key16": "4Aqh7wdbvpjFxsEGDEk5jo24trp6zYGhq83vkLCmMQhdYjaDHCPXF1eLo3DC5wHsjgxj4M5dhaj8YUwEWbRSEknE",
  "key17": "5nP8PAwsyF8URBGpSqNThX4KHsvJakkgNUTaoyB5WCER28DRcctuBXzxGiuT4hVqmxCCvR7tehMqLGKMaXtK1We9",
  "key18": "viPrWB3tQqESWqofCQqawHGRYEqMw9PXaptQdTAJD7gjM8FUrhUoxmCNWPaNcZqeGyjRsVHFdB7jUjrM7nMHRHV",
  "key19": "3ctGZRjUahpPe1kBERTcjQtxscSvN684ggaSMdLetef6xjvBY85e5woDEU22nTNbp5LRbF2bxdrpR6Q9BNa7wJ4X",
  "key20": "2ivgdHsVCdAS2YiZS7dHXKkuhVPvovKcC15m9n2e6wL2WH4Qu9jN4GS6Brx4aGG4yrNGxVMWRbYXiTgmQzGxsgYU",
  "key21": "5yoHH8c4qPsNFe5fSR1ugNs5vng6jGf3hEkESGaP3RmLUpmjawU9pM3Ds8teodgJc7NNsRkeMfYdHx1z3tMd13AF",
  "key22": "2CHC4f4AyBCkwt23Gxt5bnpANk1j7AGpaydXc6NBPyddJbzDexg73FEpuGoVDoXsQipWSxtGJeP7NgjnWaGLKsPK",
  "key23": "99YktLoKw8h2V5UbmZN6DQNb4GbMUqAgu5vH4vJVSz1VQxEwFa5DPCP3ySaEEDtd6usPP1XdiZ6df3wxm5DTWf8",
  "key24": "48jgBXtN9xPSfDDWpFFdA3BGivmJRDzh4e3chL4v15FawXsHzsahjDcZMrh44VbdHSXHmMbDZEBfWGzeABhBMGne",
  "key25": "4p49qZcU7bBjnX8ehR6uu5RMsttJUWssSpBjw5zJ5X2ho1xSBbY4tkzZ8vo89itEfXxYAw2gUjruPiFh7SsFY9qx",
  "key26": "2fJ1JsiEsK1UxbRDrR5cekrWM7r5z2J6Ex2YBvAt1MHWMBibU8fkrGxCHvLhr5zkjdQJmMnDVFSMcq1GfzPmXqYc",
  "key27": "VpRpkUXUkU32EBmssqhGmerweucYzfquVGihPCgn5Fkonity43ohwLbNaxXAPRiHEaL8rMepSgakEyU79C3rDop",
  "key28": "3mPY6bH5szWMjfHXYNnLAR2Q1MQHa8D44r14ygyntHds4tLp7oYEHGNajaR2egjg8ZqUsT29HHTdyx99hP3oMHui",
  "key29": "5HR39d6M56ovnVrrtrpkvgUfteyqDnLGWDCYnKh1kHQ2qqScERabFdfcWiE1WUyk86eYKt64DAEGv7b2dxgnoaEE",
  "key30": "5nBujnqLH9b52zEQTgWXZzGS23u9AC578iaTAvtHEXZJLjz4uuKPuHgHisgtfaWX4T588ScT91qXUZVFSxRtViqk",
  "key31": "3NUFesRnjFTcAtJ3HiGVNmSVN1b63iFNu6gR8vcRyc7RsKC6iLjuETrU3b2f8GEV4aQuBvyt1eG2NL6HF99UBEnw",
  "key32": "2jNKEoUQUbAKybLEPqtfCMyrV11uSYqPPkE3eBvUyKmM5a8Qs3E1ueTCXy8FN9wYyAM3Xqu7H62NFPkfb9ueUfiW",
  "key33": "rvZAG7v4PFzSbot92jz5fNdJrxJJvNXkS4BbYDc8oGJ6QxYK967KjWGM5E8WFbGvFoX2f1UkBcHTzhVwniKr43C",
  "key34": "THvEj7VTG4ZyynRzMjTjdrFdxJv6wJ5zDosR1wpM84XEWdQ5hnTjWv5N2bXzneAYqsSrdCMiou2pu95HxPZ64Uc",
  "key35": "4ub2gA69MjZnHsr4X4AmxQP93CZVuBXiDmVEkyAKDjv9NXVEHRxQeDwVJ31uzXnp2YC3pDyc8KBxuB5PVQNhpUw9",
  "key36": "3SfVFf4svcyJ8dCMSGSEMPxAH14LDXk1LboVYsq21vtVGHybaXrkauVAGZcfoLE1czM3hHuSXtPe7TyigXN4TQuv",
  "key37": "3dNb5Vf4BEzpueB7GcGmTJDu7fMwcSnuasBZRxNTvSj5NkQ1h21kVbkVcioZuuUi4UGk3H1tYrKPKouMqYPsNS2C",
  "key38": "4HoKz24BX4Wsmcz64JaXesTD9uqyZwVJzgzyNbNGgihfDXJZZS2XsCtj5oCD4Mn8KY6a7dfLdkjHKn8rA85XjU1L",
  "key39": "4mbifmusLNd63D139tqCADyi2Vi5itFgw8NkjFPwr2cmfVsNJCXT1x4CXYu96r6vehTT4CYWq9PXfGadLZLDbo5Q",
  "key40": "4iHxpY6D9gFHR9QjZgZ9ULUFnbbb5rJZFuK8jbCk3FYduGbdTRv5FFdTnRdJLub4and7m5MLv1oDMnKSTnFm525F",
  "key41": "5Yy9rSm2NLwhqU1YZRrQeWFBbsUtd9T1xC3qwSx34Q256BMuQrMBcL3LSkrBdJSxYt9w2c1kAA1ZDSEr5d3AwiRQ",
  "key42": "2igDAAXCHJY4Lxr3UMLqVmXjRrM68SZmgFcBqvBJvqgHoU5qnbKKL9u47viD6KuWY8tTzh8RiE3EKD6kvzGVdbhs"
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
