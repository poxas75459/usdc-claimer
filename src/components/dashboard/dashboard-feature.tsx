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
    "5aQzP34QzNwdEea2NpzfGa53kpbmLLEu6HR6fktaF4L3bWvvxvCP89rethvHanCqCx3M9aXKrHnoEDSJmia7ZeZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GpagBwBt8JtHiGpgynKj3NKdBw5Q5hTGcD1EvzPXZFKbzm1vc6x6LEEjJV9gkyHtXJTVWNzA9vHNiiWeoXRo9t",
  "key1": "4xmDLmLhrkXjYSibv9QSYn1yAioufNLwRRVhysnjjyGUryuJrXwKfwEDGNnSPiwJsRKQM2qgFdG6LaJxfRQxQRcB",
  "key2": "2kFYqcyVjTJJY6agECM4Xqf9ZPmbxbWyAipYRbcXaFbT7e8pXUusZxnc2nKCCw4ZAZkQ5jrE9vkUR1e2kgmKgs6J",
  "key3": "4dCy9yj4s8RkzmKoSnt3v4u9KMAK1UnAD9ggkFDUUzounUnGzC4Ro8wzkUiiGB5XvwjDZ6Zak1YxJGCeKqFxRv6w",
  "key4": "4hHKk4m7LYfZdqb9TtATvDs7A4Bdg6TsmsAy5RSqpRM7irFT6uQ4FuuUZhLMANmCJuRTw374rgtuBdTEf8CB41fZ",
  "key5": "5ZDkMmdiTUD6RXXZUjN5BRyH9GCNPqXFP6YyzfZNFua9w27RPUbEi69Xtxwe3WsKPowtSygnXDAdTGvfuotNtnb7",
  "key6": "5czkm7ioxPF6SHp7FHxDyVVAouzAje2imJEfLyfRHoztBmr8yi4NLTxsnDGx9SHziU9e32tF7Qi6oKCj9MtrpQQm",
  "key7": "rxWQcL7hDS1E659nd2dpA7Y39YuUy2feXMAC3rmXdohrW7AXsNJ6nNgGHAnXwJa9RnypWinfAqBsjmLKVQqWUDw",
  "key8": "UZ1ZZSJR33YgV5shVDTsFoikNirGY4A4oC7CEuv7aqHymByBx492i5c3ukEtPuKagjbUDspUyon3oupiGCP6UZA",
  "key9": "5EYyFZp3jmkDuX3D5KpcnkyNEKpqM51Lq4EwFzGwtnqukSMK8EURgu9tPLayMrLwtpaknPjdZcEELRzwJ6oU5ywN",
  "key10": "3hnq7s3yb7yhSq5jqz8SQ6nFCWZDAaYPsjmbYk2UPA26TpCHWBrttH1atvtTWT6psQHFtRvK5HQJKDiqXJPwYrgU",
  "key11": "3UuUvDR9nUwurKCRgW5hcxxSjzpWyUzkCvPf4SNLN2uiFSQgKTDitUUAGeEtKeb29EnW17vqeMb6G2VajogJ9nrf",
  "key12": "4A8Ezgh7YqESRRUvY3pAypBre3wbwSKp6pCfmoUvScJA8Ju5NycvfFQChxUWzsF7LaaaALUDan79EkNdz562eXQH",
  "key13": "4uvNvKTdW65wab2W5Bv8RPH3d9RT34pdnPJte7VscN32KZ4bjwxLjNNz8EqRg3CAE67iJXSnLAKF6RMV4mf7wCHN",
  "key14": "5VS2k2ZyvjsMUrRZ3xejTiYDZ2ReGpJJPoh2J8sKAVVEiRjUDZK8vjvBEpbmKb8K111m6zcr49NDX19MSAgsaZ7X",
  "key15": "59SYjPwVZihAVVKpin87Ukd5fDodpb8PxhbWHehdCFqXYeCgSgGNWbcAFB9gUirx6xagCS32BEKfATYAxYPvBpVS",
  "key16": "3hTq2PnL58CWjfcnSK2btRiBhGje6Fjei5J4yvjaBPA8EGTe1wRdoMpW3943wyMMdnLGfsLerDQBBkZN44ARsD6k",
  "key17": "39MP1DJ64BKRmpDbnvwnqknXwougbC7y9DYjSPq4VV7ZX1YCH3B6PgyJnPp1M8RxMtg9izsdXoWLU2Mnth2trvBU",
  "key18": "tTG8nsHDknE9TN8xYhfnzWYTbjdBH2dWEgZ7e92gpWuAfTWUXjXuRxFH5PugbXHPTW8cGN3eoLrSjCtSwbgrN1G",
  "key19": "2afKUyUH7mYwvhaLuaNarwZm8ffBR6UEgtNP8ydvLQaCHWDLUEPEQuqLWE9iigHo8i6o2cNtmFuBeYbmP1rfZU5N",
  "key20": "2SyuVeSbPHHYmrvMwXfREBoLA5pUGqwpEZwTQ9MCSabZiioY5cfuzLLUTrndg7F6dUZPeYXmacgH9xXbEszLrkRz",
  "key21": "3jPqmh3aeqHhpG2oE7Ta81NDEjaYnGQNugF8dhMjwA3rXqy3dcmjDx5KcZeBWqNCnHvt7nU7Zo2smFD7cqmmoePH",
  "key22": "5ryeZm8F1137bZX6BqsDghfx6AzWbtaj7o4tYP7qR8CaqjtQKfATFt5xF1bnGE5oPP2kGTt2Vf2vQuYnJDBfJma4",
  "key23": "cTfh11RnEoRjn3rfjDu3mNzuefmksxjguRAofBuNHDYiA4RKhnevnESHqHvbrLci4ESwhxMEtEHtB1H9shTcuQB",
  "key24": "4JLZqzEB1ZkNzAoc3K13m4eePR89aZbP7efT6sfdtu4zQmyyU6tgRFP41Vgu7HwhervsSqscp35WUYvJ5TWa3fzY",
  "key25": "2rziqf61tzNSFYc29edMRW7brDJNwcYnRsM9LE3KLM6BFhKN7KWmMWGwHjzcRw4LyfxrJYa5h2woVhTDoZGGNwcj",
  "key26": "5G1unocu9uCFykQDPjJ7ATa7Gep2QJN2zwYj2u2SSKC74RRGXT5JKF8SkpLZZcJJ5Ymq7N6iz2uYYPXAAu8ng1HT",
  "key27": "5T94UgiSnjGjZeMNHnBRAGYhUKrrbRqiBs38jLVotHvjCYUhVVgQ6GaFQyW2WWRmrdeAtmBYvL4WhRPohqPvL44x",
  "key28": "64tUcNMhjjV6JDm4375PWAJe6VJSFkAjenb7DgmZZ7mGfQQUZnrQ6L487DeAXjgWfssZH9mcR1TQTus8UcSRftPG",
  "key29": "YdvB1qcJANQgjW8xAvQ8Aa8Z5kfMvnifkkLkDkB3Tgs1f2SE1Rp6V1fey1RAA5qUW2GAjbrz3Y3NsJVZzVUNddy",
  "key30": "29ndmZeSNqZtbKZAmEyvtJb2uPMJwdMnAQrqNpwNT78mH6ZaUAjVXick23hCuppge2edpBVi888AZUp3pRAiA1rH",
  "key31": "3ePMCezmSJrM2AamLFcZ7Wd3yhF5JxvD3NYK36uGUnW2EhRt69fp2RrVHLBy81HzWeeD5vK3ckLbWXXE3FWvgTup",
  "key32": "2tAN37VCYu19NRmBUjxFL3GnfbhaeSo4zDvQ4GX71aN6mXsGwThnWPBzK2QG4sXxE4egzTkHVQ3A16JusUyEcASg",
  "key33": "38xDggEN5BYJk8TsVFtyz9QGvWS366dWhBj4LY4Mn4Ss3x3MPRkkgELp14xwjPwzRoaArBvzf97FWJ6Wbtw2CvLk",
  "key34": "4awNynU9tTmqxs92cw5b8wueNq4MZH7GjHBZbpAsWBtLax1HLfAK2EaAtLDxkTuLzSndJPUYyFdKV7B8wyy1yAEm",
  "key35": "2LF3b2gPkpLiRH4WMumgZ9m77aAA2BbiVH4dehZCVwCYSpx82PWQDiit4WgpK7zHP4vR1DXguJvnrhxMUZhEUgM6",
  "key36": "a8GVtwMw1ZW9tyMYY8jsrjkpsGNmXBKgEu5FZ9XwD9YdhWkXADKXTo62KuJSG6VNzBd9e7ZYmJ6EkDdPsfm7EbA",
  "key37": "4tiuTutmcPBikkxVeHpb7DmgGpT4WgAkK7N4aS4EMVqCK9dcRgAVnyrx9VdWg3F2uAwrvQBFXEih21W2uV4Xrx7d",
  "key38": "Gs7FqfhmNqekyBN3xdRSQywDs1Uv3efPvKZftUoPjgTJkFLFwaqq37kck2dRRsbC3nBvJJeoL4KF1QJbzTXNcrs",
  "key39": "62Aft6rkYPxzPuGN2UNGfyXjNjN2J2CyLXi9PcRF4ZC7pU8bvgn1hs3GXpsNG7YnbpLZcvW6Mbim7svhZJFkvdEB",
  "key40": "5RDr57xvU9x9FtZUph1QikffRyaDj3PNCneEvDYjKKk649rHzF43u5uxZKJNrYzh86mZyJi34vnYfbQvK7PryyNp",
  "key41": "3mpswGQM7SCQDkWX5jFs3YLEixg7X7RPo57gZtPacCGMPyMAzKJf7A3tAQRhJ8SdnMhi1cjovUDzXwVSfPfHMmKH",
  "key42": "3BCH9dkS4q642zJpUKK9gsciquLQvt7GfPTNACEdhiFcjyYFC7tzaqtJfug81YaYGVb2YVHH5yHgDK7q9ZD1837H",
  "key43": "1SRASeBdMWdpZaQWxaeyB8ZoJyoDNaNpehaCC1oD2arnmuaPKAZAnWmgYhhkVB4SiYcrGy8EwE2Yej5X3x1ysrj",
  "key44": "2XtZ9jZkZRarCRiAXY9BpM9ee55urK2zhHb9EvSWTVnyLmsaGxLUTmZZGLpkdwpA6ZH33YH9emTgdCP2HX9B6XPj",
  "key45": "3TMKTv7fFy5oYnaCacjtJMSVhuDEMWBvzVRdkH3RAUUNEGAzw4PcaTjz85NidxFW9rxqoQDK44UwpWPooiDYrsbd",
  "key46": "5K89Cgnzvefvjv54C1GMUiXFxGs6zoERZ9pAvmNeMHytbVtGcZZBngyPVQPYnpF6DWSQc4vt5fRcfEr7Ao6cwhEB",
  "key47": "2Dm3qvHoVbWmLD7i9oQVH3aADiC5FC1E4f3LXDF99bbyEVEXUUwQjkCqqWM5LseCgi7zKcixv6icgAVCLPnt5151"
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
