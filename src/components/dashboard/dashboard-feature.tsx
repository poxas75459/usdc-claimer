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
    "t54AszMSGgRPVkzAJhyqcHSvQEMHciAmWFXNQm5Ps4oPtohCyteXxJGmoyRmgTUztZVCSp1z4be6xqYw587QxX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HKJ6n1j4a48AVKzGgVsn5Q9joo5FRRzdiQKFDJiYvDyXbQaJJs36nX1ZvjzCZCMn93RCS1rg23LuVWfW8aGRVB6",
  "key1": "4Kx4rbUTRJgFjZkFYgEeR2CyCtag4XyX9q6AeohwdbPJzKjU13EqTzDGakwvETteQu5ctWhAuAgmeQrdQchLqw3G",
  "key2": "2k3jgoaaKkdFW6TfCbKsyd5uRpfqgUmsmVjriiNkK85sx6NMQA91TZcdJ1C5PKwrLYPteQPcChSkiUdGToLMbs3s",
  "key3": "21tKqj31p2B3RvtEbLW2EXyGJpXm2zKBGeebrnuF5P5nNcr9e59iNosNyUZo9kUsuNNkPmz3ppnc1aqjQmj8cvjK",
  "key4": "5RSPhezEdFL5wFKGBjcpGDRT5W9QinZRQ85TFSiE4216mKR1fimRxL8FUjTA8LapvS44TFEG3C5NVQB5Yr868275",
  "key5": "2oc4jgSVBfagj4c3UM19v7VMsuYGaHRBpkuUBJBhhesEdwdV9zypPLSaETVih43wqDuJkPRZRG2iJ4dQ9zGhmdnU",
  "key6": "5UatN7iDEhnurGXvoJoXYw594wtmtLjxUZuZTCQjtKbdJxU89wXrgmV3XL4gkegffwpRnWmqiKfhZ8Cqvb97z1sj",
  "key7": "5dgzDBFVLsBSnCkn8vunTsqUv3tnVM8dejNbYPrzwb5S1E9nBhfd8SjJHPf8tWyiPJWAfEVHfSpTBugF8cCRind4",
  "key8": "2aeh92XRVvjtHviXWxJQsWrDu9HuyL6g3j5tcNzM3kSJaBcJpBJVGdHPsXp4d1KN14eKRJxX37suXJeF7C8KQ3Ti",
  "key9": "4sU4udZjddpDvmPQXM6CQxYux6WNj8ZP2yT7g7UKYbMmcFedqWR9nzsBLSGkhs2DsvBnBodfsY7DjSL3sb9eAvfZ",
  "key10": "27dPXxuwDFbzi75tLUBDUjTzWLwm2JsnVacFcJhyx68nBPCXsWUU9U6ohpTshBiBCcTzZDA1wD8iKqkoLAQ6SJ2X",
  "key11": "sCkqXCZcJqdWAjgDQmUFLwSt6eUT5UjoKHxkLLCi63Pp3NMA4tofVdc4cpaiSc1B9U8D3XZjdduF4wqHuU4AP8P",
  "key12": "4w9v3vfujKDaMuyXPBKYBvDY2jaSkgZyNeaeUUaxMUWZad6Q6DW67PYYqLJrcDrLaZjBAnr8J7NyLRTp1cyUv8zb",
  "key13": "4w33bMt8fBarUXB4MXJD8RyCd61eqFEKRAqVuSRieGaHPqegdK5bXVh9CTretmiEty4JYRR8ofWucrw6U1sK9xGu",
  "key14": "4zqYEes42tgbAKzYiQZBXwvx7jg3DkWa4UW9ATq5U5S5aJtrj8xj1ME2k8bBJ4Bc8QG7ggVBfdspmnY8SQ5CuYbk",
  "key15": "63zU57WjFbdA7o4Fat7NVUwxTWkMdyB2KzqGjgvU1Me53xC2XzEaoL3G4P9eE3WxZoD353EMbKCjUMWVi9NntgoZ",
  "key16": "22RdRxQ2GKVrYezGnWSXFf4wk8QmR7dWJZ24xw69KtzBfkqLDryr1XpFkiucNfgREp8L8Zv6caw5fWr8paFFEFLJ",
  "key17": "4n4XjGPFxBTYiKVpoLonkyjiJG6emFVE4FGXppCLaBy1zwcgkAPJfvCcqzsK6nSp3VRgksmx3jyD9T7iuzut8JFF",
  "key18": "3bKCsRQhvJnpCsR3NTVoXwvfuYe5AKeTqjcUghRpAE2Hi6w7NenDritVyBfLrBc2Xmtx1JqveUjSbkDaqX725TDV",
  "key19": "2hhkBpoUDmKL35dShxPGDQkarM4BYR6gniN79DHJZSurU9ENoSSkASb7fji3eP4sTqGEJqTWERP3bMrXNQLDTnfh",
  "key20": "2KDaVE3ydv4KdH167oz1ZJk9wGxp1JsYjsfQDymV2NTeGnGBtPA7DtxSJjB9Q268wERzDBsWyBh3i53T4WfDfnzr",
  "key21": "5v7gwZRUm9xHi2Sz4tEbkuSKeJLX6GN5xTMUA5LMR6GrPxtMjAXXUFPJ7hwMknf8AWKPymBwSQbuPm9kMHvXtNJ",
  "key22": "ABHcgmVh1y5gVzevsWE8urzxTte5vgqx7zDKXfpqh8ejk8YEqGdjkpk4JLF8gfoyKqbEQKtL7sw9K1Lpr6xXXzS",
  "key23": "4osPgd8Cip2Sj9Gwp7kQheDDaDMdcqzebT2E7zrjSeNEUUagPS3aPvq77Nz7j1smvY5yiboUepZY55QRzMHsFZfL",
  "key24": "2yNupGo93KiVCL2HDB5pLCabGzH89Uisn1Hw64WcPjDsGtPRoa7ggMdoc3aq2itAGdNKoa4A5XnJseTPyKxB1W63",
  "key25": "46T8Etv2RvfB9ncibEeaSYkEHCBP6jxrfAX37GRgNcFVmFnxPMRNHoJP3dCL4bjsSfRAUKe8ArCGz6eRMyEDMmc5",
  "key26": "2guw3swJDDL4sYbVxCyEtfAEEW6hHomDiiq3GcqHvJTJGgm8NXRzNBs4vSxrMybnqChd3u2EzgzvMnfpimvyC4Dw",
  "key27": "MxPRxPFpfQGGL9N4RgZgTE92RzUgqNbw6eWDZxCkUi1WqyEP7SYxreoE68SNTJEooXmZoQ6vkWhAzX5vDUUVvAi",
  "key28": "5P3QpkTwrc7h1E4HAiHupwJY6nAUrBjCvsuaN7NFPejwTSssz7EgR3n7qFCuMQiERBJQZEahN31zdamDT2KTPR1r",
  "key29": "5gHzB7VxhhCwLKPyiYfFgoXkQb4VaSCeakGLakokD4oPFH7wDKr677KCv5hCtdz7cYvkE9WsT51vsqD6E9NuigSz",
  "key30": "3gMBv91oWPyppeYBDAxqYpuC5tj61y1rHw4Ro5jDvT5yzQVyXVHYMjRzBrvjyWuVe7zGs2rdsDuUsN2ky7ygfqT2",
  "key31": "5VyVTrfK27dyAuE3uLQG97SNwXsKCKXWUYDXqEqHmJjvEY89D3V9iJ9UHSGji1aVsMkmcu1dtXwV3hbhmucAFP8W",
  "key32": "2DvQy4z6oFm9AZ18dUH9cdybpGGHzEhyD6PdkQgmmZrLTFCCKTuhn5JF9sYx3x3B677dmaejRyAPYzQbrZJzfq95",
  "key33": "Mc6GyCefTkENZQ7APVQUzM7E424ijhxvVcPmedTkqVFkSCyiSpSjHtSJ8CNpn6CTxNE33CxHP7HvWt9S93pBdvR"
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
