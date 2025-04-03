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
    "gCsfmnw3S2EXCq7iK8ziCpYxb8iatDuv7iBbD297udwp5X5KCxNQLMdyVYUknBkDhg2GeVuKtVo5TyWaUGZgPrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akYmESPQgBft7BkDw6Lzm6W5xsQGNupD9CsWpHKLQwwbWALfR6VznUoYfRfMLjJpNpRc85DWqn2mXV7X5SPsDjn",
  "key1": "SmaPtDd59yVPAQjYHHXoaE8gbJ7f7MVVeY1zd95Gsfr5arPXkcexXH7CzoNkEVmp8Z5MwPdXsfQoXuzUuVXUN2S",
  "key2": "2b3yi6APw9BE8UKSARuh15YNKr7ZHNfaAsipg58iNXuRFtnXzYPTbgaDHNhfvURGPCdAKqjeDyLFhX3snaKTtHaH",
  "key3": "2Kwh9WpAJc4v6jpUyf2QLHFHwvkJKgFDHjuNwDRpS1CXCsRKpL4HUuzFyLYXGuvxGcV2MEk3EEj4CtZkRhaBh4fs",
  "key4": "epFuwJqS89odqxByAoLpnnnLXrf3TEwmMj5UuK4S7jxwSa5s9NQfQpHhczDJhrkWbKNkie5osC6ZwfmQWthhx3i",
  "key5": "qLfnLtBEZEqVb4TzByWqYjAvQxdTHUiMyxDy7JzGSLNvNErdTeapE7W1pMYckwzm3hDhGs18jMAVud7yZfjaPQc",
  "key6": "bLLvxwcgEQ592QHiwNmi2p9pBRwZobzYsAJ7bg4broagjmZj7v1hAJo96fnebRA5o6VzdgyUswsgnhXNeiPZRVq",
  "key7": "4KLZb5jL2rCz2xbeAKXoZUsHRDZg16zGnZHYWdxxNsJedjsJPSviwhivjcL6bWhdXpZVAXbJWWuX8hhZwksUeg3i",
  "key8": "571gq2T6juwNbog6Kcdn7cCPwkYpVaLrJURkQaaJvtBD7JYkHibA2oTLvLS5ypEH7i45GgWviYmKRtDJgE9hdErb",
  "key9": "5cWeJCEEA7atnPyVvV248TNmZgFSuKsKNS76y2mzG9diEx5jjAd2qg1sicdQoDQcX7UTXYptUDiUQbDmsq75Y5kM",
  "key10": "5dxGMioZUa1WJg6PyaFu2NH1NYbBdmYxJxyLKNNkbZgihgPLC6oF8dQHEnPcmmULjbYUe9s4ZCMzZwtt2HRAXFkQ",
  "key11": "64DYUGb6p5Bj1gDRT317fJLSRv9R7S6vLDZBhd4VtDQvBy1u3E8DfcpnYCW7S6x2BBGw4iMnrKF9Pj95GpuunTeD",
  "key12": "3b6pbYBphvGcRd1q87pUUSTXJJjFeg2yeDe8UVSZThCUK5FiKX2Xu5KhV2zvjEdjuXKi6nHWFg7EFYDeSCJoaVeR",
  "key13": "3DuSQdaGTmQ1tgpe1PJWaMvgRxjhZdD6yrodXbc8RvzSUrEqh7YMpR4Hxg4RTCvuRRTEBeC3JyVNKQzCD5UWEcky",
  "key14": "vznwvLmv9Y1gaFcJikygrarcGjobarEwJx2pmgZ539qNmiQ9Gz4TsDiQMhanDTa9wPUy6u9YoA2kEdZ3UXQFEAy",
  "key15": "3GMRSNC8rhr3vWnL2QyxHV8tRD9Z7wQsDFDypt6DLoS6iEZCGQfFFRt5yAWUgdxn5wMASyYirs6PVLWcLoEEETcq",
  "key16": "4GTdDrsfmxqUDaUJBPF8cjF9ejV2KQfPns5aAXcER8FmGQcNRLs7YVSoj3ZkiGpgrqgwhofmvq4QdPTWHcZ5xYe4",
  "key17": "44zce9eGevNZ5NU2BovzT3nNfev4SRp1dYLeMpAmnj8NSJuWv5ysthT29HMToRSNtSHuaSKdAum5XgaJucLtddaV",
  "key18": "4QThaRzKXCNbsAxpPN9N7BgR6fbWDTLZAYzsuDp3oGi3seP7fYAVE8hAjLwJt22Agk39heWcchm2DZv89DvSmKt3",
  "key19": "4mSVbQ859FF9Zzvy64Ux6EKLpxj3SCCwo8rTy2KMCwviVTnSopNbfzz7QmrKvqZgg7efRkUqyACLHT9sftPziGAo",
  "key20": "36fvsjfydmt4Ne67NQGEdiNoD634NNE7URNwTRvSgREA5crTGd1dDsTaDUmdLM4GuborEfiAsiXfhGihK8UMroJo",
  "key21": "4ve29hkabEZp2wNsp6EyFpWtZJcaeSAPLhV88pXnf5fnoErgwG7udaPUJm8WhfHfYDtLnvY1YmKsX6iswxsGQFyX",
  "key22": "54S6T3BiVB5fHmBFn8LfrPeLXj1YbrLEo5i7fABiQ253qEcZN7BRQgqr1zFcfGshYRWZwUuTpxUMAch2Hetxx1eY",
  "key23": "2DqTsgBanjzomsGcYo3HnXHq6z1GKWDo4bsJFgeoPKwbFY8Y4XeV3KqkaDFWvL1jKzArUJW16wMrgeAMkA2YbLtk",
  "key24": "3TQ1F2cHzjfNHD3iWoet3AuY3BU3VnkYRMks31dosGBwUiehXxGF9yWj1qfZjWxFfcSUdW5bi5xJcH3X8cAzuW9D",
  "key25": "3JyZQNhQwNaNLVy6emCCedqeWWnKSgJj2AyQZjWZ4LJm9hPQ9W9pwf17tFwLvr3AK5gaQWMPTMmeo6VcuS6dS4nq",
  "key26": "2H6ZWgCjU7woZSotbejotiuNXwVPJQ8vW25Yy9XJEFse3BFSKKSDfxFFhpjESWge7mjg7cwSZ6rq3gZg9XWKa6hC",
  "key27": "3xDAdHR7ZoSduH35CUKEMzZUmU7XB4WJzE6st8EoyjvYBJsDTFqfmHFfsc6nYFZnwNWRWeRhusiTi9tNUdxKVH9P",
  "key28": "3uuGQhHZB1yHDSTZZxtYyAb6DtmMSPrNVBifZc81QvM6CNZ3QSgNRSFuNSbdPxKBfEAQCsdr5rzZ4pxFBNXmPcGz",
  "key29": "2z4UpDody2ZRGhYQRf9d3zgJZiWaVAfTGYtfCjvecPWQjcHZNKUAVpKZtHFVWdfCMZDJVuJ2esZf7dZUjerqV2Ap",
  "key30": "5QQewd4ZJEEuwWyLuiMHkHKNvifwqM7rAnQHy9Py672orpmzXcJFhwd4ZLnx3tBk2fToEQwQxmkdf65L9osWQ1DZ"
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
