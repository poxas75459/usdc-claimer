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
    "abCj6EWRn1DT56SvTuvNGW2Q2t4CfosS8qmduUdVaHfZAjbGUoZf3hy7dmhy1cs3UsaHm5e3JbVijQ9MtQQr4yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Skvq6dFQhyH3VLbh19SuTMRDkC5w5Z4RE2zhVPFoqR2LzMuSMdkJ5cnNSxX7Kp7aQV2GmSWakuHdpobVbdEijpz",
  "key1": "3cUng2WgXhJdfGB3Li2u24VuJmLK6t74EUpVBm7QSFeAfyVCKvD93FoEUFj6yjMVPUo1hHfyahpCTbYPovkxE6L2",
  "key2": "3snmrwtST6nm66UodMWEAfsKYVnmSNw66zD3MUfHtQa7xzRZQpRweJJh9i9dAiM9qc7rDkQK6zQKhTXYf2QAbX3M",
  "key3": "4GQbvWHgwzAAEnxGh1DnZ6tjC1XeNP8kLXhM5cKcLW1EUPx23eL54g3ZRAAZRsgsSfoY7HZsGoPYU3XxZmGSRomz",
  "key4": "4Xc7cvEA2RBZCxNPcxUGmDb5jdrPo4fUhsJacXUpNLD3Q4YVoTiVvxtkhDK6E64e7PamtpYvrXAiTwAuHtitJNDE",
  "key5": "GY57X2vEjqGEyCmCweo5bHa5uDeDW5cFNe7Ag6iBeQN34DbmW6CjaAWPzaS2hfAjiHBQ1Ftjf7N2GXJLNAsG1Nq",
  "key6": "EfUHH6U8uH4aGi1CS3KNDUfrJWTVmf8G9sbADBTZXtHr9czizCPZdoegMgpF3bqkJtk6eWrLaQSuw43vzAYZtVv",
  "key7": "4KA3NJF2PmgTjm23JMLyq25t1VCMDxW58RDzgZo1pE4XAQupVKAK7CgiRbUgmQG1DkrVNXG95D3RcvTcYy3rRpTG",
  "key8": "35Fnymk9UYL2bQTAiBuuY6LUVjjhqcJcDvewKzeeNGveCeV5pxsUR434tKUbx8ddDf1orre1dV9cQZX15n9Se5vC",
  "key9": "5KPCGT5Sp4PcBdUxfRGHYMnajTWxWvqTP1JyH3VEYAEGWC7xVgieNRuY7hxcPqpBD7fhNrfjPvwicS8cTDXDvrQR",
  "key10": "54Pj1UiZ3uMRL1PMyfPpAqMxaH2AvAsHc7MmM9nGQNNmzYVpm69PYLa9Acsjj885nY7KhxVa1TdLyWdrbWCsdGK6",
  "key11": "4aNpkuiVeXkCztj7ds9v51VijjCVpymkjnuUbDPxSxEGXVKMau8fPojDa7FaBJcnTuhUGv2sQ8iVMXpP82gj8SCp",
  "key12": "5ovSqczyg7CQ3J7WgBVPwVqEEKwWXYp3EntG79EFh8QKXbpGApsF5qu2k7v7g19TS4TNV8C7kbn61kfDQhxkzu2T",
  "key13": "S78Q4zvA5x4mh8UUtxEoCPTybSCbMz4f8awmdit3dk7e5DbS7V6mh61eJ7CaBML1jmusVfLSJRb8Fya9fSnPrHn",
  "key14": "5gZojc1hKStBVuj5t2dotCbtZ1b3iJuvbk3yDj5DZ9dZhJbzvEYe6bhv3Cw1EX3RNHuUECVfWqQ1xV3XSbo68ujZ",
  "key15": "gw7JReWt7RMWToYx4TTxQgo4owhypvzdAffxaqmogYWEyTph8E23SNkTUiGgM7dNMdqPTGoryMQTfPB5qidX2EL",
  "key16": "3jHcwAgTbs6f7zWLVhLCqTgNtZHegsRE8FMVsAbyyUcosTmbDkxoNyJLqqyRTR3Jw7EEq6QFJB6dMmkG6y4QvfZg",
  "key17": "3cCgvdVAVBwSL99WsoYwvHVz97YhkpsE5vqnW6X2adBXS8aUhgK21bp2vdPZEaf678B1NiVkW3T1bxfo3qJdErBu",
  "key18": "2yE7j6Bxy7Af1B3yTAMnA1xLQ6UeyjBsgnhMqjiFtxDRFj9H1VAYsoiSRqufukwFmqGj3QJAbLHzH98NZtpUJK36",
  "key19": "2fUowKSayMbmyySR3f7YvELqp8u525CNa4zmdGbxECm9WobVZYW3fTpERcJPCWWimQMu1CEMQsaXEXbALQqFezbg",
  "key20": "WoNqbE7usLvLtwPPR2VwecBpueoQ9rN9wGHXZH6uchQFEYFfjQhGh84vwroeTtTqwHUL9afWQvWppL21xj7mjrT",
  "key21": "2tLgzMTkd3RRCzmN41m8MWMsEuHRZh3j5GnwXy5gyfTVzzeZ1EWgx5BM36CbAbMoDdbMYr6ysNEGhsFNP6ZkPN3q",
  "key22": "4XRwcjAnWdqFhHtkPH4tgxmeCqP8uGznX7HuVgdNFqDbtbX6LyaZaLr1t5pGzE3TQqLfszfyEtaMhhAJYCGadxPx",
  "key23": "UyzgvLGKMePt7xdfn2KFy9RmcVSTqABpqH3CPoZrZzPmbg47XwYqmmoNJrhDhVzp8ZrtPRJf6YXh3DaEkPqeNu3",
  "key24": "5xrgMxZD49kBVdrTKkhF4YvBGfaGVbZ3R579vKoYZ5fMz82s2byWbrUATWhhnvM8SrbrTUhGMqSvsAR6CRXD7VU7",
  "key25": "zxs3tygwZKhEXSFbFQrsbdRpjhXscTvfY6wQG9e3iHwKzp78G3mJPxCKcQYtKNy7SiKaE1EJq5HkRSdZfdG5TMF",
  "key26": "5HfiicjNuSAZEAyD9ZNNPLgt2orhqcRdVxs2AHhJGA9gb29JSaTTh7M7TBnQHbuv2wm7GNi8mHR4ER7GepFpH9Tx",
  "key27": "33Wv1mnXu1sayf7mp1q64JVcEkgWEnaCGTp7HHszYHiP2V7WSBtGVGmpW9HzBYPhzz9BqLEh3gRfMRQwyne3smeM",
  "key28": "66eU5dCms2pQPfT9LdFrZBPrkCS4rPJy5HkGg4FG6YZNF2kTS5dzPYn4LvTzYyyn9GVs3jAR9SFYgjGGFU2XbPm",
  "key29": "3b8NmxhnCQmMmX8gVn5PnGh4j7tYUNfkZZsDvhUQ1hMX3tubDa6FViebumeKMcUy9LABunKSmJZquR4WcFaBPkSt",
  "key30": "2xhKBUo79gZ1ySnGkbLedEVX9uSR7CnM4wjPm8pNjh77MwvFEN8h8ePH2ijQwxFB5XfgkVkdREx2cEe6eBF3MMnZ",
  "key31": "p87gdh7ipLgb4HDJrCECyCjpWqweAGHMnxULKjGaPen6J5KjpK6AyGVPRRxypgdiLpH57xzQf9pRwa1WuEK4Zac",
  "key32": "2FU3v5s8iqQxyGebLUUaoQrqMDX4gUDBAy42aBnFnPYM1BCJfKudMXhRKvsQDsTfJz17Ppj4pYCaCf5ffUceKJ75",
  "key33": "457pheoEz5EGxTg44idwNSzJm1JiC4c4kjT9nqDaCbdapcCzHdUtjFYH5BxSvPacP4G3KZQRWFWegbo2UiotxXRW",
  "key34": "4AwGLZQom7iiUspkepF1FCX7jDRiqJPaBHEB6KtEipCccxHks4xE7QPEA6nxLYPENQ65656VYazNGzPRgKD2X8J6",
  "key35": "3erM2dHMsKZHkxqpTX1DGfA8wnA5XwUssyECqLyfP3A3vJCiSz89wiUpG8zxG5c5tNwrSWSNw4NLek7NaAMFYszn"
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
