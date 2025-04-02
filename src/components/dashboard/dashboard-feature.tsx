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
    "5fYxkSGG8iGaEJTQ47wTobtgZDYkY5rRcQ7kwuepavt19WpvTYjXG6Ss7npytjkotA2kcB3DkdUKWrFnfHrV73hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hdc122ZZSUMHXiu4hyk7146T81hPqjC7gy3p6W3hKYgTRLHb5BjY8dQKzjMArLbGqsrPxbLMnGgCHrEL5ckfN5J",
  "key1": "4bgdPxV74HhYxBfrc9tpJRWAQ2sss5qCbnK9HyTobeTpLq3u5ZW7yLSpGpHvQiYou9QxUvFFB5pK12Ye4qa65X7x",
  "key2": "2dzCMJrjP49syEtvEXPh88oujhtZGUicifLSFfEnwdV2dvxX7AjY5YC1MZGLFupCyDE3EDC8xtKYC7EDHRpdaZZN",
  "key3": "2kaYB2w9F5vEKwVcsroLQrSvQJNvsEYiSkSzreiubzjiQnUVk3vDzq8Z6LwkMft5cp6Pw2vSmEyu5BUfYYGAfW4L",
  "key4": "NCjzk6juTfewqPb1LLRgeuzpPhhxiqc8m4LR7g1f1mAxa7m3kRf8S1KrCWmwiGKMbEtwpLW7dopJLAxLK4Bn1H5",
  "key5": "2Sk8sGgHKNHKeRDYabrFJVTHuc648qvxdm4xRzDbuhAcoCF2LjwfC5yKsTRpdEvo3SRE8uTktqnTdhb9xBfDjb2r",
  "key6": "5Q4q666TNqEYgHYTAZWtYwg3dtLweVGkyWVeDxtMW7RY68F5wS4eQ4Yba5gbf5FsyZm4gZ83E6LWxNVWwUGUqS9e",
  "key7": "4uLPU9rWhDCzhbPKUn5bX3YJUf5z95tV2RtizsEKNXaCWupMxGkAXXJnHkrRQXyk27hjZPzXB7omiDKU9m743aGU",
  "key8": "bHhCZoCRZ44FiWxiLuoXuyQvVCCL12jcoWopaSpTSr7VYwD2U2PwVoeNmGaa9EQf5yoDibUnNKqGTicpVZSxZug",
  "key9": "58X8BnZDVLTFj9yFww4QUiZ1KxnENidomeqAQPk7kFVANmQHAyzC1ZymbVozuQNyHaZxhHVts96xygEtYYNrqwHi",
  "key10": "3cdGrUziR3n6miLDSZwWV6UaMy7y4u2Khn5ozCSq8xq5Vpto6A2QnpKvFCVpGhXq9eizcPSsr8UfZghQaSaxf8XT",
  "key11": "3LxMJGtdKaRz6WU6hHWTg2kzLMtB8iZBCLphX6mTHBwK4tZZD9Z33hzi2oQJmbCBoiX58AyH44UFpqQVW7byFasq",
  "key12": "4r8cGdUYrD4pQQCiZTMCccvFEC19B5R9TqzF89iZbXbKvwoqDn1bSLQ4qDyP3t7bSCKfAwzJ8WoDWY9BTbDFgTAo",
  "key13": "YYUopsrg2LeiuZYSmPq2NpqqrtKq9p4pkh51XHZD9rCXT5wRtRLE35nSd29SNVTcNvzV97R447yc8L7hFs38iHS",
  "key14": "4pzzYMdHe7JyrLoptTNKqD3f84w2froB4ZXTpZzMbJzxjVu3sAfefDQ4XcfQeL6Wcmgy9Hqqzr1mHWNtApwZjqKm",
  "key15": "2mQkQ96zZNdWVJU4ndo9AhEL4z38Jyueh2w32tuUvVStAWjPgLnDs3D5tjGLXut3V1A1Wp56fcHSeUsqp87cDrxg",
  "key16": "6mPMWVMkMstSpYAVTUv5fehdsLcPgqkidNeDjvTH7FaJDUn4TWJUNwYXoTHN1LeCHZbxtCedDamntYmfaHEdGh1",
  "key17": "tZTsDxjr1m6eqGfkacMF5xsWjxGt6ZKTfpo5e5bK15yywDCZuXKq9vRkdWnPqrJeLxyDTL23Bmd9k6z385A8tZP",
  "key18": "4sTBN2SZ3ArHCBgqB2ZDqTvUbCvrXADegZiboQQPawJwS5sH3RavnvzZvrLrC78pv9VNV5UgQMQaovakHNYTaBLF",
  "key19": "3KuC861SXGDEYfDWdgGxi9dSfJgruR4ftWEXgw2kv6FU4kjHuV6u5tsXbFCiPogJnMRjbpcP9YLP7zgjArUKrdRY",
  "key20": "4XqDVf5wutRSgs4Xzhic4j3HF8YvqyUiBQFCP4nZfkvj6XpFJtZjGLraH65RPgEJcKugQLFYuTfqTtUBmuvAUedd",
  "key21": "25viCMBtDw1C5zYR5XEu2yxK8CSKhrWECg3gxNGQpkuhHAwqLCJAQova5Cd4sgAEUuz6hS9sBfeXR42V5TuPnzwq",
  "key22": "5Witn1YDyYYE4wBWcwxu7N7KxeU6vP7imGhvGbnfjFaqmPBwr9dHFCbp4AgqsLCZRjUWaj4NiDA9ddCqwspdNhHr",
  "key23": "5Fd8Ypks9Pxqix4pdMMt7p3KDTiyo8YcW6KgFzzb9ce4fe7ihDy7sqwHsb2RT8Hqtki97UcEYb6mk9rk3HZa7H9Y",
  "key24": "Fi9PkTVoq1PYbBDmUKn5Kdq93owp2GgYqZ5C3u89rRhWCJoC4XMT3MkpM1UDuwKYpZCRt25szwLLn5qNziYR3xD",
  "key25": "65EuFB6fHxnqhbQWFLinYqceqy6Rb1JJMDoYdinqWkDPCnMVyEMjagvCnscobeLgPa1MxNtLR5RXDGjst5wK3eQb",
  "key26": "5kKdvYEcxADHnoeXHVKPZfgPhohDrLTZBLQnT6ctUejZK9cpx8wSLkL7fBcSLmZArN7Qm9yBwK6fgrrzXADd9jX4",
  "key27": "5k3JDh7eGSirdUjgTi41twboqkYMB8UypqbFy1r3DKLKuweeDokVUciueWP59qggLfuDcTpxxHvzdkLF61WEYPqX",
  "key28": "2Aft8Tew2omcRM1ZAEXNurCnH6Zx4NTXPozLrVBG5VDeDMGdpJVXBTChVQfBmPwSZr7jfCpYgabYgSwKC3BJ4sX8",
  "key29": "5VqTUDQrL6QsmpFA84xgr1ZTVf2mCj5fzy3aYycC94mFSmkvkk426DVb5ibcGYabHae9dBz7odoQjraDypy8xoRW",
  "key30": "4u8CeqvwdToPmSAxtqTcuQNn3oADDuZeNaFZtH3KydoD3VwfM6YuRE5RBMtHN1fmvbjVrKm71cjJ3P5ZxGohdD6U",
  "key31": "3rZ9K3AB8ehCo4sSkU83pSdwGRoT9EcpQPCfCGUGSZq11Srwa79RjHWVWw3HSHrRzZvEPSwigvc2mvyoXUAERLih",
  "key32": "RjmbtLaRzikunowaWmfEbuauVNWuWCtfR3bgpceuYrzN9M3HrbDbigHQ7Bx78ZuyiKa3yYabuh3nM3UyMu955r5",
  "key33": "2hDYfjypfPsbR8aPAGVoUP7RkgUxQBARKrBs1Yr3F6cc6BaEG7wkMZX3ebGuTxwxxH8gdqnzC9DTCBbee8VTfJso",
  "key34": "5LmhaBQ3TrHYid8kMMiLQ2Qxd7PcugbEiFG1u4Bdec99CHnXHJ64RwZFdPzozKYhzPnUHznmgYPmQRmJrWYhzGgj"
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
