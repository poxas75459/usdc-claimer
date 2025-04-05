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
    "5VTne7AmEGe81u6byxqQagt9YLF4D8FNmeKoTHcWtHx6CpHnSEYzaeyF1JnAgd9i8TkmJ1DuBrJjnfxoqSpQbe6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twBaLNKEmN76hs86ytdVrxgyKRPEkQuqCEuB5xRK88in3nCefuf35ba64xjtpznrMrLFfWcvQ5noa6z46Augtsb",
  "key1": "543MHQGLoJMm7gruw7f7ocCmKyxW6urLxDP5sXsW3XXesttrfvmFDMaZ8CwwPK9HLFrm3vQxk481QJa4WdN5Cjnh",
  "key2": "z2t1dTsAYF4Y9EsPYfnpBRwFL8DZrR5ibQcxteadpMWFp4MLBRKR3npbjnJquXUF9D1yywN7bpxzEEHZH5tgPw8",
  "key3": "5g3a4LZHorgpdgMh9nDdpTfHfzVYE9CxBMErmEBQTUGXqeMZfVwipXAcxY5Qk2iDQKR3ZdjJK4EF8rQ39JVeJZrJ",
  "key4": "4vGV9CrzgZq3D3gSF1sz3JMKgfHwaGJ7AJjSuCegqnttemTdjzZpgraNrV5GQ4ePitd5NUV1cXVi4kQM9eum7KqX",
  "key5": "JRMUnnurFXWypnYyitKhXHKaHL553ru5yaLKmkEQqsSm1f8Tosr9Q8PgmaWgqpdCnpPP9Vyz8z4j3UfCNKQgyef",
  "key6": "3ruwkEH6Tei9r9jNvQ5QSo2bVKjfzQCmWhiLgRN8HPsPwnSLc19JCRCVyzQNGhckhpPhuEFMsVnCm66hYZKqXcvs",
  "key7": "4zAiAgiKJLuwHSy5tV9XwVmNoJKheUKnadki2HeLnfJRAwRntRZziWwXJ7RCgzCuS67Qww6wVZfbALFySiYR24mz",
  "key8": "3ZuADXRQ144An2UpXjon4TP6SCFaYGT4SrF8foMbK1htn4yMmYc5Hs1ug9JDHHhX6dZJpQU9STi6BfcMxQb3GqCj",
  "key9": "UDTUmvZkPjATGRK3i7Z4Qxrk1Kodc1ng4avfzYxJLtoHSZquUtRQwomtspcuASLqngow8DqM6KJ9WKjRXFfEm8m",
  "key10": "4Nk4nSPLK4wKicZhRQ7D4PrraQgzqTfDRNEbCz5DPBzdCeqhppVJy243dUNcpzNUj46RAy7a217GnhZBSRENHxa8",
  "key11": "3Zupiy3ueFmfD4gP4PBp3AeyNmoh9RKLPWJ4stAmwCDPwy24XLyaUuirzftnVSjxfetr91G2GXQ5ji4xN2WWziEu",
  "key12": "4kmNxAFbdC1gfmTjgNMHompqtVmS5HCY7pdc2bMkuFYTSLFWnqm9MwAc4iTJ71VANxjhqAfS9noPEPFsWeb7Gtsg",
  "key13": "493cm6h55iRWk5yRipdiZrvQNTpMEYzj6gH73bQYDR66ekEaAL5KHZcDkemxEGYgtV4iTNWd6LLY2s2BinrwtvMn",
  "key14": "4VoK7CcvUeQnUGCXhEeCwxSCbTHmxmX2RJZqeqPUysCE8Yg89KXtWE2DamYT3Fd5RrToYPHM5eJkAUatbUmKGaRC",
  "key15": "41nBStoaVegg96VL2rDnvkZWM1QUXjFLz7jPPHsddmpXtmTjJrNS8BUMcow4v4UNyuWi8CYVhBw8kq3PkJfK398X",
  "key16": "4B1cmQJFGCJwr8RZtbxG2p6o6E5Apxe51qouZRYXc7p1aaGt9WYrk5xFgeLSEidjszRaca5TcE9JmsRkuSNMY9kL",
  "key17": "46kEMtmLBp6wcHfmjBdtAoXtfQB8czQRnDBMZxZFFhZVKUSNJkSX4z9uzLuRLCk9fSMWNvGCbjNjofo14wE2yk96",
  "key18": "54dsJnHgQGqr5yi11dfLW4XBdj45X6LGWM5D5qeWXk97DBSBi9CiwPUScmr327evQwLrcCkEYq4YHyWeiErkHNCd",
  "key19": "368LTJECEfQE2cQ7tVrXUbcg3NqxDSBVQDgFXW8vkisZRvmpjZHctTTEoxEnGYjMXx4kY563h3jbuaJjqyN4gTDy",
  "key20": "6JGdTtodTqfAdiuUGHxfGFXMKnRBFw6JpBDpbimJjbsa5D5Q5LUKqqx43CRKnjKcpGJXzJjogbWqTQCLMvfyXdJ",
  "key21": "jFieV4ihRtAFU4C5spgE9TQTqCd15Fs4U3U2rXyj599rEnwyus7vUYs4Npm2yTbuSwMArBYnb5zhUgoMH9Hj4c7",
  "key22": "5jGy8F78bBNjqyUdU8t412jBZPVMTZESsF7cXgBMtLypqcGfKe3xjPFTUGihczBWXd9K7UQpLxAMmaXUUMZbia2R",
  "key23": "2XmBDQZPQwRmFz8TeCBpLhdZPv5ngV3VNrvj6RBSRT49NakpAMpY1fby7tD7C6Yysy7BBEKkvZ84YdTmWvy7m2rQ",
  "key24": "Cfgb4ZsVyzfS2EeUt4TGTWmEiAs7pfc3HGSDxDtur4GygsanqoWB47Sh4SghCt6cXpvYGoNb16xvcViK5GHQNcb",
  "key25": "29CKnkJsnyLgUnxhYnHH2w2eHH5jFeVf4MEAYdD6XShZUD9inee3615VQcB7NVHfBXibfcnx2tXCcELKh3MXPHJa",
  "key26": "XWFnQbGSJxAivohrMDtSrbdjswUkmqKdUGZeLm5TBvvvJvHNzCisP1hFwUix5RUErtbC78rkLLZDBvQyWvLRKtt"
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
