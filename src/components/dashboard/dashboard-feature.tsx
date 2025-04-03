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
    "3J4pooMUkEU1QBQUEqWFjC82QDniRf8JUdSeGWvgFTeCWmujKTRUY55Mnq4RptUnjDS9jAkWBUiXTuanzo237ZSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkJTURdn32AVwtMYcC8WjuKzgLiYUw3Cc1D4SKQcZm13J1AEWpkTExHL9LT7JDZwLJ9hEpyR3FrSxHBquSt3vQV",
  "key1": "2ej1XyRPXVFFevarHRK2pibg1F1CyPqhkoqA92tYbm5T8bBRnikcouPemVaowouLrmLketHV1nYmiDKVQpHE36tE",
  "key2": "4k4AMrBg4EoH9Ps3CSCicZypw1SQFXs99Lo4n8PL3SmRvZttrFdrEXMpjGpzk51womD6GAiMpL8LAV7u3xDaAVjc",
  "key3": "3oS3HvsZvXWonqjmmCCcLQU7LHTb51vxisYsnAXHd8vvDDeB98bvHRyUg6xh2hk8EfYmQBs1YgCKWhjpgGPi3QTy",
  "key4": "2mz8PFXuVJUzHPC7JSMh5sUDqxrWpbt4Hbz8TUdvNaeLPUzQcR9Sk8UR3azjP7vXYDYXVT4CBaoHX5QV3JoQVq3X",
  "key5": "x1sPnsa65ak5aphb2oitkb1v6gk5fGEeTiFjTBd1FohXtjDQ2VycF7GMqffWvdz1Xo9Y2CHyc63mEaJYSkJ7nsJ",
  "key6": "27bqrZva1FK4cdpyxBLs9h8wJMw7Hxn9GuyZkAzYUc5wY6JUTEn1FPZagWMrGpQ21JxjvjFkqeATR9pT1cPBBLAG",
  "key7": "3qiTwiRXEzdC5UtmFPQkfsZoq68p6puEg5pRRqeLhgc3JdEvbzb5H94A8mqa4sZ78avG5eJW2S1d2s3m5m6bkAGS",
  "key8": "Mj5ub1GMGHjQgyS3kXQcjeBTTQnCKJnUN8osvRrLRqYWVETLAPi4rNgS8eRJbqVcih5uXQHywvv2c7ZdXfif2cu",
  "key9": "2weYjHcr37xH5fWpJGBwVW7heqTjcpYDzhqVCy2S5r2bgGFTncFZ8XhDiZBypm93iKXAZiAC1E9d1DjguBcNUZBt",
  "key10": "3opq1Nmahn11wJHWYFfMH2FsMzkf6UhEUjd2MBCa2y4p34a2RvnDY4UBH3mXYjJtRxGij6u1DyDtfMgBGgXL9oes",
  "key11": "2vZc54hjsQhkyjZQcUvWKG1pt3MiNKjnFor2bmgG9zD2656KMXA31ivh4TNQRpxaWysc1XfLbKbu58z4Lykpgz7F",
  "key12": "4s5xgze2a1Y82riVkjAM6PXY8ujuiEkViEPReKgq7kkLmTLXbjPDmPKyx8inBegdP93fhKMpFrZyqVUacqyPX8q",
  "key13": "4roUu1WGnu2a4ooznJwg5pPwWo85oFSoNKi7sQeyVVSZggZXfZk5WZJnoszfsVxPrkLJY9u9s38UHTo4hpBZWHfd",
  "key14": "3fZ2SVnFW994a5pZ2kn13UH9ADxGwdakqgimjghMGkWECdTDQnWuQwcfYNvqarSh4nMDTa6un8ZH67oaVxZmHqbZ",
  "key15": "nX3aDJdMPdL3Vg3kcNBcymsZRdXxmphKoifMAkvdNnfg4Ar2MNWigb6Mu5BtjLcrzJvVq1BtH6G93HmpbYfktRK",
  "key16": "2fG9Xbmtzq75ysaeVMGKv5aMCt9gS6ETeHbNLjih57DfMBVypLVtwmtayAoR8BF2m8HLzEYqkB13jJcnFJj6dU4X",
  "key17": "5YBCYmX5VYRsXcLiLLYKSibhA6dhXeYadj21aMxoVoH5f9JJ48LCqjQBbr4s2LhD52SkJWkGmGWHuaRCmyu9YnXS",
  "key18": "5jVedYLHf6yamsVc5gtBRTmGF6cp1CPC8gdGkpU3MzyHRXqAaVNdpPxZFB8QetJLUQxnk2ZKsf3oKRi2SvchjeQs",
  "key19": "47oUga8CWWGsHwNLaaQuGH9qgewWh384Pb2SnpT1EFNJwFMGaxX9g3HhHKC95bgmG8jC1R94jLAew4NFF6DCDVK6",
  "key20": "5P6nKEJxz4qsDHovWVRsMTpcUBmJgdiUk5o3DyvQoGbE4sqWRVrFod5Ks5Js7BqDPGjRMMCJWGFCbYQXV3JnffCv",
  "key21": "2ZZsc2cpMF1sPK569Qrjm5nuMfT4kPrxJQzSnUMmfioxYHpVJ4irpvQzEVDu4syj9mQWpJ8641VGi24SfFq6tc7k",
  "key22": "4HkgytDD6DxTAjciHRbZ3cSouPNDA9vmwKK55KyEqEBcCCb6Rr2CevLBJvVsj9HLJACLPWNkHdxB5TSCAK3nhqw",
  "key23": "222WkJAzeEdbZSqSa25Fyw7VonzuwqZWaNLXxrqn9gV8y1Vd1rqjTbLR5n14BbCo2NQnejQD5oM8vLYAccnScrzh",
  "key24": "3pZ7ayXd7atezDan9Fox68zaBSD1RCDc8uQdZhC6Ws6XXsn8ebHpEY4zw4mZmrcy5Z4XwS24LpjkxnM1GankAtef"
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
