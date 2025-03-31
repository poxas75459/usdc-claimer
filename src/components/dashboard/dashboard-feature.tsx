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
    "5rQCm6YaS5A2jGWtsYgXaua2Sik7CfuXYhpnZfEj6ubNdQSueP3ZnUF2TFC8xTJLsz3C7jYkPs322Sf6dTsCauXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGFAe3MvGFXbs8tooEbxdof6CE29xSUXgnjJRrqmKvYvejZX7vek89XRNrMFhLJ68zJcmZVmxSnkm3z35jjiymR",
  "key1": "33TEKuziSZhmpJbkbMpWy4q7fDoTK6YPzD9XidnV9WSrizk47ijR47nApDgwspMbwHhPVCxGZ4wJNCDmXxafUMz8",
  "key2": "4Lku9aP9vLdQ1eLb71Nyprz64fZ3L62q4pKxWQt8SwC1UPEJwGTgEkhKs6mzxWV6oyErWKxRxGJ2aDjVSTrVeQcu",
  "key3": "3r4X98zGaqw773m36kRNPpTxRGMtyq8n2nSrt1G4XfHWACEw4LFdpGoQ48YsbBXibyuB7oYsbZw2axx2zotU2teb",
  "key4": "VxTqRGYYiCiisipCgw1xqjUtesA9GytLvNoEVwMsbV8kriz52MgucQwH3aLVyNHy1APEzB26Pd9s8eRxj5msK2y",
  "key5": "5TEq3eFNpNYEJwBUZQdzyyVuHwGDRzGaUuHS2H3dM5rVKzRpAyy6dv8Pbkx1J8aRYbXS7uYraGJBfoZdzHQw2QsV",
  "key6": "5j9k1RuQjbEoko7TRy9mVxoqCTt99jfHwk4hap5z6z6HJvbmpKXuT7J4WWXxKb29Jhxxbs1tDvZXMTMd5L1AeNHs",
  "key7": "5j3iKjCdiAhPC4zZBK2KtV4nUQqVtKby1LdeS2chnoXDWqzT3jERhjQ8YovJfhGrsp544s2XHcirHKMGPaK3EmFH",
  "key8": "oaXWt8poKHLUtzG65o3un2Dm6qiWGTqjvzc4rnfzZaeubdY4zDrsMeuurNRQ6MNR6NkAcXLPcieSXhL1gXZWk2o",
  "key9": "2yKj3uxjovYVzY81NKdEVdZWraFwDRN4WBnGS9WvTfU712X66hpNhAUftWygJCpNka32jzDK82re9EYj66d9BuYJ",
  "key10": "5XbjqzU5VEZfyA5JXgEDd68BywsZkDwqKZKpWSxdyYodFBQ7fRVp2jegM6j8iA93ZeUv31aEPNatXxbEira2UY82",
  "key11": "6d5KgksEdkePVB24Ch3EUgBaiJJE5H4wjVropekXjhAQLxZ3pMTkJz8h27GavkUwLia8hefmiMW8e7RYxKgcEJj",
  "key12": "2jrcsw5sE63ZQ9qAuonhUKC96nXgMsAnKstDWtWmFfrtsobzqVq94KhaeDujNbGNup1tPe5BPc1xaoV4bDGk3xse",
  "key13": "33iHuoLbEC2Gs19mYbmouELva4nsx5g2cWbXzAgNmJprwFjs6ngvWir1toyyKuuTX1ovS8PpPRLyveJKZpHxoeMB",
  "key14": "3DrT8RiLkJ5nQbq5fR8FxRMdepVw5CRTA3eHCyy4VRnheEoJFtjoNYxP3NANTvK9AHeUxGspiPS4GvUF3Gy4srur",
  "key15": "637qRoxs8kN6koDGHWpHSdsb2563hbYYJXbzSfpXjUTW6ziWasb3xtPS7ramoVmKmdGN6BQZSKbJLKHTZLuB2Z94",
  "key16": "CkV83sxyq6of11TsuUSjeXkM22C4G1LFeUu8VPMqKUycbieu7AVR15umEJgionzTgGMzrmYcbbjdRyKqTAsJqnB",
  "key17": "4puCkS6VVtu7yV4od4ykVK1nuovuK2ePYtbRE3tSFeb9pntQ4MjkxDg6B5CSHpcfyuWBjXDNFemhCPem34eVo7e2",
  "key18": "3Azd8ny6MnhqkmVfkWtoJgxmx4J5T3hEyJ31SnyLrkjCRptnTqSJtUxhSdBcY42QdqjNufixkqgCueFV1GRBFKEz",
  "key19": "2kRGNqiBbHXnUKSv6zyNvPvRVxLH2DDoZHjXngnwmaiDAvnL5WLvbFhMd9KnTVgiFvkipQmniycJYH61365Jkg8E",
  "key20": "2Gu2SbBALfecWqW4f9xkoySPbwbVJQqG1771YsG9gbfionxa3GeETxGdDpQrRuwzJrFymf95yYuYk1AyU2L29LVr",
  "key21": "2mRHQ3Cf59Yu9GmoWrR9RhybYM6ywUDsZEoh6oEmxmzJ9jLy9QPFTTPAgYCRw6JbvqqNA3Xw6Ddp4tSMp6DUTcUw",
  "key22": "2gLtcLcgAEwiMQZZDoS6PUURgCLv9EQCnssytkGQnPxfYZyFijeWt5G87re1iL5KroUNy88icWqbJexnX7Pnmumv",
  "key23": "Vui5nbsKWfwaVggKLqfdw6Pww78cFwohFbDByrz7VWs9YTogeSoUPZgHfL2FrKf6qHbnqC7koTtz16jHyQ9frjC",
  "key24": "4TyQ3U9wWR7r3Q4GjcLkqfQLse8N5DJ9NtdVy6VbY9d5p9Ns2hmwUShVoj9dpRbQanxKJoikWMNe8q541nALYQ6S",
  "key25": "4oNd7uFH4DrJJsEG84yDv3gxGe4TTzaPe9EHEhufDvXti2V75eigrwykJuG4Yue6GrCBeT9hVKn38bXma66nXSQp",
  "key26": "29ZbFHAUGZznMtvwrSkb1cHBrqhoAa8M2Wubdfj9ren78yyEXEmqTe69pwR2zkArG1NmHDEtX9DJVmSvgWUaPkLr",
  "key27": "53iYYt4FK52Ueqy1b9qBftsrzg2hutW3AFdu2HdE6MZYhqLZy5VAkQwemH68NDggHwEDmAT4xVBuacF8BRKmknFL",
  "key28": "2uy3e5zguUf8C1BXJ3iHTucTzJYiz3sVotUyiNzdzTapExt1JPacQbfDsUrXTHmvW8tvYy1vxtUVQr5kt4m6z98y",
  "key29": "yDpYYauccYgunBArve9mVRxozKY3PWHFavNS57ksHouLtL8e6LDyLHG4QysJbMymFZKjafg7z825xXdyuPVbUes",
  "key30": "4izMTPzyCJvMTL33wS5imS9CfTFM2x5AeqHH5SxW2MSytR3PfA6MhYTjUmqwnV5RipYqA1jr3zbom1fx5WHbZjPF",
  "key31": "5RnR273AKHBu92TnpQNPqbifEQY9wgBbtthS4K3BDaa54TLQwJPshUYubRSUxPmj8wJcePzD1SVHHaKfNBtpL2oU",
  "key32": "4CUiQ71REAdraJq1kKZiu8PAwUVbPWA6VJoLE5TfktKDfcMe5TaUVQ99xDojJxQ8ULeP3CC3Ca6vYSENgEFwTD8H",
  "key33": "5MA74wmrMe5Qp8x62Btx1n3AzqWZNAVREWEA6Sik2MjAZPXAGo7M6nP7Ww5bRspTBPYoWtvFdTeZD2CXAQvVroYy",
  "key34": "3wMbT2s7NY71XeQ7MEYpvfZCGEvEgthHxKR4ZnjnHPJyEsrogTN1gKPa3rFds97T61Swn8WaqJVYvfS8wfa8b1aw",
  "key35": "4UnsV5vfaZpKRXq3NxhUkA89R854LKsz3iWfvALRiKaACt6JT1yNXH99Q1vvWfKYNHN5iPfAWswX6onVC3q4vWmm"
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
