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
    "35tRKmjvEbtSqsRR7k22QECXEqoekeivgF6HedzQ4GqbjggVLqqaEyWcDjNRFYWAWyoBubM1u5KGNfnMDXMrHQQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ssk5jSSgjxd85ipqEhUiZXiKhBxKYSoTiQoiYL5NCyGfu8ZNedX2F7rvR1SSyXLcfdakk5mv1Qj9Aet29GPuJHA",
  "key1": "3TkWXKM4PeHAzrj8NcA6b4yKVkfwCiMAVM14mCJJaefmsJMjguLCwUgwYyBWJdB6xU1LSRfudG3wif1rksAysU9",
  "key2": "422YXdNU7oJBs35Chg2zJdNcW63p5M6nSEMzsA4wAFpLGMkL1U8FDcwxFFoVcMgEdoaQFuWny8J1yGeQbivKoLQ2",
  "key3": "5z5Ko6oxSZDQYtVpGe4JqgHXZJHEPUhTSnVUkQB8urQ9xHqpF2JCbRPmaPKbsiiAZQVmTX824V5e861FvWDDjbza",
  "key4": "4kGc5cVeixW6maB9ddTiPdSkqCmris8zr57rgD1bzsEF4r2FuaSJMfq8TorFBa9tMypDSimqNx93oknWUQcsQrWo",
  "key5": "4263GAi3xJjDsnC8UErTogcwdrJtwUywNbYWFiyzQ3cnNbYASgdhXBtTffFoWCJUHxJNcREUV5NAgvoVRQsP9yPs",
  "key6": "5rjSG6jNp22SGAxSfjxWAQxVH49BfrtYi9uJ4pbJLadH8u3mmDJK7N1Gvz6en6Ue2NgeMdF2iJYX6mVfoq4fStAf",
  "key7": "2rmbxf4jA5JA9h9EooL8tSow39QXzMFyWmEVkrmLy1qvVqxVWjsWVSteSQJ8H1cng542NsQcUZGTnfi3JhmUbgjH",
  "key8": "398RPbPoGm9MERGNHqzihfVyz5jEHBUtfUU2rV5CT3mzLtF79urRGaFTZ4hwniieTrSe3mvKcHYSz66KR2HHwow1",
  "key9": "2s2k3YjpZm6FjiLwYuVijppxRujVGDAWnRxwWGTueFvNh85brvbicZ7hpWhCkgtcvSaa1VGtRdbpFA5YkZEEXkr8",
  "key10": "ZzkDaEmEqg83t5K9rCK8s68nKKsTSUJJ169cTmNjy9ZSJ8K8g2rbCvueKfYgZ567jKm6mTTtyYbWXQjcyAzrhFK",
  "key11": "5qeJLfkevg63YpFueu7YrbfFEDq8ZiTx3Nu6sReDzViNdxVxXbZdPMjEN1sCacYQr7mVoCzziNfeLY6KCJW78eQY",
  "key12": "4dJgeC5F3SzmgvH6vAbBpMMbenvkS3JnL249Gmie5kbZafpU6MUvaWvbzDhC5FvEYNxsmNn3zV6ciCogjVNEs9r6",
  "key13": "4xcrduNL2rBNyrjzRMm6BhfCadXTSZgFbww7bg59rjzSxbTDNb8S3B4Ck5uN7ygbJsXHF1e2JFtpaS73kAnZkn9J",
  "key14": "5Yz1sqvJqiGPMzZMeZAnGjtEp1s8vG3e2SKVC4RQhfS8z5Rst8LNTvVnb33hvmK6dLLTD8DpUT5buWXY4et8Z3is",
  "key15": "2kMwRCSkCiaLktazgudbPAPXivRkGiPQZEChmH8AccHNvfFkYQ4FGLCFjVJF8oApeRpAenScnzfG3FYgLsvV3bF9",
  "key16": "3oe8gQ8GXtDNHPabFGFqpB9iWvtzJDPCpbRDYaTzMMeXGKymrr85BkYZA3QHqqvq6B7bvkF3y7iS8qBvzw5ZXrTq",
  "key17": "2PkcpRYTmjReJU8QKeh9UxPrrXtHXp5kQWNJhdPz8htRsVxCFv17hmK4pZGe7bEc9Ycu7P2KYoA1RJRu79YXZ5ad",
  "key18": "5yrGx3TtNAp1zYcUjJjRmzchRmtQ6cnPWD717LrcxsMQrahVLBErUv7nHz3a6PVsghfFeK3dxQEN26YCgiUzFovN",
  "key19": "C192UwoybjFP7bgncDVNVZXSSRmPAzTzXKrawEJgqjHqB7ReokB8Sp9avqP5DJiJDRwxMoheAjWP2z5PzAjENhY",
  "key20": "3xMR535TKx7pNV5E6YykkbLuQFoWe9BUNa8Y9JwZxVsMFdG9jsft8sytXEbcRiGAHtsZiGyuekzWS7j9dRHEUPCG",
  "key21": "STspXaksCoUKNkDwJw4fiT7LRjQFGZq8xDU2L2cxry8B9r4nDKR6mUEKUYce7RRmL8tNR2seYVKHbwiE3mxmrVY",
  "key22": "GyEp3sjXmZCTx7fWAqD3SwwDfJt33knURWvFm72KFXqQdRPRmzxewC8xEepyvGut9xhNPE566ur6G8EJuscmrqx",
  "key23": "4C4dusRtPHbsYMLcmDFkm9dXcoknTk3m6uz7Z2L3FMrzbPskTZTYKF3DXS3oPxkJnVEUgj2523qdKkPBKicP8Uoj",
  "key24": "RYxXHYWcfE1V8RXrHiNTDyvRzS8jjaoXJy8qKG4FvKPTV1qYtsZiUGMnpgo59qw9eicDFQigjXTjF8wEUgoCJP1",
  "key25": "4hJAC53rLBLkKB8E7DgWYGMHme7w86zuduAxcdVb9ToHegmV9x4FAir1aJ8zqn9jTH3rGfHVYMvtts6W1R5WcbgE",
  "key26": "3WwFvyZSftAb7HwpcryenDFWL69FM27MpccMDvJKwMESErzWkW1wNeafr41aDxLpaRovGsSppGNjE4KQ7JMxrXtD",
  "key27": "53hzFCWeZDAEaT7pqAptgkxyGnCVrw7vwBPqbfhVkt3QBYhNsSczRDYu2jvWiSvcMQxHR1ZPubVg26MDm9vKPth3",
  "key28": "33G2n8WpzCnBuyPd6KA8vyKc378YFrTbACr7wgr5fi6gqbohvZXPntMN9vHrJvRfLrPPgf8ybTyvCZeZttjtZ6Rx",
  "key29": "3pusnVzgqxuRzUkKF6q1zv8LbSHMxcLXz1CKtfhyjW2vBSivb7tBGBLLhLtQQHytSMd2224Q2KUwMr2qXibx2f7c",
  "key30": "48qsm1z2MPW1aGzfqoh4kYEjCYZzYVjdRJ5kt8dYw3JbbfQXnMyiGaGjgAnNSig4tf3PkZ4mrSJ1KyVbiJYWGQ7c",
  "key31": "3L2TthNzzEpGywakiivFWkDTbj5iektQ8Yheormy6pbc9eHsaZhU2QJMtBNsTq4grZpaLF5u1AHwmqeEmvpW6FBY",
  "key32": "5i9N1abbjTjh6GSbpzSZpyNcowykfcLJZT7icbkL2cwqYGt1D82atJkR5NkLoHNLFDa8WAK9xHt5VKQq4TnwH2n5",
  "key33": "418qKRRqXd43B8YVWzkhJ5gLLWGsAJGy797gan1eStkUHF9HrqXqMt7dCqB7FViLHCUbSwZ7nL86hDKBYWs77j97",
  "key34": "3Kgjw9ebXkEUeGCD5z2V2xNitZySUQtMbYvUwCiJirTNeJrKFGWSw7pqYyxrqqvFcvtAYbg5vx2WbbqYbrdoAeyM",
  "key35": "5nvZENQHkt3Dq7b65kESHz4tvMX8XBhigFfgC4QBMBkrRKEnds3Fgn1faxRYWshs1kavgwyCpbBXM7Y439mukQ9C",
  "key36": "3yBM5dpnP2wdSbirPvbKA65edWxP3Nq3RN3DohCoJeemPaSYZQHUvMzRyZ1Dk5ZcCsuaKjpYiC8JzGNft2fMmxPc",
  "key37": "K6GTzpCzzNsdbweu7hHvHZ4rkVkdvy6YkP385eE1LwWaDDPNsdrkgoinrHMV1ga8XZwFU9mjZQbNAUAvKkUUJDr",
  "key38": "4KezZAKJzZvBTrg9heV5iyf9TMDnH2KqbdiegK7P258CPTa9Ct8aC2wSYRyqxoQtr7Bqb7Y9AQU2EkCM1NWVKJcB",
  "key39": "3deELoex673xuJAn8a63XsgCn9xYaEyLokTTuujYx5WShVXiYQ9JYFNvyWeQsUaVbmHorw6jG3ibs6zLxSzXzRAa",
  "key40": "3ftNWULZqzLeYhVJDAdXmsZsLj2PScikEaY32rxN5Qiq7TLJtaFcRxAF821CyN267WKTCYoRHcKQyizQovTz7Qkk",
  "key41": "3R11VVyxCrGRWBFyYMBJ9zivT1EcyVGr1KgprDyo6xZzeHJpepqdjzrYg7CeNVoo7Gufo2Voiph5W2bgYWwNKeqh",
  "key42": "FXhi2Qm1PtGEwUbs2WTmA3YMHqjxuLTmxxPwfkNqRTW3E6cpWGi5JgZfURday3JgYrfxYW4GCpRvKNzG2bysycX",
  "key43": "5sYVcYGEp3mLbkmqQh7LNG57gmyGnQnQAV6yJ9k4HikxqRERKcmhwWStYtgEK4QvSrJP3qvSfc5f1EDXhypsdxSr",
  "key44": "5Ad8jM8WoVe5bANCEfSmv84k5zCpiBLvrf5AM7Dk1Njq2USVEq7aexxzzEAMg2rsS3Z4hYu6iGoMonepvNGA6QH9"
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
