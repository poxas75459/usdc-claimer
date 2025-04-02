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
    "5huM4mKFSqWRHeYniw7iWcmRAQ4H34XGKugaSsYVyAzw38bwvbEBDJ35MbshGikLvYs9Q4MUkip6EkP7PUZgwm4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUg552LY31bbPUY7cVFTdn7U9i2i3AzPxcJQ8dkz6UX27yTiLaP8Pv82uxiwaqvgsjAru8g6mqGqNZgUzrqJtKY",
  "key1": "2UgNVJhc7dYWHzRhzbhPpaEr3F16TKyvaHqw6p8AZia8pMKuEq9hs7qJy81s4ZVDLS3fC8Y9qwJoriUkrYoq9ZAn",
  "key2": "5N64v6zHEjUW5WLW6VEj5PiX1EeApWXmv5Ts6PWXcu8fYyh2UbkSFiFe8TxS6bRLBvvThMJhdD9GqYxFQwsYfDbW",
  "key3": "xMoD1mi9LRPVsjHREYRWMCTxEG1uBF3srh826jdxkYwWca6wyGYx82fyGJ8Yk2SVRQMLLLYW5zW3Ddspc8QEKfm",
  "key4": "5aFifJfWQQmdJsFqbYRozoocZo6UF2N4ifM9dwJQVLQZQjuVdtxfMh3tBn8F7FFaPqbW4oXrgBaueGyiFzsi3aNN",
  "key5": "rTmkfJvXrwFLeZadVwT36c2SPobVTrpTZtwhueD2ixh1ie6Gu6H8AJtkg1bJzEqZ5FysRz1eHCChWxsuG7Neg6z",
  "key6": "7JzDtWb6D34Py3w7YPhRJUBHrQwXPZqZ2bpBuQHB4wkDckmKyKQdkyZiCKVviJyWJj8ZsVHWyT4Wo21G7zXSaQD",
  "key7": "352JQEZmES4d8PHffwoyq6DM8ySw27dossh8x9BGTcUesySDPmDVAUJtjJW26eQ3HTrtet73Ya11Q1xosTkQN9dr",
  "key8": "5QTH8WBSuH2t1agRH28n2U3unZNdJJuwQLkhHqC55bK8TD3qZbBasJZLT5sTSWcDJHLag7oGq7khDSWG1GjjKJf8",
  "key9": "4RxcetZRMH5yf5uX1Afo5ZpVUvJRT1RqNVPvNuKwak9WGciSErSwAtGafBbB8aDJi1uPNPtazxhrG7gCtvVPRX6y",
  "key10": "k9BwkUTFgynL7xQnakzdUhHpnFwjoKabTxyeMy7SWfDeNvZMeS6X6J3hHnHvxPKTR9NY8w2yZX2jz7RqhHyC5Nx",
  "key11": "65neV8momgYBto4tfBU7pfhbroMF3xNdwrySkGgsxmaF18yH48Di3fVsnu9oDRQvyyH7eLyHDXhdL69HpmEYGAZg",
  "key12": "XJXpnwehMd7FXg3SubtGTbBERs1NTJkMWiVEMhJmZZ2CJSb98dWRz1QwbrHfhHwDtKSVMnhFTZu1JAP6YnM5994",
  "key13": "oXfAW1DuV4cTSqe9xXhZjRrQWrzPTGnmQCDFozkLEUUNqPRvGHATZiW3rgerPGMVqAqJnPSe8HHdz1tQ4msdeqc",
  "key14": "4VWgkmkqkodtgVGYH4Et8SdQ3NPFhMTMsrRGhQBK12dfqFd4oomugSLJKbGi6FbrmQR1hM8we9xiNh4BgP8QDYQE",
  "key15": "3G2KT5Rf3t8rBp8P5F4rTDUyqWGxwdaStJZyKeqEtb31BgDPwcTYZ3H1PmayHrwqhJH3cbuKA8XRv35VS9jpbSgf",
  "key16": "3rnt1waBYSiQAHCZPgbYmH9FAVmJmqXS3wK4MG62vLQqnWbjvq8E4bp7M94ZXAhFLkikX44YH8Tg91ut33BJans1",
  "key17": "ZvRwzr9aqYDptZACdKj9bZoNRG3du9ktyuGJHGnPq1vuzrY2bquWAKHYNtcnkfU976ej2N9akiVLvRG7GNUm6Sv",
  "key18": "46UiBbLvvzvwnzie2CrUdUUez2ipq4E9U71fXpgQBu96z5KzcU7cdrzDSFfZUkc19Cx2KQkbY5zaVfi7qtmWNngr",
  "key19": "BaihmHKsUMdesxhAE1KfffjQbvC9oGkY8hVcmjA9vTXGQNtgNZnTk4anVVUG5HdvYx56w7f7mEkZatKZFPMAge3",
  "key20": "31DT9J19NRfoeNcaytHEqgjYe8mAomVSKvmSMQ9XbHWAt4GT4nhUBkVheNHwRFdyd3cULvVVhW1Chd4jV6jmzb2b",
  "key21": "HgwxvjukYDvb8zHhdXeyaAfRC58Sbc6uZ8j7fY8A76tpK6NNtPU9WVHgvcdwnxkxtJe3EShZLCPYUjMTi8SYyv2",
  "key22": "2H6Eqj7SEQikJwkMztTCHHmCbucQq4NhibxMiv2HBNEjM7XqRuKMSkwwbdFzhR7zvRbDsEQ4AvqgqJvndYF6AnvX",
  "key23": "pdacthkHa6WHtGTpeLuaHnaLQUge2Keb2ezpKHSHVEbeDjreYDATcfFMJmVKVdGuvsmBFymN8vmqdrsbaKu6qsb",
  "key24": "55kbe31kWJqqECLXbFhRrnqxKs5wVpFxCgSeu1gjpTz6qsahak4dpWFA6GPmAo4kJbVdxDF9oVB8cQUW8MPWHsFo",
  "key25": "4rtVABfU1xPAbi2h3kbqirX88rB7z2Poe1JHrthShTojhXLFQsNChjUQU1nsmwpf1iHkgubAVzkQaMZv2nh6vU8n",
  "key26": "4nfRrkk4fkckPMBxxEUQv7CQkfXj3Qnf4NRVEhZ86yeRKcmXpf2d1uR2ijAVASTAThThBoXdkidD9MPxU9hvUqc4",
  "key27": "2rtWjFupvU44c6n4Bi9zkxypJo2wdp9VqW2m9aHQ4TEZEZkFnsqkqkSbMHU6uW171usype8xG69aYXvUUA3Ckvpz",
  "key28": "5wJjPVuh8Qg5BtPe78E2UNr6qRkB1KRqdWG2UjVjMnpJLso3D1NV6H9nFbfQnKR5KU7eSYfq3LwY4FfhbJ8mnd6S",
  "key29": "64jsMgoFFBep9wvmurXbs6pSyuM7os3s2HfsuMSoAAsnXzVvyLpko4vs4HcAjhFMW2fwK2RsNVKw81KRquTHW3aR",
  "key30": "NXrFFw8ebBCW8xehKDEwRixzcyjaLquo98MRGsSQEt32y6LhJXr7kjTeiW2JJb9G7jSrW55KhyMQY5J7cZ9PywV",
  "key31": "2xRdioa6nEr1FaiPYLFv1qdcGnMt2VLu3ZFDPg7TnbQEVWSP4ZeLQDsKZofTbyxBLodGThokPkDYshDCk3sFxVCG"
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
