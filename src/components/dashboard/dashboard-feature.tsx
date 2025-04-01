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
    "3ws1feGQJShebXX2aN3mX2Sy4zgry1SU8DBb6agyyF9N7EqYJ4xKUhF5vBmQfcfwZ29du8Xw6W4uUS9WuHh6PxGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J52oqb1mtMotLXCNX6f4AL2Qmm6rb6cbSoQFj5iFVUyDDa3fmEpeWMNeyGPjRM466aNYfEgC3S4DAvGzvhCbCoh",
  "key1": "4rzGncLQM4AgCQhvV4KgvDXtSvQbeGDN1BzeS7PVRu4M6c2Hn8mzQrgEKJcx4moBk7NM5kAqcNsGwg8MeF9szmci",
  "key2": "5QhfoEPUqeztbKcYH1vk3ycRqrbh6Ewf352YxDoEMmj9FW9924R7Cb2quA2YaDLGqgwQo4tp1HLnpYYn71U9rZJZ",
  "key3": "ihKGodU1RYW4FEqVP17pwq9kq2VDJ9ypAnHGQSbUUTawYUyyZFVNDtM5qBxRL5EdezaKpLYPZqqjaSa273S1dF9",
  "key4": "BxJVZFuHReGiZrSvoETTuJ3MWwjQ1MfPk6BzxGvsoie5xEmeM8n85Ec6km8s9m8Gh1wpVYQa8ppcQRSyUGu2Ug1",
  "key5": "2tbZxfrQTjTRCPpjkHztAAFUHi1HNzQzjf2d9FNHeFVFETpoJg9D2YzcwA79XXEhHHF2M61Wd7gAZciZ83FiP3SD",
  "key6": "DVgt9HDwoac5JGQKNjKTXkgM6GoM8f6hPg9iX4zqXSEobUxkYAHDkFGkj66v3nSmd31npaBAKP16WKaXWUPr1b7",
  "key7": "2F9hwiMgHBfYmt3CnXTL7H76hy8bKCAHH6AC5KCK4pZKALFc3jERZCBKB7iEhLcpvLrWTGxtTqJXjvNAJJReX19U",
  "key8": "3wjPBz4nzem2tvz8qpeAQQDrcmaQ3VfmvNQo9DrxGUcD1Bug8u4JV3PxEhmHYE7ueRaER7cVBF6SVXz8UMYvdJWJ",
  "key9": "3mfQpe9URCEN6mTTDoN4rTgJ3wnDhY5v9pxmUxj5cibGbtPWzmdrwvXCZ6STi3wMmd8JwnWMTrmky43E3L7xFGdj",
  "key10": "2AKadZanYhWouYZQjsWS86CUENZQggkaScj9jZ1REzjftUV1C2ABAM9pCNPQZk61K9brXN2GUpu1ntxAMX3CfZNN",
  "key11": "4PuiQo3Brv4Ruc4hw5C37Q3zqEfjAkjdAb4V6s7gMjtL6c2KVXLkVJFkDamUvbGyTNDT6hY4qZ4dcaPG5gMjNNu4",
  "key12": "24vB6vAZCTb7f9dfNPm2J8uQV4L4uZRNabkAkmRVH5jQ9nVZ2jPE42sunp8RaQR2QQH6o2LisaRCtd7WawacPYAi",
  "key13": "c8hFbBuiRYa5yutHT3Jb6a22wgCV7Qtb4ghUrPbnxFqYk2hFSPk4yBGDHoujmGxJwo62zunGE1YyfpnzHSovoq3",
  "key14": "4xzo6WcXe9yNZCCSoFDZTdSvd6QsUXYBrxevosDk3ETZkg1ChiUjErgsBKJSDrBTHan4EWzAfK83AuKDcZMR9z9o",
  "key15": "62Eey4LHqKupk8GqApvmqTHfWzskMmwLbGoexnjHyUFfgsQt3pHFoBB4xE9gJWQrgGDGVnQr1UHWyZjKgSzf92Hh",
  "key16": "3ySAV7hCGqpXtWzEETboas8qnmPebScLcWU6dTg65ouaSFvxosvYQ6EDr4KntMdz54r84DiwUnWBa7jhXkjyn6Qi",
  "key17": "4enqkC2u9j9x3VxPj9CktyLNk4AhLbu4aYPwck8eg6StVvbFHBjpGppJ6N98EwvonXSJWTZMmkHbRkvSbn1nq31p",
  "key18": "4HBWBD3adWoxxf8n2CSAEeRRPr1v8m8w1HPVAZnyV4E9PW4MXCKu7bSLMGTNdH18zfr6h1sB9zESbnvYRHUJdXRV",
  "key19": "4NzDo6dhcKsfKd8SkxmubT7kgGF4V73HSWzDzD4uNH32sLqPqj57f5inawUGTpDt7masX3ft9eYaCtG4bxKQHdbc",
  "key20": "4bErz36dAQwFBLuxYqUGb8Ecn6BRpcS287GdhsYVBMvuFsb9LKx4SYnCFJ35yG1jZ1vw7Gqtw27ZL7MygBnCyd1s",
  "key21": "2usd7sx9ksfMj3AMSdAMU2QHLVUmsdvf59rcJTXhEkJBjaJRQsE7d6zzRPhehjMJCeCespdjJ8LftaTW5aDwQzkM",
  "key22": "52nUsW2p4uRGAzT2jsoy9naxbRMvw23a4z4mPdJ6zoQxCaUwt9kHWqn16oP8E2AXfDWXeUF7QqE8HceUiTBAbQK8",
  "key23": "66BSwBFHtY6KvKuFjajy8jKex7ycxWfqKSrfw6X6dh3yCVk64Est8Tz3vxxLYcmgtyaj3M66uwhpyfk27aGHioXc",
  "key24": "njntF8invaHL2DTXmCebZZXc1dVBCF5WGRBu1CPAps4tKb2nvQqHnAr6hz6B3g63Ukqwwa2EbMbNnGNR89iN3D6",
  "key25": "i3RZDaEhQVSYunYKeL9XXsyRy94PXhBngpCFkD5H9KrF2T1776ZBUAwqGFvm9q6H4Zt2KptN3QMmVs8QtodCHPR",
  "key26": "3c1qhSDLNzVkJsJ6Kem1FXanMMHyRuUTW54W6bC6NwU66kUvXV5WsMxhyF9cBTHU85Z4vhJUpk7dNsD3f45DX7xm",
  "key27": "3tQXCWtCPSxCxGQ9MaTYRBkmTvQarCakgHMenkUXSmss4K6UMzBsnF9s96vSogCZZ6JpwLJcn9hnCXXAWG2UmJmJ"
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
