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
    "4YgeK59MF4NVbicMKn6GDUPW5SWHdonpbHKnpzYhM6pjuLKxdCUttHxe8hTJtLJ9JJ5c3GZGc1HYsgWU2hEaeUCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDpdMdLnnU3UBBvffQcKqMJqFNk2AjTDgezTzYFDEdbT2YQbdS2TShNrVKzwHhL8Q8X8rNH7p5jFojnRm9HvSfE",
  "key1": "3xxN2qedpAA5uutCvBTbQnDstZySKWdz5NBRzbqRTyAHAkoFLrotjf4i6R1JB14xeoWcrkYXxgptuPBeUvhyRSQ8",
  "key2": "2UQrjxBJcpCabY3LNhimUGbLpKRmoDLLyaMtfqdg83SY3T8DZy8cXkxguRudW37U73jUGC7gVSbZJ6eusXAxqVeU",
  "key3": "3eSDxyoQX2eVR12xD1ntjHnVpDrP1LPpqisjsh3b4utXSp5Q881EuhsJdacUmvmaguz7fVY945yWBRLH5Df1Su7L",
  "key4": "2G8mtMQfB3HE4WmcVcZyFc2PhffMgctrn2iZrG2JF4DuG8R9vk3BgVTVaWTkvuVyBzQoWeyJ8m3uehEVuKwQ8tPC",
  "key5": "5ogphSgEcJYznX6VhuibvvBeDb6Ymn7mFMYP5h6SUGirkSME2viiLom8LpCfWKsKVNsPPBfvNV3VTTdhDihs21EE",
  "key6": "2CihkAjR3ZRdxqkXg8UovnTXR38HCGRm1vAJVDcp3mQTjRWXcomqu7ZyMGk3FkpQUcheUDyZh3vHEVb5mVr39Efs",
  "key7": "3UuuTjU7SNwrjQfMQdYkDefi3E6Xe1qVJf2wYSUXfZzpZWzrtYYfYUsetfqfXHF8p4mvuV8N7sPLubRBPnMQEj1V",
  "key8": "dAaHLSjvbFfJX6xhLWUudY64mpADQ6QtCe58S2pEWwVvV9ujKdbsLaP2AZQWZt2yCpur1Uh17VCd8fmkGXSuzc4",
  "key9": "bBgUi6nnGjVNUB3tFgimnvwCvuJEb2KXHpZmjbScKeyhfrtRmfsDeW8vA2cE1yv2AoEtncTuc2EZQcwwCp9oQNk",
  "key10": "74E2kEMV53bAHg6zJ4gSmc5XGJz2kL8BRgwwgyveEuD2xnQz7yNqFSzqmnTBM4gvjHqCvoSu3fDJRWPm4NCzZjf",
  "key11": "3Vamrms25Bs1bJCeC8yoPKWcQVLbUMkQgg72xzE8rhNjSY2H5nCg5N468PBhU27akTKa2JAgUr5t6mPvEfcarmqe",
  "key12": "62735o9XxcNNfGgUGzV1EPcAjMRMxLDFHFKZsTjqfcBz3oKyHFGsvEhW2weNPcCghwoAAtiuQxys7gnzfSL1GKwt",
  "key13": "JDJsF3EeD4nnSmNfkScTWjzzPgZSCHgV4KPCPfQJrPSnbefoRjfHBptuMBonvmvRXYKD91h4Hn3cLq4SCmSPWRh",
  "key14": "3MErEi1DjyKPTizFk89BL3giqyCjhG8qEgNH4AGYFMnUo76XRYqyNSQNPCDEL6ygpoPqapdNyU48vGCqn1kBNhon",
  "key15": "kLHMf8AdeZ74M9vKJwq1d8VBGoEHsa4fEh2rjkXEzngC2DTVKFU1saXLjW5Ts5fVgmPPmgvb5ZqvX49n4CaKNKq",
  "key16": "MFVSDEEdHLVn8vaPPYTpKXNrt2jd6d85tKRQJcPQZ6Ybh66NvCnvxo4vjzSrCt2AN3LsX3Pe25ctGzMxV2oyNQo",
  "key17": "5JFfWgEsaLthBdG9x8s25PN5iLRfCCMo7sMVWMA9V1NQ1jMU9ACZZGdeCbVRx4jNk1hgaUpNE64FDZ87ysK4gPE7",
  "key18": "3WjMAbyiypFTXbe6Xd6XQqgGuTrsWsqJtmkTF2Gdvp1sQxX7uPG2DYDyWpEkdHPcmcQvKwmJ4BTiV83TDGLXjQV1",
  "key19": "PdkqeU2dQhnzVCn7d6YXTVGTpmX7LWfzGSGEzt5LapJwPsZbMZLTZchb89eux1sNMBH9hGTqvegVCSPoKRhaWea",
  "key20": "4LA2WJHuCjoXwwwgW7zynR5jfmM3Y8huvGAYeXifLfszXWLSEFsLNPqujVpyJTrZSdbTVbrT3Fb6EfjAdKyZ4Xfr",
  "key21": "5QcnUfjdkmBMVJvVDBhmomxnYCfSdfvqPa9nAJdomDEP8yBFxpYW88S13EoZvAzi7JknQqiSUBR5Ye4MviL4823T",
  "key22": "5AR1sSVU5AsRSm3nejYvMPv2VBY1Wrpmqm2kpjQRvEHU61Tv69jRW5e7vGfESQVdzkAnu7TFXjuFcLEnxZzwUzPL",
  "key23": "479nzsxANc39u3wpgJ6MDghLCNQZBgrVFkpfh8KaJDns2khN71RHGYroPvmyzERAbxYbw8o3K8taA9JzD3PKyikQ",
  "key24": "4UvNcNXjH8FCAUZa5M1ax9DgYxmHpmuNc4b971q9uF46SYg6FPe6dKKtXrMX1F4ujcnsLndoUeCCcuJTJjYNpCS3",
  "key25": "VfBAh3AfGJEhHSyjnaX6iMNwCbhkigrtEbhGS3GEy4C39iic1VgNfGCq8PXJbiZVssrPSG9pUU9r5icfbzFGznT"
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
