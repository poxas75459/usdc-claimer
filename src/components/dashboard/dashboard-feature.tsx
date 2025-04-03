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
    "4zHfsudoYRE5SiNdRXJvNTaXn6fLuTWeDTZ2fUjTbEsrkmCTkzAeLVHM8qmDVqWX6VfPogab391uNbPGgjTyxywA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LcZeRtEu1Ww1rTKQEJiH6VMs95gW5ubQD6WSKWcRMiFimPrptMCz6Cb673E4NLsNU8cSMESqKznoPETRQ78U6J",
  "key1": "mcv8RH3MKaCZd7CrF3KaEqgGveUZCgq9gbAVT623jvwUJ7RBao6jif8R6aqDVFpqhUuGNJZzfy5v5SMp5oST83U",
  "key2": "3reLS6ohQLQNc24QEKZ3m91Sbw9AVPWGuR8HX62w7NHA6sDEz5GqaZpc869tFASjS8zAKwQiGbMPCK7YfAWnzLap",
  "key3": "26gMEnYqdnAiBAy76yQVYP2KeC2WJtVM6cD7B56ZwkouEqoBphsBjdPGf1QyK46vT2hurXRWCEndCFh6kxVXduXj",
  "key4": "4GK5WoyrFwez5K2pPWRLaBbPRZdQozjXybFK8hDurNkSE5bJxGCyEBnnUyBZn8qDbVNikAVuh1GPC9cxrWJpUXJx",
  "key5": "2zQQG7daYrLGUdnxLtafZTmjJE8my1rgMMWrr9HR7ZaqSiXee64838m5dy6ta89oJtPcw2iVmXrKNpzJvf9PVGxH",
  "key6": "2b92vrGL2riP2tYWYwaeVeHfbGbCNGeAqvyahyUtaFDcXWWDugXq6YunNJ7RGrjWEixg5LXLJ7Q95zcXHFeFhnqu",
  "key7": "5A5yQ8BNn9Kfn9CLNodiDY5z2v9iARgbGmS6cdSPK6seLUNTiq4WeZYUUqUiAsEhkDfGtr9CBGW1541isEsiWfXx",
  "key8": "2pEy9g3hqAcS2TDqWNi4pLumHUNr8hxs1aXwmgmLpfUdGsMjvwS7X9cjjvFZUrQEaZRaWh9cg5CjmZediAN4Ek5R",
  "key9": "3y448GSd413ShMsgrU2vgFNrvMzP1Kv7m2BMF1qJUvw72SBsmteMqXKCFnQGdw1FMUftiEoM1kwgHkNFfHXat6VY",
  "key10": "5JXPGaDX9D97QW34T1ZQDwbKXL4Ed3EKfxKG1xNL5TmShhWEgmWoj7eHGQH6R4Yh1JEG1LpH782556aRqf36biQQ",
  "key11": "2iwSxJu3LFtRPsRgCiodfgNQsweCmrhtwCUWqhbAyUDLQeaLgpRKzA6hvumUrg98YkzmbMQJ9tWFAj5BtmSgf4KA",
  "key12": "Jey2oNBn8G7buyjHayG4biH3dXM417Q6xVPuJTiSezq8Sx6DWkqsXanv6EcJWcBkb3Xig5vMJ1RmoMSQaD1Vi79",
  "key13": "Xv9UfR6kWk4Hwp7VWPVwAXWNH4xw8Sthd3nAvGi1PRgME8bdALuAZf8pgEK8XQwpn7UvtykQbeY1PkacbN8gJ92",
  "key14": "Jhe7HC6kSMxsK3qFKuT4L2Q1FQWgcAbSnm39F3s7BC5w94E2eJSexmsWJogTt6esjjiAbyzhCw1x5Avn8ieioza",
  "key15": "2chKomEy7fqfD8Ks9FJv9eMJwSCEWkTgQ1s2h6Wi4quF6tjy61yiauCjmVUQWzbcNfnKnYTLWgns1VDoKc8PJGc1",
  "key16": "2FUpCGi7R63vaoWvJG6o7sNBWgQEY4u6JSUdoHHjYxdVDqFVuumQRZ6iH3xm6wLvzejbUNkQZMaDSyHe7qM8d83L",
  "key17": "3pawKdJBXZwo2zj91RW3Yo9Ku56zemfQaWXmR5guRVk684ihbaPnf37EyeSeVkoZpqU8LtXmg4AYGTFhPS8Cu4oY",
  "key18": "4tGcukKSu2aiBy3eWgC5wh1MdjTPuAUp3i3WxwkfEasUs71SDCPnqyf51neCawULwK2ytY3jRtfpADaEDenN4iBL",
  "key19": "4zPTmGjvPbFo5pQy45FveW2V1uRc5oacKrKtXNykjz9F1MZsx3QBsGN5zB6AuCHwb32XY94M56yeVZXPRssYnjuY",
  "key20": "4Cj9XtMj8kPNbNvi4aDEYBNsoLpepvCw8bT15n1nuq9vEp5YeQSwwRDzRLFZ15k4cJsgmpnoC1dV2kyX1QCEuoxr",
  "key21": "2Fq5hnRLyGvPX9b1SMmvhpeBBN4bmHbZxZZcdsM8nUMYxMZtSPNtqHH14PpZnQTYPFPiYDnBtybGUAgxTvusbtdu",
  "key22": "x5T7ikx3XcJox7UJHftTZzxMZ89RqZeQwybptWGwCqZiAontoHJtfMegeQhjZjXU85CYFySXsEqenLskRyEnYWZ",
  "key23": "3yV6HCWprXtAoZsD3Ds1UWKaxWquuUDgdKCTA4xVMJjmmptjob7dsNmoEo25caLFAqzEcw85Mk6J53qZiBupfhQ9",
  "key24": "rSgPcVqzkUrqp7ykx5uKd4PboweVMAAS4ndBURN8sPZxABY1vWMf8DTjDpdfwszvmAYPsg7V9LxK8CQeYZbcp9F",
  "key25": "iMpkrpfVi4abkpmLFCixwgnTTiZ5kXx4iM1CZYmHufRyGk1EWfaf6aamgWQJrhfwEp64GarydkeP2X9sYdiUQ1f",
  "key26": "4a3WDwZ3ZUUKuU3QTVD9Crcd4rizpXhyVBMg7XDpWYmVBRxGq7pf6yMiceJpbDLyXM713JDduVDqNN6uF92jxEdW",
  "key27": "618dbwcT5NSGFVQhKhrmoVFLCcJghyJxTsRDQe1iHCyRCRK6cs5TwHRMWLAKufRtdV1wsJFEtMyZXEiqZ6jwNhyD",
  "key28": "4gEqJSLmYKKnybjtQqYqhWGrTPJ25jWnQJ4jJ3gyfFfZ9rdf4rGfBgyVxm9eGwSTpohEbR3tFXBf1tNYHboUHrnX",
  "key29": "2c4YxhSbvqyStfuPypqf2y38X7Ldibeu1kxNaDBiXoQEAjBj6BNPW35rt1J3ux8YoYiKbi8B4iwbzHn9axZnQ5m9",
  "key30": "eRHqkkNjbwyiok8CnnotcqxqnmjY5wAYUjbwYUAzpqvCsx7R4TTv1pQKwPZVnTkqKBjXASASsQmZpegp8zC6HWT",
  "key31": "3jYSvkiMiPFf7mAmwjQmnQvkraGuK6sGWvgCizsqcDuxBNwDiZZG1gzy8GQr3pAZudLVrks2U9YLXWQLFx9Kzdi8",
  "key32": "5BjPfnnS8U63rt6H5oh7BMGUjKmrFpgQeMzYNGRDJ6kV7WELj2BwsEukZHAfpiCyNp28gjybkjx2TB6kiisRND3B",
  "key33": "4bnTtAo3SuhgpUkDRo9TUbyQEuQ4tfdb4VwCDhBLQY5UTtSNN6YsHbDptTV884UPcQABbpMYavKs8Yu7kkFZYRFs",
  "key34": "rDLVEX38ggn4T36aqxcw9SYLkpUN9CRZnCMZioGcwppXDLpoDxLLkdKTQPWSsiuRreN1AeSSvGTXcGvM1PMHeWy",
  "key35": "5rTL8DwJx19xbfgQvzADeY7D3wMr2qYZMeKorM5AELfdjzNJE6peh8mUcDuaLKLs9xbpw61nJYZoD4T5iG6akYaV"
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
