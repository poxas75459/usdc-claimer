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
    "gdmaSMQXvmTdqUc4wpRSWLzVWcQyr4bSKNw4QsggxenvSgTkRqMJugJuXvCzyDNrLX1PGn3wNHCa4uYX5JCwgtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGkWqE3HB7Xfb1thqvixP6tcB2d2cWRDmNDcE95jjsaFVbAxoq4NPaj4zBQaCXfA9xvgXV89R2YeBQKHoixED2U",
  "key1": "5K2Rmm77BBP6wqZgT8r2U1tT8DQkvmEbSMUg22JR8LuVJvDb4DbC1antbBCNTyfd6d74UQ5Pgg3qx8bnAs5PKgLX",
  "key2": "54YzCBw4YvV9795qTZ2tbSwg9mGTTHzQjZEPYuXk3iN48N9rkWb9YZoEy3RgBifwtu1RkhYyDFAtdvYkBwQzYih3",
  "key3": "4QUDpdBYSFhjo2xyCQNcSvzL2LvGQcdPWB2YHDsANtqrANFRvSBEVLY67zgf3H96QeZReJFRnaLSpKpPmLpgRSst",
  "key4": "34y8Ubk2WSQfMHp9NK77HiSeyAyZpfTC4yyGVcWokCkANgjyBVoLWftssEkfbyDpsbkSXuXNFfaDniFjL1pxTxkF",
  "key5": "fmGmbqnRWQomV8VcR7gFZaBrmWTHAEEkNDno7CZoZAXp4Arx6nA2vh1pRfDP8pXNfBpJE8brZcBXocFbqFiFrSa",
  "key6": "2hbnxA81XaXLTQaFDfnAsRdZ7dLr5HtdyDKFYVpCSnD1U9TdQ9meFccDPU1kZXEQ5iqtmFLZi4Lg7XxFbn6gKh9e",
  "key7": "2tY23L4TrN7TWcSvmvN2qzRdpY9DBTpvjvYbbCbaMuF3uBSnCDBpNazUWGoGFM3zKvYSKbUnPrQJe5obyoKCYLin",
  "key8": "4yAiVat2Qtp2dELmoERTXYxEBVNGtyoDBYQogx5zrx2ays1V32xmGThVr25Kzwi25VNNeuEZkyTugqTVS5P2ZMYD",
  "key9": "3dRHigmegPEGqfXqsbkde5hwmVgBfRAJhJA2xHSYFyLPq9kiE8pq5VxMhd7oZPrYcSQ3aQy2Yv3UEe6vBwvHU3KP",
  "key10": "V1yhYWsfjkDmEUeYzmpaFshTT4i7JbhaEimDJvvge9HvMqitewQghjU8rqW384Sp3cc5v4pgCvXtSkEYqH1arjp",
  "key11": "3WoUGjvgiifgNwvGT7ah3xZA3oupMUv1ESRQCAeBg9eB7xLEmR9agE54V5tUaLqXonijkL1fihr5tsw2rydJRpu4",
  "key12": "59f5TruioFqjicMbbFbd74PfPMVrGbdjQ5he2RT2SiktgeAKU2si8fdBsZtwpTPxSW65n46Q2vuTpeMB9SHC6QhU",
  "key13": "5WFW9bzNnrL52izdV8VZazTyaGLSKF8e6yi1guBYcUBf9YaDR1G3MqkNn5sxWfBxB1D1uF9yzVM3hut2yWMfdPMa",
  "key14": "3B481GVDvSgJLVxgL8G3v3Arzp4Ckeeu9BMP78j3F7ksEfsKV8bFsBCokB3pRrkYEEqfko7uRaPU8bZJJQL5odsB",
  "key15": "36NSs72hCXE6AfUv8UTiNx1rGNxnsJ7xJtSro56LcgDm2G9Q2hDDgr2e9y4dUjvbEU3axpU5R2zw2tEWrxA3rjD3",
  "key16": "5EvNkQ4nbjN2npnXxdQ3H2pMBUpnqZRJ6DRuYAYo6vyYAHUNvTMz9WYezdHSbs7yuKCkBTqBuECCkF6uwmUwJNnV",
  "key17": "6QCa5oy3spmtvGe4j6gZdKheUGHrAn24cW52QdZZZLtMMnRqmTrn1WUgGMMSMp5A6FKhZ7dhSLhjQBac2SqhFvB",
  "key18": "2QcDXyDSxcCnphErtQZ844crxnYBoLgjwWUA9Rr8UFFzFbiQZTfSr9hwkuZebH4v8xXwB9e1t4uWX61VvNJFKAdf",
  "key19": "KkaLjYatWurwSrtMc9GUVzhpDHEJeCSvbVeEqeRo25y6nPytEoeJpeirEzbd4viVgaFXyjxvj77LLDJUa1gBP1w",
  "key20": "FNLg2UPue7eR28DAJWNJsxpgUyJ37QazTprUq4U7B2fqvmsnN12cAEHXoAQdQuztyQwsCnYXwsKmJaJFTMMufJA",
  "key21": "GMzTvhZzK1LKtA71w1H5xno5S1aerFsa6oe8jAhaBDFNTT9qyeDWhHReiq6M5ZMrSJUrLfhhFYE5GhXEhwEsPyH",
  "key22": "2Sd2bF7LtnhpMdHrfxyqabA9R4esy6jriEyDF7PTM3nBYr8XWPtycKH5xFXyiSedyJjqd7K9J7AKDRee7h9GWmia",
  "key23": "3UVb65UDLRZ5wTn6bA27wGpisnR7XQMaz92R2Aggo7A8qMr8TPV4c4iFvYqLcz8nJMozX9H7nz1j8piiR3MyMMcT",
  "key24": "3w2WzCQmnUxnELFN8VvoYx4JDF9jutdbERoCDMLHaSgMK8uAA1ei59sB4RyJa8C7hgeft3S4vY7Nw1BN4HTZHidK",
  "key25": "244EsAKqEXFb9YvPYG3g5NhvSN35xHcLBz84ZWxDLgtfBEDmjXU8AhHMD7zxqSD6aUm1VDyj5dcaqHNrui7KH7aq",
  "key26": "5WaUXU419DwvbhapLHAMk7Hg263UqNcEFRKcrDQjHCU6JQ2aUguYcM7WbaQLqec7C4PpeKvXLedWAnpBFNnMHkzx"
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
