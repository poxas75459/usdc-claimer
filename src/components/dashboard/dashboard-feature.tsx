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
    "XReaZVYD1HH7UECUCZ7cdmD7arjBXkogQz9iSTaF4U6mGgVBUeNHHyawLqh4s4ZRqCFo34UVe66qMitAErySRzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAL6QoS7tb2foeDnRW2Hc2t3ob6ScX7r5sA9URiq2cC6phWThrS4sTRCGzWT2rQ1ZAXV74k4JEtBS3hJ35i6TVp",
  "key1": "38nEZCEZtE55g2j3usn9eZFDnRbJESWxcNt7E2n6ikMVHPoRavAPwDmpL6WAGY4m1aciTE7iYHHzTxiWNokdKcNa",
  "key2": "4XLsVmDJE9fVhf9fCMx8111L6rKeBXFnRp1GqT8tAy7PfpToh1ZKVFULue6g2KKrYJtLrKb3txUxViXRJg9pF3cT",
  "key3": "2Uitqu2CYGR8bMfu1CNUUsDtYxgeHXEGeyHKbBq1h8283zus5MrAzAgS6rGSJ3x1mG2QCBMEkX5x3h6ast6k459k",
  "key4": "5wAd8LAFJx3PpdRk1FAdQxbubamSF8ZDqJVhNn9rTvE9oHBAfdexGDcBQzA9ANJcP9Ly3d9pSmBjEnCkhLorTz5n",
  "key5": "3fBUFtVDC8SXYtgQCTh4gYLTPKTLCNGBx12ciNrkyNyDV4z3t9XQYMgX7pVUj62Xw1CjnotDcfZ9HXSWUygGkTGv",
  "key6": "4mcddwQ6SJ8G4vds7eXSzBSFHkCQgPcKPAQAFcAjV5q1ByKsGzi1apr7rrvsEDvySpoYhwPwzfAc6DDDFCu1ecbY",
  "key7": "2vWus6aBsAGGmxYZbCkRN7mHBr1Q4NMakk1rL49uu3vBVCAqevapoZyGRqJWNhrCuYCA3Mr7hEztrDuiPmRNMLQB",
  "key8": "3oZCkBVeJpcP8o3uWfTGGgi2k1JWMNHiUPK1B31XGRE9cXiXzcsrpDDHJ5vLibLHv8q5sq26JFfH8jMkcZGBZhkg",
  "key9": "4wDv2tCQ76n3nn5cXuALkv4SKvngvGUJrFqANyDPwcHD2RWo7G7NaFMUsSWZ4zUdehAMYW6e354HmzTxhHrzsRFK",
  "key10": "2tCNZL1K5STAaihibP86sshP12j3rZNStN9c42U9PLekN8mLo7zxoUqLSAs3wfNBFggoZ2oH4GokB5Mefm2vrSVt",
  "key11": "2aJ5xuN958Cifgystcmp1PcZWKG13ksCjNjKsFnuhpSfEMESuTUiekSfsooiyNKcxm9w8EV6qYhxTtm67DAH2aND",
  "key12": "3Hkt7pQnfSXTMrZzLzhSiUMmhBUKR2th55Z1cmocuzTscAthXRvEVynM2pSuNViDdgxA6G6SZVsW3QvQUmTQkTbc",
  "key13": "2THiomNNvQKPiaau6zqnjgNMVYphsWAauzfHHD7rDYprBAiu6dKzRA7bw6MRUE3DLqDet2QcEWuptMXiNVycoB4R",
  "key14": "4G5cPdfQ7fb4qwFtnnVCstC7ZzqArpukYUPXFS36cUKhfNKiePkfTTTSgydeewESK1xqz6yyYVLB74WZz7hosQt8",
  "key15": "3mCdLeoP7VUyN4FAF2MUqXCw9KSV8tzHGUqgAunGgF7s1CJuH91SzEtD3RgV6BFJBYYXZsxNfBiNok6wxLgAH9Lz",
  "key16": "4K5eHx41BihPVBLKo5pzyTscFiQUx8nZVAtYYuhVuHNj5SWHT4UWL7xyRZCWFrFD71UoLpY9379yAKdhNcDMdgeh",
  "key17": "3Jp1NjWAp9sB6xBURNawxvtiF2wJs4a7jDcNN2oDFuswZQVV9hwWrX8aPuF1N1yLRhpf234hFjCk7CqENBNuPdua",
  "key18": "29HzuVE2A7hVzUgyB8QstGKf7hVuGKoWw1MZ8WicyMzTfgwc9xWnTULKKMU1onGykbudEncuadCdjaw3ZkcDdcqk",
  "key19": "5PqfsknMWgZSEiSN7vDhozjD6co4Cif1LLJ1pzuAHbFaN6uAvtT9s7QhoFRi5tJ3QJmDaBQqzzMcoCKa8Q6r7a27",
  "key20": "57voprG6GB1tDkPRCB1SxdVStrWKAb5xPyCSQvdhmQ5ovce7EnRhgk5QbUX4Tu1MmRAcZKT2mPUasaQaDSQfcx8N",
  "key21": "hJvM4fVkccti2tjpHvzCGVZMnVB7XcFjiddNrCVMvzagq2GTzhZBmCNP5uAVvSQkQQtbMhqJX6BmTheLsotpdhD",
  "key22": "2eeguDss9YVtFHyhVEziV6yWdMTiBxYTUWkA23DLmEh7aScVDRhU1SLsVVk8b3eXyYzT5eah4yj8ckLjra896f4s",
  "key23": "5VYTGT9oXCe4KA6BNZrr3JgmzGFLEBYtsWXhZNxDD7K6nEW7e4QRFFTZRjZSgaL5hsAWCjsCsL1qhLrR22WBQkMB",
  "key24": "2bsHZosZWSHPnxjqo7rDj7aMuFq8d1g7DPmNeKipADQA1mgjZaGAJxiYP5TJb6kcqRoCmkHkjw5MCTCFvXPbA1oM",
  "key25": "3ZhqtF1QJGVnaNDAFrKMH6f36ap4ypdCh1eyEkAaXN7LXUSxK2VrCEmn8BWi7CeRihM6DiheYWVwjzdN6dkQbmJc",
  "key26": "4MeaydMk5eCSQFPg6RACbmmWFUyENNsXi28DEvJprYkcTAdpasahHLtneecKCEUKxXevyviC87fs5NGg4Pxvucr2",
  "key27": "hv2Jv4s1Uc9KHPak51GzWGxxj5sLKWn6rgrM3ozn3GyAZ469fm4gx32UYFqRcXwBZJJFDKRN6ih2RP6DtPGWcT9",
  "key28": "48wW6HsT8YRB6Gr1HjDJ8yBBE95L3xWBkFQNXLbtqNsZCgQ2tFV54YpFD2GZHHH9XX3ao4YPcEWZcXCRogqvzqgu",
  "key29": "3SaMRzot1NfSbVVcCfcTzjiB7ykTpSWnnhGNrAyFFJocoq5NpeF3UpL5GVPmHJ5aEyaXWEnL6Uddtg6R7K56YAuK"
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
