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
    "GaMbyPmoWKQNvYMh5xTMrDVhfrLtB8cwTxQxL912Rag9F7mokjjZrG9C2xsQS9B3z7ommK7g8tiLXmEe7USAB1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52e5zqH2WLAE5QCra5SsecN27Y2EY9QZMRXKaRCL7QqBUtfgBLFV4HKfbDNWw5YUehTrUTLEB6YRdfQ6qkPwrm8m",
  "key1": "4XapW7wZFb62CZaQcT2veGQLeXELbuec7pJFc5svpj3Rcwg6vwAm6y2vsJtC6QEwpCL18u8iKRMVxaPoVxPhxsCA",
  "key2": "3Bg9SbCjnDroWviZ3Eu4U4s6Yu4EMn9YzbG5EB1UnLsk5DU6YkiKyafrZ6GomM383MQikCK8mQ2tc2qy7K9aHVdF",
  "key3": "2EUPtU92utqKtBP6TLXzzzLKEqnRR8uNy5eXBfvfeeujg6kUiashppHhRb4C67LAXPr4Leaq2RmsoaVrSexAVPfN",
  "key4": "5eiRjaWEGrKiVx6UxBmf5c9YDjhfEhDUymMYJA1QtsiApPZeaxKgiLLXwezAQKY8uBiv2j4vbtRb92T2aDTRUZQW",
  "key5": "5NGhSJrEgP1VTNgy8rkF7zWLz7hLq6bUFJSy7hET9ApT9myZssE8MpzfrhEH4a8rtBbAg4rWdrCCGAv2Sy1SQCBR",
  "key6": "4dbb6T366J3PBmULZUZVujCnfnSsykf2qPZocRoD9E61ZKx8Vv8R67TSDwbjc9diXu9beyNG81jkQ1BdCL5TDfnP",
  "key7": "6142UjNV5STKnYfN2zSRgggpAeUQQ1XSXnLxBTSCuSrvyQ2GrZNr7cYrnSpEZMxyf7bMR7ck8RgFtkr81ToyMxyj",
  "key8": "4zaXhHm8E7PyPk4WWdab5EQh1MYkDirW8f6x6dF3mphPZgBQS572BTRDVuEjADd9cLeqHhYPKAzvdx4wXzVikxA6",
  "key9": "2KDUkv5r645br78FddHdbuKtSVuKmqswAfuE1GZGszcTGs4esbECf9iSbnq6zYff9M1UfHnKWHpT6oYYqo6MAiAo",
  "key10": "mQsL5sLNvaLp7BnyKoJQZUv15HKeXpanuRH8wTE8DwsyXCjZ91xgAPLCquU7hxk4p5zi5jCxmpdcKW6YAQSp4op",
  "key11": "LdyEg5vsg7RckFGFi5TcF3KtsBpsBhVFqTNw2Lf82KKFYhsSWUrB8DoszYg1zxxWHZzNSefaw1X5WadJnjjBGTP",
  "key12": "47eSkhvsgTZomnfTqK78dtrygVvX5p3Wzh6gHLynSuHYEmRE27uY9ArgtvYDnqYPeyJLR7jbxqhp5Q4DQLmRFqYp",
  "key13": "5XWaJQmecAaC7TggdF1gBu1uPurEESsXkMCkSo26ZxssijTzVz7AUWyYKh9CZbJ8dVV8PwWzPuj8VfbVj1NGyfAS",
  "key14": "2Kw5EvPvb89uu3AEEGzCd3xKF9jGsj2nuNUesftJxgwat5vCgzbiKUYCvhSSqDedFxDhruJafkJk62cTpP7YEjHV",
  "key15": "4zLxW7EDZwLj7KRgHkU554tMuhvZaQZMeewik6SK5sdTWm5jzzKTHhXSsWjmbc39zoEikg14LAyUhweJjhD7G3D2",
  "key16": "5yhsUjyMGZEsreNiqwYqWUuCz6VqsWLxitXiDrfz9fjX9xS2qfqHUsHChyBbH3TDjhcYDxWS6TzERG8CWxgF8Be8",
  "key17": "3SNmXTMJA23EosYY2YSDpRV4v1kiF383JoBERnfJbMAxHsVo4gK1jPQU37wTM6PG5eyusSzSMwmw352hhLzce222",
  "key18": "3w14iFBR3cbJgrr3JA3nc5m3PqykCjgDiNUXq1SfkL8UHvuuvKaZeXKN8fGVodQddfdu8JdXHJGhDLtktoPe59tu",
  "key19": "64wLYQ2GiAvyTL9UJz7TVsW6d96XPQBQeurSxPR5jhbdvt4dnrk16mCmdffbERFVzxdZfrmfdvSmWt8b1bBrnfTD",
  "key20": "fQVorBuec7XF2UYTkoEugKz2K7FqTschmTLkHjqvPJVPdhs3ED55XSv18L3QDQ2tQfPWwi7SYQUWUk6LnKwiKaV",
  "key21": "5t2RdsrzUp7A4MT8M5VFXzgS6uWdbnC8WRBYvCHrbT5DeFy7N7pUwrx462vvLVc3URKDugostbQvFkjdtg4cbjBZ",
  "key22": "2K3hepdtmgVn9jStduvjqPsmbkaokhwNL2VMmHGRHEDAGHKWysDVhhE2u3RpGZTkFQ1kPWv8rJ3V25VtRAGZ2tve",
  "key23": "4aTV1qkLnK9xHuPoCnV5PGxBHQXdzXRSo5mk4vBrWWT5QWSu61aLDndYizeJkTru6MdFYTMaN3AhGNTMwc52S4Qt",
  "key24": "39hruGCq8J12dE5H2kVXCYNCyzEspb8kqQ8HzFUtsCqMZEbqEbAKrkVkRuU2aUMeRvkAJXzP6FkqH8gNcvVZfLop",
  "key25": "5eiTZjPDR9q3CvZvTYKEVGCJvpZNxxZNfzUjhwAYKxSCrtkgEGmtuGBwT2jWix9jY7NL69u3eZokGf5UdPpskSVw",
  "key26": "4gH8SbF5EVKRZyE6an2BniP1PBN8o3pYBg17QG5YbDuBQe7B1i4qrQMJ9py4jaxJyct2k6c5pJCq8ykrtZRnqRBr",
  "key27": "pks8HaXh9SwE98BrJHvckkVMg3fjypy8fNAK1zDjBpjx43XBG8F1WjMXNYqzr3Mx3seTZ8jeFxC4Eyzv9Xx4o55"
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
