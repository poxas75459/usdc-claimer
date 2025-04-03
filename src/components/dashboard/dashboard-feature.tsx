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
    "4FCuimrHiZkLzR94fH2KLew6XsjWLer6Ef53DQVMUYNG9Y2FSHWRYNSEuRWaKSiTBxE6HD15qLtnFci6Xo1nYYgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMRL2MANafkq9aGJaYmYSSxuUUVbeDrJ5kCFYwnPGYXFFXoEHTUKdCbBPPDPkfCBkf3qsvtw7AwZaSUv1rn6cZZ",
  "key1": "2For4sDyhKNWYSo7qFA1BJj1XLFSKWMhyuGMFuy98iunedqLmNfSn95p2XD99uiSccJy6jDdePmC84zEGjdq8grc",
  "key2": "5MA2YkrtBuQuazkxHVUJ9oH81sKyEL1KxKpMmbhyb2bxLFMmsdmsdXmfsE7uSUSSSbcN8GZP96WanvMLhgVJbkgs",
  "key3": "57f1KRGkeYECnmRYKi6BUaUVBwekXci7KSd3S4NX4yvjhnXfAKnbnJawY3xCWH1L8d1MxDuaXa3oywyM8odZDAqh",
  "key4": "qNkKd95zE6YoqhBAvAisFH3h4p4EK9BHPuUs1n7w2T8JYBfFa1NK3rjCZvDRNmeJq1HNrfpJcPMqYoDNksqKvCU",
  "key5": "2suZqMrMNxCYxFruzzXf8xR8JnstnZESRgy34kA97pPmz146rJyxEY3r7iDnB2u8YQYMtUnxAUTx6VMwE3PBXPdV",
  "key6": "2hEWXAqimw8fQsCqMJpWX4tEnmpJE5H6ta32hz8qAKxYDQ3TCL5dQfh2ynJjiRBMvGLivrqCREBXYWNHxxRPHx6B",
  "key7": "4amWZjSqxpC5JTLGVVv3LLGarL87EcF1oJdUnPkV2Y29yVoHTVyCJHyJuxw2P7UXV3yJLyVGK1HFGex8kYE1no39",
  "key8": "5RNAA2iJudJyosWUEte5XDjjRDttkMo3d6LRLMKSbFjBd2HAv27oAcQedHpzowSspU4Yt87REett2QVzPnJUtqHh",
  "key9": "4KHbp3cPtTcwyU6n7LfwiVkvbGCioXFaUBWLfDoL4Vm2PexZMu4pRPHQ4UaR3kV96eeps7hjqmeWBNrcoGpU14eR",
  "key10": "4wN6n99KefC9io511LqGjuyw4mGZq9K6f2K1E46FVdKugY16EU4xZzNm8pJSs3Cp1789n6k1LWQeHLb1P3miQBXd",
  "key11": "gYYErMRMa9qLQfjQ4cPpSDpH8Vua8J8eToXvsJjAFRgqjt3i99a8zHY39mUe6UAZYSKS1XV5Vrv5Di8tZ133KCq",
  "key12": "4ZiAxrPKPUuNGrWBhVFmooiGYQLL8QZi7nNJtWcLF2mfJhNiwK9xZ2yVkjdB2iCQQbhnvM8Xw6xZXeXQSh78FzPf",
  "key13": "5gUdtUrAx26Nmsm2bKRFPgjZvPanNwVoBHbhwJkKAFE4b8ML2jhC8ncSrwf3Y3b9K9yD95f2PE9pizKqxLD638nN",
  "key14": "28KmD75ztMm8jqWc1DvNEzJZjqAAtSrfQSUULa5cBQhksiDsiEFZYd8u1vvEw8i6AxGseZKAbp2VZeumw15KVFhu",
  "key15": "3u8Hcez5rsX6cY8ZCacPji3RGe23FpLPtBaaVnhEujf2G7uYeC7tSbxYK3DhuqDqmCPVmVp9dLdXUiw2ww59dhdY",
  "key16": "5SyAe7RGPSGwMiKiFsMbatXHfXxZnTbvcBMadcicZ56qcWCfhyJZR6UfUua6F9rNojrPG4HHMdejbyyuauAcVN2u",
  "key17": "3pZ8ax4A7k5KQcibazeBsQNoJxoqjGRSGGDWGZqhKwJTdAYd28BGuAoJzoyJdUGd1UokBxNgKCMaA78mhSfew2Yn",
  "key18": "5k6vQtexBqManHDoQbFEHgtNUxxvqXuM4gAXbVTtzwwqCmFeAY18weAyiaPuugdxsVoiLC8t5EkUrSqX5b5pbQsC",
  "key19": "3gwCPY5hhePvvVFFtRSVwPTkw2kD454WhPnzHDRV4HRnY3HYfTLijqsUcLGxR7ZksroniDVFbzvG6kWuNZCQaWm2",
  "key20": "4Xy7g59JAY9F8JZGd4ucMbXBrSa7h1YGTpaiVrN26qTJPUBrRvRVAriN9NxYqjbCGKMqCgKuh7nPNef2tkur8zHt",
  "key21": "213X9E56gM1X5VQ7YaGaW4PyuhNdeYF434wNiVTwZtwtBBZsMnxEhgNvC8PN9eqGzJdtPwK2AZW2euppg2U6Tjg2",
  "key22": "4VN8WKQBWVmXgLr787bs7xma8kYW1vypQ9A4TM5wrd5kgt46a56m5RJTfx6gjH1DuMv9sBAgdJiicNCt6xJ1RyTB",
  "key23": "GymRaHwz1rzdS1Yup9d3AEGVsaaUEXz9hLy7SENLzAaEVaoWFF55Lb69gVyXN1uXSTZQYdCFuoH2FW4QsPxNJ11",
  "key24": "3CsmqzEX5n67rC5d1HcgDsmggDKGiHb4FTAnuZvHgBMY8N1piwmkCcBznHVHKLQo1MRrLKXFdQzm4pENkymVWKbm",
  "key25": "3zVHEViFTv5rqABt3gcVryKSZQQH7zxQqhH7qZQuAUdBqkRNN55qWYp2gMtid4QZjafPgj3uEug78c43bQWVPh2B"
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
