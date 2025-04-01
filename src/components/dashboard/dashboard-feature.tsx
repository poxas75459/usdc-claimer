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
    "2NH3JxvyF5PXyLmTsxXZawagt59tnJyCtLG3Cf7Xn7ryjKRjvtYwQEowzNfb3vkPUycba6ug5MEp6BuzLhKrpXxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHpEcU9qYTgrvLEzxYfNMkpstx2zKBTZuH3qgTpPpzXqkT54cvkAmmMwaWPrxY5AFC98gEZ3Hw38D6RffZVoSSC",
  "key1": "337JoA27bwCwF3Tp7i6w74uvqiDJDxyDdyDA2bj5zCrDAiqvTrMMEGiwdUwcdMCq8T1ZBmVyKycA78HeL2giTEf5",
  "key2": "V8H3cXVUezQjMYnrgf1wayPqH7M1jY321ZKPHaazwQQwmEprXmEGMTt2v2DwuHXVgyXBwvJxwUhvFLQtWfK54kv",
  "key3": "BM3gXJoYhPoEu7PNnSLduV5N3Zs991DA1RSjqmJh6YEyjUGx5qXgFAyyZsziM7C9QZi4L5dZdXuChTQ4LcHQ9PS",
  "key4": "35BAsTPakNot7kc4ZcWaEQanxDPbQAxFrKi4pPwzqpfLK9JepmboQRX7rjaRt4zNh7XpJUKHg6qhZ6k4LXi9PdBk",
  "key5": "zro1174uSRXi53SvY3BizTx8fWip4Lz5mdDz1sHHnrfRe8KULoyhNmM5VmmqNUrPKUq7QVHz8YeyMvbREb7mUJx",
  "key6": "2RkYPj9nvtrBom6b9NcEqsJ9tU3tBzCMkWG4joXFNBExde3TDdHCUVqKaVjvTjyNpCsv4PjFnmxoXRvigoVfbhzo",
  "key7": "kZUpa8DsEoX9k9amvSUZmrkxy78NxNto3KBGAaKxWmJq2E4poRKxAB79WfLKqVrhkaxH9gAkGa5kuxPJ8ivh8hB",
  "key8": "CjQSgUAn1uCuMEFwpG3C3iN7oMumKD2FT8bHLsDt298DzStpRRsw4Th6kmauhvR5kBKzmXZGqgKixXhactG1Er8",
  "key9": "aieit8FawATpobW1qS12NFtE6ptMUWAnNVTP9KWbbFcrewa5y9QwoMdPSaCKSdPZk5gz1PqioAEKGPMhygQD9NG",
  "key10": "ncHyCwLmF8R4uELUJtUTNEYwn1He2FYu8AnPrmoBEMiHhCfaTee87j6Fqw6egYM46NdNWQFN6mefBXhqU1BXX3a",
  "key11": "qsYybPRBUDqTEPdTywFEdqQDdSi9DETq5fjfPKMh6pdkhBAPyUiQPt9vKeYWZxswrPZKQuSS6Qke8fEtuc7oay4",
  "key12": "3cPE1WD1Ft1JYMQo7cLJ7VWsSxv4eGkcN4wRrYnxDC34nV7SRkooJSfoNszany3pPv4t9HGiFYffEuRfWVHQmY5J",
  "key13": "VUEADrSEyYqFU9XDRmkgGvE9wTPKtewCTm5EnUm6FZNWiLsa1bAj9FaEfNcmSXqBRaUXgCkmThGBLFbQGjbTQw3",
  "key14": "67jjUq29KN9kPdf7JsPxJfkUUfxvpYttuZA56fVkSGvz3qtDXbLJvbA2RHNHijyWfChMGa8tDMHctdNSjZ3ixwPC",
  "key15": "3xdr6gFc3aRbv73pXZUN2kSziWmkZ575Yj6NaBsUNue1VmmZZkXmSj5skvU5aYnp7v1wN5bHibZnyACEbJMQ1AUh",
  "key16": "5U1FVYWxzPBBsXaFssfF1frpw9cp36UWbYqX3SttQCngzmhpiwwHFaQ2YKTmrDp7GkGZU1GvxwJB5YLmHjKCKdWZ",
  "key17": "3X19B4oyEiVU7iso8rjZzRuixug2xLAGtmtcBGe9C1KqWjm7SVfzMP9zQ8pWHKb4MewWz9h6FbPYrzvMLzzAQ2Au",
  "key18": "4cqYxLSCYU4aT4sB58Nz7wbm6cdoB6kzPS6ZuGEuWDDmJb3yLmt73HYdUCdJdksQEYDAsPGQhAMvzo6FsGB6NX2s",
  "key19": "4K4rNJYtM8DBxaYAGfBX8QsXRTwbDfykuU8RsPm5DZ1reNqNysEhbn85Zgmrdt6U5ctC1bfPn7XJEBzG29uLQukk",
  "key20": "4V5TmgzhmkN7rzViRgDF3111paNTN19FxSgTGqvtkuJL5teyCZyRAcQL4Pr5h7n11hWhk4YFCaCvJEMNAGeo7txG",
  "key21": "5nP1HuL2bZG5W8NBCseam3Y337ZgJBpWdo8JsG71i14X4T7kk93LsYdELJhGtVejQazc3a2BB5gJveoQ3TZ7Hkue",
  "key22": "4A3mWvJayE6G1Fwfnp3Tntc9QMX97JaAYYTniKcEABtPPF2kpLqPRaBJUSBWdiSMQbrDC6YQrMATWiitvWicPcs4",
  "key23": "382cZi38UPXqMVHdfM71k8QNNrWvVczHkYv32YWo5CYSuixke817RsVLJjuLepCojmrPGcZo951rDLizepAmedp7",
  "key24": "oWG3TjfsNSkAhdavQyX21zTmWV5iGNKjrLzE8ttH21o8GWuKBxBDmJWCAr5qEUaXsxDZAHCwXNZSrbwrn9g1LSy",
  "key25": "cT7t9yQkJc7LWx6Z3WM47Yzuvzo9PVL6AgUSs74xTrNhjYytxequ8kT5iacxbe8XUYFQPPSURkwsiBun6DaDGFH",
  "key26": "2uMupT3qQBtKuTkj4kUw8dN88Rr3oPtacEKXRtaoM2zKpic29Zgj1CinwvfqqoQoXYmqFq6GPK9TZrMqS2mFpUkU",
  "key27": "35NnE4k51W8EYSZnqM8JoT1McdxbhpYEQCmgsFKae8dmQfE5vnMLeoTX4UkKJhChQNyDw82Qt8ovVBUXKAPYmc3Q",
  "key28": "3yNMWxuSpu5JWww7bya9F55HQirvg8og28hGxVdb978cp9rNJ9E5MogRhjDteirqB5Gooc1iu7HZqf5jeepompef",
  "key29": "4vMsfQtXy2LEPB9FVhJpJJBu1MPzBHhfTvySv2UWKdV2zJZS4BrXVyptRezaov3QMgNFcykXFm4Yx9AULkpRAirL",
  "key30": "7d3MgeTsiG5mGnpMZ2WdSpF1UKiyn5NexSTTmdpyAoQZoKjQRcqizfuPr2KP3fpkZBijBYyHoGEpEjY2gWUsSwu",
  "key31": "3iG4g8JzUvAqgHA9c7SYUzcu3HjseU3yJXmyTXX9CmTcSj3fzXHv33cCSW4MXw23jTu4o8yDLAdkQG25SwB5SMfx",
  "key32": "3ZBLpHpRku4qwWGyJf5asMq42okERvwV64w3U2sPCngp9FVrp3dJLhuqroYt5kMn9AKhGY528rZVXfQW6ChCwU2L",
  "key33": "JXs7qheVU897SLSE9ckpCB2bu5LNsr6EFm5zuaQJTdZJMniFS2viwWT8Nx4EWKt2Qb54egHmGxZzQhz3XsTF971",
  "key34": "5gy9NAZD1bVco8R298kjTuWFCWySQaw9R4SZZSWuV6F9UwmeLJwi6FcnyV1itGjgwH9Vu7hdLMmMfbenk4jMw5Fc",
  "key35": "qvbNgjukYAKbVoAQ9peAZYZiyB4hDqzTgeSFkYcCVt5TL6us9BCGX5T943QzcjxknbjwcMU1KbzUuYLHCDY58P8",
  "key36": "z6tvht9DU8cJTaNDyorR1oBobBFAAMaWJfqRhD7Z4nWW8Jji9JUKCyyG8fkZo5J1hDBTr5pYew4GTQVP1qWA9k2",
  "key37": "5hTZMzsmAVdiFeaVGHrFR6W1QucjUwo78vBgJkxyxVd5ZbQgSjCeVVmEQBAnq9QrPzD68WEqmyoiFqYCwWGvMzWp",
  "key38": "KT7NRToHQk6DBkeaiVN59E18et5z4XYiNkeu7jhfWTHQjAKFvtnfASzGXiTC6Epeh2grqNGeGkqKAe8CFhJEAuA",
  "key39": "wcAMjNmR3HXr5aMN9Jio52LjnuuGDfu9x8MkVL3jzPmq6MRFGZeTddXsso8ek7YrhS6gHjrzBrCTbA6XUdzxWRy",
  "key40": "2ikHPEfZmB5DUNq718Mr1VLuuaPTMndNQpTbkV1FJ2kJhhKWL64w6mZGSa1VJMJUrzdPzgFe15iZYDUJhgB2yG37",
  "key41": "4egh8LzEMqsuYJyuT1jzTkSFYMX61HhqPMrcDdhBqcthoVcKB1WMwXwufEphhnyEkCCwkK2zRDUdG1PRkrqY6iJ2",
  "key42": "3jmhy2HGa1qYEYGB64iumvcXJ9cpCZmQsoPXAfoWR4X4nhwUkRo95cPizaEjAsj1xqMNbQ1qYx7DWh2ggXGxDGyr",
  "key43": "2nP73hrtzti77w5HtV3G2k5UYeT5UvLhd9kZRnYmB6JxwmRtpnz53YiBkCsW4iTuVMMPkJPxY3XFVvkVc2p7U8WU",
  "key44": "3aatGQ8SPX7PcDMeH5v56D7rFgj7Bve7VhErQ25dPvMwkGX2erpj9vbVHKn8XpWvTuYNY3sTwa25yxoxeDzNTcqj",
  "key45": "2hg9zna8oCANZ4XfFD6VvevFdcQxdgMUERgfx5qNet32YLcJL5zJWqXDnWZvszKecZnJZagZLv496y3DbTpRxekU",
  "key46": "2ZzdjUoMqke2qSHXyFocN5z35nw83jG9GsouhVgwWSg4McjTrxiRJhHAXMVjSTFz8S39pGqZPBRfa6k9yGtX4gkP",
  "key47": "3ABQV6ssVycE9YoVZXGNSS9zdUiczv9CAe3bSYyeAsAmYtYyZ9DGURftoahzEza9qxMt9oYWLVJu4XP4i7Rx1XQh",
  "key48": "5D53nBVD2jjZwigFaXZ9s45uAEe5YJKZpdQj8SJoX4yAMJtjqYE5Pm2BR51FsWADjbiVEgvqMsVKv4EyzsXCp7gj",
  "key49": "4KLfZLpRLK6QL8WE6m148m7PryiSjb2CNk74GWfxFA9pVVguPbkZQx3bUtCYrvtZWk6jSPh5LXBcrwKbnyazkxhm"
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
