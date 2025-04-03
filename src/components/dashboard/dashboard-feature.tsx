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
    "4HpcF2zo5hGYtbksqXvRsok4k7zv6uwSMf83jvAqsTKNfyZ9fYcG2e8cMAY2RVfCLLdSNtpiP2PM9cjCAadSC5Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QA5g9aiZPV29d1dg9RuFGXHT3S5T6KXDT52qAzdRGfPr5dwJkZkacra4ShfVufBY1qPTD2nCgJyzbXdFMFRpzU",
  "key1": "7FaWGxjRh2jX4dHiwEHEWbgt27TD3WKSHntty5tS4ETnYirMtrr4cHM9vfAHo1uApfgk4ZqayGDCgoGDcqqCnYP",
  "key2": "2uN3JoSrAXCmuGnsjM8dD2KmgbMfHdcZXTwNwvTj4kDKbf9eNzBrHAzQvALQtdB4g7ZAZCEuKshhGH1mbXTW21Hs",
  "key3": "4M2Ar9aRT83BDRRkqEryzikbn5r9KUa5SG39qMdM3rdqyr6JSgNQ2giCQenq6Dbm9U4YZxogbNaC4dHPvruebsnH",
  "key4": "3Udc6Dqs5ixUhtC2VMSsaAFmomvDiEd88G81QfRyrhX9x1g1nC9KAeCjhzXWrGMMLPNxc2EexqaqNTXWSmUowsYs",
  "key5": "Hm3xetA4UdA2EYtzdTp9cADMd2iCrcws5FaKbLUkpSH1TGZpHGgqRETaxWtq1QtsmP5PQp2fK6Le5CZZX7GT96o",
  "key6": "5h82q5chh4HV2Caffh2pWuGJ48Ke5naryUyUC8YwqXHjgP1a4f7WXufN3o35ZVHAPBnDg9AdnChAbmViXEtcYQc2",
  "key7": "cbrUQNHXfnEJ1LNKPipP5m6kpYjTc2EhRN9Nmt4ZiaMD2uzhgxgu47fvpvcXNTe4vvUNxpmhCTdY2cVy4w3wV5H",
  "key8": "41XbgPgRALLBvGHgRwkvtf8UvuU2zFCityRZwxVBRY5PYTwF411fsWUXhkHnVs7bJzqQVEBCDTb5ESREoRPwZsG3",
  "key9": "5LdexnC8tcXdrWUCgkLfzXbVKq8g1HNFBENue9LQQY9RzvWpcvJV9vPMiDrYTWAb3pwTJWFszpxWBW9eMNBQSM31",
  "key10": "31u1zWVr1AzSJkq84xEc376xnEys9z8Wi3g4ieC4EAmdruN4D9WKf8TEh8pSjT9XsQUQfkoVVWRG3NZQZn1b6ePr",
  "key11": "5kuCNfRu66Dwx5HXBR3LCLYFJCGTabsaBrCX4z5ddGG2sgB62i67zEBbrPDbBj2b8nmAPVDgRtDg7Y1NA1EwrQqD",
  "key12": "2Tn5QHtu3Fj4W1PxegBQ3m77z27YauUHr4p8NcE5FVh3ujkDczySDhP6cJ8KJfUzwLjdxTBJmEM7xCxyePQdtRnt",
  "key13": "35bvLRmiTftCySuf1zo4wAPXxqfJDFwLe3TQHfPGZ3L24qKkPbUgYZfqvbncXR72Fo1WAvw1mD7Gyw8x8X855Bq6",
  "key14": "45L3uZZe3FaaoxNC5yTMnekhjR88tDv6T97QR7tDpgvgfkPkZG2ULU7yxdgzKRJbYdxJETetbh6i9y3R2UPAx3VK",
  "key15": "9eG97xW5DVgJxKUug4eKet5C892CiryDKQj2PcbYLjMRLP2mLPcBXDYSDKAiawBKm2U5Ufq4oFvfaWAzaeeM5KT",
  "key16": "5Tauha7KCfvwcRbEJbCKRBxcZvjHkPbZhQoXJJA1VA68yTZcCiqBXrFJXtjKiqmPczjcgeKKEntUwyHVMko4ZWkY",
  "key17": "2RbbCTa2y7dFW97Pun6xdmsJVuRvN2nTVwhvmJNg2hKMF48eJd1TFrXnbmu74iqmm5pygpcb7XzkWgKuHMw4f8ek",
  "key18": "4wqBrtHhE68pGHcZDjgswSMzZWJHxiaN71EgyxvFd7FxLQetLugr78corbQDDdoERXyFXE53FEy2yKpDwi4AFkBZ",
  "key19": "3icVCHu8V4cEzcr66vEwtkmWzBdVX57uQvHouRWd9kUAuHNU9zAFn96XfZ2niGro6hu8MxZwUhsTWd85vr3b1dme",
  "key20": "B6J8Vci1RyyAQvMttpGKJgz5bmCfb3xzuPUKMmpwiojy7Ce4FxT2hRqqFHSgHci6PGnemWUK3mdzpXszVjQPXEh",
  "key21": "4spPkXFXaDqWTuj7QDyViK8SCPBfgkW4YgNdBFLQQbgjdY3hwFe4MyieYdZfrjq4gjEb5F37NCUWdXVrV6R8EH86",
  "key22": "5Y9haJH9hMXXh2g953mPpwS7sKua1DJbS1gDWe4otn4P1JdFf3pgTNVruZxdkkTk2gZjhYChwtzpPzXVHVW1nKdM",
  "key23": "5QaE2aAPHBscbWxPWF1Jd9oNGQ5b5yuD6Tc2cHxnx2UnbmtnaxkbbrCYtyRMJtucUAqzCZ3XZSm6siedphP968ph",
  "key24": "4VaRu4fvSF3MqMSWbHE833VHwkZNFLNeU3B3UPNPmG5QJSHtZVsuDryjZM8jCxnkt6AtpwzrYZJQKW8K2KJFvUvm"
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
