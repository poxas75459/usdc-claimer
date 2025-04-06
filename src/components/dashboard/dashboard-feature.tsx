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
    "4CyAtDBhqCCsCEs9TqTmbanWuzccbJ81w3vMACiu46RGNmZp1t1KuTyczouS4yygUyXVAJFVP5JcUyV5A4UzuPCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YncbhzRDJc1vdXLCt8HsSfpbeADYD1eBeK2LFb2J2QAoScWiGrRBsDDKWUL1gBLvaMPrgH6x98v4fbfR8NLPPrD",
  "key1": "5J6ekUHw2tCinrcURWxPvBLibsrGzRVdpDmekNLmxBZ2t2XDSkkvqsyQfKsVMb55Jzrp14sg4U1c5Tom2xsP3Ckq",
  "key2": "xF5hx1RoGy2mHzvW56FXo8qaKjMVi3xgYQayNJhZYVgJkRyVn6Yjw2Adk2WGLmgRAqqP1fCFXsZLTLBdFHuLmxF",
  "key3": "4qjD8TLrzcDqGxgj1xzYd2PPUU4z9bdQBnhRsuva4Ay4Awt5N1Cumm8Kfoak8oZGycmoqzsJfvffdSjnPngH8aPt",
  "key4": "2bMppeZxGjtnQqkX3x4FQtuRMH3xJ7cnxyTQfSh256sUQNRWywV8HmkPfLyWzk6wGbx7k9hXcrL5yuFN2nn73KhC",
  "key5": "rMXPZGZHYkp1dVSmHPaM7d6fj5w7gWhFsjWnJSBn7RvX4EsPT6dA4o9PXfzKehePbBvyp18spovUAFnGaaK4TFB",
  "key6": "TeYFNusSi2ta5QJgASrdE6HBrHAggvsCFTNj3UA2p5mjRPHRtvtNNFbkSZS1ScMmgTbf33RNgb6SVpNgqu3aBCu",
  "key7": "56qJw86MQi8zSx4Kn85w8wAszohmBBNkzsVXeHGFKW8RuMFhRQhBMwYM5KRxupE19EAmuPjSi7n6c3PW7rTMVVgB",
  "key8": "B5aiV5JouQq1AknVq7tb8qNoYSNnknoTCbCqSZ4MPcFcknVvraHNUA47STA1mNvR3yUUjCzDngyesWL6mLJNdxv",
  "key9": "58LxMNueSePkg9aTiJcSwUSU3NnNL6r4D8nRWCacUGng9VjjSpKsnycW1TyhUiqWZU2ZqNzYyhnZaXqhMa2JwszQ",
  "key10": "2Mwooq6SNcWQ223bmkFsyMaGm3dx86ji87VMCUAg2pXSaEv8xBZyLNkNbBRCnMAVYS5UqGwnP1uDjdFe6MhCtMsX",
  "key11": "5sDwBV8n7FDcSGTDhjL7AK6NfPJGkS9dqDK3Y2ZVQ9fLREwwsiPGmx8oXb7LUoTbtG9qX93mgehmr22cYwwfkvYF",
  "key12": "39D3MYm5KDQnf5AoarkpPy57KCp3vQVoEsvQUjxstDorBWdTVeLfkmr7bLtYWtv5RmwtYptRCGaWfSw3K6YK4wPz",
  "key13": "2VK54L29hmcsssWUAUjb5fLQcQsqo5CAH9hCEPVLxQUMUm6kUbiaPtLdGadXtBCPBgcMY3nKZfBm9hDqLvz2ejrg",
  "key14": "5HrFwMWgBRGsEBX1bj1q5EaQJP3u6UYePf5Q2mSs3nn2KhUKzacvuWmrGBUUBVQNSKxUGkiWKqnhiJtsmkF15ttY",
  "key15": "29tEmMpaPXvsZP8KKeAMqNP8vVNComzHNqQP51ZF4bVuAfg6x8ZGH792mg88CdQzwqFsEoLbcfMTYz6vTuYksFAE",
  "key16": "2hpoygka9D4XPAA6B56dGYdMje5fsQAEYQD797dMTMZ5gin8QoiFvBvDckLgGbfCRvhLxDSC3V7KcNjsxk23GEKY",
  "key17": "3d6c21cQmZsonNQf8HJsruUHugWaih46oos27svHQhYnLBqi1d3DcMZ9auFc58z4DfYwDL4EoJe8BrcmYzCoy6on",
  "key18": "2UrDxC42i3b1m447twYMgPxXh71NhwUVEaZUHu4ovTetvYC9gQ614eYKtxRiTjYr3YXzNWioFJogiM4nuCpYDBde",
  "key19": "42tGprMdJvDipL2DYbrMipEffKBanXsN5Fs8oBFqy6Wb5TFYpGyTGzjre2TFgrCJQztFqsYjr4wnLcDf7SWPePZK",
  "key20": "ViBMCDmaVLuJawr3eB4rJj9sJhF5J5f2aRFZfLwKA5DrDLfix65nTsbRjbQLRH3DdW4uC4x3LN3zXUffdtmTyzL",
  "key21": "nFWbmMDYz9tn4WrN18pWFZkAmczqnX1naHT46LpAeBpFLr9oHmeMqine4HD8AaZGZRLZMmFzQ2dF2uDo1W8T9Xz",
  "key22": "4L66L1Pr7AFdKgEoNLGyoKTE4nvmyhFGSZ5BAua8Zk92jW7rYb24n9mUFvKVRbBGVzUXChipSAx6YfdE2mrZmtrs",
  "key23": "41hcCypucVMzRfjyiEgXxSMuE1nAFaztdJ11xpippRE1VjC5ntyNX3pbSCMxRUVYwhNFuCPnx7k7DBbKkhCzPnVc",
  "key24": "4jW6xWXLDBVTyWtotuoWXE8TroVuH9ipbzYphR1SsDty8kEANuqDQBLXR4eExUoH5gGCa5S1iWMwGmYkgi4MKMrZ",
  "key25": "yaFqxQ3Cx5a4LGXyap7KvKiGCAA6QtwvjStrgvRsKKXf3gGJcim9vQ6L9pNbbcfQdkQ3ZzRLGL99oB1wdhxb6Bt",
  "key26": "3y19Bq9xJScgYyBsuzonTgvXYZRubqtDJuNkQh2fkCWxuG9nffV5uPAHb4BkFt6WUskPrZpMHSSPCsaN14AA2vDm",
  "key27": "2aXyQFYUv5Nsp6mmRPkdGs3GNDijRueGT8j3gr5hRokkA43f5Ms4jNTixsmEZXtuxNvx7199DFZGxnpEEgvkQgGY"
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
