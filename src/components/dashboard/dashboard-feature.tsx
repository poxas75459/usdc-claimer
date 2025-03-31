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
    "2txdwTo4EM6m66mGMWXL6NnCP4F6Ew54QudUzTgGNJQ7A9EveHMip86TC38C3tgnEZM7CH9eeX9qzCuPjh3GwdCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqATF1krsc9m34AMT3XyGzBPYDKFojoBgdBXyiojiL4SPupkFYUq5fdAj68qTak1LhsAcQkNaGpdyD8P3SPu1dz",
  "key1": "5oB4sFrByDsdTqk97Ctr8sucQC6547YBdogU3gYRa8LJb1upxbWSWZ2mKhVNJB5wJa92K6N18nc4AY4m7grpsFev",
  "key2": "4zvryBVKGMmVjrcvzkrBaT1jVznRyMa3fhGoWQ8bTaf2khMu2gEjiN7GWA9mxyFxKuWBqfz72ZpyUsSB5FXqmjhB",
  "key3": "4oa5JRBLuggxNL3LhLaXyJHrSownzYCVaHbYTUSKznqMgFsZXDGqgRJRDBHpVBnSwnAYZn76asSXiNLmT5ydwvYY",
  "key4": "5arcR1DBG6Zcm6SPqssKxL5rgGW36RGMwUyuiiwSjkF9bUd7VYt1qM4fUk1Z8msdNWVeSZ9xce1ZVmZpfeZYBNJn",
  "key5": "5vL2jFyih9npSS8e2MhsBbCS214bdJsy9XcqLtGkUhsMy2GDKKL6Wwgzrhy9zNwDCmzuNAiqDktiwgf6WmWqsM8h",
  "key6": "rB3x9Z1W3t6Qj673RJT7RMkt3bHvDS7fmuhVtqWwyZFJgLr8wxFjguvP8Psz4hRumdY5bPuD4yY7BxC8EfDkXTE",
  "key7": "e5N6jduxEaD9sabfV8mPyNR4cRqKYxGjkVBRwtnGhJ9ErLhVNPgBcdGDtmNWwLbpDmB3FcsDUadc2penncsZrRC",
  "key8": "5sPgxUbRqmUYSad4V5aSAUk8q2ynfXWeLYcQcVUb9A8J7bqwVhdzRvifZgLG4G8S1DBGJUaHTTdTWETkeyPXcFsa",
  "key9": "jaxRNzJ78BhxfRrbeEH8VoiUaa2dKZFoGC8zjnjThnz7BRz621LyNqgo89XgGnXgnRGHftTiboM2sTssWpTnXYo",
  "key10": "3AqoGXzeUWLmUSyV4UkrTMMtgRMJDcEzoVJGgYuAakmXaNZQmT7zzxJPmL68qHwqPb5h9MrAYyDQYU9PJbav5TAi",
  "key11": "61M62Y1HYiH9PoaV4ZhgsFJp9JZjafhKRyDMKofapD3tF6VPRzPQuC9u4hyzCqT8RKscBF5QhdWriux7LZ3eCYpA",
  "key12": "2CXpUXMH8Ro2hhWc2W9FTTDrCEf36N3dNcuWWMK1RkhuUKRKqF8wmbca65V3Fnsc5wGDaExQtTA9pa9YTTsx3rgH",
  "key13": "hTW9yjp1zVeV17ArQbR1uXwExkyWAxWKTXeMABRiG3MdemeH5bffhBWM7AsAZvsLi9Gqo6o7eaEpbxDm5s28LDr",
  "key14": "2pux12TKewKwcDMAinNfTbn3qoVE5yPW5fu9PqHoRwz1u4iNJhyjuhHcqxwCVSeDgiabV98X8Q6cZVZyQ7YjVbFC",
  "key15": "4HmWAAc1SobraBum7U8K3PnL7Z5GdRiCwEGBVia1JktCz8z7vfycDVerwScqdWhkXUPVBevnmD25xezgmKbcHFFH",
  "key16": "1w8WTAE4QTzjGUrBkofK9H4brKcdVaGzydJi2DvPYErz8476jZfdLYbxbkXyiKqre5Ni77CDQmpnDTML75zW94S",
  "key17": "2FNQyqac92Ug9a3Y9yHSshQzqqJ7TWVbxpyrWUVJQ5iFiYxWPoirW4VNQJbjuNLafZVZx6YaHhvfVgBm2qrTjaYd",
  "key18": "2zfB6HRz86XCf3KKejGRnqxHXrohxPCjd5zj94JShu4Ct87asrGtbdaaZmwY6UiSEG5KDzByZCYSQ5mxd74D72qn",
  "key19": "2RTqUSr3gNCSxEJVDkXcQNfYqxmr7t12qxoBrrU9muwWMXh4j9CS2g9maLoBq65PjQ5saXRRxwxSza5P1gDR3Aqc",
  "key20": "4gnwjgpGDBqLykG9G1HZtgz91N8XBJYTygUvpma7mFP8FZYUr9J9BHuYQUCT5KY5B49XEPMzr2E623P97mVMqgT2",
  "key21": "3VMC1xEDnUt7ExcPjxCqDve6N3LuffnAKXpNKYKejwApiNkRNHwjf9NcLVEihENtLHG1gXMESHAyde35HQtZtyjL",
  "key22": "5U8E9Hd7UvSq46XQuPzetBqGNhZULKFqyPHL8VLxnsDT2prQYQVZSZ5J1FCU5t8CyFRSxFMWRmj4vMokangex3TV",
  "key23": "4kodFfuNaYVeRdKyATxzBGBg1y3EfUZhRA7EduGxmKGgbhs2VgZrFU4cf1TZm4bj82TyHZ4aSLjNSEHuwCP2nAVc",
  "key24": "4GgCRvWYKgqTLcKhePVCeBxuoVasXy3KvwoTZQzHZRbi9qdgurZjGPpAKJVVxvZzQHbUHvu16pNTrHrMDjdyiPPy",
  "key25": "4tcwZ8UwtiJQFt2aQyyNZQwNhWLNyUDWtudKS5aULniW8NQVomxX1ucBnp8SmA4RnCaA8573ZCH5yH54XzquafAH",
  "key26": "3Pk8LHcn7hYvpKWT756xfqV6fLDcBRMhpD5xvfHXFYE41QHFX5bD56FWCSryY9NQepTutK7A9RWEjunYdqoQs5B1",
  "key27": "2ZcY8kGeucoLNPXjgmoC6tEv97SNG2mcaP9PE8MXTvrTNoi51p2veLYX2B2kYuTYSejerh7K1EcrEn7tQgJ1G2up"
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
