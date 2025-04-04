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
    "2Fi3JNx6TCqQP2Erp2uFkhkMMeuj4WEKo7JF9TC2hteR3yQEjB5pSoTwSiVV5dkx69vWenLKGCTDUk88skAMZKJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adF1vZ7nddSF4BcLR8hrXjjhEvGoNJmyB5B7SWu68y1WUER1s9zpWeTSyTUBYqgWqJN9gkBRiyuujQ2rhiMX9ov",
  "key1": "2FEe8MzqnJeuTFX9QRszNE3v58Ey5HA1UxMh8eJHJ1sAtHej3gFu1VuUMZ8N3XTavMjNjRnk8LQy7NNtUUMKioLg",
  "key2": "3dcwHYg2hHADpLvMJFAEGfFVEQZMJE9Sm7DG7UYdvQcd72R1n2ti2k2WcVoGRyjwyS9kH1wiC5x62biALekLkTJW",
  "key3": "2C4VaCriM6ZabcbfW1xemz1KuC8EKctNajauTABj1ptnm18WBpxewkvQ68UPihXhun8tkFXCbSWMJTrGnt3BRzu4",
  "key4": "4ZRJa7niq7Uhgc4i4KonMMsgokVZLahcf18x98hamdZSSVeqVUKvtt2smVscoJxbaembZwF5Si1aGPuNJRkhCsqy",
  "key5": "skFXis7hahxkUpcs4MGJ2cjFRiQA3W9JJvzkgoQB7u5FtnMmZXgDgtSDFchvQ2rwvz71h3JbELvjAGjqVcbhodV",
  "key6": "3Tr2xVrwDb6NSJQnDgGCGYhZMUpbaFQoqQGPLDFjJCBJJAXC8SBaXVsyBYnXumUWzSyGWRfkQBRTYQErevaTbuZs",
  "key7": "5JLkC5JbmtuCHQkfhr4PVWZ7neTEbh4yWK6jCMVwyVwSYG9PZ22y9hUmd7UDZnACmT9QNe6woxBgxnt9KxAVHSVN",
  "key8": "5sgZkUjUEJZKdMjA4TwxzSDWqopbVKHtQrmjkiC5KgK7g3pWq24mUdVLPZpC2Jq51YNavhH6jMAMVnpYNtYCkQwL",
  "key9": "3Dfg7CEDTwQ438ZsaJaAaK7sEdjBk8uDxK4PkK2K2XHdzn12xJn5JVdV8zSKwGLVVQ1anrgcGptKVHkFjBYbpPo",
  "key10": "2oTtaBCwmcU3PhFo81wU6vGX385TmxWxet4ARS8379Jt4JxzzX7jVBDQsoHcvaEe1U4ryjZcsfwuxrWbYtGgmNdC",
  "key11": "62NxDVY8EtCAtjgCdgEAHdpreTkVfvLSejkuumdHvFtSUBie6oZYEuL7XMAatgz16bhuW5MuaKw5qfDWa4bFkZdg",
  "key12": "37omtNf8EhpWwyTVE4SnxC9MgWst5fV7UymAPsX3G3DZqJTDaoeYXH6ve9x4F6ss8dZdQ1W1SAqHwbaZJXFpddbV",
  "key13": "4AQJSiZooQ3AFGzGxqeCa7RZZ2ynbTem4cnz1AVfNSTtNMhsT8cfqQTdLT2MiMQnqUDCU2JzkB3JkRxzjkQT1Y1o",
  "key14": "3W3x4sb9vc21YNQohDgA5mi8GYwWo13ntuC1tHYPXtMGdCcxKwyVt6xV5AwiqMTMLe5jHn3znhx8b5ok6V3wfS8G",
  "key15": "3d3rQEtZGqMjnEbmC6KNsqahbhjBgQNCtrWAZgdrvVJcTqVrkgJfDtnv5hjWWKndsKSQ8Qv433Swm2MDMVLTyEWt",
  "key16": "53KmqWPqp1gkawDuRGVe8if2ZVk4AEK5zwYRhDPPc64BH9sTgeCC6xmBx32ryUtXmWANAaUVYgcYrZLe7GDpbMD8",
  "key17": "zPvXFjUuvcTAQC35NybmXnGQRDKtBC8XF29j6WMob9toqmxTdMrnm24W6VpeQUMnht4eywthEFyf5bCaJYzSxqR",
  "key18": "2yR8PWcbHxVUY4uYS8JrCcEJzck5m3HfsUpBDsVfzX8M3WeDU7AZVYqheToNto5ByrLchVT7ivJm7pcEpxa88i2T",
  "key19": "2TkbkGjCtf6yjgfKQc9JuqQ1TRMQvEbHwJQmYVB32cDF56Z7uNF8ZrRqq2Ae9jk68SecJk6WRD5JCMzTq5sckP7s",
  "key20": "3rE3KdE2B5h4X7hPZTeqAp9VZSUpUdpoXtFZ6b3Ff5Qbuar4EeZWCyyC45xkcz8oeoMdXofbBcZg3Jn65q3ktwvR",
  "key21": "xjUYwk4AJwL8teRn2PoTRwsMZ9q1o6bL11a6Q7CVXcGoy8yQY1ajchsTJTvBAbucFUA4Rr1sL48CRmekFZ733t1",
  "key22": "3pioczjNk5wVX8bZqEQtGvUdCRhb1YwzWCJXh7F5Ttkp9srh5h45MgksGaGeui5sLt76e7iV9MwGPisn7b6VJvXG",
  "key23": "sbTAxvLXbxkSAUXPZV6PhDLMwsUXQUP8UUocMprHrezm5nF7diNS4Xd7TgonDHuHzDRL8A9WyHpCtsG2QANCirG",
  "key24": "Qojj5FSuiH15FXiybjkcHaZzozxBfhZXNEUYPA3LLHUex2siCWNhcZZnxBMc7NWAMkw91rkGECCCL23KZD5mBZm",
  "key25": "44zNxSJ5BmL5AJQ6rvarMaNbtpw9KHNZVHzKYvyBWvtBc6B6H1ht77oEny43t1kphFW4gQchHeUG1z3rZCwqt5qX",
  "key26": "2MvBKtojZXTRzZRPaZHivnbKXsoKaQG7TiUv2pFY3aM7wcHeVe9P9pHbFzmTmNVx5PmZMoyPCqxohUPfYcynjPuU",
  "key27": "Sn6c6bdTAxWjNNxr4K5Npt8pnMrvPueHBj5zRHWsQV3WeDNwwqJYXbbwzi5tFLgXHdFLbMgMJB3viFGDrwBKAQX",
  "key28": "565LsvKfBwShKHyPpCx3Ztkn7ikaqsx5QgDr2ZvZR3sPwQrAZT3CnswhEnV1jXQKmGiBLTy4RmHLmoJySv2XbFfC",
  "key29": "32X9Q4rW1uszvU5dTx6BhwQr5APjuBNwSjVymXKaeQwD8jsbgTxw5NQozDoLs3zHZAXHaFYzy8esiTReEe3i9BK9",
  "key30": "2p6NmLrz6oDJU8ezDpt8HZZ4evsRrEQc7DE9pqQErL2fX8Lc5KMBo45X2vq26XcUxqWGZGrkqopNT6Smi6qQy2z5",
  "key31": "25eB9CCSeioBFjeNLcDmLWpxX7rWfW3DkKz8jduek2ZvXL6zigHzhk6GDrajFPwAufnQHdcAEoYokg8JPHcaKrZs",
  "key32": "3inuPS9bGH9UauufCoCGTT5aZVvZCwnYHBj2TGXHimYUTjEeV9Uw3F152Pu9LcKNP4gSfN3Q1DRPfoou7CGUkz5h",
  "key33": "4u3pi9oh3EMfYZGKBAHMKBeWHmLUYTVnUxeysBA56FCdZcwqHbVLTi2EcfSNSrnKE8pucP7LTUa1cXwbvsj1Tmb7"
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
