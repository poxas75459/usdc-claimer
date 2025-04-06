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
    "2GBJXKVPU3nyvJeEum28CirKGtwg2mqBd3yqM1CWEMcao8TwJzdrpMk2dHfPfHU9o4k7C4JEy1PRgji7cjzTtM3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfyPo8wKkCEfNE1zSxoXvxKmp6ZTTre8oSiU4GC2SsMogB3c5oWUrzCtX37AVPzDXvPWCsZaDyFQkQTsfY3sd93",
  "key1": "3bdxRctC48jQWAaiTSRc6227NVn6H8P1qTo6XXEfxc1VvAQNyf3GnTcRYumstob2uxntm3YJQ5unUpuvyvzKp39X",
  "key2": "65oz6ZkkcLvGiKnXfx5jD2h6n3fuHXFzL5WLBPQwoRkwxjhZzeF9FjhN7vfeJgdrwJETy7DyJGgZqhDNeQu3yqpV",
  "key3": "4j4tTnvfUe6rkGzQ8Kt7paZ2YcLsmdzCPBnfQKgcxn8mRnotXY3mnw6Cc8Jmuk5Lcf8bjnV2FuHZUvZ6EpiZ4frn",
  "key4": "338T5yT6sqAGJJ1qKRTtbLNRS84S6SaA3Vkof3qZ4YMRtkNx79hdWi8fdgERV8WpJroP66vcC2L33cTYYyy43Ngj",
  "key5": "33zaWYkH1RR5BHa3tWFX2NEXQ6fRS9m9pnD2ChfdFRutrFVFtNnSFXuJd37Hy35TpB4pLWhtg7hBNnQDVt4ax2xQ",
  "key6": "3FaD5BosDyzAiPjLbqMaoSJ4ucnQDB8yACVBHZD5RRq7ncH7x73BNSDvE6SgGePHSRaz39V1ABopyRNVhnHpBX7U",
  "key7": "4jr8BM5dgxVtpQ7R7Aw5QGJBmH1dJ2kdCeiitx7eDJPJcF8w9EWii1BBxHNFDrgeYLjf1QQLy2nBKcXyn7dr3Wyi",
  "key8": "3F6KFHgpVQZuq4FqGcia9b8Z2ENCN4Z3SsXWKUdMB6zyqMBo7bzYfmuwJPP1Fe7p3HVmfmoefiQ5Rqoprsy515zq",
  "key9": "2FYwQQHj4EjWFFQKwEhaEQUwPd6Ne2ktGdJWZ5oGXZgMkMTBiRsTHVxpEGj4LijDjsTPjfSLvZdUFvWEmdFtVB93",
  "key10": "5oB9DejPDz2A6iRzzcLA2TamTne2KAZQ7Rn2gBoL69EyiiXVogYjjDaqce6LEsgLRwTWXLi36XVz85tq8AroKm6v",
  "key11": "42escRFEer5SRdY4VLiWwrs17cd7JUhcfGSHhPpjRgtTmKXyrChD1epZ5EvPzJ1WytBxU7ZyKG2ZSgHYEL1xFxn9",
  "key12": "yVDAc5zaZGbuQbBGWPz38wsJht2pxfXguBzay2tabqpCXAvEqTxfKEowwrCHp5V19DkpvSANAeWGy9AQLXQmBfV",
  "key13": "L3bJ68KMbN6o9rDViTi7gkUSWsS8TmzpDWC8QDPNENrfxRhzUe8yuR5UNrL1ZDWqCKPep7CrgPnLbv64A3eSDoV",
  "key14": "3CMt8qMWKK4wbV2n2SphQqhmWGrajGKjB6iKEoNNuuowjtn5yeQJh6zbfavtifVE9UyYAYG97coCVo24MgKo1v6n",
  "key15": "3SYkM5aEWjon5TcxA6ResSeJKjiH5BjvvUZJN5qeG7xu1ErmjSC5omhthyyPhazNntPDW4Lcsv8x6veX21w9djg6",
  "key16": "3H8DMRv7aEaYXjHZDU9WexbhoNPwXX1R5RH3VM7csSYNnTqb6wo3L31X5Q1WEGHKxAsAyPTgDgLjJvQjCs5vi8cW",
  "key17": "5Ba2ZucMezrCR2zR2GUptfCXJDy8iN9h7hmxBWwxdZKMvUG2EypUHXS1WaCxrz5sidx4jUQHwEmu6E6Z7Xtry12R",
  "key18": "3wNwFhGZTXdCiucM2AsNt7RyRLsy9FygUwVprWPKy6NsFWjUpwCnZfwKS1eriWtXoRSBoRNGPAYZZfdVZfdxKMqL",
  "key19": "2cS8ULnNDWdQ4SxfSRyFuW677FavqhiF39D1s4cHzfrWV3qujPY3jF14HSFLwFBYpzoU41LpeAYB7X3iaog1znCZ",
  "key20": "3Baymhw9yTaViL8SB4KcNkkyYm2a5jvqqyr5QAHRqtvzrWeQQD8qBwwghxXJhgZsVT1aRnsMkSpJxXCvbodWtkob",
  "key21": "621ZLwTuDSdWvu8gm2jA2SjzTBSth6ZFiWK2LRdxgU9fNmn4m5JY1ABy5PEDwynMKpGi5rbYp9DDDT9cFJ4WBaR6",
  "key22": "4AMTNJLKniF6SJfAtZPHhQWRwdoynwLP3DZCY7LK7XoTMGp4NAqtv9HLo9PE32brkCCypS2MvgsvycMZ8i2Nmi35",
  "key23": "47tCsqNUr9s2L4DpRHwDitc3rHwarJMLSHkwh1Xfua4WCtxZssE3L9DBywrnD7DCc4rEZh5AVFDBsxxvgoULR1ZZ",
  "key24": "2cp2nRAQUoi4p12AicSEWd3wt4Ujo2EtGrBHLJ5gBvbgKyCshCng7GpJ446kfevhsUSDMfQH8VqSbAr7eK36Dw7D",
  "key25": "3s3m9reaSduShSJ3rCJ8mipd3okPV57mCKBkpiaRfzozv46UcGPoHyMyLAN1KQ3LoH2WHKRExs6AXTapkoEMkb74",
  "key26": "3esmw32oYU1aozFiz7jeZU3MPq7MkV7kQiJMfVd82V7NshZUx7u1o8CBsbnoyewggofjABkwMeSx8ikXH6PNs7r4",
  "key27": "3Mki74ZpP8zVvKpUJjmn9LzgxS9DL9ZhvhyYoTLgB6TXjNNBq7sYGDW98ZppVrWW8zu8HUKhT7h8LZnmmhJnrhjX",
  "key28": "5GWNi7qs5HzgFwKLmCjkMFPzT84m8tfQyLfMVn42QpnSof6sfiHp3DzhQniekkHfSrWsHCZxrTCKV58cMUuJeyMg",
  "key29": "4mYnLBQ5wE2Gs2zyqAQxztnCbKsHUUdwih46RJDKYffZSVXVN5KgT3ZTTzr1Kk1exoVpAFZk5zZi3snfbz5S8XKc",
  "key30": "PB1X8jy6THqYJTtULVC1e2Jf94uu2FH8TZeNs9x2DDqqREVTUvn7PAfZxe9tPLPh7i1BA3gE7pUBorQyWLna2Ym",
  "key31": "5Mn448KXEuMufShHt67RnrdkWxsmd4871sta17wBtfXiwbMzD2HA4WBEpSxhYsw4feagxkSCNQBomNGNufD9Ngy1",
  "key32": "3AqoEpDyTooYzDR4d3KaERAiSUZG15wyKWzDXHKh33TNeN1ZVbN5guaAupetHgxUWr6hFtembCQf1YKFPi9RFYiu",
  "key33": "3HSEFmcSV61qkbJ7UVRTaypvrxNuZsTx1qsz22viomM47UNZ2jns6XaURiPUoeVS7PfuJfA7USpm6FDEvDTZRKbH",
  "key34": "3vigiMwvgx9bWfn9WKJWMUCQW5absq24MmriHsTSzmGQ2sYLKA5odQSzVQUrfzg2UeLymanWsYhu8e7HTiyexg6p",
  "key35": "2e2x3STT9NqgRniy5mwhTLNkwiDMgvzkfcVEMQuVa2teupvUnaYX5L321RSHjgqvcgsQJQoYnymfBmQSeXWkUh2D",
  "key36": "5tGy3pfkbGKFxUXsZvUMjUaqFtf4o2RcXRYNi2BHkWfWvf9SFe3mF7CuiV16AuQ3tBWE6MEdHT7LAobnouNaVsyY",
  "key37": "3tGc2ZozbhZUFT7JfkRPDD2aYHdzLuepRsLsCdnLEYTVqLW213vc4FABHtSbbmguD2AE7pG9noncksznDqqEjqiy"
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
