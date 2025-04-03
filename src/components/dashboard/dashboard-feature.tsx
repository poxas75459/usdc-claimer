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
    "4gY5aevCVbWFzcHAZnHcoVxyJfBHbvJZtgkLJcxSYrCo3aQx8vkCacsT2Jh3YX3u4DGWDRtYSx1uT2mgJgTAmC5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYNkFV4Tstt5Q8AZf44xyx3VS9D3gFbwSD5bgXNFvYu5pyjsa8a8ZzsrPWGoJ1z4gcL1PP3ajgSGaQsNZ8QFxiA",
  "key1": "57bW88pATHPzKXgkCUnyMCww4aHodEuFjso7LdRWno9LXRQZvXmvWPnqB8buu5XdsUUWR2WDM88wt7kunfpJyDPk",
  "key2": "2xEjE7sWaD1aQm6X8KzU5weDcfeiNzCUgsziMyYBbn9jZFLdmiZdynuvpeAEh7Y1TH4e7iDxY8ua1oimVseunat",
  "key3": "hj3FdWmePdZp3rAjnCfijiZhYez1Eg9sUvrfeHkAwrDpFBEK8TtmCQSHoxQWBsdtGebecAG234n8cwTWaXKHdkF",
  "key4": "5zyDoY1vikBUNZw5XVpeoNVcMsprw5DgdPkPoarQNaksXjCvHnzo5i94eqmAFBhK7ZV2DNRQe61AAo6HNbjMNNGX",
  "key5": "5nbHV3CzVVL9eA6aa1mTNGeZhK2YCUFZonFby3jBLXQGeUN27VCDKzrkReEhSLHFZjpfqMsxgsvnYgY2zWfkBQzj",
  "key6": "MGLQHBunRdLeZznyZDjLEuR814KJDTBrcX1vUBDE7nzbyET6JKiY9EAJq5Em1xh5jy9637Gg1BGHcZff7BstKbG",
  "key7": "2KCBJgjMYatQkao8urBkT5PL9zyrYCoeqHHrkyPVwWwvodh65n8NLfw3SFjgcCPZabKCiGKuVWE3b9P7J11J4Z47",
  "key8": "2nVzDchg6v2kJ5WQxBZSw6VhGKYSRiTMNsJaU5joVHPvmugAJLeX7PUDwnthdmbX517yExAC1D1TFbWZ1wK6cqmB",
  "key9": "3e1nUeaykxKtjdciDyxrCTRopMKtYwjFudLyxrzkzWdxJ8ndBDP7su8CNvnYWvAWaHeN8u2SJhJ4MEcWttB9ZTaw",
  "key10": "2FT56bQBgAqFY649dMmytEgrEZwS7w9GZUccyRiBFEZLDnWrDmMUKPDrwEq25mJuCwmkPZyMMja6ByqEDgYGJUQv",
  "key11": "4yS7MQKEKjuq9meXQiUhUWeNno6nngzypYg8jg1Vv5PE6mqrJWUBDWUEm6Hmo9z9m94i2mTGBa2mMZJ4qxZHxbrc",
  "key12": "4FULUE8nLBR2MSaLXAcaxweUtqYLFGtkoHdZdtBz9dvzVbxiqC3fsgrHxXEipJRYv6m5sRvueksqEYVbK5vgAKfD",
  "key13": "4ZjAFEZLknTfrLa3B3kX84ofUKdDoi7sgTQ7wGxcQGYue5aUFD5GeuPpJA3niQ5XEFkPPxKBRsG2938HKWGZv3rj",
  "key14": "2G4MHAxKcRoeq6FRbkVNobpKps9uL4CL6sHsy3T4pPJsPF947fGNAc53XWhrrwnhg5AmZpZCRpSDN1am6hsPEoN",
  "key15": "5VRuZPGFa1cj6cFKdaBVRndpFFLYc2JG5H1UYmhV6DKopLdqqWRNpXybxSi2wQnZBwfK6qugs2EHBahNW3pDy9AA",
  "key16": "3MdKcxo6bj6WqosnMrbnSrTyqe3pckEs5t68BNAWzFZvHPXvmACfkbhThX5aR5sUKgJNbbnYiqqv7NynGP6GHGLh",
  "key17": "3ygTxBNieAzwmc6dh3R7gqvAC5tf8HNztsmLX63SMvhcDirTtPgxj5faTgeuQ2cKSz6WP4BFUQarH12WvH4C5Xpx",
  "key18": "oWpPRygKKVuB9gScvPGfteeFmCfJ3WZcggohk4RETcEYn1jhA6rpD92LDBBMTpXtayWSnNfFv9zwwGxoEeu7ZGW",
  "key19": "48UaGhUcJf7VLMMjnNu28fV92nwuzh33zW46C6YHk2nAcbK4oRTWbyG4BaJt1g5MrR86YSEpVBCTn7KmfR7gtWUf",
  "key20": "3RceBnNWkB5ejYJmf3JbMYhK3uqzBeVcKYqozEHTEKQXbg8ytYgSkeUfKHVnCEXapfLN5dY6edf6hzjUb9XwDFy7",
  "key21": "4ZenKit55zwN7uASZSq4u7PbYWUizo4uSvEEp8e6eehrZMB23y7mn8zZWJquHGvUFSQ6JzYbrK6biKhJhwptUjdS",
  "key22": "iNkUi9b1RK8EW4vEDxuhzypzHu7cfnUxFGkTgaEwW5LMBNd8GKgEx2556KusrWUEQ4LnRiRnCjtyoD348LsGpjj",
  "key23": "2gFXXVdug9Grf7X3xrsaovTiiX51HLADNnUqXwMyiv6d2qsZ7K9ZZyzKruhyAYMmJVfKEZ5BZLDGa5RYZctx9GSY",
  "key24": "5VAkD9VRVtrHD9DsaPPJHwb7N3UZRQPEK2hJjz39kSS63RiMRrvj6N9NE83oqAJrKjJYeEc97oCefmjewWSjjaj4",
  "key25": "3fjYQVacBDeV7kQF4uy8rdVi7pDhaxo4QL8yoSgtNu1Vb8w2PAoQhR5imPC94uXwmbwQo1xWFdYrpLqTbXv1Bbp",
  "key26": "4bAyokj5wpFuqZrAasyBSonZPtGnmaXAk1QMGEXFyAgbPi9yp2JQ7cRamEbRnKKTpmSPfZYyXZCdyv8YpuvppZvS"
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
