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
    "4v4KCSirNA1qU5gjow3ttnsTcgtds755ZLjVMoUnJeen9JEisT6gDjV6apawpy5LJH5uKgofWLMhU15ix32Dkn6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boUGb25WYtzHq2Q4YY3HRkBNcX56SYx7AVgTS36eGRM21RV9xWCXtm3am92qwTSohAQdQJvxZ7nsnMydPAPz4Ga",
  "key1": "tNfrc2Z7yodoP42xkG2Vn9tbgvTx9rJ2WCK4AK6RDpFbXMVvLhc2ujwrqPZzeUjfLB7W5LyPbf9RfDkPd1MYnDo",
  "key2": "36C1dJeYxqi1V9drcTr9pr8ZAqAZZMH6odHBrG7mcLKy9LUVbiGkxQgrG5DGwmd6VgZ3yr5hZf8XHpoMgytgnXR8",
  "key3": "332TaybRWZj6P2i4SjVnCx2kVaegT7PscQrmSTNq4Dx2SB4TDxir6wYfrt8M3JEYKiQGYWHThtV5d4B2hxJJuzp5",
  "key4": "5v6tspQ5ahPin88tVQvnwKsCaR4F83cNDghPUaPtrdPvYfcbfDimRiNbkGADyeKdqdRrMPnHiMfARMDQGPMrrsYr",
  "key5": "2e5T8J1wNNu7pitc7Mj9efZqFapLQq8VwRTEYr7VqPGoJq7sc2ZnAvEb9ZHLPZooMHB5NaFK1kYbY3gG1xXVhmET",
  "key6": "5fxNw4CjaqwMvfrsbiwygWFiPXA19PvxbaXrTegxniNrrsz2TMmXXs7VFCHC3ZRrqbv6SavHWuBusjDmXCj7hpXF",
  "key7": "4zdRRzMEjXLREURoUYJ9wgxbPiBGfbribJrSRhXxQPxUfWcqvRcmXhfjNVr4EitQZwP7jT5beXieoR6ey4x48vKc",
  "key8": "u9vzuDida2hSJt2tnnGx45kVCoBgt2SFRXG16RaDtgFAJAC4tRGB3PjiCFojeRUNgAAZxPZQuaheJv3BSD8xWf1",
  "key9": "5S1TuafdmsCiacRVMmS7tXDtuTeVLZ4VxC12i2TYH3pWJ5J1GQwwyxPjjeXj4aVQACnyJ56dLmZ7e1pH2cbXyMv4",
  "key10": "2uLvUJ4Hz37xz1xvAhnCeQvtx5MA5BePAKhtUP3ytv41Z8MkNuCuC43GGwfRdGWzCcjW2qb72GdaMdaKWEShRWV7",
  "key11": "ALbuv6wbDkfoyr7jwSLpvPDE1i1fYWFb71QQt5rufYq9m8PYju7NMLHGTdGTwXUXpE2UkLewjviFBLsF3C3224K",
  "key12": "5eRmZi7VGpX7PsY1bxEtGSojZ7m6YqBFMhjMD9GXFzbHvbTZHV1t9vsUKEQ2CmvPJkekKUqvcBVoyHcKZ1oWxJTz",
  "key13": "5JFu8J987evC5BscoURJV8qhMyrkUktrM5tHM3RJKEMN1HvA4RpyWL7eCpfhqMUQghDJanEpe7Xoguwoir6eAUJi",
  "key14": "279NugSXSy7Z6fAUydC5rq4y5tGo2AvFLYZnoN4A89PmoaSTkwuVPWwaRnviFUACpDRmhZT6W7S6x7f1PsUx8Qnz",
  "key15": "25HVcpNM3ebwjcE6G6RK2wTTBr5a8qQJ99sFYLdaojPHsUk6MNSthzLFoJFx3qk4Rr2zYY4xVMiU4k581M9SRB6B",
  "key16": "3Q1JpnbJ9VCqVvjJBejPS4EejxFqJH8b4111x4WXaEBjJpyvAfGH5Ar9fWjpStwhgUEcqhftZDM7eu9xRBdsGGEY",
  "key17": "Sz7G8x13u9brWBvN5e9mWSDzHTeceRZCSac6HhDMNRmPJjc55sxAnoUv81eM993P6ezNLmuDWFjntQJ61H7QRnA",
  "key18": "4LbtSiM15GRJmMk9NLZg1fj21rKsAmdBvi1W344CjPXrDKcMV4JLhVhfZFxrQWrZeHDkgYoiAFTgioVPDsT3iLWP",
  "key19": "2opVGQ8AujjyeYUZXLFXKEaMe49EcFZv81MzzuTPQ68Q1MGV3ATBPERvZBV3VZGYWi3GFiMRhCVr7s5fLo1RrKsz",
  "key20": "3PVxAX1YUgti7nQx768UsfbngaUqSkB1DQqj93c1bYHWa4jWG7ch6x8WfzxU8xRZH4XGXikYF3bmP4JrnjRSCkaL",
  "key21": "5m4Caj5hJ3XrgSfALsTaTrwpm7VL62Ren9moyEb8uR4CBbn1ANeYwPgdxq8Nj9FPSPnL3vx5hU9nxqC1RxxDnaGt",
  "key22": "yYWXdr4B6wdYUbgSndZ1xA87CHdkbyJp7gceK6QkZPbM8VkAcHQyzToWryY9WENEBnCLkj1ZbTxQajKsWeMZS2a",
  "key23": "4JTDoyPWtn9ffZNzPufAHKajtGTaFoYsLZCVmHyu2gpaSgKsxpnrziNYzXaVmy4dudKVnSwjNqKYSBGU8RDJ76FN",
  "key24": "4NYmfPy6hCLmrfv5Dy9mYm6PFN5nSxWRrhqUQmAxtGbqQwV9aJLrvc9119ZKTqHvasx5MtriTjjeuiYAyXm8opBw",
  "key25": "5De8EkFvrnHFeLHuBHPEGkXzJisNaQSU2hZxV3pvqjTda357gsxn11erhZ7Ry4S28dGHuFXo2hZWV6mpkTG9ypAU",
  "key26": "4Tn7F2PUUtDM8K84hjm3oM7pbbEB9chDz1mEYss21amnhtemTJiXh5XXNfT1WntFQoDcz4iVASjdAywNvARicU5P",
  "key27": "3t2mTnQGnzAf2oj8QfgAghT4Yo3gsjh2nzeZ4p3eKDvKTQn9V4c2iUxmaXPPr8ZR7d2Ubou3R3rRHrRLoQyP82zJ",
  "key28": "3Tcz6ESSMaRctMr454zWsJttLQU68u794Pt6KVX4pr61HkW18jXU5TA13UvymncUNsWUKFNgAsKRTXJ5r1B4DMBX"
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
