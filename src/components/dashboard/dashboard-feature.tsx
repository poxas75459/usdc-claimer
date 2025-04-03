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
    "2qMxPWvNcpa3REY8xirug8KwYwkMUbdYZiGRSJwmHsoo3X9mHwpMvvFpwj8HXJ63NxdHevHtY9nYTJtZFKsTWNma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xwWGqCMeHDVA7RK2uRHuYLTnpaZMoZGRK9GmvznTxcMxkYmEGVs64wFHoM2KefL9uBrqhAN7H6QYwtNiFpFnrkG",
  "key1": "3cqjeZHpqoQgmDBrrHZUAf5BRxyfmDJkeJGvkuPYzCX9HgcdDubzbnArF3Xx7ehBkZk2ywLpAsGiuD64nzU6NU9D",
  "key2": "4PQrRh713gXtuQSdGoFKPgN7G3LiQhZPw6kdwd3ai9b5nzF78kVgHhWCPYfW3H1zLD55rykbrifQSquPL9DaVm5i",
  "key3": "2XQT8Q37c4f6hNddKu4fz7ArxS6698CHseXmGqAUbekp2fva5EGgaBbHwTQwwxY1PuPu4Pt8UZsv58Bug8fWCBAd",
  "key4": "4NBHXMWvDzEyKWq7pmnAJRxN2BBPPocKuMC5drXt3sXvg8Q28xcEQLBH2A8TK4FMgRuHLZjKkjwJiqFzLSWVL65u",
  "key5": "2kccecH2KaqvjFb78N4T8jWbQXvT1JtLGaNqPqYa2N6YNtwSN56bF6xLhyBMgJDQmfCfqPFpnkSpU8Dvs16g7DUy",
  "key6": "67BSBWGeGUCELNjJzBcEWjM7JaNSUzQ8JSaDov4cwxSZXfMPxicef9KE9f6EeX5EfEPL8bYL8h2HVBxhkQSo6RJj",
  "key7": "5XNZt7cUtyDr9WRK8MJxX88ATBjPGwJ5KV4j4P2a97F44vXMf1TkZ5GvgN59tq63w8FhaMmUHscFddi6fzwMT4k8",
  "key8": "2dnRfZ6evzQigwL8CMaJPx5ZB8V12XX1fVygWvpiJM6RRkuF15hzjZpGesJbLqURk7UqABECqcxskamitJW6d7z1",
  "key9": "5CZMhpMqmGDqVK1jmqKVBm5KAmPCp1vpPFSwN1LgCBo6chzeM63CdwQxNhePg64QT6mnWT9Bjkb7LYYz3zhvvTVe",
  "key10": "4t75EkRYCotr8wGGqKuDGN55rPpWkSKLaN5YtekD1hJ3bGK5r4nXFd83Wgu2BAW8eN4qbhpiLHo2dHFJoBpTC2zY",
  "key11": "5p61SHKSDfaNTiPL7G4Xz9sqKwNFT9d7MjBtecRVMKVCcRMJdQvz3f72Lvmzc7ToTfhG1D927bFrNkbZJG14enox",
  "key12": "67Z8Pnqm8MgU1w2RmzwMab59EDE94EDSE5X9DinBrY792r9YKTZBCYspVqAQNvuAhv5dejLddzwFbeffSd7D2adm",
  "key13": "4gvUiFP8v5a9Ln22creem46PDPijCZoezmj4bVSBdCeU2yupzQmbFKE7ansZa2GTWawYqvwgAvvgHG4XWEE9xutZ",
  "key14": "7M9MG3w21fomH75D1gGbCtAgfE4CBCwg8dNgQaPy43Sxc5MxMTGuLuViyYW7wqVQVoedcx7hE7JKbic6k1xbnT6",
  "key15": "2H7iANQkXKnV2MteBNnHsFAscNg6dAinqYTBgpSi1wCH82KpCYAu4Nxxu7tAJeyVHDgjN4uJLuKi4tfTacd9RFME",
  "key16": "3QKBSvbjX7oTrSCTsZmymRb3DgAL8ynMt3gUi4zGyvsdJXcrZUBhyTDjP43RdFJ7GLLv8JVZjHH5zGCNx2s1NMP7",
  "key17": "5LUQVSrzqk9sstJ4Gy6L1yD3pJdM1Vq7KPxCpaNAJB9QKwUjTkVy443Ra2qKYcSdQ7Ks8SwJRxNW9BzZewhNYtnB",
  "key18": "35hQAXC2o8RQEMqNwUDjst1RRu6Zj5VsC4Aw84uEooxnpm2TwgoKDS3XfaKjfAfoGEDDUMT5VSummAf5Dn6T8v9y",
  "key19": "DwR8EUe5T5WQuVLbQYRs9aF1ZLyAPt4BbtPssh2TBtCGBaBAisJTkYjwHjr2U9ywFnzLQbUUNNJYBcJaAiMnqDu",
  "key20": "4juQ9dNKeakTWTettwL2bS6g82T1iavSK5ATPsD3FwJAG83CKyP7T3YKLkCty3qGZ8y2RforHHGAX8ZjEoGqYRCu",
  "key21": "2wAt6YPQrJCTVpF1M7bpgpMmqnfoqBRwuNqDusGhwrmG2YxwduqyJCRu58zrRBJmWJevbJjkAsqTgBRKX8XW4KPk",
  "key22": "33xf87etMKYfFJDjqot794RSgKRBp75N1VGgg6ULU7n5oPo4ucWbhtpPT4L2UHAgvSbPgvkFGJQLmVwjJVRSTKqY",
  "key23": "5dVVjZPLSdSpD9gDbSXeWYaTjhPttgDA8rMzGi3DxnEQ6fAwQ8fupJEUgVaD22SY4cbict6zRbkWYwmxMhcBJpBE",
  "key24": "2UyRWZVXm2dX8LyjriEavgkBbBbZcKXiQuMHG9sunQg5argP2znwcmf76abAWyFK2Ex2EFxKx5pEghkDK5rXC9qQ",
  "key25": "4krrUDVCh7qYfpJHwzho27GeGoCyWHyBdPuAfPe9tHoK6dbjFbpPx5vGgr6JHCbLcUnX7yULyzx8AHyFRo2ASeFJ",
  "key26": "232hcavLsucGud93AMFFbw1tSS5WywmRHqQwUiYUx9xjLTJuGxAkJfWs1gHyjaC7ASEYG4teojcxAwRCoBCLNiid",
  "key27": "2jaVwSs4zCu7jL4GpD1sPKziAehd9DmjFL4Z3TYKFTYkzPBgZaazoBhvWq4y2vhQgGkVAzekPLq7Y1PPy1rrQkst",
  "key28": "4yKnoVeJvXjZpfZuYoCcQ4WEx1DcjiPV54G5dM6vV9MQsB3ZmgbsLvoMhbRkggzb5NhD4sB2yGDbEpKPfqbjmy1J",
  "key29": "zLRcrEwV3UkVw8rEkcJMhqqQJFB2WGZsVuR4tvfB8BaUEpV8xa4oFcggjCbknxfWKNeDSDAfkmE14BUEx8QaKh3",
  "key30": "5fCz2MQQwFLoiSu3npJPXCSqrJEzMrneyURHMjgj5U3FvdZNT9X1dS1fzkMJZ9cYCE6NK7vZv7Qjj6gvfAxvon7W",
  "key31": "2zCtmK4EcpDKq8fTWFbV1MeP4y3XFyym3G1m2fUwggQ3kycgiJX2Q8SNPeqcLRSHXNncytzQHRaX3nyjs6dnFuqV"
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
