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
    "2a2CP5eGnJUVHYC9EiRaS2cJfcAhjVLhcHHBvpVbfoRK1Qw2fh5gTHSUpqRUuVrRMonEfqCuQSCnYm42UbnuULjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJBD8baexQ9FGRHeF6m1uoQZcoH8gHkBvoA9cWTKPxhfJsRZLgrTS5M7i4J6HmA7P4597xUCNGdYF2u7Ne6mk9k",
  "key1": "5YJFq2Q7H2Upwsh5CZhweVjR9RoPfRuGDTsxoqS8Aekpa9EkstxbHiC9dfkLMqxHhnSTcCDx54S12xYhYGECE1mV",
  "key2": "3YJtyw2vNTeDFjETzD37ZPjuVDUrF6FUAZT6ko27AY4bWrrLms4CsaBiZaAsFYZJMZRgo44irNycVwVdYrvzr9wi",
  "key3": "5WCutFxEXsHPoVHkpPGfSud11vaDhwaMvNDqPN86N733VUFa56WZGr3qRQ4mgP89wWwzT22uEM84frdxezEFocP6",
  "key4": "3QoeL5rPkyxa1ww1kQrDmzzy5PU93S53smQanzQ3pZe1zfZV1F2yCGgMGQrdphc7TMvB7YdRkebWDxrbzLMZFFub",
  "key5": "2S2sBGjHb8aPo8MbQLXnGvjDjZXP7V5FAUeKBskDRsNvY3RwUpUU75Wjvzm4sYf45EDzDExt2yn6QYtmExVV4kq2",
  "key6": "4DNFo6p9t4jN5BvZXBjYy9SCN7VLhTGserh5Ew25zMPbEp59E7nmwUtNvTQNoHgzQCLBp5cyLNAY7B8iPjMtDq19",
  "key7": "3gRg8imRymy9GYv4Tm9jjYw8FxFzsQm21dpSpPbt96NyKA4hZguaE56brCPLawCqAbT8MwcmQRvDKxS6DPp9SyW7",
  "key8": "63tN3Kuc4NTrgCmzkn4dSsy3pCxbB68GM53C6EmdpfZjk2P3sEP4J3SxyoDjd7h4QF4JxusLqRvUZz1mCGQwZ5oE",
  "key9": "5ASwbFxwLFUWGmRpXzVRzzVfjaadaVU7yyaPKgkL1rpzGTNjza51w2UqrXkKuq5cv7Mn8fqH3bhSQnzfrjPGkhfW",
  "key10": "2g2ihfvvNQZNvWYA7E54VZ8VEH4DsF7p9DCo4a2uttaVrEcVCQUugU7u6ov9gihXG2pcqxh2bkDgrGjaQD4zEX36",
  "key11": "DvEEHGV6sJx983YfBPhXFPWWmosTqBXHy8gqXmF8WPkKj5jjB1QctrMzSadYVVGsKRCBdhZuLMCU8XSz48MSJVP",
  "key12": "2HxZCFzb8Yt8PeyPf8CFNMycfM9UtQ67FmKn8TUDgDXUSzWGrLRWeapKXFia8izvLtf8BcYnzfaiLtvMbxLRh1fC",
  "key13": "2g8YS4GgjmVrsRXbE1P4H4ZxLn8AeTvU1mKnHRbEy5CRErgeei1RZXggfVHdS5QgSfxLd7pLkWYej4RHrfVcmhPD",
  "key14": "4SFabqDrS2aDA4mb6AWBHhPDuRtV4SVnkerFSZVwib4ujwMmvr77By5QE138JFAUozkojWqqhz35TEPJQZpCLh9x",
  "key15": "PmLymXvqP4zxtpvLtDEJNotw3TFESr76VD8jc29HqAGd1MYzqJvQZeQgp6SZS7waCmMmKbwycaDzrUMAvQkY9ms",
  "key16": "4GPvBhJNLUoY9oaejHzzHrBPBWBQ6QA14xkHyX9e5dA8vTu3xC31HUfq9KbDX5K9Q4UA1fpM3T8634KsxhhgMTvb",
  "key17": "5vHQpBXdPa9bGm5Q9cR1SNKoPX6sUGpgKgHiK6w5xoERh6w466Ew1X35mvMc9m7krU3erTL6FEZS7e6kTgjWzJ6q",
  "key18": "3FuWcXymgk1f4iMrMsJFwDd9SXHLFEJ3JmMJnum2aBjPkEs3YR6v3jKTdJjL4KDuc6PrrDdorAW2AYqzztUYb2n4",
  "key19": "3wdetLhuWydTqf11RucKxmiYQgtGkEVmPoj81RaBdhoToBqCt8N1CtkZfjnRRE9zkwuEgN6hgjR2MMEkjV5ctsxS",
  "key20": "3o7HibmFx9hdkugECi5141tC5bW9jLRp8svxFgJC3wHqgoNnRYudbDYdeMiodbYur4Cdetk7BfDWJLN9nh5YxLQr",
  "key21": "3u5f6y8QTgyVzpmgy15QySbvzYDec1NmwMVB9sMtaCxbLhQXYRB87eCatayTJx8ECikp5s2rN8d2dMREsGkQmTgd",
  "key22": "QvDFRaHCL24ParEhNnHAg8vLBcLQL71bqpVt9F8SRQGdRJn32rarUGZLQUDATVAPDJH6eMm1ydQY2vsDwpjatoS",
  "key23": "4L11S6EHV9xw1SMyagonSNpnJou2CFbnUTAGArufjVRTSMm8nrqJqrdk94ACZ7jXi7pnxnzHXgw546pR7Z1fotLt",
  "key24": "3bmutYaJS92hz1hteCqGKRNAThEYvz6ZQGk5kt6QkC2d6t14TsM3dXomwihpJ1JD5pL9698QA7bD1DiL8UyTXsVu",
  "key25": "5UrmeJxT1DZGqv2ejjt14Z4TqaTZrFmgdRRmUwm5iK4GiA73VXzG9uTp19aQJsPFFh4rNsfoZyWwaRFrUm4oXUF",
  "key26": "67UTJXYr19XLRW3nVRYvZHQLssDZJ69dRkTTTHbndRGKAmUewgV5ExUFPh23ouF3MCRfRGocgNKEg5zjkSeaovri",
  "key27": "2J24Ybbfcun3mNFtXaboiZzruYtGNkUw7oV2CnCUQw4iGG2SM4LZe2LGwE5D5t7hXMyhB2TDGq6dMJx1prwoHpdV",
  "key28": "28RmzV5ArWrCEiMcKyNZabZsewVmRFGfreEs9bofMm56LAyYgYKM427pENT6AoucChH99uzPRUxcYS2fPUbgFJxW",
  "key29": "5hvf9mCHfvNNBEhKSGbR8gaMsFekLTjwC1gFsgGhAk7LwjgPXM8ze7Y1UC7Usfhi6V7fGWidZcHvnUC8fUpQ2h2s",
  "key30": "3wcPkCA4xXW6ouwyGLz2fWM7M7A2qZEc88edea4Yp8nSMATeg1EcX9FPAaVys1XBwaKP7wsSvFG5XL1YAvneKu7t",
  "key31": "5anED94wVUQLUBxkVi7kJh6GHRnBDEJobbU2oF2c2K3fZfsYJyVEj2AaEkQeqe9vxXYygvJw8myPChLHBWHWqsoN",
  "key32": "54Tay3NTC13CSJBmLQMgWShFbQB1Evve2ryYshJhzXcPC36htz4hePHViZCCqaHYLFMmwrpacuKCcvqwmTJN3VE9"
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
