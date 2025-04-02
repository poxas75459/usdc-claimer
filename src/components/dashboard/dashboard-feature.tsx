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
    "3Vwi2vrjginnyD2tQNoGvdVAW9chiKJLsFssspuTt6SJYcWK4ap1ogXDZR7tLFJoM84MrzV1QhkRnixFvHE1y5Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "na5NQCMZx9KYRmrg3ajbPahsVcJb6eUFfK7PX8vmUawckT549VHhpCpMCAA2wqdsQVCnGth7nRT7qVY2UyBD1uB",
  "key1": "31C2zi72JbECMs1SiBoVqyP6DaVU81ULPqVVRR2fUHqdbK22ENS1brfk2VowhTAyMbTTbFe83RgoYaWS6KGRrHGm",
  "key2": "55JRuWjW2JkqFnExFQzE8xohfD8Vs9VNry1TJjVpHd2t5CfxZoE9xU8SVnANB3dm2nPCu7WWioSzzZBX8AJjULy",
  "key3": "D49DL8xsmRjayaL3HmU2L5xgza4SU5knvmXknP8sCdYH5w5T6am6T8Gt6n4u7zLiX1j1JBXEByU8u8xFujCjwz6",
  "key4": "Mva3uVDook9Q5gvgBToUiBcHGwck7Y4EUSjpXndP5F3fJWpWYVtLdM9ZweE2hbh6RZG36p1pzL49BeGdnMSopR6",
  "key5": "3Rfomj7iu8UMMj3pVUFK2rBag6MzULuheHZoJQsdAYK5qcoQpGuoFUmptXQiSQ29ckJhQqvU554bbCEHHD8QzTrp",
  "key6": "krjZPwCUX6y1fya3n1LH64QuLwUDEsAAUer9czojDXHCnHMaLqserMHkWJGktMuXSdYhE1vXDSiJfsuDWUYgtsq",
  "key7": "jBjCbU7VEugsSnyGi3wafH2m28qLc73fV7xAZCV8dWVcDfMsqwgNY1op66Xmkm7RhBDtSf1Hq1s3n3AaFnvZmWe",
  "key8": "4Zz4woY4vsDTRiZbpwikr62wZFxYKwHGtQsPPHBMGYb8DZ2DgY6NzCi6K44FXRuF4zSGV1UcAK3DTciQrwktnhH9",
  "key9": "3sXBW7BwCmqRABvvsDdXhAneFjRzVDzc36NjgAaJ3QhtfvRyyj6MMf6LG5eLUemEeW1y1e1LE719qNRa6MR3Fxsd",
  "key10": "53QhDDaD4FP5ZHzSFub7ouN3QeynKeC2ioXtXPMap8Cwn6wb3uswSrtpCQSFGfG5wSUJ5PAnGV1knLWXX321CyDg",
  "key11": "2SsAcd5QokXxhBFP2dZrV3GoaUhG9hUX74bcDdK8dTBjncyz86ZdGGnDcvvUyEqARj53FCWsb48iLo68DFxJKjPP",
  "key12": "5his3E8obfa9tuec2UykrumbAKYwR27EkLfUQvE32TytBoZYLBLtfSW8zSSVYgmc8CoWd7yJHcEMvLFPy1J3cKER",
  "key13": "3FQPjMssg6va9pTqDV3FHVP8JRf8mRNFxZyQix2Y4SRcvogfGGvZFYjFy463wzgsBQj4eDwrjNi5kdPspnuvKsqA",
  "key14": "2o8vEBmqJw8webwH4ychHdXEWmmvWEbpKFziJLNz9Jk22kYhWwZUvJBYY1caU99MhECPiS9Kq9YHCmGWyexTJB9C",
  "key15": "ES65PCUqUADZeUhQEibhbAQzPZ7j1Yqebchryv8tYJZDD5krXhSnxUZYZF81iGcb1qcCXCEyMkgrQa8FJZzDyaE",
  "key16": "2BiKj2i6T5t5oNF8biaxmQLTTBnN4u6uW6EJY9tq37UtqakDvc7avpiVgtyt77RAfm96o2CEr96B73p1DyVpwz9m",
  "key17": "2QrXvtt8zYH6YtPPRHiQ9UdgeBscgem1ZnGoGRGYZEKNTS3bkHDn1yFdysAMwLjvmK2jeCwF2AdioG5SnCS9oWYJ",
  "key18": "5PJs4k1H7AeR8FPh7Y2N8wLv36kacrgfJQ9wvzfMpNAqnhJVJyg5BJJZr35omMPNXBTLT6MtLiufzffRC3tpwDF",
  "key19": "5cnC2pz47fACDVQF26oQDkR9V6c5BCjTziSoZVEdiVyp77xDg1JPrhgy9Vz2RUL7zHRPKrNekm8N7JZWd5m9rttA",
  "key20": "5Aqsz4XjAJ3fC4Pt124LqMBjm5jRwxMsD4Lwu9nXsLY3XRL231NP2DtafKatsFVFN7Var8kRr6AY8NeNUXowhPvz",
  "key21": "4YZjChwFb8rD4f28iUMxB9dR7feF8LnasnWNiLo1F8tVypUdnk3ouwfHyrcAE1DmAhVj8SYdwqwbrCybyfU5MnoJ",
  "key22": "3wcfYgn9Y8MYDgytXRz6SctNVLGJPEiySH2B55YVmxXtt1zcmZsMg48r5gN4Uq7H9j8uCH2Fy86naSe5icfenyNM",
  "key23": "3UrnLKaq2LXvSkdBjSc3j1VXQeqLzS5qcxTGzG6bEG8c15QCLXNeZFK6QamuFb7C539mdhRXDu95oayeNfuviy6V",
  "key24": "2ML6oXEpTktdMjYwQXNDQ6QuXJ8NzgWzGrJT1NREj1SWr8T7N76iCLb9VzHqdGu9vTjbmCaErwYsgvizCQoGrYAZ",
  "key25": "suNgXcej9NVv5zyCs5Hztp6hDnE4D1hSoPUcnG9Eou8UaJcQRehFF4rsWVGRxEKNbaGvwVbHFDFDnZPD5NbmLw8",
  "key26": "msdV14k3Nb3goQLoJknd4HuqLAUrgXhnH5eGKqduQWqgQcGNd7BnGWt1U4Frwnz3aTENwCyBMpGTEzk2gHGL5Yu",
  "key27": "5cSN4EkbJmui5ZYSKBhUCcBVG4pBBMX5cDpwreSLUbBGYyHfFDxNysCw8BNSz7tgNMVtBGhT5HFgUniu9SCW9m1b",
  "key28": "34nrNZKL2a58egWoE611F6ynfoDkr3JwLE6ZeZ6uCzRfsLe2UZANzYRuWdTd5S66yEa9jgBimc3UU33qK4tvhin8",
  "key29": "4khUZxf2yVdPQwmyVNzsWX533yKL8DHouYFUN3JhAvTYFHqHbjUk3DaHXbbktRKQk7DpWGGxT195fEwdFaex5obt",
  "key30": "2wcQq8GXbmsgSB5BfNCLShFbtAinVFWgfibYUCH2B2mKc1BHtwb2Y2LcCiRtfXLteDeo7yNSD6cvwMHWYwSgK37E",
  "key31": "3RyYcUZnkTvYqq2foCwm7WC2V2bjojf3b3gDYNAgC81U71dbnsjfy6tnvnX2o7viKKn5xfRruVRyvwLnAKEpc2PA",
  "key32": "5ute8segzqL5aVYnAKQErUEgLEYcQWMJys4rn4PiBCGq2Q6MRJ7cZ7CyegRGk3Pq7crpAM33VyXccnJXjZaVJebw",
  "key33": "32TKoGn3aWvaLTKsvpUMQNrenDaaiTQYTdNdXAZYwXWcJugcbFn8ZYtPFFwv2GJNhPnyhnwtQ38ak2ztQHasob5S",
  "key34": "2Rg2W5B8ijFLBD7aiybEPXR3HHpGgAk6FV2XkdZBruUEfpdkYKYTfz9QpGki9DhNHYiUySwvagdchUVqc4q4wDYZ",
  "key35": "3MNAAGVJ2BNEXPF2v9csk9kufzxGx7BoP1xvwbADwR2B3aSNKhPNWiHqxRGxGGznU2zPthqHZW6ChjF24kJQxQhL",
  "key36": "66HnV46MNQ9HpwkHoJeZEeJAwMyw8quQBNmnH7LAA1QY2ESxWRPk8ahgguvtFkfRf5scXfaqGp8nZF3VHbAE8G2F",
  "key37": "3ATK4pYiWN8k8ZuhPfwktRSP9MHwHZPgy96svfeGdYLrZhajrQi9DTtunWbieN7y7JauNKvWei42keYfnk6q4Dcu",
  "key38": "5LmF3kvZ1kSpPTrasX8qSARy9xbdQ1Y1pFANcP1jnYMvD2iQR4HWuxGrSEUAbTnugh8zW74r6WXjmUcwTsTPNtrb",
  "key39": "uT39efU3e4fDNp1axkHFdk64feUzxFMue7TTaBBSQnnZTEWLrqkrSDL2wgoyhE4Uknsgk4K4M6rRcyh7NRqWkpW",
  "key40": "2zi5QZqC6ToiywwfxBmUq2KmyDzfmhNU4ix5kVEVLKP25hrtvtmiYP7WPiJCNFg28Z8H6hmz3PubXmv2vmQhoh1E",
  "key41": "4JN4uWxRESrCqx8Px49NotmHXJfD5awrSpkHFTBu9m6QWmhEHUZ41P8NfP2vemxphapHuQGmZTUefYaX5rNYpZAX",
  "key42": "2mctgi7aAZE8UBNdWQiX9nKfjFaTiWSkWmu5H74Dp2Tstchxu79HjTKdTkXVLzgkfsu5kqwZZbfytLJ67nGDnmdC"
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
