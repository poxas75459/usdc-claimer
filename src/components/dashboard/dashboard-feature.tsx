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
    "rkvkL4SP3c7cgPZpnT5ncXbzAq6TYk8trevnAumD4oNvLos9V5shmEcJe4m1NhjzpgiwFypqEMwXHD8xpAFx9gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61J1z8i24ike4iGg7hLhRWrb7xirX2dsDRPm1yLNqYaRvwHqh5MKtTfbFJfGvCFxYd334hQA5ujDNQjrdic9fkAh",
  "key1": "2N228xBPvEv7V6U9JrxPNbKm7mQ89MPfEEwKKJuVbhctNsUeuG7bi5tgdUUERJufBDrCGE8a9iNHzKGC8pCs5uCC",
  "key2": "5dTbDkTUx8D1pM3GuNRHCzF7sbGzLRvga4SgF6EFe1gJDckhcAXdGtpJaYLE945HiB43mttRg158uo3eTc3YrTR6",
  "key3": "gRbECxspSuHGd89KmUm7umMipCFgP2LZ4kjXTieQoqWrQo1WduT8Ku3mAUXm86f3p25cy7Qkc5kR7qqGxvhGwqs",
  "key4": "3uHRXCMsFtYt1VNnS3vmdDvN9JH7sgNAsyB2JR7GHATBftYRumYt2kxJ51wnRAzPRthS9pEQarsoU5rBxV95bBJ5",
  "key5": "5UG2pk4DPtXHQPnT3jzk7764jh32KLarJ6447THAH4YDcKGWDGxssHEfD3VGdbNovJjA5oew5ZenSqJgLY8Bbqxw",
  "key6": "4aGYCYjWdi9zoi1x2YPqEGs9asaSCWVaGqJ3EK4Lc9HotRtyPruFQBFcy4KDxdijmeaj9cZzLFtXp7hrN1ATnUcm",
  "key7": "29fsqaPSS3Cru5jChAbtMBzoS7bSFDZx5zz2WCcYNbvgBsyZjTRFPkeHkCV4NgcsBjaGtvAJCtYMvXxiK5cRCnqR",
  "key8": "49jqreesfrEcPVn4yNnqmwf49d3kBBWh8cwYnR2HWAn6uhkRewJ57wwmFffydyYLwaTwtjWRXZVbpVeThgESnpE2",
  "key9": "3miC861DqtDxb2DmS2aM6pTCqFkziQFfxqw9AYSFj9LFd9PFR5qtL7T7RxhEaa1PazN85vAfYseb7bm9hC2kBXAS",
  "key10": "2a2DGETHcTLHtkQGs1NKjJBoVN1CXf1ELLbDwPKjhJsfdkb99gnpAApavtWtWA7gn3teTsZj8R6UKrMVFP5gjnxz",
  "key11": "3M9DtCcUZoiRi8yvFWcqPJANgNUFRWegDET5cj6mKecv7DmkTzPMBovvzeiVWw2DSLB2ixfnZLWov5snSSkgiiyt",
  "key12": "4pjkCM3TrmUJNDpTmfzrRRsEBFgZ5XyCrQcnwLFB4AgMTuwnV8hJZpXSeX1tLUzHUNbpVLnryapFn9VoJrMnvNub",
  "key13": "3LuhVCnz1xW2GmntX2KSJjwcJL3QxKnXd7G944vqtcmWuo1NpFNrsZkZUQSnNaqGdY1FH5BdWaadmxWEaZzynWFs",
  "key14": "4j8iN9t4ZnD8BBYfGjZQ6hTBWoQ9WfsWfBwE82yxwb94YfRzrmmyktiDfJeMGJLi77nGTHARhVfnLDdHqovL4Qzz",
  "key15": "5G9MLkY5peYZ85eniFGqoGzBfXgdAQj4y6L8NnS94ecgiyCdvYhGm94SfmVbqtqxGhu9QEaQSe4c8xVBSzVG2mvJ",
  "key16": "5ZHVGwxKrLLFv8ViX6YvJLjmzHRsgtiiMf3gBkuVeMRg6VvGybQx74XFn54dt2DTaZBFEsp4nXXU8ut3JjhjA4Zb",
  "key17": "5gZ3qxquF14bQN5riFy9KQaKYJcfDtPH9V53ZPy4eh5NjVLAEWYggwWgWdsc2V7JcN38CrvgerR6KmPJ2sC5xzpd",
  "key18": "WFMwF7B5XJwTyCvXSwvg7ZEhg9NEBJWworqhEvb6nA98KHQ7GhdJs3SjDS6dyXb2kzjBp4xrFcAJscJ9yb6JEPi",
  "key19": "2g61TMRoVpTq4qZhaGFJfn4rWTf2Zt9oPuAQqX1fmcMdHuKzxm7z1vLHZpq1AMjxanUV46uUoFSc6s5PDzwquy3S",
  "key20": "5ECUWR5WKM87VUZGZQqgKZeEKm86ZgiySZFdCq5vKpx4tJ7kPEyuwMG8t9x73LcpEdpkSsd9HsB1QevwXgPiqc8V",
  "key21": "3f9A94uqyaP3XTVxzUvo4T1foa2g199tos3YBU2uS5WDXeaCiLmjnGGdCwZh6wB1mRUNMqTg9qQoUxiz382YUo4T",
  "key22": "4hbikodmmb9Sk1qQNGa1ErcuYihcJsktjoPBLHz6GY8ah1FiL5TQwmsNo8xdhAoF2Py1N1Hd9Z9xirSioApnvLP6",
  "key23": "2rCQv9cAvHbe8xe2KL1rGrAiEn13mj9RuqwBxkjmjXyyuCLkJvzSJchQhJND7CbNNuqWvkAzAuM7iZrx7dMwybW9",
  "key24": "FsrtakejXehjtFLztG4mGFuR4nsXNfrPYFdYpmzEEJTiebM7UhAKXkPpvNKMvLFqoKjaBfBQVcSt55cgPXbpQKL",
  "key25": "5nK6hAZzHbxCToh4MV1vMnuf6s9CEJtPutDQTagdKgzNJwda2FebZAEKQP2noQfZnjFhvorkQ1SfBovp5WYZKPEQ"
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
