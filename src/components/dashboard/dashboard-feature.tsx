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
    "5n9ZfQPBTGfCQnVcTdd9h1hAXwq4zXEoePwSbTQj3kcMMBj8y2x3EYT1NjoJ7ZkQ43p6pkRAAY6bconxnNgqKihA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2e63BWXu7c3yPmpzbqQGAiE4tGHTHsoMozjbSRJEBxiNPteAqP2WQGwzTofdRzzhZzdR5dbEoJne2zPWXs3kR1",
  "key1": "54nPaNnVQt4o2X7Hck9Az4fW8hoL9HNYgpqR4UefBqS3WNXweXjAYdbqy2gGE55xcfYachvo7xwd6DTzmrmARCoX",
  "key2": "43hTBWPHZDq2TvVhSxxEpLXMWH3xnxrALeFeXGgSsYj2LYR44rWZCoY6jRhLchnCpZFYdPDmHZD2nGkYhqfpDVLB",
  "key3": "5cRDp3qmoRi23ZJjcoYyYWWoQan8dzpNpVQeC2Hg1PA4JVppB9ir9Pz2ZZ6vgvC15KND9nu7b5cDctAiYxQc1M3M",
  "key4": "4fpsEEBLQjZcmhrhr3ADDkcvy69pK7atXwvfufajC7qbBoC7V6BpJVFfKbJW1KtvkwzRhhB6JD6LFuei6RZVbtm2",
  "key5": "4JEuGC77t3YX4FxPq1WMFgG7Xg18C4Pt1RHCEz3PeWrMn87Vmkiqbrn8bpV8UsWjDw5G9AVQ4rGgMCRpfz2aDHXm",
  "key6": "4RR5ibPsuHte6mMd2rFM39WLncAvL3ezTMVHm1HjT4PAwtimnAtdUrVXUEWKG3a5bNSRRcFgXizGF8tgp6zcHub9",
  "key7": "5XNFWhQL1H5pqqJUM28mDK126aMPRoqZzcgsEU29fhMa8XiJmbq4gWiKBS3MhHGT48SW7esZfPw4yenuoABx9bam",
  "key8": "4Zos3bNEZjFSnzLgv2WHkGfB1MkpvzESoiJ5ymtrWLqRfgjSHm1DFikKa5rGUyKhBcQgVnakruyCSpPd7DBiFUDg",
  "key9": "fPPiGSBWu2Y7Pv1m1X22AEAC3zfqANDPnH4paU27NsxtyoF5feK774QbwkLkvqsKTWHQVzzXpmP5xCYoUN5RnTD",
  "key10": "35ES2z8eUqRV32k7D8A6E1fA2P76rV61WwicFD6uBKP8ippbrWi2ZBmeR8a5HEbi2EidibWUoxiTTd3hNStuLCGw",
  "key11": "4ddHJGRggbyEeqaNMKazkY9e2LHJteYQVQ73edFGwf3YxU3J6cynGv1JzqiS6mmb9ddYRcTwWUt93aS7DCHooWyG",
  "key12": "4s7RSiDXKL48jRqZpaQ2QDRGzF4V38h3MnEmPhZeHCncxcZdKaPamp7UbqL2jUH7jdP2pdM5e6dNhmk5V7tBSmwr",
  "key13": "3bPzC5u8BSXDwbRYDn7wN3oNLgoHr9ei7tqs7gZSUh6s8Bz6szfrRnMgcK4KDc9SynTZhgi9FqEc9JsrtFEy3cp6",
  "key14": "2Vwty4JqQZofXAjqKTF51FCM6HkZQg2RxAwAcSjCUvBNRyKEcQbbjuQ6K9qhFaCRuoL8GVZBCwBPxR88ap4rixTm",
  "key15": "2ZwpZDDV4mKH6j4gP8BnrG2ng2PjXfzGbMVy3YFbt6RMsp6nRyZZdCvWemoXiR47PyQDk9BmQWPHwNuJWMVeyrHY",
  "key16": "2ccah4ZJRUDjuNSGMAE1KtaQN9gC859BhbfiRude3KFxCtJL9rVJSWRYFd4uzSfXVrSLrafAMuji3Hy4WatWjbLW",
  "key17": "5DhPmM5Wr3LQaENvH5UQUVE1AZY9RUgjj2ybC7zZW5pmXRmX1ShLF2Mxqrnj7WH6pzydRoUmB8CSvxMyN8BnwNNY",
  "key18": "5zpYxU3G6zQPTVLyKULPWY8rAVYxmcjLerTnTTpG3LdYHXhcA3y6yQR39MkMCUmPkDnkmz8zANT1YDJgZXTJVTsr",
  "key19": "3L7mfSngLAA3XfQ9H2kAGov6tspu6yvMWh7jj5VyEvBXdnvcRoFHn1vL9DsiHNmX8J6hTmBpAG2dwTxkVsMrEipR",
  "key20": "2zeawSr7XsD3LdbhCrgFqrbV4Bw5w9YDwFUcod7uvfmC79PrnbuExvzTT6XskZ8U6CKajHG2E6sAjrFv9Hax1gci",
  "key21": "2gcb86wFR3xUEXhbkZHUp6jE3f5xEo7t2R87nJPXSPPu4MQ5bTisfQYhzkpVBv1PX4SPstMnXP5NhPw9fZLZYAkP",
  "key22": "5HzT2xnTj94TDsW2c2AkRwRPyB38p14K3ebfefSpeAuX7rYhC2vyBrddgFstK1FVJztzc7TUWzNfbA4RjpGgWifd",
  "key23": "jHvVu3x44AW9KF4LFs3mrfkcUoZeagxVWkpPvkvYLueN26ZPHqnV6jSBnBgp54ZNQsq2TEzCsVTbi4JaEY77YVF",
  "key24": "3TarcQV5QNTskSVT5QouTRgt8G2A7vWYKMFU13NwyzkBoFyA9dTkKP96jL9N7NniJvQrivUBchKPNqLV5dDxXUss",
  "key25": "E4rPXUXCsFip5TSmAnPWVfqY46oes96zKfQnPmtgEazhYtrqDSKpNUy6wZgvYQyEctX7pR4djiLNm4t8nKoAgEB",
  "key26": "2Tsi7kHhmT5fja1am3JZKasfBWSyvDRMctXrPLcHujyP8WFogU4dyqHDFSExs4iFysrMVsw1gZihh7UaBxRCnem3",
  "key27": "3GULUUKwiNH3Wi4NhwJWokvnusQYc14XrMhh6kcDT39YctTVBUyVhfDjiV21paySNqZpjNNxXr6JC9MYWoN9zki3",
  "key28": "zYhfj1xNgZo94BbE9QRYy4VQV1C5aG3esM72k1Ve28CgpFeXm4YWfe924aFzmz79xRBQ22JP7dT6o8Tn8CZdc2R",
  "key29": "615TQDrLigA8R1hcsvzMPnD4AJdWRpqY1w4EhciwTjui1jaa3pRY2yzugsH9eaJyZLe6h6UbrAt753dG75vSVucM",
  "key30": "31gntZJcukT3ghufsqBavRB2STbq7szLNc3kxBhPQkzFufaNeLFnfBhPXEf6kdPNRPgdnnzAchAoDzbG1xvs1E5U",
  "key31": "5apeFSxXcKXb1BqZn5gy4MgBukmJkLNHtmD1smVM9Yu6ddCi4sTMWK6FHhC91iDG6bk6mK72t1p51gLzUf8zR5Qf",
  "key32": "353aZQZWtiCjiPR453MvKCVqSG6XemxGLg8iNzHTP5DJXupUL34ECZmLTqvUpnaELrWFSZPcYHnychry6muWZskp",
  "key33": "5HUyMbN5V1TnMZTjEVG85qx6PQRhkZ4QnCuxYKHQchEoYqpSDdV2EyY2WV3vcYHQwNd1ucdbe1JaeughpSZv8fxs",
  "key34": "25Bg2QDvFvevHVe3NqPSS12tnZPTRnag2ufKv6KNJVG5D2k1WHkDwz75LZddNAtXEDVy4N9ZfS2Kyox4Fn1Vs8KT",
  "key35": "kCR94i9igepznfkjtWwUwCfMsaCgEyPQdscT3cWgpSogpFEYcjkw6FRp5ofoNLDtFyZFUgaytGhUuSgahzwiL7c",
  "key36": "4MmVrWxsJAVWFv8NEX9GZyk83yWqoziZHwL5HsibKUXana7FycMtMHZEx8Uxci58W2pSeL4pjgTdVFnjfHhh8GMs"
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
