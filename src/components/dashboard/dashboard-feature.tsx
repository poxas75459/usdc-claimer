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
    "4NyjLqz8kFiXzNvjCSQ6CXt77JC51sLTiJhAtSen8AP8Fso9jRPrLXgBMUfLnEb7D34uDUUNru1gCsHrSVe547Mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcu6Rx9eqyrb5GToDc5s9t5oibJQpXAfr5GLbNWp9KPKpXHfKjuCakPZLCryKkaPdwf8etersd61NJyGhV9WyB2",
  "key1": "2TASaSHEv1weY11UDxEAtj88dYAp49zNXTDVwouGmXKH54ZnYpXC15nGwUgv7WAzhamrDp2w9QjFyvPLquCQgbv7",
  "key2": "3jAT8XQLoamQ9poJQbsPtMRfLeumio5rnSoHw9271F3zzPtrduxB5zJmJPuwpKSGtZzAGwM7KRVcoH89b6iXUZDe",
  "key3": "28FMjb932mJzkNDAB3n6TEd4uDmecqAc3LgdF142AuMBEDnk4Evge9Kw3GUDdRuY213nXeHD8wZTy481LGSAmxke",
  "key4": "2FiLipybpujGFMpkFvf9W4twEbVfiUC4H8mZttwL3LPnkoePMRftvdKbzDTmjK5sTuQUfHB4L4s6zvSbH4ocFo3j",
  "key5": "2ESyXeurPnspsMWxuxnp6ggBDgftwpnccV74NX4qHVQZtRVKjhVifK3B2iPW9CsmyNHDhrW2okhss3fCx9aESjPj",
  "key6": "4vGZEoaZXr9WuMcrGeuHcUSy4JfQB1sxQGCq4FfyNDXJvSycTT27SUkyKsRkSoC2bALuq8tX41Xp9XvY8rxSJN7M",
  "key7": "2Gu12C9LnvM1L9vXAqPjJDAwJBZPQdXFSrv4Ui65g9RVqYEgPvwsjQ5KtT5Go2A1QRX77tndDMMnetqHcWBmKHZN",
  "key8": "39zHWV583h25zqfuYCfXQxHssKZhYyWd9k9fZGAPhJWrDrPELuCugE7KYU58rMcNECa6ch4sqx2Qqp2XRNhEHTdp",
  "key9": "5fFGTbYkJdK8TDtZdZpT3uKpe3A6uUshcdUkjZTonbgd8535DmkG3nD23JpkNnqcPMM2nLY4xVL6Rz1cK5wgZC6U",
  "key10": "2tCBL8Xxsh2ByzvmkHnSJaBcc66LEC1jVxsidJLsmskZXLKFLxGnRZQcWhbymhL4p5B23R7mG7yhczR6oem62NhC",
  "key11": "32Jighy38GCwErtdfgyxQBCJsQRebyDxvtSQPH4sXGJyBB29g3WNGs4GaVHmrrQoqJhr4MT5HUm2aN5ZurbzkhHS",
  "key12": "36DSLZHYEty3nDrttCMD47TuYdyXFppBpCN8wersD9iC3q4xAEmfm6TcepVvAd2xW19EkuSBwUy8d5MCYa11SBxf",
  "key13": "Cbi81s3FUBByuzDmeSJK4vGXKxGwMdmDfn5jXgoBnHC8oT4BsmaFVHPen1vnzeqeG8CSLYBmZ3LvDVWexaKSyHz",
  "key14": "5w8a4XMT7GZqWxwye8v3Ubwsk2YEEvREPJknmKj6YxBFkLnng5ytFxR8gJMYFaoQFcHW5CkvFuAfWUGTieFSJokv",
  "key15": "3CXmTnstzxXVZNj5DbtfwsdjJp6Q8Ts1dm7ZhNk3J6ygQwZ3WagVJ5kBDaLfF7QTcNcNmDnA2xSvt3dzuDPCy75q",
  "key16": "4wgVJUzAX8hiF7k91fDM47HndizDJGbBkFA1eRBAPkhWZTqCEdCoskD5jWmh1AgmsSQzygFci2HEebUfGkEZEAFz",
  "key17": "3gpSjcQaGV9GfWjpNfhApUif16fEMN6q8c4z9VGSePwrA8CXgw3ER8Kvw6PAqER4SyC54xcriNEHKC15xLWUGwtS",
  "key18": "67Msk6r7icUeuBtaWjoBjuz1Y4vvLQZKftDV5PjgqTnbefd9cjydgybJxBvY5YCs4Yi6iXigmg2tQxMcTCQBo6Wv",
  "key19": "9mWniU2eyx219JLLCsGk4azxxMMBoYLG3Jj5w3sR8dpBQS1u1eRPKwxqw1iP65M15Za84usMv7URbvzVNmVQset",
  "key20": "3ommBWNvgvSEcDeSsJPhJZncCSjSxk2yUjtpnNWEsJiaCMzRfwVr3ddkdZo82FKJ3bNJRDsTZzAX9nX2Z9ERw8E3",
  "key21": "4iS685cmWaofP7PqfsghDK45bob3bxs7u9z2Jn71zrijg8BmSffhe29hB1tnDYqXpqBS1V36DrsrPDNnygH8i33b",
  "key22": "23eTYG9PbyxM9MxF43pVzroyAvT19Nyoqg8acrM9nZo9zu2Hb7uisogBepRRJUCc11cjNLKpptm4s56UfpHbWvJq",
  "key23": "7MvjeQBv1eGC7atZJqaeQtwXidnD7PEB3xGirPhkJg6JnehPYMgkkg4QEmHfqxdSqv5ydEexpmUBqkdGdHpGr88",
  "key24": "3p5bBf1zbeE8gnQPACk9PGNMRekaZhN5CWrSKmkC2RVbjsXaR8dkfNZitsCYgWeJaf4BY3BUQeuuoNx5L1wCHMUx",
  "key25": "3PPSynK23JLLiue1K6kcrnYsohNkRCqSoSdPzLSALtAo9F6CffXw8XM4eTsoReijTi6PPRLrCgtivMzaejxLyHyL",
  "key26": "5sk3uDXwuXpSEKk5g1NBGMkq7ZD5bNs6ZunWdfiykyTRUzAoSaUdgugkDedZ4d7oypU6fPGh3yPW8QUwahXEVs59",
  "key27": "eiJbwhHnjimnYkYafqcrhiHEespNxiQgj2edvhqu8DPP1Dbz5NFZAc1HN3oNMAmyVaYefkFSfTNFZnTqgDxCQsp",
  "key28": "PA6tVTm4Er1CMGsMFiJPXHECCaG5GWLQ1speGQ7rx2z7ATyrz6Kvc5wyUoBFwyBYkaXvsUqNke4VrTx9KuZbjpj",
  "key29": "5Tf2SeN3ihmK3MxwYMvyxnycS5D9uS7sQcFGzrQ6nKBjKgsVnNhzeiLQSCrM49LyGh2aXuXzxT992Fv6t42tBBfw",
  "key30": "3tP4Xuu8BcrENRU9dKhUFtqgFvDxMYioxwZNAPXENoBJzVE5dsUZEp366tv9NwTNN6TdZswD5zrT2q3d1hhcCUgv",
  "key31": "5gCgF6jFL45SpgJnbwi1dh1wxfxLVaR4L6jdYHcUykZj7vJoBAtLCwakF1Yda5wr1K3z3zAjhbaXQoNaSXptMbrx",
  "key32": "61ojEkksGv3NEGQjVUfc7oMkSjKpHanX6XupLrafkgUiA7gTYKkt67MVHiKz5yZB8EKsYWq8RH2dQmX1pkb3nbJH",
  "key33": "4fhrd6ZPPjfHoN9Eq2LbTPHUanBnHjDAHDaAJp3yZVoxMxF7G7gHcvK92oofwQfZ3iCbSkYjynLebvJUaFTeiBM2",
  "key34": "3qZT5SLt5sam3y5Ntz9zgPrnnXTitmrHA3pKJB1TRJo4mvunUXRptWP4UroqSPT5bSS5yckcUPurdaSxvFWfX7oA",
  "key35": "3MbKPZFKHeaVbVXZ1QDYVQ9JAD9VSiaPmCeHofQwDyF4SZufFDMZjTWoFLrFXXXtzkZSR5SQBzS9pwKqEoj3j1Wn",
  "key36": "23mhfgUGyMPmJvBqasbtZRm14vNtzCd1NCnGVshYDwUipQk3ytfTsrd2Rb5oqKUgy9QiSxGK7dWobs1B27fn9txk",
  "key37": "2db9NekKFRo7hsvHBtFvMmyPoG4rbK98yJ2TT61KL1fK8uK8adboYs5uXtChGgP8qdt9szkBWWTgGh2Mc3THtP8J",
  "key38": "2eduMJc6tuZPVLxxtKfmj6tR8bvNsKq3RW37oL5b55vMPD6wuoNzj6BEVV6Fvht1dLgq1ZR9VBRWnyEWnsnMarH3",
  "key39": "4uyVtD92cU9f33XsbszCvUhZtrtPP4npDDKEv3DubKoG53E4RsX5YVm1q4oiWyi9VvBsDQbAXLoXDfp7Vfe7FSxu",
  "key40": "2aJ41LBS4W7iL4383pcpp28qkCQXw2YB55azMRtsawD6oRkY14KXykT3vfNvTv1t7ETfs6B2184YYfs4hWmCdt9W",
  "key41": "FQPARjhjUpuz1RH6ajXwEydhqwH6dP6e27gWpEsgeD3F3aZR6B6daoegTTa7zNpSHpmxCfzFnySPc4PwjWghGZa",
  "key42": "4UX9u5Zu44Hhv1x84BMNughkoJWpgRxSd5vdTLtVR2E12YBmR11po79v2FTJKNxEYG2e8Smpjn2GYnaVd4zs4wjB"
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
