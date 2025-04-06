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
    "4qLKoa57hipcgng1owJBszHtcgQhvzUdaTAoqa4vnK6rrZqieBkpA7DkaAuLbr8mP2yh6zHc2zR8JzbtiRvXK7n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ojTHRZrC6Jjk1N7KfS8p1HgQDWc4mi7QFeH4GEr2uTyDkbJP6yR9YZg5wv7SSdiicjMJwfhFGjZtcmxFsj8SXR",
  "key1": "3HYSC6QcV4A6iXPtYBPeVrvmE3spi66LxHjYi744y5iyFjqtAJXvRbzsz3z3vHHikoqEexchBr14q5hMYxxyWknK",
  "key2": "3qCSHDwvjNgZSrySaQJtVMsqxDqfvyjfaVcbj7zRwQf3Ysk3EBcewoKNxqquxGxZ7szTK1MzhVmH1LDQJs3rJkV7",
  "key3": "45AeRBhDPWUhq3i1Eag5HoPVBeJgp64dkHtVi7bRNenN3sE6iuQaQEdaTB2xkx7NAVR6rPjM4S65wWtLHNYCGu3g",
  "key4": "5FuwUYvZxjVpbVNkCR8NbygSRsjTQtvBqQNMZbfAaaDu28cnDsxj8qZMMPmdtozhJsLF4sovTmKCdEFXq6FbpPyv",
  "key5": "aCCDGNWRfjH1woQanac5zCzNnzerqnqrv8fYzaZv59d1QL8QENDuq1HifYr64pe7iBMh9B6kXtC4fBPBNztC53y",
  "key6": "5yiK2xfYTP6V5eCZVe1jLCL6Uzpx6t3nWU8f8AkEBjBMSn4ktJQnzQGebjPTC8ncNMVBdczCXNydD5UpLuskxRoD",
  "key7": "624mViGPbMgkXshqB6UfNDuXB2sLcdJqiKUeaD5DE3Xpch5SVYe9hPiuJN2hYoPRCCNVW73aiEGpFVF9vrrSRsE5",
  "key8": "3K1cteFUURVSKxbDMwhL5s2JVRoLGHDctnHSCgMmCHQ84fYv2j3pdHou4bBNJcZqM3fqoebE3yzH5URjLuHoDM1Z",
  "key9": "21C9tKjti1tjyRxxVsUtAbfxoMQRhAXxpaApxHG7UcuLZV4RTtbhLPiyjG9gcCiPWMAcvDsStDbX5oNeWSboyQgN",
  "key10": "542cmxCao3xPTj7dNwrvsj3uPrHRJexgKs13WbgTnj1oDPD7jBkHpqvvkYwD8oeuBcCr5L4T3s9nupabd3FtewUX",
  "key11": "5x1sWNhgge8iW9Xn1E3pqBjzr57JcDuR6poRSJP6AKPzL16pkfDmYQhxgYDAMC6TeLbqZgKBGuZkfCzdJw3zvwJh",
  "key12": "3JkNpcV4sGv37H9cVmeiKBLJ8f9eSMrmrvCHvD7BC161ia6UJbqJDt66FbUDZt2Cwdhs9qjG7eyQUC7znd9ZaxWy",
  "key13": "38cmtgxhXCVp5tkU4fbmZKTajarpa7hks4Q35oFZNBsq85i3fFdAaAHCMM9KVBuBMFQ7w7cowmEwak4qywWzDMoY",
  "key14": "2wMScX65HkRYWTJBrw8UfiuhPbmtoWiD22xvDNuM3FpwuCmhBpd6CU5wisgoBn17jz4j7x2euaP6mKM4H5sFY3RS",
  "key15": "3gT7gutWVMQe7CekhQ3pM5m1FXefuvuijrNNwMArS4xDdZYda9PuxeNHZDZApQzLYCan8SJsaHjQnz4oPBK46kLh",
  "key16": "58eddYCupR5JaFfbyy63pmo434rZ4EPCzmJv8XrXDvD2YEukm653ppTHDQ2WzTJnFGL4X2WJpt9uiovwjAYwUutF",
  "key17": "3p3pPUutynQcevPy8K8eEgDHjAdxpkgo3BwQhrsMgBWJgkkYpeN1MBoHubfUbfoccNKqPCiueyySwLhDGadAndkT",
  "key18": "2DRK1wrmf8aqpaqe6gUazwXaj8X9dJVS8ET8fatVtEyoHj5Qs6EjkJ22Mtr8CU4meL9cLfKcVpNDSUSGihkmqmv5",
  "key19": "Gu7GHb3Axf4L4DRJ75523zkE8WegT7z7jgmCMQ8KKp9WnaaYXk8p1kU7jG4aom2sDbnAHxoFT61fqgLHZAcoUYP",
  "key20": "48N4i7LvGJnus7YqsPBigsqvHerxFtpXDAqdDubVs4ZRxbiyKzTTDsGSTxnV9uMAcXEQdCzwpLeRZNHe3Q4sYctB",
  "key21": "47zWG71yssUcvmoWZzMvqGt188Wh7xcc6ukqDh1VgqwHZpg6bN2jQHqxhxAH52v2qm5VtwSRMMVi66TKCbpY2K38",
  "key22": "2u39WBUSEQVqj4MWVjaJLNHgG8fjkr5imeYtKpLPUUNmk8qpSoiodwpHXbmFaRbQs3HU6ubcEN2EiaG5PNRZHNzq",
  "key23": "2YHjskpAp8nv4yHNN61yTEjXXFKCxFPwRREkZvFQ53BknNyU8QKNXDwYfkxfH4HrBRHEy64EU9cd5B3wVVZHnTpX",
  "key24": "3NzvzCKhyxQrwEBPg9y78rjcHbzw3EVNXLQDZ6B2fgAy1ovYDHbnKELCbNZhMwEmrre6Vyd15idNENLmsq5YqJAa",
  "key25": "3pNxHP67ZFSX3YUWD6wZ2WfjxPBGj3UC5Zux9cU7JSJUajosoqkiUW1BpttyNSHabu5GfNCAWbBb7XwnGEgreAfb",
  "key26": "4P7w8UWwQjmPZz9Mfu76pP2N4PSFSRmnk7L8m2m29AFxCmuo8syZ2xC5iY7vp8WPvX69CBC8eoE6FNWujYPqrJ6U"
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
