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
    "3nopFLsYpRw8xKiA87F1pLPZ8MrZUodJWWy4d1X5crNWQMCYFoSffE5w9Eahfjf5PV1f926nr4JXkusQVCV4NSYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46K8nrfVRztWbFo3PhDupEqKvPHaHhgN4vmDNtJCEaS6JWD3Tqxbc9T7oRhyQaw81WWt5RGWTd4KAPuAqpGTSVGH",
  "key1": "2SaBhKG6MNSMYLwaCVET1ZPaPQhbSyRineD7GCFVDuS61G82vhU1HoJ1ZrNaCfweKzUg4Uu8iDFsc85qp4k3QiaT",
  "key2": "4GyRPRiVZn9PYCmHZATLdXHtgF3C3xStNPqLX8kU39qmaPf8mMgPScMM35RnKC3PwnWRWber85VWb2TQDX6JHFrp",
  "key3": "Y3w8jHoEWvetWmb4vt6xCi2KUNeNQWeMxwTLnRoAt6H6Bqi6DamPB6Whd9ESTZEoHacKsrfDY3NDxJkBF36WcaM",
  "key4": "2f6rLU1zDEqwEvJPsgN9mgNUU5PkoM8Z44H5LZpbyDayrPStBwkPGiaVkdtjRTzwpjEZvjUvZXGvXzk1St8Wbkm",
  "key5": "4aZoUzt1px9fjPU9vGzJ1kXqp2aS5e6K294taDWXnC1Er8CBgCi9eVfebo853Fnx8JkAJBiFZddA5S5qcD3eXJ34",
  "key6": "46sp23aD7y8ZcWRRwXPegMSQx2uFcoL8BkwLeHZhc6nTicC8fs4sVRDHf8BcxvN3bG2Yyut4pT5Bpxsgf32yDBmH",
  "key7": "5d86sk7uuFm6zU2c8Mqzp6TKxZ8p8ioaJKFVTgbAoBYCxnyGqMACXYuwFz5qMnNseUfaxYjdxuvrE84g9TsuBhrR",
  "key8": "3UrsUZ1uhfdJnAFWpfws93TE4wfXRuVtWYca4mSsKCw8ZFaY3j8uduHVnhXvjBr1afniY1tcbLvvGGKWvC4KwsGn",
  "key9": "5CP4bqgRJVVXw95Y5T9R2mdPkvnfLfS9LoWFikLowqHi393CdhAWhWFQ4ChcMa89khMBSCf5ok4YUuaghgihtjTA",
  "key10": "5enoGrprnnKcDC17cUwi38VCUXdkB5zmEz1xx4kLZ4Re9JoNhj2nB9nq6DRhduqGjneF1K2ywFzH52nWWyV2M3Hw",
  "key11": "3fD2mxpL5XntdvAf91J7GX9rte5gYrrppTVfGN1eDC1PDQ1iG66wewcnHSKk4fVtjwexQzHiLWcJ3B4b4dS4kpVZ",
  "key12": "31E32Rm8LqXy8gGVJnD9ksTUUcV8LVnAugcte3bH3kUn11YWnkyYrRdEaZpHZzWKkFSuuAzQtokZet1gu7Eih5dm",
  "key13": "QnYnySFjViF4ACZJWt9y9wyPjWzqnFowZozpHFCtWkNBAekSmzVAoAdH5yqCX7gKBYw3ZdAa2CuhwUEHtFLpgn2",
  "key14": "2tkbuxLBk7erWU93P5wvxh93RRB9bNWS9f1KuFkWejwGJ9R5LoCJreZfxmJcZWjkNov8EdH6L7tn3U4cDsGjPRNU",
  "key15": "55aHoJPaong5irQQWKHpLvVwRPZmoMRpkkJsB4Y19kaKtHBKroH4TgTF3j4JjR3nHDNrq8T2C2jrXxjdhYa1Ko5T",
  "key16": "RZoZu3WTitW3CZ5fqMinfovVPT4eexEMRt4kzZ3T3cpL54BzywPyMJiCUUE3QXg17Uoqp6me96v7VX7SxXSzBky",
  "key17": "5NbaeSjHhFE85jgNtb3fPMShmLBBoRw6WabtkqHVcL224GpJBdtbthYfS4XMCcJY4TDyTVTLinsnhDHfdTn4q68D",
  "key18": "3D7vuxMQ13qjcSTtHG3NQuXGtQw6BUVrWhg4EiaAhmzmv9NC7NKTs2SgmPyRFrH8SNfZaFR1CQCjXvAQiuXfW5Ey",
  "key19": "4rKFjf4qVLNi2fCzjyeEE6sX2GrnrM1KTh33uQno8kK5HRWFJYQoqWga55L3YMQFKK7qBF55fqQPv825E4baLvD7",
  "key20": "2pCsaGSPJgK79eKPvYzGixWS4AJfrqTg3duMZmAaZKXJJmdo9dcSpZtWbGsr5Ke6jjwAEHWofMgH7R2KtjPP312T",
  "key21": "2PaWHPrG7ZBrXaBpmDrTrAow6mMrEdSjcm7Btcqfi7rXe1ACcvP3XfXY4M7U1bwGMqW7MTRjWB1jNwNT9XmqidWy",
  "key22": "5VsULcpZyxBFzREiPNtzE92p4oZrKqTignrgg1JWqvQVZTzVvuxHFJ7rNQJC6SkAjchvLi9irtfmcDjAhuXsLGHk",
  "key23": "3KC5rTiKwq4vZN4utmERLT1NeP3ZuZoJN8q6HGX7B7ZQNepDYgpgSrrgqK9s6gPJ7stFgYrMj5zUgEPULrHuLHtG",
  "key24": "5QmgWn2bvSbW2ZnargbuoFwLgvCiK4A7A4Wk9LUTyWBNH1dydVufGF1uUKH1GUwccASD62fj5btfxYKTHdS3pM39",
  "key25": "5be4acewSQWQYHZScuAa7REGtyDE5b3RAwjZwfzzTEL24fjmhQEgTWBTJvcwEhG7g4EU3HzmprbwZU6sscGN2S1c",
  "key26": "PYWga4yaFn6k2EXwgJ865QpeXiH5ZA4HHSBDVLgra9J1VApYJQ2iHdraim3Q6Tvcpj746K6Z5gJCqmfUT7MFKjb",
  "key27": "5xpHX96UF6qoyvDPVEMLKoTsEqkakmLCZJZ5N5TSSD2Ak85vR8gH68LGx6EWMb55gwBZzdLJs2RjNcjSJKJYEA2Z",
  "key28": "2uJrGdcnb35ZK7K37jANANnJZrnpzDuMCrVhBAhHt3p675fqdYzHc73HH9PBYUcLGYmsyiqdN7C7Uo7LbSfapTvz",
  "key29": "2h12k6oWsRWaHitunNSLRf25vik1ppBHMEcj78dKszF2RE49aJg6MvjekivEkrio4QKkMMCt8RSoTfhksbQ1mvDp",
  "key30": "2YDjYgyLxdQBzqBo46sFM8Hs95rXmFSyrWZzXXhnDRRBqBChAXRDYuEx8SM1qXzCuy4u4Cb29yXZEvMVedVtEqBi",
  "key31": "5c2NZF6opDTU3X91osgMgxMhdry8Rn2jvk3bGBFgVxKnsGy9kvaKWiqwY237HKc9TnCi7ZQCkQoYs6ooKzqxcjV3",
  "key32": "2c4X5VhR9riDLcqwsJVEJGZKYGZTfbHwj8bKBvCaCfZ7uKHHtifZiDVUUK3w4Hmx6yowWCbxWq5R28xM2E8VVP9",
  "key33": "3gzZ8bGGnW5fE6xQYQ2AwfHS81mVyq1dJwA7kTLUe9pQJdXHdk4qMvPfX5h4DYiMpdXPfBRcCV45hoAiWGQNKHTx",
  "key34": "5dgrXAmEKGG57m6xNwF2x8uLMGtqs17kfeyUmVv66hzoq7Txi5AKtrFSRCAiZAL1ooUNK8vAxLWJhcmfkCXXxct",
  "key35": "4umTcx53qxZ73g1YabXZKmg8PNkWLEPVFAjK9FTDUguiXiTPESoNSiDYjCjhEo3go9Cq9s2dgdEbN77XXLdqU534",
  "key36": "49Z5ztPBy3Ww1P5yPgAJcXj9BuHrEPpvpwoherdav99NwHJ23M1VxtzhaFvGNfdGcB16zWRYWcXmNqWE24Yxb77C",
  "key37": "GjvDmKCakWfRJeiYNowrQE1Kxh29Nbpaw27ifWZegctz63nL2ZDap9XvhCpuJ6AvzUQELDZQkJMSu9hVHoMX2TA",
  "key38": "4xCTzjJL2ZSnbACua9R9fbGGnDZAoTsEHFLgkv7nUJE8cFJAg9PLiVHrrsmMTSJ8pZmTkDGqp8k7AB2PWHvhVc9M",
  "key39": "4e7TYfTVcWWnnQDyoJkJjUrtKmLe1zG6CPpCjit2bnoAFbcQ2qrSC1NzXYqGEV9uMMdW2xD92j3QD9JiR4ddZvtX",
  "key40": "2DYCSYvi7r9cFDvBxZBuqvZrEND8qfq8B16nk1g1YsqaZRUtJC1wM7X4ibhAJmNQsS8bp7ZA4fr5yxT4ND4btjND",
  "key41": "3TEmezKp2SkGXfV86nANrUemiop3EYGWZR9ky1ojUQTRrn3UgAZNCUXPkc7ny9otfrs4MqR9YyfzPRHBZs6MP5hn",
  "key42": "38x3DK3A3dxKWsYaKwTWt6gSAtrdsTRLVFhmKrkTsGQ4UAhCUCpFQnSeC4VJvE1WkC8LptPKc8uDCgc6MNHVMj11",
  "key43": "5pyZUCffMGd6TsnoLKXPsjxP31HBm7EfenUk3AFqMMyNQ7HviVrGaViGnjcPAQ2vjbuAnqccVxJ15SWZHj5TAEup",
  "key44": "buEgMiXeipdBpgfiUzPUyfYiWucYuWy8DmbUpr2s8uyUMmuLC19YJdZuCpLbzk7Q2KqsDXJ1ipRxhmiuh7pVHVK",
  "key45": "Qpqg7FkaTgjzctrpH8StnA4KUwrCYKBQdf1MEqxyGhn4Mw1gCKCkYMnc5U69n3CvcJxrj6md8LGdCsJjT8Q9fCB",
  "key46": "ZVtzkyKTJc5igPLzzohfBTaYsFUEFWiuaM2F8JcXe3NJKnG5KGvmpMHSqEdecPos4DJAQnQvDXuDz6qM35U4JVn",
  "key47": "4zoRbneaMpTrLDBz4KnPGkmAhNifAGbQdUEKpG3KZHtn9oL6sh8sFiuXKbiiWHybkETNoza1MFDTaMxrYFQvoLXG",
  "key48": "58LhWse5PXss7qiCrm8Ro3TdmLCBaxn97oHXm6ZsHHPymAkdjMRtfcZzv5cdya61VWH69B6wRc42YccTCfJdXsn5",
  "key49": "kn5UU5v1Cf8YRTbarAhsVTEfFDU7QgYUPwRj5Y92FriNyP7NbMugeF1KjuKgQLZS8SvH8KXsGFZbQrXrVwoXJD1"
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
