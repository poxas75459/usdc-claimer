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
    "4t89jwbgQBkHYm9EMy7XqttK8G3RVzmduFzQ5LaYWRTpM5qUmW7mZkLbYJjJdZVgjPWQzXErf8K7GxqGitJp77qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxruMWs4oyNS8HDNCQqTkwYhxUif1w2a21mSzug1cYFgeXRA1YXS1YqERnCDPJbChWWevYTmDGW8SJ6Jh5rqZ2d",
  "key1": "4eY1RiXuU3neoduVtiioV8oKHNe96JbyRNge4qXSmBcc7GHnAPioQvSiNgCD5ApvwZoBP4jNQTxuswgbT9HQNiM9",
  "key2": "2QHam1Rdjvk5SU5RKQt1ejijhTnTwgGhNh9Vz8svkQYYBVAiYYr97931vXkJ7LxzTYvgVJkmC9ErczN9k9bVeggp",
  "key3": "3km1LtUP4tNLKSELKXsn87R7YkbGoGXSQXEgaZS4Zu3TAzncaEpdYEQB2TawWU5mdRuEteLAAwCmMgXXHiYXRGXB",
  "key4": "tz8oy9P6daTKCqBesddeg5SQ9J8t5UyrDw83tQZjRJcuKeHMCjrogADKA1LWLihKjNpNpgggzVdp1vLj4U1Dt46",
  "key5": "kMX6qogU5M91DwRsQehaMRtTkqui2AmKGnaHSLzShZkHHrF5HJQGw4djvCknZBACygn6soXi7QjjwocmDUwEkMr",
  "key6": "5Z6sJ5UesvpvXhMd8urGqMPuBkWQPobRLahMQEhTSA92KefqJZpnAyCVoo4AQyoxHqQcXVcwEhVpC9LJZTLh4yz4",
  "key7": "4L5SFPQ6ohAMfpaVhonNKcufieW4Y8yLLriRxCZVndfTbXTZ6KiT9RTEJwKJJPrHmeSeCLF3L2N5TUK2UeRn2M5S",
  "key8": "2BoE8sD2N4ze3syXhHM7v5cjpPWntB1LmPZGdWXi9W1SmFJHWGj4xrMEAxQ6JzfeAuXB86qtc4KoyrJvntEoFVVK",
  "key9": "26WYXPTToBD2Ude5sTNmik1qFbkhrZvowzxHrQsNhFDAPrCmypncxqQN6uBxqB5DN7rHW1LTCHBeaVdbHZkPdiny",
  "key10": "ta65X1JrVyDeFHsM92ZGj5r3jq2xGh2AZJzLXzPxAncguiRhDbp6uEmqfCR3VWetQdJ82aNktFQTwk7cY6Afobo",
  "key11": "33eqyaR4Pq8V4pnc4o5wpYGcxNVxmHo8WagyiMmnv2q47APFYQaxnUGaTHFx9KEi3G71doeUwPBBG5GukjEdvgHF",
  "key12": "H3oFz8pwVEVV9pakzAFavamYkZDLr3XBr3FLZRDBrXyCu2DSTAAPN3zvzv1fhoFUqNFDntKEmHvGhy5XdtUy6BA",
  "key13": "7pUMHMWvHZyMWiUk1T9Fk9EaivQmAYMJRPBsTiSgE7r8n7WnFFkB5gQtUupaDpSZ5h4y8UH2Tr6GSeV1M8urQaN",
  "key14": "5Ru72HtSNRvW9sCeKK6tBQ3pq4py8aCvNShWREhk2CryfcUjSBmNF7sKFVwD9dGqo826pCW6qnsqYu9J6tTDQw6b",
  "key15": "4aXVE9FmC7oJrCtRdfnq8QKhzLMUYp7a9fhji8m2rPwrPsWpMXZaBpmcPSoYhAiw845QCRi9pRHgVGAri2Rtyze7",
  "key16": "3NcU71CG4awxX9GkPSD4EyPhmDM5JA2RBdypp1GJMGAc5yvswavrkMgVNn3uxD4ecV2FxvrDTuTNWuWKyWY1NDve",
  "key17": "2yDAd2HwX5J28yUqiLkD5BaU9VT6aEu3s52UoGRNCmeaRTFPAqHu2KNrh2q1L7vodiDWdd9mNVWtXJzcgRWwMF7p",
  "key18": "3WwgWax6ZfQtAM3DLLehj73hWRozqV2x89WCpEuTpacAaSFJiXZAzZpgna3CnUVwUDnJX78icZuXBwe5fC5o2Fdi",
  "key19": "2MGLDoLaEiJzD7PLYCxNJyb1f66j6ze2kRgUixMNHLpDfQjvQoKAjnCv7Rwn7GpTE9Wtyptra8acuTpPEZYeGYhn",
  "key20": "3ZAPpgSGRnctKUEkiEdXwy4rfr5zepKtgPyxTYoshvBwxTuCsQrEUKdLAmjPQmeSNMERQDn6EeFCQsY7bsBLTpAK",
  "key21": "5Xh6qBeKrM4WRtjbV8HuAJdk5T7URik4rpNcyEExG8QJgoA5VPj8mQSpBp4X2ucEA8GFtyY9dz1stRZ6VCCiXoop",
  "key22": "5KiYF3wm1VZgph9Kdn4nuKBy9C4GgUxp9rC3ktdW9DJxJcEhnUCP3UENLucjXo9fdPkoTikGqpEAZBZC43aXKSo",
  "key23": "4DsFjPz6UXYBeJafA8DzZD9niDrEaxKXRgu4SqjYFP23KeDbax9HJePm2TwP5s6VxuxrraypX9bsfuHMJmDhgWWV",
  "key24": "4ycxHuGeea2bCfUtz3eCxwsGSkx9g7p521xKTo53Km7DxZ1BDkpX4r9Jyh1LNxM9ZreCP8m5fer1dD3E57P5TwEP",
  "key25": "67hkjQYaNVQxsE6YQhdkyEJWn5LaimPymPJH4HFFpjbn5S6jUDqredCexuwiJBGjZLNReWbf74ZoERi5J5jfK3Nq",
  "key26": "5scEJ7H6rZr2JanUgP2VPv9srphfxUcut2eng2EjrKzUFXgXAjW9WRSiqUKUGuzbJAyuH2odD6xSFbHqtAaxbQcL",
  "key27": "3G3ovjQsNqRNFcj4bDWBQxkHYgxSWY3m5rpAsq2ujoxAR6wA4qGyTJkXBZzohFjKSKFPE6C9NWj9ByZQo72VoPdz",
  "key28": "o2G7aqCwzWXjAgPCBg3BJiDH9ckomHTuZLAqzu2XSQyzajaUKYUqDimBhVXioEfcnAh47dBu7W8ohotS5ZQ3BM3",
  "key29": "HBRRqt2tUZ4hYidcqo8N1QxfnKyfWa8T9n2bmR4g9x5fZSkruiQChqgwEyTmjHnN6c1MATYqc4tiYg5rHS7p8i9",
  "key30": "3qsTjkgBKUUxBJaVdVCzLEFocmJu1WjDBMXUqFppB1AzHrJDpcjPVtDXcYBjt5B33sXKiEseMqACqKCKLnW3LpKn",
  "key31": "4uNXPPCAL3P2SpKYbHu98UEd6b9Ps6HfRScq5tfkenhXZZAh7yiUpvFGv7HSXyp7adv5ZtFNC5nTxGHQ91cMGijT",
  "key32": "5FHZrxRCvdumXSr35ECn6ArE735wxE3CNhCAJLGoSrjHGBobTj4ueU8UyZkTsdCQpAFDD7TNU17AnCpFtmhDMTKU",
  "key33": "5HfzG7JoLGkx2Vs7fYLaZjgTkATdjBWED4Jvt2ycN7FUrCnZ1eJZQP5nKHCUKUjySQiMGhXJYfmZkcQZ2TSG1ZBm",
  "key34": "2ewzbaDDj89CW41XiAEwWuJky1iirvcdG5u5JfkcXJhxCPhWLLvBxejYdEtMZ28QEuGdjiPi2b4yySxKsBiyoLpa",
  "key35": "2WnTXPtQWdn9fCZUBW9VYqs15QMCyt9NdS4gttd5U2LtDwmVgShxMWUZhdN8eX8PdgAynfEPTjbtURUhhJFwXanU",
  "key36": "5LjrjA6oAXrSdzS7fiYzxer6oxbpTECvHyTgRYf12JMe4VqEWLVwA9LSMEKE9BZZQUtxJZrJV4qn9YWDhTiX9syX",
  "key37": "5pJZzqpoFPkmJmzSygEEn3Xxvn3UqWryaAijeTk4zYjWshBwEhP64m6TEdc9S4V2Dhg4bVEoWJVxF9AGzJKnXuYa",
  "key38": "5Y2WrrDrm1HnSK8tTbL5a63RfcJ76sCMNUXvmXtFgNes3Dt35J38EMtwk4NeNwcGYtQgTeDcNJJvdJgD9uiwa3sN",
  "key39": "2Fe6ooYJMURznSQzgS7ZGq8XJK3JjDoxRjDM7Cni7YiwGvWVyXGQBVCtgf8bzn6btnJJfiRwZaZWfXEiAaVx2TWo",
  "key40": "29iqia1SzUnwa9UR6BvuP4xuLXYhov1cdVcAYq3pNgCDYrsoMDvuYoHe3UqYrmpp55v1ML3K75sXMSpYDgs9vLdw",
  "key41": "4wWhyC9w1pCnkeCHWvuazo5CvDh1aoLCnPcb8caDs5SJX8VCuYenbREtNkwTFFYfKjPwZiZnoNaoGjhKuF6wZhX1",
  "key42": "2HawzoPQF71QsEAp7a3ebsZSzDBFej7mJR5DiYuGBnShpbU7wzwWeBngF8iG1mnRViQoZ2FurUbS5QBJX88nC5YX",
  "key43": "5gk4CycRhMEhxgSvB5adVP33QHUa5M9TVLYS1N4ZjZmKTGwT7tENhfXDLoZ1CqdauW3xbH7DWvjqQsGRZh8UEmEd",
  "key44": "3ae7W5UHhPYrz5DjXt8ixb24CXhYz29UFN8UW6EcBQMyLW5uoPFFyz8tL6VKpJUMrhy8PMt2pkvhdxqMcBZSAXDC",
  "key45": "2hrMA7epJM482dHLeuU2hxXZw2qVVW4pPg3QArhVCeBjVcPAB5grSGzpwXS1XJfMAt3AoWYPKmx7rMAiXXiqhUd1"
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
