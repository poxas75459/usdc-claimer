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
    "5X9WwZdDkJz1Y2siHWbVoao2a5d1xsfuwirQ7Z23gzH2SEa8vqA9qDSBMzGvFD6zH9YWC6SSBetoEGbTxq75PaWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmiX3xyBgtu48qDf7ffSFxzLnfgWvqgn1WsbK3tkWkysq2vH3g7PxoL4x3Ys87JbBzHfspZ9ec4wkF4Qb76x5Gi",
  "key1": "PEkmwja2wbrRzR4ocQzeeap1C7weynwfzoPAPgF5JuyoTFrkU5Q3TbQnY7oCZ2wyAWmNcPUofA5rrSKejrppy5N",
  "key2": "d2oMdNdNCeGpeb1rmqYFnCUY83J83nZNGLVuRfoDcmYXQsWxk2F5zxHYS92wzhb4eJ33ioVzyUCKphLD93UqwJ7",
  "key3": "2X5oxDPhVVTkbSQ9QUr4etYcZeHDYxw7v3SJAjeD8k9cCVafrrYLdc2aUCws5ExvspveSdbYXvgNuhWtbgbCzNHc",
  "key4": "fpwzTAAAZbPSh9HrN2RDH6237t3a89tFkzgzM3w5o5njk7Sfj61MgU6zeYNJehxiVkXPiWR11RH24gXHmZ6vgtf",
  "key5": "4Kq3V4XVQFxn6WU3XiAZB81io8Ufk3NyNrZGDqZc8jn7b4jrw2QcZTvT39c3BKb36r7gGbu4viJjn8X8PkDx55aG",
  "key6": "3K5n1XdE7irmxwm95VTFikuESSAiPxQJTNQ3k2hUnuXkwkVbtVvFnCFSsPY5cFnjR8U7e7MB5XpBHH7DvbZQ8thb",
  "key7": "5k1Ln4aS5SJ6aADp85oTV5syzZuh7xGU6KAZZ37z9zbmeVhcPHHwb843Y1gMv3wGDUy2qAaDibLsAUqmXzhFVqeY",
  "key8": "5dp8F12TzfZvaG8yzfcHxWhDZN3wE8xpsh5rhq3ZXu3ZhQAs19AbH7eA2VaXqAjaDzc9Zh7fTdXRK53Ph3RaGBQy",
  "key9": "2nQHymn57ZoM6kMiWXjRbPTYqb9UasEemGYBUbaVa2LhnZ3LgSjNeh9GebsNQndBTPuRGVZhQGKzR8tyvZ2JYcx5",
  "key10": "41yFbJKxMYvyxsn2tSfxcodchrvckbHrRyQ4wJBoVTEEQWfWoUZxgNXTF6GCNHsBx1gb92TN8nRgGiQqP72js1vb",
  "key11": "5PE2EZAUXSNhLovneFwt7jzDWr3fAZM4ZHFPQwwHs22BLBWt57NQH3BuoTJ1Q23QpHZXxKg5gyzMyjtZqGdpb2jH",
  "key12": "5TxFZ2kksXq4BNq3xb5fQJKAokLKrW4L34H4FpkrdyWsKJ2q6vZ34w6R86SgSFeTDJN6BQ8Wmr3pfatzEp4xh7J2",
  "key13": "5gK8SMiuvBfPTqmWKUmUU4wcAmUP5KrZQRFhDkgtFZAWM4SWL5jURpMeB371VVUMzKkCntvhvbrP2Jj6qKdev2Ry",
  "key14": "4ekfFWHghWsEh27vYu6TxPdV6z1Sa5xW7etbuVM3wJDnkhR9eZeXDUJBHZREYHzLxJnRcnnxas27ZNoaXJzzFxhS",
  "key15": "krECoJTg2ye72tRVx6zGfsq7h1VDt3vfynhuXgFzPXqzNgx1hrgQf5ngzuJT2pJH5dco3MUkZMzTySyqwrcHWRp",
  "key16": "3saHcHevgM9fqHCPTYPVWWeB4yHhfsuczK2SHiannGhpgj9VbCkFUCXTy17GzywM7CEKoDaMV38JT9ua84wGJRZk",
  "key17": "5SiVabgngVXQigkfdYVvbnVjqKkxyqWZFkWAsLTgczBtiRHqadYo2bVfdAzobqua916DqhSDjEQ6wzXNfGKtGhFK",
  "key18": "xbdbgoejUoPaPNvkEzxtufGFNKXCdABJcfMx7vDG6ahDH1wdGwSrmFQ9yo6KuPnGfyUaE9nhdEpFQ2JWhbrXjp9",
  "key19": "2YLwYYTYUXsJosdBRNUg9tkhgMDHezPBNd8VhUh7mKEbYZycs7DZaNXPMNEm4tU1VQxtiLZ5819Uv4rmw5nyPA5U",
  "key20": "9oz7aopqNC4JEU6vFKj4Pu2j4yUnuBqYt9qF4Z6ae4JzVn686pWfPW7C4DTXhHziKynsZx1ZW3Aepg1Jmq9dB8v",
  "key21": "wux6Sk15hNKzPZzcAEe5h2BXe67RN2k4KcNJej3186T66LPi6N5CoN2nRtd6Wvg5W1cyij1GwmeQrySwtyKXAwj",
  "key22": "bnhBK2PoiDNwD3EECe32DS5Sdnk3pzfZzRP4PvhXTiQjxGKG9NF84XxSkdd6MZyvimLxQFrR7wyAn6HanKHXHLo",
  "key23": "5jS1Jmj283MsXQvLGRzzG5wbNgcxqM3puuMBLVgYHrY5RHtgELdiAt7TVmoVKeJATTp4R2ACM53uxUXnv9jHw8cx",
  "key24": "25uQTiLEPAC6ywtTDAkYs8ZCbkXesX6KFeS9igeUNjTbh7zk8dsvAB8YzJDsve6VwsMtKBVhTe2gdqEonbRB2gSh",
  "key25": "5tdkzKsmbZ1Kvo7jHxhNioJ9vykwLkiCHcqotoQrupg1ZyAgbDX9x3ThBuakbMvtDyT3kfswAG3Vm3UhzY52XGue",
  "key26": "3DxXiTde5E5jLSrQJcUQ76L1mn3WSPNsimnYsab5ThbMx4YxWQRHWByppkUW9KYas8eHAFo2dEN4TN2HFtJ3Z4sa",
  "key27": "5XbUAuMAvgSAmryRwyFCeTS8e1yPfLtzBPnCUTDcUpEujSHECeKDuznyDTJx4PqLBKwsHKZXxgffCaezD2TcLfWE",
  "key28": "5s618FCbVFGH7cPvZ3pD1jnWEhNKkSfvTURjgf2J83TyFNHy5o3bLMdZfBB8kvxDYUW67pCmPWnqt5wErRAxwyVT",
  "key29": "4H6JupqTLbWQmvXHLBCe8u12agCLkjaBHNE3TRcSXngFdXKRUyZ9L5Lwwu1tJ4voQq3JrYbtZ73sFgZfLj8qwHyz",
  "key30": "4Zu1DBN96EBdUjYGjnN69ZEstToS2LdMCni7f3wHgdnxCFmVxURGEk1NNKprNcrPwN6fRS9Aj98nwjtDEUrbeFV7",
  "key31": "qvy7ZKberDqDDfQm5pVacaMVnHq1kGrFANV3eRRDc7bjd2n1tKehHCEW4ZiPYCWLPsQjVZXiMFDXnNtTxCbj7rb",
  "key32": "4qgCNybmfSDb5dyVyqKELdfyZqYL7M9uoduVgKm9VR8CQevtwfpfmhCSACc2KrkHGDemP5CMUsNbVs7UKieJxCsL",
  "key33": "3muV6CCQKmcZQqoPzT5TZS2CVmC4eLY4VdbVeQugDvAARW5B53RjHCfxUhoJ6XxxcJQGkW4ytBNLvsTNdsy38R6j",
  "key34": "5CjhZtLMMVmqomp59bdGBEzPMivTqJJ7KFxgqNzmRYQGzvGEQC9mtc7jnKJYss2zSWRRzHEvnrZaeyjFW8ccLg3F",
  "key35": "22mQWLvbWQ5v9KC8gw6G8zrGGjjZhKSwwT2qh1AuSRA871CTZ3KqDv5ZF4smpddPSEFCXvF1GsYUGwrqnUaYQ9zV"
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
