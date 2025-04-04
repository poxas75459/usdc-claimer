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
    "22FKMAGQw4Q31NAMB922ZLd1Mj7WVcW4fvcmHE1VUw32W3Jt1vX5mEA66DxGZ7XQcQe9ynFQB13dFWSzRWFDWV94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNuKn4CbgCrSw9HWLKWC8L2oXoy29yL9jKtpEX7ZaoqujvQsCzNdnNh8AnC23XjUfSHz6dMNcHtnSYcV17AVxNB",
  "key1": "5vXCLXAciYkED2xFqzBWHL1J1HngxLAboHq9zeXb5vrJhr7JDGmAJUNW62JRQw8LfUL4SHxnrQPouRZk7YMLPFHx",
  "key2": "5UBcmaPVGkFMFnkbEUmmVWCjfo1F9YZzav3Wwup3yT81e9vKhSFZqh1NP1vmTrK8UFtfkovXi3bZFhxLSNEW84aF",
  "key3": "4qzgQGAmWq5kGw659NR1fSENpr5mvvUcfgnrajPXwYEQSkMaLHGiV2NH95L6ewSw6aP2ufTQdRkGLBcQMaMNF7kb",
  "key4": "Yk9r87cDmoU8y2nmyNCbZYiegfGdNpizZfnmgJPttHeiQ9rgBmY95hpQHF5KkDHU78h4aTEGCEJ5LYaDCKS1jKg",
  "key5": "4G7QhYvYwCSBv5ZpRxMN2ejdJmr5MGw4pH5XZZCqmU1aZYoHpipN5cvZUQNprmtAg4XMK8uhXUssE2J21p4FwBqF",
  "key6": "3k9i46vEfbzccLFpWCVGpS9rz5qyF9WSqbecm3CpfLLwnoijrpTFcvtBFbK3u9h9LxNTnPW3smZLBtzz5SE2cCE3",
  "key7": "589RK4upN5Q4KcouzcdHNKNRxaeR5eP4K5WYW71TF4XYfkdwKGqBxtEs27Qwss91HzhkYnG67pjabD6zUACcJH2k",
  "key8": "2coQgqRsn3wgL9qbUqd6G5GmU5FZHHB1tRwhDBXWBykvNY1K91funK3VcGigPgFzM1awmzeJHnAPH65B1x9bgEzP",
  "key9": "53xid6AcCJ5GUL8GgUJBg7nBC5YcLW6thjcP9ntxr8akZXgR2hwvMR9ZxnN7WXairWs7EhURsLWSukvzVsCkbiDq",
  "key10": "M6xKqA7YnMsrpfWiuG9gbNAcgp8FRm1fGk3QnmEtNZcXLb5ZKq6LZy8PQC2mwaRQeeNrUKJ8VN6W9cqMbQx5MFj",
  "key11": "3LBCaQCRfCcr36DohmRwEtP9RA9BwD1uNByqFSaYJZhj4oqeAtXwF8HGZHpEVJrx2DcwBWgrSLe345TzqPykgY3c",
  "key12": "3DmbMLzRnnvyyQsbz6T8GNX3hddiUDMSAQbP8GAMddR9NuWAsmYhWoSr4n97g7grAf9YyQs1bmhYtKPeXRAb8KoU",
  "key13": "4aXjNSWe7CzPyCX5c4wREYnvcfzPjDwwdJPeHgPG2Xf7omAjbJyDjVKTjWqhHqKsh1ojasKLWanbj7vNt7qwoNKH",
  "key14": "5yY9cpyrheV7aZxW5XJL1kok8dVodYj2Jji9eMd2dPAQMsqZA1EhQXKq4CWMcmcPtnvu3Jo8TRpUWTgoZ5SSjUmw",
  "key15": "4wiw1BSkM6D7nsqYsFCkmLtDNATvCwtyKtur87cMZXhKQvpGJPtQND8Yk21kJvNhb4twLxA3y1t1c8uoWcndtLUN",
  "key16": "5K6fVup1JuGZuQUc4dJHpn66koUfZZpbbVkmNzf5UUZhjbPsd77aMC5uxm8uSEL6wUTjERaJvQPFcr9chi8hsSv4",
  "key17": "gdXFncCtV7rodsLkpQfKzA1T3YVwhFnBP874PE1pkmHnHJKdEZpA8QYBWvaX8kd832Gds849Np7MoE531SQ1Avy",
  "key18": "4cihPZkNdbW6j6dunW6CZPMrzXDekfzBNS2Zc78ESPHwj1k1sZa9q93nrehxeMkiv4GLLbWUvjH21cLaAPUEtNa",
  "key19": "4AYC3XWZtZF2Y3N9KwCcfJsh2a1sLU2gg22vmnkn7xrprDYtg3R5J7XUMwPRjbF6Bry2F5i5ympEdhkmyeizVCvh",
  "key20": "3hM2LDEhNNoUXYQxEWtod52ecboX4UY9kHgCgsDupBAzeSy8U11amJBn9fu1Y7bYt6pTBcYG2hzzMnod1BKYHxWp",
  "key21": "65pQnBfR2d7qWPjfaYroQY6jAEXdugbZ67A613yBxwr31pANV5rTKDAnGwguauSTcCDCrzeBcdhmZxb8w3kzTpbe",
  "key22": "58rQ6FWkoB82wiYyg2RZ182K8HbVtiF4eebBAS5VGcJz1BmgCaJ18YGv1eLsicmhZUE32SwrF41ZiT2HLzfrJnfP",
  "key23": "3ZrrdhHD17vWBrzLKd7gdghHQCYfh2mVa9Fx6mwZmwaGnBMLpnR6UTs2VgqAYw2d4omeUvJ9kV7FDCHguCEyyyK8",
  "key24": "4EcvtBn4hfgxstedhLWkDHQ4xCNATaP3X62zGWoYd5H9PtnKwYv6qabfsYLKBTMGjtKnZjVBkUimFGnSNJTTgTV7",
  "key25": "5SkAisBicFXPeTEpotM3P3d1rp4GQfRB54nVL6DY5Ww9XqSkgiLhqBvgrcR7G3CNmBvinNCJeaQ4xmEJGKq5cG4q",
  "key26": "3qEGsbSMN1C4kEQMdVAHjeS6uS2Rwib3Eo1iCzajjQbuwd3qc9CJ8Tg9Rc6nTAyZCk8XzYvvo85G2iyh3fuFoo85",
  "key27": "2f3zgRoeECPdPBUCyxqqpJPubrLc4pvaKR7DSTw66yB9Q9rnHWSdRApe8J8ydq251tezbrYhxUJDSwx6RRX3h9t1",
  "key28": "2Ae1LrkmR8Aeu77PrR8xcMerpufDD3khNTkjM6gSqM6m43cLizzzGC8hpZtTsQs9KbAnyvJozP17aPunfijuDe6P",
  "key29": "2obmqQQJcia7P12TLfvChqjf8GKzcDEwjecQx7quKgfutnbxFFCmebweTqyAeWGxysA8mLV8MSW59xVJhsUwzuk7",
  "key30": "5nyPjLhaWXqgrUZhSR6mAWFeKER9VrtUgizmJB2sp3jk72oKyYAUjPJG1F7vC4YHmnrWXqoyUYvtoqAGA3RN4EVZ",
  "key31": "5LshGhxP69Qvy8WesAZ623T3zRNALw7kQvt9YwLTWErDWRwZGdSx37xbTrqqf22c99qngaJ6pAo9e6sR2cTsWNgw",
  "key32": "5x9D76SKtWufrz3bNtxF62FsZMYZpucWhgaPFiSLsaJood67dmtmumxGML9RXwXPcsrzAp9FvSLLr6x8GhUfKufr",
  "key33": "2AvYJDwhAceGXeGVGEHm6btKE4kZnB9wbdx9QuonAwcJfnSL7HL8QfXfA3e8vvXtjx72jgxwwn2d6V6b7h11yFik",
  "key34": "3gK2yvQZaADFRTzWJxvurfejK7s6aYwRzGfwQmug8tLC6QK2s8AueJB7BnALKm3GwH1PdsWehAPsuKmpB7Gw9x3J"
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
