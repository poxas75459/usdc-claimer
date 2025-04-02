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
    "b82UaiC2LQwNvk1igRc8WF9YV1fGt62NWF8uWrZMVi6tUxHthCa8a3W53ydZdaAvSXTJvWeSkgPJEiC7jHAkzpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxBaJ5MJWKQuus7nNN6ffCbyYFZrawnU3SYqth3PWrvtFJonVis7ZKJw6ra8w2KYyBN1JgxRqQopWpGFx8gwrqb",
  "key1": "53j1eeRWRbAoi2N4gskfnSDJEH95QVHnWaGLQgJB1nDsv4m8mTS2NBsofXautLPDoico4p7eDRdeztGSBPiC9Y42",
  "key2": "UjbPCmd7eUrKWnBuAeVgFDmHLQ3rP7vPPuTLktrGhkXganVbxYNNTprPBqvBZ2YZJU1Dhe7mWQtws1rs2mCk5d2",
  "key3": "3HtuBZnhSuJyb1HL1MDPr6XjuprCgiBVR1dYp8grUQcj1qySLSn8c2eNeWVRakQrVSyi28Gdyu6wVfJidj1EmJoG",
  "key4": "5GqvFJWbbc71A3NAWzYT8EwXdmcxhdPogvPSuKFg2G1fQ5MKveUWtK5X9qe89sqvkUJSCKAZfWbQjE8a7jr9uBto",
  "key5": "S56Ui8EbZd8NZH997is6p8xpFwhN2rEtw5e1nKUsxcw2ECVFTMjRHiw5QKimzftH7qaPaNqNEJUp3egrgNegQtR",
  "key6": "24QVSF3eRXbpx9UCeS5qcPVBxfpqqDxhnucK75P4CsLHUvnCNR6LXZuvusNBcMoxj9rAXaWwbbFHG6FiRhmhjXZU",
  "key7": "4fcBeffcTMAbDpNzGcdifNcXZVb47DZPVTPJRvwe7HotCEN8bM3ETAXP8TDnaQEh8bUhWv13BcXAaMGJT3Eciw45",
  "key8": "2RMJrPD1Kk6mFDQVMSEinD2Di4SJmeETeFQqNd2DPfbWbQP49hGMvPQW2VMMcRSQ8iBnBU382mggY3pdE5RUqsFp",
  "key9": "5PJPyjgorVcE5NNtNkpuL9Tn2kHRnMkJamt1JpEkmsyQnjx2cjQZh6fWk51qHVHahX98cLX6PUow9awLFFL97263",
  "key10": "4sem4mydiCwH4CaZTanfjxoTb8hfcw3WNGG4AzVdXBzpr83K49PMDngqzyzsUkeZVVqaA4Yg3zM6GXbPQKPsBYBg",
  "key11": "45yfSNL35HQzb6Prh6NxGQaomW1KJdm42jcnnWYAfXq67afRz7gNkwgUQ53qXm9Sr2D9VFk8qxAtViBRTh1ZfV6T",
  "key12": "Dis4BZrogq1YS6h2TG8vrEs2qftFhJadKBesa8MRUeSTPuaUsj1GvyErmoVC7tduPP5x6Vt31zb2mgo8G5QJ4QZ",
  "key13": "2xDNco44eqTuevXqTqDE4NL5u9pc4RCpXgCbqkLtaX7XyeDaQcb6UNbK8UhDn35dSUe5sz48qXGSuYhd5ToBp3v6",
  "key14": "Sz1VsNyYsefjqyjAek5bnwi5rF8LpSVm9Lu6DMEU5TZdSmpxCZ9Mk5eQJAsgPwwbEHU8NSnCagNsDXsFWwve5xA",
  "key15": "4YkD2VuPJfmJf1fPBsn3CkFHW1QGqdGM92q6W6Gf1FwetP2QR2KqNnh3399GVGbDgfQTvn9STtehBtpNJY3Nt32B",
  "key16": "4gxMzgQhfecQF6EEaWAs5j48MrCwsB7odKHw5cQALbrcDHoyo92711mn4SdN9wQ6XdSR3Jo76AFVNdCZCaKWCQcP",
  "key17": "M7kinPtXTJVtaGSZ2wKwEJv9ypujLMssNCBG6JijfoBFiw7W37NnRcbE7rVR3VVZMYGCJ1ivo6o9TG9QeG7wPTs",
  "key18": "2ZddeveWGmXJCmX7uMYBrYv6CEpSxCkvR1HHqX5mcT3pbtwrr726qgs5MZyTTQzhcrh3jZzrfHdNMtrxZH5p2r54",
  "key19": "4d6YJ1o5najJ56xT7qbPWX8V25N83KCNC3r7mL2E3CSa9fsdiRsAGkSi6PjEGLEd8nC8eea9rt7q8UQPioku4TJd",
  "key20": "BFRcNLeXFjxCEbpaQv9yNS7qeYpWRTKegk3o6mCatXhjpVvpGTW3hkHVgfH616nnhrSain88Ty5bXvJkBeZRTMJ",
  "key21": "5K2ZGg7BkxB11TRoPe6U14Tz2GYX89Zjz1pzmDfr3AsWxMzsecrJEyLg6ecuEv3SX31LSfcUStWXxkd3hFnWBykM",
  "key22": "5rAMoT94Ji4Mxbwy3G5zF1zkCumzvHMaEHGRKHM8wVpMpgPAkoAG1vT1Kf3BGEYP6u5fi58Uu9RSRwQ58PPJVL39",
  "key23": "3QorULAuV6S2771JuKnqkKGZEj8pQHoA7dpG5nWveXUKCqcPZ6Y552TUzSgMJ9caRmstRBEvFJxPbCe78vCHt8yv",
  "key24": "Qtda8et6oAfSuNhsroYusq1yz8vxGovW8xCetKxLAYbs7KLEiLazyXnHVWReMhFNsatjjDHpfa5fzhJXe39YqGZ",
  "key25": "2qHKcyhvsiomBqQN9bUZH2Ry945zwnTpS5KLNf2kM8cCpk17h5huNj3uaqEuR8t3ZWPiAzyCFX7iivQmZfUwwaB2",
  "key26": "27EessHTU9pi5p3yT2cHYiydzmvyK9QeAHrGN1wjC8gyjyRajDMXMCDDYb8nUWTyC8FnUwsCqb66EDbrsNHsz82E",
  "key27": "1GeayKZxTqYBhs8V7rwGDXuoifvSTJBCAGoskoQ9hNG3hABmMMhY2NhFjuFdwdBoLpxJCSLuYkbvqbPLApU2vFh",
  "key28": "4FsmZEJhLSRNqB9tHcAoLcGjz4jYHwxSyBbtwZxxEzT7EVCqGnXdEszCGNCoTHsuvKSE7anuGk4wbqmL68Xj3huU",
  "key29": "waBFgnizq2VGJzxCscqoXRLojZYSKkmDu6qpaw4adLwbX7ckszrvpXoNthyYtiQfG8Vm1Y4ufJwdb3v5rdxc9YZ",
  "key30": "52x9JAP4LybnWoMwfb7wcv8TjUGQjchtxwMDMJwwZSSdxTShrJoLvvpKrvv92HkXYvrv4xqyJB8o9w1NpFrqjud",
  "key31": "jAi9RZ1ZtNm5QzDeBMZyktmfoaYq8EvrfmDtXDtHJqAyGbRHq72wMVtMZfrPq3AvSG5MMnRLd2VsKvLomFwtY7i",
  "key32": "2MtQp6ABDBFeyLJjNjGFRiTSjZdC9CENsZF8prKSvxwqGrkGfWtj9QHkSenAcU7ajuzHGJFmQLWf4gVE7roYAQ27",
  "key33": "5La5fqsg9VooKVXyswQ7Y8rxsfazJnyuJqSZZPWX9u2cA4FiK1mnRrdyDzsay6fYxJEnyQsMEWjmp8uecr8ig1wm",
  "key34": "2peZMrS22JDm2MQVV3t5aN7CzbfoK88pnGaLRV5VF1jXsdBp8Ck263VWdniijjqXtQvKhwnfx4HtKon3yuxAH1dz",
  "key35": "3DgUig5k5DvPpf5nQTuJYEPcErSuMzhomsZcBKbSYGVPxX6Q1iT2SucVVvcFDNPz41RK8nVaUyogtygKTgCd3XhP",
  "key36": "3W9jLToYwRVi9S994XcVvr7gJ57tTHenjSX3ZjPE3VSqoMXRwp5w2j7pwVKedpWVbAfdHmMALqdevScuY8mn217E",
  "key37": "Drz3V5esaAvi8MsaZfXWSHuvSPRcW664jQ4KHCGYft2nmj6vusRfY1eCzZYoG17EzoJPAd3zYgx8B6vf7t9wt7d",
  "key38": "4Uw2dSPNNX3vrgdQ3Z42CY8Q5h42z9dES2HRDgzGx8yVSiX66GHe8mpXLL5TaQBmpezRp8zFX3nccaNgYoqquDda",
  "key39": "4pR6jKb83rqc2gzuorqVFd44Zo2gTXt8yjPzS83EtEugYN1MJVKL29Ey2J4hSUF5dkdjmVkTE193vgetNbXjaw7Y"
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
