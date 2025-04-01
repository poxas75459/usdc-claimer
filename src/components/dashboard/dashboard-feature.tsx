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
    "45p56pq2vmVtcGkDSfpnurk2Pc8s6cNPGy8Ty3MFPSt67oaqwHfbTjtYtPL2pyHMCZhpMeXL3CKJCA8iwbR1wqdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27w5tMf18azutxUFqUPUbZA7oFRgcQpDuWLS1N1X5FHeEJtWN4C4aAfDFAWSRuky1rDios9pwYLBC2Nujmp9JqeQ",
  "key1": "4dKugNoK2N8hSdS6Cn8CfRtaqiUiPKJnGLT3vrbKbs9aBL3bkApy8yorWtS3M9gzXWF4DusbajMbjrZ3gABXMdZy",
  "key2": "41HFkdcankSn1PATWQRtS5y5Yaa9PMitNVwM9zgPfMFVChq283vn76Yh3Xon3f3ZS1dxruJXt19SJgZe2yg3nZym",
  "key3": "5mU86nS4aNQpF5HamyW5Vwkx9nF9h7A4PqnfAzRJjytLLkomE6jkphnnYWcuNGrPBG712RYMRWqLfNQohEDRtT7c",
  "key4": "ZFHtK1iQ773VYj1sQFAm2vovK7MLni4Buq1yMeAxZuX73SCZdPrzSYpfLcsiyeNffYv6K71gkHqhytyefgjKT2C",
  "key5": "5hpQC3swTwpTuXrAeoL27dyUeD9MfLjLekR6QQ7drxcUjEwV94MR6b43ZLia1fuExdvp51n1DZiva5uZ65x4PhXq",
  "key6": "H4SFCeajG6Vv4VqV1iQKmADiLh6pczqqvv5SjVqi8A6AoKFw5caFnQ6HWBgoqtsqCYhAWr5tLpLs3SbeQfB5ALz",
  "key7": "4jDG5Gju6QKwi2TaYsm6up28wFPU88okh92QytL3p3e9k27nbrR1ZsnUbD9wwH8d3jz9SouPTBxbvhSsAdhat9Dv",
  "key8": "5BiRJoCAdQdE9psCrMpamHeFvfbrBCncmqSFaJ6KBKCKYyEWtndrLeEHBbJXYEJkF7k2CyZH8YQ5VUx1LXXGwPvb",
  "key9": "PYfNPhq4HP2tiaWVo4DEcTmu8K7Aujw7hhP5EKXWtwokPhsJxGQ765eRHdHo8hRZjUPzj555pFD4NAZM5f3Ro7f",
  "key10": "4wTufG66WmPyk6mWvq2cnc9nzxRRYTUEunPu2GJ1B5mfWeYxrazP14YFfzE8AkYvH4Av8nMS8DM97Sod3PZYiuAk",
  "key11": "3LSxS2mUeZqgzpzodM1upqiKcmE54YTbnPxC2yPvupB8fzmTArFc48aGuT7QfkmFWYf5kiMDmKtsjC6CPnPdvVBB",
  "key12": "3rRfk1yFAgXGd4bpURd1AwXckhQk18tdyFg2FrxUNqRHJf9Yppdq46ENKELYvQVagj7VNYxrjadpS114pFsAm2pP",
  "key13": "wUbT7Q4gk54hMci3kTJCypCueadMhNLTa9CuMNzGXSnriVXKGDeGfmbT5HLiDb2FCvS5Ga5B9ARHYoxej1nQE17",
  "key14": "4izPxVA4BnfcT4Sbxt6c4qzGSwyAHJoJqMrckvGBZCPX1hEjvqsdhEjrY1cr1N4gyz5d8ABAremgK1hPSSKnwGy9",
  "key15": "2TkShyX6MP1u1EwWszZc7Gdzbpsu9cS8qY4wk1j56pJm1EKjNyrfjXVrj4mKo3V78Mn6FQ5GVuChqevy3FMW4imX",
  "key16": "WniMdAmTtHbyxPL4MaYxGnsKPLwRYmsijtVji32sjexHJwyWjXmoDzJ9d7ofkk9xPGdQ3kbL6VfTLXbC97Npf1h",
  "key17": "5K4z4aWy6DQfBHVFBQX7HMNqS2QHwCaDuHunkYHaEMn9hCeo4PG3gXCjqDyV6tVSUzM97GHshgojWRF9bfd7XHD7",
  "key18": "kiyjBVP5fRfHuHMRd2HiRosLMCUPaUrX5V7Q3eWoXF78Rk6ViJmgHbBGJmSy4HXGQ7xyJyT6JLtGoFzDzh41mMS",
  "key19": "67TR3tujqt7DCvSUR1eu6QgpqxgdLDvgLSr3egx3WKZhWYQvpm7DEs4WARUkwNXCUF27XidF1MauG7pTm8gXzf3d",
  "key20": "25GF9vUMqyK1m2sfPDZyUJH4ruZVJCv8UURNA7ifTMPxzFfbvmxzwbmHKvhsWmsSPKi1b8hqFjVQg1Nrt4yPAPoC",
  "key21": "4GLZHfYm77RDZTzoeVGFwqcqpGgrdMULbpnPcEeHwHYhH2zJsXMNTtFP1sFTJgBvQo3JQsfmi9Up5tGHfSXKhVmD",
  "key22": "4Wa1keXndhj2R3eYV47sGKZgzjVjN2pWj7nzypGbAj6Szd5f3dS1FwYCCyGFW4u1uoTTpX2vEDdMPWZYtxX2CVNN",
  "key23": "3u9wu8WrnJ8viZ2HmhVWf9WVEReSnzDv1n9xWdWXXDGebVDiFpTusMh3hQ4JrXFbNDGcuCEzkGsmLoPd4dzWa3cz",
  "key24": "5CkGptsPutRbE6MGki5T9ErK6sgxky2gJQFKyGCTb7YQJDyet5Lc8qdusPFspUjY9yoa329aUD4iM3fAxZB2Hjwi",
  "key25": "2qGdYxoKaTPsEwnesYfgbCa4gNhNqqh3LDGGohiopMf3WkLFmMu2ksHshhLy69SrLAWWwTCgZA64aXaKb35PXnnH",
  "key26": "2epUrk86Gz2AxuDkfUkAvDqwaVePdJCMPf2UEoiYHhEEzBNSSRvxPQn8hBfb6Vn7zD2YywBgVedvZZk1t7k9iDnw",
  "key27": "4PRt9QyoK6Z1yQ8HENLyTGMJLioatTDdQPArfYa379Yi6C9VsU4iE55Y2jD1Xt5KAmny3aGnaa3M65XuNXztnARS",
  "key28": "3cY1Smf2pNXk43RvFsUByiJwLNHs7yrWbnL2ub6rtEWh7AhmqT6antSVAhseFYzQrwZnxo5zDEjKTWdZetDyAZiP",
  "key29": "4nbjog18s21HxJyEgny4AMQuhQJrSjpyfRbk6RB16hiarBCBRfYZQPLh9efe2bpboyne5fAfrTHVqz1kQrS7TLLv",
  "key30": "3rw3pKvNgRVPBrVF6mjFd5NuHzNyinMAPKXfu7iTGxKEu6tx6ANF7Pxc2nTPgNnU3FgWkRWET5YUFRxjakgfjWN3",
  "key31": "3BY4oCrUnpwJnyMTy2KbX3axDXnHPKqJWdpBAWMie16NJW7DvCYV1BSw6X3HVXkAbpc2jjfikEDsHYzQT9dcNc5o",
  "key32": "2CytPk9EgCSadN314QiSfFytqezxp9p9CMDPQt4j2ETzhHwNcDHoqF4hVPjX2AcXtCMngpFes9sT8NLTJ8zgZjJP",
  "key33": "3hasFUQWkYGLfsR5phpX5wg4cxasCGBwuCKj9erQvKsSSyYkLzqd257LdZhKCibXWoDQuwGtUZpgbPaZMGaGZF1s",
  "key34": "5ogLo4bvRUpT2MLRUeV5rZA1Z712VzkNiu6XDFP84DXPzmziL4aJuN17LqiX6bZpEWTRWFQzUGPcCVjxXCW5vVyF",
  "key35": "A1eRCCfV1f2peZaZBWG2jxfNZ5AqUAHBVE4NVSkzZhCFHkj7ntkEKkV5h9VSruMYJgS7qBhCScMMLpzHc5SyPXR"
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
