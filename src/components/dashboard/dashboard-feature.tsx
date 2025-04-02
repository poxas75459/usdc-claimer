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
    "5xGJCdfTYs5LJM46aFjAsci4u3NcC4bfprmVRBSwNvD9sZzhFTRGRs7SEivAuSETS3JqaXEa5s7eJd72Zzk9AMf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2TNsMzmfYa4jU4U5VT3Kppaom5Tzwnh7nDunLFYngPDjmqrbiE8PxXzodxcftf1VgsDw12ssjDSv2roM7CL5Jx",
  "key1": "2o53nMq2NLYft9HDB3JgFG7PXnzGcFPKoHbjs7KoJipWmBGJ3QYAaWTP3ApU7QvkH9PdVzTGwuchSxrzr3qiFGGE",
  "key2": "4ozAG5Kz5McSFEF6eAcq3sdK1M7jUexY9XGAJhg7Q645VHYscKwUZ6pmLW7SP6BpRp3FvVADSVreUmhQHFmVp3c8",
  "key3": "62sKD8aeU2nZvmaH2odEhVTz3o2ZcLLN5AR4UPCsVF2KLmj8BpaqqsurqovjyYGPhMd6gwWR4kSKFEjgzns4rP2o",
  "key4": "XXST5N7HWazVQfpgNNo58iiWiPJkKAPwfxbS4whFhF8tAwX3DcvLkaB7XGavf5FhmJvhopZzBUpcw3EedRNxZ8W",
  "key5": "5PgqWszA7nnHYFkK84ZiGbCS1LF8tFVYNqhn8sVo1sCoyH2VPG3smoBNqSGPzVR3EdXLcquAnNMgPPfb8bA3Vzsu",
  "key6": "YvXkH8wt3bnd4ubn7fGZtVd4wWyKa8Wq6xkSTX6saNZVbciosweSo6fxB8DuTWvgMfG3NpKqaPfAGTRyZ5jvoKn",
  "key7": "5MpJ2S3vMgfXrFgj5Zk8XyNrNfouWrtPHpmj6V4EiPVnpW8eCtnNQst5rjfiFtazPwqLuxnsw5cwg3dCfrA6Dnqb",
  "key8": "jqPYS1MFqzgWqHuAcdfS5MTjhNKbvQwwhBc15CL3rXACbjA5gwafnFHnK6T8ZVrcH1m7HnFpNXgZvKmNUHKXSjY",
  "key9": "496jBiAf537LkZNSv79uKQFkSiptnxoDpyUyn6Mg39XnLP9Ma57fGqfTCbtamYEWcCX9ZUCBAcxjMizoaWC3FV2L",
  "key10": "5N3yGiCJY19QExdj6zuEifDyyjHdEvwogBN1SnyeHn2iiiVCYagFqJeJq91hXhi3yoofK1AYxhbKcQAcJVFQZcR1",
  "key11": "3QzfR9kXWN5et6mN7bpK5NqA3TosHJAe56nbNSjapztUbvvVMSASbiFGXVNzCU6GbxWYC6yqYvZxkKgxCDyuMXRY",
  "key12": "38kYDixLDrmJt4MNdhAyqX1A6w3NEyA85n2YEHUzXwFp7jxdAhAQR5QdM2u461uDKmPwx44RGyncksAE5qDvcs96",
  "key13": "3uxhdyajhahfw33XctHHpGFo6qNBidRG7QHjPcMpbhgKw3dPCdDv5Jr7PkpGBHm7EujsemYDrmuEPrTHaNfvq1pi",
  "key14": "4o6eFxS78FrPXVk1rkyMrX68YQbMPuGrjC4SCk9PuJzgVRH2kuA9g6zcWCUexaJ4zqJxgrma5wgLtwBAPZtX4Sc9",
  "key15": "2iHmS3H8PJwPfrJx3fBTFdR5d8NyhC4b6ECaH7HFpcAg8aHrht4Vhk2hhFq7zSenrMWiYry3A351Wk9RXk6jxfXs",
  "key16": "3mYHvaf8v1T8RRcLf6XZXntBL1J91BRi7DoMAhGT8mJucdaAyLpqpkrQRS6bf4TAa78S4NfnzxsSvzqzZLxewySG",
  "key17": "DjRXmYJAkumTiMWcwuqJDtp9DYMQgLPd8NgvjNepnwXutuVq9T82Z5bEtao7oCvgbaJiktFEeTXRVtmEujQcGRc",
  "key18": "iBf6H9yAg2XacfovEKveg8DpvCLdMntq8xUKvXJcQve3UNed9a188mLovNB7Ur2AKjupnGT9RYANZzSQ5z3hngp",
  "key19": "4dLc4KHdSxUMjLqETzMA2BqaG7qoeHME8t5dZMAbYks3ytE4ooSzjqAkkWZkUn4i7H5b2YBNNdETK227aAc7RGk",
  "key20": "MrLhehNJK2dkzJJQFuUDLLrYB5BwDHbXoBmUKSMBFDFqWuanyMVMtjNidDxnQjg7BeTsepPmHFfAoAbkEUDYxSY",
  "key21": "C6LUW31UHYhWzXG3cRXgbyQ34LbSozE99zRxjyxRdWLzC38pFkVVmdDdC1q2MVbu6GveskreFKabg2S3kjtUjju",
  "key22": "5ic4eTAtajXCRSPKjRv6SLkBQ2AR8Pq7qXF5MceoLr2Nsh3epbcTp8BMqGvaVv4Ut5BZxoi62CkVdDacRPJ2FMMt",
  "key23": "4TtXb3XWGu3bA5XCfF2rZbktb5TVq4K7GttAwwSiHgBapGvKxsySeQmVt1JxKyTc3zsEqNAUDo99h4DtrpX6pSQz",
  "key24": "2sQzYSf5BdDeTzFnKUT9Qf85chjzuDnqpSHiGRN7YXJNo426yjANg42LWgBeNeedQ74zHvUPj2gjtLrVzKPRBJLS",
  "key25": "65YtGCX4G7CfJFDhrUVFYYYZUDvqFJfhYzP7ygmA4zb4iyCPbjN12ZdeBZaDLBVtz8mweuTZ5s7e9XkeNizRxpyD",
  "key26": "yCU1TtgFMz2gLgvcihiMAHaQj4hZxhVxAwKXpDcXFe4KmgD4AHNAG18VNWfX8V5ovDszF64tKkoQCzKq9iUcXS1"
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
