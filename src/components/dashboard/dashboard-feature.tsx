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
    "4z6jUx3uMKHzUEZp3keppj4ms5kY9chyJJhK115tCJJiSmH7KX9Qsi71WGgnAspoitcL4XQKhxVsXrjnqsX9Ge3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZgzZV9eW9EJEJempnMC6ZiY9Kg3ztSECyuMAi5Snx1ogqhSsSQiWmP6ixZiLC9niGDR4d274fmv3JrQyiK9M44",
  "key1": "5wS8A7JM5W8cxquFjoybtbcT6aRTSxhULeHqzXLvvWuDcN82h49UAtNUxEGnmKtUzKtAg6P6joohgYdamoXyYHjU",
  "key2": "5bZNhbbWGGme7EKY3zmWkXh2aM2qhu4T3omkTcTEb5g86RKELLNrYTJZXWzEqKca7qE6q2BwWzhjtwQpuLeCerh8",
  "key3": "LXDNu28FkKuTRgi2Qj2KjWjnaRNJjkhKe9DxAX8ZqH7qYrUy7Df2hNJgviSJqWKXFEkYVvtzapatiJThGT4kU9T",
  "key4": "3Uc3R7C7LdGh3jmaWZFL7hqfVSnvc4yGeM68nM9wWja7onxzYbG1nhNuf311K9ycx2VS1n3oNS4Ey61devemyoX6",
  "key5": "8rgYt3n4hfJpwFGxo2oGYhNNRa83CkjrfsrPsmaEqRsPKUrKHqcLQ5ksz6XGHCA2wUwMbL4XVK3BtfCCz9hetj3",
  "key6": "2ECLHPM94WPQ7DNZCQhod2SYGYWs24MpjWE4LQ9WYpgPwcW1xsX7iDeGZpTb7UWe5bPuAPirRNsbTv1gELcAVZrq",
  "key7": "2g9251rwiY2UUbSSjnvNxJpow4nbK8ZbGRPue3mT6egooFVEagmghTuKVSDPhgczrdnMU62uF6D2McvsCu3rG8Ue",
  "key8": "2k5SGcJw64cVnNPuZg8tFqggutoycusQcMViVGhNZsGEQD8FnpGxFknxRvXRL14R3qxXhoESPioD1HLTqMYYVwC1",
  "key9": "dzaev2ubHroWvvkcRJacTjKUZuggmBaWSu3BZideLrgcJiAfu9k8XvbEbRVxErzmSEWscoHHzsrZ5R4dF2ZJDtG",
  "key10": "JFVuuNMzdW5pjypeCafm3orMjSfHtU2enS4KxgEpE4s625hXbHv84twNHauynrSrjArsRFcNXMYnHRUuF99J66u",
  "key11": "4NpPQmAvEaWJjMQMRgx9hKEYCNUV6FsXu9wPbVFUwGPsP6daYyGfEe56gFGRG631PDEdSryk2TCSJXxtamMWJpjV",
  "key12": "4KwfunksNe7JwcXr4pioamSZdXLvNf3b5aTbY5AHzfhzJGAaANEv2ebgg4x4xU499vdzvvtG5XtHtyqweKKvRuja",
  "key13": "3BSXwGW16nsHCPR4Zowwe5hwuWF31NgCAEGPRJrLstbYwt45y2ML8uHqpho89pJjLReW3bi61MJ72krXyBJDL73w",
  "key14": "5RupqjN9Rjtg9kuCPavuFYXNxe4vZFTAoahArXKESYZmZu4wvKdWNw7vuMkvtgaTgAZrgt6rkHjkDqyNUHiPdLDm",
  "key15": "3PS8zbKxseCEj2RBMQrwD4UiV4qmNyGubqkDYYcmTahEWWh2jHzG4NjzxdfDALTYcetTPPwEMLx84sKPVtxDY7No",
  "key16": "5PW3mspmpk2hC1NgGmV46d2mqTGtApmVLUb4YaStNdNsR5EyTTcqeLESVavoVeb24zW8tSg5MUE6rih4MT8pngfK",
  "key17": "2ejNv85doFrspE92kK8rDmEpAX13LVMgZW4LeNbtbH8E3LKzb7gxuLQ1LpjBuDrF6HTBZJ3uteaywajXFWwhWVob",
  "key18": "2iw8cY4qjLTAxbKMJDcEYbJ5TX4J2uuHxctc35pYSJEbALbtuYXCDERNvR39sEyhuYC3Mj5XPpdCHXLgkSUuMMfz",
  "key19": "3SZjghUz5v5NRjv3ZMVRpyJswjibkPXLkDVgdmn1bewvJ1aZT2nT3twRgLN4BmhaRfK7UMKJHFcVvCx7knoQqLc7",
  "key20": "4jefTsw8pMCcz9XU3Hk7kuKPGi8NdziFGNbk4eYMVyK112KbZQSc4LQ2eW4w2vmbRrmeim3WJKNcRVhKhzW84Gqh",
  "key21": "5rXuo3GCSjWrFrB2snSMMY7TrvJZ1HR98P1f5WP9JnrcdYigVTfKcty7VD4DHrKbP4gGSQq8FZNQjJrVKt7CLALH",
  "key22": "4jDcVdFToaKbNZC2mcXbcYnPTXHHEG4dqDrfVayXkaYBSHphB7zLSMZ4VDJnUduWbY9UmDUAuQTFa88AbieVtSoJ",
  "key23": "2C791zBzbcbWDRq78eCqfkRgctpYtstMRTthkYKsgCzhcpe4ADhbKBzBDHB7zjtKtaPiy34SuCtx9dCxv4LSZuvz",
  "key24": "4fRaa3eDYJgWw3rc7XFBV2wedQvWMyCZiWSJ41SH3MscUZ5XjwzdBojzC9eSB35m9UazwjwtZbbg456oFWxTn33Z",
  "key25": "3nzgXZeN5kfJfTozi4vM7Xs73hP3WfHLSuAouruFywfAe5GY9YEwBihHPBLVjbeT4Tfigw4U23pUpzVZzwn73BqC",
  "key26": "cQvnzkCD4n61FT1THFTXWonf8VVaMECTjHteWYA7fAzJJyZzRNGqueoQLX3g9GPUoAcAFLKgjW3MXVmmUWYLLT5",
  "key27": "47J7tgWoUUYunHz62HAeENqsQLxadXPJkzRheqT3eoGs7GKhZTej429tawzESdZ5JQuYxmn36SShDYvjgcAMwePY",
  "key28": "4TRpWvoWzN6JK4vAaGRWUf4W3c7rRrMURFNkvNcxXDCxGvJbCML1ssXcsbVHwVyowR9yDdJvDsVpdyX6d2PPVuvA",
  "key29": "5yLKUbj5F3rqQozVb9GZ3aqJTPWzpHwZzsBL4iiSqY4rx1zMXMk8zki6xQ8ebihu7LaTsSxqguKMPQuL5BQHXWQm",
  "key30": "9J8nAykuXC8U1f4VWgSSwwpkMNScwSgXpKdWm6KU5y7ZbQ9T8Xr6d9dVJNK4cu84j2bpUD5NsPqWDdo4cJNURhn",
  "key31": "327rM2cR9RxJ7VJ8EoKyNqv27oMUQTnVrWL2d9yygu1ms7rbVxZ4WUpCFREUDzydteoB2iAesUJqybUVpLmT9YiR",
  "key32": "3j3oefQcLwoASFtBNYAixZi7smdS3MvojBDDHXV7a7JMcWaanok7bxKXDg3wBSwKJEawgJ7yQegau7WWgSe3j8JQ",
  "key33": "bwJRY3cs9ipQ1BP1kuJkPP513Ci1bkhDi4H5mKv6uPZTYdGySQb7X33e4EY6pfgiNuCZ6UwDhxutcnYMkSYdgJg",
  "key34": "59T38WRmDBDWJvvaAma8WrKaKYRCJCRZPDwK6oPZeZbMn3BY9D5ZKbCYXWnoGWvdYXPpgUnogEutYqtLWQynG8hE",
  "key35": "3RwFwimsrXcR8sLqwJCxwg8HYmRqnMSVzSkM98Rr9J2ToVdaqsPS1bZ5ZvxYLXaoirwuSgdgWVUYbusKBLyR8scn",
  "key36": "4yVVGzPtN1rJ56C2bhH7gQG7MM1iH85ZTxXiaSwWZvg4ZzfowjdT5K3sGjCEB8aRNeE62K4VPK2ZiH97MBXkLvzA",
  "key37": "4dMBxYKRzzPMFNKPkwUyY6tc8MgLaakVnyqFRRYWkEw54QvTFxCqe9et9skx9QmMWcRh7ksWmGaNJVHWza8z65YH",
  "key38": "SLscWCjzTy9tujcJmEo4nY9oCMQXE1WdbYahEjsHCqcJf9yeeYSCvf2nFtdqemA7ADUuooYSFVodwo4ewG78Rcj",
  "key39": "56Q2hzSHacb4FeMBErgDeRN1ihqHUdQ6nTN25MRus2uJ1WmqF9n1LTMxbHbVjJiRKvXFMpLu3i4yRjjs4iBHrMT6",
  "key40": "46839919tqAU44zUEmMhDeEzDLC7neoPwnDoHUpAxdgpdfEenFvwgbkLH4pPRnfsXdWJ6dGK2TLbQvjC6SJxgwFj",
  "key41": "4yVxfz14tcKqvMJNsGPD79eGcwe4hKuvsogn518Ayy23KHuY1FxsKeDijazPEWkbnfKxLanNbXAYVngzmvmmFzBm",
  "key42": "4t2w4DPQKznG5f5oyrYN3tzMqeavJqTymp1Xs338zynD5skArjxuDJBr7H6VeY52XKRpRjseHmC3mnig2PzWrmJh",
  "key43": "3mEdkkSHcoCZQaMJUzNEvkmLxVrEuMmYTFrv8vMXrMUoKmDnr2LkiMVA3LKCxuq5tearzfcbp3rGFj9Y81ugF8fb",
  "key44": "5i7HFQHiW6rYjsdQaonQERQWcvdcecRTAsAFSVe5s8MhxRbBrTu2TE6QdxcyGDmxKKL2hq638aExk4dqx3efCXJ4",
  "key45": "VR5Ndtffpr8p98W9qkLvzwhfy8CMvKZsKZTrbVyBH7bRq1mbou5ZuJZr7YQ6BpABZS3Syt9oMkVNewJFoEtnc73",
  "key46": "3yYUgenqL5kqMskJ8ec8hj6aomN261aHTsg8FazvDXF48MCntDR5WbGTu1svT9EsDVPr9HFQ9rVbUMysojHp2PZS",
  "key47": "46pggr1nAYf8sZsrZiF4ihwG38WkKJo1D6qGbnHunt63xhKWgLQBxadzFQMY6vnZDx5oaLymUdN3G4Jqh3MqVV9U",
  "key48": "g9RoVQGdyYqZyACna5FThz2C62q8XdDqQHK4jWFAxn7h2zErwie7e2q1XggPD4rmeV9uYWiW5spY4zAjpFDKkDp",
  "key49": "5Nrb4dk4gDze8BMr5nmdn4ynXjhjTo4XkQjpMsskdVdPwAusg9XJA1EuhG1sqWJ1WjutDL3Rwrfca3sn818VT1Xh"
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
