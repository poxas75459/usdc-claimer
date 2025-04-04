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
    "55HgSy8QrzPdvdjJxkkx9UxKL2yqpdFe559PsEcECMXSppYfYQdPYNGABaF5JhMhgvqFGopFEdN35hq2UNBxQyM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQhtTeV8zLQGofmkmLbNLP4Q6TM4j7UsBceFyV9AYLm1qXawaqvb5oFEc4TZjvT5xZZwy762gDAj4u1LKTeTigF",
  "key1": "2ippVDKbPSib6W6PxWrFWw4sjptB5ZtBGF27gPcLbcMvu4rovQ3pQXCfkcLfqrV3sgPGTsg66VoH3EL4TnmH5L7g",
  "key2": "4f2wgEuHPjxbLhGYirwdLTZwmsUSoeuuPX8LaxHC4dreEQpyEi4Yr6pbxxjbQk4sZxKPognZm1Khup3vMd3fSxA8",
  "key3": "4Wjjui5NyFC6FYRs9QHr4yVW84isqtdhVrabJyMGU6XTXNjHXqgFdvjaLgLUKRZStMNvEEd1zALn5gHQTkwQoUCY",
  "key4": "mfCmBY55JH1mAQm3QRpxMQSCFoTQ7w5uGvCoDA77MFbgzbsNgjhvEy8Jre2j11q1SZ5nWJWpb9PyqZrjcZW8zS4",
  "key5": "KWyeKKto6xrzKjnbNqbUBSPYkDEunLER3crskoTetg1aS2vKSQjhSPF4PWLBkWxDnYVPTxZ4CoEXu4NqPYGcHGe",
  "key6": "3Xmj8GAMwH3Xk1TrKSFKW5ZWiWEr7EGffyaGYmFP75dcuoN4Y21RM9sn6YTHWb1dz57oPzj8xsPPWapYWXmc1D5G",
  "key7": "49oQryfGsuHCoMRhFerQpaDG5Uacqg1mnW3XtSHkBsgWRZwpazrU95wsstdh8QPMCV7JbW6KpkUL4NeNoZYBkr7F",
  "key8": "42zstNYrqHAmZJbgKM4n3rbenu9pXuytQjVjuCCNUNrDyzWTYyasyqVE4ijzfWsLwfePoYb5mi3PMckQ2MHuagKk",
  "key9": "3DbUTBy7ko6ub4S44RsJbo6DSFo9pgPZ1PWHxH57vRAR9vfsVRwQfDEca4c725YbYa6q37SZo6ghqgLUtGxEQKXm",
  "key10": "2erBbm1jE35fUoiBMMQ6GUBFRkQcECJhTTeS7sCbV3sqwNkL7SeTXJ1y69FWaaVuPzKhMm7TSfz9SbeVrgd9TCwB",
  "key11": "3HZL5sQa8xb4oohraw3ytCdL7pZRMqiZRCRFa1EUkGw2c1UKRpd2YzKA61sxXgLhizSbxjs1wAg4ekfGzgVA96At",
  "key12": "4aWdorga6NTuHk3vBcHKno95L7EHpg88DW3Bxop8oniYhAaWasw47uXFADCoKY19qJ1jhwQfQeo8kMEBhBH3kzsf",
  "key13": "5htEXEhT15qpqQoNurwP7x1AWLd7VHocgM459DDYf4sRVXLpp6M6wf9GCFyCHcrST5siaJdpAFLNcJVmuCj46UyC",
  "key14": "2U6v83MCXRCtaKKwi4TsmvH9ZXrQbgEvECEJDxZGC6rxoLtYjSioPjUQ7hEyHhssN1u665t5TYtvtntyeketSGjP",
  "key15": "4G6WBczUVxUKqUyYcdjCU9zQncMbqdBzxQXY3iQ1NXRMpRzFFJo8fNbk2tV57jKaSdjnteeALjt7UGSBq2FLxfZp",
  "key16": "2w5wbKqnHnnjuXtu1SJhtoGBcjS98zkJjs76btsK3w2njYd9ZGaP6kh9haRMQB2y9W1dAgvt453fJFudBDaQjK9h",
  "key17": "nvFDRBXzLzMGu93kK3mLamxSe9HsTytxADNYyMtzyYDuzyujgaqwDqFHyFT3Kj9Xm2Ayxz9j2mwP2ahQAaqcAue",
  "key18": "2GpodFCZxWogxXi1J4shDXW6PPBB5Hga3vqvGEcWB87pNFgiWRcr8qxQdciPX5giTBXCdXxfhoMQBPQp7BEe1SY",
  "key19": "siUUVZXd4dXDHuzAvUGQhbhMreAHdVDxCgVKptETCVy9mqevn5gJEmTduFz9DdvdqTQghB8kQjVBGztsmkhVRUA",
  "key20": "j8GpA8GFjrno3ArCxbz6syzzwuA2tsMHTi8QHkKpVj7jPEBPzK68V6LYN9XPizDDq5xiaWposneSG4L2ARGvkWu",
  "key21": "gsfRfDRgBX6okczhqcWBCz9HUdBT8EEQoyy2ToFqqAvAkEyyrXpA6fpJ3SzcLrukBe8YPGn1y7mLkxNBvJD14EP",
  "key22": "29xM9PMRDk84oiA5tWXj6EbpoCimhT2Bd5HdMC2SVLto7NTN65eAduChAboitz6C6S9nVU5UnhNQbV4L753r2C2R",
  "key23": "3XDqQoRQZJ2tzB8PLNnoRBV5LD3wKyrYuEXVT7yqqE4wTZRm8j2hKykhYqwtY9MNGMWBfWvzVCUyxVcUJFT6zAiB",
  "key24": "5YEG2brrJ1qgt2x2VtZWKmXWqwoJNxEUBgSpvc3GSSKnKBgxjh6tc7XKPXe37SVg3BhhGKrgzMi93vYNuTZaayq7"
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
