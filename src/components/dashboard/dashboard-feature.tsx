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
    "2wXA3ahz8vYpoS1vq5y419qRjQt8sResY8hQS6hKtUGHCwCkfsL6a8ysNtQcqcSucTZBSNXBeHxCjwjsYYLVGese"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JedtsCkcPDPneW2wpY1cG9qSMJsctwsLvMLZkDqua2Sy5eKgm5K48J2tBLzwYKcDtduDgNfphohPyrzSjNVc5eN",
  "key1": "26DN3wV1RUKFFLqN5p4tBkEMhhf9NKGgiTG2nJ23wAivJ43RR1VsyXDvVNbighDTHmAs2mRVpHR4Qm2mtgVocREb",
  "key2": "279Zdf7ghMmnvmxtXecmxRhqtwEjZDh97gzXPM39qpwxZssYh2PdCaUkwCbZ945hZru6KcyTvM93XXet6ZnXGo58",
  "key3": "3R99tLUaS3tSGZ9kD5AKDdv8wuPw41pT4SbTqFza6y429sYxX55DCV9UpSj6PEzw7tLoNcW45TwEReFfRtjHrkHR",
  "key4": "3Jf31kmjg8XjVUwUxkjZYBRdjSWHphXEJrQXFrHbpsTizfBFnLuDogbxVeCH7V51E5EeX2oaNrhffqnb2DMpbAsj",
  "key5": "5XiQPphZhqFMm5tXHid7S5xh2udwaoPmNyBdaKHFTnkMZGTNPwhpmyZYrgxwxnjSmw6uU5449NYEFkokhT2vUWYh",
  "key6": "5qmo6wBEApMZ8tFXLxpD8pTefAjtkwkr1rXqn5bgSx8KuLRgKFGQKUunsPm7MULnSXemdK9gChT7ZSESo5M55zFk",
  "key7": "3dQQRgETwEUVqyUGUTrgunji3eRKU3BZDuLQ79hKVNp7thyXkAirMWDErnvjAWehT1W2ho3UVkcYXku6on57BaUv",
  "key8": "3LbTP9YjwccCDDg3eK6h4gJjztCo52jWEHt2ZJnqtapbEAY8mCCZAbRGVb8CK1HfahgYN9Urswuv5bRbEM1zt44r",
  "key9": "5eSpatoZKBoYodEG1La8xETVBrM5aGFWUevqtei6TQTX2hojgGYout5Wfe1boFaeymeNjg8vbZ8s6eC76NLYhw5g",
  "key10": "3oLekH7i31hnxhJhmr2r6vWzF6tvWYdsL8qsHUn8uQDLRVZ5MP2LtqA8mz49NmcLmXrwgcTaXrwYL2c4SyfZNdPz",
  "key11": "5npMSdEEEx2h9VUNXr159STcoutxw7LRxjfgqSUGtgYQrjeATeTbWQvrs62rzMnLk2w7i7NXd6ziqCo9aQqmjiCm",
  "key12": "4mT5tfcQrkbz8bkJ8D3wKpRzJSgHhVcDprwXENpM8gQDUwM3pitcBnRVTxZron3J3QysjY779s24tBPSjrvxmo3s",
  "key13": "4wLxzLSaakCAPt13N8baShCfozSJMVeNwyUbiDK5dWVvrcGkpqHbW2GTWszycPdrCJrYrhybFbjg6sriQJ1gyfCJ",
  "key14": "4PZ8E1xydqApcqvRTZ3QAwDCpXe1qcWR23wntpRQvd1niqbxE9A2oS9zJSCNdwjNjkp8BdaeDN6UGmMpg5m1k2CR",
  "key15": "4wuGZXtVt1c9gYm9WwQBqsy6pcTjndbAybzoVmV2yGjPZjRJFTCZCDNmAofYFxRLXjkSjSuCbwFWjSwBGAG8GGxY",
  "key16": "e9sA8zoTubM6cb2FvH7PabzFeoa1KxSaks18FGVSs99qBTPDzjfF6GWSf3Eb9v2BB2KQf8BQZr95C33cEBi49Tu",
  "key17": "3A1iHubvttGgNG1dDYepjRtD9u5m4qiav7PMMjf7ZKRDq93m1poiC6gpnnBJYHWSjEJ9ygSFGdsVhNJNwtWm1uVY",
  "key18": "3SAQF1fdkgWE2Bz8HkUpmTtyJnxzzwBgR9A5fBtttKgsGrdX4txqG5PCrbxwmUCbatYRKj3LNAJZqhsh86zNDoUK",
  "key19": "5huhh6Lc5qvT56pw5hSADnKRWir8wyqt69Jfv69rLduJAR4mBTfMM3ew3i9SJBE2CBdAbqhgNq857bf24A6yHHPD",
  "key20": "VLauiUrMaamsQj5Tk3cXmHEJ16jCF3mExw44Yhr1oyKeetpS97BvYdQAmK2SW8g3dm27ubLcDRttXudhtKSQ3vL",
  "key21": "57VyBz4nCWx7UeXvkQjsxKWqZesamWckSJBYm5rDNQyrEygdXNVkJFuso22m1z9W31Jj7N4fecceukPRBrXX8uFu",
  "key22": "4ND31jhfWRbCzQsuwB4ZZrPjyJJdAosWitASCSj6x5UR5iDd97AmDeWNdDsGVUATfQG1YKfpCA6dc8GQ9tuFM3bZ",
  "key23": "bwDQJeUy9CBbX7UUpJYYbyZvPpYGpqVnv4Pc5nKU5S3uc2anmsyjc6vaCcJ7mLjyXAssD7DkLcv9jR1kGTmQfCq",
  "key24": "4jRaqS9VougWbmGeed96QuGRJ1d28Zj6TH6SLzFPFwQLs5U4MRUGzjmAGPjey8HRCPqMMUWEPyDjFoNHZmjZ5TvU",
  "key25": "gybMCH5eA7D7nnxMdKzP9wpFu3sLvuENmQFXC1rnQRZv8TSYKHnqDrY9fte4vR7xtBvE5rM3BfFDLERrZC2bB8T",
  "key26": "5hEEtEg65mouau9tSGzib77P77eeriz7xWy6QjeMWb64CaqQwVvsNaenzqHbv5hopmJU36aRk3ePC6Z1oDz4YrS4",
  "key27": "3PXe5bKp1J8iimAppbRv6nqz7fUAvMpXhfRR7LZRrc1HtRSLizWL2XFApyYzWeUr7srja8RF98CAyTnE2GCB2Yd5",
  "key28": "VHR7UWyBmag8jdU82gztjdKjD6e6oo3zVEd15DK5Rj283c4QbsnSzXBxqUu8VcSsXqkZbCMT1x14gPs94x5auMo",
  "key29": "rf1fjuxn2BKZi1Aok6d3yJHR4yVBtDQggCwRXze3auTpgNNN94t6b5fqNJNkRRSGYboCLQeVRfekEFvafm5CsUt",
  "key30": "4Zz7ryxXvg7odXfpbiPkEqRNKrK3PDpCZJzUEFQKu2u4SvNkvzSSch5LzPHV4oADC33E1gsLndzW3y68nGrQGvfk",
  "key31": "sGJyLmhH8ierL3vtw5u9PDTWwtXY6YomDqvfbgQCTy3UuSuUU9kHEs8otBZZRh9RZeokQLaQWoKEs9PBdf1jbw9",
  "key32": "4Au1MCRxfxF8Bx2XFtuheJrPvdcqSUTXCg1Pmp3dzajB51rJqxghfbHngwnGmdc1egrSsR2nGVeyWaa4jutwXsEq",
  "key33": "5fbJGLXWcGY16zA2BTSa6s8oaCne6JNJ3fDmrd78XZpk2Xoy75k9xNG5jbC2TK3Ft5msoVeJbEvq8R2ab8PnP649",
  "key34": "5EtrXozoj11RpaG6bz2rNP6zRUc4TPiCKYVopWCFTdvMfgYBa8VZdYoSsY8UFnH4Dvwijj5kghjqou7oUbMNqJgd",
  "key35": "381TNCqAV2N8iV3BZ4mKZVnP4BLB1rbnC5JqYsTmSBBZm4q9tJ7dme5HnYtC84zp1YSMKwA7yBi3dB6pc8jVYtER",
  "key36": "37eNNmVR23CeJ7DzDcBj13oDvu2suuje3wW5uDZJpQ6FbjgVo9crY4bqZ6T7tJCZMwjY17mUzPNV5UPH71SYP3Lz",
  "key37": "2Fq1ur5YwBv3Kpi7eQKENbZn7WLWMjc8r5EW1pQKpTBhabA8BWwbCskMD49fKXufcdyKTv8ofYbCki9cRv4GsGP3",
  "key38": "4etHeqaVgcYyn82wY7dmR3VZB9U52vsVt4Xj1XLg2pyBNkQi36z3o5MKPJyLpTW2aKfaVwFte2NQsg2WgbiSLZiy"
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
