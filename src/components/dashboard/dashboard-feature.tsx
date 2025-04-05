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
    "29WFiu9TJWEXd8VDvgKUnSKLvG7yx8bdncxiducxzkEJoH5GUYjhBY3CXtxJ4QA81iu5ELBrbpCeiaUqdorGFUNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYpCVinZgjpLV9aNddNdm12wzenT4qAjUUfX4Zi1YWCmRfXeBiHEYjWwk8o7W9hon5UE4DeQv2jvrQRtZ1Eqg5R",
  "key1": "2648WdFLqwadM6MrooyHMABfrKB3DUfcbZ4tAuwTpjxQLK442wMDNVHT2Hxdhr9rVT66JKf3jp2bHK4ECaG3WF6y",
  "key2": "87NVuKqJrDpKD7gkcNta8wnheum5cVoqWqXRcCyv1JnJLYeXPh2P9z38SS3Ho4jzY5yrnhhoDjLjcgWnUUELbdU",
  "key3": "EZyEKqFth5W1etRki9M3keLYRDgq65omp7AR83nMiiziffNX6LX3gn1A6B44U3dPhCqGB2Rgo1zb5KJGA3oC35N",
  "key4": "2A8tmY1HnqkLAbC2byewuB6X1k938rbbRmLSVt7uogcrNE7nwYwQeNwHBbpk14BgYhJitfo9gThjJ4tBTpxrDzxQ",
  "key5": "5k1kE9FM2VqHyRNBbVX6xZGNuZFwwi4fCoEk15PfqBjHFVa2eeGN1rFLaBiYRHJ3x4ZkQhbrnDbGK5e2fNdHaxSA",
  "key6": "2LvxDa7zn1mkL4pStFsotg7i6EKtVZFdKQGi71K1euYgWiZsgSMyRmKJT8AH9U6h7BBEU7opdPm6bGiFh2zmNcth",
  "key7": "5Rn5ozVfPGTYaJp9hsBfH3sLribedTBgdfMYz4J8ECbnakxdTPLR4YnvoZcWeZ4JxmygiRR49kWtW8NRvcQj1rj",
  "key8": "btyXrRRyNm1bgNZtkgCFYJZEaPvYva3Y5AX2FDoEedE1MZNzVE3HBX3LXv7w1MwhPC6NmzQTJGmgrp3SZBGgy5Q",
  "key9": "3eDC49XsPM8E2KM73QGTe2F1AUDC8TVwfJfhgREB7gpGsDWSwQJxjvPJZdjwxmYoTTRHmbLn6EmzNE7SrgYrDSmj",
  "key10": "2j96fdwtM7XGi4Bh7WizVCo664tvjifpe1L6Ax1as4bFfAmmSDvDMwoD4dhHXDX7jLJwFngqFcYnAaNMcANtnYG8",
  "key11": "51QEvcYwLvdT4pinJQfAsLXtCkp9q4nS2JcRjdqthotSCJVVJ8fk96wZabECQ6hCnrN8BymjFYBq58EXu4y2Lt6i",
  "key12": "2LYJ9GNkzuCsGfM8CTFAcc9xmtppToSMBh3DGGZt1EGCYknyNse4HJ2RQrZ9VcPwhneQ9WzGfiH6v1zrDPaGM8yn",
  "key13": "49baVGP2qnbGaBktzZ5Ge4iyncSX53ioMtKdqmsoby6pjcgGmLBsWZtK8zP9nNku9qbdNU4mSFDhpcfzcNTzi1uN",
  "key14": "5e4TNNG1X4kctXCUeghbPXAGveD7TARgZ2Dy5VhZW89M4YrtxpESGxkQFyUoutE9W1ewLL9ETProUbkTj7cnQhVZ",
  "key15": "3DheyYAMjZ9oWeLNr9kUFN1H2FDAjHH5X1o6TqqTZExYaz4WvDBeuedxSCPb19inTSAnFiZWuwhY3aFsMAzKzD2G",
  "key16": "2PomqjmGCnHW8Ub77WA9pqyv6pLdjS4C1abhHYLFSXN4QSddKP5y6PM64vg9efWzNCfJiGT5L66h8cdMrBQ8vvXs",
  "key17": "4SxUaL91yygXBwbM8M4nNrz7LyM7G8SDbBSESJCUWFJvUtE8dRFJkyhPPnF4XZza8PMxU6G7VssNco956zGPitm5",
  "key18": "4JPM3dWCz6rykrnZBXc4UuqwfV9W5nBmKzhgFEgjXrHssuVKVfKgy6gTgAS7QjvdjePKe8sxrhdcYmSoM14Q1SsA",
  "key19": "5pC6k42C6k255r16PYpPxFwEte4LKU9ZGh2zKyjENr1WCcAKMKSoemCeerQMQvcFpFwEMeH7wbNj3h7pf5vgsKZJ",
  "key20": "5UF4g16D6s31nkcp4Mue2n7Wj6z8mHrx8cgkazqv9qKPD6uuwzCkPLdSgbfZafDayHssqGapu7x2mjLuNPC9KUsW",
  "key21": "1p4ZUQw5arNhkFrDkwPBTsHmz4Xzrwk9nCH1TqXUFsnumr39X7AyHtJjabbUaieu7ZncrQNrnCga2LTBNgGtYxi",
  "key22": "3aNbXFC2EGTTX7tW11dNDzZdQETjmoYbvSbZ3vCkoZqovxRQyYvhEm5CiSx8YYKSvBEGzMHrWu9sfuC3FLdn2b48",
  "key23": "3bxF6h3sGzwxFtNRkrbeyPAEFF7A1LYwuMkftHFQfcsSixwAXW2GaaD8s4ZLjeSJWhh69jJ8LNA7Sjzn8XJdZGos",
  "key24": "3zdV6D7f1Rdzrj2FTZGZNut9rRS4bRKxhY7dYRerbw8QbecpboB7mdtxGnGBR4ASu8JwYVLueeQ9aCBJDh4MDynB",
  "key25": "nHnpUh6zfCkY3VcUr1sYdyNsvDdCanzgjBQWiPP59DAZYPMRT3XBwqcRC4aYaJn6WVfZCUEPskUoHns8RZevaA1",
  "key26": "tUarbRm9c1pEuuN1GMhkqkkntjQq8ooLnnxf95c5JrzPbyAoqkNvGKAu8q9EXBp9GRk24aEoWZha7fkayF2Paa1",
  "key27": "dZT3xw4qWtffEURDUDhtWbXcJrz3yDR26z8NqEL6CJ9Qsft9vB1nKh3xGCFq9CXL4daT14NWvJzvJUcxNBcMqi9",
  "key28": "4MHwF26EuvMDFZ4n8K4LXcLbh2UjuwBdGAU8wJXxxeSHnb3N25PnHBQRrKf83LTpVDa3S1wtVosxC2nPPHkHMgZK",
  "key29": "4G4XY3y4zrHwB9PwtpuEKCy9E1Skuc1dGsbfM36SsyA5Mc41GBxLRBDG7UJScCsEtf5mYd8zvT9s1D1zvTJmmHK3",
  "key30": "2sxdukBHDVkAHKg7ygs1sCEVEzzDjSqhit75x1XeKmUxAe38M3u91Bv9GEjiTmupNmKEU5JSQuLD6CNudGk2eU1u",
  "key31": "5LThBUaXg562Ym7NVKHR8edZVzMhWxTC9TUg9H58gKsjJTa1S8wxsAFW5Y7H1zBeEyZSawwf5p7hjYB1azFeQ1pZ",
  "key32": "4sdnBLBu9Cfj5qMTCAUf59W3CEyc1xnnjKkuqpPcc6ACM4QXcsZRSvrPNzqTwsW7P92YGa5aVpbBu91nq4M4NemJ",
  "key33": "nTusfbrUufKZkHC8bCigCCMGbCrW472vbLugAq2LDTokGVFhFDtGtxvBLENoGvP9dDNVEYhzy5uiijH4kKMimct",
  "key34": "GNv7dejt1u1b3fvxf5k8CuK95EDtypDTi49SZb8wtek7y77J5c2QNdCCagi1f6t167TmCtvPWuLhugFtG2hUn2o"
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
