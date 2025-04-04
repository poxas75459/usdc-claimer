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
    "43iEbiUgUg9LvrTG4h1fkyW8vX7kjXVWRVuM7qfQjQk6f5TdhE7qhd8zHa2r65o28H9KDDFWNHn4wpFGY3ocAEgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbttQE7zA8JrBsxb5ZSnXkMtnF2RYMy9ZMjVm99iUBUrxFqQ1aLtUckXqEtZkXDb8Qt8xUp9gZ5LJ5W1Rj84oDk",
  "key1": "5uCEeHRxVBSxN8HuC4dj2fmGx8q28HM8yZVir7J9DZRMJ7yxGvcJffYSdEW28ktKByowd3Z2HR9u1uipU81K9Wty",
  "key2": "3FzC4jjczMWzLng6DGZJPxL3mrnNXSiVBRyJ3YXHFgngnooXkjr7HLqkTi6maKv36goRWVp8oFyAe6nTJmZSrScd",
  "key3": "5TXXCLdL7HXN3WGifAHT3E3NefqrYzizAQvCRqWfXUjtcEtW4WWB5tLnqTcmNT9ouuiwAxm5waMieJsQ2acBvCnx",
  "key4": "5mw9iASnBzH67JV72P2jKCpUzx4Mw44kp2wyPi4e8hrcG2zZadtU5Tq5zoGqMdoCQThiofreo637RKYNm9Z2kUSV",
  "key5": "2mogzXZDGpMN2qVPFYnzVPyAnK89AHwSHgAWtWapKd7zJmy2FHbZATCKKk17J4PogqFKHXyd6pkfq5p3QNpEvWKH",
  "key6": "jWUZ4RhxsmKB4NvyZAPKAGtF2R5AqZp8FuFx7Z5ipjvWE3MWmRyFppTfL7cPhnBXcuBjeSw1K7CjSkuBnNx1ucn",
  "key7": "4HvbpBmLtBGSz14eLzjGzR6NnpnJ9B6f9v2dBS4My59y5wz3gjsXYXL6hZ1kY8UEC5GheHysaTA6itbXFd6mz982",
  "key8": "rYqMFAewEbjaiE4xQMWKPZiCoLB1eKV1qXTvmNEyWKkZMkXEgomTxamWSiEyjWmPWDNW6GUk3xUqDX1Yja3q651",
  "key9": "2SrwzbEVNgeD5VUVhUJ7YdnyWTPUumWiHAVR1VyZuXQcuCiubt1GdGyxm1UUcsWVyErazH5HJQ4dWX2JJzJA2PhZ",
  "key10": "4wvh3TqYhFyEi9xAJCrw52d1HF299TeZnbjvwctdNYtD11Zs2SpQKBdnukXGAUFXZ99ZcUydV5Khf4jv35UGocNZ",
  "key11": "3JxaJaSn62Mhov18JJ7PgxBABxhYvEQJWHBnMej7oKpXRrQtj6FQx3HBKmmJzUMRG65JWQgipP1LTqZ6WDShakQ7",
  "key12": "oEjBkrHGos8WikZyiWs7wwMvpRjawRJAqEqo1DEs4B4Du3WnTNavc3SQ7ypt8S8J6d27cBTHZZxdGGfeydekd8y",
  "key13": "4dUYAuHq6357y4hjng2StfsaQQXLaEMUnbU8Dfzx3wupovbfRncjpUpJexopJpQjqiW9mVQNU51YzgepZn4TPJuD",
  "key14": "3SeEZ4WynGXWvZr1dyYu2sNx6MctEA2j8EjYtvUynPs7SEjfWj458dfdyqX97UxB7DSm7jPNoBeyhUxvR8E9SrcA",
  "key15": "25fLGhF8rSaYG87wTgALrbXv3yEYYUX7eaz5DQCwL8f6LtowTxHJkraZP1FEHUrUL4zBjn1o1NUcFuP37LyjNr4e",
  "key16": "2jGxiegxf6ciDmN6pvAQb32R9LxcKJ6Wc1RstSs8PFtv7Uy3jhNKpQA4ir2SNL7n9aLeKnqTGyAVaFij1tdCKbMh",
  "key17": "43yqBHkLzxSPa8qC5ecU5cysesg4DW3Wgutn3GMckDH3xdEdNKfTpiPuy9HQGvD3DatzYkEKonRdUzTDs9sHc2Ms",
  "key18": "3SniumVRg9kzNBwzDD5t4L5y39Div7D71MShmVBdn1nvdzASkgea6yttxtSPkXrQyti2fR8Q44Gq8xz9ZmwTR51T",
  "key19": "biTn16EiSdm1qCkbFYsAMa29ttScQEzu7qJgdi4oYfYsYH76iBigBkKufQetrwjunB5NBtCDUxk6cftky4xZ6QX",
  "key20": "5rkpa383vAFjKnYNCYWmRSV5JaxcSMdU2GrVnY2W4ADXSkUmBbcz4b921UCkDVfFKjy9sAmaD4RFyjNxcZPVQLsS",
  "key21": "2MuhjakD3m3XYYmrY2tDRg164Ac1PCu2H2vbNd1SG26jaAk8G1NNNznCf4N29Tk28WyQBweiNPZFSALGxA7r5KQC",
  "key22": "4kc9GaFSqhKhD54eWoAWj1tj3sZkWVF3A12g8VEAkrv9762QMotNCUgFyTJsBhEBH225re634sVS3DsaqhPs6eK6",
  "key23": "4ADdT2id4DVQM7AaA9ihdahoxCfmrRnGVGkQq2szqfwfjmaqhgsC8TcRAecJjyb16jQmpETHsFrTke7UpUMo6Zb1",
  "key24": "5c7MFguQAUhWBkpXUrmsLS5t9cgG5bkTrmLpCzF9cCQunhae16J7mXk3n1wwgM3hQYU1LvHewivqxrwEbidMbDLb",
  "key25": "F3YmEYXFLqHNiSmTx4Q7dt83Y3Bd4sFfWsfDjfwjgXLviroZgdLFUTsKQGeH1ckKFLdF1C48SMrMQwJwDD1rJRu",
  "key26": "2e9wHyx7mbzyuWHRsMXH42MgF4JY6U6J8JrSdnUxkuQV6UoZ3vaNswhXjs6ECPvY3ZnJ19HoqMbW6izHyuvBpnjU",
  "key27": "2jhUtuUi8JTJ5FqsHcu3R1tT6pEEokoqFXncLbvKdMESt99mQsaRqhr6cGLA9V4KcWWJbvmMSY8Bcfg2HkqKpiJ",
  "key28": "2NTgquBXeaNPpe2Sxrj2iP2KrWJdCJq4eZcfYHaSxdaAgXYYprR6JoSVD5JNrc8oty8doxkm8HdQSgnRcX5oo9Bk",
  "key29": "376hhHchAreuMFWdjcWi9rhG4j8zHS3NS7Jig7xKeRtAuwL1fJViQfNqsXKEiEJGmfRcfUYf1nKdemMqcQ9qefxc",
  "key30": "2jJic373zay8z8szf69xAWiSu8G2kRMyqyJTdWcTtFYA3qj8rJVuzU1ie6qLen3wzwWLF3ztggkd8HWHtcCHawuw",
  "key31": "4Gs8g795VkKyXoDkQPpbNwiPHcRVs7vmiyRkM62JHbKmwY2LAhNCLwn7pfeuLRRyVdhz6hEKmf5KzhSCZjL8h5hh",
  "key32": "5BmkV5ELAuqprJLBHacrLdHFSaGTPaRJf5uBDDiUJggLygknzXHHCFWDYTpb2WnfAN6nZKzpwPjfD7cvq21A7QCW"
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
