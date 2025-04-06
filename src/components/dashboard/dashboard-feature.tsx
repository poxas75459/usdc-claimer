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
    "5Y47tFJqUqu6aMXwo6yTDbJwcUJMfmHWn22oMkB6Kh55wRwC795HvoQ8jz7CccYGtmxZTSu2nYpRLgn37wLoi4aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gahj37VNNm9hRTT4Dw39R3djJS62CghtfyVsfeucyehUCKyuDqnCGKDZUw4nroVnNXBr3dJaRbvdT2jVS53Lcz4",
  "key1": "2ULJnsKbo9jLm9Tjji2YtiYZiw7nv7yLdA6xF4HgjPhDehpVfo6GWrNLk17jQX97DTmWCweG1bKHQpGr1XCKHJUq",
  "key2": "3fAtW1a9jtpDGM69J3H5XMxaQ6HGK1fgyUJ6RXDJ9K47c3mVoxnu6VgWM9gVrubMnFQzwsKwBzdnhhnespcEoYSt",
  "key3": "34kG7RaAQogL5EHHqiJKGPVVLyj2vWxb6AJgEFdFMznwc3V725ZETYLKGeMmb5deupyDvA3iS3y64BibYNA1cfU3",
  "key4": "5cr9EihjrLSDtezXu7GWukWB3wdRXr8sft5JVDMALxVmnocwFZ8UxeRgVVELYKZ5PmJc8pghXzKBTPbk7CdHTk2L",
  "key5": "5KQidLZeDQMHnZX3QgDMmUHfRU7Kgf78BE8x48UCERuArY8Eeg23Y7udZoUYrWuXyo2nkfMDgAgCCYKLJMHqzRM5",
  "key6": "VuokEStBmzuC4ayfTx2FyEB1qnMovPmtydUthm1QW12RgWve5CP6AaGrD2vUY3jHxD3JePMwBLeAGmvHz4YJCSc",
  "key7": "xzeTNe6QyqUqEWHJczqYaTYGBGDnPACxpqN2841cJNAcT7WNN84uow1yf3Q2jjekNPmcZ2ziDnaxtYLt7LujTMW",
  "key8": "59nmyBE6vXShFcdjTqhhahDiRoJBpXyA16ecz5rFjQkDyeL6HZi2grN4jeszDY1h14BpBzuThhWA5o9KZGgAAYAm",
  "key9": "2L8Q2YGyE6rm52hxWeQuQJhH3eXwGvGSqwe2QAq3QDL5rakuLwHYVnrRVefhb2ogvYQTx43fjBkxKgUhTPuqtcJ8",
  "key10": "5pQLYnvHvhYx7fygzddj5eTAdyPrt5uThoSdyz9DH6Wrjp5ktKtCAJFM6kf4FmvTCRRPo4611tjvqsTmxDuy4vXM",
  "key11": "3f7Q1gkD86FMsVKuLCVVyPsgiK3fdn5cX8X8YuzzNzFXNV4s93cUbuKsBrfaYpmttG4GeeepZmn4ek9LgE72i7Dr",
  "key12": "3V1p9ApDobu1ErPNnZxgR3bEQNC9jnfE1CtEHALgjScXyho6LdVBf75atJcMNUkrWwWAfTfAaBf1iaPeKroiTzjL",
  "key13": "3RbkuTBCKoWj57zBnFTq9qh1UgFj48TqZdRYEdjumitcApkm3VkKzhxuMGiZdiEtHUH5ZGH9b5GfkPVY1bdJ3mZy",
  "key14": "3AzWPGnwFwzoe8BAD717N4vK2FMnCre3tXvv85gKAFuTC8MEdhKaBTvMniVo19Sz61hqoGS1fmrqJrzt18XoufWR",
  "key15": "5Ue9cityJfwV5wqAv5RTXukA6RtuBWTSSgFFcFt8GgUbTQH1JEe2DKXFfYffYkSNT3urF5h2vYHkQQHyqM5jFsD9",
  "key16": "4y8VYG6vPVJVc7pKRU6PQYjmnqjtJgJpfGnXQuxiYziN7ugZWfEsx4tvgQ9gUuW6W9AB3ivYHoVKkJx14qYoXb2m",
  "key17": "2mePEFAxS9mQYLNHxZcfPVLBsbwjvVqBB4UPpnry3hc7dShQxKmiKkRR6yVqPcYFncWH2fDdxmSqSqqDPWs5R2HM",
  "key18": "3sB7CuwGw54NivkH1C7Jc3cNaVQBMpptn2wgETqjaRHJoaQZVDSqvS3chf3i4U8T4MAyAfc1jr43P9RnJDdzyDr1",
  "key19": "5LQUaD281SYfKRZeHTGLhox56qEmDxUTs1wXpGaPPmsVKU3Dpzob5xvSYPUnPHx4bbcpW2zZ3pt87s1k7BN4QVpf",
  "key20": "3HYWKXqFfuzi9wazNJGHD7uS1TahffHLnTDVB2yJCjobw8qCAyCbjsJzWadauJS7bcEztBrxWAekGas2Z7rbj9ij",
  "key21": "ooeGSpdLhd7LZtg4TEBCe4p9Rp8CqYECt2SodWUUy8S1dyU8wTnndaweEMv46vZiJUZ6sgSi8Y3h2T3tLHS7yvW",
  "key22": "gwL7A7UszyvYzJaSPkwU6qiP39wUdWPvmigZ4KZSgoWhjR33byKbmc64zaku9saaQwjFRwnj7thyDP5FSZt6kux",
  "key23": "4bZHSbDrwWiV27S3RaZQMvufBE9xJ3QAhsPApD4d2pSh4SEvCQPx14q9wD4WpwThasxghdQ63aUP44cy8aUYZC2b",
  "key24": "2KfaKTNcK33uYnqr9VpnhwM6n1vxeonPCwBn2oGLaC5sGhHFyQaNor2jNY4cYu3a42w5niaPjawxiGVgRxn58bPh",
  "key25": "qGWEi1aZBf3BuAhGgdGva9GwtBzmRjYsGyqAEjBJENJipPwdXvMocQFzXAcrvGaudyESy3mx8k7txNLeSx6DK7j",
  "key26": "4cwdvKZnxyFaR64L2XqEUuLFy6ZGJmsvdiN6fKErffQddLgqDyGrW6KTVfMAFsmyoN7zsYtrgLReUTsfyHehbhfg",
  "key27": "4a3VPDpBYkZTDZGS6Sji1eTYPbPavxqTNsra1YrHSB4BpkunofQmvfskgSZCovEHTqYKD13e5RgHXArjxRNdiiTM",
  "key28": "3W11vXacWhWQUrr87joqbhhSGUuZZtvaqgPDgVcEm1e2TyDWt8CjjnfkwFoUt3eaBwZ3BJpJdokhmAH1ZMbtyg54",
  "key29": "Axr43qhHBed7yHjbpx28vu8w8Vi7JNZ7XNPmnEigDcePZs95PCxETmndLeLZAuJpRHBuRwHYR3rjgXMpoNJuWgR",
  "key30": "nu4y66FpM37F356iaZ2gA9fWSiRXHfLa8NHjpzmfh7t7YxfT8YEyJ3RMgVJWhuHFVPxG9Edj8NdjTiwcG1RUCHN",
  "key31": "4Aivg9YnfomHdtmyySh3VfqjB9Au6nojHK85qEkEJk7ivfvZ9ubFPnYWEuAVCNQNPF8UiWmWqnb4vXQWhno4Pf1c"
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
