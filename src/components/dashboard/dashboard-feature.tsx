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
    "3gwFfCtVC5rhdiDCP6m3wqxZEtNxPAw2An7ejYHxsiFBLwomuCF2Lf33JVNdBhrSHPZVt1HK3dThbYzPgKdi5cjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4c9ERwUD1nbm5wPKmhqsrfjhqm9hDPT1pvNFYDEPsaE5Z5f6cw2dJdZk7aHLtFiUc5vWrZ4Pmx6AthdWu4aKEe",
  "key1": "5bM3jPQLZEQNPHeLTgHeaHP2d1SiG9mLDkbCeQ4JTjr7mPtNHYcWkgjGqeA81tRN1HNqQR7d5MGHvhnFnuGX1JeX",
  "key2": "jfzLdQodXB21jL3VcAgDkjFvxrYYM5qcXLmdB4CMmppJa1GPt6dCQrd9wNiCmZztvcDsEtAX2AWHGBHcjn24Sgb",
  "key3": "4tjWXuZZDAWfsuNfHLbTdTv1VV1GZRgqEfV42qbHHBDuf5VUH8AD27sZ3tk9ti22MW8MYhgc2QrnBVMvNCFTPtob",
  "key4": "2GexxJx26reRt6dAA12ycpTEEjfQAF9fabpJNFUWJSvpDSyPQK7V86jxtfTYedSSjgwJPgQrKyYEacSiq1PPyEyL",
  "key5": "RgwgZqMhQKkC3M1SFBmR9zPKdBNBxkzkgYwwncBT2F7Kio4bqxhceJrvJC2hzi9WKrtVgpR3tANjYCztmKJWHUy",
  "key6": "4eN8ZZgS1ZuuWR3X3gAwhA6CasN6QUTQK1Pg2eCm76NPcRSR5WFMvexfGDp299uNG9t5z1kf4Rf1pLZ2WY5rnv9k",
  "key7": "Vijkdrimjd3Wqp9V4RzJyFdGfhs7ggwYfbVYxg3XSimmhNUcPXQ1KcCXbfNqKiuiq8sqD8c26kyUCR7bgdUDS8b",
  "key8": "2WdpNW9Y6cQMHDbhGvNGLRNHAaPcZZHYLupLUtUAVWY6cFiMMArqNFBqeHMypbZvFztu5QLwWs1ce3vQwe35YHLv",
  "key9": "29bJ8fahJ7QyMRqZcDwgyzhEyhgYxLkUQATrQgNH7ybvzgEBHpqJT9mv8ra9HMJDhGtZwT1dbsvUcEaiZBQ2zrVx",
  "key10": "3TS1SMW3gc6THt51VpNYCtrGmcaSLB7Phex8dvKP7hVYHGKXTxR5Hf3dJtw3Ch7GL2dtV9sgsyXhwNgRRtR2Gac2",
  "key11": "34xURpk9WwCPpG4W8gvmCJhZHk1mnMNcU8xJbvWnYTdqEEGSb5kKGcHAETdCuismRBzPRUTzZerxcvzZKQ2uWerV",
  "key12": "4mpLMubw1SC9ZAudMNnMuS8wZ9RLESrY5XUU9sAp5ps43eTAtkWoeAKysDq3kdrEECXeBizAGjmFxP5qREDQonZW",
  "key13": "rCFTtAPQD8fppS5c2wRJ8uSftjBjGbdyKdKCA12AzTCK5T1x8mkoUSffLEqp6JiAqfudcXyhDyevefxNGMGvimg",
  "key14": "4VL4SH9iYE18Hxiu6Cw2UkfB3KXQ5nkgoaBDVpwekPAarfPaEsA2m1jX5HG2rjvgk8Cfnudrcw6jXR3CKBUkbNaV",
  "key15": "4KPUwiLNDhh9W3dtUQGcVDgp3npNVBxpopFT2Q5EJ4ST4rohq8CPmuiXnxAJRwA2sW3mSX6PPCGv8kmKRZQfGBW6",
  "key16": "2QFoSdKh39PQR99EahhjMZCbfPA5bSaz1xHZrnpxQqzBY6CAMKu8MdNsCKKzFcSUZapCM4y5nqFxHHvtiZzCPs6f",
  "key17": "4U7sHVv1UjhTL9rdYXuG283te4rWJK61EoyFpZwvkWiCeNNxsFVfcEGHmsUdQHMRSJGNf6cEbBzKJKYRC7UPBN5n",
  "key18": "5uC5TxwxLEWK9KM1UbFc5QbrqS7icezxwz34v2RVXM8v1z6rbwwM4e1omJrsA8DbFpqBaP2UjP9NFkKEM6gEsrtH",
  "key19": "3Hng825umLJfx4KNyB7Ek64VYq4vNZnft6cXDFUnQoBpntTVp1jDP9s48eMBvh2aJ66xkuDjmhUCCmQhpPR1t3Ye",
  "key20": "5AQr7mVVqHddK9Lop5cgR9PCtZtj5BtV4EFbsqBXofAvZDm6eMwxB2Guj55RAyZbnVo5BZXPcVscEzvWKCp57M81",
  "key21": "yiegHAgmLJsMFFUb5F7XkpkqPyHtUaHJpc1hWU4Tqp177RXBRwmfnV4YQbZ4StSnHog6qdK7c1FSSYqncmMv8f8",
  "key22": "TM8Kwgo3zBTVeNCivDTx3S7Qn3e7YeyTrnrrzzmmusaRt3oekbJyE9DeKFPMAqtPZ5BtpZNoA2Ek5p1Prrdgm6k",
  "key23": "sq3sYBo1KLb7JQ5cvTA73r6otRCFX6Z2bZZHxHgMxSTcFvwPjhU221pVnCbtp92rCCr9Qq3SZ2A2ckvt63zDbtW",
  "key24": "adDA8qvAZVawAgMDpKWEJeLeJx1uapSY6UckvcxC4jMEmRCRn3nhmgz3NUgDvjqCSw1Wn2qFWRCUxmKj4orziWY",
  "key25": "5UmRmhHXz8iiYcJ3y3uooUKSpyivoj85SBUpMsGSiDoYbUUejZ7X6sjkXTYgC7ZecyiXTunBcLExCCGCfyk2P9as"
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
