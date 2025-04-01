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
    "jePDpEmXtzsvr4ioeoGKeFC4zuhnAU7TXhbjqfmGJz8KXAXnbxf59ue5AAjb49EjwJv8pBoHMayGzokkxynGQBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uStNpZrf2C489t1Nx7qio6PbNSKiFbqUs7QemxZXgdpGyr47ABSA8bUWhAXuUDrSXcynEJWWtpcWCkrGToZL9s",
  "key1": "3c1iUgXGRDxSMEfmxNzT26Ec6YFVHj7JH9Gx18NwryVughzdfWqGFa6j28v4xHiqLGZ3KxKFYjb686xuHgc999GN",
  "key2": "KyQMqPyj48mS4PzFKEJWVVWJtcwuFkdcKmpteAF1DFbMR6RL5BTUoMyKZ3UkAEArWkaV7ixAq88x4HMECBc4XDU",
  "key3": "54RzyBtRuWcrYSGytWwdPFWuu6WDkL319dEZt2mhmH8M6wdA751R1QCY3Nmu6tJgeoWGe839wPKR8TmehpZyJLAB",
  "key4": "4GuJtGtzrVd74ieoYH9MtAYniuRzRvm5aGof9eiub6aLMAVM28H1nEkJfL5gGg5HG5enXy7PyAXpxfYvNuAFJyUf",
  "key5": "4oUcGFZjTqjMv2UitSkhBmyYm9WkoAysqExGHNLrKHFXLJ3djZEP6V6LnD2kq7JXRHE9Y5cmDrdP8SzghkwCZK2Q",
  "key6": "4ZmAXDwXqSEWwjb3wrjwVH9yTEEWq8rN6rSDQv3Tib2cazXAzT9jxrB2xG8RpcjcGu6vwCM9GfBKWtsuKT62m1fs",
  "key7": "Wq6QX252b55QK6QtXbha2CeYhcgVLaPMxsAF1EtE7UNzHPqErd8QcqxvRhSJW9J9hzjWw5gbyKwhJtUtapBh7NG",
  "key8": "29qcp8wSk8AEL1zusEwRVRJ1Ntmo3z5bfzuBfWGhsm4iZ83odbJ4KnjQMeFSbi79qajr8WDm6ai4sYuKcFzH9Dbj",
  "key9": "3Wcz2dv145CvyFZWcgfoZhXYYzwTLaURtNSYAPAtAduSvPEKwNQxx6QevuG5cJ5gTMLktxNvT2bTuTRAjZWdusT6",
  "key10": "2bqNE3ax1M1hEbroHQ6NeLWaRCeNj7no4RrZTJ8X7jnk3ZydycqZf1FnUjY4v3dDDiobhfCopTZACsEq7ZadeoQ5",
  "key11": "24pEY8nVUYWMefgWjjNJ5NLJTS9rt8SCqCwBFQHAR8H19Q9bwqLVnZRoZfGzjsidxv7tzLcF5BFRWBzAxExp3Sr9",
  "key12": "2NkLFUmLmhMVyWECoGHUrUPG8TbKWQPN3jUFvPnr7eWLMFWfRis6GCurUycLFziwSyHGn64spDeFVGfkcKPKKhvP",
  "key13": "4fwKQ4iAkUZ6bFXF8dScH9rizqXaB7p33AS5WykCgDCVmzVMRVymQksdLuL5YrbmZPRZ9t1gdNjrFJGXHvMaPYu3",
  "key14": "5BGV8KxJp8fwCcHMZyEMNvzmUp3r5gBMAgJDUQW9cKEmCEnzLpbbh4mb75PaQNoxLRmq4MjxKDHP2u8HiJh2yzjk",
  "key15": "5NEHoCBD5VD6c139wanyur1ZEqaFWMymDH4BzUsXpUQXvsZf1YXJ6gprLHoK4UWK99jVqbF7p3riy14sa6SoUjkH",
  "key16": "dD9doPUsoYBK1mtufAM7E9QDhM2NkWJ3ihSLntJgVprCngz2y9kR7oZBvxSvh5CEayTGAjipjA8X7pi9YiBgRaY",
  "key17": "5ht8jeK2MpEEHg7vPCuWL3yq6oqNsoXzxdwcFMi5yZLdcjyfNAx9objHuJYy4Mdc8aC1hxCXJtqqeByPrqtVoNp1",
  "key18": "2XzMtNnUotFMWTNx7RLYnYq1n4aBr5QbeBQF1VySTMFgJawiGncY3R4CqQDHwiBcCr9SfqQBwdoCASsGNeDX4sjV",
  "key19": "ea2VLGcHTrRyocUJrySLDaxW8sUa4izcH1VWacyRN9xB24tuvmdRDyvL3vByY7zq9DyJJSmJcrswjAb4BVPrJYN",
  "key20": "3sNEjxPkzdX1PxCM6qzbr6R4Yf7FqkYXY26rxkhfRaBArBQNmJSXc5zMZJFF6p78VByQFFJzL9G5bEASN4QKn9cq",
  "key21": "43tM4EPKvZSPvjwvQZ8dryjxDQREdZ5fM67hwaWjSC4mbXwUeDPdNCvLeHguHqwjjKR8jWVFXoGvRrZe3UjVfRdC",
  "key22": "43NX1axgPvKcejcCrMxMz49aroQpqNL3zFJ2qRvj1FQQ6ddjVLynKxpjbPjR9JQWY8GhdCte2EZ3FhK2R1mdGdHV",
  "key23": "31VAzHRjjtP8mkksks2Lh3ePdhqpWL1xqs7JuzKrbuS4hC2gMygaqjuj7iWWgCmnxi5PF3aQLpQRZmfXUDccKKyH",
  "key24": "3a8JmMgSdFRypZ8DqscnradDv4sHYQgEuxcVrU8xjnmyhrnoXLmuC5vPDgw2d8YUVY9av7kTuzs3e798zQn9S9GN",
  "key25": "5xFWDiqfA62gRsfJVx8kw86scKUY1PcKmLCSVRKu2jgWf9vofei35bnuM6origJpDQHNJBzHTmhk4Lgvtv4RAEkS",
  "key26": "4BiqL6t1X1m9oFMZnAXrJaA1gtkekp6cs27jsUC4f98FH9uT7uSMHrgsnUWiMWbByTc6aRngWfBp36NFT4t72tGS",
  "key27": "33fU6WDnFT2JAh274on3LD8qswqGxf5ohKLyLbGeZUrLFw2zgWp2YGDRZJ1r9hd83BMcYyNqZzpr6MjuK8ehNoxR"
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
