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
    "56t2QYKYGAMGLtbfGXN2NCQ6YrtVgtb8SECn38yTRWJofPrXMGDdkr1xzbBjjTtHqRDVNuQkKLKouAuxMURx2Zia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMwenYzJnUidVwHvZGHdpV2fh2Zkdg512y2kYDWoZQ97C9fE1Kc4tFQ14TrAEnFy9ovc8SCJCs1ZXJVJR9nF7nd",
  "key1": "3agqoYR2KV7DzQs7qA7GYGtDiKKiRyeCoF74oZwrJxtSG2uuN3UARqjtgPTgdpNn41DRCaYivFvXec5gJgrZszT3",
  "key2": "42cNDMZ3FQQuwHq9vt3GtGKH6zwzEYQbxvQ9oRThNmjepPyVjm2myC1zEzuWaepnSWLps5iArAx2MNBd3YFNSbUo",
  "key3": "5HM8Z7g8fjoHjYG5Uddknyvs5h1ZYPfZ7KB8xM6kw9ZxCgEE9G9zt9zmZ96sk2cWWeFUUwNx2pMQ4rFgFSALCAS9",
  "key4": "3hfCxykh6EuKAKYBR9JwdmvV4RiAA7w66fEHxd49BL47B5pZ9YF6LrFV6zdfV4pSqCUadsL7MFN73Yg4e5PbTEtZ",
  "key5": "4PXn676eVPE1GrZ9odHYrkgJqHu23m5bMuiAh6Q7RbECouQiKTuVPJM8uxKsBPb2cpogJdnbppAKzrgxUhbRBxyt",
  "key6": "zYKtY9vvkhvK3izQ5TdKaDmdg9W4tXK4sDCj9duK4DjgR6GMLrpk9QbaGHj9VSwCUd2S56rPgxbQBqCx7sAebPb",
  "key7": "5fiAKz86CBGS6jVJamZCJwZCU9asUDTGSMapsVApk3bHDQjgaNUS8tQaPvz4WTkRYTU9zJyge2uNRtBt2d6CxwSD",
  "key8": "5HFVtR5644pdD6KeUCbJvfZe16sCU4WTeVo8jEUTzMLwq22a11fBeoz1ksY7MLAPoqZjjSVfkc4ahrnnrLpUSi8j",
  "key9": "5EZXTU2FTyG5zPpWFxt2L1939aTPaLnniPrZC11ixPbRRUTRkWGGBeUgwQAfTQB3wWqDTPrWDfrnt2JxduuE8BDJ",
  "key10": "HBxKaXyiAd61U6j2kkWJrKozNgrMGUonDqkL7SACqcCDRttZW2BWw6HtXxGBuHJZgeNdzQgv6ZeoD35QYwDkbjv",
  "key11": "4WDqceVQ5WKyYjzBaAyAWyTWd4KQLtk3bzS2JHJ9oTvX1Aen5zSvYavZ8PJNkKSvYpesouV3VF7YpGChZ37GmEDy",
  "key12": "NcFz6hs2aWQ5w6KUYXYGv5NctDMkzY2Ln9b9che172oyRRnKjYdM1bhUXRdqq4rS1LtwEwMsmn5jexKUsEvRWDC",
  "key13": "5TF8F9KTqXveoXxkjkzGnhjpcE7kz7AuzDeDWMt45mJ5h6FhXfPaZD2pV3nsmZsbvvkwvY192H4toXHBGBrocSHz",
  "key14": "5BQJtaMkaPuEHrQx3E6xNUG29AwiZX56hDf5Tp3ZxXVD7vNjQZesuufuWGuYr3meuUZbedrhj5wsWeP7mSrxHta6",
  "key15": "3gTLUFWHdCHRp6k7zPc5pdhYC15DXcdQ7i6RS8da7RCoXMnF9nDYYf2TbFpQUbLUTd5cMXU4iKbZFY7tEh8Uibwa",
  "key16": "msVGbeYZCKk2WEZ8aFZn8Bec2LgHgdho8tQrDALn4B5Kh7tT5U8Soez7p3zw6DmwL8msSEbrVSEeWSXozYAZTcS",
  "key17": "t1h5EczjL6aRS35uK43q2urJKUBmdjGLfCLNrH8VKkAbtaxMFWfixdgi7fZQPoBmw19KNv8cMfoqAVWXg7gDwkA",
  "key18": "3PuvXkyJDELzCTp9G1QvCKkvQJLfYuUuAKMoB3UTCZBfYSaHL891TeTq9aZj4N2LftN5UBzkcaxGhBGwUVo7z7rX",
  "key19": "5k6RuVYpvmA4G6LNN4FUiJxXE8YHbSkZCGDWfATRps962r1Ma88fxz4h1R9pSny4e4W9odCTRoGiWHA9jDVe4qLX",
  "key20": "5r7mz64zQPLJrtZgLnaLig1b4M6R5hWFaRDyfzTgHbTBiMG5fD8GDoiQCMxmBynn3kYE6LWWRWSFBNAPyWfBs55s",
  "key21": "5o3dLoUrYEcLqMyZoX89ykh2AANFKRPixfNFC4TstAQkkXw7jjWUxAq2AZ2boGMcgYVGeEdyH9wgDREhChkBcC7T",
  "key22": "5wfVgKEvgdp5LYWMHYyssJNnE4Y63M4zArPQhFkTENmAy5NNVM95fcncshEvzMyjXVbdjjXhKGzswKtcC78HJ1vK",
  "key23": "pYCWRnupECbg726sJ4DHgwavVYh7jb6ETMcRhUgCStupfLqwvxbcP49KJVPbKcFm9foYmM19rtSPNPwd89VQZMm",
  "key24": "3wMoLLAt7hahfrCn1CxzBiYisJ58GAqBFdKSQiBt9bDpa2vJCqXyXeL7SUqacYhhCqBfHb8Vqw7xpySGcfmTjj4u",
  "key25": "5p3Rf6iDVpgH9Ksgjjn74CNMurfJ75r6t1WvjLMi6hnNRwYnRnWXT6g8XiLWzN12JNTGgi6KZmCQ7j1w15dSUJFn",
  "key26": "XixsrSh9xYbmhPMJk75kSZ2c6Jd9risYWoBWNpxTWUck265zzojBhXR5ff11THBR7X1nVAAVhweKAUFNT1WdgoU",
  "key27": "4s3MAj3TKKhMiCmJRqTRnMqS4vQba7Vx5LgnQKh1hQgQ7c63yzFw879L7K5HnLFpVySwS89jXiLenXjTiyaqZTYY",
  "key28": "61eieKjyAjFKMyDgdsja2i6c9UVApkGKPuyTdXL2RG2h28FtT9cjKQyrftPYERs2hRTfS2HW6TdukZNo5iMm4Twt",
  "key29": "3VNdnWkFKBbJjSx635nny4TytztVpdjgduz8RGkMQd8EaYtXF5Xhu5EXZwHLispMuXv4xPYAn46C5KQbX3vkgRy8",
  "key30": "423cXtjeUcCZRLmjvoXoYuY3CBSuf47NiGRRQ6rc3HQN6L2mJfznx9QtXWWJwxjizefpjniehHo7HEpz7XH4UYnB",
  "key31": "2r9aH8xXrGeR1ftW6j4XVnMqeeakVqkyjSyus9ozqAEwGFf1cbDPD9UBMwLyH55ftB6dkN3mnYQ7ofm784PnLByM",
  "key32": "5EYf87o4MR5etXiXUphr3q8VPgA2wGXu2LpWEiVcWUpZKCGGLw6XosCzmbs4MqiPrcAq63kg8pVEQfZiPuvTuYS1"
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
