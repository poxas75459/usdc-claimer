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
    "2HevbWwZiNW2sh6WC8ijWfJ4rjaMrznmRWBWuxVNB8TXMqWBWhujgiyAVMVm35irbDQGuMr8YcZm398XCgC3FoSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuSNZPEiCRk6cncXsJGJ3uQork1f3LxAFNQPeisTnYoXHhgDsKmJgfA9uykXN1RdAwzcfuUTojBs611WV3ZfacK",
  "key1": "2ELf1TpWMbwspodk1bb7M6BXrVAZmRgma5HfxfDKdHDkpPpumjKgYPKew5e4fLFCmXDZEBWqZYp2PptUrNkevQrW",
  "key2": "WQ8yFNYaegc28mFwmNiB2Uujv3HHWs11pL942rA8qYcvo5aGQawbz5qNgVJzyyNBAionGmKZ1QTspCN5JZK9vJK",
  "key3": "5bpViVzM5DLnWKkuL2B2aeUXuwHqxqw9k1t6EgkytdQ4o2yxQa8VjfhKUx7Jp3sA4VGepi3Fh1Bsesm5rjKHdxt2",
  "key4": "4sjMQu8LzLQB4Yd7HAAKiyY494vUwUPnV152qvVmkWyDbUf1x4ngpXsLufQwN7FR6ubXBCTH3YuWouckSFTujz8i",
  "key5": "3Fn3DEXR1x7nZgiiE8tV8xLn3LieHy3B8LgHXyHrAREPEwgo3bS45WHEdMyjHja2PLkYvtcbjCiZJPW75Zzy7qpc",
  "key6": "5MdCK23nBXSPuTNzGQwzpsxWVKHqvYfU6fcnDpNeABH8QBYgXZPaUBBnZBEcEHVuLdj7Pb5dj7PTBXUtM874LJe6",
  "key7": "4z1xyPRB7w81myLrWkZqSmSXSA7SGmn3Sawpbxci5ecP7GDgKdp4YtdmbHYbtnG7h3oPbM6XjXhgxQEeTcsVUcVB",
  "key8": "45Ri1Z6pBaiMPTa4k2ZNYyeA6SpHBrWjQiN8JYpxzya9VhCh43gKXTcncx9BMbFhvuAymJKKyPMRCswwV5SuKFH2",
  "key9": "439ttAwHYEhUu1DxU2QH3Jqwqjj3Rmxu1DTYyJVW4u4f6zqK1tJrHXtTd4KohW6ANW3GxpBokCTy3DL9Gofo4aBy",
  "key10": "4TYU3a9YkS1NbcCaAQFDRKPASh2hGLw76uz6qPp9Zt2KtF5FG78Ec3DdTCN5r9RvGi6nmFHuD3Mm3sAgzTMefNqZ",
  "key11": "2DvUNEKzc8FLHpZ2c9QVzhpU23H1Jey2EmcU88zmRXshk3wLTYeaauZei9kyyy7LBX85CJVVrrgSyik3HEkCj5Km",
  "key12": "4zbTB3mFXMVaqpBanmtsgL1sYawA85ypFjmtJkpdxFXaBfrxEX1kfUdaDDDfmqqUGgyxuenEcHyCYaZTR2sZrQKY",
  "key13": "2nAh38rvwp43QxhHENUXk9L8euT1kdwg3hJPtcFaG9JQrswDoUtnha4XoGvVG2u47axU737zBpeCkCsTuCkZ963d",
  "key14": "nx9S5K1U9wMhRgTx4L1NY61H6yJCmPCDK8uZiY489EuHqKnPBrHxpihzrve6YaXXjkHupTyvbNSwQH6r7zSgE8o",
  "key15": "2nZAnbu4ettRdxUWHRqMXjdeyFG4mAC2vabjUCHV9gfEGARVhcM4JFKjLJpcgfxZNAdwQarGgH1n4GkmC2yx65dV",
  "key16": "4rQeRtAMRKkHkgNxVzoALhwtYwwr7yAQWp4EnSfwrVuy6ZrPqH3NqzwwNY89E4yL38Fr93SQYsKUWnFSnYouy9uC",
  "key17": "4fpcurXga51CERVUvyrUP2MNKTvWixjZyeCjtd7CBUPhMnRTCdpSn4rVr24MEhd9xzsnQXKfDTiP465b83jtHF4p",
  "key18": "3jN7G7Z74gt53vKbfc7AVQbwaj5e4uhJG5EwtYpSYBS6zHfrVeaGGCyLh9EJ2sXvofk1Y8bipLTHNQziLmgPC54c",
  "key19": "2nCAJnqzkPgNvXekbSv2q6uiaFgmpZKEMLjP6dwpySyzStUi2Cgqnp5juDHE8B8CLnkBCq9Gdt9bQsfrggLrZfaC",
  "key20": "5bFc9XmcV1BK5ESacTKTU2bLELphRj1vsrKhkb1ugbTFLi1DNfWcC6KqtwqigHfSgM36j5gZc3qfzcLCuQwdsNqB",
  "key21": "651dCSCkR6iMLsDZVVWcv22Z5Z6cLTHYg3dL1jU9Chcq62yAMbmjYafaAYvFR7hPaSDNFGgv64NUz3kz1wrR4nSS",
  "key22": "3MAD1CrHYJEjonSeUSn2YNypnHRZ3KDyzbMZdvCjDMmo339stgHc42ng1J6NnbsFw5JFwVk5fwrhvUwqacK5JEeD",
  "key23": "5nMWSHphQm8x3MZqGAubQSbTTTxhUCkgXoBSCkVHaAHn3jwBTL1e9zk1jXV6bgrZNH8BM7khijS3GEgyG3kmH9yb",
  "key24": "2TqNLBrG8kLxDMGgvq2E5B3FkD1L4nRuhGmBqtGgHubM3deHZmYuWsDZzqLrpfcBwbkacKscwV8oqSTDhsiuYSqc",
  "key25": "UkELGVL1cP1vTyWThLhHBh11E8gkXZ9z7hcdPrxHZpf9Wv8zWT74MWXyfhGH3SizvxPSTAtEQXLPMUrHWq2nxQ9",
  "key26": "4GQHcKC5JrPMMCTeZisZyLfypHCsmNQKzN9oYjLQ6uBLVh5j5ZCgfaS55bVwz3rrPGQXPvPRvFtrjzLchWd6cH9F",
  "key27": "54tZ7NTPnBxgsH5C5NYUGBL3aUex8SEr7X75vbUCoFEudcdbCCc5ce1yb3ehkm2HENmciVkPjghCKvqNFjp3BWmG",
  "key28": "3GxWKKAYzQ98jZ9pBd1cHb9X76YBwhYQDTDRuMhdSzqC7jfu8h6qitZHV2vk5CRnkmWVm2nB2XMsv9Dqg45kEei6",
  "key29": "48KvDvCKKmx1u5e92JKYQayWkZ1jz5cLmcC4TnFjtPLdJX7gv911C3rRcJ99L5J6sBokFWeNxEvVSWH33kbUJABz",
  "key30": "64W3uSctLCXvej2BzsNXH8aY43GKmbhQfGZPgRfoipoGSJyk99AbF7PwpJey2VtHFhpiDC9Jhnfp2dPkeBM1yPW3",
  "key31": "64yg1xxpcdc41gqLASb3NYwgjaAXEN13UT1NikpRUvEb335c5yXB4yysxdnwPnGGNvPRY99Fu8iWVBAk8FfJFAVL",
  "key32": "2Kj6ZfGUKRUaJwtbqH7nE5N5JU3qhPYFuM7yjmVikAHo3dsPtGmzzTkwXgmq1uhTPpGATsbuiFzx7fKeVk8RTfRR",
  "key33": "3xtQ47WettJgCgv7kcNV4eW8MXnbybjq1VmMS71mWiNjwWBex2KjV3WfnLoqPis9mrwhSqYRVeS99CHRihYKMYgV",
  "key34": "45s7Qb9jqNiND5ExrjTvfwAPQynmFQnjjXTMtiJrAfbj9KjFevAQ5bizanjuZs3YheFtiihKzgWVnJAExEuSBa2u",
  "key35": "p6srP8gd6budGTWcH5EZ5BdMC55cDDQ5qMGHUdXwoUcXtguTvuzmFF1FXMrjoy3KseJRpVXhcnERZQNcBtkguPK",
  "key36": "2CyUAyXsGxct5n1dv4XaS3JHJqCGF8A1HSmMSZs4nVfAbNyNSyStSupCmvoarmygy5Gt3cUVr2C62W92Bdnbt8nK",
  "key37": "2AxzGvWdTqP9zt1ycGji2RZjkKnQfPnuo5iEZRaQKUT8NMtT91w2wjSUjCixESRkm1mSXu3U1t9D6rGxgQo3jMn",
  "key38": "4hwm1vfVYDxCPbUgohUukQUbJ4EQDYN2ZgoydJEBKU7xZMZuBEAUrBZ3Ejcs7MjEzGB8Xv1V91udddFgHGyzHJd1",
  "key39": "AKeHDSZgbD6GJiamHjvkBfWYLLSpBfqcmEuSFaddaiSiLa5bsTPaiy4z2nDJfUjreQkizw3Jd9HuhzCCYCzzTLh",
  "key40": "3SohNJFzrBL9AW5pq1WVVQwa8AAWGtdauiUKfec2WxMSRZJundvYderQwhRMEbTq8dkCxX9xrZaeuUobAGuHiDSJ",
  "key41": "hyu9dS3LKBUvuhb8a26aR13vhcVv2UNLmWfzccGAAqHawv1RpF9ET4VovsZkrCquZYhVsq4k3hxxZekJREZ8e7U",
  "key42": "4YSBJxAqmrxh59XGTMgKPUBDzmMVm7Lp1QqTordWuzuZh6pSka7BUamnm3yTSHn57CJUjU62WzNoW5WA4m5BiLgw",
  "key43": "2GRLrPJk428dL6MAD5u2neKExKbaJ4f1GNUSmXxA3gyhEsivoArVgAJ99C2LRgXQbNbXBsc8QxvCDyjGnDXtitHV",
  "key44": "8L4ZUQNcL769XmpdWpzByXZ3s7kE3k5afNF1DJtxL3hPuaVJ9WgeAg1cv2bHTVj6mpA45fBCefwG7RcinHtLHRJ",
  "key45": "65Ap6UgRk3RtogHBWphGM43WaqRqAjmpRaQsfCzq5D12WEDf8FsPGKEVgDgePDe54XeZQg7FhcydbBmGMyaYgVQB"
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
