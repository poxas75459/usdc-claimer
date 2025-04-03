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
    "95pFnquyFGgJsyAVjLH8pXeC7G45hTNa2yNQyrz4N7r3NDjptfBosypqc7dgVaS5N8XwkjPYEXAjjyYCg4TPYHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpGeNUD7kWymCFiJHmaYitUq3dv6nJtN32oDLbm4fj4qYbNR5zWz1QSVVLgfoyXn5y1FiLEfBrMBhVRg53R7u9",
  "key1": "3vPwAqbQsKhcCjPu3KgrZNBJNCTmM8zk7kVvvpRApFY6REQLs9rLu8x2XLVxR8hnrupiipcZDKui4aHP4LSve48N",
  "key2": "PyQbQinmjVKYgnaJX2EGwtJjHa53sy9yhjQVjyDA9t3bBq9AZGdxmD6keh28nQrPbuhTkWaNQP9NkKK8xS93Y5J",
  "key3": "4cGNpk93pfAn555bTJNS7XctdzBYPpct8G6A4En75ct84bUiQougJTPwTregpgUHfejNbmK5fdQf7vrvVPKAafZM",
  "key4": "33XFaQTeDWwmjnXjrEDrt3QwZFr6V2gCVkTyGBPjRgmQHTCT3rQLrCetAHMGQPEM82HgYvTUJdirwnwJgfxTGsbN",
  "key5": "3EB6pZpM7UTYyeD5odYUydYsEePSdXaTEid4CCwYzkA4ysujkE3qJETD2xgb92Ms7GgtoqUquAvFhiTJaSdVefaL",
  "key6": "22ZuBfgsxsnRyHRNyyedfzNZ1fgHw5aV35a8vTeBavYPBG4RHZE3cuVWobPunLdZfasutLeDDjsCYaJdJfSSVgLq",
  "key7": "2fhoS8mtEThhkNtdQppaBGe2wfzVTPEemMqVc8eMzN8kNht9XJbTUEfXVvW5e2tpHcfiCJeithx8N55kEh8qpdfo",
  "key8": "74c2KYnUyRLHSVmboB3Sm15uqDUfpFCjAzKQon8rTNWN9DfSVkpXYAxPy1Nd8xCAjVXZ6eeNLZUq5DSH6jjY9Kg",
  "key9": "232rASry3nu3V6zr9SjVKXkBSZaFCAWRDgVpXdd43rL3svpQ4ySp1jRWRyr4AMA8VNuGuzNWwZStXDHyFRDEHpuD",
  "key10": "5SdzfNDqKF754UuneULEKWhWVEnczWmJeJwq6SvVB5F3RUx96H1sCTpunqokHxAfG1ecHuNkSXDK7YRHnVYM9JLM",
  "key11": "4638zekKU6u7TsnFVLps37dEFUMqBKN78dPtL6vKPmz3sEQWhgrtvAQhmWv6dWeiCSNNisM7jAbSPanA7T5GcERq",
  "key12": "5xUZrrUTTe8mHcs2voZo4AcHb7cYksMhNB15MCrU5R3FtqYpbMPAPKirzkLcEuBVe6u1GHSmWw6RA9ykXsAWWWx3",
  "key13": "CCS65XUN3H8nm6dRpBppho68GKW2rPryNjhuu7tf961uzsYpJYFGr9fYsMEJQVca51ndwwDxVRTDy2aRcHkeRDJ",
  "key14": "r1Pvzn9pZsb1Yh1u7anKxpUpRhz6UzT5rC5N4YwGZa6Z4Lobpohip1rDA4erBZWMemza3VdF3wAeYS2bHjKzVZY",
  "key15": "4RNSKGXRPUtNdC6zseJ5d9R85YokJdpNbmbZtJaBHJZHCKLnL9d6aiUNQ52WB1fK34nPwVZFr2aiAFAixCiUfp2T",
  "key16": "3BkZiMe9msRoHCeTR2hyxAD1jQyWMzxUuUyhb7amFPXMF9svzDnnKiELZMnxYPStmifn9Ef8XNi1daYRX1Bc59Ye",
  "key17": "2viz9dDPmqyLXNpx3ZpWG1pf7XUbnhjpXkzahjjpPFxxxVUHhqZwTcWh3gZ8wQeV6k4cxPmp6fD1bv4PB2BNtidW",
  "key18": "3o58B8bLG446ASGpA5pXkJGd3gsjNJL1Uev2USNm3KptndvkC6eRvTzaVxqAP9sU3KrhjDSD8n5BtxvXyikpreSA",
  "key19": "538mrxNhm4WSB2FeSZ5PhTRYg2qfN3TwWM1nxWUo2uFqDye6XHAL79pWfFC4PUPwBwgQGS7xmhBvJnP7MXrCGhar",
  "key20": "GNuEohUmivucoTEduq7LCpicn1YE1VeMcMF6MXkm2cehtv8kZzC93j7yhSMWey3zcoByNq3rLKQyanAfVAAGUmP",
  "key21": "3CRV5JiYSq3CgSG1Wh5abpkMjAS52NsAJLFJEwVUoswjbxjCxWosizLSWk36jEqBtF9Z1hdLeUVVsY7H9dLLNWgA",
  "key22": "9jLyUCqQZL3JKpJ4DSndwHh2AebsicLf4KEFH4Zkc2xUU1HGH3P6gGeH47WHAsdtbxSL8dRqtcS3iw31oHUq85w",
  "key23": "3yF99iGpLUZHbjeriuBmXgbtAjJES2k3p2ahSMxup8dgsJpLpb5Bbr3XttSdAJUtHP3Rz8f74vhRAnrcxrk3orGg",
  "key24": "QhHMnuDm1eobKgZUWXhu9KdkLdwR7tyujYzkow1tEjtrsPd2J4SB5LUzuGse6B71My5bJByoPhitqkNJNAFNVFb",
  "key25": "4ADJuAGUaQenGj9GrmMioCGDP67G7AFqtayEMnmviNUP2ERuS1GARieZuUADfJnDbBJCg5ZZTprADuXfpc7gMLVw",
  "key26": "1EmfrkiWtdXB9gZN9pqhybjWsvb6wRfFcXcMXUSEcu75ACX8tqU1d1x6orwBsyencBwVsDN4VVEhnCZJs1wKik8",
  "key27": "4h1ShcPjtJVngd6NcXpDQrBrCKPQcH7ZW3BUR9trptLhQMZFc25x1DBjj7zUCVXaTWH7mG1PiKcghYfcgwEuT26Q",
  "key28": "35UppdJsLdbnXyCnW9cssBL8Csk6bAxvAsXpRuZhwtu1M9yyH8FSwFL5DceVExNZ1YamdMX5UYHEkC8Bbhr2bE5d",
  "key29": "yr32adYcgJURF62MgwFyxHVfK3WxZu5JT5dmEQdCdMvZgozVkpH3kxNNsiKXoVNdhWJZoAfiSDussLJehEMwgJP",
  "key30": "HLeQzUwD6x2wnUHcDmvzHfeoJr3HT4GjbCiHcNNVQ9xxB1iZW5nJrJhfZSpvm1X2QiXupcPZhTeMibpGSok7N6P",
  "key31": "41g7A8V4eRqFdTmr7yuXYGJwfA8Xm2bYXzVkFbn8Qr3jmqCdbwcuzLuQWDDDq4v1hMpGKbf3ezMDb4XXNVvdZWwB",
  "key32": "67ip4GtCexGXNJU8fATZc6UdxjM5aXGbt8JK7pxBwsAUJsVFKgJWQoBZhP8b1bTxwQp4ayQJZSrbwgnKKmbvi6Du",
  "key33": "2ZsEbFdC4Xq1qWrBumSrFB6rnKF8jQk6K5iYqkCWAHySZBVJpwSCqtQKJ7uRuTER7hZcFsF9GFmmiYmXcgLsMCeA"
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
