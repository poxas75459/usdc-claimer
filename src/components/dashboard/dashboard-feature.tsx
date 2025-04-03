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
    "5e1iEC4P3vncPJLaNeraWpM6uhkjcTJ5f8VsBs3U7WZi8khf1HT4CpY7zLrbwfNZBdahgVg52G2pq2SqbDzvzoGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6QtJGcHF1s2UBg4tmrth2GC6rHwZwJhCok4NRuFvBVFsmrxP2cz4CGLWu3m6K5EDHvCMAqVBY15Y8oFBDxtVNk",
  "key1": "3hGRHKAQ8zGJbFcGrx2qkaY3N3j94XiJLe6LYHGvUfQrAEvX8hLmXkPbbBZf74umVp1ewAtyC3yWXrzVW7rGEAWQ",
  "key2": "3jkagPvFXoeVdDgZAR5UnKPiVXN31XtcRW2zLKMESjnNBg75zVvCxpXLKRNdCKrk4bvVEDP7xpRUzV9QMXCtgRGb",
  "key3": "4h9Zqg18LRT3pEFj6J5DyfWK3NH6EZXAaqJuS7VaCpxB19XvTZfic659uT94QRbmTjPLXrNrZxHVWxngQX8VVw6u",
  "key4": "4W8Rhjw7hAmYZMFST4XfWVQoruGbLW8S6FZZQAJCDAL21gYSMrq54cPaP3yPTrHjdGER7kbe2kpDZ4FrTP9sTuTT",
  "key5": "5nhrqHT8mcoWU2w2YuAwGajXLMoyQYkGBq5XiM4qCsfdYwaG7unWXSr2C2F2RfPSuizAA7J8J6qRKsWqoW2NQqyr",
  "key6": "vy6TkrYBS9gjuqxGL3GjL8U6URr3SpaYzBStNRE916QUQRxBSgUUbCpNFWLbBEwsP4W94q7dDoaZzpu9TKhwvUk",
  "key7": "a1QotYb37hQMRYeJmkcfuFvVr2s8WwpYmJ469PfFdJbtddGEjr9HSVzpxtzVgUbsg4nF4qBmu5eBzwHx1TchPx5",
  "key8": "5cQ1zgt1utz9LFjVc1vjdddBLLLjv2DtRMLPdfNznEnk2Dj2D8KyENp1dR4b2k8MfurMkLj78h7CFRxEF2nd6Zj2",
  "key9": "3W2avmsQmSrkQEx9eiKru54EE8JsJybzadsnG8WgiNfziDTUrf4e1WKifCuefR5b7oSnVq2nUi6H1PRqJRSwmy6u",
  "key10": "4qDtinXeNALseSjsJc5QRNTfQj4JLz6Qt75oesVLZ2wiEQgsvpqcDArETdtz9HcpSJwLXKYAEGBcxzpcLGdwCSTR",
  "key11": "63nuQG1oRXzerAtuT7frNMa4KXCjtRC79QtTnsD9iqjLLrc9KZCeUJcd4GUKhwRri2w8PFKoKuKbgc4E7J3At69y",
  "key12": "2Ej7Co4LEs6dhRt6f4WJaDDPwMPrJtMTUcdNSFxhyksofQNSukndTuvLNP9s1DAmQWZfUCfAxYcerYhtkUDaSr5K",
  "key13": "2DKyVag2sw74qxjASXPhzMgh5rwaTxJ98q5Uxw3yj9ZLVJBSWXfA81ycraekb3bSvvA9e2E5nJL1DFFZybPmrsRk",
  "key14": "5iroGxcS8QisxL58uLTZPSJjN5ko2mEJHvq9LgQEnWwJcPx36NrFzdAmbatZScaxjne6KTkkibQ579zono4PirFM",
  "key15": "3kR3V5jxrSo6JAUysvc9QAPc3616eevkgpKjzKNTHgvp7SgEGczX4znsNtCZJcMG1xhfqwNyKSGH77nczgy9CeQJ",
  "key16": "4r86dFH1EGZwHveMi8HqyruEc4g8D2bzxhyZvKR81b6EsmupbpLy1Ky8WmmvuDCqDr1ZAjLhmPzDN8JQzxLuoYKM",
  "key17": "2byirKkky4CfQwt5q3PZoWFPMFh86ad4X6P6WjqdUoRVZ9UrNYV1aX4PeaZ6YoDKiJYyWLtfYi4fBdgBzDp77MhJ",
  "key18": "J4u2WKjCU1dfuYeXpn3fwmEBiicx21ZUACvgTgKN96S9cs5oigi9mdMefCLfDEhnSSdNYFAJJGmFeT6N3L35XuH",
  "key19": "2UuzLSVb8zkPUEEMBu72nqQGwUoXLjmjGxMmx3Bbkxi8TwTP9foZEeWokr4txYAxrnWQhn9MtUNT7ppPruHB1TuD",
  "key20": "5q2f1p5kU57Px9c3Lqs9cgXFJEKY5EmL7bv22Yq9GgkFDkEVPELswvu3pHoQCsejBng6YD5VUv9kGDi3ozusr7cC",
  "key21": "5srMxtLB1GBYc6BAE2cXFxVWiGAJgLoUVT52fVtoBipUw1wsJNsPb2h56E1QTQu3KVNDyoCmoYxVVWZkTeDYSG6m",
  "key22": "UMvLJPicSipqnSBT8Da1nTGPtS4JscHHWePUqowkXko4mwiLNpweFa46pYEVjkuH1kYWjBuv2nEAJiqRKv9WyuD",
  "key23": "3ef3K79Nup8q5CFC6Uw6Y2QQg7viU59HqnMeE8vSJ9gtv6UnyzRBybtpQEDiEmJDwtDUsv4a7QQfMW8uH7CNKsCk",
  "key24": "2ZFUZ82FfvZHE1EntGT3zCTT9f2iL4P3ZX6wejKg5tDx69GuUrVts4RJgC6U5k475oRyiMWsF6QJUr6cvWdc7kpU",
  "key25": "36DGjJTYovXuj8bShZa2pV82PXBKgdx2SKhMMBpeTg8NCnqdCcpKXmbXrwDeo8zXH1MrnDdDjHNk9sHsztEfeMMf",
  "key26": "5eNEEirQKw8asNFsEu3pdF5H6iKRhdedrjoZCSMdYK8wn1TF7YE4Q3AeKBisAfvjundtCUHKaPtp7VidGg7ddYiL",
  "key27": "399462yc3Qiv5Ewv7atya5bxEJ5TRFJDLfs6yLEzaJKEZ3VPvJJavra32hVTeAjmcXf6nPjBBYhrWJWAH9q8TNQA"
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
