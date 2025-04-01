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
    "21qRPgYaV72GQdS2udfqyimJwyPxWTWNg3P56Krz4AYhQFPrgYGrzA1tzqk8xVTE6me5wqNx1cKCPXXy8vLX9RER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2Sg64jK11uEUEU785SopcfCdZYzMdhxNpFShKpGXsSxNikJmChRuG5SnYu7ijTah6SGNWYXtQu6LXqcgZeC5NP",
  "key1": "3P6aFQZfNuuarktiCZ1utnLY4Sw9fucxMHrrBrxmsVhAMt3CX1ZqVazC4owXDrcgoKRioRRLVGx15N3ZEhgUyKHT",
  "key2": "5Mn8GEAMLgkkqRARCTq4KNdgNCuu8hkUY9VeQXmsjPwpc8sPvyFLNcQUdmMdiWEDyhvoYcDgvp5eWMA5eynyPtYB",
  "key3": "5pX7oDY4yHPPhHZSRSsdNhxnEpnSCZb8iqQP4cUXAj3bunVm54LaPM4oD46Abt498fMY1rdcQn3xJgbPzr2oSXXK",
  "key4": "4t5XVKW8DDCYrpP1QJBUP1LLuTQXN9HUw4SRdZ9mQsJP9FVeQh6QCJy3nnoEn5d9av6hYDFkskF9jqRUuypq8rdk",
  "key5": "ka7KB6wQK5bvXRwo3WnAV4ujPXTDUbmhQgPiQyUQ5cuHUfTCLX9cuD9PBQ3mJZQHBxJA94uikoPiUK87bJt5ohu",
  "key6": "iGQCYqUGXrab43E24ZHRMh9aeeXTCwkmkPzJWyjEAr7K8TghqYovUzGPyqMjPP8Z85NRvZgtosGZvbbLjm2UJ5V",
  "key7": "2nH5JjBxx9wc4jGHJRPRDMZnYcav4cYfLz9DBaT4G3GJwWjMP3gMRr9Vuh1XoCFx4cKYpD5bkhoA4djce7huEX9F",
  "key8": "AsxthPfTMk6HPm61YK88gDVVXLWafgk851bdHFEQiUMm8PeaUMToWsT7AK9Y4M5A1YMY9pyiZ9gnJjGqActSvBx",
  "key9": "24Kcuz53SCcZjqUBKW5EReDQu2yj4k3FjwQtDHSLKrR5hkzQv4mvDr6GMvDFk1sndMEfUvBCDAndHoqFa81wb3bG",
  "key10": "59ecodSpwxsyUCmDYQFPwq5VYx1qPe4Cy9cwas7GdgNSmx6fCizHtWDweHSE61WvwFNEVzgytXh3V5GdiXHeMaFu",
  "key11": "2XPXsdT8DTwVuEtUiCJ81Sd7hZZv7KuC3aEKiMZLcXRWbPhzXkVzUj43Q6RQJ45ZJ4nSmE4w7jtkDj4wkpV2uMDk",
  "key12": "2iKroWfWyfg3F4DuEA7gckthh7vgY7Tr6Q6MdsapBGj6o8Q2MtMuh1iaQmZRz6xjDQJRWZxRJeDSnBu1uWXmbfLy",
  "key13": "3vM44X4oTX1iNWJicXwswmKKd8HrQKt9BknLiMJsscA7v83G1mvUEhTpmF9UfYpvt4HMA8RGnYHE3XqosTKuUVtj",
  "key14": "2R9xWq8mxL4htZf62DYtj1rsHh1a6c2waaeuUgcZCbNjB8HaotFVxHCACYEEzmaEdBdx4XJk5BtSvHYZsrJAiZKf",
  "key15": "5cXaU8PFACDJocooCQUKkbsbRQs6u9qfX5TJEpgQRZ6AFTrp9fa9sib5nztjsPuatHXqiQgaE9eM6bHKqx8hRGnb",
  "key16": "5hp3Fe6Wby5QzKQEAELZnaVWpZLuA2SfuS9ByBbqQATJLXTtwX5QfMhwX9SHAM3vswzB5ftrgXCyazjwBmJiSWVT",
  "key17": "326J8ogpcR16zWU9uDLLBNRmoF3nYCt9cgYffzaSHSfLRKfk2NxfkFWKaj74g5h7gtAptDzpQJmAY981QVC7tdjd",
  "key18": "4TqUnkdrqdUSFgmKSb5gGteJCiw1noa7vreutXgaFeUrzCp4kSu7FvCQysgKj29FsvTQY5ARHCE81dGDx68AVmvt",
  "key19": "5SFGKp4bZgxSjvYCVxT8XhaTZe2rqysRHHMnqAMe1gR5nkUrBT5LwmjnAq3MQSRUdkZ6i6UfAGk19G6ZuNhBhHgp",
  "key20": "5QRSrGsffRtfdFvYHC1kzv6H4g1Q8mhj3HW382wcB8FmnTrtf2MLNoN4zmaJx41qmyJJVygfudsYAWC5r8QEtK3Q",
  "key21": "4Aenwe13YeTuePkdcCDmMwusLTo3y82yon1LsXTQQHGWxKzhNjYbE3heQFaamzPyfqFjbNeDukX8PjuLfNRNHziQ",
  "key22": "ndZXMVEQbDMU6uDUW3An9cELhZxPg91s5EgqaTGSSHupFZBsF5z7MeP1u4oD9JmGHc78UM1kzhPYadsEWXtcWHb",
  "key23": "5A6vHi4wu4MfZkSzGxpVhjJ8mPGzLhbparxBivZ82PEGfvDMBz4Tkrme41ku4HCnMG2z4j2uZtryc5VY53VQ77Bz",
  "key24": "5qjGTwj1GnzizittrBpLW7jxXMf7DdM1JTfTtAzpHubMmjqscs1RGaKToPQng4UvLZq6A3U3jVjcDhPnuEo8WWiC",
  "key25": "4LnQm51FVgCSyNcfDMoq5spfDVuKyV7dTSStL9UZd8aezCQDosHtbkcSveppLGRj3by3ncUA21J8wqn3P1T9m3vx",
  "key26": "67CsmP2WpEYZ2GSn7rwMaD8jzNvjiPWBvi87KBEiD213HCkptbxaiiozSyu1bMLpP7zYcZo7dDpQ3dzATS7sp9yU",
  "key27": "3EQ8128Vu1eJ1ucLNYrumi2ZEBeKgTUi2y3mq1kgWENQuqzp3bbGsZ7sbmdtwwKcxK4bD5WjExC7u6aiGoC7wzSo",
  "key28": "2ACgCRzUkSd8YAkZqAoo6t8obrxukKRMf7aVCcTAHfxXT2kRBEsNaUCijuTdqFGGFJuzWxeJVdH5J6HVwYHw2NgZ"
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
