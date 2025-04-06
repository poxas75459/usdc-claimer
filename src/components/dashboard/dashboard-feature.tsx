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
    "5cnKUvzrVhKztPSvMkxKQW3KHm9KHak1kdR7ofFoyC4LPNskmVWNaDgqC2i4LPr8zXKKMVcZMcvbkAgxXnRPxqiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QYaNVspMmv7d4eJgPtobp85UTTfe514PXH4ftey7q7jZY1S5hf4F5Xo6rmMdDXXQvgQVhUudzcwVa6GDotVCDXn",
  "key1": "5aZ78FccBhmQ9FZGNBWJ6keVZV8Q5Vgo2bjfeH6o75qAN6g43vzt54Zm6fNd8tfxKN82efNLrWyB4bUEzbNCT58U",
  "key2": "vRwsVxJouJJwRnTjtHffyAYxs35PXyTdjYV6fuLvqg2CUyJL8RmeJ9V29trhTquTsw55cE6uMiytQBNgjVxNxMz",
  "key3": "5fHRA1QkCw4dpo7kcEsv9V1BQf1gdjNfBsAjcWNH6tsJa2KhukihpPT9xEXwqw6FAQMYPMJDEn4UDUKaowXaQZT5",
  "key4": "4rFgAUFJoXbsXXNoAb1rfgzmjqGa6bq2iuUQ9J9msz4rHTNeN8Z2GQLKAgbKs2S25kMGCpJUT1GA8bmEeJERjkLg",
  "key5": "6YzgdBrRPU7PBmDnkHWz5gCAx1T3HEXnZa5vgatiC9LajgcUHkHw7mYwgnYa7x3vi5nhtX7V94BqngPWhWVDFSp",
  "key6": "476kj3yGHGh1jqeWeU48TN9c5EHZn9gDiHyHE1ZeeZFFnM1tBaJ88JfTF4Yju6j3sKjVUYBb5WTK6j6j7ueaTyyK",
  "key7": "2vbV1QZrzzDR8Aejmigo4cWqAD6PsCSYuW5RCJXBsDS1L3fiGPtiG1UXFkccZtT9iuLfG4c84WPhWFRjjmePGNwP",
  "key8": "5r77kS1163Vy7SB8apyeAU7gB4XTD24iw4zBc3Usv9XEsHZ8TUPurwzs9u8vaXnPXbxLDpZBynH5huhBxdbrjvzA",
  "key9": "3L57fjun97v7AuKez6TXet2bqkKx8f3d6BtVhJSUiftQTY7THbu3VXjAK4Kt7wf2SRat9Nt4ex5RpvU424ypy99M",
  "key10": "2W8ejhAFXsKDWyUa7pk43VD7ZCUGLBKyQfrD4xLuYkVuuKAgwSNhsanFNYjLNGMBcmdVRnwmDkwwpSnzByoxtrQy",
  "key11": "5aBziWHGTDZXA2fFkX5y3UmEgvAJ6rau8DonmUh85mEsrsxvj3E1fp41hV6vQcYNdG8n4V6nPNAGnvZ1cnCvd7hS",
  "key12": "2ChyKDUL9e262YNXFttZYWJAmiCZWMX5Y2ZuHNzvP7F8AMUH4QAawa6WA4x7HRk2Vmd7S9KKWVxp8PcEkPhjumTv",
  "key13": "2xPN7gDX331Ee4u7obDTEHx5aatKfjgszvwu33thTNg5w9JxLRrWu4L22eiNii5U6wHpoAgozF5qsEpBTDUdxrkX",
  "key14": "yGRg3mAMtyTqg26pPg7LLVbDq8jJHL4d3cZioiMeR5JYT2jvu9NnPQr4mNCaoGpi8mfyC2eAhEgoMUP2rop36fJ",
  "key15": "3PfpLHvPmk3uHWdM1AYacRkCPit5ZHSygrkUTYf5xUyhhC8osCup1V8QRHSR3iQyyqqegmvYos7UfFa5PwtqbkwA",
  "key16": "5YGsUgQzxTv6c79acTUJ7EdEJAEbiCXZrptAsLY6BsYwKiex6VUzQydaHD8Xufaxrfz8Tx7tW42Ym8b6UFPX9ckQ",
  "key17": "2ESuFCWnjKjeC455Da3F16bzhGxEGd3WXTWY5jYoh17MtBYC3jhktRjM8LzaKgGBBQ6AgY2CKZ9tVjz1WJMJAA8T",
  "key18": "5fikxiUjXZQFpdsbUAjeYP9bfVxgiT7Fe2KcNpWDKaLxyR5GR5rWtb6HvRuGRRFpcTYSm1u3Kx5wUwTmoQQrbdYz",
  "key19": "3xniFzv6gqsCW7WPgFKhUmuQb4m3onxnnEyRe1fT1W5Nk9DUmNW5NHQpsWZS1hu6FGe6YM1M8FCjhH7WST83tHyJ",
  "key20": "3SPzvFrrHQuhGo9ZwhXJcBy6iGeS8i49cDtzA5tSGNP5gW5Mmus4y1mp48dPDSW5iNu91JPchdAh7d7yD4Y67izY",
  "key21": "38cinCVXqDzyJKsuWbvESQkWqJP2dBhxvykyPfM7yH5rNzx9Ypc3QPWtJzwFUJUy7A79jXrvZSLbWCURKra7tCHD",
  "key22": "49vAjNrpc4cUSYGXAB22QVi6vsKuMVojFsw4puQDseHDYF5CRjN9FTqoet6c9BEhxXHfp3UA5ZoD8aYBh57PiCpj",
  "key23": "5jefTPi6ZEac5t3XSnVPd3hzFiwoitdfhJtRYTJi5MjK9rZSCCrWhSvY1JnUrEry23MQfaF3kN8GYLU95Ux2iC7w",
  "key24": "5yL8yvKNFLcyVdK9QFz81QErVExU9fVFrh9PM7oMn6b8ijLhtEeDpmCnDYZ7oh8CPmfuBbewfbBujsCWoERMp3et",
  "key25": "2goZkBb6VUEY65uo28NqVeS7NKFGFDNqEm9ZKH9e2ZMw24F4aPXgrs2VyHQ9kKUZVtd9rxHx5UbYfXzDfZK3rEro",
  "key26": "KaqsvAFj9dNmo1ckxus4T43HbE6fjtEfjnpvAdF4G3LMwK3eZvtKhP3ZTWvg5GyZTzVMMD4Wzw5oyw6ee6VEn1Y",
  "key27": "5JuA5sTXPfdvvme6pbS1Q3afGZR8h91HEVbnW6qTXUjNxauf8sCQUGkvwHD4SEHzFRTtPZ1Tu5VSoD1vbMZhRE11",
  "key28": "2zjiR3XX8wtakMdmbfFhQHXhZRrPnm63RcMGLA8gkrHNAjr3PypDdhJb2U7yQeNERgKFXe7SnAuCTqnnKKdBzZmo",
  "key29": "LPWcAod8wyT2yCUWDZohs3RiRCXAEqo5Q6kmSD5g6zT2vGy4J4Hn8zJsZo2YgPM4Qf5P8VnUHk6Yoe9VqqgX9ga",
  "key30": "4DLW4HLeXKJC4yjJPMnW3srHTq2y7VMu7nN983bpunhMvyscF9FVDX9np8pfanhSBrkjM1prTJJ9z7Af8iNJGdb4",
  "key31": "zNK7yZQZkQHQEh2A5NoCmFJmyGMABN4gb8m82dcqYdLpiuxJpjDXfGTW1jptqgaURbsrsUSsYW2XLADHg8ULhTV",
  "key32": "4JMyr3j127XmaDDeK9uFJE5e1J7u8TaTvcHW8EX3mzthQFrKLDVnpJAKSV2WSJMxK5Kn6mSZUGQQn1oiX47WYrjf",
  "key33": "3BzCFoMmW32gZkU3D5cF3NjiqkWjPDBwv71j3nu8j66f8qHrBV7nuF5vXJNRrV45WGkf1bhwD62XQsSQJnUJDBpz",
  "key34": "4h2Q7FH8cRTb3Q8DBoFx82CXWS8gmz7XBrMSZnBWvCsdUq7ckedRbkr2w9Vjdvf5iRsbCGzM1m5EeBv4WQfBCun7",
  "key35": "ckWUGAdmHTUuFyYUkqjN9WhdAy4GrptRXvhXiueEJYJKvXRTaA2457oRQQWZBnzLUTn8DfdwNLezLi26eHM2XaJ",
  "key36": "5gjS3gaH4n766pNF8QUU5U2MF71Pxak6HwxPu4Uf35GNgLrrFgZaQMHxiTKH55Yi8x9xRoi2nDaduCMBxf6iiamk",
  "key37": "5hBZvuCTXYdmD8iaTFYNqNe2iTQzaLG8FW4LurZ2yfRtEVyJ56YmkWj4G13jm6ovjLwNgNGfcUTEf6Fg8Nr13bVq",
  "key38": "3YAkvN7wz3qjLg2Mp3qSwhhZKGW2pD3ikVqpAN4kt22eKtXH7Mr9zVS2d633UAa3tLyMAwPPeKCD4bnRqk7xBqCx",
  "key39": "5tBtmdasfuMcSXEUbFv31aNmgV2F2kRk41WCt5gfe7Mm3w3paLKBtWLbm7zyTAtt88h1w1CvbkGRnHUS79zxcgN7",
  "key40": "36ANcgytNcHY3MgUK6PmA1eRuG35rt7jzrzSHXvgYE14X3a6JZEQzFKeRXQSQVtsTBgjEgojMteitx62Vuah48FK",
  "key41": "59wosZLb9gpLCe4dDP8qwDYkyWo7kULVgA89ubJeVgLfSmNwFmdKvgN9SnEeWD7bU7cFQSYqE9jq1y6z84izhmu6",
  "key42": "3G1LXxqzx3vXQcUQsBTXqHL2TzSKx9uKsV8cugDNKd2XJb3VMbQFVLiYFE1U2ZvTnsctVdwGtqFzwDED5py6SNWH",
  "key43": "4vZKMHc5rDv6f6LsipXnaDSMTZMRpvLNKXMtakdxEvokmzowwcjbcfU1esJBR1D9t7dpZ49dZ671ryFQ81UhjRTB",
  "key44": "52ZjgNVc7JrwPCt5yD341dcPvpgBpSTrxFKZJoPETnuVpNQW8gSfFy6pyPHAiGMkKtoe4ZScJryXv6s2un5Tagkk",
  "key45": "46DqGoeB25owy6K1yooUncc4ShhEbCcRti7LqB5sjsgtA584fj3GmushGhLCkn6UVmyoLRkyLupDTqMPBubsrgKA",
  "key46": "4vdN2nei7sovFGeb43PUZ9aGU7WfqHYev2YkNfYNvUrXJqfswkaiTDZfMdHf9bSpc9Q1Mmr4pzEa9c3P8CehTCYG"
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
