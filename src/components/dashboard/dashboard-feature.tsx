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
    "4cb3rbY1Qh4XJtfebfbxJ3Ynu5ES4ZLrBDGAuGvx3mNNtZHmR2K3gZs5qcCqFYDjDNfJWAH84Axugn7s68ajFs3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijTRG7Em5xAHXktrzYRzUsuAuBxz51S7RcSMqqdY3P7LDTmPSiofPp9VD56oGcyv9PHyaoh8V1XxvT7y6UR1LoQ",
  "key1": "2BEPTc1MH59UYHZ7YVTAyA7Eqh1qGVpp8wRxJ7J2douEuEmUoep3wuiYD9sT8SAsu5j38Tg3gymNdsCyUmBwhZ21",
  "key2": "2vssG3Ph9d8e9Kb77u79ueFXfPjHyYSks9J26mmgt61YhibBYQfEERtsDf3YkKXHZjP3oCHwVca86P9mEFEMhuyx",
  "key3": "4YVAwJ933p5UZUcFZHuZQLXSksE1uxzAbj6px3KZj9CUBTUsyAfSbZctbnxsZHMWtAL7xnt2vQYptb27DWX9kCCY",
  "key4": "2U2FCe8BA1nViXHXQQv5Wsz1dwTSTCMc249bJudrmjzdo9gp9J4wFjUoFv43pHquiBFTsjEzZYnr99Beirwt4CcC",
  "key5": "4CLs9NjP7fjTFJAhAFstgGte3FDWf5tC2bFRUULYgUB6P5JyCGBebV5s8hqUDo2JQTGqJiJxQFj4D7hjJYnLh6iD",
  "key6": "31i2PxSnrHJnJWeBKo7MP1cqdNeA1kcuCTgsrJHpc6wVRRbNsG64pL8HWAgHEtMFFcxBPuhcTGJuNvVfKZSwA9Rz",
  "key7": "2pZPi6v95RSZE2EBq1e165G6Y8ZFx4mvaNTLL1hCJpmnpB4jQ5L2yybVF2we1bN4vBSTrPyPnAco5SJFDxDa8mAF",
  "key8": "2SUYeJ4m3fyqKCRwVPeYvBg4emmGjSvGyCPByrDoVTmcMaQQpT3SdxN6hK6Y3cwxoxWnundCDwXDZU4VQ6LCoxK1",
  "key9": "2E5kkJhZg7g3FZ5yyWR6gtpfiMDog13uhG1hyUvyXrEArNrv91GVxr6mc3fvhMmw2i5KyGNHyV9BGENtAnEKwbD3",
  "key10": "4REAj745nngCCZ5UCuYcHcqTAKKVTkLwNGwQNh7Y7KotezKQ2ZKxawKfgFS9UwUM7FNpjzfgBGDVP2xyHFaoDpxQ",
  "key11": "2Jr96YbNMH5UcCNhX86uHj4Bt3e2e8jdRJ55Vh5AZ58gRaEzH1d52PjsNN5Di4wMcKZwyUW7vtXAch2xTZLrysZn",
  "key12": "PWyzThTmw82suWDGGgGy4GusyVhBgkE2mvZuSTN4Xsd2GiZdHv5LWRKWnGWXAgBRPg2WsoiE29zSBGdv9mckHJ2",
  "key13": "4yYubdbEtG5aiwNPj768sfyPJsXUyeJK3FcU6Dz8iDzu1YipLJ1Xq9SNaKyTpNPZFobKoh8aYedfwhqa8PtkUCRZ",
  "key14": "2EDjipikbUVaRumgLRXshJeLjTmWoV6f9YwiGLBgVJVfy2ZiyrYRqK2BHeALjhGyhXVyvwAQhfCTzjbV6HgyCp3z",
  "key15": "3vWbaAzpuTs3Pq2yKSauQfvYJVHeJpANJgPf17nFho2HEhpuo52hRYw7i5Yoap4QPATvsPK556sMWNo7tAUotVco",
  "key16": "61K3mr46rhegvDexz6RXir7qX4g2RW6tZxqrTLt1ThwLg3Eycsg8Xe87a8fw39tc5Cu5dGp1bwHVUs7oWJ3Mdzco",
  "key17": "A8Dgjym7Zc343pMLkf37CvYL9AL79fT3TKLjF7m9WwrdEZgTmo3HstyjcsvP4KnsRfiaUGWrb22Tvdg1opgSMaQ",
  "key18": "3KRst68i2XcDLmMM5i6q2xkocgMW22nPBzPSGq7wuBUiP3AzNMDrFuqd3w11VkRxKT3GLsfbBmxmH2d1C9vGwhnF",
  "key19": "55CqvyZqNFK3Ra2RD1GWscg5Eq2r2w4YG1gxrhCndMFMQz9HuJTNhjvsMjUkifg39WmMVx1bb4FNyq2bmra4mqYt",
  "key20": "5pDypvPFEqLh2n9bDXineiRjfzro7CRRdFt6BNxCyfQmWdunt8c9FvwV3uSCXhvGhwjXEcQMbHd9m25tVSzPjQJ4",
  "key21": "2ZYDpcZpsTAcURwXtHWST6DaP4ADoLWyTNWv4bcKJ74HKd3j6xVVtB5rH2sttjrWVM26BYcLmTM9QV8Vw1bz2Bcp",
  "key22": "3pcw7JQaimuwmTbvXok2hpKvrEWh15moZ95N1aW5KpiS5eC2Vn4Xn27cHHhPQFNW4oJxf5nkEHkACjxG2AQtg14b",
  "key23": "2srrj4GLwnbPxCiCwCEffnnBDcP6ZUx69JeqzLQ2768wC4NQPBhSE5g1r6SoRERWTiB1stHK64ePBB1rmT7V8e3i",
  "key24": "3UgSXk4JbCmRCg3Ztk1nxQS3tk9ZJ2LMjiJpTu3y448WMWVFcRE1ZuXZZSTnvCABraWZwNMX4mcbPRw39emNbNrL",
  "key25": "48pp9e1evKxdKRU9xbsBKkj4UN9K5pWdRCLH6u8E4v2ymRG5a4cgYFJVkp55ZPWbGyr8LSk5ZsZCvBGprP3J5qVL",
  "key26": "5MBYHoeBLqLfZTgwaRrjGEDHHyzyav8Rgf5W7oauXurxRSbpVZT64evMnxr1uCPDgpbKJyDPxhcJu6Hs1xKwYzMe",
  "key27": "4CTj5fj64PHkfgCbaQGzV1RAGrsZND14C7Nz2p4T176sgHkozhgADpqFgKsTBd3CVD6DFUJ2qN7djYWbozHXWPU6",
  "key28": "2qD2qBjndP751ndE7AAuG63q6HR2HzGWM9SozcW3GTADN851MMuNfXr7hGqT2BT4zD3XpaJvPMkkwAxcHRZZDgJJ",
  "key29": "kLFsH6wDX8JsBYP5B4XnmTtiqdTuzcZNCj37MXTzNk3hiH8xFV7NN2J8FRn9kwh4bJabV8DxdDYxa2PcmbMcoFR",
  "key30": "66oq4r1FhZXtWhpNnN4qXKbrWfSKp4ir5ccb4gX6VgFXJHzTLQCNBRuxSSGzkcwQazFPGovEcJh9fgYaccBTqMw9",
  "key31": "3XtETT4NYgx9n4yhVUJbn8nY7NpL4m3EC8ofYgapGwtyDjFeBVKE5727rmroeg4T2y7VMjLa6kRfBVgeTFw2faP8",
  "key32": "47asB7psnTVgWoegoGDbHU557XeegWDCzFxcXxwckpcvc1cHEJ9Z3TAGQmJKVJYEMBXQW9ThzJCrvQwofU2cNSun",
  "key33": "2urVo3Ax9TyMgYpEXQwjBKTP94LDtNhXq7wabrVhzT4tGc8nWoKPWq45vn5MNUq17Un1zHfrjKqKXheNusbbVxoj",
  "key34": "5PkVisd2tcZ2C6W8PjGozPbn8uZnUqZT9ME7Xr8YW45QVsh9b9oxEy5pt1PXytqEPvSe8B4JZduvk1ucMztZfoSt",
  "key35": "2gFMUsxfjuFHxEz7ET3r47F9vegKF8yS8XpaFsY9phS3TXQR7dN2nB55zUoueNUhx3egSzw61KRziTJY843TLJGn",
  "key36": "64UJz8ioenW4iJGRT9o9SvxrX7aXrZz8PcPVKZYuKSDnKk8xzZ9365GVzYDC9idepzY3QFuRVGbPY7xn9yvb8SaR",
  "key37": "Mmcc7tn636DcSQVLsCwL51Wzs7dDxNHSof4VaEz1cFf15nNEfKjgZK9pbpV4AzgU6LfSz8nK2hr7c2ddyNmgXMk",
  "key38": "3RVqWQdXFWrvL2gYoyvGrBtcaruPYLaiCaK2HGiYE2oBQvN8LL27yrmxnatqQKaxKv5BgAzNxHgXaBiuMHxEwUGc",
  "key39": "4NmUtzZquLrXKV4AvL56EsZPC6wVNXJcM76oRKdei1pMPUgdaYKGEVkfXkmpK5bkY28kiL2JTgt2qkZ6DrAHfUae",
  "key40": "3sRNZe4KDMxTv98AHrBQeYrowABs2AGNZ2PWE6JbXV9BwoHCE7pkiWLmCuttqdyTaUQeToLb1KcXb6kaezk4t3Ud",
  "key41": "pCthY2RzCSvvRtYasTM2Y7a66W7zUQE5Foc1RvpcukW3zbvKYYtnvTmeJFyqBjDygUv1TZayV1EZ1BzSHVHjbdg",
  "key42": "2irGh8psUM88kmJ5eVfSENpWfV9wgSN7oaiXPMmYgUTigxD8hXE25JWJfP2v2tANgDQJ8UQJJkpHtrP3KZoHA8sZ"
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
