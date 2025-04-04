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
    "3YTnBfsYaVwxcjSueUaFP1LKYahzgsKskV4eLWokJMJgrSFHxxh7RWCb2zb2c6nsgLoRxBJTe3D71kqnvquKH12Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MSLzCAqSQwf814wfREgAQxs6XpkdYenvCdjtLwKU4Wzz1kDBeRA2NNjV8cnTxTKEwqKDTo9JJ36ySu2b2VKGVg",
  "key1": "kRYnSKoU5oa2uCZmKLWuozdy45njCogKz3CsYWtG8PmjqBUsAZEjLs71KCKyT4LwitDRiYxAmaQDJMcFpnDMCR2",
  "key2": "3mJm6BQ4zbtMg3kSUWDrgoUGhPgYYcijnL3p28YWcfB8xWtE5bH5kSG4rJKhqnD4HRbVLXnDUyD25Q1bWSmTqe1a",
  "key3": "5dHgTaL6sypgCWxdq6SXfMdzsq1svdhoPrBWukwb5wGmYWc3GKyjvqQiVyc2omgpbzNebTzFC3sAFfcj6nUxZj4L",
  "key4": "2qiEiRGMLNvxWR14J6vhE8y9i5W8nfxbSEZCAqvZjQP6C6WwucSFYg86pjwk6y3jkVzpAwPzx87R5kyVVSYt8UED",
  "key5": "2s5NbV6A7H1zQG5dVnRs6RSi4t2Ff9goPN8XVkXK3cy7y5tkPsv9gSDV139HjqfnP9YkguhvgBsPE1QcBNnpKFvD",
  "key6": "4v4SmyEmV933mfwLXoDppxWksqLvB2mGYihX3io8NrmEfJUUmCwkeKntfXe3R4G1A2h4YDRjfnVGYDh9WZVb8tKa",
  "key7": "58R7QQ9m6FRY3oqRGJdFFNBHtX2azgg58AbRDJHuE1woNcWbvHHHUQpt8q6tVyi6TV2kYF3vZNdFs4L1tRV4JCK9",
  "key8": "tbXwrqj2Y7atFxriDqvajKvrFrjqbTgNUUcuEXxxNaJ9yiEZMCJWVya9ULyPkvBou71TRDjfcFMzhPmJHhEi9PM",
  "key9": "51JQ5n5Q4TsnpVBpsAQvnsTTBpwhiwnK41JGNEAHinnXCW4HiQy2jDUDXVectR9wP489i2Kt7p8c83ALQdRZ1Tu7",
  "key10": "4gD2sSzwUaEjyBUz7DpaQBTJptYcTFxMV3eWvpheS7jqd8fKR6YVb6GMd2tt7LkA4AUFUFuYS7bykBzCZM6rwQdd",
  "key11": "67EvTyyacLynHfZ26o93m4XGMjTrQF4L18H23f3qrSXtC61BQkmAZT7ymd6WjsCfmB4LHU3hZsqQwdbnHho6aguZ",
  "key12": "4jV7sRUfAKpWLwc6y6tNR6e2bSStV5NW61SXSt1mBm5vDnWVrCBSv84dUTsN4edJLWXDw2uoaHvJTefrKWjuxPS9",
  "key13": "rhX2YMt7MuXr1KoDCXhm734pWocCAnpagFsujWgETygfy2yVA3S2q98e9ZpqieJDD7ZSQaQJgTtCRR4JgmAAgX5",
  "key14": "35khK6hRyFvdQSHZbz2PoRD7MQ73J3FhUumhnLn6hpPoQ7daVpy52XJkzy2dqwCbheEcnhebwCDutt449eidj6pn",
  "key15": "63RPxdA2QNgNzr9g15JsKFLbgKUN6Xxg22wGBvpS8CtL94KK4XA1fzNP1QmpXXpwK6YEBvmAkXbTgZjcHenWbA7q",
  "key16": "5WMS4hnuRUp1KHJB3Dmw3RG8TPqsHhh2NFkLMTjXYLvLJmByZKZdWMYCFk3dGfSDB4mxsUhnhaKaEC9S1pMho8Gk",
  "key17": "3LMxXEAscsTyPfYu4ksMt4HaRxwmQDg3c1cRKhqud5zKWWwji1h53ywWx4SG8nZeiTQXjMnqmkbGBHUECogwJWin",
  "key18": "28dfEh7Ry2a382NC2eoC4wT6KEkbqxErVULYyPnTpVYM9XhUAtS5kjFEora4zsDg88feCzkFrZD5UGCZD4Wc14ns",
  "key19": "AqTfyWPxhBzfGE9vnAApKg7rXopPHv6gE25CFpQdN7vNnNvhFXGDTEFJmgc8LYC8xyJUfCoswLQtD3CVuswLtdE",
  "key20": "fd8ePrsMDzUhsfp1tAVPNoGv5o6ZY6rf2i1yeh22hdL1PSeptvGvBpDwsd8nbJesVTZ27tshj5m1JbWGDJ7qxAZ",
  "key21": "4Fxu4Bi9PtuxA2FkiiwJ6PKv8cYt8okU6LvkUAnPberUC9KJVACQeHqY6Egz791ncfqDyyGAKd1ynLfZtwQ466Gh",
  "key22": "25wpStHmVh5fL1JqkbLD9SAUDBi12onuLfW7wkbU6nDKy9dz8HDgFEonWBKUtr9PiW2b8g9dmbPYYraw7CNCMMVF",
  "key23": "5UfVbanzJdiAUPPDgtj5raCRJ1ncnd7xb9Tuf2TrDjiSAgBFBnhG9tNYtCHZMnVu3eRLZiKdg5HChTigifqFWvU3",
  "key24": "44sBLjaeK962eUk3ViHu7huBx7AfwhV1syS6cp6Y5H9jnSr6YdsadByKqpd6o2XEqz7DDCHDt9LGEoMnKd9RNNWJ",
  "key25": "LYZ5kUUEJCNwbfKFWfgJWxdcBdtzg4bi15WJ7eo7iRz67cAm6bKPuVGwZuYP2UsP63njFyCo3zWxxZPWP45vprV",
  "key26": "2h85zrsy7Cb5KhuNLfYhcpKg4PN7qH3MnB6Kj2VdopH1inXhfynaUPixtp9umD5S3wVnTu5N5VqBMfhJuSHMwTAM",
  "key27": "4w1BPTyXd2ZDnfRvb6s4kVH2o7x9YzHtiAUwDsC7tAa7M1NydaTNHfukTwrGXhH7zrrx7rMQSe5zWBwUe7nmiGHD",
  "key28": "5gEVqZ5PDCdHNtSSKTaP3uYCbiMsfir4VK4DqRVG5a1sVATtHHKdbaupAc8uupkxnkgTHmxGDyxfiSYevQdtQQ1f"
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
