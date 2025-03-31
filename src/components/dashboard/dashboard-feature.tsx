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
    "3RUWPDUsnq1PNKnHVsR451M3WMsRVLu2gLi3WmnRTp4KRyeZAfxFpYATdHDGPSf4gjmf7NYR1DU5XiNRZWzKKAjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuWC6TjHdzXCpmT7qkq9B2YV7dX1pvDeXaaTdUJRKESqjSvYCsCb4ET4KrATuAp6ZAQhABKeWg3H1MGswy3cspP",
  "key1": "5jLJtQR9csVrF5EneLcJidmHzJQBAYdD14xnCzX5AWzH6hRxnhqtVzRvsdELDutLzcuCB1Rjobuxsf8mR8JKt86A",
  "key2": "4i1feJ833t6LjXrDmcsYq6Em2PG75w8LqRh5pta7pnFn5tTJWjX1mM3QNH8m6q4Wmac8NqvQzYerxLgKRHgJuDZG",
  "key3": "2Y6NcTcfoi2opXhiX5cFPSvdxqU1eAFHuuzQpgSkeFtpcVqenpCiPiXkadsEvMYetVqbsW5hKfRizVvHmJyzAxm5",
  "key4": "4293KEwH95t3ChUrnUGuAYZ2XEScccnwMqJGjGP6GxDnEB1Vd7JxLU1eLTAqRCoXmH3ByVCjeSG4zqzBPUG5BxU8",
  "key5": "4ytvfgshmv8iksU41DUAvU7nH4j1k34V3Q6V3BTsRFyYaNRNReGpiJUKdUxYrRhvqZTMUmzLY62g2rSUSrL8kfWL",
  "key6": "2A2VhVAXzJbGWAZxV81rpxVb63pSdmUpEMT6rKePVD5GfYsGAnie5DPiKoTXGrVF9strGunfDDW9Tfh1zP2rtAKQ",
  "key7": "3RbsXUtqeREuTc3aTDKkAShqhGbb5hQoMpc13nMuADPWFnaGDnXGpqXaiHbeLdQvqzuRJReaHNqYb98FCGN4H6uk",
  "key8": "2yVEwWVVpXq64NDPN5ZHseSy8shguSnv6oZeNhMgZ8qN8JksZ222678JJSTqBJWYfgkuHpRX1cdGj2dGJ92MKnWJ",
  "key9": "66txYb1v2yU8uYiXuC5oJk7Lf4nU4utjsxCLadRZUB7cUQoyntbpWu1RA4ym1XaYyR9Jj7dQY3ANabfmKNdfYUjP",
  "key10": "YXNE1d3fSo5zmvnP1sTTHP79Fj95VkTsPdL5LCbJXw55f9i5JogUppLWfrChg1FxPTGZQcbTNpyAN1bmYAhMs9f",
  "key11": "XwxKMC4m94gysL7XEiVu8aCBwnTVXS5qNkDkKUgPXMdyxm7TxSDfwmnrT7KwTwynLZgKERCeAir5wXVEtEcStcy",
  "key12": "3Q8JgyhUXTBwKUwfnCKURbZyujweBZKGPrY2DLrLqJiiFaW2h9iKaUw5GoHFxnvNLgvCAbXVkS3bwpCo1F7rXfrV",
  "key13": "341VumdHnCDSifEyA8rCkZkngCGvrww5CtKHdyY6TaFM6rdfg1vLdY9YVofCaisv9rZrXsveibPQiCgrZMEr1W7w",
  "key14": "5CQfyTvyn9P4RZwginrJzVXZQTB5hMRTfy7Q7raWiVKLvAWAVCeLcmc9jxX4q7rPKNmML41zEzSgDRoMcrXABntN",
  "key15": "3JsbvRiQXVwNaAuM8bkZn5NWEnRLrHZhp2fK8cxCJfmiTcxqjyqZHngwFa7F5ixw6vMJrto2fyJgTwdEjFhXXJxs",
  "key16": "3hJFXgjW5C1xjuaFzbibjZttGtt8sSU52KmotdF875i7DMV7JMUYWXoZ3fWcv7mcPWRineYVm6Qp3xZbGhz1qgGT",
  "key17": "1RJ8j5K75DMD8GAYpWrHiMYBDMFaFYM6JZWKMmTDRPoJqdHGK7VkzHbVhm5jY6jcPY4MkJPMQnNbx9LDpYpbwk4",
  "key18": "5mTQp6xJGZ8uNEs8ajj8AtWtYF9GoNxNZNb1dHJnEGQ7BNfyEwAAzEkYWHsdpcnpfK1ZAbg8BkHpGnHoQAkJoXu9",
  "key19": "3PPReLprWajzv2BkqAJcyEzShbWU6QKKpB3yaAoy8DxAd5cFvrL58bzFBMqqXmAXt4QpgmBPvkT1Zm1dt6LeqqXX",
  "key20": "51Y6Ye5XvjKGscuaxM7vpTjvcfwWaEETazk5NCK9vvCeoAmvEpCwz5oK9JGs6tiS3MsheDRa4wTgA8iRLPxginTt",
  "key21": "4P4tEqxrEiU2T9FwistRUy2hnkpRdo8xioimzHGGspH8E8TLkGpcsSgyQwtAqbqJXjKEyapfeSSHNBZWfxLDcGrZ",
  "key22": "2jkwz76eoYSKzXd1GfBhFX34qix6ChtPw3HDypkPDgRXk7thmA6dcZzLgs3LXrH3LeXyDdsrAiErQcWAXEgyBASF",
  "key23": "5YCMvvp6hT1RoVeGLYs4fqBBAVx7d3Vsd6WhkyU5aEfH7KvsFKS3LuS9H7MWrVg2uTsVac5kZ5Q1EZwMop82Q17F",
  "key24": "5zyJgYqw6mTYZQ5QSNNSj45RxaFDk2z4Pxopvo5GfkkKyk5uMjrmicDC6pTe9PEZUaN6k9UqJs9dWfwEQFLnPH5a",
  "key25": "geu6fxKuVqMsqX9Hh7tbPvgzjFpcRRTPjehz2PE9VYVNsxBe8AS8nT5co3R28Qy899Wv5XoLaNboRuxkwEGk5zu",
  "key26": "4XyRSYXTqK9jasuh1yUHSgnxTsfNUjRK4CgkiGdP5kFuyDXJnyvbiwrZpC7UECRWgDGktzHYhZegxi1fcZ4GsG9t",
  "key27": "5h6x6YPQNfAz7Crc2Va3zNyfmkTSWi8mTDzGikpdBP639qYeRkLNe55dn9dFLBVmECZGM3u64Ln8RkFfZtSt88TG",
  "key28": "DRUnVtsDyqPxzP1ojLNme4VFgUvatvyocmpqaRhHjmsi9M7FBzasPZpTSACfgvaAPvna46gEnp38fhhCmXa4KPu",
  "key29": "8CQD3HheRVZVC2oTocTuWEknN3zBvgeMvQ9ygJxY1oJQuDPawYPgofZcN6pam85pnfQBLWBKpJqmZprjdmMyaP3",
  "key30": "4aeKLCxgE38K3XLXd4VKXjevUWwasKC7aPfX758guHnikh8Qx9xqyh2JV5kbkBtasRv9tCS3JfF2J2cpCmULPGTG",
  "key31": "2as5pTsNpcVKpwPbSTRCMcwL4rGsfPLLm5QcJcxs5DfagkEPSajsSHKjFyUXqDRAtNVuXmr8s9jtS2SJWY3JH5dZ",
  "key32": "3uCCqx1jCkRV3AAQRHtZW4DvLDSEA5QUarARqJrUnT9aotQn5jxLDLXiUD9Sjuzsnj1q8LZ6UXz7jyqqqnRff8rP",
  "key33": "2FKHKm5vRX5P93gWgkWRGqkRbpmAXKVh6WovRgTkC5SJTXnTAnbTWBaiegXSaSdRDWE9iVoW7jzniBMWj3CzYNFc",
  "key34": "5NrbfME3R2SJCbFBm1GUZSznYTsDxa8D5KovuC3Q4aEPAkRR9KUZWUeY4iAiEjLB2XZRTfrdBvbUQXo4Vacn7HTw",
  "key35": "2w2XKR1kYY98hqtg5kGwU161iQ1aUJmMJX7B5h2VTX2FXJCQe2tsopFvejAwzi6jn1WeoFACYzt53TSvCS4X225o",
  "key36": "4tx7zYFr97SkU79roRPiYoc1ZhHEJk84hJGUszmzYT3a8nQeC8KEdWYnTMJRyn7pKtPYCirCQNdN2tQfBi2kin9M",
  "key37": "5w71gTJs6fQsPKdR9VtqRjBdVUm8URmfu2SfCWAuhULfTJN7fhCqcXmp65HWqRn7eeRL1K4r7hZuPqUSaMFcvjTx",
  "key38": "2qwQdeAczXMwYXQwGV3A31mxQr5i37yaAkbs24eYesHxopiNjZpJwjHUKU3Y4qcWYW8bHgL8YgcjQePyhhHszjNw",
  "key39": "4kLpZJ1WHBksK5puetVRvKWCou4MrBpmTPCkefEjzNWoG7pqfQuHcrEHdT2F7ch86rtiL1gP57mMtPdDTrUH6woC",
  "key40": "2sAf2CbpDbc5eqX2KAG9YbqrGBS5sSxYgpJTzbNB27VJT3pz5agYQbW2KUN6NaNeWecn8VFbMH8FqLJGX6GHe4Y6",
  "key41": "63ekwck7epv4cPfBwss459Hwqs79Ame9XeWvQ6T8zBf1LRTC2uzRE5dGHfoMUAAcAD1ix22sBQMRosKnFXXC7xrK",
  "key42": "4gcPtFfkQzL5ZfRL6SvyLPTNRQe67HiDXVQ8d3FqXiAbj9aZWEqrJ9oKoYwEw8cL7VnrmuHiAf5R5k4F7dQDcWWP",
  "key43": "3gANmqFhKbcj5kxmbjEVrVVCvjadknrSETqtZBATmaptdvzSWy19wqxR31MoaTiF8JTiU94rqnVcJHG9JCAzGPJg",
  "key44": "4pzwSkVvLadcbPJ3Wz6mTSMLquAj632dxZAvDvhUxKaWz42u73EFnFJvGL1jRv9ESrALyepTybkm5VBY1ZCSxQd",
  "key45": "2vzeabGffzhWcPEDK7CeyEnryKZckA7eWLzeVxpMG6JwSKhYyujE4PNxr6CFkG7ht2xnY8uvUFSVpzey9ZvDgsQw"
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
