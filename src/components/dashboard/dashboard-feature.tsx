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
    "3kNuPmm3dtBiL5sZBCjiA6YdFg1JJ2YEefNaP1QC1YfXGrH1xX7KHyWfMYJotAEQmdadZA6hJj7KDkaBQ3yQkpfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vH6KHcjbRajKVbVoZAd1ehsfmyaeCLnLcL7H6boiNyRSVjDCYaWrWV3ML7L8LMuJ1PBKy7EaTsqjCzu6ZTSqE4t",
  "key1": "MSg2qUzD6ch8D5aooVYq9toYi1PLdekUSXVdWtx7m35oKP3ACwbkLyxZ3zsw2obDVdBuDzVXRTqiLKX1W2CugjB",
  "key2": "52uD1W94bKk1Hai2Zqf9KECP6eXDuZwHh5XXvL2CADZhZgZwTwJAtsqgUPmia969eUBVhwv4j5ErKctf4qL6MZnE",
  "key3": "3uL4QxTe7M3LQvKS7YNxCRxUmb14zLWbihZnUobixUs8QX3LoxTM1aLE2osLtXk5u24eTtbUeb8Wx9iiZU7hsZPx",
  "key4": "2gAev7skVL3BoYqrSfrYTZBMyRK7QBh7DEyFXj1a4kY7okPFqiDy7URuQiPceE9HEsEMM22aD3DP3oPHjfrYccGB",
  "key5": "4SDr45nELe6XCdwoTak1niiaEdguTz2PckF2maz7fa2vwfAfKdw6zzSSLqgvS3TFVXSnBSPGkKz5b58avKr1rS2t",
  "key6": "3w75Rkzu1Tgu37oBVKCX6idv5hY3vcAUqoEr92baQQoT5E7idCGNBLTzGpR8Mfp2uew5t96oYMi6W9ujVzdhhEFp",
  "key7": "3vsfKTxQ7iWvzfW7YYkkMXK2cw7C2x1KdP96KbQMb4AT1XGR2RS2sAJQxnS9YCdfJVE7s25YJ83wDxw9JmaXrgs8",
  "key8": "5HQD2r55g4MQJRe5d8uMuBaZGD2ybBh2ade9Fdx3JSpcWed7WjRbMTVH9VL7uMi14oaPQxmeze69jqZgYTmBCbox",
  "key9": "5KxJfwG8mSB9vzgyLhpQuHuTXf3iJgB1fGcCXF53Pm2X17qqJUeYHzXEN9Ej3CQME4ke8bq4nkPzFEUKBFq5zx89",
  "key10": "2ya3ng8LzVWj5wNcbeafE2MwHt5ZgwCGmfGdNKpUFzpKwRNLc5uCiaMNnm8FGzmFwHvEpzFcvciR2WeJd74H5ViJ",
  "key11": "cpE81KikiSmx7HitYndgYBeTxeL5G5quA2NSveibHPzNJmVPWRV3hkX8J8k48azdoiwBb2BwMS6nU5TW3WYP8RJ",
  "key12": "53g7GB4cWNeoLdKYE4iM7afKYxLdckJoy5rAfACuAQkGNQMthZeF3HbLoMvNxwGkbgRLjSfepVM2wSpsTR6czjCt",
  "key13": "5FYNFTzs5WsNfgiN3nLDWWg7zxTS1akziy2qVj97kNNFdV8pHL9Shud5aLuxzZozUjwuKqZEK5GCQQenAbw11Nwa",
  "key14": "4Vt5L51YEnHFQwSWhQE3mKjzu5CsHw5pbFhSfXXr3DQq3RnePDgLNo8wDWWJt2LRpdcAF7TGy9C3MLXsLJZs6io4",
  "key15": "3Doz7QhXch5fLtHAieksfot9s9RW93RdqoPVTFjCdP641n8hi67YaNhhpaNQ7vizquRc6ei3h61qWaKJxr7eSyrC",
  "key16": "5kCFvU9bzN55fZoMb92qqrFkJfgsVoG8y7BZLztKE74TqrGH8UxPqKhJnjXyQSA73Y1rAxYhwthQifwZmxLJk2b4",
  "key17": "21iLGFXC2fhfvXfvaBGiT9NUtV3SnoMP7rwTJXTtmZHzNg1CSMrGm6zwKWDbdQB9rzgw8a1ey5FKU322zQpYwF5t",
  "key18": "vMUR61Ca7sxgmqrz9vsudoSwLZ7qjMMtwoWURsexWQX4wRmAKsN5dt7EEFwQkTraRHuvW24Cj42eCPPbnXAESNx",
  "key19": "5aVNfQeaTCmXRCJJ1dTFmVGgVQ78n9gKes4bQLH2Y6bpjZp2f9pUzBMcX43ejf73Q2dWThgs1H9uNpNo4eEFTxi9",
  "key20": "5nNYPT2Vs8tT5eh9wc9k9LXjwBc5ABPnHKxEdFG1J4uUYJn7CX6bb4uVnsptVRVcuFqMfAmU4ZKjrsJ6USiMBTkM",
  "key21": "4NSm1P3ZFEYFgPesGyaP4fNGVuCt6PzMnFix6gn1j7S2LqX3KnNh4Y8sGrrZ6j3m84bvq8ZHKsG8URvPpoiVXSwC",
  "key22": "21YByKMwGxsmsH23wdJyiU5AP3sUNQJpQfXyvFXabY2NjE4Nq5cgMAr5kpoXQoXSt9NEQwv2UMz7odx8S1FrkFBN",
  "key23": "5ooRm8hxTYNfJKdaJncz2tSALZJJo1xTU9aE6G3VquLuPy8TsVwn89Zx9PAS2vXVr9aXmybLxzyM4Qo1PoiRz4vX",
  "key24": "3zKRtNVxBdnGYcq1A8LdAmd4qCvGrLmY2LW6qkPXqyrdc2eLaM1AAVeHsdQDchnS8obrnapDHofZU6arTRQLf1GM",
  "key25": "RqNfvvWDy7SV6QK7crBQLrQd4RZFfb78GHXrfPqtLhunvopwwUvqtmiYbSEbNs7hoHFUjbbSyBazJVeQ2zaSxf2",
  "key26": "cHcsxPmz7NvLCv21wMyPk9uueUGMXXckSoaXiVXNzNb2PWJQM6vqDNnhCrEbXJYvzh5xKwEJ9P4DQqY1hpQZbSA",
  "key27": "3RDV2R6wZYQfp41bmvefn87921NvDxpQo5pyASQsauqPwPgLofqdUh5znocRpA1A127zHy2pi3d4gKjwLuY9PDu6"
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
