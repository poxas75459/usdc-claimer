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
    "2EEYi4oWx6TMnHNNsPvr69a5fBq7mSKapxUGpoLQ2wpY9pA3uujM6g9z5dNWce8ipL1pL1qQY9Gfi2fkZq8DVZ5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzg37ymzaGSfztS1tekFQpHBNbJ34HhhyfZFtoFUY2TkreofJjHyyLyt8kvj4ocdmCWJsgcq4T7M45dRbs6tJZU",
  "key1": "5CxGawp7E3tb4hvR3NgTxZoqBgbKAxseDMXeVATYUQpBn7HbcSRMxjbT5y9zQLgBmiv8ahTUxYkg8Lkt59MKQaHV",
  "key2": "2kq7hWx5jxydyZy6d1EqGrf9i3FXL4XJEmj4F8n1AuCVaruY71Nyg2TvWN6MWxAL46mchHAX7GWxbqe4wsWZXLA2",
  "key3": "2jwLw1SmeT3ucyGZn9cXEXcu7imY2xpeCEEZSMP4pzB2DbLTYKHL9RdXF7CRV3pHW66gUH9XFnnwG8ng5Cqt8JGc",
  "key4": "4nwJKaK7b4uxxSSTd2UrTohJr7AHKiu7nzogHXuup46qBXeEedf15HQyrF32nSZ4zyqWpVNr5kJbgNPBzY5zuaT5",
  "key5": "4Z34q7BKaK71sHzciPycJYK8QdQVj8bScx4rHjyan6grRXRWhPVXfvKGNUhmYNZcB4opGsaRT1yT5nM4NALFNDXG",
  "key6": "4jWfgbriZrwZDmiuY8pkAZzRnK8GFUL1tABxns4PFNYfZF4myRASor14Gm36W95a53Q3pfXvXbyWQAu9imDWWrt",
  "key7": "3mECSupxykDYJxvhXSvC4rvPsGyhRkVcFQLQ6XxHT8rKSFUErr8wunuw2i18HyRaHXLaAao62PhiHjf6hF91gYo4",
  "key8": "4dRfmQs6Mww6LvPnU4nBm3ZTX6rk7QJ9rFQrg1iw5cfPefcpgoX7BvTRf91wBYrJPgyFfc8vPmzSwWm1WMnjZCim",
  "key9": "3rMmTQgFTj5Ty9GTgsY3aQ9JTcuwgkeEdJSupyM65kcMyoRz9rMCYBLafEy112TirP8RrVLr5DSqKDeSwtr8na4",
  "key10": "5fYa6wwrqwt27cxzE8sqiugm2E513FnxCBAy6zLM9hpKSTx8xMD2Kx7vEWXcpyev7EWEVMX6fhiUSYMBDVSHs2Gy",
  "key11": "4cgx6yDkmETmA7ZKVFo2J6rhQvBug3eUBy8rr2bhxJMEzGR2ahUntsafybjdeBLJ4apz7vGpEf6LsGJTppkK5ivN",
  "key12": "4H6cS1oqiGbBPuby5qnLo6HvLta8mobbk7qiYAqe9SZKFtHKK2ksB2PiqotD2oZvAjkW7s2gyvmSZXEKEs6DLYy2",
  "key13": "3ZQH1FgwMLNQkZ1b6HkMSg3KR3eMGNyTY7rESc75o9vTVfWHUHPLPJo1w72wZqfd7UbNTEAUT7q6kA8L1ztP1XeB",
  "key14": "4JmAYc8KybuiTimiEJtFrTt4CZ8prsDEnYG1HLvE1knKXh3Z2QAsFxa4eQRkjUwyYQi7D6gSS2Xqk2ij9ZfksFBR",
  "key15": "3Cz625Fj21RWk7vo3drDkRsfsELKrBWryDobEmyp1ErMLDSASCpsM5UPDf1xwvh1NW4adAaooNcpSRrN9xrphSnj",
  "key16": "5p4a4DEYuG1J9dLo4uZafjDtNuNTfE6g6pHv8MdJcXdzqnymQnCuY6kwAWJKzyfEpamC8Rf4FWaTwQSLaQUjMkMm",
  "key17": "a3rVzgET4BQLxkjxPTY9QCuiQkG1hMG5AofZ2Vieoa54UFzeTMCKsKZcZQc1Wjw56urZZQN3JJ3Q7wwzkeqrggf",
  "key18": "4f2uMoVZnfm7164cFAcyGxL3ar2ULAL1Q3F5vjGF76NDa4Pe5QyieG5qeatqrVKa2ovsBSMd72KdtNt5556579mW",
  "key19": "3LAQpHky8D9bXskewCSB12pnrbSZMRMkn8BJP396PZLxfwvK8nd8gvbLaGrzmqDziC1cuKxvzoFqgvz1bLHGgLPF",
  "key20": "3itTA5NpABP24MdTiSAv8iz8vuSGcjLrVXTGorssGhvT5EYErYAQoyfxcwFRjRuRykVGFxj32ZwGadp1Ad5U2Msw",
  "key21": "ojY3Pqp8cCXe1MPFJP1Ui3nXxCrsG4ooosoztLHazMMxVRmPL6guTJvZjnjwqsWAaT53gLhBAa855tJyMFZmhps",
  "key22": "3wkze1J9TH6o2dYzj6NtRAPhWdfegxqcQXy1FaAAZxodhSRWrc6bycbtHLJWULcNYejGm9t6rXuurcR4bhNiRDRX",
  "key23": "5TQ5w3epjyjY47V8Aac5katJYEU4gv1myLQW97k4xEvrEXN3Z8vfUFNoWRgx9QkLarX8Vx8DV4ubjJ9n1KXihwXh",
  "key24": "YZnFewv67UbdoSDFcPTAT8wgo4Ce25UpDNrZxMfDSwfuAi2e3w8Wfa99ZSa9BumiwajvmxHR5T1bYmtgGJwad2C",
  "key25": "3CPSizKy9EtvkcUDonp6rs3NfNBoZA2LayHLAmjUFPHvJ9MQQquYYpCQoRDAYu1e4dU6wwyo13fEimfP2ZDQPTaM",
  "key26": "4JBj34tbqe8m4PUiHvKVk8DwgVEmkmQKps79excifvcEuDHpWzveHDPTRk3ZjShMpfwDT1X8StFjbnxWQURDHgBJ",
  "key27": "2hxBF9pQ7J6qkgDo1KMGpFq2csHcDQYuB3CDVEGthdAn798JEVje6x28fTa2Dgofnqad7Yk9s7xFfMbEwy9jKcEX",
  "key28": "4FyP9AaEhPjaSKNbqMVx4hJTDRhDoXGVCwgxdHSMooMR1nRg8SeTZqTyo8B4VV6m7LUwbfEbFimBtUAiLNcimEPK",
  "key29": "2VmCNfGaNGgKwnktWgeZRGphddVFebYFz72mGHU2hBX3Z2emTigGNsL6mkhFwxYL6QJHzDBTk4g9JFEcRn9VK1ja",
  "key30": "5Z14mEaDShfQJ7nQBJjverX6WLMVETVp9YiqLFv5jiiz4f4hxXTdKMvnctBBHxqyZUA5DZoAut1HiaUAjF2AKZU2",
  "key31": "5uwpgcS8J9Vfkfqfb67HziUXvbVSqWjxfhVbqsQJBqE6NMebJfDvyNJ9nkBKCyxKpNXufvupAe5UASUaNm8K6dag",
  "key32": "2YoiTjND9j98Rkzj1fAPtRjRX3oT8JG4i27N3wxtrm7kBFdapd56CL1rpkrJorB3uoZVH26Gx1YKtAxXJMx9yCQa"
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
