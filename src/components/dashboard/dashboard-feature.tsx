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
    "3rmG2ueSnv8N77Dy1ef9Dppg6Edi7vCdQJgTE9bFaQR44PP7ieaepQgeCuzXZ2QjzntzvHxt2L7Kkc7ht2nGCTVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsN8HLEQGpMPj7dQgs6uA2C5es97Dvh3rSPgfoVFn7WAxRTZ4sC1bRxYFyEfSYA4fWyBNrf2MmAkbRKZaNj75Mb",
  "key1": "383271QrnF5r3LH9BQFLnCqPYz1QhaiUewNbMa8zrVVboqm98SYNMY6N5JxDiJ1veXD254XutDQ7VKHtx51yXAe5",
  "key2": "37sfAzNpMJ8QP56foPcLoaTMoTzBgfbHjb7CHd1dHwy8Gq1e4MNEPNkCr7JUu8R9RqjgeE7gPFE7A1pvdg7YrQna",
  "key3": "2eqvrsGQTaiLGaCQLsDfJPJw4juCRCxEe9XnAHggtZYq7UXS5f3NZhFzE7q8Gz8FCH5TWK18AwQFLJ8bCk5RfBsS",
  "key4": "2AdcvWPuXRruv4kRH5YTLFscE86btyYEy82Wat6rcc8E8611tzSzuyD4xQnLEmsXBomEKh3sf3vNL2WdbGqjLwyS",
  "key5": "4HqCKeML1C8Z64qBGRdvspag3CvXNRZJ1SYw44jsUqa6eapBpMD2DgL5J2ZMA5SDDdfD5UeoPFsq9vm2y6AHiTAE",
  "key6": "4hHMNfW9JtMDtZRBEYxuC1MwgdqXHDMtus6bzY2ZaTUUHaSHmrhhzfp5rVBtqYGERj9zS9dAek3v7snKRvkx2AZU",
  "key7": "3raeVsTVYE2diEb4o4gW1o5sEfsZrV9ESKTiNLJsq7sY1GwZrYQLi9ZWqhTvHG4zazPzoqSiqyQuRJ4PADdpjF4a",
  "key8": "5DNT2ftk9HPX1rwv7kBkCH8dzTXjY6BTQQY8WDnJqD6ByQLmzECDyHkyPpkWNXxUon5qP6H3kN2zFfxsKhyZCNhg",
  "key9": "4aui5yGqR1U6JGV7X3DzHNic7gTvZSgsEfv7ufRiR8APfGvMwZko5zvrwgpHKSp4CSBfZRgXQTf4SNNAajuMaWPK",
  "key10": "2oEvmdgBpGFezZN5AuLeWZVrQPdWjRWrqngRE3SfQ9EVGcXHMNcuLzEvzbu4ZccegVCvBLvRPnM7vhbmhTar9weA",
  "key11": "jtBMwdQeCNHr5y6jjia4SdphsosZZTQnUsgZi5p2km7MowZZByPvEokdKLMS9iDDD8D9hVeLvzP1YyQwbjrJ7px",
  "key12": "4srDwyFVaivpHL78xvBjVgCn9Lk1xh5Anrv4xGhT2DCPPAqcpwuPV1o2mFs4urLTDVnN7QPrx6UBmwM5rEBw7SeX",
  "key13": "3hxH7zNUo2ghDShBYkqriiT2MA4V43bcQS3mwzHvcyWvUVUw8MxNfLKH23tqWgK1f3siaVm2qxiNrwG8R2jWY4aZ",
  "key14": "s3fVcoqZmt2adKSUa6adFdBysqM69arvzAFJy4d7oiCikRVxbw8jVPSuJHPF79UTdNR5ZnBsX5u21ENwEoH5EVF",
  "key15": "5ki9CAVqEYXGGAwS75htwJumviAz6w6CaWq8QwMcSrSyhxHMg1gaxKRhp7kyuFDhUU9wiaQ1aosxcigfWt5Zvxch",
  "key16": "17rSZfBKx8mUwwZP74wnBMk6XLxN2n83Mgde6U8jAg94aeJpR4y3Da9q4zR2xkfjmSoxWi31Ay2rW6AuVaHecWj",
  "key17": "2LU7Jomo46W5rMWXHgGtPdsMXJmomTHyFWRVAhZAnJxVxRVhCbBZbzJspuw9piuiPdeuQjt31JiniGBrP67i6798",
  "key18": "2kSpuEB8Ezqo6ftM3vYoEMQB3BTxdwoVaV12zf98tPWnzedCZLAt3TiFbDnS3yv6n6sd8veghh48H9Ja9hUQTr3u",
  "key19": "52er7w33zonCjXZPteRmd5CbwaLrPC573j1X5mhDbRMrpNDwgNh4V9LtzEzNF6rtMLwE8rinK3vt49QZHUZUjjmk",
  "key20": "4WLdzXRCSLThV8Lm7ZkesMdNHwPgPYYPwpXxARoPbtdEig7zDhYkf2RaFpzYZq1UeSoKRKdmLbFVJriAW3PUkfMg",
  "key21": "647moCQiVCYmzvgPickTB2QcfzN19RoLj9avmNniXXUwrtoCLfQ5EJACT5MChQZSg1WmyaXA6Ms1d8BbKxujhDiY",
  "key22": "BFPGvrZfp8oJtVZyowvmXh4d2c1gDhk5Y3VhhJn9hqCCU9z4w8EcoxiLCa6CPDgRJyBUdZ6oKRm19u2WHJscXhb",
  "key23": "Wc6sGtBFE1XGvGzR2e5PfPAzqXkZ5bPQAbpDMiKKQjRzACdjyi96nESBZ9F2Lvdi32oNE4MxBQESwqFTtAuUtDb",
  "key24": "4ULC1sbjrrTpY7wKHYLS2NHi1Nn5ZLpEB11jBENwMGkhFCpQi65UhkZtKW7WYxRkHAAntnAACek4Dk6pgAzfYNTR",
  "key25": "2ch3i8SZD75mZ4pajEN3W3qx4fjA99itD79VZNEfuW6xs8QcsXptB18L6iDwbkGLHcaEgArvzSVSVqhHjFhHaurg",
  "key26": "38kiZceRrsyAP1KQuV5SNeDvCvo3vJBageoFAiSnXJWCWWfiXxNsbdveEazU8e3S9gj2AkXTDXfDxKakQXHNsUWu",
  "key27": "35HMegQfFzrAYHX2RPJUyYJd9ox1TcPvBfwn824udYqKqUkYpxsdoFsScySN7X33jT4xKUbPPVbkuAjHsML5mqDM",
  "key28": "5MJd2eN1xm7MxDGV7oc3BHPuFVZyLtSnLwsuqbnKyxixsL3pP3JJXrchgVGw1zdTHRXoL4x2CZdNPopgnCjti4wi",
  "key29": "ZyGD3nuRtT2NABJWXWeNrzMMSRAPEYT89q2gEgqWgoJMPyX2ctYkQ3Mwp9gnHBNLTkM8RsUgwb1nG9Kw71No7ey",
  "key30": "2p8TUY3XauCD62Djo1YK4QoysmiubPx4dkAeyGjkYiQVtAZNABWYNQuqmszFeJE5RkZ8p15i5nZWb4wCZmKdg1xC",
  "key31": "ATuQX4nBASg7egUmZRhm4jgsgjg6QHUTx5N9rpDvG55ZbLoqhsMCsAKqKfiVRzyESGKWkJhYwP25wHWiRggnXqo",
  "key32": "4r2WuDTtxqWpdMC5aDS6tZPLa4EGwZDLJPGyRonLcQXwPNKD21rsbAcnCgCKWtxigbRPYNjF49fWLFimR4fYwpFS",
  "key33": "5hSeFArGN48S6b7CSerG4w91bwGA6HQAbpmpAS4ad1ee8BmoqHEwRQXPfQvXGLnhsHmSibDavWaqQfLCp9nK4wnz",
  "key34": "5iDW8ijK4hZyWx2gi9SWV8HosYpz1kdqLyuuiq3LdT1nZxFFKpsewcz6YYkoUUqPtnjkK9HHjWyx3yddRyqfyZ8u",
  "key35": "2wQNrWzn5tQiD9jJXDtCx6P4rJjCRcKJywxCz28cFQ8daAH9cWArKr64uUxiBpaT7agLXUfRU5Cvvwfr4pVqZ4rs",
  "key36": "5emVShR6WM1ZPctZjhS8FHc2RVjmPUDLjDR7uYcd34g9wMVhoHJWES7cDpeHSeWuheEn3zmn2kMYC9nvWyYP6FMu",
  "key37": "3A3ggvjvTiTancLDuSrYAXwHoGzGEs1a6vwb6WeU2SaRYZ5Qktgxu5AMcWhqBftvT3HggcKt4mg2Mugx7eBAJyZs",
  "key38": "2tF22JpfDD9HzdmB4M3tKpTigpt3j9W7DffR1zVXo4LjhTXbTbzFgathg9zcVUYwTEJSG3J1oR2MK2gsoDZ7iCYh",
  "key39": "41siP5rYy62vEfpCFHrBaYw65jx1UvvQcJpf1Wm8oDFxa2MmGJ4CXscraFXMdFXUmwNW14AEkakkF8Goa89NnC89",
  "key40": "VxEkhiHuPxEtHHvDE1czSynChqMatqvdSTzp7XgCaSVUv7VXmYC4uJSBQQnf7vzcH6Qf3HfsFGs71CYSwmwkYj9",
  "key41": "5KNZkmoYyfnaiTXrKkvneUUiByoCVrgkyC3zCmMzmGrVzZpmB4BkjoThrjGLzm4BpwzJiDSJFQo6K9vhkxMgGZBx",
  "key42": "434yti1N5yZvFevaNK29eiXk9M5A728yvw5rzyNwgAPVfSsYXGk2bV1n1GuG66nezBpaRCcswrSBBZzZ34BdH7rJ",
  "key43": "pUuG83HFstujLYBz7CtyaTHcZvAfeyxpff8eBDKBAx3b1abif1ENo25416Sm6w5ZtF6Qz7aVYAqoWgUkikByAAd",
  "key44": "41EtacjNe1pX9Nyn2ZsV8wfR2jfDT6UqkGYpFRQ2Cmj5J3XGmr3Ru81ze74vNac6zBjyu8RHD7VfpCvBdEyED7yZ"
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
