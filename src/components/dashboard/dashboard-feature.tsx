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
    "GCmsXS2eCS6EX9GVb3f6H3DxWwQZoGcBSPsugy8QLBxSyXTW9D4AL1mWr2QwXJex66tKt1jXyVZxAAJM7pVGkbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBvxtG6wYrYQbGW9qkzpWCGNKe9X8GsaMzJqcFe98sSRDERvDtqXYeew5wt2YJtCyACfZdQM289b4aBXpuyDcBX",
  "key1": "34GUUxZZh6Aosv1VEtsLqqHrzYt1bfGmMdCkFmk8pk9ozDwRUzkWYKjW8nM6FZkqjVsyvPbAVidX4uiEWvR8pGtQ",
  "key2": "51m2CTdq4K5PYwLcHrsCHuVDaHuZcWDzRhUaZacpHDcUhJqGN6zBDFBm5Kgs7tpp9JKFgcE2ST3bKN3A2EocdaQk",
  "key3": "rbXdxzbRDfyibCxhZTfzEUFXoR1RDi3kwuacRvvb2MgMwtGESMmu2DSP1nCP4qtRWhAvWGpcB9QUGSUyR5zJaRg",
  "key4": "3UEzAjoKCTjog7GhYXUcfwFAgLDrkrQKj8fxqKPxz599FNUcQ5b2amBrqPU8b2rEnSsLhNtQ5DRyCpT2dWLYr1BY",
  "key5": "4AQd6DweAAKsTihP2ajYUgptQoXaJeqLYPHEittUpLn7TG8etqs3cR1WJ6CA4nxrqPK79t1x8WBQjPPNLwXo7LDj",
  "key6": "4g5waWgXsxkZ1y6zqv54Pa4KFxit9HbtQinozKcQWaKU3R3Gv5dQaCwv1fQh2ZE6YFJGhobYybxPuGfpctkfzfar",
  "key7": "28UYGhf8msnZmpctGM9BiRgumckRZhwp83i88KqsnyRo4dsMptd59SppaVaAGRvnYq1ZmMqYTwEtw6EMEihmDeqN",
  "key8": "3rLX86MW5SstH1aj5XWA41atyKTXVEHvW6eqjpUEy6A22Q6ueVCjYfYaNsiFuAc5eiPaiq6opRXLQ7EJZu4Pi9mG",
  "key9": "34r1B9iBxvvr3zVmeutLcKqVYp7QEcixU3prJPhQVkpcjXJNErgjWjqLgM8E6cymTbwouqTgznbGaA33TMWtwzRT",
  "key10": "54T3oZzmSfiKZWCt61o2hf5y1xV58cessScbMxqBoskNmdazN1Jza12JxcGVWVc2SPwXZRvnodtm9d7SSyCXYVHg",
  "key11": "4EZdZrh3wbXcqgc6zYR2Qjicn14NWMFqYB7wdVNmE6TrxPpdumD12BnDnviH4qLztMvojg2rLPiu2wAV5pJN5Kxy",
  "key12": "53dzePg3waU5QfhLB9GRwvqcsXwteBYrrt2vMjqEDAGJ3rwCczXRt4RmKg7i5BZiutKXjAvsQHHG6tUtLTxmKr85",
  "key13": "2N6M7mQc2qq7jPGrJN3vbAffDN2qEnvaTUD2WknJvUZdcsG6PJjAmaVxs8HzaNuBybXiqZhbfFVaC5Rnew4nw81R",
  "key14": "3H5fsZWbKKZLL2mGpTzmtbBE4G3s2DypeupE7FbKv4DTPDM9jVA39pBRmxL6jWQ6pkotG7FcgCrZ6ffuMbMYX4yr",
  "key15": "Vk1Dsnkfon23QwQYPdjcq3dCdgjhuC2JZAuSYdfdhM4werNC1m5W7Rk3vrVeufenaRv3eeAxBegYserf1yd6Trf",
  "key16": "25FaRuTGhpq7UFNcFMjVBphtLhwT1xQCjA21TCKyj4TZ9iyCheDkWNrsdKRobj6RuTovnrYn95FoFebdHu5e8hx1",
  "key17": "3n9E36yE7GMFWBawm2aoDyveBnydjwMQnAD8txVwEi4Px9GV6hbfMpAWrWWeZp9W5qu7h1qfXkrYm9x6uAubarbk",
  "key18": "3kzSqzj9dw2HrmuZn9XQpUSCGDYj59mRd5ntD2c2992Fyi6n9vkB1UTqDn1CVq4DBnGhBktRm1E1ZU6ApqEEZBm8",
  "key19": "58WK3AAfBJn83uzXvLvnZVMFT3gsZsQ4LFmR9WCzwS9BGiSB1FmZZfDUcSZeAWBw43kwUdQ7SAPx9AAwCJfFc4PH",
  "key20": "2UzBSN371vanFqSdCh6aQLjG7zDUCQLAB7vwZs5VJnn5MGykVJybDrYyK4WuDMGhwCCYXKT5X23H1uxaVzYnegNx",
  "key21": "4CX6jgKRsw975hUA6UbkKatiEj3D61QNQU7j9bjfNJt99gnnAfyJSrH5JwbctUVQXa4BYTL32dTUDySiKu7Vegao",
  "key22": "LEFmh7rLXbxboZMF19vqGadXTqi3hgiywWfoG1jfwNS4h1SUxcf69BZwgjEBX4T1mNwiMaYWpQxT4rjduTjzA6W",
  "key23": "4E5T5i6LdKqDezR9NdPeXRDRaRmoAJuPRsbsCVLyNuFRwHb6oo84KxySJj8aHjgeQnnVLwpLk7S47rgbzwigUN2g",
  "key24": "58AqfKUgpMiZBkJim9DVeE1EFBzkQkTiKJrmzZuSeMWsHpTYwDohafK2WDqRSnuaXfQqLnPJxHg1LSueS4dRfZm7",
  "key25": "3HmXjCvKEq79vyoWPtXAUDysab4qVSzAKxgm9nbPeEZniK3UHvPMBUEDcZw3HYbWGePMtQiPZKtxcpwQB9FztBbM",
  "key26": "kSXGBKi3iQfGSumDHJFNVWqUj8BPM36gbpsfEmqhemyrxesnrH29RKrHUedfuL5iwjJSnhtzWTDRUGYy41xsRac",
  "key27": "4qPDeHHtxSzsztty6F3j8aCbAjEts3q463RSh26v3iFQEFCwKbDaa8CwxHMkRGaV2Pd6SDaR6bKBZHoWGqDwSd9K",
  "key28": "5MGm2wwopxL1DBa7Sv2HKdDYCWmJx1ZCoPiWyfw71ntYnVY8QeR8RXWujhvGLmsA6ZPKe2gScBdKqjxHuWHH5DZr",
  "key29": "5t9oLiEzZXgdBGVMpDPvNjXrh1PjUuzk3uaN7XLWTXCzGnS7zxXNC1XpWCYRPtRVQjcHJfukFVjeke4SWTdxzDL9",
  "key30": "4mWBAvRTYmq1xLmr1quBPEkiugc26wmnNQboDdwWCNjCTW3EvuDmUkQmerjj73Fx2jxWRsUUjaikdk5jwdhpr5BT",
  "key31": "4UkcLp7XGTGM8Tbywfqyb6Cfms5v7jXZ8THS9FrWibuWEdaRHsNnctPUdGQC5XAj9sBAbqcH535rqLbxe1DaBt7K",
  "key32": "3sVjgJgdnnLUCmZ1rMzAhVyW5mcu8NDiVxyGiVhsTP4YC6LW4uAMYpi5Ui8GzjbrZHggZpGtHWspS183rprW1m7k",
  "key33": "5tLvvfYhdzQikAFrppPbmk9zCdvjJU4obmTGkF8hHej87hWrUUrciiUEapQrwSwu2S6sYzUaqt1nYKiGk3pdEJuE",
  "key34": "672DCj5XZqpgJ7B85idGsKiaTTms2jgoUA6PXzdFB9pVeourU6o35sSAyzmSExKrBLEdSD66KJi9ceGNKbYC3X5Z",
  "key35": "3x1JfA9j2erzqtiVR5XcW7GBNVAA5QZSWCBEzXR6RZEXkmh1zXHHCNATBgJ63C6M6guDu7PjsCsu9cmP9G6b2a6P",
  "key36": "3aU4XQrJ7uYFatzyaNePuVYTyL3cDHfjGbfPGuu3UwBkgE8aJPXyo7fWAmkyuCq3DMGvxWqu2Xcx4DneGBMWD51G",
  "key37": "5PoKkAnqG3iowq9ZynphMhoKAXTuntuowD5q28CgomP6ueMFjMpupDxRNfXL1vmapC6nr9LDcHLW9pinEbTUZHZh",
  "key38": "28d6PRUWUjxidrkshEym2rs8KfAWyMbt6Fb25jdeG4NQvaQoyszPVhdoW5V7BCum78xjmEP2FyQMzVK29ThztTaH",
  "key39": "5b54kr8DD8ryUyNBrPyzT93hyEcPjGMQRY1SmSDt7qSxkzDX7Fe5Zobvht7XmQMNxzyK7Tho3wfAxCFpJE2ZLDPB",
  "key40": "2UbKVXxVGPZCoFeB7SqFNjqRmpzXJN4He8eTTeC6AaRrUpyf5VXpxxHuPt485AChikecFsk3AZB3N25Vtvqx5cqX",
  "key41": "bYhc9B92THKhNuNP7J1avLbz359qmVTR555XGWnpyhjcGn3oTSj3YS4VYwd2qWRsAbEVpekgb2uyJnid7pN9kpa",
  "key42": "2iyQWUiPB7VJS15KgEoBHLbrvE1LnxV6DczfMDZdRtAtBKkydkMPogp4gDm2YFcUHmJWo6FDivvATgPscrqxqQnd",
  "key43": "4XUD53QWRUMGUfNs9gJDn3epynFzqk9PGFvRq673MkARLuUkmzSo9mAmFWrdXhjYFs6YSevxjxwwb8gW4WnnmgBq",
  "key44": "664EraScjmMBbeDTmVbCKoJbxzqD1KJ3JKvF62ND3V3KRZMYTyf9i2pv6BtKLwTMS6fw1jsfWobtbUGF72QBHnZE",
  "key45": "4Ww4qbjG6daogLM2yhsro8g4XHavVyinRNGCcvoUKLvgpVVwNSz7qH5gWKtiYAyZydyT8pVPHykR96QSmY44v3F6"
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
