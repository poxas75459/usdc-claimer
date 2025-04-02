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
    "2UbsJgbt898U6vSijuvmSJTmCrqHAUxkjJzPBNV4H8CjiAe8he7JnxkaSXN9dkiZ3MPAVJTSZguGbj4GpviAgCXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGXsRYcj5wNYHZEQVLhFHexWWBfZgYfGHsmFBbWAVsxtArAKZqEvN1PehVAzbGGgFw4eNhKjTMyupHwwbcSXCt8",
  "key1": "4tUZR6oicBXVSYMx92spadDi39tyc68Mztqorv4xCo9efPCAAofiM36ZBvkoKS63FKs2o5ZqDj8Simj3rYpVE9UT",
  "key2": "43WXQqqCbPjyKWEuHgUC4kq6dWbw6LGUGoaKpGrWFtGuPpzciRcbtrToqBQjoc3HcAjfYiJwFPr2H7kq2qK2zbxA",
  "key3": "qzhKKZpsFfwhTpYo8cmgeaveqW2ayea7ifbP52JRH8eHMHiXe8Uv6E26MsvYseeTVsUNhkmXodmLmZCDGDS6CFh",
  "key4": "4D8hAKT32NX1Z1Xv6QtTZBrJTveTZDGT1L1E6wuFYJEkeyLMF1wXGmWWYnvt7ffSRXSTLSHVJJETt5BSRZRUtBDA",
  "key5": "o9XXvQn6knG2xRQseG8q5sRC1PS4J4d3hxx8CTCvrz3sE5b2w7eUuZvnFLiEXNsBzsuK97Ahj1yGfu3onQ5kX6q",
  "key6": "4jj29yGDFadnw38YPiV4z7oJTPHTqHdAxXpnZEE3W86Zmmy3fEWy3PpnWcb3XU2pnqe65JdoaGqLxkb5GZtJDYhh",
  "key7": "4yT2QjyYmAHPF8CnGwjNbuvaLBYLoLPcZuy5WMWhfZXVaZLkJoxmbSkV3pe8k7KFz4rcxZAtHpEHYMYtT3YGhLaE",
  "key8": "egVgYhfzXVCRTRDpD4cLUzM97jc2bZctcruCjfrpbKCGpDamoskE3w8wtH9UKdHFHsBF1rx2r2GhyHu8cNrGP6r",
  "key9": "se1BUgr3LAbzoBp47D9x1yKgsyJQxydwZzWR4qGRJAyhc4tzZJAoPJjzdMbkizJYzPKTcJqfHx48kMQMLyjEnvp",
  "key10": "43qrSZtnknQDiVaB396bGJPUz1iSrHFpXU7C7GwwXHY6HyxKLR1w7ejab4Sp1LNRCGrUmarQH6znbrY2N6ih19or",
  "key11": "RR13e757TQHEshREc5MidmddEgrwJcEHSpUG5WefEvhvRGDhaEWHNkwRVFVwBJQrKTeLmd9sEdMz6uEg5p267nZ",
  "key12": "2HYPWKsHZc9Dc4dPMwPLKsDFMraJBhLzctzf9F6FLokhEKirdYBgEqFp6GxyQtoB1PEVHv39UZ4ydmi3KzAef1gR",
  "key13": "4oNfGMtBUNHWoWxG1MRL3cBpbFdf3b16nWWb6JxVDzopkK7AhWZfGmH14dVHuNSB5d4MtSTzJYstbBuc8Ph86iMC",
  "key14": "2tVALhccMy6nc3qjtkYh5ecbVmXhPPyrzBNRTrxQ1CiDhg4wPxfuUgxHGPojQaPiXWNn1gZF2aX5vojiz9ZS9U4x",
  "key15": "31fa734Pg8w5Hj466RhouZmKUV1Fb9WfnU57frHNUtUkiezaq3zhXBb2yqsZVc3Sh5NnDTniGikzsFHPRRp4bFGZ",
  "key16": "4MsABRtBMqmxqJHX4Ji7UWG6YSZ8c6ZbnK1rczG4voNadSbvmp8zjrtnQJE7C2CPbpEkY6pMG1cQZrQLNPN1qFPX",
  "key17": "6HLGbWG91TsCjNGqmZSYLtUtoSBTFR8nfqo2idjDiVTaSX4MoUJ7ZqXU2jYwZ7i3fvxumENpJ2dk6RkT2WpURqy",
  "key18": "4aFrLaQdCr3i9znG437tSx5YrsqNi5AiKFses2EE36ACxbCgs8GzDuX4X3TK3ACQmxVwviqHJc8zuW11CzhBYMNb",
  "key19": "4ryfRTJDRk9U5xvVbK1WadEiDbuHPVx4j2mpkCR7bLGf4kPQC1EpTUgDvW84m8Rh3twju2s5MKBuCnnqQYvU2o5H",
  "key20": "D4AFS1eEHis1mgVWNonBSzv9opk6pZWYmCLtnp9AyXQTLCzGNid5Enzk1qLe4kGUtwrwBAMzVgmPpLmmq6uqHrP",
  "key21": "3GCnPqkpagUD6tgz5A4xYXkK7xQhTeYigzCqu1i9YyNwmGdNGy9pxL1mYRNL4mYRjJSr7814s1wHQYBrQGsVdM4s",
  "key22": "2bYctx6yNg7aB4fg6ioED7LQEXncBhcTjMgALdgB7SZaf8EujM8BcAvvkzwhu2XQRveNQmWG7t1sgBRhJna7mQhr",
  "key23": "32sm3QvsKgpuNVza158Zcx9aZTQo1HE6ENTPzbKrLYZykp35oZJ4wexdfQkGRUsvyf2zJAnFaxm2W6cPF7yj3PQD",
  "key24": "4zjYYBMVjTySb3AZVhRM8JupWrn2HCxdzRoFuY4oUXpwGqYMNcMLUc8Bo4Hn2bZN3AKr9vr7EmG6ANUq8pHA3KCG"
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
