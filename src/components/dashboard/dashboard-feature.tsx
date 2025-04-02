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
    "2dsHFwKqP2PSib5c3FEdoEbji4xN9HKXYG9M3nBr2oxhbjDvpTonni4vVghFYkfjW5chnHHLvUc5rKr5AqfySa1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFxQj11pNKTASKtUQyiRf2S9zHr7fHEXpnXDvgQXugxSWYovsTPfFuKcAdEMT6x35TCZX4WY6LY7UFq6bJQdFtX",
  "key1": "2qDhck91LgAQTvfqo3H7UxfWW2FFjLduCrCpSbGWQGFuH8rjBFErH4tHJycrgVgMVG1BYWmrxRnwR3PUN1ETDnsM",
  "key2": "5zN55gUfG8vKGUd9kH6bvYNRUgV495pvtA3KQDKnSZHWUhL5kMChEMkFLRfYiEhpoQMRFzgwYd4vtKBrto23jtXv",
  "key3": "21wbfJFb9g7hgK7fJyUx92dQoydeR8LZyse8gEAdz4PJDGumw29hsQV8wzM6rtgmHHyskrZCeKyxGB4zras3ph4G",
  "key4": "XuBQnr5kkQ9pQXfE7ZWMLWYD6aAB42W95N4dZT1W9PFFbcv3RFx9QL2KyKCgmF74kLnAMyWhJiusmC386aowWHd",
  "key5": "zjoMmYsuDYeHSWxE2HVPdPcEt2P81mtn8a3eb1X1FyPerT1vp9bqwLBPKbKRiPcGQh5ZFm5xJBx3icCMDcyLBG7",
  "key6": "3yqdwJTFPkQejpMYRSzc62VTiXk1Rhzb5bVgMi1GDkGB25piEbcvHZCbVzpUYFhUAugqxmw3uxYxBSAu3KuBsdbp",
  "key7": "4CqhjMGisFbN9nBQGDcw4jwwv2XKraK6Md1mhesRL1at8b191LmznUtHp9kwYxYMsTYp4N9Sp3RvHXh2vaxUuPwo",
  "key8": "5WaWTGUpFo8i5fYU7mi3PrT8Ugv64Sw1d2gkELHpjesEj9nLwe2ayCQC7CivCKKrFVki1HvpKBX4gFCfTrBofz2W",
  "key9": "4bebHBpX3WSZpfcwoCgDZYe6z94ZNhJnmFd14ud7q1w1z3rUSCMsWWUpWovjdW4fkq3cWMgmemUAMHogzRoy2vX1",
  "key10": "4g3vXDK1BMPkxuaBp3egwquQYN8nvPRSiTbNc6j5CNfU64tSLh7ikZwBdu45kYM5n3CLCdkCrhAqkmHMEhAJqwkb",
  "key11": "2HhXEQ55RjiXjBhmeUREoDD5WzyZD78C3NsPrwrE7WL7xTeGvJcXk6vx5YHzhfjyTqujakddMcDrQ6GMTqSqSTRZ",
  "key12": "31FnW1F6Pcru9Vo2FfEZPzzgfT8RiFHQTct4YDD9TLE9Lh7FPVCqBLQGcszUY4pHbM8hpTvPn2frDCXeyFfkAqsd",
  "key13": "3RXU7beX5fYQwm6UTD7wrUb7AvNwGXDbm7foX4TAm9UTn4PZack2urKbvJMHFd2jKfJVxu1HskfNNFZ6BWGh46Ch",
  "key14": "4NMwCS7vxTNyv3d8wnfroPkriSrirQQXd6nJGzMQB47ivLjjfW2ZA3jKqaihiNtwJwvyMy7J2fg9UY2uiiA4nAzK",
  "key15": "2bguq1sdDLAbLZU7Yug55jMDaEEangVXCD2hgrKnr6gSVFYzTumUaQG69UQDstrfofFcherEwPn1pYG4FxWmrvgN",
  "key16": "2SuxhWxKudMGmTQjAuexkaDZdcTpcFQvoiCo5AndjBooacbizVAo8ZXv2ZdCtobYn9XSi53KGn7f1KKDk7kWwqpt",
  "key17": "2iPQ9AqiWcAe7yKt9uxNFspLhFEWbg5hSGpT2SpcYqGJfHQrF6oGrveKxHnVtXeND9828w6ny47VQREQMUNiKmvZ",
  "key18": "435HhE38pFWqWvywZ2x6uXbW1sJuq2eVV5Cu6GYZbXZQwArTvbMR9VoQ2YPcbzeRkH2WSpC8UgQZtCNfUU2SpYCs",
  "key19": "375WC7S4ueCNQZRhqz6ZejasTQJEfLn8m6tccgd7sNJHpKeq4obCTLY8EKstmL4bV4FPtSEY6YZDPiofmtbgw41w",
  "key20": "4THUaZJ4zAr6fwdX8NtWF4NdiA51WV8Lv8rDn4KGf43PWTpNCA7xREcA8662KsCRgqbyZdtByVMqiNvZu2gyVzRC",
  "key21": "64FLkLXTuNHf1UnQ2k9md35TEG2o5uF1Vj8a1wvgWBcYcPBDJMRxxxZLbJZgZ2n2BdXcBaSEPk7jAvcFmnpEj1Mk",
  "key22": "xkTUoSELrP9S5X3EviBQRYqFgx5wztCWudCHaPqRJGYRUVWAogeN6ifxwUZqYqGzRvgKsNmRMxCneYFFkRpevYH",
  "key23": "TYBVtJRB1GugtPBdB4btQuwjUbGJZMHdHRyL1X2M9tER4HNVi8zQGGNWkuATvTjskDbDLTxtEHP4jPjXCjikN5P",
  "key24": "2NMzbcruC4jZJY84uwcr6QDTQ7WhYrJdqCgnpG4miCy4ww64VwRWnPkYqVQn4fr16ym9T7h8R8ybCwSVGy3EwW4q"
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
