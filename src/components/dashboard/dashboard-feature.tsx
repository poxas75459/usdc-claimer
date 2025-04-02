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
    "5qdp2Dfb1rhzfY7jmwVzg56P8mtsVQc9Zuv6b2bC6u6uYDhaTyPFr2CwAQGDoqCmgRhsJ5dkaEABCMEyoFy8hTVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5DPGcd87sGFrMszDWKE5XfxWnWvtQFTiHDtAnVZinrgM2ufaBTadCAimDBtFuijFvNhSpvoXfzGXQ2ssz5YvJt",
  "key1": "5qSMyo6rnDhU6T9G4gXCWhansmQDLFQk7N6gbK4ma42mdC7i9FyPHzC7FRyihVCtrACK5XQsPg6ENa4U3SiVMa8Y",
  "key2": "3P6nuCj3tGxgxRLKUkgS1kypkWbJCXMCsg87kLeTe5bTyHcdNEuoQTQ9dDE1aRL6GUqn5Z6kXWumroWTaujoYksA",
  "key3": "4SUBknic1J2J3EYEidsRtudTkHUgMwXi9SL1D8Zy8m4CQeacPG4xu69bxH5cn6iyCpB8V7Uz19xBZogcVNcW4R6n",
  "key4": "3BkqCDq8SVS6a5X9o9f8G2d9utEqisw6r2vNEbqMTkYxM1xhkCLJ46LyBgTXtAHYSHTaVrnLqM2CM1X4wXc5KG1b",
  "key5": "4u1vsr4CfVbjkxNynuuWagtHAAy8qEu8s7YNBZZauSYmXetd5w9gXSx1i74xBmQK2EftNcUHZavX8eEnJ9Cqr9s3",
  "key6": "4JvdfNvbf1c7fuVpggEP9sigEoGRmhSmSrLVYcgk5LDmEv13Ay5axwLdTeR6fGJzLcNqRYmMRv4MDSesPYYgDnZS",
  "key7": "5vMjCKXeVuZwRNae3dPQ5TBZ6dexZJXEvyGehwCSCcwfNUwmYkT7hshFMrUBXonvFSouXCK4F3MFPPRtNEuFP78c",
  "key8": "5ooRmAGKHr3p5tKbToW7pmRZWMdyJn3auJfCYAc93naFZnZAFquUBMKLPeMPQJkiGxqKGiPQ6BQsW517Ms2vHzGS",
  "key9": "CJmkKM2Z14aako6kZcWJh6yquvKw4Yo6fr4QCSJVUmUf1Qi9aF8KNN9tz6cds9TU5MkiKUTALzKyCEP9Ugt6LBg",
  "key10": "5xaEABHsca9MRzZYwJjNNoV1R5Ljn15DNPkEmMhyCJUTa4VUvcSuxBuqyuiMHj8eGdRNcWXDh7xoajRAuYzLZxEE",
  "key11": "2S24rzoZW2sy8McXuQfjBP1woXUQRxqKduQhpYmTcwNCxvAfTwrkT1LxemjgHnLioi9PzYeWX1bSAM44Rm1qSXmF",
  "key12": "233bcZZBhrh5EgJob232LGCeGqMDnVWEWso1xhhmvNkpKWEcPuBzvczfrC9oiQ56CNY9Ap3XYZ2jDi6zMJW65QEb",
  "key13": "5NHT6KokVjgDCduqkz8Q5zgKJHbWxUTaJqayn2LcYSoUtLiCGTA8WQfEep9KetRj42CCttrb7EVZzfKUmb7i1bWF",
  "key14": "ieU51DDroNUS5dw5jhCaxEqSj3UdZjma6aZfmwPWKS12M3MkXKSrvGoFnzQcpkeHxhC5keHjX5JvjHv6kAh5YXn",
  "key15": "3CBVLo3ArdHc9gXjEFuXMPyZEP46uYmtEDPf7PKUJtRNikmYG6bHzZTUHnv1vCm8Jj1JDDora25RhEq6EMthFd6P",
  "key16": "4H9g7KmF13bCffYwWekFgijAd9HU8sU4dgjFEDuiXy5WQdCC51CQJZPfJgQuJNBvKv2e4hcJtkTycu77sUEgMLav",
  "key17": "J1r2j5BfgMRrBiDncFXfEKNKjLRWiHYaDboAozRgcsjLM26tfwxrhgxU3yC5TvSkgX1ZNgP7bFv9C6xH1QtmPwp",
  "key18": "3arKCsGRpEVhiRwWSPkLPxKbiH5z4PBccUw6crz3GfpM4EGoXMi8zANpYC8phqzCStad7xNHX8SNY1hdrLMzjjJf",
  "key19": "2Hc2deXeDm1J8tVDNm9dNuCEHwqm4s6GRxHLXR1YuX9rrqLwpC5qDJHPx4qzv8GchPdnbMRvNid5tiBUZvsmj6pe",
  "key20": "41FnZZDEgQPcqPR4ZtZr1BiVNtZaqTkM4FkR9K8kFpo6k3S5KPsLDc62F6PeyNWzAUN2XMK4LueBsg7jqv95Vz9h",
  "key21": "43YuMKWXbHuMLPFMPBymiA3TwzwCdNNAKDk4iooEJ2wFNGiSgJcoBkTvejn8DBViHrPHsgfXjmBdf7HvY9VaRWxd",
  "key22": "2219cDDdBgfsS7AxfSh9q9M6eyF3UyXnHaTLysawvpXp3Hmh6wPx6A1VXsQXU3F9tiYiUsVnuWvWCzvNSLhWx7q3",
  "key23": "2AcvK2aRBdUNw3s1qtwBRTk4eBQJRfbNb82MRjYgXRFbBYq58pvppoxxjWU5HkTtq2LTsdos7w56oD3EEiYq4Q4Z",
  "key24": "4GhRjzeEQZhm63jCZnLgtWrhE6f8edtR74HkFxC631FLqJ7uiEBwoojWVjTXY1F1jBLfZtAHER48G1EuKGCq6tNS",
  "key25": "41UV3pqp4cLehe9nqSBXvhL4LsFBJ8UN7aqy7HABADSSkGh7ng67hXh6E4MEyxBkRaukvy1uAfTV5NmkwsdCoZit",
  "key26": "2PTvDEwkvzYKk2iYfawxfnBiF75XZ4M6UDkCXiYzu85Wvg72zxntfzX2pEUMiVSj62ThUqEHAS9z29mCCvhmJKxr",
  "key27": "4FbW5st13Kjqsd9WacqqGjvY4PwAMrkVEqesRDcErUzcWm1EJEJ3NGfFJq1oZyPPNkoxUMMUssoNxStLyBGKPWPD",
  "key28": "5VQNjbYfioz5FJUsAvx2XkSRHrJGRGhhdzrrGen7oEAHkDoPkL3TgXZRTczEuZUqjWdggoCNFAY97fb6sRsX8yvr",
  "key29": "59axbdBHCEMhFSBSxp3vLUovJwWx1NTZ4uZWj5wA4r3eQ84uAyT792uUojsm2jhv6QuB66iXmqWuJJNzc6Shxo76",
  "key30": "3CpX61GG6EYQguy3tMzUrLr9416zqUVB2krMq3oZqQoSnDVe8uLs6ACG3tGN7NBXZ3TWLPpoFjvY2tMcRFXKCSqE",
  "key31": "4NKQUAPuPM2TLFjJNVn4Z8Hb5kegzkb4n3iHbLVUdXwQLG7UxRTfvPqZhuMC2YP3qpe2HQWeNrsBQCgaACZcnD2J",
  "key32": "2skoKQCDMrUzNFYHTJ9s1o7UVsRtVf6yunQUPAL7sxHkctMXy7dHNhFodE2Me5jyecSH6wqCyQXE84VXpgFdDMhj",
  "key33": "57m1d8hvdP2FZdAaBjCpmyi2hSdHPmuRpXFqffvfce3iEFbdcZmdQLFgPYiU4RnEjQFMC3aZYdrn5obcipHP9dNf",
  "key34": "2z9pXK987iq4yqwrFg9NPivkpqcnbpesC5dx75D9NZa9PJaraPsbSScrfvMbEG7BHaFp9Gz8qRBJ3xWETTvM7fqg",
  "key35": "4UFCHaiJS13nw9hDkeb4dNPY1LYrJvMmrY4j8KurGCxC3GLfB9B6rStGpPMCQEXQxHdQYBaUss64oTEyAn6ejhRK",
  "key36": "5yFV6JeBxTXbFD5FNSnCj2T3yLrsDWxoQeFd1X7mRnBbVJNDC8eKmk9pd2EE6eUfWjNJrC1jUvqwEa2Exuy5SyMB",
  "key37": "5LhsosNqNPGb8AeXYAEBiYK5247CSsVNY4s7XawhVXhrrgftZtPy5b5yq1yXhrEUsgP62LhvjWC29AgAvAEKnDAK",
  "key38": "2uyKxevUPQUmA2VhVVmah4ba4tUsRKJSuLYsbpvU9DZ9mxvfSqyc2juvyrwBQ8TzFaACZ6nA21UJ3Hqz8MEn274C",
  "key39": "5H28QUPZhQG1MzTzwgMx1KvoXyHvsnqrcHHxj4gQaVtCh9esABaA8GF4zB7YS6SQULGqQYQDTGTG98druAh2HcRa",
  "key40": "4sAxpyqEiULfxdpiYzffQEMsJnbs7p3LicGK24bA2p8yfHxbzwRmPiTzRquZMxTGojGG8Qs3MgttZAAS3ijSqtWU",
  "key41": "vvv9muyTYbm77AcU9aZgMJDxBG1qcvjg6PJNUWkkh36macpQeREFzaeAZrya6iDGmAQ4cg6ykQ28xU84GusoToB"
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
