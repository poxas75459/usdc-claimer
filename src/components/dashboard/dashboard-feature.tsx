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
    "ToN9FDLFKCX5zCrS9JkTUxNSsc7WsyezcXA4PsS9XNCaStqkA14mUNtYJxU3ACWE69A4jBoScLbmBoTkzpqGkvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQpDZf1aASbeTqtc9eKduLby6Pb5v1nFbJWsb3Jdp6yGLFg9jZv8UiKgSgfCoLNJLj4mNekR9nGoXXJ4ykTCocX",
  "key1": "5t5WJPxZESoJXqmE49RTLBvbJwkpKmJS6wWbV33UNouGoedspJ7wjAWWnqGw4htNx9YuSmRZC6v14yk9v8qXBs9F",
  "key2": "2ZZw4xNGy8ej4JC2dzzmh4u7cVLT2t2Shfq7Z2nyNpDf1csXAx81YcyRHUYGuV9hxDdSxMuHgxzj4L5jbJrR2d2N",
  "key3": "3d5iB47S244u1wwQZnvKSf1jHhm7ugTFvSwSfR7ArhQXUV58ZZ1EmJ2L7gBFAhAUGSSo2JNDxQsfZKX8d7QhQRwC",
  "key4": "pQpXMSsR6UxwfdQNcXK1VDRjxYQV7rVxmYtBjiApJFBKBdB6akmavoFxdfeTwJ4BUwTfpGCffGmpbMkxCG1ZYoP",
  "key5": "oSyaCWnqGfYbRzCRRacqiRJurbz2EbaDwXhrpHE7vhB24DPjn1N3yxHSpN6YpLvku7hYJYnakaRESvgRAbgT8r3",
  "key6": "5oA51oJPw31kBvBVRrSbjw9MA73P434PzcUNGunTg5cBU2CBp9Y9SaHFcaKLASykNVg1oxYg79coACDrqSJLKtYa",
  "key7": "2R31J5UJ2aJdUxPyQzM3qXVtZkf9EdannSFfrQnLY9HLwhSLKcJYMLPbxWTRPMZqpaDbmXUYn4tUWY2mePaPtZLm",
  "key8": "3jgbJZrKP5eTjMbr4VWk5oBwcxJjG3RxKg79VF4aLKnGoF887P6CSVWLJLEH5mjSbnWaDEExMpeUsyQaAgND1Shi",
  "key9": "4oM5uDPDccV4kyfxRkYyzGDRDCtx638uHVbAU8WAAFcUNZ2ftK5UnqpdWfXNTAJuDp8uYRjSkiFKeE8dm2zuXxCy",
  "key10": "25RnXKefafENHCc6LhXPiJ8JkaShneSqrtHs4C7Dy1NEt4pCzfHXUw72s6bA9kN5CcS9X9C8mnmCcTto8deVYG86",
  "key11": "4BU49eqRSJuUk656unsuVagB3e9SAkxi6JAQsA3nLX6LmUoBBenv1Dt93EMVAvTjweFYb5RPb8tN3wZgesMcj5Yw",
  "key12": "53QdT535GVuqSoDPocGvGz8M178XVWfRva2Ekwofgd3YT7EaLSKuxSz8KRfAG5uYBDDnK8PzinWMxcskRMsAkMwH",
  "key13": "8FSHrUV4wUMBdxkpQEijU7E5wMAf4mcBECrGRKyHjnsYLSZrKs4896hoCb6PxqHxoNYg2NrjfR3wTBWQUY94YLr",
  "key14": "4nBkhFqXn3ZSUhDUEJXJrudkRTsy9jSHa2oUFNbZkVCgn3t4y739GarJZyKkLpsNnyWfzPmfuhyDr5xU78Y67QLX",
  "key15": "NJYYLLvfAxQgh8xYyprTQVBFGXopiyxuJgCDXbQRxMYjLJ9wV4nythK3H14m6fca9LcFdV4jKWPRUFnAY9e7oAX",
  "key16": "5HmJjSrmy91YnhpXMEpzsUXv33fFuTW4U7xRCAUfMqUFKWdMXRQ7rpfvfYHL8fNn8zzwhDPXDmKdGWaRbkLfWSHq",
  "key17": "DzexLmqSmKwB621kKumSvK85pUzHmq356zxJrQ5cWbykiN9Cu5cMK9TdWQ3LGfkS3jqbTdkcBuj7oFRbxbdHS2v",
  "key18": "3u79FtVdgpJ1zd8dAUDjPpwmt17oWpjHxhsi7UrdfPfoATrufbP6Lhi7HgEnRTqNzZ74hNnU6Vned7nEFu7NvZtR",
  "key19": "62BuKzQCP8vcsUFHqRyTpqpaVLqDPyySgtrhesqPTDNwfUmoLJhCefg9whNzEwinK8hs1cF7f8sRUvjbTm48Fn6a",
  "key20": "5J2p7cr4rcxQ7bD76JHKza5EMLV63XNwkhJoorjGgyK4mbthtSmKywLs6RvhFaXMZcJon37L8zA7gLfaZq7kkyDJ",
  "key21": "26nRoLQLD7XvHanrb4LqtTkw89M1i47YzbLQysBdZN6oXDimVEUTptrpKfRea9g7ThaxVfrSMdkERfdBnsjkTQUG",
  "key22": "5FGVSfunF4BrQLJNgUdsy52Ant7v7dtdxVeH22R5bM5SgSskzhV7ABfgD6XBhpQDRAR3jSRyTDZqZDdRRELAtPg2",
  "key23": "4ZKx98paXtCAdipXL2fhMM97kmNySi2WEZLHCMCDcvLt5BkkCMDaQZcKSRbVuFLvNFj7eYXPaDhWLRXTKMtGA2mb",
  "key24": "2UMBzUFHdA8cG7rSG2mUwzKyVferxB9FFmLwdVZZoZfpZFa5gtgh6qniMqEwu38wRqKmKRLjbCEmHpKzygHJrCWq",
  "key25": "2B89ujya56i8pYGxnwEi73CWcpaXDfjV54HkG8rPXjADrU7FApWQPMBNkSrojSnMRyRN5F4nYDvEDVaAvHC2oTr4",
  "key26": "5HRiiKddp5yvS1NsZ7iYUbmTQPo4e6nbfE6q9GdRjauStcrNE2WD14gjywuFjwrfk7huNk3czxgxzVtMyjLueAcL",
  "key27": "4UwDsiUnVdaAM3zeJ5yb5aF1pkUTAZGZagP7akLPcVjwMZfa4boK4sT8WZgbtvWTEF7bVggbZQRayicEVm5bRUgg",
  "key28": "5Sfoi8Cqqoa6fHX9mHvLykvvYUDut9Q2KFr4dsQSzDCf93ECE8oZD3A7h5BWRGjCtzbWVK5oo9tCVy6AebT2bCPF",
  "key29": "3yJPH7oXSqkLF4iinm2uRDKxwX3fTwUsPYrTVJEVjCajzTEM7JMGux6xf57cfRoFzbAxzQcuC1bZHFnNTjGrhaBu",
  "key30": "2PFLgLevoLY6B4nFArKjNzaBQj2W2WyH93emeq5UH4R2xv7DoeshfEhnvG2yXHVgsygk3zPLhqiXutzgwr83HQie",
  "key31": "3BUWbpo3Xam4SgrmeqPZkWJSvS1VDDhGaZtsAX99ZDyXqfi2wb78WrRutjaFhNk5vSZ7tD8AkVnbEPCxeQ9G8Zdm",
  "key32": "4rHsBy1r7Qp5eCUZZ6j5TVWujD6NnhZJnV25hLLz4hySaA2wgSEaV92S5vWizoMhkFtFMUuyqVGYKbQE5e7Uhhqb",
  "key33": "3UHg4wP1M7sm6fsMFHraVuUEd9GiTL1cy8xZhzYz8qr5qJy5VqGoX8yscaQJYJeExmpCmnrv7FzbW12hiQjW8thA",
  "key34": "53kfNj1X6vEwnu4fVHGAoRcw9zXgdJuUJynkUBUvgiuGfWfa7eENedmdTUhEdsCzN8EgeDVCHw3y7igvS7aHbMX",
  "key35": "62xazDSTGmgFmVr6GLyVX36YTJyAikXQWydKGAV1njrjUqJdVk2G9V7WwsSsk5krbs7nHc6zBeB8wfcBUjfRRzEK",
  "key36": "2z9kjQqD4o41qq1bi5hKTZMwbP8iFE1TAgP4jPkg2NE8mvXdMX5oaPfCuSWNz8aqpVY84DLXuwqgSJFvu3xMDcpG",
  "key37": "3tGxprsDF1YUcSx7JCoEu1qrDTCqYAXt9D7DaWvDyC5cnRzHbjAZTViubM3vbtA35a8zVWRbpcVRn1K8nyJUrpiR",
  "key38": "MPbQc9Go7zPem5iv5typ9rgkeyefeZjG57xM3H8jqgKVouH4P6UzvBqnBbzWBgnq64PdPAtPDB12NjUkGW3uKcx"
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
