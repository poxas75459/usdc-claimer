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
    "3yKto2zRV4oSeEVFYAEXVKTx5F56DxeuMZ1fX5VpWTjz9kBLfbUZr6SxFXVVgPq5ZYYRyd7FLsoDbc7hWzXZHHLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BqNwwnfaKrWxrMR1Vs2GUAfFmtqRuPoX4zM5sj4JPou76ikJtYnyvY4XWAjtSKLitPqSN5BmPKfDrwmUn7tZco",
  "key1": "3MpHMtcDzHLetLdGW3dgKLaT2tAbB2FR5H3icnmhBWJosgWS3E6ReJ2g4TfmHodJV5MFHWDV4JPopppnFVwY6x9N",
  "key2": "3dzfzUJ8qitGCyU8chnyFa9AAKeJYk4Hm9BSyjCk4CzrbKm9pKzwUUGE1SWXrCx2t88u9NS2GHw8hNL244zfHZoM",
  "key3": "RE7pL8SPSZLtVKVFXtsgJkEXvYWaKascpssMZJeUn8mL1estsDUTkDoVJhmbuH9W4VMaXKpe8YDr23GWL2hZCWn",
  "key4": "a1tX3jGTZMgL12ED6YRnut9477tUn79suFZPLi1p7QwDCaDkiDxLf9rAb31fEBxpYW4NGRj4Vts4vqNk4FVfx2j",
  "key5": "5ACD5Zy5b2j7oV8w2JSVvzsTxsBSEoRta7TgNgBuT36wToFvXbcvWt1iRV15gKVJpwKnnZJBgoLsN3NzHnGrH4g9",
  "key6": "poZ1jj5ny5yznu7MGySaB7dbG6rB86pJehq98zCFXmb8jY9QNFVxLyoGDXV3m3LzKtpjsuwznCCApJPKRUpqrD1",
  "key7": "4vKvpSDTp1zDXdx5FhCNU2vJCKTJB66bXMQ133ZChPsA7N4wReKUYv6CDnnxwJfHGK23AQRBTMZQ84oipAyaAsDa",
  "key8": "4xnXCqir21VWUDPULnEyhpm7vBSGL5qQnsuKoKe2h6KH25kchnG7ivRVca6UgywNGRHhYKs1cT3TikzHCEcGpAPU",
  "key9": "2FTgjgGUiRn61jiVv5CR42h6Cgg5HiuExsgG8bzbHEDC9wDnLtYxyAkqC239Acrr2QeXVS2obbbhSiDLfJbvhpK8",
  "key10": "66YLrS7dFJadZdbjh6Gew2HT5PbNwyYmgr1isox2FnhYHo2GWYhq7yKqckdSQBdZuK6gGDREw8SZHfepMJSsQdz9",
  "key11": "5pmHUQdUYmNGo1XU2D2eSk9Ugt1MDN4K2GS2TnuuXzBZHWfs24MS3vQ2vkp8c4kiCEk9WYspQC2dj9yDifVB4HzP",
  "key12": "2QdkSd3MUdBzLBr7KWCyrQavbEx8pzhqQ21McqBV5R5fkKomtQ5uTTuGUHDbrFFX8Ey742yBzHGUY2Qduh9ignCQ",
  "key13": "3UAGc66Lp58mHYhYAPhQjzvuukKzxfwcG6yQ9CBqAnEruBqG4EA9mgtbK3VGsAYsoHDGy2Jf8T7PTYhZPgeYsSnY",
  "key14": "3V6RKJdBEsCGeRvjLaFLc8Egzr6JzVeYNJZ3WnYrZq4dLRE2m2Bp7cW863yKpscyamUqZ3keb4cULuW35L6p9znS",
  "key15": "4R6YLDJW5UBtvUfhnptfxrzdooyE8LYviKYwgXvLhPA5TsmoNQSoZ8gcHEzWtnx1XEBXEb1ETGeXrd9TjABvMkYb",
  "key16": "2fSTsUswCnWy5TsBerG6dG3653NXJ3ZGxtMLkQUxUS7oYvMFJYCbjxpYuEGpfzT3sqx9QWppmxWnJsoYHvWfb17M",
  "key17": "5C1eEc2AcKRK9arbSE5hAu3x7shvfuvuyWUWukmcGouWzW3qsSwduNjDX9Sgrv78PvojAJptT4fhk7D6qdqFq3BW",
  "key18": "2RyuAcV7ieuX6MVvQKcKgUzZNc4XiSoXSy1FfsX88fHQYigjWTwYH9xe3kw4fW1GZYVwEdCpjn2R9JJo89jAVc81",
  "key19": "4d9UttH1vgCJmLEQWR4QZRLtp4k7fDdFXVJjSKTUMa7Lrix7WPyzt6VsMsSWh6d8LydMX6LetfgProEs1LGU1CrB",
  "key20": "5qNnuYo1ZQ4GHkZMoB7XDbvJRbueEMHA1Zqn1ZVb8B9GF9w1DwSuPjizk7DZj7pYoo7zsBjERdAK8Lum2AcJtjKq",
  "key21": "46eiXLAEtLJvKB8WJGzAjbF7JLfXVwdsH9yCESa5kK33qcxWgvSeDyf1cesh2e3H44VAYw112bt2FEZo8BWpDWwU",
  "key22": "4uurcdYUzZ1QvQeBtuo1n5UicZzfsD1ARFXhi1Fcb1EpTKUkwQWNb43wF75nxABtVaqYhCWBgjLumCFeYMP6XKn",
  "key23": "2LtuUvrFZeLQCAm7TAco5ea8kV3TgdpdWC9Q8TEvpdeP9ZESEUnYZJaPRnGRnTFmZSdgvd44LrjTY4pVGNwmNL8Q",
  "key24": "3bGqbiRfpSim3g5w1SSru49GLZefW7EJ5DT7mF7m8nTHdJrgB2HZHEJ3LkggZCmZkF73EYDJho8QvxS2X9frZ1qW",
  "key25": "4LTaiDRML2HMwi9WjXrCkKb3p27REKxEffAxEhi7kdKsLeTZuzT11QwX3ViRXHKBXmMdfjZMECJzX3UgugqB2Qzi",
  "key26": "2XF6xG11hLqUyXKv8xhFcLpLaXVgYTr7M2tzhGVVxSHWcUUpv9PzycTvuaJQ1efmWz29yQRwyzfKK74KSPGnU1Na",
  "key27": "44dqkQrFbdLo959Zh76DC9kk39qotLXw9kNJ9a2tb7z2vcgmhxGKwGztvSRQL3Q328Qg8trCAbtGHhtHG7YRunce",
  "key28": "5TaEEXgGMHg149EvcYLNTxpy3Hp8Zq8XPV3c6r4cLKdBaz5HfsANPbStvaYGunuBkLhFGWnskUTsBYdoBPLvpXmw",
  "key29": "4dB2jZqRcShY8kViZsGt8BamQST7ZJcgiiL3vdkwK7He9L3ATaJjRGvpfqHRTSu8tk2r2pBLsYuLEBwa9R4YeESA",
  "key30": "2fj9kVJMsLnTzCAUDCJBgqc7d71XupNVsqPVD8SXSZ5Em8rrfLrDzcDjWdxu7eJ787ZVMnEzjJCLtgjW3WuGYvMX",
  "key31": "36TLcugZTxgmyvFChB9b6qXPF1CQyvFqWRHATLBEVtN2S67N4zq8ZnqNRNHUYZyQG1Bqyrtuv6AUEjrER95Rzrua",
  "key32": "5twVjxr1o4pi5QR8zgZ3zJTzczqBDpe6ZWuPG2es7juTnMHgdyEMgdQQRuggGsTUnBLarwdSvxuNwD8Wx1tLQabJ",
  "key33": "23YL9VUYxowLqi8zYUMUxpwQvnG8WK4p2zDb8YD2BcXvyKapLLyF9njtXJS72DDxfXn5QPs6Q3mPGtMeKWwCdmyK",
  "key34": "xSotV7G6PPuoM9R1b6yKDJQ2VrNvmRB9D7criAzrfSQbPT1zEBBW81gBJmJgQjf8nDhM3jFnjkAAjwYFiCKFChH",
  "key35": "3fvznYPukUpkFtcmiQiNpMLsTpAsWEEMT7qJfqCyjjcAXds2qeCvErwo7kBmWvtBGtFzJNS1MjraLG5V3MpxhFHE",
  "key36": "5nFi9PXWSRYBSecqwsGKzk8XMyL64HtBWLFPLpBdPQpKXAsyUzZrex8jYdkQNDagLcJa5MfS1pBLA4xKSMD3cTvC",
  "key37": "5R3UhgN9zFdg9ey85qCG1zNPEB5GuaPtQwqJRuWmnGEeHoA1HjSGCxLBQ5WxT7LjcwprPKiWcRSJ5yPEiZkUeDU5",
  "key38": "5rGnUy1xbbEWosDxgkpFpaSVgzBrH4gwjQjLCVcLRZgRaTKWStTZEusj144b7i13y6gUDd3SyvPhkmtYUh5KYT2z",
  "key39": "4L1qU4iP24XqE3dzYwKmA6dVpxNH7wnS4RssTHc8LTpi7ju9aye4ocuvToejHWpTWGwk92cApMWDxZMFXWpKzYJA",
  "key40": "5Bj6j4t4s8mgZquEbE7XCBd4S7GuWa8HWBm7iGYpgB4dujUFXreG7N3Lb5axXLRpgspw8Pk8XFJHHmJ9mNX6Ppfx",
  "key41": "5rKdfJbQVu8C1iMxwWNNKTc6G9wwqS4pnkHoEKaGPmxFY1wuLu758FQujcfwxuZ4zC3ehumLi5MpAZ5u76aFzQqz",
  "key42": "5bb8sQb45g7wB3D1FGk1Pr4CBpahdAYukk7tE9N3cmB49pdPhFZhqv7fu89n1VD3hxJstTsnEky2C75He51NhpwU",
  "key43": "5ZdNg8t7wQDADzz1HiSrpx9GxK4XYQf1xvJQ52J7dR52cnEKD2DkMewY29qPHm1qKruaHptCvzgvNsAYu1bzupJv",
  "key44": "2zjGSQLU6PTjbYCZ5tcc1ZQmeCno95wmy6F9wXxnNPFBZhEgGLGEEW4RqTEpUUC6EAXKUip7JXTAEAxSuqjLHzes",
  "key45": "4LojUvXWQ58GDygPtN4g9W5vV6RTf94CsRDF9E3uWx6pcCLTQsR8WrLhxz5YoCcNXthVEyYY4HwyyP7AygfQcZed",
  "key46": "3qH8rQ21ankP4QaHAnJHiSAm5RcQDLWV2dFmB7Aw5ZiFCH8sUii5aPXLGru3LrV16ZMWQi6Y5DxPLhHHbaymZn9X",
  "key47": "4gPseEpJykZnYo9vxDkjDz42RLR3txSt7rKNJhHesQQMPsh2GcF76auAAPvoLQCHUhpQrYddY9KBFXxVAueU2ftE",
  "key48": "5X1G89T5JvcPRrQefCiHKTmWE8vXD9Kxru8KZC3bnTX1oiQTJUsxzeTEhx2QqaCAHywdPPQ7fqfvuJDsp54EDfUA",
  "key49": "3MowMFVp3QE2GoNWjPs2PodLV71QcXcZ75BuZ9ThpMLXtmsW8WdeVJA8pgtVy36x614S1Dvoef9f3vHkjiza3mXE"
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
