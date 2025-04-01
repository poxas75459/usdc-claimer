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
    "22Uk4s4sRknnP1bgV1EN8nK67Zcd4XU2YenYym9NobYez6wYPw8zwy4WKBfPvK62wnyRV5bt5D6rNDW2UrEFYyrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XshNUot4QaVVaA6pZU5di4VBUnfkSfYY3eUXSrPqLt9oxZy8v7yfnvS7Xo2fHvghWe4j5AbxmfbGGX3ZwB1M3XL",
  "key1": "3y3AvBpwbMUHaXZ6FMRyoZ8yeX188AahisuPY4vssk6v7opfF8SjMXLG3WgUe567sU2inVYDCbs9HSLCuF2ynF6q",
  "key2": "22HCM9EGAd3HZa2uLcWmkTLXjxVuZgCaxQK5FvZf1VNbmpufUXR6bTfprS8Pzxp1jdhkEMAWpiL6kBUtXmxdJQA8",
  "key3": "2HhWounXi4qrGNGXXoLjhvdpGJ7Th49ckwix7PiVUCRTchNxHxzAjhNa3KVx5RaLuazR5e34wnkwX6B6zCdm8xEF",
  "key4": "2zGQNS8dPC4n8nwLfypDKEvnEauSYv2wGg2UVyXoTF34wQHDZMRAcyS4fwkqiNgxFdE8gg64ufWsr3jQXxc5S4a8",
  "key5": "58Aa6hesstdYpttPWGt5kc2yfEAvypLw7GeHzbikZndNiakhNEDLEWEXTpzPkDkv62RsY8csHFATecF5TmhRc1vX",
  "key6": "3PovV2WsoVUKSzX7V8YAdfsJXavD9EN9kDtrG7GkWFpiMwrZzBYKtAioHgqgP1SnbQPjbYnE48mc7fKaHHnDiGU6",
  "key7": "5pE7rSfuhS975yKvT81mGWujdEeJB8mqeG8BqxyLuZpL2puipGmKHNCfA6JUnHUpVsNiKimdmvJ45SNgjgkRQVyZ",
  "key8": "3mQYuSQ7f4Hmxr4z2XtiN4kCDC2uxeSWD4BjmkK6ziUSrp5FrhxELi9THUVjPXZwGZqjmASevbPNN2ZeVvasix1v",
  "key9": "34hP9yE4M6XEznsCBQjiBhy4zAkaYmziuWVKbYtLAFyZFGfkDHEyWX6x2qyHLDzVLQJCNHtDjW8oNub5nJK2m79G",
  "key10": "XsJnD542kKwpTNvegJY7dWLzFzRBwu1dFQ29wtspt8ALLnpQYDjxbC3DnvJYbmtiCGCaGP1ePpUjhfW877QKjoS",
  "key11": "24otXH8nDMc2gxSfvzAr25MNAtyfsPJtBrEk3SkBLTtecB9RAxBVPYZVtfrLBy3wfQ6AyqLTppMRnFeNy1UhJqXz",
  "key12": "2VnwWBmmo6jhnWyRL5mqPTaThhxAeDFSkE3ek3PcDSUcnJcLXYz45PjKkTs1HmzBmjsWZtkbSC7ujtfMR4ksCTJy",
  "key13": "2BS2QmC6gwSMxXDnFutRg64N4gi8LGQXsFtkFGTsy94f6CdA576qQncHQKjBBvCiBaNsV4mARaXHNAUXBsmjEQS",
  "key14": "4NHNiJMhZ7TwQtCVSzTSeGHm3XmJwCUaRCkAfp46mLQ9UMLTYV4yrVbbNYTM7DCSPxWHYWczK4DWL95ktd8BpxYv",
  "key15": "keh8nNHQ3nrbPQhM1QTAPxpcsrhXNduxqQaFikZ1c4p2FT2CyA9LhtdAGdQmiY9J5vbQUGftFgr2yQbUCkkofai",
  "key16": "3Gg4C9v8iNJ4r3gwLCGAvdEYu7thDVs5SUo28rBVqqj6fQ8f8KPRbyzN8cmmAx8zfXnyEpoBpUT7Ys9oTqGfeGi3",
  "key17": "2cdPArCZ8xfCfmyGRd36G51hfb3C4mq9FngSimJJUYjVQhwnpTFvodTRrnmE2amhGya8fm12L7s7td8AA13kK8eY",
  "key18": "3s9ASqXZjuwKHAjZR92XgoWDdAReLKyiZZqLsf1dDAP7C9ti6fA3HkVaqK9S9t5AHqKySP6AMJNjxNBVVBXuGzeM",
  "key19": "4CEoiTVTTkqdHBnSvHu4ovPe68tsWWphXhvNbwJwmMNHu1LnVWejstvjD1euChT1ETDTYtj8oHEZXaABEyhQAa8S",
  "key20": "5HmbJDfo19MTX7a571mqeTQ7yq7ct2bXwyygHD8GAjmgjiToq3E6SFUUd6gu3y3kQGoSBfW12C3GMQAsueTBsWvZ",
  "key21": "4RAjszh1rNpYUJAtJ1W3zADePg3QuEgb87KdRkSkQcEAUSL4JZ4EXkD9NcCv8bzkxW9BQBpnnyoBKPG3DLxzVuxY",
  "key22": "ZonFGdgKx1QUqQZukEpWN5h42rDjMooUZQ6djyiYopt1pmoVNuCG9bVoozcdCKFM9cy6HnfTqoza6EUnjNhJzbN",
  "key23": "2y5ZM5BVE9t1vz2VvtGap1w9j52o9v2dAu3xwZUtuM1S2sioQQz8sTXMrdZGBtE76TsjChFff7ENMUxjKsAT2YKU",
  "key24": "ai5DT3pNP6CcfCtRJrNJcau1GoaVQSvzn5bhhVqndAapErLfaYNbaktoUh7HzCSGxUH7gTxDdCUS3EqGwZq2qPF",
  "key25": "5dDeambrBM3hoFd17pBf4g6WMwvhG28G3GHRc5tGf9dpFpyXRsqqEPTyUgUuVTmz3sXhZhhyB3WGy5vuj3DaSRoH",
  "key26": "3XhXncD5BEeFEqcfKVDn4WjEuNcn4i4HsphLpvCEGQxnXc8TYzHkF3C9WfK2PYN6Zi4Eh35YaZDzfiLk3jQFddFt",
  "key27": "3reyPouv2XnBtvCiYzdfGEf3vLrC589vwF1eAw5wbY2qa4o2GCEJZqieLbwqbS9i6ELdxUoYfeq8wJhoWCW3DgES"
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
