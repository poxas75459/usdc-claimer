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
    "2BpJLqeQixzfh8Fv1dRyLDeCNrPaiPTZ4xNTu3cFD8kHyRfmdngGGgtZz8179oWwvRf7AenN8A5qd2D4d1KxTCmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAAwBTje9PvD3GxVMvpP1b97UNCoui8QrJCiC6EbbMZ9d7zUBPw4bkqTjZwcGThwFt5Qs25W1cooV3xv3oKPWK2",
  "key1": "wtMEh826tjX21ohVkffpBm2ivaF3eCo5PEBFRLVCYsGeH1yZeCJ8osS9zuizKGAo8aSPgKx6Nz2QyimP8uXbnWs",
  "key2": "3X2HuPS8jx5QQi4Y6Srz4QunZc35VNiRpNrMzrNf5EzmDRpSsyfxNhybuCX6fEtkZCAmyTMy3V9wu6kNPm74PTQ6",
  "key3": "kGmXNQNzRNPdrfQ7kmsAmYbuG2N8gub5pgUhwExSgPbQo1fCdUDtSek6HX3q2gNfvZhY631KMSy5mwbyyZPcoa9",
  "key4": "53aRLqdZ1JHQnvxPYTcoPaGQ1rvs4eQdgWFJ19NN8uoLS3dsioefAbB65ZBwzzA4uxgBKDudWcweyKyW39JaZh53",
  "key5": "4tFCdwSKXPKZLhTmxfYFKY4FqCk8nZd3KKUBCmHoVkkdMD5hi8zZTHuDLVc4VaqFfsLUYUc2C6B6i2wiUuYJcNGp",
  "key6": "D7EgCgLSg5tqAw3i4zyyYgEKmTWbr1Cmx6W4XBM67vTXUdU5cAG4XdRTw9ghJ52dSQHDFViqCLm9PadLUhSFHDe",
  "key7": "5qpZyq63iunwkCX7ndET1bBc9Wr2cUkiX6pjmohXqS154LyJrRznteUExzA2n4RBRWmm7YAiosgkrveU269nM1V8",
  "key8": "5zwtPwx6i4SM9gEtZ132e75dsEA12PqabNtHxwuFAsFRX47aBYH2xrMYnPrTGtNJXnmKpNxRZNVRHZGwj5VWdk2d",
  "key9": "5VthKq3xybVVP8LxuYL1cZtvhH2qzQ3gbzatPQNVkxcqht1cuiizgtuRHRJLkZuyz5aRaHizgCyM7UeVsV7UQAy5",
  "key10": "5tdeRbUZb6rwNwubnoje5T1GLXsYqTsMrNUESDC5NAFnnjDowWs3YufAYkfd9ndifcxYpg1mP17PhgiZc8ioLjh",
  "key11": "uqCBAtbEbBmmNRdZU3sR6KYaeD3k2CRBgnsU4yyKiTvGkdgZsyaN5BRiaEh2CWqbaa9WCWKigUFWxFbg6seScoR",
  "key12": "4j3kRkqvqbjAzChnHUnsR3t8cZGFBScraH6iEWBFTPSdaPnUUwrYvxbVyAW4frVr561v9E4Cz3B2URU3TXkZztE7",
  "key13": "5p3tBFFRZb96234YmVZasLT1u7ubpum1pXjVGoa5D5g7jTAn9fNLGHPY1TKfjzsfWb9767A7WEtjmSb6PN74nzk",
  "key14": "3Nf5yx1x5UkRMxe6dCRMDjjwhhhxVsk2YEwbsJQ14iXJzgv8PogfFkhZ7Jy1iv2XHXKztWmrX7WdEtxVNJNvvfHs",
  "key15": "gHrQFE6x7MKC8KGpRuYfdncinBzdM5n4nfWWN5mxko2rivLWGHooemN824xjxZtgfmc2hfuQ3tnQEQmdYgr929A",
  "key16": "5EmmpHz3JS5Y9WLLqgiRdHkFc6uizkQ2so633PVNcw886WLisdtbaLQu7ya9Hoks8hVZVZqegdpAQp9qYrEvLWTz",
  "key17": "5ACk8qJCzUZ3LEUAovMLRs3cBqi3QAc62nMzqs69GawhGop3oDHjTJpiUUbmf7NmDwC9crYosRzAw7Xhoc9NhEra",
  "key18": "4dUbNhxc5wXBdcNLSZmXkjJkBMvsEdvLZ73NvDxfeeaCZ3JZe3tqjo7ekhpcz4u75ZRgrn9WB81QwTBMFvbvYPyT",
  "key19": "4W12RzK2dMvnNv6CPRkSSjAbD3XyD9unojjGR56NeZt9icYLWJNauUnSEJnuYZ4rUgUk1Hh4WxRwkTYfiscetcNX",
  "key20": "2espWGn4U7q5FWfansCV2jGKUPLKoK8Y3a94ytJjva2gQCsyqTX2LmF7x9Xxa4N4mmceMKC49AqQMd6LpdVmym6R",
  "key21": "5wv4XZrvWaFVFeehQr9ApiFzYsUPY5DFzXunAyTdGHZfMcrMW3epqCEbArt9TThJHu4zV6k5f8Ciq3znCzQVfzNG",
  "key22": "3AKtkBh51AWigYm55Ax8pJKLMKMiDwToScvyKh8abHLSdYrcikbVFHn6JPY13g88xUT9Uqrav7jydfYxnd6hnAkT",
  "key23": "ebgyet3HBxA1mFRHuV33RDjtj2EWG7fNcJv7YnRzzjgADURCKf1oN9TXEG4i3A3Um1H3Cb3TDHg9x2MTDEJ96ZV",
  "key24": "5xtDEw2g6fz8DSqLGUnfZTDLM9scAvoizfMo2RWdEtyrE7yayF9HMKVHnAEwAWLYASY55LauGjTGzNs9ZMrdqBxz",
  "key25": "5wk43dXVnAhBk37cWTTyj4t9Ro9rWC2iXdhTfMR8KNkLYhBCRzzqV5hXo7ghnChcU3zqKmcxpH3jk1gSvdFFzetq",
  "key26": "3QHZ5BUsJszrPFs1ppNq9sHwHKpZFubuLQtVNsGtrfLiCfxFJP8aNAn73dnXCrKFKaXmLuFyep4t4gRN2NV7sCoX",
  "key27": "WF4asouKpYfKUVTzsd2BjK69iomqbVFMyyeaxWmkVQWtvhe7ebvBK56BdZ21uaddhbktpPVRXBUbZxD6zqFi9W4",
  "key28": "twEtzDD5ea2pCKQPSKkvZuVfTHugN1NbLsfgmVgwon2d3dTpjozP7Wq4WEYCaQv6kyUeTVyt5tAgKbtKUsRwCjr",
  "key29": "3pgbzVaUGDcSPfYEHydvZJNyWsTeDAncgDxMsgLJJ85yN92xzGxeQEAAmaazwEeYVj1fDRrv3bTJSaXGVFXZAqJY",
  "key30": "3SQbSWLF6nmXuveXJzapZ16FXLB7Vo5DBe5WvPsaZQLfoySpXatsiit7Zb2D4QBT4c3gbAcsNwF1xKiwy3gexZZr",
  "key31": "4cTNp22uSsd2wbiWopxmRT9Hr47xEuB2eBhKHLW4eBMcFHbS9ww5nG8Q94Qpvn9pAKAWMbznMm5878htz1tfTa54",
  "key32": "5QQRzbsEAh8uy5WXCxWZM4TZ5DnkMBT7vnnhrVEcYCNBMBojyAzjtGDSTcn4jXmy2kF3TrYsDYJDkYGAat59KQ8z",
  "key33": "5547LQ3XZLkaxMoi2tCfsQJnvhJXf3sBDHSqHgetDPPmJS7Y4kbvpzEBHwqFpAo7XgR6ZnMvY5ymPRDHatRMWqe3",
  "key34": "3zAqPkEVyYaDTc3ZAR1w4TjJu4hhM4LdhUxvFqETW6d1ojhxqfrDa7aRiApVUnRSVaE7wW1No478LpXE3SC3aje6",
  "key35": "xfSAEz7s6tcj6eE7bk7xjxP8nueWWcJ8ZDNG7nHbJ7gun4ReXuXJ81AQ8xDhibK5QCyBU4Kax7PY6S6mP3SJ8Cp",
  "key36": "2SssJRCejYpw1Um2YWWPGdqYeNXXktDYSvkK7AMkHApDVh7roq4RfaZmiktmq8wrvbdeG8b3pTJgzCi1wxnpiXaD",
  "key37": "t9qQv5H4xLVDUy2BGwHPa9XowSLtqEx2vcv5iPztcg8Z5Rbd5cFmiUTDyg9BfoqP2GCymioSYcSa5bq5f4Jab5C",
  "key38": "3qrETyWg7mvFmzARaFtfaUqSD9ckj7Gf7hcn4WeesJoS2D7c8my8VboaRDRYGrgZQjdtmyLRAbnPvxTUoTBbMBSy",
  "key39": "45suwXQAYDKMt38EhjZzw3gNNAey7NRafPYufieUGxoDfCg9BYUj5yujFXNf8GwATALMoLgVSFABxPKTGPqBnswm",
  "key40": "1A37wVAHpd3QhSQcgcRmx62gSob7zqfoABXixjHzzPjvzLiujEkmU3TrhSaESoWEJnFBDWDkENtHPSxGa7NwEcx",
  "key41": "5qGQz3TVisF8fvCpL9rQiMtuYdZyGpQM2JJe4W8iEMSTeh5wJGYwZSqDvpwevhs56FwbGktAeWYHZjTP32mbKqjy",
  "key42": "4xVG3kK4ogj5YmFA4d3jSGjVKkKmi5ds5aaHTtKeeFSeKiEfeEjDPfkMAx3QW14FvP2mBM5Ns5jQCreZGUVMM9aN",
  "key43": "3CAKVLf4bd3raUz1NaBv4udSg1bWjbHh3iYkB563jevKnPra1Vqx9zpdhrd9y4SXvdacNedSeefQ74DnvGKDcwhS",
  "key44": "54Zk5w9DzSzRowEHVZXJKoqD4fjio2didJPrR9UJkdeWqwAohbgkDJ52qhwv2qvjaKRtJRb3BB5whNJAQE6oka3e",
  "key45": "3F1S3AFF9VyQwAwetPvnKqn2cwRmt8JrPwrztC6kAGLxUSSt9smsgvyG85inJrtArHVLYiU8Yx4LgKETKBAfmTp3",
  "key46": "3VNiczPfw2GMnodrnh3jy9pCtGmg26DcVdvQvaJKV8E7AvQv3eUfVjFjj6etZ31zJsSfL7UVkFz9vRqWU1u9QxkF",
  "key47": "282hwkb43FsP962rFmtXNiGr7NTRmU6nZfVCwZGTfy7VUPoPsDzq8VD14WgcC6tp5jHMp8jwzXdtoBCXFZ9Nd5X2",
  "key48": "43rwHp5z4natjeUBYEg8rkgbAcjoeynKpuCdY6PuEegpjeDEr125H5m5tyuVo49b62eoEpwkDWmvqCiHKWjvguGH"
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
