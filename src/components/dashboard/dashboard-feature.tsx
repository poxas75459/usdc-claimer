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
    "5U7UmJLvVQTqDFrqhuQPJ1VyT6U1juEfT1UA9i5gKyj4jqV9FHB2TmZpuZff1y6iyeAc6wJ58EsvwQvnb9tYWGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQQTbSnHjWJ7fW6LAJgdFnadkuT6GNz1BmMPAF8mcUDoSXuBxt48MwDi2w9mHqjapjrWRJ23EDgwAY2kJdesJSC",
  "key1": "24ufsoVb6fdFhNav42uQNk8YLnpHsG7aEnnLAvvTdxtXTqHYu2EgmRTLDEQxbVr1MCYEKre4E3BJh2WwGqHDMq6A",
  "key2": "WttiFoHoDWF2tZtGfNjFnvQDidzm9s8XJxdZ3dxFZndaxDvNiDETMhezE4DBydUgJScfbgYB8dkEooHizuWsuKF",
  "key3": "5iouQ7ny35Gyxkv4gLMFP46e6fxXq2LnxaeP5eKTBiroVVywheVAT8C2kB1sSgzn6NEcTQE3ofZAHNPTedySEyyt",
  "key4": "5tKzi28cezofeHTgxAPLc6qzMX1oHPLw5Nad5zYmpN4nVy9L1WFM17ePXSr74bMY9NAA8uAQDP6C5QgbmSY84AQw",
  "key5": "2NazhgP6ytmyys5eBkQdYLw5HMt2mjjbsZAHYicQjSLNBho212BtzkFbf96g6Ksuajt5UyE6wm58XJL3T19gKsYz",
  "key6": "2evDqdHzD5Vgr28fdn3wXfpbrbDdXnToCRrTMVGsrXAWseKJndnbXXWm5naNKYFu3nswJU3M5Z8xVDsy7gAx4TJn",
  "key7": "122HWv9aBcAEGvKJRoU8UmwLdAv4aRiyqs3Hk1Xw9WD9gbTY39rgGhuKb3mQBT796NiM7JwByERt1GuucC8p28X1",
  "key8": "39PNSFP2RcpSgweGrPzfYoyyrihyKEpEmwa9CBPphkM14Ad2DRsGSokgSyKCvptnKKvDFRzECxmEKRdE27HhWDk2",
  "key9": "3Fo3Dm6zSfgA89MBQkdkKTTsSvBVtR6Dbg8Cu5xZmVANn7bqsXmpA2kvEFuQpkqZMUeKS4BQwjmHCq7Ep65RewzB",
  "key10": "3CnJVhWtqrbThXVrJUnfydhjf6jpYUtiVQjnMjsz1EJwYna3n48aHwtfYsySJELiQCyERho8pFGpUyZMV6dwK6aj",
  "key11": "42hxaARjcKKqFeAdrLjPnSgCa541YFgCgcMV65FViNv8aThu7wfAzq9MN4simhPSHAvVYwiGMXjmbSRCZB6d2LZ6",
  "key12": "2Uf8jNcm9XQ94qHuau8qVnV84bNoTdWxZVNeMqgztgsF39jPwVocSuAWYPdke3WWabimopQvLFxFUFD86SHsg1KK",
  "key13": "112A5fjq4Ee5h8kAxv13qJrgN3KAnpWmLE5ALyJME8qU6zcGUquXTC7wnC6EL5dVMxTnTxKNHxb1hYQmebavdrG",
  "key14": "5atYyLES36CVYE1BUJQtFeqGvCkBBeLS7M74S4ZZegWu4Ed6XLpej1MSNR2p4hWUt1jymgHBmvmezGwsAqk9xjK9",
  "key15": "3BhbkoXkVcDp8GuFAYf7XDxHjSNeE3x1fBQocmxowGKNiNvj5jUs9GX46ZNGEsyLDfmyzTqfHufmW4UGUzw9eZ5M",
  "key16": "LEQg1jE6EHVxpYBphZDfEne2yVAzupFDnbVGf4VXYsnz9D3SsaE6PcACQn19iA36kh39WiCq2URq9gcSc6hXk4r",
  "key17": "32F7StC6i7tjHH4cXT9io46tBKDBmf3DvAHLAFDRbx3aPbsshxmSJr4GWHf1AMreMUDBcUwUXS9Kt8cKTiFn7ui9",
  "key18": "2kQYqVGHQL89HjFm7qr65r5xaTKpdCKghmudLBkECNyF3XURshdiM4giV9odf8ppCmjr9kzpeeFucThn9TN9usNj",
  "key19": "iDELjhtMxeiZkruGLvf7LnQdRZhGf4zAgKc1NZMoWMXUDTCBSP5etCXUmhPqnKaSCh2fAD7GWyCS3aouokc3V5L",
  "key20": "2EZHnxt5TdJUBzdqWBHVoou8pkVGeDych1xn4UrgCunsDAM2NSbjQs27CZeDMDkhpSu9tUQxSuvGSdrchmC2VNzt",
  "key21": "2CZLm5KPdjY7Yaoy5jPXrQyVHp41zxMcqNGaMvHCEFD7Wu7vB9sWmueh7uPNRrDkEMJty651VZfUkRZzi37Ve4Pi",
  "key22": "2k4nZbM5TXRFo5fkE6rbY9MSpT2sTvznwV9STUcME6V2bQi5Stq4NmmDsuTLLK8APc6BuvpQ8uV1Gc9oGDVU5c6o",
  "key23": "2HJR9SbZCb4wE2DgHrqrX3zTJVBpotwLWmeLVBcadbYZcTCn9WdK1nXVsqG4JZMD9rdpuSJRxRskTLP9MbvdsS5h",
  "key24": "5kcr3cWTkogzEVobxr1uRCSBa8JHwriwx5FDV1c5hbBFm3HN1QLyaooar8WCJJjmFpzU2FnsJMEo1ooskUhGmtcg",
  "key25": "3aY9Emrp93Y3j6FxfT8xJjCiKQNeXKt7ztjshJdnjNuYBtL3XX4peGez6dmqt9p5rhRTzogs2oP8Q5m7b3bLVXAB",
  "key26": "4RKvWws5C7Yz3zdgXQBfWamaERNr1ERFvEtyUPnF9nr6CMTFQNGVe9ufzm2H8UFi4zcc327waPSfr9NwZodgbUcR",
  "key27": "4uLE3NVWPJ9EYPJGCSZCbHH8A2pNtfxdEiv73Goy8xJfH9SPyNhgbpYG5HvNqjhvkMn2AceRcemC6wy29AEswHKV",
  "key28": "3zoMFGXeWk2cbku9Z2fCGrUjjDSTHeE7yw1j9PVatEwpKQeJuBadADhMScZr3XtQYWcB7kMYQuYJtcJa1qNkicdR",
  "key29": "3j1XnL9x4P9H4iZvcRrfogGmowwAyNR7hXVaRQJNB2NtpZrtQE589MXJZvefYsZgpEDjwfBiWu28J3UVybQpJFEK",
  "key30": "AgaRkFaaXgWGE9zFmoP7oGQpAWJWzFux7HTsL41KjMexrNBQPxR47zKtMfb3RqH5qn9CmbAtfYxaCriQELqnd5T",
  "key31": "2f7Bs9N6PueGx9SH3chMGsqWKexC8kQ7TUajpXvMeuqNJqr9JDSz8rysKqjECrfWATfqvJ7Ke6qVmz3AcQv1Bu5u",
  "key32": "5RJMxQQBZQwSnxfaTYATtprv4maGd4YbUs3YvroR1dP5otGLuycE3bp9ibHEL2X4R7pYdddWLEm173pcKJyLhnu6",
  "key33": "5cu972dKdk7vjEWvdLb2DRRtAWSW7Mt4HRQv2Z1XeEf9eC4VrpWeUuRma8THJnPF29dfv6uMJ98dbj9VTk5kn1BY",
  "key34": "UyrpevdkqGe7Mz4DjXsaRq4gM8oy23og5iicf4Vn6ewEXHFvJueG195S9o9kL2VqeJzZuY4k9ZDPxru4z33uUjR",
  "key35": "3ix5guXVkTGpb5BWXNQBS4ZaJyENpmioTKiVc5RVaoHg9nvb4Mh6ahCwomU7T72krn5nrNzcXnYSNjYB41oqaTE3",
  "key36": "5qG3B4oZ3Nr2dc9rvbtiiNEJeRYDrerh57NFGdwn1s2Bu2KYEmxHsowcHgFgb53M3gRZQeBR297cyVK2QepXfEU3",
  "key37": "3aqRkYq2W8DZqckchYXwtfJkJhtKkNyi1bAGvpdrXwxfkuS6vDhUqYHiqWcVq6oUoqKsmZrAPyT6qHvRVJenHvA5",
  "key38": "5s7fsW1pD58oYMk4ZdyML69iMsx1XrxY2opBitWhTChaxoQWgQipePoH61fiuAL2zeY8Kvo67imQLKdLDho5Qj6b",
  "key39": "4hmRBropfVkyUwhjgd894cnVyR6eBpbnmwsQeqkJXNaaBfYmPWERNsutzEk63hDNnEnqXthuQPSZ1KfEcWCDLhZy"
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
