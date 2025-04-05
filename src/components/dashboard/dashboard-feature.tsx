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
    "3Sq488tb9nMiFrVyhwJTotja4hNHtjo1e7Z2C9CzrzgnX8HcPqzrQmD9bHB8SJAqQY85xdbiXMT9jjX2ZdC2oht9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHsapUfAd72c7ZAeB1KZtAjhuQgCQL7hfhAWZzRoXXHEK2h6rq52JSKVx9odup8oUc9Vs9YVZGh2P3b27bq7Brc",
  "key1": "3n2kbZeAJrazuWbEjZJenYuc4C6Sm19yJ9DkBq4o8RdjsYAK9WFqVErA3V4eLms81fQsVf5xaURdaTD9w3Qi6E11",
  "key2": "qjtiAFfEKgewtvMqeAzZfSa2C6ipNEt1n9F5PZyvhSE3EyKLq15Lcbq2EFghzwb5vz7zBLUdNzDgq1UA24Ch8fY",
  "key3": "558b9kZ6rEX2dfznwj14ohQiTcwZnP4sXUibxDttw5SF4T5fmcex6rE75CBCsXZ1aG3Tvyzf4ArQEwyE8jnrNRAJ",
  "key4": "5uLKRnwpqAXS1EP2EFHHc68yUN8DuFMNz1CTTwRkPhd4sC6sPs8pPSbmBkCb1fBYftvRvxcEHvC1WdDWc4x8uYTC",
  "key5": "SsKX6uCupou9bc9w3UvMPxU9MTVyLa497KtFey79jmMfUBUgQSP62GCn1KNpT1pgsEmxuhpS7FgXDSv7Ars81ZC",
  "key6": "5XQeaYvNUCg5Edj9khRoDFr1wA7KHBFYz3cNbg8tqkzqzXRw9KhoMS1z1BMdpPmkFvtbXXaY1JhuedVqaD419Zqg",
  "key7": "29RFTrE8SUzDJSasNquVWsfSwXNV4gjDweSsb6VuEuVqidsSQ7h2A8kShkucsMSfshaiFGBBYEpg9j5VXjvXbdBs",
  "key8": "3iTCuBKVQgZrVCAfeZmg2m4XygyPVJwZJqSucN5Uqc9LAThCR5j9u1NygBqmsvPUPELwJ8L1UxU7pDTb6KAX4m9P",
  "key9": "dfiBrLhiLJHnHSfLYttcrQ7JedRRyt79yd8nxLBTaHHYRQoj8RXYtUxHPsqPXxCCoom4E81yFEjjj5iAiZ5cvGD",
  "key10": "PFqQjC6XQXfxXwzdX7rRrVt2eSRwb3hoExE5SSq1XiVsEfw8fC4uEZBAXEi2PJNHdAxvuRqU2Pq4Xp478dwcX8o",
  "key11": "4UV17KpPywn79Yo32LoSbWJBN4tCXcKqpXzzC3oLBU9sKXiQdp5bRz6HJN5nJK7XRPo243mzVpVQCpJMHziv9WQu",
  "key12": "2wnKvSUyyfKYVBXie1cicXNJ3sHUfb9ooYW1cUGYYw9HY5pZf7QxmhGfYb3VZESFSwZxWntuKtYbh9xESE1qCB8X",
  "key13": "D3BbrGnjo9rjktNkcN2jmttmvE4HzwZ3CGESE8nKs224sWn51dZGSB13ASSkovTqoSd2PBxN8XMzAKMva1JCutY",
  "key14": "3KYaNEae3GCpGbDRuDmn5DwxN9zbbnoA2CB9EkPrmqxRiFwuCLUyoEK7Qzx6dSnmXxQr9ywPv5BWWwZggKMKn38E",
  "key15": "3qZs87GpikT5bVPvoZVJpLHzzQtPP4Q2vYoAZk8pTAHcPwHHRQxh9XmtdDc1YNJRPF8h5FVZ3fh6W9Ayyx8UeDN2",
  "key16": "BcgFezzQFrbMuXVDebRxwSyCEVhC1Ku1RBK28LsdfCDPtFsRVfkYGdJxjy956MbGxo22aXr7p5CieFVQ3rnP3vC",
  "key17": "29zbRgFvuBvM6qZkgpPAdp68jWuRiWutu4gby4uV4H5dqtXigzxbLEFC65ZSN7wwvs69mf96ByoF2oGhueKqgZWg",
  "key18": "53CPZhxHCUkH3oiZ9nwCzSSmtGYniAMeyQmvVXCWvkzzQqB1ADu9V4342nadALtQqDkYpcFTLPPPMGzkkFCoaVTQ",
  "key19": "5SSWUiYqW3j6BAAaE5gSnNMcnjMJfTb8F9ygRCxskWjs82rofGyVA9sbT7N97vog3scL3SBBAhA8rUjU9yeQtqFb",
  "key20": "5phAxTGa6EwR2Tk5oKvvB4qmBUo1CCu7N3Aem5CfA1uT7erfzrz3ANBbcuGBB4RjTmFN7MqHn3dB12rfQnvJtpBD",
  "key21": "4wKjjHtari4kjLGeszjAf9ALDxLTVsaKLgooZCyXSaKVHWaniTJWKWti1CZUpefnSfwYSAaSSaUU2EYyHvNKKZuy",
  "key22": "jec7W4xLSw3wvyPDEZRrQpQoPPmhLAGcWrqAjVncpYEsCiyAM45LV3zRGqo58FX96knnbWjZSRQWYt2dNKoaQUa",
  "key23": "33fDb1AvixUMZKSXFygKcvzEWnbdUC7dNjYR6bx1JMgRbVcBamBaZoBJKd6FoDxiobich5oEncXKTc5i3FqC4kVa",
  "key24": "4C4npRX6LwHDAXFdpAn2ak1Qv1Anc5zDuKVsKj3vSfyMQ3PDLwzds3GwuSSjfQLSt7Gv2wCZ2R48YR1r33LQeK9y",
  "key25": "GACN1fSPGvXKuvS2dJ9WeuMiyBqrJbpy6ifxNB3WySfnqAhVxrtEhU6MFjC2N9WTmk7zbf7ZppnEHQ3UrPMGCdB",
  "key26": "2CAFWmsBy4kmFXc5Xvzvnk36Ydb7WUdT2Ff2wvfTUeYJc8XVeTuPAwtKhF8kzf7CUA5kAWmjmCQojhNZiJ5HLJWM",
  "key27": "43ZD8yymxu2h1G1UioTbBn2SzeHGTAVdk5iGMqPHg83LGr1TeHnJXDRLzchSXjE7eDUGsswczB3KBEZzmVNrHgs1",
  "key28": "4sQyK3vxPL9Y6oXjvgY8epkbna3dbfR1eCn3XuEUsM3bkLcYwJ4Tw5gosTHpKQ5SpmDcfwYcb9CiEtmQZvfqHhja",
  "key29": "5Kn7RfTVXth9bB8uZFfhsRbwE9jS12cJZCMv1tJC21cEz28E47ZxLJ2jfiLZpKdLdjuvEo1EU5doztnsPdQ45cjz",
  "key30": "5xFtqzJQBn6nDg2pFiGh64eztqHpGPzVq6JDeaCXkgCaM5MM3JuP96oLb56rxXrtDFeJcKYCg6oJYy1WFEYG8MvQ",
  "key31": "NkhpUKtoo2VSTWaU7VpaXuUFDwpih8ShysoiqUeB7iLBNuxsbPU3jSjTPF5popgYx2R1cYLw9vN5qCwHmZmZzw7",
  "key32": "uSXHBhjQXa8USdXa3hxDj45tvifJaFF6TL395oZAUZAiAp1cQ6KSm2i2Wc1ts4EsHPJmC4de5wP53WRPHjFNUJR",
  "key33": "Eft3bFxZ3tnDN18D5XK3mniPEhFjUzPCygpX3iCHDQyzt8PG2tpVon7EWJF1Kp6kM5WK4frz3h1vGoncmnr8hkb",
  "key34": "sT3LAaeLv1Rk8yxigLpSaqeBBCKn6cSu9WVPupgkHBptMk9yxzvjBFropXa8iYw4VSLAL7BSLftztzGDnHQHE8v",
  "key35": "5Xn2b3gDNeweEV7r9ZtZtQHBdVWvcCZkR2XwqDF7ytCz9M7N2wS7DmtiqEwg2trzAVTCsncxokvwyQDHXyZiB5HQ"
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
