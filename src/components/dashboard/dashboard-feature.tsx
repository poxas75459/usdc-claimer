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
    "27E1HJSivwC9NLKkkEvbD8VPGuqJHRkhu1vWJdRHMYsj4CDXkpxuy5Y67CQVSETQ9ytaQZDQVRa7VffVE3CwLbCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tPX57BV8zdMe2p6nZvgrv78czHiy187NTsoP6En12kKCXX5jGJViFrZyc4gtpK9Ck3YsqFkHqaNnFkgCArTQWU",
  "key1": "3aABti2pB3j4GZtnH4VTQDRE77LHH1K6tBpHoUMQyzWaKnA4xGCQQZmEkNkPThk112KzwquXBWid2S6WvDzP2qEa",
  "key2": "4B5CDwAEn2yxbfSbxaf3X3eGTPjb3Ew1xzcm3baxgTGpcaUa2dVhDbUUJDTtPUetPZ528kpYHRKt55pF3bJzjZu4",
  "key3": "3Nx4Jsm5GjbjrSGAyW8YJcdR7AoRm38vTJbZMspNzfvK6kTrhjfuuARw9vZGrbsxjXVyki3brWWGjKyAYDddXoWu",
  "key4": "3ehbU6bViBRQqgvC9fC7NPMM13sFc9VvcWYT7rBd2jbyGyypK3pizvn1To765SsY7QH9GYyiBrStaEYXeaZjtwSb",
  "key5": "3gDHG82Y6qLfcxfL4RYBer6yTFDrgVxP8LHBm2Pe5QrJDMecVW7EFwsnKDxPgs88QK4RnH3RRP4Aj2gXq1TwEQvU",
  "key6": "5WAKaYZcGs4XRmYnfEkNsyJFnA6Pe1UgxEd23fPHgSQz6aaxuBsGaDeDiwRX7ixRwvJRKDh9SRz9nqx3XNQqWahj",
  "key7": "2JQrpriAa2HDtoEHHN51JUZYbRfybAs4TG5arkQtW5yY4TacfbWgK9bqGsqLFmcfJBs8yuu6UdULnJJLqGju5T1m",
  "key8": "3yiikdiRMQ5cCAgyPM5UauVX6Gnn1hkr5sL6oMvBgrHU9FMHxVgCYGnbgtCEYXfpneiXcxNznqiaocwmd9vpEWQb",
  "key9": "5sbN7V5fQJP4Pzp1RGZc2ifL8Edi2EuaUqkM5zjiwDUSQUThDppXwLzsYGG3yX1KLqnkYvDdoLD57dy9zg62cML2",
  "key10": "3SVfTomBYHUdhgJrSzadxUbr6SZD8B7qPDdkdjBnm7cDEGGrwucdkvcEhZP3gCJ1swPSKYVCH3GiHqqTJnc36Nf5",
  "key11": "25qKhi4o1gK4xJVbL47CCb37QVfLVrMHWeaY2Td4dksY14zGozxLSdFzavjFDcDoVxHuXsqW39BrHDL4UJv98e47",
  "key12": "3cphMoepKxXyPbXZYQYYYxYs7Fjeeukrt5X7LJdYNvN6uVqQfxR2DJLTnc2XhqAcQU5h2BBs4JP3LY7bEPiXTVWg",
  "key13": "4LaDXECo19t42k32cSp7EzzAp6masSxkKcx6gi85Y8hbmGAr1tkc4BLerbbNXdJtYjahgZQ4Y9SJPcynXMJP28ZF",
  "key14": "R9D2yiBtL77C16tJZANTyGvu7cMeRV3MzS1LQ1f3Mk71AZrcQ9CpJywtTLg7mz9v8dHrBAAhyjJJzQX4Zp6DdcQ",
  "key15": "K7radQB5RdQ6zrway2mYL1goeE6dkoZvqN8qu2X8J667syVHrKAAUnac6KGDoqX625uDhvLQwctwZq1mMFMgKR7",
  "key16": "2vDwN7PHmSAB7kesEZs6i2Nti9wYt9RmctpWHeJe4uXWFuBea5f7CFAB7J3FD8fuBPH5GAYMXwRu5mgRSZNox31v",
  "key17": "5JvPZF2S25tZ7MeeiKvLib5RWxUNm5Vb81tAbQFJ2Wzx18SAn6aVa2Ca1rFbdzMfLpF5KMsthhLNkKAB2zmizhaf",
  "key18": "5JBDwpu1RnHbnBUKjmrGsschH4stghES4oVJCBwqe8jjfnq7K2prLm2fmhEmUm9KcmRSgxRvd45Wv61A4nUWu5HX",
  "key19": "4wFza8E5KyAx4FoLvMmg1GHmaiMfxm3P95C6cHSTdpJHS3T4R7M9sshVeFD1bKhxTmiejZkW9NEFEkZtqR8wVnrn",
  "key20": "49gY9y3V5oATvqHFC4jJBjV3uPxmzgTVcJoddfmfLgDKq6XtBNTEL66gXEcKYqfuT76zKhiuS65vQ6cWFyY6T5Hu",
  "key21": "bvUjnRoc6SVYRcMC99R26P7qrfMCWZ3ks3mbhcq5c3Guku5vF6rM8Qwu7wiC5cBPGnJvwHLD25nUAsUmDrEpMTe",
  "key22": "4MHEYnjrACvroSEdEtHRaSVq5mexX5dCgqRTPvUa6sfqxvNUqxyfp2B8YZvdJPKW9SipzfN23MwrfCNL11rYiU6L",
  "key23": "2zamq5sEtbezrsqXmYbnrVy6xLu1AgnCgyTX5SdkRZvsEEXoJE7U4zo5Yiux8rhw2S6g1t7HpSof4p568KYJYJDg",
  "key24": "5eZovFv2taFAT7SQS1kwehH1w2HLmxCD7rkwqtQFvrpWcvfnKrXFAjL8mKGaQECRsTHKmN9aW3YhosNvKmF177v5",
  "key25": "P9puTKrdfBHaSrqErQtHiSLaDzYPrJyXL6x5h6ixTjZGsZPBL9ThhM5xgjjy835Gig8tUJqUG718yKZ5qQ5hfhN"
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
