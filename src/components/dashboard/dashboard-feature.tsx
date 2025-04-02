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
    "4qR5LC7sUdSUFg2HPvdxjuRRNoe9XASKeNPBDmmhvv9tYGc9FgvMiFAgb87Vm2CrXP1wy41QMM92nAk5enpExEJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVhAnMcSEwHfAn6km2FHBquTg5AS3YRAmFbdDLMgYwnKFPzE15WuixTzjrXtM1AUbe4oLExTbz1hZtxcjNaA6qs",
  "key1": "5XYig7NPkcJrttdeVBf1auhUUq9S8awCKy1WTzh4H3LBGsibug1UkRGymo7yCE8RmYQ9as2jWzcwkcMoG2eZwcZK",
  "key2": "5xjUb6RX2QLL5HUK3fPTej939bEU8UwFgcQ26SpusoUkSngqufPfDfZuqztawZqeLJ6vCR99ArvT2QTndKYzVZSr",
  "key3": "T3g9gty3XVxfND4GBZmLV38nzYxgvFbaeLvL8Z1siCamqYfahggAnnJ1wcJkBbJ6hE8hJCovs3ML1iihQ2FksKu",
  "key4": "51ivnNov7pZLViH67kfJJzgW5R2MHpC5DpV3gsiqGFrr6XTaw6uq6DCJbiEMw4amqWzdiBnbN3fvfV74rqjAvpUi",
  "key5": "4YSrJ46gspPvHeuR6S3RiSEi5nYmyS7FWVe9UsB4B9qkvtb3jLNadWNQQxNZ4VSBkCpD5gMYg3jsHkTe1qrUoJvx",
  "key6": "X3kd148qzTHJfmk1BoefZ3nrZp7fM25xSpPM9C8R5UHuxA4N7WMn16NW8EKWzo9cCtSyLEz6EuDtDEvNtdSXMWE",
  "key7": "4jZkx8RZ7UYL2iNScc5Gd49kLa4JJs59mdoSGkjsJDNU92z3zr4g91raugiNTjZkqvRNzPHziYRKmhGRKZV5VSDs",
  "key8": "2M1zv1tJyGApQvQbq6zYkuxAV9zH2BEMd2iuZ7xv7wrXDqRUt5ic3aQowyW6q1V1fm7j6UhkfpEKtDG8cxTeQ1NY",
  "key9": "3duAHy28BqA4Q15nFiG4mZLu56CEwkXRyKzqBRWoBfgdYgUnD5DFjjcWQyrAZuSNgQDGpnDqxzDm3RpzeSGmFoDF",
  "key10": "3DQsBeXVtDbyK4Rx6TD1YFqnXLuugiFdvNhdLsopr1aaKF6mfKvtXThuxf4yT3quGUKsjwqYKyLXs2uw1X6Semrb",
  "key11": "5QVichoaKsWPeDDjW6TZPTTUoFTMgk9oyzdx9eqhv1AAgHALDaLRiWCzUbNcUUGcvoSPi6BoJdYuyWnQqv5zjCJk",
  "key12": "2nTpLkjF7cxmPGzrLwmm1uznMLdQV9a13XehyHeDM4HykJvj26wCi6beV7PxkMyswDbkbQN71LXTqyWvXho2G5eW",
  "key13": "FTWxY8Sc3n8V9MWkyGqtu4DnyjbYXJfPh3Vq4hw2DnvcPTMifRjnro8aCmi7ZmgWvMwDVyW1yD9LnBCBhth6A1v",
  "key14": "2X8widcihXWZZLqZiC3D1BhfNghqBwfC8CNfM1Hwjwg6MGkTzRp1zHAJvrCh9bQP2tAD2HHsRZosxiM9DZP2Kdr8",
  "key15": "5GbgX7ELn5QeT6rnK2Sn88L4fH3bCzhR6RPtf9G4P1qHsHreHP7Mg1yX8DDmL1sfnzQDxRMgz1r66pQ6oLY8FzpK",
  "key16": "34qSy154SFVXFMBNuVza6VL6wXuXB5pQ3yMfzomp27jbnSiQbs2rSfJRyqhF8L6aoZ73BnNPg3D9Ewt5tqhPWqcU",
  "key17": "4de6UwoFLPgw61AE6gDx6R7x6ohSmNkRoZRvvQKbZK3kp3mRUj2W7J9bwX8iQbuU6hq2n5YCAWCQfZAuWsaUu471",
  "key18": "5AjxEJjzgqHi1Se2GaYtv42aBj62BP1cNRnd3meEYA8LCXuiBQAFz6Gv5j2BESLWn99YLtHCKUfqgKve5gujRJWh",
  "key19": "88Saxpb7B8pQTXXU89yUDoE7rF5w8NsCZdHFKbcYomXTt6DNK7VmAZr17gmvMedNi8bYidLshzwVFC73KUa7Lme",
  "key20": "2U2oBnkpUZtopXD53EuZuCzSz77NMT2CgcBkqrA2eoW8sfXrMfpKutsAufCPxqTKQqBENY5gyhdsPcKei8cGRLVp",
  "key21": "43dMdP1QG8LAbvZdtH71BDzpuoN78hbjJYvnagunWTQTWHwWQBeXw7ipWyuu2xpqSvwRi3XgC6sW5jNvxceyHX5Z",
  "key22": "38VrMrL1Y2FZRPjFAdTfecH6f1qtv6BfpLyAGrjXejz1gTfXruEf6A826nssedx5nkxXBHgygcqio4Zm3wQ7aVwe",
  "key23": "67TTLrDb3ao93jajGx4pHjmS2cunAFHcxmLLqNxnmMtS9h2Ptbk7r351ybaG7jGSdnqHZC5eqBpf8pgnYrH8PMs",
  "key24": "2FeAzWwD7NHhXrYX7By6dBWVzZZWrfppARHzMC4GoBiz831gT5bznJgXxZFiAUCbtPFDVkCtywkxvwjwQ7spkvHE",
  "key25": "4KoQLmZxpbKAYsXEF6Hc514ZGGCedtUhrQnCNjssqWSXkP95YLCMQR1DR4zkBB2LK8ezYGYrzmZWcDAkC4S6QJSJ",
  "key26": "5Ubh27zphWgVB6gQtfiZQuWMZajW1MRZxZQNcViog3XLMevW3bPpBoQMkxEVpvoxXVXMwNHUWwPfAnewUsJ8UEgA",
  "key27": "5q7XNe5h9h99GW1UXpoajJ6MHaYCEbiddVHG1pEina6XM8XLBcXN6e4mUBCEMqgPjVsnAN92fUhsXajLxn8HZx3j",
  "key28": "3vdGLYGCK8ciWZJN31Jr3BZArNbHJC1URp4uPvKMrRPNaJcEKQ4hyb35mr5EAcubGLfHdcuWemGi6gU41EHY3MUn"
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
