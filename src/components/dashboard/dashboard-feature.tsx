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
    "38ZbaYhtMpx7CXqjBA6ornm9JbwLTS5wDLohcM8NwijxRFEoPtwEgsxL2C9LKxZYYjBDVL85gbx3cBQMUpyCNGgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRGAdwaeWQjWahYojMhynpGETd1111PYm54XYNhsWhKgEyR4EK62bb2Jw2RXJo2WMyigSLXYC7GVs1XEwcJdzih",
  "key1": "2zScHeP47CaUQJsuCWxhjykd6j8obaZehcDSgqa78nAngR782iSc96MF6ivaM3ZBhE4xGaqZztHtfaRArftPP9Ad",
  "key2": "2j5DsTGgGjQFbThemTEMixWcwHQWvjMj6SrhdwJjUbBGwfQXfWYEbBauNU6fHGgxfcXEdkUXP2DGYkM96DSiEWJt",
  "key3": "4qnDc8oDNtk6diNXFJyYpS6XBdvt5g82z7W4tRTwwPNGkJAmAT4JEdhUrPqm2GMYHqXo7frkLQz9dcQPUrRz43uo",
  "key4": "2ahimzJYBdPUZi4En7dBztHJa1pgx6BN7xbs9gCNdbnYJKSWRLA93eDYS1yPrW9NZAxiUPDi6FWDd11UwG67k5Ky",
  "key5": "4HxiYnbRNvjECV4EmRFjgK44hQ3NDimmnZ9zM8jGnf8wkvAucBmWAi18Tw6mDRitFqfa4EedJ5oeP3BKySV72MHp",
  "key6": "2A8YQ1GECD1PqQpnCcRg32LWBnYzoz4GXBdDJbMyEt1145c2RmaGrdiKPiGfTLP1bQ9bty3wuPiQXsra7ZdNfWQL",
  "key7": "3YkZJEDA7Yff3hvs5A1YMAP6kNYAzJgyraCCZsQLtW31E6bYd1y9pcuVhCdUns1JNDA53xXise7xEMGtq4nmMkoR",
  "key8": "4SAcMUcqhtq2YW6WwkjTFX22iGaagfst7VabdR7br7mYz5FBh1jFUfDhctBCsuZbx1KgpzwQoLLa27B7DjQCRdPK",
  "key9": "3rBHXkbTeNXQCkCmq85jrXnG19njGCVBUWvmX6zJpujyZXAtCSu9qvqT7KQb2bwtZXYJSdiXFcJhTZEVzgb2CviJ",
  "key10": "2LiLczssC9U3Mcr1TEdYtNC13bhDX1u266a3W5RuDVBR7gSFDVsQWRsVVnfPbQUixxr6J6RJ6aTHVxyRnVfsQVrm",
  "key11": "5Nv2TYUjRC3XypniPEXkPAMcDhJok4CShwiYdvAV8F8wfNAoyKgvZ2BSkw2edBEnchACVbsEE28ykohHy9LBtBDa",
  "key12": "4J6cMofxoohRAK2PHXEeMKpZj8wWSmQtz4NfU6yqNdc3Z27jkLJ6ZDCQq3zWCkU9DtDPb5HiDHWEFCd34UcEw2zm",
  "key13": "67BuCvTrP6VDYppZVUsmWBbqmFcSXkhaWdea5B2C2ScvGv8LVBujXbFRmwocU6ZTtn98BUht22b3JfBTGZXajRYY",
  "key14": "4vdzmjon4G9zkdjvXU1jNQiZNM4DzTJDSC7nwwXaFd1B1ELiqYDc9K6a8DKCiwFwTAypcG6gJwHoe2ymEabnoQv5",
  "key15": "BMncHeWwhVNYVXVikGqN1YjR5VCeGZ4tNZTC1hKy75Pv91v5TXwUwTxUKrBrnBG5HYatAX5V5PejdkWGtUAzPW1",
  "key16": "5PVy2iFnNKM4BAsuxbS1pmbhZWFveeEVakLdPw7ztS7RheREwfrm6mww3xpjQiT1MnBDe4R4TTR5Ny4y2CsFQPn2",
  "key17": "5U53qxbBSiRq3FcryVXvuH1YtM2uR9T6Qp8aHRBqHJsGFbGKbrxSN8Mjce2PLaX6PWcyDyBadSiXQhEVZbUwGuru",
  "key18": "2rKshhMx8RDiVrHJ5Ug7ntikwP1MbC4Q6TH3skaduQg96hZr9bnTsvWMFCadPuvr4QKWknPwj7QNbfubRTCNNbuS",
  "key19": "3uSdnu49mYTFjDjDa2AjRyys5ohdDDAqhEUhkGJeYivYe1nPbCfCJvDyAHe2jqKsFh2dHyuhU8MiGtDni96vWMmh",
  "key20": "5ptLsfncsL3Tu5sBnKZvK1mV5yKo3AjQ9yT3KB4Hjwqeg7UeSJe6sf9BKq7CgvyWJqAXvkwvgAgBJ3xzxyMdysJA",
  "key21": "37La5tXX8F4EKMZagVnyUF8CyzCS6tTQUb7XsRCp31tFx6uggmrn9JEiqXQG64cxmd42bGcgsWsSnPjikYX3WB1D",
  "key22": "28kEHsLJLgutoWfWZ4mzDXzaDEMxdCPm8vbCU33foiLEtwZxbFw1qnsvSuVfdbvfTGYEk3CvXWrd4xZhCNmBh5u7",
  "key23": "5RvPwesVDAwXUU6QoQ3EhBE6ceyc86gh5GEYST5MSEjyzkfJv6p65F76TM83iJF2iDBeHzZfJmSL8F9uq6W5nqL5",
  "key24": "2TDpsXyZxim22ytPC4bGiXF4X9s8eAQo3iwWr1jCTJa6HE6K2sEibjKdMeA9tRa3hTNbWkW9HPQJHSVSFVyRghJG",
  "key25": "5raUv7st8zR875xosybMS69tqxZ9uBW8ziRCRRV1gqKMKr7TYBDZCPdjGmz32wEpJquLLwvpmTXBuphiVKG9rHtf",
  "key26": "4qZA8af9oFBG6SBWHwgcjFx22wXVHBw7eL548ySCv3sDshFERKRDKS8bxaMiT7BN95Xy9thqKELijw9eyaJ81A2",
  "key27": "5xUs95bhMZejTpSSsNUJzjbovzEdZSvcjt53LVG5XH2LvKGU6hkePj6Wqw6ccDXEy4zd4WsU37giKXWqWx8nibFg",
  "key28": "42qDgNctFUsVq13DpG4rbZjCJPYSTS7ipdx4RcjnDKin7ZTASQQNEJbZ9JRYenNLd41HCoSh68gptHkArsofuHUU",
  "key29": "YmWEuJ7pAgK2kDq9BETGKyndEkjLbBipwBde2HRYrUQs83uR8KL1heKePozmq7DuRYVRuk7CS6iR2746BkRK1Ms",
  "key30": "5vjy8CBMVMsqL68wzwiJqvUAiuz3e64jMhgQ6DkAaRy51wzisisye9ETfAWZt9e2H2ZifGm5it6rwtMf6EfEgUez",
  "key31": "2FWoa773WxiG2FsptbdwJFM57eaESK3LRQyEyKAFpVCpHZ3t8gWjm47Xrgz9oZA4sYtNNvRo5RaMTfNFKy2yvWUV",
  "key32": "2f6JtHAd8cgi8xpwSDFaRBbgBSMkLLkgFCCitW9YaBRfqeQXp8ia1XrKaf3waQ4qr19xcvRZUegqE6fRy3p493rv",
  "key33": "3YF9mm6GuhbuaEWkMpQiaBKZNSW8cY9TFqaikmECi8wnJaXsx4qvqoomYn7VgpJdiruJ3wSB83r58VjW4yLexkwc",
  "key34": "5J5uCDycXrAA4ucqMwij8EXkxX5S7WTDYfD7yHESNJH5VgK3mRGT86zRyRrnSKtsHLZdGSzBdkeSR8upb31HtbGQ",
  "key35": "3K5tCmjHALkphdjAPq5rrtn7qgcafWCVMJp2ewYSxWfz46BovLRcqgimGVX1vQpRj9kt5cwpUVG7yjRee8ZmswGB"
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
