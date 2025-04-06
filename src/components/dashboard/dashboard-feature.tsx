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
    "613ytyxcJToCdun93einZbWbqPs8iCmG7dDdx91bcG5pusVb6gLEDKaCLCWEjXcZpu7g3hmdoX5uG2hQuKn5VzCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVkXAX8Kgd25xvGZ8dJqKavdtat6bK1m1ZHD6aqsZRWLxwMzX3zH9Y8Xsz5htE7woW5GSJm7FTQM9cF3thWECU5",
  "key1": "42tAKrnKyhCrMWAMQ5HHoizjc6CQY1o5z4LvSVAjjhCzh8WWRhraV6qndPxN442oLf62jjMvNW6WNQgAjDYRH6T3",
  "key2": "5z1PSjmdHDPvVpyMqBNpz11rAAb6qBzC6mHkKbF6V6Y2XYtU4ThSRA9SysrJntoZ8KdmtLQEoEuSYan2dYZdEsyk",
  "key3": "2wniVeqdqvmqNwHSBHkZ8CSBxfKxufEqVKnWddNR4kPsQB3iBwAKv3QZzYg9iVbWojJEny2A8ac9dWkQDBYzvJUU",
  "key4": "4bMAYKMPePhfkb7VLWcsAjpRPf7j8G6ZyJ8xe5y9pgFM3oVXetcnxbrUtx2dRGW2PDM8jEUaq3YQm5NAvQDjN7xC",
  "key5": "3wMF93c1ApuBpia5kDMafLFcbFJhTLZn5CzwE99iw5SunwjkM2VMiVM7eUKFUCYPYKHGRhn1gRqLAe8ShXFXyL8f",
  "key6": "4zweZZEDW1t9AetmXXBXPCkmx3jxkUVR22upb2mDPkqS5ufCPN6hip8HJySRkBMP158NxQEGn9G7XCk5VcZjm8LU",
  "key7": "2iAPgME49nWeXfoAnuox8KxH4GnC3taMH7KKk6AUD5LqysjgTUtpKx2dHTRUnxfige93b71ev3eGZrWQKeZNsgKN",
  "key8": "utViWQMzxWNeCoEkvQ66NiGfDp8HNgeXFkG9iZ95FzCoJRwZcw5T9XLfw5UFAMyd3zNc9kDk4xFcNNXvMutS1vM",
  "key9": "3fJfRZ8Fu7PoaCbx3781hCGwNzzCxq4JAJro6tT4WgQdqVCohp7ypBeX5Xc2gRFThwMfAn7AwHynu2CsCo7ySU3t",
  "key10": "KKg7VUxcMQenzGESBSqfJEvirHaqcMmhLUkuofwB61yxKzpxHzyCD1hUCQPpe871M33QSJspbpoQ3HUSAhZ4mbT",
  "key11": "EuKbXmavwbiqbHMRxEHYZPn6SyefwPFyZ5KbPpCHrkYqiGKJGMgY4CtLXAHTviMztYEXfJbHphhGdt54WWhbw6T",
  "key12": "4TaUk1Uvbh7Cj1XLNQNp8iZd9viUM88FwdPm3y4fv7yZQSB4PpCo8JiKctAbsrnh3XDknLq5oNDK4XdnSuqpbZzn",
  "key13": "5ngJ8Air5du7nDF6pjh9AwWfWfQWGEqooaerJcFrr5skXs625uUuDQEEqTe8bp9pita5KhXT5BvukiCvC5BEZEh5",
  "key14": "5BnjcTj2pXitgZBdtHGje1fjHciudEYaKvM1TrpnJzqMo3Tva2g6XXCn8EFKeyLnDvWs2BGU3xUxVBJc9bWJTg8c",
  "key15": "g6rKANDhEJ4grdz8ApLMj5DJM9CJqNf6c1wQMDjPFZyfCGb5gFg1zFKmuZmX72ZjawJfptwxoKDqQa4Hx8kBUav",
  "key16": "4X8sogbJ6DPywDuSY22Th5YK6yvthaZd1cK7sEFF6PtaSeGqCCtQ3gUYmjHgYNcQxxgySkzAg3at3EwgVsnKw8Nf",
  "key17": "43QPUtXGHJrLBfs43zeb1Rf1ctaJdfhQyvC3p6MA1yozNsyd9krdp7ujAAskRoXtXomMJN5KcFo4ZBtSudCMJ1Mp",
  "key18": "2v4Fa59muGCgRKceDsv5BWqWzQxZ5nfYCxX7aKEHmQM5QoNAhbWgUgap6VXS6g2X53SMhvKjNgtHBTcnfHugKnrs",
  "key19": "BdfqP8i25VZb1ktgLKU9FRB4Ji3ZRwLsAvWc7kESRC25hrAoCdjpJ8rrU2i2fqEQwJGmX25vXyK69JRoSEwQ4FB",
  "key20": "5X3QhWjUq48eMtwNcohzMVYk6rmnUvyQYVQ7te4ipRgHnhfB2Wq3uFgX3sTtkNK6FUizAmi3JWj62ra921nEoycR",
  "key21": "4rftp7f8bW6g6ArX6i57fAuzUS5GneGhLU7mdSPzPkpkE7MsdQ7KyncmwvPKfnh7FCutzc2vXConS8Lqpkr5VU4h",
  "key22": "3KeYRc1b8MzEmjkBRnFJp1haoDF53Kaj7PnVqK62yTy31BxRJbaamWha9A8eCSucem6khNjTNZupmcQCKFHd5P6j",
  "key23": "6SyaJDpAmDDmDHUaQcAvFtQZuygd9qjtJjNzLnoTyBALMaD1a43wQNA9oQeBKPP2KEYbtgWE7Quwhz9M9XQQo9h",
  "key24": "5CJFGhtwym9K1dA8BdQQSBeCrXEgKH13BSkCHXogLrqFLnWAQ6NJgH1y9Rh2o2f6vWHHWVzjftj1t15rTVAKVtBz",
  "key25": "36PnHJ3BRwLTJMZ1VPqcr1U8ReHbbSshkJ7sHbzz9uffbWkyUp6R9qHdmfEKMEzQwNR52nUUrso1HyK4VYCQYw17",
  "key26": "5CyXekfMUmFXRRjrzC5nwLHmGrkaKCzcfCJ5XEs6sSxbpoR6o55fXGJNMpQH96SDBimXb5ttKmf3DdPac2FNgKgT",
  "key27": "4ZztDpVGVhqxBVnEdJTLihhESeia8ZymVftEq9MefLhpNwQBD4ovGY19xXf7ycFXNGootxnQKmAag3XpCR9yvaLy",
  "key28": "TvemV9jj67WxqdDjJbCqEy6sm5XUnKH947xUv95E6L6SECFQCzqQnt2uD7FqjLAPp9DA4qxTsaNu4ALFh87jqQH",
  "key29": "3p5xmwUfgExcEb36BKtqxozt3PEA1B4cj1MbfxTXcBd7TWVs1YLEWa4PPHDQ9j9B7mAAEcmAr1DR2v9RXUBB5Vrc",
  "key30": "3NHoUzBr3cKvKNcr8bgMcLtubhRZXYYaFWYt6ixuGmze3pqnW8WV3hg41DK41J9DYcrKeJAYXqnuSrySG2WqJFst",
  "key31": "3r7ioKDbfGFUSnLsrd5sWW6N3sTAbvWvAeKX6S5SAP4AYapdiig5uYACzf82qEWYbxhMeVzafDjfVWf9HUYpY7uu",
  "key32": "5hhY5sA5VSTgQQ87mpiHuBnV4Jd6uEk2TduJmNNJcP66f83jXDsUU5dUXhQ5YDi4cK17D48EZrJHMYsRBo3m7gvZ",
  "key33": "5V2rMM2iTT3CKQC9bLXnQ5eyN7uRH39wmkA5FQvPbfBJjPUZ18nrPz6rKcV7QMHfNRzEStB33ZputS7h87zjCrqF",
  "key34": "2R9KBqNydT6f1W1kdQy1KMotbFNYfvQTqenai6MGw1DMNcgttHBFkm1urnug5wHUZRSCPrFqWdKoAbtJBHXUf4Wy",
  "key35": "2wGHEi4tX7wKrToxF6vKGrY9VnmrjpyRKUL8yPn3wtDoFBeZJ4ugHEktTqp3jmZ8DpaDLuDbqnDEYGCZZpDdzSMV",
  "key36": "4NefnvyHvK9rY3KJtEjevtx1YomBpb9FoajkMM7x4VCBuUyL3p56ERpJFr1kQQXbwC1duPsW1U5fRQFSspxH1Ldo",
  "key37": "5ACXPyCDa2EiHydxyPV3amNG1e3ZoWp8hvMnred8tvqU1KuZ1FDnHnpzk4KRHAXu6RSxfEGSpmJ5ruDfJ9rf7DQL",
  "key38": "3H6vV7LVkxa19dt1md3RJG5tuyqerHRZsKzkSgGiQ2nETvDombjHceLSK1KREbVeMaZTGajvAZ4LrCsffE14uzqE",
  "key39": "DbqyzeuMb3EdsbTtM1iFcRapd6VvaH24A4f2wxe4BSjAHtUXbaAW4SABodm3nFMfukJh7KDiTpUfYFz6f92Gwxj",
  "key40": "4Y4mPmCcs17VGZ9ZiNWrqMjtJr8BNSn8K5KBBFDq4ViRr1Lwk6RCbzLt5vGt7nFV1Th4xRiWwZs9LtgqkqCfARaF",
  "key41": "4yCKjoSffQSdLiYnwCiYAuTsGHYJS4mdkdK2gtghS33ZEff5guM8uuxDs6juyfBgdk1YWyRqvffeQLcBqS6zCqME",
  "key42": "pMGGLvTqi7AZPB9MeCGV3Z4x2RwhFvF2FfbNCcn92NhKVFfKrA1rRiwFJv2ZXMYGeghMMChVduq1ASatH8YX6Ro",
  "key43": "3eAG8vSHb9wJGuetLdDRynDDZAx12AVzFgahUdGkF4vyvGuNPYNHFMkvg9Kg18CfUMNRNa5HkZkMh1255h9su9oa",
  "key44": "3yqZ6riz1dLa4AvVKwKPCasmBP5g1e38ouRYkHX86r1aFGo3Zr3HJ9yhhD2bYESJLRTyM6RNQeqcpSQMpfzGWjg1",
  "key45": "5A79qzcRvY7Zfmk6iYH5DfKR76RFYrborHEZQBE79SGXyVgRgEBqpJcVSRCPpUhkMYgcRRFR1MTeUEEd97Yy3WxT",
  "key46": "4AorE888wfohqdXTrxQWVfkB6dvgduzLiXwotvubiz5c8a3geh5ymfNJBCx9mP4swnQWyowFF6KHLw7xYbSxHc4j"
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
