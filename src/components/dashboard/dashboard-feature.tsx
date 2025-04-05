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
    "4SJX5Q3RmPz1nxDGqZYiBPpuiqjWSmkfgWCMFqWnjyAQLZFrm1WZn6anWs9MVH56AYXEWgPpYz8EDVVit39QCcPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vebag4t4iP3EiqKSjzN5DnnPGGAbgMBqZuBE1jdgPQG9YEiK5v4yoTUc6W1yN2G4Lr1RHp6Nhb12FZRqEFhAoi5",
  "key1": "5jNSbqGuyvMqhi4Q8YRrNDwD3fYQDrzPPq1qJ65REzjU92mqrmKVMurFgyXVynuHrXX3AY7pajGr6zvJ7n9mZuPR",
  "key2": "2ypg8FZkULsarWr7XLb5TV8Y4armwd8hTkMJrG1zEDKWXUxNZXuoLC7mniV3Z1C8t6thxMhFGUZt2sew4kX5nfsc",
  "key3": "4eKnz4hmMeihpoJ6NfjrYMwidayLbobXeBFySDhdJh2LZncLQu46UV1rfCSMCrGmWBpe7S4msAFZGrZjspV975Rg",
  "key4": "2avG75uUJchvbJhELrsTW7fdCt6ZmvttcCmBf5pt9exmDvz92JuU7gAWptMuAQx8o5ceyL8ZrymAwrY4vpnbWUHJ",
  "key5": "64BAVyEZ67Q832DDvc31gThgi7ceSd5JXbpxZvzF9QGyhQc9NijmTKbZtbvXaYYKjsmDZ7uXcRCFrfbHTqwbQN41",
  "key6": "4xALSPDt4w5naJAduGg7C1GBfckhRkn4pELUy2Ww5JEGjaE66t8agSvGq1xYUhrsUaLusDvdiTXMxLviqnotdPDm",
  "key7": "3x9buJvr5iRxzSaRzZ7tKNsVcWqSCmzrWFAcJuyh5MdmX8Pd2Q8qPBE7H5fgmPZa1mzkvw39gRCsg8rwg2sgqiFT",
  "key8": "5D7aNjTLg8bPZqkjd5hd3pMeBa7yUq7insRSHDeoSJ48oTh353cAKzDR9m1KwKc2VrSGxzXMBjn2s4UAZX6F8Lz4",
  "key9": "46WNb45gyx1opAHmB2jC7dRooGhxUPjLhq3hvhwzacJBKG8zdepfgEeppBDXvtb9vuAo8rY4C1xwm2cHDKBa5SSa",
  "key10": "3sBSPxk5YMseqR61RL2XcRviZ18fqNSNmfNSJxHtv1mj4nXENKqG7sgY6o7Tv4Sfwa1ds4MuWAwYUQsVoEpF56eb",
  "key11": "3pmq7PM31MdixkEuXSzqTaKaGBwRKYFYqkR874W52sZegTAWXJmuqetDiyDV85RRsQTgeMeM76PH3QxP9RAK2TFz",
  "key12": "5Rn49kTBvwcN8Fc1YAmyA1BCSMAj5sX9R1eBWWnDRj9zfsEZcc7kDvPpYceVDD6vHs7GKE78gMzsvMQM7Yu5C4Fz",
  "key13": "2CfkB9wXZpr3pYqjrFEg3cLrVfXK91wXz8sEiSK3p7T9ejzphBRvPLfSoBzPSi3H18qrW1UyFSYoALVz53bBzaru",
  "key14": "53d6yuzkhBnsV4mWMkAbsCbndw2cxg4xWo8WUtVZHea7xsw7q4E9qc9YU49u8utY7GuRt5YARLHwUfzvWAiStDr4",
  "key15": "3a6Y3svPn8DwG2QUiE951FDtzK8emjoi4hd2c3k5TySwCdEEv2jLkF31YJCuMY3q6qUG9LBDoFbxGsp4JkqkQbaJ",
  "key16": "3pDq4ouGhyyezmsU9wbNhDLuHzBrx36QZShpnLXAf4sJuzeXLGpxoiGdU35RE7i88ZxgHPdeMcvjNY2RGAAEAzyG",
  "key17": "3JwHhLi39TvaVkwMcjQupd1MtNLJdkTGszpdo97ZLjXEkPHo2x59DRJUkwYe65AkU43J9KGU1zGg6ioTDnzUU2SD",
  "key18": "5QycWAsKDoEg14rtTfRrTavnK3B7TfqyRTGzeYxyNenHrQkC4ADuYHwQmE99Psay7V8GSALqtj3jY89FxCvW34Dk",
  "key19": "5qazhmJ2PwuP7MKK8LKGqbJEUi4oNr8n8zochsJDEABUgBauf5SJ9dFHeKtoxtXwCTVbuLgsLUSYSvnPSABiSXtL",
  "key20": "4dNVyNVksiNyQs6zLBTvPmke5mXPcGGiR5VAuS29mkmdAa7n91tUuqdAZdTFbC4qHhk5W1ALEhceznbiRGqHS2xW",
  "key21": "EFvtrAbPuwiyAQZ4Ud8PXfyrkQj9MWJVppL1BMWfwrMMaUsQwEj2WdBpXixAmEzTrqpg5s8NExVWDsZi2ZJ6N74",
  "key22": "5KW9rUBb2MkQAohQbjmrMGaDi8rzaD4a7sgGeCQR6eqmBQPwxSz3QiK7QGUDb97r9A91mYqYiEMwLfERWCLNNdKu",
  "key23": "4TFBxcFfZyS4P9noEE8Wo7KKujYjFCJTKEvgcd7dHHxpWHTXFVKmnpu3VyWRm1BWk1voeVEvwjWecVxj9cd9Z1Q3",
  "key24": "5S1NBFKN8ykDJ8tA8Z6ZvRWA3iLJjNNgokL3m4C7Xjg8tgHqzH8LbmoKw6zH3WZ9rXNghcUuxC5D3Dmzn3Hk1yPW",
  "key25": "5LT387TyU3JLD2z7mBFdaYCBfiYxtffTQqz5Z6jUnvVViVjBSH51kfTTbnQLrzxzh2wy9xBhcHpecwd9CWZbm2CA",
  "key26": "29cHqgThffBq3RozXpnea2Gfs4cujU6qRU8fHmL2CpCyHhYAjyxZgXfY4A84seVA77dTP3WZLKJpNwUTt4W8s2d2",
  "key27": "4atxBc2J7RKa1TbRD7JgkQoKXUNcTrRcanozrj6yYZAz8ct6iBRs48YcXWywrhfiaWG28tMxn6q6TNb2H2KrQ32Q",
  "key28": "5XZHpgqQGwopPYeBRvjrro8cCip6ok8efWKRLaCn5TW9bEcyhQkGjaySTbTN3YvyxfjYP3pwQpJZz1PsTJUTgm6o",
  "key29": "4yjdWSLNv4KYyLBdec9T7nspTFFwJFURoAst8zBnfYF7CXNYbjHhjnCsgvkMk4CpjQJUdNAfW6pncquG6mqvqCy4",
  "key30": "R5MozGYRJfwoVsETqwdMYxVTYANYdB6xXVeeRMNUiKpMmJBttAYGFC2ccXuiZ7dC3wBbBsdtkuPgdxNZqKtjZWM",
  "key31": "3j5BHpqTi2ck7VyL7y8d9LKwBGdArUGGYY1NZCgBPQVUS7aq13SjBUWVRjRWLfh98ynUdJff5b2CQd6T9Lx5uYW3",
  "key32": "2BcEnnUtp8ufE8bzEUqCeqHa6xunoARUecefp2iCVc7hrU4tBUJF6XBSVbgGJs5fU9b9FGVNYB44EiJ89GpP3kEU",
  "key33": "7cZbnqy8giRxzdxM6dnoBAYYjod5Z9oNMysk1PcNuKnv25E8G8LASKom6Hs7pzAjLMvhLwe8tx63fhWPL3C1ZBF",
  "key34": "4yhidQRdY6ebguL2jTDrnUAiLqXg7g6FzBrrNvVcTqzSd5k1jVobPJHmZAa6koizNz1Hck1eQY1XuBATmVpak3E3",
  "key35": "41NXMhPjUNzFJxq9uWhDLzpLu3vkuZLFiK4sQYjbeRs7YXmxTPwUgKfavCqWYBBbfbi78EGamwsjT1KMiotmxYhf",
  "key36": "4f3563sAibfT3vBKkbgkExNq4ZpRq28npfy9aNwKAMeGygXxCroAXfsKN2QMrzcoXeKbvbpjS8AQxAjaLkbuz74M",
  "key37": "5brg2cqoTaqVTr462tK79Dq974jM3ExSC3jYhSKB11GcW3tSzcp6Asu8dExwcDSai8mDVcB4v67fMBaGgPaau1CH",
  "key38": "3UxzKYEJKNXYChC4E2tbfvFogmBTGLNn29p6wk67z1iPq9nqtKJ44LFFGXE4VxGwKz25NE73sDHZLRzeckEj9wzF",
  "key39": "8Fq1ZRWoFZLVRWxZCYBkxaDZusgEfeSsrSQQRWh1K39d1zp1v2stPTc7JuEvG8T3yRuAkS2fc1WciAZwnkwX2gp",
  "key40": "3sn7AFh6DE6Y7PiDd5KhRQVwwJ1AzXwskbNPSSRM7gSJTjsrBadSTrKhSzFZ4B5cZ7sFm65pwJEgHJtWir99eJed",
  "key41": "4H5smQCjgtHKbEqsQaRQwqhzadcQqEDRZBsoEMopyBZDDT43mynrBKsX3ZRAZX4dwNDjdLbQufT51ThJBKBRhMkd",
  "key42": "4rQ36u6Vuk1FkNA4GyYpKdvsuAJ8QJYmE9KiYZZs9L999U4svjp6p4pxKzyJR8ApxYviyhhxcz3o47arXRGzVMfA",
  "key43": "2JP922JWWPdbfKQX62wrjs8edG7hidzARsG8sbETfykf4E9heQvGwrUBizL861bDqJKrqHwYxY5PY1VA5ihVE1ZG",
  "key44": "LtpKi1DeCwKHc1aFgURYMAeyNKRAAwuyFWU66MB9wGXtEYx2Lkg92oDEsJVCXqPxxo1Msr2kjn5BM6ZhS3nGsT7",
  "key45": "3ynkqBcmMYHJHH7BbJP9FAfZq3h496LQ37u9VJdMt8sed8KXj7NuJX34NxTUWwtSQPqL5xSP7FPFDJzGfQtSkJV2"
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
