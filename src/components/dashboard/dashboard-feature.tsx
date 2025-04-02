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
    "5LRjxe5kkCubWHrVrK9ffQehm9YJH7zdiPr5kr1Cm1BgaWU7tpFFpPJ4EvfscXcpmRzNyrXoXAVPV7TqFmqJaaW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLts7zjuidnD2jzEsgXU7HmRcdbhzGYoPHaFtDkTiQ8fVsZgaVxTtJXFG1HEtR1a55iej6ATbj9sTaG4VB7LYTC",
  "key1": "28EAz9be6bbqYehoP2mR2gn1WDkfdGFKwNTgErw5Dsnp8ZH3sKaqkJtyRS2HZhLdj2R7Xe5EfULvWAKCdr71iKwG",
  "key2": "2mjaaSBZyBahBMZ1Nc2edRuTpFkDRBffSG2qraSRy2Bj7VFdvLsNWeffbi9tAMiAMEE7uScpmyr8zX1nQmBDJ5vu",
  "key3": "5aLaEnGXjDDu5FwpzLpcvZc7MGqBKD8DRwMYeSR2WyWtJpjTyw7LqU2JP8Je2sytBw8h4HAZ115DCVNTXdAhFc1",
  "key4": "4v9sxynjHC4eHsd3tSg8ngjgCVkPSaiTzQBYwF6T4MyEbu9iUk8YrGsDMV8TEpvkHV7bwCLrkvk3YdfzVsG9MQwu",
  "key5": "2QUJvuJGsrgFbvozC3371HZepS5WmnuQhwoyWdNzUoN2fDM9T3cKNXsD6oyBevcFiuRE3U7f47GBvyNVTHDFop2R",
  "key6": "4eayyopCMnMTRt8CKD7n3Um8wgvtYpfnE6wJx7mFFTgw6x5i3CiWtgTe4e7yHkk1DtYZ4os4e7ypPp5Qfi29wRwF",
  "key7": "36iVQHY3sk8hoMYGsQknQVM5bPtDRzVdFe8WHocBj3vyasby7bje2bPgQrnzwWFGhWLX4f6C1R9Hr4jasqakSGrL",
  "key8": "fpYz5NUkQdwK1dPRqkaUP7SryaBz4Y1UtDyajD74yFohHmYHGZTgrGo2DepntJMEygVGzrtPvMdmLcFKN69zuuK",
  "key9": "M9ngY4MtQLBSF3t8d7wZ8MSaLooy2GCtM5DfT9A4GsU2RyawmjP6mNpgM7u7cjF1Y8V6TKYTPuGVYt5veoBem56",
  "key10": "kknwyfSHWeRGbUjwCfGpsxq4DXPdFJggLSgzs2eVD4ajJ4uFWLqEN6aHq6AykwyHggU4uhYP5pJfpfJz2gkYQap",
  "key11": "3xsa8kUYQvKSYHYoqmQ2i2L1MrdzJYjqwM5bVAW6vhyKZ3ndXnCWtH9xXixPyCMckaeMu3ZsXbnjRA7Q48mJdiGk",
  "key12": "4b3Pkg1tTQfNwDVGbYMRjqMAsmaKPfhUqSR7GHWE8WNkVfYEYwW97m2AjoMrDLk12dWW4Dguj4hFXPXdHC16PwBg",
  "key13": "5NBQKGbdPEKRhT5Rb2LDJmNonWbnsM71PQecgVsjLXhSXQxZApCEYGmi3FKmM14AEYdZ2QAQ3cbrv2FmiUEUC1kP",
  "key14": "1Yx8yEYzShXmdAY14s2yZ1LmXRaXpykZYE13XuECUJ7NFDbMXnvXKUN9AdCv6MeBLRDaQ1XKKkBH2PEp1E1ccQC",
  "key15": "2vcxPfSuPjSa7Lig8EAL4FBQwXCt8FXN1b7EJag2kk7voRdNzqesyq5huN9jSZ3W9M9zYFnsb9fVZqXnwXEQJquq",
  "key16": "63LvPFQmVtfqgrt2mopGVBkpDyBGjWmAtYCsPc5TDzD3nDnG6PY3J9qXBkEVqt331cwDU6NJGb6U6tz65WLY1buC",
  "key17": "dLv3zPwnsEkiFsDf3JkWEgtQ1dGUAAFQzVazD1UDXcL8Hu4d2pC9dQN1aBTdXhdEBTBHqhngMdwpQ51dDj75pcj",
  "key18": "2i6vzs6ASYVfzQSeHjadhR3QR8vHXHPJLxZPtMnHt2YrA8eY4LZfW2JeLairX4nCRBWxECgW37Bw3g7UkgZ8bHMD",
  "key19": "5sjR7kJZfRsvBagqQ5nEEzQc3g2pVNdMJ7M6uK3nrxK8aeRemX6sJmk75BFtBXVGKSJNzy74CWpe5cD5umZcfUnV",
  "key20": "281wdzfXqteGz47AkG1Y7W4eFGqBAkCzM9LHhJVbKHBfc9M9yrPGsycchgfqBaWGbUDDTirvXksziYtnbSgGnPk9",
  "key21": "2o4vUV17gmf5CBohGCLyozj7aNQBGszrhXNsPsDczLTGNVzYZ83XEb5ZUgvnDiM8rGHA9ff1Usc5PmYUSWFsGFbn",
  "key22": "32EunedFdEwpcXWAXq1g3o6ioDft3cwKd3EMJ8Hakr461SVEkEcfZQNpqqLLtuncguwFTgAo3XiNY3eSEZB64iRi",
  "key23": "4gQbTU3vqYPLVZj77MgcmVCarS7hnMf1YVQw9uWQpSgMwkPcg8ziwE4B4z9NokMZYQKKK65XkGYQiPiiH69ZxF66",
  "key24": "Apc22vnUDCaTU7Vqwde8CTMUGp5ngABuyzUvNDVgXGKmXAkCJFUNDeKGgkRmcDqoXe4kr9uZ4q2tHRPcZwNXDna"
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
