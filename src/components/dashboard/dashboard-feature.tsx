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
    "5eAFQcKTejhaUALfj1KLzZS4ZiMtmk6MwZJnhYNx4kcCE1NzyNSPUEmoS5GdXqg3jzoPLm9KHtz2f1hLBZJJxYk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTUdxFYyiUcLm2Qxsib5ZezKL4yLyhoEou2WULeJGcieUsgpW2Hy71n7fS3UxcvVi5DjgTXSaPCxPTRTLJhuytK",
  "key1": "2kek4PUhi1CGoESRYgbb8fksabVuGE5FR4HothnfrjA6zxQZ1W3xnNbVAFAFFf3MftWtPRyT5NGErTiTNxu4q3Fx",
  "key2": "2gBJ8t5QinTY14Y4Ck6bJ1UxvFxM5J6wjXY9G4DhxGcCJSXZVXjey2M7gSBw8wdS3c88eDxazbNaHNRsUqKFUS7P",
  "key3": "wiiLRkM1ytxb8QLup3KT8WJKykzHFPQYQLDtFu45YJTJrwHJhSrB3A9MeBYH6NnqFyRxEygkAgzBQxxqY12NshW",
  "key4": "5yGiYaUTYEhFZX8L7EUENammVszddwQx9no2fHw4vh9EwaMiLrHV7QKGWsNGxD8Uwpfoeg9VyrypkysEYDuyr95i",
  "key5": "2LmvU9Q364MhfCViu7YeF3iic6LDGEbi5bjfvrFcB15beJzXStf84LFfNhFca2MHwDy5rEYgA8ETBZi1mqocyHCc",
  "key6": "y93PHny4MoRDc9GXXpFGT8sNZECdB5bhhKWQWdMkaL3JoEkEsY7vJ9ST4jQvYdZYj92Y9rBM6h9Y1Xwv1XJho7U",
  "key7": "3rfCpCj1oH2gBitwZi2een7iT7kLHn5FFE5pY1gAnKJDLfULkCowRh1ghuYZgAuz8wgsca5M9Guhbm9ySrZwGUHS",
  "key8": "4Q6GsiRTPTzZ8KRDY25z14tEHyYKzhzNx6YsChoSmSzgk6KSaSde9oX7QgCVUPfFZvfJ3ZxWvJsw4z4c4Pk9tijS",
  "key9": "2DpESVZsoNAFsJDaTdNniT6XeoqYaaRaSkjmhhVBD7rxjJJrMTQNqd35dEENuLrP1b8gfiAoBfbFkky8fphD22i5",
  "key10": "3BjTj4UeohEE6SjPK81ejHBJaXaW88Tusirowd2EC6JKxM4YPMu9M5X6dGLGGNpYfRLJmYL1V7vjeVVp8wuo28Gw",
  "key11": "5s4L2C7udi5VNAb9fUn4pA9bdFeYyTTBVk5a2qpg7qPS6t8H6vGPcU4JsWLTaeEh2hxsALsexQSwtaCs3nsuraq8",
  "key12": "K32y7Vvymx183fmSrPzw6NtfmWTeRS63zTv7m4wcW9ndauvXfE221NYT8uKWywhqKDboW4UzpxTXd6ehLhSviR6",
  "key13": "34QB1FBZ7EafPrTMnbqpBLWtZrxD9mLoaRW53pMWDycDQHeSqRQsLHby3yWbyBC6g1wxLTo7SHqJTQgL8hNsDiJK",
  "key14": "448etoTC66XkEXxBREqqFFtLVinYr5RTBPV7HJyLHEgEimTJeKnuZX5PfLxVLSWoGnVxFcEesv5Rx4NnDyKSR7yA",
  "key15": "5qbAi9nMNvrmooNMQYNLZZKYpFrMSZVoeXny6BxpkZztEgFDPRcPdqSG38oJuUDSmavkfJHzL1Esj7excAEkKpBb",
  "key16": "5jqLatjWuiLa2FKBE6LoFFPQDbL7TnFrv8cjusbyYKkXpD3ibQtLq9ATjRWFw3QitJgkVdPzUCTFTgoh1qxvkg5q",
  "key17": "3FjcEK7K7MWTZRYpmTE3rLJGU1AHbcTtcFR6GHdJGsXpihbaZw4DBKnevZRUzGWik3fgCMa3SyDmKKUaGcxNJiQX",
  "key18": "3AVmdd4ZEXQhBoucq9MdTjYsaMMDNsTyavKyFyS6AKDmyndvRp8F6XwtCyLciC3xpsDTFFKmqPDyvdLTLoQ3r9mr",
  "key19": "4NekB1cJshQ3AgQP5rC9s5NWi7ks4tvpaNjfs65dcAH6RDwsBPUWWuV8rwXayb7jiDU4MJxX7UtoMjoZjpoizAYb",
  "key20": "2eVLrXZmZNMeHdPh9PXhqW6optgwhfMHLcTZuTJWrzndLWaB3sVegGjv7gANoVqHTujev39JxQheBS7K3AcYfVyY",
  "key21": "3rAABXSqXPjUCmfGeQCPzC49ztWV1oqpHLNDuNkoZrPmdy5aun4ewtGwc3kDxYwEXj41Q6P3NDSrJ6SBq4WVbD1n",
  "key22": "5bciM2ubznVmbBjHXvXnzYsimzPtPTTmTQ6TShR2J4K117HUpm23aC4txpMpAC7GcyA5ghbdo5K4uHPnuk4UkeSL",
  "key23": "5FqCEf4aQ8YPtsKRDQVY5UxGtoPk7TcEKNj46rgpYVzce6KzYvmx773X8CDCA5YLNh1c9zSS8NREKPXDchC6YGB9",
  "key24": "4NqEcoftDFzbgD5XUK7Ss4GuNSUpcmTSaJmvk727wVqTRxbP6M6wKcHNmrZcpETGvFNTK1K7HqbGd7roBoWrE5yW",
  "key25": "2bxitvFwpKroFaonYVLxQXhNLCDWEqYrhxAvVbB96mtQWhUWt9BBHxqW6w94HeW8kCwoK7E8AootUqzXE92VPzgM",
  "key26": "4YPjERE3GXv2nttzAQ2DuunkpmYKbMdNGppjkQk756nCxJ4MRojJYRia2TAW6LxUz9nAy28VqSuiP9UGvni966x1",
  "key27": "2nh1e7gngSpUYg3rc9ywCxq6dZR5jnDMzZgwDocoBWdoDABh3ufgEgy5ggDLGNqkQfzdCD3DPXoRLJEXydHaEwqa",
  "key28": "2oToR3XY3iJgoTLtZ48ibRx9LjmdAfiTPVf4J54A4kC55ZwjPd9mmenALZEAQbCh2pDFqnoF72aYogSgUF6qVomP",
  "key29": "3Jnp2CP1YkVKhuJQsawfNGG6tmP3UNNyLUU9qHEHk7hzjJ8oahyPqTPijaigUqKtzvbuNDTVAeHQB8Xnu5VnL9cv",
  "key30": "5uj1rvg8adBvFf7zwUNZ2CwWgM7FATfYXzgkRhss3Lw3EPp4aJWRz1u8tVaaMLMVuM71Y3EeY2EHGUuAM4gqJsEu",
  "key31": "5sQFHPohwYYFt7kFnUvAaX3G9xyzpBiAMr4dU4D3rTgo2tqGSCw7MN2MVdLWhuXLhXw2xpiBfgJtzeqRXJA1XUwD",
  "key32": "4mvaUUm45y34v5c9tnZ5UGdTTkiRKzH443qUdnhHvwWHX8sT7vLbyY4BScu6b8w95GFFEKUnkVahBRW3LwYKe9ZS",
  "key33": "4gYV9kfQxzErxqALo49CG6T5h7CrqiT2YqgCCSGbEfjnrBC8t1rmad63fR32QKcsx95r6QBsDTpZv6Mv6A3omCMZ",
  "key34": "3tX8mT2kxoqdW4gyMdxEk3izP3yo8oaoKdYJGCpsCBK6VbNVMeQCKFCS2ZPw1kJjd81VXccYGBTcTc8AVBzpZNcM",
  "key35": "4SQmCrMZW1NZNUpqWGuTp6fGUo6UeEAwYhbCeseEkD88HEhtWfdg4usU5RxZFRY1RL36XTfr5XvKNkfn4tjZRBQU",
  "key36": "5tEr2qEXCGHzftdboXLcXLu8xuP1GFGDcEjiQu3d3D7Ky88CLvYiYZAvb66mLMGVdC4GSm6zcityZ5gthrzZ7Fve",
  "key37": "5rF6PXMwvF5v6GPGAy6jwATbCyyHJSuqt1MzSaomdbUDmV1AZzpjk25pooPeX6wBxXtuRDkbe6NRmEmZPLzr5H89",
  "key38": "uFHJrZ4utxEVNKJxrx2aekvEfaB3NgJGYWskP84LhntEmGi6bwRxKdWQNnRLqEetWTZeF4VaTqWz8WhCUe9K8v7",
  "key39": "5y6AwHRVg8PUGZVkZdSrpCBMFE3HbTks1YGwftd6W28Z4tyvAqxv68rQAfpm4YXkHitaEStivZooN4eJ3PkBKHLZ",
  "key40": "3MeJVtpNw8kE3LnEUej4mTmLtWigRr2BYDJFPdijBDbzP6H5AypNUxSEQm1JTnuHtpvoTXnK63w4Cq82fqpXEpbA",
  "key41": "2g1MrxNZKBkCRVeZoWdwVwUqxNJ3gHEwGKRfjz78VAKMA9pmytmfarPRa7tv2377afXo6YKUoyispibS2B5HcjLE",
  "key42": "2ov36GnTzeTeBN8UYnwVCTPs2uDmUYpqmWCaoPhR5cY1vNtdQPicGwtn5MfVxjYJ7C4K3qJcH7gC587aeX7tXwxx",
  "key43": "EUZTMfPuiigcArA3CRMgnF6ySGprrtmvQ2GopXHACEhoo9gmYQ32REjuJHC2ekv6Sn3amob1eLyfRqkDodQ4bn1",
  "key44": "5uK1sRkmBToy5Li3W94PEdaYLUjr4WNCH8p22xscCiSLSf1cwtcRgLGLR3ZHgBrmwFvApNn8wLBr3gQ2wUT1FMAg",
  "key45": "4QFPnvA8CYq1pDvSoiATLPJf6j2Up9mTq4cq5cXf1rHU1KwUn8qToXo6TVBW4ivXxx2Wh24cTwE7yg3mBR3j2gAn",
  "key46": "Q53Zq51jzYuZGT52mJdKSswffLXcgp5Xf1sQUEYtMcwFd4dYN98GGP77ge42NEna74k8az7kGqHTvLyzoWTYxY8",
  "key47": "2naaUJXAFfHBT7fNxiVQYuqkkF9QujXnUSF2EhVLjPjmeREzmAh2YwPuA86JbikLC2vxjUaGLswQ1FP6A2kbvLGn",
  "key48": "4DtJUtJQhXCWazrSs8gqYDXsQzdsvDWW4LwGYGgnkZBLxczuPQR54x3vwtinjA7hhPJjKgr2qd42rm7RGLZCYVtY"
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
