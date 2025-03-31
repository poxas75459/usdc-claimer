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
    "2kD5i8Pq1sfH27TLRF1KhxURKpCgkqBzT5FVagpstyTKda9ML2V8UcLqEF4F1d1P98E2XWDU1spvvPomxyCDJtm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7foumpHE95D1iWimwiQwWPnW3ZZ4pQJWeqNfu6f8kntwx365SZqR5DSNhFc24mNZAwPG8sTUGHX2AgYmUnSJBK",
  "key1": "MtwBZt9dSaJDWisMEZEPBWudBKXE1u1zhayJvyx5BfYAJ1MzP1XQ8mMVBzfXeMckc6qPuyuZZvQhQD3rtD45bpD",
  "key2": "2gpuJHZMA3kkXLHcry5BBAT4xSrqhcsLbGpMoAFtvZfe5AkHkcyXsrmsaDpKq8GWGjq1vCrTAcTBJKusHNEEwvUg",
  "key3": "5HgDJYpcBRSdeKAU19wo57EuNKJr7aYc467kBQBoDvEgJchuEmSy4r93BWdjAwTVEN8JumQkSvXDxQRhTfTkDE2o",
  "key4": "3rFnZ5TsMQqMuE5BDaRr8JzLqzcMdms3axQZBYD6AScuhHbT4fe82aLwNcwVNFvL39QzHU4KVan9P3mE6JAtwRK5",
  "key5": "4pxC9ZP9kJ8zdU6QKd4JyP1n3mzQmsaK44s7aEn4HYkzV31o8kH4Z3hWr1j9zbicmtZttjEu2VtZeSDbnAEgRvtn",
  "key6": "24gsA4oPLg4Fo2uJjhM8veK8jZ4ra8Ry5o4wrM82ZawEiBeSaqqjJQGbLeNzYNofwPnsHL43pgQPDzJPLZFsEXHG",
  "key7": "gXVQAZjRUUYBAbtDCvP2gpFCwZADnBpvkecorNv6kcrNVLDTVGodyoQKALXuS43RJ1PsLQZ6bTpXcNS7k2oMuoe",
  "key8": "3PhBnGgyyDoEyBN2y9j5cc5vupkPkCcTdt237bS85eZXNzsh6SfBMrYnPXiLtdsYPT95CZytx7KeTwUHKvGfFuaG",
  "key9": "63pXv8oYUD6Gy1JLmspSUzEDF8QnnW9TTDX62s7zpxCiNDmHua5W5URyb6a2sv5bjiBhutxidzjAoBEzNVTg9ccy",
  "key10": "2SxyvBR377u1GiU9H4ArJLXpopbQcdQ5smc4EiG9hvQwJHyQ1VY2E7fKpVXtyKz2YUbLEk9vRz7RRmuCfKaE2dSy",
  "key11": "w1amdErb8A4pEbzrRwJiJATYMFwQcRayZPq6VrBYRiBZjhjrptGhusNDrBPpSbNkrJ74LhfKhP8TM2r35QRNeXf",
  "key12": "2HAigzgtxLUDgostyLqXr2V3n9zLdygs7Rko1id21RHmss4uWoMQyUCN1jFdQkp8qk5N5YzqNZRfLAvR75dkXmQP",
  "key13": "5maEtQKZM2eU2b7qrwUx2P7ThYuEpB4nNNUhgZjYwLKjrnVtu3hXPJVDuwq38ZH7EnWKEEw7Xp9bccDmFy85TnGz",
  "key14": "3QwpoocTC2auT55AMFioaRmyZ4i3xHXF8ao4FtV62NJMawqeWAXaDMKdQctGPhuhmfUrRqaB4kvjdCuGjVgVtmAv",
  "key15": "2eJLLVZHS54NVrS9CyiEn9SKx4Nt2w4i799W9SmcNr9J8gmxBsUXB61hzQFCnbLuRDaze2aFJVAWH8qc8a7oUpEp",
  "key16": "3A3D4x9AJGDU7bK6CtZXnaXQKAwsRFntamsaQM6RCn44qCLw9onQtKPUiuCsXK4RziwvkHwoETWPwmYNwFeHo16t",
  "key17": "45FX7iyPWEMEUbgCcreyLpPoXKvpnWYw9r5eZvTXDWKiA62rAhJHopTL5VnivWszZcGaX52iefJAVNqjyC9jNycV",
  "key18": "2x7aA5acicKtUwgejYZyUZY8whkp9Z9ZNNsAoEtzJQx95kCSxyej8hhKHkR99v41kqmERhzzibvat42nx39atd6m",
  "key19": "4FxxULvkkQGchpueXbMi5U2UaWVwHA7WT4wqwwL7Q51RPob7dfdjKveiUggtf4uNHJYe9iD6EevohvM4BJoKLHpr",
  "key20": "5G39urCq1j3JW9Gcv4SNxMDay8PeYxbLUBfU3h8gDsVETBDE5wdXwamYHWrTFq6YUkG81uMMaG5BWDNvdAfsYpJg",
  "key21": "22JUVVgChF8mTinLUuFnUQb7T2gGVBsEbAghWq87pZi1B9QtLTiJ2pdKqPuFu7GdaYuYAaMBe596XhuCLiir2C6t",
  "key22": "3QPSGFsxo97yghGp57UAuktwvztGcRpuRPoY6Scz65DnVeZoJwpUgKpiTPQUjmm1LcAUNXn2dHYoHN3iPBzi3NRb",
  "key23": "23H1qxnHagkTGEEnCHiBa3fNqJvs5mtMFAPqMr2WGxdbgzKfmWV2vDkjMn2bwbL96wsYNiKYkVnDi7mhQn2vNLux",
  "key24": "338knbDkvHZja6bQAWZM3omEcad2WDAaz2dMXHffqz5vghTnBsAcNbJoj6h5zqRFoYKX1cEiYp7ypdcab73doWdC",
  "key25": "2VoD5h9xoUm9CfDemxroUGgpf1gn797oGA1JHEmprGWQQN5vcUz8FrPm6rDT8HDKxrV2jdy5edX1n6CUW7Gqzj4m",
  "key26": "24hnv7hGQfnDoFfGCCQDqgFvE7UySzqYwAD6EZ1ZiaGiNfi57MHfbjN4FkbhmqRMZiqwMdtKGSQeUhGm32fMv1HE",
  "key27": "2TtkEJ3vWAWX2d8VVV3UwoFsQ1yRC1Q4tDJCV1STsPcag6cJUbfNHVxvNpC9PeTCHkHtPfetu8kyPcpedu77gHNZ",
  "key28": "3dfU7NSgDfdy5gVka2Ed4zYe5ZPAag5wNUUmDQy4xCME7grJbAKfSstFF6xRJR6kcNvxLLhKakjB94gJiUWYJyYa",
  "key29": "5ZfWexn8FDjPhv42JayLyqsd47RXCVvqhBDQ2ffy28DmVQ4hve6dU9BhdmPQgKqkjYCas6VHb3xsLAjR2Eo37Sp2",
  "key30": "4zMD6TKGe19sSGW6swxkzWiDJz5aqcMTMc83SiTtz69Dc7TCe1cNBjNzhHwxAVURPi1PNtorFjBBLnS8ow4bfJ8H",
  "key31": "3f4Py3e2AD9H4oGsYH9F1aqtSCzdCuuEjfPuk9VjncYZ1yjRFqUZA8eKizGNf7MnMGWBhBB7kTcZVJsGN2erv8jv",
  "key32": "21g3Wn8XkLAX2ucdxrQ4XbvGcHgDhozkiUFUgrdFKpszNWtn8mcGP6uPWpZ3oiH8aFiAbdG7aByWU7b8W72eGW2x",
  "key33": "2eBUfbFx7Y7AjXRJ7aVyxNkiyMjRXYbThEZY7HMRaJAoDHddyGENiCoiyfAjUv5yLdMBDiuYZHdcuQGK4xXXeXKk",
  "key34": "5JbjZiwsRTksmSnJSpqCkT6HUKKkorHeFsDkEAh4Sj6A5rTjEW4PjEwoNGgAWTsCHeEXBTfPMh2WYt4XUKjkA4Hu",
  "key35": "5eFsjjQ3tz8TsaYYT9hHQchw2RzZnD8oiBbjpEWP3yDueCW2T7Z5xRyq2Dbmpny7oa1GRo4bMLL4fp4JMWg6Mbmw",
  "key36": "ZgY9FDaZtiP4EKXnxKnGhaAw7xfUe25hxCmbwKKyAoGLtKaUnrF8VBjYRtFN1WRX7GuYbw3LMmGEBQcYBrhRLmD",
  "key37": "27HUPYoRGmFbVB4SW69RcGb73AHr7KG97oQCqJdMABqsEkiWtjMoWwPwNry9HghbQSKxmXkeXTPdWKuVCuikS8dC",
  "key38": "5VaJ2PZU4jz4T6V2tki6xYaSPSngHbCGHoD5Y2zU5u89kupZANDwkwcgq3KL3AYx3aEhAxktN9oViq6FdjT3Hx4c",
  "key39": "24ZwLD5sHPxE2MxhNwuz4XqgqHPrRmBtUMQzwdkzSNCYib8oK9cC1tTmiDH6NrZ4soisV5WrhFaTGrXLrbtFW5za",
  "key40": "ZwKw4ow2eJNAGPdqZBqv2MdqM9m8Uq2fLmgW7gKJgYS12mYfYgNqqmwkK4DaazV3f8QQE6sRx9xALm5VAW5hEjd",
  "key41": "3oRKV7ef3NaPcRrz33AkgVr2A5Wam9sHkc9uiF6jPAWfeXNVaijX8jisKQSgELFoQZkHXNTAWPpUPUbnsGg5UK8r",
  "key42": "2ESXQZ9KWVJLNbi3JVXLmNHhPKBZsziaYkaNxDTCUXBWLiGecjwrhSJAnd6AaBUGcRhSNZhzU47YKQHdiUjRvwmG",
  "key43": "3kN77gZDGTVNRhqZ7nTDy5DLJVNA8FWJkmmBbb2DoPFwGZUbjvaHG3HFMRqo1idecseFJzyxCCrcLn38w4BJr2x7",
  "key44": "4X9w2uHXLF2ZjA8djV8ice3VAHSJFnePAcRp8jYs2E6NnGK4NgevB5wYqGttg6nHn1zdPuFzgod9HmYYNWkKEV39",
  "key45": "4bdPr7LvjSQaeutt6CvhQwR2kwjcXhTaQ1Gpo6jNPRyqWxBppcbMUM23qQX6QSmjSdAD4Jz4gLTLSNfjSQbdMv4y",
  "key46": "4PwTV2Yd9v9CGGK58Na9HFvhP8fCY6uXAuzTKAtYQZ96QcgBK1D8ZbyobAM1a683K2BaAPy1T6eWyeBpRSSUDsb2",
  "key47": "4ig4b45m5koTCaHdfxWvPjtMZmBkFemU8ceU7Wb3i3Bs5zj6ZYvhBE8sY8TvhAHMKAMnnsnqfPGBYjZYu78F73w9",
  "key48": "4JbcJz4XKTs65RwXMSXtg2s7KykRBRTqLXta91UFGedmFEnymhUNVrLMR5DeAEcyjCbZV98SH1p6VTpY1S443Sdi",
  "key49": "22wmHeahtwvgLs1Q7hzgtYyH2jeHmpZGEa96S1iYvJFbeBUnKYmae3S6jyDhCoh3mytBjrvn2CurzQwBrnrrHRev"
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
