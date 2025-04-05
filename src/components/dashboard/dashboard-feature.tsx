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
    "31nn2URrKAkPRprgQu6w2PLvut4xNgSkG3Y2UprREKdYgtc4jTJ9cXRwmLzCaDr5GCmhpd9eNLTDhq3Yy8NtAKTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4VgJydWhadZJF9guEvHGxFzS5U5tUc5X9ENKoMkytCEM4ZPRhYpsq3rhbpFTpUekR9cu2nKDWioWbHTwZopkCu",
  "key1": "332DZ4zHdMWgXBcSDLAH31CcJGTavp2upF7Sjz4JymswEmTKdKfRm7HWWrRew6XSLxmVMCjdFXqv4xmLiLX1qXoR",
  "key2": "2zL6Yj8L8mUZp3mDqnHWU6MFD5Ptqy1D8cPDWgHGvu9FtykEjFTibUQWv7GkqeFDYs1jiA61Hcng3ZY1dcEXmnhG",
  "key3": "5p5q7LRyeS3FTSmchtFspK4WC3hksuDfR3KdTyMxcichYui9mAxCTSdjyWBWMjJ6zHyBXJCKNmWesMyUvQDiP18n",
  "key4": "3ikFzuiKA9qDg8EjwBR1xQ7qYav5g8EcWUrxBJg3vWb6UiydxxXnEKQz75qUjA6uADyn5A7nmDxAuGveTzPCPfBr",
  "key5": "2HxQtppP26pDtooaHXib3b4d96UTaSoUg5qCw1BKaU6eStBtDs4YdTfvqPH6XFwPRjT7w8CxuFieDz3JxK8kjauJ",
  "key6": "WC5nnw8XdRj3qCxWziPR1sQcEcoPBjqr2XXuChHH9ToEhB8qjmWUyevLJywekbBUpon1q6HFMsFJuGc6iur3D9p",
  "key7": "43KgpC4y8w9P6TgitU2ruVTTa7JbLv6vgkKYsbJzJbMsuZ5bX5WZ6QB22U3qxcSzWgMeHARJMndQXgYYtX6H7WZM",
  "key8": "4ihPMEhj9MtXbdD1PCdbb2RWMYxFfVZQgtZ3GTBWMJyo88cNznvegqvL9nqZwXWvajjzPQZJ6CoqGjgtEsUmvDaU",
  "key9": "4J1kXW13xMaHdTeg5hKMbPYidAunEHVbccwNLuKN94wwDgXG5L3qxhXY1vUpvYkABJHLchv8GPi3VUG8op8sndLR",
  "key10": "4LM1MUkrBP9Ee1AcayaMuDr3VAmLjmisFitf4XfkTfVsbeXvz3inbmMEausq6fA6dzakfarhPiJyQX59m8psxRWC",
  "key11": "4QACWV5JepUA6GbmNBocKLsE6Y57ywsfmWf6cSJepum5ytZuraekNnMRzCixwVmnhhRRXms1r2wfqnNjF6hdsBhH",
  "key12": "3NBUp6fgGZ5tSqFHwkKM7fdEdWLSSnKaq8vkGgrxxuryoXgcoXLH33pa26onf3HwCMbpy4hGQ4a9j4LPU1zZhEFp",
  "key13": "qsfJ93ApiRoVwodU7BKDiQxDqJWH452SJ9DMBWWmxc9H1HuuDtCT589PfYusgU8CGBUEm41fBRCCkPaFkCnumwa",
  "key14": "RShiLtuDmTGpsnFuT5gu7QxwABiHT2grx8rr7YPfGAKTf2oNEuou9DgYPL6GgmruSJHuvk8TBmJWatGPDQXc6EM",
  "key15": "3675uYvQL1NkLjXJWwG2DKyU9BECtpVdEi7KWrFpYpGcayE3uXkYSiqpskETKiY494WDXdkNt7qZkFCYSgKycWyq",
  "key16": "JertyrdbT5V2icjeQBHhWN3Lz7TSWfqmaxW87JLkdTDY7em2RXDCDARicUHiv5tfdGp3Gjp25VvXty4hvcFHi2K",
  "key17": "2QM8QseVHQ8aNjfKmCwnSS3phXiYWXJQ9RQjcyfr3EK5Yip6N2mQp2P8y5rS79FfNytpZyZphcvYwaVaefJhDFe7",
  "key18": "2owZvxco3JyNH66CDAhBxtyCWVrrY5crZJCbDfrqKGyLjXH3gZrxyPmFVt81TA8i7W91hVdGnty5dVZQYde1fRMN",
  "key19": "39iqrJkgADsk24hQoCqZ21KidgXuJRXpdQN6xCg3A3T1fuPsFgYeADUdF2JrasYcHrAkNAdPNGNsRwbvMDXBsYEg",
  "key20": "3bqXscTP14WSXQ3PZsNd1xFpzdiTuSX9ropzYwbS9F8m7Q8AwkVN4akVFLdHJuAjWNvuR7XJGkBYe9SiyD2VdgBv",
  "key21": "32ikQetXZzpGSwXy4FHBKQqZGRwxq6grXSwDkPLb5Jc8yJu2yBSngqErEAvS3mxdypWioAr3zkggZLbp7efsuHHa",
  "key22": "3Ar2MnnFaFrgxGvgbUPnY5H9p5FwaiAsBrUQwuAwupCZQATXNpz8JfFL9vPMSZtheZ8c7PN74xJzACh2Unu3uvcD",
  "key23": "sUeZunYhvFQZ2xu6emLVoCCjvF6CLFhhPfJxdp4m2tzf6HgDrvnS4dXGsk3J5hZdHo2vBa8CkHxupPrxUydJgA3",
  "key24": "4ipdbNfa9XZSZXk5L5gvMRH58duVcFRDgk2BrkGdYKyvwXBC3uZbFitN8tPxSgnBDo5PZ7c51jrmxT1VreqC6Wv5",
  "key25": "3HXUi8hC6zWZFw37t5FJDUEbdCo3bWZUePpnqDrTkxuc4xBRzpLob5ZFYp2Vr2tTr6XqUCHitVqo6DqxKph1fPpp"
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
