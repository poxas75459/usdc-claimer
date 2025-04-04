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
    "4FDV9sDjhZ4ETS9M5nPtZVvn6i6pvRpQ6g9txu3XX7h9HRro1X59CoED4LWLuTvaeYtRj2ZK2h2J2xW8TL7iSAce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzRvnBwuYGN3LgHUQMZuXk8WjznmoZUNDaEN35mcSwJtv1Hv9rLT1xChCjUoLYADzZG4TrvTVt5L35p6nv9GkJS",
  "key1": "2gk38hfYAe6Tz4dofvd2Sht1BhDkaRok7RKZs1iYNLWZxhLtsFWezregmX2duGU1aHLLbT98ixj4UopeicEeyAKN",
  "key2": "3GXbrfuQ3rWLnDF3c7qyhnMq9AHfqwTTTeiLQtzTEuDfai9dgnfZNfnMk1CBGWzQSD6vjrG9h6z6Ym9Kw3iPf59h",
  "key3": "EDAt3GC7Tu5zeiE3ombozWbkEDSwn5hbsL4kZ5qRyKQQvUZUNRB3qhYk5PnH2xKLRvwcsGbjnzKxQThH53wvxo7",
  "key4": "2aEYQRaYXAPFJ7nTbRfck8pN7yzg9rqF9QcRE6cpxuQ9vhN2r9n1srd9gBtjXb2D1fXTcw1yJndENa7sTz3Q2azV",
  "key5": "4HQ4NEi2C8nbQyydypkEzotTqGikVnmoy31KXiQ7o6JF2cxaFPm6y44UVPndZ58Hqwmm47vgW87QNLTei3wFWjmF",
  "key6": "2Nmv8MLAF1x3eF65EUTemhokMncVaQjVgx9439cbXJRbEwLShXyezjqJZUWUUeSzT4aJdGu5guNNKzEarGZu9PJE",
  "key7": "6tVsZU2wNpnobiSBcMDosr2V5SdwW5bgjqHK1yD4yhPWeH39tTcMmCnAcopfmHQYo1FU8qNGQj3qsmXRMd8f9We",
  "key8": "2iUvXazCC95A1iEiPnrVGMBThyZDCHgLCdzfKXr2R6pZJvK5rgMGrYFFsqFgyXzGqNkKg3huRzUpwZC6pshL2uPS",
  "key9": "2PZpu1x2Zju3xDMbJutDNqTfdyHULemwuxfZ5jU1Vdkhzg2DN4byyhUkUizFquWKx7LNVcxoQiAwKwaAKEt1R8M6",
  "key10": "3FEEhkHZ54kst8UKXAvqbnejHJWVG777ygGMVRSSnKvoe5RM4soiaR3MX9zikeso3JwR9x1BvEjjUn4kXPEVXBB7",
  "key11": "5QuBEcU7Dm7Q18LCJMgiMfSZsVbNmwoHp9xeuf59kXLgpGLCEdb5ao61brRa9ABfLuPfwqaKm5N1UMipLhV7wq7j",
  "key12": "5cuVUb6tzDhjygP5dsBn8ZsHhdjWiCbsVAjN9LuAKiyZCn16PLhKchUa3VTEL8Co9x59EAuM9peoirFRStdTyywQ",
  "key13": "m4LYehfJZDE1rebACSk8BVnpXhhAo7UpWBSkgYKhya6zLmcYNGyDCuScHnoYL9UAP4XdKG7J3N1g4ua3ZTH9L7D",
  "key14": "3WtNwMNR9nadMVk5ERY64xiQGAEgQwHL22ddUc58aCPZR79MDSu9rHTyi3GAR1JQ6LaPQh7yoqeVnexfV2SCJR3A",
  "key15": "EbPDFhRHX8VqL4UK6iXPnQ1NtEEH5gZhvhVu61H2jJ5GPjQQA7ZLmST8GvLioCPooMgtNTbi1QLFxS8XKL2gDX5",
  "key16": "2SbxSs7q9JLJt4dLmT44RShXU8JMZQ9erNmpk8DeWde55Hr35iiEbieJp1rgDLEVuisBBPjQcAyJhXVm2mLn6TgR",
  "key17": "53TBPsZFsHyF2HA3g72sXsx6DQRZ3dnrpjkPZ6rtE1x2q1N8WDmjvb4eBExmDqnqG29tbHWJUi7rC7VEqFVNe8SP",
  "key18": "5XWpeC9ybbsTp5UbyPjhPNvi7nVRDYNsBN847P1CbAANGXdgAUz1VYJbsNPrJwG7mAKShdv5GyVLEcVgQnqpdEhr",
  "key19": "tkhRHaz5xBGLRe5cBXAtmug1uWWHLKEnKEC9w5aNZyt1rsnCpGYaD9MfEj5jKwX81pWzf856WAgQpL69zPAH81M",
  "key20": "2GqwrR9g7c6fpWx7m3KZWZYN81FjfuyfTzk5iC9m1VcZ4PqtPaoPFAcxW2kyfPaA2Zhpvv7nRzBK2UoFVwLXsHQW",
  "key21": "4tjwvSmgDzw9aZkm7zVrV78TDkTyAwBWwRfg98S15LZwL4o3C6TpCd6MmMD6wuQKJ59oogjku1YwV8ww3MBGNAn5",
  "key22": "2V1pgigCUKKQUy3wqTHt6xcnaWZ4EwYqa4dXZwjSGeXws28rYo2ChzRnAJk7cDsvxiiiGtVyT2yALJ1RGbnEbcLm",
  "key23": "2xWqwB4bSUw2uLBUh31RfyhCTiu2cRFu3emr7ALuhbEqaHE1BaXvAi6UhuBnvd9mBs84f9woX52t2B3ac687PZE3",
  "key24": "xvos3YCap93qFUHZg8ak8MBdRUVvfyPNPkXSq7TDJQ8hkkQw6R4pqfjeFUMaNL8K4PszNaZoKxwjM7XZsWtG8CW",
  "key25": "2mnbG3ZeqPSLqRnKy9mHva2JV9U3TnpdxPAmtY1prqEzNypDaibMeZrW64Vies57DWYAom5jBuYcaPymHioSbe7v",
  "key26": "5V2JeJP4rb8kTHLaZBeuKsxZSYdjwhNEdfymwtkoZYtAL33raMk3YVpwDpieucS6K1ViJuFFBqg6AQ1eQP7jrQYZ",
  "key27": "XhW1cmqircVzrgr6SHNyFDfHt2x3JPpjjRuhLiqzhQuZn4ANcMoDbZne9dsNjHcbB5RbC3EUikxFdJNiksRxQLv",
  "key28": "3MLRAfdnqi6GR2rwUMbaH1GNJzqdDHszCk9ts2dB9e9AaBNMLxM7pRnH4nkyC2aF2SdSrMXFwBMMoos1NviE4tRn",
  "key29": "2hrDQy94S5RU2JUWxZhzYbW7CqRPhQ9hDZYG7ZkfWLcKYkNM62pc2txcAFyAFeufPk5PF1tAqSrXJVS11jiimARH",
  "key30": "5786PcbUih59U9zEhqocjZxdaZbTvKLMwAaGX1tytHWQfZPqcCvTrkgjErgoRMgEAR2hZV6hkdZaaeTkoVVT91gW",
  "key31": "4bK7g6DN3TVvaCqVk5TsHSMMLhqy5qAF8FBUHh9RjMPy91fd5U1A5oz13N25pcydWXvgCLxyy6kUxgSeKhGaYSeJ",
  "key32": "4jnVsWMhnXCRURCdYhoY8bX62jLYMheZTmdFQaMoTSxQAH15LkRjJfHVoB3xgw4tiZ7mw96DU9GNJGXtrzuqvjaT",
  "key33": "2tkeGKWwErBtf827qZCvPngU995EnNZPQGsAv6kuX6WTS8goyQJyy916VN5HYNreh3CQrwSKcoWqJY49t6fvFTcx",
  "key34": "3A3tBVGTHezqBPm5Ez8WLFWjNouEwx8iAfoyvpPeafzQbdY8dSx6RVVKiQ42sFzBrhhYkCByjaCXRkbJThZ1ssWZ",
  "key35": "4hUyauKCCkugGddwEfGmvhtQfMzqeezBAMhYZYNrTgPovvReJ6eDEVx4LZetuA8ioke3AiqEdefpZ7rQeuPdQMa9"
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
