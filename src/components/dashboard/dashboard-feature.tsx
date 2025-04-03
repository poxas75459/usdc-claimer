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
    "iBMFDvTfqowZT8Bx7DQemnux2xW1iFW7EzLPQCiS7ANAUdKQokM8Uf5zgYrB1YhRin6GjN2AJga7TtcnmKxvsDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDaVnUWSd3MN85zH6SPJ5ogkSn5VgZXn5c1jWYEJxWt5pPmeEi9nHT57iNmTQJMzBDMjxk2SPx5Ua7zTLS1gi6y",
  "key1": "5az98ynJQwnNJMZTZvKN42jEKhpTfehThSPjsL9iCWAbQ61sPLDfzr7DjH7faFWgsdmAea9KNQ66J2aL5tVycTde",
  "key2": "3z6YPNoXysbGYL685Vv15J2ZUs8e4xQgvE1MBSrRCjRSegfxm2oYova3s4Kze2Dje9PfoZWDTPHv9JbdajyGN63a",
  "key3": "4D7YjN75GDojpMpJ6WJYQo1yhQdn1qsyFmMUtUaWPX2NuCdQ3subeGMcD1JCk38WAwwzo2QSK5KXdUmEbyi9dEgK",
  "key4": "4pMktohRchMgcCffQLd1qs59t1EL33xTnu9Wa54Ehq49ouBYjvkTEdqUSfXDoPN9nAo4VZ7KB2p5Wsjv5dSUuvwT",
  "key5": "3oRqJLR7KhLpLqz1ddhY8XRcoRnjcCdhykNu7EkjX2zkW5PtqoPhSzcBhv8iDMJGnFMXCcWkqpLituzkSLTDCqE7",
  "key6": "2iPgRG9U6KL2rUDvLDKjUkYxTNP8LHz6HNj5sVqJGKbddjhkPQPaKMsoHPWbrMwk3KQjDxryAu4GkVMg9nTaKAzb",
  "key7": "3ppwCFpZ4wGy4kfmHmNnLNV3TP5mWYHL6Ys6gtKLAFc69FnotSLZumHJ9Kq3rqEMYza3k6tJfqrHA2fwjFhukUfg",
  "key8": "2UdcNvpWaqtmMeq5DkHUTYP957oXcTDamXeFLrSijNfdzu8M18TEzZTtuZnxGMTSzyafFcohvSyk5Vmdtbg47Tac",
  "key9": "w533g4JqcrbLYMVKv5JkrT66YEHEjVpt4pmEBcXpE2ngKYk6T97TaH5S3fvnWfvf2ncfe3H4rT6jGMkRfyPqknc",
  "key10": "keTa6etmRdDEL9yxVH3tZG9ApweeRG887wG44DHBN446HGNGJ8G1vYsfqKfLAQC2zfjQGfjFVCRTpJAzc23Hxri",
  "key11": "Uy29Gj3L8GaXXUuuDF96uxP8oTT7TScRGrKzHWAmwocvhW4qwnaWrWTb4QxH6EVPwsgjofXTDNf91mEGN1sidNe",
  "key12": "5DnjNitVpub8qtzHibPamy2d5noxYaLAd1FHaoPi8STRDReqZC4iFUaoV8Q7mMykysXEWZ4qkGr6KTMDa1DKm7WF",
  "key13": "pcog2DxpoVVyV9GiRPHD3fGfhDXRUeQMwbNS5Fk8jm8cwu37W9dtXucFs82FyQJFv6LyAYL6fijqBSDpnyYswGt",
  "key14": "5xwKX4i5Si5jidkTN3m6uoFNCpt4PEmeFkYT5p1FkRC6JFnBNuhQpB3YL5BmqQmy4xLhU674u4WY6PYyWrUsq8Ay",
  "key15": "72t6ReWZfiwokP4ngFReyhiuVshX2KVQFudXfPx9cLaPPabQUuzUcZDAWad5nPgYxmsDCMBwYDjXrdyXWS8GyNi",
  "key16": "4oozr7mzGfGVLfeQeahJBUrNpNP5cKQGgPFr8JhXVaY93538YqkVMEn4hJc21hMoFG8VDbwiPwFeTTKkNWGP23VN",
  "key17": "3C18HUb7WKTYydWZnNy9ikxHpKmeJmPYvK3qFcsYQ9A8jcQUUg9vHcGuhzFuSo3rxtTYy2MTb42WjuLypbAes9ZQ",
  "key18": "AyWdgFxFCadUoUYhdE1tFXk7pXj8ydU2RFCwND5HQFxfNwqmTCfaZ6kDQMW5cKX9hjdvqgSVY7fpr4EqxPRPza2",
  "key19": "2UQfYZWAV7WikPU97QCbGLr5phm4JnLzzzryNuiQ5zgDBr1X7WUgsYc7FymmYF1eTLWQagYufTQS9ucPcMqZxBRF",
  "key20": "5tqUTJpPNUETfR8RJHUevX23eLRy84LwjUKJU534TjffTaakC5tK2cNYmcFpSHJwpobs7FUNb4WiMpytXN4h2xyQ",
  "key21": "4YkqYVbGsoSeAe3Ttwv1aqKNQQ95cwWwYU3z2c399zw24Tk2fXcPuZwPTbJwCDZHzAFeQYk9NLUWQDzsqScj9ygB",
  "key22": "2mDXo5YCHV3ReHjU2texJiRPqdKWt2X3GeUtvvqahEL1tHAwUDboYa8SJaTuFJRrZJPmeWC75Bn9KFb5xQG2TwZC",
  "key23": "42YB2CPVGaVCSux3ti7HAQJNQTXEFpDkieRdrKwnNqbpQxBH2daa4BhwYogdEdjrk8EKGnu5cMP8QSc6K8Asdper",
  "key24": "2X5NZghGaueJRRmbwp6KRPE8p2XHkD1xYszqv2dDgVDcE7JLsWxAxyfUqJaJ2qYxn42GmbABSX4iiMBvuYXm5Due",
  "key25": "2L6MBhSPiJvNJkhCwZ9XkuVvPD9FA8j3UNCLevQohf3xnMxdHsmdtxxDQerBANJVUQRGg1SJMRPwCG7RtS8s2Rco",
  "key26": "2f6ZG5ZeGnqUMoQfSyu4KEtf1Aw6dz6QUsJi3UjgqVvAUtBKzib6h55wxbgJk1uGjXZd2pU5TWQDmQ1VydPpnPPL",
  "key27": "5xSFjeBVhfEzFHMCHydhqm9uTEJszDMkxokDfJxYLwqUkuoWQk9NAB8GorCFUTFP4LrQYDonZyMoizNFYHTz6F2U",
  "key28": "5K4wutFrLd1zNvdj1U46S5hSNRnH1PGUxzXntg2cGAFpvrgRCLhhcimxDKrxP9tk2PBCKR8kwZAQ4JfBVGkrprS",
  "key29": "59mgHs2HEjgbLN5fGbrKaCdejU2fwfcNHVLEh6eq4cuhPPx9tJ2DectSVBCXFd6XhnLq7Gdq9YJxnvWv9WSgvKfU",
  "key30": "5epDdzurMJnEAmgrr17saKsvhwQYQXA2Wu6XYCAQgeUipcVnVcGKKHDNdQKRqt4wfi8LF9zv3VELsTTAnAs8aHL4"
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
