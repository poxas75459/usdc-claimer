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
    "2Q18kT3uj5Vcga5QnPwSy2QfPf1B2zNgoVGg1VcPoEr4YeQcivuXvquET8qJV6RJeWuji8QT3X9Xh4XeCCUajbYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tf1dAtGBc3Bck8a67Q64texyJpE9EF5J873k5coaS4fkAV8buL7SoZSJ3jjA9KP63dYUnBnifHPfvwWRNmLZB4m",
  "key1": "J7QFiT3zSJ5HR5UiCvx1R5PKWrWMSWWTkUW2F2Q6xByDNZkTWmD9kja367bpQ2L1ULzDycRaXca2kZhsMNBfH9r",
  "key2": "2QDixaoZf3XNH7bJPWHYcwQcyUKyGmmZ37HmUF62s5mjhZRoRQJjYLHZC5jNtLxCGJT7aufZfJFFREHeAzTyn9Rn",
  "key3": "2n2aQSu5eGRFAod9grQCtLoQYEAByamrUWYTLeUcaacXufdXvD2RNXRXn4QwsRDv8q5rHqXh2Ak6qb2mFjwwnFee",
  "key4": "3cPzrL3o9BnPGrj7FXNp8QvwgtEGpmgHXvvBjESZxEot71SXxCkfD5YVnvmwicnkvEsHvRGFqVWAGm1Sv1aqqTY5",
  "key5": "2MdxP3fmnZrN3opUefC4GzhDnvFNLKdxaUADWrRzrqub3Rdqayyg7v2LGRCQPRD96c8mqwYuv2pindkHGYxkuxx8",
  "key6": "28UBCo3L7nRBSTvzJfMPxruD9s7Ua2DZdahDxpFT7cp45SXYqSMguiCcbYaqi6cvAr6Q1tih4rg5sRuV1m62vuYc",
  "key7": "2GDwwneqcnWPCLkNv5J34P75uzAyXUd8uPBB2fiDVX7Fy5Q4wpdSfPYTr7RraLArvLhg5MgnSk33xYaFiGWDiF9j",
  "key8": "5nP1URqKj1AzMRGYE351ijVXwXmr7LWLn41FqeWS1UNy69vGWnszTWuDXBjs3qRbNZx7UdKhdCiHUrdEpFA4uQJD",
  "key9": "25PuaEUc4Nh63a3JJHF5o9NJiA3GYX18Q7HmbpHqtrL3gQgUEGN7SkA6MNHW7gzzt4JaP9wG6bTWekeBLsPifSmv",
  "key10": "5unU4zNnjhPBGSCykL6Y9ZZpinofcHF53r9hJqp6J5sUMs5T9kCWY9vZ5eMmcxcsfWVarEKGtjEUrvEJe943GtFR",
  "key11": "2FSmUbscZvzWC768ySUGvoxLqSZFtPPGUufhVwGEifaap1tvX1vMNTfbW59jvrHpfLnPL4uVNxC3c6mJ6nUnDdCC",
  "key12": "3uiohtR1cfqj5htiJjKhqr9iD1rNBJmcCgqpbe7GiHrnCYV9b6ErNUanbBabv8hFuXxpAMV2g2NWhvYBbv6xWd2A",
  "key13": "5QhL8S4Lndfd3Pf8wwbFq27mkfTr1t4JuXckZaHUFPTDo6WLiG4vgzVjvjSY6PV6ymFcAJTuytVfeEKucoLHi6kg",
  "key14": "5fEN8bKehK1XMGFvs11rVXm1jJnzbgYbRnYTdhEPfEA4wY8v3jZFuxNWRAqjGr7YYb6jgRqZJnAv1UzLoGPJ53cV",
  "key15": "4uv1KfGX7mKXKHZd1G7P99MEg7Z47Jnm3m53zfL2UM161rcBQ9o18tQHrJCYqr1AsDuo7AXWEbbNt7nnoFkdv58B",
  "key16": "4FuUEG8XTeBPfCcNUQ1osqiPuU4kFC7W8bkFrd5HevGux5RkhNURP56rZCJMAjoPCyokvy5ZBGtpcMCVkzXsFbWG",
  "key17": "3wmiyQtWHPPBPHDeGS73ut2HniqYxcmGiBsXXsXyS6wkqCQnDGGKBhDji3rX2W1g3qoGUdjG1eBKJUsCrEXiuUDR",
  "key18": "4FZYu4GWxzmFsrubPMEFbzdtgAFF1HxDeWHZ271fuBwkgQdokfxt2VXAQZoxj5QCdFdNAcV88g7eVEW7Gu9HonJT",
  "key19": "3hszeqsMKo467nohn9wvaEP8AjwJV9ozu6wkxHh7BSw8rhp4XRSrREAbbnr79D8LgTS7CPoAn8kN7rq7HHotecXo",
  "key20": "2wz9Qcc3mb79PiyikFQEy7sQXuy5jHxnneVQ1Ees1zd1P56t2pDQmj3icqi1xKv1owRNoad6rP6fNM8YKVZAecoq",
  "key21": "4hCk8MD26HPUNwGcw8rvHZfcbra573tKRSMD1iUm21GSqaV5eQQRLJiQhy23hrq26HGKg1TEdt4kf2VyLK8E6xek",
  "key22": "2JfYW7PCtrNTNKi9x5wv8Krs1QoAiAFb2tcL3XJWigTzGXimCJ3y4T8vPGkRCr7oPeRSdY6mJ5UrhzumGQX2XuXJ",
  "key23": "35goWJCLCL29KTPFsbT3BZvWBz3A1jSzhUMQhTSUpBi5ZQhersZAG6HsoB4KcyeXw8yEace12TDEQXVBCEscEu9w",
  "key24": "4USw3z97HJQWrZBaqztuFoiGFvzv5V6zbU733c1nmL1apXKZVyrbDr2GJxujfLifwcXghywD43wwywY61Gzwpiwo",
  "key25": "2cskT3xesVmFCB1hDux1iDkMUfcVHZ239enWXyyuu85xkS9tv3Z7WGFeLmwd9nb6YRpvvhaqHFVLq6XRqV3MtDCN",
  "key26": "5JzxNoHG69vC7aXHv6feQ5psvGDe7HtkR2jWnDMTnxMqHXrWyxKxN9PhiAhxuCbHkJjsFpCyvV1fYCkhGpnfrcpK",
  "key27": "2Ev84WsdbZp1zeUHQYLaQi5ewsTtH6L4dc8GNXE4V8ddGAff5bYQCiTJs9Joo5R2ed7dCpvnJc2VpnapQEFmFiuL",
  "key28": "2gbpatiibGPUTV6DBuN7Wm3TPMwXw9bv9rnahm7WTrBNEARW67bx9GfQAD4ZcUkJWB82LJydxToNzSWJuQTGzf7F",
  "key29": "3Ym7U3h5hxQng9WeCVgymufBepo4NQmoXNu2QSC8kdk3J8fMYvjRUaEbW46zhQTtxbHpYqvEo277eGMppdAqv6gu",
  "key30": "5imRWAwo4zR1UMwov8gdrTvgqKPdkhQLy2r6765DJ5fuLkHxf8tRHvdxwZJaBQHbQeuonULJX2DC7Km7pW63F6op",
  "key31": "61CyLB4F8snTsAKrmssZK76L5SGeQXcHSiwqSKXeR9dYDuLCXySzMcy6wvwMXF9FZsKgssQNqYXeSqbvQWogm3pJ",
  "key32": "4NJbHC7AnjjQ6sYhEqyuLaupNofE8mBhMP6td597eZKG7CCEZ4vx6uDgQSKeUJTtDRx43bcem1BhA22G6y3DPPSM",
  "key33": "298qGmmi3EVHCTXMdkKTLoX3LbAVCGLGW9bcKjZNPpQvtYT8utVpFGSQbxs5e31weTvjUmRQ8aZLRFLJKCDYLCoi",
  "key34": "5ERbUcoSKb9exs8XW2XG8pNKQA4BrXagS4YjbBUMB2RLGNBFb1dFDKG44qmqxF6x3TsntWB9mvF6AZNcfKMffY1x",
  "key35": "4Ax8TG3khjoPaL9mYnZS1ho5ER1Ef9T59D57GNsVtGuUEhQULT2SmjHP7f9sacrQwzmciEWmhA8f2C5jB7JeMnm",
  "key36": "3n5y1y2jGpmSubo5fuuUaoSpq8gib4qQFAgoc59z6tB1Pdb7W1btcQKdG2Cp7QBLnNJYRtPQVSYxsUYeygVkEVCJ",
  "key37": "41Wvo5xJ4jnZMbzTNzMGiS7WrkiNJWFaccR1QoErSyLfdQVUvfvZmpUsfmWKoCNbXMRz8cEctKo1Rh6ddXfcyt1B",
  "key38": "5UMZFDnCMmtUmyJTs1tv1iAy5AfyGWcxwgCdeikCJmJ3zbVCWYd8Lo2imkSjWZmYfhBVS7cVVbj8P3q2VT1FyrX7",
  "key39": "67Hr9AArMtcYrE3EUcEe1g6u4qZEaaDE5WVzm5nhn1ow78Uj262n8CckXm6rmimR7zwKHSc3rDybn6NzpArYepR7",
  "key40": "4mcp4f4SHAWeSkwXUpSyQkVVasazdwiFBgLJnzW66x7hgzXkyDJcEmQU2i4fsPDfrTVh8Q6BEfq2LX25LxdeJhKY"
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
