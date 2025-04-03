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
    "c3hPedogHXEuTvrQ1UDyanUBDVj6K591CRKFF1NLcfHs3Nh3tY9JtBGgkAQyqPA1rfEVeZfd9EFqKC1ScNdPdqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XHsugUCawemehMogpcg2sdXtBbXjWqdpDZcrstrSQyLSfDCCVZrWVkNEPRTB5eDKyuwJty85Kkuzemis22sHuNq",
  "key1": "312PVASs8rBX8jFADxGn49o8PQM7ndRGLqrHvpnh4igS7X35oR4M9myoWn78Ho87PbogGNasYEBe3cR6LG27ugKx",
  "key2": "5PDjwzX5zM7BZAeMHtwu1YevNf4o2KsqXQPuDQEjau5NWzgJoW7Btv9YRPzfGZmtNZsjSVo1D4NCXnE6GdUKCkyr",
  "key3": "64Rkhjc6bamYZ5LVGBxqCiJguLpCEXsKPZcugf4XeRkF4L4NhyPZiGc4hfuWeGXuiKim3V9PCjUSoaVP1CzvU5A5",
  "key4": "25usowRmjqEfZZ2iTMuUgX3sypGFi7RUH8VmVu6NSsuXqBe68nesmWSmyWUeiQUJvVtcLtuRJ2yEiidDVwemvDbi",
  "key5": "5cRJHfqWjYYZFUuMkj2kHR4N2VvCzRms64KaKFhya25MVMjvUKxF1fSBHGpQbNCH1eAsSvVt5uudzgvEL6nV6oBC",
  "key6": "2m23sGxiVteY33xPjfLuGYrybzTskpfTyj8Zf8rgU9LFxWr6GKpSzLhNuaLbnoPb2pSsRHv1qZBN4zNVesibxSfM",
  "key7": "5to3RYStYujPo3T7Fsa6Q5sUgzSYuK8LNK868FAg3Ywb5wARkYQjKXCGP13nYuB4GL7mtPDx3RL8kk5TNwGAUawo",
  "key8": "3fpQtqwcabR8EZqrNWLEAZcQHjNAxj7fQR2SQu56vDKfFXmKCyqCpdfrYFobAQjG8XfgQgnUCyA5buE5C3cL6m5k",
  "key9": "4ht8fsJ2WrVH5GHMsT3qo8LgiAkEUKzWD4v9Y5nEna1Z2BGnfiB4gkDTqH2y9SsWe7L8bYJWYxAYcxkJBXghju7G",
  "key10": "2ufLfpYpHx2pkzoemAvVW78gCubCeCxVfTjhNdVS6ktwt5Dh1PNoqcyTEXHiUvLXRyA3GaBiiShN7CyUT1q6dYnh",
  "key11": "2nDQcuVjDxuFcAU1w7GDRQGNAALBn27ArZzPmbav4TTRnJdDc7G7B5YP6ZK3C3EnYKR3QFxnbjpRxh1JUCSeBvUN",
  "key12": "28iEDjVdXPkne9xQ8RWKmbUxnr5pXbfkU1URth4iFtYMNUfEh8FwVbLDtmYgsBVFJDymUdc5G9zHv2LZDyGPjJ6K",
  "key13": "73fHfwHFsCsYNETzxJHhLrLSVj2tND6Qm4GAyFrtbwEo8c6WjZGLMAKFNgUqEtGAbeorqStn8EwZr1vycrHWw9H",
  "key14": "37iwKwXcSbFTebEGP7qoZxL4DzEcVFrQXFGNCyEXDzVXaacMRacbMkz2bLm9mCesejzny4YmmJiHNHPEqFsDpw8T",
  "key15": "3VPm1UAhkK8Nv4oo53HXTGszuKF3Jj2Vvj9W868wsB5H6AkEWCEj9QpJCW94KHq7bD7JAXVnnLpT2npxXkKTRkS8",
  "key16": "PHUQci2tqnXTvwMxs7caNUg38VeE2ckyL6tDMCqD9UWEn6YdSrLPJDvBMD1n8N39Qg18hwn7zKUpT2FAipP77Uc",
  "key17": "5J7a2vQeL5zRzgxCZ5tw1BbP4z7PEFzVyNbga1XotWP8UBUnBepyHmZf9Cf6mJgAVgAqHgf8wqwYQTdxwd4gv3cw",
  "key18": "2ewAp44y7v7862UsopwtAVemahepeb2YJBUophEXfXfh1ViW3RqVQxanzpEyEyQQa1t6wWkKdLCjktnvCqzeaZ5r",
  "key19": "VyYaLiL3J57GDpRgSyKQyrFjpXZbt74c67h3cj439DrGnPCAftSAobpBVt65anDXfKxQWWeQqrwimd1Y2XbKFzv",
  "key20": "5f8TKjHkGthN9zDRJC95YutsetJ9tQhtJQYEsM8M1joxodFnEbJm3ZK3QsRZrMfuEYeQWBC91Wfx9YnAsFZPj46A",
  "key21": "4sdRrRCEUG7s4Zr6Mpj1BjsryudxqVLuLxtHihutkbnax1p3JfucKDeCRLRoBPDM3in4aZ79ZLTH8FhKG3KRjQqj",
  "key22": "3ShYfc8dYqyHeHbHUapQ2dDYk8eoRJvrJW7bHmfksccHL7W5RWqejj7N4uG4BjvjhpbJvBreRdYne8EXkJgYJfDP",
  "key23": "49fzJLvrYLt2wZSqXHcWAHnqW16mWsAFUy7vM5Q8yLmnpBejoskNZ6vY76tjCnTf3o4cxTV1thnLfgHLSWxP2h3Z",
  "key24": "44yr7vsMTeFoYsfHQNyQHYKrr7giVUQunusdpeKi4bmX6nyZ4JRGwt677x6hAFkwX9STPuhGi4qFz9p6F4ms7oPo",
  "key25": "2o2895iovWBqNJ7t5PHuMSD7edbZ2Mbyha2Qqyj5jKXBE1L2cEdQRUZWLAHp7D57cndJQs64cYbgsuiZbFABnPR5",
  "key26": "2j21yDVdZaRgPXXBgpG8rBjP8CgtDdWtU3xKeYkD3NUdab1JhencV1Cd1am6GfvbjKxfP2GNJmWtq6bQj3hTN9Z1",
  "key27": "4WMk62mJ2gbwnKxWa1iTs26Z11RkmYh854KTjnUn4ejhTbmV2mntBATqyZpZa6KLgBDqV461uww6TBhSpmDf8SMy",
  "key28": "3JeRhPdgC4AP5PjbbcEstuF62UVcxygBtR5jY79jhdJam1pEBiDK4NLJzkvBUyMC5J7qvpctGRcPQt8C5qsJXNne",
  "key29": "5Nmoc2RcELSfrG9MKHwAXRSxE5B3QajASaf2SfVvvAcgR2UHL3xUA9sMe4TGmGkJ6ZGxvSQFP9uxX1yWT7BA4h1P",
  "key30": "4WvRJZ1wuoUvtX6wGrYukRNGP3Hwky99XohpexmSt7CZRqSMPMXnwCf6RKovK6a5GeFc2FXo5kTyE3r6iSVgXVrW",
  "key31": "4f6MJx3Y2ibT1N5sJ5Rqn8c39KqbwTg1kpXEjSaR3wYr7MnL9Pjx6QqtNybSAE9uT9kwVzWdkPcdq3p9BiPb42q7",
  "key32": "iJhegCM2YEFruqfzUJBAxK7ZNiVMG5cJcZWyWGpPYkNWdiqfsacex5kfnwaJfUUVYzJg8td6YVmKwFdT2muJywX",
  "key33": "5HKSED1VUtgd5K5rDPnLU9KsVKhVoTeKEVJWkG5NBSgkp95UVv63GqxnpJqodfz892YUX1yttZvjWjGZJ8UMCAdB",
  "key34": "5JTUv2jsBhw3GRcYf8Hzd4NiZVmhe72JzJyFuCVpFEnKcCzdM2uDFLumueq2fGc6aMbfBgYiWyyUAbUcCEWEWA4",
  "key35": "BCvTdKhHf7hzLVf672BjytQqzCwNrCkodMtvYPd3US48q1PKMxRDgojkftnBWZ8ju7gYPrRYis5f8o5fwzwSf77",
  "key36": "4eJEYJBiDKPSh4aRJB9TBx87LPEeZByqzh8b6Pki1bTgB2v7XTaAkyFGZXtKERQgcS2Nv5zes9xixjcsQ99qqzfH",
  "key37": "43mXoB54oGwjYkWd3oVxGWLxaQe2Ppc2tvEsL8NzPuXziUboF5XKEiWspuKY79fXQxLgQU18spGs4XeCBLvLFKkC",
  "key38": "4rkJFLNSFrtGPzaJgbEaEoZgTqbqTyQmL6dHXhywyAUdnJRb5QqwkWmVx5xGy6w3tP4J7Ca57MSTDwfawck8SVX4",
  "key39": "64nSDvd5xV16Y99gVCBQehxnEzfvSYyi32E9t78kPUJRb556sitDPpp2LigBw8iAu6RCeLBAXniW22EbtCtjRg8w",
  "key40": "4w8hbrfNhKh3TkkEPwwXGWjU3BMLqe1Fv7bTCsasLNJQAydrsQXRoca6osABE9kPigMkY46d8LmpKYbUdLxs7jip"
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
