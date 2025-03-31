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
    "39DYmqBzCDtder1L4Vq8k2jd156FE1nKrECTSqK8R2DeC7ToXyj1UftrJmjChD17vEtnEgB2gY1gTj8XZZWbEgFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64oPxbYW7tiZuq1di543s8pGaKu7Y2kVAAhmigdRDVvMe82B2PPLzZNDpbjVbdhJxA5xuTZz6K2nuikvTVj5CB1J",
  "key1": "23dCvMUsTHJbT4wPEjUiU7bi7Vd8XupJwep8mtvHUu4qMVc7u1KYKBfHaoZCLC5Fx9MnEg51SrPzF1D1dEKoXfwr",
  "key2": "2DTzfqGAfbS4iXMuZxry65yWy8GMz9agFfqK8od8Uber7nWX2uCWkAtBzYUPvhEfDXNMJ9VUDeJHJmdYhm9n2Ay7",
  "key3": "21Yf8Hb6s9mtqMAxQtqRGY1BtEjyNzxR6Tg5hj5ZkEwmz6t7bCPPFsPTFYJdxearUQgWvEySFyphefoaAzPnAwpZ",
  "key4": "2mSbSdySab3nAU9KaJzUY8BBp5CJtjfdZt1KUmvKm7HcX9CecWTjQp37FgW4wcooHTtr4PXGQZQnGQL4mxbaYU9q",
  "key5": "4tLkEcCtTwn1zPjvTde6uFtoK4n7d7mbyj6S6iA2HUvRNmXwc1ULUMyx9srv9XvnWqd5k4X3QQoyAsZFCVejD8Bt",
  "key6": "5Atn86BQ4QhoCCGroB5csvMotYtT6CB8FM9zM6CGsGZiUfkzFgna4kkeFVj477zYoQ12RLGesVBiKc22pr68X2Sd",
  "key7": "5c6UxhuBojoNMDa1v3VeLwsih8pjJwtAcR6VBw9iVDgC7qgzpfP3H73PnLonMTafGpv8V8uJzenpp7EkBQ9RMbV5",
  "key8": "tg6ADVCSJLLw54nPkTSkNbR36mAPkXFivQkXxsAUVMvoBPVYuAgV8uvrq2rD5dtZz5NWoxh9DNNNjfGALA6iSRg",
  "key9": "3qxWnfZGBtjrLzcVy4xRTuCmiErYe4N5mmVykvPAGziKdZLnv3XwzFAzyuF1yhz6Ejiq7A4pfBxEZ1Rc1HH5rmtT",
  "key10": "4mvKuqhfThqj53Nu9prWk2wSQuKP7BtFJ5uiwHm3n3j2QA85DYKeAnxH4vwigkE56YW29EemPVYxvUvMbdxGtNUJ",
  "key11": "48gAk6dnByKA2gLqmLSVAHNwYZk1zhB7MVcvjdJjDiRxuSRrhKqW7t1kQAnvUd8bdcGdqwUC4wAP3SFrTB8a9ZKF",
  "key12": "3sZBkErmqkDsec8CG9ZVbBbDPv6xx5FpqjcrTH7SrajgfwLgUXbhcSAbZ2aNKN5E9vo2x3H8cXuanSB8BhXkxv8Q",
  "key13": "5Gc5529ogGscGFE7XwLBLJtJsvU4YrEn4c2Ss38Mnv6NhTt5ZcVRhyh9yeRfs3i4qLD4oeur2wLJP5kcYLk4h8wA",
  "key14": "5CEgNCZ72C8E5xqfn2PPsBNyRp5fLBkNLnMswtGjihyNwKpW9mhGk1qPb6oGPp6HsDkrg18nqnMRQZqinXiUi4c3",
  "key15": "3vTF97QUkd5XxvoHdBeecb8YbkPSJVAHL2RayUd6xGTquYu8Dy9XcDpkyvkBvpdjtMYCbyuGft4d6tkYpWDe9cUc",
  "key16": "5LEY8JkFvTZkbMXrjwPBf4ooNai74asAWzu9Vv6d6PsohfzSjWbgqnwBopGdWn2QV8sb5RZyzwkbsw4c3t8tZg9r",
  "key17": "36YLK2d8Y7eTbRgtvuCfmDSq9hDuL9JbZLWcHVQ5RJuS8V1y2eAiboRsxpNpzSc9XXMpjRKgudX7FBA7Q8yRMtXC",
  "key18": "2LwBKbLXA9u1cff3uSocVAtAovQijwP1u4UmqEnfRpKtqRAZu8LZ3binNdw5diT62ftoszF5wYjR5NKduiwRjX2v",
  "key19": "VtWjsvJwpyEiGSBpvMZ5MjbKZV93McuCB3C6CaAjyRmJeZqAzmZSqoCSHDtVgbVGGu26r7uVBS4SwifxEeasfMX",
  "key20": "4Uzjca9ahsY6UxSJ1JBw9fwothXp5M62GJSpVHAL5E5UpcARGhmewya5MGoEwTPzBzQuH3fYM1ggB6YYJ9GepaP7",
  "key21": "3zek92URG4kC8tY49srEeYEW5yeoPM3i5huyiedEMBZiZQjaBJs8XvXUNQ59ynxxzt64zfYwhSAGWdczgxiHeKHu",
  "key22": "5uJRBhSyB7Xyj9FG73WAteaZXDeHCoCWpv2zXqwMZem8WEmVkHpKQsoJTatQv4WoZbNsJyKSEVLTE2dncozrGiYH",
  "key23": "5Jj7c6UvTrT2SMhRa1y6mdgbZjt7yfbVvykrUWXuPwYWDyPAES3fNmHQTLgBukHtBoAov3Zw1begQP4oV8iSKD1C",
  "key24": "Wo81xUjn6Cg3kYuVWS3WRUyNSpz8SbAXFvqthhxZtNVzjmhxDcLXRLXRrecdJESDNJ2iBNCFK3uQEj3UpTDzuit",
  "key25": "392GpU2obU7ZaZm8as9wMCov7impK87wpSsg19h872x7Dq18tyWybwAygmJCS9AWZKKgHRj9cPYHdreVxjP7Fvfz",
  "key26": "fSdfRUSWmhah9suX4bfmBDjkDHDRXwXu2TTmmTWdfreQaov1ufaSv1rwfzKAFEu5XQtt579X9R3ZgQwPqrp8iVV",
  "key27": "2mGx84wZufeWrJALXz4kJKUnxYx82YWnCvs7S7qCTL3us4eiJWbSwR5nyr2NEQ6fDoEE4pprzw6aS7zPaMwcpe5g"
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
