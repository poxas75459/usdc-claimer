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
    "2a9S2NrsPSZkQZN33WcjkaiE9cNsEPKWvCUoSGHCVDpaU1JJqJeSYnb1FJmRj8eQj61gMh1wAkbuAG8zMqNgQaGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZv8NETxvvSRzt1QJUimco3UsGXFTVXAVj8ewPXtQXaNDZiwgHVzg42ZQij1ejoYgPy7S333MvXE8DjG2HHHQ5C",
  "key1": "4EygZteaA7dwSGPxUZKt5ewpdB7NcaMK1BXUNDP7kqQ61vs3RqYJoZp5norJDdF47mRWM6KcaSwNa4JQEUnDnxfJ",
  "key2": "4j74vd4BJg5oCpWVyFwmSbdZ3H5z7pWWwwLFmMuR1rKXZivkWu3MCfh6mgM34tmLp978rZvzixvb5aJFmjfVavUW",
  "key3": "3a1GNuZPr3R1seMGeqtYvbbT2y6ZiDXxEjiBFzPwPMv7AaDUfAf8MLJi4rackqEbg1SZqMqhacoFYuovv8H4Zumi",
  "key4": "2647w4vkdj1hmwLZjk8YnggKWVMQUz9qKsFRJHKVKsrgVxqA69BAhtXxJUpq3kSCyyTgpAm3PV8BzU6JPEFt21nC",
  "key5": "2TX6NBsZUCmStyA4J4LpCdsCQzYtwzsn9exv2g8g3HmAZ5eTVYF8o8mfTnNUJRU7BDc2YXZVAdmtZWPXkfxLHZkE",
  "key6": "2Nonui1rfeHmqxfh79jpHgH5e5XAYQkQZiD9ZMqHpSS62cdgdubuFeia4TEu3DPmtJWBeVgU4ymADRrnt8Zyhkvs",
  "key7": "21H54oNc2bZBNrnZsX5hMCCBKfiRJBknefLmxQ1V1H2kNs2PjKQ9JkaX44NHZ9dGcJJZnndKz7e3ddL4a5dkAn1q",
  "key8": "ed6vVhGmGdNq8knFjJ5k2ZuHkZ7MUaJ76CmAgbW9Gsufj9GgeyqzKp7KXAGd9Q39enL5UbwuJvyEs9m1VbELi8f",
  "key9": "5PYJGQfTUPYSmzKvRdx6Zgurq9qtSNGzfmC1YkLtgFTD26t84L8D6pDyfGese4Rczsw8dY474cPNyyVN7mbEYjUR",
  "key10": "4MwAJaRrJx62uvTV3fnWtX51ZEKei5jnkLfhAZwYRpewSVYSUTpBHcmUdWmCBP7fvicSxAubZssZ2wRb1qiHQyaY",
  "key11": "469EJ3xRAjtx6csUXJ5CaqvUzqKdP4hwakRmsSS9bFnhdbJXczM5MHBbNCrn1E7yDRGWKjhFjpcLUd57QBN3cYea",
  "key12": "Xi5FxS8WyjhCev7CWkDKE4KAbsNCgmAP4Zs84CTR6xwzkm7aFYCjantDeVGkv7pJmZq8EEEi1aiKsHtRwnTWHFf",
  "key13": "44s7G4LkmJrD8JypR3ZP8VoyU3XqnTyEiKGiFmTEiFVTeBkKoYp6uwdVSoZ4jxgGiX2GiNuEXFkNiA5ws3z92WLW",
  "key14": "49etrYnvNuuYeVpSemMrftmsNRhB6SsoNxveTSxUvKwY5C2EYtGZWRCgTmPupYMbhsJ2Are27iFE5WZT1nfHcfii",
  "key15": "5wnKX1JDChAUBo7gKt2DFzmJGmDBp4pMLVMQQ93zFEQJUHBDFNjc5ZQjzZdbrKzBvjQkbQBcdg1YXhXJzCiZsunZ",
  "key16": "3KNa7kgJd4QiJmc25y8QUs643mDdS6DVpqRjeq59ZdWim5Zv12EjG7qVeR4cQx421zq2C9pTjHNmmk2GXUAsUNNA",
  "key17": "4GH2hrGHdykjZMStwrFwQTp8G6S4sB3LPCUaqs6mvN8g7o8YkU3dk5PKQ5Jhe1mNzNAz9ruxFp7iK6M5w2HaSL2L",
  "key18": "4pGGytw4RFaEnLNtsycrk3ZsKUaGR53RSaRZjVGCox6VjrhbLQNDmSuZ7qLenXKY9Lxxvem5isvchSrjd6U44FG7",
  "key19": "4Wb8WupqiC3bsZmUgHMbCzHufnsmfBnw3L4mSqthp4RgHUzSy37A9pQN1vKzri8GcnMZDZD6wGUpeVw6KXTWnbej",
  "key20": "4iFcea8isMejzVyDQ8cbHX9T9HTZ4hNNTyuPunD8V8A3PTbJLWAcDZKm18s1caJqnFswegvopLQ7obAazFoWRVmh",
  "key21": "2sDvtAEr62aQZLnb3FHncNNDwfVmGk6uJbRtez3zTDpEDtsF9PQtJSykEEoqj84cUkV1UcbjNSxZ56JLvxUeHk5M",
  "key22": "3DBaxjKiqZpyaHsKJCANbLmZiLDHi9tJHGxJFyab9zCYdBVxWCTUQwxQy48VpktMGtSuRDwrnjFTDhMHyeRG82A9",
  "key23": "5SZ17wuGqkDGsZnEb7PCKmgU6HSacCMRWrHmo6EcnWgpwWAuKPzP9wwiVa4cCZXvnRbttLjEUVr3H3K1tE4KEvg9",
  "key24": "2yRejUTiCgWUueqHdA5LHAVxX1B2k3ELTHyzciHRN88tDTVenRXJuDhxwb4UcHwSb4ymtqeh4h3PpNmTrR19j8Pr"
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
