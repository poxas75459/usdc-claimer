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
    "3LoXh45WVSgewCX4NeqPRZZsjkCVrYySTqPTLTdocyeLDMAmYZZPbxtvdC4LWvdAzBeCuL3Z7Gtv2DyVxZbpcN6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szqLvcpjvQqRKByNKsatWsZvRfLC6biUbtNLHUq3ebpwBCKzztqTRg35PyjMnJ4euW3RGGAKT2t1wfBT7FShBjZ",
  "key1": "5EJdckGdmvgQ7MkjQS48WvsGdrMngnvfbU6QKmoFDAMyzDp8gEjsBonZoVkSaWqFyteyR821JvGjg9qt1abNjhVP",
  "key2": "329TfJJ5fgvuBp6f6QqfvvooVWYFzhByMn1HDP73CwcHxXjCzbvjtU4231dVKd6rfmMrR3NQehQizRRPuJLd3qQA",
  "key3": "47c3uqdLcPLPfMpFSnw4QMSjM3xe9tPrJMW4LGomDE3ziuDNWBqvWiyZHvsmBH8haF31MkwCDDhiN5yCzzWPNFax",
  "key4": "2bsdt7DQoHfv2NVMeAXmHVnSdLrXn5FFjcmqCj2Xd6HvZN5Su7aUwkNeehDZPQGrJuqvArPtUp6ighWUdNjH83WL",
  "key5": "5JpheSSMgbqZjy1hKUcNkLVU52U6sPctHNHp5wwjAy2NoUSuKHGkQnEcJSEubZ1qjRFJPhmarBYCuNMcwqHZaxat",
  "key6": "2KUZMDJ8pWihV3mPhrcWB5XjTA5CEThoC7VMZT7fKBiC8LXHNkEycrJyc7nRCV5FhMnA5pzfPg6oBi1Pxpj7rjUk",
  "key7": "2Nn7o4DvhvjcdYdY4JwiQ9ArEkLJ11UY6dr5Pvw4CqEDDY2KjW54e8G6GkkuyZCZt6j2rDmmSZZmJGR2TMujmP72",
  "key8": "2PEPpRLBZ3Q3ttqxcT5fMfAPDnPeDSEq7k7voSwrYyVefWqJnMDEXXyywpMy3Vepj7NTcM8rpUuCz4FWWyzyi9Y1",
  "key9": "3xqShD4SwqvovefooJXijYk3hAGuyY2DVmgbXZKEo4ho9d8BupsBvhr46tKHBnvKDW9XqupYVnoCSi26mB5syK2S",
  "key10": "4c9VzbrAc9J5z5Y7dvZB5Mn7MZYktqahmy5JCirUg4USSjxga3GP237xXgsf47g5oxDQ5m1QzFFUAAHdf5tKCy2u",
  "key11": "66DXv6AnttUcK7kfqavPzYELEtS3uPU2PnvmruVkeSfXcV9gC6REhBUUoJzraT3EQCi6JjwhtvjjahDQEThXejbW",
  "key12": "Y54cYH5RtMZ3RUQsMqfzRCWkpK1XEeXeE4jk2TBb4fEqv8VL8uH8UkyxaYUAMrjRcfrqk3gqb1xh8TCZ1GHDC81",
  "key13": "23rKQbcZwd5jkYji3ukQJx761x9eCkmzGri8vP2o6q6L5XDkE3rRxY6Ek9TQphuijqa1NvyTGPGVxi1o6dxpWkav",
  "key14": "4dP5ytPpSiSbDxqBQkJghsTKhV2tv6DHY2Vuvf4e2w1M7qi1CekFWxnw6jMsTDxaaJ2mSZJWySbVZ6Z4s38YK8ap",
  "key15": "2ft2QJie9dxeKW85hnRKK2xz2Qp599eWvpD8SrEyY3iToNiCVjSxwPSHk5tagLDqY7sWeovFLae8Gi86Phw3k8KY",
  "key16": "35XP8JW6Cuyv8Vnv7uELkVLKWoCNcyoqF1fQiAShWYwkZbzFyYJYPEgAY9UNpAbiRhSgKWRJiVPczUuqQcQ17TAa",
  "key17": "49PVSwQg1HrxVcJAfdGs196c52qGVhmkjUzZ7RqkpMj6i7W1prUXh5PxKwB2TkZtka9PCbzigvgkQBZP4wuJ2to4",
  "key18": "4LpAGKSg3FTRUHLsY7CL9x5T5QkgqeZbcFCv5wtR5EXs7Bn6v2XbM2Hz6ZfJ5aG1f7nfzw6Fn47NCdS7fDeDgbSN",
  "key19": "4jZL15CrHjS6XMRZ5uWcZA65KL5UJDySSHvr8jtm4kj3LXApzJWj2tXTn5U7NMxF2GH4h68Dbbj1DkVSKfkui4Bo",
  "key20": "56CBHwovdu7rQnh8e62vcqVrBYxxPtP3KwZHxsNKY8aytRfxtuX4gijxjPYgDh3qv6SKJeHC9x3VbFYze2QSfPwE",
  "key21": "Uc5ubqWQpKpJVncpH1k61mYjoRwtSptTryenXpYf3zgJ8aAfVqiMaGNAp3yV6sp5AMGChdCCEpGMKS6okQ1CngS",
  "key22": "4gn2s2KARaMNWBmMV1Zg1rxpFAa81EGBAWb7MAs5MWbJR5NXVvPfqfy1oHZToD3mDQYtA2e3AhBd6jxoFTDq1eVJ",
  "key23": "zKrbPRFnat1BUzTTnmG2B8iuK69CSGoCP1nT1Q5cRGta4PuVdRa9ywtqg3HBaNgUdqv4DnRnwJEAPnGNM412WBz",
  "key24": "3u1Vzww6aKDF33Dy5uFtwbHCU5GspkjvjDaDFe6WVb4hA4Hf9666j6vAhza1PrGiTQMeJyqrqgCLVH9xH4ivuBQE",
  "key25": "48knb8ZV8MJ3N1CM9C3yexU3S6xpMoNNwa5QyLrT1pZeQjtMXbo9UN7qCGukCco6odGrr1zu73hVwtJbAY8fhwYC",
  "key26": "2JXr6fsZHfDjJZQQyq5ytxUrECK3sry5uQCnMamJ2NpQayA1YyiBzn27joRofYN7odshLvMPMPQA3d7qgwCZDMpG"
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
