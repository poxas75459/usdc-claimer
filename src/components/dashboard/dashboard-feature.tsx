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
    "4BcUdKReL2pbpaqso922AXL8H49Tma88QxhdLcDdPQVj1cd2b1mVEXMm9xsyckjwGDXkgJ1m3zddvDnDzNcER2pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQsKXfJjw2esApWfgkSESWhLwUrShURwptbDbFQ1rZaPtaXSdx1j2qJCLUAeve4pMp5XHDWheEocykkQE4mxbK5",
  "key1": "hZj3PtKTAmRqLnmXzyvPwfq4N9oCGqwAmAUCqq4uLzqMWNWVkvAZMBx1KCk5ugqUFJDAPMUnW6LE7V5Y73W6G4h",
  "key2": "8ULQNzK16pwn3WNsS3myUYqUVFRqqZzwXLthkGYEw1z8yLLVr1WkX74EqWzkjdN9XckDpejceYAwwr2fASfDo1Z",
  "key3": "5SzwTtQ8Z42y24twgyd16dCh5THBkwd2iJ8yD33Zmyi2dm7EcSJrUKx6ah1vnEkPsCzs3wQJaPoEo2sWsAbnFQkG",
  "key4": "zfeg9N9Gc28QD9LDWoTLGYZAEQLyU3gZcgsz7YDBvYMSDHFf243pBwhRTrCdK8rUCCSi7UA8qDbsAzGt1fQVvEn",
  "key5": "2s8c3HT6EG1LYamnHFsiRdgjsQrRSux9wkx6y5WYL3JNMPWudWjQoKhnNKGfJGznN6EKTGx1ytYDiWer5c7RsZCC",
  "key6": "2m1rR57kBZnpZXxvefZm5uiBWjQXvgCrgFHNvmf7kH699Y9yCCmhsch5Fbi1jz5iccZnYHnhuutKKTaYgMuZDM6n",
  "key7": "2gRDkus9Bj4LTteF7VznQyPuQZAb6Db5LhdP2nYoi4JP1s9GaKn5kogtGHnntbF46gciGNcntJRSxmp3wgRSj6fx",
  "key8": "5DedPNxRv4TvNbiYYw6Zr9JmB77RvmYJ47by46SvWCkaPx64ErzqdSXfwTL7Anh1wU2cvCG28w3wzRFJ9ZLyJ9aQ",
  "key9": "4X3R5PeMyj1P2Tt1iA6jzme1C8HfcZcZQb3JDEPQgywHayuJbmewYFpqRGhrTZhenBXpDirfSRuwhGuyZfHdnBQm",
  "key10": "4LjtWTu7YzrEnGnEapt5JbQv56BFb4gZt3SEU8wXiyDCE8e1fH5rpzLcxH53ppjtnsTnE7aQWPXqiYVDjTxokqNd",
  "key11": "3gi4LYmwAQKR42CHvgGm9eer4KbHEAZLXDzcCVpFy3JNx7FRcMydZjPj9LjJnjSrEAwkHF2ZJagP8DfqsTfXnV4B",
  "key12": "LJ3NEzvoKhQnRpYa7QF42H75Lk4HYYXTFuGLr5ZF4AHVGJjiGURCVgETEEwBZyFGbuYxzZDApFLh2JrW6uGtncN",
  "key13": "55UKwgiXLF2n7W6VpaVibQqqYDUmBtHaQaxvb9HCx9kCXo2UueLuvrbR3S6dqV4K9M3RfdaeS6E4E2xb8ArzYjuL",
  "key14": "5qSeFzuyeMfivYJuuo8rcs34oZMGkfxQmgzyHYmsqSnjGHJEkVm1noTmTmNTzcFZ1Pj7NjsSd1zM1L7xaZb4469M",
  "key15": "2U9RpBeGqAk6tkdFnz3oKw5MnZXrMsjkCDRUNezzPWgTnCvpXAAJuVR49ptYJfs9YF1k177ihhByFf5aQE2bxZnx",
  "key16": "5sprsxqgNdZNjaTA3GXMvfy67JkgPWo42NRBmQuwBhgftUTRYw4bDgLxWU1wUYnkrgrVTYsDcz1BAbRTTXHjCeV5",
  "key17": "3Q7N2hvoRSwwofb65MgwurKapCVRQxY1kfKDoSjsutCX1YzT5G9XkXW64xfQDPDFrV5TS6VnuBJya87HSWJ6oydF",
  "key18": "2YWw6o1a7DDBccDq7or57Xsvz2cYrztSu75anZB36u16mk6uaYeb6FoMgz5MpctqgPDwk5SRAPqhgTzqWBYXTssm",
  "key19": "4Ss6kJBnQi2tNWxGyZed3rpEee2HSLavvecFPFHhf2nSjm6bNGJGoHw6rWNQCP122jg2YMoiw527KMHcDB4eFWUV",
  "key20": "qUqjViQho8oGXkM8bk1JEnUhNWdQKLN8RfnZzE7Yc5FxtwMvDij2rVTfSRvzyhdSeXJkHkrEZMWmVPSMXM8YFGv",
  "key21": "3XdGcXNWDt8MGAjhWvZDQA5FKzkCRpPgHUFn2NjKd25nCidCiWLGa7v9KwLMzBMNTB18KesZG5xh72ZymXHzbJD1",
  "key22": "431kYY8ZcQQN74uPPkq6FN663Dq5DUF3tLRKQ3fYzf36Ejv9LKAtp2bfdghZ83YEyBBoED5H2S785nt4Qb1WoQ1T",
  "key23": "54FMCsa5Ki11vaPHq6nuStdFz8RjcHUCCdNEFxiUNLdj6s8GfgAMczvfhYuBz5GbyJeQgZ6w2cqECf5QAKBXT8u6",
  "key24": "MHAKaMa7pW18NcZmKb7jwnXxNqAH4AAyWDyiSLGgDJtpJs68qSdadgAU77WAPufkxk3fYCCgdHY5JRnR1N7tLgp",
  "key25": "54ixgoY5znuVK1Fnp7QX4CAHBwEaSXbtT5pJcxQXgz6heBsxzXtDYeGm58GNHJa7k5iLEfS9FzMa7Hc4QuiZnwDz",
  "key26": "2E7PWJ91tfwP2jxuP2be2EbYBr7BmYtE2qAuzNZEqfHSbRJ59Wsiw79tDaP4JJ2weEqUKmDLwLYr17H7UfbixHDJ",
  "key27": "7ZwaLzYAvJ4Dcmyygt1QJWuppEpVhMaq33z9SfyTYvDobu7AuGCmPV5VeGdogSbs1K9WN5NPnNV7jZ3qyXUudvu",
  "key28": "3HtGXv2XE2yankb86NXYNwbHZ3YfX99L52Xs5w3BA7jPdeythe4yYqoMn5vdGZwbQvwMdJ5iKA53PfhYZC6E35i"
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
