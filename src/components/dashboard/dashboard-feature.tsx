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
    "sfzBHa57vTzvr8FMGkUmvMty9L1Gq6ej2pJnrkj4zKBbNTPAqB3ji39v3re1ioge7VAX4jDNTk2DSEW6s3eE9UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4251LKsLMsPRBBx2W13Xuvun6gPbZJ2UopKLJcunL5JVUQ88eSaYdEU6FDmpLeJVV7M78Fb71qzePp9wvfzNYYNS",
  "key1": "5hFqj2Kt47ciixMi7k8W4hJCTyWzGCYg4UdEb6JXqHB3E9BE2U2whUptwQfLWHaZN3zzAsrZoJVzEqM4YWVQG7Rq",
  "key2": "5CqHpfyiLdR9ftRBf2Hi8uUBtTQe7Vc2Y6mrPjn6tT1H7XfReeTvSzaCRG8kwigafTRmgfjF6euRuvkB2X3kF4Um",
  "key3": "3SLpdXUuiUE27EQ6Lg7js6AHzeug9bQwJMaPXnC9GfrwYRBrERWp3v22te8jELhqLgz6uejoaB98a7wT7XTGbusE",
  "key4": "mY4ChXX15oFQthhKXGcxz5DTBEpNdLfd95cCdZ5CLEZ4D1YhY3cHckWFfow4GDXSmaBPx7MauncpqakAMJ9E7BV",
  "key5": "3WaDFNP6rt5AL7wcSY4DXaMZfERTxyAU9rYVdUZWTrkk3PEWDjsjAfhARHJdektt7US38cKswYYcCpnsfUyjaFfZ",
  "key6": "2XHBqvKNciDDPFLkuSuRCcuKkuNJFXvFzuAuoiegg5SoaNAWyn5QdVVvzuwxbheskq4zsvYUipVHc1LZ28JhVBjg",
  "key7": "4uJiRwUwSZiN7Zvd1EEKWHKHs3Q5rxTgCLG5qKXHMB5SoKWDybgdJPJABEj4D6G4xHYJcTVjzsDwFUTt3cJuuwpb",
  "key8": "sfbU9uJtR4rPogNGdWM3opVg6hdrf5FFAYrbjGVTDfNngzoq7DWHhcfXhWZZTFkbwQq2cQMaUCGNAXL62AfpcXM",
  "key9": "5XrmjrWo3WDJ6N4uepGe3UQi9vYu9Jyw8TFp4gKUM6By6aq33Wr3bkzZmvjaJSsZSrcTu2NaEjDgewMhhkjfMGv",
  "key10": "27JGyd1KZNg89tu13faqzxH2CYBWTgQdXjuT8VK1i7eHY6qMBWtvykUcLruuLbuMi5jheqQhiut2enCuUqaDBRMk",
  "key11": "1FXnUL7BYVZoKrSTZBKiZtf4U1PKsiUC1fko8PeoXKuCGv8JW5dbk6AqWyVZrpmw5XesjQmCvmY2bsGcZaB3fSu",
  "key12": "21wmZWz77mDK9tCBpYM2SJvgQLm54fMH1jJWvA83bfvZ7rHSCyd1knM8iZnpHwKwKi9g5EgfqiKPdBLbpWTq2Xki",
  "key13": "4QwKVKiNFnCRtwWaftfp6SeS9HnzrK46GHmgC6CcBnDsB5EmZiW2SMvFUrc6VhXHCHQBTYUqqZbUec1AUqnGA2bo",
  "key14": "4Fpo3WsDFjuHd7tJV2y4vbZuerzTKtUe733tN12yXMMo7pvQE9kTbRq4J9U22pHtCmbhQpGhyrVRhbXb8NqGWvXU",
  "key15": "4vWnThQDhFKM5G7bMNYs8HfKs2waVdpfbTsM3wUrxwrmvgxff1F3YMy4cc22id1yXwjUsGVTtLn2Zu7R1A5adXww",
  "key16": "3F9VfnBfVfssU7ZLR13aFUbvpW3iWHpyUDtQaEmTGgzDMSuhUANGsCCWffDbYVj4XaRfy3PoAxwLDkexsKwVFEW5",
  "key17": "4gAJbuoxLNeUsgjC8hMdbfe5UWN5QJQ8sMTNjnJW6U4ELSYqjcasiCSPfHPQcCcbbwzZphm19qrSuKQ61iHkRgRA",
  "key18": "2aA1fWXgoq3VjRke9QMWzAEwqoQLCSULSQyiJe4m1EZieS6Eabn7z1Fkf8yyt4if2zUMduC1DNMRLDteWqzrh8TU",
  "key19": "3DcW4HsCi9yBpmaPZ1bAh9zMtKcymRm3i3dRDMadj1CQAecCWjxavzZpanBoq21fuxU9uDGU1pkM81tA8f1cnUu3",
  "key20": "5reygAguN8ejBfr1cEAr3tkw57uZ4t2gCcJ8LTEVc4at8yPhSVH4YA2KxZ5maRacn8wRDrXa87Q7kqwk5T8uyRSY",
  "key21": "4SL7UqWnt7mTyvy66c6X59Bxzb8TaukUk9MUAnTeFXESC9E9mH8DQogYRMQtKi3aShcck582pBh65piGMW4pHcdK",
  "key22": "TMt4jqrw5JdBhkZCtsDkZJyv92kGZ38AoHi1Wf9t8h8U98Jx1yHhKnCybXcd4mBshwB1vSvDjHVD5yG22dtNSN7",
  "key23": "P78FuWGz4ytgCA5GKo4ry8wHoX9pn4ha9KuoGUtcQ2KsrTvgAwfaCAYZPi8nkPXwjzDjAeKucAcdch6y7PXs8r9",
  "key24": "8VsFerPCczVXM7uQ3E44GQQDeFvAdbf3LyerDrk9L5k9ZCXn4RrDqXp2x6DYciwAP6VHkJnGauWKMBxuqTPTUiu",
  "key25": "5fHCfLYcqPXfTQgcQ6NnjcrgwqGujin8ttJjECgBcQuYNX9qvHZEJ42yT1nxxJLmT2rrDijZCfUwinbdWk2RdNxc",
  "key26": "5aU69EEDHZKwXQqRLxfeqj93fFZExXJuJYA8RXQg7Gx8N2yJk4xxe7kRuS4sS8AN7Nw1J8A8duLhA5Wuy5HZi1Aw",
  "key27": "1F9E2KWipWhHyS779rtyb6hp4ZnKQ15ZtnR1gQy8BUcTpwHZYAqqG7TaX3p3pqC8J311xuoU8GsLZDttZzWcqUB",
  "key28": "22ovZMjqsmabRzvTmv1RE9in3VFsWzsGknQFqDbQaWxexEZJUkAU6QCSRMTamgvEB9qY3vK6EPPYMZVHoSqCpFWe",
  "key29": "4TpX4NE7DaeAd4k8gjraWEWEkpugZzKHgr5N6r9NYYncsyKpmyYDKegi12gS1WSo4oVScqvWcZk9e5QGqZgEFn5s",
  "key30": "5xgES3vvJy3yn7ngYJ5yrKjgvLoKAbqhPMuAsfdpbSYB8sqV4jK2CcRzFmvJ9U3EKoHeCUJfRXPiEGBQ9RRQf96c",
  "key31": "VHQhfjLsDATDiNbZtMXVHuivPPs2vFvRks44JLX6zUbUa8tU13rdqXHLUZeGCehV3Fw9YZvnGZSXFfTSahyK6yJ",
  "key32": "vPf7XbariR9jzY54rscXkdnDA1QfGU8mRwbVR7MUGA5Z4EbUkrktRwHZyP4bTkeFVJkCpAiQYC7vHocswCNaPi5",
  "key33": "zr6R7YcQ8cVjAvbbK168XXA4vukf9DUekvwn7mV79oAuCFNsRadw4wqBkTRCBaxp67gMU6iKFJ5crFxX498uqJ2",
  "key34": "V9kKcXks6NVSFVh6dxPMegBY1RPc2WtVfY9V3HWi8zs98Gsb7FYfqnbVoBuTsLq5DEiq8iqqJZL4YrjSkLQqYhN",
  "key35": "52RZ1DPkB1wWcqmr4Xhav8dFbENeZHpq22PCxwohfbpRGhoiMHVCMPSn9k2MoXssarbERzfGvoZBSBR9Wdmy8FoU",
  "key36": "4i9V9r1WZQUCV36LFnJDPzN26chXXUrWYrUwHcrsg1ZZ6SzVyuUi1ij7cc1yBauHYpeRFEWdEJrcLQEUczhQFLNQ",
  "key37": "2TsKxkbgQ64fuZA1gjEvhVha2QyU4R2qfgbxontU9mDk25A4wEsj2r2F1ZjUnLxKk2ctDY2shr83SsJE9BGscyhy",
  "key38": "4M8iQbEki6KvL4NAVKvvHcpNmqvtGQD8N8cw45jJp7ir4GpB3D4GfSqM37SVMBwc3Aczeprc94zfomLUFD5cEtYN",
  "key39": "3ykhAfHZcCdHB4MwQEeBUtZhmjrsKffWHNptH92gJDD47YqFozZ24Tcix1tiLcmYWHAcxFWBppjkSKs9vqVZ6V5U",
  "key40": "5J5cEe2PaJrad8bKdeQYYHeqUgo6aC6Daq9L8Xo45DVqKZNMZ968buJ57Q63EJPkvENuPLoMZTNjRkHGtyn4N6p5",
  "key41": "53xahr9BuzmgSVHWmf7xxoY9ChUjk4EpT3Ek6ADfBTBZiU2jmQ2JfTzE6rMZdPqS5HaPoaQqavVQJBuyAfrA8JL5",
  "key42": "TAEUuuM7fsahsasomASkuQYYDhkf9JU8i9ScKBGeaoweaJhokmaH1Cfy9ZUb5pM1yeNQDWjNqBXgjFGyEN1bCEz",
  "key43": "3x47CyDPu9McdeLszzad2qe9WAJwnRv4M9LMMtWY1i1oUQFFaXDtnKLx1gbY9qvDtxNsYkdBpwD9EHHxb6kjbKpe",
  "key44": "3HfCJ2nqk3iaZa7jeoYcpFM6Ye3UyPtzk4PnfbZgunpzdkXgg22ahvzJ39tyPi4LsNJk2chNS5SFxiQNeVr4LyJB",
  "key45": "37qNBe4KeL31RLZL1DvDFuFhfPgwu7M4WNvfshStK2LmG4qsDn6fKw4m9coDZPQ84r2U62Ztfb81aHZdkTtukxqZ",
  "key46": "5JRxhnLjWVmBijJaAsypqASsY5myAQCs77GKuHQRHpw6jC1CaEkiL8uoHNwvNxWZB72LqhYCmYnQFNuAFiXqEuAT",
  "key47": "4nPVcziyRfiizocYHPF8rXSwhCT9BYCFnhjXZTVkX7GgrueKWRSqsBre6HhKbR13st678RBNW2ogHwbQTsqptJFN",
  "key48": "49Rm13yHQJNy3uht4SYZw187PAgvwj74AzpfrVXCwG7yhCdpQgoK63dm7kkdWadXUoPuhhSJDPdBqq2abShzbYJ6",
  "key49": "2zfwtzSpyuiX8qemW2HgHXXqjc8EwYd157B4Bqbkqt5PKp3bDMM5hxfAX22Z5reRV76DLSZJ32hhoEHvTWWU9jMX"
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
