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
    "4X4ALJhRRHb9Zr4uKuz8pVgxDcFnhKxqjLd9BcXC31fHH9ZZLM4BjTAkUgADTqFLoKUtEdSRUaSJxStyYYghnEo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fntyCbg44tah6wAD6kds7XjBhaVwJgo2JXjxCw7x9JjTHBpUnD58YVibyDDZdtLktMyVmUeMdq1tJV1vbPMQKTi",
  "key1": "3cEyGAReELHD5pEXb1J1WbDJBQHjdmqQn22QkpP7fBEhD8J7gZsrFwfNz4cJvDDft56Rp7oGZtCWzoWk9pSjrsiV",
  "key2": "5VL4PW8AbS83BpCdyXMG2jnvHbkmMb3QYAzBpuc7ju7qtfdRRSTE9wv8B4NeksZDkRHVkKsgZFSCQ7VUQjdygj78",
  "key3": "59MY8RUSqoo58AAv1sfMg293tzefu59niYG7LEwu7DZNgX6o2uSWRHtj65g3wyfxdRDRzNhsBVKHkvZyLNfGJ9mG",
  "key4": "5rQS5pg67qjtJCPXSLFmPh5vzCuYg4We7Pe5ZEmC54gi4RxzWCeLWBUaajCjRXypuMGU6xYTwPFf65qGjk5FUmJp",
  "key5": "2uwWJ5zxucCKwxDN2WPDEhUXK5y9a1bX5huR6TzWJbLeo3WXGNa5xcUekq3ETxQo5sAReiX97oCGULFQMX6Kyr9a",
  "key6": "62PM8K492kANipkFy9o7N3vxqxPGvQ5kHRN7PbwDE1rR8KKKpZrVZgaFtGx3c4riSTAAzptF6kmcMKx5BmMSTCjS",
  "key7": "5Qdddf4kXC7QBpCFB47WXEKmwPtCuX7XuM5sYjz3QTf5KH4yujP1CQPvZBHPxPmR1zV4SgMXiegkyR2rzP3PA4Ra",
  "key8": "oCPVpChhPNvT7wHZbw8UrVyMWS8gVgQwTMb1v7dy3FgN4huZG6R16X5S91JwAbJDAq1w3n8DmcLPTjA42SazEk9",
  "key9": "4mPoAjb8J7VywhVqTjeZSH6dTbE81VdJR4ePyVu2uhzQJJtdUqtCnPDL9oVucQggchP4uv7HKWEpWSZPt8KAPGU4",
  "key10": "2BDBuL5m1zrUhtQpaugeDDeeF6kWUACLJvj18pSdz3g5a1TNUMmLqgrSBtZtJnBhDnAPWDnLG2cynpH5Anz2urc1",
  "key11": "3YYt3LeF6efEAVw96gFsgpiAnWUXBzFGxX4ntCdrZPhi47XgNhjyCos6VhXGRwDFzvkpsHmGmiFSMRvJLF3ZfpEF",
  "key12": "5wNPWMzzipzF5nc4nUFpTWYQtjD8zcGdoUWzjJsG2hJ5YGTNaGDYkEJ5exFsDexbfjEFxfCSupQsMNnsj9KS7ySk",
  "key13": "5Tz1ngwCruHEKXBn6AtfLUTsn4TJLPhswKHmuoyNLqaPTMu5Xo4KcUrfZjtg6VPo4czjpQ2sZoVZhbe1Uset1RCU",
  "key14": "2uFUzGETvMGEfgGr1Vejg5tGNxjd5m7TZZcQKnedTGV9aSujMqtp2urdx3AcTeXxxLJiQcAJoyGvtKNoa65jP2yf",
  "key15": "62cwU91VEtgyy1cYjfkUpTR9baCzuCZu1jmQ4SV41dozQUTEYS4sVkjBJLsXdpkAbkgFiUbjXznoLdyoSvUYfRsL",
  "key16": "39zn1bVgmsAey6G8HPKsHW3Kcs6tyQ7mfNUK4ZjHmWsXJuyFUYY4w4njiPB7DtXiAJKfBNUVSiMfTEjxYQ2fqyWX",
  "key17": "2UiZCFHfuqfRmcMM2HuthVZHekibMuAXPQksbKy6vSHicWQu6h9swwyedMwvS4MCvEQfjwgTmbx9n1VTeGEuE7G3",
  "key18": "5tWbpyBHuNZL8cp8Rio9HBB3rvdiZ3ntUtiQFjQ67gzGsCRSauUUSwdANLuYnW13tpLmsWcWg5Bye18Ywd85uMHJ",
  "key19": "4iUUz2fKAvb6fjH3rF7o6gR9ZyDCvVgjT1oJYnNi8sEKjknengPCKUS8MBuV1m9QWbZ2psymcQCRdVsB6VMEjjMz",
  "key20": "34VVj93aYdUhC6hGaiKRJjZcZyRtXa55ziVSVRucd1URkSJ7ZBKt4HQmoXQUyHudkECXuD17kyQWfToSNTmdR1qA",
  "key21": "2f7wGS5M1N8VhSv4oQcKpLMu5rVE9chJPT73LCBJQigunrv87LZxzHf45pD7pi7FyRMrzZkJyaaTZ72ekTJxRYKm",
  "key22": "45wiWmUMticLnxAVKuvJPAav6nrghauwXjm17g6aheBun9shNZsYQKXrDk3uoTmXqyAS4LhWkxcxWYeb2wSBjUSM",
  "key23": "5x5BCExDyERhywHbkswwZjuVwaJn6qknVJQ2rgBxuBZFod21AFiWMvDDqxzUZWqTTd5ji3CZH6SqbQKLcV2NusgJ",
  "key24": "cEHDXFm3UmzeY1QfjjbhqsKP6B2wBXpsHHiSpMwX4bEqgtQWSxM6k3F8oqL6oP8DUv7m9W557PHDtBJwrsmC2oq",
  "key25": "3WyxvBC5EYjoyQf5hP1MKjfTYM8D9MnFFLVhjcNSJjAohsiBD57CWZ5Bom8mzkiUukedveH4FNHUvyi8Jog9t2v5",
  "key26": "5J3kvXFoJuP3pYjLjkv2F6zTe4FT4GJoyeqZmmyKDXNeqUNHfBAVBbsJpmdoZm6oSxwekJZsFYaDbEpvZr5D2YDo",
  "key27": "3fpRT6d8VTHKXfmg9GKVf37vDwfw74B76wfzq64yMGNf3ULwjZDhWbZuuqnDAjosFQKmC7qz8jhxLbTzhwktKp8o",
  "key28": "3zxwyjPxLN4StBgTLeQnpENm4K27YfunLYZjKqLdsnDGB4xxKN2Ez71bE9m5ksucEV2yFn4eZszVbaBqBBSWxmsi",
  "key29": "3q8frgJGfHaxpKHzBTk1JosktPQSumtUgLDDaCHPPnDEfdZZGNSNR3sbiVg3k8miSJWpVbob6JGQUciPeeYvbVEn",
  "key30": "5xqmcsK5adn8gStD7TAQxcLhNQLhtHfsY5iDfgYr98ZKbYG6M4ACTeBu21UdSLrminpWHCoVWbL7F9kgYB2cyBbV",
  "key31": "3vpeG8Xx1UScEWST7cX55oBQdHKcNx9e6REsYMPwiQU4thtBUMsZfxXqeGEYUxkjSuPh6yC73wLPUcB5Y4qv3KrY",
  "key32": "4fcuyCCcudU9v1Su9ozEcYipV2R8bqxsBz7S1vo6PfUJfiHCCzGCeseD1bNE92A7KrfUdQfkNEEpF9YMYmwHQQet",
  "key33": "2tJtQxxbpjgv4fnvocADd6pBMYVaWQT7Uz6svESZKoa5CrwQPWN3BVhG5xs3ZzSxju2w6XT7nPKDXMCM54DQUaoG",
  "key34": "2CMNYnR6PjSSGXvkaWqwRipAxJGHRrXgjxyA7d3sHJRMyYYXjc781bVyqgUainvykfMKk1wD3eyWWjZBh7XrpYDu",
  "key35": "4uMefMNknfU5Xd5XLDYi1CRtTaBbusTJ6MFXqfNcscgaa3fFcmAjSv2PmjoDdv2AmTjaFun13fDQySMo38YvaZd7",
  "key36": "5BAB9ZQVUuJcVgf6xt9eYEmBCzLEYt6Dc49BDM1xh6koUNfUwsf9vjaR16FdBpkb2iChSbA7LRWjpjHVofvYSzuW",
  "key37": "4dk2zBGRz7APfJQzUd2rQYh9Y2f5xp3mSQQtuMkmvLVoerG6MnhGNt2oLxCfKJ3fezauuaZ1tyzwcnn64eM4a64w",
  "key38": "32xwrqDf4fVeVCU14BJWx8QYjeGhYKHv5kVGTYGoi9Au6beJa7SWfVr9VEbbeXubcvheakvvJQz2zpFGKTLmENjS",
  "key39": "WjVrbmAgky9s6jtzVYo4HQ5DHxQofX9g3UeqdDgf885pyPnwfyuiaFTP8LdPHNXzu9hNdURuMVibtkQggP6HVmi",
  "key40": "3ukatVBGAYqcCiJq7FFYFYmy4GDFrXSHRmhCqqVWB6Hm3yLyVZVpVQ84tGuwbqS6fLuMYfByLuynegXkUH2x2T8S",
  "key41": "38GxYbukVN5koznH9Lb4KbFQCQnUqwnB6CfWeS1F4mk4TN1yb8ucNsqbmoWS6qcEiR7SwHEdU3X2XUDRNgfMSaWe",
  "key42": "4DgjEPyTfUxsVaTUPLCJPjvzVbAvq7nRYg71khFZcUDBboF38VLrx4vcMzEryVTSiQEz6ndxeQLmzfCUtdYPkkD3",
  "key43": "4289o5jZQR8A4UZsh3m5mQAsTfuX7susKua6UxixLLhJ5gwXYfsy2Lh8TgAA33p5smRewehxm8cY8GgwYczm6s9F",
  "key44": "2rvk2HrTejDD1GmLFyFL8pdWJ5FbwMQxHvxf73trCpZ3YyBhPyy1aYzziB9nEoHhi3aD9cWe9mzCEyapuJtiPMqV",
  "key45": "ucPaGZw5zYXiDNgAQgUcU44WTjZic2ruyKMyYWn1wtkJzUGcQPFH1qXy2rK3ygxcDJ78Sx6e8KsfpgPeGnnCKNu",
  "key46": "3w1ADMtr1J9Bodi7RUynXnjNDJeePdsH23CS3UxT3S2r1omErqaAnPJgFENpoPaReCZsxZoX7wru2bpJWgXpTjZu"
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
