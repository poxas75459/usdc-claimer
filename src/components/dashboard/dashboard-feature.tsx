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
    "2ggpLUy1Wj5hQxGk63bWwXd3LcgFEVALCYGeL3psWRH2HtA3hhiRh1DpRViW6tuMJA1Q4gDmUp4eCRK85Hv3S333"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHW9vthrfgZTAWNVUMTTDw16Ba5tQsnSeZQ8rnMYJEA3qAd5jgw6kiE1cwHx13tUuPnZ1teNb1F5XMnx5Yonouw",
  "key1": "3Zerw2fguocUXiQ8i4SnDyfLuAWqzbw5ewwhQwzxW9wW8s7BLNK4Tne9WhmVFG92qzf4dNiMnTinTcGRprifExbU",
  "key2": "suAwPfXy6bRyDtwSh76Ln5FG1EDJUVaMBZ3NRknzaCA3u9TU53Em1cVdotxGwPXEQVGKQxqTCRAQM1PXXZD4E8G",
  "key3": "2EVtEWzE4VBpAtqCz3KhXNKDk9XaBbvdkQBTD64vY9tRjS64wcAoo87DwBWRbAbnZstifarBUtDTzdQQs1wWgZqK",
  "key4": "5pwCn7mg9PJj7jJd3pqKDxqm2sns7NvExoWKKra1oJ9CeFMDTGNiw4TRS1ztTxqN8ncw2kQTSQb6gQCwYqybQUqD",
  "key5": "4FBKiRQH6s8vBSYoWuL6xKEwzKawoASSAVv9GSAxcu77mBZJbhGYSKm1ZaS5EZXQUySYKCyNJsnb9zLAa1G3UHf1",
  "key6": "eFsj3d1i8aCppnj3k1WNSD8sUHQcuszevQq15UALquoBE25sH6niXPR4S9RN14CcNud2uQt5UfdK3m4KuvrTAmW",
  "key7": "58wzu7U7i1VjMBpuL3eTs2ZtkPsZwADB8FRk5iotwkQewmiKBStVWtNxtdGQimnUj86HL7UwJsJJmVh4o9JnV4Em",
  "key8": "4XSVxj1hNBbKcCEuUHQtXfwE3wLqJALFAE53w3ZgUGx4Hne55G4mWgdP4D3d4DqgQfNYkrom6mMRso5seVFQ3QnU",
  "key9": "4qiTMUaqyNUWqUjiBVrqwkmdbkzJYXMdKGaTeDjV3UUtDq1NB7ZzJfbZ7zKA6mMCaS3ZzyTk4qLcWHviqqMd7T3f",
  "key10": "22z2EzCpobbKUyTpGiwRFH114Sei7Xv8LbSjDdHw1Xz8Rk7mV88tyc3zYQJsNCmpHzcFeWeqzjCJmDdEfebnpCKr",
  "key11": "yTUbyNkr3zUgCFJgJm6uHg7AXuafp16UBiVu1v9vScp5m22pKJcoVoW1um8ihb3unrY2q3aF7Wmo1pTihwwJjMe",
  "key12": "4zMXrUWJEXXU2ta5pMcHPnkXDTxMNS3FJSTLw2ETE9gF6SPHKgBFqsswwWZ98SL34NyDDaZeDzBHY8doBMf92Qm3",
  "key13": "3CsdV8HR6gKJMLXPPY2PfN9ryVsqmxdDmEyrFvRWDfWKeds3GWsf2u4rj4y4UPquyNU4LkYebae8VDjxJPNcDCLf",
  "key14": "34TcRD5pK8wppBEHNouSBv7CFHryycPpCTQ926qZqwNa15sMVtSKVcHC1o6PJxFvUrCAoeXAmcjdm35n9HNnSTrp",
  "key15": "zpZRU9chTtayGqAGYjZLduknT3xTJGeGcLbwDBxFKPees6oGxFh5SHddLbbnAnxph3BfcB8CF2UHWxfHYFPvzPw",
  "key16": "3hRP16Wsrw5SUpCNn4evDrhxhxuSJiBzgunvwCMT7kqzHfwQbZiifWRyDcCqLLp8J4mciqdrMqSd7mxgJm16uJMf",
  "key17": "2nJe1qihZnzd3yDY131oVQTRxHZYhzHeuJJmqypigor5ZRz97mbWZjpdjpeRWX6q25qX1Ui9ecmL7nJtyehbMaBH",
  "key18": "2WmQqyUDmDEqTiyrS7fTB2G2HZoAyXZHeqFRoUSzRa5ZGrLNA1MoGKLMxAZkXBbUUjnmkwmuLtDtQF61FjybgwYv",
  "key19": "2oYNnfazaMEiJ8V28DVMh34tMwDH2LSBttbBj7UPvrfSheRLLYevBZqezZ1npj2DS5V3dqwgFsB8kp8ehB8hfchC",
  "key20": "r16jR7FrNV5iLrGskYKty9GmrcXR1jNGB6P3wWBJ7ErcuddxNVJL6GzBqKF7b7j9dKxUP8xM5CfNVXztqEjP5PX",
  "key21": "mVcE8z9jj8AtWuYvvYgAKRJY8pBsGELcAUJF3Ls1PotX5dCAb39FELys7gGkKRMeMsLERFsoiom8bQLarYaT4wU",
  "key22": "22kFNcedXsnAHemaMRK7fLtx3N2Y3MyXmES5S2mP5iUiW9Drtizru6yB5RJfvVtYrWPvF97TmZS6U1tZRZQ6S5NV",
  "key23": "27TGLjD69YzwsrEYtNyR96LrfvWJjsprPoQYVRbfMxKnDvqqe2QgNSzjQNC57CDiRu3sTJS7JqQ5RPwhbSh6FCtf",
  "key24": "ZF5ikrVdbTW2b86LdnnxPgAo5jc2xreC2gur18M1uxqzpEHJqy7Ss4CidoWUKrRaxUK4c4rrHr7hRixM3ZL17Mo",
  "key25": "5y7yzpwaeRM4j9cg36TrYReA9WMn3RZkVrLhn9xQMiAjg2FLD2P9jE8RZkUG7jPsUXzb7cwvmEYDRbyoRdzfSSob",
  "key26": "3yGP418AmBk6TXYoutf6qZZjo6iKLpiaJFdaEvJDqc3XpSTSr6aq112HLrFGdtxqbcaeK94fnEoe5eP3nwqcBQ5N",
  "key27": "5UhznCwZxgHUgvbpFJCtqfyTWb73B6QgTW8WXoaiQFTe6Y1RkAXV4nZQG389CR7s6ssogeyBBrh9mDEuB9EePGBT",
  "key28": "J2gpjmSg7VQvJVsGEdSWiH66k2biFUe4CtGatuF1pwKp3gutGy53ptUPmc4HH4rYwNV9WtxAbvFWqqfpn1x9vZm",
  "key29": "QpEAhMcvBLHPZeuv1yfKXujT6vvPPBNgd6YsmcH3DoSD3KGXTPXrq9e7zZfa3WQJ47NmjouuGQL1be4tkdBN6d8",
  "key30": "3joRZVMQyNppQ5pRWwJMpNN1XmFisWLL57wN4yhws6KWapMxrZvV3MuLa8vVb3QirBfYEENu17ziHDwjdUZZAqhh"
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
