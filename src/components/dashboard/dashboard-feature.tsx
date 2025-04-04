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
    "9ffaotXTcb8HE2EoKy6Qgpm46zeH1PvKhg3VJwyPSYHyeWFEjTQjT4Vr2rT73oQKN8twk3TiPLWdhGjKgjSMpvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6GGCWvcuPRVn7Cd7RLRv5V9Qi9x2g37cuAXUz2x3UTGATuoqxmd7xGeyiPtVdhDXkDZNvBv5WWoXRpTfQBe3q1",
  "key1": "W5SV9YX1VbFbnnVT2L5kYM5CyvT5VEjpGcLNzNsu14jyjS9DjpBjXRRPjuu3hxHH4dV1TjmGikG1Dy4XwiLYKM3",
  "key2": "5ht9NzVXfJNG8SKeQoWeUpkCHGHugxvQX8rSgthMFHUcwb7EDdhm5oyyz7H3wDNLsgWTjU5xdzkysSD4QKCaeb6F",
  "key3": "4HEBEk7NKbBiEnPuradbPw5Cw8KoYfMn6oE1qeiR3FVxoJBMbPNxqvXHG1QWDKWCeCK7JWBNLuV8uK67FWQLoVZR",
  "key4": "2ZkzrM9BVzb3DS1mvVPS24pXqhMYiimz43v7Mxu1FjsBXdB1ZqPGKooU6Esoua8SjnazpzvoT4QrHGJ8zvkxMUhn",
  "key5": "3dFYKFkWQ2hfFsLqUNz8akcVXo9oKajQti85MC2ZFARyc7SupriZPqyRWKwZ8PgwMjiHoxYCN4WTe2CuUwmCvRoG",
  "key6": "57EatKZLm6ytxvjrpUgNBSaiDbAtBm1EfYxd6FENBqVZNV4aywfJCrybn7eLGhMzHeUn4fNxhRCkfBMTgkFRi8Ps",
  "key7": "2VMp3dHwJ3UcnKgRkUV9nJBR4rUG9An6U5RFhPf3MmoQd1jJmoSbUZjFHYwaiCeNe1hVL1H3TVg8FPkAFu8ESTpi",
  "key8": "5F4XAoSiBZ3zUZFf5M723vYyCDEJuwUrDKD7nKFmsyhkp6G8jNqY8ExynGtu7sStxJXBUiNRZ3wphRFbsaTmPiMe",
  "key9": "4ocJ2yFYqLSrRo5hYDLWswQEQkz5frCWk5kQ7ZEzBfxsYNvsRYgprL5btFdEZduTBTkF94SSJaK2ZSAvzya1Za1q",
  "key10": "4TVMJrqXPeMXse5wVx6va5SjzJdFc9etimybn5iQBA5xNG9m7gBi9GJubK486KPisdDQDRuN7z3E7qLzRh3TMd9h",
  "key11": "X2yhf8bMFjG74ATM2WqDiqQicFDmsq4jseiNkBW4hWjNLJ5Kfe9sNai3aFBEGHRY6AdgJNafrvTQY3T2CVKrBg6",
  "key12": "2gKQFW2yWYG5vQNo5eGsZWd8fTysWHuXMEytU8iTxp2NPV1E57hyCvu3awzcf5kvgGbfgBZsEEueWRcpBoc126yB",
  "key13": "sFT98SbNwurr81EXqKDnweJDJcLWvoDAYsrD68gcQ8RMe1p8uwh6uadVuqxqXx4FcKjjckKdY5owtbviNtJuyRK",
  "key14": "32MW7oBecf8qojjfzYfNWC1kNePayxpfrRrwaX9fDDewL5J6mx3b5zPAMKcwYvZtprZL2GSjHwu9sJPTxCJQ93GJ",
  "key15": "3onwj85piU334YBnSS46UNCRwaZaAM8JMt4D6NtTnu8v9kAADCNjjPwWxqxz4DttJABN9md5haak7ah7HYNgReeP",
  "key16": "2rh8Eji9f78EKmxREAKq5RouqHVh8kGH6E9dZYJYnLRepxRVcKC5H8e26C1eR1QcrR7nKbv8gphGXDujrkzJcga3",
  "key17": "X9xXoCFvzc9Re3KG1saRMZMz97cqgCdKNAfkYi1vThay2Cw5mMiVYSZEJJrTLUfwqFBA15rrPq3cb4NnjYXVpGL",
  "key18": "NPN4sRCCWSXDwqTXG9tt6wtFLJopkn4ymFc9bA4KRg3pFTewziQtpwKYkYR6Nfg96tqti29q3JtgSj41CJftTyy",
  "key19": "2TbXgYwHum2FDHFuGiPAWZUGdFYEfDBG5bMfjbwZTt7Wr6w3HAJu81GF2DMqWfJhBnPtqDk2qHkh4AC7VkUYWQrm",
  "key20": "3jUbuZkcqvz9tQJuYN11dBqcT8WdLvp1ZZK3TEatVCqU9K9yiWuW3cLRifQQmHuCwyc7VcxHRzGzMpA2DWfD43b3",
  "key21": "3WmVGow46uhbDmsiNw3U2MDWsEUasR66fTdGc5nrAqKfy7vDZFUSsqV2Je3wFV3Ly7ZcPpbjn529PkVQeXdTbgke",
  "key22": "2FH81xX3sXYMdK9xfgPmW75NjMvJiSCbhCGv9FjBj34BS5424WypKD7sp5TnTyDwBUjeqqSyLhkCchXafiedZUfi",
  "key23": "2EXtLt5CzcTdsYcbXhFw3tCBK6CwnwUP5CqqBkSvTSHu9kNASB1FLpZMiG5Cf97aokcLmvDp87msK7RDHreoSFeX",
  "key24": "5ehLqtNxM4knnRrDcW7SySifLGx8zz36pPd5sHRyYotxhTEmqBBSzeC9BP93C1wfnbBA2K2tkWetTRj4jDPp56F1",
  "key25": "ZM95T9ENt7Pai8gSv1EPkcNMTPKKWgdfh6MUhGRMDEi2G75pxTgiV9efM9eBKbasTctTEr9FCoAc9wtCWWHPoVf",
  "key26": "4c5Tt3FExhrXGsBnVEhVyma3VcNxszyrSQocGX5rqJVBWLqfY2PzXJ2q8DRCvF6cVRmEv1n2Qgjj4vcsGfS1Rcnq",
  "key27": "5WzxRFfGWYUDJ5hNVggMuYZyRKf9jTf7vhtG7LtjsaHJJsju8PdGe9nJrCF5Y3SwdfAbjQFMhiZVskuSHxoH39v2",
  "key28": "4LJ5S6U2tMEFKC8sqsuECkp9ZzLHDM5LGgt4iPT8uZNyQhoNuuyTVRbfmoc4L1FuZALsdrink5UooZhfcH9qMbds",
  "key29": "5AbGtRnoGkPDqDF6B4koLti9WxaKBr7EMouvFrwijd4Pvw3mytBe5pyuCMyxpSsQU9Dvru7346GzKYyza1duMMMA",
  "key30": "3m2jAyBDT1GNUtpzjW2pD2kncqCzK3ksjRdqmrdaupT1Ev82NpKTWtR5hC1y3Gw588FiF2MrxH4FxtaHG1nBpZCr",
  "key31": "52iHHynNjmDegyeZTCZZzbNTJbHamYi1nvu2t8bVzSEk8fJ8LPoYtFQUvDQKAdByyHPFcSagQ7EskpW7pAewwt8z",
  "key32": "3znBhxNSrKFNyAEdUmDZqKYxqTfmWkz83iwj5C1mFdGyEVS9feuUHLJaCfDKsGU4qbbTiZY9cefAEqPB3PXaSrEu"
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
