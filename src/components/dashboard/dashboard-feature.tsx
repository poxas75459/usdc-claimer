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
    "54kqn4bWPwpKBJVoWor6QYVzWLheToEbXpS5UbT2htGzfQfF5vsBpoX9X6Fe5LBScQTRhL2nR4bMjTRunnhHwABy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FG2Zkq8mqPxvQbLZYWHKk5LRbJxDfiPtPvrhnciyg6uwTagEfpf38SBv8e8V6J6mDU8yD57ZNJY14rnW2Gb1RZi",
  "key1": "2N2YJxxUUgSGZZUEhrcyvyEHn7dVsFbciiYHnapP7WiUh45jD2NmAPXMs4wLtDEY7KraTanp5uTfAv76aWCo7PEx",
  "key2": "28qwEGf9mqhbAgjRn2SDafDn7XX3QvhR8MZn26Zib9RqKk7ga7kw8zr7cdZstK7BFmmyTH4iwLTX2WttLh24atwP",
  "key3": "4sQAPffhp1eLjpvdyMS8N7qQnrMx9yqtEdbEefJTcJSE4548X5DA1CUaffQK3eQ4K8aUgk9niSSXBXAa4HKz56Eu",
  "key4": "49ed23xaWc9kKyEHkHMG1WH6rkPQjF7Kz61qqNiEQJNZS1ERpSvch4GCKf2VMJtVQS36uKkFHZeTYk8NrQfmdAnR",
  "key5": "3GyZkRQSkrRSdfUcwR76DzHrSBcpmFPysf3bvvExAJ9z5e5i71458aTX5AMNESw6LK2fyB3M9t9Z6gdp3fspJwbP",
  "key6": "3Juw4BbD2NAcT7bVWgWjP74eJSacufKV3rswpmAvTJGKbdeZiHNNUpBfe5XAn42VBcKfMDQNbNjSGKLasvihEcXm",
  "key7": "4yYwiwi9bFkQ89akH5JGvebVyccjfKrWJcA7K3WYXCn5dkv4LEScRnW3ehEK8s1L1b9faPbrnZrap7Rv9RBMQcnm",
  "key8": "EHMcnpxjTYmLeWunqkf4e4E8d8gJ4H5HpAYfxssu5FkZxLwFrTTopxpWRZp8J7uRuVAY8QfApgyPpRSopBqrw39",
  "key9": "2N3kpBm9MSggPTCYtf5PCLdoAYnrFvXk2iywgwcwVm9mxrKNrFetv4zt5dpEcza7ZvWqetiS42zRDg2HoZ3mUcVm",
  "key10": "2oJLeCqW1XhjKLWdWdxjncRuncnx6DWiKYS6axkS3wpoKyYxqjJ3bsZzHFMWxJCi4smb19XSwGVbeDe522e7tah6",
  "key11": "5y6Y1yKA4G3LxgLQNfKTx6QYqfep5kQ4Sghn9RNwXGV9D7Knss1x4DHqnYmxa9hkYsAj2Bv5UEFhiywZStiS3Atr",
  "key12": "56thw9qt3gEZ3FR2rFyp1cK5SpttcPXx4sDaF5tpLYCuw5EcU1t6mpuizg5DJSGQ51XJ7Ty2cSakKMkaE4mNg6ur",
  "key13": "4oZiNYrXoLdtr9wtFwejWR1C1LqRVzjqYXNokLpWsFJq9BZnmQrEZyXrx5NPiofKJhy8eYZxTiLL7YVzio89wtHY",
  "key14": "2KjMMuk2YcUoHbU4SshN9xQuFDLjWUk1Rz6Mv5eJyhmjwn6uQq6QxidfeFrZm8SQvomZPpCnGZ8aX6FqBEBLfcvn",
  "key15": "4vhAyXVwFEjBUgMZ9nNjaoPCPbVDySpZtQ9txqmkLGMAZjuqXr6DFv3XCA6tEPsZbVea8QSmSmFtZcWbXitVDM7z",
  "key16": "5raQGsN9ixDM9tcXF3PXjJHAvFiPWKGofy6Le5dRsDJogWD5XGeTob9dfjBLdYB7LMKfQdUMHuQRP3wBajqMYMTE",
  "key17": "c69kN4RNpEFfXfDxFxiVxgYDJm87BgMzN6CTEvMJHHw8gqxDB7bvcy6BTtaSUuzK3LCEWo7rftLvsVTgyPo8rSi",
  "key18": "zDsBRQL1UYLXHkUXVrDtv2godByf9PbF3zjPoLGcuhGQsqoPFTxHm2HzJK7k4KPV5VKyLS65vdBgCjAaBnVug6u",
  "key19": "4R12jijfwJ8cp5HQGXn8Ffcd7yTNpL8cmGAKc3qFqzyuteDo6g1HqxpjRZvTkkj54vap55F2NJXrrWruiHzgHTQ3",
  "key20": "3Grva4SjK6XneRPzLYhAHXfbcXcsKTUvafS9dRjXsoaDTBzwEJqzRVNFsGcb5ZuBWZohYT5F9TNzuqCcufnnvawe",
  "key21": "3BqG665pQB3KKUexCWvAREyzQp1QRx1dxX1PEQVZpa84EBKeFuWpYwGvrWJdt6xrQRxjhdKeK3zmUn1y1d8yawxk",
  "key22": "2y7YGEpcubJaQJzQvtFdrWtUGVqQK2GmRaPaJjXn6nX9niCRKkKsABTSfS3dXuVgAr9ecatjLEb3CFkLCDBLFZYQ",
  "key23": "3uDRefSNemEZTfeCABrxYb4bTiHkjSeVKuFfgLpgyDriTTdxoq1nsYyxBMn51NPyY3ZUfzMpeorJ4Rg4fFi8ykZD",
  "key24": "5y8UjLQxwUnHP8zShhWYtkQtx4YPzN5SV8NDZ65C8x5bc3RYVJ71rRe87BEVCAaYo6UDMRBkE5bTUHUGk48cfcjn",
  "key25": "3ppRWajSJyibbMZ26D4qGUZydSCMb4Vd4Y5xojwdXjMBhMUhGodqThn4ame1PiDJ739GK2HSqEksGWZqorYXiw8c",
  "key26": "5Y22PCeQjYS5J741HzdMxPcihbeMWkKAJhchs7YHDNhQwE5NLhMkbDkPgmamcDDiZbTNdDADRNuutwFoUJra34Dd",
  "key27": "5CViQyJyF3A9RCK1XkTn8eYJSukg1eB4xHmPjEXKdjJgJHp5ZDsKa5jewzLN2ovtETZsASBMp5DgddovnEWUJoTp",
  "key28": "2YNstmZZvF5Rwws7ZoLPozYqj9Fer8ATdFkndW4pM1HdhBY39Cy7tFEVNskq7PzMJXoy9uhWG7Ejow1jrVhZ3eFW",
  "key29": "3arMtH1rX7HdPaYksJ1ikLfVEPfrH7dGPF9uMTW1niaaDNBsHY6kunaqfMwawPgcnuaqXj1UdmrCFthLP1FmuZte",
  "key30": "4Nf2sQzoVmBGqD998VgpLf7JF29ecBVDWTaebRbJpLkZjdaTPWyqZMhXBRMHJHCtygZKp5wUQSoQaki7pqqXJZCT",
  "key31": "5NKtUdyVGiULNinZEBCu5mRHXAVBdXUX4q7zdmVKLknQhtPcrfm6ubbS19ah7WcDizi4uuJv624XWhxy2a3jWoGP",
  "key32": "2YMV9Gnu4joMxFxEV64PQpn2KwH5cm1FetvpUX1vUjaUa7UvYUFg9wnbcnWdcHMyZhyHVR6uuRDwypgRZ6gT2vrH",
  "key33": "5rgh9y9dEERVd97d2BuoTDNh5oX2KSQu6swwTJLHdC4CGQpYaJC2An3efQAWnBDNX5ksDDXZds4j5hfZBBXtRgM",
  "key34": "2x8bHwcf2tmqMTKX8LL7KquD9rPPESznVDTmNs8jtPNpUwgwxJwCELQwq3tJLRXXDkgrYDN42T3HKoBAHE73rQw1",
  "key35": "2arokmMyqSc7aHV8SWAzBtKBnH68a5iuPQMvRzryBFbPbfWvKcrvXQfG1VNdxAzeENtrB96UMDaMhfCtZfw9vvYM",
  "key36": "2Avd36Cq5QJXN27ikKUa2rtVADfKm7c3Jw63bRZHTQNizj4xYZq8T19G3gEkuWiQb7KNBrhxhPtiKBcZZ3idY4qs",
  "key37": "51rfDSq4N1eTVWZoHiLSykAsGmrenfacNysuYyt5L6vQkZ2D8vtMmtU6DjCUDZcA6ticRG2iAYNdG1Phqi6qAoeM",
  "key38": "5MHQLqoWRD2v1xk6Zc1qx2NfnK6XtRik3Rd4ttCt3Mfq519h7gxFf7JS1VKcaLnhSpoi1unYjUadZ6y6pDaEq3aR",
  "key39": "312pAmDvz7SeDitCf9uxbtkb1t4BxCspg4AgJen7T2qghH9UKdAprJqhpAG3j82gMqrjiKwTL6GToQghLHJcKXws",
  "key40": "49m7VDVGGdu3pY42YxeMZgFKKiKZVRKpgBxJqeVPJTdtDgC1QBZ3DJvNjBXoQN4q5YaDsiSiGmdfWKKz1ye2iwcD",
  "key41": "3Gw2JBur4YUsoEd8cQwLN9AEUvpu53S5yLbENLm8jWYKVfyy5iqpE7GxuAU49i2pTR7b7Y2vhBXmKEKcbeKZCQeC",
  "key42": "2BJcJL8rWKfcsdrJwPLwJ4H8oouNNGTiA7KvJ8EVbm11VJfwh111Rz5zfV7VGR1RUah5QmgeZKWNo8ohuLYVU993",
  "key43": "5oE38cZhFecBi6zsZ7eFDx33Q6NkuxqgxZtCWWMD2oLDBRBf6Yh5gPaiWxkKoU5beprsjDF2RyN6nWZMVhaQTEAi",
  "key44": "5aMGaA5dBphMnB5Ze9XCwQESvc5b5mq8Z5En9D5vU1BHG3R6PaBYfHNUcFxKMUsZhLV5h9j7ZHdYqZ9foh9m4SEs",
  "key45": "3WfvVkPT9ssgiw3jNTWmiD4kDQkt4TZCeha8dhj7KUGRqmKEphe5zR3BAMkotu9Vo7KQR9yjA8MPAAiW37yg5N1D",
  "key46": "24nkMCNZz7TGDhNNZJDtC2dzpWMGRi33KhWDgiLGp8dYFebKM8RsEn7CAJ6ectYsyYDtCiu5PtuqVEiSskZjYN8o",
  "key47": "2qqR112iT11j4Pq4dMP8sR3kpMs9YyfYBLrZDYSo3cs7sHyVFUFNDU1RvcLfdEVykRVVfMYR7gSqjz82oJQn2738",
  "key48": "5VE2QGRPZZcmZ4sdL9ZUQCScAQQkTntGAMehuaPoe1Aw1b4ek8WVaCgJbYGJbCTEm1rKe8GQkwaJ3vG5thCp6KUm",
  "key49": "3P197KgVVKyoCuCY7EuXHPryzrg4GjtaLhVEaoBeJrkrDYXaUcaxiSshSmuWWHTZC6xhneCeYuyMbcY6mVJDyBwx"
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
