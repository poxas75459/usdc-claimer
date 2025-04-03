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
    "2MSGt23AhqtF3XDRRB2bbr3EDjgjHcgwhMgZ43Hv3tJZt56rYkuD2EP3HW5aZnVQYnPwvWrGiTXrRvUC4qn25Z2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzXGY3btoK1pHn5UCQ8qKHU9Z3ghkaQtoRkyt8rTXjN6kXTDTpiiTq3L2REzqgKCvyEVfeFrBSvATVEPuogwDyN",
  "key1": "4uT7dcy69zJftduSyNVmHCHqDP9NcDLFZLmCLWcvzuA7NzJLXej4V9QGyPQwwATNNZvxVmryxYtL9FCv7mTCgG8m",
  "key2": "5af6RTquR8t2JymKbfpLGKqqa7TynL4NJEoFSZHduPSB4N5o4eJ8rTcE3TLWEqfwb1pTj2fyw3bjMa6h1PfCRabR",
  "key3": "216uBnQ3P9qDS4zueVh97yHp1ySuUDmGzg7dMNN9zq2a2o7FpjDnfDBwTuCqsjB51QriMVxbdE2vwgukHcYAjF38",
  "key4": "3gNiHrcNZadky6Hck5D99PgXaHrxoXpLinALrMbQmW64EJ3z43bDsvp24rVCHhEUF78HnrrPNdzupCC7iC2xCRFw",
  "key5": "4QLtbmHpXcSVVZ7fiYESjYrg997iEYccdvH9GfQhksq1sGyNh6LsMUnNr5UewhXWz8pasjC2wA6RP12zASyCsbps",
  "key6": "25Dh4f65Ch1PrjPeBorz7DnsRRQ393DPSZNTGequoUYhQEPZ9NHj4fRMH7MAkhCfNY6jhrQtywZUf4tg9ptyQgGW",
  "key7": "57n7ogwNSj1c1pYi8hqaczd4QwrQa45voPsAwN7Sg9ScyW4ggduPaacfP4qqB4a97WNPu3WkRFwquACipNnmh23X",
  "key8": "r65nWpNzT8QDDaWx7m2A59seDWD1ac77CEXfwm5SaFZoXmDa3rjQ1kpDBFqhwSLBeYEzRDfPYQvgiur5SYBnQYt",
  "key9": "4hWr2RZuwpvcSZgsGadgtyLExLvWfF7BdxW2nEAXW4uH4LWusvX6kuwfDxPWua3xLVXEfv2bHbCHUmsLFiet4PSn",
  "key10": "4hfZUzW5c8dYe4wWQd2CFi4r5jGYiKmYHCpdiXKVmJpjwEGBexdHNY7Ra7cz1MqXPJqquV58SG6yX7kZbbcB5vV6",
  "key11": "2WapDqJhCWPeCyJGH2NH3iNu2d2UcHbRbNEFhcvR1VHgj36FvVuUzt5fKHBjAFG16VX1oUmKRoi33PEXmjUN5sLs",
  "key12": "5JdcEF4RtKwLWn4NRbLoNnxxuE1bPZjfvHQK6sP2n41DpytHXGJin2cRFCjFMRZ9LKm91kC7VrfgNEQ3KdeYjxx7",
  "key13": "4tnR7bjfHkC52xoh5PXZT59FG4n7n2UBfFDkkSYxZwEFS2oKPLWuwc2ATDgRbuptG18hgPzWb3ML2BCGocJckXTV",
  "key14": "4HWdCKgCbHj2isthCKCCeDGqCttEgf13UsHLz5N29efZ1UGtzeMyR2QKgjJAUBDga2WxqUCyvuRYhsq8MoHK3ARZ",
  "key15": "9nkvVZwFE26wpzKxhP8u9vBLgDBVFp4vM7dwBdtmtvTHtPZe4gwbeTez4Uec4aahYo33U2ckej9zsj9Y9nGRMdC",
  "key16": "4CruZ1SSeUbYqTLrDm2nTFb5k3XcxdepGC5QCeZn8sbDwXH7fUpJpTybztbU1YvHthGj1h2o7GTWzAW2LpHPmMbQ",
  "key17": "28BQGLYDNbobnQtrKRvdLkG13ezn6J89vZ9uDHgC2Xec4ajNNaJu3aNpBsh4bGAPvBd9V3qwjTbuwmMwkdGCHRH1",
  "key18": "5gdqH3rQwXaauPCmw63dRVwgJAEjM2uS3omLdRYsHagSh9r1N87hyw1mXs55nvvZRJo5QHMaS2KngdNKcruLvBq",
  "key19": "5KiSHjDcGURNUFW88zq4vdtdHCmbnseaEDtaLq19fCuek2rN2Zorrkrhe6mVZzucodjkf9MMQtJwbcWJf6FY71rm",
  "key20": "4KZPxStifSg12LgHd7o5wXhFPuo2MAmrSuFEX59FDTzjcv5kWLMQbYyVtSmbKaaAramEDHdJWZJ4Yf8mtA3xAuro",
  "key21": "3us6aVBnrCc29TLm36b8oKaB46ERk7rzCXtDpQm29jTp1zWvzfKWKgnZmkJojLyYVKNWTbVM9wTKYRsCQZvSaX3j",
  "key22": "2oiFQAcmgYhZANHxxyDsqoxCtvEU9F9RzwMb8sNbyozkFi97jmYyycEo57BiR9EJvNYH69KyFLUcNv2bicyZtzWE",
  "key23": "2zYL49UFQkGSfVrhiYyAiptNPfitHKEDcmMUcVUwAReYZZpEWgV7sAH5NqTbQYZGDgW2JThdWbaTMEqqVoVvKyjc",
  "key24": "L1bmAPRJexVpA7h7EDkMVznwS2Dsiswf6zoWiwAJH2WBowpiyujKFS7WZ3sEGvBDKj28UTbsFsVZTBBsmXCTF9B",
  "key25": "2V97mccvvfpH8f9pnKSb3jNvVjX37X84V3ww3m7UCowyRX6MtcLz8iS4kuWmtGnahnLm2kquufKorynTm8Gu41Kk",
  "key26": "2EZCREK1jaFQshNwfXaTjBi3zz4uLHnPd3Ebc9wvQDGWc8ZcExJKm248jD9dNVyNSftH7SmyAgcSH63mwuDmiyvf",
  "key27": "4avdFqJq5bxXeNU1poYU1Kk3tgemw3Nam6TnU4hYxGP64HoSoBzZKwW9SydPrJqj69Q3N2AhWy2RBvQXLZ1voPCz",
  "key28": "72EZqXMgu9oiAFbSkCo2ysQiSWAc2sjc9iXkT6EPWTWLjGZiUSeBf3NYU9AjbvRcQTs2RaKW5hqC9pHDM3jkCad",
  "key29": "3z9biBPDWwqHegxHSGVGSL9m2YqZqLD7G4puiDvT1dQtEzbK1Qsbf6Efb26fStaDJ3QNpUNvqgFoptEhcJtgUXVT",
  "key30": "JWkj541g6PSvWPcgDiRjvQJVEsvuroD57RDBbyiowvSwaiQNRu96n69p1sCDwypQAbRrf4SwQrEEWxp348bmxPg",
  "key31": "42jLKRw1iQshQ4jRMkWCsYoQK7DjjGS93HDYSBraZvrfoH7zPedqNHywyda3URXwL3R8pT1KjZKVWAwmPZtgPgSs",
  "key32": "4Ghsvzrz22EoeNStJ8zWfa2byFGjYZVH2BbuUXQyEP4pUWyNoayaUBWExEb4k2LmM5TbBPscqZRfuHRyTsxj8bnH",
  "key33": "38bc7PXPeVq7ZwvKWcXVriHARFxYPvuC7cRjqRjmRS5JBNqkCESmidZ9ekUfZsWp4R5Jfh6kM4PU2k43cjo24M5m",
  "key34": "34CunL96Qox5Bd6aRi8ifZKRcSSsqd4Xp72wwb1Vw83kL3qgpETdBxbJtFjXsUs1anD1HXJtPn9f7i3ikrFATZJB",
  "key35": "5iWJCeNAPKQg6g2MKhWj2d2xbE8c5dKJ84KsumAj35RR5Eee5f2hAAGfaCLrdsEQrDGEHXqpppuKVTRN2UKi5wCW",
  "key36": "4fgXWc9L2B33AM1K7mqZDY3LEWqko47WqCwTWxCLi8PcUVPvvhFKo7wEY88EnzGRmbREjtVXez6dRtNpUUG2CeYJ",
  "key37": "3snBLEqvLSfTF9sT728EejDv4nTG4oCFdDwD4K1iJKFCKVfBShDZUbnmvRDygh72UB71CZB6dX52LELwEcMSkpkM",
  "key38": "osEy8jKVDv7mRCQ3ivwtD6aQiHdoxggQ5iuAi5tgAkZq19aHMqkiGy6L1CJuXTSFZuLrXbAUbLGs5hVncjHoP58",
  "key39": "2Ty1RUeE2mhzwEWkfgT3w6wNDkt3LvpvR8dzN39GWoR3wt9uRktGZxMpdjeLBGr4aoMWokgNhY3dsvviQCurNe9G",
  "key40": "hvMyQx62aBAgsGAnR2f8UAbQj713dvsZ2duu9cti1jf73L5ND6jhwW1PDvnGoMQsHv5UrP2QX9wtmuKQ5nK6jcm",
  "key41": "46AXwt17E4ebq7pkhnZFfXgL1qTLnGRU7BcJqS71MWX4we8J6Fsc2ZiT6SMv6JSvhcsDANv3GQxLXNeA6MvURfF4",
  "key42": "2bXU5cqYT38AtcT3JH4Xdp7dNXk9sgJppTNqhiaSHDv3sd2WUzBaUDn5Xzw32R1y8DDwj4hP7zzVe6zYb6QoPXG3",
  "key43": "4ZYFBVNLCqywNPRtxAME7YTnrMwZSF2Uzda64fgcXRknMxjAvyoXfGpK849XfZZHfzQNFJVfGdpVm41xwjkSogZJ"
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
