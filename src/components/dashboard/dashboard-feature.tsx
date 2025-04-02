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
    "4qz1yyw1jgzKdwV4HANbu4NHum2f1tfntqvu48Dm7uKD2KzU884ZhbGgduy1DpNvh9ehF1fSLxuPtY6EAv1BqPFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ms6f9Tf4g72aii5VprFtQC7b5EEUoFnz8bWLsnuNnJGh9BtgXzHRCytpUC22bQJjnhfuQXkFrwVwnkV1E87uGaJ",
  "key1": "46ttQ8KcKQmfLVSGMVGpkuKogxF3jqEof43wE2EgTQ1kAeze7xb2fs9gXgfgzejndPqP1ZdFzbp8qhtgxAvkjDSm",
  "key2": "3yLezwFMKkzCxNMjLRFACx7f8hjuKaQqsgDs5x7M8PSRDhTZz22Actn7zHreqPr93jTTp6LaoK2rcJmxFvHKPXx4",
  "key3": "51YaiTDLLMDkcTzQMcBKmc7FixsxtywSXqDzdWqFkTDucGR2ekDFuRdirgK3QoZ78wE7MCdMs5LWxLN1HuphcBYy",
  "key4": "4ePvVeJ9EaqggY33j5pm9u3kzX8b2BX9oFyNVAr6ubpNmwehs57saz2hAg9jpo4tZS3ZXPhKMLFnwRGjGMyDnaqN",
  "key5": "2d1sZ9TVqLav3Rcup41AU2E4D2UHT48YdGo21YieL7WivUUsMd35o9jUkZbevLM5BDrGMWMGZW3UdufkZ3DL9tTe",
  "key6": "5CGFbBv94wUvt8cP18SSkfKiVF4updU8oxyqA5zXADLWSd2Yj7Fdn8HqUtCjPFqEHbjGZ23gDnR99uCjoJJ6iCpD",
  "key7": "3aCkmo4ZKGUma519pAoYmXeKXT1EmiTmyGLfxNL7do8PKg2Kb5tG4nd1pmABoYTYRJ18yk3vTZAmE66qk1mXiWYh",
  "key8": "43WMZWbQ5uiBJSF57jEN6XctFU2PrsEWnHM8N6uFVpV2yoNDX2Zf5io4U5B96FyAJMbjsXKuWQWvBZjujgbxxiL5",
  "key9": "252eSkQAHT53pdTNwf6RvTUw5DMQHk2Zkqp6weJ32sHg8e4bTsQ4jSnr9vL2XQb5pqZVi61F3e5qFWbc1qpnv7ob",
  "key10": "3whDcz8rcCmNiyAjs42CngxYF2MCoe4XTqbzXUB4Dh4aL46QP6agbyNzMgo9itNetKgxrcEdycQuuyUJ8GNYkdi8",
  "key11": "5aQ9chvk2ZzVhcMuNwSS96Lo8a8GrcHgzaj7EkCC4GHFdQGsTNmcyFHhdmGccf9JJBj8kxKwUkHGHQutYn5QSC8S",
  "key12": "4f5BazhYdxiMg2r3qFG2v62E7XbW4eBAx4y38RbmGWjEGKJ2AXp6d1ri5mFS4ADxBySarwEDmYC9eNVuz3ZLpXMh",
  "key13": "58hasKD9hdzofY1HgLRCXR9JUJ5BoNCAPpAVRnMq7g2HWqKhW24an1yZWf9T79jshfWvmxKnwm2awpJCYEtxx5gg",
  "key14": "3gWjNDx57TXDhLK65i8MfRMmwuJngyYizPNAceJcX5hn4s4EXHgsJFD8JD2oTuMKNz9dKzD1JqqWYgB7NUcpF6Ci",
  "key15": "3y6DTQ4Hd79Q8nMTUhVSCeJhXYMTe5PMHynfPBWXKn6VunTs9ZQcq86dcw6Gc3nvDaz2jiXvrp8xNfFdtEWa8beZ",
  "key16": "5J3AHJDs1FoARSao31v7L7VxRUjjmZvxKmNiLSxQ6QeJExU7vqynJ3rgVo8734jstSGTb9Lf7HHk83ZPKyuzeWdZ",
  "key17": "2J8GKfw6R5dGxMHSqPeUGJPtk9hTPfujqL7KJfrx67KsBtJKEzryqc17YKJvqJbboo88qPmvZeGkRVLWdM8WUatF",
  "key18": "3XdsEipHC1efa7RMwr7FtHXwbK2o8ZbScWoQoiZ6eyBNQjL8p1nEHktX9xVgcmyGXsmn9XpHmC9833gVZN2zPL4H",
  "key19": "DPFXsaEF1i3FNXKe5AzNax26XCnjAtc1PwTazS7jE5DdqLPS8bgEp6X8jGzxQ2UEdyaPS18w7upRfLdtsJyHvcp",
  "key20": "2aTrmRrPVPio49YVfsrfycBPLwTwko74sPVeAirmXjDSYLnQLSUXty8Nw9ZMwYTpuYDVGKYBirxzZqCFFqniGYHJ",
  "key21": "3rz4ZhwN4tVfWHdcDVZnKqHrWQC5CRHi5BiSJvs8dFcZhmNPmANp8c9fyBePsABrJC54zVEeTXab6Ki7VJRF1h5H",
  "key22": "3SteGbcyj31aMFZqf8KP6X7GnnK5dPx4SKjCGtWDqjgo41Cct1wKYL4CWchQ5DSF1wEmF6Hyw5WmjBksZeMgShZG",
  "key23": "56HR6YHiCpAjfdMvagYUJzeM9upeMy2KWF7TUZzVRDC5qFtHqTgDTD1Pv22pL9UL7iGaqpknT7zH8eyoMAsF67by",
  "key24": "3rADDSoEUyKpxpQ4gEncma4QQjqWaEpi9M2EwWCzXt9vXN2vrwMbFT8sPnznrgBqjhpE2prUqHv2EoNMXDsmk9un",
  "key25": "5mYoniy7x2qN2WvoKJoxNvyR7UkjndHmgScTxhx5Bjt8S4iDRXi31G98dYzR4BKvzJNAv67Nnmnuk2J7tmHbERpQ",
  "key26": "akEpdF4mremLbz1manpdwpoKnJ4Ut7SSDp7Cxcrx6fyBfKg4TbJeB98XXFbY9Ki2HG3WALTghpkJa1g1Xpm9BC4",
  "key27": "3UoMRiFzLHGqYZ82afkP953cCaGkTaHvdnx427Nh3T9aRqTHoRg3aUWyG4WNQstZn7k9Uu67U1rieqFAeqD1DvQ1",
  "key28": "2yTmjgPn5weXjvGasNRw7jB67D2xHpJorKTYufMoCFmg8pfo2kL4xzpA9uMjkwSLYqCix6AdHzvp7jLNo8KVPByb",
  "key29": "5QPNrCkz5qPRjBjYuay8qVXXisBt3jDzoQEY5GQrf4jruVxv96CXfNZ3eX6nrAietQzoAQ3Me7S2wQvkFes6keLU"
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
