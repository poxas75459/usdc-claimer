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
    "4EF79cYPCQJytwJ5zNnJR7fHRc7uFfx8oSoHQjjUHmzwuD5sWGsTq8dDKXShL3s5Y1KBKBvKB4DJrwAGpYZN7wd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8VyukHFdMAXY1JBCU8rAZ7mEZ2MHMLCaLCwBTMt6moo9RhKpnMmNvUrY7viz9q2fWBbkQKohM4ChoqPZVKodKc",
  "key1": "BzTGTBdYvBmBVFCSDiDqkdcpRSmwQZyycwAJcM6ZwawZ4oEtNwURxEcpPfqcKfRxBkghWZoEUU8xuVkYQrbYs8A",
  "key2": "FGNCfSq7gSbggoz75AWsHk45VAdbf3QZKmxoWxAzMSFTFkmWnHj1itRbF8jgSdpW5mG7Xc6hd7i1msHLCdJWXfG",
  "key3": "44QFVCzeuSAr1KdjMyiaKmpuebLN3Ja2Wf8dtte964XALzmkXxU9fTRX725DH2Lv2T3siA8CbEFN1v8gCoRaoAZp",
  "key4": "3ZbQaktZtXBUyPhFiWpKwN67fzgrZ4i8RUKpi1txwNxy7aMsDAxzHKtgzGLTeaoTtw1qEBZzNxETSzG4k6vYYtmm",
  "key5": "2JXWKmXTtxH9QTfGwuMBiegTf33mUqHKSs9nYriv7GXrPuexBrMGZLBHn2VvuRHgrdToTYJ5ApLND3FdkfuRP8Sh",
  "key6": "3EKgL4LLFPFyW8WZ81HMKbSGYJDDziTPiiQmaC4gZVF6RRvg67FwZv3XCg5s3EZsH5kWWJAYm3otn7QDJpCdfvmV",
  "key7": "4LtvjH1xU6ipBPAv9RBTa6rDY9QK9T4nbXs8endnZj1DSrhYLcP1MjTExZ9SryE9CQN96B3EAGfW2opp7MBV4gPA",
  "key8": "5b2eSe5V6PbXZofBFm2Aq9uG7t61RM4mgrCpoTMfQoZ5jC93cbU4CEao2gYcMCUiLXGb6f8d7aGzLs93vs7DPSwK",
  "key9": "ibypB7EorMykMoKVWnxLUNFmpGgTkXdTXhoPuLsKWXe2FoVBdPSEc1HQasZRW4EA6SiSp4FaHneeaJ18BbpFnK4",
  "key10": "22RGTwuxskH8cjMr3DLBK1EguHMDcD4cWwkopgGSdpnXpH8yY2dfCFT8EWUyk2Vi3eyGjNLUfiKM5ZJcxAdRYwnY",
  "key11": "TtNNW1nBjwLMZm1TdHfrs3r2oHDEsYMVCw9KJXYBUspQQyGaegFPHMv4MEmMdwA1frBqcLYehCsyQQVjYduZvnk",
  "key12": "4WSuYBVmPz5LG2jdDETFv36x1GbMMHvSk4tkTSgViBXccUqFAuzNqNvRfgzYX5gihm7FfwAuLmKhYSgKKS2JCNiq",
  "key13": "S23KXn4iuNWA3ntEgj1EHz35h9u3jrFfXm55jgPW76w3AQHn2kKcxp4XSdUAQuNqRUazxHZwX9uaKhBiDwA3Vrq",
  "key14": "ymVZEZe7XSAnLhLxHLUqXY8X7jJFbx3aqWAmZKqMWGMwdbMA9ytPdAkUbvA79MDZmBm3qEJfXwXjJptKmKR8Lf5",
  "key15": "3dpLpyTZj7dnmntA6eVp6dkzzfmgxGia3WmVySTuzWYAPr5qwxB9RT3h5cbbx3R7mHzSYPso6g5Vve4kpYzoJ5r8",
  "key16": "3v34uUzrvfdXLtnedPQqjz9gF8SHKFNngqgTYxwAXiNbLgDgUwzhD9p922grFKng9Mt754tzPZHtcyG9Cwd5vowk",
  "key17": "3F1LZJgDLfuWyHBZ6RNMistkqsBAu5vBovAULatG2aqBApjh6pw1Pkwv8DGzcRCLPFkgwPmNwzVN9sQ2Qt6e4Msb",
  "key18": "cEeYRUDS9JTwVnfNQtenJcb8B2FJ8qa4Gu15bp3urb85hFvFrcfNLDJyPDJYHDjGNpsUGjfpEdP7FhHAd54wAbd",
  "key19": "3p8Wtg4u6VCiiJv7HgJKidUGxFBhW4pZV7zySSR7P8s8HjYiU3cYQwSSMQW8Y39wR8vBuNVw61CMnTCyKqsRGD6Z",
  "key20": "4Fz9CkZcwVh88tVXzZqygG2XmaeYYce4vr2KoQzzgn4yCh2pKwfRXzGaCRJRSMiDsXrxGdREMKMNHscvZMFCWr9Q",
  "key21": "4EBn5njE22xZtFVdHwsxjyoAoAX9Gqphdqpu3Sd3LU6gmVFEXigfad38yE9CvJAUZqQ1nZcuEtsGEq9H5DxAxJBd",
  "key22": "5T69RajJAhPuMbsVXKfXkz7pD6LXePU3bY36RWyU1SVN4AxRNZaY4ekicZxNiUeojbS8B63hKmUwgeJmR3AF8LWn",
  "key23": "5QjrCNW7CcjfKnWSLZJqSS41Mi76gtWvgQSaZc4tyfk4KcaxEYJ6zx72DEFJVWwFCCUEtweuuxKtCUiG4wkNZiJu",
  "key24": "2etUk3rBt1P16azCguDpNgzfm4ki1qVvU8Nqp4S8jhHib7UWKdZhn2wHMd732xLaAsudWytsfxn4UxduMejzGMoU",
  "key25": "4tWwAzrNJCs9fNqtSyg6Nwwbx8SnzVvyHn1P6fEqcDqpiu4WXMmSpKhz5EZzyaWBXG3nrC5HxMk4y6wq38NSAAy3",
  "key26": "M83E3vV8bQULCRu4atatuF4nU6bhEja1pio4Q9RkoDsQi5t5ULUp2oihKySJk6v88ntE2MzWXf9Q8aFDFutxR9m",
  "key27": "5Ga5DDSCDx5PLaccdPvZAAwSRk3UsYuuzMWcTVBdP4cxWUB3Zn76XCEMf3GGNJ6P1d7bbuU6JaVLyLNrp8gTC6w4",
  "key28": "55fkvTJffcKVSNzDktZ51SfpPLcALBf8z54Gke9zqtDa7bj1RKReQ3MyVMHsm9hdnHL7JFiQasxxKuDPK2QS4GPW",
  "key29": "5Uu1xn7dfmGwNYqTaQ4cg3skQGHPunYfsK45AU344H6rVk6wTPeDH7oUgyF9Ejjc3x2EsionytPbhhVqtJZpgSMz",
  "key30": "3SuQzGMf7wcjNEsXwYRj5t8bRFA8jrc4V4Ub9mJvWznDVe8Y6E3mjmeBMB3bFqopUAkZnaHAQRLstEvU5oXDtvM2",
  "key31": "5KFaJFKJr1vhoLpgfbKhccoXWPKfpTHr5qJKGRGFS3J8F4azEUDgz3thG3ujShJhvewfYq6SuzcQNCw4RBoKTfSx",
  "key32": "4r8HWVN5nwzhFdRSg6wwKbC4MyS5LjoGUPwQAo7Thn8XJmb2QutYew6C4MamUmpSKpdJ57y8mf9GvmbYWi5spKds",
  "key33": "47QCmpCCD3q6zd82m2RmZiWxLcHiHQbdS2hK8Hhn2Td7yWv8sbSGqVufDVvMfo4CtaJ4HFaD4LNi6j1JCgGAbRLL",
  "key34": "59tPsPVATFkQf7Tgg74iztmbg4GKXwbgTy8jsaTRT4EP9BteLQPrYDAYsbron6KN6KxeZBfcSZ3u4nx4EKBBTUzU",
  "key35": "3ubLwitj6zgKWeDSekNK5VUTk9ELqoxfgPz8NEYTNmL1gGwuBgXRW3wQNpwLeh5QUmksRM96yS9WNfnqYiupsXRd"
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
