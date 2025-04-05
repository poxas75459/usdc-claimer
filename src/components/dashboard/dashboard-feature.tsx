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
    "5AhpXerimapz1SbdiQTikES5a1oqhkTrsDLVSm96158EnJNDsYWmQJ5MHAKXtPoJPDEmhqSN3zee9BGqohNNastb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5AoCLYxwFccp9NFdz1f6Tei1Aq1y8cb3DCAeQs5UPsjx1oExzxVcpALh5kPmW9X48uLCHeccKgiXDbFTV5Zsz8",
  "key1": "2Jh9DcLozpP8hLCfxaV94pkttfPo3MHDYuExEGEZuZpBMUKABqXwRqRt3J4oxsbLYMEw3t579cfXHBXYMcFX2Ev6",
  "key2": "5x2X3r8VE7oHfSMvUvceCVqe3P9p4f4SGfS3bLib69KdJxfbdfgYSZ52naxaeSPo5VvdZksixh4WpztPSz63fC2x",
  "key3": "3qteP1XCzB8QAJxh2zj2oeVaV6rmocF7UN1xWy2wj9LZxMNYiGQ52vUMAzXoVcmZUUpi3kmgKcGfF6cCqJqoAnBe",
  "key4": "4J2VBKT3BrqQ5KQofm8AUCs8vpA9fQVVcVJDB3xuoAs9y1i3BpdjoUTrWaHhpwGHPYaE1REX3ogAg2st1gmKE8wM",
  "key5": "67jUfCtvuLT8wA1JoCkJULeRuzH2QTD7euiq2ozZrZZ8QZDzGJM8r33PzqvBAKYmNcsg3yihSvf9knnphiNNVv4r",
  "key6": "2AuewXMbBM7g5J1L9wMfu2wqBeYUrusiVUnBNBqpvkHhBFG6ehFS3pgiTiktVrBuDdtnhDyueUVhmsRUSF56L4h1",
  "key7": "4VBD8ZPCSh9EfcKBwwURRjvGknEq6oJVm6Yx8iU5rbvgA6ngZdtTgTyEx3SKRYWJwJ8X3iBYjCsWp1sZ4aKvvswa",
  "key8": "4bpfVU3cQ69A6bUWu1Hww5f3Bk19ppBaAqz54nAsBeECE8cTGU4xbNgCnWC1dwATdbD2nVq2rNRLHvU1qMMN6RKv",
  "key9": "4STSWScaKuzGeYpJGcjMqiHjC2DqzFZ4JC8U13Bbby9NX3jEi4EZwjypX6KwFN1Q2iruN67zBDBDkCr5i51xXX7E",
  "key10": "35wHggm9zT17jtE5SWH8Wvd5AJzFZiRAtZ6Riornmaadgsr4Tba2fQjAGnSgzqBw3GF8jn9xYw8ZzXVUX6KFWVQp",
  "key11": "xhn7YVUrsMjXULWCjzKNxQrKsXnt8QXVkzNQ6zPtcvYSxs9tEt4dSkdMvck9Nnqb8yqxDoPob1ZwHM48ar9D4Tq",
  "key12": "3WJ44AjadSK3MEKP2egL9ecsdS4WfMyybpiJmTTky8gNKp4axgFd8yymQdUwMTeGhoUsamrPYF8g8742Lw6RUSDw",
  "key13": "aNZTTTgnf3WoNgnNCbwFp2iG3W92zZ3Pcpo3APow9NGUbdZzaryaHoovHfgBNyXfWUp3oRwg33bgBZHwGhUQDyC",
  "key14": "52sPdNTyhHH3eXsByJekXhwGWR6XCEBrcBBjDkEKF3XsThgHYFmiTWx6koanuY2BSfVnNX4Q6aUdxrcBr7GksdTk",
  "key15": "47KsaaMki2EqVDeU2ADg2UavjaQ8GT2LqANKRtrqQ1Jz9VqFgRVDnRD2U2cazv7DpwcsjBqfV6bFmtFd86GRQWZL",
  "key16": "3Uubmkxana6cQdgZDSysW3wVV9f4he2aB6KbpuGGfUhbgTVf2SKsW2ZYrT3gLUgWT9SjRrcMte5ShBydTS3dQYkF",
  "key17": "4KfyibbkfXUQapxrSgmoWA9pkXL7HDK7bL2jy9HDFC5gXsSmNY2qyjtdSqfF9CAbFh8ei2qdBrknJZjDJvRHh2Y1",
  "key18": "4cwAYVpjzMHjLwJk7HmjP9GDQvXDYUWF4ZhpaCMXcnoWz9DwPCxNavt43kdnLtdJaGrQ9DN3v5KLx6E4avdDij4i",
  "key19": "4QrHdfa5fUksXXYUsHMXMWxLSspJJyCYkYDRyUsXwGdfiTNCBd9LSisdtUTQM6gVGq5pRwToCaNWyY1m9kcFBVAg",
  "key20": "3BLDzSKtdMG8852TLrDmjqJzeNFgomHWbAXBHTmrkAguxDhjobjRJGfNHBzk4RJkzGuE9AagN3anbVqPzEwbu361",
  "key21": "4H5EkBctmTBXVFaKmwm3k8wJ5ANhhrJdTCqqZ57KzTWDsTXCqMoJ4J7rAqxpKEoo86yj9rhi6odhNUVN6kGDd3rQ",
  "key22": "5ZefeoofysYvfkT6f4TGbngFrJ6q5n8yXbzx6xhYwa2SikwuC7Rr4HSRFxSa5QTuVNJvJWNQmx8FJLZBXGMXP8zw",
  "key23": "37KmYpLR99sxXKBXaoEHbwPDs8sT5Bj2M8Kz7GL2KXnXffrF9Q1D72LRvtb3Ta8MoEHnvBuyJ1hZVFxA1HT76u9i",
  "key24": "L3j2eaEcHCGiGnXD1UTUsKCj4yLyfvAYVfWAuAX8tLJQ4GN525PRWkUVHYxhUzFx3AvMijAxACFSXS2eQTDZthz"
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
