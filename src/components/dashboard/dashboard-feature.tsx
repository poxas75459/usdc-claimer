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
    "2XuZ6FZeDEv8dghdq4EQ4FnudLnjw31W1gjBEzNyPXFfmcg2ccujwuNbChGq8nTJTX71Q6wTVzrCWwog3Z3hk5vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdkzD6aEpqHaU7CF69hP9uRfB9kHZh8m54qFKJ9hQGgWQ9vemE6hZ1Q7dymLZPC6xM4vwnxtyhJ4kEMs61z5cH9",
  "key1": "66wwS628BrxzwH15y6HMzSmyiWptsXpLLPnsMS8Up6VFAJZrtqK3RVPFuYUwZQ5emFQKAy8xcvdtpRFvH4k6ztdz",
  "key2": "221u51rEno1DXXWScZ2H8hTf7Sq52oxAgU313hbvFcq3rD1mdqmx9XHsA5ZMyu75N9gNv1fhPZhRRKpMiZxhsWA7",
  "key3": "55Y9oojnrvyt9Vz3nPijAgobz11ipNbdr3kg7oNn3vBtQLdXq4kJr5FU2xtk9ryoG41eRHHg2nuY3beHR9BFbhRQ",
  "key4": "2TCBynav6mXXGxrFrpckkB41J8z6fBQPGJvot3HiK1d6Ep6EC3dB4ZFk1NCakknnVKxeBzAoMBDgeKjxHV482TFx",
  "key5": "4J9C2f43kNSv1Wo6L2swspzhQuf8EJaFoqzYDiGTDLoj3YDUy5SjviH1iJEB2ydmg3APGGyquSJoF6rH4qq47M5a",
  "key6": "2eFFgcaYYvdL8UQGYV8MpCuLqrFkSzNgsiHB535XT6VKhZ3Hhu3Si2Vvv3R4cadebw4g3w3zAYLfSuKY7eHEUr2Z",
  "key7": "46f1cxUgEinRFX2tc5ya6Q8YHytMBqpAxFkpV6AADr3MdAtL9GAodTPRGv63dSL3w8aT5yHZuyXquj4QE3qUVdHM",
  "key8": "5qLJbmMz2YjjG3PNmZaLSKcRaJFhMVGyc8pgMC4PnModmNPHPthYjxK5tNuhdDnF2DsugEsNsujdsD4tkLLcKAeg",
  "key9": "41UTgkTXovaekkpMhzVN76Eaoe2GJk6S3iEj5wJm8bzo8PiEwkck8wB9arTmBP5e73ats2knrxo6f4pheSZKE1aa",
  "key10": "3fpHPuGdJwvZpDoonYy4QkAd3YsSPwvtxDJAykVvYtysXqaFReAnjetDonBKqdBjtp7UfrM3ay7jCExwN8w4mp3H",
  "key11": "3WWW2nxUivV5yJJq818bHx3BBVZvTvBM878zcZYydmXhZADrzE8WeFQq5UCtBgKmFm37hnWVw6m4vAtFGRumQodU",
  "key12": "3ASHmpkNuoY4EA5Ey94H7ByvpgtGC7G6FDzrQE4DjgCfEUQWPsYuK7jumnH7w7BkvT3JUgTin6rV7yirwmu5g2ib",
  "key13": "HpRqQQZzpGnM4o1TGkQ6T8ojnexH4uyvEvpkasWpyEbrZPz6u7va6BGwKaBkkE9YfUTJfvMRtUjCAJR4ep6yLBU",
  "key14": "rsrY4XV6Gbe7EujYVbHFVSGQJ8Zim8TGibrVbidmK3ukZhHpG1mrjXWLwi3Bvw66K6juwqiudYR16cB1mPweK9m",
  "key15": "3E4oKL6M3w53QnKsBoyeSyvsMi6mzdoaZJFYsDJPfTozVPJ87GpHhnvyF9VstWKw3PSRcd55nM9otHEGHts9vXYx",
  "key16": "65nZ9U7ytoLDhzUGFSvkMBgoQYwDVQB5pPNYZbcUdZM7sBvqxwhCAecv2PYUxVRhZxicwUBij2GKP29mh163Tzcw",
  "key17": "29A34Jd7GZwQ88Ck7mJETktURZvQj9MLxBCPVELJoN9xHDXR8vWz7mjPpFJVF4P8prJYrLh29dXD6w2sr13D5Tsu",
  "key18": "34UmDYg6GD8jGhfHwMTqW9MEiALEtUX1qjBZjwPYMErYPSawEEjixTHED8SiCiocRyTD8yD9Hkhf9g9caqfDW87M",
  "key19": "XR3yihvFC75HK5FMFqJvs3jYA3eNPBBf4srsL54c5fPnsttKMhxZjhAxmikL7FVawYNJtVa3yr6xa14VfDNSGcJ",
  "key20": "3yjuRpnub8o7t9WL7rQGmeyUbLjJhJE9av7fMVbczmY9T3NcgAyikyYHTYYh4pSeEyPRS8nvuimZfkF8rKPKjTJN",
  "key21": "FxA7sAPuYsJPyLW5v3gN7LH7ANSuCsUt9dnv4xoaTpu24mxiUAuPtgYGwrJzjAZQX4jLmyFGJfRjwRasJpzMsy5",
  "key22": "S4cU18tg5ucqipaAcmHYCoZQy1ETdajp3M89WNErm2YKkaRVxbTHveN15ZozUPCbpZu1nHk5FnAFhxU3WYX32Zv",
  "key23": "3L5guqcM6V2hKVdb5oKvsPgaxAg7c3UdyuX2hBa5RKr3PPbjzxcwT9jNpGL79QN9ZsGtVS49GKpgkE7XKQQujh1V",
  "key24": "2UytqJXwgknQxji8NiKNJHFtCCPctegXWye9BGbLN3QixbrRiNi4F9iFo6kdqvw9digNZ5BWkcC5WZvRgsvV1TS3",
  "key25": "5HwrAa2efkpMLewVadbZpqy3XSWBeKEey33vYEDWRaHT1CpeckbmLj1SMr17x3H6UWbdQdjqcVLNQTHGczsbXePx",
  "key26": "5x7dgvQax3knFnHSYuAxBydbjCakv7zieyskd3biQh7GVuJpSQtLSNW42oCGDZ7EVo6phgBUgzBPNZcobq4bysTi",
  "key27": "653uPKn5BKayQ9xJHNFtwaSTTvCYaNwxtcFkivroMt6KKKqLgfjL53aUaT7sH4wC1E3q2GiyPJJ1Rn6uHXGYzhYq",
  "key28": "5tNCvQKiXH62EL8Xff613ukVDgMkPUYyNMWyNgzkycooc3VzHReYsiyfy1beVhKetmodE7DdwweESw1qWVwy1qzu",
  "key29": "e4f5fmSkt99qxLJByz7i8zKV9FGyEgko8JZtWLxJiXKMdC4mYyDyjMXaDAitZb3AQvLXz1b7S6Kme3kLfLvYTKu",
  "key30": "38DhfPJYTenQUw37RX9wNit41RDpQBDnAGEqzkqNvrAyWPWpRXDRL867cdPorJrVjHCVZAZAffz3GAzrFJ2VBF99"
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
