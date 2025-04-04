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
    "SzA53VPoG3ja9S4XGWHB3XtYh3sAugVA4aTwFfLgjdAPQw9yHgUmzY3BUxSGV6CsYo3CXY23SrVn42psQ5N4gnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pU6pxrF3anE1HepRY66DAPTdNtbzePLJrEB2ZuC8yEz8JB8dghu5AW9gJhiPxbTJ35xoukch5XKPVmVg6X2mPxv",
  "key1": "22E2DRmftEjShRHrkctvXHpDng5tUcdwWv8c5LdTqBfiYdLnxbLsL4h1FSaLB5EJMAGXT2aPechy3KeP6BhYvSRY",
  "key2": "3HmQNjzcfub9yyBXdq7JoeRWkJV7s7XfTz7WZRezTF4m6dUX5hgQHFScX9HEkXWGvQpqDsfSjH8hjyEXSJBc9cRn",
  "key3": "2tSK656N5qJFt2gXbMdyd2Ue7aowaYmiPiuD7J7H744Y77MnpTKrvLfsmnqL7XRovjdbqYa3xLfo43GR4cTG1gpD",
  "key4": "4NDXiN2JZzDnGJSCSzRx3AT2pWJKrCSCcMftgdqiCE1X1zbCFDXBpfXr5gcQwpFKzvi6ACdPmTnu7Gzz9tSFQR1p",
  "key5": "5jF4qL1fAUKjQVJUn5yBQUWBMyXMRZu4eko7L9rHn3J6kDoJoiGi2gn3DAXCw2tEoguZHVbojS518k2YWLrmJGem",
  "key6": "tfpFhWT8cVADvNDrnq9oTFab5Q1k8MoDMqwK27z53XWNaQKxYL932M3a8qM8c9MCTvGRAzpMnhJ46WY1AMEcZHq",
  "key7": "48uBsvumq4FiMkxzCuTiCeFCD3K4XhoC87oXGdoacS54E19n8ZgCpnDcmghUxRnp5dqAJMqEHYMu8Ny61PhdFEYa",
  "key8": "45E5UejgDeK8jgDvnb1fxShN1xMSpZVDQZ1ExjKgh8q6Pnghse4mEzFZwCXwUwD2ndNEbJe9a2BXxrJkKenP7rkf",
  "key9": "WCeEiScNqKRrpytnUReFQMaj2y8RNfXzYH1AcvS6atGtzDhArfYLErhgqgmYLCM3Jwd5n4LT5zRJxUiGPKoqVyD",
  "key10": "5vns59hPpF3FdzxTyAz9Ace3b7iuYtHEuiHkPVPhyCHFRtjcaFXxooJukGFNozL2UrkcVeaG9FoNf21RuFRGTgie",
  "key11": "64fY1Mad7tDXyfeCBZkR1A9fYCeUEg7LKc39CdhZyoMp7w1k8LKHzYKGWgCrFUJdDw1fEAyFoTLrDRf2LTUQu1vz",
  "key12": "5ot8yHK2AkLfviYLHZyHc4bvdBiFcgk7ohvJZBWWhiRnhPEk1vLgV7wpDm6dt2LAWgkx7V8xFLXcbF4MnkXXicjm",
  "key13": "MMn7tyz3pQxYTVyvm2SQWXtDysgzQYcQY3uoriiqojHVwaycEd9RXznjP5owDV1TmFiD11M3qYc6F9jTTgQg4tv",
  "key14": "2oA6NjvfFwqKhEpSK8EBCspKx7b21Gk6uXvmig9y9nnx47sigtygEd1WioFumsMzTzxFy39YCcd9LbiybAt5mMHW",
  "key15": "55YoYEdqSLUbbftpQM6fQMBrfyXwAZutfnG4Nu62V7qSenU6qUkGS2dnhAUEtvaX2mgn5UAS8HT4CkbChXbRYsvu",
  "key16": "2qQ3SoTuTSmutqFdfTiyr83Lg7KAbo7Qitoh6j7BdkLTNwHf1PmVvFS7optZ3TSiwscbhmDKJWHouggvDW8sJBQk",
  "key17": "5B2uvH2YbXVJru2Fky7W53xbN7EBHo1fGnSvh5K2rpqYoMZMSSZgjxn2KRq41vjxJjLf8SDS77CqxfzEXasxcbQN",
  "key18": "4xjBR7SJMhEmabf54fTPwhXT9BE3dPfSz34YEkGs4y59RoRzpRUqecdzkF26DsoJqYSE7Eeaakhs3V2xNShsvxkd",
  "key19": "2GbgTQjpuksWhm84uMcLPHGJmgqQpeKU4JmTQo2Bjf5w5Ve5DaeaxYrp9DsKEghDDUG6zYaKSkf5fZwCp76RWsTs",
  "key20": "4A5D5LG2Si1B74M5b4JgARjsBokX532TXDNA6YzgsfgpEV8ozw8oRJNpiWMjkAi5TRDQ6aFWNuqrzJNnH9ApG9qR",
  "key21": "HZ2AiAWwKjP26s5HPN8Dnxb19HoLA1UQvFoNKwQiPvv2mf4ZUFFtWTjTSnWbb51zwwHrRTFxoWh3qh68KygJyJe",
  "key22": "2Mp8qSx6XqddKhDNmu9EwuzsVEyGrx3eE3LbdpxPFqHaEDAsQXw666GTbZ5yaMLT8GsJrUgyJsYZpU8nzX1cYCVA",
  "key23": "5jNJYGoZswnD5k6SiedVKjmxQ6TKm4F36DutNd3nf6C2soBEFMVCpcAhQe4KYZPgcEJ82ChLVihFNV2J8sHAxNaX",
  "key24": "52N8iHchRKWRqnFY7YSKLjwqMhN1MiZLAog3SfXJctUtEAdxxD9LnnLXxYqtccPB8L8rDEWfvowGE7dNH8NCigJi",
  "key25": "24J1xGTNcg1KRpHmJZoKnDs5sD1R8f7wW1Vc1RGwWJeAR7pZigtTB1dRThjbMg3GL2agEcmTAqyfoY6LTkXMr5Ps",
  "key26": "2uXLkSNSpyUTWXaBzvKfadeaeL44u2LCGRUZo77hN6oNHqdBHHiwJ6qMzSn6hMJBTc8AZ71Ray4LaGM4XnZMXRPv",
  "key27": "33GjkUUPwcYmLdT3ZqVb1NpqZww4MYJ7jEbSg4Fcq1krBpV23uwTefsiMcNY9RRyDjhvP45nFiJ9KVvQCrX5R9Dm",
  "key28": "WXd5Z5i1iF2KMkxhG9hLWpCi5xDrXyRe5fsb3kuq8oXSLunmfdKctx1DJa7zwrYVBTWzYe1SXzGY8aqjx2apGN4",
  "key29": "xd5Rzo1x5x5A1sbGyJnnG6F77J2ZUESY8ZdBZZMffE7xwZp9uUQwu1TkDsQRbcVC7kfwGdXwnHU45wW82d5XHoU",
  "key30": "642cWm43KnwT5ktrgEQLWCKTzSr6XVeSu6BwaDR42sF3KAmZBEx5pbNmSey2kBEmv447MMhuQPjG3hrhJw54sAmU",
  "key31": "5zb3cVAdbXbaqBopByKvEQRCtJ6XZfZUaV4zZ3jQHTnqnihueKgysKagKaLyNE5bdJnFqJkkgzkRASHFQaC5BR8X",
  "key32": "4i2wxCty7w2T1kaoFTc8zQzFktdftHG1NKtfWk3iNoDFdM37cGgzY1wPhnQqbQfg9MN2cx1zffvwYY4MCA6QpCFz",
  "key33": "5o3hf6PTzWfz6DHTXtQvHP1gTgeCojnMsrGKhALM1tHDxJtHHmMijaUZUYrsxTLM4DChvHvV3b9HPcmm53H3ahc8",
  "key34": "5NHJSQGFdTbkNWHZbvKYYjdgzF3yBAbR7VH8fbhsmkkbccZJJJikQvGEXJ4EbG729rQVNY2fCqm8hJPBCPst26A9",
  "key35": "27fHVM9XJhbC74NQhWmyWj3kxkAmiYYGxeE1vcJzUYQveUHSY7QLxpGgheVapskpfAEmuj3mXDkNWbRwKkcJj8jC",
  "key36": "3itqFSh7qGXcwBmKHGF6hxsWmXaYh8ztcwXEANsRRsKRBuvcE6pp9joQqPgMTRwujjiVJBECVmbphnGjiDqBabV5"
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
