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
    "54dtBK2AHUq5hAd1DgLd6YJN3FreFw24c6xaQ5qMAeqfE9rbzcq1CR7xzjyFHFAMpKZEGtjBzjJKQRo2mKH7h4td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jwh93ygMPxhK3nJGS3jk41gZVEuENJ1CHFKm8U7pZseQHWr1QD3C2nJff56ZzCrjpueUZsydYJfYpRcbpa2p6ef",
  "key1": "5LdwmhwBwbRYB1MLqCRN6A3xpxYrzaFee7nVEmhwfpbykFZPxPG3KDaoosarEcrM4qjW53nxCCcHjjcVEadmqdSZ",
  "key2": "8kR2g4RUizbYUHYqaKp2NaUUz1trwLtZACMCvfHsVnWpZM9qrr41VkANtLRGrW3qzbTjCN49ioDgB1CZzhkEM6F",
  "key3": "2uFP3ELnkreF42MpAnzaZgGmdTNbvg73vBQzoKJztFN2qFVy9LWCThVcxwRREnVZFmiu8XuUQ4QMXqH592F8qWX5",
  "key4": "fHcdZmfS1ARNigwuMFPowKXS6jUGRbgxfk7NoeMhNKYJDqUEXwcfsDpM5JS1VmKa1TBuPnnmDemVVz9vsyqrazX",
  "key5": "4dAocBETmvTiEj5gZS7zYTMfKPkAwPm6LnN2YZ9g2NebfeLhYFXA2NhURGKPRTCXTeu1vBVnk3FueqPCRJtt2dH3",
  "key6": "WxDwWYWX3mvvKbfC22NtSf3u7eyjMzj7HPzf5dsC6qXwu9nMosxQmgN2RuZDyoeYRVsGCUNSTmxB5zvhjxD7bKX",
  "key7": "4oMEvU9yaJXutTGccJLJpRvqVrmsnEFPSkCtdBt4dYMqkHn5mWHNHgAWhMEMzWBmHJTc3oxPhbbUyGJwJpErZ9Ui",
  "key8": "44nF9iVtzEC9JtLtcnAVKHp48HFbcird7aoWnneq7FNeK2oMMkdYvPrXjDA6QqwkEDjfhBQUDUboCywx3nzDd1dG",
  "key9": "3vw1M69fQCL9snzPD8k2Sd8R7Hq6NUw9s9udYPzxi6BycfsDt63JBZppCjnWo4Ah6wweLwwaaS1t5jgDY1bf8zfW",
  "key10": "sSzoUzVkguRsWttSRa3d2hn2R5t6WLpWgVXRkzB1brsAo5s65Fram496DLeDhic6FxFQ8ks11HEUGM3oEqeXGjx",
  "key11": "5ghQdNatzuYpuit3oU26MZ6taPXSFhtc7jDcotG5m8fswEG4LkJrD3vGFrLqKBwr8o1xK8s8pS7F7kxJdunpsMzD",
  "key12": "211QqxSkttfAJ4tpExz8rrVMXjejANTBEUsyN9rxEKT396w599PjGbx9o6U4Dnk7B8MqxUckkgYif6mxX6UgCdTB",
  "key13": "5jC12guDSz1RVrpa8LeBcW7CCEQrCwbKWHWmKTcfA1vDaBaB7Wjf6Ln81tW61MoPHMZsMNeS1Wyqabf3z1n2Fno7",
  "key14": "2dS4ZUkxPXtV9YhSPTRkyxrd6W3persNH1ZVLW3TfW5wi3PUiL7PrULJnJsCtMVjGnurHN9dSXjfPquy6bhMjQRQ",
  "key15": "Rcg9e9d67qDP9FQokZwyZSgvAgNAHBHXW1JrfhgKDAfMCpK2Mu6CRmMo7UXB1tyucRVLhqhomxPRaGfhGwhGise",
  "key16": "53XiQwE8GFPmqfNpsndnyU149VQrCCobtzHtmN6Uba9b9u4mm53K1qwdeyzpXmA7NBS74ZyyEm9vkFbr13wxWPZQ",
  "key17": "49yH7DtF4NNefEKHVF7tBah5gELXomMszhKnRtbcoTjtQjP2xnet9D7CyuizNf6EP7HET1wiiy4QugyghLxjjtAz",
  "key18": "23ARsoD87zRLewTTpVajxvuSPoh5pk36P2qb3LeuanaPajGKvYyL8Lr512b3ebNkcozHgnqrnBYECvpybGytiJWi",
  "key19": "3BB1aFEXCPnV5uVgoCezgnMHagJ4SaFCJLp71nJJb3kANA1vmoQ67PsCGSBsH7oifyxjNNfGxjSJYLuR29jPok95",
  "key20": "4QS6xVzMdKBVRKhVYbjYJ6rEBrXFYzdVuTxh4xEk1aWspWX7tuQWT6xY5G7ciJwB6g8X3bY7hNpqD6B6R2SjsRCs",
  "key21": "3729y39UrS48tt5z1KhThf2stSQUx1ZeHtRYNW7NpC4kZ9CLicLJMLVjHENjgDSaYAWDs2f7ikWYvMyjkmnEFCMg",
  "key22": "1RKirFEcGFUiej6SQ7Ue1mDAH2J9y2zZmwE3zA8QCmwnak8YXjrTf4YLqa87DDv3EAbtn8YBs4UFJcRBDty9wHr",
  "key23": "2aZxbNT1EQZXpYDw6JUHPo3MTskvTgQGGJbvqVSjc618dcQSN5VhAkuiwanaBmbDVgNC3SHEitUSXL9Q6rdiRo9p",
  "key24": "3vMZ49j31MjvVGAky5yD7gcf1b8EG1UU6LnEcUnVgQhikmdFgGB3Yvn95BbwpagUDW2GB5LPmREi3UtTnhfNzVyR",
  "key25": "2tkwX8ixFMmKvxZGZ9cF5VyPDBJLH3xZsHesHvxxXEhDmf4VW81fw2N3G3SJfoz35ugBcMsSW9bQQPcAvPs7PDK7",
  "key26": "3fDvDcUDR6DySa8jA3s9sMvVoFucHJHU1EAD6esk1mcaiSizGbe4frqF93tEJhBrmFkiNkyCtjRJXcHmf6A4ArjL",
  "key27": "AkYFxXdNLex9qFNUavxZxDAdgacSyVNpLe83RTD4oCHBkQb6gMJL1dvziR8Uc6i7KcoAafFoxTxGoCJaTzNFbye",
  "key28": "5Hes3JwoFQR6MZYM6Ng5cnZJ9L7vg8TARk7fo62BoqtwHG8LW6YqV2ff2g6LZ4Z8JNM89omv7TwL2B1DhEBsbDoL"
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
