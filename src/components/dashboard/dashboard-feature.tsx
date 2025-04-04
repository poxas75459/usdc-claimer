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
    "59BvQCeVwFKXoZG5QJHdcNbR4KfLvVRKR6JfyiZAk2vYifrd6i1Qm1BtVTJTqfxTBercFB6P9h9NTN8LiozegsyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xzmbavg9VETpat1KMvw71kAGgWGKKAVvq1vJbn9qH1ihUa7YMYqynZ2SK1oDFaiBuvnp9mgzv42yrUAoFU6XqDK",
  "key1": "4bWZ2RmR3BppEw5237tgn1JbW3k1VNwxSjHuG2kYLLcdd5nZU6orUmGHSX3K5KZLwwHftEU2CNHg9G2A5WzuJTnB",
  "key2": "37suVZRrzSvPAqLZaf4QrL98ehA3vdPu96A4TnRV5ZEskDHG66BwhCCKewmk2QB95aE8awL7QrsKaKEXPEdVVyDp",
  "key3": "2X1CNzYp2Gz7pDtCwjkKuWRQRo9tTQhTnmUpjgrJsvHrzhg3VHFrShdyjR4JUBkCbQcxeV1b3vHM8KXw4x3nX5UJ",
  "key4": "4oziPeFPG3N3rpRL187q4TcXhrwjuWgiCi1SYyx2pL8J6RsYTMBvXpTtzoSSMkzNuWmFGfCyJbQh4kuHYoAoQDs6",
  "key5": "2TqRDR1LRF7my58e72aQpF5koYjMpkVjpJpKZyfw32Kqso3ov28kiqxGAyEijKCa8XZ5hkWf9qhgqdPLwaqLD7gK",
  "key6": "4QsXBZ7zvEYNYs4wQLyTgqPHGfBAh6547ZHHrwCA2oFg6Yx3pCyD9hHYmR3qhM6cSfhavTRUMKEnC3J5kUSJsXoA",
  "key7": "4WUCqkUVCBqLE77yYh7SF2ejsEZ7eZ1NSH4PVg8ApRvn9GTAbHmV2PsseyRXwvYPQqTeXUSWsrZS62p7zXvCT2JS",
  "key8": "3HpmsUbx7dSQfyyf2Wgprsz3Pu1o4nDTbTeB8JNQnYzV7shXZGubRe3MEFfWgoQMWxvseY5W2stUk5pjENYXLH1W",
  "key9": "1nnP7JGv7hkuxFHLCoh5JKSYErJAUReM1kBiQQkBKYF8UhbWTtHxmtXprLXFG2gtPRe1d1vrSnnYwK4aM8zK47J",
  "key10": "4pJmxQj8uBrjxFeJ73UK3v1UPAGsDUwjhPvvrtERgEGVghxMoCpdufJn37Wdst3bXTTZmA8SjqThvYqAmfxZEL31",
  "key11": "5i4eBrzTqnsncyUKaKB3YoC7fMpUefqDB5THzf1Djuh6KFZyneiQhz3sx14HbkMxaMJKw4uSMgCjqcAXc1oQ9eJF",
  "key12": "29nRqYqBxSWL7xeuKN6KCEJDett7iAGew8q1te9FvwgQpu47khbqbGQgvqG4B55AAFiAsmMRdtMfe1VDYbGz6rz4",
  "key13": "4TmFPgqpBeA9aNx77WP8C8oerr1WrwJ1GTv5jeQVH6fpQh7YNUFpzvekn312ZjBv1Rr6QgejB9za5sb3ZSLBDhtf",
  "key14": "38rXjDCDPYmr42zLaj22ZkcCx3V6aetRw8xuJirwGLhFYnYkYPmwuvHcdo9hcsReyoyKndQotrPyntd1FrK4QDuM",
  "key15": "oJB4XtcwA9ADPjDoP4955WeyKEcDqSKNXEd3rV6g1DoMXJV1KEtHuzvSD11ZhGSQE1uxvYDSasx3YVSdAjHzgAm",
  "key16": "4fA4wtNMCbY93q3UFJeV7BgKu6UVeS3GgH1uyUMFe83EatP6MW2TPdZypVm5wXrvcmfGTwXeLHwii46cC2N2u4oX",
  "key17": "2c8qfKmJSozXri78vUadJk4GJNnD5HiZMBfgbnP39pPi6JRr7ejXpKUnjg8svtjGMkd7STQPnjP9agjPLoyf7dtr",
  "key18": "2bYLAmScziLqxejebphxfU2n4NH3KsGMHAmmXpn7CAfz3EGssAfq8iZ21MFq9gxYewzKVPWNBaakPgwAQJCsMKc8",
  "key19": "4XvuXWUHcGbJePZXocE2pjSNwE4tfVFKfkVcJdP74suy3nXD84TyKaYvSBC4wZ9CMBKBxckNQncLRLoudRHdJEHy",
  "key20": "4MekXUaNAmn4LBTb9JyUTmQh7xx5iYzWdxNUv9eE89QdHu7sSkyj77R6SqEJZHzZ28jpvmcUAjvcQwa7mzXLhM4S",
  "key21": "26nKR88tYKKZWmptvpuRXmqAnZ8fD6W7YSn9bSDix1Dn6T8PJmebMhxo7mr8Hhjm1Cs3RkawWfQNNsCgm6JLw91X",
  "key22": "L65ryK828QikVYWmbHJU3bdptKLb8Bes2esZTmusqMboEQ1rN1jJVha5HqZZXtnehcmvYfbq61d68AHAV9BfHTa",
  "key23": "3Qa65zvfHkruLoXzV8aRJPEkweccAHsyoyLWqxFK3i8cg2zitFNKJKgySyrCyRq5JaMfX7MYvf4vdVDPFarnKMz1",
  "key24": "4CH5nn9UHAQQmA9hFo582HUY2ji9ZFZvdgbAjz9MQpwgKBRPGb8yh1VK6Zqu47y6b6CpFB8eoBypSZ7mZvzhiSte",
  "key25": "7SHfwGhGYUntnTcxHMx9jxz1PCMdAKZbempJUmgoZCYCc7Z9LCiFcqxRdUiCLaFsWyXP7zSeaHufKfcoHbpjnBb",
  "key26": "4kfjw76jBkvE9da2UwsexBsUxvVqXe6JtAz6yLx2uAcA2sx72basXtfuPSpfq9VAjd6dmYcYQcV3nRbW9JVTtTbJ",
  "key27": "2gVhqCh3yUemWWnsRTM3PQtE7xzdaFhB7nUQcqUg6NjdsMp3nH71UwkEivBKg7Xp5pSxtWpGSUwn7vo8DmkNR9UE",
  "key28": "4Egp7EsUPnvDmmB5YeaYCf3bEBbGpeJLSxaDnTWyQbyZggi2DHitwxSLnobVVuJCWQQHzQZnBiVbUDE7H9KawEoA",
  "key29": "2cMDKrZA7xKo3DgxcpTNzTUhAhz6h7EqT2nRsMV7zK8k2mm6K5PNfZRBbgZo8xwrfAEgr5Ab67HTm9PMXWSZnoqN",
  "key30": "9svu7vYyxuQwEF7dUuKsDmi6j5uigFxtiZWuTqxq4mjFYfc64nXc7xvrSDRZTjazNZZ9AzK37xjn3q1PY2vPMij",
  "key31": "5jQkPBuWWGC2ZFumVNvSeoayMH2W5LoRgFNLPPJu87xqNaGMgN1eRHWQY3vn1DNxnj9DiDKuAizEcGWJ4Yq4Q9ZK"
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
