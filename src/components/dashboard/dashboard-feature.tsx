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
    "3WaKQL3ELKKWJEXMoTZJTKhVtbQ8h4MugHSYt24bBegQ9E3UqaCnfukRFMdARvJzoh7Aday2Sh7TiEuGesqbDkNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnGBKWKf7JKM4AcEBs86SniHdnVC2cK7UKW7y4ic9Cq1A52SJ6YTuvDKDKThh6f1HwEc2QBa7sfhKanEp9PEh6V",
  "key1": "3GjTTppsTANaenxTpKGK3MJsQ9GsPv2tGqKXS4FVaKChLcPENLPXHwLQvUNcuz5JrjvWSmXsD5nVaLQYNfejEjEY",
  "key2": "53HQMwgKRF6t6kupanEVEb2Y1VPDn46m8apSHQnimxhpkLxKfiwxKkgHgLWapYtAv83uy9KjfDZyNr44qFu3dPmD",
  "key3": "opSW5GyNLqPu29gKSshrifXWdLLMkyxj6TswYJFmKShB5J7FdRDMWD6jmoLYMtVbsuqFZmNisUyy3SauNq3A4xz",
  "key4": "26ZU2Rk78G6VNffUys44rSevBxq6LwuCznvzejKkUDom1rEXKocd6EvkAKenb5oyRKrapBUzj1jC1uFjTJvpHXxg",
  "key5": "2vkYXZkFG68UqHKYkoBft5uRJQV5tMPwaus8EcNq1ARmtNJ8KXEp9UMmaWJYGTpsfQPNCWGJ18eX3i9o91yGjySH",
  "key6": "4Gp73TPUZmZe7Dm7wWhS74JdQ12ze2v2Wzvob8j2aVYVBFzMC9snhp4ZuhJ8QCEfhFWAPD639G7Xn7sdt81RnYaF",
  "key7": "4PWErUpDUM2eJFY1NfNFmmQRAYbeDBGM2eUtg38eYddnJSox83XmAgQxjQV5ACMTuDLzbw5vYNXnEtU2TKDgd8oL",
  "key8": "4zVMqLFv1NYvyyE2v1sH8aQZcAzGjcojvy2sgZ4CzmaSGq1esvfQ4WkyhWYfhEGKQQXMy5kLH6aysj7fvBCGFYpY",
  "key9": "3rWuhScsKf7fdeCvMwcpRn14BZ1XEhMqJqi8rwDjLDdbWfmGoa2nJPf6Hjc6zRLzcjiMJMUhMYo8BTNkjUyq6zAQ",
  "key10": "2wxuyN7PRuRZoCV7zQJgey278hDoiuitUUqu8m7Cufz3a82q49MgPadvQB4ywQtXmJMk45c8SGnkcMaJxLSXAMfv",
  "key11": "dCwM2wwm1gpGH4g6XeBNCzv4rgrjaX2Z7jErA1cbCRmkNUz6h217vYkmfjvdBVbo8YRGZUGyKTTncAhDVKkhLui",
  "key12": "SmwNBqBpJPuiE94NMwBS6NppTSobnw7ToVLXwuZEdUrmd7PCQM5q2bqPw5bRRAKxP45acSa1FC3t5CM4kdrXVqZ",
  "key13": "4XFbM2tQg1ofBwHUo87dax27Tui4Q3EjCERCwN9sXGPUbmumzq8AThkeLv8jjHQ33PJbZwoQAoAcedYtndAJErPK",
  "key14": "2cearWkBL7dXRNXvQ8kWDYAAmaV799NDdPzzx87aUZzLGgNS8Gow9oGymzrt2XP4P1k8uvvbamUp6Sn3cHsVXBFy",
  "key15": "wHLxgj4DCGNNzhB9sqPm6MrdMeBQ4SBy6LwNTd46UQ1sWfLYHLTrtAjGC9yUNi8AvErvjVyGeHLnCX1G5PUpdo7",
  "key16": "3HYpofCokcgJx5uhCqDLuue3Q1kZVNXX1m4WYNoeyjkfrw3iWkZPQB8ZM2LRMPj2HjNHWYHT2J25FH22zApUuGjp",
  "key17": "2Eh8KWQRZfZCXzBoVXU4mZvST4uRVHuW7Jc1CEgCfykW7815iWkpXezkaL2nPCjF8ns3kYup525bFHHYD97zD4if",
  "key18": "3sxFuKfoQe2gVVaKWuTGveYQNC3y5eyewR69UqNg9gAoDfuCjD6BTZFz9dKcgbeo4BRCJtDedKyVwN9WBEuTUsWD",
  "key19": "2KfH8EoxgGCVPTowQx9VTuAt4HfLgqevwa3WSsSy3YMKoez24BzZ75uW42NuGNqavpoN89cuMJTo6pXX2Vy5cJf4",
  "key20": "3NyQaDU76ckRL1cmhbb6DJzCq9oCN3jL9Sxc36eiyPATJfAeqhvNBBiiZu7f2ZWmz7LyHRoZtzUwJKE26uJEvSpF",
  "key21": "TivV4YJDj4AM8J5SuSiiCXpHq1S8Dqwr3T8v24EBQ4z5zeU1Q4obBQfzcCjHyBstAJXkXYVXxq2dqKRAHBhbdgv",
  "key22": "sSvHPaRpmVZ5USTSSxqv16KhjER2UbkZQrRTk59nFBYQHgM14sNwyQ3m4Ftbv8UqVBjbTd9TFdYcWTNRA4GNH3x",
  "key23": "3rC1EuA4uJczktwbn5AaC3q7SomiQob3yGz1iDc6qKPxBkRqQvHjAYejSYZw9k32KALDLaZdjESkwVRJvh87nJiJ",
  "key24": "3UJYC86yBXwewAiL1dqTC2FEbiGtTipF8G27HgKpGXKN5qJwEkZZ3cPJEikhnrGYEcJpFG3HJ1H6PPBeQJntpPs8",
  "key25": "5RzPhTUbsGRbugXV3TxxCBqvnFyErgxHS6pqmZ4dtiJzFnwVgdFy5dKjy9g1amx8Fq438GDziZTkXhQr42SswtV5",
  "key26": "4m1KwcKXAgeE9MWMmjvSReZ7yAN9ctb8mWhEF9UMv9UJtSwMvU17zoSsDKCkAFVo8u2iHw79WWbPHzDaRi1EGXRM",
  "key27": "5CPKmt5dUpnBp6fZTXwS1dBwahCgkm7jHCZYm5143sj5oqT3iUai53GwL8iUXKAdCJKp49UxHrLDWg2TgXAFH2vy",
  "key28": "3fjPXUtuPGDA39PH8c7W6AHRbQVL3Rn1eCca3hKtRH19Xtq4FPtzAhP2L5uuH3hLw7YkFYX1JZhsgUdT1ixc4oqm",
  "key29": "nBn8byr9ZfBsDyVPLnq8yMN6rx4A9zVNWU8Y4eNng1rYeMWXJ9eE97AuUkTQ6Km9XtF8ooJsV7VoNGEE4yj3M1t",
  "key30": "4LfYerm9xztF1kWDj8rKvEPFqnuXkaShyWUqwCSQj5KBD62AUhhVvdCxzsqzFvQXUyNhZVQse8rWyBw9WL11CMBu",
  "key31": "36CEeBF5YfN6wDpW3He6vxcDZgK7ipaMx6S1FgLuKbMmHG8ErLfjvkhHDFVmTaYF4FF6UEDi3Pwfv4Dc8DpHbc3Q",
  "key32": "4H1fAzVj6bZzx47E6kcbawLjD4kTZJPTLYLMus94fnntohYa1R3YqBJJiSx5eexj5hZ9RvDSEaFccHDPJTkzh2kG",
  "key33": "4LWnYYv9er3HUqjB3xkZrcTWzHmhb7iL8eiYvb19E6RnYTCVx9GFkNecFEfwm5x5367goKB5PyhNu2PTJgUARthB",
  "key34": "4eLN7zrW6wt5ZR9NJ2rZqzTNNvYygbS8mUsxi1hKKnwKJ8WChqNAwUArKdjgabQimQTUVmBnAqKgyLrQSdBji33d",
  "key35": "5xWNeYhMVFBasRLCERUzMQSXeDV1QwbBDB2SSvgk99g7jMixqGupFNzqwaoiHVPfnBaDJgVWmCzsPHodxw31kAUh",
  "key36": "4KzvGmoPthUHGixgMoMNK65S9VHhYyo5WY8qk68XEvgCCKfBZRpo1Mr8nVZpJYUXN69sgJsj2rj1v1WdQrKDKwsJ",
  "key37": "37MRPUq1iyMSPpwGLaKtfBzF2o2Quoew9SKu4WFKBr5DWen2Au4YndjXkMpw7dp1xeuiYwQHQFj6S6sBBfhFS9ZE"
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
