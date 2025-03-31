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
    "3PkB9ZRmxZW7Fxp151NDQkVCCBrZk2jJgcVtPXZWpAgrsNvK2yYFRtYAY1ZmdT4JRaZ8udjzNz2GEDjkFCu3Bz5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2Vw3DjfomeMMduV2hVgLSDbGA3s8xQWSuokncceWBmHA8pwThhUWDzpuJvzr3zj7CKgEwG49Sdn8a4KLhFNMEq",
  "key1": "3yHkKUvoY5BbQsA5yerqDZsV376ax8raKUUoDysmWJqBKPpvSUCsJyqZdA2RULg2CdWxwvycJLGN3FAP3iMC7cGW",
  "key2": "59CwH2RJw7jfuZrHiSiKnSfAeTXg9rsx2muuYPDQAFeNzu6RBjorqqyCiTW5NhXqSGVkJiuF96dREs52P34cgC4h",
  "key3": "34YHUiYYL2Gouyftr2XGQFrpw5ca37tM545Rf2tQd6C5i5YAgaspmpesbXGxwfwMUeMK8sxw2tzRfowJL6oaLQsb",
  "key4": "56LpTmrrWosMQ1hwBwgrYmtREfxZbUhncDHTBgGa3iqdSiHbkwggBa4q22FFY2KjoP79FcJ7yG4ifQc8cg8hGYWm",
  "key5": "42UspPNzgHaPVnMGovrieEL5zxoSzrJ8BYqne5eyCv8hF8dwegMAe7gF2qUZncx29tdHgq7oHzQs42z5u8FatWS4",
  "key6": "4bDEvbcafkELJdMEAzTa6kpFLozG7Atw4CRSYPrSfufRjr8Jsudz7h6Tm3Y5RF9RRxq9FEA3WNEzw3sc7ci7rc5W",
  "key7": "bx4uJZidxNq7y98zbLLvuAuzjVZwY9VwBF5EmX1Dz5WJWXHkFiU4ST5NLVncJjaHuHh9k4XHb3UqZbcDdtM9Ceh",
  "key8": "3TtpWkQiLEzMqbE8nvH9hq8qHSwiTkKro2nBbv9cZ8sAdUZmiqpS8cSyRxExUmqxUcpuxuAp6J9uLunCGnzDZNRN",
  "key9": "32uVRmbHZr7fVEgouKcsHznHuzGZqQ2GJswqTXxf9EtdM8Jw4aEfgnAKDLsXaNMRvjuccBZX7hJZjTvhdBbFq2yR",
  "key10": "4pteMi5dV8x2mF4wHgR5Wyzimj3MDobLmQmxPjStgR7y2mG8YSBsY2xLSQoqJKoi1Q1tN5Ds2TSkKXPfiD8nBMgG",
  "key11": "3jPrXYUU3dLNkEXjf48kj5k86aVhQU2QuewjR51oJ7tZqGWgKW5J6EFcimmTwP4R5BMufE4rLLF9CwWijpMKHn3r",
  "key12": "3WWTJYJUmJ8ZFwpQo5GXj2M44Y8rmvLhXHSuv2D2zDxvARD54RkiMagdGpAPNNA4xc72Z9kjyhniMnLgWL4iWoca",
  "key13": "21bzHcnf1N18v83GKqExUAGTRCP9PDo93h16iXvWUD98SDwLJzvgpgYvEtiuFtCFgcN4wrmdZq41X7oR2f9rEzcU",
  "key14": "2ygyih7brz3gPUvMAX5FXmY5FAcCnNVPxMEukBYTCBqYZK6Gq8MwVUTJFjDQB92JFeTjLsUmwqHUSb5i27c9vcV4",
  "key15": "4bgPwweYCYS9EFUtAtxSMuW4Ls2sWEWQWEoRtL5dbqLw6F4pkjZawf6NpuGtBEr2qjbtgnod9H99xNrW3gUtRhWh",
  "key16": "3J4fLFhXzHDGGcMz7TutZ1A3paAmLm2fEvo9KjQBMZnhXxjhoZkDVoFtjWW9fnzFEU4GYWP5GJj4mzjLcu4GCdNK",
  "key17": "2cJbWUisFEQx27zfnMYM2iWc5aCVwDWxPSZKA817vXT4hPGrgvJxr3jpJC9yKwt3ZoSwBdaaMfB3tbMd5yUh55iW",
  "key18": "3m8JF7BhWepk4ZgosvKiC5mCsBX1PcVhQMhe6qfEpEahVDtXfb95bfxYnDwKsQdv7qcmgDTCUhoetUEQkrNYMYcX",
  "key19": "4rzym6wbpw1MzAGi5LP15W84kGp8AStgrW2n6NspeGA6aqF6x1rM2QYHot63gQiW12cAshd7YwMCige2As93YHGN",
  "key20": "5jkem2RCZGNRm4Qq6Y3BZauYTGJAvRbLp5r6eChzWC4sgR91qyuLmrHCfNYRtiMmvzboCv6xv63PGbdQtAQufopV",
  "key21": "33YmdYetZVKrRRK7JrFavbrYxsgVvndMds5F34x64747pHJC9mUi8SH4DHgEw3ZJG3FcQDifn1s33eA6wdwNxVeP",
  "key22": "4ea5R3ki3Ley19D1e5pHXwVpYuzHEeLsHKbJV5VMEyLSwqRnGHr6Gzy5vzG7tQbheKLipT8mJ3K9EcaYCn6RFeiV",
  "key23": "21kp6mHQuj31AtCjWhZZuVqUejvGaizdbmkDo4R5ourpcRdcmxmQibJiii326KfcftFNStT4WV4eLH4QGALHe6Yr",
  "key24": "3NHb6ucM9SiAsvE7Y6j3TmJLct7WsKuTahGQLDuZ9cZRAYi9oM5qhGXtEdeZqpLgigDNFpdTgoZs25WMGexFXMY5",
  "key25": "3oXqhxjnuS38VYwj5hZwHLdFpgbjTKLTG5KwKnnSGhVechTeJtdRsBUWN1RABJTTFzEmqvATjQuzxrnhTEDQbist",
  "key26": "5rghmvBtFyN4aajVHSW9L1hKzNEquXhE2WZ8RucrKVopjYF2gaLfVqhbFasEff5EnK5exeoBsXBN3xXmR5bfLdGF",
  "key27": "4ktk3frHLgievdKmT55q5zLtW2vHkfKzXpUGBbrLKokfZFbjJQ6gk728yyesGSxU4d5m9CfWPrzL8df8XZHsXZyy",
  "key28": "2VcR46FRSLTvCz6JyhKimL148FgGWKVgp17BMvtUw9oy7sWpuPTHe73WpsNa8GTS1DsefZCA8mn91cNmAZ1jug7a",
  "key29": "3doFARY2zJ8poTvASqnhz144b3oHGMTBhqGPgqU23HKTSz8M7idm2wXVKGfr13Eb7SM4HRrbUeNdrMvruvc2eAXP",
  "key30": "5gmUNgMyydwz9aTNzC6XiiQLxPU4hJC54LU3H2Td49UUMHzCTMPeveZAXzMG5711EuPnbqKiTPpgjrJxpVuzqPre",
  "key31": "J29TYAZvKMTZwPHWPEEQ8fArkbEQb8UYtG8v4eEbgCwA8btAmy6GkXG7dDiCdmogJHSkkKUfpCDifzgzeo99MJm",
  "key32": "5SQ6VHsxtdm5TAzcvQFW4zqaga4oq3ftPywveJXoFkGm7bN974AJgXyEVTm4Ecb9KQAmAGZ16dmv3Z7mCZ734kCh",
  "key33": "syGJJ5gE7r3xWRHNtsTybU7L3gUuiTPUPPo5x4xfzd1x58U2KnynCwo4qL7vc3kJ1hCnb6gpTztRDfQro8Dq23x",
  "key34": "JgGXQeHDNWjK5Xr8vwxGvq8jr4MSDSBg5ihHQRGZotM3WUPLMiMRCJ3Z5gqL7sCFmEFws9DiFtoKKadiEa8bMaK"
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
