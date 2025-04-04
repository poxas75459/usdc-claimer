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
    "2TwwAAEfqX4WJmw9571EwSG15CwBR9tGTD5HbVdBx4WX2kT83zGbFLBMtXNoxTp5Kc75us7v7TxrZkb7hmJAYpKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFURktPy7Hao9rC8PBdbmoJFauXNcBhixsVAVS9RWH8ENCDYtAhE2jbK3fGa3gsvCaq1qyJ3VKp3hw7j7RezNu8",
  "key1": "57dLsxJYKiadqxTEcykryVBNbRc4swJDiffHbJFNMzHx4sSmtZkQUv5zZ3mkvbDZmbC3UKfDo4D9CBVFB5m6Vh9D",
  "key2": "Kd1WcxSent9347gz9s1zQLQdVj49oPR73JRyHsamWgfVvfZdqTkEVvjGvswqC3RY8ZhWUD2FPESm1wuoZKBhGRS",
  "key3": "4DSnd4xX8C7EE3gGTRr1raEimfDCXay3nwWqZL4pm4G7Tci5UKYNhgpY4cckWSRAmU6WdG2EQcu6XE71B3mmuYrm",
  "key4": "2Eqxw1BFtXiJeyU26inaXJ3Q9gwbTcVaYRq92cm6FfKR95rrcmdf4tZSfqnsZfneBBkUdRp8MMs4gwE2qi2Y5Bbo",
  "key5": "4vzdNAKauBcXmxLhhA3sPueDckjLALU95h8A24X3Tp1cw7WXYvHxXUKHV2UZSkZ6MrbGXFajtDJb8VTxpWzRnfwn",
  "key6": "4Se2vMXpwYnrZGEj3wk8YXwcJ2Km64RVGJ6pHEY8RFfSYSPzzJ3iTsr7GU5MFNfWypRNZ1grKRduahykGF89on7x",
  "key7": "5uE2Zwn7hauR4RiYB4wFHjxp1EAs1fqSoV8r92HhXsqGNc8rSEhvzDQBTQQMV6sTUe7jLihNTg2AK8mjGeHCdbFZ",
  "key8": "5pnXe9gCwLHKRbQztsrwHHncHmB3WfTGFSKrsnYDmWZopwsvDzSjXo9M7wPfWDySXtpBoiqURft9djVyuDLdPCgg",
  "key9": "3BhYaVEiuwRxcZjmp513G4WxyDZQGbge7BKwrxxeXB7M2sP4oD95unHCEu7Epf6K2q1A9LhFvhRe3JvXPBhtauon",
  "key10": "4wsdmr4YzjEWcEkJ1rFRDVnjJxs45UgTRtVfKWCZps1Br75gFMtAp4JjMxfFKYTNhXwjeLeeKyaixiaJYwyvTVjS",
  "key11": "4Mv8j2JLz3obefbMFGhuvTjKKAv7vqzBTv44BGh2RFgwL7NqpAVRggitvt8DsYkSNzRTBjxBao7i9yAhPG7QG8Ny",
  "key12": "24ejqKNsyFZNUcWaTqZyjfyxgKssmeCV8gtZhRYraR22cVmz1JX6djkQX9T2qMznoxxroSig99pB4KV89embf2hz",
  "key13": "3ofmdxQb9wdcFLu6eGyhYScpK9HMApGuSpkRLVTN47Qr7jHKunqQsoxEXXTWQhRNdyWMxADHB4zxBoRNDjWaBevE",
  "key14": "3xPap8PFcFw68oexLCwnC1tCuSFW462qzL4fbUku3cvb45fejJzX4kvqYhDYAyEy9RkdCFMkDgF9AnKiH9551KNB",
  "key15": "37tWRr1Tx5v3timwoaqxPrKFmpPhvu4UZBQkWSonVELokF8mgoVBzq3B3DeLGnrtnFZd9rjHJKtqXXauEzCGvzY6",
  "key16": "2VTh7hgU53V4HF9od8KpAQjdi8uTEDq7GeoW6i68aPsC5MYf71oXTdhXz3Hk4h19rEg46HUPQkcTyQXhs1AhQ6TG",
  "key17": "29trj2mP4hxXg7EwAaCxxhwmdwQKLUYKVebFK5W1G2teJtRojHXEn7UYE2fv18NtY8ygqTSWzsAUTM4rgThu3RDS",
  "key18": "4Z13y1EkBFiRSqQCsZDymmu2pTxPJJPKD3uuPibKsFh6QvAFVkWRw2uxwjD7GctDUr9fVjxWXpiyWPnourHcLs7h",
  "key19": "BUVcu7pxbHq8Na7iKeMxtKxtV3ECVMSxCXenTxcWHffnTFnp9xYomu1tAR6SJBR4zZ98e2LEhEJEEuDUnMgf57t",
  "key20": "2qHGjQtUjTDenQGdNsqgV63U7Ew6Px1CZVjHYTBSiTtGQtXp6UTxs2kL9XCEgy9kWoYDz8TpxPWP9dRMLQSHk37S",
  "key21": "3Cd4mRvCrxvmYt24cadWiJEGEWgzszNzbEjGUxGVPRYC1saKMjnfXM2hi8DWtw113Zk4t4FcwntwsnVAcJCbgyRZ",
  "key22": "38bM5r6539YQpM11DZNno7mkhLu9cpvtJMsc15e6WdCMecPP2TJDcqNh4QXGbtKrSfDxiMnPkiyfM3onEqRDy8Gc",
  "key23": "3wRCTCGRFWds2hZn1AM83J7AiHAx11u5Lb7udRYrsgAgJgeDuCctCp5PYCt1oD1MUdM23zDMZqzUoZgdYyvnppMG",
  "key24": "5U755J9BvWHNEUjfd1hutgUZuFpkvy5nxod7iQWnrwHtPQVvCbUdocSkH2ntBkWFfd9A4P8EZqw94wiBeHXifu4J",
  "key25": "3DnoUGNj6H67jYWFeyq9s9c1jP8xThKL3jN7L5UpN1f6mFbdggNa3wk9Mk5KNsRB4c4XrCZhZAHM9Dyrr5YEnv3f",
  "key26": "5PU9pQVmfEZKzcmz5MDGN3KEgiaGQoeNZFzJQGntMVNrfQvCfisbiiBb4AJGP4BSmLCQKTynPj5tAPWFmAkDEWpG",
  "key27": "W4Kbg2MiHL5etTdeY1cHyWFgns5dutt3PcVfML5MeJFHemSae1cmk9X5V6kCy1dBt6fBBE435ViD57NXMCB2N7t",
  "key28": "2jU3hTkawJbpLALBz3fyqnGdX1AhLfAJ4GEEtBqGjmcZYbNXsovT5VW2N7WCqKY1LA3ndhX2DKm3nqbqzMg2BM3V",
  "key29": "5PpfUkZZwfzrusAjWxWZktQghFSR6RZQenwGfp7pGfMUj5VyD1hk1XNgAutcB289PfBC1Y62imzTMHWKyWMrQkhY",
  "key30": "5zN1AjdBm84JCJKngF3MVXLvhoHesHsDrCXdjeHgWy9ZhLZ7tEmUWjFHvkRknwiPokpQYWjS66zsYSt7nTfz8gkG",
  "key31": "59LC2Yut1npwTWCHBvmrZPT9E92pmUBnKGKmhD2kg5mstei4SmKAAYFVHiy33Hs84r7pcoivcZaYs6DmRAkbLZFZ",
  "key32": "Hsk3ENmdrzPjzpdMYqr82Z9sHfSC5LAL71afvc7rLJpYQhdf915LhUPUxfZfn9s74T1QV8PkGHhJVuMk9rNTSuS",
  "key33": "JUnDB6dLTZmR9Xjf1NBJe4eyQRhNjFKoUuxmBNYFoLk5GtaVczkv475ndaogNG86nvGK3jivUhMfD4ywAtVKVKn",
  "key34": "2MGce5SZ6Ka7HV3VF6wxaKV97V86Qud6MKzvuLnAEFGaUHUDZDmBwywtQaGHntzb6fBgacSQXFQdSiC1Ac2KiFQv",
  "key35": "3RfZ5xbcWxkERZUuzcts66CzgZkXhaGddoCacs94f4vxVNXuZrBPK2VjRuJLm9yoEwJHpL5EUUMrKaCStf8dvvKw",
  "key36": "56BWzPEqcsV5cVpqbkbKw9TpAAnPpShh4AtUP67vvLQb6Qnd3rzs3RDVhTQLwR4rUgtpCmujV1nYAJLqc9oQBxjq",
  "key37": "1Lo273HJ3Lai9TTn55bafPKTZet5YsUdDnv2rsercKnuuWH9UAxH6b8XDsEF76xadQR1iDyxZrfqp7EyBgRmpED",
  "key38": "4chN2S6vwQ1ZR3XvXoxaqhU9VeYn7o9KnqTUzuKqjRHWX9rNGUuVrgdddAGsLUE6M38waFavt5EUA3Fz6Z6iEr6Z",
  "key39": "Ns8Fgxh1voMVjbm2sw63Bp6vmy2xJbXQwMJvbkjxaxk65GPAgLCDwKStef7Aa9LMEaE4NdQR8PdeuNqFgofdqaq",
  "key40": "4atcGG72PNyM1HBCMiBpMxxbxpwiNvnHmbW19yTMd6gPTwMWSKSt8Zfm1wkXACMCmi54CQXxvfiyUDou3qaNcUJH",
  "key41": "Y2aRGt1DyMpqSVJz3X45Xc2Kai2KjAULeuutaHti8mL5w1j9EBpfgnkSRLiCtQf8ALCjZuYjQSnjRBHDCWg1MEi",
  "key42": "3of8sEcwHgwG2H8KLb87WmUJmi8gfBuzRJg3E73i7KNe63H5XjWL2UHgvFb7zvLTzFChN6rTCQmAb7JbquFQMam5",
  "key43": "5gj56BymUapxEf14ixFtcq996tU9LaafJXnaQyLwu3oigSRWoPSqBvU5nRjDdTN4hEfCuZakn4EtdyBLK6Vud9YQ",
  "key44": "5frNwaEjVcjmgfTJXxVyrbUyr89SZipuxNXWVdpwuFL5iAYNxiTK88So5ndwCwBgAurRNeV9nwgcmd318fRA6MRn",
  "key45": "5yfhPDFJ8D3KTbv9C52W7sutwNU3D9LmmckK2AH1ri2BS5UGtDZiK4wD2Kw8QtDErwqgUFkAkEdvmPL5sLsc2pa5",
  "key46": "669cm7UnpnhwkEwLykcVKTpaXDSrPMZPHUFyg3y4FW2SjnyLwAzeF4JD1NvJD3zYkkJyNfJr3oSrhcpjvThAYNe3",
  "key47": "ZmGWEorbhLXaQAKDKEcTxf18rUrGaCQQEbsNhz7sArPNNTXXDD1fq8FKmiyiUqG78Yxdn4vEuRuJoRQfC13nTmu",
  "key48": "2aoTnFGdJ82htxZD43HYRVjBwnBwSmVwbw92X8LbiLT9VyupxsYQoVS5UTNkPJV8usFp7WDaeemt1o5iNz4bBx8M"
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
