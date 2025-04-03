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
    "pU4NDEWbj923JiEnk6YaLbmCqFPfEWjPUw7cVQiNeW42uZLELrphYsQ6BuvhWX6szc3y4haUzG7N7ujskkkhjnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ewAr5YSuZ7GH9GgYGYLM5LkRWA7eCDvRb3cE9odHAwp1RD4HUHPDzEYceh6mzfh7Apg36hDUUsTntxaEUz4RkdT",
  "key1": "JUQKP1xodGjzobRx7eqRjbdeAJPaCjUmsrTehaP51LgB4DbZEDx1gdhnKYVrwi9AYNdEjw6UfP3KAJPG6gDuQn1",
  "key2": "3coBZn1LNQD9JPahQPa4G5ZgX469t9HAQCpZveRZGwLvsZqGzcVkx7bUk2Yx6PEj73BD3MN5g3A3GFREqFxggVJu",
  "key3": "3niVzc5iDVdR6UqBTBNgPEeTWWSMrufF53xVxT8u1iVVHiuJ3Mai3rCpsP7BuEX1GwL2kZF5h2XQP7B9e9YUvdy1",
  "key4": "56k6vp7vhmHWPbPaKEh3z6tFeUFaiJWMo3DpFHXpWpq5SgtkRVDn1m2WjWcfHFwUbvWXqpzrff6XcuH6p9gynHHD",
  "key5": "2GLpoLkLJL8kaN4WjkgY7H2i3RCdaLVKk5DewVJqHHtXowqCkXzgYQfaQtU7NZkAtzCQ19vRpXmWZhXcTTAzpbkM",
  "key6": "2jWh9vHm3JQLLG94g5JnV9WyjHZchVor5g9o1Lfuc2uLKFzfDMhdYQ79SbaevyZzGED2NWBv1TneRAUc4qqRduak",
  "key7": "zoy2FEFSzVqDuoWJKQmoGtX9z2Tq6w1v8EHJtaX5A9L4AD7yQE7GYMHPoTzPmd435cfzARtSAtgar7AUqo8vGuc",
  "key8": "55XPaEscroEqqvwA2qAypAN4waBgqkTVPU7zeX2tYxSyE8MXwqP17ZTQAV6DPL7xVDnC8dR2rwr2jNJwMmHEsg9J",
  "key9": "5bTqLdwxGHE3ozYH3VPipx2dTu3jGAErm7PoeyyXtxw5hk9RpRxPsAC9UQ6BJrGJrDEkE2mk7MusN8bSRaAsJpu7",
  "key10": "3SsaBGDScYnogUtoLRJ1QLV46ewPhzQ9y3r2nudrZurSmUPS4WDFPVFMLvY8eSFN3EndT29XHT1HG4sUbMTMWVnn",
  "key11": "4eH1KYXGF3WJAexyibKSuXBVfR7qTh2Mjiqr1Ur3TjnHctUnzqCjnmoCGKGsFZyUf1W3CUtdE63Xw5w7CUBFDCo4",
  "key12": "3Pv8jdohtGL53i4ET2aQS2hbuQspu5kWs3JCGWhNGPRqfsUF3nZXR4aHHDc8a3x6ZZHz9XD4sjQV1wnNB66CSsMF",
  "key13": "4mt4SWW6JtgM84uDDLdrffGFtuCLfCinGBJvidXhzQR7FJ1fpBerWLM2pSUJMfFvFosYR62cUJwsJttjKRro6UUk",
  "key14": "3hnpLWDFf3tNWg7PPGZNP2noPeEgWdJEQeyDnprvdS5gytmD1Hyrs78oEj2PQA23A8fJopbycXzY9kucxt7cbMKM",
  "key15": "mEMS2sLkXbnck4hdKdNg9SvJKZuQfpPPHxCD3BQeB5gGWnJ4oBQKUfco1e5pVLMPLYhBmZU9AFwaTAjNCHEL1Zx",
  "key16": "2E28Hbgn7Tb4hJVdYuydkH9yQrPPxQVBUDHLUcspWijbnaPZf9DhPpVR5741FJ5h26SZQvfKb8mHoA2G8ZjyaHWn",
  "key17": "kGm8JVVfmie9QJR7wXdvkpr5eYYhgo4AEdsdGM3B9RSq5YiSQ85TbCoLoxxidKFNDw3YQc5VnCs8ZV5sfYLEte7",
  "key18": "2DmE56WTbs3BRanNoXU28NonrKowHpRGe8WBwn9rL1aozQE9Jnu5q2uCbER75QdxwRxrNLf8UonkV2bJXEFuJD3i",
  "key19": "4wEfbEPQveW9uFya16NpUxULwyzLrevKtMazvwd5fKfexa4oW8K6ZdxNf6SM4JojXsh9HGRU8y6uqH3CWmnkJEAT",
  "key20": "c5PtQtmoRDkVdMysjCrT22RkeHY5QpakAGf4qyMzxjtjo1NMK6GdRuVGcH6XL4mxjM3w7uQ7TAzDmjUJ2nbwGet",
  "key21": "31fhUFmtwsvdT1NNZ8HmK2QnzCFLTNBxzEfchfJ9FGQW7XYLjTXh4JhtV4fWV8XQE8fmdsxcNSpX19jr226uZHqY",
  "key22": "5am6UdebbATQSSkNGWmG5UXbEMN9NDidEtfjBTPWyHZujSVr23Ajyki75MoMra81RWF5kwpgHgwd6BSx65qLnCqw",
  "key23": "2DicjdqsmSMgumSbpfJ1ibPqjpgLmB8m4T1xT28t7sLdvMcT5ALTDbEnByCMoi9iKAFLT2fXmT9XCZDJLQQVkJvh",
  "key24": "qS1kNZGzu6GjXhaGTVXCWgNGPiost3SkonamU66GkcaAjZ5RRTb8eCqvPETC5BHoKi1chPpDJNrtJTnQsLtUGre"
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
