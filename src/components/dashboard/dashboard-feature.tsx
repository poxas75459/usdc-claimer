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
    "4vLth4oThRhZJcq6C43Vi9UyvHCKy6G69LS3sBZV49qipT4EvoEPjjwqE1z7mDwFpQyXsEENdGxHRtuBw2Kis6rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHudiWXuKJs6JMgdTf7KaHNzzVbc2wiiY2qxGXBGyXJSWTU5rFzJVEJxQyHE36f6Hq8HhzWnoSqVN6dKBVKwafB",
  "key1": "5D3oJTEjCHnqtT5SKAVqwLginai3q1svqtJXqHM6rSv5gh6UKiy6YTsQGnFCTfuAGqDPQHqsYSGDMcFqye57KoTJ",
  "key2": "4CvBh8sReFdo8cwPxMjUJXd8edGPaBcDDE4QSkZRC8GNaf4zQuGTimn7xiRf4LU5U1YGny19uR27hAthrLVkgj9y",
  "key3": "23GqLdPGRFLmPMrerVMe6dPn9K3ZgP9SeQTnGhcyqbRXXQZUoJhQtucYgQVbi1W2APYS9VmcxNNBodNGHVU5gLtU",
  "key4": "26S8wAYfJqBzjwG7WH2EYngWaZKEoEsS2mSuw4jbEMWYwbAfkryZjSun6mNx63uYDAKWrU3soLMUMVZpY3YpFvmZ",
  "key5": "5Fp5uhZWrHQo47YFQyhzbLnUqCjpcCZFX4XmixKhVcrkv6pzsBs5uDkL8WH7jqrc2bUnvhhvGnyzdPo4R1vzT5ax",
  "key6": "mqppdCtSfPch7nocKjHwriHafN1dE64ApwyU86v4s4Wq65FiCWSxBrypLkZYd71RPWN96kfT2eaAnuXdwDAiXWB",
  "key7": "3o3gig6ThvYr3gRLFAh3BamZnXtHopSF2ceNFskb1WvTGBb6PQuoC2zexYqb59wme7GPL6TbCjUED7uzk3Ff6ZfV",
  "key8": "5LgSFUkpHS98KuGDv9qmwB6LNs3sA3AAagThugZrH6h7y8xYfwUNrbLf9t6ASsAhN5hrTDM65ixAzfNGWnz6LwFY",
  "key9": "2HtU2bMSbMeXmFujmtUho7xh6eUFq7shEiyH135T59suBdCao3tzhrwyka6do6jNN11C9hpZ8ScPMnYeYqMBJWG9",
  "key10": "v6Ac3DBRfgo46AksXPYicj51mT7Jh5BoCiroYPZTTcWiQdxmXCq5bgNDgwvYYk2r7p1DmQjKpZGzmbBNorsNbNn",
  "key11": "3pDY75T9eWA79FRT8YsdCEcVj4Rf2MTYJE199ner8gXQF86hHzy2Qz9QLVw1tE4aapfLmeTDk2TxQY8VsbL7XuQh",
  "key12": "2K1yfvtjHJhLxzt9yoNrBb6veBhHQJKtN1tJHbPY464yBifH6Td1gCp7fFtDx3ggWuzJrYnE1YpA6DehBFzb6YrN",
  "key13": "jjUirzWkeQ1D3EdEng5WMb8SeZV4sd8VnFDurQPrA8dkABVQ3g68ivSxLvbGtHumKzRAt435DtnR8K9wRYdjA28",
  "key14": "5jezKGXQeywBQsUiNMBxMSpjBE5v6UT1wRJRGod7xapBzYFQFHiPsQdDxWLSozhDStnHt1xs3aQzf1dWYcKKWiwk",
  "key15": "4FXcyMxeeuNKMxtLtjVnUCw97tBhZWZ6XmGJyqwiPEhnQCqzzpYLKtsw4SGssBF2oQGHqnzaorJEGzGswPcngkXv",
  "key16": "3vE7kAy83TRs4Vjo7NqrHA1jXJW7Jsfk6qPtgdvvX8SyQj6m92FLy1J8cWFuF6LgbQN77NHT7qSixsncCq6ceZSR",
  "key17": "2URW2Hj6S3ZaNxLXL42qiY96i5xyQ4VVddDzuLADX3pstwxhKYJ9VH3MMyjGfUDwuebVyNZ57w3NmCSW7u4tPWTF",
  "key18": "CqdYiTE3BBTo2gzbPVWyYwXVjVSKkfV34B8HqMDpMWZdRt2KTZtJc7gEmCB6xah4igMQS8F4aB7SSUa37uuBa8X",
  "key19": "4Rghk4gHdYTN9i4mL1vWTZBWb6kcvfy2Y3fvFfB1awgN391rpX9eeLFTGdT3osU4jJ3BVAsThK48nGs1ES2z8xX8",
  "key20": "4voM8JC3Y1FGAYzgw1WBySpJH1o6rTfU5QgEJgAJZXtTfV45hdNw4zWduUW7QfFmDAVDrbi1B8LtkXT12pwLb2xF",
  "key21": "5MApTwdpwibkpBSS5WDv1mbWiY6oGfgz7wL3hxWmPGEtHdmh3ZRnhJohJjaeHHvAjubJLQy18bx5mRW51g2smcXA",
  "key22": "myrLsRhG2NXWtoNLNNbhyJt4eVqdLNEaJumG4yG7qZL1QQ9NPuNEN8MQVMpugfQ1R65fYQDDJHwX8wp1sUCCwT9",
  "key23": "2z2NCZvUpfa1L7VNPvJEiUAbb1jgyw1u67N7eFrw1EcV7r6zX1BeUq8f8ANauUGqrk3PSfAVnqZ3Ar9VKBYALEQ8",
  "key24": "5uignNXythUYZhUXyYFLYXW3FyxhUdDA79p4xcWuLqDTBgwZdcrwaA3MGNuc3ZBEz2MAkj17VmeuTg2w1h3tkkp4",
  "key25": "3ovwKEUYCJTdKTiURGJggtE3a1M8YYkARGzVj7GBi67ey7iiy27qdvJaU95csEzGNRTuM5M3tbKvY7jaNbLduZG5",
  "key26": "HNFRisHJyMpaQeTHo6t6CSHQ9AQLh9nccpAr4rD9DsFhxzZUssYAJW6pkVwnEWLvY1kCmh6T2nemoLyHukJQDwK",
  "key27": "3mHs2E4dZFWwSK79bdvsfhfd49EGdKtFXYt1HffjpwT9VMoeCjjG13sk2abc54jYWpkp1F6BqnH4UV7huAtTsWKd",
  "key28": "4egvA2iBi8yFocA6ALSawKrWAgB1TagaHEdneKVJumr5AnFMns63oJD44oWnzGxdZBgJVWXbw9mVNg2ZwD8tYtSW",
  "key29": "29SvEnWRkmTMrosnCxm1DnecMTMmgmwszNcQ3cCJkQfjx2FFZG5TTLWtbYFA6DfMZxz3PLS9piBT2qeDpAaaXiBS",
  "key30": "8AZNANSFpiYGH5AVmzxaice1Ppocvn1XxLzmETHUs14ZD6nmfCzjngj7fb4wJghJd8Q8eYRuAhbUP9AGgbNfoDL",
  "key31": "2PNCufYJvc9HzZE1G1VcwhTkoFk9fo8P1MX8aoavYGMSfuJY2fMLsBRm5J1kPrqUuaYsxZtuJWmxP1M4hQwKYtwU",
  "key32": "C2q4oLyHm9ekixL1GnXyVkqQj2xNWNC4Zhcpe3dUD691fQnZfkgkzmzeVhTQBGsUa5Uai1BNjcfaY35t5ecHL9f",
  "key33": "3kXrARJcLbwCMzvKtuzTF79F4rdo5WXZJW8dByJbpMZQw9A45ADpWestDWaTD1SbjAhf8XSxnX8P3Pn5inb3vzAC"
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
