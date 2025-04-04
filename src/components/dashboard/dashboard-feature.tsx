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
    "3vacsJ7Jd6ajXFM6z7Vf13tqUnftHTae2gULVhrQWMnKZXVC6hP3JF2pjYoTKfvgdb9t2hMfGsZdjuUagKvAzPbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afJz9yrnubJh8fQ17ti7yZp2Np1gsh24kHjFXLHo6tuUjG4MJ8WbzVVdy7jtPMbCG31dkRgdbwE3vKjxHyyt1cJ",
  "key1": "3aNUQ7r59KYV7aTgfJ2TJ7ZfLqq7RAUvHZoZnFKeZuZxXXqAFpYTmGmajhFkAgSsH6Cu1yP8SHZWhStXoPc1xHPA",
  "key2": "3KTWhoZNw32LsvDEC7tmMhBKEa9QkHQ5FF9rYNWTBodu4ccM5tXC6vtdp7R7tJCamKEYsWpi7vc1Ude55p9u2tL1",
  "key3": "5UVKgDB89Ra7Z5ZpBf5UrAS8Q7y16aafPZktkcaAq4VejdAdUaEQEQA4pJYxdTTjU6QkhMR3pn79uMyi2VqxuTSd",
  "key4": "2ULzRY1ZxKdQC3xhSnK74G7Z4hBAQ1ymqW1tqyigmNvScpB4zByLrvSJ8hsdjYUTN8uvm8YLPmh5BBDvKAMXhCzq",
  "key5": "2kcEuSkGWaixjY7H6npTB1vErHdjMZ19Hj9bFrFjNKfezDtZRYjvzoNnvoy6UDBZ1Pc2K3D8V3YHQEh4tK4T9MS4",
  "key6": "4YEx8QTT41e59DPtQa5PZmgs53DbAQYtCui6iQsm9iFsjA3PTUGcs7xTrD2X54heDsKaH7Xs3ubek1Uhv9cUpAhR",
  "key7": "4agyFbXTEhuYNbyehPV5eNyqbfavTtGHZ2eZgbzeUWuJUpkMYMQhtfGBjTDXPEzNnWk1sne6a4YHKz1iYmFSJfuQ",
  "key8": "5oPn2T5fwwmG3HAZc9UjjLUgqVti9NMZRdMd7pe4HjtY4FzPwfQWnFwr1hpYFdtxpd3cZzJUZRixPDYFJMCku1kj",
  "key9": "2bqwknuG1Pqg93XPGvwxmGymnfTEtRWTEzvjZkhrJQv3PSB9B21aUre37cJjQpFdxLSsrGPaYtp7zgKRWx9jyTyg",
  "key10": "42mZ2gvvooTi9MAznW4va8o7upyqnAFgqgdWpUzc8PsWnboU8XoXkuqAKcvfa5BqxHHDXdubMFdE3Q19uKRT1dyL",
  "key11": "4ATGWqpjXFd5QUeYzgCGMShLKm74QPFPRb63Gc3HQoNcuv5BApsVgxBWRWnCfssNfjBcTCjZcHeLzcR8tc7WG3FC",
  "key12": "g9sMbtHagVkJcR6k3Jv3dkH73qFzTqf8aumVPvjqKiERC1f49fcVNc4bFyvamDQkfb4vzKE2s7ThmGo1Pod1hKu",
  "key13": "2ApgWJTi5x5DPWpnQVkebT5kriu91TY4UZCmGw9SN9LLhQZxysLzym7gnVRKotqJBghgEUKJ9p9ZJ4N7pmiuDjfL",
  "key14": "5BzQr8zaDVuMwV3y6cjmBYpWkE6Fad4zzZHLA6E3tYXsAzVxATDHk87PaMDuctfxjX5RWAyrGR7urvytzNGGAk7p",
  "key15": "kuE2hr9RznCp6Mr6uANkVASN1QAQFeV5URNZ2Sd4eAjkXzaotkUpnvsKgjbnA8J1Dkz5pNz2Fs4Qgs988Fs6wWz",
  "key16": "5axsJkCFSNezxYzbTLqD8Vm5RgaPZ4M5TJt3rjpsSbPSHFsyC1Qv1g4ZpTVVo9pxLe7uLvm3gYgvYW9vzsAFc66U",
  "key17": "4PSgfCtvWxqS7Z5VqnNeaYsvXFnwVoEVfyCjqTZ5xLDokDnmNV9cQkf27VjqqjUpkzicUXF14CxYQhwB4rZKMoLv",
  "key18": "4KSmqpaPzCv2FpAnmgVKRpjdHMVcZW5sE2UXEo8YVc4R7PosuvDyZh1wBzRy8ChBEtVEDuMzQp71k81mopHpvWPy",
  "key19": "4px9dtgpPSzU9Xfexc8NYqU9R9GJq7ngqG29Uw9twQxQc2jwZTYRgeK14tEAv8DXd6ZuX9RrotReAwddBYGyPUVt",
  "key20": "2HBWf6Ps64oCZFdr6dUn43tWX1jCDfiHwftZ1YnZi1N6bHGpAoqeVdHAJWbEH8Lx9uQEjubeQadzu98MaamswrnV",
  "key21": "rBodA9L4PgWrJbUeWbcz1kSPDdKRWjV8fQfo3dJwj4LJ1kuVNfDdtBMi43jsZAztcK4PGzPg18S36WTesUx1hak",
  "key22": "4PtRqrgtzRgC9L7LzCFqR4Sg9NN2Xq7D95N4uHnWaacaqXc43Sh6ZZnruPPr2P6uxTVqFNXSnjXyhpYjHHGt4u3T",
  "key23": "Css2srKNRE1Fdh9p9HPqXstRPrBsLED3DpiyaTdcwhVHxk5CLKvNoC6EKFsECRnyApXYTao5GRPwT9kWu58WwWV",
  "key24": "42C4ZUfTzPbPC8TyFrGYiuFBiFD73hezzgCDExrJW64XUEKSVYznL26RMKWGGLosA59kUnsHgtbwX4xDVCHQaHWv",
  "key25": "V6WnXkPwgETA9UtuzhcJZX1GgGqhJ6fhAqz7ySK3s6uPDDWEpmRvUSvkosJjhtCJjwLx2czbzUtpt8iGqyPyikv",
  "key26": "4S9XAVv9meiHFyTfUfAdyZg6BRYq6hebPfjGzyJRgMPTeNeEeUYBJJYUPo5U3so1PVHGvkjEVRTZo3HBw5ddViey",
  "key27": "42N4NUn1wcnGLYpq9FiUB2L6V2Kb1g7AHMD5SEhpoiMPJv4w43aF8mRF4jZ12aot5xxcRP6h1WECKijFHDuLdz8N",
  "key28": "4WG5FAcG22npm6S8iu7h1vLwzHNwo4gK6EmYKJfseBkQDAByy9KJ7LoRhhZqo6gufe9CxvyvtUankdtaZ7HjgRky",
  "key29": "3V6Ta6VgAkxGrnNFnjpR4QwmWvXcxh19TNS4AWJYzsPP6SPdP3cBW3HnoqcQ2YcjPHVsxC9pczsp2psfZosVawyu",
  "key30": "25q9SfY3tpd2PTkRuwJtxBKJKiZC252hXzaY89Gf4DiMunggCsStyL8WGTAkicZY3WQE6fGZiPFwdM54dxqzAeiN",
  "key31": "5tmeTEerm7eaiqy1JGcWLfawAq1RA3cqA5V3osZKaKnAyTmTwH2agAYVnr5RHMbbDG6t2vsVehnCD2PjUAeBaQVL",
  "key32": "5mDbYzPQqHmknm33HgkmxH48XNF6ZhXhjaWKXLTFGDFr5DJv6JYZ4spmNDgGU629Jv3vekXyvaX6PfuwqvEDC8Yo",
  "key33": "2HcjjYahPuGGGfNv29atMk6Lzdm3m95CLbpMnizAcS1sGk5iu5ifFovnokrsrPYc782HKtZtu4q17Zw2SpHKJaT2",
  "key34": "4FakZbeT9pHb9nWu6L7H6JKB56k4uyjgSG5pVkEZodzC5Kf6766UDCtEqFM6c8RtS3CRketEAYxuJTK4gcnDQoCa",
  "key35": "veksQ1tkT8jcvka3QJmftVcXsBkCXQfZKCDwH96PrJT9Q1vRACdNCKr5HdMwYcLdXd6bfrWVmf4jHFCSjj3Zkvg",
  "key36": "5Rdk4wg35tPYztEaEBveCqAZMtphkhBokvqmoqjFVQqndK9THjkkZ5QYjNiBgyTc3GUmtX7peY2ShDfGmncRAurZ",
  "key37": "4uUaJA57YPN6AvCA5FLYBnhjQZMsbjXYWsoBNyvJdxf6hwezzx5duXVtbMxGRSbzXqGLykBjrMK6Dm96TDf9QQ6f",
  "key38": "3CCCDiT5ywjHVNjoD6jFaZB3hzhEmDRRytfrD9vRSvRbCujv8FcM1dwh44vF48ydhtXi7YUkPb1Wao9gfkgq67hG",
  "key39": "2T9KRdR4Acnhs4kkT7GKgDqhUQB6ByVrMkbBBfCaSK19BVPEBQLMGY9CU28JVbX9eWkwqKN1n7YBCkwQ6LPtYuU8",
  "key40": "f3FzDvKV1YoVrzMmPUPjqeRSovoriiM7ggHETkr2PZRQjxUTpMCsQDwSoi75PWmkX1ANCDQvRQyoSUGKzkydmwA",
  "key41": "4xCsUZgkJs4hVZ2otrcfk3YYv82iVqbmo15WioDxDmWWH9kUoKbdJdjKuSjJrt1mGnVoTTq6AnJKN3r3puXT8yAQ",
  "key42": "oqn4G8uafULnVMjieLKHXaQEntBvMcPHZaBTg5derDETyAU7FEryrbwk8azjrxUhXsXiYNPRntXC5LAVTQiMGfX",
  "key43": "566LQsjYwmQ8dyjWTyhdWq1i8rxyW6mqoUA3MfB5eLVVuyuQeiM939zfq16LmmEQty17DKJfSb3UCgPuVQLD4nyQ",
  "key44": "2Pjy8Q6ArUxLhnq8HLPZSvfvGoZ5PN7C2YMV19DPoQp61deuUK5NHo236q5t3aydU4qMhbSncKBQF3BUjaTbVH6h",
  "key45": "4j6kPsgmhE8ZuUz1GjAPzrvLXJYbDLpbXSyRuckrjpraJCTwiBD4QdoSXre1oj3jsLkniQ4v13T7RPiBoNcHMb15",
  "key46": "4wbUhaE93VgyEJo15FueU7wdj2Z4g1xGFrsufHAHPkxpGvLNm8o1t2koYSf1SNrFnNEMMazD7PRGDrfHEafkeYxh",
  "key47": "jxbcbastz89BtSMhcanKMKQyB6jYEe7B6rZwraQJ7rAMenKUosmhibjUNrTRsJJt7DY79CnokCXE2F1B2FRCo5v",
  "key48": "2qKsjj17ko5Fd6sPdj9KbBX7kityX8GjERqQHX31rfSyJb3kHUGGh3AvAPzxzwehnfKMWQWQBxAVsHuVPi8YSoLK",
  "key49": "2Mev62P2mXRnwQWF6j1i9MJWRtTQwRV6Y8qr26idXEzQmZPXEDE4NQqK66mQNRg8hKWCEUjbtwATvok7EwHnXSe6"
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
