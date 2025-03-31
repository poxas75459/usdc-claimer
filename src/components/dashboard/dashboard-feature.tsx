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
    "5r3uvGtYyhsNSieXppA5sXW2w7zhZ17k5pUvAuxsNHdGW8PFhQRUPFmchbWQcrR98KBTGBeQCBz6hzak5ijYMvVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bLUyxsqMRR5VxDFD4zLCQqfDeRdVTy6XXs42akKFqCzxCjjxPVatyQfVk2Bn17ZHh9nvekt2xStsuTps6AEnPei",
  "key1": "5RBYSrhZuUVjRQzrMvWd33Ln1DiGmnUnnVBZec18S8QfmgkXgajjzJgdAYLZB4xGGcCzLao6XgcZ82EEoEspRQEF",
  "key2": "5QArRsTYjbDuSrPW1aqc5wZ5LCMN72YWsx458TB1iBSSPePjxcJBX58T1A5dNXyqbUrMHcAEJ6yM1pAVk3MVtnWA",
  "key3": "36jgT6PV89CSiawBRRWt6AqNuJxTS8C9CpD9goRGGutqsRzCeXmMXjca1Da89KV9RDKPrHDp8yFq3eRT8mPYZKZd",
  "key4": "2zFmWfY75USmHmiSDfBWV7HsX4HX7GxeUZWtDnzSmvQj1gNMdUmNrLKYq95mbcFXS3Djtn4UhbDXkwWXmZg1hxur",
  "key5": "q7mfhHXXtFDKiJz4EqVHYCTqJ9yhHEk7KSTvVH1pHMBVK52tTi87pSzGn8rEEjXGUZgphXRVZw1omVsjzWpMF9j",
  "key6": "2Dww4Gq8hQwLoqgWwpLtf4bYYXJKH1mZrAYmuHJcMKBpwVSqkSfUifDawgAUSeUyJhXTwFAHzwE71BMYYD4zDZjj",
  "key7": "3mM5nU7S1Mzsr7MjRxuicJXFnXdMSTCW8xp9a8fHDhYZ8aosFVWR9f6mPMmeN5SNufwRQecHty5XuX2oArxfhhdb",
  "key8": "5V85tBHvzumwwMQdDHaJ9TWK5g5vGyPF761rhLoo9Mr6kiMPGAQ1LdVv73U69PKnPyyN1BcSHWZfqhX3hi8ib79C",
  "key9": "3QS6dN5Yh2BpxvUwjutuekNsY73pyYp9gCJi45p2LzXcW9jU6nDjUT6RRRAqFwcTJnGcd1cY6Q85X5Bf7MLc4Bm9",
  "key10": "5DGufHgcDCbhYZhiZvioSNtrXTSn9GWspDkVxsDMoSu1DXaftw5VCERvvkmJ8XSEU4bi7dsG5juVGxpY15Nwjsk2",
  "key11": "3tPeSzMvkAvnqwC1FU5ZBxqt38j8Sxo1Xm284oTJrNnDikbhgAxyrUszJCLoDo6DsmjiNyrCxukSHxmP57vW4HSb",
  "key12": "4ySinenSwNbzWr8qaYVTN2Zq7JrxVP3fWkpNwV58fJY1QPm1ymXkuzmZfYiXT2KVH3PDuguBrwhXoSuwKUuPRV6F",
  "key13": "y6N36zngrWVLLboK7zrjbeyPUnwRjWiGZDKmAMx6yFCbBUakCQV99jXD41X3pQ8njwrLVNGCvhCnkjVcbP2TWLB",
  "key14": "5fhSK4hfGXi8ccgrf95dEbqBezZQUhS1rK2s3YjU5wgfC19QLpvYWJq9pmVcXZnVxQMUZfcQwhRPF1YgRmayH8sZ",
  "key15": "3W3QJh1pNqtSztQfWoiQ21SokabamHYjm1JCDYSUCkiwcdCJKZU97cicEU5YM6WBttA8Cv9rinMNoyi5bN1ztgJv",
  "key16": "5EaLrDYxCMpzpuhCiZsxFWEcB3RCeknxgbZF2qodjwyexinhGrfaaXX8UjdFbyC7CgpLvjgV9W1StkhBR84GYNBv",
  "key17": "5SaHpkGRGbFbgueXVqTj5e1zMynohrXDXPjoFwn1b7mdP2YCfntZWv2uMs1x3Q8n2Eiijg33hXFTGm61X5JGFymJ",
  "key18": "4cg4j1jnvUZLMSMLykudEVXCxmmfcejPGi2SARbNvBHRbjYqazmkQqiC2fiMdsQUTyJQeFUejh8uDD6Bb6yby2y4",
  "key19": "4hRNKq53y1j2oAzzbayUZZNoBt3YayK1vNU4JdHhr5SppAHGjF9zHMbW2uSzTLKuHYKgxmnWWuVF2m55xXVyJmzH",
  "key20": "4gWHRHwf8tdRn65FmXXZNdBsutHw1s5B81Ne8JFJutUZoS4i99Bj9LGhBDpAbPdweRSFMVzoVUnCah24UVgK4MPH",
  "key21": "4u72ou7N4PU27MvKYHFgemzBQNtprxsKHvTEbY578EffVEL9RwwZXvdWvyByWSXgz9BFn91vVMiWt9KNqLYG7V6E",
  "key22": "27fLaPAJ6mEfYHKkvgj5mi5QR2M8BBJB3PWhjG3BmUvBk1pp2yH7J1Wpbiz5CTFMrJDRz8NcYQkcb8DSQTEYPUCc",
  "key23": "2hJZBt1nnorVavsapZRdvpvaUAgFZsAY8wp2Qi1xHHoDu1aoP4DtdNvjE3ohXErNHYswYon4q16zVCHNug7V9LXJ",
  "key24": "55jxjoXWPJL5rCh3puyPsEiteQGLncCUbgCrVzRjKhEe7NoXrstfM8fhMqrnGSQz6C7TbAnTLbJZpqkwNpBiSVW4",
  "key25": "4x8LDuusARot9FqP6GVYA7Wd81z2pwL7qJEYNYdUFAzvKJRkSr3E3tu8xBan7ik6JyibF165eWQYQA7keZqiTMkD",
  "key26": "2QDFYjTxbHZXV8iDkBJUQ7tniemZtNZeCQvtd41cEDz6E3DyFHSE5TTrPn2c3MKDSP3Jqqep2byYCBhpWJT2WPnC",
  "key27": "gK9u4EaTXqWM93Ek6dWuaD29rJABL4VTPiwYDWauSbjAzJecTJc6mAUVPEP2rVgPCkHhEbYrD8oH5HKZuKwUUsG",
  "key28": "2ZKgYshDHFkcBrCgbCDdj1j6kmKf5YCoL4VdmMVNDvayEh4oA7qzRHaoHwRRdKS7WRRjyEpok94NFAAi1bB71BkV",
  "key29": "4hSpbsDeiQByzE8py4RFHy4pjUWnwU5E2w3U7iASHHqusPGX2XcRWPXBXAD2Fid4H7UdLxfoBMY7oX9fsNVqBDEL",
  "key30": "2SseAoNBWR4y5oqruatHCuqJnXviipFRaAcaYmRv5PvM4HzDXjEE1mfRiVQGdytpmTNKHiDvSzDYerdCSRcgmaeT",
  "key31": "4EVJP4aLk4ZY9su8ouDBchkbDTADJ2o7f1RFsWijcoYYEaYED56HGjWYzwvJkkX1neqJa2WXxAth8QyjC1FHtuBu",
  "key32": "3Sw5uobf9nJPkaxXuCCP5S4nLgQeQV22vySTjWpUhujUkq1zvh1iwGofWqVjUzY3jnGMe5Hz7YQVd9eK7JEK4xzH",
  "key33": "59GkfysJWVnzY2BiK8CTBDoA8gDLeiZSzxRvYWbLES3cBxJki34we2yCNgXZ3VdbVDHGxMdQv1EkL9u1gbtcYa8U",
  "key34": "2y1ss8rqGGQb8oqRAQwnXE4nbFVQgTJUiSA1haehwV1Hu5ZfCgpPauiFaoUX7ocYDFNMdpTTg6NcTsptZiuEQHzw",
  "key35": "2Tvt3Pa7AGSuvdPF2jGSNCDas34z96QGeU3P4nWpdQvZPGAcrKxAFnX99ZjgcgEJhVKeJNr1EGZibhaNUboDqrfL",
  "key36": "3KRDvGFdXNSnF5LSuriDheJhrm87K23H2wEuoCKbGNRkSCyQseVUHtYDSfVJdmyY6w8ySMYZWco6jmv5D3fRabXw",
  "key37": "5pPJLAjpJSPQ3Pe8hs3vZJH6yuEMicLY4hiLSA8DyjeW22fnLjxqMN8TZ88uM5AhCrVZ61Afa8NZY8EWw2sqjfuf",
  "key38": "54mmSP4vNiEnaZN7zXK1yk8fDw1zmNF24fkgpAvj7noy7zVxg2iPhzRGSP6n5JKzynVPTvTFCgKV9tDgZ1CgidX3",
  "key39": "3ceyobe6mC7GEQfduUMqnMxoSXEYUMWLNe7BmPJuyQVMf4KS4tmD2Jo9yfdvJemq8T3DRBCxXdJPqwmrhqxJHSKp",
  "key40": "3mJUQtNHM1fzXKEeLXgveQhrZV7S1z8KfdAcoAfL82aqmM5BBicJY2SxyKrcbEA2ZivX7KBMsxN9pV7riqVAhfcQ",
  "key41": "4X23rUYhcqguX1vtEUbQHkoLQQjoQAdTE8ZTeCyWHeT91BXBUUTiZpWBgcGirg9sDKDL792kMPd6HPCWwuLdH8Sd",
  "key42": "35M32weRHpCmshdquRG7N3SrcB6rRPdds4Je5TftKseT1K4pmwrkQxuUYyew3k2A4MHb4WZAVdAxarqn99A8cevR",
  "key43": "3t8YBT8Wcb2ZMXgLg55JSS47F7h4agukEfDjZjGpT4FsTqGRNBVeNC87q3PGvhgrPe9wdYyM1vkai5JGhqUyDtgo",
  "key44": "2nmJqkdNtKfBVFG3RWv1kKjuJK21DUm5vqyRJfZpjEP7GdYwH4dbdgc43rL6oHnuAyrCb91n9j8gXh2un28JwSWm",
  "key45": "JCJUDmaENh9WSvN6rJaZYBEK2ftCwqpr7vi3kuby5Q2Tn4uEmoTWHVduKZ9c3ck4epBUNf4osedjN4zoGggnM9j",
  "key46": "5ZtZ7f8XmEXhHhkSd1cXVKP6BS1QT79JGgnHw6NRonawTGemAJWYeZj5pi8XJKz1TRdL4Jq3Fv57Excg4vcX3kpZ",
  "key47": "3xGsd7NTzVH8zxD1NVjVsfSF32ZxBqKoy2Dvqenuu8rUaeaGnE3tUmvNXpA1RCBAnsdruZrgSaJHGf2o1mTs62sS"
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
