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
    "4nquDiFryVGMhQM9hkUYRYdemhd61tndNH5dPusTfMchCWCu9wLxK3wpg9QjuPYiS7BQ6GtqyTFwUxsoLvQaq3bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRPWBtTr7vHEsU8qiEmRzfa6X5E8obA1XhQcqzRXD4prVTiwN9nLkegXkKKKXSzebx134PMVzuBkE2DyNXJ9fe3",
  "key1": "47DiYvdsrqU2EqMYUgbXDz5SpWhGYjmnCtMpYkEZT64SuvrHrTgvQT3GsPfcyWwvayrfHTahQAgjoVie6iCqYUwC",
  "key2": "2cdLQWNnfGnpt9hAF1eye2M8Zt8FfUggryFp5kYJE8HiWCHPd7zGiJBvVHmQgg1k1MvfZH9FVTDKWpmc3jAPUJDm",
  "key3": "3o9scyrwpG2XqdjxKiM8BUj1geZPuQA9U8TRGhXXemAYfAfDGzgZzQeq56wjE2rijQc2FmsBBQZj8Cqy4qwKD3oE",
  "key4": "4ZrE1f9zACHeBAicyAPyZ3LdGanCyPUAKsT5pq5KvEPHkCSGczUqYuQQfQGwQqRyYfyHC81kiSwkcroeR1yWEQum",
  "key5": "4voZujSH4GDszQDv6824itoj3napda54rYa3UF8Vq99tNGdmVnXpLkE5915fpBt1cmrPDRhXFKT3asULbsP2o5dY",
  "key6": "2Wi4rWqwpysTdWqDxU5WoxPdgpmtQ7ck6Ywxs4rkej4Q1K26DvpYxMHNobHPryLcamNLfnuFgX3JczW6YaV6ei4v",
  "key7": "4jBpS897mN16SE4rwKMQqPkbE1SMhPZYCy5rJtLRvPKB3ssScQWyCtybX84zVmQja2hjDNKJWfh7RNfUkp232mvd",
  "key8": "2ghJ8PLAMV1UTmHZapd7bABzqmMEPmd4MSFMSt2LUqh6Ujn9NVbCEvqJLAKYn6RCQWGNn8HxcVTExfWDCL7UFPtc",
  "key9": "25ANEXDzrKjxc7zNrmUDoxtxbEYnGgcAm5tUMx2RZiF4dJqgVx6XEYxEGRP8D44qScWCdF35svDMXtC7jCdqFUfi",
  "key10": "3WZnoz3jHzb1GbnKXo9ZR1X383nCcpd5jadd3oc2veu7BD1gw7nWT1MNkPfTTZqXNUs9fzWmttZkB8TRW5UaUjKQ",
  "key11": "3i6Htv9KTR6ni6f3BeCHrAqfRMpvyd4yuY7MASp3wDgzZeumf1YoAnd41sRDiHepEgnzyEFa8PwFhHxqzFSVGWW3",
  "key12": "2ByaEY3nfbVBxxLNfss3HZ5WZRFsXuGMZ8PBAd888fn3dB9tUSKo1KL2D8qyDT8v2DU9SzTARNq1Q38zozRwrWkG",
  "key13": "3FkhAfN9CKmgGKvzQ77aCnuhEqmsSW7WcHJfZKvhRQU2EojRMg69oHSVKHjZ4VDvWjN7DTuLXQUgjEHQooyaDgQT",
  "key14": "5geHn9WUnPuoxsrZiqRTiYpv7k8smHXnCKukzbruzCxGxSLnUAbZVPSmT6fAC8iCGdrFDVF64d3rrJWXiES2vjvc",
  "key15": "fJACC7cCcAns15mCkwR6CQ6suFoLUZCs4VkAZDHV5586iQa979abeWKB6QKYmW6E8SF7RrcWosoVEMK5W1w6xQN",
  "key16": "5H5mqV3SfDLVxyL6aTPF6239iyfRnyg7ioXzp1u8gCJhbQKwFhMu9frK3horLtpJ9mqjkS552PQy8nibVUrLRdKU",
  "key17": "5MAHhYHWcSG2mrxenSe9oxy7Zk9nZrXqeFr23TzH2U1KCNidLxTPP3QmziiPfEasJDbHv5hAkrcyX4XzvvJpGHyV",
  "key18": "cFib2Hx3eNoEDq9FEd7kRbYmcSqYYkgz8oxRDYetxb7mLcpUuiZyJj4WcfJUMnLU7XqXStuUioo6ghLEicj4NNm",
  "key19": "ELbnfKNPcFbwDMi5xeXcquLtaL6oa7P5B1M1vqfCKMgN9iKhye7VURKLw8RZxPRVqkzXWiUf6jABKqfSHJm4CBq",
  "key20": "2yTK2QHaiK4u3ncvsJDZKtP9EbXL6Dv2poDUR46YbWadaYRw6YEMV49uDn95LB81cjSD7G1ZW5XwCM7MmB2Mmj6h",
  "key21": "66rA4zw5E429W1YGRYdkUoSNNXjuUWVmiZquu8NHfV9zvSmh7Rbu8B2VmFcnNKwMjdn3VnqoRSwU5u6Av8f8DAj9",
  "key22": "32akTLaHqiNUrvZSSHHLC3Zkc26NA2gbmQ8DKSWKgahGLjVdpVS2mBGu1RBay9oPhrhsKHUCReKjHw28CFyDbLS9",
  "key23": "3dv45nVHtpiqwdimjb9KCbusqE6wv2eQTRkkMwuASkuiLnfFQu5hZPekJiwCRRNgw4sNT6kqfuD59VayUptGMYBC",
  "key24": "2LsjhUqEhVqQya9YusyjpFgr4FumsYVeWgJckkYPBr8KVm4MFjf24bRFeVPLz3qGpjgZvBd2jnpnKxKiWUYyTnfs",
  "key25": "dUWuRwHwK8p118DN7cCLJ1qwp4BAU4GLb93jUmH8M77YRNrjpNmB5VqcJBmESGQFHFLV4AjAUeS3nDK5yXf6AEH"
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
