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
    "3xbUtvHQCSFC3hKExxHxBtdpFyj1X7VHG44t6AeECnbbj99CEDxDNs6x3SeqQmztTv3L6wdePQLhe3Jt2QLi3wij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3yALk5BgaLZDMKLsTvz312o69yJSiSqdNwH63oZZWgbs3LF9sgaM68X36Dy9typThQHgTxF3pTr1imQXEGgdcC",
  "key1": "5qVAckLNLeruSdXuYwWrs1ty7wFPKZhKWfKEfSgcBgUA5JkiST6pqTA4dkJBWfZBE4cnq9ni5fQdbxhqqtbjFEWS",
  "key2": "3Sr2pga6a9SBkZwX8DNdHhXpu2yxNn34Rm2Wzr9fCHFX5EQkZZN75bE27BvuMYcRS4d759MmwQRmbSjX2UX1dut5",
  "key3": "5K7LuMMCk6ZRXSdofw8xPiChiPD7bdxcM2TZjCDe5Ezyr32qFzfGydWGErNuXm2HtRdDtRojZn4pxivAdKC6iRhr",
  "key4": "3V9MhbMDM71F25oZyGvmWM82b2vxNHQELMXzfJVT5SSbMdKJjrgjihe5pz8Jz5LTRQJuUhHeDUneLxrGpuh2Mq61",
  "key5": "5B9zaqo56CvmxCdQjogowxhnpMNoxh5UcjsLj9aK7AyRrhESJvhUcDAoTrEaJGNNqnijhqtUV8dCsq6V9YymJt1y",
  "key6": "dbdeCYNPhowyP45W6TcxhyHYmVX1tGrGC8kJKHu7iFE3DNDVT24CXHvyb5SujorT9mayTrE82jVWZYia4sBHHXE",
  "key7": "5E7JEAMHN4SPZLxqSM26qRAwSxQrnkjv6JdxU8CCN67NxNXDSu6xarvJywMtG9AVQ1k6uUHkUtiq6Nd6jdB3uTje",
  "key8": "3u6Ux9yDVHGAn2aDEwJE4xfJr8ueCijJTqtKkne8XGsWb2goJy2SFVZZoG9dfRPFmTWJ8mgT8UZ7gXtB8dafYjzz",
  "key9": "5hkwEgiLsKNqnR9LyDUtv1bqGdTmncdVMWy3RYrp8Vb9gTid7aqZhsQA3y9QwPVxY1xh496JMjjj44MJ9G9GWVAy",
  "key10": "kfrYQuxvLAW7cNyX6GDLDYARdvxgRHQ3TKJ9NmZt99JXy6SWYR6GY4oXdRfPHj4vUoEeM3nnEoEF4XrD2gzuV2Z",
  "key11": "4mcb7VxjWFWkjgM5NgH9Hq9ncHiPDv3owhZgqbyF4sX9pBhvAA8wNxbiBwRz5haMdhbU8uGQKS5szGuPqxuLuB73",
  "key12": "3yY72ax9K72sDm5Du6r21u4pLDbfZHQ5doQWzLeK6t8WL2Dq4KRAxUKeq9N3MYSjCErrLUcW5ofyFF7m3rbj6nJP",
  "key13": "3cE9H2ANGhDnRN4PxxCT2WCKGiaS6L4aefuSv31Gtp1p2KiwFsYwR1Cbj9puQivRQr8eN2us4te14kPHPcGmXXvj",
  "key14": "473F8zcHJtPKCUheqjhygWWeefwfGpiKh1ADEiPTdMwdDiEM5kzUEhd6jV8Bki1k38anMtVGuwDaFtMG4pY7yoNR",
  "key15": "53YQMugcoXs3bLk33CTv4d2D4HToqxR7YgthzMkt6rqBsA1RnsRxrh7hCsF1F8hYGzp3DR9cgWPMDPPkSVr98DwP",
  "key16": "3R2nnxMi1Wxr9dupDFcpQSUBEYQHqozqawhhUPPEeehGUWcFB3N6QhfyAb4FjLbvHzDex7sw2ww569jgCAmks67v",
  "key17": "3Pqxrts7Qh6Z8svpH1rHQ4ujrmdp2R2KQaQucuhFKPNmEWS7qd4hA4FuAbuMpN5hjsRoT4ErKsrDyj52z27hZLKi",
  "key18": "41s2UWtkjeU3kHpjn8VLFsC4PbhgbsoV663aZHfij8hFWuHsYoqh2CYy7BLVWx1qUreyAiJnA2esFEt7YsUC3APS",
  "key19": "2ypFSpqiRyAQFrGxRvU6oPkfGHBUwyPtWJW4hwDLJPFnSR16itVEpJ6oGADJUnfXpRbduu3zp47pAg1FzyNGGMzK",
  "key20": "3oL6iUMaeFt9kmWEKNHwjb1L4DRmoFbPVdURsrhSnrVWEu3eGV5ViLFRwLh1zUbaphbbf9QfKay2wLCmUzbZytuC",
  "key21": "4CXFD4biENNvv19AX59T6Q13BRErZsHJEJkWZnWSYMYS5nCTMT2XH2EWLXugfLVsCvtPj9W4K9npaX59v4iFy7Y1",
  "key22": "4WsegTEawQfw9YosPzTBvqpYAKGKT6RRSVUaFRnjq3fDovx1j58Yffgy3GrFJHgB1PHS2EeAGkWyD9uch4s5LTKx",
  "key23": "2VuuEFCeRjBEdoxDYURNxz5qu8KNLnYzWsTMMx6cAPGsYuL3SnvaDAZVNtkhnvLSLuoU4izn7vJR4Dkhw45BPYRg",
  "key24": "28SzBMXKszdSABidiCcGWrpAVdVARHYtu8aYPYtzrVat92S9uYUZmEfBzebTdrSQdVFEU77KWNKfqQNuUtW9ra6E",
  "key25": "3oGZaAQbZfyh5iEEm8FaSUekYvFqgqeyEu3V71tk6DhWuSq5WXUUkGNWPtYP9y89pJCwx7biEzWcpSkNQnHv5SVm",
  "key26": "2UXeu9J3XfHcmoC6X3dREjT8RA9CTB9RW5zCT4eoPREZBH2qAetFukwRDRKjUtpC41gVdpCRP8CKyAVw2HrQeYwY",
  "key27": "2EKqqCpnC2TVqsE3quFcRFZKsK2LZj7AqpZiRcTVobfbpiphNYdVbeRDqTSD5cKS2Fqx373hBbvHYWGZcB6ZdLi5",
  "key28": "erwvmSBtsQXNo56EKXYBWUDGWvxa8ccLwgL3uN7fNjpVY2sZBLhLFb4sjzu349JPZypLnPV9iErbzrZdDioRtBG"
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
