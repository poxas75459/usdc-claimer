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
    "5wnwaCALHbVzuACSkGYv7oxUAnN1UAp7sHkd2MhNHVDs2xD9Hp5hWDXgfLtUDr2rLJ5rBsSR8vE9WzeEGhdUEB7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Tq1mP5e6Ui5y4858681CVd5C59D16mRBQAJdaWewUMH44rMvqhRR9nRGqB1AhetDGnUyff8fJzRQTT5Veftf5B",
  "key1": "PHiJKMEExSajXuV5U6RAjfFyPhyYXpZT27Hc7wZYgFKHEfAeEhL4kJSwviMWRuYSDCvk4E4v3vjEqKmzZdgzNFp",
  "key2": "2uQ5gKjjdBvpxn3AExJ5Kx2ycjnsDGaetWwjij73esSy6gwoEpd3gRjzzEcmP4pYKy7Jx7U8c3ap3kicPfyDyK84",
  "key3": "kktmBtzgptNx8cyXQb4RBh4D1bvddoF7TdR85X8JEWAAwyhvAMyRPe64zbHQX9jFnqFTeCh6naSTi7ZjnG66dy7",
  "key4": "3TD7UvYkR2wwEr4T7cQyrCvMssWi7VhdLfjA665X8W89t2j4RNRroru52Wt6aPLWBGAKwRGkErXsArjb7UrhuKeQ",
  "key5": "2w4UTYtsCQHUwT6TekPoiXqBkuq5GPDTUky4CiZFazXPBa5kQmRdtpjTEjccur21GEDYBA7FNjcYDV5Sjqz1TnEY",
  "key6": "Xjmygva1jG3kNFm2LnyFdDA6dZWvhvrscg89jL9oTpDdqHFfZ2gpnt7UncSmfXKECkUtubifBhcFwjma2hSYV1i",
  "key7": "3i6xjNYdEuS5gxfdiP2kdhuAWTn8h7ek2tKHnMcY88f5YmU671T5VcxRQcyrAC4bxqW64hdjqsH1YhKzXmptieZn",
  "key8": "5KxgkTFFEfsAkD6SG2ZakX1WPHhZokLwmvdA3BqzKYn9hAUkxiqRKzXCWayWjSBXe3ruCEJ3xUaTcr6KuexWUbf1",
  "key9": "3JddeuEs6PaojnerhTnrRMeE5Hut49y3Qiobj2g9btxvy3XYeQi1HiAmMML9pTaLdvkvN7UEDLpGAqoU3oE7JLsY",
  "key10": "yzYZSqqnbiFZ5hBGYnKUEUZXUPTABEpDoWwi2ewQJxiKmHTki6GeM5Vxveo2rHYHTzroVxk7XLqFUqNjqYUHtjc",
  "key11": "3wH7VQTkZnbaqjH5htcJXTHgFx66kGo5JnnJDLmjYj2QjZvid6efo3MfwCJmmusmygmZUW4mLnTBZwWHu7dWgUuf",
  "key12": "5g1s243ccnqyVVwaEWQ2kUjf1pw2R7pHQcF24xSEbtbcWgNbwvVDcs8RBqeX1Yv9vz8WrfmtAGC4PowxQF1x7Bfo",
  "key13": "2LzoEbFQQAaUiYK8LDmK2aR7kcPFMBVaarJrMtpx7QVWDDGHLqxxtmBu3X2C8fbSs2J5u5bky9Z2ic13QjaugLFm",
  "key14": "4Q8R49pR5UakL3K43mZqdG9ee2RZAB2j8E2E9msDrh4CMBCFto8h8orVYxg1okQgmuCXfdFzTXU2cSpnRUuG3Cf6",
  "key15": "4MfhJzQvaS5bRQKTeW27m6L7XT7ddLDV8SM8GyM9zu1FR2bXArMpJviXFEAnDep7seFi4QPmSPqfgVzBQR3kjbif",
  "key16": "45cKEkLeCxHbv4pdTB2T6orfscpsK1dj85LKKbn2Fx6W2jcpMhPNwm7phLQEspxJ3AWzFmDJDtb82Yt6XWpY7zmj",
  "key17": "4AwKWXP2kunLM6U1MatYGDceuw1xhc2MSpePJhnvS1c3P4UWUKmPififxpkCP7P1qtdxcN3GbD8Rkg3fKJ9hebny",
  "key18": "49u9S1NaQigthymtrhFDGFVVLxAcz49F1H4WYAP8YDFEW9BhRCJCRLjXgJn8LR2aXD31vu8rxBC5rKEQwRczEu7G",
  "key19": "3yHKc1bhFf5JpG6Af6mNTvhfNSFnVvTodC8zRk5AUce7pPgnUff7zL8Z4RtzAddxp9MSKhdcaxGB5MjeBNdyiSMv",
  "key20": "CxDzt1GVf9JuWapENuj9K5NPASZDB7vsqKexR2e1ranUp1y55QyN2opGQmKVFujg8qjSYRvazmKP8b17cwcYFcr",
  "key21": "3wFvUPoHqaacRyeMEaowoYHKBTjhS9VEiHKBZbD7Uiaj24qaJdExAWxzSr28PXw29a8kjjAFCrPZu7bvWTv5yZMS",
  "key22": "5tgudmxJ459t42PhY1Sfohq2qZ4RsEcwat17voLr3UoGvGC142BoL6oZq3eLCV9ej9wkJ3eZMm71RGJ1nSHM9Ho2",
  "key23": "new25CXpzfn9a7XhEy3MNuiRrQuCdUCggCtojfxvKav4bb5JAFqSyPw7x1tHEKwAF6bCEVSuEY16Lrx9RD19VQU",
  "key24": "2eUufxbvrqaNJzJ546YQca8sVe55cSSYWTXXnUKTecZFScPv5oCUsUjHBkY4NqaSbhNT69e4poQA81PSkM2bqNiM",
  "key25": "4Ka8gLZ91iXMohMsF1rRTzwCmQahg7z8xxCk8uDvX1gBnUy3HXEqkrJfc243HUkJdZF2vXWDQ4NbLx7ksCc4DS1R",
  "key26": "5abUs6HzENzbGzj3K6ynMkkcBeRwCP2B8ADThx46gsQDMK3seottnp6zVSZZseHut2RoLYjVEoipAAkEqz9qWwG7",
  "key27": "2oZhXZteUhec7ekDquFrnHMBGf1U7QWorURWTjo9L5SySaw2JbHEow8eYAvds6n7gzahSqK4sYM9vVfxpZ9ECTDn",
  "key28": "3D2UJCHkwdmDPoSYMVArWpR5HzGWpiatcnSrbHn4effQGahE78iyoDxJizwY7NATvqTD2V5JQLKAbLjjk5NpC28L",
  "key29": "4Kyi7JyYXS7SWATduLugxMYaCg4tppus4XuiLhRaZqAeUGJMoCLgJMAiZ69Afp3M13ZRCcrmmf5CxNa8n1uBPgNX"
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
