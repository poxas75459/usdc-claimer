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
    "5aJwmYuMVGMBUJdnXru8MC6XvNqA5hBmFCBH56PAw3Ac1LUNMeZLrzmaiuopD13q47k11wgiMhVUpkTv3FCWVG7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nY4m4BPpHDBZfBfPsjdTbdRAvf4G6MEBQiL2XTKKQNSsh3bsywfVvs4XmNfPdzjZnHxVMUheB6WEu3sXFspC39R",
  "key1": "XphaFsa1JdQ1iqdbMzcC2hpytnuCsphRCAJUA8w3BTKxVJe9ztoKisdfk2hQaCxrtX4RVd7AUXYNHUseTMtTxvk",
  "key2": "4zFnLS3SwT3r8hU2NeBrgDfwfo2c9X8UoNE9s2HmRxcQAywNWoaXAQvcnNXyoTLovEapffc73FLCtzyXyL9Kf754",
  "key3": "3zndDpKtg4BPtcLT3MVRzQ3fYMJ2f3vubdWrN49ajUkgwPE8iZkn2jCXouozQFSHz3bYn64nghHELq35CVFwsUcP",
  "key4": "421kzvWUrrP8e2f8rtZEsB4zXc9fd6dJqCMh2Hnvg8jtxvTkAqYbA57HUjo2jzeef7jRCzQtxGPZPJ4KLba8tyAe",
  "key5": "3LmejEbVbt3NsAGDgHt6cSDiJwEBJfLeTNGwahWn6GkQpoEfHTXXvLAs2bNY7ECH4bGvDPRFCzVZbo2ZtcCcaJk8",
  "key6": "59NaVRv3RnprPNa7FRDtyjkoVfdRLdd3E1c4t5XM4ey3eiwev6fZjBx2ybDEyfimx4s1kFhL2jJkgvWGCsrgtonc",
  "key7": "7cggWHbr4y1UVzjZCCQ9vNzKFYKW9xRaLgb2GohfZFc7GQP5mvX7awoxXUKHm2eq5hTdN9wwo4DmDbtCce6Zb9T",
  "key8": "4oaXm99yAbroyN7EpSVjn4VDZ1xqJn7AKmfsdRGF56WReegk6Qv7PMy9ndb8Fw6EEyX38VMwnTpHrJyYf1T8HsnS",
  "key9": "5kspqTXNtzdDNPn23F2VmVEotjjQ4k1eQpMnmdTeaVkiMqWfXTvapttzzgsT4kSA6uzt8ANYEs1iicHSzCkLbLgY",
  "key10": "5iGtuzqwG5L69qFnuAw8zPWFRS9VMqD83qdNJqBAmSiEzcGcgDiNePQV4VmT2skWq4n5cRxdtQssJTN9oUoypVpK",
  "key11": "3nNW6XixVPiCn3QtF8U5xBoSUW8LBfF1QVgkJcsNqHbxvmPDbGCr31kzrf8V2ZYs9Q6mSfmc7kCDkwZSGjQfTT9Y",
  "key12": "4YZsWcovdmASaNHqwWQUrVKpKTVBoRNb53MxoPdzpyUBQ1Mh56xGXkoWp1JD7d6Q4UZyYWCR6pnY7km2sESJnnDt",
  "key13": "2w1vp7NWVCL8WhrndcUVkMPq6HNAg5JnDHTTEPTdKWAAmVMpuDDUqkp7HyDPcfS6eTfdL38xtgmCkyn5RJBrd8pT",
  "key14": "3qzM4ZWSHwXeCXxmCsfTm6LPmUbjW6aAc2Xg7KC1WaNjLARCaVMt3ZVP1m2R7a5xfDjH8C9dZnDSXub535UnPZQo",
  "key15": "5sXvvHgQt7GijvtEqhKmy5m2yz5cLQ6rzzKwUeKu67b4wc4faH6P4owK4rvUL3y9Xihsx9FFQ7YC1EeUVwgL52k6",
  "key16": "4YuLnUgQ2iVGazHsPpRpPMqDkPQphvzdJcj2Fxe4XKJw7hRyrhw3jCGACyHe9XAjBfiSS3ChdpN8NWiv6hyPpNf",
  "key17": "3Z5DbUhfv5TG7G4iUQDqGgEa8PLrmepuURYQymh5nha8aPtzJt81ckeREcFgrKRW29jKw7eJBWkSYQpvj9WGjFsr",
  "key18": "yGvzjoHevKX4sCWc3rYV1iN8SdpgxJFZoXqz2GdeapjnqSJ7QaGyotRFrep2qjQ9A4SQMGmvErQV5fV4wrRZqrG",
  "key19": "4WnXdJuaTTXLs3zrwD6Jah1oPP8Ycik6PUcHXec3SLGdvLnSLQnXcarNKGMHp3i67zGvraf3WN77r7oGCb3sqe8w",
  "key20": "5unsFfMUvzNMDdEcDJAGG3KNJ9CFezgNMwX83Cjq4JDyN2MC79SLLCYNKW2wrdXbiQfBfEXsyqjr9fSi8xNZms2M",
  "key21": "2sDYNrfbjNqtsH5MgNfQyUD2e8ZAWKNufqncdEdXwJLBkzBP5ahcgSVX2vNJHgU4tqpzpviMYoa9GBAfWY1QBZ6V",
  "key22": "3KDEPDExB7zSka9NzPU1NJBE7JGXh5D1Fg3A2iuxinx5hNPfBBrPMuUjmuim2rBnNwVJJwNQHf4G98SSKoivNRnq",
  "key23": "kMtWpiR7oSxACUhyRZtwqiVnwzUtQdk3bU55ACUmKtqJ4rnvUqtA2uuB79G5GWtcJvrJiLkYGLpt99ebNELyt3g",
  "key24": "4ymFFYQag3EKKmHgrQXk1SHNPPdFxGtRqhhPzVZFVm5GzntbxtGXQUkMeLVFFSMUfUJQKs5MttbXX3nLjnepqTGj",
  "key25": "2hfHWpzJtzVBkjSFqzwU8vywvYaw7fxFNNch99Xk9X7Er9zvVogSC6SiEVnLVc1BBDd6k9g8r3jBeyENxApAxCNY",
  "key26": "3Y99gy9UyamowkmiECbnHfAYUcp2hPb5HBWQSMXZGPak114dLb3iRMfG4tDHQMS4Lhn5JaUJnFnCVzuZ5xCZ9755"
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
