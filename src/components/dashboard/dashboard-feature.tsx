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
    "54h6AkR2ujFatndNXsGa6fHwRpnWD3b2uxCeYAfgx5NMWcHGq6DhSEmERy9Rtkswj9jK3fVyoM53AQNPnJHbFbKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4co4ot2UCtFYCm2N38mzarajb2iu2SJUQkzKR8YRmjuvBCnQZ8GnPnVxsDypj1LpopHaEhpMoprkzkuWT5ek1TNG",
  "key1": "3HiLRYXgzBHTvrLqEgH1iGGBn4vEngWCYZCxKdSHAbYZ7Vq8kBhSjF74eVVRE9JZ5bjyCNSzmrvCdL2ihg6t64jY",
  "key2": "3wsHQbmB9pTz83qUNhFKareaqWtwnTiSXVQJ9jaL7FHVW3RjPvV5o2R1MXqz337ai4VDncYHjSGFQPa6QcubyXmw",
  "key3": "4Y5FJ4bBsNX1iho1qxFjkiP8MTpXxsyXENthXt3e3umzuShFuR3fBkJEVsAVhudYFhNuNKvTNNDXqapkz9EQfDMd",
  "key4": "4cR3TNP11AN865xprmU49ykEpjEcNoHomUbHjPeJWhG4JPninC233jSmngMiy9u1EWW9imMR2kL7knrBhFTwPyCN",
  "key5": "42FwxFdmYxp3TcFxb5pgzP16w7WBJgurrg8YknFqAQ4pQAHQVJPuTqKjzEAUHHhE6KsZmzrd76iCHVx9oLQSJD4y",
  "key6": "3zW2pnN1sTp4J1ezatXUrD5uXVvHpDbuBXNMhTdXzsBfAnvpZMNAkdp24TVhfnUBAd7ybsEv3Tfd7QqDeb6ABknc",
  "key7": "KSREPQ9TaAARnpxybNbsj5Y6Qkg6XJfmkFweGewo11daU81oAQoVye1NmhiNskMPPP4VYdCi1WtsQAdc45beG4d",
  "key8": "2Hx8zsD3bNUqzss9e1CNkEJ5CiP35CMWXZrnsMtx5gHKq98XFDjsonw9nhGVwFECgZHy7qHwqtHtgx3deSLVLjzT",
  "key9": "vgLKXRbKb5GG1KzUuvhEnh8vFX2RUGDPhp8wKd8zMmJUsVeThCDJkAe1ZBi49QNn7nCV3ytvmgtgR2EYPi9AUMX",
  "key10": "4vRrp8L2TLRAFg9Cra62HaGfhmUwbjoxGcLBKHkrFdUNXv9SSCqhko5oGSmgWTetmVsZfnyqRdsnwpcKoyCCfwaA",
  "key11": "3R5u6kfN6vgGFqp49oKRdPcH72iDyUcD6aNn8aSWeqceYj9ct9LJJ49RampMUts6QhJECbUbbYWyS9bE8kKXoBqg",
  "key12": "4nTMcH65VfRNjjNL4kr7yhhUihoRbZKjnxZhW8RCQ4j8SxbLgi47i37XsfZXcPotGTA5iZDZjXR5b4jYv5v9PJj2",
  "key13": "5tEPWbdJRo9NJpnJT5AX2Pd4z6wwM2uVEGWPsrZa3nNXwBhnoKggCPUsqfJvVT5cU1hey1nxivykZV5kVU3xBv8a",
  "key14": "4mz4HWLsQhHDGiBh6d28iF4RuSddF8i7AQEXR5pL5LvubHBzbpmubnt5159YJE8igHCwQs9TrQ251Qf97sc9bDU7",
  "key15": "65gnfnT8SPA4Ubgd96AKZRN9P7EWqbsao5D4S39PHoM5hmzsKMQ71V6jatFgKUQphyn781EG2i9qKz2MfYiFuxXf",
  "key16": "D2iXDYYt98AcFMyaV3VGFbuT7DbQ7YNAxUziCRmc6B7k6he9K5udWnu3n8zNCFCLVWSoqFhwLGJADsEsgURGEq9",
  "key17": "5BFeq75eYiQ7V4nKZXYmReW7ye1ArdCqGVDfqBJvvmUwgLsJdLt8k7HHfUeoADVKkyRuAhpJqp8c7eYtT6bptjZ4",
  "key18": "eixVZSiCUdhLhxpRxHp7KACpvg4VqtZ3zMQPvr4WsB1mRS1XXypPiqPCiNqrjxUzDfZ1iRjNPLLmwawh61EJchm",
  "key19": "3SXcRugEGhW5L18PnMLtdRfGnH8TdgWcychh2eYwGxMP8moBQDFsZc59NMPnTvwqCPWiF5bSQgsgwdNCkkbUKrNV",
  "key20": "4PFWSSs1XsQufcNq5USbHRHdDpfy5WKyKupuZxTLCh3j4k8h84ub6pMektzYYv3QFrUEWtf5YgpViqiLMJCTZU2R",
  "key21": "3DGhVoYifY1vJi91XFQr2ghKdrS36PG3hUofb4xHMo3LqZ9LuFZpaZouLo6Z4zzezKWKeGzie3zuANWsRYX54zDb",
  "key22": "3i5rCy8s3z74Eqw25guQthiLRrnfj75jZJjmuxDGpEhqiXuqQjUSr1C9aa2QSQfaSzGZbP7bnkAv9SnNeUB5Uvh5",
  "key23": "57gAgEDGRyQruxMSWU55d6jBMXnWPCACQrqAEGoJMYysymBuuBE81grtr58zoBDe23ye9So9dUpZug7WmXn1JUiW",
  "key24": "H8DNDe1QedJLrCBGcjC6dRtCZjsh7847z7brK4CKdASHbAp6Mm3J9et5VVnvqpBLMed3HHcukMEPAt7EHJDPWpM",
  "key25": "HUSK62psaSUUt6UmFj7KKXjUAhVGdx8fKanEqRBqoAeSf67t8Y93EvFWSjF8N5mrXhh9VPnNicW85B56UcT7VxF",
  "key26": "U2kzWZfM681mc4BgcLgFhHaQBacTfeFwJefCVHkeXif7gpZSgTKDBtoq2m2PgWMMSvSwPnuYEw4pzkBJCGtrUAn",
  "key27": "4eA6fyxzXk9oGDWBXYENAjdv44CumGHvJtoMtJmYCkJGnLqFAsoJqwU5EuJ3UZq5VAuXkfmrhDfKULmp5QxfRBNm",
  "key28": "5E3FU2k4Yc2SUhrxBr7VGYj9ptn1MFazsmgNrkX3N8Fvf3Hn6GevwziM5NG43JAk73SHwTsWfP5KpZu6f6HCXNRD",
  "key29": "5Z9Lj1MqP3CuaCpugYyvmojykXosZFeTV5Lxd9p1SaqrqH9KuFbEekfyVzc1SDrzkdDzSJM3Hd4WkziKhBtUegUS",
  "key30": "37NPXipRYChP28C2Y8dUd9QZSyuZF7oNjXf3Rj9LGgnxn9eMBzBGEL5zwKQxzQ32Xq4aeLwvMYs7KPvz51ALvurc",
  "key31": "5G3SjMosF4gBhsHBNyegyZ2yCLewmyWsPyrMkF6Yto3nc1JckeK4oWx2iQL9Sg5Ac3nPWjuqt99iu5PWSEcBfKig",
  "key32": "4chan39qeUs6YdaYtHE7uxasRB8TJ9YgGoXc8iDVe2hBU2ThdZHvmC3QdAiTQus3kmA99oqyuug18QJuGZaw1Txf",
  "key33": "inrPMBGByBDurzDoYjNmhG2o7Gth7LXQmn1msTzLSVjDxsJkNezxJogfa8YcNyor7uBJCcGgRWpFEHnAvNs3N1D",
  "key34": "4GKyxDZEESCswVzK4Y2bi3XQMu3e3h3Y4VYa92jsAVfMHekmwVd825uSAdhGbrgg7rLsdxkqx7jQyJZDtAQYS4Qx",
  "key35": "5N5S4BXqTrQgkWDS5pt3ebMAf31iuy7gMhHAjGmiSqpphFF2Tkc6aKn7A1fPrJcweU9V7sRP8j88Ky3WT4Jtp8FP",
  "key36": "4FWHestqVGYh6eYprgWQQHyw7CMnryBw6zQvUXvCGmQtXn87ZdY6RhBpfCysu7CfdE2ez8Vm3Kw5qWvnGF9of4JM",
  "key37": "4Pr61Dko5BKx3pXucybUGGS4fNWHMjHBcQQ3f9isGXGqvVeVJaqbhhBzsjZ3rRzKBwdZVPriYM7PxZbJPJ4zYiJH",
  "key38": "5tdLpDcGJmw7C2vBzFTxKFRMb2WSZDf1JBqZBBaHG7SVve2SsuQv4xs4fmUenVUwURbs9i1QdCyqT6K6V8Tntrn4",
  "key39": "39mGFGh8g66uQjXoeSdcZ5qjyLuR7ws7aR97h322ESQUSrSAoduzLbFq83WHQ4VBZ7hLEeA21yq818w2LcaVcm2Z",
  "key40": "2BiEuzauA7SjLmA3Eq9CPhpoJ9vnz99hh9RviQ4zLBcPxWtx3S8dmhsACdoByhJXjr96A1Ro4FumLYHvCodJvCyP",
  "key41": "5sA3ddKvaEELGKUwDwo1SdxZbiTK1sDUwJvbMSbE9Dv85hM3oD2dsQ9v4mNmCyNuVqxZw9G9DyEiZTGqhK4tdHPB",
  "key42": "5kj7RM4fypnBFSgavoAHChGwSGBCzggKJQyTAjAwCALwq8CJRGUrTFzpdWZA6FQ5ZpoYePZag35m5ZHM9aeijb3K",
  "key43": "c7gJznZGCgXnx1zdZYoXvA4AdSWdPP5KWQZfTkt4tfRWkrkw5NKzia3dHxxyfwkmSXy4HJL3RH9tQmjBmgwUAhS",
  "key44": "44SDD36g7rahxYg8ev88HfRU7s41KG7JTEmUHshrvwLDtiGvH9qwA5RYohke6HaEaQTne14fxdZu5HPdoECLuguV",
  "key45": "5Shv5qwkw4UUGyrEjvi7TJGX25QqeGEZTuMWV8ABAD72DYpzMpmoyimFW5irfcBGsrTN7UuifoGKK8928VdpQYKU",
  "key46": "a3WAsMLPoUYcVNk4vRE18xMBLE8gjuCJLxstCzKouX3NxToG27YkufwPa13qejuL9XSy64eSnLrzABZiXKy5c4B"
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
