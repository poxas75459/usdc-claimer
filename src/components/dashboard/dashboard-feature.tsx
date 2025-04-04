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
    "3shi3YjZ7dHJED7BDr8uzV9K8QLrv7s6ouHwXjHHGRMNS9P6DYNADWpzodvGGJjNchEUi5ZuyxjaAnECt71a3G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKkTyAezbZYnyEmjPAQQXovbBEstAE9Yp7ZfAJxrw1boDQeHm7UTBG5iNKQndShhE5jng5eLAHQ1UpgXDC19c9L",
  "key1": "p3uHXHo5gWcPamj5ke2pK9DEj8Kpsf2RgXJVpJjVjT5BSjfEdXfASjAii5YFSWtmYc2qPQa7FtyLfxebj9p1CA7",
  "key2": "5DF8PW3gEHtVLLceyVLYvaNvPJFCx8rpQbhdbifBaP3TMkPhgXXHU9bT8c96FY6rwe7cpKQ1qNm1c6sewoexffqq",
  "key3": "594XZjmzKous5HCrm147ANnPneUDgTAcBsVeTt33vTbQi2UWRV6rFUfQkTn1XSyaiib3TvhA3vstsz3St2pFbHVc",
  "key4": "2vX5pQWjwAcaNnDAWX6vrteW5QXyDc4tthBhG1HcKLndfNy3K1WJ7fDFL66SKQMB4qZK38PExJEnj5nwLVX2zoAU",
  "key5": "2BwWP1UfhsvH6LBgo1yMCqujRnLTAeQCNGJ79tF176xQadRTrCadc2F1yJvnJHurbyUqf2AKVpVhUTW97Un3m5Pt",
  "key6": "3rGCXmsQjDd51ZS9QzPA8jdRyLrk6aG74igojLmVtNnh7Zt2b3yBEZpSn2V993FTYYdTJP8izpHs9sZi9NtMYy1d",
  "key7": "3z93c1T964fJ9Jp4JeLgmjq39wEAQXyc2gaNvRwpD1cWXG7SgXAFTQ9kTBUhjhKjHEHj7j3yukq4wmpMfeULWLjA",
  "key8": "5h2jDZimLLgL6cXNGm2S9JXGJuvAHRBY4xkiALHNJx1qwfCpHtPFzSJ4t3jfZWPNhSU8JCw5dhS9DVWYMeApSijB",
  "key9": "4CZWBQYonFXcQ2cuobewPS7ihnVpRi2ZCyWDMeZeE83WH7L928LJ94AUSZtHGZRtGEiTNwNgQaMQP4vprB8rAPwp",
  "key10": "PgffgBVR4RrtV3StZoSstufTthbicK1gQ2YixPvHgyAmr2Yd1pCrf4WnV1oDKjPh8rJcxCzrLqvhmbmQpPzJLPC",
  "key11": "4qQswuGHquxvRDpdxt2SuDpNkKzsyLQt1DeuNbu2TesWzER5YTvAW5pQ4dadTCWmsFvmLcuHVHMtXKEZCzo3iLfp",
  "key12": "3AWcTTrtvX3dT5zqHY6JwKR93dBMrKtmtmh5nCMbWZCJEV27KjPRFro7uZYAxNf8ewK5cYLkdJwaQPWiHWj4YrMe",
  "key13": "5CUmzUKfspdYMZA9Tn8FaU47M4zPJRM3uFysHQN6fyp3eHEZmwSJDmh32Gc6hCd63vApkPKGUCyafnQP9kBUHBhA",
  "key14": "4uDpjQ1Joj7Ft9GaNcBxVPmb2rjauRtw5Rsgvo2nLTqz75nkdJPhG17MhUhoNPzAPuMD8GcU4SaJVrxyV2M6nDC6",
  "key15": "3mocJxWw6BPsLq2G5X3Ar5UnnKwWKxzUqXVYNsC46YXpsb1mnxGHeC2yfPz1VwRRu7oSLFftAjffcEZKjVT9W19U",
  "key16": "4jp3id6r1BRUoWXdDQNHCD3TMwvZt9JpmRu8vhcx2Feo2efhahRn4oZLcmxAzH5wL7JtqE9KyfDsFGwq6jtWXoKB",
  "key17": "5eoLpFQp2xxPzVBczjV3FtAJFMRSP5zr5FyJrgYyv6tDwq8MbaLW4V21BLwoSBvA9KT7b3nQESyCGNU8A6a9e7K7",
  "key18": "RBjX36renbmNJVa61cwUAxcvHYzGWwHPWdb1X5RP3BVZTSY7RGLSKfDRdhc3rKsVgmz1Qi5EHUiTMNd2GRJvZUy",
  "key19": "3s4ZQ5wT3EYXTxV9pEf2z8jV7KRtrYF25JP5dmeP1BnkjVAVNnCsNfdoGafRsK763V1VD2MFhzHaRUwb2UhsXPdm",
  "key20": "5AwptRK219s78xgdPj5axwQpDaP17NpvmPcsHtnHXRLBATmUBgVsWhR2W6H3FZD4jdtByKqAYZaEwgQ6VrHvCn8q",
  "key21": "ZjVb65MKEaaCsbMHvUhz1SKxiWsMzz5HWzfLGKqhVSFQdoSWeminiWwmD7SpWxXJUbjnYGprBFDXgpsgARxsjNm",
  "key22": "4SDYU8yD8cowScBkzf73C7ypj7mAurr4Bo5imVkVGF4L27MvCrvDuv745jPz3v2wxJomsCdt6WXgU8qkVKZAD11V",
  "key23": "3fSpgF5KZ94JKFWZMP8haKzgLz59txek7HxV7FDtPBADWGTcaQLkC7aAmBxuW2jERt9bNHu3VTM2wK9ytqGRfxD7",
  "key24": "3oQ2x4onUdXodExAjJn7THjTAyhVinSFoNbNwZx8fpMr7P27bytuPfaUGQ8X1P1cfs6GvEKyzwtyhni9X1RJ8HEB",
  "key25": "2J5jmS7JfmztDY55iShHPnw7RDuwa7MFq44sbbYAkikMvqxWoapNpugrSbvANEdkUB4UQ6MmAPb8p83nVGeU8ETp",
  "key26": "52zNQ6YvudxR1YruFwyNqDZdvceyQC63J41pn3m8GmzePeak7mcJKN7XeHhfwKP6rndfPu6NhAZNVAEzqddnDxiF",
  "key27": "3fD9bBBNUnuegyZAuFpZ92mDTjNf5KCChVhi5rn2C4kmagknssCjBmYx57cm8T8RReRnPAZyVZQSFfdtMwznLLjK",
  "key28": "2fcYZcn7EdkpD4F6KefAdCe48k6tbj8wZkPZsAMWVsqyhH8GxZrrdya268asqviP7BbEXm7AD86JrJ7jZMs5tPHr",
  "key29": "428AkMJKeZHufdV3R4wKuPammnGCTCECKSgcfFG3NEJipBhtPkNkSCiX8UaTPyuh9oFiUL7VsyvTLD6Uni8yojmv",
  "key30": "Wp2tMDStFqK8SszHSZh2XeK3faQKBgPQvtENEAV596sfPkC2hiF8m3WmwJ3QiMZ3BS5oP45Ln8DMv8D46CkiwcZ",
  "key31": "3CnVGk8VVTYh7C3Agqmh259HgJTJJ4YSkvuLzB4VqwkHqPKZqgp9TVwG7N1Fs1RKHVUn2cQaovcPZugwWYo5cro",
  "key32": "5Mz7xN3DViURyH6KAYL5BNEVnZmzC6dxDKp4yAUe5D9oPDhXsLxpkiJVNCZp3uFn8z3um52GoTECd7ZvVep6MiYL",
  "key33": "3FQc98FxC2bykXL2ieoJ8mk6m4WpDwX3udVE51jEVGFU6HFWVggu4mgfe4Xz3eck5i2NxD2QnispH45dsDKx7PAK",
  "key34": "2Zzx5ZNg34a1iw7AwcuReRMaMELjgpoVu2GPrd6ERy9napds9VPxjP4exxmfQrKcPc8bV24o5rtw9bKco4q6QUPW",
  "key35": "3VDJTJK7dJaNAFJs4rkkoAcHxj5h8NyYnnrwoWfB9nNgioSTC8oRqUtyM3bXykRXVNRKoYYiarWk7YEFCbcZ3PxE",
  "key36": "2niskt8UpqM2Sj6RWqAz5ycMxDnKz41ckNnuJ9fSxVn2RZKX9QQqhUXj9qD4av3AL4XAPNudAFAsiYqmJfrL4ZEJ",
  "key37": "3nCdFNLBm7dJ3yF67iGnpJUm7H9rprsh4Pe4MBTkmeppUzcdVLPPvZLLG6psyQk6hhSvNvBC6dLU1qYj7LDBRBrZ"
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
