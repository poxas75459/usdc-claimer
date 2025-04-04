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
    "2hd2xAksmdKJt6eoyqdcjQXQ8c9S2BvYCuQ3EhHM6GuWaQbRVnhkcnNo9KvoHkku6h9Xz9w23esxVTdZSos3spgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzTRFF3RjypmUrkkJTb9ePotaE7u3D78eLGhZdoV2bwLkZjfC7AjdLJDEXECLrsMqaxwvcK9xvMmtoSiSpowSoK",
  "key1": "4n6hcFSJ6YjDG63JKW1M4iWnnehRPzoTDExi7hmuCRVfrWSqNWxL8TarwAr6Pnc9odxB1MNe58PYKTAbWNkBpydS",
  "key2": "65ZQ5VSwjseLLTsL72TaD1Ej5qHpv7tRvzVrctcQqStMnGqcba1Us8kkHmcBGyheDtEJLhorqYyBQxkJ5bYYjTah",
  "key3": "25wRH88QGCUbuSgH3FZ6VGPraJ6uWLfXCGhrrCBDoW61gRd28i2mpvzmKviyejppxhLnDcnikzehDDfrrNepryrM",
  "key4": "c2AWMKfoKxsS5fPgfotxHqZwUzexKjfjjeDK2iEW92AqW1TzUT5ZApHovWfVSJBpDgDX7oz1xFD4PPFbYXprzYf",
  "key5": "oZMmzTN1hPNrjiHpL6w7MYbhuKw5H2ACECwyUe55GRS4DpzDhEZZyhNseyJa9zxxWwCk1PEFNV4DyrDPgxsWQsz",
  "key6": "5t25wW4mx3ufg7fhcgzUxc9LRxcQw7tVGc5uE1ih1gTaXExMCNGyYdJ6YzGq8vXGU86EvKQd57gjY1jzRb1VTfmS",
  "key7": "KNmZNcYp5T4MQCJdfPUngHoCcRtbcYitCh8Zc4f34ViGrUTK5X1FY8vcx6RprD3R3LZVMpvQMZpY3MUXbFK5GPd",
  "key8": "59AFTQhr9D2pCczLwr7Ysxddn2symN7wgfyQwPWwUbbdgxfJ2qaNVPS1wnpQ3vjtbs1TQtrFUNLNj47N9NtVZgYQ",
  "key9": "2dhvp4mKDN2JziWdEQKzJJGZhtU1KwZsxHbuwq9aEak4vHhvRexXQ1BHCBt1waiFmEkxQH5Efpz1ZMhp4roiZYFn",
  "key10": "3CmtpqrBGWTN4g42BrBa32hXLC1phmbEkAmm42gbHiznLXUmrPXH9LLxsDGTUxYBWoWFksHUW7jfDdieQfpsQqRW",
  "key11": "5LZ8XZctEDE2zmwSVAsMngob6VBvrT3ixkjxWqjyXBMgVizLAEd1GGXJQZqsWV2uWbL4yKwgX98CbimFMVjbStsj",
  "key12": "3GEcHgpfjW9NthsQWADQNjEwM1R1N7o8je6CVqrWMNg8VrVTa4Ves644EDepcnysDN71GNJDj6Qcu4kbirj4cmwC",
  "key13": "BmtXpE7p7XzB4QbQYatW2aVJUqASW96wcpqj6ZzgLELcjkQXfEWL741ZjJEKDZdQVpiKp8LT95hQZ3ZZYsghkHG",
  "key14": "4mBGMJSY1i3nm8FvVoJVPZCSuq33Z5oDLf74w5uDdhrhJ24bg4TBqmvgn4vUJ7p2pp52yVXj1Wxd7PhRusnEd9LN",
  "key15": "tBuKDaqpTxdHo8vjmus3y3bLLuTkhB3w7eshEU6oW6hsHK7myAFk9EDNWxj1XdxW9or7RrhCR1vUigsJPsygqcg",
  "key16": "4KJ2QfU8MkHuMwhZdp4ZRqSGHnAq3Pg7VAecmVFdLcLjp8GyEvBQgUWdib44nMFXVB8C4KwGmZ8dqbGX2Hziw8Qp",
  "key17": "33tiJfWrQijAARDkScUnHTKr6bW36aAENppfVB9f7EeLkhA7KjX6ay9HsS7W6gnCWJYqtFGxscAsL6yfe7KKXq3j",
  "key18": "2yUTBDztsohQkdaCxyjYFRFec1rZ9NZ6mNRVLqFhyZzBKEZcCD66Z3AT8yj6TxMKLXaKU3PM3SLtWrmZvDeQLLWJ",
  "key19": "43nP7fqD2tCB6d8Ky55RX9uxUuErCyo3weHtKvyd2Jn2ZhdXg2ycJgY5sxrhrMpUN21ot18gYtGBhAuZsNET9vyX",
  "key20": "d3iTPBNMkNY3EypQVN34dSy2REkBbrgVeVwsV5TV6Ba7YER3k2Uc52i3BwHXCTm7kwxuDHFYSnFoTZWSQfuiKzT",
  "key21": "2E1XAwU37HGm5Ci6HKoUG8kijcozhURM6BX4GEHfGKMq7FGWLGA4PMUSK5AVMwZuHq246uk2icGJacfRkcGgWjhJ",
  "key22": "5iu5uruzAZ3b6P7Lds2T8o5WamuoMrC9wuox546KtPDRjqLLdk95XT1f1nqrKWnr91S2FqojJF7yeStLiecNhQDp",
  "key23": "2mb5DGqeAd3T5kJf9Xji4WjRYT1GwB86NX8ZPPDwfxrYASNRy1bbHRQ9QWz6yy4T9PxErEAeXEWuwU5bHfMFAmut",
  "key24": "4MJiHdxQCBiVyf5io1kcnLYg43VwRKPgaK8UjKrg1Kg9dh88Yz3bYJxQNoq8As7UQvuHu8o18itjFf7PnjExvACA",
  "key25": "5c95av2dTjFQqjhKhdQwoW6xELS6Ji1fAsjdQAKsqx4Vv8sT9BcvZTBrAcn2f6chxh3fPfSsDfJiHPaTEwL2mSKC",
  "key26": "bEKr5SbV8Rhe8vn9qPtnzT6v8fUm5FumEHoLgt9KH5euSjsgRX7YbNfvRbnMPsUoBiT7WnK8n3wwA6Dd6mD9YNE",
  "key27": "3uybsi7jqBxvt7Md8rNTvaHXDHzqcJpg7Gn4EXyvYjnn5mFcrwZ7MLagiixPiVNhr2QTrhyd76AP3HREXRuYcjaC",
  "key28": "3AEf3jnVcq8wMRBrr46w7nvbzknkSG3DGz4braQahiLfVHQCAg4Pn4dfSAUfFLsZgrvfUrc4TUHZ6AEkpZTzoQuF",
  "key29": "iaRnNgQLirCSQ5qc4kS17qgZJsU3jCbMFeTjB1qDjsGP44PgAyeReFgruMqcPBxjXWi3qmxYyBUXFRM6ZRKoQ95",
  "key30": "48Lja5t1ZrUaBCepvDkihXEvtQNgjFXafuJFYhZ18LTsmjy7gLByZWAERP6rE1Cepxc2sRiUZRWCoPsArsqyDE5R",
  "key31": "RcRpiJyGFjmRzAtHRCnRoC6Xu36o3MNcZ5omLTbBPNaywCwbGNQLy9GWKA6FGUSSft9nXLE3aw9gQPZDTx9nkAX",
  "key32": "24dUZpr5CJFn5V6jEtSUsseJ9YGEXokqaEWC4kRmH2wXrV9jXgyWhJrZ9WtJVN8yzYe8YJdzwZEzT7FA3SfdiFa9",
  "key33": "4FMpoBjzzhroVVro4koLvbNNQqAHdVkuXg3Mh9Gy1818RVwriyvzbFkZ3e9crHbuyB3RusN8CBviGUgqWpfX7ZrS",
  "key34": "4FwLiFd6sjVot1teMRUta8PKH7AaMWoRfrNaDDaYxk3pPEAG1bCSDYZfGJ6PZyno8XhxyzWaGvyu9wR9Yyb4R6Z7",
  "key35": "4um6uZyKsko2AmDKEfL1pQbsXFDz4ephkVgAS2iq7VAwMUE2FqCo1MwutdtHciQczt4p4Dexc1Ggg1fwKUZZx6ac",
  "key36": "2Hi6CZKE1ebtuJNLybQtYTbvKDhQz3pwqd46CKRfXrKSzw5L5uLVo6C8ZFUS94CvDLnUhX9MDyw7afktZcRX7v8y",
  "key37": "45yQLxYWp2j3Xp3oKXDUeUX62mqkf7882MQByE4xgfTYnxzgevmTgZQuR2u8fsEzLmvoC2PBLzmVQD2pghjGTAjc",
  "key38": "2ghEEvM8nt8jijD3Xk8rcHjejYQuC5jhrEomSJLJ3YChmxcsntUUqiCBQzt5ddcMxDbKXsJjpQtqbpTgMzh33uLo",
  "key39": "49EchrdfgAK7CEATkUbWA4PMBZ9hZf7nyjx8HwQQqcWcNWg8i583bTLchuV2yMJARHzmuNsEs1ifUyRrWBRqJr6u",
  "key40": "4JGtS5jz5p5dVtAENfY5PWrRR3ZLos9pp1HxCeG2UP2tQm2bvqAs8SnPyPst9b1bKhCwVGu5Rx79fbSR4j8ZbqxP",
  "key41": "4Qi74VNekE2x7Zp5gx6CjtfwR43mev7ndWvQK46yGQR93cVs8RMzRU11A9WQSEnx2MeZjAurjpu6KZnQ1YmDcuqT",
  "key42": "56bUzHw5mcjN1iw1ZZ1U6aDgJbxW1SX3d54BGB1F7K4Qu3DPqc1vVDaDqHXPfwyAs3NQZiNsKCNP7sw3D29P32zf",
  "key43": "2ye8UVZkrRBwJpNYwmzsRf4FLR3nCvQ1nnkY1fsHQvbgopks6ABD7Tg2XHVHeQEYF2rFTq4bGxdcS1VajN5ZQ897",
  "key44": "5tBxRGVfPhkKLnYm5ksAcTFLLeDNhuAESXCJU2BeuAUASbycSnDFVBdib8UPiq49mTZ95hoFSAgksYTQ2dxam6RY",
  "key45": "55MG9zNK53wCE7FcuK7uQm2JJD3vi7NUCtKWPhMr5r46bCn85m7txpaYR272ButGL1bg32bmftjqfV1znPSQkNE5",
  "key46": "4yZT4PPCqHeJH7Y365suk5oU5mdGPMWCxPxMRpLGDxhGMj7pLa1ryjUu5BMaFLGsGpRtvRbNasv7nqte4fPcXJ1a",
  "key47": "ueZsw581h9NxZFFvfejTVuAqGip5CpvGjQDrZVUJueJNdTNdf8wi48tQe4KyJe2pDaXBsoLZxkHChjq2gPDGa51",
  "key48": "2nCEfRmciywntb4fVb6tbUUiTW1GqLUdWTt9ug2PPzfqvJ7yYurDsvuq5MRGb17zTGZkpTBrpybnkXqc9D4ShWbz"
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
