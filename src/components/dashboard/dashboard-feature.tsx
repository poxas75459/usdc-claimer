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
    "UUPuMGGQZCJmhP7Dg3JEN5EhmHpvP8pX43ZpMxaUqyXSnwBxpHfF1xJvU2jJrf7tmKLF2H5xskid32tUvp1cihZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSpiynDkLGv77zzZKVfqZ5mqqJDspGsbgZ4get6GRyzz8C8pXmiSK1GayqjBop5hp6kR8MzXCwVHA8mcwaaojjk",
  "key1": "iBYgPowHH9oTC6aZjB7oVTiHTDxqSB9k13PAci4p3JkEmSpqESnrajCLcU94J14DjNmZWbUNTKMjeD2bwC3Fdim",
  "key2": "5VaAQDZHGkYdskS2NWmAyuYg2jNmPff26ztBxN4U4kt8tSgYmzYmuEyzgZtrtHJGJcEr3FiBENQpQk3sZxVvyov9",
  "key3": "3V5Rid2tbdSX2pH8cmVcoLxqiwn5d7Nk39oXB3zQqnG9tK4wihX6ZBx6D144rvijQFwSswEp97tXeX387t4hwyRr",
  "key4": "3q5iS51kioSiP2poDQTqTzPDqQApUFKGprTa8AJPrHfT4W29rqR4hfMPNoLszvQkWaS8vv9nTFcDaNeKwBSpkb51",
  "key5": "dcjkYQe2SvbzpmoMNTBm2UVmrAFyWy9Yd8z8atzAhXw2VpZPDrfPfMPEYWCr5WA1WSRyz5u8WgwU1J1Sog4fLUD",
  "key6": "2SatosqM5t8PNxTrjSPVwPSPwrZu5rAdu9m4XAjDKBpDwf2NvnEzN3RpAmibNQGyZboVVnGmsUcpdDEWpAWoJMyU",
  "key7": "5YGtBKLjFtYHaGT22W3yVESzHSr8JURjM68HrEeiQoKXKRbMLNF6w2BCqWLYMKProuVxMjsUW37ixzSp8SWq7hJv",
  "key8": "61qnDCfyNLvqbLP9Xha8dHGBGUozAoU8wMj6FfcNEvN77C95WxLqNTUBjAFj1QdrwUTHHMeE94xkjASEdbgiuUbe",
  "key9": "GeQcYTt4SoUDmemLV9xBRPmcUT6XFPR8UdineES4i2BoA8sUJsBctScD8Z3hRfMKg9wLnqnktBqW8dxyCFJ1nS7",
  "key10": "xwoJmjEhDeoKhg8Uwo22NyUyemXP4bZey9U1mn7XF8DLwjwPJMHRvshPN1c5DpLsKBznUGwSHCa8rjA72SPiQg5",
  "key11": "4fp2FwZBbG5KnNoe9qyDXuc2WNx3MekJD7HBt26EeMAQtP8CfLLjNqm8TZcuZyv4C67hmpcTc6BxpoW4tFbuB7mU",
  "key12": "2rYjKkbtYRjBPGqya54ehXxwuTK159TveLTqYvn8YSwBD99h5dzEMmFzK34UvXWE2b47TXK4d2vGzurDCrzfGCQc",
  "key13": "5BBae1YpByvtJhBobGM1i3jnyEAkacN1UgeqLJssEaigBzq5RBSBh1Vkq6J3RhEv6Wy2MBg7LfvvgX2S63T3pSur",
  "key14": "2pAsKiF3sZ3ihrbNLJDhsqyEH2SaCgXGVGn1mjgy6CPwcBUaCSM9J3Need5RHQDYPCUQXHFo9yEPp1Enpm8H4V9L",
  "key15": "fGq4ZuAsUP9JDThV4ybuqPn8zAUmX9NuU8zqNz2zVF5DxtiF19UErzikpYeCz8gMX7Ncn3nhEi3a1RphfrBh8TZ",
  "key16": "23u3ibUSGbarpMeYZ6wiv4tk1ES6eiFB7mHu4TSwpHc5umxkpNG3uRM4XgaDB4yva5Eum4CgrVBwMk54tevKg8f9",
  "key17": "47ZrfGiQDi59hTb6eA57hjixnNaWFYpDqucJWoAyBjkQ6WtSyfqpEaRdCHd4s2nSuP7ZmsPpqRWZuUdxmDfofdEw",
  "key18": "5MKeH88F3P1RXadobsYNQpttmzMvvuFV3QSN1tD3iagbVVpYCex8VnoUGNydwGze2HMqxmZrjSX1Z5KzLhWTvZLA",
  "key19": "25jxY27CLQ8GLPjmVSr2esgRxLM6WNvT8tsMTcycCKUCP6syZK8XNsqDnzCb6oCfap1nPknWJrXR2DAHZusiMKFW",
  "key20": "3NCcaFBkzvPNZyA7BX1z28uRUzHWX5VWhwfoLEyp2MHrZ2pCPTPVw5gynbUxSVDmbFFMKqAD6CtnB6cF92KgicRV",
  "key21": "3wbc4dPbVTHnjS43tvVmtYnuNwNHXAFeG8KeveWbYbJrE35XEbDUpWUpsJdyeBhZ85BD1RGNJSKwLibbeKdhgqHS",
  "key22": "RxZ9WP3eds1YHgL9kFsvasDkBjhW5CbHoTB7Q2yUn6ETLQzEcr2YwcYvZNc3dZxL4ZifL2eiTwAHTyfji6y8VSF",
  "key23": "58orE1hw6vB1vL1qSgSUwkDDogJUGQRNjjvWMZgGXifgCDoSATSZ2vKp4mPyyavyqXsBN85A2yZS2DDQ8PyYP6Cv",
  "key24": "2m1aMjpyEVJ9dTa3DuR4wj4b6hDKQasmutj9DQ5pSK1wZYwjy5kaowhoJTUswZncUPJ62z8zuPt1MtRGz5sQrcY5",
  "key25": "4h4G329kCSc1SVDdyop4AbpnzhD1pHtq1HAzxadUq83u8i9SmgqBwJwGGtEgpecSDv22j3YwTHZo8M161wkcAYsL",
  "key26": "5XNem7gXBUcbRMYPNFHjGPAEY8rp3LW8HirUicrYJZEoqKTyKLQWf13eeM88cZbPTdNg76RFjTc5KBPF3ZSpLCDk",
  "key27": "3demeV9rCUZ9hiYUxWr4wvMYayYGCTrYh3XkEBbc2rTJVe3Uy3uchKb7wsAEyUC6rFkFgxfbrquaw5DUHgeen4wL",
  "key28": "4KwVTVrdaesL36BuwHbvf4SWKQtWDDiwW52BAV87zeqvAJodtJcgRDTNEg88ru5WZYAeruJW7XKRKNBSDzJJ96e6",
  "key29": "2ocoy41s7rYdyHtvXpVGG3MJoqS4bSoUm45L41Zg428gwE6mMfPcDZyRmqN2xwQ8w1Q5k3LUm6rdN6jx16XVDp91",
  "key30": "2mVgBzkyMwfKMThNy8foMdAT7vfSy1zZC5VLDN61bR3FjbysyyBE9j1K6HX9324QCL8HpAjUkd3fLBycZp5TAffT",
  "key31": "4vumJxDwDY4WQThH8kspvM2G8pkzDnBUraQWpCSqPhiwjWCLp8pbsbYJvQDYaKgqve33y9iyB3RnS8xnaREJoLQQ",
  "key32": "2Lw1xt7Xuifup9SSYQfDvFAgkoN4q1TSMnneAM9hBPpLBVRx5EJQwVvyRnsp4V2FpEc5PpmhUDZXiLEcL6WddcS6",
  "key33": "Kw2KxdxEhvGSwSWQXHp9wm5uiBRcxUcfFHnXuowWtCuyXatBCgwy1ofwmxDKzhJtpATzxBD1anxSwTfEkBADCRe",
  "key34": "3nDPS5NTX6eeYxZ3xNQfatfNYmp7mpHjTWhKfigNjG5zGVShPvrtkowMkKE7kR5Mqpab4j8nksVULERtbXEiL8oR",
  "key35": "49dvsyY5dbhDJ4GzTwWXy48pEvVuhxQLp233RWheMK9d67zAHGPdEsnrdiJgqMoQqG3w9LemXCnUzWEL3WMjHh31",
  "key36": "CMy8JJhhhi8TMiELAex6kQ95Du7EkABvgA2Xf41pi5K1YpFH2phSum7pmEqwbz2rqqMPhWX27t1sj4Q1WThgRNf",
  "key37": "4oARYt8ovAzgkeveT1AGiVdpRA73mqANSPKUt5NQVxuFHVuV6Eu5FBJCeBbgBYXrmvQcQ3gAFuUKxYmqHFAENxyf",
  "key38": "45yPQKTSX6N3XdFjWKLGsRzGNM4sHfgSE2yWz6YMcctfbE1rH2QZi9RZWWHuvrvg1UbdxfwiSQAEFYnNYfbcfVU9",
  "key39": "qKJi2vyGR6agRjPkPkF8N4App71634HfHRHvK5SdTZUxpYNW6qhE37Gxme7HRinKsaQtBLUYskT4ksPG1kfabaw",
  "key40": "342PYnejR7At86tikd4Ub9xr2uaqFf9aUqzAwRdk7J589W7tnFffNmy8NW18ddnntugY2peNAFTxENzd9v5J8W7q",
  "key41": "41D2DqqsxcZnxkj9RNB6tRjtBN535dP4gT4Pzm9cZZsZ5KfAQsNEsV3YBwN7nkQNqfotY96DindeWVNFRZgE6Dva",
  "key42": "3ZScHPaRLr1oveJ73STP3rf8gVTRPwpwnxwFU9naNW8oAruWMAHeqgjBzb7X5u65yq46gk8HY3cohZPiNK9VunWm"
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
