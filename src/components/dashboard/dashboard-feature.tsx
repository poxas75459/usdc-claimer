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
    "4as7kwnb68phpcW2189hzg768UQTGQCCvh4pvFpGHw21KLfi1C5UH4Ypc7iWw9vZ9hUp17SUope4WyqtsBnFMkcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCG3dwpjg4awLXpomtRhyf7axNnz6acKbbnu6HhMKoQMMW6wXwvFicQ4H3iF6NQqbjNMZCEgPfNdiNknW1rdYHw",
  "key1": "7AkU84iL9Lg598sUtq2boXXWoeQbn9u6guHkWEVricYRxkvuawCRyeTjmLG7JYPCnqc9Me9LtWu8yueC9aGNeB4",
  "key2": "8oKPaGzXi119G6mKussRtbctTuhWSdoh5mEnM4BBFCPHkyqDooJ6pNzVmoQWfyFKKj1UqBWKonwKTwHNTTBgfz1",
  "key3": "39MNXmvC1yGjxJsTnBzfziUewfvUixpe9n4iYao1YwKeW6jFXMiv8YUjcGrzLrVcyp7YZCVXUYAuBcvo159f7KP5",
  "key4": "2eHJHr9p5oizZyNv4yCjzMST2syXfwVGMJKFVdcUgTKArmFyq2jX5sXQqpxBdeopahVVjjefjuWZuPPFncgDdpeA",
  "key5": "PcWnXkvCbz7c7m8kMMNbx5Tpwair8yuLnAP32tFGKKBYbU4j9asnNeFUpp42a78Paeq91Fjq4bQhvMqs6jDEgaj",
  "key6": "52potRDBCzh3DTz1wL2He7bDyQJQ6pDbqbvYmi9d4T7sYnRnv6BgtjFWGtZBSnRU7CCJgYkctHNDtyKvw7kycxsF",
  "key7": "2NMHcn7xh6YopW7Z5AseJ32f5oYimcHLVETNUdjWrZ82LPvpWAxZtgjY5L6JhZh7NeV2TRNZT1LJdhrNFWk2BDDm",
  "key8": "43x4CWs4diVDb4hSKQcNaThy5ShSxEog64APj1bTumKcRdzey6GL6k1svGZETwYBQh5ezgBDXTLSKfNoFwDCAune",
  "key9": "3GSDJnx4FzgZcNU5wcHERYsDbZjfS9sztaAdC3vJZjpjJQE5vi6MySbtGA8rvt3a5wJq3j7QNBJCa76vA13HSYqi",
  "key10": "4TazUZe4gDZN8wBGmbhraGTHHiY7sdb9omuR3SugvgfJ2EAbodmzZcERqpMD6rqBSPc1HiLjndx4ypDitm5J9ffp",
  "key11": "3sxVy12Hz51rA3VfroAczxAqdccFjojmDjEzZvSKtMD4LdyF9vp17ayUe4h8wEzaedLmbxB9gpBqL7tgwdHNxwbK",
  "key12": "5cVD1eT63mFX5KyuHJXdsaBAWnyRGctYKGQsUFuqTehjJnbJUNWaoZjZECA38jJze6u6vViULsnCxC6JsxqhNQMG",
  "key13": "45ADc9xYUy993XL8hNQJi4ruTrQHMwx6qfgta9fo796s2iGkDZjd94goMucPdw3J5zbb2NUfe7po47JLs1jr2s12",
  "key14": "4oYuxN9Zm5MJLLNcpo4x5K2Fk6V39iMQn1MygsMrucYV3ppYebLXyj6w4DThpCYGSg1hthMbAVYXvyJsoUMixLZt",
  "key15": "4P7B1CY7rYArN6jds6c9oAMw8eKUweEzggb29quBGyKp9S3r5iRyzVeNqNdmXmguLN2dRB7ncLzr9WgFr65bJNX",
  "key16": "3zURC3zvLdGD51Kb6pdG7ivBVSfnbSQv9V1h2wHK7xXqsKbKq8jrtL32ijU7MPHq45EhoRcXiFUJ1PKfwxtdFgu",
  "key17": "2mKx8RwrPhnvQ2qisykP4c2Gszw747nvRRH3UU3cSF5wDACewFWY4D6DQmd6n4QnxhCE6WGG5q4nb3nbDwXvsJHQ",
  "key18": "46BmLNhTfQJgcWLWW7ghCLVMprBpRsT9Yo8y5ZuXhXP7KhpHMUXNUWJfSF775KEgrD1tpaeKBEaQ9LDkiSJMXg3e",
  "key19": "2LYx7SNWSDTCob6cJ7UCUhDfmuHQSabxapwAgte8V5s1vLLKFAqGcu2J5rfMsrH9Tv6XdE3qTazEqcDm4AhqLJvp",
  "key20": "5PMQfD3ZzyLDJrmhr8MTm9DLyBVPtU8EX66dfxaNDgpWpCk3SR74z6ieabiKHDMYwXYS6HSaFV9zURy5TU9fQjes",
  "key21": "3dyRexLDkJUUsp6re49s4EevnThYwnKUYBi19yufpDU4uQwVuiDqrYF4GPdcn2MQHacTnqRQ1YUV9ixoCbdf4XAv",
  "key22": "FRTuLqQ9wfyV9VWNJXVo2WDG8rTx52ZMRYMGnkUS4xGT1fnaKQPTorn859Vaamsuvojqa8VXZMC8WKXJFX1yAFT",
  "key23": "2J1ewuQpKs2TNCqh37pGuL33t7KgVVwdJR7a9XG5ruhiKTEKq7EZwu8hzQidQrTYuFaZj7gy9J1G1iH6iuWgn6Kz",
  "key24": "4xShdbYBjpZUKrHT565oxjmW6DXN61QzsuSWwbho2Ra89dYnuNauaoL9arEEzwvG2yXZrDfaAjNS23oGYQNved8u"
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
