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
    "5D221ExE4jhf7o11A7UWEqpgoYGNjLTqUQ5zHzUXzvWpeMJok2cAhrZGkWSGF6Er1Q7gbnt3pfJsXnGzALnEU59g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQVbwS5yh4sPip5dBJhHtEAKKMa2FYTXocSEU8fD5UHPE1Q92Vs77XsksDozjXZkq9RxDb5h9Zc59kCd84tBva",
  "key1": "5uA6kvLCyXDNeTCoUwr1DXzRGzEMThuvdoUtwv9ZvXA942wpHJRheLRKLRwwLqbA6NYgbZBTwibYsVkAAf641hAJ",
  "key2": "vDpNcgJTBBuUwuFdt8K3TUaeSWVLhpm6NPn8K4QJoVnrdQ6Atv5sfNMX8rhiuJppZh8otWx1DYuzNKPnA9UE5TG",
  "key3": "2ZcFCFRvmXBcLyTB3W7MmEB4kCnv7sseqDVTNiHQiiaVP1zaEsYywQAPP7c1Nvcdrz9of5y4H9JFiZsfMqWzAGew",
  "key4": "2JndjQKvbcGbSrgRUAytQA1abqd2aZ9VmUwVKTf1faU9nD8de4rQZFcr5nszRgN6widGeGCYDV2z3uXQVJBHrvgJ",
  "key5": "2xL78mAj1tWJQYzgMiuGs5mjHP8DZnuRGSSAZvFXPYTtLjSoYMkxBSGs8ijKrgGwJB5Zb9pLVQ79HPLF2zwA4Lg7",
  "key6": "4SBuGCBdp6KWyg6VfbdDQMnHa3q9X4ULBiZEi98TKpJ5HXSo2NFcbjHef8LF2fG6Ja2Ns4CLX8adVpAah1eddWKb",
  "key7": "wsHERCckWoaAazbXJ4GYxf578XsPp7yzSjCsGpdTtxKv9kxyxbfEgbaHaViv2FfFpfNFvwH3RLuJc2EokXBtQpT",
  "key8": "3ZmmD2qqH9thWTnjST2y62iQj2gdvD2jm3WgD4dnV5ghyBxPySVbkpXgmXnLf6Pzp4Z5YRizXkH2mziEYAUUN9sY",
  "key9": "3wMy5H3zUJ52VQRhjCcWvDdCMH6LrM165gLgLEKV6ubYmvhuurSfzxu7XM9tHH7VmLjuQ25x7ztER2bT6hN1faHw",
  "key10": "4PqtVqP8pjrWavzZzoBxwa5DeF9pM1KF3wpm3GKqCcwoiCtrYgVGkTcCD2JCh5EazM3ZXihVEGUQJ1G3DWmVL1Xd",
  "key11": "58AG1ginANDw1RJ5HH5HX68u9gerAY5QuiMb2DYiniBh2ePs25c44q3CGsDAC8Raa79rRMFh91YnUtbgC2d223pE",
  "key12": "5zsq4ASy9h5foKskvswBAtH98EnsmitzY66zAdxU68Q6qfKEV4hRJt8JhcdVzLDEm57qC54iDtrGpvdpZKL5nkdC",
  "key13": "fBrJ2JcWmVDvnL1zqTr5zvuwyqc79P3zg9BJ6AHAKQ2U1gM9tY72baTvLLkFG1YgjG4JQyNhmhqJvv8YCDjYKMD",
  "key14": "2vNGjvmAAdeDcyBo2am6GvXykDFWygDZYxUYBvoH6KzCkjXtzPMWwnXWoTkqfMNiE8DKZA4xs3RXaeWjypRu6GzN",
  "key15": "439egY3Gz4v31hrXPWiP3ockioPNcZkcARqm56m6z8wh6QXzdxGj8DDd2GJMbLxHsjWxX7ojdSiJP5cUYZhJk2f1",
  "key16": "4YMjnq2HLJTXVgfeqECJyMGeYtXDxNKqh1pJNpmyMqAhbPyd6pe8sPC6RZu7kUofm95yVrVdc9Ncm36yn3t28wjs",
  "key17": "AMmp6d9EDZXTU4YhMR4vGBgC7GfuTjryLvAzXRM6xguSpV5DTTEN9iHvVAJuwzgfXziJkpbadEE8TVjERb8zdzd",
  "key18": "5tBndwJYmSzwiXb35vVWRAZ55xsgKkiXTHVkFko6Fv1NfM3TGRy332eq4RPt9bRXnUQQFeFejvxmHSVBCPf6EyVv",
  "key19": "4aTneqEPLcxejfirM4vAg91EKpocBPaNyq9a7efbKQ9F48rqTmqNiZfS9fVRYpFRaYijEN2MAGVadumELCoxMz9s",
  "key20": "2WWZWKzFRgsTZN4d3SRxJJFdgPbAS7wEvRrjCfo8e3Yq8PEPMWbyRdJmt2jdRYsENnXpWmhsJByyaxbwN5y3owrg",
  "key21": "8kCS7QKdqxR1tuUtPZmFkT7A9ytyaqHfyJ8B4vTXnUiwo6w3bhZZ5EMpWDEzzRks6dsYntQ2hzGgXgho4CM4sr5",
  "key22": "4fbBpMCv2kXg975xyXqVYoSkcKoaGYH7GazZ8hgqiV2C9d4DaquANTSLNmM6qYeLixCDDg66WH5S9MMHbkMH1KRf",
  "key23": "43xaE2vashP43m6nhBkFHQ2hyMqAKKwj12PzfhxbqQCSvpSd9pqDFpfFpQaLjGP4ofusm6o2MgdeGcX3H5TcLtBr",
  "key24": "3ZJ6EdNy9MgcmmFo7wBPVTizWmEEAMLke29GkevWhV8wrsKXfrD5WWBARCX5trD3XFjVbaMeqy6BWrjJihmwNGGe"
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
