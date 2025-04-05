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
    "5M7qmC1X1A6iG2spTxaRuGfSzmhn5uWoaMaHvr4sncuFw8kt5uunXNP3ZqRaaeev3xaXQtSpEySdRic7QVB5KNqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Azpr9MBYDwBEtkXLWUGG2NuH7kLrhZbkDi4wHZANXse1Y1uaB4rWMxRK8FPKArakx6Kth6rK4DyJNHwBxiMa1Xw",
  "key1": "351DxqWaWqwrGXtt3sG9EDCw1RA58M87fnFKELjNW2EKZx7vdJfn3C4DhtcXGaX2P5W6r8QxbQ9EJcQRFw7x32Di",
  "key2": "5zdaHJvS4s1UnNXrzrPHgUrQ5ShbNVeyNjDLjSLXrXStJFwWBqDwSbmxQN596SYUXDqNpTnDHNC4Trhqp7TpdXsa",
  "key3": "3i42GNgnhriFZcssBcfXMm3aX26CrpWv54fbr9UFitCS1zwpZWdLLepXDe3ndNAo6vMmcV1FUXNuW9wLvwtCPnDN",
  "key4": "YKagrcoR6d3UA4N26bLuAj1cEZddqXC71d9ynQVWrhzfCsZP5H4ZnHKHKtk6hR27zDbVS9oDZZxUbyUWiV72CJ8",
  "key5": "5McbHdsHY6u41BejKS5sDTbRmFeCnNsoA46ZrG4uWRuxrScktXgkswDqQS5en6yosFPzNLBpNp89icuhEiXMs7e6",
  "key6": "4sUp18YGaxide9VToCNi4N266xhD9yQU7AED2XGLQaXVAamroYHcRmWYV8qCeENvM9JTHAcEnDXssLgXW9taktTD",
  "key7": "5U439p1hF9rvPTcytehfUuAskM48QxEPH6oXDiW5sf3cg22cLeNZ3vfQC3HixiatqmH29LjkaoZhaZWFNWBEdtEU",
  "key8": "57AhEsfnaHhpyhQQGD7hrrSpKvcydpS5Cgf6GPLff7j346m1NBZA44p19prWiZSr8uSCN8WHBiPS4yH13dXBea32",
  "key9": "5SrWqdVEYDxAhfCj74rjxWCUmKQbiZV57ESNFVmnxX3NKTWKKiMa18Hcrwi2c8EMfwKz5PEFE7ojkke1iBjhLBMP",
  "key10": "5eXywY65boVmW9UUEZBK8iTVE21p9GhXC18DBKPTfTBvdfdCKrQE63foVZvRFJLW6vG9JteX5VRwiT8mB67RE3E6",
  "key11": "4sysyKSW4ziwJnwq6MfLXPE5HmejHN8GwZ3YTdUz65HG81W9Vzm2YTdQ6jsTVtAi5rPxHZq2eUxPNGyqEjrAbXVw",
  "key12": "65uMzjDMeLq1Aqrnx2t7zKHKQKeEW8tNCwczPeoFzoUSmop7k7yB83ZgHixQQYFsy4X1erXfzCBW7qzknYYajxsQ",
  "key13": "4d4HpuF7DWeGYBCkFq9QdQSA1vA11JpD1Jip1wny29LPdH7mpLSV3KZyFLPxSeSwi15SbrVSug9HfmYGeTEBvb2G",
  "key14": "3qYDwwRWsK3Nmksm19CRCcmE9fi59upzqwo6vfwdDtPbiPFsDRVnrm6WXM7jKXQRpEJK76QNUCZxiS9ZHPV8eR29",
  "key15": "h3uByYWVyi1Ecb2MsTsGhNfuhtbrwnLsZ7Gey5tEi6J1L6b8vjx8o8jJV69Yi4pRA28dWexmWiWwt2YDAjY4van",
  "key16": "2gtJ4BvrosaVza7JJdaR4Q1KfBE6UZRQJZRBVwxfwV8gE59JMZET3LGpXvzCm4SAumB88Evo855pVUr4cQDMd2tz",
  "key17": "2nse6xdR8DBqkwzxeeBsnTvFCUSSGUvfkLAM7XyZHTYD9SkXhu6D1Hk1CqxYNPmspMRhmjqA4MVrC8VKrkjxNivQ",
  "key18": "K7JzZYrMzbBaWc7jZcCjSAhvp2wBWFotYQiUZHeecLViy9iQwZeBxtjXirFzb9PPPbtcbbbRWKNPyhYzfUSFZkL",
  "key19": "tpLF6WNz2ns8GSF1Mx93Ej2ezQRRkyTzctndocf2GzFqwpB5BRjmvBqTYofBJXLymu8ykWEUkRu5WdGxU3qbzAb",
  "key20": "imcNaFaxN9Rw8WQ3vbANPf71v8jbpe5BcfpuUn7iEjjupV251c8r3r2U3hWeHanC8V7vAkdEhFjYKzoS3Fa3ydA",
  "key21": "3UMCPckcZ4qwpmreuQDQGGKRy6wQSMxTfD26kbZsh1TZTtkvzxzyfvQvZTCYxUk9mQktiwcZMD8DXsGJjw8knKEx",
  "key22": "4tE4c5pphTfUfasrd7ogEe33AcoNduWXentEAP9GrNsZBQ7TVUUQvMBgrP26Acg1UQhAvRA82xJviQge7Y4sGkrp",
  "key23": "4mqYXwS6kbVrefqqYQmdEDd3y4kAz1k4qVkQW3GnLzTJQsfwEuZmowcpDUBaUHF7sR893ogq1b2Hgr8SwyVCrDFE",
  "key24": "mNTqWihrKeGsQ2UqLcbx475EMVK124SAjatKnRx4ai34BV4dBjjusUcZDHG62xHpkFHa9phYvSie9NkDdbgynMn",
  "key25": "5zmyc5KUoYx8NwDgsHPmb1dq231grUjaKMEskqKGCXW5936cS8x8G9kYbuUEpnsEBWf3sZjbhdG7j8SZ93MeMPrj",
  "key26": "5QZSrN2JhsTdB4sRq26M6hQvunbEq1AxmhYuudpfaCk65TwCKnt8XSYrbRqcaB775sZhzQBoygV3mZqNMj6fEgSb",
  "key27": "3rufoyGsUCryv5D3iBZM5FsySKmjkHnWjmyQAVUnh4twTKBJGWDqEj6fLG1X3UAVXZRGK3bdWHxrNFCHUW9ho2vM",
  "key28": "5kLQBfY363eDzX1HYdrov7tCa1mdpJeBotVcn4AMb8viLgLvNUFkfWQVotGDxKgoP9TkFH5p6uCKB9aTBKnzciLi",
  "key29": "3nzRpHGaasKbcFp3AoyxKpodCwrvh2myFEc6RAvq23bcJSfcNpGfL7KNzxu5YSGLdyeNavYFUkm8fQnGmTRu9L4M",
  "key30": "BaQGRVTzNU9NYqxFbsTk9kEwFRu7RpnRpjch7mn6aeawjN7rDSS3tsaPyKYeZhp51sFQeoRJoVUfqxTWQ7sNusx",
  "key31": "2Sh1DY4wJwDnc7PzHU1vybkndPok9g4pMhDbAvr2wUvKg5zbxRGJX3nbrfS8aJNyQ1GPSWHrCt4SKdnq9FQQio2G",
  "key32": "58JyodpGgHmtyrDp9nXUQeQULQ1EcEu9XZyiE7XSJ1otnp3u2rz3g7XFNjgUi1J9UxyLRkufQ55rn37igEmppvAu",
  "key33": "3WUy1CG4Uewk1SxknRx4X1v3PeUfmTFhxRR5mxV677M4Xm83xDNGBNcaJgsDAfH3sfb9SeL55njfvf7wQ7zmTmMr"
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
