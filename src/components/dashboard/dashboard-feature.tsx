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
    "BDPewgPeFD8HPYuH83Dchgi3EmPuJgthe5JkGiGNfzYePjdoteTt969cxEvESXeTWesh4X4vbSLUHLCd3goHG9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22H841xZSCU4p4BvWK63ofB2sbf3BF2Zd5vM3PdFzfN14Kw22aEg1wxfkQFrkGaDdTkfdQqfPAoTPnHavrtEeBCo",
  "key1": "28zLZozW22Bma2qeQsNC9VsWPaWdUfhoUudPN1gEqHpM165DzgoBCEv7on6iM4iALhLNmzBWCSYEs2WonxLY7aH3",
  "key2": "3GGQwDkTR2rqfxPRpCNXMS7dDZ7QgcqsdZ2n9RAAHiWjvPJeXqhLDk8p7eDV5yde4QtmPPdCgWmKara5aD4bcEaJ",
  "key3": "5akibnaWNU6FMM8yMy5PbUJMHL6gqZfArfo4cc1chPwoigL46hRdrj2oVxWrgkyGPCdoyy1enbzx3MsgS2XBztzc",
  "key4": "2DGGnEQnh6TsJRnmfabf6QXuz8dYDDXyLM4pDu1eHjSUNHQyprQuiXvBikoKtBZJTwuaUr2d7cnfVoB8j7hs9mAr",
  "key5": "eTAgrxpPuLrDFsKgszcfhAw8hcHSM3MtZsZbJC5AqHhfaVVNwrCYPMCfE2owZRkub4cpoRpAQfRh9Kk1z8dch7L",
  "key6": "4ptQLzXUp1fXRYytx2PmFjt4EfG1qPUzehpzBNXFMYr8xNKjLN5QthQ5FsQvcEoiXKKTY6M4y3sknWEUqaaAVJ1b",
  "key7": "5kF2WFwaUWbhdD6QhqSWX3TFVphQFAX6BodjpSsaj4SjVHYX17DbXqi2g3xpLstr3ZB8fjoaV1MEzf9qhhiy8SLr",
  "key8": "2mqXJvk9ZTSrjK4uTg8xtdE7oNeKzjjqmh7ptKBYo4r6iFwVg5vA6Qn1TPtZxSHppwLJXLcZPDx6cFXorkeREkms",
  "key9": "JYKnkt4vosnp4RZEBrt9aZf3hUgsCdHH1eSyV3fZWAcfXnUccyEutBbokohH5jBGr5bJq2LP19iq2Wgw4nRNohX",
  "key10": "5tuRA1ce5Xh2tqwwukxV6wG5344jTUGaHQZ5CtrGJ7tyEUvscqLwUuH5PyGsfsVtrfGxMG8ihegNb23YzmnQB3GA",
  "key11": "SsM8pzNh7ctfbLV1FK4vb7TJTLD6QiuzJUxQNkEGXM3s2TZbT46bvZACr6fFZ9iGDpXqvxbAj69WAmFvcwAcd2u",
  "key12": "2i3zNiQzKrZfQ8bFBey6StEUHyjhLtHXbXszDD9PP78hnfTZVakhiCkyQqzGAKg5H1H5YbgKpF8EH3FANWF4mysH",
  "key13": "3VXL12vTtvxbPp33WcnpWDz6Ls6sXWe8u6zNWikzKSUPBkUbk5to8gUMTPDmYXN5rssaXzsUmXbfPtS4CSWXAY21",
  "key14": "3HJocLoQo5Q5QWWSGcknHgjU5ZHgMGG1BstCnrKCgZcUkxC4Br27RVisw6rgJzynuBQNSsTHJYzmbHtKfGXmM6zT",
  "key15": "5PYEeMELGkG3y9d1wzm2xiDHYtgj7hxrkCL8ZrP7JM7Nkvu4FTXzN7MM3ZH2W6nRg2bQyoMgwkYozhZM6x4EHAex",
  "key16": "565mUh6XQXexmxGuYQQJVyL6RsyYR5EhdcauM9hyb11c8TuJcJoxHEzFQNFsdT3FLVGVT6HsXWxSPB4wBTfxCgb1",
  "key17": "2iDTHAihYaPu1wwNw5wXvExQfsyjUTYwP6yRS1i32Sa2eceRa7iDqYiKQS9ioJGwyeqL2WT853QdTnWmmNZbVoyN",
  "key18": "4ew1a7uZ1Kf39z9NRYCF9wExkhWLiELZ5J24x6XStmegK4pDUNFa9Mvspp8P9qVX3udYfR4haVUi91cQ2ozPfNFV",
  "key19": "2D3SYzcRuWH2xoMMrYMWcsueQ5kTKKTxJKamnLcEnDjsEvmU8Laa2fx5tcHaSU3HuaEnMmaPE22qyYxZd2j6t6Uk",
  "key20": "4VNRTnP4UnoRx1yaGWKKx6DUxPXjmN2pM9WxZRR2SQEAGPjb6mUUwCBjQDGBcnPnLmEYYkYN2L4siJqWPQQij53n",
  "key21": "2uv2nErkVWX2buz79FZvVANcjDFBsM51SXL54LUmwYcvaexJQGA7cFjcV24ojc2jDjpsbry4PsXcUdeAyYrj78Gz",
  "key22": "4AMaQvayUsAJ9koHMrjUnHp5gUxqo2j6iPWRT7fmtpF6eHd7TrWL3PcorfCMnNdfQMXwBnubuQWxyRoMPMFNZQh7",
  "key23": "5h9szBMwyQgsUZM88S8UkUEbTFbbnQJHWLPz5MzC61D34LCk2ux96hnCFSA9TsyfCGXFe5nxrUNbG9rLfzJ7QvPx",
  "key24": "46UGgpjDbXx77w5yq4LZwtw9TeFBb2daefjREuHYwog1LhEyPuMPj1J8zZGy2qTbdy5PZtc5ssDhFru8cUEXFXsx",
  "key25": "44hZvJ9ThMVt1LxkeU7oRtSrBxiZaBU1Xybi3YiHJJS6i3YwdaSAH39L8U8v62E8gyLy683wCSyJUdyvftmUhDMx",
  "key26": "3tjUey4YFJobDQ1GVWJv5txqZUtZd4RBjBXSRoFcDFVQzd8SraUpC9xoDhxe96S2tSEDuZJ7udntT2rfMGzW24dv"
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
