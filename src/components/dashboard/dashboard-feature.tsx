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
    "VubqGPjyT6iJvMxAFDyWvAbmGocdcNEq7kUYhLkaK3HGAitGYnkQrwba8mj33ntYYPFfSrYhTd8p5Gpmp4nE9RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XyP5kWZBXhSAtC4EhLUGfPuJYDQHv81Y9GSoxg2j7Svr5EvxP3Ess1Psi51w3FvjdrxVY2jbqJPk3P5Ug9GBxJ",
  "key1": "5dMCWDdombjkZJi3UbE6zsy3w65SoNSSXcM1YiT9kb154VkSSHGThEVoQnh4fEvHKiWyqXDfUctFMj1iopaPRJ9j",
  "key2": "4xXFa1zqowMy6DrZhkcqmZj9Ej5KdDX3oec6fZHDefDsshiBEdCoxAipfN1No9WX7REvBBGxcy39zTnbKCrjroyF",
  "key3": "5TgeVRLSmMJv94icLqDgUmQ7sv81HcpfSYvQVBcVSLf3pfCyiwMdpQMUmJmN3DHiS5Mdea8XqCwMyoM8VtSfBY3c",
  "key4": "uP8GFmxf7ia91XRrr1ikb4y4T1dTPh54xs5nvFBPZo7oGgXyMVe3G7iCKAM9u87gHnSMAp7YLM13uw1Bm9vXqhM",
  "key5": "sRWAJHkdUjnDa4xbokCkeE4yTgYzW5auNqMw55q5vKEmx6bLqbcHmYYnxMmfZvpBnkosrf7QJw4uXB5DQVszaap",
  "key6": "25tMsjXgSTmA42UrW79NN2SXAm9wUw3bYRcWPPDnSwD49t35dmiPjfmKAnzdHksuazYdJqHGzD3tn77CPL9wGpNN",
  "key7": "MuQSDLcnjbP1mHUWYRNdrm6CpW1kCD2YLdGEyPaMtT3e65moM4V3zFRS73GJBMm11KonJQtqU6UkkJ48r39The5",
  "key8": "2Lhqs2toeySzry79SCe3vcPh4177pjMt5fjMUdrKeEeyhUGfviH4QnoA6YPEMrYoSVpTjH5Rxwm7Fex53Ln9pkj2",
  "key9": "3MbmSmmJYR9hWzgRJwjZgC9QW8Q44QXxAwHDDhZwiXxzRVDHX62qXPCuawKC4MiBA8Wg3aipNKzy3tmvuniyitjT",
  "key10": "3DHsUc2V4DTGJ51iVdNKsrs8PJmtiXwGsGedLBNmkd3dah24djvajkNTNXh2XZckpgYpbG6pP7tPwNzzqhBY4q1Y",
  "key11": "1o2dU85U8csz9YUTRLsePk51uGBa9iwrwgm1kotVSMvWzPbfhdKkVodTj9WNJiFB1yg52DbHmGe8EP9PLVGHyPv",
  "key12": "BwDZJsLAywvuAb2PxKbzDxGjux3eoC4ZafySpUKHNvn2ANaRfSPAbqihU2Jep8m8r6md89Mhfojwn1E3QE3bEBU",
  "key13": "5AWjn8SocCbksFYyveSpvKGdwd2Pndesrw2FejMaaFhy9kkaiG4dNUGdTDrDtKzJYTHjvtmYDsbLyLjnjbLQgotW",
  "key14": "QCbaz6CozvELi15Rs2im9hs7rNaEMKStw3yF6YQbqpX6REU8DjzBrNHP4RYCcvbvU3SBYpW3FZHzJ4vtV3neKaz",
  "key15": "2oo8p3DsSxhMiciG1bYztJ1kP4Ad7suons7674qYvEVN4VAKugQPgvnmejTdKeSWNw3yHPuDYyYbLunJszXrL969",
  "key16": "3EAdZrGp1LBiHzcjzcGKryMo7qVwbJSkTVG9qqzYfsAvH3xoW4ttK4rzs7rJ3oyaA2f7ftcPgtQHYyRNyW9xgpo9",
  "key17": "4ka41jWJdNE5LXvBVtHzd38ZivkF93K7QghJmMNZKuBkAM935jnkihNNAZPnb5eeRw7vDscN6yhkem32LRhcECeN",
  "key18": "48AppqFSBPGBrJYEsq7fMGtP2tLNPPcVxSLnmc9x3wQzs1BTu2rGErs8rV2FTnnE7aZ7z1HDwoKbQ6zK11Q8HD8A",
  "key19": "gqb2fDPDvsPh6fo4funbSAzoLT32uoiQrPd4gt3e9pJn1Aqz7iaNohC71EpMMPcePRR4r5bycxQz994Fy1FnKer",
  "key20": "5K6nSLENAYpp1shEMMtwcixaKSZEHmdTH2J1aVvPCYv7Q7KRAoCUv6paMNU367J5bWa3aAB77mRfRGdiQHbY9Fej",
  "key21": "2gzZ9XKP12jBNtH8LhhMgDNKWe5jpATPzJ2tEpSZMKYAzNpks2KJou6iMyTd3c2GAwsrcV2VGW74jTuwsH2BvEdE",
  "key22": "62ubuPML85ogJhmdPprcCtjyYkiq3YQvgbysvQLpJEiwHzZaAj7fycWoJDgn52QGTYyPsNuH71o7idWzAKMmdZtu",
  "key23": "2QN7Ec6egYhjXWH1zoyczym6wDmcQwtNxwceTwT5AoRWBXFgLach59pn7dZk1Q7NW9kqtLncVYfNYegNnbNmBWdp",
  "key24": "5cL9DYYrBuFFQYm89JhacKVpexZmisesqrqaeRCuf1WwMGYRBTCVmJMpbkdWScTg6tTZLnpDPPVRdFHLhsnUyYfc",
  "key25": "4prJpokx4JnyU3gSe33wzdMyMqAu1WeVQzEU4DTGoipkNHtAkwxUUVmcx8y9Rf2U76vAkgh9fcuBNMLZ3FDnLakq",
  "key26": "3uX3CB1ZSbZq81jNb3U6czY7NLEvniMzLgRTzdBUubvWo6gtbyLbTMk7toRgnjF3fG58giWYFvzN6y9S8USwEtSG",
  "key27": "2eAStq31jKNkvq8XR3oUTWkoqpZpxsmAGoBAfMrcT8bu158ELfrcqzKqZBLDGRUa4sy497eLh6g3iFCPquGb6f2Q",
  "key28": "2XitnLGpJEVTjG3mGWDSMjZafDY1odw7fDm7umcpKJqiYE9KCwoXwcVnQH6jWEWQpZUL4oE57GVeTqBkDrAfNxSv",
  "key29": "25AycYySxTUhjPTfZM2FEg4iRKhmDyfvetDBz34jVXCXPTu6GFvkjSJ6cLjR4C4cL84vcLCPjyTv4iBRy1KcMsyV",
  "key30": "3AA3w5XhVizsA3UWrMwMQqHF4F8s1H8NQa8sixc51znDBGqxkmXNpwiAUm6TyrhN5FZXwuiwHqcLrkJ7ynb3QyEi",
  "key31": "3X1L57woSdN1qR8j7nicbNVZv593p3XJLAviNKVMcJVfmaKST4udpfWJhdmdTzRrcPJZmuxZR5ETyRMbKiSfRixD",
  "key32": "5NT62w4JEqR7E4uY5QhfgwJe4P12BumRV1fCCkNoCnvN67NdPikZ7reeGng6r9QzWvnc9HKtczx6HsyadLicRDwP",
  "key33": "2a8TfPmAeZ6iRJWNjm4tAxmcZ2ud6AcTpjZSBBVMBkxfyx2dWwWqZwW4bCqEYPkWuauS5pkTSEdZkVWsqkwkw5Kj",
  "key34": "3oHvzhpJN5EX6vrn6QQYCRrpDnVcfaa4aWBAtBWXcSiUtMkPMekNwnx8swaj7F8bwTPtaig3AzCBd1EW4qNvELWp",
  "key35": "ouoXNtKaPvLwr9CQUW8nGRJuYntKt6M1kpiah9DVxNQDExeu7rx6wQnp8kR3V6fRDVqVA1JBpgjCCMhk9bysVGt",
  "key36": "4ZejbqENhYF57tunM9sjPPKF4XeY7w8pCGk3yR8TQXq2Ajiey9pea3NVAgsgedN56Zunz7PHhwpigTjgv8166NFv",
  "key37": "jGFMDvE78pnArtKu8uzqBVuqaHGv81CL7Y1uhMfuZyQSJC8mQTA2JNAMzH9jyaKcWP3iq6nDJXEKrnbbfT811Vf",
  "key38": "63hR7bzom8MsPmhp4rnwrhw2zkHGvnbAMWwqHRGfPXkP4FEPyHqJBQpLAX6qoiiq3L4QizpBVJqEK4oZdgjst87t",
  "key39": "56jT8Fh7gKj2G6MDNoqebhNNQZSajZWcw8es56NYhpyH72jE4CDk4ntDKvojQMjcrjxXpMAQmtvLajGWZcYK5zam",
  "key40": "4mP2YeGwfVhwx7Ze9UMicnJ7XYhdyYRgFVnJcecz7qAqA1HDXtq65EttpKC9P9VMWEUBkdn3ZSRzPDwEmGQy77d6",
  "key41": "2PzdFkmmpkoKLPZCBNcYKBzn5ddUDaN5PsK1VRLqDFqnvguyNKvwQRykwo8yTEWQd4KEwK3ew56KvDyPnbZ9xdyU",
  "key42": "45CmnhcjbeGNTsgguemWdBZ9PXCgsgtrDqLfzdXKgUfVuB2H9eV5SL91J52fEMTzdaLpTw48cqZXtnAmDZT5yBd5"
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
