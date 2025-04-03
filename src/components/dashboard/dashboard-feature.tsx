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
    "5romnTs66h9XCMnr9zo8CiKGkf8USufiJgDKrw2rLjozLHu9UhDs5HkahpsRFm82LN3Q5XrQt7oUjYkd8Pf8g9xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CP3kQCpNpSw4vsBAgGnXsVkRDXm7w4fkQpATosmPimzetJjTgWDsVuVMC4GMy8E4Gw3cKp9yiFF6iSG9oJrCUEZ",
  "key1": "22dr2aq5H7ViTR5J2EY9yPj9RumrDC9fGq7TtDey5fbmzoTFPRY2wggi7bB6kDLAjZAyiQQjJjHa9gHEdavtqvDY",
  "key2": "2SW7XpRnWqh44sqBKxzLurK4KJVcFrgyWps4RzhnNyudzj4LSsynsi3xE7kX2bbRMyVLTqHVbR8jnRYCR8iUVukn",
  "key3": "5rT3rsAB5T7TzNmGi1bEEmS4jMZmdcWgG5xSFc9PmSzFey5azY2RPJ3PeQ7cw12ANVzEeaU2E5i1U8q9Px8z4xxb",
  "key4": "EmgxhhA35UKQRYfUVAtedsgTdCRb9Y8a1EQjZ9HsmyubnHW1s6badq5GDMSWWs2CpSU492jN1HzXMmg2ivozdQr",
  "key5": "4Dd9T14ZNpJPgTURufqCjBT4P7BE2L7uaXSZd72HBFNSNo5qESrhJek94oTYi4ncZyUELyPr11mUxyFeTB6qzdzL",
  "key6": "2zUSCfWBndTLVzu9BywYiXovbATAG2nbDfEyhwPku1dCRDiqeThuQ2BTZVsnrXcVQHaD84ms1Ffpe7r7piLo8Lm3",
  "key7": "5qkB2n83xeUwBTw3jTTaLR2vYbCFkn6oibtDFVqnb5jJbcvSR9DAnmx3BvgqbgQU8FLkrBhkdcxT6KSZDv9b3c9a",
  "key8": "RM2LrssQ9bPgjmswwe7hNFK1xjVakcukLd4iV4Faw4QE6Au5fD2PVTbPxVwxHzg6x8GPHwVmyPNpd49tXfwYURr",
  "key9": "4ejYbzN23HexSuBYLAowjUppPchc5jMn2SL19nBwqdC7VwZJuw8ufrHbpJg7KSDveAbNuE6mcwCeoF42PmVXTD1U",
  "key10": "5RDgGsyMgXyRykJyYgwufumHGqaufrt7HDnoMvKmFwS2ECysfKT6AF3REUhW7XahLH3p2Awwoeeq5t7a9LZYeRdM",
  "key11": "3ARECoYBSwz9ZWrR4YA4D99Xt4KxHcu7pqJ5yAzcC135hiqx1yJz84Qs6pBcAx4BMLCfKN9vRWxD8oauXtB69xpU",
  "key12": "vuUbXT4CFPCRMNAgicSNbE4U5Tj6rNKj3JzPbSE1HSfCPWzk8baEkjSZWeE2Sn2vjMC6B72is2aCitmV7ronaDL",
  "key13": "3PXiMpFzG9cZpdSTHQZWyiH3FFWSGNjcEHtPeEcNr9n8ApaRjtGdcm3rVbCRbWfCqmUduuht5QNiBckWV1cDTen4",
  "key14": "2Me9bJRCtXqt2n3cpV1b3fhbhSd9ENnFBn96vfnMvV94k9wh3Kbp9XMv5NUsGN4ABJVLVq7AUMUoswmLNRLM7uMb",
  "key15": "35b4DaSYsnAE6aPXzmsbaVo4ekRT5qSZkoQSUyN9ebzxfRgKgrSEty7fiUHgWC4HJpC2nCpnKYyPYZWtVHo9PYaS",
  "key16": "B29ap5Bp4JQM7jZLe7fL4KcNWi3W5ritvKExTA68ZbaAiVDoWye2srENKcYv3VyYeVPsBkzubP9h2J9Zc2BCDia",
  "key17": "Jr4BLsyznFdykhodU44shZiNbQ6eyEBToDhVkpGtVPuTjUQst9VeZZ3MH3vAYfWq6mYYLUVEPbkzJay4DFdTp5m",
  "key18": "4WdndwEMiFBGF3bmoreMHwPAdbAWu4YJAPc5TXa3Q8nSe1MTVdUr54Gt8ogbg9sZNc5TeEbb9ebNgGKVQG7qukn9",
  "key19": "48GLtL6Q29K4THVJpwTH5yih23yPJGqzSPDFXLRp2uJNuCNaB7NZjcoHEqD9vpKgz12PixsMDYYyEgqa7EZr7G7D",
  "key20": "ZKUPzm67k7ai4y4K2W4mTaEvtqZJHURVfjcVsRksHDer9LxvFLVWRQfP9j3RtYQYuAuXwdKTVzY9CYWqHWezAMR",
  "key21": "4W17jvX4HnxHh5j9cL7NdXJdFUhWkGYQ4xSKVjXbQ9pj5112DDa8fxtyDozvWJQjQEvtrafNB3CAoiwxChRrV7gy",
  "key22": "4tGwpUButAPKhAMMxoySoEJVvLnzcjnDWnkhWiVDhXZu3eeMQ3Dq5cgyqBEXwYDn3Kse1V5mzeQfCj4PRE3ebeoK",
  "key23": "5LatmyY3qP3rgDJbqBuTVadX2uoXuH4METw6o3PJcVrQVBivqsdcENa9oD2vMrm6PHbqA3SZQuqze54cZdq1MLVN",
  "key24": "53FneL8aF4SYbuknmbaArPZho6tuuK7TimRduGvKtkAk3vXQYWLJcqBuApSCNgt6o9NZmyYbhVG2cVMwJHS6eVnr",
  "key25": "66AjJn2NPpJgbxA1ggdA6ePABbCrKZMv4ANnesZXsRo3xvjK7uVR1qBuYAnMjXFHjrrJXwZRWZtTjGxjfDubMRPB",
  "key26": "27JAWbPaNzExj36hzZLEiWGtttkdxHN8PhXyK6biR93YNzwRej2oZ2wKS6g5ZCgtajWY4MUFnDnyP62HECyHPwhA",
  "key27": "5zBsTxx1XzXPmgf1j25n1L2mcpyrVC6pv2R6cocgytNvzm6nhU5cFJRqaeT3rBj9zZqVC9UufaNtDi2mcndKSjH7",
  "key28": "5ebmBZJmfWn4iLzhDzXNEHnwTQoyLPMo4VgW7pXTLhz1qWLF3CwkiFAAAcV5kKfwrRNLaYZcEe7fecGgapMkR1yy",
  "key29": "hwnEVTCyc77vPnqvb51aSMmqqHdU9WhYfLYeyETRHto3qUtPBsBtdSVWrAFNGitsBpAS1Vg2DTDQyvzHtMn31tR",
  "key30": "5aAK8qVb8HZ7EZ6nqZ6noSbaCzgbEgkemBwRWjYnWLRzFqP5vgUMHeEvABcsDx9gFRdPhhNERbwQXGsHWTZUFwAu",
  "key31": "4bk2oBiyMimgHs3nwsgzU49ndVTxaKUWaDRqCanHuH8skSQtemiML7tFvsEgvn7riXe9MRe1K6JzBLAQa9CPee8R",
  "key32": "4UeeutV7ugwwHkaH6o1q8367BQ5KKRFPpY6gnpFYAfNKFRq49svCwnYSEbY9hr8Rnn3VgJYwSxfPt58Hjb4EjHxE",
  "key33": "2iXJMwGjjFPH8rMMAB6DvXvffXsvA4uo3yKzhEzanuGxF4idNufMXpHoAWijkcX69jDNrbN8eTpuznRvHasXxAeb",
  "key34": "2DKZG8vGDi3VKZEdJRZv64Y6WcUsUCUWoroFydGRrbYyVv6LWZ3PwJYyvk9YD3Am5Ts7ssgz6C6a4RzzMB7KqVpw",
  "key35": "23jB5gT8At5K6fqdZoJo1WW5j6q2YgHSDphimZv6d98kqzT78Ji66WeRF8XVAaZrn2LkAtRwTXJ14XhYJECAEAL8",
  "key36": "4P6VkSerSPRXeu8HgMaftYwdKTX3HbXK8fq8ffpwtW6X8RvYpaU43n8js14sBNUaiMT4akRBd4WTLtSonUHmCeiK",
  "key37": "568RmrdAWwuPDRqGN14wKc5LoU6mhwWeHE2FV3EJE5LGxB88j26vFjA5m3e3H78bZttbno7wdt3c4Tuw53P3f2Sm",
  "key38": "3GaUn1os3GbveHZpuGUxTKRQnmsGZjfgvjvgZR86wVrJE4YsvoJwNENqU4p4ejPQs2J3Q1zVoUXoSTfQ6rRCVHV9",
  "key39": "aTn9tkH9GKrcUv3tpxyYGmHUrMwK847GWMmWoSXdvkA9DRs11FBp956PPNGnq6HE7wj3Z8n3mDyPP1eVi3SbpRj",
  "key40": "33iftRjWJQxtHw6WJpAn9JcsSzsW6br2kzpmwqU6y9oPiifbDiDbiEAQYeJkRPzp4J8zEuh95SKa38TkmSq6PMxS",
  "key41": "5G4jHkXywMAnKN7Qvh9A8CFajJJ9NonFhEYfE3b6ZW6c59DVBkahWjsLfk6R7UxCL15a924uYk3bhjiBYBxH4Nf1",
  "key42": "4TVqMFoS61fQLMNum6A3PABxHEeNADHnqLwpKbJgRuPKJqRfwXxhksUwvcJXUcFbnLFdX46EGdLgAoJXrrwXrpYZ",
  "key43": "4HuKrowaCUd8Y7jiuecxX6haxSPpoJaoW4ERvkoTxjb55dRMfwtwDY2769YJgRAcdMtzbw73zWkK7yWSQTCQYcGa",
  "key44": "1X3fnepgzQtRbFvKtYggSheoVzwonJ3wUbkNn3M2zr6X7JjQA2PTroXioShBvDXZDyT6wqXFU2T4tETAdG6mKZw",
  "key45": "2xN1mENaun3fTPiX9nUzyGew7Uiq11xDZ2JPzLGcnU2aMzxMStvdHYqfNnKxNAkPFbR9o9X7suDJQYLcKMXJUaVR",
  "key46": "WB4SnjTFNpsghumQbwGUMncWuzBaxevGaV43cDtFjH1tyGLZDy9hBfeK89QVtJQTMeugXcY7taiaeFHxLYhSGZu"
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
