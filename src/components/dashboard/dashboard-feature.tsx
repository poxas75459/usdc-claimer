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
    "4eTBHiAYR3xCkDoSLQctXXiK4t4psw5arMJqri8esqUcYYEMJjzKhZKi7kQ68HPCsrsdtE8UYHxEceEzS3HhXVN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MD1mB8qezGHXwtRfabQsqwepRfXFaAq8u6Y5wvxVEKfgV6NF7xmWWgMtnAE2f4fx7EKp2ik3mwAnN9C9V6gsVuj",
  "key1": "25Y7mRnY51Ksj6kASwqU42PVBw2GDcx9DRiayMvpdMJzH84zJwowKiLrq1mFgSoSfGt9mkoGEpEkEqUbLKagBucv",
  "key2": "44amekJqWTxum56ZUw7zLBU8DsQCZNVnDavh1AML7VpmQukr5uve3K4XihmNAhtqZKFqiJ8GJXToN44tGpFSwQ8A",
  "key3": "2GpvMkjKTUWhvbhc3inNzw3jjHEWfjng9iFMVSBPv8RjU6vPFuJ6kShgmKg2vqP4svGQux5p72gUiaXB9PRQaFgM",
  "key4": "3vf7PtGXvQrLS1eqXpXduqZe6uHjfQn39sMzjDpXNgP9eVSdJpM4KJKen2PXyhKQ5erzRUfqENWrwHB8M6HVmWaD",
  "key5": "2e69XAD8FzgSoaKfmj6FuyDw3t9pPwzk9BxBnibbJtUG8GuqvyTTUp3kk3qbW7oUaSwYE6ZtGAoTry7GwpDq4hmU",
  "key6": "5q73LmBjroW2xa919b5HLLPJZkmgNZ5L5KL3mrmmTJzbiGeuR5a9FwDHBEZKyCBMAFMwsFkaePmB3yExkVmSrYQE",
  "key7": "S2ckQSaz68RXMNxeNHtpdpEgbjX4MDErUNevz47XSo1TCEDjteQKiQe1Upt2mUCsYNyKqqfiKiVKnSzVmg2Ux6L",
  "key8": "3QCmgJw1digGzoEyHx323iWqdQXfYqmCTutps66JVNk5qgQ6erecYPFjapDK1bA9iHrPTipKmNjPp7p7yanUUCLX",
  "key9": "8eRRYcvULDEetYXmjUqeYU2MAjtQ24J8Z3eqYEYyk3XC8YNpcCcyes9fgATAPR5oTuRzkzBhaCPYwHEsspdrzZt",
  "key10": "4ficH5hoVTVWLAev5fntkKH2U5dQx3zwMUWsf2mUqFpRqfbNPmPSoJ6FfkiovszLQqAvt5dGydxyeTHwRa1KSncE",
  "key11": "3cJ4kCgan3xc2k1TQjS4R5DZH9kgNi8PS7r6tJgvQHCScFpqJ3KrWRkoaHKpVsi9i7YRfNbcchkfgAJBHM3DQW7t",
  "key12": "5sioRSeUjfUZ8PzqySX3fAXp3zAxGuj47iBBJMgVi72hZoXxVMaZD6zimzVpQRbJeHaPgsdAvgt6cuMVVdM7ipg8",
  "key13": "411vXJq6MXfETTRiC9PdKB6g5v69UXhTrLZ6fQ24j6HWFkyptjr7cQ8V32NnodvCsqPAYPiMPfAzCSyZvURVkStP",
  "key14": "2YxfsQu4dAhc2ydKbRNBfzhtt5jGqnZtm91xdeE1if8qpMaFJZegh5tdcECaETZy6esAjLNwNSGCqi6SxnaDjWEP",
  "key15": "4KnJ8ccwtQ5zyZBCAesRwgJw4GTUbC2pSnVhpMiUCqwDPDLExD9L4P57h6ZdnLWYKXtnHN8x4vC9FeB9uAmSFLRo",
  "key16": "3sc8YyFjDnMfs5hZBu72cZqJa9BkvdWBJzKhVd72zDejY62xijzcCA4X7KyJoGnUuAx5rZio6omQW17aXAScsCL2",
  "key17": "5dVv2RjX5iUki9Xeio2KD7Pr2aoTX7Y2wdst3W5kTD3gVpPeT2my6QXcAyTpYareW63ZyXAHFsqDMyox4RBuHxEL",
  "key18": "4FgAwXtXJJQbgfkDvEvdZmMCBxUL3JhKitnoWBt9HFZLvEFoqThhYqYYMcZbkQMyx8Vf86sBMCNvSLvinjcdYRqJ",
  "key19": "4aHLmvLH2R2ZQzYEB2una78JrSmt6rmBfTE5v4TWu3GqWZFM95tuYo458GEGx6x3PSsketoufcZPWfsM5FUNczJY",
  "key20": "2527K1Gh9AR1apFLhe2NpMWxFeDuB9Qvp2xh3fumrXM7qzmNLf8LQ9FpR21WDvKa3gxPN5wa8JZpmr628m3objCF",
  "key21": "2iDnhTbnrgpKFhDDpQmHfXoKY78bvKhepkLiotCHE168AdPJXn1ZDoNV2tWhZHGDmpBiP4rfqXo9boubH8a3FL2V",
  "key22": "XERecPhqbuMjSMV4TrTjYNnAaAkvwF4vXEusaWroHyxFMRRuL6Q6R31DvAviZ3qoSbWtTSCqhp6EQTz5CHxrWkh",
  "key23": "3mzqBbY2eNrvcy1qwEg5ztB9T1nNgqWsj7gGwaHzWFx5yjz31g67jJXUoTrMwXmZE1VDu21sT6TXaziEyfGcXJz5",
  "key24": "3BmzbFLCXx5bgKJufn9R79iuTPPSZ37Km42tEQyTU7S3vWs33B1xbQNCwiv9X1c774TnrjoSVhpABEU9z8BjCcWL",
  "key25": "4NZRfLtWWLStme4E2MrceztZgg3Hp2QWWXKr9FJwt4JvKakj2qTq4CcykgQGL58TKxkRtdZ18LETBUtDgSb6a4S2",
  "key26": "qxrCecYsMcK246mNpMqFaHpqLvPknM64GdRMLgr3ovY9L2eXWKZpKWqtRyoa1h4VdPRMUnjrrVwgkhnNHaEQ6VF",
  "key27": "3JQkvCY2ixEwyX5p7RdLJqmXjZSAP8WuVk8wLQqZ8pk4vU1kWn5YTVBabV8zpDiiUCcsrCuvH84bb1yGcBhEHGYa",
  "key28": "bc86LEf7NNWX7cfh6qpWzzBxdYeDoAvDvtkLnLPW34FyauREW5B2PUGNtkeK9AzGizzATZkNqotUgtNLs43rLYD",
  "key29": "5TeMYVFnhrBBfrjGApWrb8u2jzT5TRfzqYkhB1wpnUr1ybA9zpK1ibmmYnnsxfmdCKojWrHKzz7JM6S6AZDJbCds",
  "key30": "5HC73rZvkG7LYDfRnfFRF3dk6LGDSLYmqktAbFErV4zJZPvLs7uPuTpkc3WN2dz7uqvtVsiLbv73ZY3Kh3F3WxBK",
  "key31": "2hNFe5XdL1YmHZSYMMSpnEaHETdpKqSEo2L3dYqi1cBijMzLC4tGGQRYoQ6Bvm2iZM8U3XoWvbUSUgqHQnDqKS7R",
  "key32": "5EdU1ZguYegAUPLPWVq1dLfjihopUY3CuR4nhnhumUH3WEZRH9Ec42a6fvb8c4ccV55s5mGGYEaCKxNiHUZJnicS",
  "key33": "2B9n8VmSx6uBoyQsgL3CFo1pz4MtrtDZS3m8hCNHLUCZ6mNykXK21tCLjZzi3mYEgyGBnJSRV8mGtJ9kKS22MsjL",
  "key34": "51JGXEpLmu4uPgAiwwqesAdrNGQ2RWuNQwt9EBAtmSH7QgmkRZypwGUqgRiygz2QxoJV9yXoR87AuRjM3vrd8aEi",
  "key35": "4SuNaaNrRm8c1HXyLFERR4oNUFiMF5gziDvnP26GLPsCovAEJisLHHWooBSHjkwi17qcbTSH2CTHodjfyoPSoFEw",
  "key36": "2iwgoVPKPjyoHZHY691PZTNzAAKw6b1gmEEkQ4KPeBARGe8MfgtgiJ53JFYxotpn66SRkuAXYLarMe2XMS3nuLRG",
  "key37": "5hDM6pLRdyZqvTYHsazAgFmdH2cGvuJRNUuTQ6gpekRGtr2G9rUkfAPswVZ45FKNoiY2kfdXrKB5h16uGFKo7Rmv",
  "key38": "31XShguvfw6XdTdPESSWVCgJVhe7PfyCA7Jzggj1TEWfugscydbHuCZ9jC2Dkh8rC1xM2FeoNMuvickQ2X5ZgyZd",
  "key39": "4PJRAyPXYgu7pwozhjV2hqX9Ji5QxGjmcvo88CGTkw6EJtGYYB1uHPfSZCXcNV6wmCdy4uBvf8i1XzF77VCipsHR"
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
