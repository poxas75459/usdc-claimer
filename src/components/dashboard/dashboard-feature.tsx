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
    "BF5W9VYqUsUbB3uVPmv5EXskoudAzsd9qC4a6EnknSFVLqRCkjc1Q1HKyLyyiq6eqDFQjb9xvehvry6ejgVPqsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVDZv2TBPY6ynG2NG8MsL9ZsBiWSPB6YQsK5wnuiXLVgdrThaPvytcAEK5NgkMn7Lmr7UCeJA63GyJX3FvyipaP",
  "key1": "A6y8DE2mhoihzE9Yb3ZRRXBK5GNYbbURyt7aUx2WyyTs1WXx9a79PWByJ6gRp6tpSvCwRjjJYsxAR4Xhc1MRr8m",
  "key2": "5diJy7AbSFTWot4sb9wUaKQC6khEHi1RGyFCK5FnBu5AFC432CKvRjKVHaFy2c6cNrzbGhARYpHX2zu5XosT1TCx",
  "key3": "4m4HDJLj4hJ1wid5gJDmFKz1qEDsFsp3RC1cPtbvQf7oZeV37bB5oCFafvkL3Zb65Jm3oVRVTCtLgjyQPfTPKcmu",
  "key4": "4UNMrsBTG2KHDHL6TpwGwo9zhR2FBdCyWhPrPw8XirQCKmmGxd2m7szA2MefWWSwUch5Woma6mP3EgEjgXXDVN7D",
  "key5": "3bZ6rMXxjfjNpiTMpTnHTyDEjgtBqn5c9cUpcgeuDPgaqSrvDjNYFpv932XCWv9i24EhfLTEsJPNmW2f1rErp85H",
  "key6": "33VBkPgbrsoABqyMm5k84CvS9z4fHFwbX6rSw1tkdUmkgztAub7nnAHH37TSNMNi1LjSXrWPR91sFY3iV3DZUZpb",
  "key7": "2khPX6Rw6qAX2hSv9whRGci3r7QZv1bZrYUZ7NbsHrt16yZb7deska3vgxHR8qp8XELgvbU8ThLaNNNuhETGBudV",
  "key8": "2exwrkC7VVugP7eaFCeLnekA6XR2SAJWd1dfE9U8pauJnrnm4eFtJRL2WUspd9dwQmMhRi6FtK1eMTN4hNhFZ38C",
  "key9": "2uQhzifqQA25Dg8nHXwNxJcXstqAmNsn4gZzdi1LXdcPW6cFbmbV4gfQRrADrfJViCu21nZHRpoUpassBURgqx9S",
  "key10": "273rJ5M7NUH6ZYJDbDN7Q29YPpnT2TC1R5ra4Bu9EoUVXG9MujuV581q5eUAoas56MpRmFxYiy9yeA2KEFARgdKi",
  "key11": "2eHzdKugjfpPwx1S3JSK47XPCUJfwo4mDeNAXhiKAjFSne2enTdbt1uWuWphyd4Njw4rYSZwUTt9bSbnmbKkGdBZ",
  "key12": "9TaMg8JuZqRwXcEfvCor6pqku71hAophtEXrAvCET7kKHvkWm7DWoCsfNFLTqDJiY2yuNqfVsFzVTU9DQ4wgsPp",
  "key13": "ChNAxNm5tgmXa11QqbhYfQfEH8fSQpCerktSKoWdRxMwNEacfrmSsjKyHSA3zPUbUuyGLkgr9fhFogZrmFaQKEx",
  "key14": "3PCCVJCJF6S3sNRKRtpBqqzbQZAvdrmqLX1kcVGa84Syy6XvzQrV3UR6GgeNVUWnA4oZK5Cz1cusiEtsWiM1ti3",
  "key15": "PvyrVQ1AaWZvXgvtwkNYgr8EeY9UmKF47Pc7Dj6LBmZ83eS5GYcr6Tx162EsL1oyxTrzaARMdJiE4CsPvobfNsh",
  "key16": "jD5UAAcxFYjLkESY5GAYRM6qYh2GLzbEDgFAuxvxmV5XoyodRz45V3edznoEgAkPYTq3fX97QFfzuQNKfvxgURG",
  "key17": "hg9EkXCy1RYAWAnQQ8QzfMafpvfq6WqdaQZuG8LUtFanBNE81PiXG47gXXagTPsUSzFm8zhCc5fLA8CUYxjK4H5",
  "key18": "N9dHZA1XzyT7E34JfM6SUkGwFaPjXsjLxWRfAjb9UmRgmBq9mphD6XkM3dgQQiJar5vvtEbSVX6jUjMmXj5Cbgs",
  "key19": "57EpgY9Hi95i7TPihixoZfa1MhXDqV2PKNJnuMDp6QPMjuyq4VD84PLmi1Ate3hAKbykQePxVnj3GiUtjy4NiyJf",
  "key20": "urzJxtZ6v2jnH7AiTMb6rcK8jH7WbLDNs9Q9eJk5JKe9aKqqzzK1SPzVe9TwpmfE1PNWynw4Djv2bPRKp57JZNy",
  "key21": "2zu4zeTin11kuNaYaZmne17PL1QBFwe5N19rWKB9KqFbTdoUVpwVwa1hVdNm6M4HQXiVK5JF9g47P7j6T5ikWKdX",
  "key22": "5TUhBGQsQB8FXv92gxhXT6x5NETA4j9WrQ1QarqfHM45TTkNj95zhVrwcV7cZxB6jAA7GJMTxZtuQymkR4bZaXFK",
  "key23": "2JCarJvuviMjARNz5Wpzi4ac8gggJFPzvVFB9XNXogPhKa6etHtrJB1RWWUV8ughKKC1QE7fECQYynNm7CSMX7eg",
  "key24": "66uofDQEnYG6ek2Jda28RePujLbuc6V9SR1cojkT1tKFBvjmvQMAuZZLw9ipVQKYJHUt4JuEk9xAgMgHdstUrRw4",
  "key25": "5rehKYh8e2BN7TCSACaaBP2MwMDzznCGnwPDvMqmfd7A1QtksnMrJmFzpW5BXWrhu6Z3UCWk5paUcJLhqKHqw5PP",
  "key26": "21aDqNrTmfkLgoG9Nsny1zgFY9tZscakmnsHPUsbpH5CW8krQh66tfKDxg7zmHzVDnoLZLq5vJENtTGX25qxEJnm",
  "key27": "2jtZW4o5Fs6MdjoNHd3Avb58TKvPM39HCYvLSfiF2JANLXJPkaXJ5woKxmT88sKvoQzzWd8xb3SZns5eFJsT2fW2",
  "key28": "3gqMXDuD6B7vtHTQ9SYidzNmLyvJAP2ZEXZ8pDNty7fMNUgrEs6X7M8SCPomNkGpnuSQtAYBJYE2bQEW2TPpTCET",
  "key29": "5i7CmjcYuDbVicU5iD4Rx3Uh4LbBwiYT5gP8LtUf2rDUBvXDHa1w5ZkNWjRDuHVTEMNcJBxYWWjGRhx6u2ThZZb4",
  "key30": "oqt9zY5WbdcG8mAUgjMgwAtZviJczbY9esrsw946qxggBXfqDjW7HDkDf1NxZp6M5ERSUMkHXQiJVtntK7srTBY",
  "key31": "8xCgKbf8CA3GEr87QtGfTBtB2MHH4eVWq2oLi9fx5cLr9GSJHfvm52wML4b7ny5EPxfEzrq4wE5mMNqjfjYDXJP",
  "key32": "3QvnJJQsJawbKcERBosppaW83TMMvf4qzLNDdhjkvRSPMpu9TCazgUUxsNP75vSyYE4VYFqLVr7smRyzUwxuh2Bd",
  "key33": "4hUFyK1hrsFtAbEiRxsczrEaooaGzBnDMDDhpQSYuM82SoiNsdJH7pXAZHdL45kjdRHd4DA6twogsbqeBqESDz8v",
  "key34": "58oJGLBJPnk1mAoCHYnV749qQsAU719ya4VyXhMP7cRaxRVc4cKPYiDCsy8zPrMy8HahpjwVx7amprXZ2uJXPuWs",
  "key35": "4aaGf2rWNqgc4tJSajoBKcMYtXAAUyBpZ1MahWegYnsocbX5jYsKzJJxxCBQtiRSEGUPiYQoJfdXuRPkJ2SkTLyH",
  "key36": "k3ZMqEigngB2ytu12UbzM6PTKE2wsDhMASxDxkiTu7fgPEd8F9naadJ8ra2T74Y7oBjJWuEGZSHvCzefsfGzb9x",
  "key37": "4ssjoYWcv2wPkUow66xywccZyMRu424w7mBbyjHDHXQAY9GY5MbeZEsMWeDLETsnV69vNgwTFgMjUd98R3tExiB5",
  "key38": "615qWRoYyfYUB6NL6mbmGsDnBtnjGLDnx99SYp8RfP1dEvAfJ8z9cSWAWByexSMWPAYmGUz5yxw1FDCAbnvtgqVq",
  "key39": "29LnvMBRxBBHxp5WP4dhakkjLqZXbFgZHdxGJ9sNcUspHtr31EKPPFfUX2RG2p3Ba2cfH8Ufa55hCEJK6ynxEfSc",
  "key40": "gcrWpv6GxqiguWS11VDoNxdJF6QQvuQwvfA7ugq6EZjBtogSfNcptuHCw7SWQ4GbGwSXwxvM98rokPbsi3U8PJo",
  "key41": "3xx4Gs6vpbxVZJoGTMoKBE45XiVxSigXgvFwXpwbNBG4aawztqX52Ue97yYqmKU9iMjrA7YpKgT56YXMcvZcPE8J",
  "key42": "2kRAvBAcHLXqgeGveGV4mmRgik5foYgD4wRHHMsFAEPJaJ1m1rY5JUf59ovVCAbqbZHoPpBwRsehrWgr83KBamuG",
  "key43": "5jLuD3Cte5aAX2GbqMPxPa9ascAqwQqkFMpynAqoPtUjSHwvjR8cudhwyWXeWBX8xrKPq2mELHgDrUayom4ucjuN",
  "key44": "5nBHWoSbHKj9N6s5F5C5167utqmcHhn5AzVUKvvnnUUzzrjTWQibS8tJGzrn4KJhCmFgA7MyNwVKXU2xq4DXyRES",
  "key45": "5vZ1YXupj189Co6Tk8ja6EtrF9zQV4QtiggSQKSnDnKBSAg4A9nNGDzYHGK6qPR2JXcodMvh3gVoGMShCPAxm1VB",
  "key46": "62E64ksGDLBkRThq7zaShKeBHyPZxGkS6EXhRuUpWnLapWxz5tu7RWAw8U9CjN8AEAxPQw7dYxCRCKR5UDkYa5oD",
  "key47": "3G4WqYB7x6ebg9GLny817k8PVU3CBingpewx3GaPjZNRuhmjEzo5wmZ9GaJgUEQyPqyxM4WyyipFs9HbEf5H2aek",
  "key48": "3XRdkBdoo9L2HZZ6BL4YknwxE7wMvn3vDU9VgkBcv1343BLaNNMrWDXaX5j4X1w4U43tnw6R6e5VPPqggTM2EYuR"
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
