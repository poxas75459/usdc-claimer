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
    "4UwkNs1FHMx1YwoyPkD2xLYF4sQMuz1DgAXKRwHXCYctrMWLTMGZCQxHtSHDhUKtFSPJ68qJnKjDZmqeWFTYqPZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5RMaALaz8bpGKWHbuZpmU6TXxH1rRfFN17wNTAy2jN4iP89EJsH884ekoUpoEy5Wh1jVyqP1YntSWN1n8oqzqb",
  "key1": "3WTWoVGnfQzWQouPioirNmSz4KHrkFs34UhGKRVtZ9fdfVhgrVv8i4TMM1Um9yXpvrSWnSfgJA8AeNXhd8yW8ogt",
  "key2": "3qQGhk2u74ifNfrm5iN9dztwsAMhuT9j2gnYBWqSCri7Nb9gePPNsjiUpsJt4Dt5a4ovkcbrzvSfRTwLkazhSTKt",
  "key3": "2Dp6LE8xuXU5oySCXeLQa3BBXtgz7oXdMnxvXEjk3XoCvpiw2m8EsTnBMuFTBLnBymuSDkKsB9W8xUXS5v3vHz6p",
  "key4": "489ooE8vLMCcAewB2ZqqAPSruYJAKgq9fgLmeTfF5mFWok7GzLPceas1zeYgJgjoH2JQbALE1gGhYW8xN9h6byj7",
  "key5": "51shX3oT8euWjUmwxXyVxsxYQoQV6zTSERtnmHGvwBhRC4jjjVddWT7oufaFon6Lj6kiZEmHA8owye7P8hJApMmw",
  "key6": "59J6Mi3e4RHYS54njvQ6iPKHraWjyUMtuYyjyAtXSjw8KoAvzJksfXwnvAAWZFcY3uwubafwqxYguppq4Dwyo3SG",
  "key7": "5biYv5fY6B719sNfSHk9g2hmuDrJNS2wRyZvwoivNWMN5ob5pTWisRuSJ9pMZJUfedb2kMxCvk1MRTvqj9e3v5W4",
  "key8": "3oLJMXT5pshbbi12qqSJaFagdbS5JHrGyVVpt1LL1cnYxBWVcBDduvmcU7rK5pDfhB3KpQGZwr5x2454K2ZXLe4q",
  "key9": "5znZ9rj8numLczryMwWs1rteS6dS8CpvjoXmdwjUYmwLinHCjUmYmWGEPnjoBx1r3RWHN2wrSVHi9E4PX2DNQbBv",
  "key10": "65xtx2RjGqaN7jjkj2bTe7tyrsAzVLT1J6TKe59WFUZYyHWopEWDM19rNGUucCHvD4yiZvMDLzGSUbBuZ4Hr3i7c",
  "key11": "461qAQiCAKBnUKPStYCMBuihrG5Fvd2CJH5yMzMRynopggB9rw56pMmtxUiHAv9gXDbdnA46kRTprxtK2dVN66NP",
  "key12": "52n4Hj7U5ZdRqYyHDYPxALz8wKWWYYwrhpb26Jk2JfFjanahNTanLDZnc28q7drjCiVW3ZAdHPzKFYZFeSHu2m1j",
  "key13": "5k1Ps3XcDpQqf1hERK8QDRTFJPm9LNYaKJBqrEQMYfBcVntWcEt2E74sWkLanzsy6awLrnRaStPR5hYC1tvYkh37",
  "key14": "2H4HjYLwT4samJwzrJgAphcgeGYzoah2mFJmn6TQwDoP4nr11fqAaehV4J36n9TAvn4AniHsBM8Kmjs9mHkQWVbC",
  "key15": "4yCcZHV6rJy9Baucqm85W4qaUnGuDL8yMGRcZUKCA19VXu9KpabzUQfwNUaJLu8CjfPkL1F27qdk79ejNDfwj1zH",
  "key16": "2ieDeQx3c6Hmk2A1F12Mx9HDwBXK8jJHXjxPxSpo74B6tpkHawUEwoZZc6YrKyqwDL4e2A5fi593rW1wQX9sMBHh",
  "key17": "5FM4udpdsyiUnjRQxWDdzPz3713phLyGjD3XUQ1Zhe6en8nANWVXgxb7nwNX61Zs3jvdvpKPE2XUUJYq2LXeGd7W",
  "key18": "2iMr6KSUDqyaLvu3ZYtR2ynKgi7KvRgUPWZGjwK1oR3u5xChZHnC8A7VarQqEMAxA5wsQq8ybYL2sHqtmNbMrFQH",
  "key19": "3jAKKDuPZnxrvJMFhkwz8C7XB6M8VwoShyE7q6YtpnwNqRR7HR3z1yJNUbSVYRZZmV8455WZtLUb3fErksqqDRdB",
  "key20": "KbPoh8Tqr7CUq9nRsn7U7bU91dGEGNCeVGkrAJ1YA6LaG9U2Qf3A8GD5ZVxgNoRqfBnELgaJz4yqPTkd5Crbg3g",
  "key21": "5jj9dVLsKLGQJyuNzfu4EgFRWWetGSNfNqjMULqQSTHnTAZdcKwpdbwsVg6SyKKCKjjJ5zU3VhGHF1ZA2hKSsx1D",
  "key22": "24s6QrLrZGJMbuky15XUnN4PF3bZjdzrkR9RQp8BBjgGNjYwaWsdpcKdmjq94M3YVtQYB8aBhFWtna6MJr4fR6v6",
  "key23": "4om4F3cKkubMxNpdweCj1JiKNhRQYybmrHBU82qWSkCVzTQik71rXfDoMUkKXFnPSnPG4wvyrex71LBw1LJPx6Jr",
  "key24": "2epbijAyUAQTpXTvguo9Wqy3oGjFsFnEDfkqGsaz4wDyAJChxw3tmwnm1q3ia47py1NML3tWbhRF3PPTU9HRE4wW",
  "key25": "4baCoUei2NBD3AV4jRUHaFdRBK7B1AVuoDA4ruTwqRbUM3MKnu6CmQE9GbYNsqG3bTPM5Xxa8ZE41MmwFjJP4uMD"
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
