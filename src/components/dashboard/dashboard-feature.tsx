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
    "U7pxN1wttaiXs2kPkznQmzDaZNG8FnjRA5yMkJVEfdan5jMMr9fknrWZLTp1B1wBuFmyevc8pBYiZ4qdMrUYcB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsEU5VPSGS21AkdyUU2RNq3TZrShFJiBKndCt462hvrQgTD7F8c1CGKdgw2ytZ1XwbhwsugpeYGuGb362tz4nR7",
  "key1": "5JaVix1EHqvQJZVvURtp66JRvVSkHSw3xo2UW3XeicVdztmvant8uKNDjWRG4dNEXnBUXEe91JQKHVRwr9n3qZ6v",
  "key2": "cMC2iSmtDmc45BDnYykNtjD6vS541EN65XpC5P27QNAbjajeVQGT8d6GFvbvsX23tFfppTB3U95Ucg4wSPxWTTx",
  "key3": "51Cg92Va4mN6bDxDtGBtEoBVyhPz6WwDtkMDMbqpDY6ESu4GEzR4K3X9zWQKiW5EDrUfMnMEMzkbZheSQwsgo5tJ",
  "key4": "5T2Ymj1Bzu4fQMka5a9XGkem3uGDhzhzjtNaiM9117BMb5p4WndkUGaN6n2QrAeC6Bm4iZRVLJUxTTtrWUJjPxQx",
  "key5": "4GxW5khjDPg1J6qDrPkKUp4nYVH7BmZ5Tv3691sgsafGiQkYSXg1o6fGG8YSHUmarbZvxyog8dCLqA6g63H5AxW8",
  "key6": "5rDRnUmVqLYWxfBjhT1LY5GwXmX8ncvjPzBzhmgCN21H4GSg4HucKYDWAMMFB45e8mtStvA6X7Km85dSisXpeqqt",
  "key7": "2wFEfzXTXad487gSq9XHpi4G78zvtBYcLmJGKNnvFijGvcM6wdFjy3hWntrjWLVS5fnbXpdDz6kwLfCpKQgXCZk2",
  "key8": "2vjSccpjJVebw3cyZdYJchsx4SzXejUoZcx6PNQNEXa15318EWBeY5kEw6JUNZ25UsZg3Q3WwULnpvA2YdLhusGj",
  "key9": "28Dxd9gVkxNRUDEnsSv8faSY9szax8jWNbvsFo2uwSpsRZBNggzKodQ92z6t5E7ooukamubmfTxJe6qLpG17ZBNv",
  "key10": "JbsJQkpJXW5wvtcKTYzQT7J2vaSspiSbGCeosubvxWnLaeegCJJwaPwkyqYLUYPobzeJPVzTPSAhSW2kjmuAw7Q",
  "key11": "3qasMayoV6ti8sFGTGuKpP5yoyxfc4CshjJGo1ubJq26de1dZ8zZNE7tk7qgNFAQdXc8TYukoHMqdBnbzPHHN2Ca",
  "key12": "ctCzhdEnqNA8idRrktxQ5ZUJutDR19Ty5a4HUUawE2WeGBYF9M34aUq2Rd2ysppXQN2UyCNTx1LfbJa4ZyN9UcQ",
  "key13": "5CPfioMunQr987pTtGJCirY8tC7cPedmcaT3FcQMCPQ5xHqEgBqAA3a4XKxQDYB1ZqPnacwF3HTnCrXMnS6D2azZ",
  "key14": "2NceqveGthZJPMoH5WUb6zSWjjE41pb7Rfcv6RSMDFwidnJsmZ4AVWV3LRir9HtWEzjhHozQ9fvYXhk6pfAo8pc4",
  "key15": "f7ZjDTfEVwWYan5ARH61wrBjHovo8Ahr5u6gHHKWuS6YACYaLopmeoWqQEPcqgEzQtzrivbgeCd8CL3jw8seTAG",
  "key16": "33uFBBwzuEGziVKC9rDhU88f7RhYkMVBHKdXXHVGN2SxprnL8xKBs6ZPYpq7QVWrKwKUHn6L2etVjEGdupBFA7tn",
  "key17": "2mQvj5izaJnb3RNtT4Z3fsq3hHU3HU4cRToZLG2RSFnL1n6jDmmQfJW8L2omrPb9U7nHC8wAPVcXg719c6turGcZ",
  "key18": "4Lnc58Y5gGnDLbAX1MUMG29kJsJw25ptr29eyBY8qn8ZWQwgyKrEKDLP81GMrZHnp9DXVMKv7hWViApfp2up6e3W",
  "key19": "2TWThZ243q4aXA2A6ZDetA5oSBLFZNiTuq2uo2dvUwK5z4ajVicH7Q9XmbqvWKfrQoiTxMWB1KqhwZCkg4yghjdz",
  "key20": "BUf79St1mWNkvbxMt9NVjgMvezDhideeykRmqA4LAnxe7B7mBawV2HjPjAaUPYRqMFxLZN6rMV56QqwMoLUeXBK",
  "key21": "2DbqHnP8LFhXijURcRwTBr6XfvVdZ8AXgBNnt5D5HMZ6zMnZtJYUuy611Q8G5FiY3DiWN4WsB2XZLeYPd8gDossZ",
  "key22": "4gAbzyfJv8gmTts4ewaAJdvvqU64cX4gUDBqwTX1VJH7pqUq6oY6uc44n7fd5SsChE4dqeg7wMNuSbvpHErYCdhV",
  "key23": "2FkgbAWqTdJ8sVXqfkoQiPygQL7eWManRm7c6vqz9HMhEa1QfWbgxWgJCjW4HvVhzh3xbSpN1oLQTgdooUZfYsca",
  "key24": "2nHDzvxcRT8mN72kWvbwBTAB7U7JKEB4Mpa72jWrRNChUe1DF2w1r45EfRPAbePwatUp4DbgwXvybhfykdkmxXT8",
  "key25": "32ryzykLXaVcNFrdhXZD9M2g3gh38tbtuE5jzNcgx922vw6UX91GciK4Tnkdp5UqruDMbD3dBfi5fgPQTUbL18LA",
  "key26": "53tfoW7VfzzKKDAHCeMwtiFrW6VWmWyfKXkPd5NfJPHfTmhgqCAVp8s5fR7iDCtsgw4q6KgcrFuDPBnL9EFRnrqx",
  "key27": "4GbKcQqapRE1F1yEj9DqFAxyWWMeXUd75xGLTcmsyVnJafEoFuBw4ghHYN4nrdvobKswUpxuBAZShBiPQHCEVXk5",
  "key28": "49fFS5uQ85S3riz3k2krrWoHvsonBf4EwHpJHLwBmoaiZQsz6fBRRrxouQJf8yg3UjEG9dcQmJJnJaQ9mwAcC1VZ",
  "key29": "aChkgRhpiVRi6NaJ7SYirTQ1d4WAp69WX5MrcHFa9zqMPjXCe2c3EQArAzeydEKEZsTe8Bn4kaczQLdg7Tq8QXF",
  "key30": "61DjmPw8rXfNRiNchczAstiiddWfq3pQQgjvPStd3HUkBpRg9RHs2tJ2pVrWzfn8S1J7HcxdMXccxrLpAujnDEck",
  "key31": "3vf4SLC1szxGGmYNHSCsmVnrya4CwprVBcTJbeg1EGxiqoGm4h6oHKZTjeWHr8Jjszrr98nA3ug4pyq34cnGHUhW",
  "key32": "4LmnA7R8QKkg9qJSzjPC58yVsEV9DbzVS5K5Xc6mcsMRyMWMnph4dCCuWSG9QRKjZUzH1JCtZk6xDHhica6VpzEq",
  "key33": "2TuqP4nCPkDBUSd5QdeZ7heJgAWks69JQ96Z6v2prZBv6Rtpe9oHoJPDHtgXTVT31yymfdPRvCJcRoLYawTkSUwq",
  "key34": "54YwFygP9yKZeu9ZDKbNLRj9C79sFoJ5qVMGXzXKNE2FfPYyHzZj6jtnTmWufM19AMXqRGHT4czFZpZWtz4VMp8C",
  "key35": "3BVrVr9Kbx38uogMMFTZiVXeYgTVqSkAWff94CJzvVpCaHqGBce2wPMUcevjcC4xG2hSiWVTtNVzPRsv5vM6J88F",
  "key36": "2UAe1nEnXdxj9HuH4JiWCrcjWsCdg7ZV1GDoQhubvPszN9xSqhZEq7G9zGsKsD4uu55LQdcWB8CiP5J6wi1ujwdS",
  "key37": "3mkruZFi885AkMKoHLYByyKNd9JE9oCYuMPxumNnPhZ8HMDTrHyfr7NWpRzHb3m2Br7uZzvx9uYujpv2ijcnD2mq",
  "key38": "3nF1qxnP8wrzg6gQ9bkavNGyjdvH7UVsDHbu3iNpDfKnoHVEa6oo3nSRFoPKmEDGVcrPYhaEtebU3g3AxL2keeni",
  "key39": "2evAAKpbVnYYai35JAmnpGjzD3rbndmJXK12EH3wwdqeNH5CoJ6uqB9XfY1ncF2T6Bq6Wf2j6K82s2RuryV9JVJv",
  "key40": "5RacwH2EY5avnnRS6piufuvzdjXBZbAdcCxpVEcZwm96ZvPsPBS1BJH1dAc8TdA5qrFpGXis7HQUsFqvZy9iH8mo",
  "key41": "41dx312Pym8GVnnM5KC9xqExLMfFuHnXJ4vT28c216tq5bewAs1kfiAnXpdYzWk3wQtGxBzeEHq1cCEH3hxdkk2M",
  "key42": "433fw4o6sgBDs6wa67D5TGkpMidQ2BnZvfXYhhhEB85ZZccgXywrjnr9PntAztm5cYyyBavdUMANW99wKvszDDrR"
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
