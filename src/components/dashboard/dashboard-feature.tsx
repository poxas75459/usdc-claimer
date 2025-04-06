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
    "JqTkFHyhC8XTZix4k9BqQdZL7S6g2mkL39qVcwFysj8Mg5kxWu9kdiu5SoTYKPniGVYsiLT8AujuqqauzFRkxfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsrnj5b6cTN2QVgbvtK6gvuJPVmeM3HMfeZ87E9Ru5R8qU5zABCdr1vUjAKeoyMcEYVpTMb3g5SFt4B6BvrNK99",
  "key1": "4C6YpTiSXHMv98NVKg7pdWMP55PVoXAZcJHqfFXaHtAoXWpmoGiT98ePFm31a1y1zASeQVQiUnSYDaU5zwCjnVZC",
  "key2": "57HG6xWRZuqyMAFYKv5AJrWUKDBA6T7V9zYScTUKEQZSD4vNNKjY4j4mR5EpmrVYNrVSbCpPRReRxRrUVkSH84K7",
  "key3": "4b5oCnHbVuwm3tEz1M7yJinaNGfEDs8kSSyHcSLSvNBSYN9jiLnJEAXzbVp2gbxh5k3H5WT7FND9iGxw1hh3zoep",
  "key4": "3eKM1pqDSd293t9CdFqyf1i9PCQZqnov2YYTAwc4PMYnB2kdzyP1YEzHyVQ3Tf49yCrsMekEPYD2Xm4ZXe74pCUb",
  "key5": "2rJLZF5EeNXaiacDEPoGvM5foBnB8EyZ5TnqVny5mSZ5pbYskWfRaHbDfpuAyodRdp3Y9YPHSk8zUMn7dmq3rdLf",
  "key6": "3ZUxWSKD9H8QSsSLNniCpmaDHVDcqBWMCkT5rTh9GzWLLFz6ibudR52ym9Dxxvz3C2v3FWFqQavhJUBYUnRhJ9Bb",
  "key7": "2yXa1qzxY73nPTRRx8t8LkJGCH5WU4oLykWFsEmP9r577kRCbjkbYFFPcLnvmqQDzqk2R78hP7ZaFzGtaEx9es3c",
  "key8": "AyCcShyTk64H1x9WseeF3gpt7eUym2wjbDMAQEFVndunAfcoPjuAoeBJkjEUhF4vmGrL72LpKCYzyomSV3eF4bj",
  "key9": "26URHBH8G8xPaumAB6QUh55JJQjBG9Xn1kcpKyk6PBBpB9i5Gc6T7cgQzcxL6Gju6Y6WyfscnX3bFsLJb5d4JrBS",
  "key10": "Eu2mcDy3x2V2VhoLA7yThWZx1HbhBviddsvNFfMejF74F54qd77kxEa8HdVHAejiVjL4o5CuC2iVAaL8AnyEtCG",
  "key11": "4CbafyHxvpENHHbXsEkmzvcNcMuu8G8P3AwQ8ZE5kgopkaGCxSQdwTihyWaW5tRn2Ag3zYU3cvt6qADr7oWT8pxr",
  "key12": "4LEKnxJTzcDp7tZ6vhfX7UgjenPHKtpcKqRumZgNuCiU1fPxPSiNG8Fm4KFMxrmv2q1g7zpkDhunGdWSHfQ7Gh4G",
  "key13": "k4zQDM9xvW3f63VgzeLHrYLuLdDTgHB9cp3ZTU5EEhXRm9qq5k5aUA5VppgGR5iifRAjKVJ2ZZ8tdkqFSH97wxw",
  "key14": "4ULypx44VARsMBTCBwticcEo6cct1TE5R68tyCcY6kqSeB33ZQSvbpSUix4YYKZG8mHTR9uv5uD9rTn3VVheZPwF",
  "key15": "3RbQzcqtSNYPmtTfysLGkoNkPogVf23ZWDtoAjv5hhmsFNaLUyUuB62vd6BDWmJshdKkFCRq6UUYmVS78AWKjhVW",
  "key16": "3Wr93pxCwYhWDzYkJE2GAztLjTSu1u6opi7cu6reMF6ndJwEudxHJCVTc3i6raB3aiTvGSSvMhb6KEV81wJ7r1mm",
  "key17": "5ErM4MeqaietG5CaKw6EGmkguGngAszTnecGZ7ibgrEgP3PaMtJhwgAGR4VGdNYg1k5beSn6iQFETZudqGKMqUYQ",
  "key18": "5oSy9Hph7ympc4GBhuSKbvLEEHXZDjbX7S86iBNgyZ9TjoxwQAQEbFBnuDDnJdxxmcmDk1oC2e5sHKXbDMWtzowJ",
  "key19": "2Bv2vopXKd1or2GuKsX4VrEHrUq7sY5HywWuQZ1zU86eC6d9HavVA6w8zfeFVF4C4ELNrqvwwiu2St5FvHyytGsx",
  "key20": "YPaqnNt2LjXvk4u5jC1gqKSMhydfVy9MPpbHHFbz9yftQNMeEhiTJpQXeQEuMFZEsgGVCWDh5gWAZSd4D3H3yjd",
  "key21": "4sYbJ9ndWKA9yLkaWGnL3azWd79zyyDrLmhr2TLpeEW75CbuHSFk2ResPCRi9AF3UuLJJuNtzV37eue1V9TLa4Lj",
  "key22": "2soNL7gxrQH5fp2JLkhhRtCwAxdZwFj8hRpukhriAq87Ud21oVVugpBPg7rU6Q8xaVK7m4okwH9WVWYYSTXnggPr",
  "key23": "2B7ZWbC7sXQLU2GXXKu9ZnKGCAzSQBrChK4zcMcQ4LM2inNVHj9vmerAX7gmGXQNoPeQgF2SmeKbfpdL6Gkk9gL3",
  "key24": "4AomrB6KESGXVzomSLwrovujZ6NoJzDWMv8EqqxYyoFpHtybbEyZoYzxFbktvabHM6XPYXXLtDjmRm737N2DWK3w",
  "key25": "4h5bez38k86HPsxmZ8T6su5GU9R2czKquAJQ3K5nLgs9zrL5t1vZBobBbws6AxL5vAshYcZnRqoQxFvK7qhK7qf",
  "key26": "39bhChUiNne4ERjpi1sb1CbCMC3waqXuu8f1xnBvC4n5cMXvn5HzkNcNu8Bbtqo81bArjJv4HLqY311XRL4ZxoCH",
  "key27": "t89HF2duLZjRraeBhSjZZnuCCWLnBy7fXFxigG8wp5hBTHmQjvzEJ6ddTRwPyVAyTYRSFE1pmsVj9sEf5XEZKhx",
  "key28": "4NHZ45Cadxg313AVuvBnrjDvinrbn6zsqrQwfhH6zTwahYToGRxmi2hJ6zMuNKLZhmsx1GmVbjK7jkzUk5JYY2DX",
  "key29": "5iSCQEwRG1y75t6JETfSH2dHBFx3UghG4oAxCKPiGbQQnaYqYFmUPE3YZKGSvzNnRoiFKGDNi9Ms9cAtPhrzib9e",
  "key30": "4tq356BYzsfKRHUi1VbiK4ybGYa41GPYyAWW56JhhokZDwT3QhbuNiMuSMrDn4zvTTe4C4FvU7fxvgb93X4s4F8e",
  "key31": "4ZBFvvpEHfxxqezNEd1mSwXMwWBEBEoAKadgw6ogjiHR6wkTamPtQCUSMu7oTbqq85wDRdkbi8FnrEaJwZaAfNiu",
  "key32": "4sW53mUSHCLV7H4s8hahSjCnC9PQfqSrWdbcr61TT8nvsKzzKBuJQGxd23iQ6jCub2cjanDu38gmK9wTivshbGg",
  "key33": "2VKHZHziYQczRDYC16ypnER26R17VMSq5aJg9jELVxskEpTWcgdZKKDdLQiiYrDJ5FazPC61PudBhhX5Lpvx4TBX",
  "key34": "2EoDYj3VR7Ku7PjmL26yKofszuiavGQjMtPSKKNbfV1doiS2HUFuDLWgrvRsN9cMEeaLz4qvXrXHCYvynpR9Dhxz",
  "key35": "4aAgxPNG5qKyYMudh5Dx3JRMSeEFYcGYwiLukCPy6RWweEjeWhpCS3xwbqJ7XnRrF2MbNAWSsnwk8DNGvBXeETWV"
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
