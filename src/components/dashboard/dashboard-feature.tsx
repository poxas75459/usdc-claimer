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
    "3NRtgZPPvXgmfCf6oPFtZbGzAwmesoWgDpMGwYAJaRPoTtXS9yPuscCWUHCMKLtqWW1CAhp1cnMddmPkFJvhdqoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ro59vZK1HcQGXSBcY4x6tnxCB9FkE9mfmKx3gKhujUk1GFt3opQ4srgsw2ByDrFnFZGCWLCxNocSTm8XCSfvEY",
  "key1": "2iXpCumV5ovPthtroQLi6fNaxMDQ4VMpZ6VEBd14Pzj3uiSoeF41C6iBD6k1bANDyoX2y2mmco1s1BNtr8Zd47fY",
  "key2": "3nzLC8XcqxjByQyHQprLeid36TCYBz8UqryTnCas6VnYoSrm22o13GWHgR1RYXzCYw6Z3vQcY4otdTpy834egTPP",
  "key3": "rHb677XTLJeX9M75GcUyLy5KfZb1cU8hRYntLbbZ2iJtuesp6PqeJ5R8xHLUSucN2TFseuGvSy6uPnB3NLGp3XY",
  "key4": "5jnLojb112iR5MM4ayiS27xRd1mhMr4v3cbZP2q76zoACdMonRA73zfrWc7h9sZtbN1dtTAqZ8VtweMk5DF32w8z",
  "key5": "5k72dqWEo6vUiYa7nemVQPdRH4DeuVoRznhD4SYhzw8FzmdKBDUPK9D4cj1EPS2iadNveaKzqLu66K6hgoZBa85o",
  "key6": "3GmEqGVvqHi7GPnSKdYGbJRiQt92ir6DZEgyYvnLY7wiza8Sze5Y2uXMmY7fcWEbMNmYvfzkKxtBcw47Z63oCj27",
  "key7": "kJwDEHxojhB3G5AEi5NxHWX7CxyNZatfbRJWakHi4Gcoy8YHj4QmYhDKWx1Zg3zX8FZinQueDync25u2Sg1AW5j",
  "key8": "4P24GXbyXoFfTcXGwpwxhZKvmsXtktZYmMJxeU1A6ZaEBPsCpC4RAW1mSx7RYHoN3jKH7ZKDtNBNQx1V6V4r7KGw",
  "key9": "2az5mMWhP2VkCjUrJ35tRBjZMJjRpLcLVpuqU4WLQzvz9PWuEhoobXuUZ3FByGk2LFz8nBrKakLx1vymV5HSzzkj",
  "key10": "TfKrBcGG2w9ftGAfP2Ro4Sx2RahqQomvDGyyR7JgHq9k5QjiYuXeRLUdfYNLeCuQYBaJMw9KN1pQgu4X2QsJ9JX",
  "key11": "MyM7Qze5aENfgunqsobEXhMXSy24by85zVqVMstyvgyLRWFQ3G6YGFpVWB42NFNB7ZwivJZAFbD4Ck8gsXYug76",
  "key12": "4WHVDiPchQ394Ny9zu8BB8XPXbfq2pL9pmvcsYWt2NqwRxMkv3aqXaEi6VLzNCg2Tq5doEces2W1TRiEAHovXRSE",
  "key13": "5V63LgtDQRPXs5MicCdF6se3vcDEZdTP3YTqAphGicoYuCKfy6Jky9NWZqiX8jHBU9WVFuuSJCwdqNHE88B8wdXo",
  "key14": "kvr6ub1szKzk3Q8hPoc734reZ267ZzN9so2gcHUgsDuoDx8yAQJhpCXCNTR3d5JsRRSoS4Qj5TNEpPbe4nnPt2o",
  "key15": "2WeLTPXrYDECeWWdjwDQLtFByaQemQC65zVMpeHcetQgAgfYUyMsCi59nS8Pe5JyuoEHvHCvpgNb9CDcQb95jD7",
  "key16": "23FsxsovyFfrGYAcz1VKtGHiDKzZK2VbypM5BbZ2DDhG6biV8twbc7eA4ChZG6n7JLUFPvJZYZxM2Ki4CzGmZWWZ",
  "key17": "5vfbD17tMNiV8VPGAscxDoDZ3QtUBq6u7uJyKkyYqeuPqLJKYXEvwGfJWgvgp1UWgaqdjfVCA7StSNt8fYa51THt",
  "key18": "2YtyB36M5XWsTtLzp8XLZmUvEcCU54UhMEu82kKAEGGXuJ7ZjE5b7rmUyp356L4QABq9wiwseRu7hpkhuG38s4pa",
  "key19": "3XQ9g9Bd3rpgo3GgvxoFfTuN3A2XrTuYQ34x2J7k17fkuwds2Mtax2SPne5cNS1uJws9ejmJC9kkTub88t1FSDg1",
  "key20": "iN3EbNvuKszzjBiqtV3shS9VehsMCuGJvbFMgGYt71bgnCTKXHC2941SshHHY774VuHj5xAUbtZ6WxPhCpuRVEx",
  "key21": "3qJF4r2LJWhaT6exeQ7Re52c4UBYuRJsX2BZsiWvxHeoau4G8kKcpaCEDBUCZUS3Lt8r9DyH77jm2LEomE3FesyP",
  "key22": "3mvDQE6KY75iMynUCyzg6XxWcWJ6ysoVWrUoEyN8CXZ82JuTXrFufjWmSQ7pkNKvFrJroR7vLqxhr6uzGdJxuRpF",
  "key23": "58YvWqzMh6Li3UQrxEprSWHvXmTXhye9ZACbnsfxSWutGGG6UKYcie2NJC5Vwpek8TtfXjEpzQoxAWHt9YeUnawH",
  "key24": "2NEB7iVaMn2UDB4h5xgn8tqc3aBaajMiabSDqU1y7EJcuqweo3g58SokRkh3pcxhApt9886FuYUKgJpshg1s9Edk",
  "key25": "KmdAyaDkDX2HsLWLZG7HAe9j5UMdRtjGMGoewxMPmYAhC8nxSxnaALdM9BYQJd7wbnGwz9PbhnDvSJ81VcE1Z3r",
  "key26": "384FZE8hezgphmtSykLD5cKRTvU5vGTykNbf8AG6m6sr9n6s877Ws5neHeJx6hE9sFTSKWP8aDCQwKdXuU8y4SaD",
  "key27": "5ADNtqXp8mGZJLSa3NzX4F6eokZc7Xeyncu34n2WzGhCRqjL4a5rBoyHFVpJmdSS26Msns6zizNJoxYM9T2em3Nx",
  "key28": "4zBRHMhGjt6vorThnjinvekNxfT7r3opkMXQQ2qDaN2goUnFMPsaCmBh6X8oUtZCHNrNietkdbXjQU23cUidtBeH",
  "key29": "5B2A6paWMiy5X8BRS42uVrRvhKpfzjvNuvxLaQnAEe9ZctybguxeDZow5HMM52bRCzujpLA18an1yzewUYXaeeiD",
  "key30": "5BWYhxbCiiXDEFSVhmrbZCxGVDp9wzNDEvxSmJfSNfVBwJLpSZkdLo8xGfB6STs3SfXwL4dhTwdmnSBbsKamPYKj",
  "key31": "26j2MWVD31E62SRC3RCxprd9jyNzWANXai7y77Yua3mtLxX9FbdTibTtVfrH5RYBfqy2HxUiRwhd8M6QFZTDtTH6",
  "key32": "63myFVNWdVxUcFZAaSNPNmZPkg8MKTAk7HAten3qBJY2RXFP69C2azQk9b9bf2UtwCL2BKpoKBqV96Rerbssw6n8",
  "key33": "A3XnDvsega8TZJrnEZNiPkufor5pNwX8hEftnc56Hf1fGBYMCpESdW9azW8obN9GFVWCHFgDqh6npLWPdwvSuiu",
  "key34": "eQBjYuxjWzUFaUmgX4Cy279DZvzNZSJ8LRmw19CE59FAdpcXvW34GQ6TY5PydoBHv1VDR5hxC1x59YPXHVHzpmr",
  "key35": "5zqEaodw6Cae2HJ586pEtDnmmgbtPANcBmXssCcZjk5KyuoXp7wrPmMwv6VuyufV7NKyDYJZB5TvJM4LiAeh9Qrh",
  "key36": "45UsHaoNCvsv8KSqAPXmpzPFQYTRgVmoRXBi1rbDkb1U1j2XrApC1MeeE6CYf9sEtndPAT143HAUpjtAVmb5VGpW",
  "key37": "RQ4NFsCc2G7DTtCWYgZu9EmFPJSz2QbK7QchcpY3bEdg5VMDwfk5UnxgVT9to5tkVab7hZuQaWmJvSw4sGxxZqn",
  "key38": "5kcSFJrUi7ZKRmA64Rqzy82r4fg4DxCHXBXK7gsUn225dmFeXViAK8SCUURMPRck1PtvN9WbrCKkc6C9DWsGjGEs",
  "key39": "5szL1mqxYU9VhypCHiArivHE4NMaK5fwzLypNJ5QJ6iWQpMADVeSKwGbmjKDuD79dE8zGy787orHcWviqzRprTJb"
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
