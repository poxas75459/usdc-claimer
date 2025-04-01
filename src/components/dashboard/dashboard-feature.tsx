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
    "3Y4mGGcd9jsd57Q5G7XiaQoVcaHsWkNJ2Zvof4y6G2kC8FbjyDc1e1HfZTdXXtegapuaMdxRyrvgLz4vB1fbJqNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiETLDAHs4uvnjpHWgqvzvAn5LQfGBp11G1RLuxgjnPgbhZG8uNjhafKXB9kbVqXZ6LeQThk1iA7Z475iXAwYP2",
  "key1": "3Ydm17gQAzyiSo5oditfoBr6FgF6PduGed8iRAbkCruCxdYhYouPUf4APgCZKw8Hjn4zyUW9XK3e8A2ZCbJWAZ9f",
  "key2": "2y96Jqzhbj1dwrGKv8GRqsh3uRhAmdgP4kVNyWntWhL1yWTYnVPVzASJUghrFQo6v6RyAFbSYqYAhMJ6AAWmQ9K",
  "key3": "5QGAXpvBdsJsGYRW7VKysaSvGEZDZnF83uih1mVPt3L1SQgfYq11XBVZHyHbPNc6uEqAHoSUaGH2riMmWPskfiAM",
  "key4": "4iBQitZZpXNYhrnSpLR4dCWsztvP3VxCGHNzc1Na4omTkJsxaz9pbFjimquSPqj3yUJPz3LRST4jVvgGT9xoNN6W",
  "key5": "2D3NWfPpRRZo4fSc642CtFTrc3ywSV1sAUKD2Mtf8BUnoN8rzkjCo6mDHbDZnDLaZKdKwqNjEi6LN4rraABWF7Np",
  "key6": "3hAr43vpTPfEwcmkxTnaX955P7DfjSGSynS5b3Nyk4bW9Sb293DKQCYDqbZuXzNRA226XEYYzZGu2vMhTVv7fVt3",
  "key7": "54e2sNTNjRuRrTfKngd4dboQdJEnFM8XHbgmrct5DesBjkxXJucnHLfc44QZRC7HYkZkR5a83Dp1RBv7GEa6YkAD",
  "key8": "4EShcWQRPBJSdorZXDtqn28XdaEHyRva2wuUSCEFikfJpc7iHoM4TK9fMqK9sgXsYqyJhgSkacaksQXH2CuuSU2q",
  "key9": "5PJLUiaQrvarQ7hAN5go32tqXWByj4qHDng6VaFxgRa8Nr79SfKYjKuC4UGB2BkE4LX5cbpmq7uYuCgSFzuQ4jJf",
  "key10": "kkPppmF414axhAfQyiaiq6agQKzEuf5C1HL1Bf1qboVHhzgdEGrwwfcHbfqkXR2GBLTspHTAiM1d5aqiL9BkBdD",
  "key11": "4mhdMU35ubv9dQqspBgbXmDDFV1Lbe5y9vAddMrHcm23hHPBHYndEoQgKKf51RRXsaPmShs6MfJbdDgAtEWidk8d",
  "key12": "4aRHMRWsdSLYh3n5uN9jdT2u8bnrKWSSbAsoTD4U7bJR19kAcyu8fG5ADi7V62jDAWNoJpe29ZMgkg42iL4ib3H5",
  "key13": "2Ug93AZoxf4U5jPDvBYgBxiF1qgpHA3rRXWKUe1cEeWDaqENn6QtEq2MZ9jpjWxNsVmYunr2Ac5sUMNv5H95VmfY",
  "key14": "5hw3PHNZLrMDF3QDsFRK4DYzHfSV1cfziHmSKXU2VJScdH3ARDGm4WfwxQaPTsXPYpdrbM2z3vr2dnhKQREnGjEU",
  "key15": "jRnoPsHq7gLht8q9dbe76pKcoPVpJAdFnU8Tn9AUQ3Xybjc4damXU9KhcKBoCjemz7pACQf32FcN1CFiwpgumTp",
  "key16": "4pFewni1tQBJK7z3FGYDG7Y3MKy8yUyPGAfyp9TcWri7BntZijhLcPkBiHVmq24KxQBP5vZfrUZRuXYSWMGKjCVi",
  "key17": "2Yn24ZM9frASo9FQNwA5DH774zNvhqjecxDUgqFvN4RFJXojwyqCsFq2pD89UidGL2t6JEnjyW8e3j8HLxrELkJy",
  "key18": "232PxhrrX1CzYNwYAx88T9oCpHZhVPtjeEJmkfzBLyaQ5hXETwW81M43bGSthC67TatZMsNVSUCwUM8CGdu75sYd",
  "key19": "3zSTiwDVA4ezL21rNNANi4XysWLAWx46F2LZbMLNR6Rtdz4TfZysuQgbHeSoCRE8oeB19c4gePbEPCHreTTiw4qW",
  "key20": "2zpsbsbf7vBn6HVeZ4HjQMT3sRcbngVKUXJbdRezmGn9iGCa2yJ74XLLu51AKh62GMxSGt8wCUgvbCdSdqNEKJ72",
  "key21": "3gyevvQK2sUkjBiQNvsPnwX4sWAyxh4PscP6CgVka8w4ygAq94HGUqesQJ5LNdhVbYrKecusySYieR2wcB3rg6k6",
  "key22": "34iymftwndjGQeNLJRR4KiXwn1orbJKdcQKzeVL7uXqZ4MLyRNGwrcvSrFiZNJcpuchuywraGxPmGzX93btQyBaT",
  "key23": "2ohv4wBxZGLC3XuEEnas6VNj93shLux4dwNuB2RLHLbiHMAkUwZwUNHMRsX43b6PkT1YVhbgJgy3MLbRXfuAu6Mc",
  "key24": "4VqFPRdwsTNY7MKPRCorjCvqqK3g7hxwZznxGCpGUCAugFFndrM6exCWY9w6E8jHbhqeoJ5GcGvx4mbAjhLdexrD",
  "key25": "4QEnsoyBwaAdXXdy8nV6As2SBxXRYybLNzp1MSHzV22ytFt5vqjTiJ7uVssf4SBawieXiJEJQVDyxt7PxGEawPyK",
  "key26": "2Ky9pS35Zx5jcdNPuRawRD4kKLzUn2MVN5EcW4NFK3cBLRwcn1gkuFzNz5V4H8XutppfLY2AnznbfiVDb9BGaFup",
  "key27": "42PtcqUQ1pVpxget9S8pCgRGd3cMSyTRYWYEiQE1VMqkmWkEEF1prPFW6gGSPJoXWtqWCXT4NomHwuyZnJLPHbiY",
  "key28": "3NyQXJkWGgbsJduGsNfd6fXjEScRnRRVrHhFgY9panwTkuzatvMeivD5o4T1FX81BTXMR5rGTnqzuJFbVbA6DPB6",
  "key29": "3mwyZm6Xde5jQc53TZhYy6wEQyMXVom3swb5xK3LJKKL7BKsAinhBNNJB4S3KeBVJ7XgCAJ3rkfpxUJrxQ7VENT3"
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
