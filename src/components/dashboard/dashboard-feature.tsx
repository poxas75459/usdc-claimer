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
    "3uQnxUxHoiDdBAehPwkNsB6rCV8B4e9a93G5mqGD1xekJe4LdBgEmjyraZhAWrp2LKhfLkDQFa2yNsim9JGg6QHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hiRxXzW38F2QmP9rfT5nMJrGsQx7CErja1YQdwkhx9bwDNw1sD7EAxGF1kjqNsmtKYnvqLKCudTehrbUbXRPLXx",
  "key1": "3ffbTKEyc8EcKLmZGjWrsQprhLqWBsxrCZN6iZefm3ZAmLE7eyNifdTmstryut3WJspKBLoPNMoDFhDfSNZyiaUc",
  "key2": "5n19jSy6LKf8eVK3Mu71g1Vwx8bYpvXm6iaryfKJ6Gj7GrtG7LX3vzKVkYNG1tgDUh3reDMigk26EU8waBvRm8Ah",
  "key3": "5rRpC3U8D5YBPTYMwB4Mdq3RaGiBfTkSuDTXqmFFi97GJbAfMKFxvyCRmyDndxg5awDv5faEMEsZEW5FUBYzGQUe",
  "key4": "4f5q8APAmn2Za4RRpaoHyHRbE5qcJ1vnVdtqTyXSWt44mmi6zMFrA2JSpCSrAtzUB3k2426rsZvwaD71M56RXEM6",
  "key5": "5QgTgwbzBD49ivNPUjoMPZBu8cYisKZSfFBes9seuWHHZm8GptJYfN97fMqaSZ8NHffYj6zjLpvqyHQ3aKmKBL3n",
  "key6": "36YCmGdcsr4EMNA9m3Vtm9Me53KvhkhbncWzYdGoH31GBARmgHvb67frdXV7k8YkEtKp27nmqWsSbtspWbiA3L1q",
  "key7": "Hu5N8V7MLTVK8DpwdqnD69mKMY8jHWUykkFkAo7wsTm6KShYGNv19hfQg2fD6unP4RbCxngwc5u2WufDcVKnRBK",
  "key8": "62wYFHrSEHWZZfEKPiJqmyyfHgjo5AnM1mULgzemYwatejp3nMCKZ9phcpxsT2bnuKZJxLywH8xDQeA2VShdS9Bu",
  "key9": "oFSxST2XPVc2b29N46GaTu7Grv3qAMdg2Arw7FQM4LiY1G88JALpDrrf2H13YvPg3xPves7EvwooocoiSHpzv1k",
  "key10": "3btw7kdwzvLA9V1eqTULZxa2PukreAET6MAqmYrGRmS8e9etWpy9mbjtwExJnKXkQdeaY3ii6CgjQUy4SRhKwh9K",
  "key11": "ePJnYMmWi11guGr5whFW8pdtK7oeUWesFfFvDmhLEXMkiWA2WwMtNAWPasr74LBXfACKDBbHKDB2qsPxd6sQyPX",
  "key12": "5ed8DD2tC3LszWtuBWD7KZpj9kQTr2cpFMpbeW4YuqrkQ9ZRB3MPiuEjiRR1PVXLz9CdgY8EtHS9j8Ypz1fAfYr4",
  "key13": "3fv1oB48R9uGbjpK8z1f13t9doxNtCcSxCn718ne2awkiNCvSePEB5aRzYWBjuJQcAAKzAb9v6oYfEZy1KkGRWmw",
  "key14": "AQ1UkQ8HqSwD6XuVPTbtFZhbT3dx7p56aSWZZr1CPyYfeXQF993SwaCVjHnVcSGnJcg2oHvYhSrccXmrvyWnAxu",
  "key15": "5AMK89Dhuc3nMoCJjndwfRURT3qwoNSTMRyE8bZs9yBgX52ieECCZBAA7EF9sMiBQpB7vxfg4cZRNYwj6vX4oRL5",
  "key16": "G7rD6Crzh3yzuRK1TigM5zHxEf2K4g9XUmoXcH395eV4vG5JmYbUmym5VhcEZx7gmzkyxW2VRG3D878pG5FrvTf",
  "key17": "37SLuzWi8j3nSSwxnrZP3Jq8r27GgL457Whurh9BWWHCEQ68wh3RdAmDNwW7YNSnBVqMn5quUXommYj5QJ3tSvMx",
  "key18": "4kFgYYV3eCfM2fKamMVUVEjxYJiqUKK1D1Zejr4J1EZ6V8mZmfyCe9mUsM2sBFMpqoHWZgdtjSDtTRMwT1F1Rjov",
  "key19": "2z3vNsR7QZ5Uq5XMHmH8SuRNzMogtGt56bdmHjjJC61jKQsiHy9xPKkzHe4uQVFUUuh3DVPgHC131BtYrLsvRRFn",
  "key20": "3MGHnR5YJK4MVtH6W8ZnLX5BQnHNDW7hSrYMMCyP3jGYhN8aREnypgcYtW1TpVvrd72DpTYE5yg21gVzJ2RUsPjW",
  "key21": "3SiYa8WDHUBfJ9yQJcoSMXC4Ezzea3SFXa65RcesbzBHGZk5tpuyoKn347sm3CoNzFLPm2rRaqDjgA6jEvU5hfAV",
  "key22": "56KUdnPhe11XxKL1smjwmM5rmLTXXip8eAiDMRiFyKTHYZ3pVBQkJCLAMD571Z37kQLkgnswY7hd1VCpXhtesUS8",
  "key23": "4YsD3YANFj4YjMahBGbJ7jjPYxmVtzYADorqTm8i5VFNnEvP2JurmVu8xpLXQTDWVWMYPtRKziVdWpHt9FuFoiKi",
  "key24": "4EnhxaNoY32nYa9r5SxSxrYzejY7Tss7w9TaVVsaXGtjZS4Vva1RBuAoZEmkaJ4zecydUWQ3z7fxEAdxf1D7kPs9",
  "key25": "5GmYQ2Rq3wnHhHYhHzWV3FPSQaCsedACLj8jHue3LXWtec3gbTGXzujVzWPmHLpfKhRZjbnCkXnyfx35C8YgeuBK",
  "key26": "5Fx2j7R2Lk4mkjhKvBx2aKK64YmbqSG7UnDNAiQ1owPAt2E9MrfnqZErng1x4Vn1HxWc2dsJxEiVcxxkSMH8Q96A",
  "key27": "27dJhQqxLaP6wKhAJE5Ejis1sL3Xqwy6LaK97nKHVuwVcCxSiLimt63gx2SYWoeie3ae8uMjpFb4tNSLo34bDL8g",
  "key28": "5SrcEE9riW6a7ZVGyPSbqWT7RzsdcH5PdnSLxupr95EwrhYQLK3GZNkeD4zrdbHMXYrT3hoEgi8P82MW7GYWmKvd",
  "key29": "VsGMCoPDLLinhUoqtWwoeu8W7dLbbNHhcfBSqm62VpjXqemXGeau6UuWC1jBnvzjWaVHedf7qo2UKsBb6EFBSkK",
  "key30": "2jmLF4rzYwmcHsw1GkSShEAZufv6ttDHDqy8djBhMp84hhjiixRjiXatZ6gnLkUTsMeCR9ks5vD4E2tKmdj19C8Z",
  "key31": "4hVbykwhQrFhcFLnsqHHq3VcABMefEuenj7iqB6p5ibfwBAC2xaz3WzAsDsTVSdBUCV3VQEJ8MJA4zUL1crUC6Nb",
  "key32": "5rF128Pc7EargYkGuEFjM9tw2SmWmaGkB2TWmQUwiWsgZ4UcrAXizfewaPRkv3fehpDPSqJRpKZ9dZPaDDiU7NxS",
  "key33": "3452BUTAwtqfPE6VnbejErLGRkKmHBXarFHTVd67bfhX4qEa2zz88CPT3ottcLUY3YNKLZ1TfE2EcjrmruNyFRkv",
  "key34": "3AkUaFgTvE9Q8U1EwgeR6rGx9fzyof63vpL6HqyRNbmAb7pWPzUBD47rRr35bVRLuAdFeHwk5C2ei2yMuM5UHzsd",
  "key35": "3oG4WmzLSf78Lf5U2UpW8k8GGPqQHFSYGp7yEnWYurhThbQPDHoPtYJqyN58oUHCtRttECixLaWxFsWaqCHoYFKv",
  "key36": "3CYV6VXgkcoKotWSt24aLQSArhbmrLqMJa8LaPUNL2LqJKQnStSpXCJBSqk4ZDoTSCbrV6PUgsYq5j9rq9rdFL3A",
  "key37": "edvuo3W266ivrktmDiGX9DdUnUcGF1eZRVuX7hhWY65CVGi662L8wYBoQ65eTPQ9YpPkpfdUfuNAXwJjcudkQn2",
  "key38": "39bdtn6VobpfJEG2Kqxviv2abarWCb1iHoGBZfS2ACRjqqKU1LPQ3ebX85jPM27XF7hjqnHPU4CfyutBTXGcEeyu",
  "key39": "4o414WCW6yinqnAX8K1RQo2ycS19gBkvYcuQXoeCZdzCwB8YUx1G5oskctNUfrcpveEYqVFpEytPBEMB72UTY78z",
  "key40": "2dBK2fZrTunLaL6x88hqBPCzHDFk55BArt2ecrwZE1Vjxiz9u9w3d3Jg8Fe3d25zBknZmMY7ESr3TN5eJP646Z1K",
  "key41": "42rTtcFEQEGMPFeJKtHyZi79kbFPSa5RDXVsyvwRi9HSTzAEMrsQJqfRmHK8bYHMds8vjvSKaVWTNV2FQPhHmATS",
  "key42": "4bJ8BofZ5KSjLSgHRE3as5Epmq53uDKypBDZYMoVNNQ9L3GRjqEquSMFb77rqtYGyRN6a8UfXBimHUhrUC5zKXGc",
  "key43": "43xY2YQNSJHxTn1QMTuPCWzC4o5XHB9s8Tqvi1KoB6JkrwbBFM5TV3v8pFFsvtEn5Mw4d3XB5xTave9U3w8aaret",
  "key44": "4RxWRS22rX5655GGsScX77KwwB33qsxiMvfEeGEAYiVwQEzqNCj1crTz1QAjUFXMMC1mwhvrMPcshJLFwo4cqRFX",
  "key45": "tpiWGvHyd4Z3Li785d2w99WTELUXXbPG9KJSFPCbukNdPM9h9iSG8jRWWtR6nVcM7iwmAQyotxzEhUtJWSbfzjB",
  "key46": "4cdCDtF6FDU7Dor1zaDiUXFdM7FZN8wArQp4qhyNGV88zsKG924GtXPhMUyNELDjg7So52QKCnZuRy4yfsLHSyrx",
  "key47": "e5RXDGXq4dQnGMN63jXhXMvAZ3SFwimsTaLNUwawS4dRVpKaPxijTpWoPi3TM9uyxw1CR2mKAFbnzpCnC4qxx9A"
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
