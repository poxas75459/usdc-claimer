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
    "3G9NCdLpXTdz77Tbo4rus8qH6ojDrRyPn2xZxBHp9X15ymkkW7mQKx6yjWVrajXKasFNMhWVT1UJPrTLBJ7zD2dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBR7d7dtNeJNzsNPEqGyzhkrYD6oV7jG1t18smjtAPE5QcCKLMX81FLPyJHxUeTGAWo8h2VBF8beRyzJKZHonif",
  "key1": "3fdx2zf9TMKyHf8QJ4yFYpwbbyKuBSVvDVRNXXbbEZa428VsFeQcWi9tLUP3n7G4SbHCtBrU6zqHcA9255joyQb",
  "key2": "5pVvGxfb4rAQnGFzrKasSaEgN7FMRDtrSbY6pjNKnLKGyzCHLLjgnczDVdFCFwTx4hNWXyXx3BZ5tn2TNe29psQD",
  "key3": "47FSWePYZYJC4WNgoESbji15XLHDbv4BMrhnRdgoh9BU1s7vcWavzeBD9u7frvS7T1bxqfdz8VdhWkaWqBsZYVkT",
  "key4": "61TQk3CEK8Z2MiXjfMRrQc9ou5bwbUu8jgdC6SqRCtj1n5LL9ti73AzzbjnGmhRydAYNzG7mEL8jhh9rwTgNAc73",
  "key5": "5bHxQjJ3Jbw3mmrbJP9RaEGMyQeQmNLC9SiQgnn866q56AaFNYi7DBSKAoErfPJc3vD3r775fyrxA7wH9nKvn95K",
  "key6": "5FWqH556EuffihsECGWztfL5nX6ikzV2c2Rb2ngrMiUJxRHUTS1acPpW1EVcKKjbGwE6n2C6eoEvvwQESokRYZ2Z",
  "key7": "2dnFu7Sdn6HTkqeMqw3hczDpvLFQUh6FRdQjgpqsjT93RhjXbz6zgDJxuQrg8yxNG9pRcCrQHsXiDH4b4odvGpgk",
  "key8": "4fd5hquK98LztWBmKuwUK2GTyQGK6AcT2CP6DC64uAs6mtXngj5FhpYYx8D7PxZppEMEKGVw1u1FufRqpSscAMQB",
  "key9": "mMJUt6MvvysnbPprqQxWJFGCnAdJsjZp17JxYeLAyZV3BF3BW6SMn4JdzLVq2d2no75QRAShThE3Q4zCcq5vH8L",
  "key10": "2L3KELX4Nn3f769f9yjSxXWZPLJ2mfGYjPsKJmEoBd4qJgF58A2JmFUYm2jhCUvgMGPrqrvZKk7c1g4prrWqVvKH",
  "key11": "3E8hEPJj8eva4hbGHyeL6H6YB22w9QKK9zDhpqVcWya7PQsvXUBhnnsPySVQVUq9zMqUwkxRsyqNBaPVp64Xgnwq",
  "key12": "GxT7XdA3UExc9NeK26GFEZXwbe32tJqR2ZNv9UDY9mqdHU2ZeHAzwHPgLVUznHoYduTkujgS6zbQKyGejx58R2C",
  "key13": "3nhHKoAdSu2U9WYdE6pMGdkPJ2g92v1Ej1b1TMK8FATU33igDsdGDybV3ZV4SFxoz4TMJ3e1UqgJ4ZHBawn6Yar4",
  "key14": "4Zfgs9Z17kLFdNmKBjFzwjzjDiD6mR8T1WVN7j7S9jD4X4LN78h6A7zPzw4fFxJAUPuCjyQBruK8XXQw8hvPF5EZ",
  "key15": "3mLvaQHWBbnxwPsCVsQbDUZEzeaQEgYBeWFUofkorgogZ2DLqTnL9GKPJkmkMGB4tLdp3pzWTGn1D6YJbdwdhnrP",
  "key16": "4Zi78GN6NTwgtAv857oR9EiezNvvxnis6ki8BePAK3usA5VUDnF9Z2eYUeopWRuh5438wTDNAhYAZM7tKvm5RC7C",
  "key17": "5grxz9yxVCJPruHZN1in99GtDuqBZ7249cAFxqN1FNxYUvzAN75vmGzautX364MsMTUUt5ZiDbT23vxUYvLmGGhT",
  "key18": "3J8CU35noYinscsSmgM8g9joadswJFYmwZK9bvCYckDG9p5jTCkhKxGgYd8X2XVSdNG2ddFhf9UGJHotXobbJcH",
  "key19": "2rfZqxSeUn976toQF2QBA3nAHoxnXWqoRTbMGDRWTv1RmZXu61C4D3FXGZAZyNQR5vkU9vbnyv5MqcZRzWT4Qy4M",
  "key20": "9nMT84sxekGCx59bs19RSwtUTW9cN1uRmRSF8SPvX4JbcpoxN4GNi5wmtQdDC2DYcA3NweTWjAEpcRfuBZpyDTo",
  "key21": "o1QBW2FFQamnMLtA8FaEvYxTwtG7BD3bwQtV3gdCBp1noZkux3TszEHLsUYSLDZg3CRCA3An9Rs4GQcPEU4LaUM",
  "key22": "2cU4654rAdbK6gkN8KzwLpK6TspkVbJBhGdb9UQ9i7bByD6YmgTkhkW84yGwhdn4Lnpn7SCxNoLM6QbRwhzLkJDW",
  "key23": "3h2uPgevq7dagYzqMnmwxxereGL9UcWxgwnPv9J1MQZ4vCokQT75xogwCLrytpqnenD1YxrZkctJEoccUggpxpax",
  "key24": "KDJuKJVx86dBX12SkifAwbYvfKGwweGDPrk9d6BCGuyS4YYMyCeB2RBQuv94iwPY1Ytyd5oy34GPNNFUv1a9gwp",
  "key25": "3LBMTmZxqvi81Cy6JGrP5EUA8o3oS12k9sDfF8KmhHsUTNzi4obLFBkWHqEVezv1KgTmq8MK6abazLWd4smvMm4b",
  "key26": "2PLF9WKcRiddpaLD7AZ5nWKdqUU3njGavfSWbXRpKU1wpZp8QscK96VF2id5jyq5dQa1xwvhNTSkxu4VTTZVzzN8",
  "key27": "42J1hd55ZxENPTyuy64uZBFsaJbqRTRJgHWhSCptaoNjCr7ERp7xfn7rmCpBjhR9Y9gu1YxzybeKG12oNZ9Hudi6",
  "key28": "3oUJgxUE8Me3xnTzQnGrzcJuAw1UBnSJTyfmGCGyn4osuZwnNK8oWgA5S2Hnxs61jup2Qrc1p8PeAando5sxK4nu",
  "key29": "4gTeFi63YvLtfofguF7sWj2FpE2RhEDcMtFqwNXPBUuZimdX7EzN7gEuLhfDeaVMaFvXe4QFnt9x3yTtd6MEw1qg"
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
