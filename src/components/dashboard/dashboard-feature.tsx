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
    "53DjPqgaX57exBCaC4WUjceztmFjfRvdw1DB6vXmFxEGwmNpGJdxUZK18rmbDDtxs4oE4LAaL27SFtPmRHcF5Hi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujtnWUiF1uVNHVXxqkEGykqZRiqHtrBKgytTAAqXW1EowmjS2zTk8zMheFuKmACJ1eaTEtDDbn7SkTqWUsnPwAt",
  "key1": "5LkkLXUHtkz64QoiN3mR2i7TuETGywY68aAcYXesUaEu6AKAAMaNoprUJ5dkriThvBs2Yjupe76oEDkjczs15Ccf",
  "key2": "QX58KfuVPkx6xiqg7u2mmhcmFfPWMGzUW3xw2fhF8fFD5WXaQ8VXfeH7zn7BEgAc3rky1HDqD2m6UxhWdQ2VhzZ",
  "key3": "26aa6YVriMVkWVBsEJgEvnHU6YdPDSXaJRXdb7hHkzog8AjUso7wfTrUmh3kJwosJiLCxwmcsnj2Q5kCvDdEp3e8",
  "key4": "GNbhSzxqWVQ453WesvZhyaXCFh42WuAGrWbEfvx7A5kBf2j9hX9MDnFcACXDTCbpjtDDhmTENzGkmeveBAKhmMj",
  "key5": "3zHuYcMQsvergo8xG8vRE5bu8NcXnH3d5ALKFSjjkUf3HRBm5V7Qs13w6mW5YkyEE1gDXjvFBf6G15s2b53LviR1",
  "key6": "3ws8oBMBSPJX3QSTVCiMVeVBPDwRSo4oEEfAUGheXreAfAePHnmhiZP9shpDKWL6yFizde5GXFwfArwV3idYUcBT",
  "key7": "5abJh2rdcTgZzKeXwpT8jdaGnRAUHk13S7VYbpQrukmRvaYVANEnQ6TeAWFnQbEmTaXcNSK4EhW9iYodb2foUmeu",
  "key8": "8uLPpjechxRFRVgBysYVALnMfY3i7gQeNVsSs9hKbQesRF8viLUTBA8bqi62SJr13xsxg32xtXUuJGgr6dKUsWd",
  "key9": "2LcQk1G7kKYqwiDA8ZDC4Anzuades2coiDXGnp6cBkv95qUgJshj2u82ukrCrvUX2GbpGKRyMvnguD1NyqDnSAp2",
  "key10": "4EkrzTEnnCgXDLHZ9KvnC4Fv21JtER6GQtzt5BfMpvJ3evudk3wRZh7fmfg3ByEHxbULo5LM51Ss3NBimmRAi6F",
  "key11": "3aMi9KVazWSeFgET2feHBBWGwz9Qqcz22K6u9YTwyYc9HivWAJQQDQnPt6X2exGF7CR8xx77aheDJtM3aqCBFSuv",
  "key12": "4pqiPgiVtAdYzaMdiutWx84Ux8FmbXxmxWR1f9F1vCFaftR2AdVgXpc4iyJmcKvhw6yq5B6HsBguAdRUrS8F9zf4",
  "key13": "3fYv8KBHU2zrCs4pCSp56yNLNbebuRmrGpeqva5yGxctBTs9z656pz2Ko7PMtG6ph59cMLANQyq2KZKK6hdjT7Zv",
  "key14": "5m9EPx3rvp8dnFcHSbZ66bQxu7VTpxBBzzQMCKarhR2aPYTCpJdXqJS1oTdvpdmoiZ85puxGqskRiFFFRVfVhtnt",
  "key15": "vPuAGv8aKSbs6BquX2pH8pW6TdWkDbtyG1anuYnyVM4A9BHvzNkDxLmqSSr1G65WZ2XefEvj2aDf2anj4wVtoLm",
  "key16": "3Gb2Zhk3Prg2tnwbkNBoYuU5S2iLd1rawuvtzftuNUX73Lof6WCETPwSBSb5USUA1CteyiuDX2abkNpB3s5M5mYk",
  "key17": "38gMV67MNTPyS1cQaHCwhyXySimm6fD5o3xCcDNNXmLqDMpNLsXW8axdtkmMNUz32k6yndRhTf6CWqAurCHi2DQ2",
  "key18": "44oCp1McKtNsxhgff4STQYqKuDi6usbSjSphE785XAr5zqNqwnSuQBt99WDUFwdCbaa2D5awa9GfBiUJJ5SWtz17",
  "key19": "5GkTV8x1AHyH75j4s5yLfZ5Xd6dwvDLnBuFYcJA49AChwgjTfvAvW7JTVi5VBLNZAJ28E1WrAUX1c9g6yNdHCw8b",
  "key20": "2H15R7cDhuEKW2j5eYruZZYixQqtndMpWJdcEsWvdGHkZZa8EGiEhw4BXFETQU39g7mHkAS4dnDvsMitXoQjFqQj",
  "key21": "2AwBKQy2naWJ5NijkMqEWBHdBsBUVqpPBYKFdFQ9LoKP4NZZvTKyZnMTB7vEZuzb7ycnjzTfR3vZDXKvLrboZFNf",
  "key22": "2nNW1M3mLpnCNgfG17QijxuSujaxzVeMaUBf7XFRnjwvh8DdNFdpGBtQ2sYcwHexnhg6f6cdes9hXWVEDPouYc1i",
  "key23": "49m1wW4Yerste19SEFuPQUFVdagJfew9pDn9GSPKkirSrcVeLru1TcqiMUifocr8cBCMo3RBLvsMab3QmmjLgWEV",
  "key24": "5MzU3HnzfrN1bYfVfujWiUf7xi6QpMFGRnvDU2bGkongJ2RwhWZoD2jV9RASRFubiSo1bzyF9BpCxpMctqxwNuP",
  "key25": "3CkZtKB45R3fH8Rhagjivu392Jti9stAG7oECE7coJWcBSsyyCKXMJYcGLUKBcLZ6sskHBwDotWJz7WGCyXGYFJ1",
  "key26": "4USMAfzXRLyAx7m6gSrjPmP2wcgy9CRoYrqRqYMQcAEBEdvCNa6CkxBSJ9N7igo1HY62A3hLg3H619A7PtFBBgBm",
  "key27": "2Qj1UnSyU9fdLpDeYMDAjUtJvNQmDewx14TewZcb6ApXZQ14qi3tMRLTX3Ro8bKHWinD8rKvn9mTMeza37p9M1me",
  "key28": "4Aoswwb9a3NUmT3A4nHiER51SqJrz18pQ7zLvE4rotdGSmKsFK8dK5WnVTC5bToER2iRAh3doS5HDCPrjU29LxHx"
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
