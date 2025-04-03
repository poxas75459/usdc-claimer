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
    "5JnbbMUXR9n9AHLeDZVxge11CabYJgGDkvdALL5TmSJNBf7BLbk4z75BTAsTRgpghjUhbkXi3aFucE1GuQQycRpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVWS1334vgZJrcbKSiv4AZ3fBnAgDHGDjDWmUEUtiBCY3k9E5tzoYQuewsgow6VBPRPjnmMiZU9aq28o8RFje1m",
  "key1": "4z32vd38b6fjoNjVpESz8A3uf1TsdyK6Cowdv8ygRf92JWcaWb6BK5jkCJXBcz7ufFTnaPKfdRLoeN9aiYNf8gKv",
  "key2": "4DJAQZzg5JdTeNGTYw7NFyzeyDX1wmMaB62RychM47kNLC8YnX7z86Sdgprfa6sfjSEjiGzYjq9eEZjM4L7YB73k",
  "key3": "3BDT1MEKsUQB8Gd247JgdZkNyv6a2Gjakmd9SDjfHk3JNiBCfsabq1ssYWK8rAmUWjcuU357F8G5ksxj2YHrfXBw",
  "key4": "5MPauyZY2GwkRw33CXWusJU5xB3RWfeaPYH77BfgWjyw5z8nrHowfw5Rvirhtv1Wj7QZoEdEtUCsKtNmoLVSBSan",
  "key5": "3rFDu5wRu6YiW5zYqSVTgFxAxZDAb6scZtEBa6NUCNxToXTXHnCjNvFzDN8MxUr3UoT8cS8P3R6FNJjeHc5QqFgg",
  "key6": "hi2XeNSEojKQSwKRjNEKmPaLFAdwdNsUcKryxsgoZpnQKbe1fGstT5ot9zS9y22C68Y8Pj1gwHak7mmHPW26z2y",
  "key7": "3jsCJk2A5nxrRDQWwCj1GYuMzfGjZqKC9VfzE8ZqUG2quvi3C8ETwQ1NXrTSQaB3y5NuvoS9VZr1Q2VzMiy6oPmA",
  "key8": "2o1fCvmnReE3KCDg9YqaJGC6YxfNJ8urV89Zvj6tkmPbBEt1KRY8iu67Kdccih2WN3hmvSuuyczoX4cphnaackEz",
  "key9": "b3nUQNYVWk3jParSNjtRGexvos4d3qjnsyJ3ihM9epRRnda4wDvkKHBX6GoudFZLdJXbi81FRzPFCsJ57GPaC9x",
  "key10": "F3Dsxk2Lh9UcabxLi9a7g2rLhVZ3UrjRjXXrPP7Mt9fEMCr72P8t1Bkd4omTXAPDAuHKda6wGJJPtRjrY4j3ues",
  "key11": "5YprPGGu8nqz5otGnrh2YY1AzZAqJLD8jZ2tmXd6b3SeMs8scbJ4fx39vANvfnmKwUXQ3Rxs97aU2u1dvLbZ3RLt",
  "key12": "qdVdQiD3xS2XTrogpWCVy6fYxgqcVoNAiv9CVoZzPBQcco8zoWptboSSfvaxwaaR9WDVyBFDrHqtFxpSrj8GnEX",
  "key13": "4a7W3uNecyANENyXvigPfaUETwF2vGteE6Aykc7pEem9eWHnnVWiBfAw8LV85eDvL3uUXaUgExwFY1YGt9tJpaDT",
  "key14": "2F35LsVKSnAVTxtG9FNcoNdn64YibzZYGREJ1QHG3kjgKE7Uyee3mhH7C9GNhntMRiuaFjvG7cSFPmJcuXXkGxf7",
  "key15": "6czKf1jMCVsYodTC6xtDamKrmhaSBdEUJd4nwKmyaEL6hiBDAkfef5H1pLCruVk8tDbbprTDCo7JAcbwg37EjYk",
  "key16": "3MWAuuD2L8qehff5Qgg6rLLdZhqJ4gDUUsENSsrM6ifCM3YR7ojszsdMkAK3Myriqvur2qVyaJzhmVUgmixB1aJU",
  "key17": "2GB4ih1sGpnp1rCwispkkniGNtWCKmYtugg9Qt7r1ibSjCFh68Asxs2bdgkcS6rCSvhcA67drLnCUc5Vtmey6LA2",
  "key18": "44NwH9CQRmcx6hKAmxDMPgLsYreBd18nhuatPag8YVQX1M4TgKfjfbUibbJnGagNEQjJmitoHdhhDdAKP7qghVYE",
  "key19": "4YR4p25PtoyyU5RyVr28BrEjuFbmz7719soW4JWNZNq4M9Nei5VUcE5HiWGmpcu9K4N2LiAqqCZPS7JadoCA4MQg",
  "key20": "3PdN8B2EHkzw4xpi35KRA9rab4F9AnFRb4heA39zjuW63pE1pddYQ5it9QUPjaPKQmuBUkjescTQS5dpBbSBPNiM",
  "key21": "rqbD9UTgxiK5g11v9mfMojJ1627yxpNSHgjG1n2ogqiFu9xzGxSiiwE8R3mDUtjAuwxzp3bgToBrg1LA2obG7XY",
  "key22": "2Vr35gsa77GHDNi1AiwfPEVfRXFBS7dzZShAmA9FSXPkCCRmG8wEppdmMfT4goAragGEccyP9CvqvUL4eYuEmLox",
  "key23": "2jTv8pwNRXwG3RRMvDc8QQL5Y9KNiyQHfi9xxwDxTT6WSuBmRLvS6fQ4Rc2ZVebG5Jc3EZNmEgVdK3zMpviXmvrD",
  "key24": "k723j2eESZufjWdZryS8Ek2gj2Ljf3RjbvnacmFNbPKLUAySj2ctLwPEaf83Q9tLbWpMcSMmbaXXjetT1CLGx4k",
  "key25": "2rNDa2R4guAdPcyiHXcSJo3yW9JoCpavQod1LUYSAxJJrxNX7DVHe9WM2maTtXU35NEjkSMCGmQCCYQEXr7ZQiSE",
  "key26": "3bbcFDSDVwwxiZkoEqeX7tAuJJQNMrjQyT4NegRoWK6fnAdux2FcnFwNygVF4nTWy2VfjDuWLALDE6HT2NaZvDtD",
  "key27": "244ieCmxxe6DXTLvEHBV3x5QsTTcJjQT4sSjfZxpxpnDtjCyWu9a4T862TnjSK7JFBzv7dNMjp7yw5hgyiaVrtTL",
  "key28": "44ENG3rarMVub6wJPGn9AAkk9c7s73Eu9d7kRi7mWfhRaQZbt48DjDXNJZ4fGNoECerbwXPHiS5pEuAS7vi6TwxM",
  "key29": "21GwypcgGdYasPeiWdPfeHyBgyXYWkGgvTFxnjQxnLdTZ9QCCp9hHbM9JpMEBSNhFAkHFE8wdMRFEbCZLHitnxjy",
  "key30": "2TY34kiNptqcjYDcw1zXdze9womMWTLwYvL5pGwSNV5D2FLvkJNWf2gW8JbuhJgvn3hH2deYnWWh5kjonUUQWyuC",
  "key31": "gmgCbSyisg7AvpymiBWHNrXnC8KBor9HB7bZ8x4HpKWwcPLZsuPG69AqEdm6D6UyWPqvzEVRyDKZoN6mgZ26saK",
  "key32": "57QGepZNrYGY3Em56bnwS7yHkR7hCC29goHN6Ejke8nnHNcJV1oHxkuJRMqzLy1Vw3npFzTNgNqvJqagxSNvKXyG",
  "key33": "4EjvkJxA4wGttuDxMHmYakXzzpFKi4Rgj16gbWTEGTZaQAcvN7QjRhBNPoToxo2da3VzyRgFLPMHFcxnXrfYiW21",
  "key34": "2PEwQHe2zAhfZVX4aajnzN2VK4LZjNS4erDZB6EkmniztZJVZBdPBNKx2kJcEwp13XWZYJqu52d7p9kmA1WcnKxt",
  "key35": "4yWddDbSPArFVswFpKQLs7s2GT4hag6947L5Wg14eyL99au4vW4qECwcCG7RYdUtmLmzDQtSmNhcmdy35jBxee1u",
  "key36": "38bA5V8Hbp9G8QThPDL6Yp5XDSNwsEdtkc3mgbDros7bSbeNVXPajmqoMkeRBJ9m388ctM6sMV3nxTrS1wkeXi1h",
  "key37": "4F4x1dN7XmiHQM77nS4hYtn3Zo72s73pKVbD3Z4pmMPNhtsobdwB6HmtQkRr8d4mdkqUfkruZbiHD32UpBBEKNNQ",
  "key38": "2cCF1B1hgSafD814zdcD8y5n7cMacdTxoiPezFJSYAPeWSmPJnpvjPuCZrZWFMLaXD8YwBhB63TijEWvo4LM3atX",
  "key39": "5rGxs1qYS6RqUT5v2rt1yLaBZfpr2mnupXzCGreB8dS6pKLaufk7dqLqy3sdGoiQxnEsxBqJsq2J4d8uP717hzXM",
  "key40": "Z2pq8LHftUybTQhGc4yvq5D4MwTTQeK7A61PTTt16B9KEC2Ui4KTEg634nrsMone1rSHmknpfL6GsZtP3aE2uQR",
  "key41": "pqAiygrtKKaCWvGWpkt1ASVnvDK4pgA2fLPwXuUFjdG1E6uu832dGGdKRPEkvBt8f1CLcmeLCbiLkFzVCSKPKFL",
  "key42": "25qHokzNrWgn2Ewv8MrukAYBnzk9MDGw9g6A4sW764xWd1jdUV7RnEho5dVBAiPj46ZZzArrK6nj8voruTvo4bRH",
  "key43": "5uT1M1sPrwGRA1VcsPPTXvaSd1auTf4ALLej2zK55omDSrexN3kbzN43kT3hjWjuxKEHdFJhKPx3oawH4eer8sdq"
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
