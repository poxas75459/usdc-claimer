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
    "65BpepE1SbJLWWfKSMChJwuy6Lvt2mCBJSkY9yzqqFqrS3GNyszCGi1RaA5uRWcpb7DobNNGuqDMj4Qc2qHeVxoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UwigFzqoBU4ssGrw6KckMNWTjHZKmVKNeYoEsKHLbykyRnwwjgBUdKt32kM3QxWGUR8gsyZahamRBiiuZ2i5PX7",
  "key1": "VxvAJFAvns9AgAG7AUFPLbHyzaNmyWs78j6sjxna6dpGqU3bdpHa9Bu3W7buLrJzKAReYUDywaB2jQXrGyYjvJa",
  "key2": "3iVrUHir2PkPU1mCiZZcwQAUqqLv6SRr5FWVzHDR5cvbjjipmix63bwU2c6XJZcdXQD3Rj4SaLQFM7B7PwgsWQKq",
  "key3": "581PS1UVHSTnnvbtQceW6JMQgM1tRxKetBQ1r3Xtx9RbsJa7XSm8xAmM1pQy1kXaita52fAxu8VFAGFbyxfnZdJ9",
  "key4": "4WSbGYorqWFjHWW2syknZfQ2r1JNcP9qq8BSejcqPQekGiZXy4N8kBL3FWG7ioC2iKsxGxtyxknWkA1mA4hKM8kU",
  "key5": "5UMPdutDyPNHmfcqb3XhmEVWSz72gtHs4d9UUiPLXHLZHPMMMTSfz2xbMWraEVcnLHiAPYFhBidsonsq8wvjWUJV",
  "key6": "2whVxYRE45HBFYyjSudmnndA5sZnJAtSKP1dwbDqFR6Va4ku6R3sXbejG8jVVizhybcGfsSZb9Mycfi5LJq9oCJc",
  "key7": "5f2xet9ErEmRNrBrJnnK8hDB3MYW4PFn7JwNotFPY25CKc6Y5UdkrMDKcK7ZZy2TWvkvMuGzAV1NAK6wgVqDR2Tv",
  "key8": "2T5sHY5VXewRSkZApfkHPhMCVM6XwLs8nB4VZhmLMU1m8NtfZ2VSvrmssLhp9bqdXMXmeAc38LywMBYodxXAXmJp",
  "key9": "2TxaEV3Gv1Q8gdxqtqwm8gmjMXp4sURiKBBnfEZNL4ADwpJGAWbGWtPfHLZtz1NGwUxJcA3c8C3okF2G8BFDTZ4Z",
  "key10": "2pmibq4wT2wqGNM6pyQ5HaRSwnYi7GuroKtQaH3sk7z6UiYdwrhFPAEnYW717p6dS7RQbAWUzmSVd44PnzzSamTE",
  "key11": "HRE2A1vXTxb53dwvG3v7kNsXGzdyisbGrWYE8EYwqELLFMmCg3MMWHyYnqmvu3ibo5nj9AXksTQX8LiipbEeXrw",
  "key12": "5JQ33GntLHCk2DXqWJcjJMvmfaX2KGecU7YXwUFpL78tiYkrjncnU3HLKGgYu2vz9ShmxwzWVoDXpCsbqdJBYdzX",
  "key13": "61GsvZLFzNncetovhyrPKZy5VwG8SYtCXzzTSGcUFPbvJSUx8rqoNYYc4kQzZfid9wbrBpaqTbNNwdbn6ya26vbX",
  "key14": "2CVZmsXgVEih5anJNTCykDqQ3aS4hTChm8Hk5CrEXxN4MnJRTM6pRid1MmCrffNpoxRbLsTtd7mLTtqHtfCQNcEe",
  "key15": "5yMWgu1GerL1e3i3YHcHGVbuATwyevhxmfAFQf2NurwVuR1SgzkLp7GtjiQ5BNhY3XHwnSxiDUtnjDy1thxQWJSz",
  "key16": "QHrnCSURUUNtWDyvhqWoud7aL4e85pdJCpjMBiXkygxdZPbzwAN8bhg89491osVtT1uvQeceutdCkjwvWiEG5Sv",
  "key17": "3jgVx1msLGqzWQq7sHnxPs7ijgvsEb9KxBmERbLB8prGHNSH82j1ViLdMhddyWVUz2ySrvmqNu7XcQKvwj31bhqh",
  "key18": "2cjmfm9gka7roCLdBmEMsCE7SN7rWE94564RYcTh4AW3Vm89a5UKtwkeL31Ct8F2NhZAzYiGaobbvpwPznWKY6yu",
  "key19": "4oU87xPCnjPNrbWwF1BDZZ2RRkrDTUeR89iW8nkVipUDRAuk9et2KBEEk5MvMCYoK4hwKXF327qgQxwRibWVFQNr",
  "key20": "4QjqDrAvyDmfPJdXCBzB6RyARvh7bJSJqkAEhfASV45vFM7gjZPCC4C3nnQAkdQqEKAWXN9wmM6UEWXnjqJxRcUH",
  "key21": "4abGpnxEz4wHxmi5bwNgQLNXZ17BPrMSVhax7azUwfMtNhKjrrL97VFmpHos7FwF834DfZUc3Z5gz6LVFaiPqsfF",
  "key22": "4gKPKtwTvsN43xXX8JHXHaQdH5iVTfknVRnQ7PgrGF7nPn2dAhE5atv7bQV6kbPTEzspJtyBfJq4ijf7x6JKhstK",
  "key23": "549ibjtXVTfnsDiNUPQtqTYrUTiNBB4Vz24tGnxUGxbucD7kV4Lq5wckagEGGYesxyCk4UpbaFLg361yVeeUMeAp",
  "key24": "2mJYsNpSfDKHNRWPro5V8HtW9DZzYkAQSHUj6S89wfcEumsVTzsFx94sDC2vBPaEnXacCh36Ge7eP1e54wai49Zo",
  "key25": "35uTJxW8CfYWi4GNowiN9LaxTP3N8siAEhnuWTzxhGiiccLNy3ChBeke1mwnJCrUNULu9iCYa6YzWZ2DY7CpjQx4",
  "key26": "5q63rfduzxrPRHp7TTUENWWNVm9bSo7X4ZUoCQKx4GXa4s74MSFucvPHYHGG3KgmzCVEUbigqrNan7AEdfJsMmB6"
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
