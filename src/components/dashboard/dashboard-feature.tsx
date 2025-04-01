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
    "3oBQeRPMjsidCt8m6wUUNwu65N9Tf59JaGgkwHizwBKYoWB44q8HQnpyxg6ngJUJwEBFE8j6dioLacBvkzweVhTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5XHwAvDoui7PWz24cQMG676HaovqpPwTD5YxaZDfTFQeek5MkKrcNFG6dhf6v6QoyP8dvkmA97cLH6q7xy5D1b",
  "key1": "puFc1WPRAc2gxRqkJGwxhxa97x7LGWstEDJqsRGbpsgrAQkL5tsPtWucPpZnu7oxGELyggSj8UgmV2eE2AZfTmJ",
  "key2": "4t7rGtN96aWSZKhq7uHy5uZLDGhQU7kUKLu1f5mzcAXhQqNrYVjpWm5AVKwLjgiGhZjsz91xsBin8mWQxiD7928p",
  "key3": "3Vnb3pBCzEsP9LuJTTfFmjkKWU1WHP19W8yrXuYr1ismApwdDU4jStZxNFtMyUuSK82kTFmuXewihBiRv6a2zQM5",
  "key4": "4j8dtkBDEijERQtBmpCoyVJmHmHYtHrVhtoGcQ3XeyT6Ryz4cRsJNUuXKQ9HjMGD86if6Sf468NngdsFFPAMjMYa",
  "key5": "4J141CgUqJRdB7KqH1v9UBSnJhQPHPKzSYQyTiz9ij7a5c8KxAP5GCC2H4mfZoV6j2st2uZ6cL952FLeqTeNqaps",
  "key6": "4Avxw7fmxTmdD2Xqcpu883NG818ew4Xun7uKqLTJtNoVNghh6wrtFxyb6P5LEaVNsJ84ZFy7H1LYja5wRVifKCJt",
  "key7": "2ULs8dBuUQWiFnTrJebTBwYfDuuxUpDHTzmiuzw2ztLj21DeGVgWoiUJq5FmwueV2fQfgdsRhu6RwAhRQBSRuokK",
  "key8": "4kUkj18RZhZx2Rs8tXp11aoR5NjTWRDuPY6keQqBeK1LJuiULWUX9Yz2Sf1NqHyaYdRBNBnz6xXtNuvycH6gjT2q",
  "key9": "4yUxvpraobbATNnH2Y8wDvoPhRkRNshUcpNpvoLHr9BKUUngbf9FnKdJhqnTESp2wFiaCWHu9bbJ5RjZqHHVXSCv",
  "key10": "3WAjhd4gyPcr3jPrSBFafvgr4w49HZNS2dXxzSbRcgGNCTYwpmzeWEYZRXEEU3CQrpFZrb1m9eZ7qquRBE5p65ZW",
  "key11": "3f63kCnu93z1qT5TxQNn3BR19GBUkz2ZECkVVAC7FTkXQPUANTQgenCcoRpTgcdx5msyu8wvS6ysy5Utsi67Gy2V",
  "key12": "QXUfkV4kf7doYGCDhzkchejxNPhq6BHQTcmpoRVipL1N8Dxv3Wc74jnMicZhcsFnX7LkoohLz6J8qen37LHGqwF",
  "key13": "xtrTE8MAvRm8yqvX422khBWbxEWp9QadA9Luz1p2PVZi6RqhoYXTWMJJDL1kM2Q7rLobCUDVzNGLWaRhW6GqC2j",
  "key14": "34yhtrVeGFyL9DfLkLRf4wg4YdQeqVoa38D627gppdjzTJDYFDgwYZeop4txLP3LbrJVjfU2uSu1skNxYY5act6A",
  "key15": "61BGnnuaCQ6UvJurP7aCQ1sqxJw5F9tZss42Vodo1QXEyXRGGQoD4HE4t34KzAX4k5UNwneitJaYVB72XWR79upL",
  "key16": "rcCJq2yFwQK2i5JCCCEzuXEvtc85KFHBex8zhLztBKAytwsNb8WSMd3wEZy46f6h8taQozzr1zKoFPC6k33uDvi",
  "key17": "3c4JXSJvjn82t8ZhttptQV9ADHvMEgDS5rCDhLhfCj1BnzJxqcYPrCBbondzP155dJvzKGHM1iJPEqboNGeYq5CJ",
  "key18": "37eoCiL1zwnhY3SUQECaX8chvzFjm9xcZ9civ8zD5srzhiH6VQXxere4QkvZaKeu3sK48n28vK46hwMnbdDWUG7v",
  "key19": "2vUEoF2dqZmwG4FDt89FQEVjxkTdGVCMBn5Kk2mBRghbgWWvCjSdTc5ZQJfdT18Yu6DJJa7m122BZMy6BoUoL48F",
  "key20": "2TdcK2BsPX2t6eGSbRyPRTJW2PKdjnQJHjoqhLpRhci7CcXjMBJMXjASNLamJEEVvkf2C7HAyQZHwq8PaUGNMGx2",
  "key21": "4hcpAgGVyScKjCDcVxwo5nZvtbeeL5utMEJX5GoH5x9VgdsrBpfDWVufEZ8F2r6SMdKZ9oRcSaWeW8mdjZAesdap",
  "key22": "2CTvweZBZ6TGxZuwbCNgWU5sHLmakkiKRusPDmzbNRqSYWnJqXvWH6US3uikdViAt5xczRfSFtrbcaeEWXjmEX2m",
  "key23": "5iGE3nbKAqahiSNhscgcxKdQDhqXk7uax1U7p2Rwbj2Z5upS8RyvLHwNByeyeBs51W8ZB1D1Mbk9Q5fvhCrJH9Yf",
  "key24": "63vDo8CKv2nXjaYxRYnZyVjXooYMUt7uqSfdDScf5P9E4ymGJ3pYAFUyzNKuftSpDhrb2jPUdUVtekW2vn8r2Q8B",
  "key25": "5cjijDChZTcsR9Vembop935Zppwo6isNvieAhcgAFQwzfiLq6fAeMEqVeuKcS79yWcusJu6wZsj9fsai89SjNjFC",
  "key26": "PTfhv1WrkLDE6nekD9HPgqHPtVuCsUCNikDVAfgatRmpVBuBLqgyZ1y1ekYr1wZ8Dct3Ax7cxgjMVEmDJmznf14",
  "key27": "24zBNYUurMd6NzuB41WXzj2vYAKaBGvUd4WKenr746JzPEF7o14GGq7tmidHsRVR7rZTzUEKJhUYYYGZAR82vcsr",
  "key28": "VJ21h6enJi5qgJLpTeKNUkXt24GguwcfRFYPyeaMWYqMS8WYmqaeV4WZsfMqCKCcHedxw4RZG2sVefT3GnDLzvu",
  "key29": "3wdYB7woZoLTfCt7EwV5XtfEJBnqxKo5ics7LQGEmHwqoWLBAgNtqdqDJim4N1p67kiUN8wiqtzunfuwR9YzFRXv",
  "key30": "5tdYjsTNSHLym5JrifH4M7chB8K8PVexTzUYyjVhWKuX5cLBXgBcDQEdv77ViKV9kAB89oh2XWKC8YGmSSH5CCH",
  "key31": "2zp1G3y3Wnm8wVixtbM76rXg8aYJMaDouym4G3EECcKGX4EaKggouBa7A1szPScgJHezoZKFw2V2Ss5vaaL84Fjw",
  "key32": "65XtjehBQWmB8trfdE63sPhmQnTnuwosaYANZ8UZfRQ8sfa4V12jhtg2zMCbhdfcxjRX6c1KSEG32gz6FQ6Ka7UC",
  "key33": "2nNvRkpkhwrU6Z6rAHx1GVQz6FZGzH6rhEZDuNbJpE3fmc9EaoWPVTg2XQFKxvp8FTqVQYK1focrFyJtxSeEac9x",
  "key34": "4Q1fUnjw9dkVysGu99AUtq9ZcyNm8rLEC5W6ZEk14MxvtLgkLUkz2P96fHwkza6DEmcb9JFdVmdJXJy9x1w4k4EF",
  "key35": "3zfbauekUjHJcNeGCpy377tnW1KpVjn8FSjVTqimrQbMgUyFFmqrYSc9Smj7vxZjFh17GrZW7i9pSqnscpBHGAS5",
  "key36": "45BcHVb5gkfGe9GuzTZejk5EU1YCuxmgQ61EEAzQEZGs86mfrkvhbc43KSAape5rB8hWB9jvChFbkLP7caCeKL5",
  "key37": "5wgZMAwpnZyJWxuab8zH4dpkHnvB9T8TzyYjky9aGSGKtx9BTbERVLZnb4EAhCJFLf69tY6eK2ChnQccqG4z7Dnh",
  "key38": "sR7hK693hWzLkoTmyt2QZE4AdFHtdrkK2mZ4rCMi7z5ANX4wML85mSS86XPuWgxF8sSbdWVFvoUftVMuArpzsgi",
  "key39": "26hxdtzKz4xnFFCMvET8TmAsyRbq6JDuh5Z3L66VyVyeRmCCJNGJPMgEYM3vAgebKrjkDxQ5n4z1imurYGJkkdSo",
  "key40": "3tSxtVCeadsAzy7C3EuBfhYURTNQ5a1Y8CYHKwznBPDuThMCGkaM9WBcpy3Pg7w3o4Noy4HEv3p4G3NnhrAZUjU6",
  "key41": "LKscG7QzL7ZyozHMnjtozrnBe8kafUqRY4szAsMk5M5JNYrLo7cDcjU4pcSnH5fbvEVMKfneMqnR7acMpHBTjwH"
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
