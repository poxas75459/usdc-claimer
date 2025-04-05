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
    "5iRai6GVsjKz1gMoE6hVjjp6smhuDKycEWvnRXBFUH2wykNHsutRAP9FQDkuYSq4YwTozK1zZe5PCDr9vYC5Uvj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42S5UbLBpJb1aXbyBoaJMEMmWrq7ixpQtLF5B5MPC5y6TStDp4TtadrjLa3Jp9br1Z3f8Byv6JqXuu8jTJXUknb2",
  "key1": "43AuxykAizYEFoo36Qd9Qp4aGFsKrEzeLqkeVgo9jSv12wCqxonrdvHCmtetmUpmgKXXjPeFG8vpwmhDXqmKVwGD",
  "key2": "4sp4nxK4Epyp3PrcCEsVUqraWGWjuJgPPRTzBErLpw1n9wzgZAfURsJsTkLyYXUJ3DCynQGHh9zN5pZG7zs33wmn",
  "key3": "S3bmwMn759QQ5KExUjFgLZJSnPobw8DWkwiVk5GtEm19NZKtCaSzTE2N6vUyL64dgWewct1kJztXJzkMFsHLW9q",
  "key4": "21nTaJA3furEum1XWw8ukzXAWNLaXnJqKDjHksxkjVUzQbDgBaifVqam11unfHwYrnoGU6aUAghy5JrfAtwSykcY",
  "key5": "5yw322UtmW3VyE1asyccy56wbNZVUtdnxASG5s2ddwBK2aTUaygTdLQWCxGauS9yT2FmxxYbQX6NxnrQ6xAaeN59",
  "key6": "cro8idgs6Qx1VbPhuRP6Dor8uJs2EA1MHYstGibN5KHHcbPu8UAELxWwViHbzZZuFsGf4VCDNpwczGcW23un7pf",
  "key7": "XPe7TcW8e6eR5zT26q3irNc7rq1UpJkHmmnz7MFwCQSmDHJYMe1sGBCBzuaHBD4wjN8Zx98exwDsdas7a6XWTZd",
  "key8": "ow8JEfND4NQi6EzM6hr4vL1DxyrBLZHVgVoWB1kG5qDE1WH8AHX8akX9nmQeohpQrB9EVC8NgPZqJZyxpfZUGD2",
  "key9": "5AsrrE9otoZqak6MEmwnayR9qA2XVbixUP7tfjuQVPkj6rwSYytYtWKyEESBFmkpBNJxxbdHMpu7uBtsLRPLsMS",
  "key10": "45c6oV55YykiULv6cEMdkSoeg7fBUwWxFaEV1Ma83t3kZ74Dkw3z554scJvtg5MqgknNxrgva8Gk1Fz2m9RfZHSk",
  "key11": "vnmg4u9s35aMtgV54L2cSM9DnYMMgWFdiVdKRzsVaveYmL8C1qncX8GzHpCqMcU3mkgBDMVHpfUkUmfWg93UPyP",
  "key12": "t1eUuwrxmBgUt4mwuEbpdLuhmgWuxJB69HYCUuVjHnqZa8rLHRdCWm2HkwfvKek2zKjS5DoWg9XrReL8ACJG64f",
  "key13": "3xeNdaTNRbAKbsxUvnLBE2BNVnJ8c3fbHVQyw44EQZCirbuXivRuSr7sFV7zjST56X3iTfeB9orEMHueZGih6SyV",
  "key14": "kYKaQiyd5s13pd2gB5Uqkbg9bg5vqM67jkiUVrd9odpW5qxe6fzzUswhDJTEQWvTeMvnaAgkt4qdirFf3wff57w",
  "key15": "5AxxrVAWBVtG8vnWd7Vrf34DyqK5WSDNPmfKXWpjX2uvJKk7uuWCADZW487LWf3tQL6aomHm6CEfxF6ArirMTnv1",
  "key16": "579sNiNrUKdmEhHZmDGJLEUUiqFWhh6kScBEpHvsftA6X5JqWia8YfYYjREceYaYAyZhZk64nHbKqzkSsKcA391m",
  "key17": "2njRuH76qYLjHjDrx43yTWvMUVKQkCaf4GEtcVBzTZXZQWYyidk52vRkzYcM89neTBAJRK5WHr9JaDUtpNcyybPk",
  "key18": "5hrgUKjqYS712jkTg5VNJSVHt4zggZz2REpRQkSaMKK3RYLCno6jRg7Qu4ZhEeyLgoBktCkmBWCbggUMDRpsWigd",
  "key19": "BV2sYmHtEgUTboityMzMFbaeshGyvR8N6E4cRgqYMQ2TNFzEbaNeRMDMDK8EKsZG4SPibjPLRY2wMSXo4mC28y4",
  "key20": "2YRkS8KfAT9Z2QfDGuVkmMadSZVNK93jfMVQ7ia47RwX7pHF8EHtmnkQfek3BxPg8SDD5wXejwv1vWo3pwS5mc4w",
  "key21": "QBFoW5nsYnCScZHFzUEcR5qr9fst6vCAdwHZU4yyD2JQVyYgFYFjQH5F7icPYueRyckNRSBxv5KVaNoq3qfu8wJ",
  "key22": "42Q1zu7xcaaUT5HrXhV95GBHn7CW3RBJvRhp4q1cK6wScLBLWhtBNCEom1DsZohNuNQHPdiFezi9S3xN1SnFq5od",
  "key23": "2Unq3Pks4f5Zg6ccyVVxHw7t6BtjjEY5EymTaSrEcrYjcKZ3JKca3TNdt8kac7A3336GQ7xvUf1Y6xgykPDumC9p",
  "key24": "47djbnaUXPTLJdZ1ZfALU4yLP2mFvUex7U6mS1uDJyYEqaYDRAUHtJm6FdkfSFXWmumHVd9fLqUJcw1jGpQaSJsv",
  "key25": "5dFQAsmCY1v3d7KP4zjUhC6AUGqtYxpb3hF7XqJ91Fi7kEwTWMwG5oSgW73ysmaRwCQvpGuarm22y6TWWegLXb9z",
  "key26": "G5MF6x8UWVoeVfRsVHoUfYDTBvYfPPQPRMhvzMCZESVu5bdHEatdiPc4UyMfisqvvEKkFw2yD9o75F9JRA3uG7Z",
  "key27": "5S3VxudPBrjonfiJCLfbc9rq17Pa8B3qw6tKcEgucco929MVWAknX9bJrVsrgbhpKeTwksZkTNA3EyRxfCHXzB2k",
  "key28": "64nS1knDNbkHwLBMN3fwu5gZE2QjTLteQ2S6vZ2PFd3pG6J1TqJtGRMxx9AC49LAsf49C3t5MHA3kPnAnjYifTzr"
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
