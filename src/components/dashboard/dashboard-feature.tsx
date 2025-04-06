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
    "rxQbPvfd5Z3u4WrgX339xU68CKT8FiGfM63LBTkTn94NaUTZFhANPn9ADBRkX59o5L3hz1ToCqrNDL5K5KoW5Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35X7CNyp9Pw4LEgjYcmZgLaFmagviPkTgtbZShGY7FHRqhJAQGgxmeQBayLT2ZWYAxmSYGfcAznN964Ba8K4NyAX",
  "key1": "5rN1fskSbempTw6QDbsQhpX5f1HzCsxFM1jw4Eh5r1BAVV9F6Pg6RdHT17ugWSZF7GkY8XVFvAHNziW1bs2vq38x",
  "key2": "2evSq5z1Z7ur9zEesaVdUhQCNpd3iAT8U7TZ2CHTVmtXVTY36vGXL4vpKbLJLDSmCe8vwnrN4Koof51iMozL9h4q",
  "key3": "p7VSadGFypuDvZa1TkdQhycEED8LPiG8pR1Ri9A86EBw12UYFPqwCyvv1f73Gh1U1oapKJ4gfapSygXouFUgfYB",
  "key4": "16XbaTAaHPmH76wXD4zBvtimm2EHZLDPdbBYkeNjgDc4x2nmSQ9hiaXJCXwUzG1pBw22xjLCMqZbwEBsyJYB3pb",
  "key5": "2WCTbszrv1HHNEitDYRChxUe4wpZfJtYo3d6txh25LbCf6rMj4XM94dW9Xzjox3pT9UcV7Q7CDWnFas151uKQPaa",
  "key6": "64Dp4u7KGiCTuJfAGrU2yRB2zT5kauhsrTCuUfKoujQvKMqYxBHsioc4EkjsAKPuLyoVNvbzPt6aJ4XWYqeqB4Y1",
  "key7": "WgmfU7N717DMq9YkHB5KYB5AghMUT7TVnE1egmnKUzAZspXrNyFdZPgxLAgC67KMBzzwkeNLzGFnbeQxcnfgruT",
  "key8": "4Hrjm5DSVHSbaxaVKjsBoBky2J1WC3YtVBMwUcsfYoGAd7oG4EaKFCGot1HJU4uzAyHJrnh8m571Faicuh1nGzTt",
  "key9": "4fCYaefSQMyJZzcrcukdUF5B3Szb9yPCABoMvmpvKrXFcNn6yhTTXuvkD12QJmxMf62rcaQHHU21MPaJDXUVBMS5",
  "key10": "4DxmST1PWbfzuarCqGTncrq7XmzHLtH6G4MYoZ8ioKjDvP4dhXeJ7KqEh3tYrpZXEZqPumeBH4xkCpduUbVH2dWD",
  "key11": "U6XDk482TmefyA4SVbjCmwWkKb6ck5NV5Bk7Z1qw2dUW3jXSU4DD8ehBaR3Km7CjdKCJMLEwBAUdKPHKxoxB3qD",
  "key12": "2GeLBBbQ2qABng6az1qBJLWH9M5yErXdXNH2dTCrFLqwKTadzWFMJGivGsQUgkYoGuVkZBZz1VsiW7hMffNjSKcq",
  "key13": "5cCzHt3sCJQgKMKH4mw1W91cB91XMJgUjxXMz5dyC1Jp2mt1GkQbsu4SYb4CkHkP4qQohoAggURxhBJgq5UHu6m2",
  "key14": "KhDquv3ztWdZvjYW9U8KK59Jx9xH1SVbsr4x4FmJgdqJ2oxiAkYSjXoS8HyQkKWhHygLCdcB1b5y3b6nj7YV9HW",
  "key15": "fa6cCSYbed67cNc3HJjNA6WWnZTzW4eACPEmchaqwpMtHZJzzcoiDJzoMSFTbjSGFUA7gKHz4wXXNdorTK6UH5k",
  "key16": "5FpUM1Vv6JvdxiCGnk7AbhaEjBbNyxtwA964YCS3g799ngJAW8CASTd4yjyeeJR2LG5QoAHFjoRc4KNaVE6c7osH",
  "key17": "LVKzKktLgqgxzXSJmdhJ9jCrmnpPfPXgVJ8d9ArHCGy6qDPsTceKxE8UWxe8ueBwuQUHMqzcW4fM4mQ6RCFqdcV",
  "key18": "5pFRwpoCt6fMSYbVcutgDr7uz12BjtFuMiH1sh6QrnNF2RJXym6zccP2sq6Mz7VbNo3F3VVroTYVYzRvTjyTNAKz",
  "key19": "4T7Lyi8wzioDGDof7hBYrVQpzUfZgCSnUNBXNwMewcgfsZQBYQEdHfjoN4HHfvXkeJBFiyqqs6ZqKfEFskG2W2AV",
  "key20": "5BUt4gDnQx2ky4JFJ2XJkiRCk963nXwx4z55x1cqz6sTrh4GDFtVZq6x7yPsrtGTiwrTiH8CpAwVG2ugebyd2Kme",
  "key21": "2VCaUJkcJ4NKhxbRWJhcepHmSR8ruE8KzyFbnYZamMihLZcRZY1o56y6HtPmjdNanreMY89QRtdv7NC5Fh2AfhuP",
  "key22": "2cMeikdnfPfjRz4NbWynAXjb3CDEDYkqRuZPJUJJim9rfhaBdY8oDh2uWg2nqtTW7PKGtHtnJQTWxfY7S3xeNH4S",
  "key23": "2wuw7Chb3EXQZNDbm6mA3qyTSzneAt6Kww1up2LYCsFaX8kB6D1C6wAQw7iesPZzj175uRwni8NKMQbn8ExVVkNb",
  "key24": "3dzBNFVJpYzq2Mmh2huWmtTm1iCTJJvLmc8WU6i1YS1qi7evLXS2ayaYPmnCCpA9bt1eHr84JzTpHSt56nKH4PgB",
  "key25": "4RXr6AGZkeYPzTRgXMwVob73uUrM8YbGZiM3645D6XTWMipa3E32jKaepRZxMwtJD7CRujp2AwPqM3KRiFJGhdMN",
  "key26": "4kqqwNwtNY4DTcaFoJXJSbFgHDiasewgiLvpH8WGFAuyCA5G4LAYQJYhdtJgEupnEwgfREvoomNBnZXGd4Z5vRH6",
  "key27": "43rhmNid1v4BJtARUVFFnj5ZWWEWarvo5JPx8o2hQAKLxCwyuZSCRPb26LLyAcZC9UrM8YE6E5gH1Y4QBpBBKygN",
  "key28": "5ZEETpMYDtT7bZC7KpYNZYzQipTh6tbRzNv1oGCRS568oPsiLxCcS93T8YGuE9PJccu46E6XgQJgMbTidLZMr7ap",
  "key29": "U9ssRw39Ej2tGkpKqNy274omWistywg2SGbi2i4FYHMPWYk3wBiREsKB2ynXfCMb19qAaqvUuNFbdcjMHYX51HX",
  "key30": "5ykfcXJBZu3f5KTaJcNoS5Fh18itjuzDGSHGehaZbwu6mjGa2gR8Mkd52bvqhC8tvRdzjPgobLUc1UsdG4TTuV7x",
  "key31": "3BsKvLaV2NhjfMq3mtbfEsti9wDuKdteWkpUNfgT4RMQmF6av4y6UnNwfauMwN8L79snQGeJDrKXVdkk9aWfpXQz",
  "key32": "55goVaEMYiLuw1ypHTuFeM4nUijhfby8BnjJPHJeLQw6HgQao5wYSwgBHjTRw9NJCNyp7uu7D34Rw3SMi71s8Nkw"
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
