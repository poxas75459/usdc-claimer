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
    "3qYDAN8Swm3ihRCwePLB9pJc3M1eaGvWMZkfnQZB4xnc9eHRLa5LrizwPSEVSo55UTWvD6crGZMZ4nR46ma45b7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYG4MSi2mnvzsUB9Er2cX4TSdp4WqGB3Wa94NFzWM8B4yF7PhQmv9dWPZY76bn8fnBPEGMhem2AJt1BYrpXQaUg",
  "key1": "4vNZzCnWLdSJgm1o4su4eAmnZJudL15YbEsHVjuq9FXhkhPRSWpELMjGovxm6v2XvM36bee3xUuFnc39q3ZrEf7p",
  "key2": "3pz4ndoeVHzCv1anWd21cBTgHkEVVGEuCgqC3fSadKkyeUBFFrqkYzjGk9QTfUFmDBVdfKMEuUnaDDyybDc6RvNJ",
  "key3": "67douucnASz4PEzMhW3DcTUsHRj1xZJsdaGCipJbQxNtKivVq7QCEnUPhNAXZE7d8MPjS9SrGPGZN88i9yDvdjAx",
  "key4": "7XgdrQHNFgKXHaXzpfcaBranYgezsbp2wvVqK1nYpbWyDouPU6iV4FCxqWKM9qfHNh8kjH9tHWaCZkYFDJb64E3",
  "key5": "5RWhuG56FA1BZ27QksTrcv9VGV12NM9uLeBDdKK4n42S7ubByqdSJRsgUDrVyheAHjqwFNqw7ucuCQgeAt7HKtbP",
  "key6": "653Bm5REZVct4izebB6xu6FYc9M7C53Qkcp3vkhe3iK5UBfU2J9oinyEjxzKw2taLe3JGR9BYG2bKibXtKKx3Lp3",
  "key7": "2Mujyo9yKZHwC9hxivsayBSekU2mcngTrPqdZFNtQ68n3AAYYuZPk5rhk3bBXVNLHhumaArzqUhy517kxEB3bUA6",
  "key8": "67X2qE6EL9xE3hWFNroYWAMWAxBfYJYKpHTVXCQsswVyEKqamPFnbKNDuaNAQBBFa8AsWgMTfuJ1PdJuEMarxBcS",
  "key9": "2aQubjDweHPpjPfwxZtnRAq6zQLjC8pVHvig5PAvrYRonJM7NYTcAdE5H1hCo9FEJ4NBjyAE3nnhSC9dMTDWzUEA",
  "key10": "4HwsxLm9oFwiZ8Gvgc9Hq7ECHuUswCc4pKWpBT1QVz9rQfiLAyowW9qVV5T3jDyLx2t3mA96Tq1HvDiLk2EvBktf",
  "key11": "2XRPBhD1XKvodWi9ga1VfSMEU3GYyvHzCr7p7hwV8JbqtZHh25EWXXJh51fg8M3dFAgXLUAs9rRrDxbo9APhhXHZ",
  "key12": "5pVn4pcJqdi6VDtc4YURjESt7ecn1jkf4mBHBmJ7G2MKH5onF6EuTU4VNWQH1LQ17RtWunsrWvvj4kPqJUDtMYFY",
  "key13": "2T5yuHfNbUfPr6Xf4uoptR6atRr7SoFHUnXHni4rfpb6bYYyngk7w4avSkmwLTtU6H7ZzRY5h9LaDe3RHn2ysGpP",
  "key14": "2pSP7qHwTUn6G5u7BsPFwFsgdTAXpT4SArYwJsUjEzqZSQzBbJWGgtFxxQkvnPzUsaLVAKqZ58WBmaQt3tSXyGTt",
  "key15": "N49JxB6ttPD9coTHpyR8sn5LRhCD1yBUPLnqogVRm3m5x7qMviDhuXBbremrmfv2uDgzkF5pnkjTpfzkNn6kqj8",
  "key16": "QqyBzoAnschi2zoLooXKLR2AWdaLVLJ6a25ZETpsH1UUrDBTwMFCBt9GrC7sj4433yBeZ9XJm9mcRFdJsCEyuWf",
  "key17": "27MPdtatSfma1Nk96GtT1m3VvmqGpUJ5bQ4kvLESxcJpoVT9DZz439TMKsJrTa66R43KgdPtTDrrV5t1fCNmPMWU",
  "key18": "8PZwJWrTencLShCDDoGc85gKMV5YDrFasHFdBfzwfpcXXbR2nQWjR2xy1yHK9Y5yQxUbSyhPLs5b5Pz4ZgSqrEr",
  "key19": "2kBvcXfpnswYqTsuhKYNuq4ueqtjixhWkZhHPAgX9PS2eXMbKuT1qVESWG2uC1H1QVsi2LUUJ8dsU8hKgEwigQvh",
  "key20": "3oaHTyR7GEG5HETPPq3vdJJMQnkaYL3hurqjHVjzYd2RPfr4H3Pxap3fj6NSwoBHYTyS6MKynSsJknc4oadUTej4",
  "key21": "4nkqATox9n1NL4J2yENvDkBCBMW8jfxFSBeBov8nGPtwv9x6oAv3tNwbMeSpXS8gxAAEb86qBNbqYosfAeVN7JPq",
  "key22": "3HD7CdfqDLXSbWk2xwk1YHHRx43CYFD9ADvrH6RBTHiUXaLBm8xfpwegQT7ZrktYecFnX2QZmfStWL5fYUz8bvTq",
  "key23": "2srw8R7V5rVPxdxL5m3DMsogyvgeUeukJn7uh5ANnHpZLDHne6uXmfTBkdwmQ53hfLzgEPWoJsS98V1RvvdwWj9z",
  "key24": "4qQVUU95sMhbiZH1vspSuPNWas1zwmpkysx7VXHum3qaNSrpHa691H4ReSvx2fTSkk7tp3Aswd93fG3bvzGTjEb6",
  "key25": "4LQM6M8BRYucipmFj9v2tBzK4FVxc1ip4b7rJJVUFnTFVfUJsRJF571ZsxdUsSHHkXm8cPPPTqvpAMe9G2oAhmjT",
  "key26": "2Q4yJBM2LUeh47RffH1bZnHHw5Lz3BkyqbJ8vqgFChAK2J1sfX7HcALBAYG1qMJWocHTLUwuPHrXZHkdamU1TJkj",
  "key27": "r4vqrUJAnSSLKZtiEnUk1K8tYb6nxKPkc6s3XoyCnW4g2tEZowudiFtwZu1hYK25PLYAb1fQRThi17fzYSCg4u4",
  "key28": "4qvwq7W9sLXdMAx9NzkKwBJrQ6vHByy42rnEWCn8icrdUM1TqcpWQaGmSXZb2VSrQbeK8k5KFUiqHSWzVC9NWwri",
  "key29": "3a48y5Kn5oc9pYShYtAJPrEbRFk6csrq5pxFUJ9HczUwq6NyeNs6cYx9QoN9iLiBQYp3aK3TbdYC8oWiSQzoDkG9",
  "key30": "3VVg2J8zCifeQKnbJiVbqWakvaqoa4gdcuDEFtvWZe5zhYQqjceenRaeZhVJ1vQ7BDEfemozzdY9AdbVGTzeRJMS",
  "key31": "4oYeuJCDvrnHN2gGM1HUwmXkGXosD7n93puQX4LEmTmMy6AUN46KMMXzsRxSeAUff3coctKinJr8NdSEqUGxugYq",
  "key32": "uNyhjtcbntmJ4KbZdhxtfugAR44FFbApcCr2szVBbSA2WUX6U2CkJsiwfdGcC8LqdNU6jsrYo5BmttwnW91GCZu",
  "key33": "DQ8oo3PRCtJCcgRF8A7BWVXxsioNYWtmV2qtHqbq8kbBhbQWwvVU6LEKiMFjVg1vCc7jRLRGVpnZ1f7C6FBFg2e",
  "key34": "3SoPW4JgPb6h7cnFGkcdBkB1sTHtaKLbgavXsJhQU9tqTZiCKpXShyLXY3KwZzEPGrqjhP4bZevRsRQrZaKi54FP",
  "key35": "2WYkzGqSpbJktgr45CtH5QAHY4xGAFGSff9MgQoUMMqbKfGpDP1CShdUkbL6JKb1SgGGLNj2QeqJbPyHFCikWQYm",
  "key36": "2zD4wmQdKFwuD6gSqsdc2YX9WoADnjg2uTMNyhMCUV8X7XVUM2UjUFWdmsn8uDkN1fWybg4Jw97EpacqXDoucrK1",
  "key37": "2r5czMYt4MkBXR2ZSzyoQ2Lw3ygypcRaSWjgu3Nuhzzxjk9geybmy6CjuveQRFrq1jm47CVE1CN8xEWrkENbabtH",
  "key38": "N5tCSKHnGgNVk7JAtZwEGtd4gTghxHxMSZSKiDpV1jzAFeCXNuCUrkjnjLaM6y6BLDrVCRPpvUv4EMSbf9dHRXU",
  "key39": "5mjxVpHLEJcpQrpLXUouHLnrbeaXjcin6daFAGJ12H7DFZZQd7wAdFmBGVM7Eq32fR6fBZLgFawehChE2Goe5Nbp",
  "key40": "3JzPaGAV4HKfZDp6E6tmUwP4fmHukYv7E66ej4Z1QsMxwxkzovP3KQJC6kEotgrAp2bjnnM95W3U8SYd1aqokKuQ",
  "key41": "3Xk8MErz3w9JdfBaea9mcuDtC1MfjFTmBKqkSg6dQc7cBGU7JpJEL92hsi9baqEYnXSsF7snSuniWw2mqfotz1vT"
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
