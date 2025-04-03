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
    "63uJuPiMCZ7fUmNnoBPYFYVjPHS3Qu1ajfc5CLVtfVTh5CDGAfGNXLZuS6zgRQqDiDPzWjApFbAkfYK2LvJN1eMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZepw8VbAittgLDarAwx2LRBLoDtKJZa5u1ceY8zB5hB8WrrE249bqNYHPdHApoN3SFPwTfo6vGjcwzvWb3L2Uq",
  "key1": "5kUiUwjSgvRfsqcAVLQ3DtjLGzM7jMuVZizWwVr78YB7NzjwwbTtZHnfmmbcDtcxgsFvTEdckj3JcAFjCw7ba4Mj",
  "key2": "2Rwvwz4EzMdBQuquVPNJQaZ4mN3xPJGw4FKG1eYbWd2N4Vbt9vy8F9BST9sDMLvxq4gUpFqCXrLuaKxBCcB5FNa3",
  "key3": "2VLcgkVg5iuphGxKi3KBewZmwuN3XhQhTJWadKGjPdktPW1VoovejKtqhmj3WVrRo5nsNa1y6MUE3zUDEvXT6NsA",
  "key4": "5BNrAPHWxHBPJT9o4pJWfQXXp3Lipd9Fds27jDgSVFYwsqkiTGL28q5qKMY2p5t7G1BdYX2YvCUv1h3ciYQShuLc",
  "key5": "aJdb6HsecjK9aWdfCndQqTohbh6HqBpQDAySAuVa2UWwpYF1NJW3othFeJBTbbfVjek2iQbtgmGRSzpEFYmnBBS",
  "key6": "3XVe6dYPXQkXh8JSnEhYV19uaboXxADXtTLjBnYQ4j9R1Bcn8yLj4nSDHfJLyaVHvUHZMWLWjpw2E41x7dhSYxUN",
  "key7": "2p93PkVoNCz2r8vVC2n9TzZjTCCi6wXBXhwoNHhTZKhTv4aAUJRnV4dfSmsEGVNBToQGcQ5jGD19fqWSWJAfQPSh",
  "key8": "3yNLCeaiXCAug2mzD2SbfW4ziRuCbjEePLY6S7tYC4G4nYLXviEuPaDpzTs36jhhf37om8PEqFpQMBnV8spRDZPU",
  "key9": "3nVVyAcLKLpeMYsbeLoiVDZCj6ZRDqoV1HyB8P7bRyyC3k6cxEwHBYxWtUgmvYfD35LHN2eLW3HSY6D62JoTDR2r",
  "key10": "5SUi4d5ho5MREhfo7sK7bD5L51yPi6vUqXTXAY8WMQ25AgKvb8SMJqADJpqmNM3ue7XoA2oLopkRKDbcqJ3NBRQY",
  "key11": "3wmD9WLid2okwwqHNmRMUb4gTQAiYEEo17EUK6rNHdCu6rm16mEiL15i4AEbyZrhgdpRb5aXcQK8Q5TWCQ4c94Hp",
  "key12": "2G1A7WTcpEsxkgpWy8AAPRVNPoA39GkRNLtQRvvMgkF4SMYJRsv7Tvc3CWcyCuHbmrcsJHDx5e1STEcRm4GBxcb7",
  "key13": "5iNGk7EDGT8oss8N6rzjKTXkJuFTAsHbxRZfSeprfvpBGZBmPxbqfe47pZAPSxxts51AZe8NZpBhgisWSExMQ84S",
  "key14": "5zeRbNFdZFzbJ1nGA4d9xB1Z93MDbc3JgqV1dU2kGB5N7wzYsfLzigtxLwJY3VFTTcMVPvM2jJL1m6fWH8PBKhUR",
  "key15": "5YYC1Edjdwapv8kKA1AhxoNbrJR5CCH9Mgae8jZoRMcBfR2H6ZeMuC3F2BUQSAtf5uJcM2VZBSpbzavweMafHF5m",
  "key16": "5jZS67cGUDUe6r494tnxa8eBeQBcqthutTZc9RPnG5uPYqduRmZkgNcP8h2dghYtkNHcRn76Z4rrci1ZHgcQ15qJ",
  "key17": "QcYNYUnfyPsRSdYB2zXeMeKnU9Dh63AXS148GniB4DtfyFvC6fSJxWE3q8czrQm53PUdC4YFgvk2WvAAo8SFpgV",
  "key18": "62D4NFedFdUBeYzBHs11kAkS4BLDcgVULjQsNzAP2Mt5SoMHZtFHWfeB9EnFcdmNaFtJtiCD6DrFdcKdmpvXGuQ9",
  "key19": "3jp9y5KQNdKyJg6Ua4MWhQudD8zN61UJjbafSPa5idzcztve1mNiZePWAyHjfjpEfrn8ffRrysX2PaYKeoZVffTb",
  "key20": "5cbj52mddZ5ePkJ9SALukYNjoq7BkXJi8co5kiZDMyntEpaJo7Lw597pcaBpUXZQtC7wQtWVATqPymnNpRPV7zgJ",
  "key21": "2RohkXStW8EDyK9kFAmtMrGtfdgkNxga87jMoMBC3VGKXnX3ks1CD7qPCdsUpTjMs3ettg2JdEjVSBgFLUQyG6HU",
  "key22": "3QqJa9zxPmmVcBLeahbnsiWn7tGmBzyFYwyTWwWeV5xQJqMt1B8XSEBRLvWHBg6CihoQj6jiN4iqMVQja7LsKjWb",
  "key23": "4h5aNw5qHjPvHuUNtucEqzqFYg95SsSwEFvF3dVpzmC6zDdpfvUxv3VSEFC5JtruCeg6SoxocmTP96sRwC1y7np2",
  "key24": "wLii8jMnG4ixhtqKJNxJ9VKGiXRp7A4T7KKwpc7QWPSKp7M82AeCKhzBwbDq7x9p6fJCKDLE8xM1WEWJFyzBsQt",
  "key25": "3ZkRXjhZG5hRvPgAfE8bJeCcriQRbJWfFvvyovzFVB9UeAdHYzA4s2Zvm3MoB6ha8sJ8DSFxCjJh3RHNBfM5Ss8s",
  "key26": "2nkA7i4kjuGf5G2Gq5Xcqkyi2ofus78QH6Dq5QMeJ4wguEd4DbfSiSjhz8JUKcmsPpJ65TNoLPxwchCt5SKN2cLV",
  "key27": "5AwtEuZ4W8UDAtTi4BNtmefB9BpisrpSqpPTLUVdGkXZA9EEvmxFFGZiNoiVVzxYDnLZqZNyBMaVhdibdwhwwvvM",
  "key28": "51LEYm5qMetGQckutox9KwiiJuPTSr9dD6EedtsH4ApK3AFRcSeD9i9fUygK9KNtreDwZR8mvFCUXKgcpqEbexN1",
  "key29": "5zEhMj38bCfY4r8oXyqbndWsBsar5iVu7s1hWgPem8szS84kQDJhRjTJG9a5zs5eP1boGKete2uUVpRcUvhydZtt",
  "key30": "4jfpu47RPABBytoAQF32AawBBxwVcKMP7JwZhLTEiSJqdbuzX7sNiav6LTtikqYboHDuiQAktynHrvWdfY6wMqFy",
  "key31": "FGGTJjedM5ixowGzx11auiipdT5XHaJpo7s21pQCi1maGDYQc7KmuvQNG6Hzyi5fHKFnPBrcFcJzcbELRmtL1TN",
  "key32": "4J2p31XCuhqVub28MEdmpz3rM4RqqjDcgZ9rAtemY3t7i7xtf4pJuXuh2hHd13KvVtryhmTiwWGRLv7ann6bCHwg",
  "key33": "D8eUm5kxcYwKVbraHxZZA1YVhmHTXteEhVbkUqs8JwgUfFbpNdrLvqLXzz8QYn1soC1iqdeTHxeC14tXFtHExiw",
  "key34": "4RkyGtk51qV93SchtnR53EcA5boENspVHVp2AbgdQ9GkwrW6fvQxKMEmH1m5AckpQCMAM8dk37f1iuaijUQvmktB",
  "key35": "5RUdgRamWfCoqqD2fwbJonXd4VknfpA3hx9Cns13m4nA6bvRywA3cWMGrXMFGYBCoPt6xpEpeeKg5DVmhCdUtSqA",
  "key36": "3kkLNAVHNK3Uyxt3DNEFnTnLAR6GQtRPbVGAgb3ZnxjtDf8fgZGcu2aVQP1xbsjBJWhH5sMTXcGPmeAiykEYmjrQ",
  "key37": "4NN9oGCGPJT38B8MEQDoZ3pNQ7WqANguUwBTFfC3QsS1GdeUpfcQorPcy6PZYcSqrjbMEnAfiesGiCXhESA4rVhe",
  "key38": "4P1K7UQnSNEqMEYEQViiqqgMoaTU6KEyu4UBAii1VvnFTnkJXy8SLSAHZLdKfzgqnruYUmykJqy2BzPSA8fmaM8o",
  "key39": "4rHcNo4QWKhwjvF73pTwQZdAyipah3XKbECBvoW9i4L4ECpS5sSozp8Y8w6MGCvPi6C4moUsSxHvqdtF5zDRjiSW"
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
