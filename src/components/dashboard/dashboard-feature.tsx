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
    "2nnrqKM41hCNS4CoFZpQveTjvNnJX6MCZBzmmtg9B27YUxd1JDiYajjuhYvCZKK5UzgXgYL8fJGXDGa8uhcZfitA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTgxRinRsTuMJ9VfRLpZ3ZFK3L7X7KjbKdZR3shBWLwD1xHLrBphPRaHzW7UxAdyu7Mqkb8v8WdgVcR5tkMyw8g",
  "key1": "4VH7icKEJRCSEeC7KsPhfN1mJW9bNEveqARqG6p2ZxrsmsbkY9TPoR6D83PTaXhdNrhcJnKqCwvSUhfacASSkpkV",
  "key2": "5hA4n1ygvwx5MQsgwTpjqMWCFfxVafMre1ivsek4WphXESpCDuNa43zGjpVzFjqAPV7JXXnkjPW7xRYAkj3kSJj1",
  "key3": "5cR7acznXa2Ke24sSo1sd4boQunfA1y97xArCvQZSJEhK4Dy1sG8PSemFkEYZBPXBAb6DuqEx52HSNxe145GezCV",
  "key4": "xGfEePQRppZutA5AEEwrKwpCvgDGBmXtbF5GNnRsguj1WQYeYydveZUsiiqRGqPeZCCoqB56kNRUxRNBHEGUfc7",
  "key5": "5vy1Z69w9yeCMxrbX6rDoxyT1wAs5RMghWRXGXVi7SqMBchaxY4WpciP5dx2aw3AMiMN4mk3cazEb6eeQoqYxi8c",
  "key6": "4Lqsti3xZjU5z45q1t38xTNnCMGx1BN6zbEyfU71fXjVvnfZmosWuVJvruCrtijA9hxKLNxU9s7HCwFvr8tyS2uW",
  "key7": "52x1t4QTbH1u9C53W5jbrCDfkQfSK72insgCT6K6cRL4VeNFyKA5YvhcxoUNqND5u6sgq4Ugyh9ayZ1oSHFd1Xp3",
  "key8": "2Wkv8wZmsEpJoUjVMLgVcuvR2DjtowtcNzv3yXvqK6X2SEAFVcCwXgWD8GEK7NN5e51tgCgh9r9TU6XrphvHLawv",
  "key9": "5cXZaXbapt4ep1EE9zpVtSngQDaeTUpa6pLAZxzgY7zXisKDbZGKJZMVHx8PWw6GGt8Es3MShFPS2QZGr9P7x8XX",
  "key10": "5WaW9sUcEAkzLiHrripuQJ241VYZp2TKQ5zGWGCRDAqJ7nN9Zgf9AAqZbqo9vRkqftcMvqGGf55gW2SPtjxAbopV",
  "key11": "4DVsfmqVHRNJ59HdpAXXbuiRV7WyBgeHJdk4CfveKF825gn31mSYT5XmYC68gRSotrfEXiaPpKUmdLgEXoumNSvz",
  "key12": "3U35XAXuk2As5mrr5cpffbFdYaXVKJ6b98zzdLYNnp13pvNqkGf4pYsSmbMsU224UV78gXzwkpc78Ad7ss4kFFXg",
  "key13": "2vfh2B4LGFGsKwFbSiQmSLavNc8fS7HfCbBuGpVEnE843bJuzmocRfYVzGaocWwb3iDGzcFHXxHnKmjtbYK3a7HZ",
  "key14": "Q3ZtEt8MMTWp3WsjtNKYuSJ34Us3nzMQyMVJKx51pfKYVznaKgHp8pBFzxkMeUQWDnsAEXwnPcVdvA28Mfz1RyU",
  "key15": "3mxMUb85UAwq8i7GR7kGF3Q9D9FAvPZWk37QT62sy8upZqCF287WH5YMN6zmj4zJFgsdzjtjPEaHe7cE4Vx5KwM2",
  "key16": "2Dhmj292yJV2PzyERvpzyhe5CYqqCzqQeuoXxE7FVecSSF8rLhf9EjYRxifNSyKdqhqJ628B9Ak5TCTh6yeYhWVq",
  "key17": "3qsRBCV4dRsNwegXxVyr4XdJA3yrUmu9H7su7qMtyJNDxyBTvKs6ZKnF5gXtDiNqQnHFuVkmMCTTZ63hD5Q9vtaP",
  "key18": "UBJ6wsHa82NpQUrxgrr5w75m9kd2h1xBYnWynWqVGdrAmCj7H9Sq2MtVTXdZGPSXUhsyajNPGkNMDf3sVH59nFE",
  "key19": "27bLdZNphqbEB1dSdKUJ5bxLqjb6RuWPQLVkKiNKmfDxaYcc36EQ3otXcasep9V7nauKtAhYfwN721TVUmg6rz1v",
  "key20": "4q8U6r8oEcxPztE8yxtRG4JadyqQEPhf356Q3YoH3TH5iivPG7z2YajUzVJB1XPc9iu1PxUyusSXsW78QUxALTWG",
  "key21": "57kny1ipJAxHAten4w66ceFyj1z3kLkG72FPb91rnaXJaMcPxceRZUxJsg6ZqLvYeV5CxUWxtcLMyQ9zttYLRhaT",
  "key22": "4ADUFy1RBfSghTr7oLAFAji3E81U1rwzH5NqrHLnp9g35qcKwFGnbRnQyqnP9kYfTASd7di7eqUGVMtnaUTVSJE8",
  "key23": "pUHKLW3ccAcbqLWV5Cs61K11HRmfKH5Zjas7n2ofU9X2jAD6ZtVtWQx7HFJQTKG4MyK1mXXaAFDT56oHjHY22Wy",
  "key24": "3Cu1opRDVm1W2PJcrkyCBiypC9LohcvMV52JqTE6H3eLbjzUVsR7NLQVmaCe4A24VCM54NLJ4vLXs9HQ4HGQd81e",
  "key25": "3z9UVPE4YXpNfpyi46gUUjEc3BVcWaH7t3ec2PpDRgGrN5fQYXEjmm4nms6hvNwYMuVJPuUHGKU4okbpRorjw5mk"
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
