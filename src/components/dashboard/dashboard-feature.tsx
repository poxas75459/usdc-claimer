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
    "4gNfbaBFMWxDRvPtnvptsUbV9PLBqkpxey3Xt3KfKQvPci8WEgxHPNuq8JAqe2Ph4TwRFocPyShymPLScphH8TPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXmRN3Qi3sVfG8wCzdxx2rYoRVSzAgMNJiufLNEUtv9jB2H7DLJhyo2bx9ZkrwxgDGS67VCzgq2UYhzBs6LdDeM",
  "key1": "2Y4gQKWguB6BCTAPf6tjnBtF2x56sVfuApfSPJCGYKfY9C3WnzMhyaaqiMoD6cj46yGkMXAffiexpRsxjnqmsxsk",
  "key2": "5TgzRustgjWA1SaHyupcNZQX8imE2SnavWwBQKPht5JYvg3EDpNiP2V7wT2JWYeJ9o6ESpj6dctdviqfPoXFM1Xd",
  "key3": "BtYUtCgJYbrw5dL9szBExFpiHjSmxoZYfrLKxgeqyezPJkqxoHDogvyPoizePRyf9TiJxuthLoPRmTK1yRxBXVR",
  "key4": "2N7csihUiGUX5poEEFxARp8JZvDWT4ttkKrgSCBNSexEgaYh89TyZeMC8JGgCqtUogqPZgSM84ngFUNhupBXWGBR",
  "key5": "5zCGigf3vae7neTfKw2pBM4NZjXcbXy8Z2Y4iKPt3L5W89gGKUqf8GjfvZmpc5SLpekz8TdtCbXNnfTXNWf53pjS",
  "key6": "5J4ETLHRAAyT9px48THL2Td9ouhVH6CobVwcySQkkTNMVGzviw5FhJpdVb2ph4ga81mSNGegkqHGt7MS6FGP2Pay",
  "key7": "1R9KHAiQJHUgCJjRYLXc27mqbmHrF2KC7572U1AZzpyEazNhAFXJ3JSU3NF3t9cGVog1aYbgvMkD6gTokdLvwUs",
  "key8": "3WNX35evMRWEBG4dbBG5a363ipoJ9V6DcUJcjcFnb17drkZJU7NuTdsnMKCSyie1hcZKcy7J2oR9TzrcoqHBLUU7",
  "key9": "2rkfbBVLdZ4jhCRUzpiyivdgCPcNdJDiHxVfF4CNgaMJXnte3FADLCLhikeGqsTFSRzSXoKR2uxaxZjLFbFhXKn6",
  "key10": "4PqpfKVScvqzPtUNNkwRaDs8bHK2nkgVbMiwviJpDDC2c4Nn29fii64QS7psXK8zRAc4bDtF1VRBAU2bq5GUmKw9",
  "key11": "2BXP5h1PS2Qe2oTspcMHcfAya9W5GQUw9vJuG4NzhmZETrpyZFDk8311WSi9MnWX7Rc8j7L1o52mzE3GeXPUy378",
  "key12": "26EJUQnAJMvN7kG3JEXa9MXpQFGzrJ1wqqggK5Efjpai7XkL5i8AWtqRgMsJdgbKcNswTqhByBjnhHnzqLdCsW9E",
  "key13": "2zncijEi1DF8ywTvc71ynYxUGh7ECwnBLt1zinypeNFugp2vk65cw1ykV5u9cRAfjmnbdHJ2qx2XwcDiPgE9WJVV",
  "key14": "7rtaFxyEeUToSTLf5xbZWCnYQxNxjgeD4XouzeQk7xz6PdPf4qTTZmzjKvN24yWStMNDm1wkXCN4EQLNK3vPCZJ",
  "key15": "2m2oRX2fTQNvAm86cf9sWC1DNf1ypPTBzutvjq6pLFcZ5ELQtpqBEYa27zqXVt6JMaitycE35cK7ShYbRR19hSj3",
  "key16": "44MX9unsb1EejCcBq68Fgrgt6JjNTduNdkPAaG4oN6LJctruycKEsLCihNFXkFxVDZJuPCDRGraSR6NoXsghbHr8",
  "key17": "p46sHQz1ExzX294cQwBGpwzLeaSBTRRS96jfquEQo5T9RDmB9kVmZV5ZUWuwb6RmzvKFENwDZuMwrkxy7Diuf6b",
  "key18": "3jyTUXvTvEw69eKgN5J47sGcth3zy2fhQzx2APMdxDWtyse5M3PEUq1U1akxFn1nWXYQypSkscj2Td28HxX8pWpk",
  "key19": "497hdAo769TGonWWdRRubga4gpxLdZawEEHAPm1t528yn51L7vbtC76xLi5UBYeRCSQY6dJCH1AVqVfZYmrRnwvM",
  "key20": "3ZsnYLcDb5ZiwSWWpEh221rZ5ZgXqraK5YBf1cy9YS5WZH6mg1Np2BqhvDi4juscuVzzBHK3ruVJLp1X5K1zD6dF",
  "key21": "4WXH1TuAhLW3ZxEcXhAVwrxgetyD8QJLvCwpgkkVrDvzuhAsdsHAEp1ACjyrfuwSQou3CuDY1czCpFKRQymZM8vs",
  "key22": "5tXEqPU6ZdjeSt5kUi5YRXajEJd2TNMPuPzus1J3VD6myKwe6zqd2mz5hbjFwFTEjG4U56jwjqxBmnE1wLgYhZMP",
  "key23": "293JjfnNcd1Yj6ybEnAM5ThxXYi1WQttJWVx4M7MyFsqyrdLHrrEdE3cTZah2UU2jNZFvasMXjiZpCbfAvGx3a4L",
  "key24": "StKzAw2XU6h5JDVuz1CAHu4sNtxhVip4Ggr5wsUZdnHDDWf4BU4s15RN3hc5GA2h49kUZc1BnkYXJpJ9jr2gjSu",
  "key25": "9pUsB5dP9GEBiH8ECSZsx1gjHSnF5NmYrdwAxeBVZz9Xf6i5TB5DZAniUHvRRz9CKNxys55CMrcXbQJuDpiK2Ja",
  "key26": "5g5YmnG8HKoBmyX7rHAG8D4RSdSL15UB6uNjJcEdoqSY2vzG924mjzczrWUA8buabZMk7uEipBZTDLcrM2MezwS8",
  "key27": "2CUMkebtTMXJiv7StdkU4DKeqiau6fAvCjBCA4W2LktdvCMr953tnqGYEidYKsVL3e3XkLNRmiCAUtrcrLCRzE5y",
  "key28": "3UAEgzxS6pEbDfmBPRzh6rkSrFDkqnTvtR6z8d25s9LSWTpAdXRSySZe3zdijNWGMd12Aa6HESJtxiZYMq441Jht"
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
