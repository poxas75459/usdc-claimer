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
    "2QURPTRVBRGdQj2Fbikboj4rKnqgvmjHEWG5PtGQwH9uF7rvikVYUG3HDVJXR9e83iE1XPeDKkZmtRqWoD5rUKxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLBnX6s9GP5gS4q6ow1Q342ABeqVR6yCRwaDj41t8fvbVnkZVScyGQHR92yqy3HYMa9CEhEPVFgaduTgt5PLWZF",
  "key1": "4LmjdCfRd5XHtN11bH7uiQpXoBk4o8xXFhGF857HMuaLLfE9cei8An5NHe2R74QGRU9Awi8h6zqPUAFAYYVTrA8P",
  "key2": "4fSH83ACUzj6EJQDK8PpgdYZRowSfVrgTF4VAUZanUA4hmmaezZXe6gx8aPzG3rzpmezNbYYVLM8eTrZ4kzwWhM1",
  "key3": "2MJKU8U6bcAVeaTXGAGQH2Us2DyT3fTjNVjNL87L96GhwDqUZXpqj7nUkgPuDa5BksuAGuqPrzLH8phEX6V4VP1",
  "key4": "243CxZXE14fZF8fxA3FcrRRPMcgwYK4MPUVerUAKVjxvmkPuFF8cRdNgtSg3K86hMnFUVrTjSpeAmm3YJ4TwDfc5",
  "key5": "4CDJs9qbasB32YRYjtZVnx9dvSHBwCot22bN8D9KWtNbQYWTj8hfqCHr7Xw8DJjNJy7QEEQXXPDrYPDGg8hhCahe",
  "key6": "5iVAdobV1Zb2S5yQqVWzVWvR9tFdLxX1Dx2yDf3gRHSn7wWfrGTZB3T5XZdB1jsUwruKkmQBe482MRVXojScD2W",
  "key7": "2txPdMSL5ZD8cT9YMTzkjEb3WgV1J2NDR2yhHK1taQGiRFQCqLB8WWmMtQBSXpVKzi4wmvzZQmv2i7V8EvBfGNbU",
  "key8": "4DciQjymZ9sPRWDWAmWEfmwJGYbCDpNepXhAnywq1hpfhQyLzfNKFZkCiapCSXmBE4nv7rgqSSGk9iKni59sy9Pf",
  "key9": "3HEVf2We7VeyMeQTZuuE4rKe2kwNUVbYhyXEEp8EzbxgKGfE2Ddfd7p1qG5emD8RGUZNoriuXDKNUSbdfFRETanh",
  "key10": "3jALfu729QPamFRUvMQDeAqftTVvKCGxKuG6yMsxqdzS1XA2dYURiGkc44VPtsAxFJcN1gow1zRNvRkeiGK1TEQh",
  "key11": "4EuL5sBZnUzPakLguFeQNHzeQDVaRK3Sj2vVQmUrwR6DPVV2wvc1BzWRp9Rz7aXMvgpJ3JnLaM4PPmB7jgCTCAZo",
  "key12": "2VPqokVW9rdvtRAPPUKMdKmcJFyvx8X9hBkZBrxpqZniHPHyKSEuseZYsre1XZvMaT2Z1EcqBorsUct81B9a9V4V",
  "key13": "5HPnQzsXLRuNeKjNCz85SfY1woEENuPReHjg6vd7tKToe7kpqREJb3RtaQ57qeCegwBqJsYQVxb3EX94freChp4k",
  "key14": "4PcXfoy7NawmPMUNh7NoUcRW5LBQJA4SM195zGm9fKKmb7kp4E6xGEJLnk94EV9zJP7L1tZUAdz7uyJcbmcbpJPz",
  "key15": "62Gx45UvMwoKStHvoH2ULNGABQsdfR9Lywbhwk99eSbYo9dASQunZGmNyhrphxuF6HUAzHnPBpRqgmccqdzq2zfn",
  "key16": "54g93N6rwAFE4ie2YdFzA1QCkE1iz5nkfVZeADzM4wSYUqQ58SiGnB9SGFvjywvUJ1XgdjALkryvuHZqPRptpdgM",
  "key17": "4PSLySUHVG3FMemJJV5XaLRPQRDN7iWktTccmixYN9ZXzHDtJ3ZRrP33WTUpiAKPiezpxvKuH8Zay2Jajsddu918",
  "key18": "43MYtcKpXs6FR4apiZFTf6Y2QhCbd9vd23Xi1HyYmcrBYJzamebMVh3MThpEFgquRAKeAc6rJDfF69AGmJ2F9Tn9",
  "key19": "4ruhu7vp7D925Ukv7GTuH6Xen31Pd5ptBqmPmii3DPjfmd1zpzbn2Q5eFhfzuxeycNfeUkJrez3LakvAHaLFYrUU",
  "key20": "oJx415vEMoHuTQep6uYSJteVuuUTy9cmL21Mrxc49Hut9NxNav6K71SuQrextWBXeAqu87EDbXimGhZHXdsZseL",
  "key21": "3cXyJJxSxa7ZHUagLS7ZhZnUE6emiy36MLcjgCGftbGkbaUQ5vmwG47tXQTdoRLJnpdMcuhVdXXn1QhZSJ8BrxpX",
  "key22": "38JPirRDSosuXnhUkfVDjxAoSpYctQsVte7MFGyyb2xEdS2NZoX3TiDRgNmek8QPfaXhLzYnzHsq3uj6p5tPdAGD",
  "key23": "36drtSts6eG6BT2nEZxj1NfyHupDizvVQBmCKTMRk1CQ4znykQHtnmfXU5te2U5q9Xh7LAYL2oB9jT5SdLqSZimP",
  "key24": "5UQii3ND9FqDM7mv6QBqU6sjbVgYDmru4oVvWRvmiNag6DXdVLZFpberwz49iaLiZXKrpBwjbnsLkdfLVu4pt5ic"
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
