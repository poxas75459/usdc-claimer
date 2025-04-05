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
    "65Y5diBGdDBGPRwdLc8kgmWfMy7iaFNKTmLahhLYF9Du4PzKFYWAuBmwgrQv5r7odz5LEG5ukf6XsNDdnChDJxT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58grjC2v39zKk4AB6GwYSn4FMgDY6ueYgmqcinNJYjcd9Q8nB3Zc3bDKqsh6x3JL9QpRcmU5C2T8TS7J9uEQdPfW",
  "key1": "5DqT4DcwkiSfk5sNFtQyifphmXXtoZXZRDkdfPZ9dzyjywAxogGuq7zbQFGAreVejutEhRTTEA2WbH3qp4EgiL52",
  "key2": "JNaR8WnYBUHh1UZf5xS6azsi4H65CaKKTbDu3rhUgKpD9Rvy6UXWzuNrkeRqN5WxuJmjinJQkD7wS8y42TtUPsL",
  "key3": "26vbTo1w42Zg197CpcDZ3ZgAgBJMEEagSCrBRh3pyFh7j8Qm5kUnBZDtKo2dhmXVVyfkG8Q6nTm1vwtEJQMBpnmr",
  "key4": "2GZk4qMjuBF6JGyyX6M9HndCEDyr6w4jPNHvZ6mwcKsq7pUUWPKQUX5HADyUwBQxrUFZxz6Khb7Qh8HaCkRghY7P",
  "key5": "5LQscLuvLZDJXqvo3huaLfAQ9fjAjaPoEhBacLtFzm8zARr9WKPsA71DRQmV99kX4BTgYcWGjKrETeY56jHkr986",
  "key6": "61cCV3wZ1An8iUDXAGpq6Q4TfCZcBtbV7SVB9nUDTWEosbcDT4czfoVbxYVKkextnwwtGcvBSmwK7WUd4yXQFgyi",
  "key7": "3EyDWoEzUTRkiiRDPTx2xqwzJkHMDPusXghCYy2uzSF9yRSzKQYtpWpTP7fYjUF52WzPN6BKq2z9eZb7NQaP7pL9",
  "key8": "3uJFb1YdCEUS7o1gpv4rXwp6JFhhLQJzTkHhViMSB23snctjLqWM5Sem5D1x6roVGoGHTUS5Ytiq1ZGEpaQ3sRF4",
  "key9": "5Pep6jp2P6vLCPQrBq7b5cWHrCqvqZedDXovaBrysmqXxm876SN7B9XeCSQGnhdA3iArpSjUB8ox3qQtAZhd3BtT",
  "key10": "2Qecaj9EEA2W5Wf5dRX3jVaZpJtZVp5HAaRByTFbFHqspWhDtSW6zxFaV88DHrP6aNFCmFcsNtxtW7jRnFFA2K94",
  "key11": "2CL1nS8XWAJiz5TcJMA8YoEv5s1KwmEki59T8SA7HAmTysqqpwBQP9cYB515hzGteTbNxi7n65dxGdV3WkxZ3uEJ",
  "key12": "3LECPWnVZVHS6xFQFnhSrV7bB3qSpZfPAZhq9E785j3pkRnkDC8pM4P1JkEJn7jSYMU85Cu7rgp36fWwYMSBh1bq",
  "key13": "MA7tK7yEQ6XzSuQU89PitXXbU3T6cjgCQBM98cZBngAxHcmtpjvrgE6WLS9mkZmPu1gYqab1YhxE7RXGw5sWvUP",
  "key14": "2x4mw3ZHBrjxXQNUKJAsCMQcTG3r45NyW5apzZaYdjBeJJEJ9vMXts7AZkzwVcv935bvFn7G6QexpyMNLuziCErH",
  "key15": "3smQU9AzEx6cfttVpoCMV3HTGpsxVP11rDahnGEtc3oac5hLPeg4hf5NLYesvys6CLQhnP5yvNTvW9EjQ98dF9F7",
  "key16": "2qqUXYY1mF757txB4pk15ubpvagU8M27jNH4ZyHcH5vGnBRmPbsLT9RdmumMNMDyk8c5nsKTHjSkze6Pv2p25UZZ",
  "key17": "4NhawFrWfvo3SfNGxiKG4LxZStpWMjEubqtJjkBLo6iPqKbQHkLwuKcZMrwGo8xVNZzbe9scKmhurzgyv9y48AoG",
  "key18": "NjMKsKFvg8iC2TPCB6w4P2SKzF79WjnB2tzoqsJE2NH7CQuAtYtm9AnLZpVTVwKdrwz5551JjA6Gf1sr86K4WVp",
  "key19": "4dyt2Z2MSATqmwNzuzX2YEwzdVLgUtNxmji32PTiWvZ8sw8ZCPHBynfpht1JYnnYhbXH2mXASjRGxVDKUmv41fx3",
  "key20": "3BofCgCKB5zorKEixQSNRnhtV9TqGseFUcHameQ818pWZwAq5J7MDB6NtepAjQHRMiTzJU2HPKj2qtdV1QBynJvC",
  "key21": "6566NaZdf3aNoNUpDUEJtpZqkYeszbLRgHEX259Bvbbdc2Bbsg7n8dHiN4amqeXqSUF7oLNUbmgQ1miSf6Wps2AZ",
  "key22": "2fEs3GBZk58nqat5YaRCZuioeG2KM1boupmzTfgrZ7yYWSAFQRUNFtEZsNoWpbQb7NPjF2wjfjcoVu5VA2iru1PE",
  "key23": "5HNRvDFPQfwWnmL1zCNrERkDw6HZQ5W551QyAYsARsvC3wERebQrfmLSW8qE6VjxotWa9fuauburT71D2idZK8dz",
  "key24": "2YUDHqhavzSYWtXjBxh319tdsQ1A1P4gxHRccLMpx1NocGvJjMs2xnYAm7wSqYPWE365VLHDEK7eddQkcKNFfSvZ",
  "key25": "45eWHy3UpwSXqhM62zKdXxGAfaeWycNVPqd5iShRM7QPu8Lh563boHXZguUXgiTFpDHmoKepsAvER8LJWJruM46v",
  "key26": "2dyczDKXKAbqqjB4cGeHZkAFmajRovShMRLGtA2mey8XPGzzH93CboiEwZY7EkR7mS7TujUsatkUUNsYxfYsyfp1",
  "key27": "Y7jr3v869tw8PV3txtnSWQLoio7Y9HX4aX3zYrjtD5K93Txzm931jGg9jbaQ88Pw9W7inXKXjbeu2QsgYYtjC96",
  "key28": "3Qmkx1sB82jecvMpXa2LNFVUXAX4qEY6D3QNWxvkiVTWUG3WLwEsbvPn7fqugwRQuZ8oXPkf8Nb6DbY29CEBTJSk",
  "key29": "ChXoUHiKkC42kvXAfWttQBzuZ38Stxmbu8YoKZUAutJBgUivWiLvdpGgTb9M33brcjHEsaKZk7zFN8Tj5VvWXmE",
  "key30": "5Q73iCnuDCwnZUR7V4tRpVhJmvvBZX5NChUYTrEcfcS8u4xMavgzpZUYGXnYK2cahMk4n55HC4NB1KnFV5gMoRXF",
  "key31": "2bVrizXZkkA7LgRjESRKU4xY3Br2L7dEM85ReiCVsPAwBAFcGn7J8u53i7EiydUQFQVAooP8GkjSJWET13hAdaQQ",
  "key32": "JN3sSQSeCxUi8yoKM1YzG4oqGcwyqztuMJP4zZCrjyELMFWwGnURukPFPh5EoR7NhgW57a2JdyLoV2gGjBGut3S",
  "key33": "5sWL73RU9DGp5YCiAyZrPLwUgv6kqCvD1DEKmMEHrCz948Esjp8Fb8zitxD5hiGmLnJeTQesyWdy4qUcjxuzptym",
  "key34": "3VJFnbgveYVwht8dL1zuzFp2s7TvTp5FFTSLVU3jDUomRTQeWw2eCa3gYc7QphGn86z1sMEaG732d4k1Sp5FFANU",
  "key35": "RYMZpfdeEkVi3fCZxEMdfBe6FBcF4w1ThKcnKi6ae4Afb9vZAf7UHxnqen7NNt7GVCohvx5jTXDVnZsUNDs3DMm",
  "key36": "3pqbRz6ybhMKULnNyeWbbG5Z6abAKqxg9AL6NUfiBZmvBSWTQQVYD4iPJ5oGbSAjiDTvgc6Jm89s8d8w7heDXPse",
  "key37": "3ivrRC1ZscSj8tHEeNyB63Wycxb5mZL99BcFkLS6ayERWe58eq7Gbaay7JkzbhAN8TN5szAEfqYJ8CCLKH57LSUz",
  "key38": "5RvGeD2CLnP7PvQQJJdbwQbmqv5SfQcgcgbN99cSyioRzrLCfL7DwVts7pLX8EzGSn433xFw1VPMr8omP9HgJdfo",
  "key39": "4Ch3s8v1gSxtVcxqQZz7PKetiVKgzt37ugdzRs9XW1GL4C7Kaxb6EnPHVsuxFrBj8KR96nyddyiJxtdKj9nCTfwj",
  "key40": "4yLJk5kA3R24cdtw4i5qGQojiagEWTsMF8cwLPXd2M7mcCpbf1u82HrcnbswEzg5G6cG6dXxgR7s9EPKWMoa8syL",
  "key41": "2qSjKDXvUHGp8hU5zQdgDXB8kQvpRpV3duCXkvuedLN5rouMdt2krPviPZXVr37TdLrKkxDqZLedXxPr3S6CjKV7",
  "key42": "2r3jpYEqcKfZ6p6Pbx1s5xLA5yK27qRHDkpE8ftuRhBwsu9HKn46M5a7BqTdoJrpAoVzKsdLoGSBeB2eCNLbgvoE",
  "key43": "3uhVMiePHDxwLHuLEsmBkyhTnv849RcqERzCbYVioJ8m3gbo7iq7uU7dDQEaRdfd5ok7zFodhQws8uiAHQp74Gv3",
  "key44": "2gLzMdAsmPQi8TZ8dvQ9nwpX2HL5D2YjPSNpJDsjub2LvipLqomTPc8pLeSE9WBarzB9ZZf1AWZykBmVzCAvArxt"
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
