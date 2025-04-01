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
    "5uD8SUc1zokyJpgkwzN3LVoG7FCXyAcm414hPUX9s6xQmrVZTam85dgUNEju95UqtobAMqraHcHYx8VjchqLqgLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Au3Eda6Pv6zjuuyJBS3ZDVKPVR3mmxsuVHGtexrxrJnCPKnjLAjsQgpHhnNbpFKrQdYzApQ3QdLcbAdr5SCAjG4",
  "key1": "Pwn4T5CPRq4oEqgi568dFXa9CdT2MtuSWfRPBBRsgza9CSmcJjME8SNe251pAHTKGMf2xmGV2Gebrt1raLqFfaJ",
  "key2": "3cg27Q51vSiWKe4swFzMoNBjEGZTmKmqowDN3FPW6t3h2RKbdbDakZeRffX8FvG3cCDHQBDbZ5qSu1Pr9PEzNGyo",
  "key3": "2DK9BwWB2Waf3c3odomp8XQkArcbJS2kevNkDhfBpXTHVM9v7FR9JaPGpYQfSHisBSnconZyHsDyjVztfV6yitgX",
  "key4": "4pfKZ6wxehS5sDNAAkrWCptSktrzuGuiTyRwzhQUm2WDmYqQ4rhguqKKXvTVYUr4GE3y2pe47NQoa28ZetkokpgU",
  "key5": "4rGU3YS2mC2EDiNQjmp5VdkBpGxESPxSQJDukuXCgwReTbPbAWgBp8BANX6HCExxFVJ6oSukhGQPXceFr6cFhHpq",
  "key6": "2BrkjzqQzVvrxQiXwGz8TpST5vob39gJrSbv7KnLHxhY4iT7SKT7SvAkrExxFEpCRSKRspoL6fpWvEp2LuHeJBTX",
  "key7": "2nWmFiM3B8Raxr54JWeystCmy7GrfsTckYMctLkDNbK6KsYhtri9d7W82WEkT1UYeokYsof6723snNGLmC8iEv2C",
  "key8": "2KYUhnG3ne1hNaLzyU7vLJ4ELoq2cTJ6pgnQHLE1FHNPwUff7hASa662MYwj8inPyJN2Q9QHuhjgx2aVxZeS9gD1",
  "key9": "CkE5EmaURqqKiX1DtFcRqy7exrgCoLPf9wTFeba1MFgimCU6jR2LDrguUjRn5BRWsNTCmeXNisrkP2nWjnewMn2",
  "key10": "2C2WXteyHonEC3a4PmkibGgxUZet2aPh2dZvEfDv6nn2eNMRBsZ5opJctgAYBXmecZxURrs8L9TecGiXj1c2tW82",
  "key11": "ssnP9r8kkdeB4dBDeZmXbX5M6XPCZHWrDibXPXCfRa5hbHDa7GJcS6VBGKPkWp53K6HFJHs82B7vZsHijhw3dEz",
  "key12": "fDvm6wmaVPTmHKt7o4ZvEqC3pHHytcrfkw2yM6CoHLEvC6XAL6NPDhJVBuDgHcCvGAkPZad88wp6t8iG6qdAUci",
  "key13": "LnKKG6mFbUtbxG46FY4dfUTW3jej2EV3Lq3QLU5vVJhZmufwpuAryWK1xiLAiUYS2FfJZdgt4T86RhCxKDaUwS9",
  "key14": "5mXGViRyHYXpPosdCDVWpnW6JErSEKL1NHJuSBvw36nwJk31kWAA85bBFLHZ9wbLV9ZNd43euPTor6aS5TsheSQe",
  "key15": "4rH6NBcrAuKbun1gKfb6TqnEHjs5p2Pbhjr6ho7Hzc562C3zKHtwPaXDLPnQHVW4qwGq1Ko4YYdAqR382u4UeyFs",
  "key16": "4Edct4LoAuURwcHDrUvMadpvqhuSVcyNZzky1eXAWfQbPEHbfDKCVLJHUHuTiSbsaLnXtGAFoFtRobbAEkXkUE72",
  "key17": "3B1Q6NrZzKxzzW3nDbyJHPKHC8jyJY6L7vsctiqJDJ1eU7TMfAcR5873YQ8NsgdozKGtcBgdKZeAcPsvvSA12HdN",
  "key18": "4i7wGhrGZAKG2QLMPQ5NuUfXXs6ZVZo7d5KY2Aw4wcq2egTrYjZU5uQghkP4qipN9RSTHx9teAGoEW56LmAbyY44",
  "key19": "5hh7BNtWBGoJ5Rk4yxBAVf4Gzhi3onY8XjGTrzTeoTgQGa3wkJiWk2DVenQgSRNX2UVDYM831G3xYgMkPTr6gYrC",
  "key20": "3SuDR3tfrXGpPYmxiDPG682qYDoseo5GSxYZfr3o4ZdT5yr7h6jhhi5chFRSmyTgnjY1qGYCHbEfXeL1VgmHUDSj",
  "key21": "67b91m6ozkS9TXBqrHFi33rdx53eKiDB7YLAyxGxjQEdPVwao3Uw5wxTW3reGdWhd4kG9GN4A2DTAwgAqdoZ78Vu",
  "key22": "2iC5MH8mNoo27udrqWJ5m4jfrWNNnmTMkQgneqZkV9nUreFFq7V6GM6nJJNdWuC499dmWUi5MN7HygsnkoyHxdzM",
  "key23": "fup3GD1cvyYJp5HkjQrHGW6FLeAHPRZhEN7j4BqFV5JnoDydANfCxtRZQM8ePRSp4viTruNHEM8Cth9nectfoML",
  "key24": "2F9GWdMufDmhwA6hfuRsApUNdzSt4pZpW6TNv2SV8HEgF5YuZKGWqjWRPrLfSEr9XvnKuYMn6DZUUxLcLhPAjmzK",
  "key25": "2oCqHz13b76VC7nMBTZuuE6HSPQ5wXHYvEHqTYR6UDiqcEja9XjGPasiFyK2i5H5HdwHdwxYrrAbGdvJMutvu439",
  "key26": "4C1rxKJvA2eZLJimVGXw9aJctPpvo7TFcsZ7xka9pFWQAmqZbWqWDJqFdq7hnd3fuq2cJ1wcwGomb114WjeoGQPq",
  "key27": "5CUhV17a5cWDmRUSg1fbBLvzv7nMqchM4Jiq1ELuK3xxMhfBWQ5t18zQyaBVPnoxyygYFwxtVDS3sReRwfPpxFhQ",
  "key28": "9cSfoSw1cFirbQLxAeinMnvz9SMEEGfRyf67NytTSWpHQXvbyKATLCjabmYxkRyTRTeHbaB1eGa375BTBRjvv4F",
  "key29": "4ruKTB2QzMaVwA16V6wp5QxHLUUyo4Jq8vXF3jxeWYkd7rF4A4wvB3QhH5GMrEstJKq61Aown42vZNNiRUZUAuHb",
  "key30": "ZdfFi5PXm9UGDv2Nrv3AFyYPN4kuRjj39PcffSzgBPoVjkEKSKPK9g9TTm1MSwdJHB5dcZb87sH2PAx89Wdbr58",
  "key31": "2Lt2TS5AyJaz66y4resTdPam8uRqq7jg7tJeQ1ASYvwsADbnF3juFmM6U6vKCogr9c9eyutRf9KUpaAUwBLkQAuQ",
  "key32": "4EYG87y9YXNngitBAwJeHaB6TjhuGHhtkEryTcZfgUxejz7JQVin7m4iF7b9Ut7A13KdG2ZMqKbFffyzMmB6tx7A",
  "key33": "5qmij6AGeEZWQSopjvJGz8JpBDrbHacayWHPfJfvbEfuSjSz3X4GytEQ4Hvk1LasLojNUvPzpGfsBubBsx7z7NMU",
  "key34": "63s6PBKx3S3qqCUmTcwXxgW2TkGuwfMmccsdhdyH7fePc4HVcZv8yvXYRzKEF5Eo59BCwRqqVeJqo53dGdA6TiFK",
  "key35": "2juYvnAhUcg5HcG813gKuzhss4VVpf31Rx3mgxuqP79Esx9yZAK4tW5kh4jwVYmoaZnGYkvYLyvgkd8tdNqruvWX",
  "key36": "5nCt4efL2MReGRfE5qZRqh58D5VMDG9zHjgbXKNUKAeRmc3HLfXxBBwnGbEmw9YDLAUDaaEB4cKw3Qp6RyyQfWo3",
  "key37": "JFijT1vqHdsyRQMGUZFqBzYkdgzgFSJ9y2JkvqpcMvEuZi7wEvF4MK3kkormercybEsTRVAqQyBwJzgFnYcNfkE",
  "key38": "3Rh6hoevcjD4QrMqFqCWoycXVDtNN1Ww1ANBPRaFZCaVXM2HRHiduonPYtqLfHL5YgGhZ1a6QALsaTddC9fUaAEo",
  "key39": "5A9PREAtHbDpW3JaGkX1XGJFp1xzRYoS2duL95jvi8Yc5wvDHN4pgvTKZgApMhuHvbmYipMP2GCUZVDNPSKVoouV",
  "key40": "3huPcrcwFjFWJ5ujgNPY1YHJuHKiBnuFiz9ySo2FLYU46niGgtdStK8gJKTe5PMcHqDs6d3FMvLEpiSRGBRr7cr2",
  "key41": "4bU6GHpryAkwP9F4GbcnVxEBJHkfR8Gny4nZBvWskFkksbsaaqdCYCRxQXF2msfqvdfz4rezfHg7vCu2Cj4AgPhq",
  "key42": "3ZbmDJydNmqCuFZ2WPUCeMNjwGio8JwwbWvREqT7U3nsmPgfyqKo1LZ6XAgdh9HqKoqRAFzz7zzg11jXFHQgxeko",
  "key43": "5uDJqz2Czn7L6UUhTj8eidhVZLsPAGdCLrkGSEUhuvRgJDhUW3M3SpYzPh1E7VSq5g8fCWzVvYAiGnyZFibZ45Rg",
  "key44": "3uKjHBVVn92vw7wHkexdjCNoqKjKAkS2vE7YFUEFH8MyAiFAd96dkxXCXjjfHbty6DpQeriY8RrKAxsQJGY4WtUV",
  "key45": "25h2djx7HXvPsK6kdc7GYBd3ZLXrJfMpgMqkyUsfQjsokNVTNFWPu1cgFhWSvRwUXRna5LYSQ6whoaf3H9eeVzXD",
  "key46": "4mgv8bJ6i7btssJ8MxTrEPj29NbAoBwPzPE7hG5MP4KsYa2H9kgbtunchUend3UadvSeqpnMmzRooUe4krbUcui4",
  "key47": "2vSDoa4MQDR5w2NTVvKFwyZndKSP9M3qsYWFh3nFjvkXPBHg37Hdsy89C2qHhN31g7koTv9KQFBtcv3d59ZDbYox"
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
