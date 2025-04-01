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
    "2XxnMjefiXkGW591WjCH7cfRAs78gRDosbGweHJshKkeBRJytQz3J9J2U2HNAa1NrSgBvt2Uj9u3oczyeTjqgxGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggcmqzKBUiWu2MeBS26Y9Vzor6uQSfK7ogeaNYtiydUYoqomLMwkkGCNwXabmTjodZCdJCGFAimtoge2c7Vh3z8",
  "key1": "4SfphQAufeLoWDT4zq1p7GkW8AidfS8dRdEh8tVdctizaFHdRZ1Hy8isnWqS6qa8ZCLPTELM7bpdMpqhvH29CvRK",
  "key2": "5BkqybuFkpEGcHVQTuhLqzFwKLUFcKadf9o2NzN7c1YAJ1ajZfgaa8vjfyfRRsVbVPYmqFA3m5utEQrhXnM1B455",
  "key3": "4ayC1easN12GBboJPinZhZuKWn4bjSrqTwL2gPGm5pT93cGCaJ3b7j7n6hX1L4KmzMt9VdtrujpnLaSNuFeduDUh",
  "key4": "3FMZeRNr1aJjT8r6Fiy24pCrk4YC3wtaXiQtXH1LCerWP3DrXLzva8yHRzxYkswuY6ookAZnFcG61YL1Aca1tVTg",
  "key5": "ED4vZ23EuJwD59Ckef3k2nnotMXCPC1dPnyvwmSaujWcrof5SjKKGWbA4hx7d4KENJ3Gak7rC8kxtJyyWUkPvDt",
  "key6": "3uw1vLJqHGrue4XFjVKtBFcoK5s5SmPLuojc82KurnXRKp5PmyHCXpCx8LhmfKkCcgEvD7bXAAps9K4CeGJP1tW4",
  "key7": "4nuk3w9sKkKbfduhVgAAeGu3vJh8WG4wtSVVPsRw43UFWKpskB9H8AtqFdqJQUKxn1qqxsGi2nE4rjnXbsUs2Q7z",
  "key8": "tePY1w85aELXg1WwDGkRACrYgppYimTw2a4fKCqqN8dJgPPRMfRdrVg7FKjYUTQGhNNy5Ah6mYZfU5DHiBLkg4b",
  "key9": "FVKVMquuqwie2uNPd4XRma1zLU2M3XTGb6tHHPFkvjxdBzZ9jro5vFYQiFm5wKorcLojMhv8YjWvuRgpSP2NvQk",
  "key10": "4EQub4FbCRq26FfZNwQS1BdpCuLi5tZRhs7bwLopvZy8HDTJqv195bV2SLxLn5WgHoSTiRh3DjcJVBDbP9vLzDnh",
  "key11": "3AUozYmEJUg3rFc4q76RRLK5epRYThqkczdccmuzxbsT11iy9EBQjRXZcjpJARURKy4hcs9xBfya6M6aNzb67Bek",
  "key12": "2TBipwurFv4jb1uR9aDHTw1P3mL6LXr8pSCAaWXktPonioMUtvvPpixK1RpSGxVsJpdiSrWm6wMXnUd3hS1Vbids",
  "key13": "4hSs1MTJeoBDJvs2rmHLqa8FFqpRc9vF78jzsQHJDD8YXZM4by6tE3BU91VgrMpP53zu1Z8Zn2DCBNEcdpuwxy6z",
  "key14": "5HPP48GLLs77cjqPbS55gNnyrGgovNJ4BXLjSRSM3dpfDqpQJRuyeFsoLbb3A3WAjMNSDEafDW5ZaDKCV8m6wRvw",
  "key15": "49e6tZKqLwhsB8ix727LHZ9nNKxU6Xmq7AYCvq6PZ7aCdYQE871rzx6b7TnNBc9qYgYmcJwxmHfgiCQhiL8kwcgp",
  "key16": "aSQULHscTJj2hzn7Ep2Sj6aSywdg5EpxweqArTSFiiKFcgyzDdjieREuX6TLH1zhZA4gPgNrCeSTMXKtPSBAHCF",
  "key17": "5xWwD2NT3JbZesuq5DCxiPi9p5cbrxq7VmJT3DHvctJ2Jo3WdJvb8oxJScvQ5JUcZPVRn7iMQdTXiL4M1nQ58Eki",
  "key18": "KwwRy2TgXzjNZQ9jFf92KW1S1kkFZmmu5YH2uwtfBoMhJAeQjaQk4tcJCkyWSGz9Jsax6i7dECZiaSDq7KTkQBd",
  "key19": "6feEp4K6dszgoyUtsh9CyqDzVR2F3pufcXGEPqKueEXV6hNJRPffTaWLM6FeALysaSAm5AwdeZCeGvosMNw8UcL",
  "key20": "3EyPJ5V13xpYUeysxVXUB1X3EgUh3mCXPhdxtVrPr2k23TMFvbjqCnanj4zPk9cj5BVhFbMcjC4LqTEi2ereHjks",
  "key21": "3k1Ez2bfjFXswRgu7REBZet2mbe9EtLnUkWatpiAmrKmLFfuyZkHTunLWDRTxkXZNMAC1BhPuFGYNPXdEAQsD8fr",
  "key22": "4YwVvWrbpENgYH9brX7cvgvHwgFRWiyLPju9Bgtntzgzq5mmdbFVij3mazJHzXPVUvsVr2Eb2ooHBSJ3uBtGx5kh",
  "key23": "2RHWXK1z1fAc96fKXSxWZbi1BSVmzcU3L27JtdyaAWMwPuBR6Yrx9NrVxoYChdkXPypjTsK8bCtJ3arvqXqem2Ma",
  "key24": "5yZKKhg9dJ6K4TorTFaP5dJ66awqmGEMxQtGnf9tifE5FkHY5pRGm9dDWZNzbXSXN3yLred21nXuKyVRqD3y67qv",
  "key25": "3GpFESm9FDJ1J3nnzcsMju9q1aHToHcVQYCKmVwdKQemBvYzDaTC9HE5aagWXCcCBypeu23vi2n414bNDHLoAjeF",
  "key26": "5kLfvrjgwzNMEP2zYnfQ9SCXM7FiDTrTxEz8EXyqTPvWCosH2WwqxW55w7SNK5iCrbLdqaqiS3QvKnXJHXWJUFym",
  "key27": "4EzDXewfNq1efXxaTRfFfzazqr9yBNnfEEfM7xwfhmVqhUG6HGnWqciJx8WaUetDpewVgrza2LdaaRKaxDpzkxQd",
  "key28": "4hCdK8PQbDmLbK89YjoCLLh2eQasH1AYNs33cnCCYgLj72u92HQ49pWBF6UtEh2Eav3nf3pdAWRQJG4QnMK9oSS2",
  "key29": "5NAu6yR14dN8m4qYjggTcKQdfPPZNoGhVC7592QiuqkJta5L1vDLCTLc4RiUsXC7oUXTyfG8e6BcM3EcKDbWWU2Z",
  "key30": "5k2viBHALQr94iTqupN9sGAgHiHZkDsweGTa861rLWqop5gLWPXYc3t6ek8cK1AbNyFyyZYXG7uNdNNuKktM8iEn",
  "key31": "4SZbTJvjmrK5dipABCGCZeCiCQxNNKvV4k4JQBniisidoNkZCJKueT7rr7VHuafP8t8k5P7MHAdJ4RBsWi54ko49"
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
