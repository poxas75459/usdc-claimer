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
    "18yXxWQK3V2MHZEZKzaZBctc3LNqx4MUvwTTZfgw837gz7EhkpJtRphxvY7HMqJvsgipyYEAGWRigbczG4H1713"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXpHXLH9x9NvV5YrZGcvUzqEXUCqC9UEnXKXjAongziWC79e8QKexKdpSXnkbPvdsma5HyihmpTk3rj2qGJz8az",
  "key1": "h4qeHQ7WoWLBMkRoSn9feWzLfJG2fitKDQx6PH8qQMcQnVqEgmRJScVp6iwxUB5cp6irTAmyiXGhzYiNoNTaxBd",
  "key2": "4ZBRx6wniEwZFTfUkYzmiPsvN4rCwfYqF66MZ5ty9r3RY9STScyQjRBvhwX1qEANvVtBqZzD2tp2ZM9QJ9Lq3Rp1",
  "key3": "3AyAEMixyMt3L3UACZ7bo2Gs67JGdi7H1opnKcNbvTEWaYJQc1YrRfWd22EreBmeb3bfaAcmy7MDhS26hGvHGn69",
  "key4": "5oXEpsdfpubdb2eMvJPQgB5wr34woFTeGSHA5FxtxynFWYsB3WjKi2v6fW8pzJS77S3FBebBWe3E5D8Kzr728nKz",
  "key5": "3vtmqG35iLBZC8wNUMnkzR77cHi1SJbPWJur47rPLXni1VCWLrzikpj8DHCpbGw3sgd41f3Td3rWSmaDBqMkXHr8",
  "key6": "4XJqXYVrKvtMhEFXZoYh8LbfvV7UYSNfHdawYKcqKFt3FGtTjU7Dd9Rzo3PWdkpqCD6YRXs9R4VwDd2ge5mTkqnL",
  "key7": "2FVgZc1D9Pr7N3Thu4tguse8EkRLighuAWByWfPf63EiP1gNhAJsVRt1PG8GL15MvEBR2EDjHSHxiBtGUBFNnmSs",
  "key8": "xj2ViD6nyvV4Ak7U7kb2LT2TH9qFogPc2JwoU5eY3dNsTMhiTvqfeSCoyZeXiJani12F64Cqk6GWxqCY6FFhjqM",
  "key9": "25rnSfTgUfXw1R11smLHnYd1LZntSnh5qTNvZoKxH2TfvsNzoCPDtVATuDfBVdTcaMqPMn1j64bipxpWFEnwnzFx",
  "key10": "KeAY5rbnNEcRvPKN5hCbfYt7aQSJc3Y7j1n3otiWNp8uoXSyRTspghQjAY4x7qkAa2E2TwnzY2XdDUoWH6cmCg6",
  "key11": "3p4oV7jqHf7hNWNjT6EpC3hDRTppv89i8ZYFhVJLKpKieZn8wwNQdXn3tNvHwQW6LVyqs2Z7pVSuHT1rR2HoVZuK",
  "key12": "4irF9ZFypjGA316VYDuBiiVbPhXLz1d6HJmAfMFGsGxKr2rxco5rpkfbyS7eitkKm8aAhVsRptkpZjJLjwBHxddP",
  "key13": "ViQ4bMMenqoxyqo84vCoJgJnonUUQyc4y215ymXzju6EC4hcjLtb4fXkQt758yppfCaHCP8qiDbWtxHbjstfNwn",
  "key14": "3dB2g2V1MN2CPbpgVQZgte5DyyqvM9TLLsqxk4DifmNyL4fRw8KTTSKwjdTi1bcJ2iSF83JYhLoKmnKS6zsaa4Pa",
  "key15": "QNGntP2sGyjVKNqWT6GLSGhUpJMuLkYkdeNaGaCyNjB7cRUAz4K5352Xgu8xdQoNU8JK8c4nSZHxbvAUhX392qt",
  "key16": "49kJHciXfQPJv6UgLXTixUuYVeAiNofmPjgu5CgJQMZgySip3AT89jgfKPPGobnR9cc4mKnSAjtGEmLJpuwn4zXK",
  "key17": "3SZvYCzzY81vk5c7FQMsFjxZDuv8EcozpyR8sXE7uBZ4ZeGV9jMGhmnAWLi5N5sePazdm4LHndVbHtq76RqW7avT",
  "key18": "2qiBCZDFV2aAcX65Qdix71LfMi9cgAiGwRS5z72zEtsbTmVq9L77oQ8xDg7zPUepq4KrHsxwH78oczAxZUNrk1PM",
  "key19": "3ZLKzH4HHrjR1xzkbTQTURTRhumg5vjtJYYcyhtgVr5KpExwnBV2JLpAGsVX73P8drQRK4aZRdgNrpyrRjFLgTRG",
  "key20": "5DPfUtHxktrP7kL4kLTiShJCEa3xMfsJ3zYZGbWSHxoGE5rkxyVovTVxWVf8oC1tQKB1r5n8k84u5XBZVZqSP1yM",
  "key21": "1xQDZ9TRfa3Xs8vsTQuyqxvaACpcQYu5e7HVuf9x51DibbzHFFhEUwtLxmd9Hik5XZ7E2CjXTrHBdfwDwWhwvxS",
  "key22": "5kRdeaqUriBY6fALxXQxNKdzChsogoYJ2XmSsYgU9ZwY9EWAkrSRKKVoHQesbf8uvn7dHvg7JuQ829buyGVhz2TM",
  "key23": "23uDiMWXTjFvQRWb7t8cuzSruwHwaJ44U1vi7X6KxJixhDhmdQBCU45r7EVfWytz2XCJnT9GZwzP7m8g4yquYHpn",
  "key24": "HD1rq6pgtgct1kJLDF8Kv5Qe1jhW6jnL7iERUifHhAtSWocwHbhDogtoduGbk5pJY8W9NhUrgV9N55Y2ErziCgn",
  "key25": "3gpLvxT6ULvtMovjTjstVqNLZfLiKcf7MXK7ug6hCDkTE34iorNk1ipC9To4kYdRUAbFvUJL2mshYUMreLZYyL9i",
  "key26": "2C39yDEZgiaaapUeskQYS4oHcdWLta8Hx4ZFV6SfgeJZcFNjMbSCmSga1Gnsk18cGELKcg3MQoWDBEYcFG8t4RAT",
  "key27": "2XRnEWBgsy323QXtJaUGHf1R89WUuTQBiibG6cBpEDe1729L91EuQVW3LyzEBqugk3AK33zWjD2j3p3oroK5igvB",
  "key28": "3yjQ2kvVU6L1sbSXfTG4ekgt3NGgwRQP66YL1LK5tofTabjU5WEnHu5xLP5CQxDEcMyyU6ZkR2BJabKrhDVXd5ak",
  "key29": "n6X69WKjUws3wXELQHnZXxrx4ZBt9VLxFvnR1PzoczJo2RFAi6zC1JNUYBviwxmdYqmuAwLjw1xhH7Wcwwm8W76",
  "key30": "4HWgimo1ipXTe7GFyL1EpdDRLYa9FXURyZUHhvpEUfZsEPxncSbuszxyNDpJZtnGUCtvtjnMVMazvKhSAWxZQ17R",
  "key31": "3Ronvw3Mjy1UKWjW8sQ92TjPJ5f9xYy7b5ZQyFpXRoYiZU6977bScQM3eS94csZcc47b9b3S7eF94isGcLUXH2fc",
  "key32": "5SmsirV9v1A17YFrqViEK9ccc3KiCxeaA7GnNgkSApUcANe7saXjDvMmS7ofo7GahyWKZNx6Adz8P4sX7xMn7cmN",
  "key33": "4xSvYrQimzKUspvvHV1u6GRNMtYT8hvQfYRju9xmBiyL2G2mYb6Nt8qJL6wcDhqJpi6SxH3s1KqeDAYhLBFeHPLx",
  "key34": "5FcNLoFpaKf6HGrDdhCzW6QkcNFTwMoqZBhtZKpD8xHhNctctCkcBmBvjZCfggpcKcbtSUuFHyBibnxMTp4FBy5",
  "key35": "4QJyAHpksXnggajY9NFCQYgwqFNFMyC2Jkkci8x9RpXtCQ4kHp2rNLXHapU85yf3JYw86pXuyY4u9XYLdfxXJV3c",
  "key36": "2jrf5q5o8ibfSDH3c4h4LFq53yUpQA8pTEo12a5UfBoQgCBcP1vEQfNc1T6M7as1zvenpcLWaQmDxeBTsQH7HYRi",
  "key37": "2LTz66LzEyetcV1kQm9Jc95FDsgzkfLtmAUtqQiGuhLb8JqhcZq2gaPAeoCnMWP8d1fujwqi4Ffad2W3PKXbKpfh",
  "key38": "3vmP1HAe39eNYCgzwK4iMmic6bE3mwJe4K8yMMwwKStrn35d5PGkEwKfqgqPan5V9TWPwZbVtwucWM4ZxdamzMGf",
  "key39": "39DQzDPrrBTa4Q3T7J3rFbVmbNMYP4nuZVvDyMJULbxvz4vidraL2Ee1avKqPyxC2U5mV2NTNEFxZDXMKhjA4i42",
  "key40": "2xEcM3NxRQPfgKb9ZrZ6BZxexWs5XxwqddbjM9jrG2XFqtRKapFBY3qsSpfaaicbNHxKvZKKjfchm3JJ2dah2oTR",
  "key41": "2FrY3pXsNyLu6CrW578pizwDQ4FhhdwBCBNUiMBsfHrY4o8DVnAGzS3HPtMg1XjhrpCreJEudwMpFBV3bboggfaF",
  "key42": "4HwstBqGe7Fqkejz1FL5nQNUJDfsgZtyx64TMcmZLPxfJgKbqig6pfDXUPoAJvoyEnHv7RQkQoWfUF357qrYQ2Fo",
  "key43": "2NaZCuMmydUjpa6t4aZXb3FKT8HVc3LabbSA4MPPoJifpMHNx5bWaJTCSV2or4mAGsSJC9zgHL7Q1efzieCosxU7",
  "key44": "4qCNcM5GTZFpr9vUBNsuLveeFt78D4MxH8XZzMm2znpTuyp8fXMMsAdiqhgh2V4N7tkDYH97fuShXgpRWn4CQQ6Q",
  "key45": "4DxdkSRoRPGgrsddVUKhA9UNQudxDBXLX3qqDxpzkAasU8pBBqetjaxJkspXv2Td4FCDNmLe58v4aMeuwemoQdng"
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
