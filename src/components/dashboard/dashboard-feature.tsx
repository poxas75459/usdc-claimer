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
    "3p2DrvoXGiJoMXrCTgZHEqJj5u3zQE3pUgKyySQaQmP5KydRSEKMxcQfhwK9pE3aNdctfETc2LsP7N2gvczVqi1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FaBv3JsbSUfLVM3G5sGNz9czz3mKYqRiwUA2np3BpwnRYg3yeKxAFLx9HGjpLx7CYgkk8M2S7ktAc4SNTkthLj3",
  "key1": "MfPPjPKo7xjwk3WBFirTZU9qSsNYe1t7Fac2V4CTFzDJb5NDoHiwJpyrvEFfT1XjhqDiSUeLnxhZVevfbSgmgCm",
  "key2": "2BFgdcnURPPmTeGyDKXN5Gdh5vWuvGBJ4Zby9xXGQJK3B7UW6UzSomr61X2Sh9kZxGVxuSj5oucUABPzCdJZDK1Q",
  "key3": "3VHt1Ts7RkSf77V8MQYY8TSZLkWLV9krPfgzxPQmQWFaZB3SeahxiKRBxL28EKEpfGT8nJZU7Xa5CTwWDoYx1YcX",
  "key4": "2bb4zavNqUh8viBmGZowH27gKKs1vwUoqp8ScCTNta2xyt2asDnSAQkKdSj4zLUKwFaqiMnPLKdsjWbbanX2c6ci",
  "key5": "iBe6LjXAxH6hkXdJHP37YsbgKnqKzTLFCvui7fCWQ5NQGsAGvXKnLa2XdzivyhnAeqFqv5A1dtre9JugEwrgTvh",
  "key6": "2wZ4D3PnjNoVHWARSo4hn13YmcSp8owq9tX7dAJJ5fWKaVZqAGs4FMiHxV7JvTtV1m5xvXUjmeXcDCiCwD4D9JhV",
  "key7": "4HTpzEWEYLggmpDFHrpVuz19p1pD9NnGh9KAS8JFVpMg1CEB1yuWRrgUdMZk3VuJFQCicGay2Kzwa9wFovB5BByZ",
  "key8": "5ETkCcPRWnysqmiytdvLdgenjiomeLhTnYn4mkuvUGfirKYztG6D1tEVJZvCxeC9GCzWz6MNofGXsGixNMQwEr1c",
  "key9": "4vdn1ffJEWjK2oVbsUu4di9XGamZdwrzawb6DSVnM4V92ovK2agD5ZcbMR9wVWVZXxPFKpjDekBNctcAk8XvVCFh",
  "key10": "5dKM7wPdmBpW95v21D16NmQjMYvNKwJgrcsBiQ8EHLjoPyGaspJCCPePoYh3XnAK5tJPQK7uXQw4QLgA93wNvjXb",
  "key11": "WExzsGo2UFPBkyRNvUY2bytmeY8LwUjjoNjTbVAwy1jdytUoQaoakyCwvYg1MvE7CCc6Rg6e3dSZsqCCqp6fCn4",
  "key12": "4nTcnWDMKv7JpUYwxrhqoZ7Xs3pVssZfcXHvwzeHX6BXFMT7pcuvtNLhT9R4SueHmNbutcucgtA5kosq3UdV8DzM",
  "key13": "5XRmn4jvnmxszwAYEB5Jbj5MarEkC5R5UnHedhpBBvEuY88EEfMXr5miVSnEMSv9RUPZHp9A3v5tj5p481DerkZg",
  "key14": "279d98DqAJbTqgkyLpqhyKarEwK5fSTMryKvmxQ7bVYvKXM2akcZJP1tjC1ojKdKWGhkJYU7EeUGZVa6KVXHG7Dq",
  "key15": "2KsvfSF6BPgFZzQRDpe3qCq8TP4GwBSht55szrgDHZ3sN5o6NyENbuBVkE6XH5YC78UmR5eFr9WQt4FhUaM9fXNh",
  "key16": "4mBXigUY86TEMrGo2ZNXmV62tVQdedzjeKCmdnqPN1D347iYKnM3NCapHhStEjLJqXPQGL299bUzSWFqdcUrNzK3",
  "key17": "2QVTgAGGFppMPm8h8XEwqTgvLYCFXVaHGYSrvg1p6yv7gM89FL1t6773BnCd17JjQubgnmw3y72h3DFc614LfP9M",
  "key18": "56suNxgqKEgMDMBaQjDiiGk1b9MdC1wfV4gKpA7Ggfdp1vW4KSfkmHmFLE7puuYGBd8jNYjJYnihQtq5eeHjUCcg",
  "key19": "PmPJuCEumHFSg6mAEomCoVUiDQoN8ZYDHHky94XfSiScufEafeQmphWFWorEuS3inj6xDuhPooif9pX9SFpR76i",
  "key20": "4FaEuQus1prbSy6S9gRDRWQzzzFSY29qPsjaHmcsLhSvv6xEFBAQGF1zQmfeCqmU4o3b8S2PYg52Zo3rH6dBn1pY",
  "key21": "4aGPFmjxBRsXM15YDGEPGAQYf5mQogMRE5UXBJKqBSMm3oVw8C2tLPSNdTM4Y3fmSkudSox6R3gvFD77qoUTjfp1",
  "key22": "28YRz1D9PHiurd55DFsfJ3kq2iT71KxVThGkDBqC7bGHRARd4nqpM8is8MqUtBmHBHn9qSirgqQYvFkBVcEcUU8k",
  "key23": "3jFZn3z5Ju5ivfSHefD6haEa2v3DG4JeeeXFwA4pDmFFY4sjF1E4hshnAQ54tTmPmmu2oZW42M7MjzJTdNgAWZ3R",
  "key24": "2yX8vz7SjGngKLSMCAgG7eqoypBqdh2KQhTXHFrxEnAuAFWALaLHvHM8PWPAsJ3DyofnCxxwgnqDWtYJpC3rRhdb",
  "key25": "ejuEihpyoAYkHuh6AwgmTWVjfYAjDGp88Cg85isWcYSzUvVF6GucxseATzwxYmB6RDAXDPrMoaT1b4vxALUW4rH",
  "key26": "8dTjCi3QRpSqaDFN6u64Rut9TW1TwsBbRgXoPtj9vtUg289ukrUSEQPACmbcmQ7WY53nMhfvzPAA398swpoTNVm",
  "key27": "BBZdNk5svSZuqozq9nN4ZPHES9VK1WSyrwVCsKNjndZhzVQzLCrafHirzU6EE8WEQZTt1Bx1wNNKJPy7zW9zyx2",
  "key28": "2aU9YsxzNFLE2qvyv4hyFR8yNzaoaXESJCg9VHvwGtq8DH5JTHPMpJCNdBNyz4WbweSUYdUELEJ1o5wv7sGqZC5N",
  "key29": "5yKt714GPcTnDeF9H9T1hcGXHnNjuxNp34PfAiE5wtedBG6WjCmuvKePo4y5yBqg7goMnNaakzj3WJ5yDE3mnGLq",
  "key30": "554afTJfujVjzZ45QhRdcyaww1eEB1ZXDX8uwJEyKJ1JV5dcaZmmyxKm6PQUwyYC3NVh4KSREWjE7fEivqipzUYE",
  "key31": "2rnjhHc1PypxMBCtDyE7meWcT9HSUYpp3FDf3rfw73NbmJARKY5KpzQChmG4AvpTBcNFeVhLpF8sXJfhfwnsSLwe",
  "key32": "5BgdhhiGLjsjkmuinLzjJrAH5JWVT77jR6SXk5rmDZw3C98zJZyWsad9AhRzutnwTZyn3j94v8ULsTVhR1PdugU",
  "key33": "2wQFhh8nUZnGugQsJcsjPqmPcPJPc6vx1wSq3cy7ytPPDaAzARbjkBGEabSJF3bDhje5S6GEdDCjcwijhnnk2dT9",
  "key34": "UqAHf8JHFB2vNihYQuF2qWyprSUe6MCZwb1wVHBtF9Ent7JbnsyLasxJf5WiBcLCY6dT4bohENCuX2v4eM6MraZ",
  "key35": "pc8Cak912jRzAWrsrxi69hG4Q5z9sBvjPYoVdWYfeEwCn3Lr2P1ZSkx9b31R44yMrdLyoN64i2eGGhP68TbVHR9",
  "key36": "NvVeSMfoAWhBFRVmx5my57te7xjPfWwnBtdox1Mb7cPssGbWbXbMQYBNpaVbpx2SiqbjbLPMyftvMuMR6diEdyC",
  "key37": "pYUzeuUyBBuXWzGqC5gpC23Ace87niaYHqyzbPEd8SfUwjrWecTPoahKVcYSEZobP3oDYziqhtoT1r7QL1HinuB",
  "key38": "568AYjw7SaxEcT634cKViCJs3sBRUoE1j3xGd9KMvdoiXA26fYfcr49HEoWQayqUXLi1qEPg5fQWLwfoxcrmfisa",
  "key39": "F2aHoUmLyf4ZQrkV6vB1jEMxdi1HAvkawXbxDZoAUpS4NUH8yok7WDfdBcyrvuZM7fU71DGZYioaEjMLne7HMtE",
  "key40": "275JY22Rx1LDFjJ15rbJUexDerd77QPxZdGF9sGZM8B9exWyD7jgBrGgNQTyFAdakHdUtYwgeReqocQThu9XkSfY",
  "key41": "2ebjPhLpuE9mvczDuX9kyzVtBuFActrc3aiuA9xU7qfjJgnhrNsrUQABHUBByj3LM3icYT38xTW4PTBTczWFr1qE",
  "key42": "5Qixa59kGt38TUQuSmNrGnVgmCyKaXuh39r4yEJSkAKpQXtkwCW1D8CEFE9p5RsqVUFoFQY1sQUhFRC8sVg4McKJ",
  "key43": "gRpxrx9vUeK1rGg2RfRwSX7KoeLsQSqkSiGoHQNbuTcM5ijSXhPiDHbCjSJUn7V94qQi526zuCr8hKMBw2QqUQS",
  "key44": "38je9tghak3Ay16e5V7a8i7rc31M3GtEtnpw4nBr9fjoizBz8ej17wPNwmwTCJ96Vy5BgiViqU8WTtpb9xBpCGcd",
  "key45": "3dwBETJcdqVsiWADxHNUpeW1NCp1LsKGCs8CMpeLY5SXGZDg5sTmfXXCKwCQNGfh96esutK7TH5S3vkWgLFnN9jw",
  "key46": "ZY1TRa5z4vLDZ1yFriTG8PzvM2hgCtZXzRSWqwohr7mApxudbZcbxqYm8AdZaqvfGXJ8FwoMrPzHe8owTGWLeFo",
  "key47": "yWjwcySXuv4sUYM1Zvfsi9LkWmfxLRtXUhZU8iBJzE15i9CTLnWZuVbo2EkDGVUCnLSJs1po9T9xYf5meybwQCj",
  "key48": "32VTH38ooMMQ2vAXVFK4EDG5SpZoAzHxUa64crM5h8CrgYmGkaJ3EbfCS6woUfiYEGR3S7eHxytmc36gM56ADcvC",
  "key49": "3CzaXP2YXAeCqf7Ez9xYwHgV8RpLiFtG6i7tPmHZSTfSmNtsM4kYtmPQWCUUyaM2Uxg4ta4rjbn7Heq7PPcTW7a8"
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
