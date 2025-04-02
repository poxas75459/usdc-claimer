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
    "4SFu1icHpPwYoLcVReEjB5o6vynm5Vj5iPxT98ky9qt8a8qYYRK113WbEsvknHGko2R8HvZWv8PBkGrBrj7ntkRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCT2SjLhmMfT8ovxHwGg34vRwU9bE3UvHPLN6aT7Y1aiihsZSnowdH1KN2raTF1cUAieMVNQkwiZd9KvwQrwMx2",
  "key1": "2nw5AVbqafGDCAdBj5dxsLMNk3kW6D7ra6xBSkFdH3QDoGTbumpeTcLrpeAkdL3XABe4LAcTrGqyBharFbQPEdiq",
  "key2": "3xiL3tq56uFBEhsC3XZe6vDWsALaHjNegpPm8GZCPz5ESWHMgpj7jUybSNyeEPgWajk9wrPE4HD7TfcxNnJ5SroR",
  "key3": "3HwbWKKavadmPW5KAi7XZwVD7KGNR2TwoKUL61TWeG3d3C6cH7frQGpVUZ3KFsDP9WHyW4VeAFNxVUSbCkHbQQMG",
  "key4": "2Gvx5B6bbQmzymiRh5RqVbjNWgCCSYvonpw8rs29HMV1WqwEX6fXPYSi3e9TwDXJkZZ3zEyQSXaZHouNPC1j8vWb",
  "key5": "3gT7MxoQhCCmKZNTcRWtvt5FJXZwGgRtL9L3ZuUC5E2ER7JMUdgPs1w2SYK4WWLcDQym2bAaTbTJNaEe1FqYzpc1",
  "key6": "HkfhjwuGGvtEsqNRCZM4efS7ZGcXuuXT5nqYyzuaRZCD1PDS2mCgDVx5YM7vqTeZU8HoVRcEUZb1qsrvEoY7gVx",
  "key7": "37PgXJKAttjAfoSJcmaDhZWxx9AnPKLusAn8D2iZNWtBcvX6cEbNTkjkjJLC5nge5xM3w6rGP6x7ZBzoxmcHYAsg",
  "key8": "3ro2GSjfEno8hcdsux3UkfPJQ6eXG3Uej7NMSPbeniJhQtfJydpZP2PghneYHtKW6UusoMKWy5onFFFecXxy8CX4",
  "key9": "2UgZexeVqgSPopqREiSYkwyxp2PhnqNdzVtt3xNBad9u8dHEugbKgSpk7azZSazFf5bJSkyzjMqimwPPDESRYyPA",
  "key10": "f6ySjutj8Nu3bzrviwX6Ka7vtqhvP6keBehhUFXdeeCANuEKYzPFb5Vi5Aozv1Q7SCYGjS1TkS4RsTFnjGP7prs",
  "key11": "4Perih2mDP4jyu4JDzEwHfLzvS3Wrfdw8CfiBCqDiQfApzU7sxDgMVHUCtC4g48bGuTawXmdokCpLxfe7c9fmMbr",
  "key12": "641vdJMFX5wJoaYjWZDAKbQqBw1YJLd4LNJsKbbDxuMM91DiWskCQ6RdaVyEZquK4SNmWCrZpwdYxLBuA43SYY9j",
  "key13": "5dEawqwtoUsWMgVKvQcXC6MrTW6GZdyVZi8N816A1fiw748RoeNT97ofF5QBFS4Q5T4K9NYTeWD11xY7LfQe7ewq",
  "key14": "3J3ygoSWzC11q2JwLaR8DN4RHpCmvfanjvuZKBCpEox7DMb2dBRicgfYAVDStPFdWg7qGbYPXYAQmq6ZzcLjxBTB",
  "key15": "3empzn4K45nBFNXF9GWX4RoonBBPDPk1z6F5GyZzr6Fq3ooMKLEkMPhDViTZegSDEmPPRTNV6H5oJ4n4vyja6qEy",
  "key16": "DtXHHuwbQeXcb22deyhgKxdbNYMT6gqkpLjQKfKSDDFhnB5kKondNNoFGULqxQJ8aGc6Whir2cvhPsoZET14PqA",
  "key17": "63hUrZUwxmjrGADpAczMXYaYFufRwskRv5tZefxP7DXVJJ2Ue4G5bkg1uZUjtehrN85ZpvXDQVMKXj77MpJMAD6m",
  "key18": "UsmuWHTwpdszCsFNgeBPowybhm1jWr59qsxz22hzb7zzFDSi1ceBFm5iBCbppMbavWmzMmkyYYSvmBKE5hCvPrS",
  "key19": "4Tk7gjKPcVJG5KzGd5fsBvrvD5HGhBpYc2ArQjiDp1RtDZuH5QjLDRaXCQkRRhMcLBirBkTxTM26yBX8MiNHscky",
  "key20": "5Xu1uVbYvBrGmGVb379FMJcD4Fyigho9ZJPbhZn1Ux5tybkW7By9qG4c33zKgLp7WHJMp2XADrvsqjfT9D8ffVNS",
  "key21": "37UMGgKdT7W4hHSdceLfHZ6Mch6qRKuhE2h1EFDRA3k3qxRW3ngUoLujs6o1UTdeXWD36nLWqbjyQXWWHmMB7ap8",
  "key22": "49GfFgcNnphTCvQicsnzZLLMmnyMeCSAf5yP3yb1thyD16DSfavdT2Uv4YpRzasqByCVW1yrhFrd24khACN4tX2o",
  "key23": "SWnEwuDbfPYSZecw5i4NRVwSyXdR7DD7qupefGSQVhfWb7sJtKqJB1wnY4wo2F2JGuLTvXjEh1nSZttAc1BDHrK",
  "key24": "4SNqLLZKXgHXKDC6Up77BkJKMc2U6siVvAdCDfB3XdmWWrkccJrtNbmgQ7JghhUpExaCZSBRvkRR1CVqCde27sYq",
  "key25": "35MGgmerd5zQxHHgvWrtZm5oRkbEBeWGbLfVKR7bymBVxYuHKjQ9Q85XaWZDNZFQ5UKdV7WgV6m7Dq8W2oFjvUj7",
  "key26": "3qHS4gqeShnHBKW6RSuPPzVFDKt2bhBUPgcT8AYA9hUUz6UqAb7h8xJMhMArNp7W7vzPq6pNe6tuhY5GAu4BbSCP",
  "key27": "3kY83nxrXu8YYa5hD2PzeNoE2v9S6F3GbSp4vVCXqQ5PxGyWga8wnCN15CpMtrdTjrAHR9Q7m4D5BKTiqGMBjNC5",
  "key28": "5ytVvvWWTEotzRS5CxupDLZPehFtaT6gKqSjrSxXhPWxvsWv4G2rv6AzGVvUeoCThsHS9dQ6P3S88wPhRFFFvCKm",
  "key29": "4FLWv2kqDsCBfPcbQQsk2B2MnxpPimPT4nMgKD56Nh7LhN2F75CVyMfbiTj3k8fppDPC6Snetkh43KfH5zH3DM5r",
  "key30": "4a2v5M2JNpanTArtiQYArqd854UL3FAJbDNGcYQHBbQQMJPaF6tkrbehBk7AzSYM64Mh9DxKTp5KCBFshnbqRR56",
  "key31": "449j1brrsDr2d3a4tuEHgYpo57eiDofM3CLjmgKZ2VdNbkK1h4MU6VHQ3WwXLZyodXNv9FPBquBGBVrZZATSTqhe",
  "key32": "3qkky2zTG6HUGGPeWBRESdfoQqAMVf6ffVsFaokckR4L9xk2tAdretU5sFoqok5bGdGjUhurjB3pp3vWNXUqppf5",
  "key33": "2cRFWwbBPwu9Wes3hZxWZj7TBKrdTbmMsNGNaGtkEjw8yz5TEaYHwPAa6HX2i6CVQN2KjV5Ur6gYqCEuzBj2Memq",
  "key34": "5mGybAfAh1RVw9ZPoe5zoWr297XYCRrxTXpUEUA4h7CNEBxzBThgaW5qio6KYSU1srdZJmXN8es4Z8VA64mdoSyw",
  "key35": "pFJGFVQWqyZp3TGhyk4V69s9xLeLQC183aE4Z5LVvRFkefnJs8rZj6eCZ4yR4ZVVXoNoSUwVy9Z7qHr7t1axixa",
  "key36": "4V9rc4dQqcwJMZBMAmQNNkDYfFHvBBh17k5aWKZANU2wGqfUBS4CCaFNwD8J44L7Ajf3jaEda5yXwhXtUk3M6SFz",
  "key37": "2EPJ1kWHWbn8vaQSyRXvQG9TF6hruWJ3FViDs3DgBounuZtpS2pGtqueKsnruj8KcSuTSvwVAqQgnu6xykjX1zQc",
  "key38": "3rzdbyzNLxQSRkxUHzvC4HKUwNgV8YTKpcLsZSzkRa2N8yhNSUG1rBQz5HAxVYYUqYokqeUkY5FX7CHHRaaE66pm",
  "key39": "2pya4LSw3THNEeihTdzVarc1MwdYvceir9cYnJ9fZtff5j53DXvsvks7vRfrdWYAhRmSjttT6VtunF52bhS1fowm",
  "key40": "2VdrRzWic1YG2jC3WPni39Pr7eDLJNRkKuv5wqouV59KzdhnWBYdmzW5peic6Kt8a7hp7L43Wc84TV47TCayaT9f",
  "key41": "5XUhoPLRfqnfkffFX2BasjR1wNj5M4P8XdMdEUvLjmxYDNdJpnq3NWvJN6Vu3wJPqRkuvMSjbzTo5pJN92VJ92og",
  "key42": "2jne3ze8pj9uRVeWKdCxhozR5NgzuVzm48yxsTdbebM9v2zB33c7uwxaddLNbW7sBirQHurWvU5ERaQ897LEruqw",
  "key43": "4Q7Cunyd88tugxM9rsPguNGshiauETsHx3WLUakE1nYtAiM4F5uNYoWb2LrB2QtZzQ7JNdL3GTWZX9R1ygpps9Be",
  "key44": "58QRMUk5zkzUhXgJhwtuNv9JuNzp7gRft5Q44oCXJgbnAzARUr64UCHmYD8dr6bi1pN2zTPDpdm4vjVV3EYdTXyf",
  "key45": "673Pg56tfMw6ie2CQwNCxJ1Q5MemPHqRh1JJBtqwNmuvRWvkV69NZSjjVXEfLgrvZEeYZGRLvGkUeKpxvt5CnazG",
  "key46": "53fqpRT9ThkGXGexV9DKnGADPVJZpVAUo7LVwmy8bW78YTVYJqxpVY5S18HE55BALhjbVekJvk6xuE9VMY3QKUpx"
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
