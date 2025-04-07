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
    "53cNHpNyinZWCRisRRrHAS3MYUAizaFnaYjLVsexT3qqsCfW9K9HZMZTgifUfy2af3spwJFYPM3QDUsBzfQcHrnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGm2swoLPoF48cqBZA8GefwtvCXkTotMYHpH8UmRJeq4FYZRLsHHgygtUJbLd9awRK9wrtwFuRKV3gRUBvUtoP8",
  "key1": "3zRWLZmMHicN2QT4Lcz628HaWZ7CTugpbafLEWk12XX9f59TdV8q7tihWbhDjfcmsmoQDZkzLnqaEFJfHRyddNK6",
  "key2": "5i8EbfdtQku8GBSBtsvoBuFZLosaKAimu5yvZ3V7s4poTajEnb24s2FcyHncQvkWNNqMTokz9mTBUF3iVaUEw7di",
  "key3": "XT7jFRPJ5LkwV2RWM88VfYxmUSv3P1L4aeLgLczsE4tFnwGr7m1sgvN43zfkM3YDRD59NRV6AXn3xMUqyBFheew",
  "key4": "4FPzTkGVyaGWyCnyLSSKkc7pvCMCkVLtHuAhYqZNEZnFopykLyfhb2UXZWP3KuzeomR7Gwc7PaZ2vnEEs3Rr7QSP",
  "key5": "2KneYtMktxAaQCfjkLRrb2YYT59m1FVmnyoJyek1mnCndNUuJo6Epp1RQinaUYQbCEhoJbpyn9QzURA88AnPBdzZ",
  "key6": "3kCvYaHF2ZqJc6GipWvXgRdG1hSnkBAdcEMX69wtvRugvz15ZQGikmNco9cm2y7HkAQC6DB5thQEVmBkFKAH7NHS",
  "key7": "BywsGX9c1oR4ncgicGZSi892r8oaQcycchZJr7wNgz122VaLR3X3Q4ATXwkA3D3LSqRAwBVpe2Va77dLQcaoHPB",
  "key8": "3RTjr67MrCKx8CVm9w2WfuvTLEd54xjfDjWDkB9qyNFDYLkaEK2MjtNZLN5xQCMsbJDkFwSbczdzCnPBguVGnSHh",
  "key9": "2afR6DPeQYf1RxtJqostjDbWuT5nqvg5NwwFQJDv9S1YdNQJzyTRVQGmEA9YBhoW3GTKCe6wjFGDzBR1FDjD2Z9q",
  "key10": "R8yKVCe52gEkVEiY8wqy2KVRh6MeycButp8NNQ86Mw1jNheetrybARigerAAsXypTUx5aPrurimsTy79uZM8Nge",
  "key11": "4ZPkrzUCsqvZExo4VzVKmL2sA7vQ7H5boUvB25caujeUVTrZVjkkBSpZTT7zKNTFY9jkUjT5X4BKEeoyYkBAxaTM",
  "key12": "52Uut2VmNT6oxBRyXULiQAXGXmG2PLfUJf7HoowibnWyJtMsEkGADhZ8rSaFp6onm134pSDFVJhdRzKVmgqiA1We",
  "key13": "2DhTfEcjThmFJwVAxC4iTQVuETT5MLhLDRv37bDwxKVfQ3HLnWuY6wRUdHX9pvCeTb9dGrce2kCviPXFpPztmuiq",
  "key14": "2SsrDF6P9YsQQDxLQF2HZVnsZ6Uup7Vnt3xR97LeTHEoJQdfNVjcrskURf1uaryhtReiau3ZcmT8kxg916aGiCQx",
  "key15": "vyuDo8KtPzrMSu6nzsJxffmMf2hQHrEipVZkHHm1rY2nz3s5s5UqNC9qVyi3omKGpjqinfUvMb8mLZzHAWnQz9M",
  "key16": "2QKCzuruKwCxUS6EAnBafpX6Wx3ghZC8o3RbDQJbq3DVKCb36oui1Z6PwviNHvrjiY3KLCSkb65UURMBohaZBx2",
  "key17": "4fETCuVS6RFQHaHopMyHKLSrK2Pim9SoZ6nx9Y4xWXJSrF217NhgzEokYXE7xnhPGKMQ2BxWJdajsZbEgwGk9f8S",
  "key18": "5NFNiHQBN9P3sW35A3TygFht1Ni8oe8YFiybiQKPjtVgBF9hWVbhdHW1gGt41TGHSq8VAyUTRbpyqjBVbk9vahNe",
  "key19": "36mD3cqLZBYp9oFBbVXx51g7HaM3xwcC4EHErec9aC3Va5aTcTeZkLiifJg5wYNu1gotpkAVpaVuLYXtqsvY7znG",
  "key20": "d7S1WCJhLuBzCUs9sDN6yuT8Jt2padFQFpCHC7XTUnYMf17zRszXFWzG6CKktwEFLjjsuJpP97zDjie55q6Eo4D",
  "key21": "4pwzciJ1RtzScestmUtaR3RzSFMY16ELYi5PC85yFA11zXUobjMHzHmvCwsyfweKDB3n1TTqu9WDYc4eVmqjfz8a",
  "key22": "5FjxhwcAa17TK8s2fvgexwNL938TzWCGjtHTiY1zNhAqSNvWe5jBJkVcwSRtTZVv9CB2Qgssvp3PuPw87f584JUT",
  "key23": "4PNu7gNJhdVUuRMnXvboJUj2gZL6UNWbhzqGiXvQAkBqU4DEmbSiPcs75E2VA4BzkN8aXWFtKTahznQ13s5C8VmJ",
  "key24": "5Xy7pV9XTkr1kSkYeND3Rwntwf6suisHWFwyXiq7YLNsQH6EsoSPLT5UBks6Qt7TDVaBxQbhNEbpC3X5rkXKGsf2",
  "key25": "5LDVkSFEcS9QZXSKjY6WHbcnUbCdEUbBgTUV9UbVLkZf4NtDbDX9UJ3RWu4R52cU4crGXHC75YWnGvtSLC4W8pPg",
  "key26": "ZhLv6yD6qSHeBwQPUoDEVuit5i8gN8qK2KDFczNS2FfUVkCzXRC4azxzystagUkkEqfdjMD4DavnGQpPmBVLJXN",
  "key27": "EvJEVuS2C1Top9tEBJWvBgxa8sLzq1NHm9AL1wHnBaoHaV9tZ76RgqCjdCFKCkvRn4YxATuPRwhKUFsh3z2kgBs",
  "key28": "5L7gZyKkY6qDP6Loihc5aV6Cxbe9YY3ix1JEKJTa12tm6u19kahMw6cSXFNdVje5KCDytUCpZJH1T96kjrCJvfGt",
  "key29": "4EmW91yR1G4uN1ucemkDYgYVKtS7wY9pdsm3Sz9Cy49bmLYUWMwTWqx8xv8vchZckha2YoonxojF1rQWkmjgCYaM"
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
