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
    "hZJ6n359QMKQJUepiftiHxxLQkm12kkJH25G1bkQnoFyQGweTBy8YLFPBNeXr5npPh5FVrV4MFpbu2x8vmSDreu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MVsSaaudgydf3J1b4hb6oY9QqDYDnX9GoDfKeVk7XwZsz6mohtDWwKpAUmPSLjKhjCzd2j5Egg5Ca5vns66T6N",
  "key1": "2g3wDvVb2ZzgwxnkXLTKHV9hcNNdBDkQnP1iJBJeHkSJtZrC6gRQCAeNYc2yuoxFpebi37RNfdr2MMwNPPzPvaME",
  "key2": "RiQaMg7goFv5qovKrMSeKh3twE3SmmQH6rGjhiosKPgTjvt6rD8GFnWsTHMidviNLXpFTi3NvT9wmoFABFLCgCF",
  "key3": "4gPLTvD774z5GEctLvs7iiDjPYJzEom2RCWGaoWncBLcLD4BpMBtbfb59Nns3qH51G8KHjdziQjTWAvmyAcwtEYQ",
  "key4": "3Hv2AaYeqvVA8Vc7dtszGPSxGWd3coggyT9JaL17pbKDCk3bhxanWqGirAsmcHXz9WMFhcuze4Z26sxyApg5dqbg",
  "key5": "5KVj3kcz5QUCFucMkb49XToo2sG7K6BYjJy6frXgBMoUHtKthhWi6UBxh6k2KvvdBQczSpsMAtAkAdP5xyWRpG3E",
  "key6": "65KJqZ3WtZqxw7eL5yMkZoisCzG1z4b1a5XPezvJEZTcNZTyDp24hpzsPHnWYakDay7t2aQjsfwfTgXkUSZ2MqaM",
  "key7": "2jZ4ngcf1KVyfEAXugBAT9f1no1WQnZ7dVbsaFMeWdYK6vVJhpifCPvyLucQGp6sTC5Gp6rKrdKE5KoavUHu6gAE",
  "key8": "3qzYB2i7F9Snj6eGopN1AN45Ewi2GZE3rDa9eWW8L2czLcqHhhVsJHvUAjNwyz7K2J1gZkBZUE9xtHhCGeK5Fb2j",
  "key9": "VrpaKG1GKJu1wAwTFodCNPK8RzvqktT22RN9okKAPAzZaaK6o37Z22t1RMbLKSB46dzy88T2pQqA3PXATiGqEps",
  "key10": "4BtSFjma67P9jdLWMKPnDjjnHua6fsqRDXd4YfpZ6rDSSM99zBa5CjY2E9aWhLRYWa8JaGtUo28hUzgPjp3bKj2u",
  "key11": "eYira313rrVZUi44EWmfRKu8P4VZWJt6ofhUr5Qau11Cu7f71hdwDMp4D7YKWfWnPpKeQgrZPSGA3b8hP1sF5Rm",
  "key12": "ocpyJ9vQ3nAg8iyNDQKu45uc4jpLiEYqGgTRhgE1DDS5ZeFGb5RvPQoCa9EErgHZcULfgwvhtPDiV39Y3qeGhjZ",
  "key13": "5UtR5a1uaAf7qqKJ5xKSFFN1U9ZLqbHi7CQAQzNDLkAt6UibknzAaQ5HYa3BtZHA2WRMSaTGJFchU791TiqtnDG7",
  "key14": "2CzabfG39YcXE1aQJnEPQ6FQPQBqH5aEmZsjmpAZ29EEEQg7sBqMrNVb4vh1H43cT4Kua6SiDC7oYsUXWGRgnH9b",
  "key15": "4uG8Wd2G3MPYmsDvjBb46cPN3XqBJwYRExboP8PghBG5k3HF5FYEcnTuhMnzGJk6YuNgsAhfzUvUD9HuLFi3ch9v",
  "key16": "3fXrTKfC6jrYL7P6ZSfymYjrJuMFmALhowJLvfqS7eMVdq8WohBQdvW7EFRrCjufQvaqYnaecX1YWevthTZDcnH2",
  "key17": "5aGBV5x8WhaGp76X6Fu29jzHZLY2QxyR5CsiQ19rgnrLcHe7VyGzATddvg6Vgb2mntvTK8RnPNc5tDRkewsEz9nD",
  "key18": "2VKqMPnL3CA6z9sX8Fb29N8M5M4ysq4hoJVGB34KoaxCUvdoLvwTWrUQrmqahFd3QHkQsV2jtSdWoYkuHxtEYBFy",
  "key19": "5nkKcUC4xWttA5Wmz91VunnTL7uM2x2uTR9S5CvaneLU5yGARc8xzXCybZGM9Rit4D74x84fG3NfAef2ksF4zVnL",
  "key20": "5DoEqk6pCnPt2ZiyGWB7eA4PdVENku7fvVe2LnwByBtGWzmG4mjhSpP548MkQhWSaZQsUwD6gdaQ3niaSRzTXACw",
  "key21": "Um4WWhfaXNopFGLsaBXADCnRfnKr5CV4qYzNW8uejzUr2DyZCkdsjg3TfcQSczRev9k9gAdT4P765GTGBnyHFYa",
  "key22": "1CoYzZqR9NffJg6xqHZ3DPMHp4FLrHiNhiK6SK7J66Echqevwg6JAKpkSoWJznsTYjd8LhhvdzxJBxgC3a8KWed",
  "key23": "26zYiLp4EVSzmj6w7RCkBMCgJzcDQdXNhFM5qGU6nTEaPtkGjJsRPofyJdFN3on38R1cpFxrUK1khgaimmfxEGKE",
  "key24": "2RpnsZBWDtiFQFBX8kpACHWBTbwGYD79xZrBd6BM1rdandaM5KZVnM5NUq2Kq8AF1aMTBhBdXUNZ6dNrVoRj8Ao5",
  "key25": "7habfv9B3VwYoqV57uqv3JwuMKrSkeTSyk3N1HFH5DXN9DGcNzTt35jmrgsXcALLbMfHc5XLG8dUQiJfPpHHtLH",
  "key26": "42fe4uSn6QNodq8vKWZYqBKRRxjmU8CnJ56dkzwHqhBnSu1biNjhi1neT2FS9giSwGthkGwAYh8n8RdFzuQosmVb",
  "key27": "5xznLuyswHkqD9swLv4aUUgqFQ2jy98jHhifxexcfHpPSuZyFuLWrrHuYkrHzgthZRLvdbgyhFrPY3B41AeTLcd2",
  "key28": "4iNcmmbiWso9D3HgVsXzSGS2F6kJU3GpUS9wTkaEDttmcq3s8PWxWNa5JtHTSJPn1K9H54Pf2SoPbBaLRWVaseen",
  "key29": "4irD4JXY2KXFQY9MwZyAiqQQEQ4bJSQpbMWnrYyST3iaWjAEnLR9dMvuzjGzs41xHJbc6zETUp9sGCDxBptZhdSP",
  "key30": "5rcjey4h93GWQNYJVKLWbNiQWbzJfgK6JoKG8zBAMT56eDZ8qLvwJxh2nnny3jkFs3J9mFdMDKXjUtiQ3hvPqxzE",
  "key31": "5WyMQKQrWEnDNVraXYr7HsVBPkbdk5RqGQeDh1X1w7krf7Y8s2xLDxczzzdSYa8M45wJVVX4mwYZcC22sZ8AbyPR",
  "key32": "38bewVLYNn5DLPPfp9497gvV1xuyZBxXDRcxK1C2jdz4WZTWk24t8APPsKCCcx2XDkrTA4UhU7vCzMZgicKfwF2a",
  "key33": "2SMso2G4KwShMoziBmuNKE1wXU5mJ2R2wcYuS6xxSBEYiadbFNQhjUYbQhd19aNxU1TWxq6xqyJJJDVurEVyExJP",
  "key34": "24ciC5a8dmN9SL8HR1JxnUHtJXBnGYTMX1tGhUimp1Ag8BXg6UDMV6iezge3sJzmqHXtJmBSGpxQhvKJnYJcWPSk",
  "key35": "32BGWBXD2D7Q9xEMdoPgUo4CBVvWrmuhGdfF4FJksG7CbYikUm997LeuWCtS7ht3Jyf1ej3s1GzrPgmq4jhgHu5A",
  "key36": "2SPoarjDgy4ebSWVtBbbcUopBuB7bnMMySgoUXbLKgiWJ1gipRKEcUAYX6yezwVr7rJh4MbczVtnbhj8uy6LE8PV",
  "key37": "AT13QyYvQoJ4G5sVEEKgN3p2C7xCH78JDfUN8X65fXAnw1r7XvrZJkFPNuYek4CmYHNyWWacRXcZ67S9kfsXfq3",
  "key38": "2AZAHo2vHif3toJhz5eNAJo6JyfaXkBmGXgxQRrmY9CRyW1tFCDLrYt5uuG26FjywNCnpePcfpw6L6x9Pm78bfVv",
  "key39": "3HxgKPbzFna6YeMmJJCRdsWy8ejhpVqrXSf8KjHZVwiBDpoSzYndGxsxKpvmddkA4o7X32ANDW9345beFA7FJsz2",
  "key40": "25SHyyATz9a5PUY4Ktgy8DDn71hx1uVGt7sZSDgJg3kgjpQ1Ta7Ec1Dg6mot3Q5bMMGY6EhpWYMMnixBeFVb7BEc",
  "key41": "wJsPiTn98YrdUPdDd67n77w3zq6fRRBWXL5LJPx6b8syQAQW3e2RXCeXjAJWWb72S1VaBmU7m3EZoc3tqtahLui",
  "key42": "5tzzQRjT3sAftv7nd29G7FZmNtTMjnTDyncHCGnN9hgngPvRssNKDW7zN7kJsy5rTSivTkn8cdeVFJhtpLbaRUQy",
  "key43": "2SYatgo57Go79amLBRyGgQZESvv34oNxjBTEPsnLeHRuWSdtuQ1rmGQFEbYDfyt3Su1gdSHskQsvczqMzveW25N8",
  "key44": "2UuSoahyj8MiE2yTVMMNCCbCaSJCphMZtWG5ziJNpNyGqknrHDjMvufbJYhwSsTXSjfVeNYmafZZQ2qTE1T1igxq",
  "key45": "qpctYPqcPzKu7bUqhJHpUwutu7frsuMnqGpEq8EuBHcWeQYrBBc1FmquYbYLtJHURqTjxJDirNneqNC6FAzHpEt",
  "key46": "2tKW4GxqbGB6Y5xH6Uqna5SMH4sjHfiGhZ66ndDKG3TsM8m772Jr1TGF1iieziwCtzJ4EmrkHFVLtHRuZDmZGUnT"
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
