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
    "4c7HfeUKBrhrtGwceGQuxbfFbRymKnGr5zcdgaPkWbAN7xBaDTvxP3JmuxoYPk5q4zGjz6Fscq7QG6ADUBcQ95mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129VkLu71zzT9Q4j351w6eDWp9pjgeXEzzSRG6PwBVU4La3JdMQag6RSbaqG28Lo5jgZmGG4XHb9HcUBdGbCECrd",
  "key1": "3USoyrAtir1sL2st642NqDPoDvjxWSApM49tmTe8UARBca2g4dXASjiZs8f8u9wK7jgmmTFo9K4R4VEey4J6j8AH",
  "key2": "2RJCfuu2SvFCBoPrer9Y3iVAAJ3VK3z34RpUUMaWBkNmZGfnjaiSpu6TFWcxv2H3F4Mtv2ohDCB9288ScsRgeeXc",
  "key3": "5zsupJvdgE2QjK7JobAnnvbxgyNerURqLyjBz8vfh3d8H1CV6wyVpqQivxyJ9C4d8jnqf71ZhoXRtesR3XekeqS8",
  "key4": "5i1Yrnp9Nqo2SBYG7scSrBC17wNPWEFUMUZKAqJWpQXz7utvP3bgrPhp4hSFdhygHsjGigEmDv88dsw9ethZXNFg",
  "key5": "49XP1JHmkQ3HMoi8s9ynZEsFNPcCZeGWbCD6D3Ye679LW3Grwdftx6ZEkJU2hboY5XmAXXHwhLAEWxcD1HMpXcmi",
  "key6": "4jQa4SdkUy2ecaPEzT6tW2p2y1PdB7BUHF9ZYTY59R12nmzKhg57gStzafsdxJfgbWi3rYax6CSogV68afscKcZo",
  "key7": "3UG1ya2FWJpMauLYT6DDKNcm2CvNLqWZssxTfmxBF9ETwhjdFGq8XSrkGMizoB1c4aDpcHmg5j5bVbNT3Qf5s9HU",
  "key8": "NJam5Y83KyKMe4E2sp5H3SXLUgLxcZFQMoLDGdw9cup2xYFDXtJswTbcqbewzYV4R66o4b6TAupWeQrGHswPecK",
  "key9": "CmYH5gHLA12xhrX7eAwipCY2ffyLcZBFjoymw7bzrdNCjUCJg6v56TjForAnbXqHyNkAzKShTcDrn8MYmLNQUAo",
  "key10": "2FSwEiopdJdUTNCfR9Y4W8zXDiHEAXrZb2F8rMysxQ6dBBrDBzafus52bz6pGjX845qNMzVArq7j2XvLCKwd9Pxb",
  "key11": "4MKhW1biF3fkzqJchwX26pxvfv36oCDPv7qQ9MnpHPudMWKa1nSRr2irXLSe3WhcSMe87YPgW68XSs9JBdvhkJ2",
  "key12": "4JWYYkkygXiYe4FhrKuviWPk63eoEHSGuEFJjL6xjjxBKrr1iP8KN7Yc5yqE1KPvuFAAc1PC2dh54PLcxXd842Cr",
  "key13": "52f1ehTvsgtGTtwE7cAq6dqaR3ucPYBGbSDqUkDy4XYmGPk5tqNpKXN8wzkLDDvbUTorNd6cv435VPrex4Jftzdn",
  "key14": "z7t8fTW6ip29iXnwwyCCaoNT2GhMzUDfjSemraSHCXjd5M3t5Hu2uPFvYwaER6VHnwTuaAq33829rpWYwrGqGkC",
  "key15": "3UTw6E3EjoXYbsrzT8CkxYepuvMeJWxvGyPQwy1vrnYnpmGT2kFaptSqkpxEGRGB7sdrjGgYiVCGGgcKzfgDVYrS",
  "key16": "2eyEPXNZZPUxP1WvPPBRZse9wMEf2e8kirgwG1s1CNV5FT4pkJnE1TDVSo65b4HHAnh2wMDcSdw5azERB9r4NrXv",
  "key17": "3Hx426ecZULgXxt1N1RLTSFpsKwQTvrwrxhjJrWcoX6R11iiEvWrGaWG3rEDx615A5pjaqvkxGT9iVBBzJ85JeeC",
  "key18": "5Dn6Y2fGyBbaf4MiBo4WhPnHXZyXQ9zDD5TGQ9maz5mk6t2SVtKaBi8cN2SejYh3RSx6PNgrAiQDAvAasJSxPY1T",
  "key19": "56N46t6XsDaazjqesURQfK7WDPuH9EntLPEbAWMREvr1pJCrgVk1c4xVbHcNv7EG79whbmmZaEUnQTP7cpS98UPW",
  "key20": "5NMFensjkXxqibw9WFjT13uCR7knMmYK6CsTbPSFrKJdG6m146Ezc81VTw2fhm5J5JLob9MicVyxJEjMmc4KmHzC",
  "key21": "4DUJs7FpFVsbGrS1MdY3Gx3yirXELSX6WbsTzAmvmq5nwXRCHXtmdhRWbKJoMStGB1ssDakJ4YBzvnSfJHbhSbJT",
  "key22": "5Q6TUJAq6c7QpAGkWXGzayme8Re6oQET4TCS2qNqs1vhKokQiafJXxZTvzoYDq4H8RU8dMnCAsQ9FJL1j3W36jWw",
  "key23": "A9qXiSjJfWu3w2BzRW4PTUaBm2gTDjkLuaynSBKs8SKMsVFvfVDyyGso5kobKaYEXNdnPMsSyYVqRPi4vWNUfnw",
  "key24": "4EoUP4AF7N2NQ398uabn5L58fLi8UsBRe9AUmEMyReEvkG9XfU5ZGQ52S7dZ92cyBAv4La7YPTgBU4TxzEeqvzeQ",
  "key25": "hzByV3Z8KHDX99ijPvXPE2zrdYYqj7KW7aGVjMZFguxHNQjLKTym7tZKKJUgFrgtT65n2qXbKBtXP6WihCsewwC",
  "key26": "2pUwTUuR4wnE5ysv4AYdzRhqwfXqSg1LmTNxA4J3ZeYCxyaAQh2VVzKKPRQJDZbtydChfFk7r9VA2Pyapda298QT",
  "key27": "4vt1knJ6D71FSX5EurobsaKXBcox6HPXvFdFbV7wZ9gmp8gVePjapUugvS7Pd9d2yCU58emkUH9LtUqe21ChWhYS",
  "key28": "zD5eAwPmee8nL6zviFXSGHV6kKvEHXRioYZ3qXpddvKW3MC8B4j7t1DsNoSP9T6h5pBoXprsF4no3Jt8vPe5sPK",
  "key29": "4vrJqnZLCjjAPjzF4QtPbv1L7oLUUAdekvnM6eHUUzN5hzjMVnzTMDK3icmyAb8rBuuECjwF9iDdWUnXXFAJjXd1",
  "key30": "55PJK4wjjK3KCphvzxYCKYwdps2gtqtBPfwjUhtQUcpaMYyAMBCC68jK9axx6ZiqZrw6xGRzAGX7rRmLBcqQm6ga",
  "key31": "52dstMBgrHape3cBsj1vdTkFxDVDgbTwZuBr9UBJX5WcJ7cvfFyMnQFcYGPHuGy3XkYbtY1tESy1NpeJvYeRKsh6",
  "key32": "5LcFU9ibWGzzwBo514WgM9sRgdAC2fahD5WaMiTKgzmQe1sz1kQrWwmtF6DbnkvwiCVxc7X1VeMmLKBruazyqPKY",
  "key33": "pCBVFFMHUk4MFBmyX9HyqAV9gmN93ykTHkbBBfarQYbakL8TEixS8QKbGa37Ddoi82SLVceNZJVw5Zs95tV1qBN",
  "key34": "BopaUKMfowd1AhnMNVzB7t2RXJy2YW4BLn4fd6q4DonfMA2TGzPCCRAeJ2PATFqj1t5gaKQHyvbfuU67fXnQ3qM",
  "key35": "2mQq6fix4eg1tJoCQAXThrgRwyXugpXKUSWUpr289gfosrdmfy166Z6nM88y6G7djen7NNmqZWJoEHkgpkeAJVWF",
  "key36": "2sfqdjqxFDycpuf6AakvjofKpuqdiAatHpNK3LAAa3zB9wJBm6SXcXKXqoGRv8m8C2ajgUALXH8AQfdhLxyT7oLF",
  "key37": "3SpgMv8mMEFByFbZnFXweF5PnY1iaGZGew61RvvxsEAqTNa7coUmVcUNtToNBQjpx9161W6dUoG4vDxCpGdMuUPd",
  "key38": "5jtSnbM3PbCzcm4A52xpZAhsgmgTJX2nzn8MQTcjyh1quuLzE6MA7NjzjVrtNQxDiUFgimAL7fUphhAmCRxPHrWw",
  "key39": "3h8KGVeWh6dsG9ztSNULdDAyjVgtUeKjG2hpNJwBQeFZNEfypBS8voufREF1AWunL2uJNU5mouhLFjqr4dJdHjHD",
  "key40": "5ZqjDrfph9kWynAg7htzt3dULXDd3BrdVYqrttbUWWBNooWCSfT26BJevC6qPG4SkVFgrYKys7w5s2s94Xdms8ET",
  "key41": "pShv12WG94qGzJ4FanCGi8b3QNH3J66wte6F7294iixJSye8EV8LcsefkpSNK2mE3cEz8VNHDHPPK8iMjxq4Bvr",
  "key42": "5upkreymBVicm9rtCqSPTEre4toXuKC75w6KnRaVvxNxVCFy8M7Z1RZyLaL8CfpWSArcYUttimqPJfoqcArq3rig",
  "key43": "5ELWyKZe87zx4rE4Q3RHookAKJm3J2qnarC26hevUJrjEuFeE6Jzc5Qs3FAznFkxSegcq3rgzzHLyha9GQaYxsmi",
  "key44": "5EgL2AmHw9Z7oLAp8ppYqvLAp7yfg8JnjE9xidjaBrkZrZcoig1oZoQRaTMMLU16CMRjnocZoUXryMBb9XPycsYt",
  "key45": "3PZUGLe3mrgzAvVwQNSfPdZ9TeU18Ut42zs4zCL8cVeipnLAobzEaCSEufgRPxhBgqAfLhm9W1bx5XBnMwf7mrWe",
  "key46": "2Ya7r26JQjNKYZD9j4W4sppKpPZGbgMtkS5tC17ekLYmUJktMXEmd8nTgKiJtrRSbYUkv5M9eSCMjLNneZs3yTiL",
  "key47": "cEsyeUzv3WsjFoNZEEFcKAL3juPVdMRNNVs3JTm692ekbsRSnYrsEqiaTwH4HTfPS6rCxAn1ygyrmeYfdGUF6cq"
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
