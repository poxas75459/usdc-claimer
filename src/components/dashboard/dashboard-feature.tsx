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
    "2MPPCCmxybm1vjSVU2KGi2hpjdR2gLJffASzBy3egNFDiU8jQa4X6dYGH1wtmAmoQaqhmCgYKuELHdUapEiDHBti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usj4SqWTTaNWahT1i5ZbWyYRu6epp8fHG7Sgde1ba52dBm9TX2zdEAY9bGdNtL8VbcPryNw1bfvNM4qAmqKB5pu",
  "key1": "64v7hQfV9pgUKqqtFH12dMxnSqYhHLKziPKaNVxgRfvRCgsAgZQ1yHASZKbeFSU932jyMVrLcZpv2MLZJGksEpDS",
  "key2": "SPAfnyQFtWdFpwhaJ7zDYipSnLNy4G84n6xKF755Lo9r2sGscKaajysBRc7hsaVJnd6BseC7vnCmbAF4rVEsD9q",
  "key3": "WdVpS5JcVUTpoLcn6j2ZSQvM8wnaxYMDBAkN7ijyw1s4yrzzWY2RCBJgpkaGimfE5tBKdwNC3Kd9kcQGQttAsXx",
  "key4": "63hkwarhwexfGQKT3FXD8nfBRs1FmJQoneNQQAwqHFPKPz9APB7dpwgYT9fsLpxk7XR7CovseFievbGcCtvEH27J",
  "key5": "3K8xA5y8dCAVuNFTeegjmnmY1yJQgguH795HKhpy5bZuL2eCfyKSW43nwTaKLhpJV2YBtZDSi5ASoYqJkhSSCtuC",
  "key6": "UjzMvCib7dp8JXHahQGNCZvkXk7Qo1YcV2qJA9FsWonPpgENdUSka2nihY8YipHaQxfpgj6FvsQA6p2NonfsDcr",
  "key7": "58VmmGMLsUZ1QarG6gGrqAgzF9r91LYPhjtTYC4gCcZq9Gosiu7cDgmJojbsqFJ8ih8npjRYPzvEiH3g5hpjjgwT",
  "key8": "3ZEmzAo5yDSF4mLuUsPthM32BQ7LN5iAkjgkQztpdyhoXYzMsiTuCP1M34MLe793yDdGdBttSiQ1jwAAw2gsjPJY",
  "key9": "39M5nJYBvStdomqF6RzTaEUkSbfDArJP48EMMdCoXSkFVQKQbAGgzTu7zgP6WiaRMeJGwFYjt8msT5TBdbQVbm4S",
  "key10": "kSfDqHXatm9JL985cUKB8wTZk2U47vBSrWrRNRGMtWDJqqcNxyyU5u2MfwTB3u92XU3XTYXgUwASoSLQ6ryA6E4",
  "key11": "34FLLTmbd2MFyVJvss5GTkVaAhdsrfQGExNXBxAZ2S1KTYFngbac1tQXwxyP2KZV52FjmLV9YJbcfSVkmaXmeNYC",
  "key12": "4gfuF9eXVdjCZtzkYL8YzCUKzhGnubhug7g7Z9GMBGXkWFH4RnYUsXgGcYgzJ1ktA7JEtfYTkxd68gCshDBEtzpW",
  "key13": "LQykD7rBtiFvFiKFwtHmpHQ1FFW4FsquunpRjA5Su8xBsEuzUpSKnzfibkoE23ZwuuFavr2Ww5TauroNoHkfVoc",
  "key14": "X7YGXoToo2TdaTX7hMh48hBBhv4PMA47Q34BuH2CzvAsArsYtCRmg2WY1wUb59yGhQRjjPH5YuJ1PdCTsUsK9PY",
  "key15": "5Cpifm6hfhPHUvgqni7VR3UvwKs2jicD3e8hE8uCJgBhPRseQfvsS8vbEs5xRuuaz6WuyFQjGpa1xTRSzsdSuKrS",
  "key16": "5bMywR6ohQYJrVHUVrmdeACXW7oNUwpuS2oKZNW7bLs7j7LyMzbc6ZGoVJsmWpj2WUfQ7zFB84um36pXkHRyaJTw",
  "key17": "2ELGHNiVe1bjFGGonPtzsrGxPU4ht6TyvHrR9zmQyRRymhNBKZKDy9fsU64YpqMfJRYXkoQY1ckJbWH1tsXeG7FP",
  "key18": "4SAdFCpenKh2sS9u71eNEYFerM4tBMJyXUHJAMzz3on4RofUpCJXveLiFUtLFHLRYJF8TJ5kKaBF5QK7aTUR9ofZ",
  "key19": "4naRdqts5KAHQjPzUgNbow6PEsjhVVDPqypseBzktohCVs1cbjfVWqvBYx8iNfW28MFsvQEnsvQ4FzUZGB5Fab4e",
  "key20": "NCyFXgU6EZoDp1SzZaRJT2HZqz6tDsGqbz81Za4qcjpcMfjiXeeWUToNPqBZ13yFnvcWWJPxr4g3Lv2uv4buwN8",
  "key21": "5oaSAzZ7sdyX6k9yXCXXQNvUHm1KFfUy1KW6i5Zb3n5ALU9YFoRaTTb5a3X5o3rPLDSBpxT9AKeDtirChwbUbpmW",
  "key22": "5AetVdsVAq6R8yknXdvpxZKXjZt1k4AjEZ2WtSHjiHNsP1sAwvFhpWmoTyDF4ZkXbvmxHo4TvsfHtHpFoVkUFPcX",
  "key23": "DL9iJSDW369EBKkyMW8cfoAdVt1FyFWmMZih1eAX3yhv7DhWKZz5GkqyecYtJbEXMtCT99dPKFiJne7NtDDpjsX",
  "key24": "5sEf6fxRqRgbMQHSoB2oaVvjByeLJZBzxoLGx6tzmaoUvucFQgRr8YH4xH2jvXxSnajFzUn3P9diaNopLcirktPC",
  "key25": "4E8yLsaDLS1TDJnPPeAyBCK2VtddT6SaAcW8fD9xsHHnQuLDS141H277nnt2ddyJ1nKc8VoLF3UP26AP7qs4KdMp",
  "key26": "Gr5mYnvRLodXwF9Jy7tGzL3sTNjTGzC72oqXrohfDLfhKJUH1FrE9stK7xBGyd79h258fBmUiRSoFKfeMNNfmbK",
  "key27": "3AYiuUSjbh3MagBC5xJz8rnQB16p9epGsdtbSCoidk1DaLo1qaP1LrLnryvAHsNqrU2eJ9G6vLW3GGUfkHTsakup",
  "key28": "4ecAEZP1ZX9Ev8YMB5pXJy55ZL8TeRayr9YANLL2EbavW4hntETNhtAtWrvnTVFcCz91MzMNES7vYBe9Akfr1sce",
  "key29": "3aujobDaRY92Rt5SPg3NaiFgSA1V9WMXJW5ZxeUL5Jo8DE5tzKyDsxQfNaKRMfRjUBWK3hh9S3NVBY3D4NkUREsa"
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
