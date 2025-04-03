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
    "2YrShwePTCLcaBRqGEWk59UsYfedUp3Eqr58BE3VxRY2m4dA9kMJXM3frFSjnWg2iJCP8nJ7Yminf1QTungAXoP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Z7drN92B8ViRHzDdzjFZAHkA2XgPYJxRddFhHxZHxPyjMNuWe8ohfExneqPwvBhyYjmR9mEo2qBNnQPRpsQ4qc",
  "key1": "3vGn79JtqmDegJTCm85TMQ4bqw9zpeDeBeiY5W4fHMKBSaRaMsJyrEVJsBnvYvzEih37mdtsgrrhBpCN7VbzjsKe",
  "key2": "sxrsJXgoAe17fm8G1DKyykuPjHexxpKQfkrAfDWBhxWfoxK92qSxavNdsNYe7dYNFrkpT8GSyEPeCH1LDG5UZR6",
  "key3": "5i5VTnABpGkN3MxH6BtMvUobfMNFJvj9qyx4TkhAnZufY7hhmwkQunwd9rNG8ZoSFQfAZjXehNv3oPenB3mDwHvZ",
  "key4": "3ygju3gSAMEXwt8skXmGaL793Qczp7Zf4hpkCrUYmwS1cwQWmP4eTbaH6jykfBpqYhLXW6KNxFdiuWZfojPYvMsL",
  "key5": "3pZZ1SRT35BzNGhBZ3QpJuNhLdNEDS4aF8kweTFxJx9bUCwQKr6d7v3g5q4LVfYvyDmi6PJjWDD8JmEtQXK1jG9o",
  "key6": "4Q3PiZZDQy8273zB9DT8s7TxpuC24fxDHoRkGiBseEAvwDqq76yZUWt3cEUhoAsYDjK7iL163D4bAdNTn15XAQNv",
  "key7": "2mykSkAMCdBVBJ88623pqz1CHnWaSkpkrzTe1kCihoxmRmwHVMwM8uogMVXKKoWRqAR4iXfk15daF14uAsZo6nUZ",
  "key8": "UgmCzanpzGfm5KwjTfdh1aE6S2xsLGYYcwmjXgSWx1svXGwtXL8fQpEq8ahsgfJ5Hm1qzrHKP779gKiefTUo11F",
  "key9": "64NCecxqL9ii3KEnrsr5Mrh4ofYwEe6aB5HMM3d1LJ8bzNrMkmzQHuYYKok3kbgV1iMzeXxWsJUwEj4e6KK7tsKB",
  "key10": "4LXCFEEeWoa3neA65touaSthWN7oLDHagA2U75ap5vpXgBAGfbi73arEAcyLRRRNGsSLV8gwbBurRwD9jhwqe4v1",
  "key11": "5db1nxsJDMdjKkPeJqJy29oBPH4uzZQjbmtSnVM7HMrLnZZSSi5usku6gQnNH13LSpW73WkFdehR8cUdQH6CM1qT",
  "key12": "57BR6bTwLMR4hFdkF6rS15nxoXZTPmiWRYi7sR77i1hKuyGhbTAADv2DqZ2qeboacjr2SouYoqhaxqR5pdwqv3zb",
  "key13": "5g5DhWzCsHiC784ACo1XfNpL53Z5PhPRCjD9cHLmwj4gU4J1UEW59VRGxkkKcbBJCySvCthLLH5xWoB7eX39nk5y",
  "key14": "5zd7muWh9QQpTXH4GvxYw9moMbnsE3tQUx7h4bwFmrckhhc5Zj6KuzYd7osaqvnasHM735JxRhTipP8nS6Vu6GC2",
  "key15": "7BkqfNFW97Q1UpLYaHDRXxwjWA8uUxe4Bj6fcxcFaENtv7x5dJA8AoLDt4fUshpt9S5n7CpzvtsYDhzeA1NFBu2",
  "key16": "5be1Y6qFwjChKm4vCCifK7L1TNmg8sASx4SQ5C7AdrfRVNxeMyDEb1J5fqcyDNBP2UeXSxCEaUaG3irxG7x7BTB",
  "key17": "3iLXAyzPTwGefjDp4LxGS8PqCiTTisQRPbMJoU9dYr6AqCRD3ghzsPcovTJUJkaUK8JQfjtGa3fZHV9KbYk36dAn",
  "key18": "64peTrPwqshkQPHj9H1wSVUN3vatB93VEJiLVcM3QqwMVWBS1t94K1s2q9YTvVHYdz5Zz8dC2gkiFNt6EnATAxcz",
  "key19": "67MaT6PLFzrXpNcBGE1hb7AuzEGYbTnkEuMhVw3PqtUsJmjthSubgpwQcFfuP5jq6hbg1P6dTPPRt6Y3F2Y7EdrP",
  "key20": "2CsVnJ6pugM9uTg7Bmpi4rincJRLXFof3uHmGLRMCsHiEDoWoVoWEPXWFHGNvkgXqSihQzSqLiLtmTDTy9GF5dgD",
  "key21": "2iJDmY2xeXZ5RXjstvcc4M7yEnWmwUaiv4vBeiJQy34pRLh9AvPSvWz1ioTUk1ADtroHYkoNKukvU3caVgEa8WER",
  "key22": "SHiDVeYFb26uAyMnhFnwVo29BbsjwREDjWvsLyMVmrCBcztmpnCmvQkKpy2UzK7u1Ut1ThSep2hSRUTSiufnGKW",
  "key23": "49zHsEoXkBxfizgP9V8eohCoETmynCHM3ZXwKrEtctZiwAX334Z58hWfXnNT7r5o85MFThZnMiCrdMNsXBJ9p9Dk",
  "key24": "FakGhhkP9AtkYZFDcdT8nawqvMADwGzWVFHjZQfKa3AQwAFu9cRxoQRtQQkGAxtwL4HRp9JkB2G4DwFjMM6oSML",
  "key25": "4Z7WdTNx5ZSHxjxpujfKPX7o63AbqLRfBVMbqVc1TEiJsDVYZJkPxQXvpJuTkqFBhouWn3vWbFagQnwfJ8YfDoMF",
  "key26": "5hjotfRefs9Cz53HZpBMtpd3JSvBKc1tqWgJXwWR3b2N4JoZo4K4AkeKG27jpcxfRrfdUEdkoUT2VxgPmWbn2MDw",
  "key27": "3VeQntAVdFmyqpHXnxyQepAQmeKzbyfpS3unpTj9v5AbEGwkJkzknSy7kZui9XByTyeHeHXvDHQ8DKXLm7LXUdxD",
  "key28": "m8N9nPZpprzGBJukz76Jo6NcHhGSB3nkDDZTe4DYf5m7KSFPzEPcMWt6onipZAM7XTLp9aDnXyzL32HLofRZTyX",
  "key29": "5HFezQSHSyfQnzdRTdqkUTQyTYykuXngV3f1YXVHN4Ck9Vr77zTaGp9djQUt5RiDMwuwDTL3QNYNz44jeByN5sKz",
  "key30": "5cCKgaEdBHNhUjp4PHRaQDM3PJxjS1KK5UPo1wDoYiYYmbnYpTBVBPMAUiqsqE3PYNw8dGyWpPGnfLQVZTcUa8pK",
  "key31": "2B3L8MEcws6RQC1ueZ6i6wmVvowd566kANNenWaY1dBznDaTKFyhkSfWxWigiM8R77TCm25g3TtVBd6gbQRhtUNb",
  "key32": "21oD6QUfKs1Y5uhLyaem2T7FRCAjfwweuGu91FtnkfhkJNjcvBknAKc5LKuveQ2w5Crt8YDHrU41EJGWmUsuyRMv",
  "key33": "5935Ejbz4A9JZcpXSKiPywt7CDLssGTqhLPeCTZqxkRzQXJXBz8DYuDqXBATyeDAvQCoXESDJVPQQPoV9em4zcuT",
  "key34": "ydFnxwTzZSRkuZyUXUgjzJ227wZZPhHh4U59xNeWTqdMXTVDBuEfH6vuChcAFJqAm7oeTiomwZynTDSgrrGMCEW"
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
