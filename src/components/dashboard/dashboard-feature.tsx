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
    "2LFupWnbZbUFNy5qGRnMtMeaj8X2uzXkBBXNfEcxNGdKTqgVYmsHvWvYcPpbuhPmBXW76vBBaxbqX4gXbmT91D4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hh4tVXUp8JA85JHXdAeq3x4bh8nJ6vAR9hkKdkgQv5gxESWVk5JCn1PZVgXXQZwbi9LbUmrYd7Aw95CSLaEiyn7",
  "key1": "65BXp3u2eXVFaX8Y9i6PigLBPMRP3gMrYu62fMEVdwyeC6nREs5BToskjUK5de8NJrc63Ma2YZqXsAbJr9SPh9JX",
  "key2": "HFVz9rywYW7iGoKLd8BpWgkQV7a8CEubpBR3Bwwg2DcjMMh36MZnCidEUaFw3tXuB8RuE8quYpKWT2XHgkpA6RT",
  "key3": "5V9K5mSKZRP8kBdg2X8ekY2EkaYxwapBauMT6n9eMnwiAiiEQ7M2bV1gVswN68PEAFkFvj1SGtRxyg18aNA9eLoH",
  "key4": "28Jg8d2vj5NEyTiaC5PCVVPDPRLHPwZkUu4Ubv654JYdgz1LVhGBRKYwcsz5ZkmNiUUWbFTvdNN2XiE1y7FFyqkw",
  "key5": "5X5QsCrp6JXc8LYVzcrw28191UBpWKyu6jDzpX8Q6pkXReF62Zof9YKPDCrfnuuxArgsQbZKzjwnL7CDrLQkxH4p",
  "key6": "jaCPLsAtFazN4JU8yzWzhUiGGs6TEDf6185ddo3uhMEBpkW3r8s55GSPZJ6wcJYLZH84HmvR2SLReURTH4kZdMx",
  "key7": "5bQ2DnxXWbd2HoLpXNfTzvwhfzqmxMpjQjjVbHdzWtoY7WDrvkkWEku9FFWt6XjDwin4YNjMNPz6zJcSEBej61Fa",
  "key8": "5axeNJgdKKyv9DoTzQr52jXQBMJ4rJwMCdCAtnXPwwTBCdZfrSFVt492BdSECwfiTaHdFdYsg6Kr6kFhq5cyhcST",
  "key9": "24j7pKd5bPw5viYxR9fT3vUK2T8AT14BQgCYQyhTgdqU4T5qxrErusZpGe9FavWuUVQKpaUVZQBeDBZ6NP5iVRUM",
  "key10": "39nm7uz9gvr8oyorgW9CffozsPe4i7wwKUQh94k5PNM2FAqEqC9FJXydZaupruat5YQ38h7RtkUURkiQ8xCsycH1",
  "key11": "3bE5fJLBJXqE6qy7qCqmoTzPj75jgfez1SQYBgXWMe2XhpWrGthNU6bCT5hotWRAuNSUzBwZDVTM2FssV9VSVXZJ",
  "key12": "2maqEKLhTzx94DvSUmiVvgEevQ5JBCdTANXDCwZ7jmG7udtatdf4vtYujM3nsRmFxjKWKdgUwMby1Fts5nz2wHbt",
  "key13": "2jxV8A738bBG9hfmp5JXKUYn9gCUcdFeSDThYZcj6iHmWEB1LT6yQrH3HJWVcNDTio9vuAQ1CJZSeUF1ys5wV2eY",
  "key14": "4dCKoQMmhZKjPB5UT8EV1xJCDd9kCof6Cxbp5eLZ9A9TrcRAqB48XwatiuVEX1YM7sjLqsvYtDj8Sf8gASagiMXo",
  "key15": "33CcTiBSZG7jz4pCDtztp8WCPKy4wRq8gHta4Vbn4ki9Qhv24hpLJRLjnjQ26vci2Y6aJJN8P8Uayp1yS4VuGfR3",
  "key16": "2o6PcQAvFnEVrW8xUPjzqrq7yGq8dGVCvBTmxi7jV9JETycsPZwRxXneTpKcad7ozMyqjokZntj5vzun2qU4tPK8",
  "key17": "2UvdBqSwQddUShEg8HGUuvhP9GpAK8rzkqLcxzJkf2vJCRFDzNj4b7wa14KJDiN6LdRj7DX29o85YS2s5mxGvTZT",
  "key18": "4nr8qKshfBsdqHEkpR4Lqqfoe7Rx2teNKkYP74D59ei4HRUyKqoxCnfWmUqfgqLCNHLDGbhswhf9cdgpitomLoMc",
  "key19": "5GhfhHyJVi8eyNg67BCniY3iQxor23okayHQ1Bf8Jn3pZL3fXu1pUXfjM7yRVQ9Vbd7AooSwudXXXq4PaYuB2JAX",
  "key20": "3ZUyeG68wqe9Nqj5KxH3BAuZ8AekbVvUdYPC6kGNVoFJg7Fu9hnJhK3MQNcyeG1eycHQf7cP91FaCoP1psEWVviQ",
  "key21": "2cHurgaRsLsvhirtoM57LX3DM6dp5hBQ3LbYicaeX4uiLsFpVUt9xN8LPfGMhTBnQ93HgciHppajivExgXAC8Fcr",
  "key22": "4jS3H8maDA8Ks7BTRiVs67yDSiamtgBwkHt7QDtbHYfvKmCkNMn6UtTJ99HiWeuzACxHktZhdxJmNRMQkjsd5V5q",
  "key23": "DEqhdYqv7XAFyNy93bSndeYFgBEBMfEdMsRwbzSj1atZSguANdcpBzvvKxcmg3JbNzHEMB7zm2CBc1VGgjEHHcH",
  "key24": "qtcxyBKzeNFVkxGWpW7Do9Y5NTA9M9tVBRozKj9erVu45xWujmNRPQsZsQnMavWCJ1WPSXjMfd1ZLiFKq7Mn81Z",
  "key25": "5A5tWRaNcK8b3vM5oE8umYjkUwodGt4bUq7MqPD1CdAGVyi2SYPQ5Sm2uxrNMx1UsmRw83fZWUY5T92bAFcVgRzq",
  "key26": "3abpmD3eBXGbcCAD6MxFmNsJ21ccTboGnCbM9C1N1pEbCEcA19tCp4K85UygPzbrtpszoHaJe1GVUcEXkEwPv6gF",
  "key27": "BNDdmZZ6MvHX5HmCYuqBZxt2JJ4GQhALC2R4fHxzPEkQkfdHwBowopBenpwNhqPxuA6UPqo7F5wjjDGKZ5dALri",
  "key28": "qKGXsQQE1WfoLidzXAjj3xEjB4WCcuGQbUcXmDV7M2AiSn8ehZ99HDZ71bhMZUM6JahgdkWzBCtSpNfufSbTvfi",
  "key29": "5ZLHyELP2xGYZZw4d7sQGADHcMcQDcJHn5x7UwdCFSCNFu9rp6FLEbeP1e2uJHpctfAHJh89d2TAoqusVQoDPy4A",
  "key30": "ELRsSbtFHEyy8V3S3czUyKKgB2PsTJAowD3KXLegGTU68rQ23zYepcnszHXMYAyXb3o1gTpheZFPwkve21FRtXd",
  "key31": "32hovsxKF8arJx9wepsEpYVQW1TzjbumWri5AVaB7DxNq7uQ6v1RyucsYmtCEHLgHoLZQPp5yLWWXrnUouRMJ6na",
  "key32": "4LrjMreY2QLfrMohrGL4FzAdvRsdBLdNBWJ5B1Sbrra2wTjVKrh5s1YqiBccKKDrLDUn6YMB4xYcGqkAkCGgeTbA",
  "key33": "2ACd8mjBm4VPK2BgCwt93fZ2FkvosBosUbhwHsYeZvpFSpeTj1LuoCUmkq8N4dih2wq5dTGWubXk1GE2WpPLuwNz",
  "key34": "4yUgCJUJNgsRidGFE4sopQjRo58Fj8uFsxkEuMznfAr1548evufWJk9QBCFe2u7LaQ5teith8VWQHiJH2rdaoj6o",
  "key35": "2EynJXU3K5122doWYRHPZKxBJVtF7YgRakwXQdugYpvrq163JEZUAyYQdnzddfyS54wG338syGyhLCGm9G1Wm5ai",
  "key36": "Mmx37TqB5f4qXbJvwpub2u3PaJk5tvFemHVzRSkiFsf11DpHdu9zgU9tsH9zpSeAVuykc8scNvq1BNeMDSBnQB2"
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
