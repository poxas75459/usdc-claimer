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
    "49285ja8V4wRt3rsvHs99Wq8YfFwp6zLxi825iBFcYBF3FjrShFwLdJMBA29ZFAavoBKmCCWWWmhjtRRAm6NSo3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZYbLbJrtayfDZMCkqJM7XCh6gVptziuxBpvYsK9FJ361SVMuMv2sy8Vw5Z9bi2ECqxqEagpnQRTJuJ3PuvZMgW",
  "key1": "4G6mHFm77cHtUqf4yWgPHBgY6r2HYLX1wt8wsB2cQAJsVY34DPmkWH5e5qpDgJrqLnb2NCG6ywFdzYfJc97vHRV3",
  "key2": "2SJF1JEd7HsHWfT2MLAtWJv4MeKxGv3tE8dyXuq1sHt61hGcCBz34cv1eXbks4jcUbu9kuaMCMFhDpYZjAjKmqNR",
  "key3": "5rs7CHDf3sbs9KvCrh3WHUcU5vrV1FjkYDgHiTRECiycEL45oKgAQTmJd1mqPg1ddNLdzDH6pNa457MF43cjWJ49",
  "key4": "pwjbDwRZjVofzbdCXHjErbPutuYAzAWuuTLhBcXt8EUMTuuN6ocMc4gey81YE1uNDf7Fk1QRSkXtjo9s4qzS6GF",
  "key5": "3oLgerXJc4pC5cU7vnm8efjRDMsbi6FNA6ozax2barU3DQDKAjWxnQnEix9mB3ApdTG2tk44NHqwGZAUenRm2xMj",
  "key6": "45mxdDWX1EVi2W2UyZ9inrGSett2Gs14hbmev8NGgWaVD5CPhqB8JsgDSfUt1dc1FUHUGBe6jG16CuG6muXo6KtV",
  "key7": "4EvEeFefZkjFW1AcMPttL73pZqSNBQAbmf3HxqmxFTuGZMu9Fw2UAR5yRDbgkW2RH4AAxhwYNSSJYAqhx9aFCgPd",
  "key8": "4u4F2nGHonQoenWHGnPFxvSFpynDJGyLMJdWwC2TaKcURkD6wDXETqeFibwa8Hb7dQXoJT7SSBafQ39SGtyZUCSe",
  "key9": "4LQJ964qekEPp8DnRFRFssjciPmMt214CTqqzNye3LiHqzSH2ZF1irYCPFS2ESaW7n3uQNoo6rqt1BAV2SP8QApT",
  "key10": "4FzPPpmszqVgt5esFSN8S7Y2HSgWC5812MaoeH4afcPKFZ6ixDyCY8KVRJFhQstuBZanrAeAaC5FURDxn8HwpJYJ",
  "key11": "4UeVdj13V4ipjhNTSqfdSk6AE7fbvBiBqv9YVB5vgdqw2rZXCbGKF4VGhZruVAgAUKVZZRveQUL1qXGJAG1AGghg",
  "key12": "4JfcXxoTHLpufvwLxhT5YuCvqLV8oRZtVZVZMuavZECX52dQaKocDdBQ6Uv4W8Srbbe3WQKw2JNFh4VEcSNTz2tx",
  "key13": "2neEwEqjhVRGVqETB3N8a1z3dNMt2w6siSFvkbE3kw2hP364yVhjpVUdikHhBefmYWVUVoQn3rXf9TwfYTVrfkX4",
  "key14": "3HGk3n7Q8nUT52RdtJYSgFVoVarjvwrQdJjWr2MCGSw9z38f3Q1S9HdAJzr5e7MM9pA5BTYmjbZBkM8WPQn3Bds5",
  "key15": "4MTfp2pBPeExrRbscW8saGUpGbEdmgKdczRcM2gAnbAQh2ULdaaFrehexf5F6mH6LjDco78Nu6ARRqko6qn34CJN",
  "key16": "Ki21Y7fpaAjcAvUotXrNCNNYkLFvTzVVDwEBjsWAT7xTx2aDzoWethTkh4uGgSjYaceQ6JHLn1bqMkfRrNGk6Wd",
  "key17": "awWWoehxEXZdFhQws1FPifHNNfqZGL4nvzZHPUv77ejBA9KZoqV6fhns3PbemhPpejqoZB8yG6urV2CqVooEvZj",
  "key18": "2f6D7xhSRFoJTpVEyuwHm2tfXdmRK4pN7xnsU7Bti9oFd9cckCKPDPkyBanXeBGTrJYFYZ39kYPHCi52CLasMQaj",
  "key19": "53PsounPaPafAWVAaBRcqNdmbuQ3BsBy46Y78hRobBKQvVJWFyyuVCbb9UVQnHiBwimvVXNxDDL93GfajLVpFJ2V",
  "key20": "5cyqFcEsuoL3xBarPXtpsiDyBm64kwBwib4iZjcuhcr2xs2eR9YPnnh68b75gudBsfjrdmKDxMiVrEpFv8PZYLhR",
  "key21": "3UqrjSNcWtoZvRwewFU9XiiS4pbPRmnfsjQYKzEALwuCKoRnRfqpm22gSN5fCXc7uAgQ54PZpcoJn1WMwWq3hTCF",
  "key22": "5yRbqS1zuigSdN1te2fi4yepJFVHBGDQSiJhAa15NG3kq8fN6FrRQ3W3TGhbF9KtxYMHatiYMgLp5hnSpLY2vApa",
  "key23": "2gXpsXXYJLFQtmjgG9RVsniHSaKnjnuiB9eZYxTjTAVcSYZcZorMqHPsY6mKmTmMW3yy2hj9BMGhca7HBmmgg7jq",
  "key24": "2B2ZoJkrJsEaMY9JJZcw1GKG1vAQUXtcggJTH9b8oSMDWGTtHC5oNEpa1v6RKaES1avrf7Tc8UUuoJyLieht1kVS",
  "key25": "SDFTKbByFwo13FvtATrAvCBfhxXwTRYmTu2PKfgpjGSpjYhoKmq34WmFvvHYcnb9yhqVFJWodrNN8nTaUntScKw"
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
