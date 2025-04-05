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
    "3PsYhTVWTTbWRDjgPgbkij5y9ATLg7UitrrNJfs8cWJeoheNxn1u36tVoFQUeVd9LYRMFrZtvgJqyZEDdcHwNC7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4VdvVtDUktkFkgyzYhvTEReK5iXqUF3z2ZFXjiwbKBNE5EbdMKjgZpdvGYcYtLEw2TLnqoPHG8si8mq6fJrkh1",
  "key1": "31pMz7EYw5MZR29TiY9oiuiyeJD2NyRqVYYGzUJtZEomWFgrtacNSxjV8d9u6CDn3ikTH4f85GmKdPdppRyw7Mp6",
  "key2": "5sX9rKEZb3N5tFhaqsVxMfkWFwYZQmsSYM151eUwFjtk4ZLJ15LRtuwGGfAL64nQsTb9qb17zH5MCTtD5AKNxd1a",
  "key3": "4CA19kUp79xYmikSYuQnqkRuJjPXA2426wWpAfCYVFnL4nk6AphCjUBJaYRK6goEAkXSyzjSNVUrysNvZqrQra6L",
  "key4": "iABTbYbK2gnwU947R7P9SEYpPbV7vz4Ux72ypv61nTf12TEA6b7xMXFt1hWjPe26hZ1tV7qrMKh5YubqdUqBR95",
  "key5": "9nYphVVbo4spNKvJxdzwUWVHpYc2thtJNQLWxjfEEZkDHB3waP7dTe1WfHp3vwQsqqcUGLH1uQ65YpYRmAppPy8",
  "key6": "2u3zib5Sr6YGJbU9kUi8gPHoFpNoHcfCtdCJ6UcgT7krQ6dSqkaGdCfZ1menEPjNzTncRdAwSWzWefrsghQXdTMT",
  "key7": "4rBQNgPxk5n3RRckSqNb8Lvipgtw1r1XspgHeXdpDYDQ86LLjnesfLQ1tjega4H1qdDMoQ2P1Q2rXtQE2WnYjbRq",
  "key8": "tjmDU23eZGHZ98AjjZVXRD7sDhDjsozex9VYJwy68UcvJDpXFRHFuwYDL5adTCx5iRL5TjGaCu9wDPajWqHW8zs",
  "key9": "5zW2nNk7Y1QzdieFXHQpofodDK8av64byNeAuirqZj5ByvEDKXMaJ3DrmfSwhUQZDx2oAmvyty36AHGVA5PfDEPk",
  "key10": "5FCVVb9BFh6opxLG3Gfg8F5DYajJ3GCyEPfNXrr96jhxfi8XMHmEcv7HZfEtyhHWQjNVcnY5Ts2RQeUAmEdSHi2E",
  "key11": "3kQgsEPfnrrPUnVh7pgSSHLSkpG4x5thAn383GsS99YZ6MH1G8dfFD5SprKASxGJkB8jTDrP4y2zyP4JRyt4Jong",
  "key12": "xRUJHHy3JXwcLub97vg1Wat3NKi5MPm4AvopUf5uW7qiCoyq6n8nFk7Hjd1rxar7CRSuf6Hk9L8YWp8ZLin6VjL",
  "key13": "5B7rCXTKKsWGZU9f2FbAEcADE2rUKMrURv7hYT1Yn1ogrG1bHu7mcoBzg5TBUZ1HYNGZMZjYsFugLF2mpGSuKqRc",
  "key14": "2SQwz1EPBRQCidp3Y4wP5pM3zDCWdo7r2P1xgKfKoMsjtmaYeBPuJH7YpG4wpD9HUzvun9SUcfFVPjh94yzXbYAC",
  "key15": "gs1mM8Qvzf7vnFYecPRGS1vtYrmERjaTFP5AtycTJdQXQiNC1jP4VkzXnZr7BYsyZn8nESKxxc3nYgcNtXyDjZk",
  "key16": "3KEqHocRXHrdnWopU96fnzgWgEkwtBVrZm6wD5dS29gt54b1DYW4FgUdsWFe3smmGFBLbTzd66N8aCTP9McV9eH2",
  "key17": "2yHyGJQ9ivArLSUv5WzqpMFWZeN8BkJS8ZoTobWNGB5Jtk9DuR2fy3fxbzjL37iL89fT2CGcF8cwxduihXwu9oDV",
  "key18": "3vdJJ8xqWtZDwkgDxLU2XkVE9iiifRqvnsXWzc355VS2aGF88uVveGgSavpwsWP4A4biHcrj8DUSVBegM9ZMJ6VV",
  "key19": "3YMA1q9hPEdeb5zstKocWxXgSp6n683VfCHDBNysCvUM7nTEjgpSgWxYvzFE4CDer3yQt5ui8XznFiwwf8EcVLmS",
  "key20": "3iVyrnDCzRiqRzE6VDzkSwVLZ4EBSujJrEMpBFP8GKHD6U8tAJUfJTvshDU68SyVMrpPH9fKPdYyZdqqiSS2QQPL",
  "key21": "3Cn2WDWf5Qohzwz3mBDohgxnHThmgAHGf4GV7jyqvYgtbrBdKsHzD5d6THkYBkqRoRELmeYFCW2fKa9vsRXns2Ai",
  "key22": "4L2jZUT3RfT7hvNA5pvUXTsCpc5D7QKNpvSyHhCVoVRGJNSSqv5wwM9uKp3ha947zAQYcpJjgzBnYH1zvdQ9AuwT",
  "key23": "4hpoR8zRi7KE6SRek1PHgRqyFZDof2XsxUHrgbqTFsuEtLc1GadABjhN19gBD7tGeCdpnHMqrsAGNuqX8h9H2Esa",
  "key24": "5taM3wtTtYa4FQLJxQeDHkQnRcjVWVftCyuLmLxNrHbGixFZC5jq2WYRJ41xMP24KH3LQ7NEGrA8ePTLK6QhMUPc",
  "key25": "4HtxmdTFWe8EniX6BHgsbaRJ4GSfrqDWayUKteCNasZbW28KB4PA4yfwKBbtw3ePweo47kVW6L2hXiYbM93TMbix",
  "key26": "3JHY1KHx9Ehi4fFNDL7A8Uk5XscrSTNtkDKgDUoPFjSBtybgETU4owPaGLGoAHwHCr6EtZm8HKZxjveFCCKdCV5q",
  "key27": "5mY7BtxqomYzi4ZVPnFBbhmyZb3weQjqfLU3xFmWbVSfidWwvUzfJtQM7ZqNh6GNM9XTY6cgHSPWmC1d8VBXvqAJ",
  "key28": "jhh7MPSj6MyD1KhpTX9KARjyasRg6Gd3mighrY7d9seqcZ9kDo56J6hp9pQpLP9GY432yJuhSTSYHSktM1YXfk9",
  "key29": "4HyBXXnbCgsv4P2hj38zVTADQpy3VSMsrJb9249wrXDDpFrBb4QZRxYQQHNHF7mFQUMEEU32tn99MQnVHC31BnAK",
  "key30": "h931FJbZKJM7SoFcLToxXtVv6CAcnPcuugPpBAX7hRhrxq1488dUgy8kJB2JTV9Vbhsm1MTQhndxm5drjvBWUpx",
  "key31": "41sVM7V4bBU6jRgmmujYna76sXq3UWg7HR2zKTMXFmbbL9ee4rYqwuAnD43pwVvx3EBeV5xd55ffv8qjhAFMDsfz",
  "key32": "9ffJPRc8XPhuSDWhHrGWZswuykRmBprPEFSEEMDJmD9bV47vZkMZPSPJc2yGJXvTM7uEYEc2gfiK7LhzTS8XLXN",
  "key33": "4dqT9X5jsbvb3FMUas6BpQaNhe1DeKdrQLCaXeJ4ZUxiYoWhfPewhNMvAxpQTyG1Y7tK47akJ6sJuv6XiKmV9bCt",
  "key34": "4NEFCs2kVh4Uqq236hNh6hVaFpJgEZGm83stXy9F2ZeUCxhcPGcUhvmTUMgmuNnEBMNYYP6g3nxi3o7jYDoxUn7K",
  "key35": "3qtdofd2H18MUrcaXo4Gn3auWSsau6EQVnLy5fg5NUMZuShqfWnUKn49Ys4enXvF9WWPLSbYj9fyHF1KUwfAfrfn"
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
