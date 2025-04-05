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
    "3a6gxjDcZjn3RCdx53tmP6wLZa5ABZuTQypnDqhSmUqZdtEv5L2yRiyoWH443zwuBBR1aqzbe9rqq4jDKVKwBqJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Yuzd1CiSTGXMQ3HkLnEYWa8fhXB7RFaXS1tLojVgMN338kPuUusnSMPhM1tSt1qLZz8C8UAQfh89x5adXmBAdy",
  "key1": "3FJjhiFGvMXRPHWB9ttdBEC8KUsEUZzjbVUgn3sVYE4ijFigXME4ZFt3E5rKGgnyMa9aM4ggrg8iLUaLKqPT8Ywo",
  "key2": "4VXnNTeS7k7TKC8Wgr4sjh4t8e8XdjeS7ba45QQYsnCTE2c84Yspx6Qjx4dSSbFUjfRvMGfQ2Bv2LgX3AJ4ChqqZ",
  "key3": "5zjnEG1ub4Mad3UoKXZFLTdCQu6c5KrCu2HrD1beAncgqtRYQt1XgtrrcZmHL12xWDBcMrwdbqZRotWSxX2Yo7Pv",
  "key4": "rR4dBhzJWmYyjJnBbnKniyE5co2ojDGHJqdn7WogGUR2C7hLFRBQEE6osd8w96uY7y4C3peFbQGz754kYrJ7BPe",
  "key5": "5jMUEneM5RabXAX7R6tMFNwn4Ht8Z58Q8R5U7HL7GvMgjzBqKuJcGjqAoZaBgXSK4nWBAPVvXuUMAjxNwPhmdz18",
  "key6": "2CwoipPrGQ7HjDdBuHBYJh8DX169vJsNChF1uAMAWL8dJDnMS4EFnNh9xthVUknpNaLWtxZvviq4cpcUMwyio6P5",
  "key7": "34wnwUbzPCEjP4Af19jykd8SRa9HuvkUUvyEf3e45jm5dUvY2yMbWZD8nySRDxzjSdDQF22p7j7NcMfuC3hUGZHg",
  "key8": "3igyVzmMGaT61KJ8ciRpWjjyRqUfyX5y3GWHSkxCmTdG62Ak1i5QLBXyBAjsSGdVET1gMdnKakgpQnFD4SN3Zogf",
  "key9": "2PwEMnfLYnRYFF2zpHbGhkDEVG5sHd2o8pkGGqWhiayyNJZqtj664XDs8Sg4fRLjb2hkyVs5b2UhmcWDuVi6zyRK",
  "key10": "HAE8aQ2FXKP8mjfMSb6UE8DHW2EJy79VJfqo5XVoGFuJ1rdDMKpwUVRf391YiQ5bMX6bS5gMxb1ppRT7kC3913X",
  "key11": "53kVTwUiyyvakwXM5imJgh2JVSLZrkA5Th2jXmRCvykmZdx4weqtC85bkDELzSs4XorRMNSijdgHAqvbqBDn2kCb",
  "key12": "2WKntFssAnbyxLUJzSKEt4SMjum7czUxNwz1rJKRXcWd5RpaVPTxqceQwZz5JdGdYnFy9CwWbJvhjNutHQ4WhXYx",
  "key13": "3Z3utQLSpbchWHJXzPnAARdrfGFxGR74r2pH2Bb5pWeUgzSmm7dyLTSYAMpet3ZFpmByQGyMHVXP7KoEFG8KSu31",
  "key14": "3VSzG5eK66c2x4tWuKiG7dZWKbY61UF9KBYygMNU5oJwza63SAmpUup6MJtq2T9sTPSthnxbEafZ54VmbxySTEm8",
  "key15": "4X9n5zaVx8cM848eaucJYNn2sywbouXbw8u9LN79n9T2Y2FEEcfVNMmK8yZqmASv1mqn6FPye1a9NRQaEpcJgAms",
  "key16": "46cAAaPQzCiGEevTwJF2osRLXDAwe5Woa3jyh66t3gRpzsqxnhdjPvahovFhGmmuXJ1MXtaWCR6rQBoWi2fAmxbY",
  "key17": "4G1PCpm6d9vmLE5BvWRQgNpDtFVFCuLn1dZv8VqpzijDuoAkVnHSbGn1xj6tHFf5iQWxorrDEounaBx68MTdoDQw",
  "key18": "54wMLAqE4NnwgE9J8PdTwvtQtRBVKqgmHWVwNTa1pSmT7d2DrGbvKJ2mEL9DvZTSFau466xS2sBron18wBXPL5Kj",
  "key19": "428dH16pMc6bWVGmzQ929S3owazMZmskG4KDsStmdb7tmENrhXer2f57XvC6CzdRJBahgVhvxTuP1dQ1pnKdUd5f",
  "key20": "5goTMXJPjGRLVJ7iHMvn4kUprBsBW3jwN4WpNxohsxjPkEJJjGTQU885zPebBPw721VUcBBhqARxqgwDivYFnnUL",
  "key21": "3UGeM121AonGKamc6v7CHRA5x9bXyEDCztqv76pTJLVbzyaPx6rWTXT4xQGiZ7VRcRijBqiRykhXMymdYjCuMkN4",
  "key22": "2qoREKqsmd6JyCaXtZAcYT7LqpthyCSs9s1RX5KLVV99zZaUcTEWKFwYPGNWwc84SSMTFmARk7Gyb4ChYQnUAio4",
  "key23": "xWWARP64AcLbw2mP2aX5ZDTv772PNyWra5cbygQmXvFY5dXrES7kB1N6EVmb941E41y19SxZdPrkBs3CRzYkM4q",
  "key24": "4RbVRtQdr6id2JFj22N7kPvMc6uenr4BrZoUvATQ8RS3U7BEgn85SsgREfrbch3SxNXvCwSNUk8qy9tdPeX18cmr",
  "key25": "rpstdJyjS6nBwr46TYTNzXS61BJAANrSELyBBPkCgqgLCt9hWPHXCTPba3WnFApztnEm2BuVswZpArpDNtjY5FL",
  "key26": "4spWo64kriCKZFCg2hdNZVyhXocWmm2ckVkvG3uedZV8iF2diNts8HsNCmEhro9mCtn3iAWdXapZX5fBkCWEskd",
  "key27": "2AMh46noKDxVYhK4TMVyXvBgfQqFDTPW5pZHQ1n1aqHHmPmzdZTJDx8GQp9MXuk1QgT2yi6VviW9FVGAko5iyYTX",
  "key28": "4de6e7KWAdD44D4iUKrrz3pvA7A3qwNdrbMjLdjpnJmcp6AapD9PtNLDvhimUV7CiBVUzUZj3kMBj6RVZWqX51nG",
  "key29": "5eBVVbzd58LpiCCrLLoCz7QeKfCyvmeuCRko8nrrTyM6Rax4HWSrwwgYL3ebyBXZsUNGy65DSYmBeXLJHe2XZ8nL"
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
