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
    "2xAN8VeSmYAJjae7cmAcHzjm88FiLF6DvZBk3zPtHygnzYGVv2bTe2R8pMzD8ZEwqvgxkHeFvdq8driST3CJTi4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYAxTCTLutbFCwLqW1yWpaW5G3eeizjznMQRHWR3FMYXAhGqhe7X5QYT2BpUMntghgbbV4Qf5ShXLu37TfqGK82",
  "key1": "SnR23k4gVe73YNkeNGUy77rMR6bE8bXJfmtA9iGCwgrqzVrupsUrxw1Qom2Agn1kC3FFUraqXF88pSRm8d5wyh8",
  "key2": "3s8GpApL6BXqT1DG333Kvparrrvtxzpd6ej3WzQA7webUnMag4SBhPcit3Xygwv1BDngbg8THMqDDtLdoreMKcK4",
  "key3": "4YjiDn6rcX5DdHuCJsc1Ltyk4eLzKBhHr5HTPWvnVNpnuY169yZHBF6kPYyLEcDJ4qu5qzU7z6p8qGMXrNyg2PHy",
  "key4": "3A6xB6BCtcq4C8HNx4aFcEMeaSy3cZHZySfyhyMrmgsUUMVECs5SD77nHJjrxJqgJCS1W5jCB6z9YJ9umhPbEqgk",
  "key5": "3F5oBkaa8s4ncmF5B8WAh4hA5eNuabMt84ArK9sTzmtC54y8sW1kSiyhyNijdCc442R62qosxJjsQ5h5XNNeFVDu",
  "key6": "3cwJhSErBtdVHEQyf7CLv31FYu9SYXaEhsksskV1u4RbaP7NwnaZFyEbcbJSfLvcqfuxdexTWajpGR2PkjyWVCZN",
  "key7": "5ZT8aFPUwtevfKtpL8gMGViTAdPdQL2p3f1hBHCNhneW2pBcCfXkKSQwmmoXn2j7mXQ46pdYQMd459cBW1rA8qin",
  "key8": "4BEUaaYooyf2Fy7dJbKYCUVuxq88dH6o9Pr5k4tN61BhBieUxaPE5c5gKqhnbaSqShTscxYmUySdtjSXJBQrgjrz",
  "key9": "3LcKUXdQeAsMYDCFTLS6SKEfhfRx6G6ZSLvbNBruvrmZxukovZwcgs1x8wfz3ChrAB3jP2MCDBDzq974U38maWpC",
  "key10": "5kA73QevJ9EGCbLdmeE6k9KmBSqLUAXhMxKPpT37X4Dv3STEYAfBcehKdCRdp2vjQbq3n3MYsDgbRAMBdDfEmE9i",
  "key11": "4nFUsNPJuwKW1iCFFGMaivYCcXvVyZheN6DyeyXS9xA5aGCjH32qJSLG2mYkNYm7TZmS8a2Poro8zvhWG9AZqeiM",
  "key12": "4jKddotRkLxDthYMiVtrAuYmZX2fioEG7Ew7KBy6JSodeeKY5pEUDVb8xMYWygcpMvpDhWgXGsHPrNd8rWEVSMkn",
  "key13": "54SoM8KSpieLEfPtdishkhF9ibvPD1QMYZLwh9ni3oeNTMeTXjqSQDP2RRcWwovx24Lu42akC64vjVroyrTHYDFA",
  "key14": "4iDgo3EpLEXQ7oS2tNURRNjGwkmBjERvCt2W2xf6TkWxPqgfHvF9T2j7Ttw6GqmGaKqTUnR85aXxQiXwsGAYWPMn",
  "key15": "4QfmmZB8EQiUGFJMDsTPzQxXMCcnJ7joozrQjPkeWWsUDSuVJnFz4mxDSEa1uy5hd2ySoeTPp7ELYtQcuZua23ZT",
  "key16": "Mw6Ja16wa9Spyk2gvQjsG6RJnZohBoTEBVASXBN6EKBuiW9ZUFfQntJAXU29Z3QyCRq3NMJCfNugN328tE7uGBz",
  "key17": "Q2vvcP9kMr6YktBuNJmTyGvSrkxdqwpeeVhYfrxxSXdSf9ZGLSrLTBBxjPovyZytyEEofbxpvhqVUw4icxjLEjN",
  "key18": "5QRvuzTksATpJ7WCbFHVUhiAjU4hBYLsgNndNT1C2D63jGZDXCvmnz3XuqNYmkFhb8ADo92DPbNGpgDpRNnneF6M",
  "key19": "413dZYL6tDiwmD3wJpKKUHRsFNn3mzPZkTWZzh5eTgUjpJebJqsWKaFRcZWThJnbJi9ZWJNHtFuy6mTd4RkV8sMB",
  "key20": "4PqZKUuvQCbQ3gLc9m9XapNTDVhrDJeEM9bSu47sXvNQwT2PhJ85h5yGFBttw85ZxEUbatguH5cBtYG4w2D9D4oq",
  "key21": "3dFQ2MraHYxUma4RE3jjEFWqpns3HENu8jU4tiJD4wUCw8VxQ4KYdH6BFZSe7LJKncmD7goQVdp373c1v11JYRaW",
  "key22": "e5LTyQ1ybXtSWo7SL9YmQ5nNwRow6p7WET1En6Y7ECTHDwA1L4rYyM7HhQKuiZ6z3NKVrWV7i7NnX6BkVMssbbU",
  "key23": "4ZWYZr8gfTBffjHWgZ7Jix7LRf7eTMVEhD8yShUGqhJjPoeXQWwrtb52BMrzZpTqfebpL1GJ5tkVamifUhd5yHty",
  "key24": "2scpMdi1r6CA4AJrJb5BwEEn25wuKVnQWH46ipiQX1XTMr58RURUE7yiKj8Kx6cADTjieJn2chyvRfHbFgpxx8EL",
  "key25": "4WNLMSGYxbV2a6sAyvhJPaBW2iehG8hHjgv27nvToGWWP4mbi21pmEyzKqefTwwyNnAjmCmFwuZEc4VpMAcATji9",
  "key26": "3G763TeuHZGZVisTzdrgpeNPAzJbhPcXxGXsZtUDGK2UKXvAumkYR2R1uimhSBpbbwp9U3Ys77dtSJMqo5eKYExn",
  "key27": "4oFg2HvdHFq9SXq88kNsTtvw5qf2Sort6Z3yLUV5F6Ri2uu3QzUjosia3KXRYPzMejE7aUzC1EGdaBHMftqvX89V",
  "key28": "4ZGNgLYkGzBDDbEjNicaJpyKbPKYTSH65ELZFQtsbgmkS6r5nZQ7K1R7bZfB22DPT2Cxpn3pMBWg2DMh2pTT49YW",
  "key29": "4EzSw7GZsC98WEBcoCVBgeLY7m3KQwqfmtBFAsmkScDdnehBaatEc4Vd3tvM1FufAvnFDa9WAuzy4LetVVmygjE6",
  "key30": "3Ehhbs42vAaQJ9LnatzcdWN73egYouPzWbnzKoDBryxG1kTzBHQhM6CMPec7n1ZctV5WFCwTEv8jX9vsWiLbwxR",
  "key31": "5JZuBvMnv7FgGAQ1x7Kn4xKKKqZTHdPQUjFcsTHh7PTBuwWom5inaPi2ntHtEZ9UxV8N6QVRSKTeTCsgYvL5KUji",
  "key32": "68UvGn9THabULXQLxHxt4Uz6TaucNvaUcZVe8Lr3PXviuUvXL8dWnBxoNvPQn7hNuVy3nbQmk7H9quw4bKb5Avn",
  "key33": "7M9ZtLXavuEukHcyqvATpr7yTvJAg4n9FaMLb3HVVrQ9FoTBiqw1hbZYKpsgUckRcy8wUE7JxAt8VPJb6n6baF7",
  "key34": "5rz4Qsy7DL1Sd3VXP13h26Kvi7zbPMATKMrBirLhU4GUuYwHwfniPaeB6VZuQMuc23bK9qniQzAwygAVZV6AK3sB",
  "key35": "123YT71sBkwjH6RzVVs2cpLaL14xkZzzq1FWzb99FfVQc2K3CXHS7Xw7zNxC3pq4JxYc8xw6a1zAQvFLz8x1i8jv",
  "key36": "4tF328baSyw1wgrtfSwzvQH9wDL5BJKTxdpy8uEYC8a5B8U9TcvxKGSNA7o5uWHbxCYr1P9ij7351PVPS3RnSg4T",
  "key37": "4a133GdtKoBMVgo7BiTAYNAqXCSoUvBKhXSrrFB3ogaF2iadtrJCHXNGBVKBCkWqD4dcZJNcqRVsBcRvNFDmwid4",
  "key38": "26HSDEedDAhcjctGqf8rRmD63VReSJTmxMs8TQ7TFMJZACwRGPVgKiuZshpyaDaZ4JEs4RmpHZidvP489NxW4Eox",
  "key39": "xrKWF7aA2pW1RcagrgqXpZwJR1bsdrJ7tR36RLdrWLHuzoqwGYDkDKci4bVtjXz6aCRkHp2rjcCvS2Np6yzCVKR",
  "key40": "3TZgC29bYmuLzyRb3vA4xgVwxBN5MoR53G5e11Asesr1oZWz7z89JtkbQGUZoe4mvvzCKRptwbqRrwYGbjeNJLKq",
  "key41": "rAh9Hh3nTYQRHsQpKzXHS2gg518hzDf3MAUQzjLmwoDbmKTtiygKG5Mev3iTx7ZAP3iPxWPR9CTn4RiAZtQBzPH",
  "key42": "ow8Rwg1TdGRCKokbCbHxVv4w92RwjYBRvRPiDDencT8XY5HVT917BZMhDuBK3EvnUDjuX7MMuHMDMhUaqYG4kWq",
  "key43": "2zYrazNVgmkSwRJUAc4B5BWmXooHr4d31Ye79gKXpw5DNy4Y9P5RUr2YuyzKfd7qCqA6JxAwrM8KttPBrtNBEi4n",
  "key44": "4123nxS5rQUyLygTYBLAYx6x7VpMxnt4QpEjMi29BFchxZSyQAHJFFEWq2uiY86Re37SG4LujqJdSp7KQmxfZyuX"
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
