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
    "1w7mvYV71PiGU4vAEZucuFwqaXSVhwQwM4E3yuSuJRcXD5W155s2Ndermg6zVxfqcrDFpFjfoqjbYX8z6y7wHSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498WzoZkZKwew7eAL8gK29UrPTTnDFYaTRsnMa4KmSxqExVnSuCJKLTR4QsVhVAVwDKHbtZiLeNRfb5atxJyDbV8",
  "key1": "4uJ4K3G2AuYcgVHA1vsa4mEpDTYnEMkxzHwd1m3TaSAxiM7gU3MjUQ9nRaPZh4W7UcPqhQ7dRAFYRXN5mbqHT7Ns",
  "key2": "4V4GdyeLaeZHPUo7fq3N6AakTyUEgf2At1Ks3kTWAkDerbtMKXS1p1Lzdy8Mrk5EHYFhwwLjWtzM5P23faMiZxzh",
  "key3": "vRbNtZZB8NjWdXjWK46Wyep1BcX7WC77GEqyQXboaMxvDiokGaoVrujoRU4MH1caN6HVvHTzkUjUeW6eNzzMhny",
  "key4": "4atX71Fk5WBmp5vfA9sKXyjMKK298sNJMHTrJUVZEj5ydEQYdJovvGvKJMDcoJmbjWsWEWAvuYt4BXkCP4DuzPLG",
  "key5": "5n547esr8TvK29S38eBcRw65D7B7gT8NB86B8QibhDkPJ8UuWBPAta2PmjdSY1By6WrzdH1F3fGm3MD2R4Ldwme7",
  "key6": "3e8ihxrQu1voxG5Mt8ZvxgHpw8sXBDptRoSyiT4x2iPbmEmhGLM2WRfXtKf1Ue95wa7LsTRRd7nCUSvFAqA9PzL7",
  "key7": "3GzcGkUDsdwcfQVAfnpLx1GhyfvFJpRS8ubRuuwEYvzxHV8J1hi57CXsBGeTMi3ahhnee4ZSGkmwaG6JuQ9Bxqj2",
  "key8": "R2hnJoBdxDmXkSxYgPXPrxEwhmM4V1cy6EW44DBeWKCs9Kp3iU3ino1e2eqfYKTbMTUkKgpAHU9PmrPTSFKQU9F",
  "key9": "2i4r8KURxTo6MvdtSGZqmTxCZVKek8BaZQYEaDf7HpyDUsjkLFamatJCKCHPSai53G4pGt8t6nXPQ5YpkKuUEhQQ",
  "key10": "3YVH5omLMFKLEqD4X7XyWLXx3DLACnxSNQSYjWZMvZPWU36SXsLZnbFpzFvT8BhHkHsr4f8pEju6PQxkNePb5fDm",
  "key11": "2TsnBHxDRJ29M1VToztE1uJhSFAW9T1pdmtE8qCRoRGTVu9fpogzHWVx8RRHh8VKsLMKmBVj1Y4Zzg4LG3yybSwz",
  "key12": "2mXZm78iF1Czh8djAusQSCEodmrUS5LYmKLKEqSkWxbHfN21BNzEPLUtyKubRZzieK8dgGtU1TdXEyeHCDe3VHJQ",
  "key13": "4jfCGiZUn88WCtd4rUc49idtc78Ru9UV8nTwFWTBFjhwfR4mi8fsXf5oQm1XufwwKsNufSF2Q1QQTHun2mw3j93y",
  "key14": "2QHY18rNDuoFXGQPf2yez3VdJytSUFRukcVZ1qjX8SqezAJHQH3ooLEPH3zGnfczuQt4ZyNuidtUVSyaigubuZfE",
  "key15": "23TBV7GHuJYVM3dh3A9RJJhocQAMWp8FrUbhHkzA7TkazW4c9XDNEM9Q4a7y2tepYrmZTku5Dm68uwsGGVivrXBA",
  "key16": "5nMdbvgpdN4PxAJnANkpgStVjV7Us1MTHYAb5yp6uGouQYjeaTiPdR5KiUJbV43wfYDxTpz6aLv9Z1LSkC4iEH6s",
  "key17": "4SismGNQWWbfLY6KojaW42JN874y55tLziHZSBcp27LiZhigdeQD3oVCYxVe2QRW1e1T9mauZxeoWqnoXt6S1j1H",
  "key18": "4UKoqAeswu2ncS2L2KoWkg8btPfrfWG7t1CLAm8HAbHQfADW26JWMn6qufADTis8VXFdX7CwPayBzBE5X2tr1gQ2",
  "key19": "eZgrTBd6KncTKpALVSjswwbkMPZoJe5ciHQhGysnq2uzLhrxhVWz6fK3QRu6uC1eb5a7zuPnfGUt6a94XV3FVGS",
  "key20": "fAbMFqVjLaL1gSPPsUqxmeeZowQYThm1LL5i38fYXa2F7HFm1AoXunhJ8XBGe1YzMy5sd2t2KsGGngoecVAzVdP",
  "key21": "4ygDDfuoMF7WVFJEmntUS46sZ1mhhziFM3198mudDCQ3iQxvQr6XAqNDwBctM5qbQj7ytodmYQyicByp1mzVBPVL",
  "key22": "5aAUPbg16JsJCtGnk2h9Xq4HWcKSNPV2zhFpTQ97hC1QmsL2cBjBwXhdchHN8wEuxfEYQ1kk18oRt3wgkwyqR9D5",
  "key23": "4B8mXPmYsnSWJdhY5fkX9dW6s5km1dehLLE7bs5uRyUcVqyNXUYKQQFeZZyd4s1Vok2kK2zTTdU8DHFPJoCm9EcL",
  "key24": "5D7dWEBA6Yr9noX9rZXXFQavWJhjiUD5c1VcVgnt3cBH5qNSvhXRX97PZ51sVbmuTQDFwBA29zfbC4WbHDwcTYCB",
  "key25": "81hE4wpf1saUaDNBVzG8BM5TVte4NqeY8N3n26mbufrXet6nYJ79zMndXALqRRarNR3AWHFbRump55g24mXsS9Q",
  "key26": "4D2SB3TQs3ehuoZYKHUdMaVQ43E3GVVN44tXfn5Zi42DkcfCGjezMQ8kjg2U5PV6BUw955aP3KmYZP5iGtEfUz8x",
  "key27": "3z7HPVkJdBome7k739KiVoaVBErRFbVuMJ5szjTxywapZNDP5o8nBdCQx18DWFh5pJUu4NfZgj5FTi7aE1CszUP6",
  "key28": "5puGnsEuhBCSarWWP9dcWY8GshvwjiqnijMrX4fGZ9yY8sduLLBDLkGoKABtLMaph9om4e1rpQx8FJaL6ernDu6J",
  "key29": "5UGfsHS83oRdj6aezKuE4RgHMbCXLJNxcXEXdnKbWecpiJakfcBFiJ6vxcdGoEz8HLTZLvsyGqwo19hgv91MEiD",
  "key30": "4MozzqkjFTmtdUjjicikwDDiLv5UPAtiaeEssXHJy5tcW9Y7tuffKDn36tH7b6vCWZ2N7awNVY4tGbASCqNCjcGP",
  "key31": "2WzdTaPUHRZXo3j8DRHDf1rLuTiQWq1LrSEDDHNfNPyoJ83NVzDjbt33jdo3uroyKszVDBXH8xMiHTAgBR1fjn6u",
  "key32": "3PnwYMtc5rmTdBKBMcFSWEx4mptZsCZWTvdkayebuLPKwXLKU9NsdX9NzfB5KMTF89VvTbSdTk6ATh6svoRqJigp",
  "key33": "XwwYScHbKzJfVH7tD65SvDt1yCNBdLDo65Q9iMWc6A2PEdRW4uGN1wHjZK2qzirLxd6HCENf2UDMXPCkfNQ4wTA",
  "key34": "2sC6BtBM7Fgv3JGqeCTtF48WJH4pTWys4nHC2QJAJP8wtDBobSBtWtuJN6bf5RgVvtLDBeWgXAkE738rxdof1t51",
  "key35": "33K5PhCkMCFCrT9pHEEK3zTwyR7NUaAB8j7kfAMSiEEhNCujemakdzpZ8EUUKyxaxRC3p1XtZWb4Ab5zxUz89ZUn",
  "key36": "3L2FoWTSd9QMF8dbXex71Q15Kwws1JQY5DtVLurVbVoqBf1zNnPcW7aZrnHeKfWKTKpsAdtr1f7Tsyfj5USQGxfR",
  "key37": "4ea8y5KwCaXVhmkwqPubFGcypgA7AKZVAH4t1f3gwzT2nsZwxtndQLMpBWG3qR1EJiyfZTUqebfCF2Ag8EkMuqiw",
  "key38": "39fg2LQTRXHay7gntEhcKHvKkX2u9DUT8MFexTx1ZvZSvQRc7ecBgpuwpchz3LoeNbBCmNpZRwPK53yGTVigQDca",
  "key39": "5DEYF63DdZH9PPyAX2ZRMcptgQy8MUDTMpvcxcTe2vYmKKwSeWQzwY1QtWAZFWgwnoYd1imSz3tweQb4amCN2kac",
  "key40": "5uxEbpwySc2DW2Te2UsENmhX3RnZBJS3hRUj7umqsk2QqvuwLZV2wCKZLvayDkSs4qh2RGvLo5nu35rpxKtkY7Uf",
  "key41": "612H4GKVakPzL3LfJhGKVGGd4CGDHwJBrjcJs2LoKPXHx3udNVWNZNgVg8fdJ2c2UNa5W4nwzduNezADP8fHSyqW",
  "key42": "9Xq3LLfT5kqiyCJc1NNWpEih92zDgMsYndKVM5Qsi1HjcdwM2ZQcswTKbiTqzWD96Vckgm1CymWfE6zQ716BPx8",
  "key43": "2Uv8Bf2aZJwgM8cddqSfhTpb3hqpySNLC2WQtzjVG9MKrBxpLD6zFFgfv76FTm1WeiUdJ9PpYY9PLn5ktrHvm9zN",
  "key44": "2dgjQPofK9mMRwrQq4vnJ4Uvor4Qv1QsEQE1krKU5RP3siRjM2z2jXN4X2nVGaEASgdHHvYaMWkSztL9hoZfAZR4",
  "key45": "5Kxg2EEnrcT4fmTt5nS3fEnXnqLRsbdH8WrJUEouruCs4gQnNWpjswQWPaSP1fvthyP2p2NF9fjjvY8WXXCDW6xr",
  "key46": "3J1nkNBWjJ3cicELesgShdj91Abe11zbk59CuTqq4uUcDNQbtEjw978yoGm6dADdoTijfMm1dUv1GCR1ie2nPUEh",
  "key47": "6ivWDeXJLCFCtDH877VoHvJdfP9TH1NGHinzRpEsnT68P8GpGPFpjv3oYceHhJuD1icRXMw3jxeZmJdFHp2aspv",
  "key48": "3FeC9BR8CpnBmqZi5pJzbfuPN1AuszHgkMYcaLwzXtjQ4sEXwiuzKruVrLj949gtF8wBU9k9ESH1XkmxjqoxNPKa"
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
