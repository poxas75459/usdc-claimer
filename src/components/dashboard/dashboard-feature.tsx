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
    "3121kNeYwdPFXHSUYHXNzexHAJJovr3LqCo4EXtQarcUyZP71TBN7A8QZ3qp9Q1CtS6ueFh2fqtQUwR6ws9uJjjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUCSKiPKratxjfbmfdhiYYP6rrbGKNWYaVaYwGt4RbJt8FwUoipyTzxiaUyoipcbexpCy4pZey4NGacAkk4qfWv",
  "key1": "5JTcQ2P4MU7765tj4hpaCj7uXMYWNDhriaXZjurCWWMR4DN7a5kR8J9eDV9tU21gJHFWzsgUdUyHuojeqcx5yDrs",
  "key2": "SXgZGXKzNeATeEnUyG2aqaKmtXpFXEVrEQnZadNb9r39FB8uVPEitGL6AwCNe2B374pnhHPmENA6e8YPT7cSBJx",
  "key3": "5jaFEZFc9xBM2dHfD1KGJSbSzvreX8DnRuDASGjTc9KovmafQ3kabV2AWr1Goa429tUMxnschh2GVKvHjP3WUtus",
  "key4": "3zPdZizmGBEMeTzV88M5BcM4AQW3MxC41sYme9GJKU9u31Pd7EGx3StHhQU356nSkLGsRApctUZKQjknWMcJyNN4",
  "key5": "3GmFPs9snbdfMkf8HAYt3i37vL3yoAG47CqPqxyj9bKtELmy2JHFsvxnAxyj9aom4kiddwKsUD3Wc6oS1EkEwqy7",
  "key6": "4KQJWdAGfeaLYCKNsxpubCwD6sCZDuvuLyG11EdHb9daRPPfP9fY84kMqdebDvBHUQ9vFAru53T5PurLhnNJcBpD",
  "key7": "2JpoG3PhsGhMAGxMuDmSkKMmwgYR8Pd5iJaTrY9uJPC4pdRcGXp3HizeYKLHFMbYtcmRkkBxzSNDffJBgTfPCyma",
  "key8": "22p1EFbMUtzy9zqw648efuqvH8JLKYDg89QJSkik1PDS8uj4Rcynk8KxFyYiu89t7AE2rsQjmi5nFrdnbzBo5Yc4",
  "key9": "57AeoxrmVCExxmMt3Xk4h5eEQ43A5nk7rrcLW1UZzXNBu4BvwCXZfwkhpvgWK4x854Jv7jJoJE1iyGwgYaCXYQbH",
  "key10": "2x9YY6UXtQiu5ecJBZQEF7Qkg2zeaSr9UmB6sLTSqrhyCwJ1YVU4N1T5oLbDj69BiyXHXkResuisesjh7141brHd",
  "key11": "53DPBg3BmzevZwQDA19ZjCUzeEaUeKGhhDFBXMHnbsAxXGQpy4yAWZYupnwub3tybMhZC4RqH2VJtrLKjDAKsfYf",
  "key12": "2eeckkCaoSWsKD66eSEBJk9P4VJb6FuR6NxmfWVV9YLCyxhYk9AJf4nQEMRLrYKJCie8jB9B8F9vyxbm2dLR3HWU",
  "key13": "iVQbxiAj3akhJwf8MCZ8b9KJT6sWxUDMchhku3QcdqjunYWGr6mnqZjQjL3Dpe9Zeb5q2HrYaKRykhFNrdQHRJB",
  "key14": "2ZZCGLtqBw2styaV6DZdZCppjW6uJfJ44kL6pVsr1CbA5k18q5XTVUGw6TmemarQron1KCKpmEYkZUPoEyvdb8Sb",
  "key15": "39pyKbQK8AEi2kpquHEu5r7XW1NDJinAuZtoPQ9AzRsbZxStdr2xN4ph7HC1D3dgXbEbws69MGhe59kfzaUZiG5s",
  "key16": "5voVxy94Wy7YMjGyPph7JQHBsz7968cP6TNJPHXDgJoacBdtFxPTocAacs5PGatBJu7PFWoFebypJd9jkDFpN2Ys",
  "key17": "4yudHQv3ghp2eKCMnKpvwTyDLAJ3rragT5euvGeANSrBmtBCA1Bu84ULQfGwvLTwkBVYCrhudzrAbPs8GXmTQB3L",
  "key18": "5G8fK4gxkpLEhpMzBY1GRPRkxVsK7wwm9cMwXN3ghYWURLEJDmv9wza53j4bMXjSZnruoTDaHXL5xGo3QJYvnxqz",
  "key19": "5Z75VK8exwgxoTdcdnWNC8FwYexTt8T65VwkthV7KA1bFR5kVPGVGAGG8m6UBEsEUhdPVGzugdSDUHtVBELiWhJ1",
  "key20": "2FqUSWvUXbMqVa4UcVd3yiaxpqCAPnyXEwHZa26uBpbekoViowyURzXXWZWPvmRbXw1Ztc3XiLFcbrHcJ1EXAy8c",
  "key21": "4ZQo3FWXeSrdWRnYXzrn968KFmU2oYyemUxnaoaGQ6rLSxsnaB8zCdmfRLEXavjj6wB8cnDd4JasaAN5pJgk1rtg",
  "key22": "2eHYyx5dybciGYN2jye7XDGKBVKxpgBYSGPY51zUfeF2eCtuWFCnPY7jAwpoJdHSZLWHt5XBmBM43GjuiYmT7ZCV",
  "key23": "3AfdWJznxBMishsoy6NJuRHczw6tU557md4dS9fgYRqi3UuQZK2B7UTgUwhZUL7Ym8VxPDo7Bbuv1JWwBppGhAfa",
  "key24": "2K1gTtZeC5mSN6EeWoDmm9kriJCti7NdyMwVwMhgbxPP8vMa5ZnwARqMVzCgtNPTEWjEa92SLVstHmxBfpjcnuze",
  "key25": "3xEAPPNKxd2xeo3juneLdez7iDgLPtEidjpdFTmKBmb2vddZNyHRJJCVB8bs216KpvJ4VTvVEuK9ZGZuHqnhSKRT",
  "key26": "65r5U7ccYfT2pC6x5MSEVm1ZUXPKVeHtDpMoRymagpbagvWYNTVTjJvzmXy3GpRkfk6f78fzxMHDhj4cAbgJAcok",
  "key27": "2egYNProRErrEBqg2Hg6qPtAeWjKB3uWMMGYqygoepps9waps4of1Q9WZWY6H3jvP1jHjsxe1aFzrxMbPkviD79x",
  "key28": "33tZnPLoJvBncs5C8QZFeFvJfUgUY3f6XJWsjPidycmYsKJdeHa7f4nHYbycC2M71F2vbiUunPgAruMc1LBJF4g2",
  "key29": "5XYwTKNZSkzCezNQaBLmueNSRDzLaKC9CbF696xoxSYjRDGDvqapamFzbKpy1YmS49o7Fx28iy3Laz94vbAbgPUW",
  "key30": "485aNaEU5eB4KMBSfvU1XogAr517TXCh699G4ja6CarBmgYhe7daHiHsw5wKSnGM2pkeqPacBzXN2Qvd3x46owd8",
  "key31": "3rg4HSLyf43khbhYuei8ayv2SsstaAiWjjs46fBy9bG3Vm9NLa81AnQCL3emQQGsnx4an8zgJeURRA6QucJGqk3j",
  "key32": "Z63cTMftfufWqB65jNinGScbMCfh8taJsRHeqa5uda783yjqehVvzm5qBLnxeMAeim2CWsagVrP6DHxSiRqornp",
  "key33": "5xYWZH7x6FdzHjetZiUq8bKvaAyUnhNgbRdksP5QAX72Eq3zwfEPYfF9Jg42H7q192NZyGygtXphgUF7RFM3BnAv",
  "key34": "3CQjkzixDdkrjau5ojg5gwaBhNzDRU35eRPoHT27vwrRbkJtua7o34a6VdppveodKvaeLE5Z2pZr6yToDUsovCts",
  "key35": "5erRLoSPNfSNqNFreR83F3b7i4HDbjLh1sKkJtFDqdW9jJz5oVtPFyosXG4P6wdqREV2P35bba4mX5Ary49UU2Zo"
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
