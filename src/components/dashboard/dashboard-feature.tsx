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
    "5HwXrwTAef8QZcxqjdZBgksZvyjkfWWHhpFDS29Eik2hyr8ZobLJh9Aw1kXWh1ctk7dEwgg1C6xXqQByaciwESz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kidbf7y2fYizwaMsQ8PY2jSedNYaS7tMbh17wxn5Ck4FJ2BrL3WnmyzkK6zZtGu6RyYvKNk6gBT82Wr6SfvQ2Za",
  "key1": "okQSnhUTN1x3mcFQZ4RgHpADPFB4usV2rTXwQkofzjdB5Y9y2v5Np6bTBVizsXmYwvkbr9UbRFZohTCrq4xe8gw",
  "key2": "4tHNyaNawZ22mATHvo1AtWagXNNmdET1Dh6GUgoFRQjConq44sURf3fWS95s61qzXHnGyALqTebdjf7Gq9Yvv1q2",
  "key3": "2tFJ1gvGu6rfBj1h6prQ3LnmHSxRTMrVworZxJs1oVNAkbGxyBUjaeZMwAk5gDrXdvba2tdepwhPRReKDWyRrRBC",
  "key4": "5jxbGpax428VrxCLUZraUT9kr5q2QADFzYoamCLAMM7sE73xMyHXpnJfyYZfNz5iMK6U5TsZUXEUWVH2hVQcnaxx",
  "key5": "53MDv5qF2He6i2s7C9Fx2xWhaTWD4L8S4AduvnheeAvNz6LttDSpBUHA2BEG3CKU9GghfvypBNigWsxSY71DHLFh",
  "key6": "5dsQuxZfRMEapLHx1CcucjVN3vjQ57i2bRsvFPBKiAhxMPmANUgGbomHsz9gg1wd13SpcVvRBfdsMEmRnKEb5G5y",
  "key7": "2amYXzmZjGPNrrGVbEFyYEnBtVVjGNeE1vMptrRbfoojPZsFhWu3UwcNG7qxVBMANzALXZ4FfMe86NSTrhymvHG9",
  "key8": "2XVSdQfom1WMZCFRZG3awLzJqZaF4R2KmBekcPQ9dNSfCfjLSMKKX1EiR2y7oCBaGrE91sms6BLqCJ7Nj2ohbKah",
  "key9": "2vGYqC6jgSyz7pwGCNqSVEcqcV8mGB5RpLBBJn7KqZ9LyW8GbBPSCSMAaRd9ksairxeacc4R6HmdinGuVcjDT3EK",
  "key10": "5ssSKd22XVg77fmZCE6gEAyAi2yBQcwRYk3caknMTP5T7Mh6anA4rMoh3HuddRGCPJZ1Q1gtjEPCt69nG8D3zF9U",
  "key11": "3q5wfmTj6WT9UdJKun4XYNsLjeyg9H3NicvV812r6hgRCacQfbtPbdrct6LgTCkA28HeErUzsnMUFRSdtZAqgqdn",
  "key12": "4L551neMkxTHs5JVFQASbYt8sRWyMAxtat5M9HLo1ViLct8WLg3KwWQRuWRj3hNkSCC3XaYxzJia25eEWy95SgmA",
  "key13": "5WeM3pUg7Y1tGS7ir5fkzPhr8yjYosL4KYRQACNbmAi4X3HxLR6UVFBY83vd3kWgCxUGU5XgnfoTBDeGitkCSNge",
  "key14": "rewnVvfdCYypAnEYS6NWt6EWPTMjoKBV5pyF5cXDZajZZctDsAFGZEFZonKadJvryTUzYDXBaoHBAyYKVHgFyot",
  "key15": "bf1yVxskYE87WT9f6S6Q4RnUXTATi71WDRKSn7iDdxVf2Q1Y8sWVBToXPbHpQZR1GQvJyaor4y4tcTQ9vgdbc9d",
  "key16": "5uzmXDPCRQByAthEeLvBsZJo9K863cKTTYAcvdGMJHvE352FhnjosmJJF2RNvABBaFHnZVm4TtVBW7CRKqeQgPyk",
  "key17": "3P5vtTnhBmsYMTqjHSSCJ4oLP7QoV3epdUAt1rKSiED2Xw17oSczfEQZtuMx7QtjXJj6QGJffjW2sojQ7V85LZuA",
  "key18": "4AoGd5vfq18hq63wPJehS9LJ9Pu1cdKKKFbYfDPnPcMxTEvHZPAN6TodbPhxzuBd5D9D5mVKACKbocdcZk4A8gya",
  "key19": "3BmU2Eoc69zQECmfHyykJwHhF8b2bdcZ3AekAdeFHRhsJX5TnAik89quGG2jRR9SmTXUyGB9NKWW9e2Wz1VeiZno",
  "key20": "T131tTkQ6KeGS8b6QjkxV7XgjTBZkE2B92QP2wLp15dabpMm5t3yp3ho8Tt2ycm8FWV8QyfoCQvYdEMQBjU6ZFy",
  "key21": "32NXBDZFsit5APLZ1jE2cKvU57Ud6RzJv3spep3aqDH6gGCx5o51CYsT645qgTjjNKGQYFmFS9pbFFs9EUjqb94c",
  "key22": "2NP8bDbxmdBPXg3S2zyDacybQefgddDJmzsNo6iC2ZcShoucjN4cLWwEHo9ZGSeAUBsPnBMhV4YVXGZE8GMupM2P",
  "key23": "65xjKtpjbmqTPsiYbU2VA8etKjbu3Qx3XWr3gNmsLUcbaAqmKVQaqtwczDZfcXmip4pC363tGQkhgQaRKVEFDgyt",
  "key24": "cYGagpAwehshdm2Gxdk83TQDq4Cb2CsuGkUjFTzdcphZDFCt7EB6KjNcS6mCzFXJRn2NQRi9tUWgrn4Y5w3JVtn",
  "key25": "2o2bDm4FCPyEuwhHNfiCaKWti14k6oMdARSuUPxR9eiZ6dMePxYGRbtXrZpSLwotHL8gSyxdf6CDdcgLLZwtA8wP",
  "key26": "4ixvF2QpuQvGX2DjLV587hshYycyB2iTecUtjJMtrPGpUbKSqY7cniPxLjkeRtrodJmwTC55XfY9XazpmHr3E4Mo",
  "key27": "51LzMGR2CMud35RpRLx8U2v4TybN3R4uU3Ak27eHAqv6ZHupcJgAfVSoSkTwd3q3iBRzru9isu6eHCpLJvgiivt8",
  "key28": "5v5byoPVyQGiAzJqs3GNvQKaQvZU9uW1RfkNaE9M2oZY3TMKgkv4pVd5a3Vg4RjLT1WpS5ZpY5BDry31orLs68Hj",
  "key29": "4F6gWVD3iMzFjWGAeJhG1H7NYJu3bKw63mFtocqR4RrvUo2M2zxZmYfcUSfM3cfjtzyFYfg6LNznk9V3VHXmtoXx",
  "key30": "5W7fJG5etKvN7ru7GYMf5MvxtrmGGpnmMauWPBukJmkHM78a2C3sDav4MXuBDHmUqpFeYs5XVmGb9Js1saRJzCx1",
  "key31": "3YcqqQW4hYUtgxHkFQwizHPG53Sar3bpLAvdqtu2HsjHzj2Ddvf7YZ3u7fnLwhe8XFUeKiC9XQ3P64ajX8RSi94h",
  "key32": "5KCfFXfFGsz6mAKHNtktkAa4oGwAbvGPhnsGjsXteuhGmpxTa1U1836v6ktRvus5EkkV6y1J7Z5X9ruGeLpmdPBh",
  "key33": "3FaJDFgfBQRLKr18YPSLnxJ6KPE5hSVeosaR4jCnVFpJXhUfeWUzfyonL7nqjBnuBju6dVAyHvjQnhws1JAmgfas",
  "key34": "jDnxLGDiTjWDNoVBC66uMjvd2yd3CNjNgajqg5bSCwoWxyWucuFGCYuw6GhU6PUQCbePXdGijKjjPwqu1NN9Gi5",
  "key35": "48DewBSjYnzT5eossa44com4ADowbUA3yGvAeFwaqKApYaD4vPUKJuoE3KDMt6fepsMbsF1pGD4EYGpdytxoYGP5",
  "key36": "5pApN592CGZ4611K6sCHjj4KXu3eYmsU3BiS5SUpWyw429uctk8LzhrLruzb6PyNPCnVLPYaL1ZwETDoWQ7dcgD",
  "key37": "QSFTmo6Y6NrLLrDpyLk5CMryvrm2vVuYj4vrqZSgc7RwycGjbx2ccuVzwQMS7CH8nFmfXj7AoQ7c5SBGyxEDRzV",
  "key38": "5VkWZQaTFSzq5sKspvrnLJKEMtqgCCvjbewPGse6gWPWMYq1i74tXWWveSn3HJkD2wcoD8kLWRyNEUHogD3eUmMc",
  "key39": "4eHseGaAKDHA4iEMF4sE3Qtk4mMDDHsRPPnbkxYj5NbDZn9pCNugmpS1iXuy6wu95aDgah3HpxYrYwL3NunBdWhQ",
  "key40": "4wG5mEwYvV9jv638FGD3HDyXG3R3Sk1WWdzt4eKPz6wMxjPwjYnW4igg1uk9s1DFoUxjxWyvnEJbi3rdovxS5SuW"
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
