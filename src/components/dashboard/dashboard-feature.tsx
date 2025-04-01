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
    "4DYnQmhuvqw6izUVQhbRkKvmA6AMMo8B6h3C4oNhQX65HFwvfDHzAh4tKYa6wVfCGkxrhKtJXNMvndCTvAjZFncA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28J9dWpgyq6ZDsDXPPABrNRAKbCWe62pqchzyarezgT67pMohThSrRX2eWeXGLCHdXFJhdJ7uwpAisL3pqND7q7a",
  "key1": "dmgiHGURQAJpGQ3sd4zuw15hD6Gx6PUkT8Fn2jxVYKSN8ZmEYHfiktYvmYfBALVDx8BTyPYoQZjLDjJzyv9mvQ7",
  "key2": "48sSmSPCnkZJLUuMpUwaJCov1c5DGS3DggDMUUzkNayB6sanKwodAFPuXFiCnHDzMqYVDC1dg66oQw18goz1LZW3",
  "key3": "5pr8KsHpB5DaUqxhbH7mAoVnc7zpczUiRA8vjoJX94fDGXwsRc9PFX8u2ZVXwXx2UZJrhMEjgtAJ6ZvJNcvME9ms",
  "key4": "61gowVs9j41uW29DUafatSJJc7Ka3d33PaRPhdLFdDXfxqW1C7k1xeVRwXdCVnGXvz28t8xJjeJhYFUg71yL88bj",
  "key5": "4QjxcuKTL3kzEAhN2tgdmx5M7zGqZaCY9Wrsnk8QxGXvZBka6zwMPgWFXFriMaZvYYzv63mdgAxp6C5Roe26Dsh3",
  "key6": "4RnrCMWpT47rKjKBpwQ9gpwDEeTCxQ21HAYYPdGQSqCAVdrPH97QDw4mWpc8QCsryDD8rXdrNW2hSZibaRhc4Ex4",
  "key7": "hANPUMaVrS12SNp4id8YeGE7hNLG35Q5gLxE463VhwZgpxqfR35KcBfDDdskidcbNFh3wjUkjE9XbXKakdnTiT5",
  "key8": "4CDtuDCNL1icPWwLntYUjTipADRKnwQr4cFcRGaJhaKPK4CsUsnqibcjxNQdc3cEZxF5Xrtdd9eMqJXy17wGJMCY",
  "key9": "5UTKjmJuuKAgLNqTumbFJkaUa2N1UXx9RReUgZBdTWYJtmYxiHf3CvHVfeYp4EiP4CVeH3LLUx1U4BnQs6rC7Yqz",
  "key10": "3RENaZLLbBdE1SRNb3DDPmgHcyBR1LHQKHkcYeouvMkCUMPgxd4dJ7k7b34qFNc1FLzbzd8tW3ppzbai8dR9ETxP",
  "key11": "3X7otLbRRzh3DJyjPW23ZyrESGqrger9nEznyJVfUTXb1jjwBbNrLzSqCdy1g4W97AGh9r42fUCtmPkjzayk4EiE",
  "key12": "2C4DJV7rCkHaJiEQZuQ3TTDcw7ehcEaDH1raxy5aPN7eKW3wQNb5RMwtf5hmPaQPG7tomhNuSsYMHM7sTRRGSfCd",
  "key13": "DCCf1GCgYUVMfuJCuoWv8qSjR4oGqbBb4huxk7ZNYPMvjpNEGn7xTk9GMpjubsyG9h8PLoKsNX9d7bev3YJFh8J",
  "key14": "5MA8zsHvf9H3B2L8T1QRjyuUjgUP5NBBebCFCqWUqPtbsj8BjuhUFkmGQ8CwzT12TW6ReHsfsHjRLhcSqprhALcc",
  "key15": "4hq1uhwzxWTGXo9FRujNiMHJPaez548RppXERayGx42rkUAaqdVqWQ2wYoee2nXnPbey1dhYdnDyWwkqXwQeen8z",
  "key16": "5VRkMmwmP9pvo4oJukuHR2gSD4eLqUahauKsNoi2W2feSp7WmCJQQqckoayYR9ZU325Jn5ZThUEMhRKZyBz84ibn",
  "key17": "4ovbu6TzfQoNAArtuTX4wKvLo31fpNS8dYrXw3KhwJwcdXYsL3CR7JgJoY7HCpsBM8WwaPc4edkudn5rM4yhys7f",
  "key18": "2Q11kEMUwHZqwH9mxW8JpsH5XCB7mNYiiXE8z2ZNAb7aKcmSAVRJxLpgg5pmbccAwsD5G7TvcYWDehPaNaMwYqex",
  "key19": "rrQyxDUJLQSvqfjWpZr9q4Hb1mBeN2Fu5SjF2DW4YWC22MyeRZnHihYjVzdVzV2A1VkDpdghJGDTiba4aZBNxgf",
  "key20": "hr73kNfB1PFYrdjAAowdUmviiGAK8TpeAu5Fh2c2CeSM87FvuqvbizwBX6zZKtBYvs37KQ8RsK879yiyLRvm4q1",
  "key21": "AgC9EEm9v5sCWfbbYVDQNghRrzysug9vnBVe4k8PXWdh88uoSKXFRBkaKENw7a8DobqZJhhNGgC7Bo3MhyrbXQ7",
  "key22": "2ND87svr9WZHsKA8UCkFRcerksXazGLUVx7usBnsF8votwETzVttYWfTAed5bv9MJwDxQaNAagF7oUggNcbc4Vf4",
  "key23": "4Lf4oSwyJupfuLpcrWtnh86NiCU3xbVQSAgCdkr1EFmrng1KzKKLUNTEuYeSAATf2hBaotUuh2tMjdtmvxCScYyf",
  "key24": "2VpURiqpztsLrVwaL3fHjDLyWe3yL4Sz6DYerUNFse2BFnCukt5mjGpfZz5QXbnXguoiimFfXXMbKmRW99daVYBQ",
  "key25": "sGRRet8uk9aoTVi6kUdk4UuLg2HcvfYKGJfwEx9zah2KRnjpH6kr5cTJzvA4jSUZ8y669DWEc2swWS5g7GhAXUb",
  "key26": "3a6BjirwUddMT7BU2jAFwtK39wesQ4pfXkXYEc8yqJWTeLtZWuLonszWyzud2Mv613UbpbMmJgvSrEKhAo4g2fsy",
  "key27": "5mfH6QPmZ7gHxybexqjomLciLyquHe9UYc1Lurs5zRfMbabePDA45bWhz36Kz8k9tyjkeSYoX4xQxHB248GwHNZi",
  "key28": "3CEqRtLhdQJ3KBuJ7hQbFDvB4qbfSpTj2ngxKSkGATsCxaLbKZbeiA9o4FRk9xthNaLch6EABKobBUJaAe8exNMz",
  "key29": "5r4VLYA3L8wqv7FkjRGfjCwUQG8u78qRDfJqLgbBGHmY9wfkbi3JELEtNHm6s5uLwToTdp9bECZHoEF9sz4vNr5v",
  "key30": "4pz66gnbbkWdWDkjMTZzXdu1i6eH9xEvm9z3LEKs1dNXjU3z5v6iTgZT2rYgrsM92XxhRgSwkvAKekqRr3EbNTH8",
  "key31": "2TohwcEtvEYvvseC8e6s3BbzAaa2vCfexkyV5GxRtjjWGWsndaAMT6nfKjm8zxjHzcdvjkHXj7g4T3UtDvHRbem",
  "key32": "4VS9hTDTnWYcbKBrUFDzfCS841NNS49e655rQGJWQVnQTNSBnvKn9sTBWcHdo1JWMh1UrrQFBm1KvdHomCNSFSsa",
  "key33": "GbukH51awJqbKzSN1gS7TVAvu81tvi8TcxzRrtUSbd4KHg4pJoctef3m8HJ4t4K2F9sJCRJKSL5Zi1Vu3VLw3tq",
  "key34": "KJmoc3BjyKbxu4bKa5GfJisWuuqo8TUMK233hDnuzu6FysWLk2JNe66DyDf3V5CTw6gqNh2KV95DTbXdrUdP9C3",
  "key35": "58fqhFfm9AnNUHrEop1Li8R1JvdL7CZ8BBDrjpKCqx96RzcDLvwbG4QkLamJNs7PTm3QsGQ6c3vbji66AVDk9117",
  "key36": "43XUbjR3UBahhbUisbHCe8s8ZeRdsuKR1pZpmKTnWhHQraadG3Y5Ur2WVJ4gdbmLwXePd18uhoL28zK1HWq21ZHx",
  "key37": "3JcuWk3wksmwHaQ9vEkXrMEPZA3hyTaCN6ge5wy7zTSX1BGkycBE2T87os43JhDRVw6a2NmPofwrzayQvPNe8iWF",
  "key38": "4xANG1nmFs2qwsC3arxR3XFpJCbNU5rSv43iDkBHS1SPzX7PAkHpw29aF5ngzWxAs63gi8yPsAe857vqgYBWXav9",
  "key39": "58wxYhCXX6FMU295dd9DLEZHNYN8q4qPvRDiZZBRDm3VYz8NuPZdYTDwAUUjvEUAsTW4keRKUZy2FsBewVUxRUCG",
  "key40": "ECMEkuY7PmQC7GrfmQwGMp82G29mGmpMUNeSwW9yViUUa3BQwssxqNk63kha5EiNugSaAmxZD2Sr58rqpR3opt6",
  "key41": "5eFsZvAuQcXKw7gR2AHDqu5GyJUuC3pGDi67bj9STnUpWVuwEr1bbwnBaP1T9Qnc4zbGQDGJaUgogPzFeBsnwd2H",
  "key42": "4rYwLTWT1quJR95Fu5DNy86jxJCstj64M61obvzFtueSqhjDGkenLF5DMDvQYU3hyVAw847n9ytoESeY3wz9XNDF",
  "key43": "4zjEtwZSB3dcJJ4H6SBAVyeiJBxjQ4pRnrveWZjKeZXEN2tizSTfVAKvkqhqoqMrGhSEuEHGMjzvzGoT52sXQTtb",
  "key44": "5sczqZqSLRpSjqxdKD9XfAGwULRRiYkfw4fkaTFPSFGvRGThJgMjUJyyTGkrX4uVowpekvrtvvZ95v1unAVubxuj",
  "key45": "2RAcNte9y3UJXYRNw6w492oHBTeP2XnLRVudjtQC4zXnAYQ7LshSC5yfb3K4oQDudfseBAUrSp7M5J3s8Eeoo32z",
  "key46": "3C8wJb8FjNJEZUTENgv9t8HAVNfuAD2AebY9MmeZ99RYeNsFXifaVhymYwa3UmCJ2QtdumQRv92aZUSHJbQvcYFB",
  "key47": "22HJRPLEEahGT4R2T7yLmiB7TGZAwMhWnhfJwaZfGzEAgdhnFdsitowEmPKk8doHRjkVHNWi8uZ9r2oCEMWQRSaW",
  "key48": "3HtfvRZnbW6xkhmuZRXUwosMTgQqR7CKwsdrQK3gHASDX59kMQwXTAXRwBE25A5i9WKNsVMJTUiAfTHAMrbRAbgL"
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
