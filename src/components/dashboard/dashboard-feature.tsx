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
    "U4o7X3stAXk9xvazavsyTyUhdM7ZaSVS3QpYAT6WS3DGCHYVnqjfy5UGHeJrDvAEBMyqJNoq5v4zRRymZ7bwoXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zV3qBX7kcE4rgV6Knx6jisVs12g8Dfks2Wfe44c61e7mAUpwz3QhMm81nznzhKLZ3AjJogDkMgB8nfZGCb3pNHQ",
  "key1": "2EKzjeRwmZQ7Ub1ZTgjMvD9YtuaZfXQHVy32s3DG5LjqMUsvQ6dzttW4Nj9pHBwPacY9LgDp5srE1ya2quMQfuQM",
  "key2": "DTtpdXdxmcMScTfnTJ8napQdg8heR1PWMnskxWQiq1nM3UAY2rkQkHKBmzc83cN439wxzBdm5nfNGfMWx9cny2y",
  "key3": "3zUH1pY6j9LgBEoiaa3gzo4NTtCsXNMUz2dh6QsvMppqJYdxV5GiKeFo3NFsVUSpdprHMZ1Arn9B22pTdjpc4C9m",
  "key4": "Doprq6Yead3jHumWFQZBc69rnTBDhUr5bVLtkxgocMM2RaqqXmwxUiL7nUMeEiVeopEfQN9UQ2o6QgKbVSuKpMt",
  "key5": "4tfcB2imyxhRUtBEQ6r4KnpbnaZYXd93jg5wWjzS9ti3PjvP55AwhTzGMNc39HDa3opgWd7Meh2X5ZuJ25rL4HBS",
  "key6": "3E481xP9dN5k1tNGiMjSoVujD9i8u7tfNkbQAz76FoUUjxghrvUxhaQc93emH6hWfY8uTJ7We7gBqdtKzN3cV7Dr",
  "key7": "3Y3uDWcgTYx937Rp6fhk7SYpUJZpTE5Yk23SnvPov47Fo9VeEibzT8p87PAHKgdUZD1wuVkomiNBYyWnuWtgwWMy",
  "key8": "4ufyu3LoRuwPGw8JdGMYkaQm2r3dSSi9AM1WoYdns2Lwr5WMJhrU3XmxY1cw8bJaX3oXZz7WKoP29c8t2Cwd2w2H",
  "key9": "2CjbPes7LCkqDti5FPPjCzkQvVeMtPHNVyrvgF9ar65323SugD4E9KnanKDm2ADMaKBpsdPGZ4JdvtfnBAMTKMin",
  "key10": "3hgwJVSnNRtnLQJEA99qjsmzdoxKZToTBkdtbFVfFm88Uhn67AfJXsXXFkAvUopQVoPERuyPMpXckAm8w14hULL6",
  "key11": "4P89qLqWCGfgQg42FZAN98i7ngaDaT66L88g5FWwPfDmbz9QviyC1TD82q5x7cPUapn8rqRRmYc9amyhNchk4hV3",
  "key12": "3aKwvXyw3WqWsQ8GCiENWQzW9JngXU1vsj8ejXYj5aKmMAR21vvG6ijk5R5C8KYzcEfJXt7BmEa2ToVRBkHaHmme",
  "key13": "2SXFSjJvAjYWU86ubyxX5UtgTEPZ5W5yZs6Kq13oZdBxgXapBnSY299vQsgsZCpeZWm12jhdBq4gQC2awEpxdWLG",
  "key14": "2F6CPq6EwttYvHUWh25psVcSZbGh6iaGMrZXKAkE6FjcUVRvdh5Y3kpAootgVtzzLE364fivzidzedwTMskhHLUA",
  "key15": "51hzi9Avo5WahwwZ8eKKtvdL9Nxjo2ciamaTK79vwsrF1ptEcwTTTMX99TetV9sYmFjxPM2sw6S6BLTAj8YqmVDx",
  "key16": "kZ1MgyGjPMnFtnFU3jY3vkpFd1LgePtPXXNZykZeihgHTNzTnYDC63hjG4faGgj2zP9H2ehhcCgnYvUFhzqKphx",
  "key17": "3RA4NWcETnfcHWkaXZWaFkNN9yrYpcRvPTRQdUYi7JV7PDSYS5MfwS6dk8Q7c4dnBMxvQB72UyMCNjiPJGa5dJkX",
  "key18": "4scjgLC4H6AajaQfac6f5KRSFPpjWY3o7kBgAk5R4ShvjXUY6VBeJUvqja8sxDPRxQDssbatCWi7iRzMwcsk7gNQ",
  "key19": "3T4bHDvQ4Gq1kbgLWktq6ca9L9HnzkZEPrpnHPTJarRhwUXcX6PS3jHib6bb9x9X4SLsHFeAVjM5ya6PXsYb1kvE",
  "key20": "38guokACJ9m5ZWrG5iayZthJuZKiXBJgc8iaGJzC7YqBcKJyhqvjWtj2enCCGZQQq3gqaUrqTNHKot4qzR5U98h",
  "key21": "4hQfGY23UPdWLfrSo4BGUSUWdV9ad64UUYRfPWxY9S3qvoHpVnmoJWHiLUPr6x64N7UzrRnd6TxCQ2oASYt9do2A",
  "key22": "2mNSvgenfRML8HphQkaGZWsJzrnegqwNA7nSNCtXTJh9EXYdS8hTJ1Mk3ZGh2vprchaiYHYDW6RxRJXjWktsJkez",
  "key23": "28Dzo2gbkgcM1W8ip3gxKN9oZC9CLYvFv6kzaynanXpuym3v7YH6HhDsQfKptajStpQSmv5eFjC2mvcmmhXbzbcF",
  "key24": "3ZwddUuotNmE2AgTJ8n1Jgku4Ra2pTbmYw3fr5eqgKan7ymreo6hbDZVN1aAAkiWpzct9w6CYSXSbcnufLHGPQa2",
  "key25": "Grz3LGutcgQAvJesnmYXDm2TD4NU7osXbLm6UzTHj6k7zgLGwKqiwsq7vfQ1GF6x12XRhABzfGWt4pjSbaoirFp",
  "key26": "cL9iZvuWWFBvdzwdfgNNF6mvviNZqqW1xBpsbyiztQ6qX2f8kyEfRkY5v3BtnhxEksPUxpQJPEoTaMAZeoo23uB",
  "key27": "4WNxAEKUg5sCT6oK97bW9M5rwY9iwF5KKcgSBvFWCcPrm2BbPkutDDeiNa83LnAtRCYHwtg6gmoWMxhnDXCCbFxA",
  "key28": "5jVjPVS2iqeeFYSnXwryGdrJZQ8A8HRPrBHArzXTBenzgRCmiJCTwRP3cuqMAw1bQdecgfYGiFkowpR8M6FDbeF1",
  "key29": "2PDzTZwcPYRuNxZBbCLGR9AS6VcaFX83YTkSWq9uc4QV7yqHPJFWWQWDB3e6oXpLe7TFVaepUpQbtwwNLsoLiHsw",
  "key30": "28X6wPuxKcD86tb45PDQW3i5GXhPgQ5w8an74kwm9Hr99eku2QJEDoDghHMK1GbQcMkwEqCnbCYLc6ZBh7wKXGyC",
  "key31": "p82YSBXPUbJLTYvweENzfpmjo2NXx7vHKZxPiXghRr1RhQ8UoWvWYUsWo3fvqoK4WugxTA4TvDibS49L7WPHPot",
  "key32": "4dFpSrGZtqG5yE8xa4ZuhuuSE9kbuMULesz5hCbSd8B8E8BHfXB9XCjAEaagXqvjQpb5zEQ16mKqgbucT64sJaxk",
  "key33": "3chGp1E5Evdv4BndsKSyrmvkcsFBCdBY4aDKPN2Q2mfEDmZBsQfXky7z5WGS8Z78BUrQSyFrqarC4J4o8SQV589p",
  "key34": "4CHa3M3pARL8WttCVPBvAcwjZWBo1Q4mRrYxQD8GbXoAtscBUPqJTx7P8x631iwmdUvt1iDeU9vmz9oP1ytgrPWs",
  "key35": "3kngmq6zLLyGCExYBo6D6LV2oYyacdHjqGnhvF3EgHB1qRQWdHryJjQhAEQgKc5zEs74kTjFME6BcWKfqhSQVP5p",
  "key36": "5JJNLM8d7bDy1MDHa4GT9y98pMB8r2XuzwEHTRAQi8YsfcAvL8BXCV4nyYN2ka1Bo4YMfiUYxkQrQjFhPqkii15p",
  "key37": "2JkhChHHa2zzqQN8ooMrb2XkpAweyuqgNKTz4uYJBJbVraCvki5s1A1ScJxLdeSkrj5dKk5eAhZLCQLUur1SwLzG",
  "key38": "3otttDnZ84ctTKCgsLKdUY41saezE5URZ666pzz8pHr5xkjVTk4BmXp3cNiScbGZpP4HNr5FGDxgATtNG7gnrzwQ",
  "key39": "5QneS15QGAshNJtyvJjqPvMeUoL57angoKvZtgn8GfkCvJYT6sQGSSkUdAWtHLnqRu5mWhaXXGP78TohMdHbiLBS",
  "key40": "5Y2cXw4XCEMKdXNCTm8wd1DCW37MBVnEGnxUnpQQQVvouUAzVtk35kx2iSk4e1wEq3TkjiXpmcuLQ6Qr7fFpAM7g",
  "key41": "5SAJ2dmQfYjVTDomPHMX6yoaW68froC3PJfZugCFRpRy27u7pnJKJT1QiSAePdQcoVnUgdsqDVxtLJp57bQL9kP2",
  "key42": "4DAvzPWMoAztzM6UuwVgH19a7ZVpomrGRPP4UnTQjfeaVQCj7p5imzKHTFWpKkhM1r693yaWm5EqZ8cWTYKUZ8XH",
  "key43": "3W6RYHvcYNxJM8nCUucNNumivmuZCFJr4rdqmm883YxTw1XKA5BSDaJPf6a9pmmifRRq7hL2jAuUe42fdkGWEfGg",
  "key44": "2onu6XnWGttDX5Tcfh2pnv9Xsk5m3bA2k8b4WUYTNVUPdTeFurSm59U33bxNFaYu3Luixudic8X3qrijqF28w2C",
  "key45": "64Na7AX9Hj61UVgqh49rdQKRnoZKAh1upzRaUYd9ey5AiEnRGhYHGxdaWAesbjHNdMpE6qong8FkPvJsqUJcjzEs",
  "key46": "28KLqhCKchxKdPac58GnmZcwvZWrtUqNR6bAUMHHhdaJGyo4wSLQTxoxppZptZt9N5hC9akNKicdsKmhAd3jbaXB",
  "key47": "6iskS6xEPXmbkj8G3h94arSwLakbaShPei6NPib3gHJueSHSKU1RPXzxssKKjvwKoJ8Q3WdcdiCZPaMk8wieoZx",
  "key48": "2482FRmEkpV3Ud3o7DVinzNJMy4YTJLKbaHtd7kau2Sx92aS8UcF6CSY5Z8veB3g2X56RqyFFNLabRMwZXfb9YBx",
  "key49": "59RUKn3XAmhquEkuAuDtCMpGtANK94TrcJ9pCGEDptgJZfdz9c43dN6JkEcueL8SNzNkxbALGWG5FvKPMe4BbmsB"
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
