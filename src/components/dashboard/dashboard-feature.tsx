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
    "2JbyXbXy6ZN1RbSt1J9k2wVgJR9dhyeiXPk9nUwzE6nVvjxGwdVisVhU19b4rb6nd8iS5a2dDrtGik838VjFSL8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLzNtekxyTyWNbRdzFAnNe432vwKrV26HqnASxECVeGqdC2h9qWhy1X9QTmFKKriuMscf7Cxu42FLj2Z1HaBdEj",
  "key1": "4Rum1xKhaRKWXbiVPhLGmud8Pk8gGP7H4RVEzo9JYGchdnfk1kfnnmHrGGP62u4W6zE2her8RcufrUoaR4nncxxQ",
  "key2": "5VcZSsx9sXUQrxpNtnp7vZuf9SEd9qGYpgHnTkAbVTyTLtsq2hCSdaZQAtFHHW66SQ461RuBj99bmBr9FGNYXS4m",
  "key3": "4WkHDHPkK975J4NRqM151PSvak2GrAmfabxXdvDtEKYLkAvGWtDtP63WMgxrrnz3dN17TdhsnxjEorg9fSfVFQNW",
  "key4": "4tyV9wUgvq7SCM4n7u1CeJnYm3gXkBF7HGYGrQc6ua5SB31qtK5G8K8zkYJfqcS68povN9QK4BhWb3L7noodWaED",
  "key5": "2UcibGGEPTb2R52HZEpWctaSw32yWVJAvPBZKhGkePwXCBTojPbw3w2LET3iDCUjM4VPNrtS8ibUbUKPf9qW4oKt",
  "key6": "4fgQFLm8yHojEN7mmv68veNBSvVGpDUUMwomV2uZCY7opmXNT3iQFqazcFTnRUxRahPQwu68bnEwoUEKjZgj6bb5",
  "key7": "kiiLFiQYPLcDpgBeCBoWNbmPESiiszasA99hsnp3q562ywhRiJ88Xso47PTTuYg22XKWC1RU8AMovREMCEYf6um",
  "key8": "2zbZik6Z7XqNNTbTpEHryUgiuoQTdgYKvPCap6hbRBiafWkBeh4ABspZ5HycHDaTtbpLne9mdrGQTp4LczTvkKZE",
  "key9": "4nsesm7hGEiBXtfEFxu2dKbuuEdbwfQqpChoPkuodEB94vDANYWqgbwJpZLaqwxb935AsXx68UtU4pBVU2SJeLnY",
  "key10": "48rFrUEnMUp9rx9Y8h5dZxTLEtqe3etxDv96WsE59U5QNdJgvykod1L1Gj8AJsqFvErPwLSnLPsd7zWUqauH8tUM",
  "key11": "5Yc76SxrpeTB4st3Sdgafu9VFVgqbNWeENmDAvPd9p8GkY39fLAryq8dAb7V3G1Lmguwa24s4CZHpD8rtVg9SfMo",
  "key12": "3B6iL7hymyZZRqbfLLUecVuNHwKDEFnUETY1TkhEADFhAmEujWKpPktWQLd9tBUDdzyBsEFbAx3DPWCq78TdsWtB",
  "key13": "ffzrGZpRmEo36yXbjcnZNjg69hG1z4G9VoxUcCSEyNy26nBWHXMZe1R4F28U7y5RubEmZYNvJE4yM89AoYXrsf7",
  "key14": "3n3o9J2fu7hygEFCQP4qNoSKNJ1MoD6BQCsUypjPfia9Eui3aGDHGWchRDx13PcY6Vez2mWSyvZ88FK5f7P7y1XQ",
  "key15": "5VUeE3nVegAWxoZAcocjXDQaftAJU9kWyCvKk2RMEDc8UBgsvciGd8wER47H44dHyZ9V8fjGjeps16guc1q8ydoJ",
  "key16": "261AVv2P1ym5tUDvXMyRi5tWFJevZKXTMwd6DE9scb9mkpg1v2TyTfE3faKvJ1nZHG5ktWPHfDxieS5bkKqTw3up",
  "key17": "2pwsnvzUXdiTVaAreyfJtD9NA5ruMajampJWo9tdqAcAqU9SvWJ9Ff1m9YAcf6WPB13jFGXGtuTJEv7KJAkcQieV",
  "key18": "5daqzbpdynhwFZ4LPN6SA9BYYENFmziD5jcfQtSpuWiRyLuxYmXUJGPBfMPm3GaCXUGNQFKokFChcFg5z61ufWrX",
  "key19": "2dVDHq2S4z39Wdxn8FCamH8YYoaRhXsbSxUUqLy2xRUgRvmNEZHMikJLm6TG6S2zkxwFp47f6jH1Jt9xQw7L3XXc",
  "key20": "5kvDkw7ZAxW5pnujP581kaKkqnaj2KGxozw1iAzC7r7WJVt5wLSXNXtmuiQecviSeAqWyYt5fo8hdNHU3JacRbnJ",
  "key21": "27uDXjNHY9t6xMjk1wGs1Cdv2z266ga8Kp6msu3GndEUVscGuMGK444UUwtKxh2jGSZHVqP185YZZiSrfP5qJEi8",
  "key22": "214rmFAUfcVHJBbMqiEn7BjMAgWE3pvQxHVTxcQ8MwqDxWSSWW5j4hayEZWN8Tq1fWtWvZtBtKYPq5tYCFFg7AaL",
  "key23": "5beKe6H9fmnPhoj89FNVsch6K8PoutgZ9VegTFyZJnCxZaUDT1C7T59DVhGprAiQ67XyoYqJLQvFKyH2B14csMPn",
  "key24": "dzY4Zp7wNQ9SzFiB5g9L4fLoy1QSN7FpSjFiAWHGKY2tkZHKKwW21thfXD9P8Y9ZFyqWBf9W8x3kNHp9yUL5JVP",
  "key25": "4HRDfk3Hg4cvY7RyPJiAtaev3cR3SfpLavwSaDfJULoETgUQqw3RAk7ki4pAWevY9pdC6tXxGfhWjKxBhrBXtMCe",
  "key26": "5Wvjs3TUpDCbVj2kvx38Pmqj1QDUq3GUtpUVid7NB231Y7v3KWuTDXZktZe6mtwJbugdCTDoCwNMpaMZxca2B2za",
  "key27": "4Q7rsZau1jcykMixjRnfD9ywVSt5DwYrnaVMoSiV9efebHKFifF1ijPUZxyJ5hJ4ZooA71HtodZVuw5x8mkFQ6oF",
  "key28": "jEtqT9WoxFVBmHmAnJWZcrUn4TUYtiqW1C6T5k3u4SNQoSGnN86p2BH5oUiVW97aE7rbv22f7KZRwDof8g73aNy",
  "key29": "2yBC7FBnFaT65tk8abWNjhCJJDXaFu9x4E8WWqK95WjAvWyPqztpXbs1hPwi2cgG195isqGaUAFswhjhykpSXeXE",
  "key30": "4nyg4dNZxzeardn8ckCxdCDskNd2bsLoTqky5cQjqFWUVXDStGF9JPTvryiWyXdWXZcgXfX11pFMC2eCrznuzoXx",
  "key31": "FQApmTrNkGgsXv4p65nuReDGkxjvDbe258EPMuXRZnJs9QyTQdkxcRd9P8E3rAh6AwTAftYFWj5bse6tGapKaF9",
  "key32": "2AiKuMPv2XCfp6muTVGgBGaVX4vfHos9L7xDoAXxz1E5pNUV3mqSCLeBFMQMpuQQdV7fE2oYKBPKC6KvQE4odhhE"
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
