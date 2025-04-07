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
    "59SPnZdnpNAbh5xfbCQ8iSM7hv9Vy9fcJY7ryyA1zXmx5SJyDGx69U5iKu9BKzzh9oAKE24vUPT2tcwV4sWcbgTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4taTgpqSeLYWDFhptsUr3q74XFLHYHnkieF1f7i99Ypu1wqGNXhqkCzzC2j92BdEHazkbsujadnhQy5hGoFZrCuX",
  "key1": "23BkSGAKVoc8LcaUrqfM4KtUkzKLNQGidTx9oVrnfSSUHsM1ju2TU5FFh9Ej44tPj7mjG5jmeJQvjbfgHivS9ZwT",
  "key2": "5Lo5cvW5KZWEg5SByvD6XK2u5yK7nkWyCZMYtcQQKpFCESmb6RfydTfEBzC1K3uax87UXx9YUur8fZbgkCfLdcH1",
  "key3": "1k7J4f6ndTaYYBi5kihcetvTAror7w5X1pc2HR5rW35786ncHcPYec1GQzGaphTBegJgnV1beiQisfdqyP7GjwN",
  "key4": "4YgHMQXvLf2wvoRchnX78kiwMhQBoqN3DsUZBS4GUHUpjVscA3NZPUXPxAucCXGpkuhtW99RccZ9NwE89yU12LHr",
  "key5": "5eagkd5LfbE8MoqUG92h36iRYQsD1hGTFmv3pu1pGgRtHMwYAxDHN4ABD3GVCUsguz917zvDZBPXuEA9xK3xS7sy",
  "key6": "4RUJybCpcnMkvaTRBCUDr5fwgm5nrE6v6nQpJ63pHCuTiZxn9jcGQmkorQSW79P7Wr5quWwWVt9L7CyUj8yrDhne",
  "key7": "5dTxd9gWJE1sabFZFz3Nm8JEWhmhQh7AnSbcN5FwA7Wwfzzct5iRvBgJrNPMPYnL9uHaDJ4CxxQF4SCxQrgeEFXw",
  "key8": "5DToRXKHFs7KbmibVwJBwp65p2Uv1XwLvxwVB84CVd1iY7xvnJjVHGudAU5ZdpDYTWbSxJJJwHgWJP7TxYRGwC18",
  "key9": "5AFbCDfeP7YG3NXS2Jx3hhBMA3ukQbhG7oiruQQxTyXpNAVeFSm25i827GDdTPdUWqLsm8EJvtHRMpZBXoW1d3Ep",
  "key10": "2mxRVSN1B5EeLiJuYFBevAXkChfnzFwcN3f7YFyTrMYTrCxb5gUFxXzDEfSugMDpCC3JRqipHPLxT9hqwTzawWk9",
  "key11": "3XVafwzogyD1bNxdom13ePvWDzQNpWKKHd591Ak86ozPRmMdZVyaZbH2gceA2drkfyL4CgnDcXC37Px8r7tNr6ih",
  "key12": "4eHRmCQ7hdhXy785M2G4RWKYFnypYbCPuRmSi7hepf8S8aRUDGbuzTfqZGir6h9BhLvKkTbp55DsEVPqNwXWutSV",
  "key13": "27nyCCkxN9WEAFZzrzFiimsuKLfAK91WkoJaksaYGYDCaTxFzPo7n1QX8tEZKTaNhEwhTtHV9HQrwjDF9c5k1JsV",
  "key14": "4Y38jGgLcQReFnC6rYMZDYLPpDU6sWKHFp5u7ZndQyXRLD6qjhRozi9Q1AN8vgFVf3yL5Kw92G5KY2amKpip42VS",
  "key15": "2jLjCqQy3iZfyHxFz7K4v47tNuRkuicu7Y1BLUJRdge1kUW8RAKTp7vQ8XojfqQVgynyh1AQV9YVZfwqptdcTHxZ",
  "key16": "4eRu99u1SnWJexWTWWorycQeNhtDbzYe5eC9YLpZ4zCbrXT3sFKaWLe6W3bo6LPw3cn8Yc2GBXVxHWjcA4fNevBH",
  "key17": "4ZFnP6a48xAXPsRgx7gsFpbwbZrzRNR6QE2btMFMcKoerjuT68JLuUvknQv5nLKkGZFgbqFJXa2oSy2YzF5qXotc",
  "key18": "5ApADWWWc8nJBWV3gmSuhEZKaQhefDMs7P6LDf4pK2PNCbrPfjHwG99D3F8GHUX2QrCbstPZMPZ772tpkXEjpJbL",
  "key19": "5B1oeZD13bBTMY5wqQAF4L8UgmgMKFgryhU4YGehaueHg4HhDcxPdhqUNp6wXu9tCbgr9f5KrSGvEHHEqgQjKgnN",
  "key20": "4SiZKaJbXEbdTNwCghKR8J19NKBBzFT4yhspZNXwjftV4WttN1p465ZJRivyAg43r6tCEQCbJmDzpjHo7xsnhVXB",
  "key21": "YLbmMwAsFw6pdb41epDvtTg2oMUVUzkDbY99zGYAJ96seyDBjY9K9XGUU6qer79iU7eiiHmqZyQQby93N5N3cbP",
  "key22": "3a36obiYBLubQMsDMHsuBDQG3EuFhuaz3pcv4asJrGrkwLhUC7cqvH1uJsSyJdv5w7JGDw8vxP66sefEKEA8Z3P7",
  "key23": "3ttRPfGSNnFLUSV3obQQ3eHQT4nF5PP9aVFcWvLYssxgQKqp8MUPidUDdezQsUjVeLMgDHaNWkRtuBs8eXW96QFz",
  "key24": "2TUZ4WXmfXL7gjdWzcNuCJzMGDJAg7tE8FDAct5tL3QiomNVqSMNRWgFowkPMjE9nV9sL8bdwaNMudED2LXtjW8y",
  "key25": "389eX6hCkvzvJVAQ9rWXgouz4L9NrMP28TBzSr1Er7e6aRpDKxxVTUvEYoaXrUUeKG1ZGgFnRurQKVyUHcuQn5gs",
  "key26": "3BGCwDQmnM7oa3mokyCoKtjUrttHmMjcSX3TM8DmBjEcWbtNZoNpf8HVSeMHV3WvJ3c8F1s7bNjpyZFELuWYEzbu",
  "key27": "4A6VHt71k8xZpojT8Et442SKxEyXNFWPJhojN9MAns2bm4jWZQxFvoR3r5AExWdHcFMC5C1gEY6KPTLxyhXpNbif",
  "key28": "vuLERtsC2okTSryVhBbzor1xq5iwBA3qKBrDLXzrgaCNdjS4kieRBrWSqaDtBcMXbnsoRMQK2cCK2VvwRsZJD9y",
  "key29": "3xX5eMu2c6mzgGMo5kqcxb9JSNU3t1vXQ5Sz2VoyaBMUs837yDyCWmneAW9928xoVhLhikaVddoHXEpiQPKefFJ",
  "key30": "5Bw6vXgjZyf9RrrPLiEk8AVsWtwnCuD2JhHAvHtiK5haWcCCNyeptnBinv71hbtKSy8aybA36A5uyCdeTGM56a42",
  "key31": "3ZBFcQZZqBPj4u8Ghwz3ARB3M35MaLsLb5gL6nji9MUHX67j2AmnvzsEcbZD69jn6pWnaWrrPxoMxDKDCSw1huPB",
  "key32": "55YFKDuuWAU4SN7msKTLVbsrxnvN4FCsefeS9nAAFyq4P2oEx8mCy2zBUtH3TyNevnDnGzgqym6Bg4k42YM67s3N",
  "key33": "22WXR34cH6pWSyPdYvVYDz1FUx4cyzq6HXWgXAkn94XVdXP14X4aNptfbqbUCHHSEtbNUoZvM1fGDfZLyaUn5tB7",
  "key34": "5zmDU9cQM3DWRm55Q1ihtGqJYGbfCLdobY51Wp14k9Mj9gWkk3RfVtQUHXeqF8cD1ztoZFF8iU7Wt1z2vRFxmuft",
  "key35": "4G7TAgiKqn9NmuqUNfFNtBeJyC1wL3ZGgp5Atq84r14pfkRXN6SS3h5xYrmWHAfYLrsdFdkAFSE3KcbmrEb6gvxv",
  "key36": "3NjtxrXzyF3d1BnGc1WcEhVUH3wAggiqrvNUQqmBf2kJoQkW1DCoGMuon5xYQXkHwyk6jD7MnG4jTA1o9bQ4F1RK",
  "key37": "56qEoLHKULYR7UtTWgKSWfDrXcaSWvtxvi7avirUGW9xspHGKyybfaAdDqzukavMDRJNFU3igcfMcYmC3nJ3Bont",
  "key38": "4LVBHBGxzy9jwNH2CkgCz1itUZkJsadu83bnfWtEG9eLLPzsJEiunNs7xNToB1zsgnyfFT1YJwNF5htj1UEY8qPz",
  "key39": "2zyo52G87VeseQjzxaj78STAijq6r2oH5bcP2SnSeNVS88hSzvcPNiin84d3FFwRn89XCHW4YhtvBT1CBSwX5HcS",
  "key40": "4yTHe3VZDfScLt3qaDn1BvrzBv49e3pLuEHFw8CQycAPm9S9HD4UiHVtuDYcxVFFPnwD3uDuSiiLk5h1ETV8HhMr",
  "key41": "2EpPSffGWrYJUXEi8EESprKpFj585yEeFR4s7Wmffj8225tGfYD9s6NzA9mfEzMw8g8ksjjSsyFH8Mme2FcnDRrg",
  "key42": "2P71tTpWE9Hckt19QZkBt9UsM9F8UocMMQFmyCgF7wbuXHgq5j1NcoUkg66CMcHHzXXHra8CvS8YUqF5f2LNT6PQ",
  "key43": "364PpF9tuS8DnESPT65ACHztg1EMc2fasX9ahMfgVezMSMfAJ6PRdjUSU1MefkuU4cUNpMvaL5dhmz4BhcGXPyQV",
  "key44": "2m9vXXKBzLqPXCjVZfVyiofvdGhFqBmyeMD11UAnJbrurEAo5SSpMD9un5AdACREV6a8oMbqj77vPWtq6YM2V9aV",
  "key45": "6645ij3qRtQjhY5AyP6Fn6gpcgpdeSRg8gGw13zD4oXKEwQKGj4bDrkwEYx58NTVnaK5ApRs1zXby1hqto6o58xW",
  "key46": "2PdCpqoSaxgz7f71R3r3AmGZU8zEL23xu79P6eczmB384zrwrAq9r9Lj6QWUCY5JdWiRZyrEX6W1Wu9vH6X8xkGC",
  "key47": "5vYFUaPFMdFyMLeu2U3Eow62hPxc2aSfptUEKKLYmfCbHpb2nqn7BrVjW3HrrZDNMRjEdMiAKtvncz7h8wowyNAx",
  "key48": "5f1Y5xnvTwMFaDhtfpQkiEYq2M4WRcqdBsbc3JgwVcn7f6T8VS8SzjKZ8Uwro3fagcajvCX5QSvaxtXsPFbGxpau",
  "key49": "3w3VhtytoBFAze4uMQk2xpZ8H8VLa4YZR8bjKbLBtBnBeK4WzpnyGJFB4Lx58mDtTr3ExaYHvQn3NHETe2ySWsQ7"
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
