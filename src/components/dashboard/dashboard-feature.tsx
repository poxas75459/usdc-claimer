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
    "SUkhXzv6GFAMykDYYqzyDcEFMYVvETmLU2QPX9JPcaeLsK3LuLdsjFNsFmqsdi9SthvsTh6aconvo1ELGbhqeb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpJBmU6rmD7wEdBbq7yRhD2cqWCxAejTHoVSSBe58esdEfkqeVt5feLTUMXuHmpZn3pSwsWJ3FjEcfwYE9gPFJC",
  "key1": "3bGb4j1SZzd4r2di7k4WPwUFu4hxid18LZZ5h1QgAJ3s4zSDsjEPeNarPwKQVnjVcj2xUQj6WzdTMkJTVHrnCP55",
  "key2": "3yGJACg89UqzZ15X1KwhEcPkwE2GcEnCDMToQGZkajYhSkNVowMt2MGJuqQUhA8gypAsSmMLHHy7Bo86FeUeqBPi",
  "key3": "4GD3oVqtAcxmn2JhXvCurbzwhYeZhRUZ2FTx5MNY79vdXiTnrQt1gENNow6JtcTZSr88Cr3bwh2M7g4mSyZALQ1i",
  "key4": "5oiJMEqKuc3QgJCmFVRpLhWshgHRTar8PofUV6AiDSUbxzVaLge8zp7s3182mb651MxdA4TkDEJB66ELosAnuNRe",
  "key5": "5DuntLySYBtpMNYzbpQxhr9U6m5U8itkmRamUDsxBr669FoyFvmNM9crHCikz25PnNJjT4GyaNnqJrThVipNFaja",
  "key6": "3VfUkNYTH7Rfxb5HbRaLQ1uaS6i9m3XPYg2iooUdbieU7DVo2XuQJWKHxzhgFoehD9QSMQYmDnwMY3nGGYniZNYz",
  "key7": "57NTSNh7TLeyHKUpefkvHq36n9dB4fyWJnwyx56S1gLZbDXEnWpKQ6xGkBBCHFZhRFBv1UQJGT5u6PGRJBVNp4mQ",
  "key8": "5uH8pLva8trSYiEYLtVxHPhJyzQ3ToHxwuxPfgEYhREgHZux27dmN5RvawyHffSE6EeqwNzrhCfGRvPjp9VdwJPD",
  "key9": "2gK4Z4Ft7YfQgHaa65dV76fv8K4gp5NdDWjPfDJ3QXNkzDzMAt7wvpPijCNtGgUSt5oKbQqz6bdMMkWbfa8ReTHf",
  "key10": "5b1zYwhtboSZwnnivo4XR5C1Up416ddLuKApv4X6n3TvevoytnU2UjYaDuuiLbKEP2ZSAD2okcrU5C1BUFYG8tDn",
  "key11": "LDmio9WVUFZAg7i8HqGAgpdFE2r12SpGGW4to8GQbD3brMEUYhkEUgNebgYd8fdJSobPLZ6Bd9ASQ8nQVisq7pj",
  "key12": "VL3JRVAXxA7Tngf9sJfRfhnUV2eiHMH2MNNCTueecbSZx19qYqi1SxupHoBxiS1uytEJsLs5xCMc5gGMntmwmuR",
  "key13": "31zu3K238YCrt2QdreoSxE3hLZbpW1GzKG5J6GPqjTsUW6wB88kPuzo8GeYcpsJnwJDeXo56ppiGPQqgn9NEbaXc",
  "key14": "2uo6ZRHZC8hStwx3TCpizPCPWHmdtn19X6zkEKSbYgr6jqkNEXDCuo7RmCExBV7R2ySghsZCp8qNNVnTtynqkFNy",
  "key15": "33H33579RcroszYXscNJo7rfkhm4jyX7omAHBYqn5arPPskmmRsR3LF239RBSPvc871tBPJpQcPNDsNxDcpZLpP3",
  "key16": "2ch8Tug79tRTQ5iEiNDHq2XbjqL5K8WsEoGxDayTFUfgACraHKBEFi4mA1vya4cVLPsgUdoDEv311NAB83KmaPcu",
  "key17": "2QvQpFZn6RGSGhHodaj7c5QBJ5ub84YUSrBYtXXTP3iVsQPEukF96JBPXUaDd1vxzGjqpFLjp68rCS2Xq9RYX8DV",
  "key18": "2Wp83JwC1ibgL6omLCYh8irRcvaUWXyZE2gpypQMY7wPJc2WCXnJAjbvVsHBuHSUiww61usJbhFzsXGF8fFkdoAz",
  "key19": "2DRUrDPqS2nAfYGamqdzk7FHTTP7zYcuWD4tDDyaqVyHBL6FQbo8dpMRMCjMJMz9RaK4DSzBATx7tgvyKAypzcvt",
  "key20": "2sgGZ97FVF1CLBoZDwBKcaRAevPzLdxYFhtbmbd4fMc4fJ7U5FsjkNxjbqAcjiXoPDVtsgWCxnSLW2cR73a8br3u",
  "key21": "3yvKNy6x3WFjCRw6kK5PeFUk4CsR3X4veMfqKAWbugKYVPyhaiochcgzm33VZAF32PresEieu3RezMrivXLkaqhF",
  "key22": "2tqW2AzAKHkQF8jPCsTS1SXjhZYRLpaNmejkTFM5HiD3SWRThD1ZLCB93SpgvEtcFZ34FMVpF9zDqKo1RqjSgtYV",
  "key23": "2nRomXijQXtpZVJmjzVojzthx1knkVCAqPt5nEYC7Zwvsnqq8TwPFV5rJaWDBujeHEzf9eRezgFWEFH6Y5qT6tH4",
  "key24": "2XFxKKmfmXiKL1mTYiNdxaeV3KGRVBJExtyquK8Doiks3XQySKd9e9YqEzUeZvjFXU8EzH79i4PVUhbgSNyNghMX",
  "key25": "3FPwhWuJWHm9TgJRBQZPg5g18SA6oE1kjwJXWe5v5ng17NipGAX7fppNWuAfi7FzuQTHaLZt45BQboRxzGrN4zAY",
  "key26": "3kpWsGuWatjFBRDuZ3ktfhdvbxVh1UFhYhWjqLGJohcohWFZN6fzd7DNaHJD8uNGdQUrxFxKSBtb79Cso1uHVn7T",
  "key27": "iftsvwJaQJesRJDk3UVuirZV1aeWrzs2kDEXdpKHDSZssxBhLQAfDmNjXamk5oAcPmmNpXE2KjH2zouqexFtG4x",
  "key28": "KLWjhi1kGYvMbJwpc279eH41uosbpDNmpeVx1CZdRc4gHNcm8DRwAUBtWoSo5FmtQiUo1didgZNiMnth2d1jGbU",
  "key29": "2pGDsG9zojjx3CX8m3KZTjgdqWw6xUhM3otdV3Cz5Qc2pzi4Dyk2QxrtUK2ndKWwgrQnR82qEejH83utTjcFqyDa",
  "key30": "4k28K3LMz6J1XVDT3rqefBrPVapneppDR5eM2CRdPV8skT9rebUps7ydN3m4ioRQ9thCL6yARGib7yB3j86YKLcF",
  "key31": "3miV3zT2p4cheyb7PuoyrhLcxFJo9sPTvJqiGgUsBhUFEEcbWmSEZGdbb6PRMytHqGnY2dGmJT7FcVpi198VaPgc",
  "key32": "2hLzc3aiM6gpaiMKUHnsN6bqFfjCRumGTBTX6KUCkMEr78JdbgCT1AtA9eBRPNWqv45KQTaswoUTrtJAPNrZYAFM",
  "key33": "9q8kRWnFmBQSNaysbbXgR9dtEwqpaja1gQP45oPikuLg84bYazf1czu9Jad6U8NAG9XHxBPpYG6PUh44gRpFFSc",
  "key34": "2EFrfbZHs1xsJuZMHhd21uda1EVEzKxyUJ5YUPVt5nRLPn2eJ5LMwD6HaRDdpSmJCZaRtk5Y2AA17oqC5akpx4g4",
  "key35": "5TkXpMMkTQHsNN5rT8i4BuLppv9LA5mKhuwhUiZMmeSWdyCMawnUkmogZK93aHDJTUe9tB85KJkKtpyDUe7DiPAd",
  "key36": "3ELbQ5GGsgVMTZSni9DbzkecAvUVTyFDGMtuj1Aa1ZgiNyGCtpDc5MC1vGW7V1cxa1wUpdLUgmzyioZA2w15rgc"
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
