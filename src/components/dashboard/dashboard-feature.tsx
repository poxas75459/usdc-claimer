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
    "5CF2uCZy1fUnUWH1qT7AkqZCjd4dYoNbnGk4ttr2b6r6u2Wia2AP5ohUmDgCWqtaseYNnxivc3gTzQkeeVSxGcdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiME7Fnt2q4jZarJeJ5wrvRpCE3rum3CsFMHh2oEtiAUiuLSZ38jDb8uzgkBwjA6yqx4ytS2yQMcHA4q8Vr6xKZ",
  "key1": "3w2sUf2537BThYShd4GNzSmBqKZTxVFMhFV5K5cEjYnxRhTyR4cYXvfteVXtieMypLtLxcpoCNipQrUgqWhUVaQM",
  "key2": "3UjByXmLyWyZyY32cqGvSLS3MUbnzwk4Ck63mvwKGbgtnP5N9uJSZbt1fK8RGxCESkmeh6eoXeRAEPfGVhdBFDYj",
  "key3": "3hAbwAAieYeenxF4UAkvRCAYpHhhXiL4jekPKCFsgUV9L49rzuEf6oN5w6uJ3DYfGpLq82htkFwAF1aF9HvYeng8",
  "key4": "4dhRMM9sD6r1i2sncDiAKwG247njzBeiFAgYsnxnScRRvZrJYWQyvT46mB92VDG4iLQd7EM2LLQy3p1LKouQPXSS",
  "key5": "25dy2ePsjkrhSjfr7gPYknGdys5PfpfQfoUakYmyCwGnmUDTuagSJwM7QQuJ8W7ofKUnXL1BpuR3sXs53wBauQDo",
  "key6": "2mVoeVxBU2D2ktHQbXw5u5WEzSCeg52tnoxfUoYMHsAZZKzVZ2uEhPzbDdid4JYQoVBnVDiEqVaH2TwQpUMfoRs",
  "key7": "dVacL8ECw2vpLiVtSZsBF6p7ZrVQUMB5HMU2sTFhXk3ePGTvFyafVWYmeqTWQLPvRhPzGSjtgR2pbBYrcZMYAHB",
  "key8": "3Sm6jXgrF1ViJaKbK4dEfMpXMiCRQDAcQ9DKeafpkQfLoKH1nPkXw6RiEnZQhopwfGVzD98sCkrYzxeqVSyfzHr7",
  "key9": "3kKNZk7GGdxAVSvHhrKEo52gn4afYemJ5RkeC4M9x75SKxkov1BHm4n6Aob85DG759fGmFg1MQwooQWWjd2Qq5cw",
  "key10": "5gywxWk3rJp75hGSTX2tvvPT21V6HRdu64ToiSGhhEBhHnDxCYkqqe4zGiwgvMaUdmpHfTHUTAi4tptJGCKJiScR",
  "key11": "hSNmZuU8JUMJHqvavhjg2r3cJvDfxyGMSTZxTCVqywVFtMR9cbBTvd9Xj2aSzYibxBtMux9MthvNowZ4dxRKr84",
  "key12": "5pVJ2qMVzsnNtdb2QUVRMyhh7gCyY5FJ8sn9DytmWU6AHntgiPEHXPGip1RoXWaWfD7LbF59TdoJ5vTkyjwNmfAc",
  "key13": "3QLHZZNo1THEpYT1aYG2e2nqygvxWjQxDENQ5tVd2qwd1AZ7UaP6LpiQpFTdxHyTpwccxawhq6Lxkjifx4awCcV1",
  "key14": "23FHLHnzbXAzC7mGSDUabLkedoYNrRiuPdGyuvVrSWPPb9e8rmK3RNgd6pwPNxaZByPdr4Y8UnzTUKEqJuJGp6Mt",
  "key15": "BpPhbK8GbEnSHnMQz3L6BzUHVMmAMmRZhFqovC3NM4pzYSpkKLLyW4T8zdn71xz4x8KEWqSikMHM9Gpq2pGB3NL",
  "key16": "47yPxbpDspgysNPRtqrXYi3gb3ZJVHmp9rxewZV67FgFwWD95C81o6JSNsoLtrDD5Tj4XKcnAeWj11Ye5AEFZJKz",
  "key17": "2spUbUQoquKLyA33EAh6t4xW2k1Ei6hE72ZjQ39YDYKEF45EFFpSJjnF56H23vB1JNogsCAnctRwXTYNaEaveNBg",
  "key18": "4Gb8sMyg4qdw8Y2sw94nHUJ5Gtpeck1fi2un1ffJyR1GU8mw4wmfFHmsHjv3cFuh7d25TrvQv9rfq2f3iTxz85zr",
  "key19": "2iiL3SJa2xsTVN5wMrCAHtMr4PUAFfyKCLSBGk7SYVpPWWMnE9fhrUuUoYgxkf9aPALoxjbkypFCLjLANKDfiG5V",
  "key20": "4hKeeH43GF9Vztaw526xjUqLViUew478cYPeX8NDAmsF3rx8XERTr1FkJt86XkfRANejb4YymKkx5xUxrMu6E1tV",
  "key21": "4iNmvSUBZvAL6issparpnmoJc58VCPvt4xqrMwtgraoM7A2UxB2sXQR4TU4jC2gCzdVRrhFGr9fTzXW3sFwAac7i",
  "key22": "5m4vCqa7iVgxdGDxu1E4HTz3VEaRSxQ1NWJDctR2QdAMd29PrArEYJWWD1oDL4nAyyA5pS1ShLn37WFCmuFpXJD2",
  "key23": "5t7e63WkwicF3TmRuSZwZavoEBkQ6YCt25yDAvG6z5vzvFQcMDRMB6N1TyjcaJtGM1Hx6hYPWHSGNPrEmwqouxzv",
  "key24": "5JURKdhnSocAtrEDDHmEwBKaZ1kciyPJDpFnrXNuX6HezH82Tox8HkPRX1Y11jFUyoUMeSZ9pVRSaWxdAJkXLefy",
  "key25": "2K5g2hz49utynSTunWN6c7dGahnhxijuffEWWLoFXYpjhq4mmDMUNyba5VKNPh4UYkobZg9hAsTDACXSYQtvEUjq",
  "key26": "BjQB87rBZxwNkzrrx9nYHkF8vHTtYtqp5TB3zPyh59GFfAN6qH2LukVSddQWk7yeoTqFnrZZZmwUNQa7Ppk7EEs",
  "key27": "5GuYnDQaCdGbxBRbFD8qzUENpCnwbjGzrLRFRLdQ9mKcdtL2f3ua1Xu3TvD7tzsodWHUZQq94UEjMRuxrJ6utZxb",
  "key28": "ietxKMgjZX6pdAfFjzDVb5vJtdhQoKsenbohJzDctoBcuxokmZi6Cm7TuV8qn7Ys5PtCCZAZcrMTpjCUHLFHU71",
  "key29": "5rYGYpFmUbZFbSFVKWRzf5roYCS833L3uczT5v7DDURX3AQugWpeWR99iWZXRF4k4AiWKiZW6bLzWLCqYH6WjnQb",
  "key30": "2KP6ksbUwvrfdPHr43ycahofXXFEKyswr8D6t75R3YiXGoj7XKvogwLpZazsgDjwZgn15HdnFbiTjq8NUGTSQFGM",
  "key31": "4UxUqAy7PL79y9mms7Uxz1JuaKHNCi8SkK5aR45VKKHC36gcMN1MjmDFAxZTiShVDUmPYs7xsnyDLfo2PK5M6MPn",
  "key32": "4ADsCToJFZU2gq36wkfuBu9vd8GfwrSXdNHGyJnDsfhz2wtHAwNAKocW2wGEkqCXXfDWDbarQFCv6CRB9f8ej9Cm",
  "key33": "31V3igrogb74y7Uk8Zxon1agbMTvJkgRm7DJUjGG8EgWrUxi5raigF3HtZkd1UK9agzYdg8mNxZ5ycroctj4bNaa",
  "key34": "4RaR4J1nbQVkeqp2S9akfjff6CMEFiqqtWtLSYeHB7o4PjmTw9FxeWYyZzeQk4eMk6SWBzqaFmTas8HCeVzvqPLz",
  "key35": "2ZSjR4ifxVy3h8fUMXKgtE7NaaQvjStaQDo58HE6jqVpRR4pGNaKahcUKWWps7fjHjN1jSsfMTmRAWyEGykKB1RX",
  "key36": "NYasj9BNigZ5d3inuPbVXvtJt5M5JSWPhryU4aVw1Mdb2218vR1kqyQUtTqNoAAAZP31Bka9W2GL6RyE1qgtvWm",
  "key37": "38TNgUcSzqLjGWps1GrrEjRwU4JTT5x9obtU1W15yteEJhvMY2BYub8mUmma9rY1WXHPsxNCP4SCZeXwazvZYwwt",
  "key38": "4by6hMZp3oVHgZyPLD3Tvitzt5p6xRtKqweestaTNAEJCMGXRmFQXwZdDsJGjm4fJcLjXrPDPLoSWGw1Lo6izG57"
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
