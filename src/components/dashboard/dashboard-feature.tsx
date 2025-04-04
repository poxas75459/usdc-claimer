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
    "22asUSwe1FF3hhten599WZmheUti4JwxwNt3qWykb4P9m7SJEgQKM6sjFXxFhZihvfPRkD3oyhdYU8wxhtYAr5T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjeR63MdY2WhZeU1CaAn5NHi8b2UwskLC7om4XchYfw2gw3mz9qDCHBturAi9qbN1qzjt3uGeQGQJxc1SeL3K5Z",
  "key1": "2XwtyVVAS4yFdHLQqmoFzRag7zJPveKQ5Y9m1rW9hZrfoUEJ2716DbThW1cRgq1pRz7wk5BD42FwEkMWQjY6xvXh",
  "key2": "ka8SiDjnhDHydq1unfMconTkVQ2XCVNvbnPoYepL4QhTW4dnQPR4gdv9F1JfM45wXPMcMHLZk5U8xfaVJCDfUBk",
  "key3": "4U452xyGV55gxJHuLncQ7mvmHKNyaCNbKTqfDX51j6ncwsnfjw1rVD6giFT4joYHDGhF6cPVVMP57xViosCnS9gL",
  "key4": "5BHaXWtBkE8V76x8iAN7Yog4emJyrtgBBX46JGtEv6eDkf2FYKtb2ABw6UWVwyZJ1uDURqQFRjX6rR6R9MP1WyyN",
  "key5": "mYKguFCDJ4rYBAYLVDgvmzX6aGPMwkZPxjPaMuYTBnTtqWCXZedm3eA2E2kGuKfN48vsYr5W1fkRhxQtEY2yjKr",
  "key6": "2pdwxr3HhUSKQeKfF2uR1SVPRVic7xyWQU2BfJhMGNLiP13JHeXDAoUygUKBzhaP5FrGQFZvXekGzYMqoYby9Z2e",
  "key7": "2kccQT7Ny2Tpw4mYLqCdYiVp6uThEMSuLbKx2jaRrfDUqTFxw5PxRiedogG7nGrEBLWAGRkhUmDvWPAuM8Ch6TZB",
  "key8": "2EoaXHhHD2D9U3UsTLst1fnnJcuicxbhbHwjKiqduhM1x4pBbKSXszD6dsg7FUVA1t6kK7r4XJMHinj9uf6jSuqQ",
  "key9": "FXStwzpDGeNaCk7n53tzfEFsQqzUk8zrftkRDL1mSf1ekCrvMaKcAE4DNjjXzWqvyRfXVc3h8U2ovPs23bA5wpP",
  "key10": "5J3y6VFqiwaQDaFNC8nZ4Yz3xk3SVUbSxzx6puDQtzTfDWWn11c2YNRjLCyDYwjxbf5R89UEPrJ6Sv6rncRFrr7V",
  "key11": "5rww94b8AiKzbSAAYMVss7mBTxXUVQXqwg6JMiEQweCN4X8hcdrPiHEeP85qCHTSVgwh2X9C4zWBch6DFRRExPPU",
  "key12": "5MEwnUKb8p4MA2SczRkxn1kruX1JMy2vh1A8Vqi97w8N4PXa5xG8PcJjPtBW5YwAmktN1SiP29yop5m95p7MqHek",
  "key13": "46yS9NEnaCckqUXYWzHAfFkU2Jw6ifsBH5kwJyEM3SzwTzXE7eU8ri1xKvJAvNnnorALPhRPfoPgHRRMq4awTjaE",
  "key14": "5FZtAM2AW5ZhicHMtxRReXykZJwQsjbCZUY8dD5r5wAVU7GwpnLTsnduwvdHuWzSbbnLPRYb6DSpror4Fd9L5yVk",
  "key15": "2C13Kq43mSrhZBefK5kMLs2VohuFSQpG5hMC4EaduNQHDbmXp4A9EB4t8swG4ADsFgSuA23DQixFXLgCn2tXZ4mB",
  "key16": "E9YtoxKBjK8wLe6rxGXbbyYgq3FUmwJYHXFNZ9vw433xnX42qPG1mZkhTp7g4kEfdAnoQ7rK9C13hofcnhZFFZi",
  "key17": "4dhaN92oNruDNXGc9mmh3uMiEs8eXgobm1exYXicbRMRnmQgT72mrbVJUSXWZCh5bvKDoD7qXBntqPmQA5rA51f1",
  "key18": "CxfSDRSE5m89fEPH6FNzUAN6jyoheqdYo5EwiCKwLxDY18mxGE9SREfsgFxJwH75kX4m1UEfbUwxifyNRrrpkX7",
  "key19": "2pfqCsxZMGJiGnG4e7rgNQQtMUwbMHCTmamLA61q6JZk5FipG6AdQd59nGvgd1rLBBnwjVRwhaV7kADvr4SsQid6",
  "key20": "48oeZydU4Je9wqAhsALV8hFJE7Xwo5hUuVr6gE4fAHemWhL3wyA5m7akpEpvb8MixUKqxecFdzmHxPZosNcL84KD",
  "key21": "2CAdGDNVNA4Ut6eszPwD1h2Xc1m1ZcQLtzqpTNPyRkNJFXiefBq51PnE6sfX6UhxhEHsxFnebRLuc7tmhXEiGYEs",
  "key22": "41Q69k1Xx4taDD2aZTYCALeFjJybEXqAAQc4yU5gA77WwdXpc572sybRChLQPrhad7cFwoavfA5sysC7bDiGmqS1",
  "key23": "2jQ2N3ccTigE1ALumv97qZmhgDm97JcDkRJZ3QWaMERzdr7T3z1aFZsDNNpLJEF6VsXHJbZuEpX3fva3tykEaVuo",
  "key24": "coNFcBWAPKV5MYHJP2jmgc9mpbsGPmxV1ytwSqfX5z9h6Gu1fPAVx2hFedigFJMxGjqi7YYWwGVBEnhZntcNFvj"
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
