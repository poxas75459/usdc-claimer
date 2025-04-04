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
    "5GMQq67Hj3st316VZKFQPgYPPBeTkT94tHyyqD1HK6iSrXzKzfGLXtxxPcrFkyBPnkYBAGXv7Yw7g5ukTLF2BBdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkWvEwZyyrjTj4H4F6UxPVvMCdq9X6cSDwEPpCiT3CpqXuJWDj3T5PK5FwBi6PTp9DWK4nwwCYPFFY4rK7xw3yP",
  "key1": "B4ajWn9B1jvoQNrzNo7qY9JSUBgpFrcnZYd3yyL8zo5uXrJYTrceFQbJStdjukWJftUpjKo9btwx7AJw3wUcCZU",
  "key2": "124Bk3yFLNb8Wc4ggQyNmwEbzqbbtFaiwSjirJMG6MpUKne6oPSpfsYmsP6uXqNhaZxf6TehTPr5dcm48Wp1YWar",
  "key3": "5wBnxb3oT69H1cEHZJ3FD7b5qomatGRrgBiWApqETUKFJAbXUYkrVEvj3ZEKeSUZjsa9qyRoR37aZrZoLPWYJfvZ",
  "key4": "4oMHD5T4d8ANo4xJGv9JhkwPYCHqGa8zuyfNkqpuyq2tHJagFraXnHHu3LdAgChfM9WXpSzXYcuYetgXdvLsMS7k",
  "key5": "47z1DM4Nw3axQU3vu2UZkJCGwjDTsEKCG16HVuLEFhP2w9zUcyr9wVuWbVmKnFgLdR5yFpiWMfSuYp8Td7bgHZPh",
  "key6": "cgnBVwNjU1tEbbVKYoQ5G3hCoLTdtduKaBL8PyUzD7DsV3NsDhcWr5y2fmvPsQ746enUwAQ6FYF7CroxG7PuoRX",
  "key7": "5yW6BLGwitHkfGbUoQcqR65st7vRvtLNmj7KVnGpHKiBmNhtUd6HzpESmrxCH9GX6LDM9TKhRrW7VGJpvJAJhcAN",
  "key8": "4QR1fXSFCc5zVBhZF5Ky9b4BZ4HoFxZoaNVtxF8bfj7KEgvXx59gaQwrY84aaRMdKz1SiouumXnER3CnffJpgc6n",
  "key9": "JUajx1garwzLgobXEsjUm983h1ZeE965gt9cLGpoqTknK3JSBBNVFC6nSddyPDXAJebPUs7vkb9NT8bpo88w6fa",
  "key10": "3jCPsFw1SYoH5xekf4dnJ3QdMprXMknpmKHmXmEcmUtoqAMegSJWAgsKEDe39JPLVR2XDZJ1ani34E2VKaAmjJij",
  "key11": "4eJzAt9uDQxMpLDxRFGueVvfHGFbvWebFiVUBy4kYs1XZ7RUA7Z15fxP4Q7YoFi2a9XYDdkPBjcr3x6tykj2xzoy",
  "key12": "4UX6xcEasfMqBwNvbTSJEk1ZsMw8CpvC7AG2hChEB9m7c2BfG6mMwEVUYQy6FgdXMCMcxLjCCAbYkKxHZHQYnTNo",
  "key13": "36uavsZH8AwFkDGgPRg3bduijstv8crQB6vXwMKGv4zvEAqYPL7LsDNJ4pqaAhSe4XfjTgfK8ZLRJd6vHgquSYu8",
  "key14": "2qPjaGX9MTqoYGb2yaGsFjUjg7ctroesrawdRtFwe1Pte3fHDSwie3VJYFSNwGipukqR5Ht65E87QbAKmGriMtag",
  "key15": "4kBH1pBLfEVSX5nT2sUKTbB4cWMps6sRBjegxopzZ6A94VTYZ1MPvRvsVvNZRzczEpAmM8dxhFqCKhs2gLWRzykP",
  "key16": "qraGNccaD3dr1S4jKxMoxtsLRddh4CyAQvPR1RfsREgGJymSsmYPQBy3bSux8EHQAtBg5zSpwxe44gTKR2SwDWq",
  "key17": "4kqwrxbDPEFinNm12so2iMCxB5hmVZLRT8hhT4RJRqwrueHYzUfR2kNE1YqikSfg3YSWA3x8BwhXWbfCgVE9XUm2",
  "key18": "8rkW8ssZ2LAp3TH5fmknr7uUX91Lt3QLrFnV8mKXyaff8wygxJtN8kRZpgCDAwDU3BqoZsPr6QPmAaetvC2rEif",
  "key19": "5jpiikLLRGxVZYnDpA216eW6AuThjNzgH6NQrkBSPzZLFkYSsXGcKemfftphVP3kCAWFcEF1s1oARb3qBrCBpWTv",
  "key20": "4z1bxUQxwU9zBYE9e3VaZ3gdWrPcFHZt8NzwrCqvqAemFMmLpMo8TY1gp9W882kePkoJT5iL6DRyzvn9DHcsCV3d",
  "key21": "24ToBHP216PbfXbKYFj7FcKMTPQbZcxNS3vEGGQ38YJoqiMZR5WN957miFtVZLZV8hwVaN4PpycCFwx3NFkz92jL",
  "key22": "54JTtWm2G1qPQ93ecTyvqTvcMvUcaCfbHPQW2cZUzvu2X5joqDnkG8EdkRidfTi5FQH6fdjzAeemT6T3LE61XPwT",
  "key23": "3dWEpFUeahh4tSAGH6HWz2LTdbGFF4oN1xTVMGXv4eLegmWET21C8V6QVrMzBNCXFyWvTJ5U3YA1xdF4wVua4i6Y",
  "key24": "2vDbgUyY5wTZQsbAFeKPN3cGuXsHfwruMoLeF3WRXTeCVt8kyAa5QB8YiLfP3CPymXphZ734zctLt9HpesnXvHAt",
  "key25": "4BM3Ap8QVRCoQdqfmhQJVqJuEwKxHrXd7wdGkdbWsNpF7cAwY85ZQLY9YSvyPdAZA5cu6DxBX2Y3z2wxfPmJ38cm",
  "key26": "DSniwb8nnqHz4DsJw5FC6kjVfSy4L7Fh7TacLxLJYrLNbLPhT2RHWnqfDPnZq9j6mgFo74XrNFtHLsG3PxWAoxL",
  "key27": "51X1TDSMJdFAPCMMLnHnTt5n8dgh4MhkyQfa1ugaFv82PHv9SFFSWJjQfRP7Fq5qVdsm9QEUnSBJdrQCJYm7D1AW",
  "key28": "4GALhtQNVNLSTu2QZrAvcgMc6tW2F5x14xQwRvZJhsgPgrVTUjsMdqrfj71hEYbxXk8zqfc366Tyc5y9vUr3poLb",
  "key29": "3jGd99wrmmruwHhVrPMx6ypicxrrghUWJxA4KLj8RBcbCEGbX57tPZLDp3PvsoBoFgAH51H6B7wcHho2626WcKU4",
  "key30": "Mz2CpE3nx8pXmTo9iFkRLat9aTgwwwXTVbFjXkqqMz4jzvxtU6pfiUq8YGLeSGrQzVCpCBhDMrvp4TKBY8JgJ31",
  "key31": "3BxtHyzXZ5RUmUMwUwsz5uh5y9r4ASw5TQpRwpGN9yEnzm97t4qWYguiWaASHB3KFVVRySvCyCR9faFrwKTksv8S",
  "key32": "24SCmUwgfSBbrSD7VbS6nRUEixUgVmHcEbhPqeonmGfXCxMZikVdQLnLeMTMHhYqqqYkfh3aCsUZ9fhntVRgsAt5",
  "key33": "2zhCpnVSUeQGaysS7NXKKioqoR9ijaqU5tS5FBXKBXJkfGbwmK4WN5ot4fbPNtcsouQag979oCd6hppmibbXVwTj",
  "key34": "59e1DW6xHkQMQ56GhiLoiGA5TideY6CjrxP87HHsNAvvufqqtQXr51hgkZHnmVgs2RgKrzjfRwTg4i9nmCkbzXy9",
  "key35": "2sv7WFfqe5aBDYeUUpSLcDnC2feF5oaSj1qv6pAoju3j47m45mhKpki4Nk6tGzi8pkKg2HCDqPYgqs5ChqT7EWLb",
  "key36": "4qBM1NsEkTipJkTCHRBXxeCSz8fBMk1PtPcW6MnKMV5Q96VJGanzcMhdE8yvCjnLQeybDoF7KymnjC6UzmYu8p45",
  "key37": "3vqQrxq6kvG5Xz9sPZAigvSrGh9FmKPt69XzSnSCvqRFvxaCbCir1u3efCA4cdHCnPpQWBhzj5uKbB4i4p6d3Kcj",
  "key38": "45WBvFXaZnzp3JR7hqosZ91Mu1FykwGmgrBfY82yBP1n2FC8Eiy9ijBzPeNZZuxNVvzV1Q1Sj8ffAwM41BzwjM7T",
  "key39": "4Hyvf75iphFS7J8XsfRA4fZxoeVRrrYDF95LborLsdAJVbdFju8WRzFfs4oEdiK4uRcJ6zPu215PDHTF28JNi2zG"
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
