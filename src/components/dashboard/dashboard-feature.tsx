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
    "2YrccxdepUMcroEP1BvpH5znNTyeUrijynxpRdq1ohuDimh2RB2tPVvVqffFwYFwB9eFx9ZMkgBcLijgbcncN1rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sFHYXr3chSovoGu457jVL2t5bU35X6kbZ6nup2fmqLXTU3S1CuQRoCwAuZJ2sRxP3GKHzCrJsLgRyu2YSp7hxR",
  "key1": "ZjHJs5Uq4BxgmBV2FQDpnyav816dnHkTvFFeGH59gYH84xszwDZW44QG2hPxA2KdR26kJ3knYn9GEjLtAcsiTsC",
  "key2": "EHAg43qYXdqh5G2cXie4553K4PHPAwX2CgRdZhgYLMoQXrHBYxSCMW14Z6ThxwP7gzhNYquL8n9pZKXhwK2FoJG",
  "key3": "3QnoXaBgXkMhywDhGqxh4p3UkUFJK4ypFFkm9hD61vu1GNXBF9bfP4GCajjwJQihR3yn1gstbRKToAykistU5VMi",
  "key4": "85CPRWxv9CtAfkyep17EFqMhHVkNGpfNiSbYdyuPZCTDgyF1bf97AsX6yqvabQC7scNxUXbo93hoPgdnNJVPShH",
  "key5": "4y8HQb9gRAvJsZQ6TKfFnpnCTMdSaXM7i3gEVEQFNWhoW2oCo7eaBCjJjzi9pivfWTWJBpKkaAoTYAZj6FCoxCku",
  "key6": "5tjWgbLbbgwi8MwfFdkKuR8QkmvaoR5nWShY1nbMsnpt8UJgZ6UBySSodeDrJogJXefR1wDZB2SfWjx2d31QdxfC",
  "key7": "iu7nuFptCCT4cHdDqFxNgUpppf38QH5LtrC5MTeeLjwwMfGn6axZaN7hrvRttDQciUWxqDvKcf7YHj5vgCpw5iP",
  "key8": "2zyhUWtrT9opE5ytbh2uyc5hABD6ZMvwYdpsn48ka9rnbh1Qy5seVuwL68Gmr3gxshuu7fFSm1yh4rDW6ZUWVa3M",
  "key9": "8ApowZHqHH4uDY8jpAC2Ei74gKZLLyYiX3mtqf4vBqyUABVefXVSsrF7JkybAxgJ7aeQh6PQDq6LScsSXta2UKZ",
  "key10": "126NhtNuRMQNgQSVzfUm1UxnvBffUaUjcSDQhzsAmCGL1cGibtBVSS5PGgf4nroZtXdscMdcv83qsNsTUX32ruL",
  "key11": "2wtbasSsPELKugetyx89fhYTnPgNQ3A9CJCfQa9g9WrBkhVWauPJCRRu2ourvZuhLzYiSoc3xjGW1v65RQmkpw28",
  "key12": "5ebNenay6x3233XyrG81Q4RyMBhYBT5ZtNLs6J8gn4SLpsERaRo5ujKGb5S4HXnLax66HBUN4cyj99ueCoVD3GXd",
  "key13": "2D3ihDyaUSQCoR2KLBPLrLyWgH1QueWwT4nvprxapfd8oPmQnKNMrSV1Kby77SBG7RJSymowvZ12sqBEjQUHTdRn",
  "key14": "5ZUXyeGpDbLEZwgvGrMJLagL1q84EXdzD7ivdF3JAS2qsrE9PLxooKvjX1ZtYQNLCHoXS5DFp4g8tE8x4epZsFY4",
  "key15": "2RcJR7zCAQ4HyFk2Z4ypFmY1ANNxdAtnmQemgjaCGZ2VJW9ShgQJecKPuKfnnamToiaWPKSsgDMFtuGnQGziCHiy",
  "key16": "3nm17H1FUzoF2gjJZtQ1SEe3CCD3CJtvk1GydWP8cAMuoeCyvhNRcX8w3EgRns3CiMBM6NERGyxfrKT2zWgwu3nc",
  "key17": "5BXT6aJjEnwKJy7sYstSwCpmuM9CRoZbxZT8fM6XRHtzt1DuRAeresPALhFCxWxVbtooS1iRS8qDA8LpxHHjnpx1",
  "key18": "2Cc3pmTWnXQVdD1vd51AeVE2e9dxuzWwe5rXv16udV97V4hxthjnQjSiAVRvGjJPnAa5E94VSJnBLYA22z4kT4cM",
  "key19": "5PEAoavtr4ngG8ZcvMjRiKaEhec9ooqwLavPsU3evqfn1YtD5VWpHGfDTL9b4CovHE9apksJfvjCufVsfxQdqxxk",
  "key20": "3gxzsrRuETe6pQeyxVmcBGEYjqVsZcP8uECcf88h7bEeWeBM6Y47bT3i4UW7D1yKZMXdXu26EkU1TN2qmUb7XSkU",
  "key21": "4sKv15gU32JNhZ7t2yPHMpins3fEYjNjythJVUpp2MaeV5uQuTKS4TKnT6V2QRGhJunsBMDsAHrzs8dMB8RTfNAE",
  "key22": "2953niGknqJvs1JVqxhYNQL6DGj7SbRVw2a1iPGQmS76dqcgknf4QRe9tL1dehmPzQo3AzaLS4ZAuqguL4AP41Ff",
  "key23": "4J22m551LKJuMeZen7e9By4YRBjtjcWX3fjSXj1Wnx8tCqZvgRgMiLFZThGDDXGo1fQ9dbYoKkz4n8EauGSmn1Jv",
  "key24": "3Rmgc5k4ZwbgCLBMB8xfaq8rAfGhNQn7h6Cg4ZtXBTGLRaUc7dpfkbGNVWsqMFhjKZS6TLdqXCPkULdx51yMgpXJ",
  "key25": "4BCmCkb6oooJsy4vQ3MpvYE4G9GhzXG6RcgbR5aKRD9DU9hzxkqwVvxpsWSJENkP5hDX4VxwyxpAupyadEuPAdEd",
  "key26": "2EADFkJr6nMnTvtLjcbU7gK8pd96PFJC43De7Y9BQ2VbATCT8w1BjQWRdCdLqcYagn75mecKcrL1vjrjgzDb2Qo1",
  "key27": "2pmHN41T1WFB52iiM4unJ9px1UeXhRqPVYbU5aMenNS4qJmtRSmtZSWw1mp8uqXyCnQy6eBRa6vpidZRhdrExGZR",
  "key28": "55eyLYX7j5h4xmZmHTZpWu1qVQUeGkLjoTxX5oNFd1dEvBA1pwLTTBSucPp1QejFMZ4TMnMhRpxNXqBNqzgoYaue",
  "key29": "5WVtCouT7aVSHwp2GpyirTpyUQaG1MiaGTtzCDesTCmQDzrsbLjNUvkacjFV7FjtCWdT5gSjYVGK4fa1E7TL1rSa",
  "key30": "57D9xLvwBDGr3tp26u37vp9TBoZaajdZf2ywD9sjToPbKg2Tzdef2D7iajXRbALDL9jeJ1qtGGWGsv18sgY7F2Qe",
  "key31": "4vqi6RYGbFgE9rqANxdoymp2Lg8TXUPrL7RHY3gju3UE6DbNKePLGW1cspczaF1gcBqm8SFRrMe6ud4KiKSwAKvN"
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
