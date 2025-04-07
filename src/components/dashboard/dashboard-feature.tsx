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
    "5yi55hm4gzA6QT9UriseqxQQyoLuWJkyD8hTR7ZCf5wdVzC9YBZjw3gAmQvx5zpmQUBJcJvCSTrjoqCEpAU7rTZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPsN4uXPB2bgiuHUn48GDYM1RDv29sRt4YU2gS1i21CAdfhjzJnuagU3a5AcG71UXz4yndQpnbT7G2vbN7tK1gG",
  "key1": "22m631cUo2BrpwcyxgXAu7CVH91Qov2UVjv3q6voDLXmjg3bBMdUwvzzeYxAYAuKXEtZBtxXMNrBm7ofPhWMbr5g",
  "key2": "4U97r6HhfnMKdXLYq6RNMs4dqwuSahLRxu56BByipgTpyoaCtEUh9ozLvaunToCMEHYLeXV4dp6MfQ31SovLhy1Q",
  "key3": "2wggxSmXtoLeuQZqPPkJoDNRKBYjfKQQ4LZiaS7W4sfJwxZEomGb21tggKcsSwTxXvQwdZvt6Tzf4AtyqURfAbnL",
  "key4": "ifshiAD4J5n1yYQkh97ZMGPD3eqMoacDCoYFUootaxxGYAq1YEFz4EXVwLWwmSiZuPkResMe1TvozUciFUjCeJ7",
  "key5": "4jgWHHkDEvxuZ6fgFwEnZ34qFHwME1cnkbHxmP3xJMsYq2tUXaRyCaknuEiqu1qGwnehY2kzWNCVqf2FL1Hq2Nno",
  "key6": "3Z6cMPyNhAt7sskdQovwQHJWZnixe8GmUQusTABW7rKyx5EXoGTLnUH3QxLvjEpHfRvtLMyZejPbUrzCneQ5ZbpQ",
  "key7": "3wQ8oT89L2RP77atfPBorHJA6fdVUejioet78JWUZFGdeCVdvv5yza2uNtVH7ZhDQXZCbVYcfUJHELKcQtHUdL5s",
  "key8": "2G5PWpkT71TuXsRLb3TZ9w6wLyN1Z2nJza3jxJi6PXc1zhhoB9VJyzZ8vieqgnFsXAksmVskVMRnkAEmwj3i2nFX",
  "key9": "k83ctgWYpuWJWHdejL7omj2y1FGipkanACStEHiAgESb3gF588GaxhUXYqpzoJXSRKe8uPNxrocJb1SzJqFdi5S",
  "key10": "25LrQQwXrsarydhqYbjZiGxvmzdsBmcetaEf6r5Cr1tvnegKg1BtNbnmkhXYcPUEnQe1gBvGhXwjJvc74Ccg7G9z",
  "key11": "3yL9JWvfaJ4uj77Ebd6fGjFAWtWbQ3qPgsayE9vDfbKi5kRY96aC346eBwJRY4H4jc7hKmkDf46JNwPb5SgKphDP",
  "key12": "2ky6v5HeAKComzrgyWHcgH1KaqWWpwvbxR143jZdY6AwS8Xckv6harJGiuWF7EH8VLqTrxtdD1HE3CPBWhaLuQNf",
  "key13": "ys7s7ENbx4vU7tS4wxoazYqtYfmj4gvqtTsxvgHA41LLPeopCB9Hir1X9HToeFQ8vGdrvLSQVq499bDjHbVzZVg",
  "key14": "4pKRZCnzcNyLnmuJDZa5jXfY1aAvALn2g2yTRBCUm7ZVY7o1irxXKMiZK17DaD4Cpv2CqdsCMYSeZHPU2LAi2WbZ",
  "key15": "5qgdsewGbgQtjQFwHkpEttc9ktcFh9UzERK7GUXwnaHWW62sHBHY8QE35vpaGUcGVQJxWVmfu6BEWyqc7wTJU6uq",
  "key16": "4RNFj5WERtqLMjvRonVE64D7Enyryy4YxmfWBtKVetN9rS8hnjGqDnesLYwJe3wZYbNJzbs6kRDDXWRaqhUUKYWr",
  "key17": "327p2VjLEhDi2FEeVRvjfc2CdUp1XbkVV5xsAmamfwzZvTLenWxoXLwfuz9AaEnhTN6wkLNjd3sQ59DiyFWLhkM3",
  "key18": "2dL9g7ohxUC7ocxACSCKoXwn8VLhvcjSPYTUciMqudWz3z8JUjofpg7mQGgRN4TVLEW39432UZTX8PeC7CWBxLXY",
  "key19": "34ukVa2WPG2Lo2xpTr21hZ96nXaz4Q44Q5Ca3F7Nv6VGpApshk6RLTmWJ65nJBJQAHGkTpCW2jxoayeL5TAWiV4w",
  "key20": "61XLhh8Jjs2ZBdL22eFSjSRb7pNNMomKJ6Jn37pGkZJzdMzP4HqbJxDVvrbPH87eidFHaVQnchcp14LKsyjSY1R5",
  "key21": "D3BZE9RVBGEihMect4b12eSyoPHaVo68g1KYfK9EKCgayZRj7nZGEqUnH3K71ghUzxUsdHNeyfsLZ9sA7ubrsQU",
  "key22": "2M5fVmQtShhCAdViEKpbE4wZunnj8qsTkZbfSFFBsULY3jydPE7NqoCfRroj8gv7FmnQbJqWMAxv1W7cZcK9sein",
  "key23": "hhRuMUFBHsbhXNziVaPLwCRF3tmJjHezkSJ2vUcMCSKCPB7sDiz1zaXaSichgMC7FTafZGzf9au9ZMGhDSSyDnx",
  "key24": "5DcMLTk7VNNfNm3PZhCyTGbmSdamjnHGudzesoaaxBYvQKsp994bTbHjDvCspSHAAtxvZZDfSZz8iyiGrZju7yzu",
  "key25": "3g9m56b551FxFa1rpgNq4yYkqaWxSu5e5guaeG5Vou1wbQPJLrmSJvPJ81veVRPpuf5G1XSLhWx23JGjzB2TwWwF",
  "key26": "5Q6xKFEwZTqYRjKACKL2jtBL3r8eWWMMWKqPEBb47ZyBBD1nkZHGkHyXiyh6vpDPbKmqXNpqaSvsvNDQvgr4iW6",
  "key27": "3KG7ZCCi8J6VDfudCKbtCdTyWKwELSXoY8ghmPwrTiKokL2iQkSon26oVrXnfrNjo9n6ufM2n15ELJhrms7yUPLF",
  "key28": "4XvBF4wBBEMfDz77ikEDzueYnHGn1dUs3BjV7UJy1gcpGGx1M76zbKjRW1GXg8GcgvqAmK7USKTYmQ6sHCmoshen"
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
