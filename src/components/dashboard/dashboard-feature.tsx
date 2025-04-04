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
    "2p67a9tsKbqqT5o52me6QZXR5wkv6oF9u7oZjaCQL2UTBZF8ocqyAFxz3TzwGpoa5k1ajtMH76U1YL5HiZMNbANu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtFCM8asNHdmtqNVwQmgf13Zwoxhb4E6692uPWATuEhqu98Ucpg2FZCDT11ESYivSCdAoP6he1qKXttPkdz5mhB",
  "key1": "42hWtZy8ygrULPrRY4CXSnJyiE5yZHW9tdfheibriErNDmksm51ei6AMMQ9GDi5Lhu47Ccd8rAaJwqXD6KCwGbGQ",
  "key2": "3y84wEGCRxa1dM8DKwFHvnaGpmyonsAML3TNypXoJ4AHBufGZbwsmCh1Ayx5ZJn4Xv1P1EkQayzYz9nvn4Ry4Dh5",
  "key3": "2mWoEd5yuC2AkAV4iPndQ1UMX4U6kwsMeJviFMRjoV4s1fK6Dg8PtBxJoCoLh5cnbr6uYLwWnDrany2PeyP9pf5m",
  "key4": "4eSVrrTybEoNJhp88C2u6SqaNcSN1xtVmYPUhYd7JjUoyJUAjdS37RHKao9dCxzFyidWX1oXDUatGAi8r3tzHzaD",
  "key5": "3onLkbxXJS4tPEgUjydB8mUfSKpiBCCiwaAXcomWzFrprJSJpapf9vb22hoPZ4ANVgwg4rKryS39pFUrkz5c4cPa",
  "key6": "2Fk9QXNK5E5gHXYi7F262qb3ejr5FUMULEvdqGQcfr2RybNknuYWhf3252f2tN41ga5T6M5piJeA46yDhY4VA2Hi",
  "key7": "5H1DBHp66h4mPQjmgTBjd8P3ZoWHLGhk3kq1nnB8bt8QCLwFHctvNSVFGkdTGCNqtk3SqQYWZnpBNJwF4oeeDcMg",
  "key8": "23d6crvkTijuPa5gTNn3HMUYqhYJGVfeFf98c3no2Jir3ELoZgWA88DATq9zZTH2grdEn8ytZJPhdXEDzx8DWzRN",
  "key9": "CJZvpukeqCHtesvNfYpAhso5C1d8DJnFT49u22rg9xeTCTyudqtJaeSaVoz8kv4L2sgoCkz14bZkbzH2ihDTmrk",
  "key10": "B3Unsujc9CudS2YuCCHmqBcKdX1E5MYuReHSG5CrjEBjKRfFnn5b56AP5KgUcNrFCHjQ7ZLnXNjpTjvWKk2bw9J",
  "key11": "4ik4mFZAksmT2sfULACH3TzVEa2vHn5mTC7Dr2AUHYkDxhhtPJaN7wYUEgwvysRKtnSK3mnX4Vk68s6m7QyKWiDx",
  "key12": "3U9KMAYn8gAqLDdeUcqrZLJRMk3S88q8FqA6hmhUjzfuXTfXTY8pvXd2iui2ejthQRv21P9SSsGhME5zMd1huD92",
  "key13": "2EtxpvJweeoeBjvUfutLMG1CnfRnMo2cy4JqB73mP8tku6y3a8G2MjVkiqLouuQzN1hAcQ1WMQmHo3GMaLy7718K",
  "key14": "5EPryovcC52mCdeKRGmfXvf7pRpXVTx2GthKQ4oJx3N5dh75sw5UQDKnzGP7eokzokojBsjFkgQSKipXGjA61G7w",
  "key15": "3JSMGxcSCnjoY68aeuuYAvw8VUtUDa26P9TPbTjWFnncyZtUTHEz55oZzGk33cNPYjeVa3enaq6yBBg2cezAcGMy",
  "key16": "4Pdy6RxfSnu52EPANRns4ZzR8x4hoSK5xk8nUaXmE8Aha7p9dzjSsN5HwUMsZcG9wHHhxmk7ZcohSMUbYSMF7thv",
  "key17": "2t8QrRLFLJdc5CSH7K2KW1oLRe1C4x3V5rxp2pD9cBp6KjKDgaE4opQv51UDVSAmdi2pqwyxfGCLRCvDjEVNxauq",
  "key18": "66TZJS6tDJ91y86DEf3pe3fNXRsk5yhBWDYQhXwuhmUfMCYiuviTTmkKRpNpBcJTA4fFNwpj9f8b6HF12X3gStJj",
  "key19": "5QqkGKJNSBnUhJuAhnwyptM9ZHBH3rZEsPtiTnANEps5GMV5eyttb3uHSa9u5AK793GxX4CqhWyttpsfeUfBpmy6",
  "key20": "35Qcz9fqWr2L3rcBr84NgmpLTyNZCKreavxJXDxmxKJZCu7p9Eu2gCUFsBnXDDk1SPCmtvhoGv2TuWBk3Yeoipvk",
  "key21": "5wxj2EB3QrLFrpoaraCAmytnrRLjx3YbPWyQETbkX1Xs9cBbW2epAB81YorqoQWEokSaBKuzGq8MDTbMdrbygCor",
  "key22": "3Qu3B4y5kX7rcVd1RpB8mrDJZqvJn4NijWhCydW1GTkKDduA3nKXtqCRyURCZUTLJ4ZmiAeueA2T4wvxRyreicfH",
  "key23": "4jpoR6p958WCtBRhayvvWp1u62nyVjuuLEuVvPWPd1NBr4LZUeExavq7grMa2s6a5pkSJxJpwWDc9wmWRBT8X74z",
  "key24": "2Znwd8c94APDHwYFoKAfRb2pLukue6zJ4rQJ58zbBqoCMgpAXVwwM3qoqtzmvqZssXmh6gCatMmMo1AnGN4Uz5cH",
  "key25": "4gZKf9kgY1W2b5Nxu1JXBMG7hLwh4pnoj8cWLTbPDfWBtm9bGXmQyaqE6ofAk7WcyLNXXuLii1wK7sGZhRJvYa82",
  "key26": "2McnN8g9paKUK6rf7vakh5NiNCd7w714KsUTZCmGVh6UGtktkuBpMxpy7HfmWbhhV5xVG5t5AmEavu1WLMv1UcVg",
  "key27": "28bc85r2bAiFMNkgUnSX4g9RousbLjCU4xeTosrdmazJNKAPuMFxMJwnrCgtafXcpTqkRZZPR3uVdQ8nGYs27tTL",
  "key28": "23NHxNsLiktU9YzWjNJZbsr6DteHyoGR9huJC5qTRjaxU8XtpDzgyGjXA4t8aiJU4BJs1maxP8h16vuR4FJKfYrC",
  "key29": "2hLFVrCZTSbf5tAyzPPqpEXJFxAmHU5aNDMY5wcuXh3d8XnMpxbZC273ziWVfhdFYCzMqeL8cZGZhTxsNbTCz9qB",
  "key30": "2Lz7ZHdBeHVm5vQ1rf9jARBDWLYs87kVhi84JMDYNrtL4eDnm7tnWMkAwNMQzCY4bEuPRXUv57CC7dUK6dvWjiCT",
  "key31": "3z4ivi5kferipZH9sfnECi8FaFM8eUrFfio4PiKsrZBuTNotpEGLtuBaLv5jxRzpNE7cuPcdjAZnsMZp8MkPom3U",
  "key32": "5J4FfR1xTWpsRWqBziVNPu8VNpRyJpJZC9bUTg2J4gtZ4TodFy2XY4fLAacdduPtcUxYrQH5T9tNjoacUejQqJp2",
  "key33": "66UCxkkZBsvYGNmRT8S2zRPgxw8WCK67vpVrzuLHZvtiP338ZHBPCgxJRVMF6ge3VvpRtjqwYXRTjpHVn7LpZPVA",
  "key34": "3xBb5XpeYpmbkb3bJVoVTArjFNff9wHZN1vgqJomSnRvceNqD3Khf6P6m9Hu7gQNxeLJCkAgZpuk66iCx1NQmzqL",
  "key35": "3hBgd5P8NE5Qist5EHrfUamNgJcJTtDgG92nT5csXtj83VWQ1d2AYoYnSYcoFZv5Yw9vhyA1AZXDJSuKs252s1Gz",
  "key36": "abEncLXJTNS7pBrUZPR2qQ79faZiyPVr5GL6cRR5h6B9jbdCLaQr2Wt2LdjzJocAPvUs8qoEB4SdwaY51Sd6KxG",
  "key37": "3LkaicJFjn7dB6ZGMW2to8iHEc5GuweYYrcjcWTQsNLk8QFyrqYjPmbiBSvPzNhmQLb9BM8b3cZUhABSpigrAq3a",
  "key38": "3VrsDcEXGrL7q1cpWMf3vVhdpgSBe9cmgnXjMGMySsp5BHeEWUuhhH1MdjbtegsQi4p9vH875gNfcA9ezfXx8e6T",
  "key39": "8Y9MjBe8GuEkBKDaFhA8CXsdfRLHiH5imJAQETaK9nKmSQu67qjptKXyr7CuE2XeAQbyRFWdUzjfg2h6esadHao",
  "key40": "3etGGoWoT9g2cST8YwdNZVYRRmoj5qnueoRsRFMKXfNN1MpayrLXVqNkNd5xTmFjZTsdqY8vh5VS7HwP82DaiFkT",
  "key41": "25oSM5zhQCYQWHnxRMUoJESpfat1ehPi6MJyYxMSDiHqZ4MYw2GmuAjjnf52uLDU2bRtvA3yp6EgBrveESxhEttp",
  "key42": "2zZXTmXQ8oHLgpe7wW6XLGLWfYe4GE84pVLCP3YYzLGAavJFVXFUFMGy8JGE2kqgUmoGBLAo4C1kwwg8W3Qnk6D5",
  "key43": "3jihctqPpkAkz3kPhiWJX65p1jpydEAF2ow5J9ioZY8jHkgsGDQKUqiCSahcSVzvKQeQE321YLPhJJJv4eZStcuL",
  "key44": "sA4jtHR3RaL6exRverkWH8bhZnBXSgHKHir28pUmJUpVL8kNFJ3D7Pm2GNSocXt5srePQvgnxVDKRuuF6Vy2i8S"
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
