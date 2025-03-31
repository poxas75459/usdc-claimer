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
    "4k9EUmP7BgjZfv4FnJ9k5o1cQ7r2nQQMFBvy4k7wtJw4xVYYLZRmyBps2b12Gmzd9ANxsdMQ2CeuWwTyynzLC9ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oPbZjXRCh5dc2cUcgVwTMf7kJWA97c4QsE3FPtgLdo2RY5N2g9CWtfiU5WR7wxAkQB3MEoXHtDBPKLjEYNYmrUp",
  "key1": "48uWzSLsgtU7SZyHZaDMoA3QwuzNnDw16RZZWzHy87iFsT3pDkhfdGywszT3L98tprMty2AmrgZbx3cfMhRVb2VH",
  "key2": "4xtRuMDKfiNEN3AVJXGVynzkHp5h4fy4vQxoiZs7qmTRaP2SWX7Fa8uUQ6dCkqHxFzjWAkwd2o6m2PRAsugcVuHC",
  "key3": "x599PPq6poZMhN9kGXRgZzt6Mh3JMg4qx4q7j4ECrNVihwbwtKd9hwuvSSggXY3vhjuEU3PTLe9SVptstC62vHp",
  "key4": "2DSDh3HSzypSS8jtmMkt2VSX1y4ftUXhkNBa51wNevPFM3KNsKzjfz9uynDfggKyQepnHJyUXc1PWdZfoYpsRBvb",
  "key5": "LupfARsyYj836dv7C3SV4HmCqkQ2DUfpcz1w8x1DrUhwFxAr3eCE5dL8k8vmHMB5sE5gaQ3rPYLJpaE7ZBagf8i",
  "key6": "2JK3dY5ggUwYqi1fECsjtdW7idRG4FhbASxxu56xwMBw9ZgPQqTcUD85fZpAVG6e96FJLLLMjMkwaRZAoi5wSjSH",
  "key7": "25Sh2SjSi8m7QYZVjWPZWQvr8qcujyYqpeJjj6yyaAawygY175q9HutzP9DEEeeGYPse15t6b5LDhqpjUc1zqRcL",
  "key8": "4yZ6444qzq872nAefsf6UYwowhDCHf5KLXf5P7gPFsQysfnj8qHjXwjPTywPDxhsL1aYc1WHwiKeRsfZ53XoELhM",
  "key9": "4tm38uQD4R31eEoVueLeGAhTp2LxaAC2zGdCqfQKW7wRrVk6EMRjtc8v7UwChThqcXuGjyAEHCWXdbFD93ECWHkD",
  "key10": "4foN8kPXckyizFSEG9jcVwUT8J7Kvu9cRKy37WG4ppg6Wx8EMhEYnBAnYLuZvNLbkPiX8dS3znPQdsJQF1FTC1vP",
  "key11": "5A8p7zNriV2a84ZgGPGEDtWLSHUNBgmjX5GBufFrxGX3BmqHFQkUfWWK4gqD6PpZwTRfsEvdwyQ9JxukBvs7D2LM",
  "key12": "3L78DswJLFPvbzQMrdrNuu44kq1SwdNmfdV17ngGZHpUdzXzjjeLXtr3LCczvLEPAgpbGaRsBu3NU6AbX4KpxUzc",
  "key13": "5KrupU6Aa2UK4FnrpgkiWXxDh6LZs3k74om9jf4TNAztTtJtfxrpPkA4nS9F9aGc7fYjmrrmCsiyBWvT856GadpU",
  "key14": "CBQurUACKYjUhUuur69HZFXRXCw1Pz4TqbYtnJE9ig34zzZWfEgUvt45uTKdLtCgatAREEQ9DueH9WsJjtvfuz2",
  "key15": "5y2csoqm9pyV1WFravd3obi1v8JHHJQTMizD2UHugsisjSF97WRWGfehemaNBfYzSysBKeL5CvtB5iimM7LHP1H9",
  "key16": "YnN8b2NpZLQ1sUwFxSNZj61wGxtzHyJqUyL37Cc9jehtJzEu278ASFoCku88TRm5N6pMLbxVrJSmJEJCmyTW9Wq",
  "key17": "4B7tLTivgZPk7WwvabX8vdW7z7eXBZXgALw8dWusxUtWf6dEZ1xtLDP2awTiaCnGVxEChFNfRifLVVgvK8ErXThT",
  "key18": "2cvb58eTdHy6SK8Dz6V1c1AUs6Bt646zgGGgJ8xPYDhJHQANExjbu72rg7aum6jSTwrnuZLuitoMqB4uhSfWL5bC",
  "key19": "3qkM6RoV4KouWKJdTcEaJpVoFaHvV9rMJkPQ8BAKaEZuJ59foxGsLswu8QhFE6hbKvAxBxLjPn72pRFBSsQfWxH8",
  "key20": "Tj6WaSKafnqoeak34gNdVR6fGofKC13svjxX7BZuZXt4EdEW5kzAjGsfN2n3RNaqLMzVHismyiLSxiGv16gGMuU",
  "key21": "2qAJqwvKg4aGYPkPNPFErB3ShNLZCH43UN97vQKMYA4ecGAku7s85fiQ9RR4qkB9rZfYFv4TJfnZWWcM2ax2CuEk",
  "key22": "4adNvuxj7j8LrMiY2PREj3nWTV1GVrert62fEuc3oosP37kDTNKmG16hZ7vq6tsLs6uvj9ASGT8Ngxh7T9V5KPKj",
  "key23": "2L3cGPwVtLhLKaNFzeoLpLDhWWH9t4qKfsXvW4fjXf72RqYgYzPXZYi5jYuT5ecBKS2b8rG6V7FxcevRD65ohmHa",
  "key24": "3Bc3WxyowsFAQExpG9jdQzSRLgr9DVHN7Y8ZBHXwACdTAPzZAMscYrxEMFa9Cd5chgyh8abnhV6g2FeypGXeGgV",
  "key25": "RTi86kUfCM2rr6JXoYChU46SVo55uQXmKJbLBa5L6ndCwF9PbYq4nyUDAdX5VYNc6BEddQYBR4GrJCqtdkCzjnE"
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
