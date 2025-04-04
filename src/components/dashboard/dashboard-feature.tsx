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
    "2GQrtbiqTfut1LBVuK5vysn5aJfsbAwAjJTLPsVuWHga22UNgTzL5xfZ1JbXmbkFGvNmnf4eBHCUeAoXtbgTuwMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vGHmSabknVmvvAvBvoFZU69M7mWLeyeAsAVyAppddPbemYd7YndBvZGsQZmyDJ4ugkq1bpC1zbJaroJK4m6jva",
  "key1": "2NCzjscEM73wYk2rSkjVEG5NErr8LY1e8CRGpTyjyBPZx5pEpcukjNsMWWCQtwViCeausBqvniAu4DDthiWKXtW2",
  "key2": "uaotC5osHYGzNxZjouBh3ERHZgXaC635hmBDPNhujV7yupwovaqwZjktqFymAJVJboo6oUMytG81pxQDxTPgbqb",
  "key3": "3oscizk9g3NiT2Saay57ZoZbPSPzSVVJ65X3749tr6EjphX6MAqWm17SAXtwB9vFLvxPEUU2C2UMyF4F4fXSwmtk",
  "key4": "37KUoSUEXD8PMqadVRNys81hEJ1Ybvu7VsbTZntsqywwy6DbU7x2J3NY5TiLwBm8ZTDHLoQGhwFSAVDsPW7Vn2UV",
  "key5": "ox4EqzrRP8J6rtPGVwtBo8xJwzdQHKdGtPUu3taNQmeyxAKRFPEZg6chEh8fxv2LCuQKjDsLfwNGPcAxEQMJ5fN",
  "key6": "3dgcvUZuUX5kECmtKTW643D2997wiUiBwJfYZmZ8GXgM43qeDYZW1uxfHbFMvG5qZxk7DspSBaz4MmKUfYuNBJC",
  "key7": "5ZovK3e1xteQ84d4fc6BeMfLsjmBMYw17G71xRx52pSSYw7W4yRPrF7oDsjZBgcVptRh15NP7AKLniTERsV9K4mU",
  "key8": "2fGpSgtRXDfR3fVyr8XZk94PmhU6iYxXvnbsettaJGB3NPtuR22AokbcpLuMDKYEaSz3i4jdwKGjBWT1WEFQJjUY",
  "key9": "24JzNaLJoQwSRZ465SPpvgroHdajoX7BufW3LP3ZUXB5PdBkoF98tTSszvAtecppUrpipWPskU5iy6YbasBTk41J",
  "key10": "4LCwej3V4QKDfodYgSzF4YHnEAuwTGjrGNQ1kjoTRG6Aw76MrzZMT2QsxnM4TXLd5ESLP8dpiCCXppJJzN2t5KjR",
  "key11": "2TvGARWufrscQpL2iym1H7NrfT1n3iEefPSntigH263sQh1dBhTbahaH1nzQACieZHmncv1Y9PxFttsGSUGTZ8Km",
  "key12": "4vzamS4gbAMySsrc1fG4iwPZS1bMspxBwYuS6VfzSJvcU2efSL5bfS3UKgD8W6EuaNqJhRcyoSW41oGZXAzTejzZ",
  "key13": "44mrVWCEUPSJVs5zD63GMz2BDt2tW1WCPXSJU4e6BKMzCAK1G4FF3RNxXfQ6q7hCoK2awSo1VZwwRDb5v9Wkq8Lt",
  "key14": "UqyuRwama3mdQBGMLsrMTZawyLaFtCGH2vKekgCLRF18zBcHNWAnkYTaBw3H4JyTEpyRfEZ7PGZYNPmkTZRmcgc",
  "key15": "5a127vY9SxKChpwPjhFg71ViYBySwsXQpy51VhUXJ3dahKMCT3X7riCNaYAkAHcgC1kBrADzZc5yke8hJe1fGBRW",
  "key16": "4okgJ1hz6WNp43HGYotZwctJ3LJBkMPpgfSHmQWjMesXWyFSNhWrtJg7y77oSnsPLFsn2tybH6qTdFFj1nvKbhyC",
  "key17": "5LwDnQtJnZfS5D4uXHbrmhQRhtBJUvKAHaEkAVEYRDUbc78ehcezLh9RzRB6N4qBqf2hZL8PFujPeF7KgARz6m2Z",
  "key18": "32fgFxk9spFFsid59qTmNEfCVY8BxNsjHA4mTYbUUqREkbnBW7ch7KYXC25HBwhUEzxmP1bakn5JjpJBUtQD4CXG",
  "key19": "4DiELHW2xiG6GtPHesagLbhKDm2zwcr2DJr93dHzSbsXzaNwu4TtfjNG9rd29amm6cXb6d3pgap92UPc3pUv4LDg",
  "key20": "5kSvdEkZeA2vLDk1JbAtKYpUuez698HUPDY4tDpAAdcY4LsX31oGzYK5rBNgD9fkTZB9E6kpkwvDbhmuTheEhJHN",
  "key21": "3QxPtPumRQRKfo4VZyVYfXj68sUme2vrYPN69PH4viaEx2SKNpvDB9rG4G62sh5o7kBsaLzMNEzfGmVEzDYrLJzV",
  "key22": "3rFQie56Lca8k1T3NcQG2inXbdvZSMDQ9Lmy2uNJoK9VvKTXcW1n5tmT6SoYaaBwNoFk6no5pjxvqNqNxRzFBZ9h",
  "key23": "3Re1JVqoc4sRXt9cnjQhaYzcJ7Ym2dJ2mx9Q6MrDjfFr8DyHADUTV542YUk5MAPBzDrqKmFfCc2QRaguYaaCBJDs",
  "key24": "2ccBmyAe3VmUevXL5qZyzx5yum3nzanMzStdSjJmvR5jFtv2GhxoxmUdsDxXuRRYT3KDYHceEfDi6Qt87oVvJnwj",
  "key25": "3GAQF5BvUTZqpJZmuhnk3XnLkMw8ojaPPuKBd5HQFnXD5hnYx12kgZVeQMWAmmj7SccetvGRJd8VHn777u5qrkmF",
  "key26": "648jxkBZySPwsxM59BCqurXCVVzzWEf3NH967esh8X49UteV1iYGyb3NosL1gztgXtgH9SGnKUqG6gwVZQduTvkm",
  "key27": "2sxjyDjzmbFewqZVQ3v96P93ReNRuZdxFGm7JuN6PPLC6B1RJeA6XQvvHzzeiiR3Q4PhjD9HXmHJYPvvD7fh7X6B",
  "key28": "2Cj8f2TtfAztmJAYCY7mkRr8qydXRwbYQZHrKHSa3z2E35a75JnwP84xhbdN4PMBXg4yanuAF5QyCffsXa5pikz6",
  "key29": "yjbm1HTfATBVdYwNM4Qd7H8C1Psr7XUDg3DdL59m6hkponeBVq3UZp4sqJN2X16M2A2dsvDQvdeYGsU3WHEmRaf",
  "key30": "2gxsNcAfsFCiNCifTafGegzLsJXbPLe2vSDYrhUv2bNCPha1KVKibGKtw6qjkMPZEw31V8o8xueTDJKHb29oLxbz",
  "key31": "3yHa3xxNALP5QcnU3KKjcJHgtkhbjSbv5twx69fYK9sPzt34uUGNKymVVHbaBdBTJ2iyEkDzayBFChL78WNzXGPW",
  "key32": "3XA5Nex5NdCAmPGQAzemW13HKdDfq3z4so7BMKn4cH5jva8twKsNGxtTwiBvBeEGhF45f4xGZt3vvqXmHyxRWQeL",
  "key33": "5ur8HwQoUbaFXKedmV7GSByQdu4yRxwh9JfnvKmNmCa7FnT8gzg8S3nszawUQ24DbgoADhvZG4WCMnmVgqrQYZD5",
  "key34": "5MiMCMBK2wrq6v2ZjXpXXH9dYH8HAv7TvPHCs2UjTgyqYpzm1SKmBdrTUxyrNLDHKRP3W5XBvuB8ZUZF3yxhfob",
  "key35": "3VzcjNs5h46FUhHay8ZutgxMx97DoikWmS61VXTkBWYNtFZGvmboFD4gD7bvVEVewFY8SxyDiE411bPDWGUt6au5",
  "key36": "45fi2V31quyg4WUn4j6jF9yNrkCLgi3bYayQK9BzWTvLxeJsv75DAEbKLRV8qQKbVDjX72UhyHATTvXwCkW5snAM",
  "key37": "4MMm3rgXBxx4zfryTreHrJnSaZnrXsfoM8J5VwQLrixxLZbb4w6yyt4u3cWU4LZLCmwzTpuzr2JrjHt5jjHagLwr",
  "key38": "5Qsys9mKiRL76X9UL3CT4dwgzP4cPs2zUg2PKAVhSvEmfV6f8bT8D5KfS3FYscTX5pn8X6n21SAVDyqLTEUFrP1r",
  "key39": "4Dfsuh5SyyZP8yvudXPXB9YcSGJaGNLzrDRnKXmaX35oA5zViDHNnF4gQ5K4vuR1MdFEmopAf51U1Pi2j2GuLHxb",
  "key40": "3jNLkFJujBNhuH2CWjNZz5vpegTg68uVA5ar6yWCUEaLLEvbQj5hgwGTfAL2MMdDg46b9GrsHAPUUFsfYKrf4oUU",
  "key41": "Tpp3q8gvX9R5NnaSZoGGQygDK2p9Qgk568hUTr6GqiZnjMvAYyjEsCDbkh7Sdsf1mttgJr7EKDB71xh1WSYVKdC",
  "key42": "3GDqVGcivtw3be6FGLzA4Nb88QBQsRsp1vZecvdUgZkHJwR5g295ByCiK26yZyu8RtULK4FphkSh5pN5U5Sx6TuS",
  "key43": "3h8qasdaeYPCZdAcXuvq3Kh74DPddTdRkoWFLcuzbMcqykkHcf1BLUPNgySZzgbKAquM9aKA2J7MNuzp8eUayBLm",
  "key44": "62VonAdHiHAkqTP9895sEY6Rho7eSP7mHqpCDqjuxUvbU61VqvPSqoSJmBXnbN5GAAhHgLdEgFtH32W6LVZzxgV5",
  "key45": "4xUfp1SYPs4rzyb2jo6HQzkqsGE3xwPsoJ71upaxUzbadqP7F2ck1r44VSi5Jei7haZCNR7uFksNVnyfvkdiJSWR",
  "key46": "3MT7HuhivWPqr2EY9FPZu1sYmP7rsRVsQPfw9bPykEWxzbFNcDMJHeYMKib3t9PQ1TU2s338kCk38gxqqD7VzcZi"
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
