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
    "28h1oTZvj6TDNa7WGTzjrZ1nkPmYTPV8fgpdMR7KLvYRgxzq1abpH6E5tQkdoMdP2CvA5ZtnsL2HtC3eHME23XRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xEQg3Bqj8XAxeQepDm4uqtbjohfXYB6Z91r1y8wDAsTNGpzKDGrCh874s5wLJkW3Z8G7V2PdN6U51uB3Waw9q4",
  "key1": "3cgyv8QYVuDVBDDZCAoysbVtJYx7An6pLxwMtR1UKC2irDQfHS6EE7HtojVYPrURxzMntbLMsASEGsbHCwGqUx2w",
  "key2": "53fBedNvXZrmDZoZHqWvmSaDf1uspAa1a4K1nho6TgUXqhQF5V2s5AZ7CPn8iXQBfsKbaYY84raJoM5eWw6Pz4K7",
  "key3": "5zrzYhxBxjbTFHXW7Kb3NjJZi9a6xkBumSDqqjxgjrvocLh8MtCBf2zrdZXMK68DnX8cZqjxnrRMdufLhUhggWVb",
  "key4": "361AQPSRhFqUKcc8y3FCGhNXGbGUFA6MCLw6kjDd3eGVNF4xkq1nubXrQHp7J6TUBXF6HhC5S3CAPcwt8ZCTGm7m",
  "key5": "23S4fAv5eneodCbSVgUrSrZZmCCdYb6QnotNLwVkaSP4kwymdPQXAKDzP3jZH4jAsvpfbEViDAcdbFWZrtn3Qdkp",
  "key6": "sCoPFd5GpdrSc6DMT8k5HqGCoQh4XNeoxX5q6Er6Kv6YRXe2MLXPSbuQPg4c5dPi7oh6kG6GQQdceaqf6eefrgi",
  "key7": "5ABAPXpVPZjXHGEVPCpFBpPubW1oydG2QQmqwL5Caqjj55R9hTQ8QEeCKD4muKMSvW2JTgV14LDkjQJq4MphDZzu",
  "key8": "J9Mt2X1L4o9uApzizzzSJC5vZGQPk5dHPSTqpm2scidk1nrEsPZ34in3x7ZN4r3VGj3crPtue62yvaJt6oX4r6E",
  "key9": "zgcCuTouhwq4TzeD4MeQwe55DCcaULogKTk3YR9ArAfLBu53qoaYHPYN2Qphb8Uk9zS6QLUSSVi7Pf2gV8Rb26D",
  "key10": "4RpwZjG7u4mLLsD1jnzZFcicHKmkyJoWSdvtkiucZKntj2aUKzCgvGZPeWNA7b8y47hgoTBfVS89nWqoEPxANBmc",
  "key11": "5oMZrL1XkDebqn3F3A6mbHSF1MUXL8DYUGELaV7WNezTrKbWoKcYPx8S95LKo4D4K69XGCaXoBrR65HWDQcvhAXc",
  "key12": "2rS4JVnAgiVPrVprTzRHZbMqtcgrGtfdh8GgusTS4aJQyzXMS5kLvgrkgJFYmtFv8zZhw5tSvbfz4ucVGUfPJMjy",
  "key13": "5d9v8x2NV2usNP3uW24xG2Z5VURpKniuE8fsvjSy5aCjsNUHGcDmDYYoy7r3HFpFHv6x5RwGkcYNbRWJrmUeAq9c",
  "key14": "MdDx6esjj65iRQkfRecZ5527Rs3Q8bLCCiYA6Rfm7n4GZieVg3hUQcMwPNF7EdVdbowfSWPDbrckinsJz1KXYb2",
  "key15": "5fgMJRQDVXr2KAUdfgPXHHBvtmwrz6SfhQzunQquDYdiREnLCaJVxzDbHAzDZhbVc8ej6Jsm86Yu6FmDGhwDbjSX",
  "key16": "tX78cBYkwQeAsNdUcC7qzeSDv4aBBiB2phH1zNyufMAR38FAL7D43P8zdzDbFK9JAy7WbB4KKZcUjznGAkoP6GN",
  "key17": "NihDgzdDbGE1Hr9kgBmW24x2rXk9a5TJFSub2bAvvH6HFQy2CSyXCUGGceszGocPZb4ZLRFWrp2E2xxkLCzUHg2",
  "key18": "3gu7uCHunuSLBkqK2GMsQ29FQ2aiDSncQn5B6ngrq4zKr4HCjYEyCLvYns3PVnKLUqgHzjLLy6tMhNbVLMpAhMPY",
  "key19": "YmtWYksUacpqYeLmQtEWVamj4qNR1tRjXMPLrPYkc38DJFgmE2EnZMyiSYnkKxWy7t2dHXJtvwHV5sUVLwRctEZ",
  "key20": "5AMwVXkd4WRmgApbo637rbQiMHhUctwqvyuWJ7WWu7jQt42yBUhXTqruvTPUcr6fb8fTXpptKaMApasQynesS1na",
  "key21": "65GR2sHmfMWdBoRQek12bc8Xmk23qzmXeRN1LgtHUYVqWZdsoTXeFFkzszVa9YFdTAvFGRRXmz3QeV9AAnkv3r9T",
  "key22": "2n6K9KxMi3GGNULvTvYPH5yqa8jBTj3H5QAQCShVgRjNDSib4TtzHKukLMyQwKLLdsAjTo5ZiXauxDRALqPEMXdh",
  "key23": "4Xt2TDHvZnBUo6zkQegqo7kU3suXiCNgA2d3NdeGT3e6A6R4uVgWQxjNxpfuqANeLcuEmvvwDG1MVis8355UtZqu",
  "key24": "2yauYTriMi15GBruDkmnJ5oZDoGv2Ksvzea28wKa2sLsLteqBaoiXKDxBtcYV3jojyoNi1kpgtvninxisoRKS8qN",
  "key25": "3CQ75d8gD9BSvgmx3uYzE8Q8QatJ7TK9ucdRCG5d61GSMd7SJJmBncR7WZ4AybVVDzXpED4yGfuJ1QU6Cp1tqMBW",
  "key26": "2RVxd5wczkyRfkikKg9MwCLh2Vzt4Lna4ij4u26ERjrqMwZx9u7gSp5iSrViqA2ZvWxtSLAjUx157sMGbtJSXyLV",
  "key27": "4Hic5XFT7G4yzMXRcrXB5oeQWWR3YPeerBdfsNJ2VTdFHsGidQD5jsyo7bZrwpmnZ46wFRPAjMhKrmNkWwxUU7BW",
  "key28": "3MQMHzW3P4KRrSAGjdbJTNNcWvaAuQJucfQ3Nrgf9S8qBKizeKVjt7NhZaGSQMw9u2eC4xzQ9DuuWoHwX76Mpovf",
  "key29": "3gzArDwpJ6hVWK4xnuqLEqMiwxSm8kBEseZf97uGS7s2Momkao4uKYpy9vBsV4qQYQ3tY5jPrmHhtgUH1TtDAHGq",
  "key30": "57pDE4PCHbcj4w5S4cD4ftBdjLuH7VC3mTZeLsZ4GHrWDfH4qsPwkMbJxRxKwRW32LB2hL7BxiTPz94xCwLf6ZV",
  "key31": "5tJemEQZsptNLQGesouRhFKC8v6KCGrpquVGBwGZC7SnPVYw5gC3bBMT8ivwWonMSaA3bBuJfZAUzaWaAAaomuUK",
  "key32": "3jQmWQhxVMZab4vsy1HdoAVdsarLmDvAFbtuLFrmrMGot2JqErwD5drpiwEfTqvyd4X91ene6rE5QZRmSzxDyMzp",
  "key33": "42KepHCYXiV6fUiKMovVRCEKziEc8Benb9rbJWrzbevm3LKhSndvzPn3DWZj1JKHR7Fo4J5HaHyuHTjaqnnirkqR",
  "key34": "ZbggAoMwdJPWYYbpfsy6ZY1tkH9ZtvkdgPszocaSb1sSFBR9FsuHofsXEREPUqozRZ5KmMN1WBJRvcnVSJxwHfz",
  "key35": "2r4iVXqJbCs59qZde4ERW996nHv7qivCosnwAhQ4PzBurPAYYKLpey3JCAy6bSJxpK1QahGmERszp82L25MTXPEJ",
  "key36": "3mEcnWEw8QWuHUzmL259gpSJDsSUdS1vEppE4za69vn7L8XYTcQQNFBuAimRmQLA6w28LD1hYczQc5Ym141221QS",
  "key37": "3M1xW6RuzRWrgsAy7xCQKBcDjoQBFUDQuFdJ9g2Ck4zdFa6iffbgCLvHhti7r3pu72CtF34XRDnecM7pLpV6gRNA",
  "key38": "2U1Xw1gPT2hx4uEYfGbgQvuFGxiATDstb3vJY57sdbR2L27qMzkjyJP9LE65s15sRv87LJdALGNRuFKcQSVgTVdk",
  "key39": "3SW1ENz9isgYWiCxwHKbU1pT2gnyTz9kbv6pSUUdD5zDcokDZ8C3KfpYZecXnPMpizkta2gXts2WzNCwthdh34Yf",
  "key40": "3Gp7ABzB1fjPJFAzrLQ9oaghpQAbGHUqZKYuaWDXNZ4qxoQ8dBicahvirFYKCWNunK8EHW2dcxumx4ir2c7GbE2e",
  "key41": "2bfdfxhJjWqBGcSptvegTZrWYqFfGqpeWv29NfLyBb3FDwcLcBhwBAJr5MDtEsu1DxnmoNPxTJmQzkmJDBF4TXQG",
  "key42": "3UyWkKwsZh6mn5wjLtQQLCK7Bc8JkAtNY6ExK2U5rQubCuP9HKziyvUioiBXEV4MBxhbzcEqHVNUYfwa3KQeoQHC",
  "key43": "4r5Q9sBxuUVCJvyFUBp7o11NC7gbP7ZHdWJ1eZ9es4NxbsjC6ryfDg9Dt2G2p7k9sditJrVzUW9beNpJASFoSUXy",
  "key44": "4qy21tEzGhZdZokc4wiSBhhhGPcYdibF46XNcMsQoUGCQGYjtjq3p9MpRpyyFUjrTzaBFhHKsJrLj5tB8E5DXStT",
  "key45": "3eJGX7LDL64EbcrsXeu5RWVn1JjWjuKBfb4y3sgdzAsg3sWmb7frqBDEdNPgKHMVxQgCgxTKx1JrSFb7xqrFuMLM",
  "key46": "44DeQLd2Y5gwYakaSm27nJE7tjRawZZAbAogtYEonYYUuTW8RNnHZpWk33dLJj9yGYeTA85UA81PSHpqSC4AKBfF",
  "key47": "5ZWMb9kkuncnFFjB5dvd6Ug4AKfZ1LdhBQgWDyb4BDt89R59torEoFJ328J2BKdbCosJ42wAYQQD8tqSSUgn4H5C",
  "key48": "5idqqwWLJAQrdREmn52BFDGrKGnQ12ZtfCtmy9cSTRbnsuyVbAvSTFs5HW54CcBKBMjyFYhmYgUuJ9EopciWr4Px"
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
