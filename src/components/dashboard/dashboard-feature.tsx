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
    "2pLWHf3GfW72rvwegnYQ5XPWxTVrPgn1ybf6qT1KULoxQ8Ahh9pGfT47UB9LJVmwwJkzjp3PPULiS3douWt7Usaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWb2LkJ1Ur4GFEapi6zBREX7KDhLu9moXDbpNsY8B36HJwkhxe8SkhM91biCJZfyrNCofRhP4SFTzY7zj1amsWX",
  "key1": "3WsMGwezTsVW7cJ2GCewrkfbeHdSadqFY8rzyuztGGMut4tM9xTwhkjJ9tZtZLruuRXmnfMLvEHCC3Lu88BTqCJW",
  "key2": "C815Du5XWzTxSq1goyF13A4DnaHoxXWbLLeippx7JwXx2RvyDBRJRuiinD84ZYXfYUNBEF2NtwtLWKD2tfWV3Aq",
  "key3": "dcj6xmMgTTWhgJrtc5JPJgshewh9GgFxSApQjcxW6e3ZNMFKqe215Tpf3tpc9v3rJc5z6meWHFrKzW9jpZjBUtz",
  "key4": "4KAGWEXwEjjiMZgbkCMKrJczm8RriZDcEzMdg9vT9c4T4e3B6WGqn6qT7V8ErxSQwp7HbNEfwZFx6EaDSKk4GB3P",
  "key5": "eDFPT2nRrd3XdyYQAcRsh2wvvH6FkV6g1YXn5AvS2LK5k2tPndwdbhRnvBFKmQhE1xhvoPmJy4Myf6GeR63kyKn",
  "key6": "4iKnhnCYvx6SNYCayqz8o2xvgH6TSGtPnKQE97vNrurv7SHrPWoxNBHCoe9o9TfNCUxXUPGkJFWR4R9GCrqR7LzB",
  "key7": "2UpSu4sJMJpRnLWXgs2jMFmoWKq9crQo6TVcHqf9Sz6BStWpyQcCaW3h2VyEqhkWz7sS9XmvTQxB1f7r8sHdZEqT",
  "key8": "5Rgcgpsxodpcdq4d6fUUze83xQ9pLY8F3g9Zqhc4DU3DViUubDGsqvbzbBpNWqFvG19iVcpLGZNVzUC3AKPxwtZW",
  "key9": "2wNrPukaBgEAbuZ69V9CoUR9b6XD1hevBKnefwo9KgaQsng2Y49EAVepEnQyqGZQcyTVZStwEYvTBwyXrnLrpatc",
  "key10": "34V4ubscWFbxTfSrXBypWT2QiS5md6Ynz5eAWDNHNP5d9z9QCdoiVx1avLm7Etq52sCHBeoq4FDPV3LCpVnU3BvV",
  "key11": "1LTuytnFBDqo3cZ9wqAQMM69V6weUUsEEnGRaw2GjDwuHr11ntUpDH9MShz6eJ5UAHRio3FrrroijK1qWpUFSSD",
  "key12": "67ZqS98ukzVT2mEbY64cugE5EkEhRAtNrYKCEwqLyCGz6EhA5Xq6XEyvqTDB7gMUn7qXJfMLXyUWU7Vxesenj6KE",
  "key13": "47knsNLyd67RPkBgnyV24MpyBnE6pH9WDruRJ6DfyG3pCw4BruaPysM9nB2xtYGZ6iJngGtH3pgFi1KbFdFRZpa7",
  "key14": "S2msYys3u3JavfT5Y1mPxxN7aJmD1C35AaeGF1S2HkqozzKhakjb6DUQg7DTQHC5e9ZXC2S4Q4rp57tzh26Jvgw",
  "key15": "3xmhASm5iZvsVj3vz11Q2kdB2nuxkhCUgQii7n1Nm4Rq4oMBEjE1UnPdfH6AVzMD9iPzaW9ndtuqUKKN3kH5fBpB",
  "key16": "4Ai9WwEW3nHUzDWbRxAVbtYtAih2efGVVjyGUNSKj2g7ZP4PDLtfHCk1rNi9iH6HphAng6R4UWrTugf7pUsHkF15",
  "key17": "57ywoti9LWd8tnKHncgA2xoi18Xs6Lgahar9cKmVrQecSoFQjT5yUu9nt6BCr5p5jv8PR3LjKoFyrTEPQ3UFPPMc",
  "key18": "53yrHWbK3pFv8z7u3YCDWYC2NCbAxjVnqNe6w4K6Hej3FewRFFMW1RRryanrNe7HKayCAN47m3TjZm9f2q5iuneF",
  "key19": "5Aa8SqSQ7csEfYuSmssRyZ6y4cCncmLuBDG7MXLobhcvpmSLXsA9V9DBSGz7TgjCist4RYcwEpsozbV5ahpFT8Pk",
  "key20": "vPB694FVrUDCCmxiRMPwg9aXixzzDGyNqaiHhTLUoMtLHTqxrQFNp3AekXxXtUHYCt23FEnRDCEih4dyUhsDUDA",
  "key21": "2zJwYc3FwxCibECC3VoGNYiWA4uyQbZgV3nAzVnz5tWvfqCnCzfHNQrMMEb8T7uKBFJown4v412zwuzsg41WuXxR",
  "key22": "4r7PT6UF8QDy9maDGm2pH9hNdSEdGVhruH7YJhKKEhJfwy8seoLPHRgQQ3UxgtwKfDRVz2cCaNrVgBy4Yt2mxkYW",
  "key23": "3G1ewN4TkT5MDs65Yxv6VZu7giRft33jT5yq5N9K9wLc7RZDY1WJ7HMYvo75JezU1NUZM282RpdEUc5gUyr3zWvc",
  "key24": "3g5odjSNgHiqQEuF4aMRFsicFDXU784jA4x5zecwzZB9dTArDzZkTijf4fiouAdf1joKpn5YXVgvUpu7v5y12Qgp",
  "key25": "5jT7AqubzABSZDha1y2KLZJL93UzPZNgduRfnx5CNF9PbW5N1wANH5ejSUhK7sFrFqhy8xMoNR3ZJwxe9Ww31Fpn"
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
