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
    "4KQBJoXBkr4fkMjSa7f77wvud95hAwgDuYxrr9UF27SDgZnrEPf9CiGDK8trpkq6enVnKejnXF8iFqM1eXkdDMfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTNAft6Wvs7pPqW1zoBDJqCX9AYXp81sQre8N2XFeRnVyuXiJm6oJygEgTC5FBc3gZeB1JtSFtr1oyyhy4HRUmp",
  "key1": "5gPysQeCJWn46jMZ7QyeXKEzoNNUULyoEZ9bWnbhZGQgRJT6TbPvSrLVcmMXZsHXc6GCFmBkars3FhVaLuVU8oET",
  "key2": "3YE73typQBFJiS475TmHczytSmYaCev72ds5YwMS8ksvZ6bMSTYRwWqjDWCs6QXjoeAxY8x2GrwKejdVsDUdTMp3",
  "key3": "3iGTCMDGe3Bnx3Nbh6ANTJmjG9DfUURBdt1katVe9CDmykpuCHVKagSgMX21TT8raKNdKzBHZwhTMwHdB3pqsYHM",
  "key4": "2UkvD1he7zDABKdTUeEKm1YrEko1ZkYfcQAUZ8V5xQdr8g1Wb92g1CLJYGwvxSj5hJXGGK8RsmDGNDkomAf2sYLX",
  "key5": "61HMuJFaQ7M27fzDCmAoHPKkNBqCsJgjG3s4RcGq9K1RhHEvymuiSwT3LRd9tV8Ne8AivM6dW8Go9cNugyX29kKS",
  "key6": "2J4fersgZNpbofKmqLx5d4dnRwzFVxsQe8KMZcCNLZKWPivgUfn8bywZ6bTwko8SF1V6x2Stf5A8c3XnbNcXm9jz",
  "key7": "qz1Q9wDFuPo1581yj3BiA5sHbYseXxZQqqorfmhQntcNNQt9xf9vzrucW7DkTr7ChgP5bSU1crR2C2F8K7V3n8P",
  "key8": "5JxDSTbuwXZ4poJ4Ni2DRcqPPKRVmGWujuQP2nrmj8uc8wPVG4WT5vQrCKJu4Z1oUQx4FTwydy1e36wM32BuwJEG",
  "key9": "2kRh79UyFNVEbjS7qsS6hCp77KMbyoJ7xwMeUG7iWshLehDVSGwoNCKv72wQ1iKPwxStxVXuoyRB5rzceuMWjPgB",
  "key10": "2TVBhYuFNGnrC1pVPoC8EZV7eesexw2JhDRdobn4Q8gew4PVnxrQ3xtvJBaiWMdRnBnWKRqeoJhXtaFRw75E6oZ6",
  "key11": "3uBq3wr5Zza2zGxhUZ3hxeyRqE5dNU9kvPeXtsjyLa9hQxdfkdXPQ52zasecSePSd2gEM73M1KzP13oDzVVdkzwT",
  "key12": "4rx9PktfX3dU5LbYEJYxqCDsdm3TYQKVrf6fLJ1NgGpcFDNfyAiBpx7aQ9zb61CcJdJ9bYMV32hgJShTJeibmo4R",
  "key13": "4xFBqjRgxDauugCZwk1Uow2pdcWpG3hqXnYUug7gkVdNRgQArgD24wmZ78WjMXz21SNzX196D4qyKHq5xkYFLQnq",
  "key14": "4upxaMkpygHRNsG8qAnyi9n6ks5mst49CmrScn5vruKyAQ9bXk5XPsrbBa2G5fpozanp5MWznFZ6XtXfKYRNbNZj",
  "key15": "8DV7JfPeSCztcuX4C8roCSzSrUP2N1RJeAE3DrgZFaMvbxw1EwPw7KqS9k8EseNJ4ky6CVQBK9cPjcY8xqsQ7Ze",
  "key16": "3TbsminijFm6nRtW8odtp2v4BFsCDvTtVjiPkZF4UMbN1sgu9giZFU7N6tLJJBT3uJAsWArX3gkWTXay1m2SVkGR",
  "key17": "LRzWMmfAYe2n1h6gBjCHbjUPNPrguAJPr5SMx2m1yiJXDwSueXzBFTbVsc3boPsN3piErctF2UxHcnaapDznn4g",
  "key18": "8U8yAVbkDtL7zXvE4rK2D4JaUU5SYW9wG6xjv4KGNfoDDwqJ9tqAQr7MDXVetpsGAAiH1ctk9u6ki87CyKzx9VS",
  "key19": "46fLUGPWURhnRuFbhn2u79GSCt3UgWHR6y42vC884x8eajyUrQCRNmvRKo5usXJwXbmN8mALAmyLzDmhtFNcrhLc",
  "key20": "3SxFHujBvBCAJSm7CAswyBqx85nLFS5cQCB93xf7oGsu4UmWrBAzJsafd4cwm3ErCn3eVLbLmQzw6nYWrXHbatz3",
  "key21": "5dd9jhbRKA6sEqtUdd3Qtydqthhggk51mDdSDCoV1nF1XhxL1JBY1e99p5cpZAcnoDjEWqYVEzev7BT9uHxWbSQo",
  "key22": "3rss3hacT7jQv29FzHL3KMQcGyonD75QKqbBa7Duc4TvUWGqVBo2GEARV8wvrJetr8i67VSGEjMCULVpGDiSwY6T",
  "key23": "4ZherRcCmXfHUTvFzppeAx6s64dyAcp9SNWygC125a6hT6n7pSamSp6K8aCzwQY82SecbjpZ2ibwfaLicgFqhLWN",
  "key24": "G45QjGiZa53VRWZ9uLftvPkkdEs1QL4ZpQKPWhKvJ42EZDDuff4eb6zpmRV9PyrrhCbfiyterY1XUmkjK26bgkj",
  "key25": "4Dm8Do4dv2b9SVog4mA1W26u1EamaYCvaX9w8NvYxTCrkxwpr1RDf2enSHf3EJp68QQv25zMF2kVnaQ8uvw3Ae22",
  "key26": "bu8B28WUB7ihCaCguF9qogffUE8oKcPZTq3MNTEJpCNSbDWXCQCs6rh3dMoZchknbZVWcqLR9vFWyNziFvW7w5r",
  "key27": "37c1sWiffnWoEdgUDg6QnkdShQTswt6RHuT6HWMkziSFYA2fSi1VCLhUNJZkweFqDFsVGW36P84pEewF2GmJr58z",
  "key28": "25w2uTVJE5R2mGFLfZWRGmA51oMMv4j6B4WbLRin5jDHvasv3uZsxQPECkei7ZqvfMu1WHDckVRnPpLVbGGhR3FC"
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
