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
    "5cHRfDYeCoyn4fSe4bR2JSdUy3v12BFvExctvmq3KP4Lr2KmhEZ85nWH2ACuQbda5eCErAH5wLjUq4criGfRmxsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hj8beYFir2BDDv33KzraDxeW37NL4DvdhD3HLmz2qPhk5ULqGF77ZvpF7dWAmx9641Gc6raWnp8Ub1gXwFbUYod",
  "key1": "3mU625UT8DWKC2ddBHnfsDA8wA4LQzbtL5g3J2Xek2gtoFk1yTmnrVEhp4XCudaDhbafHu8QA7TTb3Xcmqknjcqj",
  "key2": "5aLr6smuBm1UxUTDfJvbjfFcEudRSkoR7pn9YFLPnKZHRBVquDkKnddc6qh24MDwzd8fcMq48g1zwtP9oeK7MGMa",
  "key3": "2h2KHK9JcpLRQsoqhAFNBDmCss6gfinDsfc2FHWg41LhF2U7J9vLjudqGwgfGFRMUxPCP4wbMdX7YzUEUHSCjJwo",
  "key4": "5pPQNMqdkiiHRPXQDsDj3HBtsQQzghZSWFMVqbZBh9tQ8roBbz7DNadcLGdxD5BUpwSX1tMt3x1nXYh7SLWLsw1v",
  "key5": "3UY3qeQmAVUf9rWHA68yq2QaC2e6bDTCChmm8ZD1aYmf4j9qvrfRVCUneHqmUf1ubS8Q1HyPM3UxpoGt5pFtcLmm",
  "key6": "x4NfS39rVFtmda5BttgevNjZjpYQG9C2ogqyZgYeQ6mG1rKTfLYTftTQmdGzAwLdBNBtoS6LDAbAWfodJEPcauc",
  "key7": "5ST7z4WZrQBsPcoMEB8S2f32KWgyqhRBGxDwoFahyoFEa4wtY3e7p2Xz4Lv85tAcceL5p5NdnPY5rkdnNBbyqbLk",
  "key8": "2AQdUS9XqXkvJLgsYt3VFMEA2TWSWZM8GLdGp9b1emC34VRhxKffA6zypRafBcFFVaKPHSZbuV1KuRzPsdd9G3Mr",
  "key9": "3hjyiSSSZqf5BbMPEYYc7MFUWCvsnhwT65TvCVUc8SLMfxVxMLMAmRKmTxVyUYDr5gDDC3fv6dLcMMZLQqJGhsX1",
  "key10": "2S88WXAAUUCsDeCXVxtL499wmHhxoL8fUQwcZGJYwYUFGWZHKhzcu1e4z8Vq29XQPbEr9ZUMnjRHD73Kgph6F9tn",
  "key11": "2Q2bebgT2ywRtH77GYGbWNAjp4H7SfYPWyQesTNdbpPABY5XLmtsTqi6zdNXghFkow13UQr8F9NwdQLLGC4jPcTh",
  "key12": "3mSsvqZpZ74GiDCBorqc4Y48V3w3RXyYm18CSUFJqpXaLiTz74j4X2AM16Yi9vzHnDjpdbEicgqxVSZxsnfqe7qB",
  "key13": "4MBh17Kqzx3Kh1E4WrzzZ2wwZxVZNAKAcF6RekQxpYg4UxKY36G2VNHXDkjQyCrvGFg3SdX15kn4cGJHinQ4WXG6",
  "key14": "366TWnRyFtT83Baefe9Y8S6gNLk4hGHj4cNVGMkc6bbbvoHQ429vknSP6zxodBHYZ1q5p5Tss2vdVH8zYyr3YkFv",
  "key15": "4uPuTXsJSs5J6Pa59f19wVVdmi1d5Sx6WtptbQj2J8RVbwDHKFrWcAfA2k3a14bnSA4p24Fqg7ExPXki8VqWgaeo",
  "key16": "3eFQaMbqdCYPp5otkQNbn5YqWEabVyHgSfHkDCVqooLEnG52UHp8UNfpbkNko61rBNMtEnNiG9Qged7XnqukSwTf",
  "key17": "Mrw5b2ZSSeg2H6wc6RtagkNJtiTdbApSatsfC1owH8aTbagy675mA17V9gZBpbFUzDRuHR8uJhpC4T8Jn6fUsJs",
  "key18": "2PpVfWMW7V4sNgVHY2BwNJkfFZfp9iL1k75aZu6xiZzKh1a5yivhKHBicaNJzwX4o2knmCP8dFnMDMnP4RVqyVcf",
  "key19": "5R68vdqsKmNhGTDuYteM15uzhJkzthJKkacoCbaweBMjPPBXRvuu71B7Yu8zbAv4sjjHaAJcUPnkwM5v2iw5D8Qw",
  "key20": "2rFibywp212fwhJc1v2u4NH6xNXNHSU2dncwn3rHfHhEC6am9TkqrN5bQPanprLM4bXBexw1AGwBeawsK36xhkrU",
  "key21": "49eMFYFaizZ3Y2A6kEqutKPKXe2qbkn6hxv3rVhJUQx2ZCNjP6qTnMcHnN3DYNNcJT89FHqLSnP7NhBxJDEcQUVS",
  "key22": "58vVopLYUHtoYUAPMeQLmxJkq7FXwFmBDN2cGSDoM2DzoPPbx7gEd5xEyPHpZxLaaFgJs24u6zx5hvt2guP2idpP",
  "key23": "2UpPNb6zHcPbzdowLM9A7JbcqE4fyowLGdW1XHKSGX5zsKP4Pzu6xs9vfduoStF4idPhsmRFnQoAd6S4XPoWVffA",
  "key24": "em2FDrCtBKBgaiAF8ogLL4Dnmbtpa4m9nFyQL5THg9zzTQdd37gaUd9vfuYoQpc3Z4QM2ZWciA7zaMx4h2wK7FZ",
  "key25": "V3i9pyo1vdsCTaL1SGobFyxANpfGr1vCnntdMpd3R1dUcwbvgJY4h8j9y4JtVyZ7CZpAZJr24hS9CJuNU1JEmYa",
  "key26": "426BNfKEcDXyZ8XckFLQXEtTu9fKHnmb2BpQKa42ZAz4z8Q7QWDxErF3hHpDE22kvHzBDgYQ929jPoCRJTvFUTeX",
  "key27": "2tWJvKWeRk699vV1W7PmA5rR9gZktk4eTgfwK418Q9ejX1mZ21Hb9UnnsCP4yjChZmcywNZjfuC3WhsrxLcm1XAV",
  "key28": "5kptq9rvn4bT65E76BcXcfGomJ3DUq6vnF2zQwa4YDvwd21nQZTxwRhMgeRn4pt3iyHp1mK9rcRQnTGCqjJRJUGF",
  "key29": "4Any24cSs6wYykUuhH7YyiB1rwUxk92xkHdSHBuEv2UTAKL1WMjxoa53XeMiBPFFxVybcrQZ24CEMyTGgQAzpVuZ",
  "key30": "ToxapsFoobzFKpsZ3WVdeY8LMmGS2uRkiMDjSeLA5FyqAQCraZncxiX5APf1LLrsSwjg3fT2C6DxF7YayjTMTzD"
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
