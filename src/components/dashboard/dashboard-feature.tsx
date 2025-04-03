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
    "42x8JaiFGS3EqfXndJyzr4tmbCkJv2BThkrWCAdGVr37ZWHKD7PfnsynxhTqQnESZ3SZcL3S8Q2qt1kZTvQ1qS43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXbALFVRK5yHzDteeHSBErLw3egjT9atJn7z4GyeufV9s8BDaJs5QurERbWCEjxQ9BzrKEgVEDqjE7vRLfYXew3",
  "key1": "3VFWsxWTrS3Y2p16WPSqKCL3d82kviEhWPmYhkS1eae1oTy2erWsFaDoEpfbVJHXR9GovrEf9PnjHQtGmXXX5rPN",
  "key2": "xJLZkfkmCy7Hztx9fUcDWhjUL3hR4z3jKsmfbfhgn8tJFBoLbgGSfLFAd1pent93AnkQKGSgrP5nCPEr9Jtyio8",
  "key3": "3T8nNhpAvFN8dEsqhkZcKSw5oPiNkwA47pWpuqDwrdX6SdGwLLaMSJRDU6gcbyztGFZtjYJ7yLSe5wpVhoS5jcmC",
  "key4": "5eyUw587BFMiQbrD6BCCMPeXeg1u5eAqbA1qYmXeiEDjAMNda4TVnYm1nN4aYwuEFep14hpCQ9y6hG4q54F5Ee25",
  "key5": "4awuxzXAsCsqH3TjYRa4mx4E36sZSpjUgnygMviCHhF9YwySxrqhcRVAXWtooJBTPmpjUHwEburJuF4LcmmJWGpt",
  "key6": "5dTgXk5m5Mi29hHYK7Tyt9UouKfWXgDVZw8arNHkYQHaMb6E8hArHqr5PEmjj6gMf5TWSR1sAmyGWZLbPA3LbxrL",
  "key7": "28GUFEhTpWDxeU2BbDQ8m1eAkvsfxBPjuhcDz5FCm2aKU29tzV92t9ukt2Z3EHcA4HNBBsG2qAWV3p4FQrJ3nubf",
  "key8": "5HkmnkrQGRuqivYvhFq4G8Fa2xuETfhFBcb6TADRgpc4g6dKLrsDidGkcJQnjdi6wPGoJsuH3otZiL2kw7GuztYn",
  "key9": "4PaxANLxQuQHtcmmAzmdRswLjeK2y4b6evZa3MddCe8Bo71tA98vHqaAVekzDNngmQmiWoPvscRVRt23oXdc7sfK",
  "key10": "526yzpZ4GbJhV39dmkhaGnKoHsA7Z4tb5LYdJqkkDCSB315kEhaJqJse8hTemUmioBDHPnRKDtR6HmGFattmzcDs",
  "key11": "2A71dzo3jYHWL3QAZtqakUxB4Nw2w8yPAF5A4mJ8KdLZF8WjMhRszU1DssDLDShQuth8iwtoUeP4XUibg8gDq9sb",
  "key12": "4MFzFASRShXTh6ZX5oXth9HEB2uPHeTWuZTmgUXNc5TXb16Lh1Hr39nj7sCK2A2nKwkRGSpXBfEWuqoVtYpcBBd1",
  "key13": "2crBUT2mzLJ2cE6M9Rzvpm7wzmZDngkzUw8vNSHMC6oARVMbbHVWVMbmL4bfpC9J47mQ6k1uTvPbkq8xCtzT6ja6",
  "key14": "54cGTXQEer3jqXDc93ducPASb8rjQJTDwhXq9chQWjEZMFWNs6aKCtt9Nb2C7vgQM8WvXRjZYxmtC7Nuui5eaz1e",
  "key15": "oJ9h32uWgWBEtguDfsCTubFFV1oR4XLVVxH1ePkRXjEVUUZ1RCAjwj9gTCyEt6TMPSy1zm6E4c2npAqaNZTdSkD",
  "key16": "2YXnT4eQxvdFws52tN8c9B94Yda8MjHztjHV3QTamVjezj3wDWDzYXm1dX4CcrE1EGnQ6sH6jSZpZunWzgaMi6Z1",
  "key17": "TpDxhkViGFdoQcFvz1dEER6dC3X2TV3VDCsVNpVAtepHasqXNcMaMPcNMXdBF4Cwn8433teeHSHeMifHF7UrneM",
  "key18": "KzLzMvaMXXaEyiyfdLM2BCP7qM6pvymBc5tRRF8NgorEsMuDj8CH7YZoZVbdUPKErUwAZtuXukU7JvPm6nK16qX",
  "key19": "45TGScZDi2Fccb7AXuBr1txkXKj4Pf6TNM8adAMnxpGLDAKxV9cJHdgMNiFxeC8r8uWhoGmAtotXu569pfn2anpB",
  "key20": "3abdvBaEv2kPtr6Qsj9HijncbytKPPctqMPPB4137ZV3WahsvbHdqZjdW3fiMQpRRzsE7XEP4LV3hyioaNbbXLxj",
  "key21": "5oFgwLLdYqZdes8Dep44HPQW8R71vqF1yonwPqfshx9tkaMXy6zHx1bbiXwiP7nCxDhh8dyFufNCnmKtKJAd61ED",
  "key22": "36jRUXLfLJLBxo9oo5WzTvccMf5sEhHmgWEAVLphxtxo9HxkE4gyiKrDfAnPkdJDg4JrLps1HjH1pPFhy6BeGfMo",
  "key23": "5pusdsaEJgiPyUG7UbDZoBZqRVbHsbvRz9gyTQQQPutygu4djSSLQJuyzAZQ5xewLTcG82AbAyJ6DNgViy8mWgox",
  "key24": "5FLeNaaX9kE5z1xoKYMp7oYLiqmZtzA9E2k33wSuxpH7dCGr6gf92xTjpQ4zBLiqhm3aJ5T3Qw49i7EkGsZNDA7F",
  "key25": "4BuiDJE2DhzCXsTfdY3bNCqXTwFBuhfX1W4KqEgFTrKi2PDiLVu9nfZjpZnrENizMd8NyAwBChV8dxMDF4amuABi",
  "key26": "2w9MpqSvzQ19uJ8rhfnJRZwvzZXcTxnqT7U6kfQPak4RZGm6r46ChNmkkqHxjj22d7wsEzWQWAN7LuBW2SGdrqQa"
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
