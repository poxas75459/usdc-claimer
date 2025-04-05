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
    "kHgLkDv9C9BPvZtYLHtbHn886nTQo4CYhLWL8S6XqiEcVCZn4RsSw5wDcsMYArsBQ3HbpwejRxctzJQmaC6VsaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8P6CvH498vvzqe4FFmzRSyEYDUxVpFEQ3z8KGaqGZUdBJgUHoU3rPiNcKuU3bsj7KRgR3NquqaNjJY1PnmLvSpJ",
  "key1": "5bzaAuZihTTpskYzLWkS4uBB2SDF3Wmws8saBGXR8Kg8tovv6cBcFDVDzicAaVBMKDFSzfuqdyeXHAHCaKJNjNwn",
  "key2": "23zGjiwsZv9sbYtDGWK5y6MBrew6PqUaCuDHGqen8XqSssqn8116an6ERbUuK3Ffctq7Tbx5whvXgercQiUAAuNB",
  "key3": "5xXmKGrwRFpt4hv9121qDinFWCVsxjb1ijYfBXju9majH48mqU56Srj4NG52dUgYgHNNjo73XDN7G9Y1AqETkbjE",
  "key4": "XKAmNeteovh6BfSKtYFzv8KTx7QgsRDomC8cfyzCVriQ6smeJ5sP4jwwoSCAbzrdRzeKTMrMDdY4pEULKuyp45x",
  "key5": "oEG97tutDEhKykYP3XkVqKZnEqVsQTZ2ymtbscsL2qC4RQ6F7M92ikqEfsyPKZf4smG28XtSyppfAeERbwHnBvn",
  "key6": "4mHZtA3RURYDFR4WeeLX6DHNEJCYtAtiS9ZUXBRf6kGm2buVC91yGsLjdMFRVJQcFsEVXkQM2d2oDtdWnY7EtdSm",
  "key7": "4UATBaBHRFLaWvzTUtqGDNTvQMTN1WTZDD9GPXjA3BMZcm9f6T6XsA9AYNk16Y1BR1qRe5hY6xpyRaaxv1tUEFGi",
  "key8": "2dZLKwzssGdxLtPgfyKb1nN1ZgNiAHS8ao7gxHfQYuTGzYBa1mQbAoxdCafbxE7dhzQd2tMcpk4gaTES6HV4rASZ",
  "key9": "2koZBaLybe5bEY273wz6b99SUEsoBnfx9c776EtkGbz3Q6QSK2E5FqzMBTy8dwvRHMornmUNRw8VE5aJqJALMbmw",
  "key10": "3komEnEEaagLkfiZXRUFPjxkmEPwdj4XxYhyHBSvdYn8Fa3UsapUMSqAhyxP83JiSqEXNP6ZkaLWVaAkVBwekpbm",
  "key11": "5ksxtdH2uqyVjfYi843JsjRrMjbwwfBSAuLLuY3E5bG9nBxppaeQfLAh3btKEJaDbJB4RsLTxAtSbMJMp8VU26zf",
  "key12": "4YB19AMrQKvLQEGTma3AR5TJbCQRfAZ5HWhgqEiafxtbxXNuuwhfvS9XvKaNsH7LXtkWhEfbdSrXpukP7vy8Z55q",
  "key13": "m7BbWLjgAv9esK3cDMLeP6LV8r7QKNghpazDCJR9xiFFho6shTshDJgd1aGLtPZPiSf5Sjf27fdRuzNK4FTAcSV",
  "key14": "5wVym7G9yqzFJ2HoMJ5daJFsoRNQLNMsEB3boQz4voAEGF5fXCgDCunbfU13K3haLDkZuXMDqPGTjuo6UU3UzDSo",
  "key15": "4iNQmfRDkFZVhaor3A3HiANsBTeoPstKbTGtADVT4UVARz8bMY9ZXWnxhyRWoxTem3VijdhBaxEM4Up8PJwjBSHG",
  "key16": "2KqQyFKPyayYyupwv8QZpoSm85WV9EzJuxDfuFzCuLsdv6kMHKzePzpkedyedChmxvGG7RqMyr3Eqr7xoczbPsdB",
  "key17": "2oA97s93P2obGYsE1RHcYnoarCGrPmiGXjD6maSD9oDU6uTqMND85CjXn9AmrAzNgxitApWmzVi7teQNkmarXX5V",
  "key18": "Z2XnWbKgtArEZS6GFzXv5zUf82oA9qSyezYatopwhTtTSBX4JxwwuT7runc9wLT7qm9rYT48pjpvGYxW6X8UL4Z",
  "key19": "Y3ameQcKKdLUk6YFgxGnx3ehuh17qVhYqJ6FoeHty6pbfSYbEcxYUhULP7NCxp3NQyi8w82A8fZ8KZUUt4HbvTg",
  "key20": "2YnF3giaYEHBVfhgDMU5VK2M8xCsLwBhcgGaGuR3b2G2Y4R96EEYAXFkC2gC6y6FsDUKnPMJUG7F9vFQtfwWa5Q9",
  "key21": "4CfbCJdDab4gcqekzHqQYvgxchKX7T5p9WJRDy8Y72sroRwrUvETCUMby48crnLRoBNn31YuvgUzFDS1MJ4Ra1XH",
  "key22": "5VQTNpZCpKgkPF6RUAoWnD6vrSm8ycMTcapot4JhMj3DcNcUx2tB3pLdrKjzDGYFCfrgMm5f9h1FaDHKkZ2CyXRQ",
  "key23": "5CcrMftrJ6SWy5mhdgMVFcLNCW7QsdZMFssNb57eA1xo1sBwSkkAfATYRaPRfRbiXMFEoQJgdRNXriu2jwyrkczA",
  "key24": "4XE4eTfNK5K6mwAt8GCuZDcbqDBc2mi2TvwgqRY7c1jX12roGscGEZRZ9gPtPUNWHw9ueYQ6aRDd2JSyZAKKCnHx",
  "key25": "5uHYW9ZfGDBkt6bRddY9homJsKa5dJib6n4PTZfQKSLSG1c3EnL6P23r8LKX6mPN82AaLjSjNZAW7yry4L77JN4z",
  "key26": "qQiJVyc4pYzMrYmrhR74jt8asoE893d7Yoys9U4XWBPB6PgUoXSMKbBfnDWskZn4qQSQF41GV6Xmjbzs2rkTUpJ",
  "key27": "3bMo8ANxTVSApW8v7vGntwWBUuYj1YLEAsJqJsFob9vdhv1v7YErcAcvChLt8vQVbvxhVZf2vghb5xAsd9KEGGBu",
  "key28": "3CLxBNcPN9DEjMSst3t67CkWnfMh7Ng41UmXEFT49taxPw2W7JPr9gkX2sLMLHUaSM5R1KbHSKkmhgLxzcNfc17r",
  "key29": "2sxsY9VTfrmvSSDuY6p9ttVtoeJ8wMLVmMJcnj6eznecwBYZsLHFGQZm7gssFfLiUs9oPWMQFKFBWcatjDDe2J54",
  "key30": "4rDozd7na7x543xrpszYLAVG57JFLk3GfJJ5dsA4zUdF65ZtzSxkpzXU4HxhNxJ2shPGvj1fFyjTDi4XFNw7bwEN",
  "key31": "4z4mzdsH1jQURqUJ9uJmxDk3maYyB2Q4gpEfQ1RLvQPD8xRjHQSS66JJuHJVMbkbmBCqX4Uoh1DnvA2NUmb4JP3S",
  "key32": "23kTBZL6GSgD8Ev4w1i89DAR4WckLnLhwwuHEkKgGeixoedgcssCXfwHACenddvcRGDq3tKwBjrEY7F7iTgNu2HN",
  "key33": "5YSYj2pv7QQYDTPy7KVC6LcUSNwNnTPktpqzKjG8A2oWiQHkF5f6J7KsqV5JpEMBEJfi6didet6rdVgbrfnmCCnk",
  "key34": "5pxGEu3UufuEsCwwy1Q4zYAVqqAjmJDh2TQ69AvsBwDZP8mVjYSsnwN5yvwGFLUoQLniB4iZ9GaKB413c9zB8vbZ",
  "key35": "4bVfHiGPus7hpvYMX5kcQy6y81YVg44XFugTtWS83jvQBMe1LyEWoLQfnC6UjZcoUsMjqAsGtbXAUTQDmDpzxWhx",
  "key36": "iXMrxw2ugFwhSdbYBkHtJvFHK4pm84KmiKKkTSDqNe5iX6omM4t9XKeVqEvAJXxguKTXtH9rfs8bZAkBkZY3pbH",
  "key37": "2BJZwx5GZVuGSHJ7yGJMUZdABwJ8ueq8hbLYDFohneUccGsPHaRzP2qf7Tcxf6aQTu7ti684XKc5PuesLCAPaib6",
  "key38": "28zK2WHhkWjPAYQvR6DQejffPwzRQbMti7GSqoBFTe9Hbz1uEduNidVJZj3DK87U1QPCnYuKs6o2G4GUStENqto6",
  "key39": "3i41hx7qnbonujiebV3tECCcShxLPoWBoUQbihiHvxUJXAZb98NsD4kDiTqxmn36ZNPCB9WhgoanySdcLLy35PjQ",
  "key40": "4xDRVuvVndhQr1uMBBUto1i7XtujaztM7JNPw4SuzAbMdFCbCWBCc4viZaXyqyvb64imJzBdLbjZacg3YhXhH6oA",
  "key41": "8wLV3tBW3RaNs8ANcTCjrpLnBJQQza6suebLpVzKjj73EUaJENuzZBmVyPpf1RiWXXsAj93A8GMEwSZB61ijvnZ",
  "key42": "298RBJn2nJx2s3rPF1QgRBHrWf26SE2T39N4DUtbvyJacAw1SFsiVdYGGSPV8S3crB1PADCAT6bKe1yVMxVCqvk9",
  "key43": "AJoMECvQ6zt61TVsftgpvNW9jHWRvrjLuLMLpybUgXCgN6pfvnEzhjy6SvmzKjuTNvwdb8MJ7nFEP5jSaz9M46c"
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
