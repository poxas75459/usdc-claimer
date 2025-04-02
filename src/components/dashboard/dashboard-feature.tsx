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
    "2zxQ5gVe1wHNByGqMEA91dqMqFTNWNcB7qRQth8Tro4vcKckJge7uU6te5JWrF82KJeQ3S1UTWbxJCaK27oqeZpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQp4jk1cczCKF5EKEFDNCKi4s5nybcFNnU2d7BuvU8w9j6fu5MAY4JvsDFvtKfmZ4tqJSwDVjHhNGdsG9MVs59x",
  "key1": "5kfF3wDctZBrrZLPCnYX889AbL5dDiQ4Y5gk5sn7ho9nyt6jjxYBTBvauoxkyKGLPM54T3JSjide1jfChmUXkNwk",
  "key2": "35yf5tJxJMwj7E4L2nd6jzHFbN6Z2zybfovxnxBHmY6c6Q7ym1aSrYotnH6EDJbwxDjaHiJniEh9EkFxFCjRBqYb",
  "key3": "5UZAtUJDR675aJLym2iujS7Vs1Rxu44MtcCoUthqBdzL3a4sCmnCBh955hLxg3XYRTy3bWi8gPceqCFkAGWthDAf",
  "key4": "5nFHUoQjvQ3rQq4c8ywR8xYkKQoGnDHahknW8Vffxxi8CkwqgQ6WT6jx3U584C8ZPHZSXHiAtLsUfbK5yrneFgNV",
  "key5": "5ZaC1J2c73Nt1KrpqVBv9pgAq3RNpJrVMff8v32sD6sHsxtyE5SFJ196AR7v5oRwAmC16xnEecxD8nNpKvyGmstD",
  "key6": "2PZ81d6Wf7f2G26sufTAQSTMzy61GHKxMvhE5n6YEqPqQcZC23QP4xApgJKW3LzHk48HRL63KNKsnXdD9FtBiLiS",
  "key7": "4MAx7yfV53n8Q4vNdV2d2h9sdiyrGjGgkDFByH1ynQwgNw4ysjHsKW6xfQiYQanp5tgiJyz165zdzsMCzR3gMSQN",
  "key8": "2L7sB1FZdiyaQ9biAxtbBGzyBsC1jGzYowFgvty1oAgQEPJV5Z7rSZXRzYWSLFNKMpnqb4UEXMAqz2nuca4ZfjK2",
  "key9": "2sniA2EHuQEVnwzCEGCfPTxaEVHCSPErU9GziwQrpaqQ7hRE4go2Fs3JjYQXqdGB8QZf8SVvhPMByCrz4rAZ9rTZ",
  "key10": "rhCer7Tztwaynx5czUVm8eCn7Q5e1btCDYaDiSTrpfKdAuGyGAHY7Bw2sGzov42Fb3QVBWP9qRR7sn7uLUtyU1e",
  "key11": "3vk1E1cKbC2sBNzZ1Cz3bKU2o88RbMNi3AwYkdo7VkDgxfEAUYLVQQXWU4KDn8a2JHAwKt7CpmNyXR3oBPKtATyy",
  "key12": "58gjXE5FifRFkG5FxzEjM1wZME3YUe5HoKWeRfL8DJC2UB3xZr9cpMjT2CoKPt6DcSWKJa6QgNjeDvoNa9oqyvYQ",
  "key13": "rrmyBPPMoAupP1KiS2bdHLbkxLC9yS6wznYntfCAgCD6StrALbCauPxihTdSjnyQ8fdcNunXvKn7675qrFucXJ5",
  "key14": "3tm7gRG27uMuFjyeuapjpXseNAtxxPiQ1Pxxgohzuk4vrYMKKvFR9sScAn1Pz1cgs6hnSPKE3A4bcDWsyTAtB9Nt",
  "key15": "5XuwGGxXJAEBWiAAUQL3FpCGyCHxhpPASTvFaC4GG1u5bMWLfETdLLrtsM6zuJdmTQ2QP75qH9rdpn5eSKYN61PG",
  "key16": "2RsQaSMef3kucB1v7V1bEtTrnaq7wGUpD6t1a9aWpXLU8i9oQ9smdFR1aoDLu7XjKRNaFBc6btjYJxzGZnEHYWQ8",
  "key17": "2yLKa3wt6MHXNTR1yJ6KagcK5BLx7c9skznYaNiwuBqCanuZbf65LjdFPakCQr58dwK8vd6j94zmRrL6o1yh2Zy6",
  "key18": "2y5qPx4UL8x7DeKh9sCTwBEyLCWt6VpRvraEfe7vhgqdMziCuo6iYmTTcdRjYAzfCMbSQEKTcD3JLFhUx2bXVUBk",
  "key19": "4AotUKBMY7gqdVuYgyRQK9APpDAoyGikRdCYcDTQQHAbqEKyXoACGCh75mpyNUmeHVqTERyTbDciYMzQPeKHiR9x",
  "key20": "FbPihREcE7d4RCCzFqLCd8zUq11MyqMkcCJp8kBFsCCB6r1uq9ULtwWoRUyFd8oaGXHJdvdQ87RHSo1tERaZ9Pw",
  "key21": "3Ph7oD76b5rHZ1yu3Cxv3jGVzzNLk3pgbyvdDGZfm5fcvLVfFfM3rimp59ecikvivivhpMBfeDaPrgE8wSXNQJpM",
  "key22": "3dMEXKFLr8k2Pm2C1AUdo8Jia18Bg1o5j5DCN8B6hoLSKrYEaVABk8Ubw9XGjkQzyHgkysPZgWQ3h1m5aXYmf9y6",
  "key23": "oFdM5Xcw5orVNxm2dqzkiL7zodoVcGG7kH7aN46m4QNnxUR4TskEiPA2Vt32KHyiUknyrPPgeHSePeK9aM1ocM6",
  "key24": "2kkppMN6kC22hpbYgYFftW3AwEZAaoYcVpC1xeDAeUCcMkMsSWEnCDXoTYNeGRDGdwyzDek129UVSQreysdfDsqC",
  "key25": "2CWxidNqJ9TMChNDtXwUUpsnpZDeGiRncPEAMhKEJSww85SwyYb7AFxzZkNv2zdTSpxyRsKKahaKJ2FMgqZUm5H",
  "key26": "2BRAkNuVUzVZiFiRknZWY2ixptTT7GdFPStah3RoXzmiGuVqk9LohncEQmk2bPMjFniQGXCdRCEiqPSEkJgUgMKQ"
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
