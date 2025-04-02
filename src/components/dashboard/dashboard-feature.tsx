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
    "3v12DAmzyy8L7aQLNhG4CSELFWR42mefN6CbE58JWfwF6hq3xC5gUQtHd561t58PdVajrLtXFSLaF9dorsite9w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEfvHk1ZJU9GkSJ94wjRRw5zimriQrTfeqRbA9T4M2o7s4f3VpCZRivLJtJdVURH8bDKvjW3Mq2s2nW2oufZKV6",
  "key1": "53t2tdXYupw68QnMcy4Uawz9ofB1uMTPKVo8dBTMdtz2WNr8gqa6weARRbQBPjvwfttpY4SFQQgkjnHg7cax9Bvu",
  "key2": "45XkgQyYhio8kx1UJLj5FyuXbnMnvzn1G46TpPHEo4yJqmB8S2HTi6qLDfnkvrktZERgScaZwtVHgreUq1PQR9Pu",
  "key3": "2cJDth5T6qPbMLAk1cx2eXqTRbv7K6884kxDVcJVFs2TRhWBRu5SKUSxTkxrqn7ZyQArN4YYGr32ybgjTwsuvRZa",
  "key4": "kTBffZfMqVHNCfWnmL91gcqRUYa85pCRdKQfGjKbNUBWyCMB4dxdKgRuLswhKBGzSy56PgyZnXgRPN5gXSDNAAT",
  "key5": "56ZTKBi5A6hqH8QjCaxjPvz8zwVJQZiAAnrRm2JpVx9j6k7ZGPksFhnttQXEp2LNMcp6kViJ3wwr624uR4fPNBuL",
  "key6": "QLZDiau8WKEVB9qVqnci1GTpiMYBCznytHnV8EuAXjCdKzS1ZsxHGFRir1qZ5mXePoSMLgmXB2ZVjEtYq4zrMg8",
  "key7": "39RzThXyPNSnPKVLSLpwBokTGThpyUV8sQbSBP2u9SBtArj2sYEUvYWHXeVe5bpV4g2bNTzQuVTf36En55e3iKnb",
  "key8": "3sHYgAUXGPGu3KUR9YfuzsZd8w3XqcEkNAGoE8QNDTGveVoUKPFEAbLttAwBZRj5enmR4R6eE7nJehp3aSCcVuze",
  "key9": "3vmd1x2G26xNJxGALAXYDeVBJBbrVNDSkD9quk5MgtRTtw4qhKLqeCyjKPbLasf6o1JULWfm6hYpjtKJpWLmkxzc",
  "key10": "4rPapkxtp3fDnjfbdsVzqdsFhLkNCrPsGy38CYo2PBwuoE6m2XyHA82xoyPtJNRZ7REhRphbk3wxPpEMU2uw6GHt",
  "key11": "4pnXPHVuJYiSC926rDbNLWyC3eaW84HZdQXNK6digGDQLfjzKTpB9q1MYG8THktM6raNSS9oWZ4PuDhSn3YnkEFK",
  "key12": "YvQm8WogmBer3tM8fKNztzybpCmCPsBjstxknKpB1aaEaQVWUtczGbK59LrCtHus51i67jJs2ZeVsH513UMPkjU",
  "key13": "2rAJcoFFbpH3BNZsfpmFF4by87CKWnYfuctiDYJTFDDXe5ooirswjggwF24p7mW6U88xrMFCfpTYy9WAdSVJn5F4",
  "key14": "5HKfsxMF5XAqZYQQ2Te4ZqHdKd62jDR8ktSenKpnDSD3BiLBh4mhKN2aHhGtAgKN3ZdXhycVWy1ZbDuEge2EYUYD",
  "key15": "2jTa9vXTmc9n9E5pGN8VgqQVgXbvUNn954o5XXrSMNerWAVJqwGUHmTdP4e7ekVBECLpNHrEUxUTYNNT5xSpv5nJ",
  "key16": "2XcGRNHtsEP8a1akJiTnqmgUpkXbqfvTx7L4BBcNaVzCrw86NC3x4zCmuVNnsyS75YQzGbnvUb4aLzYkCsG5og2p",
  "key17": "4nautBmeQAzfYUZSJVRmboXsrVTb5dqxVf8tc4rELRouGfBtZveERa7sKxxBxqHTDaEDM2e6dhJc5ZpAzw3kfGXF",
  "key18": "5XVPDuDRz4mvmvyjVwwNP65PorZS4movYedc35kVbeKNpjgrK79mz7Y7kGwAFvg8XnXnNTbZCsB5jJdtMGQhhndW",
  "key19": "Tbyc3WvuLMmXyujuGuHS21Xstdiuv6CZE73ds3PCMfEKpVWGrQgaypC3GSouXsxxfbCZ2BzfiLEtBPocuYj39uS",
  "key20": "XvghLvcJWN3PeZWEACJckEnSiLonGHT8GBa1Am5bnbv8c4U2opsJ3a7BRHHSX4NuKMK58riQ3z2x4wrHL6DLHzc",
  "key21": "44oZN6h7pkWrWQD6NBEj2LdTVR3dYstJjvkRKaQDt5S7GrbV2SVzTSNFjrvpLH2mvWkZj2hudbDBHCmyDnv7zYN5",
  "key22": "5uvRXEfj74VMAuSpAXrivUHx5WooTkodLz9Hdp8t3D6a4aXNdgkzxrMDYhxLTsA9LWot83q3pwua17RmmiyxXxt7",
  "key23": "2GiLJNPEoS47UiTgdoq1J6wLXj2NN2Vqm2ZXfMABR2rKP3tcZrsYNdq9XpohsszJeBeZoj9CqjTmakaxFSvqC4MA",
  "key24": "4b7XuwpogzyLhzML4wDtcuGiAMmU1hFqGX5QU9MFVyaoskwNKop2m6STj1sfKyZFfohSS3CaNSdYQyzqx41vWBG1",
  "key25": "x4N331zs9BRXMkhb2uGKcaC2sahGGo5QxYqdUo26MNxwh9fdTythb4mZYP4uveCTCvKJi7zdeJb7byDnwDVcAWb",
  "key26": "4SKSkf1K5buGGknPr2fu642zccLbxTUWG7rrK15s64Mo9rph7eyTHTsaBYRrQcocdKh6xwkGkNySxZF6ghQYUPwa",
  "key27": "n7qveUzwpMwL8RNsQ3u7AceVqwUxTyQ6FjKrJEiDo5wqasRCom2S7XSRvz5WRjyZQ8VXxZKH9LrhqzegrsDkXhG",
  "key28": "39He7pB7QUZqxz6fXurCsiYiZC6XiVYwo61CARAMzkdcinCQjwBwt5Qu9yBNNSgSjV295AsDcsSndVAwpKRbWZ5z",
  "key29": "2zQrBuk5RbHqWph86B3pDEAwpSXcFwPVVmiR4TeWmPWjo4x2BR2uG23rK8rRbCuc9JFtofZNAcGYPyy5aNqpppC",
  "key30": "4LaR4Fc8nXFa9dZSBzE6muQXBoDTcz3HHBCHt7cW39wESPsb9viiUpZvLP13s27NY7LWBxom7Q24eeeXjHi1wQy1",
  "key31": "Pk3f1CLZdWFPm4EZzomnmYzGhZs5kUPRM7W1aRV1ZSckRGP9QS1UJfwyNXtQsHtv9Sn4oCy3MZnacas82E2uVWy",
  "key32": "2Sf49iwVLoFHJQQVccSe1Em753xXDTFxM7WL169BT1TF7Dt2exC9GSqLXYQZnxPD6ikoHnRpDt1piyMhXYjcmqC9",
  "key33": "ydrD1wU5RJwucxJ6YyBJBykR9bmsFqhC3WMzntdzUN6VwsZFpVow1hFU5AjtDnZ2Vf7pNR4zQomCNCE9aQHJcLR",
  "key34": "2C7SqDyJK9AGvesqKCzXbT7sb3hgD87ae4q44csurkh9aKMEqsRYDxuiYV1nzdVu3vWXY7PAnjoGxDkGJvAApqfp",
  "key35": "4vF8JZDCM68aNubRU2E7DMMtW6exvZdio6K1W7gNUA8s3x51Auv26Pp9vKAeQWnDvUX1Q5yKyptUKTuVe1Fw8uJZ",
  "key36": "5CbFkwHySLA1qrJz1cAqSH19r8nufzjpcN21e6PjMA9qXUdxNV9JaNKuPTQxeiEfNzXnwFmw6n6ViRz6F7XQp33C",
  "key37": "5moUcvcLHr3W6Bk36rPmrtaT2gcATEeqwVgrxQtEmLt7jbQ2tLusYBCnBMU5FE52jLiyLVhhBs6Y79eUjQBHeHNd",
  "key38": "ow8GdYzT1JkfTqR45K94HUeneJWyKoJPWKEWgmk1Yjf9xGepTysnY1y3uL22EPRT9YLQATjjKnJTLJzAqtjFYoo",
  "key39": "SwgPHU1RPL8ryicZaZqz3dsrS1iPjBhLkULEUBVYYBKwfkRfeAuVg1JVKv2yWo9e9HHoedqRn27iMwoFCkmiobK",
  "key40": "2YKSgsDnnKfxbHEQ8y8oNt9HJ4sH33QKt5cdbVJt1QSh2itrwE5h9hjT2pHxuux7YTpdVzsoB9Di73BhiNBkyezL",
  "key41": "31emrzp5qyANK5Ac2skNWShDN6bEi2upxMpUfESTxApshZrfsYvUWthiq4LuDR8UtrS3p85rXjnuUp8rAss3HrRY",
  "key42": "5LrbepszZCAqzfC3B7tqsgDAiZp8scSPeVmJZdXCyp6A5gAp4Nz2X6xLRPd7Yqqe34V1q8mBYKeMRaaZCgggXSJr",
  "key43": "2mgA4XyXf7pkiDu1mJqMJProrQszTA1sizyyNxNWFkeXmhqEGiDJPSx6FvacZPoDhkRPpEhcGf6hr7LdDaEJD47Q",
  "key44": "52d7y8w3YZZGSVevhgszQMkbFMTP5N6bk3Hcmk8H2yvFHs4RuVjyBdKGvBQoNZzL3AHnv2QmSj4vYVPTU9fckbCv"
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
