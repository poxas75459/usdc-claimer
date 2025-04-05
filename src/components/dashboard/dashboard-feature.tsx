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
    "3Ni3NAzKsHeWZz4s8GjTEvBw5RoDcJwyf1fYCmoGE44bccVxVfXPBqgraBdNZrxe4M1ouYsC8HaKwHeyLH6LZ1yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tesjY1q6ab6u5ZeQGmmJ2u3Rf2hhpzzJWHVU48Xy7jACNR93TTR7Aw5eQUzwkxoh7haXzCE5T2v4Dbpy8LfQYeZ",
  "key1": "524onw3thZmjBUY19D3HbjKk3KFnHCxaVtEki9xfb8jvkLBmUiFyFm3qWsbbnhvoCSfzaiKmFxJXyQYVWLgSySci",
  "key2": "3ahA1DKfBw8DK2vgXCRyscJHVKgTCPCC2HoH2S3ZV1xWHonAAGzCrU6FhSckcNzURbPLFFreVuFc2yzvC3HrTPUR",
  "key3": "2Uav2y7FJis277JyucHLnPfnKMft1fWdNcpD1sxGzLEJU8jtxsjPTVrXzUkaooDXmLYAudSsXRxTWnVtdv5VCKGX",
  "key4": "2ufjqJ7EsxZpKyXtm8iyqJiGkLZj37aHK8o8M1NSea4xCKZeBBM8fpkRH9Q4EB3zyUVT7cvczoxwthRwnACbRX6p",
  "key5": "2AKYY3dDWTQKpGUG4ttkSQQahSF3uFpDYz6DbZdZiLpyrHZEEDpTK8aLQYHKErYcz9ZjZjt9Dj9gVSc1BRfdDcVd",
  "key6": "516YLB5qXnMc359wELmFhe8K4jZRpfDo7gf3MxEWcxPLdHgPyEwAr2T79WX2R1kzuLkpxo45wMgSkh8kpWSsqUw1",
  "key7": "4rzPS1fJpkS2jLnTaAa5RNtxsrmdNZ8eiqJnZs7fCBPkXpYT3N6VWEq5PGMTWjKaFzSrdkAaNJY8Xu69KL6RZjxs",
  "key8": "3wTvGHhZr6AcbJW6Mfwhk1NioF8FJht28v24vyiw8yBQcpEwx5GLRE5Fn4SgvYQyjLaRGdCob4xxvNwW3wRkLDCz",
  "key9": "4ZTUG4wum31AWfsQCDvSN7B6hdqekKQ4YaGGofx2g6t35bmroiGwJEGPGGMcNaKg27JF4TBqPNgwuEga535eZs4w",
  "key10": "2fGfnwuXfYBLarSnWCD5XrnBmELcTUci4TrofUi1E4wfNBfXmjYvMdCJdaBcJ4i59FCTzFySeZcvhHiF1zatPpFV",
  "key11": "4TgBTEv338b8i2xkqxhMkCPqKsozZDcMVipLfgSm5x7R1FcUQBFKcWBbnVmWeciwpBgbW2NTJbeTWQdHWx6XrRzL",
  "key12": "QJiAMHGQ8j7WyD1h1of9UpvKTFQTqdAtzP9XWFpZwP9xifi4a3HZ8uvrhmVbLWibpyDmxK1ABF9Zyc5JN3oxobR",
  "key13": "4x7f2uu6fBELfjjeK8fFTx6KrAhPvMZLrT2PA4PEhrmQT6tAhCFPCN3e79G9zt4M9npKTHhCjseaDTfVE5ZTvc95",
  "key14": "9Bpu5yErGkA7VVUBxmpUACmCVxG3dFbRFGKiTVcXU6MCUPKQUjJd84bZRLBUnHgegeiNwG81AsVxUfdfAyKEDdD",
  "key15": "2CCgukKCPZGgxPF8JuZCGuhBtcyjJEGtkXLWW6afuzQBTb5aNE29cq8QAtvACjZCHoVd4fPKgJNucfCimqWzJsDz",
  "key16": "64dTX52YjS3xhinkrPCGNQwxGWqoHxkhN2VmgaeeYt2rDHjhPU2A3egeAuXwJYxLGsasmL7jKwRPN63oykY8zKkq",
  "key17": "yb4YJ3KQQBm2XBwWXj98zzg1U2GdpDHqzY9MRb9BmCLmMKEUi5KkT24657Dot9RpwCf5UFGh4HNzVyAE3VRgmjp",
  "key18": "381sSpcKKWb7HrNBv9peL2Ezn1t1RwtnYPuKbj7C6MeeYqMVo5M4VeHraKR9PVhakPHtRcB9sncn37Q8NpfmD6zk",
  "key19": "2BuAWzKHqNeYzNgaJtH9Z4dTaDjuXnMHF3d1PN9pPTHmcHRcNiaiNrMSBn1UVZ1pJjjCzVHeGcnXSMk9QmajmAAt",
  "key20": "5Df31XxNnjNuqnTLzRfWL98yn9cpKShhRZhBM5vGT35xp5G8E5zfpYLHhgcpCKpv8JrUX8VJWB4fFDjw1QpawCdj",
  "key21": "5GhX26WxS5Y96dwJykDSZ6y2FHo2D98jK3KTJBqoDUfFe5aJDcMyN8ECgimwiQeUqJSAECDePUesAfCjUREpwNAN",
  "key22": "2rJYAdJubbYU6vhFUHXKFNGfCyWxdcfAguuxGXEbu4Bua1LxHK8Y6DU7oTkxYCfrVWr4FZJcXP8iMPGVekoQaDMG",
  "key23": "4t5rRfKg931yAvV8Kzxuek49Hf2w6DuNwS1AvjL1JwKm6Lob8S3dUC6EYpLxeSziJwXY5rCTojjX8rLe2xsJRtxk",
  "key24": "4AbjVEUeaXWdkq2jJ28ATRA8ctgsEoTsFWwX5DLSSmfcFpnyV8UmC2qy8pHDDyFJR7zQf53kkcTVGFEKDbZX2bCT",
  "key25": "2gCc572Cg4hjXdYyJ77mguNKEuWhUeiG528cQKrRAXoHRzKGRq6yg6MFK1mkxRskv2iBTPTfvTvJPZnCjDZsaWWi",
  "key26": "2ezi2gabfkUiFtAY41WwN1qZkT3Uu7oexAQmQTipqQJvXh7nskwkACPUXjmeDuFubErpmGg3PhDVMnf3b5tCoJC",
  "key27": "2ohJi3wuQNbewcUAf645nhnXvqx1ns5XZf6LjcBTvdr6be5RJBVijpGJnB2hRSopvj22eym84ZdydyAyBL3dmmVe",
  "key28": "2uWJKKum8K87r55EmXRYfG9xgFUmTQuydQ89MP5yFxBMzDZUxbz9kxEyUfhUfViH3HAZoq93CyVXyx1x3EA2TfT6"
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
