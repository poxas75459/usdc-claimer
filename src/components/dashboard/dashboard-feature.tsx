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
    "55S69sFhXpArKs23dt96FfRD5w3za7Y4aAaiYhWcjNUw2Ym85QcKdGwBJLMniFrQ1bLK19CR4KtRoZC5Rx4fT51k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQVJxrvjYTATSY7HebJ3HdLsmiR8QYvT9189ZCUvSMP7vHv9AVgr7TZHH8NgbWFyHW9jRc3QeMbKcHe5AfaPMx3",
  "key1": "kigjf3te1SVEmxkda8zixyuzJtVLQVhEkeSZL3t23sxeyWWZGRuMXneXuyNa3TfeNET5cbpXsmaopKE1MpzGYqU",
  "key2": "43JQhYMyTiaEyQxZTLmzzESkxXbdy7cfrD8bpU9yNghbox6ST1QMrGVzCgUyJwD5s3KHs5Q9R7Gehrp9hhYF8TzY",
  "key3": "36uBEzo7m2Kd69Ubotmc6xY68X717KqEUt7Z29ih887tWB8DGvXVRsUPWjwA7hjg7td3RdfhA7Y2EeMaGztF8GfN",
  "key4": "5QaSDkShrF1fZoUUaRqJUc21v7mGPAeGmay1H1rQghnnQnjfwgYZxS19gk71ik57Hf4zzcMz46aJQzCiLoqN3iYA",
  "key5": "22uZVHbEmXs58HS2Pjn8nGkBWfzfLpEghoe4NuiQMei5XPu9PMXDksBT3ExqoCEypoZiPGbXzt57X99nWsWNbXpo",
  "key6": "7Kax6R1WTXfBnEjNSJ7d7XRShj4wbmGjjTrzsmcL6EmU9QYVAxhHXAkyMdy3ErbQHNFQuSL4AoTseV7a4bWqnMV",
  "key7": "2jBgTt3WWbBVprmZhDmE7FGqdMTwfAd4UKxscV3SX7EmawLi7mLojiZ8W9Ztm8zhYhgyM42XzixejJ2Eme5V4Aio",
  "key8": "4jcepgs8ASgRERHvv4We8rkCpCQaoXu69TmNNC9ar4WSQpVh8W4kvDXmLEx1h6UKH5GQdqShUzbVHhUv7Fp883R3",
  "key9": "21MBvtBaLrjm5BYEND4P3bpJ6en45vwVRzkBVYePQJxXfhTFLWd5LcogJyn5zkhPLtR4Hky77fakWcEg6KZtmvLS",
  "key10": "nBexYyYLw5okmDgXgVh8gkdgqNpQJRAkmii84MSnkCyKfpR7wLvMyXccQJCikga5LFDdmAGG7UnJUL39CH1ZjQm",
  "key11": "5vgLAoV8Z7EUTEMmZFn1pTnQKjca3AxFgNS4oTauSMAKWhPXD5EBvxUPer3geiTtkveTwttRsiZjQ14AdqdtCDho",
  "key12": "5MJ71kMZWneKBY73aVrzfCh31NtTP9xWuafzDD7DM7HfV1GN8igZ5fSeUbQNu2m1og1jtZ8q8z89nEZbmS3tCFf7",
  "key13": "4uVrjtKXJCk4uZQDjiN2kf5PaXPZ2f2jWxkVNqqDAmLehToWSUDqbFTopS1nN68J7KDQDJwMHJWGAiCEEaVgb2pv",
  "key14": "5kN2dypsp1TgddbK6cqnmXJQid5HjGfLorgm9J9uiaPM8Spem5ASDL2qDp6LHrMPs9D18tgpD1bJhimo3f9a4PXt",
  "key15": "2emAjVA5SwUD9CLpZsxApu2XdnKSfH2WvXCBxHJyPsxQFVvb2ppTUXQ9MChaLsB1Nw4Jihdy4rD5krUmhc7Uu23f",
  "key16": "3zYB32xApizBhnW1FLXALC1ngYCaV6qRMSFht4vU8WDbMQhdsNkMN9ve1bYVAiaiV8H22Rhx89z9V2Hp9HFaH8S7",
  "key17": "2my3DjdxXKDXvSkHL7zwVE5WWn7J3dXP33bP92gqTCZfBfdnFfcTzwzcvyuBHFiFnmtvvRBiNxmHivX8qBZtKbtD",
  "key18": "CTH1wKfxK1cdKiM11qot66abCy49SoU2GZtHDgipR7ZJi8zk2J7Ga1rkAG66xH6eq5CVyxzLCdobGstgFgPrtyR",
  "key19": "2ZuCQzf8qsvv77fSxDDHboymBBJGbgsgrJEgaQji8upPb63SSsVQ81XEqoASpw6jTgHru5fpgkeJa2Sm4r7RbAfT",
  "key20": "5aeGUevLRXRQ9aFdFGdeWACEqcJ2w4u7ypwh1gmStucg6vGLCXN5X4QSGArxgYkN69vuy12iV1BiUtekjNtUyJH",
  "key21": "2piF6djZ51e5T9qMm6NrRgyrb4ws5KgivjU7cSzeUBCWnHtegLsFEPVdnx6bFQRHsbJYc6L8BNHbXWv6FArW7Qno",
  "key22": "fWnboMQ7kFb6j6wjbxqjpdoJB6C1ETpo3CRY9xpLxhK9dHW38ocoCVgWkQG7giN3AQHZtPNLhoaazaEA9hBn79s",
  "key23": "5MA2bB5j5c54tNmroGWiMj2Tg8UXTuH95tLwVd7mNtuLXSXfWDVcerhtyrivgtNvsvvbWH6spH5uD8vp4Sqv3aFQ",
  "key24": "mSDdAHB4i1pma9bcm8MfyEPdLQYgbwGb1gSmDBHtyBSvKkphpmj1dZ8Pgm7nWggMeEBjXuwQ7HAAFS93s9WV37E",
  "key25": "2v9mbf5XjxNo685vQCZnwfk214cG8mZrQXAxFuVeej7oznRViaVizVFd57sE5RZ3s5ucCmpLk6uokmpJzmUSox6w",
  "key26": "2287DkwQgvmqyrtrDYQdXmBqLy6nnDRxXkxmTk9BFAPxKGYbQxdfg6aTLdZuAoPLeXEW3nhKUxdCD6qbRF1GxG5x",
  "key27": "HcSoHge59j8kVkk7ADTLg29uTi28xt5Xc2eKqqT4wKjmdkJ95RKtvz25W6aY3eHZ97ZsaBuVgvbbquDKW9RizqR",
  "key28": "3gA8NZ5d9rG5qTpqGWGxjH8ghv8UAY1AyQ651aHBAGjKvV6qsSdV4snrJae2zxigfmvQ6uXjxS4rxtzRscFtVxot",
  "key29": "5D8SECiyvLuUPDkY4f4bWE8247DL8zPHq4ihdgUFhi1hUCvs5g4oC7eiguXeMXFLYPU5PjTd2paTdphMz68PJ6Ud",
  "key30": "yXVa7b9EPf9FD1jWGg8hvPxi3B6Xf19GeabqtiSeCTFABJpvb2fGWZ9iPjtV2KAyCKoJEdRgRVfnVamKuN4FdSa",
  "key31": "4PuF5cGhr5P7J4yG6NWZCReNYQQnWbKCk4kDFZTxRXGefpHUv157JNWNi2W5aVGBgW53fZ6DjYkduYxnQAtnQRKT",
  "key32": "4wb9pte6tRKTieyNSbyhS3Vk7nJP1McSN6gBj5o5ZSYsKpd3sTV6JcgS8zMP4B5hcdT9SyuZrQr6mzxki7BgRHaJ",
  "key33": "1TA14AT72aKaVbMbVVAH94UGBobgo68CBWqVbKyLGgV3j5mDkQpgJEScdseWk6ZpJCVesqyvzUafY4rQu4Q8HSB"
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
