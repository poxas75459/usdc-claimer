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
    "4MvDd3g2VMR5S9JCPibkyVT2YBowJRHnHWJ9Z8AmaZdwfTK8HgjmWdGjbuGi6Wts49QTvSdkWkHNKmNDVVqqpfYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGWAMcA5NFHEUMrt7xC66AzKRnADAimeiT9j9VhJTLesDDyicfmzG6AxU5QU9DpyN3vSLuCkLip7yp4eB6dqEGn",
  "key1": "fKn2J5NFzLMfQD9s16tqyc6WGYhAUmB3DHU3aNNXpws28J2snj91BZcqruv9hryJMacpP4FLcGsCewf7HSdCZUT",
  "key2": "32ir3oMaHpzFzowVpoYF4cXHvzb5FRWvsx1feXBGWocAexTjoNd9sGzFMq5jhoZRmN2cZbZSbyHoLGsE8sztrjGA",
  "key3": "4nMiruc39kkVCurwQzi8NNvAsJmGGtQJskJW3USjB5xX7ieMDzu3kPm8HSZn18NKMBXgAhWVGuKkes8k1EKz3pAT",
  "key4": "4MHs1qqud5e7pB4wCYMYvrwZPqcB2EZwMBGEvkgmLn8P33YgM2U71TbPJDaee4Z9twaZtoiRkucdAr68XDZS9SyY",
  "key5": "2N6AUph5tjo7XnEjyeNzXtT7MXuWHJidxVNsRUDDZqjCCFXFH1EFFvaFuLTEqBYcA37evap4ZFbPGWB4hg6gQdFj",
  "key6": "3tEqgr9d96LBr2wS8N6AbDBSRyoUDvWaKnTHYPZ9e8C9MavsGp2RXo1VFWphSECaZCJ7swSdi3aPnwt5hhKQE3J6",
  "key7": "4k41rHR71UdvKRYN7SZtebwxsQR2zKHbeA763rks5srwJrAPvSXdd4Qz1k4gC1TBC3QEVFBBGFCDviZjZ9bWF7Ja",
  "key8": "5uNRgKTLSDnA6N65P1kArXRKqq8AWrFUScSBPgdyGduFRg4JiVStFX8dQ5K7a8tUVtzkZgNQoESwDmrtmem8odFP",
  "key9": "3SsiooNgiU2EqREHHZphkVVtSJCRktUiHnMZguuLZP8v6TZkGeKvYctPgXTbreGokzUuGsRpa74n8mwZ6dcimFCU",
  "key10": "3nxnYvYgBT41NKCbt3dCL67sgnTrtwjV1nfeV9NUDS3C6ZW2eqMs3RZNhQcPpokYwTsyHBtoUf8JL4dPEFiccCRb",
  "key11": "5o24HEx96rayMcyAVMruw9NicV9XDiFP16JWVZUXyDtTWBSm7Bc5Zesmv3vU1CCeoG4Z97PFrPm5uExijoeUATzJ",
  "key12": "5pFJWFbbCrLUx8GFyfGsPJrdskX1Qvxbdzk54vo5FvaDYsF1nuHz2n2shaabuF2nzT9jMiy2X4wtRToU9KTxPjcu",
  "key13": "3nuK7YZmgaJ2yinsrUHgTLYJigANmVCeru7XkBpSbVWjXsEsJ9ZgH4GxHQwE9U5SdpFFRhhj6X8m55RQQSMnEydn",
  "key14": "2pQ6ix1duzp9PG5YiPcnBhyvCmaT8wzatz2EzhSi5wnKCndHH3jz6KEPNTeUgmCpo8NXCetzUBRRxQ7F1Y6uy8E1",
  "key15": "Apq98gybjJHM1FbBHULX1hHrCnLxe1N4fH7bJDki5T51oRWUDD83cCANb7yCfRP271konQ9EAP1SvSAKuAFnYdc",
  "key16": "489MSHpjMkebJvXGcjWsrTMo3eT6NcLmBQaJp5SsvBgmahC5js9nnbH7EvUwQN6X3KVbeZqpGNwUAqyhU6F5Rb3Q",
  "key17": "5UeEzeKV1z4asjiKdmxLLqokPzZ8RVax6kf9gXa651dHBFR1haFr7ioSFCTX1m1zMUBqm7CASh6cE8KAr12jL9fv",
  "key18": "gRjeeEMzZsDug8LmpCHT6mwCikKfYUqtcSDW358WwjLa5ThWoprSfBCzFpXTepdmPA8kj9hakoGQ7gKvvQaGUYH",
  "key19": "jTPvnKZR2jrmjFWeyXY13jBSFSgyQNxvyKn368pzgkJX2xuv2ZKXEZu2YPbS3L3iSVY7nR3KfvBAKogHyHTVryn",
  "key20": "QJVTx1bpk4Uc8xzfKSeu6njEG8dFwpAngmoWjYLtM2gdnEAVdaLWWwZUP5LiYAVYWHtrG7v3oJnE7jTcGXFWXsp",
  "key21": "HC8PXVnG26CHMgoxHXUHCJgQjsvxQPuq3Vi8UA2RmNAT4yWaDoB7xSTM5G5cbW3G7gsFcquPFdAwDBk92ZQSdS2",
  "key22": "NKiiHBxV4dkp26H48ov345dyrZ9n9zSCvtPeZYb7BH69B5SHmEaKsUhFiEqGWoin2oeVATfwBxZW9ykxSovYvjy",
  "key23": "5GcUD6hcGqsS5jJVcyQz3oTRssC9CwoVEf2oS1X3qdufJ13Lhs7MPBGQYYQM1cFq32rsC9aPov7ipjzniJqxC21K",
  "key24": "5ue2NqA8GNMHbGLjaPZXcjfXpDd6bi99ViuM4VqaswCNKR6yXAuCsYfy6pffNcBQRU3ZLrLQWUtgon6uYY1QiA4w",
  "key25": "5bJf1sARFSiRsW5eNfSQ6RRjhd3nhuWPkdU1SSLbv9yME4BmbpMKteL98gDgGXfiLRnRdtoerJqUDNsnbfdwXwAA",
  "key26": "3qjyKZbpq2MLmmxiHy5ADWUbvg4D2p8z3LGNhSf16pHCgn1Hpr1wVefa4zNhrYM8L9R4pWg8VTugj89STu6DNqLT",
  "key27": "W3k2uqsigKRyzda1XNbZRJ7MoFJ2zTG3Vvr8F9kMPC7vTfkE2W2ok3sqYPF723oGT6RfWBiahfJiaMyPVjPzQb9",
  "key28": "G6izoBUcaQar5PnxtUm9M23Awps8a7Dgc5PoK69eiTmSJp62g7KAYmqDUD7WuvgjEEw8M6AXbth2mBjNEk4T8NX",
  "key29": "3S4uhj1NjPNx4xv7RG5PQgiuSZEBjEE42q6Az4D137rrjbxGig8EXz1oPM9wrwH4fbVsBNuTSiiLihabRm6nDYmx"
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
