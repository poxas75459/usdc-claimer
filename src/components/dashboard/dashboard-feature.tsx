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
    "2bbFofeNVxqCGsDnVyt2uK3LTojHEnnTapSnktimZPsyR972ibXGeaC1sXzRtAExBF4hAeP1ejze13XJrRZd9Saf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqxHm6YFHBJ5hdCw5jH3rgYy5kue7YpCSYQDKZnWpokF54ryt4aWNm9m3jWBBYzb89vyyRiAToCHnY81NbH6tRk",
  "key1": "4nMooLEXfjUj3iqMjV6nLSQhTpdkSrCtPpzKbi2N4eQj3Dim1RVSchjtCemXVApRKUF6Vr8YR7pbzsHpyQPGEFre",
  "key2": "5QnC9sDPwK9KnfT15wRfRhTXo4GJszory3FJkjv2RjwyYPLoMdfPzc422WWPbWTPw7rhaCp3mx1Hjb9uU3X8aocB",
  "key3": "3qbeiLa94MVj2WEK6WdVYfHqBFwj2FGzkSGbPeKcb4MxATCBTfDuyerKGKANJzPwLQ4nUc92xs8igqnT8kpdXxdd",
  "key4": "5H1Tgm8gXvW6NFUDQTkJU1XKDk421yZJwny8S3h6JLh7FyfqV4tUzCR5xaZazDbefm7fHyXGwQprkEH7txqYUYhA",
  "key5": "471Xd96XXzu5sXXSmybBGQAQVj5AZCenvApf9ruNkCcHxjLP6Wcey5g2BWfNVsdfeFESKwMFdZJPGpuBdnjskGsu",
  "key6": "2LhPRVJXL2mFuytEgCzRr4HhLWSBEhywXmzrX5zs2XkEbLvoqK3zHwk611xDmftizKTPbdxTLvSFC38JcR4ktgaH",
  "key7": "5FpBU642Zub7FJLzg1pGiJZw1GhjBFQj8ZykLYDnTeVcETdkkJVQ7oKvRZGbPjexdipeSGA4VKgZRRsiay689rJg",
  "key8": "5gCLkSkbHDE66xyo7SR6ECXuMoysFaXgBVZDPG9tRW4GZntSbPR94ZkQVT8b5SGVd7T2RcKgUcQHcjpKh1sVeisN",
  "key9": "3EfNrYjvxsbJiaTahktyBuXexQHFgCQDxujQ5FbHyKT6KCurzGn7B2PuxTT9UgqnHwEqaS8cmwjkP2syqQQRWaAw",
  "key10": "t3xtzy4DTGJtTXpxz6rjQo1zAZM3wE7rSaYdqojTfkDaGk7bTwxckCxTYMhuKJHtKA5FfivPiAcwCT8Vf31WSzT",
  "key11": "5c9LicjXAYjvr55fCSYEugHZXfEBq5BxxtH4f7gFX785TYK3Lfd66v6MXhyXGFhnRjDCpAz3VVRZZTBAJEs3C1jV",
  "key12": "4z1LgJTQ4J43QjiGCSZaGjmxJCnfthjogQHDt21DLB8Nbi4aMVH4Qh8Nje7hvy2ADrPzhvZfGDBSFfryCPqdeng1",
  "key13": "5haQtxxECawBsnftmbcVGFwTuCDD2Y1B9gSQaWZqbsmfmo4YTu4qyzytftypiSviAzZJSZBd3XMhuLEjvWi4YM5E",
  "key14": "3Mxa2cVwD3KgQ2tahEaLYiSCpHJ6GMeNctE6zXXEM34tCr3fZSpzH64D4CCdBUj5Xy4vhBCrZg6ryoRi5oNDiRo6",
  "key15": "3S6wn8ZsiK7uNt3nzv7dL7QZ93cXfhzee2JHP28Qxam7d3gQSjYcU97CdyvemPpyiy1BQCKQptcFA7MW6HWNrjEM",
  "key16": "2H3L6zH36fUgtPzLqLHWRujBjaMd8CuHfp7LFJi7JuFbVmFVBu6pSqwN45EqjfwPy8mWJF3RJyvcLyTHYhh8TgRM",
  "key17": "3u3Ae7oNF9Fg1AmkAMvtnJFwpxLFiRy2PJfavtpAuX5uH8uDyDUxZqsDivpT2Gc5grT5GfFTFfcMHQwBMmeHrFid",
  "key18": "5bXyvAS4nBenuSLXg36gQ1hEs9vx4bV2zzPbM6v2xwGiUsKsYm7Jgx2a1Lgohv8VEdg9K1F46CZfHqhgaAnTmPG6",
  "key19": "2QVKPczt129qRfKBPAZrzj3mHiukh1DJEZEhtDsqPVjsmZ2WuH1impYMCHPqFoRafVt5VvHcAm34RUJa9nJChmdw",
  "key20": "3B81Go1G2QM8qMW75TUeb86pmvteVL3VU6D24ZtkAd5j7DmLotofPVC6NE6Zf1DyTw6x1wcBKD6UpRPyDJLWeAh1",
  "key21": "24i3NyfHAdqYgDscrPrugJJ7GtEQeLUcPwHwxsYmhhkjUcfqwZWkSaezvs1TXvzRgFyhk6tC5mGKe6gzugRnaogU",
  "key22": "PKC5ggDX2LufUEqPXdENwEScH7iVNwd1M67xKnP9VNKkMmZ1SpXRMAXmGAkXgTzXH1Z4u63o7p3gNAQDBbUjWwC",
  "key23": "b1u7ucbqH32hG4GmAPN5KHFsR5tbcvM7B1BEQqVVn3DrwkwChPpx8D18CTVjT4Vy2pXJnbeL8z3LCgB8md5pQk8",
  "key24": "4GcwCHehFEmdfGLbeqTHPjJSkfpZrT9YDr9QydC6sv4NLue116UJpLwoNsC9E5KyXvoE6pcjqrpX3pywpCtBdURF",
  "key25": "9qpj4jT4CedZ7KZf8H8FFUL2aUf7ppWexgn2bau3kFZbRUiPGVzQSziFn9nXt1cHTtddbYvMSGk4ZKhQEQVMgP7",
  "key26": "8ecAK7wBKE13XM52pauUA5Y1m4W8eKABmc1W4E18s2FxJvMLH2YfKbrxx2P3FnLqL4J6AofE4BGMpyuAM7DZe1y",
  "key27": "2jw7qzjZBytdHj1NzidYgGKvhxH4kVXC86TfUYSQkCYbW1j3QaNePQ5ZsechAHVUv7XUMu7dtanqzu8f9sLFkY2T",
  "key28": "v5vvrodnmeSC3yDjgnJv1vQed22U2RcFnsae78X8Wgr2dne33HD2dQwRW18tSJM6rSAkbtcu9vZmvCVFQ6aPQGn",
  "key29": "2nKW3KTsH2ggHzsbijn2T8Q9mc5HTGQu9EyVb8KjMo6HvULY4TX49WXkfmjbefh6ihiWakqXJ3hjeQG6eqJaLytY",
  "key30": "3TKD6FiwJhVQCRefRzctf6Ve2BNEgWHP2VpFej7vqC53azDtPo2eTNgZ8AUvKaGRqNLi653ywtXKvrVcUAEHqbMo",
  "key31": "2m4xusaM6RddS2V9MbVCFyYMXQ1xZs42XGgEWx7K3z6hb3PqmBeB8QTLXCbogLnsYfakrMHDMj3guD635uLhg742"
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
