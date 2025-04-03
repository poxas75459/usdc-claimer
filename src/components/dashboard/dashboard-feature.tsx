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
    "2pH9QNejkz1wesnQc4gockj98KTEuBk9PZAB6auEkpvdbdTa8dwkdRv2EhTwpkrmjkUZGpMCKcX4JTrDEjRWusfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyH3qRvT3FEEAFbEpsUs7dk8TcPNfp4CrupzRkyx1rb7A2QiJEYS5vwmSJPrCrSZyXxa7scdUebiVA2vf3bNoaS",
  "key1": "5Tq8irnxkPpC3LQ529gp17EAwVa5D2toeE3EvCz7WWEQzCvx4K2XTmUNGFZpqXXd62PFHMo2mT1uE55GWGjTUQx6",
  "key2": "54GRkXaLP2fRjFNSn3XcsV2bSbqKZ1YTaV76ceMxDhVSdLjqoqMEpQ8BSy1YVwpgF3ewVHuV2DAHRPRknsdeU6Aj",
  "key3": "uQareAwmPQjN6GkrJZpsF4nCw3HxoNbiWd1VPinNM87gUK8afNGJYH3n1RU3b363tYBX8k9fyJEe9hfVxjqmi3R",
  "key4": "iZpSHBH7rVNZLYbauG8MVwyT7CNT9Wzht31P9aQ8z3XGVehXQkderbjqoXytHvKCcjvfXdUCMxqdvf7qGKmREZj",
  "key5": "4gtKSczNGt3iBpNr1FFtFFRbQXE8a9RkTNhznau2DfDdLLRK6LpcMAN9zyJJCFfxcj6mJzP6KhvkUjWKWxiBSBJh",
  "key6": "3ck8BQu9p2G6ahkihEywr1CNTkSZFMhPtEqFt4wf2vy3CMbefRYRnSnXb4nsvD8oEdYqxAmNFc9LJbfzAA5Y7hQo",
  "key7": "2cYuSovAZKR3pNDCynJEbUGq48aNqKBiMMvVmnCHGBYv2ZKr9Ye45PPqWSRnP5MH73Az3SDjZyofUFCK487Yig8d",
  "key8": "5Weg1GWVrtogP9KXS9kRnVfp3GnyWWe3soj8QWvHFHmmEEeKLzeK1kSZ3dTYFUVg5UiBjJ5XsE9ZqMbpp7SKeEna",
  "key9": "3VpLF8ExnZj5Y6RgbC1BNq2cp2TnK1Gn3zGPLuV9ZBDKdn4aCqKg1dkfTRe6bh5x3MWdBmvPwJXEAugar62gHEML",
  "key10": "24fNX38qH3c5APiatqK1CwV2tCnAbfKGdbvJFvpQ8vzUPkszxfEbVQkmwJaADbms5HYLMX6bpKuVeZRyCoq3vTH9",
  "key11": "336cJy35g9pQeMz4xfBJkvZDNJ2jbPwewx5xfnbd9V4RXSh9ZAmA5yjRfzFCuP3n1HQ4p1CChVY5mRsQwH73hexQ",
  "key12": "2uGqgzWxpWWWywxopkuxAGNxnkxs45NJi7kzhjPW6iyz7E1mWPChxpMhmR4rTvD4KBtpkWfmotmuSCCV4rzvXkVd",
  "key13": "4oKDpvcDBz67cGU41z5AcRMzE4aYRpCTPdqgF17oHAQp137w2WYRQqBA2fayHpqVtQMBCiKs2Scyjmwp2ApC8n1y",
  "key14": "7WRtnJJCkR3eBopKJasQ1hqJg6ZsT19pHzEASAi9LUXrjDf6mGppBykVqAPTxumx7Gn7S45zrdecmfjX8F7vWm7",
  "key15": "4Ni12p4UYbkvf1mwXjUJgoWFMGpSzYGWZjqr3yPye2gWhcHMQhxqbMpwF9fuabA4pKHjbvTP8uujtUq1jm4VXKKF",
  "key16": "2d2AT3u5Svk2JbUXjX5jGFNsmWQ72UobShgKH6GQsaTw4XxTMN5ZVgu6nbGAYaeTutUgM1AE4MLA1HGhGVTFYp45",
  "key17": "KRP39Qr4o6Lgwg6d2XeTErcZnj7bZRDamTr8skxCdoSbvKjmFtMPLwXsmPWLMLqgqRaC3CepZL3zjpBf5JrciPN",
  "key18": "2tTJbnM1FaYcdzQ72u99632bd3gskzAYxenenPNPo8C1g2QK1G8Nvu61yNjp27jo5rmyYHGhdCRJuwfUsn7rR6qq",
  "key19": "4ViwVuysa6X41tkXsb6kgkibFVkki5rejaA5EtNrt2ScPEhsHb4oa2ngtddTmvM6uzJyKYpNUur3cKMkwiuKcDFX",
  "key20": "3wUq5mCbzDhFwDxCAG3Z9c3DjrxZk7TbE24oZGJZM5uj81mbgN64URRkJX3PUfaTqwCe6WwLqSaesuWCdCGzCYZm",
  "key21": "5SdC7a1eFTYKveGaaxwTv11f7gfrUqH2xUDNHJoSxXbo84LzNSfBWoHkNvd5BynTY3dbwThHbnPKyPy68Sbd3FSL",
  "key22": "5re21RE91G26rjDbL46FGTSStgMHek8bZy1Dt6EcTrULYfWBTs7LibuPK22WL6tQnKJLMud3GXM3BQPVp9MpLvuX",
  "key23": "5Hyppp6Ndtnw2JbguSmV3bvDqpHeAkg4WuUHEgHx2XyfRhJzeCpjeKpqKiV3RBdX2BqkfyqtNjGaAN91QveYVNuF",
  "key24": "23jHETJrKU763J9c1QZiinVYL2q4NZoS9iLwY2SwqAz1M45VoX6csnvVNwxXgKHxmfuDqG12n9WiH7bvjRfiEiK2",
  "key25": "EejtpCSZXFbu6mqev9uRka6sct5YkkKXC5wXFbBPRtCWgLqmbVn2qbRmbckCsDuqqyzqnoL9TQQtQnUEYZ42ZgQ",
  "key26": "2hmfbKCfmq8Laje9rpNcnMREUvS4d2aA3axfE82x8qUtHRkpFEjbSjfpVK4jUap2MDWSQK1knmhqaSsZqwMLqZ1j",
  "key27": "WxCrZVauVjhTexCqPjmFbgQbG63ksrsrzr9choRcp2Ha17Bv3zvhAwaKPh8aGeMCJoTp9zEFKPhzN9EbzNBBPBR",
  "key28": "2E9Rd2LJFGSBGaxTPSVtAf459be5e7DcdEFMdu9BsqKP4A8mof7aQwZfatSUbyEghRgaY8PVHJE9FJuNdMGMWR5E",
  "key29": "2Bpd1zxWm6L4Ce1LeiNvyGHpU4goF7rAXr7AbsVcbMmZnLjSAAU2cD2tTmmA5aZaLM9BSQdGG4cimHKnZB5V6Trw",
  "key30": "4e9K9ZNvZVaWndVXgF1BBxfRejdGJ3h9dDCz9tgo1DZAmXLWhiKnmH9a1w5s9rfMo9pu1ZWCGkBVjM84f2KyfXdZ",
  "key31": "27P3htCJDcryQRTtTBv6GFsE85x3aa217QtngJsVW2ep1LqVCBw9aSwxJh6vmB2cHjcg9ATBMoBZmwwr4vSMo1of",
  "key32": "4KEp6BxYe7AYZBvHocjedVwJKj5SgTgjAacEaoyAcSf9sYygiwSCMtU4CVMsSc9xef6y8uGPjz1t2To5kvU6cunC",
  "key33": "4qZGbP28CX4yYBGuHE1Mms1Qe5jnT9SGMDFJAWLhk552B5rMFg3dYP4WKZjYxiWiM8q6kuToJojeHUZHS2ra69CA",
  "key34": "2gJGye97zcGCawAHyAXca7buAhNa9UiGjeWVxzuBKio1ix5Q7GJL9en9ES1mboa4R29dDjJ2f8UgUDWKVo54CM7L",
  "key35": "3rU6NAF9cjvsuZDR6W9Z4rEXj146M7vW8Dyo7joZjL91tGorQs1qUs4HUuCDE7cpGB3gE75aYiq1R8XPCQ2myGSk",
  "key36": "34ffvRrDYDxDoY6TG4nqYwNM9UK75gw3e3Unwe4kDaPeSyaBz49pDeLynPHiD1ZShbUZ7Dh6vz9dCKuoJsrJQidh",
  "key37": "2Vg346L3gzFHRAnw2quyyT4qSFoJpJ6guXP8QvyfFATzWFVu3TwDjZNDHn6aDeeiqzEzh5DdsfuejnZ4wPdSVZdx",
  "key38": "71ejsDLA814zazQ7wqHuANEEHY9PBTgYGqHTzgPSkMYnLydqcoDDjcHRTu8DSvZAjwbS9mEoCydcuLkB6c5Wb9k",
  "key39": "2BA7Nm4BqHhgfHZxrVvDWQRvmxCXVKc85yTWDzCeQTh5BLBymsBphnoqybwgHNx6K9cDxVafc1ESW9Sc4ZUBK156",
  "key40": "5rHw476hgRtppaoFiL5g6trSY9Q7snWia1A8PrRdn1TXrsAReDfVExF4ym8tLd461DD38ck9xmroet4izQn76GvF",
  "key41": "5fX6VQFddyvu5YjptKHzsJSNdQP1Enq4g7NFSGPKRhZSX9D6cnKy5Ci6APYSYjxi4Dn4uJFRb7jVy7VmBvfr2hAi",
  "key42": "5nGb2buVgGhcNkUSckMuUQ1Zk4JLcW17uwhwuNi1Ae5LFdUi73TKQytuhCX4QDBgowwauQBSvS6Ra9nEK5vjPkAf",
  "key43": "3SPoawrj8eTtGjYCigZmYyf83wGBKdbKw7xgDPvXxQYcnLbgBJfsiA66DY78wkRqMGZo5vZZAvLNYXvKWVxXh4bS",
  "key44": "UveLU447xS6nCUsvkTEE4ZMy6MweMTh1FN8EwRXzNrU2D7pcQj5d9f1jfjesoxQLNpZ1i56nK6BJwge3ehk8N85",
  "key45": "wfFfpEhEDS8C8JmjarA6AUpMCasdk9whA9aPes6bMj8EwX5FFTvCb6ZEZSmPar8KgHsnZyE9KcfZyvL4uCLnnzy",
  "key46": "29g2YAC937NoiUymeMxezZggytECdiu4nKBCEeYWDyL7KR6vmXF7CQLNec76jQW8Nf1NCqHyBMZ8JojhMyoVprV9",
  "key47": "Bm8fNVmvQtHTnq4TBkJWL6V6pPpQLUKxNyY7UEukS3u8EfqvG2N1sJduR98qq21K4DL4HHKaM19nC8RkKukB2gf",
  "key48": "gocmevSvfJL1G63QMu6ZfiiQQQW3KFzGHEZ48n1mL481G57nPpJn7Wy2q2Z4zTpczFNEDSU178J6zA4z7cUbRDM"
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
