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
    "4kNTGEXoCT3DacMvBKsTo7MnTw714rxtnu1geXysxPrUeN2CXmgwWVnbFLdh4UaT8xLJjpZDyiwXw69MmJU6KeUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31kWKunQG7gE9GkLGnirBpNCpqtBK9zpCDCLacSv3pU2VdjMUPxfxHFz1gLN6jo3F1rQa7YHGrTGwgePHFMddPJQ",
  "key1": "54JnjG1epLvNLptKne9Zdrqt2jHFgH9oNzS3qT3hUdKGwR9zemJCNaCvK9PLm5MjwzcDAw4ZYnLnxZf4MyHsaUMg",
  "key2": "gaqFi8rLtRmXyyZ9rNUj5e78oSHr6HykAk5SpdB99mBJYiRevsRRmBBCTznvL7mjzLWrxkPrq1rq5DA9P7CxXQH",
  "key3": "2YNJwHepYPVFG3XssdcUQusi4BAPMY7KyLkunjadbnLh1YZWU3RuqG4HtXeiteyBEf3Tfxb9YWGNH4iu1ubMqA9N",
  "key4": "2GxApoCk6vtpZVCU67v1UkyAEKJ4zWrejBcMYXN9VXG9YBPCQWZ1c6iiwm3QZV24qhmyGzVdtok4GBWqFMX92iVk",
  "key5": "2tpW3Jh9DgtWenZN3qtzBJy4bTUBauT4wFFMd8TqA5kkFZffQLXoEcP6saL8brpWcQkpug6gvn5nJNKywRtuHfeN",
  "key6": "615b3yyDmYrHXiT45qkSYCUkdgA88kJRumeGfuRxdd24RwKh3UaEm8HDvpqhjbCQiufLvP3mwhx578zdZA2r7Gnf",
  "key7": "2FZYeFFuKLHeyE6PeEWYg8xYGuVymzX4MaoBcyUfKSNrW1xEXnYBazwXCRzY8Lzp4QtRwYYHRWfsdYi5ZCSDVCF1",
  "key8": "311ZEfzhGf8DpSvsqpwcz6ErqDzHAXwvwotf1EKtecdxomjD3EajeHUSasdEXTG4Lj2eZFBYCdSjVArctXNFkgcV",
  "key9": "3t6XusAS3sQDp1vmmotihGTxgoPQxSfgrubh1mKZtCJQwh4ZpmStnMmQUmt2rVYbw5nv6bVZR4SVQAzkmtwdJoUL",
  "key10": "4RahbgV6PiHtQUqzmd6fur3vgGaiWoxTFtE82MjTUdzZ7onjNuTNX3Wwb5YiEZwo2LSZRSS9aPwJqsVaG6eTqmPD",
  "key11": "4JcDusuwdA5k9hGFgaxun6XS7Tbc1254eKLaq1V9E64CKbmsh9EY9bCHHs3p5TWT5SfC23VoxtwToPsz5xU8D691",
  "key12": "2zmmTH5QVrQMqRXaiQoCV1wNYoYmqUFxiiNnZF4KnTjpeZKdZhoCTvj9G8gys4yPgAkabEWt1PVzeU1hbJ3ui6eq",
  "key13": "5azTNM9BsDUeySJyVudWPxMcFamrSBTkWCJty1pH8YYRXsZwDorr1KYXMBbDgSLp8PhEAKuLho7C3bLRza39jvy2",
  "key14": "5nzWxkLkiTKDfGM2UyURaZjDKSBGyMrgqucNHoPiE6vvBYKKLgk9ZjoxqjAVkEe1UWo6BBXUskN258qf4GdTifS2",
  "key15": "YDUiuwoTtF2ZQawijeXwinPd8BUB4GBzdS3QeNMDDLFZLHFJ4JtaCcEsHkUNhVPwQvv9WMubFdrZZoRhi8qsEX3",
  "key16": "5DZRxNeemiUZgfdLvJDh8xLpQ2P6DPY79ff9WB283fGCyG7SE1NtiTcirJrHssfqLq6gQM5jyL9KF6GWtmvJncom",
  "key17": "5w8XbtpKeQDsErYhkX9wzYxcnz2RrAFjU33JQS43Hq3fmmmvJUumjD7LvdyHQLifiK8YEyN4ag3qC2kUaBHZYt2T",
  "key18": "p8dhx82BJRafe82Cn1F1JuW4rpA8akXHbBS7DiZnt5g4hgAEY8JsqF2bPeVCKNabArXJv2EzzA6AeQYRFzySmTB",
  "key19": "5Rj4yW3Y7donH215Br46BR3HxFDnmv1XMfBNzNR5cQJBUrwAxMQYNoJ8wVYfo4DUinRdPbD3sNxEhwFCxWM28eCN",
  "key20": "5eB7dNUJc8H1pQ31WU2KXtuicdB1MtF73vBEaXu9n93sABUoqnJ4cNaHjqjNdDM4Z8qwo5zL7GJjDzBErDwEHJHu",
  "key21": "3dpJA2sebtiPaAFanUeMWhXcc3Jz3WSEsHWFjYN4ni7EABya7iucCJNSzPZ4WZaMyUu5xjNDKuvg2Bb248qNLx8B",
  "key22": "4Gcmb36nFcTbaVbmJHYB4E4YxuDL2LfXbFUUaZuRKQgWDsV2qowRMcaiauYJD3FQs2YP3JnbkgVw8rWXK8aNxnGJ",
  "key23": "2eFB2vEtx6B8wYFb1NbFykAbrus4Fe4WJkLgPrhjM5zEjK16d6viqjEdYULLfGAXJtT5n4fFunTjWvYnsAqXTLwV",
  "key24": "2JtGWDu7MXwEw4dfvrpXTBWsBoCavpoNb79bap4ay5Y2Apyj4qjBmxgJtLHgjdJj52DXGCMrhzXdnLpnQEw9u3QU",
  "key25": "46tWUAXtBJKuzgKjGrZneGLY2FVqdxfBsutgufMpvpt2GjvjbyyPfSkzFwxjPXHAqq3Xwg5ioJtARddfieKBoFbm",
  "key26": "5E5mQr9v5aQvx3pL6Y1eCt1grf6sNqvXPRgENQzAG5FR3HYR3htWcAPBSLCqDZCh1THtXaAwDio322sgH52z5WzG",
  "key27": "5gKjwg9LoAsVXHUGWgY4pAnaQumrPC8xL3g8V1yohm1bBz8ApgdM5nWjKd9QfpEpGPZKGY4otJgNhArjojBn7Qvw",
  "key28": "31PSFBRkK7pkAyfKeMacPPMFEVBRGVNhHsCqApSvS7ZLjj2zhNFcCTTo6PPXceEFPb6gSMd3TcuD7KN4hJRcpAR8",
  "key29": "5Q8mbEWRcGwypKMQqKA7pLTkfQtQYbjEqJHtRdQihxKnU9LHXjEXw4XV5RqaVg9coBVfx4qJk3ztzyzRG4btH7zD",
  "key30": "5csffAZmtGQHvCYhtmw95WVHKz4RhcQTZeutjgbZPx4ZGSfeAp376hncdtpFaw7FRxxsBjGCN4jGnvRvjHuF14Ca",
  "key31": "5FwMPsuS9S6bwLtXNugoBLT9wmCHtXbdfNy9otJQ3hCi7zpVZ8v5t15PU2EuevMdow6Sc3nRgYPhT8cULfpZNLJy",
  "key32": "5aJrqEbbEmDthZnLQ4QRcCA7jfqaYbMRCdDQq1TYmKQoTiyhdemneYJsipUUMbowgvUecumCoj4RMKUfYJkiAEho",
  "key33": "56E8aQKFA3YxiGbAXnY9E9mtbEW95bCkdizZAsLxpZ2VW3fQBwFP3K1QAvhZShuVeGG8L2JRde1AkVLKDoWdSj67",
  "key34": "SDHjGKntqYZ48DRUQBq6aM3R38jG4axFNLxXxygCCTBdLPDX8jmzun7Q1bnsWUaq3JmVLSibhQht3sGcWYFjEEr",
  "key35": "Ct2whgx29SzHauhFwo5izp2PX3xzPNnTHvUMDwegJ7rg5k3f4Aycar4NG2m1GrnhBsMqbDcGc49ippssHXpvT3p",
  "key36": "CjQrSWsGrGUD6obSvjZqS9HwhUqR2vS6JK3JcjbZHRJhmGrDBZfVVLo9CRbeYYVPyPsDGLLDXfL9y9NUsLcms3k"
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
