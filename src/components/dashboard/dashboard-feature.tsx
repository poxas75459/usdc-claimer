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
    "2PRgGHDq6ghVRWLzBfkqWHirx4L1XMKovNbRoU1NkKyePboQpHtfCMxZ64LVJHDm439Neuaai7ifjZ5ZFUjgKtJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8Rw3RXJmQdoZTHhpfVQrAXASTK9WQxSGRVvrNSUZ3EgputDCVenLiG9QVRdXySuPRwpE3etAe5NtGj3a3cX37W",
  "key1": "4Vsd5tYciukWXaLQgeHh5KveVxXu9GHoVjZd1pGGBcyf3DMCkRbDQodUFsAn8UxjmkekTaeKJDxjijF3cT2szpNp",
  "key2": "4mcT7HHQQFKrJ7rQVfHP3NfAAY61q942HMHcV2DMgUGSNNWbHXW1CAmFn9tT1awGt9i746WZCKziWszeQPLgCMku",
  "key3": "5hsBWuwW3toqB5j5ucj5qyLE1BrL3CqcJpKARg6c5x9gwu6iHgMjnQFfamLiSENTVkogoiacTj2asHpUd7s2SLmi",
  "key4": "4jaR6c6N6BRuAjUY7E7bQXDhd3oMqn8jLwE6ZMxQ5m6S7kGresMRYBfci5qpXiPdhZ1zmk1pNPAzjeRZPsREAEa2",
  "key5": "26STYNu9MKFsiRKEXsXPs8QEGRikyWcptPxJedsmRthE9EuQ5NAfkHtsWgWdzFTYbL6Spc9X2Mf6nJxShjAPpoSh",
  "key6": "4ccjw3yNaEyS9mxiXXdvPQCMSwLJY7jRBehAt82HBsBFg3DQSubN9Bir3JhYDFoY3LPs4ecp38h3YXibQcBjMNE5",
  "key7": "4wfZcHfdgCEKimUr6CYnuUdnYs3KRQmF9tPuxH4aPY3bFoHGwEmzyTnWNJp29UzxeZGHz6cNUNznGyThG16osbKs",
  "key8": "3JkRzJWqMqVoDe9tooHUk2x3fL4NiSNroJSW6RLRBxjfYAdSMBm2dYaG9askAXyRcafZzZXXXsEFSANirC4nsYr5",
  "key9": "2tvAwBLEUzCb1oCDceEVEEpaY9og49Jfq1DdoCK7b823mV5gCG1wAn2mahUT3LV7AVV2bNDAcxZB35SG6JARJRZ5",
  "key10": "2sKQATnaPvGVuMgVrr3kphy2iwtUSx8KWDfpVCVHxFdPUBDhsJpBQnuCL6rwuj4XcnLwZYrQbecztQ8F88k3i2CS",
  "key11": "3ttEQ3vgiGgLRobkU3ZNTyDL9rUYkb8aY9gvPjquxSr1Q834i4XYZR9jwXD73NetcH3fPMsknxzpcZ67idDGgFoz",
  "key12": "2Ka7YTF6aJxUNXfcDN2PvSm73zMLLGcQAysN2pRWZpLXEjsiWdh9zMPgXUwENBFFxnmW1LTHY2AwnPmG3UwykYSS",
  "key13": "xa2yskSVWCQwa1ScQZ5GzMijYHYrhRfEj6RuoRHoar24yohi9ETggy8fKct9YGUBUqcJFWjjgxCdWNTWQsnehpG",
  "key14": "41yiKxnpw2JJGttqUDEV8Z6DnbSX24m3TvwbPhRSyEJ4WcSyGqXmUtTFvVucegBMC4ceafpJNMvJgEZYFshoguTG",
  "key15": "3W3iuMfcQb4dTeDhLZ7jBLoeDfLBT3rM36yemJKiALQeqBG98xSJRfe5bQzWhjaoNEPWNTXRJCaLXwWci92V4JQR",
  "key16": "234yznBHLGWJGjbkYwqtFRgKnwmBgoG7pLbTeBrhJsBiq5KuzKYo5hQxb4apEftdgtqz8WQZhLJ6p5fsuKMfCUJg",
  "key17": "i3tUuYmNjP871EEn9SQ6Rmb8MsrQ9frK64Lo5dSRqjjvh5N2DUPFJXGjBJnfn8SnAFBRJcW2AaXRvXg4Ec9tSU5",
  "key18": "EkswdoicappRc92rxtwCwuUJwj2Nnmdm8VxC3KUmWPsgbsLTfHPhazgxah9Y1R9vakPrSKFKaCVxn9WZPZU8br4",
  "key19": "5yefgza92UbW7xBiMLF6SCnPx9RVHDd52waCn71z8aNUc2ianKuDY3uXA6Jax2SM3wMXhenMkSrMVHdgWDVRAMss",
  "key20": "57pQyrEJirVHh6zdc4x6ie3V4o58hnMqNpGUzHAhdUMUJAVPeLXEqQPwptktiNKwmjmVWQdxcubbmo5yDYY4r4wj",
  "key21": "sVPXuPJFGNP3NLiwa1sUPj9xr5rzGxVE6wdPHdWZAewEUo1KLMAXTxbeWxcqJpQsMFgd9sJ7oyiobLWaXjfX1jD",
  "key22": "2E3qdm1jgN13EML6o8d7SyHmWGMAFFzHGp97w54Hd4YBSMYCq3bsT8g19eu6fuRsqSo7vmgfxpq7dzJtczLtTWx",
  "key23": "2wwGUdW6JNpoDHrJsfx44ZNU11n6L46uoFMTbVKxuwwcZKzorHQjBKLPX8jtHn3ayXADHmDiUwW2LSHeoRaDFZkC",
  "key24": "3kxHQiqNMaCBpsdjQvKgnaZMdWtZH1Z9SP11KciKzvBGQ2wNfN8e6FGKnTt83Brzo3sb5hwJP5eRDXu58YHWZqjy",
  "key25": "2peR45MUDcpoWcTbLk1SmdhH7NVGfjBedxKE2nxQnV5cQYDbJiEvm3Vp3go5PUCiWmJnTDBUTgWU4fVRP5mQFJDu",
  "key26": "4Tii1g492vDuz23sCQpDHRpJm88V45dzk4MzPzr5sLuzYJbE1Qww9PbHjEpGheuamuFDjW8FsP86DHBZVy2FLWit",
  "key27": "EuxbenJwpNrG1Z3GRwMgUQ6cZLUzJjNcNorrbtahhXEnRYXUyGTngbtt3hWx8SHQxbjX5WNtsaKMP6qQvuunuEj",
  "key28": "2zxM3kC36sMApcJpSdUYK8az4NPKPJRLsEZzZcELoSos6W6zkbMc6HDRUu81iG1583aw6koGye2ULz2zisYAvCGK",
  "key29": "EJQbF7Row3uK7HjxxjoyBgu78g1VYEV18SS8VSoMa5TXMu8P6BRWse5BxFxHASMqGLVnGA8aCuUjPGxG5WxSFsf",
  "key30": "41qQCKCZhdLczeAY8JCHuKxcZuJg3VjYZfHDmn8BD9YAvjJP8E71b6gMmnHDq1NmQ9A4pegSmwdPkopQRF7ujnX9",
  "key31": "3yebp3DYbaWWhLXuK2MR3a7zBjytreemTFYgm2dVpRq1kFjUFLM2P2DTxRfkXejBwxVXu64K8Qy52YfR2W4rveU4",
  "key32": "32hyTZXSJ4HDZ84T6LQFZu5TG4jyhoCatpjFxdXVRop2pARyNegtXx5LSQy72qTT1jj8KFjuTPLsS2YrufX245eT",
  "key33": "2sG7TP2xG7jpDonktmNbc4hee5ZEyBC1PbsSAfo88zpdqxYxRWgs952MkTBdrZFwSWqwSogJmgdhbtDJHzN8fYus",
  "key34": "xVNaz9h7Yjh5XKPW6XeDr72FxUVmyuTMZiZq95hPZYZVdTPm9fJP8Lx9QXkuSMMSpbWD6oetT3srnnV3nmVpsoK",
  "key35": "3rWZjJcS9xj4EWGfrFY6KNpDdbs82DDrewxsTX899SsfmjZEiFWySc54VDxC5tgJ9mjjeFeaGFLQBubU9hExPm3U"
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
