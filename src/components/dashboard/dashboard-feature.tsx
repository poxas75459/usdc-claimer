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
    "3s3Zde97EzgX5vDGLFXDRnV2Epnt6tVfJgFU7XJ4F5V1gz9Qpcf333qqbXEVqEVk9BycQq7o43816APrZtAW3fSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQJu1M43GdMFjRsvxiF1ZvgFfsdgF8fkx3uuKuPVSxtMfsgc8WU85kMCXCRCPahQr8noMKGKA1gFQ2vQFRiTa4b",
  "key1": "szGV1WAxjr6iroUWYRTgibwvNtorKGYncsF5o5HrbtE77fTReCcxeEzhuiHJPG6iLim6jfhx4ysKVJCao5dcypH",
  "key2": "L9SxZJeqy6kvPEpaqRacBkCGAxT7epKcFCWmEaCyCCuev8o9yF1Gzhk43dSrVRKg9jiKRWUgKFZ8kWcWZxu6s5N",
  "key3": "56Em77Vhi1WNgm1b9SVjaHkAnFLEQFXXNMVVqSQKZywW2YfiDeebV2xWU7jHEsDMrKV57FewmJitw9fJMviVzsGD",
  "key4": "RbJHq99LVJLEmmLgvqHm9jvFXWcytLZbQihNX9eiN6c5d9RZSdz8o6PsVt6Cu4p9BbmMA3hs35yHUsvSdRz9fY4",
  "key5": "2xWqWrpzBFmnYYTZSQ3mhSGPTC8wSfpVTJSYKjTJ7YHhccG61c5c6MA8XKKU1M1tBDfbiMSJ2uV83zEQs5gfGJYB",
  "key6": "5pP6kWdzL74UghdJwndSCuCBSghYm2wKuZLGLnBV7mUFC68Z8JukbPcnU91xMV8xApsiqA5abwx3qucvpV682rXm",
  "key7": "5i1GgJgHtLGxCkFcEVYumMdbh5VJWGQ5fgGFzv6Cxcyxj2NMo8ncSgRuJLc3n98vod2EhwNzU5ksHC6JdVqPsUii",
  "key8": "5fCL3neUEZydxtY3jFsJwMaskzbg5kj3Wq9frChL6bwkX1QCz1W638ZEHNUftkVadUL6BT8PR7Uq3xeYDNNLtGVD",
  "key9": "4kb9fAgiezaUeiqhQrzrdu9mNzPVkaYng2qocMhZs44SKmiUJjpSuTUhwZg8zs2NLmDv6FdTzxWjXSMjHKthDKK6",
  "key10": "22VodRgycXviTGWZn33VX8NLehCRTnVzFDZbTAt15mkrV5BZQpCun6H47AP5mJ1MBZjg3Jbdn4Ghcvfo76AnT7Vy",
  "key11": "pupRhJKs3ezBW6MDUdL4bir2S3jKphihpbd7zSugnJfPiZZKzZziR3LZZAvfVJgTPok373rFxKLopyQNVXKQGt3",
  "key12": "TEcYdpyZGgzpHpqXohJD19oYncdM6kUNmbMigbfid3cinCULfPrg36edhMWinP1JYVcdMQvGS4W2rEoqjdbWkjs",
  "key13": "3mZKbS4ytCi6yqoDPF76AtimSpxh6mno5Ur4VRjYKqKrnNYTxr1ZgZMB6kXUAtr73eefboNq98i4j8VZQ6irCYWT",
  "key14": "WV5usTaydmNz7hjXFnqhBevrkNLTq1zyrSXawLP3HeC42xLNjmwA2pSeRwBKiPWWr1h1si9PMUhQuy6WiCwMuNK",
  "key15": "3LPjFU7gCP8HTb6rmttgmPqS85WPtA4a5reA6NReUstkVjhwBGBRgs5Q3MNMpmeyFajr5DjCPanFnBTASK2iiLdn",
  "key16": "3i5nBQQmrFxHBT39uBE3nBTKgsmbga9JJRRhH3HWYgeXURSy86Yez6VrsMwnMRBLXRvSRfNt4iSawD5qaXi2hWyu",
  "key17": "5r2R1T6BwWVYkx96FXNdVJiKfMTk4DVcsiaxZYXNnXivuEifnDXka5AADtQLgzbZWjvKSm2ZuDGu4UQx82cKVNv4",
  "key18": "2i5EDTyhw5q6WZ55693YfieLKimUmARsqS9NPvBT84ZA4BWgo416BzjczhSBXSc9CNczC5fy94ENjee6y7Xa1YAF",
  "key19": "22wDKtjia82NDBSbBsZiVopunMwL9VDzaVonAj2QsUcay49mAxXd8WSBuiqs4HoTVKNHhdYd5GQfgsaXgUd8seBC",
  "key20": "4k9cEszZE7cermvmAQ79utbK1S7mPVfySuT9Jx5Q5jjTCJSPgyVF3BxCNDmygj6GnY2DgygUQoUi94nRbwydQe3W",
  "key21": "4ycNUg8SkrDjfiWbSVAnaWq4AaLUCuiGRVx9ip6NpXrrbXiRUbWb69a5Bu7XScSKi2aPZkUAqV2v2DfKQhXVJkiR",
  "key22": "Yhjhy2ZisYXsgo7BA4wu19bxUkeTCaAiHvAQTFtFwR8aQdP9TX4HjSGNDVtz83fSHS79f9M67AWe8VqTm1mBJEQ",
  "key23": "3kXe9b6Cv8nuMWt3HfgbPLBYWkHksSeZPiRQvK4eGpJsvFapbtkkEPmgYHhi6QJLppmuYQVednjYJKWPXLhX5gfa",
  "key24": "3tCPqWa1kehbMWpC3ixounoAvFu272PGgGDGASJV2MMfgG2CiZrrGhWyWPo5PnEJCDUiwsiF2RFrudji3DjspNGp",
  "key25": "3x4xyQGbrRV17NLvnPv2nrNqyduwECweHsgFZhDQEaLpZBtCiKjFhy6hYgymeqoMEN56cjSMt4vnwoiWuC1o5BZZ",
  "key26": "3MiWnET8iKWYdiT9QoVMhFzF8WUskogvwEW5eTM6sErsjH8mzGEuN2stwTdZyshomuQu7RVYiQ8NQvXg8vg7GZFS",
  "key27": "3stgoUejLRASYcEGfopbvNyanhYPUU5xtSZYny4aXb3drT5TpHTt1HPHMgq8rDwrNsCcnAL4jwn7FVLoaJmdUZy4",
  "key28": "4wAfxX1svCjt9v7YnWquBXTXnWJ9rFM7wjuhWnshD3yQpGDwhb3EZkBTjLXTWHkMQMze2kcaE1NLR5uUY6Cpkp1B",
  "key29": "587r5Vcr6hTRi7Q6QBGtYxnY3cvpFnvJPvwuw3Vb9B3aLhM5UFuSJ1QVdbAwXL88CSNAD7ruu7osTwibk8xzcRRv",
  "key30": "3CxdR48MkmyUVPrak3BApSQMaiAsSBTDeRD1vExEdaUeLvX1X727stYFXDWmdsuwpx1erzEviWpQSqHGL5EfDrRd",
  "key31": "3XVPwHiAdGsRHhDqijem8VqtFXmdngQgMo7soMdGYBYczuvH8doQCvXTZ3DGi92ia8M2y94ei7HhyYgXqq7hSUjE",
  "key32": "291M8QgQEnrFppZ9tebzZGnWURo6eqUeSavLgTTEEQQV4yBRodnFUGZjoPXTMDiKo3z6iVtbKw5hALHnQ93je9zL",
  "key33": "28TuSXucvF2vM1ge1oGJ4uRBfngi2iF2Pqif1NKZdb9Lj2RPeUMPPuBaHhN8CqawCDYSt9EL1Tknwno8uFm1KL6F",
  "key34": "3n8JL4Nmir2N36QkiZQxFyqKqGMwJuNbFeSosbcMgYmN6us5Ld8DqY8j9BZUmyaWpbsNLRc26jowhCtJzzoVsPB8",
  "key35": "R3xMxD4f78v4ueTaqB1SeovirFCuApGTVfHBy5xEYeHSJnUz2h83HgpjfA6pMKQoE9YXdfQ3UEh18cJrfdrBXLj",
  "key36": "5EVcL6Fowxs8yQSdpLbMwgTk5et8LzyALfvY4qawY8QpRx9tfFPiVH5RG8bNjSoto7YPMmJWAPcfExTECcP3yT2x",
  "key37": "Cy5bL94y92PBS8ioNsCphGVEBQVCftv6vqa6UBnCzJDmYTbK469rPsNPBv78tikC6qcjLuRrDJ8WE64SKFVdrT6",
  "key38": "4yEgTHSK2NwPvVBhqwxWoSD3GV9V6aPFthw986cWjr2xSvbx92JbA2rB5hv7ReDmWf2FMiYDSrArkFz9kzn9SNzT",
  "key39": "3AC528nwVGjjZnuqk2EtGUuwupDvSxrpGpSnBk88ivvjfnJaSxGXFP3ZPi3XYsdbitSbSb5YFvxXJHrVTy2N265z",
  "key40": "5nScEMVYGAH4WfCvZDvkjqj1iCkGL5T9j1gWczTYAyvrbuBiJYtEDKFZebB9HfzNHcstcNzv4SqzDtzGNiTmohKp",
  "key41": "2uprSbdxKjkBnnXHMAGw6T1ZpuZ89JU23Lm6W2CAJNZM2duEX8Cam6ay9u6kCg7TZhSSYsxcHVVMvd4XdXaw4rxd",
  "key42": "3Fnq6U3bprLLRPRT3qJ3nYq7CSRDTUcxNk1nJoEc5qauX2rN2rnRGBe2y5hNNnDvapuyjSDdiahA9xPgEApKQivd",
  "key43": "4SjnKfyQ4ExVUUqTSd8wxVFfP7SU4xxu9DrZVjNLnN8KS2rhtv74eV1sQfkKAp4zJLQTBvBQxcdTKU6ZNHdGTTbZ",
  "key44": "2CWY9bNVdz2LFP7ZBq7C4oFq6bn8ho8ZMVk8MRTiHnE19CsxY1SSWPYbgng9fspgzAwrSiEa6Q8tb5XccTxRfnAR",
  "key45": "3zGxUSgSmeSNFxfYKXZ53KQEjXfv69d7emrvNg1YJ4tRk37nAcN1AB6LF5Dh2NmbhdKYAML3uRFh1L7oErteaM5M",
  "key46": "64FeYDbxC6aTTvZDFXthgHiP4TdBmima8DdUpnva1uH6GHvp4pYXXGctiBcTA4Rm2BFGg1ebFQCUm3vQxDGVWnZe"
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
