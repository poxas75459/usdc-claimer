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
    "5W1WY2LVzAMGSgDEo4CKfomioGr1f3Q7kDgLUP5YafivcVP5xs1xqCD1gZJVquxenejJpaBxaewTyvS68vdzYPBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnjnwMz2o9Y5nm5j33SSBytg9iCmZXVWuvfyYEUqbQzpBGX6sSEa8Aq9hY2uQWBracnmEeGdLTvA1GrZkE1SikL",
  "key1": "3sRxJZPEEvxAjwkTHuk3Pga5L8QdnpjmF1rfRZDkawveY6JzYyqQktpHScDa4Errz9j9KoHZuYAN4U6iPUSGt3XL",
  "key2": "2fEebycFDYCdPnMrgSguH3MpqtAfdYx6YZPD3Ne75XiZ6MFYHgqfntvxATZx68Dr5gTvf8v3nWhKV3NtmDND2gZ5",
  "key3": "rYX9LUX5WrwqtCTNqczVc386zcnkuCKHZPrVnetTnPNzBmPLfYB3Xs2RzpF46zCnUVqDBqsKXW5PHCqcATjbmhR",
  "key4": "43Ab6qPY7dXZE9uACwRR2CKyqTFunejeaHTHrcWUbU7QV2w5o5JyEtDzQNhfbTXKmrjw9LjeEEteMb5wj1gHgLH6",
  "key5": "5RjfsMHWcVcSd55PG8FgQQXEtkF6S9kzqM7PMv1uQxR1sJwN7VG5gWi8GqjrxCWx4rn9P6h352ucDvgjWd396u17",
  "key6": "4TEevmZtNQhFrhKBjyyZn9JX4my3CVHpLJFHcKhEtadLQ5MtUWruF2R1Q6Wc7GFMdV4RDGaS9pUL46mSANCSM59o",
  "key7": "3AktpG8sSDMave3GLk6w4Jw6WsMywiFo9sCr5USXLMuEXfzJx5vrt1SbaqaxkuKAwNkeXJAyqKSDmarMWpEVrmrf",
  "key8": "5xxQpstymQu343Jhq9mN53B67zJB9Jj5H9ZxmDDJt3fG5uLThDKwDGfYEb3ZLfLZKe8aNmfh4kxAwUduma2vSZzq",
  "key9": "4JgmxWsn71kMqZPgot6PvsTmnDXqaZa2r1U8uCqUqHJVsvbmZjPSPYR9xaEdHSyraDU6dmqiG5iykErEVXcFrWf8",
  "key10": "WxFMuAimpLkGaJQVcigiSo1E7GeNcd4XYV1oaHrYzniHSL44f7zYF9ZyJ3rr4DTC3TTqcv8N4XyaJjYJdmtCFtF",
  "key11": "4XugTcrZHkZQZrufoWoRgBwDZavDcF1r42gT7bEWjXKAHV72UEDmnT9d4LrX4t9f43i5Jqy6JKM7RfHSLBLdB6ye",
  "key12": "5PGPoAwZBhuu4N9hKQYcxxWajP9RouNB9HtrhhbfBty1ijjW7m5egdcfeh2C9TWsPDvhz9CGeVXvPZHncSw7DN5V",
  "key13": "2przFdEp18wasZYC7Pum4kg8st99nUDWwmZWFxHK5p27WEwP5hiNW15DA3J7wEaVa1jgVjAEccF5tZsfrAFt6Qex",
  "key14": "aM79CBMRHQ8pDgeKrc7mdPgcucrwaV88VhdaoXiPpVM87fcobRR8mcQhxugAGHguZsTQKMTjVdZuCApw1MHRYrK",
  "key15": "U3VCdLCS9UW5PgJxN5STofj1NnccRm9fjsdMJiKHwX29CnVhp5wWDMcMdmXPztj4imhWv4YsEACkXpG7goZpSDc",
  "key16": "5z8ywxqn36KW2b3bFFjacfLeRWnd9dPrxDw3npzHDc1uVyX9EL9FEqkPinpkjP3DmfNo8wUo5WjQqGtSiYAKKg5",
  "key17": "HwzMpMoNnvkYEvtKvVDercgjuREnpUKZVBPZ2Dn9PLWZyUPMW23VidQcoNDdXdh7iMatV6ggd8sLrDqoQiyxynK",
  "key18": "4BKdbjzv9oeHkDXVk1XtGCynSqheisELqWVfgnBE8jrCsz6epgZjdjnuup5gtn7jivbWwebw3RB3KWiK5xniXW55",
  "key19": "65rkVhdUcvJntbvmje6d1PyHZVYsbQoX7wePvXwSsMH77uKtQRQNtgeXXeoeF6eUNRum6vndstCnq9bKWEoZ6Tno",
  "key20": "2rz6Vb3ymFCwUJijsS24oRFLLrGwHMF8kVMm6fF1jsAZiBJQZq5dtyQpwgriqwp4Gy9NZuW2dKwFBuf47qjwMZCg",
  "key21": "2awpT8qq82NrFHNhokGYLoBKBqHSTXeU7SQ1xJs4J2uT2izSnDdtJqNxdRJpw3nbVfLhSdZfm2goE1NqQQYsBVxk",
  "key22": "KkVDwT5LvND9NfpSay7w4fCRGWk26H4yS7PvdUMAcjQWAXZ14Scuv5ZM2ScpK5cKxq6oJnphGNR5umN6M4YnVza",
  "key23": "48RNXM3PMaN2ABS5tNFBauDYzx3qzWHc1oyvUHzksXfLVeUMbCVaTn22Xp6soCwtewtSJnx2coNDuufeEjyv9fFt",
  "key24": "3edwTL493h6bbhZdeXDjKaHsqDJEqFfk4Q5BdEBC7heF3f872x1FMsYJcwH74HJPC7qcUPUNFuF22oY8YFnJjZyk",
  "key25": "gs4wCX3WPm1c1qQD9TAvNnTj7E58n44ZFbVfwv8FRqJjV5xtbPcJ5CUyNXhTv3TcgYtQYdJjSqbQvwBGbtPNrsW",
  "key26": "2R6v2EJGs2rkZ4pWmXrNAvVgCqBQwYEKYNLMesqdkDGGLp6hkbFTWrUsW7BZWUJfhpCCJpxvqmCozmLiQ3R4aNB5",
  "key27": "3qwLKgmEwZqbPzp4rg74PcLKEjx4dSsH9EgC7SmNrL7UM4abeis42AH13ADXJsWq889rZjsrSq6zPMAgsqG3ir66",
  "key28": "2hDMoAV2mqmTUgyaRjbS4TfufqRFP5Do2qXqEPSMVaBMQ1UFnh3f4PnCF4MYJeKF664nx2xCrDMmWQ4QTAzqCXCX",
  "key29": "U89KjEZ3QMNwEB5ULi2VeXmhs4pw6pmRZEUXQ8nfHD6apsw3zmSA5BVWgc37BWZ6XyhGXgvee7fiF8cw7xJDDPm",
  "key30": "3LSKsrnDCbCuBNsd8EUm2MrWGdhYyg2yU8zmUxKgxPA5Xi2vLkMA5icDrKSUQaVuLJzEUgLtupPijmPpqUVTM3Lt"
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
