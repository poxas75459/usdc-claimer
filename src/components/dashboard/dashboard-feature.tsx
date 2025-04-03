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
    "5CscoHtz3NoUXMjneEPinPyaJCVAWjsjWZiazgCf8dSzH7biG2mVhzBqQoXDp8ZLri9d8XgmZur1e32jLhB8s9N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWKwabytqLtwdGqm3wK38iTsnv6XdVY7jfwydhBFqFnyxSCXU2hF81QQJb4pnNBasjfwk9KfR6Fth3WVHmjA8q8",
  "key1": "Y6ffUGMcrDUtBEygTGPCJx8Zb67uftT1q3RuuE68BMuy8SBDg21N3dypWdFxnR7wLmc1iiJgtwafzPEQ9SyebTY",
  "key2": "4WqZThxCSzRMTCDQMkDADysUzCxxjYgwwZZKKLhUyDVyiKTKcMxayoPR6KAUmaB4PwoTx5uqjfqqCAWx9GeJA9di",
  "key3": "4vaRDszbvf8Fac4irsq22GHH1obXUcqZwSmEqdFocpvpcLjJRM4rNwQG8dY8c3fkMXpztxexsZuJriT9miLCWSQe",
  "key4": "1Bf96QmwruNwF6AaxEhjR2JahBSWBwns5pEuNCpgw8a3gkcgJ1DHwSP9YCyGaku5ereKnbqxa1BvcZfGv6sULFn",
  "key5": "3bhLA2PNF95AfHCMyeXNPx6svZgUGxYaWmP1NfGZwjM8EC349PongZJPkDsA3WL8ehZE3dDCFXYbxvPjug2yCDSp",
  "key6": "3R7EuovtSvFNoVaw78Mo5cDPZa7eLibkYKCsLsapFaZKa15cr4r6RviPEpKaLankgU8Cwq5YBNxPjmEgGWs4T3zD",
  "key7": "5M8gmZzJRghnmbsbjbqJzP2zCzLxik6iF6qR5Q4jNyUuS8xQjL82kDqUQCn3GqwHXgfoGUCbfVRDejjv2d83eVnk",
  "key8": "2ALjgYHVTWPBRUef97Rdi9uq67vS61mKW9UZ818BofbTgXZR8w55oZiBsxf59cZaPr1BcukNinKR6Z69iXhwq9tX",
  "key9": "2XH7XZcQunuzsLrbnFps54we4D6UmwPELHWu8N3g1Jn1GDoAKtPtcXhqvcqXGq8kdcrTW9NgEgkT9CBCoWhmXCbs",
  "key10": "39GFdr5AKcoCziACpEu32oMa31asR1sHiBVCyWf3CgDxZnFTFuAJmf34iKv8jw8UbLLqVD9NCp4thzbc15tx4fEg",
  "key11": "4kmPtFWLVi6kpWvxTiHbHQoARxkF9zcfbR9SG5ZYgv9rbdMv74nuRQHpufgVBGFDpBhmTqFCbDmymHK8svzKVeiK",
  "key12": "62yedNjTG54SPw6fdVWYfa9aFVCSoY2eNBa5BqWxurCBp1JDDqiPvRcY1teQeYwnGtYJQCRWTRw3J2e8wn8Xyr7Y",
  "key13": "42UVgvj8xcAe7TjDKCHUJc1y9hY9pQh7tsLTkEhmxLHh4rX4MJTm81qNSYknDR367jGp3zBGnt7tA8BUXkVhxQF1",
  "key14": "4W1GJkWqZ54RQsqByAgW7UB8NruM5zrDiBCtSzGtoR1pKTQNHEm4ZHZbSHAFdiVmi7Fyzu8QQgrWVsRK6EsVoGGr",
  "key15": "5WdaMTdH17db66qrNPGzG1bnpXCzNVSd92fQB3gLHNfjX1KqPTBL1xZU4wGHV49KFFxoPPDszMNsYjhUnghGfqpC",
  "key16": "4fADTP6m3nY8KEZ2yri35Tzb1yqaBop5YbDCJxmFfkPKq4fUpWBys5ivkNaz22urEMFFVCy2wKC5KrhY8Yz2Xe3g",
  "key17": "62jrjLDzktN4fWxRsNtg9fwbkawD816BsBRVerv6Y98nzJNwEBWHjq9GNa5raEj9YSrQrpkWkDTgZuek4f7r4Emk",
  "key18": "4Au1QhLtLC8erPXe2iRUC6E1HFX5cPjFpSe1BkQtKZJh1UWDZvEGjR686Z2menq89WFNBdpa9itf16hAxj4tfEsf",
  "key19": "A1x7ju2JEUVyiG8T5Le1246ZKAdZ712zt3peYNUVJ9oqPPdeNRyXye2bM1RhFKw2E9hZJ5PxizxNQcxMDosUrGv",
  "key20": "5gvoZBqjmRJ5QBCvhTQzTc4ahV6bu3d25ETvUbDXAcdf2tp7T9i65xGQpZSKLfWqDfu6ErS8mXxiT8QCCPLcHKmb",
  "key21": "bvwCYtyj6th1RaCo8nyjS7ZkVnhGu93tJWk8MZffGSWA98fhKjzfBb3FbMhSGnYa5jXtycZE2M49jMmKdnAgVM4",
  "key22": "4pjC7fYwM3YDM4SGJc467nGiT5xJS8bpbzLptyZmeGNXWkgJKJMRamam188GapiwNv5ZmyeoNStHkujm6QLZVLed",
  "key23": "jbDybXfXALVRo5FV1zyBRpDVEqYy1YpyhhyP3NG3cyXnWGH3hByVQBP7d2eYu3Ps7Gzdwux5Yk1VygMNKz69R2a",
  "key24": "5mDYAPFYptgopxy9sSHrwZwgWeAtvUemWhvw8yKFLDLgz9BnscE1tEmwFjfEfDY9LbAzWGVwHvLfFBGtR4z7kep9",
  "key25": "5VKmZMUWvqm272nJCEQhaF6QLwibw5miEmU74X5WFZtAhEWgimftMLv8ZWqSvu98DmUJ59Za3bHcczeRST4t9v6y",
  "key26": "5B8gdjihXtWjAryE7ERcPBSBxw5Y17BAYyVk2SQ5bcZCsV4vrnDYqNxsY5ub5dpkRk2i2mFCceGFXiwAhF9ebnDV",
  "key27": "2JQUtvoycU8Z5mbD5Mmm1v8bUShyRhW7Cqj7DBGXFvuAY5CGefNqXsisNzHskCRLFcdhFkgBiUTfw6CUNhT5RRj5",
  "key28": "2WbVMTPK9NNdcrH4jG4nNRzfzC8Rr2dr42NiJ9vZKBL6HvueYnQfJFyW2r8GUT1j3Bu3hythPAmjiv8Snd8KPEu1",
  "key29": "27GFmTTuj2UP2fNvV2jqENyy4ox7q6NqkbJXpPSD9cD7buwoQD5XZpHnTr9nj3LKELD2wfnxpTQfadH2vSMTvQZC",
  "key30": "5tE4689peq7yEgiWLRfHWVkKhHXyuFMpWDDnhF8x7GUrqKNaqKgq72fMtwECoqoammPGGpS9YLKxRV8XiTTHTLxj",
  "key31": "4Ep9SbycFtnZiaF25M2tpMxR11aFWbtTUWKrxpHQEmhUx7yPDM4oUwNvd3W3xJ8yDzmZni48tSCCMVYRy9JBiNQY",
  "key32": "2Q66GiGPkU1ee16yy8jJu9Vbda792zkNqAJvzze6p2bGZhwZnTj3y542EhvsmB76bHF77oWyiz21nZBK7vB8aZBb",
  "key33": "3Hj1N52NCtUf3qvmEk9zbgNS4FB9JLhRwGHoQDX8yUafSoavvsx2AeZpeyEqDxNLhwLkMr5V5JG8C2ibaJUM3JVB"
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
