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
    "62GzVid7MkERbH14tL8QWhzzrocW55tSNRQqSidFsukYP4M9PqoGehwLEE9PxQqbAdWQuGsPs77Tbwi5ckHimJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b99kAbScGjjGhyQSn4HZvdZZStM7YZmsrY7U788R2EWUadwBNcHhvuN7m1WhAVQVVf1mzCPCCTrH5KcWunKjwjV",
  "key1": "5g2q6bHF7328U6ojbP6fv73uqEGfe5jp7iFnpV277tsTUTLZMWPdjKW9V5YF1ik2M2ps43u19D95qhePv9cdEdhi",
  "key2": "4Ar5Cki5hztBHdZabbR4BTnM1JpSzAqZLYKxuVjKBFgWtLDNugtdppnzJymjAbf8LrTH4X8xLe79TeD1Ghm8P1ao",
  "key3": "4DZQ1HTnhjSkatW34MSmBqxyLuQnh5i8LeNeDwee16mou6X2jtrQbZP4PnwwKD52tLLiZWVR535knuJgaCF9iWJX",
  "key4": "ouBZuH3KQ1CojvxaQpsqjGxKQ1FZcfxqWgnjm4mZvDv5KxTiBH7fDQwBCy469Y6JeSqPamiwwsYNzrVo9fYjrs8",
  "key5": "2m6uJy7AmM9akMiTban4oV1JBSMHEnMANkt1FCbaVAQjxrzyquB4VhFJAv1hmfh5jxVCX1JVNmaXKiH8RZbmyr1y",
  "key6": "2JJZij669bJzhgprR2XuboWtVP7NHGvBwuEMqAH4Bj1F6xhJfLmr3SpWVhgTBw7ZP1tW6cQeSejNUXydACYSyj9v",
  "key7": "22BgEz5Qb1A9kf7GpYFcbY63XRWoFFs8ZfZ5T9tb7enEZo4j9HvaRwZeHzk8JfaGR3uh73jDTTNP1GdjbUGfybsf",
  "key8": "wwUpDSrpccqQEtvBdqzkAZAofxiy98fCedLtfroFgGWaVHNEG777A6Dkjwdotkfdw5zzMLvzJs4nMobkKnAniGd",
  "key9": "qYH9vvaPnwqn5B1M8NfLVTyiFy6huMbRyfvbs5emUjXgQ66KJ7GoVBkHYDxDRZTWv9iJMziVuYyfi73vkjxjtWA",
  "key10": "34PRHk93wyHDb1j5AnsKjxw12iQv9uibzxWNG7m5R6783sW42uTjoCJzcjJfTQdDWjAnVQaPMPnUQR4JyhZ15kYE",
  "key11": "32mpSSsrFgrXVKfTJiH9v9WhTwuZJeAu1i2MKVHZ2mQWxVXUbi37rpkEhyfrPfo88Nvxrai7gmxcgQGo8HkDQENZ",
  "key12": "zw3gxDcokEPyL6wSzQvz7xh68mPgeW6bq8AUhF9GojVvigcrJg47E97rrrp7Sr4jCArqHsi92T46E4bkkrmteb6",
  "key13": "2MGksVcPMocvsXDVCdxP131hpCpUHXvr6aY2id1YEsvWXFAdY6Vd51M5PRMyo2uJ8AQonwgUVhVd72cpaWLCPHfB",
  "key14": "4F4wGXeuxiWttPCD76zGQ2ruKeHjRVhy2sXWXyupT9ECZWA6tMU62kwdQJRcqHNGnivnkoK1vLArHGmRCpsZBmHr",
  "key15": "4DCKZ31mkNtF3dKmr4vg5hPdnJHJhCVY2KxH1W42v1AHD7mpzQ8hipq1DhLm4ppxrTjRqmR74hppBV6dSVaW6dxE",
  "key16": "38pMt5dFqotN1wtHaAGPZzQ9GZZevZmK3wzxuYqwXMuGvR1cBD7wNxkHxYjDmoSimkyWiqp1ZRveybTj9pQ4t9rP",
  "key17": "2Fariijp23Z8jNs3i4n1ofitc8o1yxrJaz6jUj2L2EudvFnbh7B9KZLad3ShoUqTy8GqkPNXm8KBDspPrnuw4NRg",
  "key18": "52vys8Mk1QBr4fspkig4jCs6zSFgtxEgiiNcjvdxafvu5akFZXEsrd9CoyXwKCA72H9PQRzGp85fdpoF7YpJGaia",
  "key19": "2QJSZaemZdNkVHPzSPpWveufR8utiRvryr8v8nH78DQvMYg22JTTcuDdkhviE9CWog5kJcAdkfd7sLrYM3hBEYSo",
  "key20": "4mbikiDC7GbaBtA18M9H6YeusDoY947KHQE8gUxsYLhSPnCkzPrL3auUerzsds1hT6kJwX1WnKB8yo6VBSsL4DbE",
  "key21": "2NA5ZVmmyxKpb1V4EuqUwaHYUu6FkxtfENqyxAJ1q7wYJAfgQJYNadsT57FuFaHFsGwM7oYyLr8M536eH7qosvYL",
  "key22": "61HiqMRQdZhQT7nu3W82pCxKeb8KY9xdAvHmL9GYGBp7qf9SZARxBYteBhtdu5iWm1FxS74bny6cg6pNJiPhqRqp",
  "key23": "2pwaf74YqoffHcy8xyiQpaXvw2FJKiJfkJpiEqwxCoPwZb8r2JUKPUdmFVo8taJw5ZpygYSaQYqCgJp1wVQg5rnS",
  "key24": "PuL1d3ZKsZRG5E1GquvbNVVi8VrLjpagyFVawWL1XgpaR1uXrbbNJYY9nr8LT2gp9xA6zZ58yey88naSLqe8zcT",
  "key25": "dt2qWDqoqDk1QRMULWEoJ14CHzcRJbuiCteZNLvgqJkCRqZRA5DPeyhpAChYFawvnRLHiiLfWpnMkMbx7VGnDPB",
  "key26": "3Giyc2GUZLxs22fM4ab1CBpQK7sRfG5946kz15M7U53dgyFWZ25sk7b6ajWQkS9SPR4tQqUb5yu7S6n3HghX27Zp"
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
