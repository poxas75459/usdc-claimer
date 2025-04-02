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
    "3Nex8rMifwvdSynZj215ZTuBWmGb6qcxyPfTL93YZBFnRCx7R5527yjECsW33UdeGTP9jdPYuCEtJmxL5zBnYFnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DJ34v5FMtrv8cdBqeULFR1cgda43gvqUGB6eDwPGpdqeuon4CfYT4geDd3Ucvy2ykMTxfponsvrCNUzrYqtVfj",
  "key1": "5U4m765Mp2VGcGsJ8f6gxCi5h51ZDwMYTUSCHRoMZdvq92csDXAcwPNGCq6TLbwPxLA2P42VnQ7Q8w7vQrmBbRUY",
  "key2": "57T8UUtYCFWyyvSjYqSvtZM5dF8RLcAp6jCwTQRoBgBMD3cyUk32AFgbhSvpznSqae9ueq8cbjFz6hpwVQHXJydV",
  "key3": "43T3LHJfrdj4YsxvmUu7JnPq7nJRyYx15FLQ8Y3wwbhHnaUV1jMRCgXk7vAjAgpHLu3rXNCEmFanWYyaidQyKEvk",
  "key4": "4og3wq3WsJJVqhJ3aQ4yqcwxXh2QMbaUbavFjdeukCfcUDQywi4BS6qPSvhwUc15KBXQzDvFVLJVVojPMqCAh9zq",
  "key5": "5JXVLnXDeZsZ2WAbmYrzC9YjZ9aMLYSp3UeWB1yHAbtcwLrALpHLXoGFieKk3vKSnKvnswu19qgAeFFQZer3ZE2N",
  "key6": "36bvNN8tm4FPgry7Zz7TzkF9wvKWiWFj8daarqwYJDvavSxwWBPN422VBHrhw66RwcSaeQ8G7oH1txaRJuWXA1Fy",
  "key7": "4feVa8GgzhCjt4wEQSpmPkLuPiGfJAjTtF7sR2M1ovvT5c8a3XCGtd8BcbyE4VSb3unkbev53m9ikobZAtS4kkKR",
  "key8": "2vups7KRa6ZjTaLbuR2TYuvkSirZUbfHK3wzoGtQwLFrA74Wq6ZnY9KQYuDoxAAVGBxjQzk7jLe3wCDTnoqjv93R",
  "key9": "ZdAr2u2aa6pVHJc7JDZY1WhQv8GbStagZsUnxkNWMBCs88gkWPnZEQxSbU54AbThiGCgKNgHZSJnFPT3y9BSpD9",
  "key10": "Ye9ZfcKF8VVuSexxQew5VzAV9xu4hqouV4Se6GJKwe6r18VRC9UgByFtaaALvrC6AFhvq99Y3nSTDozacJcUhy4",
  "key11": "3XE2Zgwgb43cD3ZqSsUeL17ix8wt9Twya2LpBYMW5xmZiDUhZ4ueT3pSuja7ySuh7xgTtwYMsYXsX5B7kRyPgzrF",
  "key12": "39KewumMMi2RAjmkaGpfrFGykvAa3iMTgnTs1yF1MCcDN4ys8nrtHLdno1XeFxsgi2rFcMDDYi6JwvFJkZZ7MaBu",
  "key13": "2BJa8pcKsxBeJxnShiVfVy5RZ7QGcbVkWhDkAJKGhed4Ru11bvD53wKxpTbMcFovQv8yVnsRhyQpxC16vtEnqJfP",
  "key14": "5uYyywKh8NHxnjSbjnn7oU7ZwuXNvGLKHZj62BBJf2ZDYwkqEoHHVUCwrap7CBYydGinVgnKZzGziF1nnPyAPJm1",
  "key15": "N5QQ38nb5fETLsmocc99uHeZhUCtCJeLX8TdEAQCbPiWYe71eNGmEg4NWQm2RXMYTWmRrLt12RiRt8WhiYHaHXE",
  "key16": "5RAeso22oKicUkHhRvP6xYRhjG1vP6eQdHhHBvEGKW5ic4dxWhA1SbfNJfCcVD2FFruftfzs7WfGgiWYX7MaZMx1",
  "key17": "4WZ1JrrQ2XnHXzuTqU23P8QbjYKTbTgPPdGfxujBUCtz61dS8nmUoSc8DEBZyYwFzdC8it8H7sgn6sYsPQ48Efzs",
  "key18": "5dvC582JmNaVSSwfkWuT73mxfR7F6eL5hfKXnxYxhttq4roEVXhgCAAHeKp9ABbyskguLtFamH5Gs6fPBqsGG5bL",
  "key19": "3iDs5buExcXSwBREu21H7zd9j82XkB3divk8gEv6LrehbwFaxSsgviibSCf6BgSGN2bpPfXhiywdjuHZT93kHG1G",
  "key20": "3Lm9XS92i1zAj5PPtwc9dBez4oZW8J5UbvDRCMt4p5fJXxE6NX63gq92drFtqqx7TdD8uYqaN1n3Zd8tYG6hK1zY",
  "key21": "2TbEQ9BzZ3feMWuVFHBt8gx2xSv9Vf3ijPmci32TQiT9GqechCgUASXRs3k1ZznoCHLsoETDv1BVNwYsJxJJWVz5",
  "key22": "4QZPjxhxDAeTj1rfx5paGoHF3xd2qiyv2NKDzWujyR6gjoXat3Kqcj1iUGVLLfnSkazt1HNjTnc3Br5UTv8Dd8Ze",
  "key23": "esiWf5R4rK7C8oovWWjXzE7L2e2Yjcdv4eZ1xBAuJd1YeuinN58h84qBQe9u6KuaRvuondoBtHGZ7qjySHE9NVx",
  "key24": "3gpYfKMc5i7DSnuXNeiMcomVqPkFc1uQ6ucbEqUyC9CH7SuVA2R98XZ7WDgir3fA3KPRGj9hNyfW6ecQ89Jsj2jw",
  "key25": "2kh21RAVDkQyZRBFzCGerguNdoisLG2iwPKwaCMcrg8whYYaYSDcnJ2x1fTEHAANnHbk6ZdHcW9uRQNuFvVQBR4i",
  "key26": "27JxhXXATphvhSLWtH4PL9uRLQaniKkKQygB6BDo9aTMyAzFz2eY7KvgJK2HQp1v8s8iDGcztT5uA5wetWviKMrf"
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
