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
    "97n2VeQi34gdpz7SDXbxbTnxuhHjzkqKrmdp22bGMfo8Ufygby1w27miu2qr2rXtrvKDd7gbuuMvBTRBwe4eT13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334Zt5GFbZDrY6mnCuAy8wzL8w149w7jjneQNj7DEbg4hPWBQwbmCXuHDZXhf5yqhGkPbxMYhv52bMujvp1rYvNj",
  "key1": "3f8GaopMorio3qiDMyKRSwBow2aoJ67m7w5pbqMCu9ywKFY8QhJsauuPnjzsr6Q7aDiHibXpRDz7Fb8jjsdWbyqJ",
  "key2": "4H6YiGnDd4Hw2WKLAUya4XLXqb2HXxqXAQxtrhV4zgbyLBJwLSpw2VcyQ7xZSrGUTeWpiYUUN7Wr3VnBBcFcxvE5",
  "key3": "SV233eZNvhgL2QCBjx3GCpbGpCaJxTNRThd8SsBf7dfmzifmsWuuZBx7XQiy33QdP8GYeCQNoSwcmsxTBi1K8zk",
  "key4": "3uDni5HzwtbgmJcRv7g1Yf5YMF7YukebApaHi6PFdYpyszaxkJkmiYeJ8dimR8d5Mb26JkLTFxoB5YN19vLjgMAS",
  "key5": "4KGeR15DNqmNfamK8EQWkR8DfSYPJcgDmy4Y5g1eKwZsvEbk6NGw5qoqt9ratdBrCQee6FNqqAA8fWWKy7B7EbUF",
  "key6": "5ZJsW5s6Rxb5cGR1UcPwVcmBSXE8u6Xd9NgcpX7Ve5vrSgAdiRRzSmm4g3gYoJeKJPnJELgPLSc65qyDVsZj4Nj8",
  "key7": "47KzAEQQht5JBjF9buxDpoS6Sb9tfezyyHk86VkX7UeHaJQY2fWFhoUCKihXWWosh9HtMRXAqD3kPmTywqVQvBze",
  "key8": "2HZ4CfDi1mF7yNuTdGEWA32KZ6HxzYYmirUYoN2uMUrfcKQGvRmYDP6ybfoXbe3yRXgfF3xsBvwx4L16HhfyCweP",
  "key9": "5rxmri2ywq16M5iNswyReX3c66UCSpPYiF62DusRL8dCcp63r1g6agsUMKJvcVxjjfruPq94MvmHue9d3yG6TCVD",
  "key10": "65J7Zj6GU7oqwdmoPupzGvtyozb2kB8Ao4pS5UPFN9sG7krM52hW4RoMCKBzE82GErmoeQLxmkKkKrWZv6SYZscM",
  "key11": "5fWE32v8KH45m1H2G279v8KiAdsMcb6a7miTxH9S2DiEn2HRknMEz4fsPodzYzNe9H13BpE4rCS4YCbrRg9G2k2z",
  "key12": "osQUDgoKZAsmv22nobPwu86zcqrZTf47c1EQaKjRG6s38hs4yfptPmjbd1TTh3xEABu1WA5kMsK33pD4NDYAbVG",
  "key13": "4XLQsquZpAULFWkmtyJjhf4E6ocmWtoE6CVuNyWwQiN9fZxshuVoCHPRHLzWRv8KkuHY92qXY2XzeHyecPfeJTAF",
  "key14": "4Z4pCZeWr8aY3NAtFM37sSdxtoAKwEfsZFsaBEdijKWkawzzWNHy1RRonMQi2hMxxiupbaWYzatNGisg3HWa12o1",
  "key15": "4kSuAMwJpLsRXVggdRLuJtfhHBbmijSNP12RktyJSJqBpgE4vxWVdf6BHL5tK2Z9UiCzfsx6V8ZZafzZFkmKvNgb",
  "key16": "2WyafJm6wG9whM5kCYu8xRusXcHDR1qjmgzv59W2S1X2YYTy4ajvA2dKbmN3iPZwK1zhDSdqokXt9KJ6JqkXQqPg",
  "key17": "4mzpmCGmfZoDwbW3PkiGFGq3Znn3hDs1jQYrsWA6nohczNz2AyexUMQPntNTryudLwECMFj4rwWTBVedoSu7iw1M",
  "key18": "biYZ3M9fCsE8TzTdeC5nkSTen4YfeGjWA8Wr2BPNmPNUKdZVmwZfVX4QaNHEKi3WMsaK2B6rc6aoLmyb3qgNEBM",
  "key19": "23tKkT5CmzMyVgDXHYQZCm1mC2GmQSFdLoMC88mYoSodQ19vAZgDVRayksdHNWKsaYcqm2G59bViJZDqMu5Jr63G",
  "key20": "n7AEzpTU6q6ZWgrWHebNrf3G11icLotGFTWfuYAR5DLFTycdYdg1iwzuQPkhHD1Vych42UurBM6ZdwqfgbZqdrr",
  "key21": "57gjkaeYePYdgh3fdbc3zjbHUjeb5zk2M1M5eLm62mSvu8chKF7bgbSmmMjG88vYNBx6Tj2TtDBmYgKAujMACZMZ",
  "key22": "4BDrJ6WrN2DHc2x5gkFpffkBSmcLHBApBymYjNHdXuft1dMWi7JMSVstZ5BnLejFt5bkqwa3p5idLrQUpiSeFbgg",
  "key23": "9Yz6sZDPKMD4pXdMfMFEM3W2Yg26bJEuhJQi4eEBD2JnCPYGGt1AkKqS5fTm3th59P9UwrqpvRRsGytFLDoVd8M",
  "key24": "4gtUjCVZ2Pm9GpoHTpmt4Rq953xiywLX3EBuB5WuBxNC9HHzquRAt1JFFjfojMXJfC79GXEduBgEzCweweGquRG5",
  "key25": "2krDEW7E7JHB8WnuCZUfm9U66a2zB8VM9SuWzPqiVaJvFmQSZPSpDsRr2Afc6CkUvZiAEGwKna7eyt871keginGv",
  "key26": "53ipFXx4QZepJnTQbPDAN3FXWcLf5hAAyZm9BJTjwBgrJ3G4kW3NUi3VNZb5sevnWWhtXxN8m8Bet8oeCRy374AK",
  "key27": "2U2NtAL9YYaBZwLax1mqTU3odXAQHAM6Mj8MvQuSGePuk4LA4WNPdtgrJ6JG5f1Y7zZBWL9N7wd1ygXTuyeC4Wvc",
  "key28": "4rRN6fa55fvSou9c1SurZt6VLsbuXiWqepMdnQkEBaAauBz1cMEeGpy67MVMxFP35g3GKoNKPf5WWRjAkmjgq2dm",
  "key29": "5GqwC1b7wq4gEAaZ178u3HyM6cgwEXTGF9E2pw2nbZ8icGWGi4baWkYvHVTFn2nfKU41qM2Qrj47qQv8mY5JViom",
  "key30": "4Hg5Hdjr2DDQbTWG5tqzLwrgdi6WVigMW3W9Kr3XeC4CWc4D8izq8sM6Yu2tZGDYwqazAtp6YqPDUGDhhg3is2nz"
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
