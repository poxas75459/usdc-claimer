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
    "3NqRJ3kGjjdUc2UQEx6tHSYPwzBs44c7qxatioknq3DdQ9T4szvq6kWGRBg4NsR8cvAa4E4Zzz7gg4Pv5zqB1FFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UCXzPgi6WNy8zAfRWRqa5SJUbTEK1DuLLWGBwjnTEKGEnvrQxShRxN8bz1XoeEEUXgedqeCu4tVN9d6h37HeEq",
  "key1": "5Jv29FsVcKfFVY1UbQfHhSB4hYenZzypUbENeLauDGR7sMgtvX7wuwFp9UM6u1Bbx17LMg6qKswfS7LJQt9MzDAe",
  "key2": "39MxM3kg9d7D6yQ99eQmsccyRQFR5b3TDNVA9x8Rg26YG7S337MPehP7AUCBZAvAJWopRiqxstwsDtJaH8ho2eKE",
  "key3": "2B6AxjWhYwgikmFtDaeSpXnajKUQzzNARuMgdQENj4tYH2cD7kWS8VJEC87vA9UohRLvLCx9LY3ZhkENmc58UCfw",
  "key4": "4X7N9ycgDNGcyMrSxNN2ihrGG171PyZRe1t6brUa8WcM2Ux8XuvxGmb4BBjViunV85w4PheBmYjJWtmGyXhNuyjF",
  "key5": "5o5tdVv2zLcqmZAV3xdLnr5PUqDnKoQichycBqFMt7vTC4HbnnfYidNxQ4SzuETtamoXgfZAFG2472T9cwPqTYJG",
  "key6": "xzct2FBtgsqrehdHTtxmzqXaxW2YFGtCeS2vH2exww1LB9hiUFn76TeHWXvog1z9rjJBq48mFsXNjSy2Fj1CqYh",
  "key7": "41NaAmVrf5B2V6Akrb363UR78rdS3rPdqQTtpiBDVyQFtwpwR8o1y4WVKsJGPmHXKEDJv4dD9sBvuGP1Trdgdf34",
  "key8": "oMoczTCsbLw8oNnetipwVgXMGuTmWysiWnMV6FoatDTqpqcJmB2wkaEPbNcjB8SgB3Zx99ZP5Fgo4YkyxM6yCUk",
  "key9": "L9Ke3rYzhwSRrQJTvuudEsUSUP9b5zrPgPTTCUK4xVS7zQyJdPneVGUK1BymBKVssEqJLPFi3rvP9SwL3FQDPMw",
  "key10": "4FJouffDsAqjF2o6PYysorDAJRmmGoktrUWbNuaNQXSp8XNQUEfGSUVJmpwtooGJGr3yksfHgHLLJuieBngQpogE",
  "key11": "4E4svcnoHtu17jWhJQkghy42B2eCYEVnLCJ4LEMfSodhaR3hAUxVve81YZDmAvjY6Kgh8jUQQuAEzcfdhJ6DpJYP",
  "key12": "1PwRRbQRneHCAoYqQ68W42fFLVxNaCEcZenuFDMdgmL8kxagxF7bfxGQCqH9iaSD4qGvEiuFPFMFnsggB4SukHh",
  "key13": "38F1uLReb5uBJXyvM65H8EX5xQjS4SUyfYA6TYJoVwmvs3BK6zYejpSwxXArQBLwLoKmm8KgnZXwMdgQ3FfAsya7",
  "key14": "2CG1veWBoMstWmfyHhkwXxWWZvRwizrVetRWpCMhKz3QNeoXLJwEQPGetztqh5cedRzrfmcAzxKbVE3woF3bgBku",
  "key15": "38DCy4V87gLoYePsrAfdvaozt2Ww2izXfNcxPGY3m3g2C2CEo58TBGtqRwjSiGnewEgSBbCseVgoxUaXsy5Fm6eA",
  "key16": "67fHSqCFK5FBNcmgnwSFgUQwCfyVWucf6AJeMT92GKzfmm6ohs7Ckbx5Rs998rNUM2wcFUgKdYztLQ13QJ8N2j81",
  "key17": "448qjqp7ErN37X5BqFYDHaPZYPw3ZYcc6LSjrSodKbLfiRD26zwWxdib2oxZm9tAYpefGM8PFQwzCh3sDPSdQGJ1",
  "key18": "N8Th2cVbzu637QfEaTxUcj8UGj1KTWtCGk7N3KGtkFS4X8Dutrr2C3yKWHjSxgNEkD85wQSYc718bsUgD43QS7b",
  "key19": "2je17dSoJyCZHXqbXpKoJAdfF9vSByKnf5uuELS2z5prBLntAHE4ZSZLQ13aqoNNkwuMk72qf6RS7YoVehFCW4NB",
  "key20": "3eZYMRSs6nZT3z8oeiyphnoHzTX6cqLJNicCxtykzKNjWaco6fWipNQgkM1DKYWPPkywyBZn8vguZ2QWEEZYFrQy",
  "key21": "aYxgLjd6E98dSFTFHrAZvRNhAxx3xG97Hke8HLQensQrwNUveLkPsxXRt1sf4H5ZY1vFCxATinMWK6NVGHrjEVr",
  "key22": "5ZbwDF6Kn2Ab3fZ2e8dAKt22fiDmRScBWtGAGbArHS8XkSchQHA7CPRaP1M7hnktW8omJhXK31BFfcuzxKR9GoYT",
  "key23": "5Dnve6HSf7QBCfYSLTH4vJCaY2wwPLNres87vMKXYZbZTPGucpcrGQds6tV5F39dR8A9ZDiHroyzvsiWb3huisMw",
  "key24": "6565j9b5PgUuXXy4EFjSvHLxVfH1aKUL4NDESRyE3tmR1W5zc9zcQawj7fGqrTtbA5aePFziadbYAnnBKhBprBDF",
  "key25": "4RUMbGW2TMZAxBchwjBfkjqgDpBYckt55HXaTq2fY9sH1zkwHaBzKzpYTtWU4GBqNm4x2MwcakKV3g7tvujiScxh",
  "key26": "5gJweuqWz2sgSiBLptFAxgvWUMxLZ9tMBJurB2hR1U2zw1YahyW7Gyue6WpKnTJ6rECtedZb9CqkJNWpvbvSWDQA",
  "key27": "2FwwvfnsoAULWpZX8jRTDeNRQdcbCusD5EjEEH1QfbuWg1TtUNV3ynbAAGs3Eh6SzCzFPxA2pfgNG9QCeLGsY3KX",
  "key28": "4KEggUwSV4xj3LeRoYN5v2724Jg1CM329zReSocAD7udtynLgo7wheY5sPzhatEVDp7eNUqunLoht5gWNBdTEJjh",
  "key29": "475Z4FYgzVg9X3CzPoAr3RJqBugpGSUKNkQ2CX6yJDn5DQ84ayG4xeWdVVERx4ZGbgnkuhutDBnbT7hW3NyUfc2V",
  "key30": "3Y1mFc65WajKWh3vC18DksLW1xW8AJcBY2jkTxVJyppLypmxomBZb6GcUt87GAMi4YLY1pFoUJuuuYEan3fiy9h7",
  "key31": "2TEXNNz8fSE9MnV9CnjrHGaHt68mL5pB9FCcV3deJzTxSz7QDHUWa3i3w4x1Wkj5Qnwyy44dkyNiRen98bEn2n16",
  "key32": "4PDojVopKEkiMx53A687fBc3kh2k1d6tQk19JALPE2fcAB6hXWYVpBqmSmNzgyJHXPF8y927M3gQmyz1cPQESMNm",
  "key33": "3bM7e9GW3hU4RQp7UDygTYPkoDCijWDHiL9jEUhugv1aRGvnUswf33tUXPzXiSBb3icnE9d1R79vrimGnkBs5fUM",
  "key34": "4Ns6QbEoaBJKLftCgGWpp6KU6Ft69bRho1foiYpwk7tiQWrymVZCdnvKq5V3EpgPEdmambFbHc4HmSfKSaTwqMjE",
  "key35": "5pueVfpdoyrdesaUt7jp9wgPTu3bbHonYbvEbrZERys5bszdtGpZc9swNTys6kgFPid9yqMfA15TzLWy8x24D2JP",
  "key36": "Kgba8MP88VH1jDbvUeNKkAX3hWq9x6cRcpQqem1HRpeQiAuU7CFzJdBKKQbjfq6RyUMjoqhtA3WviCndKKHn2i8",
  "key37": "2ZRLLxTWrXkDoTQNuJeqd89Tm6F5TnRDvXrNMPvttTE19JNGv21UGHhZ7kTbV37VJbPf1iMoBCGF5uAuBESQ638",
  "key38": "3KvFaew3c22gJQZfD1UNQg5ZNUn7EGLni3onZbiPWdRhujkuBAUukkF7zZokyfgCXWoRQ5J5CsUwNNpStEzd1k2y",
  "key39": "3LqVRPBKm6zwKfB6CecHWv7MSFV7xJdBhWpY9aCthBndDDcr4CL4r3GgWrjrhCMzM636ZET76s8UrB625wKvveWW",
  "key40": "511vg9N4VZQDMgQV5sCRVZhuwYehSDvackL8sUbyuqey4swcFKNXiYoFqqh6yyAcLMMdn4XtSm3EWLvQEMbtQiTT",
  "key41": "2vCFxjL7UMkXBfPpFJtko7iqxoaj9wRVioCa3eTJaRZvXY2SKvJo38wWLkAe4LxvEdWyJP85eCuvJujTiosqVYQ1",
  "key42": "Kf5fxcY94dgvzcj53iz2PeReE6thPZcXT3pAcNx9mTA44QnXKDsprK8uQRRugyTsaaSmNYndebgUp8sLGZ5e3Vg",
  "key43": "3Vf8YHetqvHffZNh65dDPKk3UNiPorVhoqtj8CpqeCAdNTVBY8tVZxDS1dXXyMLeqeHWYznjmGHhz3z2HMpyri9n",
  "key44": "4kc868rNPVrLKQzUPpUUQoDGu4FWfX7p3esLvyx3NGBHftDokYxmu79vGNZNKWe2fMwTitABvLawVqh6Ug9B5CeF",
  "key45": "5Es693JnFa2N6iFmNyQQAwu9Z1qxQ93rSCGdnKe3kLdm1wv3GWQCysdfTviJfqnkbLnE6dMo2DynkJPLAcPMmgzA",
  "key46": "3Qvu5EcQUJZjf9YCZP6Zg72qduRUWv3PGg77oNF2aRixD1pi6vmbdk9ASLnN4Dvs93QtPDEzcvtg7KoCeFZyb5rq"
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
