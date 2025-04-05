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
    "2Xe5jpmvuxgxenfN3p8nSa2YpyLLjWybrpXtqa5ZTt4n4oeuAhAwsvDJWaotq1nqfzXYgibTVYzoFuSvBJZJKwuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFU2SaEbjsjuPjrF4Xia7YdnoX2J3EGVxA4Rnwt8kZNpERy375rP8ux686YiMCSut8ZKMzFtM8rLfadNiiQgpJK",
  "key1": "57mxhXux8rpFMvHKqQYwDUhPgeE8tQHFwoRMFrSa46ghYoZuVJ2fZVRFMyBMVpZjJKhMFgEnBRbK9fgB7UBK7FrA",
  "key2": "2B2ZaFZRD8yJ8orUHGTgowPFV95VVANBXtaRXxJMzmojjXxBN4g1iTo5vstn3qnA5Py1gBijqvfkLJRTQnXnSw8u",
  "key3": "5T7CjfWAz5HnBpbSKDxWHmUFeBRDiJ9g4Be6KA5s3g7fiXqMKjvpugbZCAp8LXqu1t6vCTE9PcBfYjgwQdynAEUb",
  "key4": "ERfb5FgfeDd3V82HZU8fgUXHgdUkJf8Z8rvMXP1wkf1tsRzjb4UBXN5DUxerVPu6t8pfP82n1mWvLCx3QmYYKWY",
  "key5": "2esoduxbrzsB8BgAYwwZFBr5YtgL8KKvDc6sq93qcqAgsKP3caJT1Y3Md9kqe8h8nGLiSNCQ6fJPi7ViuksBnFNC",
  "key6": "4kjyykBTsgtivipm5MveqBfas5vihqpH6DhV1gkZ5zNU1aCp4BWvDXdWmvaAHXyJTEZxCzwpKRSnzMuXGmoScFrc",
  "key7": "4fUT5UTCLmZ29fLFGFnD9nEtsU7iCAYo6sqzV5h92RwnkNP8NrfSh4VfrFoRLqKAwR3rDEdUsr2pTZc5syjXim8b",
  "key8": "3qX75YBdFeXShFzXiDZDL1FoEYGe1NPopdyn3H5zQxrXAdQXqWsSUT7qgRMADTyrrbrhn1JjK7c7EQxTZcK3hG9F",
  "key9": "3sNZw3CCQNPMXzvQ8a7N2xY9fpwPqSQzaF2t1GeJ7PsCMpJMAhjT584y4y34K7myVyWYh2KGwcucEFedcVfj6bww",
  "key10": "64sgwM5gfKEdbxSWPNu5dUH1EbVrfcMn4wD2dRUzxDP4UPi2g1YzThqJRhm3mAijxZECQvpGVxR54UwVgSynG3yX",
  "key11": "3QqggPnPB7UBqHgXudjh75Jws4V68p2BUx9VSBMcZFLsbXVFaVWEbDtyenbM2aWP9UdnxB6cavNmw3mvzXgyfHMa",
  "key12": "3HKQuNwFLiYpVu4VHakSbybJ7pLi7xhQPaP5UwzG55fFkq7a5G3fSrsjJfDqgdR6MYBnv7TuEpzcm97jBGAygGQS",
  "key13": "3sQZHwi7w8jW7UGeJ9e2MdvrHauSH3Z4h53g8KCRCtqqvGTKFjJFNVuuGrsQ2cmyai7w7y98YPyUH9VBnQ1N8B2L",
  "key14": "2bHdpMxrpVMCsfbX1nvq5YRVc1sgVEt85XVidJwNDD2JbvVPh28Nbnk3RTmpLEv9yNhzcs7RJfx1wcoNtNY4gBKh",
  "key15": "23S6ttzPnVSarBb8GNyUh42c23YxMDG7AsurkMwSPV1Xfu3grWeU3xeCDo2zzdShSazDUZrt8BQxyWHXanWDe9sN",
  "key16": "4trmvrK7EyNL8L32XcjWCgfPE2UeAmVTAcLjVcZpJCqKDE5pjMKF4vtNPShnBfF6Epn3SenuV8HwEVCWLY8BkiFL",
  "key17": "2A9vGQAYoesuuxxNfjStokMv3TLRLFAEJB1adjuDZceHLWrReb9xjrUvGDwTZdP4rUjq3MtVTMfSiDAvZSeAqqmA",
  "key18": "5Uwb6DEKUUHRjXNxZLu3mKTybTt77k4mEn2popkwsBsZTj21Wnm3k9Ec3vXAR7BvFjDcV48BKk7k7DiWEDCKy73C",
  "key19": "5Y2Rr3gY2RcwJrJTNATEZwoQVeaUJCNdmMH8YsShXERhdH9wUBMdsYxpgozn5mwJS4jBys941xTKAKqiWK7ZWGjj",
  "key20": "CaqEb7nWhnrK69TgPDZiYSZm8efdChpvZrEy8kyMJ79iA9G4gMkkfcRWCoPVheQzcGSGKajq3CMRF7zL4dYLTgk",
  "key21": "2iw9vgrWo8gjFjeU2PWyvCJd56uY5qrVX9HgJueHgysLQdVwG3vvC1AacsVjc4psuok9ZPKe5XafpH2DhDfCHLhn",
  "key22": "2osR48RhXPM6yBrinasp3VxFR3gzbiCp7otE9XRfaXhwmAFhTmhjgx67iumKyaeZuAJPmRPnCVrLTYJ2BFP6y2i8",
  "key23": "C4pmK5qCKaA9EPqTzMQ4VKZkr4nGoKv76GhkcBA2Qv3Nmwb48A2cN722QCcP6EcCKGvNkjM66iKmTiT7qHZa5uM",
  "key24": "2BLPBky2auPia4nb1ZLB9c7wp6cw8qRDW2FoCQyQAfTZ2uKn57mqt4ZBueeEuS73cictawHBb1gFFhfHMDr4pg1d"
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
