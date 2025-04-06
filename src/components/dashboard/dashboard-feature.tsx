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
    "peTGbeg1d5g9Dd4NHEyyVLgxkuBSBycDdGhrnbMrquRHzSF9GdGqZC43bE1Jaf33oST7hFDX2iXpn3Bqp9FVHpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1G2nv4F93SvhYcbZJEDpmM7mjJxHxRs2MHVFHrrChTu8Bf3K9SBg4GYpEgUp72x31m2c42HC6oqmurosL1RePvF",
  "key1": "2Fw3WWjN1dEFjWYRr8eqCGAyuacg5RFonfPFJ493EbDzd7qEnf1Rcj8JmMdt68X3LrDrvQE6s1N7VKotWePeDpvE",
  "key2": "ueEVkp5kePBedKwp2uw3Hc45Vg1gykQuw3Lr7qkrNrZbWex3sHmkrF4PpbQECJj4HD8sDeK8yBS1KiHQcuS3pXM",
  "key3": "246A4v4bmcT7WBztn3Mun1V8c56acRA5oocwqHYkRUYUSyejic5R6BZYRAN4de4DJXcnRcC8vHMKDnHT3zhJhLjc",
  "key4": "qqw8aq5YbAXz535AbFWgGtNXda2VQcBoATmHosjoSN6ut8jTj3rVAZXcUYNZ3akXEosdJni1cSSLAdiwpBGdUsh",
  "key5": "265icGCT5yNHwEpoDycb1x94xbC5oSR3qfnt32g2KM66WD3XegxCPcPnuPCDqymdXhvzuGCMbTEGN8JBX9RDrCte",
  "key6": "mc5hYdVwPH8dAUrxsY77tHp88ziyCwuxkE91CgQBEziDMnKtNnYbjH2raPkjZfi42kBxGV6RGUZ2fsSEu3ZnKum",
  "key7": "4tnP4Y8mBHKg2i2nKBzdb5N9yTyWZfg6RNDBfFfx5UyQxzi5knzYL9FN4tN6UDMuq8Es3vuM7RfEAacbDVkFs5hq",
  "key8": "4kCdqHS6x1Gqb7AZPLPXNC8FDoDPd7RmVrBczbnuZcLcoyeqi9kPFs5CAficVrg28svXW2tW3t25zFqRXEJX8EVg",
  "key9": "4QVVhPDauYF29W6Y53SzHpSTxTJA5vL9RTMpSfk9NTSZrWswrZSYA8YqByaedzFLNGaZN4b4hx15cRh1FFLPKqQt",
  "key10": "38ioxoudmg52Gb886fZyx65DDbUQK8xLoEbPFcvz5iUYYU3YxQbiEUP8Unha93g8DGRE3bvJQpG5hDEdz3tUS4ad",
  "key11": "2KLsDkQrCC3nHvm8ZRJMvicfQgqm4pNvB15P9k5R1iisqFWJ7gWh21FgUM5Co4jCdggXXuKuHZ8ZGy9xhMV8HXt8",
  "key12": "CEEjvn64tZpEqg4WoWzGu8UexwsyZfbzFgtc8XXvtyBZk1NxKDT9zAB847AS72xfQoLTe6fv3MYZnRjNqAdv44t",
  "key13": "tJVDyQvAGEFieiwd2uS72apMeM7Ua2jcuda8MfE3ko5zTSrP55d6hgqtkEPfWS1AxaE3NjaR9qvEpXesqxhyNBh",
  "key14": "Xjsbd6nsC7hwLm1ezJWyxeggc1FCKaR1d3f1K4aR22h6Mr5y6jTe6DXDUBr337zBd4PXBBDZw7MVvT7GQUjDUmh",
  "key15": "3RV8TmSHRqwGHhWDaNkTpkdJVAgpzPqmbBLZsqaFCbc8kS4qYUgVpZRPoSuD7Cmr8WGUBbW9JwD2GTN5mLf1jtjx",
  "key16": "2FLCzBoE6aqsCdDsXEUBhbmc9NYoXG5EVEvk9FiKVWedCEuD4R1JHfYfrfynUUC2pwAFFJPcE7ryuBHkCXTabXC7",
  "key17": "4tRk2xXTM5zY5ZvgxFyMBhAB53dpsVG6RBhHq3a87wRvu6Qx1zvs2DPhAX1sDwstTGGcCAUKKEswvBnW2DfbadSV",
  "key18": "htMNZdsfpxWgu29RWC3YGZ3JVHbf6VhQVcDE9X5ebAysZnTXfmQEaaa47YBNRx9t3ZfZiUN7HVupN5fitm5PAPD",
  "key19": "2i8keWxUyi4XTr174TMfej7aTSSXijZbLCgkFGUGFpFwcjqMLYZfUq8SQxwk6L8MxbBaSwwYqeXrhPax4TqrKrwD",
  "key20": "Hd9hsNNPYTkZdWpvbA1sTmZR8rHhwSyBCgVxBdYLwFcw3FtSpWYPUKnBsDFMt2ZitjD4xtuofMnZrv2di9BwGxS",
  "key21": "38chNRG1UAcQifsdCzDnBmcyaaRpMwwUUDJRaD5y2BRt3ueNj3CqxpH8q6nm2AStJZu24BRDDAavPeztprH7KEuc",
  "key22": "3jqomj1v4wyjAZxsxwdG4pPywAu2nAF2N8e6egXs2Zo29azLdyxiSFn2kpr4ukjH8smcN9DGSyYLnHKgsjcFuVyr",
  "key23": "6XhhugkPFcQq8VaVnQ2fgVNUW9smQTsRk4nPMfgD7aWmyZutQqKE4jacYHm9b9R2u2hei8DUxiGJSP9nqtfmEP4",
  "key24": "24KAHRFdCDzmxMus8DTZohY9zk71rG5nz4vLgQ9W1yt3n4YkVvTVvnF8Nmv4dWpf2E9kqkvjkktDWsCUM46j5Hew",
  "key25": "4H1PZXZ3MgLq7eJWJVyyuboAuao711SU1X2zUY5iY5bxwsBAa6ZpJv45tpego6i1ddGnSF4usqUCZ4ZocbU7CRWb",
  "key26": "TQPcdFHtFYsSstn4uvGiEXV3e2pSCnc5MG7HyyADKrnahpHTrBpPdagWdgm1azk8Pb6ANY7927fTG96AwCkF6wf",
  "key27": "3u8xLAFQEZFGBsnas57R3mJfgeth53tgJ7RTBe1x2QHerWqrumQwzjfc6KGzWJjGT5HFEGvJd5ghvdZ4Ux2zeeaM",
  "key28": "LWwnjrsfYEvHLREZ16npuB71WzZEcSy5jqapwxYt8zaXppd5uEtuAQNR4BN7pwhTLb9qY2urt35JSXyeZXoRpG5",
  "key29": "5xPavdnpErgohkQcZ5E8jMyvcmGbL48FJT8TD7ngQq5Hi7Xze5hH8BVseuKNeZHPwyxadDvxT3Kfdaw2AfugCaCK",
  "key30": "G8SScn3bauTpgy2zgWSiVJzjWdB1t9wejFaX74f2u9CyioCH9Uo2wBiEga16zQyP39dYgePeVcSsmuQ5QpwJZfp",
  "key31": "236s7iwPUyjsg8F4wo2yPwWW1ywdCodfxiArrb2Mxw1kxmXBb5xD24ix1hHmWFxdwp1m6LXSeSD3YsJ6crbEm1r8",
  "key32": "3weTSWb8f6NndFGE8A3X6msHeGdNdQbAPz7KWCJgfj8r1ZdhAaHZCZCKH5LaxWx9mA3qkDcDhKecKZJtB9KdHqB3",
  "key33": "XPnzoKfPhHyK55x6hX9MGwpbRhBEXfsunU3dXMHi2Dqb1KyRX1sniLHvwYdem9XuyhS5D9qXy57ztm5KtNeyaC3",
  "key34": "49GaSR6TmBUaK3p7q9FX9RyM5kPKdoECu3wUF1U9dRqKpRw2XM2Zozspe7o5tFDc7KTgjvgZWgCcMGdYCVuF71bh",
  "key35": "28tAvQFoWZEuLByASnnzwzw8xmgMXoL3J5Zn7mXKX4Rb9Y2PHwLRvKM3nBXNmjSPp5xxeN74npjPzAAK81topf61",
  "key36": "25VseZWLLqGNCCy3qsJdTFXm8ka11gvW3ezoHBtqQFuf5LTTPxg7U3dCHb35E87w9gf3tM3XZa2yefBwhGBGig2M",
  "key37": "5gjvB86oSEtCjJy19sPkGGmAgoyftZ8nMsrjmE2MFBME1j9VbvTavgSavEu87MrvLU9qCRLXKXniFKaKMSwexuZ9",
  "key38": "3Sw8uUWdomPo8VSTCJpfrzPGMRRsEqJbfaPbPx8GLtbHAbPwRmGDSggFxZQSDvQexgLxZFR7u8er8Qk5tVGEDcFM",
  "key39": "2dBSpKCMrBZViwFqZ64J3ZntQUwzLAtbgD3KLTuv3dgjG8w57KuhwA7qCzE693SVPZUuxXgjJTxMVtxEBE4Chf1N",
  "key40": "5UgL7p5rBW1qjemfgPapEnnfVeekNFmKuuToT6S7TCUHUFe88UGe8uHpWBx6jqXV7msEb7TeAU95E8QCejv59KtX",
  "key41": "2k2FP8sFRwV59LZoVfevDL6HCWcxrmv8QRkd6sxG2SNbwAHH9bbBFaBFahxNpK1DFPcRMXG7Td73WxAoPtPMNArq",
  "key42": "3i8LV1wuTqG7e5RXgek7u5Tq2B5mCjjyVxsTkzYrtThFXMQXnVs3tkyCNMZ9ZwjhiWC7VrSrc97CxitP7hQ1cxXX",
  "key43": "2f6dCUb1ZtJrSDXjtQykiDbknZyZFATMuoRZQZy63a5HWe3BrLBWPgqzXLUtQ2kS2C1a8srBKbNwZzxEzqC9KccU",
  "key44": "5Y4LyoPiuUhGURduXMXiw1zjXhKDvSbwga7qZb1oJyjwLp26iaqfQLNb5RKh1JKr9MxpiFY2HmtQ3bz1p93sVkcD"
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
