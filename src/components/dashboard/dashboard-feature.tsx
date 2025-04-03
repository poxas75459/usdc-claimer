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
    "3tiFkeGFXsikDvcV79SBmes9shzxRhNFpJZfjoym5Y5nyX4oax4CVN9BVMX1azHc1HQ8gwdTMxfxDYcmE6o1Kb5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiR6zEzTGcgZYbvsdKkDac98AaYFf1KUrKDSp491qHh8Bs8xSxXddkQxJYd9AsxWczkuEfCmA3hGkRn5huWapy7",
  "key1": "3ffXq3RxD41KyuEArmVKBoeV8Mq8xBoqr2WciTYQD9bUDzh2EkCkgJXUs35JA3q6uyCyAXNr6zu7LFXCJgVsLnWj",
  "key2": "3hHFwFmUYVHJK9su5GzUZ8SaDKWsWsd8phpTeFMxDDG8sMqiVXDuoaotdtbfxbMcjpxi13rDrS5Hi9A7xEJFfybw",
  "key3": "3oQDEGGUgkd7foMsSBubMaU3xyQbUs9sNW7ev24BfzTD6CNmGHAc3CmXYmvtMJV7MyRs1RGfS1HaUM9JxLjF9Wpz",
  "key4": "3K5JZbrCFmxDGpGxHYV24pyTe3ZHT6XcspHmZ96uWRgGyRbbMg7oJbUtTFwB6AGk4BKHtd5LBCb5ofhuw5YRS6fV",
  "key5": "4nBK733yAyketpe43n2ksnRrd4Z5hzTFjh7Q6q4ivQQPW44gw4bRDHdnUF5QAB8Xk7CkRN3yZgSdUvHo5eV1pU1a",
  "key6": "58KFdyj95yX948EC1r7WTGhrvrcQdFgTjFY2MDS8zctnwp8uo6o5yrSrtMG83cGdUJysyM48DDLyxNfMTd7rfxb1",
  "key7": "48XfS6QYyhF1ef1qpEMVUXiJGhokD33yWCBDa1o9a2dGDACJ5ZXXpCAYt2MexLsFP1bPsX7iA1jKC2xqcnoU9186",
  "key8": "3fm2mSkTYPh9pjS3GkWogBHGcLyLoPEvNeTLiNygTkF2cgZTPpCkxMkHm1v1HK4LhYP4Jvb4RYEMh1Wosgz26sev",
  "key9": "57nzW5RD32Fi4N6jRcdAGwHfXn64aG1Hbhqy6nV7q44J3B1X8TUkCS8emikNqPVfLQAJa2c13ZG145j9MaZbcA2r",
  "key10": "3w5v1ZyRiNPJVdt5NUf8thYee9t8EcYUdVES5US4YfYMrAwENZWQamX5fpsY57coVGUQ8KBGqxFaU1aPFnUFyXWX",
  "key11": "53FsiwP5TeyBMwWhYP8aMbXNokcf9Quu9YqNkwCDp1XNVwBx7njRauF7WzC6iLZgkWr6kesJwXr9BPdCLCRGKeGP",
  "key12": "zkRLvMqaiBTtxAXSmCMF9AX9mZtWDTo3Qva3xavq8Yh6nSuyRPLsc9jVuhBpTwMzAQF2C2bHYx2MzAEvnzaHdye",
  "key13": "4ZbCbGvK21AfcYEmPvYQrFBCxaU8D9FaBQVkuK21Au66dEALuHjq39amNvrXLNttGuK3DwC7LF7PJqK8HaYSQSAQ",
  "key14": "49XQdMq9kTQTN23DqY6ppcZfPeSBu3HF3J6N6DMg8mPMxjYzbmnqQFaqW1VffrwCPY2xFhUE4rqWhDdvhBULwHXi",
  "key15": "5KZt9ruLcRooqtyTTG9mCKgr23QGyWwRRYgU3MVnvC1aAgGF3VMTqakvzuHWMR6UdnrrVopxPK5SJtQTNHQ6NdhG",
  "key16": "2Kop9oiSZnd9uGJka2samoxUAsWPbwbEDYfAcuVSUDCGbouSupDFnp5XCTofsLRQkpsToFUk3f9WaYVkSBa6TXbs",
  "key17": "3ZJj4WaLdkLjCgeXPHk1iBx2weMJPvaxdjCEqCQ2BPqpXtFRbCLXtvPZJTHes81PQCi6kSWZALVScMDaTQKzSjE",
  "key18": "67nkm2fxU2nkqzpC5Qp4QoV67o2emy3fbREMRn2Xr67YTvfk4mLQPwSxgXuJDgupakDxFuLZtAtX9xWnxFCQ1mW4",
  "key19": "2tCAa1YVcgnxBt6fW1gt8YKHtZieSsuXG9wXHytqbRYxyw2oyyM59xbhFQbhBqYCxieCtxjUJzUwPwBrYLZWT2mA",
  "key20": "3wukuKtEB7EgkKy781pggu7Q94jDBoXzhftiwHsNtkmCEeKWiRbeSGtLi95QrFbVUD1KxbZzU37dNzhvoqJf8K5x",
  "key21": "5rWhmun1SJPoS2ijB6RPCH61sgS9mFTpkFSmxvn63jfactoKmFwpPSKaSX2AYuvsVxH398ZWo8KtNDF8GrudW582",
  "key22": "5x848HJaEBU3FB63H7xKevzwE187gctgE1ztD9yhUpADws84yfFE2voNyJUPhTMcK3eq2Ht2TpDYcPUnePkD3Ufa",
  "key23": "KYPPwqpCJirHq6A5ezBEMAgwK5g7Z857jTMZkbZMXGoinCQj36YJUkCDmTRLkxeHQ4x8SLWJ5RdmHubMnQp4zyM",
  "key24": "2apXcVQPicbbEKpvr5SkVArvG3nGjSMGUy9usw8Dj9224KWsCeEAMAEjLkssH3G5uah4aLVZMHfBRQu1Kw1uQ7uM",
  "key25": "4uNmVhHfri37Fxpv2zrbisVnga7XPZH2thGbBmbsR11eefrkbcuYxpw6Stask6BSeHfzRKtNzrostS8t5oip9LVw"
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
