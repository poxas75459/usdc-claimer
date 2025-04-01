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
    "4C43S25f8HXuWZZMCgFviiycaU3s7FDnYkYB6SPNA4VE1Zivvhc7K7vHwxRivZd5gtoku7KRcPZHva9rpqCvEyYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8Zs1wpkW8BzYwrnH3MuN4pKGuABgUfau89EKohmcArSWRy55bEBzoMhQNZcFFsxJtAg6WozeCi8hRHS8a41GEt",
  "key1": "492sXtM3RJohQ9HoumhgWN5ynfNSBwaLrmGV6EVg4r2AN3YRFT3Q2JLT8P23qj6MT6zn7PBKMaFuQ1uiUjJqFaks",
  "key2": "5Y7rQBv8B2AK9pJzpnhzsUt3N2Sg6nyVXjL9FtKx6Pn9L9DaT8wV9vieM353pEdgaa7v2TURygn21mfyZFRqHiN1",
  "key3": "47CwxMUgtn7Cd1z9M3TxfkDuzMDZrkuvXr7pjiCJkQLxV1ArrorgDEMgMYGeKXkiSd6SiB7sin984VMuch5qDYVA",
  "key4": "5GEYm4RcMg394cxicM2Np9S2gDjoDp9hpNX3yFn3CJsA69YnVi5xDiTPzq5zBhp7Do12kFyu7n7VzQfyiZ1aNZNi",
  "key5": "5JuwBEQDNaF9rGWuNSbX78bitrDuw5DtLMMTGYuzfzD4HEdGSmQDLziDpFJS3VJwYCHmJXcSQYfFU8cZB5E8TeAf",
  "key6": "ZMjTTPXGBCeVssvMuwKpc3rvphTPurdSPeTx6AzyJ8cQzd6JSMTj2tr7Ub5uxFNJVkL6PcAr4J48Zq2dc7r2yNs",
  "key7": "32gjMPYbbswZZzM5PaUSs27iuWucNwtGa3fkWQVtSfRM7ZNBz2bn9xCi8Vsu7XDWf4em5nyknCPjKDRKxQhEqBK9",
  "key8": "3mhZE2Y1PXVHkps4YZUXWGVaUvLQcJxzg1JERCR6cXjiwp41kxrJzhE1AWUUsEwqci7iT8zExVeiXPjK6pBJNUi7",
  "key9": "3seMYq53mqpKFhbDLgHxuUGtgnyEzgaZtfbqUvpbKjUrG7C7gQtjYrvDBdAPTqobwfrfjSiYvkg1eBqD36rjfcZu",
  "key10": "3VXXaSjSLzNLSLV4UrpA2o8jU9a7xLUB7YZTr9aTKhBJJzFekBSoqRXGTVA7k32Ahezme1927j7JH78hRfY2i4YH",
  "key11": "3LnbPUzQMXEnp6xCFry96N6FpwEH38qR6yN8guB9QH3iQiXaHPCqKHVefQSq3nDvMJFWRB6e7nCU1RwP46wpWAKD",
  "key12": "3b4iTZg9mC5fT1drXMFLVzEMue2VtmNsnA2fcyyH4kZ23MvXo6KLovTJ8nMjgsDbvgQRtsNQQX7CrpxtsNPKiktd",
  "key13": "wFA2U7SGM2cioGxYGRqLP6ymjHLzT8HApeXxikSw7Gv1631M9JYSmcgyDNRcsg2WgEgML91tfF4hfXwEJUFdFQB",
  "key14": "3doMo8XRVpVbh3fNZ1ot7T36EjatpLBonkjvsgn7osT9uhSwqbUCCmugmd53evDE88z4ftYt6Z6PYZfc21ZwDRs2",
  "key15": "4XSdM9HPqovwRhpKe5TzTnyxXLqze2xe9X9F6Adq48UYQyQsC66sEi2fH9k25TQR9Pxg29waSYWX6VEyX725Xfw7",
  "key16": "3dVvJuusrH2VqHfuE1X9XeRRr9Gs4y8V4jx2bBhXHTcNxLmipWiNY5UUnLtdVHvD7fupp8whr17FffyxBDb8z1Ki",
  "key17": "2pKrBBcH4yqLZ1cYDzbPqhQh7bL9RnZwdohov6y1iajWm8nQKgpJeHFQJzNPR2Vz53wg54wyR1T36YQUXzqCyPSm",
  "key18": "4q9LNuX2ostZVubCT1DFPRnFCxWhPxYPcB64GSmoshQZBKXFLpFQ83DwcQ9WnqCCSz5ap6YcfhtKCYUiZ3QNAvw",
  "key19": "3G5x2jAUTzBpVjTjXxAcUhxQgnjwK2KDb24jAJSDQu8ZnxJ7cdSfuxJePfMqM3YnC7TLhh2nTzYCjwyMeuYc2zJa",
  "key20": "5vzELggJzooQMkZZQY5e67Pz8d6U94Dat61sur52L6bykncRfnpUofCBMV5edgYwwdTB7rydrcBswHNtwACUp1zg",
  "key21": "577yKN8x6CGYjcNsWraH6RTSSHoftB9cF4aJTKvZmjHmCQphciXUnGTdNdWmG8349SAh2UgyrF1suiV4xP3r9A1V",
  "key22": "2rspRprjcXjxJE4ASVeDBRFbkUEy5g2V3CnsiS7XWeuWDJ8HLq585pkS7ayH9M7cgFK9Z8gpZkMwt8UQYA2Trv8a",
  "key23": "3THrYFwwYq1tNHVmBDPs3w6vAHU5UY3zNpdrdo7kE6ZMncBdFe3HG7nTcAtPcxpfUn2WAEnfA59L2mnWar5xJRCG",
  "key24": "5DbWkCweVHHizKsfaRk2K7vGtqQ2dFf5MndLi5znaztow2YJV7Fcwncrzmpwix3XsV5vhQpLCddb2niycGziqmcx",
  "key25": "Rwi4Zu78HoWARSXTBd76uxks3mptjytTHesdwUd2NnV92xd3FB7e4EGbJQXfpauvGHtEfxMSURh1Gdkfx1dxUPX",
  "key26": "3DqggzKMgvDNSPr6NHDRpF2vLNVGVD6rbTsZjXwsQ9zLfQztADXv5RwKDhwkCeX144cWuczuCfajTkrr7TZ1yq8S",
  "key27": "3rGkjrPhWcze1NZLWRz1i9i6n9ba33S4uocQWm18eqz5qk8ZLvvKvbx7vw96LB6fpv2Uxz1Ghb3WqcSthjEiXArT",
  "key28": "4YwHkGydrKrpXShruUqroVYZvSkBgT6Sd2S2XbmVoAgav42XGr4hdjmjMmQQciUsVCat3XqKoqUzZYLPwDFrCw8m"
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
