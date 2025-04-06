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
    "4xJzq7UAZasCqkQPmjykK1n7QvPy6YobJ2j4zPZtC3pAopzXrqX2KN4sSJD9DDz2m1sqqK6VTpgiCagvy8XYktqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lc4ZpV4FMAgDP6xFpx4AVkerGzrWHLjYneHVNHZckq1BDyDa73TVEAfYQy9HFxunXauPHAJqjUhzRzDesYgzXkC",
  "key1": "3sFwtMPEJhVXKXWpQ87UPjZQr9xYNVYak6BVfiJib95ufe8fdFj5AT7oF26NLjJwv3gfs8QsX2Vgez245LNYFza4",
  "key2": "5pKWc8sinvAiuegRXkFiaSfNLGos3DZ81vXeRJ61wh7nyzerF4HAZWrFrvXfTEJXMrUUHTUjLgdDwNWLVfph9m8u",
  "key3": "5ZXpkUE7povWPvCcu6EcYZ5bfdDCx3FQ1LisPYkUgEWDbsxmuFaPwcJPNLwwqp1v85NwWiKBMrD3GGmuWy8RDtWD",
  "key4": "61fwWKXNmvSyqPqgejT2EL23jw2nN9dmMH44gZpTHwwib7GTyitmBaXPToiJFK5PMS3VUGcBaWWareA3crC1Ju6Z",
  "key5": "4fXiuzuHra3DwrijV6zsWaGh8qk1ZmihttLXowwxpAzwFybP4gteHLLEdscffSDGThaWUjqNLomXZ5RgBBuQ9wE3",
  "key6": "3HubEdGHNXbW3ZdC7RpizHkhJUFuFT8nX7GLyr1bTLwsYAZyxfMYphPYoRRZfcwgFZBKKCUxwbjvtj6fBBQs18sa",
  "key7": "3fAFaET7Hxa5CEbjFGavjCXJWn13G6F3iLMieqohHRL6LDTBSr5JBDjhFFKyLJA19CP94xAUuDW3aXYrJYpEKHNC",
  "key8": "5jt4TBum2hgHzPxMdv5bzDyteA2K5QqUEmRVm3qBxgVEC3aQqiobTCVMWxPeXpkUdVj2FBGvpAeRGhz1nf5yKjcy",
  "key9": "5GQy8A8xGUWzNVsNtJpDKfp2CuhHqHu2hoWKr3pN5UiR3ZezatAZTP5Xiw5U7AhiqHfpJt3fHg4BcmrcVpWWvdFc",
  "key10": "QEBaujiCmRTrXqxf6ZbEXiF3ETZTtVDsPxJ2aYpd9dccZZhsp54TPU4bbRAEP6fLs4pKipRVjYj43UffEfV6d5D",
  "key11": "2nFq4rGNED5GuqDRB6QhAJMasMZBtwnz3UuBorhp7VZb9fery8oybKC1xKMcdLmDmcU1NwbSj7e4QyZfUAzjgZ6U",
  "key12": "4MTc6S6HNbXgCqbS6BfWgB5MWfNHuvmtup9Huv799zmGQMxB2fMCfDv3vRu7jBKLv1jfyzNz6EAkiofEMaELrJ8W",
  "key13": "4aSU8tZVVUM84EnjJkmv61dVntiU61oW5EPLQbQfc7eqhsfqqNenkzTxJYWt9g9TgEhyZdV9VqaNxf7mZSVzjxeQ",
  "key14": "5RZpX8vsxAZGxvfaa8hHgCZKH1pr6UDGHXGw4NXYSrs1e7r3tZFdmFrWKJAGBBZmQ2ywfuKmCr7V6risVrNYPNRN",
  "key15": "2t34yvqpJzEWzv4tpos4LgVJCeKmCuBZn2NSWPjtgT5pJUagUgVp2zBuXEoCB4GusrDrq5qqMwgt2VLRzHA9XKRp",
  "key16": "rVTHoQJY7hRN3gs4ThcPyxjXcBi1FA4Xo35Ri8w6R7k4xBjR1RmuYG4VGTEdKAT4v8WQep8cZ3Pwa86QYRWRF5P",
  "key17": "3b6dRtPf5YcMNDi2cVdyeCRbZf3tnwho4Ru2WJgQnt2VqodP7jdoopnRgFMkGnyS2z9M8snc1jJnGt8huxbMxo1b",
  "key18": "3mGz47Ysgf6xqxTxhPanao7x4uQ6uir6FNh5hjePG8Tpdj9nbgdkjt1ep2nsoMuX815VpAdudhg5yNr5NwisFViC",
  "key19": "4LhpMCwfz7qT4dQKUdqGDDJW95EfvLnGvEnomGN2abvNbBn5ya38ztrab4Ah8ZB4DjTiEvLbergsJsxQwi9FjEXz",
  "key20": "2g78mgfNHgqqygKyiCLiHzPKRxUfQbkMNBYKKr1f6N2CkWzcsVF7pFyhNyzN1XeuGgBoUWSL7VmFQRoX3AJm48Rp",
  "key21": "2cxAjp3NXerWuTAspHkSyjBbZwkjxqKir3VY449tXmejPLfTLyeLJX57EQcsgBvFmNPwGqx4ZwHWJWXa4aVoyeQv",
  "key22": "4MM6S3ZigocMGEmdi6p4GqMsqt9MNt9dNsftL5shYsfMMA6ZmTUcULNonA8GNgwVjDJXg4CVHs9ritwdB2z1oUJc",
  "key23": "4MjdPJz11V3BztxSHtgCxhEAFbQ7xbPsbViZ4Tj9ziv5BHk42LY9cCAVHq9kyfUFJhCXeZJ5ZUcpmpGLXrxHLJhw",
  "key24": "3dxdm1kfdMncWyv5Z6rViDvGKjg5pCV7BDQXEUactwwSKJ1S8N4YbxdkCZG7EbzvcyXU3V2Dwmuv8HemHutndt5p",
  "key25": "4TN528aikxkeE5h6Hr9RCECrP2wwnBmcqrNWYnM5tac9yJ1bhKxarsjmzqTzKRSA99EdBpKHhcafJ77QLaCL7gHx",
  "key26": "45jUKqPzZKU6FZtwXJMFQihVtokcD5yfk6KXUxp2eCa9evRmiBNvZSkQ1W9yJKPVoDDBTZb2sh7cU1GKNBSENv8h",
  "key27": "3jt3FgminjcdDuwQssSYnoeBXKWhgWvXrVYQjXabvbutUA4PyH5jsBZ9Jd1LrMEcQxneEH48e2ZjL56JjW1GzCdc",
  "key28": "zzaJqhVtTiNC4Yd9oB82K8nXT6YtCCQBPVU1yxhr76rNTh7T1iGkaa7muGDhR1KjVqiaKQy2xyj4ZAgcvf2uTpE",
  "key29": "eHT617tE3SyTchwrJsPURKTJrSNAfxEEBBg4amFJYUUV9TRJq24vHVWhSZ11e6VEA9eQQjJmAhFhLBqqHkQFyfV",
  "key30": "bYcZFSutFv28pJ6Pn7gQiSfWSvGR5fEid8bvgFzBzxZxpevr77BkMCDPC1JCg5xi6WzXuyoyhkWnGfA97Q6tZao",
  "key31": "2L4UBMXMGNbesos1YKT5onYbEZVs8ptddYsN5RdxcpyF8iWZErmA4tmoyFbFm6CNnzX5pQz9jj4TVJHVcLUFKf56",
  "key32": "3kteAjX2ZgPpEeP4dm3EzCX4qqZAHE27nrvziNNKhrU3EWuEwCjQ1TJJ3Cv1r53gttpysqVVkYJ6m2NckQ91Uz78",
  "key33": "67azuydUWZCqrg1Vay3xCfUz35uyLjeWkdPxGvbc2ZytxKYvfJiRjLeQWqTXFxBiZozrb2Lv1MkPxGuGqsJ1UKb6",
  "key34": "3Nx8PC7W7d4YBi3PcW5TMVPY4n2uzvgk1XWsAMmKGKYMLZQsoFT3ZY4Ueed6rbRiUMTE9rT8WT19zqrVzGLmVzWA",
  "key35": "2kk7TLeEUcPd9kVZbv9oncWUqcVeH2Rm4JfqzBnmMqTSzrWgkPd3tLnRvsWKrs7D6EPbNZC3g6ShkRVvrf8LfxCk"
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
