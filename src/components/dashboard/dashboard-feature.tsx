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
    "5CgCtKP662kqGXuwNDBuvdu2Keegbhd1oSrTsxN8wrRL1HUcCTtdXbNuN9zRHDE3TaRFRmHYqSvyyAgL7GAmoox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4sEm3HmcpXB5yFZnnFfi93t2cMYyUcFASRhB9bo3RAhgvvvQuPo3qF6Gvwa4SbrrYnJjftWmpyoALFxtVy28t",
  "key1": "3jwGszHaCzj9e99Z6BfkwqzSuDZBLnL3sED4pxAPHtH4FocgNKWSL4GhiMTXe6EZAQnG6vsXuvphxNVdUQhmAjZP",
  "key2": "3YUkJLGCqWtiLqsxjg5dmwbsbxs39Wu2ix7NqgxGpyr5gFCkXmTDtSLg2ztZGMXJV4WjmEaZFArWBK87cdrLtovc",
  "key3": "4RkRSizUXqxg7dp4DBXBkTaXYnAKZaecFmKfLhvnbzVVE9bn4GqN7LRUbMzKZUTosvq2FQMfaFRXmy88WHXh1bEy",
  "key4": "p97EVViVW3CRSNJffmTcKkfZWd1SPWUuNunN7sU8jR6EJat6i7RrCnbrjG6BMgFcPLzm34yWSSy7eMmAx9R42jb",
  "key5": "55KkjFk14UQ3K5kqpGEGGWt2NMnxbcWD29JVKM7aGUMPEq82AiXz1LdVqaEpCo9cq5YnZHmTcE7cY5LHZpFdqnAd",
  "key6": "3XFMhEKnNBZvAakoDZ7Ku46XkFNqXHcvgz9d11f3Jr8YKEmjHAXCLFaHXaYro6w7krUWuUsoejK8fRTYBm9buUQL",
  "key7": "4nAQi6zyPSM5gEVpGWUWuRNRHPjZ6Guntwh8YTgeHag65xQzhbE5UZiDCd7dP6SZASoiSjxior79sfwhn7H7mnzM",
  "key8": "37EatEUcJa8sea8iTunTBHYMJY2fHh6z2gu4yAkhtgVm5bCqTBDH4XTn6Qo7J9QbU4eDYNZXFVhNXKq7LcqeXcaN",
  "key9": "2EdFpupTzbvXhVWoRgAd3SwS8hxE8xdBRw2mivs2Bekg9Goi32Ws4CB9VGEX8He74LDjBvwvf4murWu14xGY31h",
  "key10": "3BUcL1XzsgNoP1chwEG9Y97Nn243VaWSthrWUewvkEdto16kELNERaCZQsL8CGurF5f8LUT1WEjiZBNjnjyexGJ7",
  "key11": "64ChtajKhoww4J5e766YbKzWU5vpJz7SZRExurRFbyNegQsBu9LGnV2J1wEcS5gqzPWydivPjhicgFptzEQrbJ52",
  "key12": "3ajBcGf7DFQCSZxxZQhSkAVtxdS2Ue1KnFTchg8xe8jPWKeWUNkLgoR5ukQf7uAKwHzWFknp49hbZyo32doc94ti",
  "key13": "4xzcSvv314HDY2HTic3n93JsBD3YAm8Df3c8VqSbY4LNqE7FUsrwfVcJp3YbSQEonv1h6NosdeGDkpQ6PrVrL4US",
  "key14": "5KggnkBgU7Cb1tra7RFKt3ni1JZuTtirhcQ5S8MUpTA8hFNmjSafbrdK4KYDZV168opmSbxvNozm78LtAJaRzmai",
  "key15": "3zjvmDmRd2Q2ceKisRBS7FmqrcETXaDegFg5pyaW1JcrVCg3Lqzv5CS9aA6Gxobzg1K3faS6BNi9e9fwZkwpBbWB",
  "key16": "4jGZ78ZoKAzbBHZBGus8LMbdQTNawa7kEzQ9XLMTMLQrqWmDtoU41HdrQuerYRBHuo6XX6k5Abc99WBg9RXxCZo1",
  "key17": "4douttgwFTyrVqQXEcM8JH2c8fyTi2sZLPyUnijE7rSL588DXxg4uwaLssqG8UXu7nfrrypdenCuTMG6mJ5Nog42",
  "key18": "XHDtVztje2Fjbxe1xh4AJW1W4XwecZA2NiSzRQJacLKf2vjCzbUTapZ6ZEtENZXfPZ2ACqU3uCygJqRK6zARiPy",
  "key19": "Z5XheXwk6qbfPB27PRvyHoM6RBJbG5mMdVae9tavJnXFCyS5zk3PcLU7srz9636jbTqayLG9UUzH1QLrj3yiVrV",
  "key20": "sjL3i37MfU37kgwqLLoWsssFAU9Ak8kZkBMX8gPQiwGcbpYCcb3QJfrgf1z4QZSQSDQUXYD19irAz3GQpfR2zXU",
  "key21": "4aAzp4ihF4H2B3yWHL98adzRRYrJpBY8GmdTU8tRQAHiouEEeaCYr99BdceNh4EpfaWyxv8MRBiCyrvnXLbyXzDN",
  "key22": "5HT6DSWfV2PcNT22L2iEM9UXwrMJJP627XZaUz3hWN9ACwEpyjUMMhtHUX6Jxz9XTfg43jSehTcg1X8PEQeK5Gqk",
  "key23": "4743BswQQVSoGrnYDsWS8Dv5wN8T78jYGBKB8nBCyb7qoLX8Sijnbxc1cmGG7T8bcX1VpbRYiLohkMh42y1RJrg2",
  "key24": "3xrdhjbd4pF6C7d5hpBmfE2YfUnkBKSUxcS6iZKVJgZTC1fjCnj8Hn3q6cunUcXV2HLbTfohC51m6pPPN9eyZgF6",
  "key25": "2Vjb6DtdaAaMWne1Z2hTqXpL8rP1wxB7tm6XnVzp6zf5aw1928Kgisc2auTh1f92EdK8sVWED2QhyGVnZDV1DFpv",
  "key26": "TiCwsR7djiF7YXA6fgnUL7S9dFZJTM6fHzXQknfQ28eosjGgFuQVxA3TEQGqBuGy8wptyzKxyxsc5FoY8WEieSS",
  "key27": "3DFpuWAJ48XRtQ7gNvHZaPuJ3GDb34hyadYHgdwYsCvoKCtxSZ9hhVfEHbDBMHNDaMxWLwro2rbesLbzu8W96FUs",
  "key28": "2S2yKi2y4p6eVRTGPV6D3L4BGXLyxQSHCHuhhdiJpVvLyDyr67VjTWb7LQWHFubNppkqu7Hn7ddCGDkAYJ8p1XGg",
  "key29": "5uUZGoBpUdkZQdAzDJwuLKjUgRDTh1yzrMwz6dZynfVtdXLkQhsVEXEvZ9ji1BhkKU74radFCiC6tXccNZYAnoDY",
  "key30": "579A4REow8meBdn2wk5LCdJdF2KeVdWDrVr9PoqBZdnf2d6S1krbxEAThDwb21U3DxgYPgWmmmes5Lu4ezwahcgo",
  "key31": "FzXqLuCdzXnwDGjQLNqFm91ZNk3HFo7DEiYGvz9RiPdyc4AxwWXA5gqaZ3rHWGkGWZpVuax7eMT8hH2BCx9Gt4Y",
  "key32": "5p87wrBjGLv1Jwn4ugHuRDszuQJVH3GDorkxkXj8uxrykGCo2ZKug1yer56TFuY1EaVAWFPXEQoxB5okxkeBBkNE",
  "key33": "7gXnLLj9JVtaskjcbdwe3z73Hv7MbgCnEDZXoXbhArpGzVVWYs3VzkRRSjVEzccUx1cuf1uTJy94VyyjonSjiDV",
  "key34": "4SZmNyjnHN38neXriRYV6reTHWvDs8GNARVY1Vz2Ej4H7hd4Dfb2Naysvu1HDDaE1NPjbaMh47NcJ5G52MWiXNkF",
  "key35": "5abCvZV3XyqDqcHDcDTZEDntHFmQuC1K7aP5ofUFJoUouaGu6bS8JXNPkijWeyAGK22ULFG2JWMdd9ky7res6o2f",
  "key36": "2C7hUcMedtdxgNGUeA4dLYqXJ9x6fvEwjkXWKYEXTunABCPdUtvpLGWNpnsjDKPetDCx9SDLsrEug7DCCFjNHKZw",
  "key37": "5tKdceSnjUJv184Af5sVCsAMKm99NtQdc2w4LQsFN1No3jUBFiVE4JMSgduxYVHKwMJgWPMErdJkuMhEqTyMauY7"
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
