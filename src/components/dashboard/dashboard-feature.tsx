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
    "2nQa7nsAnefTcMiHFvKmbC2RjGH59Wh46hEvnzA3azpQ8fTT4WTu9yfNGdWBrXMgkLE47ebN4VN3Gyif3Znewg4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmQb4YMqUwHXrjRunxBKjg6XMWWRUKqhPnFmkWvT9D3noEmHDSUAx6hfHU6q6iyQGN5U8s1k2ujS8FqdNS46rB9",
  "key1": "5oG4CTD8zEtfYpCTRG3jiB2DWyMLfc9x2YrUjhNWU3o5P85Ht4gtPyNRDoSQJMdw3oLPvHvb99kg3qZrs4NtkwBg",
  "key2": "4XTkxeAoyiEcYVeyxNaF4NRvcs8mCPUwnQBGw2RFocfuLdw3NSdJ4cZjUYuMqcdYoQ2YyHPebLrTcxHd3Ka1Vg7A",
  "key3": "5m7GQJZ2f742mF1ZKsn3BwGZ595F3VkM3AmGmpwCJXTha75UUuTWCS9nWrogKiuBQwxjZ2JpXAAJrkCqzSKpJpcT",
  "key4": "VwGPRtMZgSRa9QCcdmvyG28j2FoBCkJyXybUw7nRpp19aZXbd35JjVyoFUaoYtBvgfTGJC3UqJPMRnNoDYu6DBn",
  "key5": "3hUaQZ4X8SFgu64GdmzRELrjdcuGeaqAtGTG6rzmqcnrmQqobVCE7L4MVmoM8HqmkDYLAANv27F5kiWwcqQXCU7P",
  "key6": "tqeacvm4TqjwoydjQRQGe7CLUnuAksS5bKk5LHuW4zaLujwvNqgdP1zxUEKRHK3iQi1dqNpPUNpAkEJKrWx5fY9",
  "key7": "48UENsLDztnJBMwFBZhNLvMCojSYPkWoDfjeTi1CfYcYUZ6iheEvqwH61BoQg5dYsJSNSVZJ6uSYKCMDVCpnXFf",
  "key8": "2FFtnDjHbqzHA5RM2StXHYxgtDYZsAxFEwq1tDKXSUYmn7TaSrxsY7DgGvhGFh278gvKqqBSRsUZrffae2g6E95V",
  "key9": "3JVe5ntkbgTkLZJXByKoucTTgd8Tv3BC5rRS8nh9YSj7BJLFTdgrCUhukbVxQKZHtR6wbcHpDPXhuMDjweVvE3V8",
  "key10": "2TmtKQsCxKfzD4FWr93nJ28r9h6AfLDQ83asNV5fW3tymnfEUTq4EMxFuisym3Kw1T55Kh837r1TXAPNC7LjMuUb",
  "key11": "3USZgg9XpTf4NoG9H26f4r95zbXceLS6BiAkJbf6hmdcnupYochKCqeRXu37Zn9hDSUQFXvxvL7L8vU4MPpv3FK9",
  "key12": "rqCnqvq4LtteSsA6sWxLZj8SYkKPPGM3wdrRePDhVEGFv8msvz7ecPUBiz9gJG41Htr15gCvyKpR6hPriuhAsfn",
  "key13": "QcjUXmJvQXw5opL23U4X34tUCCV5GvT2voW3qjGEBByGjLFsbM96uZSg6QuE18uQatvTFCn8KXUzB4gc8Tee32M",
  "key14": "3DQwpcvpzGa85kphmQcKoXCLUyRgYDiE8ThJBRxLMfFiasPkhugtj1NCk9wmRSu8cvp27gys1ioq5LqMFqF5TBNL",
  "key15": "27Gt94JSbMnVcYoo1p3uiwA6p6j8fvATmdoTKLxfNw7438mSQQ6Gy3v8QMxnWdBZi2youH6Mt3Lh5UMqqzvWCpnY",
  "key16": "3kAT8eUybiLCX9ssnkXP1jZK4dnhhfKgebnosEX3VYeemyKprXeYiF4eEUgESGyCzdnxSFobVgue43kTrNS7ZG12",
  "key17": "3Awbc6w8UUPxQw2S1CNr2WNvTASFCJGAHDZRrcdFTmvL7MdNrdeLW9hscNrHcjQUB3Pftd5ebrhaQkc4wVVAH3LC",
  "key18": "4cSWtbncR3nQKNj1Rxoa6fnb3Z9fSBaWsBRZ3htAHNwmLjWXUzgBwFVVEpjbFrtTWqNwRMAfvGJ2JRGUrBhBSS3D",
  "key19": "w6pSXe3JY9scTnN9V84tnZV7pqg1YowKPwJZ6tqnuTTFBGhF1iLkuuqpHLj3gKZCMXopPJpVwacRyRzYNSpz2mK",
  "key20": "y8LeXkzuJrq9B16zC2w4P23p5bjBgA3GHJ1MPWaz1dychgcpuKZAGVW9ivjhvKwgrDEMUAo7dZiiZQzXmVkPsM8",
  "key21": "31NjJrHFuugsVpBaopNSd6EL2jHfwLrsxYJ68v4G4NZJvYgkSxsjqa5iwLr3Kp7uqf7Vq3dEneMrFTKbGqX6zrdr",
  "key22": "5E9XMUTxLpMS91NxKmeBQTErVa1wW5ovAjtjAqfk3QYud5uBReiTbVg366S9pHbdMwdkiY2S5GrX7DeuhRTtkEh5",
  "key23": "3bt5116ppjs9LRWWGni5kJjwuyodBFFo5Y2DM6J3oRYPA9PS1F7YRGPraQ9V3ScTS7z5pAEtuemhigQWS3jUQ5pL",
  "key24": "2Jb2gDTtMZHGXDvfYqGFA8wJ2jMSWiwLqjzChK5XK2rXudCWpzxwSMnSedEuzNdHgMyWDi5vQMRx2sRdEoK4TNZr",
  "key25": "2BvAQVrsjTVNXi2QLe1Tc8gCsUi1oQ5ki2RhCPbBb3wJHP1ExkLZB32WBq9Nykt5MwyuVYS7Ehjk5NURDRAjwpA5",
  "key26": "3uYWnfst5ZkvGPMS9PQ7H9RCYoUzQdDHsUQj5dSfkntooFQmZpBuCCWAJhCMRgrHek5vh1vNoDst7nxaRJSbXfgB",
  "key27": "5AoDzLgwMLVnUzarGGChS35Kf7RHc7FA28gVGD9us7gU8n5HvcigLiyR4P2h9pBqdfbhmeKRjXC99HpGj6da4P2c",
  "key28": "458rwXAYxMnGoFC2nTHDpF6p2JYnBECfoyWqvgwLh2ZknNCZrFRpsmEuFYm5PdJ1hCNHnjthb9oeYA6Xc8ARtZu8",
  "key29": "4pV6Ge7zu8YFqzBUJUgUQ5afw9bPNmGLMeCWXXiWiDkbR4Zvp1YDzYtnUPe2LDy5JpdcFKY2chCGMEzFgUKq7CR5",
  "key30": "5snLBSygnEK34NAfduoHJw5YiuXrm6ynCK5AnSgpa9kisvFr95FAkU2pMC3q6UA2WYfaW1wAuCug7j3BV9AtWN6m",
  "key31": "5Gh5mJptKeDDBw9XNi3h9mEqUv4P7kPznK6jPDLcTnw1S3bqE47YWVxXx5DBRde7N4tTnJW6gWeV4mcHVnXH4nkj",
  "key32": "3G5S23FvJChN6ptHku6h2hPxxn4F3cCeHp3uKG9PZec7gvhBxmGt7y2tsamEWKsaER34fFxMsPgNfDbteGLErE6r",
  "key33": "4HEPpEkhA8kxuFhiByo9wg4tKYrUg1TVKvzN3YD1o9mR3nzBNH8yP4XPr2RPPrroccwWFq5QkkSnprQmxnxZrLfK",
  "key34": "47AHA4dXKkNftkFsg2UtZ2M6E23B8Zb4mfDk846Qr1VEH9XBzCfY2HfHtkjnLbspPEsV9TbP5b59SeYGfzRBzLne",
  "key35": "3VLRP893fcSYRZ3KyZfgdDdQb93BEwm8Mvso7tjfdMkTrLcp9gQUv519YDxXEhdBG6rzYvNBQZUgXdd1sVgFeZ6Z",
  "key36": "2ssTeYzZbySh4uu6XWZBQh1WCgzURSA3xJdwGJdk72pKH3qnMWNNvBbgEwx7pPhssQAYmyQb8sdku9ZTbFKtN74v",
  "key37": "ChFwb1YqTaYUT5ZLjWEXDFU1ozc7QHmxP34KeaPZ2gNghqfoK8q1HqVRnxg9wucW91TP7C6WDro8fehYn8fs5cx",
  "key38": "58qzujAkwQfWPT6Wib7kHKe9oG5gEX6JGznkh8KBAbCvzaBqojtPFznM8dnMRFz3w9hdmxddqoamCWzhNsJBcKJ4",
  "key39": "3VjF5ADMRWT4kznyZCfk94ntmakmvmsUsFNFngKWbAF7sH4ZUWWXJUYQPM3haZaDmevQkzDZ161FUet9uihwx6kW",
  "key40": "4LYFZcoN8cdt1UsYVwTg4BZUBRuDyyfnmJWWRHiXmZAdgLn9vE1UCKawHUuJfHtawSEeRrix6CMTEA4eXLBDFkdQ",
  "key41": "2SYFyW9xBUh6iEXHcyNGGRDAHHYiXyZQVzNqPAaQ8GzrQXwJkHef3Uy4tA1zwSGmT8JdYE1zgfpkVRZaMCJ91jyo",
  "key42": "5D4fgg3ARwM216YK9ago32wy12V6QYh3V1LvvMHFEZMzgP9skJ5qYw4Von1QKVtfrwYve7kw56SHpgbTGogKw3wS",
  "key43": "5v8ehpAhhBs4oBpckrJnmS6To69mQskfweknHL9nKbBafzWQ3Y1CwG4c8dbuQP8hUTKj4VPSCSQ9YdsvAk2p3bbz"
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
