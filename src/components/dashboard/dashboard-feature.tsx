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
    "2955aohXZJdDsNRbdYmjH1S5qjk8C7GFkwpsj8EJrjXNPX5EA517Voq92J85U7MufJCBJqsDpLsCARQ7ZwDwt86e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrtdsqdbgoQ33MbqSHLPCsotjaNjCbkB3xtrvz2SAZMM71rP1LKoZ5J9h7Tmnbc2GXYWJPy7NCN7Rf1aiuwmxM3",
  "key1": "2aMtbpBu5VC9T5EpUMsXT6udCnMr4nqcjXvKAD9eJY3Q9YpwHnw4FCw75QPXYVXjogbcGM7zDTnrBjcoNJZXD3U4",
  "key2": "3jpzpR213W43xEfBvfRcwDtyYoJGZaPjgaLAynBFZYDth8EbPiihB387ivcbkpsrAKFy9hTWZitBDPj2FK4SSnA4",
  "key3": "58jn4tbr95DXYiQLiPaS2KTRju2ASR6erDnKDFY7kTyA9dE6b71NoGAYqeFzYZZMGYPcYPWjzkPGiBi3KVse8Wve",
  "key4": "4fuLAJhcybFqNT3tsXiHA1puSdCZy3k25v41XVuraDTiUb3xNjER3owmc7UGRypf9DjDJZScXdW28CyxL4n74HDs",
  "key5": "bLbR2JrzBUsSLQxXKd8EYj6jDSNGnufFgp8xPAJnf7JFbyQpowg8pHYKmH5hTF4LeNiEhYKprZyxk9jDGEHDo3V",
  "key6": "5w8wfsi4HtoqNg1pKMJLXPTUXfJmacvuGp8Pdz9PRjquzPRgwihBebipWSrtEpRf8hc4y8qWtABACYEZSFQDrf6G",
  "key7": "2CkH7oPGPNsk6WVURiyXbr4fKuqPPnaVBcqvXm4we5wxcVtmV4w3A4hXH4yT8uPCGgF5exTY4s3zJxgua6HV5kHs",
  "key8": "2rUgAWCddjypffsdFbZuoLJ5xAhfMVsMt1J1TEVEJfRfsgsMq8fzEDnF7MFRuMDKqGrXygvsJbsBqpjqYx6jSqUN",
  "key9": "2h87RPEqu87JDrkbbc6b86pBSu1ARUsxynkRaDfXFf1JfatvPRCMqn3cKHZ2ofWydZLgsezyu5VmyaZN7MTHaLSy",
  "key10": "5DoCCrVVJRFxe97XSxJLWr3TkdRuB9AJW5L89zYRyRwC5W4GP2BDudU3ucUssoo3yuxnWqLTwc1g13cSxRHuxnfL",
  "key11": "22AjV8WQ1wgUFkF9LXTK2gyepX2xYHSmLvNRBF5QgG3Pv5v8rpHcVznYTEvV6aFF57tQfymqonNyFgysXNpzJq79",
  "key12": "2hc1Mg1DVKZnPkoXK2G2ixe3aste2RVzQW1qRioxSaKPU9DHedbgVyGcYwxaDT45VoCc4codv24qFbRRKK8Syair",
  "key13": "BoZB3kKBq9gxh1Qw98UazqqFAfWxv8c7cy54GLt6SucwfnkARxLb2Z1tMmFN8s362HdQo81DsA6Eu4UMxNEojXE",
  "key14": "YzDYCBZu6qcKeqjfjTBTo7DaBv7DXowHoSyoXJC1nMWDPk1armoRhr5x66NNoGettYHBx1HgyspACmfmvo6Dj7X",
  "key15": "5ofbrF3HHF2hXFAsfKs6sbhAgFNFu6L1zNKT1VkCM1zA1amhsjj8hv2VADs74JerDfromPtz5K5tWGSFz66CWTF6",
  "key16": "5oWApfGkNUdT3XxC15rnMMFLtQHP2yNHwj8U7Md5kp64Q3L2EKKyreHrwBeLhPCioQv7WddZieyRBLY229pYDHuo",
  "key17": "4TfJtX2jEGpYALYPQKmsM7yoBGZDvvUGEPaxisWZfMStAdh8X1VVf4rVphEME3UpNDh9fqfVLYiAbzDoEwrNbzr5",
  "key18": "3Bzm4ZD17EqKbR3y5JPfF17FdhT7p66TQY58pLQicugwGVTekQnWShJWxpheE5cECygUqWZL2U6hyYzmZXZXvyFV",
  "key19": "5cMvDNEMXmJTHSuAyVVToKLxw5pykwKFBYR9XR9xWZ9eQNXYFXeHQuM9eq8ukfrJez2odc89CECa5GKW19cs3Eub",
  "key20": "S2dFDbHeJHGKeNVput2uDzcpm6eykSjwMmRJHWrDtocXW1udJfD5FgNqKs76Kc6sh3yV6uCFTwAeyiH56WZeGCY",
  "key21": "4NqbdMrgiJ9QE9tHX5JP7GqkjEcasTV66TGnjooW5CVh8Fcx2NnyCezKhRFQL6a3TroH3nVujLBozEL59jGPJrkD",
  "key22": "47kXwvjTVhhE2zVgsBv8ifuJRMjEwHEiwCCmkwPd7uDCDQooYZhSqGscTyQmbyJ1MJh59D3uWZ1UrzD7MH4r2nzk",
  "key23": "4QpzAB8XUwUje6WLcCqJssXKFh7Pi1FxoCZrxJDQvPAk2gjGSjHvuughKp2DqC7jEsxrVAfegXodJziSEHnwY35n",
  "key24": "5HeFHMB88KQH3xijSveFuqtMmHt6ciRXAdUUPjAmLg8XWKTGYZigJRCiagoMwQSGkZn6kn3iNLaSc67G5D8V5yyh",
  "key25": "5y8c8es54NSuwP3DbCQKWXrQfHcAnZcqdqvBN8d7xUrFMM6jk6Xkw3RH7mqLNiJiz3y3FzptCGMHcrLdPqd3Nhhz",
  "key26": "JHrwbepausdJs2DcLfiTouwKtzRLCBuqUTq3dj6vzBG8PnXN2bKpq6fbELj5sKgCPKF5ttw9Fm7dgoMuzqwQ3tU",
  "key27": "4Qmsm1buB2aQZmUmshV9LzH4SDKj4mzxDEYpPRDQFbmUtrLBEVFLbjAQcRu6vYo4at4v79Y5LzaB6NCs1TJgANnF",
  "key28": "2E6NDsxcBGUPXyHHdMKwbQHXJmDF2s4PdHW3jYd4HMcLmP3LCppXeLSKJ4i9NPV6JQqavRPFFt3VhsWeZrSgGC8X",
  "key29": "4XiA18wnxWFHU3eWdHmH6cJDaDgCmaTDVi644wEnUr6Kkh2QBfKur9m5JwswnkK81o8i8RWVmnbVCZTzCoXHszCQ",
  "key30": "4T1tnA4GD36CodS7nRZ1K9i7zpT2BXT9H7LjaoknZXMBF6ULcAGPsXijJEmCyQajptYRkRMfhdivhyPoqf1uxAjJ",
  "key31": "4SPPz1zSeQWpmudydtCKcnAzjugz9bNUGFCGnhjYC2h375pJ3C5YdxqVwA1v2N8KF1pV6cXXToRkf39Y91UXrcDh",
  "key32": "65s6MXxM66b6Qx7ufpS7222gEAZTWQtVYTMCLS45uw6GdZZ8u86FL8zR7E1jumKfDYSkY72Eij1totnyNiZ3UHVD",
  "key33": "3TawELpPPz4GJCiyrFtnvRFjP9dZJEMwTJDfBCvtKECxRY9HZ2RXarocRevEHkar5ko1qEr8z1bbLHcKQkpJdk26",
  "key34": "44JqE8TCGrfuUezVHb2TVHEW6kRPt7gWRWrYyQDQizGkoUhxDNnF2y7zDeRt6v2Q9D14kMJD9bieWBxo61H6B4wP",
  "key35": "5kjrDje6NYXS51KzsqB7iU5svkzjGfNYGG773u3iyTqWLQHjEJXxdzZ9T9L9HDeyTENKa1hBK7SBBT3TK75gJwb3",
  "key36": "4rg4LzBfvt4DsvpY34pMaguDTfcYZQ5YwsgM9MATNYsXNGANggw6YvQt8gMFezRJPpET2tmbtGc45X3dQq41WGcB",
  "key37": "3gdoJQWuzGYGkix7JDMNa154WYDXvXTsTpartXkuaaxL4s3QV4Tiq63BD5Nb4tTwGG4UEYHT75aCuwxPnRqM7FFJ",
  "key38": "3B6wPSsCFKUUNSqYgQFTyZzSYym1QyfUF3TEAF8oDoDXiqDc6rrSdi6DPkXGhPLh6MKKpDicyTeYmKq8xuVqqhrR",
  "key39": "Pqv2WHptrgLaeCzo4T4niiYfNpLETnRhe18142n9SuDB7V5Zsy8UCbfe3PUi5YVr94kPzq2KJRSndPGEjKoJwpD",
  "key40": "3xndUJvSPUqjZn2255fyuuNiX7fABf4LG21GXs1KD2ALWTWjjXat7rGE2epDx4QNKwYZn71BvD9kAZZDTsFBUNLX",
  "key41": "5cFGvL21w8X9G2p6jopaDNxS4caFGYS7BYLdyVmSdqPVyaBaKeZU3KN2gDKyxSYRMBmk42HhaNa46umNLtMMWNoJ",
  "key42": "5B2WPV1kBgZ8EqmcEuXPYprK8FvfYe2v6LZAKJkzPvoMqQ3ZVSTdWHPAnJYNgQ1yRV2yrKAwY1nSiP2j4STDjrHA",
  "key43": "3eqT1wEHzr4YsbUFxhtt2zKrj1sCoQSQCmjm4eZCEJUBEhw31iAKJwa2evi6MaLmfUoXrd9ybikJR1F2o5CJpVpp",
  "key44": "5wYmcKdJavnkYE6RtpF8zqXe6uHuBjTBqzt4Mhd7R2vMqKHe5i1ohMHzMTXige4wkbLgxNXg8PRnjevkinnp5rPw",
  "key45": "2R3r8cjZKfbexCPHCVkbGyaRLj3j5Y7YDvvwnxiSdGVbfGyutxdzPpWR12Mais2jVqMf5oZdYqGFmtWEnpB6SvJm",
  "key46": "4twcA2xnpoRww5DEsDJRuJJtx8rJGT7b1pjuraNwmFkdBJfqq6Pc271JJz86NUTPwuVaEmXJ4d27aTneNC8oPjMH"
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
