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
    "nApanwcSwigFHDKLs2x5RPcQ1XBtfxVqp1BMJ7MYmgrELCDJdL7GHV7rqToxVnfkXT4YpVuZ9drZsDMbzTwfuSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RQB1Y8FmejSz8b9vPT1eRzxuNoRBecuhogvyaX7atjibp7EhJmqpHzJMcsjVMyXo2mMVGkiP6NjWfGaxU2jfSM",
  "key1": "X6mu1LXVDKWdHUoiRULZaJyuYCbrq67FULmAXRgeSCojFHKnmcMpAVWTPeBktd8KAvgVpNNoiEhfadjYCbyhiYh",
  "key2": "3K5mfRNK7HmLwgGpcG7Xh7SuK8nzpRGtMj2McLFkr1WmYmgRMC9dnT7DBxPXGxzvEgypHGkWZX6Ji8WY69oKvRr2",
  "key3": "iHu2Co3mxkSkdJhnzKkwXEhLMY84bP6XBcGB46L9yWYRboUck5bkBjDj49dNBR5wk5naYjrYJCBaBR2xNVeQaMa",
  "key4": "gcBxSn4gfBUewwv91X2M8m6jxLAkYSnxcsGfqgxnuCuNztJvc665B7mvwbPEeQTpDxEV9e3UKVKq8H2PsZ8n6Pa",
  "key5": "C9rnN88dZRzjiNWioXmXxxW5Jrr1uxDV42oXsbobBt9PfSdM15rkswhGA1LBBkPjsUdQKYoVipqeb4JLBKuXpJA",
  "key6": "3fusG3as8DrFUKkzkm1JshdmQ6g5HgyAeoaJnvMunaJWJEUTtSJDWKXnJikFfR3MPkVScqEGxVX5EnCgcB1R8kRw",
  "key7": "48tC4whAAVc3kGr6GjcZgLfX8oSSF4Pr3c2p56ZEs8cfkW5Qgu494gF26xoL3Lhkmbbo7DbQ76UqhR8tvEs9qjd1",
  "key8": "3Za4VWgoLDM1mCPKwzqfShwiQL44UYEH6mCnC2ZPCRsH321qR4quYZsLHag3HHejAt2BrwZFo9UK4d5EaenA9ekS",
  "key9": "4euKfuonxd4J2aHCWv3t8tF6No2fmjdm7Axqmqymg1bCe6zJf4iHBaNHUPU5NTFhaCHVyLVBL7fi89NiciBqHqQV",
  "key10": "3REaidVFg7gKWmmq3f7knpn6PJ2sF9hYUgj5CWahGbrgx5totzbJ4aTsjeac3Ht5VgFFnXY9RaJ3BS4WrLzgWA9s",
  "key11": "4rEaD5KrewodQkhhVumZamcbfsHdw3R9Y4wWfDr5chMTzQakUMR9ecwtBQ7BbK7DKVuoHgKzqbQ4dSRE56PXjg52",
  "key12": "3FF7K8etsf6BCWEYC5o16w3Stp4bjXLXWButLp5JGmWL9gMRSttrAZVqQ5YGeNPG84qw8yHKh7TEqBjDu34MnCx6",
  "key13": "3iq9uust99fr1wMkiTxHNeGcseaCThWY4p2akGkV5B59G7FACMxbPvZvpvVsMMBaaHVEzN2j8CMX3v9emFWX7qk4",
  "key14": "58dSvPbiQz3T6qBckBNhJfdrJysMv9RKsAburcsaZGqUNVSyzVRSP2GHKsBza1htZKkZurkD9oqA5eRkk8Pg69jj",
  "key15": "2aKExDq9wLUU9iJrysrWSuJxXywaQ92TEkgSXFKmHAjuwGhWsLSBfPNJ6beb5fyJVpC8DRDqB6gqUCQDdBSYZpEL",
  "key16": "2iF8M8t2bmAYJnnFmp5WrjDzSQbr8BNpuM9GCMW42vBidmb98GUPm17WnuD8ffRPmMEQE7Aw5LVZHo8YRTdkb1Xy",
  "key17": "4oqxcSLgrrL4uVU7NaSDF3dDF4qNdhiaRKu7nrzULkXwcQqfoBN4L9djFNy1fLiYSe19VJjJsrJqRxHKmJn3SdL4",
  "key18": "2a4fGgbJJ5cvU4Wd6bXgCAJPL1vmhLdQhVVJkAuMBg6v9hUqbZPvDX2GR9Zo6bhLr7jLhLXopVDHRybwK9AkYXQN",
  "key19": "2QfWhaxXu5ADE9wbWrBUKSXLwqgV9RFYqqspyY6a5t5fW8gky37pBSvYGswxonFGyf3LH7UYRhDrhiHVVwNphpmQ",
  "key20": "5WexCujGSrAnM4GYsFwyBFcKLMFAXyZbFr8WAY5sbAZY9cQFf3u8G6WyarLMDgWznRa61p8JVe5WuHVxVkaxPW4J",
  "key21": "2tNYViotFwxGy5RbD8aMjyFZvFXDTS3LtPzKFLAe2dfL3Vzg2Mu2sr3RMKdenPPGfkYAuXdjSYiabxdFfYWpaUks",
  "key22": "3fG83jG6242iZ7PgDtZZeEBQtzwAYuYmxxCqkdnr3yqtWYALb1mbUxhNwFNPTAihpJUo9bzUoqNTcDX267Xz6iUJ",
  "key23": "53SUYrowokKLSVY5m9urR1iS5UR6F5fYbCB98tRQk3KFefy7PkG8sCmYEQbrLaBn5ptUZj3atc9u7VwhfPAm4rd1",
  "key24": "3xDw7bDwhUwaj56ooNT1UAnDyvzTkX4FFqmWo4SjsD6NUWD93Hy71WMyv5QYmc8S3yTYNLYbrXYGFKAVHY384YdR",
  "key25": "3kFkgLfm4pvsf4sjfeQLKnCcJ8zaojDvKf4LMKkgAjjemDSPuo5tUU8AeXHZbLM6PDvpTprqiYK5GBBexLgjtLJt",
  "key26": "5CU4yF6q1rqawFBxq7dox8Wug2BqFSjpJwVf54MyHScnwM3nSJb2Ya3z9L23QpmVA9gvSuLouDiWB29bZsju4pHS",
  "key27": "37vSP1ZmM6hW5VnUuZyvUHc78zovaj9SCmqcQ5CRQK4mHC3E6Nh23aRf9VV2uErZ9qXA4y2Y5J1SJr6bLaPBuP5p",
  "key28": "3vJpcuz9jhbrTb4xXPLoTHuJytQWzaUo4ayx6E7euFME5SQ6QpXEVN3Y3YV55y23rrasz6uP6jbSjWTetrmPou59",
  "key29": "5ZQEZSPVndqGmC7CaeEWkd9y4hLXyZtsP49Gmc6uYHdEEaNLg6yod7KVZksWFbBXQUh9iWi7yKAoczuGBH3TmJgJ",
  "key30": "3P6bGWAoCvf2yisVJKMHkwvaG4dyR1bnuUXtEy8b5V2g1yvRCciFaz9tYWDxfVsnz4DBaBrmYF1BEYjWSXzswb3c",
  "key31": "3VFPbMa49782HZs9XiAngvfkHjbNbLgGZ4znkCARW4pNgv9uSGagvgpWnpQ6816MhQYhuF333gN3GXCWynr5rKPg",
  "key32": "ZMuZUUg7q7gsvEQwEJ773vcEd925pFJShX28ARw5kyYSG8zoDEMtwT6nhQNiMN6YwSshobfRywzqbzZsZY6YWXT",
  "key33": "3C2vMUvDhpWEkkMbyGyuUBDp6bNCjCBnF3HbRoDkogd6u4Wdxibc9AuYU5uNDyKhUzVVrbqSmXKJeuHXKvp4JGiH",
  "key34": "hSboCnZZoissNvUJLdCig5d4x6Xb1t6sCwXkkVW7kW8VnQLVtQc9zZPjuYh5D8Yxr5ymj1x9Ac9xzCrCVTbbwG1",
  "key35": "4EXa5yzrbR8t957veD2499zLrAbtZZPXJ9oe29EbGKCRao6Jnmk6dApCpHjStnr2VEi9SHsuciZvs8uqepfdPKMn",
  "key36": "5rj9or9DJJPg9pd2RsHSUUyCNyu15NtJHCoH9whU6nosx7bcvecriGSXgHy1P6qq82o9avspbvJvoS5HpWiiHV3U",
  "key37": "2x3okSPfrq5sCo5D8ivfwDnTUuYx6HA888zjyvKbQAjq1j4WzwVzWN9QQ46w8R73rqLXLGkcovFCdx16hKVqN1eb",
  "key38": "63TQHMtPqQ4SJ6qoLqqaovjcL6TnmBPvaRsCxj2E7cgBLRDZQ9g86DspvojAscxXweUrfaUc31Ex9mi2rEsfTtNF",
  "key39": "5WZfLrmw5Fa53eQMB1sRhRbNP8MYzktE2GtrYy1Q1dgHwWLwxQz37ff1nBBKWXx3rEinnogh9Lee16kr3sYcTaZu",
  "key40": "tyc5Ki3b6GpkkA7XvuMQDWo71o1t6bzxVzQfRvn4Mm5SKvq6E5wKeLjniems4fxRH4ToEwpJRgQJCk6MZ9Amexh",
  "key41": "3ErxJ1aWdfKyqvvjzGgk68roRULUatSKstUqniySbsYnsnvMS18N9mb32vj9GEh3c4ihz7jcLA8LDuYRQNDQoeDZ",
  "key42": "34qaYytzAmG6cEqfSvRvY8okPS7z2DMJ1SfTTcaCfVjet5fejL1HU8TSasfyki38y5RwbuBN4JcBFbBCmPbg1jEd",
  "key43": "c9kU1X5T2DrZVcxmv68RNuuTwVAQNnziaKT9Y6krQ54HV6LLd6dwZ2V1nBMYzrbwBcPMAZS84thhJhkg4atfbvG",
  "key44": "4kyXG2MQWcNLTLZjpQivYuhYFb8c4NWdEsfSXg3nkA8eLZ9ehavpvzsE7ffmozcQuy93RU8ce2px9smjH74MRgrn",
  "key45": "7ASsPCWUz6eNyZ2A6cHg6XkLBSpMQYTnfWawLTy9FBGAG1FFKNbehkhpWtXNeshc5h8fZS8Ecrm8orFCDpKRn6B"
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
