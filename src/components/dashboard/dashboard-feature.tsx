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
    "5cGNS61m4eoXrcoABUNkJDnWmgrwsy8hPiTvYxErvGBZQteTEjNTkwdUQAc8jG7LjCaHnaHcEbhyoMS6dziqQhwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVP8K92QRCbFAxggLLGhVRRxbUx8QAdsLPZ6QkwcngUSwYdogBXLhXBedSRR1DbSwovEcAb3dVRvKvNGzV5nN8o",
  "key1": "7qHE9fKnSrCDRWikjWnsVLWPCUYthBxTtSnEmmS7BtN7Rnj2J8arfo4JvXpmXxLYVs7UDBRUbekJjWpMzwYZmFH",
  "key2": "5MjSGw4B5ggQPDQJdm9yUbdz8DTEP84mWowLofZao53KeFDwkiTyH1KMCZ4CGMhhDch99Hde34iy9PauHkzvYuYa",
  "key3": "6495bV1XbncaqDf5aFmbWSCYnDGRX8Hc3Nt2MmyWgH76z4f6eRQwSsiV1vfdckvwuTfmuWsX6X444BUPHFKHy3vL",
  "key4": "2ZU3FT5pU9XHduEdrqQrjqW5WXqhkRAdJtsv6XBTVGpMhgTrjBtm1pkxkTByxdcphWSwS3SqRCxfZ2eay9mQmSVL",
  "key5": "32eMBuJLdiVorzsx3VDuhFbN1XPZrxV6JkMbAQ78mXbB56cqLbsDkewkgXtQGagXXJFoRyTvHLLKekqPp9XmViyG",
  "key6": "2pYbH7B5nS6DnctZToMaCybmCxFY3kTcLs3LcZD7bQ6xLWxQZ2hwgbh1s36v5kRnq1e2zizChusdrUSmLqBGpukH",
  "key7": "2ybMEciDQGXGcn8ZWmpPtWGo9aMbb1tKTTb7fY91czdZVKS2PQKh4KFipGQq674cyWif9Twxe3CTbBEsBReE7v2o",
  "key8": "5v2fMtBkwpCYHfCtuwzkRRwvBugBn8YwzSaihLwRENuVdu4QCtkAGUUe1DZPgDEXbLih6qUNDfGxDHQ9zDumaVQY",
  "key9": "5pnaHMUMT8sGYGyPmiLHmJpsydvs726yxxQCY4goTwLaCJYCDGdEYvruLWZgw3otioZqmgHqqb1wBMwQycmE4ovh",
  "key10": "5nP8vn2BvUvzApNbcsuyxkmyygzLgc36KXVnYCfLDpC4HZdfDL7qwDXZgqayCAq44u2Z2EN9UZsVxoqEzqkfnrXw",
  "key11": "4UDNV4v1uuJiL7W92Cs1fzd8Aihf4eXrtAh7kohpyFxArvr1Mujzy5TnDKaHxrTonauhv6Cr4hpjuzBCbbu4KTDa",
  "key12": "ZjthN21oM81ateVtogLdzzoNTkhiF5YBe3LKQCVu5g9vGPeLppc2FBDXC6PExdEQacW7W3RRKbPLqV8WL9LNLa3",
  "key13": "5rW9T5gn36q13QYKj7Mv8oLioNtoMCn1ujb8NH9uWTeXMJpZAgQwkb8TgyLDtc55mjAvPT8nkQMQFstLCQ5jSph5",
  "key14": "2ZfCp9Uz2TY84pZZftnDKGNyssWWecNGn7uffjXTqDHUGrSLcJnYWMqQD8gSAo82k5cLCpgEuC9KdUbcKfsjjUNh",
  "key15": "27wzMgpNF1RCeDnnoQcTqt17Z4nqK9c1sTRrBDpBxyGf9kDe8Bwkp85nGt7JG9XoRmxaeS4xwa9n2YzJVZtxkhkc",
  "key16": "3ShQZUeHFBBsqCMEKd8zoeUNhpa3CPcj8T2T3Bdpx9usaMhf3W42iVkneTRkPVq9YUG18QEUpMGejm2VoiN7kbxi",
  "key17": "44wzZJpHX8pWUBoHLfC1LPnRsKDGdhtuMhA5AixBGGbWrQnBXmjfz4do3BS7SoXKQUJTpKCMgmYVokvPTDW5XHGv",
  "key18": "236fZA6oAcSskHEKGaN6CLvj5o9PG8gGEjx2EH7jESZfNZ4cxu8hM9LZN1UwEBy4wgc1BDFnjp9fU4UqZPCEzXWo",
  "key19": "59dW2sgydDFLVwRMZbQ6D4eJPW7vdsHSK1tPJAGMC4An9h4WXqBb16y64R94gei9p1KeJeGjpCuxAQyTbuvPjARS",
  "key20": "5MtqhJSsVb2cT1AJnBXtYWPLti6qcC7nz9RAXnyGESPBvKiKZLB3kN8jMQy7eY1kFubZAQegceA8KiNJhtMdxFAx",
  "key21": "rhDZMjeZ6FeQJBBP6uLrzPdeBCUpLFXXRqc71eYBYL8YNTHQbdLxYkc6gNfRuShasJD5h2vCq1iJrRJqLud3gYP",
  "key22": "2yhTiAroiJHrjYCg68ijDmvwe48jgZmmEY3vtveC7K6qy1YT4CDAF2uWaHNu2y3oAP3Sn1PkLTGLPeCu7Q1SCtYK",
  "key23": "4FFGwwJ7iG8e7Gt1n714dARSZ9MYBhxy7mxpwRC58xcN9rGanCG2AZDnnVHCW7Mqu6dgiHwaTc5v8C2QiWTCeiSM",
  "key24": "jt6YKC8vGg8HeJJFpD88WssvpYJ2U6E6gpUk69Ac7GUFqnTnwQiBcKC3ozcnrWi8c67hEvj35xRKVKDsim2jJHs",
  "key25": "5L5kusTmByA54Lcp3qr3U6t1rqA678F7kVH1b17bkufXikKHNXtTeSB2cjWp4b6YTeUUFcHoxWSmHQ2m4qX6aHYu",
  "key26": "3amF8Nr2jzSU8BeLSRnXv7V2GbJaQPuNA5hgWA9BCQ4Wj5vSFpNJ7Nb94Lap4Cnr8JSyfyA96XyX8nb1X5FMBLhx",
  "key27": "4ThGpP7XEVv16sagApCougX5CELSB3aXe7VX1dkM5n6zH5EDGEasAXZN6W4xRkhHRE6H1omT5hJ15a23FWWsG8YX",
  "key28": "34gJF7AEZ16H74zGxjnERsFhchhi5x2Ck8Dw7uF4wyHkAMEvYCgLzeoF73PfVGE1K54j9My3osZSmoWJgREggFyk",
  "key29": "YuA3uVJMyB8VZjS1B5JGK4deZQTvxbew1ZnyM86gfgQKqLaAcPi6DqKhT7VAB41yRu8dP4H69TTwPfr4mjYujbk",
  "key30": "4WGWBgFzQyUPkCsPbhG9GdZfagiWJyN2we8DZb6bWrsEAXxXxsDUSsiU3g9XP5GEz8zWsCGCQcv2oZ9ESc7J6EY8",
  "key31": "5ptrKNbMwpLsst87ekjBgZZuD1Rw1W1T5M9bVrCdCrbSk49srGdv1qPcH7ybDinBbKxi4fba2BsbpCEr5FWQLes5",
  "key32": "iXq94brUqw4N6LiP8u49uYDZpSVrnBFwRDNfidTG5iatuM4ca2BGuRZyyTus5YtkXQ6EC6sDwV4Hzv11LBzZSi9",
  "key33": "5PtgfEkcx3qsn1Yjao4XsFbsY2bRyFfF4sN16uhPnwB5gpy63FAvakbwNeFgvTuBT1NAWsNAxzWvS6TjXKAaVBCC",
  "key34": "GU1obeS6RZpvLbcGYwsM2Ue3feaV9QbLVHUHXku3NQVqxR7gCJWfAHEtdBuEFNC6gyH91yqMxn63WfyDyraZEPB"
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
