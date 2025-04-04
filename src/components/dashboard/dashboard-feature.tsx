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
    "48FGN7Ph47B1KSR4nKjhfHkejHGRd5KLqwKhZVyJyMirHz28ju6Qp3osySg57e4EDii9sHFkQE1qcc3KgHJ5Vj76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6wTUyrCMuaDy2hpGBejrhwasxubF8goHAJMCpCM2GzA9KceGLSw5kssXDTQZ6ghd251r9DYGzS5iJPv264nM41",
  "key1": "DCR6baw9A3UT6e1fC4CmXxKyaEqXgtBnc95jDsuen8n12MrXxALcJzXqwYaJ1w3dWgtgsMK3VP575KNiJs9pL3b",
  "key2": "3o5azi9JtnNBzySch77TFsyXP2Hj4UAqvGsdTkK7cW5Fa42tndjHUZQAapW6y45vQfkHv7LrqGLwU5MvSq7z9V6X",
  "key3": "3We6w2PBq2yvNRsaGqV8xqvqfrAXscqDvCPzRuCSkn8m1HTWYCGAw6kh2SiZxeG1xC5rU77FRzk2b9uhggvwKPgk",
  "key4": "39ZUaavHJbNc8gPsfT3mASi11eVh5rXe89Ae8tM3CoevDmRLjMJwtjVNHuxQbhtZtx7MJyM3RtgBkBbdpz1BqNi7",
  "key5": "4WDiPE91QZL3n1NRDh5V3DsKgsg6BBvnTFxDHpnA3nrJoY5u9YSf87Da9KrHkqXN9CzePw4ni3a3XhcA2zoFpx8G",
  "key6": "4v7vBiuNsFqTEDin11Q5Q37ZT5KsUmfHKQkczgo3K4j1semiUjgGP1xaB8tYXVSoVnzRCB8R45ww3fBup9EMGtdx",
  "key7": "2GURdjRMAyRuKSp213r51j4t7MybQuRjV2bNv6uWj4mSKHUGQeJcaoyfHgekknDDFJmSPJcRvQsYFkmpZLeXxuUN",
  "key8": "4EBsXVLGCRwdxgtXKAmjca6LaaYkAendbQzCnUX61f1BiTxN4kPewArU1SkUL2VPJtPUfSyqS3Bv6s4VcYmhbk4R",
  "key9": "4zK7UUWuTk3uD2LM4MnjDcyMPCkatKbx9E2h22v6tQt7WRUW7EHsG5SkGVCUAQdMUDJpRjEwLQo4X9sHBYhe2d9Z",
  "key10": "2ornrYWhxx7S3LLu419vNwLRQHHhUxAKstCXT25WzkFnDprfiNbGWpgtQ4EVJnvSwoJfJ1DPYzSPS7xpWY8WFmU4",
  "key11": "4V1UHeGxLLrZDB8CiDje45fJrES7eqUcKDFUQHRRvx4ejSFoYB6E7UfS48gdwcMvkgneuJSzFTAgknxHH945zKWR",
  "key12": "2cAwYNkVKqoMUkn4C8iyPkuWWSwQCyondpacveAfXyLow5JSvuc8TMzQfYmHHdXiLt74Gg6YSFkxeKyLodPDqPuu",
  "key13": "8TdfHsXHsnCsoJsttwAqgvNfm2nHPYrwTmynfw4d9wQHgqeg6AVPbDCYHnQkLqosVHin1UXTPdGUs41e663DnRq",
  "key14": "4ea4hkN5E9C73paXqJ14EHbRsdqKuyVCR8YLAnyuf4cJGcHi4iTAJxMX8o6AQUmR7HPH76YkmoYyiRtZ2qo6AmH3",
  "key15": "4i1rwr4eotmywpEeizD1bMyxx4JS2F5vaZT78aHN9BeUXiwuHeVFqNg9iMgGchT96rYUmmEsCHmUahN9KhmmcSe5",
  "key16": "2cW9PXoi8rERPG3xUmZqKrYeoQ2YkgcLNfjPMnFkNaq2fH5PGE3oEjQDLANwKaF6REwAYYwUKDAJcysBfiGdBS7P",
  "key17": "3payiani2D9HCqkY68evivaabRrQxgF6Ux4Zk7wUgzkWAzgzkJAHKzCnk7zGbYCswPE4m2JGwnvzfmyJryfmffPm",
  "key18": "37Fos3E9VFpicQSmoMgYiBf9nenwDw9nwYiVWzWXwJ5mJF5eXbaienCG6XHwwuUsxwWwpQamkZEAwSB1QWDFo5Dd",
  "key19": "4YaRQcdHqNUo7bkgNonqrPW5HUasMU75e1P3CciYGhooThkKcey7hMjMYXdPdmJWRZQuz7Gg1Pxds996bDKBeKv5",
  "key20": "1VEgQz4H3s6KrsqmC8RyacsbvmPPEx49e2nUpiAfe6uyrw5CXWerQJNkGeK3o2FWuxtU3HCGQqjtz8VK8vBA5fs",
  "key21": "3DqhdkJUTCUbayawS8f1e5W3TVexxrfW8F4Hah468LXLfu2wEqQgv8p442F754n5XRMRbJCkeMHxRsoFeqqs3Tig",
  "key22": "PYv2D3KNBJLsHmUTsLiGvWeM5FfopyCBxy2jjonigUWmp6PcoYuCvP85JdfLbDnmKRTLFob32UDcA359CNGP7YR",
  "key23": "2NzR8ifviKV7Ffop574NaCSvBej8nhYPPDhkoxGRe2y3bR4qkWPHtEojyRGetQGCj9HTRvtvQrjWTryhMsoE78H7",
  "key24": "4KYn7riVetUmUahySLTmai8tMTXkrkWWyDjBmY9uV75UJgn2trrFaLRVedbLcynyyA9fzNC37W8XTV5T4VdNEYb6",
  "key25": "51WjBtTNsH75oDjAzDYmDRDipv3m7re3wNgz13AQtmPqUwU4QkiMSy4sdonGtJQPAERinQ4ZdWCXsxVhYecXrAkE",
  "key26": "2YBjruWktn4Ks2G1xwHTVdeSKxDsUArZYsBDY6eBcgRxXzBWUfzbPnmRxM6yDbXZuZJetz86H2pBXiACqmjpAxHw",
  "key27": "5syMtqqUWwUbWeHo1SQxZResgRDLuF2BeHX8AEJuHHjdShVy7icV2Nw31PhUu16Qhjzdz6VDqvuLKBGdUiwGS1yt",
  "key28": "64pub9GhmhVJpnw2URJRT9FwxsXGi61TZ3jCAMZrymPFVty6aZVShVJt2KMKNjm2441jR5W7J4akEi9ugSw3DY6F",
  "key29": "1mgP9tnsp51xGFmCRFjdKW42JCUSJgufCpA4DExfVoTRbTGm1cGQ1gTCDSLHujAK2ZaojT3gGZ6E6DZwJrH1tjg",
  "key30": "2rbyuzrw25JKDQACmiam3yE9CWMrbpxH55HhGxjHqp9xHgcand1VmNo9viYVJjDieJRwkijaBcpRHVTFCab7Rqmn",
  "key31": "SvFD9qGZxhaECpdSDjZDzi7Z9Rv4Fmmtp2oCUxHPZBprCcYgkK55hc5Lrduh98D6cxpz3aqL8ELW2bmxX8L93bU",
  "key32": "3541oxCci2A31dWanTzTKigCxkXMhrqysuaUJfRs3ufEzg1PUyUR7UDgxihqEnvjx4kdLFA1PmuBDPuW1byfWvfE",
  "key33": "5Dn8Vu4oXEsMT2sCSnnXzkGJDgtAMsSzn4M19rWM96DUKSm322tREuvtrwgb2voSiEVTtthnquh5TnXq5zNsr6he",
  "key34": "2VxyoZND89bLhv5qZ6FhXd7EfWtSyKspZz2HpjLd8maLFatskpHqEAzJkcVe4xXeuQnvxFv6MA79HTv9C8xyKQWx",
  "key35": "41xy5zoU77YPKkavEysdgFs35J2Gsugv2zJV9wNgc1Vmhb3ZA3o3bL1ZMsuYN6mojuik4apKmecFCoSRgPPsF8hf",
  "key36": "2s3CPaMi9kxJW2Uef5Q7vAP5pKM81AKccgP1HyJgeHkyn8ZJZEFG8r1S8hpPdssTyR2JPcQ4RQugrYKed9P2C5Hx",
  "key37": "56Yp6p58a7Zmys5VKyLdJ28JSdRT93ceMNneU2s44QpZPUX5ZTPc3BfSW4YeVSdDBN2ZGFiVQRm9SQvjqnnWqU2P",
  "key38": "pBCMCbe83FJUuWfXDagvjxjVZipxei1JCXNR5dKsNsDMLnmgzES6N48UsP6wnvxLqPQaWHntnBFqCE3bzJbBur4",
  "key39": "2ddXLyAQMp8UxG2sEPPh88k25EgzTvgQ5ipt5YUFNkJAdwAWz7p35F1UmdSiseXtiNDv965umDJyvKr69KvYrxAf",
  "key40": "2gPdXyz8Cd5j8vh5d93YWpYMhdkDTfJTPRoM85HEBApCRvtRdP6kc7PfXq3UoxLDxipNo4iS4ZULaeM8sepzffNY",
  "key41": "2ShZ65QgqLG8PmhnrvkzTDJvPybT6Lya5SxQbRU1GkNyopKVRGcAwewtbDmNuix19zB6VW16AntauxnXB1QPzDSs",
  "key42": "55R1QZrYFs51zGdMkXnv2xCRXQGZxoRSw4CcmgBPWWABAi5myMkfs5cGX6pGi4daTTaPv43BhsYvBwE57qLfjk41",
  "key43": "4qEaviJ3oc8AkdGikLv2KD6BVhT3pFQP4gV3MQR9FkbNRjYNgh7BZyWd7U87Q3gkrUY8s3z5kYk9qHurYKUZmSES",
  "key44": "3iksznndkXD8UmYaa5CGpJFNzpqmR2WmazETuw8wfLCGb1765y7fHgaSGCasaFMrcGg5ewab4CbL2kJir56DiZnZ",
  "key45": "5jHfxUrJJMqoU28dMTmPjUSRBA1TuReX3FEZspkBbjZtTfvNb761iUQaCLW5DA145cXFghBukeWW9R8CzKSqBhVp",
  "key46": "58euHK1varQc6uKRB9GD38YiUHcJrTsPCxQEUYPXgwb9cwNet1ewidLSyoMFXNNXPcmzrDjsuaS2aeiCqWWSBEqo"
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
