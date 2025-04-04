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
    "3zdgTc1v7jbBFhKomn1PA9K8MSdkKLUpKY9hnEAm8FbASyxwNXpdQ8W2VYhQhxcCuybFLdvQAuTqxU94DmorQ4ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjTMEZ2pkd1uvFcaw5xVaApHeJuqAL8UaEtnC5mJ8GuSQD2qpzdFRbqD58tNMdrR9qTh3rvCcDG3LvfXAeHXXLa",
  "key1": "4omMNtk1YM4ZePqgKVKvFEKkN6T77eBmnXBnn3jyYHEWnLi5GaMwTfJF3Vbo3BEJhCU35bVWy9k7Hkz7zPq4gr6p",
  "key2": "5mVAsbgS6yEyiw6uuWikTxiu1yv8ZkwgrvGPy3ejknN8LaxNKaz8PqLgWu9UkApgPoeoacFAjcA3TXTiVJRixCnS",
  "key3": "3JhGNe4GZybJEB8kb9XP5LdhrGWSyj93XCkPZ6UnQ3AbRQnZ3j2KCwky5EK6SrWFceyuwfWv8uxUMuBSFSAxAMhU",
  "key4": "2P7iUnC4xj8FZG5fwtjjKUCFQ3JSjXabhS3NZUajdbVyZK47cVS9NsXuD3dzd5tEHNPfm9SLMWyki9GovqMXcgZX",
  "key5": "5fqgHVG2ZCPGc38MbicrPST6XcSFin9tZBcxTUuAJxDQ7LvbMizkzsgP647nutzd8tmRtMvdYFEQNjG1tEC7Eog5",
  "key6": "27d3UhT428dQktr3TN73k67VLL5uHKTDw1g28maSHfec3j31vu9ykJCmtA5xasWsjcQ49AuvFsYy8S1YtdaoUFgr",
  "key7": "65jdn3h3fwn4V21NppG3drjDE9ogoXb7zgFZpRXYvEecfrEebjsxLWLE7KjUxFDAajadz1WF55B8VJjgte6eMpCe",
  "key8": "o12MG5gtoTKGcjKv5UzBvryYikUxMWdo9a73eVgcJkoeUrvn2i2PTKrTyRPdGV3vMkXVwDtXEhD6eQtCNFjmG1A",
  "key9": "3uVeHrgTxRKQeYGE5t5UbcN394vymbNPUTXZxgUjTdJdhmqJgggM3dy5tVEpHqaYbmYHvSgDg6Ga4x7u5K2G1ZjV",
  "key10": "2L2Pyv2e2nYoPmLbiQXzydyFdUUTEpL2JjbW8T5Xz4QnNcgPHutcaz8ub5HSkZNnG4vgQLunzTTU8JsRDWPtCKza",
  "key11": "5CFyzj6wWUYTzRqyacjnnSZBsucx3Rr9PH55XfKdBxySMkjwzc7VQRvkMsbNsa9Gx7NKixEbRVkY9zFVUxeiaq3N",
  "key12": "2mktB4vXqan9Wy2MvZ9Mkue9Bd6d5nRnsi8jxFadve6uwYyabodTYMwrRB64tTyG81hjuptr3C1zdML5wfnXpiVt",
  "key13": "4FdfePtGndfQcwt8T41GvTPmBLouS9pYvY5pHDVARvwU5fegx919a71fMFMmCon2kaqwS1hicHUR4gBggCp4iBAL",
  "key14": "4gtazbMT2MsPPHNuGGX2tLjqSPG8N1Ln7nRA6YXd1WSA4Ay2gAb56aAdoftW6ywuZxg2LkPqDZotmpWhWkGgbDQC",
  "key15": "DDJ1BywgvS6cWbp6h4Yn38m1z1M12nJz2EHAwh5YY1EK6GxXBe6f8hPYhRGgRU4T7Kof3WQDqc4zBW74Hb5WcfF",
  "key16": "hbKLhhSfxnSQvVtxsd5d7iMzPMDa6okvrnMTVvuDqSakBQsyvughqGMhoqZanmK2DgwqHvwai69UULpNU8mMDEH",
  "key17": "5bHJHGrbXw2aCM7z8QGcUhzzp8TTeuQyzmFWVeDmmmPgnw4ZanBBz7sb8RWNB5nccyAssyNB1GzPA2UV3VDapa5C",
  "key18": "5jc1dPNkShGWUZCTQ6N6HmyrZuDSLH3d8sBEPELKkG8iYu78Tu29ipZwpBkhtxZZj6DvtbyWNSTJHjJ6sPrzRxcn",
  "key19": "4X1DVYaHcvZPU3UbRGR1Amjg4gQKFVJL7MoAzgSeFAqufhRL1CfvMjaRBZnDfYfBWGDjNGYfR48MDVrJMoJXiotB",
  "key20": "4u9XvQt816tEqKnKNKWFXoSDzxmDtYiMG1oS6h6pS27VU5km9J147nKA3HwHc4NiG2ccnTrNQbtGC23aJipMPCeo",
  "key21": "4uRCvfxb4wRribRzDxH6g3Cm1ngAQQVEpHbfyFFWv8FhxFetrJjq16wmTtxRv5kPPHyn7heeMrAgZ3H3NSyB7r1t",
  "key22": "5wupgmfChq8N1yANwhGzNE2bsqquqqScdfNNiBVmhKZawko9hE6vmff2KD53RrUTf4bCLzaKd6xkGqGs2Vt5DfYx",
  "key23": "582m2UGxnm5DBcxSqwMbdrY24hptadSYBATrJvLRXfCDxABA7BNrwupg4CBbHjFaRTJGGeGk2YCr1fh6aMRZj9GL",
  "key24": "8uuSRLtWMiJQqAFKxQYHg8QHfVCweUS8SaoaRb6Wei6ko6F8r8pLK1to5HftdnFEgrXJUnfU4Emx3ax2Hhg2TuX",
  "key25": "5Wd9XyyKxr7HuNzcKwFi2cQWqVka6fFsWzDU278kk8KwKVEGmWFBfgxERv5xYTU5aT6bf3k6Lz1WNzKkv2Pmb19y",
  "key26": "5j9rprN5cPmuGrxuo9YUdDQEKmTa6jk3HMANYrbNEuBzp6pkVNQgTVQ4gbtqx7zkqyXNzZ4XaPbpsJsL5Rxb5vz6",
  "key27": "2bXQzFMNff7qsv6eqRWYm7dVj1BbfF8MNckBn3VJzsv4obDWzuNcrhAekeMva7tkkRcbyYuk8bn6sA52tTGBzVMe",
  "key28": "4SpReLZM2fnC31zBL2yt1puGFM1qkW7Vx5VjWZcrgjWNZoLDMp5XQ16CunopuxuFFsdp8wcndGe4N1CKnTsa2FT5",
  "key29": "5tJ2JdMFNG77nAyLE6jsXDjb4B5t8e4y6CSH7MEmRJc52A26mqUvBGNiZZsafYQhkvAgdMJ6Eeosb5JJLxt1bAeA",
  "key30": "55QfTmASSNNfM9spQKPanQQZPXZcb1P7gBsQFisZjaxSJWBVVYRjs6TpVXgGgwzzBuv1PHxWZPCsUnhYwH5UgtAk",
  "key31": "2QEBoJd4PnTu8ebA935Un7A9WeCwJy26TjeK2y4MHKH4SSP415uPiFFL7a34j6NmhDkZwcsNUZGtGD48hTfcAqn3",
  "key32": "3HSQ72LerPNsAbDwsSRw6ZytzDF6uKP7yY4b1GJoRFjP3r2TBjcnSxB9E1iqYuvZyS2zQNEyFqtTDosHafYLccaK",
  "key33": "33VTRSqEGqFnoNnprtkfKUjYErVgEbieDkZwWwAxKuXkss7zvFvUvXR736Xyvj34rYyr3B4NVXNPJjDB2qv7wMJR",
  "key34": "264XVR1b1r3MqtyVT68EunEGZGGV8GydXZ3xFR6EGfKTbd8PSewJxzSzgVyGov7DQ2U96NdZxk9WArRvGiHyPkUq",
  "key35": "2RX4iioxr6X9WgHfveeCF3NTp3vqGtgycUKgGGP2e4Uy6pnSmpoMCJK6jdoWgMGrLxthNwmjqbkg6XSyQhSeMHoP",
  "key36": "qzyEF27D7CxwstBTJVuxhFQHq3cTUEvR9R1KqMcaPbH8DvurcXCQfDX7RYUuqFNdmyV44AtPk1cBbVzM6czv14r"
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
