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
    "26tN9viQvBvHLfAZm4GNQAhnFXyQZE2CUd9ZMYN154tJKo8354Pn4qFjgfkG2krMBABG7XaCzFPzvKtbxdgu7PoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47GCRoZnFHUyNzvq41Nt6v6JXwZZJmhxQ489Bpp5Wo3rNor4N8piBopD3HiKn6yaVmL4VEhCK9xjJUN2qwKyuftL",
  "key1": "47HYjKaq6KqzY2jrqbgGtPuzZgqdKdVg3m3phAqq2fqvDADuDY1hVRUm6XaZZJ54eFFtyCWij2Qd2XcooHxwYGEu",
  "key2": "2eKSTQLpPhhrLdHVFqQnRSTAPGcKovFfmptuoMSwnAixFnVdtVRSiZZkwCBwWhhg33yj51AxoeJjZVEAqj5GBHQT",
  "key3": "58CPQhi1n8ELmnH6QvjD3qDdpSWJPPDzy6eJ2XNeVNsqVyHZJLLpZnXEDb5VY26ru4GY8AM3BgHWp6fpQ6PjbkFf",
  "key4": "gHGUMA1ebEZkKcYG6N72tL4Z6v6Hwu9fXESMjJR6XQoq22pYDVvB7R6g7KroBGq5XVrZXQtkNssDwPcAeNJhVNf",
  "key5": "5HvJo1FFSXktdmg5XZpaEf5yHPcLpnWgMY7odba6SVgMn2XF96vT1uwtAqs62w96f9S3gbYDcm41hTSSvre6GYA3",
  "key6": "2HXDuyBPdFLYSijo6nESXmAL2XiUgADTSCiqScTypeMLfyFzDyQ6fB6H1bSjBwK5o4e41PPXAoSkuKDRwMcW62se",
  "key7": "2i6BUzxzXx3isfRE5H5yQdpyi1u5hFpfX56xsQvT5gBaVSBpJB2bmkdijYCcms3XoHN3HyKWRpWKGhhub45YLFFN",
  "key8": "44HCyiW6PA8HbKtnhb16PYocsr25iRtZyhBNnGLhHR2i6yBEqJrFhCWwYYtssvTquCHsYqAAPF5nEmHSVQagfRDE",
  "key9": "Ajb5ziiRGq1vRuQSnZj8fo8axucfMNWMBJjcKF47BG3nHv3WRunkS7hXcMC7Dv7R6vwtiErnSxrQGuzay855c1z",
  "key10": "4f52jxP1AzEJJXmeXp2krRmzzg1HPs6xXJxapgjYRy4GZKaKRG8eLqUCT5XJ8GJ7uWmqE9pMmHWVrMszGUdqa57Z",
  "key11": "2CenJfpqqRyEkqDAbS3LJTuNme6SHiYcUUj7SPyy1uYub9GxVHCek62q9J3GBxNmtoRuC5uBNGhaM5EVtLF1YGxQ",
  "key12": "4yXP7GYsrSf3pDzMEj2U4NEQtGbTGqDbjjDr6aCDCAW2pELGMBn5Wwijg8FkHU6Sh6yXzivewqrghTutZS9vK6JS",
  "key13": "26Xx81DdyaxK9UL1GQNCX4xHVVwWxypmZyQWevkLWV3RJ1xYtkQwPf3mWULQL7r5D65Hh58Q3Qw4ZS6zq3WeaVf4",
  "key14": "3PeRMzbB1Lt2KfR3CuQoB6QqnFzFPEvsS48yYSVyVoUD7m4WX6JnTsUk8rvBuf3jxYbk39wDjmtAhWmE356dyL1M",
  "key15": "5tWrPEvFFaf2PwTadLPfuFnzShw9rTUzRfqWGibYqnZWkPjJDAgsLGtd4t8mvgFyH7z2HSezjQPBtG6MpZtgYVD2",
  "key16": "32nKkCeKTHRciaCcFmeEYQF7rgXqRR1Gb1MstrdqTvsDRe379iTs2yxndQRrUuSo54Dnq5iYSz3uUe7xM3mWAsAT",
  "key17": "4cmzVdRFr7JCtm4JcHLAycUBMqSPJGvadd1wCxFp25b82hsnHEjnHBuagiuGQi25D3pbcFVos4cp2F28S9ukT8K2",
  "key18": "2g2wRfHuvhZqpnT2qPZR6E4GrBgqNbETeh3nYBPL9X3mTGauftV2b8daYjGcJPh6ErgjELd5k6RDBehbCBsRTfZh",
  "key19": "24TPxSzTCTjqea1jEt8S2ZomQcp96MFxN5AhT77rGQht8S4wE2uV7dMDnvUh5neNS7oYBgLLh59se3WLubJQrDAx",
  "key20": "61TMDKJS4cC68ahmPUFGnxMj2RpqKLCATtnDDgxBhvp7kmdYSh3V66udKA6hVMQNz1mswg5QqUqA6sjSrc47V7h9",
  "key21": "4AR59cYRJA8PaCMAPfPaTHtChKgorzHyiv5Ssp1U7vN7doAfAXc1KRNpMAVuUrVv23aKdhpCud7w9RsYGPWXDWi",
  "key22": "JVA3nQhVuGUpTHtzFiffFSfjDcBqYaZULe7DgxZ36joN8QTHzCHyZCgH4G7W6nX6Fpzu2cWFf6m2cQ2RHMq1xZi",
  "key23": "2RquC9gd7MJSbiRu4rmBTeXug55uCFupPE8Lnw1RBvYHLKwUzLjvqYoUXr49GwuxwVo1ULpb7JX7kvEvcKSx17NK",
  "key24": "2WDrdsLeAaAPA7w8vTrxUi1qL9oqHAVgS5WzZgzfevJLgWkcmYj2jgyXjuKyKUdHgm3J62T9y8sCKwPNygU6xEKZ",
  "key25": "5L3axJqRS4yKENTXCSjYhxfceT8VMbNXP4QQxod9EsbwUAF59WaueU6PBp8dvpaFaAF4QoxwD3m1FZBXkHqF8KYK",
  "key26": "2y7CK9HEdeVtvNDsTPvhUJV4g4LBVwh5vYdeDDDdib8jxpSvBGjcng2oUY6p9E8ngAgxGEzC1SKT1vCPeSvKrv1R",
  "key27": "28xXpjSZLhzwFQDYkYYyaiV32fWz54jzDJsF7qb7RcaBkxxt5RExhiLaUGcCEdKn8vkqjFbVyrnt7oRVdJy4dEa4",
  "key28": "3tAoYqgQkztKJsVmg22FBhxunSwFTSzjKJhiRGz6m1DAqzqbJmDsbxTdmr9a1Qj1uZ8Wf7MjUarqJPmeuSbcTFwy",
  "key29": "3rEiiZQ5zS3fbQqHzS9pnknPWguPqXjVCoe797yebtHC6RAWyLTfHZJGfQVQMirzpXRshwGLc51tCJqKM81ZvZu1",
  "key30": "5VSWqzhMV2rh9BqucPAEuEbmpG59u5VfAutqkfSDdgsRKEANADpsniy5i25cynZ7nYNB7tQC7KfbjWdwWnT9khBT",
  "key31": "4GLXSDxkfAHxNA9tdEAXraggtkxZMP7vsdujZg6GnuZKaTNGCAoGabjavuiCfKFNDEXdKAnPxcMH6LYKNg9nAiYh",
  "key32": "3bD9jxwZZ8oLgZFChqPNJvPs9eTt19x2X8k572yb4TWUxbVD3Q7FVGx7MaUXpurfZcYJ1ZRdmLzGvxxbJBvjF47o",
  "key33": "2L37Px3C66x1v3z55PpBfzatnPHy8h4deur46DdWJUMGqBm2xozRGPr8VFqXC7qFhdxpdQ2yH89HsmzaisHcwGxH",
  "key34": "2HxzxSBUi6hxUAVcetfkaytJyA5RffeqrJemURhLnZ5H3EYELouv8RrxSX6MA2mJ686PizGjBSK6BAw4KV7sysoZ",
  "key35": "56yPMuMkcJKaeYfZUToLyqMrUvgz12kKzxyQ8TdqYFXvsnaNUhuSe2u5gjVaPeabjGgPqWnxgB18EYyYHQYuLeDN",
  "key36": "3eajPz8G4BGyeRJy1yqjdcFf9vmkfgjmYMN93gbvpHAMHHJom6DQL3E3837RcXXSNYtKWm7p6qG4cEJ1to1XK65C",
  "key37": "5jYzyvizUUbqYjx76RtiwpoQyxtuZQZWDpvAWpFzKX2fFgZT9pUpFSnPFr4FciisnYp3hEjriGHX2uHi5FtDAnKA",
  "key38": "53kiuhQZRNYpT2UpxcrbsDxmTwqAdvBWVEWNK3uqkw6eEkf7tXqatPJcT8Tt27iTL3ijR6j6ChJq6cEruLpmo7QY",
  "key39": "iuQziqp2Tz62r5WxSZ3sj8jythVGeFSwjNcjbfKCZpCHtKLYhUvqkw4Pkhw2MokBFYwLXm4U73zfM898F6Gjr5Z",
  "key40": "3EZGd2atgmAPjeXMUn1VhA8efE2SdPpEvXwqcb3qAiJJKLX5bw4Bm7apxaxcKF58iVKHboRtYfZXVobhkm7ciui1",
  "key41": "4HFSZxdLansnn6JRpKPEDrJkQetSDmua33RK6mfKPze7D8JcTwhhT2pMe59vLQ9N3P2W9cse67SksmDDVxR6k1dx",
  "key42": "2SUsD4gxMS3mTTyhqZDkbheorFGit8iRjJZHK3DEwu4KZktGDpR2MHcr84GhSoDiADCXA9c1LyZUVqYsueyKKwch",
  "key43": "36kQPvzugRxeRaY5sDVYdnDkpJ2sDuf1X9wVraco2QHeoKWUGK18WUnYA7pDHu4qjjNTPLFBNRLDvS1Te9ipjHFx",
  "key44": "P5TEvyfzwFpw1w2XLBdtZyYhi4AoU1ABsVCXEMtdncPUJrQbsMZPMMzseRCAEXQTVLT9f8a3gQMtv9rq2hnpQL5",
  "key45": "2c2rLRTPoaoHMQ8wSs58voc1JfNinF52wwy6awebEUmMyw5Gf1ZTy9kkGWxiLbBs1yDqgsHFPU4CKudcZeP6ZaPi",
  "key46": "2pzLpj8n1X9H3XvvVMMKNfaJYfN6Rs7Duur28A7at4zGkCC7zQeP1NRU1UA5vtsNPWDsozZHjW4wd14AL2nDmvTG",
  "key47": "2bucdDL8c7zaHTKY7Afvtb4QRUJKQm14t2xT4qm3YFLH9GdmYmvZJR37MQ3Swik14uZtWzmkRaWMsbCFBZytCLNV"
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
