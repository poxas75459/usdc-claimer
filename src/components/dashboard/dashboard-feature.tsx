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
    "2KrtMd5iK1s9vxGLsdn3aHyPTMmyVD5WPUBFjgMhEeUsTyZ95oFN77AHTQGqYn14F8qouwmuMsXx2Re4gP3aF3Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1MVnaSBtjg5G3Jj9T7BoCsMY7FMouenwszctGsa3CMQas8JK2hYgCzUH1WWH5FW2KvJgtq3QhchGNLQBHX3Eyx",
  "key1": "3hw38vwJzPgbP5tqe3PzWmaRFDnN3oTEZRUVADyCYY952LJ2aYgoCMBoAcy3JWZTULe1QbuaSQXTZTEPesTSw7gR",
  "key2": "4CXckjvNVnMGRxFNGLFrxBHDmU76MFxn7G2TRdNYXRQFDVUpDiYft1LhsTKGuFFVdKSrd9PFu3x4hEdCA7Qe47MD",
  "key3": "2hEWDtBABpKLJhZhS36J8NWigdAVdK8YxSgPBU7LqFTmUPKE78z2F9GTMyeGS7sd2mYRPdW1vUUh9md49rCfTPzC",
  "key4": "4CRW8QEeXLhWKANVNJLtQNkXznFtvc79C8SJtaXJWb5XCdsf6D8GuemEvRELPMnYuHH7J1W3jBtiEgmDkYWKFL8v",
  "key5": "2zpytb7ykhz1PDtzY8PfJLFBpNUBUj427F2AgvTLtwNC8pgqbasAA5G1FVeTw7gCJXxKSb8wq5zmGkajw2EUFvbc",
  "key6": "4fJqaK8MNnbH9WKKJDxELXMkVQQJZ2fRdLt2dpR9G4rn8TBVQZfu4DLMPTw1cFALYy49HxdBAwgzDPSEEcKSsJD8",
  "key7": "3gJ5zhRTaMLTHeEMtLA3oXKkXj4gLHqWEFp3Cd1E89nLCmYcJWShaGEzFfDxy9hxADmTkWkd2DQ4X68ozYeAWaZA",
  "key8": "4qtqf5jDYdQHQSkT9EqmCRiqQwMcxSz2s6GX3qTr1eAgZHf5ABZTWu1w6R4Ng5H34Ravy67TMiwcKTgt57pkcTAU",
  "key9": "3QbUMmxfWJ8nEMpQx3CYAWyvbE3UBMfkTXF4MS6arzdzMs91s9V7FRsnpxKTvtqQdoGeWtfuhaJq6JqFtEsQMeng",
  "key10": "3tK41Py115YcP6xsWVk9RCe2QxLozRjxSYWKk2G3NyMV6vsxTY3JUoSMFZ7dagFm9Hagr9d9Gv3CZs5EEPRt4EzC",
  "key11": "5ujBFkZ6VFpteTxRfdJkAiYz4g2mSSHxAqnhz6CaTyQK7j2HV3XoUwnqFNmJekz1inQYdKNYawQjTZy7hftehNAd",
  "key12": "4RK87BrMJ4rtXCNqwabRqfcPuKPeBry7q7MC5ZCmZYeNqGjtgfZ17eDyxxbzqUPZ9GyACqFcmtqTV8s5HzJBQz1J",
  "key13": "5yL8od7roLEivBSeWt3GxN5BbLxFKGgzNh9ZNv5BKgdRMXMshDQpSPriv5MtpPbFKawmgxhYTd8a2siMt4KD1siz",
  "key14": "2vgjPFiNaQPuRucz9VKUx7KP1exmJxREAPW8T7tD1HFcZFCm2xdbwYV3YHTHUnA7HY5sXBjoJkUVYSEUVcRo1oK",
  "key15": "5HA8qSXHH85711ucx8EHbcv5fHngGdtrUF1YAT6bUdDzcQsnaGYFEfNy4xyirxuujECrZoYQmFW7LrGwFTT2FR4G",
  "key16": "19mRk8t1z6bqefteSHQyrhLUTndk3YPuyD6SNmeV8KAfHkzTifr6accMGsME63adPSHvSAsgR3E354sAv51Zg8K",
  "key17": "5cNA68QUQCMg7Tcq1DG3ztAx6uQDW28DLzF68tFWHhHP9AzMjcj4g68ysNjoGbVR5nuoNZJSpaqouuuYNdTsXVBE",
  "key18": "4V2JdKR9nHx6G8kN7Nsc6UKDTpiZUg6HDYLmCEnfRmJVMga12LB4SueXfSandA8vskTo52UFbWxSAtFrAugWXo5b",
  "key19": "531XgnygLFBFJownqtVxCcQ3iANXP4NDUbLHuZSWscwJMCDs4Pt5UnzFiBB48zdqMbrHeYH7AyDYrCsEzMVdPHzw",
  "key20": "xj7sSEHEgJif26nUDgAbKDgTPUjBrB7qMdgY3MCkoV6hkLz9zmkfUL9xU5mbyLaDYdbuswqNZnEv2UGcAqmyvEZ",
  "key21": "EEQmbTzFAH1aSqLdkd1GLPwTSghr5ntJ2orb3u3m6CbUmo1S55vLHQJftp7Y37SRjhP8fXnHh83mZ1rw2syRMJa",
  "key22": "sJrMEfiFprp2PKkMqxv6BcXhmNNQJbrUAnfgT5EKJyLmA2gSiPeWKHvHMkwD8ZrU2NjBnDsTZ7MTDUEiZm3vjce",
  "key23": "6JHypBqNvGy6EBAY4SVxtLrkeXdVCHDPLxjnKofeS9fScYfDsQxVxKFQ9aweYcqS8jKMRNQjdSSpwi3nabXTbTb",
  "key24": "5p16p4WSFWwUSp8jSYUEoL1MM7Rebxv2sJCPxmRLL4twBNqQxaLwPE1WUhn2o2NH3CzmJwFy2Ek81HXfSYizmTzd",
  "key25": "4iG8jc4pUre9wcdgNLekvVEcwjESxSnchFaR4zLxDA9v1pwgDBVQ79bJJEXK8ZGxRuEPSkjofyiqnzQTUB2dxGY4"
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
