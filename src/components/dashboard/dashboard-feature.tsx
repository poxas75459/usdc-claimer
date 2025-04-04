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
    "2nGXGVwh3CarbsAbm3WA6B1oyG2hnS7U2ZrYMjSfrw5uvNWMippxpg8YWeLfXCCtCeEUn6JRsJxuCzWkEhHK6psF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X63PKuwM1NC2VENjizmyDH3nUTLMoU5CgUKmJrRrCZycB3vyPWakGZirrD2UpiczPQUfLiWsF4MtBXexheK1EwD",
  "key1": "2AQFc1JKmWoE3JXwajE8LfxLZU9RFTXv6DCZ7QLQaGMYCa3noMbvWcW3fCqfyKviveB2aejb8dPQz8WZWQNeNmd5",
  "key2": "2Cx7Nxu5b5LeX1Dmf9GMaug4do6E8rtyTFiQz2MbYupVSEviJeWsXn9dRvkDjCJ4A1fz6riCgMXz7Y3GEHVkDwQo",
  "key3": "5gNfnV8q84YmYUBcin5R97XGQiUrC3zuMgE2HYmuCJE49jtYXmqPhVhkfK1ipTcnFaGfqPRvD2q8Jkq2ZXak2Ho2",
  "key4": "5if6seDn5TXuYbyUe85wXSBroGRcZCqhmocyx4mqbKRWZvvsz9DxUs3A56ZDuAcka3GM7HyKcUoyN4XQHCxAefhG",
  "key5": "5w2Ypugx1CGemaGnjBuiw71kZtTBATLj9bvSZznFWopgMVLSaA8i5DVeuVdYGxUCWbi6RTyDdnWFTi1xBfas5iJD",
  "key6": "5cFCZimssrw8derHSBuUErm2RVeDii8eN3WHyg2RpGJnW4Vm7y9a7kvoYxKgArV9U6mNVtgZHx9eBeNpYa3ab68x",
  "key7": "4NukJiVD4EXEWtJxNRVVbMLR3nocSsPmpXH8W55A6ikfq4Yicfud3sATsNR3hd23BJ3GWscNitjk61afUv88n6Rc",
  "key8": "2fXSSR8Vvr738ZFgiCECMHxpHwBhsbpw5abEkJfVxq3uSSGtTtpb2iat8K7ebejPDRsjJsnzdqc9AvvzWMFUgppG",
  "key9": "4joFZntGCRqMTC1Xb8cC7RHnAMXQfyokA4vTtwc4A6nTyXUvZ49sXD3pJzDQxQ9at5LnHGvDfF5sgRMxcdN5wYm2",
  "key10": "3U8GZavVRxDyQm3u3dGpyJjp1FHbdm9qZKwUS1nj66pFrkwxPXcUGeR6rzLTRqbV2EtkfngcimF83qfqHymytTQG",
  "key11": "eFKnkjzoVr5PSUvbCfYQdTAYCnxdCHqUxk87iWPSNSZJxEoun5W8Gi7PhedHGe6wB3T46SF1oMLqAbEwtUtrF9o",
  "key12": "4jcy9qKMkwYprnp3fpqAP7hTN7TXmNU7PF28dWHXe7cxuvnPokDQpWXXzvsQ7UyJb7LPjc8KAvPccfuGmE9mFCq6",
  "key13": "3Eb1q6HuQsyMV5XudpTYtLERJCYZUawPfUggy34kuSKTJ3tr5B9onSvp9AwMQt6zs5fQJzBcYbuT9jzUGmF846ti",
  "key14": "35QUSSS5GHZm2g1T6z1QJUwB4gmZ6dxEPUoSHBruehEsCjU8yz5wEm4x7PAv5mu6ArHE9ZwXDbnYPVgCc7VTJGF9",
  "key15": "5nGAvKkjzB6mXHRcNaYKzFd3efAiwRLV8wUjAFNBDnjh18mKUAK4PuzcGrMLPQnb76ZstkMZdjTbxRipSor4xLbh",
  "key16": "4kmmsX6GRkC78pCcXsDg6R18dQisD4G5CHpATJ32Eiqkhm5hCswen5UkKNjJjkafXFd8iGUGHxu4wQmhYN5Akmx",
  "key17": "BrnKrUkQonYK3r6pT4PBxFDfxBuN4iAYb4nUbQfNGd3ahf7wsPJffCLCNe1yw18M1VFcphY6coZDn4UrXAzhmQy",
  "key18": "43pKZ6S39x7H2L8Eaxfz1evy4WFDqvS6Y3AGNbonfjwqrL2iARWn4PpNnftpVYk6Ljjh6T9g4w1MGi6E1Sk9fqzV",
  "key19": "59UCdfYFRND7tT8BXV7CnvUGSLAZEcsRCUZxyfSDkQDXRGVCUct82JMo6afSMnffsyAfEhB2cMQZaBWDB3D4oark",
  "key20": "26UAFcrjEqdn4yN4Hm7jxFx3q21SAFXx7WswdvuxMgQC9QHNbS2y9PEHzMXYN8rxeukwMzpCAfAGYMX8QBJPusnV",
  "key21": "2ekpgqiq8hx2gtNW6ujHkLMKDwuGxQUusBomcq74ZgNHYvcH9X1CyY7rN96GZy5zys9kVcAHnxqo489Zg5TGTAZy",
  "key22": "3vg3rHKR8eBAHT39Mv2SmcBZxUgCtpyyGbHhbEfoF5iTu3Tcz7AHTB3YQ34MpLq8a5eRtdaeZZFvGRgtX1MJX9Mq",
  "key23": "4QXt12SeVkF3GfThnmWqxCmJJtzNo7Hf7WEnTcjL94mGEjqVYwh1bpxbogMJgTcjFj34GxGBDRf2XtA1nL3iq2gs",
  "key24": "4UV9NaL1drAVc77QFoY73e7aJpFBrhKkL7PxbJNr4wwRQgURRgC3RDHQ2XByQtQ33QskRAzosR2PiJneQHM3QijG",
  "key25": "2VbmfDZ6UsZhYMXm8WMCfeu9qBHdcqnQQKhxoZ8jXwqyr99fa2TcniL5kXcjnW81WyQKkhsCvo84XpBQU7xdxgzW",
  "key26": "5RNddSMU1hA7GNhrzjcwvq2kejbB45faZo5eqhuB3RMXchmNGcR1JXsJ77HdrCP9KviWxmNsyF6WYY8L56qogeEu",
  "key27": "4yicLLsAuTok2nTUbEUxmmLcmrkhmhyYLMAAKeULhzJhvyG4SmBrcW6f4WjPoyGB9MsYFs4vJfoJNGQgqVEsjp9n",
  "key28": "5VHrRqNnkC7UGD23wqjtwjETEo8eLtqWHKX9LbrjdmYRuHcpDCqa8Z9ZA6sYktANQikxsZHoFtaFjtAHfo84AyHi",
  "key29": "6QVS77yBzYWhVBVPzuhSD7fz9gU66GZfxPjdAThJXjBvW1KPEAcpdWDay3d68SFewjjV7CKeWtQes2SGZpW6BSG",
  "key30": "WbrY939DtsAYCRj6hk6PBPE1zQco9nr6JWXK4bjPPc5WHkcnMP8ojA8dw5Uxfntjkfon9DETkzW4gq9jQQ2rWuB",
  "key31": "2PLXifNmovmqMMnUjyMj9k9hpmTN3YUTfifRJF9FcKqjahTNw11zFZfBsCHtsyc1FznVL1UC5oB2o3pnFYijPrJH",
  "key32": "KW79ERXhghtfWbib87Zju9HyVG81izDWWanxWqekegiLFTcbRFQD8r4gWKHPNCZfxLc6LC1aNB3emxdK7sXAovw",
  "key33": "3oNw6qykQBKAS7SbQvKsL7SAK8xKbA81VVxXTiYj2DbTUnvQQG2jfhNnCTyVetHCZb6Ewj6TJtvTfAsQ1ZTPgje2",
  "key34": "64Y1cpkaxoMyEXTpjjfGofrWDHjroBvGy4m6ghkcjvBUtQHqkBUo9iS7aox2deWUC2XFWa6mYedsccsMXdXQChLc",
  "key35": "2DaJtJw9WXQAiA8LkJMDqhJ5u15bSEdoFmiBLocTLc1dRneeeeL1ZwezEAdcU1WXyMdinPCgxSejCzWmxLcQnMMh",
  "key36": "4BCU3fk2hQ3ukZ1YMK8dZPMr9shsh4828ug8zh58ZV84Mw9pTU33oEeP3c42Li1u2mBBTFC43Ev18UBxX9opkL8w",
  "key37": "3wvQsJjBPG47jygCDYAy3qD9LuCwzUi4hEijtTx9LZZykRjQmKR1TLXVaerZT7VRc1TJsuRBwQskDXYiUftH4H2x",
  "key38": "hxHV6L2pcXD1FfwxgJZCttRxoJiZxYpfvS5k8i3tQWgDnynk9CWLcZHxzmEdxXZ2U7FDNQ2EWc1q2xmsygcGv5G",
  "key39": "64vavxe7NfsuFJypd36YrpNjWbx7ZkJ3u4eCSpgCrCQXryXwVAyYdPVLS4ymQ1mmQ918d8V3pnP61KCYnAST4RyZ",
  "key40": "k6j6f7CHE3yoCnizc31BQzLNVUAWHL12ApYrWw1Ms9ijW7Pwbg269ED75Xyx4bt6Fqw5XWfYXq1RV1D8bL1gcmh",
  "key41": "5g3sUNyC8dSXVTU4LgZe6Fjdnd3xhXNB8CcCe8yk8r33DeKdLcZvFhTqYsY4vDLX7Y1Fs8nNG2eHZETPHsQ8Q322",
  "key42": "5uSL6DnvLoijswYTBgwHyR8dhf42xD6zm4vjQ3EWijDN8unNSXi4znF2jnmukcjiiSCw4Bbzym7ritg6DABYkgDe",
  "key43": "2WqzSbizZuCV3BdMQZ1Pmr8VQPB36R7fVpuQyriAxM26215XTPbjZoLWYZdaHKEgm2kzYk89bwvzcfQCZsgSEzr4"
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
