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
    "3LW9RzXutVfzyqQvW29N2Hb2aZSyNYeXnt3CMJLvooQVTfTxKreYmb968Mx43hYSW9paNvaghWN4mj3MLPFA7ZsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnkLiaZ4DwBWpmgtxrUyYr3sCGto5b9LPcwzaBzaRy71K7aiYwEtH1DkwiUWdxZSg4en5tKqm5XoNWUQv5GSTBe",
  "key1": "254sqMtpemGTmd11dEoZvDuV4xpJ6W7w53pN3a3JqTcaKCnEgmFBAXj48kgu93oYRcUmeE5ySvq3zMe7EhhxE3Px",
  "key2": "5uEQ5Fu14ZS7QJQyGUGBhpjLRnSbVEq5Azkc3n61N1PjbDNiYR1RhP1QrKBjX2gwib1otjhbcfJBrt4LYfRBbfSV",
  "key3": "5g6aGpn78bs1H11azZndPioe2wUXX4XSHjVCbustDL7nAoVGRRLC4MkjFFmPutXcmrr9TmXJ7Y1vvKipvCEjHoQp",
  "key4": "48PVRtQ41bT4x5cbFMsFjKbkCXq5tRfTCPNdLmyt7CxjakGExb16ZnrFMXZxgEMUDKewgJFKm9fmFbzWWjz7KEv5",
  "key5": "4fqvuZLtz9G2BHZ6bKFeSj3hY5FEBFrLpdXkbahxcp2LTqGjBCCtWCuRhHgrrZeLWvHttfs2QS29fjk8raEsJgbu",
  "key6": "51WQkb4rDA1B3GPjVbojxHVZhGSgU8e8L8LSQmTZHk2PGT7eo9XsHydPdnLn7r2cfSuyH4PMWLDgJ9ZBgNsDfAQo",
  "key7": "sdwv2fLwzNtWfu8fpxThhorBXTyhVuqjsLZBtxeTb4o1Key7XQDFBkSzpYAsTYuhkTn2Skaa2z8jkxqwcWUDdDM",
  "key8": "5owLETFnxFNuAHQba2bT1sgkwo4f8jvBagLkjiXfjthBWByW9AGkN1JY16gyN1Tx8Ay8zGatHUrTVmyBCfBtSNgD",
  "key9": "5JCAYgpSbkBdcPymF4Z5gKiEuvzwcxG5VBYkC8pD2djJYqmTgjRugQjTrbGAr1pykX54uoziP5LfCyNWqaDjwBC2",
  "key10": "tVP5UWTm7gzxHwZFuwGhcTmm4abekGKF38qxnqQFtfnBf9BtdSoQDDNZC15rJbkYEKnnFmen859CAw6piQWo2gs",
  "key11": "5nspPuK6Gtwpomx7wt7nvzYvqDAs5BmWpGFNbBY1aecY88bF8GGh3psEjCeGSgKuYeKgQb6MgozQ56wbYZPDqYoB",
  "key12": "jgGog8GwMUxbXWse8zByH4AMZJTwi6aXkTcYrsScJDnHGptvY1NjfeSoyxhby8eFwwKP7bjEXAqvXz76GTW1wBu",
  "key13": "64Yb2CyyCyub2jfx7ZnRGJyZ7omBBewGGxtfWDDdHuXHqurmwYWTMdaHP1juYTix3RjQ4TACfSv1AbrZB8VCjyEQ",
  "key14": "gaTRBD56wBd7jmtP1RqQpXESsSHcYrZHyKg1pukB6N7JoTA5ZYYdwdY8JQRiXWTseSCFnT3p5tRN1m73nHbWMem",
  "key15": "4XeFVpktBuQ1XZjT4qGW1pf5TLrcB38KfBHX5NXNChoUajKm58muN6Ut21ot9Qf87dYbypG1urLiPizR3eSkTc6h",
  "key16": "2MDPLMVPoyxW7kmJx4z7H7Sq8WyaGNebQoTQ3kTGiJhQhzsQpQt9opLdLwxMcDPZa6Nqq5oE9ZkRRhNmYwu6vhHc",
  "key17": "2dG2ydVMC3ycyvrmSjfNpaKpPhdfnTLkuWf6qxuV1EQEEaYGG3MsVTtTqrX4CpF4ZTHpTUXCdpo2DLQ4dZuQthvH",
  "key18": "5yJVqb2tYjXaB8NgGr8XvncBJ8vScaVp8ueNsT1pCXA1GMN6kG5NWemswLTmuzJY1dFdCsE5sieeyBstn89JLi7o",
  "key19": "535VYutJAuVbTMGLD7S44X2GpubfkbXUHAEWZVTT7w7N89BGursUKpSATcMxg6v65y8BmJdZEz6uwa9RFDsUcXSF",
  "key20": "3ALGZpPRfwz78RN5vvfe2utANUxFV4XqtFUGaJtdVFpnJkajAEivAHbwT266oj9XHx1JhRp8KspW9xfnoM3U6E4n",
  "key21": "62x5zjmBKPru5De8kLpFEkNp8MHGgKgRN6afAeh9nTxAxxEVawJXFZy2w5yKkvALAx7yRcWGPyFWApLcRwMfh4cX",
  "key22": "f8WizY4PWBvuwyUvEDSSjZcS9KGtB5nt8s4T5KER9xW4eiTSK2x4ZGYRhtyRAn33cc5a7GZx792bRrnkGVxCnh1",
  "key23": "5aEB9FcxXoe6ANUqNrogrv7YdzQdSg7kQDQHKz2xcQ2DoUWz1pYgjHoyoobnQz4dnvCntjUxW26irJsKs3Npkpnd",
  "key24": "3hLRqWvyjmjXZFirLCPnKVox56SQNFUndiF6ghdYMVh1aQ6oXP5f183yUAAcgkGCZW22Xkb2o2ZeSvhAnnASeMsr",
  "key25": "r4eGTcMSTguGRvgMtBMp81DXfknU3ki5wGirfgvn76CpNR2rrME2tteDUEbEYtiqjQp2Yg5Lqqagyoa9nZ522Lx",
  "key26": "wF4h5jout9nTbHmv65W7qNaGsrRXTnkWSdfb8WvAGaH8z5RBV3FVdosGVwNQpSkQqyhDe1nRLsK9R6A9qxaJCZA",
  "key27": "2Ch3YMqs8z5G21cAVKVwU9douKtLoasok46XPHSXS5e7SBCmNuaKm3f8eKxZTHWZULekDEv4JLFhWkupwDnwmbue",
  "key28": "61TTWT3FQ8ow6KC9iqkqvfjBiRbb1GqGGpg2CAShs95Hoe8hycww5EZk1nDpiL5NNbo4XYQC3hXpvjWZvT1YFsBx",
  "key29": "4T9pkrNw5ypkLDnoaFfDMg1NsPEcAPNUCXicEX1AWy4EZB3um4YSLUXEb7LJ5ZzJDVKbcpJwmsNcZ8V7pDece5iK",
  "key30": "3BkAojBpzR49XFHofDcL5sNqxGtWk2vJVatqozzk3D5fW6BXvzPE1ZMykCsb3LxcGUddLCfN7Bs2afhxoccXKhfU",
  "key31": "Z74mGJ7AP8rrowS6zwvUrkXFWnBDgozCmJGBE3nizf8squQn6X4yMAdA5PCt5UqMnheCqPLm8P86EJ88Tr8Kgi2",
  "key32": "24kP3mdKEKCVpjHdCxZ5RAwUUb8PthUj5ckwusEgBYtwASrbwT5MWHgYfJSYjnj1ZXgea3F8CgWwmVj6qEs6T5bc",
  "key33": "4arCMjaVCTQnJgbcceSEtjnHfEx8fzZijZjUvj75i8vKErineMZh4SyE3N4RkAv1wbJRSQ1PwH4HkS3gQy7uH5yW",
  "key34": "3qG9Ka11Pe6NPMbW94o1Je1VEmEazfe5kqbw2U2dw9VN2qk9okbuzpo1nn23bmcGv2vorQsMXuCcBgFRff4HGwew",
  "key35": "3kZtwcLvt8LKUhwLx9e9sF1a5YqH8KhqRQE9qMgneTw6A9hRdfYCuk2xsECyRf6g3HmyNLxnPDuFsYf2531Gioi8",
  "key36": "4UfcQNLh16NpD5dTM4nBiAtdXghiDKyHnigxBzo9MXStae7QbY7YEykKQkiyZz8UG2X8qGMQKCATxP45afCCq7Jd",
  "key37": "5Tq751m7577khn5Xnm9Kfsy6RdWqfSRHS6ya8m5SCw6oKFkaxZSYsuR9Yezunj7VdA55JUFqEXrhz5fVq86rRZvs",
  "key38": "6566o4TAcCeKjhbL9id4T3LkcijgESztTPKMc3qd6phpWd1uiL9FEAp3XT7RYAcWTyKg4nd3F4YPyEbAmZsj3iie",
  "key39": "4BmtuetJbEUo9o3gp1vMQfAXAGmuoBCZ1CdFtgeiABqrwQsqXhAE1MyjGoqVjEm6rzyYLeuc6hTj58oqyS8aMRdS",
  "key40": "22TP7bZrfg7Le2xNPc87yg2USgraX6UHv7LgBWotHGwapyP7ubV725MDL59TZXjpyaFCFa5yrd2BjM9JUaJy6Zqh",
  "key41": "5Kp14mGXnyYZ98oKHCaRa52f4Av1TUWHPesPgxrLwyYTTUK4vvznNtqZQUJ4ctbHQ5qfhxhKs9ABEh7Ey44qNAvC",
  "key42": "pjrxGtUu6UwGercF8qTzuvDkcaoJCTt7atWG32DJjXfBYsNz3hV21SY3SpzLEkvB3t3oASNTrhMnLchj21V3PqZ",
  "key43": "5hjYhT9ZhF9nD9JjjBRbs25azUKQNhYJZJA76KEY2mSqWbG2L5rQwpoPujfgX3ii6gbRQoA8s3v651j21Y7tMrui"
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
