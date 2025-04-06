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
    "2mDGNgjyteSjhrM2hyuZbSNUH6beaFcdd62Q6cA96PJhT4hYYTWfDKm5ux5wzwmqwQKGASUsAunrvfE9sXdzvpce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBfpRgvay7BHJDd2em6t2bJotCphoWxfeTmhmPQDXDrVMu4p3A8se757zYfYmC887UHbeNKFpQjdARCnY5wgy4m",
  "key1": "2LJjDCjzcano95FJTYVt9EoMc7USPsMGmhmrKY3vRavZeKxf7NvFkvg8u4xC3hfEELy5Wkin35mJRtSW1oBrUXz8",
  "key2": "2qgt6Qk9SQQyekysZ7JDJkxgMVwZt5k334uX9duBnJGMpxJPuetzLipbaTFcBwN3qoV7Lgno1kBDcg5SNJVLP8fF",
  "key3": "3R6j1UXuGN8mGRVaKL7oTt5C4DR84R3VmudQb8ncLkXNcmS3t5LmAB9kbb4PpDRbVLj98WCqFB6gMoo717FJhx6T",
  "key4": "4gTYueP6fxfXriFwf2ibsPYBk6U1D1mwLWBqs5kBjkZvs3i3jxffFem1KN9oprj8H2J5TzY4Xe7zL1SHiZfZoG6n",
  "key5": "33PtQLtj286qfegzQBPNHjKnkhgQFhUVtmrVjY3hhFK8jEhCSm5RfSDRxGiT9EfYMUS9CAm8vUkjhRSNiPBasaQU",
  "key6": "5poG6JcT5fkxistN4fwAD5PZASuPukzYe1WuB4Go7wKipR2CP6wJbWuh9K6h78CKqCse8XMBexteZcu8oQFiuoJ2",
  "key7": "2trkf8AP57thbAChBAETKcHKLF2oKWsgK8DeTj4tx9ndt47Hz8LRvSd9yqt6w13NniJUuZ21PQfL6sKHHLBhbzPE",
  "key8": "4PQWpaGq7EsV3p6D28GVWsM1QYPWQcqSqhFXc16mK8rFjNhf99fFxvVh4dYDdQMxnRjr4aXzbaZGbUFvfLqiuf4F",
  "key9": "2vRa3JnEdzMgDtYEnwHMe5USRKF58Gkkev4XmXoBNWybnhsFcAEBeQkhUXLsuSux9MmYp5tWJ2na31tDkFqTvcWT",
  "key10": "4dchruRexGgoUBErwEbYsTRBv6mzxshN4RBiCpVr1SiSyaib1dYwSRQVFTxwRph7hq3XsEfhsvUL5GLa9BhG9b7Y",
  "key11": "H8Q3ALqoz2KZ4xTopnuizQTGVxYQY9dsVtJuRpZaQXGx5FCuXwtdwbPPwa5LPqatYPHsa81zbJ7HssFjvXZPouK",
  "key12": "237nm2udz3M5Q3qEyUfRpLfsNvAfBa9To9Bb86JJUpgaTiLMeCr3f5hFaLw7TNADWAunEEB9gN9j4ExYocY8t78d",
  "key13": "27RtmLLXeaXv13Ng6i3YoeU4VfdgT5HB4BLAEBh3pRfEy7GUY9x5JZC6nESvVXMCaNZHxiRtYThsCyQTW1iwgLxf",
  "key14": "jtvkDtA8zwVmPuw6hr4GW5uC6fwpeypY2vHf3WU58wEv9UMN42pwfwBNDZMcTvdopGWjnt3qJikt2GGid5RJpS9",
  "key15": "4EAjGgJVwCybwqTWRu5DNcSePVnvrLSetTwC2X3m91kHSn5zQ1LCTLr1dtWWdnyoHokNqf21a4Rgb7KTWrKFHpsX",
  "key16": "2X5XARgiA3HwGASdmZkdYjzA53bqPzRh9BYrWq3JvohoNSRNmdSNLQDdd6DzbYokf7e8VMtMrbWRQGtgWVaeLA1j",
  "key17": "3qK9wB4d6tuHzezkhauSWLrGMsv763xgxToDhPXbqbpT2AtfjKK3rU5viAp8Vq1pUw9o6CZyfF65XFsefqhRwPxz",
  "key18": "4o7NMebchgbnBY23hqQNcZmoSZEhxAWZXqxyYdWL3yVQuoE5V1t2wPSkj9btsFoBkLnYiXYy7rZFs4BKqCFviSs9",
  "key19": "3pDwuc41doDzZHzPDoPPZDZz45W6muSPok2ys7Tm5dRZwKo7noM8ZhdfM9QbMLvzR4mW9VHJyh22qKYmfMZWiD6P",
  "key20": "BuyFmFBxgyh6ciaqhzSfGL5AzA8VMhH5tAzjUCU4mmGySyFHghNV3jUiz4GAK4fjha1yPBtc3fxw4iyC8vCHUqv",
  "key21": "26rL9Xtt2i4D3yis7RFhisSw6rfiCt5mri3afMNteGtMKCCxPjgJ3mt5tEkfhcPpQijd5tZ3hthLvEg9ZDYSBv6T",
  "key22": "UPWjRQTzWLfnw88R4d16QLgPayoqQut1kQ86Ms72hD4xFVhr5uuNhQNywANkfjDqcQ5sEEvCXYk69u8j5YE8PKg",
  "key23": "5URjDsWMhprrh6vqyZQEGbiBVBEQVJBpJriqKzHF6Wr55oEdz9uUQEog3zg8rk61QTPVhrWYAPAZYYe56aLrw1y4",
  "key24": "4CjyZPqoFo1MbojySgXSDfmFmsvVvuBeSqCbnwzTEdshFYbydrd17PSTnqpKvqzxNcF34J2vDYNThsU7rqJ3sQ2N",
  "key25": "5QXErKgXTDvFQWeaNGtragpFqbKk95JztRiyq2k85G5FX6pFggNdG1KURddoEB4BYtCBc2nQmH1LJWtThKZ8WeyZ",
  "key26": "57WatHUdhqqUYtXWeog6sBZ7rXGjSWyopFiFoaWEdt4do43fbeoyn7Hz2TeNmZpXCTt4cxm2Y1nuv3oGjTNkozpo",
  "key27": "22tmzHNUZRuCW8RQWJ8E88iSVRayUqDTUEafdPE3Wjxrvd8L8N1yKHDSinaqXtX6bxxbdLTEVtE8bVTHFu2SofS6",
  "key28": "5SMZ2ifznS4moWt3fHg7rLgAy1iVYtPEttr48eZEqxEez25y9zXdVuygDeBKBmKPz64yQ2cgGTMwNdjg7wpgEiSy",
  "key29": "52RxnumqTWpUEccU65UQyQWLt5bRGu3Fktw6fRfbxuZAczDvrkrsun4oDAy3XbQofLw7dwr2Lx6o4jP15VB47SN4",
  "key30": "3Jusv8zpZhFADGvNFLmAtDnP2LHQ1anh1NQgQgyDcBXzBV7JXTKQ7g5SrK3iwRRLYRGcxzfnh6wVVDu7gK8BTUgr",
  "key31": "5z8vv9qCMne7DeTbijaYu3PXuPQLcQkKeij4Jw4sxCZL3LW9qJgvHmU3cfprYQMME5Qwia9W4wicoq6dVgrum2kP",
  "key32": "3LQQfDHUvLG8x4w85pu54X4katdPQZBMothS4UX9keGHn8F2iTTcaCGFtJTvSLTepZwv4Z6ceWJQ7pKwSN1MoPGo",
  "key33": "5wHf5bcKzhYUdrrUNFKsiTcDusDdU8CNuGWEiPRU3ZAS9q8fWUhNjsjeBtBhmo3oNccKh3naJ25tnDvLGCX3PqwT",
  "key34": "3F4YyL5J6AZJf8Ed8twreh42QdSJhPPVneM3S6RRLPNwQCHuViiNpTnQRRetfGmt6R2sADndyUYdb19wmZcXERGz",
  "key35": "62udU5rqhhFhcREDwM7SYJQKpaAjH6aZbfjkA1JiX4vxdCG3qxi8Rqmqx45hpsjHcqee2C66msdwi64jeFiNH1X2",
  "key36": "2mxfbzYwY4YurLUjpFEAJXmJjdFzQXnME6rJeNJtnx9awPsYByE4LgxeNkuv9NiD2gviGBi4snMfRhDHEsmsACmm",
  "key37": "2mrFKmyxTmQKy8ScMn2G96Sf7FAjjE9Xc9CN6eKT6fWu2t7RWjzKTwthUxEx6TNA7EdkQZQzcxr2smbrTasqKRHS",
  "key38": "8E7f2qiwDwBuoWoBzHEwFUSfzEcV249B6bVZZQ3JzZvRV2Fims38YRxkH3j5VyK81vvzHS9Xi8S7KAdRBFrmFvR",
  "key39": "32398od2MGSynF73jx1LbVhdNr3pTXzibQ1yq2qmeC3BQLjfzHLUzLenF38XFoaKKPvv4K7GVfrXmvj3dBGHwLbu"
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
