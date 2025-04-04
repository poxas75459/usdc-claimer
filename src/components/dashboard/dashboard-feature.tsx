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
    "5h6K3eqKVyKKYBQ7D3XVfmQXfxenhT72zXrZy5U7Bm8tGDb9TaHB1EXijCksTY1Fx3eywi8d2ER7UoX5yEpC9AhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkoZR46H6Uo3suqbEwDg6nWUdf4m841L7gFTi6ydHkqvSNPAXU9q49wE9qGYYGbUvJ63nc953Vd8xGQVtJZHMbM",
  "key1": "2M5qxhKU5e751hewM1Ljqg4Y37NJEbDtKWmJN8bZJUgCqMJm9phBs7jXjRTQSQqfQZuBdMphDEHXt2KbTZDq6QBj",
  "key2": "dStaQZj5rsLQPJ7WHbu3tLhCWm1jgWAPsSCipFtdpUafzBcw2Deer6DTk4e6FwKNiHsbAuwBasKXrySnLtgYxde",
  "key3": "53xm8VXYnniRRB7vccqB9QaWXrJbdEW3Uzat71eb9NTBdbHdfd27wQo8Zx4W6Hcc2Jb1ERQmfVw7tuD6kvczn7R8",
  "key4": "2RzqhJ2vnhcUiztHtaPPBcQa2b9ikN3xxEPM1nZRaQkkehroCZWDApaCGvUDQpKvaCJJboUdaYXQktNf9jBakKXs",
  "key5": "4JZnHThL2SpzfPgmBS2MUy7CZzBurEbTSdZg1RNymthovUqdiitdMgJMxzGJqpYaHW74htCdyek8Y9pGULikGhM",
  "key6": "4kYDFEV16HoYJGbzumgh4V8MXv2YASHiLNBCzG5uDd3XRViY1k5j2DC86D2XHiNrwmcAZ7jf7VJKUeuEUpobtA6j",
  "key7": "S1HCrWeRp8MwSJ22ToAsEbApL6oLrJaUxQ7osvNA1mMzR6fCkx9eVry5k9PoR1JAMzFuXs28BrEEgW5QeVDkHSj",
  "key8": "4c5vLRL8LAyJhwhLKQbzNtHcgiYkB8eDgTmkTnSeC7x8WLTjHbhRQnfA3ErhwkvjdGhLyHD4H1cmCdKEjTK8NMv",
  "key9": "4winqmfTZX12C2yZHFfmdicYEPYA77x3JwHpoPzMj8eUxVk9tNwir2L95ekpywsSkqACF2vSWcxVxqibSu4bqRiw",
  "key10": "4TPx2GfpffMNfUQcKkyiQnKbV2xBYutTeHHPcs52LLWG9SCprBQ3HSwLaM77PxyPwbpLfhBcFE844TBA4f7evVWq",
  "key11": "3rPQPEQZMLEjRNgkFYpZ7GWWb72R2Her9WsQu4SCvY1cVgkFggeqb5wxugs6FkzFWKx3wcpagXKjGqsqcfcchnA2",
  "key12": "2QHaTb36d4QXn95qAYNi9CLUm1bV5hdcVk6HoDLVn5VFRjibVCjkf2WzNEMEe1aAZaLouPWQ8c1Yva4q1XyVZrTC",
  "key13": "2Pw1UgrznPHDB3PwuMKLVfLkAXpCybCNGdSL9GRYcQdGDpms9oj9B71bMMqoLtVAbs3soFRDAGjiNx8mcHLdETSh",
  "key14": "Lv9Wi7RCPpWqFKudvKhEqQga19fi9p4UkpgPKoJRKeuk9dDKBqYsZGssYLzDpJ9859DiddfpKeNYY58uVkQfkgX",
  "key15": "2TvxVQ3XH4n6zcomDF2fY5PBts1d2VrBTwXWVAkbYXkC1unpqczpAXpCRgRMosmHvLquewCYAgNrtLXBmwt4k2Yx",
  "key16": "3Y5o6SHNPqY8e4bY2xbms1y2js1XKrdDFgoqK4Q5hjnWkLi24Jm8jkEo1hDDtcgGFWEnR9AZFmXhKcHvkSznvMre",
  "key17": "58cSPNvRK3aPgTDAVMP65nNJGCazHQ1UC4m6ggpkqtrGZUBiFDS2o71gZLiHwp3UfxmPXssX6PwuxqmG2CFBYFUg",
  "key18": "SVPyMeLcWEoTMqQ2bTS181zd1yrWBV3jHZTxrvrd1pa5ZnsKXCJSGbFanQgJYbAUHEfqsu2LBnoJqFoXv4widDj",
  "key19": "3TAUmgFrSBNG6ogqnHAeghrwBYw3iArCigs7eCJ16cmpb7PFFMxQgnkWiknpiSnXeyUa6LU82qe3KfvzxmUs4Xon",
  "key20": "3NpJubPaMn5qPj6SyVSJiHEXfjjbr5pWZqwG16fkmUj1JBeamYPVVgomj2V1i3PoVnLS69zHKZBGGr3ktHspFxtv",
  "key21": "5nQFdwWgzkSjVuzSXACBzWDazRo7KQTY6WUo8Mg7TkBDVpQUoCNhzTQsSTZWdhZoNaNHNHgAjadistYz35Ui3riA",
  "key22": "3JkAePAt4JP5h2zvHhwRHUgbBXbBY29niiKKrbMHnUzM9cEsk9sdNMk4d82JZbvnQ2rGqSevqqZfJNFWysrjpKTA",
  "key23": "55bGMsZMwPiREC3YfzEMNA7bLG2Ro2WeZq8U9oYJnmLdPKhuNgMzUN4EMcqVbmtD9jDXzyFnTTsEKFdUt9ZgW3v3",
  "key24": "42cSRLHrHzT6Xq74DmLZDC4FdEHzn5qy6RoXEV9kr2oXhMyj45APENytsGSofhbLg1AWVrxhBP7dGfUNixcXCnhy",
  "key25": "5mNh2egeoJE1QeZobaHyQDjDzNg53e7Mmg3LzNTEmASnNjSqbmKh6UE3hWP7HxPV2bggttt4iGHfy3JhrjePBieZ",
  "key26": "35rQh1Pky1YMxrtkJg9YZpAjLNAKJFZMKrti9sTruuzWkFkC82SfNLzoHPkygwbFVQJJMeLmBRqqizzWz2yrxmGM",
  "key27": "yguQDzDGdV54FP4hTSWn45HVXVHzYGspFEDsWKondAz1PsaL9C7KfR1ZGGM9D2v4dJkQHz2MgWVqxmGdgRwpvBW",
  "key28": "4RseKzGJmCohhEJDSaZgYHSc9LSY8ds11PrRsPLUzq6t4hmKAPrk8KTKjYCHtQDqHGbWnvRTr2mrYDQRBTmfhSM1",
  "key29": "Cmihi7UxPgxivceZqTxUKwHAcoqY9mTsiarbtmdWt12HCJs4Z1BJYzpwPwjaLF3rmr9u5hNJRfFJCV11SQVGn2L",
  "key30": "2acEHjDeyFNwmhgzor2QwL6pdmFwcBMk69zgrzDijzNR3FARmeRrBjH6xYXSxdGV7bemG2SESxFKFLtpEH55qod1",
  "key31": "5dRZSipBYXsayZs3PNbvuDPv66sKDfxGCuLVKys73UXxBBz6HDB49XKZaWSFDdV9zGUTSp9zjmF5HwEpSJwTMTQH",
  "key32": "4kpgVcnWuwpdG5Jj5YZi6RAv2AZyRdNd8rDUHkNNnaoGaEfdnt9VjzCSZWNSdkZUf9To3GkbCiL4wRx3LGDtJYrR",
  "key33": "4Bt8aGyJmBZ4nFxE9ejayi1uEHoUWY4is8gLnJSXw4Ctd7MS44FFgaZurFYiM7fxRJkYMkSJouAGC4DajTgYJcYs",
  "key34": "5QdahhCgyBwhUk8poxLnJa5WLAouYLDHSXVMw6AGMnaqcaHi1f6wncnvwnZLdKeMLLYGdrassthiVivW6NkcokU5",
  "key35": "4buDZs7BED8y8GjJueXFpmyH1pVRoQnodcD4T9CwSmM687MQMLGLzHv2wFfUBkqc2WRyDtEmgAaKA5CWU5yk6Yuy",
  "key36": "4sZBv9LcjXwFaiUL4KL1hVhL2AogETYaaVCC7BorxAeQrmWpMKYQcMPQ2gmHmQDWtTsYgRELvaddYQybFXQzzk3f",
  "key37": "4uXmx7a5y5kA7CLhffgiJGWkpc4oepRZ84j5AdB4PvsXebrDWLMrMKSxwm2N8JwasdSQG3FwwQj5z6uQgmUnZYGd",
  "key38": "47jSSQRq7166sPZZn6QCnQQS8JmoDhcW8rwQhnXyYZErZ6tcZCrjaDyxWgbtkMvC4YMLDSKsSEE3NntzvAVRRPXV",
  "key39": "2bc6PZpE3dRfLJCsiCW9uktjZrFsmzqCSPmHo5oh467y1zuPrY2PkGaM2m3H3GhWX9S8Y7FKnpYeKfDJjyRrRppB",
  "key40": "5TamoUhZ6s7XPbGRi82mRUx8tqcfVdzfH3BB98cq1TK2nBvyFER7ZgKkej43xDAch4zVtmaQHRKpSoMsUHqN1XKo",
  "key41": "5hhRNgaL7m2eoZwbz1WiyqiYKNVmz7ZiQrY18hgy3XN3stZAp1qKHAcrCbsUeR4ujbqjdQok1XTc1ST5i43yiDEb",
  "key42": "2dS5dE465erUAwLsxiwr9cTJC1K7o64uzTuWqbCbLpaki5sBULdwDBit5kyx6h4XfvSkxVBnaTJDMTcjapkEqeiV",
  "key43": "51vGtnPXkaMitv4TuPQYugJhGU9b43TkPBM5maDL93fuzDSm6zcpb1FWU8GPBAXe6fDQJ4HsG9W5Amqgtyht5Wo7"
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
