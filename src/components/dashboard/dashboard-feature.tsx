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
    "2Q4dbzYFxPD1Ph32sUmEGFsni9TPK1tAb5Tc53CEnSzRfMnkDgXuXs4o2V1BnzhwjcBxVRRmjkQD1FsvEBorLcUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mh9Uvc8HRF3vzZt4CRU32wUc6sCm65Mg6csjnhs4DkEUyZDgKzXf39SiZpHoQU5YSgwheQBqCKYJBPa44skB6e3",
  "key1": "5SrzdeC8NNzrtZpQQ7fDbYPYkbH6AXzn2ENgQowKdyLzRmwVTEWxRHLCAijeaN7ZNUSrgKuaNVzZ5pTEnXZ4hm4R",
  "key2": "5fLeK3qxrggwoDhbMeiHZipdPXGBEEMFnjL9YSrsucXXSvpAEqqBP99tmu235Uzsdr3KG7hrwVH2CHCHPRVSXhtp",
  "key3": "sJJzxxHeZzT7zi7RWaHMT2YB1hpBumm7S1QQKkGfkfbGwjRXGQmGx2EvNUFw1jc2XrYgS6vfFC5EaKv3BhPdm7N",
  "key4": "4Y96BLSMQaRZjFU786LiZheCggErqWUbUeFPq8UfRaFbjK47iAPrTdFin2MBVpjjnvQ5KYeTg95sgQTynjiDha1q",
  "key5": "3uePPVFHsD4ZAvjEa9aFYHgqsJuPUJvMP91R3qTNS2WWaojr13ZiD14HEJNPBCPEiLon7FKWkUvw28gfgNQ4jCZi",
  "key6": "4jdpgBJKnbKJojUogmysufBXzhyyDw3kGT6wYVs8Ti8zhH9bsq8XQNDpJ3BZZrj1FXZ8BLBXXBiystW9L7HhKpHt",
  "key7": "3YE6LGu6HKmW9sYmjgq7okZ6ZsQ7QDKaWVf6oCcFBuVG8wS8prWAAH78ZSx1zwDLR1BFBzJXNTLc87XuUBGk2AuS",
  "key8": "332toKiPBeA22QfJ8Mv5SGPjtY5NkABvzvxjFnLoiHuFngxVoTtsyL4EM8uBArHnVGC4LAS6Cxxbc9PW4K36ijyy",
  "key9": "2VPznqWwQXre76xS2LXP32h7o43T298EvV1s2mi6jVCkHMfvRzQT7kth5NX3QAn6vjJtSZqvdk3yGrVdtGDu4wbV",
  "key10": "5sor7j3dGq7e8pojnr8PXmmw6S6r3S6zg9Bxe3AaBrWs4bJP8owsgBU38Qg9nbMBsfRB2SZQXEz2dZGVPxugnAmT",
  "key11": "5wq8pnKrkzEwDUE77ppSivyifoxXbMkiGQdfrZTkimqLjtiZgL3bqCpy8wNG7e9BmxnhrMcprf5A6YEqZD1xeA2N",
  "key12": "3TaMTRimoTV3VHFA6zAAmrFBYHBnJh8ghicd5zb8xDEqQnubKFRXeek4DscBHYbUVF5PB62DWQiNU1eQQx1ddYGs",
  "key13": "2wwh6v6aEmFn8brqn45ipHLra3TMsmbtbciSfJFyNwEjCLrFa4yDcLarQtd3GV7y1qkYb75gAWxVkLaC5BRCks2X",
  "key14": "4PLutRaEbNSwmeqv2gjQhkEueHUknTDNPryRkUZLHVrJeUXvRHWLSNRaSRzj9xHAJMEYbXvSSiLLQduaHKbFBGSP",
  "key15": "3L2Gbxx9G9JD9w2rYhR82gcZbTeV7UQWfy5agUqJ2yr7ze3Eq2S79uW9kNhfXM8v5nMqJ1uqcJLJKoWjTRXPRDpG",
  "key16": "cShozzwSSy6x2aW2S3BhPqQrRNvbwSnAn3S6jd6JCNpHzyg5pJX25xaKXv5cDkqtBKARm9p8hXVTnb4vtKW78CM",
  "key17": "2VqQX3wu83wwfZ5kr1eEWreDBGtTtBxrDCnDvc2WHemnp4ZLsiLneJrmA6EyzYUgmsc1CahRJL66S35HXZB31Rqo",
  "key18": "2Q6pu62VT3jTkU7CavdPL7iKVGrmVFiBxVZYoiow3EFLGrHCDbNmizfacUvshgX5ZZDZeR6H1U9dEMYgQKDBwxXy",
  "key19": "2xo9Rqik7syNRaw8mgjJPfz1HecfTCf6hbtQThF17CFBzfNPuTFLmuVTwuuSmpzrXtDSD8D7fRMhSMCm5XgwVWui",
  "key20": "3f9rqwSwnGH1q9pV1EKmprV1QPqhZeMxdGvd46jYpXbkWjhkPCV9jL2tE2neH5DJenTCnFWBLXvdZZonrqpMHoYx",
  "key21": "53Yk3Y7H2b36f6juAEFhr39DBhfBaftjvTrfRYKp1UuKEdTUtGvuGL754EbWm3MmKUaLHYf1sbFVYfixTX5YzC1k",
  "key22": "UxHEWjAvvh4N8oR3TkYtcWk2bESttKoAdSWWkSpGGg4MyosGsCHwxBmvS3a2jgtsHtphd4Pp43Z24dChFJX9Jhh",
  "key23": "8vydXqTAmRuRn789AF8NLUyW3PAgQzVGL9fMrwN9TgftCuU7jPDf8mH9XuSXyonqwvTiLQY3YpegfcehxK7spTa",
  "key24": "4AaVbtEcQwSqKBC7WbBJ9uJfwaj3uLgUXEJqyXVk4NLRCXN1MancfmcMoiS4SvvPMdutyZhDMtyhenbU2pPzC6Zn",
  "key25": "r4sknYgHFkiKtJXyNsMp2uidHFdn28nYhtqce3eCkWbASBVF2i3DgXc3krWjsMAxbo3DTuqQkkSPS92dGSYziav",
  "key26": "2q5eTDvyuAeYyJQD8bj98BPnq74JiKCfSMxauAuoMN1WGc7cBcRaXzj3WzaHNBbqT3DbkEuQ24G7V8S5zpMEbusB",
  "key27": "d9yAVCQfosKv1UMAjJvhYd5B4YrfHqGkt1n3qsuZnmu3B5JvUHzVTxiL8HndmkjRpCHhVVZLJYVieBq69SKq7JZ",
  "key28": "MrAt4NvjdY3WoVLYJKpEbvXvUxBywiRN5CLrKrR9GQKhiqyg8TBEZVhCMjts1Nhz3BJJwGRWv4ELwEifYh7rrz9",
  "key29": "4CEoq9zn7GeURC3UwinY6PKWpKWpKG61dp5Sfv6neikCnSKRR9NCeC4BbibanB5yDd2pWQ8NfmpBTWwHSKi7uSxk",
  "key30": "5iitcTEBk23YJqYv1zm17KDr5h24FHQY1Hb2YT41tyQ9ezNA5mtCh5ZEMgeLEvZrvtvzbjPyHFcFBKtrfn1EbvGm",
  "key31": "2DTm9JhN8vfmFdbXpGXUbZhWuyMWkQGDUM4H7F4oeSLTm9WUdLWzaXiQmZXN7TtUdLgH5huGk9eMbPVPeR2ipy7e",
  "key32": "UuuqUcG1WuBAwAdWgYxeBX1feLfFGx3gY8BPJrvfdeZjG3EnuKXevEqo8baexAp7NaJB4oXWmtVzkbe4ts3NbDi",
  "key33": "2gJ8uutxRdMB23AAtWZL4KXeGBPzP7FniFNzpijrFomRUvMpxXJLUgrdwRERGwCit8SXTp8kTLeC8Gq8hF5HJKVU",
  "key34": "26hTjvWTRjLj5fkZKZUjA1wMDA2brogeuHSis3jWY9s8QHXcDaKM6eCGadaaVeazo91XmcrUDmfpU9a3Z3LfRJ4Q",
  "key35": "4QBbazA3k2vkEVkwFdrv6WPpj8kcen91JC2Qd1vcwuFcYjQLQpuRBY3JhZQD2oZBrt9QDaHVENs3gPVSNKvipkWP",
  "key36": "2k7ES6btEk4hPN31iegXvzSVC9ZLXdXTdb2JmvR5TnerqvnR1Jskruwqy3pzTzLgnoKA3g4prpyNkHvF4eaPieUQ",
  "key37": "tHkjaF5nSrdzwYph5hZzs68j8woF2yvRRP1deP5UY7BLvhdW1yGGpNhnd4E32M7UPd1RJADVfaXUZREtQEjWYqk",
  "key38": "3Pf5nk2kMhjRyA4QVWv2AnMwCbrG8z6zfCpA1gL58i3xEwbQj5G1G9a14uRKG3wEUEiewHLBhpyEMoY43jKxSwry",
  "key39": "3ymQerEDHd7mxnjCscVhQbGdQZV76i8WAuPFfSCjvsVkxPfhYx15CZeM63RCFeZEPdh3L7EhiubA9cHcGBo8bQqc",
  "key40": "57mHfsDPDFdd5zdgASKPcTnzwmymoemiDqKuM8F9nmyHqt7gotXYnQszA92TU1KwLe1mXjk4KJuZ6m3BHLM9M9zH",
  "key41": "3kBNXab4GJ2HMNyckvtrv4JtykT9CfaRNhoVA6SNtN8kddH99xukwnDT7YdjJ214FHbfjDAaQMcGeup7dcowvGrR",
  "key42": "5quB7zGg7cKToV3K5HHeigrtGKzfH5h9stLe6MDv9k7jpCnFXhbBcmE8aVvV7jWjThoPQ2UasQAJdzTg9mdpJGNn",
  "key43": "3Q3jc7yLGPtwtQ65NdzyZent6zkDaErZNwiJTGM5Lx9CbhbkQZ7Jcg2YHcwBQAurG7z1EveTaWGASyKfrRZi71jr",
  "key44": "4P7J35FhzekEuTGG99edyCGCwKKB6A8VLM67TunsWKfkPNr47Rhnuu6jbDzLNvoXk6DGeyqsHWovVeqQHBqi2cKz",
  "key45": "28DP5vVh4P2Lhch5SQyYKVFDTvc4jrDArHESTA8TAfQCPqvqj44ch8mtBWJKZCAzFcFSJ64tszk2G5L86LikUXbN",
  "key46": "4YmhKR9J8d8eayzKB6sTTEmnm3S5iPwxDrsh9CM9RVL14XVKMBEmypB887D3yGrrPX4xaed6P7wdqsvkasjyxBfQ",
  "key47": "5jUWXRsmu8oB8p5Vf2WAncCey7WgZNMgVxnn7Zx1fjM1uXLcWAtJ4J5wEUTctbFrf8GyAPxTzL7wnW1r7vZzq2So",
  "key48": "2yAXBe5gCNgJ4GqfxZfQ9wDdgxNDkXucDuo5QVhafYCixQzGryoPo34tFujVgjDiiRaQk95V4zs3To8QW5ppr74f"
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
