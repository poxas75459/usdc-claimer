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
    "122MDoXexgwt55M9GBkifAdc9vZK52y4HBzqpGXRg1KqSRvS9mghtqk4oYbmPjQGMLYcNxDYdMEQtpJ5W9v8AkdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kyg2XC5hUdGr2fp44WHfeXjraHtSyvMFsnJHkAfq2A2RSAwRVGMbE4ZtX37Mhg1VmzkJJ7gfciwBxV1vJPpjAW3",
  "key1": "3Ru44cYPctyP7Va4jfMtJ7VggaisGr1nVVraMZKJYxh5hcJ4QuVuxxF3yUcTxgAQmnjF8mzM5dva8qFd7KbootfV",
  "key2": "3noBEkXuVvuHd2UKHhMsJ2gNyhn7DxjF9PYQdpv2s7e9EnRsG515RrKS7QNG4GY5VUyd2gSoTyDcwgEqci55vqEm",
  "key3": "2EZnFhavx3WQWEuGx2U9fdYfRTdJuS9GGvq7qP5FufYhEs8AaLfrgAXPjkRBq3Ba2uAZvvQ5gxyFfwfdFMweABaV",
  "key4": "5xL6pgnRtR69GbHCckLMYLHtAR88UC7BgZpV1J6YXD9GkETGskVkfD1TgYsKjFtyX3XDrZnNhcr2jz4QembHG3sV",
  "key5": "5z86xmCBBRJFnQffX8H5pT58gwrJBLmosviHT6gWmaRj8xiDnuZee69zJ2iqpZcDYX2pMX36Y5tinBgHNaLamfaF",
  "key6": "h2PMoyHviBi2YJja9QvY6rXh1CsSJsEPpeoz4WvFN4htG3FwB81QQSPrF5MCFQQ96MTp5jbE178p3itjFUpREHc",
  "key7": "2DoAm3rFLadAJq45fRJCuMwazHYsnSPJsNjF9GAcAuLzFMrAuc6xF5h64Wi5JWb792R8b6VX6cRf3sBc7fCXvZk8",
  "key8": "eqSmEZYhyr8oLhGX9aHQN34DXUK1yrcZcnHCtws4AupQbc3226vQ484PUb6uxvtcbkeDgGMfCzLKm7RqkjrXVTV",
  "key9": "4fBQjk4YdeYe3ZWgLMN9dQxHKL7tFKrvzeFWJoG7VwJNr9DmAXWgwpQfZGZHhEeZW37cAcvESsYWe7PDjzrgQNVA",
  "key10": "3a2CcMgnuyV851zrMpYgJTsgKFWRcXbdTEPyCV9d57dSYYSbQHnn2HFag6H9d1yB8dKBWVdsVy2g1kWtAw7ro8Uz",
  "key11": "3qjPm6hdWgdDYkdkNYVyp4dFzWG4W77YULCJ8B4KUGmetcmvXE3yXiD9vTBPNfHH8gcmS4dHZzjiLsNpVqtTTisD",
  "key12": "4Hz55fcwi4rDBqbiDsb35UxLxfXPUY5r6JYuzh9cuW1NYt99XL7Zrm79buKh1dLoechYn4nXnoX1w4PuVoQz4yDG",
  "key13": "3FsC2zwSBuJjMYutAZrRUox5zrirN1NKy9kFxXRkHwBA3AT3UCxkHTWy8ScQHyMwmVndmPTfyS4RwQt3PK18APwr",
  "key14": "2dsXeHwHpTBquS43EGcjCJv63vPAjHkTKstws2GBzjtpfjoF14GGpqoXKQ5YiZZJedmhfRhxqW8CwRQgDFKcH6yQ",
  "key15": "3EzVeogcwe2jfJLEhC446AhtVwbqMQXzYzedyfDsgjjM9T7FVjR5KnJVCSNbdDKTByt41mhBpbzLWajbp7tKRSVa",
  "key16": "3n6tK4bFZqoerWUDQScWRLx6ytHsSYxS6Bz9Xf79XG2uW8BX4WaGjUZrycCAENQdHCffWnkZfDMHoWFPPX2usP59",
  "key17": "5EbMYXrxoNxMYiFHnSCAufp772wB8QjcfNXyZiB39esP1s49vu8Fp7X86uWoWtpcThpcJj17FiU7wC8YGRCDStsC",
  "key18": "RpSFY6X5pGi18Sd3KnMWBrHKgDoyKWuGLbd8D96L5VKXECJyGPC18qaW6oeMU9GFLjKyNboA8FNPDKWKBeb9Pwz",
  "key19": "VkdvcY5Y7iz8ewUJCrZ8xphBnFs99Cixxb4mdYDrpPsgseuiuxS5vTXbwyzVaZLHngv92vo7FbbYGGhGEtNUVhF",
  "key20": "5vzz1T2vTLD7y9JHk6eckAWHxHxNRgS14RuhUWAt6wqQ8fyFLsMjLvzQ9z7SNLyMKqGdAgssW9vnciWHoLctfBLE",
  "key21": "3NqC5pfrEiRdm6CWY4mgNYKU4AsXqvSB6e5ZGTbtSBppedQcUiu8WHHab6kd9jEgP69gzXhfahoZm3NqwwvucyHF",
  "key22": "3xE5KgnVuiSEtLy3fa7XAuWq7aD6JUCYRTgqRaosuyn9z9m2Z5SUcF1pWb78rtcUhTHqWAYeq6QMxiJ6Rtk8yqcj",
  "key23": "4vRKdjzuGyhLwWMwqBs4nDvZzq9CPz3EqFrFHuycaKErNMd7Bwd83r2VhCHPWEhnueV1r3FEBu91q69j761GWjH5",
  "key24": "65FdqBG6Pqfxp9WBsPYNAMPwfztrCz44ACiZ5hCo9xPaWwP6wrWFtAqRvwDi2pJBJpGiUmJpbJSHmo6adkffE7e6",
  "key25": "5RuFYcm79mSnSdHNmNiNJY9evJpJrytz2gXYuvkECsZqyJdgHUGJhy5Eytsy4xnqBdrbho7UkYWbQXcY7aQcLeTB",
  "key26": "3Vd7Kr1C9pCi5m2eVeNfT3ULctcrW6KJ6bLYqwviBwpZkiksVy4ihZFgvx1pxgXJhAtrTj9QPrwvjPcxX8dv63Hh",
  "key27": "5gQqaszN4VFgmd7eoyLFBviDJnsY8cqWUPehqQUbecWjTM5DxhoLXWvjDmTMganZCn6hsG2y8vsLSjTwGdHg3rSW",
  "key28": "3pViwHSMZtBt2HKav4qXJ1wEgtC2QWjMVNP6shLxkFzzFcdNkCPgpVNAEiMMRxCyx44ZkFFtRLb9LHdheRMbLh4t",
  "key29": "j4NQcHrmuAd6VpuDojjSBnVyN4YDJkrdEYXd4nFRitzjepBfLfayPR56YmPUb9YiWvTGi73XwUG1tGnjzRR4RwX",
  "key30": "2RJCayooNu9UGp8oD96PwvNyo3U4a7gXwCZac8eu6NeeqKgxpFPSNpjor8avXTNQ3MDTtVKbvjMbBr2NSFyBFsah",
  "key31": "3nbDKTtu39cmedZDeR2JT2ieD2ArVbyyVcRqdTArnxERQDmY3Hzny5j1nrAwEzx3m9fvMBiVQyge6E75zgfGnTM8",
  "key32": "wLWSAZ5RDM55eviXCcFNpworSYsye3nAsp2ACu8gUeipN1esRNEUBNESTXGuieH9hgdXvgAjxcGEZScUMow4tPS",
  "key33": "z9cer6VwtoQDW6bYSDL6a4CpwaaztNHS6yJXTeGsdYC6Jh8hEwhKWMU9YcGVdYkgcKdUevQCy5C7jox6F8771AP",
  "key34": "32LRmvhYXA9yagXt6PiEJNrSgqY2CxCEaei665KhTjqSvSAFh436hs4HnJRRbYPA4ncpQEJHYAAxbtCJaA2Q1KTR",
  "key35": "3etGaTLyZ5965YsfHxGAbM9dJyVmnTCzNJatfLVH7yvNDfM4VhhrdPM935FbDCodTs4HXsqX5yexzN1fuf2osxFP"
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
