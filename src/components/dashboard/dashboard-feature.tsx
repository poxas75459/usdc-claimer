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
    "vjd9aqzWyaFahp2RTH6t9qseAmV35KPooBYoVXzmAGUMR2MbKjuhrn1cw8tS6mDvvj9NYcr1JyzdR9fcPixKTzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibQwFdkapyjRZpt1ey1zAHCdn2f2AYsXaawbsjSUXM71X4UWgefbgkvEvKe38Y9fTeYEztdgDykp5gZytBPhXjp",
  "key1": "2Jd1fkAkc3Y5LCL6dVyPqJpMado6CQzAh69hmRUM5wzmNghmPivV9BAXHnNY4KDrJ1V85RjU6a37b7SZCGKUkeNg",
  "key2": "zyhJ9VNbjnAN2oyA9VsA6eN4CcB8h3ACJwyKfioQHK6HGPvNxacTzknNkQ261QyT59R1JhMeYggTrzoZRTddEB4",
  "key3": "aAh51V4DDg9ZPZzHXnuCqVWPzwqDx6SpAR79XpHKRwwLDfkuGqaCBgMVfYGFt8GZ2Kj1ECmNeo51zuTFYT9fFQj",
  "key4": "612Ln9XKBxv81j9pyQxC7p6WvoDPHArY9JXVTAN7C4hKXwAFh6AfnEyD25kU3pSjpQUpT1DFqdKbUS81hCoMjQRP",
  "key5": "5EVeRceWZixD2E855nMC2duB8PwcvafxJFieLpbkskjejaccyMdDimKKHFFYpjJYJbrnHkq7zgHLakM8uEqKdzxF",
  "key6": "3xVTBKGUpMeXvP87ALWke6XjJgU5Zo9rzicPH1f6FvRD8Mg6Vf2MoxksLnnHaWWp6K9RZePUHxhw1S64993XN8AR",
  "key7": "5AzfiNEndkn9HELqoR2xSVC5iKorLrkytLuE28Bxuob6VsPN84r2Hdi6628B1dyDmNnW2ZHdX77LHJpP83en8ARD",
  "key8": "2FfWSxvEuCnN4g7wmjzdzrq4LifRkkuEbjQ9CGdma8DTwjLiAY6kVVruae9dutguXvu71iZJ1FFaxaptuYRTCq52",
  "key9": "28N1Nwr7jCKvvdjM898GYnCYd1jLEXeg6NymEmxvLh5V6TaFc8g1HTmwbcYN8RMnoan17jZqW9DZNeVu9UEVQ5Mw",
  "key10": "48gYaFqJdTisGCK7LjKeVMg5XvmtXmh5U84s4ReB4jKJvMfQVgYdLMtcvT3zKuwUvBi3jFhcW1EyzjbqX4SwNaXd",
  "key11": "5f9XFTJf986ivfivzBBi3s2jh4gHQGPMTBL5iQR7AGreQ2cCthXpXLhADE5CRJpYZ4MPdAsCNEed4yL6qyhpkTgm",
  "key12": "HPSPppJmPPDkpHqbCfedxRiVGnkzhWLDP7xU3JkwqmsfjxVCUiyWyba1rktx6NNeLvdTp63L5KngWAKJPPYof9E",
  "key13": "fCRHMBPy2Gnj9JXZmnhqiNfc5qVDh8Q5uRYrQXCdXBVkbEbwNxaiqovB2RDvZypuwMZiRbX1qtZDNjZoCYrYTrb",
  "key14": "3MY7uXesq7yC7ZYnhBTK18dEPgz1rUYhQVm3zkbrctZCFZTR2VJ9XyVbQmYW3FeyhxoSGiEXRSHTDRUX3gLD3pFp",
  "key15": "2gBSoJ53qfHqNgABAM38uBnYaswKpnQ1WLG68yfHaigxrc6zV3MUJPJFtjAteNGWYSgpayHiA1XTh5Q9GFRYeoBU",
  "key16": "UtpvXWEG4mXZab1f9Ruz4xoAtrRK1zKnt7VBArLKsTgT72aaXNZjpSHcYkCX2ZTkhZYarYTPsMmbwF3tzNh55gS",
  "key17": "51JQdd3MWa74mgo5gUvM23ajWEBmFGRpgwHw1XbZdDP1Ew2p6aj2eks4sFniuQzUdsYiGRdR5e84JVjz17pLzuUQ",
  "key18": "2b7SR2f32MM4Q7bmFRk6yTmD3DDHAcqmTdZJ4hdEWVdm1qhxAr4hoDv4gUR6BWUkWFt592k5hFS6n9vVwMSLvA6m",
  "key19": "4z4mzPQDZzWeMxgx1pgrzevQJEtCuZ46JHWn4aFxQHf6X1toPPHLGEXmWkrVzBewwgsym4tzAQKgDidpKBbS5FBZ",
  "key20": "4C7kVmHHEdNFsMAi8tNXoRvuzKDk3gM78gWFgFV5WSJXv4GTzadbuVNGAhvc5peo8zAxkkTRp6NamcBVoBgPLTKd",
  "key21": "5eGRm9BdS8KXrNam1s8sKCcx2bCF65VmBZ2kkLYceb7XDLsemJokwALT8b5Z7Lh1Er7NVrwi6UiQW7sTRHp3s4kW",
  "key22": "5w5sHNAZzQurqSyjTvWfBYi1NxYgm7icogkCVxfGEzjT83NALhSWRe94mtomHNxFnEXBchefRsEtpFk1QTa2RxKz",
  "key23": "3b48Bid18NRANgKFut1uYqmY4oQci9eiWVVhSztfsEC8f8BQstiuXkxw5zx9sAjoxpPZcZeqjgy9mDeSgFaUiJCJ",
  "key24": "5TXQjDoq1qEPrA4XyEtDhR8DCXzFjz1iSZaXPZ47g9RoWwt2BFRzqfS9Gj92T3niw5bh94WkJboW2tWsvU8FRfpp",
  "key25": "i1UZh44BAXTnLjqhMcdW1SDgg2hd6ppBZUiGJPLiKi1aMNERxarH7g8acYHPGbMT4Uho5MschTxZ1F7mTrJc67y",
  "key26": "2itgYLWjyeCc5cd9JTM6a8s9mzfXFEyK6bsTocjVXFA6wFe5tWacLez8G5hJyQvSo2WQsKmxTs33TXfUBGzoYKsv",
  "key27": "C5WEyuKMeNfGeV4GrwXxEyGhWq5Et1DriEbbZLXc5H5mbKtsUtodJbm5HiQUzX7QfBTRTScP48BhfE9X6mfA13x",
  "key28": "4otjhaqg9C7w9PYCCJ77AQfUsCVYHojBMRCqscYTDbkAg8Q9j1chGjYSC2n1ihHAsFW2qTAjuTe9KCGNV4H6wD4S",
  "key29": "31ZKCSVdef2MTrMSatXhCdcQCMfUBVw7VszLNDTctKoLx7wZL6fKiGk5gaRYXDaMc1Vhd6uuxu6VpJ8z23c7TSJe",
  "key30": "pu7L5VqKKpUd75CAz1HaQeqadvFDX8ztK2KiC3Z89ZQogfA1DQgSdP9ZxwCGK9Wrbct671nGqkMSvYXm3DY7ahX",
  "key31": "juA9F3aS5FLJivxaCkHHjbwsHXp51XM2ZPSayGPV2T7RpVR5uAAwLi7A97VgKK3idnB8jzenXckAkVvVHV9WGgk",
  "key32": "5Zk8GVPojmDb6kktbEUUkVy9bSYvXm491WDCzLqMLQnpwB162yojGaqMxqqCS8Ft65z1sMA17SdTMYivqDgLdWJ9",
  "key33": "53pYTPjHBMD4f15i4jZTvCk33ZauWQQPCfSvCbJbYj4x1cFrxzCWLNpf8FF2Rf2KkFSMQRFJuJMSJ5ohDtTmtZq7",
  "key34": "3zRovtjYnj8HYPA4fMffJzDZb5MvwuzBM266wAqUMFXJoijWdDBrHhZ6t4WCebSinJc6vffYMPTs4hy2kgoTt5t9",
  "key35": "hG3E5j3AYKAvbKwzzh4pLDYVSR8roMNDzra4jdiBruodHb5a5aamb6hqsj55Kbni26gS9g9X33sFfHTHdodMTdY"
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
