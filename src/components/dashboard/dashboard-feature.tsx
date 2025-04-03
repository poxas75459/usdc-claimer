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
    "4RsiagckScMv9qcq6tmC6bgzporW6f2sN6cSN9tVq6ELWF9LtGQ12m5bet3hL2u63uUcekRYoJvSYefNx17uRdch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGRZTLUMrW41qaQhzQogB3MuywQ4b9LgzookzPqVxBp748L5pAoRUTpg4bvS5DVJK8kegNCqtCwXc6vU3Tk8Qdx",
  "key1": "38ch3RXL6AXYB8NoaZanjag8KfKRsqg6hobgvyYu4VEyKK1TkUXgmcGe81PNK1PTpQdyGCyFF43SapPEaahDwFVt",
  "key2": "4vDJSw6inMU4ERHxYhjtPdXw6M2BWwwG15o7k9VJsKHxoRUhCF6LQR4VoB9ajh3yyD4JX6tzwN3XyxWesLFPg9fS",
  "key3": "3uo9Px8f3wG8b1EwU2dwbkDr8jytGVArVkwUDvKAmcKXFRLzswU31gaMPyG8jDQPAPv4VimtTFEgC6AM8M8n8iPq",
  "key4": "5eumzyd8qQoJiNQ5epmfVDLLyr5Vy9nqwx6p1NBeSxPRbX7Fk1pd8aWPV74kyyULjjAXAGjcf8uigRouDamxacYu",
  "key5": "592VsK2EaYP92bRcP2oRdwcoY14ohc4wFsrrZHkAcV9iagXn4hk8dVctAJyPd2RY4kkVFJ4x4wcXooiChAtxMUhx",
  "key6": "44sfAjZ2Vk6m1RMyYhqxoVpVnPo2DnSeNfs3C7kCLihELCC82A7BUehwZSmeyTUP4Ui8FS28YJ6ErF2N1o6BifX6",
  "key7": "HYnZr9a9myEYaqNGYmMoKrcEWNppUVt5usswFrT45JRmLaVCZhn6qRQXScHXJPwLdDJDkjSy3eJHj27UjreN92s",
  "key8": "48r2EcqHmiqp1bEp1EF4B6mbuUqsS6erHxiPZiCBCD3t6MnJR4kt2LcTkpvVNtVeimr5eecHvS1e216oebDgjLPk",
  "key9": "2tQ4V7jMx5ZN6EUZqDKCqxbRZKysfKs9qbHdsVns7GnQJd3iB55DvpBAdBiNGt2sZmw7ogiPLEr8isb6P2axcChx",
  "key10": "64rZ6UvQFdhzW3AcZFgVuJfyYAxrongRz52GN3c2sMyE6U6a7CZsSwmPyctrABroRzovaCezvQBccKB2VPFBijmR",
  "key11": "5ffBmYLDJhXcfH21MUvzQ3RAwAMHXEK2533HiHsrZK7QcZU6ouNqm1ChrscdD8uwsDHLtPaqF17HEV4Dd6ooJCkd",
  "key12": "y2eUYGQhd78Lmzw7DjHgZ49j1VH9LayLf9XGEpS53sFtUEyatxeKucrpddPw1xdJnp6LV43Nwyx4yiFS6NVKNsS",
  "key13": "2Hhh4YYp3PAcGMvjrMgKqTQ7HNoGCNfuNCyuGjyPaG4KC6PxEae8Lw58cX7AMGu6esVEV5rUbxBAkkzHd7SPK87v",
  "key14": "EhxJnjcmenDMmo97ykgFBypy8PtGFimdYJ3GiXwAtzhPjWWi89yb1cXmCYJaF6BM131frwz41z8EJxTKsNKEZxu",
  "key15": "4j8aY6UHX6NGGJtzJUTMdDRPeA7W3WugVEehqGKBsVeU114kArD8HH6gzfQGseKsE31wHfVhbDM8xmaxeH7kbvFq",
  "key16": "4apbg28YyPhrVWFnj11sE5iCrT31ypzNT1wHGCSnagydsfFfNiuSbGU4AN3vuD431smJWUxQ5X72QXi7kfb2c8gA",
  "key17": "N1St5AtLDtDxkVdgQj234aWv1358NskVN878s5jaVQTjm2fG5urG1ivrP1yDYHhv3o8vN6WTb8YnTK62tP3BbaM",
  "key18": "YmDFtjF8N4JFbRcnQ1Lpj4EMi3gLpSu4Hbu9kop6fHzbt4jvyns1dJbRkUYFJEo9rjgMYy4bNT3qrYCgyVzDnGK",
  "key19": "8Dqqxi2QGG3GXEAcdUF4LsyTsHzoarDvnUei1Bw3u98ZYrZfSh2dnEYxTpa3vRN8T8vXYe3zFa82mr6fN5TVFPF",
  "key20": "PKzyNKFzGZV17AoihsztP1XqWvF5gATbsexs4r45YL6795MvGm3pvErGzUhfMuWAP8YXBuKeyivBM36e4EoJBaH",
  "key21": "52UYujTii8cEjgQPhsF3gJfjkETXzZnjVjZwVvjPMzt4es1aK4LTFqxxn8DGp4LtCSzgrSS9x64WwBggUyQL3gwq",
  "key22": "2so76HweThuZuDgUx9NAeeY8GTtBy65i3Lr1nEEUvKGc5BbShtV4VFa2gZUdnsg1W7gGC2ia5hjGDq38K7i5Czzs",
  "key23": "5XLbWCrZci7Lf7pAjTV481WVu5B4Uwmuw3dXsCN1Ho7Pe59sF6FJRuBCWTJkrjvmfTv85rG14WN1aK98Aw6ZfWCu",
  "key24": "3UfWvUCXMAh3f8XqR3kBDniGvztVvxJ237ETZqW4jDJ1eaSqMWD8HxaXpvzFrG2ybwqCPTtFTnfwN8h9tPqx5cTS",
  "key25": "4hmKzmvcaVdXbtZUuTQikKjBe3fdj5oYajxZu6dKBqTGdtegTzgC6cR1JfcPFafJVtMT39Gpp1uA9eshvXBMzcoh",
  "key26": "4sGg1vz2iFjBVQ2rvSGJE2LN7vPHwdezCmeeq4VtdMgy9NKv9kPUUu9rHzEQaeAbmmmw1ubzmzWxiiZ4PyAsT875",
  "key27": "3wetbmakmbZA99m4tZJPvKgvVrMNMPiJUWbZe4HLLXRkDh1ooEYjD8gASpENTrHVCvHdmcJQ7P8bQEyDnnQekvCV",
  "key28": "2mpANY839eVy6C2LkhNk3QDg5w4xRrmhPT7XnZfrRG3jc9qyEMj6LpKV2PcHFQoPTDX9VFcizVPvGKeF1zHQC75Q",
  "key29": "5HpTixU6eBJSNGiWvJcPTRsYKENBQsFFPFxu9mkd2iFmz8tw7QGGrCbjZQJ96dgAxERNiwz8EyGUQ27hYk9S4VYV"
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
