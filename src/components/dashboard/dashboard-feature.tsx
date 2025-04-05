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
    "2Lm9ADLsA8nH2BEDci1umYKHBhvxSudu7u9Lsc2E7VhTb6qThGE97ne4edtsdhyxKVewW6aWXayBRmpu5xEdXTxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BsGYNPihVwPoHR9bc3j8wTjSRbUqoAiUQTweS5CTNRBG1KNsQVdUAggcR2ZGrw9jX6ueF4qtcKMcpzWUi6vCXCN",
  "key1": "4YqUTRgciad4kYUaoLMJKtjFUzASnnzcuhhgDT2Sw7dsjjg71JcEeve7hu6caaWT5A7aB3c9Rhdd5eGhzkUwkYmr",
  "key2": "3q58fb1ANVfbGf95zQkddvrK8MPVtejpfvtJXFpnLcUyBmqishU4vdxxjESnJihHBXZVgN9mxTsppByWxM9n2Y2G",
  "key3": "5QaRVs1LgbSCfz4mCfczUyJbq6TneC2uakszUSZ6AkvhSWmq5Qdzkwh43drZgPnH985akwuMNNWm9b5kts6qP1k6",
  "key4": "5PHu5ZzHQMjiKQjN69bHURZUDmwKeXDXHGYSUCtnfSgZrw56Lbb9rMRGecejmTR8QfmSqJejWRrHrgVXWqHrxJ9F",
  "key5": "4BpgXnApwW5sVSutJneJpEvcT5QwxbQMwQZVHweao6eiSfbXhTBN3usVBCGXs4dWPpWsQdXZR5bVkeVcVSvSja4k",
  "key6": "Xtpz8TW54EdLhk4ZLMhQkGDavpkfn5ZzYJc3tsmBrG64PN6VEtmPxWjHtkShpSZ3wSmiorUBqC9KjuMh8R2fcRp",
  "key7": "3tUVJR9CrezcEUJUanJq2dHkiTHXd4MG18A5zWdCn5VCJcJ2Tn4iVq6PyScnTKX1fZKwmviiwChy8fBaexhRLZTH",
  "key8": "hna1wPP4wgfZoX6FCxxRD3E4bPWBXTDooMv3he1vPes3c4nLGsmDBUWn5nPd1N9z35QCT1VSYiWGDpvC5cYchNJ",
  "key9": "4KLFg1dRpoDwfJjE7hNCzGjNwi9BFxttwrgdinjrDUTNrxLPmXNvGxTZ7CbqRKTXqxwQ7yCxHKxJZqNjWtwmV8z",
  "key10": "3PFxKbdwnfFEyGzvXiDZ2iYPV1VW3Bs4qy7Y2xu6e4Qg7PE2jW8qfLBect8GbFf1DWvhf5oPjeoLEdSV2HeekWkt",
  "key11": "3kCfYD6VEKy9BgJXemhpJEc9BwTHchKZjB2AohEzdL1x5sEFj4iYoG7ssWnyQ3oHey79v9eSaU5b7grDEws69nnt",
  "key12": "2HyFLZULkNjCQeomQfJSToLTtJvUA2Qv2cU9tzsPMgBe9n1CfAnXfbjtWxBbVdknoZEU7dZmB1rRtSRzVwtsNhE5",
  "key13": "2j5zkhnFrbrtVPA1Jw3WuZEWvr5kJSkf7SUd1ELc1VpEbrG7juEihjU7gSpjjm8te94crtbrtoNSEHwt1gm7JQea",
  "key14": "58NPGDCQ4qeX9Yokf6oxroRxqix4ojEcTsgYMixJh1EVoJFLu59qs6J5oFfEUg8J2PmW8iGXsPtweXLMNjnFzyHH",
  "key15": "wpsPfvKYDBqNUfZtNHE93wgVsifcv6d117TVCnmJ6ftVZjSsa6uW2suoMmZoJQnqPzb5Dqe7ULsAwm2hhijCX5T",
  "key16": "5742o9dKB3piXt4kotK9SeW9MTdkK769BTevZbaeqk4iJTWRyth6oFMWg881Fskp6Ao5SFYZ5vvgNyi4YUgXikdj",
  "key17": "25BxM9wkkW5NsYnTC1XhajLkRVMhFmpFyMgeU3qt2o8Di7kkwu5krMXFWGHM8YhSgS7fH4wykSQcpYEtuyzqkNMs",
  "key18": "aADi1bqZm32HpMFWoA17ZApbgJovh66nnxm9pnLU1Vz67LTUw7b1Qavaw5UM7Mv1fyA1AkfGgk2WN9beugAX1d8",
  "key19": "3Q9QLFju2ucAsZ92FZDetA1JNjKAq5gZYf6VjE2wtfDrEiyjWTh6gzi8yAXdiYRbo7i2NfX2noJaVdQfcYvmm6jx",
  "key20": "HqdfWvFGWPtjhqppqTxpgrrpKBiDqZZTgxSVJNwN2FFJNsNgX43di1LEVib111pXJ15kVsuymNLq5PGmGF3uAMS",
  "key21": "4tZiZv44Xpc6Cw1iJo5XemT47Zqjv6MmQexGHJPPZ7edLkVzwKAZvxfajxUouT7NTS6NsSVRgZuRMP9D7sfD3ovR",
  "key22": "4TTyPdCirXLThnq9w2pgCj6fMeCrShuckezG6egmkqKEYxVtcYNbSxxiQFfURuuUqMPSezA79z83jtnqND22XWp6",
  "key23": "3mjH2Biq6MYopc6qPqow45QXkvZGeGGXytTz19b3p5sL8wXfdosuSzUHNTV1yrPrHBE85vHe7fgmpXB2KhjfyVMQ",
  "key24": "66dqHrTdXDWcgshtPX72dit5quWBwxQrHw89X1yUTRjBMwr6MEDA9BVCcRARJrdFR6fJq1AX2UNoQvovzERNAo5z",
  "key25": "4AVg8HY8T1Cqs6uaVEdnV5dsxpEvbQPDgkjLKB4jekQFsDHJRmWqsvXVSx4WWCFrbR1zQV7iZFscaXDsp2j3Hynn",
  "key26": "NCxsURtAyuvuk3mYMaX5RUr3RbDmvMDWE5rznZBZM7cAmb2SAYtGqGDypAGPtGHSfHR1ve9mLduop3PcE56y6mU",
  "key27": "5VzSbGNx8vFMLJCdSzc3hmQJQJS3x6Fhse54tFBeEDFnPQynBT9mvTWorQytcnMiwAUFuurXu6QLBKti3PoZYEKh",
  "key28": "5vyKnNKk911M7NcDqPtQfFbsk2W7GuEdVJx3tia7w8bQ3CwKH3wymy4d9tuX3WAX7UTBXNHMQVtKQVHVTFav8Mv9",
  "key29": "49NMGw53D4nzgbjW9jC3gumwr3rAVrCoQcjjC2YJ6sLxZceuhs6bkUE4DXVu2xqUexEiEe3xuYxva6Ke2VuBuQrh",
  "key30": "4adajMLWF6AWU5WUd8fBCfZjioH234Q9s3zCtLh9kKPro71ruuk4pMHSP3n3Yg6t3gAzfqgF213j21eauXitCGPP",
  "key31": "5jegFBgTkEoiu7bnKG25ertRYmLUNoN53JKH9c92vnBbs47cdzT2kR6L4P8xKeoTVBADxBiEeU47Kxio8f2C3guU",
  "key32": "2PR3eUFNnJNBnKLd6TkGacYEhnwmvjdKAtuA57VEvELX5MSCVV3PC73KheBh5o7Kgcz6LguXXNQzuLwBTjMzUssx",
  "key33": "sQpgHHjhrGPBfL33ctBbqC6Gsct5M1FFj8PzZ4CnYnWNm6KfyoBzz3vXL8SfgZcVqtCMTa1VfdBm457jJG1Wf9e",
  "key34": "4ZgdXgg3bD3iY7ADYAmxBMzEBj2CNoy3aBwqfdDcufcqwCiBfeNre18i6ryRGPisVSrvYCrhWfL9yzjN43AW5jT1",
  "key35": "2nnUsuhDHv7eaKUc8JCzGHSS4iLNkDtEPUk59kpusFqCe2dupiAeoitEfB5dhA1RMfa89Cos5Wt4mPBAUmKLUmDS",
  "key36": "fswXnx4GbyQRQnoCPCndcWYDPz6ynjP8B35yMpW4PzmgERXfy2ETuCkTmg8M31Lj7cKmUQQ8sPmq3VA4qFeMdvy",
  "key37": "4vX32r6ALjcsGmHFMPH2HMDpVMiFqfvexj7ajwbvWMYPNqdhnfX2HaQRZYk1utQfkHaqhQAKtr5hJMQp9gXuFwy7",
  "key38": "2QP6fw5tfLJY49BiJSPFjd6bQ1cjRAQEedCasNHX7rWaG1YdQBdHWdTtoQcjKCyTnvQNK815CZMGtmFHNwyF8EyX",
  "key39": "vBHJ2syHoyJ5z6WqjSKueu67CG2RgBouccZrXGVxptGyxHgJAv146xuy1byUP8JT6x3bBSGyzsCeoeRwyzaDbF4",
  "key40": "RZWVYmeKXTrNihkriL1QnZuWzx2gZs4jqKwtJJZzkz3mkF4P6zPWKd8ZoRcTsiFKEVbbhpH5fhAjWGbJ16TC3NZ",
  "key41": "2StpBwHCcNwy8WWXLNeguznMH3WAsEsXzbzgB8MwYG1KFhjCYYRoJxDQMD86am8La53nGXEKyDiyjpHa6RSbuTqV",
  "key42": "7trUkAJVd82RXCAr5bUdeomeU7vTGWGD19h7tzGZNtWjdrSFxAbLvCBHKsNhAfnLzDgjdULxMm4hyGpDsFL78ky",
  "key43": "42eR6pBWKVHpRBHcfzG1uc5Epj4exaLqu7diEnJXtpQG4b3snDpz8TeU5goGk6gor8NTtyryw7xzPangV4whXPwg",
  "key44": "4YZYiJbXoQhPPPyueb6eSNi3q3aoZ882NzAXw57uqQfdy8Tyzn14VSj5QbCmgBY2kfxtjsyeQbqoaPU27gHdJ2Ze",
  "key45": "2K7LNpuutJbZj9xx5t17kyDLMAFKFZqvJZRFSBzyNkM5go9BANcuY4shSo75tkxzmxUX2j7WJ1WpL75yKLb3auTk",
  "key46": "5KPvX4hhBN6hbors6Zz9ei1btJEs6qq9hcjFTF2k8xtBRCbpLdgQ65XxUAAs2BwxB22b8EskuzuZNSvbdtUQgh6M",
  "key47": "5hbhQWcfwdgM6oGJ34wa7MvVh4A8sfVVR65FFekYEYEm3WSXHNAMnHTVAAV1FabsfdHoE9umzYzcXSc3nmNNsy8R",
  "key48": "3QrGAob4Wk2irzGw1Ey16Qt3Lh3hRPUeY7jz8nqouGULT9WZ77mSxp98Z8e4v47ypV34naHUht5F1tEcP6Vcczqx"
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
