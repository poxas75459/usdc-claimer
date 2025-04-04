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
    "2qsjcFWmL5NgqRhxVsy9QS4ZCLf3TYqZ8kN2qV6BGwo7uHJsi5mMKtFwg43T8mhVQGm4GBVRrPhZjhanNhwRa66R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyWdS8RxT4tL8VYTZh3SgxitoqnaVmnjgZqioVE4E1fZzVEQUvvWzvvtc8yWevW9fxMdKTpFcY3vvTASDjT5xAe",
  "key1": "9NeTjCiSCJ562aZzziFaXCdnxQFtgFnHpdEDFyNfohZRXSLSeJAoqfRRKQmL8Yg3f7n3Rs3T57rawgVa5n9bsNo",
  "key2": "3SbqfaApXHYhFED5NDUVyKK69yuxaN9AUJFRE8UxPDaZnZsxh3AqVsPAoyMRYfjmajJBcU45uMTXEa3y3fj8eX9t",
  "key3": "xRGzCda89Tuck1UdVWWUxmfXuQecC7kdoqRLyvqBQsrAM9zVV86H5aDMMYWv4s5isDpqAwBNaPjMGpqYnW9t5uv",
  "key4": "3eCsWCC4rJ8AH2Q6y75haN6GXfJAK2abPeZyGQDssTAmMaH12zd2huZsf9hjY1prEabUgKUJcQvThvmhuqhSZ9G4",
  "key5": "4MzUpPpAZzSeyqqG9uRPZs6cnk9gSiN8ENbwUWsnMvvB6k4Arsge4ikpja1JRzHvscbRea18DXXJ8Qmve37Nenxs",
  "key6": "4ZTFTzZomYyZvC7G41ww2e98EHYgTzZFWkR7gXn1ZvEVL3iueU1dgwyqLEF1TKryvU72ERH9CDmKc1BVMSd6M1DR",
  "key7": "5ukZAHWsc8akHnpQnZhY7r9PucsDdgAfHTjxsomqpB1ert6PdAuWD4P4kKdMwhJvqq8Xk23r8GWi68P2JXnGiMdw",
  "key8": "2fXRwKA3dvchmfRK9VWFNnKUm4rd3z5PgzeJuY1g4HULBp2aMSLgfEQjVyyuiUQa72YKsD5w97vPpWwaeAw7g8HF",
  "key9": "4ZTMcTnBrh6f1vDdLfBuLdNckjnf955uer1iurfrrHmK9kEMX61T5F9CUkKBYaF4o5faeWBzSNGkXNmFXEeWKDWb",
  "key10": "5BD6JGnuLjc4LbrtGvB65ZaLp3iwXfCd6gLx5BCAqGQWoQX2C7KzLZdmTjDcscVwxA6XSasi1p1rwcsA9wpJSbda",
  "key11": "3AWgyJcD7RTJ6xfJeCfjuBWSqdZxr24HzdgYtcv8hGmu9JachTRdNWth5QjeqLBX5y6BkEYmVDpk76ftb2i2wmTS",
  "key12": "3v8tjN2D3EPRQRHsCxUq6p3wiTjx1EvQh19cBKmHdiuJvpPLZ9TqqWNiyEHbSGXrRmH2G5BT8PZs5jQH3Bi5qXtz",
  "key13": "2uc2yChf9yo98jsiDZ7Pfmd3xGaGskhvLGTb49xBd6E8XAopxozLxiipRTnVaTFKUGA1bToHyHQpMoWtSJ6f1Sst",
  "key14": "38MYiva71TvLrjxRBJfza1NnyfX6ca9cx5s5bhaUp2frtNHTCgtCHV2dUvnub9NevB9bid1i3dzr5Y6Y6dKPPgiW",
  "key15": "5QXVQm7Qv9Zggh2BZvXcq9NFJzwb7GEXwYrKbMGttfuMdRuLhMVRh4h5CTLHDCHTaDsJs9MgtvBeV5nWhzX4jDda",
  "key16": "2aTi1mbnWEb9trxyrsp3oPiSNB929kWYuoijvkZRqWvELaB88YJiEowLds6vHNau5Qv7DCTQJFMK6Kq5KixL23a4",
  "key17": "EwyvBhcwcTPjYY42GFqqSVNK4yvYwo4Q9XhsDNUsu96bVpPusShQLzAGw7DLm6kBVr5epNVztr654efxsGdcPFJ",
  "key18": "4r79GxLpLGWJzKTYSz2m37RHy5Ce7zzQcH9vyP24QjyUBMdreqnoz4ivjJe581jqPnvNEbn7Q2faSfybNeRSyQtQ",
  "key19": "2HDVrhDBirZwE6fHPd3ARie35vo2PGNzpJuP3obkjbY6i1BiZ7B32voQo9psnDBMSMtMc4vExSasWUpfDaFSBfnr",
  "key20": "mxuN1ZUEL1dUH9bLg3jp1b8S3KV1KTKJMkTGCU6MXgMEkNHxtPdf3sdcC2HvkAjq2p8WvUt2Q14um8Wgoggckod",
  "key21": "Lhr73uKkCYnZFV5NTpmzezY1xAJY8RaupA5Jgjekr1KmGriYWpopaoX7YPHwubppztodHP5qw7aHufCem1HjNUt",
  "key22": "6mBF942xyEvJ5aeF1dc3SZzU87vKqgTZhLur1bs7aXmV63xs6RpdKudk7Q684zVanVmf51NDW7pHMjRCWZGvCuq",
  "key23": "3TX644At1Rkm8dMyJEL5MMoLsBgrXcAM7j7Jmru3E1c74BLCgZDQ4tMUkSrAQoUbTHtfwt6BDKZ5n6675AiP4anm",
  "key24": "4CrWn9WdF5Z4haxw3igfZvAXM3Rdy6fnxcuXn4GxuwqUgGivvfrT1KKrWczuA4wRNzh3wvJ6AVEJibukXmjqEtbV",
  "key25": "5rwdU6ZzTHHvqMJ9cdisXTcnBwcwS6LDsEkWFCEHC2zXTiq6zyo98oWucLBmSqsRGrnvfB7USwnfTMRCWMutXY9Y",
  "key26": "p22CRSEaDXb2pBSW6sFxgrQc6G4FYFsuM1kPz896ezkTBpkNdRNQPCcReLtLXpNbA7G9gJVgz3XUBGBzVAbK5Fq",
  "key27": "4Xr5hN1FnkLCRpeHqY16JfKuMgXeLajo3u4ZaFDrU2c7u1cTE4JHb3PD9ioXpQER9KxTKmofJDuiWLJdE3ido3wP",
  "key28": "MaZd3zwBAtmgdW4fRF6ftXvNqLw6gnfsTCUcfottiHfNYYvqgT76tXKUTf6FDJA8tRG7qVw4FTtNZ6n4WRtkqtX",
  "key29": "1bMJRnynWyD1BSzP25TYZdRfSrTw6t5211YgWnmbDQiLMPJzu1foCCNJPWxEz8zdN6dC1x6s7dYG7fYEZonz6UY",
  "key30": "5KMjSzADfgV1JqyKHDrwGG1SnRFyFoGd4cYP9ofDauDHPtpMwKk1SmfWsC985sdV3QsJK9zU14UsruPq9gtjHf67",
  "key31": "5zVdB5nkjGxRenSu1Gvjc1iL6gDcAEtmCP2gG4iCh3cFLqs3Tqwk8cgZ8vyjKg8MsNnWstNzM84oLFhRQw7nVQgN",
  "key32": "3kZSKMrMhfirkaqLcwWuTMu1pD22y7sRR76ReQABFmV4AXmHdZ5z5MmeRFbGsCXPZiSd1jfc8XV5nrp2C1gLXtbt",
  "key33": "2P8SJVogFEiFyNuQUzJD1uDx3BSeAg8P3kZXwCqn1enNzDm9uXDhV5kjtH27RBWHSjmaVT352X1Ap3ePyHY6AwXX",
  "key34": "4ugp6necGTUmR7jhUKGmsmc7uxeJRkw4MJWzR2QcB9Zd5oU3o97V6oZXSCcQNMxRF3TWEr2fYSp46znYNBnouhkV",
  "key35": "5EC4hFPgPbyJSetVHHh1ZHWnasBTAbNqgfsGCa4nXChBZ4wv4Z5uxNcsJCn1e5QsxAoBCARUn9DMgAxahZsJkWhv",
  "key36": "64VBUXVCwsGgGXGYhvbvVwPqS3G1Hx3WAQE1iCkXWFWtpFAQWhPJA8tAQaKNGk1yrwghNbAFEvLWxvYHwZs3w8dZ",
  "key37": "4yecjWgaBfxK2wh7PY8HEKNw3poNP9fdVrZiU4VYhDofLL1t9ttG4HK75cx49j3HH5WBfhRPoS89YdSChF8kQkXg",
  "key38": "G4HYyk8D2vg4f2cumE7n9eqxGZBNGyBtx4N6rviHYG4yayzZr28S686chPswzWYjDA5vGHAKoStsCExJRwpurUC",
  "key39": "3BRSrvYwH2Xn7kwcCckKNCoJ8fDbMmmKarraVHhFi4yRnwAzUjET7GAdXYLnPHQdbXkjCwNBZRkFgDS2rVWvmPMY",
  "key40": "5NixTQWQs8bRgtx5umHS7JQAePrbUsCM39JjQHTfHomyauQ99QoGUzXecK1XyFNXHEzB5J5hbozWpPAsqZVorDBt",
  "key41": "4MWDRtxaVMVP7VRKbauNXaeZQgrbXjp5AVHWwTFR9wpQiUsKo8nEvSaqiwFCahxhKV7qMidJFnWpLuNaPzm4WM7r",
  "key42": "nFaiYhDdkMVpf9kGQjwXmUboS5NVbbZwcRoeJvWXqNoZNdyDmdfLFb8RZJkRfwFAQJjTb4wLDXwe8Gzup6Zvtzq",
  "key43": "5jRM7S6dzdA3h8FDguMeUhRi4XQGwMoxtbDe1S3uwzshYAdRXTUoqxjc1yDNfMQBEuQrpded65eaQmqHJbuq5CVZ"
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
