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
    "4CVGkHp7KexgfWDsL8NBohHigiNRHhvJN2v8tqKrj3wTrjTi9mrvPsxoV6FQNhEpMcmH3KB5Lgz66qoQBF2M19Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuwZzGMc4jafNwKK3w45XBnUfsRVQjCFjjAswJL2fZazZFdW6yYtCrPwRYXWWYXxJecYTYzKbRChkQmXApDegqc",
  "key1": "2ny2YrSHEht4pP5jtA63uQFY1uPdR3C2Ac6RpEKVCbkzzJVSPFPjK4bR8e3sSwaW9JdEKic8udh7Rw9Kyypjchmp",
  "key2": "2BrULUPjhmQMSGFyJfvEcv4AQ172fhbdkaTWomh357RGsJYUr9nDPyfNZygwsV8C5ZeBoYSKEyH5DfgAhS5ARtFi",
  "key3": "2VnsLetc2cKaxvsS8kSnwaCwBqmXxz2E7akgxB9ZT34jow6peKxiGehkZAzSpxYgbLCCz6v2DuznETE3yDAgjkj",
  "key4": "525FhcmBT4w4djiAbfPAYRjQYu3qQGG4ajNHb1dSUevaCPCv5SMwGACEJ4Lo3LRAWT7QGEUsgf82QAEhvhc49cJb",
  "key5": "2gqMfGB7exo4cAjKyg7LKVEHB8ThuTuhWRY5pkgnR1tFsDEWfMaJf2PDe84jD7sPAAp43PMcv4qZEBp91Q5KUndH",
  "key6": "9AuQptA6qAZCUySnZf1TYYxHYAtKpQEoitDMdAGuatD829HLsvS5Yi8TdSRZ9dERMRmqo5otC9FaKTDnH4KaZn2",
  "key7": "4NVfPxrQGXZs7kxkCi15egQd7BNXQcgcsPLF9MJCvce8dqCJjzz6rAY7BwFJeEHUyo7P6fRRfcE83W7LASggSdnQ",
  "key8": "3D8iHcqM1pJXqzXGbqFfEABN2Nm1o89oioVWYnfZW8LDnQcWcJVnR57RZsiQQ4actZcUUQLQ4FECnM8sPD4gFhnM",
  "key9": "3PCw7FUhyBBqUY9WXfQKrcBkSodwYbPY8KUGkpdGGCdxKfVaoKCYp9syqk22doRUCqA44Sr2FoRaQNCtKPBS8EAQ",
  "key10": "2XAH2kGPHW4WLHknL3s72B6d1GPHcjSKNh8dJG3obYJcEasSNnEaLnpEs3wVc1oXh2qrFndrRktmdn3ZZKW7h3tT",
  "key11": "yQyx2bBwV5EXeTf26F5AKzdazB9465Sh2QwvjxSQJ4ffLxuNQ4y1U7aKvK3vzmts5xmLehhVaRxNMYqipUsbhY3",
  "key12": "2QSfB5uQjyX3KGnf7ajetnSLBvRSJsGKm4DodcjQfQNSaLLhNejv4UztFa3o8xSjgnMR1DDJoMBUaHWR3zit9aay",
  "key13": "3ktSirVjj4UVU51cEVEanUUxMHuX9JCzouJBwYqFUTV6dW4qEDX3LKgCoFsiTehjQspm4Q3MivhmgFQzrRRCsMfE",
  "key14": "haoy8i62UAuoSobkg2vNghpotdgB1T6v63VkjnT1qCweQAK9TRgy6jac2y4bUHnAJejDkK8Ldu3o9njXrNEkrT2",
  "key15": "qRkY9cVHVybNqFe76gDMRqiqNtMWYgPfygQmoYmb796Scri7gsyvsTJGLmT5PBtr247PGenvU4yfp1KMzCuoE2e",
  "key16": "4m4uvJFLBLjzPZryoZEE5yZTmpkArco8MfL4frR9heieq2uQ2HkWLx2mLAgnckTnW2CLX17tVJRYDqjiHuDhCk8C",
  "key17": "nHCt9CvXHAJCzbHgBCKLSsE3qyfT8GY72Mq8SECbSzFSXY6PXRBhmrWCvEQQxisiQ4v8UExWJobhkw2TARBwmfU",
  "key18": "62DkYDaZZqcvQBmqcvm2h7y6npcDgksm4aj2NMP8sNQSYs7ksGhNyTBVZSiUQtKYdPmZGxHChHSkC5Losbob6XcZ",
  "key19": "iyYJk62t711n8w2BaJfa5kBocXQhucz2qnYpaxyfHQYcx8LEpiFMjmsYQ9FLXSFRwmYJDZMZ46uSBAF27tA4h4y",
  "key20": "7fDBeMhTb4Z1Cfw9cxSt7A4Gd5GBBGjxY3NkfZJ6gffJY8wbpJ7BVdMrc9iM2LxJpXM7QnzHmXQoQ8cqxVmKRex",
  "key21": "jq65S4tLVSnqfGYtdUPwd46AFdYWkD7TqbC7Nwm4d836Kiy4GrwKcMyZvZHKcnTRNaPJ9WQjmqijkBHS6biAucT",
  "key22": "5rjutvpehSqmMuWnhzxdNo4u7y4FuQdEKnWMUTvaAP13tM9NPsqEYj6wsGg9F7QKGKoQ2wVhGR225ri9moKUu1iG",
  "key23": "4oxVpsfswMfdctemMMALVKaBUVyoWiFUbH9c3zQLQE1usYb23K85UiqoCAzqtcrxXaR49SoECdJz631uZJo6avZJ",
  "key24": "3r5aPWmgWygQ1ANt8tdmnmJHZKSEYWMx7PzAqa2PbGSYmg2pMd5Kn1xVDqppLo7MQLEpwHVgtUXf8VFLCu2KEZyH"
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
