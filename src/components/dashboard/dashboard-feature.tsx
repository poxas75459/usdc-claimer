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
    "tfqfptarAsXWVvdHMhzkEomPXCJB3xeQxHxrMd7hWbT1JsPRX75p7Yq9j6BLTH3BpXQcSzB1m6LW5tdjh6YScBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKxwEJxqYcREi3S6RKEauHw1a2X49wWimVhmfPoHTGibKtNx5XYSySdqFfxJKzvwb8TBs9CWDggVxmwGMmoXDFC",
  "key1": "FvKhatexFaDRG8mhtNpHpBq93CazcG1vEh4Uk4EjSeQKH7PjeYMdzhT3ieGaKirfbu2A4xZ8fZyvamCgvjatoNw",
  "key2": "FdGb56JPnQtKPfvaaPMoPewScdj35dvwJh1ZWNTFJ9bVmn8BduqmvQQ2iUh3PqWAApsrcw6DGPmvHyCD4Vd2Y2B",
  "key3": "49kBPmC3mvjVVAcTnDAMvpYQ9VNGXy2xPTzC3Sg3TEqV9kkRYpwSNdYGQ7ksuMHS66ykNGLKDNYicoMFuR5LH9e7",
  "key4": "57k7BzG9qXxWFtcct84ubTpdDWru9iTiyYZgx35HKPGh6LLFZtmCAJ1YMPdPN6fCPiUTzE3DHxCwPV7cabnGWoXD",
  "key5": "5wDh813xLvuPHBJXXvdVhfqrPpz8ruaymXtYkBCMV7RBGU8Xidc7b83PV5ZBeuLqNsRXLUrVbcJ7HJCmrABfpPj8",
  "key6": "3Y9iPKDqMudEEpCNoFkzCaSZ16i52TBWhYk6cYBGbwbmHexjo4bNAwf8w9ik7hAuf5SwsnCmhxpzZnLkWX247NhM",
  "key7": "5u1udxMF2vaGTBDFvjqPKExz2Wcbz9ku3bYGe9bpoK3zVquooHRZuqq7ErhCojEwCbeaBzy7LDSGJQpTjobmxSDP",
  "key8": "4ov15YSxj6NL2Mos12UW4mXsNjHci8B5XYhR9L6F95n7eheBkBjmTh3Qzw2GySkaZCkB7BKyX5wZ158gLSqCDhHS",
  "key9": "32U5kWdtpT2vjTV8nxZtF1D35bzq4YFnrsC8Hfew8Pkmi9usfBraGYteX9oeL4TvbijC1q7HJGCetU728FbZbfNy",
  "key10": "M6FbN8Ug6LuHbDwbLUN8wfqbd4oeeRT5uBS2myCBicgE36grwf9ZC4kiV4Uyb8CXf7YLQvwN8FxodAhC44KS8qT",
  "key11": "3mfLKfrpA5vSbCWggTc3naPWfi4BYyy9gVnECEt2Ttr8bQDi98eT1cJVPtNCH4dpF3yTJXPRhjpoRBpqV7muAo5j",
  "key12": "3WHRcEb1VJJgasNje8nwjqVc1gGX1QrUF5U66wqRNM4Rt6AagF5bidDnUbqkm3XztgG129Yr4NpMNd28i82SPi2U",
  "key13": "4i7Cj9X5pNyEMEeXVz4cukn5z7d1aS6rDVEBmgj153oDUx5Ta9ptma4JFTW1sHa5ZhT7c1UpcwfwMoCsdcyUhh3N",
  "key14": "2EtgmYB45aJUarimipdYy4ELs1Z4TcjJvQY96ez29ZkTM7UmnTD1TxjbJfd8Mfsux4676dVeEubYT4jFREvaK5uH",
  "key15": "2h2Zb2xFHp8C1fYms5bJiZdGyJ3tTf73dBUkNMgTaRZXptsqtRJmQtrceUtbUQvdgAwQJLLQyZcsDRZt9Gu738gV",
  "key16": "5GPSmWjR7vzNEtTMh9wZwuTPceaLSmQbxC2twcytJGsYFp4o3DjGv2VHJVj6VBzPwzCLp1BVkQnib4VwJZGtLpu7",
  "key17": "53P6gdi2V7z6sPfC1UgN1DT9rLPPEmWujQqikgxdfmyTib8sZhD64oE4TSpCVWQoRS9vN4YgWAv5TBe4xGtnPNyU",
  "key18": "yfH9a9UJHbVCGvR8QkE8eiCE3QRhT7LqttNrCTofTvsf7xbvLRZ2w4g9HCacJYgUSm93YrSXctjQowUy8A3mnPa",
  "key19": "5bdKs2YkzNXpYkHyL7H1PEr6beijTLC2kVoTrUwQu6VwHd1AyaPLLGHDNsyy57npZHKnEoYU7FN1HFwZqWbEu3jk",
  "key20": "bFbHgCBADr5cEYJKMJeBwUCGFMj42nV3LjiwLD44dEMj7QeWdPJwFFF3xTs5N2VHEC8H62sCHAPd5Rp7uLGLmHG",
  "key21": "3npDDRQmbwzLrW7RNvPoCD4U4PXpGLC7qdLTWnmb1vzYKSXxvFu1Qo6M1iGAiqacVpMjCAkd5hp6Xd6x7dAULFhn",
  "key22": "4oCLStuzfstY9TaN3iDJr3qPiDCuRxJr8T4rBd7SrP2AqsaSx1aG5DCrpHFKnPp8c4kGtZmEoc1a94wDgdMSRPsG",
  "key23": "5d6WGgywfJHC3SLuXYHHP38V1AqjketozFDMXp31bdxAVYGVrz89iFr1rHdmeAoc76wPnxQJw6g9QeTzc153LtzB",
  "key24": "4CZQfmvHBtzWHSMasSex1qUKDgvFsr5shVkZyoHQZ5ziE6xLHGi4QXxLYCrEgs4EqM9x78aV1XLWxifEnBL1K8f9",
  "key25": "2qpafVvJpSV4ZiyAK1EPZpBfLTCtmjFTFCnhxTT3H8kSCuiPAHxxS6Y3mHuonpgFewkkwPKDHhYMQ3no1hu5yg9q",
  "key26": "49XprcBwnZq8atipw1jbC9wyszC8MLZRu8MiHXAbuXBFi8omiNeKPxPTTTEE5fDiwx56PrRvovvNvAxV2UmEFCXb",
  "key27": "2mofSSL3WV5fDt3TRQQbeXcjDLsA5P5wrQdzgsBVRDXLe9bPR3cDa3cbv2HU8DuoUZpcDfHod6wTZ1tx2u6rDQfg",
  "key28": "boYFAYbYwwYfxTVpHqDr2eMrctqjW8FuJMKd7WBCTeVpKdHvVmRqzg2LpeS2oiPxWnXPSVm16EjWdAnx6Q4okJ5",
  "key29": "537YtRd3ez5gLu8xgmwhUix7audGYNTp7tK85bvHrykvsrLRTi19X6h1FAVyvD7R1epAHJgqzs77abtMocfYRDqX"
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
