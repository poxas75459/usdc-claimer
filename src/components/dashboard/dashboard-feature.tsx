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
    "4p47ascR1dPJRset8gEt6QbcgT6Qvs8npM15zY3D355MCRjzYvNaFZNFPsxUudVVsAKA4iZm5LGLMUP2ALZpCe2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB9MG2WcZ51AisuQ8ba2FHKi3VLpgkmo4eHJmtQNKQ7V6ePds9oNerH7s5PRo7UrgJhakdyhgT5cx7X7p6HQP7Y",
  "key1": "5yTN8X2EB5SvdNGnF1Fn1VzihDwjv3cmpqQruWoSUUsFJThdK3qu3WmcLzUBPsUtK5akmvRLUUBXne6yV9gQN35t",
  "key2": "5Rd6nwvFNpZwC9jXuuSMQg5Umgo6iN58rqUiXa1xHv3fC6SyyNrb1tXwbQQkKXgd15LRqwmomMVyY7td9erefNu5",
  "key3": "626hhgNNiR8HiVmT6KqT3hQx9CxPSCFUpyUTmCKB4UUxdCDZWTcHZFCtkErxouUkxMGPdPoNfwcNrbUJxoCcKRot",
  "key4": "5hyTDgbe1uYbB5Z9ZJU5XFJ3Wh63S7hVUb8FkxE5Z4aq79ideceG5uVzEP2h4wR2ASKPMkwiP7PvhU2YdFgb3LaJ",
  "key5": "2UY6SjT8ftT5yRyGnpU5G6fTB3WP6hiqhvNgBc7yLQxGEfdJzjrYaDQBGscEZSqM7k5sdTAPdWFJLaRZcvGtE9P3",
  "key6": "2FKA1qBsqY3oayxu1znBzFANhbTs68gmNtRFhjuktGNt2UumMzMMGjYrkUyGDHKRHveiqMGCQQTkDsGU5ixb3wDb",
  "key7": "78kpPP3gYaHuDMEC8t9UeUbjeRtyRiW1n9GdznP8F1irhdeTabDJmKbJqeJwd1PwqCdqR1NyDc25EJquqghK1AD",
  "key8": "4fycT8Z3qyWKN2aQVAZfiYAjob2KJKQa1kH948dnyoRzB48GjoXNTao6FQ7d1bf7hnTxBTtsbgy7CNyvkMmaTzfY",
  "key9": "4N5LdbKfHGEhhgAKUjXRoKWfwi9e7XyyaJcirwervUMfqnUeBQ8qFAbpm8qYgRt1bTBFCRJhiazCKrdW1CSPjL4c",
  "key10": "FB58jhWsdxoU2CoARR9HJz4hQno1YLUmg8KQPqvEUj899DvtFj2cYzdckLW2MBBE4bAyU7uea9WnPJkegrmw9R7",
  "key11": "2tkuZWWeuoC6dyKAYrD8YR136odA8i6YnTpV5g6hdRt7YJTzkaHmhP5MXxpusb1S42iPV2YWTjJ8Gn1oVTyY7TaA",
  "key12": "2ddcFbBjhPk7hvHrfLDkScH7MkjGLCEXxfkYkqvwP2Zkjgmem8aK9JfgK4z25GfjcJ4r3UN5MS6PQzYad52jraBp",
  "key13": "3p7aDjtNxKBwceX68Yor8BQTmeyriqjJ7QCvrCR5qo5gQhsx9rHqBDLFtfh7ivZqinxNn9nQ5ySXx6S3zwdn5DtC",
  "key14": "2xoUqpZXSaJyJGhc4zeFbTHtd1ErBRQtFipj3yNNrccsaB43krPgH1AnkbrxejmSCV1xxf52Wczwdotaa2QPjMAd",
  "key15": "1291hstr3AgDD6GM7fY3BJ6MMbpqBaKjGCxn7sQVi2SgrJdnmCzcoV2UCnmnDJwkFJyY1oRNcN71YANbqySqJr4M",
  "key16": "2JjseHyaXtXgqMJehX5SXTcH4fAKdJ5DaaF8dJkokSgZ62BhdZuiD9DpqBxV1w6NHKNGvGdapLVaWRgitvore6mT",
  "key17": "4VLSTMpqmbcSaAiWCxyXFdEb2UXmhGi9fTfBrzptFPmU423dMtSGSaBESPYJNFwz1p587mxvpZxMNzr6FTt6uvCp",
  "key18": "3VaputPzbb1QcFjfGKjrcUKXGssw6ajpXhfG8XwckT2QFLvtN6ME7Eaw3vkCATch8mR2BhVefh1ena88L6wP6sep",
  "key19": "25asYsEpVFbbVhXD7H2beBy3YpKttd1VUH4vaqyqYGqUU7GLBkbGZn6hAcf7VGYeVWAezms7xoTrKQNstJa3QKbv",
  "key20": "5cnPGA8c7KbttryQXidVrcWRJ39vMHtE5qPWPWpi5S7QSqLddeu3QLLNxrKuin9FpV1HypXDbtStuKTB39CzciTA",
  "key21": "5b9P9YZEsua63GUBauhc8eUFrYSSLezdhk5C54b5jPi9y5EuNcTPfMhYXFFhPpXu4AkMdn2moLPjzULuNxWzdVaA",
  "key22": "4xvCKN1gisXLiaRyHFeXdBs2a99H1wgqx7Lm8SvFxurKYFjFKtDvnLBkTptRZbaEdx313r9XUTZ4oqR64oZ6xRoK",
  "key23": "pybhGUUkoygnKn36QapQqGRcjcCT3UmA29oS14R7DHHMgpYJph3D17oF46kubFqjFYwHyNEd6PiVijJqCBojSXY",
  "key24": "5KSY95uz6dXoGVQEiqMxkQbVrFYMmyR2Dp4ATCVxp45Sk8JS2BPiGf5h6bH3G6zdbukEADfEt39bxf6THwtqn7FY",
  "key25": "3qqRM3Rvj9jzSrbNySx7YyQooBdvPk15MVB3TJ9ZTsduWzyMb9U9qW5NEJfXjCyTxhH2EUxaJYw3dzFAz2H8hgKX",
  "key26": "5toDzJZpKaVk7gs3JED8tJkkZwZ4bBLKPF1MfXv1CDMY35n9jqrQ8HHtW89kHMLUpUJViG6UJGCXuWchKRzhsUUh",
  "key27": "4i36QdMMkLArPNwg1cD3oZQ7KvchLQ97zKwpbLXMbNCvYnkaRqfRYUfdoW2zzshiDas3WXa91Nyh9XbrdDVvWwt4",
  "key28": "4Zd76mkrkMXDNsS7StwuL6RsMEAqVbQw5FRPdYJNPD1cuf5zeQyAqfBZPjuM7KfAwyiRp4GxFh52r2BgEBwC6CRE",
  "key29": "37CKD6X4KWvCXq3BCJLrVTEm4STA4h3ig3wLorkWAFZAPLb1y2dkyhVHFi1EJKSj2Yn8M4iHZFaACcum2phbKTRi",
  "key30": "2NwsFUqy8vMZL6u1sTUNwHJxNRsNEec8EJ1PUmmXfnV8XYEGnHztVA7zdmKwgP1WEATFE9emiMuGpNC4hnvY3Z8r",
  "key31": "4fx3xgRZSfUMDD7ntV5Z3eaSYyvXb9oh8GRcY9Mo7QLQoLErxG7TkFnZmMtwzGHURPfocnPwbb5FCXLikJdhSdJj",
  "key32": "Wj4PMaNniJiuQjTwd3xqJ7QT38QRVtx5RNjrd9E1u9ECThUKzxHjnzDEERY8dfsP2ix68oHWwHworrXKnyPU7Ge",
  "key33": "5RjmhB7HKddC8XkkumyjUx9FnTWRrZ1YG4ZvmPoUmqBPBThvj4Sfw7jccLiZ4wjirrXYeNeRrDuD8Tty4yYns3eM"
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
