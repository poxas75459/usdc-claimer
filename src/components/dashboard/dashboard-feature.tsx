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
    "5p1WVGkMWR56AAWXTvJhYVR2LJ511xy1AMAgySnmPXuFVNSkEPaoG9oArFHLb9p5uJhgZVynp21ojcLDkJ3kWhwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318Y5oY41GT6Ek9PvwB8fqsYno1zBkFTzrKSsjenArEsLCX4jnMXgwCYSgWupASsyVtD86NZCeA1EBBJvoNg9Ytt",
  "key1": "34EzP2KTjnrWe5YvWUUivg7vuya461GjDpE1P1cXGJDd7xoHmAAApKZkPMFUzmkJQBnUjAMcZsPRmMKdLVUM1oNX",
  "key2": "UMFdpfsFe92GCbUpbvCAkHQcnEPNgnWjKZ79rLbvMHZ6CgLpuXZ5uoRJ2cC6qtvRRLNxAHBUzubiX21qMMcbXup",
  "key3": "3M1BkDrcXkRPz4feRMYbBwQNqhRKUembJBaHbarxjVKdN3h4gmauECLQheCu5XP61ZjWyqEWgis2wVCVRZSkY48f",
  "key4": "5fXxCWiL8v6p7Hzd5sQ6UBZGMMfs6T6qDLZBvnLXiVCMQHVdzNJpzbA17ZWr17jMSZ4y1BPjpo3qPJqkUE5k3U4p",
  "key5": "2m3nzYmczVPLSpfzQ3gNysrmhw97w1CK3Nop1ixYhzBrDFAWCKZFT11i4LZ8MkV1hz9qDa17RT18WVDpMh79TyQz",
  "key6": "4GNWsxWnoBgTkkP4XzZ78b4zTv4YC82hqRr3gKVSE3SRVcZUJB2D4gPTwtH9LaQEymABrGYMoFJdEP8Vg1VwP1sC",
  "key7": "3XdqY6dBfuabisLcSvcrM4SaxU41BJac2axs1FoytiY4uPHRyLTJguiWeTNqA2Uyvzyc6x9ooSVDGvBcnYdop8HR",
  "key8": "4xHJo2zGB7gFQr5QEuU1L5RpFpbYgGtVEEpJxB91TPyYzMVMPH4C4gF2XqcTmvFDnoGn9NGbJkcjFm5KmGs4irKD",
  "key9": "2QN28b53RrM3GbpFEHoCfqENMeky1uxT3mucxbDtXDz5U4AHbbmWV5VTrnHV2LVX8PkaCFasJTMiYHsYCrYkvem2",
  "key10": "2MWyJfrjGyeEDSF2DYLdoAjjMDrcUTkNYEvUNsvDLNygEeSotEpmKYycBvejPiZ4shZi9yUfpQ34xbNu86z85Hcx",
  "key11": "4z5wMAjhYoEgm1vtpUE8FK4qEhfCKEbBi6Fr6zaEbkZczKQ3gSwsxaF76gN6CznqA3s56UgECsGsJBeFaMVWC4BL",
  "key12": "2PSSZ6xGGD6jhtLZy1CW1h1SeY8KokucB2dVVSLcKdFzD2Nbk2TVtgL8Q5YhzwLCrmkvHyfWmM7wxAYRaoWPGuUg",
  "key13": "2cXimfGJk119jwUjTYxRC7agXJKKJF8RNnpdAi7Gsr5tNabfCFdbFxsga3RZM78bwAtz9wTdBz9D2F5AN6ZhL98r",
  "key14": "4wZLc1bHJPvi9m4sKY8f4vMxMeRCBFMF3EtMk2UdcZ2iDhGTGNQ5JA6GvoN4KHcd6MtB9QtFL2YTsEHBXRT8Xv8R",
  "key15": "2ZW7giDPZZFwQMYVwMZmNAVMdaojaZZxcYp6LSjfDzsnztwypvCoBaJ1vpYGXFfCf9vEPaXF7LsXBuuVW6HZDos8",
  "key16": "2KvQdvY229CLK8xtVXAnXUshVc4FMZFEYqtZkSsvfZiDcZWAb7vJXXwN9X4HP4SP7JnkHv2ej5oHznwYWGuxiqxL",
  "key17": "49LpH4jLxMkS4DbFjuw3m4WFghCmdz2VaaGukQ6HDaocah3hmY1yP9kEJqKaRVTWoLVJ2RJ4m4KY1PrnJmGpAn9t",
  "key18": "4ePXCXCQSigtwyJeZfK6utgU9hdMKUM3ctQrnbcwziQYASTJgoVKJKZZqfKMCr16WkvYAVWJftQMeY5DzG59bNdW",
  "key19": "2KSUMYwrwf3ePXfgYb74KywEk5LdaqZpTW3rkMUknB8JUkRTbpPo1jn4noHEPCtAD7SXonZ7PLSp3GyPDmaVu7Ww",
  "key20": "5TxfyjwVmRgXBWh1ceGSXfNbwxP68TdgE521QHfnRu9pTauzLi4eG5NAcTk8E2qhW9vaNEBBqEiHDpk4jWSHuuY",
  "key21": "3Ro9LGZL4e1jeaK7MvPSLWLpgiRx5rWoBmSY3dWXvuh41aKWch4NgZgJMjR9k7Jof3EfQfKpbxPoKk5TisevLM1U",
  "key22": "2ftg7BxdUJYrYwFuAPF6PjZePrW7CqGTRbCfMSNSL89AujCcNsGkeHPy4kFLSaKh3tY4x8cSojrLJ7xxXFzaazcF",
  "key23": "3bZzfQTqDqJhof4mNtY73TUok8h2MGLLPK5qY5PJBudCeHH1tcE8ARstSDXcCcCfPBajAP2VhqRqmREY4AdAVwdN",
  "key24": "2o1Xamjk74Fyqw2gZKw1fyvgSh5YvMscutos8pkQYaGpHh4TM9QLf6TGdg8rZVSnUy7LzkUWGaUA8VwFDFZcxpay",
  "key25": "2gz1Lkp9Ba6Xt8n2w1Km5wRxeXSUya8t5i1i9d1x79siNBPDEGf76pFLHNYiXCr8QxcCKdVCPJvgKGkaJAZ3S7FX",
  "key26": "VCgwbBLdN9wauc2pMRMWZ8n1jVrrwWinRdGL3VTdDyLFXP3c3TA2A8ozBw2P3FA2vSRJStzJfMPSKsioYqzHTVR",
  "key27": "2u9GKpryVs3ezntTzxWJZxhs34WjuuhRPFF4YYqBwYLKojpkUNyZTBzhcQsv5tDgwEELX5DQyxjYnEZeMN56TAo5",
  "key28": "2S7yVdacH8ny2F9dw6T5FH7d4pLf254uuDkwVYxv1dvAtihinUpWezPqDru2hHwByrTZeTr17tb46nd74JRLzrRS",
  "key29": "5juQUYeXDVpcCXxNWt7BpWAukdbdMauJ6WKDtBeEBtBaLDRrUXfYYq4MXe2UwxqdY6MwcyY6PyppJXSqVUbsUu2b",
  "key30": "5ZcQnudvTL3tPm6bASjYzqaJKJAREXuQ2uxes2xyp1H9Vad5jhGhzoYmqYv3iz8eDHsWddzVw69XqpRPVSqqLmPH",
  "key31": "3sj88fC2ptDfQc3ZP93kUf4X1WkTN9NutxMwWbZm7UaCB7Kx6qUgq43XXDZ7GtiCkU9hQ4gjvat3aUzsshrcKvjF",
  "key32": "mndL14NWM4FrhHVBVScvhMYwsxb3HwbcXq9cHUAvxmPsJ6kZmZSj6tUsqwpm1zjtteDaHGXtLSRFTtL7wDNZzzR"
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
