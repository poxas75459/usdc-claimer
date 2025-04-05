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
    "dQSscBKaW4RcWD4Yr2SCMEECxM6QcDMoDp3MfMQ7W3e6uzPQDVzLEPURuQRpPm2Nb3aGEmNoXvvSDzcedycZwK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6uybwjbT9uQDoFm1ByRJDM59WU8VjQnM3hogPMmqDHzt6bF5jGDRtF7QcNs3jm9j8nX3taaxQBqtCyTTXZ3X2s",
  "key1": "58kcT8oqK5mZuC2UQetETB6v4wnYGFBdDp2h924kdbG2GdkVMfa9NLnErTQkbXbirBUZN7arHGKTkvjR8Dhe9zqM",
  "key2": "4ShVDNzN23U3tpmruexGdGbNAmARhCUjCdGV3XBwKjmmSTs7U3VbK4vz5QjpfhHt16X92f2VX2GRpFiUCgT9xJr4",
  "key3": "4iZbcRFAVDUZ8VzVrQAuzYPxhuy4zvGAKzTtUK9Roz7NtgvApqQ4HKQiJZxZNLam9miTwixChpPQpxGcVw5VjiHQ",
  "key4": "3pjGnR15MHNAmwCipxHFYxSAjKJY8EzZLN8JSJgWQWjXSD7KKHLnT7WW5dY76LJf7rCCi2PfYi6QCzsW2pL5mgNc",
  "key5": "5kPbjqMjxJNbf7SeNSMcQxt1pzuwH8qTBHobgMi3H3fJnkGgbxYF8QMaG8cb9f7gHodm7GtUjqSv8PPhNqJCjTNv",
  "key6": "66qsp1qdB66Ki393XnWrEKXs6Z6REt1dZLc7ZN857eBmQdYoyvJX2zZGZQwtm1itkiH57rBcuhaWsioSsWrQVwm7",
  "key7": "5dmDmHZ7tZYsgvbyQWauU4rt6kENGAFxkgcLzUzNomdGvhdkK413UNVZNmCiocF9owH3J6jhzPAcSjyFLnZYK1Xp",
  "key8": "637WjSt1qFY9JL8bUyJJSVSnLQrkfTB3oQmYv8egDJ9PcfG8huGfLCzA5PNADzjeiJ5zmrJhjaTDzUHp1skrokkG",
  "key9": "2uvY6958bqMCcuxLZ2oUbYQKBtkgx6Q2EamTjDJTfhzRFppiHbdEvf6uzr6rCGoLn34vxjD2fawGA8QRxbh5LJE1",
  "key10": "5ZRBuS23orEV1wYvCxxiLA5EG3btbTKzW4KUkvsKK2xqiRr8KBLb71xdqyuKK9yB6iqxzA4YEYiMG5DMoYgQ5ba6",
  "key11": "5hC57wtzUqv5HYXwqNny18Vqzh3apwrjMwJtpBGyynDg2tkwKk1H9hSJFFGW4AaYpxjgSP4nAJrY46NiGSvgQ44Q",
  "key12": "Ezn64vbvm6MNkoqYVdsmJi5Tqb68JYkVFjctjY1PdEKNo1xkEr4ev8XciXWAWWcTaTsXdotPvRrejG53UHm5mNp",
  "key13": "HQx1RYEpbVuhQry5ufX6YLtLDsEr7TKJFjbmLj8oeafrmgLQFPLaY9YWkiiwjK6CTfyPTjJd6Lx4tjfq8gYYS6n",
  "key14": "24ctUKXYprqUaqeVv7hutG8iLzv1AmCyrrnwHNKGNCDYTV45dFfsWwEtd5rpupYzzKmZBxvgvY8nFmnvaJyYeBZD",
  "key15": "5x4eQChW3EG1GVwQrBkj9Lm6dbnuE81siSRMG74AtXqgUu2Qek2N1Q8wyHpjEJcJnXuz5Cg2j5MfwHGxuQV3XSMh",
  "key16": "25kio4L3FyK2hvkKbccfTBYqa85XmCdvVaymVRm6xSUAY4hvVWoXGBcy5dFxAra3ezBCdan9f324Waq7TDEER1wJ",
  "key17": "23vAGXvvsR4TvoVkeuBa6WruDnpm2zgKQxpUe57tdfxcA1BHRGQdyhznnUKVD4oALezEZynLi5hMVChx1KVzjtkT",
  "key18": "2a3ebVFvJngaKvzsB33P22rHiQkQD1ZZxTftysoTS7NPq3i82xmfyn6pccHPz6FqjugZekyFibDfKEEFKhKegkNi",
  "key19": "5RYH7d2ZJ8WFJ5cPdjpy6DK2U9JedrE3h7b3bpnU4b4s7Z7jf68awHivrvM5pMuXyLE1B4YCDiZaZZNFcovdbFE3",
  "key20": "5Eh3XhZTEFRXj2m1vFbGnt96FVqHAPRbQyM1DAHGiZGhvUhPintnQWiM8Z537pys6FC71eELqXqcEqcSKyHezSRV",
  "key21": "5Yh4GyJaBoaVE6DAnxYkhkhFHNRoxNCmupcCyhzmAfBm6zzeYdnSMy2JybvsQzTWruU7zvphHGGCFdUubX63jc9a",
  "key22": "481Kjrww9nZCtNzXQyvxzsBH8EqbtvEETKjZN6rnJdt7KnfEtzWWJ5C7xsBxHjASxBjods8x9iVofRjpbR7p2KVT",
  "key23": "4ELSz7vsKYx5XbwNKVobQd4JUu71mZGJwSdY6PsfrgbvYMdRYsLrwQJ7cQTPurHh4HLER9tnMEPZKpVTCQJQqqnt",
  "key24": "4YZDNuU5oDcFyBLdmMYLafX599nWBti4YrGTX59E25xLHmuPbvTUbwP2XeyCEFyL677A4g4WpE2SNbEG11mfTGWK",
  "key25": "5V5PJuY69WaPsPr7TUexRG2CbnpcWFCmX75sYZLkdZRHSFHnaoX4Q2QW9MirdT17VHRFDjcnJpT9AUiWHXDz2jLu",
  "key26": "5m2NdTVJvjiuoTc4b5MqVZveeYp3AFVL8VgYsMkA6BqtDWpwhhTKMcCzs7eYxNcAQu7o74kCbaVb3bpiMXFPeYf",
  "key27": "5VsLCjA3uHHJ5VoTH4iQDjJdY9S8zxWwJZKpSdHTvDMRDpEWnFqNwqn3q3iSscSjLbvrMnpzS72J9YrX5a2R4ocZ",
  "key28": "2d7cyeEWUx6NX499T7pLA8Kxd8cLMawJhskg8hd8xtRR6uGimRY763TVsP7oJvgCmdZJyHJvUMfj6sETgG6Fy7Ty",
  "key29": "3E9hHMC9GH2AeVcHDqEzvFYEWFH7jLbiAmFU7kLnyvmnn2gj1Jj3ujNZrZTPMnbUcLhkDN2iH3XkCw5TzubVGPwD",
  "key30": "22PhCjmXrGU76aJ3acN2favauEkg8H4AW8nvtqvu3yenaJFwzXMdFLBNuGHBvysbSpxvuAeg8FAxLfhCRK6VT4WR",
  "key31": "ZDXqdU8ibRE4vhoUrd8tjC2cEiHsqgwg2TyJCbVpdzMbau7TbdxKZGtRtbNZendAMgVmUqDEPvkpbJDMGczSkRq"
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
