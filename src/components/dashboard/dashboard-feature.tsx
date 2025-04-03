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
    "3dxcD79mHPbepkNkBLgv529XH8icqHZxSB3MNtqe1XmEV4F8e36W7gh3bviVDqUyo6fbaDwtQyAgzuDDEnJEnNVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgUxC27pHB2Ljn2K5TgMh6vbLw9RqRSbnHSaKwGBt8d92zQwq1Qs2w2by2XqPHZd9A8ZRMBLNTPgTFmDwR1F2H",
  "key1": "5KYUS4HsMc6UbwEgm7s1aVbUw93xXRrvDHdmcy1ask6hvfdwuET1Caepbz2TCW2umTd2T2uFinecsVDN6CvB5jtu",
  "key2": "5XEywNHPGMiRHFVFhNxw7yGZ3AfAd712PcM7SCRFtZr41wW8Ei3yWFMLZJfoMY68cxfbZ2aTGknN2nWaMk1cQ5U3",
  "key3": "5xkCqrgcDZAosLuhaWMAHNkcWXx9f1K65YxuKSQcATWtZ1eEH1D8oWusFBtadJJmRuAvt99CVFnWm22T5LkpZVA7",
  "key4": "tK9HrAZrYNdrGwQmojszE6p6d28bRXPCyJqVPE4uNRBKfMhLXfBnUJ3EJ8cA8PUn1xqCA5HFWavofx2irGLv7hf",
  "key5": "8Fco9yjf1D4nWfRY6RNywRafUodr2T1JogiFyNk3FNkMMMCsRDyFbuUhejqaY8TU8qT145PVUDK8AtUja3jUWWp",
  "key6": "46yAuepz4dgqihoxzRmEnAB5bg72GLnYCKgKvfhwxFnanmcAiox1Lr589W4HP1eBBmkYURkuHRq3EHnd894mM9pn",
  "key7": "3aNg6kb1yKLwV2z2vFYXv9wNdLYm1HeDAz9LjcHmBsDtkejQTUCWxBdt6UfKgC7VXguMaDcXggqASPuVw3ZexTL8",
  "key8": "5kwJpYFDz9fTzAjXaSqNByDNCkpKrQUsyn1prjQwDQRBeTi2b6RuNASXGpxNgtpCQibQtzEFHzj4r5fMp2yeVEF3",
  "key9": "5MFib7G2YiQ2EFq6wJEHdNP3qAzzwNsYFgWBWh5PqCB6J8CtQy6BPkyUyZPFMq3Tktf5UBpZ19VMXDn4fkpuKY2B",
  "key10": "4QJza22H37Go2wwuAzaJxSzD6d6XVY5HJXqqHvvvn4WJE6N1TdkcqE2k8bj7M6S4SEY5EDJbhmFfbJa9TazNjVU3",
  "key11": "4EZkVS8dKPHMRequYLueyYcymUozWMhroc2X2o63fxivGRR2pV1aQxF3iGapSu9a5G18TVLdQULv3sGVgfb1KZyu",
  "key12": "4V53x1d7diUqoariZshqjJmqnBtbdvncGevGu8h98oFDsA6gmJqKAmiuuNvunzJuC5HsoKwsNJsc1jtAJPbLfT62",
  "key13": "Zvg1C34ArCUF1XnWPCv7JMi2Zq6dMrSKGmN9TgCFYdcqaP4xPLNiF2BLqQ1jjXU4Zng8AkKrEMJSzmxiKnuWg4h",
  "key14": "52pAje76tP3eZ6CsmUud8JUu3cXSC5oCMWuZ8zane4VvZqk8GKLphneEeHk3DBfvpir9ozDv4oZfZdXZ8tdccKTd",
  "key15": "4LXCM1JK2V25S1WBZj6yF51dYuDhEtzUgXVuEhC7QhRLB8Jfx8zVfE6L8ZxEq3rWSHmEU9BEJ5fywf9YD8vZ2Fw9",
  "key16": "3N3Udvgh1Fa233LkrXEnFX2K9Gcy3CAmSWVNtfrE6JwWRsiKUygvkjegfZwX8aAcjChFSvxaHBb6ZKdqTTnsUs8P",
  "key17": "5JkNGouazgADrrZarjCfPHiEASVRCHBfQy2GGaZbvG1opYFmkyb5opGB7rcyR8r5gDGL7w3hWjD6Cjq5AwofgWtY",
  "key18": "2GDoZ8LEEm2yvjjqUt61jRMni9gUKyKZien67RKibcxWPTochNksrxqguAPNoxS3fNAMFebQahV5mNtjD36yCmXQ",
  "key19": "4xzcWVocMhH7KHFDL2kkWaaJtkKnnvdr4VU12xhv8LhB4MoeUe6YtHUVkAdx8ckrfsVZK4uW2VEc1xpuby9NhqdG",
  "key20": "52C3BbLZFb2vdkUWxdpvMpzL6wZ5zk6bJXCNYkjhSKjA7wnirJ7jen6HnvQaDT7k95QnsxCVA9KxxUjitdk91w6m",
  "key21": "2KrqVcbXfFDNgunSZwsmxYZMzv6DiJWasrp9NhkNbGyL6sGAmNtsktLnLHxUrkaem3vbdX2yKhV4FG7UQPLzTTwQ",
  "key22": "2u91Ln4qsi2spniT4mqsv9NG4E8XoJxTU2wrLW6VdZtbYBfY738uLxDYx6VJAbQjv65BaFu1SdRGbZkKu3TdGDQg",
  "key23": "5JdAaUDYJtho3ieAm7w9qs2yYuFU9cAZ6yJYNnEGxM8gAsgALGptZiUWHYruBP9sdcVV3LaPr2u993ChU9XBDxuP",
  "key24": "34T8psdXCvW9zCmSxEx7e6HUzxA69ZfL6oeMwGygwYLnBMAL8kvR1zDqMZwfXCXMbvkiv9tWmFJExtRckT8E7jCv",
  "key25": "g65qPgNiYH6MJxyDGpDbkij5obGgSMvSpYaUEEMMfbvfjjL8FHfgnJeiMk6spPn7a3NbDyxRBLmrBbQqz1QJC9S",
  "key26": "3dmugexVfSsfoeXb9JfEUwoj9W5A14rrUtTr7Ky11z3HyddYaAZjLVCLNiy1upJ9dQ5t8MwcuxhFtLj83GV9hrSE",
  "key27": "4QyR3wJvoDqKFJMZBdgNWcPsFKE5XEApgNdPkfRvzPS1nkTJUN4jTB7XeaHm9PGwx2f8Hps2k3L96Dtt1LiA57sh",
  "key28": "3KLE92S1mZ5CoSeKg4x8ZnjuJYwQrsgrCM8hJepcAG3kaqh9yj6623ZtSGbDBkG5jbrXZ5Uni8BAGhQkJPvTdXb8"
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
