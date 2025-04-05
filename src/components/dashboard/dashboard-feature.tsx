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
    "kdGQDZpVcPJP5gPadABinNxzGrwT6k5we3xpMYRvp9FoPVxkdZZYYCUoMFGx7Qx7DhcNJNSDCZDJVHGcd4QbprT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvtjE3xJ5KLorhrS95aS2L3rA3DH9UmvwyHKuX7UjweFJnUZXzDMKZbbZWknpsdvtcB87DrZb9BZ1XLNy53Cohn",
  "key1": "c5Xzk1aSL96A7U9BAiMPkp2L3Dqm6Po7Df2WZWA3BJvS3Mu7Ej4UzirSFdjEA5iWVFLMbbs8gYNfKCEFkKK79kb",
  "key2": "4ZwqexzXSxGVUikfSht4HRMFxsGavVdi5UhE1Q45Hy4MNvMC5eKVjppk3j1WYoL8aQbvb48KrJqFw3hXLDgjGnAw",
  "key3": "33bbjFQT6DQJYP5M1CDwRJoQRrwCaz8czyp79YZ3DJp3A7TRDhr1VrEcF75uQmrznwTNUSwmCfVUMYUV3DWC5X2R",
  "key4": "66EaBFZYKFiTTiJeFHbHdNWtPRytuGQLXnMgroYeyzxf2qmzCUibUheHN11mrwHSPKMnfjwUgurN1KMvVNzfsxNS",
  "key5": "joWEN5SSzadpqozdyDCEFS6CZLuVyS66WhaLHHRTN9b1r2w9m7247ZDNdAsCccUzi9AM9jAV3jaRmb81rac4vtK",
  "key6": "4dvfwisJG31DJuequ4Epi28cuqmYRkTVhD1Bq6Qdie2YvBCPzvw8r1H8GEgrSohRVZRkBpjt7FiyMV4WgWUAzR3Q",
  "key7": "4DUEpWyiNgdjAhgbw6zbogWhFo91i3Xe1ZsmsAC134578xwLCRfPQPRwmcuM9fa1dicUjGgVquUis5VuXRGVbFai",
  "key8": "1moAXBYnjKbfm5vHktafGTUifW6dmBN6i9pbb5vG3f4QPx8TqHLd35T9x2pUL5emVZgRRLKvebagHnxDexDLbTL",
  "key9": "2eoE4xz464jtx95g7xAR52gpqg89bXiijt5NVRczpzeK48EFs5BV5467UXm4RE8VJ9eoTsCufPKt3x2fR1Ts4o58",
  "key10": "iGfB7tRjod3NpLKZXTjtkWTUhHRutJGaAsBy9B2dCz3Pppex5LB7mLhFidYcJkmBYQdTkXdeUpbwpzdFdtZCzQ6",
  "key11": "4kCAPvtyWAbrrJ19AhHFsaJfY3Wbk1fcrv2Z1c4SRzH7TPKX1Dacrvj9pDm2gE6zFcxSeZzzhQF8Eoso8uLdfYbp",
  "key12": "3MhsSX9bVjVKgy9tDKvtRxhNzTdQLz9jvUKrg9dMLi1LBaV2UpkLfmd4473vodf8bFFXhVYTNgZjyD7mRgHWThJm",
  "key13": "3eBnFpMQhiLdRKe3UyfJHPqVwhrWGdmw9sp3hmYxi2CvGEGyPmY2necWnTyM3uoPDLsFEC5j2eskxTgrTxFTa9g2",
  "key14": "5ZhwHU1rY1d9R3e76Q37E91pTTR2hR99xmLnowKU7ULSNrUmqBgMoxQ3oGHDfdpvLS5ANBVvg9jwmbYZ1f6N29rq",
  "key15": "5P6FyHNBB5Mwc1mdM9toxCn2RPNGaPZA5zErAhs9stsqYD2Roz4KncYKcsJQrMECRyddJExwJ58cC1ULH6RDFq38",
  "key16": "5N3t1N3SK3cT1c5RrAr5VtNoPzyxeJcVVvJaeaSQma5E1NJ7sVs4ZuEw6xgufxQxZ6jTbgHRP1SUsz2Ur1z9eHFa",
  "key17": "4tudVePGqP2tV5aN3KXc3xNgRk5vsRLSpPBgu8q2uHBTtSJt5U1Gi5rNrmB1uf2MjtwuVK63dVdTijBp3DKWWsah",
  "key18": "4kYeKwVCdMwUTVuqEMCixj6hukdn7to3TLp8apzBAzYvCTyvff9Mu1GQ4uEkvbxEbBR2PxNan98RjNH25PiRiPTA",
  "key19": "4gWo5o3yJZfjBnFTG2AbQAH8pAjK5J1pavZvxzJpTPj6XpWxK2Rc21jZ5YLs4Hmde2mBHG8ySP53uGFzHXy5brM8",
  "key20": "4JzrJi3FSyV7o3zsoAFk23iv6WojfHY9YCrx4xERtHxPsBRrBRaEEhtNG8ffYU9UrnP6EsSsVDTU2taoQzAX3hcy",
  "key21": "31xVQ9XsZ9DU6JPFmTs9ZUWHZ8AywVbq3oMKgMWB9nr2hpkWea3WA3xeRScvEPd7GUVwgJC6eTC6hRwz7FqqWG6A",
  "key22": "2Yatc3kkiHZC93oB2ju1iaD4KNvfxP5RzuGgfPCnjmmBarHoxc2Wdi414pqrnysA5daqe3u9u9sFg3uPBMzdrUaS",
  "key23": "5XV13ZxKQJcuxtxmCWFpA9DxMnR4oTBqdtTKDkhvDQQtN35u71NgYXL9Tazj2MBJmcsrXhiQyMB1CspxZ3Wk7hsN",
  "key24": "5rTS6HZfep61Gve9awqKajKmtUqoRMz6AhjdgSgGX2mdEFKvDJvXUgomeS3FPaW9eQwrU3n57GeVFz1VMNHqRmS8",
  "key25": "5j1mhqPVFmuKfREZj4kzbRho3VteeiRYBkxFeu3qQYLbbC8RjMtQQUwa4d7HHq35eF8JhKzeBFwe2AMN94yEbPuY",
  "key26": "3gkXbzeu5hLUA8CvDBTxAY4eioGWLgvwHaVz6rPU2M3Fv8yqeNvBa7ApqpEu34cbfdqhg3XH5MbvNpXRj2Nyadxr",
  "key27": "2L8c27i1HtQ7qMzJiCcmQxZqoAc9UaDH8uQjNaL5ykydbFyEKcHm4VVJzHhz21PY9Xv3PKxTjWUMRqSetgsSKmsR"
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
