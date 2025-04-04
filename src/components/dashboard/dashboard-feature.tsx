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
    "6yramy42TSN1fkaGCAkcvL6ufkUJp9T86afsrKVFfkSgkuq7bqz4NCGhqmc1f4e3Kt76CmGp2sk31jFJoDVnGyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35uzhhP5bJnBL1Mckzq1GviGmP5qdji7gZDQ3A9VPH86pajpyTH7bj9cAWN1HknE3ZNPFMohPgeX93yj4XMT9ruA",
  "key1": "5jzENcXdfb2rkDCTKmC58JbpmNRsq8oQejL2THG3qGttTe8NSaHo8idzYsKtTE655jLZeqGtq9waHyDvWTcJBJ1U",
  "key2": "37bPcrRdGm1i27zfrKu6knh9QHqCVNXNx4n8UMsSNvEK5gySJMzaUyKSrpB3vhNaMy3zxKPsRnyKPHUmBYfJ9EkR",
  "key3": "2P2RmYvRq1coMmR8J954wCycMt4akLLYwBfFmHN2jtY2Fx9gr1PHMDwiVmF3Jc92LdiK8qXMuK7DBsz9WTBmogC1",
  "key4": "5qneXBCcH1ixTSCFN9pVYMA2qDVSRLzyTT3erU74ArV4itTvg4TMazJgbP2YQVS2ygpc8h9uQWDxfd6ZmjsVQvA8",
  "key5": "5x8Tsx6VMaYcsFU5q3r5LWQzJ9jCkYCyy1ork1UKTnEFuxJ9k9cY3urWB5REScDefenwe3x4z3T3krVrmm2hmyq4",
  "key6": "5YZGLGqMuEMr4Uu5HRFLb1eES2je7XRi7aCkQiRePnfWimBkEYRDxkyR3unqhECwbdQLymCj56zEsrXESbANhr8p",
  "key7": "5MpZZ8tcoZyEorvcBdFRA7iJWvNGHExYJznoqNSiTjxeKBUpLoy8AnhwEGiEnGacmSRMZmLWXJt77CmL1WVfPxjR",
  "key8": "4yjzzwAeSwYY5GKKwfi3d5QMKmELaj1UhC7cmUH4RHcQ2W7mjG8Bs6p4DPWzNHBH49iouFd2KbncyhQUpFxPRB7q",
  "key9": "54qPaBYhwnVxu8JeGJp3Z55azjnrt1XfrqJTJGvCMgjfKFsb6EF3xKsrJ9cri5gs5zTcpE5wGHYYaQ7cBpG9VwRh",
  "key10": "5B4F5h2ugAYdhug9p14eteN2MMbWrYn3rqksK4NtyTN8wq2uzdAJfutPQxsSKCsx5HUTZKdheUvEexdJgB4iKsuk",
  "key11": "5tPfLpqN96PXsVzCCCaEH9DnNRH36tHj8m42rXhjRVyXkksKxUJ16deVLYha8rdbyZHBUdrSoSo3xLJmAZZiecrX",
  "key12": "5GfZb9E8mG2bXQKkDpvmfmiJ2skcuU2KkKDzpzARTaauUZM7MCzsJtgiGo5qLjpz4zxbqPrvuJzZMKTbjHE9Zhhy",
  "key13": "5jHryNLvFKxfD8a88vY28bjS1kBB4GU3wtK2YKZYkzm68G8ahs34uVbEpLuKGsWx6cTH938mWA8QAuNvjdD13Ja9",
  "key14": "5QmuNG431wHm4GXKYs6sDrQTSguzz5AyjUifdov3qfUEGsG6MVJGBCZcNYQpMPE6ebmAR1rXJ1njL9xbBL49A12V",
  "key15": "341hByrBEu67u5AtXPtAzTtULV9KVezMVjURnZXUvbjEmxzdyCdUxbvy6KUwePP3Xeuj3ZVcGPvkw8AUhcWcdmSu",
  "key16": "QjrAfVERmzsBmL5K5T6GqKZuhR9MZE7fbGnGEsTtssChvsXt4tqM23WtnKbq7iwqVC9LfjBztYBq2RDGkBaMsoV",
  "key17": "4776aVuU7v1xPsjLoV45HdEqMkxWHibkNMYfEFCsRzskXNAst2QN9xu8mSPWYrNJyq4LYskKMj1ChEbvGG6vnPwL",
  "key18": "34pTCtWZfjQPe23Ldga4kCzp79UQCqeSPf6qwyT5zLREqVEPpbSvBvbh2s3HKCNRjs1dp6c8Je2DhGohyZSsm3ce",
  "key19": "3oxKiZjArdFA44nD8Rmwy4F9W83HANDkUZA89LVyuqx5Sr4rhz1iQYAiuUvjMGH42DCTGHKFj297FoFcHPDDkwHV",
  "key20": "2qec5SXLpdphk5WtoewCneUXBFmVEHd7UiAm6kCkjHP9yvw2EhJ9S84kB4Htq3GWBRjqNMbaPckcyvhvbpM9pd1y",
  "key21": "4qKxmXmHPa5CiG6BuEkfJZ4UgKthBSo4hYBgWCdZdkvKVfQ7ccnhrhs61nXH1tZ5K7N4quyFxYHkwut12PxaFjLq",
  "key22": "4gh8FsrGD4NkcrhbneecTGvhF6343RYMVsShDMEW9GvMzGVFoqT2xSKtxJ3sw7mLremkbdq2VnA5SUaJYEQkKSKv",
  "key23": "5c5iEM94g6GRs2Hqrr36bhkQzHqce3d49PaC1HWSEgrqdDAr3nQyzjSKJaAU9CKcosRCoBFzgfwzJnknAUjnntiP",
  "key24": "2WhTfRvSWJPTiGFU5H7VgmZ6Q17FjJbRgtfLGiuwra2dTcyqJ6buR2kFPTe4da4M5Vm63dx7LQ7yNAQkaCLSoUje",
  "key25": "5YeVLniSGapyh5R2d9HpS4qYuEFhiGRV4tSA198ZDpbkoui1CLy3CR5SW1do8a5W7T5GoBgdiiPNiALPCWSFf2uM",
  "key26": "2rVT4XfRybWjSYq67wTuESvcJQdg5RNvCLMZ4htDTmiZd9WdekeLyTAKSD99sSeTX89Qrq1qViXPcYHxedTiy4Wa",
  "key27": "3uvhCKmpboDPGC8c1AvLQrcjLs8ZYdFXYxgSQT1tr3yujvEZy8qFf2HYT7pV8gG7Gjk1QwzaqZ3JjSrKMx9QR3BG",
  "key28": "316281R66RETSikpxhymmJmHayWS3yHq2SUyTpmKJjPgjJiUwU5PsSJRCBnjrVEC6jKM6Hr7EJm5fPBr2nhUkd56",
  "key29": "2o9Xyr2by8Hn2W4XQdhkAUiwaPeA2BGqjLtMzSySUvRBeiNSeAsEnBcBm5ZEEm19NqEUwYmmLohktAXgQmsLETBa",
  "key30": "2JwsBSvegwbZGLUBsqKuz3xbArijvCZJZqyRZUmRG5vGtx1xar8q3ojRKdHjGRxsWS3McAX5Gw2gPStVHHv6m9Ax",
  "key31": "54YgYdBxz6YFZ1RXA4x7ksNB2ZgYn8MDvz9YURkjN1w2Gf99DKGfCJD6LdjWEHipYjkBJQQYLyGAQstwVkppc9Lj",
  "key32": "5GuQX73RDsEy7LqKENNWmQoxDAxP8DTuhhaDqoPjrLmtaZ3vzA883YxfpqVPqPnJqWnidw5xHckC8sGL28CvMx13",
  "key33": "2uyLEUdPZg2Zg9RzRf3cUhjCKrVGHXWAnwwxsRXDo3Y3tv5PzFCBX4rT56voeessM4D3vMRHr7dG9qHCmPxVAKR5",
  "key34": "5d8nL4mV45euwdrnBRpqwyX2UAZjCyBfqjwEKXNWNYySmzT2kzF86DqY8kbzb9oS24i8EgvZnCMN9jy3WTG4sbCW",
  "key35": "4TsP75apsiVxvkK1iUGXue1nxurgkTn55PaCpB2iwMtj974orChQNztQpZB9RmRrBzK349KbSu3231WVix5o1mrw",
  "key36": "46YBNYR6TjmVXPe9Qvt4dGyxxcykinJnwb9WWJYrKNiH1SwudYpRujY8XJHcycfEZ41MS7V8D9TzG1wpmDQ8Se1f",
  "key37": "3xfG8sr3HLywqqLC3ZZx25aSQM7k6rF8FrfM3oY98Xh5b7Z4tuMr3i2SbCAKbgBGgtQcqeegUoUT46m7bXpuzek1",
  "key38": "33xCCSiBxhnMcfFEWDuAo5rjpLKsWwNrohW2kwncNWYv2uomw7nrrgFTTCYpinYUY2JhEecGNbJwQKTEvXpXgd1V",
  "key39": "2DoWE3Ti84mmqMJLtPAGKNjoogumLZWERotPZq3iYiXBXvgemXtmzBGjCkoDf4ppmJmSdsZ4KR19LBintLpxZmaa",
  "key40": "2tivh5WWv3yJWeqtE7TCANAfSSzFHkxvEPK6yNxnSi2Maa89UEbhMiaPuQvW9YYjA7p7L5eS5diQQB7DnteBDiyc",
  "key41": "3Zhzy8RiN3M8WeFtZU2JwYy3EVDoj5zm1CKEHxeBX4zUtckwSuDXZRKGk21YZvPB85jwGg9eZBt2yKxVVZqsaar2",
  "key42": "3MjW22AkjTy8i6v2g3RnDS1s8JJTHn3YBceUsmyVtgnUtUVuR9NF66HdWRoD29xdXNiGA79a9DJo6YSfVTcpgi24",
  "key43": "4WXovE7WTUoh8igxq6k3VNxf972zdnENsU5Qu6RerNXAYJ3vypgC4y4RWXmYg44wdriQeEo2SrNegjWg1rrEsv56",
  "key44": "46UFK3dXDiXBBtLn9qkdH4MDcJr3zDJR1uLHXpkCh6mQFXepoSnXyRLGuLQ5yH3JdTAzVHapzLp8jnuxQ1nr6XxJ",
  "key45": "4v2ooVH8AG5evTix9NQifphWBbqchuNzdcqLGqwLzg1HDSRjtM3tqX1xqMFvXoTqPDg9pJVu5ZfxcMaLpJBZ2Neb",
  "key46": "B8qjvFqM7dPKTJoC7nHJHA414LcmbMnrWoXChintxzqd8VUsmQUJSRGX2V4mcTXhsjxHwBZcYSCYm3vBoCvbxRp",
  "key47": "33tFnf8WRVNFtjjvLtmHkx3cMYzTeczPPYYsQVaSyRzXTCg54knP2FdbdxacbD5kVVPdyJVYbS8bo388VqJYWrv",
  "key48": "4tRsHs2U46afx8HTuvosVxxbukQo7xUo8cvbqEVo1hrAnFJhvV6VzkTJfdsjybKPJp9deTH4yvn7s98BGVZ33mUG"
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
