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
    "5VcZ7q7u2DKRga46tTEED8YG5grQhXR8wgBDDh3oPmd1uQzjNY4nDqWtzxj3T6SXmUNU5Ubixc9PKghXz9oz8fcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9jmDrGEFgESKGfqk8sso11acuXqTWpwhxsbEyBpmfCfLMJfrXqmFrYvfg4kT8sFuGXVrsWdUEMC4RGrsAXXhK",
  "key1": "3wcSqG4vpKGfy9vkxfJSBkwJtXb1PNh3hLCC9gpAj5WR2Lv5SPKGC9VehBJxNqfCxAv98fQEcvmBWCAZYa1p9npK",
  "key2": "4ZRSm3Afv4cGymkmdgasgtrqvmsmzo4jySXdfP32PCqDUQmxMniKEN8mn7YAaXs79PathBYB2SQ7GKGpgFnroqDG",
  "key3": "3kTDJ6xJWwrrQ2YideYr7uuZHYqSky17YFb5ga55x1obY4uiK4urVMgKijBKThRv5N4HoQYx8o7QqvGhficM5JdU",
  "key4": "4waRfXzTQJ3ijhPhgbP5GfwNXcCpNb2ZkW6Yqn4ajX4676n6QjdwkrDLChDUPDdoXpXiSw86ZmSxwE95rbDQD4y5",
  "key5": "3hiZ15DSN3jKh351Xdd1tHz3WJHJLi9jX5bPqLzStEcBQE5k7YfVp42emZTmTPEQcFxDM9qpKHZg69pbcaf518Cx",
  "key6": "fJfmbr5fZCGrjxq19H9XgFM53UrmNZyPg46bfcHE3wHmmDBmLidY5mRapvGdVzGpscLfRmb8BgbdUy9cip52HNY",
  "key7": "3p82mUYoWCYjgMzrV5zgo4rbnQ9kz9HkwYzPK6uQ7V5jEhzRVunNKCbeVg97nzgCb8vh3cd7HnGbKivQ7FgNhj8g",
  "key8": "2pL16RGVLn8HSxT1HhHaYbiTQnmMVpXLS3GYJ1bC5f8zU3T5Fqg9J4BbCV1aviEmaqMRBNzxFX536rbhgYKwdE3w",
  "key9": "kr5s1DWAnNWc5Mi42BNnvaqVxCYwc1vmUf7nTuR5Pm7VmCzbbf9G8wuPWtrTaNM3bavsEhMbdy3G9VQjfoXsVcK",
  "key10": "3AK8uWMGRFoT9dfQZgajXyQu3No1DAp2sSbB1VGh1EpmJLjW2Z9oFguHsepsCCve3pVUzzG9U1VU7KbaJT7j6BKY",
  "key11": "5UzynhFQFUgncJXzPHHp9Cry3u4YbCCF86jFuy3kQojC1yTXrQCvsCyKN1uf9SCkhr24DQNu3XCKheYnziSkCrSn",
  "key12": "2s4Fg9rLfQYbacJ72rn5tXdF79Dn7pTn4FUZFvt6PvfnbbAkmJUd1PWFV9MTArwdXk4kRUGeao8nMYvML5u2L1Sf",
  "key13": "2ZifeDj3WrEiwg8TbKU4TdqGW5T33Ls8tLV4aTg63CvPWvNtZ1zkf7QsPu9LPfAS2hfXzMkUiYp29LR3M6kTUZW7",
  "key14": "2C5bRCz4pbAWrLPcB9FWT6EvwnE6paWGykwEFsps7Mgzf8VbP3MqJztX1HqJUfTQTZWyUyqnKyAAdSyUjhWLYh74",
  "key15": "3QJdcSN5UXaaMmzccsstEWhM1hde3XQpWve2JQM1C8in6uzSxADG6MuYkxNNXgFsVk6DVBegzr48FZ39Zce8Lj4K",
  "key16": "g3PVPSJPSQ2jwrDnPvZVDCADyWFwo4aojtj6mwS4tTcuMzHSZ3Szj9T5c9G5veki7us48zNot6e4qb1DBe1vi1b",
  "key17": "ZzWNp8F7AgP7Un6Aq5ABzJiKroxkCsVK7A8UPGaAy7YxeuUw8GUUmY1EZK3VnydNU4263CoJZ9wbALEN2Zcfmu7",
  "key18": "5sL6KLrJWXNvNLWQXdmYT1BkKeZqkaV2pdUR9E1MZNmQHUKP4xSRFC84GyEQur5pxS3eLLzhkZCqfUQeC2pXUxUZ",
  "key19": "mwCfujU4eoCBYkq7caMxyMCFmL3yrgPrkSc7PcfGdZDJQmZ7fgJdnD7VNQ1HYKXc6VLEz5ZzwbYf1RBTz65C3m7",
  "key20": "5LV6LGccxBtt7MtYasrteTpNEUqeJBQg3u4Fjm7enbtm7ohzUgsDpY4q9SPdkxMpBVNKePwnjnRyvQhp4sMY7JCH",
  "key21": "4vEBCqMUXRKHNUx3knmVfgwE5cL1A3sbSjcid5j8i9HRGLXWHeYvVwNUruwA2ojwU5LR8nMYYPXHx6qrvCpRswGx",
  "key22": "hhBKN89BKSn9W2N3ZKj9KE4CWSiLc8FPVkcsuYLUnDHxiJMuonrmmZshXscCCD2B5GjtT15UaxaTewndYTEMFeX",
  "key23": "5Q4PVUJ91pzEvujTNpnhth2BQyN85vY9Uh2d2QKEEQkayfVYmyuTfxt818PznEJwXhPLij5GVu5Y116S7dSCW5J9",
  "key24": "4DBosfCHwDsAs3xV5wEjFeQrBLxdNyLqbdfxA7D2jue5BjuURtgALfHtsJfRZTVEDFcfrwUoLEdWccueQbqwZj6c",
  "key25": "63eDGkPj6RkRNdxCn8P56K4KtBcVoz2uEnzFy28Qhoaahg89iMhmuAak3W6KCtoigWNrW4W9bXc3xbD5BvYA2nnL",
  "key26": "Vn5xLathQ9S8iEMtvdtK2DUwHkmuM6FMx8tDZ4zwqZMkg8vmpo6ofxbCDBEvpV817ySd9vbCY6cszdVHL4gNbbg",
  "key27": "4atJqT623qb8MdENa1YPuKbk2VRZ9QBXfSDD1wzS7E8Mn7dV4vcnH7HgV9EunHqBFxWnbmNzqXUZqs7JV2Srkcqq",
  "key28": "5WYnSGs5D8VFbzXac2w8uD9usK8e59ahk4Gam7REs9Edoyzi9hWASdf2ZfZKoZVjbcWV7X99kLQvHkohDoB1VycJ",
  "key29": "4G237vZAtui3TvnmkQdDUfnJJ3uD6FnKz5yYPKeMvm71tYnSaMdGPTYbrvBoBFnFNRXhjKRq9XLUVm6jgN27EZBP",
  "key30": "2FyK7TJAbNmFKbFciUUgJCgEfgrTGp4aTds2i82PXzTcRX8NMNQTxTrW6TUcVVZkYmyVowte7oFG9rWDp94Cfnwn",
  "key31": "3DNXwWjmJhkwDU1KFQhBUaGqRijBM5yBLoqww9kUDG27ULkoKg8ZsRXqPz9RTmJXgrVW9gGEHTMm24uCoTJenVWK",
  "key32": "hBVLoj1KFD7Vwn8bqCo2GasMZU8NXPxag6WKwSwEAaFTdi2UdDnhAASNmE7oer9EoPfvg4bt6y2CVxJBLbpiuBA",
  "key33": "28snfxgR977yn3aAT4Jtg46jTBDJtfbyaRUS4sf2ezMp3nwJjhJAeCv3Gu1RwkQMf4xdGA6Mzrm5WPdY8DWHnYtN",
  "key34": "4mC1jTgSrTtwGNqwoQhngp2mKN88zhUFqBMwputwuUNspVSj8JHDETAYPsRvzFEmxUw487cqbHX6By1NbmWAJnvV"
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
