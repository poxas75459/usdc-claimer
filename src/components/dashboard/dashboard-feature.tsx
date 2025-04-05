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
    "2zUGEdzJZvxwyKtpN87PjxWRcbG8f2kZNudenjhAZ1e7dngBWy1dgS6YBpkLubfYRfDM1CuJYwmiHRssrSPkatQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9RUzcmTWyQ8Hx8fNcRMgqgdaed432zk3MR9Uwi4Xthp9QP2kT7Wz9dGtWf6nn1HtfSmq4YJEJurED9QTkrmfhX",
  "key1": "MGsZQBTXZQLVYcACrTe7RH3Rx2DYVgmaTaSBj1YTYbM6fULQFW6tPnZr5zL9MAnqLxrzkYPNk5phV6u4KCuMbLr",
  "key2": "2us75nqjh6adBha4wP9ii7WrTQJzqRHhaQsW1xftNud3DxsSLtRJoDNzYaqM912gyGRRDs9CPFJvVeYuCxnC4NAy",
  "key3": "58FLWQnAdUi1sVNqtWXCHtEirBdfmfu3Vty3ak5QgTswRHKvyQzQb8TyzHeG5DAeRDbvRRoZLEgjTT6YVz8M3w6j",
  "key4": "4quzqu3aSBZy41Kany9AZR6u68TLkqahyzbJ6s4kU28aKHRTxdooGE89RTbAny9tC4zHZ18ndU91MoT4XLNNJLoG",
  "key5": "2H4NWcAhhdg2jLnWzKdJHvDpGT6eJwJpGeD8kD7cuXy5JUUptPC7diz9uM6g5xSkD6mT4ndnBrEdnKEKZW39LU8z",
  "key6": "3sZqudgFhh34SgY1dfvugfBdswbGU1JKLALG6Q4if79NfyC4mehDQWmXdMLo6up5MjBVMNXQYT4h5pyYidAUvw4E",
  "key7": "2HJUvM7NifH4M3togDjJecqaqxHCo9P3iHGgPWFPjRHsYXbcRZs3nPX1rheoXJdy1z7oDs67iB7vFHRQuFLeJj6d",
  "key8": "3pgWNffHVfrSizHPG7Empnrsk9nyQJVySMsqvfLTFs96s26cD4cMALfZFh8ihqjp66BmzuuJo3HGgpgsFzMgirUV",
  "key9": "54jn68Zo27iEYCB1DMxRAHokJm8UQfhPCDmTn9ukNFmJmuAytbeyPKTYbTRWkiGBCuhtW7TRVM5cDFhuCjrQzee5",
  "key10": "4FeWQeRCY7Kby6oBkR3UAqngFTpPrccHKsj1KV9ev164VdZGQT2nqDSWpmUR7KGJmrVQRokMvSCHgJQVdy5BwUqN",
  "key11": "2rcxXa2YtrUn4xpVkE69RNU3BduWiiJih8kkNY8zPKEUqW7oTyifwkbFq1xvLBQMvU8zsPkVxaGFDdyTrVXRiimr",
  "key12": "3qY6HSXJ5V3Sa2jajbMDuyagN7NngW1i4TbgzXmPwbZoD6CP6GY8n86W3jZgCZ3Gh2Q6SRrbfqgqiouUNCkMSTQc",
  "key13": "4DSnVu2pNGd63kvwjfR8HtEyf86aEdVCTWPa573LUV7sGEZqHAFFaJzmZzQQHAm981CSFQqmqweWMURJJ1Pvrw4K",
  "key14": "29Lk58Qqu67kPXUYmT3QZ776wgXz7hhqYH7PfGVykACq8nwWTpqTHJX4zQMQUnQpCaqRSyULyan11EfMDXLw3az6",
  "key15": "2zddgeyXVsN212LHADwCPyreVGvtvfiLBEyznUv6PhbNdbGA3cPEwz1g6CJqYryt2z3h2im3hcEEbcYsNs5RBKai",
  "key16": "2mR3iNWbuuVagpe6RXsc32mPzcCpKqmZq8bBBWvmYFNQPdUTTFpnb8MvYF156DkKmAgNXg4NZ9XNfqRkNFifHx7u",
  "key17": "2SzjrssKhBy9JJKrEU7YJmQJuEEHxFHaAY73L4EQJfHTQusPSyeNG1Zv3K59xBwxrGTkGX9bjskkN7sp9WWDCCrE",
  "key18": "3Xfc6tAwBpm1o2Ltoo8sTW1o6nM9wBo79bULAj4LdzwBXwb6Bt2Lo5m6nTieUd1HnMkRun3sAf1JMtG4YKH5Kpft",
  "key19": "5gC2FxF9dJB8ua2HheZ3MWydC3v3obQc19h9TSWjsXaPni3vkArEYVaxJTKRFiwMmC51r8aUXR6tf6PCktETJo4F",
  "key20": "67rDFFrMsv4gBM3QiEybza2PSm5sakEy3fAD6rCxKKD95VctDB7UzvRfN6YCN9S83uT4VBtF9aYSLG9oCjMBdyZT",
  "key21": "2bcmHdcuwrRi8aifkBnAomRyVkDKmAmsCChrSxACjBSD1DPEsTvJACm1cvoAdshhiP367xQgA83u3LNBuNHZ55PT",
  "key22": "2x1Cxe2eDjFzWQHU6PuwHdnfydkfoPS2U7tDoqfWgrxMx1J7oa1pdWhkiFzeL9YqBcy7JJQtj5tDW5acAg1rcQeT",
  "key23": "4ig552WS3e1T9SQa3QxTRsm3YqMVZGTFYu3HzpdU2SSB51qxFe5KsWXX1faURzUMVTgq4BhzQ7yMtKzVJnFWDoi6",
  "key24": "3XiZNTbQyKcjiQbaGwmaSEcGo69rvfgTwbVFrEU6cVndUzat2XrxKfmuTdn4cZPwkPS7p84aXjdB4QjTGTrtEoCM",
  "key25": "26XEisc7Rpda9szPNAvTRbTpWp1CqDGy9LSCwCCeamFNSFLmAck94tBa41iqvT4zyBQuZti1r962XZ2MUwZwNw3v",
  "key26": "2ynFu23jaY78KviZXtAQJxa97NaY62eh4oV9GprGLwY5YEe7dkd35EqrzVDHSaEPBZCbe2cKN7duVEap6ywLyDMK",
  "key27": "2MGxGHHk87ujx3FAixKHY9vmoR3EmCzznYpnzSoX7cB62yaJb1NFX1u5eTin5D6RuA5HZkL95G5TipuE5GnCbuwB"
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
