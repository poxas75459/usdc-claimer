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
    "3aEx3xRVGeJ6gCNYg1EYYyoWdwKXNVXkYVXYcjAZSnQ1ucY9Wjk8sWShwetcbBeuz6xwaMZYsP6M1Nbe3CNu3tVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTHtyrFK25iczkDo3CJsXmmJ9bGgx2afD1oK8hKEJZGJNFKXQKUWqt9PRcsPdRE3GxuKcSzZ7N97VmDvtZ48APL",
  "key1": "4vV4Gx7i2s4rpJs2FUUv1aL8AfJR1Bj9L4M2rDnwV9xg2xFqeYpC9T2NYVEJcyoqT7wG66y5WrDPWxpN7tbTmHzH",
  "key2": "3Gtr5XfsgKSWQBoSJEzYWbu1JqxLE6wuKa3E3Y65CftEymSzHEfkEJq4L6c5xF7Mct3oufMZ4GYd8Kveci1cbvcr",
  "key3": "2BN2ACcxPn7HEeUwiXWNGuQqEoXNjt5frq8kdoMvqGoaYotrkU2t28RiEYEwWNPpBnk3hZeubQ27sdaDNzFLxzAR",
  "key4": "hB5Fe7btuBwj8tYhQ9iqEPX1jcexnxFbEsdiwNRpJ26cRdz3ACDU8YeiKDiL294qD9CjwP8yv3grWCTfcRSQnh7",
  "key5": "484mqJp1cmvT9kNnihYh2N7AuojhGtUxxihAoh4nFKewuNo6QxsZnPEruRwVdF9Qy4C3TiPkvQdfoG4LzuPDCQ7W",
  "key6": "3pidwrmY5CdVssYef969REvjbsvwpiBcYHKkpPkVmgMgfj95pLBVLdBY6p6gCGwgCfnSHLnxZANmgunA7NGqDjff",
  "key7": "5SamSCZU2qhQwZHvh7Rb2tQoFdiQGYksDHvnFQtHzDibuR3YPwYYHDCW2zoRk8pMoQRncSa44ZDiEEU3Nw4hexFJ",
  "key8": "3hBgzScLGpdLGxTGPYZbfgPJb6qNNYbGCrz7ukxoSF8G44riFKwhA3fcjEDUcvbqhUtA5YCrZ3SENjvNtVykoCPi",
  "key9": "8vCoXHe8Z9RMEVKznTY1EBAyd4QEBxWU5mv3AsM3NRsDQJC2V4UpqzUdRBv7PV5p6mS94XArKsRzJXxe2a4FtWr",
  "key10": "8NhkqGdakp4Dazjq7mS7iCuvJqZmEX18UndkuGZ3w2zr78S4bKpHmR2k3EAzFRX4xjJBrUhAuDw87jMbXtU7Dde",
  "key11": "28VTWLEd8JXi819CbLVKDdTFcJ2XFnP2up46KQ45zYoSQdJywz7GLSmhqJnNuBUGFZMXe8tpncemkSSjpYauRdr2",
  "key12": "gaRkXtgMb6G8RKDKDsZfBNtKWFEq9ptHseu7kvyukKeDA8BPrYhs5PGufpwUMGNQB2hG4BDXMezCy3wv4NTDikB",
  "key13": "5pGzRHzfmtqiN2abHsFHet5GEaoebquRNqYKdNnX7jjj13XSA95onun75VhDNxzDhBsdmD5K6XhBtBJ67LpNiXWu",
  "key14": "46AccTNG3NyQYS2eCfdRu7t2fPNPZ7jQTST11UyKxyqGhyHmDEDUBF8QGoUGtony95EzQDAYrN5opNKPwebcuJGy",
  "key15": "4fnETUsXGXEmcbwieUDaSPvhC9sU6qQuu68PQR3e6AxgkZFTwLMWBmhGivmaS1tHUiZVfJtJPAyDvDogdvC1s3YG",
  "key16": "2fkuq4tNYAy1oznqfGYKJBMv1hHUtbMuge3imhARByZcjqGKuqy8f9w1bZjytN49h4j28GucDnXLD9kDuAaQPj6j",
  "key17": "4dPD1yydGM9C7zM9paCKYmXR76MH5z9kMHcXZm3ZZDvbUp7HkGR7W4fEVKvpjPVnUQXeJMDzghJurGGq4RsEmCE7",
  "key18": "2Jkaaay95Svhh4xWhx37gbmaUPAo4KJLq66E178199RmZ7XVprHNcfJ23HMFfNonRpAV64WwnYavCdnH2s2t7Crp",
  "key19": "59X7CUg6ZVW22eS44y4xPpg1ua6NJPVTZaEhQPQ6VY8GtU7jL8PfzdGctYsH2nafFe9gnzBY5NorY1osUat6effx",
  "key20": "5jtuAE5Uk325Ky4FGe4zsXz22vKce1G8G2BcHwXSpVDB1YwgaqWzRzQfXWCQrFZojtTJGsu6dUxoKKbEaVKKMdjj",
  "key21": "57DdF3ugzNuy7AYfY3dskzNtkSxNvS87hkArjx1cnKKhYxxZ4sJbDhrCqd4dEUQU9eLiiCAHYpsqh8bnEqPNsUTY",
  "key22": "v628DCurjxBVvCiURff9B22vpF6iZVpwMbPDCYgG5b6LaoZ9etqk8F6uVaLJwib5xxsTDSnGc4DGEu4kZqgJMDF",
  "key23": "4qJjH9FbjSntFpiN1nzXCVnnrTLyz4tyu8gT4UhZbE8JhVC7FmnZfUCZd2WyvK2Tj1kMwE4gUC6bCDyfz8UkNiaW",
  "key24": "yAim4fX4CX6yGQrc75jjgF2NHKizr95JUFXruYqZCcineBnF5yfZc191wz1yn2KuuPXJQqkPNrzKpUXqSxUcvw8",
  "key25": "5fX6Sn7CETutoSkhkPX6Ay29u2NZ42TE4yPh7GP7EPcYyocdyyv2XeMS5ZzMwiaev9abn9Nxu3heMkGsDdHiMzoe",
  "key26": "5Avju3pzTuGx39sd75GKuRa6bWUBQF3GwjYYu3eddByk2uVKViJP5scT2Amy6GmzKtSLgankqvYkKkhnMy9rydgD",
  "key27": "5sCWUTkUQxPtDMwSTbFAhDR5YnTz3G3EnJjjrSgpYbb4CRYn7a8MoFc5gHC5XEnEnjhME5JwoTRTywfs6N48qNH",
  "key28": "qjKzeRyYaKu7VHoE1pDNMbCUNXUHdvytRts1JzZfzaQ1K6v9V3SeZzrFHLcGY4HaZjknuk29EXSubQaBzHnsLuX",
  "key29": "jBckjGVq6EqJMkWhJ9Sruaw7AfJ2KP938o8cUB17DN9MCZs9NxjE46E8thi3fmBSBHaMD3zqLb1ynUHrd3qYbWv",
  "key30": "F3UkRLpFokrMF9HTnDpYarZwqgP9m5dUw8cogvRmT6ePzDHTePzPmFSUsBQY94hyr6fZz6EpzCeqbmUr5264NQN",
  "key31": "2jgLJGzXNuBFTqyf17Xn3fxzReX524s7J9N31PHHB9XaVTnxoDt9ReawJ5dMD1cb3Frfa2uzxf8Qk9VnwLjeRAYY",
  "key32": "3Gtce86NrHASjuZHSfWxPkPoCo73necZ4KGfEMJmo6vLNMVGhMuUFPiUrUKNxuxTnCaP41798w1oPNiwSbxkyTbt",
  "key33": "NmHN9mFT49mGwVpfM2omycMeJQqS77KsQh6M3WTjRvc7VzK7JT9BYwK77vQfGp6YDsrQD5EsSj3QhffKtFCNBcW",
  "key34": "2ZhjE8sf2Zf5m6TAkSGjJvhMkFQDBdXacPer4iNNKo5gupT7iKQ9jqw9cd6XuZ2EVDH2pFDvfEEL6Tjm2QdS3umN",
  "key35": "39UmjEPGhZb9yrE6YNa4V8j2eaAzRSJryhzZWxS1SXhcXZ9yM9m7V1wyEirtNxQbHH6j7HgPawe5eYdgo17bzUEF",
  "key36": "4FvGnjF1yDcy1awyPLhKndfB5cm9Cnvr4X4nGRfgs2BNWRzfbjnyCjV9EQUZpEk8kiwVkHfSqebHC3enYDc7WVD3",
  "key37": "5i4JN9AQY99a1BogRdCA5B4EXNfRDaid9CvT3ALvrDCcmyV94Feeqe7GZ87GwnWLcQY6dhfS2YRRYQKtoMYStD6d",
  "key38": "4G2axgaPspqrHVF7DuK162CUgPR8S7JZ1bawbeiGgf7BckXLYSG6hr3SDGanSfUjirzidfqvsV1ZHcQVptVhS2Mq",
  "key39": "5rQaw7i9vjru5fSsKT4FnXvpHR5sgkgh9hKKtYV5525ZGqc4atSAtkgqJzKTq8wHMbzoBCnq3ypCiXgr6DKuA4Me",
  "key40": "3mB68fYSJif987i7cULazZjSYBtXtHp5EXJhzcvCfPEVvR4aGMocgyEVZRyLzVsiS96B3d1hm74jphRbxN423zSo",
  "key41": "WSxP2bLz9TtpT2a2Ye5CmijRR5swzSGpnoteQ6YNJSbfDBNyTzvkVy1rNn2pGwUgkuTNnyki7MyUyj7nRHi4n6n",
  "key42": "3wPjw8XGgTVfcAg3HYJt3g66aotJnPjFdytiVbSY8YGwMAb4hZdzeVt8AL7csCg5NEREd95j1M49BTHuokTdhtcX",
  "key43": "2BpcafqyzS2YyXDbRr5LJXUkMMz7PCqytVkv5Aa5akHDcu8mmqVJHxG5hiNB494A8TwcgA5iauRyV2iamCwy4TPU",
  "key44": "3Sax5W8KzBA4BXHmC9SmzYLuj4PhhqWWMF6M7cuLmeWRXe5vAQLMptbDDdcgtucKAv2givcdm1zipogtycX54A6m",
  "key45": "45PKpYuwRh4cxtXRKJE7NeAymEGvMt5zN1eBN5wSffEoTtCqfGTG2FESFTh1V9NDCQSg4T2qHC8FLir7X1odwEfE",
  "key46": "Jy6sFNeKbSE24zCi5EvmZZLSvVkgaXT54PwJC4LqX7zJbjXX8YZw3JADp28Ho6aRnpC7ePfdfQBN9dUycSQUyEG",
  "key47": "L72wKaKrb5gLs7JPecXTDezUycfBvbCtRgNW1kBuPXBCVP2XYdgywgHDQF7eQfAaZYSXYqMSswrfbChTP8LrcMF"
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
