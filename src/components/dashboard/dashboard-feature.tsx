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
    "2PQDnLPbPY84kcFaingdHVyTCFjbodDT33ypqAXibT5ZeFz3B37pcFmf3BDQmJ427HCCL1zpRC8qcJbnveNKhCAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5pAQuvQd8AXPBNYteEtVbGTE77hyLMWBJVpYwnStXo2tXLwjdcgJqbMdgvQQHmz8DqT1kezBT5X7uRgWmJSDrc",
  "key1": "2zLbLxSdjzxKnEXAjdn9pW1wHM64R1GeDhKKcDsqa13fYm5S3FCu8pJyDZGv3oTSx3ExS9ennLmTkGxKCTTeFDGE",
  "key2": "2teegBxu1mFY1p8gWWTwwvw63ADGfV9PtzdJ5iqcHTUxka9hiJm93qdyuQaTYFc25f1C73NG8Udg7MCwhKwP74hy",
  "key3": "SbCFis6L6eBRDvUm89aE5SXA5u8twbgAe2ufJuBGqZTM7G8tMjqaardRZcijHJCaq1KegyMNXeDHLnmrXr5SBeN",
  "key4": "4Uucs34uvaBMovcmJfQ2opgYHaNakW4FUAXUM4DMj1xzm8tAoYnFqg4ZAuHCkcJ3gL3gss9jbppmBQLfWXses4j2",
  "key5": "5LCCXMsNYme79ZpVZ7wUxMBK93WtxnAHwLjPdRgjdmjkUM42hQ28EaRT9jo5adxSeyHdCHA6e5iUHMggECZYHms8",
  "key6": "2hf3GUDNoE75Qfb48DD84vxAGS149vZyEJC1xTRXSEWmP22GFPkaUzPH2Jx77JkwnqateJRUt3hG74Ff9Sr9LKZw",
  "key7": "5k5zUeWNhVE9FUezXAZPMAPh7yDSANf7K1LRcjtC9u586qyC36Uwk2phn6gmUfiNYrdrbNzmVAR31xPA6Lqht8rm",
  "key8": "Z23Y9FLc8uXDzmv12Qsragk19TGiRRLPkGr3GbSVq68bTLa1pRgtyAo17mg2ioAbqWf4812WtxzKRaknzo4wf9i",
  "key9": "2wQVcJtz8y3ShTQb4Yq3GJiHo7huQCcdLw14yjwaYG2ujFeBWUgD1yubcTUf8kTZKf31EiUH28yFk6gsVP9YZMTQ",
  "key10": "5eoYFoDGDMeiBC2BURjGMAJJJ76Di3dNWGVAPvhwJQxs33drS8N7WXR32FokNgtRejo5vCW4T37jabBMQRrKZuLu",
  "key11": "2ZXrjc2JHR3vpeVd33jruy2UYD5h7cGLAKGW2TmREZt6VTk9yp1d7FtLnebmKf4rJih2KosoHvVVrjpioFssE7Dm",
  "key12": "3y5fv9WRCdaeraXUNVx1x4JUbumkpxx7VQB6NjAdGc7ZdLyF1cXswqwjzJru9X6M5p287PkwVQsXy97vTTbNMDHC",
  "key13": "8Vo43QpMjzq1htgB5ZrwdpGo68R7FSU1C4bpBncG6MWcEytVvthuRsKWniqyh7bWJoGosBqMWnkHBd65hLS1ebM",
  "key14": "21EdaeEXVHbPrNWSUEdV7v4MANvxrt13zaJxmCJt3yiGx2GCvZvGnTykMzfH7A3kh8s1TrGVwFUHXoY833qWEwKt",
  "key15": "fcu9DUjGhJBff85B87vG14EZiKPpA4hGABYKiVFAhcj6P4KcFPNh8228EyPhVgD8xHxSpCwCBmJ5S2NjS9Zt8E8",
  "key16": "2FuocGFjVqVUdWvudKZPHPJHzTB9nfq9yUSQnMJ71VxGhpjK8Z8dAJ8K1roWxtEXw9m1Z26LQ9gqCVxZwueSXM1j",
  "key17": "5veNy28JHzVZEsjQ1f9jQNB1dQPU2RFb7JP7ACbyKfxphUp8zq5g5U492mKBMzPmoeHXPTbAGNb1NY6HsXw2BtVT",
  "key18": "2HMKCV3Qav2iriDg56dvESZVB8FcuetW7EvtKr11VhDbQbJWxoXSSoUYg21Rrzdakhkaduj7VBdEAiYYWRxpXEcn",
  "key19": "mXsWhT52RRng8L7YwcjDdvsyfUt549sHSX8UNGeijYfxa1TzUxZiqQfM3cUD16At46Hf8dfTBGKe9f6z8HViuTD",
  "key20": "4QdsbvhVomnWocfpNhxRSYwjVZanJjPMwwY3LTe381LhbBxDMDE6qhTK78hunyAaGquqbiSn4xU5r46hBbhEs9es",
  "key21": "2A1Kc8B2w1G2X7rKyKFfkJp26aJB4nqzxEFGe3HF5q32uSfJx77WGRqokug25GZ2cFMpAxgPLMjWEJL3kJApNu44",
  "key22": "5LU5REZEfz8gpLmwgs3WNLtUMTdrh4eytAnfthodVFT4gV576FHvqrvpMHwqB81RqwoXpbMkMqFpmiVDSs4zwRcG",
  "key23": "JDpxS2KDgCbLCZk6qSttgfDtgx2oNEQHsvNFaWfKqg7NCk5ozk44ZkbzM8bduDxX8uRraWbQMiHJE2XF3owMBAH",
  "key24": "4e7GH7HtFkihtvqixqpEiTsfJ2eHmYToHPx4NiJy6DKhcyhYRqZk397HANKnMskZMv5nB4E1trCrNiCPSu6QBezn",
  "key25": "53obGWKRvyTfG8nWuqAEW2dZYfdBZwU65VEFA7X8MP3TXjmRd8hRawysQBA84FxpCE8nkfDcJXc2MTpaCaW1JNd9",
  "key26": "5tvwtztvhy4SfVkrTiPopYRnZVPjc7bnmfbDnpiTpY3zCZeh9UbG2a6ZfGq4GcCVHYsaqv8cbuBERTThd6vfxvEU",
  "key27": "2H9VUVZjjXEm8Tp6kXoipZ9A7L2DWb6crm98BQ6Metm154KpEs3UAhWg8WYMS5Thw16vfJWuiX1p3AHo47SV4ayK",
  "key28": "2R5RDH4PHZ8s8oU1DZVk1t24nxaCWZLXdN55DT8hMS91hHbmxzGJkTZ53rBWweR2xbjrWmhWbq9ikMpLGU6ZiSv4",
  "key29": "3Vg6x8aLNMdUA94vkHMWqY98vvoRYBKteZcx7KjHwM2e8mwgN8LXBqPmSf1EDygCrpwADaftHdJ75E9fyf7QCaht",
  "key30": "5UHpVQLAiKVtrhD9TXHW992BhmhnKkqX7UdKZ2JjPNnyFSXiyLbo4dGDLfw4WYffoh65VCi5bNihnm8MCRzpkHAh",
  "key31": "4FiAYnB7Tq4wiN99pjx7DZ69cH1ga1iFLBF1rKriwE8twtrs2LTT8Xb8ri7RFmW9kPoResg36C5DTBcRReTSCwkf",
  "key32": "2Vrqyn1K6iMTzrswMcPMN8t7sPLQXwoL5CZ4ZVUH3ACcyxQ7YZCQpvurFps7u6MULL33uJ167xEbpbiBgFNNb68S",
  "key33": "AZxVD3Hz3KVQRLPw3LjKS6uYJPpfbyg5uwRE3npmChreVpFdUd2JizK4CRVRCkF95QpYMj9wnQFCiWYTnWBHid8",
  "key34": "561o7HC7JNZ2HjiLUmarwXR8uy6yu3b7HFBFfjiSritmRsrPxqTpEAJ56UjHnrFYRJd31pvm2Gnu1YfSWu6JcPB9",
  "key35": "4ne2a4xPoH398aDA31RaBqizPS2QkDCj8bpyfUSBduiwixgTfRAwSo9WCJdsPoQKuv6i9WsnSRD8UNzaGRDWR9zS",
  "key36": "2xBwJiiM11aSPHmL7aaMPgxsMkRo3FRw689xJqjo1FLd8KpHEQbm3uJHmyMUrw4spyjRXc6kxkjTBhUJzzMvPxjs",
  "key37": "34FSaiWUYnhRLsFfS2iWdrMmQMDwP9GFk3tq9fdPN6Y3JNqsM55ZjQWRSX3HWoo4NrB2m3wMJnLeJJrYjpnmQbS2",
  "key38": "JHwaMATNafWzrSiB3jKXeLqGSmv5252NcMX2abkJHrjtFT3KgXGFQ6EPZAno5ZWw7icNyBSCHk83qN1bFe88YCq",
  "key39": "5GTmXVHcZf46eNcPtCmXpMWpA4nGFhtQZSJHfHM74DNDFs3pb28D5GZgGWtprUS8T5anMb2uGMd2humeAAZztRkC",
  "key40": "4v5bdBTYN8wQ4rkVfiWB7QRLT18b3UixMMvCWty3R5JbzApwgsXcsRZ27JHrvqtf15b7VbcFdMXnPpgGLicKgAUz",
  "key41": "37QgogP5R34GdCjZG4PKtKBAmBhoLUqtnvBcE8nXutyRHxDpbF7swcer1hbaoPKiPf37GR3MFir4xAhRG64PWSdB",
  "key42": "2EP52LQQ37LwFnR1vZRBSKsnATkRg9B6LTBoTaZ1M3TQb8rFmLFqxvLBYWAn1YC9pknmxSRu45iYPHp6pnqcYwtG"
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
