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
    "2vqhemfCwseC3FNMrpmNCXSvQis4at4BD4Be6kn4BPVdPum8LGs6Ma4azeNUBv6hid7wHwYyErwnt1A3YcEHUx36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvrzGaEuXK6iJF1yUS18tAU9tFPasPrTMYDDEfMkC2UVJ7YH6DGthEFvKLaCrVnHpuCZBVBb7fedfsoKZHu1NxS",
  "key1": "61XQZe9VwESp8srWUK3VuodUmEAmuviHKu6HhZ19rBPbUXr9cpNDf6W8j7c6pzCpEwgncm64MckATYKDP13B3meg",
  "key2": "329X5PcdQ6Vua1Du5GhPJntuzEcFgMHG6ZaZkPMNFSuANQWMGS6FHrVDDUR7E7r4oFZmoRNf68wi7Hs3vYM2nzU",
  "key3": "4UaAPHAZsg3RszgoMbykt4iS22ejiYLtZRk9J9FRWkBqPVSgLx3sLbVKa3Fd3az9aFJTTDFsEwo3fWHbF7Pvp1xA",
  "key4": "4bpLvxx5XWCee7Khgt5S1M7n5teSrKPnrCYHm4k7QuThFhq4cunaDFDzuV5ujmkskfsbcE9oNjgAz8vGL65jGSsc",
  "key5": "5Thp4XsxMsAFwWMwa5Tb5T9Buz75cJzrkzQzRiKcHxzhQaYYXBS3AA8z4jfS8B9Lj4Dn6Jy67hmuMoXC5UUfgzWX",
  "key6": "334v1PrMV1qX4iiEUJSogRDhUPArddqACjdMUPLEWVRuq4npFhAUULfR2LaU76t5hu5FCRKtzxqK7wmwK2nXcZ81",
  "key7": "52Z62NvLwQPbpnqkaWW73mp7eNyymcvCT2GLNbTmbhuRpD2ySofPsP5tfwsg6bEmpYQ1pzyJ9BTWpk4MMJVHoyLX",
  "key8": "3bZbwak2fez5oWeViNrL7A5bHHhTYDUL5FWQ3tvtu45RU6SDDoPhkJbeHUGick6YrXd2C1DihTzoCfRtLHmykj6M",
  "key9": "3KgTYeWupzJbjnPkC44Y3wz7tXfcFXSwbePSbY5fpcfjDv5Yw8JiUx2LjgAZmpqnRszguGhKCPNGsZJqFPqru5mU",
  "key10": "3isyaRASzY3H6C8s8bZ6HqgTJBXEVk8rau6Mz92Zs5iB9apeWFri1Nde4dSsDwGJKHeHLZJnNe7Y5tLervyQQkG5",
  "key11": "y7kwQg97Q5fpg3BZL9vmtXKDW9p23MfL6Z4JnYQU1XtBUQ2A5z64pbtdH4an65ncnUZXthL11kjmVx7cqrDFp1N",
  "key12": "253aV6jpLasZYFYaKwJyvAMHUMbx5PDBKmFzASFnBWfuH32GiNV5G4TVCSA6s6PrytUW5wKRf8MC8HKm7Q4tbYFJ",
  "key13": "3kstr5M9URuvx9L4FkVb9pjtRUE3SDGe2vYh9BimRS4mnJmDW1vPkbNoeZ8QgeW4bXBx9ZZzniKYyLSGitYpPfqJ",
  "key14": "4daWf5ahaBWxEmCDCTMdQKaV6fi2KeQBaJjYN3ov3qT78mp5f26VHc7KEv4n8eizyczJA2mdt1PsjCzCNbArgxtg",
  "key15": "67iipSKNrYAZCTfTzvSbGgkKjg9mSyzyVjeXUAuQLCL11ZpsVc9hGEBuES3rrvws4teBfYWX1FzbKyjiNkU373jR",
  "key16": "3EMZfYMD7B1syW22pJWr9aNg8eVF3qkej86pkzXcrNk23rKEg9tZiX6GFPRPLUkDQ4d1MVD753eBfmnWYtw47tcx",
  "key17": "4KKTGK3uXHCJ79zRJXZFC9LxZnfQicRZe3CrccduGk3FmMrYu1BxJrJ1dLJ2Fpg8jkizQSUaRaPhqWRkue9Mwruy",
  "key18": "t4z3q2rNKMiXoU1WtrXVyNvNT9FZZzcDRTCbrerVTPHWKFccGPEjKLx7RnVyPucCC9CoqDiY3KDZnDGLh3m6dmF",
  "key19": "2NatwD6TViRRVXr77ZF8fRt3VeD5CTBojYQXm4qK9ACQny7FycpfuiLFbZG47ax24g6KL3pYqTjawXwEUpqRUmA5",
  "key20": "5YjF9K3nEGSaUF36Kob5Rr1TUD3qVoQUQJ5X2UGrpFZ7kKnHct6VWKvgZzvGW4MgbTwp34VjECACQKp3pMzRhpfP",
  "key21": "61xHcq27fYWX7eXmh8JRCEiDzANnVGDgg1YNDHoCDdA63D7rJYtcdKc9zUbGnHd8MbJzU68oV7TNcZjZHyZQupkM",
  "key22": "33TPMPc6k6cqy1NzMPxs4YpKCWBDYJFwEFXQWV5NAPAqs6L3RAfTFMDSJZQ9y3Pv8piQ783cFm8Ybhb99iSudYyN",
  "key23": "5JJJYgvrhj1VefQrPqhw93uTHzLPn21cS2QwjK1za22rVNDPEZdM99BJt9y7pwo7n7dYNSGvHymU4ej6WoYRVP4n",
  "key24": "662opHiQS1JiB1XW8XchzAJRvBbkc4h2uKLqjxWkEKVfjrrYuHvvLsu5RLUAvcrTt1D8hTxcHwFbGpTf8hrwgwu8",
  "key25": "3KTjiD53XAM8m3r5nJofE3tsvHMB9XWHUpSPzcQNHfWdZ6GTjNs92a3aTkRLhLqGLEropEVJkrY53mqEM27s9KQX",
  "key26": "43UGowqSkUDoRvF3FGCcJdiC9FbJ2jbpAGygm9NMFJJTFmibi7KWoFbxwZXmsViLdX9JZs71841KehMbZRvANhRY",
  "key27": "4k8njFALoLyFLXKFr5dC31w9ec2TZ7qGW3c2EJ83nwnN3ZocJzsfZAPY7e1kWMRFomuUYvuZX5n2NpFDK8Mmkj1t",
  "key28": "34KjFGFk3qid7Jczm2GYTPKZrhsNueqyq7ff4MzxATqzhvTBmUYUG4hqM3synvabPnELbSVT8wqhCJKvAakfmVFs"
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
