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
    "2EErE8BUS3mXnSN1JVvXdnHLJ1Mhs9uBc2qhf12o9xekPDRUgEccHKZQp3yTJXYdBxtMnRbaKt9RV9meUrReRjpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2TbEwG9iWnZSqzjRveBnpux9SLm8gTrYEoNAuRbkXRRU19cRQ3PvX41HjGpcsvvepQ5YdEQWwCswzNpfznfF8r",
  "key1": "437pkc6e1ZktkY9gFHgZXNPmKHa1sS5ypsvqoAJUQW47Ti6QfZzgeHAaCxM1emMg3zJdBYy1bzXsgjLV5v4arCSR",
  "key2": "CZZSxMUpDEBR763qr5UVt5t2sJ5hBSdWNhhruuEhae9QgudnxE1Gg3mZJm21jW1oks2kvnqxAhmxeGFLbDm5s5u",
  "key3": "nvGJ7437STjmK4ZHfQBEiLSsrVvzNudnwERi8NYf2dDwbiQqP2DcbWzP8KNDBqx6qkAcSaaRgApiN1XFjNnzzKW",
  "key4": "4EMCSsD3xYtbKwnX2GSA3JPWzg2WLD5oDKvBcoZjpK8dr2mBJGtkCwnUMDwtwh1NxSz23JNMEoH133uns3CY3sy5",
  "key5": "qMpKC9sWiuVu89bQB5x3VUxWRz2Sw4fysf6hEZm8fEM7WXnEWjkLa1kauA7GkFH8Q3DUvbc4T2d2j4XXfDWjgiB",
  "key6": "4mfbpRg6XVk12t5fBu3Xsrp5gf3ZNbUtfw3NBAu7rQvHvfCMy6bRFBa2J6gQTTi5kPEBSvpWPoDjzLQEr13KGa1F",
  "key7": "5rEJ35cBgkqxuT4MJ4pcnvMpfuHHaggnsETJcmJwH1eFPcqE1guB6wfF4X6xxChXm5NidBfMscBg5fRMcNj686X6",
  "key8": "3MMD1GmQMWkyUn9icaLkvCNdoVGQMWPmG5WNzZT8NLd9Z3CrMp55JYSraSfbMz1yA5D6MhZrznWEA4kCsrSHUJpU",
  "key9": "65msq5WG3oMTBhHBJMS9Xkn6hB3Dy5g4BdcAG5HASFbzmkiYgB8ckBAMkFVeBihPXRTAfeJCDviM7UK1qoptkcHm",
  "key10": "2ZB8ck7bHjCdqRjvSFxZqCb9xfRfmhc67Froe73PVJLPwcR2HrzLAacZ5XKDHaYZRpGcP4Cs5Z5c8f2ZGa4H9fo1",
  "key11": "5r4EQ9414jKoz5q4D4NBcU4xHFMTgEn9JfxLSFCkWR41SqbAaxJGt3LvorpNJ2e2Sg4ip8LW7W4d7awqRo4GwP4U",
  "key12": "3qPQWpTwRXBDcUPo82vhGPZeJ7DHCQZDexSLpcABWkAHRshm8dpt9jaNW2mBTrobFfSPNxkCs9oWWaaGwTKzZKU1",
  "key13": "5dj9ici9CVojLqwjjKcijfhpjxLA8WA9EcvsxEHwozAWpRL75m6iEkakHgAvLoYfTMPyG2AyHyMbgiT27mYruAVK",
  "key14": "mCREBqwCudH87Rbvvo8kZvfhY6Crnid7BsB7hcf7aBh5RMKfLPfbgeYEvsafqSdVeVbSog9Ct7fPJMtm7QGrmJz",
  "key15": "4vgzNLrXhu6Psvk1ZPGiG8Qq4JRTiqoYkjqrBhknHXiHJhu9tKfftpZr5ezmsdvVc5hT42YhgDAPcb7F8YHQVkQL",
  "key16": "3fFqQnp7eNLaNnvRv2qGoi1k41tGcQG2TUEYiVweFhvKkF5qT2UoJ9wFzXfJV5t5bs1P372W4nm85BvBdsxfV6ZC",
  "key17": "4MVWFFmmKqnVgiJEy81SpKCkkCE7bo1AcJdLD5rrESGyMqaLKJR9GwGpW5n8SEmRBddfxKv457TP659wTEfFKH72",
  "key18": "unTgRxeCibiMSKAZFGdNkrxntTEsaRpHcRVR6U31vmeYn2sHm1rDKrrhp1HddHzGFYYs3EzW2UgFyfHVnuyp23R",
  "key19": "3CveFVQDn7TYYfKhxxt3kegvbwBcBetXfZsLu4hCf11nPE65yQ2Lt269SqQhpbUmuhCAtsnX5hCeyJZNSQ9TwUYF",
  "key20": "3zczWBzKnDeobbpKyQEaAPgMU61CwVgzwJFHUAKApXUC2mh4VeFUwDnPe54GAPWy43CxgsaUwrheSQCqkKJPfCvy",
  "key21": "3ESTmVBLViaLKUUDjwEaBDEdwHwXi4irrq1Bgr61DM5V7QYrKXJcPh9cqvcGqWMaxssUfbJwKoeVw97VoMLj4HiF",
  "key22": "5qN2ZSKMfLi5CAPn3H7fvJfgJ3Fhx67Qf756eNe1j4UTRQQMZG4y8DxsGmgWkqR3xHBYRR2qKRkc7ndZkDDmV627",
  "key23": "3tPiYiLfeK6WKtYX8LpuoBHdBrshzZUfGJCJ7z2hsE8CMdoZRYWRQG7MkcXMtGLxSM1chsTy35WGZw3bhS3SQr2B",
  "key24": "5yrqVCnJzJB7KxX6KRtKW5W9LXGXdDhNMXb2y3jdWGwTwPXMbDP8v8UizNQkGo16sz5B2cnLvbP6vAAWT1D7qCxe",
  "key25": "83Lunufj5rNjSXdjrmvDsFzwwFZjeKY2LcaPfxRUVoCUioYW9haLSvqWuLzmc2Jit1o58Bp4jAYCZMq9UXaNcAk",
  "key26": "2EgaCyzDbfxyo4a7kic3uQYiwEidS4dyrtJkwfK57vby4otuPtoyZrtxV88UVJN7w7YbJGSh1Rouqx3HLaEtAFLW",
  "key27": "4kvXxAFWnyrG7YgBEPouP3N1HXdzJ2dvXKj8ogADmjcXt6UdNUBWTMhfLANtBo45hBX6GWzidWv3Fn353jASEQo",
  "key28": "ZzSxFQVbYvTEChemWjRQEvjnb1sMKSXMCmwNCGF6VyjhpstxFtApntdqXySvbJv6XkuDVgGjrkSTUuvXB3u8uEa"
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
