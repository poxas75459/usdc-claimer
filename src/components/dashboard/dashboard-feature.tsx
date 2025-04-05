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
    "4ZmuFcr974xeGZffmXfACmY2jdKZtMHyJv4tm5i6TcGKYhEvWN4sLVRX6K53AMvifGxtRpihBMx2Anqu4SEvhV4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L489mptpMQaBfvJE9oxcFxsFwXx3p7uMzK9qNRQqMAQk399N7Ln4tJpgQ83oLsk2ugGGJNpAsQXywNKg1YGJN1J",
  "key1": "vKQE8hatC3tFWTutondZRFbpB3K6swdSvSdNhpiZKe5yTMrzYbZSZeeN7jTQ7sKLvfnvJ8ZdER5bFdeof5d6KWt",
  "key2": "2ZRsdgf8hxV26mhFSmqoZJwr6QWdF9mTJ49kLAZvuCKeksnX5gyVL6Vaansj9r3NJmqbFYdHnKQtvr5hQLxXZr7S",
  "key3": "2YskRcEE8jyWgn5dbwcVpgFouXaMrskfvbUbTHP58hJbLHQjQbTmJRecvXSQGQkGDUd1QwLfGQx1ZE357uwbL1NX",
  "key4": "21GQRgUTiL6snZYFEBqwfFRLK4ncjCxrm9A2eYrHSMwQMTih8bPiHPohXJUME9K8vEZbDFHTXMTkxzou3anLczzs",
  "key5": "4XwYJ5dpM8eX61ACxCrzwK9ZYCTMKjcyyo3VL29GkLLq5DAYPXJLZGxTELiuhCQgrS8NFizidp47zofDsA9FZbym",
  "key6": "5QJDAm1DhVxnWeHamyYNBXWsEksm4gDizAEXtYBCLC1u4gAh85kSE4hoqDBVbZN3QLB1xujwkW6ni1jp7GDLP6kp",
  "key7": "3NTrrQ4QGKvdkRn5e1ZkBuUF5GvKrfefkQxeYoJXdrA4EoGUt4jwLeXzcivqAy1p8tDbV4WWbLhfxngg9dUG46NY",
  "key8": "5StTPZ42qWDZTuzcGz287GFLhcmubDr1RhJMXmNhXcQcpgfEkq4pJbAWKwGdV3abpgktsuSknvS5sMYcD3d6FDNa",
  "key9": "34faSae8q1tnzipZ2rW4Vw48pS7CMKDd4P1bJ5epn7cP3Jr76uaF8fhmyMZ9Fk7UtVwdkt1u2Bos5zEzGzhTDQ4D",
  "key10": "5wVN69AdJFfXdrJApEub8DjhEUC95m78FyfbS7yhP3wkVkevoYzEjAPBJbpv7HcidxB2uWnJ6aeEefKvYKVDZe9U",
  "key11": "2moidQpKYjxR96urkThc2byWw3antg2p5qSu51nUtKNgGU5QWXQcwrVPLAvd1NRFKvGzdsNbG26YD7qUcpK7Czjz",
  "key12": "tLELLcMmNVyuGuyKQNv2iPYezRJaa3uypzmcZd5AJWGNRdb9VcCDdF58gUzTCZbN34PzCWk5HyJsaY91CWUMCHq",
  "key13": "2MehXugsG3FbCob6iK2wz5a6HdJwjXP3Jf3BoWLWy28xfmErP2x93EMJe2pH895JCBMY9KgJ78uv8ENTSD12EqU2",
  "key14": "4ofqt1Hyrd6Gy8wP6eL7DH5riaSQJnw9jVpRDfKCizdY8HUtmUH2SZKd3xEMPYi86nQmmBQaeR1QbNzeC5AYDtqZ",
  "key15": "2VGuuKYQwBJpMqTivLW5oKsGepkq9ovSsYpVdMoFkZX6xGKAx9uccw96o51tq5su8vX3gnK3627QRCSjiVGYxWcm",
  "key16": "5y2c95qvj8Sc7kjgmncnV8SRTEPHLBiWPq9bdDZzE4T4P3mM5Y12vDbNAnB24vbdoDxaDPdzJUTEba7nK4PRTTwA",
  "key17": "5cQoxsfA4TD94e9B3f4hAGNGYtiuEaFFmfPzjBY9s5HteB48n9eD5PYQ74uNn9zaNUppLfymaT6PXk16bDpWP91P",
  "key18": "2DjpRVTUaXKbGnSCcpNgKPtnCT6eNDwxVq1RKQj9DkZJnwYjjSg76NohMikRp3714bRDYxLY8dnPctXyA4Wr3Jsk",
  "key19": "32sAYWveDoWXmw4hR7e9BdhatEYQYJjuY9r4cVSE65QgnpunxvmmESCTFrsQvqtMRG4Adm2jzin32dsQKP6Lsgha",
  "key20": "4vuVWJhbgebmRdDN9Mxgg3hdF3GoeqL5Mm7aB5zZbZmgAjdH4BCpf5N9PfxyY6rTWKaJQREZ6D9vNBmxAKpLof8f",
  "key21": "5et27NKknkLMwZw7DUTxgLhSmCtVVbsvmoJsrGcnDhfYGenzDS7cYWRVE7mQbrjPvYBjKv1V6kTzppTHNTemos3b",
  "key22": "5AARVrYXDw8rRXnyNetsBga8Vktm8YYVpYYqtJbLezs8siXXPszxxkmdaikLcbj5MaXb7M37ZoQQBjY1RUxyq547",
  "key23": "45346KPf6VtiDZvSJpGJmTap49PfLSqqLh9vXBAQh4j9hFEpveMkUkaB56aBRowbV25nJC33bC393u2Xdba5YTAS",
  "key24": "4DjJNfPKYyz6iH4BQVck7vjVmnKQBUwDLQMkUxYRQfV6gc4VGQe9D9DpN3w1Sr48cPvWJ7zTDi8FJHfruS8KLxKR",
  "key25": "n7ZYXz5yfvautwy6fWkAefCien1bvLiPPmytXGGv8yqxYqaMejsPzL1BogS5NEAznKoQHSocPcMTj6aTx59TGjV",
  "key26": "5514ZCNB8b2z77LSAnKj8jtw51E9Uinq1SnGxTov6VQYonZVGGqF2pLFguQ86xoWJk6pqnVMCFqjpesssHKhKJQY",
  "key27": "2p3FACDzntQPfiJMXzn19GrcZs5eStp788J6JKZvDGYtyNzTPBFZe1huLfPfZDMS7oPDWbtAZbfonRzDormKqJkV",
  "key28": "d897ZLGQT3FmUk3bnd1GjijxjsYMgyqBCDyMs569eVdmRjWr9Enzd6FMkmbyo9cWRh1P3GM3hsdNWka5TdvRFuz",
  "key29": "2QYZWyGeDx3f1t5idXgkHcj3UQ1YochQBX2XKj6VCtWVms6QwfDHr84p7z7BiSptwAUj4ES1dhA8ULaFEL5BU6Bu",
  "key30": "2qLfWNoAyHUXK6yEctRTNt7hi8D1gvCsWE3HmjryCWLrx4iqnQvN7tkApdRR6Jcc8eWh27zHRibuUeXx7TNW3vdi",
  "key31": "5fMu62kWtyE9yJf69tnbeEyFXJGnWo9gpfzRCxo4pTUSzFYiUjuXzGzZBPEfjGNryjgD3c9AtcKZiVgvji3XHD3a",
  "key32": "LXySR6EGfB87v9LYgS1eLoPLosbYunVZgdDwMQJpgoxp2ef2gdgdRWT4xNGoWf1EJxaCTuw33Laq79yH2ib7tHY",
  "key33": "vruYyJquGCJwdUUo8qaiRcMREbb9dD6B5TBAk2pgUKizLWrMePk2JNyPAU49FQXZk3prQWx1Xh8zoK1LUUoTKWG",
  "key34": "29tLeVWVu8N882stFXSAYauCdr7SQMRZmutPoQdnA16ohDDkmBxhvBa5ip9zPpYfKCnWv4v1xXHouYuab6AwvpGq",
  "key35": "43NcFLVupnLpy4USYRVjnZwPwPkUmb7jk7bVfss3oS2X3bi3t2gy4TJ7dMu5C8tQ9sNpXHg1prmRtQWs8hJstasT",
  "key36": "63mLwaakuNGL5jhhyeUL4NDggSoFRyeMUQe993YqfJjggwfYMY9SuH5rBKzrz3q5YCMPXAZp2LXHuTuRjois4fgy",
  "key37": "49SAGiSJaraSDLWK7by9et7NYNdMp3MAGgh958kc7XxM4mbb8jtDg8yPtT1ZU4EbnBeESFTaacW6Sj2KFzy3G4vB"
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
