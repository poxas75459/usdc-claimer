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
    "3dk453F6yyAQBNaCRd2h6QV2FF78ki1KA6vKvJTWtyXoy3Tev8hcaBTHeyAZ7Yv9PXeu6fHw7jLBmTHUsrpzWDhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzWRPYP2yCivyyqorZzdXbPVtEhJ7rrnpynFc28PFd9Df8uYyVSP9QDHwgykCjjxAokx14mnMzbYFmDnrPxcQfo",
  "key1": "4vgBVWd9zQU7nH8CGpjYanhkrKSTF5iUR8EJmxCuV3tsuznz8CcecoQZ9gYpuaEhXtPD9ksLbV2Pbbzr45JSWH49",
  "key2": "5bAML5nCM1iDXa2dM7v1cV2QqkbX9J4yxq4Fkc8TYkEA3gFWj6z3YQDfGPUy356v1JQrJ7b5txCU7vLwaikLUosk",
  "key3": "2rdSde4ziUHhTMZziZM6wNQkVvs5chc7ehqA6ycoGUHtZRBbtCPnuHSkGqhbvK6RbND9XTniQns8YLsEicZ4Xe5p",
  "key4": "39Brhx68r3nzPtSewsxhNrGemNWVjUBbTASSUB7D1kyEx2T62kG2ygC8Z5bvsawsDwyBRfaHN1ouJzqhBih5tpTa",
  "key5": "4LbGo7YJaV6VBvCBYDAEQqbuucw5fPmwcywhJf4oqEaME4TM6AvGJ2sEMeEFYGyTrdj1wN9t6HEgj1tR6NaMGgN",
  "key6": "kyH3xdNvSNbxXcoKtFteSXtAQo9fdyzbHum1n6vN7r3Bi9Nco6Q2RfyuvbsT4kiwiosqUxA6X1D7MRzGH9mJDua",
  "key7": "4z7yGWUs9xtVAu8i2V9c26WNcpD2tffFNf6CKJiBZ1d5XsWcWpj5G7oZaBrUoMATxT9h1oEG3usa3bUT2MFJz7t7",
  "key8": "2LmhRwmFcXsqjd6WtvvsFFPmdYoJKLqktM7RQkEFk17oUAqJ3w8dAYUk4LJfE7vqRHvhnkwzRiZcL57C1gYauQid",
  "key9": "3nFoLSuEDxjH7ynf1iTExF1Ko9u3ZRStEtb8Bd8YBr49fNvCybgdFeJW2AdSXjBvF8jBRAZaafnHRuRz476jKSx1",
  "key10": "4tvrUGSuZXrT8SNzxFFzD4k8FtouJd7qoDugGWDuzLjoN5THndjuS1R6CALKD31Nn2AhNurJXZqPg1RfCMnha6j4",
  "key11": "5LKhrrFjV9iF497c7psoF6B97eniCZ71y1pbL2nStMPrifgT9RcbBtuUU3h5RAVXQcf2tcQU6Qde8pHSe1s6Tp5E",
  "key12": "5wyZt5eE2zejRs99d2sT9erWekwcwoG611VbwrZG6JCS7XTnyahgtvxLfRu33MGfdkFAsAJZpzsn1knNdeMXauZ9",
  "key13": "4bW9A8F45wbegywQgzdH1BmaDSLMnUQzdCTRY2gn8Bn8hcbwQfkBjpjRhMMhZMagGmKRa7CQV1gmQTnYeQFZr3va",
  "key14": "3a3NotyBaWXdBDZmUiVsijjh13XZmWweYEbyeLoaGRE7PBYmKcfDaQme8PQREZTFw4BAskaMgmwhigXLwTiTwhW2",
  "key15": "4NdNZUtiJ4JFb3mAdXNrM5PcFnb1NWmi5xaqNvbdrQW2ND5tARHMfC1uTS54VVns2p2xvxRx9CD4utPdKgZcM13W",
  "key16": "3B2MhMP8STJ9Bdgv88FcQRyrya7ReWxphypUDKddrf8wNxx9wDJix9dFmDD8UgmeVkhQDoVarjfeALx4sZdYsEf7",
  "key17": "5ohPHF5MUWEhovfxPzxsgpoEiCPKGQciXznGvzW6c2YdBeDS2Aq1J94AgHGGhQYZiE64A5bSAk5QozvNquDWWAGN",
  "key18": "3bQPmXnwKx4vz3ckT7kPnn8mhd9WhZsYfje5N74Ue4pVDDGVRwb1nfqkjx5SawVgn5ABkSLCZbBWVUaMW7ySqZP2",
  "key19": "FDVuECySFdxudaABJUshefAVsMdcxvFgRKJzvbMcJvMmG1Pwdh2oXH236F4e9a8SJZtxyc7yAWqY67bGiTNoE5b",
  "key20": "4fnkkitSQmBpHsprSLNE4L8HysVpWXCeysF53ZX9jysy6WQf5NiHChjRdHY4CQnjRB2kqchq7eqk1azpJoTSWnMB",
  "key21": "4cMMdXNiEciEMWhNR5q2d5Ba2rv9YNWV6VBnn6eLK7aMJHHaXAzRwf84iJJzSqVkBtVzvnoPDaJiM3SEz47P6eY6",
  "key22": "44qNMoR9Jh7Tx54ndf1DZLSMpquZkuP7dZ9N16qkTpkV917CjNNAtwMXo6Kq95beFEM2sVCVSPxG1ZVW3nvoHxvB",
  "key23": "2vVVCPr9LYHu2w7TMTaBjTD6TUpzzeGSAYsefXGLgzG5DcBM1wqzR4c35LuoqzUi2oGcXCDFppr3uQBAMWY7YHpp",
  "key24": "qKJ9HWLVRvvbJnsTsiJ9Bz3yJvcDsR6W9Q43MmNXVGpmW7S132cEYpBvcNHQQ4QUM1THUmjo4i7G5nCNsPCBsqK",
  "key25": "KG8uVuquQ38qw1XS6fqTetcZKgM5TP9yYe1ri14ycgYWjQwKDaY2Kes2WXBvSLKahkxwADYzwLYGDFPRWkW6JWn",
  "key26": "2zpCftbtnPdhNaQNvisM2RNwyH4iv7ypP2j8xnAiqxUwwndELpPuWu8esff1drS76ssaLEQm5vRtftkESTviHZYg"
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
