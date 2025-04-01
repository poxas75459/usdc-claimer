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
    "3Wk3vm2ihrNVe3uJMr9DsfCx2bsSeQUvibC953temPCZse1eavZKVtLur42UMqcDCefwZAtbjDiCohmvdEdy6YpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LWqwRCvfognFAqdvHSysvHey2EeUhj2m1EH9VvCDYKMiqhDvu7wkbL1N3qrj7TF6WnyC49hF55ibvTy42niER9K",
  "key1": "NkL3KvySBzSFYJFu5sTvdadmEg6eWrVyvLVAi1uA5Eei9A5LD1RQPBDc8fsiwr8nup2sHohaCxqLPS9w1erWiC2",
  "key2": "f5Mw8PHGPP3C2c31XCXCzxWwhgx9UgZJf5qTGGMfzSkb8CLg7D7oqK3n8gzaA6WnJeqLjf8CF5F8Qn7BDHw61Qs",
  "key3": "F1niZAh7MaKLCFjYakUpjaVUpJ5Tq6VPEpX43bsfYhB2SKkdizzhvfCCQtuGMYYYJMqVhDCfbD9ypAwoyyCrtDF",
  "key4": "1hxiACVHDEtzdzLJCJ6PYeeK3SGGAoA3XjN7bwE7XkEQbBkBRAbLxK2kwGkciJRk4gF45At5C67L7BkEnFxVCcV",
  "key5": "2TcLyY3Sx6ZNXB2M739sQKJ2MGz4ugDMnRJmQVrm7sProGgijsouM9QT32fGZNiu2h5BVPJUyQTtkzZYvVHtZKGZ",
  "key6": "4KUArsfkAzPngodjnNxsrkWZRGdniiSp2noA2Zavo8bZapxE1xH5yVhA4aUvbVka7hUoyMaS7eWy4Qh26KwSckhc",
  "key7": "3ciT8bXhzBMss5UAkziKYVA3NtSXyrSZXatxY5xzgMXuQK3ZUE7VMLXihXh4L4FN8y2J9n9fF4sTQCYE2MCs2ivA",
  "key8": "3RNVqiqYp6WoZWuZtYghKEa3H6fCk4NzN7ZEQMrGFUigYvUErd3dkdGqSBGABqhrGQu4PmrwAcaEa3PP9tHf9fdB",
  "key9": "XCbkcQrvcx9VinsmtKTE8Kt1561TrNhxPizqLX577ncZsts3knNR2Hk8mr1mkuoxyduqAkPhUzVSbLxr3H7goCU",
  "key10": "5hpmMw8BjEjDQ6LpuXbXEtR4oQNDPe4FqNgbXcXcXuGrorwsZAk1aN6gmBgwZL3LHx6wJ2LtcpPoRCbE5QeWKqJF",
  "key11": "23hZMAx5cTvNU9NtbTRUwu2RX57T8VmSAvRyY8X5wz9Wkug1coAd1zFQph9pkHSFL1V1razLheSHwX2KFfriGjX2",
  "key12": "3b2BkpKoFzNgSyz6jLk3dA4kuRv18QTR9gJME8AVHowHtUj1bgk4CfF4bPGhZbSvwh6kZLJruMbWgZ4SJqcrJMkF",
  "key13": "Ku33xfkUJ8VpaXaZ3bcLyeRXpZEKjY3Nssp2c6wbuHVJ9hJHV7Av7ZZJwGhc3kgpK8FSXSEJoaDc8UYhTsZHeQe",
  "key14": "22Yp1xe1Z1ALUAVXJcmdmf5JtZ7DTpB4rpWcQbouRDwWoLjrX4UuQ39QgVMR6XVm5igefYGGCmhJeTyoauonrUfh",
  "key15": "3ptjdnmukM6uriKCDQe8tx7TPYFqVKARucBakEqnpYdvyEvodUSdkB9aaZRxQjA96VoN7Xs8SFN1yQJ1HhPfB7WH",
  "key16": "3HyRePakS1L1y6Lg1iRtRWZD47DzWNW2LKeKrc6D1WBE2vbjiYqF6aFFbhSCnt26rVuJjDBLuBkcpVBWXngCUf8",
  "key17": "2sLKNpjxhFy9BAsgkcKujQbu811zcGAEPar1QhGjhYuLWTR5ydB96Rqv9BSN7vssAk9M38NYZH68YNULzk55sfSM",
  "key18": "8asokNf7XihNkW2HwHDN6m5PxCYfZYAemBS3AfsQvZKfG8pCtM6hWFTwwk1PJXYvXgJbhjzABDdqGGjJc7xg4QZ",
  "key19": "pxCfLUCLjEjNKRBxHU3AEXJj1eb2fWmDABoRiNr7Q2zNp57uWeFzKRjVosrDwtCkNJt57kHb6dSaECfFDa68ERu",
  "key20": "2YSLoTgFDTgLo7xGPcWJ1uFieeF5g3JLXMUhWPYVDnTnoUBN8tH2TCkDAQXPm3gzvuzrCWcWmMQhexg8XLyDhN3J",
  "key21": "5FnNawm3zYy3bTvyjhspu2PiAmBAhTAvcAeE2XeaVxQPKrY6rdDMNwH8wEq8UgxT5aRwp8GPXzjYCQ1uzqKXvNDc",
  "key22": "4iNT347gWf1kGx5ZbwUokynDKHCje7xDBCyBiThQmuB2yBUfuyq2S7UuP3peacWtkE9A1EwHctN46fmTvw64MSLD",
  "key23": "5oaBzjW7cqWE9puC6UgVbA6CkdoQz6LYZLG74s8Xs6M9jYEoxVco1HSNaDJMjkQWaVYVC1QhRL4UgTN1T3nApFjb",
  "key24": "2Jj3VAshyAC5nBY33497NcSFnR2w9UAiLhxGmQ39bbwRPG6wDZRiND6MgFQkA11GLBcVzNWt8a1gPrHg2y4FsQAP",
  "key25": "5XNWsU4DypHbEK8xbE6zXijzHGKB4SYo3r5KiUBF3NPri1Ch7S6gF8ueYkybo85sFbT8NZMpA2GpLyKNYnbGR8ey",
  "key26": "2ZdGRsZ1nwmdLbERYX11gTFbmB882JsKKjfp1crbZMipHQDAk1dzgdWhmX6g65ZrW6bkSPyuTnksvfj6faVcKzaJ",
  "key27": "2VzkjNeR2nHdE37Cb6cVcMvEkGZEjccURnVCHEdEG5brpFr43nFD7qVGyyaDW9zqPSpRgc2FjBJ52zvRGcCgZoYk",
  "key28": "42uGcmaF8aBoGgz2Eo4wBMuZHFhjEBm9Auczrtabnt9sDfQVAvkMjnfAfLnq3jcsCCFaXspbMiAPUZ128VUzR7nk",
  "key29": "2UVNkccVbxJxB5M6b4ToKTjc1boUqQUGEPizKpUZAkz72DbbK1SDPpxrioYmu4wc7Ucm671Vfqz1T6FT8nm9wLfU",
  "key30": "4x7wRJin971sL8kXidCqUx7RbmkCY6aB5k8QqiLYKZLEcKLESwEj5R1RT2spCWnPNzzvg8u2A6A3wTFzYYdfuA49",
  "key31": "NpiXwDpaefKH2fnaVwFoPm15D42JvLbDCPVjhBVSW3ZaA5shwgDefc6QZW4DweidK4iwNtz2gFp2D2vGNaWQ9X5",
  "key32": "4PVBwNVWDejyTrLnY627i8VVTryqhU4NVGswzHk2ft3g7nBXGR7qkvE5bb6J6GP7jmByyMV7Ze79MRMBbiU7ZY7V",
  "key33": "3TCy7ErfmiTCGfzhp6qbHv96KJ8XCnck9GxetoQRj6AYPq57xTvtfNtLT3F8GNwikAv2ssKz2U2Gk3rQGYk3KmYG",
  "key34": "633MMK1BWA8FyBW5vdJ5LJJt8zsyZ8Zn91fSo5Qgx9ydj4mVFJC1W676ci2Vu5aE9GaUA1VV8VxGSYxffWPa8cM6",
  "key35": "5xY4SBRVWM9UisVkDBcwvacAxCdWyFu7Ddzt5pouXPWPaj4oXBNQiNd8RMd589KyttGvvCsWv8oxUUiJTLenyokg",
  "key36": "2xjd9Yno6Q8Koa785h2m6hbWJikoXAUEzJGR4naGgJv1Kfj71PFKLEfMs9tb6XeZiSXRBsAoUKapucL5VYer2wrd",
  "key37": "3R5gSGEWcQkDudXoEp3vsJmVq4UkKQ96S4HGA3TxTVNv9dQS46r8Ct3ZYh8VtwhDgGxtYMvNB8x3YXWjzyp2iYj3",
  "key38": "22sFC1eAWG47B67eYKPdpZs5U4qNRqBMS62Sj1vZanwMJrwPQf2givLcHGE9Yv55kwNMNr4zLnKp64fHyeGKKcNZ",
  "key39": "5FaeHpb1nwfc24M3EpSapA5YTcz74DmAKEThDono7xJ4qc3bsaKQ34HsDqJTV3HNsWQEtC2qgMUzHgFwb16Cfuih",
  "key40": "54yVMqnA1Gd2Txe7La85raAf96grKQNX8uyz7KxhtnhSUsFxvDknp8FEMyQW9t779My3GrF6VhtSrGfbC9mN4GZY",
  "key41": "4qynmwtiWe4aQ7ZxJ71Fzzn7p4g9YpyogPAdq9TSxriWxSFJKtrXBokVj4iq5HTND3qr4XkWQngc91hQ9oEwPBUs",
  "key42": "4PRDEV4bKJzjV25JsCr5PVD21ci9bJB2hwUHXUaT8TqwZFmHsbzygVvDdZXQ51v64v8HgYvMRbcD6fcZ2CMSnFd2",
  "key43": "121WXoPySrHsFu9Lu4DH3heNqk7ZnQCRXeuAAraHPRdyZHbWppUmsihjXNWYh4DwhVgS1FywtwNVUPk7RLuEC83N",
  "key44": "WKsjhha2PmNugNnVs3YmGo6qoafecjz8WrzmBmEQJWAnKZ8q8Vu27eLr2YpHmzbGg2DvKxMdcQ2b1cKUv2gLzbv",
  "key45": "463w7AThyPzmJUkFJQgiVxYrLpLjSPtLsupXUqxFM29sk2qMDaLPgjXTqGmKCSMhuAVmcAEYJvsV99PuMXCukjYq",
  "key46": "dZEXbgDdyApeG8UKYVYxzmDKToDNkcM5Vf9eNfMRHQhvz1NLQpfmxBmvmGi3UqT1EkBwSpYkbdL6CuZ8QeG667c"
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
