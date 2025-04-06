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
    "EymcUNKiyEsqTrCqkg29mhQnsKUxgobjgu2gY3y5BL6z1pzHnwckqbDP1V1gqcLerccDEsqDMnWcvGmMYWqH4ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQLxWdHrptKr1pS55DvHVVMLCDh3fm3m9M9y7ovJrJmUVRjHSWksL9w8k2WfyF1kRmjFNNJWNVhUodZdMUVTebk",
  "key1": "5D19s828T3BqWszZz2McCF3vBUeQpjarTLEdijvV389g8BSewaTJnCUkcWQ1WT5S1ozF6S3ex759s3ScoFFfTwec",
  "key2": "291revjbydBeWZj51Yboko1ruRtEK4DhomYawjXkP4mCxZEPfNGfuSp1euEQieV8ikq2tJs5Hh2gC4m2z4Mrv63G",
  "key3": "64tB9CfmnjZmmvpvHG9bsFhJNuvQGJGPZhX6i2Rrnd3nZrgsFm31pYyPcPPSkeujRxJTLP8pYWetcDgjCnKGmi7M",
  "key4": "3xPWh64gM5bAEBoz3v3DpTJe52TdgbEJ9oqhbPvr66pJFkvnK5TDDxYVenT1qRf86HNtHGyoPKcn4cG4oJkDLmaQ",
  "key5": "46TajJSntUHyXgwTXH9SA6h1Ve25oYKEKDTZJ6ms7JKRViJPRZT2zi1niiCF5GbsmxikNk8anJ4Cwzmze9ubQDnL",
  "key6": "4aMGwtx4DBDyrjtGMsjaZU2fBhQuJqvhoo2PctkddQBFYPQmfqYeDDER9HhTfgwd25u7kpGtxp8y77eyhH2aJ5Ux",
  "key7": "4EBoxzexaeKiPkXnMvtpswABUx98JYuETLZW2m7UvUtoMNnMS62MGAH9Tx3hacb44uEL8eWFDTpGL9fd7AtuNiJX",
  "key8": "5pS4cQNs6FSQEayPXRonAvxkKxHmAoDa2Wbw4g9Cq8z1vgAzog5smwDjtHK4g5gebh9AtKHq45KF5xz5mp8Jdmah",
  "key9": "31LzJ8qPdPcuRcu6Cs5G16BtbKEEicwcEJU5tfvbq652rHC3jVWT1dgQRtsv5ffnpuDZSG4hU8vE7sXRzvmsNnTe",
  "key10": "53yj21bjYAtyYYkPMZnro36fvgct6CGMuykGqF8CMYB9jMhdPUCXh84dp4Rsv97tecgyT2DVwE9iuaDpKr8Tg3z4",
  "key11": "2u6WhHS3P6uRAN5cZfFoN4WY1rkPQBas7YVtvLAmCRRzt9pJA9tKAsz85bG8tFvy2CCMN8TV1UjSA8h3W6MHXq35",
  "key12": "TJnFsk3nTbnCu3cnatN9ihKFdNBMagFhNnWYJTpA1xQ5pBtnaVDqLDv1cXuPCeUZ6UGDWmR1rLPs8ks9mFos9vp",
  "key13": "3cMjHoMQxBaqbeT2NRGgBuWML3bYVQoWH81NPE5m4RqZP6QDfRJGNxg7Pm4uid2NK1B2Z8wE94vL9t75nTqsXmn5",
  "key14": "4UKpPg8c92G9MYwYnvkpufaYRfWzYefBPcpr3E8W1zyTfqwKkQFNDyLwg3B3sK4RCD6bDf47HQCvywc28aAUgBKd",
  "key15": "5RoNX6tRWwEAgVF8aPGmMnwWP2cmVmEgTQJxTP9axRw6m16pqMukB6arG3wSxec36mWP5C9hFeHDDhP7HLVWSp3o",
  "key16": "3KYdYxYcr9eQbGEWZwRArdtJZNhJ8gAG77tEyY8g25fLuD4CHvenno75UEa6K6ACNVtejVKqo9AeryB9HUpDWEmp",
  "key17": "3CHGLbBrCttfZ6WPFrfy27G4SAZmVE1NyAKyG58FKY1aTfD226Ko5TrcfiFfWJAReKqR1B1dYS1ih8DcoWwjZhU1",
  "key18": "4XLEfw9eGP7DneGmYWSQ59nfBavpToQmvvRTUv6JyTLLaPKPeYtiqPQakQYnDdheKENFJP3MXFgGoHs6LtZWksRx",
  "key19": "2s93hEGwPG7WhE6u5s5d7roUzRcPEMqR72FGuhipNS2Ky61R5nE9ieF17qDx5nBWiuUXcsRVihLVmxXcn26gRBRL",
  "key20": "4Cri4cR38mjKHf3Ua6EXnZST4yfbTF6uoPQ86N6b3Fo7oW2vbsnUjqTw9FFgfqkFiSk5j5Zw1hKRtbvyezjkcCS2",
  "key21": "5edJUjMc8NR3QJcis3qgmhLWrBoqMAJXL9GoPiGauXtw9jYaAYHFcKK134szYrehP6Lya9dyj5EkMkDSdj5xU2LV",
  "key22": "4dqumCVzzUpEdqA1nsSZrYAJG1r2HncKpZfMT2gXoY7YSUGXAyzukwzcXm2KrdcmNMcLHEiuJbzsP9QrpfZEc5na",
  "key23": "4njAa4TcZfthKxjGtjFvSM3frNQfsnp6DnaC7NQnKT3izNJZ9L2D8kzEvLnfFWwFQra2Hz5uqeUox7TJLBHVvFsD",
  "key24": "5J1pAdyGWUQepe7pmEXmPa9pTgnU8pXFGunpB8gHLGkA9VZmh2uEtCY1aL8Jk9dPX9aFnU2oncEV4xapixCsBJo7",
  "key25": "2zLTBQ9th3TMWiram3MnpGoP5vyCxrDZ8tbUpyhGnWgVhEi81nBoJUrebEwdP1RcsuwpBTtzWsTCEFR1BQsBwwnL"
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
