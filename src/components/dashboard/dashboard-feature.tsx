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
    "1JD6MA3Y6CSV2PVbuWy5Lqne9LTuhZZQqJR2eLCxZsWmFTR5hfeW11p2FVwdAP5q8F4h8ckSgKpfmJ18c6aM1tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQDy1hQzgKnDteQZm615P5KWAZVqBiGN4zvJD97jGjwuPbGBKKy6EDaFufV8PK9uSuKXwbXhqiaFx1wEdF7YFFT",
  "key1": "21g6rfCYWMDz6ScCFijdZeJswSC5KLkA27X9F8tsKcymuEvDQd6RcYApwwn6FEtmQQQeYc1eX1zH7acsW4NLnSPN",
  "key2": "4BLyiyEVYeG1t4kmNRme7iP39nqSjfep3EejbHpfnz8oKmgSgdqETuEKsxHWH9yFGfeLdofAWXcCr9K4hy7kqzu5",
  "key3": "jx5szzf8FkkZsxmGhKa44dqc5swRKxEMBJeWfmz4CFg7zBrEki5rkCDcSx3HmDS1wj6jFJ1upWNnKyRVWRfm37C",
  "key4": "4qx8WYsKSKsqVGetkvPe5LKb47efV1PagVsnHtNoHEnevbeLeaADCybgYzuUsEYfPcZ4HjCHxsbp5hqfHrXYenxy",
  "key5": "2CErmUcKfUbuQqtPUGvTFEqyhV9Rz7wkpzmMK2rc3WJKuhVa8auiKtd5rA8yM75H9kqs5YqDkrY7v5ux981uMHtk",
  "key6": "66XGC2pKuotCboV79UuZ45fdoHhK9oCrJ7CKCqTw2mUKrtoZhxMxjisdmEtQ12tEEhseJTNKU6iMkgiBhA1X7Atz",
  "key7": "327BFnLZF8RvezDo9L5xsxwuYPu4SiRB25PyRXbRVup7aFhP6cgrwZ9WtQcGzLrWwjudKgUhRutq4DPqnSBwmpmC",
  "key8": "GAB42S4oDxuqACVGRBXvCPVUnLGEAKmCDaMPuAUaAx8fo496vzdxQjZ9wQ6duhpVxWLdGaY2Dg5EB84vgLQKjoo",
  "key9": "2u7V3bLtKZpHznCBMEoYW3dxSvH84HrNMdDN23cCA2NasKQd7nC68FRYFqbrPF4WGwWWRtgUM2s8dHjA8vdmib6k",
  "key10": "3QFQVQ8BxPpNDK86175KrAm1gSxKZXTUAvAYXmGWs1ckB2agPTDJBKtgwmsBzr3LfR7ZfC7UigtPXfXtQNoVYvkJ",
  "key11": "4WtWddMCcxqvUjL1Rrt8sRSRmMqLvjR229hxszt1T2wy5x5ff64f3zwi9qpmgEGxTrc8RbXzA9HXzNVVsyyPqT8u",
  "key12": "549ZT7N7H3y1qmH6i4kW9BcVn4NF27ZMX33RXNLjfWnMPfGSaiJZpCjpRLCbEfN6gwrQR5zL9TrYUSBfECFV4rVD",
  "key13": "A6LMceXZRvxfYSS39ceNBAhZZgFVpYBUMYgxV7EXZFk8skze4mzGwsCux85K6LLWEN6VNnALexaSXkWxjqzvNED",
  "key14": "5h2b49ceASvqJaex2zkvKK14nnNLs8v979xzoimkLVd61RjzjFVzAeisRvPzMcVy8bmc4DZtgXaKptkgxNLN19Pi",
  "key15": "325gmQnMr8sw56umZ8b4Ru1m3rzJjpAph34BkmZYbVhXsyCZPCBeXTtGeedQWMQWnBFTw52c9cBKVBRhrvmWyHqd",
  "key16": "287B56ekTP4Se5Ufp8TkCY7wYoxp1zxwNmAm8Fwy3ihTmFsRPspqZW2RXJ4Drqu4Sz54mZPCvBQQnMVEKd4wjVYv",
  "key17": "3RgcefWzGZFWmZqViKJXJ49qn4oW3zs3TkH16zrgo5PMLzVxgV87uKKAQ3tZpW4rVRyBmhD7tkH37c2i4e1Sq7N2",
  "key18": "Kz72HKTY7cCGTc78HWxh7WxPY5VrBoPmisegHnpwApEedUKdfeHEqQyz5puLhqsFkJ7zBmLpK42FB2Uip8UJuKi",
  "key19": "5bXP4twxh7EcRr3zNv2NDpLEaX7AbQEdq8VE5DKusHYca5LjjxisS7fz87fstqwq9ns6sZNFHWGoqFobA8BMioaN",
  "key20": "3DQHJbieHBGQnKX3nbbvTGakRhSwjkxTPUgQ9D6x24zB3naQqDe4h3cJiSaapTZXnutNVrqk71KNQEY4jsqwhSkb",
  "key21": "5NeVPY9viPb4t7sFhUYeW6cR2X1ubpvuhyThFyGLqXTJEn1QkCFFQeZaXZSvgEfHALjAStRJLT4GevJ9iJny3BGm",
  "key22": "2hJ7GwsktxzZs6sJUfJqm6gPhUYso5wrhwdYxXpEK3Wxdfu3CNbwUEMrGVEYHmub12gYFZgckJxM6JiZAQkSAfXj",
  "key23": "3NGrguxuyyHx5BS2GTtEr2FrKA3q7E54X87QSyztenWBXGDXHWsFSWF8BrvoMGuMLZiXZ4C61y21NK65eYGr6Prp",
  "key24": "2YUf1mRbangUeba3xVLL9b6wJzFZCXXS8cQPByqUiqPRX7YrRCTukjAuYgY5P66X71Y8pjafjkDb2sCqhL8P2K6a",
  "key25": "4TWPPXkgHvz63WF7np1BEUfufCc57v7khuD1HKEB5NzBBxfvb2Sh42j944xitTnhuzviKQBDJ1fjeb74fQajtqQV",
  "key26": "gfHAPhkmiK5n37KJUW9m1trXkxrieE6doZEWALCvBxayfKvVDjLdLuEKsD13Vuq1Lw3DSthP1hM9gz8vbh7rB9N",
  "key27": "5mjLyo7RiSHuXk1uoaUSRBETz9riYag9Sq4wbStb6TqcEASxBjpP4KdBBCNSzhuDBWW84NNyJsX9sDPpaGEBk3uk",
  "key28": "59mPSpC2zi9VX2YvYNULa13Ac3KuqWnpVgm4gQrgbSVRzbkMYTLDdRshJH8yoqrvHLQMcR3XgCKqWnxpeSu7nBe6",
  "key29": "5R1QjmWG3sdsfXcENNW35agWVCgzhjMnjWt2oXBnHCTiP1eTKb779fYeLP9fyVeYZt2h5U9sAzcEPoF7NLpLbuTZ",
  "key30": "3PdS2GH7FcrTK1vstwSSdmVkAzUYYbuCW63MxKLMGj12dMx5p5z77gwe4tDKdfVHBUa2a2eG89rQQVLRfJG8CZ5f",
  "key31": "2p85Cd2kUWM6uovpSzyXvqEz3DqsYmWSGEmCf4khqzVcG5jDL8QqZ4x1WUz2d18gsdUQeb9BiRgTXnc5bYW5Y215",
  "key32": "3zFCKYiqrQCGnPc2bWSJNhgHDZ2XGaJkK2XKVyUecyz7hMedtDR3jdZUV2W5j8S4KiPuZcjdqgS8KziERsBsM7Y6",
  "key33": "5x1Zvqew1R6Yf8LYc5xn9H4bX7awZhJ5boL5hRApx5DB1CknDHFtAMt9tsbKpfixTQtShJGLbug4rSFgzwtoodAE",
  "key34": "3WZSULrqEEihBGpWriY4ENb74XXKePfFyNdATJ8VEKp3p1U8bCgFP3vtsj5sU5Xhgeq4QmNkbDDJQHvyxrB99NZs",
  "key35": "JUGXqwun8XmXx5uFa1BRSW8wgppimNxrMsQh7cdmC1MpTyoxmdPC8Dm8iPxcv7A8UNygYiGEzXqUpTeFcnp3gfH",
  "key36": "2iCWb1Wo4nyL76ej4PpGnd7t38R5toSu3CbrjY23PoytuHkBQqFCHuD4QCbLBhEJwdonLjVk2hXKsfTaeu4f5yUr",
  "key37": "3Bxsn6pPoZZxVEmsJDwrvtfkkTKjodnurMJsWfUT3jEYLyzcZpfffFCq7UaDxV61MSU4jAUT2uE9gn5saswidREt",
  "key38": "WcrqbohFYvydiVvfPsHybboF7LnjmrLosWRsoaozZL6hSWbSMtKHVSHjqj1KXazyFq84hF3o1prhXQiVBDMMZeQ",
  "key39": "27fqAqJ4M72AdjmhsViWg1sipKzLMypiFycPva2uPzVJdAYTDzYDRPa7dKkqBcy9wEuLV7bK4XcrVmQrJnASE2kU",
  "key40": "uxsyU2TXYtUidDXH28oZfdgZHoEbP3VjX36gCZ8bB4Xzdv9scSp6VubUMSmVdicceYxXbCAj6atQQY9ZLF7pV6v",
  "key41": "3HQxpmd8sffHEV3vBp1bHtjXj9xi2yVfDCjWBemxFxC2wsPmAYrsdVWjGJ9HNst6afrbDqRv5ZcNJiv7ULJeGjQj"
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
