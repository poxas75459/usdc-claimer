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
    "1JK1gk4kh5xtLK5VoYY88VUdgR9dTchQDRXhzWVms1xeKHAySRZ3P1rJ6Y8QPWeotCF7GvpyfsGXbwqxSaUnRex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iY7b8nUqtu2BfMwHzXYykFYcc3uFi4YvPDxb59PpcT4H65fmfkcakVos17d7dBPXecha9SXHTgFjiwqzpyPnmP8",
  "key1": "3oxwRfqMV6yWQ7STWfpNnr95iGEEcyP77uHTDAKYdz4hAYGTnwbxTNEHCVSAk5HbZ1aQ8an6uFwxrTuhRrNp5dRg",
  "key2": "4SjBmj9oPLDYFGX6XRV6oxkGzTABaE8bXYcjEpqtfdYsfcm9JNuCvJoBs14RvMMK2LoVPZZE92kTGo9RZQwSJ9jH",
  "key3": "23CBWXEV94EXypNRDAGi3hxGybR9GaEG77XkZv2AM8r4HfHbvM6JQuFyfmtEW7CJqkNYMhdM1rtFQ6DxEUHNCXJX",
  "key4": "5nYyVX3DrGbnCUob3onBvNhcR5QcFCNwfspqa7gi3NnMggPLXzB89KoqQvA2zgrvnryJg3QHcpggbTzRfj31WPVD",
  "key5": "2BKp2nU2UQyam1w2vK6bUvRHA1r26mPqPudwvfaHCCnts6X9uNtUdtJBc38VqPjg4FRhkhU7rQWSGK1ocNvtJTZf",
  "key6": "2dg2q25jHXKXp4oPY3xRXydcsfULSmHnX25hS2XMNqLdYWhDT41iwiyag9vmunwy5tV4zrGiHCbvzCBYEmRhGSMo",
  "key7": "2FrxfKpQRTEpqqjUMZX8GwRbHZybdgXg1c886b8QhhQxAQpKDgGKvLzTesL1ssJcHjei6PEQYjYsqMDcZaSCpmd3",
  "key8": "gMcrXCiSTDC7UanjhRsqRgKz17xAiKFEo4Lf7YwFJu9zPMow1nBZCzLBRnKVo3jd3Qrw8oSV5TpbqwAtpASyY8o",
  "key9": "2wmVMiq2bFAeePuhunuAjMb8dR79PCFd4AXXjn6fJK4pLA5XaEKtZBfw3PAg5YkpsxLgXrGjm8HJ1Vuwb5y9wkw4",
  "key10": "4bisWZBRc52vJrwAPQ7rsKUgv1SCtZmhbh7sSdZqzEECpmkR7mtEhXLUoUvNQVA9WRQQ1icW7G67aNfPxooCynPp",
  "key11": "4vxxRPDrrERDKdzkY7uPnB4MMR63joXt6siQiKvC66c7BQdDcLtB8NeeifWAU4bsEwNuzmAG95i17fn6SUAzmxAp",
  "key12": "4w3rEA3gGCf1yoLRP7C1rHSj3iaGxK4hL2jWEU8jxQTeMrFk2Z8hVyJdXzhjXjTZwd8TRQZ8RH1r2TvLyvugx3py",
  "key13": "2KJ3UQxZxtE61QZuQmzWjTn95oBRdW3JPCPKSHkaM9PeeuzBJTQ7FRmk8y53Rsue9F1aXUV6WWc8qKAAZ72rStG7",
  "key14": "2j4doih3YYHo3k4QSkQ3iEBAP7Q1zcr4ANtghQmoQNPv1WcL87nuAXmZ7ZY9aMCVz8vRZEJiBKzWMCCXeiEA8BVc",
  "key15": "4if99KN1xfYpX843g88AwjJNXKznSHJbXSL4hwbuqg3Fb78gCMdkQXv9gbFK96Pm7ZZCEduRbacihz36WCd9XUJd",
  "key16": "3VRm8fnbiZ586xvdA6UWuiC1W1ZCdwczUyUHbg7atoJAMUVFbW1U5XTJWAEyJj8DPfhREtV1VuLZngNFY2Ld9AQm",
  "key17": "5tBAqEh4ju5SB29vgivnq42pe3B4qte13sDPq4jBnKweBWB9H894gvvz7G2a3qNVku6kz5zb9D1HbSxFzc69kwTC",
  "key18": "5D9spnmCdY1o5aZM1bNJH8tuFsFfauRtcjrmEeD21Fggsbf1YF4NXMsV8BuKQaUYZKbvDHJ8v2xmwK1etoyG9rZw",
  "key19": "3gN48CRwyejewNtj7RYVVn1KoxHLNUEhuPTC9HSMT2FP8PTUfPzwLphMgzhiYQmBjY6sRaiJ3p5LahueqroSyp1m",
  "key20": "ruHeZx7FCerXcKXAmrrhnvW9qh9EfHGGEjtBug5eUxmn7kDfXFrxuLdQtX124Vj9Dzhq7RL9YkdfgdCuxdLidVe",
  "key21": "3Ksn4mJeunW7199oyEiCdk1QEYAzQg93SigCWbU2YdHmdifbLSHRnctq7Tf9TAp76gAACEP2uacXELUEfKC1hAnb",
  "key22": "218ChBfPW5MYWCLc437ef3eH8q1hPGT5cn1v7mgVbTv29QszCh9xv21mLK3SbVjRo6Kz6sQsXodfpvP47Pai7aio",
  "key23": "514sXa6vvknzbJ7bTkmGcDMdoQvVdYGAEqnmJGqL7vgXt15otvuezxXBHxFYcRyq2QfunkHgDGMvp4uBafVZhuAB",
  "key24": "2fuQmSnr1gAfoXHpgSJ5LNPXA1vfVtfs8agCcyaeMxT2HqGYuTjmJpYBSSoZiuGUc41BhYzB5VekuHULD75rV85A",
  "key25": "4igjYbArhWwVLkbhdLgsvP2ry9DGJwy5KcPe75hH1zpDBJSjgtztMBLaJBku29iNDKgN2dnCYXfiDfGPwT2p1buL",
  "key26": "SFkj9qgKMFb6Qj51yCqv5fT6CqtkGAHMNtwP4aKo6zEoL7rq17iv4p5rgYnWG799FUVEMZzKTuNjuMkSbA7qDZv",
  "key27": "N58E3WDp6qxHs41hBnZp84hYRHVCn2661aFFFxtg3UujtbfdCpQ6XvXZRDNvBt3jjSPC6Ca91VMuhRY1so17pz1",
  "key28": "2oA7CGDxneH2ZZ8WY9x2VVXcrdeg5TDEzWSZMnE9iBEyoRVYMKXhxxAHx6rKpAa1x5QypNiGwrLFgGVNLDPRRRvB",
  "key29": "3QUotfrziYkJM5QRMM319DtY9FqP4Wb88uqnPg8h6xmb3UGuZ5pX2uZS9Jaks39BR2XfoC1R8b2br6W2vwQkgP2B",
  "key30": "3cH8RL91Gd3VNNeJnugoF9Y1EbvyKb2e1EqPo3f8QvSTK156EMrmomFLPeNYuQ5JD8FWYBUTsz5eg81krMZ5f6eq",
  "key31": "3yhanFNVUazzPx8uQMUHvAgZ5r7V9gyko2wUCryLa3ziyCXTtQ891rVXQFR5UH2gcC9uhjn1U6RehJwx8vY1ZfGu",
  "key32": "3w16ts1T2j4Uas3UVZor6gDDmPEwozsmTPqcEG4cVxW1BbCNXSxJ3jzu5NoExHMoD1d16uM6Ps6sQsRwpARXujgG"
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
