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
    "5TxvwcDuUDC4S5NDUYSKwFcUJ1ASNb24qky1YDEZPFaGY1skr9iB3npxsqeLba3wuYufRyz1X2aJm3HsjMdNj1mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwiDQnPL48pTUgWiaaKoBXrD5ur3hJecmiDCaJNKSfxKKPPr2f5XB6MiJJXhXKLbWm8uDJQ3rCBnzeQQMPwAuJP",
  "key1": "2XgftwPJvbu1vk7ssj99FhGT4HXTgFnfUVWncyUT96Jj6CRd9ZLFyN47knE1pPntHzHNYsSzBxiTg6bcFndMxqac",
  "key2": "63ERiCyafShmCzNCY3V6cN5ud7vQ89rVkbN7nixxWGkFRvzgLUxRoXbtiMZPqm7FT1eSdyWj8sEgYLb8UxEwp2hU",
  "key3": "4q2ghMBGyzeVsNAoPBRU9K5PYgirbGcAGgPTRMYH46kVCPQFibDpSnvSP3YM6E2uC5yyFM5W5sUxxp3LKWU6juDE",
  "key4": "56v1wjb6SHht61v1xM9q7C1uhAHTWEp2BEJpNPMjKkD7HLAUeEFkyvmcTnnBajV2eH6sAZiePjjDpBLHokB1hVbd",
  "key5": "3Fwk5RE8nUhgQdS1SsxwYg4j1zRx5ZSFfFAbvnVSCHf6xMc2aRLTaCKkanDACXz3TikEPanCDgFE6BMW8KcrcJSr",
  "key6": "4pdXxBxgXLS9QnYqHb9ZYDvFJuv7Yj548HvBnvd7VdNQgggUcbkKrSMdZaog8gKPSX3j817168JtPoPCGH1u8j92",
  "key7": "Ct1wRntkGbNNuzBq3nVAeu8N4uJdkjraTEYzDPuMrLXtvk93FckDTGEzTEgNUcxSRfNgC5WALraXkFwmookxH3f",
  "key8": "5px479W2MEgTLityHdbNs6yQNJDR62eUc7zuA4yiftCoki9zEzXt4J26UZjVwvXFYCDvkC85R8NuJTBoLaQdfULU",
  "key9": "5kwVS1Wwh5n7GS7S5FziJmjm2ucmbLHrHR9rfCCABpmUDD9M1cSW6YQo343q7XCrzfJgtgUeTYCfY17qdYdzzoLf",
  "key10": "2aqXwPxkNuB3rZn7c32kFtV5odQ8GPCjbzvTHtxo4GpzcAGxBfSHUbaBRvJVd7w8jvdVeUCBPZMjF41Abq1VCTRr",
  "key11": "3rJwiJfUU6NEHr3mCQHZoTMwAdadzxGguJ2FJWUoCUKhVjJXokRgPkNHZ859n5nSzHd1ZNgBLc1w4iCc4zzsyMMA",
  "key12": "3PfRiMC2DqGNYCP74dWmwQxRTc22EBJHTfvTVtSEyP3NrqHbUBsxVeXjSBR3p7gz9RswY5zxemncBgvEMXt1i579",
  "key13": "Ddfjj8qRMuXSRMpUsH5DB5YNAoDvMBDFpK62UdXXHCW7w2aWyztkzcvPB6aGEQTrLpLeFPsbmk8E3Mbho6TpsPG",
  "key14": "43MvBMA1SMehLP2zRJWytBExrkEhgGPQ7REUpUZ7r65K5k665MaqHz1Xei8LRSD7VUSVoyPp7vV3y1fveeXL7Vj5",
  "key15": "EZAeV2E7gz1xBjxCcE9GYDhaYsq2hghNJ15ZXhuCtX96sQLVVLfmmkHaA2dmk5E4FjbyEADyZiERAAy7VrQK4KN",
  "key16": "WfQZdPvumWTdWAobfiWsuF63C1YrurHaTszg7UbxxghSNAmPnyq53WvZtD2FL7qMg1R6zuiWi76fN47DdDt3iXv",
  "key17": "4AM8qexLa83AdhaxugmMZkVKKGb662xFZRGVnNRS1z4Jsez8muKaGCLtTUwYJwzntLAfmy3weUZCt8HXMjHnk3j4",
  "key18": "2y196pmEkY9te7WKNXq6ceeP3QeLwsiV1DDY4hBVsoTgGkRQTj1g1uDyUcemsTc9PVvpXLJhtGRnqzjRK6hwwEbN",
  "key19": "3zkHv86Kk4LaRcAXSZHgj5AFWuZhXA286eVMgM8SaDagpzqmgEoaQvsu7sCBkbpXfx3b8EBotkmCkAtfMvfGjwn5",
  "key20": "38uUNwRu9y2jgNkAwQ4oeaTJWjuDWCVU7nAefPcBBobCLSpmficKyCYqwjwVC2zwMu2sHYtpNxyQqjZ7mPNH91UD",
  "key21": "2B5ZyBKKdenQ7Fkfu5H4B2zaCiXoZ8gm6gRdUxnVPQLCgnmcWkEMBC5UbVSeizKyxwSUT4uTaDHw8C9jCJ1reszp",
  "key22": "3GT44tsW8rQrRwBoxhEebWxjskb3NJ3yaCFrLbtbHfY4SNoUErmqEdBhpFLsBdKuhKm9Xota62gc5vRj8MpAeSJN",
  "key23": "2mSfQwKLWFK8cYdeWQih8KENqg8gNZpCzQRJrU2UZF3NEx4MgxYqHH34S9UcaQNmVBrQrJKKBn9nz9ZKwKN9eY89",
  "key24": "89VzUaxkzHFSY7LSQrrtwuFYUjSSn9uzHM3CuycDd2M1hvkKGTfK5tFnounpcNMDjNgcwwEaTLc7YdV6KefeNyv",
  "key25": "55F6h5ESCgoieaoAKjfgie7gaLbbRcWBxqLLGLLqYMz4YJVR6tcyVK4x8Ex1Xp19aidY4btyBRLFFT7T8JmJEqsW",
  "key26": "48S8qjsnqNUXJtDgVwBC7SycGjyWKqqfeZk9BtSgsvoWJqSBjboBjzUfUfFNqrU2UCti5S3keLVSQBqhYBS36cy3",
  "key27": "5Jc12uY4bgJpiknN7MTxa1EqHX66P6ZCaNE2VG7YAJBNkBd9EKZyuCHRdj7MkAFNMNsRFjbMJ87G2SACmxiMb9GY",
  "key28": "47EZo4xTr6aXzxDAUK9ruSMScmhTNyera6agPErWiBHaSzxMAUWxRte4sJxhmJ65JSoT74dJbdZbYP4orJHQYotW",
  "key29": "3vmiJfxYc33FFcsw4FFvV9StC5EL49otLe59mCayaYCpyj1xUAUycYrGMWDhGr9kY145R45V8PqzHFKBPntgSyoV",
  "key30": "2LvMdahgNfAfjLbqdKHMsmb2zVaCYFJJwiQwoNEPsaHKgC7EmE8hnQEJpmU42cJQQTbrbMJnaBmGEsx36BJKdqj2",
  "key31": "3SwPiD8XucSLzrBJ4ERt6njBwbaNQ4NguxRSJ5DF1N5PHufyxcgVQqQuw8LkMQnwEWWaryBWznMAdGYJdk4SH2Gr"
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
