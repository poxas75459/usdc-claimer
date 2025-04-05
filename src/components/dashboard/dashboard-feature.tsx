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
    "24EcPTqLLPL9ZsAVHbHKiC3FxuaVuRBM7gXMC6xGn7hypdXiJQhdqUnfEh1FThyr63Bw5p3mwa6oTU13GcQQ9K1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgWnqvg4HkMaYi9dtJqktYZEnuNM1sdH3dY8xbeKgeidSJbgSbsLsJEFqsf7Cd8ijtkkNtV7zz7Eryzytw5iYCb",
  "key1": "4kXWqY4neUxSk9eNmgKWfr1Sb8cq3Xi19vqoN25nfCC8o1EuTZvwZksqobBByJN278m8JWdxXrcpnYEocFrrMn3y",
  "key2": "67UiTUwWtwrVmD3Q8TBsbdyLRhvLPMiPTcCfMGozRt2cssVutTYaamhqMuCi2sfxaiV7Rdg5impKMNn3DKPBdgSG",
  "key3": "3YcwPk27J33w9hWnSZwAP7tM1z99wkTcshi6iV8tyQcZAjZLeAcAaM7ESFB2YNcwKD3QxmuhacUB2KDt2mUP9CsB",
  "key4": "3RL5XGiQaPwXQKAXngEYpwDa6hRiVjkmxK8vSBcu5uhqZsc88h2i1T7C4PNhoLhY9eRuc6fZRRSKvBhdu2SLf3ZY",
  "key5": "2uez9YqpcKkieWLvY6UTpV4en1hmYjeU57jeAWGTySesZDEsEoLC2ZMKXMyacVMdRYxV39rpiALNw7N6BCfBm8dB",
  "key6": "37mjweHBkjr86VQeU2Mw9npBvNTMeLUzSwgxtnBnQCG6Y5F1cQyhUYamAkDyiQ2zrHYgT4GsteEdM7jGx1nxF4qB",
  "key7": "3kzr4jMmgXfnszFsCXa7utZG5JWNFYhTPbAmqjWuCS9E6zP8C8iG49DnRkuQVpk3c2uX9kytM9KndTKd2vZmNf98",
  "key8": "2NsmN2fFVDVvDruHp6Zq6hqXCBCq9ihy6apf8nAPb1zJKbUdfEokeGugLtApA7V8GypQFVWNugRB8e2H1wT6sFFT",
  "key9": "5VJ2y9dQj25hyxhqXvXWh5EniVaCqHjuLJ7iuAuULmcrbp3sH5JsFDwBSSA1CywcxGMrtHyMo3WDEjAVXBqEsmv5",
  "key10": "mEm4Qd952B69ZF7e4XW9REZS7uuC6bGPRULsnzEEsGFPNZugnio6yvXtyKqdk8hwE8VX5AxHNtX5qMt1Fyxu3NB",
  "key11": "4ryG8XkTHDgZ8pkmvF9GaMazZ7xZNZ5kbWsQS6GWLGFm5qMMmru6HCSpicz6eDWHmEjEGwvNFZye3bR5afEJwkvx",
  "key12": "2X7RkxpGBbgZfzLyAYWzkURvHgUywPfftbfTiV3bXjSGnhyeGZUMX9qn7PNBN41HFwN6BzAYWEEp2Q8jdXcj6xCh",
  "key13": "339837z2VVKr2GWAjg7yuxFMiP2V9M234mf3tFxroNVPTSv3cCQnsLzTC6Y2NZo5DAukbncLQZVxrGUr2QRzas9S",
  "key14": "4dqPryXRHkDNno9PrgdiMoMW7fj18YTMQG4mdjxEwp5tS2j8xY4s9PrhGjyRjzzNAxqeG1gRGxM5oS2ZLeibKkVe",
  "key15": "JJRnpNwFr2nxtacLH9NKRKjQp6EnKWZGwdxhoLUiSsUrVet3rvjBso6DFiYAY3nMptQYdWMJidf1KCpvtaAzZKy",
  "key16": "CU7LEgSRoziqTfKZGJ4RgPzwjXsFNgiEcjf8QypVgQ14zDcM4uJQcRcpLPx2y3dqk9J7Q8ij1ydfo1UToSRqL1N",
  "key17": "4SpEcLuEYdMrmbWcJ6caSDxfeTn7YDgU7KBi834fuAENgZFYywonxn7GZMw62cowDiRBJLEmSTR9rstvf3PNvQ4k",
  "key18": "5tWsMYgRoNK7iyh7Whtr3JkAgXpiaxvtqn8BWXece6Xg4KMsPu8xtw52NjTyQXYtne1RsCEFvVri5E888okEzqJN",
  "key19": "3gNLjebGbnTk3KvvPwsSQLNQ8aE3hkcegiiUNarB7486DJFo9Zp3fudbjVjwrHbagoQsZnMsCTUCmbZrC8obRys9",
  "key20": "5VZJGFJSND4GaLqd8MML8M61nptXrQ34SfrtJycY3jGH36astsqPPKVVgMQRr5fZ5hz6jQRAgNxYEN1HHKmwJeeJ",
  "key21": "3SkZyKyDdgFge92HY66Jm9YpMq9cG76ymMweH6Hez4KTyun52NJV1CCQHFD1wLyHg4eHaFxe2yfuxs2qpafukNfZ",
  "key22": "4Xc1VeBBaxvhmGHTAzd4jKBQwiiZ9dm42EGLQkAGBhLmP4dgt5qqTvYioV8b89j2Sai4jC3M4PqonEmGTUyrJJbB",
  "key23": "5bes7cNYjA14FimCHnqLJeGZMcmsV5Rb4zUCQvCFcVkdyGQcwL5kJwz1aZgwbLaMNZVUtCDgWkJzp3TS5LwNhXZ8",
  "key24": "8mMVuPSkEpj6TsJkX9wZqXJdE8DsSVpKWiYxWvSNcE7ZZQHdAHsPQ8636anR5wMR5jdNWMbu7pX1zjmNxuRkEZY",
  "key25": "4T8asyD9kzgJAu9kX6pz3bcwN1R3iPF6Tef1HgrFkooDwVRN4aNV3xLMBfNHmEqELtNeDGEy8aLpJGfQumhLDzpg",
  "key26": "6141EGKFrW6A2MLABXJPKTzcciB8TPrqVk26HVergGqK33PH6yCEXYCBszV8jM1Prxah5S3mmfY5Cc83EXqQ7nLV",
  "key27": "5qCYz13h2hA2ANqVuBsyXs2PsyXLxFXbVhFjsxEZXy7Z4xKA39wz3xEEs1FESc5kg3bEZoij38K5TwaFHui8QK73",
  "key28": "5wGgVy1YkUxeq41cnzhrFSjzZDwK4ztPxzHjDw95nStQyQzGe89fCRVpSHNvMUpoUjqG1xQC9zSxkZkoMaY17HZ",
  "key29": "4JdWvdgwaU91CnDtzwWkxTCSXMkCvYEZFDxtE4rMjhnmAAwUiKUS9mQzb992YXWk81uwRFqsBDkXWJmvBmhXm4YJ",
  "key30": "4uKjGniWZGr9y2gPvdwQDikd6G6oxdKHPK5kr5wuvFmcjzPhtTsXbuiBUSAythMQ3LxN9jCo6AEhXX3AQxBC88yM",
  "key31": "5vNoJ8qNzFP2nHc13jLXmaLjto1exGBSfYaPwUrU5HpAjJmGVuWHsWhM1jDQXnghCgZXLzJzAsQCrtu48cSjMXAz",
  "key32": "5WMFcUQ75ssrCFpPCEj6Z4K5Qf4djtsUH6tSMCiKMqBCeu5VroXD2THAjB7vfgXQZCRZ3MXmJaGEadCxrxSFq4uE",
  "key33": "2TBJ9jfnhihLgTkfQ9AG5gwqJ82jiCi23rbXvmAMx9ge33W8mdrY7umyDj4br4gYGBHAdBWbB6oR416t2W29DnMx",
  "key34": "4ymRWXwVaCaeR61UWNYNMhvdR62fARTdrGkXdJkQBuXG8VekvD812e65DoTqt2F2e5fScfNnG9QqvrmVoLFUGqTn",
  "key35": "2mXkK8w4sTTNrSmtR5Uy113m4uSyq3ZwugTRYx9bjaYZX98B7TfM4d2ATWU6nWsj2fdB5e78Csu13fM24NkDBkim",
  "key36": "38NYBNuahMb26L9Fh2rbSL2f4mTvgHJg55TBuED54amCxK5fimRGjJGWudJuKcRWxBb3Ff868pcK52UF42GvSCm1",
  "key37": "t3sofsaidnMGJ5sZtTyqtw51AgzFhcKYsdpjN3NVL55fHFTrqHVZ2FujVuQNSL4PQgPascnVAUHan6S3fpPaB6c",
  "key38": "4uJQv42Vgyfn4ZUfd2fjcEaHA717F6MJh7FjwTdjG8SQJveFDfmHWQk9RMao2KbJob8rzZfJ4rmGzi72xn72cmF9",
  "key39": "44ccgvPoiqYCn8bn77fQVHXmFCNYSgkoE4vmyKHfFpJPXJaztFt51XkmRisNsY4mBp2mf8Grv1erA3uTfAektRoP",
  "key40": "YCMSxe5aKaahH4xoHNCCAwsP7LCt3yJicpSojAH5eLJY5NDKgb7zsLLsx7XBu1N2hFzUYdGdqRsAMPb76n7aGnD",
  "key41": "2CUAdnWE2TMVvocNaF7kK89YiRQL92C5VhiVJpN7wT2jk91oC7haSQHDNXzLQKUhkkh7wzF7AkGoPqcFM8H2pCCH",
  "key42": "2vY4z5WfFsc9DiSHJoup5ewoW2dTgXwNudD7c7e9Nf5X3LRFyeF2pCaXig3THumK6pKpriXQ3qM4Hb3uMq4Ch37e",
  "key43": "3xArd771H61DvBKD5x8VNZ9Pnf226snFJ5DUKN6j3f8rR6pHTcz5czcD8zwv8ue1XujbVcH1owSTnmfAZFNQALUr"
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
