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
    "28X7R4GFg57YK2h7PaLt3593i17M5XG3ucNeQZKfvvwf4F2Ng2CrxxE5Lmz4gvD6DZ2WuAsaZMdGouEL4zaCUAk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvmMMe8wKNn6w3SVGbb7vUUwyuo6Eo3Lnv5DrhLmY4oBw7oiPkYpvLNw2THbbpW2ihuzbEhwhYRuhxKj4wMRF5q",
  "key1": "5k2KKLew6o35xdn5smdJ9d13byrhxRUAoCesC9TG1XCUGvGQwpshkVuJKdQWhkMjHyEWud9saZZGSsgGagSLUTjK",
  "key2": "3fozmCu9pH7Xk1aU4A6znvW8ayM6wxjmSmseBHPtVJqwX1gj52FnBP43PUCm5WPzFU5JfP8FjWoFu7YYsyGY9bdc",
  "key3": "56Um8FdoUiwvzgP7Q1Fo2RjRHFp1p378VHEeXN2nEbHUJxiNit7y5xetqwk5w47Kw3cDEBtd5ZvnWpdnVJqa8qiA",
  "key4": "9oP1VwvyjVU5MzeT7XFJ3CxZV6MAoyAYcMLH6ABkmm5THwZ5jvQG3ex5McCd18yBFHZ5stShYaWottyexXXA721",
  "key5": "38mEsJb1w3oUkTLiAW5JqDpjtKN6i8u45ShYBHrmChpR8qNLs3FkT11p26nuqJA52riKgS7iyhgPi21hr9CqMwac",
  "key6": "ckrVw2ffWdCLZR9T4ur6CgyXfX1qL9Fs26kE6ekjgMTt5sNMGdKAR5ytyUBS2NBcVqkFgGDqcqQnsJM9VjdiCMo",
  "key7": "3jwv8kRitoK6qMx9NpFxeiWpcFZHjbnbqjHytPDqSMpv95mDAex8VJuUL1WZd2bC9jgRfYfme118Egwzqgzeh72x",
  "key8": "5GL1Pr2G5g9rvrCGV4GsXjC26KQV5auRmbWNbd9euK73zydUZBPhMeuQnPewo9eMzfXJjnnJJ83CT7DM8kJy5xw8",
  "key9": "Dzfkb81bWjUi8JT3R8M59a8Dj1pXhnXQkm1Sho3vjRAvbqp9pA8rA1TkXksCgeyHf533uaRzDp6pZNn8a1kw7Ns",
  "key10": "64RFWz4oPQ1tcvyTmhgWMvGJhrABMuRZEmekyRHssKkYY2UsqRiFSNgpSpDNVZGbShuNdP4B4CqgJAv3yH5Jr7J9",
  "key11": "FaR8Y4B1WYEH1HKjKJrqWS2f6PnU32Yc9hwFyaZHG47RKGvvJrA4PhqdasaNM9AXqYam4TFBBzfEGMK6ZgTuXMv",
  "key12": "2mdHUkK25mLso7VDmRHM73mtPfuWTEWU23haWjHKYZMiivv7RZQoeLSPvM5pKzMsTSPU1QLQkdhuGMGbJJ3pg8kA",
  "key13": "4PHvcwSpuY9PJpWbLmtfNuJorD9Wf6TD47GQkc4VDK5V73AABN9e3Cp89bNG7sdbL5KGLyuWsnGyFrypsnQCe1SN",
  "key14": "2gnwhce9vdof5xTfd4U3CPGrMU8aT5VxmYX1bSU9kdkRuTwAXijL7qHfBkMowY4zcKhYHfTEA7Nw5LbwtVYATveR",
  "key15": "5kMUQf1GqdvNkd99eby8XUDptuzdzLWkJQg1zTMUd3sT8hSNtSdx4rDxCPnr6wrPXXUfEYgYdexEvzW3JUfDEVXT",
  "key16": "4pFWiAtmiMy8o3pdzoo6sd5wdNYyLsaTGGRSwLUeD3eGcsmnTNr6AuACrK2GhWS81kVfZhu8eXhkZPreWU1KLkR8",
  "key17": "4CdTZLNVnrgQi7KX7fDrri4jhDGDCZ7qgwwPnY9gczg7mdiZBcxRpFGtEuZVGahCEFuMLQKo5oV313EEGTmfetqo",
  "key18": "2svMXzNpGb3iD6Tkete3FLjxhZrSD9V6S1Q2iJYRjVchaWwGDp3ME82xZkXFnsmpZdxXtQtiKu9VK9T5GBEuBku",
  "key19": "Uhi1ZUjSxikyktxBwjovaJTcW3NoFC3CjHQRb42V6Br2ZwV21pAdk6QGuqCPizGLfWaZ4GwSBHYY3S91cxGYCkM",
  "key20": "5C8znsC1o8Kx5fsWwA9MQzPinmT8bdfYSJsLeP3BEZr3gjGf6rcpuwUzDxduaBCXNhgzEDfGGMZ6TX7dZ8WNWSVS",
  "key21": "3ntmgR9f1SFwZVJsSegtBLww267X9psGSmk3WVT5XvZ9TzJKbfvFEtUejcsDQu9EZRDLVGqt1QiMJ7kEWPsJXTpG",
  "key22": "2t7XHpSuRo8HN4BQo4tR8z1953AGqruKfWoWSf714b2AZZDz6YeLKXpKNKw1ga4DMKrNQi4bJY2LHjrdRmYKiADm",
  "key23": "N1sL8uAnedMAAhWz2TTfRYCdrZQYZYnnhoQ3aMJoB9Y47Q2ZzEWhHKBasBq5nrtJqq2tNpmwmL1M8mjM6P42J7g",
  "key24": "5Xdcigrsd1v17xpBXafAW4F5w4ZPo8vAnzoiohxZ6WTRmeqo2SAK7V5aSbpvnKNcC6BEJELttomepoW3XgDyabLZ",
  "key25": "2zdUs9ux5UU78gfyBFBSiC62FXyxU4tE458JHWbfxTW5R2fUAuts7E2NqxpN1DDGS7RVd1XsJuEQ6Lc6Y1hZhiqa"
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
