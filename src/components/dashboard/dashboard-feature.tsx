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
    "2fzG6qXcLUEMYvGH8AFzbeHRndWpz6e73649kVxrr6XKUy2udXTeho5yCBf2na954YkYfa8DMybJdJ3PhdeH9Ehi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSbrHWPkFVgVvNFYSdh8yxtiYkvAqDknnbDcaBgXqBBe2Xoj5nVft7abG1PhA1EXfHvXinEiM2A35d3SxDraAet",
  "key1": "5vsoabQcn2bfoFYx88f8gjMMcdaYrfFu7ZkKizYTRVctLRBPgMPJQ62E6jq1Cj4k4tD2Gb5S6JJZy4JbPuTMSsdh",
  "key2": "b48J6kuZSKtyR7noU8KURZaS6MGrndCYD5XE38MRimsubnjby749bQN4gofDkXtybmP2kfFghaeX3kGRwMwc7Zk",
  "key3": "4hB4abDdzjYbaVAX9pCYqiTCy5epo8p6caphrCEXLKxSasRjEbNyTTRuPAz1sXkjireEYFEtz8b73qhPdLQWByd6",
  "key4": "3kQa3iTDHrS7s2q5aGRaysfzQH3UpEwX3jZSoC58Wop6ofhNNJMapwj7FiEsScf2eooDADSKbYBff5Yb7Rd1Mid9",
  "key5": "271UktwgykfBcGt7Wr7sX6U9XaxpvVGaK8onMHsxQpARdbTvG8UXn3JLHoCBjByp8z3enVq3Fm82wBJPnoBMyCBE",
  "key6": "3rgBBEivWznv4LDFEssDJpy8tH2FD7EfwqnBp3hxXkBGkmkkLHo33KfQ8jfZmGq9o6XEbzUsg9pwyacodww2HXc2",
  "key7": "49ADzvzDNicUbFBdjNKoEGiG1KBtPeZPrNBq55tvZpi35YTA67wi56rfrMwtBNDAQr9baGLjE5EDHUV8VUz3uuMe",
  "key8": "2MA8dnXWQt69fpJsKw8KaenSDhFUhm5nC6pDkkKL4K9RwMwaMeBGip4weZRgRzN2Lo1rC6stJjga2fYfKypdzh5C",
  "key9": "k2vY682ijdifMoXCzj6iwUSYEFGcrAVa1giQBxAHcvFqUQLCscE552KTeEx3scDdju1ryZw8fpabcYnSWFBVw3v",
  "key10": "4oV3TJmzTGYjbNFKqXz597o4LygaZ7jCcfSEpW1ATidHCFtrheEXjMWprz6E5A9msUZGEFDoDXnLUy6gjNQkGfmW",
  "key11": "4rj8dJcdt6T5YKdKosZm2ZtPwygTiw7LfQSHsbq4sZchMcZZr1rvTofygwr21gP88fwoso81LYTiQERUxkknGhU4",
  "key12": "MMqwmg1Viz1a44yXnCHEEHhAxapR63eCmsrbWaxkeRVwBg5KctfhkFQe5gVcLZRqZEDXA8A69bcjVKbhuLVSzat",
  "key13": "3nQPmxxVmkW6oDfaaGyXQVzD43REToDBwmqEJy3gDHzXi83LJLuCr44WaJ7ba8cd5Bof1gmKAkuhCrFjC9fncEdR",
  "key14": "VSTUCzmSjDMSdhn4ZxkvQX42jgkVR8mcZZkwe7FfRgm6nPyvGYFaCHTgb9Qf31bfHKAj8kwosWNVs3NPetNYhwy",
  "key15": "pAiXdZfQNHC8ciooaR2h2g3KgMXETbzKQTGC1AuMKmPc4eokKjXX9hnMt3sfRCSRZvL1nLEjBzVgw2GBGXtMvjB",
  "key16": "44mqEVLJdh3RDPsTHCtPLgQ48t3s1GmPXRCVi3sTCa6kznHQXxyB9txU916V45f43eUEVMy7M9oBB3FHLaun3vsC",
  "key17": "5p9qydjjALBpEpGvCES7NKHVqDmCHxCZT8p3oAQ1dazfTat8PN6xzVTrfc2PrwvRSB4TK19bKao7njCj1vHxEddU",
  "key18": "QfPSgMzbyUjghULUY8hfSJ5n7mMT9iqRtuXuXYHwwWr3Qe69JjuDhsxjJuz1tti3ShSDhVtjembzqsKHd21t6Rn",
  "key19": "4bDxdTvbpskiGtQhyGf5tB99my61Kco1Ue75zwNirnvPGFvEYAoDfjkykuwBAqeVcvyiJVZzeJxfG58vV94xYG7N",
  "key20": "4vF4NKw2o3sPVDRSGVJazTHFsTVXkdkjFG9MGtbAa57tcfuUYtCitusyTZRrfeq3M9HPqwNCM5kXdDo8DTLhXPcp",
  "key21": "57zqw5uPG3JKpsdnEgopC5CwX8Cuy2UYgZVhHqdsJv29L16umKPk5UqSVNHkV5E9nrRXmCmA2pPvE1dTn4co56QB",
  "key22": "39cWXFfWLEqYyV6f9etsMYhwf6rrpBanLmvsNMa6PMYCkmDEuf94wdeqNyXfCE6m8wxFHGiU3moVRYESMYFH8btN",
  "key23": "pvMjf5PKCiy6haZ5TxxQNZfQoou6c3Q8vQgfpoWSyCRHHc7Wdap62V8KhqvvDJkhLkC24ivd5urPYX4ho2aZoY1",
  "key24": "3wMSfdfz6UYmjegoNgpbWa9kj69aKd7xiCLEHseUifjGqq2g8RHt9mfS28o87Myx8Hg9nKPakxwZBUXJz6zvv3J2",
  "key25": "564htefrCokvoWMUYUFSa7GmWib4KqSREeSbqnALQAe6dzbDK4ZwEUYeJhcCUCVkGunEJWMVqEcKkHGG5K9nXHX4",
  "key26": "4ak6haapejCVUjaaKPzqXKijCXU3qRq36HxoTZMQE6L3AfzseHsWTkk7vX8cNV6q6v5mfTGNJPEjXQ3GeeoesJkP",
  "key27": "2WuHkRuXadUWT5AEmmY1iU4T4yoMxQ7Bpmwt3ckyNFfMFE89tG9Bj4SmWHRdcdcCpj1LMThAKDiKWUtzwBxzKnZA",
  "key28": "2oXiPA6bj2NdfE91jmGwEqtjt2yu8HRR7mXUDsqD8ZM5xtBq5HcXNcatxZ2gifuSCzGB4f54oqrcNHpdng2V2ens",
  "key29": "5eZBTUdK6bqrsxXWqHPH1VrJBn6DqvTiheHxseQVnDMen3DKCQ49gi9CsYo59wxwZuqTiAoPQ3FiPSkxN4fV86vi",
  "key30": "4njKBrRMwZu8aEaU4niQnuEY7KjQZyXgFGPnTUdEUYzH6FwMeA8rtk1oEyxAz2x3BcEAEw3B2CYkNrBnzunRYv4N",
  "key31": "F4fcf5Db6QSYa5U2xWDNgdYy1nHEmJ3mbd7YBYGpAh8YWtYYXGBCUd9q5sRzSwEEctg3jWEy8cPsCjDYoxSMZMM",
  "key32": "4mBgJr8CKoCq3GCxCXhnwkumukFjYbQEW74e96n3mCPPj3sQPMWELzXJnJqgfLVJw4fqu6kVzFmraqbhkaRXsHc4",
  "key33": "NCwWXgWTawKuRERv7uCQy7P75XauwDxWRY7N5Ax7gUYyq56TJ7Q3vVkDCZPgSUMFM6aD4XEvDZQLtKNW96bt9We",
  "key34": "4Mdi2gAqAJDSJEyPYHDf76xrojsMcobBLTL9cuKsSYyUzzt34XBMzFvUq5ag6rndLoinmDBBmHxPT5kVQzsb9j64",
  "key35": "7cGC3zSHWdUy4DDWsEm4KXXQQCJSW1WoKqfH5EhPHhDn4PLkHBjmMD3JAWMU83NemgvMzgYCFMaWuCAHwdNS5Ln",
  "key36": "5KTXGMTHLkLMmrX2aNpPyDmHAaks7Q3QWJc5KkYCeWu6JPQ9MzvYkaDksR4QJAti7qQRgxCQ2Mt7drnw6pNSpUvA",
  "key37": "hfsheXpSB42CUgRk7C9ncBzoft5TYff8EsaWwfiCUj8Lro8vMXYDCxiNb4MHLcFjipsraaLcYzYR8Rb3nc536cQ",
  "key38": "nrLGh1JF5xJEyn3wCprWhw6YTqHA16hkEoSqC3vWHMcRD4oBGHc7HPeorqJt393dM1zbJVHgrPTj6LS5vCoQdSQ",
  "key39": "mfPsc6ZTHD6Rk7yUx6AdLU7SHtdoVHokgfDp9P6kFVE4MLDbfzK157XrAp2g1fohcqYu2w3iR5C2xpJz3fFPbqT"
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
