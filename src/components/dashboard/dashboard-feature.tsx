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
    "SzkgLSfY4T4hY8Qpap6qRd97AuVrUjjsmguwZEiD5EED4ccSXfwJpWyr4vZgPYdADB3hSey9QKhxDGtUnuaUXHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnDMyyRw6gmUrcEqkzmNyZ6m4j9fqR9XwVVf4rXajkFW9dfSEvL2jeHFAXFWiB4wJHWxSwrSKDLpagM4NDeH6st",
  "key1": "2SU2ozTcYBoFrnQK12knuj6DWbaxDnee2RGYqjFwSFLi1fbAtKrTf9hSq6Nd9vsTGrXPQRPouJbvSupyv5ZnHcRz",
  "key2": "4gQcUUbzusjaZBjYevQAD8cZX1Q5S94iY2L7ioF4ka3fU8NfxUjdcU2y1L4QpYK33kgoeU282JyBz2RA5PJbVAVt",
  "key3": "26BZVv8wFTBkBw5TgtAnL9XDaizu5DrjC3gTXFxkQavqdhCV2LFv5Ce6ZQMn8f2deSaRrwbUQip13EJCR3eG5NN4",
  "key4": "3fWkrJPYmgNb9jxNpj1RnQqbJJp5BvxQ6YHknZfrUEdP9CWG3jfTq5ydNVmrm1RdRftBfmD3UkxCKSHRVebuT44e",
  "key5": "2Qro3aGm9aYwjxU5bX85PybnHL6TBpZBb1YECoZrQFFnHGC4ccSCwQfqY8uKfztEqVmW87BtTVM69vv8kQH55YVe",
  "key6": "4YDuUPxoPJghTQfeUXL4rqfafWYstNSdFX85uDBqc4Z7EBZZyzgQa9urwuSn8ergLsbpwDqoycmL9mUZh7tkxNCC",
  "key7": "39phxXqpGqu6B2HJCH4fmdUkiottEQYSgqAaGWx56BPV1tReH9UiGgzdYtX9714bFMGNZDqsghpS1xYrrjUwXqgw",
  "key8": "4aefBEytu9govZ7BwFjNXyCYXKPrpzW7LXWayUdUBQPtknQbdoyMh1pW6qmCowZqZctQwNKbRqpYiyUHUYy3R6L2",
  "key9": "3Hg8fTnNpNTzdB1mFnVRYXmmg2j1XzjuHjENCeBQnW2dnVfWLkCUZZirv1N6DBiGaQfAYmKpvt7KyMa5mA8kGr6U",
  "key10": "4rjaH7goZWyvgd68LQdAMFFhiswk2vStMJX8Eq18i7mgTr8Dpe1jBqxKEaSthLeCpU4PfYD6XWpbnvpaHo2MEZMZ",
  "key11": "3tsEdLBbcFmaLi7Y8TXSvqGaZ2XaDWewK6Ywtx83HSENgTAXMSRSfUFM1zedZnJgoCQ7erTyL6nN3r4L9DCTf3mg",
  "key12": "55m5cHpR2fuaaPFyB9JkcvvLkE1uJqjT8FJq4FM79sQecwJd6npzqdTRQsJKRs3CbTkEnUa1DR2WYWyTfnCZYLP6",
  "key13": "oNkXYqsi3LtFbaRE1oPxJWhj8EnedqMqcy7e9hcCiWMxiYanQqExBU64pKYtUMKB7JpaDoy9bLXhWKXygkVHSQ2",
  "key14": "2g2VHpbSZGkFcySjmHS4CYqAV9KxrZkqtaEsG2cDsU9Xv6ALS7ZbvkJTrRTNRwaKG1XY7UormCF65RoxiSwHcvKY",
  "key15": "2WKNXipQNhmERjsE96Bf5GNaTpqACg9iGoQCZCBU9Rz5htNvVcGa6DNgbwpY69yZ1iEyeGkd9UVkHcb63uAaiaT6",
  "key16": "4uHAYJFvoZknGrMuURYD4wzbaXnuZThEuPqonyschjM7rpZAaKoHAZxbcuMbnZ9x6qKk1AGGUh5taD8pD4CShB5A",
  "key17": "2VjWApyQWk1qxrGGoEQK1dAoXEYmpnFaKxnBqXYwscuWD4ES9tXem8Xb1QZD2nx7WbQzoB2SH4LA9YRc2fMtdmND",
  "key18": "Nv1H7GBmCKEFowWfAjkUCYRPGUG5jvav9tUn41CFAnWp9T5Qm7a6VRoaaCKxxqFBeLr2zAfKG3pCShz3XVwQR4H",
  "key19": "58DewLA6ys8qZez6ZEHyVKG9ksjAj8cVixm1JLzB4dbmWVehe6xXxkZvB7uTzLcpSphGRuakSvi8yju791Git8oW",
  "key20": "3g4tot7Y4K6oLA98PuDYe3JHM74qwRxKTuxGmgCWeiSgsk2TAg2iwJT2q9XgtzWMrhK1Bjpn9PFsnDd6Fs82Doa1",
  "key21": "byPEKZTSR633UZP6BtECnNhXUqDHQhvJcnetM1QFHpUayqPqBWSmcPopVPgUvJtnaTB9sv3fseE8R4pi3a6295J",
  "key22": "4JKZuCjLyEX95W5hNWKaA31sXbiFbbC1HvjUbKmggfbfPCak9kYLBRqYZvksGsFpK4dLPdgSnkzobE17cesgrFqY",
  "key23": "3Jh5eNeUQ9jiBJrPiWdf32y4JaecCxBgXb4BJ1PeVHPrhQX3iBB2Vvmi1KjCwR8TTKXTuXTUbrhEYjrLgPKcYXt5",
  "key24": "4iT8VwqJgCpZMggJPF9cbH71TxiGVoyNKVj43fUwVLHoHrwbTp26JxE7ftouoSfWnpLPQeikKUvBS37EJp8aBQSP",
  "key25": "5svSAsbcKsms898HfXARuruybfp9yffWNAaeFBXG7pCr6d5G7ycfQMAhRVdWwehMXNtgXWYKvXvAky1E1MXuHNhB",
  "key26": "4JDChRwm6vjL62GrrUYVaYiWUCUxm1HAmAKeYmPbcqXr9YQ6He4nqLoZbzKM5nTHKoFJKu3jwyoakCeiMBeKV2v7",
  "key27": "55SPLLVe93rpvow1EUtgEzBTzhbgEjt95RK5BuqNsxJdqkWPQAqnnYpDo7nhmQWuSgmfyRSrhkvg92BD93p4uLs7",
  "key28": "4wt5G73NwvDvTrZHra82sDQXB5pihssDJt9vCPav9kMf2jbGdLhwBQgdKWZu7dHLf4bLjUue6bHNXZGidifmX2Co",
  "key29": "5BfHgQJQN3NQJRyXcX1cuD7rNrwqLi75rRdgG9CbhTzPxdp4jCcAAEb6tQFuHun1JQdspfNVqZ9orxnNkZkUHeZM",
  "key30": "5HdAo3mhKHxkd2t9kybXBxhtyo4og6yvoGru4JxKoXLXy74DtwAUwMrZv28CA3vMuXCbZGpQGwkyuKSZS5A89A6J",
  "key31": "4gqRw5YVmtFdiPXzSqKTiiUYVZ9PP96y9JxUAQZcd4f7E7LQE9qEH9tkt8rBJtCihTizuf74UafMFWb1j2kfebQH",
  "key32": "42YHriHBYB8X3Rg7C7NPDiSw4npnUwJp7ZwJA2GP5VL26HXt3JgT3Hu73n4NkbhUA3KG7nBExWJPHvrKMMxTwvdQ"
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
