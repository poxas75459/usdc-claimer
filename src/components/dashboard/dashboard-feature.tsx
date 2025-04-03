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
    "67giJjmQW8RrvjxPv5NgmbCC4BguzPv63WqyFXofJBEyGLJGvdEkHUQYcBqWUcbcjbHgmGCFtgPwtt7WMsaShADD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWf3cUdV98r6eprmeiJMivHof2rYaeffL7qA5zXpmM7ES43AGnu4K3b3osF3EtMataWfe5TB47SYYFxCTHbJSZU",
  "key1": "3nPG75yfyuALN1mUHMjDt47uv7LD1oN2nGMohwVrLvZNp6CRx5dP1Cy7oc8TN4cZCUsqqfdS84FvCZwr1qRAHwNP",
  "key2": "44J65XTr5wP3LdNxW5Lp563oNxq3Ntani7Bg38y7g1iMSRtn77ts6rY2jgjWPGUUeaD8hVyR7hVMTgZj1pZLjECJ",
  "key3": "3ZjmaYT3iujLFaF6rNtoMK9aVoN1ScbLMxpKxhVjDXwQ4C7jwpbQVR9XEne36VBJn7KGvtHfkyqAATA423MnB5Pg",
  "key4": "29DQnSZVFq9fV4Djri6tr41TeyiUyiM4DpHBvtsUQMUMRNEjJuSp1wFn27w76eC3MyVHzjU7SFcjZ4UNY8vzSdYs",
  "key5": "2EkTknGKN5HxcVcu9cs9791rUstSs1S1zzcjPC5d2yctxD1wUJg1Ddtjc3CcLnqRwGuNX2iYY2ZhsBu2qicvBSmy",
  "key6": "5qiHnk6LYXCDNDFZjZySB6GuWdWJ9GwrN33jtx8YCGJLE5Q5YwdrmThrnMmZeZGtupTHYv8WuvWK6Rfe7KrB8xC9",
  "key7": "2eB459wiNFL1s13RJqB432HpcbeJ6n7AT9Txe4bLQpgp5EUTGe8WpQbU3A8PeRZSKQwPKYSwvUuWXwoDGXuMPc7t",
  "key8": "4pqwA5KHEmk4DKqtqs2CzPUvfTCyVcu2kXRr9R5CBjuDeNyL6UBSkRbxQbk9HZuoxioLwDUJGoZd93gcP3xuw2z6",
  "key9": "P2WFh9TPuhzyuAkKVRWavhZkXgsknb52BpzdSWkY8smiQw8yhsNbtJHtHL3vgQPNZZchfRmbKL8qFxqM6rcQDD4",
  "key10": "5jSrZzJmCcAN7oUX4Yr2JB9YKdAHSqVTWnBYUaGPiHQyjBy12zvsAw9f8f3wTSYg4DSMSW9qA2ErSLqNU8L1hMsP",
  "key11": "35JP1MiNsP3rmZ7WoK1ajkzcThpsSjsDk5zPjgLU2gZ7xgGfGjXN8jJhyxVYUsVHEsqyeurwGvv1XbqdTb9q1Spv",
  "key12": "3A11vobb9HaqnZwKebvwhsbQLWT36JUdcXekd1UVJJ4DWoLRW5NXpampRKWypvmHtS4j1pwzqq162p5iKZSFBSJa",
  "key13": "4xoXWdmCtkmXSpeDYhwSi5zTjrJuCisuhP9nWSLdRvMNzWtwGKBHitXQSWcXU7utKAG6SFdr34U5gbLhapWMCTj4",
  "key14": "3BZZqJ4uv2gAfzJQWQ11hseViDjBdyGRkGQVvJg91SpjsYwMjJoXpGWy3bAKg9Rr2RseTttncozTjvuWkMumTFn2",
  "key15": "2Qtdxxt9crJvUpp46DgRSSgP26WAhp563xFBesQJVMqPKUgRzoZhEeYV1LwmkzCA1XctRYTvk8woYjvo5WxZgQsN",
  "key16": "2SV3iQuLCBDbidYdvK9M8JN4r8VkkeF9SSbYGEhPcVWtF8jbDEcWzVbq9StBndLX8r2bBrKe3eUMRRXvmenRrFsB",
  "key17": "4e9EpTT7andivSeekBogRT7SQtKsxRmzRviVL8tutmq3tubYpRTYdxc3M4PcwtjXE1uU5o5eUYSKE2pmzR8JSm9J",
  "key18": "2pxneAp2VaimqXRiqjX4Mnmuw2H2i2n66VKfimvRLaYssr3RQk7ZdywLYZEXxa88jJB369c8H22speEyK5vHCRrp",
  "key19": "4AV5NJVSNR355R74CVX7h68mxXVk7qxStbMvKoiZEVYinFrRHWN14DHYPE72WMEv7RNQQkw5tk75rEjDMXceqDuo",
  "key20": "5eNX4T5Rt8ZM86BNXEPVwHyysxZfiL5PeP5BpaEhH6GsDsGgVZWjWcQZHE6hdvZGT6WVtrAc9ipgM2TwDBMKXuew",
  "key21": "g5EPEvhrfy82KBwi7o5sqKtpEB3W7eaTE3aR6ymS2FoBYJH68f3hK1jJRwqgjHGtLSkRS3V21TYdj4PWGFRPERv",
  "key22": "2MJL38GVjEd4LBXWdXDYMX5XUrx7hsCzuzXqpiFnvkgycWLJXNYL2zZcL4iiVica5KZ7VsMoabKDcpq7VdsppChV",
  "key23": "4io2Y3U43coqp6AbwhcF3gfdi8vWtH7rwZUzWxzNpw4RtChKay95phnHAZyCRXhsKLCkdxxbRqURzveZoQDKekpe",
  "key24": "ThLEF2UMyvAMjsfri7njpQAu573f5vCgWcjNCGWQkZk8ML4kjSWf2diF5thvUkaFCJMo9zKm5xmcwxJtbeZLqgC",
  "key25": "4DXjH4DSkv2zbYB1PFaYzYAtZDiEF2TSpEC9fdLrhnZCuxcfnyR5GALm96qPrHDF8QyCLD3HiMVY7fAXKe25dCJA",
  "key26": "5URgcxzsx9rGf71cPy72pDDyChA4WqDZPRA2tCLAfZKByR6uF8QLkczUWzRJwPVXkeQFRrsTUCeJy8AJNuAz3kU1",
  "key27": "3aAcbXwoFAYjpjgEXWjmXGejLTHxZi2SAff8r1xAKm8RQXdrLY7SGSTJLdiXdBkFZ3eZ5ozZDAwU87HAXsrXmT2o",
  "key28": "2XCJUtmcMEfermLXHhDk9xKpRgBLmQ1p7krTJmEausp5Nv5b3rpQAuATukPWjJHb8WPJwuHBQgMiPxYFeiMZrt6H",
  "key29": "3qDjsvM1RKZnqZk5MnmqVE4KFBzr4SWMH25PLAoXtGQa26jnGYrSJgCD5MW3AwYHcyJZcwWJsFYoJN8VaD7xkqeu",
  "key30": "2HehbdsC6EwonjcTXUQZQCQz6gWUJ75GPm5jdckK2aBSaywngq5Xmp6SxcpwoU3seXAN43v8oGUgqxs85wjjfc3R",
  "key31": "2sz39wGLZkorYHAP3jDNKKhCiEECn2New4ozDa14NcJmxx5eL5qyvwc4AQtm5kbxbttxwGdisQuxDYkLxdvfJoTc",
  "key32": "3oMRLvGB5z1Wj4bEd8k1adT5SGfEF8zHgHsChLfBAzncpUi7rWvmpgh2RCmAzJhhALjoZWnQhFfsXiL9onvCdVd7",
  "key33": "4LxMyKi6VF51N5zCDitGS7rKKYacd8yM3hKuXZAVRBZbMvWggABTnHhRJxTpkYgsR7A9wTq4RpZrtrvQriwA45tt",
  "key34": "4CjkUYP8p3TtHQ77QUXHC2ciVsGFYCyCDwHCkCgUtWh7wgC7QhNRRUL92EdTSXDYrmzb3AfbF9WfcpaxK9vXv3Jv",
  "key35": "8QQJa2UJVqchmw8hyUsThk8fVXUWQZzSSaxJNEzQhBmtoQKGbjo9YebbhSywxRaj9HD5Qnxg43TQ5j8C44LDfNm",
  "key36": "3NECznag8P2wMvBke1SArS8ApiWYXbKxaWsPCp6QDE5VTcELk4ucSejk8KuBNHKDdmc2cqd9N1teZfVXjWamVeSK",
  "key37": "2uehB72KyMqE5kf6VoKyfzw536FqJCYbCiMZE68oRUJaqPTW7fhuGy6BTPZdY4U9P6HbTnubBzscY9jm4xWe1SmV",
  "key38": "5kEfZ3ymNAHi5uJZdXp8XEo5SFAFizHx4swANVwBdMcr9YvQw5aZSo23avbshx57FhWruPMbSNhypGByxkYZodpe",
  "key39": "52dR1QFuS9Dj282irUMsAAa8qrvcG4bRPhBDxSYZSr38woTzr6u9CxKwUBSnfQkJgbBPpFff51Y7EkN2R21P4Dgu",
  "key40": "2j5xu6ZjFN1X2hmVQvxAfUVj6bjDaTGRsn3xBmsFLZyz5T2gXWdfFzLcHZPtuTmA3wabiDcvF6srKJQxDgVTLSSg",
  "key41": "5EPNGqQz1YxDUM4bp1yAABT3zTRfGtjYhVAZW225ic8bAanPeDhcucRorz2RamZebjJd5VoUgVBw8W3znhiX31Vx",
  "key42": "51YAjhLF31YKtQFcKyJ5g8SkPY9eVkxtMspUTKDUNV2TQuDgZ4RY5pYzzvAwgAfAmDxxA71YEFggP7FCYFFndnXA",
  "key43": "2jiq22xKeNgogT6N3ik7dCriW768apFBKXKgZrh8X7Nbuyc8UMRUcgztK4dBJ19A6SVp7SDYqzGHuoudGdaN1Sw5",
  "key44": "3omY4vRmZhw7umDZXEsLfwRhqGGAKRWcdVnZEVkkf3gDme6KdVKt7cbDAMn4hWLDx17oBxPmweTo2qzF672Zsei3",
  "key45": "21xozGhjTVjUjGzJbxYdTK16i5fTXfQmj4y1zs7iNhAYiJHTwqbp6PwvCjagcDnWyYLyzbRwBnVQJ4JMmdRmYxP6",
  "key46": "2Uum2x2mWqh4XPzp7rT7Gq29mpYc1D2PMvVBcBgT68hnw1CRYTASrzt25pSD9f4otJ8gN5r7dWWUhdQoLxRcZVW9",
  "key47": "ijnSXFdPMGguGiiRr4Ekg9LqoXseoBCmsphLFmwEih2Bn8w2sDyEvzcrtWKD3ctTRV2LbXAm6waL6zPoXVQCaEi"
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
