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
    "5342YjbRcf1ZBZugzZrYZSWYdJgsrJ8xzMUdzEworTZfqyCf6k1dZ83p1TUEoC6ZNu6NRBdpYQ8TM4uaj6Tp3RQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMViArN64gm4Cqi4M2Z2caNdRu1vLHSMevVWvd3Er6ZxwWBH2cuZQHGwQyET8iLXHk9Ce54cki9p5NiHuZdmrjC",
  "key1": "2hm8wt6ULKwah9zn4xMNqaZPQUWDQq2jYjurR92Pb9cFBc9j9vbdxWiBdSxuZGhmX4S1SKoRBpjWppKMjcGyVQ45",
  "key2": "2jw7BqDiKZvdWnmvZfyXYTKLQpXQEqRFfZesW1oZRmdYCuVRBcAzDHU6CFPbBfM9VmRNv5ns3Efn97SNvWyuVL1P",
  "key3": "3yajRwqaRKq4xgRrR8SvJ7maZ1SVco79trD2eZGrzuQNxFeEDQuywAaehc81ifoJW8AoyQiZBL4NYMJhZA6gq9Dk",
  "key4": "4f4xmVFiM56i9X3ToZzdKQVfYPFJXNskeJ9QHsJkdhwYCP5qBHpeHbMRk9JP4xeewKbAQnj2tsoZkCMw2swNqTcL",
  "key5": "5zjD68U8VNGGH7iGcwhK5cbbJek2ntzmsk7E3VR45nRGtqJaZSQkNM6ewELVWz6tWumfEsaAbs15kbESvkhWGfwy",
  "key6": "D7op7RkC27eCQgkZKzTJy6pTmfkqMveWjSLJytZGzA2AsRNzt4KKKC18NJVa4SmP6cMhb2Npd3pq9kiZRm52Vt2",
  "key7": "gsPhPgPYg54FBpXRVd2fvRamHm3Z3F4cHhRK2jDyiaweXBYxGcq4T2N8TfPKJK92A9Senmtqt6F64grophRrR2e",
  "key8": "22pZt8PygedvmyTEniBKCVvRyNwVCp2ZNS9eb24yH2WWNoCviVFz2fAfuMD5xU6mCrvDqkfvA1QimKKRKiqToGWw",
  "key9": "4Y1Ln75vxujsWg218HJ1LNzt6HFcF4viNnsZbTAcrRJ9h4AVfecFG1U2qwiSZfZ8QSDrtLjgcWGmjQRzr22Hs7aZ",
  "key10": "28NgFuYTnQVgKwQJ7P1FD3WTi2qj7pYqTViVH2B4JLaiHvnTEsgm9z7gFYsT5RHJo9Qo1tT9FdnXb2zhUt1PmtSX",
  "key11": "25U7bvfnVQoVVvyDzKz4ThQiDXETcufNR4TjNrbCs3Qdb4YoL4WchvGyW68hy2uTGxKrrTFi6tCyTzBRpypGpYqX",
  "key12": "544RpQP15qtJug2iYKvCsFDScmPtgaZVLtEjb2rtmNdJY4otC6pXdj7t3ftmngk2Jjr7EJurRa2miQWXtKSHfYJo",
  "key13": "2Z6zxbLfr8bipq4zga2crNLEwtbzdLA15evVcP8RsYDfdDi9FDVswcVShvKRA4WV4r2WEteAuJj7YqH1KBxCWbdr",
  "key14": "3GyUk2ruRcb9yBy5TK6td4jUTXhnWsJRieAeLq9Fn7EGd41EvmfSVgEUnFdXiktMuxVhdTZkXPphAqCdqKpACdBD",
  "key15": "4PDkvjqUAncAKNfxA2UNybBBs5a11yVXWdAK1h5E4afUxtoNWTWytWAwpnUVi31rogtCaaNHwGBYbjWSTjX5doeT",
  "key16": "5Np1knbfgmzExAJdh6k8vc8hFLcmBVTTNURLLF1P7nRSs56JTRVr7hEXa3HEJECNsbNU7NDifyU5pru1G8B1MWFG",
  "key17": "5G6XKUd6J46spB8BqBwXg6K5fw3FRbJmEhK2n9BuPY5brFUj4j2a54kYBpizCb7wqs3NiLxZvpbb34APvMfzk6Uw",
  "key18": "4YQqp2sXRHm1ifoYVfSqc4MzgvmHKixe6TA6jrtbC7dSMcE6wjjTcgg1dfHGc8vAEV288ybmyFikTGNakAj4gFrC",
  "key19": "KGtRYmufKyM8YBXKpmCJSXUB4msF3iRwuqC8MezjtnsTgJvzrDzk8FVVsmaxAtCMFGMGx1SXLE6DS6KwnTJbNEy",
  "key20": "41NawDDXWa2oq24eXx5JmLmJSMEm5KQBjNNm2PBpfTCf8nQYTCLQiPnvctY6d4mUHn8YBfaj5gzSJAkXvDtD3heC",
  "key21": "5yBgAUCQB6UdSucxzec4p8dJCQjbAowcDkntWbLZ5eKd12cPAC88mhrKYf5Epey5Qjp35jfyVsmkTX8om9YK6BUj",
  "key22": "2BHevLMXuJ8y2JDdHmcke2gU6Wfz8oJ7N1J7JfJVk2VQjgMwCBUMKkkRWV1YqqdXQ6uAjz28pHzbTQCiztnN4dgh",
  "key23": "29oz7nmtDcFkTbVws4yWoCwQJ6ZAPANZjYjXqPgSaJia42B2i5zF4Wij4fGS3KBcaRLHd6Yd3wfmZy5oGVqMBjUX",
  "key24": "3vDkz4bjwsVYMsmYa5FwRyE1BEZYjrdAPouuQH8Mxn5PTnzmDGUoVSmxQyj13Dauqm2Rdkc6UZsLVrwquDLzyNr2",
  "key25": "5zjMMsM4bD9Cvy3UdTG5fFxeFyJXKByeHDJeZFvPfGiwM6nHi1YdsPde7tNBCqbMPwSV6JwpL9fH16AwCutfmPhM",
  "key26": "2UVBu7nMwF2scytuRExosL816WDbcHLukwD1rmrcBurwh1pzzed1XKUuGNwW5hiELngytp5QWVsg2by8coALdA9y",
  "key27": "3teydPGYSWDsXnBckiAdtbfmAcSmC4QvAWyBXbcwz9YrPbaZL281QquWenW55hNKqWuoMcdPVJiNbJqFB1ctNRMC",
  "key28": "2TGDCYH8DZTtDgW3XUpUdsBw8ST4Q6zi3UvzW6rMMt1vRPtcs5Y59VUYXfMoHyXYFjss6fpoUfguXmtVnw1zoYMT",
  "key29": "2feKBy6wfqZYmgfvE7qZ5u9tRzy6oYLmxCEB43CTEUb5x8j2Lg1vd7rxBJKDnGysMdAHiLoC3Jk4r4GqpZGPhuTc",
  "key30": "jC7JBK9FxjEmyULSroc263cSphRBhj9tBWGvZxKJXeTaM4iSSvZUoKEGQhez8x8VNtgkT9aYbDg6WrZWL6GnMmf",
  "key31": "hRDw568TLXPccEWiWgdTizxL7W21za4L2doLWSWDuaZa5hu7AG8SVsPwwBEWfeKqB9ijzLjSfbq4AiKZVarcVhQ",
  "key32": "3wfwP8zL6AUH3qdePoZiXYhaWKJduTDX2bw1pvjyphoU27y2oQJbrDWivQJXA3qAU3p7PdnTVMQzCTjhtkfeQrv5",
  "key33": "5Ko7RZaDWzizGTFcFf58avmqK5EiQN3aWZEtKTSEGtfgyepnR9mBuh4uzi4BDbzJc6TpBepF5fQX66npdizZe8GN",
  "key34": "4THwqnuGBJ3nRpeoLdgLDLMAKdXtosvAjduxX1pF2b6bayxN5uHPWfBdgdfsEWAs4VNEEBvUNFgu4GG2nFEnbYUr",
  "key35": "KQKQgTXmCFRekkusTEsaMVupTDgtX2RUSYaGU1sZob4TD2tHgUVJfT4s3sBsuRL4PjEexgtciskA9x8QpZkxNC5",
  "key36": "5AWoB5tTdypsphXAPez5nvNsXrEGgfUcUKGsPm7NYzRnuUzCYt4sh4bB18wpKQBajDVYgZuZS8k3ibF1kHeTrCXS",
  "key37": "2Uvfsp1KqufGKwHXDx7oWCvQLELUQeBVwnb2akCByhi96G99AEv3TBg5XGXiPo4KcQW3XVH7eDQTfoNqS1HHiqzm",
  "key38": "AtZCd4TSXkBbzH85LWyoCYNL3jj7C8FQatX1Mk5Wi8RbLbXytMtU1TUZKkaexiS5cvrrpEDbttaHajKhY65hC27",
  "key39": "4ox6VsbQp9UafL1aH7GrEY7nS24JtyyEBdDKvPqvTdVUCRMWivF87m2SaoupU9k9qXTnUedFpZ6cnj6ZDQK6Rugu",
  "key40": "SM1UMkhfsh9Erd19pvZPez4GvCaXN9H1CC8GcyEFt31dTb6dd4EEjsNThBbxJHZFTFZCvPoGmQh3Vwc8YrEfArK",
  "key41": "5Rr7t2zU8NGqviuhBwC8Nz4hntgVXWZ5WUQNK7vYcT7ysUiwBBdSvGSNi7k1QwhKXYN9R6CSgQFmKitfS5SYmj2m"
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
