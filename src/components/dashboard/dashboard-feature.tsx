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
    "4Cg6iuw1o7HEMfD3xcSiJ8qhYvnp6HndzEK866BSQWzHaxFnKFELB7RLFENdAARXvJdL8PquRHZ9r5K292H2dkXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSe3Raogj7QURUXtHAea3HahXDgsKTUzdxSBFJNKhgsJc1kcctFdGgi7c9Mq5sLpV1SRwyfDAQud3Vv6jUhDwZT",
  "key1": "5mbBPcMmvWXwrw15kGW7GaFuEb74w5jE5oTEgZDXgDYrBgC3sckEXbaQUCLLT6Xd1vHMdedjuD1FYhShu39AJ5A5",
  "key2": "619xwgzYmV9WXap1gcfjVP5bDfgZruhMHkT75UJ4x4hBi3dHcWEyapErMtgfahyPUGdkW5A9DpVJLuSXMgUFBBdf",
  "key3": "315wMiTuP9WGPdUBXfGRtmjCHorfre8rxKcdFbwvxZjJDRmVrn1NMBWAz43Tn7z57BoCVstDPFWjawd23k6U3hFy",
  "key4": "XMR3Ckga6avdwvUmnmDnQcC4Ljy4FbyhJhAquv6HeoszkNrTLZgq59sCJhr7kkfe4nDB3gSVL5KQCsFVQ7mQF4Z",
  "key5": "2Nma1XEGitaWKoSFfAmSRh1dfERJtctrJTemnkEuMC2RPy6mcAWz3iaJbnGfNn1t6gsvgCV9U2fUsoJu4RKWvqK2",
  "key6": "5CVXRezds4D8JNhBv4dDu6pYaC9QUNqgzvoRviT4ZA4k5mA3iycfrQVBrRTeXWDHg1UgWCGVp97p6hajpWLyq4sM",
  "key7": "5myvtL52EJWFafC44Dhdftngk5VYk8J9pwiy7Hw8w24xfCjUXmooombuvzpVafdQ4y2bCkmoTzHZ3Qk9ZPDG2hjp",
  "key8": "WmRvtfho8rhD1JR3FRFLfzLFRzhakZLn4S4LuK11ZfX2ec7waLTRAoFbrRVVHrhkUYF4hrMsVKEypCXNZr8ryoY",
  "key9": "4FDrKd6DsaoUm8KbxpkSxzCQpz8Quugan4RjGRcvibsJgSNn68HgSJsqFUYyDedSm55RH7cMbAxweMMTGCfF48k5",
  "key10": "3dBq8U7uzMeuoZLNDDqxi5DL5a9CMXLbT2SkVf99MYA6Bhp1wQz6nzttojB7xJ8vd1sm9cQxHCSUWJe9kkCLBMGd",
  "key11": "ZAdy9VeMjrBKuMYVemtcCpsgKSLB2TKXFGmmm2UuUcuNu1Tev4HcZUwmpxSkrJRekSodJZYbeTwvcHkJQqRMKVh",
  "key12": "3M3FMCaELUwdNUeMVj3ddH98Wk6oEGJ3GD3knHbfozRwCh2LZuqZrgx4zh57usYLCnCqhzcVGfGiJ5VrWSLHUVXW",
  "key13": "5xV4vsjtKDsVxE55pvbyQj3JRtC2tkJv1WcLyWfBg3VtJWncmwctM6hD1wCfJ5fnfXAfjSNEWqtvY9hYr4sdvQXF",
  "key14": "5Z26p9wV29NZPzByn7QqT7L7APKXb4WAWGjrqRMhWUfz16YV2d63Nb2u3y8bJ24r5KkedcUxJLwMBFb8iPUBKpN4",
  "key15": "3GqbnP9C2pHwg86mzCNXLhHiczQ8aUDQmQZgNU8r4VEGsCMhCHLw31EN5AsBuQ5yvQpGyAjGuyFxaWEaFDUq2qQq",
  "key16": "3E4YZNWUuQ6aUUgSCeZb5sdYgUggtg5z2enfjsKmYnivTrBPE3exEiC8zTnevrYFC7E94GFd545Wd2L9uGZWvNqK",
  "key17": "3mc4KASGzLa63uAQkzWzoH5xRaAjp9MQiZw4fK6jDxzAurmHv3QeQ1Ni8QdfX7cbuNmf9LNKBQGrv1frW1dhgoTj",
  "key18": "5qvm6DxPLxa3CfHVKeD2oHDCBwR5Ft1h2s5jH9Fb6D8KP5LENM2zrUDpa9NqdVXSck5GUbCn9mQrfRrByPzhtFzp",
  "key19": "3w9oB9FtFkN9CSg1be9NQomZz4u7pUkPybqCu8PYJGB9BW359HNBrjD1yZFqajGGgYbxJPqYJwmyA4BT7BN4cFp8",
  "key20": "5SvKy2Ho2HfA8qWagGfnkFsDv7xymFxQa6RUtmFQWCAcdfhX7w5yfNMmiePbxpuNJ5USv6iQiyEjbYPMcfabMszv",
  "key21": "32HSMHqJEYpcG9vdFKzniWUziwL3nv2kCKNUnvRe7RHQSuBybdAPnbvbKjP7e6kL412igq1fQCp5gvsjk1Bq1RMt",
  "key22": "XTXkficTENkZKcmU1vJWgMQgVKDVEaJY3T2EAZFCZpnXCrjGFszfFeVmH8RoSZ9G7hLUWqMDqNkfLBcZ1thPnJS",
  "key23": "664JoBAALyRyjjx52hMSoHWDWmFbjdgJSDjV4Zw4iYnPq5YxhoJE9ipor4aza3gY7UPg7BnDaxq9MgfAo85SGxsL",
  "key24": "34MGBo7s1t38vqToefVhbXedwKdfxiwLwgoaG7NzLMQRBxtA3RRkpiGxgAjg5BiqiPtNHrCFC9twBs4HoVUSwH3E",
  "key25": "26jkmVj1KaUqJEH5tfwSqN3YggSXJ6WREGZiG7ezihQ5K5tVbw28Rww4aTBJA1LUjBjjvgWLcNj4nUNJmLWhLdMB",
  "key26": "2RsS4xwZtfJsSTxMrfTAvq4FvSvbf5AxbBZDXC8oseRMqKdKwDpzSCCRe9EzivEhHzxJFzzWcMBYrM9q8uFdAPn4",
  "key27": "5RBkn7MkjEFTJaLb2DgtWyLoRqkaAATopARsQfo7eoEpaR3EcQU5vYs4Y2XzfkuCHcUqUTrWqhpmwQUhyb5Z5EXj",
  "key28": "EXFDdd7aHDLp2E6EtzbeaqD9zKQzzSeGpFNrRWhRfct8m2LXZe7SWh2jL1n2kKtHQKZbEThv8EVjNomeGT7BD7m",
  "key29": "vj633jZS8Qy5T3stS5Zwo4xHu4v17udmgMpXQuPAq4zSUgLfd5BZ6bHhBDqzefqYmGBRCETQxFAXyWhmV5voPXA",
  "key30": "9ids2ycwaHJiWCmNwPKg9gkuk5ZtQbWCxBMRUteT7Z63NjR3ZzXPeKzWKwKHdj9jmHzvMiTJTbK1LwiHvB1tQkD",
  "key31": "CJtYpCE9jzhJmRiB8r6a7oJ9WrzapFiaThviF2pdPmhg5UtDsDVK5ExWieaWtUrV7uUMbQc849zYhx1nwDwftAS",
  "key32": "29fuwKMLnKMZWajWTRs6Za518nuerNsMsKHkYPPURwqvEuggjMbAy11DMz2AbaLNayvzn7BNtkWATo6iZjJ5h6RY",
  "key33": "2urpkaL6tyczYJRANNmYCCwgfk4z9F4RzQxJFMeJY95x7ENrLNhyQefS4FznCqvjcAYwhC33papBEonvPmJhdTnJ",
  "key34": "2r48UgrEX3o3rjqYGLRAb5H1dHHjofQQoiLEiAZMbGG6k8diYSpF6ovsKRKNnjeTg2gJmXvW26EZhcA7UuR4psp5"
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
