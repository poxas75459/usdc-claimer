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
    "3PdqCobRTeRA6Gg1ahBFH9dumCtvc74kryHkx8qmoNzaxR12SrUW3bsiSRNV9UG2BvmTZkpHbjWnGUrFn92yhkxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEqk4FPWGLTAVyRACHArqycgBuaPbW1zT7CzdQgs5rrxWA6V8Uzbx3Xr2rQgoZia2fnVy48bm8WhsXFB1HH1y5H",
  "key1": "3TVLM6KNqJnfB8KDiW5NZL8TaMVgvTxjpqwj7awqyJfW68pYnihDJGRK6SwauFuCZY975ocsGkTzjprnbP57UPRi",
  "key2": "4w145xDfvXowcGzqx3rT4xbEh8WL2K98ay78L5qRgTJ2pRadcnfwLCUfy4s6FQyK2Lvn7svw3mSkWpg2CEQ4dezY",
  "key3": "5pZLRtSoHTKUsqvZsc4MzHeCZVC5EszWMC68xcdi2WVdf1nFhpuDmMCDLhJNm8peGvPSubrxWCQA3TrEW8V2hqCT",
  "key4": "5CnURHzeXtd3xWjeQfe3kt4qLv5dVKmwK8XZbKvM19o2TFRu3gPWRP6XdBeyeHnkZCMH4W5aRgxQcnCaThwcCNSE",
  "key5": "5CGdZDd8GS5VUqEuGN7FS3QE14VjrRPUE7JaHs1n7N48pMyWdMChdamCHw4zDLfvnZkig3KUPLXiuYkLzXFWgqkH",
  "key6": "5576UxYqjcSRtixLhGqhBD2yqkUTHVPobHhsQ7kYrG1fCfCxwnHheM9F6ran6opc76E3n5PbcxmRdL8groQ99ZuX",
  "key7": "3atCKvLQx4Mq9YqhC2LsGoSmL4rERd9fubVy9RTwBAq12RyBFfyKDh9dSfmDsFf3mrWeTHbt6Pn5MC8mNVHduzCX",
  "key8": "2ThV2NYcZMFDBLjFYjvRhg4T5KQNBewXdVkW8bVfSFRYD6X4EUttdd3EaCWULroUEj3XLaNwJrGqdW45SXTJAUyu",
  "key9": "3nLCWdrygisPPHSfZZMrHZQryxsWnedSXnWVpfEvsMmKXuRXAcUF5nC6jyD5E9EQfK3bZq6NhxWpPfiAKZjZiHAe",
  "key10": "4EdyqYvB9oJW7qWXhLPVwauCjbn6sbq6KuSLCWacEv8tWxFFeX9Fia6nxHobfZCP3ZRFh91hTTRmfrXYredMfrU3",
  "key11": "2j1Bj8wUhXeJPupvDrPyejkJ39sVXwcML4j4TBuQWg9R5SdEeqmQeEtBsfPGsy6WG6jJgoSYeQ4ec9MVvdB98Pyx",
  "key12": "2YmASS6GmvQbD6hSPUvL6GvpjXVMabwqbbA4n5C746Gze3Xfn5SL5usQ9tPuiSDGuhjwq3XasENcPhBZyUK4sQzJ",
  "key13": "2AKK45m1Wg8pwap4RjoANd6tYuxVP2fFEzV6TmLoLG5Ec4yQMEQ2R8teE7kwveS6Cphn3T8pYScGBUUvrJuvP2i3",
  "key14": "531wJaenrK4b8Qzk4MKZatD4Kmf9vzMJ3EvmqQAoZd2iJUG1QDLhJSDzhn8qBvZrc2NDuNcpcf1E8qdK7epSv2fT",
  "key15": "34mW3igfadkS4gpshRLYS4fEZsi1EGwHLFpHxsDkaA7LvfFXmQ99dKfkRTG6QFWvJft8oaYt227A9KVj8dP9rck6",
  "key16": "5HZsZhmcckLXbxvSvJfzrzTNuFAKEwck2Z9hjqMt3FzDQciuZo6i5qN9p2Fj9NGUi2wpmRVutCaky8BM6HMhT4ew",
  "key17": "5sVYrUncskFYUMDqvUFHDibokrgzpVEnW25BeJnLEBHRwbe1iQwCrXooEBzaj5butJZVH3w3mfLVPb1wAjjuAv6Z",
  "key18": "4swHgff3Lh8zAkMKf8Dtvy7bhdogBJJ9j3sZ5r9NjCWFE3MzgByDbTp5ijoP37QwEEEQMB2dCdHZy3jetBa9ZTvA",
  "key19": "3M1i7edLEydA2VHT5QuWCB4HCyVmpGFqKZPjRmcMx5uhiuTcaaZqEAYeeZYdB6rWRcjgLmZDBsWAbiyqveJ3wHbB",
  "key20": "2rKLPPRknUAYDw6cQ5h81BtdB4fLkMhySM5QWjJhQbhbw9WnbVCdwrPQBtLJZXKiYT6c5bwjwdLoZp7rA1T7qvct",
  "key21": "Uz8xRscKAMJLChdJaE5rMmtJgZFLGJvgNTb7QtchC2z1CHtNLZX17p4DTLSeqhN9VEegSNzJdESuiMrYEE4cxZL",
  "key22": "21Sxi9QcN8fVEKCnxjGuJjtDq9L2Y3XLNZCDgSQEMSdvDsrX6X7VBasFWnQXXxeAoGMeux892pSJreZWGnnXtSMA",
  "key23": "4grLWmkQwFbygYfRPQtKbLBEgnKsSG9u8XpAdPLnXhTtapt9jBHJnb4r5BufzaJ6TzhCwtaN7meCTGGUaFjMos1g",
  "key24": "KFEi7mk8p76Z1nvfXpScEBwBiZ22ZKomFSNcsC2nM7nNoYdLsAb4n4G6ayNQRVZDZNdAD71WWGu3ufYqBVDUaWn",
  "key25": "3u6Mg3DqCwy7yPFWEJN2vEKczj1C3tLLcu622FCmqZdLPqotTpALQZ3aDveMSDP6EjwcEnpm7GNWVejejEq8Q4CE",
  "key26": "5Vng9qXt2KVuXMLSCzvw3vMwGmWB6bZu7aTnGtxeQQU9bjr9ruPntuyiowKK6t3fXiy14oEBJRTjYZgRSsi3foyU",
  "key27": "5vaD88qXjDiWjVbrsUsad6iR1gydXxZugrNeZCKVFngebaEH5Hf9sd3XKH57nWZKAevofnYLq7CgLcwFSfpiHdNp",
  "key28": "2vNkkGXNKG2UxSSo14CZ2MvJcd9gPsdSzJnorFa4JRAZPKDz2R3GSe3aCYWRp4KCRwjG4MYmeeR9UXfrT3DLU49k",
  "key29": "31dQzADV2asAdh83pA6VvxvMw8cJx7NMuD18e2Mpjf7VEMgG1873ApYdpSQQ36nduy1i8Pffmp1b3C3K2mNGa3iM",
  "key30": "5qycsh7UCBiacRDXRm4kA6HcyegJkVDebZ4ESNEMoh5bKttAznzFpKahSoZzgn1MDELKmXjhuhMT4u4c1vrThSwn",
  "key31": "M3VwbKQsmUj7xqZ9zSTsRP5wadpud6ZqvT1xh4bXvS57tWYPMi4UtyFtPL42QwnaJBHCszmj5GtaCxZr1YRGVVD",
  "key32": "SkqhEeHsStoyLtEANq2ANFgtwekfHyf952vPnQfZ2n6ugzGn5iG2aYztGMvDsqQXqEEPzhXk3uiJ4EHVCZ8hjYV",
  "key33": "5CMxYPWusZiVswWJsFXdJ17Ra3j7NEUPdh6MQLRhq6Q7N6q6NYKXmZRbWz1PqViTvi22M2a4ezYVyVwfu6XSkNVp",
  "key34": "uEsc9ogEULFdWLoP4T6szrASZ4nZLBSXoLkcidt33US9EGEvhf5ae7AYSwA2EVdBhEVPZiAofj1QjxSxyBpsdPy",
  "key35": "4ES1HxFCHhaNfUwyDmHoMsaKuisnbrNwR1giH7J9JcaRRZ4Mf69wiisLmUgDT9zkNVnTZEpRwYva8cgemP93mqJJ",
  "key36": "bAvcSEL4zHrKh6NDzHPMbv6E27ZsqfSdMTRaPZzy7pCBMiUkn8FArGUMUUFsGNYq9M7w5GNP7BdDiiUCBrjCvBH",
  "key37": "25766CgyKu55gL1cb4ZkbxeCxcTpJuFf4ZyqJNN3VfJ8tZazrp7r7VhmRLbDNdB1wREA18Z3hC7vpMuH8M4fPrv7",
  "key38": "4sQHnQexeyPsJjD4v18ZfxBtXvV59r3CxdkJYKxFhNVrupiSRkhbQmJKvrhRmM3yKYJJm6Wa8ZWUJqpgeWgVmUPR",
  "key39": "5cYuAvdj3cxinwm2QDcjz1PuM1ChGD12r8EskTzJQLMkWAP6JWcV6U4xwcW41a6ehZ81qEeKm2nreQEKsjhGzcAT",
  "key40": "fjDpjGhsRith51Dr3otdS93myN6jRKRUgrEkX7ED7KcHs4meb314Bm5cF8x9WJQPS6jVqyY9Qird3ZKvjpoDvs6",
  "key41": "3Ejk2vHxHnFeWCaqf9AwgSWn1WGucEt13ujVmPAtqaXn59kGHRNuXwfK5Kg7XcTcz6GDC7QSCb3PhWtriEJeU4Z8",
  "key42": "4mTJnJp8GRFSr2vFgJvpojrXL5HToqehZdw6CqtN53tbUVbpDXmKmiMKP74voXfZH33TkuJBKt1Aeb7h4NqRGqg5",
  "key43": "5ZsxkzfbPhkMrWDdsecuMqeFrD8icXQKKtD3EiXacqTPrdxZWtqRgJtyNV3hCm2CxGTkRdN5vj4UvD2oWU8KCbAF",
  "key44": "4V9ECdm5WCh77Ns8QbqokSsD73XkoGwHskqc7PRiXD2Wao4XnZ7NKDY25QeuuCC6a46yy374Ff2xu4yeEK8hV8F6",
  "key45": "GLq8HfZ7cjkGsETWBuT8mV7pFaK7jb6sSTpAzmzF9qRnSmjoiEsZgQd7cai8mUqFArAWfij7mRWvCx5mUif1NMC",
  "key46": "4oSBrMLH5U1qr7EwVgQcD69GdCnnQNfutU2bVZ2oAagtnEU17ANffNVQdEiuapmPYFAR937FrmNEwXV9swut8QVT"
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
