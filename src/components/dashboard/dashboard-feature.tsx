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
    "388q1GtTAD2m38zMAxpGKRdBpMJ6E6PYXCSKX8moqEYsVB31hQMKNyJ3uEYfbfi2Q9smiTChxuFXcr4NbzC355FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4jyZSjGt2BKVE6ThJvpgNbMZKMViwHXonboS8yXRzyLKEPiBcEzgsiPun6Aa4cuh4Ub2CTLQKrbWhaHDMmZaD1",
  "key1": "4bidSSNrDgaSXvL4QVj365SU4GwYwJATBe3m5FwtD7461sCbHFMrHGjZx8wgEhQiD6f5asM5ffLeHCB3PXDooXGr",
  "key2": "2zG6iXDemzXHxJzV5Bh6dtCaPJrWcbArVFu86ubUD9puEVQbbyWP8QuUutLzXocJDCdycopwbApgLUf1NGLM9nuq",
  "key3": "4ywNwU2X9w9VQRtgBVXmcQg1hij3nC5xTyePWGYTHdecQnyQ2vdGuDSAh5K6KDaLUFeQgegKSENgXwZiVE6hDvXj",
  "key4": "54XkDcSUi32Rn2iYeLkmsaHtSGKU6TrAiGwWrofRPMdNj7nGM2y8R2Bq85B5MeaDSHpWN162SbUnfurZ718WZuLD",
  "key5": "4V2E9kvzF2mj5PyDL5iaxNkh7aKz1sP3Z8STs9EQM8Km6sa89i4JuxaA7rnMRKKM6GDydwh2hg33pCvXPZecTiey",
  "key6": "5Gf16SdommkGq31JeoAyjsgzAy31qaUc4Nuqk9xhB1wNmokFMAXoy2SGQgWKy1ECjhk612j6ybNivMX8sNsUUtTn",
  "key7": "4rKuWoXKe68ZS5WTPCsyzH8UPQHieJ8eM5BUnBW66xS9MY8HkKcXSZ7V4mNzWwMQmhLXTuzxpidoen1ufNV5jfN5",
  "key8": "TF1AG4rbmgE8x9Rujqk9nfyphGGbs716Xxj143nN5rixVag3Ht1cRu9kgD8jcuTY7C81AVkWHY9p1r9hwTvh2kT",
  "key9": "3yfNFoqqkSXdFr1cGSbVW6VmW74pUVcmKQv5xdReJGv8yaY8UpNK6WtBqH3mpAbxzUagULWURVP3yRzqgurYdHvd",
  "key10": "5gUQtwuBK4vAg8N9QRGuJgf6wkWYMKyzZagiLRcKku35LeV8AQoPn91Pc9XK17i4eY6hNKXcpLt2uGYk2UGEB5MC",
  "key11": "4nzNLs78MbbrmPKaZLfKiA59Labmy1Wc32Z7t1BmXUEyQ8SPVJwxC8LgWrS55WvVkS6SHwcxFKdsCQfPZaRTMYeS",
  "key12": "RFctPRXKyy9SLBLhjLskRTQShmpK76xRyTeC1m8QgRJpYkmuKcrCD5kqzKQAJ2MNQBmxm6TGjg67nR1Mjx1xDam",
  "key13": "56WYM2j2ssWcAMwb5waRtZL4qLSxKq7UR6RsUspc9184jp3sM5z2JfrA79JQNhxXT4JMTqFSd6UgR54Pj2gaxwTh",
  "key14": "Zzt5jNvSBGF3z67KvkVpD5F6cA1C2qMmyGZCgsz8qbZq5PGDhsWtJPQoqThAFg4fCErS1KknR9zjqCj8r2YoDWe",
  "key15": "3QsoVVRjSq2WpHQhiqabdm2MMMpp1cbT7kWWNCShdqfuSsHgGgRt76qkPwpf5PdfcCocWcWwds3BkggHiDocWmTB",
  "key16": "3HCKh47SCAghyhzXTCrpnD19JxJszQAJ39dMu8Sb38Jjx1oW11iUs3Sy5rr3PHqoewPWYPvbz9miL9o9GBW8grUw",
  "key17": "4LqoZMJ7YYJirXAhCGjqk7e6hpptvKq2c9CuCouqHW6JByb39PXY3TnVa41DjuoActxE6negqP6zXZ3sSKatSPTC",
  "key18": "2W1FCty3hwcbDi3MHdQXvFrDnNWpJ9JjzRSWRvQvcS55oidSjWMR56BhdPJtrqDtYZxCMwmVkTH9BLbKwF9gAxee",
  "key19": "5fHohvtr2dutqj1wB5fZNs69astRcutxKg4DW5zBo42BwKHmLFigLyXWXhq9ifPdw7xX8PXdgAhs2vDmjnbaSGoa",
  "key20": "3jQLxRxiLKCtyLbHJQQKih1efMx9WxPDtDVepVvpy2NtKzPCpbpZ3h97mPorxwpL4we8eQgaDesgNartwmeYvEsp",
  "key21": "2XdKMYgor3fNcNSvZECj9Rw1435bkR1Mh47KWTzUcSMJvP97RPQ4z6ybdf6LUCk4FfJ12gcfKpSkAWTwkt8FJLT2",
  "key22": "3V2jpSXsNYiABiT4mz278mSvMhSPbLkHGtHkjXP7qNMsRvQRfwCZQUGWQQAq1DSuPzgF8HMqZYC5SKB7h1fniYVd",
  "key23": "3RXEjfzbgsofnaEY1DcGNbN1La8VfcaQGTQQ41ndQevxCXHR4SXrYwkCLQdrRmUQJG4GvWszTyDvPsYemwxmQbwC",
  "key24": "4rKh2kQYaSypCRZCVE2GDXcQMYo7bnPus8xF27TZhaa8bWojevskXiC9YCzXaMw8M6dCQNCGKGY3yEwhkacrG19u",
  "key25": "2AYvBsXKHsWRTsP7o8JzfMaxQnqEDkFtdyDVpjbYQgxJVruxd6sVRQnidGJ8ZkUBKh64succMF8asyupgmDXPTcP",
  "key26": "42huGdvKYNTeTFtPQ4eYQ8pFi1PZzaaKcYdgJPCmEhG45MJMXcRnuRgdzdpZqHu5iYvoriuGCXwnX59pXKJkTCiw",
  "key27": "5QsqbLCSrxANc8ALbFdpxmLJ6yfAJxfHm6hUYHVkLr97qbsam1njhGtyqTM2FSQzMdjzNUBYKrLQEcYsj67ufVuU"
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
