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
    "5yyLSt2zuhwf6KWbk4wFMXAYCb1zfEtTFYFqZxY6iX7gw6jYxFJC5bZwysEtnYXJE18iT3TsqQb1sw81a6W1U9Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "351HQE8ycpvAjCu4FJzAFVoCBotgKWUjsJNDefYi2WYBSFJaysKy34piFQqUNEcoRrg3UK1n42JQhFr56pa4xw6A",
  "key1": "5nAfZC6s1wDwE5a52y3tyo5uRYkEM2FCnkVaBHq5mZs5jQA1Mpn3fJJU8gtcBqfBaK5o8aXn4A76bov7o838qmj8",
  "key2": "5qgBuY7UbWUXvteVQX1Dg1SiXiaz351bdEyakb474jFt2eqkknkmYvZBM95uUU6Pzzch3fxyozCUw2g3mUNYJNtQ",
  "key3": "Ub57vhYSFrCQU3J2hMC7Udhstoo22TE26B2N77ajaBgPQL8rayeW8r1zu84JGtcvjavb1S6XggnYtxhqjp4ixY5",
  "key4": "2gP5GB1Z85rwmbNR7vtg9jKwP9fqYTAcavQtrrpccwrxMgeY1hkuwd1N1FZpsonmTmpKJtuA8iHdUhEuHisZs2FF",
  "key5": "4L2WcnujQMtwjTM4jX2iqz4HsdVa8Rz6SX4YVTfzUMjeu1YDTRwJi9XJutoL1Tn62bqqGQCpDCcosbsYds1DMuuW",
  "key6": "QDNrW7HMfd1CM8UN9PSFDTzmKsAManLbxiMashGDQ5bwn5RB5gXXE4cuD7v63qXpntFH4Dagij88rqM1SMkT69T",
  "key7": "28dACcGDasJp5gHLRwAHwjwNZCG7usStFVtKWgN1LBEzZYRorkiKSeuM8FPwQZgcR4NXaGKWqCD2aQvCCLGnCwv2",
  "key8": "3g6AvW9FSHWWj97nFPSp2vNp2U98kgaGgAu6oTjhFiSqeGc8GYKThcUALNoMgQX32n6ohdMmjBmTuji5QvcdhT5G",
  "key9": "2eGXNM2FXwntjMQiWLvqTHto3HV92hMotaEih5buocQrqZqw3zEsCZXvPXUr4PDWLjaPJ9rLSXjdjDD2JyUDrmJg",
  "key10": "2KiPj9gbLKx68kNhEWRzmqS7GVswWDMua6hx8Rh8wbTcsDJG7qSCEw5D2195EzytfeYAHyVSCTxPu6d2tMbbGbLN",
  "key11": "4A1tZXd6RxhzbAt9uHETx1vaJTYorXpPT2T8zRGKFvxc7zKykPD5RxgHj9uifwJiuvQBdwvKegWq28gE3TqmRXY1",
  "key12": "32NjQE1adSXyC15ZcjCmy15kKDx22GDah8x34rfg9FQ1YrSsrGLHj9mQdk2SwPnigNSbaJKAPD9rWvv8y4kuU2hr",
  "key13": "21qYdZaegcuAZRSaFp8bcT2XQtGY8S94o822vrFqJxThWKR99HH8LnYhgEefx67r6rUSDk1LMg2NbJn7sahxAWXr",
  "key14": "48wAZ29dW11TE82QmyTZrJZP6eRFXZF8Gbc1pRa8nUnoMsyMwJX33FQCHGQzPT4gLR2bT7jWUfEgPfcz4pP8ire7",
  "key15": "5H3cbDN6mVQJfaearnmQkqzV8u6mt5D4EHqgRmE9nfbdN2aRnAgei5iL1VbiNdaE14WEbWpkQ3LyLwDL5aQggEjS",
  "key16": "3u8fww5cvZaZ8257qHzrt58jcLZwfV5vzwFfxQBbX4ueGxwp2xvYUc83Q3N5W2BGcRpUa7n19cvsZbsa2UUaDes7",
  "key17": "43WtkcPsnY4cbAYjQHJvhXDnqNxjh3GPykLcfC2zuqbGtyesmCJeRndjouuw9yHoUyTaQ4JxPMq89pNTvj3QnNf6",
  "key18": "4kzJYCAinrakyGvqMw2vkKxv86uguENjyoCeijak8pXWmXXPbTj6MBRMf6ZweTBEHjF1k6pZayvXauDsUcCuEVuQ",
  "key19": "2dLGpRtN5AmsHbpxg5gMVsXNEPNuPCoaktACqHirGZGivsfFNhP4JRR7JYbP3LXRvvZ4X3Na2j3JsrbTp39XxtXA",
  "key20": "3vpvWZdrNpHK5HfHYEVYC3SSb8gXHcC1LpVRhGgrquYLBgXehSCUsmkS9Ai4W5ZbMzsvaXXAf6JqAP8sUx1YUzwS",
  "key21": "3BvRKUFB43gkCX8kfJgpeTaaEUtNFnEJLM8ZZdrATXcgGrtrD9ZD9iBL8fWKro5tg9ndCLqwKNdBBbE3zWN5cxJj",
  "key22": "zRooRQVZBuSAg5iQFAG1TmnD8TBVRH7Hr8ExtRCjZM8BhxBpJEYHfsC32HTbsv3UtkAX17UcfaRgUNwyyENtMFL",
  "key23": "613yNuVsfMh15ViBMyV36JLUs8DnRTPrgFd8GqBtNAxqLepX4pFGdHBEayrYqfjUZmaobYhV3W14tjB7ykfyfmEJ",
  "key24": "2zQuWkdUzkTRRs49vQjenGcwUEBmsDvE8warNd9vhr7XG2fEZ3CVBL2FA4Wjee1dXqUnyFSmKzp5JWU9q2EKfywv",
  "key25": "4bmDarXByoeNHdwtXG4CGoE317ggSjSGLMGVz7KevEkjD9DiDi3UCzDS4kVmUcYFiHhSoSNbgMm6KdNa2NjUDN14",
  "key26": "3uMQtRLFM9WvCbvRGWe3A72uEZNHwqXf2H1Z4eazH5Bf5dRNUh8j4nTfkVAtufNeuAzJhdwx1hr4KzVQ7BC3pHhS",
  "key27": "94qDssMmQ2VJwyeU7wVK7ibsohF9acoQ5MmRVmbpmQfsBsYek4WA4VdpiNx8K9tKxsr4yL9oHg26Pgrz5cbTFUR",
  "key28": "2KoCvd6wkgU36jjVXfgXnj2f2Ef2HhivXoC7boBSL5WNaCB1JYZ2jYv7KHzg3F1GMR72V3gj4VDShyMtZp7LVK3Y",
  "key29": "45W5Q8iw7Qc9ELceeXR9RJcuaWyVKPBxBwmU9NK7LjeqCNUyUgcq4ieiDBfjJaVNRk4biAGvswf9SZ4k4ATy6Ei8",
  "key30": "puFTzFVixsN39rcKKWAtBsKJhZZsj7fHoYuzTn1bYiFWp1c5T4J8Vx2DnHi3AmrtRmot2pH4k4dms4FMbSUgAwS",
  "key31": "2EdFDQZhTtrUdQC1tSCBe2mQur3PNtyMi2s1JHtg7nUc5YMy46dHirrjBY9LCH2foNvuQG6QWSDsedzq56dtjDdw",
  "key32": "AMBnhMUDDxF7wKLQz81C1rPDgN9dXP2Gf3TCcZP7JFwMkvkaKmSzuutzdTH6fbFsNZMSpRJnKtx8vZ8Wjmvkugt",
  "key33": "2fnPUDApxdUW87mR2MGVQcANUsp8BRyeBmwZ2pMxdPRrDbgwTMgox7TqC6sj53ga76SkFAsbn4ks2VUSN6puhpyN",
  "key34": "4Vc4RNZP9aYZ1PwM3ZQW2qjjdbUJtFktn4j652dsXqwwWvZkwRZSh6fZRF2RJrJpGNrJNJwYsAP3PiG6UMYepqVV",
  "key35": "4kzZFFVaPuNFt96NV4C3H3tvF79BAurcRtFvN55TiN2md4hDoyriupAvhzovxiny2pxGz3hb6jDUwWUXPVKDNWMW",
  "key36": "65yc3wZMCn8is5k8Pp1oB9c8Q4S5zLe2vp4DgRPfaVeAKf4jdiaZw9c546nyX6uwR1nr13V1NxVJkY4n6Yu3beKa",
  "key37": "2ifgG3Svg38hzJoBA6mL7DS2WMLnhdt4pwaFx7ARmHzQRFLthN1Z5L7uQQqnMQffM5YEmZGpk5nypR5Y9WSzZWzs",
  "key38": "4oq8xddqdDpfPsgnESyopWAe9NgYEt4rbUWUtbAyCCuyimpqsogVKqytPdqgZfCqFMsWZz3sZseUbRW8hEaLzGi4",
  "key39": "45Wxxcgfoo4vGYKK1wmuKfGgyTpCo6acbYNSW7iHbhABJHF7w4GSwQ5hbGxFyzyfvESLDQs45TdPKUVNWoQtK39"
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
