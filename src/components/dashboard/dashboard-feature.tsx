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
    "67mNgu5N82BZUBgQVgDpsQfnxKPcrm4mBeh7r8YA4KteeDU4Z8JXs35mzJHEcTcQCorA5cbWx1Pz8JiGAT1RCQP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wTxW2SWoyw19NbhwsxBLrv5ZrTDYhxhN7iQvFqgoX198tQKC2bpou17eXp8ckpgX1mVtj75iPLorrWtqtFs2Kp1",
  "key1": "U71JFtYY1JT4GaDDCwZeNx5vs2prWdSXSZgm2BCsynZpLGXwfqe4xs9Sx8TQCMeJkCEoX1y4jrUhP8UeXr4eiZm",
  "key2": "46mAGWKEJpCaMKJ8owwwpH5F9n5orNgLSqcTYCwpXiAFCJK5sLXB64EyGkuKS88RRbCqA2ruYhZquhyM1rXLc18F",
  "key3": "3ZECSM5GTUVJUNHumfVDb1ooHzGvxCDegn3HF3PcoLSkab1dEifMxTcEnkSsuQ2ZLDzqchHxafX3vHs41QZ88uqT",
  "key4": "2Rsxan1sPdzh8kxoivLXUegDHjcxNVJXNEGXwXjvEq1RxMCa6USN3zVK6rZtzK4CnYqLE9zkemoLZ239XGT4s3Bs",
  "key5": "4Ye8cetXD1F7AmeQZUfn54e6H525w8X1DAxuMbP77c2P3Qt5ft3yFTz1Bggnv3269j9b6r8y6Qw2SSiJkQPwrs76",
  "key6": "2G3otoqBCRNrb7VN42AwNybu3UquyfDo9fvbFCgpaVYpKdGrR7dPh1AGATC61SDcmfdykspfDLYvTnNH6Y564HU7",
  "key7": "5QfvP71pnWTG4hU92EYR3k3UKYfvmhSazBAmAuUMPyLqc74LWLC9acUFwRsL4FfKrQMzh66jXqPh9dJaEgLfwPes",
  "key8": "4A7i1s9BbKa1yo1osmKTcUN4jikpR1XzEroAuoXxvJj9V2mH5G2Udgb72R5cpQjUUYtC7zGxGmtDaDdLpk1SFLU6",
  "key9": "25pq3dk3HskyxiSvP9xoiMdQeeuhaDSSMKGxXdzTqX8VmcsUepFNQ8TFZWumcZ8NLiEakbKhP9n6UmdY3vkUcpN6",
  "key10": "4nbs68oes9u3DjoUfLhpgmsQ6cdV31LAQi6k33UYGvRbpGpzX2yYy38HYZR4DKpXBZnkA6bPZvHbHRJtTqe5tezu",
  "key11": "3ENiTqJ8ibnenvoGEfCDLRbX2WZyBXU1Kf7VE6v6owSrib5nxtxNsTyMZ3VrjU937c2HWB6NqPBgJxfog81gUoTp",
  "key12": "43DVSivhRnHz9km8xvYWHUsvu8B3XdM5wg7zsoZyZMnrbwvpTrmihDoAQpb7ne9pSyuSqKFhKLquRUb3HkZTAHip",
  "key13": "2Zoigm9MmzGVNkhPmGDmrNG9mrqjFhuGLWwiuhC6LAWfsdv6rgqCgSZD6S37cygRFjntdQ4uEVqUSdWikcjbheJx",
  "key14": "5qYe7CjF9defmg7Qc9nT3gXC3VaTpgK6PgJxx5s9CvB5xCnPrTnf8qj34N4b9rmHSpGGkTj8GRRu7wAvoEvZr8S9",
  "key15": "4XT9njQFWEoPaXTBq6wQ1WEPPfdxysEyRjAZecfbt3ZbkgGpXMETKbA8VEaVCdju91y6i2DdRqZZxM7yaPMkcrM5",
  "key16": "3UpQpS8whb9hb6Q4YgupqLULaYv6fFzML2UdXLMzDGpPLzDZgzUTFW8BSjv1jmMeLi9cPRjiLjSgRZTMMGpxCtsF",
  "key17": "34f9CxE1AE8RhJKG4ksYqLZF9WARrZY22YrroKVSyrpZVnCWYvzguFJtpjNHTywjSxKqFAcHS8ASGYc42pTpvuTt",
  "key18": "3Pim9XwbAMnu3t7c9anuPA88cmGC24vW5hU8ocYQLxr8Pz5q9Uo6vkLjJV65Lv8X7nkneBVHz2eZh8ZCeSXbnmuw",
  "key19": "4kbozfxQdcRFM5DHrLggx1ZZrUPk71bPoTSKxytM2SeS5FV2wVBhZeVhsSn4CDvfQub7sD2WWmZz6tvpgNejQzut",
  "key20": "5ydpPR1BHSifTQRgreHtwRzEBkcz4cFRayEtYD7msZF3D9kN9D4PWdc4Ug71VMu7pedr9Yh2eWFv1dRmcw3seXGR",
  "key21": "5MXBD2s2buk4aeuHLE1FAtMPkpU1LP6Xf2Ma9B4khh1VCPED3fS7xCEod5corA28DeUKMTJrfZTfyrFjb4d5nVnT",
  "key22": "5aA1JDcwfpaFtFrDuTLAK8fbjg5K5rpz3taZ2Y6z3BxqSHXBA9cVpgtwq9fzj7eoepMa3t3ysJnPCcwMuv1ghJrN",
  "key23": "2dEndZdXspi7FeXg9YPx4vtm1jXpYeAgFuRR5SvuKNJFKhhacAXRi6Nn46TXhLKEAvw35NuokRgorY3mWbWa3HVK",
  "key24": "3gncVaCPXrJtcqW6pprYqLnqFChE9FzmKAhPzsz3UnhsiL3zQpBj15dU3oTbWwLQd2MtzFWo2uekgrbBcU1Xixgc",
  "key25": "3euAkvcXzv297nMt2KY6sxoAPiCKiVkoWCEhUdwubyM5xwsVcK4naZV7BUwvNdThBYmrTRwApTdgJTaB6Deass86",
  "key26": "WQyrZpbjAvvJ2T67NKbiW284ZYCFhQXEPd5YUXyciWBC65tBVA2z7z18W78rc2ZEj1C8W8cvxXHVNFcfVAZV4S4",
  "key27": "38ZUvdW5cX4JCpRQhUXJYt3LyzUpMoo35PFtPk45BcxVvMa19mKAmgQPbhvgvMehLTvZLUFzhYsjuVyZRjcXFF8f"
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
