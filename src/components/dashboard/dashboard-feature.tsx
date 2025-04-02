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
    "4Q4gmwnuYKVNoiHS66w6DACkHQfC5BK4dHPpPNVAxMeDn526zEwaqT1TwFE6YYgTotFmipQXgr69q66MdgKc53ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QsH2eECJfZR9QXpQUetm1mPVQS5qYT67omDVNDvapVWteLqwaKz8PtSnUZi2F6cYbT1vLeW1VExvGi78giFfvyv",
  "key1": "5k6iMTaHkkoCUmvr5nMr2t77zq28F69gekDP39qVJwwSo6G97tB9NmF2xnYpoSgpGyE42Ci2B7rvvtKXWuwnSYa2",
  "key2": "5YkmatpABMMwxSqsCCr1sEiHvFE2s2v1fXN4cFSt6gWcdHk2z5WCJwtRpEi4WMzV7XFrREPTnrqP8Vmm3pkFLxEP",
  "key3": "4kJS2iUoP8zFtEBQonghRSsrAjSRvC18HvmJpL8YbjRQdPwYsiLrJVGD49hPTYNCEr8Nwgr3YdiSdHA73S5UrCzd",
  "key4": "2nmQ9ZJ66DoUFm2QipCz7hYE654NzeBjdFwpRdSFLm3EvtzEPH99s1igLQ3g7CebeWxMwVMFmKz2PJC7yfBh9hx6",
  "key5": "5uGsQaaKZd1DbT8hu9tTEaT8XSk5EUMv2PQbqicP9pGhLbo1Zie8tdvck5p3Rnx1zHGz9eDNk9BAyTRt8EHg7KBk",
  "key6": "59zzQgbbpSiUJEWKF9idEtJ9uF6dpMFNtiYpRE8PbXBGY3X3twSgbaV2h4f5xGTbKmMsnMdoBMyKwtB9Ki99kzoq",
  "key7": "4zouUNu6a28MvuqN2DFwi6jjMf7EJdbGDUuVaSmcM4zhKJxyPt9qZbcCTwkrf9P1Rfc5Cn9FK658gxjTcLdBgak7",
  "key8": "2RJZWxvEEANwsThQwFCfDb2BLpMx1J3zFqEUQthoy9bgJSLbXRHuCkMHCJuLUJca584h4Ytz5pwffezrBXgXsMSJ",
  "key9": "2yF53WW2qKy5Dpz5CSio9rXKj9Evc14ZFgL9agwqxYJwnz2HaVAHZDeQKoRV9WCtL8MF8iLk1x6korjuHVCRGD6J",
  "key10": "2BXjk7hdXSfaQkFtF5rRjudiqoupaSX2fWQXoEfyyA1fYgpkuFGxvP2nftZ4bHeWLkDKo7g6GR4MQm4Qiu8YBRj3",
  "key11": "5ajEzoU9KVdd8PCVRYpCDEhLSmcUBrtELT7TiAfAbYLSrjLR4y3kfknWHLcBDrGCAZJvMnHqvS4VuNLqRrgQmvHb",
  "key12": "4miarEqHbvuT9wH6Sm3sUovdkSnwaKMvJDftS1PRrBShAPFLhaJstUzJfs1FSmH9rocXNCAjwm5mnruBer8xPo52",
  "key13": "urh22uMkvdgJmWttZ648fjPUUy6DiLuWkQbFq3w8U9CoqrH2NCeyvXUsK3K7YrT4P8DYJapLKTAdoXwy3XGsdxj",
  "key14": "2N2t1MQwziH5u9aDeRJybkELmWxPo2Y7PEn62eQKPHCQfveW8eKwq4TxiseqaAZhJRnvJfyYtxm7mQe74jb3PJvc",
  "key15": "5tMJcc7qqyEErprHSUqd93cUZHDBQ6PWpjzaZL6HJnUcNq5NnbXjK19rTdA5rron15kYPdefXMNBMn4aDe1zeTHX",
  "key16": "4UYFeS7CgQgFd5QbxGTkYa1QJr7DZqYfDH57WmuuRiuV8T69WZMFeNPriDPC1MWFAYUF9K2zSZXATXq5Ak22u66P",
  "key17": "3WL97uRo61gBAZmibKkW9PPzHQBJxzWiSEZ3tm5HVBYX9a4WXkFypyfqaNHS2VYvR4G2nUeqC3ZTuQ6b3qTwGFYZ",
  "key18": "2osDAgvAu1XDUPY69zuFAWqV9zatizHS1R6iACHMaTJvMTtKoKXjv2uUJFQuP7HuFzHZMkYqexQdXHdt1qaS8ZwW",
  "key19": "5ACACKWdLPBf5yz2ZpSBRiMDBqry5MFGyWCQaTAbwQEMZtQx8yWgxyNGU6a7CCgH8dSR7iXhbtaBMKK2o6tg5s3U",
  "key20": "2ouVaqwHG9pm3XvaS78hjcuwqyVCfyMFAmmYo6j7eC6a49CgStZBjj1HAxtZ7nM2C6o2TdT35wLeKRqn6DdaeDKz",
  "key21": "cmiZL8haMk1sco39iX1EoSgzDaH2ZhDCqe7NwMWeR2U2qz9gni5wb9XFMs1gAdxQ1HVfK5yKU7mHQf9Sbs6FGps",
  "key22": "5dgFqFvPnqHi55udsuN5UxpPWroGHVLYZyq1HE5e6C3cRSnu8h6qB7hbfJAvkJa4MfVp29XLMoYtchtpAJJ53o66",
  "key23": "2fdAPi4qMhwuJ3uCVFDh6u7oGu5wsrT6XqDkEhaknnEGDLSQaLwBAtNxc88y8zmManpB8XUjgoFWs8WCuHCqb3w8",
  "key24": "aM6UaJxafup3un6heYDHdJiDX4pownc52vqyHxp54pH5cyBq5WHC4XHgGms5i2E8Lm7Tg3cDTssrQG16pKMBMpe",
  "key25": "5QxGwbeMGh5m59D2hjtgc3pajKFvLj8F4RoqHybJLLf8oWF7XtD8nfHhGBMBKKSNJbWDzvfrqHLpPrdeZQNeC2pg",
  "key26": "3n8YRf564Mo4KDWkd4FnmmC6bX6NL7uNHkt2SFWfCP3unHSY3PU48ao2vQ2ubTM4oEAz4g3bsK1Nuf6DFE2ai4i4",
  "key27": "4tSHQ9P6LUt9bkoBZjPW8GQrxPA2PzKb71x4A3sQGVaXyJYvSHhThySUpxorKcL8YqTqzixizLMFwax5eDNZBEq2",
  "key28": "55X5ygXiHx1AXvHQgUbEp1WLUFuAi2NEJxJL3vydhPvpC6H9sfrciGdwxJNFV5GYDPoXyubLCbHypxWnZjEPtJVU",
  "key29": "3nWygC3h6JopwHMCWbeoZB6faP2JGi6wt8G8FzG2xes2QsWixVYEHEzrgipt5HBYbRNtR3YiuaLREFCBBwR7xby1",
  "key30": "2bWQ41cEiz26G4zDBTKMtbt8DtQhmweZLtpUhhdgZFzgJm3ohhNZo3cETxyrFJnGmZEAxPeuttufsesMRxQw8EJP",
  "key31": "3ZhJW25T2gHMvV5R48H3H3f61biNdLvxR3rEM27LnCzYDT3t26S9Zf12ec7VsHuEhCcVS75iD1mEbWxFhSyNQ6wa",
  "key32": "5x2a3DBiapgTtNgjs3VGeFBBRhCxEZCXWkXmcfVarAUduxQpJUPajbrDiYBAwbWowLSK3Qiz24HvUYWyFhqfLvbd",
  "key33": "SNUyCJMheCLnSUeth8gd2fnZEEeT6BBfaLWUc3goztPzXMKQ4hc31k6vk3C3gnxFBp6pKBtvWjEMCbymaXdsrmS"
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
