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
    "Q51LL3e1Muz45tZWs5eVVAjCJwGZQ9aBR74bx2UBQmUzTJVpg67ijY3JAfUJg12p6fmaSwR1DtujiHA3ZzQaD8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvhAjm2NgUgZbvH96pUfHpQh57Jn3kehPpwPDuCDCsGsjfU3Vyuqu24cSCRLJCSioY9pHyBh4cnkwzZkvdW1Mwi",
  "key1": "3drmaaRcA7qEkb54GXLRLtHKdBtdzVW9x4yMy8vsD6AzWT5riwmtixTTvnC5pST1gq6cztrDFjqcnYgs2cd6J8h3",
  "key2": "2TCFKrh3MzrrpUhahnc6zqgLXpCJWbp4QNXJpv3EKkybkwJdgVQD2Qj1b6JqUYMEn2iMM4Wp1fpPx84aTRhXgVTJ",
  "key3": "3xYVzMfjypctfBJs44vVkbzSQXkPLVT8QbjvnQtCDf4qCvtgXzYx48U8R9bfghaKKLrHbQGzEZ6h12K64DBJ8Cgk",
  "key4": "2m4CYPQW2RbPXRepYqV7vLNgJXNhp8Zf3eNZFwtToUnPqrff8bUniqBjDHYHSEHaUZZUMaWd8yVDYEvaxmmUxVSU",
  "key5": "tUQtyT6nP35vNn6vHgVMt67QgWZsxoxKyTNqGW571SeivVHAbnJdVsc9ZdbtbHFEJhieNsZ6NzMvPLmYyCJ2akk",
  "key6": "5HR8VFkKcrmGYnT4yoTnnww7w9FV7bHh2fSTna84Ghe1zFW3wEZLmTuncPbkj8p9KHo3k9RdiNhmGD3eUb5oHmSc",
  "key7": "Q3ogAiptxdkdpB1MNBhgsXv4MzVaXZEoJdSiWcN613h6CQY7Lf9sYRtoLqsrgvPNfN2QaatNbnGNs17SvkrqmBL",
  "key8": "23zPPD5roep3r4ToJU11mQnbco9tTZgWirRLn8YZAaKYrp1CyDAenpcYjd2YzaAiSRpAsxNX7ixDL7ViKAwN34Gf",
  "key9": "3wwA4ADt9P48gVhat6FD2BMN5MAFAFspBMGhRSoMhGTPhnRiy9XLAhXRsezBi3L1kSLdsiPreAQMm4vNVg1DCKAF",
  "key10": "5rCuNyiXov2jjk7vCVCe2DJAiCXpqtYn1p7RxAqGpYoBLdVVMoNV5jHtNVhbyCJWMRiNUJp2qYedo9w9C7Cazo3h",
  "key11": "2CbsEWjuX7BeWYKLmEzga1Nt2ckcnKdqX39nT486yv9mnejdnZxRZ9kMN6cH67Ux8YjWbmnkEzaQZPVnNCk9qZi7",
  "key12": "4K7fK1M37G9yiUk5wcXeGFefrnjBx5ELxZv2zN8DDFxXux39J6kodSfPSnvugPnmmMg2xj3kMQNsnzQXxiBKmbHb",
  "key13": "qpZQXAdcFngguz9P6b7LzH1L8F1DuFYdhnJx781cPNtBPJyps4i6DjbjEUeeYaTTNR5F6yVdQPXP1Zo6PRVWAqX",
  "key14": "2KZgDDRb73WE6LtF5eF5pHA5ckYmZ3YMFPfqc5L2gEdfYaaX3f3BuDTARG1x54p1mJWD7jMTh8cXvcLkjYA2y7dV",
  "key15": "FXC9Vp7Mh8MaY8s197eYQPdTAQZwTH5rnXocPb8txuMZsKyUzphN3pxoUUK9GWN4X6DGS49Dt7tbJeBSnBqNQYs",
  "key16": "ZaqAJngffCsTLeohskoi4ccdUfRqWb95QUjoPw69Q62jnn58xVZWX4rUuh3Toi2d54TNaW4Yrqxxq8EEHoehvW5",
  "key17": "5SUFyij4CgZAFPuQxo4Bu3aq5S4ctmiKLKjbcTS8fBJwzqjSkgo76mvjuLqq3MvdNuaY3a61oAcLVnXPeReerk9y",
  "key18": "5dGHc4268BZFgUQq6PbShCqFCdMRY4oajr3JSfeT1C2p5Wtgvg3gn6oKw7V2dmQW1T5p4yDv9cwBecvi7wSW7SRN",
  "key19": "4bQuKxCpG6DjqW2FuWDMYDWV79KsSNdDjWnRPVt1opRtxnPEuE8FCYbgABKgvx2WnNsmjNBQ3Fw9PTGBNZM9PWzB",
  "key20": "kE49EJNRFrx5mAQspnjp54APR7ZXVkr7BKbA7Eh2syTYvrVWN73ihJWz4bw78crm7rnJu5nTBywFVSzioQjtai5",
  "key21": "3gZ1yecj7JtdMNxVRScq4DjsLJb1ifXVAzHeX3efoiAqYXfhjkyKbwHXDCZisRgEfbeETQ6rZ86wEobwWyY9SQfE",
  "key22": "3tmDpHP5SZHVHPXmyCDe3fmUJFox7cy4Qk6MDY6tzQDkytbE5ibdWh1uPJXpGGzzRaLjA5gxDJSmdwPFKfMfFh2C",
  "key23": "2AY55a1zKnzDUkg1m5kfCR5NBL8tHucDZ2TgrWPwqaxstJTTiXvybi4q9HkTfianTuz35Dbf4HPaSg6NsCo9oAed",
  "key24": "3Nx6rXVq2nV9mio83suoEVUZLZFBJjCbxPBzrCHz3jf2RKQVipayAXhgh9iq1RP7DseWRo6VrHwnCebYgGdftHpv"
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
