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
    "2s7HKLyxqDq8uQ7uitxayB9xxv1c8M8uMpG1DyArCpf5SWtJ9YcXhCwpgvtKEjZmZETYobYkBZAAbW2SVPs34Fuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49z3UXAGHzssXydt1dYCZu3pPHjypZWEqYx1NpbbWECQq3rTiTK8YC25g5taXVCQaN5Sjq45AA78UdTvzEeiqxcU",
  "key1": "FZx8GxzugGUFnTHAJTfaDf9GvAN3S8Jxq6rspvGXicWaMzy5sa2E5DkkHxLfkKd68pTYoNY2YwkeXoEeBkBBYwP",
  "key2": "4BaTh8jUFdEzMXRdnsebmfLAtD8iybz2jc1AMgLhsTfBdkPebx3gbnE1UP73xDxZaj1aMG8NNEYpLDebyzAEPnjY",
  "key3": "5uBUYaV5nSFSRuQySNuNFj1SshXbtJH6wHQyq1BErS6e4RpV5w4w7AiqibNXaau2BYq5pBuhbrKiUxqiXwxNfr8J",
  "key4": "23B1ofqxJxZcsDoGjxWvyX6NQYKUtsYzHhDSoHABCsyt2ovhp4PAMHco9XpuJsSXZr5vYM5XtdpL68ePM9WKwToh",
  "key5": "5pEprDd3nLp4gf4FFmV4heQqZqRxtVjmrWbE9JL8Qwa4f5zm9ZUrw6GgNSCjyvNQLTNW6rNLm6R4bahpbNcwKS6s",
  "key6": "5ufRojaLdkFWK5v1QWGYLZDs29Bvb1q4UWcq5xpVpUNnngosev7dv61AmGsbLxrq1e2HT22Vm4FgafRsD63uHUAt",
  "key7": "7WZ8ZEyzEpWZhEDXFkWUqWSyXuPJvsWBZFttxiG6vZogmDcft9rmb3TLbweJgmtMP9peEZpNnxLDFxNPY3qqkEA",
  "key8": "2DuYUb6rcUtsaEAWc2EHe15iY6SYvATRmknoxZghRWVdhKYTf1Y9CrCy284jBmEyFtKzMsfF2xG5f4tC3C8bq4W3",
  "key9": "4VEheCmzgmiC8qCaSuXw4Hjyannrik3VpzvLxDbRcxX1bLU1CMkuPLvfyMut7A2w4ELVKYcJhvJCR61BXTAyTiuT",
  "key10": "2HmPysrzvzhJ3nR2nBGWpQgksXJ2p9XnTiypAzthyUn57vb319swVhLc9fMfjv25CGEJn4kY2FcQJUfYTZpT8HA7",
  "key11": "3qq7ecBtLj7UBjwht2qdQBXH2Wk7BjBCHUmDEE5GDdia8P8hggESenqJKwgLTFiDhD3jQyx37n1mdVbRLkMVP7hR",
  "key12": "5THPLpw1r8QcxU3veVZPRxLBMry9z4y3GreyrEQywCYgePk8rZE6t6RQnUtjFyeyLgYsQPPxwdZ7LKrCpXSVow54",
  "key13": "5jZWPmhCDcER5jFGkv77zBmBY8bon9iPANcWDdQmUav4Wz2wTAPvNU1gbYq12TFvDbpysukyDv7tEiBEcVX89wAi",
  "key14": "3a3iPFW1T8Tva933eo3PkCqyfL3qoLosuUp1ktjw4jvQKNNBRMK33ty4wSuiEUjizAgjpK2KLiYdCToxPPxC4F7q",
  "key15": "FjLHK8CDDdhWe8nrdVAejNnp2mZdyRj3E2eKjL9sTau3Sbp4CStHP4QHJNTG6VuVLFJP2nmtsS61QU5zotDsma7",
  "key16": "tTf6GbCi9vMMsV8qcpxBTaYYMZMN3837DvTfVEYLqj5L2taeSwfnp6AYLtMhtmpAKgfJBkTnSfoPQCKgVPYPYbQ",
  "key17": "2i1LTihKkAwMwfCFTfBS9ZQrWBY8UGuBurgqJcKD4HAzHAkkEFxDUeEkNpKBCx5EzRwEBFAhxLSAMPmdZ763bJfk",
  "key18": "5apTeg2tPxf39BcBX75ksS62LgbQhvet7Uy9KrtRzyy9pG9BqsdppjrB5a4PaoSBa7p1mG2bQXx298MaUHZ8Wi7E",
  "key19": "29WdduVKFWx67HmhQAvJF1SNFZTDxWnh5FNTsFYKp58Rww24V2N3b8WuDo9FN991fjxHaMQTNPHBRjKwHA2vQsoN",
  "key20": "46RAvPrtNHc5D6GTRjwccSzhAWv7i6XE6ixoLNFvcHuRxqcokjgX4QkMfuWc8RjwaKsfUYq1bgjp9X1nsfDxuzvE",
  "key21": "33dwCSMuccEjWSoMY2DKFULeEnJ6doraPM25yyxawkosVwpMoYW4BuAQHMArxBLy9q8Yqv1F4mNknSwX48aqk9W8",
  "key22": "4ttnvAdzs24VtDa6dseiNb6kb6AH9PR1sJaK2rjkv3PN9Wdn5cvportJy4gk7JjU4sSSxgFiwxjCEpqaNYrhQ8cf",
  "key23": "2s1B2Pgh8ygfnfwZheLF3uvbCGLgUjnitTxPf6wj5mdvt4kfJH17mT6KfFHa7Hp3MF5TucENUbj1tVipQtqSVrKc",
  "key24": "2nHNkGPjYE1n6qJUQ5ud96iRzNpMrpDH4h8D9cVXG1VXHboja3Z5wLSwFFsSiomBJrHsDGf38zvDKhVqfxYN8nvi",
  "key25": "2KMuM996qRa272EzbQDm2LW3XxVJK8yZBiFBmzwgPGqfAcBirAhcmfH4SaZnnVi3ARtjyDNwcWNuA38xq3WtQspG",
  "key26": "45YgdatEiQpqzqQK24mBm6t8pFyR436NRD7gVCF9r9eptS12coFUN5vAiyEzvvJGMDC6p6kVofJTq1GzP2n7kcTy",
  "key27": "2TQy897H4p3TFGu2uAXMcGaW1v22dCJv8TZwJCGe9DapV8GV3V2P2uq8oijYejhrP2uYeDGbDmEF5uZavorqyULd",
  "key28": "3wqEWZjm5h9geyiPVWMyWvLT4cs18GZ5JdJq6cASmG7RYUhs6stDtzindx6eFX76ep3VcrxjjDujbb6FXPKGipXK",
  "key29": "4cti87GaGusJtvGS5Q6PZ86T73e4YTjkiW1VyP8kXTR3Y2fsG7A6JGL6HYqmPBnX4Lizvs82RagCTrDT25bf7LJE",
  "key30": "5FcYYdjBkdf6xLh5MV1h3311SH97vrrFZHeSWGtyvTrkSyxidyMwM14DsWMeqTMb92YgX4iAUw7xxxiVhq7SDJkG"
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
