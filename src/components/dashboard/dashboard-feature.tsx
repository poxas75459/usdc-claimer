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
    "vDEkQ9RhNHCTCrEcrfK14bXYTrs3o88DNeuMcFhEUu6cj87Jst2q4dBkjEXZp1sPbrPtid5Rj2XADeszfR1ASRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myruXJ4h6GdB9VX9BsZik4jyy41zAQmkToKGPZCS1MSG7votLNRkyHMeusQfeM4BBhiXMVwz4ci1F6W9a8wND56",
  "key1": "WSJqueEUYbyEg1YNRJJySR5b6NJw6fCfQ2fU77dJvBr9JeLE81QkV1cB9n7FAkf1RwaCNgjsZ3xyaPGFc6Fw3gJ",
  "key2": "5zhj8ayMjD4mSK6Ks1JYRjpUkiX3fFJUQ5R2FhY4ubxdErzchePHSUj7sDiJS52yBAtdfokaRQrSRsnCfjyX9uFB",
  "key3": "4Te6B1Ho1KMZGtq3GwXQqDcdvJbVK4th8DRcKsTXH1g5YGx5zykq2zm9nAJjUQ1F72sFiUbmzGtGJTfvZwB2w6wg",
  "key4": "2YwaLEt9i3WRVnR4gxyHrsgNhbJnBS2ESY63JuzxNQms3UjuNArP76mViPFwhv58m3aXsU5QdBmQJJLmwiW9qY5E",
  "key5": "2MBgLhKTRGy3duN17sNThr94nQ3HQZQ6ZxCf95pURPhCdDAT2WYW43h74AAxJTbvPGiFZGqg2UWSqcpt2vMGPmBn",
  "key6": "5pxcWqBW6c8cKztjyfrcH5BWM1yGDDYWVYHndfrCpxB5Munz381BN6djuJcPYMdaoXtVYJbGhBAqgdTYeRaWCJ38",
  "key7": "64AMwdSNvJjqQts1TFC5aPX54MafzjJqwPCQq6rA7GfEgBQXaZfnuFfo4Lt1UQ45WUxncahWX8VeJrGgKCJGD1ry",
  "key8": "UCDrgQzxJvnTYn3UppewzhF9m1j87AayhWwX5p7TMZXRYzz4hz4axFpcRqeZB1hmzoGZySHpfKXKzniKAj42tp2",
  "key9": "hTAspZmJ3bGGA3FVzbLYUGZQ9BL96znoQY4iXkj9KLEr6rgVDpmiTtdc5JhxvnRfr6Gzss1GWPVPqZaTaz1cBSr",
  "key10": "5FswL4kBBAmYeZpmcC9hPdrAcLxHueTJidmfmTU2gSQBbVdiZzgtvCGyMzETKx66xtbb2EzcQAGDvmJrkAQ2Bixa",
  "key11": "489RKSQ8feJQLXYzEU4XrQSnPrDGjTFCtML9oQX6FGMu6thTdfSgbAT7cdEuT5SZ5qAc4jBmTQyqxCXjfMxqteJb",
  "key12": "5kmpgXu4dLYT1GeUi85B6ex79Ziq2nkJQKPn5s1qjoZ5QyQkip8jUzrGqpykGWSj4vfH2qneQe7GrDcVJ8BNhp4W",
  "key13": "2UYv9eTLfbCC2F1NwnxNfPt3BUcrFrYxeCm9oaFg76thGT3UjK9SKoFjrNWEqnBhQAZ7YzCaxEYYTQtwSr8WiwZa",
  "key14": "2cP76stHsmeCdNmmkPtgPoEq5zY17ESvjaRCYa4wRGizZd4PNBobUwtfsFU4j9xFWKEs2kajQEm4EVVbEWSCAezf",
  "key15": "3ptadjgE7ax8WmZRoBZzDTdRHbUNz5FifX6fQMffm7JR53eeguphDGMKpCMwreWfErd6wZgUwYmv2S9p9QQsJdYM",
  "key16": "3EKtqMLLMoUrHBtCjMnphWvbYQs61qvDMDUyKCvz5JFdSoLburDu24ovQoFt4KCjHefeXVsmjRN2PQPwZz2enjMP",
  "key17": "YC6Q3dKzin4JpqKpwMVa1T7g2CeGFAWwc56K7auwprawQjmcJxPY45cEh8tnKBYQaRkea744uuobxCijopGFwKP",
  "key18": "2tYKwLxfjnDSjx8YxGwat1iPngC8dLnfUZvspmdthNSHACUEd3LSeL5ca1TnB5ikYgSSVa6G4wyz52jBmUsbBv6S",
  "key19": "5jHkJgB8934z141bdSn9vzMwAjiYaG1fHBXugR1TrFoTAF4rdNUeseyGa9JL3dyezrRYsYmoJQLZryAfZVZPmVCe",
  "key20": "4z8mpyi1tGq1gvNzcGVVQe3RaSkTKhhBjqjoNLcDKUUb11XwjaMF6jNy4jBbXroCNMS6obcFWyQHutdceQvNyqUz",
  "key21": "5fTiPsouZzeqtn8FPPK9zFqtwr4URpZDpaTuBecMknZAZBZRccv5UzkfAoPnQzTK2dHVqAgSRe1bShKKPaywvciX",
  "key22": "2x6zEjJWjgPogkReVTstNT7kSHkbQx7DHhvnNVMotsBu7rh7wm6hqg3QmHtVMBtWutN8j6Y29ddESSJHP2hMbfv8",
  "key23": "vb3PmFXAE3WRzmR6hYNsS7eThKF2U5LZk4Ueywge4Wd1TnFjvCtdtNbihgLdELSWN5GfVkCYbL5pxjffec7rNz6",
  "key24": "4H3ndRsutdURuCXHB83KQN8aa32oxuRCPvoqXyUikPwLamqmzUzbvNYyfBNQbCsvwX7Cefooan4skWdWs5RAdnWQ",
  "key25": "2NJEE6WrYR3QGY1swgwRDRFWfwxSuaTPRYZiJpQ1hGTuCJ9SveHbboYtkCd6aGsmRyLc7n4ehAtzeSqdKDr4HdXx",
  "key26": "22VGykfZB3BhBMKGSuhePzj6rngV6KDQTCH222i5hFGFx7rPNDvoUhCycyJ6Bg5g11DE9MdYUg2p4BfytEP3LU7B",
  "key27": "wvDQ7rzYHRjyYwYcBSEDZ3ye8thf1fAJQjz6KWBYMgs1EBFfrwETvJwaK1WcNLozgS9DFxKudRSuBNN7xmpn6SP",
  "key28": "4PUWHATi95NVayFDfqUMrFqoMWDjGeFM55KfdbbCaKYffyRNCHuuUhYC8SoqJXRf469d2wXMReWXS1iRdJpBok3B",
  "key29": "5sE6fCFAPX4Hd6mswDf9gQas1pP9XU8iXaLuwCgXAf7R5BT1jAoDaPMgn1EqM4E2ZLLeaHVLQfbC3qsfaqXieVWA",
  "key30": "2K5nbdRhibES8KgHHXrbTY1VJPCmTSt1PK5fhY4uHibTmsV9DgbZvGtL6CbdYTXpN5PMCAMzENyoLjcaq8e99rWz",
  "key31": "4ovGc8eyBWYgTo2ndTAQLGhgrFBtDBFzm7cy2nRH2oTxVSRAfwSrbUGzEHqPTowsreeP9MqbtoH85z2YAGkuYkiT",
  "key32": "3cUKDLZj3YKSD6gWsJBWexWKqZAtcXL2HQx3xcA6h8g4Gqmvtb31WSjst1JU4uYC1DMUpkg2qYfgnvWc83xzmJ5K",
  "key33": "493NeowuzKBGbUKRaUhu6SaYvvecy2uJ6yfKmoFLxMZrhSB4Qx6h96bP2NKNoqs9742mXrm32gNbNHtuaXSZhrxx",
  "key34": "5Wan2Rb6Q5RZ9tkW213E87K3YqZfNHAbB2CkGTpXFSFbuWbhMTZy5HRQSLW66ue8xCWs5Jazw9wZpG5cPgsrjFJ3",
  "key35": "w3DYxa1gpLoPHTkR1W1kcs1tUp4y9aWsZALEyvZdjFQ7frrTPzwxnvyUHZUzQsy47r8Ujp3MnwAa7ued4P4x4SD",
  "key36": "2VkpgMboQWaurWowqWPvV545vEn5TattnfuBWw3a3d129ghJkYctQkfEHCHsMkH5ppM3VgdqK3Mx9tE6AtnA2Spd",
  "key37": "3rnQp142CcSLsb2NLMVeivnkYrdLK25NkxrsyUekxqQMN5JbWqVpQzrxCEeEDvpSPWApqGrFpfap1FyBvzZaJrLA",
  "key38": "5WrG8htybDLWCrRdqBp1JUQPNiSby2UN78gJCdtZCcaZKR284GyKfeqXyKqZJEDe3VhnQuU8bVw8DdGZDjhGcjjb",
  "key39": "5Q7rLrrMkbe9qQEQLnzsFGF7kUzipffjeiroyaAToMBqCGvD5BtaKvZLbroevPMEMfJrL1bwFR8LFb7taX1rhcWK",
  "key40": "5J2KEbkFAAUFk31vGtJa7ZoyYha17MLn5NhagW6xpJyF9AMxP9DqLwMyHLvyi9HXuxasztcaMSxV66bPBhA5sVd3",
  "key41": "5NvzsyEdZNqP9naArcRhDWk8cRKsSqgvo59SdxYtufgmHmgsGejxtrV95vBM8UHtEH4nzi4Vz7BX4abU1zXYM5nz"
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
