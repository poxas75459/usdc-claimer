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
    "2XXqFAyZ3DV1266UaP27VEqXhQzGaGmk1DpegseVKmdKgoGpvaHrofXfALEi1YtmZJyoRNpXHsQbJZQsBFpGXhE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BenHeuvJnaFCKxkhoVxejdS1itF8SgBSRfpPLgwz3EDtz9QHYMx4dzcw3hg3FHFL6TPgNfe1f7BrZZj3YQij8bm",
  "key1": "3VV96oT8cNZCtktkeq67Zi1ziPyvpLD7yfCKCWAEdTRqQrqUbtdzjsGKyjHaLetPAe7Hv92qL6pxAmKzPJTn5nZh",
  "key2": "66mL8XvjfyQZFonjBGU6pfy77yceMRcR66g7jkv7MS3BuDg3nQFQjhJmLZYpnKMcgtde7DYXzDQHXCWDD5HuNU8a",
  "key3": "4KwKm6uGC3QQQw3VvnUvFaSYnLBH32239ZzfF7t7qafaFqef66c2NFqWpv2g86k2WS7yaAEkcsLgb8b2s9YCjbqA",
  "key4": "557ABvKrDHinwBBMTLvW5Xf8GJQ6KvCn7kFGHWuZNBKW63QccMybZvJNHdPQsTjkYh5WWeUsP5BvrmaNQvmCCFL1",
  "key5": "4ezdvkAat1ucnmz5HzmifsXpGtmmNfC6K79Hxpuzr21oxo5NoyZV5Y9aAyS8PLeJe3cBCUexXEV7F1SSRSWQHMZJ",
  "key6": "3ZUFtfor5g8rzS2njnYRunZww3sA7k3x9wrzPGxzLB4ZcfN9YF2CbGcRxN65MXQETj2mxGvZCGgYUgquWY6sc86F",
  "key7": "NpKSWPtnm1BaDzKTN6cYv9kduqhJzfG8ThNYtNX5AtzEvgVKCR2Zoex41MGA9YsHDE7ffPqqjhc3j7G1fm2V75L",
  "key8": "5FWsGiiNNK8r7v4QvhA85jGYd6r8WyUgowDGdwkZKwe4JPrhWo4hHFEqDUZ2JQa8HJJALpKHptAjVnUWzTt4nMv2",
  "key9": "2BHYpTv7LFGv29WrrjJrefUYuYbppiW9dspWd4uXM7B27iJtfhqScqNwAQx9f2pvSeqHvqTRztrAwpJtmAT9FhXb",
  "key10": "2rbyPkDvPXM8WTYcCHf92MKsHJNekQmJNyonp2HqAH7U8c8uLURXSgQZC8BUxhGt5RXvMhZZsypNDJoL6N5K6wTE",
  "key11": "2aLuKuDBigYZtPTkLHPPjBViP6hn2qktTHuQpUCoQrwMMZbRvghGqTyh19YS4dYsCSw3XVtj1XfAMNqRXA6gPyzj",
  "key12": "5B6QG4s92TpQR2qPJs34KwxAJ7s5j8rHfH7DPHhBGugM4QQ7mzVQ6fHpYt6Z3sTc35VcRvPCKVpQL6sVycqjgd9q",
  "key13": "5XcSCPDToEXe4gtWaG69xXZfuFJNJerGBNvGLfesSfeoTskjt154WvttFrWugavvmrANxYomdhcxZo2f6NXUKTyJ",
  "key14": "4VUJ8R6nBX4gXxB71BZfj8bF6cvZESiitFnCUngmoPuYFhXSAHpjRdSo5X25TEN7GjveQbhgErx7A4spbLG7tx7q",
  "key15": "5ZHDZ3taduBDTXHxuTdyMwCxssfhNe8QYdprHkmDHQBDzyxB2MMJUeAswK9crjnhAq4icXFcBQRideLAxzHDYcTX",
  "key16": "3T55qWH8qTGG74x6LmUeLdkzSm8nmkLFkUMLZ9vECTxdCdvqnUCRaBftmp9nKCi6X6Kymuu1HNvCo2RAVTcTNs49",
  "key17": "5BB2su3Cf4xJnqRSEYGhhDjsTnJhfzM29YzYqNZQPM7gWwow9fJYHEBwtUWx86i6GDETkkrL5X5UT8Jf2jVzJXR8",
  "key18": "4QqvsPGjbpWTgsdn7hsPoKe4FkTsbPEaSY5bFDauYYGtjSEW3eh7bSya91mphfjwcMgszPt1KWPzaxayrhfMqu3Z",
  "key19": "5MfupjqFbefgELRfqqedxQbTdBGW6PpxioHcho51pa1Mi26kutNnGK9y35CUtXTrW9uuA654KC8voGw3cP4RJ4F6",
  "key20": "3hYwXGSgLSbES9L9P8tZfMXykpN2eB2YsyFVtBxsf5WbDHfwcjLjTT5EieJcUsitQLq31anxoScxzHUgVonFLApA",
  "key21": "4jWm2FPdJsQdoKBEhrxHMBEfFQVukS5SGm8NWVAwkGkLbxCwByWxVAuzxCLHPLBm8meFig4D6KhazQx977UAuh8S",
  "key22": "5mMdxfRRnHyRDPTgNZZ8AoPAv4u6wbSkTP6BWXgFNyAb6KfR9iZfFNcyU8D262TU6nFMbf9egBH4dTmpdPg4QNiR",
  "key23": "3k7uHpfzMCdkGi69hEQrz9pojVajHrPh4gp4Rm7JY5CUW93aJDxZtD9QUPwAFRe5TGTG7Dxffizf6r8HxwA79tzD",
  "key24": "nGrcLp4rJZusZWsjSXznMevnmMyUeZHr1VB1NDyYwZJBeBVuCxza2DVd4qCcSSnXFYsPvWNc9XkhzaQrDXGf9jh",
  "key25": "4XmHHSKMd66MY4jSezRD3vj1gfe3TH3j1QZRQwuVrFUTV3Y4sxXWHxyRf55UVyAiysM6ZUC8rTESaC3m6maHFWjn",
  "key26": "2Pdyd6wbmSpJj28zJQWqBqRxWt5b2n6qgbtawWcFktne2hoYDhnArd3QE8oVg4kkKU6sGuaA6zLoFe7SDa1RL7oM",
  "key27": "iPqU4xSQBfQ69oxwYM23ASg9qmiXRyfkvsna3LvqVY1fdQc5x2741nrepjbcF1DVTgpTmwNXUaUHwpLy4fGiSDw",
  "key28": "f98YjXwNMg9ibxnF9JNrbHftrncSW8UTKVhTG51gJ2TVEcjC5zdyp2DH8PgcVkkdGLSSikDoGKUesnoTxE2yJmA",
  "key29": "475j22g47cedrMidBVQSwCgwcuw4yJEkdACcbFdb6JdM5cJTi8UFdm6Q4PJhKhzpN5CP7dJwBpkqwScQrdZjhqWd"
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
