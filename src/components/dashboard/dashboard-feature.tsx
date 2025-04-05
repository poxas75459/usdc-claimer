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
    "4Gs4pYQE35SCvQdFweT7Y62iKtpRJ1A1izbewRyZ2Fgqmnvi8z9aLTfUPW4vXzXaXusWDPedRC1uYSn6YFSzhbVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BrRYqDdofMkgxz5feAUzyZpsYv8k27cgfHcfrHJrMSshBzifRYsA9fViQQzRxXhKcWPu24TZhNdiC8nF1vWZW8t",
  "key1": "2yPSpt2x6rCABecbndZNqBG8N9bsSJKkP3dUELApZivquV1LRjVMzwKZWrzsapRiTEgeUNMZeGBGMFVHuiii72JK",
  "key2": "2KkPjnVszmmc59Dn7AEWYQFXJv3zd4RHL3GxhMqWaxJagbCGWyXr3sFdVWCqH3K74VCcYxaFvojg47crNEVZW8y3",
  "key3": "417g1QYNoZ5nLXQXhYdDaio86mz246tvBZDCZAe1EdSaH4GEAa5LgMj8fkoVP7zEa7cyTjirhvm8LBS3j4pTiKyp",
  "key4": "5PKRJsFnMkvxdm6Pm6wEhk9XgS4ShdYXUVJFRtADcT7GKkcDY2anQ9mtP328AdzZxYJrYTjBXnpYeKyGCCFPMRpE",
  "key5": "4nGh5m8LFtztEhFYCkXgpyn1g9UTKfoTuQpjJWVWW5ExXM4AuLN6HVNVvJMkKv3mPs8t21PoTGkgrHoauNRQR9Ud",
  "key6": "4YZ2vu7t7uX22DtRa4kvsb5WHeYv1y7osP8L1HhHJic1D9Tg9JC5imPBet3TGWspwp14BU439eDZTnQkWKaoibSe",
  "key7": "5SQivMbXU3b7in7stGXQceCnXimQwr6s1yxtF3PURZkwBGD7z9JVL4D17QghtPgY75UL34i6WRTHsQFVynazJNcQ",
  "key8": "NNiivNejTuQy8Hf5cETuKKTUe45wSdZyknko3QXajL1SThNERisjCFbt1rWXWX5n62qNcTNm1oSTtcWXFybGQ2Q",
  "key9": "5tTLUN7zTAAzFJS4zN82fdSuuYj81mB4FtNouPDfHNxyC2nR13ZqxwcoLsYEQByj8JzmbXjF6DPyuHdYPPbE86nV",
  "key10": "5aBAsStjh4ABTXDEJPwMW1N3hmgQx2tkji13gUT2jogeqCJFrXj6bnQ3oewbAhbKGsAYuoBNeBHSqSSmHeHiuaNd",
  "key11": "27qfv98U6ApCgvBfFSKmS4x3okG1MiNhCF1D1PFkXJwargQZiQRjbtUAqXQmB9BXzg5crztonRAFrRpx5StR7Dx5",
  "key12": "4NW9giAPediVtVnkURTRWtB3YVS7aFJQZNNvxiCjDE7WZLBwfYZLBXjSPumVp7FSLXqr1FT64PExshbpw73afAi9",
  "key13": "4iAVgVtT5KAJXiUCu7XhZ3kxMUZ96WCNrTJDrzjyVcJTHU4EFZQ5T4sgHDQYUXAqiNbjQcphWckVcotUqhVVD7Km",
  "key14": "4fPbMnw6yXTooajPUKhk6u5BGWLqhRqBnhVawCmnYdJtAQRK6aYoqYHikZoLg5ADM8Ed18w5iEoWtcywKSZRnKoB",
  "key15": "5zwAdknyvCauNDkK8WVfRj7HhMtFdaUMn3Roeqq4JKKmmQSuSh4AeKskCWqWQmD7q3mtTwpgb6f44G8y2G2JJCrN",
  "key16": "2a5hM2a53GYjm3x4MLKw7qXw8f7bvunqBk2qM1AivTshREGfdnCWQao6ZkbdMz6NoTwtT8gmLVQChcstwdzsCmn",
  "key17": "39mseKAP5fnxodottwJeKVb2LKmvTfNtdcjS7Q3Ff5uNkgY8LQsfGPbimSbShrCvCF1awYMzLCsmLKwrenBWmSrF",
  "key18": "4ZJ1xjTinXtfRGiES8FH3RY8acdDNwbnEUXqFhp7ShrsppsqhfN6ujCnX1X4ihKuq5MYedG64GVUEvABNpGvrMmX",
  "key19": "4yAE476qiSXjamNygtvVhdXKXhZc3uxvt2fdXvT6HF9sPmg9sLBjbMM8rgJ1WitRSHADn2gWRM7xgHGiVP6UbGt8",
  "key20": "3xjr27fYMtTNbzaEPBXXzZCHQHWriGXuAWiPZkx3s9MQsppUtEiaD3kEGpH7RF37zod9k7vezup1CFpLNPMaNEPY",
  "key21": "mmXg3qFUCnU3m4VSW7YQzzUzXmwuqHH5UJsyF1FYqqRQ6YMrZxjrYuktKhopYbPA6cfh1pcWrk2Mrb5Kjq4mSrG",
  "key22": "5j88DuohK3xEYiPhZog9YC7BN2dMbUvUvtnM3uWwSJvSpF82i4ekmPVB9DWs4E6nkCoxPNd8wVHdDsoh28YxVxZU",
  "key23": "4CcMojBpVrZYwp9fhiF9SQZasbfbPjquosa7GfwavJE1WC9AugGVH96fthVgHuenb97n3HkUke8n2TipsxpcuLFC",
  "key24": "4XXKnzzrPQuJ7yJMtpoNzfCfZEUaV1hm2tJcgoqCARjG9RJ6JqEdBpDGuNuXk1G8cVxPLfGiQjRbdapcgcu553tP",
  "key25": "2Bog2xBwusHUBNyBXjR2ww3bi72ujSfGPfcwLTCRvjBCNmx1Dm69fsfPTpmSG7PR2LYN5iURVnafLiP2YKCvyRb9",
  "key26": "4wnpSbRHC17U7EyM7sZJq2PnNvotnwkLB5Jc9n3wtCXT4oHaDrPJWQcaRpHCP9aQUv8tDUFFGDjKuupBJHaN9YUG",
  "key27": "haVpxj92JMfBoiymGvV1n76Kkg7XpRYpRHKT9FeeMnijVKP87UJwYYVvgrtNs2ca4mCguCRFxwQMMATJF9nWmjC",
  "key28": "3Bgps9GDFajM24CHEUwx4yWZKrFrHdAvc6f34Ls8ARN1DZC7QWsX5aLSpZ4DVrr9PZfo4LJqMUafnaERgaoDJ7FX",
  "key29": "5NAVFaYgj73MjtBk2KceEVwdnUtC926BfRkh5ZyJsb27L9ink5mXNNvzNTzZyoZZiKPaJ4VzN8BxZJNrxwQZBy2z"
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
