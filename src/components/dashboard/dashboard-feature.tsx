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
    "5KD1v42VXg3ea5b8Rw6fiFMQRYWzH6vu5fzYEM1Gv9exzL6TAK81qkX54pJ8pjJEtMFmXueXVKaMLo2AHKFX4vfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fok9XA1sFfDVEbZztjmenHgq3muZvm7tjg9SWRHQMi9fq2pknq4Z5kuaV2eGzwTGVgWskU8ZhB4GnbmRvQzpTpR",
  "key1": "218QVwX135Fy2AjDd2o3uzfW7MQf3zs3EtsyfyWkR6C8fZ6cpHBhp4iYFiBGhyF5Xy47USsHbsje5HkYW91Bd9gV",
  "key2": "4dHQxYRjQDhzZ9zdJn9JnkWPA8jyE5MiDhoymxLqsmvVzpo74DTvADP93YUmNRtM2b9erQBu2kKg9WuSmTVqcep4",
  "key3": "3yMz3VHWC1ZKEJiSWRxLtbDubLhWqJ6PGaCvDFiecr6mCwXvsTgWKAB4uZCgr9STAs2gsk7TuNxxXFUzwW4K5vn6",
  "key4": "29rJssLeCct52jrEwFPzzkmNVsEkdGDyW3L5ertY8jzSV8vhGT7neAMx7nGopTifiE55xEDZQ2gFeJriobbtcSTU",
  "key5": "32c9FNkkFGCW9fu1tRi1sVHq5v2RMPT38WzANo1o3czvCkkXxkFW6Xuf9KWYMsCMjJ6GarmSKJBsK4wWQpktFQ6b",
  "key6": "2C7GsqqWt3fap5Nev18nTmWUzwrM2Mhj98nh7hF56BQ7ZoEqXK5XiDGgQ1MriUiqSN1fzpbwhJrRtmxAx8u4qTfB",
  "key7": "5bVnJqQu1Hnq83ux1anagqnimKKPMM6h4RnrQPipwehZuAe5aQpvcsbZgBNytGx2TFWYwTqHfkiwL2QCWFKY5S8w",
  "key8": "253wev25P2HPJ8XTR8iSCbymBJnZFk7VdrbD2v14mLjox8CtTDLcw4vyMdiQVXwpictiwHq2xFcMMzcy2LRqUYgw",
  "key9": "2KH773DiroHhZd7kAjJyzNLgbHvg7SACsFjcb8VmKM2u2yoRrSAnzfCG36xbY9LhSmGRc1UgHkfEsgGX4h6o8daF",
  "key10": "SazhJSccK4o5GdrRKYNnqMuLjoYkFZJA4t1ApLxk9Mz48AJSxmUayzQ1ha8taDod3w5MkAczoqpHMJ4zA68NDSd",
  "key11": "4uBh9kEm5SngXMC4XYJwLa3Gn6JnxErRRN2BnjKLf1x6BRKNtq7V7uz8iS91Dg8PuTRqb1nwgF6ckRDCT8VANU43",
  "key12": "362TwyPy6bwGsjt4DnNytZzG7KBRYwRC49YJFUUB18MQDFGWB7LJmoTPDSLyq2MhTJX35fSKPCXupV133qNgGv6H",
  "key13": "5p7utP7X8RdJjCW8Lg1nTAT4fDG42Vcr9kCYJje1nF8wcJFzHGRsZ6VLKL5h8UcYwzV5bB7Kb2U72ysiZgXSb8u3",
  "key14": "5CLFdWXHMGB5rL1w84PZfL2YnNCDfMs3FLtWC53Ryw7rmsBMhRQ7qCt9FEhgCMN2915pNrPoEQK7EsdJxMRhjo1",
  "key15": "325D5B5VazZJqoyvfw2t1kji6KcSq7nLmYj5PHu1RVAZkRwQZX7QWhi8nz2w1QWC54J6pgQMfrytT7ay53ezZqux",
  "key16": "3C4pRNJbV674PYrC6XLivyhH2La3xcrrC8ewULLrSxtGSekZZMcVnRyq4Z6AANCLMUytvVPThaT94kTYh22V2Dc7",
  "key17": "4J5PtR6K7FHp5vc9pzvQLWjtVXH6vakkqxhsTtaqyYhmx54GyKAG6Qidhrbyd8PDMHbFWq95BdXjejkgh8kZFa2e",
  "key18": "27vnwYLs21drqvGxuU1nWzqUnaqdkbMisiZqGwE97DUuYx2hNdEFDVMGWtf6sBD6nxqrRvhfywxk2fCTpp6HkBLn",
  "key19": "YTXoXYTTQimCixjKUyAy8QSkVeBax2zFrFCPZASQJG5CoSxQLWzJKkw5CE88AY9xsXUUaRyYxb48V6R9MewcRpK",
  "key20": "3QvAmgKazJvEy4JbkUQMcMkaqL8Vo8gCWkbPgq1mirVY7xeZEfeEe58E9bvjCrwuk7hvF7wkWrC7LAKjczzGsCAt",
  "key21": "3td4eizB44THmSSAjQvBPTDJxbMHhxzgXZjksJPy8QXeYM9LeGypnx2RHYnBoSGswwWzyC9rzBNYR3KULUMgguB",
  "key22": "5L89JzSVLwb8qD1pn4ANtypWUyZSA3EqDJehdA4H87fFzbes5veRWZVR9t2561MdgHC6YdayEASRhKWALipe6bSj",
  "key23": "3LJLCDtz2ihtRFCvGAfytJPnfPushNpLAtyWrTwWwK2XLmAK2YLgQ1GVs7GybxjDT5GH5UhMMe5XjpF5DYHKCahy",
  "key24": "5wXH9vvjcmpBmJXWPgqNvaPbo5rNLK4SDowL2MjbpH9qsXFPCEmkUc8x3eQ2aca8WcVLaDFJrfumMCSspytHyhg3",
  "key25": "32QqTSchtjPkzeRuJe35V6qwk7ZpkGDVrV2J4CBBXh7Z7rpseVcgwqFtWawM2yjLUecg1dTrijDYfnWpYgpMoGDD",
  "key26": "4kVQ24DrtedYCeHLPPyX9NDaQMiKhuE9d7KQyVVXxobUedgmTABHvdWSFNftg9kEx138GR6NRZe8NBCfocVL373C",
  "key27": "3uRCYxTDWJRPKjwWdQRkAAVcXuiRibqWkHC9Z6cpKsTsXi347oSXKEmcQHmdwmxqvtP97Tj1VWjagBdNk1qS1B93",
  "key28": "5BUxk6y53B22ZNYL8G93KpmuySwy1MD3WeqSRhtX65LbMaM1xrRdNbonk8Gynzs34YETp7K4nBQEVGZfMMNk9UhD",
  "key29": "futrxVKabQmtPWFM3sEmb5CCDE8tfekjjwCyuS3Eo4nV4TXHeiMF6wVF9bcLzjpebgeWopj3fCGaXr5vhZ9idwM",
  "key30": "v52HQnXLgyU8fZyoEL5kx1y7RRdYhS9CmsjXrAgAgbMwsMwrU3n1jGEZhhQWdtVwioN62p4u5QsNw5uW8UvnwHf",
  "key31": "3dEmHqcQBa4RZsdZ5UFyoH9WZJjUfCnbtwXttcKb2Kp5XKwg8y9DxCFg24MnLHk1P9r2T6uVs8tpCj7WwNnSjPT"
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
