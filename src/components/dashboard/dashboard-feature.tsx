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
    "2VQAy8pJnygVFXb4YXD9VgcG39cWd1YPjd3SYn9xcf3ymXS1pHNfbi6WEh7v8JFx3sTKoJuLF8ahq4Kht9N2iDvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EF5rkdCcNj1vg8ezKvnf2SZmmX1bJPzWwvHAKKHx9db5144rq9vrygUjiKSNCLVVTZVcoeaG7YousZgTTqiqFHT",
  "key1": "2u1QCAvDHH7knoFFhF6TZVr5pjX7BLk9HM5eVNVKuvezwdNAPosAQn9H6KN3SYsTud4rpeTLxZkBGZyVBk6yyhFw",
  "key2": "TNK4UnehamN3cUvfCmEsKkGQ5MxvgwzP9bNQMZfbbehcV7jZWCLgnu5JBi9VwFviuK1EN7ZZyzNwU3EfJCeYt4x",
  "key3": "4U8bSsi8xMz9AT6o7W71ct6fxULF5jbe9HM5AQr3HeuKSRrWdEUZv2s7Gza3vBtMzCcpoKrXMyUY5CYw8dzsi85Y",
  "key4": "4uGFf2Xxb4NornnuvjSJfHkQEBD2iWFeASWatY4Um4nqnW4RavdR1esXLibJU8oXLcBtMTFukK5xLCoE3Gkm1X4u",
  "key5": "5EZcocmbQW7kpfrpUytVX1KLqvmf3wmNjats2HqyzE1YhU47Ytgu5NgzCFrm9GaFsXcwGfTu3Gy6ePRWq9njpcKm",
  "key6": "2znieNGjQDth1bv6Gfn4uM5QD3L21ep7ehaAPp3MgaNkswLdjzXcyQ9KU7PrSeeYuEaxSEJua4TXWNFBb74Wz6wp",
  "key7": "2Q2Cx5jB6SAubHtA1nJ7Wyu89JgMYHj263PNVAHoTYfyANDzDpbx2PUDFiFWFbP1UxeHbq4W1CGVFn4mq14px9Ji",
  "key8": "2dsWfsXNxkXjEo1RxvJaWZFqSvFxgzwzPd9K4mbJ8uMzVz79jawDqgPjVCU434RHVAzgivTs2LinBtvEG1eVG9uA",
  "key9": "2XfZRKiHmdUHx1x1cNv3Amxs99gdqEJWv2mQhHjj8pVPEuTEYzgoEgrfCEs8ZkXzGdxXNKZHdEj7Y1NGpnvjHyBt",
  "key10": "3xUeyxbXoMXt1iYzcVsMR15yA32DW985BqweYBFJyYkL19UqYGPv3HvSiGTiWQbmoHuvLuA3qba7aRDjBcyULo2n",
  "key11": "5CEi3sMP4dPFPgfXTPxXWKQ4SddZ5pea8bn9Q7s9gV1nGyZUNkouhQ3QREg4GcJrktLEbVxwMXD35WyovXjwaEjP",
  "key12": "2FEngJ2HFkpS4g8aZjehFQTnUt27GiDKLx1eZdfTUUuDyDX2qfHPzKTyygeahPjfVggpjC8WCNUiymjFrLZV6mtv",
  "key13": "2gi1WfGYMoSFMVJzgKSeBMfLREqUipxzszpZzQ22brwVfxDMpqqii3rVJxbSZui1Q4sFrntx6JL3rPwKRTmnKneP",
  "key14": "4DefNssRTRZy9uLHCi6t9weudpxvNaxRif2GAovEvusm7CFL1uBSWDc4KX7CedDLBvHpWoec3MDKsYe5QdztaczS",
  "key15": "5KXTGuiV2kkoGdZcpTQm4Thdn4z1aDpszMuHMpbimcxNiu4kzn4hxsSyKiqzeshrKEkvJWJg2ykpxWgGoPESK9BH",
  "key16": "aZSMSoT3r67qXWCyuecfw9E86hKqDLJri6gzLfsZncn5kzEqsfNCTpZby3NQhe35uD9eXHjtYCTmTbsSEaXjK2e",
  "key17": "4tPjfumHAFNMsbAhXcU7FayFVd1PdvtfzPHUj91friTLgPFcy9mdqR41X6MtxXsuKFGArQLpmynC73pQfnWXZ85f",
  "key18": "4Vi8nBUotXxcxHcaZUFF5wbCNg8a3x67Mp1PngTTT1xMzgzb1pkdcja435GVMt1rbrYGVSaah41fG4Q4q25ZPUMa",
  "key19": "5Kc4kS4KDKKv1EYZ52XnbRHRjm5yDeGhYAxxpYyiYq6f62PSu6GWAzBmJLZwkHFvphXgTgtJ8f28VgqZtZAs13Z9",
  "key20": "4xy71AduLRnnN2JbXnJ5AX3bMHjx4Li4MGYmh9UFMoJLyt5q6VxDQFYWU61enRhuUePXMVXTNnWmxqnuSrFPdt8V",
  "key21": "4tiV8veMV8MMpTLVYHBVhv9nivzNnegDKijKNd4ZRr1zUHgtSJKG6pvFGdDUKxGfrbu2dsgyQmnWwicqikGhKMBg",
  "key22": "ZuvXhb5SmRmh7Svno6mdmmorPL3RPrxZL5ghMNQ6ndPnCrwjd6KAogYM4rfc23DuSzv4kN1n5hV2zzXrRE1GobJ",
  "key23": "5NThYNG24oYng1F4Rv6qkmmYH35GFCeRJfri2obj3N7ZbffbdvYRMdTDQ1ymbqSuet3CLJRWsQT1VcU8XzffrZMB",
  "key24": "3ahUsXmh1fiPvqPdzeXPD7QmWErkuYHJYTbBpDSbGtXSBqe5MnwK3TZxNgxxYvAX38zyUnbM2ZAfyTGWFeAQPKpE",
  "key25": "57ybvyYjVHz5uvdPQ7TwjJdfFvt6sj9tJ5UAhs2nziYiD6KRGXHDxXUKzfAk3NLAFx5McXq9QjZXTcyVX69uJbQN",
  "key26": "5MQ2P6B8QPmB49zFEA8kuHZxnAdK2CjtNexaDB3zFtaUqH62eCkUw9my4wQUXTZfsYXihxkcgHB37juMWkvyUdeo",
  "key27": "58XJUjqhL5ann4uvhheqXsc98BYy1zQ4mTtco7TyjMJQ5QT5TKbH8fZ22JBaER98PcWt1kyKv3C3pefvzV3Pz6Me",
  "key28": "3kPrVNNntDjYn8X4Wi3FtAGoxkTic8nPwftw2z5yGsBafpboShsx7LJo2K7Zv7kfck464Xb7jjL2EAhuCAj4k14b",
  "key29": "2JNxnaE2cbncfRBCRBrcUgkQHkWQUgByJb2in5NAae7e8rzQJFZ8tM52yaNPRPwBW8mLnkgQ1bm9L7ZGuCReniFQ",
  "key30": "2UBCdhi4W2mtMawStpwm13WtjknGMJ7Efy1ysGubwBnpgTwf21fjkYnSQUtEzrUnpkRM4Aopco1khn6RJxWTyfRQ",
  "key31": "2WCMjUTwGJqKnGn7spPaxk1NcXu5GZAEmQ3hxCUL5MM1q69HGiWkWVuPSKVGDtvZrbzXUdDcrJDMgcUFCZJynhY8",
  "key32": "61cdBzgz12LyDbv32fJpwB7ZosLpCajU6GWrFeCxRL7XVFjPcGnEBvmQDMPAGJZAnKk4NYfk6kkEaMXjmntoyNu6",
  "key33": "66yxvJoQep8cNNPtUEqivQYbXRjsCMUbFx2Jhgd8MN3EZL7yYoyLjLR3XbBuegBHZHYGLTLo7aDroJbpC4ooMavm",
  "key34": "9ZFCSDGL63kyi1i6EnTG85jZZRcFyM6cXqnVG75ttfbqKf2TgXTxL8R79YTmW3kYWQX37TNuignJhmpXtYDoTMT"
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
