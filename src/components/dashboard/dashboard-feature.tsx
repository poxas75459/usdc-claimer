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
    "4uZHkaykJRw3zRjfKcYLR7pfJQBVowmYkVosR8FVyC9gFgwCx1DHD423BgCRXkKjWK3Yremb6qVCZNSYe5D53Etj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TusrczMPc4BFbCfbJE8d5kbY4Gctgxc1AoGrFHFfsmzYyzxYoRrs95YwZbXVL1czjPesbMwNSepNKac46jeBYz5",
  "key1": "2WktNKiZ8Q6b4BGr39fFGpBTXfMAnJciRvY6zxrhcC3TVeUvGtHvYr77vLKYMADBt3q5EkuQmiuCkhpdENWNVxRi",
  "key2": "5yNcgqrN2QaYjx1EVh9XoDRVqp56yVtmJjYgfBNrysdwhCyvMTDMMWx4rNC7zoF95MkifPosgD8gtUAzf8cywMZq",
  "key3": "8t7NpRfqixm8D8UwgupqqXyhJpqubfSTF4guDs7MhQVT1FNjfyjdv4AK8vzocxCTZFQnEG6hwKq2NBwU9m1AQGM",
  "key4": "5XCcvZBFhJ2V1A9nXK36VSuERkCBWiUmkBhLYPEXvk8Lraec2skw286Gf6DLuBMm14W21gEbjKdjLtbcRNRqFeUW",
  "key5": "4Byrgz54NTRARs1AL4QyCgE7LZTk5W8BjwsX5EtnKdiQWSxn3ixc5hotKAVgCoM1muH4s27tep3tDTxWrU5jFAdy",
  "key6": "3ozSYwCFhwX5kxW6at39QujCmTfCjPYtP832ShLPPRGRvkH2m4qk7aUUQbJz1XbU3wg7Cub2kBD4BH1gAx6z8Jms",
  "key7": "2TYaJDerhTMiA7PmiPLK5QFjL8VJ4NNKzTr6Vd2bXK2XzdttUdh3ohw1MStRnBJGrG6emfMfVUDjBR8DdEhrLu2X",
  "key8": "5EK2o4c9WefdDrreVRqpzZARnSHA8g6xexUocax2RY5FKxpGz17AdfGCEVsgKmHMnxFBEkeaZnwBUcTaf1w4m6GB",
  "key9": "3zFeMwYwtwHqAeKJTHTkvnXqZts1o7ww6Z7CEHJjEzav6nydp8LLA3rjJ4utHkdvYTeHzakxxxagoAJqYgGC2qLj",
  "key10": "2BXW3ioeHifeN5eT98zakWCpjU7i5EBFPf5Zyau1fWHzFDHNJKrQBdhQi1fWRNomo8FktqtXYZNwwPUsTriUoUvv",
  "key11": "CCMWdncK6ivGT3Pq5E7wdJfGGpUdcVoN1YyAYDUGcsAtQboSHk5Jta9ZhZamULKLWievcyBe5JzBswvtsPc1anr",
  "key12": "55cRZDxtrQ5vnZiCyFMwi732nXHD8kGeVjdxtnct1W1Hh4fTM1Hrn56LG8eXjGKzANswT5sMWiFgEZ6MmATe56i7",
  "key13": "5GxV8fZHu8YdjTJEQAN1Ed6KTrCHpYK9xtvdXbWGfXMu46UxMEKeq39vTDfiMBqKxep2eorjmRKfbHshJcQajf34",
  "key14": "vwJPgaDJMktGNU3PRemNTj2w4b2DBtwTLed44whSmBNHGc2vt4NAGX7i2AHmborkSjHfcxSXx8M4MpUtCkaSWo6",
  "key15": "Rdz9UieJcQTNoxAK5FNC9y41Er3WhDN1WHutikAt4HXg6v8JwuX83kPwgAGpAU4WXDumgyiJLYY1gvfevKiwEB1",
  "key16": "21fK6HgPYXS5Lnv76JVuufy63KA7H1Hm6eD53tEPbNwDAEP8qE48uXPjaADpB46iPpiMZ87TSG8gTkNrFwWXrjC4",
  "key17": "4utahsZcsXQF5U1GEBSi3iiwrphY2x5N39wT92fKLFcVndvuDk6m7V8uChGuf3u4vZBphTgtoHHW3bPTfUTW58Ah",
  "key18": "3Tz93Ujcm2Ejkqwm9PQWrEXNZghgsHtds8ZL9M9L6SQCBEKCC8CKWSFanT3BaMB5M5m9AksrDCQYvuGqbg1Evgmv",
  "key19": "W2aE78om89uLhsCZGxm178qMwbs4TEgcNGBXyKKCWJSidn6Aw5r5S5CSf5TqyHvryaZ35tnpySm7hVj3cjao4TY",
  "key20": "4v82F7gZjBLtgBJ2q4m7dmn96XHAiyra2Va3E6d3kKNwrTEDP81EnMppym9knFU84Urxsv24nHRfKwxCJdPy68xZ",
  "key21": "s4kBXNUetWFYira92zb96eWXXArgVBeeW7121uhCDU6PD46Ej7fg4V9LFRRBpYfFH6rJtZjSSzysqU2XaE622yd",
  "key22": "5nTsRhxJpYcTL9wjthut5pGPExeP5HgEFMXnRueZ77EEqEo7vRk5ECsoFhAGSycZQwkyHs3UeE1C8UYVEt5eMxHt",
  "key23": "2sS3AC66J2Cigxdgnd2BuVLNs7U8LQu5MfCwdTqoJak4Pibieqmh6kvckPHobzbSfJnnEB2QL2d5pwMN7TXBgmFQ",
  "key24": "3rVSbh1rQdS4qzmB99h4jDa7TsUw2xhEPaVHPs1QkA6BsH5KC66hbrXi2h8KnZ8LCW3oSyPhpkxeKEvBGKKaDgDC",
  "key25": "bNRBHWvzu8ACzZf9u4bE73KYdttCAiRrpnJomqEHVfPHgpxk5E4T9E4FjAVoPPytbnbyfA5iuawtHJQ6G6g4Mfh",
  "key26": "67Fq9URrvPGdcSaZMHr9D9fZQC685CgUu6Gu9Y854ZGE9MC5yqCcZF2NU4kk4xRhSAgQ41Yycixc2ANwLifGTdgb",
  "key27": "5JeRZHvnVYanV7db4QKme16uLEvRyUEGThRvLptdv4jqY8M6qGyhwhw7FCAqxb2QLzFHkujqe419BsvsiiaB5aQE",
  "key28": "4GacymQkot7P47wuJz1keXwmGJKXM7jqkfFAzYqmLMXf65qhrkC5tmy6i6ku7P67waxZ3cA6QD34s87pK95dPZB3",
  "key29": "5dezFdFbU5FfTS9baNGXAPyCS4wLFbb9oERN7rJ7DqBJPBkh4AkbDZVfGNErpza2cWHCYSRB93ifD7JYWzd1MTi5",
  "key30": "3b6ZTXhaYMHEvqZyHWZJnYCL24KRBAtyCumiih9xiDJob6NGemKtNWdit2cLcDtVxJnh316rCp4ieSDSu3eNmXG3",
  "key31": "5vfmxrp1YVH4fkijN3qAvR5zHf1ntb7BY6tY813ZSUgp5ETZuCfCzWeA6NvJBquyejZpYiJwGDVDnkDggbTWFiiD",
  "key32": "23DyCQtnV8xGdUCoiwWkKK7YFNh7k9R7GHeQJuE1LWa23YLkWGPFXMHkXSNdG3QZNwtNXyAJzNmUCpPK7Vr4hAbp",
  "key33": "A9GHnzC5DjEbsNY24gUV2fTREMkthDiWP2UncXDoGbteyHYLaV8aZd2A7Hciyc8URmiWpoQyvuHnv634Hs1W6so",
  "key34": "2aqfdFo7rM2VSihbuWTDMxGkSEeToAAuDsBKhwgPkDwnf7kKvSsCK3FxedPdBvVHy9owM24TKWRHfvXSeducKjWA"
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
