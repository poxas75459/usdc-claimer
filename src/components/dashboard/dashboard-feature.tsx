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
    "4XM3hFBGqy9t2wXdWYnc9oQq7eEeYdfitSXvyTP241wVXC5L8Ary4oc1eZgsqiM7uqg87DwcGShTw291SUJc3oCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igJUqZGikP1DESAn7uFSUuVxya3MjAzQVVVdXHZYBWJ9Ubm7qjccyEaJPtpY2zE1YLRiCa3H66ssusiUvQs8XhX",
  "key1": "5Xp5mKYKcvH9UgExcjuqhhS8Gt2wRju3JKSdGnPsWrru8Zfp3dLxdM7GtiJxMe8rGZzmhbhkj3EM9NqAMxU9PJTt",
  "key2": "2LCjdQqGDNYrRmtzE6RrT7xRtUTLP9aTy2WXLgCbxoem79XXjQvHMtkLJiFwnPgjJBARaAZqpvD2ve8vviVYtHJk",
  "key3": "2zWGeQTEoBMLgN32i9wpdLLfHjM6RwQa6gRqjAtN9SR1n3RZi7TNnQSjqedQTh1qSLF4cJMUDq1XrymwLRBdwLbU",
  "key4": "jdgpLq47bWu6QSa9GfFv1Q7J3Gxwq5GwPN8XphEUB9Dx48CY2cK5rfkdWUQa9U4kMR5tTPbZphx7A7JFYiWuPyp",
  "key5": "5UXS7mK4wCaysKV4PWH5jq36aBmGoaHVaT3Dw37bJxyqjqoa7B3AfNfeewd66BuUR6n6Z6Z3HZMUhCwqxYJDHFTH",
  "key6": "SnG9Ja9eYUmngydFMMXMp1SWRR4uYAtgpMqqB7fikgjGUwcMhiwqbg1b2RovjL2uUXb6T89jvAhnf8ysmuzg2n9",
  "key7": "2wJC12aYcx3ff72dotMJZMSqzepw741hKmib4DoQAz6WgUHwfakFiB1aT8aSfgW77dRNXe7himQjiEUXz3nbRSvF",
  "key8": "3qMdE1xxC374HWANuJpnbbz3XShnBGSrXwKxMFUH57qQ3VSgmXohZivj9ADAed7wEn5Xh6mXcQSB7heENtShf5Vy",
  "key9": "3jqaMMeBo9bLwqxnd8qGkZYLuCyKC38DYB23ZbLfXiCRmmaJorYGibEjsaeRL7vevsMNFGLt5yxXMu2q2pB5UwJe",
  "key10": "4rXwnuDbH95r5PRpgXAaY7EukFyNZnsY9gAsAkmHN2xzM45P3VW1SXzJQn9HT92DqNPkhhBGVZdmgwKLgyqxNWSd",
  "key11": "sLXik7BiP9ixqz46Jmsh1hEZdpaLm8fkKgx2cYBFvW2fzJTVsWGjxgD1qtgEQe2u2ireS5Kfc8DsMNsEqsC7ZkE",
  "key12": "2mnUb6UjEMd6TWAfGW5nX9ZRxXGFGX83g752fkBBp7wyGNnaCyfiVoQNxvCLcDViUHZ2swY9HscfbTfo1dCjD3rM",
  "key13": "4F9WexQchqeX2W8Ls5NQ8krP9Rs9HmY19Hczcqk24TNNhw6TQQqWF5psUqwKwxYtJ8NvKtVxqqXooF6Z6RxyAVYZ",
  "key14": "2pK9WgLm49kppAo3L2n4c1u42McjHkRT2ihc5ur4MJGHfnHg7yz16FGMgSUdJMegYerUD2w5qJEWwx7NxiuyPyV7",
  "key15": "5W4uSqPXcZAJztB3WssZoTrVX9e6d1nquy8rcJLJitTnNRN6WH1XbMTUUyv3ZXrDrCeN7XFxeUAVDnzi6aB87hbv",
  "key16": "pHGKSYiM5k6rpJYSGxsTei3sDisTpKsQdEfgdnh8d1Mo59ZQWEhu83ZYzcexY1ttamrT7iAtmqUufxBFjc47MQo",
  "key17": "5fFyH5XSZfvPffVDiiBRSsPoKJ5waCAH65LtXQ2o8cgUH9B7EEaZBzvqKwjq36Gojn7DvoiFk7GR2vv47eF3e337",
  "key18": "46JBJb9VHXTVHfEnNM6q2a3MtztCpWNmeZnmoHP5VahnSVLtPwD9jwr5J2gSeS3GcZvn9yFMmMaX2KNjfZbRsaXG",
  "key19": "3T6Y38n6NiNLZgauzHeRGTMRK8tNsQKJxrVg8fG7vCPbDn5vhUSzm6HLZwBvyDvpPbtvM6HVU9YKcZjoAzmKru63",
  "key20": "2RT7WEjsyizP1WGVdJqJJdLTeeQNFY2u4ugjTTHnBUhhzDzNP8GFotXcKzFQRRXs7Mr11uM8FABW8Yeb3jFBPEwB",
  "key21": "5oCRqtKCxxNfvB3jFaerzauWkuCdQHxqSf42SU1grJTKkgNH9T3hXdYE4p9VLqUqUDtTuzsyfK9XYUFYhjkiSqwV",
  "key22": "4uajnoBgkAavjheqJqvCydsvGhL6tnHqP2UgoxjRAzBGCzFq3FvGM78QmS5gkmjTKkP7h5fx9gTfW9oo6jUd3QBs",
  "key23": "228APYJc9ZBS5ZGE1RgNuFJPzLP6GPodqNXySermPn7Y9MYYhUBhozWWEEbba9z2uKMXPcsgWzvBQTYzdN2KMPgq",
  "key24": "3FDSRK5fanehYFtdkT83Qn49A2pZEp1bqz8hJixHfiaNeGWZPufaJ5TGhCESEvs9EBVfUuh51uSBTrZTrvtp8hAx",
  "key25": "3mHEpbdYWpUACmSSyyBsKqPWveQ3wo7khoFethzx7mvauqwrARSbthyL65vDHjVtQNadEtF72EiFnYGdDEnCFe21",
  "key26": "3kNkAd7V8mrkMXQVixUANVnsgYgxN1VVu1H5TBhHb4wJYAsKJYmiDxPzJnUkCtUxLXT7hFnN7kUw1cQpZWdfbCMp",
  "key27": "3M4YdewFnHDqLgSCnmwHhy14ozrscvEAv2XttkYD9iLUNTE6RSZuwPYMWE3VFR6NcSgQjSZ8mgS45ezheeCSKuGS",
  "key28": "3BPwTGuT7SQRcUgWCrZSwTg1HE8bjMNuDfEhkC41ZZiB3ud7JcXEEVzNHgzNRpe7wcSJpF4DdYHt27Pogi4tdvgN",
  "key29": "21KQqoPitdWQCgtTsPU5NBq8pmJcVNyP6MtXp7zP2w2Wwjn2feRLqKpWLz2oFKDQzhEpEbseC5YqXnWhJZ4VyzhJ",
  "key30": "cgeSeCaw4aMu4XSDj2Mc9cfkxaTm6icAM3PeZeTiqRdFgPrgw6x56q6x5Whg5LLYraSUMGh3TtSrFPPkELPzpzg",
  "key31": "xRGNusMY8UWm3iQmgjyikbvfoW3UNhazvSforhRtrtwSzCPAjL8XPj4duN9LDQpTMkezs6ornMiSjVSJBWKFkKB",
  "key32": "2sMNBDENXiTye1PX5pmSJ1RXnfbdobH5G43dFxtRpiAkSYB5DPPmcRFz9t17VXJgXNWQSdqeXrtyt43ZhcdMBNJv",
  "key33": "QYX9b4vLWVNCmQfhPR1L8VYyJPB3P57iiHZJef5aMsvmoRwJPpjgu6mFqtPix7W2M76LwPxcNrwDBfRSrB47FGy",
  "key34": "opKdxMgF41MovYWsPVmoaGfNtuvuTikXcLEtphQM8zDs9DUP22FqNoB9UhpvNQJHsLyocd8K7KBj1bP98qtCvJ9",
  "key35": "Lp7Dpx8hWuu8Y67UbBeEPrUCydczcSLgQwKLX1aeDSDMssBbjEekUV4Ew5bThKaLqbVNVScZMxikEK9miygaoT5",
  "key36": "QaEQpjumhDxeQGYoia7nRhDW271JQQYKN5RtQXBYYbrATAL4w8oPRMF6fE9XQAGQBzhkTUE7DhVNQWittZo33me",
  "key37": "4xzYMFw21tpig1p9VnjtEBwUjCqHHWigzjWCHwQVSFR7eRkvXCzSwmy7Mgks7g282QRiJtEq5kgWvg5eURTR5t95",
  "key38": "4ghaqS1MUuMs3DELKsYUyha4a4vmn6Vc67sh7m3Dm8ScSsPUst9oV9wZ7oZMtMb7FjakYfZv2jNuK4QEVh3Vxse8",
  "key39": "2di9rCLVtj8dSjFdzaGaNzxT3pXYpdqhcFEwajd12f3mvcjkSShjFVB94F5B1AcCtH5afCEwCY5stx9W7yvDMa7F",
  "key40": "3DahKLdk1HARyMEx1HAffdjXEWkC9Qj8J6QhrVPVayQit1iUejU5EvZfwrmXbovQaah6knCiP4eSZCB3mr7hHfJM",
  "key41": "21cwYCsveLmhFyMQ6Vxsqk9yM7y6vo9JTpkpYjZUTLgy87342gd8yG2C8W2QShFQT6rNGJt8yZng62YADBxVe5x5",
  "key42": "4Eq5KRPvHgVNdQyyf5ojTTXCxB4RpTWJrhJgGsUWL9CZwyL93tTWM5sAibDV1guCCUkxUdcmv3ybTCq1oKWZAYDN",
  "key43": "31ykcumRskVbpptqfaoXuhU3zsmzr2FaT8HfAibh1JbkBcSnFGv9NnuJF8Ebg9HagzUhjAw1YPjEnJWSmDGqJ3vE",
  "key44": "5xm7c8F78T4hVg2EBqC1pz9eZDLjHhBg5TaqSFBM3SF7h3Bdgj6duqQsEA7SEUHNd3du3HyQwV9t8kXb6ajXHSRt",
  "key45": "5GeDuaASvAWqDtHXgNNEZ4x8f7n5SN7mKAdFJkmgHKQs3PrgwzZhtka1KDuDzhAZsp5rgW24mXU8dDffY9jvbkvu",
  "key46": "4Tuk7BayKSkRMTVU9FLZJny81y7sVehnqXpzBFJJUmvAAurQDQGND1RtiLzHi2kUaNYScPLzUvkL2c2znb8LnAus",
  "key47": "ZxrAq2GSA3PgBfDA8qM7eMB5C1n19XQULru4bWE1Jq3bZg6x6adQkT7U9MSqXKfwXhbRG7DuSqmo8Zesw4pDhYi",
  "key48": "4ousuj7nKyFGYmU16LTD6gR5HgKQbGptDcef7SX7YDjqcQNRXfz5S88B4HTZgwvj1V1mVhcLtKAhB4EvxR5qXemh",
  "key49": "cdT4EzK6DdTx8AjeRrfGuPeM9cC8Y7AuUKMdQ25J5gmmQNq2DvkAarjarsemHdS279FzUyMKLyv3LQx4RqVXfAc"
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
