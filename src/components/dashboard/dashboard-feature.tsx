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
    "5wvAHrw4YPzyGchXY6fJPiZMwMxt7i3ZAKeZKTxNJ5QP54HtUtpPjpjcKSwkaxz1dvZBgLgXk46PpCXGjfxaourc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdRP1ZEeyCqb8om2AyzHDcu63EUExg7GNYGZTKkSbFzsMJkQL3hCoxZrt9PBXBkEtc3LNgz6eMVzgnf6tYk93Vi",
  "key1": "4YhA5kvqb5eEySicSWrSpt316jsgt7Bhu92tNoNqtqFNUGtvXTdGsM2c8VKSPcfDNDRVYSXk6rao8KtZDx6dtLRj",
  "key2": "5xN5dqruks5xdgZKQiPu13P9g1BqNppmZjTLhTs54BF476wzmxbQcqc31Bgcsyi2o9h6EDyrz7vFiFVzRhcXvSrG",
  "key3": "xQsSgQ4BkPPdWjzjzC2H82xL4TJtqJpbKHArn9mowyBAVKbBsVnAURWRfkUbSbiaKGRw4Qtf9DyxUfNa8VCnHUK",
  "key4": "VrjaMeN4z2V9RcvjsFGe1oPS3a6pxoqaCG19eBFyzWEn1hzGkQqDR15iL1Hy6bti92iCwXAWXWFGHoiuyXL3NRb",
  "key5": "EZi31JFXZcDpQNVPtFHjFTZQxPBoALywRzZ92HaoBM69YCYu3z4unNvV6xiAgA9kExjPiYcLdfdyjG7PvPzpFAs",
  "key6": "5G5diEhixbYBDeeLbrTResa5VzxK5tkrH3Du3MSM8apiqqpdkA1bf4wuni8dt3qqGTMgzn3wD9DH5Lv34W2W4U3x",
  "key7": "5pHy7k73e156EWxq5fzJZqhuPUG56n2Bnto1BspDoMDGBUcRVhpDriud4aPtJBNAm15weDEFFZtk3pVcTyyGJxoP",
  "key8": "2ooaaEQm2HTgqfT4BniCbMD4GV59iqJbhg5bMWS33uYzLwrthMp63yAP7qJCfnxtakBiWn4s4SQVQ8b9uX96PnRu",
  "key9": "4yF18aXQ8VHutskFKjg3VD1AuGYufb85Wd1ptqTd16yRfKjD4Q8d9BpqgNLzhiPE7bUhmYWmHUbmGyacHyPBtcKv",
  "key10": "28E4z8im5b2jmYtqyFDJKBLdgHcerecjSkJUN5jmzWdBLe97gMwg3XUq4EgcuEkbo1DNaUy8C5rGZQd5tMGX3qxv",
  "key11": "278dKuJYYi6ZsJP4NyvUnMSTn5ktY6GPub7ogvrfxNn3xNpzhpbkoJwLja7gFvo3h5NeYBSEUEA5BfdNMXxi9w1z",
  "key12": "4aVDvH6Cnq7AQE15iGRf4GvjLTtjiXu3txmgET4k8qgAgp8RBaWEisy6gSPoqRmuqKRc6i5se2vkGZ53bh3X68Pe",
  "key13": "2ea3Lmsm4vH59qoozbwNXVcLpbj2xjRJpBtZDKN1MSkERJDCMf5LwAUZAEJKyuV5kjMcGyEMM1t4AMAhk7RTWoSs",
  "key14": "3WyvaiFjmYrL68CNV871Mse8ytWxeVLAHpW6JDyAizREjvX1AMQaYEy9tBeiiEYpyP5qu2zciM7PvjnAS2Ht7nJx",
  "key15": "2UyKTDLMFpiXyw4utHPUVQG8MXL4dQHo2WZJTcFQnv1LzxaGZQxP6AafLsPhwm73QwoEBB3LsyYYF2kcVtEHxYJR",
  "key16": "ayGqK2L1txCLCPjNq7NWmPQY37h1aPyLBrkjjLmoj3izouSki39jv7ZtBiGMx5UAHgKzDs8ChLPSRe5bSVwb5AJ",
  "key17": "2DhJ8Gee6BcHmEkuY2wSJnkgVLkpSq8U44janKBrxUrTgrEGTUVzwJ1HBq7Ju3dnnXaPbwBH5i4suBa7TBtRoFuR",
  "key18": "4dDuwP7UC8bqZvhf6aSe3rBj3Er5sGufzSxWPyJXBAn8d5aPGw5CzjBxvsSfW1h1qSQ2SVg5Fdnbcqfb6TAYGVpx",
  "key19": "3BzqATGzg2scvhcUwMGZjkZGbL2WdxTwm9eHtP3FHhNpG6XRWnrn1UY58owQQcCwD5fZuBAAUaXcTm7rrhraREx",
  "key20": "431af5F5nQtHeFHn5SCP33NHdpSwAysoks2xEck7Fun8N8vTXH7JGMAVdwSLagwUWRJTmG6wWmioffxbgyK2FLpx",
  "key21": "2QP8DpXqGYhqBoyYSQjccq3RAJNE7oFM31y5kB5Bi9ohfAFFMB9yYck4uvwNiUC2hMQp31VMYMT7iETJSU2puq2F",
  "key22": "62HYQHo4yUsD6HZph2duV9i9Pf2UAv3xgyLMbaF2oxY3L4nzwFqJ3Ebc6qpoDqiFENtFTaXGGKmQWz4HzpQSYY43",
  "key23": "5s3qFLAs3YST9fsJUHBuR5x7dZnsKHddR8SFATjhd19fmb9kdHGXBR2jjmVQUmHKFgqwozbQeEQrKKAR2NAooX9H",
  "key24": "4fmfTLpvPuXG5VDbnLrXdeTGKs7nb5WVqNy2SB2QgGjWWcMXPdsqqEQSvzsU2ZYpPLo8gT4CttWQQwZHMtwLSDJC",
  "key25": "2HNSnzv7bF4pVbucH7xuxZcCmHshps68KXJGSmxYoA6teH5bfT8ejpwq2gCDcFP2WkG8njxzvPYxMjYgyEY4Peeu",
  "key26": "TrkQrbaoq4pxdmgqmJq6hF4sRrcFRSgXeLMEcnmHKrPHjvgcbWMqiE6x1jYZMfFReaPbcDGWzgUKTVcMdxG361v",
  "key27": "5G8ukZnvKGTCjRwhCyKvZbJJmUJasSWdPwE2pKhW6HMKzwVcvBb2LzL8yoP7d6Jyzi1uArcMAEPiKT1fXyvL9NL4",
  "key28": "BZx6b6WeHhrFkeX7MPsxKUAe9qtsJhpJ9ESqNzFBGzGULts4uqpR6Smmw9KTNvS9gPBR7vBLWYzixV1LkFPiefA",
  "key29": "63N2KgqP4GiCuX64XEFsLEByZ6YWgkmfDtfAu4ByokKrRRdPvmuLER94QqyACyujSSoJrcyBWdoT5NYvkMuBSg9j",
  "key30": "4Bsbrt2yP6B5ntd8d23bDUGZnbG7gyiKy2WPQCxfkDnnzm5xAvxzuHKmpGn17bdjWxoG99hmB9vS91cUfe6gg2TZ",
  "key31": "43Jv9owDjtvssiT1h66YwEqffWHuPouUz2w68DLXAwxAanJrkpnx9LrMZriQtsAXt9HeFwbHYaDaxpJWNtdipm2b",
  "key32": "35xn6sh3NueG9LnbAyDYgTjHYDezwCp3twMg2UVfrMY2Psn3Xgg8tJLmbpk71Kkqgm2ifHfgDtk4tXixaxVZQHbV",
  "key33": "4Uq2DrMQExjCzKSUimAJjsGqguVEMFyUDS437rwfXdrDrfsvT3rHKheQy3mYfkvYhioZeMJiNiTRFNQ6k7V11N9K",
  "key34": "2mXHr79dBPwd5xhCwMtPTb5kGHAGCFWtCAghdzcwDeMFGVjLKTMc3iscKYKcvPDfwrmbdfzW53QcRN7MaeXGTeNW"
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
