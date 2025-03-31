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
    "2xaai3RuG9MvGBDfbY2WxSP5ujuMkY3cEjE4vjXJvvAcM1czwCRb9CPiV6XMtQhCdKXdrBEt491oPhdrKHaSr7fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHP5FgVgVwHamrNh97xWHkVvriiKRhYaKyabfAMteMEVh8nnj7kKXL4unXKT3hX6pVGV2rwNoXrA24K6DRou4Cd",
  "key1": "3Dfo9NEkmbxKH5yjc1BNcc8jpCNzkvP2qo5yDsnePHFxSfsjd9tXgk4rWGrBCvqngY8GYtwDhr7rRj8UXZ17B4VX",
  "key2": "yi5gaTBp8yytagGEbqbcVHTYCLiMVEL9GngoTie9pDNrms91HP2p7pRhyY46JBKzpnLVpAzmufTX6GsNTSVAFd9",
  "key3": "65EUewepvcaqwi5rV2Pca2J6ottQgsQjuv5F5ibPhsnehhLDwyzSc87mrjDHzF5RSbbCCooWXchKfv7aHGXooV4G",
  "key4": "2tv518w8xEAFKMVBfntcPPgCYVTtKHyvuvJmqhJqwdidSTqpz27PgU2MrQueCozBk9FC3V3PXJNWZL3i4f7NxnPw",
  "key5": "24dWGPMcwCQUFkrAK7ZRMN9ugcgTeib9x8XqjmgikjCgD5iaX8ykQCtuX4TuzVfvmX8A9cDjYFMKVG5dvBtyU1oy",
  "key6": "4MpwWEGF48cqSiVcF66hsA1krnG68Hyxkt49G8yMog9MPi3z8uVvUvvqyj5ezj2KwndSRwqoCeo6LeDKAZn1nC4K",
  "key7": "3F6mQ66jrpqYQeUV7bXJDVuBNDTpBtbXYZXpD8XQnjraLFob8gQ8gsBp2Ajd8wnSwsYGpFdxQMcunoz7H5g1wW1H",
  "key8": "GGxtVLnCFY8uwJdVzMKju7NkaBhSCei6Aa24QrtugDSRso2Ut9jZQg65M5Sx3z5siy9JEgqecDBwMzaYBJYkChp",
  "key9": "4SRHH3HwaPZ6FgaBXenrBJWGxzmd8Zh1pXTSTCG53HvPfk9xrDijc6t8Mht8WHiLRbN16TqUiq6wK1MSy7vP2wXu",
  "key10": "3Gw81vYXXjtNRqYNFrnDZxV3c9ddeNp3NfqN8BrHwjnBBLLSXZFFa5n7XsYonDvMUj3QJefaTtedZgiCyqt6bT42",
  "key11": "4j4YhZh1ByCasyTiznwMki8E5xUqqaaLr9jDQi5AGoB2vLw1UDobNmTaCXq67XBDRkQvCdKLVov4VZGLhJ69HpAU",
  "key12": "4dDbPefgcAr1pSfG2HCcM7p6ZeJqao9ri14QAdUAJMqF8Jc7veXbBKHT33tB9qWznNFosTikHS9EvssJsRfXZm9p",
  "key13": "3bceBUYbuCyzFN9B8w9aWxEgfPrEF9iCBiUNaPqJWPAvyn23PpRDz4bemeEo6oFrZe2f6dy6zzH8EhfdjgMwQuyY",
  "key14": "35oCR4kZGfq34vcZJG7YZjM6gpc3FwCPc9fRDqhms3R9k9FqU21oFsx2AuW2wzqsnEUnB2uhphZMT1JtKTnC2QdJ",
  "key15": "2mgPP6ctkuW93NuUypHyjAm88dqZ8EysMCR9rRRQ2tAFM9cwtBotULDDu1NZog9w5G8Cq54nqW83MDMuiyEGNXhg",
  "key16": "3Ne7zgjYHqyR9HSnimJLTJx9T6rxmSoRaSTLj8ov69qRryP3Ay9GN913pbrJDbUXMTNbrfmcjKWpwsjWbQQjYCLj",
  "key17": "4uM66duGaVNGgTCWxbaCqR43baQKMU3gjMMK4wKjB2mXHFtBX9f2jDMrQCoa8G9HxsDw4UiHQY3d6ojZyhpXtAW1",
  "key18": "5rhrUzHs1jBwc6p2zRcCazUeumtjUxJVFxxaDRcqkp6e59a3SEB7YEEZXMCRg9WNJmEuxi89XVRxR3uas9YiuFK3",
  "key19": "wdRKBWati6xwEsHrU46c1h1r1TErAWDQxb7ggsjLNv2xF9yrwYQhBbxdcE4SBEJn8s2FoQnn2dqmYpgCy2BXp59",
  "key20": "2fyDhErbdpRbm3zPWK9ksPxzyPyp8WJajguRkZjSJEVYqwoAhWuLShdbV2Z23NGWrDJfAYKkZCXqXmGWE6B4LTBr",
  "key21": "5vzkcSS9pUt2hH3rLtBSvpBPo4Ld82GLbHW2kw7kWaXdykcdC5e823whmWDERSUTxmhybJD4iDumKxhTbh7Zmsut",
  "key22": "55k6QnfPsMKqo79BS9ukMo3KhwNrGyjisJVufSDXM4MFgYt4jyMghzdBM43MtFhYWhwRGP9U1D6Nm7BxyVj8qjNY",
  "key23": "4oR829GtVXNbAYk9UiqW5wSdN1Nvt6iFjdjTkkerBQbnzNSrNRqt7yytFFZ9YC1yKZtj7jEpzBG4Ur7osUfNthcJ",
  "key24": "2uYzbZFBHz2zhLYd7gfJLNDzTadiMF3TjuW86FgrUqiLGFxQFnkcDJFqoQ5rkrwCbEQ8LU5Lb3sJf879YnxQ2GHs",
  "key25": "5yMajETz7625KTYUjypbg5R2SdjFz3xsdkQZ2L3EvR8Rh13VCVAHHpzQXaCT5KE5HNafWHguVgN3QsLdRCHaT1yL",
  "key26": "2Dx3xSmJvMpvjBdSnwZAQixaFNxcwr3N9o4amhNWbfnbKM5Y7LmxFy9818xVTSJf9gXwo58pupJ5eCLgq7K5KEeS",
  "key27": "2RpeUaNGqd2kmFF8ahr226r1VVnn8CzBCWdZtehHTAmFREmrjddDS1et1X6ewzu7mPqTRGXwNL5rdAVWDpzyhyuk",
  "key28": "2VCRNEFLsv5Z6KC3XhMk4NwMgnoGTfihseyAiMUqxb6qJc6iZ8JZMymuK6ZKVczCKGhnsvVXLtzoN4ZtBxEQNtQT",
  "key29": "4BwSMC8J8eBhB3bMTeWF4qRHiQXixAfNv3Hvc1JcugJXrEoBmZnqXv3AW6tKVfBsoFeZ9z32TPdK978uFEgL9kdv",
  "key30": "3gSxr4wKWNMx8EiXm2GWwMtjb8gcmfdGMak9WDAx7QPvLWu1QrycB25zjvwZcqDrxzufqheBeoicXQu1vMtEXCPu",
  "key31": "2kew7X1TNGzWPPiqL234LTtAWKghXsEr89dAyuDzUpeEXz2fqX35rWDopjpyMNgXUjPedPNQbyJAqXA31HacmvQQ",
  "key32": "vPP1VsxcFJdM4H45tRZ4fp4zuhR1bq4MHFQx9cx8TSsuWnxaU2oj2cWjuYAmJRyLyE2mz7p6GaXdQkgNrgPRadA",
  "key33": "65guzAWCDUjUjMd369BbimctfNM1n774wUNsagQbMAvZbYzfYvDbSMiiRSsDx5GSMSMkAbuNgTBqJemELL6Egnyo",
  "key34": "3bARK9u5m4SBikT5AsNXbF64tqmdXjce1kUhmdpQC728Vtqbj9aFpCsniYvvCYUFD7dW6RsAVJLEpXMQQaZ6yCYn",
  "key35": "2DKZhfYdRWXgxwG7pnsPRj9hfQ9HxmMLW986Zd1oPrmr8ZEG4Da5Ywe8qhyCDRz3u4LQuQfRoPUrTDF5jTDomCPi",
  "key36": "4KRd66BNx15HBvEq1krFA6NPdsxy2A4vVA4jnQpWFsindoUjkhfS3dUH9qnPRAEuYdJmiyQUe4re3s1pvRSf8Bun",
  "key37": "2kCte6JWi5bv3gzxFkjJatseYbREjw2BRW73UkFRZkxfZAri6qKPavdi4mTrba2XJRe8KUs4itSGq5YqhZqLspy5",
  "key38": "3Hqjxumo5C4yvFoYtK8amkFbvYBsTnVosZpfD2v3enBnoCXHtMWVCPCp61FYw591Xjuh5AmsAzgb4cHDto4fRATq",
  "key39": "2CuFA3XpaXucBn6Axs2qXL58MFu8H7QnygesGpsDm7KxDnnMbGaLYdNuzmbKdHHoWZZXozBwzqkz8dnNrLyyRjxV",
  "key40": "2ghTt4g74yBokdYkaLWYx5qp4TpHA2Akg6eQJZQRYme2HbAmVB946Jxv8Juq2qV3GiDpPWxux7uVzK3KgDkWvdWM",
  "key41": "2t9N7K5zThS1YBUejuBAtXqp1WtVCBhttcskAsM4655H6b4ugqEYLpR2j4jo9DgAf1knLZKEFUseAFBkKy5GNk5X"
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
