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
    "2QhkFJuwoP5L9pYuNV4PshK13t9tp8XRoXUs2xiWE33xmtcj1u8rWNug3n7eKZc8wDkEiwWiizmgpSLiJqPPHqiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Z9ogbZMfGA9LV8SSXe5FpTYgMrkddiFZpDLWNUhGLyntDLkhv2DesVeohbaPmG6kzMnDj4iQPsaQ2NTrwR8mQL",
  "key1": "2w51rnTUdVhjthqWV7ctAXZjW4fdhnz2AGGVBv3uPUXf2VmcUNvzozGM3Fj8zTzVqw4ttkpYoXnNqT8HREBUZDAF",
  "key2": "3WUEVPa1PqbHLPpPW9R88Ni3nNZXQ43J9CN6PX3sZ1aNsBY8M9ux4rAttYHANheoRewfk8QWooQyTXR49njSW59B",
  "key3": "5VLfPCra46MFC3SRqVrCZEU97DUnHKw7AJNjAHuKmgEtiDjCGeGdM1E7mfWkdnqqE5jGRN4Xtgfbg9bhQxsPmL2Z",
  "key4": "4sDBwUpcHPiXgeDCpXopAfzYS2FZihSsRfBn11Stx2Y9r8eiBL72zaGC5eorHTBgdvw69A2M5AEBXbAKFkgf6kRn",
  "key5": "2xKTTJQs9jaPKEUz9hZBf5QmutBK2h9cgyhaUmFa6UkAgg2K75PGNAHrbM7chSjXX9HB8artjyEwrhS19kHmbQ9Z",
  "key6": "5bkZWexWdwyWZrMgzqCQk86fMXWMfWZUpLGbGH553X7Q56YbfhxZrbLpdjkArC9WiEy72U1qq79TwnXh2HtR1YSM",
  "key7": "3fHfAKW4xsqYvNM9ECEVK2KQjJ9T8uhzRTix9rXRrqoYyp2CA4tDk5KTAauKgAuimm5JtV1UDeMo1gYdwkZ2hiuT",
  "key8": "2Yaj4ScK9PRSGZx9VfYNoYp8gNGYEZxGHiporP9uQzzuvu5sYE3wtznwKWdLuEN7rED7pdzJaH4G2YXr4K7GZVBf",
  "key9": "2WpQoGXXXRtywofZ23nPi6CmsfWLkymjVrNeaXkJEBQGW7JtGNbtbcw1oFW8GdaVQ7UPT1Agvvjugho4nsMD1a2d",
  "key10": "3krR5GKmTYyhivDnEH8NadmmgUPxkYBpsCkdy5BZc5hjS2JtXdjYeQJxaFUeFvY3bkGBHLS2QkiNhaNSM4AmoFfg",
  "key11": "CYsGyP83YSVvuYrqJSLEzzX3Ma26JnXucuj8aBHhZiHhmv9vphDKjGQjaRbSvsPhcW7pe7SzoTAJJo6fquNLktm",
  "key12": "2o2r6PGAdvb7LMkmXjrcAjuuVozCcFMTsy3PJDnqiABeEDKSQ1PrVWqYDiQmDSMGHRyrLQFDEfnFQZphBwxadncR",
  "key13": "2RpjBJDxL6e18DPorWpUmgbTq5rBvEJKj3fwzTLCM2nvrWFkAbM9nAkjrN6sADwJaWMpR7i3djwjFDFtqx8aAvmA",
  "key14": "c6bKWbpsk5LoKvjpjE2Qr5wbG2XjEdswGQYXSDtcUR3jN5b68WcoGuP5mNdLYJVTZ7rYk2KyGeSVVvK3kk8iUry",
  "key15": "3Y3TUS6vYqHRvgQGormZ82y1FN5bheTBhrxPrEAd25KUnZevQAHwMp9m7JiwDVgJV66JvNgXo3wkcj9bVd3JgSu8",
  "key16": "3YDGzanBQsmP35wxFkbL9ufSmiWsrDVKAcG3yuN2PA9cKqvrH2xHx69tCrRmzGkGAS5wxbtjohKa9h3yAXaiKcm",
  "key17": "2xTsRyucmDw2KS6MYSa8czf5wTDWLFyg3GxTDnSscoQwyP2xPN5kbGAytdrQGRjDsCo9shw65ZkwkFeMNWazukyu",
  "key18": "4J4a4C7oTj71ZMP1cz4YajER1GhVrYRZnd6ys5H9NQC8E5Bcg6Uhza72Hf1hjSTXzJAPUw4Yo3GYpkbx4qYQaYc",
  "key19": "3wziWsMkQYdqfofk83p5EVsuEoSfz2QcHEB4UNSvd7T2bPv3vQGgrja2i3x1KGyFkKdT3JMNCtJSZ9LgFNCbxsDU",
  "key20": "3kC4SMjG1XcRRAu2cEQvhLdbL9E3pgtQTwqm2NeqC4mLcmjYCBshSDUEXLvMyeXoDBP48UY6BuVKDe5rsn2Wc9Uk",
  "key21": "4Jt4kjKdKqaNvEjvYQbuKUuQkdYtSpHcCGJCW2SL5JD9KGW4W9D8tkMKfyt2zRj6yWHgZFcv51oU4zk21t6aVUWv",
  "key22": "2eK16KVsZ6eSH6jLH15UnpucSKcUK2AFdVzeo9FeTj4XVN7BNeDABeDg7682c3eu3KufoZ9d3hkUzVJL28Xq5Gsn",
  "key23": "5jCw8k3rdMp3jYCnVMyGkCQP7T8JNxafXZnBdQ4g39yESKdoP44mKTPvpjitoSkLNcAsUKqAgawL5koK75CK4EAd",
  "key24": "2URS4fczQoU4va48UFMnoQGKAFUiew4xaTpdpy9zAxMFBvKcQ4vnJPFLs7SJuRRDJm9tZ84yednSp9y9V8L7nMaZ",
  "key25": "5TxSbexknkm5YdYLje2RrKXLFWmK6ieoEnVhZE1jXd3TR1Cgw5oxQJ5syeZ1KYUPbqUuCUTJ6ELi1Nv13JJ6So1",
  "key26": "2f7b5o5Z2dLviEeXiRN26hjJKHxgvHeP9YfhfmF1kcVjkGpsjG9UqzMSacVZ6uE6K3B7kZy8T7sEee3i8T9vF3zw",
  "key27": "87YhxBs2bBhyuPGArSXnfRwwiBRffYKBgqwGNWyu7pfZMs93wM39o6fGiyX77JmVm9EeHCVH2fHNG8bhHa3LZFg",
  "key28": "LDrKNK7rVnjY71VeJMMEpF5NuC6ES99D2ABfcgTLk7rt62io7bVXzXXQmoqJPEZoraJFHxhezyqz2TD8fonYPeE",
  "key29": "3aA7zLcuMwyqzgRjPomMimgbMLYQiysuCqhhfYA9QKaEkKavHZQLqhof2LpN6kcfL2812jZhau3JCK8jqgMHWni3",
  "key30": "4wuTNKxvc7rKidQhyF3Fh3tbLQq9ptWeEcFWbDWLVVqZbgYEt6S4rBaEMA5z3ow5dVmTtN5c9RXWME16DE9BRtSi",
  "key31": "MvxFFsnun17oA3popLoJsUCePm6nrRC3oafz49DbNs59Yurd6sc4daFEwUpLkQkDLJetSkPbwZpu1YtweaFFnGL",
  "key32": "5Fj5ds6UdkRPUqMW5dNimUnQVGL2QpX1TLxU3RqbSx9oxiNzTKD5jqMDriuwqvR1AqVNT27ru6SHHA3bn2XXZjC3"
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
