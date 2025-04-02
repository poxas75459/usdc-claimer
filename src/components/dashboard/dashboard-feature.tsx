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
    "4datbC8ytBSV7gM38JDg2bnd5U7uuXL44eaGdNBEZYvopkSQdcpv8sXg911jCZd8AFVK5wKgCfomKNZToYUpzqwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vaP6cU4RUUN7wS8XouLKBhLQz3eN4gex2Ere7Bc4CPXF1sNQD6ZAiCyJn5bEStfmheX1pfuWBdzAVxNSVQjANQL",
  "key1": "3R7UE8hYin4zbiXZZCwoD4Q2Hi9kyCfB7LqLnhnKAa17YgY1X4wdoHariiScVdf85okPctGWis7qJTi9yA6y2CaP",
  "key2": "4kz8xZg4MizUdeySmT7zW8E9bS8wRt1iyQg8X8SebE9tzsxaCEirfHjpgimL4F9mSo649o3YrU1EhH39wfheUNr1",
  "key3": "BCHii2e151k48Gcu2L2pGgJCt3pCVbQbaYum1mtQmWJZmU9yknScQT6jxiycYZuQ5nDEUGeLPqTqZ5ucJT3zpSb",
  "key4": "2rxKGmRhRGpGaquJPcacBoX2YnKa4pvxZUt7yLtFPBZwSU95NPPq7Zhea8DsXPeNHcQcHzihkdyi1pYJM7fr5Ps6",
  "key5": "5nBryg4AVZFwXYJXKbHHzcr3JBvvHAWE2uqDWskXdxR9QsvZCDsjBBakKnEfMnZk8LrVdReD4XJ3bFUoowj2rLdj",
  "key6": "3dnHSv8vTZDv5bPqqKFVqBZycaGttsVLzqtwepFSn7hewAbAwMywBYtXe3AuQAGfV4GZAhbVzqfdsF9ojzT2k2R8",
  "key7": "4kkyC4g8VJk9wrdMEe9gVHA6YcFuy6DppxspdV1wXVBDqBARwaEEMuLAQG6HMboQHvm9MajjyEkJrWFuhx3GJnbg",
  "key8": "4K7Frdi8on46Aap8ECrymhrVWdZCwTAt6YeSwjfwbLR567rkinf47dy33NX4RKPcQ6g1Mdc22qgQyCUxj9H1Th7K",
  "key9": "5Ty4Wc5vfg9xFvSEf4ggYCXbTgfnyTztrnKm5jg2KPiUb5AVEaJJ3yiXkCZ3rBQuzFbahowx56jq6XLxxe6gn2sV",
  "key10": "5w8TyVnJ4yq7yMGEZUaVkPwLbS3kBFSAG4RB238uMe7PtvR1gtQYzwixdwJp35wf5oZT1sKhfHcAxstqVCfggypr",
  "key11": "4wHL9NaKGPy3pwUxvSmGuwDkn8NnKRgYmzCYYqzfQXkCd39D9aC34nGoDqDsNG3zG2uQEBYJUsPXPdu33vNoFJdC",
  "key12": "2o3z8fK55DNg8Bx836pv8dCzd28vZtqjMFbsTe16LVXBXrCm9JBaBN9LD5YstMb541UnvHWD2UJtpWqwqQDcfd1",
  "key13": "57uyuoFmzEq9A1iQdesBRgonEY9MZfzujpDXpF1VWjQqicWb1DbjQ23wdDck2CXpXPdkphqwSiiUnWSd3HmT2Gne",
  "key14": "5GuNkUjb7zVf1UZQKWntQwExqQpUp2zd3gGwGmmN53uS6JH1LJtaG122dfodnqPzrpe8H8GyyxyJJQDYZPjcvHub",
  "key15": "3a6JmSGAno6KUsgdWqBas5b1wvtD1vG7bppctWQRSxcGY1RzX7UCMfH8SLpCNVs9rn2MonprytMs5t6Z8GTnVgpv",
  "key16": "4TUM4W5pAoxj7XmkhPTrzCmsPgLcVTjki5sxavPKiJsvfBCgaD9XSUyYxj9WfbaP3FRGJKm5hCBeA5uNUrKDQmCB",
  "key17": "2hJcm6pGUKJuJh1rWetyHHVg7aRZgtSAYD4ss9bQBBFL8Suyaq3ba6d7A9ncoMURnyYiaJQnxaA74zMqirDJBBLf",
  "key18": "8vH9tM71wc86wou1sgEbXyFeEKheE6G6vbrLdWWspNKpznnkk7kFxGZe5SQiXJTCjoGjraDNMEJkvsKbEEmKKdK",
  "key19": "2MsAzFb5WiRAuHfEercX9P81Gph461rXQAeuTBT57dctqYufRQbdwp5Qvsojf9331koJ2BuvZfGy2NxoA6q5Fy1T",
  "key20": "5QY6r7hjtvQjkS5yb8pqDK3HBM3jNU58eWPzyPLZsiGf4NGaGQcTXAEBub4Kg76MZCWw6R7Y2PV7PhvxRjRVUima",
  "key21": "5qWNNuwddZWK6AnMTd8hxhkePTi8fCm49wJvRLJiKTceb28takbic5s9KvAeiMPXp9uGPYR2fd3XYzGf4pUt1tnf",
  "key22": "4Z33waJQ8PX1g9vWhbSdQdkE8svTWQXYBqpLcwp9D7gJwsemxRBLHXmpnxaH5PsCZ29gnEoHfpMGfzHSaK8nhzVT",
  "key23": "5Rw7s1H3daPuVaRaA48ktknteqf871HmxDHog7cF5qbUy5o67h5S9rUQ9V5EmFYuXHep1Xd9njwZWmHjYBKFMGaC",
  "key24": "3R2bVtqqoAMBPVrLusL4Y9jYnndomwenAMSLGkkscH3Wh6aJxhtCMFYprhTT5J6huSueCEvUyiTNqhq647vt1ogp"
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
