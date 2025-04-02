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
    "2SXNewhxbiR76E72eG77f73qW24jfvVoMYNgrXzLF7iDz6L8PbRp4LDtaVm8k2WNb83xiDhbLqkjczXz4p9a3qZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUUr3K4TLfTmDBkbF7wq1a1Ye9yvHrBh2BtomUWff6yThvKQ754ZJpNB2o8YArKZXUfWLGw8GiLyPw3tJ1SwXRX",
  "key1": "4cDdrT3a5jY4FVy4jZ4D8DfbWtLPyMrTrkSRZ5S4MaKzNY86kbeHyAdicprqVmHQFjUBfTtSx4SxYBLJUkH4MAcR",
  "key2": "5B7K7KUUNWTW4dd9hNxTnEcJN98dEviQvMgDHzAHDyPGQRdSAVtQWKJZRiun97U9gSAEuDQkSuoAYgLhugaWAdKF",
  "key3": "3Dg4DEyv8DGoHqHnAwo3qiWTRVZkv6PMQ3Tnt3kAnLbwCmr2DT1LxTJQQfcp8qxjUxjxkQtjWSfxVyHmKrq87FXU",
  "key4": "2GcJYX7SAvZsAnYxskk17MxC2ZQTqnooEynm8NF7RNVJtk4eFP1K3CxNHyKDtqBMmCdNZGBuA4DiPajzHJc75zKb",
  "key5": "2HnzS6TWiSmNqRH951rCWM3sCHG7e9QRStLjRfgpocRphPpFZA9Qtz5bgCXgToH8SbjVchZC5BS4ACpYsSt6FPMH",
  "key6": "TQtLvjwciCSC2aZQCgwTRaBrPJbww41yGrF45qYi1oPA8RgDX2TJsveJ1bHPQ6NuFEUPdkvMZHdXFQCB89eYaiD",
  "key7": "54nKR8Ri6NeVSNhc3bY6pfP4uthrjUHKLXQE1aeg7ASgY3XgHxBUFEKymUudMR3QXZXKxTCMjPCTcy9UeVE1KUPv",
  "key8": "XrrR2HbrWojYcH9nUHDsmQb1xvn7M16363cvTpnAWGSM1WGv69bmmF87QZPvRC1g9hX5jgPKcEmspg1d7vswiEw",
  "key9": "3NTPiNBkQy48urHWBann25Z97bQ33DkTC2oLxEy5J7JTtXSZqeaRqWf1HFyQm3bXtFQaaRP3wSaDEhGWNUKStnDB",
  "key10": "4vaZsKBCuLACTd2MhFroPETd1qVyZ8zJnQ3CUgT3r2VJmGwvJKKy7myzDdFg1iEqFsMbudFrfvhhqtCTA9DANt2U",
  "key11": "3dmv6wEWhAXPCD2x4dLKFbYvWMLs8MGTzxUrBobXuuargrLEKQBrHJ2ZXCto4beQpZ5UQETNhq7zW3dGxaTL2YGR",
  "key12": "5tVaKERYjCaJwes4z5Gg35r7x6eFhRQWgGVcTm97AnnnQR83YcW58mbRHKg1Q9eMPhVnA6dN9eAPjEZmnu11oc8Q",
  "key13": "4nHjpBZE6Re4Zhp6RMWHEZDz5HgrudqqLbhXxRKaK3V3DfLP35ZgRh7ohnBPDDAsbmUa8dM39zGg3fMF8ypoq38A",
  "key14": "2cdqWirJA5opGwjsB26VCEqGAaEnbvcZQ8GLHDrXZRukANrhTw9h1PSug8NdniYzZ7kL4ojAwbGCoWmDwGmQhbo3",
  "key15": "4YjUTRJ6v73EHs1ccvzQHHirUcodK3L9b7wbdS4TkyKN3zSAvDGQFK8EYZaJjQMFbp9jSZ6v3f9LamBDb96tkqUR",
  "key16": "UjGbpRMB3VLwi3UTGEzWHfm1ftJ1Ut8f4CXUZwmVuakXNie2f4nk5ebqXKBxRaQ8vw6iZkkKqmqjZHXLach4YT7",
  "key17": "2iV3ytnVf4uSHTckwCMQcQc5w26C6vbbxjyPDYxQKX6ypTzu6hEsHJo2UFFuAdnersVF1dXZFFijHzrRLBhtsFBm",
  "key18": "5TH9z7QCH85nj2TdUXoCWp8JfbmE5MxHHrsYqTRrR6zLVVdDbGFH3G98qEEat3XZFrcwAeVjCpZf97nBD2Eic71K",
  "key19": "5bU9dA168FAa6pRx5Gb33n912rbNZx2HgnVoVYozg8M3LgZZbQL9ZJbrQ9FZGrS3ePMw6qECmosNWkfCJdvtDCZY",
  "key20": "2sQkAzwscidiVffDBjRLVspPCQw5U2YuNLH6wBv9jbDxmTNvMcPvJtugxBLw93pFo3Dsp6J7bgFDpAxth3A1yy8Y",
  "key21": "5NhuBASHkoo46bmuz2FigW3MHMb1HbB8kMkGz2v1MgaEQ4gjYeLhZWUfkwaUgpsGZzzXLrHAX6pu3z6QJZhguStb",
  "key22": "2VS6aT4qG1mrzxUS6F5K387pTMbtR1QK2MSbQ5zNcipQeEzwKVhqaADPYzqnWm6YBYHEXv4KF7UY8kxukVaVoTt5",
  "key23": "2M2WwfddowwQQkB1tXj8u1sAKs3XmSpESf8ESK5M22w3UVR8JPwoWrwWHvMkzVc8xNdyk5SdBYx7YPhm8k53E6dT",
  "key24": "eo5JUW71YL8AqNpTQo8aFWvSHD7rRzWhq4AL7y2wvGUBWxtzyX4p1SXEc3mQGpPcy8CnBk8HUsAEcdpHx4v6Dzk",
  "key25": "2ejWYveyYLcXyAgPAQUhzNEmAs8gTJEjw3YGjFJfa2L9k2wBxMp7965i83APyAGh1yFLDeaSdfWvGSpqBAyZQ5DL",
  "key26": "3eKHavpZ55TXDFSr3EMQMt24GwugTAWWBc1i8BzrsD9efVR8qb96r7Yn3ELMDUaNbcaXzJ4bXQnefJPo6FDcigTn",
  "key27": "46uLgfas2seGZ3jUBZynWwN9iBbkTRLztvrw3HvbENwxCtVWRNemwdncJPt46VkqVQ2awfMd919EkLSxr216fb43",
  "key28": "2Hnwwhv7XGK9qhg5a1uDAkPXJ8aXTxx7YCeHf79FU24m1o6vA8yji4GvBgYWMd1hiXwccYpZrtXqzBvAuDKFSnGA",
  "key29": "LdTuY3xivYTuWx5EjUzjAaayHkA9gWofhEczgp5d94AkqUNDzy6DYK2qA8xUuE34SWEVVornLYcTJQGpJj6dXfJ",
  "key30": "5BNvntwXamJiZZp27N3eLCx7QaB3wPrTGvoYGEL2pJXg9gd1KJEfnFBoemg1mN5Tn6g5PyDoBXxb4UwVfXucPkaV",
  "key31": "4n7ZvDnkWdkwzBDqxK5T59Vx5xKxwpwN5UKVuiz6J2n6MPhyQnhq9yk8CnfVTRZZTdKLPUXC3XgdRWhDVqKbAbBi",
  "key32": "5T2WDqZoA61PQhNeRZVu9ouszQaPyAa7mvqmEJb8zKhSvPDjsyXxpTy9ymwaVMHKjLftiHM3LGF7L6pR1CefCnBf",
  "key33": "2Xsb9m1EvTrsP55HXRhy8XA1gJRurhoVLyFBswux3vcndY5BoCdYomEHQm2P7Cs1djLb6KAdZebDfEsKQ2s1D2os",
  "key34": "4AoAeSuwL5pwkv7nBVTuANNvawCSwc87FpHZtVont4DaURTthknsDgC4CvkxW92TNDk2yGuYwu5SbXDsXsN5jy4V",
  "key35": "wNky88iNXgX7c99Y2tTrJzwGY5bbYWk29rEKw72DfeKxYqbhXvajyZeogzZLvDesvrrA5TAKvqWnGRHZruypf6p",
  "key36": "5kPtGBibNPzJkrDoj88gBXRMSWJyWzF4FA9yHSC4EohVp8W3mFFQk14KhSKuBUgGAW5Mc3C6416czss2NQnJp8FP",
  "key37": "4uB1rJidEEscaT4szJHpsDGhKQJZsjfpBUajzkF7EbrvNaDZVnTm5G94QWviohud8ZWTfwpU1PAv5hzvJm6iHZbG"
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
