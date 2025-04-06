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
    "2C7FcxRTtjH7ybyrHFYw4KKKiWyKkCB2HwCMxcYbrwVrQ4doh8Heds9rNx9PQSwVruLtPLSXVFW3BQ1MZg1uoqdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Vcrja7bbC1ZNzLyej49kEBHtNGVqvYsjX1bAk57GZqeYKYHKD3X7q2viiLogVWLe9eNZQVD7Lnq5kLouCJWg8p",
  "key1": "2HvoqtFBnnFuGigGfVmsejAbkRxjNWR7YAYxa8cYsHBwSFGPFbgiQvdWUdNpkhzgAuLUdiUxWPBKALT8Un9pYssx",
  "key2": "5TaJemoVJfzSLCJUuTTynrLi7SupPKcxeKoTHirn4fGe7Nh7WE7v1TdUE23abQXwQtBdGUFQFGcQV1NB26CKboAH",
  "key3": "5UTPj5v3SBceekYEcs6r672CVSLrpzJs7iKBZwH3M6QPsnHx3bG8N41mjBMTXytyRC7Xx4yRW5zeiofmgY6ZaBSX",
  "key4": "2C3pF3QgoSkt3ZTSFFmq9v44d2MR8USwccqeSy2fuRPkuxRjVmvZ2kKpweb3ujFyufzp6HYvWDZzx4w3C3Ys1DBD",
  "key5": "3qNU2dXcDBkLwroScxhPKbnEEuumb3gap38fc48hkdTJ2RCMeXuMZx9NBvs7yaoYrsU4N78YJ7UGvWHQm5pKvyuH",
  "key6": "P1SrDDS2NevScfvDKiMGCLwvcBVJSezpuyjKL9dnRC3F1ZaTDKTyCLv7tCrCGSGByYvqEr8zUxZZ5BsBQDz2vF7",
  "key7": "3P1x1G17iHHnjQaqmMitLghjp3uFR6n9kG421FsWvLwBnS5sNdknrJgPwULY1DNtXCv4hSYg714LXo5oxJEgxbjJ",
  "key8": "4LH5bUQ1sMboag22vgYzwSJotcvxyTfTtAaeuaoJMSpjFj7eWo6eBAyoacV7nEhqjcptr8sp6LuQ1ihrDqSbkmVY",
  "key9": "n9SSpjDUxDwA6y6GdaqB9HazomenNUjij8BTgu6cvg9ZQZ94DmbPCuYxNbCJCx8omi74YVYNW2kBG1gVBYvf2FH",
  "key10": "uyM5ftzXbxCEh4kjjtx4wLBYuKoxgFRfBLeXVBhZ1M9Y3ogwJtkVCR8FKPRZEoQezgWun4Q6nsbkv2Q92bt7rZM",
  "key11": "26upKFkfR4jvgTRUMKTJFxZNbG7pqYxwvZCoqvdLW56dGWvuUSPY65BB4mPUM8omBQkaVZm9XbVAbHwPB6iELKZx",
  "key12": "296wLHUqM1eBwj9LLAw4KpvZsY52Brpam7LYfXmiKyAD7zewHDZoJp56dCLF3YWh5VMRwuJHgDizmQ2SH451Ciav",
  "key13": "2cjX73uuif25nTDDJPNY56UaHGoDByMsu153YFPhyjqzhga5CAo2foZJFawEG7G2a4N53gyFupryNMFVKU23eJyn",
  "key14": "2zvawo1QQ9p1PSMEhjP9GTJPiLVgEzyv47iYT3Hnr49p8ff2obRFiThWLQ8S22jPN2LErbyzznhvb1wrhsLYVhJd",
  "key15": "5Nto8RaBRZSQzcaKQje2YbK8G6wNxwuBhKu6Y9RwLWUct2hLNnudchYW1r1rp9yTEHZt3dd1f4ZotWe6d7atyGrH",
  "key16": "2aSQrBW2MreeMS2uNHL3rfrLmiLTHRfPfJwc6XAsBa3VG3FukasEErfmmu1cBp5wjkL5umKcULf2L9waYnp8DgKK",
  "key17": "3f5FJwagJuXgv2mREoJ3J1CCMX2d5GjMDJDapRSvfZdFkBDiocGFPxvYPCCRur81kp9v1bBM4c292vRgZhREgUS5",
  "key18": "3zaPNFeptZfYXqdrrYcozaG5xrEEhvNEyU37Hpxfz73pmPEqUFnbgiqDjU5anZLRPC6VpJSyrdoPFyctFieLSYDs",
  "key19": "hGxFNphrxJW8z3uc4SwofddRWAJdS3U7TY4prXagcqz3JLWxKjcYxaBgJ13qesP43cVSLhCX7KbpMF9dgui5Pem",
  "key20": "MERGCKxnsZtDBbuZMkHxnuAYLK921C7xh43NyAzJ8za3WyzmtBnDwW5guBcWC5LjcFsGaB2Y4k7V2NpCXrvH2US",
  "key21": "ndjddnbfbcQsNHPFTtpMonZfj87CsSXgraRGdqU5ryDjSC6bJwaAeCXwr5G5yvPuji5ATkPr2BuPWRvjiCJcC3M",
  "key22": "4LicqKuX6u7eWjehi6ctKezbbYVVwesMXeG9ub7AjDV33NdyCf5o7kbQ5MY8r8oBSo1uoxwv6xnYJsymHJYeztst",
  "key23": "2XsEX6yPCrwSM5nSCQ7qciAsWvdpAJyfCGH4g7DcKyRPEmQ54SBDeGjfQZs9jW274fPudvEbzpd4xHW7TSVUSfmo",
  "key24": "Q9DsWuLs3ZtVrqQUyQYfwqiCPPNFviSBW5bCfnS6NCUCDB9cxRYx5MeY4WJVh4apK8fChG57HsXmYeKnD3ncK3Q",
  "key25": "pxzjGKUaS7Vks7WeJsBELvXQd5hYHRCgPoHsov8xumVBMQQKsnS4eanwG47iLY7cmGqoqSXB2A2kuSYK6Q5rHW3",
  "key26": "4NHLkq43XUYrNAC9mThT1SRJPqAuQ6dUzWfJqKnGNYxdG4EL682azfr6cuykUoLVWwQvMDqesJ6A9NwfV3NHLcnU",
  "key27": "2CikKjanxbh4Z3DsPckZgQ4ZuE1Qcqu9dqzpiNc3EvydeQdHTXTLbYLN4AHxpm5mjzSMixNEtHPqeWnNagL9aSCw",
  "key28": "xFHmBj8qPvSYutitbipXRHBNpCzzCeFNHF2W371QbKaj2vWYfaiSdK4Y7rYpeL9Dzniu4pJ4mSzh4kKk4U4cYD5",
  "key29": "5rFVhN2xyCgcwWARiPitJQhyy8XV5eg4psfi5ntQdzkioxZY3mjMiDj2NRDKg1YHPugxHS4ahHcL1Yy6YEZnqsK",
  "key30": "4VY5nfFVGS1UFA8vJkwHCtFk4KGvgJzVJfM2c5CirfBJ2hsRyDHu2UV42Znmxwpa29sSeCrSFFZhNBCxL6azZDbn",
  "key31": "4Pyp6BKRih9h2hEEuhnBcw7FmgdLpgVqexYKoLYEQqk8eTxYsPg6mPfpB1ptB7g5o7a1vWn69KmWXk8R8fYsAaPm",
  "key32": "uGmoeiKUW1Yfc45HTq7xhai6syC6ks7CKTWCX9J6B84hK5nwJxaxsUiT7sSWbiKacTXUqfoukcZnjVPXTnkmAKA",
  "key33": "4xTBhV9iS8YDWgw5DosSYRNSKCpRoB9neaKsGWUwfGH4EQ7dHBvir2vgXTifspPvgHTh3HxUPzSgy8NNo8ey2tjE",
  "key34": "5P85qCuUELsyKcWsQfuet5UypYJfe6TBZvBqEGK5NZKxvyVcun8Dbt6dJcESkiQzpPutyxCuHKLdJLh5Kg8Rpgri",
  "key35": "5RshqAsjvm4opwwF7MGG99BxYMwjGLGFT4jitwFF4aH1qMyi1P6Gxqatcu7e3X1SyJHS4fZMWYGP4hzrnvL5DWkm",
  "key36": "24sYURGoJQzeKpUTT2adhQG2L1zRy6s9eiVV8xGh2tvCj36GLeuyZ7V1Vho3NmBxXn7q3x5p9KFJ7KmBSfhCm167",
  "key37": "2EZoXf9gJ2DNJWyjG9FPqWsFkKKbn1tofFbzwACmpFYJDMQGQbfwP6GVkfTRXtuBqPKqrgW84vacfoZXANhqgoa",
  "key38": "8xaSk4uxa1YaLEqsWs6xogtf2YdzTt3r9GdP7vpZKRkpXFPntbM74HtrD6hkyJdMjBWUYb9B6eHEsv696RN9hC3",
  "key39": "63V96iCTkn3AvrFo75xEYQwGn6TgW1TcUHx4uMeP7ozgE6iL5o4rr5m8f3fby8WRQLfzVXuXNmgrrbowNNTiwCMT",
  "key40": "VwHFmziDm1bMaKkbVoP5MGW7GCeb5QzM5nDrPqKg3ngKFquhyLaBQv1yM6YYCoGh1UpyWKWsxuhSNL9ajVW5o8T",
  "key41": "xFUFgu4peKcDZZpgGPAGKRveZQBmMXoLKbUXoy1Q5hmo7y77TD2xUaKsCJRSkwTonACEYYzmao5692gq2XhjnDn",
  "key42": "36BvXqDpM5SLSGrMZMnHriQWesupYmVtDzR12JyndFv8sfwLWed77EiWmVhTTXXPMhe5tVFLvFhFb2dfk9ZZfsWN",
  "key43": "62CarWEJCPTdWe6zEYAmSfcfTwkSJi1etwZw7R1YuKzBtgtsNwnCHLpU4E945shCXeCJdMAf6xUffMEWAry8tGZC",
  "key44": "2wEGwdqGtyAT16PJa2a4dQds9EeABEKmhwwkmHedvQVrMpiAYaL21xAtQ3nAPvQMf7Co3b6GqhdTMo4gvoM5vrzi",
  "key45": "3zyY1riP8hFDNvZ8UQN4vMW6rvGgbjCnahaWMd6PXC4iJVF5pfHPm7ZUo8xTuCta7VL8c5Xixhxkv4atXkQkwWhB",
  "key46": "41U7xv9dqVohRT3CAd3eUm731r7y18kq4fnsZ5oSmHq2YUu76nUehQPrR4HkZxsPdmTJco1TJzUAY9ejcrWvZx4i",
  "key47": "4d6DMDoy8WQtiMrSSJZuY42iyZ7UgWjuoUxJJFXjhv3mNqTPAbi1ZnbSkUwcq2kdNW1VXM8sQK9Jz2HzKyWk7omc",
  "key48": "yYKR8E8uVkEKkUTMq1smMyMFQ5zZNqHdYGPCfaTee5simeBzseQj5NL8oH9HKoPfNjxBBre6ttBsc976pibkkCh",
  "key49": "3JCCTf3TYJHk7EwYBjjCkxUrs1EUhvfpXNzJegriRp6xTUFbcbev4ZbM2kAeNT7hTYXMsnaUdNcKwpi4VSeFN3Ai"
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
