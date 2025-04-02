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
    "4WjhwcM9VRp1hFDuXpa9KTFuDAJmNrVDU3tKMxPFZAQNZckDYninuMJzLKHNTTiosLUfvnKUXN4pgJeqUq9v9seB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wfw92Bqt6x1mZybnnFWSEHQAVvMj48YEmcyapBN3jKdpN2bDSHAsVGV932sSH22ovpR5DHEtVSsMQ7hUxPSDfB",
  "key1": "4Fp54w5TAryQawKw1z1nGSxv1rVGAgNxjLYvfiUfVFkZhizARuozrSkz5YMNiMS9v7vdGFYMCcr961riXFbF4smx",
  "key2": "5bUwDK8FRz5qXU4zgi5xEYdaXUE8uW1HfNov256guUmhBr7egPYAw7M3gwZayFZq5KRUGUrkUdCE8ZemiDDNQkU4",
  "key3": "3uSViN1FgfUdws2VzdmdsJDu5QE2yCei47pNdbboNSkBE7R1mzv1Ji2X6nvEyTVXRzeMhNztThkLEK6Xr2tLeQ81",
  "key4": "iWy7AWHRoQ3DM4kDbiNZaHhp31LoMjoszSUps6b7DEXVp7AzazsqmJNrKVPKaFZVA1T8MLUxYPk3xv3jGWpBTaz",
  "key5": "3ttVujH8yZUiUYpsGkqkxXqnSK9zqvkx42iKex4U1pc2zvpGnTErZwrFSLj5kpydiWxcUMuN5cJZyc1gAvKfWuYA",
  "key6": "5ULjVrLB4cjqxuMypqM72ZsMvLe3xXBdkc9u2vgb7DRb5WMcHRB4gaD7uXZdK8fm3SB4qXe8HNamUJFvPVVDGFcY",
  "key7": "2PMaQWbUmeyid72TiVF7F9Yrn4KHjovwToV112kBCQnDwo2LpvKKdC2WY6DG7H44ED8RsAGqDRhJ8qN4xL6LDpp7",
  "key8": "L2UTSL4Pz32iwPpMRBQuKqvVaKEFZ6HRJHoJMafgAvfLS2SvY5MSrze6FUvc9wDDUqcZH4U41bqthzCgKoAs74u",
  "key9": "3aMcRfyBVkVo95PXpAtWYywr6pCgn7fdFo16ftjCZCXpYQXrDdxm3hFMpxRof6rZxanFq6v3pxnx4PLETAkQAoh4",
  "key10": "2GFjumUjPHToMfpWZADXdGNXZifVTZXeWWrJjtCft9Qx6EYpKSYy9YeLv3e6h79RQcSzofwNbdQAHvjLBPPV3MqR",
  "key11": "4oh6M6AsEEAyoF12uqtnioz5mJqZGAQgDfARzo44qKVi2pnN8SNvjXqQGER1bRdF3fDmsekD3LfZJ6s3HfKFUGT6",
  "key12": "28WgoPCSHqydXfSXie781bhcZhjSGaMVbhTpuYSLUjbdHYG7EgB43zhjqSa3Pxp2vzokBKnCPZ7cdc9NbYAHKr3U",
  "key13": "mWkzJFYFXjZCx8YPJxMb4zdBbcaX7hKQyH9YianR5ABzGVt8WbJS4tahkbkXruLTyE18ZwLDgJgERCQss4FxfSw",
  "key14": "4QjjCAH1WzisSP3fjQrLbUfZmUmf16TxrkgaJ3cbGburPPNvKb9QupKBYXxUeF7FDhwd4Z8HDSKmP1KWXHsRP35D",
  "key15": "2EJYafSGqLSekcoaMgHDYmDxGBvzsUiJeYscyQsJ9DovhXGjgmEyjBtozvYMkKGgNu85cFKSQT815skr56BfKu1G",
  "key16": "48EX3MKDas6KDg5WoaNbdVNBJG8kFGrf7enAmk1QvQ6E1jCjpkgC81Dw52dYxxqvcP1Ki99YR5mzQ9mvKrTcYZGX",
  "key17": "2p6QHC7CVw38iPT7ra4LvvzZBpTX8mTFuwFWMGa9nLMraeTZizJRQRyWCVZbwvbsypxC9MmhbYSf2zESNW2PdqGm",
  "key18": "2PMRBNjXH4gV7uTxy4mfeTnRoGAWeLwsjLZkLzgsjN92hT6GkrtTHsffNpGVsDiLLq5sRhBwYVN3xVf7fSMddpCt",
  "key19": "3ZBucMo9YPz4iEKFSCNvSDGtFZBwGF3bMt9EYcH7AX6NboeH6KGaK3sF8AVf34dVYS4xePFTZXskuPKTg7o6wAQe",
  "key20": "4UMknQFw6a5cVW3gwzi1bearP7t21RJntXJoAhNorBiw5wXaktbsdJYJCdVzYffgEPhejVK6P1EeZfsvBYKtuQWX",
  "key21": "fJEQQyZ1yBWCLnMsphXdz9HEBqGDWiD4f5LC8p4TvdiKbWdPFURe2Cusgc7higTeUKrme1R2nvkUmYxaeXPQPzG",
  "key22": "2M6yaPYjRPbfNLurFHzTgZk17KcRmaXFUtniFZFcu3nESbcTjvs1tiiPtZ5iyaAHFbwQQUx9FVT3mVDeLLeeYuQ2",
  "key23": "6R9KM1hPKUEMmdHeXEqDU9rc32zohWYDbY77dKTmhbsfhPtB1CZaWyZfDLwKtZqxi2A35s18dwK7uc9f5fgeMjW",
  "key24": "5aM9u2s8odghL7emWqdrhKS5mTW4vv3gzyZCAbqTnYrKDkBPvuuLEN2d4bE38F2TsthJboT85GH1nSdGEJsCPNUy",
  "key25": "3pmsNN1dDdFQo365i3D2ndtvHc4KrR34YRq4C6AdyvPCxnBs29PJWfvXirGHuZewAjnF3hRxR24eyEMpbp7CxU3d",
  "key26": "5zuMxXT1KfXyr9Hr9Kgpe1FyU2WaR593MXnSkVGAfrGNZaNwgDvrVkz5gA1CMDukP82RkL2YfXez8ZC3V7uJgacQ",
  "key27": "QzjvSCTcvEBZsvxG459GnhaRVPvhzRyVD6TrWhWdJWcUmsZaonfUzBDg9pRbHUCyXdA2wLjoVXzP4v8ohmd1FJy",
  "key28": "3edPoQHGTQYH4fsxhzLDpLPP8qJvZEfygruusuzj1ehwefUraiaC2sLojZaKBZdEynbVWyXWPg5An26vSZTVtay4",
  "key29": "3iQpKURmij68wcEGet6FQFBUyAtd3nndKBPZbGZJ4bhtc8a2nwNow7FQfNGFMoCDoYg33TjYgjMTHN4KY5fKoJHd",
  "key30": "3JKXGHvwyWWriKnR5wwp6ZWmvNrDjFjshUop6NtArVNWZq55w2p3jCrssvCfEsx8vfJSREEfujL6rDWrqySZdAd3",
  "key31": "3YE1LBwkeqWsnjGKS8Su8VHNv8hjVdanHLRw4r5FWekaWKedbjqcZeR3CNBSrXTLDnuu4s4EgVQTV3YnKUuNzy74"
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
