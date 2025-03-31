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
    "4ns8FKzs7pMiv6g3ABV4nqFEf2wYHrPRxRcCVgW1ugfdGWqptxQy4m9af8HCkHPsKPnqT9fKmuTsdPYjHv43ePGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfMvWfv2Afd1hwPyeziHNsHpxfKQsvZe1hYaaJmgQSaXEJz7WBa7Krano7mWZhEZ4ViPbqhUk43Rr3jJd68mRZb",
  "key1": "ZPc1RoiKQck3VzKH6yyXVQ1u8qQbV63Qg729tPxANyViBRPkVpzFthGd8jb7GJTy1qa5AnjNJJmDxUocNvqTovT",
  "key2": "2wRtTV7DX7pj6EsnWuz2mP7PT8j2naC1o984WmLohqH4pnwQMPv2g7NhpYtBUpKaiQKGjVcWdJfwxbt23Vc5Gn83",
  "key3": "YG6YdbVoy6rZYx1v6LRn1Wy9AiKpv6mNNraB6i2S1msw9SBhs6yQ1Dq6wte6DonPrxs4RAAL2MqduThdGqczWt1",
  "key4": "5yx296YrNLr77yLpTFmjdVfuedortVQWjxaDBB5UhKrYuWsn8zBjLwPqThTeEbMRjHqfs6F1v9zgfBLdn321oDro",
  "key5": "4SDfe3R6481RXFVg3G1MLVaHGNmzGmUbYCxwanpNGZF8e4xeRL39SwR6a7SNqBvrAKJJrT3DAgT6tGrye4kqxPd5",
  "key6": "2osYcJpWNQYZycsUoUq9iNUmmn3XpEzjaG628hzXVqL9CAsq8vaMNzPTGZFqNtDzVn7m3vHkxCPNm83Qtn7jCR9H",
  "key7": "41PfzbjKtD9EmurPMK9nccQ38C3gtD82kkgcZ5uTfkphb3cMAbqqnvYJFASBdGQAsAHiu7Kj4wxfD4CrARmDePra",
  "key8": "r7s7g2D54Go97yyvedXGu7qgXDPLFMP7qK1TWPgNMuJonLpFTP3BReTivspaz7KRgAXaEGsRNJvzkfMP88c2bS6",
  "key9": "4Lz2XZ53m2uje7WM7K68CZ47CghzNDU1mKscgAuZ2b1iEbwQVWEuxTWtaYoVRLMfkMYY4h5uxACehQpeponbvZSR",
  "key10": "wErh821V8hHG7xPEEdHdMuX23J5TdzVitd1qkajeLqCsJuvoGgrGHeEGUtCrqt9iMay818TLnJGU685dpGRDjSA",
  "key11": "4pep4Bi9vKBP9RFoA9ri4H7EwZQRwz7DZnrPzjpzv2WeTpZEFJkTCpk7wzcskMFsFjXjtyEGyhqe9EkiuaouuuRn",
  "key12": "3i2Uw8KwbUatEMwGqcdfM9L7qotAMXMEA99ztZ4HxEzsZQvBHgD1oANU9G1NFFEVUzEiqPA1iayN5yQFfFnBDGNq",
  "key13": "4bEeXR9q3tvUjG24ugFEmQoqZRP3m63FZh4YVnqx5KcG4zBsAShm6TNDwz2jdgxuKSYkgi1KgMYVSSupijEsqyQX",
  "key14": "2YQVxRfvuvTX7wVx9RUh3ERu8KrA216rA5DfG1TA3oZfVQkWU3WMryH59u1g34t3hVBcC27USmtNj2a3kecb4Fef",
  "key15": "3hfNQC2wC15CZ5XrzzqxbXEetmM4cU5u8RbHvaxsE4ibr2emQ232ibdaD9zxMAzHz56pT1waB3huGVnjWKn5kPqL",
  "key16": "5pp694s2HMr8772hT3Dwjv3PvyNkJdv9fE11H5N5kefgVb6LaxwEFotsUp6VXnLwbELgBxHVjqsYHW5qPBAFqQHx",
  "key17": "mvwEvMR3cRi5MSpt8vX6ceW32tmvxpPMRG4WhKgbT5ymVgbFdntq36PDCmxVjqMFsowc1Z2SVFE1jG4qJzorF4e",
  "key18": "4WEpKXzA1DzZ96fjsMPG5a1sU2CYGycFp4jogcE8BhTmRon6FDwZybLzLi9WCfJtKZZSrmbCisncQ5jziXx9ewFH",
  "key19": "5xwmxH5PKVkbU7UkjiVLkXC7t3USAZrDuH7oTqgSLjCkYxQE5B9hEu4x2pBSihhfnwnUp2kxjTRtadHanEieV6EG",
  "key20": "5JScWnX9fre6kbYYsDt764zcvPXu4BVnQvLdqPEMtxPhiABEUUfhLzM4ZK2YJyLNpKNSNDe2j38UDKq4B4o2ALac",
  "key21": "4cGQScjSeYFQYK3jpq7aTxQx2R8Uth9HWrnT4Wd2B3V9Nu8bwnCzWYwGQUueRQ9QuMy6W9A1CpgNcnzb9X4gTmaf",
  "key22": "4UvdePdBW5Tt1LhoBmv2phr2zdM3ptnsjbUF5scGisFPrJjpkYPG66RJonsmsA3A8eXPS14cmFRHTYA1RtowYQQE",
  "key23": "3uM9e9Zqdq1vnJ2oAKXpnhT7MBMe1dfa6RuWo2hLoPKDKECZ59jnVeWcVfm1xh9Dw7seYKdR9SZAgPBYFAYbsha2",
  "key24": "3ftHuRMRKz3iFN8QYVFAMzkW5uV9FpohjXT9o5xhCga14rYoHz1U6sVfTfSpF4ocZffdZrnMsCLE4TMgGBKS2sWJ",
  "key25": "3R8x7X3s6PnKnMdkmoWYNoPgLjLeE7TaUT45kd18zu6pbfaUiS2btUiq5Xr92oPwLeh6cYsjeu4gWovk3RY2Upmr",
  "key26": "4o5bbJg3YQPi7pWLwgTogqQDnpbwU9hhDK7dL1METsvAvMitrRfvjLDV97ceBvqwhWMJ3EnVFHXpnRyRh1pmQHHu",
  "key27": "5QQ9bp2FqWVLSb1pPjrnZWA6717YvYiiLQ7Sf9Z1FisH8ddrNs17SYLfbfrbS91huBRHecvGhjoXkpPPaHty55Qx",
  "key28": "Y64mq5M8h7EugaFFusWpJUTKcuyTVogFfBcamwM9nyypvJ9qxmAcBd5pDMndcrSAnjpG9Q4qYn92Xhs1wgskV7E",
  "key29": "5CmfzwAVEaHda96PJZPHVz5ow5AoaK9J26bJCkvHFngRzZEUkqxqxDLupPPe2ChPj52Q7cYZnaEUCAjyJw5TSBhX",
  "key30": "3yG1CBEX8BCeGCPb8XEbKi1toeEY5NGCDYj3gBkMJW75kq1yownmJdVNzfg1Hz1V7HmpfKFKPhVS1256M2fpbdHs",
  "key31": "3z13CGccFS1bWARXCMedwxek1nVEjstMCUprCUUwpqXWDhDyG4gtvsYb3syJ59m71U4LZq4NNjUdfAmRB6QdSFix",
  "key32": "mpU7DokhcXhTWigTqw2tSMJdT2YnivAGb2TsTxyZwSwdLAdkS37L2fsHvzrHzxupshRftRE4orgvrRmdcUAYagq",
  "key33": "k14MTi4NU6kzEstH5SEqchAYWn18T9ATQZnexUUSynbyAmGVUT8UVaNSy5NR4XTx4nZBEz4HqKHitsxDCi3rmuD",
  "key34": "3gVbTTZb4PkZkdamsvrxLAwCzmMKoeotgUTJE4ZFp3exrCtkofti32zi784kt8tcjFhKHUonxXmeJYdHVFr9czz4",
  "key35": "5ue3ENmc5NBKkUEx7xz1TXqWGNqy2UZ77mGCC9oTsWZo1nCGNtFKTF4nWV2DuKVVyfDvgF6NGdA46teRzoHdvqei",
  "key36": "2sG2XJH48giBYdkiscVbFmdcFUqRd67HWDSYFixXJQwhzNosFVn6cZDCzmT712kWEUMvNTp1Ey1bJAcKokZfvpqJ"
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
