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
    "3UWiAn3T6fri8mMefgWj6eDSPDeb2Ao3ptuo3SYBggcionLQqmUQPQWSKn238sS6QE4Bpg87HhwHubgfE6ZhUSqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxYTGc4xzqbACk1pxfZjLbUGPD5TDQM8r5fu1RXzWWJz3Xicz4nzG3sEUNKPh2Fj1L1MJW1B9Mk3V9iqM9e4Frf",
  "key1": "3X5s8i1bsAfTva8pSGs9nevGC3TyhS5QQby7JvgQLCZFQGYAmQZqyFhqK6JMqFLwmzRSyTKBN2wf5YaMWKK5xrNK",
  "key2": "5EVkbFTNbWZwvN9my4x9N3s65hwS5mpRCW7hfRxieG5K8euW9quhQiqo9pKVEdm69qRMNsN3HwBtSdBUrUDsk2co",
  "key3": "5t5A7C7jQmGbN43EPgHj2UwvjSmxqrKTC1xPnaumaGiyZHnXmK8NN2PtXWXtg4rkJgSdGSRfKTQeF2NFa1ooZ11j",
  "key4": "2eF7K9nti4RVFfcv2F8z7PqiDEu9cpCxFYyiRo17w94UNBovYiADPRvkkjvzQiWD4oqnpXuW2S68P8iUikqRDnTA",
  "key5": "4bEX289x3AKYKG3yeKAqjHED5e8WmUEBG6gjJveih9DN9gCriVQv7qpbL2HaxfF9i6WntG6dPyqY89g9WfuNvUeR",
  "key6": "4K9Va2CQVcRZNaXh9FeZMhzb8ZtdSMd2XxihurwcZHqA21aj1D2PjyxazeB6pw2L5vAMSj3h6EmYkbtEQ1Zx2odH",
  "key7": "VJ4WAPNzCMTyf1n3yTAU91pfvweGwdp712F7S2A8mqDYYdENRMUCTEHe32HJCt2yadEjyNCEzQbCqDHrTKAiMPq",
  "key8": "5WaNJ2RaFbJFsfStXjRY1hpQvVRR2WCDeJna8ah8Nf5LFfSfsFKPXSyQgRref8KwotuxEGCZ6N3fAHWtnTpTVNmT",
  "key9": "4M24mKFuWLa7zb5yJtWYHizMKnpcZ7ZRJkYPYAV8Yj8fe5StkUtjhjfecM1vqxiczqQ4U3MaPF2A8K6zihPpCESr",
  "key10": "4PqmnKeBFAm5gtydYrxjetURmi96w7vV8rYH91ZbYZDrcQhwS7Trzdr8AkzXhRRaX41JDUkiLyrDqxW13vp2dYy7",
  "key11": "5muaFReqcvN68prsPpjX6TKindmH9T6zcF5HKRU55jjajD5rPiCFftGTgow2CedUnthzNCVfey33H6M9DXfJaD89",
  "key12": "5FPfukEd2k534hRfmFhhPV6dCHomGERiz5jiwiuYrbTnLbDSZTr6vFUzDf6E7TWUSVmQRKZVpAgT2ynkPXB17NV",
  "key13": "66ThgaGtdzJzUsLsS7G1N3m5KbcVm6EsjAzPUYmGdfZyJMWVoLB3vq4P3qX3X4pvfAiLKFTExN6krQxBvnayHM2L",
  "key14": "266aiHcQx7MCpnJtQXy9Gd8AGvR1g1Z33ven6C9hBdafZVZzkVFekaF9cojkLdAroXVP4cVH5hnTnneH5NYmVA6L",
  "key15": "3WhCDawQXcfCao1y7LfaubQwHQS4kTBbuE4LvAeychhc8uuWDvGiLm3h46jxnr5ugRNF7qmpWuLrgrQPLzz3pZWY",
  "key16": "4vR5qrFzyJQWUgNiC25Ehr5ngEuPH1FSAQXB7yUF47b4uDUb4QJ4syFBvcCJFqv9U7tjFpyvqg1yDA1bAy13fJaZ",
  "key17": "eptDznhdRvdf7LmJdr9DihfZHDG4MXroQwt8RdwahYnFDo1vwZd8NhPU4xzTRsHEzBBGea5YuviPPF5TN47a1hu",
  "key18": "3xB5guKQkdGWxpDQY2sMdLLFg91W3X9EyvgtQDohfphTUcoQCe16GJxt1EP7A2G2iZXaHuV43wirs2spRdg34xEj",
  "key19": "5bTodqJxSEuftgB91LCyFWcUx2FN3c9Qywb2bLS2gVpYvvz91QUznbniJCfAdWRYr6Br9vK6BH1tcMGGubEzHLG3",
  "key20": "5ZanjFMSSHJhEYoR15QSbCoLnBVu3Cxir5ntPqTagUf9vJrAoM3DViCKgi75dyCoZosC8FJyintuWY91ZmbTV9ZJ",
  "key21": "KyrAr4P2TUw1j215yANREoaojDXBwME7yBvMES2wM56ZWHBgkwuDReam6u2rrrAmNBuitCAzCYqvdPneNok4Gfr",
  "key22": "5iBTTeJg1jP7rYYbqoFCfpNgCReXWNbs5tKccFEZ4JX7KkqiosNfvMM3ib4Y42pcx6nh4gP8Sb4zz7NDVztfZg5s",
  "key23": "UaKF9wP8ASp9UV5Q8vKTNUzZq5hLbCx5nU8mLmxPjMYoaGKdpiTciWLv4dzF1Pp9gPmcWj5frHdfApdydnmmr3D",
  "key24": "3Fo2na55prrcQfqwgfEhXpmPCaBcwsKvuSvr9RPJrLtmTTCVmfqQDnica1tRiJ2Qkr84ZEwSZDttYQxVGonGyHYs",
  "key25": "2ZJ9ZMZ1rcq2D5UH1UtBBuhzwWffzcUSGGU3kjwHHBJoMN25mv9LER641qkusw5FRWBTvVLHfUxpXs6ywgT3jeuM",
  "key26": "yh8gXqnapfU22hEQiHfPraLKDzdnu57CXZkHoqztcsGzsRA7KwpbzPg2fJ5arvXpuDgQzD8jk6byW4oF6rpp5nb",
  "key27": "f6NaKg3PShd11sW6eB7xX7ZEymK65dh39TWJC44iT8Fk8ZaDF9LfzXSDqVc545VaokQEcNGBudWqpBo9wJJnwZ7",
  "key28": "5YMQA68gsUrCjXmw4twQhije2mn8zLgCe1csu77buGTsrvP4QAqdoT9hP4bx71BVGpPZVBokWF5st3L1LpbpKj6U",
  "key29": "dasteCHdvB97XN19wgHct3xyXtRxDhpyQnoAoyq1hoeszfaAPZdvirso4gqrNaW4DXe7QzKXqxUoMYtA7eTuQQF",
  "key30": "4UcrBpQdurD4HhKusF1d2ZzP8ssRA2YPW1QUiKTSGDfuThMgkhq2oAQwSoCbLQtCq9jhd1WpYBorTkmT4c9VKJ7Q",
  "key31": "3QWqQE6AMgut5hcvV1U13i2Tvqrfig77Jm9nFFqsbQx1gQrRvA4FM5van2fM15Hdv93MxJDMTxRCYgu5CUHF5XDK",
  "key32": "2tHYXmdAwGvFrwx8GAx9NNA7BgND8T28Rro7FpBn8Fx2qWwCwdWDknZmTdLj4YRUG57m5wdd2tXqcs9Z4eFV5N6a",
  "key33": "vJnxkrJ1Bm1BdCWeqaHScz8Ye36aQaz6pwAoA4gQWWAjLJAEZxfW38jwsYS56uK4qA8Db4EmUVwWRCLmxvgRLsh",
  "key34": "32p31bWNi8akQMnSBGxTPPWV9sTE1HsoymTDhZzr7D87tx4Xvq4ube8fVkqkjcpEDjSRNcxJV1Ais5Jy2fNCPRPN",
  "key35": "3WCSgtRi5KoCPxtxiR3v5UG7fz1rW2phg3JX7SppUHGJHBdpcthDGsXWT57YqiYFNDzd6AggnhuJGeDt2Y8FmJBH",
  "key36": "5f4C61PxD1j7Zk9VgjBc4MudG6AsUaXY2tqhYf6MJF9VAfgQv2UyK9WQquretBGfKczV3fqCqXEBBDHcAnYCHjcV",
  "key37": "P2ej2cBGYDmWHEhoqQKAS1uF6x5ExMkwgYNnZ81UDJu32pp19SaPuFMhYCZLNwt11RmASNK9XMYn16zgf26Jqev"
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
