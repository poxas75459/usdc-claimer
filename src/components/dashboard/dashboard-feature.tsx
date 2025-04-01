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
    "5sJccj6e6xsPjDdutca3XkkRjzz3kLrA6LfUYv2DpjQJwh4Za6rs4NutQYzNe7tH7vg55Wpu1bmtpZy7PuBS7QDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZ4si9pQkBCrxQv4aR4zuQx1hsWzzCCD4F2KmPJpREL4cAMioMrQCGJsPnPBbCQB1GrwBjEFBz3JezBxYTpG5yn",
  "key1": "4ANFbVsf5jwvBNuer94vLAAc5ZgzcsB7cSndcntDKCkwvEbnx8NYoDZkDvGUmaKMdbrmBURGMf6uVqb4rSahp4qA",
  "key2": "3WMk9iFe24upQGcDxNJa3TwnzVTnXuU5PARmGAvsMMf8V892ciZPUYBwjLoVCrt8FMCD2a4bYRYXd8dGB26dJWbV",
  "key3": "3pTjSTWiT3y9eN2Xb57jmmgzyBEPferdhzGt4CcsSJavdA8ZMjX4ArFqFLgSyW9yGZXMM8RZofzHJPweX9X1DtcB",
  "key4": "4y3ULQe3fSYgj8S7UQQtmSE5hAMqjmLrwbH81iUhbnZn24UMxr7PjTNjsi9bMNFNWazzPN6ZMDx1LX44rJnBAGmk",
  "key5": "5rLZx75hvLXsPjc8UttrsRsxB441mjgiTS1jqBWa86mHXxT6g6HbYKYLjrGzrqy4Vv4vTVUKfk7p7JdTA1NJtTFv",
  "key6": "2HaheS9RK1L6FvswhtXYgDkW9UByaWBVADW6U9s3Z4o6XFRqqKNhPMN6HRXQeyKiwVjfFtSFCeWP1Ea8dbAdUiM8",
  "key7": "4YDpNMdDqB9r3Ji5KkqbygaEQqVZzBwBTTzvGLFBXNrtZbL7vKZzR8b3uMM6fDWyGvLWeYEby4EvWSqhpkzmtyLx",
  "key8": "4g5dpZrWb3kqpyWq6VyS5FXm8t7dbyKUi5hqLXyoHHT91DiZ8eCZkNSB5UxMqYvNJAMna45w5Zkhajz74BJyLmag",
  "key9": "2iNb7FTQdejWPovBvbZNEYP83uAeX1jRJrVxTTqC7KdfPzHqznUHeteQtehtCuYn3TiLJMdXtruRuxMAbLd7Zvub",
  "key10": "2JrWKZ6WgdkCYqxVTKeRuyoQaMo5P5wsKqeK3GyyeawTVc7cv3ca8Cm8KvqQua1qV6CFQCTjYj44BYsKU5yGkNve",
  "key11": "3YDVAmLP8XebyqVDgNjkSzVTFKS7mvikyY3HZpzXPy9fMpmZX5YBUHCaj3Fqh4VHzfqqn9MzpKzB6vaC88fwp5d7",
  "key12": "ZMGDQK1iQ963n3xtAWqL16AuqaYvYa5JDXE5GvspduNFUMm74WuV2SJG4BPW9GyanGhvbp3zfPK7bTqx2tZ9691",
  "key13": "5tNLu5uCAmb9tZMuMGjZoDuqxd7KKxs6DvstyQoddKH2TRzsLim6QKWjkY2ZiQbG2tsE2WUbzZF7ipsF1XkxcR23",
  "key14": "41qRZo7BZfSBxWMqXhbxwuWaBbA9FFrfZB9bgCKNasMS64Kj8wjwPYV5pkbTKxHd5SLuoMKAEvEsnMY78AZo2fpC",
  "key15": "3GXig9afU86ZiinQF154dK2zneHpnA25gNMMj64pRASZfyKZGn3Qi1KakvuDwU9Ejteaun5XsaH4NKVA575mEAgu",
  "key16": "5hiUPLDbNHvqyDVDSwDunwBgGgccKP1TUYqG5MbHxDKJGMVzaejunHFPcbBBeFtqgyfyn6FaBoNWZ8idycM6G2SP",
  "key17": "op8PCoXADgouSz9doKL3CEZWrajaC86tiVJLuUzMEqTAPw2qt9XfGJReTSo8resLvcPAAQmoZh7aL8HQrSzJMx6",
  "key18": "2MPerTeqUQVbgifLcGhspH8XcspjARHCn6X17StRibVoJidujPK8KEPQBrrDh8gB656kGXRRQ4nFDuazYHVboNSC",
  "key19": "4bsYtUdTA3M7fkxXmy6SVYeGsWtBPByx2N48KvZgc4vGsmeKnCk8FoqbFHZiTArXezXspqnF6yRWKZyqWspHzTvu",
  "key20": "5WyL35E9FDQvk5gMHbYyEkcFsJgGZ4LkxhxCkZ1iseBqMVRgUSGQGb1hAGouDPSYq7hRbEdqup8UcrqWGRfp3Koi",
  "key21": "4WQHEw1AkfuzxYZyLjyMPWMbFzR9Rp3YwovCryiXuhA3FFHH8BydXjCUPoW1tydYin2g5iGt2xXNerDYr5VBJHyC",
  "key22": "5X3yx6CVBSszGrKo6BtNgXmizQ24ihXsdRtjEWsap9PGZJF2vQccK1hdjvYxT1Fh8TWMwfDqm19oeThMryVXtLSn",
  "key23": "3W5NAd3UMNCGj7KBTDWTSHHN6xuUfgck8HzfcWg3x6nqMuUSNo1cgDnCY2R9D4x8wi4WbjvtktMsc3Sd2Hs9KLW1",
  "key24": "3KvSFSbd6krzNYSo5XAjUepaKPyTpftKPy8avSJsX2J14gTXxvMBXvMo5U5Q3QkjuytYuZR1mAmUN1yhcJNvArJK",
  "key25": "51uJbweTJndMuAP7ZBWbiKwVxhNZ2A4hTrWSQx2q4vQGXNycTjLYGyoKjfzHQrqBJQNtQvCBJqvs4Q8VYZBK3EpS",
  "key26": "WbebPjYZRVHZbByHTVU2bnynQcZtCx9HuSSjx8awvfJViNXSR8YkCuuNZQLdgDr7jtxSEoQFgHesvthEnEQEKv2",
  "key27": "2iffR2S2U2r2RkcRocGFKKGF9behBuPXKWhSaqiVmYE69ewbhqWrtMoKn6K1qAEVNSbCMs6TnNSba6z7vgqHBgwZ",
  "key28": "kEqSJkAMzY5FSEF3mHdR4U4gqBmkzoBQDFVreMjBSuGwsELeZQE5ndtoDWSb2BaqRkp2UWy6F3GZuo5UaVipqZJ",
  "key29": "3DFtaUnrE5okgW52TGpUXrj4ceiATtRuq2LRh51sJkx4zjReMX9J5X8M1bJ7feY5cdp13afPN3itovPrJd47QMwX",
  "key30": "38qMsUT86SVTHYUdHadBYuPYxhY8joRfoAPcZWYHvWEimiV3mUX4RMnRDWqNPuL7LpQQQ6FfAXECfgJjQxEuTKQh",
  "key31": "3dPSh1nqo2fXRZhUU6jU3ynKWHt2CRCfa25csWYwmcxSxGuTrwP25Ch26hjZYeb8sVSyCR62p5uesJYnjhsTV4zk",
  "key32": "45BhMSoKfybfRiDgRbRhm5YAcPWqtQP5JRg39Lx15SE7Di1sudsssjZXZEEpjriW19747492SKr3wv9ZjbwH45A4",
  "key33": "5zuvYcSCRTeSAx3NQpwRUPZCE7dEKJ9wcpiwgQMuAMPFs4CjwFyeVuS7u7qCvhbiAWZQCSd9WZUdZGyWdyhsKzWt",
  "key34": "23bV6YAg5WSwQxUPtyyfg3RMDip1xx36cqNS6n9XAr7mDrbprXXhgkXxw9QwuVLy4jxFFKzLxFaC2YuRHoD3cL97",
  "key35": "5ksFxzVciGcQfymGrbzXdY9y7zNBPC67PPHZpF1UkYD9vA5oZhnUnsQ1rRwm1TMYiB9TsYNMyTdPhX2M5gNscrXZ",
  "key36": "5WEKPuWbEkXnFyKu6hC5QBnp6USqsfi6bBinVgPorFaRTVWCPMvspiYmqeendfXBsMcHey71R4LHPzuZyevjcVL4"
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
