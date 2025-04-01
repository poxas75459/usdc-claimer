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
    "63ZFVPHscGLuXj8VMfEXFaFvLvw1Y2EFq1cvrpdSjyJXZCwVR3LXGmkuN13LfwbgKQ7FU9Xp25S3rV9PFpYVjAUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FE7iTzxPfmEEuBMYmQWkySiih5JP3SP34De79d6C47x2ccH35Vq2L8dbL3zdDt9YojkhZhc4NuvXkrhFePTiVH",
  "key1": "acGEf2AXmu8HttyQeWYzhudZ3VU1ouY7zRSxhb7DGXBtngrxCqiZv4RXkwZHgQFuxcxAi25kHZdpgvyEFKTtkJk",
  "key2": "2aBXoaGUvS8ou6Hs1sg3ZqECduhpKweBvFBreukWJqqZYXrqcxzZLaZK8Q9bhKohEgAdK5sJrPmHwjWe6WAcwtzB",
  "key3": "4ayBSS4DoBgwfxEFr6zi7GHP7TSx7gDCVQCuxkirt9opnjgMyKWqvZSiMdeQ8ufgdTsVeA17dm593eNyiF9D7AJF",
  "key4": "1hgeE9a2d5mNUM4Ur5g94XExjjDFCU6gd8LBBGpK7vYKutpPEHtvsZgFCnJzcrrSY1HVFs1GnNuHgN2uhfir19Y",
  "key5": "2ESSWr16RuygLtrcDvdC5PhX8xajqswVWw9zEReWV2VBrsfvvfiMbKXm37PqSLXAzXznY3gbAbPAnkuLgHQeGw64",
  "key6": "3hNr6vF5R91oavTgANvJ1W4Mv6PKZsfHPjoMRGtVbosbGduQKcac7C668bkPDz5Efzypu7339xZ9BzjL28bEex46",
  "key7": "2rpmA7VPT293QLcEjuem1LwxopiDi8LaEsEdvvqfC65CYp2zoN56qFdiyH1TBPhmDpbrzJQyPrVEhUyYakXZMVvq",
  "key8": "24qVDkKrzqBvCU6qJWMKnxhwfWF8ayYwsUPnL65jNzxhjj6zSSiixj4dtkZgVMb4ZQLTXF4RYRLnZy2VuovmyFGJ",
  "key9": "5XUvY3jFVevAry8YvdxiFtvVSshyQojjZPHRWXYvw2h6UGS18HmwjGD1ARkvG6S6MXugtxidJES1vCQ2Wpn468mQ",
  "key10": "3Q9bATvUbnaeyrnEi2HZcbjLmRakuVPnzjo7FWv7pTNS26nsHxrdL8bB3kZgBBNCwY6GxwgySyLe4TYjnLPRXASN",
  "key11": "3EG879eTVeRtRFLJKwronUZohtJT8YyzcGM5s4Nbai2yyUQCEbY2M2gNCPqBJ7ZMj43V9BAbhvk4wP8DVKKYMzZu",
  "key12": "3Sz4H2TuvpuEhdY3unnFKzE8VFX1dAjKwZay83YjEizmtSsMR6aZwEnvwhGcxjtmxuZWbBZ39yrr3vjaSf23kR1H",
  "key13": "4BbBZerDbAmD6o1NW8zfJ66JgFSrEzq1gruqBjnf2JTMePfxbN5i7QuK8gKDz1GZD1DpooXw4pj7Z4rzwsDeGexG",
  "key14": "5v9KqA9ft1TrDXCgQd6Xkp6BPg5oeJ9e96qZWEfPJcYotWmBB2UQaGJeH6k9Gv7LDuCCArNupMfFKByC1iLZR6NK",
  "key15": "4RLXj5Ge4zTtZ52xLc4cr9W72cS1zsiXaeokSTrCELsZftt7y82zRQxwmfsZKG135f9qyTcvoyY1BYdY8SAqAf37",
  "key16": "2guUQb3DTjp3MXCpL1pmkYQH8CgT7AEBWr6WB7dvufetvQao8cn1W94YNRmqh5ZpFzQvwzyaDuCyvhmzeDq4AJjW",
  "key17": "61tsdtWAKmGAzvJ5UPsHLCh4Z9qLLKpHoym9rxQEnaZUxG39PNrkjoWr61wPFnTByPfuGgrgPQ7monpNWpcRAQdc",
  "key18": "gCoFGMKifDDRYLzL29CcosyoZ9Hmt1ZafRTaRewzDJp9hqAPVrTVwaj6cgzMRG3XCdrtgX6iiFcZhB33cg7AU2D",
  "key19": "3RVHQpTBs5NVeBQhtfv9EhABGsFRaNFwUGLrnqmHszd6k6ZrFJRT93RfMR3QmKPmPeNR3JLNWSeHiUvvvJtkEycd",
  "key20": "WHMTD76vyGtNQSNc2DaLYgLb7aYUsa5RzhTiWV7KX3KRBthCPK4sXoGaP97y3XNxNcHMPoabj4JvBx1u3BaTWv9",
  "key21": "wivvsW3Pu7WNcBhbwDH5fbDNcsGtvxUW7BgrcyBQeGDCYyYNVJKm718mWA8PbZApqQqfiEfZzQVDhrsQRKmLQc5",
  "key22": "3Lm6TDiq5PATtHnT8jJ6X52mxjKrVH7FQh9GCAB4UQB7rooE3Cs3ZpxZngeu6iBQmw695Rh7o1D1ZFJfsWjspRi3",
  "key23": "BR2EGdeEihnpabpgu5PF6zhCoB2yY6mqoPunKaD1zRB712sdWGjW3z3UrBE2dRVLAtZ2u6uFbVFUhhniotZYeU5",
  "key24": "4FFSgCTmgcJTvNa2UzEKgHLcdiJ7eZv93g9xRgufdt5bRWuECpk9781apEUAoKNgrfKc55XLn3VwbYuBwqLa71fr",
  "key25": "5qqz1iPiy4UHDm5VbGuqDXKdxAdxwVSbz8eU6MfeZU9sAov5ZQdGGQGXzd3sTm1JkBF8CqZwLJwkVrgaHorqNjid",
  "key26": "59m8yWF8CZH5gAKUzAD43vvRTzgXV9cvFnjhvSHVgfAK4puewXh62qjCZr9CLsFz6Sg3vQg5aeqt5idq928Lu95J",
  "key27": "hGLyPRDoPd9nwfkszTHgk5gSiKPbb9ZiKqmuWu6V3ogq9bi8FrP3kHqsUrM46H2c5fuwBGCvF1k9kvJdWfgVEtH",
  "key28": "2an4YaZwBbngL55HmbteTaXdwa13cy2uMoi5yKduMhM6eGcEZp1SrTzfyjDKCmN9KgGChBAafVtkRayyAznc4ymd",
  "key29": "4yQMpnhdrJ21PFwK1qZcRuCWf2yfdLGmKwPe2czQpUXLjGrmSJ1skFGYz25Q3PYUUJ3VAcjhyBgAHcobN9bXJEpw",
  "key30": "5pjT74F3EXrfbFrbJmpXvbmG5er5Kq3PBRk6TATfgsbgmB7xGcLTz4V7sEa5LQ22En8HgvtQLLU9XUMyF8JcZjBi",
  "key31": "5b1kDjLcCLx4ZqkmcqbELUh35bQNEPaLTaVVNf154wgupjHxngscnwBqV4RQFDxcBGNnqAWrzZXYjBao8n5XkNT6",
  "key32": "2WxunghgoaiMLkET8jkR1Kffx9f3EychUz1Fig4q5jyzVWNmxhzL9aaSHxwqrcepnTid5832mPJE6m8hHk9vFp5Q",
  "key33": "YumqfD1JDnziHiAqaJKz3eRTonZemyBdJ3keowcTWsD8H3MYq1NiUjuuFaXYziknbtaGWpL5Rr1Aw5SqPwb7rJs",
  "key34": "DaJPvD2DjfmTn7quZ58yX377vTNWS3L28Qp3mEQTJt7Yc3v3ft6c4Acz5uc4UygjWRaMSpqJVxUqqN6s63Stk5P",
  "key35": "MURfUYPsSE7zbeUonp6FQdJYKTd4FNU1dFHVfSoy8aQbybyBSa7vJ6W9ADPj7SpFXysZop9xwoMcw6FuxQtTH4F",
  "key36": "4oiCCz4uSsZhQhWu9AwVRqGcS3kuejWzLiPNhmac5SLqdzqk6dVXr6DWWwmthghyUtEThwvRBgTAHk2oAPCGmtsa",
  "key37": "MWNo35qb2KGNan1ZAVyqyAPshQr1RyQ7cL2eobw1gRry4Yh8r2zJd9r1YgdWHzjd825wM8kViWTEUEHZJtWBg6k",
  "key38": "3gceuTyE2wdo4A8U9dB6NdmB4Avonc8tWjbGyV41qsmFpKnZaB7c8LChuFtYmDmDsfXuDHWBUygdkuf1HvHpDtow",
  "key39": "37u9E8kmisYtwc7XWxhzfLGQzxeegKo3d9JsRj1wt15HYhJfraBojDEGQEQAZsXtMkNUdXoxGMGjiYE1NRV7ovzg",
  "key40": "5h8eHCpWutCSb21kVKhPdTrNVcAcfRYYpRw9UX1NYEugnmBYrGgLEAe2ZKj1Zvmg1wrBmSpP5wDUsBM2y7PgZqWe",
  "key41": "VJg4FVUodwfAEzNJAKA4nm3L2sHxGBX7j4AASPknRPdF8CzmjRd3MtZnZ8KMxefA7UiXDfQqpsKXn5SzTD7cvVG",
  "key42": "5VkXF2viGqzf4DYnpuSMwakBiyuTDJS8eJm2jULPYwFgEYz3UqsUgoLcpRRE8GJQDFHMEheBwCgfoxWpZcUG3NkE",
  "key43": "n7VgMsh35cikDctgrbG7XkVd4sSrEV21UChsczCrwmYtXkbRHmew4f2j5nRHrMRLzkjfiZXAiBj8kC3DDhoLo83",
  "key44": "4C8tj5ky5XwibYBVUyHQNUdcMvAXYcW9E1PHpvFJeTaTmSwtPUSLs2E2RPPCuNSkQQyGpHAcTnYPFBx1UxEvtJy4",
  "key45": "misQzDUYnx2qMR24SjEQ3dt8V8vHdCYMDuyRXwJ4WhP5LUyCoDbVzZzUsLsGjd2UYxSk9kGR48SFnQv9q3E6a5g",
  "key46": "kYpntgwEMgbVdfD8W7hXGitbcbFXdNjJaLTKUyAuVRJx4cZqTNHMShvVtXsWyBNw8qAELKZFhNat6Hbbkh1NNGw",
  "key47": "5ZGxtQbiXWyVwC4R3bRq152RhPS8P94StexFscK5ZxbYuTE8xMFockydMGZQMEBzdfhTnFrzo5TmVc8cifedaWAJ",
  "key48": "3vJhYFPGAhx7rJwPUbPU3gFqtZPecA24cUwAqiZMrbnRsUZbQVcXd9PjPtGAwgp2wnZjJ3w4AFtdy6VwALQTVyaH",
  "key49": "38oUnB1gfedixnhxNdGS23Fwen9PAEes7tXteqzys4u85Z8SGnckzQ3aHuST9e6iJ3gpzzgfu5YCo8RV1wP9qVwq"
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
