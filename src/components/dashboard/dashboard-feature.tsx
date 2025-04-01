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
    "67Ygc3XL7cDgNQ8N56k17m5CvdYo17393gZUzbdvSurWcvo6N7FdfDcn3u9uYn8MSpd1G3KjfXoGfuJVrMrUxoED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGGQ5ZSJ5yFMtK2cWnLYdxi41zv9X4trBLp5NfJokUu5j4PssGdwRqia8EunLCXBtoKDycjdoKA1g6eE7sinWXm",
  "key1": "3gf3yj1ny8fLJdQFbkWNE3gCA2BfwVnvyzCAhB7iDQG2LpnR2sXa6S6GpRDJ7hsrSKEHsz3S86EEyKFcoAXa1ibJ",
  "key2": "4LNc2oPjmnNXa9yUk36wMx9YabHcX8voYutE99zMvcr7VcBUEtJtjB1fi4rkiCGyimnmwJitxbjb1WxvAiF6unQk",
  "key3": "22ecCTdXDw4pEWmTWfwBzMDLyozsQQim47URPhmQdbbT4hzXm9Sb76Vs9CpPrQjxk1BnCyvnButCw2aSS4fqkbvz",
  "key4": "2R7LYN6p3jCa5ng2Q4Mq8YAJNLmfqTyJ5952rD8417WfE33gs7iXkTBWaKtG7Vp7UFT5t6PC89iQmN7devfZJu9c",
  "key5": "4kLKqH5sfEwgq4mHofyo2xrLZxNYth4w2SApGazdGAQTkqJ7YgHHqNJQKkYFFGJ4wy4hh1tJ3sBW3gdLierfc5og",
  "key6": "WfCat9xmFccZNVmUtshzqiYJ1CkR9vUugbydj6tEtov9MCBEA1A2547DpX6PoHcs934GFkmb1SmUBdQ9yVjqABB",
  "key7": "3vLmegKFZChUD9P2UojFE9UFnjh3qCa3cvWUJirch11Xs4Cae7DH7kT5cYGfpHxu16i72q9UmJxCBtAbjwuMr7iQ",
  "key8": "3nfsPF7L2du2vQcgZhr9rbcL9L5xwcrbpZAwmR9jXNwFZtvrju7ui8zHYZJc4WC17Dtdp5uneuzzC3jPorUyBHeL",
  "key9": "2vN4W38V11vgkjZ7fUjGiuDB4Fr6mEnkjyXpNqQ2BLkgGHXtZeinKwiH5bR6rDT7wxKU5G7qceQX7FfYFGvRK9wN",
  "key10": "5YATqHYrMqydjHMtm69s8RAYAFJTGgXhJR2xGTPUMC1zYGTmMtL1AxXt4AjDbWJ7Qi3Uapd5mo5MVce6FSwaojJ6",
  "key11": "3dTjNLtWjb52tAEPppjFUfeEdrUMfiDuXiXZZgfFR5ArPvZmKqbfPDQiyWtATER74uwWatqwDqBZ78Wcm7NFuDbe",
  "key12": "2Sw22UaUv3ii6cRuzM5x6wCRAJMnczsFp6uvnrFXozwD8U5ow6PYWJ8kVjYGqhbqVmNCYjUuc1TuBWXo2QLKyYS5",
  "key13": "5ESjuUWhmo3xrTghgwdKjPiHyyW47a2AeNp4rcvNAaq9aB1UMwAkVtBSZDE8hBrGAzw3txNzD9mcNBJXZh15ptE5",
  "key14": "r3nktAGJcuMxfJPAzFWurcUdTX26LYYJTSsdmFoChZKwoWMz8iTcsREgw5wpsyJ94umAW25r5VEHh3tRAufjuwt",
  "key15": "3KXr4srM6nLQ6enJT3K73CEFnzwe9iDPZWbsioGqc1xKYHgcfqoNrGSsJ2BwWBi9BJwjgkQjWGN6uGa5uTHDW8zg",
  "key16": "4oPB7Wb3cNcC7eXg5JgWdNAmeJNEqGytKpHYAZL4tjoYQezEPaRUt5bYQw8Shv8az9fAhcMr4oieFtfwb8wEtggg",
  "key17": "5aLe2mkTKF8LS9iEyrq8Bb7hAUxL9t77e5CjxtwT1Wgp1neFeyPZV7u7KUqnTk922zJyJapNWaSfpqMyLfqDfg9P",
  "key18": "3PUUq3U66daXdMutnXnvVY14HKJVRkMjvQDqF5GRSa8V7Yo6goBKWEsPRpBQpDPDnJ3zyhxRRGgD8xxiPVPnvrKH",
  "key19": "2rzE67B1cM9iZyQdzbYieby2hBgndTQ5r4eTdfLRdpyhCdFBTebkqbVhKSFn36wRN2XMuMxzMLSN1iLvrbJsEN2a",
  "key20": "3mspeNBcBfCGBf2F5HYoXHo42HkX7C7pjZwJQrr8jfYxi41rF4phH9x6iSFqTG19BwqesRcabTg93UV1TqQoURt1",
  "key21": "3Zuf7LP4igbM1KyrggLZRWDCZjkfXBm19ajyYYBGaF3XLn8iiPtDCragof5WDmtiSrLC5ju21fyZSKt2QZjC8gC1",
  "key22": "48kCDpCrSASZxB9QtP2H8KrpB1wBcpfC23Gusa2FALvkLqPUfJpHhEKzGkQYZ2rkXeL6USbANpo4CUSaDD7j9Scw",
  "key23": "5KE9edpZotaoJUL6DUr4bKbVw9iwAHoUrMaWHCY3U1kEEAYyKcHwGeWhstmLN3yVA4T1YYuJeZnyCA8z4dWwd4ag",
  "key24": "3HyYvNkDwVnifbbJfFZ5WMUs23nd3MLaFtazTKNqoEAYJW772oMJc2EF7rkfobJZga77HUUMDayZck1SSF4rrGNE",
  "key25": "61ppURHS8P5DGjuXaMvAJKUB4Qs4ZY9pjt7RcfoxAsvQrji2t6oE6CzbwNRdysJFNB9Tm1oHuBq4sMKAXAPdVmSg",
  "key26": "2iwfYKMJhkZMVdXK7ovdg2kySd4u5SuJb1NEDPPJyphTsugh2tfnYowQpACiX8tbw91pL7Tp86mQR6Yo2gUK462c",
  "key27": "KAFV1ha41c6Q9KLh1HiGrh9qQ7dWWERCYhehhx9c5xFqbfoZS6YononNzvRhre5jqYYjnkS9ug257d1WSkmSDry",
  "key28": "2LGiXWfjfGW5U6ZiJXT5SyoLZpzABu1ijQyKc7GMAE7Xvu2GBo7W2xZaNrUuvbjqRH3mMX1EYT2HyKeo5yxF3RpB",
  "key29": "4jJcukmyoLK49c3srzCPDfG5dZLh4prKsvL7p5ZMLv86BGkmXgjVnp3utHoyEfV5DEs8wHawiamTHwb4iRNWTMjN",
  "key30": "59tLwAhKRWQQRDvTdv63kBysqSVJHKLNpt7UZA2ZveHFTikMKzJMVBBNpT12xEWCxvHRz7baZp3uvuJd8egbEh1q",
  "key31": "65fZsJ1pyxayAQK9q1G7eqkpyop3f4Pes8G9yDKSsTfnXAFB1TTLw65tPEhw69xKvNXbHeGFv4rRyCQVLk3Xu9Zf",
  "key32": "4H9Wp2aQzUFE4FHREaPKivJbJGzEedunT86cTNthzHKZg1SXakYMraNPXywqFgjHRk9DXqCPhND8BoyoS2WRu6L2",
  "key33": "hJktqafeGWFHtHzeGfvsT9kERNpMv29Chq8rWsRbDWQp2zWZQcgWdvfE57n8Ufm2Cy2xMdaBvfzD9rDZBzrK4c2",
  "key34": "3NitKGC9SigFi1hBM3wqrmSMKVf5kU79Ah4LDpLqmpVARtAoNbmxPE91ThbUbqf464iKXWWzDrYi3vkYAfCHwsUS",
  "key35": "3rV4KhugViiNeLcpzGiCZsSi23yB8fx75V4gQpbgJ6tgjgNV5Sd7Syo979iDekZUTmrJvGJoojvB1Uc62iLJy5N1",
  "key36": "586nXuJ3xh3Y6P8thEfhHNu4KPCrWeFDaV8jjEYQYuyT2moScQcVEDdQB92RruiNtjdx9BRedJyMs75vTCXdpPYb",
  "key37": "454t9xFdF5exxRef2vBeSCn7WbX8PgqwXsqEzi3GPSxUmrDMUcR6CMdthkhLSc9iLkVbBSzZGQQW4YY3DiJMBoK5",
  "key38": "2LHnpGmkDKjsQtdsG5rV7wvgNuPBoQqGS5AMCc5VYXZro8S7KPVJR2yfHGXuHT92Sd3arTa79LAtEP9FWPumHaos",
  "key39": "Um3MEKgsSjTroegz8EfJ3vTkm4Hd3rK2p9RBBPygcSuaeKzJC1ivtxVWooBfEhAB6usoBnZaSL4qWRtBjrpi2pj",
  "key40": "27wE5pDc776PZ8W1wmNRCpyCYYBpUSGMJvpsBG3K2qg887T6BG53WWigPUtmLsTcUFmtDt45NA9z2fx8YLWRPkVS"
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
