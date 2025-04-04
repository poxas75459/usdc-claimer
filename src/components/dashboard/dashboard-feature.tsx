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
    "5fdRE6NNcoxX1heghfNBDnXnEFmvV9Y3of5nKGTkCFSAGGx8ZHduxGsK3QFyNsGsMv3WivFT8ntzKaNeGLBHnJ1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXnmeb5NBqCykWurLRf1QhdvHkvuT1q2WNTW8GNTqB1bqaB1LmE6oVPWgRUsT5WDvMdYmcHRrf1x1tM6dkAfurP",
  "key1": "4ZqW3EjYJN5gnVYpyAnmZ8nfi1bDcA5gZ1z28Bmys6MCkrrcLFtQZQWVCFuqi2N3GViXNyd3iEtFDdTnm1wRrgaQ",
  "key2": "ZXQGGdXKRG1vX2jyuxSEkQD6mXERV2yR72vmtHB741YLUmyzupr9LhVqEFJPr1wQT13vtj2oHNpVMDdvR5o4zFP",
  "key3": "u3ecbgvbVWwpT1cqqhiX7ALyryALomRtjrRc4dQGXcwwWzYZaJzqhELbEtvhTt9vAoh3Afo4P13xdZy24TzfDdc",
  "key4": "5PHD1An4vFnEtw15bRtci9B1NhFyVUzgd9bodHbBrJihGoN28qgPgCGPy5x7NbQEDada6Y3LEz76sXN5vKFBNP5t",
  "key5": "3famVqa6sbswfxAVNSTJdSGZXpFcwRZkdbENvmUQhpsbHpcCc2PqyYPE2TxodXZx3rE5Rfy2EbGFtL9QoHPQpk3y",
  "key6": "3gFMZFoJeqKbZG4f5j462WYfhZXbmh6r9ugePPK739k5LpQsBRKEbLpbmL3qwVVRBiFjM2nf1754ZeCoEctsd7ds",
  "key7": "2ZVoxyi4Ug6NjGjg2qR2CoGCHTddHTAwDDygwY8ZZi5iBBj6knqWLgB9qghrWsQnwNjq9QPShqygD5EGG74546L",
  "key8": "4CVwVV8qeHF87YZAxS3qZEZt8P53RPSreWPYXovi9oUs7n1E51gCkpybEZ8fSuYSXqaXveji8yRrXARWPUeeS1xj",
  "key9": "2J3PL4ubkM9ZnuT188tBaGAJuRqd9H3K99C1MvcmfwddMbKKmTzYtuZEpAifuYBz5GxasJWxdz7mdbZjZBJBvs23",
  "key10": "ziLB1bREMtHfAoUE8f1yMBjyeiUWzBG9cBpV6Sy3hE2Dr6p4PGfbMBaxBUoZG8aw63MyAwCeV5qquQL7yqJazB9",
  "key11": "25v8z9G92vYmZbFFjmEzrmQNKBsZtDcNvYvkLsQWbJaDdPHebtXiTU6pjk4WyKDZGrM7u15nawXuovKzu32MRFe8",
  "key12": "3YNJKRhjiqbkgLQ9LSiTisqMrMCWysjiMg8SWqu6rtx9rVG4kiRuoXHrKGjeFkqG2cfs3v6gFZZWkDKpDhJuKkp",
  "key13": "35FxRUJJQktHn5WkYyxZqtp6wAEYB5v6P9ah78wVcabinBJsYhu4UF3TtFmNF9qaJp96xFHocxFX8AfrZh9wdxuu",
  "key14": "8jcstjUhCRSHhfjMfw1QwKDJ9bNAvYGM7LtxjKsrATGrAgus8NmVVigrQDfwrnVr6oMxJbZoUnrxGwhCFkA63iG",
  "key15": "3XCD4orvL4DFykHBwaanBTpu1AJiRNKThdofvkQxan5xaavjD8CX32DCDTygPJGpXnEWjTcx8VbrWv8Fcv2iQvp3",
  "key16": "2WMWPkXs2JvHtmCsRCkUKRZswMZ3tM6MyXAhQqQBQWmgwg8iKtaEuAKEQheZ1iWZ9E2SGygHNu4QuHzHNzCYW8NP",
  "key17": "3dq4r3EYp3vKH7jdjqQWr4ppa3CrNdCU67KaHaTYtppFSdfGSJrXfPMt1Sf2et1N3QaeygNMkGyJG4beMZhuZJCU",
  "key18": "4yLmk9sjU62per1wahW1cKxh2w1eqRewqvM9egF68A7XNXYpG3o31NE7cda2qpkFRLWudsEkNN3vB7tqRSQy21Gs",
  "key19": "433snqpjuh3tf3X9GUD5ti96nxqJCDPAZj9LzsSJ4KJRyaEZGc5NfkTq6ViwgiDvVsxLaHXEqsNwqqVjgnYtfHNK",
  "key20": "2DL7Eyi2Dq8rz5SWmyHt1WHW6FA8zKe53vEKLMYaZrAtBYEs9uhJ1osbCWsS4NdPzyfLMmod9STvECxYDHexmYmZ",
  "key21": "38QsjDYov3r3Qa2DaSVdZiEQXVTR7UBCmi93TqtW8y9YWZKB481jqm59Qfs3HhwCgMZmGLFzFAxj7WNoZhmgBPQ1",
  "key22": "gsFGrdR2RFoVJLTL7EP6c9rNL2U1hnR9p8ER2cmL37csKYRwTHoR7sa8Zs4uharkDi29DiHnCyeXWpfKaBhRDwi",
  "key23": "xFvsModexehTbYCWLoRTPJhSgigme9Xc4w4YcGovWKVCmDjqGautRXTnKk3MJS7dut1Pi8rWa5hF32mzvcWEBx4",
  "key24": "3Qvk5szKR2grSLSUP5ENBD2PUBFJNMapLXUfeJJmPKQJ5aeXem694KiVQbNbBtykzWDLvm6YaarbV3GxmtfRSg8G",
  "key25": "5vVpNZQqWTTZQbwPxECRnZw2qaMQSBFwmfCpHiwcTNJMh3xcwhJDpMSxvF4ZJs9qGpgW9tk1MrJChsUPDC5iRJh6",
  "key26": "37UH44fNDWSiS5i91eRwPDMK4KYHZKh5ZumRCJmDGZLxGXmVqv9EEp5V9ruysaKTLftLixtyHnRq4VbTimjywBbf",
  "key27": "oGeyxcxYmF6mjuNFd9SrkaWgaL1J8UXRY2nJjhzHJtr96gshuv6ZMcwyWGpPt4YvWPtpuUCCfoJvESDDHF82t9n",
  "key28": "2KmY9HZ4mvpLqLav11N4zDVx82FQA3RLc8VSgTCia7MyAS44EpQzoq9B44XnKmXz6bHZX2pRVoZVpVYBcNsYCKEF",
  "key29": "2jkk1d88iKg7x1PdDYg97Uj9etp1aEw9UMnTFXi1x1xjNMx1bZjB4kruPbTUXQMyGf49KNx4ShpJsDAjNWLZrsqA",
  "key30": "2KgDP3uQqQ9yZcsCxJFHTQLodv3kzogE9aD6hCbXYcBY1Y835wVCHRKBBWm732jBDew39qX4GiYU5hCLT68psXx8",
  "key31": "5nuYSrudDniwZQWNT1pKHgGPiYaWfyiQ8g29Rcfcp49qSfdrNpmDcx6jTQKMkMz48LhGtDs392jyN3t5Mo2oeYUJ"
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
