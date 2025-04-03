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
    "4Hr26nLQKQyEGR98KmC3yfL8rqhZ9Wtx2gt3nRVVUdrQcCqRPr2THKUbvewnde18aChMYmxbi9tYNZEeVzw84Mny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5Kcn1nbpMkuGWxUUnZbKNgfxu617z6YEdNoExetkrPm4Gvhjt5xffCyqsiuPiyGgbxeQRo7ynw9p2pGzV4mgyG",
  "key1": "4Mj7VQpVL36Mv2jKSWeQsogJcTzLmEV8QztxkAhUT14UQHFPwq8CqAG42TWJS5wJbebtSdTMyUs2PAJyMzg6LMqH",
  "key2": "3Usz4HTKJ9tHQfhCpRcZywn5Lx93a7Dek5zVrBudS7pUcABkGPRUxAVZZ2ep6vYketTMdeiW626gAXnEP8ojaSPN",
  "key3": "nRnAcGGJAj8UZAV5Mt6QwRTKiXkMrtbcEqPAbvdZnmAXjgS4Nyr9SmzTSNjDZK5z5MoMk6kfWWpoSUUqVcAbRxu",
  "key4": "mq13WX4Fstb5zbokGYEHmTYzbmjUQVSFydBtTbCC7KZf8cstQPbaYuE5EsJtaYLEGkzmd8RVXkLCL42txmdzqwF",
  "key5": "2MVPcB6uoAEUZQPT1kAUH5YdeVBtQeaTeQPiSGobjnXA6ZpjWYXECsQYtgbCCwYL4Qzf2ju6rKihWMbhEq9455V2",
  "key6": "5Y9NsH4KvqNyBD9c6KAFPURR2JvFfKncDwmQCfbymFtRtV3iACavhsKDkxEoTUmSJjinvF57xqVFEMnddAY32oko",
  "key7": "Pag46Ank3yP41DiBgqZ6LgvyanzGFR4s65wAeaoWmqifA9PYrma6SPqYn5P3VX28ZwDot1NR3QaUYBUxqrtfBbZ",
  "key8": "5bLGe3iYGtK6ribrxqLGDhoD8eBTBpCSLxkGJ5uinzT78dqnVHUKY5u2E6orHVuXmYakwL2yxfp9DyKzDehVnvkn",
  "key9": "3MRjReMZiXqJgzwUZRycD73diTAVs2fEt14WbHxxfkKM4sAotnFN8js4ptgE5ERPW5iCq1AEDniFwK3kSG9Y4wKo",
  "key10": "66LoS5Bgo47qmksskZDyPatbGCFEpzgnB2QV9dAx1eYAYVmGuFyeqSaS93wSapsQJCrCinpFjJNPmrDSVRhxWdwg",
  "key11": "39bZwxJAAiy9D8ZLb5UK1kxrQSkeCWf74aNv1jeEzuhXDCZrd1SSWozpkdTgmp1JXzneWqdTcFqjpo1sNSztFsxf",
  "key12": "5QxHh5dsk66dUs38QWSuhepTYUUnAd3X8MT3sJ5XEX7YX6njMdSCcnWuCY59cokV1cMFfk1uBsVHv8SwJFBXgSn7",
  "key13": "3CWvDRnLAQbgrL73Y41KrRCwVw4YfhSLJthZXuC436i4eusxuFT7Kvj5mRmL4ueGn4JiDUu3xiNRTY5sAEx7b4Bk",
  "key14": "2exV4bdLfLE171KQu79oMkAdCQQrqBPccN257aQv4aWZA8t6psGMzMt9Ww1Z6x3oh6JTZfuCFZUcmsLZhwmmPKCR",
  "key15": "YGawf6R7L6ATMxckXXt8eQxqbvaaK2CFYtj6LRf5ydhhvzNcPbYAZuBVXpWux68oJ6i3fQ2Nt5u9McLt1jgL5E3",
  "key16": "299UEqMqb5vBHKxrsZgEgX5JXbS2ZRZPfQaqHspFYqoHuKSyjptU7yhwCswxPr5vNn5UqMrFuSEPssuofxV86hBr",
  "key17": "5bVf2GiYLV8dwwLj1H7CQRgwTD6W1dzDi5gjrq4b3xpyZ6Bptmz7df7HKginhUqDtiy6WrHKvNxB3wh7kRC4dWQX",
  "key18": "2TqyE5RPLFrNfe2Wc3VeY1dxeTCFrJcddsnLTjk1vM4jRYivpf7tCC3VLKxPr4r4aSfzBTZiSqqQaGSUW2iebEts",
  "key19": "3HLgYrpMhi3tyWUA16MjrHrXN3GqUtKm2b2hZXN1rahJdVuMrb9EDV1PJatrMPAe7vkDmKtAQNdHT3WBLwNJQJ42",
  "key20": "4EQo7G4XoRNUKJe5LDtxW62pYoxv8w3um2o2LFi1zH6jcwj2quwSXFeM7WkGkYFK8AfZwB227cdB42RmGbJsebnB",
  "key21": "24zdBHAaAyyjSq2ZTbJMgZCmU6HUHdQgTyW7DRXhbDcdgbUJrqVtRvkiZqh5K1nzfoRajBtVbsaENRkhJaJEfRbw",
  "key22": "2bAsdfVxkHT6oMDobZ5SfZSuxspaiV3vzJFnxv6wqGnpzF8ARFYcPgnCvm3LzV5KdweRYipLwUKfiQxfkwkj9yem",
  "key23": "gjDngc9YLUWGkF8qLA6PXH6pdgTvrh3g8GxAz6HZAcaoV8UurHuirbHKLbtRCvNbRYdzJoLWfovfZp7ufgbeWeG",
  "key24": "4n4sQZkPvoVATSasZ1SvLCRwYzWF3zgxpwqUA6KjzFdMqUGmCbnA3H7SLvLuefBoQM8kW6LGVbKiQZBnPYraZpty",
  "key25": "3HDcAxPA8DTnW2LqpY4vf8jUMGc3FbiNTok5NTF9j8c1MYL8sDh9pkhSGC7nsW1ALFU32VoGVUL5GeVyC1uqAjTG",
  "key26": "Jc85oqxZPkfRpRpu8yGVPMyS33upDbffFYZWQrF6iUpXTa9bJ9hKVeFBPTG5iAHpo32tfSDSa68gQPuJxJ8EcNr",
  "key27": "2RA4UCL7omAecUiEUzJg1ocTv3pwfB37bzPE1vPzjLdJb5RdEpFfVTuXfNV1knutSwGt2uXy6ziv4USq9xxeWn8W",
  "key28": "BTRM4VWzUG5XfCAK7XqzaABUDfM3AigUKsH5vfLJjqgubRyfd7RrF7uk4T92q1FyrvUA1VsdeqcavUuaruCFWVf",
  "key29": "NoU7TpxgNG9ZGwbcgxE3c6rJxComKynJKdxYcovi1MuMAzSzx12pzBHSHz1BKBXMUzQZEHodnsH5hWKVhw6Dmrj",
  "key30": "5ASpWjJgfFG2J8KHdgtKtSEqjJiV3WAnSkv84iTpYXyqxyFtWDZqWcFXLAMnwzB9PR9CcUXH4qpqEe7igsmQLNxf",
  "key31": "SszHfzyTr42CgqfFbtNxHDKgXR6v7STA8xUSpXqigSaWJjYyS7jFVhAKCX27snK4NjDRomghfZidBphEzrySLAT",
  "key32": "61SPhEMcVPVbSsdHEeDESH3TNd3QsUNHny8J4ao7Hmyyi9X6is2XiHSXqRCPfFD1oFinyWxWeGZ7QNiziGw5QBP7",
  "key33": "4LPoxGVQcGbY9PgbaotuBt3w1P7Q11bTAnkL1xuAsN8xZkCDmaa3itaADxEyjfiSNukkGyJfrbvLCMdXf5or4J2W",
  "key34": "5Rjd9eqSHaWW3mymGu8shBc1w5x6hHzWHyPunRbvtd5ra313AstWZu9xboij8ezqAk9h2VWYwvWLvn9hAHPw2WSR",
  "key35": "4peNT8mUQoMtQTbm9qo8VXXg3UjsuhyBLhhmVyZa8x6BCPJzmcCtwep9C8L2gGyhwGujBzMYPrZksga95FbJZgha",
  "key36": "62pzFW9hMzYnyNRNr4dAa3dPbmC7kSN1CS8WnmnsUTCo5maoLSmPJ38zXSzrj19nG9Kzon7L28L7TbLKrD5Df72a",
  "key37": "4McWL1Y2pSKsBjecfvbRHRi65aAUGfAp9DVWQ9JV3YuUwUjoYjFkTR7tJFhKFaKks5dxRVTy666CFYXBKaBdVPou",
  "key38": "5RGfh6SpcA1Xxm9XHEcFRsphng9jRxw9Gou54T5vQgrjCTxjVPgbSQvmAb7DbK8zgu2MxdSJeoZrJDVmUHsAPYaL",
  "key39": "5wGet7RhrmqrLWHz8TxN5qeWnKpoamxphR4WPUHA7XaUSJD3Ww4fPEe8XQ64fFVUJ3oBQzWRpHB2dT6nsi6J76be",
  "key40": "3nhfrKKm6BJ4h827iuwugSAYPJwDX9zdrtXUXcp2yuMv5XkoSKxVccZ3fRy2CH7Cx4UTxxeTfubRHLrXDXuq7Pgu",
  "key41": "v91EcoYeXhzdrueKsDXd99BKGZhMyGFztfJViyDW9sNRYzXcVPZrgiX6CsLshHoucwj4gBZUrts42sEaxiNgnd8",
  "key42": "SrXhTxnqFhiAQb82kGGGxjMersezRWRRfHvAeowhV2LnbjCmM4YfBJkMCEiruRiNFjR4h6W4j2SXkGeazTJ31z3",
  "key43": "2gLPfTDWZyL5S95D1iaRmGiY2TTj22GZJwR5zaKfhEmf7YNACiqb1Pm8NiYyiVY2trsoJjEiZai8PREq12yQTxNo",
  "key44": "5PBazUpZMmcrxrQiLKFyStvFU7uF33f6J656yhoQs8sara5kJkWwJsn4P36D2JaJyCQi49aGo7rsCDXyeJiSzdRb",
  "key45": "2HAJn5Li2WD6PVSmiqm1B3o7cbTGCaxh3mbFiChggF9cmmaMTJjQ9cmommBDY7CJGxHt4fy3UH8Ex7uFkErGjZfM",
  "key46": "DgDpnLh6n6UXAC9mtvwjQ3eEAZcLKrNfUQFrnEP4z95HfyN3yjjJ9aBnPY6gUDUf4r6z8rFGdGF2WbUGHaJSB5Q",
  "key47": "2Qipo8afXhbDn1jmCo68NPeUtWDoRJ6cdt2uDUCkX4ENgzYbETjyVU7yUSWtcaNG2FKGKVNKuKXf6VPSoUiStqkJ"
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
