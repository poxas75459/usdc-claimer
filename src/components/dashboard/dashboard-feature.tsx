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
    "3v8VRRdZLrWaeC1YAt4KKV5fNAHBTRRR4wyAydnJnQtjBLxHYGNDWaDfwzphLczHFefi2zQw7diVW46Ygr6RwPyh"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5LDkKk1K4yNeUgmFQafQU3v2cDmedyCAr5fgFiWSAe81QWaqAy65hDFFWyUzp4VzKGaGvQD8GWWtuuJTAm9LkPvQ",
  "decoyKey1": "5soxvRHe9LihGArKydszRmC5dix66HQrPzv3yh7snBaTJFTH4K3kynAXxYNdrE3MZbqPFVwN21qtc1CVEMjTkeFS",
  "decoyKey2": "vQLzBdsbDi3irRaVJ9aEBvHNJt5PbN1qberRjvrjk5cK8fK9U8E7RiQASfF8qDYe3vEFGeQ8JtDVpen8n9AEZDS",
  "decoyKey3": "3k5TrcACLdUHpgdHJEBfvBdSbotj7VnWdWkrUwmmATNJ4YT9TfNJ6J2MFP8gSy7bvwgSUmwgFEkRtgkj6SAg8v9A",
  "decoyKey4": "2wsn3GLZMab1v2nTXY1xwttAbdSzbd7exgEoXpVMQsBxYNGTaYyfWngfHeQVYd9kpm52fy5Xzp77V8HiENftGXqu",
  "decoyKey5": "22hYJi29CNvVVwQ4V5MoithLcEhzrrDb8RLmx6zUmKrhNq4eU57JTfZsUHeWxijyGUcDdamcx6WBwmJnT6quEK4i",
  "decoyKey6": "Vxjczvs3PQ1JPMXJv9ScPbs6rYY6TJop7BRjWiPWEmUg4LGK8E7o8zmzTixCzDiZ7Z5kJvmxn3AoiqEfU98CruL",
  "decoyKey7": "XUrLpxMWpDHJjJ3uoJxRky9qmz539Su7EjgcK4N8jtC86YdUgKR4AGDYiaDEjsNxsDLTqcLgXB9kV23X1kjEKc2",
  "decoyKey8": "2HByXVUB9YJexc7tRbRbeQr1cHe9889B5JnWAcUSZEp9RjCarsnaxPxupDhA8yddnHrT2DLiNLnWfzQzTdAUY1ke",
  "decoyKey9": "5Ar3spKnJKJnQ4Z2KFcFt61stHbmiSTj68eQZPDRs1gj5kUFVcr8F2qA48nKxv9MCdaUH6iTg8GPWsy6mUURg9Fj",
  "decoyKey10": "2akbzA3QGTG3upjAEcPiscpR9nfiG7GaQZQx6jKKXMsJyjBh71pdAbCPBnYC3XCXTKZt7vE5wAnUP6h6NJyCs9qX",
  "decoyKey11": "5tDHvfqgaa8Z4sB4A6yCNsjFTxx5mejER3QeQyy3ocaXCKjU6xPRLm37jhg4bDvejnxTTuujpSzLABo3a4g5GXYH",
  "decoyKey12": "BKcgDNDpiTASbchNpw3y9i6ziTi2EFb7u9aZtZhuMjUbpU9K1GvmKxkgodBjQu58SFpKumVSyJ6KBex8aifGAyj",
  "decoyKey13": "5hz52xLXMja74je8tF6wmk82KGBwxCJMKyUdPsfNZCpTGD4iAZZzhzTi3EQz4Ez8eZ8gXfyJ9s8UD667rxuBDUta",
  "decoyKey14": "364eUFSxRgEXPuVAJegxpXc77KsxFYEFdMYoYVz7WtT7s73G7Vwybbq1mrqXykMd9GxNCSG7eD1T3oXkkWHmnfzk",
  "decoyKey15": "2SXQzqRnqwjBhwHs7nxY2EisxLodhfXLPmUA3SEr7Uk66HVQAgD3sfcvKXdYAUPA65QeceFMCPcMmd8K4PdpvQrR",
  "decoyKey16": "2XaX2U9b4sNGQGBgagBBMsffiL4PVAx9DUFVWRf4iFGguVkA3FzvdhLZcpgpC31PuuaXsiUnGaYCvDGbvbVcvjF6",
  "decoyKey17": "KJjZmTtCLHa4VFP7cjAAcwfUQ8DxTgGZyjbdaQpRHR4LiwyiFH5GNu1ghoLXvMbXchaSfTDkFJPxcv6vtLKc9eV",
  "decoyKey18": "56pU7jqwKJeuSCX632oFZ865JBjTuU3vgbBJqKRJatwUPCFGhdc4X6ybuAUHafqb3jB9G2gjXXWxdVwhN1fdA7Ag",
  "decoyKey19": "2tWDQeyk42R9e1qAewb7XY4EdTYr8vCH8k6LZ2rNepvf6ttpW2WVjzWjgMDXu8EtJRqp5vuzRoykf24Dnqt73dkm",
  "decoyKey20": "4NUgRoXEGrNkfcaKNTfTyLeskYm3H2FVYEXpZSzdLNirHH4ZTfzio5qg7qA56SwZSf3nhvgjrYuV6tJFaYijzyNK",
  "decoyKey21": "61Y1vy8YizwEwHRMqZHiiytBQjfVzbUDcVNz9ZyZps9gScuccBFFNaRFcq6uqxjo79MoNp8uHPRJNvtt9pASc8yu",
  "decoyKey22": "CZtEpQpURaRQprPYywVbfToSdPFJmqP4KxTe1X1ZWeet4V8R1wFcqnMZrw3RcbwMQ4v7cQPhf9XGkTBVjKUXtxL",
  "decoyKey23": "2qofKdoPcvscJYvagtnME2G2nyFcoHT4QEggvmAKbJr2E96SwH7JeQwc4sC7q2XDCDRyvonyUp5xRHEFk1TNcreS",
  "decoyKey24": "4vmNV8Ffwx2pxAQbBjCg7gRQGBcFjPKeSuWCKBc9D2PrtnmHxgqhiDqbDzECcLpBGeQknBW9uQhWkA2z2J8uDkCd",
  "decoyKey25": "2cbyYab4yptFfStcHqck33MPfUpMHNJ99jSmKa7XaQUwPrz7vYmpWa1LDzMgk3m2a5yvqjsEZ1UfucmABxrWuKSJ",
  "decoyKey26": "3aGb3dEJRk9KjzUZ3uVNsT3qHTHR3vLx7gPF1qh46UP6SRH97Fpd4Ujm6xNXJxpS8nJ5VgtC5su4rZ9Bqfn4UJmX",
  "decoyKey27": "2CiJ9reN5qpe6kktrB5A3y6Qqz9XXzZoUG84zsQQFA8mEGiDNcg6zYJEkCSjSQyVcHLTAW7HvLbmDRx2dZ2xyDAD",
  "decoyKey28": "61j7ntcME4hp6P84wZAfqz2d1xLC3CEusZGxGhUjaqnYUcEbV9T4MVhHCra3UAyxeRBfNHKrV7pXsG2yGK89y5Hz",
  "decoyKey29": "4ZaLjQc9rfkNqnsEvx1bVwWMS5t6VFPhPRtsgwKe7cFUXj4aUKVu2orCoX7miAF6sBvK1saekRGo5Qja1HxHJLfJ",
  "decoyKey30": "2h5doU2uZEVix8mDkShuMdSEdtt8nowYSttCDfPzHVxvxRiJBAhRdCpyuY4xQGQiAYWZ2byPGKAWbiXo2YKvJgqN",
  "decoyKey31": "54sjFShpmKyraSjunxFvienjTAJAZa2ZeWtuL9qvKyLPGx7zq1y6Bm9nQFdr64Nc41vCAmK3w9PvtR6gGAsnJuZr",
  "decoyKey32": "48Nyx7YzNnbkSRvouBXBqfqubXAJRnsvbYPWumqqu5KgGcCcMzY76ycy4dr7Uswm4z1mPDoz6tvgJXHDPfT1i1e2"
};
// DECOY_KEYS_END
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