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
    "5t7wFDv9Vwo6DRe6qKRzbSdfEDQY7oyiBMubpyeoSpHcTwMkNXNz1FZCpXRerMzrHxnjJyDjqSt6YxeyvNAsF7NX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHRHYL3KHSPLPi637cRDRkWd2zdu82m6nSwiCc9YN65YjZyiZtPUzfV4vvcyM8g23qqCgkeUkNmK9Wjv4Bbf8sp",
  "key1": "5ckAoXiSAJ7SMDgS5YsdhkqFcw7a7SKPeZ9aCZZBNHxMxttDNpvafnwCtqCMskKaLDmtWkuhsX9vKsnTmJhwjpec",
  "key2": "oAa2wYDxnCfuKjHUt5Wx6ArK124ZvWaSTzXbmmckXHyAxiJKTNdreNfgHgP4cG6TPR8jYuRH73rBbLCnsXVqyRp",
  "key3": "5qqqrAPgje54xHhCWrX1exENXWZwD1iLuZxRkMNmyWA1poFxy2mBajQkikSmKFzkaJYsfTTbyY1LbXHK1RXNuSKM",
  "key4": "26r5zsDZapjRdYr8yLYQKVBHnTwGTPSQT2B3frNK8tuU2NRyzF1ZUHGiamrjGnq3NtZEM3q79YbbUQSX1mHeeWZD",
  "key5": "5o1URYCddVbhU4wJwRBHxfgcS5TqUWD8fA5ys8uSofzbGgGe1XNsVk1YzsbXuEw9rJhUTdhWesbmj5QmFqgVkh7o",
  "key6": "5dKxWHmxX21mUMZ5L1uCyLJDjja7GkJt8oo73VKB7bLQ71LVDZ4pphnihnPm4f68XkJNawqrUVRST4UsbUX61Y3M",
  "key7": "5KpJGYsYF9to34mTV4fnf9dhKqEGSdeQnrePZt5k4d2zL5KYdiL1MrN15NU6pUgXd3NEKXXxaXPGEFJKg9oRndj6",
  "key8": "cQ69sUCCC8nSExbQpka6mH2bNK8d9wxSd5y6k41rZZGHrcUhDb4Ev5KpxaCwWx16w5RNfDbSD5Z1kbvj1Lod7Eb",
  "key9": "3fhCmjXqgwn29YYTAjdAB3N4YEbA88BjQ7CUEKJpy9AgzuSHkWz3cDq9yFHNetLemGe9KqxNuNGMPWqXCnLxajDK",
  "key10": "4r2dCAuPWn3uu8W4dPWCQFjokbXbtv6fzAW5get5KtZGWntxkEb684RJMzPBC19NPiEycMxdMrPQSHPDyhoFNjKn",
  "key11": "23KP7Ca8Yt5owSVwY7mdCkaov8PcUB6xbDwo1KGEgeyD5UU3JBbzoMPFbZD7Y2Nyysj9KwNysEXd51cYSXdQMD6u",
  "key12": "3DmK5KYw2Nohyy4zHe6Dbok4TwDuB31nkqsdFkH2Z1kfC37VGcgCdj5tNVxaLT3amLZ6p45ua1c6AKxtxnE6dGzn",
  "key13": "59yGVYY1GxxsiGAG4zMVe2ZWiisaWgRt4gUcL51NK6LEQNGf6SkZ4HX7EmkCHm6ZwmnY2vWXmxJsfe9Rct6BtWdt",
  "key14": "56uGPPsZoz139aTKweYqfEm7Sv9nRzmzQ2XzaVCnEkMejp5815RiqNW2PvXaxbPh8GhCUStsLRZGiQTivYix4psU",
  "key15": "2g6HWBGngQfGqp5EEj5k7oZQQXE42Xohzcg3AQhJ3QMMZQiq6afVRKvvsx5wXR1CyGUQTS14KYEyzYZTEWt1JnDG",
  "key16": "2HYCeWiGrGFci4hQ2PiULJ57SC8THfFpV2ZsTU2EdRVngV13VGMEtph3XDMbCf8MsdaBdbaWQzMXeCn4Jv26UBq",
  "key17": "4VYD2v45mwxe4Zg5ettti2n6pM7DdkwCZKFyNZYrqeF1nmyxfkFpJJQFnAGhati2D1gm7ng9cU3DYe3bStaHrQts",
  "key18": "2xE6F4FxDxPPUs4vLe6XWgUeVoq3c9z9tFL2djdbLEzVEww1Mj6h5pYkMKtP9paoKCrV4Hskvoymxq3Di9wsZbz",
  "key19": "2gyUjY4PPFNnEUrv1wC1RLAJN6BxTdCm82NWMDWRdMdYvP8TMX7DE8ZfBspDdzdXHhxKubD7WfQcw8xuiiruwkyv",
  "key20": "H7gQVFFoZRnV56wCDEcv8cXEZPDvt7f4uwNM7Bq3dA3zrxpFjkeyxtSARxhEmfKTuwdzdebdJprJdZ12HUrA7GG",
  "key21": "3tBdZQsiPzEQynbG7f6Y33ZQwHSwStVjo9tVSNxRCePYAqTkST5UmJt8zdUjKwYFw9vQMYxvPWwmTMGSkFTj1a12",
  "key22": "5Fjb1RMDVJzBsErUXLSa1F5riokMxbubwaBo1WxaxC3qcMuZF9LFZr7iz7kS9mZbXr2FwPJVynd1XwJYgDFT7kPb",
  "key23": "561uP1Mdd8qhqZgzZW4M8koRMwV4CVzA7zo6U6642JZnXcB9X2LhevPK6oJh7XRwMQyWXSBs2iaoXViNFhVqeWA8",
  "key24": "3th4T88z947fa2SwtQUusHetaN3NLpgPpLY6URi8cvFHAWPKRLVmSN7ztJtLaYXNzWvDWrpdbKTFwTyQzhKFcScK",
  "key25": "Mav9W4qP24uNwb1DLdfJuETs6P3n1ayqL2k7nZGnpvSuJZrt6vRsZEpXAMP6FtnxjvpqALgYnwrqsRtGqjfa1pe",
  "key26": "3e39gX8925trcYmyvnejDt76LDC2mQFkWQbH1bMdYR6tVXUSfXFNLVJeaeoyW78jvzu62cSSt3zCFNFZgTsBEw5e",
  "key27": "3RQt4JpFdVTKasAwALxjfby9Var6SnvDSB8NNiaukZRgiDnbL9ZApN86qyko729vM43QC8vqVkRZdtRddN8YHUZV",
  "key28": "3487tuiUWiJv5tEGhQ43S2thT6cxfpkTUkCFfLnfCf2GZBXaLSyin3bS1j7oxdK7efRVfXZhH9ivzM4iHU8stKQn",
  "key29": "3oPbwgXswUgmegZxgynkcgHptb9eqTBnTKMiTmdsMvBgscpmKYqfceB2EaCD7wE6RDVPVkKke4SSZFi9gvtTGDXN",
  "key30": "GsbQ9KbNPyvdPTjTd6ZaWSUFfazuBaWH3SFkJuxdLAJ6zU1Q2PHsywd7m8HCcEqeQnfemEstyJC6G11PrZQJaLM"
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
