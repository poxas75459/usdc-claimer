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
    "3wQBNw5uLY2XxFMKirF3Yw2cYEXBkhEPDrQhnVtV6qLNeTTL3Qnfv7NFiKzE68sw2ngdBQUU4GNsxdQjvGdxt4Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cVaxG1qNRELgQsqVzxtPmxL8Xyff8223gap3Ex5cxUSbWMPJpBhJ13dVmKHS83Gku6hgFkKbn9ExQz39vBexo6T",
  "key1": "4aeBuKL5sA4k5mHmEw1bmJxQRE6nq7oNB7qbcUhYribpUWuZ9TyzsBjYBLaFy8GR1kURmndXpmCi56PWDAwEoB6X",
  "key2": "3vV6izHhbkyFJcv8zmLW5TGG5PQKbdiZQgkwjsC3dtYJgeS3F8tRHDYiRZ66UCpjzKHzuf8QZfayKitZ3caJSt79",
  "key3": "3UdYpvcu6gFLLFRNvNW71eJ5aogHSLzKtJddd9HFNTEvZag74o42g2UB28JeSdGPDRfamd3MrBUnm73jL5d4MrAy",
  "key4": "2GSEzRRUcEzztiFo95JpTPXqZ3ko89SPnBafBEPPHM2z5R3mgGsnEdL6ynceBhps6tYKKpQXUPFVgqp6uNDYDgYJ",
  "key5": "5iiwgktusTuwqo15cFn3686pW5v4kcRwdvuEwN1vdLjHv8ouFk11g6cC15eDRkF5SgjtCyMVDUEx2J2hJyvfh6qu",
  "key6": "5p9xYHxu2pggwksF8Xo5gDYWdDiS9DUCSJD1gu3GknurVa8UJnoTvtJNuJijTAEnNFsaG7vRmT6itp4N9KsBgJEe",
  "key7": "4wLPSGoveTLzpaAjfSYujg2MSt6NR9cnidyfxMpYq11KbZv2u22b2w8sBuPFcFHLaSPsjoGGunGoBE99NXWZCM3i",
  "key8": "3ynv5uGcaqH3bRWTj8HxPsF2fUn9Wh8K2Q11QyzoJ4uaqJi7ttB1vW1cPbSM1bnjtYJtFfSTeSkZfu5yF5BgtFmt",
  "key9": "64vCd3G7Uon79K1r86j4iUbfeAbucrSv9TbpfoRYcDsKjeQfF6buQw2LdebCxUzrHAGn2WDEbhcQ99ZXikvajwBc",
  "key10": "6558ESypXxhpBUFVrpnUtUMTXmCiG3Zp3W2e6jzPR7uxchkRG3yj1sXQMSpzrUsmbJDxgjN8b6FWmXWB7WYRWn8j",
  "key11": "38JNm3uGnuPZ7J5UAUjwQUqiVZkq1JncveEbrTNkM2PQYqUGJoga1crMe6GCBRxUk63E8B1KTN5kuqX5kDDSx3M6",
  "key12": "2C2emiSr2o7UgTUDeFW7aPiR8Z5HqDdSaNQ4HfRhhpC1v3EP3JSrvx712fgBUybSwdCkus7hYvTNzWbzocS1MLwD",
  "key13": "4UWCU9TGZFRZUvPjMPCyH1YENoeMMKqKbf95fYRmL1XMpooYBhvVPNDBUUGhEsaHtWg5HdFfzWt4uYebaGWY6zVm",
  "key14": "62HD5S3on2waiFvDPTfPNdYevXeCG4x8o9JWcwXouYPn5QhQEBZopAbtbrrN61dpjc5G3zcBWZy4krPWXq5pPa9z",
  "key15": "3RAW4CEDevF9znMBrtqMzqM2AxVT6VW3QeYfai7LuaqFvrrcJ77o3n2FMGtsukvyyYhUCWRo1XmjdSqEggvD5HQx",
  "key16": "38sKywUpV87gLX92aB3knK4CFQsV4hY3yd2ReebLH1QHzzNi1UKB9NSQPUv6q6GaL53nNKRHLjLhfkyKXCvUiKnd",
  "key17": "5TMy4YnV8mUd8QCYitMkuY3bn96tL1bMmPGDZTK47LfnPsPVxizEPckfYmzdmDqxLotDiqSyoGpQ9roPKF5VAp5T",
  "key18": "AudmMsrXLMAUcbQsruVJbQxVtSUmqgou6JCA4nHM5thubCQH95x2b3m92MapnCt54KW3cgegHz3om8m5G3mNkLU",
  "key19": "4oKivAMMS7NFBmh49FD9bMrP1emYCWCKXWqDHBTzXxeypueC7SVt1DSJjyaeXa32uaQaYqNPNAJiHvtD3DWiKBMy",
  "key20": "4GHFf4fFZZ1LU6mkaGGAs4LiSTPJsRw8mJRFUSe35HrnxZm8hULTEtU3FpouMckj7ihAB4tpzEnBmXi1qVRri5Z4",
  "key21": "XNPT8SGjrWT3EZMAWZqtugRA7P7DQkpPNDNqKDerPLjpNBb9jrT7QhwrnDTqjiDRv9XJsQvXrpAdNUwujzr8Ztm",
  "key22": "2x97suxw6RJy6rMCjaWwaEvErdW6eQs2pmngkWxGfesMZWBBJPFSdAzVgUcEymGgD7mEfDAPCfeSo3KPrB2xQz1q",
  "key23": "3nrxw8EF6gaoRFd6UXXXEFqAjFg18gp2LkKXzMSE74qKmbSNKYqAFiWyc6cMc8pEKtNv6Q8jeQps9G1BKEV8Rwkq",
  "key24": "9gfHLKxq9AcPH25BddYuNuq5vwyznB5nwgN3ci26xUJuV3iK5Y4tNEtrSeUAFqhHhoG6Xd1Smwp6h4RaF7yjvnD",
  "key25": "3brBR37TSvE81SwjQX6E8XP3x53jmVswtSjKUDjyrUxRpXf8TVMJEU3KW7FJm2GrgRLPuSCJWHPXsiWd2rK4yRn4",
  "key26": "7QomDHaKoDWPat1Eq7XXDXcda6XAUD7Fw2wnHTKu6o5Hb2ZJ4ngER5qGF9izFssrJteVQ4DBtrvFrYrXnfH4J31",
  "key27": "2HHRdLyjhpxiRNdfT3m1aqBN5qwQ2iVmnVx7hJRdi5WVuJoPMFYJLFDaP61jBRC7AqEGuSbvb3AZARmPVbwrgWQ",
  "key28": "5EAktRSB15hodwVG2Xeqo8VFZdV8nC7M5bgU9AjGMLodm8dgugk3mrdhstpa36oZwsQJg8NyKN8F1kBrvwFgiscZ",
  "key29": "3YN7DK2oTzqNch6cVkR2yAHRXkAhwXn83jjEeJ9VkFmBuV2tsiZq4sNrdn1baB3YDMdPdj6FBVjeTUaNtiaaPed2",
  "key30": "5pzguLmm6A4dHcVKoGs28R9YHte91ih4KfEtSuVH7dqnqkmBpNiNBmhH1b2kDUubkAeAiVYjieEaeGtU5hwKYHx1"
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
