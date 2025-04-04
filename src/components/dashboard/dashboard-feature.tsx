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
    "3HvggVNhmwqhwn9ZJ4G4nEq3hUFGdMp4wnx6DjpTouhT4tQhYQYXSMghAdRDAxg5QNsCBj9SR6Uou2zzGH4vjMqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5jRJMSNdkQdXj8vGXqjSjjUAMfA8hijpYnpxZDnJzLQcX2wYzSCQMzxphWeiUET3Fg88mT33Y8iUVtSrT3ieQc",
  "key1": "3tqDi4GktC4SNMC5RpFxQh4kyzhqyk6QJLE8XBWs8mUv81iCaT1EAuXyCbCnpevnYibAC4wa49RaPnaSAepfDb2t",
  "key2": "3QVQhxJzT3kR1t4bij3qB4jYRRX5FUZ13nofFpThjWAJoeXg4qJs226E62amhk16QRk1tiqo6gKFDNhoZR2L52xA",
  "key3": "4yu5nvkGEPk8QCf7EqFjJug9HDDc9KZh5c6mTWwhy2NUFnyNYPp4LRByPB99Mx2WReZbcuBUMNWyJ6a9yu7sUT4p",
  "key4": "uX7YedLDnAkhm3F1MCVLSYc6yFnRmKwyPUZsJopWsJDBLQ7RZb7q5FLDx4p7Yh8aMsZR95Yx2dBpdFiKvXZWRwu",
  "key5": "2EtV8AVbpdWjftb538pQV9DDTp7PLNvX97MDXAqdvSmsBYkQ2dHM95LuGVQmBGATyGms7XdDoW1oKe4Kbc3zXrZm",
  "key6": "3EGxazJJNomAaj8obZc4emfbgfXUHDUFhMPLuX7f9nL6832YaVajGivaBUiJyP7cQj8qaAQR7zTHdRTEdWkMNW74",
  "key7": "2EzXhRA1KDB4jAUUnNVsAv4XGWU2kCocY7fxEsT4ZoMB1SpT1C34R6a58EWE1o9eayeKD9L4cGo5hkMMVHQapcKg",
  "key8": "4fjvtJpuqnpD1EkhBjQazTq5Ug6DJe9B1nPa16DAnrU9tA2C5EMj5XJSC7j45yYTUqPioJ9Poo5xKd1Z8VwAASUd",
  "key9": "318NHjYBzgk3e1pd3LcN9N3u3C6MEygZ1dkw4Rb2d2jgVkA8uNT9i5CjMEhEqV87SCLfmTJ6q3qUbubvXRKQ93hC",
  "key10": "4QeiA4zSTwrYttRyXqHMGxiD7eqVk51B7MjstAb81doqztmsNwiDkPsd8921xhnWnyqzeuGWNwxAdhGhuwnKUDHP",
  "key11": "2KFbyrjdyhwxZRA9T6rmcmoy5zGXA3jyJ3an7uF8PzhMhmuyxJWHqzivvwySPynKXzzTohg1HvszAhHrjSbi2m4G",
  "key12": "429XyRnhpFb8zLPmJBB3qU7XTJZnDntzCBKmrWPq9A92ZEqNCzWfXZHkDhRx6W3pQiQMPn9z5jKGX9oJigASGcRR",
  "key13": "5VmzentMCfayAwnQF7RuGc4rgnh2pW4uFMTgLimL3LXn87PSp1JDR47XyYccKMpFL4uTSoHmpxoH3wJe6zuJTwue",
  "key14": "JMmhfx89zDPNMqdkmdYpWJBJ2CpTUQLuAQVWgjEhpR3ng2KXymW4B4rgTdnhDfVee4S89MxnkC86yeyrfXoN5Rm",
  "key15": "3np3dNdrdpHYrKngtnHyLFzTG4j7P9aT8rDngamwPpV3EAmPto9zrjKTniETGBLmky1occqgFdsZP9mpeAwddvET",
  "key16": "3gVkM8UJrB2XtY2DckxJ3YrF3CctUYeW5bnYzh55NEtrgVQdBEUaZQ5ExkssNJd8MoWHtj22h5fvivHRuPCtE6ay",
  "key17": "5GUTNAkFg7LzTj2DCgkE3F4jLtJDvLc54v7Sama8bURkYXpj2WYJsmWa9BgkKLd2vRCCmr3QjtPqibEm57wMJ5tn",
  "key18": "4zbDjiVEwcRx6cn8XHrgRztv3caYGanmrXNyrUYbG1LmQr237hNDR2Tbcxh2mPKZbbrPfSR3TPvKqicecpEDhJai",
  "key19": "iqEMps4nC68xxkfBjM2zPVkZ1cRvhqiW7vHmgt1MMCpAxy3MTgibw6w21jgs1ZSYmq8nxJ2t4ekdrDczLuYNzsz",
  "key20": "4BXZPS8msBobL4VMgmVZwkXy6ohd5Ucn1hpASKhSYuNUtnnnKw2UUEFPBE1yUJVNbWPEjTU3Vrkizh1AyJAEiaFy",
  "key21": "2ihtTyCYKGggQGZNgnHavnWVdQH4i8QWFrjAHnLRFoEMxzoRqoRq3ykxPh2xzGnP6ugSaAbVPKR8szG3uLHx5vDA",
  "key22": "3RNcLijfBKepeTjmvmenSLjHwZKfSEdWbD7STn2MQyvokEB2q28GvZUdAcczUm5bRro8zwVsPpVwLU8gXDWsmmKa",
  "key23": "iGYzQWLs9ypzp156bEZvvdC9eZNAeTiqvWD6c1fxUwShFT8dYsyPBqYn78kQ7dDdbnN5vtnfs3BzoPdErgxLbSw",
  "key24": "5wmWWgSrqgeQke8cqTnSNuDEov8KNkye9VdTGWqkz234nipBuVGxwCiRL84aLaUQXbdogLhx7usoh65tq6m1KCjv",
  "key25": "4TB8L26P7nVs4v2Dgqb2YnbYfgj2cYPrTZRKDxjh4shHxXYY3NpsqgscesuWe7KcKxKBxHEL25Dt4f68KoCQK5p",
  "key26": "4SV8FVj3Zm3pxodXW5Sww9UCMk74oNtBCPeiHBiCgHvFSrxtTv7PHMc616m2VgbChKzhDTqr4zEV3mXukTrpxoWM",
  "key27": "2egCzH2kbPCkMsdJwQWdeVEBAoSG9HV4CAdpewqoFMgfi1suMy83mncTzUq8KoSXYLauajDBEKpSCuuNJqEQLzTT",
  "key28": "4hTqwiwcsxQyNUXxv7mZ6sEroCsQGtKR4CPRU9WkUjn8za52wmNjiHPqQEjQZMcx1AbjstkaNKjvRTU6YkUhDoSB",
  "key29": "zNcpsaDbjYRPe5bo3u9mAcurqG4zPnfRFNTRVLFFihYtLzqC3uMrEQZxScfgKMXXxnv1aRtb1CnpVz3ng5CsBxN",
  "key30": "5aY5g4YZM7KVinnHp7EUs7MqdT1rmArtqhA317XFh1oj68stznma2ojUxDMcV8C3VB9u1NeQ4siF2qBbGVz6vGMo",
  "key31": "4fnT4zTn5Gk6hXMzchSWqQ5o2AAocxUvKE6ZUmhjHL4QntYGg6pXQrDfYWWXbzmbeT46TdVjuQxK4BAVZvJbAyfE",
  "key32": "2SEV6gCj5Gr2Q8Db8debt93Y7PpDGV68qGR87Duzs7ssU13NXkCRMFsJZMp9tHsg9KUqPo5HxkEryCWT9UPxtf6v",
  "key33": "2gd9TSxnMa6HS9fEZgN1nrUh3j3mx4aJ2k7WXYtvi3P6ZJ32C9kDTe5ovoR1t2YMPoBeLNrKBQnumFR14JMWtFuk"
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
