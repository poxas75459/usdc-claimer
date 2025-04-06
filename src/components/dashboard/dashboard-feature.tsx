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
    "2yE7RZBK2sUt1fXkoTWDpXfUWAvdP4bUCNghBjv6n1JZSr1uunPMVQxHcufrV2wh5P7JNGdyRCAx3QkguCJWLKnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2JjdeFNwLYgXfXei7Fd6FNcb8JYa9eq1TKDQaJvYTM8KtcnvgWk6amq62uRwryh1TgiREx5LJQVhHVsNeS45kJ",
  "key1": "tCa4gKYx8RywfmdVYJt5Hc1YS4CkpZun9ukStK5U5YtS3JY7iMccJuMVx5RWjh91dw4tGaR8XdqKJWPuEwj9kQc",
  "key2": "2dqqFNxXvaJVvCe44MmpnwVRZptgPMtUdLprR7V3yd2wbR4rCdfgGtDt44ynZjR9CpoTvcqhkRyaJXidCfHnZa27",
  "key3": "3jdpT8QqBB8Y1kVxuvkCeZ4nozrteS4uA1vsXMjW9hUg4nFDvRTHJWMpAHaYKyoyZ63rrXfiS2Jo7NsYiwgriWJr",
  "key4": "4YGk9abfYJJpqpRGTLiZW6JamMFXWPb4YFTStyTVkTM5sNbEr6qH4VaN4QFaZ4NdBJ1LLF9bQiSEJwdywmb2PRKf",
  "key5": "3cvmLV6jEfE42ZSf9gANKp1hLwwZk7bQeGaaFoCKNGhCVkzZcwvZo6dajvQ8hME1zJY19hBWiZ5KuGcj42K6BeZM",
  "key6": "5re2VDGBSfuWv9N7ZQ6mNWZEMk5Jt5RPgjZBJ9uE7rRVw51Fyvz2anUjiA71aqZ6yQusPEkGDjQMECinKeSYXWYP",
  "key7": "4chFyS4E1tSe1NVx9VYeBqnU5X3vgS8khKLGVDZ769v2LBsgUscwLM85Kbyowk9zKEDqPNDUQ7mdYhM2kNzV17qY",
  "key8": "5K4cBHSrLc2V27zhb72fWjpX5PQp8S3Jwr5TkGwpaU2uUbF6UnzH3o7rGPxfdz89xQcJ8tNUqwYNGvaLPXi2TCqq",
  "key9": "58aSKy5T6aMQpZxyyDiPBwVN3LZSSGEr8dWphXidNrjtc29a6NDwxdZVbAbkVa9nKT7oUYfehxixq2YC6sxw1UzH",
  "key10": "5i9gsUkpN9fvwYbSY5b3sBxhP3UiEzZCGFW2yYXiLoXSw5XTBV1mZduLwt5TV14CtGDGux671tAFqSSLRetVJAeX",
  "key11": "2z6oso8ZMH8wc6qG8rFFRUgHMnKw4ZpcrMv88FmKAe57B9DMfnF9Q1kM1ePEPvAS8UHxKdQYFaxbcGtP2ArYJgdb",
  "key12": "5qQkrRmrkZxAbuRywStG8NpS2WVqVXfwViuzCjEy3A3qNGaRZuJ4HTetD9dYJcYFkcCboBmm1Aw1dDHUKKW2YqL",
  "key13": "3DBmFnF84SDs3m7b7KvPU8qZ2XMHSeRn6nnRp2p6AYS96DQWRTs3aNjhSr78HBNRWCM2UGjXBfKQknsMPEcSY9ra",
  "key14": "3t7Mm7oEsxiqco6ZrhGzawXd9F8iNjLJZVAi22TSJSMmZcEeEMRDEYQj4v2T8pX2zaoJ48mtyd2rT424jx89Pfch",
  "key15": "27s1H148khnNcMvHfDXSfXp9RBwuVdeAELtMaxD6W6RUzyAhKidxHHTPD6u3gL9i7toKM1GVSDj3J2ygHpBgkSKB",
  "key16": "4gr62h28BMKUSWjpMbzWtaqFVCt3dCfafqW1waNEswpCdQDwijy21KTeRZzTNLoKpYVngHYDPkpKE8CFBFKSDvWX",
  "key17": "3PoqYmzvMW8YLYzDUtruNUbW183cFE6huE1Eaoc7eUoKxurpRaX8mUdiW9g2LpvtP2Qqix2SbccqKKx5MWjLEaW1",
  "key18": "2qiiutbrJDJc5W7E4oexnZjtBBCUivmteJRiKJHWiqsghaAFDehUu7uR8PnW1CxdCA6RvtBR2NAUfdTWvkNBXQWX",
  "key19": "4AweXqwrxi1jr9Uibs5RfUJo4xE8Q9TFSpxsBtpm4YF6FCpt2NYUjWWTjJZ7qa9J5uvQthbiShyvS7xs3Uk8L5VL",
  "key20": "2fMorbQv4cQcmsVAdi9R3jiiVMU55MNwEaKJ3gvThGSBppXKf2A68iw7HSQD5L99arEZ2NwPd8oWFjJjcJJck1xM",
  "key21": "2tgA9ps6JeTKbJq2KfqcfY1qrjTNKAkYr9iefNEtWH6hnFvfhriMpGsyihcR2gjNL9qebtzaP4EuBusL2LoUAyCm",
  "key22": "3WKYFL7HonqUNEgbcoK5vpKenU98Qy3sGJsabGzDthmEphuSeSkLKjJKyPt8UP6ikXqkRFkx7MAeMfG8Xy5LvDRN",
  "key23": "Ehtv2fTCDfKYyKaNHUW3aBUks17yhc7PJCQBTW9L2xD3WJ5S5Fzg2nfRty5ETX6bNnVZSJwuaxoMPykWuUkA3mJ",
  "key24": "2yNsVC4vbcjqjtCoEqS69t8Kq6jWpSAnAGjCQvU2hjDbgdGL3TPMoZKUo7hqpZcSH14ZB9WbZqniqB7c5WMH9Ln8",
  "key25": "25qmj5xRV3h3YhY6EcsF7d7aupua9CdJT2PpxwhgAG9FEwNjWBGqYWGqrcag2N9C8radjvmGEKps5nypeYo1gbKX",
  "key26": "5NFHLhPqB5cyEF69W4B7eJUu4RewyU4JpDYmmNUAqe9xwtAEhaL2nJDMcecTd7JyNebZU9j3WtBhGFhtPzEGBveB",
  "key27": "5a9SZECRGHVHkHXmy6V6bnCqG3B4RVPTVJ1Ehdm9zPbGExwbUFtiGe6vsYBRgY3Z9SAnzJBtXkFVG3wgUVGjDDMT",
  "key28": "3LLMWdq7uE2BfmgD9H9ehscoDVkFAv2KHvd84ugD8DXJJnquHDQtsJ6MAwSFhXDMKFTrajVX6WZatECRZvtJDTHu"
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
