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
    "2C7rvaf8s93Dton64QqpVXhJJB53ky8wVG4izuHUxGNMrSNajq7vswdfg6KcPe85ot46bnJGfbdWfoqJ61jNZuGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hewEKzbu7mgkZGDHtNtQNwL2m6wgJoHoDRBHjzKRztLaoDuRHPM2tJoZLKwLJXyTaC9wcUJxMSnC6WnMfedFKLf",
  "key1": "2X1fZLpQvq3rcP2bmNqUshhw3hgU7xeB6YNWbTGfZ8Mj8oE4tGXYGb5ZL9p5xShhtWi56z8CM5fbS1haM7z1QiFi",
  "key2": "3ozzFMReXypiPEh9tnKtGKtgicpNxZPR76CpVGgo9geMhwuheCPc731jZNrmikxxSrHkGcSfu9L8rtYVvfBVz2P2",
  "key3": "4CXEh4SM6N1dDJSBnZSJbppWHCHDEH3MF4BCCaA52Ppi9CPmA639PC2kHzfRtiCrjTwq9EysFmScXSD9koYMT4w9",
  "key4": "5CaDZzztYuNZNVfVzSsvtiCSH2z6kisgT3ukQb21d1392swrA69WAu7ekASCWkc5ptJMxMRFTnkKyXCxAiLYvR7T",
  "key5": "3frLAwAb5Pw1b6REMgCnyE25f8NYJJcPmxwDkiTwHSvfhxJLZskcHET8nLVEvQtkQwADVJNXqboXGQgYgv6UdASw",
  "key6": "3rKiYAhBM4DmDMHz3brcKjUPQTyJHGNLPTsRec6Po1S14Hb5KabDsCg65wQRdSW68QR97MMHWn4zA92ZogmvSHTf",
  "key7": "zEFyN8t3HizrqGvJWCxKYmwiAvepJ8eMtqDPWPxkTVc274cfamZh7T3Vx6rXqrVZJKcukrRpPovK3XCkLgaoDjm",
  "key8": "61kAUXzajopd2vS7sxeqzwuDH7wtJjPEo3cD3rdavd6qFdqFNV8LDRwUo4Zfti9pBYtLWZXDa1ZaaDzJ3ix5AEWM",
  "key9": "28krhMG1Pu4MPQfCTkDnfSsRsqcNJW4tZfc9wximWjc4FeripR69w56Es21YDnUtkwfGLDtUZNye7GExiYEFKwJq",
  "key10": "2CKv8fHVXA9MHXnrs6FoU2oBPn55JkjSR5jsLCjUsgqwehh67rKa8zaQoZuf5D8zbjkBGMtgF1huyommgXQMsV6h",
  "key11": "rTcfhiaZ2tkaPFMz3LTnQnhWvyKCAet8oyWAaosQKRv8vJZzcJRxbtnoz6kwR5UB34mpvbdAWHHSVHuH8aXBX89",
  "key12": "1Wx9u5Q6QYMveJkahibreqhBZXkSTjzAMVZ3W8rtTWMSpNKuGBRa1jC9nA2HyLBrgvELpRqYxVtwRqyKfs4yTUb",
  "key13": "vPFKQumthBgZvdCMTwygdXJivfV7Xckvme4nm8x7zZoMjMPsxw1kWUSntDNJnSNQDtU2aXptxyneATaScu9LxTm",
  "key14": "36eaUgaW8Wsk5CQBpd7n3uTqCBRbq3ei2M1kRz3rEzQqStxa4qyKBBjiGTHu6gg4KmFtPYFG1NtQZn4GMCYQitAv",
  "key15": "4bYSeeYrqodbm5L7wdJtBng3JMFxzLDJ37gtZaW2precMuzZUYnGTRnhS1DuVLnpqWZxeoLjy6GWUNuNMWm5HBfG",
  "key16": "5KwB3gVXzKF1jFkkV23UgGAcHWSVxtQhY64yg8SAfQ2tB5k3eGewNpEbQ2ZHbdBK53j6oYghn1qK5DN3o2f9Huib",
  "key17": "44BapLN3aeM9xU4ccMfJn6UKYJnHPEkYecxMSTBCnzBjbiNd91dEr9MeULdQTA6JfFEWXnbCiw8Uh1xwfkD7A9Uh",
  "key18": "iyzYoi9WPvJfW2eocEwnHDA2kv1C1ZZJ8Laq7CbNSiB23mfNz1VvkeBe9rwNQa5WeXJAEeDh88xm7JZw4HTKDCu",
  "key19": "4wn3MBBfadUo45CHRekEhqqXVWbm2NQVzLxQSS2kTKveKc7AaupVg68RqjEC9pjgtR6vyidhJaFFDAqRBPXH7WBA",
  "key20": "hkkNww73XSCHpiV9wYUv2QgmSooKqDYCrfwD5bRGeRtXL9PnRxrYmiCqgQVNF7nxf8gRbTCACZnXxooUb8E56H9",
  "key21": "4pTs2eBMqcFgHcq12YCoYEC5v7AqiGACLtfEGfsvXkGsMFncii7JGrCCwSp2gzrdx3PFEEvTMJWo83bTjixTjaHK",
  "key22": "5EYgJ5CmduKnx6poTAWg8ojDTn5sTFqxBuyLHAHBAaq7xLbw363vPskb2JuJMJCV5CKTjADgi8Zavu9R3x847wvf",
  "key23": "2pameqPgJ9uY2165BA3HehJHVTuzzWbNR41qKxeSc41WCA99T2KXWTZJpzak52Mkap8GwZxjRKxi3Mb8TAji4Zhi",
  "key24": "veFSxi1nP5tWPnH78FWDFymZpUGs9PTDZscChQ4cSPUZ4xsuiGfLukj6nKTisJcjV2XA4nMozZmnCr3QGHXTT76",
  "key25": "64YZo3xeNykcNxesWtV716xm55vpZY84QifN5AbxtejNYHw81D3phkuPRs1EW1CuXjutJdNhJDkMdXAH7BCpZHU7",
  "key26": "3r5engRAoqfqqUqr9hx9dF3NzcGWon93RET4vL2ihE37JnekNMwnt19y6XeMny2nyExNQnMM1BhjLSfwaKGWXZ5s",
  "key27": "4MFurfzyMTVBqK3Eu1sSFb2frHV9aAALPPzhYt1Ez8uGwtA8QTKC6oK7DxFmVFkHAVWyoLbhmZtjN6odSBYEiMpK",
  "key28": "5CZtLpWLxF7QMNpGmRVMbUdxv7CtstH83ZdTc3yw2iCfTE2dYq5XBx7SYY3KXeEsUSVt5xAKmw1451K3wFTwSetX",
  "key29": "5NVPhpZGkFnAbuNZi3Dh8JdtFSgtiM7MM2a9brEgPuqXdAoVKQ2Rms8oXxiNkRPEx7PuraXa1P4vTXQQEnARrUHH",
  "key30": "GPBdLbd2wJKTPY92wJTNAXm5fQQaBYmgbwB8u1csK6qkTXUzw7A48Esqya5iZyQrQUDUitPKg5VfiTv7tT1Mu5F",
  "key31": "29qrgekmvbK5MsTairMcmaahx3XHiq7c6afVVDdV7iruch3kokAvYmGDVHkBP9LAUc9XfN4MAfUwpKRwVw25QSn3",
  "key32": "5QsdvtRjQNTtnDSZ2YDpKgwjDpyhJSZubqa4Pst3PnMi1onDcf4i6HRH8DBVibRxDKe5y7oMbJ6dVEUvGJwxRqtZ",
  "key33": "3TCE95YeJeahkko7GNioUwm7z12hQpU1G5tb5moKc9Z23GXw75o4LJjpasb1cJnM8u4ZWYNp1yYvMzUA1bHc2Ssd"
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
