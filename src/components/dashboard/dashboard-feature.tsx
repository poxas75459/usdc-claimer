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
    "396w3bJ15X4rNkQ6sdpiTQqxEZKsy5xHjcHYcHRo2SEf8Vw7YtUwqvx9Vr6L2EP8qaYH43WgonM3VBdzQB14XB8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQK1RSz9uDuXVKZpVQWRbsMR4eSJ8mHXcppM1z8sV5zBc8DjnwRxcH1eeByPVZTx5Bjs2oD5x6Eew3nmwC43QHz",
  "key1": "iue5BJinP7aw5qkiLQs7PEorFY64ZnwNm4H38TD61jCMZRg3kjbdKce4QfcoVKoP5BEVVCKax6SQUJ2stqBVosf",
  "key2": "2M2WujYGPwEvjoXWGmjnbHwMeR2cVRrZzC4ET56JVQhphAJeB62Ju4Gsj2eTtvKxuA2rTEejdoGaUGoZTM2FpJcU",
  "key3": "4jM9nW3BCwmuRw4WR5DsB6bZdkdXoUwAuQ23BV3FccytGER4i3TNnDKScsnBuyLHy4GeEGYcYevxPh9L3K2CUTwY",
  "key4": "2g3di4hNFSAdSY7SbBDKQXfJMS1f7MYUbj4wQ2Y3vtj8H99QKwGYCHPrfXueC9SczQdCBKCj1BQe9o4CYSDpjzZi",
  "key5": "2ji545j7RyRdFFtreQmvXtqViNuZPJ4UeoDLEr5cXYzb5jfU7khyHA4ujZQF1kr72jtg4gguHdqenHhbcfbnUdX8",
  "key6": "4Tn5pVBxXJQXM2QEBzEMzYTi6Q94RGTuouVQTbxFSD894B3fDLB9e5QpukcPopPVHo73TQ6vJsuvKyrKg5gWsmYZ",
  "key7": "3xZPCEKUTKhoNPiW9u9NxXapttL2Ve6fHF5rXW7NbbJsg6vnPadRYXNjwVhqWxCHWs67P2GE716P7ts5e3JeNPXf",
  "key8": "5QSuXgaDvd4ToUWSbEFGmHybdNRna4GaGhsr5vboCFTRkWrPeuBxzsA9CUKodGnwE4Bx58HC8b6UE5AMvf7uYzPg",
  "key9": "GznF28ZeSmwuFj4Bb6rfFg3r4UEQ5mhVnMytNzwCk13HrS87Y2ps4iz8uu71jw37WmRgnVZP8G5ymm4HEUFzB4W",
  "key10": "3ZfBZ6Fkyp3Qjcuyf9DpR2wLrsu17AuDLQ8NU7JsGv5JSKt2YL9QLn4ysMqPFmuSE9ewgMtMoipYpvKCc4AdsAgX",
  "key11": "52xpNGWUpxpUE76WhQhiCM34Ne7vuMhsJgVDbXwAWGTn8XLGrkeVRJQMALGSicGTwzJsA7WcVEaCzVExoVQ6aBiS",
  "key12": "27efcN3d91dNvA7ejGjqjwe6VDpFXG3eGVbP5CpDSxQATh3yCyD5yhrjpuunrvDD2eRYfhoMhQcaMG2y9cfvSTFA",
  "key13": "18v4Jfi38SxQNxut39HBfKrsC8QLZTBGjZ7QE4UBTsaUCfmYfoP2oEXFr3mMNnhW4bPhDLiCvvrCjCHD1Df2Req",
  "key14": "2F6ARUBV7kHLWJFTVDQ7r9d1xujgYgzg2rbBnrWiqdJ289cMCXVhTrRxaRpRorkAsNtnrRS9ib1UZqxozQewZUcJ",
  "key15": "FSxeZzKwtgcyStBMU7nR4JXTpKAgAbsMJ4QjTWRnvD7nD9AZj1o5oXktMumLxyeLUaUVnzCdzcChxhiA6vAFYb1",
  "key16": "2RV5ew9TAezM1H8k3Wwj9y66dF2BTmUWAmBuRW6GeduLf12XNm6wPpPCnsjMR425R5z4skCb8SNQrv4aCU7MMwRJ",
  "key17": "3tSDTWCTxWVnNCTHJnZx3D61KwVaeLNwMdLmByrjhGrH6CMn8qrgfBjXqqDXtkgmtG792TtgKnwH72nxqffXWshR",
  "key18": "dQrVhepek5yF2MjJGgYGLn3CELxpNyshez7ZkU3qJLgeturA5rkyybXKyQWhoghvcqsjGyRyzcAj1Kaxm9pCAUw",
  "key19": "51GsKdVsPo24uDaXapofeqt8dHUT2Fr2F5LY1aCSRoZjFdezCCVeWhreVvQXS81hCLbBMLohNTm3xevXRKzbd4CV",
  "key20": "4tD7FFjmzBfcRyTZyfwfK7x1QGdiENGwhByL1wvbuvNnYwoLngUmWa5xrvp1aS2681CE7DHEbZQrangPFxHap1cs",
  "key21": "5qfqqJN7u8sqiKsMYPEp72xVP3QukdkzFkAtXG3rdJ2qq2VyAuAQwYGktNsBMVKx3kBuacfgRxtmWXamu3fE3d3U",
  "key22": "5n1xsueLvMvLFAoHymAstqCqsSNprqaKtCjbFcCiusbdVZRFh9ShAeK2GjH2Xfk5Wp5dJp6tzPNyh4k4CFx22jyx",
  "key23": "2vq4ZwCD954QptRQCQcFVJUakxCyMcLUa1RtLUJk5WTHdh5nhftRMRETT9FBoU27Hag86oUbD336D2S9VPaEgN7m",
  "key24": "42mMbXQCBhfJmThMvH18fnHk4yX7jarieLYbibNQdw73qf1wJDbvGngrwep9C5sD829ybzLPP5Z23b3qQ7ce3pM",
  "key25": "4cMDN4vEQP2xqKJzERhY6CzJcMPUvjTnZdVMuwv6GuS5hYFULp7QXrUUBDv6KHRJWzcJkkgN48K26GzfQ7PpWF2c",
  "key26": "5hiFvA5uP8R71a4yFShRhCVpnx9rLoMdafowXzGwdHVDGdoSTTMng8sjBmtjtEX764HfpcUv3uUfhUnxs5r9ifCx",
  "key27": "64aKF5RjkFtevVwdMKUMFnLihGfFt1YriCLQ7athhZKEP41qTQ3oVSCGPNsGvpBbt72NBmeXth9BgFU4dW4sWPW2",
  "key28": "4mYCZ8sHbz4UnnEVF9MLhZwKZ6UhfA3cUDQZk6GP7e1qAoDUqmy22AFQ1BWgXSLyV1zJUybqtpFpVcmD16nJJgE2",
  "key29": "5vTC7fr2EyER4XnPM3GEPbSj7ezBDF3v4MLWUixGkYHDKjTy8uDQopawM56PhZ2jE8y7dPnaLBkgWFMRtSjoBL9H",
  "key30": "1gEsDY8DJEmd3iGewDfQ89QUVD3rQm7QRYjNa8wH7Eo5iozZevTgYjytpTXcXbTtqcVS5xYBSkbRLn8QTUqLAkk",
  "key31": "2x6a3MpVYsVBXKCQLdwBR1teyuqcTPNfoBBgH4Q5AmsbGf89DsRTpj9bqNRCZCJ8Ddu6niDU6JUuQjELfGAFhbCL"
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
