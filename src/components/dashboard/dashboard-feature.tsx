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
    "2n1TzUMT3CbsM5j1T9G3CfDc3Unruqtn4p6QWR4Z8gic3B5KExXUtCD9UmyZwdp2yXQp3yXFgBaEofefZSs84SPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzqUwgkgW8Mk2gNytMprM5i82d5sE9Wu27JyDKNRDart5gm1ru9sEJrcmg8UNTCr3DTc9Jr6MoP7Q8TsoVoohHK",
  "key1": "ykaTjT8scxQ1bpQz31ardiZry5utKdTa5ywxUu9jZEAH2smwRj4CERK2iWTjYykT8jy6inmXJsGAfQ8hKDzfr3A",
  "key2": "3FZywapmK4pzWD6NmLT5ymMv1LpvQzc25eKSbV53j7oMZrnQCxmfay4h5TjhzdAcKR5d2ufBpvx9yWovgLLpJM8",
  "key3": "58CHSRaVs6rebbhoQ65uztcdczEEgr4iEo7m89pKv8cUWsUUzi7oH7aTf9vvD9ke9QBTtvxKUoFA4rnVCezGaWUd",
  "key4": "gzBrBn9w7xhS8QSusB9h5UGJyyHgNomDPdouAuJ7MuVcsgbpu8Bz5mNhFfzfrGiY4GQukwHw2w1UEyEpHseNrAr",
  "key5": "4TXjX1ApraKXJpvdd3nyTG24x3M7xDekbDboiXPQGgdUTuqAbPN5Es59TUGVPnmfuKftd1EwfFVephTirNuGuXMt",
  "key6": "4v6PfgmnZUoH2pa1PJ7dKpdhtg6TitsMJuKNKJdEKyfTvTk6Cg8npM4rZ13gJnxzEyyy84dhzYYSEfZ86oSWGNZw",
  "key7": "57QWRHLcAaddvXp6dWQaCjbNsaLxSFyZry3SpKLv9PFZBugz7iTnBiSgnB7CJmPsVDR62TvVqyEYSsLhzzmpkkNh",
  "key8": "2rHKzL77nd1V9iBHqV3Dm2JWdXkgmpokfr8HEeJAury9ao4kmWuMJ4i3rVGxq8zyi2D3tGpYcchJgs5UYn6H2zKF",
  "key9": "pzBYJz9mdrFsMsWrnfXRDbQxRJHumWZeABrLEa1VhwLqMitvJdD6ZGJ3EjBGUGzxWmCh7etYmcCYBJ3f9kZYaZg",
  "key10": "56nmNsZg4YS8LayGqPV5LSWxLF9DzEjESogizdM1f7cft84YkhuupkNcfj91im71g7taGvT2SP5jkQkYSKWLAjoM",
  "key11": "41gsK1SXQ2TjHBCZAz9zDYThhPag1FZyuZUTHUo4pKFEbfLcBMafmxEQhjPHCtTSK2cNbWDNGbmxMaJr8ehF5iG2",
  "key12": "668pm67mBBFBz6naWoeofFf7DnJnaWRMEgZi8Qa28byshX1TNMTjyj7espeLj87qsYVtHJM1DJsTSXcTtHWJvCGx",
  "key13": "5XKBGEhHKV47JbMXxwPcpkTnAmUFY2PGdjroib9nMDFU89peEnSzoDGkhHTiFi9FpVaR9jcPtApfe9GTtUZei2EL",
  "key14": "M3zyyHEY37TqFVjLeH4HNZCKAQp1Cb7iYiGxuEVzZxje5vHUheyZyR6REMzh515KkPJHnzN4pKKPu5xVsuVHhJX",
  "key15": "g9txbifnZdS2f55YQeJ2J7eJmfRpvQLUD7fYzpWdrmutK927cAvvGyXCq2pgk6LxYvDqVNXr5LNJPi2AZ5CJ5cW",
  "key16": "2i14JQ8SvuA5X3DUuGjdXrBiKApHkHq1W8DZ6Vox6o5oFd5eZ2z2TK5TtJV3SM7NoA7JShDqjGkJSRgetuNwRKs6",
  "key17": "SxeV35HXTfvV8VjhJiQFnCdrkw7YbxEVr4mdW2KSs2judkVn5xCxem9pBfibjeXFa28WqssrGVqcn6NxmUPtgG8",
  "key18": "3qD9su2SMdM4gEUHA4w9fHrdiF7GaRKV3ANikBbLLwAmm7A8xa1EngSkLT3ShvuB5RWsPYKdPmuGuE7GdMWKPK9o",
  "key19": "3a5TdPsm7r9nengYW99dkXmUasas94LVkWJoyJHxiC4jNGT8eGZGJz4SnaqRwXcgRgnoZ2pZaEVcFGiNSF65USS5",
  "key20": "4ucwHfe8Fi1PNdnQSY5rjKMXYCRZ7g7zNxPPv6Qm9FnhVQVxwjmYbhEbnWyWbz55pXFG9Q322474u8U42hqifSN4",
  "key21": "2BZYCntWGbdW469DDdaokBdtotwXAsTdiRArSBz51RJxkmyJyFrtihFacmf3F77oZ9ogEfcjwN12gmpbCjamUtyi",
  "key22": "3kdkqb6HACULn6gSve1YVCo8qFvueKJuNfMhFqaZPUN8VNxMTxCBvJnAe5YKoaVYJuyFksduKgbPujjPR2rACF7Z",
  "key23": "3qTZ5y4i8d47LPb7gdm3TUDzi1ixdWJeWhXivUXSBcHCxgJ1wD5WvHUmoZZztBr7vjueKr3YAyro2SYJqjsUHxC4",
  "key24": "2htqgVMZwARfVnA1qF7BipNvrbMVrwUfAw3bZk3iNL9ScEANwQM9jopbxX2zo2QsrdgmLZiGQpFAkvAE5tJb4F5w",
  "key25": "Kb8Avui87VxDUNTSBFKZPdNsqtSMCRpAQtQ6NzeP6EiPFQbjr6rW29KYCGAD3KPR6Nis7p9GEeMZ1CWEP9dkLzh",
  "key26": "4aKstosjUnCTtLy7ceJmjrpbykBYPDauRruDMffmNrTufDeqVbb77gVzPaoMJf9L413pZoNJttc1S9tuWmdv7XPb",
  "key27": "4FxMPCaKJevFB9g3nWABAqdTAd9Ld8ZxeEdH1mgpQmhtYWmFYBuLQfm1RodDCBC6xvrWmuMqcj43y2WJnDxFekRn",
  "key28": "5wicJyzQwzNjT4he4qbQ41PNWcCsjMQikNchcYjLhTLKbicxAjsyYaWrFSfmNxi2TFKbbVamPMi7V2yG384DZzBU",
  "key29": "2R7VcadTSByKJN2penCFAWQaXwNjKJghKJMH5jYeSjy74eu4xg1FckzspCB7qb3bDoMuaJHqkdem43x5UCE3A1yN",
  "key30": "4Mb7VTbtPg35agGVY2J4CYVNPSrcw3wqmayTjEdHmqxAk1vC4FpVyaqwyj3EgsPkiBXQ4eA16Vg1og32xBNQwHXV",
  "key31": "5YwpaQx3GBAxtaRV6aE1AemEALrQbGYmEto7Yx1ME1reLWgFbhmSBB7aSRATCj1ZKsdVbE4Lu5gSXuL2NkU5aFCR",
  "key32": "4zyRj7KMLFJshi6FyK8dtC9hPP49KM2dMMuNrePJFi9v2vTLmGvHsSMYfjsDJ3dWYCnAUqbGwHd559EvThUBsbyk",
  "key33": "3rCXfSCx9QE6zJJjv2DdEywa6KWGpdpZtraJKXKc3kg4F96Kq2g4S3af42SYmArJUgygLyTjw4AVgjQopGUm7ZUd",
  "key34": "tQnCvTKNhUikMqNsyXFTyDNB5zKpHnkNiYsFQtZBNnojcWPwpdMgGhvyHktgzLbLWHqXeKGSTGdAvwobtBVWiXk",
  "key35": "43vNdb8w51UwgGfPtYC9qoeHVU9FZcW3TeT9vD6dFrkctG9QFSezr9qNGj1nTxJ3WcmFTwq3UdDsvTB3n5kuH3p7",
  "key36": "jVTMCZ7d1gkipRmfcvuuEYzumiXEfujVWhKf2yneeUvCojKgrUY9DGc2yMo45KFm28m5hnUpz8oYkrHLQXP9Mg3",
  "key37": "4WYP4cUY2g21iGiwmvsdLqdmd9YBBEjGiENZ69tfjPSe4LatxYakoiLNQgdJDQYcRzTaCUNiFZ2o5ugu6qRropyY"
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
