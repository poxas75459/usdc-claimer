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
    "35AXhGPVHKYvFfe7vTEkguDwGu1zg47MCq1uswczctZyo5YdUEer3fZm3wegCNGnLE1Wi3821W7vP1Bx386Dfu4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28z4R8ZwwY4u5gXiGXzLpd2s6uNhxjffXm8ivj1ewhVxwvBBDVfQHiJGY1xmshqXatLc5Zefj2HymkTpEKEx3PAK",
  "key1": "2fMqheMR44VMEDTHF2ZzMzsGWCSh8TQtGaoEq9mFs4sTUaAuJ8JL1ZzHWpAr3GcwLn6ZqXhBAppSVsExBXzwaUKK",
  "key2": "VbeGsHTEMUYLBKnnqQdnEUb7FAhTpaJ3Gx4r7M2YUhCgrcp5Qpt2YiN4K7ivQohUU35uJT6gaiG2a4BJNSHEigW",
  "key3": "258uWDj62y37peKp8kMHLVHHYjymNdDStSvqbp6chBchgcrsDGNBRzoJLvCKudGywEe9CgpEkSYaTz3YyymEk5pz",
  "key4": "CPwaS9tFAaXJWnfwSGHjy6ezgqL6oL7Pp4YpmHC2XTxQ6YnjAMLdHev7w6pr2vvmgrcbZGMQnixuV3GKySd9WMt",
  "key5": "2d2a9m7Cdo7RZqZJiWZz4NJyAS6WvUocDqEk2gGejckQ16MiZpHyL16dijFmMwkYuWuZgnkH7BpGdNgxcqhPKSyd",
  "key6": "2irB6XfJgB671KB8h1ZWQ7WadZtS3R8Q16E33CEZVZ1YTV4TotHeMbLeuqMcE6LcLav4tTAVWjuhMKBS7YcBQrLS",
  "key7": "34Z4JUtfvsDJhEPAkcZeDvYwn47jd25zk2LUN5F4VjqUMGXVaBCvLbvWw71cuwabnNpcFzAmRPhNurHtQBpQoPyF",
  "key8": "2qAJtDQHwbmGftRgGwUXb7oPeCFSkskdQjVZFvpTsUUR9EzkhEWJTfFm8DsF4toVbDdqPPt1aQyoFjWEA1DHVqih",
  "key9": "5RosSKu9jG4t2CVLoJ92KqdnyBUH9zckML1fUabJa6ZcW7yTAsgGKaQVoSYUq7zagBqEMi4vWBezZq2KCQSWkGUk",
  "key10": "2ECV9xEeFH2BTyCz1EAxQRLTNJGgfedKm5MAZ4VgUZh1qYfXQvmPCj8aDt6ADL69PbNUw2wvd1brwZjojZ3ErYkv",
  "key11": "61aiZGfJ7kfYX5YLzCZWx4D7CFDk32tudRCLXxPS3PW2fk6Rxb57jRfHVKSbmVRKvFHLGmwCsy9D4DMfQxdhDtUb",
  "key12": "52y5X6AmxACaav4u8d1VGUBtYZiR5hKPQnP8SiD2R3QUE8L4kfLU2DDmRGdTGszed2XXPwE9eqhvwYazuZSmtvbA",
  "key13": "38Quiwx5vappnVqgf4KLz3Kw1vx1ST2yQhV74qmy35jxhGXQFQZxVKxtis4ZEjQv42YnkYZiHk7tZAXfDURLH5oD",
  "key14": "2v5MgwXr1oHQknTUEbMw3jGUapWvBLpgErZktpHWqyzzLQAhhuNTWdduzPA3aA6z5jY8oog3P6dcg2NPm4V7BbBR",
  "key15": "4euxQms3bw2hN7uLdMFX8Mf9JiDzHLRTi1tHRifS2uGQLkrGwufsZzatP1eLvCtBTavcnHZKp2n6MRdidBA118Yf",
  "key16": "4AFXht7n3uU7zZgy7FLKN4DZDHBxdUa1HWAKsVuqZu8EbWWcdwrNuoY1qRk8jbtm2JESSWyhfGpKu8HXurdiPxn5",
  "key17": "5x4AyzQtQqEjX4PjEJioLpCHfNxxtNYqwe31BmMQonRwDpDhgZLHB17VS67LozRC3VJzMu6deW8dqBDi2CXVJJTA",
  "key18": "2UJmdKk4C9hKYuVHe1sGCEFKyZn2no9vNP9g8YXqnAEGS5c4YBuFcBJ3B5467Wjw86MVKLfjQQuE5NadLoPU3ckx",
  "key19": "3mPrLCVibC5QWi2QdCYrJwYkvZze5Qxu19Xdtg1BNtGTFvbqKbYo8dTxMzTW7adRYY1tZ4h9pbGKcLf3GyS1vX1W",
  "key20": "2UzTf84fXnU6aGPMphSb6EHsTTKqwJdsVoamHcuE4od9eKVic2mcyQCqVeGAeW8P6scb84BAMcbXyN53Q7cUwEzy",
  "key21": "4663QU8B61vQWPraprNtLLLqvc8WpMrHYP9Kfbn3cNEhG6YW1sG6gL5rZwVxFLNw2KBZbRBbBA15yRK9YBbZwCuN",
  "key22": "4bZUH19e14kpTT3jg7YH66hXogMMyNQa6Bvbpzr1bPLQdFqA33TRvRJAr12SKSdZe9mu2dpjsCqd29toQpiXKTit",
  "key23": "54mfFeqA82J6GU756y3RzgaCTrFX7h1uc9QEe9kfdVFgjZ64ouX3v3VcVNvatshXAH31aUz4ydkTmiJu5ajYthiG",
  "key24": "5gQwc7MXmgSkhanuSgwRPNYjpJ5EJiFHkA5v7s8rcp31jg9pYLWEbi1R3VwFgKVbnPy1fVLDNGrZzxjwmgtWToMZ",
  "key25": "1WW8DkVrJd6mkSorjX1G6RrVvg4jzxCTGzBmW8LF2UE6XHMvtDbKgvKwJuPZEYptv4oBa4JjP2iuMrTPf5ivEQc",
  "key26": "3KzE3AeNE54n3g6RxcZQzGvxDNYvb6VNyWbjmJxw7zZ3SCMYJ61efCaZTk4utaQpVxPWb4EmvcEr3AmCf2NsvHkY",
  "key27": "fPJyEX625MgmtPNc5sYoitShsLXdmfMSskmNpgbbr3UFNNgnaEkPmZUiRXYxbFkbNkUcCFrbm4Qqyko5DMizuAJ",
  "key28": "4XxdF5f9eRwQMtqf87dP21VzJmJxzwxUQSxURPcWsHSHRSVGGd8f7LcpD5CuK2egLu7LrUb2wWs4Wy35rQ3VTuos"
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
