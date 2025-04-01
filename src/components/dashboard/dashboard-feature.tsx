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
    "djqvwoxv6DpsdrTbriswB9MnV68maog4Eg1nEyK5JP3ob6WfMDfrghKt9ZTBH6NSdjTR7uanyrD13RfiZKLhFmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GpU3es3TLwFZm5CM5nCGNjuKwHrhQe2tqucuQ9bMYoYDGeXLXzzPzrBv1KFs4wAGXGNkFQb7HiyMHU5LmgHbFMg",
  "key1": "62KF8nBBuJjoeW7eJVAQPe9uex2jEmPx9wUkK6xr6Q2v5NPwwfW5BmrKhxMix5kos4jmeWjdBf1EmNcdT6Tcyndz",
  "key2": "4dv6SSTJrWqHxgMjwen9tQm19S7uX8uGHYxJ4Mx7uW483aGJT8LUAakQGG8qsWoSxRmwqfCs8YMUEE8xbnJXi2F3",
  "key3": "6y3fJNNDfrm5HhPh7LzZjpQo791FL2k5ABxwvGb3vt9KZMWfmn4GbepmwAjAGsYGEf4b5MtfHrfK6nq8X1k5rNH",
  "key4": "5V2TpA6b7v8wHTeZxbjDJzua25EMMjJtMzyJZixUuKBWxoBuJcydtiN4e3dMHBSjdPpiJCDVXaC8QaMfL6qg3YEh",
  "key5": "5J7GLPFkusnsXLu5ex8DNhksJBLVBpvzsByijyNAZ5SuP1pYQx4TGfhTErQPj58qSEvR62z1XiMe193wKLEfGfFx",
  "key6": "41v8ph4smgE8nZGuUJ2oHViNbfLpMwv5XqmSrnurN9e7Q3Yc9fRWvAXQNzVxJdw8kMP1e1W4h4qXzkuFSJXeZeNU",
  "key7": "4DQRExtYSov14at82ZdpP1SWLNsJMDELaykr7vTc2bJS8VuHW9XWbn4ohX5odRQyZbACRKnNqEKnLGjGtTh37F9M",
  "key8": "3dJZpMfXW27MR5kvqT2PaWaKgADFHVTi3PQ51tmpWw553gPNM4DHidaC9P8wRPPzkPmorcNgLZxLv77xQuF6muxX",
  "key9": "54z2dEmseymopgJ8t1q1cvVFyLXgABUMvB9yL2kb88d6CCMX8VxQ1q9eksyXXGR9ymRozcd1B4MU8xHz8ThQ3Ewi",
  "key10": "5113Y1yYd8PBBrG9ZyqC4iaoAKEzKLduwNu689EdYCMYfy1MgET4rBs72qi9V9bjgdP9J696sL4swYSxKkhtL35e",
  "key11": "3mJwhsh1numq1uVisyX9xXauH47EBfTGBFSHwoUrRGESHiErBwR5EBkmDjipFZEf4vuu6XQjJD8fCHsQZEcFoL3Z",
  "key12": "4VArkBr2GmnGBCyZDaUK6CoPfUbdb8iAeqKoWDV85b9Lq4qfyk5QtvGMKgVktFQoPaHfE368y4RF6G4NhqWGjcZh",
  "key13": "2WeeQ16dZ1mNJKW8XpVHjyQrBWD3J4aNLKPU93RtGGGkbEuuoGvL4GJedQuAMTFdr8w7yLom3uj7aPWNwZNyqY3h",
  "key14": "rQHiUL2Afzw1Ef6qah5ouBuMcMEzv67stpZx41Po18voszhWABizGg9QhdpdxaeKQcfz5ASHc9ud8PUtgi4EBVQ",
  "key15": "65Z4u8d5DW5bzJoKRDz4eFnjSQ2hYr2ipmfL8FYN7JCxyfN5sUTsQy47L6W7vHUWW6w8rxsYE8SrSevyDUCmjhW",
  "key16": "5zGynbNaHtieJskVQzvBaHy9XxEgcHYdwNzLCCp3LsphaZv2dgQCrPXxNfdmE3X6CYcHKhB9hhrRX9M8fcWgadZ9",
  "key17": "2m1U1FFnjcRpkF1FTTKsQWrstdWhttkzspjR1M4RQAqX2BYKD1DtdK5DPXZeXe5Ae48uZFna41MF2x1G5etKYZj3",
  "key18": "27xkqaCXmQpeNyAhHzcwCpWQhnQhAJoyWyTtxWB1EQuoY8oXUm1qDK7CYzyzALy3qTPDkiBW7BecNM8j892egqRk",
  "key19": "oyBLDLsnbXjyv544BDsU3eG3L5qte3KuD6cDcgW1TZ8dFMy3sdWqYkfVSLBkb9m82aU3iecsogGvNRqvf8h1879",
  "key20": "SYUyQtHMczxCcUE5d13LDCKHUjfoCzV4dK4tUhFJq8c7WvEJWuF9EBcJxnx1UbF3BcfdcET88Uxf2beHXR6jBQn",
  "key21": "2SYqMJUdpRYpTbzCobybiFQGqSz6FjZLPKdGMTk29DMrc9RAZJfpmwUpGz3RGUWhY3xu1e2vcfehwmhnWWasUXEb",
  "key22": "XiRgNLdLZi3d7BkirJdUvSgtVNF14RR5k9RxZnctV4QvoePjU1aSeFEY4uHUMGCEkkBev21y7CEQPvEofp7d58u",
  "key23": "5bCrpN13NT9SW5QtwuuN2RPy9XTbEX2ykXzfh96Tyx4mwLT2AArcy6yWtwLXkzobK4NGuU2UK4R8vs8srpgVnPfd",
  "key24": "3FvDeWcvxoFcPsMhQxJdYAHQdGy5M7DL9kwis55mHJ54nsKuDqQoxQuozJ64qoybx3TyZ7QmV4ddbZ1bbMo4zsmk",
  "key25": "2z729JeZJAa7rGmcWy8wvePv3i69uZJamFzjYmJTpV3wzeAC1if8zc7yXdkCQPdVCFfYEuYNRFCA8yscckxEavQr",
  "key26": "J3cq4JbCumXoGAEsfnZrejKUe4Dh4C8WHRnoKiJEMDGjYjxihsQ1uYeFXzyBEbgrS1n3Y1qdALgqMSkwwvKKGoK"
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
