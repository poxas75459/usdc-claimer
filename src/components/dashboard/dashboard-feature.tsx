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
    "4FoWWMVeFJj2KhgbJV9Ld9vpnc5sydRzjGKj1MxSsj6g5rcU4GfMinKGBZ9iPb5mBRZdXepiUBkCxENu3GvzVMrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYSuthNqFPpsjyYUJ1M7CsAENzkGqKYxViwTRBnwLKiAoNSBBDzpHYxt3pUH4kUQhXTwhqqSLvqmd7Sy4D5362S",
  "key1": "2oseQJKRAWnTNb1U3mvdiT95nVtWkgujwZrLpymMDS66AqK95enge7tucqERJUkaMJciVTgkuwo8Hk455RgcXR4T",
  "key2": "5beaNBP1o4dFn9MCgn1Xp2WPMuhwVrQhXPwkh1LLfxudHrU3FUNTLfBzMH7Y9XUkvjgJ6ZeNw5ZqJvidhpNtZXqG",
  "key3": "3hi5vxs8x61TDmbD4V2Y7BZDmiV2ToR6geVsP78aaM5Zsf9XEXUJsHmJSCNePR7Z8FVkrzmgDVUxPGQwStBTmpFS",
  "key4": "2KHCV9XsajEC1zJoJxBfCqUzCZNQJHyTid48GbGQJrPEcFn9Yhf3TWjq63hLkVf7zkEKhFwMxZ9CH5BpRQhfy55f",
  "key5": "3am5TAKZwoXdSJqYYQdXLctvnAHtmLP5WargGAwGHgF8ad4mMbYc5JfhMdieBUzTm9QTj2F9gk4fhMZuj7eBS6pE",
  "key6": "4B4hXfWDqNY6Y8AeY7Ke3je3xxuVvwyUGq3BVyFkfnqVTG7RB6uGuxn69WSXJhLoY2CEnBu2hx2f7jkvkT7cVkNi",
  "key7": "5nYzcDFVbKGuEZyGFUWxChfYJy3LwzRvkxa6ho7z6qqUXuJYvZV8xzuoQbwKYw7MGM6UgD1pfdki5uCUfCBbf27U",
  "key8": "5VCeZuBJp2ZhxJ5CGctcT2jj8W18NKE8WPyYRNM2N2rFyj2u4yfNAwuFzBhEtQUri82J62KbGyboqxnCrQZDuVsg",
  "key9": "r6G78gpbhLWjDPxwSKh4cihBAvpbGwvs17mQGNRzMrPi4DziVyRCVEgFD7yzqcrVKHKSwb7tFDrFDbvJr6xPQxw",
  "key10": "6CYv7LB8yjXzDzD9Mf3h75hu7mBG8gAVBoEiaVqZbNruAxZ1D3utZoqLmQmybQ2T8B242Vb6iC9HT1KZHfD1WPF",
  "key11": "2vuCyM6keW4pjQwPtFEnMdmtgexEVvLc8iQrCmC6kocrUL9xYfx6FFtQyt31kLmso2Cpja5KK7Yku2p3rVoAoxPU",
  "key12": "4vjfxsii2rmFWDYZHCQLBeZ8PR7BGsujtNLaoXdVnV7Bntamdc8DHbDZ5SbNE2E7boc8a7tGeZUXDcuGZvPKd4XD",
  "key13": "42LYojLEaS8meThbK7ud99AesJqmgnnCFPBqstjNsbqVRiBnxfjL9Uk3RR5w6WfEmooGzGBYNc7qhGJZtfeKcZNw",
  "key14": "2zVxiaUQizUr1WQNY2PFADUR8aLUp5wCRamqbxWDKzhuNUCsciHqFFv32uL1MjAbTKbjH7qh4yUyRAiHtJ7JnYms",
  "key15": "KNquaY19XbcKpiS99xCvo8m1khE3fMZM1jqxSdqZXRf3RxsDh77zhCCEHAdx4LkYHNyRSFUZtJgFTSMXBhnmAUo",
  "key16": "2RPKxJn4KxpxGGoh2xiTtX5vKq9f2hTpaLehxaLQzyLBQ671X6c2PA1AHmuwKGtx6SxPvY7CyiuPWTGp1gUXVKN7",
  "key17": "62oDGMhbUhqHf72yDARU89mMLDpCHwuY4wvMigXr4UQq5Axd5deujcxJ6SYJqJrbwE7ye5YKjuqEa61HY9Zm7ZAa",
  "key18": "2UrCBW1dXVVG59NRwQZixksF64AWFLvMJCNMfU8gqsz4X8scTUojqhkjhAkruNHVr2okCChRmApawVp72BzaKr8R",
  "key19": "28XdiHoVGbmEMo473u69SJcyWHL5Gn5NpTpcpuTRH5CijteG6X8HhCMcd8itLUkpc2nJJnPA5JwAedfiRrj73XZK",
  "key20": "46wNnekStvb5vghCx16NbsC4hYqXCb3NgwC4uuQLnmK2ot7fVfLfc4GzarYXqVVgjb9jAAqYeHytobYYPSKtu7w3",
  "key21": "3cNvtkWKvEZA79RuWJnWwpY3ygkBDYBQBVaoEGAjAnhLmuQeDtQRVFGPVCLxi3tZzu7rASz1Fc985qHehJaxSLC2",
  "key22": "3wBcpKNRUPVRc4LJHf4RR2NpULPnSLyKFqubnsw6AocuVHnnxgUnpTCPabgqwNv2yFjAvbzKM2MXbZSYBoRW3fpc",
  "key23": "RFNBehUA6Ae69VbDrtwR1hz45m6zFhsaVddxtnxiTRMK2kF547nohKUem23nYY8TfkAvvYgGE5T3RS8aTUHbVD9",
  "key24": "4wosSupfkPW6J1ZgKqFkArEicUKeDzfhcVFbFSS7VvwDiVAHNt5G7ecPPXhnx1eyHUwRyLBCA62EGyRdtgagfY1p",
  "key25": "2fnEExtCYYAVEEjWTLNpNfuZ6ipKYdueBAYWkaC43QBipqANknfXbHbWC3R3gPRxs6BZ6WDzMeLVaJYxDAEbsSoo"
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
