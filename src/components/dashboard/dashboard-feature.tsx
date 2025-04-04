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
    "61va2xNQnw4qbhBCsTEEgxYKgwzvrd6SqmNXuYzKpYvDLLVfn6sFDbbCP4K3Sm6d2XXtbEVQVerPVUB8yTV7M5ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqetDa5Gfimwd6RDb8HMezbhn14ZvhyiTDRSWVW4xNkjrz1xZ14rtYu9bA9jyb7C19JzYjQhnokJETR2J2oW8jo",
  "key1": "4uZQoENt3KotzDqQZvM2ffhLw66SvQjN4i8d7bX4aQQmSWtt6VbznxzhfP8tHtsoFU4PsKu13G58K3Tv6sxFwjG8",
  "key2": "LdkieYi9vyWy8Nr7NSMtmV1JrrUfS4ynsxGvW8saztBKnTVTvgrGdhJEFzQsYHHvht9rBSogGGNE7UCesSAKkA4",
  "key3": "5F2qtCAaFAUzSR3QFjGTMJK2JXsJtH9Sh96RAvmFPtj8qnogDofNDPnCB46iXuxkvtFKwRJ5MEApv1Agxkrku57V",
  "key4": "4VALBDf9M4sySrksWBTR1FkkVpBvYs94wuipdGNwqeoEHx2gn3KUC56nUUhUkJcfgkbGbRkm4JY9xGSWHjnQYNuy",
  "key5": "5kLXmzVgcom3THscAiy6KoPwqtfDZVnKnHULdZSkjnnxpXnm5fpgERmo4UwKFRHSypfPcrkyAYhjfbcgLMU4JEVB",
  "key6": "4HPWDVSjo6NWmPYSFdBZAiCxqcNChTDRhBjQpcHrtJXptJyzGv8SBbUj36vX24MArjoUt3s3QMe5dg3EaX89d8Vu",
  "key7": "5RJd9apWhqSce14PihgCzxuaq3A4bRzWvN761FP2coHx7yqz8YTrBkuHwh9D2BP9VqFvKDWdk5zkBRGZutRN3xRr",
  "key8": "29ohGckc2Qtyz5LnYxiePeXxZoj68pC1NEBvG6uqSQQV3ZvkKGVkZ2kFFmG44FE5Guxo1zzW4BLxmgx5dmKHNRGm",
  "key9": "5DnX4hC5sR35vcxWSM5s12NFYSsByudwamArmuvXemdRLYWbvztdhUhqH4cWHkXpKF52TUuKEBQy3Ut2b7BPGr6G",
  "key10": "22yQ6HSSxZeWyaVnNXBTJxcQNWXJPKsewvQ9XbV3xD9qQDbPfhi84C4nZQHhke34VmS8xUNKyas38tuJqzaGxS1G",
  "key11": "27oQqKUgLPeFPXCLVuR2DPHEqCFkao3yMc54y2grciHNJBAsWWb9EmzNxThK84FSKWnf284jykXNUKYC7VM186Zf",
  "key12": "3yb7j85ydowAbTCh46MAcmwJTqDPSWmGS18suxqTYEiVKESdA2trTR367Q8h6qoNi76wgmDUFL66qCF1kHG9yajp",
  "key13": "3EiPoGokSXtdaoSDeoT4ztsPMhAViAJFJ5QiHFV9JDMdb2Evq7XZWS6vTqzK9EciadsnD1nYo3hDTC4B56cG3qzq",
  "key14": "E2AS5xvgX4hs3dnhPuoGsFnYNbadGjc56tza1eZTFQkh16mGkvZNsztBiTW7YuKSn7sD6LjE9RHjyoLrwg14rf8",
  "key15": "2PAsQszAWdZG1zGVYhQXBmFKaznugRTqkNCXkuUZJeXa3SpmjGgyx7S4e6Y7aemBh5ypYoxDnU9rMMRC27QWjer3",
  "key16": "5TsRbsFzUxgMskpGAxrLL3Z2gFLeTcQoxHjz3KsVqkX7mNAcnd7GL85C3eWJ3fLu8W4d74u9mn1HR21W9zobXhHW",
  "key17": "2uGCjokysMJTRmVMSHbBBZmbH6eVx8mUiUZbiui7AaAVnGFczDJrL8owd5jh6fogFGeR3W78uMhEHW7ViJN4ttfZ",
  "key18": "4eca3c8PMcfCcRbzf16Qu8NeJbN9Rgs6R8J2crt9B7rmUvgTV2aH2oVGqMgxkwbCsS2hUviZWrcqHzisYUqh1nfz",
  "key19": "3TDHYpiHrVwn1PzXLRgd5ZEAi5eA9cp5gJ66jQbfsdet6hC9766orp1hG1StHefYqsQXZe3rBRLQkHjU5DVMBs2e",
  "key20": "2CMLw8CwE1rkV9aS9sj4eDj1e3Pqz5SiXC5gFDXqVHj2rbKqNEN4ZWLdXADp67SM33W85sDNxDDPx3vh9WjZisQA",
  "key21": "5X4MTBS6WaAcKvVQ4Pf5HRTT7mVdokc5V7zQFUkGwkDyrCqiL68vH6pJekoBdGeMhpLKef6426TBKdRkvPu3NBL7",
  "key22": "33SBwFumsjiC5wv47zxyCBQzYnraVi5kyDRgzABQyBsWumXp4g9Z259vKDjGzVe6vUGSu9hC8re4UCKn92besCLS",
  "key23": "gcPv3rRowVsNRqNTcdzctQHe2JFLsTf1BdDSjkx4KJaG2qZv2JLNr8feQCic9QTqgKW8wRh1ytkG6LH3gpoZunC",
  "key24": "3mvYExF6E2eWXs57XzFhUMxemZEKgKrngswkHdBpkKBunmBraYSobHK5cLVrVJiTZz1eHhXxY3ubb95didT2A2B",
  "key25": "3E9pRsiV5gZ3xcVfz2xEPtv6xQWQnuoxzEU1QpKb3s1RFbwdXtA7WSRPmVAPggZXHpAKp1TYEoPiLcjrbFdTFCUm",
  "key26": "jEvqF4W9svvHtrSZpdvuPZjwtoLSZutCNYqKbVT5yCoBoKBYdS8iChbTU6syaVAQMiwxk9DoaCEmk6UNPN8js9c",
  "key27": "5aNfrkqiExX4c2Gp2FhQby8hEcwxvdQPC1UHo1mMwcGMrP87KPsxFHF5zExVc5ES6rNDFkut62qBiuUSmF4U2b6n"
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
