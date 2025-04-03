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
    "5sK372ZSJD6wm8x1fV22eXNg7Mk6CEC8JBZHk81jA7HbdaGEZ4fvquxbXnhb8j5xaJBT9tqWHcrsxqF1QfLG7VjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itZ38mBPEPVUUrRRhQKeaEmNgBpxiL35UPNrhcCebXsZJqPt1QYzvoTz5Tb4DVMCbXPtLnGuNXLQ5M2TXa3PyhX",
  "key1": "5zx8Lqmwqfgdg6HvR278EtTrhS2F64dwns96P61kgsbixeSPTB55GyXHpdSesSvmqyke95kayTmZKmzug5xskBy5",
  "key2": "4w1HuZ1x3XPEsZ7uCbYCPpchgC3hW3uVqyaxUKZgFqSh9DeRdcivsFHe6q6ZZHkTKQLcrc3brBhtXQvVp4oYVxNH",
  "key3": "sVrFWzVG7fS7iwyYjeKSnLcmeLpAyn3JD9MnLdvCM4AALpYhH5od2ZSuKp5eccYFRGEpqAbSZeF6AYn1AaTGJNi",
  "key4": "5V1ZDg8nu9qQhTV1DEToqZHB1KpvE66oin2L8zfki6sqdAF2B9SjAFx8MRBitWFNMT6VfJWkfNaeczvvYTTBSz2E",
  "key5": "2yu3uUd92mj7BmaYxzhgctpjg8Pt4L8ZjTCaFJK62SE5n216nDP1ZQeMV5zYeWLWzBGY6zsUrHCBWe3bZzWxM28Z",
  "key6": "365sumRfMisuoDnTF6vhcuSqsoUvvxxPUnmdWniCoJmCsDpsTk35xig2oDfxRQNxw4SFtAjQVYfz43fjWYtFnwFn",
  "key7": "3aMBuTfuTgaDXMPgoX58v5h9QHPuPuHpHhjPipe26cHffeoPcUW3hZNsnHnQz3sdjb1MCwPEeRXExWeJgSAyEb2y",
  "key8": "oGKb3SgBYiG2xSm9LYeJ5Baj4Y7qN1DCHQ9p4nvR7dvqYUKH4vCWxd1QPhhjV3wB4gC3YeMQ2jULoL5e4FnRQLc",
  "key9": "3RBMbPo9soNTM5xyPMBeJYp8wop4iW75XuEyN91kZ8ep3pnnr9HA9eo4kZvKvPmgBz1BpC9eNsg1pXRBgyzbYoQR",
  "key10": "yKem35NeZvgeQqAXHgBXjeyBXAmDMpJNsr15j72KdtC7xooCuGGe22k2aNZTqUfjTbmNzdtqm1Z7LByaEZ1VdQQ",
  "key11": "4fFu9tBCS7zNyXRiKEfqt6aZnwyAPgnu44eLsxnKWBqcH6wsxN5H6u7vrKwnfvoopJJMwg3e8kYqHUAbvAiTxKah",
  "key12": "5bgom2hPsBWpvLHgTa4BTctw6khg4oxt1jBEiQWv5aJ3EmEVgc2N7eS7NPdcMZR3ckg12WQEZXgNrbMMxN3ykP1Q",
  "key13": "eCzgTXy8WiJvmCukP2HY43mA7H4xajg1CJNfbSLToxYh4nQaYmbfTLGbTcEfi8KPVercYTH6fe4Cm7QLNP3hUUL",
  "key14": "tXttSXYXL3wDJTcCGH8SCoWbozMKcBCiP8iC2rVHq18Aq984WbWn9tQx4hgjwCBjVgXNXj3fQds5zQ5BJzwGqLy",
  "key15": "5mmG1E9ziEMQr7R57jshgkno5owkTrn64kQ9VPGFqzogmLLzgggeQzHxyzDmGUeGwA5oWq1aGNcPHRKHdm2RhCoQ",
  "key16": "5fFjWhf6AZewcLF3wqmcD9VGb2pUZpGpLpcQVT8f5ZvS2CVVbSAMrqsdrvLPRLykN3GY3kHwCGfMaKj2Umjg6WxX",
  "key17": "2ke9PWBeQzmwowvspDpjFhQcx5CPeLiy1qZM3FANmLW5pYLTq3o6GUM8A5jCrKGtPsNRN7rptRMBdAhZJsPULBLM",
  "key18": "7C5STEy4Ybnx3baWUFLFaEKgNmfAaTd5dT1cALX2TbjS4neCczKfCKnHm9xCCrjBwdduJmCEMgGLt3DSu8WR4Bo",
  "key19": "NcXC1NRccCZBdwgAXWTPse3SJKf7A8F3W8iyoDa3DrVSwpDcu2vCa84Qn9gdFwgQK74hgsDFS6BcWcT8FJoyB9q",
  "key20": "55pev1YbS2CPovR6466Q8stv3iwRV7hSNxd21ajHHdzGCsoMvJm1VuTmfSPq27FJCXtc6JxLEzEHrQrzcBaczMmF",
  "key21": "5DspFQgg9vCoy2J7bgVHEYqQ8seQWiEPLwCgZdqihtKZMoQKRzxNiRiunb7VAQzdMkyhiF59qoUW9hYpc9S8ToBS",
  "key22": "4nnhzmfoEcpQfvJTku6LxnRru5vFwDPJXo5MtfZBDSj8omGrmf6HQz7JgZGpuud7fEfL9HeAzU54ZGw5yCqTbpGB",
  "key23": "4pJwPsYXuDv2UnZCpk1rk8LwPXqS7efgbdNJEDHUtKtQyV5mYj3DCqrL5ccdHeKgLqL1rKxbYvpmLyiDvsVYQtTr",
  "key24": "1fMZ7r3zQGxwHkwLHyPAVLzyuxNrSrqV4LkoMf9qjBMZFhouJFEWjP6MNUQpbSYqzrYft6ihEsf6GcfFCou85hs",
  "key25": "3XexoXgATxMuJVb5XzTCXD3QDkwUkfAFQopZdZWv4SZ2bV69W1WrUa2ifyLATEkS4TP9TSYYgn7dPBTXegYdVKRW",
  "key26": "2MTHkupB7qELv6foTKS4UqYozeTem5KgRxDFbon9W8WLM2Kht1cYgkZ1Rnkib1oU3kFpaSBHy1qHvXaBfsuzV9or"
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
