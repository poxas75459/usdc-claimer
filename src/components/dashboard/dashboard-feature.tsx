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
    "2kdHAw6Wbdu1tjM8jHdxaQ9uygA2Nb9q2t7T16qi33FYiqSSsqhDtR7StGdAu7sqDQRCwoWGd2eSXHrdQ5wWNKQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1VLxprCJYjSVnZj73ePB5yPT7nr7DCFe4Sy74fzVsRpoxowSRbUhvpm4hzKa4FZP3E6Lf4AxsTZodSkzgLhSXt",
  "key1": "t99LuTUe2fNyjaKPPHosTLhyEQeokBykeEeKcBxmpr8o3nwfMdgJrSBxXKfSYCDvbHvupGaKiDH4twdQiNx8DHD",
  "key2": "F94CDBrPgLDknrmEgXRF67oMqwNzJjMaEQ9si543uo8dx8PzAemgFYY6tvahkEH1wgkH2VEg6dvrvbCyBQWPszt",
  "key3": "pG8TGw2JUEWdVDAjX2cmXuamXpnE6GGC4ZjT9Qttq3nXMisYmAM3vRWqZoV8vUMHrx2hezSyKZsvVqGWwUS6HjL",
  "key4": "3jEZLZSBqHcxioHmGrepY2xHVBHKzyAgsZrzNrxZHYx6wz5ef6Pk37hDPpxvo5MSd8jkArFPD4uPmbFfmrEFpRSG",
  "key5": "CyAtXScBQ83nDTuK4MRp55dv68pT2hFNp3NktbdF46vndy5ZVLd28cd2krwniM2dBpVB43QtUssKqhb5sJoRZT3",
  "key6": "eAeqagRf9YJoyVxF4pvqUvUBqwEX2k3zSVh7FWAoaLkGit7ryPvdxPRP466SYWiR2o4gKX4cMQaS26EQFvhT4vH",
  "key7": "2KQtfRvyccLpW23q9m9ywTs9uBhCho9LntECgKwyeWa64RSr9H2S1NezmdXsfLo9wRV3HaJZZJNEdbRd5PzF3NyA",
  "key8": "4duwMjej9rXRftaSrXfqxBsW4okH4KHURbkVjsHjeUjuwznXRJM8t3h9hVjQttcv6dyjP9eVPpUzqRJtVr1LZoed",
  "key9": "4oJVPyjaXBADi5AsBXU97yEHPQ6vdKw6sGKj3neFQ7PoUN1BRfNKgr3Tn77Kav1bSaMXu4kPRceJ9o7wHhyiWxtG",
  "key10": "5AEEs2QzVwZ91CxWFeNnAQ68TPwD49GZuK7a4eYdPuvw2dWSDNGAkqKkBVu6JWzvhdsBpgHV1r6uqXMnCgAZ1gU8",
  "key11": "637zQh8uafHAgCvh4ssVaBRGvo7GxGRouDTmoSn7tHJzWbcwkeYfTaE32QzEKX2EmJ2anzLbE7U7QiX1jMRwiEbn",
  "key12": "dDjwAzFeAkFE98A3uSCtnqqWfDZfYfQbdP38FZS6XwchGBogb4WW5euEH7UHZx5Q7Hwa1QdkRUssf8PyqeHEHJY",
  "key13": "2jQ8c6fD1xjXQGj99cpSDptnNtsWRXHxC15LavyL8wRF9RPQijNDbtv2tgEhQ42hQVkTVVowdZ67FAqxAJWzCWYx",
  "key14": "2LNX2DqQXU3qjhFaGqmfrFSSMHTtLKuUB7SL2vnw2npbzacSeicmpKZ6Ek9QuAebiqrKV1rykNaQwyh8ik69bo3C",
  "key15": "3NjgPd5qcSAEqiqtAeBmfEiJZvKWnuCeRWxLnco8DFGANzL9Vh33KiWovHhCwAANdRtRHaiUB5jqooozg7ksJPHN",
  "key16": "4wqSK2MEJry42AGhkTGWFRZpbWniiQ3V5nyEMCFKzD6NiCcAZtCb61j1sm1u7Vn4h3GkY4tzAwjDpFdR6gouZyxW",
  "key17": "4kY6FjiARS8e9eTi6tCYTB4KSzVo2U2JfHj67hKhLwv8mQDURhYJvig5Mp46V9HSH5oTGyrxbHyPxqtv3F6tAfGQ",
  "key18": "4pqv2jaH9PWaRRjPypgTSnDNwn79pacK1MZpYbLUEVWSY9cdS2HSMnR9dgihXpY8JD2gzcGQJuCq6FxH59fAJPZV",
  "key19": "2A4NHmLpUSnbhsQsUd7m6ZjoAirSkFg2inpXajJW9oJq2szeqJnpAKXQWodJhUtZ9DaHyXXz4BAPWguqgKCJsKhU",
  "key20": "AJC7kN8aiT1JDM4iBqDNy3tGJcnwT2QvxTvhrZzh6Xad12DbHqAarPkw5NJawVaEruX8dWe9kGE22cPUpXZn4Xe",
  "key21": "3qUJ67ro5sB7hGJyQBvdhogpuEcyKTwtWmnDKozG118LL11boiZmFHs9yNmr4FerpnqZn8v26wo5wjrU3MKL9322",
  "key22": "2BdggvT26LcgRMcXvaSaueyQgqgoxhmcjnadRhjn4SCrTuPDAsPYgjWm4m3XB7YjKAghQbMneEkoUf3eak1QYa7c",
  "key23": "2DED8DdyZM21puyuBbJ9SdGmFauPxY6pwaRNwiCKfXeLjfkbvgTwjdqBZCw3vv67fGmDDNkUh7Nv3aYnMDS62Hzz",
  "key24": "59ce4kF12dhaHzxRTeRzjWDkougXgkrC3gk2ryU7Dq6hAh8b5AVB9u5ZrkSuMQZjZ9TgvAvJS8AYyjh4ssdow4h9",
  "key25": "4RTkGK4t2H92PDwGqg9aBgVfHEeZrFexAJZWpL1at8N1enVZ3DveznBdhpnKMPUWGotse1BfqtHG9jZKHRR5hBqi",
  "key26": "5wcmEfbh1wj6n2Lw7cByb6tYsxQXfxp7JejExnLGqFrAnETcxBzHUK3EH54JnJazeEYyE3QydeFVT3UmnUEnsw4k",
  "key27": "5tmQ9SopNQfmQnBdWstd5d7soumE63Y7eUQ89c8FkJ79oaPv1Ez4bhpgvfvZnNsPsqvphrhAcD6bgqnqNcDYukSw",
  "key28": "24aV5DFYbLG3psLpi9opNcFkXQSGX9DtQa2VgFdVkjgTL8VLYbMwqRZkbbuS3JkCDptdhwHz3ZnooYNqyU2kyX7F",
  "key29": "4T8xMvJjg13jzzDf8TTiGUDutEpid5fnXsmS9Zeb5mAwHSxPto8atB5QX4Fs1D3jcqyKH2NKC7cQVEjXiZCN21DW",
  "key30": "3P55kYz2Ag5qpq8dSFN3XrwGyDLw2Jz236xSMotXEajYFKeWGQ4EYwFXMDq9s3zU4eRMTdD1b14gCnVsw31uXFQz",
  "key31": "55UmNsgTy61vBWDo6fek4SfwcmpTKkezi8LCiFmb9DYBpFuANkRPA1YTZwussGFpuD4mzvct1B5cr3MoYBLcU8YR",
  "key32": "44FEtQxSRqv3X9dASiZ9Z9u3nrAWSUkuBNi3BrfqRE8Nck4CLjKWWyyLDTuRGm7VN3Soy2QmvAu6eX2knF8CB5KH",
  "key33": "5GzwppQM2bBJSue4rAoyR7RTZzW9wWPsVAagF9EN18FSAw4swKLTszMK75tVGDBuJ8XAnL54AW8NXA4bzqmePgrg",
  "key34": "XYtnHX1BxcBV6qVmar1r2si2B7vdJMnnXsyDhZhrjZvxZiMzrkWTwVDekAZobnWaHDJLtocqNxDHxQXs8SAkmeZ",
  "key35": "5qmhUP6tjfte6Y75ZpWAQyD2o8uw3qCdn726VWXwrQXZtRXdCj2BFQ6opxUzi1LhEjuTqAxm7jQtdV5kSGHPisix",
  "key36": "5izbkyCebnXnJ4JHqJmUjSumjzWRgUUcA2YJbZPmFxrheKsAUfE8B6XWEz7FcReykkdTQcGF9BcjdP6uxmy5haU6"
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
