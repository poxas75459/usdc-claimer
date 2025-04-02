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
    "28Mtun9nmDMk1nseNnrhvjebxanVfK3je8aVW83p8TjBEf7N6mAWgynK1KdUKHfN7Uisrpf9Kmv9gCjC6qPRWec6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SS65AKb4CjBzC3cB1cBiKrNtY6Jnh8xpwyZKieFkMuHBicnc5jUhC83f7mSyK7erhzRXa9ckApi3UHsTCLggvFa",
  "key1": "xU6FAkcWtJ1LGTCTqEH2uHKJoqeRpBxE7e5jCfD1VpDKZD4UU7uZBQhAzLmQz6f6VUUG6CFuwPXQtJd7nN2vSZk",
  "key2": "3EXizFcqDvjhQbUACc7oDyNbvRUzKE1M8LGuVjkUizLokNmGhw2mpY7f1ebvwK8bfoEr6Ufe68RES6YYZfpAt9j3",
  "key3": "n9QbQTw3TqH3vYcHiENvQxG6U3tDUhYkvVdBMDrgEbyWvHKgCoa8REfwyAHW1aDpZsnadpHbfDGFDhL51gqPc2t",
  "key4": "5YJEoHJHBhno42ZE9TufcqJMVrUm8n3gBEhwDjjzPyjgU6XmUFxxUM2qhe9unr9YQUiUD2vkhe4mTMNQXVwrgeXT",
  "key5": "41e8jK7VJKpbdvMpU8GYGBLGfU7RbKhmHzGCANgsznbv9Vror8m5vMRxL5o9uHJzbjAxv2kwfgo7uTrdojuwAVrh",
  "key6": "5QzJxSkXNGz7D5Ao7jYgAZXAKoABoBrBaVrFQTj4koUXUY712FXDhNU7ZuNGvxvEs2ADyeTbr5Hqqm33tS3fqvwr",
  "key7": "2DeGXQRsnwfgFEDQ4wMde25w6ftiYtgrqSFjgnPnvaA4BBReYE5VRNmtS6i5ukMQmjAc6QnhQexr19SRUHJkQ4Ch",
  "key8": "3WXk9biwh84CrzexW3Sq4ugEDRBT3LvzQkgZBtZ3i183GFUWzQBHEWKEGEs4BP3u8JKLsyLnoMdqbhZiwezk8i84",
  "key9": "8PwjoPR6QNiuAqbTH5a8pkyY4Emws6SWikv4Nop4H4wkuKhr7DcBqXUYCxcXAcAAN9HNce9QYzvedhxiLBNsTL7",
  "key10": "34VFHwL3Y3vC611rwY3j7vqPiVosCjF3cwmNYzazuqaGVQMyU7sWE8vJGGQQymZSj19UkPUoGtY3uTYFSTPi3vda",
  "key11": "3gHSZLMj3C78A5CWuZhYezqfvfAQfQDUpoCHEpC6dg4hoXgC5BvSTec8qAV98rJ9tE4xoueMZR9xK9XX3nctaRkr",
  "key12": "248euCHwrFret5mMsFWwu3cXX8NNiBMLQJP1KJ6zhRrgTEgerQsHEaV5FQRvsDx1gFRfU5wYra7omrEaPyCmRECs",
  "key13": "4JVi9R6SLUAWgBZSt4SMC5vNaZdvyeVp224k5mVHawbSRUP9PjV1Zu2SSBkyP6eMUE82dxXkQwtQD9sreAZ7ECz6",
  "key14": "4FoidW97BCRFT3tEY7VYW6bFyaGYZSX223yfvvqr6mJb8Q4DobiJNxxuomaMLXhq1ERgXuxcREss5P2cqQK3Xhsx",
  "key15": "5QqfMsrJevNbwkeoiUoyNuyDH5XdnEUVEfUkj7RW157hEhhK6aFoG6RFZefnV7e6jDakNTyvZk4PFQkaRFkfEHNv",
  "key16": "uFFeGaoedCddc1fFAiAU1NXrABQYjeo4TgenAeQ3aAvNajCHcajmL9QEsc54edq4gJNnsAqRKWSY1M6uMAh2DxN",
  "key17": "5Lz2MWdn1bPQj8L42W52d1whAN2LPH8zuSEaFam2Eu2bukQg9fC3BuMZrNG6xwNQ1DhAi7BhP2CWzPpqewz5RjHZ",
  "key18": "52qNayeXjugGAeCioMVzU9XsZmtB8EaXfYu5QmdUF1hmeaCHDgRwcd6TVfQdzMyYTm3UtTpZNSUdaJmSeo84KcqS",
  "key19": "7MoGhxNG3A2D3wesWmBFkLuEEp1ytGBmToRNKvSb2rTKgmhtF9NxiKrKPrBa47mhmASytfzf16MT3sGEuh42WjY",
  "key20": "2K1j74rN6AWnhr9nGbnCcifvk52v3yhQKU3JLZ2ja8ZTQcKu3cY7Wr5UYnrz48puQhrgPxtuWDFk7Wd976sFgEza",
  "key21": "4M98QGTjqobz1xaKvvN57zAVzPivPwzg97KbhDnADAaB4YrU6r474do75MDRRdnPRyxUcdpsBfx51BLUh4vAd7Uz",
  "key22": "33XPPxU1tUrtgua7mdfBNH452cfWG6rTBgrjpqgg8derGqx8CqPSmR6oKT7VsKiwWCU52jUYYgaukiZNAhCSmqpc",
  "key23": "V5GSJmRavooe9Kk6Ma3wwBZk2V9VY9xV6UFF4UpNSAxob1isPYFgbqaMKdqrJv7tupGLbUMR5LGdyPavHrgebph",
  "key24": "5de9dvwQtTxgxezoMR9FfvtpxKJJyfxcJYDL3ctAYXv8uipbETfLwcVjH6w48gFNiPXsMSWzWARh6DwJ3gzha2Ns",
  "key25": "4febg9xhT4hHEjZgUhkaTw4yUsQ9wHki3kUKReKYoYeAhkehpcjk4tVtmQXXTxzf3SCFBrW7iSt9vhgZQKxoPtNN"
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
