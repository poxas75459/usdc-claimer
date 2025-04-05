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
    "58CagwGQAFHahSN7UTpRJB8i6TMfuqCKNkTY3V76SnjLAMSWQ8ZJq9jNYSHtCqAnqvNt7Qm82BSf2Eg8ooHrFs5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQHGBFqKCGtdzfe7781Wk2Mm3gxCpbP3zMVyzQYd3hT5RuRrbNmUvQt1ERcJ5LGaZ33TYa864FuH1Tg1jqZC58a",
  "key1": "21JGYkaHFve1cuJHukw8wQnjfmcnWUJZLVY8QNQFHJ2CfYS3MjiPs1ZahyH1BeGpvWe6SHhPoeXq5pxXcU7HosUp",
  "key2": "5qjegEZzT9cLcbpsY2ADwMU2d3KLU3raVpz3166PVTqyb3za1Rk3TfS7eMXgBG7D441AdtWdZzqxUn8w2McbMNtJ",
  "key3": "2HbSMLgDc2mkwhPPiAdFuK2RcBMoqmbAqKNxLh2ZkzarjLtcX2JGtYLjH9RaAV3RLeaXJHTpAj6M61V6MTGsuprk",
  "key4": "LiGQGaXBzJwHtUc2RvmbMM57fLMpYytDqkZrX35bp3qe3T6yEhNMJ22r5bDdSSDKx53L2Xg9pVgnhBJxPt7VAeT",
  "key5": "2o5Tj2eSq5Uv5zMJAtEtp3YUKrZiw957JzQE6S3qeqmgMPZDRgXNmt5awMGFDEv2qfuJjai3xPsx5ZsRyoSRz5vR",
  "key6": "2FMe3xhEcnz4QRshpkHKrG2q416cNzotMbsBhS3wfT6YVTRq4ABuSHmLnARTB2ssTAtTeKak7hELJbMp2MGXpBDb",
  "key7": "2aRV3ZhaAuTmfu5DsY5XAv3SuJ1xK5PoRCREiANGL1sjRxRsQN9xpNgnrDXXc2zu3dXWSbgFu9PeFhJ2ooNme1B9",
  "key8": "54LE7bRJ6GVTi6PpoKa8yDtvuxmcr5frHgHBJ3dFvXzMhqpTAanPpUywTVEh6GniCoXN5XdKShSdg3t3mhCSKBL7",
  "key9": "PmEANcHRvJ7zfyYGrLtdpZt1EtW3o2qAUdy8RUoNxbthGjo28bvKTvACZApKq9YX829gczMviVBeofdRhWE3VRZ",
  "key10": "2ie9qFj2cBqAcM4N7PJUFJZ6JTi6r4a2Cdm4srp5Z5NMKXHtf7K3BMjgn6VMpunjmdg1Mcj2LBxUg2Gqr8FQ2Gxe",
  "key11": "5SXszEkr7rGQoHm3h328x6fRvPGuoLYWSBQikr1B5c9ZseWDzBTpXr4dTkaoiThNn7UFmP59HHSybutFAQvZKwoL",
  "key12": "GW4f6uYDvyyU4vvVmND7Ft1AGqtEptrbdo5CsVPxthRTkJb2znmf3Xe2h6mV2FxaRuxkFcgTXyGgzErXtdaRSFx",
  "key13": "2KS8qxWbf2vjUXNbbw5vT2MK2cJotf3rr833FkswcEpe65rFjuo9X8FwdBVFAMy2a7jtWSespYtqW7tSmnBEVHrX",
  "key14": "3BeJru8a2p1rAyEfBJuNhEfP6u35mnRuV4TotgSZ7xbH98SRDudhfmLEFpFVtp5Woard4g6ftLFjDN19pk2ootg6",
  "key15": "5JWn3NTpDeaRLDaoEcp6PD5ye26w1FTbRjjf3wY7JhUGkTbqGrdveRE2HkzxVZa7f6w8omvurHFpj9miqXqa25MF",
  "key16": "5ssK16thUas1uUgEQChUaFiDh9bJjnywQauKmc2uzLyRgVMH849CJperfwcJHy9siKD5juGmP4JMiM4qDeh1nyA9",
  "key17": "aKcynvERAYRkk6pEDSpgnW5Z5K84xDpVGM2kAxG4tAf6MkwLZbeWi5UQCawwk8NFL4y9UP7XLG2LFvEm5PMUSeD",
  "key18": "4QYUHzuXK4bjMVBFEbM5ZFBNM4JszcX3JYUJnxnwfXko4Mt6Kq2d4ZVXgXvY61aKwak5ahP6dD35V8y3z6CjBFrk",
  "key19": "46fELj939ktwMg7wML7HY2MRtrChCpxJShiE729oS5WGddNwLkJMGRNcoGYMob6q65Rdiy1HdMjxouTioX1kziQ4",
  "key20": "2Wp64zGfhwHBPXh65xdWKrfHUnsXGEi8MKYpKCHqTtKzz8iufGwtMN5mAPLmff3TCpS1bTZkn4vqCczTi1NczrBf",
  "key21": "2RMeUyKM5gtosPyJdLXNwrooEeicneQv1FQsUZk56Q3LFN212KLhrd65H6G2BhDpq6QP5vDHwR6AxPA654z6ZNoP",
  "key22": "3KbpjY41DnceYYpVz33VAzi4xFjjSfbshbzKX4FqCn6pXiq9Py3xw9DyL4fZPsmzvanL6cy6KJFHM811ZQkgdhhm",
  "key23": "3gWnxF6NW9nyBceWN28PcwFp4NkkMhBZTvMwVnoQdzGuPbfpXzfpFFACoVh4ptZ2Z7rGZu4NnwWMd54HxBr3Cijx",
  "key24": "4GhpAwyg3qFb3LaWraMjwZ1K2LuoyZK2NBzk3Qj1KS6uiDftQkvXSrXKB7jyyTTECVtaBhvUrNQsUn8Hmhas9hRd",
  "key25": "5E7BJuNYdN5cyKoQFTGDjhhFT6NsyvFWJissEfDNV8VfQigDbN16QcJPk2juBCdSCfE5WBzDqcDT4dfNUWy6MZMR",
  "key26": "5saPsEQwmM49VhFthawvD4sjyTcow7VpSXitaub4J4H4NTvQadGk5TvUZibokS2CWX4vAh4h1kaDN8yFQqRFjLR7",
  "key27": "2azAyfmwgVcGYyi2F7KHRvuG6Ycb7xWZG6fm6zJrm1M93rMEBWJZz6TpMn8qmaXTinmXAnEKXGiTgxUdxCycam2Q",
  "key28": "2fJzgGwxRW8CwTZUmsWfduTZMFQADCX9z85us1UHJgyzv2af7RBFXEfBUHFWyozBv3xkW2Z4mY9EQps9N13E3LBH",
  "key29": "eooKkBofwL2XsPGpQyH2qfCp1mynKcKWX3xLLaj7tW8td7kX6u7xs59Byn3ZyteNnGVzD81jUSyfA6Ju5kN2HdZ",
  "key30": "3aBtAcQbky4pnmnDvPRSStaZX5xQSzwkKkibvvEbJEbSLv5JUmdmEs2T8X5qtjNakb6mGGppfdyTqDJJQjeYVYmp",
  "key31": "5W2aRjeyBtYpTUz1k91DdjJwiKRDbE1VwgSLNzcrXnnS2U4KeU4LxFqJcm8qh1y5o4z1CsSAwTrJmqfoFDZGFLU6",
  "key32": "382AGKXgUxdewJ1RGpehJQPBgVEYyJkAMhoZQxBSa6B1Ser5Ytufq25z883Ak9wNU63or3CDWa6tBvdBeQRdgdyd",
  "key33": "5RRh3PAjM4iLU3vbVBMyYiQf3HdLBfqpbkr3oCPiCbzQTxGte4oSPpjcomCT5uR8GqXFZPJpAkDYZ3gCRkimLCJq",
  "key34": "ynVDEVQp3qRh73VabEjQTBW6c3mghZrLuXMwMaGAAggDMa3AoZqyTx9exuoa3Ys7hmysF3nhGHifsT1TibzP1Hs",
  "key35": "59TaAbAiCxaV9tg77fPMc87W7miJSWF7K9aKgTRvtxbnmCvRJ87GkRWpZmxsxd4sd3NjVqAYv4R2UuAH6H6nW2Yv",
  "key36": "2FqSgHvN6FdT5jRKGsSEPoFduGJYBowA7DXXZwAk1WrNKV9iRC8LFTGb5RQmfDf7yT94jCYjNqHMuyvq8PXDbWCw",
  "key37": "3u5ToZUrASpRzMgo2Qzdx8teou1RrxP4qs9tRmBkXomr2kn1rLcSrAgiHz5vWcU2qrUpAaMMUZ9BxDX353a5KStD",
  "key38": "58x4xQ5bvay7NWEEfdwKnkv3qJ41pBAHTsaEEyTFN1eBKhiBVZpZX35nsj8iQr1iVDLSAeLbhmhdCbWuaQQ2z7kb",
  "key39": "57necTkoWJSUoj1s9QVzpV3JFjB9ZY66SPddgS7za5Qmpjkr7UREdUni4saVmRmLonhY5mEN37sviAPy4yXp9sYT",
  "key40": "2ZvDCC3Mkep4wxeHQu5gbnynixBuhWP6Sqj8r7Qmw4vPxLh8evhySp3AEXRj61YTE8LWZnkpHdnQQ9Pe65bQ8UQu",
  "key41": "3nJrBRFnBdnxKKCB3CCBai7tyUxgKCZdnCGeBQSKFKsZNWELPesQV6GqxWjKgqZzhZVpmemNUWjqhoqMVvpnM5Nc",
  "key42": "5VFJgMPSa8oJ3d3c7BDTfAjhnvQdnqbPG4ZHQAHMKtn5CEfXGMLvEkHcgtk5Y6CPTPcts8QgMx4BKwWAy8hyYKRJ",
  "key43": "26tRjj43kD2ryXw2hSd3EdtjEAU4KEX1B37txheeG4sLsNtUnSRomQc3usXCWCtD2tJkMmBych5C6yX3A2bsn5M3",
  "key44": "4133DSdf7NQyzD2SbgwzuB2QERgCszMZmJzrt6iyKuaT2cUz3oJB9YXZ6i6uREkJ4tvsvdGKosqB5ZLdYV89gQRq",
  "key45": "2BmzAdrJhQE28KRFq797jVCynkFvWDSV7weXDX7hUyZk9LWr4tGjrC18fRbsDaJ7Ebc7vt5kjumxWdAdMKaq9scW",
  "key46": "31T4f2cDD3sxfTa8FuS59SyvpV1A4YAUJqD3nU7q1s2pXA1b5cTwSzkaLuMk6hvzaa75Kjz4YX1awbXozVSZPp1i"
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
