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
    "4MBoHGuVnGLbJ5yQUftxAViiEUuWpRbygoLnGEdKvmAUoR1rzWoSy98X6CVVewmisK1SLEYjSMeac2xLqk5Dw1xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eq28MeeGoCGaRHksfQ4f2vmPLKLydDmR5JDDTy1KfvpgpZnC1WgnTWmabGG6pe3fQE93r8z1vwQoWCUHitqkz9e",
  "key1": "3ekTQbeAmtErwKjBPC8BjhMUL1LiwNbk5ScNJxsVnG52DY5CfXkyaMZawFqiot1wwwXAcxz5rV9h2bGh67Jan5iT",
  "key2": "4PMCCyFe7Lic5wLYKRttYrDY8f3E7CZgk6dJgrSdhzKtnHfVhAMqCNGCdmyjZxAsNeH64zsjXVd4ZgFCM6T8sQqZ",
  "key3": "3AuRgKch6e8ixTDGbktAZYR7jJBeFs7JEwbWjwN34fz7zqYiz98Mz9KcxbgXKkhDvpJ6BnGQLGSNYEVuWDWE4Mox",
  "key4": "zFUCrdvaDFncy9ZdVQ2a3ZXsSdzmpkTAYFyK3c5BV2K4C94QmabpEy6L8xLM39fizRQ87ng5FLqSnQyuqvFz84d",
  "key5": "XMdT1TgubyTXzwGkypXJj8hF9pJnFWyBrqm6495jhJTw7RdGmmsSBcTNxxfHLsNwufPpRaRaNctybShZgXynmZq",
  "key6": "5WAMMTa3GZKqvQj84GxZrHuiZuoh36g62WgbxJy53JYoGJEw5XcTiLnDM266Sygayz76KMYKJjKdn4Lwjc7oan1D",
  "key7": "5pa3KGrX5RuWas68RnBEfy8mncZFU7kchLbpAKay8sJ5MbV7Mir6nzX2aFFru1NYwZn7abRWBHoxELgnTvdei9tP",
  "key8": "5KVVRYvgdcvytUSyBktv3ERsPNLxmeLEQPq22eiwV5db9qXN88iy3h71g4dPyMWuk4VfhjeHBjJMPRLvCgH2xx93",
  "key9": "3ji3kmihNDHhbJF6XBAjq3uPqoJgKrQPYNnicWAVu1acCSqY6DqU2bfp9geX9oU9E1pv4XuLnNNMC9GEhhfgsCy4",
  "key10": "5QDinTy5K6BmNfzbu5xF2ox2mwWDPVzX8teeC1ZDGgVmqVTSkwYruYX1LwgeBgVUT7Xf6LxaDqMGwpKJjrodia57",
  "key11": "57wmNDdQTyLqEMrq2aHJZtYUpmNdAsXxucyjSMaKgAZJg5VfWCJU7Hyvz8hxbrX18QZsaSchV6UDkyQGPLxJi2pP",
  "key12": "4AC3tBXPt5t2zmJXaEFxiJRb1Tpm8SpnZB5TFUBgZuvDcdThW4pFi4Uo6gUXfUtdVxNSqEWiS8QqakoAgjvCQqf",
  "key13": "2mLPk2Uh6HjPbBSTJdoC5t9tbNBSw5GcXHPMzTyjxWkrZYWifh8fUrf1LpGybup1WVtdc3Z8QYGtCxZdiDFmGr1F",
  "key14": "2y3sYbaEPXJo1UXDJEcQ5w3yWRvuy5upskV6U9xvMk9VyWHC4cC2WUHxXdcRFwEDYwC5CTJWixcmJV3gfvcVonrM",
  "key15": "25owDtvN9GydpLY2Y8dGBhe65Zvqh4KE1m3weMiyoGps4TdaEjW7LFGHMMz3Ue5qBbF1Kn33z9QxBgwZju1ok2Eo",
  "key16": "4Z83H18XBMnyvcV4oJC23z4LHesHdXT8AbdtTGcqoLvfneCpbTkcGXfby1U4vXgYh3YePzVai3uH7iEPQFEGnRbY",
  "key17": "5VSjXmbepwVqMus8JU6fT5cjuYuL1VFMh98zDGHk1xDu1hGmrTnwHcaA42sPeswF63BkFTn2VkrE2bzjub89MbVD",
  "key18": "4AFAp8mHCH31wgTnv27HfDdpgUi6exD7cFMm17irGnhz9G8PgyFgC8tPesPJBCvfJfibtFEhGC2vRcFo8A7eyrE6",
  "key19": "28foV6V9p7938qLCFAhhvSh1HhxGrtkez8exRQwMmARMRAatgj7gRhGj6jYuDZG9VVQu1y3DcGaCMjYb23sskqvR",
  "key20": "3EYzDNTriRszTpVezKg1kx8rmWnquPkhDyDiUvWuqXAkcAjQkjjm71mRBjd9AVSf8k8CDiiwgAPLedW3b2sH2wwj",
  "key21": "4j3ekMFSTTCF4pGycd3gTD8NpacXKyDZU7yLcW1ZA1WaxC5v7gSmrzPqHxumk39yPJAA1EnujqVgBLG1WpJ1tL4J",
  "key22": "5kkqHnyFkPsFZqsY6gksj1tfWWQ3wsMU5vo4yeD1GSL3iUN6to33xtqCBtnsmZGRHKU68WVeKxzMnqKm5gHG8336",
  "key23": "VHeuzVCRNPeyszTVrCp6qEWripRa3Ma1KoP5NXWU5TT8QKmPM1XgzvZjNGVzohRQ3ignwrg5X7NDoASeBPjyjkL",
  "key24": "39Gz9H6UZDd42m6ACbSchZiR4CmT4dC1wSKyXewSaJZgy2uVAgSwg7UB2zzZwY2NRq9JF9h1hhki1tohW1HGwheb",
  "key25": "44GDtDFFHAgtW1bxnBGfg1tdTX6LWEeWZqJm5PF7uD6suJdDnP62cngCi7XP9BJg1b2qUuKLmGBNMFR3Mm1rZc9S",
  "key26": "3ec69fQ4feFc4rqUNYEMRuz5ZV6oNTVGGs7czZEMqSD2cCuGZi4NPE3mV2WM1VFsnkgXSpzVTj11UkuyuutGLjry",
  "key27": "3imbtPaVYiz1DyiJUL2Khm2S1ggJ7NVaCCW62nFs3ShqPgHwG9hktgjpcP8E6RZG84L1XAKPWh9LhP6LFQomGMB7",
  "key28": "4HZh3yARe3ofNpXMnuPLv5WPRoWJfndfvdatRCdK7oyj8FXowQVw5VLPFU9DMac8CrrMi5WYNyTSXCa3Px6mpBRv",
  "key29": "a4J1EAjpxTFzKMy2HRebr6v4geHHBmJMRGcR2XDxw2vYWRMcJsHGhbZZjk1AsFgjEDRFtDUfFztG6bQ58dzhf3z",
  "key30": "2Sexior72U3Y88k61ZqQznyi4HPLnnYM1fS3udPHQcNy8mhw6c3kDnbfiTAgBf2JKTNQt5T7dh6gkTnH4eNH2zvS",
  "key31": "2BygxXN2q33PcuE594bYWiPg9BgoVEU5ZoyLULuhAbpqptkeDKAGRHa1RfEzpbNaAig3AxmLTge3XJV61sxmkmWE",
  "key32": "5WAQfssh3hcUxMDfq2NXunm9jGEDXpiWtUD9d51pgAZYzQvyjMmW3hUBZLhGqeTMbpeUCPkcWqhmrxKvjNttmevf",
  "key33": "rddRgrrhuZLBKCfeRhsCKsoHimkWpgmpBnLNkMe3kGnyPEw6F8ZYVS2nBaedsEkM17AGQHHf1Z84dMMWPWHkaji",
  "key34": "2vsBVMe7XVBeE76Aore8o2qSBukGZPSFToQc5e6bWsQhGmLkTCxsA4cGesKpfLdtKKPt9nzNhnrJpaZm7U4oSzT1",
  "key35": "5Y9g4KL5JNumFYjWZGX4attV8GF8PejDrpjCBQvE8DeqCTzKaQWEr2ybxQip2UpzUTaxqaPd4nvnxdPngbFFJh7i",
  "key36": "5GacgJkKsFtR53ALMyk1YrPBKnmreUTi7Gh7ZjvhnVSmZcQeByixzk2pySek84xbSLxBTesDdWV1sE7jLQDG3SGx",
  "key37": "5B6gUon5Cch4Nbu1r9KGjF3oHMNTehPSELrC2iA9EsCh4FjyuJ5PtKPhNiFUKVHsCwWYdneih3c6F8tiAKSCZhMy",
  "key38": "zdqTeLZK19y1mQz82gLgQHrdur6oaA1aJe1yp2wLkpC7ZSGfp7Tqf8725SHdkNDfifnSqCgYTrBB1qibi1aDWZt",
  "key39": "5QXhYow1oacnZsKfTPGogFoeQT55Njv1uJQ8NXHpaU62QUrGLkhNiESoMDNaTfo4vN5sdnA1M3oyrPramCCuQto2",
  "key40": "65K8ewNFwMv7XSzPkgPE8djEP2Gry46i5ayUSVgq2mGwdkw1jbG5uLwCJeYVvCpkwtrY1SYaxyaAQcei6K3J9xPD",
  "key41": "3HTYko9EwmKqYCzqAuZGEznEtNJ4PuyFb82pTh11d9g2pB4VAsHozLJaGAoZsjWyuugmYbPhy9nkohSgHJciDC1c",
  "key42": "3SwpgRMQrBT1AQF1RSb6n3aGnW6uuttqEKnHVN8xnFywZtwR1xC8HSZ3spZbBgT1rLwPvCqrSMPV7sEUFQsykdCW",
  "key43": "4F4UVmQoxZ2h9z4ZUJUeSJwtaEeJLN79eFUUKrVm2djdgt339oAi7tRiqUE5rbDzvcdVU5GV1WEucMY6zCyotbe6",
  "key44": "2HYQEvq4iddjENJrzH7pkVtVdq3iub9BK7aTERPVUFYRZ6fwKAZ5SVydVEz3nC3bXGAYBxAuscH1CLQaq3auHNXK",
  "key45": "YL6Bx7b6HqFYx8TZCNpMJkAh1PdL8TCWe1bjx9asXX6vQ5c8iNMHe4seepsRFevSXyTiCmTpLvoRrxakEr4zEeL"
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
