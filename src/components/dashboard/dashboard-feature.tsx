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
    "65fqmS3Lrq67yewDNHV4y2AQWcE1q4R5r52YvUEwzWwRjidMJKzGziiUbkbWERarkaC7sKYBnpUVXYJTe9bvr1NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6QRvYLCTsY2vHT7Vxo5vgks5vGAtcTbcbqLLuQfpoaPt53Po5KY431iaWKo4LAYiDdSAVFJ8JBomxX3HjJPevs",
  "key1": "61Y77q6vwe7xq9qbAZcSSMukHyn46z2XMzeJ8nF2QeFmVfd2MJF1wPJaWdtmZh929SrY2yJ3UVe8opYLBWT2V457",
  "key2": "3Hzh1G3cDT1qBRY79M7koVXXGuX1P5g6qCt52iVnpHePBd1dQCPBWmeJuMYFSevK8JAH8kwhXA8o1bCVuSCKG7uF",
  "key3": "5b6xfta4H438EJaDp1jbzCvt1dShVgBwLhxHVEQa8ujFdsuyzMnpKRX6wwQp9i1gr74NUVSGhyySLHuvtzXzkR9V",
  "key4": "nmj9koLGygYUorhX8FAmcSgsRZ6fg9FpAVew2EoXoif4Ya9jagGqE9bReiQfbaUUiKhrWqtqUusVYxpzYXFkGB6",
  "key5": "2DaJ2W6nFU335ZfLVJvQKwTCALXdh4kYZpn9Z3wvCD2KeeqA6qwpvTNJbjerUDqmEFLVnTrBkFYC4wsmjGgrMPG4",
  "key6": "4YDSU2yjkfXR1p96pqrf8u6xmRdbZSG3Mmk9QKsqsCrwmk5AXN1naxkN5CQNVvPPTmnAqCvfgoaWzX8nUb4N9UP9",
  "key7": "4MJmypEtFxQctGUySV62Y2zGEEi185nbXe8eWTfJ51UwSDUkQ3J4Cwb2ecyi1wowdzDAg8bkLBtqLMUkKkRBaAAt",
  "key8": "5G6958umjVZopzP6n4iL12Yz63Wa3KDud7hKx6gD15EXdbyZtnx8DZjEHjyYTVdDGkMXKccodd46SYhxa9n1dGZk",
  "key9": "2zgN4DRPxQe12b7anmofaTiM9qRP3buwxTRzx4p8BwafoRW6bRQEpJkFfedBfxor5Yj9VpZCzDCxuEZWjzCvsVYQ",
  "key10": "5x2zUaijBZ2cLwpC3gwRdb1NWUXsa7t8VsFrrNTmBXPG1VG7piX5gwFUGARdDCAMjNdKSDGYdV9szkVKkV5JBULC",
  "key11": "V61rpjK8uxEA4aHb4o6UvbyKnHrJ5t7AZWQPD7jjdxoEKmGgNRcm2Zy3dmBfJb5JPLLwbavbc2h6mjADwX1A2dS",
  "key12": "571DgTt47S6ENC8AnYVN1z16V7s18XCjkuVGDTqn6pdQbiNGh5ACQZrPhUEyJjJAuxu2fAUeXaaHJ2ukdU9uDtLy",
  "key13": "4ekuVG8RLHs3BHe11n9te9JqN9gPLJ7WfmT7t8iVrTUw56UQG3Li71f23g1yFNHrVJor4wkTu5cvD3DnH5T4ydtN",
  "key14": "2VvDCGk3UrBKikHTVmCW6ZjdbHyV4u89FHyu1FBJokAHBkSmfNs6QWTHrD6JmG3mAxoyu75zhFvVWQHRNTJVco6J",
  "key15": "3rG3qZK7aYst9LqKwifz5Fre1KPCMkNkn2TCgSuZsU7XWzoCKfwqiuJDRvh7UEiKQRxEZ5UKdMv9hB4emzDCLr7P",
  "key16": "3rm3vKCjmKiX24Xu6zTRyLmJJB1k8uhSFNXcja9fxx4beYbpQtT5ytLnQSGWQEPVVqpA2w2wyT75NZwCN3fKVpLW",
  "key17": "4CvYCfgtwW1sqkZqZqpTVA1ogNJepCDeYJuSkeDtFTs9ZPhH45DEov9rVJo3v7CsPYrnHs852nJhjnsUkTw9TKna",
  "key18": "4ndYNqpfwiCfSXbbxM3Sq1irUe9WKdqAzwAWqKGme5ESGvG5rchPQL8KTzUnQVcteA6SaQKG4C8LAd1tb2eLqmWs",
  "key19": "ijWxwqd2LEuJKSr4HH88P9RWiQ3U7qQKNj2ap4AeE6atbDxqDfhfwXNtKXpuzWXYqP1b9GNKtHUrEaras22W3oE",
  "key20": "4CMHywF6moxzu2g6z7RAMvVq6FgLAzXqStTX3KZbjyx7zKCeGyoj5gkoL5WhoAqQs8AufRsJF3KB78EKXxdysbXW",
  "key21": "2R6BLFmiRJ3UDK5cWkXfyRMXD76iK6QiFJ9ycui98n37Q7T4hr8m9LUBwwJmDKJ1vrHcssQybymLiY6YKzRWVFmU",
  "key22": "mWcJeJUwQsjQbUoaxLGXAm2BfA2TpvfHrXEYgD89LgSHVoENwB9roSowSHymFi7xgvmvzkSKhH81WwYEW11LohA",
  "key23": "Rsg5ewZM5RUWvjxB8TPFngK2PkSBCtFkoeveHGNxrmSHurhYoQZtf9aogCQ3iXjCe45z6HyyjW8gKp5ZByPfMqs",
  "key24": "3bGECNbwuRuENkgvKhuqMNQfLSDwwNkZmeyS75JQgwEGZ5btA5VagUuJNSUaRNrgTNpTcNDrQGEdnCqY7i8JYVUV",
  "key25": "5MePyUMUgi9uMfQU3e2JnThgmLhyvQvcAnwjS1KEtQfaWcK8unzhG94gH13ZtXqx5QsXj1YkfJZ1XbYkTNzkTFbV",
  "key26": "3Yars4kyMeDYZAz7DoesdECpRR87Foz1kvxDJA3qn8ryKue1wpJBFSF6xaa8hVY2cZ8KsVL6GuwnXYdEYUfQWfvt",
  "key27": "ztiCaNM725Xysn9sY9gca1JZGo38Smv6NP4M3582JUqSkeKVCZVVE2tHNKuxU5yMX9fLtGfMoE2L3w1358JRuty",
  "key28": "2y1ppTgvPwAL7whGTwQa6oQfsckpub24XLp4S4djsWEKsSTZoxz7MRD5hKZPtA4oUdwsNzSAonCXFJ5aQ7FPDP23",
  "key29": "5u14dRZaRzhyspoLdrYxZc3G8VdppjiRLizfq4RxDdE6zmBTM8hKWfbz53JVAAvJTJhAxksznHN1C8gMYbJUwc2x",
  "key30": "3EcbYy1tNGdnBje1Lzuxv8JURJJN3UnK1ByvE9bYhatnqN7Diwd5wHxcEzUQ4HysLwQSC4Vkdwk17wUSs1USy9qk",
  "key31": "5h8siWzqurVxQajmVohb88ejx8HHva5HbNrhsBUNGWbubHwLFBVmzrwZ3U2SqUJNELsSL1r2uRAFgTFVEpPhH1EC",
  "key32": "5Fd5cMhUSH9HY7Yk6fXgHDFofTzdKFH6JSxjrDype8iEEShyY6G3QucfkPjV5rheEuURon7tjsuX138Pr82eBSti",
  "key33": "2wTgZ5UZcpyXkqXUbmKQBpEhwDVU3CvQkj8EViYrRUGE9Sr1geBCzP6rx1ShiA92z7pUCNhoReUA79ddf2MJZR8w",
  "key34": "5m7M681pDEnYZWrQdE8cacbdRfXKdsE2mi9kTWgkruMmMjk6egPxbfV2SLkCWqVaGFEMDh9sCjLwvajmeHhEYwGp",
  "key35": "5Fymh7wnLbku8GtopeqPRbUtbyFrwn115XKMHJ6xkB5E5WWP4NAGrPy3wcFPnFE42Z5jKjHnWc54xmBggw31h9VS",
  "key36": "X8uNSwyqUJKTr489acFvY8opCPBm3AEUVp5Z7ZCdTxdwuBdR6EQZiYSrr1VoKMDL89vUUUoteMc9n6myKzxUbWj",
  "key37": "4mYcdZhrPrXWodJ8DMpDuJk399YSuVb1Yqvd5FsL6LR87BBsmCbyCnGmt1PogMmCNm1mK8Gsb3qdPzA5uLFrnv8E"
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
