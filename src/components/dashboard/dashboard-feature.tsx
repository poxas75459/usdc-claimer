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
    "2oid4fi7SY2qNaFNXsAZUrAgUad9rJNrzzQQ3qiXMrB1QygLqZVYkkthbBhexHxESGJxurfsVbdaqrgqDMU6sxvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWUZcdzUNEyfeixXgXuYSaGBo7nYASWcUz1uZMbD2XC5XHF9kKUwzaZ5Jk9bxJCyaK2HMyZxnY5T7owVoCmZ3MQ",
  "key1": "121719RD8ADr1GWsM4JMrqwcRJhXVyhk8udHGao13E7ZRpx829Z1H4hz8xCF324JSRWGhLgQTQtQjB7D5s78mbu1",
  "key2": "3Ns3ao8FDq5Cb7ztZ1pzC2aouBQu4ASepsAVEjofmF2DRxTdKbEheDF6Diu4rt4amgZSnQ8zvfENv8Apq7bmjs4s",
  "key3": "d91CDDUKRyarasZc1WRbFajRYtaeZjqjZfX9mXHDmswAfUZPiq2t5gTMH3yRhSRp71Lx7R8hafraCR4Mubfuzpt",
  "key4": "55ELGJZ9E5UiP1i7JVQwyt7sRryQX26w9sP1Zi7xUxPWWp8YYbrJntaCxcBEjW7z48Np1XiLctVAVmWBffEap86S",
  "key5": "2K9GKpyRZsJsfcCPPFTeCB7FE1Uug6Wrv8PRNiH6EzaMCrunkhEySCXu9HKRctZG42uZ4BbbYUogtgjtMGxY5GDu",
  "key6": "5P1pHfw7uRDn5r1Fa7XEBGWT5GavkBn73JmSEdPkYj8MtVQeX9tVeipfgGZiFEQXGnHtCP4VAcpQrq5t6xQkhpLg",
  "key7": "3BDFvwEDNWDBu8jiQq3B8Qk9f2rSPYzGZyCjTqWT7X2shRxPvSNFp753xKL7avG44XUuVKdLEBUMumBNXDfiUc7n",
  "key8": "5ZyFt9Tuc3XmHagqRnV3uyo8SWtbPFgwc9wxoZJzBKkZtTaYDHdgjynzocG1AET9yUiHCU9DjBfX7FER4Qx9VYbJ",
  "key9": "65DcidFHCTh8jEspMAkfi8kA9mbtAAGycS9UqD46VbWbHQjpeFAfsX4DzxRCFnw8bJ3kUDRnFLwdN4WCnCHiiW1B",
  "key10": "32YAXvxFUYAyo2BbHYuySmMq6F1GLSucMKGR7jfLLvMuBK9zfWvc9g8PDygUVXpL2aMBus4sQ8LMqmgLrMSSBAmP",
  "key11": "4bGNH9yvSNP7wCG4ony5ehCYu1QVC6gq4YqXsM1gsGurHES736Mt8ApE8h6iZgw7RiaXTWcGga2RyydRvAPNi49v",
  "key12": "4uPDiM6WAqvzBJHY9XpYRQL3bfRzJLoDncPpKmkHhFWPWCaYQxX2Lw4sjxauAnYKXaz5E7Y4Bn24p9XYecM4S46d",
  "key13": "4g5qq7iy751UbVJQyKZGNpq7wd1horjWaak9nfeDcomdGbRL8McZZjMTeYyEcrBXJsg59bLwuvjV6BkFkpcizfS8",
  "key14": "5fBr69LLWneiDBr4Zc7Csq1WsJBk9afJ5r9YJuG3uHbyGe3cunBz6xFHc4eku1bYZyeL2wP4XAJarc6L6UApibmx",
  "key15": "3VHxv9Z9scqgeaFPoXk6cypN7DdAQKopmQcc2RpUTpi7M1oMkz3QZdS8oeYMbLhPtUK7ghHnxQPnZmkoPUPBM7A1",
  "key16": "5EoVMYvS7hMyAobcFYtSfcaFp5wWYPAL2FqnqhjTpV6dYpQof83vd3m5qiKUsqCTAwXz4eUFGzrgUmRPigzVB65t",
  "key17": "4RyjyZJUChxzp2Sq5JcLaDjHkvAMSXmu9QdNhDpYTA4sSjgA9oHXJ2XQ7me5hqdzpWiKymw2VWQe6UEFzcyXmGbf",
  "key18": "LuCzansbRTCLARmVCJMsk1y3XixyywTJLUUPoMNxFCSH3TnbWLUpAvV471HUC7zXdBjnhbASnp4f6GX8ffS8JcV",
  "key19": "4b4mp63ouqGrRcYKszu9ZN8gFWF8nPykKuQiphzd8Vi6JMYUyT5TLfyJBoroiNnmUu1u1JYY1VtTZgG6rdEVAJTc",
  "key20": "4814FqQd199hBYVwpNVZ8fBK1ur1ksGE79KF8X2XkGUixsFSaX9AwFtqPvYtnt6MUi1pvgRmnnwsRtTcLzSodkon",
  "key21": "4cHJZR5ybLUfXbnFMJ17FhFqxZAQJ4e6YczHJRoPsDo647eVzAzZWH2LJHVVWVn9nDe4iuXvm7TjkdxPeCYVzSZ8",
  "key22": "9xwy5hg2gXw1H2mz3LjFk5zVFpRrYPUX9xYsbSoVW45hFk6okqoF1WgC12nxKCTmjLxyPwVnSKa7mMEHUuUgLdC",
  "key23": "4fPZJYXcdKZP1zd1Zpsv9xiLDSy3rwEBWhNmSpCHSSb1EjvCZZbds6nFccJcXpQ1Mtd5pU5k9JoDn8RStGqeqrT7",
  "key24": "27SXicqD3EWysvPkHx7csp6JKosBWbuuMUs6UAbiSjBxSY7Cd7x7i5aciikdyDVKzdUeUW96xEKEPA3qk3Mwr8ae"
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
