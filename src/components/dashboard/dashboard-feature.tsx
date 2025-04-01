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
    "23nWg657j6MhUHP57iMRoQpEsSPTA9F2H4jrXr6t8EfpKUTWUVVNhB8SU9ef6YESqXCSLF1YbcjzMt4Sb5cvBc9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ushPHVH1xMKD4gmFkLBtPr5fnxnJdMKrEajsQbswuxUUZwD5WTS59sAjD6DLjahXpdizkcnJ3ZgWkK3oBNQQxgE",
  "key1": "4QjGJK8gB6Rdtn3vUzv3e7uV6AMRooRcPKAMgTzssDeA2YTkFyi6pw5S8ETd69E7BPtZVwU9Jodvt6bDhk6zfBz5",
  "key2": "4Ue2Af51v2mbQAiZQoDZXDExCdmQF9K3652c1cicMbXjGEvYYVXAvAoZYxo2QfLvsv9aNU2eiYcGJrDLdVPRW3E6",
  "key3": "5EX7gbuiPGAzF55QBrZk8NQCEewoSFJBMAarJ59qiD9q3waMcueKPaCwNFJXtVymNNk1MjgCLsrxVRLCDawsxnQ8",
  "key4": "Ain2nYTWcztx94jrfDnuwNdc4sRzsJEM3vSuVfTN1t8gBXz23AsooCHVN5uu4W4LMAG7aJS45iAL1XeFUGrudYV",
  "key5": "VeZFWLzUufJJGFe8R96QEyf5ejDWdzLXs8w2j1mxtaQdB1AErWGGqy6VCFUabCHw1xG7ywpgbCsQ5pLarNJoPyv",
  "key6": "21rJXjBqxHGbKhdn8PAcki4FAUEqjUVdLwBH9SHyJb1Y5VdPcXFj47andXHynFuipLoAq683BJWLu1NK6USeiYM4",
  "key7": "4fxH1fbupSsojJykgh2Lfwo3JFr16TDg8nQgBqwKgwwSoFpu9nZTq2M9GkRt1Zy6WbgGMsKNnuDRbHzMB4pqap1F",
  "key8": "47xU7iTE4YBe69RVGXsbr5P1UYmXUBSdXfnrjWfA5fw1P8h8LQN9MkVJiEwKT8wfWH44DEAqSfkafdhyV97N2AvL",
  "key9": "42y2opV9VU6FCWYCiczp55j4qktA2c71F7EamUjHeonUwX6eTXiv2TFr7Zv5xkbWE2i5WY83uehDkCQqicC6xS9c",
  "key10": "2Av1iu5y8nrvVYkVJZhSfWb7WET7bNAHSe7oKJrCbsVdBLJZPCWCfSxz4SRZvtDADTJJzevf5V4dwfBDqu8LRafg",
  "key11": "4unukuqCoPqdJVuGqidrhPrzvX46cuxjfgxd5Ej6t6GbGDSg2vo8iitHGRs35rLzvHKvv47XParQwFj8gRYaTegy",
  "key12": "2AtLg1LkPz7gTLX4T9isSx8gNifr1XrK4XJeWS9Gw6cPmFkf1vi4NnXQX5qroPZ3pu7dy27Xc7gPG6CChgUiPFMC",
  "key13": "5uWs4V8txyep6dHWH8Xcck5KYc5AwngKvYesG21jfte6rrNTZJfUG7uLiQUf6PTRwFYuuyjo4Yoep5aTiB6eJVV8",
  "key14": "4kTNXwaX5iXBw92RGQTrGo2ryYAC8RkaRF9X9oEag9kBWdVkA19VJQXS9dNEsHCHPZrkkiureTGjdgxGxuJk217k",
  "key15": "5twsU6JiK9y7HdTyQS1R7jCKt94jmiwqknNTVtfLcuU8eSzwuh7yXeLfKUBaaxBH3xu25jGN3gAxEaQ7RhkgU82d",
  "key16": "ibyPNW9Qod49JdLmFxAuJX3WWrh7uLSdUcxEVVokX4Py7461QUYsVJMioxU2qs1QkbhRt4jKWmQXS2eJnX66ooc",
  "key17": "4apQ4d181NnaZYJGGJjyXiZHSdYYobDA2cHttBEkUt6RcagQoChPtzvz4Pimb4FtwkVQv8qapHEp9BSR4KfHNnoQ",
  "key18": "3cYgSbUYEMmp3p2XBXKGLNmF3qTRH1z5Sib6a54BR9bPqCqJVhRPohXriYTy7AhSZnDDjcUPN6mq8hH26GKMNBpq",
  "key19": "5n3duNFM16H1Kr5JfmqeNQWgtroH1FbjCmh2tZTyAh2ssgynirw8Wkd2nZeG4UaSNHtrQn272TQimyJshutjjFqQ",
  "key20": "2dXBiEZE4YS7rP14BGP2aBo7VCeRRapREbHorc6TVnUXQBPUm1jNhUCpGHAqrBYNA3hKDMpqGDJRoo4LEdACcCLy",
  "key21": "2anoCYQ6UcVEoTuEs85N6pXQr6s9uHKF3AmazDENXypwYmJWJEoMoVudxm7HnhyPTTJzhMwWGmQvz2oHda39opQ6",
  "key22": "ez4w3HzjLFZoLDfe2T2wJZ24PYdY73p89BVMEhZ9wRJBxZjawRasCBCjWhncW6e18LNseDV9TukdA3oFDR63384",
  "key23": "FtV4KnEkPfY1jis9PKD6UFUmvTC9vfuehnHmm9JkUagWvS2G3vq3yh98npSioz7pG5QNJY8x89F4xh2GRDHdcpg",
  "key24": "4aMsSEWnZA6ZkuUg6RpmwqEFLGPHSSdYBUMZZMDjU3sLJBxif3XYs4bU4jhqrt1uGpNsk4y3cd5dCXKuoJpV8jF3",
  "key25": "3rX268WkHkMvY89LfJBdN8ahjGMrv9qMPBgEH6cPbxXn6u2ZTVHFwDyUdRBWjnqc4iWJfVeTqsiA7ndTz9youdus",
  "key26": "5FwtHzdYgNnYnAEmHPnxsQCovCi7U8C4BoBGNcrMxftLPXo4jwizcFpFhSrd9AnvRfAZRSB8UrR3Z8VwAUf4z5nr",
  "key27": "52xaGaud9Nvd4W52Sj1kNVyG4qPKnMmboDH9ETk2bHbTrG1t7jpUfgBv32tw9N9mbBw3KGSXKi5DtHXe8JCcAUpK",
  "key28": "5PtT3LUW3FtymEvqQjoHCV5FFPdPaC5ZeHRSevoMAvLfCzWJ3p1vbEvLLoHdKatEZm6vgidugKSbCfBHrCo1Npmz",
  "key29": "3AfzaL4CFPzFdL2PvTTFVE9W6e33Y5brxg59LVAsAPFMb87oZktdCjqfcFEYtRJWPP1kfEEruWTepayUi3AQoYcW",
  "key30": "pMjDzgA2SZbXYooE8QFNUU1rT13A2qNg7ynRjKY41HTVTFELPPE7ksdy1VSxXx3JtKCAjEAnB3tm4pXxqLVYeuH",
  "key31": "5aDN1XUTZFAxXzLzf4YctAQcrx8uM4iotBkjGEHMq48CgXnpCxsG4kBzgAmvrXrX8Lyz8vJiMbnKb5Fb3nqN8g2q",
  "key32": "2meakizrVrUNg8aSWUztvkpiNc3q5DW2wpmpGPPhkdDVH8s6gDA8ffAEmMCq6nSG1V6WpTZ6DwxtBZNuk4iBC32e",
  "key33": "37wLhjsEm6ALVaSKuejbJxGEyt7wfvjWGhPapin97kSgYXrZeNoLU4mkNYwTFBE59q8UQGQ9UsWXLVMkDk4tJDjw",
  "key34": "5utu9627h6WHKT5SpsqjJgGuSiiq6pwgvj5J6tRP96cKhEA8U5dhPzLAPgRhTACrHZPQnqqehdEQjptwUhTP26vg",
  "key35": "4oc5JMLxxgZ1TdGPCqCRViFqizx9NDpvEj4pAVp8iXSVYm9GgNS45hbDQqyX4CutjihLD7VAZpeSTgu8BZJdyb77",
  "key36": "4cyngBR8gHaCP5u1KZdJwEovC7mFWmYDgww5JQwPzaXTLfeXjVRxRqdSz54wc4RauDarWfmWH9zTaBiXvJVfCznY",
  "key37": "4MPFR3qi4cBGFMNwcdR7GpjQDzTLcSbH73L4QYXbTsx6Qyp95MTV79xFWRsDXBksbFG62cuqdXkxnXaaA4Wt8tzF",
  "key38": "4xnG58cTMyGkExtxRFg7dRxFxzPfUtC25PokNqATeComiYBjrjJrPRZChUf14Ev5bqAsrc8KDPjsy22cWupjb5or",
  "key39": "2Jaqm1pj5yLNmdBouebx4KtnXVapc81cB7T2qvKrh198uTtJrE7tuzTrAk8BLfmqD63swht4nCP1mzDGDN5PepTb",
  "key40": "3osDQb6XvMdfEFLW3cwp3LrXuqy2NhanrR2u7FPb4KN1pCivsEALpcitUB7Cr1tUHEwk2vzH1Nd5DYZR9wg84vS9",
  "key41": "3f5gQsBunbrE1KDxfMVb9JM9JjqW3hWWuUnSzg2xULDDuvHSP3Y1r5s3FDQ2gu3fafXjn6XhTmZoMHBMGEHh4kCW",
  "key42": "654Ku5KXaJ2sJ8k4KT2h3nYZh2AJJeGfi6szZspvRGQQASxyG8rEUjHbmkHkywH9q4ao3oeBAQz9Smdku18pT5BX",
  "key43": "2BaqxSbCv8EyyYL5Tn2YQ1RWEuWimLcKQf6ufq1LfsyAULRmSLJf9uYrfXhwqLLXeJ3rHQLAQrPQUryhSeb33VJC",
  "key44": "4LKYtH7ESEHeLWFruTip1RwWfJsb2k6eaeiDkjchbbYDCBHvdCp1DaDwbTqernsxgn9Ttte9Bg5Q45a1PT44tQxb",
  "key45": "4UBf4CHbwdgQnxrYzDELZtXmt61pYQuRjSNfm2Gj4BVyt8GtnhzPLrqho1BVLLDw1rmssD45oi5pivkd4egGzV1y"
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
