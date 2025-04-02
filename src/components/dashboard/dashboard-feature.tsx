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
    "2h1XjdKqPfFL7pjQDqNsgABxmQTKD4eEdXSWYW84HAN1btzHWBGzHxM24ThUngiNmv4d96H6p9rkXgRuauRtXyGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333bbivVkCedfxKytPbzWqc7qbaRYmZeaL8TZkJpzLs74YdEmxZ1QWF3RgPRr9GrmuaY6diFX9kS3kQoQsfeBaxA",
  "key1": "5caXnc8CiN8zEziTaVBDAkb8pfqzZV6tsvLkgNAdc5DYWT4XX5yzh6AHkhj66KCP1RVzfUgYsbdEU9PsxyWvAg2Y",
  "key2": "2oQjWYYgiaCT6VD9KFHYwidTqXwrwKTQpELNfRdutmkcxtNG31LL8P7nPXHnkKnJsydJNmCcMfKJ4ZjeLEw7Nwgg",
  "key3": "ESFVUioEi6KzMymj8qRdHWT78KgsLw4FvXPCg9TbyJWikM9Wv9AWfXk62iHzPqpmZhsYeNxt7Qq9XQr6pxoLpKe",
  "key4": "3ddD4YP4imLw34wXtp5VEw2tr8YtUY2ZRsbYBLTZjB3X25XQWjUBVAx7MSR5EDWMJLEzpm1Khqh9MKR8aQwosZ1B",
  "key5": "425MsmajLbssVAK8RWeT6XbpWfLSL7WLY9Jeq7cZvzDheE2cpndgg6Zb5pbaQGVBhrBzLqHzn1Yf75p8YguCzbFQ",
  "key6": "ojMAESXo68vCvkiRsN2GSBop3oom4DqZbfPweA812WmuNym6uQXGXrG8qo2WatSM5CzN3Pwf4PbaGwhbvwseBKG",
  "key7": "4xCVwbvqAgCmu4mqPmFCVU9LehVA71vhCTWi9VrpgYEQfHm6fH1ekn3ExW9bXX5QQXfU2nZHBugQNHe78uXUkoVQ",
  "key8": "3pyFS6QZRXUWYzdNrKLRsMWj6kKthfuvdT4VJbj9Utfnp6og9XgKtTKZMrw9su3krPo9gyayiV8AoBrJa9k1vpXm",
  "key9": "232SY4NwvGr8uA9YvpKKe3MGaVyootgvrWsFtDpKJsP9fMKg85wa1E18MpbVgDeJY1ipSn7pcYrjs776MpqjM7yf",
  "key10": "2sQBb6SJAiiSNhfT7iNKe9hJ1Uy5dBjwiJURzSgXsAmTrVqPvEPE4JfAUHUNRgCXxYELnbt1XXxcrdG3mqoNnZPG",
  "key11": "2Rb276m7JaDdmgTYMqiKhWrLsbs6otouXxwy2TGUz4EbaSxE9QNEweUBcBQ1wHJUeFND2iXNW6RPuZc8KU2wPu9y",
  "key12": "5DyjAhDVEm3LDCzQn7MGnmwtWJ63x3AWVrtn96oD8pQqKC7BfDxaHA8BcwQ7MhRFZL6eAwYdy7WjqBUhbteUvnuw",
  "key13": "DCbfKtRoGWfY9NJTmCz8KsUcVwXGsYbiFxwfscJnDJQ6QtfKmjQH6eQxtpKMFSaxNLXcByT5wML5HGBSnzxExiP",
  "key14": "65zQeCCYctyj68cY13xsgN3WDc1WfQHCD61vnt9krnDXMwPvvUiSwxLAM25bAVW8E7y2W9U95CHHTuKBBNvpSxDo",
  "key15": "JhZXUQ1PApgeSbeqZm5pmKfWY5JNkpBfyucMQw35mN28TbXGVfra2GEjddRvPLuVJSJFbTofTivoS4wrL2XS7yt",
  "key16": "3V4sCK5G3ihtepti4Dcq6Sfn7ra6KBg5oXMEkRKrj6zLyhdXg5nzC5ARX8XnoV8DDgr6tvEYu1tuUicF6WreUPGk",
  "key17": "2B33s8j31VcTBjtm6urNigLufVLPWn3He3KNKT5s5ACyzgdRLJxoT8AK7R4FyoiZamyEFQyvKhknUZSS9FGsVEJj",
  "key18": "2YxuTzWeFRwLbQpG9PZ7UfhFpBxiVTLhfjfk7DvFrfwMqcxnt9rc4Mx7Ryk9vGm1ijyeWejqUyXMZRtfVLYHqsLv",
  "key19": "hmgTK6mBQWvsCfLbXLBGFVDVnQKhXqUiFS2kmJygHu7SsEgNBs44Hn2ekNBpz9Lq6SDkJQdGVsSC25vHrfK4ATE",
  "key20": "5wGrq2GndfEr7d6KZ2A5aA8db7iW8PZfJ9HauKRDJ1orjUxRi9UrACq3SZPebFRvXMLWhXeNTUNbgyna3nfAUKWt",
  "key21": "bZZ1HikGigeriveGXg3MdrP7ZLkSUJCMFrZfTREgvqdiCDX7pS7TFHZwNCksrqbnw4fZDKQdHzyyFBMgrdacotc",
  "key22": "3t6tW5gk6P81gcQURVPJaEdLjpNWYuiZGGTXRB5Y6z9fA4k4iSWMdLQ2q26DdX5eFjAu1pgT6CjobwXE9DHek5p5",
  "key23": "K1cUC5ttTKjseTFYEcgyqbPfqTfa4tiYtSywkz3fbKiNHXAjKB8w9YQY5wWgX2eb8AcCULZGRspZw4ySzoYKdgs",
  "key24": "3f2CoXxUdMZJ1dKYdvw47hXPTnjwxdwwbhnQzKrnUEcXgTBKyjqaEvRrkVc6zoVFVEW8EKXkYn1gAtP77HNAup4",
  "key25": "QnwxQy2WFYeMcTEcCDghQqmUNLgsfHXeKntCuXSLMdmBJK1gU7noNX1okxnQPwYw9rc8erARey98kifKydAJCmX",
  "key26": "233N3p5Y7iuX7AYgebb7innKJpuTx6CYkPfmBS9KKHG66UWu5EmkpBeePuFRPJDGyWdScHENp2upmAuh4NggZgbV",
  "key27": "2K2MX9JFtMjm2wHPNMmJhRSH9R2PXgLUYQCUnm53snXPKhKzKEeFmCCnKsy94Z9mud7vkGWtfRP4Fyn4XHJBx7VS"
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
