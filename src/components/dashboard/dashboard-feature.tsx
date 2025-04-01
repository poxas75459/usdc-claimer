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
    "5fLZpBBXNaZ9SEgdwCv3jY9Ro9ES7PifmCurycwFXxtq3NcxPhoSWx7yooRy4gcF8JjFcDfxED9JaLL1M2DL16qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urHgyMK3EAE3uXbmfPcFg68tMEcaG5oFsz2MhmxXw6u8BkYvRGa1T9WDKpAJn75p7XwToJpu89aN2tP5JvuaUPr",
  "key1": "2znkgQyi1616T4Nj5i5V3bEb4QJYmrNnrPeyg752F2LbUjzNFo6FmdtFprfZ9473CjxtcB6mQiESsNRsTUWh3knn",
  "key2": "2LTrccNEHhM73wFtcoEGhC3ERThxgAuVbV1S1ScqdpYiKHSw9GhyijST9utujnmWGMUBLrG7hEwMhjyW7oVpgeAR",
  "key3": "4LcGTaZrh2a6hxGh1YfrjiKbUKLBByJDgsuaQL5Xy6gvpS7cX7xd4RUy1nCX6pSPwFCya228jVQAVHRvwhQUKsuT",
  "key4": "4Ts5v82LwZhv6dCVZqrNFpsHxn6Xhjzh4UvMMiBfvJwAuvPvtgp5BAKMDUCtPh6YvPQaBcX6PVdaHLbxwJ3wiCMo",
  "key5": "4aDXtXEgHi7GbvbL3YxVGMnNjUGMJCFnSLREsZPwJ4nvsW9Z9JkTXm2NYxE5mDMTSd1nJjcp6TWGiz7P1oDU8Y5g",
  "key6": "3AYpQuo61K4VgfwkPSV14YWrqMvGic3RrfeJKkgQXy4DdfKKDgTQmSvdvsehMmY19MtKyVujoUKbkAWP832NTcVT",
  "key7": "HcCxDzsVLy9rsfP6MBzm1MBJqLTDVkezY22g8GNkmhyceYT1CfyjMSzW4TmNUu4jbhzBCFzebL5rWF2K9zFebL9",
  "key8": "7cjH5bXwAtwRNVdtHwwFRtxgSdERcxu3V8rsrhdNbWvHfvtHZogBnYgzMFbUxaMzSHHHBxhY3gMw5JsvrKp8MBV",
  "key9": "5rDkqN9qG3zGwrxP2tzjMpCduMJd8q9k5fCzPf8tL9dRP7Jn74F8SwrNTi3CyXPtBj5rsj3SQdc8xt7b2powauBP",
  "key10": "4xiK2RaT98Ebh7i95YuDq9F3DEBs4hNUZRpNMXWGB1KFuHFKhNVd1baX9Qjk8mqfrjRfpp7s3CdPFr2H2S2hjbh6",
  "key11": "3wgmLievEFz7VREHUFnhqYisocJreSNDWJKuCQdWcd4ttwbiQh7SVSpqY5w63B4QqisJtQVT6AS59TYqa3igm6MB",
  "key12": "NAksmp8ZPSmMHSjmYCPaFAFvWsa57saNVqdAPZ29mEgYGwspa4JabK9MtJNKCXdJA1DnCGw736q6GrnJgHSMTT1",
  "key13": "UxBUKHkNUcr8doHUXw5SxE69Koe5FHD7p4qfnNkZ2X63kLVo7ugF4qt6Y6ooJnuUKYJkmGFPByLZt9hZa4HaCjk",
  "key14": "5C6RRB8pZeYsg4ridxWswSFAxhopYBDP7CXhf6zJ8rcFg3KnZcuqs4vfEmDwKHVvrsS3cDg5MM64Zx3W23NgXGMu",
  "key15": "2BkgZbvSuLr8N8XfX716kD5xA6riJv4djFA8zuxe6kKUGhJHAS2R3DetFr992skzjAdR1zqxXwbmjPZRU4cLSoHQ",
  "key16": "3tLDykhukf6pWW4gUPHZN59n8P7d3NzMqeQwSR2JNEBFguVzDP5M7AhX1oNGUJeEASCNHCEYn7oZ63e3jYdCtz9e",
  "key17": "41hRxcwk3Cs7B9a7PsbqMsJAyjQY3nGDoUwXTH1LZKxEMpQjTQnFGMg1SWHMQ3cQKUUMhBR8Mju5F9uEeZCBM3UQ",
  "key18": "3G2r2rbqrj3rqYeA7ygAGzbHAabCeiviw4qAfphhZjecraWoYm26UJfHrJkMc6Yv2ov86HBWo9tysit2gttYd29W",
  "key19": "4vvD6YGQ9tnEweWdamzHF3SwACDeqXzggbFkbMqKT6pkhB3M9upCqJBW5cUjvYtbFzUXtztzaUe6Bf4VqkDrMMMU",
  "key20": "3zLsF5RRiFwDHRA8ywFaCGiUGroMViTmYUYJFZ1QEsaxLgBrPFeuLR8RxGpSSNzXnebJs17RjUAtz8i4XR57xSPG",
  "key21": "5HJnSdCGeJ2XqkgMTSoH6KJJEiKrmiQgC4inXJNxbDHkX6PJbo9AgwopE8NHeJBs9birXir1B7uEW5Pdik4csWyy",
  "key22": "4ArQVwM3ic3z8FYbtRgfQ5zjYg3k95U16nB8G2vp8uE3qt2vX862oMEqa6Sb4NDdTdk7mepB5XbLumB6E6DjEkzq",
  "key23": "4RgHqrZXpjyLPfUS9eYHpLwV8hQhFKyGk1HAbJmt8CFc5wX9CxX5vjvFsXVTij2qDTF5Bbp953NvRzssvC7CwBf9",
  "key24": "4gfS9hp4jjYPPXjWQtrdx43W979v31YhQpawmbY5VGMt4Gq9KLgdWBtKSHsBL3hFXNGPNAVVoWqzH2n7DTBs8kZj",
  "key25": "5JjX6xoZEfwqcAEW4jS2fWFPN2iX15i3rJSv3o7taowXZFuxkyJSHVvN5ht2s23h35VDkASPsxbwdFmgQu4HXY15",
  "key26": "5XHq2eHmkpKYtwPFsm8MM1YJH6vSGGeGetXDf6Wf1jb2YCqiZjeVwPTBLfKeD2JbdKk1C99BAoyU8jYbQQLe5mee",
  "key27": "M1PSY9vQzFNatEHjGw4AvtaFveL81qHtDezVoZRk7Gx8T3RhS94Hrg9s33wWCD7RcT2pF1BoPaDQHGuqD5634jj",
  "key28": "36czkWTqPrz8cyRai9xc9NdFxVVZGdS59NZkorhfVb6jewPo6fkteXXxg2B6L4AED9UtxPumxs2ygiB9m5xv44pc",
  "key29": "5EHbMs6LbauBsu9eoP2NNDk19js6xHvyZY8LhAdPaJbZ42Tryh1Wkz37X8XXdaq83eHoPQpTMeSR2itcX3MtHou2",
  "key30": "5fiYkJdx4WZyjvFWDVcD2XUdqN58bCGcFWxuNFheXMaM6wKcHEZx6K1G2usMr1z1qmYqaphM8T8mYjRHYdrW1D1y",
  "key31": "4cnxq5V4EWn2ZLeDN4cRE6Cj3b1GQRKJ72g1bgfVCJHFA7gPAnhsAaKwyT6vV3xG76PZr785P3iukrwZUXJRUq9B",
  "key32": "3ZjVyBEkfy7sBrXE54uy8aaugWVMFzBCLUKwQCzEKcNFMBK7Wzw98kMwni4ng1fLqbuPya6U8k6rvNRmanhxLtu5",
  "key33": "JuUqcoMdgtZiG1ExRV7c5nSYFjxJzNMsy4MQsTb36Hp3Tx2286DKY5hiV5QZxKFrZuNHig3JmQp6EJpr2MVvoaa",
  "key34": "3TwQiYDNYVo39XTtnPMCv35AqyAmfXvwrgbdaGfMBt19xboxLg7zao15zV7MZYZc6HGchCiyxUMDuCujttQsj4SQ",
  "key35": "3d7uU2PA7nMuriRcoktmvKJyP1p5gsfdU2zF9htqaUEcLxJKoRhBKs25Yc2XCaL4XcxzU6KWiET1cAUMkDKs7JCc",
  "key36": "3udpaBnjwyFVrpuJ9NpCGut5QnNPapNggBrh8wYLBmCYWxiwvqjTJr4G7dEkTrf3bBoNzSP8sVdW69rWDwBrxUpS",
  "key37": "ndoRFi9ETZGgb3Z6o6qobJDFF9Dw6am2L9WhjFxrKGLURuubSv2nbWTupHZQmfMK4oWgiQgkBECo3J9cebry1Zw",
  "key38": "uit3yYsni2yYuCU3q9LzskCYyPPG7k7tGebPWJaQuqztiGbvmq8ERZKUpLmdqEQ4GpzSWiQxLBAc9EYVZnkzsre",
  "key39": "52pJHjMi4omfMVUQYbizxthm5CerxvAT4b82n7sA7DXZmT5TuMP9swZu7ixRUe2vqgEkNHPG5QCNEivrKne216YF",
  "key40": "apedUjJD8HXgEWD5r9pdr6fbwB7HExaRPzv7LR28iasWZvMTxFS9ZwCtWxigEq44ybheqbDJ5ZUqHp3y2uEpogD",
  "key41": "3diFyeKFnRVwfQKNUZunNexBufq6o5L5LtsG2rdk1YSgjQhfVjJzgAXXc7n6XFQDfQSNCpgzSy9e4UL1yXtsvPui",
  "key42": "4wU7RMbbxL3KUKtoic8h24uXuVdnApLh9VfkQDTNxunsj4t6ifEn7PcQxP2FvJfRZP2Cn7o95LRD4s65oKnVWrpe",
  "key43": "4Kw35HbG3fgdkTMTS4onSRpYP8BV1n85jBA3w6rDEfNG8E89TUqrBjoT8SWo1w51FjEAmbJK58M5r24wqmHjByKe",
  "key44": "4R2t2SL6ybCgiLTdB9CrN8ZMrrjVcGFwkc1Wnk68fdkXt49szgsksRpfJqVpwho4843yaRoa9oMJxQzP3KsfhSsM",
  "key45": "4rWSSQJsgYy9ACLDU9nzXND1749zL1oy7g6KCDMEn9M64GMocEvPhaCSFX1VP672iyxWCqYXmVQv8gEF9VTLXGBh",
  "key46": "yPqtn3a32KbgCa4fAQhCgrP3JfwMw7Z7kavSY7hV2YiwiCJQWnbeKcjbKuSkhYAjyA5zYQEG1vMLk8W8CRVWizZ"
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
