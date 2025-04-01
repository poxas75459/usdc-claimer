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
    "2Y3z135b7X3Hmkm5u6TG7XWLfpfmEdBfUuDKYYRT4aZmz477ccH7onXSJxTtZgk9aBtaSu4Eb9nYfMjA8CJaayVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4XJbWShp573HTsh3mw7dp42N2Dk8Qi27LwTYD85cqx8TNSFzGH2DisZ8TzLRF1o6cXy9nXPToB5HEA3YwK6nym",
  "key1": "5HzrpGJUf1g7wK3UdMrRdFc6TJJEPyFbt1DCddcjg89T1vu86WxpjJvjPfAAgsfbNFdGZG4r38qzg2ZJb4u9Lp6G",
  "key2": "vaLYn37EyUSDsYCK597KboFBpFafkLuJ71vhSNH8TY8aDMRJmJrciiqx1WCzfRKNut9Cgcksn1SH6D7pGyvz53J",
  "key3": "3jpVEZcFbgwrQjRB2scgqaM37PWuUE2VRQf5CQCJxfKo4yzzuG4Gd4jQ3uzrHg6xPW3WaQ5EBVyHw226u6FQyChG",
  "key4": "3MDcrUuDjzcBoNzznoyW91HLZvzRC3ZvRz7c1XAR12SVkWJsMptLsMrmvPLK57nPsLURVPk8CS1MoeCoffbhjEAo",
  "key5": "3FVXFLD8dQfkM8KZ5162u4nD9wFWhWQqvE8PbUhDhjPMSduCmc94pbDXBmQBdhpyh5nU8pkzFkQeutfTMAHYs8Mw",
  "key6": "5skNDuuRqYrTXrT8zcT9RvCNAya3evqvCkoXQ9qvVB9m9WwxvkwewrZvgKmuqsPujpqpjHDW1AENW6u78Xaa5TxT",
  "key7": "2WNiYhH2Tb3U3ZLbQWJcFkyY9AmjvejXgoWjSY227pB9xU4TXPKsrZzVY4GaGedvFHcqSuH54vQnyFLRo22dLF7s",
  "key8": "4ptvCdwtnEpsZjaQkxb2nMQNjUnSKHeoVQRWpq72tBVdq5jvaEGbhqSwvnjtRZuaEwpTBotmpqJUSVCgZtAtXdhC",
  "key9": "5MG9nM5NbCBS11kU5wPYCNmihk27gzJtiJycC27Y3YGt7LWhq8sFkDagc779qTGH6w78JyPyk6zqZcwAnjz9JMHK",
  "key10": "xL9e1YBewq1wq8hhyQzLeFQvuS4eQmJ75mNgcT1GGRipxyjRFpwTVm6vrFxun5FAqrkLVXPhbWoyYYa91MryBBr",
  "key11": "2jFiv5jMPxj682QySkRoy9Uij4xaS2iA84spWGrH6TYCPjZkhrKs8n47xUK4jKG6pxUEuo7bmgJxB4b1CwirqBUG",
  "key12": "2XAzBc9RQWQhHvH3Ja5LbPf6TU8z6W1etuSLwcsrUDJNLku9K3nwWjnvXsgWV2jvA4jRegsH7dJGJsvxpbdfBwTE",
  "key13": "5h7VwHNwThLJ3H98C3Pwx1WpujCMGGSZFyVhF5wNBVrj9MfRyDnGSS5pxXvgXEhuLpzH51S1Ch5QCrkQguskUWLz",
  "key14": "q3RNHsJmG63GAKRTjsQh1zunbvB8TmbFShVUexod15xjDKcKp43vyi84Yk4AS6fMtz3dQmJUP77YA4FoaPwut4V",
  "key15": "324MY9W1amyXakMKG6BCkEfnKUbkJiXMzmDa9WZTeWvpsGRtds4VMGGxiNK4VtuKqVx8HryvoHTWQaFANmeCJKBM",
  "key16": "49ZnUqztgmhLSmDsjLnPztok66yz1azEhEmMm9zAzjG1qYEg3y2TFyidbmdVb4FV2ZRfY8p6TFFTcyGvVk6yRxXC",
  "key17": "5dVCWVbDxXC4Pv4vTYs9rrue2WEALGBfp3qxn1ur5sfNsXjeD11yGvZBkW6FpA9uAGV7KesTTiUREnjvwhL6JAGE",
  "key18": "yEkkHjZg4oemjzYHqKsZSvPKVKNJGvr8a7DZjo9dyhnBd38or1WVdU4ktBQrRxjduW8TaC6eB6PKNidVYSaoU64",
  "key19": "3tUjVGxvNnFGpp19oiQYmAVhjiXP82AHfmLaDSuuekDT5Sv2fDfK5j4vP9ZAujwm41XrHaBDbfXXKn6aTHr3ESR4",
  "key20": "JrCPLNrkKdz3GPbQKp1zYqYYENPDP6ptyQTBsbUTywY9Uf1GqCDm6CvbC92wYF8QqYtps1ZYaSvShRPN2yAsR63",
  "key21": "493PoQZezdGtr1N22tUXsFZHpSosjhuU2t9aeETEWGyX9qAbSamYmVV5tXMVEzHLCU8EVbAN4dtGqRjzhFUDQU58",
  "key22": "m8e7Nn1J6u57EKKoUgQK1vH2E4rFEzymuuBtXa2g41HvBgXh89YYRHFgqu8r32NPW69SwWZvhRu83rVC8jm3Hth",
  "key23": "4YQE9rirWKqVbbb82PnL7gkrJgJ9tCLdMnLJKQcGwa3Ft5an3yVJLbGUdA65GAaL46SHiQBXcBcijE8d6gjFfGpE",
  "key24": "46nBn2AfMKQA64x67GEjejpHjudERZ7u8n9MMC3tMzy5p6K87JsxxErrMLoP3ApgZHfRAHsnXK7af9iWTkRed1SD"
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
