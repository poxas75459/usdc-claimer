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
    "nAUvyBZwsBiQb5qAz2TnWDzW6Qw1oGecwh1BDfzEQpwk66TkRFMYo9MLzYSoVkwZ8uWr7GYAbG8R3oxycxRQKrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dbq6WeqDdyst5F1qEfincZj55kwzkZQAJXGUdR9sEhycUdUbKjhRCPDQFqEKUfbJo3Lv6VTMKaCg58hY9TBu1CL",
  "key1": "2FzwAMZVb7toLzgauNoLV81xKNwWp7tQGr5QjemBHhEc4NuokW5odgFn1AGZfSrKhDW79Hgc2B1JhGL3tDijG4B5",
  "key2": "5eKp7rsE7hTcXp2Bhevdp55Ysx8DuXNF9coB5ou3AjrzScRtU53C9uHS4VEDoRAXcLgzChhme7eLmst1edubz5Ar",
  "key3": "nQsonSwiek6JwGeCXzkT7oRtmhfvEm1xPmsHnXCpErVYkt3w2LzBnsD1ebQWrNBBZHivU6RQ3bNXyTCJchMmN2Q",
  "key4": "2BdaKH1S8b7PANs5y33gWKokkpXRNo3fYNNPANdf98pLHRw9M1GvBeU7HRLzBTnwaEBQUxXha9CWurgyozisXAi1",
  "key5": "4hesEzHoxymoHALcwjFNZu2yXvJWm7oFWwBDNfkmb2Ej3Du11E9uCzHwX4s8iGEfTJEug5dLLFXCo3HUMSZrS45Z",
  "key6": "2crQ2PKcbvjS9RuztyDKThdibmMkgg8hM5maDypdW6ZRb7y2gjjB356oamokJRZMs5AeAZq7a8taLKVL7WnATJ5X",
  "key7": "MZUts15Dmm89JCFPFfFAWjfvxUvjRfhoqudq4WwRQZD4Xjaay2BDEFrjghdCA88riFJNawFq9gB7B2BBKWyDq1o",
  "key8": "T4jVdUvvuq78aoFo6K2dUkL4LT2P1KgPo6s1H89vdCMKJd8HXFEUi6HUMVoxDPU54rsQkVNLBew9LNbrRcudtoB",
  "key9": "4zxFLJpRYJWeF8Zfat3VNRLTnfHM6dGMQ8Fi3x3EijAUMgeWvzZBfDPYn8PuqaHyZ15J1hwT5X8BAhk6BY7kuAR9",
  "key10": "62YAx81EV1NWufz1j1KPdqBYfPSJwwXHNLYgbeDyVh18CW4nJqk5wcS42XnhduLBxSADxvyDhk5pKfqBGjpNncUn",
  "key11": "3M9iTWnYtbtJjhcZpPPWukcoEqYR2F4VrUxMWhCERRQMfcyM9anwyNJTKPpbcAYq88hGnbogaivgMhVwMjkT7GGW",
  "key12": "54ECuGErDDUjXGLqs2gvNTy7nYWWFnLreoZzUdqz2xXEhqEs512qJybqNA3yShF57WhkQWZF38xNksihEYbDcM5w",
  "key13": "4aifZy1mcPfH2SBJSriAPcuUzvtRorXGswLPbKb1yZHvH489EPinZuiKCGZ8RsUExBNvoMkL57Vq6nYpJE1Aw4Q2",
  "key14": "4BMxSkAaEnTkiq7mHxvcTEHRwrFvc83SucsW58aRhrCHQZ8QS61kVE8AacxQNqNRBFfC34mreSaCd6qEbG827nqV",
  "key15": "2E5t84Q2Zbiux2HVTfa5b7xdQMWNqUxAjobW2eZ6fKGD7yLGHXkQvsMcaVRJh5vND3uvgmpWkixMjCz8SKd8JJyS",
  "key16": "robcz5qiJ2q2msKgDfhoEJQSBTLVs4gf9ZTf9c4XAojP9NyyFbnyjcSPtgcNbfeRTrxhYM4nWMMoQWqhiKE72fn",
  "key17": "3Q1zKeoeXqb6T16NSek42asEAgiDnT9fZZnnzHUE4RknSb13ZLUsJgzTN2pBRNEPtcP64PfGqdDcYrZYak31ZFiY",
  "key18": "529uGD46KQqNToirSgi8ag2xKpaPrm6Tsg258Ef8C728xC9aTTAdrT6QzLwUSBRSWYkpTFspatshCiPNT1ryFbzh",
  "key19": "3U84BtcHUjTXZpPAvsDn2WBDXHPn5cCVfbVc5A9EkFaunb4oNhUjThG3ibQJa2JKHpP4wKDXsEhpGHraVPfaqkKi",
  "key20": "5uzDqTtmi8v5saHeZiAi4VXocKqerua56FLDr5yAPVG8VEsdpa2tLtZ6ZrYMmQXbp1QXgkTtcfQYHYZKff7CaXHH",
  "key21": "7rLovN12C7nXjENz8u9Z1QjjVabt1o8ryGmPYupttbpBJ14NiY6EccxUwQ3SQ7HzBhb6eeqtSgrgiA4xYZ2sGMf",
  "key22": "X6UppSpEQZYYWfxuN3sAwn7eRhAB3Ket15g9MaED1qbNwxd9mkyRGocH9HuWczhQVHN7dj1B7eqVLmV6gDu9p5Q",
  "key23": "XGEjetHK5UmcD27Qd9wSLUZ3QvTVLTdLEG9ZkDs9vuS39PgCpyX3N5diTTm3anvDBqsQZZPCeHqSXPxYE2qYpQP",
  "key24": "5zeiqNmTQkotkB5HeDdUUBeUqTfkDRMhsm66qQv4699ZFAeWHoFMfznB51AR654aY77MJijBKBgZ2ehrUWM6jmpB",
  "key25": "sao5gKsakzcqX8LQBVik9GaG4ZhQp6kz6BvxyugHgHD6citABpLb3kpqJtZ7Vk2dAdFDcV3QdwGenHpdC1Q9pEy",
  "key26": "3idpYvCs4v94zYPAbVDuy5ThkFTCFR4a4bvZNftNDSCGbYDQN7o6DTB9e48ZjXnEQQy7fnDz5rU67t2xUfYSqhUA",
  "key27": "V1RaGqLZptEEfGAiQr5DdbYDUQDMAnJU3XaEsENq6DqWFc1w2fWjXuv1pm18uTDfZdkVWBXwmrodeQDuh1pAhso",
  "key28": "4VxtPKFfWgBAHH3p7AGf9PDphrG9zf6326SictxtS7z7YChRuxLmvBbDpsbEGmTeyjak6etspirxnXZp57h84tuC"
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
