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
    "351EAfmXUXpTt2ftNrvxJMurrD2tztakBoBK1F3e7WLEnbLB4zC1BTWohwnjMvVP4msZQ1H6D921w8QmejjLj4pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amtbrg4Sq1p3tm46t4BTdnzTJD5LYqwUvVoZDER9jEiwAtQQa1FBvNnZT5oLT7ef1QNbyvYMg8YbicZhQNAt9jn",
  "key1": "4AaAe3pgqjJNGsJksXSgpep25NHPFmvAYVsywUZ4DRbJcpZFnkKCmrocJ1XkKi53e3JpSXDogoMcaQr31S1SaX9T",
  "key2": "3LAFjBRGgVa49QH92cYKXg6V8tSchgnbdDCTPcbVcwhc4R3sR9Nb7SbLDmrznmZr6cfUGc633HrEY6zoTNiqYWDd",
  "key3": "2qWeDBtX9AVRhvCZDdSV3FVP3VP1cCBxvTd8H7Q6LgnX8j9azgAhsWigGYaz6z5bsS2k6NgQpJHzbfhLhANj5Mob",
  "key4": "3bL8vRCiyNp6MSX6qxTRSJCLurXPcjxds6AoLSSdaZSEEckCRns6RfVgkCK11AGVjouLaNVqHYmPbQfQrm8ozfx8",
  "key5": "ZrRX4AdabKDHun94tKuvHDyr5AeSzZAM2sifX4DtDrwRcr8dB4uS6fwLXKLouz6wEcaAsghtDuJpadzcGwmmzqz",
  "key6": "3JGJRq1qWQ9puof6NNACxBsuMJkdFpWxsm3UoW6oK1tFVvwQPekZyFGzVW2B7sXuJUz4ijoeBtNjEksjKnCe21PZ",
  "key7": "3iwhPeDuimDkr3yfGz8X4owV9xRHBzAxXbTpKcEP5bFy8upvrhdk6BbY6b6b2RzARhWfR8G3B3zMNDqL5Sk2uxYX",
  "key8": "4RJTKsQNokx9TgqKnB9yUHXiArwotdA1G1spEv9HdEF4S3tdPM8vACvPztACxVKTVP5Yy4VWEh1qypQ1UrMM5SPe",
  "key9": "5tRFHfMSiCYHXpN9MXp14SEaEL9Z21tGCb7r3knUozYZotwuZji9sRBfEvP178qBGVAmpAqTABgLQzLwrb4oa6TS",
  "key10": "3AbhcukLeuMhz9FednMoxYzYChKnpyK6JwMgMdHqhcahsagrceyLe7yXmjmUe5JNymE7MnjHZgNhRwU28uDCbeVb",
  "key11": "3gKKk4andT5xoCjnQ19P4gTU18fuuwt1aKAM3afW3s9EW51zXbQp2oCrYRUJTAnRjyTUcM2npULAPU2o5bymCsir",
  "key12": "PK7B3nrzSfqTiTPRDNhzwSLtUtMCTh9jWViTkZ8zs21QpjpwnS4Ld3NS4Mj6FsJtnzfvpfpUk1Yb7mu3K7uBxPs",
  "key13": "4fDx1y1EnQXXQE7knyS3hqQTx6EXDgDyvVQB2pDrnhYtrHbhyUBPAJNWHQW3C7v7zeHSkTNYYZadqxz7hntGf9SR",
  "key14": "4dkDzEEtMSuTRdBJxy8JrYV6U1vRh9rJWPGx7Ck2djBQdz2sFBqVqC6ujz2WRDgPTGE3fMHnatEb18V3HAmoZK1J",
  "key15": "2GtrEt7p4Pp1p4h5Cj9uG8ZBFv1zYLvcjzbFvYR5LjkovSencGMqHtkdUHPS5a8yYTgJqd5fPod3KfvehToY7X2m",
  "key16": "2dGM4HbCPQEmpv1x4rDyGNujvpvpXJR9eqJf2UGWVRugx6vtrbym39urJ4Uk6B7X4VHkDL3w1fCDwgGG1jy1dUgk",
  "key17": "5U3MJ3LuQsNq1TjSet7iRHCUN5pnVdFwA3yPqo9UY6AFhpCxQnjVhRKrYcaSmNWnZG6nt6s4yfu7E48Nom41hEeh",
  "key18": "4RTRZpfXtGAq61W7thPUZ2wVoxmp8D69efGArERSdfeedfDKZ6bNg3VZ8bDFBxjRgUhN2HHaQ94MVMRd2etsCPbJ",
  "key19": "JmDhgU7DpStaKyBi3VSpjuQVRNaXR53J56TJN2Gkd5wRPVKbNyA3BjkY6sxwLnWZVE9AeedLYbAJY4Tdn6DmhXT",
  "key20": "4TRmtwUSokoS2nmuGgFkg9KuKRyR3k71iJgHHmy41RZ3paBuaNXGechp3XQoQpwVzCNdEGh7La5s9smciNWaU3Ff",
  "key21": "3gz7isuJ6oVFVG1WuuQnQpFob88TdSr2a5Fimf89heySKJ5gsBjBjypSiLHHLzof3BpJMekzbg3pj2MwiSrGotaz",
  "key22": "7rHGtDvkrEf2HtggF4GQmuzN9a2LpkDjBfk4TvP5EsJhCA8juAbDMrEMQsv7pHZ9rDtnbwyKZU3TVXUEiMAHZtp",
  "key23": "4Cnh6kX4G5H8vJgK8Y1wvkPcucqdvZXkS3TBPHtA68b8kSp2Dx3VqxdFSrz3k5pY3bK5LjHmkigbnP2LMFqkLKRG",
  "key24": "2LEjidrUo49B9221HMe9FyvDAUVBTsaQcKBVtptTKPrVffqxZb84FPdjsr7P2zjfPqY9o3NKH7Y7EV2JdDiLxtz6",
  "key25": "67JpwyJc5DDgidmB3c7FjS414HsbUWFPt5t68jka1qf18YbR61KwdTYqt8XZvnA7riw7rBVtAk8Abhptf86fu93i",
  "key26": "4txxRXTaz2qh8nQ5PCX5mAueM5fLgo5vZDhfUpP4iybkLjuWVSDyadDsUjZm8xPENTwJvh3A7KLyUFiUudqN1LYR",
  "key27": "4cfGjSG6E4gakWYnamceALiYh1QJmsdrZBtNVxCgX8qKZNEj2NZQJgT1LRDHqso7PPd2VMG7Y2wP9hKHqbu6fqLL",
  "key28": "2ft5XA7VFe83K2az8gBSRTvK3xxsBAiFYtsjXYUV1UThGPYsmFQyL12DxwCotHGBmpvxhwz9LbupfJ9RRzBgoiq4",
  "key29": "5iqWJRVVfLZ2pKtPcdGESahhDM11YZUj2mN74nbnHgxWNjXczevNedjeaCGXmeVss8usNCJMP9NF9oeGtzQtoMP6",
  "key30": "5ysBVWi65xC8UHtXwsvQzkFEDDRTmSwtCzi4Ap88Qkk2HQvKEmdX2A6P7uk2crvcEGZ6NuNbvG5Gt1c5e11YMyNX",
  "key31": "52SvB1tj4qcoY9KU9PJak6Yyc9snjSX3pw5nJ4Nokw67Dme6Eq97yZevxq6yCfWSJ3fBZtkrPfhyuTTC4Y4MCRv3",
  "key32": "FSMaNjw5Dsspx9uBTtYH4k5TWoTniVYDj2rfvxZPkj6c9sfCqsPY9dXmtRdebL2nk7ra8vUAoAhxPKhPueFB42u",
  "key33": "45y6ui4t2SsKo5u5PwGWmSSfZCYMz8jD4FxdJCnVUKpLaXTVAcHnxj8qpLneBjYBCuvzCrQtqfGhALmfyoh6vsxH",
  "key34": "2kCeQMWrvFr7C12KvnjHSWSXgTszCmUy4bshVXuE32ZEP63ak4jTjGV79tPTLzofgG6qtAJJSCgBUoxaVwqseL9Y",
  "key35": "3H1T8Gb9yPmEqFLZEoMYrHGdFVsw9fU3Bxp83Kfb1VTxHsfZMXHFySKMqUUC6cSoQ1ZUepQZyj6xfv2D49bw9F2U",
  "key36": "qiQyJLz8fZLM312ipGJVJEDKY1qKFTqfV85UQE6fNPnfG8Ke26LeH3SCqGUMcZMzNiNEEJNavfEAj729GGDpN46",
  "key37": "3bgJ4cLgwXe1anWLWpaAg4MWZYLWD1AAEscHV2N3obRX6fyW7BSXo96ayDvsNEHjSkfbD22uAPMEDG1JP62JjeHG",
  "key38": "5bVS6uC3Ky19c8Zb9f8obkNgB4hpM1aaeRNFsGRz2bHQZRV1rPRs3nPLnuUh14B3fS2t63oEhoHQATUvKCycjKrt",
  "key39": "BFFPbP7yyyuZfxWNujPGsDzTTjUwghiRTYN3AoCFueUvbzkpBzqoE4uidoq3ErUBzhTbzL5wFZKoBNuGhrrao4z",
  "key40": "5YC1fzgG9qQqtBrhUgR9drJECDtEG9VR3ZU1SkcYXspTYpxCjBmGk5M7jCkeMXc3KF1JHDwsTdSuuMupFiFqcudC",
  "key41": "5h7mEfDo6kZ52XnJ5EkPg9PtDUv4zWnhLCAMJaAvJX2Y3fSojHEw2foDYFUQ4pCq9nCeYx1Q8GcsQpjgBZGtKCMX",
  "key42": "5B8ypa2ESfPvBsB2qk1VVCP96XT6YYrySRNddKpeRLWyKhdbbzi19gzreT7Nks4caMVBcfaSCRUp9Tqg2o2Tip3j",
  "key43": "4dycpCxSEN7L9dSgEga1msFhckTR1SJDNmhN1gnvyhUrHxTz8EsaquvkK2K6Kw19xVR2Z6rz6VLkQVCiVAYSvkwV"
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
